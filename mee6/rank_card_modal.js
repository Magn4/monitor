import {
    y as e,
    j as s,
    r as l,
    B as a,
    F as r,
    I as o,
    d as n,
    ah as t,
    f as i,
    b as d,
    a as c,
    aV as m,
    p as u
} from "./index-afe8eeea.js";
import {
    G as p
} from "./page_view-108bcc78.js";
import {
    W as f
} from "./modal.constants-0cca4730.js";
import {
    g as x,
    a as g,
    p as j,
    u as h,
    R as b
} from "./rank_card_render-630e0737.js";
import {
    e as v,
    L as k
} from "./app-ba64cf70.js";
import {
    T as y
} from "./toggle-4564d8ab.js";
import {
    g as _
} from "./utils-b5f93582.js";
import {
    u as C,
    T as N,
    a as w
} from "./tabs-23000edb.js";
import {
    R as z
} from "./range-87850a05.js";
import {
    T as M
} from "./trash-b5f201ca.js";
import {
    A as U
} from "./index-73906d91.js";
import {
    M as F
} from "./minus-5a3c686c.js";
import {
    P as O
} from "./plus-e77bd2b8.js";
import {
    C as S
} from "./color-picker-dcded6ef.js";
import {
    L as $
} from "./lock-962b9d2f.js";
import {
    L as B
} from "./label-2077b41d.js";
import "./TemplatedSVG-b30fbaba.js";
import "./Loader2-e1b3d35e.js";
import "./moment-e0d604bc.js";
import "./tinycolor-27a4d8f8.js";
import "./Button-5479c84f.js";
import "./Icon-1cc9e506.js";
import "./mixins-31afc8b6.js";
import "./viewports-c65d73a1.js";
import "./Grid-9ce94e5a.js";
import "./drag-af40a3c1.js";
import "./useUnmount-b0afc046.js";
import "./useEffectOnce-e5eb90ec.js";
import "./isArguments-f1611f5d.js";
import "./_baseEach-97516612.js";
import "./_baseIteratee-30f45b1d.js";
import "./_getAllKeysIn-c7db928b.js";
import "./_baseAssignValue-146b97a7.js";
import "./_defineProperty-15ba29dd.js";
import "./_baseMap-79096e73.js";
import "./_baseClone-b1341dc1.js";
import "./tick-e20cbdec.js";
const I = ({
        className: l
    }) => {
        const {
            guildsSettings: a,
            guilds: r,
            changeVisibility: o
        } = (() => {
            const s = e(),
                {
                    data: l,
                    status: a
                } = v(["getGuilds"], (async () => {
                    const e = await x();
                    return e.ok && e.data ? e.data.guilds : []
                })),
                {
                    data: r,
                    status: o
                } = v(["getGuildsSettings"], (async () => {
                    const e = await g();
                    return e.ok && e.data ? e.data : []
                }));
            return {
                changeVisibility: async (e, l) => {
                    (await j(e, l)).ok && s.setQueryData(["getGuildsSettings"], (s => s?.map((s => s.guild_id === e ? {
                        ...s,
                        ...l
                    } : s))))
                },
                guildsSettings: r,
                guilds: l,
                loading: "loading" === o || !r || "loading" === a || !l
            }
        })();
        return a && r ? s.jsx("div", {
            className: `flex flex-col ${l}`,
            children: r.map((e => {
                const l = a.find((s => s.guild_id === e.id));
                return l ? s.jsxs("div", {
                    className: "py-4 flex border-b border-solid border-dark-600 items-center",
                    onClick: () => o(e.id, l),
                    children: [e.icon ? s.jsx("div", {
                        className: "rounded-lg h-8 w-8 bg-cover",
                        style: {
                            backgroundImage: `url(${_(e)})`
                        }
                    }) : null, s.jsx("div", {
                        className: "text-dark-100 ml-2 text-base",
                        children: e?.name
                    }), s.jsx(y, {
                        className: "ml-auto",
                        value: !l.use_default_rank_card,
                        onChange: s => o(e.id, {
                            use_default_rank_card: !s
                        })
                    })]
                }, e.id) : null
            }))
        }) : s.jsx("div", {
            className: "flex justify-center items-center mt-10 mb-10",
            children: s.jsx(k, {})
        })
    },
    R = ({
        value: e,
        onChange: a
    }) => {
        const [r, o] = l.useState(!1);
        return l.useEffect((() => {
            setTimeout((() => {
                o(!0)
            }), 1e3)
        }), []), r ? s.jsx("div", {
            className: "flex items-center justify-center m-auto",
            children: s.jsx(z, {
                liveUpdate: !0,
                className: "w-32",
                onChange: e => a(e),
                value: e,
                min: 0,
                max: 100,
                step: 1
            })
        }) : null
    },
    E = ({
        stroke: e = "currentColor",
        fill: l = "transparent",
        ...a
    }) => s.jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...a,
        children: [s.jsx("path", {
            d: "M3.353 8.95A7.511 7.511 0 018.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 015.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 01-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 01-5.597-5.597 13.354 13.354 0 010-6.1z",
            fill: l
        }), s.jsx("path", {
            d: "M3.353 15.05l.73-.172-.73.172zm0-6.1l.73.172-.73-.172zm17.294 0l-.73.172.73-.172zm0 6.1l.73.17-.73-.17zm-5.597 5.597l-.172-.73.172.73zm-6.1 0l-.17.73.17-.73zm0-17.294l.172.73-.172-.73zm6.1 0l-.172.73.172-.73zM4.188 16.67a.75.75 0 001.06 1.06l-1.06-1.06zm2.269-1.208l.53.53-.53-.53zm5.885 0l-.53.53.53-.53zm2.443 1.034l.53.53-.53-.53zm1.366 3.835a.75.75 0 001.06-1.06l-1.06 1.06zm3.238-3.626l-.576.48.576-.48zm-.163.976a.75.75 0 101.152-.96l-1.152.96zM4.083 14.877a12.604 12.604 0 010-5.756l-1.46-.343a14.103 14.103 0 000 6.442l1.46-.343zm15.834-5.756a12.603 12.603 0 010 5.756l1.46.343a14.104 14.104 0 000-6.442l-1.46.343zm-5.039 10.795a12.603 12.603 0 01-5.756 0l-.343 1.46c2.119.497 4.323.497 6.442 0l-.343-1.46zM9.122 4.083a12.604 12.604 0 015.756 0l.343-1.46a14.103 14.103 0 00-6.442 0l.343 1.46zm0 15.834a6.761 6.761 0 01-5.039-5.039l-1.46.343a8.261 8.261 0 006.156 6.156l.343-1.46zm6.099 1.46a8.261 8.261 0 006.156-6.156l-1.46-.343a6.761 6.761 0 01-5.039 5.039l.343 1.46zm-.343-17.294a6.761 6.761 0 015.039 5.039l1.46-.343a8.261 8.261 0 00-6.156-6.156l-.343 1.46zM8.78 2.623a8.261 8.261 0 00-6.156 6.156l1.46.343a6.761 6.761 0 015.039-5.039l-.343-1.46zM5.25 17.732l1.738-1.74-1.06-1.06-1.74 1.739 1.061 1.06zm6.562-1.74l1.74 1.74 1.06-1.061-1.739-1.739-1.06 1.06zm2.8 1.74l.704-.705-1.06-1.06-.705.704 1.06 1.06zm-1.06 0l2.6 2.6 1.06-1.06-2.6-2.601-1.06 1.06zm5.262-.546l.413.495 1.152-.96-.413-.495-1.152.96zm-3.498-.159a2.371 2.371 0 013.498.159l1.152-.96a3.87 3.87 0 00-5.71-.26l1.06 1.061zm-8.328-1.034a3.411 3.411 0 014.824 0l1.061-1.06a4.911 4.911 0 00-6.945 0l1.06 1.06z",
            fill: e
        }), s.jsx("rect", {
            x: 13,
            y: 7,
            width: 4,
            height: 4,
            rx: 2,
            stroke: e,
            strokeWidth: 1.5
        })]
    });

