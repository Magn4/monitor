import {
    u as e,
    H as i
} from "./app-b4886647.js";
import {
    C as s
} from "./index-b7c475da.js";
import {
    j as r,
    f as n,
    F as l
} from "./index-e0afec69.js";
const t = e => "lifetime" === e.key || 0 === e.period_months,
    a = e => {
        if (t(e)) return "lifetime";
        if ((e => "monthly" === e.key || 1 === e.period_months)(e)) return "monthly";
        if ((e => "yearly" === e.key || 12 === e.period_months)(e)) return "yearly";
        throw new Error("Unknown plan kind")
    },
    c = ({
        plan: i,
        currency: t,
        taxExclusive: c,
        mostPopular: d,
        className: o = "my-6"
    }) => {
        const p = a(i),
            {
                discountRunning: m,
                discountPercentage: x,
                strikethroughPrices: h,
                couponApplies: u,
                discountDisplayed: j
            } = e(),
            f = "forever" === u,
            g = m && h,
            v = e => {
                const n = e?.withDiscount ? 1 - x / 100 : 1;
                let l;
                e?.original && i.original_price && i.original_price > 0 ? (l = i.original_price || 0, e?.perYear || (l /= 12)) : l = e?.perYear ? "monthly" === p ? 12 * i.price : i.price : i.ppm || i.price;
                return l -= Math.round(l * (1 - n)), l /= 100, r.jsx(s, {
                    currency: t || "USD",
                    quantity: l
                })
            };
        return r.jsxs("div", {
            className: o,
            children: [r.jsx("div", {
                className: n("text-h2 font-bold max-w-max"),
                children: r.jsx("div", {
                    className: "flex flex-col",
                    children: r.jsxs("div", {
                        className: "flex flex-row gap-1 items-center",
                        children: [r.jsx("div", {
                            className: n("bg-clip-text text-transparent", {
                                "bg-gradient-to-r from-premiumPlus-default to-premiumPlus-light": d || g,
                                "bg-white": !d && !g
                            }),
                            children: v({
                                withDiscount: g
                            })
                        }), r.jsxs("div", {
                            className: "text-lg text-white font-bold",
                            children: ["/", (() => {
                                switch (p) {
                                    case "lifetime":
                                        return "life";
                                    case "monthly":
                                    case "yearly":
                                        return "mo"
                                }
                            })()]
                        })]
                    })
                })
            }), r.jsx("div", {
                className: "text-dark-300 text-sm",
                children: r.jsxs("div", {
                    className: "flex flex-col",
                    children: [r.jsxs("div", {
                        className: "flex flex-row gap-1",
                        children: ["monthly" === p && (g ? r.jsxs(r.Fragment, {
                            children: [j && r.jsx("div", {
                                className: "line-through",
                                children: v()
                            }), r.jsx(l, {
                                id: j ? `discount.${p}.apply.period${f?".forever":""}` : `discount.${p}.apply.period.nodisplay${f?".forever":""}`,
                                values: {
                                    discounted: r.jsx("span", {
                                        className: "font-semibold text-dark-200",
                                        children: v({
                                            withDiscount: !0,
                                            perYear: !1
                                        })
                                    }),
                                    full: r.jsx("span", {
                                        children: v({
                                            perYear: !1
                                        })
                                    })
                                }
                            })]
                        }) : r.jsxs(r.Fragment, {
                            children: [r.jsxs("div", {
                                children: [r.jsx("span", {
                                    className: "font-semibold text-dark-200",
                                    children: v()
                                }), r.jsx("span", {
                                    children: ","
                                })]
                            }), r.jsx("div", {
                                children: r.jsx(l, {
                                    id: "public.premium.plans.monthly.per.period"
                                })
                            })]
                        })), "yearly" === p && (g ? r.jsxs(r.Fragment, {
                            children: [r.jsx("div", {
                                className: "line-through",
                                children: v({
                                    perYear: !0,
                                    original: !0
                                })
                            }), r.jsx("div", {
                                children: r.jsx(l, {
                                    id: `discount.${p}.apply.period${f?".forever":""}`,
                                    values: {
                                        discounted: r.jsx("span", {
                                            className: "font-semibold text-dark-200",
                                            children: v({
                                                withDiscount: !0,
                                                perYear: !0
                                            })
                                        }),
                                        full: r.jsx("span", {
                                            children: v({
                                                perYear: !0
                                            })
                                        })
                                    }
                                })
                            })]
                        }) : r.jsxs(r.Fragment, {
                            children: [r.jsx("div", {
                                className: "line-through",
                                children: v({
                                    withDiscount: !1,
                                    perYear: !0,
                                    original: !0
                                })
                            }), r.jsxs("div", {
                                children: [r.jsx("span", {
                                    className: "font-semibold text-dark-200",
                                    children: v({
                                        withDiscount: !1,
                                        perYear: !0
                                    })
                                }), r.jsx("span", {
                                    children: ","
                                })]
                            }), r.jsx("div", {
                                children: r.jsx(l, {
                                    id: `public.premium.plans.${p}.per.period`
                                })
                            })]
                        })), "lifetime" === p && g && r.jsxs(r.Fragment, {
                            children: [j && r.jsx("div", {
                                className: "line-through",
                                children: v({
                                    withDiscount: !1
                                })
                            }), r.jsx("div", {
                                className: "text-dark-200 font-semibold",
                                children: v({
                                    withDiscount: !0
                                })
                            }), r.jsx("div", {
                                children: r.jsx(l, {
                                    id: "public.premium.plans.lifetime.per.period"
                                })
                            })]
                        }), "lifetime" === p && !g && r.jsxs(r.Fragment, {
                            children: [r.jsxs("div", {
                                children: [r.jsx("span", {
                                    className: "text-dark-200 font-semibold",
                                    children: v({
                                        withDiscount: !1
                                    })
                                }), r.jsx("span", {
                                    children: ","
                                })]
                            }), r.jsx("div", {
                                children: r.jsx(l, {
                                    id: "public.premium.plans.lifetime.per.period"
                                })
                            })]
                        })]
                    }), c && r.jsx("div", {
                        children: r.jsx(l, {
                            id: "public.plan.price.tax_exclusive"
                        })
                    })]
                })
            })]
        })
    },
    d = ({
        plan: s
    }) => {
        const {
            discountRunning: n,
            discountPercentage: a,
            strikethroughPrices: c
        } = e(), d = n && c, o = s.original_price || s.price, p = d ? s.price * (1 - a / 100) : s.price, m = Math.round(100 * (1 - p / o)), x = t(s);
        return m > 100 ? null : r.jsx(i, {
            theme: m > 1 || x ? "discount" : "white",
            className: `${m<1&&!x&&"opacity-40"}`,
            children: x ? r.jsx(l, {
                id: "premium.plans.bestValue"
            }) : r.jsx(l, {
                id: "premium.plan.save",
                values: {
                    discount: m
                }
            })
        })
    },
    o = ({
        mostPopular: e,
        isCurrentPeriod: i = !1,
        selected: s,
        onClick: t,
        className: a,
        children: c
    }) => r.jsxs("div", {
        className: n(`flex relative rounded-lg shadow transition-all duration-200 p-[2px] ${a}`, {
            "bg-warning-default": s,
            "md:pt-10": e || i,
            "md:mt-10": !e && !i,
            "cursor-pointer": !!t
        }),
        onClick: t,
        children: [s && i ? r.jsx("div", {
            className: "absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-warning-veryDark uppercase font-semibold py-2 tracking-wider",
            children: r.jsx(l, {
                id: "plugins.characters.premium.current.plan"
            })
        }) : s && e ? r.jsx("div", {
            className: "absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-warning-veryDark uppercase font-semibold py-2 tracking-wider",
            children: r.jsx(l, {
                id: "plugins.characters.premium.most.popular"
            })
        }) : null, c]
    });
export {
    o as P, d as S, c as a, a as g
};
