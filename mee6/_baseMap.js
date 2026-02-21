import {
    _ as r
} from "./_baseEach-e944a95e.js";
import {
    i as a
} from "./_baseIteratee-79fa20e9.js";
var t = r,
    e = a;
var o = function(r, a) {
    var o = -1,
        s = e(r) ? Array(r.length) : [];
    return t(r, (function(r, t, e) {
        s[++o] = a(r, t, e)
    })), s
};
export {
    o as _
};
