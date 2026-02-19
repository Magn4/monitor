import {
    j as e,
    f as s,
    F as a
} from "./index-684a1b71.js";
import {
    G as t
} from "./app-91bc7f76.js";
const l = ({
    options: l = [],
    value: r,
    disabled: i,
    size: n = "sm",
    className: x = "",
    onChange: o
}) => e.jsx("div", {
    className: s(`flex w-full justify-center ${x}`, {
        "lg:justify-start": -1 === x.indexOf("justify-")
    }),
    children: e.jsx("div", {
        className: s("bg-grey-700 select-none p-1 rounded-lg self-start flex items-center w-auto gap-1", {
            "cursor-not-allowed\t": i
        }),
        children: l.map(((l, x) => e.jsx("div", {
            className: s("cursor-pointer rounded py-4 px-6 flex flex-1 justify-center items-center text-base transition-all text-dark-400 hover:text-dark-100 duration-200 hover:bg-brand-default relative", {
                "bg-grey-400 text-white": r === l.value,
                "cursor-not-allowed\t": i,
                "lg:!pl-10": l.isPremium
            }),
            style: {
                boxShadow: r === l.value ? "2px 2px 3px rgba(0, 0, 0, 0.2), inset 0px 1px 0px rgba(255, 255, 255, 0.08), inset 0px -5px 24px rgba(0, 0, 0, 0.15)" : "none"
            },
            onClick: () => o(l.value),
            children: e.jsx("div", {
                className: "flex",
                children: e.jsxs("div", {
                    className: "leading-4 tracking-wider whitespace-nowrap " + ("sm" === n ? "text-xs" : "text-sm"),
                    children: [l.isPremium && e.jsx("div", {
                        className: "absolute left-2.5 top-2.5",
                        children: e.jsx(t, {})
                    }), e.jsx(a, {
                        id: l.name,
                        values: l.formattedValues
                    })]
                })
            })
        }, x)))
    })
});
export {
    l as I
};
