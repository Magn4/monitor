import {
    L as s
} from "./app-b4886647.js";
import {
    L as t,
    g as r
} from "./index-b1843d52.js";
import {
    Error404 as o
} from "./404-74635981.js";
import {
    a9 as i,
    r as m,
    j as e
} from "./index-e0afec69.js";
import {
    u as p
} from "./useMount-c7a3921f.js";
import "./Loader2-ea5f73c7.js";
import "./modal.constants-09c27985.js";
import "./moment-e0d604bc.js";
import "./401-703aa7bb.js";
import "./page_view-8012ef9e.js";
import "./card-f1731810.js";
import "./expandable-fda4d7b7.js";
import "./index-36b2f843.js";
import "./numeral-35c401bf.js";
import "./dropdown-5a5b1b52.js";
import "./Icon-f55c9eb7.js";
import "./mixins-dfc47826.js";
import "./viewports-530dfeda.js";
import "./dropdown.constants-4d3323b0.js";
import "./minBy-afff8973.js";
import "./_baseIteratee-79fa20e9.js";
import "./isArguments-c20fe69a.js";
import "./trash-50e35e09.js";
import "./rotate-9e950e0d.js";
import "./role-079e360b.js";
import "./emoji-174a01ce.js";
import "./utils-ac99635e.js";
import "./tinycolor-7ac5b060.js";
import "./export-f16fcb42.js";
import "./toggle-266c1d4a.js";
import "./rank_card_render-1556b8e9.js";
import "./TemplatedSVG-75753ef1.js";
import "./monetize_plans-47213cc3.js";
import "./api-bda691b8.js";
import "./useMembershipsPlan-18528bb1.js";
import "./currency-ff0793d9.js";
import "./404Illustration-b32a696b.js";
import "./useEffectOnce-84f073df.js";
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
