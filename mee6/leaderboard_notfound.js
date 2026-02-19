import {
    L as s
} from "./app-91bc7f76.js";
import {
    L as t,
    g as r
} from "./index-29d4fc17.js";
import {
    Error404 as o
} from "./404-86d43f79.js";
import {
    a9 as i,
    r as m,
    j as e
} from "./index-684a1b71.js";
import {
    u as p
} from "./useMount-6e43746a.js";
import "./Loader2-db3a3ef5.js";
import "./modal.constants-e7a21a8a.js";
import "./moment-e0d604bc.js";
import "./401-de0ecc92.js";
import "./page_view-956ac92e.js";
import "./card-edcc1cb6.js";
import "./expandable-f2f6f00b.js";
import "./index-37309575.js";
import "./numeral-94adb52d.js";
import "./dropdown-be49b525.js";
import "./Icon-6914d147.js";
import "./mixins-b8067724.js";
import "./viewports-a6773e3e.js";
import "./dropdown.constants-f4316a85.js";
import "./minBy-2dbaf704.js";
import "./_baseIteratee-cd21cbb3.js";
import "./isArguments-8420dec1.js";
import "./trash-c8acbec7.js";
import "./rotate-91b27a50.js";
import "./role-f5d5a33e.js";
import "./emoji-d07e80a4.js";
import "./utils-cf3b157b.js";
import "./tinycolor-46b05baf.js";
import "./export-8ea6ae66.js";
import "./toggle-40a62607.js";
import "./rank_card_render-f2805c01.js";
import "./TemplatedSVG-6c114b09.js";
import "./monetize_plans-cfb6c3d7.js";
import "./api-9236c9d6.js";
import "./useMembershipsPlan-ae28c80a.js";
import "./currency-ff0793d9.js";
import "./404Illustration-b32a696b.js";
import "./useEffectOnce-d6a661a4.js";
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
