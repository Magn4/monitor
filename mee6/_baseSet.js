import {
    _ as r
} from "./_getAllKeysIn-15f6bc15.js";
import {
    _ as o,
    a as t,
    b as a
} from "./_baseIteratee-2fc96153.js";
import {
    i as e
} from "./app-61e5c911.js";
var s = r,
    i = o,
    n = t,
    p = e,
    _ = a;
var f = function(r, o, t, a) {
    if (!p(r)) return r;
    for (var e = -1, f = (o = i(o, r)).length, v = f - 1, m = r; null != m && ++e < f;) {
        var u = _(o[e]),
            l = t;
        if ("__proto__" === u || "constructor" === u || "prototype" === u) return r;
        if (e != v) {
            var c = m[u];
            void 0 === (l = a ? a(c, u, m) : void 0) && (l = p(c) ? c : n(o[e + 1]) ? [] : {})
        }
        s(m, u, l), m = m[u]
    }
    return r
};
export {
    f as _
};
