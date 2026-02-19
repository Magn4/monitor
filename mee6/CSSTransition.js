import {
    I as t,
    az as e,
    b8 as n,
    aA as s
} from "./index-684a1b71.js";
import {
    _ as i
} from "./objectWithoutPropertiesLoose-87a5ea27.js";

function a(t, e) {
    return t.replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
}
const o = !1,
    r = t.createContext(null);
var p = function(t) {
        return t.scrollTop
    },
    l = function(s) {
        function a(t, e) {
            var n;
            n = s.call(this, t, e) || this;
            var i, a = e && !e.isMounting ? t.enter : t.appear;
            return n.appearStatus = null, t.in ? a ? (i = "exited", n.appearStatus = "entering") : i = "entered" : i = t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited", n.state = {
                status: i
            }, n.nextCallback = null, n
        }
        e(a, s), a.getDerivedStateFromProps = function(t, e) {
            return t.in && "unmounted" === e.status ? {
                status: "exited"
            } : null
        };
        var l = a.prototype;
        return l.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
        }, l.componentDidUpdate = function(t) {
            var e = null;
            if (t !== this.props) {
                var n = this.state.status;
                this.props.in ? "entering" !== n && "entered" !== n && (e = "entering") : "entering" !== n && "entered" !== n || (e = "exiting")
            }
            this.updateStatus(!1, e)
        }, l.componentWillUnmount = function() {
            this.cancelNextCallback()
        }, l.getTimeouts = function() {
            var t, e, n, s = this.props.timeout;
            return t = e = n = s, null != s && "number" != typeof s && (t = s.exit, e = s.enter, n = void 0 !== s.appear ? s.appear : e), {
                exit: t,
                enter: e,
                appear: n
            }
        }, l.updateStatus = function(t, e) {
            if (void 0 === t && (t = !1), null !== e)
                if (this.cancelNextCallback(), "entering" === e) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                        var s = this.props.nodeRef ? this.props.nodeRef.current : n.findDOMNode(this);
                        s && p(s)
                    }
                    this.performEnter(t)
                } else this.performExit();
            else this.props.unmountOnExit && "exited" === this.state.status && this.setState({
                status: "unmounted"
            })
        }, l.performEnter = function(t) {
            var e = this,
                s = this.props.enter,
                i = this.context ? this.context.isMounting : t,
                a = this.props.nodeRef ? [i] : [n.findDOMNode(this), i],
                r = a[0],
                p = a[1],
                l = this.getTimeouts(),
                u = i ? l.appear : l.enter;
            !t && !s || o ? this.safeSetState({
                status: "entered"
            }, (function() {
                e.props.onEntered(r)
            })) : (this.props.onEnter(r, p), this.safeSetState({
                status: "entering"
            }, (function() {
                e.props.onEntering(r, p), e.onTransitionEnd(u, (function() {
                    e.safeSetState({
                        status: "entered"
                    }, (function() {
                        e.props.onEntered(r, p)
                    }))
                }))
            })))
        }, l.performExit = function() {
            var t = this,
                e = this.props.exit,
                s = this.getTimeouts(),
                i = this.props.nodeRef ? void 0 : n.findDOMNode(this);
            e && !o ? (this.props.onExit(i), this.safeSetState({
                status: "exiting"
            }, (function() {
                t.props.onExiting(i), t.onTransitionEnd(s.exit, (function() {
                    t.safeSetState({
                        status: "exited"
                    }, (function() {
                        t.props.onExited(i)
                    }))
                }))
            }))) : this.safeSetState({
                status: "exited"
            }, (function() {
                t.props.onExited(i)
            }))
        }, l.cancelNextCallback = function() {
            null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
        }, l.safeSetState = function(t, e) {
            e = this.setNextCallback(e), this.setState(t, e)
        }, l.setNextCallback = function(t) {
            var e = this,
                n = !0;
            return this.nextCallback = function(s) {
                n && (n = !1, e.nextCallback = null, t(s))
            }, this.nextCallback.cancel = function() {
                n = !1
            }, this.nextCallback
        }, l.onTransitionEnd = function(t, e) {
            this.setNextCallback(e);
            var s = this.props.nodeRef ? this.props.nodeRef.current : n.findDOMNode(this),
                i = null == t && !this.props.addEndListener;
            if (s && !i) {
                if (this.props.addEndListener) {
                    var a = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback],
                        o = a[0],
                        r = a[1];
                    this.props.addEndListener(o, r)
                }
                null != t && setTimeout(this.nextCallback, t)
            } else setTimeout(this.nextCallback, 0)
        }, l.render = function() {
            var e = this.state.status;
            if ("unmounted" === e) return null;
            var n = this.props,
                s = n.children;
            n.in, n.mountOnEnter, n.unmountOnExit, n.appear, n.enter, n.exit, n.timeout, n.addEndListener, n.onEnter, n.onEntering, n.onEntered, n.onExit, n.onExiting, n.onExited, n.nodeRef;
            var a = i(n, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return t.createElement(r.Provider, {
                value: null
            }, "function" == typeof s ? s(e, a) : t.cloneElement(t.Children.only(s), a))
        }, a
    }(t.Component);

