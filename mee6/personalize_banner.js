import {
    j as s,
    F as e
} from "./index-75d73738.js";
import {
    C as l,
    T as t
} from "./title-2d64dbce.js";
import {
    A as a
} from "./discord_button-a30a3bda.js";
const i = ({
    title: i = "home.customize.title",
    className: m
}) => s.jsx("div", {
    className: `${m} bg-brand-hover w-full`,
    children: s.jsxs(l, {
        className: "text-center py-16 lg:!pt-20 lg:!pb-16 relative z-1",
        children: [s.jsx("div", {
            className: "w-full max-w-2xl mx-auto",
            children: s.jsx(t, {
                type: "h2",
                children: s.jsx(e, {
                    id: i
                })
            })
        }), s.jsx(a, {
            label: "landing_banner",
            theme: "white",
            className: "py-3 px-10 w-full lg:w-auto mx-auto mt-8"
        })]
    })
});
export {
    i as P
};
