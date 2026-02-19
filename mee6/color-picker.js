import {
    e,
    r as t,
    I as r,
    j as n,
    P as o,
    f as a,
    z as i,
    aj as l,
    F as s
} from "./index-684a1b71.js";
import {
    U as c,
    V as u,
    s as p,
    l as h
} from "./app-91bc7f76.js";
import {
    a as f
} from "./isArguments-8420dec1.js";
import {
    a as d
} from "./_baseEach-273a8841.js";
import {
    h as b,
    f as g,
    e as v
} from "./_baseIteratee-cd21cbb3.js";
import {
    c as x
} from "./_getAllKeysIn-0b0399bb.js";
import {
    _ as y
} from "./_baseMap-4ff63758.js";
import {
    _ as m
} from "./_baseClone-642c35ca.js";
import {
    n as w,
    s as E
} from "./utils-cf3b157b.js";
import {
    T as _
} from "./tick-9ce3c0db.js";
var C = {},
    j = {},
    k = c,
    S = f,
    O = u;
var F = function(e) {
        return "string" == typeof e || !S(e) && O(e) && "[object String]" == k(e)
    },
    R = b;
var A = d,
    B = function(e) {
        return "function" == typeof e ? e : R
    };
var M = function(e, t) {
        return e && A(e, B(t))
    },
    T = c,
    P = x,
    H = u,
    z = Function.prototype,
    D = Object.prototype,
    L = z.toString,
    N = D.hasOwnProperty,
    G = L.call(Object);
var U = function(e) {
        if (!H(e) || "[object Object]" != T(e)) return !1;
        var t = P(e);
        if (null === t) return !0;
        var r = N.call(t, "constructor") && t.constructor;
        return "function" == typeof r && r instanceof r && L.call(r) == G
    },
    W = v,
    I = g,
    X = y,
    V = f;
var $ = function(e, t) {
    return (V(e) ? W : X)(e, I(t))
};
const q = e($);
Object.defineProperty(j, "__esModule", {
    value: !0
}), j.flattenNames = void 0;
var Y = Q(F),
    K = Q(M),
    Z = Q(U),
    J = Q($);

function Q(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var ee = j.flattenNames = function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        r = [];
    return (0, J.default)(t, (function(t) {
        Array.isArray(t) ? e(t).map((function(e) {
            return r.push(e)
        })) : (0, Z.default)(t) ? (0, K.default)(t, (function(e, t) {
            !0 === e && r.push(t), r.push(t + "-" + e)
        })) : (0, Y.default)(t) && r.push(t)
    })), r
};
j.default = ee;
var te = {},
    re = m;
var ne = function(e) {
    return re(e, 5)
};
const oe = e(ne);
Object.defineProperty(te, "__esModule", {
    value: !0
}), te.mergeClasses = void 0;
var ae = se(M),
    ie = se(ne),
    le = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    };

function se(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var ce = te.mergeClasses = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        r = e.default && (0, ie.default)(e.default) || {};
    return t.map((function(t) {
        var n = e[t];
        return n && (0, ae.default)(n, (function(e, t) {
            r[t] || (r[t] = {}), r[t] = le({}, r[t], n[t])
        })), t
    })), r
};
te.default = ce;
var ue = {};
Object.defineProperty(ue, "__esModule", {
    value: !0
}), ue.autoprefix = void 0;
var pe, he = (pe = M) && pe.__esModule ? pe : {
        default: pe
    },
    fe = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    };
var de = {
        borderRadius: function(e) {
            return {
                msBorderRadius: e,
                MozBorderRadius: e,
                OBorderRadius: e,
                WebkitBorderRadius: e,
                borderRadius: e
            }
        },
        boxShadow: function(e) {
            return {
                msBoxShadow: e,
                MozBoxShadow: e,
                OBoxShadow: e,
                WebkitBoxShadow: e,
                boxShadow: e
            }
        },
        userSelect: function(e) {
            return {
                WebkitTouchCallout: e,
                KhtmlUserSelect: e,
                MozUserSelect: e,
                msUserSelect: e,
                WebkitUserSelect: e,
                userSelect: e
            }
        },
        flex: function(e) {
            return {
                WebkitBoxFlex: e,
                MozBoxFlex: e,
                WebkitFlex: e,
                msFlex: e,
                flex: e
            }
        },
        flexBasis: function(e) {
            return {
                WebkitFlexBasis: e,
                flexBasis: e
            }
        },
        justifyContent: function(e) {
            return {
                WebkitJustifyContent: e,
                justifyContent: e
            }
        },
        transition: function(e) {
            return {
                msTransition: e,
                MozTransition: e,
                OTransition: e,
                WebkitTransition: e,
                transition: e
            }
        },
        transform: function(e) {
            return {
                msTransform: e,
                MozTransform: e,
                OTransform: e,
                WebkitTransform: e,
                transform: e
            }
        },
        absolute: function(e) {
            var t = e && e.split(" ");
            return {
                position: "absolute",
                top: t && t[0],
                right: t && t[1],
                bottom: t && t[2],
                left: t && t[3]
            }
        },
        extend: function(e, t) {
            var r = t[e];
            return r || {
                extend: e
            }
        }
    },
    be = ue.autoprefix = function(e) {
        var t = {};
        return (0, he.default)(e, (function(e, r) {
            var n = {};
            (0, he.default)(e, (function(e, t) {
                var r = de[t];
                r ? n = fe({}, n, r(e)) : n[t] = e
            })), t[r] = n
        })), t
    };
ue.default = be;
var ge = {};
Object.defineProperty(ge, "__esModule", {
    value: !0
}), ge.hover = void 0;
var ve = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    xe = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(t);

function ye(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function me(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}

function we(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var Ee = ge.hover = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return function(r) {
        function n() {
            var r, o, a;
            ye(this, n);
            for (var i = arguments.length, l = Array(i), s = 0; s < i; s++) l[s] = arguments[s];
            return o = a = me(this, (r = n.__proto__ || Object.getPrototypeOf(n)).call.apply(r, [this].concat(l))), a.state = {
                hover: !1
            }, a.handleMouseOver = function() {
                return a.setState({
                    hover: !0
                })
            }, a.handleMouseOut = function() {
                return a.setState({
                    hover: !1
                })
            }, a.render = function() {
                return xe.default.createElement(t, {
                    onMouseOver: a.handleMouseOver,
                    onMouseOut: a.handleMouseOut
                }, xe.default.createElement(e, ve({}, a.props, a.state)))
            }, me(a, o)
        }
        return we(n, xe.default.Component), n
    }()
};
ge.default = Ee;
var _e = {};
Object.defineProperty(_e, "__esModule", {
    value: !0
}), _e.active = void 0;
var Ce = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    je = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(t);

function ke(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Se(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}

function Oe(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var Fe = _e.active = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return function(r) {
        function n() {
            var r, o, a;
            ke(this, n);
            for (var i = arguments.length, l = Array(i), s = 0; s < i; s++) l[s] = arguments[s];
            return o = a = Se(this, (r = n.__proto__ || Object.getPrototypeOf(n)).call.apply(r, [this].concat(l))), a.state = {
                active: !1
            }, a.handleMouseDown = function() {
                return a.setState({
                    active: !0
                })
            }, a.handleMouseUp = function() {
                return a.setState({
                    active: !1
                })
            }, a.render = function() {
                return je.default.createElement(t, {
                    onMouseDown: a.handleMouseDown,
                    onMouseUp: a.handleMouseUp
                }, je.default.createElement(e, Ce({}, a.props, a.state)))
            }, Se(a, o)
        }
        return Oe(n, je.default.Component), n
    }()
};
_e.default = Fe;
var Re = {};
Object.defineProperty(Re, "__esModule", {
    value: !0
});
Re.default = function(e, t) {
    var r = {},
        n = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            r[e] = t
        };
    return 0 === e && n("first-child"), e === t - 1 && n("last-child"), (0 === e || e % 2 == 0) && n("even"), 1 === Math.abs(e % 2) && n("odd"), n("nth-child", e), r
}, Object.defineProperty(C, "__esModule", {
    value: !0
}), C.ReactCSS = C.loop = C.handleActive = De = C.handleHover = C.hover = void 0;
var Ae = ze(j),
    Be = ze(te),
    Me = ze(ue),
    Te = ze(ge),
    Pe = ze(_e),
    He = ze(Re);

function ze(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
C.hover = Te.default;
var De = C.handleHover = Te.default;
C.handleActive = Pe.default, C.loop = He.default;
var Le = C.ReactCSS = function(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        var o = (0, Ae.default)(r),
            a = (0, Be.default)(e, o);
        return (0, Me.default)(a)
    },
    Ne = C.default = Le,
    Ge = function(e, t, r, n, o) {
        var a = o.clientWidth,
            i = o.clientHeight,
            l = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            s = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            c = l - (o.getBoundingClientRect().left + window.pageXOffset),
            u = s - (o.getBoundingClientRect().top + window.pageYOffset);
        if ("vertical" === r) {
            var p = void 0;
            if (p = u < 0 ? 0 : u > i ? 1 : Math.round(100 * u / i) / 100, t.a !== p) return {
                h: t.h,
                s: t.s,
                l: t.l,
                a: p,
                source: "rgb"
            }
        } else {
            var h = void 0;
            if (n !== (h = c < 0 ? 0 : c > a ? 1 : Math.round(100 * c / a) / 100)) return {
                h: t.h,
                s: t.s,
                l: t.l,
                a: h,
                source: "rgb"
            }
        }
        return null
    },
    Ue = {},
    We = function(e, t, r, n) {
        var o = e + "-" + t + "-" + r + (n ? "-server" : "");
        if (Ue[o]) return Ue[o];
        var a = function(e, t, r, n) {
            if ("undefined" == typeof document && !n) return null;
            var o = n ? new n : document.createElement("canvas");
            o.width = 2 * r, o.height = 2 * r;
            var a = o.getContext("2d");
            return a ? (a.fillStyle = e, a.fillRect(0, 0, o.width, o.height), a.fillStyle = t, a.fillRect(0, 0, r, r), a.translate(r, r), a.fillRect(0, 0, r, r), o.toDataURL()) : null
        }(e, t, r, n);
        return Ue[o] = a, a
    },
    Ie = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    Xe = function(e) {
        var o = e.white,
            a = e.grey,
            i = e.size,
            l = e.renderers,
            s = e.borderRadius,
            c = e.boxShadow,
            u = e.children,
            p = Ne({
                default: {
                    grid: {
                        borderRadius: s,
                        boxShadow: c,
                        absolute: "0px 0px 0px 0px",
                        background: "url(" + We(o, a, i, l.canvas) + ") center left"
                    }
                }
            });
        return t.isValidElement(u) ? r.cloneElement(u, Ie({}, u.props, {
            style: Ie({}, u.props.style, p.grid)
        })) : n.jsx("div", {
            style: p.grid
        })
    };
Xe.defaultProps = {
    size: 8,
    white: "transparent",
    grey: "rgba(0,0,0,.08)",
    renderers: {}
};
var Ve = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    $e = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }();

function qe(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Ye(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}
var Ke = function(e) {
        function o() {
            var e, t, r;
            qe(this, o);
            for (var n = arguments.length, a = Array(n), i = 0; i < n; i++) a[i] = arguments[i];
            return t = r = Ye(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [this].concat(a))), r.handleChange = function(e) {
                var t = Ge(e, r.props.hsl, r.props.direction, r.props.a, r.container);
                t && "function" == typeof r.props.onChange && r.props.onChange(t, e)
            }, r.handleMouseDown = function(e) {
                r.handleChange(e), window.addEventListener("mousemove", r.handleChange), window.addEventListener("mouseup", r.handleMouseUp)
            }, r.handleMouseUp = function() {
                r.unbindEventListeners()
            }, r.unbindEventListeners = function() {
                window.removeEventListener("mousemove", r.handleChange), window.removeEventListener("mouseup", r.handleMouseUp)
            }, Ye(r, t)
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
        }(o, t.PureComponent || t.Component), $e(o, [{
            key: "componentWillUnmount",
            value: function() {
                this.unbindEventListeners()
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props.rgb,
                    o = Ne({
                        default: {
                            alpha: {
                                absolute: "0px 0px 0px 0px",
                                borderRadius: this.props.radius
                            },
                            checkboard: {
                                absolute: "0px 0px 0px 0px",
                                overflow: "hidden",
                                borderRadius: this.props.radius
                            },
                            gradient: {
                                absolute: "0px 0px 0px 0px",
                                background: "linear-gradient(to right, rgba(" + t.r + "," + t.g + "," + t.b + ", 0) 0%,\n           rgba(" + t.r + "," + t.g + "," + t.b + ", 1) 100%)",
                                boxShadow: this.props.shadow,
                                borderRadius: this.props.radius
                            },
                            container: {
                                position: "relative",
                                height: "100%",
                                margin: "0 3px"
                            },
                            pointer: {
                                position: "absolute",
                                left: 100 * t.a + "%"
                            },
                            slider: {
                                width: "4px",
                                borderRadius: "1px",
                                height: "8px",
                                boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                                background: "#fff",
                                marginTop: "1px",
                                transform: "translateX(-2px)"
                            }
                        },
                        vertical: {
                            gradient: {
                                background: "linear-gradient(to bottom, rgba(" + t.r + "," + t.g + "," + t.b + ", 0) 0%,\n           rgba(" + t.r + "," + t.g + "," + t.b + ", 1) 100%)"
                            },
                            pointer: {
                                left: 0,
                                top: 100 * t.a + "%"
                            }
                        },
                        overwrite: Ve({}, this.props.style)
                    }, {
                        vertical: "vertical" === this.props.direction,
                        overwrite: !0
                    });
                return n.jsxs("div", {
                    style: o.alpha,
                    children: [n.jsx("div", {
                        style: o.checkboard,
                        children: n.jsx(Xe, {
                            renderers: this.props.renderers
                        })
                    }), n.jsx("div", {
                        style: o.gradient
                    }), n.jsx("div", {
                        style: o.container,
                        ref: function(t) {
                            return e.container = t
                        },
                        onMouseDown: this.handleMouseDown,
                        onTouchMove: this.handleChange,
                        onTouchStart: this.handleChange,
                        children: n.jsx("div", {
                            style: o.pointer,
                            children: this.props.pointer ? r.createElement(this.props.pointer, this.props) : n.jsx("div", {
                                style: o.slider
                            })
                        })
                    })]
                })
            }
        }]), o
    }(),
    Ze = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }();
var Je = [38, 40],
    Qe = 1,
    et = function(e) {
        function r(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, r);
            var t = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
            return t.handleBlur = function() {
                t.state.blurValue && t.setState({
                    value: t.state.blurValue,
                    blurValue: null
                })
            }, t.handleChange = function(e) {
                t.setUpdatedValue(e.target.value, e)
            }, t.handleKeyDown = function(e) {
                var r, n = function(e) {
                    return Number(String(e).replace(/%/g, ""))
                }(e.target.value);
                if (!isNaN(n) && (r = e.keyCode, Je.indexOf(r) > -1)) {
                    var o = t.getArrowOffset(),
                        a = 38 === e.keyCode ? n + o : n - o;
                    t.setUpdatedValue(a, e)
                }
            }, t.handleDrag = function(e) {
                if (t.props.dragLabel) {
                    var r = Math.round(t.props.value + e.movementX);
                    r >= 0 && r <= t.props.dragMax && t.props.onChange && t.props.onChange(t.getValueObjectWithLabel(r), e)
                }
            }, t.handleMouseDown = function(e) {
                t.props.dragLabel && (e.preventDefault(), t.handleDrag(e), window.addEventListener("mousemove", t.handleDrag), window.addEventListener("mouseup", t.handleMouseUp))
            }, t.handleMouseUp = function() {
                t.unbindEventListeners()
            }, t.unbindEventListeners = function() {
                window.removeEventListener("mousemove", t.handleDrag), window.removeEventListener("mouseup", t.handleMouseUp)
            }, t.state = {
                value: String(e.value).toUpperCase(),
                blurValue: String(e.value).toUpperCase()
            }, t.inputId = "rc-editable-input-" + Qe++, t
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
        }(r, t.PureComponent || t.Component), Ze(r, [{
            key: "componentDidUpdate",
            value: function(e, t) {
                this.props.value === this.state.value || e.value === this.props.value && t.value === this.state.value || (this.input === document.activeElement ? this.setState({
                    blurValue: String(this.props.value).toUpperCase()
                }) : this.setState({
                    value: String(this.props.value).toUpperCase(),
                    blurValue: !this.state.blurValue && String(this.props.value).toUpperCase()
                }))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.unbindEventListeners()
            }
        }, {
            key: "getValueObjectWithLabel",
            value: function(e) {
                return function(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }({}, this.props.label, e)
            }
        }, {
            key: "getArrowOffset",
            value: function() {
                return this.props.arrowOffset || 1
            }
        }, {
            key: "setUpdatedValue",
            value: function(e, t) {
                var r = this.props.label ? this.getValueObjectWithLabel(e) : e;
                this.props.onChange && this.props.onChange(r, t), this.setState({
                    value: e
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = Ne({
                        default: {
                            wrap: {
                                position: "relative"
                            }
                        },
                        "user-override": {
                            wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
                            input: this.props.style && this.props.style.input ? this.props.style.input : {},
                            label: this.props.style && this.props.style.label ? this.props.style.label : {}
                        },
                        "dragLabel-true": {
                            label: {
                                cursor: "ew-resize"
                            }
                        }
                    }, {
                        "user-override": !0
                    }, this.props);
                return n.jsxs("div", {
                    style: t.wrap,
                    children: [n.jsx("input", {
                        id: this.inputId,
                        style: t.input,
                        ref: function(t) {
                            return e.input = t
                        },
                        value: this.state.value,
                        onKeyDown: this.handleKeyDown,
                        onChange: this.handleChange,
                        onBlur: this.handleBlur,
                        placeholder: this.props.placeholder,
                        spellCheck: "false"
                    }), this.props.label && !this.props.hideLabel ? n.jsx("label", {
                        htmlFor: this.inputId,
                        style: t.label,
                        onMouseDown: this.handleMouseDown,
                        children: this.props.label
                    }) : null]
                })
            }
        }]), r
    }(),
    tt = function(e, t, r, n) {
        var o = n.clientWidth,
            a = n.clientHeight,
            i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            s = i - (n.getBoundingClientRect().left + window.pageXOffset),
            c = l - (n.getBoundingClientRect().top + window.pageYOffset);
        if ("vertical" === t) {
            var u = void 0;
            if (c < 0) u = 359;
            else if (c > a) u = 0;
            else {
                u = 360 * (-100 * c / a + 100) / 100
            }
            if (r.h !== u) return {
                h: u,
                s: r.s,
                l: r.l,
                a: r.a,
                source: "hsl"
            }
        } else {
            var p = void 0;
            if (s < 0) p = 0;
            else if (s > o) p = 359;
            else {
                p = 360 * (100 * s / o) / 100
            }
            if (r.h !== p) return {
                h: p,
                s: r.s,
                l: r.l,
                a: r.a,
                source: "hsl"
            }
        }
        return null
    },
    rt = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }();

