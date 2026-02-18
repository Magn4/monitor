import {
    r as e,
    S as t,
    p as s,
    j as l,
    f as a,
    F as r
} from "./index-afe8eeea.js";
const i = ({
    value: i = !1,
    disabled: n = !1,
    className: d,
    title: o,
    description: c,
    displayTextToggle: x = !1,
    onChange: m = (e => {}),
    labelPosition: u = "right",
    disableGtm: f = !1,
    size: p = "medium",
    eventLabel: g = "",
    gold: h = !1
}) => {
    const b = e.useRef(null),
        j = `checkbox-${t()}`;
    s(b);
    const v = e => {
        n || (e.stopPropagation(), e.preventDefault(), m(!i))
    };
    return l.jsx("div", {
        ref: b,
        className: a(`flex justify-start cursor-pointer gap-2.5 ${d}`, {
            "items-center": !o || !c,
            "items-start": o && c
        }),
        children: l.jsxs("div", {
            className: a("flex justify-start cursor-pointer gap-2.5", {
                "items-center": !o || !c,
                "items-start": o && c,
                "flex-row": "right" === u,
                "flex-row-reverse": "left" === u
            }),
            children: [l.jsxs("div", {
                className: a("shrink-0 rounded-full transition-all duration-200 overflow-hidden relative", {
                    "bg-brand-default": !n && i && !h,
                    "bg-[#de9d41]": !n && i && h,
                    "bg-dark-400": !n && !i,
                    "cursor-not-allowed bg-opacity-50 bg-dark-400": n,
                    "cursor-pointer": !n,
                    "h-[28px] w-[56px]": "medium" === p,
                    "h-[20px] w-[35px]": "small" === p
                }),
                onClick: v,
                children: ["medium" === p && x && l.jsx("div", {
                    className: `absolute left-0 top-0 w-full h-full flex items-center ${i?"justify-start":"justify-end"} px-1.5`,
                    children: l.jsx("div", {
                        className: a("text-xs font-semibold", {
                            "text-dark-400": n,
                            "text-dark-100": i && !n,
                            "text-dark-200": !i && !n
                        }),
                        translate: "no",
                        children: i ? "ON" : "OFF"
                    })
                }), l.jsx("div", {
                    className: a("rounded-full top-1 absolute transition-all duration-200 transform flex items-center justify-center", {
                        "translate-x-8": i && "medium" === p,
                        "translate-x-5": i && "small" === p,
                        "left-1": !i,
                        "bg-grey-100": !n,
                        "bg-dark-400": n,
                        "h-5 w-5": "medium" === p,
                        "h-3 w-3": "small" === p
                    }),
                    children: "medium" === p && l.jsx("div", {
                        className: a("h-2 w-2 rounded-full transition-all duration-200", {
                            "scale-0": !i,
                            "bg-brand-default ": !n && i,
                            "bg-dark-600": n && i
                        })
                    })
                })]
            }), (o || c) && l.jsxs("label", {
                htmlFor: j,
                className: a("select-none cursor-pointer flex flex-col gap-0.5", {
                    "!cursor-not-allowed": n
                }),
                children: [o ? l.jsx("div", {
                    className: "text-dark-100 text-base",
                    onClick: v,
                    children: "string" == typeof o ? l.jsx(r, {
                        id: o
                    }) : o
                }) : null, c ? l.jsx("div", {
                    className: "text-dark-300 text-sm max-w-field flex",
                    onClick: v,
                    children: "string" == typeof c ? l.jsx(r, {
                        id: c
                    }) : c
                }) : null]
            })]
        })
    })
};
export {
    i as T
};
