import {
    b as s,
    j as e,
    F as a,
    L as r,
    B as t
} from "./index-67e26437.js";
import {
    b as l
} from "./app-36ea11eb.js";
import {
    G as i
} from "./page_view-5df095da.js";
const x = () => {
    const {
        locale: x
    } = s();
    return e.jsx(i, {
        children: e.jsxs("div", {
            className: "min-h-full bg-dark-700",
            children: [e.jsx(l, {}), e.jsxs("div", {
                className: "w-full mx-auto max-w-2xl grid grid-cols-1 gap-5 text-center mt-20",
                children: [e.jsx("img", {
                    src: "/assets/401Illustration-9306549c.svg",
                    alt: "401 Unauthorized",
                    className: "w-full max-w-[560px]"
                }), e.jsx("p", {
                    className: "text-dark-100 text-h4 font-bold",
                    children: e.jsx(a, {
                        id: "errors.401.title"
                    })
                }), e.jsxs("div", {
                    children: [e.jsx("p", {
                        className: "text-dark-300 text-base",
                        children: e.jsx(a, {
                            id: "errors.401.description"
                        })
                    }), e.jsx("p", {
                        className: "text-dark-300 text-base",
                        children: e.jsx(a, {
                            id: "errors.401.description_2",
                            values: {
                                support: s => e.jsx("span", {
                                    className: "text-brand-default",
                                    children: s
                                })
                            }
                        })
                    })]
                }), e.jsx(r, {
                    to: `/${x}`,
                    children: e.jsx(t, {
                        className: "mx-auto mt-4",
                        size: "large",
                        children: e.jsx(a, {
                            id: "errors.404.button"
                        })
                    })
                })]
            })]
        })
    })
};
export {
    x as E
};
