import {
    j as e,
    F as s,
    z as r,
    as as i,
    y as t,
    a as m,
    b as a,
    B as l,
    f as c,
    r as d
} from "./index-e0afec69.js";
import {
    I as n
} from "./icon-3da844fe.js";
import {
    f as u,
    c as o
} from "./api-b3fc9d6a.js";
import {
    c as p,
    u as x,
    t as f,
    f as h,
    g as k,
    h as j
} from "./app-b4886647.js";
import {
    P as y,
    S as g,
    a as b
} from "./plan-container-50f5a577.js";
import {
    I as N
} from "./inline_radio_select-61cd571f.js";
const v = [{
        key: "premium"
    }, {
        key: "lifetime"
    }, {
        key: "refund"
    }, {
        key: "guilds"
    }, {
        key: "transfer",
        values: {
            link: e.jsx("a", {
                href: "/premium-transfer",
                onClick: e => {
                    e.stopPropagation()
                },
                children: e.jsx(s, {
                    id: "premium.faq.transfer.link"
                })
            })
        }
    }, {
        key: "stop"
    }, {
        key: "payment"
    }, {
        key: "currency"
    }, {
        key: "invoice"
    }, {
        key: "money"
    }, {
        key: "secure"
    }],
    w = () => {
        const {
            guild: e
        } = r(), [s] = i(), m = t(), {
            loadPortal: a
        } = p(), {
            couponId: l,
            autoApplyCoupon: c
        } = x(), d = (s, r, i, t = !1) => () => o(e?.id, s, r, [], j(), k(), t, c ? l : null).then((e => e.ok ? e.data : Promise.reject(e.status)));
        return {
            checkout: (r, i, t, l = !1) => {
                const c = s.get("source");
                a((s => {
                    s.openCheckout({
                        hostedPage: d(r, i, 0, l),
                        error: console.log,
                        success: s => {
                            u(s).then((s => {
                                s.ok && (f("new_premium_buy_success", e ? e.id : null, {
                                    source: c
                                }), h.buyPremiumSuccess(c || "", e), ga("send", "event", {
                                    eventCategory: "premium",
                                    eventAction: "buy_success"
                                })), m.refetchQueries(["getGuildSubscription", e.id])
                            }))
                        }
                    }, e, "premium")
                }))
            }
        }
    },
    P = e => {
        switch (e) {
            case "monthly":
                return 1;
            case "yearly":
                return 12;
            default:
                return 0
        }
    },
    C = ({
        plan: t,
        taxExclusive: d,
        currency: u,
        selected: o
    }) => {
        const [p] = i(), x = m(), {
            checkout: f
        } = w(), {
            guild: h
        } = r(), {
            locale: k
        } = a(), j = p.get("source"), N = t?.key, v = "yearly" === N, C = "lifetime" === N;
        return e.jsx(y, {
            mostPopular: o,
            selected: o,
            className: "min-w-[360px]",
            children: e.jsxs("div", {
                className: "w-full md:max-w-[380px] bg-dark-900 rounded-lg p-7 text-left relative overflow-hidden z-1 flex flex-col justify-between",
                children: [e.jsxs("div", {
                    children: [o && e.jsx("div", {
                        className: "absolute -top-1/2 -left-1/3 w-full h-full rounded-full bg-gradient-radial from-premiumPlus-default to-dark-900 filter blur-3xl -z-1 opacity-50"
                    }), e.jsxs("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [e.jsx("p", {
                            className: "text-h4 font-bold text-white",
                            children: e.jsx(s, {
                                id: `premium.plans.${t.key}`,
                                values: {
                                    b: s => e.jsx("span", {
                                        className: "text-premiumPlus-light",
                                        children: s
                                    })
                                }
                            })
                        }), e.jsx(g, {
                            plan: t
                        })]
                    }), e.jsx(b, {
                        plan: t,
                        currency: u,
                        taxExclusive: d,
                        mostPopular: "lifetime" === N
                    }), e.jsxs("ul", {
                        className: "grid grid-cols-1 gap-3",
                        children: [C && e.jsxs("li", {
                            className: "text-dark-300 text-sm flex items-center justify-start gap-2",
                            children: [e.jsx(n, {
                                icon: "CheckRaw",
                                className: "text-success-default w-3"
                            }), e.jsx("span", {
                                children: e.jsx(s, {
                                    id: "premium.plans.features.1",
                                    values: {
                                        span: s => e.jsx("span", {
                                            className: "font-semibold text-dark-100",
                                            children: s
                                        })
                                    }
                                })
                            })]
                        }), e.jsxs("li", {
                            className: "text-dark-300 text-sm flex items-center justify-start gap-2",
                            children: [e.jsx(n, {
                                icon: "CheckRaw",
                                className: "text-success-default w-3"
                            }), e.jsx("span", {
                                children: e.jsx(s, {
                                    id: "premium.plans.features.2",
                                    values: {
                                        span: s => e.jsx("span", {
                                            className: "font-semibold text-dark-100",
                                            children: s
                                        })
                                    }
                                })
                            })]
                        }), e.jsxs("li", {
                            className: "text-dark-300 text-sm flex items-center justify-start gap-2",
                            children: [e.jsx(n, {
                                icon: "CheckRaw",
                                className: "text-success-default w-3"
                            }), e.jsx("span", {
                                children: e.jsx(s, {
                                    id: "premium.plans.features.3",
                                    values: {
                                        span: s => e.jsx("span", {
                                            className: "font-semibold text-dark-100",
                                            children: s
                                        })
                                    }
                                })
                            })]
                        }), (C || v) && e.jsxs("li", {
                            className: "text-dark-300 text-sm flex items-center justify-start gap-2",
                            children: [e.jsx(n, {
                                icon: "CheckRaw",
                                className: "text-success-default w-3"
                            }), e.jsx("span", {
                                children: e.jsx(s, {
                                    id: "premium.plans.features.4",
                                    values: {
                                        span: s => e.jsx("span", {
                                            className: "font-semibold text-dark-100",
                                            children: s
                                        })
                                    }
                                })
                            })]
                        })]
                    })]
                }), e.jsx("div", {
                    children: e.jsx(l, {
                        theme: o ? "white" : "secondary",
                        size: "large",
                        id: "premium-plans-upgrade",
                        className: c("w-full mt-7", {
                            "bg-gradient-to-r from-premiumPlus-default to-premiumPlus-light bg-opacity-100 !text-dark-default hover:to-premiumPlus-default": o
                        }),
                        onClick: () => {
                            if (h) f(!1, P(N), !1);
                            else {
                                let e = `/${k}/dashboard?redirect=/premium?kind=${N}`;
                                j && (e = `${e}?s=${j}&kind=${N}`), x(e)
                            }
                        },
                        children: e.jsx(s, {
                            id: `premium.plans.upgrade_to_${N}`
                        })
                    })
                })]
            })
        })
    },
    E = ({
        kind: t,
        title: d = !1,
        className: u,
        hideButton: o = !1
    }) => {
        const p = [{
                section: "home.footer.link.management",
                children: [{
                    key: "automations",
                    free: !1,
                    premium: 50
                }, {
                    key: "customCommands",
                    free: !1,
                    premium: 500
                }, {
                    key: "advancedAutoMod",
                    free: !1,
                    premium: !0
                }, {
                    key: "reactionRoleMessages",
                    free: !1,
                    premium: 40
                }, {
                    key: "ticketingPanelMaxEmbeds",
                    free: 0,
                    premium: 10
                }, {
                    key: "ticketingTicketMaxEmbeds",
                    free: 0,
                    premium: 10
                }, {
                    key: "ticketingPanelsTranscripts",
                    free: !1,
                    premium: !0
                }, {
                    key: "welcome",
                    free: !1,
                    premium: !0
                }, {
                    key: "invite_tracker",
                    free: !1,
                    premium: !0
                }]
            }, {
                section: "home.footer.link.utilities",
                children: [{
                    key: "polls",
                    free: !1,
                    premium: !0
                }, {
                    key: "numberOfEmbeds",
                    free: !1,
                    premium: 500
                }, {
                    key: "searchCommand",
                    free: !0,
                    premium: !0
                }, {
                    key: "statisticsPlugin",
                    free: !1,
                    premium: !0
                }, {
                    key: "socialCounters",
                    free: !1,
                    premium: !0
                }, {
                    key: "hubsNumber",
                    free: !1,
                    premium: 100
                }, {
                    key: "timedMessages",
                    free: 1,
                    premium: 100
                }]
            }, {
                section: "home.footer.link.socialConnectors",
                children: [{
                    key: "redditNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "twitchNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "twitterNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "youtubeNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "instagramNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "rssNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "tiktokNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "blueskyNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "kickNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "podcastNotifications",
                    free: !1,
                    premium: !0
                }]
            }, {
                section: "home.footer.link.engagementFun",
                children: [{
                    key: "birthdayMessages",
                    free: !1,
                    premium: !0
                }, {
                    key: "economyPlugin",
                    free: !1,
                    premium: !0
                }, {
                    key: "customisableItems",
                    free: !1,
                    premium: 300
                }, {
                    key: "giveaways",
                    free: !1,
                    premium: !0
                }, {
                    key: "achievements",
                    free: !0,
                    premium: !0
                }, {
                    key: "starboard",
                    free: !0,
                    premium: !0
                }, {
                    key: "levelsPlugin",
                    free: !1,
                    premium: !0
                }, {
                    key: "musicQuiz",
                    free: !1,
                    premium: "premium.comparison.musicQuiz.premium"
                }, {
                    key: "customBot",
                    free: !1,
                    premium: !0
                }, {
                    key: "customPrefix",
                    free: !1,
                    premium: !0
                }, {
                    key: "vanityURL",
                    free: !1,
                    premium: !0
                }, {
                    key: "joinButton",
                    free: !1,
                    premium: !0
                }]
            }],
            [x, f] = i(),
            h = m(),
            {
                checkout: k
            } = w(),
            {
                guild: j
            } = r(),
            {
                locale: y
            } = a(),
            g = x.get("source");
        return e.jsxs("div", {
            className: `${u} hidden md:block`,
            children: [d && e.jsx("p", {
                className: "text-center font-bold text-h2 text-white mb-14",
                children: e.jsx(s, {
                    id: "premium.plans.comparison.title"
                })
            }), e.jsxs("div", {
                children: [e.jsxs("div", {
                    className: "w-full grid grid-cols-3 border-b border-dark-600 border-solid",
                    children: [e.jsx("div", {
                        className: "w-full pt-8 pb-12",
                        children: e.jsx("p", {
                            className: "text-dark-100 uppercase font-bold text-2xl",
                            children: e.jsx(s, {
                                id: d ? "premium.plans.comparison.titleXS" : "premium.plans.comparison.title"
                            })
                        })
                    }), e.jsx("div", {
                        className: "w-full pt-8 pb-12",
                        children: e.jsx("p", {
                            className: "text-dark-100 font-bold text-2xl text-center w-full",
                            children: e.jsx(s, {
                                id: "premium.plans.comparison.free"
                            })
                        })
                    }), e.jsx("div", {
                        className: "w-full pt-8 pb-12 bg-[#1E2029] rounded-t-xl",
                        children: e.jsx("p", {
                            className: "text-dark-100 font-bold text-2xl text-center w-full",
                            children: e.jsx(s, {
                                id: "premium.plans.comparison.premium"
                            })
                        })
                    })]
                }), p.map(((r, i) => e.jsxs("div", {
                    className: c("w-full grid grid-cols-3", {
                        "border-b border-dark-600 border-solid": 0 === i
                    }),
                    children: [e.jsx("div", {
                        className: c("w-full", {
                            "py-6": !r?.children,
                            "pt-6 pb-3": r?.children,
                            "pt-12": i >= 2
                        }),
                        children: e.jsx("p", {
                            className: "text-dark-100 text-h6",
                            children: e.jsx(s, {
                                id: r.section
                            })
                        })
                    }), r?.children ? e.jsxs(e.Fragment, {
                        children: [e.jsx("div", {}), e.jsx("div", {
                            className: "bg-[#1E2029]"
                        }), r?.children?.map(((r, i) => e.jsxs(e.Fragment, {
                            children: [e.jsx("div", {
                                className: c("pl-5 py-2 flex items-center justify-start", {
                                    "bg-[#2B2D38]": i % 2 != 0
                                }),
                                children: e.jsx("p", {
                                    className: "text-base text-dark-300",
                                    children: e.jsx(s, {
                                        id: `premium.comparison.${r.key}`
                                    })
                                })
                            }), e.jsx("div", {
                                className: c("py-2 flex items-center justify-center text-center min-h-[56px]", {
                                    "bg-[#2B2D38]": i % 2 != 0
                                }),
                                children: e.jsx("p", {
                                    className: "text-base text-dark-100",
                                    children: e.jsx($, {
                                        value: r?.free,
                                        type: "free"
                                    })
                                })
                            }), e.jsx("div", {
                                className: c("py-2 flex items-center justify-center text-center min-h-[56px] bg-[#1E2029]", {
                                    "!bg-[#23242D]": i % 2 != 0
                                }),
                                children: e.jsx("p", {
                                    className: "text-base text-premiumPlus-default",
                                    children: e.jsx($, {
                                        value: r?.premium
                                    })
                                })
                            })]
                        })))]
                    }) : e.jsxs(e.Fragment, {
                        children: [e.jsx("div", {
                            className: "w-full py-6 flex items-center justify-center",
                            children: e.jsx("p", {
                                className: "text-base text-center w-full",
                                children: "string" == typeof r?.free ? e.jsx(s, {
                                    id: r.free
                                }) : e.jsx(n, {
                                    icon: r?.free ? "CheckRaw" : "Close",
                                    className: c("w-3 mx-auto", {
                                        "text-danger-default": !r?.free,
                                        "text-dark-100": r?.free
                                    })
                                })
                            })
                        }), e.jsx("div", {
                            className: "w-full py-6 flex items-center justify-center bg-[#1E2029]",
                            children: e.jsx("p", {
                                className: "bg-clip-text bg-gradient-to-r from-premiumPlus-default to-premiumPlus-light text-base text-transparent font-bold text-center w-full uppercase",
                                children: e.jsx(s, {
                                    id: r.premium
                                })
                            })
                        })]
                    })]
                }, i))), !o && e.jsxs("div", {
                    className: "grid grid-cols-3",
                    children: [e.jsx("div", {}), e.jsx("div", {}), e.jsx("div", {
                        className: "px-8 py-6",
                        children: e.jsx(l, {
                            theme: "premium-gradient",
                            size: "large",
                            className: "w-full bg-gradient-to-r from-premiumPlus-default to-premiumPlus-light bg-opacity-100 hover:to-premiumPlus-default",
                            onClick: () => (e => {
                                if (j) t && k(!1, P(t), !1, e);
                                else {
                                    let e = `/${y}/dashboard?redirect=/premium`;
                                    g && (e = `${e}?s=${g}`), h(e)
                                }
                            })(!1),
                            children: e.jsx(s, {
                                id: "premium.plans.upgrade_to_premium"
                            })
                        })
                    })]
                })]
            })]
        })
    },
    $ = ({
        className: r,
        value: i,
        type: t = "premium"
    }) => "number" == typeof i ? 0 === i ? e.jsx("div", {
        className: "text-red-default text-center",
        children: i
    }) : e.jsx("div", {
        children: i
    }) : "boolean" == typeof i ? e.jsx(n, {
        icon: i ? "CheckRaw" : "Close",
        className: c("w-3 mx-auto", {
            "text-danger-default": !i,
            "text-dark-100": i && "free" === t,
            "text-premiumPlus-default": i && "premium" === t
        })
    }) : e.jsx("div", {
        className: "text-center",
        children: e.jsx(s, {
            id: i,
            values: {
                s: s => e.jsx("span", {
                    className: "text-dark-300",
                    children: s
                })
            }
        })
    }),
    _ = ({
        kind: t,
        title: u = !1,
        className: o,
        hideButton: p = !1
    }) => {
        const x = [{
                section: "home.footer.link.management",
                children: [{
                    key: "automations",
                    free: !1,
                    premium: 50
                }, {
                    key: "customCommands",
                    free: !1,
                    premium: 500
                }, {
                    key: "advancedAutoMod",
                    free: !1,
                    premium: !0
                }, {
                    key: "reactionRoleMessages",
                    free: !1,
                    premium: 40
                }, {
                    key: "ticketingPanelMaxEmbeds",
                    free: 0,
                    premium: 10
                }, {
                    key: "ticketingTicketMaxEmbeds",
                    free: 0,
                    premium: 10
                }, {
                    key: "ticketingPanelsTranscripts",
                    free: !1,
                    premium: !0
                }, {
                    key: "welcome",
                    free: !1,
                    premium: !0
                }, {
                    key: "invite_tracker",
                    free: !1,
                    premium: !0
                }]
            }, {
                section: "home.footer.link.utilities",
                children: [{
                    key: "polls",
                    free: !1,
                    premium: !0
                }, {
                    key: "numberOfEmbeds",
                    free: !1,
                    premium: 500
                }, {
                    key: "searchCommand",
                    free: !0,
                    premium: !0
                }, {
                    key: "statisticsPlugin",
                    free: !1,
                    premium: !0
                }, {
                    key: "socialCounters",
                    free: !1,
                    premium: !0
                }, {
                    key: "hubsNumber",
                    free: !1,
                    premium: 100
                }, {
                    key: "timedMessages",
                    free: 1,
                    premium: 100
                }]
            }, {
                section: "home.footer.link.socialConnectors",
                children: [{
                    key: "redditNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "twitchNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "twitterNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "youtubeNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "instagramNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "rssNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "tiktokNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "blueskyNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "kickNotifications",
                    free: !1,
                    premium: !0
                }, {
                    key: "podcastNotifications",
                    free: !1,
                    premium: !0
                }]
            }, {
                section: "home.footer.link.engagementFun",
                children: [{
                    key: "birthdayMessages",
                    free: !1,
                    premium: !0
                }, {
                    key: "economyPlugin",
                    free: !1,
                    premium: !0
                }, {
                    key: "customisableItems",
                    free: !1,
                    premium: 300
                }, {
                    key: "giveaways",
                    free: !1,
                    premium: !0
                }, {
                    key: "achievements",
                    free: !0,
                    premium: !0
                }, {
                    key: "starboard",
                    free: !0,
                    premium: !0
                }, {
                    key: "levelsPlugin",
                    free: !1,
                    premium: !0
                }, {
                    key: "musicQuiz",
                    free: !1,
                    premium: "premium.comparison.musicQuiz.premium"
                }, {
                    key: "customBot",
                    free: !1,
                    premium: !0
                }, {
                    key: "customPrefix",
                    free: !1,
                    premium: !0
                }, {
                    key: "vanityURL",
                    free: !1,
                    premium: !0
                }, {
                    key: "joinButton",
                    free: !1,
                    premium: !0
                }]
            }],
            [f] = i(),
            h = m(),
            {
                checkout: k
            } = w(),
            {
                guild: j
            } = r(),
            {
                locale: y
            } = a(),
            [g, b] = d.useState("premium"),
            v = f.get("source");
        return e.jsxs("div", {
            className: `${o} md:hidden`,
            children: [u && e.jsx("p", {
                className: "text-center font-bold text-h2 text-white mb-6",
                children: e.jsx(s, {
                    id: "premium.plans.comparison.title"
                })
            }), e.jsxs("div", {
                children: [e.jsx("div", {
                    className: "flex items-center justify-center mb-10",
                    children: e.jsx(N, {
                        className: "mb-4",
                        value: g,
                        onChange: b,
                        options: [{
                            name: "Free",
                            value: "free"
                        }, {
                            name: "Premium",
                            value: "premium"
                        }]
                    })
                }), e.jsxs("div", {
                    className: "w-full grid grid-cols-2 md:grid-cols-4 border-b border-dark-600 border-solid",
                    children: [e.jsxs(e.Fragment, {
                        children: [e.jsx("div", {
                            className: "w-full pt-8 pb-8 md:pb-12",
                            children: e.jsx("p", {
                                className: "text-dark-100 font-bold text-2xl w-full",
                                children: e.jsx(s, {
                                    id: "premium.plans.comparison.titleXS"
                                })
                            })
                        }), "free" === g && e.jsx("div", {
                            className: "w-full pt-8 pb-8 md:pb-12",
                            children: e.jsx("p", {
                                className: "text-dark-100 font-bold text-2xl text-center w-full",
                                children: e.jsx(s, {
                                    id: "premium.plans.comparison.free"
                                })
                            })
                        }), "premium" === g && e.jsx("div", {
                            className: "w-full pt-8 pb-8 md:pb-12 bg-[#1E2029] rounded-t-md",
                            children: e.jsx("p", {
                                className: "text-dark-100 font-bold text-2xl text-center w-full",
                                children: e.jsx(s, {
                                    id: "premium.plans.comparison.premium"
                                })
                            })
                        })]
                    }), x.map(((r, i) => e.jsxs("div", {
                        className: c("w-full col-span-2 md:col-span-1 grid grid-cols-2 md:grid-cols-4", {
                            "border-b border-dark-600 border-solid": 0 === i
                        }),
                        children: [e.jsx("div", {
                            className: c("w-full", {
                                "py-6": !r?.children,
                                "pt-6 pb-3": r?.children,
                                "pt-12": i >= 2
                            }),
                            children: e.jsx("p", {
                                className: "text-dark-100 text-h6",
                                children: e.jsx(s, {
                                    id: r.section
                                })
                            })
                        }), r?.children ? e.jsxs(e.Fragment, {
                            children: [
                                ["free"].includes(g) && e.jsx("div", {}), "premium" === g && e.jsx("div", {
                                    className: "md:hidden bg-[#1E2029]"
                                }), e.jsx("div", {
                                    className: "hidden md:block bg-[#1E2029]"
                                }), e.jsx("div", {
                                    className: "hidden md:block"
                                }), r?.children?.map(((r, i) => e.jsxs(e.Fragment, {
                                    children: [e.jsx("div", {
                                        className: c("md:pl-5 py-2 flex items-center justify-start", {
                                            "bg-[#2B2D38]": i % 2 != 0
                                        }),
                                        children: e.jsx("p", {
                                            className: "text-base text-dark-300",
                                            children: e.jsx(s, {
                                                id: `premium.comparison.${r.key}`
                                            })
                                        })
                                    }), "free" === g && e.jsx("div", {
                                        className: c("py-2 flex items-center justify-center text-center min-h-[56px]", {
                                            "bg-[#2B2D38]": i % 2 != 0
                                        }),
                                        children: e.jsx("p", {
                                            className: "text-base text-dark-100",
                                            children: e.jsx($, {
                                                value: r?.free,
                                                type: "free"
                                            })
                                        })
                                    }), "premium" === g && e.jsx("div", {
                                        className: c("py-2 flex items-center justify-center text-center min-h-[56px] bg-[#1E2029]", {
                                            "!bg-[#23242D]": i % 2 != 0
                                        }),
                                        children: e.jsx("p", {
                                            className: "text-base text-premiumPlus-default",
                                            children: e.jsx($, {
                                                value: r?.premium
                                            })
                                        })
                                    })]
                                })))
                            ]
                        }) : e.jsxs(e.Fragment, {
                            children: ["free" === g && e.jsx("div", {
                                className: "w-full py-6 flex items-center justify-center",
                                children: e.jsx("p", {
                                    className: "text-base text-center w-full",
                                    children: "string" == typeof r?.free ? e.jsx(s, {
                                        id: r.free
                                    }) : e.jsx(n, {
                                        icon: r?.free ? "CheckRaw" : "Close",
                                        className: c("w-3 mx-auto", {
                                            "text-danger-default": !r?.free,
                                            "text-dark-100": r?.free
                                        })
                                    })
                                })
                            }), "premium" === g && e.jsx("div", {
                                className: "w-full py-6 flex items-center justify-center bg-[#1E2029]",
                                children: e.jsx("p", {
                                    className: "bg-clip-text bg-gradient-to-r from-premiumPlus-default to-premiumPlus-light text-base text-transparent font-bold text-center w-full uppercase",
                                    children: e.jsx(s, {
                                        id: r.premium
                                    })
                                })
                            })]
                        })]
                    }, i)))]
                }), !p && e.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-4",
                    children: [e.jsx("div", {}), "free" === g && e.jsx("div", {}), "premium" === g && e.jsx("div", {
                        className: "md:bg-[#1E2029] md:px-8 py-6 rounded-b-md",
                        children: e.jsx(l, {
                            theme: "secondary",
                            size: "large",
                            className: "w-full bg-gradient-to-r from-premiumPlus-default to-premiumPlus-light bg-opacity-100 !text-dark-default hover:to-premiumPlus-default",
                            onClick: () => (e => {
                                if (j) t && k(!1, P(t), !1, e);
                                else {
                                    let e = `/${y}/dashboard?redirect=/premium`;
                                    v && (e = `${e}?s=${v}`), h(e)
                                }
                            })(!0),
                            children: e.jsx(s, {
                                id: "premium.plans.upgrade_to_premium"
                            })
                        })
                    })]
                })]
            })]
        })
    },
    F = ({
        length: s = 2
    }) => e.jsx(e.Fragment, {
        children: Array.from({
            length: s
        }).map(((s, r) => e.jsxs("div", {
            className: "bg-dark-900 rounded-lg p-7 h-[376px] w-[300px] md:w-[360px] animate-pulse",
            children: [e.jsx("div", {
                className: "w-20 h-6 rounded bg-dark-700"
            }), e.jsx("div", {
                className: "w-32 h-9 rounded bg-dark-700 mt-8"
            }), e.jsx("div", {
                className: "w-12 h-5 rounded bg-dark-700 mt-4"
            }), e.jsx("div", {
                className: "w-full h-5 rounded bg-dark-700 mt-8"
            }), e.jsx("div", {
                className: "w-full h-5 rounded bg-dark-700 mt-4"
            }), e.jsx("div", {
                className: "w-full h-5 rounded bg-dark-700 mt-4"
            }), e.jsx("div", {
                className: "w-full h-12 rounded-lg bg-dark-700 mt-6"
            })]
        }, r)))
    });
export {
    v as F, F as L, C as P, E as a, _ as b
};
