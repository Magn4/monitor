import {
    r
} from "./index-67e26437.js";
import {
    u as n
} from "./useEffectOnce-c91383fb.js";
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
