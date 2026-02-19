import {
    k as r,
    n as t,
    r as e,
    o as n,
    t as o,
    u as a,
    j as c,
    v as u,
    w as s,
    x as i
} from "./_baseIteratee-4d723ddc.js";
import {
    _ as b,
    k as f,
    b as j,
    c as v,
    a as y
} from "./_getAllKeysIn-c4b55636.js";
import {
    _ as p
} from "./_baseAssignValue-95532e78.js";
import {
    ag as l,
    _ as A,
    i as d,
    V as g
} from "./app-36ea11eb.js";
import {
    a as m
} from "./isArguments-c33762eb.js";
var w = function(r, t) {
        for (var e = -1, n = null == r ? 0 : r.length; ++e < n && !1 !== t(r[e], e, r););
        return r
    },
    x = b,
    h = p;
var I = function(r, t, e, n) {
        var o = !e;
        e || (e = {});
        for (var a = -1, c = t.length; ++a < c;) {
            var u = t[a],
                s = n ? n(e[u], r[u], u, e, r) : void 0;
            void 0 === s && (s = r[u]), o ? h(e, u, s) : x(e, u, s)
        }
        return e
    },
    O = I,
    U = r;
var S = function(r, t) {
        return r && O(t, U(t), r)
    },
    F = I,
    _ = f;
var B, E, M, D, V, k, N, C = function(r, t) {
        return r && F(t, _(t), r)
    },
    L = {
        exports: {}
    };
B = L, M = l, D = (E = L.exports) && !E.nodeType && E, V = D && B && !B.nodeType && B, k = V && V.exports === D ? M.Buffer : void 0, N = k ? k.allocUnsafe : void 0, B.exports = function(r, t) {
    if (t) return r.slice();
    var e = r.length,
        n = N ? N(e) : new r.constructor(e);
    return r.copy(n), n
};
var R = L.exports;
var T = function(r, t) {
        var e = -1,
            n = r.length;
        for (t || (t = Array(n)); ++e < n;) t[e] = r[e];
        return t
    },
    G = I,
    K = t;
var P = function(r, t) {
        return G(r, K(r), t)
    },
    W = I,
    $ = j;
var q = function(r, t) {
        return W(r, $(r), t)
    },
    z = Object.prototype.hasOwnProperty;
var H = function(r) {
        var t = r.length,
            e = new r.constructor(t);
        return t && "string" == typeof r[0] && z.call(r, "index") && (e.index = r.index, e.input = r.input), e
    },
    J = e;
var Q = function(r) {
        var t = new r.constructor(r.byteLength);
        return new J(t).set(new J(r)), t
    },
    X = Q;
var Y = function(r, t) {
        var e = t ? X(r.buffer) : r.buffer;
        return new r.constructor(e, r.byteOffset, r.byteLength)
    },
    Z = /\w*$/;
var rr = function(r) {
        var t = new r.constructor(r.source, Z.exec(r));
        return t.lastIndex = r.lastIndex, t
    },
    tr = A ? A.prototype : void 0,
    er = tr ? tr.valueOf : void 0;
var nr = Q;
var or = Q,
    ar = Y,
    cr = rr,
    ur = function(r) {
        return er ? Object(er.call(r)) : {}
    },
    sr = function(r, t) {
        var e = t ? nr(r.buffer) : r.buffer;
        return new r.constructor(e, r.byteOffset, r.length)
    };
var ir = function(r, t, e) {
        var n = r.constructor;
        switch (t) {
            case "[object ArrayBuffer]":
                return or(r);
            case "[object Boolean]":
            case "[object Date]":
                return new n(+r);
            case "[object DataView]":
                return ar(r, e);
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
                return sr(r, e);
            case "[object Map]":
            case "[object Set]":
                return new n;
            case "[object Number]":
            case "[object String]":
                return new n(r);
            case "[object RegExp]":
                return cr(r);
            case "[object Symbol]":
                return ur(r)
        }
    },
    br = d,
    fr = Object.create,
    jr = function() {
        function r() {}
        return function(t) {
            if (!br(t)) return {};
            if (fr) return fr(t);
            r.prototype = t;
            var e = new r;
            return r.prototype = void 0, e
        }
    }(),
    vr = v,
    yr = n;
var pr = function(r) {
        return "function" != typeof r.constructor || yr(r) ? {} : jr(vr(r))
    },
    lr = o,
    Ar = g;
var dr = function(r) {
        return Ar(r) && "[object Map]" == lr(r)
    },
    gr = c,
    mr = a && a.isMap,
    wr = mr ? gr(mr) : dr,
    xr = o,
    hr = g;
var Ir = function(r) {
        return hr(r) && "[object Set]" == xr(r)
    },
    Or = c,
    Ur = a && a.isSet,
    Sr = Ur ? Or(Ur) : Ir,
    Fr = u,
    _r = w,
    Br = b,
    Er = S,
    Mr = C,
    Dr = R,
    Vr = T,
    kr = P,
    Nr = q,
    Cr = i,
    Lr = y,
    Rr = o,
    Tr = H,
    Gr = ir,
    Kr = pr,
    Pr = m,
    Wr = s,
    $r = wr,
    qr = d,
    zr = Sr,
    Hr = r,
    Jr = f,
    Qr = {};
Qr["[object Arguments]"] = Qr["[object Array]"] = Qr["[object ArrayBuffer]"] = Qr["[object DataView]"] = Qr["[object Boolean]"] = Qr["[object Date]"] = Qr["[object Float32Array]"] = Qr["[object Float64Array]"] = Qr["[object Int8Array]"] = Qr["[object Int16Array]"] = Qr["[object Int32Array]"] = Qr["[object Map]"] = Qr["[object Number]"] = Qr["[object Object]"] = Qr["[object RegExp]"] = Qr["[object Set]"] = Qr["[object String]"] = Qr["[object Symbol]"] = Qr["[object Uint8Array]"] = Qr["[object Uint8ClampedArray]"] = Qr["[object Uint16Array]"] = Qr["[object Uint32Array]"] = !0, Qr["[object Error]"] = Qr["[object Function]"] = Qr["[object WeakMap]"] = !1;
var Xr = function r(t, e, n, o, a, c) {
    var u, s = 1 & e,
        i = 2 & e,
        b = 4 & e;
    if (n && (u = a ? n(t, o, a, c) : n(t)), void 0 !== u) return u;
    if (!qr(t)) return t;
    var f = Pr(t);
    if (f) {
        if (u = Tr(t), !s) return Vr(t, u)
    } else {
        var j = Rr(t),
            v = "[object Function]" == j || "[object GeneratorFunction]" == j;
        if (Wr(t)) return Dr(t, s);
        if ("[object Object]" == j || "[object Arguments]" == j || v && !a) {
            if (u = i || v ? {} : Kr(t), !s) return i ? Nr(t, Mr(u, t)) : kr(t, Er(u, t))
        } else {
            if (!Qr[j]) return a ? t : {};
            u = Gr(t, j, s)
        }
    }
    c || (c = new Fr);
    var y = c.get(t);
    if (y) return y;
    c.set(t, u), zr(t) ? t.forEach((function(o) {
        u.add(r(o, e, n, o, t, c))
    })) : $r(t) && t.forEach((function(o, a) {
        u.set(a, r(o, e, n, a, t, c))
    }));
    var p = f ? void 0 : (b ? i ? Lr : Cr : i ? Jr : Hr)(t);
    return _r(p || t, (function(o, a) {
        p && (o = t[a = o]), Br(u, a, r(o, e, n, a, t, c))
    })), u
};
export {
    Xr as _
};
