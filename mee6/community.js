import {
    z as e,
    as as a,
    b as n,
    r as s,
    j as r,
    L as t
} from "./index-e0afec69.js";
import {
    c as i,
    u as l,
    e as d,
    I as m
} from "./app-b4886647.js";
import {
    f as o
} from "./api-b3fc9d6a.js";
import {
    a as c
} from "./api-0fc73f72.js";
import {
    u
} from "./hateoas-0d7aebac.js";
import {
    P as p
} from "./plan-ab250151.js";
import {
    u as x
} from "./useCharactersVersion-d5bf33eb.js";
const b = () => {
        const {
            loadPortal: e
        } = i();
        return {
            checkout: async (a, n) => {
                e((e => {
                    e.openCheckout({
                        hostedPage: () => (async e => e().then((e => e.ok ? e?.data?.checkout_hosted_page : Promise.reject(e.status))))(a),
                        error: console.log,
                        success: e => {
                            o(e).then((e => {
                                e.ok && n()
                            }))
                        }
                    }, null, "server-ai")
                }))
            }
        }
    },
    g = ["bronze", "silver", "gold", "platinum", "diamond"],
    v = e => e.split("-").slice(-2)[0],
    f = e => {
        const a = "ai.features.generations.server.characters";
        let n = [{
                enabled: !0,
                name: "ai.features.generations.server.text",
                values: {
                    nbGenerations: "∞",
                    command: r.jsx("span", {
                        className: "text-dark-400 text-sm",
                        children: "/write"
                    })
                }
            }, {
                enabled: !0,
                name: "ai.features.generations.server.images",
                values: {
                    nbGenerations: "∞",
                    command: r.jsx("span", {
                        className: "text-dark-400 text-sm",
                        children: "/imagine"
                    })
                }
            }, {
                enabled: !0,
                name: a,
                values: {
                    nbGenerations: "∞"
                }
            }, {
                enabled: !0,
                name: "ai.features.generations.server.bot",
                values: {
                    nbGenerations: "∞"
                }
            }],
            s = [{
                enabled: !0,
                name: "ai.features.generations.server.text",
                values: {
                    nbGenerations: 1e3,
                    command: r.jsx("span", {
                        className: "text-dark-400 text-sm",
                        children: "/write"
                    })
                }
            }, {
                enabled: !0,
                name: "ai.features.generations.server.images",
                values: {
                    nbGenerations: 1e3,
                    command: r.jsx("span", {
                        className: "text-dark-400 text-sm",
                        children: "/imagine"
                    })
                }
            }, {
                enabled: !0,
                name: a,
                values: {
                    nbGenerations: 5e3
                }
            }, {
                enabled: !0,
                name: "ai.features.generations.server.bot",
                values: {
                    nbGenerations: 5e3
                }
            }],
            t = [{
                enabled: !0,
                name: "ai.features.generations.server.text",
                values: {
                    nbGenerations: 500,
                    command: r.jsx("span", {
                        className: "text-dark-400 text-sm",
                        children: "/write"
                    })
                }
            }, {
                enabled: !0,
                name: "ai.features.generations.server.images",
                values: {
                    nbGenerations: 500,
                    command: r.jsx("span", {
                        className: "text-dark-400 text-sm",
                        children: "/imagine"
                    })
                }
            }, {
                enabled: !0,
                name: a,
                values: {
                    nbGenerations: 2500
                }
            }, {
                enabled: !0,
                name: "ai.features.generations.server.bot",
                values: {
                    nbGenerations: 2500
                }
            }],
            i = [{
                enabled: !0,
                name: "ai.features.generations.server.text",
                values: {
                    nbGenerations: 100,
                    command: r.jsx("span", {
                        className: "text-dark-400 text-sm",
                        children: "/write"
                    })
                }
            }, {
                enabled: !0,
                name: "ai.features.generations.server.images",
                values: {
                    nbGenerations: 100,
                    command: r.jsx("span", {
                        className: "text-dark-400 text-sm",
                        children: "/imagine"
                    })
                }
            }, {
                enabled: !0,
                name: a,
                values: {
                    nbGenerations: 500
                }
            }, {
                enabled: !0,
                name: "ai.features.generations.server.bot",
                values: {
                    nbGenerations: 500
                }
            }],
            l = [{
                enabled: !0,
                name: "ai.features.generations.server.text",
                values: {
                    nbGenerations: 50,
                    command: r.jsx("span", {
                        className: "text-dark-400 text-sm",
                        children: "/write"
                    })
                }
            }, {
                enabled: !0,
                name: "ai.features.generations.server.images",
                values: {
                    nbGenerations: 50,
                    command: r.jsx("span", {
                        className: "text-dark-400 text-sm",
                        children: "/imagine"
                    })
                }
            }, {
                enabled: !0,
                name: a,
                values: {
                    nbGenerations: 200
                }
            }, {
                enabled: !0,
                name: "ai.features.generations.server.bot",
                values: {
                    nbGenerations: 200
                }
            }];
        return e || (n = n.filter((e => e.name !== a)), s = s.filter((e => e.name !== a)), t = t.filter((e => e.name !== a)), i = i.filter((e => e.name !== a)), l = l.filter((e => e.name !== a))), {
            platinum: n,
            diamond: s,
            gold: t,
            silver: i,
            bronze: l
        }
    },
    h = ({
        nbMonths: i,
        onCheckout: o
    }) => {
        const {
            loading: b,
            v1: v
        } = x(), [h] = a(), {
            locale: j
        } = n(), {
            plans: k,
            taxExclusive: N,
            loading: F,
            currency: E
        } = (() => {
            const {
                guild: a
            } = e(), {
                autoApplyCoupon: n,
                couponId: s
            } = l(), {
                data: r,
                isLoading: t,
                refetch: i
            } = d(["server-ai-plans", a?.id], (async () => {
                const e = await c(n ? s : null);
                if (!e.ok || !e.data) return null;
                if (!e?.data?.plans) return null;
                const r = {};
                return Object.keys(e?.data?.plans).map((n => {
                    const {
                        actions: s
                    } = u({
                        _links: {},
                        ...e?.data?.plans[n]
                    }, void 0, a);
                    r[n] = {
                        ...e?.data?.plans[n],
                        actions: s
                    }, delete r[n]._links
                })), {
                    plans: r,
                    currency: e?.data?.currency,
                    taxExclusive: !!e?.data?.tax_exclusive
                }
            }));
            return {
                ...r,
                loading: t,
                refetch: i
            }
        })(), y = h.get("plan"), w = h.get("nbMonths"), [G, D] = s.useState(f(!1)), B = async (e, a) => {
            k && o(e, a ?? i, k[e])
        };
        return s.useEffect((() => {
            if (y && w && k) {
                if (i && !["1", "12"].includes(w)) return;
                if (!g.includes(y)) return;
                B(y, Number(w))
            }
        }), [y, w, k]), s.useEffect((() => {
            b || D(f(v))
        }), [b]), r.jsxs(r.Fragment, {
            children: [r.jsx("div", {
                className: "flex flex-wrap items-start gap-10 mx-auto justify-center",
                children: F || b || !k ? r.jsx(r.Fragment, {
                    children: Array.from({
                        length: 3
                    }).map(((e, a) => r.jsxs("div", {
                        className: "bg-dark-900 rounded-lg p-7 h-[376px] w-[360px] animate-pulse",
                        children: [r.jsx("div", {
                            className: "w-20 h-6 rounded bg-dark-700"
                        }), r.jsx("div", {
                            className: "w-32 h-9 rounded bg-dark-700 mt-8"
                        }), r.jsx("div", {
                            className: "w-12 h-5 rounded bg-dark-700 mt-4"
                        }), r.jsx("div", {
                            className: "w-full h-5 rounded bg-dark-700 mt-8"
                        }), r.jsx("div", {
                            className: "w-full h-5 rounded bg-dark-700 mt-4"
                        }), r.jsx("div", {
                            className: "w-full h-5 rounded bg-dark-700 mt-4"
                        }), r.jsx("div", {
                            className: "w-full h-12 rounded-lg bg-dark-700 mt-6"
                        })]
                    }, a)))
                }) : r.jsxs(r.Fragment, {
                    children: [r.jsx(p, {
                        highlight: !0,
                        nbMonths: i,
                        className: "max-w-[356px] w-full",
                        features: G.platinum,
                        name: "platinum",
                        renderName: r.jsx("span", {
                            className: "bg-clip-text text-transparent",
                            style: {
                                background: "linear-gradient(90deg, #CDA6FF 19.64%, #FFD1BD 82.14%), #F2F4FB"
                            },
                            children: r.jsx(m, {
                                id: "ai.plan.platinum.title"
                            })
                        }),
                        currency: E || "USD",
                        taxExclusive: N,
                        onPick: () => B("platinum"),
                        ppm: k?.platinum?.periods?.[i]?.ppm,
                        fullMonthlyPrice: k?.platinum?.periods[1]?.ppm
                    }), r.jsx(p, {
                        nbMonths: i,
                        className: "max-w-[356px] w-full",
                        features: G.diamond,
                        name: "diamond",
                        renderName: r.jsx("span", {
                            className: "bg-clip-text text-transparent",
                            style: {
                                background: "linear-gradient(270deg, #B8E2FB 22.32%, #F2EFE8 41.2%, #F9DCDD 52.99%, #E1C1E5 63.48%, #BDAFE3 78.57%)"
                            },
                            children: r.jsx(m, {
                                id: "ai.plan.diamond.title"
                            })
                        }),
                        currency: E || "USD",
                        taxExclusive: N,
                        onPick: () => B("diamond"),
                        ppm: k?.diamond?.periods?.[i]?.ppm,
                        fullMonthlyPrice: k?.diamond?.periods[1]?.ppm
                    }), r.jsx(p, {
                        nbMonths: i,
                        className: "max-w-[356px] w-full",
                        features: G.gold,
                        name: "gold",
                        renderName: r.jsx("span", {
                            className: "bg-clip-text text-transparent",
                            style: {
                                background: "linear-gradient(90deg, #E3A455 33.66%, #F6DBA6 39.88%, #FFEBC4 44.02%, #F0BE79 50.29%, #EEBC70 56.64%, #BA7F3B 67.19%)"
                            },
                            children: r.jsx(m, {
                                id: "ai.plan.gold.title"
                            })
                        }),
                        currency: E || "USD",
                        taxExclusive: N,
                        onPick: () => B("gold"),
                        ppm: k?.gold?.periods?.[i]?.ppm,
                        fullMonthlyPrice: k?.gold?.periods[1]?.ppm
                    }), r.jsx(p, {
                        nbMonths: i,
                        className: "max-w-[356px] w-full",
                        features: G.silver,
                        name: "silver",
                        renderName: r.jsx("span", {
                            className: "bg-clip-text text-transparent",
                            style: {
                                background: "linear-gradient(90deg, #FBFBFD -6.69%, #C8D4DA 16.27%, #FFFFFF 41.67%, #AEC0CE 54.71%, #E3E9EE 71.55%, #FAFBFC 78.26%, #D6DFE6 98.63%, #B8C9D3 106.71%)"
                            },
                            children: r.jsx(m, {
                                id: "ai.plan.silver.title"
                            })
                        }),
                        currency: E || "USD",
                        taxExclusive: N,
                        onPick: () => B("silver"),
                        ppm: k?.silver?.periods?.[i]?.ppm,
                        fullMonthlyPrice: k?.silver?.periods[1]?.ppm
                    }), r.jsx(p, {
                        nbMonths: i,
                        className: "max-w-[356px] w-full",
                        features: G.bronze,
                        name: "bronze",
                        renderName: r.jsx("span", {
                            className: "bg-clip-text text-transparent",
                            style: {
                                background: "linear-gradient(90deg, #B5947D 31.25%, #FFECE0 45.46%, #F0CAB2 57.67%, #AB836E 70.17%)"
                            },
                            children: r.jsx(m, {
                                id: "ai.plan.bronze.title"
                            })
                        }),
                        currency: E || "USD",
                        taxExclusive: N,
                        onPick: () => B("bronze"),
                        ppm: k?.bronze?.periods?.[i]?.ppm,
                        fullMonthlyPrice: k?.bronze?.periods[1]?.ppm
                    })]
                })
            }), r.jsx("div", {
                className: "flex flex-col items-center justify-center mt-7",
                children: r.jsx("p", {
                    className: "mb-8",
                    children: r.jsx(m, {
                        id: "private.ai.description2",
                        values: {
                            link: e => r.jsx(t, {
                                className: "text-brand-default",
                                to: `/${j}/ai`,
                                children: e
                            })
                        }
                    })
                })
            })]
        })
    };
export {
    h as C, v as G, b as u
};
