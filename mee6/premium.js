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
} from "./index-afe8eeea.js";
import {
    s as c,
    W as x
} from "./Loader2-e1b3d35e.js";
import {
    I as d
} from "./Icon-1cc9e506.js";
import {
    F as j
} from "./FAQ-4afad87b.js";
import {
    L as f,
    u,
    b as h,
    t as g
} from "./app-ba64cf70.js";
import {
    F as w
} from "./Footer-55333e9b.js";
import {
    C as b,
    H as y,
    a as v,
    A as k
} from "./styles-8925274f.js";
import {
    u as _
} from "./usePlans-cab1095e.js";
import {
    L as F,
    P as $,
    a as N,
    b as I,
    F as M
} from "./loading_plans-a7daefe3.js";
import {
    G as z
} from "./page_view-108bcc78.js";
import {
    T as D
} from "./trusted_by-12d9d541.js";
import {
    D as L
} from "./paywall-banner-9732fbc5.js";
import {
    u as q
} from "./useMount-3d38109f.js";
import "./mixins-31afc8b6.js";
import "./viewports-c65d73a1.js";
import "./Button-5479c84f.js";
import "./Grid-9ce94e5a.js";
import "./Title-b4f370d0.js";
import "./blanket-efa71f78.js";
import "./modal.constants-0cca4730.js";
import "./moment-e0d604bc.js";
import "./discord_button-833e5a26.js";
import "./api-c3113c41.js";
import "./icon-64138ba8.js";
import "./award-28406fde.js";
import "./edit-7c7674d2.js";
import "./warning-a7a0bf32.js";
import "./clock-838053c1.js";
import "./lock-962b9d2f.js";
import "./minus-5a3c686c.js";
import "./wallet-3002000a.js";
import "./trash-b5f201ca.js";
import "./nft_check-a736c91d.js";
import "./plus-e77bd2b8.js";
import "./twitter-25a5a13f.js";
import "./arrow-92207519.js";
import "./discord_verified-f4d1a629.js";
import "./collapse-40ec15dc.js";
import "./plan-container-c5a3894f.js";
import "./index-6f1fc63a.js";
import "./currency-ff0793d9.js";
import "./inline_radio_select-0b7b31f7.js";
import "./title-561753ff.js";
import "./dashboard-banner-2b515723.js";
import "./useEffectOnce-e5eb90ec.js";
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
