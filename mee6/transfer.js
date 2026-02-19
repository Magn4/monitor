import {
    y as s,
    r as e,
    aj as i,
    j as r,
    a6 as a,
    a as t,
    b as n,
    an as d,
    B as o,
    F as m,
    a3 as l
} from "./index-75d73738.js";
import {
    F as c
} from "./Footer-ab75008e.js";
import {
    C as u
} from "./styles-5fb10ef4.js";
import {
    e as j,
    b as p,
    L as x
} from "./app-61e5c911.js";
import {
    R as f,
    s as h
} from "./Grid-b08a7512.js";
import {
    F as g
} from "./Typography-5bc0f10a.js";
import {
    D as b
} from "./Divider-33c3a250.js";
import {
    S as w
} from "./select-1a695f19.js";
import "./channels-selector.constants-17faee62.js";
import {
    g as v
} from "./utils-7d88ffc4.js";
import {
    I as G
} from "./index-4ef283dc.js";
import {
    L as C
} from "./label-8afa9932.js";
import {
    W as y
} from "./modal.constants-8f18da75.js";
import {
    C as N
} from "./card-5b85a930.js";
import {
    u as k
} from "./useSubscription-6d68213e.js";
import "./Loader2-aadfe498.js";
import "./viewports-7b2f2c00.js";
import "./Title-a382f12f.js";
import "./discord_button-a30a3bda.js";
import "./moment-e0d604bc.js";
import "./mixins-1c1f239e.js";
import "./tslib-f175565a.js";
import "./lodash-90b837c1.js";
import "./edit-c2a95d42.js";
import "./useMount-18619ac0.js";
import "./useEffectOnce-8216f8da.js";
import "./tinycolor-427fbd4e.js";
import "./expandable-f0433bfd.js";
import "./load_notifications-62f93346.js";
const I = ({
        inDashboard: c
    }) => {
        const u = a(),
            p = t(),
            {
                locale: I
            } = n(),
            _ = u.guildID,
            [F, S] = e.useState(!1),
            [L, $] = e.useState(!1),
            {
                premiumGuilds: D,
                fromGuildId: T,
                toGuildId: M,
                setFromGuildId: O,
                setToGuildId: P,
                transfer: Q,
                loading: q,
                refresh: B,
                targetGuilds: E
            } = (({
                guildId: r
            }) => {
                const a = s(),
                    [t, n] = e.useState(r),
                    [d, o] = e.useState(),
                    {
                        data: m,
                        status: l
                    } = j(["getManagedGuilds"], (async () => {
                        const s = await i.getManagedGuilds();
                        return s.ok ? s.data.guilds : []
                    })),
                    {
                        data: c,
                        status: u
                    } = j(["getPremiumGuilds"], (async () => {
                        const s = await i.premiumGuilds();
                        return s.ok ? (s.data.length > 0 && n(s.data[0].id), s.data.map((s => (s.name || (s.name = `Unknown Server ${s.id}`), s)))) : []
                    })),
                    p = c?.map((s => s.id)),
                    x = m?.filter((s => !p?.includes(s.id) && !s.buffs.includes("premium") && s.bot));
                return {
                    transfer: async () => (await i.transferPremium(t, d)).ok,
                    targetGuilds: x,
                    guilds: m,
                    premiumGuilds: c,
                    fromGuildId: t,
                    toGuildId: d,
                    setFromGuildId: n,
                    setToGuildId: o,
                    loading: "loading" === l || "loading" === u,
                    refresh: () => a.refetchQueries()
                }
            })({
                guildId: _
            });
        k();
        const H = d.useFlags()?.find((s => "pause-subscription-2" === s.name)),
            K = H?.enabled && H?.variant?.name?.includes("with-pause-subscription");
        return q ? r.jsx(f, {
            children: r.jsx(x, {})
        }) : r.jsxs(r.Fragment, {
            children: [!1 !== c ? r.jsx(f, {
                align: "left",
                children: r.jsx(o, {
                    theme: "secondary",
                    icon: "DropdownLeft",
                    iconPosition: "left",
                    to: `/${I}/dashboard/${_}/premium/${K?"manage":""}`,
                    children: r.jsx(m, {
                        id: "premium.manage.title"
                    })
                })
            }) : null, r.jsx("p", {
                className: "text-h4 font-bold text-dark-100",
                children: r.jsx(m, {
                    id: "premium.transfer.title"
                })
            }), r.jsx(g, {
                mTop: h.m3,
                children: r.jsx(m, {
                    id: "premium.transfer.description"
                })
            }), r.jsx(G, {
                className: "mt-4 mb-6",
                theme: "warning",
                children: r.jsx(m, {
                    id: "premium.transfer.warning"
                })
            }), r.jsxs(N, {
                title: "premium.transfer.formTitle",
                children: [r.jsx(C, {
                    children: r.jsx(m, {
                        id: "premium.transfer.origin"
                    })
                }), r.jsx(w, {
                    options: D,
                    search: (s, e) => e.name.toLowerCase().includes(s.toLowerCase()),
                    onChange: s => O(s?.id),
                    value: D?.find((s => s.id === T)),
                    renderOption: s => r.jsxs("div", {
                        className: "flex gap-2 items-center",
                        children: [r.jsx("img", {
                            className: "h-4 w-4 rounded-full",
                            src: v(s)
                        }), r.jsx("span", {
                            children: s.name
                        })]
                    })
                }), r.jsx(C, {
                    className: "mt-4",
                    children: r.jsx(m, {
                        id: "premium.transfer.destination"
                    })
                }), r.jsx(w, {
                    options: E,
                    search: (s, e) => e.name.toLowerCase().includes(s.toLowerCase()),
                    onChange: s => P(s?.id),
                    value: E?.find((s => s.id === M)),
                    renderOption: s => r.jsxs("div", {
                        className: "flex gap-2 items-center",
                        children: [r.jsx("img", {
                            className: "h-4 w-4 rounded-full",
                            src: v(s)
                        }), r.jsx("span", {
                            children: s.name
                        })]
                    })
                }), r.jsx(b, {}), r.jsxs(f, {
                    align: "left",
                    children: [r.jsx(l, {
                        event: "transfer_premium_plan_click",
                        children: r.jsx(o, {
                            className: "mr-4",
                            disabled: !T || !M,
                            onClick: () => S(!0),
                            children: r.jsx(m, {
                                id: "premium.transfer.button"
                            })
                        })
                    }), !1 !== c ? r.jsx(o, {
                        theme: "secondary",
                        onClick: () => p(`/${I}/dashboard/${_}/premium`),
                        children: r.jsx(m, {
                            id: "premium.transfer.cancel"
                        })
                    }) : null]
                })]
            }), r.jsxs(y, {
                theme: "danger",
                open: F,
                onClose: () => S(!1),
                children: [r.jsx(y.Header, {
                    title: "sublist.confirmationModal.title"
                }), r.jsx("div", {
                    className: "text-sm",
                    children: r.jsx(m, {
                        id: "premium.transfer.modal.warning"
                    })
                }), r.jsxs("div", {
                    className: "flex justify-end gap-2 mt-6",
                    children: [r.jsx(l, {
                        event: "transfer_premium_plan_cancel",
                        children: r.jsx(o, {
                            theme: "secondary",
                            onClick: () => S(!1),
                            children: r.jsx(m, {
                                id: "button.cancel"
                            })
                        })
                    }), r.jsx(l, {
                        event: "transfer_premium_plan_success",
                        children: r.jsx(o, {
                            theme: "danger",
                            onClick: async () => {
                                await Q(), $(!0), S(!1)
                            },
                            children: r.jsx(m, {
                                id: "premium.transfer.button"
                            })
                        })
                    })]
                })]
            }), r.jsxs(y, {
                open: L,
                title: "premium.transfer.success.title",
                onClose: () => {
                    B(), $(!1)
                },
                children: [r.jsx("div", {
                    className: "text-sm",
                    children: r.jsx(m, {
                        id: "premium.transfer.success"
                    })
                }), r.jsx("div", {
                    className: "flex justify-end mt-6",
                    children: r.jsx(o, {
                        onClick: () => p(`/${I}/dashboard/${M}`),
                        children: r.jsx(m, {
                            id: "guildSelection.goToDashboard"
                        })
                    })
                })]
            })]
        })
    },
    _ = () => r.jsxs(r.Fragment, {
        children: [r.jsx(p, {}), r.jsx(u, {
            children: r.jsx(I, {
                inDashboard: !1
            })
        }), r.jsx(c, {})]
    });
export {
    I as Transfer, _ as
    default
};
