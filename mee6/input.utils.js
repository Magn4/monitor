import {
    r as e,
    p as r,
    j as t,
    F as l,
    f as a
} from "./index-75d73738.js";
import {
    R as s,
    L as n
} from "./app-61e5c911.js";
import {
    L as i
} from "./label-8afa9932.js";
import {
    a as d
} from "./modal.constants-8f18da75.js";
const o = ({
    value: o = "",
    disabled: p = !1,
    placeholder: f,
    type: x = u.TEXT,
    icon: h,
    label: m = !1,
    required: b = !1,
    position: g = "outside-left",
    labelBorder: w = !1,
    showError: j = !0,
    showWarning: k = !0,
    error: v,
    warning: y,
    errorAndWarnCircleClassname: N = "mr-1 h-4 w-4",
    className: L = "",
    validate: C,
    charLimit: B,
    sanitize: E,
    maxLength: R,
    onChange: S,
    onBlur: T,
    onRawBlur: z,
    onClick: A = (() => {}),
    loading: W,
    prefix: $,
    suffix: q,
    multiLine: D = !1,
    rows: I = 1,
    ...M
}) => {
    const X = e.useRef(null),
        Z = e.useRef(null);
    r(Z);
    const [F, H] = e.useState(E && o ? E(o.toString()) : o), [O, P] = e.useState(null), U = e => {
        let {
            value: r
        } = e.target;
        if (E && (r = E(r)), C || c[x]) {
            const {
                error: e,
                value: t
            } = C ? C(r) : c[x](r);
            P(e || null), H(t ?? r)
        } else H(r)
    };
    return s((() => H(E ? E(o?.toString()) : o)), [o]), s((() => S && S(F)), [F]), s((() => P(v)), [v]), e.useEffect((() => {
        X.current && (X.current.style.height = "auto", X.current.style.height = X.current.scrollHeight + "px")
    }), [F]), t.jsxs("div", {
        className: `relative flex flex-col ${L}`,
        onClick: A,
        ref: Z,
        children: ["outside-left" === g && m ? t.jsx(i, {
            required: b,
            children: "string" == typeof m ? t.jsx(l, {
                id: m
            }) : m
        }) : null, t.jsxs("div", {
            className: a("overflow-hidden flex items-center justify-start group bg-dark-900 rounded-lg border border-solid transition-all duration-200 focus-within:ring-opacity-30 focus-within:ring-[4px]", {
                "bg-opacity-70 hover:border-dark-900 cursor-not-allowed": p,
                "hover:border-danger-default border-danger-default focus-within:border-danger-default focus-within:ring-danger-default": O,
                "hover:border-warning-default border-warning-default focus-within:border-warning-default focus-within:ring-warning-default": y && !O,
                "hover:border-brand-default focus-within:border-brand-default focus-within:ring-brand-default": !O && !p && !y,
                "border-dark-900": !O
            }),
            children: ["inside-left" === g && (m || h) && t.jsxs("div", {
                className: a("h-full flex items-center min-h-[48px] whitespace-nowrap", {
                    "border-r border-solid border-dark-600 px-3": w,
                    "pl-4": !w
                }),
                children: [h || null, t.jsx("label", {
                    children: "string" == typeof m ? t.jsx(l, {
                        id: m
                    }) : m
                })]
            }), $ && t.jsx("div", {
                className: a("h-full flex items-center min-h-[48px] whitespace-nowrap", {
                    "border-r border-solid border-dark-600 px-3": w,
                    "pl-4": !w
                }),
                children: t.jsx("label", {
                    children: $
                })
            }), D || I > 1 ? t.jsx("textarea", {
                ref: X,
                value: null === F ? "" : F,
                rows: I,
                disabled: p,
                placeholder: f,
                maxLength: R,
                style: {
                    resize: "none"
                },
                className: a("bg-transparent outline-none border-none py-3 placeholder:text-dark-300 text-base text-dark-100 w-full", {
                    "text-dark-500 placeholder:text-dark-500 cursor-not-allowed": p,
                    "text-dark-100": !p,
                    "px-4": !h,
                    "pl-3 pr-4": h && "inside-left" === g && !$,
                    "pl-4 pr-3": h && "inside-right" === g && !$,
                    "pl-2 pr-3": m && "string" == typeof m && "inside-left" === g && !$,
                    "pl-0.5 pr-4": !!$
                }),
                onChange: U,
                onBlur: e => {
                    T && T(F), z && z(e)
                }
            }) : t.jsx("input", {
                ...M,
                value: null === F ? "" : F,
                type: x,
                disabled: p,
                placeholder: f,
                maxLength: R,
                className: a("bg-transparent outline-none border-none py-3 placeholder:text-dark-300 text-base text-dark-100 w-full", {
                    "text-dark-500 placeholder:text-dark-500 cursor-not-allowed": p,
                    "text-dark-100": !p,
                    "px-4": !h,
                    "pl-3 pr-4": h && "inside-left" === g && !$,
                    "pl-4 pr-3": h && "inside-right" === g && !$,
                    "pl-2 pr-3": m && "string" == typeof m && "inside-left" === g && !$,
                    "pl-0.5 pr-4": !!$
                }),
                onChange: U,
                onBlur: e => {
                    T && T(F), z && z(e)
                }
            }), W && t.jsx(n, {
                size: "small"
            }), "inside-right" === g && (m || h) && t.jsxs("div", {
                className: a("h-full flex items-center min-h-[48px] whitespace-nowrap", {
                    "border-r border-solid border-dark-600 px-3": w,
                    "pr-4": !w
                }),
                children: [h || null, t.jsx("label", {
                    children: "string" == typeof m ? t.jsx(l, {
                        id: m
                    }) : m
                })]
            }), q && t.jsx("div", {
                className: a("h-full flex items-center min-h-[48px] whitespace-nowrap", {
                    "border-r border-solid border-dark-600 px-3": w,
                    "pr-4": !w
                }),
                children: t.jsx("label", {
                    children: q
                })
            })]
        }), k && y && t.jsxs("p", {
            className: "mt-2 flex items-start justify-start text-sm text-warning-default font-medium",
            children: [t.jsx(d, {
                className: "text-warning-default " + N
            }), y]
        }), j && O && t.jsxs("p", {
            className: "mt-2 flex items-start justify-start text-sm text-danger-default font-medium",
            children: [t.jsx(d, {
                className: "text-danger-default " + N
            }), O]
        })]
    })
};
var u = (e => (e.TEXT = "text", e.PASSWORD = "password", e.EMAIL = "email", e.NUMBER = "number", e))(u || {});
const p = {
        email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        number: /^\d+$/
    },
    c = {
        number: e => {
            let r = e;
            return p.number.test(r) || (r = r.replace(/\D/g, "")), {
                newValue: r
            }
        },
        email: e => !!p.email.test(e) || {
            error: "This field has an error inside."
        }
    };
export {
    o as I, u as T
};
