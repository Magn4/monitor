import {
    bu as i,
    bC as e,
    r as t,
    a6 as A,
    a as s,
    z as o,
    bD as n,
    ah as a,
    bE as r,
    j as l,
    bF as c,
    b as d,
    b0 as h,
    Q as C,
    aj as g,
    ar as p
} from "./index-684a1b71.js";
import {
    L as m,
    aD as u
} from "./app-91bc7f76.js";
import {
    A as w
} from "./award-2bab3f62.js";

function f(...e) {
    console.log(... function(e) {
        return ["%c[Mee6]", `color: ${i.BRAND}; font-weight: bold;`, ...e]
    }(e))
}
class B {
    ws = null;
    constructor(i, e) {
        this.token = i, this.guildID = e, this.clientClosed = !1, this.listeners = {
            open: [],
            close: [],
            dispatch: [],
            message: []
        }, this.onOpen = this.onOpen.bind(this), this.onClose = this.onClose.bind(this), this.onMessage = this.onMessage.bind(this), this.open = this.open.bind(this), this.close = this.close.bind(this), this.send = this.send.bind(this), this.heartbeat = this.heartbeat.bind(this), this.url = `${document.location.origin.replace(/http/g,"ws")}/gateway`
    }
    listen(i, e) {
        this.listeners[i] || (this.listeners[i] = []), this.listeners[i].push(e)
    }
    off(i, e) {
        this.listeners[i] && (this.listeners[i] = this.listeners[i].filter((i => i !== e)))
    }
    emit(i, e) {
        if (this.listeners[i])
            for (const t of this.listeners[i]) t(e)
    }
    send(i, e) {
        const t = {
            op: i,
            d: e
        };
        this.ws.send(JSON.stringify(t))
    }
    open() {
        this.ws = new WebSocket(this.url), this.ws.onmessage = this.onMessage, this.ws.onopen = this.onOpen, this.ws.onmessage = this.onMessage, this.ws.onclose = this.onClose
    }
    close() {
        this.clientClosed = !0, this.ws.close()
    }
    reconnect() {
        this.ws.close()
    }
    heartbeat() {
        f("[HEARTBEAT] ->"), this.send(e.HEARTBEAT, 1337)
    }
    startHeartbeating(i) {
        this._heartbeatInterval = setInterval(this.heartbeat, i)
    }
    stopHeartbeating() {
        clearInterval(this._heartbeatInterval)
    }
    identify() {
        this.send(e.IDENTIFY, {
            token: this.token,
            guild_id: this.guildID
        })
    }
    onMessage(i) {
        const t = JSON.parse(i.data);
        if (t.op === e.HELLO && (f(`[HELLO] heartbeating @ ${t.d}ms rate`), this.startHeartbeating(t.d), this.identify()), t.op === e.HEARTBEAT_ACK && f("[HEARTBEAT_ACK] <-"), t.op === e.DISPATCH) {
            if ("READY" === t.t) f(`[READY] user ${t.d.user?.id} -> guild ${t.d.guild?.id}`);
            else {
                const i = t.d?.guild_id || t.d?.after?.guild_id || t.d?.id,
                    e = t.d?.id || t.d?.after?.id;
                f(`[${t.t}] ${i} - ${e}`)
            }
            this.emit("dispatch", t), this.emit(t.t, t.d)
        }
        this.emit("message", t)
    }
    onOpen(i) {
        f(`[CONNECT] -> ${this.GATEWAY_URL}`), this.emit("open", i)
    }
    onClose(i) {
        f(`[CLOSE] ${i.code} -> ${i.reason}`, i), this.stopHeartbeating(), this.clientClosed || this.emit("close", i)
    }
}
const k = {
        GUILD_UPDATE: (i, e) => {
            const t = i.after ? i.after : i;
            return "roles" in t && delete t.roles, "channels" in t && delete t.channels, "members" in t && delete t.members, {
                ...e,
                ...t
            }
        },
        GUILD_MEMBER_JOIN: (i, e) => ({
            ...e,
            members: {
                ...e.members,
                [i.member.user.id]: i.member
            },
            member_count: (e.member_count || 0) + 1
        }),
        GUILD_MEMBER_UPDATE: (i, e) => {
            let {
                bot: t
            } = e;
            return i.after.user.id === t?.user.id && (t = i), {
                ...e,
                bot: t,
                members: {
                    ...e.members,
                    [i.after.user.id]: i.after
                }
            }
        },
        GUILD_MEMBER_LEAVE: (i, e) => {
            const t = {
                ...e.members
            };
            return delete t[i.member.user.id], {
                ...e,
                members: t,
                member_count: (e.member_count || 0) - 1
            }
        },
        GUILD_MEMBERS_CHUNK: (i, e) => {
            const t = {};
            for (const A of i.members) t[A.user.id] = A;
            return {
                ...e,
                members: {
                    ...e.members,
                    ...t
                }
            }
        },
        GUILD_EMOJIS_UPDATE: (i, e) => ({
            ...e,
            emojis: i.after
        }),
        GUILD_ROLE_CREATE: (i, e) => ({
            ...e,
            roles: {
                ...e.roles,
                [i.role.id]: i.role
            }
        }),
        GUILD_ROLE_UPDATE: (i, e) => ({
            ...e,
            roles: {
                ...e.roles,
                [i.role.id]: i.role
            }
        }),
        GUILD_ROLE_DELETE: (i, e) => {
            const t = {
                ...e.roles
            };
            return delete t[i.id], {
                ...e,
                roles: t
            }
        },
        CHANNEL_CREATE: (i, e) => ({
            ...e,
            channels: {
                ...e.channels,
                [i.id]: i
            }
        }),
        VOICE_STATE_UPDATE: (i, e) => {
            const t = i.voice_state;
            return null === i.channel_id ? delete e.voiceStates[t.user_id] : e.voiceStates[t.user_id] = t, {
                ...e,
                voiceStates: {
                    ...e.voiceStates
                }
            }
        },
        CHANNEL_UPDATE: (i, e) => ({
            ...e,
            channels: {
                ...e.channels,
                [i.id]: i
            }
        }),
        CHANNEL_DELETE: (i, e) => {
            const t = {
                ...e.channels
            };
            return delete t[i.id], {
                ...e,
                channels: t
            }
        },
        THREAD_CREATE: (i, e) => {
            const t = i.thread;
            return {
                ...e,
                channels: {
                    ...e.channels,
                    [t.id]: t
                }
            }
        },
        THREAD_UPDATE: (i, e) => ({
            ...e,
            channels: {
                ...e.channels,
                [i.id]: i
            }
        }),
        THREAD_DELETE: (i, e) => {
            const t = {
                ...e.channels
            };
            return delete t[i.id], {
                ...e,
                channels: t
            }
        },
        PLUGIN_CONFIG_UPDATE: (i, e) => {
            const t = e.plugins[i.plugin_id];
            if (!t) return e;
            const A = {
                ...e.plugins,
                [t.id]: {
                    ...t,
                    config: i.config
                }
            };
            return {
                ...e,
                plugins: A
            }
        },
        COMMAND_CONFIG_UPDATE: (i, e) => {
            const t = e.plugins[i.plugin_id];
            if (!t) return e;
            const A = t.commands[i.command_id];
            if (!A) return e;
            return {
                ...e,
                plugins: {
                    ...e.plugins,
                    [t.id]: {
                        ...e.plugins[t.id],
                        commands: {
                            ...e.plugins[t.id].commands,
                            [A.id]: {
                                ...A,
                                config: i.config
                            }
                        }
                    }
                }
            }
        },
        WEBHOOK_SAVE: (i, e) => {
            const t = i;
            let A = e.webhooks;
            return A = e.webhooks.find((i => i.id === t.id)) ? e.webhooks.map((i => i.id === t.id ? t : i)) : [...A, t], {
                ...e,
                webhooks: A
            }
        },
        CUSTOM_BOT_UPDATE: (i, e) => ({
            ...e,
            custom_bot: i
        }),
        CUSTOM_BOT_DELETE: (i, e) => ({
            ...e,
            custom_bot: null
        }),
        GUILD_APPLICATION_COMMANDS_UPDATE: (i, e) => ({
            ...e,
            application_commands: i
        }),
        GUILD_NOTIFICATION_CREATE: (i, e) => ({
            ...e,
            notification: i
        }),
        GUILD_NOTIFICATION_UPDATE: (i, e) => ({
            ...e,
            notification: i
        }),
        ECONOMY_DEFAULT_WARES_CREATE: (i, e) => ({
            ...e,
            wares: i
        }),
        GIVEAWAY_UPDATE: (i, e) => ({
            ...e,
            giveaway: i
        }),
        TICKETING_PANEL_UPDATE: (i, e) => ({
            ...e,
            panel: i
        }),
        TICKETING_TICKET_CREATE: (i, e) => {
            const t = i;
            return {
                ...e,
                ignored_channel_ids: [...e.ignored_channel_ids, t?.channel_id]
            }
        },
        TICKETING_TICKET_DELETE: (i, e) => {
            const t = i;
            return {
                ...e,
                ignored_channel_ids: e?.ignored_channel_ids?.filter((i => i !== t?.channel_id))
            }
        },
        AUTOMATIONS_AUTOMATION_UPDATE: (i, e) => ({
            ...e,
            automation: i
        })
    },
    v = t.createContext({
        gw: null,
        isConnected: !1
    }),
    x = ({
        children: i,
        className: e = ""
    }) => {
        const d = A(),
            h = t.useRef(null),
            [C, g] = t.useState(!1),
            p = s(),
            {
                guild: u,
                applyGuild: w
            } = o(),
            f = t.useRef(u);
        return t.useEffect((() => {
            f.current = u
        }), [u]), t.useEffect((() => {
            if (!d.guildID) return;
            h.current && h.current.close(), g(!1), h.current = new B(n(), d.guildID), h.current.listen("dispatch", (i => {
                if ("READY" === i.t)
                    if (i.d.config) {
                        const {
                            guild: e
                        } = i.d;
                        e.config = i.d.config.plugins, e.bot = i.d.bot, e.subscription = i.d.subscription, e.webhooks = i.d.webhooks, e.voiceStates = i.d.voice_states, e.custom_bot = i.d.custom_bot, e.ignored_channel_ids = i.d.ticketing_channel_ids, e.unseen_notifications_count = i.d.unseen_notifications_count, e.activePrefix = a(e) && e.commands_prefix ? e.commands_prefix : "!", e.application_commands_enabled && (e.activePrefix = "/"), e.application_commands = i.d.application_commands, e.premium_with_addons_variant = i.d.premium_with_addons_variant, e.previewable_plugins = i.d.previewable_plugins ?? [], w((() => (i => {
                            const e = i.channels.reduce(((i, e) => (i[e.id] = e, i)), {}),
                                t = i.roles.reduce(((i, e) => (i[e.id] = e, i)), {}),
                                A = i.voiceStates.reduce(((i, e) => (i[e.user_id] = e, i)), {}),
                                s = i.config.map((i => ({
                                    id: i.id,
                                    name: i.name,
                                    description: i.description,
                                    config: i.config,
                                    buffs: i.buffs,
                                    commands: i.commands
                                }))),
                                o = {};
                            for (const n of s) {
                                const i = {};
                                for (const e of n.commands) i[e.id] = e;
                                n.commands = i, o[n.id] = n
                            }
                            return delete i.config, c({
                                guild_id: i.id,
                                guild_name: i?.name
                            }), {
                                ...i,
                                roles: t,
                                channels: e,
                                plugins: o,
                                members: {
                                    [i.bot.user.id]: i.bot
                                },
                                voiceStates: A,
                                ready: !0
                            }
                        })(e))), g(!0)
                    } else p("/dashboard");
                else k[i.t] && w((() => k[i.t](i.d, f.current)))
            }));
            let i = 0;
            return h.current.listen("close", (({
                code: e
            }) => {
                if (i >= 2 && [4003, 4004, 4005, 4007, 4009].includes(e)) p("/dashboard"), r("error.gateway.reconnection", {
                    guildID: d.guildID
                });
                else {
                    const e = Math.min(2 ** i * 1e3, 25e3);
                    i += 1, console.log(`[GATEWAY_RECONNECT] Reconnecting in ${e/1e3}s`), setTimeout((() => h.current?.open && h.current.open()), e)
                }
            })), h.current.open(), () => h.current?.close()
        }), [d.guildID]), l.jsx(v.Provider, {
            value: {
                gw: h.current,
                isConnected: C
            },
            children: l.jsxs(l.Fragment, {
                children: [i, C ? null : l.jsx("div", {
                    className: `h-full w-full flex absolute top-0 left-0 z-10 items-center justify-center pointer-events-none ${e}`,
                    children: l.jsx(m, {
                        size: "large"
                    })
                })]
            })
        })
    },
    E = () => {
        const {
            gw: i,
            isConnected: e
        } = t.useContext(v);
        return {
            gw: i,
            isConnected: e
        }
    },
    R = ({
        stroke: i = "currentColor",
        fill: e = "transparent",
        ...t
    }) => l.jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t,
        children: [l.jsx("path", {
            d: "M4.8 15.604c0 2.649 0 4.796 7.2 4.796s7.2-2.147 7.2-4.796",
            stroke: "#C6C8D7",
            strokeWidth: 1.5
        }), l.jsx("path", {
            d: "M21.6 11.52c0 4.373-4.298 5.28-9.6 5.28s-9.6-.907-9.6-5.28C2.4 7.145 6 3.6 12 3.6s9.6 3.546 9.6 7.92z",
            stroke: "#C6C8D7",
            strokeWidth: 1.5
        }), l.jsx("path", {
            d: "M18 13.528c0 3.605-4.5 3.263-6 3.263s-6 .342-6-3.263C6 10.8 8.4 8.4 12 8.4s6 2.4 6 5.128z",
            stroke: "#C6C8D7",
            strokeWidth: 1.5
        }), l.jsx("path", {
            d: "M9.6 14.4l1.2-2.4 1.2 1.2 1.2-1.2 1.2 2.4",
            stroke: "#C6C8D7",
            strokeWidth: 1.5,
            strokeLinecap: "square"
        })]
    }),
    L = ({
        stroke: i = "currentColor",
        fill: e = "currentColor",
        ...t
    }) => l.jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 20 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [l.jsx("path", {
            d: "M15.4545 5.27271H4.54544C3.66362 5.27271 2.95453 5.9818 2.95453 6.86361V14.1363C2.95453 15.0091 3.66362 15.7273 4.54544 15.7273H10.5182C10.5182 15.7273 10.5091 15.7091 10.5 15.7C10.2545 15.2818 10.0727 14.8273 9.97271 14.3636H4.54544C4.41817 14.3636 4.31817 14.2636 4.31817 14.1363V6.86361C4.31817 6.73634 4.41817 6.63634 4.54544 6.63634H15.4545C15.5818 6.63634 15.6818 6.73634 15.6818 6.86361V8.66361C15.7454 8.6818 15.8 8.69089 15.8636 8.70907C16.2818 8.81816 16.6818 8.9818 17.0454 9.19998V6.86361C17.0454 5.9818 16.3273 5.27271 15.4545 5.27271Z",
            fill: e
        }), l.jsx("path", {
            d: "M4.74545 19.5637C4.37272 19.5637 4.06363 19.2546 4.06363 18.8818V18.6546H3.83636C3.46363 18.6546 3.15454 18.3455 3.15454 17.9727C3.15454 17.6 3.46363 17.2909 3.83636 17.2909H4.06363V17.0637C4.06363 16.6909 4.37272 16.3818 4.74545 16.3818C5.11818 16.3818 5.42727 16.6909 5.42727 17.0637V17.2909H5.65454C6.02727 17.2909 6.33636 17.6 6.33636 17.9727C6.33636 18.3455 6.02727 18.6546 5.65454 18.6546H5.42727V18.8818C5.42727 19.2546 5.11818 19.5637 4.74545 19.5637Z",
            fill: e
        }), l.jsx("path", {
            d: "M15.5636 4.01824C15.3909 4.01824 15.2181 3.9546 15.0818 3.81824L14.9181 3.6546L14.7545 3.81824C14.4909 4.08188 14.0545 4.08188 13.7909 3.81824C13.5272 3.5546 13.5272 3.11824 13.7909 2.8546L13.9545 2.69097L13.7909 2.52733C13.5272 2.26369 13.5272 1.82733 13.7909 1.56369C14.0545 1.30006 14.4909 1.30006 14.7545 1.56369L14.9181 1.72733L15.0818 1.56369C15.3454 1.30006 15.7818 1.30006 16.0454 1.56369C16.309 1.82733 16.309 2.26369 16.0454 2.52733L15.8818 2.69097L16.0454 2.8546C16.309 3.11824 16.309 3.5546 16.0454 3.81824C15.909 3.9546 15.7363 4.01824 15.5636 4.01824Z",
            fill: e
        }), l.jsx("path", {
            d: "M10.3635 11.1818C10.2272 11.4636 10.109 11.7636 10.0272 12.0818C9.98173 12.2363 9.95446 12.3909 9.93628 12.5454H7.27264C6.89082 12.5454 6.59082 12.2363 6.59082 11.8636C6.59082 11.4909 6.89082 11.1818 7.27264 11.1818H10.3635Z",
            fill: e
        }), l.jsx("path", {
            d: "M13.6454 8.63641C13.1545 8.7455 12.6909 8.92732 12.2454 9.18186C11.9363 9.36368 11.6454 9.57277 11.3909 9.81823H6.36358C5.98176 9.81823 5.68176 9.50914 5.68176 9.13641C5.68176 8.76368 5.98176 8.45459 6.36358 8.45459H13.1818C13.3636 8.45459 13.5272 8.52732 13.6454 8.63641Z",
            fill: e
        }), l.jsx("path", {
            d: "M2.27272 16.8637C2.52376 16.8637 2.72727 16.6602 2.72727 16.4091C2.72727 16.1581 2.52376 15.9546 2.27272 15.9546C2.02168 15.9546 1.81818 16.1581 1.81818 16.4091C1.81818 16.6602 2.02168 16.8637 2.27272 16.8637Z",
            fill: e
        }), l.jsx("path", {
            d: "M17.7273 5.04544C17.9783 5.04544 18.1818 4.84194 18.1818 4.5909C18.1818 4.33986 17.9783 4.13635 17.7273 4.13635C17.4762 4.13635 17.2727 4.33986 17.2727 4.5909C17.2727 4.84194 17.4762 5.04544 17.7273 5.04544Z",
            fill: e
        }), l.jsx("path", {
            d: "M18.8636 19.2727L16.9 15.8636C17.4 15.4272 17.7545 14.8454 17.9364 14.1908C18.1727 13.309 18.0545 12.3908 17.5909 11.5999C17.1364 10.809 16.4 10.2454 15.5182 10.009C14.6364 9.77266 13.7182 9.89084 12.9273 10.3545C12.1364 10.809 11.5727 11.5454 11.3364 12.4272C11.1 13.309 11.2182 14.2272 11.6818 15.0181C12.1364 15.809 12.8727 16.3727 13.7545 16.609C14.0454 16.6908 14.3454 16.7272 14.6454 16.7272C15.0091 16.7272 15.3727 16.6636 15.7182 16.5454L17.6909 19.9545C17.8182 20.1727 18.0454 20.2999 18.2818 20.2999C18.4 20.2999 18.5182 20.2727 18.6182 20.209C18.9454 20.0181 19.0545 19.5999 18.8636 19.2818V19.2727ZM12.8636 14.3363C12.5909 13.8636 12.5182 13.309 12.6636 12.7818C12.8091 12.2545 13.1454 11.809 13.6182 11.5363C13.9364 11.3545 14.2818 11.2636 14.6364 11.2636C14.8182 11.2636 14.9909 11.2908 15.1727 11.3363C15.7 11.4818 16.1454 11.8181 16.4182 12.2908C16.6909 12.7636 16.7636 13.3181 16.6182 13.8454C16.4727 14.3727 16.1364 14.8181 15.6636 15.0908C14.6909 15.6545 13.4364 15.3181 12.8727 14.3454L12.8636 14.3363Z",
            fill: e
        })]
    }),
    M = ({
        stroke: i = "currentColor",
        fill: e = "transparent",
        ...t
    }) => l.jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t,
        children: [l.jsx("path", {
            d: "M8.205 14.798c.04-.073.078-.148.115-.225a4.796 4.796 0 001.68.302c2.516 0 4.6-1.918 4.85-4.377.084-.005.168-.013.253-.022A5.135 5.135 0 0110 15.125c-.63 0-1.235-.115-1.795-.327zm3.607-9.59l-.027.08a3.58 3.58 0 00-.052.154 4.877 4.877 0 00-6.591 4.155 2.46 2.46 0 00-.259.108A5.134 5.134 0 0110 4.875c.64 0 1.25.117 1.812.333zM10.04 11.792c-.925 0-1.3-.635-1.37-.922a.145.145 0 01.024-.113.128.128 0 01.097-.049h2.5c.034 0 .073.018.097.049a.145.145 0 01.024.113c-.07.287-.446.922-1.371.922zM6.36 11.798l.038.065.003.008.006.024.009.024c.09.247.086.621-.02 1.034a2.818 2.818 0 01-.362.844 2.843 2.843 0 01-.917-.12c-.41-.121-.735-.31-.904-.513h0l-.001-.002-.007-.008a1.41 1.41 0 01-.043-.053l-.013-.018-.006-.012-.007-.013c-.109-.19-.049-.473.203-.615l.006-.003.006-.004c.015-.009.053-.024.136-.02.078.004.17.024.264.056.373.157.735-.11.794-.444a.971.971 0 01.087-.264c.04-.075.075-.104.092-.114h.002c.241-.138.522-.05.635.148zM16.409 7.434l-.056.093a.648.648 0 01-.01.011l-.016.015-.013.016c-.204.241-.588.451-1.058.58a3.198 3.198 0 01-1.085.114 3.238 3.238 0 01-.42-1.006c-.114-.475-.112-.909.002-1.2l.008-.019.005-.02a.574.574 0 01.054-.117c.149-.24.499-.342.806-.162l.253-.43-.253.43c.08.047.181.214.226.491h0v.002a.591.591 0 00.769.459h0l.011-.004c.268-.097.462-.087.544-.04h0c.302.178.38.542.233.787z",
            fill: i,
            stroke: i
        }), l.jsx("path", {
            d: "M8.417 9.25a.833.833 0 100-1.667.833.833 0 000 1.667zM11.833 9.25a.833.833 0 100-1.667.833.833 0 000 1.667z",
            fill: i
        })]
    }),
    j = ({
        stroke: i = "currentColor",
        fill: e = "transparent",
        ...t
    }) => l.jsx("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t,
        children: l.jsx("path", {
            d: "M3.297 5.234a2.599 2.599 0 011.937-1.937 5.544 5.544 0 012.532 0 2.599 2.599 0 011.937 1.937c.195.833.195 1.7 0 2.532a2.599 2.599 0 01-1.937 1.937c-.833.195-1.7.195-2.532 0a2.599 2.599 0 01-1.937-1.937 5.545 5.545 0 010-2.532zM3.297 16.234a2.599 2.599 0 011.937-1.937 5.546 5.546 0 012.532 0 2.599 2.599 0 011.937 1.937c.195.833.195 1.7 0 2.532a2.599 2.599 0 01-1.937 1.937c-.833.195-1.7.195-2.532 0a2.599 2.599 0 01-1.937-1.937 5.545 5.545 0 010-2.532zM14.297 5.234a2.599 2.599 0 011.937-1.937 5.544 5.544 0 012.532 0 2.599 2.599 0 011.937 1.937c.195.833.195 1.7 0 2.532a2.599 2.599 0 01-1.937 1.937c-.833.195-1.7.195-2.532 0a2.599 2.599 0 01-1.937-1.937 5.546 5.546 0 010-2.532zM14.297 16.234a2.599 2.599 0 011.937-1.937 5.546 5.546 0 012.532 0 2.599 2.599 0 011.937 1.937c.195.833.195 1.7 0 2.532a2.599 2.599 0 01-1.937 1.937c-.833.195-1.7.195-2.532 0a2.599 2.599 0 01-1.937-1.937 5.546 5.546 0 010-2.532z",
            fill: e,
            "data-fill": "secondary",
            stroke: i,
            "data-stroke": "main",
            strokeWidth: 1.5
        })
    }),
    U = ({
        stroke: i = "currentColor",
        fill: e = "transparent",
        ...t
    }) => l.jsxs("svg", {
        width: 24,
        height: 24,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        ...t,
        children: [l.jsx("path", {
            d: "M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z",
            fill: i,
            "data-fill": "main",
            fillOpacity: .16,
            stroke: i,
            "data-stroke": "main",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), l.jsx("path", {
            d: "M8.5 11.7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15.5 11.7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15 14.66a3 3 0 01-5.82 1 2.77 2.77 0 01-.18-1 1 1 0 011-1h4a1 1 0 011 1z",
            fill: i,
            "data-fill": "main"
        })]
    }),
    I = ({
        stroke: i = "currentColor",
        fill: e = "transparent",
        ...t
    }) => l.jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t,
        children: [l.jsx("path", {
            d: "M13.752 4.693c0-.835-.61-1.544-1.436-1.67a2.111 2.111 0 00-.632 0 1.689 1.689 0 00-1.436 1.67v1.181c-.471.135-.92.322-1.34.556l-.836-.835a1.689 1.689 0 00-2.196-.166c-.17.126-.32.277-.447.447a1.689 1.689 0 00.166 2.196l.835.835a6.33 6.33 0 00-.556 1.341h-1.18c-.836 0-1.545.61-1.67 1.436-.032.21-.032.423 0 .632a1.689 1.689 0 001.67 1.436h1.18c.135.471.322.92.556 1.34l-.835.836c-.59.59-.66 1.523-.166 2.196.126.17.277.32.447.447a1.688 1.688 0 002.196-.166l.835-.835c.42.234.87.421 1.341.556v1.18c0 .836.61 1.545 1.436 1.67.21.032.423.032.632 0a1.688 1.688 0 001.436-1.67v-1.18a6.335 6.335 0 001.34-.556l.836.835c.59.59 1.523.66 2.196.166a2.11 2.11 0 00.447-.447 1.688 1.688 0 00-.166-2.196l-.835-.835c.234-.42.421-.87.556-1.341h1.18c.836 0 1.545-.61 1.67-1.436.032-.21.032-.423 0-.632a1.688 1.688 0 00-1.67-1.436h-1.18a6.332 6.332 0 00-.556-1.34l.835-.836c.59-.59.66-1.524.166-2.196a2.11 2.11 0 00-.447-.447 1.689 1.689 0 00-2.196.166l-.835.835a6.328 6.328 0 00-1.341-.556v-1.18z",
            fill: e,
            "data-fill": "secondary",
            stroke: i,
            "data-stroke": "main",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), l.jsx("path", {
            d: "M9.5 12a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z",
            stroke: i,
            "data-stroke": "main",
            strokeWidth: 1.5
        })]
    }),
    b = ({
        stroke: i = "currentColor",
        fill: e = "transparent",
        ...t
    }) => l.jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t,
        children: [l.jsx("path", {
            d: "M3 10.77A6.77 6.77 0 019.77 4h.46A6.77 6.77 0 0117 10.77v0A4.23 4.23 0 0112.77 15H7.23A4.23 4.23 0 013 10.77v0z",
            stroke: i,
            strokeWidth: 1.5
        }), l.jsx("ellipse", {
            cx: 8,
            cy: 10.5,
            rx: 1,
            ry: 1.5,
            fill: i
        }), l.jsx("ellipse", {
            cx: 12,
            cy: 10.5,
            rx: 1,
            ry: 1.5,
            fill: i
        })]
    }),
    N = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANnSURBVHgBtVTfaxxVFP7unZk7s9tkdTdu2m3ApIlp0Ros/qBaKcaHoPWhKNggCL4IVXz0H3AFX4SCIAS1BZ/0JX0qSBBE7ZOWljQttKV5aJMltGmb3Ta73ezuzP3VM9NsSLoJeeqBgZlz7/nud8733WHYJo5NWqd+B+7yLvCRB1C7j0MXGTNb7WdbLYz+a93qTfSmIuS0hR/nOINJZeBlB+WLIiWDfa+kTz0J7m4GduRH69+fxZAwSOl1eWPBPREVfF9PwMCfOYMpSi+sr+UdaNaySoB+KkhtdpiFExltrxnNplckho6dl+8UqZstGb71A4IDL2HYd+Fh03DAGukTSkO1oISK1Ntn593LtLAcr3bM8EzZ/mSY/ZLa2zYIuvLHBXx25Sbm3v8Ks/E8NzCMhWAMH0zfl7jb0tsCvlcIcv29rO/qPBanJpClVGUN8IUp6zeuot+MwG0pC5e4Z4XTARJqg0pkEVELdWnpfKJFYhFQ1xpgsWj5X/MYUDxJJpEPHOzZsXHEVWkwWyO16Jyc4PivHCKsx47iYBwBScaSir8L2ElD7lpffOOhwsKKgs8fj1nSTGNWY70Cb+QceJReCoHTtYiAfBgaKFmAoMkmRiPzZGuxJnszHsYKQfLEjA73uNifcXByLsR315u4TXM+fsD/vC+DgIWQ1L3lo9/CkQndzrhek/hzsZU8i1Q8SCOYqSoSzBBb4J8lCce1+18fQI/wUY1r3CVi2a3g2FWLW4tmPsUhnI2OukcgNRKkR7BEMNINeWJtDZY5RzmfxYMEME83qsmh6D0x8kIZvw7nvE9tetX0VKw1xEUV8Zl7Gp8M+tmjBXRXCfHNnIt6yE61BC6dHmd6dTtw6Bc7REXPZvuiwa7n7OHlkj+Z2x0dCsviYrOJhtVIGYNskwT+8GXkxvbh3UyAlOviVSL6/YDHTrQ7SQBHJ21XWMGwQ50+syvqS+/U456wH6kQv5dm0hPtzcrBSmyA6S+YjL9Lof2YZP2ZvHLwecZuAKs/h7PjrE535raSkOVboqQa9polExjLGmtD5Gh2C8y3weLwBKZohufIJV9vYNiOg7/ZjLOCPG3K9OyRI+WSd0VLhDtIwb0Gd0+uA2tHKbKv0aU+2u+wbzoA23GErmFzDl4YQv9fQ4ji1n/opx6PACRYZzWvp006AAAAAElFTkSuQmCC",
    V = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKISURBVHgB1ZRLT1NREMf/cx8tFdpCRYzhYUxQWZloBCQhLgwu3BmjCerKhRsSWCNx0Z0uVUzcsTb4AYzGxMTAAjQQ4wMiGEBaKbQXaG+hva8z3l7kbRV2Mps7c2bmd+acmXOB/11oP8Et/RwQaYRUAT/y7oIKvW0BejRKdlHgjX6WQyGcqIvgOAvIPh+MqiAy4zE7rK9QRJDs5axk7ex3TUlJDkxZRmygg5Z2AW+Pmo1HCO2XatW7RAhu9cWTzs69nUFN9GppfNSm1E+8jOnhHtKkde+1t1oNw3qtqjizE1ZE5HI/1ZVXmY+Dh41KDqM2yixtAC2z7DwEpcJ59QX2KL6s9MrlzpeEpaMSQX7zDGEPeKWT/ZYpE0NU8j4bBYkrbJtNrygVpR4wdw6BzAInXG8i4zev7pWVDznt7PC8nvRNe2wb7AF1DYpjKOZiXO5OO+LknoFs12izh+7bOVgFW1jQPWBFcG1hOeaLfR4ouWnYGP0XzLJpbHw4cCs9h9mC7Q6TMdT5G+gO0KpDEAW98H0/hoeCkS0Gc5gyHybRawuwd1Q3R2LEQcQbDWh9yqcsaXNcLjSguqUBHYqKJhZc8TPluFWQlrNoZmRCej6zgK/uZCaEAsdvY2bXYDc/4RBJqHdvdVuXj9XnWgNhfqSnGcaS2p1e8v0g9wUpwKQgzJZbSL3sImM9XllXhrooc7GPk0YeVdvOR5IgnwMqRCpi3oV9k2SYg3P4giiJndchbTXe3UGMVSziL0Iy2L/qNuIPsG0VrkUTDwNTZ/s4q9iovt6EVqVUbc64b1EzBYJlaluwzsn2NCojRTcs5uicYP/lCB64aqRgx1PWWgJTMnFauRelzV/WwZJfoXETXP1NNE4AAAAASUVORK5CYII=",
    S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJqSURBVHgBvZRNaBNREMdndlea1GRtaaNgerGxpWBB8OTRHgQRBL2IRRHxYhEET1IPhejBS1EUQQoeBNGLl168iIgnbx4KEpSCVDBt0+wm2WxrmuzHG+el3c1nKa3gwCPzMm9+7/9m3j6ALlYs01UiUuBfbLVI5yWEYZP5EllGkeaWStQHezWGaKZNlxiylC/QOcOgUcOiz6slOsMxhL1arkCnGbbAQ6wVKSOBZoWSsE+rK8iX6TgKmAMPbicSuFivnwG99RVGW0Zm+7cEAm9hpStQmmlScnAQl2s5GufpFx76VkAAbIgwQWQdEGUvSJ/vHY5fxgkM/oCwkxJGWRpChDchzOXxR7Qq6GtuPl3Y+GmnKU1aB5CPGXE1mCGCk+H6CsMIWoFRFTASpmmIdGczWb7YAayuwDXOvdnYXKpro0lTEVBXGxvwjBTlof3KHqvvEEZ8mBBe09yhrfr5nVDBrfB+e02yIaWocIK9HyEAXXjAt+4Uu2OBEuIBlU6gv+ICrYvgJFwleqHrifmWI0dSuOh7MMluNszUu3x9LqebDXWIyjvTLU9jGkULUFpsFBd4xxusyaovjqMsewtPWB5QNeg8flQV/+7I85FaEO+QEE3hJ0bcY7cKB9iLtwENN3CXNSVyPTZ7ONcc7/qiRIfxJauc4WI7IO/dNpNqAsj2pfdL9d2zsdlYrj13xycqegyeMOcZHlREcGyxxs1wyfKBpuJPj37vlrcjEBFFD8IjgfAa+nmZvOMlz+GeTg08PvIB9mt2lgaq38T7ytvNdet+cXq3J03bDagPYYEydMV2nPFDPf1fWTnB/7S/M7wZIo1ZCMYAAAAASUVORK5CYII=",
    Q = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ8SURBVHgB5ZHPb0xRFMe/5743Y9DWtEpEmwq66iSsjFoItWGBtDT+AKxEdISFsGgbC11I+APY2dVSdOPHQlISKiTaRphQbWdGK9rRaTvv9c09zn3zq0Mlwkqc5P24957zud/vOcB/Ey+Gucl8CX8Rg8McnRjG0JYW7GPgBjO6FP4wXr7jDVJ8pzGC/ZowL9JmSSP7W0D+cLKbh1qPFNePp7jKyeI2GM2Wxk0ikGZ0tO6kZz6QuceWZ0U4p2LboAIxUPU1TvSsMXttGylTo9ApoPuwcXz3mxPP9+i9YbFMeUgifQDJ9GWBhipg5hJNp6TVYYQaWpDJtBfPIhFyZQCno/O9E9g+fgGL3lW5gPNAW6ek+gxSM10V0MnZHf4+2UCgTozhLI9dqi0eRyOUQmi0G1r1wlKzZi8P5EBc3o6o6ROlV0pAMuoQhhUupHIrvKVDpTbFL96CtxCTlRHx1i8p2Ut0PQJTW2F5HZrvQtE9kFUPqxH4Npk/Wfo6AifdjrVb+2RxDHOvAS0jYhym6NOH5UEwxZe17xyUGpBvPWi1XBssJomPZDOU+wDEHXC+GJjRlYFN78uW8x5GlgGFwLW+Ad9uIbw5IJcJwq5r8t25yUJreAarGpKVQKVG8WMo4VrV5bU7ZdR6MiCBZ0TdYlF4nCL9rvm1i7mJj08+B6y1lUBj1xqTghywMA1fEQUVFl6ZXgo0nU8jmi6VlBxPnO8X6Z1YKXKe9C5YNpSVATnjQM0uKcxqzI3MQLtHZSiDZcuEzfhVWOvKMBa4mxJvpsWWgKccsFslB5sqLEPpGHLqoKi0fwIqyYdTUJuV3i0BofWGrv1eMn+CRwP4J+I7WUP7j/3RNeYAAAAASUVORK5CYII=",
    y = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANDSURBVHgBzVRLjxRVFP7urVvV1d3T1Y9ynj3MAOODKJEYJ2SMo7LQKIGFJipGY9TEx9K/MDFuXJlMjEFduCW+iAtCNBDHIQRCAuER3pMZGB7zaCY00/RUdVfde7jVTdPNMCGwIXyL+zi556tzzndOAY872MM83jRCouLA5GmIog96th3e7+8zeV/C934j4+I8MsRgMkLQ34GSNssLBfQwAzmmIBpvFUEqgbm1Wcw3iJuEROyl7eghiU7iTTsnxEIJN56VzEqqTGnWPPnOy9gYN5CyTGT/O4rd09dQeF5g4uevWMAbjht/wGr9xa5WsmQudPuHvD9zfeFgqqPyTdypfmsI8J37cWj+BmZScazZMoTPDQPJ4wr5WgDRsv4X6ozSWZ6+bdNTnFMX48rigtZIyeZSPf4X2X7/3T3HcOryAvYphWBtDxwiuJt+JbtGGPPRgRXABHXeroej43ZUgKKZUB8LoTZE1p0HcFAqlKZna3WGJKS4FsESBqxWoi/fwifbXsVmEVNdNWKD3Gg3BMsykO3dNPamu2R3ZNsxjh1+CBWdwwoscbWE2PLI3BS2ZZLw7CI7Gd2ddnpDEaMKkwMq5BNplw3b6ep35QUxXPLM4E5GQMDD8r2ts1TBQa1g77on+Pq4wWCYlDMtsITDM8JkRTsdvh346o8waJJFsOawyOMpVJcTzl7HeJThYIfZtzUfR0rUm4HrLZGmQRmwqUtHk9tbfUjXcmyE+XzsU1Q4q9fA1i2hfdmhMzhMt21Cx9+XNJqOEgtzE7FRTdDsVYmqHoALtTMYI61eIbqs6kTmg9ewdaqAkudhb8PB0/I1UL4u/vaK/Brj9cy4gXKsDef1pNTv0ZJ7EgU9QvKZXqx2Ehh4uhfpPSfwfXEJu84uysXJm2E9ugCniles/zXZkiDMcAtTb87g3NhnzG8Rpo5XRqk9vwrPbX4BH3KBzF/jGL1ahOf2VwfiaTlEivmFSXtXdQl+qDM6/DWbxgq4S+EXf6LuLRvwereLdbp2bUcm8O+RScy2vtGiV/IuTi//y6xIGGH4R8oqhrwu2z39iQCLfd242KjXAxFGGBkh/o+DjK5rgpkQpo9KWzvKuz/SI6ZFxKPELTRhPEWTxLpfAAAAAElFTkSuQmCC",
    T = (i, e) => ({
        id: i,
        plugins: e
    }),
    H = [T("essentials", [{
        id: "welcome",
        bigIcon: "PluginWelcome",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M20.45 9.85a1.14 1.14 0 00-1.73.13L16 13.4l-.12-.27 2.54-5.9a1.64 1.64 0 00-.65-2.09 1.34 1.34 0 00-1.87.73l-2.15 5-.4-.2L15 4.17a1.62 1.62 0 00-1-1.95 1.41 1.41 0 00-1.74 1.1l-1.77 7.09-.37.11.59-6.08a1.43 1.43 0 00-1.15-1.61 1.35 1.35 0 00-1.45 1.29l-.85 8.76h-.15l-.26.1-1-3.23a1.32 1.32 0 00-1.64-1l-.17.06a1.56 1.56 0 00-.75 1.93l1.74 5.74a4 4 0 00.13.74 3.38 3.38 0 003 2.67 4.9 4.9 0 002 1.27c2.64.82 5.37-.9 6.11-3.85a.43.43 0 000-.11l4.23-5.42a1.5 1.5 0 00-.05-1.93z",
                fill: i,
                "data-fill": "main",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fillOpacity: .16
            }), l.jsx("path", {
                d: "M19.28 3a3.58 3.58 0 012.31 2.11M20.28 2a2.37 2.37 0 011.6 1.47M4.67 21.07a3.56 3.56 0 01-2.1-2.32M3.57 22a2.39 2.39 0 01-1.45-1.62",
                stroke: i,
                "data-stroke": "main",
                strokeMiterlimit: 10,
                strokeLinecap: "round"
            })]
        }),
        tooltip: {
            icon: y,
            title: "Say hello & goodbye",
            description: "Automatically give new members a warm welcome on your server with a style message, image and role.",
            premium: !1
        }
    }, {
        id: "welcome_channel",
        bigIcon: "PluginWelcome",
        icon: ({
            stroke: i = "currentColor",
            ...e
        }) => l.jsxs("svg", {
            width: "18",
            height: "13",
            viewBox: "0 0 18 13",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [l.jsx("rect", {
                x: "1",
                y: "2.50001",
                width: "1.14286",
                height: "8",
                stroke: i,
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }), l.jsx("rect", {
                x: "15.8569",
                y: "2.50001",
                width: "1.14286",
                height: "8",
                stroke: i,
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }), l.jsx("path", {
                d: "M2.14307 2.93956L6.9202 1.46968C7.15569 1.39722 7.40964 1.41425 7.63335 1.5175L9.00021 2.14836M2.14307 9.26924L7.12469 11.5918C7.6778 11.8497 8.31839 11.8409 8.86423 11.568L12.0002 10",
                stroke: i,
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }), l.jsx("path", {
                d: "M15.8571 3.07143L10.9274 1.46928C10.7045 1.39683 10.4633 1.40499 10.2458 1.49232L5.83167 3.26459C5.07148 3.5698 4.98065 4.60949 5.67639 5.04191L6.36638 5.47074C6.61503 5.62528 6.9189 5.6631 7.19784 5.57422L8.26622 5.23381C8.69871 5.096 9.16977 5.26678 9.41347 5.64974L12.1434 9.9396C12.3595 10.2792 12.7581 10.4561 13.1548 10.3885L15.8571 9.92858",
                stroke: i,
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            })]
        }),
        isNew: 1697635298,
        tooltip: {
            icon: y,
            title: "Welcome members in style",
            description: "Welcome new members in a stylish dedicated channel that conveys your vibe and important information.",
            premium: !1
        }
    }, {
        id: "reaction_roles",
        bigIcon: "PluginReactionRoles",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M21.65 11.46v-.74a7.46 7.46 0 00-7.46-7.46H9.81a7.46 7.46 0 00-7.46 7.46v.74a7.46 7.46 0 007.46 7.45h4.55l6 1.83-1.49-3.5a7.45 7.45 0 002.78-5.78z",
                fill: i,
                "data-fill": "main",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fillOpacity: .16
            }), l.jsx("path", {
                d: "M14.54 7.35a2.22 2.22 0 00-2.66.73 2.21 2.21 0 00-2.65-.73 2 2 0 00-1.11 1.09 2.19 2.19 0 002 3.1 2.17 2.17 0 001.77-.91 2.19 2.19 0 003.77-2.19 2 2 0 00-1.12-1.09z",
                fill: i,
                "data-fill": "main"
            }), l.jsx("path", {
                d: "M8.32 10.6h7.13l-3.37 4.31a.278.278 0 01-.35.083.28.28 0 01-.1-.083L8.32 10.6z",
                fill: i,
                "data-fill": "main"
            })]
        }),
        type: "B",
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMYSURBVHgBzVRLT1NBGD0z99WWlkoLalCqUXlEQCBglAjuTNzIwgT3RKImrvAXNHFjQqKJr0RXxgUhmmjiQqNRJNEYHoKgwYUhPLSWl0IpLdzOfYzTQi2kmODG+G3mzsw3537nzPkG+N+D/FU25+TcAOQvnyBhEmZ3kJhbAmwOcjVcBE2hMLpbkAAHam4gnxL4iQynxEEtAptaiDMDs0NtJLIpYP1V7vMXYO/RMtTJkqgimUBhWTYkis0jqmOxbxRvX44hhCCx5fTG4Vu86HgF6uvL0S5OB7D1sCv34rmrH61PgHCqiobbPE+SUHT6GC7LMson4kIaQdMprxIYF/OZFRuTEQtejUCVMsSmdZvkOUhxYS5YrS/4OlVhwkZh8S54NBWVg/MMqsgfDBloDGjY7qL4vGgiotuIRzncqopSH8UCs/FDrH3XLfjFQbeTVD3zwU2bH3CVUjiIjZRMSbEMUR3lGU41eUpq3CHA9+SuqtT7k6FnlmFqxUoBEw5ZdUOTv07DAZGzwC1nzCS83KtgJGKibpcKv3OVWqFTQp1fSY2ONRncYlRzKGRBP/nNVhDiGkzZaYliPKbLGzDaBxdoTkOBhmqfkqV8qXfjWjIvHYaJsRfD6DwYQ0xecoEVBqxaIvGysCj/aVhHiUeCKSh7RDFxxpN+RszMaJALqWt/vnRIUZAfmsOVjh48FhUu9F4ghnxqCvpwCXGkk2OmjZ3C0QIbBzSKIXG7ps0xNJNpivgMfbPPi7snqtEqK8hhceiBfEz2Ys3YTV16k3ub9UjMpPW0EsscLJHF3oxMOi9ZCfpeGJ6daURVxzt0Dpwny8nN1M1OhLRXFqP3hfeyenNjEJvFpIdMp3O2hQgYQksVuJcGS2WkP45c57sLSoyTuTuMa4kYvbkSVT4aTPC2MnDLcTptxuWoUGC2/yL5ttkvf7de7zzCzR5Dic4pbXOjyofVVSnrAJXAAnkI9+MPHNZPmkdm3RN9BW4Y2EnNbDRh3mWHC+PdLUTHVgDTUXuHK1T4WllCjniuZPFUJYQNo/VnEQkS0VP/Mn4B2Nk1DhFqs8IAAAAASUVORK5CYII=",
            title: "Self-assigned roles & verifications",
            description: "Let your members self-assign roles linked to permissions, notifications or just for fun.",
            premium: !1
        }
    }, {
        id: "moderator",
        bigIcon: "PluginModerator",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M20 4.512v6.445c0 .401-.148.786-.41 1.07-.264.283-.62.442-.993.442H5.403c-.372 0-.73-.16-.992-.443A1.574 1.574 0 014 10.957V4.512c0-.4.148-.786.41-1.07.264-.283.62-.442.993-.442h13.281c.357.024.692.194.936.475.245.28.38.652.38 1.037z",
                fill: "#A6AAAD",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fillOpacity: .16
            }), l.jsx("path", {
                d: "M10.897 12.47h2.235v7.3c.004.161-.023.322-.078.473a1.21 1.21 0 01-.244.402 1.11 1.11 0 01-.371.267 1.073 1.073 0 01-1.225-.263 1.249 1.249 0 01-.326-.848v-7.3l.01-.032z",
                fill: "#A6AAAD",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fillOpacity: .16
            })]
        }),
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJrSURBVHgBxVQ7aBRRFD33zczmo8SsJDGSL9gYrEJsAgo2FmJhpWAjiErAQrEULdLYio1CbMRWsbGLlU0IKCGIXSCmiVnyz/7mP+96Z9fZ7GZH3ZDCwwy8z73nnft5D2gRzEyt2P3VaPI5d4Rt6FGErEwtFUIHJuwOA4UxYOv1FAUtE154xVnPxIiQGGn7yoDvA7mFKdpqWE8znpjmTpcw+ieyGDpCxowwcnGGT0tCKFXhw2Vn+HK2/YkX4GzIsJJ1z2PsFXQT6Z5Hc7OL6oPtYHnxAW3Ga2ayefN76ZQKMMfAYEaoMnWOphxru80quww92T3kjvnLnU8vveHi59vk1kLmgIaYMYhDgOQgZWFcimY4RfTEazVCFZHCESDOvZhmVSWRQWHHGMYRoE2oKyelteLJ+BD6/SJ7xFTCIaEjXk3GkQdTyRUgK0BvfqNtbX1dPQ4irGoNRzPc5JeKI2KWj9z41yCHNdslj2btbfNZQuj3ICKpTrvj4Fz9qQZLSi2cQVjtgtHz9tviDi1u/+h4UTFg/JSGKxwIOfp6D99UoPf7rSadoLWPNWJxTYFUtakpLR+7UnZWOi860pwUyvLnhLHBWVqF5QZ5DbZyDQf6kKuM5x/BjVJOrChl5KUfVhj7SiWn5dBE7VGQKOxuD0vvb5Afz81YJr3knORkII2UNPzfih0VYVMbyFmmFMuHx+0ozt+phprYV5J+dRMbHwdxXPJwIo1U9C9FIRYMA1/m79Nuw97dAwKSwfV3bKxuo19i6YurXKeQrTaEug8rc9eoiH+g6T2cmGHLCNAlD5J1LIswE8L5dIvK+F/4BV01Co5ZxYPFAAAAAElFTkSuQmCC",
            title: "Automatic moderation",
            description: "Set up filters for bad or disruptive behaviors and words and let MEE6 do the rest.",
            premium: !1
        }
    }, {
        id: "levels",
        bigIcon: "PluginLevels",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M7.225 11.076a3.388 3.388 0 01-2.161-.848 3.01 3.01 0 01-1.008-1.987c-.372-3.08 1.158-3.194 3.016-2.054M18.775 11.076a3.388 3.388 0 002.162-.848 3.01 3.01 0 001.007-1.987c.372-3.08-1.158-3.194-3.016-2.054",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), l.jsx("path", {
                d: "M16.713 18.064h-2.189v-4.78H11.32v4.78H9.246a1.391 1.391 0 00-.907.382c-.233.23-.354 1.746-.337 2.054h9.996a1.042 1.042 0 00-.079-.456c-.06-.146-.153-1.497-.273-1.61a1.327 1.327 0 00-.424-.269 1.462 1.462 0 00-.51-.101z",
                fill: "#33353B",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), l.jsx("path", {
                d: "M8.477 4H17.5c.398 0 .78.147 1.06.408.282.261.44.616.44.985v4.044c0 .732-.156 1.458-.458 2.134a5.557 5.557 0 01-1.304 1.807 6.041 6.041 0 01-1.95 1.204 6.39 6.39 0 01-2.3.418c-1.588 0-3.11-.586-4.234-1.63C7.631 12.328 7 10.914 7 9.438V5.393c0-.366.155-.717.431-.978.277-.26.653-.41 1.046-.415z",
                fill: "#33353B",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })]
        }),
        tooltip: {
            icon: V,
            title: "Friendly competition",
            description: "Boost your engagement by making your members compete and earn rewards by being active.",
            premium: !1
        }
    }, {
        id: "achievements",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("circle", {
                cx: 9.167,
                cy: 11.667,
                r: 4.167,
                stroke: i,
                strokeWidth: 1.5
            }), l.jsx("path", {
                d: "M11.667 8.333V7a2 2 0 00-2-2h-1a2 2 0 00-2 2v1.333",
                stroke: i,
                strokeWidth: 1.5,
                strokeLinejoin: "round"
            }), l.jsx("path", {
                d: "M9.167 10l.374 1.152h1.21l-.979.711.374 1.152-.98-.712-.979.712.374-1.152-.98-.711h1.211L9.167 10z",
                fill: "#C6C8D7",
                stroke: i,
                strokeWidth: 1.5,
                strokeLinejoin: "round"
            }), l.jsx("path", {
                d: "M16.25 6.667a.417.417 0 110 .833.417.417 0 010-.833z",
                fill: "#C6C8D7",
                stroke: "#C6C8D7",
                strokeWidth: 1.5
            }), l.jsx("path", {
                d: "M15.343 4.225l-1.176 1.067m1.186.066l-.539-.595-.539-.594",
                stroke: "#C6C8D7",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })]
        }),
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANcSURBVHgBxVRbaBNbFF3nzGQmmSRNY9PY2MZLi7e911719r5QrNdy5YqKDwT1R0FEf/XPDz/EfPmvIiKiH34oIvh+gApWBV/4qGhFERStYlubtk5NJ5nXcc/ExFqL+iG4SYbz2HudfdZeZwPf2diXNmfuFVH2DnFXQYUjwFkAljyMnGYie24jy307oBCsZScmqkCV4GP72BIGk2m8PLuAFb4KOHOHmEABqaWtmF4bwwzy4t66y+BkB9Fx6AravbkShlQ3zWi1q0K7DqeZMSbgpO1CrQxg8uo2LEknsaVr2KGMi3ucvFMhju4s23rkgXM1WV84SghCOPK0g3+pjzwfeTRgnYqo4YCPj2Nu56CFh7oFlRfPzbsCTVEZv8WVhUM90pFEml0mwIr8EJpp+3PAjBD89B7UMYFG20FlMsjRGAtBZUVAgyrz1nK9YdD7vOgIbXJsuOmpxqpFJ8Slk4tZXxmwOSOUU7tQrwC1XEJAlhEL0/F3+i30FRyfm8qAhJa4DImjoiYOrXsAw15sbkC6pb+B4tNSAgym0CABEYfDXNaK+TbEhIu9BTzP2fglKmFKTMJLw8b5ngJyjluzeAaWl2L7u5RHloFIGbBln6iWHYS9cYDBqEvgv44BE0HirjHKMadaxr8J2R+Hae3egIVEBOuiIQTKcpGL9PmAqoFEaePvSahWFSR7Ci5mEcian4KIK5yuy/3xvJSMV1Q14iD0TxMaRpTA8gEzGcEFg1ZaFcL7AQ5V9NRrEw90pxzxNOfiQJdZntM5wfIkD90HbJ/9kUfPbj7FK0LMpjQJNiFrEvOrmzVdoqAo3GrVfz5Dd5/hiQ8iwbRD6Pdl094GZ3onZfXhiXky6H+LY1NigbW9eRfXsza66IqEifqI5Iv8j3EK9GFcKFXZpdrd3sCKVwZjgmSmj8ySntZejfP7/9cE0U1c6pTqEP29A+bUqIhw/vj4NWyjaJ0n8PDGBlaO97Oaul+ENR1NIxvBr7UYN/t3rKwKYzmxqHnalhnyRMfB64+x+dg5vOnMMBOjrAwwi6Rj5jFxtIMWhNzahJ9JFjkewflMMzW0L9gnzeHP3SJGNRgvkSZdr/9JEJSDZSroa4ij9/AK5uArNmb7assIuTAZgcpuuGfWw2TEM36UvQfefjm2sVINoQAAAABJRU5ErkJggg==",
            title: "Gotta catch them all",
            description: "Let your members hunt achievements for rewards, that encourages activity in your server.",
            premium: !1
        }
    }, {
        id: "starboards",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsx("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: l.jsx("path", {
                d: "M10 3l2.245 4.55 5.021.729-3.633 3.541.858 5.001L10 14.326 5.51 16.82l.857-5.001L2.734 8.28l5.022-.729L10 3z",
                stroke: i,
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: e
            })
        }),
        isNew: Math.floor(Date.now() / 1e3),
        unleash: {
            feature: "starboards-plugin",
            variantOptional: !0
        },
        tooltip: {
            icon: N,
            title: "Highlight the best messages",
            description: "Showcase popular messages in a dedicated channel when they receive enough reactions.",
            premium: !1
        }
    }]), T("serverManagement", [{
        id: "automations",
        bigIcon: "PluginAutomations",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("circle", {
                cx: "6.4",
                cy: "6.4",
                r: "2.4",
                stroke: i,
                strokeWidth: "1.5"
            }), l.jsx("circle", {
                cx: "17.5992",
                cy: "17.5992",
                r: "2.4",
                stroke: i,
                strokeWidth: "1.5"
            }), l.jsx("path", {
                d: "M11.2002 5.65039C10.786 5.65039 10.4502 5.98618 10.4502 6.40039C10.4502 6.8146 10.786 7.15039 11.2002 7.15039V5.65039ZM12.8002 17.6004L13.3305 18.1307C13.4712 17.9901 13.5502 17.7993 13.5502 17.6004C13.5502 17.4015 13.4712 17.2107 13.3305 17.0701L12.8002 17.6004ZM16.1647 9.35025L16.5673 9.98299L16.5673 9.98299L16.1647 9.35025ZM7.83567 14.6505L8.23833 15.2833L8.23833 15.2833L7.83567 14.6505ZM12.1305 15.8701C11.8376 15.5772 11.3627 15.5772 11.0698 15.8701C10.777 16.163 10.777 16.6378 11.0698 16.9307L12.1305 15.8701ZM11.0698 18.2701C10.777 18.563 10.777 19.0378 11.0698 19.3307C11.3627 19.6236 11.8376 19.6236 12.1305 19.3307L11.0698 18.2701ZM15.3057 5.65039H11.2002V7.15039H15.3057V5.65039ZM12.8002 16.8504H8.69467V18.3504H12.8002V16.8504ZM15.762 8.7175L7.43301 14.0178L8.23833 15.2833L16.5673 9.98299L15.762 8.7175ZM13.3305 17.0701L12.1305 15.8701L11.0698 16.9307L12.2698 18.1307L13.3305 17.0701ZM12.2698 17.0701L11.0698 18.2701L12.1305 19.3307L13.3305 18.1307L12.2698 17.0701ZM8.69467 16.8504C7.84429 16.8504 7.52089 15.7398 8.23833 15.2833L7.43301 14.0178C5.44953 15.28 6.34361 18.3504 8.69467 18.3504V16.8504ZM15.3057 7.15039C16.1561 7.15039 16.4795 8.26095 15.762 8.7175L16.5673 9.98299C18.5508 8.72077 17.6567 5.65039 15.3057 5.65039V7.15039Z",
                fill: i
            })]
        }),
        isPremiumIcon: !0,
        isPremium: !0,
        type: "B",
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOcSURBVHgBnVRbaFRXFF3n3kkmk5khmZgYE8yUJuKHtYSmrdTYNkmp+NWP0kRsa0v6QEHox9Af8ccRRRBFUVREDMZAFCKKQUUlvvGFBBF8xPGBrzFjMmGSjHce986997jPTeZmTFTQ9XMf++x11t57ncPwHgSDXLpSDVdUR6E0CgcKkan2IdHVgjRjjL8th72LbN4+Pk2Oo9KUkT85phvQvBKi51ZgYDLxG4RLbyi1nLEAB/MnR/iF/lDhcWaCv2tT00Ta7caj83+x9BTCJbcSX0k6eui1eHwxUqNs28t7rg68BxKpnVmO0MHFTBPfjmxA1oUybpEZOpEp9MX5kkW1uPhjDRpySdI6lFN9uHDpAYZES55HURPkPBRkzLQJqa48S5lNZv1jpS4UlXmIkE1U48xDxSfT8DMRLrVyGQqP7kYJvQ7ZhBL4PsNES+LVRMtMDbf3X8PQ/l6sZDqS1AVF/P9nPj5fNBd75/nhu/4Mw1Z+BuWC8I2hLL6qBJIJFgDjHl2T+pIRV4eaRmJiB7xa0QT/gmqs1E0MLu/EMirfzIb9pbjpyCUM33R3QkaEynaSTiM35nbCseYnBKqK8f1AHAfarmFPLpmAbxiSTbigjXt1FVVyBjHqyfTcha31+PqH2fiDVCmd17Gu+xYuk/vimITKCAybMJVGeR41QJcRk00U0dbOzyrga52PX2aWoP7hIE5vPo1Dw0mosoQSk2Mol4zskwgGx6fc0sXlJyPwgCYsjEzDCS9vwK/fzcKfGQOj7Vew9tRdPLZbaVJjyBUOCbo+bnxZxoB4WoThMPKlAmuRhU3N+K2qBH+TqhNbz+BkjFTlqpk+S23wlJrrGRk1o0lnR16w9T3NBWPTxltQ6sU3UQVHVnVjA3luYNfvWNNchzkiVlat1nvLjH/pCFdRtp9qbfXOMP7P5rJsyU9jmEvlWoq3tGBZRRGakxnc51SSx4kvGENB71Ns74qp9XKeUSfWqSkOLW2RhOuY+9NgE9MthXQOjXzyWHaXjT1oD73EjngCIUXFI8owqa8K2eQunaFBsUZLj5GNI3knOtZLe8oOF/o1FV6hsn8E2upj6Bb/58yAJ7AQlYd7seVEHyKVs6U4Kzab1BSc9pBgtglRdslZfLuT+zTqS7b0KZAQ1xme1NTGF6ZS8n/kRRd5tv3LRneHuBimEAo07uUFdFIqSK2PS2Nx696j4TRGEBNew0eBc9YY5A66lqQPSXsNuMyL3W7Oen8AAAAASUVORK5CYII=",
            title: "Save time with task automation",
            description: "Choose your triggers and conditions for different actions and put your actions on auto pilot.",
            premium: !0
        }
    }, {
        id: "commands",
        bigIcon: "PluginCustomCommands",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M12 4c-4.971 0-9 3.585-9 8 .016 1.342.378 2.643 1.036 3.713L3 20l4.143-1.276C8.668 19.577 10.325 20.013 12 20c4.971 0 9-3.585 9-8s-4.029-8-9-8z",
                fill: i,
                "data-fill": "main",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fillOpacity: .16
            }), l.jsx("path", {
                d: "M12.05 7.65h-.84a.44.44 0 00-.39.49l.18 5.25a.43.43 0 00.38.45h1.28a.43.43 0 00.38-.45l.21-5.25a.439.439 0 00-.39-.49h-.81zM12.06 16.35a1.08 1.08 0 100-2.16 1.08 1.08 0 000 2.16z",
                fill: i,
                "data-fill": "main"
            })]
        }),
        type: "B",
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB3VTNS1RRFP+dd9+MvhlnckyfHwxp7dRFRFCULaSPXVvdtBKCCCpa9AeMyyBaFCW5qq39AS1zEUKLEiIrMUlDBFMa54068z7uPb37bMbnF7itH7x3zj33nN/5uNwL/HdgZhqaYKHlQft0WOBQgZNLWYh8Ht7rYZIXHrPFFtqlRJpMmMKHIoKTTGNlcoSqhxJeHGObA7QrgWTkIMCK0WAwDGZU9/pLgmrMYuHdDSruIxx4yl2BQGfc1piWtpXlcyDVFAS06G0kPrlb2Iz7hAllOoVvulKzZjz/hLNxMvuU7Eu1eLdEggcMndYDnE2GlfMUK2PKdWjcWWn8on3DfVEpozVUl4wagSFg1/SOXu9qxvbGNJle9zUJPDtj4XK7qXsySKhLjc3yZUuPO1yPJ+QiGa30iSlYWk23uXa6WT4AcbrmzOGXNQkUH1BIbDbI+6mc7NBLkdjmin6DoxBBA4TWj7Wo/pCiNT6jsMlIVgLGLhAnrWPu9cgnQGWHMJwrqaiQsAqysAdV+Vcq7AODogPyFYp1wkKBVNiNr/X1X/Q+9NqKBy27CmM/XHwu7mWkykYp+dZUqE7fw1qdUCNZ2c7glYxSmPV3PCyXMHCzO4mTmdgQmTb8Ch6qovi+bmNO97+LUJSwygaC3AnZS8R5ljwrfZ4MHd01T2H0q4v5chTDyqePbtkc2ZxPPb92G3Mzw+TVa45XcuUVH/c56KcERLVkOtpmWkhk2rweEpx1HVX23cSydMyFqTu0iAOw7+qdfcGdpkQXDoEguO40Zj+Mk38kQo3BCW5yi8ir8CGI28P7XHJW8XOmsNPikQg19PN0+hFSdjfM6hqMTICtN3fDC0jE+KfxB8CZCrI6lJKeAAAAAElFTkSuQmCC",
            title: "/high-five",
            description: "Automate tedious tasks or provide quick access to frequently used information using /commands.",
            premium: !1
        }
    }, {
        id: "invite_tracker",
        bigIcon: "PluginInviteTracker",
        icon: i => l.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32",
            width: "32px",
            height: "32px",
            ...i,
            children: l.jsx("path", {
                fill: "currentColor",
                d: "M 12 2 C 8.144531 2 5 5.144531 5 9 C 5 11.410156 6.230469 13.550781 8.09375 14.8125 C 4.527344 16.34375 2 19.882813 2 24 L 4 24 C 4 19.570313 7.570313 16 12 16 C 13.375 16 14.65625 16.359375 15.78125 16.96875 C 14.671875 18.34375 14 20.101563 14 22 C 14 26.40625 17.59375 30 22 30 C 26.40625 30 30 26.40625 30 22 C 30 17.59375 26.40625 14 22 14 C 20.253906 14 18.628906 14.574219 17.3125 15.53125 C 16.871094 15.253906 16.390625 15.019531 15.90625 14.8125 C 17.769531 13.550781 19 11.410156 19 9 C 19 5.144531 15.855469 2 12 2 Z M 12 4 C 14.773438 4 17 6.226563 17 9 C 17 11.773438 14.773438 14 12 14 C 9.226563 14 7 11.773438 7 9 C 7 6.226563 9.226563 4 12 4 Z M 22 16 C 25.324219 16 28 18.675781 28 22 C 28 25.324219 25.324219 28 22 28 C 18.675781 28 16 25.324219 16 22 C 16 18.675781 18.675781 16 22 16 Z M 21 18 L 21 21 L 18 21 L 18 23 L 21 23 L 21 26 L 23 26 L 23 23 L 26 23 L 26 21 L 23 21 L 23 18 Z"
            })
        }),
        isNew: 1688559020,
        type: "B",
        isPremium: !0,
        tooltip: {
            icon: S,
            title: "Track member’s invites",
            description: "Track how many people your members invite to your community and rank them in a leaderboard",
            premium: !0
        }
    }, {
        id: "ticketing",
        bigIcon: "PluginTicketing",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsxs("g", {
                clipPath: "url(#prefix__clip0_5441_14202)",
                stroke: i,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [l.jsx("path", {
                    d: "M16.5 5v6h-2.84a.56.56 0 00-.47.26l-.84 1.33a.55.55 0 01-.47.27H7.5V5h9z",
                    strokeWidth: 1.5
                }), l.jsx("path", {
                    d: "M10 7.25h4M10 8.61h4"
                }), l.jsx("path", {
                    d: "M19 11.56v6.88a.56.56 0 01-.56.56H5.56a.56.56 0 01-.56-.56v-5a.56.56 0 01.56-.56h6.32a.55.55 0 00.47-.27l.84-1.33a.56.56 0 01.47-.26h4.78a.56.56 0 01.56.54z",
                    strokeWidth: 1.5
                })]
            }), l.jsx("defs", {
                children: l.jsx("clipPath", {
                    id: "prefix__clip0_5441_14202",
                    children: l.jsx("path", {
                        fill: "#fff",
                        d: "M0 0h24v24H0z"
                    })
                })
            })]
        }),
        type: "B",
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIjSURBVHgB1ZM7bxNBFIXPnVk/Esc2OI6QSJBQEAgokBBCQqSloICSSPyCdJEQovcfoEGiIAJaJFJQQwMFDULh0YQopEA8HBQnfgU/dnZnLrMOXnsBWwQacorduTNzP82ZuRf430W72czMNLuIWKkBcUxBL8yR90fARxXeV23guPBBYym4SQfm7ZqfKlUp7zJGhQFtu6i9+yTfk8HXF/NU7+Y6/aACs3hyG4dUC3fzo7jQnTcMjGcIuUxvb1vx05UvuAGB9Olb/PH1PJWiwAKLx/cwbQSyTCDfQl6VlbW5s1yuGPwY4mQ2SKPQnSMxeeYON5bmqBkCzx9AXitku7G024+knRA4pjQCorScmCDoPmc2lMJFzg57QGMw3n+j2gArNQ+u2SHW6tyBB8BT+zsnRERxZELLVx6y/FBFwj5CKEcAMxOJMC4KjWJLw7VHKzYNmh5P5g6rq34TS/WNkdUwL/gsL0Om8xAsMFBbytg7jVTJUSeJ60LgATZwkyVaIXDCOm7EYQ5OezPJtH/xZVWcGJFRS6sVH8OkvqESAp8VyD+7wF4i5Z+Tcb603ta/JLQ1D4T5EqU316gajHsmPWzhb+Rw/fI6PnfDEJgqYdOWloddyj56u1Cw/fIzMLAtk7qMf1Sk9WxhAwOuyvf492s0BLi9yfdJ8FoHoDltdCxLbDou3KajIHVFCHb7c5TA8yH8qGx/xuwvFm+Ap6agFmdJY8/rO1653YgrklW9AAAAAElFTkSuQmCC",
            title: "High-end customer support",
            description: "Streamline and organize the support process and allow users to submit support requests.",
            premium: !1
        }
    }]), T("utilities", [{
        id: "polls",
        bigIcon: "PluginPolls",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("g", {
                clipPath: "url(#prefix__clip0_6406_18902)",
                fill: i,
                children: l.jsx("path", {
                    d: "M6.44 21.25H3.56c-.73 0-1.31-.59-1.31-1.31v-4.87c0-.72.59-1.31 1.31-1.31h2.87c.72 0 1.31.59 1.31 1.31v4.87c0 .72-.59 1.31-1.31 1.31h.01zm-2.69-1.5h2.5v-4.5h-2.5v4.5zM13.44 21.25h-2.87c-.73 0-1.31-.59-1.31-1.31V6.06c0-.72.59-1.31 1.31-1.31h2.87c.72 0 1.31.59 1.31 1.31v13.87c0 .72-.59 1.31-1.31 1.31v.01zm-2.69-1.5h2.5V6.25h-2.5v13.5zM20.44 21.25h-2.87c-.73 0-1.31-.59-1.31-1.31v-8.88c0-.72.59-1.31 1.31-1.31h2.87c.72 0 1.31.59 1.31 1.31v8.87c0 .72-.59 1.31-1.31 1.31v.01zm-2.69-1.5h2.5v-8.5h-2.5v8.5z"
                })
            }), l.jsx("defs", {
                children: l.jsx("clipPath", {
                    id: "prefix__clip0_6406_18902",
                    children: l.jsx("path", {
                        fill: "#fff",
                        d: "M0 0h24v24H0z"
                    })
                })
            })]
        }),
        isPremium: !0,
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIZSURBVHgB5ZQ9ixNRFIbfc+9MMpPdJATcRHEVbLQRG4UFK3+Allta2CgoWIn1lGIjWAj6E1ysttDOFLZbbqOyoEai6H6wifOVuXM8MyHZTLKswWphXwiZe+ac55537pkBjrvosOANj62uC/fcBSgVIrl+G4FHlOJ/gFef8Rntoinl1iimCVHJQad9h/Y8ZrX+CnqjCwNvdpMCcOU5LwumNRl7cBOPGgtY/f7boB/Rm7UP6mlemIKF1m/Z6KzfI3+Ur8adveT6NCzvTsORbXV2Gce8JAWLWZwViBSqPwgXpfbUDNAdzMIymeTAetaYAZpsDpypBFp+ywKtZOs82XvP1rvN4c6TUhbKsSnGKzU0T18KHg8itqKAefdT6X5CNuwBluT2lxzY/gUnszDTXgp3OmS7aV1ZfI1iBulsTU4SYGDKqI8t97byZzQrLtg9UpqHrLygGiIKamKnAqd12X8hdpzIh9nfXngyL5ASBGNgG4hXgAGXUVUaV+T0hnbKJlWk5xroUGM7+x+esgwoudifTmJjTMlG/18wGa29jbuTQFGjh67FSKaTiVDoUFFqCjCV7pzt4pskcgH49iFFi42wgyNkawSlSvp5MlY9739d8ygerQunaNedn5HvR3Ekb0XAZKSXno84Nanp/WEWax9LNWzGMiZhCJK8xKklhY4P/dqsvma9tYuGGyKf/sCBf6uLHc+b74tzwvQXz/THOJ69NGkAAAAASUVORK5CYII=",
            title: "Create and vote on polls",
            description: "Polls are one of the easiest ways of engaging your community and allowing them to impact the action.",
            premium: !0
        }
    }, {
        id: "guild_embeds",
        bigIcon: "PluginEmbeds",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M15.934 4H8.066C5.268 4 3 6.667 3 9.956v4.088C3 17.334 5.268 20 8.066 20h7.868C18.732 20 21 17.334 21 14.044V9.956C21 6.666 18.732 4 15.934 4z",
                fill: i,
                "data-fill": "main",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fillOpacity: .16
            }), l.jsx("path", {
                d: "M16.44 7.28h-5.9a.89.89 0 000 1.78h5.9a.89.89 0 000-1.78zM15.44 14.69h-3.76a.89.89 0 000 1.78h3.76a.89.89 0 100-1.78zM8.01 7.28h-.12a.89.89 0 100 1.78h.12a.89.89 0 000-1.78zM8.99 14.69h-.12a.89.89 0 000 1.78h.12a.89.89 0 000-1.78zM17.44 11.01h-8.8a.89.89 0 000 1.78h8.8a.89.89 0 100-1.78z",
                fill: i,
                "data-fill": "main"
            })]
        }),
        type: "B",
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALSSURBVHgBxVTLS1RhFP99333MjOMjHd/5lpJEogcVYYFtimgXFBHkpm216g9w305INKhF0KZoGxRBtpiNYYZQaaQ5kY5jTjrOw7l37r2nc8d0Hhq2CDxwuPec832/7/zOOd8H7IX0vSH14iB58u0T96l+p7US/yDmFKqiPjS6/+fvkT/5EV1CQ/lOa9UCi0hACMp3XXlKSugXGqQD5dQgZVZ1BPhflRkYuwKeHkInRkiFF3F/GgkrDON7DNWqhE4m6qBjPxwsuGttHfaugKaJZHcLjvYfc/pKNVnr+lI2/Kk0KctrUAVz8HqcmAqRiZvy+RjRXDEjkW9cH0scudTsmThTrWKOkeZTBC8fORNzEGPNl5MBzfkQwo0XU8qUYmIxeFtkM882ZYBI9j6kMssRlxt9G2eoQkDnqMKmxqrIIgXJ6jLR7JVYCt5CuIDy6CgkWai1LVG5GWjySZRrgMGVCkiJiCjM0LUsB1pMgTHATFkpB3hOWPyZuTaeXN7cYHN4eNbAikmwOZqKF5QKbX6JbtVj6mm0vBpGHTMMBW+KeEFTuL5bo+BSvXvAl81knUHDK4UZuvHpyJ9sbeiKgUYe/rkcINeR3qX8+ZteRky0+hVM/MwgvJrL8GCZgp5yBV5dGj4LkZp6LD27Kswtyq70PkL9eoeaMPKmq6lEok4X6CxV4TFzGVbqG41r32d/Gb2j/shPIgt4fISqLQMNi5/118GqzFBdm3Kh1ItAFwNxL6inXDgBRwpyeCoEUxGw2f2kQlHfokhE3wB50zVoJwWW5nD9CR4m18ybDPciEiHN6zLkQgElfO2StoAT1/F1mpuwDbDYcXaEGngAKmNxhLpakZ6P4hB3PPvSMKhlv8enjkaI2QXQ+AORKd6vFjscFQluf3ZQJ1kPP6ZvJWvocjMsURAdZZBx/F22PV/BIhqT/SKpaRs3wahAFP9L+gapCXshvwGBbSG9tYJQTAAAAABJRU5ErkJggg==",
            title: "Beautiful messages & announcements",
            description: "With our visual Embed editor, your announcements, rules, and other events will never go unnoticed again.",
            premium: !1
        }
    }, {
        id: "search",
        bigIcon: "PluginSearchAnything",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M16.102 1.801a7.478 7.478 0 00-5.18-.578 7.274 7.274 0 00-4.25 2.932A6.89 6.89 0 005.538 9.09a7.01 7.01 0 002.561 4.407l-3.927 7.315a1.46 1.46 0 00-.099 1.14c.124.378.396.693.758.877a1.571 1.571 0 001.704-.182 1.5 1.5 0 00.375-.457l3.95-7.293a7.48 7.48 0 005.173-.536 7.138 7.138 0 003.482-3.75 6.86 6.86 0 00.01-5.048 7.136 7.136 0 00-3.468-3.763h.046z",
                fill: i,
                "data-fill": "main",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fillOpacity: .16
            }), l.jsx("path", {
                d: "M16.543 10.146c1.162-2.235.338-4.964-1.84-6.097-2.177-1.133-4.885-.24-6.047 1.994-1.162 2.235-.339 4.964 1.84 6.097 2.177 1.133 4.885.24 6.047-1.995z",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })]
        }),
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJeSURBVHgB5ZTNS1RRGMafc+6duXecUeeWUaSQQa363AQlEha0KVxERShu3Aj9BRK1EHIT0iZCg2hT0VqwrSVCRBDVxjZmaJlmfgyOM/fj3HvO27lqNYyDzrreA+fzOT+e9+VwgP8uWDWijo9eKyO6ykEpcD7DTTx7ciT1dUdg2ysygynU6eYhj1S2DoZzuHiXM9a9P2UgodWFiDCzKJVUrGfkXPpxOZCXLpLfYJGPZmMee+Ix0+Tdsw3efWGfjRsHLFxvtNDiWDham9Bm6eGlUbelHGjGXesgOcxen7tGCpOMwa7L+LmkrdqPZTUgw/HJBSRph65CU9rAslDmbFHe1HfatwCF0o4i1AQSq/ABslDv1BsnGFfZJp3qnNgQF31CGG3MG2yOWVeequjw4hI+j+n02wAVr+O5eShs5GXi2N2foPXeqAjs62OxUo39VdPZpzU5K+vm5j3pHMyYGkaQJbzpooyH0XJguYnNYDTehTcGZ/3vcyFWAoWCt0GTRJhci7Aq5KrJqL+iw8pMRsEEPVDCvTwy7bWmIg5bq1cC0jWnhdDltxa/1/yoHqgjFQbNocJp4cF1I/WIEbMjSV8iPz0sfsLUlx0tW6oaqJ9vbyjIVGQO56asgdIzy8ZyUsA5M0SNPI/86162ti2w80PhpFLoEj7C/IIxpKu9q/R8TaBgM73HwSML8WPaHqhreDvwKUmMDY53Jl7GW8cHKJ1MY+/6MbA7SmDpbQ9b2DHljnf5BiVxJQowZzO683u/VvuJQhjW5toTWz+Xir/NtQlKylzhvhBs/MX5zHP8U/ELlpz/EmO5wnoAAAAASUVORK5CYII=",
            title: "Who’s that pokemon?",
            description: "Quickly search for youtube videos, twitch streamers, anime & more.",
            premium: !1
        }
    }, {
        id: "help",
        bigIcon: "PluginHelp",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            fill: "none",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M12 3a9 9 0 00-9 9v.31a9 9 0 0018 0V12a9 9 0 00-9-9zm3.29 12.29A4.66 4.66 0 0112 16.66a4.68 4.68 0 01-4.64-4.35V12a4.65 4.65 0 018.13-3.09A4.59 4.59 0 0116.66 12v.31a4.59 4.59 0 01-1.37 2.98z",
                fill: i,
                "data-fill": "main",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fillOpacity: .16
            }), l.jsx("path", {
                d: "M12 21v-4.34M12 7.34V3M3 12.31H7.36M21 12.31H16.64M8.41 9.05L5.33 6.26M18.34 18.06l-3.05-2.77M8.55 15.11l-3.25 2.9v.01M18.37 6.3l-2.9 2.61",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fillOpacity: .16
            })]
        }),
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMsSURBVHgB1VRbbEthHP993zmna6tn3Wpb23WqmMUwmVkE8zAsIUO8ub0QD0SEiAhPoq8SbxJLPZDghexhkSySESLISDCLlbjsYtat3Wa3tuvtnPP5TqdNdxGP4vdyzv/2O//rAf41vIzRei8TGWNkIfs8pdfLqH81xAFAeLAbhUVmeLi6sulzShuakFL+AHr7hzEtUSgaQxxJhF6fIVMLEjb4mDUKOM0E8u1DOFuyCA0iQYlu831R0z6MIRyJo/W5n90ITYpTRAAjGkLtJ0lAt9MMWd01VhpWUS4XJ8ort8SbC0zscIZsVkn8Y7IJB3fWkNt1S+FkKgjP1LHBx4qyhNW3WIEiwGmSIS/2aE1jKc3d9D0J7vhHLDOh7Fi1dt0oznBQBWW8wVRIGxu8HkZhcK2OnRYkVqfrhhIMhJGR0VHacvUlbvoH8YQQEpSNcK8wwbQ8jzeZwLrRxcyPeugrnjn12BAWjvuYFASWmAohW53KZc6Vl+6VhtFnb4UrrV20c3AKsYkoifQNk241Tju2lbEaPhSz7sczdIQi9OFAGDEeGKF+EUbdkG9LVHAaOVNSIkLuRsfF4NxSu4IIfgyRtowsUpSsKlaXpGMEaFSaQrpswUQcuYHRScML3gZ1of497qZvcmVXPvHoz6pqhMWwGUmRh11aYRDXlxqyTlfGEW9hSPG55M8l7Eko0vlPiaysTAuKCmPkRi1J0b1DfDl1pzH05QbtW4PtnGwYIpS5hAarUpUrqyoGpDj69Xfq9RKNMky+G8QPReMEv+EpwsHGtXARFUG+/lnSWgec6+xsT0bmlzHJN6Ot/RyJ6XK6f+W7vcmvP2FurIQ9Pw/rdF1HFLLFhvpyF6aNBgwWi6rlwBo07KpgRzbZBJvGfXqnNf10fK07LfdzPjCDrT7m5ntlbz2K5vcxuMfnjKMiMX8+XWG1+07AUNuyjUxkdNnTcxYiwCcwdvEpTo0kMYC/gZBvlRbDjlyyWRlmoN+0246VjZtxwmrGHv12Z2VIEOBl3ut0iBf2EzIv7QX/afW3mDEWRtHaCpRWlWFVgQXFNaIWkSTtQx7E7uV2EsJ/i18WFy16lj1wTgAAAABJRU5ErkJggg==",
            title: "Get assistance instantly",
            description: "Whenever in doubt, your members can find all MEE6 commands with descriptions with /help command.",
            premium: !1
        }
    }, {
        id: "timers",
        bigIcon: "PluginTimers",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M11.667 2h.645a3.79 3.79 0 011.068.145c.34.098.647.243.907.426s.466.4.607.64c.14.24.213.496.213.756v1.051H8.893v-1.05c0-.523.292-1.023.812-1.392S10.931 2 11.667 2z",
                fill: "#A6AAAD",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fillOpacity: .16
            }), l.jsx("path", {
                d: "M12 22c4.97 0 9-3.914 9-8.742 0-4.829-4.03-8.743-9-8.743S3 8.43 3 13.257C3 18.087 7.03 22 12 22z",
                fill: "#A6AAAD",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fillOpacity: .16
            }), l.jsx("path", {
                d: "M12.135 12l-.135.06-3.78-3.4 2.423 4.406a1.51 1.51 0 00.185 1.36c.175.253.423.45.713.566.29.117.61.146.917.086.308-.06.59-.207.811-.424.221-.216.371-.491.431-.79.06-.3.027-.61-.094-.89a1.55 1.55 0 00-.588-.69 1.618 1.618 0 00-.883-.254V12z",
                fill: "#33353B",
                stroke: "#A6AAAD",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })]
        }),
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALqSURBVHgB3VTbSxRhFP99OzM76qatd9dYk0IKkkiNIDOIbhBUENRClD0UWNRDUtCz/QG99aKR1YugET4URhe6CYFBWlJgT7p2cVf34rY3d+abOX0ztptbhEFPdWCGmfP9zjm/8/vO9wH/lRGRYznMsoCsTWrUOaVjYnjG6H0xR57f4eQuUXXoKlZDhfLz4poyuHY1o9VVAE9AQ7tkUJ3GqSE0zwNbeuimhWEpxEY6WTCX8MF1uJmEMvD8ZCf3wlflpo6wRm5/xsD0HKByhhXEkNZZPeMotltU4Wrppsjr00y3/zUDcdF4WqjDrUdRwc8eQGfhCvPSaFRzSzCwtdSB1lIJugCPhDRkJDp6eJt5wcbLmM8msxnbbyLWdXnxu+k89qc5Db6Pag6fVxG1GFwyg2kA/pCorhOGAjoaShS4nPLBMw3s7tLO2NKfIwMkte/Gm+HZhcZjXhWlTtGeSDQR51irOhD6SjYuJpI+DHJsdDtHrz13bLd8LYDeI5jK2WQ7ukguUdGaManRrTjsZJYVSsDLMIerWEEWvFJhcDKCTmbzKrdjczCM5Fvh3zdE73JjE/eA1ZTDkxTVq9U84rB8fVNanq+ywIEEJ3jdqM360gkouYSWsLVVGHcKRkmD8oLbyhQ0ie1ZailuimiGQhV+2cAMl+B/5mOJfCrC7kXoy0g44zlVr+YEjsRNzKd+FOFE6P+oo6XMGS0flyp9PmZk12xZ6m9QQa2BalMHi6XwqFKVTjwO6thTvTjriUw+47GogaoCCckM7twKw9vWTaanFIHbPqbZLVfHUWFoqBCFy/ueottbJPtnhWT3xfGYS5vg3+snhWZWoaBYq1Ul/6tJqd+K0Q1UBj6jPMdQDGdSSGLTCMew8GQM53ZuUq5EubHO2gwtTbBkNcUpqXNJqFHYxMgHXJz+hIgliynDUIuQsuJ/0TBrA0TOogiOR+J0KJWhDQIoBkWMBZmDHeudvfgbsy6Qrj+4uv4N+watmUhE/8xk/AAAAABJRU5ErkJggg==",
            title: "Never forget about things that matter",
            description: "Do you have regular game nights? Automate routine tasks and send automated messages.",
            premium: !1
        }
    }, {
        id: "statistics",
        bigIcon: "PluginStatistics",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsx("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: l.jsx("path", {
                d: "M20.399 3.518c0-.392-.43-.644-.706-.453l-4.667 3.363a.543.543 0 00-.168.45.537.537 0 00.26.405l1.146.755-3.285 5.587-4.728-1.63a.238.238 0 00-.184 0c-.245-.101-.552 0-.747.372l-4.267 7.308a.991.991 0 00-.001.634c.069.206.204.384.384.509a1.036 1.036 0 001.223-.036l4.237-5.033 4.984 1.912c.05.01.103.01.153 0h.154a.733.733 0 00.491-.352l4.308-7.58 1.392.896a.404.404 0 00.592-.175.387.387 0 00.022-.227L20.4 3.518z",
                fill: i,
                "data-fill": "main",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fillOpacity: .16
            })
        }),
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL7SURBVHgBtVRbS1RRFP72ucyZUUdzvIWpSagIERImpVKmdCWEFOpBoheDnirqB4TUY9lDL2IhCBGRD4EY9CCkYKAiFGROKCaZMuB4yZnJGWfmnLNbe/TYXBIkaMGZvdde3/m+tddZaxj2aLVPuEOWkReyQ9Wi0HNULA/cZMFkHNsLWfVjnqvaUcKlRLxkg+98O+Y6GDP3TFjdzVVEcUSRdsHqCF1cw0xHB9NjIvGxK31cTsYrIbh2JYsB4Hibj5KdrK3NtS++Mlt58HMynmlw7MbV1oBzV0+ikbLIru/hzi3+OOOMSfHZTm8iBxso5cA+AkZJfs0wEdmfjbTWOrS7nLj+M4AXBB/iOvJpDSh/Uy57yrXFJVQ4ZNio3Bkkk2GIgInso6VwnK3BPZuMSnEkS0jfCiGrg3NJSiYTh/kqyk0iiwEZIvFxzY4iejvX8hUZWbHbGWADz2BPIRx/SdlwaJbPOHz0cMufmMYsXTtk+bJCZbHIw1BSCEM+pMX71HuiHfyW33wCpxwaisXes4pOQ8eqFdM16Ck1NCLUItv5Ha9EkXseS7824OUMzkIXsioKcVnEAkF87RlEP/XTq9hNTPBmLzZTCHUnwqJqtRUobqrC6zNVCPqDGJrxYOSACxdsKnI5hz74Cb1UCsXq0KiBFWpuM4VQW4Q/XACz7jDuMBb7MLasdLTUlKNFEAmMdx0j7gV4JAZTzBxXEHB64YnVMZlwmEao9zs/RHU6LfxgGO/TNNQLLRJQiGF9zI1uSsyvGvgRdcTmed2a5xTCqSlum8vEfbFf9qGr+x16DuYgvakazXmZuESNPDy5gNmIiZWxW2xe4EZv/Hl/Z0bF6Jm6OtBW7HhEH6CHGuV55xs8CEVRkCwq/mVG2/ENjPHk2A5h64dAo6ywvmMuTSVc2vhi9DYVTDd0025EpWyYEp1L9Gv4ZZX7ExX4eH9DxmTClWVZeshNnjuxEt5S0tCl0qpqQlMkYmw/qUbRj7RUJxDa7LhLSz3+xQy48b/sNz8dCZqgi45ZAAAAAElFTkSuQmCC",
            title: "Track your growth",
            description: "Display your server's or social's statistics directly in the sidebar and stay on track.",
            premium: !1
        }
    }, {
        id: "temporary_channels",
        bigIcon: "PluginTemporary",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M20 10c.598.4 1 1.145 1 2s-.402 1.6-1 2",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), l.jsx("path", {
                d: "M9.317 7.006h-.794a8.14 8.14 0 00-2.624.434c-1.473.502-2.544 1.753-2.79 3.258l-.008.05a7.775 7.775 0 000 2.504l.009.05c.245 1.505 1.316 2.756 2.789 3.258.843.287 1.73.434 2.624.434h.794c.48 0 .938.187 1.275.52l.583.577c1.72 1.7 4.681.896 5.256-1.428a19.403 19.403 0 000-9.326c-.575-2.324-3.536-3.129-5.256-1.428l-.583.577c-.337.333-.796.52-1.275.52z",
                fill: e,
                "data-fill": "secondary",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5
            })]
        }),
        type: "B",
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMrSURBVHgBzZRLaBRLFIb/enT3vDNJJuPNVXM1JPdecAQ1IKgbFcSFohsJRHGlxgduBMGls3MjiKCgK0UQRFe6EBRcCO500IUaiWjIBDPJZJJJnHdXd5XVrZPEJ7rSs+juqnPq66pz/lPAn27kZwP7LivDZIhyF1YVEMihmkmT6i8DBzKlrYSxQ4URem0uZ+UX+1yguDOPbDpNnO8CN19UkQrQGm0XHUt6ndOEql3efDlvHJ58Y2S870g7YoZhtxYnzFHqwt4+jaEmlDdBq24qM1jAspqGRSJOJNkjLhCKVNMvBElwCuJIqEC43tXSqc40Gs7+apHP3k2gW4cMe3HU31Va8cAkupmGeePkf+IkZQsw3yRCjsI/4ThaCtnAc7tGbnd02yf8Y1JE15xT8XmgaEcyaIqWxFK7e0lPYzMzsR3fsFBcdiX/rV5pW4bl714FrjBOUpEWx99E0ERiHugwJDpXu4diy52bZsQ5CyjjW8BqkU7V5vjDaLLWL224rq2etHaJbZ5PccSQVpR6ctBjg5nuJiX1Hxh+aOUp/owZaqOfBZeNUEP95QNdkL5OMLoQSil+whiTFhRt+AOlM7vI+jxKZhAO0ZVzbXpfI6WUP5ZmOOGuc4V67G/Bkv+7DTrW9P09CFcLgahAHPnsM+vqTNbag7p5MmZQFTHoVyINhGTUjMrV0znzhhVywoxh/ewkf+T5uEQ9TYj0j1mqYFK/RKtkcwdTfN+pngDaLYaumInAoqyIOh2feGEcLU+wXEev2u06eFwu8CnPV1Uo+rv2HpnDROhKDw1swLEtbVi7wgIZrwqMlWx0hD5qn3H5Xink6hX+PrFSpKyg018cMy/5PoLG7hT8tpzvlMuDumoVbGSfzrkiyCA0oc0gGKdEV5/MSuW1r9+Gw5UC2V8rsRLTc8TCaHrLF633VvNWAjkN7PTG6V7Ln38wh5mn0+pWQ5ChZmy9AlsvtfXicp1jLHNg4daZT1A/Ie47gfNZ21ODzpcWxKgWx3AdZ6+vCx+5t4M/8tKiRfuWmhihCbzclsdrna7PrrCvNHJnRu2NMwyMa3DBxvXjS8kN/E77AO9CO8q86fDAAAAAAElFTkSuQmCC",
            title: "Quick calls without the channel message",
            description: "Create temporary voice channels that are automatically deleted after a certain amount of time.",
            premium: !1
        }
    }]), T("socialConnectors", [{
        id: "twitch",
        bigIcon: "Twitch",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M7.542 2L4 5.571V18.43h4.25V22l3.542-3.571h2.833L21 12V2H7.542zm12.041 9.286l-2.833 2.857h-2.833l-2.48 2.5v-2.5H8.25V3.429h11.333v7.857z",
                fill: i,
                "data-fill": "main"
            }), l.jsx("path", {
                d: "M17.458 5.929h-1.416v4.285h1.416V5.93zM13.563 5.929h-1.417v4.285h1.417V5.93z",
                fill: i,
                "data-fill": "main"
            })]
        }),
        isPremium: !0,
        type: "B",
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGuSURBVHgBxZS9SyNBGMZ/k83lUtwX3B2HxcFxHFceB3LFIYJ/ghYWxsZOBSsLkTRGwcZGbEQrC0FEC/GjsFGs/AIlCKKgBj8KA2r8JJHd7I6zrJIQd+OiAR9Y9pn3nfnN8PLOQIkl3IKxKhl+Y1IdgDA+pJnE2xZF3PbBwuSQgiUterUwDZ/KCAtRHJY6AkPQqexj4FitDCWSdEto+vwdIn3qiO+KA8fbYWcpNw7kJ3ePabGg1W2hngFpOT6rO5+bAgWjP3hoIAJ7K46f74eFQT/AEqjkwKDfif9q4eM3x/8oVwtDLwT+j+T870rnf3sNN6lnAgtl3MJEByS3iAuT0SeBehoO1tUEdVc+fIGvP+EkAVenKqnaJz4D+2tsY1IXXRLbTwIvjmGqy/HlNfCrAqa7IX3uxLKGghnU5MOKAu0mfmjes0PYmIXM5X1SuMOKAvO1t6w2kDlYMEtdmwvsEVALMKBqMmN7E1TViCF5a0kmg4IRO56xWI0uikM85PmW9FTJv1mTOWXn9RT1sU2h40OeN8UwsaRgOKTR7Bdmy7OGhkai7D3RxmmR5jV1B6aLjeRIUwJdAAAAAElFTkSuQmCC",
            title: "Notify members every time streamer goes live",
            description: "By notifying your members in time you can increase the engagement under your livestreams on Twitch.",
            premium: !0
        }
    }, {
        id: "tiktok",
        bigIcon: "Tiktok",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsx("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: l.jsx("path", {
                d: "M20 2H4C2.89 2 2 2.9 2 4V20C2 21.11 2.89 22 4 22H20C21.1 22 22 21.11 22 20V4C22 2.9 21.1 2 20 2ZM19 10.57C19 10.57 18.02 10.53 17.3 10.34C16.29 10.08 15.65 9.67 15.65 9.67C15.65 9.67 15.2 9.37 15.16 9.35V14.99C15.16 15.3 15.08 16.09 14.83 16.74C14.61 17.3 14.29 17.82 13.9 18.27C13.9 18.27 13.28 19.03 12.19 19.54C11.21 20 10.35 19.99 10.09 20C10.09 20 8.6 20.06 7.26 19.16H7.25C6.8 18.84 6.39 18.47 6.05 18.04C5.63 17.5 5.36 16.86 5.3 16.67C5.19 16.35 4.97 15.58 5 14.84C5.05 13.54 5.49 12.74 5.61 12.54C5.92 11.99 6.32 11.5 6.8 11.08C7.35 10.63 7.98 10.3 8.66 10.1C9.35 9.9 10.06 9.84 10.77 9.93V12.73C10.53 12.66 10.29 12.62 10.05 12.62C8.75 12.62 7.71 13.66 7.71 14.95C7.71 16.24 8.75 17.29 10.05 17.29C10.45 17.29 10.84 17.18 11.19 16.99C11.53 16.8 11.81 16.53 12.02 16.21C12.23 15.88 12.35 15.51 12.38 15.13V15.05C12.39 14.91 12.39 14.77 12.39 14.63V4H15.16C15.16 4 15.15 4.06 15.15 4.16C15.15 4.28 15.16 4.45 15.2 4.67C15.28 5.16 15.51 5.86 16.12 6.55C16.36 6.82 16.64 7.05 16.93 7.24C17.04 7.31 17.14 7.37 17.25 7.43C17.96 7.78 18.65 7.88 19 7.85V10.57Z",
                fill: i,
                "data-fill": "main"
            })
        }),
        isNew: 1697202011,
        isPremium: !0,
        type: "B",
        unleash: {
            feature: "tiktok-plugin",
            variant: "with-tiktok-plugin"
        },
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALASURBVHgBpVVdSFNxFP9t925ON9ukrFCHm20UieIHq5wpQoIPUkK0etDEB1+CHnoRgiBGL71EFEkPQZEPPjQQTXxYjAKbD8mwDzGxNdlE5zItXBrXfdx7urvocE7npAPnnsM95/zu75zD//7BMIxNJpMFRaX/1BUR64os4QA4jH2kwnZNsoExN9ZCi3ulLSJbBs+8fgr+5Wjkpp2UcmbPPDmylBxGjqI8Feo6L6PBXL53YrYM+2bnaEu80zPU3N5BuQUFaXkHBhQiUcnygkBvu26TjlGm5LG7sZazLAwNTSiproYi9BPjr/qTseX7fQgcUaK6sR6muBIqGYMwYsl4GiCbo8KFu/dga7uE5tISqN2TaB96k4yvTHvRPPAIdYWlMPAKrFM8tX4n4KmLbbhxvQOtxwtBn74h6pkBK0vd3boQh2tpFvsuRZGbS93DTuLiceJ6B6jvqJVOK7WUJ2eTM/x6tSfjrFMYKvLUMB8thIph4B0dx53fnxHkOcjl2xgKyCgpvUTX1hD/E5Z8puUsSKWQfENjEzQK0Y/GEV5azoy4k3JDZxdFxJb5jQj1D49Q15On9ODjJC1zGxQZctPDY5aMLacBMixLvc9fEB+L0XaJfflO3vPddFJ56GCA0nJE0J5WGy2+fE0Rxztav/WYRk60UGVOQTaHQETdFJVKBYvFkvgIFhYWoFbmIOybg7miHLxWDY/HA47joNPpoNVq4ff700aYsmVBEGC1WsGKJyUWi6G2thZOpxOBQAB2ux1O9xhKRbDQrB/l5ywYHByEw+GQ6nbfcjQKn8+Hqakp6PV6GI1GmEwmidnc/DwMRgOCP0JoqToDs9kMjUaTAra5ZFlQtEVbL8rKyqSk4uJiqfUE24mJCdTU1GBpdRX1lVX4MPoeOn0R8vPz4XK5wPP8VvmvxCNxBaxk+9fJoAlitn/U6a2wPMEbDgAAAABJRU5ErkJggg==",
            title: "Never miss a new video",
            description: "Automatically alert your community every time you or your favorite TikToker posts a new video.",
            premium: !0
        }
    }, {
        id: "twitter",
        bigIcon: "Twitter",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsx("svg", {
            width: 23,
            height: 22,
            viewBox: "0 0 23 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: l.jsx("path", {
                d: "M17.853 4.02l-1.736-.004-4.213 4.723-3.196-4.745-4.533-.013 5.194 7.714-5.335 6.232 1.729.006 4.366-5.104 3.45 5.125 4.533.013-5.449-8.097 5.19-5.85zM14.22 16.754L6.434 5.186l1.635.004 7.786 11.568-1.635-.004z",
                fill: i
            })
        }),
        isPremium: !0,
        type: "B",
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJFSURBVHgBrVQ7aGJREB0/yeZDICEkJEUI+RQhISSQIkUgTUISSGshiNssCwqWgigKFnZi4yKCdrqgtfjBThQtFH/YCIKVaCOCmmJddj177wPdmKi4Gwfmwtw777wzM+dekVgstgH4QkSf6GP2QyQSfWcu+sUCCc3HfnNA0BxN+jo4OTmh5+fnYVyv18nn84398OnpiY6Pj8nj8VCn0/l7wBkOfHV1FeFwGKVSCTabDclkEnK5HK9zuDMwVCoV3N3dvTujtxvX19coFou4uLiAQqFAOp3G/v7+8Pzq6gq5XA5Go/Ed2FhA7gaDAYFAANvb23A6nfB6vVhYWMDZ2RkymQzMZjMkEsnsgJubmwgGg9Bqtdjb20MqlYJKpUI8HofD4cDi4uJYsImAg9I4m5ubG9zf36NWq8Hv92NjY2MiGHcJW8zjpthoNIgJnjQaDdntdtra2hLiaDRKvV6PJtq0v+3s7CAWi0Gv12N3dxeJRAIymWwqw4mAvOlKpRLlchnVahWXl5d4fHwUpHR4ePjvgA8PDwIQl45arUYkEhH6Z7Va4Xa7sbKyMjsgZ1MoFIRSOdOlpSVB8DqdTpg6nzZnPxMg195Aa8vLy8P98/NzZLNZ3N7eCuzz+TyOjo6mT3l9fZ1cLhe1220ymUzU7XaHw2s2m8TYClNfW1sjdpPo4OCAQqEQ9fv9Yd4I4OnpKUmlUrJYLNRqtUbUwCXDriSx8nlVxFoi5DB9juTO/fkSM3+h+dmLiC1fGcvP9OZt/A/7ydry7Q8Jd5AYkp1dQgAAAABJRU5ErkJggg==",
            title: "Keep your members posted",
            description: "Every time you post a tweet, MEE6 will automatically send it to a pre-configured channel of your choice.",
            premium: !0
        }
    }, {
        id: "bluesky",
        bigIcon: "Bluesky",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsx("svg", {
            width: 600,
            height: 530,
            viewBox: "0 0 600 530",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: l.jsx("path", {
                d: "m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z",
                fill: i
            })
        }),
        isPremium: !0,
        type: "B",
        unleash: {
            feature: "bluesky-plugin",
            variant: "with-bluesky-plugin"
        },
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAJAAAAABAAAAkAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAFAAAAACg5RFoAAAACXBIWXMAABYlAAAWJQFJUiTwAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAADUklEQVQ4EXVUS0hUYRQ+5793xmc6I7hqGbaJimoVraJVm6hAoVXkriDI7KklE3oHqcAIqkVZBC0qt60tQmjlxiiQlpX2EMfwNc7c+5++8997BzX7h7n3/Ofxnfcl2nwK4m9m/fe+hS7ninKSRXqJZNKz5sHcTZ6mTvHoNVlili3BRJi6yNAYR+2D5Y7Iy5wD64ARHuF8YBe4kVsJplIWESsXF25490iN9GwGXcfPBXIe4hGuZ4+gLSuyaGDSAiKUVaqQMJtmM5IPotsO6JZTi4EdOpwoDyj5otwxjXQfHj1ZlapiQKVJAefJsE8sGfiwsiwhN5nL+UCGqMCWCuQ5LH0oDZ7KuJEuORDkBBe+wyAqcVtgp8nnnYjRwkQdaN0sN7Bny1H3Qp//jNLiFzjMFcMzpt57iqiiRF8zsMAwHMoXreEEZ/mQVFzIaYe1IQAXoZD3lgb4I4woPyy7KZIpyFSUBqCikOvYlzWZMBDOuLhcYCpzR8GqcMRk5HnKpIhegKdgWi/NJjlISuNkmvXZ2u+xbNOICGXgsWK28b58MTpLyAhN2GOXpALTbAoVv2NbdOCrL2TGkdwFCLR28IwZdDk51YxdUQkPQ8qOJkLzakdttJaAwdM37zVQQtdemRbqkjIuqIwrN8qXHEBp0XAwpnjGNFiYPpcc18Fs0b4s9XunYiH4mKsrMDgOsh3/7bBrUMfJSYmaPmCXWXgGgjnE/qbU5xVVlwGSepTWQPYbkrtgHIRifYqG90ZAWOG3Cr0P4nFP6RqmIMExbicx+djpY8ajSXTxMHLcCGa02y7tGBgKKEMjZfkInE3lhsITuAuNkTG0K/Eu1M+6KxVZc4WMw0OxoWnlJ7R+bADVgkJXbdD/6079M4mhT3GR4f9XjKH32ohVMSq4ySO046FBVXGq7om9x1v/gKbfjgcsQ52OJBtWCxobeZzFXiuFeeOsXQLlm1Gs0BO7jIwZcpWpDnRdPjYcAI8UCzXkSHf1z0B2EtRRrFYVe1yHWmZNM+zF9s5f5W9z/TyLrvaYJnWDH3ScLmzU1u27YtVO8gFoGZSOtiAaxY6/awvCbicvoDRJF9GA05CN54Loceug7Ejk6TegBhcThbf/CtKxUo31dGqafomS+18r6ITgTWUdswAAAABJRU5ErkJggg==",
            title: "Keep your members posted",
            description: "Every time you post on Bluesky, MEE6 will automatically send it to a pre-configured channel of your choice.",
            premium: !0
        }
    }, {
        id: "youtube",
        bigIcon: "Youtube",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsx("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: l.jsx("path", {
                d: "M23 9.71a8.499 8.499 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.362 78.362 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2c.12.505.365.972.71 1.36a2.86 2.86 0 001.49.78c2.156.266 4.328.376 6.5.33 3.5.05 6.57 0 10.2-.28a2.88 2.88 0 001.53-.78c.28-.28.49-.623.61-1 .358-1.097.533-2.246.52-3.4.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z",
                fill: i,
                "data-fill": "main"
            })
        }),
        isPremium: !0,
        type: "B",
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE5SURBVHgB5ZTNasJQEIUnae0ftk0LpaUFCQRcuOk7uCn0VQTfwIfxDdy56yYP4L5QEFprV1XwB/w9nsF7JUgS0Swd+Eggc8+9ZzJ3RI4uHPsCkSc+AnJHbsgVuSQnW2vmZGwYkh5pU6gjEbF30iFzgj3RNd+kbMVOSXiA0DYfxHWpeWusZo1X8qiC5+Q6NiWfF6lWRUols3dqeORMLRfILNaG5wGtFjAYALUa4Pu7bPsq6CcmWEEb3S5QqQCumyi408cmxuySRkOk2RRZLpPzjOVF4gnDEKjXgSAAHCfNrpatoIIvZBSblMsBxWKaxShD1VLBB/KbsQdhmvtea/hP2pI9Pknf1rFsdpgdcDK9ej/kTbWiw+FZtI94bFnfHh0MF2Qi60GhuVOD/mYdDDogdDh88eOfHGesAKDxVt9KyD8dAAAAAElFTkSuQmCC",
            title: "Never miss a new video",
            description: "Automatically alert your community every time you or your favorite YouTuber post a new video.",
            premium: !0
        }
    }, {
        id: "reddit",
        bigIcon: "Reddit",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsx("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: l.jsx("path", {
                d: "M15.779 15.685c-.948 0-1.72-.788-1.72-1.755 0-.967.772-1.755 1.72-1.755s1.72.788 1.72 1.755c0 .967-.772 1.755-1.72 1.755zm.304 2.88c-1.176 1.195-3.424 1.29-4.085 1.29-.66 0-2.912-.095-4.084-1.29a.46.46 0 010-.644.438.438 0 01.63 0c.74.755 2.322 1.024 3.454 1.024 1.13 0 2.714-.27 3.454-1.024a.438.438 0 01.63 0 .466.466 0 010 .643zM6.49 13.93c0-.967.773-1.755 1.72-1.755.948 0 1.72.788 1.72 1.755 0 .967-.772 1.755-1.72 1.755-.947 0-1.72-.788-1.72-1.755zM23 12.175c0-1.357-1.076-2.455-2.407-2.455-.65 0-1.238.262-1.67.69-1.645-1.212-3.913-1.994-6.44-2.085l1.097-5.264 3.582.778c.043.93.79 1.67 1.71 1.67.952 0 1.721-.784 1.721-1.754S19.823 2 18.873 2c-.677 0-1.255.4-1.536.98l-4.001-.869a.422.422 0 00-.324.06.433.433 0 00-.185.277l-1.202 5.776c-.006.034 0 .064 0 .098-2.572.067-4.883.852-6.554 2.082a2.364 2.364 0 00-1.664-.684C2.077 9.72 1 10.82 1 12.175c0 .997.584 1.856 1.423 2.24a5.029 5.029 0 00-.056.744c0 3.78 4.312 6.841 9.631 6.841 5.32 0 9.632-3.062 9.632-6.84 0-.25-.02-.496-.056-.738A2.47 2.47 0 0023 12.175z",
                fill: i,
                "data-fill": "main"
            })
        }),
        isPremium: !0,
        type: "B",
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJwSURBVHgBvZRbSFRRFIa/Mx0rwywhirCISiVLUuklaqyxKwaJFr70EhEUFBG9RdBDvURQCEG99VQQJCQRJInTPXxo6EJOFy2QSSJGUZKh0XFs9585OhcpZqRwDevsvdb+97/32mutgf8sVq5A46WIAkqYzwerhYhpYjZDNGB4Y/npnj7hLo4wTq12jMmMShdK90lD5LHVaqPPwXlyJeQXG/W9QAcHteusdJZsWwcUi96ehNnkLsUKN6SQDO2EzXaOi+ybiP3WY3qZjpg6Cs0O7uWCzRqy8SkVMbboNp9Mve6YRRJJMUbjHoGj2uqTPqdSnjoFt1PLqzQWyfZIh2R3y34obaWGjwSZRwSPkjKcItzNIT36YYH6nZtoPCn33CyXiQjbLGy1xkKNV/DSaolsqcrhJc6j/5v8UN7LPSLLk7EkY6m4BJqfwembkF+Q8heo9M7cgmsBF5Muln4G20OcsCZXZcaSi42noMIL3kaorE1tWrsJavZD6QZoOJFO5xR7i8qpz6MaGtFVL4t0MLnceRfCIXjfCT2B1LbeLnj31F0LtKcTDuhC55wadZPSRL7yF9R0ZRKyYBHERtRkkczQnCdwdPB7urdHdVChHo8l6lCTqE64n7FxbNTVqTIeh9GfU72PHDJnkmo9i4v6+hT6uoS93gf1x+BFK3x562JKq2Gz3rXtOjy57foMr6TnUzRpov4sI8++RDy+N+FYvgZWV8GyMhfgvN1rP/R/dW3bVoHHj1oP+PxHwgRpfaJjDujUBplVQhRpPmdi2XmaYTVBUH1zQ/HdmeyQvxJmkG9jhRDl0sUT6AGRd1kd+g+cKfkNpLK5QnW5mCAAAAAASUVORK5CYII=",
            title: "Stay updated on thousands of communities",
            description: "Set up alerts for specific subreddits and ensure that your members never miss new posts on Reddit.",
            premium: !0
        }
    }, {
        id: "instagram",
        bigIcon: "Instagram",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsx("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: l.jsx("path", {
                d: "M12 9.52a2.48 2.48 0 100 4.96 2.48 2.48 0 000-4.96zm9.93-2.45a6.532 6.532 0 00-.42-2.26 4 4 0 00-2.32-2.32 6.53 6.53 0 00-2.26-.42C15.64 2 15.26 2 12 2s-3.64 0-4.93.07a6.53 6.53 0 00-2.26.42 4 4 0 00-2.32 2.32 6.53 6.53 0 00-.42 2.26C2 8.36 2 8.74 2 12s0 3.64.07 4.93a6.86 6.86 0 00.42 2.27c.2.526.51 1.004.91 1.4.398.402.88.713 1.41.91a6.532 6.532 0 002.26.42C8.36 22 8.74 22 12 22s3.64 0 4.93-.07a6.532 6.532 0 002.26-.42 3.89 3.89 0 001.41-.91c.4-.396.71-.874.91-1.4a6.6 6.6 0 00.42-2.27C22 15.64 22 15.26 22 12s0-3.64-.07-4.93zm-2.54 8a5.73 5.73 0 01-.39 1.8A3.86 3.86 0 0116.87 19a5.73 5.73 0 01-1.81.35H8.94A5.73 5.73 0 017.13 19a3.51 3.51 0 01-1.31-.86A3.51 3.51 0 015 16.87a5.49 5.49 0 01-.34-1.81V12 8.94A5.49 5.49 0 015 7.13a3.51 3.51 0 01.86-1.31c.36-.36.793-.64 1.27-.82a5.73 5.73 0 011.81-.35h6.12a5.73 5.73 0 011.81.35 3.51 3.51 0 011.31.86c.362.359.642.792.82 1.27a5.73 5.73 0 01.35 1.81V12c0 2.06.07 2.27.04 3.06v.01zm-1.6-7.44a2.38 2.38 0 00-1.41-1.41A4 4 0 0015 6H9a4 4 0 00-1.38.26 2.38 2.38 0 00-1.41 1.36A4.27 4.27 0 006 9v6c.01.471.098.938.26 1.38a2.38 2.38 0 001.41 1.41 4.27 4.27 0 001.33.26h6a4 4 0 001.38-.26 2.38 2.38 0 001.41-1.41 4 4 0 00.26-1.38v-3-3c0-.472-.088-.94-.26-1.38v.01zM12 15.82A3.81 3.81 0 018.19 12 3.82 3.82 0 1112 15.82zm4-6.89a.9.9 0 010-1.79.9.9 0 010 1.79z",
                fill: i,
                "data-fill": "main"
            })
        }),
        isPremium: !0,
        type: "B",
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQKSURBVHgBtZRbaFxFGMf/38yZc87espum1SRNLAlNlaKWvlTRIAlYwaLU6osIor5oRcW8SF+0BJ8ERcSnCi1VFMELeHmTFAylxNZIElH0ITSRpLk12bSb7OXsuX1+Z1M3lb7qgW9ndi6/+c/85xvgP/7o5j8Dw7Ouu3T1oBOgz/ZIGQ9wYwlfIrgREWCiCKmQY0NqZjVVuzg8OhjeAhx86dIBRfSe4+MBt04pgdA2iOGGDEem2ZHUoxhOxOxw7DkcjWdi//VjU49MNYHDw2z9Mjs+Yoc84PqElM9oyxq0piykScGOGdIHI6UVxIjXfQlP4BFsJBGfy+TtxwdHBz0rAc78eun+2xj3JSrSzDh2vAf39rfB2AqxAEja/vksWyOScYsjK/jznT9gOIChqF9Vyoek+3wD2FWt91ohuy5iPDq0Dx17bJwb+gkb06Vki2wEaDFTMthohUJPge88cTcdPNGH2XcnoCl2NNSexoLJT3u1rOQsKN9msP+hXTj/4g9s5q+jnUMyBpTtboEGI5q7hrbDfdj1xF20eHoCvcP9WDpjI7jmUUysmsDuqCiyQ7TmctCGkFueph0mQKa7FR2vHIbbkW0ct7+4idJ3E1z6ZpyC3xehUwOw8pYAE4pCE7hbL8MoHy2pHUDgo9OZg9YR2l57DKiuYuPkWdFnc/b5I9T65AFafPNrOTuX40B24Eac6IuhqIltd+fRmZ5Dm7ssDTFanWUu9NgwHQX4n30OXZwHrc1R5ZNvYbfnkOpOy4IVIllGqzpp8mGw5VxDYcFdhVIhLCuDZJBtNkjpPIu9ZFQF2tpExDZY1xr9RtUQ6arMFLPIE6NqiHnrSjcUGr0BW1dgJYNIJtg1WOuXodYWYD/7DJz2DNu3p5F+7ijilRXoxb9YoNwAqrqEz0p722foSo6xJYLsuqSCDdopzRwTvj8F9dRx4OTbpBIFAqudOSuAKlguvLINVOyJyjoU32QKciLMkQmmDIQC3b8XuDoj9QXg07eAli5QRTJkZglW3SBWaUJ7JzgMQeUSSMVbCza9LihxQkmybjAuXwCOvgr03gHsNJB2wLsClK9ASaJrSwzYuxvZoRfgX5gEldZFYciKJaWaCjPWNLKoIa/S+O008ODLwNPvi2wBhn5yVDdCXNU2VL2OcOxn1E59xRoZuTC+Fxg9uw3U3iRaM2NooYeT7WP2I2DpC0HkCDXZyqa8WSURcF2iWGcslBAWIzG8hUg5UDoc3+eHF//1fPGXR+5B1nwoKg8hK6NIsi0xMoGsy7u1JtA1KVcjcJHh+5m4HuY9P8qM1YP0G10jH0zd8sDyjwMWCnkBOr1yfSxUBVJMlEm5LLEu9WUfUdJWywbVIDeTKzuTNPqxh//r+xulR8Kwtq0vhQAAAABJRU5ErkJggg==",
            title: "Looking ✨snazzy✨ today!",
            description: "Building presence on the Instagram? With MEE6 you can easily show your members your new posts.",
            premium: !0
        }
    }, {
        id: "rss",
        bigIcon: "Rss",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsx("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: l.jsx("g", {
                id: "Page-1",
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                children: l.jsxs("g", {
                    id: "Group",
                    children: [l.jsx("rect", {
                        id: "Rectangle",
                        x: "0",
                        y: "0",
                        width: "24",
                        height: "24"
                    }), l.jsx("ellipse", {
                        id: "Oval",
                        fill: i,
                        fillRule: "nonzero",
                        cx: "7.67",
                        cy: "16.42",
                        rx: "1.34",
                        ry: "1.3"
                    }), l.jsxs("g", {
                        transform: "translate(6.330000, 7.210000)",
                        fill: i,
                        fillRule: "nonzero",
                        id: "Path",
                        children: [l.jsx("path", {
                            d: "M7.26,10.51 L5.76,10.51 C5.76,7.34 3.18,4.75 -1.77635684e-15,4.75 L-1.77635684e-15,3.25 C4,3.25 7.26,6.5 7.26,10.51 Z"
                        }), l.jsx("path", {
                            d: "M10.51,10.51 L9.01,10.51 C9.01,5.54 4.97,1.5 -1.77635684e-15,1.5 L-1.77635684e-15,-1.77635684e-15 C5.79,-1.77635684e-15 10.51,4.71 10.51,10.51 Z"
                        })]
                    }), l.jsx("path", {
                        d: "M17.19,21.16 L6.85,21.16 C4.65,21.16 2.86,19.37 2.86,17.17 L2.86,6.84 C2.86,4.64 4.65,2.86 6.85,2.86 L17.19,2.86 C19.39,2.86 21.17,4.65 21.17,6.84 L21.17,17.18 C21.17,19.38 19.38,21.17 17.19,21.17 L17.19,21.16 Z M6.85,4.35 C5.48,4.35 4.36,5.46 4.36,6.83 L4.36,17.17 C4.36,18.54 5.48,19.66 6.85,19.66 L17.19,19.66 C18.56,19.66 19.67,18.54 19.67,17.17 L19.67,6.84 C19.67,5.47 18.56,4.36 17.19,4.36 L6.85,4.36 L6.85,4.35 Z",
                        id: "Shape",
                        fill: i,
                        fillRule: "nonzero"
                    })]
                })
            })
        }),
        isPremium: !0,
        type: "B",
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO6SURBVHgBnZRrbBRVFMf/987so12Wdm3QtmmCrYmhtCpUgws10A82ETAGiK0NwTRFY5UGv1ijCSYsCR+Uj2qIkkY0DRipRo0txhpiIaWhFmgoz8K2PLrtdlPYWWa7dHYe93KnsMvSFgicZGbunDPnN/eeF8FDJBDgtKcEWRMmsulNyMiGUeJD4kANNEIIn8uHPAi27CeeJ6koZBKcM22mBd1LMfHfFkRmgmcBf1d4rqFjs7hWCquU0itxC0n9ri+RzIROBoZGcehqFP93NRBtTuAfKl8hmdhvmuDxKRxlBEbKpsYBTbdSrw6PiywD5d7hCJqvRaS2tlqi3wf8LcELnEkcu67inx8Oo0VPwMIjZP2rVuN8D97sHJDWLanB8QAhTE4ZXRrWMCD+3UF8v7UK/iULsdGyoN2I40RbHzpPjkGZCezol1rqKq3qihK2/s89dFiortP02Sn8uokue31hHOErE7gcUaHleVHz2Voc/LYOzfk+uDKBug7rVhLd85y8lBp4xtald8gZZIcMhTHkHgkiK6Sg92oMN4UDq30Z5a8vwtu71mFf6zFs/fc8wmk/TkTEmUQp3DUHuCRn/nFyCjmShLx3/VheXYpGTYcyGkP/z33oOHIRX25bjY+EbdeYiqazo1BnhsCngNJMhcHgpAyxvUfRu7MDn3Sew49Pz8dzn6/GzvJC5O9ox25Rg97GStRjDikMw6KZMPtpSohyDu30GKL7+jDwfisCwXEcrq9Es9sN6dd+tOTnYNPK57EgE0YtJAIBwqaB9tmThmgsOzkM3GIIVRTBt2EpFtm67R34RZ3CSNMqvHPoHK7EbmF47WJUZySUi1BFpsH2LRSCU0DkjA/0T9/A9rpXsK3ej6W2rmsQ7YU5KM92Qb4xiSGfB2Wp790OEuveQpQ0cHrBYUnkHlRkd5BxqOMqzohuNU6FEHLLWFCUA6+qISbS6aUSdJdTDAowPeU3DSgqgp4wcPqpedjkceKbhKiv91rxsQBQzQSz+ykYxcipUey4pmKwO4ihioXw9HyAM3suYYUoua/Tp0stNv/FX3prOf5WJtFudwseIlMEIxs+RLQgyL7gFhpEKvyNi0n4PmDVXu6uLkdt2bP4ym7BhIZekW0zZY+qDLphO3DuzeZ2vNYQ0CyTsY1NpY6eWTu05bXd3FdWjIoXi7Eq14sXwO/F1B5fYnjFZSriJeJNiHTC5aT7G4pJLJMxax7aO2UmCvQkfJzesYt21DwORKrCiNq1hicS0aRVAS4HOKeP43Ybu/mVA3ZwUPgAAAAASUVORK5CYII=",
            title: "Never miss an information that matters",
            description: "Stay updated on important stuff and follow channels that interest you and your members.",
            premium: !0
        }
    }, {
        id: "kick",
        bigIcon: "Kick",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsx("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: l.jsx("g", {
                id: "Page-1",
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                children: l.jsxs("g", {
                    id: "Group",
                    fillRule: "nonzero",
                    children: [l.jsx("rect", {
                        id: "Rectangle",
                        fillOpacity: "0",
                        fill: i,
                        x: "0",
                        y: "0",
                        width: 20,
                        height: 20,
                        rx: "2"
                    }), l.jsxs("g", {
                        id: "Group-2",
                        transform: "translate(2.000000, 2.000000)",
                        children: [l.jsx("rect", {
                            id: "Rectangle",
                            fill: i,
                            x: "0",
                            y: "0",
                            width: "16",
                            height: "16",
                            rx: "2"
                        }), l.jsx("polygon", {
                            id: "Path",
                            fill: "#1E1E1E",
                            points: "6.857144 2.4 3.2 2.4 3.2 13.6 6.857144 13.6 6.857144 11.3872 8 11.3872 8 12.4936 9.14288 12.4936 9.14288 13.6 12.8 13.6 12.8 10.0596 11.65712 10.0596 11.65712 8.9532 10.51432 8.9532 10.51432 7.046808 11.65712 7.046808 11.65712 5.940424 12.8 5.940424 12.8 2.4 9.14288 2.4 9.14288 3.506384 8 3.506384 8 4.612768 6.857144 4.612768"
                        })]
                    })]
                })
            })
        }),
        isPremium: !0,
        type: "B",
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGWSURBVHgBrZS7SgNBFIb/md01N40hKZIioJ1gIUrQRqwsfQCtRPAZBCvTWtiLhUWsBAV7CwtrA2JjJWgw4IWYm9msu5sdZzfkMrphc/thdmb2zHznHObMgFKaJoTUeGMjNp2zDog9AKBgPFJtIGvNqEwwESPCCrPG27fljH0xCiKLBO3dEuaCWYkSrF1HeU/b/17PNTzsVZzx3H4Iya1A22aULNyuf+Hnw3IHEsojjEs8kk6Ucrg5Tp1OI7qiwJ/oOKOKvQe9I3STP04RWVQwsx1AP/IEJjZ8TutXnsBeKmYN5DIazCobHVh9NJG/1PB0XPtnGxholBjudsoo3RuudoqhRcYDlPhhL52EMZ8OudoHTpn6iFNGaPBb8mbhOVNHQ2XDA1uKpBQEZyXkrzQB6Jly/kLDzXIB/coTaPA6s0/05awONWd5LRdTZhaD/tkAMzp+zEoznexuGQtHU0hudj0ORe7gjw/h+bJl391uWSagF5q75EkCOSSWi15gfA0TgHa5BzEeGRL/KBy6ynsJo0lljB3+AuPojYD3HMW5AAAAAElFTkSuQmCC",
            title: "Notify members every time Kick streamer is live",
            description: "Stay in the loop! Get notified when you or your favorite Kick streamer goes live.",
            premium: !0
        }
    }, {
        id: "podcasts",
        bigIcon: "PluginPodcastsIcon",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M19.141 5A9.967 9.967 0 0122 12a9.969 9.969 0 01-2.922 7.064M5 19.142A9.97 9.97 0 012 12a9.969 9.969 0 012.936-7.078M16.285 8.044C17.345 9.059 18 10.449 18 11.982c0 1.552-.67 2.957-1.753 3.974M7.8 16C6.69 14.979 6 13.556 6 11.982 6 10.427 6.673 9.018 7.762 8",
                stroke: i,
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), l.jsx("path", {
                d: "M13.656 10.451C14.552 11.11 15 11.438 15 12c0 .562-.448.891-1.344 1.549-.247.181-.492.352-.718.495a12.23 12.23 0 01-.653.38c-.894.49-1.34.735-1.741.464-.401-.271-.438-.838-.51-1.971-.02-.321-.034-.635-.034-.917 0-.282.013-.596.034-.917.072-1.133.109-1.7.51-1.97.4-.272.847-.027 1.74.462.233.127.457.256.654.381.226.143.471.314.718.495z",
                stroke: i,
                strokeWidth: 1.5
            })]
        }),
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOBSURBVHgBrZRbaBxVGMf/55yZndlrursx2aTpbtZNpU2xia6xxFiMDyJpIFRFpL4bVIK+6IsXWAgKoqAIFrciFlQoKoX60Bu9l15YaErvbUqTXpKm22Tb7e5mL7Mzc3pmyoaUtqGFfjDDnHP+8zvf/L9vDvCUgzyJuPcPruolOIkOSQMqfbdQSCSI+cTA3gRXCw2ICLWLcdDaPDWgzUpIn/wI0wLFHwvY9xf3ZSqIkgqkR2k0EzPHh3DVgt4H7PuZK+E2xDQdz5yaRE5ko3ADIcpRIDJyJodR06pOuJw+w387zSatMTdxOTVEMnPp9/7IF4Va0dP3Mnau7sA6hYCJxRBh8HAJIQFuFWOP5ITMJND6tvIaf1T7zRus1NtAobVtsG5tIrNZB1rfeBGfWuMth/H30AC++XgAX9c25BQOztHSvLTyRfiF0i8zY+r/YjwVjOpfijVCKdR3/+HMBgYImrufQ8TjQv/ZCQy/2o64S8HrqfPYsiQA97ourLShBCQ7JR8SWccCz5b7czfZd0wmPcGwEbPW/bchuELGFdTFWrBc7JjbkcJIpBHvZQvYkxrF2FudeElcn//wDj6MBOHJTdNJrUCPKip/MzPuGBVWXHfXaa9YwOZBGDSehER1MK9TFKOKS2UdpsywWABHhC+mqBqzxOEAeoYH8O3bHVhWztMLVEKHNW8aOEklHhY+5xOEmHNFIVaqdK41iKpAYiZK87tAolD8bvg4RGtzaLaQUtl+W0PGLsqxQejWQ3YWow6GpW4HmMj0vM+JTqFLM3KvVabzOPH9Dnz1+2GkVJ/eaRrksg0g5nJRif1Wy9ibgogO/5XnRidwJhaCsWYVVo9PY3P7EvzU342VR8awrVhB4b8RnJ4pouJt0COq23wtn2bJQGt1hTCkRdLZrtpX2J8s/MiMXMLNO7PYLqCfnL2Gi9kiNkcb0H9kHFeSB7Apk8d1kXGprtFYpZfJ0eyUtNvfqA+L1zf+2aWcnmfdvehO8mWEwPvZWmzKF7Fv/VasxwKx+PnyWtXL36/KZs+/Kzw3HgAm9nJp2zm0N/rgrVZh3CqhuhBwUT3Gm7pQ3Bgl5fnz9/3L8QR3OZoQE63gWAjmlJHe9wGZeNjaA6dNPMllJ9BUNhGcf1RZYUowVI70wUHcsIv5OMBa9AoLKsfh0xU4TM06CVGNH8OdDRvIglY89bgL6oFH+RMxwn8AAAAASUVORK5CYII=",
            title: "Never miss your favorite podcast",
            description: "Tune in anytime! Subscribe to your favorite podcast and get notified when new content is published.",
            premium: !0
        }
    }]), T("engagementFun", [{
        id: "giveaways",
        bigIcon: "PluginGiveaways",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M16.2 7.008H7.631C5.626 7.008 4 8.65 4 10.678v6.65c0 2.026 1.626 3.67 3.631 3.67h8.57c2.005 0 3.63-1.644 3.63-3.67v-6.65c0-2.027-1.625-3.67-3.63-3.67z",
                stroke: i,
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), l.jsx("path", {
                d: "M11.426 20.497V7.507h.98v12.99h-.98z",
                fill: i,
                stroke: i
            }), l.jsx("path", {
                d: "M4.668 13.498H19.5v1H4.668v-1z",
                fill: i,
                stroke: i
            }), l.jsx("path", {
                d: "M11.866 6.298s-1.652.69-2.622-.13-1.375-1.98-.89-2.68c.485-.7 1.652-.64 2.632.14.98.78.88 2.67.88 2.67zM12.104 6.298s1.652.64 2.622-.13 1.375-2 .9-2.68c-.474-.68-1.652-.64-2.632.14-.98.78-.89 2.67-.89 2.67z",
                stroke: i,
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })]
        }),
        type: "B",
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALdSURBVHgBnVRNSFRRFP7uve/Nm5+eZmUmbiILhn4WqVFRkK3CwKAWQRCCISatWracfTuhhYuoaBVt2kSLJCYiKC0k6Y9ELMvfxpnBn+d7b967p/vGnMaZEdMDj3fPPed8nPPdcw7DBtL8jnTzFWK+gC5M5GpjsB5fZu56/mw9w6m7ZEoPDdJHrNTmMzghYPZ1D34zxmhDwOY+2nW8ES1VBmqm00h9mUA6uG/c6e2q2c5qMssiMzqJlJSwYzGMJjuZvS6gAou2H8Wlpn3oU6oHDiO7gEfTWV83DdZORJJxRD6Po2tgRHziAq4xhZFkYgWUlwJGNOzxpToIhLMWnkxncKfGREdVGFcms7i96OIpAxPKxwn8FSWhxTrs7+4mvSzDi/2007Ks64whdLBenGjYLs4F93urBabmJFK+n/fLupQcn6eXirxcaiycdC3YSy5+fbzJZtYAXnix9IBAHaVZXz0UxUzGx5vl8sf1Pd7/fTB8izi8gR4MrymZMXkAmxTOaXc+VkJr60VIKzbqYXzgnJ0sDVIUgFR99hKVAUqPf109TzjQCoBtvWRwZjMtJFEJMJBchXb2HJldPTcY8AqAswbqWkxhbotqZUGaIkZTqPGqcpvj8Mhb9Q/a59kNuAWPcA7mkR36gYiBiiJUlo1mOaAbpngAaOuYVrVQ3qM1QdqiQOj5hDMcjdKx0qDTtaoWxcRgurxmy2JDpGvpoU6kcE1Vkr89oz5FbTZHWHJkxQx9ENIVbMTY3Pku/Bj4O9P5tkmeha+rPsIWhDPpJlS/FfSVHyOWwzxJcrBZ4SJVrBZYPqxj8ttY5GFdfLlJcIoXO/mSIopDNURkB92vBjavqXd6b2DxfrHvmtFTm6ZaEPZGo55J/j9bvJ7tSM8LayqTm9dMe7S23s5vlkOttVZxuWWAgbTeo7C7oBYrR7Waz7xdLVRphDCj/8SsWlNb4hqJBPFg/ausdVUq+9+4P8TvJIjhbbs+AAAAAElFTkSuQmCC",
            title: "Create, manage, and track giveaways",
            description: "Get your members to come back regularly by having giveaways.",
            premium: !1
        }
    }, {
        id: "birthdays",
        bigIcon: "PluginBirthdays",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M5.514 11h12.982c.93 0 1.82.403 2.478 1.12.657.719 1.026 1.692 1.026 2.707v6.99c0 .314-.114.614-.317.836a1.04 1.04 0 01-.767.347H3.084a1.04 1.04 0 01-.767-.347A1.24 1.24 0 012 21.817v-6.98a4.136 4.136 0 01.265-1.47c.176-.466.435-.89.761-1.246a3.5 3.5 0 011.142-.832c.427-.192.884-.29 1.346-.289z",
                fill: i,
                "data-fill": "main",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fillOpacity: .16
            }), l.jsx("path", {
                d: "M18.697 10.877H5.263c-.866 0-1.696.35-2.307.97A3.336 3.336 0 002 14.19v.81a.795.795 0 00.231.55.772.772 0 00.547.229v0a.21.21 0 01.15.063c.04.04.062.095.062.152v.461a1.225 1.225 0 00.345.862 1.19 1.19 0 00.847.358h1.666a1.187 1.187 0 00.85-.357 1.222 1.222 0 00.353-.863v0c0-.18.07-.352.195-.478a.662.662 0 01.471-.199h.91a.708.708 0 01.513.21.728.728 0 01.214.518v0a.95.95 0 00.268.664.923.923 0 00.65.28h.172c.292 0 .572-.118.779-.328.206-.21.322-.494.322-.79 0-.147.058-.287.16-.391a.541.541 0 01.386-.162h.323c.233 0 .457.093.622.26a.899.899 0 01.257.631v1.026c.003.352.142.69.387.939.246.25.579.39.926.393.35 0 .684-.14.932-.39s.389-.588.391-.942v-1.23c0-.183.072-.357.199-.486a.672.672 0 01.478-.201h.616c.18 0 .352.072.479.2a.692.692 0 01.198.486c0 .272.106.533.296.725.19.192.446.3.714.3h1.445c.436 0 .855-.176 1.164-.489.308-.313.482-.738.482-1.181v0-1.63c0-.439-.086-.873-.252-1.277a3.314 3.314 0 00-.718-1.08 3.259 3.259 0 00-1.072-.714 3.22 3.22 0 00-1.261-.24v0z",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), l.jsx("path", {
                d: "M16.687 8h.638c.18 0 .35.06.477.167a.528.528 0 01.198.402V11h-2V8.548a.534.534 0 01.21-.392.749.749 0 01.477-.156zM17.896 5.808C17.78 5.406 17.456 4 17.006 4s-.751 1.426-.89 1.808A.721.721 0 0016 6.22a.841.841 0 00.328.556c.185.144.424.224.672.224.248 0 .487-.08.672-.224A.842.842 0 0018 6.22a.815.815 0 00-.104-.412zM11.687 6h.638c.089 0 .177.015.259.043.081.028.156.07.218.121a.567.567 0 01.147.183.48.48 0 01.051.214V11h-2V6.582a.477.477 0 01.046-.224.561.561 0 01.147-.19.697.697 0 01.227-.126.797.797 0 01.267-.042zM12.885 3.763C12.77 3.373 12.448 2 12 2s-.747 1.393-.885 1.763a.781.781 0 00-.115.39c0 .224.105.44.293.599.187.159.442.248.707.248.265 0 .52-.09.707-.248a.788.788 0 00.293-.6.781.781 0 00-.115-.389zM6.67 7h.647a.72.72 0 01.483.182c.128.116.2.273.2.438V11H6V7.62c0-.163.07-.319.196-.435A.719.719 0 016.67 7zM7.885 4.763C7.828 4.423 7.448 3 7 3s-.747 1.422-.885 1.763a.78.78 0 00-.115.39c0 .11.026.221.076.324.05.103.124.196.217.275.093.078.203.14.324.184a1.158 1.158 0 00.766 0c.121-.043.231-.106.324-.184a.853.853 0 00.217-.275A.737.737 0 008 5.153a.78.78 0 00-.115-.39z",
                fill: i,
                "data-fill": "main"
            })]
        }),
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALSSURBVHgB1VRNaBNBFP5mZjebZtNtYn6MDQ2J8aeKNIqinqQHD6IXvfToVaF36UkFDx70Il7Ui9696aEIgh56KSItFVEQqZU2RRpN8+dusj/jzKYJSVPFo36w897OvvfNfO/NLPCvg/xt4E3O6esnMJoUOrPAbBNNcxfqS5dJ44+Ek495xLIQ8RgCCofLgJ/TR5ZiH6tGfHY5W+tLZuBNG9/3JbH6dIq4co52iV5x5dQ9vt80keccsTunFy6lAnbC9XAoqKemz2btC53YtFELSstdkABFfGUTeamgj7D+ARmoMDrvhVFtqpAspj0Pe75Yeu3NZsbjDCn57f7k+5mgYndziYPh54+wS/qKHI4/5CPMRbRXziI5/HnNQ5QTWPlRfZyKdLKAd5TAsWiqFqQgVk+8SpEQpuSvonr9ZBKZYZyL6UhKX8hqrywQCSHdGMlOTmTUeG88txESI/EJGYOOHUDp4JxoEg0xhLfPEw/ct3I4+YAXxISSzNlHwwn7Rt5gyVXLDbRcuCKMC5msXubwRNfDKmB5RE0ESHPN9MqtmnKrUtTmRTeq81fJJ7ql3wkOOaFw0r4tjsLYuuVpBiPErzGRFQEVZ4KqDGohqqi2YN5oeZqISGnDznUt4OgOQdlXJQfLRE2LeDHSLixMl6PU4gNyW4J5bsPxfdvraMVuNeqwt1dIqUsYNVEZCwWQ05VuckJjmIioYvcEYYUgF2ZoN4hgfETxbQd61C52fJ/h5QypXJvjjQOGgrrTXvpYVEVMoz6haAIcEblcdzHECPJhQSj0VsQ2DVGvvQZ3n/USSpw4iK9MaD6TDPZJzG7tulhzkA7Ji0wha5gaov4jUbVcYDvhi29Vl3sqfofqj3ZNS6LxKw23v7acDRJeHDVawixKn8vb5CLYm7SuOlAYNcXhGVhMcxWnI3nn3xfnZOIuQkMRhLUWAqZoajyH8ux50sR/j18FB/lWMSp1hQAAAABJRU5ErkJggg==",
            title: "It’s time to celebrate!",
            description: "Make sure every birthday-person has their birthday hat & role on their special day.",
            premium: !1
        }
    }, {
        id: "blindtest",
        bigIcon: "PluginBlindTest",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M12 4.09a7.8 7.8 0 00-2.17.31A7.89 7.89 0 004.09 12v.08a7.91 7.91 0 107.91-8v.01z",
                fill: i,
                "data-fill": "main",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fillOpacity: .16
            }), l.jsx("path", {
                d: "M11.07 10.21L8.8 5.89a6.9 6.9 0 00-2.34 2.28l3.93 2.71c.17-.275.402-.505.68-.67zM5.76 9.23a6 6 0 00-.3 1L10 11.54c.02-.103.05-.203.09-.3L5.76 9.23z",
                fill: i,
                "data-fill": "main"
            }), l.jsx("path", {
                d: "M12 9.83a2.19 2.19 0 00-1 .27c-.44.24-.79.616-1 1.07a1.4 1.4 0 00-.09.29A2.17 2.17 0 0012 14.17a2.17 2.17 0 000-4.34zM12 13a1 1 0 01-1-1 1.153 1.153 0 010-.26.78.78 0 010-.14.559.559 0 01.09-.17 1 1 0 01.37-.34A1.06 1.06 0 0112 11a1 1 0 110 2z",
                fill: i,
                "data-fill": "main"
            })]
        }),
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALDSURBVHgB1ZQ7TFRBFIb/cx/LXpZdlEUersDGIKiNGh9gNAFt1MbEhlhoYVS0sjY2EgujiZWFMTQWFiZaYmIsTFAxBB+FjwgBEgjgAwMLd3dhH/fOHOdegchjE0qd4t45/8z55szMmQP8640KDXQwa9cBJiL27NYONjIxRDmHUo2gSxOC5mHXbsbMkzbKrwn0IM/voxoawoJRFNuRO2yV8F5oHE9Os8WSvrs59CUnrG7JEJ4Pu3D1Yoz3XqDEMmDrAw6ms6jXFWhjTNSd2iVuv0+K+jnhB4jUDC8tzBKD2WnzWmo6MOpDdLCKfLjvCiW1hdC0XBpxD7Zhi4hf2s+d7XWB+mPl+prHQRoaglGnMxzNxP0FhJIIdV7fB+6pRVTqCJm6Y2yL528e3aRHPf1EhYnKIq0QtCxYzrcWbeUfOPiYLX92aB4bvX9VI7fEiqnhxlAWvbMCxTrhZKXhnQuvCSWuj8QyLYu27iBoeJ2sik5tFxtKRPPuiIlNRST705JG5gU1lZl8vDpIE7rgL7ZLSUcugwaKcUj9XvqGDfhABfMjnWOuefjNzwAtYhAaQxp/SgNfh7U7eQcl26N8+e3UcqBGXLvY33kAaR9kanBXbifpMt7ZgmyXKWShNBDQQiorUaipHEp37iPnz4lLpHxR0vjKiR8SOVRXi4uhsHO233ZWgaSE5+OY5RjzI17QZ7xPbs54vdIhkWe8mFTZPJVHyl19NyJHPUYRRnrbKLME7PkFW11o7ueA+Uo9qGGsv33MTln33pyn1KKwkNgkS8MYIwmeHsdVZiTWAZsEydPd5yj7t7iUtc/OqGeTwcTsD2vUnjDapaDBQiRVLj4TjJauI5GBVWMrhaa7HPGfkQWrcmu+NRASzbqGmrQtIVkbIpMfPW0NdRVcbC3RK1VuBcLSRRkZMFhXFcVEsqoECVWqBP7r9huoXBfPG+mf9wAAAABJRU5ErkJggg==",
            title: "Who let the dogs out?",
            description: "Let your members prove their music knowledge by listening to and guessing popular songs.",
            premium: !1
        }
    }, {
        id: "economy",
        bigIcon: "PluginEconomy",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M12 3L4.268 8.344a.619.619 0 00-.233.31.643.643 0 00-.008.391c.038.129.115.24.22.32.105.079.231.12.36.118h14.785c.13.002.256-.04.361-.118a.621.621 0 00.22-.32.643.643 0 00-.008-.392.618.618 0 00-.233-.309L12 3z",
                fill: "#33353B",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fillOpacity: .16
            }), l.jsx("path", {
                d: "M7.015 8.966H5.018v9.32h1.997v-9.32zM15.007 8.966H13.01v9.32h1.998v-9.32zM11.011 8.966H9.013v9.32h1.998v-9.32zM19.003 8.966h-1.998v9.32h1.998v-9.32z",
                fill: i,
                "data-fill": "main"
            }), l.jsx("path", {
                d: "M4.817 17.893h14.366c.214 0 .42.133.572.369.151.236.236.556.236.89V21H4.008v-1.849c0-.165.021-.328.062-.481.04-.153.1-.292.175-.408a.896.896 0 01.262-.273.569.569 0 01.31-.096z",
                fill: "#33353B",
                stroke: i,
                "data-stroke": "main",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })]
        }),
        tooltip: {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMmSURBVHgBnZRLb1NXEMf/c+65r9jOy3GcB6EpoVIlSFtEG0q7ceknKBLZlKqLiqKqmy4rdVFv2m6rCilqu4CqmzYgFixALJCyYMMjQgIkhECE8Ehk4UcS7OvH9T3DuQm2EuOEx2zuzJyZ35k7Z84hbCHpNItzvYjKCKJUhGSBultCqWcHiicnKWiXQ5vBJv7hOJUw3NmDRNc276BXglXOGae8ZTtLCiwc5HYHWPjrKPkvBe6f4mFdTTLxtv9RNF7/iQSPFJcYrGjBr8ipwrx1LowTAWq1Eh7M/kjLmwL3/cGdZGPnyHj5B8vBISZ2Qv8qkNdiVF2cLi7SsUrJWVGMIJLA3ZlJ3ZRwk1ZgfKy+b/TD8v+my181YK0ipDoY26b+jSX8XYJgeHmMffsnmxuAzExfXnv6ffdg7awQvBMvESIedntrf/eOVb+RAtYVicQG4OFrxTRDHNNNkHhVIVjSrH/XPer97JSQ1FVRExiQPC6gPtvbZV08kHSCwrz8NVq0j3+edPAWWefLWfO3j/ssjMfMq9VlefT9TvPmRJ9VCfXqkjyhJETqBOwm8L897v1bF6I3ByxZTdhC5ResW07FeNDvCEQDOe/lrdtxHd5jGpXlRft6vyuq2g712WLWmgsZ+SyMJvDQNLtWBCNCINjqL5WC1AfR127N7EStCZzPYECPgMAriJ6eLrTEGoTqrB7yNaduppSINBaJdDijsimQQYEyrPW+egcWw+8qMDUDo6YrXl+CPsFHerBXNoXq29fQXROZy19TLtS3GhE/aiO/WnGbvlI4GJqqq7g3c4QK6/xr8skU746P+Z9uHwp+cST1PF5Rl0wBpz9Ce5aquJPJqkLSpYmaoqc5T83FIxiVRE7ODw6fScVONjjNCvUdK0xsFwdch+KhPegY+xtrgy7e6QtUw4wNdYj3GsaQK784A7wIVO8isytuJE0DbSVWDcBt/MS0d3qajcnn7+OG1+b3G5yce4IPfB9Wa6JXDuB28Mr4QP0hmU6zXGmjfGQHZZobtCam0izLvRgwTHQHDJsMsBGgZHrIpYrIp9Ok8KYSvkDhjL5OzjMajS1QpOBnXAAAAABJRU5ErkJggg==",
            title: "Create gamified economy on your server",
            description: "Invent your own currency & items, and let your members earn it and spend in fun ways.",
            premium: !1
        }
    }]), T("monetize", [{
        label: "Monetize your server",
        path: "memberships",
        id: "memberships",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M15.9338 4H8.06619C5.26821 4 3 6.66652 3 9.95584V14.0442C3 17.3335 5.26821 20 8.06619 20H15.9338C18.7318 20 21 17.3335 21 14.0442V9.95584C21 6.66652 18.7318 4 15.9338 4Z",
                fill: i,
                fillOpacity: "0.16",
                stroke: i,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), l.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.3975 9.45307C16.3975 9.45307 14.9351 7.67827 14.914 7.65781C14.4778 7.23358 13.9169 7 13.3348 7H10.6652C10.083 7 9.52218 7.23358 9.086 7.65781C9.06494 7.67827 7.60253 9.45307 7.60253 9.45307C6.91631 10.1546 6.80017 11.3081 7.33703 12.1585C8.07928 13.3343 9.70192 15.504 10.8275 16.4272C11.691 17.1915 12.3102 17.1904 13.1725 16.4272C14.2981 15.504 15.9208 13.3343 16.663 12.1585C17.1998 11.3081 17.0837 10.1546 16.3975 9.45307ZM10.612 8H13.388L12 10L10.612 8ZM15.8808 10.4129C15.9364 10.4694 15.9761 10.5392 16 10.6147H13L14.5 9C14.5 9 15.8564 10.3882 15.8808 10.4129ZM9.5 9C9.5 9 8.14355 10.3882 8.11921 10.4129C8.06359 10.4693 8.02385 10.5392 8 10.6147H11L9.5 9ZM12.3084 15.7487C12.1748 15.8632 12.0716 15.9472 12 16C11.9284 15.9472 11.8252 15.8632 11.6916 15.7487L9.08478 12H14.9153L12.3084 15.7487Z",
                fill: i
            })]
        }),
        tooltip: {
            icon: S,
            title: "Get your members' financial support",
            description: "Create subscription plans for your members to buy and get special rewards for supporting you.",
            premium: !1
        }
    }]), T("web3", [{
        label: "Web3 Subscription",
        path: "web3-subscription",
        id: "web3_subscription",
        pageId: "web3_subscription"
    }, {
        id: "statistics",
        label: "statistics.crypto",
        bigIcon: "NFTStatisticsPlugin",
        path: "statistics/nft",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M5.54 17V17C4.68948 17 4 16.3105 4 15.46V7C4 5.89543 4.89543 5 6 5H15C15.5523 5 16 5.44772 16 6V6",
                stroke: i,
                "data-stroke": "main",
                fill: e,
                "data-fill": "secondary",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), l.jsx("path", {
                d: "M20.91 6.13C20.91 5.78 20.53 5.55 20.29 5.73L16.18 8.73C16.1284 8.78233 16.0892 8.84561 16.0654 8.91513C16.0416 8.98465 16.0337 9.05864 16.0423 9.13163C16.051 9.20461 16.0759 9.27472 16.1153 9.33675C16.1547 9.39878 16.2076 9.45116 16.27 9.49L17.27 10.15L14.4 15.15L10.23 13.69C10.1743 13.6752 10.1157 13.6752 10.06 13.69C9.9311 13.6564 9.79451 13.669 9.67395 13.7257C9.55338 13.7823 9.45645 13.8794 9.4 14L5.65 20.58C5.58837 20.6885 5.55081 20.809 5.53987 20.9334C5.52893 21.0577 5.54487 21.1829 5.58661 21.3006C5.62835 21.4182 5.6949 21.5254 5.78176 21.6151C5.86862 21.7047 5.97374 21.7746 6.09 21.82C6.2618 21.8888 6.45091 21.9016 6.63043 21.8567C6.80996 21.8119 6.97077 21.7115 7.09 21.57L10.81 17.07L15.2 18.78H15.33H15.46C15.5519 18.761 15.6386 18.7226 15.7145 18.6674C15.7904 18.6123 15.8536 18.5415 15.9 18.46L19.69 11.68L20.91 12.48C20.9676 12.5193 21.0356 12.5405 21.1054 12.5409C21.1751 12.5412 21.2434 12.5208 21.3014 12.4821C21.3594 12.4434 21.4046 12.3883 21.431 12.3238C21.4575 12.2592 21.4641 12.1883 21.45 12.12L20.91 6.13Z",
                stroke: i,
                "data-stroke": "main",
                fill: e,
                "data-fill": "secondary",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })]
        }),
        withNFT: !0
    }, {
        id: "nft_queries",
        label: "nft.queries",
        bigIcon: "NftQueriesPlugin",
        path: "nft_queries",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M5.25 5.74999H13.48C14.3047 5.25608 15.2319 4.95841 16.19 4.87999C16.0076 4.67983 15.7851 4.5203 15.537 4.41176C15.2889 4.30321 15.0208 4.2481 14.75 4.24999H5.25C4.71957 4.24999 4.21086 4.4607 3.83579 4.83577C3.46071 5.21084 3.25 5.71955 3.25 6.24999V15.75C3.25 16.2804 3.46071 16.7891 3.83579 17.1642C4.21086 17.5393 4.71957 17.75 5.25 17.75H8.83L10 16.25H5.25C5.11739 16.25 4.99021 16.1973 4.89645 16.1035C4.80268 16.0098 4.75 15.8826 4.75 15.75V6.24999C4.75 6.11738 4.80268 5.9902 4.89645 5.89643C4.99021 5.80266 5.11739 5.74999 5.25 5.74999Z",
                fill: i,
                "data-fill": "main"
            }), l.jsx("path", {
                d: "M19.85 7.13999C18.8451 6.36791 17.5897 5.99591 16.3264 6.09594C15.0631 6.19597 13.8819 6.76091 13.011 7.6815C12.1402 8.60209 11.6417 9.81292 11.612 11.0798C11.5822 12.3467 12.0233 13.5795 12.85 14.54L9.14 19.4C9.05912 19.5047 8.99984 19.6245 8.96559 19.7523C8.93134 19.8802 8.9228 20.0135 8.94048 20.1447C8.95815 20.2758 9.00168 20.4022 9.06854 20.5164C9.13541 20.6306 9.22428 20.7304 9.33 20.81L9.46 20.91C9.63777 21.0381 9.85088 21.108 10.07 21.11C10.2269 21.1116 10.382 21.0762 10.5227 21.0067C10.6635 20.9372 10.7858 20.8355 10.88 20.71L14.58 15.85C15.2549 16.1711 15.9926 16.3385 16.74 16.34C16.9698 16.3549 17.2002 16.3549 17.43 16.34C18.4343 16.203 19.3754 15.7715 20.1347 15.1001C20.894 14.4287 21.4374 13.5474 21.6963 12.5674C21.9552 11.5875 21.918 10.5528 21.5894 9.59398C21.2608 8.63515 20.6555 7.79515 19.85 7.17999V7.13999ZM19.63 13.41C19.3419 13.7899 18.9815 14.1092 18.5697 14.3494C18.1578 14.5897 17.7025 14.7462 17.23 14.81C16.7585 14.8758 16.2787 14.8469 15.8185 14.725C15.3583 14.603 14.9271 14.3906 14.55 14.1C13.9489 13.6388 13.5071 13.0011 13.2867 12.2762C13.0662 11.5513 13.0781 10.7756 13.3207 10.0578C13.5633 9.34003 14.0243 8.71614 14.6393 8.27358C15.2543 7.83103 15.9923 7.592 16.75 7.58999C17.5419 7.58694 18.3123 7.84726 18.94 8.32999C19.704 8.91293 20.2057 9.77507 20.3351 10.7274C20.4644 11.6796 20.2109 12.6444 19.63 13.41Z",
                fill: i,
                "data-fill": "main"
            })]
        }),
        withNFT: !0
    }, {
        id: "nft_events",
        label: "nftSalesListing",
        bigIcon: "NFTSalesListingPlugin",
        path: "nft_sales_listing",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M15.75 3.25H6.25C5.71957 3.25 5.21086 3.46071 4.83579 3.83579C4.46071 4.21086 4.25 4.71957 4.25 5.25V14.75C4.25 15.2804 4.46071 15.7891 4.83579 16.1642C5.21086 16.5393 5.71957 16.75 6.25 16.75H12.77L11.91 15.25H6.25C6.11739 15.25 5.99021 15.1973 5.89645 15.1036C5.80268 15.0098 5.75 14.8826 5.75 14.75V5.25C5.75 5.11739 5.80268 4.99021 5.89645 4.89645C5.99021 4.80268 6.11739 4.75 6.25 4.75H15.75C15.8826 4.75 16.0098 4.80268 16.1036 4.89645C16.1973 4.99021 16.25 5.11739 16.25 5.25V9.25H17.42H17.75V5.25C17.75 4.71957 17.5393 4.21086 17.1642 3.83579C16.7891 3.46071 16.2804 3.25 15.75 3.25Z",
                fill: i,
                "data-fill": "main"
            }), l.jsx("path", {
                d: "M22.08 17.3L18.45 10.92C18.2797 10.6183 18.0007 10.393 17.67 10.29C17.5903 10.2797 17.5097 10.2797 17.43 10.29H16.12C15.88 9.82002 15.61 9.36002 15.35 8.90002C14.29 7.02002 13.23 6.37002 12.22 6.90002C11.21 7.43002 11.22 8.72002 12.31 10.59C12.4065 10.7586 12.5655 10.8825 12.7526 10.9349C12.9397 10.9873 13.1399 10.964 13.31 10.87C13.4784 10.7733 13.6027 10.6151 13.6568 10.4285C13.7109 10.242 13.6905 10.0418 13.6 9.87002C13.2817 9.36962 13.0517 8.81828 12.92 8.24002C13.01 8.24002 13.38 8.48002 14.03 9.62002L14.43 10.33C14.3291 10.346 14.2326 10.3826 14.1465 10.4377C14.0604 10.4928 13.9867 10.5651 13.93 10.65L12.45 13.08C12.4008 13.145 12.3666 13.2202 12.35 13.3C12.2756 13.6405 12.329 13.9964 12.5 14.3L16.13 20.69C16.2547 20.9 16.4317 21.0739 16.6438 21.1949C16.856 21.3158 17.0958 21.3796 17.34 21.38C17.5788 21.3831 17.814 21.3209 18.02 21.2L21.54 19.2C21.7018 19.1124 21.8445 18.9932 21.9596 18.8496C22.0748 18.706 22.16 18.5408 22.2103 18.3638C22.2606 18.1867 22.275 18.0014 22.2526 17.8187C22.2303 17.6361 22.1716 17.4597 22.08 17.3ZM17.4 19.83L13.88 13.64L15 11.78H15.17C15.3983 12.1717 15.5383 12.6086 15.58 13.06C15.4284 13.1723 15.3246 13.3375 15.2894 13.5229C15.2542 13.7082 15.2901 13.9 15.39 14.06C15.4544 14.1757 15.5487 14.272 15.6631 14.3389C15.7774 14.4057 15.9076 14.4406 16.04 14.44C16.1693 14.4349 16.2958 14.4008 16.41 14.34C17.25 13.86 17.2 12.91 16.79 11.79H17.18L20.7 17.98L17.4 19.83Z",
                fill: i,
                "data-fill": "main"
            })]
        }),
        withNFT: !0
    }, {
        id: "cryptocoin",
        plugin: "statistics",
        label: "statistics.cryptocoin",
        bigIcon: "CryptoStatisticsPlugin",
        path: "statistics/cryptocoin",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M3.69995 11.1833C3.7092 10.9705 3.79162 10.7674 3.93328 10.6083C4.07221 10.4324 4.24156 10.2828 4.43328 10.1666C4.67855 10.0097 4.94519 9.88902 5.22495 9.8083C4.94519 9.72758 4.67855 9.60689 4.43328 9.44997C4.24156 9.33382 4.07221 9.18423 3.93328 9.0083C3.74375 9.10492 3.56733 9.22534 3.40828 9.36663C3.24025 9.49427 3.08904 9.64268 2.95828 9.8083C2.63483 10.194 2.45518 10.68 2.44995 11.1833C2.47898 11.6576 2.63824 12.1147 2.91024 12.5043C3.18223 12.8939 3.55641 13.2009 3.99162 13.3916L4.29995 12.8583L4.61662 12.3083C4.37846 12.2178 4.16835 12.0662 4.00742 11.8687C3.8465 11.6712 3.74045 11.4348 3.69995 11.1833V11.1833Z",
                fill: i,
                "data-fill": "main"
            }), l.jsx("path", {
                d: "M10.05 7.05831C9.91934 6.89016 9.76817 6.739 9.60002 6.60831C9.44216 6.47566 9.27193 6.35846 9.09169 6.25831C8.74522 6.66059 8.28688 6.95068 7.77502 7.09164C8.05559 7.16618 8.32273 7.28428 8.56669 7.44164C8.76554 7.558 8.9408 7.71065 9.08335 7.89164C9.22259 8.05152 9.30211 8.25472 9.30835 8.46664C9.30546 8.62716 9.25627 8.78342 9.16669 8.91664L9.76669 9.12498L10.3584 9.33331C10.4852 9.07352 10.5535 8.78904 10.5584 8.49998C10.5674 7.97399 10.387 7.46228 10.05 7.05831V7.05831ZM4.43335 9.44998C4.24163 9.33383 4.07228 9.18424 3.93335 9.00831C3.78561 8.85333 3.7032 8.64743 3.7032 8.43331C3.7032 8.21919 3.78561 8.01329 3.93335 7.85831C4.07228 7.68238 4.24163 7.53279 4.43335 7.41664C4.67679 7.25636 4.94395 7.13544 5.22502 7.05831C4.71598 6.92156 4.26181 6.63043 3.92502 6.22498C3.74189 6.32787 3.5689 6.44785 3.40835 6.58331C3.23823 6.71173 3.08678 6.86318 2.95835 7.03331C2.63086 7.41659 2.45093 7.90417 2.45093 8.40831C2.45093 8.91245 2.63086 9.40003 2.95835 9.78331C3.08678 9.95344 3.23823 10.1049 3.40835 10.2333C3.57002 10.3688 3.74608 10.4862 3.93335 10.5833C4.35943 10.8216 4.82078 10.9904 5.30002 11.0833L5.63335 10.5083L5.95835 9.99998C5.71021 9.97016 5.46494 9.91999 5.22502 9.84998C4.94291 9.75627 4.67616 9.62148 4.43335 9.44998V9.44998Z",
                fill: i,
                "data-fill": "main"
            }), l.jsx("path", {
                d: "M6.49995 2.875C4.23328 2.875 2.44995 4.10833 2.44995 5.68333C2.45518 6.18668 2.63483 6.67263 2.95828 7.05833C3.22627 7.39661 3.5574 7.67963 3.93328 7.89167C4.72185 8.31467 5.60519 8.52977 6.49995 8.51667C7.40013 8.53077 8.28911 8.3157 9.08328 7.89167C9.45617 7.67875 9.78441 7.39578 10.05 7.05833C10.3734 6.67263 10.5531 6.18668 10.5583 5.68333C10.5583 4.10833 8.77495 2.875 6.49995 2.875ZM7.77495 7.04167C7.36018 7.15913 6.93103 7.21804 6.49995 7.21667C6.06883 7.2187 5.63958 7.15978 5.22495 7.04167C4.71591 6.90492 4.26174 6.61379 3.92495 6.20833C3.7857 6.05175 3.70604 5.85113 3.69995 5.64167C3.69995 4.94167 4.84995 4.16667 6.49995 4.16667C8.14995 4.16667 9.30828 5 9.30828 5.725C9.30175 5.93538 9.22554 6.13763 9.09162 6.3C8.73525 6.67473 8.27791 6.93814 7.77495 7.05833V7.04167Z",
                fill: i,
                "data-fill": "main"
            }), l.jsx("path", {
                d: "M17.1084 4.00001C17.1084 3.70835 16.7918 3.51668 16.6001 3.66668L13.1751 6.16668C13.1302 6.20893 13.0957 6.26099 13.0742 6.31878C13.0527 6.37658 13.0449 6.43856 13.0514 6.49988C13.0578 6.56119 13.0784 6.62019 13.1114 6.67225C13.1444 6.72432 13.189 6.76804 13.2418 6.80001L14.0751 7.35001L11.6751 11.5167L8.20842 10.3083C8.16485 10.2958 8.11865 10.2958 8.07509 10.3083C7.96229 10.2706 7.83925 10.2782 7.73196 10.3295C7.62466 10.3808 7.54152 10.4719 7.50009 10.5833L4.40009 16.0417C4.34728 16.1318 4.31481 16.2324 4.30496 16.3364C4.2951 16.4403 4.30809 16.5452 4.34302 16.6436C4.37795 16.7421 4.43397 16.8317 4.50716 16.9062C4.58036 16.9807 4.66896 17.0383 4.76675 17.075C4.91057 17.1327 5.0691 17.1428 5.21907 17.1038C5.36904 17.0648 5.50257 16.9788 5.60009 16.8583L8.70009 13.1167L12.3501 14.5417H12.4584H12.5751C12.651 14.5302 12.7232 14.5008 12.7855 14.4558C12.8478 14.4109 12.8985 14.3518 12.9334 14.2833L16.0918 8.63335L17.1168 9.30001C17.3418 9.45001 17.5834 9.30001 17.5584 9.00001L17.1084 4.00001Z",
                stroke: i,
                "data-stroke": "main",
                fill: e,
                "data-fill": "secondary",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })]
        }),
        withNFT: !0
    }, {
        id: "crypto_queries",
        label: "crypto.queries",
        bigIcon: "CryptoQueriesPlugin",
        path: "crypto_queries",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsx("path", {
                d: "M9.93006 5.93002C10.7956 5.90899 11.6503 6.12698 12.4001 6.56002C12.7842 6.19541 13.2146 5.88275 13.6801 5.63002C12.6051 4.81096 11.2808 4.38719 9.93006 4.43002C7.20006 4.43002 5.06006 5.91002 5.06006 7.79002C5.06401 8.39748 5.27974 8.98453 5.67006 9.45002C5.27707 9.90995 5.06115 10.4951 5.06115 11.1C5.06115 11.705 5.27707 12.2901 5.67006 12.75C5.28192 13.2129 5.06633 13.796 5.06006 14.4C5.06006 16.04 6.67006 17.4 8.87006 17.69L10.0001 16.27C8.00006 16.27 6.63006 15.27 6.63006 14.4C6.64116 14.1446 6.74006 13.9009 6.91006 13.71C7.85947 14.2189 8.92302 14.477 10.0001 14.46C10.4258 14.4599 10.8507 14.4231 11.2701 14.35C11.0141 13.9 10.8159 13.4196 10.6801 12.92C10.4537 12.9354 10.2265 12.9354 10.0001 12.92C9.48271 12.9225 8.96762 12.8518 8.47006 12.71C7.86027 12.5435 7.31594 12.1946 6.91006 11.71C6.73277 11.524 6.63387 11.277 6.63387 11.02C6.63387 10.7631 6.73277 10.516 6.91006 10.33C7.55184 10.7164 8.26101 10.9777 9.00006 11.1C9.29495 11.1409 9.59235 11.161 9.89006 11.16C10.0399 11.1702 10.1902 11.1702 10.3401 11.16C10.3469 10.6473 10.414 10.1371 10.5401 9.64002C10.3237 9.65555 10.1064 9.65555 9.89006 9.64002C9.38703 9.64525 8.88567 9.58132 8.40006 9.45002C7.78768 9.28303 7.24029 8.93437 6.83006 8.45002C6.66297 8.25816 6.56756 8.01432 6.56006 7.76002C6.56006 6.91002 8.00006 5.93002 9.93006 5.93002Z",
                fill: i,
                "data-fill": "main"
            }), l.jsx("path", {
                d: "M19.85 7.13999C18.8451 6.36791 17.5897 5.99591 16.3264 6.09594C15.0631 6.19597 13.8819 6.76091 13.011 7.6815C12.1402 8.60209 11.6417 9.81292 11.612 11.0798C11.5822 12.3467 12.0233 13.5795 12.85 14.54L9.14 19.4C9.05912 19.5047 8.99984 19.6245 8.96559 19.7523C8.93134 19.8802 8.9228 20.0135 8.94048 20.1447C8.95815 20.2758 9.00168 20.4022 9.06854 20.5164C9.13541 20.6306 9.22428 20.7304 9.33 20.81L9.46 20.91C9.63777 21.0381 9.85088 21.108 10.07 21.11C10.2269 21.1116 10.382 21.0762 10.5227 21.0067C10.6635 20.9372 10.7858 20.8355 10.88 20.71L14.58 15.85C15.2549 16.1711 15.9926 16.3385 16.74 16.34C16.9698 16.3549 17.2002 16.3549 17.43 16.34C18.4343 16.203 19.3754 15.7715 20.1347 15.1001C20.894 14.4287 21.4374 13.5474 21.6963 12.5674C21.9552 11.5875 21.918 10.5528 21.5894 9.59398C21.2608 8.63515 20.6555 7.79515 19.85 7.17999V7.13999ZM19.63 13.41C19.3419 13.7899 18.9815 14.1092 18.5697 14.3494C18.1578 14.5897 17.7025 14.7462 17.23 14.81C16.7585 14.8758 16.2787 14.8469 15.8185 14.725C15.3583 14.603 14.9271 14.3906 14.55 14.1C13.9489 13.6388 13.5071 13.0011 13.2867 12.2762C13.0662 11.5513 13.0781 10.7756 13.3207 10.0578C13.5633 9.34003 14.0243 8.71614 14.6393 8.27358C15.2543 7.83103 15.9923 7.592 16.75 7.58999C17.5419 7.58694 18.3123 7.84726 18.94 8.32999C19.704 8.91293 20.2057 9.77507 20.3351 10.7274C20.4644 11.6796 20.2109 12.6444 19.63 13.41Z",
                fill: i,
                "data-fill": "main"
            })]
        }),
        withNFT: !0
    }, {
        id: "gas_tracker",
        label: "gas_tracker",
        bigIcon: "GasTrackerPlugin",
        path: "gas_tracker",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsxs("g", {
                clipPath: "url(#clip0_6229_18889)",
                children: [l.jsx("path", {
                    d: "M9.02 7.00005C8.66 7.00005 8.34 7.13005 8.14 7.36005C8 7.53005 7.91999 7.82005 7.94999 8.03005L8.35 10.4701C8.43 10.9301 8.85 11.2401 9.41 11.2401H11.99C12.55 11.2401 12.98 10.9301 13.05 10.4701L13.45 8.03005C13.49 7.81005 13.4 7.52005 13.26 7.35005C13.07 7.12005 12.75 6.99005 12.38 6.99005H8.99L9.02 7.00005ZM11.67 9.74005H9.76L9.55 8.50005H11.87L11.66 9.74005H11.67Z",
                    fill: i
                }), l.jsx("path", {
                    d: "M19.04 5.14003L17.96 3.14003C17.76 2.78003 17.31 2.64003 16.94 2.84003C16.58 3.04003 16.44 3.49003 16.64 3.86003L17.63 5.69003V6.25003H15.85C15.52 6.25003 15.21 6.41003 15.03 6.69003C14.85 6.96003 14.81 7.31003 14.93 7.61003L15.8 9.78003C15.91 10.07 16.19 10.25 16.5 10.25H17.64V14.23C17.64 14.51 17.41 14.75 17.12 14.75H15.26L15.53 11.24C15.14 11.02 14.82 10.67 14.65 10.24L14.2 9.11003L13.53 17.75H7.91L6.98 6.25003L13.87 6.21003C13.9 6.13003 13.94 6.06003 13.99 5.99003C14.31 5.51003 14.8 5.18003 15.34 5.06003C15.09 4.86003 14.77 4.75003 14.44 4.75003H6.98C6.58 4.75003 6.19 4.92003 5.91 5.22003C5.63 5.52003 5.49 5.92003 5.52 6.33003L6.4 17.75H5.62C5.21 17.75 4.87 18.09 4.87 18.5C4.87 18.91 5.21 19.25 5.62 19.25H15.81C16.22 19.25 16.56 18.91 16.56 18.5C16.56 18.09 16.22 17.75 15.81 17.75H15.02L15.14 16.23C15.14 16.23 15.19 16.25 15.22 16.25H17.12C18.23 16.25 19.14 15.35 19.14 14.23V5.50003C19.14 5.38003 19.11 5.25003 19.05 5.14003H19.04ZM16.6 7.75003H17.63V8.75003H17L16.6 7.75003Z",
                    fill: i
                })]
            }), l.jsx("defs", {
                children: l.jsx("clipPath", {
                    id: "clip0_6229_18889",
                    children: l.jsx("rect", {
                        width: "24",
                        height: "24",
                        fill: "white"
                    })
                })
            })]
        }),
        withNFT: !0
    }, {
        id: "gating",
        label: "gating",
        bigIcon: "GatingPlugin",
        path: "gating",
        icon: ({
            stroke: i = "currentColor",
            fill: e = "transparent",
            ...t
        }) => l.jsxs("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...t,
            children: [l.jsxs("g", {
                clipPath: "url(#clip0_6101_17485)",
                children: [l.jsx("path", {
                    d: "M11.71 2.25002H10.29C8.7658 2.25266 7.3048 2.85931 6.22703 3.93707C5.14927 5.01484 4.54262 6.47583 4.53998 8.00002V17.42C4.53998 18.038 4.78546 18.6306 5.22242 19.0676C5.65938 19.5045 6.25202 19.75 6.86998 19.75H11V16.55C10.9961 15.8139 11.2631 15.1021 11.75 14.55V3.75002C12.8771 3.75002 13.9582 4.19778 14.7552 4.99481C15.5522 5.79184 16 6.87285 16 8.00002V10.43H17.5V8.00002C17.4987 7.24191 17.3477 6.49153 17.0558 5.79188C16.7639 5.09224 16.3367 4.45711 15.7988 3.92291C15.2609 3.38871 14.6228 2.96595 13.9211 2.67888C13.2195 2.39181 12.4681 2.24607 11.71 2.25002ZM10.25 18.25H6.86998C6.75766 18.2554 6.64542 18.238 6.54005 18.1987C6.43469 18.1594 6.33841 18.0991 6.25705 18.0215C6.17569 17.9439 6.11095 17.8506 6.06676 17.7472C6.02257 17.6438 5.99985 17.5325 5.99998 17.42V8.00002C5.99993 6.87974 6.4422 5.80476 7.2306 5.00887C8.019 4.21298 9.08975 3.76056 10.21 3.75002L10.25 18.25Z",
                    fill: i,
                    "data-fill": "main"
                }), l.jsx("path", {
                    d: "M20.15 14.52V13.44C20.15 12.9705 19.9635 12.5203 19.6316 12.1884C19.2997 11.8565 18.8495 11.67 18.38 11.67H15.62C15.1506 11.67 14.7004 11.8565 14.3684 12.1884C14.0365 12.5203 13.85 12.9705 13.85 13.44V14.52C13.5018 14.6337 13.1983 14.8544 12.9828 15.1507C12.7673 15.4469 12.6509 15.8036 12.65 16.17V20.17C12.65 20.6368 12.8355 21.0844 13.1655 21.4145C13.4956 21.7446 13.9432 21.93 14.41 21.93H19.59C19.8212 21.93 20.05 21.8845 20.2635 21.796C20.4771 21.7076 20.6711 21.5779 20.8345 21.4145C20.998 21.2511 21.1276 21.057 21.2161 20.8435C21.3045 20.63 21.35 20.4011 21.35 20.17V16.17C21.3492 15.8036 21.2327 15.4469 21.0172 15.1507C20.8018 14.8544 20.4983 14.6337 20.15 14.52ZM15.62 13.17H18.38C18.4516 13.17 18.5203 13.1984 18.5709 13.2491C18.6216 13.2997 18.65 13.3684 18.65 13.44V14.44H15.35V13.44C15.35 13.4045 15.357 13.3694 15.3706 13.3367C15.3841 13.3039 15.404 13.2741 15.4291 13.2491C15.4542 13.224 15.4839 13.2041 15.5167 13.1905C15.5495 13.177 15.5846 13.17 15.62 13.17ZM19.85 20.17C19.85 20.2389 19.8226 20.3051 19.7739 20.3538C19.7251 20.4026 19.659 20.43 19.59 20.43H14.41C14.3411 20.43 14.2749 20.4026 14.2262 20.3538C14.1774 20.3051 14.15 20.2389 14.15 20.17V16.17C14.1526 16.1028 14.1811 16.0392 14.2296 15.9926C14.2781 15.9459 14.3428 15.9199 14.41 15.92H19.59C19.6573 15.9199 19.7219 15.9459 19.7704 15.9926C19.8189 16.0392 19.8474 16.1028 19.85 16.17V20.17Z",
                    fill: i,
                    "data-fill": "main"
                }), l.jsx("path", {
                    d: "M18 17.67C18 17.4048 17.8946 17.1504 17.7071 16.9629C17.5196 16.7753 17.2652 16.67 17 16.67C16.7348 16.67 16.4804 16.7753 16.2929 16.9629C16.1054 17.1504 16 17.4048 16 17.67C16.0033 17.854 16.0574 18.0335 16.1562 18.1888C16.255 18.344 16.3947 18.469 16.56 18.55L16 19.67H18L17.44 18.55C17.6053 18.469 17.745 18.344 17.8438 18.1888C17.9426 18.0335 17.9967 17.854 18 17.67Z",
                    fill: i,
                    "data-fill": "main"
                })]
            }), l.jsx("defs", {
                children: l.jsx("clipPath", {
                    id: "clip0_6101_17485",
                    children: l.jsx("rect", {
                        width: "24",
                        height: "24",
                        fill: "white"
                    })
                })
            })]
        }),
        withNFT: !0
    }])],
    W = () => {
        d();
        const i = h("dashboard-ai-char-ads");
        return {
            plugins: H,
            menus: [{
                id: "server_discovery",
                pageId: "server_discovery",
                bigIcon: "ServerDiscovery",
                icon: L,
                showAsideCaption: !0,
                unleash: {
                    feature: "server-directory-fakedoor",
                    variant: "with-server-directory-fakedoor"
                },
                tooltip: {
                    icon: N,
                    title: "Get your server Discovered",
                    description: "Lost in the Crowd? Stand Out with MEE6 Discovery! A new way of how to promote your Discord server.",
                    premium: !1
                }
            }, {
                label: "Dashboard",
                icon: j,
                path: "",
                pageId: "dashboard",
                tooltip: {
                    icon: N,
                    title: "Plugin gallery",
                    description: "Discover new plugins available for your server, or remove already enabled ones.",
                    premium: !1
                }
            }, {
                label: "Setup Wizard",
                path: "setup-wizard",
                icon: b,
                pageId: "setup-wizard",
                isBeta: !0,
                unleash: {
                    feature: "setup-wizard",
                    variantOptional: !0
                },
                tooltip: {
                    icon: N,
                    title: "AI Setup Wizard",
                    description: "Describe your ideal Discord server and AI will set it all up — channels, roles, plugins, and more.",
                    premium: !1
                }
            }, {
                label: "Leaderboard",
                path: "leaderboard",
                icon: w,
                pageId: "leaderboard",
                tooltip: {
                    icon: V,
                    title: "Climb to the top",
                    description: "Let your members compete by gaining XP for being active on your server.",
                    premium: !1
                }
            }, {
                label: "Custom Bot",
                path: "custom-bot",
                pageId: "custom_bot",
                icon: U,
                tooltip: {
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMRSURBVHgBxVRbTxNREP7Onl12S9ttMSmIFywqYjTe9cHLgzEmxngLGg1K4jXE+OyTyh8wvhnlSYKa+CJvaqIvauLdaEwQ4gUUVCgg19JCt+12e5wttLSgSHxxktmdM2fmOzNn5gzwjySEmE/MJuvl6ZyWXxUuXYLHFHBxCZxUpiQQUTUMkLyUuID4/YwA19SJOZKB2WXzMcvnhNcwLWVohPe39WDQp6IkaOCY14FOG5AilRljiT8CbqgXsw+uRoW/GFWaglWMIT/QZ6dpxTaWo7FE428dedgyGkdkOCYayeUVcbvtO+UOjj8W2vbFqPM4cTh7P9Bn5diVuaXWYJBd3DwPu4rc+EAR1vw2wgMrcYFgjuAv1BlJloWT0p77LeyWpiKQ1kvZRnf6xQYCq8EMyKCAZSW5rz0O/+VnMLbWC20KIOM4l5af9sXwoNtAMJ7MAhG4R7pHtCfEmM7nTVRKDHw4DHcO4KVGUQiBbbYcSQhKycJQXKDLmLi7ttEEvtP6Y9jEwPhBCmcr/EXwOVU4cgDphPX089iygzP4NCn1n+PgGcBCVYJK4egyg1vJ1EuZpcMbH+vTsaJsqRUFIQNKJnWy3V6kpdJiWX3gUzmOluSDziGe2KBm5zyMeAbQTMDZH0EoKRCyA0gbdkUT6BgdS62lN9W3WOTi8OfnNIcZHLWGJA8PZVJWZOR9DSAUi+U+o6GYQDvdm82fRswUD2QVKYVmsabWPt78/BQLZwDJz0xFNIAGeu4Zj0VuGU55IjUXyUtcSg5g2BBX5naiO71Oxc7owe9ehuIdhfD/iOJ2XEUlxouzs1hD+4iFgoSEMpcMTcq6O6D2/Fp+HeuYyNIBCwoR7O7HYHcIHaUKep0JvEgbKASwRJexQldywAjhmpLHz1LVRHbEKcCGQ8xqDKHpZQDNJTr2lnJ8fvcFJyNRPKFKRzPWDBH6PiSn/WfK5eoTpSyKSZQzHOz5d7MCVTfeoOU1FcnWlc+FTo2re/LMb7pX6aleyH5iGpoybWi2SZsaoFq9yLfXRQqMu6dZBP+LfgE65CGzCL/0kAAAAABJRU5ErkJggg==",
                    title: "Make your bot shine",
                    description: "Tailor your bot’s visuals and name to your server’s style. Customize your bot with Bot Personalizer.",
                    premium: !1
                }
            }, {
                label: "AI Characters",
                path: "ai-char-callout" === i ? "characters?utm_source=internal&utm_medium=ai_char_callout" : "characters",
                pageId: "characters",
                isNew: 1689086497,
                icon: R,
                unleash: {
                    feature: "ai-characters",
                    variant: "with-characters"
                },
                tooltip: {
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANGSURBVHgBzVRbaFxVFF373HNvZiaZwaaTBBMrSmosDRoI/dLaWqhGFJGKBuKf/dCvfgn+6pc/JdQvKYLYggq2COZPq33QdyiFpO/3K2lo0nSSzOPeuY9zds+9mZm+aT+7uefec84+e521195c4Hk3qk94jvtUhE3lefxz6Ecce2U1Xr5wGFOeQLlvCnM7exGtnEFGZpCphqCSh+qS9SgPDpJ6LGAwzQeFwNt+Bf8f+ws/vL4W6w78gpHaqTQxzAP3AToKgR1gYsM2mq9vyfj12ybOTY5ja2cvWosz2D97FaXuF6Po/Q8x7Nh4DcwvGDzNWt/2fDp6a8L+++w5XIYFJ0yj+49v+PoXwzTbYLjja14JgXTKgVi2THUtX6E2S5uW48mmXRd/7t5lD9cyUBUX577cRlUxspGzMVi83/ES2le8wdufAhabyGQw9N5A8N1iAWDlssgnDt9Brn6qp0dtNN7GWhcV1EUf0biL6KQHPRkAPjdQU2n6uH+V6k/kVMgzmERgL6a9tBXNTpNe3wC7GUKd9oC8gPVmClZvEzjQCE+4YO8e6JJWNVBnefwrSOm4pnKOcbShTVCNbUVD3fAhP8qCHHNfygyXIQ2oOuRCnfcg+zJJBaSkjjr4yU5YEkUs6HawX01aIu4pS02HEN2mQh0S0d4KuGC2yxrWOxmI/pSRIYD2tBFSgBU1Wqn5NLQY3EnKUZi8OYnbQYDDCfvQNIlhxQsK+kpNtxZhJPBBNoGaDLVgMe2FIvYlEinw5zsQinjx6VaaCTWmx8bs742416wuo0EQcyXIdS0mdTPWNMNalQbfUhB5GyInUCryr6NH5K6ahmUiYlGnO/QTTXgFjEHjGrRh6BjX1QjkG+eUBmY1aN7U0XyRWoxxXXmq0UctSBpb3t9cH2yhgjfg/8c2vRtXmONUBd07wBwzgVhqwvJ2WCjwjQTMRvGzLZiL54SHjEc466ej7ax5A5tqw2hhWNdomJGxAIcqxRJ+3r/H/v2tIazJd0OmumjzIwyTGz6hUiyr96/3qm62VitFPX6VuoTJVpOoVGbp0plxMVoJEEmCm2vDqLTR2YjHM9jIt5z1PLTLKlLCMjFWUrI70VrMP/z7ev7tLoDqaVXgKFtbAAAAAElFTkSuQmCC",
                    title: "AI-powered members",
                    description: "Spice up your server with your favorite real life or fantasy characters that can talk with members.",
                    premium: !1
                }
            }, {
                label: "MEE6 AI",
                path: "ai",
                icon: b,
                pageId: "ai",
                tooltip: {
                    icon: S,
                    title: "MEE6 AI Plans & Pricing",
                    description: "Unlock the power of AI and discover what MEE6 AI can do for your server!",
                    premium: !1
                }
            }, {
                label: "Settings",
                path: "settings",
                icon: I,
                pageId: "settings",
                tooltip: {
                    icon: N,
                    title: "Adjust your server's MEE6 bot",
                    description: "Fine-tune your experience and access MEE6’s behavior settings on your server.",
                    premium: !1
                }
            }, {
                label: "Premium",
                path: "premium",
                icon: u,
                pageId: "premium",
                onClick: () => C.trackPremiumInteraction("sidebar-button").catch(console.error),
                tooltip: {
                    icon: Q,
                    title: "Unlock every MEE6 Premium plugin",
                    description: "Manage your premium subscription and get to the next level of your MEE6 experience.",
                    premium: !1
                }
            }, {
                label: "Emojis",
                path: "emojis",
                icon: M,
                pageId: "emojis",
                unleash: {
                    feature: "emojis",
                    variant: "with-emojis"
                },
                isNew: 1691343076,
                tooltip: {
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANpSURBVHgBtZRdaBxVFMf/587szOxmk83HbtJsQkJjQq2toZBa60dIBQXBgoroq4gvRgR9sO9LQfTBR7Eton3RFy34qBTRopGatgimGvtB000abZvdjd2v7M7OzL2eme1sGkhLHto/DDNz5twf/3PPmQvcZ9GmUaVo/GPENBMxXYPmh6wovG1xVL55jWpbBioGTR5Bp60jrTVgKrHxO0koTaBarmJ57hBV7wn0YY8dwXa203VnQl8HrIkxjBoRRBdyWJy7ghU/fnACq2/tQz1FdH1T4N5P1cidsP0PY2D/DrwbszBZcmTEUfzREFguy0tRFyefHRLTRNBI4H0OH91GTccBcOKYSuoehkPYk49gaOpRfHa14vb8VXSw5qkgzguhC8IraQOFhuRL4SV+ZkgBCs8PGXRO+Imc0xfCdg6ge2o3Pvn9v0bP2dVGC+aLGVhzlZ+PqgecWXXx4YUaLla8HkV41c/RD2SUXnNhhYse34mpfEOmr5RdTCYjGE/oOJ6tB+DXhw2UHOCGrbCjXeByWWCkTWAoKiQkzgfmlvc1xyJUbwIvXuJVvi9XKsS1dYdRbrHG7n7ONdAdIbwzauGZHuOPUo3eGDbpy8Dh4Bl4td51oNCQrt4u8zSX5F+hji7UW88fXawjyZv675L4IJs1/s4oJTJEUj+VIfeJY6oqPbT5iTM5u767Q+CWQzhf9PDygIGxtmYRNjv+ImujzPvod/PpXhMzN6lxTcGc/QpxDpX0wJWOf5SDscxBvJBKGuQqhaQpuAk2ltYk9nbqQSPmijKA+UpEBEyi0uwFLPvv+SJiLeCvb1L5dEGNdsfV4YWKxMkVB8+lIkhbhJ9yLhbXPBBzbrnrwzveFUGhgq/DLbD05giKMNCfQJm496fyDm7WJdIxQs5uusnzPccz58hmqXsY1mdq1375EydaI1XjPvtNCQPDGr7PKhx+e8R6j0vusCVKPDkWLzZW6kEu2nXC9rjOp4aY/+EsDs0vIR841qCsBIqh+w1aVKoLLnbVHVz9NouHBuKY5t9vD++haXP11wv47sQMfnQlWvPEv2Dht2nKbgrcKEVPfY5+10b/3TJ4zKqDXbjMx5q3BWBTB46rTtdBr9tAPDzS+O5qUeQHo7gRwrYMDDVxTkXaZ2GmUvB2zcPOZEjiQet/lQdhYVvHKFIAAAAASUVORK5CYII=",
                    title: "More emojis for your server",
                    description: "Add emojis to your server in one click. Choose from our library of 100,000+ emojis or create your own.",
                    premium: !1
                }
            }]
        }
    },
    P = ({
        pluginId: i
    }) => {
        const e = s(),
            {
                locale: A
            } = d(),
            {
                guild: n,
                applyGuild: a
            } = o(),
            r = n?.plugins?.[i],
            [l, c] = t.useState(!1),
            {
                plugins: h
            } = W();
        return {
            updatePluginConfig: async (t, s = !1) => {
                c(!0);
                const o = await g.patchPluginConfig(i, n.id, t);
                if (o.ok) {
                    a(k.PLUGIN_CONFIG_UPDATE({
                        plugin_id: r.id,
                        config: o.data
                    }, n));
                    const i = h.find((i => i.plugins?.find((i => i.id === r.id || i.plugin === r.id))));
                    p("plugin_updated", {
                        plugin_label: r.id,
                        plugin_category: i?.id ?? "",
                        plugin_enabled: t.enabled,
                        plugin_config: {
                            ...t
                        }
                    }, n), c(!1), o.data.enabled || s || e(`/${A}/dashboard/${n.id}`)
                }
                c(!1)
            },
            loading: l,
            config: r?.config ? r.config : {
                buffs: [],
                enabled: !0
            }
        }
    };
export {
    k as G, H as P, Q as T, E as a, W as b, x as c, B as d, P as u
};