function nt(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function ot(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}
var at = function(e) {
    function o() {
        var e, t, r;
        nt(this, o);
        for (var n = arguments.length, a = Array(n), i = 0; i < n; i++) a[i] = arguments[i];
        return t = r = ot(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [this].concat(a))), r.handleChange = function(e) {
            var t = tt(e, r.props.direction, r.props.hsl, r.container);
            t && "function" == typeof r.props.onChange && r.props.onChange(t, e)
        }, r.handleMouseDown = function(e) {
            r.handleChange(e), window.addEventListener("mousemove", r.handleChange), window.addEventListener("mouseup", r.handleMouseUp)
        }, r.handleMouseUp = function() {
            r.unbindEventListeners()
        }, ot(r, t)
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
    }(o, t.PureComponent || t.Component), rt(o, [{
        key: "componentWillUnmount",
        value: function() {
            this.unbindEventListeners()
        }
    }, {
        key: "unbindEventListeners",
        value: function() {
            window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp)
        }
    }, {
        key: "render",
        value: function() {
            var e = this,
                t = this.props.direction,
                o = void 0 === t ? "horizontal" : t,
                a = Ne({
                    default: {
                        hue: {
                            absolute: "0px 0px 0px 0px",
                            borderRadius: this.props.radius,
                            boxShadow: this.props.shadow
                        },
                        container: {
                            padding: "0 2px",
                            position: "relative",
                            height: "100%",
                            borderRadius: this.props.radius
                        },
                        pointer: {
                            position: "absolute",
                            left: 100 * this.props.hsl.h / 360 + "%"
                        },
                        slider: {
                            marginTop: "1px",
                            width: "4px",
                            borderRadius: "1px",
                            height: "8px",
                            boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                            background: "#fff",
                            transform: "translateX(-2px)"
                        }
                    },
                    vertical: {
                        pointer: {
                            left: "0px",
                            top: -100 * this.props.hsl.h / 360 + 100 + "%"
                        }
                    }
                }, {
                    vertical: "vertical" === o
                });
            return n.jsx("div", {
                style: a.hue,
                children: n.jsxs("div", {
                    className: "hue-" + o,
                    style: a.container,
                    ref: function(t) {
                        return e.container = t
                    },
                    onMouseDown: this.handleMouseDown,
                    onTouchMove: this.handleChange,
                    onTouchStart: this.handleChange,
                    children: [n.jsx("style", {
                        children: ".hue-horizontal { background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); background: -webkit-linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); } .hue-vertical { background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); }"
                    }), n.jsx("div", {
                        style: a.pointer,
                        children: this.props.pointer ? r.createElement(this.props.pointer, this.props) : n.jsx("div", {
                            style: a.slider
                        })
                    })]
                })
            })
        }
    }]), o
}();

function it(e, t) {
    return e === t || e != e && t != t
}

function lt(e, t) {
    for (var r = e.length; r--;)
        if (it(e[r][0], t)) return r;
    return -1
}
var st = Array.prototype.splice;

function ct(e) {
    var t = -1,
        r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
    }
}
ct.prototype.clear = function() {
    this.__data__ = [], this.size = 0
}, ct.prototype.delete = function(e) {
    var t = this.__data__,
        r = lt(t, e);
    return !(r < 0) && (r == t.length - 1 ? t.pop() : st.call(t, r, 1), --this.size, !0)
}, ct.prototype.get = function(e) {
    var t = this.__data__,
        r = lt(t, e);
    return r < 0 ? void 0 : t[r][1]
}, ct.prototype.has = function(e) {
    return lt(this.__data__, e) > -1
}, ct.prototype.set = function(e, t) {
    var r = this.__data__,
        n = lt(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
};
const ut = "object" == typeof global && global && global.Object === Object && global;
var pt = "object" == typeof self && self && self.Object === Object && self;
const ht = ut || pt || Function("return this")();
const ft = ht.Symbol;
var dt = Object.prototype,
    bt = dt.hasOwnProperty,
    gt = dt.toString,
    vt = ft ? ft.toStringTag : void 0;
var xt = Object.prototype.toString;
var yt = ft ? ft.toStringTag : void 0;

function mt(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : yt && yt in Object(e) ? function(e) {
        var t = bt.call(e, vt),
            r = e[vt];
        try {
            e[vt] = void 0;
            var n = !0
        } catch (a) {}
        var o = gt.call(e);
        return n && (t ? e[vt] = r : delete e[vt]), o
    }(e) : function(e) {
        return xt.call(e)
    }(e)
}

function wt(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t)
}

function Et(e) {
    if (!wt(e)) return !1;
    var t = mt(e);
    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
}
const _t = ht["__core-js_shared__"];
var Ct, jt = (Ct = /[^.]+$/.exec(_t && _t.keys && _t.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Ct : "";
var kt = Function.prototype.toString;

function St(e) {
    if (null != e) {
        try {
            return kt.call(e)
        } catch (t) {}
        try {
            return e + ""
        } catch (t) {}
    }
    return ""
}
var Ot = /^\[object .+?Constructor\]$/,
    Ft = Function.prototype,
    Rt = Object.prototype,
    At = Ft.toString,
    Bt = Rt.hasOwnProperty,
    Mt = RegExp("^" + At.call(Bt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Tt(e) {
    return !(!wt(e) || (t = e, jt && jt in t)) && (Et(e) ? Mt : Ot).test(St(e));
    var t
}

function Pt(e, t) {
    var r = function(e, t) {
        return null == e ? void 0 : e[t]
    }(e, t);
    return Tt(r) ? r : void 0
}
const Ht = Pt(ht, "Map");
const zt = Pt(Object, "create");
var Dt = Object.prototype.hasOwnProperty;
var Lt = Object.prototype.hasOwnProperty;

function Nt(e) {
    var t = -1,
        r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
    }
}

function Gt(e, t) {
    var r, n, o = e.__data__;
    return ("string" == (n = typeof(r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? o["string" == typeof t ? "string" : "hash"] : o.map
}

function Ut(e) {
    var t = -1,
        r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
    }
}
Nt.prototype.clear = function() {
    this.__data__ = zt ? zt(null) : {}, this.size = 0
}, Nt.prototype.delete = function(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t
}, Nt.prototype.get = function(e) {
    var t = this.__data__;
    if (zt) {
        var r = t[e];
        return "__lodash_hash_undefined__" === r ? void 0 : r
    }
    return Dt.call(t, e) ? t[e] : void 0
}, Nt.prototype.has = function(e) {
    var t = this.__data__;
    return zt ? void 0 !== t[e] : Lt.call(t, e)
}, Nt.prototype.set = function(e, t) {
    var r = this.__data__;
    return this.size += this.has(e) ? 0 : 1, r[e] = zt && void 0 === t ? "__lodash_hash_undefined__" : t, this
}, Ut.prototype.clear = function() {
    this.size = 0, this.__data__ = {
        hash: new Nt,
        map: new(Ht || ct),
        string: new Nt
    }
}, Ut.prototype.delete = function(e) {
    var t = Gt(this, e).delete(e);
    return this.size -= t ? 1 : 0, t
}, Ut.prototype.get = function(e) {
    return Gt(this, e).get(e)
}, Ut.prototype.has = function(e) {
    return Gt(this, e).has(e)
}, Ut.prototype.set = function(e, t) {
    var r = Gt(this, e),
        n = r.size;
    return r.set(e, t), this.size += r.size == n ? 0 : 1, this
};

function Wt(e) {
    var t = this.__data__ = new ct(e);
    this.size = t.size
}
Wt.prototype.clear = function() {
    this.__data__ = new ct, this.size = 0
}, Wt.prototype.delete = function(e) {
    var t = this.__data__,
        r = t.delete(e);
    return this.size = t.size, r
}, Wt.prototype.get = function(e) {
    return this.__data__.get(e)
}, Wt.prototype.has = function(e) {
    return this.__data__.has(e)
}, Wt.prototype.set = function(e, t) {
    var r = this.__data__;
    if (r instanceof ct) {
        var n = r.__data__;
        if (!Ht || n.length < 199) return n.push([e, t]), this.size = ++r.size, this;
        r = this.__data__ = new Ut(n)
    }
    return r.set(e, t), this.size = r.size, this
};
var It = function() {
    try {
        var e = Pt(Object, "defineProperty");
        return e({}, "", {}), e
    } catch (t) {}
}();
const Xt = It;

function Vt(e, t, r) {
    "__proto__" == t && Xt ? Xt(e, t, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
    }) : e[t] = r
}

function $t(e, t, r) {
    (void 0 !== r && !it(e[t], r) || void 0 === r && !(t in e)) && Vt(e, t, r)
}
var qt;
const Yt = function(e, t, r) {
    for (var n = -1, o = Object(e), a = r(e), i = a.length; i--;) {
        var l = a[qt ? i : ++n];
        if (!1 === t(o[l], l, o)) break
    }
    return e
};
var Kt = "object" == typeof exports && exports && !exports.nodeType && exports,
    Zt = Kt && "object" == typeof module && module && !module.nodeType && module,
    Jt = Zt && Zt.exports === Kt ? ht.Buffer : void 0,
    Qt = Jt ? Jt.allocUnsafe : void 0;
const er = ht.Uint8Array;

function tr(e, t) {
    var r, n, o = t ? (r = e.buffer, n = new r.constructor(r.byteLength), new er(n).set(new er(r)), n) : e.buffer;
    return new e.constructor(o, e.byteOffset, e.length)
}
var rr = Object.create;
const nr = function() {
    function e() {}
    return function(t) {
        if (!wt(t)) return {};
        if (rr) return rr(t);
        e.prototype = t;
        var r = new e;
        return e.prototype = void 0, r
    }
}();

function or(e, t) {
    return function(r) {
        return e(t(r))
    }
}
const ar = or(Object.getPrototypeOf, Object);
var ir = Object.prototype;

function lr(e) {
    var t = e && e.constructor;
    return e === ("function" == typeof t && t.prototype || ir)
}

function sr(e) {
    return null != e && "object" == typeof e
}

function cr(e) {
    return sr(e) && "[object Arguments]" == mt(e)
}
var ur = Object.prototype,
    pr = ur.hasOwnProperty,
    hr = ur.propertyIsEnumerable;
const fr = cr(function() {
    return arguments
}()) ? cr : function(e) {
    return sr(e) && pr.call(e, "callee") && !hr.call(e, "callee")
};
const dr = Array.isArray;

function br(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
}

function gr(e) {
    return null != e && br(e.length) && !Et(e)
}
var vr = "object" == typeof exports && exports && !exports.nodeType && exports,
    xr = vr && "object" == typeof module && module && !module.nodeType && module,
    yr = xr && xr.exports === vr ? ht.Buffer : void 0;
const mr = (yr ? yr.isBuffer : void 0) || function() {
    return !1
};
var wr = Function.prototype,
    Er = Object.prototype,
    _r = wr.toString,
    Cr = Er.hasOwnProperty,
    jr = _r.call(Object);
var kr = {};
kr["[object Float32Array]"] = kr["[object Float64Array]"] = kr["[object Int8Array]"] = kr["[object Int16Array]"] = kr["[object Int32Array]"] = kr["[object Uint8Array]"] = kr["[object Uint8ClampedArray]"] = kr["[object Uint16Array]"] = kr["[object Uint32Array]"] = !0, kr["[object Arguments]"] = kr["[object Array]"] = kr["[object ArrayBuffer]"] = kr["[object Boolean]"] = kr["[object DataView]"] = kr["[object Date]"] = kr["[object Error]"] = kr["[object Function]"] = kr["[object Map]"] = kr["[object Number]"] = kr["[object Object]"] = kr["[object RegExp]"] = kr["[object Set]"] = kr["[object String]"] = kr["[object WeakMap]"] = !1;
var Sr = "object" == typeof exports && exports && !exports.nodeType && exports,
    Or = Sr && "object" == typeof module && module && !module.nodeType && module,
    Fr = Or && Or.exports === Sr && ut.process,
    Rr = function() {
        try {
            var e = Or && Or.require && Or.require("util").types;
            return e || Fr && Fr.binding && Fr.binding("util")
        } catch (t) {}
    }();
var Ar, Br = Rr && Rr.isTypedArray;
const Mr = Br ? (Ar = Br, function(e) {
    return Ar(e)
}) : function(e) {
    return sr(e) && br(e.length) && !!kr[mt(e)]
};

function Tr(e, t) {
    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
}
var Pr = Object.prototype.hasOwnProperty;

function Hr(e, t, r) {
    var n = e[t];
    Pr.call(e, t) && it(n, r) && (void 0 !== r || t in e) || Vt(e, t, r)
}
var zr = /^(?:0|[1-9]\d*)$/;

function Dr(e, t) {
    var r = typeof e;
    return !!(t = null == t ? 9007199254740991 : t) && ("number" == r || "symbol" != r && zr.test(e)) && e > -1 && e % 1 == 0 && e < t
}
var Lr = Object.prototype.hasOwnProperty;

function Nr(e, t) {
    var r = dr(e),
        n = !r && fr(e),
        o = !r && !n && mr(e),
        a = !r && !n && !o && Mr(e),
        i = r || n || o || a,
        l = i ? function(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }(e.length, String) : [],
        s = l.length;
    for (var c in e) !t && !Lr.call(e, c) || i && ("length" == c || o && ("offset" == c || "parent" == c) || a && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Dr(c, s)) || l.push(c);
    return l
}
var Gr = Object.prototype.hasOwnProperty;

function Ur(e) {
    if (!wt(e)) return function(e) {
        var t = [];
        if (null != e)
            for (var r in Object(e)) t.push(r);
        return t
    }(e);
    var t = lr(e),
        r = [];
    for (var n in e)("constructor" != n || !t && Gr.call(e, n)) && r.push(n);
    return r
}

function Wr(e) {
    return gr(e) ? Nr(e, !0) : Ur(e)
}

function Ir(e) {
    return function(e, t, r, n) {
        var o = !r;
        r || (r = {});
        for (var a = -1, i = t.length; ++a < i;) {
            var l = t[a],
                s = n ? n(r[l], e[l], l, r, e) : void 0;
            void 0 === s && (s = e[l]), o ? Vt(r, l, s) : Hr(r, l, s)
        }
        return r
    }(e, Wr(e))
}

function Xr(e, t, r, n, o, a, i) {
    var l = Tr(e, r),
        s = Tr(t, r),
        c = i.get(s);
    if (c) $t(e, r, c);
    else {
        var u, p = a ? a(l, s, r + "", e, t, i) : void 0,
            h = void 0 === p;
        if (h) {
            var f = dr(s),
                d = !f && mr(s),
                b = !f && !d && Mr(s);
            p = s, f || d || b ? dr(l) ? p = l : sr(u = l) && gr(u) ? p = function(e, t) {
                var r = -1,
                    n = e.length;
                for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
                return t
            }(l) : d ? (h = !1, p = function(e, t) {
                if (t) return e.slice();
                var r = e.length,
                    n = Qt ? Qt(r) : new e.constructor(r);
                return e.copy(n), n
            }(s, !0)) : b ? (h = !1, p = tr(s, !0)) : p = [] : function(e) {
                if (!sr(e) || "[object Object]" != mt(e)) return !1;
                var t = ar(e);
                if (null === t) return !0;
                var r = Cr.call(t, "constructor") && t.constructor;
                return "function" == typeof r && r instanceof r && _r.call(r) == jr
            }(s) || fr(s) ? (p = l, fr(l) ? p = Ir(l) : wt(l) && !Et(l) || (p = function(e) {
                return "function" != typeof e.constructor || lr(e) ? {} : nr(ar(e))
            }(s))) : h = !1
        }
        h && (i.set(s, p), o(p, s, n, a, i), i.delete(s)), $t(e, r, p)
    }
}

function Vr(e, t, r, n, o) {
    e !== t && Yt(t, (function(a, i) {
        if (o || (o = new Wt), wt(a)) Xr(e, t, i, r, Vr, n, o);
        else {
            var l = n ? n(Tr(e, i), a, i + "", e, t, o) : void 0;
            void 0 === l && (l = a), $t(e, i, l)
        }
    }), Wr)
}

function $r(e) {
    return e
}

function qr(e, t, r) {
    switch (r.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, r[0]);
        case 2:
            return e.call(t, r[0], r[1]);
        case 3:
            return e.call(t, r[0], r[1], r[2])
    }
    return e.apply(t, r)
}
var Yr = Math.max;
var Kr = Xt ? function(e, t) {
    return Xt(e, "toString", {
        configurable: !0,
        enumerable: !1,
        value: (r = t, function() {
            return r
        }),
        writable: !0
    });
    var r
} : $r;
const Zr = Kr;
var Jr = Date.now;
var Qr = function(e) {
    var t = 0,
        r = 0;
    return function() {
        var n = Jr(),
            o = 16 - (n - r);
        if (r = n, o > 0) {
            if (++t >= 800) return arguments[0]
        } else t = 0;
        return e.apply(void 0, arguments)
    }
}(Zr);
const en = Qr;

function tn(e, t) {
    return en(function(e, t, r) {
        return t = Yr(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, o = -1, a = Yr(n.length - t, 0), i = Array(a); ++o < a;) i[o] = n[t + o];
                o = -1;
                for (var l = Array(t + 1); ++o < t;) l[o] = n[o];
                return l[t] = r(i), qr(e, this, l)
            }
    }(e, t, $r), e + "")
}
var rn;
const nn = (rn = function(e, t, r) {
    Vr(e, t, r)
}, tn((function(e, t) {
    var r = -1,
        n = t.length,
        o = n > 1 ? t[n - 1] : void 0,
        a = n > 2 ? t[2] : void 0;
    for (o = rn.length > 3 && "function" == typeof o ? (n--, o) : void 0, a && function(e, t, r) {
            if (!wt(r)) return !1;
            var n = typeof t;
            return !!("number" == n ? gr(r) && Dr(t, r.length) : "string" == n && t in r) && it(r[t], e)
        }(t[0], t[1], a) && (o = n < 3 ? void 0 : o, n = 1), e = Object(e); ++r < n;) {
        var i = t[r];
        i && rn(e, i, r, o)
    }
    return e
})));
var on = function(e) {
    var t = e.zDepth,
        n = e.radius,
        o = e.background,
        a = e.children,
        i = e.styles,
        l = Ne(nn({
            default: {
                wrap: {
                    position: "relative",
                    display: "inline-block"
                },
                content: {
                    position: "relative"
                },
                bg: {
                    absolute: "0px 0px 0px 0px",
                    boxShadow: "0 " + t + "px " + 4 * t + "px rgba(0,0,0,.24)",
                    borderRadius: n,
                    background: o
                }
            },
            "zDepth-0": {
                bg: {
                    boxShadow: "none"
                }
            },
            "zDepth-1": {
                bg: {
                    boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
                }
            },
            "zDepth-2": {
                bg: {
                    boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
                }
            },
            "zDepth-3": {
                bg: {
                    boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
                }
            },
            "zDepth-4": {
                bg: {
                    boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
                }
            },
            "zDepth-5": {
                bg: {
                    boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
                }
            },
            square: {
                bg: {
                    borderRadius: "0"
                }
            },
            circle: {
                bg: {
                    borderRadius: "50%"
                }
            }
        }, void 0 === i ? {} : i), {
            "zDepth-1": 1 === t
        });
    return r.createElement("div", {
        style: l.wrap
    }, r.createElement("div", {
        style: l.bg
    }), r.createElement("div", {
        style: l.content
    }, a))
};
on.propTypes = {
    background: o.string,
    zDepth: o.oneOf([0, 1, 2, 3, 4, 5]),
    radius: o.number,
    styles: o.object
}, on.defaultProps = {
    background: "#fff",
    zDepth: 1,
    radius: 2,
    styles: {}
};
const an = function() {
    return ht.Date.now()
};
var ln = /\s/;
var sn = /^\s+/;

function cn(e) {
    return e ? e.slice(0, function(e) {
        for (var t = e.length; t-- && ln.test(e.charAt(t)););
        return t
    }(e) + 1).replace(sn, "") : e
}

function un(e) {
    return "symbol" == typeof e || sr(e) && "[object Symbol]" == mt(e)
}
var pn = /^[-+]0x[0-9a-f]+$/i,
    hn = /^0b[01]+$/i,
    fn = /^0o[0-7]+$/i,
    dn = parseInt;

function bn(e) {
    if ("number" == typeof e) return e;
    if (un(e)) return NaN;
    if (wt(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = wt(t) ? t + "" : t
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = cn(e);
    var r = hn.test(e);
    return r || fn.test(e) ? dn(e.slice(2), r ? 2 : 8) : pn.test(e) ? NaN : +e
}
var gn = Math.max,
    vn = Math.min;

function xn(e, t, r) {
    var n, o, a, i, l, s, c = 0,
        u = !1,
        p = !1,
        h = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");

    function f(t) {
        var r = n,
            a = o;
        return n = o = void 0, c = t, i = e.apply(a, r)
    }

    function d(e) {
        return c = e, l = setTimeout(g, t), u ? f(e) : i
    }

    function b(e) {
        var r = e - s;
        return void 0 === s || r >= t || r < 0 || p && e - c >= a
    }

    function g() {
        var e = an();
        if (b(e)) return v(e);
        l = setTimeout(g, function(e) {
            var r = t - (e - s);
            return p ? vn(r, a - (e - c)) : r
        }(e))
    }

    function v(e) {
        return l = void 0, h && n ? f(e) : (n = o = void 0, i)
    }

    function x() {
        var e = an(),
            r = b(e);
        if (n = arguments, o = this, s = e, r) {
            if (void 0 === l) return d(s);
            if (p) return clearTimeout(l), l = setTimeout(g, t), f(s)
        }
        return void 0 === l && (l = setTimeout(g, t)), i
    }
    return t = bn(t) || 0, wt(r) && (u = !!r.leading, a = (p = "maxWait" in r) ? gn(bn(r.maxWait) || 0, t) : a, h = "trailing" in r ? !!r.trailing : h), x.cancel = function() {
        void 0 !== l && clearTimeout(l), c = 0, n = s = o = l = void 0
    }, x.flush = function() {
        return void 0 === l ? i : v(an())
    }, x
}
var yn = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
    }
}();
var mn = function(e) {
    function o(e) {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, o);
        var t = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e));
        return t.handleChange = function(e) {
            "function" == typeof t.props.onChange && t.throttle(t.props.onChange, function(e, t, r) {
                var n = r.getBoundingClientRect(),
                    o = n.width,
                    a = n.height,
                    i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
                    l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
                    s = i - (r.getBoundingClientRect().left + window.pageXOffset),
                    c = l - (r.getBoundingClientRect().top + window.pageYOffset);
                s < 0 ? s = 0 : s > o && (s = o), c < 0 ? c = 0 : c > a && (c = a);
                var u = s / o,
                    p = 1 - c / a;
                return {
                    h: t.h,
                    s: u,
                    v: p,
                    a: t.a,
                    source: "hsv"
                }
            }(e, t.props.hsl, t.container), e)
        }, t.handleMouseDown = function(e) {
            t.handleChange(e);
            var r = t.getContainerRenderWindow();
            r.addEventListener("mousemove", t.handleChange), r.addEventListener("mouseup", t.handleMouseUp)
        }, t.handleMouseUp = function() {
            t.unbindEventListeners()
        }, t.throttle = function(e, t, r) {
            var n = !0,
                o = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");
            return wt(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), xn(e, t, {
                leading: n,
                maxWait: t,
                trailing: o
            })
        }((function(e, t, r) {
            e(t, r)
        }), 50), t
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
    }(o, t.PureComponent || t.Component), yn(o, [{
        key: "componentWillUnmount",
        value: function() {
            this.throttle.cancel(), this.unbindEventListeners()
        }
    }, {
        key: "getContainerRenderWindow",
        value: function() {
            for (var e = this.container, t = window; !t.document.contains(e) && t.parent !== t;) t = t.parent;
            return t
        }
    }, {
        key: "unbindEventListeners",
        value: function() {
            var e = this.getContainerRenderWindow();
            e.removeEventListener("mousemove", this.handleChange), e.removeEventListener("mouseup", this.handleMouseUp)
        }
    }, {
        key: "render",
        value: function() {
            var e = this,
                t = this.props.style || {},
                o = t.color,
                a = t.white,
                i = t.black,
                l = t.pointer,
                s = t.circle,
                c = Ne({
                    default: {
                        color: {
                            absolute: "0px 0px 0px 0px",
                            background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
                            borderRadius: this.props.radius
                        },
                        white: {
                            absolute: "0px 0px 0px 0px",
                            borderRadius: this.props.radius
                        },
                        black: {
                            absolute: "0px 0px 0px 0px",
                            boxShadow: this.props.shadow,
                            borderRadius: this.props.radius
                        },
                        pointer: {
                            position: "absolute",
                            top: -100 * this.props.hsv.v + 100 + "%",
                            left: 100 * this.props.hsv.s + "%",
                            cursor: "default"
                        },
                        circle: {
                            width: "4px",
                            height: "4px",
                            boxShadow: "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
                            borderRadius: "50%",
                            cursor: "hand",
                            transform: "translate(-2px, -2px)"
                        }
                    },
                    custom: {
                        color: o,
                        white: a,
                        black: i,
                        pointer: l,
                        circle: s
                    }
                }, {
                    custom: !!this.props.style
                });
            return n.jsxs("div", {
                style: c.color,
                ref: function(t) {
                    return e.container = t
                },
                onMouseDown: this.handleMouseDown,
                onTouchMove: this.handleChange,
                onTouchStart: this.handleChange,
                children: [n.jsx("style", {
                    children: ".saturation-white { background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0)); background: linear-gradient(to right, #fff, rgba(255,255,255,0)); } .saturation-black { background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0)); background: linear-gradient(to top, #000, rgba(0,0,0,0)); }"
                }), n.jsxs("div", {
                    style: c.white,
                    className: "saturation-white",
                    children: [n.jsx("div", {
                        style: c.black,
                        className: "saturation-black"
                    }), n.jsx("div", {
                        style: c.pointer,
                        children: this.props.pointer ? r.createElement(this.props.pointer, this.props) : n.jsx("div", {
                            style: c.circle
                        })
                    })]
                })]
            })
        }
    }]), o
}();

