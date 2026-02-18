import {
    e as r
} from "./index-afe8eeea.js";
import {
    _ as n
} from "./_baseFlatten-6e3fcbd1.js";
import {
    _ as t
} from "./_baseOrderBy-1a8c154d.js";
import {
    h as e,
    l as a,
    i,
    a as o
} from "./_baseIteratee-30f45b1d.js";
import {
    _ as u
} from "./_defineProperty-15ba29dd.js";
import {
    i as s
} from "./app-ba64cf70.js";
var f = function(r, n, t) {
        switch (t.length) {
            case 0:
                return r.call(n);
            case 1:
                return r.call(n, t[0]);
            case 2:
                return r.call(n, t[0], t[1]);
            case 3:
                return r.call(n, t[0], t[1], t[2])
        }
        return r.apply(n, t)
    },
    l = Math.max;
var c = function(r, n, t) {
    return n = l(void 0 === n ? r.length - 1 : n, 0),
        function() {
            for (var e = arguments, a = -1, i = l(e.length - n, 0), o = Array(i); ++a < i;) o[a] = e[n + a];
            a = -1;
            for (var u = Array(n + 1); ++a < n;) u[a] = e[a];
            return u[n] = t(o), f(r, this, u)
        }
};
var m = function(r) {
        return function() {
            return r
        }
    },
    p = u,
    v = p ? function(r, n) {
        return p(r, "toString", {
            configurable: !0,
            enumerable: !1,
            value: m(n),
            writable: !0
        })
    } : e,
    h = Date.now;
var g = function(r) {
        var n = 0,
            t = 0;
        return function() {
            var e = h(),
                a = 16 - (e - t);
            if (t = e, a > 0) {
                if (++n >= 800) return arguments[0]
            } else n = 0;
            return r.apply(void 0, arguments)
        }
    }(v),
    b = e,
    y = c,
    _ = g;
var j = a,
    d = i,
    w = o,
    x = s;
var A = n,
    I = t,
    B = function(r, n, t) {
        if (!x(t)) return !1;
        var e = typeof n;
        return !!("number" == e ? d(t) && w(n, t.length) : "string" == e && n in t) && j(t[n], r)
    };
const D = r(function(r, n) {
    return _(y(r, n, b), r + "")
}((function(r, n) {
    if (null == r) return [];
    var t = n.length;
    return t > 1 && B(r, n[0], n[1]) ? n = [] : t > 2 && B(n[0], n[1], n[2]) && (n = [n[0]]), I(r, A(n, 1), [])
})));
export {
    D as s
};
