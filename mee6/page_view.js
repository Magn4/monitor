import {
    r as e,
    j as t,
    d as a,
    z as n,
    an as i,
    ao as s,
    ap as u,
    aq as r
} from "./index-684a1b71.js";
const d = e.createContext({
        eventSent: !1,
        setEventSent: e => {}
    }),
    o = ({
        children: a
    }) => {
        const [n, i] = e.useState(!1);
        return t.jsx(d.Provider, {
            value: {
                eventSent: n,
                setEventSent: i
            },
            children: a
        })
    },
    c = () => e.useContext(d),
    g = ({
        children: e,
        event: n = "page_view",
        data: i
    }) => {
        const {
            loading: s
        } = a();
        return s ? e : t.jsx(l, {
            event: n,
            data: i,
            children: e
        })
    },
    l = ({
        children: t,
        event: d = "page_view",
        data: o
    }) => {
        const {
            guild: g
        } = n(), {
            loading: l
        } = a(), _ = e.useRef(""), m = window.location.pathname, p = i.useFlags(), {
            setEventSent: f
        } = c();
        return e.useEffect((() => {
            const e = window && window?.dataLayer ? window?.dataLayer : [];
            let t = {};
            if (window.location.search) {
                const e = new URLSearchParams(window.location.search);
                t = {
                    utm_source: e.get("utm_source"),
                    utm_medium: e.get("utm_medium"),
                    utm_campaign: e.get("utm_campaign"),
                    utm_term: e.get("utm_term"),
                    utm_content: e.get("utm_content")
                }
            }
            if (l) return;
            const a = e?.filter((e => "page_view" === e?.event)).pop();
            if (a && a?.page_url === m) return;
            const n = d,
                i = {
                    ...t,
                    page_name: s(m),
                    page_category: m.includes("dashboard") ? "dashboard" : "non_logged_website",
                    page_url: m,
                    page_previous_url: _.current,
                    page_environment: "production",
                    guild_buffs: g?.buffs,
                    guild_discord_features: g?.features,
                    guild_plugins: g?.plugins ? Object.values(g.plugins).filter((e => e?.config?.enabled)).map((e => e.id)) : [],
                    guild_id: g?.id,
                    guild_is_premium: g?.buffs?.includes("premium"),
                    guild_is_premium_gift: g?.buffs?.includes("premium-gift"),
                    guild_member_count: g?.member_count,
                    guild_category: g?.discord_usage,
                    guild_is_business: g?.is_business,
                    ...o
                },
                c = {
                    dataLayer: {
                        event: d,
                        ...i,
                        eventCallback: function() {
                            f(!0)
                        }
                    },
                    dataLayerName: "dataLayer"
                };
            u.dataLayer(c), r(n, i), _.current = m
        }), [location.pathname, l, p]), t
    };
export {
    o as D, g as G, c as u
};
