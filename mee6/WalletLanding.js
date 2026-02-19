import {
    ah as e,
    ai as t,
    L as s,
    J as a,
    b as i
} from "./app-61e5c911.js";
import {
    R as n,
    s as r,
    C as l,
    a as o
} from "./Grid-b08a7512.js";
import {
    B as c,
    C as d,
    P as u,
    a as m,
    A as h,
    F as x,
    b as p
} from "./Typography-5bc0f10a.js";
import {
    az as g,
    aA as f,
    bk as j,
    bl as b,
    bm as w,
    bn as v,
    j as y,
    F as N,
    C as E,
    bo as S,
    aO as k,
    q as C,
    r as F,
    bp as P,
    bq as T,
    K as R,
    y as $,
    aj as M,
    d as D,
    B as H,
    W as A,
    D as O,
    e as W,
    I as Y,
    k as K,
    Y as U,
    a as L
} from "./index-75d73738.js";
import {
    s as B,
    A as _
} from "./Loader2-aadfe498.js";
import {
    m as I
} from "./viewports-7b2f2c00.js";
import {
    h as z
} from "./moment-e0d604bc.js";
import {
    m as V,
    p as q
} from "./mixins-1c1f239e.js";
import {
    I as G
} from "./Icon-00f46c3e.js";
import {
    W as Q
} from "./modal.constants-8f18da75.js";
import {
    S as J
} from "./select-1a695f19.js";
import "./channels-selector.constants-17faee62.js";
import {
    L as X
} from "./label-8afa9932.js";
import {
    I as Z
} from "./input.utils-49f1caab.js";
import {
    a as ee
} from "./plus-d9f869af.js";
import {
    _ as te
} from "./_baseAssignValue-a9ab2ca5.js";
import {
    _ as se
} from "./_baseEach-cdf24405.js";
import {
    f as ae
} from "./_baseIteratee-2fc96153.js";
import {
    a as ie
} from "./isArguments-425e080e.js";
import {
    u as ne
} from "./useInfiniteScroll-df569757.js";
import {
    a as re
} from "./wallet-b22c71c4.js";
import "./tslib-f175565a.js";
import "./lodash-90b837c1.js";
import "./edit-c2a95d42.js";
import "./useMount-18619ac0.js";
import "./useEffectOnce-8216f8da.js";
import "./_defineProperty-55355380.js";
import "./throttle-8fa2be1c.js";
var le = function(e) {
    function t(t, s) {
        return e.call(this, t, s) || this
    }
    g(t, e);
    var s = t.prototype;
    return s.bindMethods = function() {
        e.prototype.bindMethods.call(this), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
    }, s.setOptions = function(t, s) {
        e.prototype.setOptions.call(this, f({}, t, {
            behavior: j()
        }), s)
    }, s.getOptimisticResult = function(t) {
        return t.behavior = j(), e.prototype.getOptimisticResult.call(this, t)
    }, s.fetchNextPage = function(e) {
        var t;
        return this.fetch({
            cancelRefetch: null == (t = null == e ? void 0 : e.cancelRefetch) || t,
            throwOnError: null == e ? void 0 : e.throwOnError,
            meta: {
                fetchMore: {
                    direction: "forward",
                    pageParam: null == e ? void 0 : e.pageParam
                }
            }
        })
    }, s.fetchPreviousPage = function(e) {
        var t;
        return this.fetch({
            cancelRefetch: null == (t = null == e ? void 0 : e.cancelRefetch) || t,
            throwOnError: null == e ? void 0 : e.throwOnError,
            meta: {
                fetchMore: {
                    direction: "backward",
                    pageParam: null == e ? void 0 : e.pageParam
                }
            }
        })
    }, s.createResult = function(t, s) {
        var a, i, n, r, l, o, c = t.state,
            d = e.prototype.createResult.call(this, t, s);
        return f({}, d, {
            fetchNextPage: this.fetchNextPage,
            fetchPreviousPage: this.fetchPreviousPage,
            hasNextPage: b(s, null == (a = c.data) ? void 0 : a.pages),
            hasPreviousPage: w(s, null == (i = c.data) ? void 0 : i.pages),
            isFetchingNextPage: c.isFetching && "forward" === (null == (n = c.fetchMeta) || null == (r = n.fetchMore) ? void 0 : r.direction),
            isFetchingPreviousPage: c.isFetching && "backward" === (null == (l = c.fetchMeta) || null == (o = l.fetchMore) ? void 0 : o.direction)
        })
    }, t
}(e);
const oe = B.img`
  max-width: min(600px, 100%);
  margin-bottom: 26px;
`,
    ce = B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  line-height: 28px;
  text-align: center;

  ${I(_`
    font-size: 14px;
    line-height: 22px;
  `)}
