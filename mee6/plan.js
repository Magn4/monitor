import {
    d as e,
    a as s,
    b as a,
    r as t,
    j as l,
    f as r,
    a2 as n,
    F as c,
    a3 as i,
    B as d
} from "./index-8524466f.js";
import {
    n as x,
    u as o,
    I as u,
    p as m,
    C as h
} from "./app-3ecfb394.js";
import {
    C as p
} from "./modal.constants-cb2154a2.js";
const j = ({
    name: j,
    renderName: f,
    nbMonths: y,
    currency: v,
    taxExclusive: g,
    highlight: N,
    className: w,
    onPick: b,
    ppm: k,
    features: $,
    buttonIcon: P,
    fullMonthlyPrice: _ = 0
}) => {
    const {
        user: C
    } = e(), F = x(), M = s(), {
        locale: z
    } = a(), [S, D] = t.useState(!1), {
        discountRunning: E,
        discountPercentage: I,
        couponApplies: R,
        discountDisplayed: A
    } = o(), B = E && I ? 1 - I / 100 : 1, L = 1 === y ? "monthly" : "yearly";
    t.useEffect((() => {
        const e = window.location.search,
            s = new URLSearchParams(e).get("plan_checkout");
        s && s === j && C && b()
    }), [C]);
    const U = (k - Math.round(k * (1 - B))) / 100,
        q = k / 100,
        G = 12 * k / 100,
        H = (12 * k - Math.round(12 * k * (1 - B))) / 100,
        J = 12 * _ / 100,
        K = "forever" === R;
    return l.jsx("div", {
        className: `${w} relative h-full w-full max-w-[448px]`,
        children: l.jsxs("div", {
            className: "bg-dark-900 rounded-lg p-7 relative overflow-hidden z-1 flex flex-col justify-between items-center text-center w-full transition-all duration-200 hover:-translate-y-2 cursor-pointer group",
            onClick: async () => {
                if (!C) return M({
                    search: `?redirect=/${z}/ai?plan_checkout=${j}&category=community`
                }), void(await F());
                b()
            },
            children: [N && l.jsx("div", {
                className: "absolute -top-1/2 -left-1/3 w-full h-full rounded-full bg-gradient-radial from-ai-light via-ai-default to-ai-default filter blur-3xl -z-1 opacity-30"
            }), l.jsxs("div", {
                children: [l.jsxs("div", {
                    className: "grid grid-cols-1 gap-3",
                    children: [l.jsx("p", {
                        className: r("text-h4 font-bold text-white", {
                            "text-gradient-ai": N
                        }),
                        children: f || l.jsx(u, {
                            id: `ai.plan.${j}.title`
                        })
                    }), l.jsx("p", {
                        className: "text-dark-200 text-sm",
                        children: l.jsx(u, {
                            id: `ai.plan.${j}.description`
                        })
                    })]
                }), l.jsxs("div", {
                    className: "mt-6",
                    children: [l.jsx("p", {
                        className: r("text-h2 font-bold text-center", {
                            "text-white": !N,
                            "text-gradient-ai": N
                        }),
                        children: k > 0 ? l.jsxs("div", {
                            className: "flex flex-row gap-1 items-center justify-center",
                            children: [l.jsx(n, {
                                currency: v,
                                value: U,
                                style: "currency"
                            }), l.jsx("span", {
                                className: "text-white text-lg",
                                children: "/mo"
                            })]
                        }) : l.jsx(u, {
                            id: "ai.plan.free"
                        })
                    }), l.jsxs("p", {
                        className: "text-dark-300 text-sm",
                        children: [E && "monthly" === L && l.jsxs(l.Fragment, {
                            children: [A && l.jsx("span", {
                                className: "line-through inline-block mr-1",
                                children: l.jsx(n, {
                                    currency: v,
                                    value: q,
                                    style: "currency"
                                })
                            }), l.jsx(c, {
                                id: A ? "discount.monthly.apply.period" + (K ? ".forever" : "") : "discount.monthly.apply.period.nodisplay" + (K ? ".forever" : ""),
                                values: {
                                    discounted: l.jsx("span", {
                                        className: "font-semibold text-dark-200",
                                        children: l.jsx(n, {
                                            currency: v,
                                            value: U,
                                            style: "currency"
                                        })
                                    }),
                                    full: l.jsx("span", {
                                        children: l.jsx(n, {
                                            currency: v,
                                            value: q,
                                            style: "currency"
                                        })
                                    })
                                }
                            })]
                        }), E && "yearly" === L && l.jsxs(l.Fragment, {
                            children: [A && l.jsx("span", {
                                className: "line-through inline-block mr-1",
                                children: l.jsx(n, {
                                    currency: v,
                                    value: J,
                                    style: "currency"
                                })
                            }), l.jsx(c, {
                                id: "discount.yearly.apply.period" + (K ? ".forever" : ""),
                                values: {
                                    discounted: l.jsx("span", {
                                        className: "font-semibold text-dark-200",
                                        children: l.jsx(n, {
                                            currency: v,
                                            value: H,
                                            style: "currency"
                                        })
                                    }),
                                    full: l.jsx("span", {
                                        children: l.jsx(n, {
                                            currency: v,
                                            value: G,
                                            style: "currency"
                                        })
                                    })
                                }
                            })]
                        }), !E && _ > k && l.jsxs(l.Fragment, {
                            children: [l.jsx("span", {
                                className: "line-through inline-block mr-1",
                                children: l.jsx(n, {
                                    currency: v,
                                    value: J,
                                    style: "currency"
                                })
                            }), l.jsx("span", {
                                className: "font-semibold",
                                children: l.jsx(n, {
                                    currency: v,
                                    value: G,
                                    style: "currency"
                                })
                            }), " ", l.jsx(u, {
                                id: "ai.plan.year"
                            })]
                        }), !E && _ <= k && l.jsx(u, {
                            id: "ai.plan.month.start"
                        })]
                    })]
                }), g && l.jsx("div", {
                    children: l.jsx(c, {
                        id: "public.plan.price.tax_exclusive"
                    })
                }), l.jsx(i, {
                    event: "get_plan_click",
                    data: {
                        label: `${j}-${y}m`
                    },
                    children: l.jsx(d, {
                        theme: N ? "ai" : "secondary",
                        size: "large",
                        className: r("md:w-[224px] mx-auto !max-w-full !w-full !justify-center md:!max-w-auto mt-8", {}),
                        icon: P,
                        children: l.jsx(c, {
                            id: `ai.plan.${j}.button`
                        })
                    })
                }), l.jsxs("p", {
                    className: "flex lg:hidden items-center justify-center gap-3 text-white text-sm mt-6 font-medium ",
                    onClick: e => {
                        e.preventDefault(), e.stopPropagation(), D(!S)
                    },
                    children: ["See benefits", l.jsx(m, {
                        className: r("w-5 h-5 transition-all duration-200", {
                            "transform rotate-180": S
                        })
                    })]
                }), l.jsx("ul", {
                    className: "lg:grid grid-cols-1 gap-3 mt-6 hidden",
                    children: $.map((e => l.jsxs("li", {
                        className: "text-dark-100 text-sm flex items-center justify-start gap-2 text-left flex-nowrap",
                        children: [e.enabled ? l.jsx(h, {
                            className: "text-success-default w-3"
                        }) : l.jsx(p, {
                            className: "text-red-default w-2 h-2"
                        }), l.jsx("div", {
                            children: l.jsx(u, {
                                id: e.name,
                                values: e.values
                            })
                        })]
                    }, e.name)))
                }), S && l.jsx("ul", {
                    className: "flex flex-col items-center gap-3 mt-6 lg:hidden",
                    children: $.map((e => l.jsxs("li", {
                        className: "text-dark-100 text-sm flex items-center justify-start gap-2 text-left flex-nowrap",
                        children: [e.enabled ? l.jsx(h, {
                            className: "text-success-default w-3"
                        }) : l.jsx(p, {
                            className: "text-red-default w-2 h-2"
                        }), l.jsx("div", {
                            children: l.jsx(u, {
                                id: e.name,
                                values: e.values
                            })
                        })]
                    }, e.name)))
                })]
            })]
        })
    })
};
export {
    j as P
};
