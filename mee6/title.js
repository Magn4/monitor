import {
    j as e,
    f as l
} from "./index-67e26437.js";
const a = ({
        children: l,
        className: a
    }) => e.jsx("div", {
        className: `mx-auto w-full max-w-[1240px] px-6 lg:px-10 py-6 lg:py-10 ${a}`,
        children: l
    }),
    s = ({
        type: a = "h3",
        size: s = "medium",
        color: t = "text-dark-100",
        className: x,
        children: m
    }) => {
        const d = a;
        return e.jsx(d, {
            className: l(`${t} ${x} font-bold`, {
                "text-[35px] leading-[42px]": "medium" === s,
                "text-h4": "small" === s,
                "text-displaySmall lg:text-displayLarge": "large" === s
            }),
            children: m
        })
    };
export {
    a as C, s as T
};
