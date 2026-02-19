import {
    i as r,
    a,
    _ as o
} from "./isArguments-c33762eb.js";
import {
    _ as t
} from "./app-36ea11eb.js";
var n = r,
    s = a,
    e = t ? t.isConcatSpreadable : void 0;
var i = o,
    p = function(r) {
        return s(r) || n(r) || !!(e && r && r[e])
    };
var v = function r(a, o, t, n, s) {
    var e = -1,
        v = a.length;
    for (t || (t = p), s || (s = []); ++e < v;) {
        var f = a[e];
        o > 0 && t(f) ? o > 1 ? r(f, o - 1, t, n, s) : i(s, f) : n || (s[s.length] = f)
    }
    return s
};
export {
    v as _
};
