import {
    W as e,
    C as s
} from "./warning-65941f11.js";
import {
    X as t
} from "./app-91bc7f76.js";
import {
    j as n,
    r as a
} from "./index-684a1b71.js";
import {
    C as i
} from "./modal.constants-e7a21a8a.js";
import {
    C as r
} from "./CSSTransition-f7f7974d.js";
import {
    u as l
} from "./load_notifications-12358295.js";
const o = ({
        level: a,
        className: i
    }) => ({
        info: n.jsx(t, {
            className: i
        }),
        warning: n.jsx(e, {
            className: i
        }),
        danger: n.jsx(e, {
            className: i
        }),
        success: n.jsx(s, {
            className: i
        })
    } [a]),
    c = {
        info: "bg-dark-600 text-dark-100",
        warning: "bg-warning-default text-dark-default",
        danger: "bg-danger-default text-dark-default",
        success: "bg-success-default text-dark-default"
    },
    d = ({
        level: e = "info",
        children: s,
        elevated: t = !1,
        onClose: a = null,
        className: r,
        iconPosition: l
    }) => {
        const d = c[e]?.split(" ")?.find((e => e?.startsWith("text-")));
        return n.jsxs("div", {
            className: `flex justify-between px-6 py-4 relative ${t?"shadow rounded-md":""} ${c[e]} ${r} ${"top"===l?"items-start":"bottom"===l?"items-end":"items-center"}`,
            children: [e && n.jsx(o, {
                level: e,
                className: "mr-2 shrink-0"
            }), n.jsxs("div", {
                className: "flex grow items-center",
                children: [n.jsx("div", {
                    className: "grow mr-2 flex justify-between items-center relative",
                    children: s
                }), n.jsx(i, {
                    onClick: a,
                    className: `cursor-pointer w-2.5 shrink-0 ${d}`
                })]
            })]
        })
    },
    m = {
        info: "text-dark-300",
        warning: "text-warning-default",
        danger: "text-danger-default",
        success: "text-success-default"
    },
    x = ({
        level: e = "info",
        children: s,
        elevated: t = !1,
        onClose: a = null,
        className: r,
        iconPosition: l = "center"
    }) => {
        const c = m[e].split(" ").find((e => e.startsWith("text-")));
        return n.jsxs("div", {
            className: `flex justify-between px-6 py-4 relative bg-dark-default text-dark-100 rounded-lg ${t?"shadow-lg rounded-md":""} ${r} ${"top"===l?"items-start":"bottom"===l?"items-end":"items-center"}`,
            children: [n.jsx(o, {
                level: e,
                className: `mr-4 shrink-0 w-6 h-6 ${c}`
            }), n.jsxs("div", {
                className: "flex grow items-center",
                children: [n.jsx("div", {
                    className: "grow mr-2 flex justify-between items-center",
                    children: s
                }), n.jsx(i, {
                    onClick: a,
                    className: "cursor-pointer shrink-0 w-3 h-3"
                })]
            })]
        })
    },
    f = ({
        level: e = "info",
        theme: s = "banner",
        children: t,
        persistClosed: i,
        show: l = !0,
        elevated: o = !1,
        onClose: c = null,
        className: m,
        iconPosition: f = "center",
        bannerId: u = window.location.href
    }) => {
        const h = a.useRef(),
            [j, v] = a.useState(!1);
        a.useEffect((() => {
            if (i) {
                const e = JSON.parse(localStorage.getItem(u));
                v(!e || !e.closed)
            } else v(l)
        }), [l]);
        const g = {
            onClose: () => {
                c ? c() : (v(!1), i && localStorage.setItem(u, JSON.stringify({
                    closed: !0
                })))
            },
            elevated: o,
            className: m,
            level: e,
            iconPosition: f
        };
        return n.jsx(r, {
            in: j,
            timeout: 200,
            mountOnEnter: !0,
            unmountOnExit: !0,
            onEnter: () => h.current.style.maxHeight = "0",
            onEntered: () => h.current.style.maxHeight = h.current.scrollHeight + "px",
            onExit: () => h.current.style.maxHeight = "0",
            classNames: {
                enter: "opacity-0",
                enterActive: "opacity-1",
                exitActive: "opacity-0"
            },
            children: n.jsx("div", {
                className: "overflow-hidden transition-all pointer-events-auto",
                ref: e => h.current = e,
                children: "banner" === s ? n.jsx(d, {
                    ...g,
                    children: t
                }) : n.jsx(x, {
                    ...g,
                    children: t
                })
            })
        })
    },
    u = () => {
        const {
            notifications: e,
            removeNotification: s
        } = l();
        return n.jsx("div", {
            className: "w-full pointer-events-auto flex flex-col gap-6",
            children: e.map((e => n.jsx(f, {
                elevated: !0,
                level: e.type,
                onClose: () => s(e.id),
                children: n.jsx("div", {
                    className: "w-full relative",
                    children: e.content
                })
            }, e.id)))
        })
    };
export {
    f as A, u as N
};
