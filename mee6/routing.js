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
} from "./index-67e26437.js";
import {
    L as u,
    b as p
} from "./app-36ea11eb.js";
import {
    G as j
} from "./GuildLogo-f3603c91.js";
import {
    a as x
} from "./api-78bc84b5.js";
import {
    G as h
} from "./page_view-5df095da.js";
import {
    u as b
} from "./useMount-dd92c179.js";
import {
    Error404 as g
} from "./404-188602bb.js";
import f from "./memberships_landing-565412ed.js";
import "./Loader2-a0775a07.js";
import "./modal.constants-b19a0d48.js";
import "./moment-e0d604bc.js";
import "./useEffectOnce-c91383fb.js";
import "./404Illustration-b32a696b.js";
import "./Footer-b844fbfc.js";
import "./viewports-069dca7e.js";
import "./styles-20484214.js";
import "./Title-f5e0e56e.js";
import "./discord_button-e2b7dbbf.js";
import "./tick-fea0aae6.js";
import "./Divider-c06bdafd.js";
import "./mixins-9df48c32.js";
import "./Icon-1873cd36.js";
import "./public_page-8ebd396a.js";
import "./throttle-ac9d80f3.js";
import "./button_card-a0230b40.js";
import "./range-6e2ab55a.js";
import "./drag-cca1b418.js";
import "./useUnmount-c8f04155.js";
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
        element: () => d((() => import("./promo-377a0457.js")), ["assets/promo-377a0457.js", "assets/index-67e26437.js", "assets/index-0668bea8.css", "assets/app-36ea11eb.js", "assets/Loader2-a0775a07.js", "assets/modal.constants-b19a0d48.js", "assets/modal-d7fe36af.css", "assets/moment-e0d604bc.js", "assets/app-f2784ea6.css", "assets/monetize_plans-56fb14b5.js", "assets/api-78bc84b5.js", "assets/hateoas-eeb2bb58.js", "assets/_baseIteratee-4d723ddc.js", "assets/isArguments-c33762eb.js", "assets/_baseSet-cec9d524.js", "assets/_getAllKeysIn-c4b55636.js", "assets/_baseAssignValue-95532e78.js", "assets/_defineProperty-497c9c11.js", "assets/rotate-132994ae.js", "assets/currency-ff0793d9.js", "assets/radio-f2de5cf7.js", "assets/_baseFlatten-a7b7dbcc.js", "assets/wallet-e57554dc.js", "assets/GuildLogo-f3603c91.js", "assets/useMembershipsPlan-dafbfc33.js", "assets/tick-fea0aae6.js", "assets/role-f2ee5e0f.js", "assets/emoji-4635f067.js", "assets/minBy-bb5325c7.js", "assets/useMount-ee678a66.js", "assets/tslib-42c0c520.js", "assets/useUnmount-051edd95.js", "assets/notifications-11305c4c.js", "assets/warning-a5732562.js", "assets/CSSTransition-6ea1e866.js", "assets/objectWithoutPropertiesLoose-87a5ea27.js", "assets/load_notifications-302e2a42.js", "assets/page_view-5df095da.js", "assets/index-0c345084.js", "assets/export-7a68fe87.js"])
    }), m({
        path: "/",
        element: s.jsx(f, {})
    })]);
export {
    N as MembershipsRouting, N as
    default
};
