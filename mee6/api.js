import {
    n as s
} from "./index-8524466f.js";
const e = e => s.get(`/memberships/latest/guilds/${e}/plans`),
    i = (e, i) => s.get(`/memberships/latest/users/${e}/subscriptions${i?`?guild_id=${i}`:""}`),
    t = e => s.get(`/memberships/guilds/${e}/config`),
    g = e => s.get(`/memberships/guilds/vanity/${e}/config`);
export {
    i as a, t as b, g as c, e as g
};
