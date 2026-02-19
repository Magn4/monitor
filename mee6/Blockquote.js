import {
    s as o,
    A as r
} from "./Loader2-db3a3ef5.js";
import {
    m as e,
    p as s
} from "./mixins-b8067724.js";
import {
    R as a,
    O as c,
    k as d,
    l as p,
    m as i,
    W as l
} from "./index-684a1b71.js";
const n = o.div`
  background-color: ${a(c,.1)};
  border: 1px solid ${c};
  color: ${c};
  padding: 24px;
  white-space: pre-line;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${o=>"success"===o.theme&&r`
      background-color: ${a(d,.1)};
      border-color: ${d};
      color: ${d};
    `}

  ${o=>"danger"===o.theme&&r`
      background-color: ${a(p,.1)};
      border-color: ${p};
      color: ${p};
    `}

  ${o=>"info"===o.theme&&r`
      background-color: rgba(83, 91, 112, 0.24);
      box-shadow: 0px 8px 32px rgba(83, 91, 112, 0.08);
      border-color: ${i};
      color: ${l};
      border-radius: 4px;
      padding: 16px 24px 16px 16px;
    `}

    ${o=>e(o)}
    ${o=>s(o)}
`;
export {
    n as B
};
