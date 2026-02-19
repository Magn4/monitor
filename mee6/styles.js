import {
    I as t,
    j as i,
    au as e,
    F as a,
    aQ as n,
    a3 as o,
    a as r,
    b as s,
    r as l,
    o as p,
    B as d
} from "./index-67e26437.js";
import {
    A as c,
    s as g
} from "./Loader2-a0775a07.js";
import {
    T as m
} from "./Title-f5e0e56e.js";
import {
    m as x,
    t as h,
    a as $
} from "./viewports-069dca7e.js";
import {
    m as u
} from "./app-36ea11eb.js";
import {
    A as f
} from "./discord_button-e2b7dbbf.js";
const b = c`
  opacity: 0;
  transform: translateY(100px);
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  transition-property: opacity, transform;

  ${t=>t.$visible&&c`
      opacity: 1;
      transform: translateY(0);
    `}
`,
    j = g.div`
  margin: 0 auto;
  padding: 0 ${40}px;
  max-width: ${1240}px;
  width: 100%;

  ${x(c`
    padding: 32px 16px 0;
  `)}
`,
    w = g.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 426px;
  margin-top: 140px;
  margin-bottom: 156px;

  ${t=>t.$image&&c`
      min-height: 426px;
      background: url(${t.$image}) no-repeat center bottom;
      background-size: contain;
    `}

  ${h(c`
    margin-top: 64px;
    min-height: 490px;
    margin-bottom: 124px;
  `)}

  ${x(c`
    margin-top: 4px;
    min-height: 360px;
    margin-bottom: 80px;
  `)}
`,
    v = g.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 64px;
  width: 560px;
  max-width: 100%;
  letter-spacing: -1px;
  margin: 0;
  padding: 0;

  ${h(c`
    width: 448px;
  `)}

  ${x(c`
    font-size: 35px;
    line-height: 40px;
    letter-spacing: initial;
  `)}
`,
    k = g.p`
  line-height: 24px;
  font-size: 16px;
  margin: 32px 0 0;
  width: 360px;
  max-width: 100%;

  ${h(c`
    width: 448px;
  `)}
`;

function _({
    title: t,
    description: e,
    image: a,
    ...n
}) {
    return i.jsx(j, {
        children: i.jsxs(w, {
            $image: a,
            ...n,
            children: [i.jsx(v, {
                children: t
            }), e && i.jsx(k, {
                children: e
            }), i.jsx(f, {
                label: "landing_header",
                className: "mt-10"
            })]
        })
    })
}
const y = g.div`
  width: 460px;
  max-width: 100%;

  ${$(c`
    display: flex;
  `)}
`,
    z = g.div`
  ${$(c`
    :not(:first-child) {
      margin-left: 16px;
    }
  `)}

  ${x(c`
    display: flex;
    flex-direction: column;
    align-items: center;
  `)}
`,
    B = g.img`
  max-width: 100%;
  pointer-events: none;
`,
    I = g.div`
  position: relative;
  max-width: 100%;
  width: 560px;
  pointer-events: none;
  user-select: none;

  ${t=>t.$customImage&&x(c`
      margin-bottom: 32px;
    `)}

  ${$(c`
    width: 560px;
  `)}
`,
    C = g(m).attrs((t => ({
        level: t.$small ? "H2" : "H1",
        tag: t.$small ? "h3" : "h2"
    })))`
  margin: 0;
  padding: 0;
`,
    R = g.p`
  margin: 0;
  white-space: pre-line;
  font-size: 16px;

  :not(:first-child) {
    margin-top: 32px;
  }
`,
    L = g.article`
  width: 1160px;
  max-width: 100%;
  display: flex;
  align-items: center;

  ${b};

  ${x(c`
    flex-direction: column;

    ${C},
    ${R} {
      text-align: center;
    }

    ${B} {
      width: 448px;
      display: block;
      margin: 32px auto 0;
    }

    ${t=>!t.$noReverse&&c`
        flex-direction: column-reverse;

        ${B} {
          margin: 0 auto 32px;
        }
      `}

    ${t=>t.$topMargin&&c`
        margin-top: 80px;
      `}
  `)}

  ${$(c`
    justify-content: space-between;

    ${y} {
      margin-right: 32px;
    }

    ${t=>t.$topMargin&&c`
        margin-top: 156px;
      `}

    ${t=>t.$floatingImage&&c`
        ${B} {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}

    ${t=>t.$top&&c`
        align-items: flex-start;
      `}

    ${t=>t.$reversed&&c`
        flex-direction: row-reverse;

        ${y} {
          margin-right: 0;
          margin-left: 32px;
        }
      `}
  `)}