function wn(e, t) {
    for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
    return e
}
const En = or(Object.keys, Object);
var _n = Object.prototype.hasOwnProperty;

function Cn(e) {
    return gr(e) ? Nr(e) : function(e) {
        if (!lr(e)) return En(e);
        var t = [];
        for (var r in Object(e)) _n.call(e, r) && "constructor" != r && t.push(r);
        return t
    }(e)
}
var jn = function(e, t) {
    return function(r, n) {
        if (null == r) return r;
        if (!gr(r)) return e(r, n);
        for (var o = r.length, a = t ? o : -1, i = Object(r);
            (t ? a-- : ++a < o) && !1 !== n(i[a], a, i););
        return r
    }
}((function(e, t) {
    return e && Yt(e, t, Cn)
}));
const kn = jn;

function Sn(e, t) {
    var r;
    return (dr(e) ? wn : kn)(e, "function" == typeof(r = t) ? r : $r)
}
var On = {
    exports: {}
};
! function(e) {
    ! function(t) {
        var r = /^\s+/,
            n = /\s+$/,
            o = 0,
            a = t.round,
            i = t.min,
            l = t.max,
            s = t.random;

        function c(e, s) {
            if (s = s || {}, (e = e || "") instanceof c) return e;
            if (!(this instanceof c)) return new c(e, s);
            var u = function(e) {
                var o = {
                        r: 0,
                        g: 0,
                        b: 0
                    },
                    a = 1,
                    s = null,
                    c = null,
                    u = null,
                    p = !1,
                    h = !1;
                "string" == typeof e && (e = function(e) {
                    e = e.replace(r, "").replace(n, "").toLowerCase();
                    var t, o = !1;
                    if (S[e]) e = S[e], o = !0;
                    else if ("transparent" == e) return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        format: "name"
                    };
                    if (t = N.rgb.exec(e)) return {
                        r: t[1],
                        g: t[2],
                        b: t[3]
                    };
                    if (t = N.rgba.exec(e)) return {
                        r: t[1],
                        g: t[2],
                        b: t[3],
                        a: t[4]
                    };
                    if (t = N.hsl.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        l: t[3]
                    };
                    if (t = N.hsla.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        l: t[3],
                        a: t[4]
                    };
                    if (t = N.hsv.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        v: t[3]
                    };
                    if (t = N.hsva.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        v: t[3],
                        a: t[4]
                    };
                    if (t = N.hex8.exec(e)) return {
                        r: B(t[1]),
                        g: B(t[2]),
                        b: B(t[3]),
                        a: H(t[4]),
                        format: o ? "name" : "hex8"
                    };
                    if (t = N.hex6.exec(e)) return {
                        r: B(t[1]),
                        g: B(t[2]),
                        b: B(t[3]),
                        format: o ? "name" : "hex"
                    };
                    if (t = N.hex4.exec(e)) return {
                        r: B(t[1] + "" + t[1]),
                        g: B(t[2] + "" + t[2]),
                        b: B(t[3] + "" + t[3]),
                        a: H(t[4] + "" + t[4]),
                        format: o ? "name" : "hex8"
                    };
                    if (t = N.hex3.exec(e)) return {
                        r: B(t[1] + "" + t[1]),
                        g: B(t[2] + "" + t[2]),
                        b: B(t[3] + "" + t[3]),
                        format: o ? "name" : "hex"
                    };
                    return !1
                }(e));
                "object" == typeof e && (G(e.r) && G(e.g) && G(e.b) ? (f = e.r, d = e.g, b = e.b, o = {
                    r: 255 * R(f, 255),
                    g: 255 * R(d, 255),
                    b: 255 * R(b, 255)
                }, p = !0, h = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : G(e.h) && G(e.s) && G(e.v) ? (s = T(e.s), c = T(e.v), o = function(e, r, n) {
                    e = 6 * R(e, 360), r = R(r, 100), n = R(n, 100);
                    var o = t.floor(e),
                        a = e - o,
                        i = n * (1 - r),
                        l = n * (1 - a * r),
                        s = n * (1 - (1 - a) * r),
                        c = o % 6;
                    return {
                        r: 255 * [n, l, i, i, s, n][c],
                        g: 255 * [s, n, n, l, i, i][c],
                        b: 255 * [i, i, s, n, n, l][c]
                    }
                }(e.h, s, c), p = !0, h = "hsv") : G(e.h) && G(e.s) && G(e.l) && (s = T(e.s), u = T(e.l), o = function(e, t, r) {
                    var n, o, a;

                    function i(e, t, r) {
                        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
                    }
                    if (e = R(e, 360), t = R(t, 100), r = R(r, 100), 0 === t) n = o = a = r;
                    else {
                        var l = r < .5 ? r * (1 + t) : r + t - r * t,
                            s = 2 * r - l;
                        n = i(s, l, e + 1 / 3), o = i(s, l, e), a = i(s, l, e - 1 / 3)
                    }
                    return {
                        r: 255 * n,
                        g: 255 * o,
                        b: 255 * a
                    }
                }(e.h, s, u), p = !0, h = "hsl"), e.hasOwnProperty("a") && (a = e.a));
                var f, d, b;
                return a = F(a), {
                    ok: p,
                    format: e.format || h,
                    r: i(255, l(o.r, 0)),
                    g: i(255, l(o.g, 0)),
                    b: i(255, l(o.b, 0)),
                    a: a
                }
            }(e);
            this._originalInput = e, this._r = u.r, this._g = u.g, this._b = u.b, this._a = u.a, this._roundA = a(100 * this._a) / 100, this._format = s.format || u.format, this._gradientType = s.gradientType, this._r < 1 && (this._r = a(this._r)), this._g < 1 && (this._g = a(this._g)), this._b < 1 && (this._b = a(this._b)), this._ok = u.ok, this._tc_id = o++
        }

        function u(e, t, r) {
            e = R(e, 255), t = R(t, 255), r = R(r, 255);
            var n, o, a = l(e, t, r),
                s = i(e, t, r),
                c = (a + s) / 2;
            if (a == s) n = o = 0;
            else {
                var u = a - s;
                switch (o = c > .5 ? u / (2 - a - s) : u / (a + s), a) {
                    case e:
                        n = (t - r) / u + (t < r ? 6 : 0);
                        break;
                    case t:
                        n = (r - e) / u + 2;
                        break;
                    case r:
                        n = (e - t) / u + 4
                }
                n /= 6
            }
            return {
                h: n,
                s: o,
                l: c
            }
        }

        function p(e, t, r) {
            e = R(e, 255), t = R(t, 255), r = R(r, 255);
            var n, o, a = l(e, t, r),
                s = i(e, t, r),
                c = a,
                u = a - s;
            if (o = 0 === a ? 0 : u / a, a == s) n = 0;
            else {
                switch (a) {
                    case e:
                        n = (t - r) / u + (t < r ? 6 : 0);
                        break;
                    case t:
                        n = (r - e) / u + 2;
                        break;
                    case r:
                        n = (e - t) / u + 4
                }
                n /= 6
            }
            return {
                h: n,
                s: o,
                v: c
            }
        }

        function h(e, t, r, n) {
            var o = [M(a(e).toString(16)), M(a(t).toString(16)), M(a(r).toString(16))];
            return n && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
        }

        function f(e, t, r, n) {
            return [M(P(n)), M(a(e).toString(16)), M(a(t).toString(16)), M(a(r).toString(16))].join("")
        }

        function d(e, t) {
            t = 0 === t ? 0 : t || 10;
            var r = c(e).toHsl();
            return r.s -= t / 100, r.s = A(r.s), c(r)
        }

        function b(e, t) {
            t = 0 === t ? 0 : t || 10;
            var r = c(e).toHsl();
            return r.s += t / 100, r.s = A(r.s), c(r)
        }

        function g(e) {
            return c(e).desaturate(100)
        }

        function v(e, t) {
            t = 0 === t ? 0 : t || 10;
            var r = c(e).toHsl();
            return r.l += t / 100, r.l = A(r.l), c(r)
        }

        function x(e, t) {
            t = 0 === t ? 0 : t || 10;
            var r = c(e).toRgb();
            return r.r = l(0, i(255, r.r - a(-t / 100 * 255))), r.g = l(0, i(255, r.g - a(-t / 100 * 255))), r.b = l(0, i(255, r.b - a(-t / 100 * 255))), c(r)
        }

        function y(e, t) {
            t = 0 === t ? 0 : t || 10;
            var r = c(e).toHsl();
            return r.l -= t / 100, r.l = A(r.l), c(r)
        }

        function m(e, t) {
            var r = c(e).toHsl(),
                n = (r.h + t) % 360;
            return r.h = n < 0 ? 360 + n : n, c(r)
        }

        function w(e) {
            var t = c(e).toHsl();
            return t.h = (t.h + 180) % 360, c(t)
        }

        function E(e) {
            var t = c(e).toHsl(),
                r = t.h;
            return [c(e), c({
                h: (r + 120) % 360,
                s: t.s,
                l: t.l
            }), c({
                h: (r + 240) % 360,
                s: t.s,
                l: t.l
            })]
        }

        function _(e) {
            var t = c(e).toHsl(),
                r = t.h;
            return [c(e), c({
                h: (r + 90) % 360,
                s: t.s,
                l: t.l
            }), c({
                h: (r + 180) % 360,
                s: t.s,
                l: t.l
            }), c({
                h: (r + 270) % 360,
                s: t.s,
                l: t.l
            })]
        }

        function C(e) {
            var t = c(e).toHsl(),
                r = t.h;
            return [c(e), c({
                h: (r + 72) % 360,
                s: t.s,
                l: t.l
            }), c({
                h: (r + 216) % 360,
                s: t.s,
                l: t.l
            })]
        }

        function j(e, t, r) {
            t = t || 6, r = r || 30;
            var n = c(e).toHsl(),
                o = 360 / r,
                a = [c(e)];
            for (n.h = (n.h - (o * t >> 1) + 720) % 360; --t;) n.h = (n.h + o) % 360, a.push(c(n));
            return a
        }

        function k(e, t) {
            t = t || 6;
            for (var r = c(e).toHsv(), n = r.h, o = r.s, a = r.v, i = [], l = 1 / t; t--;) i.push(c({
                h: n,
                s: o,
                v: a
            })), a = (a + l) % 1;
            return i
        }
        c.prototype = {
            isDark: function() {
                return this.getBrightness() < 128
            },
            isLight: function() {
                return !this.isDark()
            },
            isValid: function() {
                return this._ok
            },
            getOriginalInput: function() {
                return this._originalInput
            },
            getFormat: function() {
                return this._format
            },
            getAlpha: function() {
                return this._a
            },
            getBrightness: function() {
                var e = this.toRgb();
                return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
            },
            getLuminance: function() {
                var e, r, n, o = this.toRgb();
                return e = o.r / 255, r = o.g / 255, n = o.b / 255, .2126 * (e <= .03928 ? e / 12.92 : t.pow((e + .055) / 1.055, 2.4)) + .7152 * (r <= .03928 ? r / 12.92 : t.pow((r + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : t.pow((n + .055) / 1.055, 2.4))
            },
            setAlpha: function(e) {
                return this._a = F(e), this._roundA = a(100 * this._a) / 100, this
            },
            toHsv: function() {
                var e = p(this._r, this._g, this._b);
                return {
                    h: 360 * e.h,
                    s: e.s,
                    v: e.v,
                    a: this._a
                }
            },
            toHsvString: function() {
                var e = p(this._r, this._g, this._b),
                    t = a(360 * e.h),
                    r = a(100 * e.s),
                    n = a(100 * e.v);
                return 1 == this._a ? "hsv(" + t + ", " + r + "%, " + n + "%)" : "hsva(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")"
            },
            toHsl: function() {
                var e = u(this._r, this._g, this._b);
                return {
                    h: 360 * e.h,
                    s: e.s,
                    l: e.l,
                    a: this._a
                }
            },
            toHslString: function() {
                var e = u(this._r, this._g, this._b),
                    t = a(360 * e.h),
                    r = a(100 * e.s),
                    n = a(100 * e.l);
                return 1 == this._a ? "hsl(" + t + ", " + r + "%, " + n + "%)" : "hsla(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")"
            },
            toHex: function(e) {
                return h(this._r, this._g, this._b, e)
            },
            toHexString: function(e) {
                return "#" + this.toHex(e)
            },
            toHex8: function(e) {
                return function(e, t, r, n, o) {
                    var i = [M(a(e).toString(16)), M(a(t).toString(16)), M(a(r).toString(16)), M(P(n))];
                    if (o && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) && i[3].charAt(0) == i[3].charAt(1)) return i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0);
                    return i.join("")
                }(this._r, this._g, this._b, this._a, e)
            },
            toHex8String: function(e) {
                return "#" + this.toHex8(e)
            },
            toRgb: function() {
                return {
                    r: a(this._r),
                    g: a(this._g),
                    b: a(this._b),
                    a: this._a
                }
            },
            toRgbString: function() {
                return 1 == this._a ? "rgb(" + a(this._r) + ", " + a(this._g) + ", " + a(this._b) + ")" : "rgba(" + a(this._r) + ", " + a(this._g) + ", " + a(this._b) + ", " + this._roundA + ")"
            },
            toPercentageRgb: function() {
                return {
                    r: a(100 * R(this._r, 255)) + "%",
                    g: a(100 * R(this._g, 255)) + "%",
                    b: a(100 * R(this._b, 255)) + "%",
                    a: this._a
                }
            },
            toPercentageRgbString: function() {
                return 1 == this._a ? "rgb(" + a(100 * R(this._r, 255)) + "%, " + a(100 * R(this._g, 255)) + "%, " + a(100 * R(this._b, 255)) + "%)" : "rgba(" + a(100 * R(this._r, 255)) + "%, " + a(100 * R(this._g, 255)) + "%, " + a(100 * R(this._b, 255)) + "%, " + this._roundA + ")"
            },
            toName: function() {
                return 0 === this._a ? "transparent" : !(this._a < 1) && (O[h(this._r, this._g, this._b, !0)] || !1)
            },
            toFilter: function(e) {
                var t = "#" + f(this._r, this._g, this._b, this._a),
                    r = t,
                    n = this._gradientType ? "GradientType = 1, " : "";
                if (e) {
                    var o = c(e);
                    r = "#" + f(o._r, o._g, o._b, o._a)
                }
                return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + t + ",endColorstr=" + r + ")"
            },
            toString: function(e) {
                var t = !!e;
                e = e || this._format;
                var r = !1,
                    n = this._a < 1 && this._a >= 0;
                return t || !n || "hex" !== e && "hex6" !== e && "hex3" !== e && "hex4" !== e && "hex8" !== e && "name" !== e ? ("rgb" === e && (r = this.toRgbString()), "prgb" === e && (r = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (r = this.toHexString()), "hex3" === e && (r = this.toHexString(!0)), "hex4" === e && (r = this.toHex8String(!0)), "hex8" === e && (r = this.toHex8String()), "name" === e && (r = this.toName()), "hsl" === e && (r = this.toHslString()), "hsv" === e && (r = this.toHsvString()), r || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString()
            },
            clone: function() {
                return c(this.toString())
            },
            _applyModification: function(e, t) {
                var r = e.apply(null, [this].concat([].slice.call(t)));
                return this._r = r._r, this._g = r._g, this._b = r._b, this.setAlpha(r._a), this
            },
            lighten: function() {
                return this._applyModification(v, arguments)
            },
            brighten: function() {
                return this._applyModification(x, arguments)
            },
            darken: function() {
                return this._applyModification(y, arguments)
            },
            desaturate: function() {
                return this._applyModification(d, arguments)
            },
            saturate: function() {
                return this._applyModification(b, arguments)
            },
            greyscale: function() {
                return this._applyModification(g, arguments)
            },
            spin: function() {
                return this._applyModification(m, arguments)
            },
            _applyCombination: function(e, t) {
                return e.apply(null, [this].concat([].slice.call(t)))
            },
            analogous: function() {
                return this._applyCombination(j, arguments)
            },
            complement: function() {
                return this._applyCombination(w, arguments)
            },
            monochromatic: function() {
                return this._applyCombination(k, arguments)
            },
            splitcomplement: function() {
                return this._applyCombination(C, arguments)
            },
            triad: function() {
                return this._applyCombination(E, arguments)
            },
            tetrad: function() {
                return this._applyCombination(_, arguments)
            }
        }, c.fromRatio = function(e, t) {
            if ("object" == typeof e) {
                var r = {};
                for (var n in e) e.hasOwnProperty(n) && (r[n] = "a" === n ? e[n] : T(e[n]));
                e = r
            }
            return c(e, t)
        }, c.equals = function(e, t) {
            return !(!e || !t) && c(e).toRgbString() == c(t).toRgbString()
        }, c.random = function() {
            return c.fromRatio({
                r: s(),
                g: s(),
                b: s()
            })
        }, c.mix = function(e, t, r) {
            r = 0 === r ? 0 : r || 50;
            var n = c(e).toRgb(),
                o = c(t).toRgb(),
                a = r / 100;
            return c({
                r: (o.r - n.r) * a + n.r,
                g: (o.g - n.g) * a + n.g,
                b: (o.b - n.b) * a + n.b,
                a: (o.a - n.a) * a + n.a
            })
        }, c.readability = function(e, r) {
            var n = c(e),
                o = c(r);
            return (t.max(n.getLuminance(), o.getLuminance()) + .05) / (t.min(n.getLuminance(), o.getLuminance()) + .05)
        }, c.isReadable = function(e, t, r) {
            var n, o, a = c.readability(e, t);
            switch (o = !1, (n = function(e) {
                    var t, r;
                    t = ((e = e || {
                        level: "AA",
                        size: "small"
                    }).level || "AA").toUpperCase(), r = (e.size || "small").toLowerCase(), "AA" !== t && "AAA" !== t && (t = "AA");
                    "small" !== r && "large" !== r && (r = "small");
                    return {
                        level: t,
                        size: r
                    }
                }(r)).level + n.size) {
                case "AAsmall":
                case "AAAlarge":
                    o = a >= 4.5;
                    break;
                case "AAlarge":
                    o = a >= 3;
                    break;
                case "AAAsmall":
                    o = a >= 7
            }
            return o
        }, c.mostReadable = function(e, t, r) {
            var n, o, a, i, l = null,
                s = 0;
            o = (r = r || {}).includeFallbackColors, a = r.level, i = r.size;
            for (var u = 0; u < t.length; u++)(n = c.readability(e, t[u])) > s && (s = n, l = c(t[u]));
            return c.isReadable(e, l, {
                level: a,
                size: i
            }) || !o ? l : (r.includeFallbackColors = !1, c.mostReadable(e, ["#fff", "#000"], r))
        };
        var S = c.names = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "0ff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000",
                blanchedalmond: "ffebcd",
                blue: "00f",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                burntsienna: "ea7e5d",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "0ff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkgrey: "a9a9a9",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkslategrey: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dimgrey: "696969",
                dodgerblue: "1e90ff",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "f0f",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                grey: "808080",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgray: "d3d3d3",
                lightgreen: "90ee90",
                lightgrey: "d3d3d3",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslategray: "789",
                lightslategrey: "789",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "0f0",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "f0f",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370db",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "db7093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                rebeccapurple: "663399",
                red: "f00",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                slategrey: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                wheat: "f5deb3",
                white: "fff",
                whitesmoke: "f5f5f5",
                yellow: "ff0",
                yellowgreen: "9acd32"
            },
            O = c.hexNames = function(e) {
                var t = {};
                for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
                return t
            }(S);

        function F(e) {
            return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
        }

        function R(e, r) {
            (function(e) {
                return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
            })(e) && (e = "100%");
            var n = function(e) {
                return "string" == typeof e && -1 != e.indexOf("%")
            }(e);
            return e = i(r, l(0, parseFloat(e))), n && (e = parseInt(e * r, 10) / 100), t.abs(e - r) < 1e-6 ? 1 : e % r / parseFloat(r)
        }

        function A(e) {
            return i(1, l(0, e))
        }

        function B(e) {
            return parseInt(e, 16)
        }

        function M(e) {
            return 1 == e.length ? "0" + e : "" + e
        }

        function T(e) {
            return e <= 1 && (e = 100 * e + "%"), e
        }

        function P(e) {
            return t.round(255 * parseFloat(e)).toString(16)
        }

        function H(e) {
            return B(e) / 255
        }
        var z, D, L, N = (D = "[\\s|\\(]+(" + (z = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + z + ")[,|\\s]+(" + z + ")\\s*\\)?", L = "[\\s|\\(]+(" + z + ")[,|\\s]+(" + z + ")[,|\\s]+(" + z + ")[,|\\s]+(" + z + ")\\s*\\)?", {
            CSS_UNIT: new RegExp(z),
            rgb: new RegExp("rgb" + D),
            rgba: new RegExp("rgba" + L),
            hsl: new RegExp("hsl" + D),
            hsla: new RegExp("hsla" + L),
            hsv: new RegExp("hsv" + D),
            hsva: new RegExp("hsva" + L),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        });

        function G(e) {
            return !!N.CSS_UNIT.exec(e)
        }
        e.exports ? e.exports = c : window.tinycolor = c
    }(Math)
}(On);
const Fn = e(On.exports);
var Rn = function(e) {
        var t = 0,
            r = 0;
        return Sn(["r", "g", "b", "a", "h", "s", "l", "v"], (function(n) {
            if (e[n] && (t += 1, isNaN(e[n]) || (r += 1), "s" === n || "l" === n)) {
                /^\d+%$/.test(e[n]) && (r += 1)
            }
        })), t === r && e
    },
    An = function(e, t) {
        var r = e.hex ? Fn(e.hex) : Fn(e),
            n = r.toHsl(),
            o = r.toHsv(),
            a = r.toRgb(),
            i = r.toHex();
        return 0 === n.s && (n.h = t || 0, o.h = t || 0), {
            hsl: n,
            hex: "000000" === i && 0 === a.a ? "transparent" : "#" + i,
            rgb: a,
            hsv: o,
            oldHue: e.h || t || n.h,
            source: e.source
        }
    },
    Bn = function(e) {
        if ("transparent" === e) return !0;
        var t = "#" === String(e).charAt(0) ? 1 : 0;
        return e.length !== 4 + t && e.length < 7 + t && Fn(e).isValid()
    },
    Mn = function(e) {
        if (!e) return "#fff";
        var t = An(e);
        return "transparent" === t.hex ? "rgba(0,0,0,0.4)" : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1e3 >= 128 ? "#000" : "#fff"
    },
    Tn = function(e, t) {
        var r = e.replace("°", "");
        return Fn(t + " (" + r + ")")._ok
    },
    Pn = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    Hn = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }();