`,
    de = ({
        textKey: e,
        textValues: t,
        image: s
    }) => y.jsxs("div", {
        className: "flex my-10 flex-col items-center justify-center",
        children: [y.jsx(oe, {
            src: s
        }), y.jsx(ce, {
            children: y.jsx(N, {
                id: e,
                values: t
            })
        })]
    }),
    ue = "/assets/Wallets-d237ed3b.svg",
    me = B.div`
  background-color: ${E};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);

  ${e=>e.onClick?`\n  cursor: pointer;\n  transition: all 300ms ease;\n  border: 1px solid transparent;\n\n  &:hover {\n    border: 1px solid ${S};\n  }\n  `:""}

  ${e=>V(e)}
    ${e=>q(e)}
`,
    he = B.hr`
  width: 100%;
  height: 1px;
  background-color: ${k};
  border: none;

  ${e=>V(e)}
`,
    xe = C((({
        intl: e,
        transactions: t,
        loading: a,
        fetching: i
    }) => {
        const [o, x] = F.useState(null);
        return a ? y.jsx(n, {
            align: "center",
            children: y.jsx(s, {})
        }) : 0 === t.length ? y.jsx(de, {
            image: "/assets/Transactions-84c90617.svg",
            textKey: "public.wallet.empty"
        }) : y.jsxs(y.Fragment, {
            children: [y.jsx(c, {
                mBottom: !0,
                children: y.jsx(N, {
                    id: "public.wallet.transactions.title"
                })
            }), t.map((t => y.jsxs(me, {
                padding: r.m4,
                mBottom: r.m1,
                onClick: () => x(t),
                children: [y.jsx(n, {
                    align: "left",
                    children: y.jsx(d, {
                        children: e.formatMessage({
                            id: "public.wallet.transaction.date"
                        }, {
                            date: z.unix(t.timestamp).format("DD MMM YYYY"),
                            time: z.unix(t.timestamp).format("HH:mm")
                        })
                    })
                }), y.jsx(he, {
                    mTop: r.m2,
                    mBottom: r.m2
                }), y.jsxs(n, {
                    verticalAlign: "center",
                    children: [y.jsx(l, {
                        mRight: !0,
                        children: y.jsx(G, {
                            icon: "withdraw" === t.type ? "Withdrawal" : "Wallet",
                            main: P,
                            secondary: T,
                            size: "large"
                        })
                    }), y.jsxs(l, {
                        align: "left",
                        mRight: "auto",
                        children: [y.jsx(c, {
                            children: y.jsx(N, {
                                id: `public.wallet.transactions.type.${t.type}`
                            })
                        }), y.jsx(u, {
                            color: t.color,
                            children: y.jsx(N, {
                                id: `public.wallet.transactions.status.${t.status}`
                            })
                        })]
                    }), "pending" !== t.status ? y.jsxs(l, {
                        align: "right",
                        children: [y.jsxs(c, {
                            bold: !0,
                            children: [t.amount, " ETH"]
                        }), y.jsxs("p", {
                            children: ["$", t.usd]
                        })]
                    }) : null]
                })]
            }, t.id))), i ? y.jsx(n, {
                align: "center",
                mTop: r.m3,
                mBottom: r.m3,
                children: y.jsx(s, {})
            }) : null, y.jsx(Q, {
                open: !!o,
                onClose: () => x(null),
                children: y.jsx("div", {
                    children: o ? y.jsxs(y.Fragment, {
                        children: [y.jsx(m, {
                            bold: !0,
                            mBottom: r.m5,
                            children: y.jsx(N, {
                                id: `public.wallet.transactions.type.${o.type}`
                            })
                        }), "pending" !== o.status ? y.jsx(c, {
                            bold: !0,
                            mBottom: r.m3,
                            color: "white",
                            children: y.jsx(N, {
                                id: "public.wallet.transaction.modal.summary"
                            })
                        }) : null, "pending" !== o.status ? y.jsx(me, {
                            padding: r.m3,
                            children: y.jsxs(n, {
                                align: "left",
                                children: [y.jsx(l, {
                                    mRight: r.m1,
                                    children: y.jsx("img", {
                                        className: "h-[28px] w-[28px]",
                                        src: "/assets/EthereumLogo-61148414.svg"
                                    })
                                }), y.jsxs(l, {
                                    align: "left",
                                    children: [y.jsxs(c, {
                                        bold: !0,
                                        children: ["deposit" === o.type ? "+ " : "- ", o.amount, " ETH"]
                                    }), y.jsxs(u, {
                                        children: ["deposit" === o.type ? "+" : "-", " $", o.usd]
                                    })]
                                })]
                            })
                        }) : null, y.jsxs(n, {
                            pLeft: r.m3,
                            pRight: r.m3,
                            pTop: r.m2,
                            children: [y.jsxs(l, {
                                align: "left",
                                mRight: "auto",
                                children: [y.jsx(u, {
                                    children: y.jsx(N, {
                                        id: "public.wallet.transaction.modal.status"
                                    })
                                }), y.jsx(c, {
                                    color: o.color,
                                    mBottom: r.m3,
                                    children: y.jsx(N, {
                                        id: `public.wallet.transactions.status.${o.status}`
                                    })
                                }), "pending" !== o.status ? y.jsxs(y.Fragment, {
                                    children: [y.jsx(u, {
                                        children: y.jsx(N, {
                                            id: "public.wallet.transaction.modal.from"
                                        })
                                    }), y.jsx(c, {
                                        children: y.jsx(h, {
                                            href: `${R.ETHERSCAN_URL}/tx/${o.hash}`,
                                            target: "_blank",
                                            children: y.jsx(N, {
                                                id: "public.wallet.transaction.modal.link"
                                            })
                                        })
                                    })]
                                }) : null]
                            }), y.jsxs(l, {
                                align: "right",
                                children: [y.jsx(u, {
                                    children: y.jsx(N, {
                                        id: "public.wallet.transaction.modal.date"
                                    })
                                }), y.jsx(c, {
                                    color: "white",
                                    children: e.formatMessage({
                                        id: "public.wallet.transaction.date"
                                    }, {
                                        date: z.unix(o.timestamp).format("DD MMM YYYY"),
                                        time: z.unix(o.timestamp).format("HH:mm")
                                    })
                                })]
                            })]
                        })]
                    }) : null
                })
            })]
        })
    })),
    pe = ({
        inputETH: e,
        inputUSD: t
    }) => {
        const {
            user: s
        } = D(), [a, i] = F.useState(0), [n, r] = F.useState(!1), l = F.useRef();
        return F.useEffect((() => {
            t && 0 !== parseFloat(t) ? (async () => {
                const e = parseFloat(t, 10);
                r(!0), l.current = t;
                const a = await M.estimateEth(s.id, e);
                l.current === t && (i(a.data.eth_amount), r(!1))
            })() : i(0)
        }), [t]), F.useEffect((() => {
            e && 0 !== parseFloat(e) ? (async () => {
                const t = parseFloat(e);
                r(!0), l.current = e;
                const a = await M.estimateUsd(s.id, t);
                l.current === e && (i(a.data.usd_amount?.toFixed(2)), r(!1))
            })() : i(0)
        }), [e]), {
            computing: n,
            outputAmount: a
        }
    },
    ge = ({
        amount: e,
        user: t,
        wallet: s
    }) => {
        const {
            activeWallet: a
        } = s, [i, n] = F.useState(0), [r, l] = F.useState(0);
        return F.useEffect((() => {
            if (0 === parseFloat(e) || !e) return n(0), void l(0);
            (async () => {
                const s = await M.estimateGas(t.id, a, e);
                n((() => s.ok ? s.data.estimated_gas : 0)), l((() => s.ok ? s.data.usd : 0))
            })()
        }), [e]), {
            gas: i,
            gasUSD: r
        }
    },
    fe = B.img`
  width: min(384px, 100%);
  margin: 0 auto 40px auto;
