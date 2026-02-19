import {
    e as i
} from "./index-75d73738.js";
import {
    d as n,
    i as a
} from "./app-61e5c911.js";
var r = n,
    t = a;
const e = i((function(i, n, a) {
    var e = !0,
        o = !0;
    if ("function" != typeof i) throw new TypeError("Expected a function");
    return t(a) && (e = "leading" in a ? !!a.leading : e, o = "trailing" in a ? !!a.trailing : o), r(i, n, {
        leading: e,
        maxWait: n,
        trailing: o
    })
}));
export {
    e as t
};
