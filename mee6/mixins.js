import {
    A as t
} from "./Loader2-aadfe498.js";
import {
    m as o
} from "./viewports-7b2f2c00.js";
import {
    c as p
} from "./index-75d73738.js";
const i = o => t`
  ${o.$top&&t`
    margin-top: 16px;
  `}

  ${o.$bottom&&t`
    margin-bottom: 16px;
  `}
`,
    a = p => t`
  ${p.margin&&"center"===p.margin?"margin: auto;":""}
  ${p.mTop?"margin-top:"+("auto"===p?.mTop?"auto":"number"==typeof p?.mTop?p?.mTop+"px":"24px"):""};
  ${p.mBottom?"margin-bottom:"+("auto"===p?.mBottom?"auto":"number"==typeof p?.mBottom?p?.mBottom+"px":"24px"):""};
  ${p.mLeft?"margin-left:"+("auto"===p?.mLeft?"auto":"number"==typeof p?.mLeft?p?.mLeft+"px":"24px"):""};
  ${p.mRight?"margin-right:"+("auto"===p?.mRight?"auto":"number"==typeof p?.mRight?p?.mRight+"px":"24px"):""};

  ${o(`\n    ${void 0!==p.mMTop?"margin-top:"+("auto"===p?.mMTop?"auto":"number"==typeof p?.mMTop?p?.mMTop+"px":"24px"):""};\n    ${void 0!==p.mMBottom?"margin-bottom:"+("auto"===p?.mMBottom?"auto":"number"==typeof p?.mMBottom?p?.mMBottom+"px":"24px"):""};\n    ${void 0!==p.mMLeft?"margin-left:"+("auto"===p?.mMLeft?"auto":"number"==typeof p?.mMLeft?p?.mMLeft+"px":"24px"):""};\n    ${void 0!==p.mMRight?"margin-right:"+("auto"===p?.mMRight?"auto":"number"==typeof p?.mMRight?p?.mMRight+"px":"24px"):""};\n    `)}
`,
    m = o => t`
  ${void 0!==o.pTop?"padding-top:"+("auto"===o?.pTop?"auto":"number"==typeof o?.pTop?o?.pTop+"px":"24px"):""};
  ${void 0!==o.pBottom?"padding-bottom:"+("auto"===o?.pBottom?"auto":"number"==typeof o?.pBottom?o?.pBottom+"px":"24px"):""};
  ${void 0!==o.pLeft?"padding-left:"+("auto"===o?.pLeft?"auto":"number"==typeof o?.pLeft?o?.pLeft+"px":"24px"):""};
  ${void 0!==o.pRight?"padding-right:"+("auto"===o?.pRight?"auto":"number"==typeof o?.pRight?o?.pRight+"px":"24px"):""};
  ${void 0!==o.padding?"padding:"+("auto"===o?.padding?"auto":"number"==typeof o?.padding?o?.padding+"px":"24px"):""};
`,
    e = o => t`
  ${o.color?"color:"+p[o.color.toUpperCase()]:""};
  ${o.bgColor?"background-color:"+p[o.bgColor.toUpperCase()]:""};
  ${o.gradient?t`
        background: linear-gradient(
          to right,
          ${p[o.gradient[0].toUpperCase()]} 0%,
          ${p[o.gradient[1].toUpperCase()]} 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      `:""}
`,
    r = o => t`
  ${o.bold?"font-weight: bold;":""}
  font-style: ${o.italic?"italic":"normal"};
`,
    n = o => t`
  ${o.align?t`
        text-align: ${o.align};
      `:""}
`,
    d = o => o.ellipsis ? t`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      ` : "",
    g = o => o.wFull ? t`
        width: 100%;
      ` : o.widthPx ? t`
        width: ${o.widthPx}px;
        max-width: 100%;
      ` : o.widthPc ? t`
        width: ${o.widthPc}%;
      ` : o.widthCol ? t`
        width: ${100/12*o.widthCol}%;
      ` : "";
export {
    i as a, e as c, d as e, r as f, a as m, m as p, n as t, g as w
};
