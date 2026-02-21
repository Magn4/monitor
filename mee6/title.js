import {
    W as t,
    j as e
} from "./index-e0afec69.js";
import {
    s as n,
    A as i
} from "./Loader2-ea5f73c7.js";
import {
    m as o
} from "./viewports-530dfeda.js";
const r = "H1",
    p = "H2",
    s = "H3",
    a = "HEADLINE",
    h = "SUBHEADLINE",
    g = "FIELD",
    x = "P",
    l = {
        H1: "h1",
        H2: "h2",
        H3: "h3",
        HEADLINE: "h4",
        SUBHEADLINE: "h5",
        FIELD: "h5",
        P: "p"
    };
const f = n.h1`
  position: relative;
  display: flex;
  align-items: center;
  color: ${t};

  ${t=>function(t){switch(t){case r:return i`
        font-size: 35px;
        line-height: 40px;
        font-weight: 700;
        letter-spacing: -1px;
      `;case p:return i`
        font-size: 30px;
        line-height: 32px;
        font-weight: 700;
        letter-spacing: -0.8px;
      `;case s:return i`
        font-size: 26px;
        line-height: 28px;
        font-weight: 700;
        letter-spacing: -0.8px;
      `;case x:case a:return i`
        font-size: 22px;
        line-height: 24px;
        font-weight: 700;
      `;case h:return i`
        font-size: 20px;
        line-height: 28px;
        font-weight: 400;

        ${o(i`
          font-size: 16px;
          font-weight: 600;
        `)}
      `;case g:return i`
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        margin-bottom: 8px;
      `;default:return}}(t.$level)}

  ${t=>t.$noMargin&&i`
      margin-bottom: 0;
      margin-top: 0;
      padding-top: 0;
      padding-bottom: 0;
    `}

    ${t=>t.$top&&i`
      margin-top: 16px;
    `}

    ${t=>t.$bottom&&i`
      margin-bottom: 16px;
    `}
`;

function c({
    children: t,
    level: n = r,
    tag: i,
    noMargin: o,
    ...p
}) {
    return e.jsx(f, {
        ...p,
        as: i || l[n],
        $level: n,
        $noMargin: o,
        children: t
    })
}
export {
    c as T
};
