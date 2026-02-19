import {
    r
} from "./index-684a1b71.js";
import {
    u as n
} from "./useEffectOnce-d6a661a4.js";
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
