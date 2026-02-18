"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4256], {
        5717: (e, r, a) => {
            a.r(r), a.d(r, {
                Details: () => l,
                default: () => A
            });
            var s = a(23798),
                t = a(21462),
                f = a(38169),
                E = a(78883),
                n = a(39377),
                u = a(56682),
                d = a(53155),
                c = a(6481),
                p = a(90512),
                T = a(13672);
            let l = () => {
                    let e = (0, f.d4)(p.W7),
                        r = e.params.transferId,
                        a = e.params.group,
                        l = (0, f.wA)(),
                        A = (0, f.d4)(T.R9),
                        N = (0, f.d4)(T.eF),
                        R = a === u.a.SENT ? A : N;
                    return ((0, t.useEffect)(() => {
                        a === u.a.SENT && l(d.Ay.getTransfer(r)), a === u.a.RECEIVED && l(c.A.getReceivedTransfer(r))
                    }, [a, r, l]), (0, t.useEffect)(() => () => {
                        a === u.a.RECEIVED && l(c.A.resetReceivedTransfer()), a === u.a.SENT && l(d.Ay.resetTransfer())
                    }, [a, l]), R) ? (0, s.jsx)(E.E, {
                        transfer: R,
                        transferGroup: a
                    }) : (0, s.jsx)(n.A, {})
                },
                A = l
        }
    }
]);
//# sourceMappingURL=transfer-detail.f9a1cf5f106276da.js.map