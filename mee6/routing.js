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
} from "./index-e0afec69.js";
import {
    L as u,
    b as p
} from "./app-b4886647.js";
import {
    G as j
} from "./GuildLogo-50c6544d.js";
import {
    a as x
} from "./api-bda691b8.js";
import {
    G as h
} from "./page_view-8012ef9e.js";
import {
    u as b
} from "./useMount-c7a3921f.js";
import {
    Error404 as g
} from "./404-74635981.js";
import f from "./memberships_landing-1357f389.js";
import "./Loader2-ea5f73c7.js";
import "./modal.constants-09c27985.js";
import "./moment-e0d604bc.js";
import "./useEffectOnce-84f073df.js";
import "./404Illustration-b32a696b.js";
import "./Footer-caf192de.js";
import "./viewports-530dfeda.js";
import "./styles-c00fd69e.js";
import "./Title-3370b661.js";
import "./discord_button-a905de9f.js";
import "./tick-6479cdd6.js";
import "./Divider-494e2cdb.js";
import "./mixins-dfc47826.js";
import "./Icon-f55c9eb7.js";
import "./public_page-5b1efd6d.js";
import "./throttle-b0532002.js";
import "./button_card-d548c5f2.js";
import "./range-4c1b7e44.js";
import "./drag-a4dbe2d4.js";
import "./useUnmount-75971df2.js";
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
        element: () => d((() => import("./promo-04366fc4.js")), ["assets/promo-04366fc4.js", "assets/index-e0afec69.js", "assets/index-9529b95d.css", "assets/app-b4886647.js", "assets/Loader2-ea5f73c7.js", "assets/modal.constants-09c27985.js", "assets/modal-d7fe36af.css", "assets/moment-e0d604bc.js", "assets/app-f2784ea6.css", "assets/monetize_plans-47213cc3.js", "assets/api-bda691b8.js", "assets/hateoas-0d7aebac.js", "assets/_baseIteratee-79fa20e9.js", "assets/isArguments-c20fe69a.js", "assets/_baseSet-bc572f64.js", "assets/_getAllKeysIn-3fdbf9dd.js", "assets/_baseAssignValue-a6f8b2d7.js", "assets/_defineProperty-bace75b3.js", "assets/rotate-9e950e0d.js", "assets/currency-ff0793d9.js", "assets/radio-be6e017d.js", "assets/_baseFlatten-bf250e44.js", "assets/wallet-cf908e7f.js", "assets/GuildLogo-50c6544d.js", "assets/useMembershipsPlan-18528bb1.js", "assets/tick-6479cdd6.js", "assets/role-079e360b.js", "assets/emoji-174a01ce.js", "assets/minBy-afff8973.js", "assets/useMount-b9859051.js", "assets/tslib-5c4c23e5.js", "assets/useUnmount-620b16b2.js", "assets/notifications-8d92ec36.js", "assets/warning-1bc43636.js", "assets/CSSTransition-13331f95.js", "assets/objectWithoutPropertiesLoose-87a5ea27.js", "assets/load_notifications-08a815d5.js", "assets/page_view-8012ef9e.js", "assets/index-145b939f.js", "assets/export-f16fcb42.js"])
    }), m({
        path: "/",
        element: s.jsx(f, {})
    })]);
export {
    N as MembershipsRouting, N as
    default
};