`,
    je = ({
        titleKey: e,
        bodyKey: t,
        titleValues: s = {},
        image: a,
        onClose: i
    }) => y.jsx("div", {
        className: "py-8",
        children: y.jsxs(l, {
            align: "center",
            children: [y.jsx(fe, {
                src: a
            }), y.jsx(m, {
                align: "center",
                bold: !0,
                mBottom: r.m3,
                children: y.jsx(N, {
                    id: e,
                    values: s
                })
            }), t ? y.jsx(c, {
                align: "center",
                children: y.jsx(N, {
                    id: t
                })
            }) : null, i ? y.jsx(H, {
                onClick: i,
                size: "large",
                className: "mt-6",
                children: y.jsx(N, {
                    id: "public.wallet.deposit.close"
                })
            }) : null]
        })
    }),
    be = B.div`
  display: flex;
  align-items: center;
  grid-gap: 8px;
  margin-bottom: 8px;
  width: 100%;
`,
    we = ({
        user: e,
        onCancel: t = null,
        wallet: s,
        titleKey: a
    }) => {
        const {
            balance: i,
            balanceUSD: l,
            activeWallet: o,
            verifiedAddresses: d
        } = s, [u, m] = F.useState(0), [h, p] = F.useState(0), [g, f] = F.useState(""), [j, b] = F.useState(!1), {
            withdrawAddress: w,
            setWithdrawAddress: v,
            error: E,
            loading: S,
            withdraw: k,
            reset: C
        } = (({
            user: e,
            wallet: t,
            transactions: s = []
        }) => {
            const a = $(),
                {
                    connectWallet: i,
                    loading: n
                } = t,
                [r, l] = F.useState(t.activeWallet),
                [o, c] = F.useState(null),
                [d, u] = F.useState(!1),
                [m, h] = F.useState(null),
                x = F.useCallback((async e => {
                    h((() => e.id)), u((() => !1))
                }), [h, u]);
            F.useEffect((() => {
                window.ethereum.on("accountsChanged", (async e => {
                    a.setQueryData("activeWallet", (() => e[0]))
                }))
            }), []);
            const p = s?.find((e => e.id === m));
            return {
                withdraw: async t => {
                    if (!t || "0" === t) return;
                    u(!0), c(null);
                    const s = parseFloat(t);
                    await i();
                    try {
                        const t = await M.withdrawWallet(e.id, r.toLowerCase(), s);
                        return t.ok ? (x(t.data), t) : (c({
                            error: "failed"
                        }), t)
                    } catch (a) {
                        return console.error(a), c({
                            error: "failed"
                        }), null
                    }
                },
                loading: d || n,
                error: o,
                withdrawAddress: r,
                setWithdrawAddress: l,
                processing: m && !p ? {
                    status: "pending"
                } : p,
                reset: () => {
                    h(null), c(null), u(!1)
                }
            }
        })({
            user: e,
            wallet: s
        }), {
            outputAmount: P,
            computing: T
        } = pe({
            user: e,
            wallet: o,
            inputETH: u
        }), {
            outputAmount: R,
            computing: D
        } = pe({
            user: e,
            wallet: o,
            inputUSD: h
        }), {
            gas: A,
            gasUSD: O
        } = ge({
            amount: "USD" === g ? R : u,
            user: e,
            wallet: s
        }), W = () => {
            m(""), p(""), C(), t && t()
        };
        return F.useEffect((() => {
            "failed" === E?.error && W()
        }), [E]), j ? y.jsx(je, {
            onClose: W,
            titleKey: "public.wallet.withdraw.received.title",
            bodyKey: "public.wallet.withdraw.received.text",
            image: "/assets/ProcessingETHTransaction-781576e8.svg"
        }) : y.jsxs(y.Fragment, {
            children: [a ? y.jsx("h2", {
                className: "text-h5 my-8 text-white font-bold",
                children: y.jsx(N, {
                    id: a
                })
            }) : null, y.jsxs("div", {
                className: "flex flex-col",
                children: [y.jsx(X, {
                    children: y.jsx(N, {
                        id: "public.wallet.withdraw.address"
                    })
                }), y.jsx(J, {
                    options: d,
                    onChange: e => {
                        v(e)
                    },
                    value: w
                }), y.jsx(c, {
                    color: "white",
                    bold: !0,
                    mBottom: r.m3,
                    mTop: r.m3,
                    children: y.jsx(N, {
                        id: "public.wallet.subtitle"
                    })
                }), y.jsx(X, {
                    children: y.jsx(N, {
                        id: "public.wallet.label"
                    })
                }), y.jsxs(be, {
                    children: [y.jsx(Z, {
                        className: "flex-1",
                        value: "ETH" === g ? u : R,
                        placeholder: "0",
                        onFocus: () => {
                            "ETH" !== g && (f("ETH"), m(""), p(""))
                        },
                        onChange: e => {
                            m(e), C()
                        },
                        type: "number",
                        min: 1e-4,
                        max: i,
                        suffix: "ETH",
                        disabled: S,
                        loading: D
                    }), "=", y.jsx(Z, {
                        className: "flex-1",
                        placeholder: "0",
                        onFocus: () => {
                            "USD" !== g && (f("USD"), p(""), m(""))
                        },
                        onChange: e => {
                            p(e), C()
                        },
                        value: "USD" === g ? h : P,
                        prefix: "$",
                        loading: T
                    })]
                }), A ? y.jsxs(n, {
                    mTop: r.m3,
                    children: [y.jsx(x, {
                        mRight: r.m1,
                        children: y.jsx(N, {
                            id: "public.wallet.estimatedGas"
                        })
                    }), y.jsxs(x, {
                        color: "white",
                        bold: !0,
                        mRight: r.m1,
                        children: [A, " ETH"]
                    }), y.jsxs(x, {
                        children: ["$", O]
                    })]
                }) : null]
            }), y.jsxs("div", {
                className: "flex py-6 justify-end gap-4",
                children: [t ? y.jsx(H, {
                    size: "large",
                    theme: "secondary",
                    onClick: t,
                    disabled: S,
                    children: y.jsx(N, {
                        id: "button.cancel"
                    })
                }) : null, y.jsx(H, {
                    size: "large",
                    onClick: async () => {
                        (await k("ETH" === g ? u : R))?.ok && b(!0)
                    },
                    disabled: !w || !u && "ETH" === g || !parseFloat(R) && "USD" === g || D && "USD" === g || S || i < parseFloat(u) && "ETH" === g || l < parseFloat(h) && "USD" === g,
                    loading: S,
                    pLeft: r.m3,
                    pRight: r.m3,
                    children: y.jsx(N, {
                        id: "public.wallet.withdraw.submit"
                    })
                })]
            })]
        })
    },
    ve = ({
        wallet: e,
        onConnect: t
    }) => y.jsx(y.Fragment, {
        children: y.jsx("div", {
            className: "flex items-center justify-center mb-6",
            children: y.jsx(H, {
                onClick: t,
                children: y.jsx(N, {
                    id: "public.wallet." + (e ? "verify" : "connect")
                })
            })
        })
    }),
    ye = window.innerHeight / 5,
    Ne = ({
        user: e
    }) => {
        const t = $(),
            {
                items: s,
                setItems: a,
                loading: i,
                reset: n,
                fetching: r
            } = (({
                step: e = 7,
                fetch: t
            }) => {
                const [s, a] = F.useState(!0), i = F.useRef(!1), n = F.useRef(!1), r = F.useRef(0), l = F.useRef(e), [o, c] = F.useState([]), d = F.useCallback((async () => {
                    i.current = !0;
                    const s = await t({
                        limit: l.current,
                        skip: r.current
                    });
                    return n.current = s.length < e, r.current = r.current + e, c((e => [...e, ...s])), setTimeout((() => {
                        i.current = !1
                    }), 500), s
                }), [o]), u = e => {
                    window.innerHeight + window.scrollY >= document.body.scrollHeight - ye && (i.current || n.current || d())
                };
                return F.useEffect((() => (d().then((() => a(!1))), document.addEventListener("scroll", u), () => document.removeEventListener("scroll", u))), []), {
                    items: o,
                    setItems: c,
                    loading: s,
                    fetching: i.current && !n.current,
                    reset: async () => (r.current = 0, l.current = e, n.current = !1, c([]), await d())
                }
            })({
                fetch: async ({
                    limit: t,
                    skip: s
                }) => {
                    const a = await M.getTransactions(e.id, t, s, "timestamp", -1, "deposit,withdraw", 0);
                    return a.ok ? a.data.transactions : []
                }
            }),
            l = F.useRef(null),
            o = F.useCallback((async () => {
                const s = await M.getTransactions(e.id, 10, 0, "timestamp", -1, "deposit,withdraw", 1);
                s.ok && (a((e => {
                    const a = [...s.data.transactions.map((e => ({
                        ...e,
                        color: "pending" === e.status ? "orange" : "confirmed" === e.status ? "green" : "red"
                    })), ...e.filter((e => !s.data.transactions.find((t => t.id === e.id)))))];
                    for (let i of s.data.transactions) i.status !== e.find((e => e.id === i.id))?.status && t.refetchQueries("getWalletBalance");
                    return a
                })), l.current = setTimeout((() => o()), 5e3))
            }), [s, a]);
        return F.useEffect((() => {
            if (!i) return o(), () => clearTimeout(l.current)
        }), [i]), {
            transactions: s.map((e => ({
                ...e,
                color: "pending" === e.status ? "orange" : "confirmed" === e.status ? "green" : "red"
            }))),
            loading: i,
            fetching: r
        }
    },
    Ee = B.div``,
    Se = B.section``,
    ke = B.div`
  margin-right: 24px;
  cursor: pointer;
  color: ${e=>e.selected?A:O};
  padding-bottom: 5px;
  transition: color 300ms ease;
  white-space: nowrap;

  &:hover {
    color: ${A};
  }
