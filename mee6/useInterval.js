import {
    r as n
} from "./index-8524466f.js";
const r = function(r, t) {
    var e = n.useRef((function() {}));
    n.useEffect((function() {
        e.current = r
    })), n.useEffect((function() {
        if (null !== t) {
            var n = setInterval((function() {
                return e.current()
            }), t || 0);
            return function() {
                return clearInterval(n)
            }
        }
    }), [t])
};
export {
    r as u
};
