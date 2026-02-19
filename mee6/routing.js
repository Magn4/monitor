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
} from "./index-684a1b71.js";
import {
    L as u,
    b as p
} from "./app-91bc7f76.js";
import {
    G as j
} from "./GuildLogo-04193285.js";
import {
    a as x
} from "./api-9236c9d6.js";
import {
    G as h
} from "./page_view-956ac92e.js";
import {
    u as b
} from "./useMount-6e43746a.js";
import {
    Error404 as g
} from "./404-86d43f79.js";
import f from "./memberships_landing-6e71af30.js";
import "./Loader2-db3a3ef5.js";
import "./modal.constants-e7a21a8a.js";
import "./moment-e0d604bc.js";
import "./useEffectOnce-d6a661a4.js";
import "./404Illustration-b32a696b.js";
import "./Footer-c0771483.js";
import "./viewports-a6773e3e.js";
import "./styles-59bacc56.js";
import "./Title-cc00a297.js";
import "./discord_button-593986d4.js";
import "./tick-9ce3c0db.js";
import "./Divider-745c0ccf.js";
import "./mixins-b8067724.js";
import "./Icon-6914d147.js";
import "./public_page-91c73413.js";
import "./throttle-66ded47c.js";
import "./button_card-e5d3536a.js";
import "./range-a8ff408f.js";
import "./drag-dba80c85.js";
import "./useUnmount-a7bf351c.js";
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
        element: () => d((() => import("./promo-ef57a51c.js")), ["assets/promo-ef57a51c.js", "assets/index-684a1b71.js", "assets/index-80b9a872.css", "assets/app-91bc7f76.js", "assets/Loader2-db3a3ef5.js", "assets/modal.constants-e7a21a8a.js", "assets/modal-d7fe36af.css", "assets/moment-e0d604bc.js", "assets/app-f2784ea6.css", "assets/monetize_plans-cfb6c3d7.js", "assets/api-9236c9d6.js", "assets/hateoas-04fb8bf9.js", "assets/_baseIteratee-cd21cbb3.js", "assets/isArguments-8420dec1.js", "assets/_baseSet-86d3f4c4.js", "assets/_getAllKeysIn-0b0399bb.js", "assets/_baseAssignValue-605f8d85.js", "assets/_defineProperty-1a750d2c.js", "assets/rotate-91b27a50.js", "assets/currency-ff0793d9.js", "assets/radio-6bbb3adc.js", "assets/_baseFlatten-fede1e6a.js", "assets/wallet-b9b43863.js", "assets/GuildLogo-04193285.js", "assets/useMembershipsPlan-ae28c80a.js", "assets/tick-9ce3c0db.js", "assets/role-f5d5a33e.js", "assets/emoji-d07e80a4.js", "assets/minBy-2dbaf704.js", "assets/useMount-13fbf749.js", "assets/tslib-2a382dea.js", "assets/useUnmount-0cfbcaf9.js", "assets/notifications-43fb9937.js", "assets/warning-65941f11.js", "assets/CSSTransition-f7f7974d.js", "assets/objectWithoutPropertiesLoose-87a5ea27.js", "assets/load_notifications-12358295.js", "assets/page_view-956ac92e.js", "assets/index-fcf75dcb.js", "assets/export-8ea6ae66.js"])
    }), m({
        path: "/",
        element: s.jsx(f, {})
    })]);
export {
    N as MembershipsRouting, N as
    default
};
