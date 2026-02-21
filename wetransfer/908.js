(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8681], {
        8681: (e, t, a) => {
            "use strict";
            a.d(t, {
                h: () => U,
                L: () => h
            });
            var l = a(23798),
                s = a(46001),
                o = a.n(s),
                i = a(21462),
                r = a(75546),
                d = a(38169),
                _ = a(15933),
                w = a(97460),
                n = a(76693),
                M = a(16173),
                g = a(37828),
                c = a(87963),
                u = a(73278),
                N = a(44765),
                b = a(11115),
                j = a(17913),
                D = a(89187),
                p = a(66688),
                m = a(17944),
                S = a(7686),
                C = a(7012),
                x = a(18237),
                I = a(62760),
                y = a(86781),
                T = a(62706),
                z = a.n(T);

            function h() {
                let e = (0, d.d4)(y.mB),
                    {
                        t
                    } = (0, r.Bd)(),
                    {
                        subscription: a
                    } = (0, g.f)(),
                    {
                        settings: {
                            repackaging_enterprise_cta_url: s
                        }
                    } = (0, I.k)(),
                    {
                        showUpgradeSubscriptionModal: o,
                        confirmPlanSwitchOrReactivate: n,
                        closeUpgradeSubscriptionModal: M,
                        selectedTierName: T,
                        isModalVisible: h,
                        isSwitchInProgress: A,
                        selectedTier: U,
                        selectedBillingInterval: L
                    } = (0, N.W)(),
                    E = (0, S.kQ)({
                        tier: D.js.ENTERPRISE
                    }),
                    k = (0, x.M)(),
                    [v, B] = (0, i.useState)(!1),
                    Q = !(0, C.PF)(e) && !v,
                    Y = Q && !k;
                (0, i.useEffect)(() => {
                    (0, c.Od)().trackUserAction(m.XH.switchScreenDisplayed)
                }, []);
                let f = (0, l.jsx)(_.$, {
                    appearance: "primary",
                    size: "large",
                    className: z().nextCTA,
                    as: "button",
                    type: "submit",
                    fullwidth: !0,
                    onClick: () => {
                        if ((0, c.Od)().trackUserAction(m.XH.switchScreenContinued(v ? m.Jv.CUSTOM : m.Jv.SELF_SERVICE)), k && Q) return void o(D.js.ENTERPRISE, null == a ? void 0 : a.interval);
                        window.location.href = v ? s : E
                    },
                    disabled: Y,
                    children: t("enterprise_onboarding.crossroads.next")
                });
                return (0, l.jsxs)("div", {
                    className: z().container,
                    children: [(0, l.jsx)(b.g, {}), (0, l.jsx)(j.e, {
                        className: z().avatar
                    }), (0, l.jsx)("h1", {
                        className: z().title,
                        children: t("enterprise_onboarding.crossroads.title", {
                            name: e.given_name
                        })
                    }), (0, l.jsxs)("div", {
                        className: z().switchWrapper,
                        children: [(0, l.jsxs)("div", {
                            className: z().switch,
                            role: "radiogroup",
                            children: [(0, l.jsx)(O, {
                                title: t("enterprise_onboarding.crossroads.self_service.title"),
                                tag: t("enterprise_onboarding.crossroads.self_service.tag"),
                                isSelected: !v,
                                perks: [t("enterprise_onboarding.crossroads.self_service.perk_1"), t("enterprise_onboarding.crossroads.self_service.perk_2"), t("enterprise_onboarding.crossroads.self_service.perk_3"), t("enterprise_onboarding.crossroads.self_service.perk_4")],
                                value: "SELF_SERVICE",
                                onSelectedChange: e => B("CUSTOM" === e)
                            }), (0, l.jsx)(O, {
                                title: t("enterprise_onboarding.crossroads.custom.title"),
                                tag: t("enterprise_onboarding.crossroads.custom.tag"),
                                isSelected: v,
                                perks: [t("enterprise_onboarding.crossroads.custom.perk_1"), t("enterprise_onboarding.crossroads.custom.perk_2"), t("enterprise_onboarding.crossroads.custom.perk_3")],
                                value: "CUSTOM",
                                onSelectedChange: e => B("CUSTOM" === e)
                            })]
                        }), Y ? (0, l.jsx)(w.m, {
                            mode: "dark",
                            content: (0, l.jsx)("span", {
                                children: t("enterprise_onboarding.crossroads.tooltip")
                            }),
                            position: "top",
                            containerClassName: z().tooltip,
                            className: z().tooltipWrapper,
                            children: f
                        }) : f]
                    }), (0, l.jsx)("div", {
                        className: z().contactBubbleFixedContainer,
                        children: (0, l.jsx)(p.j, {
                            context: m.Wr.SWITCH
                        })
                    }), h && (0, l.jsx)(u.r, {
                        switchPlansOrReactivate: n,
                        planName: T,
                        isLoading: A,
                        closeModal: M,
                        planTier: U,
                        selectedBillingInterval: L
                    })]
                })
            }

            function O(e) {
                return (0, l.jsxs)("div", {
                    className: o()(z().item, {
                        [z().itemSelected]: e.isSelected
                    }),
                    onClick: () => e.onSelectedChange(e.value),
                    children: [(0, l.jsxs)("div", {
                        className: z().itemTitleContainer,
                        children: [(0, l.jsx)(n.a, {
                            id: e.value,
                            className: z().itemRadio,
                            value: e.value,
                            onChange: t => e.onSelectedChange(t.target.value),
                            checked: e.isSelected
                        }), (0, l.jsx)("label", {
                            className: z().itemTitle,
                            htmlFor: e.value,
                            children: e.title
                        }), (0, l.jsx)("span", {
                            className: z().itemTag,
                            children: e.tag
                        })]
                    }), e.perks.map(e => (0, l.jsx)(A, {
                        title: e
                    }, e))]
                })
            }

            function A(e) {
                return (0, l.jsxs)("div", {
                    className: z().perkContainer,
                    children: [(0, l.jsx)(M.bT1, {
                        size: "small",
                        className: z().perkIcon
                    }), (0, l.jsx)("span", {
                        className: z().perk,
                        children: e.title
                    })]
                })
            }
            let U = "enterprise"
        },
        11115: (e, t, a) => {
            "use strict";
            a.d(t, {
                g: () => s
            });
            var l = a(23798);
            a(21462);
            let s = () => {
                let e = "WeTransfer logo";
                return (0, l.jsx)("div", {
                    className: "Logo",
                    children: (0, l.jsx)("img", {
                        src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIxIiB2aWV3Qm94PSIwIDAgMTQwIDIxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTQ5XzEwNzQ1KSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8xNDlfMTA3NDUpIj4KPHBhdGggZD0iTTI4LjI4NzkgMS4yOTYxNEMyNy4yMjMyIDIuMzg5NDMgMjYuOTA4NiAyLjk3MTcyIDI2LjE0NjQgNC42MjM1NEwxOS4xMTY3IDIwLjVMMTQuMTQ0IDkuMzc2OTVMOS4yMzE2OSAyMC41TDIuMTQxNTYgNC42MzU0MkMxLjQxNTYxIDIuOTgzNjEgMS4wODg5MyAyLjQ0ODg1IDAgMS4yOTYxNEg4Ljk4OTcxQzguMzEyMTUgMS44NTQ2NyA3Ljk2MTI4IDIuNTc5NTcgNy45NjEyOCAzLjQ4MjcyQzcuOTYxMjggNC4xMjQ0MyA4LjA3MDE3IDQuNTc2IDguNDIxMDUgNS40MDc4NUwxMS4xMDcxIDExLjcwNjFMMTMuMDkxMyA3LjAxMjEzTDExLjk3ODIgNC40NjkwNUMxMS4zMjQ5IDMuMDA3MzcgMTAuODY1MSAyLjA5MjM0IDEwLjIxMTcgMS4yOTYxNEgxOS4yMDE0QzE4LjMzMDMgMS44NTQ2NyAxNy44OTQ3IDIuNTc5NTcgMTcuODk0NyAzLjQ4MjcyQzE3Ljg5NDcgNC4xMjQ0MyAxOC4wMDM2IDQuNTc2IDE4LjM1NDUgNS40MDc4NUwyMS4xMDEgMTEuNzA2MUwyMy44MTEyIDUuNDA3ODVDMjQuMTYyMSA0LjU3NiAyNC4yOTUyIDQuMTI0NDMgMjQuMjk1MiAzLjUxODM3QzI0LjI5NTIgMi43MjIxNyAyMy43MjY1IDEuNzU5NiAyMy4wNzMyIDEuMzA4MDNIMjguMjg3OVYxLjI5NjE0WiIgZmlsbD0iIzMzMzMzMyIvPgo8cGF0aCBkPSJNMzcuNjI4MyAxNS40Mzc2QzM2Ljc1NzEgMTkuMTQ1MiAzNC42NjQgMjAuMzY5MiAzMS42MjcxIDIwLjM2OTJDMjguMTU0NiAyMC4zNjkyIDI0Ljg5OTkgMTcuODg1NiAyNC44OTk5IDEzLjIyNzJDMjQuODk5OSA4Ljc0NzEyIDI3Ljc3OTUgNS41NzQyMiAzMS41NTQ1IDUuNTc0MjJDMzQuMDIyNyA1LjU3NDIyIDM3LjQ5NTIgNi44MjE5OSAzNy40OTUyIDEyLjExMDJIMjkuMjkxOUMyOS44NjA2IDE0LjkzODUgMzEuNzM1OSAxNi40MDAxIDM0LjMzNzMgMTYuNDAwMUMzNS42NjgyIDE2LjM4ODIgMzYuNTk5OCAxNi4xNTA2IDM3LjYyODMgMTUuNDM3NlpNMjkuMTM0NiAxMC4yNTYzVjEwLjYwMUgzMi43MTZDMzIuNzE2IDcuOTM5MDQgMzIuMTIzMSA3LjEwNzIgMzAuOTczNyA3LjEwNzJDMjkuODEyMiA3LjEwNzIgMjkuMTM0NiA4LjI1OTkgMjkuMTM0NiAxMC4yNTYzWiIgZmlsbD0iIzMzMzMzMyIvPgo8cGF0aCBkPSJNNTQuMDgzMyA2LjEyMDkxQzUxLjgzMjkgNC4wMTc1MyA0OS42MDY2IDIuOTI0MjQgNDcuODg4NSAyLjkyNDI0VjE0LjY4ODlDNDcuODg4NSAxNy4wNjU3IDQ4LjUxNzcgMTguNTAzNiA1MC4xNjMyIDE5Ljk2NTJIMzkuOTAzMUM0MS41NjA2IDE4LjUwMzYgNDIuMTc3NyAxNy4wNTM4IDQyLjE3NzcgMTQuNjg4OVYyLjkyNDI0QzQwLjQ3MTcgMi45MjQyNCAzOC4xMzY2IDQuMDE3NTMgMzUuOTgyOSA2LjEyMDkxTDM3LjA3MTggMC41QzM3LjgwOTkgMS4wNTg1MyAzOS4xNjUgMS4yOTYyIDQwLjY3NzQgMS4yOTYySDQ5LjM2NDZDNTAuODg5MSAxLjI5NjIgNTIuMjQ0MiAxLjA1ODUzIDUyLjk3MDIgMC41TDU0LjA4MzMgNi4xMjA5MVoiIGZpbGw9IiMzMzMzMzMiLz4KPHBhdGggZD0iTTYwLjMyNyAxOS45NjUzSDUxLjY4ODFDNTIuNzUyOCAxOC43NDEzIDUzLjIxMjYgMTcuOTMzMiA1My4yMTI2IDE1Ljk5NjJWMTEuNjcwNkM1My4yMTI2IDEwLjE0OTUgNTIuOTk0OCA5LjQzNjQ3IDUxLjk2NjQgOC40OTc2N0w1MS4zNzM1IDcuOTYyOTFMNTcuODk1IDUuNTYyNDRWOC44ODk4M0M1OC41MjQyIDYuOTY0NyA1OS40OTIxIDUuNTYyNDQgNjEuMTAxMyA1LjU2MjQ0QzYyLjQwOCA1LjU2MjQ0IDYzLjI0MjkgNi40NjU1OSA2My4yNDI5IDcuNzk2NTRDNjMuMjQyOSA5LjIxMDY5IDYyLjM0NzUgMTAuMTk3IDYxLjEwMTMgMTAuMTk3QzYwLjgzNTEgOS41NzkwNyA2MC4xODE4IDkuMjkzODcgNTkuNTc2OCA5LjI5Mzg3QzU5LjA5MjggOS4yOTM4NyA1OC42MjEgOS40MjQ1OSA1OC4zNzkgOS42NjIyNlYxNS44Mjk4QzU4LjM2NjkgMTcuODg1NyA1OC43MTc4IDE4LjQ0NDIgNjAuMzI3IDE5Ljk2NTNaIiBmaWxsPSIjMzMzMzMzIi8+CjxwYXRoIGQ9Ik03OC4xNjA4IDE3LjUxNzJDNzcuODM0MiAxOS4xOTI4IDc2LjQxODUgMjAuMzY5MiA3NC40OTQ4IDIwLjM2OTJDNzIuODYxNCAyMC4zNjkyIDcxLjYxNTIgMTkuNDA2NyA3MS4yNDAxIDE4LjMxMzRDNzAuNDI5NCAxOS43NTEzIDY4LjkwNDkgMjAuMzY5MiA2Ny4yNzE1IDIwLjM2OTJDNjUuMDIxMSAyMC4zNjkyIDYzLjQ5NjYgMTguOTA3NiA2My40OTY2IDE2Ljg5OTJDNjMuNDk2NiAxNC41NTgyIDY1LjIwMjYgMTIuOTMwMSA2OS4xNDY5IDExLjk5MTNMNzAuOTYxOCAxMS41NjM1VjkuMTYzMDVDNzAuOTYxOCA3LjY2NTcyIDcwLjQ0MTUgNy4wNTk2NiA2OS41MjIgNy4wNTk2NkM2OC42NTA4IDcuMDU5NjYgNjguMDgyMiA3LjYxODE5IDY4LjA4MjIgOC4zOTA2MkM2OC4wODIyIDkuMDU2MSA2OC40MDg5IDkuNDgzOSA2OC45Nzc1IDEwLjAxODdDNjguOTc3NSAxMC44NzQzIDY3LjYyMjQgMTEuNzUzNyA2Ni4yMDY4IDExLjc1MzdDNjQuODI3NSAxMS43NTM3IDYzLjg0NzUgMTAuNzA3OSA2My44NDc1IDkuNDM2MzdDNjMuODQ3NSA3LjE2NjYxIDY2LjQwMDQgNS41NzQyMiA3MC4xNTEyIDUuNTc0MjJDNzQuMDU5MiA1LjU3NDIyIDc2LjEyODIgNy4yMDIyNiA3Ni4xMjgyIDEwLjgyNjdWMTYuNTU0NkM3Ni4xMjgyIDE3LjI3OTUgNzYuNTYzNyAxNy43NTQ5IDc3LjI0MTMgMTcuNzU0OUM3Ny42NDA2IDE3Ljc1NDkgNzcuOTQzIDE3LjY3MTcgNzguMTYwOCAxNy41MTcyWk03MC45NjE4IDE3LjExMzFWMTIuODIzMkw3MC42MTA5IDEyLjkzMDFDNjkuNDQ5NCAxMy4yNzQ4IDY4LjY1MDkgMTQuMDIzNCA2OC42NTA5IDE1LjUyMDdDNjguNjUwOSAxNi44MDQyIDY5LjE3MTEgMTcuNTc2NiA3MC4wMDYgMTcuNTc2NkM3MC40NTM2IDE3LjU2NDcgNzAuODA0NSAxNy40MzQgNzAuOTYxOCAxNy4xMTMxWiIgZmlsbD0iIzMzMzMzMyIvPgo8cGF0aCBkPSJNODUuNTE3MSAxOS45NjUzSDc4LjIwOTJDNzguOTcxNCAxOS4yNDA0IDc5LjQ1NTQgMTguMTgyOCA3OS40NTU0IDE1Ljk5NjJWMTEuNjcwNkM3OS40NTU0IDEwLjIwODkgNzkuMjYxOCA5LjQ2MDI0IDc4LjM2NjUgOC42MjgzOUw3Ny43MzczIDguMDY5ODdMODQuNDY0NSA1LjU2MjQ0VjcuNjQyMDZDODUuMjUwOSA2LjM1ODY0IDg2LjkwODUgNS41NjI0NCA4OC41NjYxIDUuNTYyNDRDOTEuMTY3NCA1LjU2MjQ0IDkyLjYwNzIgNi45NTI4MSA5Mi42MDcyIDkuNDI0NTlWMTYuODk5M0M5Mi42MDcyIDE4LjQyMDQgOTMuMDE4NiAxOS4zNDczIDkzLjY3MiAxOS45NjUzSDg2LjU1NzZDODcuMjU5NCAxOS4yOTk4IDg3LjQ1MyAxOC4zOTY3IDg3LjQ1MyAxNy42NzE4VjEwLjA0MjVDODcuNDUzIDguOTI1NDggODcuMDc3OSA4LjM2Njk1IDg2LjAxMzIgOC4zNjY5NUM4NS40MjAzIDguMzY2OTUgODQuOTI0MiA4LjU4MDg2IDg0LjU5NzYgOC45MDE3MVYxNy42NzE4Qzg0LjYyMTggMTguMzk2NyA4NC44MDMyIDE5LjI3NiA4NS41MTcxIDE5Ljk2NTNaIiBmaWxsPSIjMzMzMzMzIi8+CjxwYXRoIGQ9Ik05NS4wMTQ3IDE5LjE5MjZWMTQuNjI5M0M5Ni45NzQ4IDE3LjEzNjcgOTkuMDA3NSAxOC41MjcxIDEwMC45MDcgMTguNTI3MUMxMDEuODI3IDE4LjUyNzEgMTAyLjI2MiAxOC4wNTE4IDEwMi4yNjIgMTcuMzg2M0MxMDIuMjYyIDE2Ljc0NDYgMTAxLjkxMSAxNi4zNzYyIDEwMS4yODIgMTYuMTM4NUw5OC4xMzYzIDE0Ljk5NzdDOTUuNzE2NSAxNC4xMTgzIDk0LjYzOTYgMTIuNjU2NiA5NC42Mzk2IDEwLjQ3MDFDOTQuNjM5NiA3LjY0MTc5IDk2Ljk5OSA1LjU4NTk0IDEwMC4zNjMgNS41ODU5NEMxMDIuMTc3IDUuNTg1OTQgMTA0LjE4NiA2LjA5NjkzIDEwNS4xOSA2LjgwOTk0VjEwLjcwNzdDMTAzLjk0NCA4LjU0NDk0IDEwMS44OTkgNy4zNDQ3IDk5LjkyNyA3LjM0NDdDOTguOTIyOCA3LjM0NDcgOTguNDAyNSA3LjY2NTU2IDk4LjQwMjUgOC4yODM1Qzk4LjQwMjUgOC45MDE0NCA5OC43Nzc2IDkuMTM5MTIgOTkuNjI0NSA5LjQ4Mzc0TDEwMy4zNTEgMTAuOTU3M0MxMDUuMjI2IDExLjcwNiAxMDYuMDYxIDEzLjI3NDYgMTA2LjA2MSAxNS4xNzZDMTA2LjA2MSAxOC4zMDEzIDEwMy43NSAyMC4zODA5IDEwMC4yNzggMjAuMzgwOUM5OC41NDc3IDIwLjM2OTEgOTYuNzU3IDE5Ljk4ODggOTUuMDE0NyAxOS4xOTI2WiIgZmlsbD0iIzMzMzMzMyIvPgo8cGF0aCBkPSJNMTA2LjYwNiA3LjI5NzM5TDEwOC4xNzkgNC45MjA2OEMxMTAuMTg3IDEuOTM3OTEgMTExLjc5NiAwLjUgMTE0LjUwNyAwLjVDMTE2LjYyNCAwLjUgMTE3Ljk3OSAxLjQwMzE1IDExNy45NzkgMi43Njk3NkMxMTcuOTc5IDMuOTQ2MjMgMTE2Ljk5OSA0LjgwMTg0IDExNC45NDIgNC44MDE4NEMxMTQuOTQyIDMuMTUwMDMgMTEzLjk4NiAyLjUzMjA5IDExMy4wNDIgMi41MzIwOUMxMTIuMDg3IDIuNTMyMDkgMTExLjM2MSAzLjE5NzU2IDExMS4zNjEgNC4yOTA4NUMxMTEuMzYxIDUuMDM5NTEgMTExLjc3MiA1Ljc4ODE4IDExMy4wMTggNS45NjY0M0gxMTYuMDMxTDExNC45NDIgNy4yOTczOUgxMTMuMDkxVjE1LjIxMThDMTEzLjA5MSAxNi43MDkyIDExMy4zMzMgMTguMDQwMSAxMTQuOTA2IDE5LjM5NDhMMTE1LjU1OSAxOS45NTM0SDEwNi4xOTRDMTA3LjI4MyAxOC44ODM4IDEwNy45MzcgMTcuNTc2NiAxMDcuOTM3IDE1LjY2MzRWNy4yOTczOUgxMDYuNjA2WiIgZmlsbD0iIzMzMzMzMyIvPgo8cGF0aCBkPSJNMTI3Ljg4OSAxNS40Mzc2QzEyNy4wMTcgMTkuMTQ1MiAxMjQuOTI0IDIwLjM2OTIgMTIxLjg4NyAyMC4zNjkyQzExOC40MTUgMjAuMzY5MiAxMTUuMTYgMTcuODg1NiAxMTUuMTYgMTMuMjI3MkMxMTUuMTYgOC43NDcxMiAxMTguMDQgNS41NzQyMiAxMjEuODE1IDUuNTc0MjJDMTI0LjI4MyA1LjU3NDIyIDEyNy43NTUgNi44MjE5OSAxMjcuNzU1IDEyLjExMDJIMTE5LjU1MkMxMjAuMTIxIDE0LjkzODUgMTIxLjk5NiAxNi40MDAxIDEyNC41OTggMTYuNDAwMUMxMjUuOTQxIDE2LjM4ODIgMTI2Ljg2IDE2LjE1MDYgMTI3Ljg4OSAxNS40Mzc2Wk0xMTkuMzk1IDEwLjI1NjNWMTAuNjAxSDEyMi45NzZDMTIyLjk3NiA3LjkzOTA0IDEyMi4zODMgNy4xMDcyIDEyMS4yMzQgNy4xMDcyQzEyMC4wNzIgNy4xMDcyIDExOS4zOTUgOC4yNTk5IDExOS4zOTUgMTAuMjU2M1oiIGZpbGw9IiMzMzMzMzMiLz4KPHBhdGggZD0iTTEzNi45ODcgMTkuOTY1M0gxMjguMzQ4QzEyOS40MTMgMTguNzQxMyAxMjkuODczIDE3LjkzMzIgMTI5Ljg3MyAxNS45OTYyVjExLjY3MDZDMTI5Ljg3MyAxMC4xNDk1IDEyOS42NTUgOS40MzY0NyAxMjguNjI3IDguNDk3NjdMMTI4LjAzNCA3Ljk2MjkxTDEzNC41NTUgNS41NjI0NFY4Ljg4OTgzQzEzNS4xODQgNi45NjQ3IDEzNi4xNTIgNS41NjI0NCAxMzcuNzYxIDUuNTYyNDRDMTM5LjA2OCA1LjU2MjQ0IDEzOS45MDMgNi40NjU1OSAxMzkuOTAzIDcuNzk2NTRDMTM5LjkwMyA5LjIxMDY5IDEzOS4wMDggMTAuMTk3IDEzNy43NjEgMTAuMTk3QzEzNy40OTUgOS41NzkwNyAxMzYuODQyIDkuMjkzODcgMTM2LjIzNyA5LjI5Mzg3QzEzNS43NTMgOS4yOTM4NyAxMzUuMjgxIDkuNDI0NTkgMTM1LjAzOSA5LjY2MjI2VjE1LjgyOThDMTM1LjAyNyAxNy44ODU3IDEzNS4zNzggMTguNDQ0MiAxMzYuOTg3IDE5Ljk2NTNaIiBmaWxsPSIjMzMzMzMzIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNDlfMTA3NDUiPgo8cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjUpIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDFfMTQ5XzEwNzQ1Ij4KPHJlY3Qgd2lkdGg9IjEzOS44OTEiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
                        alt: e,
                        title: e,
                        className: "Logo__image"
                    })
                })
            }
        },
        12516: e => {
            e.exports = {
                "wt-shadow-none": "ContactSalesBubble_wt-shadow-none__N2sxe",
                "wt-shadow-2--dark": "ContactSalesBubble_wt-shadow-2--dark__FZwue",
                "wt-shadow-2--light": "ContactSalesBubble_wt-shadow-2--light__UrkBv",
                "wt-shadow-4--dark": "ContactSalesBubble_wt-shadow-4--dark__4UnEP",
                "wt-shadow-4--light": "ContactSalesBubble_wt-shadow-4--light__UPthW",
                "wt-shadow-8--dark": "ContactSalesBubble_wt-shadow-8--dark__O3z4N",
                "wt-shadow-8--light": "ContactSalesBubble_wt-shadow-8--light__T95ec",
                "wt-shadow-16--dark": "ContactSalesBubble_wt-shadow-16--dark__oRI7_",
                "wt-shadow-16--light": "ContactSalesBubble_wt-shadow-16--light__n_K13",
                container: "ContactSalesBubble_container__BGjMk",
                "wt-shadow-32--dark": "ContactSalesBubble_wt-shadow-32--dark__570Oa",
                "wt-shadow-32--light": "ContactSalesBubble_wt-shadow-32--light___AGFk",
                "wt-overlay": "ContactSalesBubble_wt-overlay__l_YKs",
                "wt-overlay--after-open": "ContactSalesBubble_wt-overlay--after-open__cPtop",
                "wt-overlay--before-close": "ContactSalesBubble_wt-overlay--before-close__gOiQA",
                "wt-modal": "ContactSalesBubble_wt-modal__i6YMd",
                "wt-modal--after-open": "ContactSalesBubble_wt-modal--after-open__mNOO9",
                "wt-modal--before-close": "ContactSalesBubble_wt-modal--before-close__ZtDmG",
                "wt-modal--dismissible": "ContactSalesBubble_wt-modal--dismissible__vNqmv",
                "wt-modal--small": "ContactSalesBubble_wt-modal--small__x9DkA",
                "wt-modal--medium": "ContactSalesBubble_wt-modal--medium__lSsgn",
                "wt-modal--large": "ContactSalesBubble_wt-modal--large__PR9J9",
                "wt-popover": "ContactSalesBubble_wt-popover__PqZBC",
                "wt-popover--dark": "ContactSalesBubble_wt-popover--dark__UBC9G",
                "wt-popover--condensed": "ContactSalesBubble_wt-popover--condensed__G_nPV",
                "wt-popover--top": "ContactSalesBubble_wt-popover--top__jPxQh",
                "wt-popover--bottom": "ContactSalesBubble_wt-popover--bottom__vIAXP",
                "wt-popover--left": "ContactSalesBubble_wt-popover--left__WbEje",
                "wt-popover--left-start": "ContactSalesBubble_wt-popover--left-start__zMWo2",
                "wt-popover--right-start": "ContactSalesBubble_wt-popover--right-start__zhH0Z",
                "wt-popover--left-end": "ContactSalesBubble_wt-popover--left-end__JMcEd",
                "wt-popover--right-end": "ContactSalesBubble_wt-popover--right-end__CNpL1",
                "wt-popover--right": "ContactSalesBubble_wt-popover--right__gdSpO",
                "wt-popover-arrow-down": "ContactSalesBubble_wt-popover-arrow-down__UZ0tc",
                "wt-popover-arrow-down-center": "ContactSalesBubble_wt-popover-arrow-down-center__W7lfY",
                "wt-popover-arrow-down-end": "ContactSalesBubble_wt-popover-arrow-down-end__0vAH9",
                "wt-popover-arrow-down-start": "ContactSalesBubble_wt-popover-arrow-down-start__lxRP9",
                "wt-popover-arrow-down--dark": "ContactSalesBubble_wt-popover-arrow-down--dark__J66Uw",
                "wt-popover-arrow-up": "ContactSalesBubble_wt-popover-arrow-up__w3x7H",
                "wt-popover-arrow-up-center": "ContactSalesBubble_wt-popover-arrow-up-center__whH0g",
                "wt-popover-arrow-up-end": "ContactSalesBubble_wt-popover-arrow-up-end__V2F1t",
                "wt-popover-arrow-up-start": "ContactSalesBubble_wt-popover-arrow-up-start__M_slP",
                "wt-popover-arrow-up--dark": "ContactSalesBubble_wt-popover-arrow-up--dark__CIjQ6",
                "wt-popover-arrow-right": "ContactSalesBubble_wt-popover-arrow-right__9lBdZ",
                "wt-popover-arrow-right-center": "ContactSalesBubble_wt-popover-arrow-right-center__PDOUJ",
                "wt-popover-arrow-right-end": "ContactSalesBubble_wt-popover-arrow-right-end__YsxG7",
                "wt-popover-arrow-right-start": "ContactSalesBubble_wt-popover-arrow-right-start__vd_Q8",
                "wt-popover-arrow-right--dark": "ContactSalesBubble_wt-popover-arrow-right--dark__6s4do",
                "wt-popover-arrow-left": "ContactSalesBubble_wt-popover-arrow-left__e6ULe",
                "wt-popover-arrow-left-center": "ContactSalesBubble_wt-popover-arrow-left-center__4Nr2Z",
                "wt-popover-arrow-left-end": "ContactSalesBubble_wt-popover-arrow-left-end__w5TzY",
                "wt-popover-arrow-left-start": "ContactSalesBubble_wt-popover-arrow-left-start__Fv_ex",
                "wt-popover-arrow-left--dark": "ContactSalesBubble_wt-popover-arrow-left--dark__fDQIY",
                "wt-z-level-auto": "ContactSalesBubble_wt-z-level-auto__2LHCA",
                "wt-z-level-0": "ContactSalesBubble_wt-z-level-0__iatG1",
                "wt-z-level-1": "ContactSalesBubble_wt-z-level-1__KOx5_",
                "wt-z-level-2": "ContactSalesBubble_wt-z-level-2__te2UW",
                "wt-z-level-dropdown": "ContactSalesBubble_wt-z-level-dropdown___gxfv",
                "wt-z-level-search": "ContactSalesBubble_wt-z-level-search__GFw2Q",
                "wt-z-level-select": "ContactSalesBubble_wt-z-level-select__k5oD1",
                "wt-z-level-3": "ContactSalesBubble_wt-z-level-3__NFIGi",
                "wt-z-level-4": "ContactSalesBubble_wt-z-level-4__XOuHp",
                "wt-z-level-5": "ContactSalesBubble_wt-z-level-5__gH41e",
                "wt-z-level-6": "ContactSalesBubble_wt-z-level-6__OZlhU",
                "wt-z-level-global-nav": "ContactSalesBubble_wt-z-level-global-nav__RcX_O",
                "wt-z-level-account-menu": "ContactSalesBubble_wt-z-level-account-menu__2NFVo",
                "wt-z-level-7": "ContactSalesBubble_wt-z-level-7__fSeOS",
                "wt-z-level-product-launcher": "ContactSalesBubble_wt-z-level-product-launcher__3Ydhh",
                "wt-z-level-8": "ContactSalesBubble_wt-z-level-8__jFSMG",
                "wt-z-level-modal": "ContactSalesBubble_wt-z-level-modal__PbCK6",
                "wt-z-level-9": "ContactSalesBubble_wt-z-level-9__UjiBq",
                "wt-z-level-toast": "ContactSalesBubble_wt-z-level-toast__7eztH",
                "wt-z-level-tooltip": "ContactSalesBubble_wt-z-level-tooltip__5VFnc",
                "wt-z-level-callout": "ContactSalesBubble_wt-z-level-callout__6Mt07",
                "wt-z-level-popover": "ContactSalesBubble_wt-z-level-popover__5oNMX",
                "wt-z-level-max": "ContactSalesBubble_wt-z-level-max__C_Bg0",
                "wt-display-heading-x-small-bold": "ContactSalesBubble_wt-display-heading-x-small-bold__tpTqo",
                "wt-display-heading-small-bold-narrow": "ContactSalesBubble_wt-display-heading-small-bold-narrow__yVZXQ",
                "wt-display-heading-small-bold": "ContactSalesBubble_wt-display-heading-small-bold__lBvBr",
                "wt-display-heading-small-bold-wide": "ContactSalesBubble_wt-display-heading-small-bold-wide__SBbOP",
                "wt-display-heading-small-narrow": "ContactSalesBubble_wt-display-heading-small-narrow__KxFeO",
                "wt-display-heading-small": "ContactSalesBubble_wt-display-heading-small__pdWe_",
                "wt-display-heading-small-wide": "ContactSalesBubble_wt-display-heading-small-wide__5xk_w",
                "wt-display-heading-medium-bold-narrow": "ContactSalesBubble_wt-display-heading-medium-bold-narrow__7519X",
                "wt-display-heading-medium-bold": "ContactSalesBubble_wt-display-heading-medium-bold__1HPyU",
                "wt-display-heading-medium-bold-wide": "ContactSalesBubble_wt-display-heading-medium-bold-wide__3I_xS",
                "wt-display-heading-medium-narrow": "ContactSalesBubble_wt-display-heading-medium-narrow__4NFVU",
                "wt-display-heading-medium": "ContactSalesBubble_wt-display-heading-medium__L_vTN",
                "wt-display-heading-medium-wide": "ContactSalesBubble_wt-display-heading-medium-wide__TAjpD",
                "wt-display-heading-large-bold-narrow": "ContactSalesBubble_wt-display-heading-large-bold-narrow__3oFb0",
                "wt-display-heading-large-bold": "ContactSalesBubble_wt-display-heading-large-bold__CnuLS",
                "wt-display-heading-large-bold-wide": "ContactSalesBubble_wt-display-heading-large-bold-wide__ZGrvg",
                "wt-display-heading-large-narrow": "ContactSalesBubble_wt-display-heading-large-narrow__xlJcT",
                "wt-display-heading-large": "ContactSalesBubble_wt-display-heading-large__VfBuD",
                "wt-display-heading-large-wide": "ContactSalesBubble_wt-display-heading-large-wide__hIxbP",
                "wt-display-heading": "ContactSalesBubble_wt-display-heading__pHHA_",
                "wt-sub-heading": "ContactSalesBubble_wt-sub-heading___OUIz",
                "wt-text-heading-small-bold-narrow": "ContactSalesBubble_wt-text-heading-small-bold-narrow__ZUmUr",
                "wt-text-heading-small-bold": "ContactSalesBubble_wt-text-heading-small-bold__Gr15o",
                "wt-text-heading-small-bold-wide": "ContactSalesBubble_wt-text-heading-small-bold-wide__DI_Yu",
                "wt-text-heading-small-narrow": "ContactSalesBubble_wt-text-heading-small-narrow__4_DPf",
                "wt-text-heading-small": "ContactSalesBubble_wt-text-heading-small__2T9xQ",
                "wt-text-heading-small-wide": "ContactSalesBubble_wt-text-heading-small-wide__WwWKo",
                "wt-text-heading-medium-bold": "ContactSalesBubble_wt-text-heading-medium-bold__jJteJ",
                "wt-text-heading-medium-bold-wide": "ContactSalesBubble_wt-text-heading-medium-bold-wide__G9Gvf",
                "wt-text-heading-medium-semi-narrow": "ContactSalesBubble_wt-text-heading-medium-semi-narrow__V_o2h",
                "wt-text-heading-medium-narrow": "ContactSalesBubble_wt-text-heading-medium-narrow__v8__w",
                "wt-text-heading-medium-semi": "ContactSalesBubble_wt-text-heading-medium-semi__1YXBo",
                "wt-text-heading-medium-semi-wide": "ContactSalesBubble_wt-text-heading-medium-semi-wide__GOC6u",
                "wt-text-heading-medium": "ContactSalesBubble_wt-text-heading-medium__IqbZF",
                "wt-text-heading-medium-wide": "ContactSalesBubble_wt-text-heading-medium-wide__lM_gq",
                "wt-text-heading-large-bold-narrow": "ContactSalesBubble_wt-text-heading-large-bold-narrow__23J1q",
                "wt-text-heading-large-bold": "ContactSalesBubble_wt-text-heading-large-bold__6dJr6",
                "wt-text-heading-large-bold-wide": "ContactSalesBubble_wt-text-heading-large-bold-wide__HhXtb",
                "wt-text-heading-large-narrow": "ContactSalesBubble_wt-text-heading-large-narrow__pAC0P",
                "wt-text-heading-large": "ContactSalesBubble_wt-text-heading-large__R9OXw",
                "wt-text-heading-large-wide": "ContactSalesBubble_wt-text-heading-large-wide__DL6Xc",
                "wt-text-heading-x-large-narrow": "ContactSalesBubble_wt-text-heading-x-large-narrow__gvqMG",
                "wt-text-heading-x-large": "ContactSalesBubble_wt-text-heading-x-large__nqc78",
                "wt-text-heading-x-large-wide": "ContactSalesBubble_wt-text-heading-x-large-wide__tYhY7",
                "wt-text-heading": "ContactSalesBubble_wt-text-heading__63AV6",
                "wt-body-x-small-semi": "ContactSalesBubble_wt-body-x-small-semi__4_YZg",
                "wt-body-x-small": "ContactSalesBubble_wt-body-x-small__s9oG5",
                "wt-body-small-bold": "ContactSalesBubble_wt-body-small-bold__c7whz",
                "wt-body-small-semi": "ContactSalesBubble_wt-body-small-semi__uJXlf",
                "wt-body-small": "ContactSalesBubble_wt-body-small__g0dIw",
                message: "ContactSalesBubble_message__zdI_q",
                "wt-body-medium-bold": "ContactSalesBubble_wt-body-medium-bold__MRrnK",
                "wt-body-medium-semi": "ContactSalesBubble_wt-body-medium-semi__76B6n",
                "wt-body-medium": "ContactSalesBubble_wt-body-medium__6IjXJ",
                "wt-body-large-bold": "ContactSalesBubble_wt-body-large-bold__mcfI2",
                "wt-body-large": "ContactSalesBubble_wt-body-large__YRh6g",
                "wt-body-x-large": "ContactSalesBubble_wt-body-x-large__QQdAM",
                "wt-label-x-small-bold": "ContactSalesBubble_wt-label-x-small-bold__XachX",
                "wt-label-x-small-semi": "ContactSalesBubble_wt-label-x-small-semi__1Zx_O",
                "wt-label-x-small": "ContactSalesBubble_wt-label-x-small__SM0M2",
                "wt-label-small-bold": "ContactSalesBubble_wt-label-small-bold__OrLzc",
                "wt-label-small-semi": "ContactSalesBubble_wt-label-small-semi__5i_0D",
                "wt-label-small": "ContactSalesBubble_wt-label-small__qxXdq",
                "wt-label-medium-bold": "ContactSalesBubble_wt-label-medium-bold__tChCq",
                "wt-label-medium-semi": "ContactSalesBubble_wt-label-medium-semi__KSDEU",
                "wt-label-medium": "ContactSalesBubble_wt-label-medium__Uuk7l",
                "wt-label-large-bold": "ContactSalesBubble_wt-label-large-bold__GNlJh",
                "wt-label-large-semi": "ContactSalesBubble_wt-label-large-semi__g5SRf",
                "wt-label-large": "ContactSalesBubble_wt-label-large__iy_N7",
                iconContainer: "ContactSalesBubble_iconContainer__hUDr5",
                icon: "ContactSalesBubble_icon__iC_o4"
            }
        },
        17913: (e, t, a) => {
            "use strict";
            a.d(t, {
                e: () => j
            });
            var l = a(23798),
                s = a(46001),
                o = a.n(s),
                i = a(21462),
                r = a(38169),
                d = a(11732),
                _ = a(78598),
                w = a(10995);
            let n = "coreShape",
                M = e => {
                    let {
                        className: t,
                        pathId: a = n
                    } = e;
                    return (0, l.jsx)("svg", {
                        shapeRendering: "geometricPrecision",
                        className: t,
                        width: "220",
                        height: "220",
                        viewBox: "0 0 220 220",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, l.jsx)("path", {
                            id: a,
                            d: "M217.055 76.34C209.12 24.231 170.975 -0.415789 110 0.00530375C49.0249 -0.415789 10.8887 24.231 2.9447 76.34C1.02719 88.9015 0 99.5448 0 110C0 120.399 1.02719 131.087 2.9447 143.66C10.8801 195.769 49.0249 220.416 110 219.995C170.975 220.416 209.111 195.769 217.055 143.66C218.973 131.098 220 120.455 220 110C220 99.5895 218.973 88.9015 217.055 76.34Z",
                            fill: "currentColor"
                        })
                    })
                },
                g = () => (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(M, {
                        className: "Shapes__Hidden",
                        pathId: n
                    }), (0, l.jsx)("svg", {
                        viewBox: "0 0 220 220",
                        className: "Shapes__Hidden",
                        children: (0, l.jsx)("clipPath", {
                            id: "coreShapeClip",
                            clipPathUnits: "objectBoundingBox",
                            transform: "scale(0.00450)",
                            children: (0, l.jsx)("use", {
                                xlinkHref: "#".concat(n)
                            })
                        })
                    })]
                });
            var c = a(53123),
                u = a(26094);
            let N = e => {
                    let {
                        familyName: t,
                        givenName: a
                    } = e, s = e => {
                        let t = e.substring(0, 2);
                        return /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi.test(t)
                    };
                    return (0, l.jsx)("div", {
                        "data-testid": "avatar-initials",
                        className: "Avatar__Initials",
                        children: (() => {
                            if (t) {
                                let e = s(a) ? a.substring(0, 2) : a.charAt(0),
                                    l = s(t) ? t.substring(0, 2) : t.charAt(0);
                                return "".concat(e).concat(l)
                            }
                            return "".concat(a.substring(0, 2))
                        })()
                    })
                },
                b = e => {
                    let {
                        onUpload: t,
                        src: a,
                        className: s,
                        large: i,
                        squircle: r,
                        userId: d,
                        displayName: _
                    } = e, w = t ? "button" : "div", n = a === (d ? c.A.getAvatar(d) : null);
                    return (0, l.jsxs)(w, {
                        onClick: t,
                        className: o()("Avatar", s, {
                            "Avatar--Large": i,
                            "Avatar--Small": !i,
                            "Avatar--Squircle": r,
                            "Avatar--Circle": !r
                        }),
                        children: [(0, l.jsx)(g, {}), t && (0, l.jsx)(u.PE, {
                            className: "Avatar__UploadIcon",
                            "data-testid": "upload-icon"
                        }), (0, l.jsx)("div", {
                            className: "Avatar__dropshadow",
                            children: (0, l.jsx)("div", {
                                className: o()("Avatar__ImageWrapper", {
                                    "Avatar__ImageWrapper--initials": n
                                }),
                                children: n ? (0, l.jsx)(N, {
                                    familyName: _.familyName,
                                    givenName: _.givenName
                                }) : (0, l.jsx)("img", {
                                    className: "Avatar__Image",
                                    src: a,
                                    alt: t ? "update avatar" : "your avatar"
                                })
                            })
                        })]
                    })
                },
                j = e => {
                    let {
                        className: t
                    } = e, {
                        user: a
                    } = (0, r.d4)(e => {
                        let {
                            user: t
                        } = e;
                        return {
                            user: t
                        }
                    }), s = (0, i.useRef)(null), n = (0, r.wA)(), {
                        given_name: M,
                        family_name: g,
                        id: c,
                        profile_picture: u = {
                            image_url: ""
                        }
                    } = a;
                    async function N(e) {
                        try {
                            let t = await n(w.A.UI.uploadAsset(e, "profile_picture"));
                            t && (await d.A.updateUser({
                                profile_picture: t
                            }), n(w.A.User.getUser()))
                        } catch (e) {
                            _.A.track(e)
                        }
                    }
                    return (0, l.jsxs)("div", {
                        className: o()(t),
                        children: [(0, l.jsx)("input", {
                            style: {
                                display: "none"
                            },
                            ref: s,
                            onChange: function(e) {
                                N(Array.from(e.currentTarget.files)[0])
                            },
                            type: "file",
                            accept: "image/png,image/jpg,image/jpeg",
                            "data-testid": "test-id-avatar-upload"
                        }), (0, l.jsx)(b, {
                            src: u.image_url,
                            displayName: {
                                familyName: g,
                                givenName: M
                            },
                            userId: c,
                            onUpload: function() {
                                s.current.click()
                            },
                            large: !0,
                            squircle: !0,
                            className: "OnboardingWelcome__Avatar"
                        })]
                    })
                }
        },
        17944: (e, t, a) => {
            "use strict";
            a.d(t, {
                Jv: () => s,
                Wr: () => o,
                XH: () => i
            });
            var l = function(e) {
                    return e.SIGN_UP_CLICKED = "enterprise_sign_up_clicked", e.SWITCH_SCREEN_DISPLAYED = "enterprise_switch_screen_displayed", e.SWITCH_SCREEN_CONTINUED = "enterprise_switch_screen_continued", e.CONTACT_BUBBLE_CLICKED = "enterprise_contact_bubble_clicked", e.SEATS_SIMULATOR_EDITED = "enterprise_seats_simulator_edited", e.WORKSPACE_SETTINGS_WELCOME_CLICKED = "enterprise_workspace_settings_welcome_clicked", e.SURVEY_STEP_NEXT_CLICKED = "enterprise_survey_step_next_clicked", e
                }(l || {}),
                s = function(e) {
                    return e.SELF_SERVICE = "self_service", e.CUSTOM = "custom", e
                }({}),
                o = function(e) {
                    return e.SWITCH = "switch", e.CHECKOUT = "checkout", e
                }({});
            let i = {
                enterpriseSignUpClicked: {
                    kind: "enterprise_sign_up_clicked"
                },
                switchScreenDisplayed: {
                    kind: "enterprise_switch_screen_displayed"
                },
                switchScreenContinued: e => ({
                    kind: "enterprise_switch_screen_continued",
                    info: {
                        selection: e
                    }
                }),
                contactBubbleClicked: e => ({
                    kind: "enterprise_contact_bubble_clicked",
                    info: {
                        context: e
                    }
                }),
                seatsSimulatorEdited: e => ({
                    kind: "enterprise_seats_simulator_edited",
                    info: {
                        seatsCount: e
                    }
                }),
                workspaceSettingsWelcomeClicked: {
                    kind: "enterprise_workspace_settings_welcome_clicked"
                },
                surveyStepNextClicked: (e, t) => ({
                    kind: "enterprise_survey_step_next_clicked",
                    info: {
                        currentStep: t,
                        surveyData: e
                    }
                })
            }
        },
        62706: e => {
            e.exports = {
                "wt-display-heading-x-small-bold": "SetUpCrossroads_wt-display-heading-x-small-bold__t73QM",
                "wt-display-heading-small-bold-narrow": "SetUpCrossroads_wt-display-heading-small-bold-narrow__ChReD",
                "wt-display-heading-small-bold": "SetUpCrossroads_wt-display-heading-small-bold__WlRhe",
                title: "SetUpCrossroads_title__sm3ab",
                "wt-display-heading-small-bold-wide": "SetUpCrossroads_wt-display-heading-small-bold-wide__Kfpx0",
                "wt-display-heading-small-narrow": "SetUpCrossroads_wt-display-heading-small-narrow__Y7RoN",
                "wt-display-heading-small": "SetUpCrossroads_wt-display-heading-small__2Snqo",
                "wt-display-heading-small-wide": "SetUpCrossroads_wt-display-heading-small-wide__T3CnW",
                "wt-display-heading-medium-bold-narrow": "SetUpCrossroads_wt-display-heading-medium-bold-narrow__RoQ5o",
                "wt-display-heading-medium-bold": "SetUpCrossroads_wt-display-heading-medium-bold__OeF90",
                "wt-display-heading-medium-bold-wide": "SetUpCrossroads_wt-display-heading-medium-bold-wide__gxzDz",
                "wt-display-heading-medium-narrow": "SetUpCrossroads_wt-display-heading-medium-narrow__Bmsoz",
                "wt-display-heading-medium": "SetUpCrossroads_wt-display-heading-medium__qhw6o",
                "wt-display-heading-medium-wide": "SetUpCrossroads_wt-display-heading-medium-wide__vZ2Cd",
                "wt-display-heading-large-bold-narrow": "SetUpCrossroads_wt-display-heading-large-bold-narrow__9o9UM",
                "wt-display-heading-large-bold": "SetUpCrossroads_wt-display-heading-large-bold__jd5NO",
                "wt-display-heading-large-bold-wide": "SetUpCrossroads_wt-display-heading-large-bold-wide__fpwuH",
                "wt-display-heading-large-narrow": "SetUpCrossroads_wt-display-heading-large-narrow__CoO87",
                "wt-display-heading-large": "SetUpCrossroads_wt-display-heading-large__ynqLU",
                "wt-display-heading-large-wide": "SetUpCrossroads_wt-display-heading-large-wide__fbnXl",
                "wt-display-heading": "SetUpCrossroads_wt-display-heading__IoAWz",
                "wt-sub-heading": "SetUpCrossroads_wt-sub-heading__KDu5r",
                "wt-text-heading-small-bold-narrow": "SetUpCrossroads_wt-text-heading-small-bold-narrow__LB89o",
                "wt-text-heading-small-bold": "SetUpCrossroads_wt-text-heading-small-bold__6ypuW",
                "wt-text-heading-small-bold-wide": "SetUpCrossroads_wt-text-heading-small-bold-wide__wblpG",
                "wt-text-heading-small-narrow": "SetUpCrossroads_wt-text-heading-small-narrow__ZDEO8",
                "wt-text-heading-small": "SetUpCrossroads_wt-text-heading-small__KfEQF",
                itemTitle: "SetUpCrossroads_itemTitle__eH0Ac",
                "wt-text-heading-small-wide": "SetUpCrossroads_wt-text-heading-small-wide__1790L",
                "wt-text-heading-medium-bold": "SetUpCrossroads_wt-text-heading-medium-bold__KBsz1",
                "wt-text-heading-medium-bold-wide": "SetUpCrossroads_wt-text-heading-medium-bold-wide__9QKRZ",
                "wt-text-heading-medium-semi-narrow": "SetUpCrossroads_wt-text-heading-medium-semi-narrow__6e14y",
                "wt-text-heading-medium-narrow": "SetUpCrossroads_wt-text-heading-medium-narrow__cM6s8",
                "wt-text-heading-medium-semi": "SetUpCrossroads_wt-text-heading-medium-semi__4_ZW1",
                "wt-text-heading-medium-semi-wide": "SetUpCrossroads_wt-text-heading-medium-semi-wide__yunEj",
                "wt-text-heading-medium": "SetUpCrossroads_wt-text-heading-medium__VpFcA",
                "wt-text-heading-medium-wide": "SetUpCrossroads_wt-text-heading-medium-wide__CC7lM",
                "wt-text-heading-large-bold-narrow": "SetUpCrossroads_wt-text-heading-large-bold-narrow__5wuap",
                "wt-text-heading-large-bold": "SetUpCrossroads_wt-text-heading-large-bold__jUWi7",
                "wt-text-heading-large-bold-wide": "SetUpCrossroads_wt-text-heading-large-bold-wide__zdpzj",
                "wt-text-heading-large-narrow": "SetUpCrossroads_wt-text-heading-large-narrow__gW6wG",
                "wt-text-heading-large": "SetUpCrossroads_wt-text-heading-large__8keY3",
                "wt-text-heading-large-wide": "SetUpCrossroads_wt-text-heading-large-wide__qkClv",
                "wt-text-heading-x-large-narrow": "SetUpCrossroads_wt-text-heading-x-large-narrow__i697Y",
                "wt-text-heading-x-large": "SetUpCrossroads_wt-text-heading-x-large__4nume",
                "wt-text-heading-x-large-wide": "SetUpCrossroads_wt-text-heading-x-large-wide__h7XPi",
                "wt-text-heading": "SetUpCrossroads_wt-text-heading__sU_e4",
                "wt-body-x-small-semi": "SetUpCrossroads_wt-body-x-small-semi__0CHzF",
                "wt-body-x-small": "SetUpCrossroads_wt-body-x-small__WzqI8",
                "wt-body-small-bold": "SetUpCrossroads_wt-body-small-bold__nu5K2",
                "wt-body-small-semi": "SetUpCrossroads_wt-body-small-semi__gLSOt",
                "wt-body-small": "SetUpCrossroads_wt-body-small__RVvHP",
                tooltip: "SetUpCrossroads_tooltip__yLni9",
                "wt-body-medium-bold": "SetUpCrossroads_wt-body-medium-bold__3BwXv",
                "wt-body-medium-semi": "SetUpCrossroads_wt-body-medium-semi__80jxC",
                "wt-body-medium": "SetUpCrossroads_wt-body-medium__wHy_L",
                "wt-body-large-bold": "SetUpCrossroads_wt-body-large-bold__PtSQ2",
                "wt-body-large": "SetUpCrossroads_wt-body-large__zIcAR",
                "wt-body-x-large": "SetUpCrossroads_wt-body-x-large__GnhB8",
                "wt-label-x-small-bold": "SetUpCrossroads_wt-label-x-small-bold__uhtoQ",
                "wt-label-x-small-semi": "SetUpCrossroads_wt-label-x-small-semi__jNDr_",
                "wt-label-x-small": "SetUpCrossroads_wt-label-x-small__k9VyB",
                "wt-label-small-bold": "SetUpCrossroads_wt-label-small-bold__6hCu0",
                "wt-label-small-semi": "SetUpCrossroads_wt-label-small-semi__DNBXk",
                "wt-label-small": "SetUpCrossroads_wt-label-small__mYVqq",
                "wt-label-medium-bold": "SetUpCrossroads_wt-label-medium-bold__ATEqV",
                "wt-label-medium-semi": "SetUpCrossroads_wt-label-medium-semi__Xm0eS",
                "wt-label-medium": "SetUpCrossroads_wt-label-medium__KtXwR",
                "wt-label-large-bold": "SetUpCrossroads_wt-label-large-bold__2IXwQ",
                "wt-label-large-semi": "SetUpCrossroads_wt-label-large-semi__0wRHm",
                "wt-label-large": "SetUpCrossroads_wt-label-large__6DZn2",
                perk: "SetUpCrossroads_perk__ZNS30",
                itemTag: "SetUpCrossroads_itemTag__EVTDS",
                container: "SetUpCrossroads_container__N4Kat",
                avatar: "SetUpCrossroads_avatar__9AZZE",
                switch: "SetUpCrossroads_switch__KQRcZ",
                item: "SetUpCrossroads_item__Sa8c6",
                itemSelected: "SetUpCrossroads_itemSelected__cjojb",
                itemTitleContainer: "SetUpCrossroads_itemTitleContainer__aEMVV",
                itemRadio: "SetUpCrossroads_itemRadio__iZEYR",
                perkContainer: "SetUpCrossroads_perkContainer__1kTgE",
                perkIcon: "SetUpCrossroads_perkIcon__22mhv",
                nextCTA: "SetUpCrossroads_nextCTA__07UnI",
                contactBubbleFixedContainer: "SetUpCrossroads_contactBubbleFixedContainer__X_Pv6",
                switchWrapper: "SetUpCrossroads_switchWrapper__2Bdki"
            }
        },
        66688: (e, t, a) => {
            "use strict";
            a.d(t, {
                j: () => n
            });
            var l = a(23798),
                s = a(75546),
                o = a(16173),
                i = a(87963),
                r = a(17944),
                d = a(62760),
                _ = a(12516),
                w = a.n(_);

            function n(e) {
                let {
                    t
                } = (0, s.Bd)(), {
                    settings: {
                        repackaging_enterprise_cta_url: a
                    }
                } = (0, d.k)();
                return (0, l.jsxs)("div", {
                    className: w().container,
                    onClick: () => {
                        (0, i.Od)().trackUserAction(r.XH.contactBubbleClicked(e.context)), window.open(a, "_blank", "noopener, noreferrer")
                    },
                    children: [(0, l.jsx)("span", {
                        className: w().message,
                        children: t("enterprise_onboarding.contact_bubble")
                    }), (0, l.jsx)("div", {
                        className: w().iconContainer,
                        children: (0, l.jsx)(o.qks, {
                            size: "medium",
                            className: w().icon
                        })
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=8681.0fd3727136c5696e.js.map
