import {
    r as e
} from "./index-67e26437.js";
import {
    u as t
} from "./useUnmount-c8f04155.js";
const r = (e, t) => Math.sqrt(Math.pow((e.x || 0) - (t.x || 0), 2) + Math.pow((e.y || 0) - (t.y || 0), 2)),
    n = ({
        draggingClasses: n = "",
        idleClasses: c = "",
        horizontal: u = !0,
        vertical: o = !1,
        onMove: s = null,
        onClick: a,
        onMouseUp: i = null,
        position: l = {
            x: 0,
            y: 0
        },
        snapPoints: m
    }) => {
        const d = e.useRef(),
            y = e.useRef(0),
            x = e.useRef({
                x: 0,
                y: 0
            }),
            p = e.useRef({
                x: 0,
                y: 0
            });
        e.useEffect((() => {
            const e = d.current?.offsetWidth || 1;
            if (void 0 !== l.x && d.current) {
                const t = l.x - e / 2;
                d.current.style.left = t > 0 ? l.x - e / 2 + "px" : "0"
            }
            l.y && d.current && (d.current.style.top = l.y + "px")
        }), [l]);
        const g = e => {
                document.body.style.cursor = "pointer";
                const t = d.current?.querySelector(".show-dragged");
                t && (t.classList.add("opacity-100"), t.classList.remove("opacity-0"));
                const r = d.current?.parentElement.getBoundingClientRect();
                x.current = {
                    x: e.pageX - r.x,
                    y: e.pageY - r.y
                }
            },
            f = e => {
                const t = d.current?.parentElement.getBoundingClientRect();
                x.current = {
                    x: e.touches[0].pageX - t.x,
                    y: e.touches[0].pageY - t.y
                }
            },
            v = () => {
                if (!y.current) return;
                document.body.style.cursor = "";
                const e = d.current?.querySelector(".show-dragged");
                e && (e.classList.remove("opacity-100"), e.classList.add("opacity-0"));
                const t = d.current?.offsetWidth || 1,
                    u = d.current?.offsetHeight || 1;
                if (d.current.className = d.current.className.replace(n, c), d.current.style.transition = "all 150ms ease", cancelAnimationFrame(y.current), y.current = null, i)
                    if (m?.current) {
                        const e = x.current.x - t / 2 <= 0 ? m.current[0] : m.current.reduce(((e, n) => r({
                            x: x.current.x - t / 2,
                            y: x.current.y - u / 2
                        }, e) < r({
                            x: x.current.x - d.current?.offsetWidth / 2,
                            y: x.current.y - d.current?.offsetHeight / 2
                        }, n) ? e : n));
                        i(e)
                    } else {
                        const e = d.current.parentElement.getBoundingClientRect(),
                            t = {
                                x: x.current.x - e.x - p.current.x,
                                y: x.current.y - e.y - p.current.y
                            };
                        i(t)
                    }
            },
            h = e => {
                document.removeEventListener("touchmove", f), v()
            },
            E = e => {
                document.removeEventListener("mousemove", g), v()
            };
        t((() => {
            cancelAnimationFrame(y.current), d.current && (d.current.removeEventListener("mousedown", a || b), d.current.removeEventListener("touchstart", w))
        }));
        const L = e.useCallback((() => {
                const e = d.current?.offsetWidth || 1,
                    t = d.current?.offsetHeight || 1,
                    n = x.current.x - e / 2 <= 0 ? m?.current[0] : m?.current.reduce(((n, c) => r({
                        x: x.current.x - e / 2,
                        y: x.current.y - t / 2
                    }, n) < r({
                        x: x.current.x - e / 2,
                        y: x.current.y - t / 2
                    }, c) ? n : c));
                if (y.current = requestAnimationFrame(L), n && d.current) {
                    if (u) {
                        const t = n.x - e / 2;
                        d.current.style.left = t >= 0 ? t + "px" : "0"
                    }
                    o && (d.current.style.top = n.y + "px"), s && s(n)
                }
            }), []),
            C = () => {
                const e = d.current.parentElement.getBoundingClientRect(),
                    t = {
                        x: x.current.x - e.x - p.current.x,
                        y: x.current.y - e.y - p.current.y
                    };
                x.current.x - p.current.x < e.left && (t.x = 0), x.current.x - p.current.x > e.right - d.current.offsetWidth && (t.x = e.width - d.current.offsetWidth), x.current.y - p.current.y < e.top && (t.y = 0), x.current.y - p.current.y > e.bottom - d.current.offsetHeight && (t.y = e.height - d.current.offsetHeight), u && (d.current.style.left = t.x + "px"), o && (d.current.style.top = t.y + "px"), s && s(t), y.current = requestAnimationFrame(C)
            },
            R = e.useCallback((() => {
                document.body.style.cursor = "pointer", d.current.className = d.current.className.replace(c, n), m.current?.length > 50 && (d.current.style.transition = ""), m.current?.length ? L() : C()
            }), []),
            b = e.useCallback((e => {
                e.preventDefault();
                const t = d.current.getBoundingClientRect();
                p.current = {
                    x: e.pageX - t.x,
                    y: e.pageY - t.y
                };
                const r = d.current?.parentElement.getBoundingClientRect();
                x.current = {
                    x: e.pageX - r.x,
                    y: e.pageY - r.y
                }, R(), document.addEventListener("mousemove", g)
            }), []),
            w = e.useCallback((e => {
                const t = d.current.getBoundingClientRect();
                p.current = {
                    x: e.touches[0].pageX - t.left,
                    y: e.touches[0].pageY - t.top
                };
                const r = d.current?.parentElement.getBoundingClientRect();
                x.current = {
                    x: e.touches[0].pageX - r.x,
                    y: e.touches[0].pageY - r.y
                }, R(), document.addEventListener("touchmove", f)
            }), []);
        return {
            dragElement: e => {
                e && (d.current = e, d.current.addEventListener("mousedown", a || b), d.current.addEventListener("touchstart", a || w), d.current.className.replace(c, ""), d.current.classList.add(c), document.addEventListener("mouseup", E), document.addEventListener("touchleave", h), document.addEventListener("touchstop", h))
            },
            releaseElement: () => {
                d.current.removeEventListener("mousedown", b), d.current.removeEventListener("touchstart", w), document.removeEventListener("mousemove", g), document.removeEventListener("touchmove", f), document.removeEventListener("mouseup", E), document.removeEventListener("touchleave", h), document.removeEventListener("touchstop", h)
            },
            reposition: e => {
                e.x && (d.current.style.left = e.x + "px"), e.y && (d.current.style.top = e.y + "px")
            }
        }
    };
export {
    n as u
};