`,
    M = t.forwardRef(((t, e) => {
        const {
            preContent: a,
            title: n,
            description: o,
            image: r,
            smallTitle: s,
            reversed: l,
            alignImageTop: p,
            floatingImage: d,
            topMargin: c,
            mobileNoReverse: g,
            children: m,
            ...x
        } = t;
        return i.jsxs(L, {
            ...x,
            ref: e,
            $reversed: l,
            $floatingImage: d,
            $top: p,
            $topMargin: c,
            $noReverse: g,
            children: [i.jsxs(y, {
                children: [a && a(), i.jsxs(z, {
                    children: [i.jsx(C, {
                        $small: s,
                        children: n
                    }), i.jsx(R, {
                        children: o
                    }), m]
                })]
            }), i.jsx(I, {
                $customImage: "function" == typeof r,
                children: "function" == typeof r ? r() : i.jsx(B, {
                    src: r
                })
            })]
        })
    })),
    T = g.img`
  width: min(100%, ${t=>t.$width}px);
  pointer-events: none;
  margin-top: 56px;
`,
    A = g.div`
  width: min(560px, 100%);
  text-align: center;

  ${C} {
    justify-content: center;
  }
`,
    H = g(j)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,
    N = g.div`
  position: relative;

  ${t=>t.$height?c`
          ::before {
            content: '';
            position: absolute;
            z-index: -1;
            background-color: ${t.$color||e};
            top: 0;
            right: 0;
            left: 0;
            height: ${`${t.$height}px`};
          }

          ${H} {
            padding-top: 80px;
          }
        `:c`
          background-color: ${t.$color||e};

          ${H} {
            padding: 99px 0;
          }
        `}
`;

function U({
    color: t,
    smallTitle: e,
    height: a,
    width: n,
    title: o,
    description: r,
    image: s,
    children: l,
    ...p
}) {
    return i.jsx(N, {
        $color: t,
        $height: a,
        ...p,
        children: i.jsxs(H, {
            children: [i.jsxs(A, {
                children: [i.jsx(C, {
                    $small: e,
                    children: "function" == typeof o ? o() : o
                }), r && i.jsx(R, {
                    children: r
                })]
            }), s && i.jsx(T, {
                src: s,
                $width: n
            }), l]
        })
    })
}

function F({
    label: t,
    hasUser: e,
    text: n,
    ...o
}) {
    const c = r(),
        {
            locale: g
        } = s(),
        m = l.useCallback((() => {
            c({
                search: `?redirect=/${g}/dashboard`
            }), u("home_add_to_discord_click", null, {
                label: t
            }), e ? (u("home_add_to_discord_dashboard", null, {
                label: t
            }), c(`/${g}/dashboard`)) : (u("home_add_to_discord_login", null, {
                label: t
            }), p())
        }));
    return i.jsx(d, {
        onClick: m,
        ...o,
        children: n || i.jsx(a, {
            id: "public.plugins.customize.cta"
        })
    })
}
const Q = g(U)`
  margin: 156px auto 0;
  width: 100%;

  ${H} {
    padding-right: 16px;
    padding-left: 16px;
    background-image: url(${"/assets/BranchLeftBig-588315f2.svg"}), url(${"/assets/BranchLeftSmall-6b3b5a37.svg"}), url(${"/assets/BranchRight-966a7161.svg"});
    background-position: left 105%, 34px bottom, 95% bottom;
    background-repeat: no-repeat;
  }

  ${x(c`
    margin: 80px auto 0;

    ${H} {
      background-image: url(${"/assets/BranchLeftBig-588315f2.svg"}), url(${"/assets/BranchLeftSmall-6b3b5a37.svg"}), url(${"/assets/BranchRight-966a7161.svg"});
      background-position: left 105%, 34px bottom, 105% 60%;
      background-size: 70px auto, 68px auto, 108px auto;
    }
  `)}
`,
    S = g(F)`
  margin-top: 32px;
`;

function Y({
    label: t,
    title: e,
    cta: r,
    onClick: s,
    to: l,
    hasUser: p,
    ...d
}) {
    const c = {};
    return l ? c.to = l : s && (c.onClick = s), i.jsx(Q, {
        title: () => e || i.jsx(a, {
            id: "public.plugins.customize.title"
        }),
        color: n,
        ...d,
        children: i.jsx(o, {
            event: "add_to_discord_click",
            children: i.jsx(S, {
                size: "large",
                theme: "white",
                ...c,
                hasUser: p,
                label: t,
                text: r
            })
        })
    })
}
export {
    Y as A, j as C, U as F, v as H, k as a, M as b, F as c, _ as d, b as s
};