`,
    Ce = B.div`
  ${Se} {
    display: none;
  }
  ${Se}:nth-child(${e=>e.tab}) {
    display: block;
  }
`,
    Fe = B.div`
  height: 2px;
  background-color: ${A};
  position: absolute;
  bottom: 0;
  transition: all 300ms ease;
  border-radius: 2px;
`,
    Pe = ({
        currentTab: e,
        onTabChanged: t,
        children: s,
        align: a = "left"
    }) => {
        const [i, n] = F.useState(0), r = F.useRef([]), [l, o] = F.useState(0), [c, d] = F.useState(0);
        return F.useEffect((() => {
            void 0 !== e && n(e)
        }), [e]), F.useEffect((() => {
            r.current[i] && (t && t(i), o(r.current[i].offsetLeft), d(r.current[i].offsetWidth))
        }), [i]), y.jsxs(Ee, {
            children: [y.jsxs("div", {
                className: "flex border-b border-solid border-grey-400 mb-6 relative overflow-x-auto " + ("center" === a ? "justify-center" : "right" === a ? "justify-end" : "justify-start"),
                children: [s.filter((e => e && e.props.titleKey)).map(((e, t) => y.jsx(ke, {
                    ref: e => r.current[t] = e,
                    onClick: () => n(t),
                    selected: t === i,
                    children: y.jsx(N, {
                        id: e.props.titleKey
                    })
                }))), y.jsx(Fe, {
                    style: {
                        left: l + "px",
                        width: c + "px"
                    }
                })]
            }), y.jsx(Ce, {
                tab: i + 1,
                children: s
            })]
        })
    };
var Te = se;
var Re = function(e, t, s, a) {
        for (var i = -1, n = null == e ? 0 : e.length; ++i < n;) {
            var r = e[i];
            t(a, r, s(r), e)
        }
        return a
    },
    $e = function(e, t, s, a) {
        return Te(e, (function(e, i, n) {
            t(a, e, s(e), n)
        })), a
    },
    Me = ae,
    De = ie;
var He = te,
    Ae = function(e, t) {
        return function(s, a) {
            var i = De(s) ? Re : $e,
                n = t ? t() : {};
            return i(s, e, Me(a), n)
        }
    },
    Oe = Object.prototype.hasOwnProperty;
const We = W(Ae((function(e, t, s) {
        Oe.call(e, s) ? e[s].push(t) : He(e, s, [t])
    }))),
    Ye = () => {
        const {
            user: e
        } = D(), {
            fetchNextPage: s,
            data: a,
            isLoading: i,
            isFetching: n
        } = (r = v("getCollections", (async ({
            pageParam: t = 0
        }) => {
            if (!1 === t) return {
                transactions: []
            };
            const s = await M.getTransactions(e.id, 7 * t + 7, 7 * t, "timestamp", -1, "collection", 0);
            return s.ok ? s.data : {
                transactions: []
            }
        }), {
            getNextPageParam: (e, t) => !(e.transactions.length < 7) && t.length
        }), t(r, le));
        var r;
        ne((async () => (await s()).data.pages));
        const l = a?.pages.map((e => e.transactions)).flat() || [];
        return {
            collections: We(l, (e => z().startOf("year").month(z.unix(e.timestamp).month()).format("YYYY-MM-DD"))),
            isLoading: i,
            isFetching: n
        }
    },
    Ke = () => {
        const {
            collections: e,
            isLoading: t,
            isFetching: i
        } = Ye();
        return t ? y.jsx("div", {
            className: "flex justify-center",
            children: y.jsx(s, {})
        }) : y.jsxs(y.Fragment, {
            children: [Object.keys(e).map((t => y.jsxs(Y.Fragment, {
                children: [y.jsx("div", {
                    className: "mt-8 pb-2 mb-4 border-b border-solid border-grey-400 text-caption",
                    children: z(t).format("MMMM YYYY")
                }), e[t].map((e => y.jsxs("div", {
                    className: "shadow-sm rounded-md bg-grey-600 p-8 mb-2 flex items-center",
                    children: [e.subscription ? y.jsxs(y.Fragment, {
                        children: [y.jsxs("div", {
                            className: "flex mr-10",
                            children: [y.jsxs("div", {
                                className: "relative flex items-center",
                                children: [y.jsx(a, {
                                    size: "10",
                                    user: e.subscription.user
                                }), y.jsx(ee, {
                                    className: "text-grey-700 h-4 w-4 absolute right-0 bottom-0",
                                    fill: K
                                })]
                            }), y.jsxs("div", {
                                className: "flex flex-col ml-4",
                                children: [y.jsx("div", {
                                    className: "text-subheadline text-white",
                                    children: e.subscription.user?.username
                                }), y.jsxs("div", {
                                    className: "flex items-center",
                                    children: [y.jsx("div", {
                                        className: "" + ("confirmed" === e.status ? "text-green-default" : "declined" === e.status ? "text-red-default" : "text-orange-default"),
                                        children: y.jsx(N, {
                                            id: `public.wallet.transactions.status.${e.status}`
                                        })
                                    }), y.jsx("div", {
                                        className: "text-caption mr-2 ml-2",
                                        children: "·"
                                    }), y.jsx("div", {
                                        className: "text-caption",
                                        children: z.unix(e.timestamp).format("DD/MM [at] HH:mm")
                                    })]
                                })]
                            })]
                        }), y.jsxs("div", {
                            className: "flex flex-col items-start",
                            children: [y.jsxs("div", {
                                className: "bg-grey-500 rounded-md flex items-center px-2 py-1",
                                children: [e.subscription.plan?.icon_url ? y.jsx("img", {
                                    className: "rounded-md h-[20px] w-[20px]",
                                    src: e.subscription.plan?.icon_url
                                }) : y.jsx(G, {
                                    className: "bg-yellow-default/0.16",
                                    icon: "IconSocialConnector",
                                    main: U
                                }), y.jsx("div", {
                                    className: "ml-2 text-grey-100",
                                    children: e.subscription.plan?.name
                                })]
                            }), y.jsx("div", {
                                className: "text-caption mt-1 px-2",
                                children: e.subscription.bundle ? y.jsx(N, {
                                    id: "public.wallet.transactions.bundle",
                                    values: {
                                        months: e.subscription.bundle.months
                                    }
                                }) : y.jsx(N, {
                                    id: "public.wallet.transactions.monthly"
                                })
                            })]
                        })]
                    }) : null, y.jsxs("div", {
                        className: "flex flex-col items-end ml-auto",
                        children: [y.jsxs("div", {
                            className: "text-subheadline text-grey-100 font-bold",
                            children: [e.usd > 0 ? "+" : "-", " $", Math.abs(e.usd)]
                        }), y.jsxs("div", {
                            className: "text-footnote",
                            children: [e.amount, " ETH"]
                        })]
                    })]
                }, e.id)))]
            }, t))), i ? y.jsx("div", {
                className: "mt-8 flex justify-center",
                children: y.jsx(s, {})
            }) : null]
        })
    },
    Ue = ({
        user: e,
        wallet: t
    }) => {
        const a = L(),
            {
                verifiedAddresses: i,
                activeWallet: n,
                connectWallet: r,
                loading: l
            } = t,
            [o, c] = F.useState(!1),
            {
                transactions: d,
                loading: u,
                fetching: m
            } = Ne({
                user: e
            });
        return F.useEffect((() => {
            new URLSearchParams(window.location.search).get("withdrawal") && (a({
                search: ""
            }), c(!0))
        }), []), u || l ? y.jsx(s, {}) : y.jsxs(y.Fragment, {
            children: [i?.includes(n) ? y.jsx("div", {
                className: "flex gap-4 mb-10 items-center justify-center",
                children: y.jsx(H, {
                    icon: "Withdrawal",
                    theme: "secondary",
                    onClick: () => c(!0),
                    children: y.jsx(N, {
                        id: "public.wallet.withdraw.title"
                    })
                })
            }) : y.jsx(ve, {
                wallet: n,
                onConnect: async () => await r()
            }), 0 === i?.length && 0 === d.length ? y.jsx(de, {
                textKey: "public.wallet.connect.empty",
                image: ue
            }) : y.jsxs(Pe, {
                align: "center",
                children: [y.jsx(Se, {
                    titleKey: "public.wallet.transactions",
                    children: y.jsx(xe, {
                        transactions: d,
                        loading: u,
                        fetching: m
                    })
                }), y.jsx(Se, {
                    titleKey: "public.wallet.collections",
                    children: y.jsx(Ke, {})
                })]
            }), y.jsx(Q, {
                open: o,
                onClose: () => c(!1),
                children: y.jsx(we, {
                    user: e,
                    onCancel: () => c(!1),
                    wallet: t,
                    titleKey: "public.wallet.withdraw.title"
                })
            })]
        })
    },
    Le = () => {
        const {
            user: e
        } = D(), {
            browserName: t
        } = {
            browserName: -1 !== navigator.userAgent.indexOf("Edge") ? "Edge" : -1 !== navigator.userAgent.indexOf("Firefox") ? "Firefox" : -1 === navigator.userAgent.indexOf("Chrome") && -1 !== navigator.userAgent.indexOf("Safri") ? "Safari" : -1 !== navigator.userAgent.indexOf("Chrome") ? "Chrome" : ""
        }, a = re(), {
            balance: n,
            balanceUSD: d,
            loading: u,
            hasNetworkError: m,
            metamaskInstalled: h
        } = a;
        return y.jsxs(y.Fragment, {
            children: [y.jsx(i, {}), y.jsx(o, {
                align: "stretch",
                mTop: !0,
                children: u ? y.jsx(s, {
                    global: !0,
                    size: "large"
                }) : y.jsxs(y.Fragment, {
                    children: [y.jsxs(l, {
                        mBottom: r.m3,
                        children: [y.jsxs(p, {
                            mBottom: r.m1,
                            bold: !0,
                            gradient: n ? ["blue", "blue_light"] : void 0,
                            children: [n, " ETH"]
                        }), y.jsxs(c, {
                            color: d ? "white" : void 0,
                            children: ["$", d]
                        })]
                    }), h && !m ? y.jsx(Ue, {
                        user: e,
                        wallet: a
                    }) : h ? y.jsx(de, {
                        textValues: {
                            browserName: t
                        },
                        textKey: "public.wallet.wrong.network",
                        image: ue
                    }) : y.jsx(de, {
                        textValues: {
                            browserName: t
                        },
                        textKey: "public.wallet.install.metamask",
                        image: ue
                    })]
                })
            })]
        })
    };
export {
    Le as
    default
};