function G({
    value: e = 1,
    onChange: l
}) {
    return s.jsxs("div", {
        className: "flex items-center justify-center m-auto gap-2",
        children: [s.jsx(F, {}), s.jsx(z, {
            className: "w-64",
            liveUpdate: !0,
            min: 0,
            max: 100,
            step: 1,
            value: Math.round(e / 2 * 100),
            onChange: e => l(2 * e / 100)
        }), s.jsx(O, {})]
    })
}
const V = ({
        file: e,
        onClose: o,
        guild: n
    }) => {
        const [t, i] = l.useState(1), d = l.useRef(null), {
            uploadBackground: c
        } = h(n?.id);
        return s.jsxs("div", {
            className: "flex flex-col",
            children: [s.jsx(U, {
                ref: e => {
                    d.current = e
                },
                className: "cursor-move rounded-lg",
                scale: t,
                image: e,
                width: 467,
                height: 141,
                border: 40,
                color: [0, 0, 0, .6]
            }), s.jsxs("div", {
                className: "flex mt-4",
                children: [s.jsx(G, {
                    value: t,
                    onChange: e => i(e)
                }), s.jsxs("div", {
                    className: "flex ml-auto gap-2",
                    children: [s.jsx(a, {
                        onClick: async () => {
                            o()
                        },
                        size: "small",
                        theme: "secondary",
                        children: s.jsx(r, {
                            id: "button.cancel"
                        })
                    }), s.jsx(a, {
                        onClick: async () => {
                            await c(d.current), o()
                        },
                        size: "small",
                        children: s.jsx(r, {
                            id: "welcomeCardBackgroundSelector.crop"
                        })
                    })]
                })]
            }), s.jsx("div", {
                className: "h-px bg-dark-700 w-full mt-8 mb-3"
            })]
        })
    },
    T = ({
        backgroundId: e,
        onChange: a,
        guild: r,
        closeModal: d,
        onFileUploadOpen: c,
        onFileUploadClose: m
    }) => {
        const {
            backgrounds: u,
            removeBackground: p,
            file: f,
            setFile: x
        } = h(r?.id), g = o.useRef(null), {
            user: j
        } = n(), b = r ? !t(r) : !j.buffs.includes("pro") && !j.buffs.includes("advanced_rank_card"), v = "relative pb-[33.33%] bg-cover bg-center", k = l.useRef(e);
        ((e, s) => {
            const a = l.useRef(!0);
            l.useEffect((() => {
                if (!a.current) return e();
                a.current = !1
            }), s)
        })((() => {
            f && c && c(), !f && m && m()
        }), [f]);
        return f ? s.jsx(V, {
            guild: r,
            file: f,
            onClose: () => x(null)
        }) : s.jsxs("div", {
            className: "relative min-h-[100px] grid grid-cols-3 gap-4 " + (b ? "locked" : ""),
            children: [s.jsx("div", {
                onClick: () => a(null),
                className: i(`${v} text-xs h-8 relative border border-dark-600 rounded-md transition-all flex items-center justify-center`, {
                    "cursor-pointer border-dashed hover:border-brand-default": null !== e,
                    "border border-solid border-brand-default": null === e
                }),
                children: s.jsx("span", {
                    className: "absolute w-full h-full flex items-center justify-center top-0 left-0",
                    children: "Empty background"
                })
            }), s.jsx("div", {
                className: `${v} text-xs py-0 px-4 border border-dashed border-dark-300 hover:border-brand-default transition-all rounded-md cursor-pointer group flex items-center justify-center ${b?"opacity-20 cursor-not-allowed":""}`,
                onClick: () => {
                    b || g.current?.click()
                },
                children: s.jsxs("span", {
                    className: "absolute w-full h-full flex items-center justify-center top-0 left-0",
                    children: [s.jsx(E, {
                        className: "text-dark-300 group-hover:text-brand-default transiton-all"
                    }), " ", s.jsx("span", {
                        className: "ml-2",
                        children: "Upload custom"
                    })]
                })
            }), s.jsx("input", {
                type: "file",
                ref: e => {
                    g.current = e
                },
                style: {
                    display: "none"
                },
                accept: "image/*",
                onChange: e => {
                    e.preventDefault();
                    const s = e.target.files[0];
                    s && x(s)
                }
            }), u.map((l => s.jsx("div", {
                onClick: () => {
                    b || a(l)
                },
                onMouseEnter: () => {
                    b && a(l)
                },
                onMouseLeave: () => {
                    b && (k.current ? a(u.find((e => e.id === k.current))) : a(null))
                },
                style: {
                    backgroundImage: l.url && `url(${l.url})`
                },
                className: i(`${v} relative group bg-cover rounded-md transition-all border border-solid`, {
                    "cursor-not-allowed": b,
                    "cursor-pointer": !b,
                    "opacity-50 border-transparent hover:border-brand-default hover:opacity-100": l.id !== e,
                    "opacity-100": l.id === e,
                    "border border-solid border-brand-default": !b && l.id === e
                }),
                children: l.player_id && l.id !== e ? s.jsx("div", {
                    onClick: () => p(l.id),
                    className: "opacity-0 group-hover:opacity-100 transition-all cursor-pointer absolute h-6 w-6 bg-red-supplementary hover:bg-red-default rounded-full -top-2 -right-2 flex items-center justify-center shadow-md",
                    children: s.jsx(M, {
                        className: "text-white h-4 w-4"
                    })
                }) : null
            }, l.id)))]
        })
    },
    A = ({
        guild: e,
        fields: l,
        onChange: o,
        closeModal: i,
        onFileUploadOpen: u,
        onFileUploadClose: p
    }) => {
        const {
            user: f
        } = n(), {
            locale: x
        } = d(), g = c(), {
            toggleRankCardModal: j
        } = m(), {
            showPremium: h
        } = C("levels"), v = e ? !t(e) : !f.buffs.includes("pro") && !f.buffs.includes("advanced_rank_card"), k = (s = "") => {
            v && (e ? h("levels-rank-card") : (j(!1), g(`/${x}/pro?utm_source=rank-card-modal&utm_content=${s}`)))
        };
        return s.jsxs("div", {
            children: [s.jsxs("div", {
                className: "flex flex-col items-center justify-center mb-5 sticky top-[-24px] pb-6 pt-6 z-[60] bg-grey-600 border-b-[1px] border-[#36383f]",
                children: [s.jsx(b, {
                    fields: l,
                    guildId: e?.id
                }), v ? s.jsxs("div", {
                    className: "flex w-full mt-5 justify-between gap-2 flex-col sm:flex-row",
                    children: [s.jsx(a, {
                        size: "large",
                        onClick: () => k("unlock-backgrounds"),
                        glowingBackground: !0,
                        className: " flex-grow",
                        theme: "premium",
                        children: s.jsxs("div", {
                            className: "flex flex-row items-center justify-center",
                            children: [s.jsx($, {}), s.jsx("span", {
                                className: "ml-1",
                                children: s.jsx(r, {
                                    id: "plugins.levels.unlock.backgrounds"
                                })
                            })]
                        })
                    }), s.jsx(a, {
                        size: "large",
                        onClick: () => k("upload-background"),
                        glowingBackground: !0,
                        className: "flex-grow",
                        theme: "secondary",
                        children: s.jsx("div", {
                            className: "flex flex-row items-center justify-center",
                            children: s.jsx("span", {
                                className: "ml-1",
                                children: s.jsx(r, {
                                    id: "plugins.levels.upload.custom.background"
                                })
                            })
                        })
                    })]
                }) : null]
            }), s.jsx("div", {
                className: "rankCardModalContent",
                children: s.jsxs("div", {
                    className: "rankCardModalCustomization",
                    children: [s.jsxs("div", {
                        className: "flex flex-col mb-10",
                        children: [s.jsxs("div", {
                            className: "flex justify-between gap-6",
                            children: [s.jsx(B, {
                                children: s.jsx(r, {
                                    id: "rankCard.modal.color"
                                })
                            }), s.jsx(B, {
                                className: "w-32 hidden sm:block",
                                children: s.jsx(r, {
                                    id: "rankCard.modal.overlay"
                                })
                            })]
                        }), s.jsxs("div", {
                            className: "flex gap-6 flex-col sm:flex-row",
                            children: [s.jsx(S, {
                                className: "flex-1",
                                showPalette: !0,
                                onChange: e => o({
                                    ...l,
                                    front_color: e
                                }),
                                color: l.front_color
                            }), s.jsx(R, {
                                onChange: e => o({
                                    ...l,
                                    overlay_opacity: e
                                }),
                                value: l.overlay_opacity
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "flex flex-col mb-5",
                        children: [s.jsxs(B, {
                            className: "items-center gap-2",
                            children: [s.jsx(r, {
                                id: "rankCard.modal.background"
                            }), v ? s.jsx($, {
                                className: "w-4 h-4"
                            }) : null]
                        }), s.jsx(T, {
                            guild: e,
                            backgroundId: l.background_id,
                            closeModal: i,
                            onChange: e => {
                                o({
                                    ...l,
                                    background_id: e?.id || null,
                                    ...e?.suggested_overlay_opacity ? {
                                        overlay_opacity: e?.suggested_overlay_opacity
                                    } : {},
                                    ...e?.suggested_front_color ? {
                                        front_color: e?.suggested_front_color
                                    } : {}
                                })
                            },
                            onFileUploadOpen: u,
                            onFileUploadClose: p
                        })]
                    })]
                })
            })]
        })
    },
    L = ({
        open: e,
        onClose: a,
        guild: r,
        closeOnConfirmation: o,
        closeOutside: i = !0
    }) => {
        const x = u(),
            {
                config: g,
                loading: j,
                saveConfig: b
            } = h(r?.id),
            [v, y] = l.useState(!0),
            [_, z] = l.useState(g),
            {
                user: M
            } = n(),
            {
                locale: U
            } = d(),
            F = c(),
            {
                showPremium: O
            } = C("levels"),
            S = g && (g.front_color != _?.front_color || g.background_id != _?.background_id || g.overlay_opacity != _?.overlay_opacity);
        if (o = "boolean" != typeof o || o, l.useEffect((() => {
                e && (x("display_rank_card_modal"), z(g))
            }), [e]), l.useEffect((() => {
                z(g)
            }), [JSON.stringify(g)]), !M || !_) return null;
        const $ = r ? !t(r) : !M.buffs.includes("pro") && !M.buffs.includes("advanced_rank_card"),
            {
                toggleRankCardModal: B
            } = m();
        return s.jsx(s.Fragment, {
            children: s.jsx(f, {
                closeOutside: i,
                open: e,
                onClose: a,
                className: "max-w-[600px]",
                children: s.jsxs(p, {
                    event: "edit_rank_card_view",
                    children: [s.jsx(f.Header, {
                        title: "rankCard.modal.title"
                    }), s.jsxs("div", {
                        className: "mt-6",
                        children: [r ? s.jsx(A, {
                            fields: _,
                            onChange: e => z({
                                ..._,
                                ...e
                            }),
                            guild: r,
                            closeModal: a,
                            onFileUploadOpen: () => y(!1),
                            onFileUploadClose: () => y(!0)
                        }) : s.jsxs(N, {
                            children: [s.jsx(w, {
                                label: "rankCard.modal.nav.customization",
                                children: j ? s.jsx(k, {
                                    size: "large"
                                }) : s.jsx(A, {
                                    fields: _,
                                    onChange: e => z({
                                        ..._,
                                        ...e
                                    }),
                                    guild: r,
                                    closeModal: a,
                                    onFileUploadOpen: () => y(!1),
                                    onFileUploadClose: () => y(!0)
                                })
                            }), s.jsx(w, {
                                label: "rankCard.modal.nav.visibility",
                                children: s.jsx(I, {
                                    className: "mb-8 mt-8"
                                })
                            })]
                        }), v ? s.jsx(f.Footer, {
                            confirmButtonText: "button.save",
                            closeOnConfirmation: o,
                            sticky: !0,
                            onConfirm: async () => {
                                S && ($ ? ((e = "") => {
                                    $ && (r ? O("levels-rank-card") : (B(!1), F(`/${U}/pro?utm_source=rank-card-modal&utm_content=${e}`)))
                                })("save") : await b(_))
                            }
                        }) : null]
                    })]
                })
            })
        })
    };
export {
    L as RankCardModal
};
