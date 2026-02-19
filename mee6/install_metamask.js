import {
    z as a,
    r as s,
    ar as e,
    j as l,
    F as t,
    a3 as o,
    B as n
} from "./index-684a1b71.js";
import {
    W as m
} from "./modal.constants-e7a21a8a.js";
import {
    s as i
} from "./app-91bc7f76.js";
const d = ({
    show: d,
    onClose: _
}) => {
    const {
        guild: r
    } = a();
    return s.useEffect((() => {
        _()
    }), []), i((() => {
        d && e("web3_modal_view", {
            modal: "looks_like_you_dont_have_metamask_installed"
        }, r)
    }), [d]), l.jsxs(m, {
        onClose: () => {
            e("web3_modal_click", {
                modal: "looks_like_you_dont_have_metamask_installed",
                label: "cross"
            }, r), _()
        },
        open: d,
        children: [l.jsx(m.Header, {
            title: "nftpass.install.nometamask.title"
        }), l.jsxs(m.Main, {
            children: [l.jsx("img", {
                src: "/assets/install_metamask-583600bd.svg",
                className: "rounded-lg my-8"
            }), l.jsx("p", {
                className: "text-sm text-dark-300 mb-8",
                children: l.jsx(t, {
                    id: "nftpass.install.nometamask.details"
                })
            })]
        }), l.jsx(m.Footer, {
            renderConfirmButton: () => l.jsx(o, {
                event: "web3_modal_click",
                data: {
                    modal: "looks_like_you_dont_have_metamask_installed",
                    label: "get_metamask"
                },
                children: l.jsx(n, {
                    icon: "Export",
                    href: "https://metamask.io/",
                    target: "_blank",
                    className: "ml-2",
                    children: l.jsx(t, {
                        id: "nftpass.install.nometamask.open"
                    })
                })
            }),
            renderCancelButton: () => l.jsx(o, {
                event: "web3_modal_click",
                data: {
                    modal: "looks_like_you_dont_have_metamask_installed",
                    label: "i_have_changed_my_mind"
                },
                children: l.jsx(n, {
                    theme: "secondary",
                    onClick: () => _(),
                    children: l.jsx(t, {
                        id: "nftpass.install.nometamask.cancel"
                    })
                })
            })
        })]
    })
};
export {
    d as I
};
