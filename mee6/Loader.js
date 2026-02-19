import {
    r as e,
    at as t,
    aJ as r,
    e as a,
    I as n,
    j as i,
    f as l
} from "./index-684a1b71.js";
import {
    W as s,
    s as o,
    A as p
} from "./Loader2-db3a3ef5.js";
import {
    C as c
} from "./CSSTransition-f7f7974d.js";
var u = {
    exports: {}
};
const d = a(u.exports = function(e) {
        var t = {};

        function r(a) {
            if (t[a]) return t[a].exports;
            var n = t[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(n.exports, n, n.exports, r), n.l = !0, n.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, a) {
            r.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: a
            })
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 0)
    }([function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Types = t.Loader = void 0;
        var a = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var a = t[r];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(t, r, a) {
                    return r && e(t.prototype, r), a && e(t, a), t
                }
            }(),
            n = r(1),
            i = o(n),
            l = o(r(2)),
            s = o(r(3));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function p(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function c(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function u(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        var d = t.Loader = function(e) {
            function t() {
                return c(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), a(t, [{
                key: "renderDiv",
                value: function(e) {
                    var t = this.props.styles || {};
                    return this.props.color && (t.backgroundColor = this.props.color), i.default.createElement("div", {
                        key: e,
                        style: t
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = function(e) {
                            for (var t = -1, r = []; ++t < e;) r.push(t);
                            return r
                        }(f[this.props.type]),
                        r = (0, s.default)((p(e = {
                            loader: !0
                        }, "loader-" + this.props.size, "md" !== this.props.size), p(e, "loader-active", this.props.active), p(e, "loader-hidden", !this.props.active), e), this.props.className),
                        a = (0, s.default)(["loader-inner", this.props.type, this.props.innerClassName]);
                    return i.default.createElement("div", {
                        className: r,
                        style: this.props.style
                    }, i.default.createElement("div", {
                        className: a
                    }, t.map(this.renderDiv.bind(this))))
                }
            }], [{
                key: "removeType",
                value: function(e) {
                    delete f[key]
                }
            }, {
                key: "addType",
                value: function(e, t) {
                    return f[e] = t
                }
            }]), t
        }(n.Component);
        d.propTypes = {
            type: l.default.string,
            active: l.default.bool,
            color: l.default.string,
            innerClassName: l.default.string
        }, d.defaultProps = {
            type: "ball-pulse",
            active: !0
        }, t.default = d;
        var f = t.Types = {
            "ball-pulse": 3,
            "ball-grid-pulse": 9,
            "ball-clip-rotate": 1,
            "ball-clip-rotate-pulse": 2,
            "square-spin": 1,
            "ball-clip-rotate-multiple": 2,
            "ball-pulse-rise": 5,
            "ball-rotate": 1,
            "cube-transition": 2,
            "ball-zig-zag": 2,
            "ball-zig-zag-deflect": 2,
            "ball-triangle-path": 3,
            "ball-scale": 1,
            "line-scale": 5,
            "line-scale-party": 4,
            "ball-scale-multiple": 3,
            "ball-pulse-sync": 3,
            "ball-beat": 3,
            "line-scale-pulse-out": 5,
            "line-scale-pulse-out-rapid": 5,
            "ball-scale-ripple": 1,
            "ball-scale-ripple-multiple": 3,
            "ball-spin-fade-loader": 8,
            "line-spin-fade-loader": 8,
            "triangle-skew-spin": 1,
            pacman: 5,
            "ball-grid-beat": 9,
            "semi-circle-spin": 1
        }
    }, function(t, r) {
        t.exports = e
    }, function(e, r) {
        e.exports = t
    }, function(e, t) {
        e.exports = r
    }])),
    f = s`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  45% {
    transform: scale(0.1);
    opacity: 0.7;
  }
  80% {
    transform: scale(1);
    opacity: 1;
  }
`,
    b = o.div`
  margin-top: -72px;

  > div {
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    animation-fill-mode: both;
    display: inline-block;
  }

  > div:nth-child(1) {
    animation: ${f} 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }
  > div:nth-child(2) {
    animation: ${f} 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }
  > div:nth-child(3) {
    animation: ${f} 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }

  ${e=>e.$small&&p`
      > div {
        width: 8px;
        height: 8px;
        margin: 1px;
      }
    `}
`;
o.div`
  /* background-color: darken(0.12, color-accent-dark) */
  position: fixed;
  width: 100%;
  height: 100%;
  margin-top: 72px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  &.Loader-exit {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }

  ${e=>e.$fullPage&&p`
      margin-top: 0;

      ${b} {
        margin-top: 0;
      }
    `}
`;
class m extends n.PureComponent {
    render() {
        return i.jsxs(b, {
            $small: this.props.small,
            className: this.props.className,
            children: [i.jsx("div", {}), i.jsx("div", {}), i.jsx("div", {})]
        })
    }
}
class h extends n.Component {
    render() {
        let e = i.jsx(Container, {
            className: l(this.props.className, {
                Loader: !0,
                fullPage: this.props.fullPage
            }),
            children: i.jsx(m, {})
        }, "loader");
        return this.props.isLoading || i.jsx("div", {}), i.jsx(c, {
            component: n.Fragment,
            classNames: "Loader",
            timeout: {
                enter: 0,
                exit: 300
            },
            children: e
        })
    }
}
const y = o.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${e=>e.fullPage&&p`
      height: 100%;
      width: 100%;
    `}
`;

function v({
    className: e,
    fullPage: t
}) {
    return i.jsx(y, {
        className: e,
        fullPage: t,
        children: i.jsx(d, {
            type: "ball-pulse"
        })
    })
}
export {
    m as B, v as C
};