function u() {}
l.contextType = r, l.propTypes = {}, l.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: u,
    onEntering: u,
    onEntered: u,
    onExit: u,
    onExiting: u,
    onExited: u
}, l.UNMOUNTED = "unmounted", l.EXITED = "exited", l.ENTERING = "entering", l.ENTERED = "entered", l.EXITING = "exiting";
const c = l;
var d = function(t, e) {
        return t && e && e.split(" ").forEach((function(e) {
            return s = e, void((n = t).classList ? n.classList.add(s) : function(t, e) {
                return t.classList ? !!e && t.classList.contains(e) : -1 !== (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + e + " ")
            }(n, s) || ("string" == typeof n.className ? n.className = n.className + " " + s : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + s)));
            var n, s
        }))
    },
    E = function(t, e) {
        return t && e && e.split(" ").forEach((function(e) {
            return s = e, void((n = t).classList ? n.classList.remove(s) : "string" == typeof n.className ? n.className = a(n.className, s) : n.setAttribute("class", a(n.className && n.className.baseVal || "", s)));
            var n, s
        }))
    },
    f = function(n) {
        function a() {
            for (var t, e = arguments.length, s = new Array(e), i = 0; i < e; i++) s[i] = arguments[i];
            return (t = n.call.apply(n, [this].concat(s)) || this).appliedClasses = {
                appear: {},
                enter: {},
                exit: {}
            }, t.onEnter = function(e, n) {
                var s = t.resolveArguments(e, n),
                    i = s[0],
                    a = s[1];
                t.removeClasses(i, "exit"), t.addClass(i, a ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, n)
            }, t.onEntering = function(e, n) {
                var s = t.resolveArguments(e, n),
                    i = s[0],
                    a = s[1] ? "appear" : "enter";
                t.addClass(i, a, "active"), t.props.onEntering && t.props.onEntering(e, n)
            }, t.onEntered = function(e, n) {
                var s = t.resolveArguments(e, n),
                    i = s[0],
                    a = s[1] ? "appear" : "enter";
                t.removeClasses(i, a), t.addClass(i, a, "done"), t.props.onEntered && t.props.onEntered(e, n)
            }, t.onExit = function(e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "appear"), t.removeClasses(n, "enter"), t.addClass(n, "exit", "base"), t.props.onExit && t.props.onExit(e)
            }, t.onExiting = function(e) {
                var n = t.resolveArguments(e)[0];
                t.addClass(n, "exit", "active"), t.props.onExiting && t.props.onExiting(e)
            }, t.onExited = function(e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "exit"), t.addClass(n, "exit", "done"), t.props.onExited && t.props.onExited(e)
            }, t.resolveArguments = function(e, n) {
                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n]
            }, t.getClassNames = function(e) {
                var n = t.props.classNames,
                    s = "string" == typeof n,
                    i = s ? "" + (s && n ? n + "-" : "") + e : n[e];
                return {
                    baseClassName: i,
                    activeClassName: s ? i + "-active" : n[e + "Active"],
                    doneClassName: s ? i + "-done" : n[e + "Done"]
                }
            }, t
        }
        e(a, n);
        var o = a.prototype;
        return o.addClass = function(t, e, n) {
            var s = this.getClassNames(e)[n + "ClassName"],
                i = this.getClassNames("enter").doneClassName;
            "appear" === e && "done" === n && i && (s += " " + i), "active" === n && t && p(t), s && (this.appliedClasses[e][n] = s, d(t, s))
        }, o.removeClasses = function(t, e) {
            var n = this.appliedClasses[e],
                s = n.base,
                i = n.active,
                a = n.done;
            this.appliedClasses[e] = {}, s && E(t, s), i && E(t, i), a && E(t, a)
        }, o.render = function() {
            var e = this.props;
            e.classNames;
            var n = i(e, ["classNames"]);
            return t.createElement(c, s({}, n, {
                onEnter: this.onEnter,
                onEntered: this.onEntered,
                onEntering: this.onEntering,
                onExit: this.onExit,
                onExiting: this.onExiting,
                onExited: this.onExited
            }))
        }, a
    }(t.Component);
f.defaultProps = {
    classNames: ""
}, f.propTypes = {};
const x = f;
export {
    x as C
};
