import {
    j as e,
    F as t
} from "./index-afe8eeea.js";
const s = s => e.jsxs("label", {
    ...s,
    className: `text-sm font-medium text-dark-400 mb-2 flex items-start max-w-max justify-start ${s.className||""}`,
    children: ["string" == typeof s.contentKey ? e.jsx(t, {
        id: s.contentKey
    }) : "string" == typeof s.children ? e.jsx(t, {
        id: s.children
    }) : s.children, s.required && e.jsx("span", {
        className: "text-danger-default ml-1",
        children: "*"
    })]
});
export {
    s as L
};
