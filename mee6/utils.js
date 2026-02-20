import {
    C as n
} from "./tinycolor-e73404c5.js";

function t(n, t = 1) {
    return `rgba(${n>>16},${n>>8&255},${255&n},${t})`
}

function a(t) {
    return parseInt(n(t).toHexString().slice(1), 16)
}

function o(n) {
    return `#${n?.toString(16)?.padStart(6,"0")}`
}

function r(n) {
    return n.avatar ? `https://cdn.discordapp.com/avatars/${n.id}/${n.avatar}.png` : `https://cdn.discordapp.com/embed/avatars/${n.discriminator%5}.png`
}

function s(n) {
    return n?.banner ? `https://cdn.discordapp.com/banners/${n.id}/${n.banner}.png?size=480` : null
}

function e(n) {
    if (n?.icon) return `https://cdn.discordapp.com/icons/${n.id}/${n.icon}.webp?size=512`
}

function i(n, t, a) {
    return new Promise((o => {
        const r = new FileReader;
        r.readAsDataURL(n), r.onload = () => {
            const n = document.createElement("canvas");
            n.style.display = "none";
            const s = n.getContext("2d"),
                e = new Image,
                i = r.result;
            e.src = i, e.onload = () => {
                n.width = e.width, n.height = e.height, s.drawImage(e, 0, 0), n.toBlob((n => {
                    if (a) return a(n, i);
                    o({
                        blob: n,
                        dataUrl: i
                    })
                }), t)
            }
        }
    }))
}
const c = (n, t) => `https://cdn.discordapp.com/emojis/${n}.${t?"gif":"png"}`,
    d = n => `https://cdn.discordapp.com/role-icons/${n.id}/${n.icon}`;
export {
    t as R, s as a, i as c, c as e, e as g, d as i, o as n, a as s, r as u
};
