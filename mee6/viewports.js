import {
    A as a
} from "./Loader2-a0775a07.js";
const i = {
        TABLET: 1024,
        PHONE: 670,
        HUGE: 1920
    },
    d = d => a`
  @media (max-width: ${i.PHONE}px) {
    ${d}
  }
`,
    m = d => a`
  @media (min-width: ${i.PHONE}px) {
    ${d}
  }
`,
    x = d => a`
  @media (max-width: ${i.TABLET}px) and (min-width: ${i.PHONE}px) {
    ${d}
  }
`,
    $ = d => a`
  @media (min-width: ${i.TABLET}px) {
    ${d}
  }
`,
    t = d => a`
  @media (max-width: ${i.TABLET}px) {
    ${d}
  }
`,
    s = d => a`
  @media (max-height: 600px) and (min-width: ${i.PHONE}px) {
    ${d}
  }
`;
export {
    i as S, m as a, $ as d, d as m, t as n, s, x as t
};
