import {
    L as s
} from "./app-3ecfb394.js";
import {
    L as t,
    g as r
} from "./index-ae643918.js";
import {
    Error404 as o
} from "./404-79a78d79.js";
import {
    a9 as i,
    r as m,
    j as e
} from "./index-8524466f.js";
import {
    u as p
} from "./useMount-14cdc8d9.js";
import "./Loader2-7697ef2c.js";
import "./modal.constants-cb2154a2.js";
import "./moment-e0d604bc.js";
import "./401-87d7e34a.js";
import "./page_view-483b54f5.js";
import "./card-1fe7799b.js";
import "./expandable-77bcb911.js";
import "./index-f80325d1.js";
import "./numeral-4b323328.js";
import "./dropdown-f6ee4ab1.js";
import "./Icon-4e39fbba.js";
import "./mixins-3b232174.js";
import "./viewports-3f8c58d0.js";
import "./dropdown.constants-648e2fc4.js";
import "./minBy-c6a56214.js";
import "./_baseIteratee-063b4e62.js";
import "./isArguments-010ca4e1.js";
import "./trash-c1023bcd.js";
import "./rotate-4c23adf4.js";
import "./role-7f72c357.js";
import "./emoji-e233fc0e.js";
import "./utils-5af954b8.js";
import "./tinycolor-e73404c5.js";
import "./export-b1c13871.js";
import "./toggle-83a7a83a.js";
import "./rank_card_render-46190237.js";
import "./TemplatedSVG-f333c6b7.js";
import "./monetize_plans-b7eabcca.js";
import "./api-fc94902e.js";
import "./useMembershipsPlan-4f98ea90.js";
import "./currency-ff0793d9.js";
import "./404Illustration-b32a696b.js";
import "./useEffectOnce-d31d059c.js";
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
