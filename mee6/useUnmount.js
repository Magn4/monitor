import {
    r
} from "./index-afe8eeea.js";
import {
    u as n
} from "./useEffectOnce-e5eb90ec.js";
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
