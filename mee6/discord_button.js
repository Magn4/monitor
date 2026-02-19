import {
    a,
    b as s,
    d as e,
    j as d,
    B as o,
    g as r,
    o as l
} from "./index-684a1b71.js";
import {
    D as t,
    I as c,
    m as i
} from "./app-91bc7f76.js";
const m = ({
    label: m,
    theme: n = "primary",
    className: h
}) => {
    const _ = a(),
        {
            locale: b
        } = s(),
        {
            user: x
        } = e();
    return d.jsx(o, {
        size: "large",
        theme: n,
        className: h,
        onClick: () => {
            const a = r()?.toString(),
                s = a ? "&" + a : "";
            i("home_add_to_discord_click", null, {
                label: m
            }), x ? (i("home_add_to_discord_dashboard", null, {
                label: m
            }), _(`/${b}/dashboard`)) : (_({
                search: `?redirect=/${b}/dashboard${s}`
            }), i("home_add_to_discord_login", null, {
                label: m
            }), l())
        },
        children: d.jsxs("div", {
            className: "flex items-center gap-2 justify-center",
            children: [d.jsx(t, {
                className: ("white" === n ? "text-discord-default" : "text-dark-100") + " w-5"
            }), d.jsx(c, {
                id: "home.hero.button.addToDiscord"
            })]
        })
    })
};
export {
    m as A
};
