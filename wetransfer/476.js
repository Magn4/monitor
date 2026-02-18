"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6667], {
        86667: (t, e, n) => {
            n.r(e), n.d(e, {
                default: () => l
            });
            var i = n(21462),
                c = n(7232),
                r = n(63492),
                a = n(25402);
            let l = () => {
                let t = (0, i.useRef)(!1);
                return (0, i.useEffect)(() => {
                    if (t.current) return;
                    t.current = !0;
                    let e = (0, a.A)();
                    new c.AuthenticationAdapter({
                        authenticationClientOptions: {
                            domain: String(e.NEXT_PUBLIC_AUTH_DOMAIN),
                            audience: String(e.NEXT_PUBLIC_AUTH_AUDIENCE),
                            clientId: String(e.NEXT_PUBLIC_AUTH_CLIENT_ID),
                            redirectUri: "".concat(window.location.origin).concat(r.zu),
                            silentRedirectUri: "".concat(window.location.origin).concat(r.xH)
                        }
                    }).getActiveAuthClient().handleSilentRedirectCallback()
                }, []), null
            }
        }
    }
]);
//# sourceMappingURL=6667.3dfcbc6b8e4b5636.js.map
