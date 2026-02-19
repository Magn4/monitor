import {
    P as o,
    j as i,
    Y as t
} from "./index-75d73738.js";
import {
    W as e,
    s,
    A as r
} from "./Loader2-aadfe498.js";
import {
    a as n,
    I as a
} from "./Icon-00f46c3e.js";

function p({
    color: o,
    ...t
}) {
    return i.jsx("svg", {
        ...t,
        width: 84,
        height: 21,
        viewBox: "0 0 84 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: i.jsx("path", {
            d: "M25.692.984v19.82h-6.087V9.557l-4.09 11.245H10.24L6.15 9.558v11.245H0V.983h7.523l5.432 12.876L18.231.984h7.461zM36.652 5.313v3.29h7.15v4.188h-7.15v3.599h8.086v4.413H30.502V.9h14.236v4.413h-8.086zM55.113 5.313v3.29h7.149v4.188h-7.15v3.599h8.086v4.413H48.963V.9h14.235v4.413h-8.085zM77.694 6.438c-.125-.675-.364-1.181-.718-1.518-.333-.338-.822-.506-1.467-.506-.978 0-1.665.43-2.06 1.293-.396.862-.583 2.193-.562 3.992.353-.637.926-1.143 1.716-1.518.812-.375 1.718-.563 2.717-.563 2.039 0 3.662.563 4.87 1.687C83.396 10.43 84 12.041 84 14.141c0 1.368-.323 2.567-.968 3.598-.624 1.03-1.53 1.837-2.716 2.418-1.186.562-2.601.843-4.245.843-3.247 0-5.505-.9-6.774-2.699-1.25-1.818-1.873-4.33-1.873-7.534 0-2.511.28-4.554.842-6.128.583-1.575 1.488-2.737 2.716-3.486C72.231.384 73.865 0 75.883 0c2.394 0 4.204.618 5.432 1.855 1.249 1.219 1.946 2.746 2.092 4.583h-5.713zM73.324 14c0 .712.218 1.265.655 1.659.437.393 1.062.59 1.873.59.75 0 1.332-.178 1.748-.534.438-.375.656-.928.656-1.659 0-.712-.219-1.255-.656-1.63-.437-.375-1.03-.563-1.779-.563-.728 0-1.332.188-1.81.563-.458.374-.687.9-.687 1.574z",
            fill: o
        })
    })
}
p.propTypes = {
    color: o.string
}, p.defaultProps = {
    color: "#FFF"
};
const l = e`
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
    x = s(n)`
  position: relative;
`,
    h = s(a).attrs({
        icon: "GetPremium",
        size: "large"
    })``,
    m = s(p)`
  ${o=>!o.$onlyText&&r`
      margin-inline-start: 16px;
    `}
  position: relative;
`,
    v = s.div`
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    width: 38px;
    height: 38px;
    border-radius: 50%;
    position: absolute;
    left: 1px;
    box-shadow: 0px 0px 88px #60d1f6;
    animation: ${l} 5s linear infinite;

    ${o=>o.$onlyText?r`
          display: none;
        `:o.$premium?r`
          top: 22px;
          left: 17px;
          width: 4px;
          height: 4px;
          box-shadow: 0px 0px 88px 20px ${t};
        `:void 0}
`;

function c({
    premium: o,
    onlyText: t = !1,
    ...e
}) {
    return i.jsxs(v, {
        ...e,
        $premium: o,
        $onlyText: t,
        children: [t ? "" : o ? i.jsx(h, {}) : i.jsx(x, {}), i.jsx(m, {
            $onlyText: t
        })]
    })
}
export {
    c as L
};
