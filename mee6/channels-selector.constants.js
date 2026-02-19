import {
    q as e,
    z as s,
    t,
    r as a,
    p as n,
    an as r,
    j as l,
    F as i,
    f as d,
    V as c,
    S as o
} from "./index-684a1b71.js";
import {
    s as x,
    p as m,
    X as u,
    C as h,
    T as f,
    a as p
} from "./app-91bc7f76.js";
import {
    l as j
} from "./lodash-f0bb2534.js";
import {
    C as g
} from "./modal.constants-e7a21a8a.js";
import {
    A as b,
    T as N,
    F as k,
    S as v,
    a as _,
    V as C,
    b as y,
    E as D
} from "./edit-03c87f9a.js";
import {
    L as w
} from "./label-e3f8b961.js";
import {
    u as S
} from "./useMount-6e43746a.js";
const I = e((({
        prefix: e,
        suffix: o,
        multiple: h = !1,
        disabled: f = !1,
        createChannel: p = !1,
        createChannelLabel: g = "channelsSelector.title.create_one_for_me",
        value: N = (h ? [] : null),
        autoselectFirst: k = !1,
        onlyChannels: v = !1,
        onlyVoiceChannels: _ = !1,
        onlyCategories: C = !1,
        voiceChannels: y = !1,
        forumChannels: D = !1,
        includeForumThreads: I = !0,
        className: L = "",
        label: U = "fields.channel",
        required: E = !1,
        name: R,
        displayLabel: O = !1,
        renderPlaceholder: A = null,
        placeholder: M = "select.channels.placeholder",
        tooltip: F,
        includeTickets: $ = !1,
        eventName: H,
        onChange: W,
        error: z = !1
    }) => {
        const {
            guild: X
        } = s(), q = t(), B = a.useRef(null), Y = a.useRef(null), J = a.useRef(null);
        n(B);
        const K = r.useFlags()?.find((e => "forum-support" === e.name))?.enabled ?? !1,
            Q = K && D,
            Z = K && (I ?? D),
            [ee, se] = a.useState(N || (h ? [] : null)),
            [te, ae] = a.useState(!1),
            [ne, re] = a.useState(""),
            [le, ie] = a.useState(V(X, v, C, h, y, Q, _, $, void 0, Z)),
            de = `${R??j.uniqueId()}-channel_selector`,
            ce = e => {
                if (h && ee?.includes(e)) return se((() => ee.filter((s => s !== e))));
                se(h ? [...ee, e] : e)
            };
        x((() => {
            if (W) return W(ee), h ? void 0 : ae(!1)
        }), [ee]), x((() => {
            JSON.stringify(N) !== JSON.stringify(ee) && se(N || (h ? [] : null))
        }), [N]), x((() => {
            if (ie(V(X, v, C, h, y, Q, _, $, ne, Z)), !ee || h || X?.channels[ee] || ee === P || Z || se(null), ee && h) {
                const e = ee.filter((e => X?.channels[e]));
                e.length !== ee.length && se(e)
            }
        }), [X?.channels, X?.ignored_channel_ids, ne, Q, Z]), x((() => {
            te && J.current?.focus()
        }), [te]);
        const oe = () => {
            if (ee && 0 !== ee?.length) return h ? ee.map(((e, s) => l.jsx(G, {
                id: e,
                onDelete: ce
            }, e))) : ee === P ? l.jsx("p", {
                className: "text-dark-100 text-base",
                children: l.jsx(i, {
                    id: g
                })
            }) : l.jsx(G, {
                id: ee,
                theme: "single"
            })
        };
        S((() => {
            if (!ee || h || X?.channels[ee] || ee === P || Z || se(null), ee && h) {
                const e = ee.filter((e => X?.channels[e]));
                e.length !== ee.length && se(e)
            }
        }));
        const xe = e => (!ee || 0 === ee?.length) && (A ?? l.jsx("p", {
            className: d(`text-dark-300 text-base ${e}`, {
                "!text-dark-400": f
            }),
            children: l.jsx(i, {
                id: M
            })
        }));
        return k && le.length > 0 && null === ee && ce(le[0].id), l.jsxs("div", {
            className: `${L} ${-1===L?.indexOf("w-")?"max-w-field":""}`,
            onClick: e => {
                e.stopPropagation(), e.preventDefault()
            },
            children: [(O || "fields.channel" !== U) && l.jsx(w, {
                required: E,
                children: l.jsx(i, {
                    id: U
                })
            }), l.jsxs("div", {
                ref: B,
                id: de,
                className: "relative w-full",
                children: [l.jsxs("div", {
                    className: d("rounded-lg cursor-pointer bg-dark-900 min-h-[50px] px-2 flex items-center justify-start border border-solid transition duration-200 ring-opacity-30", {
                        "border-brand-default ring-[4px] ring-brand-default": te && !z,
                        "border-danger-default ring-[4px] ring-danger-default": z,
                        "border-dark-900": !te && !z,
                        "cursor-not-allowed opacity-70 italic": f
                    }),
                    onClick: f ? () => {} : () => ae(!0),
                    children: [e && l.jsx("div", {
                        className: "pl-2",
                        children: e
                    }), l.jsxs("div", {
                        className: d("w-full flex items-center justify-start flex-wrap py-2", {
                            "pl-3": e,
                            "pr-3": o,
                            "pl-2": !e,
                            "pr-2": !o,
                            "py-1": !e && !o
                        }),
                        children: [h && l.jsxs("div", {
                            className: "flex items-center justify-start flex-wrap gap-2",
                            children: [oe(), !f && l.jsx("div", {
                                children: l.jsx(b, {
                                    fill: c[900],
                                    className: "cursor-pointer text-dark-300 -ml-px",
                                    onClick: () => ae(!0)
                                })
                            }), te ? l.jsx("input", {
                                ref: J,
                                type: "text",
                                placeholder: q.formatMessage({
                                    id: "channelsSelector.search"
                                }),
                                className: "flex-1 bg-transparent outline-none border-none pl-1 text-dark-300 text-base",
                                onChange: e => re(e.target.value)
                            }) : xe("ml-2")]
                        }), !h && l.jsxs("div", {
                            className: d("cursor-pointer flex items-center justify-between w-full trigger-dropdown", {
                                "!cursor-not-allowed": f
                            }),
                            onClick: f ? () => {} : () => ae(!0),
                            children: [oe(), te ? l.jsx("input", {
                                ref: J,
                                type: "text",
                                placeholder: q.formatMessage({
                                    id: "channelsSelector.search"
                                }),
                                className: "flex-1 bg-transparent outline-none border-none pl-1 text-dark-300 text-base",
                                onChange: e => re(e.target.value)
                            }) : xe(), l.jsx(m, {
                                className: d("text-dark-300 ml-auto transform transition-all duration-200", {
                                    "-rotate-180": te
                                })
                            })]
                        })]
                    }), o && l.jsx("div", {
                        children: o
                    })]
                }), F && l.jsxs("div", {
                    className: "flex items-center justify-start text-dark-400 text-xs mt-2",
                    children: [l.jsx(u, {
                        className: "mr-1 text-dark-400 h-4 w-4"
                    }), l.jsx(i, {
                        id: F
                    })]
                }), l.jsx(T, {
                    ref: Y,
                    value: ee,
                    channels: le,
                    visible: te,
                    multiple: h,
                    onlyCategories: C,
                    onlyChannels: v,
                    createChannel: p,
                    createChannelLabel: g,
                    onSelect: ce,
                    onDismiss: () => ae(!1),
                    onSelectAll: e => (e => {
                        if (e) return se(h ? [] : null);
                        se((() => le.map((e => e.id))))
                    })(e)
                })]
            })]
        })
    })),
    L = ({
        channel: e,
        className: s = "h-4 w-4"
    }) => {
        let t = null;
        const a = `text-dark-100 ${s}`;
        if (A.includes(e?.type)) return l.jsx(N, {
            className: a
        });
        switch (e?.type) {
            case O.GUILD_TEXT:
                t = l.jsx(y, {
                    className: a
                });
                break;
            case O.GUILD_VOICE:
                t = l.jsx(C, {
                    className: a
                });
                break;
            case O.GUILD_NEWS:
                t = l.jsx(_, {
                    className: a
                });
                break;
            case O.GUILD_STAGE_VOICE:
                t = l.jsx(v, {
                    className: a
                });
                break;
            case O.GUILD_FORUM:
                t = l.jsx(k, {
                    className: a
                })
        }
        return t
    },
    G = ({
        id: e,
        theme: t = "multiple",
        className: n,
        onDelete: r
    }) => {
        const {
            guild: c
        } = s(), o = a.useMemo((() => c?.channels?.[e]), [e]), x = a.useMemo((() => !o), [o]);
        return "multiple" === t ? l.jsx("div", {
            className: d(`inline-block font-medium rounded-full text-sm px-2 pr-4 py-0.5 bg-opacity-[0.16] max-w-max ${n}`, {
                "text-dark-100 bg-dark-100": !x,
                "text-danger-default bg-danger-default": x
            }),
            children: l.jsxs("div", {
                className: "flex items-center justify-start",
                children: [l.jsx(g, {
                    className: d("mr-2 cursor-pointer w-2.5", {
                        "text-danger-default": x,
                        "text-dark-200": !x
                    }),
                    onClick: r ? () => r(e) : void 0
                }), l.jsx(L, {
                    channel: o,
                    className: "mr-1 h-4 w-4"
                }), x ? l.jsx(i, {
                    id: "deletedChannel"
                }) : o?.name]
            })
        }) : l.jsxs("div", {
            className: d("text-base font-medium flex items-center justify-start", {
                "text-dark-100": !x,
                "text-danger-default": x
            }),
            children: [l.jsx(L, {
                channel: o,
                className: "mr-1 h-4 w-4"
            }), x ? l.jsx(i, {
                id: "deletedChannel"
            }) : o?.name]
        })
    },
    U = ({
        name: e,
        value: s,
        disabled: t = !1,
        checked: r = !1,
        title: c,
        description: x,
        className: m,
        onChange: u = (() => {}),
        onClick: f
    }) => {
        const p = a.useRef(null),
            j = a.useRef(null);
        n(j);
        const g = `checkbox-${o()}`;
        return l.jsxs("div", {
            ref: j,
            className: `flex items-start justify-start cursor-pointer ${m}`,
            children: [l.jsx("input", {
                type: "checkbox",
                name: e,
                value: g,
                className: "sr-only peer",
                id: g,
                onChange: () => {
                    t || u(!s)
                },
                onClick: f || (() => {})
            }), l.jsx("label", {
                ref: p,
                htmlFor: g,
                className: d("cursor-pointer overflow-hidden w-5 h-5 flex items-center justify-center rounded border-[1px] border-solid transition-all duration-200 hover:border-brand-default", {
                    "border-brand-default !bg-brand-default": !t && s,
                    "bg-dark-500 border-dark-700": !s,
                    "bg-dark-500 hover:border-dark-700 border-dark-700": t,
                    "transform translate-y-0.5": c,
                    "!cursor-not-allowed": t
                }),
                children: l.jsx(h, {
                    className: d("h-2 w-2 transition-all duration-200 transform", {
                        "-translate-y-6": !r && !s,
                        "text-dark-700": t,
                        "text-white": !t
                    })
                })
            }), (c || x) && l.jsxs("label", {
                ref: p,
                htmlFor: g,
                className: d("ml-2 select-none cursor-pointer", {
                    "!cursor-not-allowed": t
                }),
                children: [c && l.jsx("p", {
                    className: "text-dark-100 text-base",
                    children: l.jsx(i, {
                        id: c
                    })
                }), x && l.jsx("p", {
                    className: "text-dark-300 text-sm",
                    children: l.jsx(i, {
                        id: x
                    })
                })]
            })]
        })
    },
    E = ({
        stroke: e = "currentColor",
        fill: s = "transparent",
        ...t
    }) => l.jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t,
        children: l.jsx("path", {
            d: "M17.451 6.783H6.547a.803.803 0 00-.809.808v8.296a.804.804 0 00.809.809h2.322v2.608l2.608-2.608h5.974a.803.803 0 00.809-.809V7.591a.803.803 0 00-.809-.808z",
            fill: e
        })
    }),
    T = a.forwardRef((({
        value: e,
        channels: s,
        visible: t,
        multiple: n,
        createChannel: r,
        createChannelLabel: o = "channelsSelector.title.create_one_for_me",
        onlyCategories: m,
        onlyChannels: u,
        onSelect: j,
        onDismiss: g,
        onSelectAll: N
    }, k) => {
        const [v, _] = a.useState(!1), [C, y] = a.useState([]);
        a.useImperativeHandle(k, (() => ({
            close() {}
        })));
        const w = s => {
                const t = n ? e?.includes(s.id) : e === s.id,
                    a = !!s?.parent_id && (e?.includes(s.parent_id) ?? e === s.parent_id);
                return l.jsxs(R, {
                    isSelected: t || a,
                    onClick: a ? () => {} : () => j(s.id),
                    children: [l.jsxs("div", {
                        className: "flex items-center justify-start text-base",
                        children: [n && l.jsx(U, {
                            onClick: e => {
                                e.stopPropagation()
                            },
                            checked: t || a,
                            disabled: a,
                            className: "mr-3"
                        }), l.jsx(L, {
                            channel: s,
                            className: "mr-1.5 h-4 w-4"
                        }), s.name]
                    }), l.jsx("div", {
                        className: "flex items-center justify-end",
                        children: t && !n && l.jsx(h, {
                            className: "text-brand-default ml-1"
                        })
                    })]
                }, s.id)
            },
            S = s => {
                const t = e?.includes(s.id) ?? e === s.id,
                    a = !!s?.parent_id && (e?.includes(s.parent_id) ?? e === s.parent_id),
                    r = C?.includes(s.id),
                    i = s?.threads && s.threads.length > 0;
                switch (s.type) {
                    case O.GUILD_TEXT:
                    case O.GUILD_VOICE:
                    case O.GUILD_NEWS:
                    case O.GUILD_STAGE_VOICE:
                        return l.jsxs(R, {
                            isSelected: t || a,
                            onClick: a ? () => {} : () => j(s.id),
                            children: [l.jsxs("div", {
                                className: "flex items-center justify-start text-base",
                                children: [n && l.jsx(U, {
                                    onClick: e => {
                                        e.stopPropagation()
                                    },
                                    checked: t || a,
                                    disabled: a,
                                    className: "mr-3"
                                }), l.jsx(L, {
                                    channel: s,
                                    className: "mr-1.5 h-4 w-4"
                                }), s.name]
                            }), l.jsxs("div", {
                                className: "flex items-center justify-end",
                                children: [s.type === O.GUILD_VOICE && l.jsx(E, {}), t && !n && l.jsx(h, {
                                    className: "text-brand-default ml-1"
                                })]
                            })]
                        }, s.id);
                    case O.GUILD_FORUM:
                        if (i) {
                            const e = !0 === s.isContainer;
                            return l.jsxs("div", {
                                children: [l.jsxs("div", {
                                    className: d("flex items-center justify-between p-2 rounded", {
                                        "bg-dark-700": t && !e,
                                        "hover:bg-dark-700 cursor-pointer": !e
                                    }),
                                    onClick: e ? void 0 : () => j(s.id),
                                    children: [l.jsxs("div", {
                                        className: d("flex items-center justify-start text-base", {
                                            "uppercase text-dark-200 text-xs font-bold": e
                                        }),
                                        children: [n && !e && l.jsx(U, {
                                            onClick: e => {
                                                e.stopPropagation()
                                            },
                                            checked: t,
                                            className: "mr-3"
                                        }), l.jsx(L, {
                                            channel: s,
                                            className: "mr-1.5 h-4 w-4"
                                        }), s.name]
                                    }), l.jsxs("div", {
                                        className: "flex items-center justify-end gap-1",
                                        children: [t && !n && !e && l.jsx(h, {
                                            className: "text-brand-default ml-1"
                                        }), l.jsx(p, {
                                            className: d("text-dark-300 rounded hover:bg-dark-800 cursor-pointer transition-all duration-200 transform", {
                                                "rotate-180": !r
                                            }),
                                            onClick: e => {
                                                if (e.preventDefault(), e.stopPropagation(), r) return y(C.filter((e => e !== s.id)));
                                                y([...C, s.id])
                                            }
                                        })]
                                    })]
                                }), !r && l.jsx("div", {
                                    className: "pl-3 grid grid-cols-1 gap-y-1.5 mt-1.5",
                                    children: s.threads.map(w)
                                })]
                            }, s.id)
                        }
                        return l.jsxs(R, {
                            isSelected: t || a,
                            onClick: a ? () => {} : () => j(s.id),
                            children: [l.jsxs("div", {
                                className: "flex items-center justify-start text-base",
                                children: [n && l.jsx(U, {
                                    onClick: e => {
                                        e.stopPropagation()
                                    },
                                    checked: t || a,
                                    disabled: a,
                                    className: "mr-3"
                                }), l.jsx(L, {
                                    channel: s,
                                    className: "mr-1.5 h-4 w-4"
                                }), s.name]
                            }), l.jsx("div", {
                                className: "flex items-center justify-end",
                                children: t && !n && l.jsx(h, {
                                    className: "text-brand-default ml-1"
                                })
                            })]
                        }, s.id);
                    case O.GUILD_CATEGORY:
                        return l.jsxs("div", {
                            children: [l.jsxs(R, {
                                isSelected: t,
                                onClick: () => j(s.id),
                                children: [l.jsxs("div", {
                                    className: "flex items-center justify-start uppercase text-dark-200 text-xs font-bold",
                                    children: [n && l.jsx(U, {
                                        checked: t,
                                        className: "mr-3"
                                    }), s.name]
                                }), !n && l.jsx(h, {
                                    className: `text-brand-default ml-1 ${!t&&"opacity-0"}`
                                }), n && s?.channels?.length > 0 && l.jsx(p, {
                                    className: d("text-dark-300 rounded hover:bg-dark-800 cursor-pointer transition-all duration-200 transform", {
                                        "rotate-180": !r
                                    }),
                                    onClick: e => {
                                        if (e.preventDefault(), e.stopPropagation(), r) return y(C.filter((e => e !== s.id)));
                                        y([...C, s.id])
                                    }
                                })]
                            }), !r && s?.channels && l.jsx("div", {
                                className: "pl-3 grid grid-cols-1 gap-y-1.5 mt-1.5",
                                children: s.channels.map(S)
                            })]
                        }, s.id)
                }
            };
        return x((() => {
            if (n && 0 === e?.length) return _(!1)
        }), [e]), l.jsxs(f, {
            visible: t,
            onDismiss: g,
            children: [(n || r) && l.jsx("ul", {
                className: "border-b border-solid border-dark-700 pb-3 mb-4",
                children: l.jsxs(l.Fragment, {
                    children: [l.jsx("p", {
                        className: "uppercase text-dark-400 font-bold text-xs mt-3 mb-2 px-2",
                        children: l.jsx(i, {
                            id: "channelsSelector.title.options"
                        })
                    }), n && l.jsxs("li", {
                        className: "flex p-2 rounded-lg items-center justify-start text-dark-100 text-base font-medium hover:bg-dark-800 transition duration-200 cursor-pointer",
                        onClick: () => {
                            N(v), _(!v)
                        },
                        children: [l.jsx(b, {
                            fill: c[900],
                            className: "text-dark-300 mr-2"
                        }), l.jsx(i, {
                            id: v ? "channelsSelector.title.remove_all" : "channelsSelector.title.add_all"
                        })]
                    }), !n && r && l.jsxs("li", {
                        className: d("flex p-2 rounded-lg items-center justify-between text-dark-100 text-base font-medium hover:bg-dark-800 transition duration-200 cursor-pointer", {
                            "bg-dark-800": e === P
                        }),
                        onClick: () => j(P),
                        children: [l.jsxs("div", {
                            className: "flex items-center justify-start",
                            children: [l.jsx(D, {
                                fill: c[900],
                                className: "text-dark-300 mr-2"
                            }), l.jsx(i, {
                                id: o
                            })]
                        }), e === P && l.jsx(h, {
                            className: "text-brand-default ml-1"
                        })]
                    })]
                })
            }), l.jsxs("div", {
                className: "grid grid-cols-1 gap-y-1.5 pt-1",
                children: [l.jsx("p", {
                    className: "uppercase text-dark-400 font-bold text-xs px-2 mb-0.5",
                    children: m ? l.jsx(i, {
                        id: "channelsSelector.title.categories"
                    }) : !n || u ? l.jsx(i, {
                        id: "channelsSelector.title.channels"
                    }) : l.jsx(i, {
                        id: "channelsSelector.title.channels_and_categories"
                    })
                }), s?.length > 0 ? s.map((e => S(e))) : l.jsx("p", {
                    className: "text-grey-300 px-2 mb-1",
                    children: l.jsx(i, {
                        id: "channelsSelector.title.no_channels"
                    })
                })]
            })]
        })
    })),
    R = ({
        isSelected: e,
        children: s,
        onClick: t
    }) => l.jsx("div", {
        children: l.jsx("div", {
            className: d("flex items-center justify-between p-2 rounded hover:bg-dark-700 cursor-pointer", {
                "bg-dark-700": e
            }),
            onClick: t,
            children: s
        })
    });
