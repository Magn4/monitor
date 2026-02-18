import {
    a1 as n,
    p as a,
    r as e,
    y as t,
    t as r,
    d as i,
    ay as s,
    ak as o,
    aM as l,
    j as c
} from "./index-afe8eeea.js";
import {
    T as d
} from "./TemplatedSVG-b30fbaba.js";
import {
    e as g
} from "./app-ba64cf70.js";
const u = () => n.get("/users/@me/guilds/settings"),
    p = () => n.get("/users/@me/guilds"),
    f = (a, e) => n.patch(`/users/@me/guilds/${a}/settings`, e),
    x = r => {
        const i = a(),
            [s, o] = e.useState(null),
            l = t(),
            {
                data: c,
                status: d
            } = g(["getRankCardConfig", r], (async () => {
                const a = await (a => n.get("/plugins/levels/rank-card/config" + (a ? "?guild_id=" + a : "")))(r);
                if (a.ok && a.data) return a.data
            })),
            {
                data: u,
                status: p
            } = g(["getRankCardBackgrounds", r], (async () => {
                const a = await (a => n.get("/plugins/levels/rank-card/backgrounds" + (a ? "?guild_id=" + a : "")))(r);
                return a.ok && a.data ? a.data : {
                    backgrounds: []
                }
            }));
        return {
            config: c,
            saveConfig: async a => {
                const e = await ((a, e) => n.patch("/plugins/levels/rank-card/config" + (e ? "?guild_id=" + e : ""), a))({
                    background_id: a.background_id,
                    front_color: a.front_color,
                    overlay_opacity: a.overlay_opacity
                }, r);
                i("edit_rank_card_success"), e.ok && e.data && l.setQueryData(["getRankCardConfig", r], (n => e.data))
            },
            backgrounds: u?.backgrounds || [],
            removeBackground: async a => {
                const e = await ((a, e) => n.delete(`/plugins/levels/rank-card/backgrounds/${a}${e?"?guild_id="+e:""}`))(a, r);
                e.ok && l.setQueryData(["getRankCardBackgrounds", r], (n => ({
                    backgrounds: n?.backgrounds.filter((n => n.id !== a))
                })))
            },
            uploadBackground: a => new Promise(((e, t) => {
                const {
                    width: i,
                    height: s
                } = a.getDimensions(), c = document.createElement("canvas");
                a.isVertical() ? (c.width = 2 * s, c.height = 2 * i) : (c.width = 2 * i, c.height = 2 * s), a.paintImage(c.getContext("2d"), a.state.image, 0, 2), c.toBlob((async a => {
                    a ? (await ((a, e) => {
                        const t = new FormData;
                        return t.append("background", a, "blob.jpeg"), n.post("/plugins/levels/rank-card/backgrounds" + (e ? "?guild_id=" + e : ""), t, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        })
                    })(a, r), l.refetchQueries(["getRankCardBackgrounds", r]), o(null), e()) : e()
                }), "image/jpeg", 1)
            })),
            file: s,
            setFile: o,
            loading: "loading" === d || "loading" === p
        }
    },
    h = "_svgContainer_bpuxs_1",
    k = ({
        fields: n,
        guildId: a,
        className: e = ""
    }) => {
        const {
            config: t,
            backgrounds: g
        } = x(a), u = r(), {
            user: p
        } = i();
        let f, k, y = l.brand.default;
        if (!t) return null;
        n ? (void 0 !== n.front_color && (y = `#${n.front_color.toString(16).padStart(6,"0")}`), void 0 !== n.background_id && n.background_id && (f = g.find((a => a.id === n.background_id))), k = void 0 === n.overlay_opacity ? 75 : n.overlay_opacity) : (y = s(t.front_color), f = g.find((n => n.id === t.background_id)), k = t.overlay_opacity);
        const m = {
            avatar_img: o(p),
            background_img: f && f.url,
            current_xp: 429,
            front_color: y,
            level: 12,
            level_key: u.formatMessage({
                id: "plugins.levels.guild.rankCard.level"
            }),
            overlay_opacity: k / 100,
            progress_bar_width: 150,
            rank: 44,
            rank_key: u.formatMessage({
                id: "plugins.levels.guild.rankCard.rank"
            }),
            status_color: l.success.default,
            tag: p.discriminator,
            total_xp: 1337,
            username: p.username
        };
        return c.jsx(d, {
            className: `h-auto w-full rounded-lg overflow-hidden ${h} ${e}`,
            template: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="467px"\n     height="141px" viewBox="0 0 467 141">\n    <defs>\n        <style>\n            @import url(\'https://fonts.googleapis.com/css?family=Poppins\');\n\n            @font-face {\n                font-family: \'DejaVu\';\n                src: local(\'DejaVu\'), url(\'https://cdn.jsdelivr.net/npm/dejavu-sans@1.0.0/fonts/dejavu-sans-webfont.ttf\');\n            }\n        </style>\n\n    </defs>\n\n    \x3c!-- Background picture --\x3e\n    {{#if background_img}}\n        <clipPath id="clip">\n            <rect id="rect" width="467px" height="141px" rx="3" ry="3"/>\n        </clipPath>\n\n        <image clip-path="url(#clip)" width="467" height="141" xlink:href="{{background_img}}"/>\n    {{else}}\n        <rect id="rect" width="100%" height="100%" rx="3" ry="3" style="fill:#23272A;"/>\n    {{/if}}\n\n\n    \x3c!-- Rounded rectangle in the center --\x3e\n    <rect y="18" x="12" rx="3" ry="3" width="443" height="105" style="fill:black;opacity:{{overlay_opacity}};"/>\n\n\n    \x3c!-- === Avatar. ===\n         Radius of circle = rc = 40px\n         Width of circle = height of circle = rc * 2 = 80px\n         margin left of avatar = mla = 21px\n         margin top of avatar = mta = 31px --\x3e\n    \x3c!-- Border of avatar.\n         This border is made by a frame that is bigger than the avatar and behind it\n         centered at the same point.\n\n         Width of border = wb = 4px\n         Radius of border = rb = rc + wb/2 = 42px\n          --\x3e\n    <circle r="42" cx="61" cy="71" style="fill: black;"/>\n    <clipPath id="clipCircle">\n        \x3c!-- cx = mla + r = 21 + 40 = 61\n             cy = mta + r = 31 + 40 = 71 --\x3e\n        <circle r="40" cx="61" cy="71"/>\n    </clipPath>\n    <image x="21" y="31" width="80" height="80" clip-path="url(#clipCircle)" xlink:href="{{avatar_img}}"/>\n\n    \x3c!-- Activity status --\x3e\n    <circle r="12" cx="92" cy="97" style="fill: black;"/>\n    <circle r="10" cx="92" cy="97" style="fill: {{status_color}};"/>\n\n    \x3c!-- Rank and level --\x3e\n    <text x="441" y="50" font-family="Poppins" font-size="12" text-anchor="end"\n          style="stroke: black; stroke-width: 0.2px">\n        <tspan fill="white">\n            {{rank_key}}\n            <tspan font-size="30">\n                #{{rank}}\n            </tspan>\n        </tspan>\n        <tspan fill="{{front_color}}">\n            {{level_key}}\n            <tspan font-size="30">{{level}}</tspan>\n        </tspan>\n    </text>\n\n\n    \x3c!-- Username + tag --\x3e\n    <text x="137" y="83" font-family="DejaVu" font-size="{{username_font_size}}" fill="white">\n        {{username}}\n    </text>\n\n    \x3c!-- Exp points --\x3e\n    <text x="441" y="83" font-family="Poppins" font-size="12" fill="white" text-anchor="end">\n        {{current_xp}}\n        <tspan style="fill: #7F8384"> / {{total_xp}} XP</tspan>\n    </text>\n\n    \x3c!-- === Progress bar === --\x3e\n    \x3c!-- simulate an outer stroke --\x3e\n    <rect x="128" y="91" rx="12" ry="12" width="318" height="20" style="fill:black;"/>\n    \x3c!-- background color of progress bar--\x3e\n    <rect x="129" y="92" rx="9" ry="9" width="316" height="18" style="fill:#484B4E;"/>\n    \x3c!-- actual progress bar.\n         be careful when computing width: full width is 316px.\n         Minimum width should be either 0px or 18px for better looking because of border radius --\x3e\n    <rect x="129" y="92" rx="9" ry="9" width="{{progress_bar_width}}" height="18" style="fill:{{front_color}};"/>\n\n</svg>\n',
            data: m
        })
    };
export {
    k as R, u as a, p as g, f as p, x as u
};
