import {
    r as e,
    j as s,
    b as t,
    B as l,
    F as i,
    t as a,
    a as r,
    y as n,
    L as o,
    d,
    a3 as c,
    Z as m,
    V as x,
    f as p,
    a6 as u,
    bj as h,
    v as j
} from "./index-e0afec69.js";
import {
    I as b,
    n as f,
    L as g,
    D as v,
    e as w,
    f as k,
    af as N,
    b as y
} from "./app-b4886647.js";
import {
    u as _
} from "./monetize_plans-47213cc3.js";
import {
    W as S
} from "./modal.constants-09c27985.js";
import {
    u as P
} from "./hateoas-0d7aebac.js";
import {
    R as z
} from "./rotate-9e950e0d.js";
import {
    h as C
} from "./moment-e0d604bc.js";
import {
    f as L,
    c as I
} from "./currency-ff0793d9.js";
import {
    R as F,
    a as M
} from "./radio-be6e017d.js";
import {
    S as A,
    W as $
} from "./wallet-cf908e7f.js";
import {
    G as E
} from "./GuildLogo-50c6544d.js";
import {
    u as R,
    c as Y
} from "./useMembershipsPlan-18528bb1.js";
import {
    T as B
} from "./tick-6479cdd6.js";
import {
    R as D
} from "./role-079e360b.js";
import {
    E as T
} from "./emoji-174a01ce.js";
import {
    F as W,
    S as O,
    a as U,
    m as G,
    L as H
} from "./minBy-afff8973.js";
import {
    _ as Q
} from "./useMount-b9859051.js";
import {
    _ as V
} from "./useUnmount-620b16b2.js";
import {
    b as Z,
    c as J
} from "./api-bda691b8.js";
import {
    N as K
} from "./notifications-8d92ec36.js";
import {
    G as q
} from "./page_view-8012ef9e.js";
import {
    I as X
} from "./index-145b939f.js";
import {
    E as ee
} from "./export-f16fcb42.js";
import "./Loader2-ea5f73c7.js";
import "./_baseIteratee-79fa20e9.js";
import "./isArguments-c20fe69a.js";
import "./_baseSet-bc572f64.js";
import "./_getAllKeysIn-3fdbf9dd.js";
import "./_baseAssignValue-a6f8b2d7.js";
import "./_defineProperty-bace75b3.js";
import "./_baseFlatten-bf250e44.js";
import "./tslib-5c4c23e5.js";
import "./warning-1bc43636.js";
import "./CSSTransition-13331f95.js";
import "./objectWithoutPropertiesLoose-87a5ea27.js";
import "./load_notifications-08a815d5.js";
const se = e.createContext({
        id: ""
    }),
    te = ({
        children: e,
        guild: t
    }) => s.jsx(se.Provider, {
        value: t,
        children: e
    }),
    le = () => e.useContext(se),
    ie = ({
        plan: e
    }) => {
        const {
            locale: i
        } = t();
        return s.jsx(l, {
            theme: "secondary",
            to: `/${i}/memberships/subscriptions`,
            children: s.jsx(b, {
                id: "monetize.promo.plan.manage"
            })
        })
    },
    ae = ({
        plan: e,
        bundle: t,
        mode: l
    }) => {
        const a = t?.currency ?? "usd",
            r = t?.price ?? e.price ?? 0,
            n = t?.months ?? 1;
        return s.jsxs(s.Fragment, {
            children: [s.jsx("div", {
                className: "h-px w-full bg-dark-500 my-4"
            }), s.jsxs("div", {
                className: "flex items-center justify-between text-dark-100 mt-1",
                children: [s.jsx("label", {
                    className: "text-body",
                    children: s.jsx(i, {
                        id: "memberships.checkout.subtotal.label"
                    })
                }), s.jsx("div", {
                    className: "text-body",
                    children: L(r, a)
                })]
            }), s.jsxs("div", {
                className: "flex items-center justify-between text-dark-400 mt-1",
                children: [s.jsx("label", {
                    className: "text-body",
                    children: s.jsx(i, {
                        id: "memberships.checkout.taxes.label"
                    })
                }), s.jsx("div", {
                    className: "text-body",
                    children: "---"
                })]
            }), s.jsx("div", {
                className: "h-px w-full bg-dark-500 my-4"
            }), s.jsxs("div", {
                className: "flex items-center justify-between text-dark-100",
                children: [s.jsx("label", {
                    className: "text-h6",
                    children: s.jsx(i, {
                        id: "memberships.checkout.total.label"
                    })
                }), s.jsx("div", {
                    className: "text-h6",
                    children: L(r, a)
                })]
            }), s.jsxs("div", {
                className: "text-dark-400 text-sm gap-2 flex my-6",
                children: [s.jsx(z, {
                    className: "h-5 w-5 shrink-0"
                }), s.jsx(i, {
                    id: n > 1 ? "monetize.promo.payment.with_bundle.label" : "memberships.checkout.renewal",
                    values: {
                        today: C().format("DD MMMM YYYY"),
                        price: L(r, a),
                        nextCharge: C().add(n, "months").format("DD MMMM YYYY"),
                        months: n
                    }
                })]
            })]
        })
    },
    re = ({
        plan: e,
        onBundleSelected: t,
        bundle: l
    }) => {
        const r = a();
        return s.jsxs(s.Fragment, {
            children: [s.jsx("div", {
                className: "h-px w-full bg-dark-500 my-4"
            }), s.jsx("div", {
                className: "text-body text-dark-100",
                children: s.jsx(i, {
                    id: "monetize.promo.checkout.bundles.title"
                })
            }), 1 === e.bundles.length ? s.jsx("div", {
                className: "my-4",
                children: (() => {
                    const t = e.bundles[0],
                        l = L(t.price, t.currency),
                        i = r.formatMessage({
                            id: `plugins.membership.edition.pricing.period.${t.months}`
                        });
                    return s.jsxs("div", {
                        className: "text-dark-100 text-body",
                        children: [l, " ", s.jsxs("span", {
                            className: "text-dark-300",
                            children: ["/ ", i]
                        })]
                    })
                })()
            }) : s.jsx(F, {
                className: "my-4 max-h-[240px] overflow-y-auto",
                onChange: e => t(e),
                value: l,
                children: e.bundles.map((t => {
                    const l = I(t, e.bundles),
                        i = L(t.price, t.currency),
                        a = r.formatMessage({
                            id: `plugins.membership.edition.pricing.period.${t.months}`
                        });
                    return s.jsx(M, {
                        title: s.jsxs("span", {
                            className: "flex items-center gap-2",
                            children: [s.jsxs("span", {
                                children: [i, " ", s.jsxs("span", {
                                    className: "text-dark-300",
                                    children: ["/ ", a]
                                })]
                            }), l > 0 && s.jsxs("span", {
                                className: "inline-flex gap-1 monetize-gradient-20 px-1 py-0.5 rounded text-xs uppercase font-semibold",
                                children: [s.jsx("img", {
                                    src: "/assets/bundle_spark-ecf4c9d3.svg"
                                }), s.jsxs("span", {
                                    className: "monetize-gradient-text",
                                    children: [l, "% OFF"]
                                })]
                            })]
                        }),
                        value: t
                    }, t.id)
                }))
            })]
        })
    },
    ne = ({
        plan: e
    }) => {
        const t = le();
        return s.jsxs("div", {
            className: "flex mt-6 gap-4",
            children: [s.jsx(E, {
                guild: t,
                size: 48,
                radius: 42
            }), s.jsx("div", {
                className: "flex flex-col gap-1 justify-center",
                children: s.jsxs("div", {
                    className: "flex flex-col gap-1",
                    children: [s.jsxs("div", {
                        className: "flex items-start",
                        children: [e.icon_url ? s.jsx("div", {
                            className: "h-[28px] w-[28px] bg-cover bg-center rounded-md mr-2",
                            style: {
                                backgroundImage: `url(${e.icon_url})`
                            }
                        }) : s.jsx(A, {
                            className: "shrink-0 h-6 w-6 mr-2 bg-yellow-default/10 text-yellow-default rounded"
                        }), s.jsx("div", {
                            className: "text-body text-ellipsis overflow-hidden text-dark-100",
                            children: e.name
                        })]
                    }), s.jsx("div", {
                        className: "text-body text-ellipsis overflow-hidden text-dark-400",
                        children: t?.name
                    })]
                })
            })]
        })
    },
    oe = ({
        show: a,
        onDismiss: d,
        plan: c,
        bundle: m,
        guild: x,
        currentSubscription: p
    }) => {
        const u = r(),
            {
                locale: h
            } = t(),
            j = R(c),
            [b, f] = e.useState(m ?? (1 === j.length ? j[0] : null)),
            g = p?.payment_method?.type,
            [v, w] = e.useState("PAYPAL" === g ? "PAYPAL" : "STRIPE"),
            k = n(),
            {
                actions: N
            } = P(b),
            y = {
                ...c,
                bundles: j
            };
        return s.jsx(s.Fragment, {
            children: s.jsxs(S, {
                open: a,
                onClose: d,
                children: [s.jsx(S.Header, {
                    title: "memberships.checkout.title"
                }), s.jsx("div", {
                    className: "text-sm text-dark-300 mt-4",
                    children: s.jsx(i, {
                        id: "memberships.upgrade.info",
                        values: {
                            b: e => s.jsx("strong", {
                                className: "text-dark-100 font-semibold",
                                children: e
                            })
                        }
                    })
                }), s.jsx(ne, {
                    plan: c
                }), j.length > 0 ? s.jsx(re, {
                    bundle: b,
                    plan: y,
                    onBundleSelected: e => f(e)
                }) : null, s.jsx(ae, {
                    plan: c,
                    bundle: b,
                    mode: v
                }), s.jsxs("div", {
                    className: "flex text-dark-300 gap-2 mb-8",
                    children: [s.jsx($, {
                        className: "h-5 w-5 shrink-0"
                    }), s.jsx("div", {
                        children: s.jsx(i, {
                            id: "memberships.upgrade.switch",
                            values: {
                                b: e => s.jsx(o, {
                                    to: `/${h}/memberships/subscriptions`,
                                    className: "text-dark-100",
                                    children: e
                                })
                            }
                        })
                    })]
                }), s.jsx(S.Footer, {
                    cancelButtonText: "button.cancel",
                    renderConfirmButton: () => s.jsx(l, {
                        disabled: !b,
                        onClick: async () => {
                            if (!b) return;
                            const e = await N.upgrade();
                            d(), await k.refetchQueries(), e.ok && e.data?.url ? window.location.href = e.data.url : u(`/${h}/memberships/` + x.id + "/upgrade-confirmation")
                        },
                        children: s.jsx(i, {
                            id: "memberships.upgrade.confirm"
                        })
                    })
                })]
            })
        })
    },
    de = ({
        plan: t,
        currentSubscription: a
    }) => {
        const n = le(),
            o = new Proxy(new URLSearchParams(window.location.search), {
                get: (e, s) => e.get(s)
            }),
            d = R(t),
            [c, m] = e.useState(o.subscribe === t.id),
            x = r(),
            p = f();
        return s.jsxs("div", {
            className: "flex flex-col items-stretch",
            children: [d.length > 0 ? s.jsx(s.Fragment, {
                children: s.jsx(l, {
                    theme: "monetize",
                    onClick: async () => {
                        window.history.replaceState(null, "", "?subscribe=" + t.id), await p(), m(!0)
                    },
                    children: s.jsx(i, {
                        id: "monetize.promo.plan.upgrade"
                    })
                })
            }) : null, s.jsx(oe, {
                currentSubscription: a,
                guild: n,
                plan: t,
                bundle: d[0],
                show: c,
                onDismiss: () => {
                    m(!1), x({
                        search: ""
                    })
                }
            })]
        })
    },
    ce = ({
        show: t,
        plan: a,
        onDismiss: r,
        bundle: o
    }) => {
        const m = new Proxy(new URLSearchParams(window.location.search), {
                get: (e, s) => e.get(s)
            }),
            {
                user: x
            } = d(),
            p = f(),
            [u, h] = e.useState(m.bundle ? a.bundles.find((e => e.id === m.bundle)) || null : a.bundles.find((e => e.id === o?.id)) || (1 === a.bundles.length ? a.bundles[0] : null)),
            {
                actions: j
            } = P(u),
            {
                actions: b,
                match: g
            } = P(a),
            v = g(/subscribe_with_stripe/),
            w = g(/subscribe_with_paypal/),
            k = v && !w,
            [N, y] = e.useState(v ? "STRIPE" : "PAYPAL"),
            _ = n(),
            z = u?.price ?? a.price ?? 0,
            C = L(z, u?.currency ?? "usd");
        return e.useEffect((() => {
            t && y(v ? "STRIPE" : "PAYPAL")
        }), [t]), e.useEffect((() => {
            h(m.bundle ? a.bundles.find((e => e.id === m.bundle)) || null : a.bundles.find((e => e.id === o?.id)) || (1 === a.bundles.length ? a.bundles[0] : null))
        }), [o?.id]), e.useEffect((() => {
            u?.id && window.history.replaceState(null, "", "?subscribe=" + a.id + "&bundle=" + u?.id)
        }), [u?.id]), x?.id ? s.jsx(s.Fragment, {
            children: s.jsxs(S, {
                open: t,
                onClose: r,
                children: [s.jsx(S.Header, {
                    title: "memberships.checkout.title"
                }), s.jsx(ne, {
                    plan: a
                }), a.bundles.length > 0 ? s.jsx(re, {
                    bundle: u,
                    plan: a,
                    onBundleSelected: async e => {
                        h(e)
                    }
                }) : null, s.jsx(ae, {
                    plan: a,
                    bundle: u,
                    mode: N
                }), !k && s.jsxs(s.Fragment, {
                    children: [s.jsx("label", {
                        className: "text-dark-100 mb-6 text-body block",
                        children: s.jsx(i, {
                            id: "memberships.checkout.payment.label"
                        })
                    }), s.jsxs(F, {
                        className: "mb-8",
                        onChange: e => y(e),
                        value: N,
                        children: [v ? s.jsx(M, {
                            title: s.jsx(i, {
                                id: "memberships.checkout.mode.stripe"
                            }),
                            description: "STRIPE" === N ? s.jsx(i, {
                                id: "memberships.checkout.mode.stripe.description"
                            }) : "",
                            value: "STRIPE"
                        }) : null, w ? s.jsx(M, {
                            title: s.jsx(i, {
                                id: "memberships.checkout.mode.paypal"
                            }),
                            value: "PAYPAL"
                        }) : null]
                    })]
                }), s.jsx(S.Footer, {
                    cancelButtonText: "button.cancel",
                    renderConfirmButton: () => s.jsx(c, {
                        event: "membership_pay_click",
                        children: s.jsx(l, {
                            onClick: async () => {
                                const e = await (u ? j["subscribe_with_" + N.toLowerCase()]() : b["subscribe_with_" + N.toLowerCase()]());
                                _.refetchQueries(), e.ok && "STRIPE" === N ? window.location.href = e.data._links["stripe-checkout"]?.href : e.ok && "PAYPAL" === N && (window.location.href = e.data._links["paypal-checkout"]?.href)
                            },
                            children: s.jsx(i, {
                                id: k ? "memberships.checkout.proceed" : "memberships.checkout.confirm",
                                values: {
                                    price: C
                                }
                            })
                        })
                    })
                })]
            })
        }) : s.jsxs(S, {
            open: t,
            onClose: r,
            children: [s.jsx(S.Header, {
                title: "memberships.checkout.title"
            }), s.jsx(ne, {
                plan: a
            }), a.bundles.length > 0 ? s.jsx(re, {
                bundle: u,
                plan: a,
                onBundleSelected: async e => {
                    h(e)
                }
            }) : null, s.jsx(ae, {
                plan: a,
                bundle: u,
                mode: N
            }), s.jsx("div", {
                className: "h-px w-full bg-dark-500 my-4"
            }), s.jsx("div", {
                className: "my-6",
                children: s.jsx(i, {
                    id: "welcome.pleaseLogin"
                })
            }), s.jsx(S.Footer, {
                onConfirm: async () => await p(),
                confirmButtonText: "welcome.loginWithDiscord"
            })]
        })
    },
    me = ({
        plan: t
    }) => {
        le();
        const a = new Proxy(new URLSearchParams(window.location.search), {
                get: (e, s) => e.get(s)
            }),
            [n, o] = e.useState(a.subscribe === t.id),
            {
                match: d
            } = P(t),
            m = f(),
            x = r(),
            p = Y(t);
        return s.jsxs(s.Fragment, {
            children: [s.jsx(c, {
                event: "membership_subscription_click",
                children: s.jsx(l, {
                    className: "w-full",
                    theme: "monetize",
                    disabled: !d(/subscribe/),
                    onClick: async () => {
                        window.history.replaceState(null, "", "?subscribe=" + t.id), await m(), o(!0)
                    },
                    children: s.jsx(i, {
                        id: "monetize.promo.plan.subscribe_button"
                    })
                })
            }), s.jsx(ce, {
                bundle: p,
                show: n,
                plan: t,
                onDismiss: () => {
                    o(!1), x({
                        search: ""
                    })
                }
            })]
        })
    },
    xe = ({
        plan: e
    }) => e.roles_perks && Object.keys(e.roles_perks).length > 0 ? s.jsxs(s.Fragment, {
        children: [s.jsx("div", {
            className: "text-left text-dark-400 uppercase text-xs font-bold mb-2 mt-5",
            children: s.jsx(b, {
                id: "monetize.promo.plan.perks.roles"
            })
        }), s.jsxs("div", {
            className: "flex gap-1 flex-wrap",
            children: [s.jsx(B, {
                className: "text-green-default"
            }), Object.values(e.roles_perks).map(((e, t) => s.jsx(D, {
                role: e,
                deletable: !1
            }, t)))]
        })]
    }) : null,
    pe = ({
        plan: e,
        activeSubscription: t
    }) => {
        const {
            match: l
        } = P(e);
        return s.jsx("div", {
            className: "relative mb-6",
            children: s.jsxs("div", {
                className: "rounded-3xl relative overflow-hidden h-[180px] w-full flex items-center justify-center",
                children: [s.jsx("div", {
                    className: "w-full h-full blur-xl flex bg-center bg-cover absolute " + (e.icon_url ? "" : "bg-premium-default/30"),
                    style: e.icon_url ? {
                        backgroundImage: e.icon_url ? `url(${e.icon_url})` : ""
                    } : {}
                }), e.active_subscription ? s.jsx("div", {
                    className: "absolute top-4 left-4 rounded-lg p-1.5 bg-dark-default/50",
                    children: s.jsxs("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [s.jsx("path", {
                            d: "M2.79406 7.45869C3.33698 5.14417 5.14417 3.33698 7.45869 2.79406C9.13021 2.40198 10.8698 2.40198 12.5413 2.79406C14.8558 3.33698 16.663 5.14417 17.2059 7.4587C17.598 9.13021 17.598 10.8698 17.2059 12.5413C16.663 14.8558 14.8558 16.663 12.5413 17.2059C10.8698 17.598 9.13021 17.598 7.4587 17.2059C5.14418 16.663 3.33698 14.8558 2.79406 12.5413C2.40198 10.8698 2.40198 9.13021 2.79406 7.45869Z",
                            stroke: m.default,
                            strokeWidth: "1.5",
                            fill: m.default
                        }), s.jsx("path", {
                            d: "M7.70833 9.79168L9.37499 11.4583L12.2917 8.33334",
                            stroke: x.default,
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                }) : null, s.jsxs("div", {
                    className: "absolute top-4 right-4 rounded-lg p-2 bg-dark-default/50 flex gap-2",
                    children: [l(/stripe/) || "STRIPE" === t?.payment_method.type ? s.jsx("img", {
                        src: "/assets/credit_card-155489bf.svg"
                    }) : null, l(/paypal/) || "PAYPAL" === t?.payment_method.type ? s.jsx("img", {
                        className: "h-4 w-4",
                        src: "/assets/paypal-149d1862.svg"
                    }) : null]
                }), s.jsx("div", {
                    className: "w-[84px] h-[84px] rounded-3xl relative bg-cover bg-center border-4 border-solid border-white overflow-hidden " + (e.icon_url ? "" : "bg-premium-default/20"),
                    style: e.icon_url ? {
                        backgroundImage: `url(${e.icon_url})`
                    } : {},
                    children: e.icon_url ? null : s.jsx(A, {
                        className: "h-full w-full text-warning-default bg-warning-veryDark"
                    })
                })]
            })
        })
    },
    ue = ({
        plan: e
    }) => e.other_perks && e.other_perks.length > 0 ? s.jsxs(s.Fragment, {
        children: [s.jsx("div", {
            className: "text-left text-dark-400 uppercase text-xs font-bold mb-2 mt-5",
            children: s.jsx(b, {
                id: "monetize.promo.plan.perks.other"
            })
        }), s.jsx("div", {
            className: "flex flex-col gap-2 text-left",
            children: e.other_perks.map(((e, t) => s.jsxs("div", {
                className: "flex gap-2",
                children: [s.jsx("div", {
                    children: e.emoji ? s.jsx(T, {
                        size: 20,
                        name: e.emoji?.name,
                        id: e.emoji?.id
                    }) : null
                }), s.jsxs("div", {
                    className: "flex flex-col gap-1",
                    children: [s.jsx("p", {
                        className: "text-dark-100 text-sm h-5 flex items-center",
                        children: e.name
                    }), s.jsx("p", {
                        className: "text-dark-300 text-xs",
                        children: e.description
                    })]
                })]
            })))
        })]
    }) : null,
    he = ({
        plan: e
    }) => e.xp_boost?.enabled && 0 !== e.xp_boost.value ? s.jsxs(s.Fragment, {
        children: [s.jsx("div", {
            className: "text-left text-dark-400 uppercase text-xs font-bold mb-2 mt-5",
            children: s.jsx(b, {
                id: "monetize.promo.plan.perks.xp_boost"
            })
        }), s.jsxs("div", {
            className: "flex gap-1 items-start",
            children: [s.jsx(W, {
                className: "h-5 w-5"
            }), s.jsxs("div", {
                className: "flex flex-col items-start gap-1",
                children: [s.jsx("div", {
                    className: "monetize-gradient-text font-semibold text-left",
                    children: s.jsx(b, {
                        id: "monetize.promo.plan.perks.xp_boost.title",
                        values: {
                            amount: e.xp_boost.value
                        }
                    })
                }), s.jsx("div", {
                    className: "text-dark-300 text-xs text-left",
                    children: s.jsx(b, {
                        id: "monetize.promo.plan.perks.xp_boost.description"
                    })
                })]
            })]
        })]
    }) : null,
    je = ({
        plan: t,
        activeSubscription: l
    }) => {
        const [a, r] = e.useState(!1), n = Y(t);
        return s.jsx(s.Fragment, {
            children: s.jsxs("div", {
                className: "flex flex-col bg-dark-900 rounded-3xl w-[296px] lg:w-[344px] p-6 text-center",
                id: t.id,
                children: [s.jsx(pe, {
                    plan: t
                }), s.jsx("h3", {
                    className: "text-h5 text-white font-bold mb-1 whitespace-nowrap text-ellipsis overflow-hidden",
                    children: t.name
                }), s.jsx("p", {
                    className: p("text-dark-300 text-body min-h-[48px]", {
                        "mb-6": t.description.length <= 66,
                        "whitespace-pre-line": a
                    }),
                    children: t.description.length > 66 && !a ? t.description.substring(0, 63) + "..." : t.description
                }), t.description.length > 65 ? s.jsx("p", {
                    className: p("text-dark-100 text-body hover:text-brand-default cursor-pointer transition-all"),
                    onClick: () => r(!a),
                    children: s.jsx(i, {
                        id: a ? "monetize.promo.plan.show_less" : "monetize.promo.plan.show_more"
                    })
                }) : null, s.jsx("p", {
                    className: "text-h3 font-bold text-white mt-6 flex gap-2 items-center justify-center",
                    children: n ? s.jsx(i, {
                        id: 1 === t.bundles.length ? "monetize.promo.plan.price.exact" : "monetize.promo.plan.price.with_bundle",
                        values: {
                            formattedPrice: L(n.pricePerMonth, n.currency),
                            em: e => s.jsx("span", {
                                className: "text-dark-300 text-body font-bold",
                                children: e
                            })
                        }
                    }) : s.jsx(s.Fragment, {
                        children: L(t.price ?? 0, "usd")
                    })
                }), s.jsx("div", {
                    className: "text-sm text-dark-300 mb-4",
                    children: s.jsx(i, {
                        id: "monetize.promo.plan.per_month"
                    })
                }), t.active_subscription?.active ? s.jsx(ie, {
                    plan: t
                }) : t.active_subscription?.id !== l?.id && l ? s.jsx(de, {
                    plan: t,
                    currentSubscription: l
                }) : s.jsx(me, {
                    plan: t
                }), s.jsx(xe, {
                    plan: t
                }), s.jsx(he, {
                    plan: t
                }), s.jsx(ue, {
                    plan: t
                })]
            })
        })
    },
    be = () => {
        const t = le(),
            {
                plans: l,
                loading: a,
                activeSubscription: r
            } = _(t.id),
            [n, o] = e.useState(!0);
        return e.useEffect((() => {
            if (document.getElementById("twemoji-script")) o(!1);
            else {
                const e = document.createElement("script");
                e.id = "twemoji-script", e.src = "/twemoji.min.js", e.async = !0, document.body.appendChild(e), e.onload = () => o(!1)
            }
        }), [l?.length]), a || n ? s.jsx(g, {}) : l.length ? s.jsxs("div", {
            className: "w-full p-4 lg:p-10 pb-20 relative",
            children: [s.jsx("div", {
                className: "top-0 left-0 w-full bg-dark-800 rounded-lg h-[282px] absolute"
            }), s.jsxs("div", {
                className: "relative mb-6 p-2 pb-0",
                children: [s.jsxs("h3", {
                    className: "text-h6 text-dark-100 font-semibold flex gap-2 items-center",
                    children: [s.jsx(v, {
                        className: "text-discord-default h-8 w-8"
                    }), s.jsx(i, {
                        id: "monetize.promo.plans.title"
                    })]
                }), s.jsx("p", {
                    className: "text-body text-dark-300",
                    children: s.jsx(i, {
                        id: "monetize.promo.plans.description",
                        values: {
                            name: t.name
                        }
                    })
                })]
            }), s.jsx("div", {
                className: "relative flex flex-wrap gap-6 items-start lg:justify-start justify-center",
                children: l && l.filter((e => e.bundles.length > 0)).map((e => s.jsx(je, {
                    plan: e,
                    activeSubscription: r
                }, e.id)))
            }), s.jsx("img", {
                src: O,
                className: "hidden lg:block absolute top-[196px] -left-[20px]"
            }), s.jsx("img", {
                src: U,
                className: "hidden lg:block absolute top-[20px] -right-[20px]"
            })]
        }) : null
    },
    fe = ({
        icon: e
    }) => e ? s.jsxs("div", {
        className: "w-full absolute",
        children: [s.jsx("div", {
            className: "absolute top-0 left-0 h-[102px] lg:h-[364px] w-full bg-cover bg-center blur-2xl opacity-60",
            style: {
                backgroundImage: `url(${e})`
            }
        }), s.jsx("div", {
            className: "h-[102px] lg:h-[364px] w-full overflow-hidden rounded-2xl",
            children: s.jsx("div", {
                className: "h-[102px] lg:h-[364px] w-full bg-cover bg-center blur-2xl",
                style: {
                    backgroundImage: `url(${e})`
                }
            })
        })]
    }) : s.jsx("div", {
        className: "absolute top-0 left-0 h-[102px] lg:h-[364px] w-full bg-dark-900 rounded-2xl"
    }),
    ge = () => {
        e.useState(!1);
        const t = le(),
            {
                plans: a
            } = _(t.id),
            r = G(a, (e => e?.price ?? 1 / 0)),
            n = Y(r),
            {
                match: o
            } = P(r);
        return o(/subscribe_/) && r ? s.jsx(s.Fragment, {
            children: s.jsx(l, {
                size: "large",
                theme: "monetize",
                onClick: () => {
                    document.getElementById(r.id)?.scrollIntoView()
                },
                children: s.jsx(i, {
                    id: "monetize.promo.subscribe",
                    values: {
                        formattedPrice: n ? L(n.pricePerMonth, n.currency) : L(r?.price ?? 0, "usd")
                    }
                })
            })
        }) : null
    },
    ve = () => s.jsxs("div", {
        className: "w-full flex justify-between py-8 mt-20 items-end",
        children: [s.jsxs("div", {
            className: "flex gap-2 items-center",
            children: [s.jsx(N, {
                className: "text-success-default h-8 w-8"
            }), s.jsxs("div", {
                className: "flex flex-col gap-1",
                children: [s.jsx("p", {
                    className: "text-sm text-dark-100",
                    children: s.jsx(b, {
                        id: "monetize.promo.footer.secured_payment"
                    })
                }), s.jsx("p", {
                    className: "text-xs text-dark-300",
                    children: s.jsx(b, {
                        id: "monetize.promo.footer.secured"
                    })
                })]
            })]
        }), s.jsxs("div", {
            className: "flex flex-col items-end",
            children: [s.jsx("p", {
                className: "text-xs text-dark-300",
                children: s.jsx(b, {
                    id: "footer.copy"
                })
            }), s.jsx("p", {
                children: s.jsxs("ul", {
                    className: "flex items-center justify-right gap-3",
                    children: [s.jsx("li", {
                        children: s.jsx("a", {
                            href: "https://mee6.xyz/privacy.html",
                            className: "text-brand-veryLight text-xs font-medium hover:text-dark-100",
                            children: s.jsx(b, {
                                id: "home.footer.link.policy"
                            })
                        })
                    }), s.jsx("li", {
                        children: s.jsx("a", {
                            href: "https://mee6.xyz/terms.html",
                            className: "text-brand-veryLight text-xs font-medium hover:text-dark-100",
                            children: s.jsx(b, {
                                id: "home.footer.link.terms"
                            })
                        })
                    }), s.jsx("li", {
                        children: s.jsx("a", {
                            href: "mailto:hi@mee6bot.com",
                            className: "text-brand-veryLight text-xs font-medium hover:text-dark-100",
                            children: s.jsx(b, {
                                id: "home.footer.link.contact"
                            })
                        })
                    })]
                })
            })]
        })]
    }),
    we = ({
        guildId: e,
        config: r
    }) => {
        const {
            locale: n
        } = t(), {
            guild: o,
            loading: d,
            activeSubscription: c,
            plans: m
        } = _(e), x = a();
        return s.jsxs("div", {
            className: "relative w-[1240px] max-w-full m-auto lg:px-10 px-4 mt-10",
            children: [s.jsx(y, {
                theme: "minimalist",
                target: "_blank"
            }), s.jsx("div", {
                className: "fixed top-[60px] w-[1160px] p-10 z-50 pointer-events-none",
                children: s.jsx(K, {})
            }), o ? s.jsx(te, {
                guild: o,
                children: s.jsxs(s.Fragment, {
                    children: [s.jsxs(j, {
                        children: [s.jsx("meta", {
                            charSet: "utf-8"
                        }), s.jsxs("title", {
                            children: [o?.name, " - Membership"]
                        }), s.jsx("meta", {
                            id: "meta-description",
                            name: "description",
                            content: r.public_description || x.formatMessage({
                                id: "public.membership.description"
                            })
                        }), s.jsx("meta", {
                            property: "og:title",
                            content: o?.name
                        }), s.jsx("meta", {
                            property: "og:image",
                            content: o.icon_url
                        }), s.jsx("meta", {
                            property: "og:description",
                            content: r.public_description || x.formatMessage({
                                id: "public.membership.description"
                            })
                        })]
                    }), s.jsxs("div", {
                        className: "flex flex-col mb-10 items-stretch relative",
                        children: [s.jsx(fe, {
                            icon: o.icon_url
                        }), c ? s.jsx("div", {
                            className: "absolute top-6 right-6 hidden lg:block",
                            children: s.jsx(l, {
                                theme: "white",
                                icon: s.jsx(ee, {}),
                                iconPosition: "right",
                                target: "_blank",
                                href: c?.invite_url || `https://discord.com/channels/${o.id}`,
                                children: s.jsx(i, {
                                    id: "monetize.promo.join_button"
                                })
                            })
                        }) : null, s.jsx(H, {
                            url: o.icon_url,
                            name: o.name
                        }), s.jsxs("div", {
                            className: "flex flex-col lg:flex-row justify-between items-stretch lg:items-start text-center lg:text-left mt-6",
                            children: [s.jsxs("div", {
                                className: "flex flex-col gap-6 mb-6 lg:mb-0",
                                children: [s.jsx("h1", {
                                    className: "text-white text-h3 font-bold",
                                    children: o?.name
                                }), s.jsx("div", {
                                    className: "lg:max-w-[460px] w-full text-dark-300 whitespace-pre-line",
                                    children: r.public_description || s.jsx(i, {
                                        id: "memberships.description"
                                    })
                                })]
                            }), s.jsxs("div", {
                                className: "min-w-[235px] lg:w-auto items-stretch lg:items-start flex flex-col m-auto lg:m-0",
                                children: [s.jsx(ge, {}), c ? s.jsx(l, {
                                    className: "lg:hidden w-[235px] mt-4",
                                    theme: "white",
                                    icon: s.jsx(ee, {}),
                                    iconPosition: "right",
                                    target: "_blank",
                                    href: c?.invite_url || `https://discord.com/channels/${o.id}`,
                                    children: s.jsx(i, {
                                        id: "monetize.promo.join_button"
                                    })
                                }) : null]
                            })]
                        })]
                    }), !o.onboarded && !!o.is_owner && s.jsx(X, {
                        theme: "danger",
                        className: "mb-6",
                        buttonTitle: "plugins.membership.overview.setup",
                        to: `/${n}/dashboard/${o.id}/memberships/payout`,
                        children: s.jsx(i, {
                            id: "public.membership.owner.setup"
                        })
                    }), s.jsx(be, {}), s.jsx(ve, {})]
                })
            }) : s.jsx("div", {
                className: "w-full h-[calc(100vh-270px)] flex items-center justify-center",
                children: s.jsx(g, {
                    global: !0,
                    size: "large"
                })
            })]
        })
    },
    ke = ({
        guildID: e
    }) => {
        const {
            user: l
        } = d(), i = u(), a = r(), {
            locale: n
        } = t();
        let o = i.guildID || e;
        const {
            config: c,
            loading: m
        } = (e => {
            const s = r();
            t();
            const {
                data: l,
                status: i
            } = w(["getMembershipConfig", e], (async () => {
                if (!e) return;
                let t = await Z(e);
                if (!t.ok) {
                    if (t = await J(e), !t.ok || !t.data || !1 === t.data?.onboarded) return void s("not-found");
                    e = t.data.guild_id
                }
                if (!1 !== t.data?.onboarded) return k.viewPublicMembershipsPage(e), t.data;
                s("not-found")
            }));
            return {
                config: l,
                loading: "loading" === i
            }
        })(o);
        return Q((() => {
            location.pathname.includes(`/${n}/memberships/${o}`) && a(`/${n}/m/${o}`), document.body.classList.remove("bg-dark-700"), document.body.classList.add("bg-dark-default")
        })), V((() => {
            document.body.classList.remove("bg-dark-default"), document.body.classList.add("bg-dark-700")
        })), m || !c ? s.jsx(g, {
            global: !0,
            size: "large"
        }) : s.jsx(h, {
            children: s.jsx(q, {
                data: {
                    guild_id: o,
                    userId: l?.id,
                    page_name: "monetize_public_page"
                },
                children: s.jsx(we, {
                    guildId: c.guild_id,
                    config: c
                })
            })
        })
    };
export {
    ke as
    default
};
