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
} from "./index-8524466f.js";
import {
    L as u,
    b as p
} from "./app-3ecfb394.js";
import {
    G as j
} from "./GuildLogo-11b8b666.js";
import {
    a as x
} from "./api-fc94902e.js";
import {
    G as h
} from "./page_view-483b54f5.js";
import {
    u as b
} from "./useMount-14cdc8d9.js";
import {
    Error404 as g
} from "./404-79a78d79.js";
import f from "./memberships_landing-f1d06184.js";
import "./Loader2-7697ef2c.js";
import "./modal.constants-cb2154a2.js";
import "./moment-e0d604bc.js";
import "./useEffectOnce-d31d059c.js";
import "./404Illustration-b32a696b.js";
import "./Footer-0db6cf51.js";
import "./viewports-3f8c58d0.js";
import "./styles-2c4e474f.js";
import "./Title-9646ea4b.js";
import "./discord_button-2c2f1fb5.js";
import "./tick-77604be3.js";
import "./Divider-eed963f8.js";
import "./mixins-3b232174.js";
import "./Icon-4e39fbba.js";
import "./public_page-42f0ac25.js";
import "./throttle-0fc9e144.js";
import "./button_card-d8b8f025.js";
import "./range-c203cced.js";
import "./drag-abe86584.js";
import "./useUnmount-a66bc97f.js";
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
        element: () => d((() => import("./promo-8456a942.js")), ["assets/promo-8456a942.js", "assets/index-8524466f.js", "assets/index-9529b95d.css", "assets/app-3ecfb394.js", "assets/Loader2-7697ef2c.js", "assets/modal.constants-cb2154a2.js", "assets/modal-d7fe36af.css", "assets/moment-e0d604bc.js", "assets/app-f2784ea6.css", "assets/monetize_plans-b7eabcca.js", "assets/api-fc94902e.js", "assets/hateoas-e73aedc7.js", "assets/_baseIteratee-063b4e62.js", "assets/isArguments-010ca4e1.js", "assets/_baseSet-c7e1bd7e.js", "assets/_getAllKeysIn-34021714.js", "assets/_baseAssignValue-335f91a0.js", "assets/_defineProperty-85a07c85.js", "assets/rotate-4c23adf4.js", "assets/currency-ff0793d9.js", "assets/radio-c66ed389.js", "assets/_baseFlatten-a29cd559.js", "assets/wallet-26dea00e.js", "assets/GuildLogo-11b8b666.js", "assets/useMembershipsPlan-4f98ea90.js", "assets/tick-77604be3.js", "assets/role-7f72c357.js", "assets/emoji-e233fc0e.js", "assets/minBy-c6a56214.js", "assets/useMount-7d91c832.js", "assets/tslib-6f87be69.js", "assets/useUnmount-eb3c274a.js", "assets/notifications-5ce0caff.js", "assets/warning-58a7bdd4.js", "assets/CSSTransition-fa458c8d.js", "assets/objectWithoutPropertiesLoose-87a5ea27.js", "assets/load_notifications-901525a6.js", "assets/page_view-483b54f5.js", "assets/index-a5e8beca.js", "assets/export-b1c13871.js"])
    }), m({
        path: "/",
        element: s.jsx(f, {})
    })]);
export {
    N as MembershipsRouting, N as
    default
};
