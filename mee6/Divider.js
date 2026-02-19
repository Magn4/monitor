import {
    s as t,
    A as o
} from "./Loader2-a0775a07.js";
import {
    m as r,
    p as i
} from "./mixins-9df48c32.js";
import {
    G as a,
    C as e
} from "./index-67e26437.js";
import {
    m as n
} from "./viewports-069dca7e.js";
const s = t.hr`
  width: 100%;
  height: 1px;
  background-color: ${a};
  border: none;
  margin: 24px 0;

  ${n(o`
    margin: 16px 0;
  `)}

  ${t=>t.large&&o`
      margin: 32px 0;
    `}

  ${t=>t.small&&o`
      margin: 16px 0;
    `}

  ${t=>t.xsmall&&o`
      margin: 8px 0;
    `}

    ${t=>r(t)}
    ${t=>i(t)}
`,
    m = t.h5`
  margin: 16px 0;
  color: inherit;
  align-self: stretch;
  text-align: center;
  position: relative;
  z-index: 2;
  margin: 28px 0;

  &:before {
    content: '';
    border-bottom: 1px solid ${a};
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    margin-top: -1px;
    z-index: -1;
  }

  &:after {
    content: '';
    width: 5em;
    height: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: -1;
    background: ${e};
  }
`;
export {
    s as D, m as O
};
