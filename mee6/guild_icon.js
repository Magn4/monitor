import {
    j as e,
    s
} from "./index-8524466f.js";
const a = ({
    guild: a,
    className: n
}) => {
    const c = a?.name && a?.name.replace("'s", "").match(/\b\w/g),
        r = c ? c.slice(0, 3).join("") : a?.name ? a?.name.substr(0, 3) : "";
    return a.icon && "None" !== a.icon ? e.jsx("img", {
        src: s(a),
        className: `rounded-full ${n}`,
        alt: "guild-icon"
    }) : e.jsx("div", {
        className: `rounded-full bg-dark-700 text-dark-100 uppercase flex justify-center items-center font-semibold ${n}`,
        children: r || "N/A"
    })
};
export {
    a as G
};
