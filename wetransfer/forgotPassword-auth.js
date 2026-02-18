"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7808], {
        37407: (e, t, i) => {
            i.r(t), i.d(t, {
                ForgotPassword: () => u,
                default: () => d
            });
            var r = i(21462),
                s = i(38169),
                l = i(21848),
                n = i(72255);
            let a = {
                    forgotPassword: l.BD
                },
                o = (0, s.Ng)(e => {
                    let {
                        auth: t,
                        user: i
                    } = e;
                    return {
                        isInitialized: t.isInitialized,
                        isLoggedIn: i.loggedIn
                    }
                }, a),
                u = e => {
                    let {
                        isInitialized: t,
                        isLoggedIn: i,
                        forgotPassword: s
                    } = e;
                    return (0, r.useEffect)(() => {
                        if (t) {
                            if (!i) return void s();
                            n.A.navigateTo("/")
                        }
                    }, [t, i, s]), null
                },
                d = o(u)
        }
    }
]);
//# sourceMappingURL=forgotPassword-auth.04ca10377969b031.js.map
