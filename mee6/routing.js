import {
    d as e,
    j as s,
    a6 as t,
    r as i,
    b as r,
    a5 as a,
    F as n,
    B as o,
    aG as l,
    aH as m,
    aI as c,
    ad as d
} from "./index-75d73738.js";
import {
    L as u,
    b as p
} from "./app-61e5c911.js";
import {
    G as j
} from "./GuildLogo-15a372ff.js";
import {
    a as x
} from "./api-6b1ed554.js";
import {
    G as h
} from "./page_view-7551f1fd.js";
import {
    u as b
} from "./useMount-18619ac0.js";
import {
    Error404 as g
} from "./404-75f11fa8.js";
import f from "./memberships_landing-135bec89.js";
import "./Loader2-aadfe498.js";
import "./modal.constants-8f18da75.js";
import "./moment-e0d604bc.js";
import "./useEffectOnce-8216f8da.js";
import "./404Illustration-b32a696b.js";
import "./Footer-ab75008e.js";
import "./viewports-7b2f2c00.js";
import "./styles-5fb10ef4.js";
import "./Title-a382f12f.js";
import "./discord_button-a30a3bda.js";
import "./tick-fe535f55.js";
import "./Divider-33c3a250.js";
import "./mixins-1c1f239e.js";
import "./Icon-00f46c3e.js";
import "./public_page-2611e517.js";
import "./throttle-8fa2be1c.js";
import "./button_card-4ddfe834.js";
import "./range-bebaefd8.js";
import "./drag-b8217901.js";
import "./useUnmount-ccc4a2e1.js";
const v = () => {
        const l = t(),
            [m, c] = i.useState(0),
            [d, g] = i.useState(!0),
            f = i.useRef(null),
            {
                user: v
            } = e(),
            {
                locale: _
            } = r(),
            w = i.useCallback((async () => {
                if (m >= 30) return void g(!1);
                const e = await x(v?.id, l.guildID);
                if (e.ok) {
                    const s = e.data.subscriptions.find((e => e.active)) || !1;
                    s ? (f.current = s, g((() => !1))) : (c(m + 1), setTimeout(w, 2e3))
                }
            }), [v?.id, l]);
        return b((() => w())), d || f.current ? s.jsx(h, {
            event: "membership_subscription_confirmation",
            data: {
                guild_id: l.guildID
            },
            children: s.jsxs("div", {
                className: "w-[760px] max-w-full m-auto",
                children: [s.jsx(p, {
                    theme: "minimalist"
                }), d ? s.jsx(u, {
                    global: !0,
                    size: "large"
                }) : s.jsx(s.Fragment, {
                    children: s.jsxs("div", {
                        className: "flex flex-col items-center",
                        children: [s.jsx(j, {
                            guild: f.current?.guild,
                            size: 120,
                            radius: 60
                        }), s.jsx("h1", {
                            className: "text-white font-bold text-h1 mt-8 mb-6",
                            children: s.jsx(n, {
                                id: "public.membership.confirmation.title"
                            })
                        }), s.jsx("div", {
                            className: "w-[560px] max-w-full text-center text-body text-dark-300 mb-8",
                            children: s.jsx(n, {
                                id: "public.membership.confirmation.description",
                                values: {
                                    plan: f.current?.plan.name,
                                    guild: f.current?.guild?.name,
                                    b: e => s.jsx("strong", {
                                        className: "text-dark-100 font-bold",
                                        children: e
                                    })
                                }
                            })
                        }), s.jsx(o, {
                            size: "large",
                            target: "_blank",
                            href: f.current?.invite_url || `https://discord.com/channels/${f.current?.guild.id}`,
                            children: s.jsx(n, {
                                id: "public.membership.discordLink"
                            })
                        })]
                    })
                })]
            })
        }) : s.jsx(a, {
            to: {
                pathname: `/${_}`,
                search: ""
            }
        })
    },
    _ = () => {
        const {
            user: t
        } = e();
        return t ? s.jsx(v, {}) : s.jsx(u, {
            global: !0,
            size: "large"
        })
    },
    w = () => {
        const l = t(),
            [m, c] = i.useState(0),
            [d, h] = i.useState(!0),
            g = i.useRef(null),
            {
                user: f
            } = e(),
            {
                locale: v
            } = r(),
            _ = async () => {
                if (m >= 30) return void h(!1);
                const e = await x(f.id, l.guildID);
                if (e.ok) {
                    const s = e.data.subscriptions.find((e => e.active)) || !1;
                    s ? (g.current = s, h((() => !1))) : (c(m + 1), setTimeout(_, 2e3))
                }
            };
        return b((() => _())), d || g.current ? s.jsxs("div", {
            className: "w-[760px] max-w-full m-auto",
            children: [s.jsx(p, {
                theme: "minimalist"
            }), d ? s.jsx(u, {
                global: !0,
                size: "large"
            }) : s.jsx(s.Fragment, {
                children: s.jsxs("div", {
                    className: "flex flex-col items-center",
                    children: [s.jsx(j, {
                        guild: g.current?.guild,
                        size: 120,
                        radius: 60
                    }), s.jsx("h1", {
                        className: "text-white font-bold text-h1 mt-8 mb-6",
                        children: s.jsx(n, {
                            id: "public.membership.upgrade.confirmation.title"
                        })
                    }), s.jsx("div", {
                        className: "w-[560px] max-w-full text-center text-body text-dark-300 mb-8",
                        children: s.jsx(n, {
                            id: "public.membership.upgrade.confirmation.description",
                            values: {
                                plan: g.current?.plan.name,
                                guild: g.current?.guild?.name,
                                b: e => s.jsx("strong", {
                                    className: "text-dark-100 font-bold",
                                    children: e
                                })
                            }
                        })
                    }), s.jsx(o, {
                        size: "large",
                        target: "_blank",
                        href: g.current?.invite_url || `https://discord.com/channels/${g.current.guild.id}`,
                        children: s.jsx(n, {
                            id: "public.membership.discordLink"
                        })
                    })]
                })
            })]
        }) : s.jsx(a, {
            to: {
                pathname: `/${v}`,
                search: ""
            }
        })
    },
    k = () => {
        const {
            user: t
        } = e();
        return t ? s.jsx(w, {}) : s.jsx(u, {
            global: !0,
            size: "large"
        })
    },
    N = () => l([m({
        path: "/not-found",
        element: s.jsx(g, {})
    }), m({
        path: "/:guildID/confirmation",
        element: s.jsx(_, {})
    }), m({
        path: "/:guildID/upgrade-confirmation",
        element: s.jsx(k, {})
    }), c({
        path: "/:guildID",
        element: () => d((() => import("./promo-f08c7fef.js")), ["assets/promo-f08c7fef.js", "assets/index-75d73738.js", "assets/index-80b9a872.css", "assets/app-61e5c911.js", "assets/Loader2-aadfe498.js", "assets/modal.constants-8f18da75.js", "assets/modal-d7fe36af.css", "assets/moment-e0d604bc.js", "assets/app-f2784ea6.css", "assets/monetize_plans-08dd227f.js", "assets/api-6b1ed554.js", "assets/hateoas-53f32c60.js", "assets/_baseIteratee-2fc96153.js", "assets/isArguments-425e080e.js", "assets/_baseSet-2c7948d0.js", "assets/_getAllKeysIn-15f6bc15.js", "assets/_baseAssignValue-a9ab2ca5.js", "assets/_defineProperty-55355380.js", "assets/rotate-0a47c2f4.js", "assets/currency-ff0793d9.js", "assets/radio-f7fb242a.js", "assets/_baseFlatten-d838f45c.js", "assets/wallet-38129830.js", "assets/GuildLogo-15a372ff.js", "assets/useMembershipsPlan-aa6f9f32.js", "assets/tick-fe535f55.js", "assets/role-1371d7ba.js", "assets/emoji-99768063.js", "assets/minBy-4c8dec32.js", "assets/useMount-bc92b7b5.js", "assets/tslib-f175565a.js", "assets/useUnmount-35d8f161.js", "assets/notifications-1a73284f.js", "assets/warning-627ac771.js", "assets/CSSTransition-3c519ae3.js", "assets/objectWithoutPropertiesLoose-87a5ea27.js", "assets/load_notifications-62f93346.js", "assets/page_view-7551f1fd.js", "assets/index-4ef283dc.js", "assets/export-379574f3.js"])
    }), m({
        path: "/",
        element: s.jsx(f, {})
    })]);
export {
    N as MembershipsRouting, N as
    default
};
