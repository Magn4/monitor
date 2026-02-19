import {
    e as r,
    h as n,
    d as t,
    j as e,
    f as a
} from "./_baseIteratee-cd21cbb3.js";
import {
    _ as i
} from "./_baseMap-4ff63758.js";
import {
    W as u
} from "./app-91bc7f76.js";
import {
    a as o
} from "./isArguments-8420dec1.js";
var f = u;
var s = function(r, n) {
    if (r !== n) {
        var t = void 0 !== r,
            e = null === r,
            a = r == r,
            i = f(r),
            u = void 0 !== n,
            o = null === n,
            s = n == n,
            v = f(n);
        if (!o && !v && !i && r > n || i && u && s && !o && !v || e && u && s || !t && s || !a) return 1;
        if (!e && !i && !v && r < n || v && t && a && !e && !i || o && t && a || !u && a || !s) return -1
    }
    return 0
};
var v = r,
    c = t,
    l = a,
    m = i,
    p = function(r, n) {
        var t = r.length;
        for (r.sort(n); t--;) r[t] = r[t].value;
        return r
    },
    d = e,
    g = function(r, n, t) {
        for (var e = -1, a = r.criteria, i = n.criteria, u = a.length, o = t.length; ++e < u;) {
            var f = s(a[e], i[e]);
            if (f) return e >= o ? f : f * ("desc" == t[e] ? -1 : 1)
        }
        return r.index - n.index
    },
    h = n,
    j = o;
var x = function(r, n, t) {
    n = n.length ? v(n, (function(r) {
        return j(r) ? function(n) {
            return c(n, 1 === r.length ? r[0] : r)
        } : r
    })) : [h];
    var e = -1;
    n = v(n, d(l));
    var a = m(r, (function(r, t, a) {
        return {
            criteria: v(n, (function(n) {
                return n(r)
            })),
            index: ++e,
            value: r
        }
    }));
    return p(a, (function(r, n) {
        return g(r, n, t)
    }))
};
export {
    x as _
};
