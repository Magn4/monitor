import {
    r as e
} from "./index-67e26437.js";
import {
    t
} from "./throttle-ac9d80f3.js";
const o = window.innerHeight / 5,
    n = n => {
        const s = t(n, 500),
            r = e.useCallback((e => {
                window.innerHeight + window.scrollY >= document.body.scrollHeight - o && s()
            }), []);
        e.useEffect((() => (document.addEventListener("scroll", r), () => document.removeEventListener("scroll", r))), [])
    },
    s = n => {
        const s = document.getElementById("dashboard__content"),
            r = t(e.useCallback((() => {
                s && s.offsetHeight + s.scrollTop + o < s.scrollHeight || n()
            }), []), 500);
        e.useEffect((() => {
            if (s) return s.addEventListener("scroll", r), () => s.removeEventListener("scroll", r)
        }), [])
    };
export {
    s as a, n as u
};
