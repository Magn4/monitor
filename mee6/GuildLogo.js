import {
    q as s,
    j as i,
    s as e,
    P as a
} from "./index-75d73738.js";
import {
    s as r
} from "./Loader2-aadfe498.js";
const d = r.img`
  width: ${s=>s.size}px;
  height: ${s=>s.size}px;
  border-radius: ${s=>s.radius}px;
  flex-shrink: 0;
`,
    l = r.div`
  width: ${s=>s.size}px;
  height: ${s=>s.size}px;
  border-radius: ${s=>s.radius}px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  user-select: none;
  font-size: ${s=>Math.max(s.size/87*12,12)}px;
`,
    n = s((s => {
        if (s.guild?.icon || s.guild?.icon_url) return i.jsx(d, {
            className: s.className,
            src: s.guild?.icon_url || e(s.guild),
            size: s.size,
            radius: s.radius,
            alt: s.intl.formatMessage({
                id: "guildLogo.alt"
            }, {
                name: s?.guild?.name
            })
        });
        const a = s.guild?.name.replace("'s", "").match(/\b\w/g),
            r = a ? a.slice(0, 3).join("") : s.guild?.name.substr(0, 3);
        return i.jsx(l, {
            className: s.className,
            size: s.size,
            radius: s.radius,
            children: r || "N/A"
        })
    }));
n.propTypes = {
    guild: a.any.isRequired,
    size: a.number,
    radius: a.number,
    className: a.string
}, n.defaultProps = {
    className: "",
    size: 87,
    radius: 15
};
export {
    n as G
};
