import {
    b as s,
    j as r,
    F as a,
    L as e,
    B as t
} from "./index-8524466f.js";
import {
    E as o
} from "./404Illustration-b32a696b.js";
import {
    b as i
} from "./app-3ecfb394.js";
import {
    G as d
} from "./page_view-483b54f5.js";
import "./Loader2-7697ef2c.js";
import "./modal.constants-cb2154a2.js";
import "./moment-e0d604bc.js";
const l = () => {
    const {
        locale: l
    } = s();
    return r.jsx(d, {
        data: {
            page_name: "404_error"
        },
        children: r.jsxs("div", {
            className: "min-h-full bg-dark-700",
            children: [r.jsx(i, {
                redirectToDashboard: !0
            }), r.jsxs("div", {
                className: "w-full mx-auto max-w-[560px] grid grid-cols-1 gap-5 text-center mt-20",
                children: [r.jsx("img", {
                    src: o,
                    alt: "404 Not Found MEE6",
                    className: "w-full"
                }), r.jsx("p", {
                    className: "text-dark-100 text-h4 font-bold",
                    children: r.jsx(a, {
                        id: "errors.404.title"
                    })
                }), r.jsxs("div", {
                    children: [r.jsx("p", {
                        className: "text-dark-300 text-base",
                        children: r.jsx(a, {
                            id: "errors.404.description"
                        })
                    }), r.jsx("p", {
                        className: "text-dark-300 text-base",
                        children: r.jsx(a, {
                            id: "errors.404.description_2",
                            values: {
                                support: s => r.jsx("span", {
                                    className: "text-brand-default",
                                    children: s
                                })
                            }
                        })
                    })]
                }), r.jsx(e, {
                    to: `/${l}`,
                    children: r.jsx(t, {
                        className: "mx-auto mt-4",
                        size: "large",
                        children: r.jsx(a, {
                            id: "errors.404.button"
                        })
                    })
                })]
            })]
        })
    })
};
export {
    l as Error404, l as
    default
};
