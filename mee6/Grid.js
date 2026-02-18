import {
    s as i,
    A as t
} from "./Loader2-e1b3d35e.js";
import {
    m as a,
    p as e,
    w as l
} from "./mixins-31afc8b6.js";
import {
    m as n
} from "./viewports-c65d73a1.js";
const r = {
        m0: 0,
        m05: 4,
        m1: 8,
        m2: 16,
        m3: 24,
        m4: 32,
        m5: 40,
        m6: 80
    },
    s = i.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: ${i=>"left"===i?.align?"flex-start":"right"===i?.align?"flex-end":"stretch"===i?.align?"stretch":"center"};
  width: ${i=>i?.fullWidth?"100%":"auto"};
  ${i=>a(i)}
  ${i=>e(i)}
`,
    m = i(s)`
  max-width: 760px;
  margin: auto;
  ${i=>a(i)}
  ${i=>e(i)}

  ${n(t`
    padding: ${r.m2}px;
  `)}
`,
    g = i.div`
  min-width: 0;
  display: flex;
  flex-direction: row;
  justify-content: ${i=>"left"===i?.align?"flex-start":"right"===i?.align?"flex-end":i?.align?i.align:"center"};
  align-items: ${i=>"center"===i?.verticalAlign?"center":"bottom"===i?.verticalAlign?"flex-end":"flex-start"};
  width: 100%;
  grid-gap: ${i=>i.gap?i.gap+"px":0};
  ${i=>a(i)}
  ${i=>e(i)}
`;
i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: ${i=>i.gap?i.gap+"px":0};
  ${i=>l(i)}
`;
export {
    s as C, g as R, m as a, r as s
};
