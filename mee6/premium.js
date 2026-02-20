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
} from "./index-8524466f.js";
import {
    s as c,
    W as x
} from "./Loader2-7697ef2c.js";
import {
    I as d
} from "./Icon-4e39fbba.js";
import {
    F as j
} from "./FAQ-8c4b52ac.js";
import {
    L as f,
    u,
    b as h,
    t as g
} from "./app-3ecfb394.js";
import {
    F as w
} from "./Footer-0db6cf51.js";
import {
    C as b,
    H as y,
    a as v,
    A as k
} from "./styles-2c4e474f.js";
import {
    u as _
} from "./usePlans-c950db17.js";
import {
    L as F,
    P as $,
    a as N,
    b as I,
    F as M
} from "./loading_plans-c3af1e2a.js";
import {
    G as z
} from "./page_view-483b54f5.js";
import {
    T as D
} from "./trusted_by-a78dd568.js";
import {
    D as L
} from "./paywall-banner-7ba15afd.js";
import {
    u as q
} from "./useMount-14cdc8d9.js";
import "./mixins-3b232174.js";
import "./viewports-3f8c58d0.js";
import "./Button-94ca6da8.js";
import "./Grid-ba73d02d.js";
import "./Title-9646ea4b.js";
import "./blanket-059f44c3.js";
import "./modal.constants-cb2154a2.js";
import "./moment-e0d604bc.js";
import "./discord_button-2c2f1fb5.js";
import "./api-98f0f679.js";
import "./icon-51c726ad.js";
import "./award-9812f51d.js";
import "./edit-17ddd0cf.js";
import "./warning-58a7bdd4.js";
import "./clock-99aedcd6.js";
import "./lock-9b3372ed.js";
import "./minus-f1d2c6b2.js";
import "./wallet-26dea00e.js";
import "./trash-c1023bcd.js";
import "./nft_check-72ed5277.js";
import "./plus-fcfa998f.js";
import "./twitter-eb3d85a3.js";
import "./arrow-ed3bc973.js";
import "./discord_verified-9b67f05e.js";
import "./collapse-f1256e3e.js";
import "./plan-container-8247acf0.js";
import "./index-56dee0a5.js";
import "./currency-ff0793d9.js";
import "./inline_radio_select-c24a3263.js";
import "./title-d9168bee.js";
import "./dashboard-banner-2b515723.js";
import "./useEffectOnce-d31d059c.js";
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
