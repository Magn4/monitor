import {
    L as s
} from "./app-ba64cf70.js";
import {
    L as t,
    g as r
} from "./index-2924b7fc.js";
import {
    Error404 as o
} from "./404-3bee9d2e.js";
import {
    a9 as i,
    r as m,
    j as e
} from "./index-afe8eeea.js";
import {
    u as p
} from "./useMount-3d38109f.js";
import "./Loader2-e1b3d35e.js";
import "./modal.constants-0cca4730.js";
import "./moment-e0d604bc.js";
import "./401-6d4abf9f.js";
import "./page_view-108bcc78.js";
import "./card-d15c4286.js";
import "./expandable-73d3679b.js";
import "./index-2a76eabd.js";
import "./numeral-21541e5e.js";
import "./dropdown-60008731.js";
import "./Icon-1cc9e506.js";
import "./mixins-31afc8b6.js";
import "./viewports-c65d73a1.js";
import "./dropdown.constants-7558f026.js";
import "./minBy-5d67e34c.js";
import "./_baseIteratee-30f45b1d.js";
import "./isArguments-f1611f5d.js";
import "./trash-b5f201ca.js";
import "./rotate-560e3cd6.js";
import "./role-44ddbf36.js";
import "./emoji-bee45a1e.js";
import "./utils-b5f93582.js";
import "./tinycolor-27a4d8f8.js";
import "./export-a3aef3e1.js";
import "./toggle-4564d8ab.js";
import "./rank_card_render-630e0737.js";
import "./TemplatedSVG-b30fbaba.js";
import "./monetize_plans-4580b8df.js";
import "./api-11bf0659.js";
import "./useMembershipsPlan-f0c4c9f8.js";
import "./currency-ff0793d9.js";
import "./404Illustration-b32a696b.js";
import "./useEffectOnce-e5eb90ec.js";
const j = () => e.jsx("div", {
        className: "h-screen w-full flex items-center justify-center",
        children: e.jsx(s, {})
    }),
    a = () => {
        const s = i(),
            [a, n] = m.useState(!0),
            [l, d] = m.useState(null);
        return p((() => {
            const t = s.pathname?.split("/")?.[2];
            r(t).then((s => {
                s.ok && d(s.data.id), n(!1)
            }))
        })), a ? e.jsx(j, {}) : l ? e.jsx(t, {
            guildId: l
        }) : e.jsx(o, {})
    };
export {
    a as
    default
};
