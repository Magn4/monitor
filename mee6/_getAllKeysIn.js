import {
    _ as r
} from "./_baseAssignValue-335f91a0.js";
import {
    l as t,
    m as a,
    n as o,
    s,
    o as n,
    p as e,
    i,
    q as p
} from "./_baseIteratee-063b4e62.js";
import {
    _ as u
} from "./isArguments-010ca4e1.js";
import {
    i as c
} from "./app-3ecfb394.js";
var f = r,
    v = t,
    m = Object.prototype.hasOwnProperty;
var b = function(r, t, a) {
        var o = r[t];
        m.call(r, t) && v(o, a) && (void 0 !== a || t in r) || f(r, t, a)
    },
    j = a(Object.getPrototypeOf, Object),
    O = u,
    l = j,
    y = o,
    _ = s,
    g = Object.getOwnPropertySymbols ? function(r) {
        for (var t = []; r;) O(t, y(r)), r = l(r);
        return t
    } : _;
var h = c,
    P = n,
    w = function(r) {
        var t = [];
        if (null != r)
            for (var a in Object(r)) t.push(a);
        return t
    },
    A = Object.prototype.hasOwnProperty;
var d = e,
    k = function(r) {
        if (!h(r)) return w(r);
        var t = P(r),
            a = [];
        for (var o in r)("constructor" != o || !t && A.call(r, o)) && a.push(o);
        return a
    },
    q = i;
var x = function(r) {
        return q(r) ? d(r, !0) : k(r)
    },
    I = p,
    N = g,
    S = x;
var V = function(r) {
    return I(r, S, N)
};
export {
    b as _, V as a, g as b, j as c, x as k
};
