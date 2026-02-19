import {
    E as e
} from "./expandable-f0433bfd.js";
import {
    j as s,
    F as r
} from "./index-75d73738.js";
const d = e => "FormattedMessage" === e?.type?.name || "MemoizedFormattedMessage" === e?.type?.name || "FormattedMessage" === e?.type?.displayName || "MemoizedFormattedMessage" === e?.type?.displayName,
    a = e => "string" == typeof e ? e : d(e) ? e?.props.id : e?.props?.children && Array.isArray(e?.props?.children) ? e?.props?.children.find((e => d(e)))?.props?.id : e?.props?.children?.props?.id ? d(e?.props?.children?.props?.id) : void 0,
    t = ({
        title: d,
        description: t,
        children: i,
        suffix: n,
        expandable: o = !0,
        noShadow: l = !1,
        noBorder: p = !1,
        noChildren: m = !1,
        className: c = "",
        isOpened: x = !0,
        required: f = !1,
        getOpenStatus: h,
        onSwitchOpen: u
    }) => {
        const g = a(d);
        return s.jsxs(e, {
            onSwitchOpen: u,
            smooth: !1,
            className: `sub_feature_card rounded-lg ${c||"mb-4"}`,
            id: g,
            isOpened: x,
            getOpenStatus: h,
            expandable: o,
            noChildren: m,
            noShadow: l,
            suffix: n,
            renderHeader: () => d || t ? s.jsxs("div", {
                className: "flex flex-col w-full pr-4 max-w-[760px]",
                children: [s.jsxs("div", {
                    className: "sub_feature_title flex items-center text-lg font-semibold",
                    children: ["string" == typeof d ? s.jsx(r, {
                        id: d
                    }) : d, f && s.jsx("span", {
                        className: "text-danger-default ml-1",
                        children: "*"
                    })]
                }), t ? s.jsx("div", {
                    className: "mt-2 text-sm text-dark-300",
                    children: "string" == typeof t ? s.jsx(r, {
                        id: t
                    }) : t
                }) : null]
            }) : null,
            children: [!m && !p && s.jsx("div", {
                className: "grid w-full border-t border-solid border-dark-700 pt-4"
            }), i]
        })
    };
export {
    t as C, a as g
};
