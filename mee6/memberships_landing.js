import {
    j as e,
    F as s,
    d as i,
    a as t,
    b as a,
    r as l,
    o as r,
    B as n,
    I as d,
    f as c,
    t as m,
    v as o,
    a3 as x
} from "./index-afe8eeea.js";
import {
    F as p
} from "./Footer-55333e9b.js";
import {
    H as j,
    A as h
} from "./styles-8925274f.js";
import {
    T as g
} from "./tick-e20cbdec.js";
import {
    C as f
} from "./modal.constants-0cca4730.js";
import {
    D as b
} from "./Divider-6afa1222.js";
import {
    I as u
} from "./Icon-1cc9e506.js";
import {
    u as v
} from "./public_page-79dba24a.js";
import {
    w,
    H as N,
    a3 as _,
    m as k,
    b as y
} from "./app-ba64cf70.js";
import {
    B as $
} from "./button_card-44367551.js";
import {
    R as z
} from "./range-87850a05.js";
import {
    G as R
} from "./page_view-108bcc78.js";
import "./Loader2-e1b3d35e.js";
import "./viewports-c65d73a1.js";
import "./Title-b4f370d0.js";
import "./discord_button-833e5a26.js";
import "./mixins-31afc8b6.js";
import "./throttle-57801fc9.js";
import "./moment-e0d604bc.js";
import "./drag-af40a3c1.js";
import "./useUnmount-b0afc046.js";
import "./useEffectOnce-e5eb90ec.js";
const M = [{
        key: "mee6",
        perks: !0,
        percent: 5,
        icon: "MEE6"
    }, {
        key: "patreon",
        perks: [0, 1],
        percent: 8,
        icon: "Patreon"
    }, {
        key: "twitch",
        perks: [2],
        percent: 50,
        icon: "Twitch"
    }],
    F = ["customPlans", "customLink", "discord", "pay", "refund"],
    S = () => e.jsx("div", {
        className: "flex md:gap-6 gap-12 mt-20 w-[480px] md:w-[1024px] max-w-full md:px-10 px-8 md:-mb-[300px] flex-col md:flex-row",
        children: M.map((i => e.jsxs("article", {
            className: "flex flex-col grow bg-grey-700 rounded-sm pb-12 px-6",
            children: [e.jsxs("header", {
                className: "flex flex-col items-center",
                children: [i.icon && e.jsx(u, {
                    className: "h-[48px] -mt-6",
                    icon: i.icon,
                    size: "xlarge"
                }), e.jsx("p", {
                    className: "text-body text-center mt-4 mb-1 text-white",
                    children: e.jsx(s, {
                        id: `landing.memberships.comparison.${i.key}.title`
                    })
                }), e.jsx("div", {
                    className: "font-bold text-3xl",
                    children: e.jsx(s, {
                        id: "landing.memberships.comparison.percent",
                        values: {
                            amount: i.percent,
                            b: s => e.jsx("strong", {
                                className: "text-white mr-2",
                                children: s
                            })
                        }
                    })
                })]
            }), e.jsx(b, {}), e.jsx("ul", {
                className: "max-w-full w-[250px] sm:w-[280px] md:w-auto",
                children: F.map(((t, a) => {
                    const l = !0 === i.perks || i.perks && i.perks.includes(a);
                    return e.jsxs("li", {
                        className: "flex items-center mb-4 last:mb-0",
                        children: [l ? e.jsx(g, {
                            className: "text-green-default"
                        }) : e.jsx(f, {
                            className: "text-red-default h-6 w-6 p-1.5"
                        }), e.jsx("span", {
                            className: "ml-1",
                            children: e.jsx(s, {
                                id: `landing.memberships.comparison.${i.key}.perks.${t}`,
                                values: {
                                    b: s => e.jsx("strong", {
                                        className: "text-white mx-1 first:ml-0 last:mr-0",
                                        children: s
                                    })
                                }
                            })
                        })]
                    }, t)
                }))
            })]
        }, i.key)))
    }),
    B = () => e.jsxs("div", {
        className: "pointer-events-none select-none flex flex-col gap-4 text-h6",
        children: [e.jsx($, {
            icon: e.jsx(w, {}),
            children: e.jsx(s, {
                id: "landing.memberships.setup.image.button"
            })
        }), e.jsx("div", {
            className: "bg-dark-800 rounded shadow-sm p-6 text-dark-100",
            children: e.jsxs("div", {
                className: "flex flex-1 items-center gap-4",
                children: [e.jsx(u, {
                    icon: "VendorStripe"
                }), e.jsx("span", {
                    children: e.jsx(s, {
                        id: "landing.memberships.setup.image.service.stripe"
                    })
                }), e.jsx(N, {
                    theme: "success",
                    size: "small",
                    className: "ml-auto",
                    children: e.jsx(s, {
                        id: "public.membershipSubs.status.active"
                    })
                })]
            })
        }), e.jsx("div", {
            className: "bg-dark-800 rounded shadow-sm p-6 text-dark-100 opacity-50",
            children: e.jsxs("div", {
                className: "flex flex-1 items-center gap-4",
                children: [e.jsx(u, {
                    icon: "VendorPaypal"
                }), e.jsx("span", {
                    children: e.jsx(s, {
                        id: "landing.memberships.setup.image.service.paypal"
                    })
                }), e.jsx(_, {
                    className: "ml-auto"
                })]
            })
        })]
    }),
    D = "_coin_1acid_1",
    E = "_coinFrontLeft_1acid_30",
    L = "_coinBackLeft_1acid_55",
    P = "_coinBackRight_1acid_83",
    T = "_coinFrontRight_1acid_110",
    U = () => e.jsxs(e.Fragment, {
        children: [e.jsx("div", {
            className: `${D} ${E}`
        }), e.jsx("div", {
            className: `${D} ${L}`
        }), e.jsx("div", {
            className: `${D} ${P}`
        }), e.jsx("div", {
            className: `${D} ${T}`
        })]
    }),
    C = () => {
        const {
            user: d
        } = i(), c = t(), {
            locale: m
        } = a(), o = l.useCallback((() => {
            k("home_add_to_discord_click", null, {
                labe: "membership_landing"
            }), d?.id ? (k("home_add_to_discord_dashboard", null, {
                label: "membership_landing"
            }), c(`/${m}/dashboard?redirect=/memberships`)) : (c({
                search: `?redirect=/${m}/dashboard?redirect=/memberships`
            }), k("home_add_to_discord_login", null, {
                label: "membership_landing"
            }), r())
        }), []);
        return e.jsx(n, {
            onClick: o,
            size: "large",
            icon: e.jsx(w, {}),
            iconPosition: "right",
            theme: "monetize",
            children: e.jsx(s, {
                id: "landing.memberships.hero.cta"
            })
        })
    },
    V = e => (20.7697 - 1.48539 * Math.log(5.7683 * e + 913.397)) / 100 * e,
    I = ({
        className: i
    }) => {
        const [t, a] = l.useState(1e4);
        return e.jsxs("div", {
            className: `bg-dark-800 text-center shadow-xs rounded-lg max-w-[760px] w-full p-6 flex flex-col items-center ${i}`,
            children: [e.jsx("div", {
                className: "text-white text-lg font-semibold mb-2",
                children: e.jsx(s, {
                    id: "landing.monetize.slider.title"
                })
            }), e.jsx("div", {
                className: "text-dark-400 text-xs mb-2",
                children: e.jsx(s, {
                    id: "landing.monetize.slider.description"
                })
            }), e.jsx("div", {
                className: "text-dark-100 text-h1 font-bold mb-6",
                children: 5e4 === t ? e.jsx(s, {
                    id: "landing.monetize.slider.value.max"
                }) : Math.round(15 * V(t)).toLocaleString() + " USD"
            }), e.jsx("div", {
                className: "w-full max-w-[560px] m-auto mb-8",
                children: e.jsx(z, {
                    tooltip: 5e4 === t ? "landing.monetize.slider.tooltip.max" : "landing.monetize.slider.tooltip",
                    size: "large",
                    value: t,
                    onChange: e => a(e),
                    max: 5e4,
                    step: 100,
                    min: 0,
                    liveUpdate: !0,
                    tooltipAlwaysVisible: !0,
                    theme: "monetize"
                })
            })]
        })
    },
    A = d.forwardRef((({
        title: s,
        description: i,
        image: t,
        reversed: a,
        className: l = "",
        visible: r
    }, n) => e.jsxs("div", {
        ref: n,
        className: c(`flex flex-col-reverse gap-8 lg:gap-0 px-4 items-center text-center justify-between transition-all duration-500 w-full max-w-[1160px] mt-20 lg:mt-[160px] ${l}`, {
            "lg:text-left": !a,
            "lg:text-right": a,
            "lg:flex-row": !a,
            "lg:flex-row-reverse": a,
            "opacity-0 translate-y-20": !r,
            "opacity-100 -translate-y-0": r
        }),
        children: [e.jsxs("div", {
            className: "max-w-[460px] gap-8 flex flex-col",
            children: [e.jsx("div", {
                className: "text-h1 font-bold text-dark-100",
                children: s
            }), e.jsx("div", {
                className: "text-lg text-dark-300",
                children: i
            })]
        }), e.jsx("div", {
            className: "max-w-[560px] w-full",
            children: "string" == typeof t ? e.jsx("img", {
                src: t
            }) : t
        })]
    }))),
    H = () => {
        const t = m(),
            {
                user: r
            } = i(),
            {
                visibleRefs: n,
                registerRef: d
            } = v();
        l.useRef();
        const {
            locale: c
        } = a(), g = e => t.formatMessage({
            id: `landing.memberships.${e}`
        });
        return e.jsxs(R, {
            children: [e.jsxs(o, {
                children: [e.jsx("title", {
                    children: "Membership Discord Bot | MEE6"
                }), e.jsx("link", {
                    rel: "canonical",
                    href: `https://mee6.xyz/${c}/memberships`
                })]
            }), e.jsx(y, {
                redirectToDashboard: !0
            }), e.jsxs("div", {
                className: "flex flex-col items-center",
                children: [e.jsx(U, {}), e.jsxs("div", {
                    className: "flex flex-col pt-10 max-w-[760px] w-full text-center items-center px-4",
                    children: [e.jsx(j, {
                        children: e.jsx(s, {
                            id: "landing.memberships.hero.title"
                        })
                    }), e.jsx("div", {
                        className: "mb-10 mt-6 text-lg text-dark-300 max-w-[560px]",
                        children: e.jsx(s, {
                            id: "landing.memberships.hero.description"
                        })
                    }), e.jsx(I, {
                        className: "mb-10"
                    }), e.jsx(x, {
                        event: "start_earning_on_discord",
                        children: e.jsx(C, {})
                    })]
                }), e.jsx(A, {
                    image: e.jsx(B, {}),
                    title: g("setup.title"),
                    description: g("setup.description"),
                    ref: d("setup"),
                    visible: n.includes("setup")
                }), e.jsx(A, {
                    image: "/assets/plans-d67a1387.webp",
                    title: g("plans.title"),
                    description: g("plans.description"),
                    reversed: !0,
                    ref: d("plans"),
                    visible: n.includes("plans")
                }), e.jsxs("div", {
                    className: "flex flex-col items-center bg-dark-800 w-full mt-8 lg:mt-40 py-20 mb-8 lg:mb-[264px]",
                    children: [e.jsx("div", {
                        className: "text-h1 text-dark-100 font-bold mb-6",
                        children: e.jsx(s, {
                            id: g("comparison.title")
                        })
                    }), e.jsx("div", {
                        className: "text-lg max-w-[560px]",
                        children: e.jsx(s, {
                            id: g("comparison.description")
                        })
                    }), e.jsx(S, {})]
                }), e.jsx(x, {
                    event: "start_earning_on_discord",
                    children: e.jsx(C, {})
                }), e.jsx(A, {
                    image: "/assets/perks-e8e342da.webp",
                    title: g("audience.title"),
                    description: g("audience.description"),
                    ref: d("audience"),
                    visible: n.includes("audience")
                }), e.jsx(A, {
                    image: "/assets/subscription-074b671a.webp",
                    title: g("creator.title"),
                    description: g("creator.description"),
                    reversed: !0,
                    ref: d("creator"),
                    visible: n.includes("creator")
                }), e.jsx(h, {
                    hasUser: !!r,
                    label: "membership_landing"
                }), e.jsx(p, {})]
            })]
        })
    };
export {
    H as
    default
};
