import {
    W as e,
    C as t
} from "./modal.constants-0cca4730.js";
import {
    j as s,
    F as n,
    p as o
} from "./index-afe8eeea.js";
const i = ({
        icon: e,
        title: i,
        onClose: a,
        label: l
    }) => {
        const c = o();
        return s.jsxs("div", {
            className: "mb-6",
            children: [s.jsxs("div", {
                className: "flex justify-between items-start mb-4",
                children: [s.jsx("div", {
                    className: "flex-shrink-0",
                    children: e
                }), s.jsx(t, {
                    onClick: () => {
                        a && a(), l && c("modal_cancel", {
                            label: l
                        })
                    },
                    className: "text-white h-3 w-3 transition-all duration-200 opacity-60 hover:opacity-100 cursor-pointer"
                })]
            }), s.jsx("h2", {
                className: "text-dark-100 font-medium text-lg",
                children: "string" == typeof i ? s.jsx(n, {
                    id: i
                }) : i
            })]
        })
    },
    a = ({
        onConfirm: t,
        onCancel: o,
        title: a,
        description: l,
        confirmButtonText: c = "",
        cancelButtonText: r = "",
        icon: m,
        theme: x = "primary",
        label: d = "",
        hook: j
    }) => s.jsxs(e, {
        open: j.isOpen,
        onClose: j.close,
        theme: x,
        label: d,
        children: [m ? s.jsx(i, {
            icon: m,
            title: a,
            onClose: j.close,
            label: d
        }) : s.jsx(e.Header, {
            icon: m,
            title: a
        }), s.jsx(e.Main, {
            className: "my-3",
            children: l ? s.jsx("p", {
                className: "text-dark-300 mt-2 mb-8 whitespace-pre-line",
                children: "string" == typeof l ? s.jsx(n, {
                    id: l
                }) : l
            }) : null
        }), s.jsx(e.Footer, {
            cancelButtonText: r || "button.cancel",
            confirmButtonText: c || "button.yes",
            onCancel: async () => {
                if (!o) return j.close();
                const e = o();
                e instanceof Promise && await e
            },
            onConfirm: async () => {
                const e = t();
                e instanceof Promise && await e, j.close()
            }
        })]
    });
export {
    a as C
};
