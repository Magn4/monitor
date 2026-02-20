import {
    r
} from "./index-8524466f.js";
import {
    u as n
} from "./useEffectOnce-d31d059c.js";
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
