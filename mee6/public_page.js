import {
    t as e
} from "./throttle-0fc9e144.js";
import {
    r as t
} from "./index-8524466f.js";
import {
    S as r
} from "./viewports-3f8c58d0.js";
const n = () => {
    const n = t.useRef(null),
        [s, i] = t.useState("desktop"),
        [o, u] = t.useState([]),
        c = t.useRef({}),
        d = t.useCallback((() => {
            const e = [];
            Object.entries(c.current).forEach((([t, r]) => {
                if (o.includes(t) || !r.current || !r.current?.getBoundingClientRect) return;
                const n = r.current?.getBoundingClientRect(),
                    s = r.current?.dataset.offset ? parseInt(r.current.dataset.offset, 10) : 0;
                n.y - window.innerHeight + s <= 0 && e.push(t)
            })), u([...o, ...e])
        }), []);
    return t.useEffect((() => {
        const t = e(d, 30),
            s = e((() => {
                i(window.innerWidth < r.PHONE ? "mobile" : window.innerWidth < r.TABLET ? "tablet" : "desktop")
            }), 50);
        return window.addEventListener("resize", s), s(), window.addEventListener("scroll", t), n.current = setTimeout(d, 100), () => {
            window.removeEventListener("resize", s), window.removeEventListener("scroll", t), n.current && clearTimeout(n.current)
        }
    }), []), {
        registerRef: e => (c.current[e] || (c.current[e] = t.createRef()), c.current[e]),
        visibleRefs: o,
        setVisibleRefs: u,
        affixRefs: c,
        mode: s,
        updateScrollInfo: d
    }
};
export {
    n as u
};
