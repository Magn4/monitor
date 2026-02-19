import {
    Q as e,
    r as s,
    b as l,
    z as t,
    j as a,
    ar as n,
    a as i,
    b0 as r,
    F as d,
    f as o,
    u as c,
    B as m
} from "./index-684a1b71.js";
import {
    T as u
} from "./toggle-40a62607.js";
import {
    e as g,
    v as x,
    a1 as p,
    a2 as b,
    w as f
} from "./app-91bc7f76.js";
import {
    W as j
} from "./modal.constants-e7a21a8a.js";
import {
    a as h,
    u as w
} from "./usePluginConfig-de76b718.js";
import {
    R as N
} from "./react-markdown-b95fdfb3.js";
const k = () => {
        const {
            locale: e
        } = l(), {
            guild: s
        } = t(), i = () => {
            n("dashboard_livebuzz_ads_click", {
                source: "plugins"
            }, s, !0), window.open(`/${e}/livebuzz`, "livebuzz")
        };
        return a.jsxs(a.Fragment, {
            children: [a.jsx("img", {
                onClick: i,
                className: "cursor-pointer w-full mb-10 hidden lg:block",
                src: "/assets/LiveBuzzBanner-fb5685bf.png",
                alt: "Create your own chrome extension"
            }), a.jsx("img", {
                onClick: i,
                className: "cursor-pointer w-full mb-10 hidden md:block lg:hidden lg:mt-0 mt-10",
                src: "/assets/LiveBuzzBannerMid-37b700a4.png",
                alt: "Create your own chrome extension"
            }), a.jsx("img", {
                onClick: i,
                className: "cursor-pointer w-full mb-10 md:hidden lg:mt-0 mt-10",
                src: "/assets/LiveBuzzBannerSmall-20f1c101.png",
                alt: "Create your own chrome extension"
            })]
        })
    },
    v = ({
        plugin: n,
        renderTitle: c,
        renderDescription: m,
        renderControls: u,
        isBeta: j = !1,
        premiumBadge: w = !1,
        toggle: v = !0,
        showMoreDescription: C,
        className: z = "",
        onDisable: E
    }) => {
        const L = i(),
            {
                locale: T
            } = l(),
            {
                guild: _,
                isPremium: B
            } = t(),
            {
                alert: D
            } = (l => {
                const {
                    gw: t
                } = h(), {
                    data: a,
                    isLoading: n,
                    refetch: i
                } = g(["plugins-alerts"], (async () => {
                    const s = await e.listAlerts();
                    return s.ok ? s?.data?.alerts : []
                }));
                return s.useEffect((() => {
                    if (t) return t.listen("PLUGIN_ALERT_CREATED", (() => i())), t.listen("PLUGIN_ALERT_DELETED", (() => i())), () => {
                        t.off("PLUGIN_ALERT_CREATED", (() => i())), t.off("PLUGIN_ALERT_DELETED", (() => i()))
                    }
                }), [t]), {
                    alert: s.useMemo((() => a && l ? a?.find((e => e?.plugin === l)) : null), [a, l]),
                    loading: n
                }
            })(n),
            $ = "enabled" === r("livebuzz-fd") && ["twitch", "youtube", "twitter", "kick", "tiktok", "instagram", "reddit"].indexOf(n || "") > -1,
            [P, A] = s.useState(!1);
        return a.jsxs(a.Fragment, {
            children: [$ ? a.jsx(k, {}) : null, a.jsxs("div", {
                className: "flex justify-between mb-8 lg:mb-6",
                children: [a.jsxs("div", {
                    className: `flex flex-col grow items-center lg:items-start ${z}`,
                    children: [a.jsxs("div", {
                        className: "bg-dark-800 sm:bg-transparent flex items-center justify-between w-[calc(100%+48px)] sm:w-full px-6 py-4 sm:px-0 sm:py-0 mb-3 sm:mb-0",
                        children: [a.jsx(x, {
                            className: "sm:hidden",
                            onClick: () => L(`/${T}/dashboard/` + _?.id)
                        }), a.jsxs("h4", {
                            className: "font-bold text-dark-100 text-h5 flex-1 text-center lg:text-left flex flex-row items-center",
                            children: [c ? c() : a.jsx(d, {
                                id: `plugins.${n}.name`
                            }), j && a.jsx(p, {
                                className: "ml-3"
                            }), w && a.jsx(b, {
                                className: "ml-3",
                                hasText: !0
                            })]
                        }), n && v ? "boolean" == typeof v ? a.jsx(y, {
                            plugin: n,
                            onDisable: E
                        }) : v : null]
                    }), u && a.jsx("div", {
                        className: "lg:hidden",
                        children: u()
                    }), a.jsx("p", {
                        className: "text-base text-dark-300 max-w-[830px] ml-0 w-full mt-3 text-center sm:text-left",
                        children: m ? m() : a.jsx(d, {
                            id: `plugins.${n}.description`
                        })
                    }), C && a.jsxs(a.Fragment, {
                        children: [a.jsxs("p", {
                            className: "flex items-center justify-start text-dark-100 hover:underline cursor-pointer text-sm mt-1",
                            onClick: () => A(!P),
                            children: ["Show more", a.jsx(f, {
                                className: `w-5 text-dark-100 transition-all duration-200 ${P&&"rotate-90"}`
                            })]
                        }), P && a.jsx("p", {
                            className: "mt-1",
                            children: a.jsx(d, {
                                id: `plugins.${n}.description.showMore`
                            })
                        })]
                    })]
                }), u && a.jsx("div", {
                    className: "hidden lg:block",
                    children: u()
                })]
            }), D && a.jsxs("div", {
                className: o("bg-opacity-10 rounded-lg p-5 mb-6 border", {
                    "bg-warning-default text-warning-default border-warning-default": "warning" === D?.type,
                    "bg-danger-default text-danger-default border-danger-default": "error" === D?.type,
                    "bg-teal-default text-teal-default border-teal-default": "info" === D?.type
                }),
                children: [D?.title && a.jsx("p", {
                    className: "font-bold text-xl mb-2",
                    children: D?.title
                }), a.jsx("p", {
                    className: "whitespace-pre-line",
                    children: a.jsx(N, {
                        children: D?.description,
                        components: {
                            a: ({
                                children: e,
                                node: s,
                                ...l
                            }) => a.jsx("a", {
                                ...l,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-white underline",
                                children: e
                            })
                        }
                    })
                })]
            })]
        })
    },
    y = ({
        plugin: e,
        onDisable: s
    }) => {
        const n = i(),
            {
                locale: r
            } = l(),
            {
                guild: o
            } = t(),
            {
                updatePluginConfig: g,
                config: x
            } = w({
                pluginId: e
            }),
            {
                isOpen: p,
                open: b,
                close: f
            } = c();
        return a.jsxs("div", {
            children: [a.jsx(u, {
                eventLabel: x.enabled ? "plugins.active.toggle" : "plugins.inactive.toggle",
                labelPosition: "left",
                title: a.jsx("p", {
                    className: "text-sm text-dark-100 hidden md:inline-block",
                    children: a.jsx(d, {
                        id: x.enabled ? "plugins.active.toggle" : "plugins.inactive.toggle"
                    })
                }),
                displayTextToggle: !0,
                onChange: e => {
                    if (!e) {
                        if (s && s()) return;
                        return b()
                    }
                    g({
                        ...x,
                        enabled: !0
                    })
                },
                value: x.enabled
            }), a.jsxs(j, {
                open: p,
                theme: "danger",
                onClose: f,
                label: "disable_plugin",
                children: [a.jsx(j.Header, {
                    title: a.jsx(d, {
                        id: "plugins.disable.modal.title",
                        values: {
                            plugin: () => a.jsx(d, {
                                id: `plugins.${e}.name`
                            })
                        }
                    }),
                    subtitle: a.jsx("p", {
                        className: "text-sm",
                        children: a.jsx(d, {
                            id: "plugins.disable.modal.text"
                        })
                    }),
                    className: "mb-8"
                }), a.jsx(j.Footer, {
                    renderConfirmButton: () => a.jsx(m, {
                        theme: "danger",
                        onClick: async () => {
                            await g({
                                ...x,
                                enabled: !1
                            }), n(`/${r}/dashboard/${o?.id}`)
                        },
                        children: a.jsx(d, {
                            id: "plugins.disable.modal.button",
                            values: {
                                plugin: () => a.jsx(d, {
                                    id: `plugins.${e}.name`
                                })
                            }
                        })
                    }),
                    cancelButtonText: "button.cancel"
                })]
            })]
        })
    };
export {
    v as P
};
