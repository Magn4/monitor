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
} from "./index-67e26437.js";
import {
    s as c,
    W as x
} from "./Loader2-a0775a07.js";
import {
    I as d
} from "./Icon-1873cd36.js";
import {
    F as j
} from "./FAQ-463a9750.js";
import {
    L as f,
    u,
    b as h,
    t as g
} from "./app-36ea11eb.js";
import {
    F as w
} from "./Footer-b844fbfc.js";
import {
    C as b,
    H as y,
    a as v,
    A as k
} from "./styles-20484214.js";
import {
    u as _
} from "./usePlans-b3792889.js";
import {
    L as F,
    P as $,
    a as N,
    b as I,
    F as M
} from "./loading_plans-6cf0c88e.js";
import {
    G as z
} from "./page_view-5df095da.js";
import {
    T as D
} from "./trusted_by-4c35de5d.js";
import {
    D as L
} from "./paywall-banner-8740a92a.js";
import {
    u as q
} from "./useMount-dd92c179.js";
import "./mixins-9df48c32.js";
import "./viewports-069dca7e.js";
import "./Button-e38f274e.js";
import "./Grid-a92b7c1d.js";
import "./Title-f5e0e56e.js";
import "./blanket-e5e1374f.js";
import "./modal.constants-b19a0d48.js";
import "./moment-e0d604bc.js";
import "./discord_button-e2b7dbbf.js";
import "./api-32050a10.js";
import "./icon-3885135a.js";
import "./award-5eae1213.js";
import "./edit-469d9199.js";
import "./warning-a5732562.js";
import "./clock-54e5dbc0.js";
import "./lock-b636a0ef.js";
import "./minus-22811aa6.js";
import "./wallet-e57554dc.js";
import "./trash-e22cc658.js";
import "./nft_check-09da3197.js";
import "./plus-9536984c.js";
import "./twitter-cff13caa.js";
import "./arrow-ce215add.js";
import "./discord_verified-31e35483.js";
import "./collapse-d94bb9d3.js";
import "./plan-container-51323e4a.js";
import "./index-bd359ee2.js";
import "./currency-ff0793d9.js";
import "./inline_radio_select-2df3900b.js";
import "./title-f87b7ea9.js";
import "./dashboard-banner-2b515723.js";
import "./useEffectOnce-c91383fb.js";
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
