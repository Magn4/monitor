import {
    d as e,
    aj as s,
    j as t,
    F as a,
    b as i,
    L as l,
    r,
    y as n,
    t as c,
    u as o,
    a3 as d,
    B as m,
    I as p
} from "./index-75d73738.js";
import {
    e as x,
    c as u,
    D as b,
    b as h,
    L as j
} from "./app-61e5c911.js";
import {
    a as f
} from "./api-6b1ed554.js";
import {
    B as g
} from "./Blockquote-ac14ff16.js";
import {
    E as y
} from "./expandable-f0433bfd.js";
import {
    u as w,
    a as v
} from "./hateoas-53f32c60.js";
import {
    h as _
} from "./moment-e0d604bc.js";
import {
    G as N
} from "./GuildLogo-15a372ff.js";
import {
    E as k
} from "./export-379574f3.js";
import {
    W as S
} from "./modal.constants-8f18da75.js";
import {
    R as P,
    a as C
} from "./radio-f7fb242a.js";
import {
    C as Y
} from "./confirm_modal-d8631fcb.js";
import {
    u as M
} from "./load_notifications-62f93346.js";
import {
    f as F
} from "./currency-ff0793d9.js";
import {
    G as B
} from "./page_view-7551f1fd.js";
import {
    N as T
} from "./notifications-1a73284f.js";
import "./Loader2-aadfe498.js";
import "./mixins-1c1f239e.js";
import "./viewports-7b2f2c00.js";
import "./_baseIteratee-2fc96153.js";
import "./isArguments-425e080e.js";
import "./_baseSet-2c7948d0.js";
import "./_getAllKeysIn-15f6bc15.js";
import "./_baseAssignValue-a9ab2ca5.js";
import "./_defineProperty-55355380.js";
import "./_baseFlatten-d838f45c.js";
import "./warning-627ac771.js";
import "./CSSTransition-3c519ae3.js";
import "./objectWithoutPropertiesLoose-87a5ea27.js";
const D = ({
        sub: e
    }) => t.jsx("div", {
        className: `inline-block rounded-2xl py-1 px-2 text-xs ${{green:"text-green-default bg-green-default/20",grey:"text-grey-200 bg-grey-200/20",warning:"text-yellow-default bg-yellow-default/20",error:"text-red-default bg-red-default/20"}["expired"===e.status?"grey":"active"===e.status?"green":"error"===e.status||"incomplete"===e.status?"error":"warning"]}`,
        children: t.jsx(a, {
            id: "canceled" === e.status ? "public.membershipSubs.status.activeUntil" : `public.membershipSubs.status.${e.status}`,
            values: {
                date: _(e.expire_at).format("ll")
            }
        })
    }),
    L = ({
        guild: e,
        plan: s,
        currency: a,
        sub: r
    }) => {
        const {
            locale: n
        } = i();
        return t.jsxs("div", {
            className: "flex",
            children: [t.jsx(N, {
                className: "mr-4",
                guild: e,
                size: 52,
                radius: 26
            }), t.jsxs("div", {
                className: "flex flex-col",
                children: [t.jsxs("h3", {
                    className: "font-bold text-white text-h6 flex gap-2 items-center",
                    children: [e?.name || s.guild_id, r.active ? t.jsxs(t.Fragment, {
                        children: [t.jsx(l, {
                            to: `/${n}/m/` + s.guild_id,
                            children: t.jsx(k, {
                                className: "h-6 w-6 text-dark-200"
                            })
                        }), t.jsx("a", {
                            target: "_blank",
                            href: r?.invite_url || `https://discord.com/channels/${e.id}`,
                            children: t.jsx(b, {
                                className: "h-6 w-6"
                            })
                        })]
                    }) : null]
                }), t.jsxs("div", {
                    className: "text-body",
                    children: [t.jsxs("span", {
                        className: "text-dark-300",
                        children: [s.name, " | "]
                    }), t.jsx("strong", {
                        className: "text-white",
                        children: a
                    })]
                })]
            })]
        })
    },
    O = ({
        hook: e,
        sub: s
    }) => {
        const {
            match: i,
            actions: l
        } = w(s);
        r.useState(!1);
        const c = n();
        return s.total, t.jsx(t.Fragment, {
            children: t.jsxs(S, {
                open: e.isOpen,
                onClose: () => e.close(),
                children: [t.jsx(S.Header, {
                    children: t.jsx("div", {
                        className: "text-body text-dark-100 font-semibold",
                        children: t.jsx(a, {
                            id: "subscriptions.switchPayment.title"
                        })
                    })
                }), t.jsx("div", {
                    className: "text-dark-300 text-sm mt-2",
                    children: t.jsx(a, {
                        id: "subscriptions.switchPayment.description"
                    })
                }), t.jsx("div", {
                    className: "text-dark-300 text-sm mt-4",
                    children: t.jsx(a, {
                        id: "subscriptions.switchPayment.description.p2"
                    })
                }), t.jsx("label", {
                    className: "text-dark-100 my-6 text-body block",
                    children: t.jsx(a, {
                        id: "memberships.checkout.payment.label"
                    })
                }), t.jsxs(P, {
                    className: "mb-8",
                    onChange: () => {},
                    value: i(/switch_payment_to_stripe/) ? "STRIPE" : "CRYPTO",
                    children: [i(/switch_payment_to_stripe/) ? t.jsx(C, {
                        title: t.jsx(a, {
                            id: "memberships.checkout.mode.stripe"
                        }),
                        description: t.jsx(a, {
                            id: "memberships.checkout.mode.stripe.description"
                        }),
                        value: "STRIPE"
                    }) : null, i(/switch_payment_to_paypal/) ? t.jsx(C, {
                        title: "memberships.checkout.mode.paypal",
                        value: "PAYPAL"
                    }) : null]
                }), t.jsx(S.Footer, {
                    confirmButtonText: "subscriptions.switchPayment.confirm",
                    onConfirm: async () => {
                        if ("CRYPTO" === s.payment_method?.type) {
                            const e = await l.switch_payment_to_stripe();
                            e.ok && e.data?.url && (window.location.href = e.data.url)
                        } else await l.switch_payment_to_crypto();
                        await c.refetchQueries()
                    }
                })]
            })
        })
    },
    $ = ({
        sub: s
    }) => {
        const {
            user: l
        } = e(), r = c(), {
            locale: p
        } = i(), {
            addNotification: x
        } = M(), u = o(), b = o(), h = n(), {
            match: j,
            actions: f
        } = w(s), g = F(s.total, s.currency || "usd");
        return t.jsxs(y, {
            className: "mb-4 rounded-lg",
            isOpened: !0,
            renderHeader: () => t.jsx(L, {
                sub: s,
                guild: s.guild,
                plan: s.plan,
                currency: g
            }),
            children: [t.jsx("div", {
                className: "h-px w-full bg-dark-600 mb-4"
            }), t.jsxs("div", {
                className: "table",
                children: ["active" === s.status && t.jsxs("div", {
                    className: "table-row",
                    children: [t.jsx("div", {
                        className: "table-cell py-1 pr-6",
                        children: t.jsx(a, {
                            id: "public.membershipSubs.label.nextPayment"
                        })
                    }), t.jsx("div", {
                        className: "table-cell py-1 text-dark-100",
                        children: _(s.next_billing_time).format("ll")
                    })]
                }), t.jsxs("div", {
                    className: "table-row",
                    children: [t.jsx("div", {
                        className: "table-cell py-1 pr-6 text-dark-300 text-sm",
                        children: t.jsx(a, {
                            id: "public.membershipSubs.label.paymentMethod"
                        })
                    }), t.jsx("div", {
                        className: "table-cell py-1 text-dark-100",
                        children: s.payment_method?.type[0] + s.payment_method?.type.substring(1).toLowerCase()
                    })]
                }), t.jsxs("div", {
                    className: "table-row",
                    children: [t.jsx("div", {
                        className: "table-cell py-1 pr-6 text-dark-300 text-sm",
                        children: t.jsx(a, {
                            id: "public.membershipSubs.label.amount"
                        })
                    }), t.jsx("div", {
                        className: "table-cell py-1 text-dark-100",
                        children: g
                    }), j(/switch/) ? t.jsx("button", {
                        className: "text-brand-default",
                        onClick: () => u.open(),
                        children: t.jsx(a, {
                            id: "subscriptions.sub.switchPayment"
                        })
                    }) : null]
                }), t.jsxs("div", {
                    className: "table-row",
                    children: [t.jsx("div", {
                        className: "table-cell py-1 pr-6 text-dark-300 text-sm",
                        children: t.jsx(a, {
                            id: "public.membershipSubs.label.status"
                        })
                    }), t.jsx("div", {
                        className: "table-cell py-1 text-dark-100",
                        children: t.jsx(D, {
                            sub: s
                        })
                    })]
                })]
            }), t.jsx("div", {
                className: "h-px w-full bg-dark-600 my-4"
            }), t.jsxs("div", {
                className: "flex mb-2",
                children: ["canceled" === s.status ? t.jsx(a, {
                    id: "public.membershipSubs.status.canceledOn",
                    values: {
                        date: _(s.canceled_at).format("MM/DD/YYYY")
                    }
                }) : null, "expired" === s.status ? t.jsx(a, {
                    id: "public.membershipSubs.status.expiredOn",
                    values: {
                        date: _(s.expire_at).format("MM/DD/YYYY")
                    }
                }) : null]
            }), t.jsxs("div", {
                className: "flex gap-4",
                children: [j(/get_stripe_portal_url/) ? t.jsx(d, {
                    event: "membership_manage_payment",
                    children: t.jsx(m, {
                        onClick: async () => {
                            const e = await f.get_stripe_portal_url();
                            e.ok && e.data?.url && (window.location.href = e.data.url)
                        },
                        children: t.jsx(a, {
                            id: "public.membershipSubs.manage"
                        })
                    })
                }) : s.active && "CRYPTO" === s.payment_method.type ? t.jsx(d, {
                    event: "membership_manage_payment",
                    children: t.jsx(m, {
                        to: `/${p}/wallet`,
                        children: t.jsx(a, {
                            id: "public.membershipSubs.manage"
                        })
                    })
                }) : null, j(/^cancel/) ? t.jsxs(t.Fragment, {
                    children: [t.jsx(m, {
                        theme: "danger",
                        onClick: () => b.open(),
                        children: t.jsx(a, {
                            id: "public.membershipSubs.cancel"
                        })
                    }), t.jsx(Y, {
                        hook: b,
                        onConfirm: async () => {
                            const e = await f.cancel();
                            await h.refetchQueries(["getSubscriptions", l?.id]);
                            const {
                                actions: i,
                                match: n
                            } = v(e.data);
                            x({
                                type: "success",
                                content: t.jsxs("div", {
                                    className: "w-full flex items-center justify-between",
                                    children: [t.jsx("div", {
                                        children: r.formatMessage({
                                            id: "subscriptions.cancel.done"
                                        }, {
                                            cancelDate: _(s?.next_billing_time).format("DD MMMM YYYY")
                                        })
                                    }), n(/uncancel/) ? t.jsx(m, {
                                        size: "small",
                                        theme: "white",
                                        onClick: async () => {
                                            i.uncancel && (await i.uncancel(), await h.refetchQueries())
                                        },
                                        children: t.jsx(a, {
                                            id: "subscriptions.cancel.resub"
                                        })
                                    }) : null]
                                })
                            })
                        },
                        theme: "danger",
                        confirmButtonText: "subscriptions.cancel.button",
                        title: "subscriptions.cancel.title",
                        description: "subscriptions.cancel.description",
                        cancelButtonText: "subscriptions.cancel.cancel"
                    })]
                }) : null, j(/uncancel/) ? t.jsx(m, {
                    onClick: async () => {
                        await f.uncancel(), await h.refetchQueries(["getSubscriptions", l?.id])
                    },
                    children: t.jsx(a, {
                        id: "public.membershipSubs.resubscribe"
                    })
                }) : null]
            }), t.jsx(O, {
                sub: s,
                hook: u
            })]
        }, s.id)
    },
    A = () => {
        const {
            locale: r
        } = i(), {
            openBillingMenu: n
        } = (() => {
            const {
                loadPortal: e
            } = u();
            return {
                openBillingMenu: () => {
                    e((e => {
                        e.setPortalSession((() => s.getUserBillingSession("@me").then((e => e.ok ? e.data : Promise.reject())))), e.createChargebeePortal().open({})
                    }))
                }
            }
        })(), {
            loading: c,
            subscriptions: o
        } = (() => {
            const {
                user: s
            } = e(), {
                data: t,
                status: a
            } = x(["getSubscriptions", s?.id], (async () => {
                if (!s?.id) return;
                const e = await f(s.id);
                return e.ok ? e.data.subscriptions : []
            }));
            return {
                subscriptions: t || [],
                loading: "loading" === a || void 0 === t
            }
        })();
        return c ? t.jsx(j, {
            global: !0,
            size: "large"
        }) : t.jsxs(t.Fragment, {
            children: [t.jsx("div", {
                className: "fixed top-[60px] w-[760px] z-50",
                children: t.jsx(T, {})
            }), t.jsx("h1", {
                className: "text-h2 font-bold text-white mb-12 mt-24 text-center",
                children: t.jsx(a, {
                    id: "public.membershipSubs.title"
                })
            }), t.jsxs(t.Fragment, {
                children: [o.filter((e => e.active)).length > 0 ? t.jsx("h2", {
                    className: "text-headline font-bold text-white mb-6",
                    children: t.jsx(a, {
                        id: "public.membershipSubs.active.title"
                    })
                }) : null, o.filter((e => e.active)).map((e => t.jsx(p.Fragment, {
                    children: t.jsx($, {
                        sub: e
                    })
                }, e.id)))]
            }), t.jsxs(t.Fragment, {
                children: [o.filter((e => !e.active)).length > 0 ? t.jsx("h2", {
                    className: "text-headline font-bold text-white mb-6 mt-8",
                    children: t.jsx(a, {
                        id: "public.membershipSubs.expired.title"
                    })
                }) : null, o.filter((e => !e.active)).map((e => t.jsx($, {
                    sub: e
                }, e.id)))]
            }), 0 === o.length ? t.jsxs("div", {
                className: "w-full flex flex-col justify-between items-center",
                children: [t.jsx("p", {
                    className: "text-dark-300 text-base mb-12",
                    children: t.jsx(a, {
                        id: "public.membershipSubs.empty"
                    })
                }), t.jsx(g, {
                    className: "block w-full rounded-lg",
                    children: t.jsx(a, {
                        id: "public.membershipSubs.empty.redirect",
                        values: {
                            dashboard: e => t.jsx(l, {
                                className: "font-bold",
                                to: `/${r}/dashboard`,
                                children: e
                            }),
                            billing: e => t.jsx("a", {
                                className: "font-bold cursor-pointer",
                                onClick: () => n(),
                                children: e
                            }),
                            strong: e => t.jsx("span", {
                                className: "font-bold",
                                children: e
                            })
                        }
                    })
                })]
            }) : null]
        })
    },
    R = () => t.jsx(B, {
        children: t.jsxs("div", {
            className: "max-w-[680px] w-full m-auto pb-20",
            children: [t.jsx(h, {
                theme: "minimalist",
                alwaysFixed: !0
            }), t.jsx(A, {})]
        })
    });
export {
    R as
    default
};