var O = (e => (e[e.GUILD_TEXT = 0] = "GUILD_TEXT", e[e.DM = 1] = "DM", e[e.GUILD_VOICE = 2] = "GUILD_VOICE", e[e.GROUP_DM = 3] = "GROUP_DM", e[e.GUILD_CATEGORY = 4] = "GUILD_CATEGORY", e[e.GUILD_NEWS = 5] = "GUILD_NEWS", e[e.GUILD_NEWS_THREAD = 10] = "GUILD_NEWS_THREAD", e[e.GUILD_PUBLIC_THREAD = 11] = "GUILD_PUBLIC_THREAD", e[e.GUILD_PRIVATE_THREAD = 12] = "GUILD_PRIVATE_THREAD", e[e.GUILD_STAGE_VOICE = 13] = "GUILD_STAGE_VOICE", e[e.GUILD_FORUM = 15] = "GUILD_FORUM", e))(O || {});
const A = [10, 11, 12],
    M = e => e.sort(((e, s) => e.position - s.position)),
    V = (e, s, t, a, n, r, l, i, d, c) => {
        const o = [];
        t ? o.push(4) : l ? o.push(2, 13) : (o.push(0, 5), n && o.push(2, 13), (r || c) && o.push(15));
        const x = Object.values(e?.channels ? e.channels : {}),
            m = new Map(x.filter((e => 4 === e.type)).map((e => [e.id, e]))),
            u = new Map;
        if (c) {
            const e = new Set(x.filter((e => 15 === e.type)).map((e => String(e.id))));
            for (const s of x)
                if (A.includes(s.type) && e.has(String(s.parent_id))) {
                    const e = String(s.parent_id),
                        t = u.get(e) || [];
                    t.push(s), u.set(e, t)
                }
        }
        const h = x.filter(((s, t) => {
                if (!o.includes(s.type)) return;
                if (!i && e?.ignored_channel_ids && e?.ignored_channel_ids?.includes(s.id)) return;
                if (15 === s.type && c && !r && !a) {
                    if (0 === (u.get(String(s.id)) || []).length) return
                }
                if (!d || "" === d) return s;
                const n = d.toLowerCase();
                if (s?.name?.toLowerCase().includes(n)) return s;
                if (15 === s.type && c) {
                    if ((u.get(String(s.id)) || []).some((e => e.name?.toLowerCase().includes(n)))) return s
                }
            })),
            f = e => {
                if (15 === e.type && c && u.size > 0) {
                    const s = u.get(String(e.id)) || [],
                        t = d ? s.filter((e => e.name.toLowerCase().includes(d.toLowerCase()))) : s,
                        a = !r;
                    return {
                        ...e,
                        threads: t,
                        isContainer: a
                    }
                }
                return e
            };
        if (!a && c && u.size > 0) {
            const e = [];
            for (const s of h) e.push(f(s));
            return M(e)
        }
        const p = c && u.size > 0;
        if ((!a || l || s || t) && !p) return M(h);
        if (s && p) {
            const e = [];
            for (const s of h) e.push(f(s));
            return M(e)
        }
        const j = [];
        return h.forEach(((e, s) => {
            const t = f(e);
            if (e.parent_id) {
                const s = j.findIndex((s => s.id === e.parent_id)); - 1 !== s ? j[s].channels.push(t) : j.push({
                    ...m.get(e.parent_id),
                    channels: [t]
                })
            } else j.push(t)
        })), M(j)
    },
    P = "1420070400000";
export {
    U as C, P as N, I as a, L as b, O as c
};
