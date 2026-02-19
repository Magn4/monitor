import {
    r
} from "./index-75d73738.js";
import {
    u as n
} from "./useEffectOnce-8216f8da.js";
const t = function(t) {
    var e = r.useRef(t);
    e.current = t, n((function() {
        return function() {
            return e.current()
        }
    }))
};
export {
    t as u
};
