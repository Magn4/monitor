import {
    L as s
} from "./app-61e5c911.js";
import {
    L as t,
    g as r
} from "./index-adcc3434.js";
import {
    Error404 as o
} from "./404-75f11fa8.js";
import {
    a9 as i,
    r as m,
    j as e
} from "./index-75d73738.js";
import {
    u as p
} from "./useMount-18619ac0.js";
import "./Loader2-aadfe498.js";
import "./modal.constants-8f18da75.js";
import "./moment-e0d604bc.js";
import "./401-f9a215bb.js";
import "./page_view-7551f1fd.js";
import "./card-5b85a930.js";
import "./expandable-f0433bfd.js";
import "./index-009d3aeb.js";
import "./numeral-2f4915df.js";
import "./dropdown-51e6a67e.js";
import "./Icon-00f46c3e.js";
import "./mixins-1c1f239e.js";
import "./viewports-7b2f2c00.js";
import "./dropdown.constants-c6c4b581.js";
import "./minBy-4c8dec32.js";
import "./_baseIteratee-2fc96153.js";
import "./isArguments-425e080e.js";
import "./trash-cbd67a86.js";
import "./rotate-0a47c2f4.js";
import "./role-1371d7ba.js";
import "./emoji-99768063.js";
import "./utils-7d88ffc4.js";
import "./tinycolor-427fbd4e.js";
import "./export-379574f3.js";
import "./toggle-6a10a1df.js";
import "./rank_card_render-cbfdc73e.js";
import "./TemplatedSVG-bef5dfc5.js";
import "./monetize_plans-08dd227f.js";
import "./api-6b1ed554.js";
import "./useMembershipsPlan-aa6f9f32.js";
import "./currency-ff0793d9.js";
import "./404Illustration-b32a696b.js";
import "./useEffectOnce-8216f8da.js";
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
