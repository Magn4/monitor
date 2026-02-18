import {
    e as r,
    a1 as e
} from "./index-afe8eeea.js";
import {
    d as s,
    _ as t,
    e as n,
    f as a
} from "./_baseIteratee-30f45b1d.js";
import {
    _ as i
} from "./_baseSet-a40fb053.js";
import {
    a as o
} from "./_getAllKeysIn-c7db928b.js";
var u = s,
    c = i,
    m = t;
var l = n,
    _ = a,
    f = function(r, e, s) {
        for (var t = -1, n = e.length, a = {}; ++t < n;) {
            var i = e[t],
                o = u(r, i);
            s(o, i) && c(a, m(i, r), o)
        }
        return a
    },
    k = o;
const d = r((function(r, e) {
        if (null == r) return {};
        var s = l(k(r), (function(r) {
            return [r]
        }));
        return e = _(e), f(r, s, (function(r, s) {
            return e(r, s[0])
        }))
    })),
    y = r => {
        if (!r?._links) return {
            actions: {}
        };
        const s = {};
        return r && r._links && Object.keys(r._links).map((t => s[t] = ((s, t) => {
            if (!r?._links) return;
            const n = r?._links[s];
            return n ? (r, s) => e[n.method.toLowerCase()](`${n.href}${t?.queryParams?`?${new URLSearchParams(d(t.queryParams,(r=>void 0!==r)))}`:""}`, r, s) : void 0
        })(t))), {
            actions: s,
            match: e => Object.keys(r?._links || {}).some((r => e.test(r)))
        }
    },
    h = (r, s, t) => {
        const n = (n, a) => {
                if (!r || !r._links) return;
                const i = r._links[n];
                return i ? async (r, n) => {
                    const o = await e[i.method.toLowerCase()](`${(r=>{let e=r;return t&&e.includes("<gid>")&&(e=e.replace("<gid>",t.id)),e})(i.href)}${a?.queryParams?`?${new URLSearchParams(d(a.queryParams,(r=>void 0!==r)))}`:""}`, r, n);
                    return s && await s(), o
                }: void 0
            },
            a = {};
        return r && r._links && Object.keys(r._links).map((r => a[r] = n(r))), {
            actions: a,
            match: e => !(!r || !r._links) && Object.keys(r._links).some((r => e.test(r)))
        }
    };
export {
    y as a, h as u
};
