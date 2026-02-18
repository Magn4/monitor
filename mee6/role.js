import {
    z as o,
    j as e,
    f as a,
    M as s,
    N as r
} from "./index-afe8eeea.js";
import {
    E as l
} from "./emoji-bee45a1e.js";
import {
    C as t
} from "./modal.constants-0cca4730.js";
const c = ({
    role: c,
    error: i = !1,
    onDelete: n,
    className: d
}) => {
    const {
        guild: m
    } = o();
    return e.jsxs("div", {
        className: a(`max-w-max whitespace-nowrap rounded-full flex items-center justify-start text-sm font-regular font-medium pr-2 pl-1 py-0.5 gap-1 ${d}`, {
            "bg-danger-default text-danger-default bg-opacity-20": i,
            "bg-dark-100 bg-opacity-[0.08] text-dark-100": !i
        }),
        style: !i && c?.color ? {
            backgroundColor: s(c.color, .08),
            color: s(c.color)
        } : {},
        children: [c.color ? e.jsx("div", {
            className: "h-4 w-4 rounded-full",
            style: {
                backgroundColor: s(c.color)
            }
        }) : null, (c.unicode_emoji || c.icon) && e.jsx("div", {
            className: "leading-[5px]",
            children: c.unicode_emoji ? e.jsx(l, {
                name: c.unicode_emoji,
                size: 16
            }) : e.jsx("img", {
                className: "w-4 h-4",
                src: r(c),
                alt: c.name
            })
        }), c?.id === m?.id ? c.name : `@${c.name}`, n && e.jsx(t, {
            className: a("h-2 w-2 cursor-pointer ml-1", {
                "text-danger-default": i
            }),
            style: {
                color: s(c.color)
            },
            onClick: () => n && n(c.id)
        })]
    })
};
export {
    c as R
};
