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
} from "./index-afe8eeea.js";
import {
    L as u,
    b as p
} from "./app-ba64cf70.js";
import {
    G as j
} from "./GuildLogo-1e727b23.js";
import {
    a as x
} from "./api-11bf0659.js";
import {
    G as h
} from "./page_view-108bcc78.js";
import {
    u as b
} from "./useMount-3d38109f.js";
import {
    Error404 as g
} from "./404-3bee9d2e.js";
import f from "./memberships_landing-7bccf531.js";
import "./Loader2-e1b3d35e.js";
import "./modal.constants-0cca4730.js";
import "./moment-e0d604bc.js";
import "./useEffectOnce-e5eb90ec.js";
import "./404Illustration-b32a696b.js";
import "./Footer-55333e9b.js";
import "./viewports-c65d73a1.js";
import "./styles-8925274f.js";
import "./Title-b4f370d0.js";
import "./discord_button-833e5a26.js";
import "./tick-e20cbdec.js";
import "./Divider-6afa1222.js";
import "./mixins-31afc8b6.js";
import "./Icon-1cc9e506.js";
import "./public_page-79dba24a.js";
import "./throttle-57801fc9.js";
import "./button_card-44367551.js";
import "./range-87850a05.js";
import "./drag-af40a3c1.js";
import "./useUnmount-b0afc046.js";
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
        element: () => d((() => import("./promo-a5c9951c.js")), ["assets/promo-a5c9951c.js", "assets/index-afe8eeea.js", "assets/index-8c55763e.css", "assets/app-ba64cf70.js", "assets/Loader2-e1b3d35e.js", "assets/modal.constants-0cca4730.js", "assets/modal-d7fe36af.css", "assets/moment-e0d604bc.js", "assets/app-f2784ea6.css", "assets/monetize_plans-4580b8df.js", "assets/api-11bf0659.js", "assets/hateoas-7453e08c.js", "assets/_baseIteratee-30f45b1d.js", "assets/isArguments-f1611f5d.js", "assets/_baseSet-a40fb053.js", "assets/_getAllKeysIn-c7db928b.js", "assets/_baseAssignValue-146b97a7.js", "assets/_defineProperty-15ba29dd.js", "assets/rotate-560e3cd6.js", "assets/currency-ff0793d9.js", "assets/radio-84913e87.js", "assets/_baseFlatten-6e3fcbd1.js", "assets/wallet-3002000a.js", "assets/GuildLogo-1e727b23.js", "assets/useMembershipsPlan-f0c4c9f8.js", "assets/tick-e20cbdec.js", "assets/role-44ddbf36.js", "assets/emoji-bee45a1e.js", "assets/minBy-5d67e34c.js", "assets/useMount-f603f7b1.js", "assets/tslib-5722c53c.js", "assets/useUnmount-cbaeab3e.js", "assets/notifications-f48f20a4.js", "assets/warning-a7a0bf32.js", "assets/CSSTransition-7bc0e7a3.js", "assets/objectWithoutPropertiesLoose-87a5ea27.js", "assets/load_notifications-88398de1.js", "assets/page_view-108bcc78.js", "assets/index-92d38a37.js", "assets/export-a3aef3e1.js"])
    }), m({
        path: "/",
        element: s.jsx(f, {})
    })]);
export {
    N as MembershipsRouting, N as
    default
};
