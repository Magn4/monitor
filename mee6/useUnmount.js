import {
    r
} from "./index-e0afec69.js";
import {
    u as n
} from "./useEffectOnce-84f073df.js";
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
