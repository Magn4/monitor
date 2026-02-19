import {
    k as r,
    i as n
} from "./_baseIteratee-4d723ddc.js";
var t = function(r) {
        return function(n, t, e) {
            for (var a = -1, u = Object(n), f = e(n), i = f.length; i--;) {
                var o = f[r ? i : ++a];
                if (!1 === t(u[o], o, u)) break
            }
            return n
        }
    }(),
    e = r;
var a = function(r, n) {
        return r && t(r, n, e)
    },
    u = n;
var f = function(r, n) {
    return function(t, e) {
        if (null == t) return t;
        if (!u(t)) return r(t, e);
        for (var a = t.length, f = n ? a : -1, i = Object(t);
            (n ? f-- : ++f < a) && !1 !== e(i[f], f, i););
        return t
    }
}(a);
export {
    f as _, a
};
