import {
    r as t
} from "./index-684a1b71.js";
import {
    j as n,
    o as e,
    k as o
} from "./app-91bc7f76.js";
var r = function(t, n) {
    return new URLSearchParams(t).get(n)
};
const a = n ? function(n) {
    var a = window.location,
        s = t.useState((function() {
            return r(a.search, n)
        })),
        i = s[0],
        u = s[1];
    return t.useEffect((function() {
        var t = function() {
            u(r(a.search, n))
        };
        return e(window, "popstate", t), e(window, "pushstate", t), e(window, "replacestate", t),
            function() {
                o(window, "popstate", t), o(window, "pushstate", t), o(window, "replacestate", t)
            }
    }), []), i
} : function() {
    return null
};
export {
    a as u
};
