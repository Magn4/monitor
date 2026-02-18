import {
    e as i
} from "./index-afe8eeea.js";
import {
    d as n,
    i as a
} from "./app-ba64cf70.js";
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
