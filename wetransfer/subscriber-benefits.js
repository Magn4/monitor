(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2893], {
        58436: e => {
            e.exports = {
                PanelHeader: "PanelHeader_PanelHeader___muol",
                WorkspaceName: "PanelHeader_WorkspaceName__6Ahjx",
                PanelInformation: "PanelHeader_PanelInformation__MGSx7",
                PanelAvatar: "PanelHeader_PanelAvatar__BVr9C",
                PanelName: "PanelHeader_PanelName__JiZmf",
                PanelDescription: "PanelHeader_PanelDescription__N0CQT",
                divider: "PanelHeader_divider__xAkWw"
            }
        },
        64674: (e, a, n) => {
            "use strict";
            n.d(a, {
                a: () => _
            });
            var l = n(23798);
            n(21462);
            var r = n(38169),
                s = n(97116),
                d = n(53123),
                i = n(15913),
                t = n(58436),
                c = n.n(t);

            function _(e) {
                var a;
                let {
                    showWorkspaceName: n,
                    showWorkspaceAvatar: t,
                    panelName: _,
                    panelDescription: o,
                    buttonLabel: m,
                    onClick: P,
                    isDisabled: p,
                    children: u,
                    formId: N,
                    setWorkspaceName: v,
                    id: h
                } = e, {
                    user: x
                } = (0, r.d4)(e => ({
                    user: e.user
                })), k = null == x || null == (a = x.profile_picture) ? void 0 : a.thumbnail_url, {
                    currentTeam: j
                } = (0, i.o)(), H = d.A.getWorkspaceName(j, x);
                return (0, l.jsxs)("div", {
                    className: c().PanelHeader,
                    "data-testid": "panel-header",
                    id: h,
                    children: [n && (0, l.jsx)("span", {
                        "data-testid": "workspace-name",
                        className: c().WorkspaceName,
                        children: v || H
                    }), (0, l.jsxs)("div", {
                        className: c().PanelInformation,
                        children: [t && (0, l.jsx)("span", {
                            "data-testid": "panel-avatar",
                            className: c().PanelAvatar,
                            style: {
                                backgroundImage: "url(".concat(k, ")")
                            }
                        }), (0, l.jsxs)("div", {
                            children: [(0, l.jsx)("h1", {
                                className: c().PanelName,
                                children: _
                            }), o && (0, l.jsx)("p", {
                                className: c().PanelDescription,
                                children: o
                            })]
                        }), m && (0, l.jsx)(s.$, {
                            type: N ? "submit" : void 0,
                            form: N,
                            className: c().PanelButton,
                            onClick: P,
                            disabled: p,
                            children: m
                        })]
                    }), u, (0, l.jsx)("div", {
                        className: c().divider
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=subscriber-benefits.044c3963c97578f3.js.map