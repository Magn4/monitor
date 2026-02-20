import {
    U as r,
    V as e
} from "./app-3ecfb394.js";
var t = function(r, e) {
        for (var t = -1, a = e.length, n = r.length; ++t < a;) r[n + t] = e[t];
        return r
    },
    a = Array.isArray,
    n = r,
    o = e;
var l = function(r) {
        return o(r) && "[object Arguments]" == n(r)
    },
    c = e,
    s = Object.prototype,
    u = s.hasOwnProperty,
    p = s.propertyIsEnumerable,
    i = l(function() {
        return arguments
    }()) ? l : function(r) {
        return c(r) && u.call(r, "callee") && !p.call(r, "callee")
    };
export {
    t as _, a, i
};
