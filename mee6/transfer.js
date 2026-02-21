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
} from "./index-e0afec69.js";
import {
    F as c
} from "./Footer-caf192de.js";
import {
    C as u
} from "./styles-c00fd69e.js";
import {
    e as j,
    b as p,
    L as x
} from "./app-b4886647.js";
import {
    R as f,
    s as h
} from "./Grid-d4063e87.js";
import {
    F as g
} from "./Typography-3c5fdadc.js";
import {
    D as b
} from "./Divider-494e2cdb.js";
import {
    S as w
} from "./select-939aac6f.js";
import "./channels-selector.constants-2f9af24b.js";
import {
    g as v
} from "./utils-ac99635e.js";
import {
    I as G
} from "./index-145b939f.js";
import {
    L as C
} from "./label-4a697a9f.js";
import {
    W as y
} from "./modal.constants-09c27985.js";
import {
    C as N
} from "./card-f1731810.js";
import {
    u as k
} from "./useSubscription-5db3be47.js";
import "./Loader2-ea5f73c7.js";
import "./viewports-530dfeda.js";
import "./Title-3370b661.js";
import "./discord_button-a905de9f.js";
import "./moment-e0d604bc.js";
import "./mixins-dfc47826.js";
import "./tslib-5c4c23e5.js";
import "./lodash-b263362d.js";
import "./edit-ae08cef7.js";
import "./useMount-c7a3921f.js";
import "./useEffectOnce-84f073df.js";
import "./tinycolor-7ac5b060.js";
import "./expandable-fda4d7b7.js";
import "./load_notifications-08a815d5.js";
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
