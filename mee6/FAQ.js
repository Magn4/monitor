import {
    W as e,
    x as t,
    r as i,
    j as s,
    F as n
} from "./index-684a1b71.js";
import {
    s as o,
    A as l
} from "./Loader2-db3a3ef5.js";
import {
    B as r
} from "./Button-106d6f41.js";
import {
    T as a
} from "./Title-cc00a297.js";
import {
    B as c
} from "./blanket-da0d48f1.js";
const p = "default",
    d = "transparent",
    m = o.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  line-height: 28px;
  cursor: pointer;
  color: ${e};
  height: 92px;
  font-weight: normal;
`,
    h = o.div`
  display: none;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  padding-bottom: 32px;
  margin-top: -8px;
  width: min(760px, 100%);

  a {
    color: inherit;
    text-decoration: underline;
  }
`,
    x = o.article`
  :not(:last-child) {
    border-bottom: 1px solid ${t};
  }

  ${e=>e.$visible&&l`
      ${h} {
        display: block;
      }
    `}
`,
    f = o(a)``,
    j = o.div`
  ${e=>e.$theme===d&&l`
      ${e.$centerTitle&&`\n        ${f} {\n          justify-content: center;\n        }`}
    `}
`,
    b = ({
        items: e = [],
        theme: t = p,
        hideTitle: o,
        centerTitle: l = !0,
        ...a
    }) => {
        const [b, u] = i.useState([]);
        i.useEffect((() => {
            u(e.map((e => ({
                ...e,
                visible: !1
            }))))
        }), []);
        const $ = i.useCallback((e => {
            const t = [...b];
            t[e] = {
                ...t[e],
                visible: !t[e].visible
            }, u(t)
        }), [b]);
        return s.jsxs(j, {
            ...a,
            $centerTitle: l,
            $theme: t,
            children: [!o && s.jsx(f, {
                level: t === d ? "H2" : "HEADLINE",
                children: s.jsx(n, {
                    id: "component.FAQ.title"
                })
            }), b.length > 0 && s.jsx(c, {
                className: "mt-8 px-6 py-0",
                children: b.map(((e, t) => s.jsxs(x, {
                    $visible: e.visible,
                    children: [s.jsxs(m, {
                        onClick: () => $(t),
                        children: [e.question, s.jsx(r, {
                            iconSize: "default",
                            icon: e.visible ? "Minus" : "Plus",
                            theme: "linkSecondary"
                        })]
                    }), s.jsx(h, {
                        children: e.answer
                    })]
                }, t)))
            })]
        })
    };
export {
    b as F
};
