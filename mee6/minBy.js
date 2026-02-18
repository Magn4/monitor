import {
    j as e,
    e as r
} from "./index-afe8eeea.js";
import {
    W as s
} from "./app-ba64cf70.js";
import {
    f as t
} from "./_baseIteratee-30f45b1d.js";
const a = ({
        stroke: r = "currentColor",
        fill: s = "transparent",
        ...t
    }) => e.jsxs("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t,
        children: [e.jsx("path", {
            d: "M9.99935 16C12.9449 16 15.3327 13.7626 15.3327 11.0027C15.3327 8.50838 13.9763 6.55874 13.0407 5.62957C12.8671 5.45723 12.5782 5.53337 12.4801 5.75525C11.9822 6.88193 10.9445 8.50405 9.6184 8.50405C8.79768 8.61391 7.54394 7.91229 8.5559 4.43246C8.64702 4.11912 8.3125 3.86742 8.05698 4.07693C6.60241 5.26957 4.66602 7.67429 4.66602 11.0027C4.66602 13.7626 7.05383 16 9.99935 16Z",
            stroke: "url(#paint0_linear_17809_85716)",
            strokeWidth: "1.5"
        }), e.jsx("defs", {
            children: e.jsxs("linearGradient", {
                id: "paint0_linear_17809_85716",
                x1: "4.66602",
                y1: "16",
                x2: "15.5057",
                y2: "15.8416",
                gradientUnits: "userSpaceOnUse",
                children: [e.jsx("stop", {
                    "stop-color": "#7BFFA6"
                }), e.jsx("stop", {
                    offset: "1",
                    "stop-color": "#EAF2AC"
                })]
            })
        })]
    }),
    o = "/assets/sparkle-a95adc06.svg",
    n = "/assets/sparkle_right-5ed44de6.svg",
    l = ({
        url: r,
        name: s,
        className: t
    }) => {
        if (r) return e.jsx("div", {
            className: `relative mx-auto mt-[54px] lg:mt-[260px] h-[96px] lg:h-[160px] w-[96px] lg:w-[160px] rounded-3xl border-4 border-solid border-white bg-cover bg-center ${t}`,
            style: {
                backgroundImage: `url(${r})`
            }
        });
        const a = s.replace("'s", "").match(/\b\w/g),
            o = a ? a.slice(0, 3).join("") : s?.substr(0, 3);
        return e.jsx("div", {
            className: "relative mx-auto mt-[54px] lg:mt-[260px] h-[96px] lg:h-[160px] w-[96px] lg:w-[160px] rounded-3xl border-4 border-solid border-white text-dark-100 bg-dark-800 text-4xl flex items-center justify-center font-bold",
            children: e.jsx("span", {
                children: o
            })
        })
    };
var i = s;
var d = function(e, r, s) {
        for (var t = -1, a = e.length; ++t < a;) {
            var o = e[t],
                n = r(o);
            if (null != n && (void 0 === l ? n == n && !i(n) : s(n, l))) var l = n,
                d = o
        }
        return d
    },
    x = t,
    p = function(e, r) {
        return e < r
    };
const c = r((function(e, r) {
    return e && e.length ? d(e, x(r), p) : void 0
}));
export {
    a as F, l as L, o as S, n as a, c as m
};