var zn = function(e) {
        var r = function(r) {
            function o(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o);
                var t = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
                return t.handleChange = function(e, r) {
                    if (Rn(e)) {
                        var n = An(e, e.h || t.state.oldHue);
                        t.setState(n), t.props.onChangeComplete && t.debounce(t.props.onChangeComplete, n, r), t.props.onChange && t.props.onChange(n, r)
                    }
                }, t.handleSwatchHover = function(e, r) {
                    if (Rn(e)) {
                        var n = An(e, e.h || t.state.oldHue);
                        t.props.onSwatchHover && t.props.onSwatchHover(n, r)
                    }
                }, t.state = Pn({}, An(e.color, 0)), t.debounce = xn((function(e, t, r) {
                    e(t, r)
                }), 100), t
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
            }(o, t.PureComponent || t.Component), Hn(o, [{
                key: "render",
                value: function() {
                    var t = {};
                    return this.props.onSwatchHover && (t.onSwatchHover = this.handleSwatchHover), n.jsx(e, {
                        ...this.props,
                        ...this.state,
                        onChange: this.handleChange,
                        ...t
                    })
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return Pn({}, An(e.color, t.oldHue))
                }
            }]), o
        }();
        return r.propTypes = Pn({}, e.propTypes), r.defaultProps = Pn({}, e.defaultProps, {
            color: {
                h: 250,
                s: .5,
                l: .2,
                a: 1
            }
        }), r
    },
    Dn = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    Ln = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }();

function Nn(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Gn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}

function Un(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var Wn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
};
const In = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return function(n) {
        function o() {
            var e, t, r;
            Nn(this, o);
            for (var n = arguments.length, a = Array(n), i = 0; i < n; i++) a[i] = arguments[i];
            return t = r = Gn(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [this].concat(a))), r.state = {
                focus: !1
            }, r.handleFocus = function() {
                return r.setState({
                    focus: !0
                })
            }, r.handleBlur = function() {
                return r.setState({
                    focus: !1
                })
            }, Gn(r, t)
        }
        return Un(o, r.Component), Ln(o, [{
            key: "render",
            value: function() {
                return r.createElement(t, {
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur
                }, r.createElement(e, Dn({}, this.props, this.state)))
            }
        }]), o
    }()
}((function(e) {
    var t = e.color,
        n = e.style,
        o = e.onClick,
        a = void 0 === o ? function() {} : o,
        i = e.onHover,
        l = e.title,
        s = void 0 === l ? t : l,
        c = e.children,
        u = e.focus,
        p = e.focusStyle,
        h = "transparent" === t,
        f = Ne({
            default: {
                swatch: Wn({
                    background: t,
                    height: "100%",
                    width: "100%",
                    cursor: "pointer",
                    position: "relative",
                    outline: "none"
                }, n, u ? void 0 === p ? {} : p : {})
            }
        }),
        d = {};
    return i && (d.onMouseOver = function(e) {
        return i(t, e)
    }), r.createElement("div", Wn({
        style: f.swatch,
        onClick: function(e) {
            return a(t, e)
        },
        title: s,
        tabIndex: 0,
        onKeyDown: function(e) {
            return 13 === e.keyCode && a(t, e)
        }
    }, d), c, h && r.createElement(Xe, {
        borderRadius: f.swatch.borderRadius,
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
    }))
}));
var Xn = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    Vn = function(e) {
        var t = e.rgb,
            n = e.hsl,
            o = e.width,
            a = e.height,
            i = e.onChange,
            l = e.direction,
            s = e.style,
            c = e.renderers,
            u = e.pointer,
            p = e.className,
            h = void 0 === p ? "" : p,
            f = Ne({
                default: {
                    picker: {
                        position: "relative",
                        width: o,
                        height: a
                    },
                    alpha: {
                        radius: "2px",
                        style: s
                    }
                }
            });
        return r.createElement("div", {
            style: f.picker,
            className: "alpha-picker " + h
        }, r.createElement(Ke, Xn({}, f.alpha, {
            rgb: t,
            hsl: n,
            pointer: u,
            renderers: c,
            onChange: i,
            direction: l
        })))
    };

function $n(e, t) {
    for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
    return o
}
Vn.defaultProps = {
    width: "316px",
    height: "16px",
    direction: "horizontal",
    pointer: function(e) {
        var t = e.direction,
            n = Ne({
                default: {
                    picker: {
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        transform: "translate(-9px, -1px)",
                        backgroundColor: "rgb(248, 248, 248)",
                        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                    }
                },
                vertical: {
                    picker: {
                        transform: "translate(-3px, -9px)"
                    }
                }
            }, {
                vertical: "vertical" === t
            });
        return r.createElement("div", {
            style: n.picker
        })
    }
}, zn(Vn);

function qn(e) {
    var t = -1,
        r = null == e ? 0 : e.length;
    for (this.__data__ = new Ut; ++t < r;) this.add(e[t])
}

function Yn(e, t) {
    for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
        if (t(e[r], r, e)) return !0;
    return !1
}
qn.prototype.add = qn.prototype.push = function(e) {
    return this.__data__.set(e, "__lodash_hash_undefined__"), this
}, qn.prototype.has = function(e) {
    return this.__data__.has(e)
};

function Kn(e, t, r, n, o, a) {
    var i = 1 & r,
        l = e.length,
        s = t.length;
    if (l != s && !(i && s > l)) return !1;
    var c = a.get(e),
        u = a.get(t);
    if (c && u) return c == t && u == e;
    var p = -1,
        h = !0,
        f = 2 & r ? new qn : void 0;
    for (a.set(e, t), a.set(t, e); ++p < l;) {
        var d = e[p],
            b = t[p];
        if (n) var g = i ? n(b, d, p, t, e, a) : n(d, b, p, e, t, a);
        if (void 0 !== g) {
            if (g) continue;
            h = !1;
            break
        }
        if (f) {
            if (!Yn(t, (function(e, t) {
                    if (i = t, !f.has(i) && (d === e || o(d, e, r, n, a))) return f.push(t);
                    var i
                }))) {
                h = !1;
                break
            }
        } else if (d !== b && !o(d, b, r, n, a)) {
            h = !1;
            break
        }
    }
    return a.delete(e), a.delete(t), h
}

function Zn(e) {
    var t = -1,
        r = Array(e.size);
    return e.forEach((function(e, n) {
        r[++t] = [n, e]
    })), r
}

function Jn(e) {
    var t = -1,
        r = Array(e.size);
    return e.forEach((function(e) {
        r[++t] = e
    })), r
}
var Qn = ft ? ft.prototype : void 0,
    eo = Qn ? Qn.valueOf : void 0;
var to = Object.prototype.propertyIsEnumerable,
    ro = Object.getOwnPropertySymbols;
const no = ro ? function(e) {
    return null == e ? [] : (e = Object(e), function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, o = 0, a = []; ++r < n;) {
            var i = e[r];
            t(i, r, e) && (a[o++] = i)
        }
        return a
    }(ro(e), (function(t) {
        return to.call(e, t)
    })))
} : function() {
    return []
};

function oo(e) {
    return function(e, t, r) {
        var n = t(e);
        return dr(e) ? n : function(e, t) {
            for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
            return e
        }(n, r(e))
    }(e, Cn, no)
}
var ao = Object.prototype.hasOwnProperty;
const io = Pt(ht, "DataView");
const lo = Pt(ht, "Promise");
const so = Pt(ht, "Set");
const co = Pt(ht, "WeakMap");
var uo = St(io),
    po = St(Ht),
    ho = St(lo),
    fo = St(so),
    bo = St(co),
    go = mt;
(io && "[object DataView]" != go(new io(new ArrayBuffer(1))) || Ht && "[object Map]" != go(new Ht) || lo && "[object Promise]" != go(lo.resolve()) || so && "[object Set]" != go(new so) || co && "[object WeakMap]" != go(new co)) && (go = function(e) {
    var t = mt(e),
        r = "[object Object]" == t ? e.constructor : void 0,
        n = r ? St(r) : "";
    if (n) switch (n) {
        case uo:
            return "[object DataView]";
        case po:
            return "[object Map]";
        case ho:
            return "[object Promise]";
        case fo:
            return "[object Set]";
        case bo:
            return "[object WeakMap]"
    }
    return t
});
const vo = go;
var xo = "[object Object]",
    yo = Object.prototype.hasOwnProperty;

