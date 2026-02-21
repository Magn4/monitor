import {
    d as e,
    j as s,
    W as i,
    Y as t,
    t as r,
    a as o,
    b as a,
    v as m,
    f as l,
    F as p,
    w as n
} from "./index-e0afec69.js";
import {
    s as c,
    W as x
} from "./Loader2-ea5f73c7.js";
import {
    I as d
} from "./Icon-f55c9eb7.js";
import {
    F as j
} from "./FAQ-e4b6be83.js";
import {
    L as f,
    u,
    b as h,
    t as g
} from "./app-b4886647.js";
import {
    F as w
} from "./Footer-caf192de.js";
import {
    C as b,
    H as y,
    a as v,
    A as k
} from "./styles-c00fd69e.js";
import {
    u as _
} from "./usePlans-6050c6b4.js";
import {
    L as F,
    P as $,
    a as N,
    b as I,
    F as M
} from "./loading_plans-292a5ec6.js";
import {
    G as z
} from "./page_view-8012ef9e.js";
import {
    T as D
} from "./trusted_by-aeb05e6d.js";
import {
    D as L
} from "./paywall-banner-ae33d80e.js";
import {
    u as q
} from "./useMount-c7a3921f.js";
import "./mixins-dfc47826.js";
import "./viewports-530dfeda.js";
import "./Button-d3f985cd.js";
import "./Grid-d4063e87.js";
import "./Title-3370b661.js";
import "./blanket-cf486e87.js";
import "./modal.constants-09c27985.js";
import "./moment-e0d604bc.js";
import "./discord_button-a905de9f.js";
import "./api-b3fc9d6a.js";
import "./icon-3da844fe.js";
import "./award-66a2047f.js";
import "./edit-ae08cef7.js";
import "./warning-1bc43636.js";
import "./clock-1a041e0d.js";
import "./lock-9ca7eef0.js";
import "./minus-36aa505f.js";
import "./wallet-cf908e7f.js";
import "./trash-50e35e09.js";
import "./nft_check-97d9e6fd.js";
import "./plus-3cfe4717.js";
import "./twitter-2401f54c.js";
import "./arrow-4d89c9f4.js";
import "./discord_verified-fc3fb651.js";
import "./collapse-62fe0630.js";
import "./plan-container-50f5a577.js";
import "./index-b7c475da.js";
import "./currency-ff0793d9.js";
import "./inline_radio_select-61cd571f.js";
import "./title-3c34354c.js";
import "./dashboard-banner-2b515723.js";
import "./useEffectOnce-84f073df.js";
const E = c(b)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  text-align: center;

  ${y} {
    width: auto;
  }

  ${v} {
    width: 560px;
    text-align: center;
  }
`,
    G = x`
    from {
        transform: scale(1);
    }

    50% {
        transform: scale(0.5);
    }

    to {
        transform: scale(1);
    }
`,
    S = c.div`
  display: flex;
  align-items: center;
  color: ${i};
  font-size: 32.76px;
  line-height: 28px;
  letter-spacing: 2.52px;
  font-weight: 800;
  text-transform: uppercase;
  grid-gap: 16px;
  margin-bottom: 16px;
  position: relative;

  ::before {
    content: '';
    border-radius: 50%;
    position: absolute;
    animation: ${G} 5s linear infinite;
    top: 22px;
    left: 17px;
    width: 4px;
    height: 4px;
    box-shadow: 0 0 88px 20px ${t};
  }

  svg {
    margin-top: -10px;
  }
`,
    A = () => {
        const {
            loading: i
        } = e();
        return i ? s.jsx("div", {
            className: "h-screen w-screen flex items-center justify-center",
            children: s.jsx(f, {
                size: "large"
            })
        }) : s.jsx(O, {})
    },
    O = () => {
        const i = r(),
            t = o(),
            {
                user: c
            } = e(),
            {
                currency: x,
                taxExclusive: f,
                plans: b,
                loading: G
            } = _(),
            {
                locale: A
            } = a();
        q((() => {
            let e = null;
            if (window.location.search) {
                const s = n.decode(window.location.search.slice(1));
                s.s && (e = s.s)
            }
            localStorage.getItem("redirect") && (t(localStorage.getItem("redirect")), localStorage.removeItem("redirect")), c || g("public_premium_page_visit", null, {
                source: e
            })
        }));
        const {
            discountDisplayed: O
        } = u(), P = !!c, T = ["lifetime", "yearly", "monthly"], B = b?.premium?.periods.filter((e => e.price > 0)).sort(((e, s) => T.indexOf(e.key) - T.indexOf(s.key)));
        return s.jsxs(z, {
            children: [s.jsxs(m, {
                children: [s.jsx("title", {
                    children: i.formatMessage({
                        id: "premium.header.title"
                    })
                }), s.jsx("link", {
                    rel: "canonical",
                    href: `https://mee6.xyz/${A}/premium`
                }), s.jsx("meta", {
                    name: "description",
                    content: i.formatMessage({
                        id: "premium.meta.description"
                    })
                })]
            }), s.jsx(h, {
                redirectToDashboard: !0
            }), s.jsxs("div", {
                className: "flex flex-col items-stretch w-full",
                children: [s.jsxs("div", {
                    className: l("flex flex-col w-full items-center", {
                        "p-6 lg:p-10": !O,
                        "px-6 lg:px-10 pb-6 lg:pb-10": O
                    }),
                    children: [s.jsxs(E, {
                        children: [s.jsxs(S, {
                            children: [s.jsx(d, {
                                icon: "GetPremium",
                                size: "xxlarge"
                            }), s.jsx(p, {
                                id: "premium.comparison.premium"
                            })]
                        }), s.jsx(y, {
                            children: s.jsx(p, {
                                id: "public.premium.hero.title"
                            })
                        }), s.jsx(v, {
                            children: s.jsx(p, {
                                id: "public.premium.hero.description"
                            })
                        })]
                    }), O && s.jsx("div", {
                        className: "mt-7",
                        children: s.jsx(L, {})
                    }), s.jsx("div", {
                        className: "flex flex-col md:flex-row gap-6 mt-10",
                        children: G || !B ? s.jsx(F, {
                            length: 3
                        }) : B?.map((e => s.jsx($, {
                            plan: e,
                            taxExclusive: f,
                            currency: x || "USD",
                            selected: e.key === B[0].key
                        }, e.key)))
                    })]
                }), s.jsx(D, {}), s.jsxs("div", {
                    className: "flex flex-col w-full max-w-[1160px] mt-10 gap-20 ml-auto mr-auto px-6",
                    children: [s.jsxs(s.Fragment, {
                        children: [s.jsx(N, {}), s.jsx(I, {})]
                    }), s.jsx(j, {
                        theme: "transparent",
                        items: M.map((({
                            key: e,
                            values: s = {}
                        }) => ({
                            question: i.formatMessage({
                                id: `premium.faq.${e}.title`
                            }),
                            answer: i.formatMessage({
                                id: `premium.faq.${e}.text`
                            }, s)
                        })))
                    })]
                }), s.jsx(k, {
                    hasUser: P,
                    label: "premium"
                }), s.jsx(w, {})]
            })]
        })
    };
export {
    O as Premium, A as
    default
};
