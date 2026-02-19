import {
    L as s
} from "./app-36ea11eb.js";
import {
    L as t,
    g as r
} from "./index-83aae86f.js";
import {
    Error404 as o
} from "./404-188602bb.js";
import {
    a9 as i,
    r as m,
    j as e
} from "./index-67e26437.js";
import {
    u as p
} from "./useMount-dd92c179.js";
import "./Loader2-a0775a07.js";
import "./modal.constants-b19a0d48.js";
import "./moment-e0d604bc.js";
import "./401-ccdff9e8.js";
import "./page_view-5df095da.js";
import "./card-516e07b3.js";
import "./expandable-7eaa05f0.js";
import "./index-e7ff8894.js";
import "./numeral-0ee91f0f.js";
import "./dropdown-e8f42c6b.js";
import "./Icon-1873cd36.js";
import "./mixins-9df48c32.js";
import "./viewports-069dca7e.js";
import "./dropdown.constants-4e972ad8.js";
import "./minBy-bb5325c7.js";
import "./_baseIteratee-4d723ddc.js";
import "./isArguments-c33762eb.js";
import "./trash-e22cc658.js";
import "./rotate-132994ae.js";
import "./role-f2ee5e0f.js";
import "./emoji-4635f067.js";
import "./utils-71e7e42d.js";
import "./tinycolor-f21932ee.js";
import "./export-7a68fe87.js";
import "./toggle-5ac33222.js";
import "./rank_card_render-813cd52e.js";
import "./TemplatedSVG-f9a079b3.js";
import "./monetize_plans-56fb14b5.js";
import "./api-78bc84b5.js";
import "./useMembershipsPlan-dafbfc33.js";
import "./currency-ff0793d9.js";
import "./404Illustration-b32a696b.js";
import "./useEffectOnce-c91383fb.js";
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