function mo(e, t, r, n, o, a) {
    var i = dr(e),
        l = dr(t),
        s = i ? "[object Array]" : vo(e),
        c = l ? "[object Array]" : vo(t),
        u = (s = "[object Arguments]" == s ? xo : s) == xo,
        p = (c = "[object Arguments]" == c ? xo : c) == xo,
        h = s == c;
    if (h && mr(e)) {
        if (!mr(t)) return !1;
        i = !0, u = !1
    }
    if (h && !u) return a || (a = new Wt), i || Mr(e) ? Kn(e, t, r, n, o, a) : function(e, t, r, n, o, a, i) {
        switch (r) {
            case "[object DataView]":
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;
            case "[object ArrayBuffer]":
                return !(e.byteLength != t.byteLength || !a(new er(e), new er(t)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return it(+e, +t);
            case "[object Error]":
                return e.name == t.name && e.message == t.message;
            case "[object RegExp]":
            case "[object String]":
                return e == t + "";
            case "[object Map]":
                var l = Zn;
            case "[object Set]":
                var s = 1 & n;
                if (l || (l = Jn), e.size != t.size && !s) return !1;
                var c = i.get(e);
                if (c) return c == t;
                n |= 2, i.set(e, t);
                var u = Kn(l(e), l(t), n, o, a, i);
                return i.delete(e), u;
            case "[object Symbol]":
                if (eo) return eo.call(e) == eo.call(t)
        }
        return !1
    }(e, t, s, r, n, o, a);
    if (!(1 & r)) {
        var f = u && yo.call(e, "__wrapped__"),
            d = p && yo.call(t, "__wrapped__");
        if (f || d) {
            var b = f ? e.value() : e,
                g = d ? t.value() : t;
            return a || (a = new Wt), o(b, g, r, n, a)
        }
    }
    return !!h && (a || (a = new Wt), function(e, t, r, n, o, a) {
        var i = 1 & r,
            l = oo(e),
            s = l.length;
        if (s != oo(t).length && !i) return !1;
        for (var c = s; c--;) {
            var u = l[c];
            if (!(i ? u in t : ao.call(t, u))) return !1
        }
        var p = a.get(e),
            h = a.get(t);
        if (p && h) return p == t && h == e;
        var f = !0;
        a.set(e, t), a.set(t, e);
        for (var d = i; ++c < s;) {
            var b = e[u = l[c]],
                g = t[u];
            if (n) var v = i ? n(g, b, u, t, e, a) : n(b, g, u, e, t, a);
            if (!(void 0 === v ? b === g || o(b, g, r, n, a) : v)) {
                f = !1;
                break
            }
            d || (d = "constructor" == u)
        }
        if (f && !d) {
            var x = e.constructor,
                y = t.constructor;
            x == y || !("constructor" in e) || !("constructor" in t) || "function" == typeof x && x instanceof x && "function" == typeof y && y instanceof y || (f = !1)
        }
        return a.delete(e), a.delete(t), f
    }(e, t, r, n, o, a))
}

function wo(e, t, r, n, o) {
    return e === t || (null == e || null == t || !sr(e) && !sr(t) ? e != e && t != t : mo(e, t, r, n, wo, o))
}

function Eo(e) {
    return e == e && !wt(e)
}

function _o(e, t) {
    return function(r) {
        return null != r && (r[e] === t && (void 0 !== t || e in Object(r)))
    }
}

function Co(e) {
    var t = function(e) {
        for (var t = Cn(e), r = t.length; r--;) {
            var n = t[r],
                o = e[n];
            t[r] = [n, o, Eo(o)]
        }
        return t
    }(e);
    return 1 == t.length && t[0][2] ? _o(t[0][0], t[0][1]) : function(r) {
        return r === e || function(e, t, r, n) {
            var o = r.length,
                a = o,
                i = !n;
            if (null == e) return !a;
            for (e = Object(e); o--;) {
                var l = r[o];
                if (i && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1
            }
            for (; ++o < a;) {
                var s = (l = r[o])[0],
                    c = e[s],
                    u = l[1];
                if (i && l[2]) {
                    if (void 0 === c && !(s in e)) return !1
                } else {
                    var p = new Wt;
                    if (n) var h = n(c, u, s, e, t, p);
                    if (!(void 0 === h ? wo(u, c, 3, n, p) : h)) return !1
                }
            }
            return !0
        }(r, e, t)
    }
}
var jo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    ko = /^\w*$/;

function So(e, t) {
    if (dr(e)) return !1;
    var r = typeof e;
    return !("number" != r && "symbol" != r && "boolean" != r && null != e && !un(e)) || (ko.test(e) || !jo.test(e) || null != t && e in Object(t))
}

function Oo(e, t) {
    if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
    var r = function() {
        var n = arguments,
            o = t ? t.apply(this, n) : n[0],
            a = r.cache;
        if (a.has(o)) return a.get(o);
        var i = e.apply(this, n);
        return r.cache = a.set(o, i) || a, i
    };
    return r.cache = new(Oo.Cache || Ut), r
}
Oo.Cache = Ut;
var Fo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Ro = /\\(\\)?/g,
    Ao = function(e) {
        var t = Oo(e, (function(e) {
                return 500 === r.size && r.clear(), e
            })),
            r = t.cache;
        return t
    }((function(e) {
        var t = [];
        return 46 === e.charCodeAt(0) && t.push(""), e.replace(Fo, (function(e, r, n, o) {
            t.push(n ? o.replace(Ro, "$1") : r || e)
        })), t
    }));
const Bo = Ao;
var Mo = ft ? ft.prototype : void 0,
    To = Mo ? Mo.toString : void 0;

function Po(e) {
    if ("string" == typeof e) return e;
    if (dr(e)) return $n(e, Po) + "";
    if (un(e)) return To ? To.call(e) : "";
    var t = e + "";
    return "0" == t && 1 / e == -Infinity ? "-0" : t
}

function Ho(e, t) {
    return dr(e) ? e : So(e, t) ? [e] : Bo(function(e) {
        return null == e ? "" : Po(e)
    }(e))
}

function zo(e) {
    if ("string" == typeof e || un(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -Infinity ? "-0" : t
}

function Do(e, t) {
    for (var r = 0, n = (t = Ho(t, e)).length; null != e && r < n;) e = e[zo(t[r++])];
    return r && r == n ? e : void 0
}

function Lo(e, t) {
    return null != e && t in Object(e)
}

function No(e, t) {
    return null != e && function(e, t, r) {
        for (var n = -1, o = (t = Ho(t, e)).length, a = !1; ++n < o;) {
            var i = zo(t[n]);
            if (!(a = null != e && r(e, i))) break;
            e = e[i]
        }
        return a || ++n != o ? a : !!(o = null == e ? 0 : e.length) && br(o) && Dr(i, o) && (dr(e) || fr(e))
    }(e, t, Lo)
}

function Go(e, t) {
    return So(e) && Eo(t) ? _o(zo(e), t) : function(r) {
        var n = function(e, t, r) {
            var n = null == e ? void 0 : Do(e, t);
            return void 0 === n ? r : n
        }(r, e);
        return void 0 === n && n === t ? No(r, e) : wo(t, n, 3)
    }
}

function Uo(e) {
    return So(e) ? (t = zo(e), function(e) {
        return null == e ? void 0 : e[t]
    }) : function(e) {
        return function(t) {
            return Do(t, e)
        }
    }(e);
    var t
}

function Wo(e, t) {
    var r = -1,
        n = gr(e) ? Array(e.length) : [];
    return kn(e, (function(e, o, a) {
        n[++r] = t(e, o, a)
    })), n
}

function Io(e, t) {
    var r;
    return (dr(e) ? $n : Wo)(e, "function" == typeof(r = t) ? r : null == r ? $r : "object" == typeof r ? dr(r) ? Go(r[0], r[1]) : Co(r) : Uo(r))
}
var Xo = function(e) {
        var t = e.colors,
            n = e.onClick,
            o = e.onSwatchHover,
            a = Ne({
                default: {
                    swatches: {
                        marginRight: "-10px"
                    },
                    swatch: {
                        width: "22px",
                        height: "22px",
                        float: "left",
                        marginRight: "10px",
                        marginBottom: "10px",
                        borderRadius: "4px"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            });
        return r.createElement("div", {
            style: a.swatches
        }, Io(t, (function(e) {
            return r.createElement(In, {
                key: e,
                color: e,
                style: a.swatch,
                onClick: n,
                onHover: o,
                focusStyle: {
                    boxShadow: "0 0 4px " + e
                }
            })
        })), r.createElement("div", {
            style: a.clear
        }))
    },
    Vo = function(e) {
        var t = e.onChange,
            n = e.onSwatchHover,
            o = e.hex,
            a = e.colors,
            i = e.width,
            l = e.triangle,
            s = e.styles,
            c = void 0 === s ? {} : s,
            u = e.className,
            p = void 0 === u ? "" : u,
            h = "transparent" === o,
            f = function(e, r) {
                Bn(e) && t({
                    hex: e,
                    source: "hex"
                }, r)
            },
            d = Ne(nn({
                default: {
                    card: {
                        width: i,
                        background: "#fff",
                        boxShadow: "0 1px rgba(0,0,0,.1)",
                        borderRadius: "6px",
                        position: "relative"
                    },
                    head: {
                        height: "110px",
                        background: o,
                        borderRadius: "6px 6px 0 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative"
                    },
                    body: {
                        padding: "10px"
                    },
                    label: {
                        fontSize: "18px",
                        color: Mn(o),
                        position: "relative"
                    },
                    triangle: {
                        width: "0px",
                        height: "0px",
                        borderStyle: "solid",
                        borderWidth: "0 10px 10px 10px",
                        borderColor: "transparent transparent " + o + " transparent",
                        position: "absolute",
                        top: "-10px",
                        left: "50%",
                        marginLeft: "-10px"
                    },
                    input: {
                        width: "100%",
                        fontSize: "12px",
                        color: "#666",
                        border: "0px",
                        outline: "none",
                        height: "22px",
                        boxShadow: "inset 0 0 0 1px #ddd",
                        borderRadius: "4px",
                        padding: "0 7px",
                        boxSizing: "border-box"
                    }
                },
                "hide-triangle": {
                    triangle: {
                        display: "none"
                    }
                }
            }, c), {
                "hide-triangle": "hide" === l
            });
        return r.createElement("div", {
            style: d.card,
            className: "block-picker " + p
        }, r.createElement("div", {
            style: d.triangle
        }), r.createElement("div", {
            style: d.head
        }, h && r.createElement(Xe, {
            borderRadius: "6px 6px 0 0"
        }), r.createElement("div", {
            style: d.label
        }, o)), r.createElement("div", {
            style: d.body
        }, r.createElement(Xo, {
            colors: a,
            onClick: f,
            onSwatchHover: n
        }), r.createElement(et, {
            style: {
                input: d.input
            },
            value: o,
            onChange: f
        })))
    };
Vo.propTypes = {
    width: o.oneOfType([o.string, o.number]),
    colors: o.arrayOf(o.string),
    triangle: o.oneOf(["top", "hide"]),
    styles: o.object
}, Vo.defaultProps = {
    width: 170,
    colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
    triangle: "top",
    styles: {}
}, zn(Vo);
var $o = "#ffcdd2",
    qo = "#e57373",
    Yo = "#f44336",
    Ko = "#d32f2f",
    Zo = "#b71c1c",
    Jo = "#f8bbd0",
    Qo = "#f06292",
    ea = "#e91e63",
    ta = "#c2185b",
    ra = "#880e4f",
    na = "#e1bee7",
    oa = "#ba68c8",
    aa = "#9c27b0",
    ia = "#7b1fa2",
    la = "#4a148c",
    sa = "#d1c4e9",
    ca = "#9575cd",
    ua = "#673ab7",
    pa = "#512da8",
    ha = "#311b92",
    fa = "#c5cae9",
    da = "#7986cb",
    ba = "#3f51b5",
    ga = "#303f9f",
    va = "#1a237e",
    xa = "#bbdefb",
    ya = "#64b5f6",
    ma = "#2196f3",
    wa = "#1976d2",
    Ea = "#0d47a1",
    _a = "#b3e5fc",
    Ca = "#4fc3f7",
    ja = "#03a9f4",
    ka = "#0288d1",
    Sa = "#01579b",
    Oa = "#b2ebf2",
    Fa = "#4dd0e1",
    Ra = "#00bcd4",
    Aa = "#0097a7",
    Ba = "#006064",
    Ma = "#b2dfdb",
    Ta = "#4db6ac",
    Pa = "#009688",
    Ha = "#00796b",
    za = "#004d40",
    Da = "#c8e6c9",
    La = "#81c784",
    Na = "#4caf50",
    Ga = "#388e3c",
    Ua = "#dcedc8",
    Wa = "#aed581",
    Ia = "#8bc34a",
    Xa = "#689f38",
    Va = "#33691e",
    $a = "#f0f4c3",
    qa = "#dce775",
    Ya = "#cddc39",
    Ka = "#afb42b",
    Za = "#827717",
    Ja = "#fff9c4",
    Qa = "#fff176",
    ei = "#ffeb3b",
    ti = "#fbc02d",
    ri = "#f57f17",
    ni = "#ffecb3",
    oi = "#ffd54f",
    ai = "#ffc107",
    ii = "#ffa000",
    li = "#ff6f00",
    si = "#ffe0b2",
    ci = "#ffb74d",
    ui = "#ff9800",
    pi = "#f57c00",
    hi = "#e65100",
    fi = "#ffccbc",
    di = "#ff8a65",
    bi = "#ff5722",
    gi = "#e64a19",
    vi = "#bf360c",
    xi = "#d7ccc8",
    yi = "#a1887f",
    mi = "#795548",
    wi = "#5d4037",
    Ei = "#3e2723",
    _i = "#cfd8dc",
    Ci = "#90a4ae",
    ji = "#607d8b",
    ki = "#455a64",
    Si = "#263238",
    Oi = function(e) {
        var t = e.color,
            n = e.onClick,
            o = e.onSwatchHover,
            a = e.hover,
            i = e.active,
            l = e.circleSize,
            s = e.circleSpacing,
            c = Ne({
                default: {
                    swatch: {
                        width: l,
                        height: l,
                        marginRight: s,
                        marginBottom: s,
                        transform: "scale(1)",
                        transition: "100ms transform ease"
                    },
                    Swatch: {
                        borderRadius: "50%",
                        background: "transparent",
                        boxShadow: "inset 0 0 0 " + (l / 2 + 1) + "px " + t,
                        transition: "100ms box-shadow ease"
                    }
                },
                hover: {
                    swatch: {
                        transform: "scale(1.2)"
                    }
                },
                active: {
                    Swatch: {
                        boxShadow: "inset 0 0 0 3px " + t
                    }
                }
            }, {
                hover: a,
                active: i
            });
        return r.createElement("div", {
            style: c.swatch
        }, r.createElement(In, {
            style: c.Swatch,
            color: t,
            onClick: n,
            onHover: o,
            focusStyle: {
                boxShadow: c.Swatch.boxShadow + ", 0 0 5px " + t
            }
        }))
    };
Oi.defaultProps = {
    circleSize: 28,
    circleSpacing: 14
};
const Fi = De(Oi);
var Ri = function(e) {
    var t = e.width,
        n = e.onChange,
        o = e.onSwatchHover,
        a = e.colors,
        i = e.hex,
        l = e.circleSize,
        s = e.styles,
        c = void 0 === s ? {} : s,
        u = e.circleSpacing,
        p = e.className,
        h = void 0 === p ? "" : p,
        f = Ne(nn({
            default: {
                card: {
                    width: t,
                    display: "flex",
                    flexWrap: "wrap",
                    marginRight: -u,
                    marginBottom: -u
                }
            }
        }, c)),
        d = function(e, t) {
            return n({
                hex: e,
                source: "hex"
            }, t)
        };
    return r.createElement("div", {
        style: f.card,
        className: "circle-picker " + h
    }, Io(a, (function(e) {
        return r.createElement(Fi, {
            key: e,
            color: e,
            onClick: d,
            onSwatchHover: o,
            active: i === e.toLowerCase(),
            circleSize: l,
            circleSpacing: u
        })
    })))
};

function Ai(e) {
    return void 0 === e
}
Ri.propTypes = {
    width: o.oneOfType([o.string, o.number]),
    circleSize: o.number,
    circleSpacing: o.number,
    styles: o.object
}, Ri.defaultProps = {
    width: 252,
    circleSize: 28,
    circleSpacing: 14,
    colors: [Yo, ea, aa, ua, ba, ma, ja, Ra, Pa, Na, Ia, Ya, ei, ai, ui, bi, mi, ji],
    styles: {}
}, zn(Ri);
var Bi = {};
Object.defineProperty(Bi, "__esModule", {
    value: !0
});
var Mi = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    Ti = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(t);
var Pi = Bi.default = function(e) {
        var t = e.fill,
            r = void 0 === t ? "currentColor" : t,
            n = e.width,
            o = void 0 === n ? 24 : n,
            a = e.height,
            i = void 0 === a ? 24 : a,
            l = e.style,
            s = void 0 === l ? {} : l,
            c = function(e, t) {
                var r = {};
                for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                return r
            }(e, ["fill", "width", "height", "style"]);
        return Ti.default.createElement("svg", Mi({
            viewBox: "0 0 24 24",
            style: Mi({
                fill: r,
                width: o,
                height: i
            }, s)
        }, c), Ti.default.createElement("path", {
            d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
        }))
    },
    Hi = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }();
var zi = function(e) {
    function t(e) {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var r = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return r.toggleViews = function() {
            "hex" === r.state.view ? r.setState({
                view: "rgb"
            }) : "rgb" === r.state.view ? r.setState({
                view: "hsl"
            }) : "hsl" === r.state.view && (1 === r.props.hsl.a ? r.setState({
                view: "hex"
            }) : r.setState({
                view: "rgb"
            }))
        }, r.handleChange = function(e, t) {
            e.hex ? Bn(e.hex) && r.props.onChange({
                hex: e.hex,
                source: "hex"
            }, t) : e.r || e.g || e.b ? r.props.onChange({
                r: e.r || r.props.rgb.r,
                g: e.g || r.props.rgb.g,
                b: e.b || r.props.rgb.b,
                source: "rgb"
            }, t) : e.a ? (e.a < 0 ? e.a = 0 : e.a > 1 && (e.a = 1), r.props.onChange({
                h: r.props.hsl.h,
                s: r.props.hsl.s,
                l: r.props.hsl.l,
                a: Math.round(100 * e.a) / 100,
                source: "rgb"
            }, t)) : (e.h || e.s || e.l) && ("string" == typeof e.s && e.s.includes("%") && (e.s = e.s.replace("%", "")), "string" == typeof e.l && e.l.includes("%") && (e.l = e.l.replace("%", "")), 1 == e.s ? e.s = .01 : 1 == e.l && (e.l = .01), r.props.onChange({
                h: e.h || r.props.hsl.h,
                s: Number(Ai(e.s) ? r.props.hsl.s : e.s),
                l: Number(Ai(e.l) ? r.props.hsl.l : e.l),
                source: "hsl"
            }, t))
        }, r.showHighlight = function(e) {
            e.currentTarget.style.background = "#eee"
        }, r.hideHighlight = function(e) {
            e.currentTarget.style.background = "transparent"
        }, 1 !== e.hsl.a && "hex" === e.view ? r.state = {
            view: "rgb"
        } : r.state = {
            view: e.view
        }, r
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
    }(t, r.Component), Hi(t, [{
        key: "render",
        value: function() {
            var e = this,
                t = Ne({
                    default: {
                        wrap: {
                            paddingTop: "16px",
                            display: "flex"
                        },
                        fields: {
                            flex: "1",
                            display: "flex",
                            marginLeft: "-6px"
                        },
                        field: {
                            paddingLeft: "6px",
                            width: "100%"
                        },
                        alpha: {
                            paddingLeft: "6px",
                            width: "100%"
                        },
                        toggle: {
                            width: "32px",
                            textAlign: "right",
                            position: "relative"
                        },
                        icon: {
                            marginRight: "-4px",
                            marginTop: "12px",
                            cursor: "pointer",
                            position: "relative"
                        },
                        iconHighlight: {
                            position: "absolute",
                            width: "24px",
                            height: "28px",
                            background: "#eee",
                            borderRadius: "4px",
                            top: "10px",
                            left: "12px",
                            display: "none"
                        },
                        input: {
                            fontSize: "11px",
                            color: "#333",
                            width: "100%",
                            borderRadius: "2px",
                            border: "none",
                            boxShadow: "inset 0 0 0 1px #dadada",
                            height: "21px",
                            textAlign: "center"
                        },
                        label: {
                            textTransform: "uppercase",
                            fontSize: "11px",
                            lineHeight: "11px",
                            color: "#969696",
                            textAlign: "center",
                            display: "block",
                            marginTop: "12px"
                        },
                        svg: {
                            fill: "#333",
                            width: "24px",
                            height: "24px",
                            border: "1px transparent solid",
                            borderRadius: "5px"
                        }
                    },
                    disableAlpha: {
                        alpha: {
                            display: "none"
                        }
                    }
                }, this.props, this.state),
                n = void 0;
            return "hex" === this.state.view ? n = r.createElement("div", {
                style: t.fields,
                className: "flexbox-fix"
            }, r.createElement("div", {
                style: t.field
            }, r.createElement(et, {
                style: {
                    input: t.input,
                    label: t.label
                },
                label: "hex",
                value: this.props.hex,
                onChange: this.handleChange
            }))) : "rgb" === this.state.view ? n = r.createElement("div", {
                style: t.fields,
                className: "flexbox-fix"
            }, r.createElement("div", {
                style: t.field
            }, r.createElement(et, {
                style: {
                    input: t.input,
                    label: t.label
                },
                label: "r",
                value: this.props.rgb.r,
                onChange: this.handleChange
            })), r.createElement("div", {
                style: t.field
            }, r.createElement(et, {
                style: {
                    input: t.input,
                    label: t.label
                },
                label: "g",
                value: this.props.rgb.g,
                onChange: this.handleChange
            })), r.createElement("div", {
                style: t.field
            }, r.createElement(et, {
                style: {
                    input: t.input,
                    label: t.label
                },
                label: "b",
                value: this.props.rgb.b,
                onChange: this.handleChange
            })), r.createElement("div", {
                style: t.alpha
            }, r.createElement(et, {
                style: {
                    input: t.input,
                    label: t.label
                },
                label: "a",
                value: this.props.rgb.a,
                arrowOffset: .01,
                onChange: this.handleChange
            }))) : "hsl" === this.state.view && (n = r.createElement("div", {
                style: t.fields,
                className: "flexbox-fix"
            }, r.createElement("div", {
                style: t.field
            }, r.createElement(et, {
                style: {
                    input: t.input,
                    label: t.label
                },
                label: "h",
                value: Math.round(this.props.hsl.h),
                onChange: this.handleChange
            })), r.createElement("div", {
                style: t.field
            }, r.createElement(et, {
                style: {
                    input: t.input,
                    label: t.label
                },
                label: "s",
                value: Math.round(100 * this.props.hsl.s) + "%",
                onChange: this.handleChange
            })), r.createElement("div", {
                style: t.field
            }, r.createElement(et, {
                style: {
                    input: t.input,
                    label: t.label
                },
                label: "l",
                value: Math.round(100 * this.props.hsl.l) + "%",
                onChange: this.handleChange
            })), r.createElement("div", {
                style: t.alpha
            }, r.createElement(et, {
                style: {
                    input: t.input,
                    label: t.label
                },
                label: "a",
                value: this.props.hsl.a,
                arrowOffset: .01,
                onChange: this.handleChange
            })))), r.createElement("div", {
                style: t.wrap,
                className: "flexbox-fix"
            }, n, r.createElement("div", {
                style: t.toggle
            }, r.createElement("div", {
                style: t.icon,
                onClick: this.toggleViews,
                ref: function(t) {
                    return e.icon = t
                }
            }, r.createElement(Pi, {
                style: t.svg,
                onMouseOver: this.showHighlight,
                onMouseEnter: this.showHighlight,
                onMouseOut: this.hideHighlight
            }))))
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function(e, t) {
            return 1 !== e.hsl.a && "hex" === t.view ? {
                view: "rgb"
            } : null
        }
    }]), t
}();
zi.defaultProps = {
    view: "hex"
};
var Di = function() {
        var e = Ne({
            default: {
                picker: {
                    width: "12px",
                    height: "12px",
                    borderRadius: "6px",
                    transform: "translate(-6px, -1px)",
                    backgroundColor: "rgb(248, 248, 248)",
                    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                }
            }
        });
        return r.createElement("div", {
            style: e.picker
        })
    },
    Li = function() {
        var e = Ne({
            default: {
                picker: {
                    width: "12px",
                    height: "12px",
                    borderRadius: "6px",
                    boxShadow: "inset 0 0 0 1px #fff",
                    transform: "translate(-6px, -6px)"
                }
            }
        });
        return r.createElement("div", {
            style: e.picker
        })
    },
    Ni = function(e) {
        var t = e.width,
            n = e.onChange,
            o = e.disableAlpha,
            a = e.rgb,
            i = e.hsl,
            l = e.hsv,
            s = e.hex,
            c = e.renderers,
            u = e.styles,
            p = void 0 === u ? {} : u,
            h = e.className,
            f = void 0 === h ? "" : h,
            d = e.defaultView,
            b = Ne(nn({
                default: {
                    picker: {
                        width: t,
                        background: "#fff",
                        borderRadius: "2px",
                        boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
                        boxSizing: "initial",
                        fontFamily: "Menlo"
                    },
                    saturation: {
                        width: "100%",
                        paddingBottom: "55%",
                        position: "relative",
                        borderRadius: "2px 2px 0 0",
                        overflow: "hidden"
                    },
                    Saturation: {
                        radius: "2px 2px 0 0"
                    },
                    body: {
                        padding: "16px 16px 12px"
                    },
                    controls: {
                        display: "flex"
                    },
                    color: {
                        width: "32px"
                    },
                    swatch: {
                        marginTop: "6px",
                        width: "16px",
                        height: "16px",
                        borderRadius: "8px",
                        position: "relative",
                        overflow: "hidden"
                    },
                    active: {
                        absolute: "0px 0px 0px 0px",
                        borderRadius: "8px",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
                        background: "rgba(" + a.r + ", " + a.g + ", " + a.b + ", " + a.a + ")",
                        zIndex: "2"
                    },
                    toggles: {
                        flex: "1"
                    },
                    hue: {
                        height: "10px",
                        position: "relative",
                        marginBottom: "8px"
                    },
                    Hue: {
                        radius: "2px"
                    },
                    alpha: {
                        height: "10px",
                        position: "relative"
                    },
                    Alpha: {
                        radius: "2px"
                    }
                },
                disableAlpha: {
                    color: {
                        width: "22px"
                    },
                    alpha: {
                        display: "none"
                    },
                    hue: {
                        marginBottom: "0px"
                    },
                    swatch: {
                        width: "10px",
                        height: "10px",
                        marginTop: "0px"
                    }
                }
            }, p), {
                disableAlpha: o
            });
        return r.createElement("div", {
            style: b.picker,
            className: "chrome-picker " + f
        }, r.createElement("div", {
            style: b.saturation
        }, r.createElement(mn, {
            style: b.Saturation,
            hsl: i,
            hsv: l,
            pointer: Li,
            onChange: n
        })), r.createElement("div", {
            style: b.body
        }, r.createElement("div", {
            style: b.controls,
            className: "flexbox-fix"
        }, r.createElement("div", {
            style: b.color
        }, r.createElement("div", {
            style: b.swatch
        }, r.createElement("div", {
            style: b.active
        }), r.createElement(Xe, {
            renderers: c
        }))), r.createElement("div", {
            style: b.toggles
        }, r.createElement("div", {
            style: b.hue
        }, r.createElement(at, {
            style: b.Hue,
            hsl: i,
            pointer: Di,
            onChange: n
        })), r.createElement("div", {
            style: b.alpha
        }, r.createElement(Ke, {
            style: b.Alpha,
            rgb: a,
            hsl: i,
            pointer: Di,
            renderers: c,
            onChange: n
        })))), r.createElement(zi, {
            rgb: a,
            hsl: i,
            hex: s,
            view: d,
            onChange: n,
            disableAlpha: o
        })))
    };
Ni.propTypes = {
    width: o.oneOfType([o.string, o.number]),
    disableAlpha: o.bool,
    styles: o.object,
    defaultView: o.oneOf(["hex", "rgb", "hsl"])
}, Ni.defaultProps = {
    width: 225,
    disableAlpha: !1,
    styles: {}
}, zn(Ni);
var Gi = function(e) {
        var t = e.color,
            n = e.onClick,
            o = void 0 === n ? function() {} : n,
            a = e.onSwatchHover,
            i = e.active,
            l = Ne({
                default: {
                    color: {
                        background: t,
                        width: "15px",
                        height: "15px",
                        float: "left",
                        marginRight: "5px",
                        marginBottom: "5px",
                        position: "relative",
                        cursor: "pointer"
                    },
                    dot: {
                        absolute: "5px 5px 5px 5px",
                        background: Mn(t),
                        borderRadius: "50%",
                        opacity: "0"
                    }
                },
                active: {
                    dot: {
                        opacity: "1"
                    }
                },
                "color-#FFFFFF": {
                    color: {
                        boxShadow: "inset 0 0 0 1px #ddd"
                    },
                    dot: {
                        background: "#000"
                    }
                },
                transparent: {
                    dot: {
                        background: "#000"
                    }
                }
            }, {
                active: i,
                "color-#FFFFFF": "#FFFFFF" === t,
                transparent: "transparent" === t
            });
        return r.createElement(In, {
            style: l.color,
            color: t,
            onClick: o,
            onHover: a,
            focusStyle: {
                boxShadow: "0 0 4px " + t
            }
        }, r.createElement("div", {
            style: l.dot
        }))
    },
    Ui = function(e) {
        var t = e.hex,
            n = e.rgb,
            o = e.onChange,
            a = Ne({
                default: {
                    fields: {
                        display: "flex",
                        paddingBottom: "6px",
                        paddingRight: "5px",
                        position: "relative"
                    },
                    active: {
                        position: "absolute",
                        top: "6px",
                        left: "5px",
                        height: "9px",
                        width: "9px",
                        background: t
                    },
                    HEXwrap: {
                        flex: "6",
                        position: "relative"
                    },
                    HEXinput: {
                        width: "80%",
                        padding: "0px",
                        paddingLeft: "20%",
                        border: "none",
                        outline: "none",
                        background: "none",
                        fontSize: "12px",
                        color: "#333",
                        height: "16px"
                    },
                    HEXlabel: {
                        display: "none"
                    },
                    RGBwrap: {
                        flex: "3",
                        position: "relative"
                    },
                    RGBinput: {
                        width: "70%",
                        padding: "0px",
                        paddingLeft: "30%",
                        border: "none",
                        outline: "none",
                        background: "none",
                        fontSize: "12px",
                        color: "#333",
                        height: "16px"
                    },
                    RGBlabel: {
                        position: "absolute",
                        top: "3px",
                        left: "0px",
                        lineHeight: "16px",
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#999"
                    }
                }
            }),
            i = function(e, t) {
                e.r || e.g || e.b ? o({
                    r: e.r || n.r,
                    g: e.g || n.g,
                    b: e.b || n.b,
                    source: "rgb"
                }, t) : o({
                    hex: e.hex,
                    source: "hex"
                }, t)
            };
        return r.createElement("div", {
            style: a.fields,
            className: "flexbox-fix"
        }, r.createElement("div", {
            style: a.active
        }), r.createElement(et, {
            style: {
                wrap: a.HEXwrap,
                input: a.HEXinput,
                label: a.HEXlabel
            },
            label: "hex",
            value: t,
            onChange: i
        }), r.createElement(et, {
            style: {
                wrap: a.RGBwrap,
                input: a.RGBinput,
                label: a.RGBlabel
            },
            label: "r",
            value: n.r,
            onChange: i
        }), r.createElement(et, {
            style: {
                wrap: a.RGBwrap,
                input: a.RGBinput,
                label: a.RGBlabel
            },
            label: "g",
            value: n.g,
            onChange: i
        }), r.createElement(et, {
            style: {
                wrap: a.RGBwrap,
                input: a.RGBinput,
                label: a.RGBlabel
            },
            label: "b",
            value: n.b,
            onChange: i
        }))
    },
    Wi = function(e) {
        var t = e.onChange,
            n = e.onSwatchHover,
            o = e.colors,
            a = e.hex,
            i = e.rgb,
            l = e.styles,
            s = void 0 === l ? {} : l,
            c = e.className,
            u = void 0 === c ? "" : c,
            p = Ne(nn({
                default: {
                    Compact: {
                        background: "#f6f6f6",
                        radius: "4px"
                    },
                    compact: {
                        paddingTop: "5px",
                        paddingLeft: "5px",
                        boxSizing: "initial",
                        width: "240px"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            }, s)),
            h = function(e, r) {
                e.hex ? Bn(e.hex) && t({
                    hex: e.hex,
                    source: "hex"
                }, r) : t(e, r)
            };
        return r.createElement(on, {
            style: p.Compact,
            styles: s
        }, r.createElement("div", {
            style: p.compact,
            className: "compact-picker " + u
        }, r.createElement("div", null, Io(o, (function(e) {
            return r.createElement(Gi, {
                key: e,
                color: e,
                active: e.toLowerCase() === a,
                onClick: h,
                onSwatchHover: n
            })
        })), r.createElement("div", {
            style: p.clear
        })), r.createElement(Ui, {
            hex: a,
            rgb: i,
            onChange: h
        })))
    };
Wi.propTypes = {
    colors: o.arrayOf(o.string),
    styles: o.object
}, Wi.defaultProps = {
    colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
    styles: {}
}, zn(Wi);
const Ii = De((function(e) {
    var t = e.hover,
        n = e.color,
        o = e.onClick,
        a = e.onSwatchHover,
        i = {
            position: "relative",
            zIndex: "2",
            outline: "2px solid #fff",
            boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
        },
        l = Ne({
            default: {
                swatch: {
                    width: "25px",
                    height: "25px",
                    fontSize: "0"
                }
            },
            hover: {
                swatch: i
            }
        }, {
            hover: t
        });
    return r.createElement("div", {
        style: l.swatch
    }, r.createElement(In, {
        color: n,
        onClick: o,
        onHover: a,
        focusStyle: i
    }))
}));
var Xi = function(e) {
    var t = e.width,
        n = e.colors,
        o = e.onChange,
        a = e.onSwatchHover,
        i = e.triangle,
        l = e.styles,
        s = void 0 === l ? {} : l,
        c = e.className,
        u = void 0 === c ? "" : c,
        p = Ne(nn({
            default: {
                card: {
                    width: t,
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.2)",
                    boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
                    borderRadius: "4px",
                    position: "relative",
                    padding: "5px",
                    display: "flex",
                    flexWrap: "wrap"
                },
                triangle: {
                    position: "absolute",
                    border: "7px solid transparent",
                    borderBottomColor: "#fff"
                },
                triangleShadow: {
                    position: "absolute",
                    border: "8px solid transparent",
                    borderBottomColor: "rgba(0,0,0,0.15)"
                }
            },
            "hide-triangle": {
                triangle: {
                    display: "none"
                },
                triangleShadow: {
                    display: "none"
                }
            },
            "top-left-triangle": {
                triangle: {
                    top: "-14px",
                    left: "10px"
                },
                triangleShadow: {
                    top: "-16px",
                    left: "9px"
                }
            },
            "top-right-triangle": {
                triangle: {
                    top: "-14px",
                    right: "10px"
                },
                triangleShadow: {
                    top: "-16px",
                    right: "9px"
                }
            },
            "bottom-left-triangle": {
                triangle: {
                    top: "35px",
                    left: "10px",
                    transform: "rotate(180deg)"
                },
                triangleShadow: {
                    top: "37px",
                    left: "9px",
                    transform: "rotate(180deg)"
                }
            },
            "bottom-right-triangle": {
                triangle: {
                    top: "35px",
                    right: "10px",
                    transform: "rotate(180deg)"
                },
                triangleShadow: {
                    top: "37px",
                    right: "9px",
                    transform: "rotate(180deg)"
                }
            }
        }, s), {
            "hide-triangle": "hide" === i,
            "top-left-triangle": "top-left" === i,
            "top-right-triangle": "top-right" === i,
            "bottom-left-triangle": "bottom-left" === i,
            "bottom-right-triangle": "bottom-right" === i
        }),
        h = function(e, t) {
            return o({
                hex: e,
                source: "hex"
            }, t)
        };
    return r.createElement("div", {
        style: p.card,
        className: "github-picker " + u
    }, r.createElement("div", {
        style: p.triangleShadow
    }), r.createElement("div", {
        style: p.triangle
    }), Io(n, (function(e) {
        return r.createElement(Ii, {
            color: e,
            key: e,
            onClick: h,
            onSwatchHover: a
        })
    })))
};
Xi.propTypes = {
    width: o.oneOfType([o.string, o.number]),
    colors: o.arrayOf(o.string),
    triangle: o.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
    styles: o.object
}, Xi.defaultProps = {
    width: 200,
    colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
    triangle: "top-left",
    styles: {}
}, zn(Xi);
var Vi = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    $i = function(e) {
        var t = e.width,
            n = e.height,
            o = e.onChange,
            a = e.hsl,
            i = e.direction,
            l = e.pointer,
            s = e.styles,
            c = void 0 === s ? {} : s,
            u = e.className,
            p = void 0 === u ? "" : u,
            h = Ne(nn({
                default: {
                    picker: {
                        position: "relative",
                        width: t,
                        height: n
                    },
                    hue: {
                        radius: "2px"
                    }
                }
            }, c));
        return r.createElement("div", {
            style: h.picker,
            className: "hue-picker " + p
        }, r.createElement(at, Vi({}, h.hue, {
            hsl: a,
            pointer: l,
            onChange: function(e) {
                return o({
                    a: 1,
                    h: e.h,
                    l: .5,
                    s: 1
                })
            },
            direction: i
        })))
    };
$i.propTypes = {
    styles: o.object
}, $i.defaultProps = {
    width: "316px",
    height: "16px",
    direction: "horizontal",
    pointer: function(e) {
        var t = e.direction,
            n = Ne({
                default: {
                    picker: {
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        transform: "translate(-9px, -1px)",
                        backgroundColor: "rgb(248, 248, 248)",
                        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                    }
                },
                vertical: {
                    picker: {
                        transform: "translate(-3px, -9px)"
                    }
                }
            }, {
                vertical: "vertical" === t
            });
        return r.createElement("div", {
            style: n.picker
        })
    },
    styles: {}
}, zn($i);
zn((function(e) {
    var t = e.onChange,
        n = e.hex,
        o = e.rgb,
        a = e.styles,
        i = void 0 === a ? {} : a,
        l = e.className,
        s = void 0 === l ? "" : l,
        c = Ne(nn({
            default: {
                material: {
                    width: "98px",
                    height: "98px",
                    padding: "16px",
                    fontFamily: "Roboto"
                },
                HEXwrap: {
                    position: "relative"
                },
                HEXinput: {
                    width: "100%",
                    marginTop: "12px",
                    fontSize: "15px",
                    color: "#333",
                    padding: "0px",
                    border: "0px",
                    borderBottom: "2px solid " + n,
                    outline: "none",
                    height: "30px"
                },
                HEXlabel: {
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    fontSize: "11px",
                    color: "#999999",
                    textTransform: "capitalize"
                },
                Hex: {
                    style: {}
                },
                RGBwrap: {
                    position: "relative"
                },
                RGBinput: {
                    width: "100%",
                    marginTop: "12px",
                    fontSize: "15px",
                    color: "#333",
                    padding: "0px",
                    border: "0px",
                    borderBottom: "1px solid #eee",
                    outline: "none",
                    height: "30px"
                },
                RGBlabel: {
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    fontSize: "11px",
                    color: "#999999",
                    textTransform: "capitalize"
                },
                split: {
                    display: "flex",
                    marginRight: "-10px",
                    paddingTop: "11px"
                },
                third: {
                    flex: "1",
                    paddingRight: "10px"
                }
            }
        }, i)),
        u = function(e, r) {
            e.hex ? Bn(e.hex) && t({
                hex: e.hex,
                source: "hex"
            }, r) : (e.r || e.g || e.b) && t({
                r: e.r || o.r,
                g: e.g || o.g,
                b: e.b || o.b,
                source: "rgb"
            }, r)
        };
    return r.createElement(on, {
        styles: i
    }, r.createElement("div", {
        style: c.material,
        className: "material-picker " + s
    }, r.createElement(et, {
        style: {
            wrap: c.HEXwrap,
            input: c.HEXinput,
            label: c.HEXlabel
        },
        label: "hex",
        value: n,
        onChange: u
    }), r.createElement("div", {
        style: c.split,
        className: "flexbox-fix"
    }, r.createElement("div", {
        style: c.third
    }, r.createElement(et, {
        style: {
            wrap: c.RGBwrap,
            input: c.RGBinput,
            label: c.RGBlabel
        },
        label: "r",
        value: o.r,
        onChange: u
    })), r.createElement("div", {
        style: c.third
    }, r.createElement(et, {
        style: {
            wrap: c.RGBwrap,
            input: c.RGBinput,
            label: c.RGBlabel
        },
        label: "g",
        value: o.g,
        onChange: u
    })), r.createElement("div", {
        style: c.third
    }, r.createElement(et, {
        style: {
            wrap: c.RGBwrap,
            input: c.RGBinput,
            label: c.RGBlabel
        },
        label: "b",
        value: o.b,
        onChange: u
    })))))
}));
var qi = function(e) {
        var t = e.onChange,
            n = e.rgb,
            o = e.hsv,
            a = e.hex,
            i = Ne({
                default: {
                    fields: {
                        paddingTop: "5px",
                        paddingBottom: "9px",
                        width: "80px",
                        position: "relative"
                    },
                    divider: {
                        height: "5px"
                    },
                    RGBwrap: {
                        position: "relative"
                    },
                    RGBinput: {
                        marginLeft: "40%",
                        width: "40%",
                        height: "18px",
                        border: "1px solid #888888",
                        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                        marginBottom: "5px",
                        fontSize: "13px",
                        paddingLeft: "3px",
                        marginRight: "10px"
                    },
                    RGBlabel: {
                        left: "0px",
                        top: "0px",
                        width: "34px",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        height: "18px",
                        lineHeight: "22px",
                        position: "absolute"
                    },
                    HEXwrap: {
                        position: "relative"
                    },
                    HEXinput: {
                        marginLeft: "20%",
                        width: "80%",
                        height: "18px",
                        border: "1px solid #888888",
                        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                        marginBottom: "6px",
                        fontSize: "13px",
                        paddingLeft: "3px"
                    },
                    HEXlabel: {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "14px",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        height: "18px",
                        lineHeight: "22px"
                    },
                    fieldSymbols: {
                        position: "absolute",
                        top: "5px",
                        right: "-7px",
                        fontSize: "13px"
                    },
                    symbol: {
                        height: "20px",
                        lineHeight: "22px",
                        paddingBottom: "7px"
                    }
                }
            }),
            l = function(e, r) {
                e["#"] ? Bn(e["#"]) && t({
                    hex: e["#"],
                    source: "hex"
                }, r) : e.r || e.g || e.b ? t({
                    r: e.r || n.r,
                    g: e.g || n.g,
                    b: e.b || n.b,
                    source: "rgb"
                }, r) : (e.h || e.s || e.v) && t({
                    h: e.h || o.h,
                    s: e.s || o.s,
                    v: e.v || o.v,
                    source: "hsv"
                }, r)
            };
        return r.createElement("div", {
            style: i.fields
        }, r.createElement(et, {
            style: {
                wrap: i.RGBwrap,
                input: i.RGBinput,
                label: i.RGBlabel
            },
            label: "h",
            value: Math.round(o.h),
            onChange: l
        }), r.createElement(et, {
            style: {
                wrap: i.RGBwrap,
                input: i.RGBinput,
                label: i.RGBlabel
            },
            label: "s",
            value: Math.round(100 * o.s),
            onChange: l
        }), r.createElement(et, {
            style: {
                wrap: i.RGBwrap,
                input: i.RGBinput,
                label: i.RGBlabel
            },
            label: "v",
            value: Math.round(100 * o.v),
            onChange: l
        }), r.createElement("div", {
            style: i.divider
        }), r.createElement(et, {
            style: {
                wrap: i.RGBwrap,
                input: i.RGBinput,
                label: i.RGBlabel
            },
            label: "r",
            value: n.r,
            onChange: l
        }), r.createElement(et, {
            style: {
                wrap: i.RGBwrap,
                input: i.RGBinput,
                label: i.RGBlabel
            },
            label: "g",
            value: n.g,
            onChange: l
        }), r.createElement(et, {
            style: {
                wrap: i.RGBwrap,
                input: i.RGBinput,
                label: i.RGBlabel
            },
            label: "b",
            value: n.b,
            onChange: l
        }), r.createElement("div", {
            style: i.divider
        }), r.createElement(et, {
            style: {
                wrap: i.HEXwrap,
                input: i.HEXinput,
                label: i.HEXlabel
            },
            label: "#",
            value: a.replace("#", ""),
            onChange: l
        }), r.createElement("div", {
            style: i.fieldSymbols
        }, r.createElement("div", {
            style: i.symbol
        }, "°"), r.createElement("div", {
            style: i.symbol
        }, "%"), r.createElement("div", {
            style: i.symbol
        }, "%")))
    },
    Yi = function(e) {
        var t = e.hsl,
            n = Ne({
                default: {
                    picker: {
                        width: "12px",
                        height: "12px",
                        borderRadius: "6px",
                        boxShadow: "inset 0 0 0 1px #fff",
                        transform: "translate(-6px, -6px)"
                    }
                },
                "black-outline": {
                    picker: {
                        boxShadow: "inset 0 0 0 1px #000"
                    }
                }
            }, {
                "black-outline": t.l > .5
            });
        return r.createElement("div", {
            style: n.picker
        })
    },
    Ki = function() {
        var e = Ne({
            default: {
                triangle: {
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: "4px 0 4px 6px",
                    borderColor: "transparent transparent transparent #fff",
                    position: "absolute",
                    top: "1px",
                    left: "1px"
                },
                triangleBorder: {
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: "5px 0 5px 8px",
                    borderColor: "transparent transparent transparent #555"
                },
                left: {
                    Extend: "triangleBorder",
                    transform: "translate(-13px, -4px)"
                },
                leftInside: {
                    Extend: "triangle",
                    transform: "translate(-8px, -5px)"
                },
                right: {
                    Extend: "triangleBorder",
                    transform: "translate(20px, -14px) rotate(180deg)"
                },
                rightInside: {
                    Extend: "triangle",
                    transform: "translate(-8px, -5px)"
                }
            }
        });
        return r.createElement("div", {
            style: e.pointer
        }, r.createElement("div", {
            style: e.left
        }, r.createElement("div", {
            style: e.leftInside
        })), r.createElement("div", {
            style: e.right
        }, r.createElement("div", {
            style: e.rightInside
        })))
    },
    Zi = function(e) {
        var t = e.onClick,
            n = e.label,
            o = e.children,
            a = e.active,
            i = Ne({
                default: {
                    button: {
                        backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
                        border: "1px solid #878787",
                        borderRadius: "2px",
                        height: "20px",
                        boxShadow: "0 1px 0 0 #EAEAEA",
                        fontSize: "14px",
                        color: "#000",
                        lineHeight: "20px",
                        textAlign: "center",
                        marginBottom: "10px",
                        cursor: "pointer"
                    }
                },
                active: {
                    button: {
                        boxShadow: "0 0 0 1px #878787"
                    }
                }
            }, {
                active: a
            });
        return r.createElement("div", {
            style: i.button,
            onClick: t
        }, n || o)
    },
    Ji = function(e) {
        var t = e.rgb,
            n = e.currentColor,
            o = Ne({
                default: {
                    swatches: {
                        border: "1px solid #B3B3B3",
                        borderBottom: "1px solid #F0F0F0",
                        marginBottom: "2px",
                        marginTop: "1px"
                    },
                    new: {
                        height: "34px",
                        background: "rgb(" + t.r + "," + t.g + ", " + t.b + ")",
                        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
                    },
                    current: {
                        height: "34px",
                        background: n,
                        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
                    },
                    label: {
                        fontSize: "14px",
                        color: "#000",
                        textAlign: "center"
                    }
                }
            });
        return r.createElement("div", null, r.createElement("div", {
            style: o.label
        }, "new"), r.createElement("div", {
            style: o.swatches
        }, r.createElement("div", {
            style: o.new
        }), r.createElement("div", {
            style: o.current
        })), r.createElement("div", {
            style: o.label
        }, "current"))
    },
    Qi = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }();
var el = function(e) {
    function t(e) {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var r = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return r.state = {
            currentColor: e.hex
        }, r
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
    }(t, r.Component), Qi(t, [{
        key: "render",
        value: function() {
            var e = this.props,
                t = e.styles,
                n = void 0 === t ? {} : t,
                o = e.className,
                a = void 0 === o ? "" : o,
                i = Ne(nn({
                    default: {
                        picker: {
                            background: "#DCDCDC",
                            borderRadius: "4px",
                            boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
                            boxSizing: "initial",
                            width: "513px"
                        },
                        head: {
                            backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
                            borderBottom: "1px solid #B1B1B1",
                            boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
                            height: "23px",
                            lineHeight: "24px",
                            borderRadius: "4px 4px 0 0",
                            fontSize: "13px",
                            color: "#4D4D4D",
                            textAlign: "center"
                        },
                        body: {
                            padding: "15px 15px 0",
                            display: "flex"
                        },
                        saturation: {
                            width: "256px",
                            height: "256px",
                            position: "relative",
                            border: "2px solid #B3B3B3",
                            borderBottom: "2px solid #F0F0F0",
                            overflow: "hidden"
                        },
                        hue: {
                            position: "relative",
                            height: "256px",
                            width: "19px",
                            marginLeft: "10px",
                            border: "2px solid #B3B3B3",
                            borderBottom: "2px solid #F0F0F0"
                        },
                        controls: {
                            width: "180px",
                            marginLeft: "10px"
                        },
                        top: {
                            display: "flex"
                        },
                        previews: {
                            width: "60px"
                        },
                        actions: {
                            flex: "1",
                            marginLeft: "20px"
                        }
                    }
                }, n));
            return r.createElement("div", {
                style: i.picker,
                className: "photoshop-picker " + a
            }, r.createElement("div", {
                style: i.head
            }, this.props.header), r.createElement("div", {
                style: i.body,
                className: "flexbox-fix"
            }, r.createElement("div", {
                style: i.saturation
            }, r.createElement(mn, {
                hsl: this.props.hsl,
                hsv: this.props.hsv,
                pointer: Yi,
                onChange: this.props.onChange
            })), r.createElement("div", {
                style: i.hue
            }, r.createElement(at, {
                direction: "vertical",
                hsl: this.props.hsl,
                pointer: Ki,
                onChange: this.props.onChange
            })), r.createElement("div", {
                style: i.controls
            }, r.createElement("div", {
                style: i.top,
                className: "flexbox-fix"
            }, r.createElement("div", {
                style: i.previews
            }, r.createElement(Ji, {
                rgb: this.props.rgb,
                currentColor: this.state.currentColor
            })), r.createElement("div", {
                style: i.actions
            }, r.createElement(Zi, {
                label: "OK",
                onClick: this.props.onAccept,
                active: !0
            }), r.createElement(Zi, {
                label: "Cancel",
                onClick: this.props.onCancel
            }), r.createElement(qi, {
                onChange: this.props.onChange,
                rgb: this.props.rgb,
                hsv: this.props.hsv,
                hex: this.props.hex
            }))))))
        }
    }]), t
}();
el.propTypes = {
    header: o.string,
    styles: o.object
}, el.defaultProps = {
    header: "Color Picker",
    styles: {}
}, zn(el);
var tl = function(e) {
        var t = e.onChange,
            n = e.rgb,
            o = e.hsl,
            a = e.hex,
            i = e.disableAlpha,
            l = Ne({
                default: {
                    fields: {
                        display: "flex",
                        paddingTop: "4px"
                    },
                    single: {
                        flex: "1",
                        paddingLeft: "6px"
                    },
                    alpha: {
                        flex: "1",
                        paddingLeft: "6px"
                    },
                    double: {
                        flex: "2"
                    },
                    input: {
                        width: "80%",
                        padding: "4px 10% 3px",
                        border: "none",
                        boxShadow: "inset 0 0 0 1px #ccc",
                        fontSize: "11px"
                    },
                    label: {
                        display: "block",
                        textAlign: "center",
                        fontSize: "11px",
                        color: "#222",
                        paddingTop: "3px",
                        paddingBottom: "4px",
                        textTransform: "capitalize"
                    }
                },
                disableAlpha: {
                    alpha: {
                        display: "none"
                    }
                }
            }, {
                disableAlpha: i
            }),
            s = function(e, r) {
                e.hex ? Bn(e.hex) && t({
                    hex: e.hex,
                    source: "hex"
                }, r) : e.r || e.g || e.b ? t({
                    r: e.r || n.r,
                    g: e.g || n.g,
                    b: e.b || n.b,
                    a: n.a,
                    source: "rgb"
                }, r) : e.a && (e.a < 0 ? e.a = 0 : e.a > 100 && (e.a = 100), e.a /= 100, t({
                    h: o.h,
                    s: o.s,
                    l: o.l,
                    a: e.a,
                    source: "rgb"
                }, r))
            };
        return r.createElement("div", {
            style: l.fields,
            className: "flexbox-fix"
        }, r.createElement("div", {
            style: l.double
        }, r.createElement(et, {
            style: {
                input: l.input,
                label: l.label
            },
            label: "hex",
            value: a.replace("#", ""),
            onChange: s
        })), r.createElement("div", {
            style: l.single
        }, r.createElement(et, {
            style: {
                input: l.input,
                label: l.label
            },
            label: "r",
            value: n.r,
            onChange: s,
            dragLabel: "true",
            dragMax: "255"
        })), r.createElement("div", {
            style: l.single
        }, r.createElement(et, {
            style: {
                input: l.input,
                label: l.label
            },
            label: "g",
            value: n.g,
            onChange: s,
            dragLabel: "true",
            dragMax: "255"
        })), r.createElement("div", {
            style: l.single
        }, r.createElement(et, {
            style: {
                input: l.input,
                label: l.label
            },
            label: "b",
            value: n.b,
            onChange: s,
            dragLabel: "true",
            dragMax: "255"
        })), r.createElement("div", {
            style: l.alpha
        }, r.createElement(et, {
            style: {
                input: l.input,
                label: l.label
            },
            label: "a",
            value: Math.round(100 * n.a),
            onChange: s,
            dragLabel: "true",
            dragMax: "100"
        })))
    },
    rl = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    nl = function(e) {
        var t = e.colors,
            n = e.onClick,
            o = void 0 === n ? function() {} : n,
            a = e.onSwatchHover,
            i = Ne({
                default: {
                    colors: {
                        margin: "0 -10px",
                        padding: "10px 0 0 10px",
                        borderTop: "1px solid #eee",
                        display: "flex",
                        flexWrap: "wrap",
                        position: "relative"
                    },
                    swatchWrap: {
                        width: "16px",
                        height: "16px",
                        margin: "0 10px 10px 0"
                    },
                    swatch: {
                        borderRadius: "3px",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
                    }
                },
                "no-presets": {
                    colors: {
                        display: "none"
                    }
                }
            }, {
                "no-presets": !t || !t.length
            }),
            l = function(e, t) {
                o({
                    hex: e,
                    source: "hex"
                }, t)
            };
        return r.createElement("div", {
            style: i.colors,
            className: "flexbox-fix"
        }, t.map((function(e) {
            var t = "string" == typeof e ? {
                    color: e
                } : e,
                n = "" + t.color + (t.title || "");
            return r.createElement("div", {
                key: n,
                style: i.swatchWrap
            }, r.createElement(In, rl({}, t, {
                style: i.swatch,
                onClick: l,
                onHover: a,
                focusStyle: {
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + t.color
                }
            })))
        })))
    };
nl.propTypes = {
    colors: o.arrayOf(o.oneOfType([o.string, o.shape({
        color: o.string,
        title: o.string
    })])).isRequired
};
var ol = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    al = function(e) {
        var t = e.width,
            n = e.rgb,
            o = e.hex,
            a = e.hsv,
            i = e.hsl,
            l = e.onChange,
            s = e.onSwatchHover,
            c = e.disableAlpha,
            u = e.presetColors,
            p = e.renderers,
            h = e.styles,
            f = void 0 === h ? {} : h,
            d = e.className,
            b = void 0 === d ? "" : d,
            g = Ne(nn({
                default: ol({
                    picker: {
                        width: t,
                        padding: "10px 10px 0",
                        boxSizing: "initial",
                        background: "#fff",
                        borderRadius: "4px",
                        boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
                    },
                    saturation: {
                        width: "100%",
                        paddingBottom: "75%",
                        position: "relative",
                        overflow: "hidden"
                    },
                    Saturation: {
                        radius: "3px",
                        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    },
                    controls: {
                        display: "flex"
                    },
                    sliders: {
                        padding: "4px 0",
                        flex: "1"
                    },
                    color: {
                        width: "24px",
                        height: "24px",
                        position: "relative",
                        marginTop: "4px",
                        marginLeft: "4px",
                        borderRadius: "3px"
                    },
                    activeColor: {
                        absolute: "0px 0px 0px 0px",
                        borderRadius: "2px",
                        background: "rgba(" + n.r + "," + n.g + "," + n.b + "," + n.a + ")",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    },
                    hue: {
                        position: "relative",
                        height: "10px",
                        overflow: "hidden"
                    },
                    Hue: {
                        radius: "2px",
                        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    },
                    alpha: {
                        position: "relative",
                        height: "10px",
                        marginTop: "4px",
                        overflow: "hidden"
                    },
                    Alpha: {
                        radius: "2px",
                        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
                    }
                }, f),
                disableAlpha: {
                    color: {
                        height: "10px"
                    },
                    hue: {
                        height: "10px"
                    },
                    alpha: {
                        display: "none"
                    }
                }
            }, f), {
                disableAlpha: c
            });
        return r.createElement("div", {
            style: g.picker,
            className: "sketch-picker " + b
        }, r.createElement("div", {
            style: g.saturation
        }, r.createElement(mn, {
            style: g.Saturation,
            hsl: i,
            hsv: a,
            onChange: l
        })), r.createElement("div", {
            style: g.controls,
            className: "flexbox-fix"
        }, r.createElement("div", {
            style: g.sliders
        }, r.createElement("div", {
            style: g.hue
        }, r.createElement(at, {
            style: g.Hue,
            hsl: i,
            onChange: l
        })), r.createElement("div", {
            style: g.alpha
        }, r.createElement(Ke, {
            style: g.Alpha,
            rgb: n,
            hsl: i,
            renderers: p,
            onChange: l
        }))), r.createElement("div", {
            style: g.color
        }, r.createElement(Xe, null), r.createElement("div", {
            style: g.activeColor
        }))), r.createElement(tl, {
            rgb: n,
            hsl: i,
            hex: o,
            onChange: l,
            disableAlpha: c
        }), r.createElement(nl, {
            colors: u,
            onClick: l,
            onSwatchHover: s
        }))
    };
al.propTypes = {
    disableAlpha: o.bool,
    width: o.oneOfType([o.string, o.number]),
    styles: o.object
}, al.defaultProps = {
    disableAlpha: !1,
    width: 200,
    styles: {},
    presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
};
const il = zn(al);
var ll = function(e) {
        var t = e.hsl,
            n = e.offset,
            o = e.onClick,
            a = void 0 === o ? function() {} : o,
            i = e.active,
            l = e.first,
            s = e.last,
            c = Ne({
                default: {
                    swatch: {
                        height: "12px",
                        background: "hsl(" + t.h + ", 50%, " + 100 * n + "%)",
                        cursor: "pointer"
                    }
                },
                first: {
                    swatch: {
                        borderRadius: "2px 0 0 2px"
                    }
                },
                last: {
                    swatch: {
                        borderRadius: "0 2px 2px 0"
                    }
                },
                active: {
                    swatch: {
                        transform: "scaleY(1.8)",
                        borderRadius: "3.6px/2px"
                    }
                }
            }, {
                active: i,
                first: l,
                last: s
            });
        return r.createElement("div", {
            style: c.swatch,
            onClick: function(e) {
                return a({
                    h: t.h,
                    s: .5,
                    l: n,
                    source: "hsl"
                }, e)
            }
        })
    },
    sl = function(e) {
        var t = e.onClick,
            n = e.hsl,
            o = Ne({
                default: {
                    swatches: {
                        marginTop: "20px"
                    },
                    swatch: {
                        boxSizing: "border-box",
                        width: "20%",
                        paddingRight: "1px",
                        float: "left"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            }),
            a = .1;
        return r.createElement("div", {
            style: o.swatches
        }, r.createElement("div", {
            style: o.swatch
        }, r.createElement(ll, {
            hsl: n,
            offset: ".80",
            active: Math.abs(n.l - .8) < a && Math.abs(n.s - .5) < a,
            onClick: t,
            first: !0
        })), r.createElement("div", {
            style: o.swatch
        }, r.createElement(ll, {
            hsl: n,
            offset: ".65",
            active: Math.abs(n.l - .65) < a && Math.abs(n.s - .5) < a,
            onClick: t
        })), r.createElement("div", {
            style: o.swatch
        }, r.createElement(ll, {
            hsl: n,
            offset: ".50",
            active: Math.abs(n.l - .5) < a && Math.abs(n.s - .5) < a,
            onClick: t
        })), r.createElement("div", {
            style: o.swatch
        }, r.createElement(ll, {
            hsl: n,
            offset: ".35",
            active: Math.abs(n.l - .35) < a && Math.abs(n.s - .5) < a,
            onClick: t
        })), r.createElement("div", {
            style: o.swatch
        }, r.createElement(ll, {
            hsl: n,
            offset: ".20",
            active: Math.abs(n.l - .2) < a && Math.abs(n.s - .5) < a,
            onClick: t,
            last: !0
        })), r.createElement("div", {
            style: o.clear
        }))
    },
    cl = function(e) {
        var t = e.hsl,
            n = e.onChange,
            o = e.pointer,
            a = e.styles,
            i = void 0 === a ? {} : a,
            l = e.className,
            s = void 0 === l ? "" : l,
            c = Ne(nn({
                default: {
                    hue: {
                        height: "12px",
                        position: "relative"
                    },
                    Hue: {
                        radius: "2px"
                    }
                }
            }, i));
        return r.createElement("div", {
            style: c.wrap || {},
            className: "slider-picker " + s
        }, r.createElement("div", {
            style: c.hue
        }, r.createElement(at, {
            style: c.Hue,
            hsl: t,
            pointer: o,
            onChange: n
        })), r.createElement("div", {
            style: c.swatches
        }, r.createElement(sl, {
            hsl: t,
            onClick: n
        })))
    };
cl.propTypes = {
    styles: o.object
}, cl.defaultProps = {
    pointer: function() {
        var e = Ne({
            default: {
                picker: {
                    width: "14px",
                    height: "14px",
                    borderRadius: "6px",
                    transform: "translate(-7px, -1px)",
                    backgroundColor: "rgb(248, 248, 248)",
                    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                }
            }
        });
        return r.createElement("div", {
            style: e.picker
        })
    },
    styles: {}
}, zn(cl);
var ul = {};
Object.defineProperty(ul, "__esModule", {
    value: !0
});
var pl = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    hl = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(t);
var fl = ul.default = function(e) {
        var t = e.fill,
            r = void 0 === t ? "currentColor" : t,
            n = e.width,
            o = void 0 === n ? 24 : n,
            a = e.height,
            i = void 0 === a ? 24 : a,
            l = e.style,
            s = void 0 === l ? {} : l,
            c = function(e, t) {
                var r = {};
                for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                return r
            }(e, ["fill", "width", "height", "style"]);
        return hl.default.createElement("svg", pl({
            viewBox: "0 0 24 24",
            style: pl({
                fill: r,
                width: o,
                height: i
            }, s)
        }, c), hl.default.createElement("path", {
            d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
        }))
    },
    dl = function(e) {
        var t = e.color,
            n = e.onClick,
            o = void 0 === n ? function() {} : n,
            a = e.onSwatchHover,
            i = e.first,
            l = e.last,
            s = e.active,
            c = Ne({
                default: {
                    color: {
                        width: "40px",
                        height: "24px",
                        cursor: "pointer",
                        background: t,
                        marginBottom: "1px"
                    },
                    check: {
                        color: Mn(t),
                        marginLeft: "8px",
                        display: "none"
                    }
                },
                first: {
                    color: {
                        overflow: "hidden",
                        borderRadius: "2px 2px 0 0"
                    }
                },
                last: {
                    color: {
                        overflow: "hidden",
                        borderRadius: "0 0 2px 2px"
                    }
                },
                active: {
                    check: {
                        display: "block"
                    }
                },
                "color-#FFFFFF": {
                    color: {
                        boxShadow: "inset 0 0 0 1px #ddd"
                    },
                    check: {
                        color: "#333"
                    }
                },
                transparent: {
                    check: {
                        color: "#333"
                    }
                }
            }, {
                first: i,
                last: l,
                active: s,
                "color-#FFFFFF": "#FFFFFF" === t,
                transparent: "transparent" === t
            });
        return r.createElement(In, {
            color: t,
            style: c.color,
            onClick: o,
            onHover: a,
            focusStyle: {
                boxShadow: "0 0 4px " + t
            }
        }, r.createElement("div", {
            style: c.check
        }, r.createElement(fl, null)))
    },
    bl = function(e) {
        var t = e.onClick,
            n = e.onSwatchHover,
            o = e.group,
            a = e.active,
            i = Ne({
                default: {
                    group: {
                        paddingBottom: "10px",
                        width: "40px",
                        float: "left",
                        marginRight: "10px"
                    }
                }
            });
        return r.createElement("div", {
            style: i.group
        }, Io(o, (function(e, i) {
            return r.createElement(dl, {
                key: e,
                color: e,
                active: e.toLowerCase() === a,
                first: 0 === i,
                last: i === o.length - 1,
                onClick: t,
                onSwatchHover: n
            })
        })))
    },
    gl = function(e) {
        var t = e.width,
            n = e.height,
            o = e.onChange,
            a = e.onSwatchHover,
            i = e.colors,
            l = e.hex,
            s = e.styles,
            c = void 0 === s ? {} : s,
            u = e.className,
            p = void 0 === u ? "" : u,
            h = Ne(nn({
                default: {
                    picker: {
                        width: t,
                        height: n
                    },
                    overflow: {
                        height: n,
                        overflowY: "scroll"
                    },
                    body: {
                        padding: "16px 0 6px 16px"
                    },
                    clear: {
                        clear: "both"
                    }
                }
            }, c)),
            f = function(e, t) {
                return o({
                    hex: e,
                    source: "hex"
                }, t)
            };
        return r.createElement("div", {
            style: h.picker,
            className: "swatches-picker " + p
        }, r.createElement(on, null, r.createElement("div", {
            style: h.overflow
        }, r.createElement("div", {
            style: h.body
        }, Io(i, (function(e) {
            return r.createElement(bl, {
                key: e.toString(),
                group: e,
                active: l,
                onClick: f,
                onSwatchHover: a
            })
        })), r.createElement("div", {
            style: h.clear
        })))))
    };
gl.propTypes = {
    width: o.oneOfType([o.string, o.number]),
    height: o.oneOfType([o.string, o.number]),
    colors: o.arrayOf(o.arrayOf(o.string)),
    styles: o.object
}, gl.defaultProps = {
    width: 320,
    height: 240,
    colors: [
        [Zo, Ko, Yo, qo, $o],
        [ra, ta, ea, Qo, Jo],
        [la, ia, aa, oa, na],
        [ha, pa, ua, ca, sa],
        [va, ga, ba, da, fa],
        [Ea, wa, ma, ya, xa],
        [Sa, ka, ja, Ca, _a],
        [Ba, Aa, Ra, Fa, Oa],
        [za, Ha, Pa, Ta, Ma],
        ["#194D33", Ga, Na, La, Da],
        [Va, Xa, Ia, Wa, Ua],
        [Za, Ka, Ya, qa, $a],
        [ri, ti, ei, Qa, Ja],
        [li, ii, ai, oi, ni],
        [hi, pi, ui, ci, si],
        [vi, gi, bi, di, fi],
        [Ei, wi, mi, yi, xi],
        [Si, ki, ji, Ci, _i],
        ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]
    ],
    styles: {}
}, zn(gl);
var vl = function(e) {
    var t = e.onChange,
        n = e.onSwatchHover,
        o = e.hex,
        a = e.colors,
        i = e.width,
        l = e.triangle,
        s = e.styles,
        c = void 0 === s ? {} : s,
        u = e.className,
        p = void 0 === u ? "" : u,
        h = Ne(nn({
            default: {
                card: {
                    width: i,
                    background: "#fff",
                    border: "0 solid rgba(0,0,0,0.25)",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                    borderRadius: "4px",
                    position: "relative"
                },
                body: {
                    padding: "15px 9px 9px 15px"
                },
                label: {
                    fontSize: "18px",
                    color: "#fff"
                },
                triangle: {
                    width: "0px",
                    height: "0px",
                    borderStyle: "solid",
                    borderWidth: "0 9px 10px 9px",
                    borderColor: "transparent transparent #fff transparent",
                    position: "absolute"
                },
                triangleShadow: {
                    width: "0px",
                    height: "0px",
                    borderStyle: "solid",
                    borderWidth: "0 9px 10px 9px",
                    borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
                    position: "absolute"
                },
                hash: {
                    background: "#F0F0F0",
                    height: "30px",
                    width: "30px",
                    borderRadius: "4px 0 0 4px",
                    float: "left",
                    color: "#98A1A4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                input: {
                    width: "100px",
                    fontSize: "14px",
                    color: "#666",
                    border: "0px",
                    outline: "none",
                    height: "28px",
                    boxShadow: "inset 0 0 0 1px #F0F0F0",
                    boxSizing: "content-box",
                    borderRadius: "0 4px 4px 0",
                    float: "left",
                    paddingLeft: "8px"
                },
                swatch: {
                    width: "30px",
                    height: "30px",
                    float: "left",
                    borderRadius: "4px",
                    margin: "0 6px 6px 0"
                },
                clear: {
                    clear: "both"
                }
            },
            "hide-triangle": {
                triangle: {
                    display: "none"
                },
                triangleShadow: {
                    display: "none"
                }
            },
            "top-left-triangle": {
                triangle: {
                    top: "-10px",
                    left: "12px"
                },
                triangleShadow: {
                    top: "-11px",
                    left: "12px"
                }
            },
            "top-right-triangle": {
                triangle: {
                    top: "-10px",
                    right: "12px"
                },
                triangleShadow: {
                    top: "-11px",
                    right: "12px"
                }
            }
        }, c), {
            "hide-triangle": "hide" === l,
            "top-left-triangle": "top-left" === l,
            "top-right-triangle": "top-right" === l
        }),
        f = function(e, r) {
            Bn(e) && t({
                hex: e,
                source: "hex"
            }, r)
        };
    return r.createElement("div", {
        style: h.card,
        className: "twitter-picker " + p
    }, r.createElement("div", {
        style: h.triangleShadow
    }), r.createElement("div", {
        style: h.triangle
    }), r.createElement("div", {
        style: h.body
    }, Io(a, (function(e, t) {
        return r.createElement(In, {
            key: t,
            color: e,
            hex: e,
            style: h.swatch,
            onClick: f,
            onHover: n,
            focusStyle: {
                boxShadow: "0 0 4px " + e
            }
        })
    })), r.createElement("div", {
        style: h.hash
    }, "#"), r.createElement(et, {
        label: null,
        style: {
            input: h.input
        },
        value: o.replace("#", ""),
        onChange: f
    }), r.createElement("div", {
        style: h.clear
    })))
};
vl.propTypes = {
    width: o.oneOfType([o.string, o.number]),
    triangle: o.oneOf(["hide", "top-left", "top-right"]),
    colors: o.arrayOf(o.string),
    styles: o.object
}, vl.defaultProps = {
    width: 276,
    colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
    triangle: "top-left",
    styles: {}
}, zn(vl);
var xl = function(e) {
    var t = Ne({
        default: {
            picker: {
                width: "20px",
                height: "20px",
                borderRadius: "22px",
                border: "2px #fff solid",
                transform: "translate(-12px, -13px)",
                background: "hsl(" + Math.round(e.hsl.h) + ", " + Math.round(100 * e.hsl.s) + "%, " + Math.round(100 * e.hsl.l) + "%)"
            }
        }
    });
    return r.createElement("div", {
        style: t.picker
    })
};
xl.propTypes = {
    hsl: o.shape({
        h: o.number,
        s: o.number,
        l: o.number,
        a: o.number
    })
}, xl.defaultProps = {
    hsl: {
        a: 1,
        h: 249.94,
        l: .2,
        s: .5
    }
};
var yl = function(e) {
    var t = Ne({
        default: {
            picker: {
                width: "20px",
                height: "20px",
                borderRadius: "22px",
                transform: "translate(-10px, -7px)",
                background: "hsl(" + Math.round(e.hsl.h) + ", 100%, 50%)",
                border: "2px white solid"
            }
        }
    });
    return r.createElement("div", {
        style: t.picker
    })
};
yl.propTypes = {
    hsl: o.shape({
        h: o.number,
        s: o.number,
        l: o.number,
        a: o.number
    })
}, yl.defaultProps = {
    hsl: {
        a: 1,
        h: 249.94,
        l: .2,
        s: .5
    }
};
var ml = function(e) {
        var t = e.onChange,
            n = e.rgb,
            o = e.hsl,
            a = e.hex,
            i = e.hsv,
            l = function(e, r) {
                if (e.hex) Bn(e.hex) && t({
                    hex: e.hex,
                    source: "hex"
                }, r);
                else if (e.rgb) {
                    var n = e.rgb.split(",");
                    Tn(e.rgb, "rgb") && t({
                        r: n[0],
                        g: n[1],
                        b: n[2],
                        a: 1,
                        source: "rgb"
                    }, r)
                } else if (e.hsv) {
                    var o = e.hsv.split(",");
                    Tn(e.hsv, "hsv") && (o[2] = o[2].replace("%", ""), o[1] = o[1].replace("%", ""), o[0] = o[0].replace("°", ""), 1 == o[1] ? o[1] = .01 : 1 == o[2] && (o[2] = .01), t({
                        h: Number(o[0]),
                        s: Number(o[1]),
                        v: Number(o[2]),
                        source: "hsv"
                    }, r))
                } else if (e.hsl) {
                    var a = e.hsl.split(",");
                    Tn(e.hsl, "hsl") && (a[2] = a[2].replace("%", ""), a[1] = a[1].replace("%", ""), a[0] = a[0].replace("°", ""), 1 == p[1] ? p[1] = .01 : 1 == p[2] && (p[2] = .01), t({
                        h: Number(a[0]),
                        s: Number(a[1]),
                        v: Number(a[2]),
                        source: "hsl"
                    }, r))
                }
            },
            s = Ne({
                default: {
                    wrap: {
                        display: "flex",
                        height: "100px",
                        marginTop: "4px"
                    },
                    fields: {
                        width: "100%"
                    },
                    column: {
                        paddingTop: "10px",
                        display: "flex",
                        justifyContent: "space-between"
                    },
                    double: {
                        padding: "0px 4.4px",
                        boxSizing: "border-box"
                    },
                    input: {
                        width: "100%",
                        height: "38px",
                        boxSizing: "border-box",
                        padding: "4px 10% 3px",
                        textAlign: "center",
                        border: "1px solid #dadce0",
                        fontSize: "11px",
                        textTransform: "lowercase",
                        borderRadius: "5px",
                        outline: "none",
                        fontFamily: "Roboto,Arial,sans-serif"
                    },
                    input2: {
                        height: "38px",
                        width: "100%",
                        border: "1px solid #dadce0",
                        boxSizing: "border-box",
                        fontSize: "11px",
                        textTransform: "lowercase",
                        borderRadius: "5px",
                        outline: "none",
                        paddingLeft: "10px",
                        fontFamily: "Roboto,Arial,sans-serif"
                    },
                    label: {
                        textAlign: "center",
                        fontSize: "12px",
                        background: "#fff",
                        position: "absolute",
                        textTransform: "uppercase",
                        color: "#3c4043",
                        width: "35px",
                        top: "-6px",
                        left: "0",
                        right: "0",
                        marginLeft: "auto",
                        marginRight: "auto",
                        fontFamily: "Roboto,Arial,sans-serif"
                    },
                    label2: {
                        left: "10px",
                        textAlign: "center",
                        fontSize: "12px",
                        background: "#fff",
                        position: "absolute",
                        textTransform: "uppercase",
                        color: "#3c4043",
                        width: "32px",
                        top: "-6px",
                        fontFamily: "Roboto,Arial,sans-serif"
                    },
                    single: {
                        flexGrow: "1",
                        margin: "0px 4.4px"
                    }
                }
            }),
            c = n.r + ", " + n.g + ", " + n.b,
            u = Math.round(o.h) + "°, " + Math.round(100 * o.s) + "%, " + Math.round(100 * o.l) + "%",
            p = Math.round(i.h) + "°, " + Math.round(100 * i.s) + "%, " + Math.round(100 * i.v) + "%";
        return r.createElement("div", {
            style: s.wrap,
            className: "flexbox-fix"
        }, r.createElement("div", {
            style: s.fields
        }, r.createElement("div", {
            style: s.double
        }, r.createElement(et, {
            style: {
                input: s.input,
                label: s.label
            },
            label: "hex",
            value: a,
            onChange: l
        })), r.createElement("div", {
            style: s.column
        }, r.createElement("div", {
            style: s.single
        }, r.createElement(et, {
            style: {
                input: s.input2,
                label: s.label2
            },
            label: "rgb",
            value: c,
            onChange: l
        })), r.createElement("div", {
            style: s.single
        }, r.createElement(et, {
            style: {
                input: s.input2,
                label: s.label2
            },
            label: "hsv",
            value: p,
            onChange: l
        })), r.createElement("div", {
            style: s.single
        }, r.createElement(et, {
            style: {
                input: s.input2,
                label: s.label2
            },
            label: "hsl",
            value: u,
            onChange: l
        })))))
    },
    wl = function(e) {
        var t = e.width,
            n = e.onChange,
            o = e.rgb,
            a = e.hsl,
            i = e.hsv,
            l = e.hex,
            s = e.header,
            c = e.styles,
            u = void 0 === c ? {} : c,
            p = e.className,
            h = void 0 === p ? "" : p,
            f = Ne(nn({
                default: {
                    picker: {
                        width: t,
                        background: "#fff",
                        border: "1px solid #dfe1e5",
                        boxSizing: "initial",
                        display: "flex",
                        flexWrap: "wrap",
                        borderRadius: "8px 8px 0px 0px"
                    },
                    head: {
                        height: "57px",
                        width: "100%",
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        paddingLeft: "16px",
                        fontSize: "20px",
                        boxSizing: "border-box",
                        fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif"
                    },
                    saturation: {
                        width: "70%",
                        padding: "0px",
                        position: "relative",
                        overflow: "hidden"
                    },
                    swatch: {
                        width: "30%",
                        height: "228px",
                        padding: "0px",
                        background: "rgba(" + o.r + ", " + o.g + ", " + o.b + ", 1)",
                        position: "relative",
                        overflow: "hidden"
                    },
                    body: {
                        margin: "auto",
                        width: "95%"
                    },
                    controls: {
                        display: "flex",
                        boxSizing: "border-box",
                        height: "52px",
                        paddingTop: "22px"
                    },
                    color: {
                        width: "32px"
                    },
                    hue: {
                        height: "8px",
                        position: "relative",
                        margin: "0px 16px 0px 16px",
                        width: "100%"
                    },
                    Hue: {
                        radius: "2px"
                    }
                }
            }, u));
        return r.createElement("div", {
            style: f.picker,
            className: "google-picker " + h
        }, r.createElement("div", {
            style: f.head
        }, s), r.createElement("div", {
            style: f.swatch
        }), r.createElement("div", {
            style: f.saturation
        }, r.createElement(mn, {
            hsl: a,
            hsv: i,
            pointer: xl,
            onChange: n
        })), r.createElement("div", {
            style: f.body
        }, r.createElement("div", {
            style: f.controls,
            className: "flexbox-fix"
        }, r.createElement("div", {
            style: f.hue
        }, r.createElement(at, {
            style: f.Hue,
            hsl: a,
            radius: "4px",
            pointer: yl,
            onChange: n
        }))), r.createElement(ml, {
            rgb: o,
            hsl: a,
            hex: l,
            hsv: i,
            onChange: n
        })))
    };
wl.propTypes = {
    width: o.oneOfType([o.string, o.number]),
    styles: o.object,
    header: o.string
}, wl.defaultProps = {
    width: 652,
    styles: {},
    header: "Color picker"
}, zn(wl);
const El = ({
        onClick: e,
        ...t
    }) => n.jsxs("div", {
        className: a("bg-dark-900 rounded-lg flex items-center cursor-pointer", {
            "w-8 h-8 justify-center": !t.children,
            "p-4 justify-between": t.children
        }),
        children: [n.jsx("div", {
            className: a(" flex items-center justify-center", {
                "h-8 w-8": !t.children
            }),
            onClick: e,
            children: n.jsxs("svg", {
                width: 16,
                height: 16,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...t,
                children: [n.jsx("circle", {
                    cx: 8.001,
                    cy: 1.778,
                    r: 1.778,
                    fill: "#B072FF"
                }), n.jsx("circle", {
                    cx: 12.446,
                    cy: 3.556,
                    r: 1.778,
                    fill: "#FF7673"
                }), n.jsx("circle", {
                    cx: 14.223,
                    cy: 8,
                    r: 1.778,
                    fill: "#FFBB5C"
                }), n.jsx("circle", {
                    cx: 12.446,
                    cy: 12.444,
                    r: 1.778,
                    fill: "#FFD74E"
                }), n.jsx("circle", {
                    cx: 8.001,
                    cy: 14.222,
                    r: 1.778,
                    fill: "#6DE194"
                }), n.jsx("circle", {
                    cx: 3.556,
                    cy: 12.444,
                    r: 1.778,
                    fill: "#63ECDB"
                }), n.jsx("circle", {
                    cx: 1.779,
                    cy: 8,
                    r: 1.778,
                    fill: "#5ACFF5"
                }), n.jsx("circle", {
                    cx: 3.556,
                    cy: 3.556,
                    r: 1.778,
                    fill: "#70B1FF"
                })]
            })
        }), t.children]
    }),
    _l = ["#FFFFFF", "#607D8A", "#FF7673", "#FFBB5C", "#FFD74E", "#6DE194", "#63ECDB", "#5ACFF5", "#70B1FF", "#B072FF"],
    Cl = ({
        color: e,
        onChange: r,
        showPalette: o,
        className: c
    }) => {
        const {
            guild: u,
            isPremium: f
        } = i(), [d, b] = t.useState(u?.colors_history ?? []), [g, v] = t.useState(!1), [x, y] = t.useState(w(e)), m = t.useRef(null);
        return p((() => r(E(x))), [x]), p((() => b(u?.colors_history ?? [])), [u?.colors_history]), p((() => {
            if (!g && u) {
                if (_l.includes(x)) return;
                let e = Array.from(new Set([x, ...d]));
                e = e.slice(0, 20), l.updateGuild(u.id, {
                    colors_history: e
                })
            }
        }), [g]), h(m, (() => v(!1))), n.jsxs("div", {
            ref: m,
            className: `relative ${c}`,
            children: [n.jsx(El, {
                onClick: () => v(!g),
                children: o ? n.jsx(jl, {
                    colors: _l,
                    onChange: y,
                    currentColor: x.toUpperCase()
                }) : null
            }), g && n.jsxs("div", {
                className: a("w-[270px] rounded-lg border border-solid border-dark-900 bg-dark-800 shadow-lg p-4 absolute bottom-0 left-0 z-10 transform grid grid-cols-1 gap-5 transition-all duration-200 translate-y-[calc(100%+6px)]", {
                    "pointer-events-none opacity-0": !g
                }),
                children: [n.jsxs("div", {
                    children: [n.jsx("p", {
                        className: "text-dark-100 text-sm font-semibold mb-2",
                        children: n.jsx(s, {
                            id: "color_picker.discord.title"
                        })
                    }), n.jsx("div", {
                        className: "grid grid-cols-10 gap-2",
                        children: n.jsx(jl, {
                            colors: _l,
                            onChange: y,
                            currentColor: x
                        })
                    })]
                }), (d.length > 0 || f) && n.jsxs("div", {
                    children: [n.jsx("p", {
                        className: "text-dark-100 text-sm font-semibold mb-2",
                        children: n.jsx(s, {
                            id: "color_picker.history.title"
                        })
                    }), n.jsx("div", {
                        className: "grid grid-cols-10 gap-2",
                        children: n.jsx(jl, {
                            colors: f ? [w(u?.default_embed_color), ...d] : d,
                            onChange: y,
                            currentColor: x
                        })
                    })]
                }), n.jsx(il, {
                    color: x,
                    className: "custom-color-picker",
                    onChange: ({
                        hex: e
                    }) => y(e)
                })]
            })]
        })
    },
    jl = ({
        colors: e,
        currentColor: t,
        onChange: r
    }) => n.jsx(n.Fragment, {
        children: e.map((e => n.jsx("div", {
            className: a("w-[18px] h-[18px] rounded-full flex items-center justify-center cursor-pointer ring-[2px] ring-dark-800 hover:ring-dark-900 border-[1px] border-solid border-dark-800", {
                "ring-dark-200 hover:ring-dark-200": e === t
            }),
            style: {
                backgroundColor: e
            },
            onClick: () => r(e),
            children: t === e && n.jsx(_, {
                className: "text-dark-100 h-2 w-2"
            })
        }, e)))
    });
export {
    Cl as C, oe as _, q as m
};
