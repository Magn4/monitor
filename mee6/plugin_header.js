import {
    e,
    I as n,
    P as t,
    Q as r,
    r as o,
    b as i,
    z as l,
    j as u,
    ar as a,
    a as s,
    bc as c,
    F as f,
    f as p,
    u as d,
    B as h
} from "./index-afe8eeea.js";
import {
    T as m
} from "./toggle-4564d8ab.js";
import {
    e as g,
    v as y,
    aU as x,
    aQ as k,
    w as b
} from "./app-ba64cf70.js";
import {
    W as v
} from "./modal.constants-0cca4730.js";
import {
    a as w,
    u as S
} from "./usePluginConfig-89887833.js";
import {
    R as C
} from "./Loader2-e1b3d35e.js";
import {
    i as E,
    e as A
} from "./index-79f014f4.js";
const F = ["http", "https", "mailto", "tel"];

function T(e) {
    const n = (e || "").trim(),
        t = n.charAt(0);
    if ("#" === t || "/" === t) return n;
    const r = n.indexOf(":");
    if (-1 === r) return n;
    let o = -1;
    for (; ++o < F.length;) {
        const e = F[o];
        if (r === e.length && n.slice(0, e.length).toLowerCase() === e) return n
    }
    return o = n.indexOf("?"), -1 !== o && r > o ? n : (o = n.indexOf("#"), -1 !== o && r > o ? n : "javascript:void(0)")
}

function D(e) {
    return e && "object" == typeof e ? "position" in e || "type" in e ? L(e.position) : "start" in e || "end" in e ? L(e) : "line" in e || "column" in e ? P(e) : "" : ""
}

function P(e) {
    return I(e && e.line) + ":" + I(e && e.column)
}

function L(e) {
    return P(e && e.start) + "-" + P(e && e.end)
}

function I(e) {
    return e && "number" == typeof e ? e : 1
}
class O extends Error {
    constructor(e, n, t) {
        const r = [null, null];
        let o = {
            start: {
                line: null,
                column: null
            },
            end: {
                line: null,
                column: null
            }
        };
        if (super(), "string" == typeof n && (t = n, n = void 0), "string" == typeof t) {
            const e = t.indexOf(":"); - 1 === e ? r[1] = t : (r[0] = t.slice(0, e), r[1] = t.slice(e + 1))
        }
        n && ("type" in n || "position" in n ? n.position && (o = n.position) : "start" in n || "end" in n ? o = n : ("line" in n || "column" in n) && (o.start = n)), this.name = D(n) || "1:1", this.message = "object" == typeof e ? e.message : e, this.stack = "", "object" == typeof e && e.stack && (this.stack = e.stack), this.reason = this.message, this.fatal, this.line = o.start.line, this.column = o.start.column, this.position = o, this.source = r[0], this.ruleId = r[1], this.file, this.actual, this.expected, this.url, this.note
    }
}
O.prototype.file = "", O.prototype.name = "", O.prototype.reason = "", O.prototype.message = "", O.prototype.stack = "", O.prototype.fatal = null, O.prototype.column = null, O.prototype.line = null, O.prototype.source = null, O.prototype.ruleId = null, O.prototype.position = null;
const z = {
    basename: function(e, n) {
        if (void 0 !== n && "string" != typeof n) throw new TypeError('"ext" argument must be a string');
        j(e);
        let t, r = 0,
            o = -1,
            i = e.length;
        if (void 0 === n || 0 === n.length || n.length > e.length) {
            for (; i--;)
                if (47 === e.charCodeAt(i)) {
                    if (t) {
                        r = i + 1;
                        break
                    }
                } else o < 0 && (t = !0, o = i + 1);
            return o < 0 ? "" : e.slice(r, o)
        }
        if (n === e) return "";
        let l = -1,
            u = n.length - 1;
        for (; i--;)
            if (47 === e.charCodeAt(i)) {
                if (t) {
                    r = i + 1;
                    break
                }
            } else l < 0 && (t = !0, l = i + 1), u > -1 && (e.charCodeAt(i) === n.charCodeAt(u--) ? u < 0 && (o = i) : (u = -1, o = l));
        r === o ? o = l : o < 0 && (o = e.length);
        return e.slice(r, o)
    },
    dirname: function(e) {
        if (j(e), 0 === e.length) return ".";
        let n, t = -1,
            r = e.length;
        for (; --r;)
            if (47 === e.charCodeAt(r)) {
                if (n) {
                    t = r;
                    break
                }
            } else n || (n = !0);
        return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t)
    },
    extname: function(e) {
        j(e);
        let n, t = e.length,
            r = -1,
            o = 0,
            i = -1,
            l = 0;
        for (; t--;) {
            const u = e.charCodeAt(t);
            if (47 !== u) r < 0 && (n = !0, r = t + 1), 46 === u ? i < 0 ? i = t : 1 !== l && (l = 1) : i > -1 && (l = -1);
            else if (n) {
                o = t + 1;
                break
            }
        }
        if (i < 0 || r < 0 || 0 === l || 1 === l && i === r - 1 && i === o + 1) return "";
        return e.slice(i, r)
    },
    join: function(...e) {
        let n, t = -1;
        for (; ++t < e.length;) j(e[t]), e[t] && (n = void 0 === n ? e[t] : n + "/" + e[t]);
        return void 0 === n ? "." : function(e) {
            j(e);
            const n = 47 === e.charCodeAt(0);
            let t = function(e, n) {
                let t, r, o = "",
                    i = 0,
                    l = -1,
                    u = 0,
                    a = -1;
                for (; ++a <= e.length;) {
                    if (a < e.length) t = e.charCodeAt(a);
                    else {
                        if (47 === t) break;
                        t = 47
                    }
                    if (47 === t) {
                        if (l === a - 1 || 1 === u);
                        else if (l !== a - 1 && 2 === u) {
                            if (o.length < 2 || 2 !== i || 46 !== o.charCodeAt(o.length - 1) || 46 !== o.charCodeAt(o.length - 2))
                                if (o.length > 2) {
                                    if (r = o.lastIndexOf("/"), r !== o.length - 1) {
                                        r < 0 ? (o = "", i = 0) : (o = o.slice(0, r), i = o.length - 1 - o.lastIndexOf("/")), l = a, u = 0;
                                        continue
                                    }
                                } else if (o.length > 0) {
                                o = "", i = 0, l = a, u = 0;
                                continue
                            }
                            n && (o = o.length > 0 ? o + "/.." : "..", i = 2)
                        } else o.length > 0 ? o += "/" + e.slice(l + 1, a) : o = e.slice(l + 1, a), i = a - l - 1;
                        l = a, u = 0
                    } else 46 === t && u > -1 ? u++ : u = -1
                }
                return o
            }(e, !n);
            0 !== t.length || n || (t = ".");
            t.length > 0 && 47 === e.charCodeAt(e.length - 1) && (t += "/");
            return n ? "/" + t : t
        }(n)
    },
    sep: "/"
};

function j(e) {
    if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
}
const N = {
    cwd: function() {
        return "/"
    }
};

function M(e) {
    return null !== e && "object" == typeof e && e.href && e.origin
}

function B(e) {
    if ("string" == typeof e) e = new URL(e);
    else if (!M(e)) {
        const n = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
        throw n.code = "ERR_INVALID_ARG_TYPE", n
    }
    if ("file:" !== e.protocol) {
        const e = new TypeError("The URL must be of scheme file");
        throw e.code = "ERR_INVALID_URL_SCHEME", e
    }
    return function(e) {
        if ("" !== e.hostname) {
            const e = new TypeError('File URL host must be "localhost" or empty on darwin');
            throw e.code = "ERR_INVALID_FILE_URL_HOST", e
        }
        const n = e.pathname;
        let t = -1;
        for (; ++t < n.length;)
            if (37 === n.charCodeAt(t) && 50 === n.charCodeAt(t + 1)) {
                const e = n.charCodeAt(t + 2);
                if (70 === e || 102 === e) {
                    const e = new TypeError("File URL path must not include encoded / characters");
                    throw e.code = "ERR_INVALID_FILE_URL_PATH", e
                }
            } return decodeURIComponent(n)
    }(e)
}
const R = ["history", "path", "basename", "stem", "extname", "dirname"];
class _ {
    constructor(e) {
        let n;
        n = e ? "string" == typeof e || function(e) {
            return E(e)
        }(e) ? {
            value: e
        } : M(e) ? {
            path: e
        } : e : {}, this.data = {}, this.messages = [], this.history = [], this.cwd = N.cwd(), this.value, this.stored, this.result, this.map;
        let t, r = -1;
        for (; ++r < R.length;) {
            const e = R[r];
            e in n && void 0 !== n[e] && null !== n[e] && (this[e] = "history" === e ? [...n[e]] : n[e])
        }
        for (t in n) R.includes(t) || (this[t] = n[t])
    }
    get path() {
        return this.history[this.history.length - 1]
    }
    set path(e) {
        M(e) && (e = B(e)), U(e, "path"), this.path !== e && this.history.push(e)
    }
    get dirname() {
        return "string" == typeof this.path ? z.dirname(this.path) : void 0
    }
    set dirname(e) {
        q(this.basename, "dirname"), this.path = z.join(e || "", this.basename)
    }
    get basename() {
        return "string" == typeof this.path ? z.basename(this.path) : void 0
    }
    set basename(e) {
        U(e, "basename"), H(e, "basename"), this.path = z.join(this.dirname || "", e)
    }
    get extname() {
        return "string" == typeof this.path ? z.extname(this.path) : void 0
    }
    set extname(e) {
        if (H(e, "extname"), q(this.dirname, "extname"), e) {
            if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`");
            if (e.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
        }
        this.path = z.join(this.dirname, this.stem + (e || ""))
    }
    get stem() {
        return "string" == typeof this.path ? z.basename(this.path, this.extname) : void 0
    }
    set stem(e) {
        U(e, "stem"), H(e, "stem"), this.path = z.join(this.dirname || "", e + (this.extname || ""))
    }
    toString(e) {
        return (this.value || "").toString(e || void 0)
    }
    message(e, n, t) {
        const r = new O(e, n, t);
        return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r
    }
    info(e, n, t) {
        const r = this.message(e, n, t);
        return r.fatal = null, r
    }
    fail(e, n, t) {
        const r = this.message(e, n, t);
        throw r.fatal = !0, r
    }
}

function H(e, n) {
    if (e && e.includes(z.sep)) throw new Error("`" + n + "` cannot be a path: did not expect `" + z.sep + "`")
}

function U(e, n) {
    if (!e) throw new Error("`" + n + "` cannot be empty")
}

function q(e, n) {
    if (!e) throw new Error("Setting `" + n + "` requires `path` to be set too")
}

function V(e) {
    if (e) throw e
}

function $(e) {
    if ("object" != typeof e || null === e) return !1;
    const n = Object.getPrototypeOf(e);
    return !(null !== n && n !== Object.prototype && null !== Object.getPrototypeOf(n) || Symbol.toStringTag in e || Symbol.iterator in e)
}

function W() {
    const e = [],
        n = {
            run: function(...n) {
                let t = -1;
                const r = n.pop();
                if ("function" != typeof r) throw new TypeError("Expected function as last argument, not " + r);
                ! function o(i, ...l) {
                    const u = e[++t];
                    let a = -1;
                    if (i) r(i);
                    else {
                        for (; ++a < n.length;) null !== l[a] && void 0 !== l[a] || (l[a] = n[a]);
                        n = l, u ? function(e, n) {
                            let t;
                            return r;

                            function r(...n) {
                                const r = e.length > n.length;
                                let u;
                                r && n.push(o);
                                try {
                                    u = e.apply(this, n)
                                } catch (i) {
                                    const n = i;
                                    if (r && t) throw n;
                                    return o(n)
                                }
                                r || (u instanceof Promise ? u.then(l, o) : u instanceof Error ? o(u) : l(u))
                            }

                            function o(e, ...r) {
                                t || (t = !0, n(e, ...r))
                            }

                            function l(e) {
                                o(null, e)
                            }
                        }(u, o)(...l) : r(null, ...l)
                    }
                }(null, ...n)
            },
            use: function(t) {
                if ("function" != typeof t) throw new TypeError("Expected `middelware` to be a function, not " + t);
                return e.push(t), n
            }
        };
    return n
}
const Q = function e() {
        const n = W(),
            t = [];
        let r, o = {},
            i = -1;
        return l.data = function(e, n) {
            if ("string" == typeof e) return 2 === arguments.length ? (G("data", r), o[e] = n, l) : Y.call(o, e) && o[e] || null;
            if (e) return G("data", r), o = e, l;
            return o
        }, l.Parser = void 0, l.Compiler = void 0, l.freeze = function() {
            if (r) return l;
            for (; ++i < t.length;) {
                const [e, ...r] = t[i];
                if (!1 === r[0]) continue;
                !0 === r[0] && (r[0] = void 0);
                const o = e.call(l, ...r);
                "function" == typeof o && n.use(o)
            }
            return r = !0, i = Number.POSITIVE_INFINITY, l
        }, l.attachers = t, l.use = function(e, ...n) {
            let i;
            if (G("use", r), null == e);
            else if ("function" == typeof e) c(e, ...n);
            else {
                if ("object" != typeof e) throw new TypeError("Expected usable value, not `" + e + "`");
                Array.isArray(e) ? s(e) : a(e)
            }
            i && (o.settings = Object.assign(o.settings || {}, i));
            return l;

            function u(e) {
                if ("function" == typeof e) c(e);
                else {
                    if ("object" != typeof e) throw new TypeError("Expected usable value, not `" + e + "`");
                    if (Array.isArray(e)) {
                        const [n, ...t] = e;
                        c(n, ...t)
                    } else a(e)
                }
            }

            function a(e) {
                s(e.plugins), e.settings && (i = Object.assign(i || {}, e.settings))
            }

            function s(e) {
                let n = -1;
                if (null == e);
                else {
                    if (!Array.isArray(e)) throw new TypeError("Expected a list of plugins, not `" + e + "`");
                    for (; ++n < e.length;) {
                        u(e[n])
                    }
                }
            }

            function c(e, n) {
                let r, o = -1;
                for (; ++o < t.length;)
                    if (t[o][0] === e) {
                        r = t[o];
                        break
                    } r ? ($(r[1]) && $(n) && (n = A(!0, r[1], n)), r[1] = n) : t.push([...arguments])
            }
        }, l.parse = function(e) {
            l.freeze();
            const n = ne(e),
                t = l.Parser;
            if (X("parse", t), K(t, "parse")) return new t(String(n), n).parse();
            return t(String(n), n)
        }, l.stringify = function(e, n) {
            l.freeze();
            const t = ne(n),
                r = l.Compiler;
            if (Z("stringify", r), J(e), K(r, "compile")) return new r(e, t).compile();
            return r(e, t)
        }, l.run = function(e, t, r) {
            J(e), l.freeze(), r || "function" != typeof t || (r = t, t = void 0);
            if (!r) return new Promise(o);

            function o(o, i) {
                function l(n, t, l) {
                    t = t || e, n ? i(n) : o ? o(t) : r(null, t, l)
                }
                n.run(e, ne(t), l)
            }
            o(null, r)
        }, l.runSync = function(e, n) {
            let t, r;
            return l.run(e, n, o), ee("runSync", "run", r), t;

            function o(e, n) {
                V(e), t = n, r = !0
            }
        }, l.process = function(e, n) {
            if (l.freeze(), X("process", l.Parser), Z("process", l.Compiler), !n) return new Promise(t);

            function t(t, r) {
                const o = ne(e);

                function i(e, o) {
                    e || !o ? r(e) : t ? t(o) : n(null, o)
                }
                l.run(l.parse(o), o, ((e, n, t) => {
                    if (!e && n && t) {
                        const o = l.stringify(n, t);
                        null == o || ("string" == typeof(r = o) || E(r) ? t.value = o : t.result = o), i(e, t)
                    } else i(e);
                    var r
                }))
            }
            t(null, n)
        }, l.processSync = function(e) {
            let n;
            l.freeze(), X("processSync", l.Parser), Z("processSync", l.Compiler);
            const t = ne(e);
            return l.process(t, r), ee("processSync", "process", n), t;

            function r(e) {
                n = !0, V(e)
            }
        }, l;

        function l() {
            const n = e();
            let r = -1;
            for (; ++r < t.length;) n.use(...t[r]);
            return n.data(A(!0, {}, o)), n
        }
    }().freeze(),
    Y = {}.hasOwnProperty;

function K(e, n) {
    return "function" == typeof e && e.prototype && (function(e) {
        let n;
        for (n in e)
            if (Y.call(e, n)) return !0;
        return !1
    }(e.prototype) || n in e.prototype)
}

function X(e, n) {
    if ("function" != typeof n) throw new TypeError("Cannot `" + e + "` without `Parser`")
}

function Z(e, n) {
    if ("function" != typeof n) throw new TypeError("Cannot `" + e + "` without `Compiler`")
}

function G(e, n) {
    if (n) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
}

function J(e) {
    if (!$(e) || "string" != typeof e.type) throw new TypeError("Expected node, got `" + e + "`")
}

function ee(e, n, t) {
    if (!t) throw new Error("`" + e + "` finished async. Use `" + n + "` instead")
}

function ne(e) {
    return function(e) {
        return Boolean(e && "object" == typeof e && "message" in e && "messages" in e)
    }(e) ? e : new _(e)
}
const te = {};

function re(e, n, t) {
    if (function(e) {
            return Boolean(e && "object" == typeof e)
        }(e)) {
        if ("value" in e) return "html" !== e.type || t ? e.value : "";
        if (n && "alt" in e && e.alt) return e.alt;
        if ("children" in e) return oe(e.children, n, t)
    }
    return Array.isArray(e) ? oe(e, n, t) : ""
}

function oe(e, n, t) {
    const r = [];
    let o = -1;
    for (; ++o < e.length;) r[o] = re(e[o], n, t);
    return r.join("")
}

function ie(e, n, t, r) {
    const o = e.length;
    let i, l = 0;
    if (n = n < 0 ? -n > o ? 0 : o + n : n > o ? o : n, t = t > 0 ? t : 0, r.length < 1e4) i = Array.from(r), i.unshift(n, t), e.splice(...i);
    else
        for (t && e.splice(n, t); l < r.length;) i = r.slice(l, l + 1e4), i.unshift(n, 0), e.splice(...i), l += 1e4, n += 1e4
}

function le(e, n) {
    return e.length > 0 ? (ie(e, e.length, 0, n), e) : n
}
const ue = {}.hasOwnProperty;

function ae(e, n) {
    let t;
    for (t in n) {
        const r = (ue.call(e, t) ? e[t] : void 0) || (e[t] = {}),
            o = n[t];
        let i;
        if (o)
            for (i in o) {
                ue.call(r, i) || (r[i] = []);
                const e = o[i];
                se(r[i], Array.isArray(e) ? e : e ? [e] : [])
            }
    }
}

function se(e, n) {
    let t = -1;
    const r = [];
    for (; ++t < n.length;)("after" === n[t].add ? e : r).push(n[t]);
    ie(e, 0, 0, r)
}
const ce = we(/[A-Za-z]/),
    fe = we(/[\dA-Za-z]/),
    pe = we(/[#-'*+\--9=?A-Z^-~]/);

function de(e) {
    return null !== e && (e < 32 || 127 === e)
}
const he = we(/\d/),
    me = we(/[\dA-Fa-f]/),
    ge = we(/[!-/:-@[-`{-~]/);

function ye(e) {
    return null !== e && e < -2
}

function xe(e) {
    return null !== e && (e < 0 || 32 === e)
}

function ke(e) {
    return -2 === e || -1 === e || 32 === e
}
const be = we(/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/),
    ve = we(/\s/);

function we(e) {
    return function(n) {
        return null !== n && e.test(String.fromCharCode(n))
    }
}

function Se(e, n, t, r) {
    const o = r ? r - 1 : Number.POSITIVE_INFINITY;
    let i = 0;
    return function(r) {
        if (ke(r)) return e.enter(t), l(r);
        return n(r)
    };

    function l(r) {
        return ke(r) && i++ < o ? (e.consume(r), l) : (e.exit(t), n(r))
    }
}
const Ce = {
    tokenize: function(e) {
        const n = e.attempt(this.parser.constructs.contentInitial, (function(t) {
            if (null === t) return void e.consume(t);
            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), Se(e, n, "linePrefix")
        }), (function(n) {
            return e.enter("paragraph"), r(n)
        }));
        let t;
        return n;

        function r(n) {
            const r = e.enter("chunkText", {
                contentType: "text",
                previous: t
            });
            return t && (t.next = r), t = r, o(n)
        }

        function o(n) {
            return null === n ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(n)) : ye(n) ? (e.consume(n), e.exit("chunkText"), r) : (e.consume(n), o)
        }
    }
};
const Ee = {
        tokenize: function(e) {
            const n = this,
                t = [];
            let r, o, i, l = 0;
            return u;

            function u(r) {
                if (l < t.length) {
                    const o = t[l];
                    return n.containerState = o[1], e.attempt(o[0].continuation, a, s)(r)
                }
                return s(r)
            }

            function a(e) {
                if (l++, n.containerState._closeFlow) {
                    n.containerState._closeFlow = void 0, r && x();
                    const t = n.events.length;
                    let o, i = t;
                    for (; i--;)
                        if ("exit" === n.events[i][0] && "chunkFlow" === n.events[i][1].type) {
                            o = n.events[i][1].end;
                            break
                        } y(l);
                    let u = t;
                    for (; u < n.events.length;) n.events[u][1].end = Object.assign({}, o), u++;
                    return ie(n.events, i + 1, 0, n.events.slice(t)), n.events.length = u, s(e)
                }
                return u(e)
            }

            function s(o) {
                if (l === t.length) {
                    if (!r) return p(o);
                    if (r.currentConstruct && r.currentConstruct.concrete) return h(o);
                    n.interrupt = Boolean(r.currentConstruct && !r._gfmTableDynamicInterruptHack)
                }
                return n.containerState = {}, e.check(Ae, c, f)(o)
            }

            function c(e) {
                return r && x(), y(l), p(e)
            }

            function f(e) {
                return n.parser.lazy[n.now().line] = l !== t.length, i = n.now().offset, h(e)
            }

            function p(t) {
                return n.containerState = {}, e.attempt(Ae, d, h)(t)
            }

            function d(e) {
                return l++, t.push([n.currentConstruct, n.containerState]), p(e)
            }

            function h(t) {
                return null === t ? (r && x(), y(0), void e.consume(t)) : (r = r || n.parser.flow(n.now()), e.enter("chunkFlow", {
                    contentType: "flow",
                    previous: o,
                    _tokenizer: r
                }), m(t))
            }

            function m(t) {
                return null === t ? (g(e.exit("chunkFlow"), !0), y(0), void e.consume(t)) : ye(t) ? (e.consume(t), g(e.exit("chunkFlow")), l = 0, n.interrupt = void 0, u) : (e.consume(t), m)
            }

            function g(e, t) {
                const u = n.sliceStream(e);
                if (t && u.push(null), e.previous = o, o && (o.next = e), o = e, r.defineSkip(e.start), r.write(u), n.parser.lazy[e.start.line]) {
                    let e = r.events.length;
                    for (; e--;)
                        if (r.events[e][1].start.offset < i && (!r.events[e][1].end || r.events[e][1].end.offset > i)) return;
                    const t = n.events.length;
                    let o, u, a = t;
                    for (; a--;)
                        if ("exit" === n.events[a][0] && "chunkFlow" === n.events[a][1].type) {
                            if (o) {
                                u = n.events[a][1].end;
                                break
                            }
                            o = !0
                        } for (y(l), e = t; e < n.events.length;) n.events[e][1].end = Object.assign({}, u), e++;
                    ie(n.events, a + 1, 0, n.events.slice(t)), n.events.length = e
                }
            }

            function y(r) {
                let o = t.length;
                for (; o-- > r;) {
                    const r = t[o];
                    n.containerState = r[1], r[0].exit.call(n, e)
                }
                t.length = r
            }

            function x() {
                r.write([null]), o = void 0, r = void 0, n.containerState._closeFlow = void 0
            }
        }
    },
    Ae = {
        tokenize: function(e, n, t) {
            return Se(e, e.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
        }
    };

function Fe(e) {
    return null === e || xe(e) || ve(e) ? 1 : be(e) ? 2 : void 0
}

function Te(e, n, t) {
    const r = [];
    let o = -1;
    for (; ++o < e.length;) {
        const i = e[o].resolveAll;
        i && !r.includes(i) && (n = i(n, t), r.push(i))
    }
    return n
}
const De = {
    name: "attention",
    tokenize: function(e, n) {
        const t = this.parser.constructs.attentionMarkers.null,
            r = this.previous,
            o = Fe(r);
        let i;
        return function(n) {
            return i = n, e.enter("attentionSequence"), l(n)
        };

        function l(u) {
            if (u === i) return e.consume(u), l;
            const a = e.exit("attentionSequence"),
                s = Fe(u),
                c = !s || 2 === s && o || t.includes(u),
                f = !o || 2 === o && s || t.includes(r);
            return a._open = Boolean(42 === i ? c : c && (o || !f)), a._close = Boolean(42 === i ? f : f && (s || !c)), n(u)
        }
    },
    resolveAll: function(e, n) {
        let t, r, o, i, l, u, a, s, c = -1;
        for (; ++c < e.length;)
            if ("enter" === e[c][0] && "attentionSequence" === e[c][1].type && e[c][1]._close)
                for (t = c; t--;)
                    if ("exit" === e[t][0] && "attentionSequence" === e[t][1].type && e[t][1]._open && n.sliceSerialize(e[t][1]).charCodeAt(0) === n.sliceSerialize(e[c][1]).charCodeAt(0)) {
                        if ((e[t][1]._close || e[c][1]._open) && (e[c][1].end.offset - e[c][1].start.offset) % 3 && !((e[t][1].end.offset - e[t][1].start.offset + e[c][1].end.offset - e[c][1].start.offset) % 3)) continue;
                        u = e[t][1].end.offset - e[t][1].start.offset > 1 && e[c][1].end.offset - e[c][1].start.offset > 1 ? 2 : 1;
                        const f = Object.assign({}, e[t][1].end),
                            p = Object.assign({}, e[c][1].start);
                        Pe(f, -u), Pe(p, u), i = {
                            type: u > 1 ? "strongSequence" : "emphasisSequence",
                            start: f,
                            end: Object.assign({}, e[t][1].end)
                        }, l = {
                            type: u > 1 ? "strongSequence" : "emphasisSequence",
                            start: Object.assign({}, e[c][1].start),
                            end: p
                        }, o = {
                            type: u > 1 ? "strongText" : "emphasisText",
                            start: Object.assign({}, e[t][1].end),
                            end: Object.assign({}, e[c][1].start)
                        }, r = {
                            type: u > 1 ? "strong" : "emphasis",
                            start: Object.assign({}, i.start),
                            end: Object.assign({}, l.end)
                        }, e[t][1].end = Object.assign({}, i.start), e[c][1].start = Object.assign({}, l.end), a = [], e[t][1].end.offset - e[t][1].start.offset && (a = le(a, [
                            ["enter", e[t][1], n],
                            ["exit", e[t][1], n]
                        ])), a = le(a, [
                            ["enter", r, n],
                            ["enter", i, n],
                            ["exit", i, n],
                            ["enter", o, n]
                        ]), a = le(a, Te(n.parser.constructs.insideSpan.null, e.slice(t + 1, c), n)), a = le(a, [
                            ["exit", o, n],
                            ["enter", l, n],
                            ["exit", l, n],
                            ["exit", r, n]
                        ]), e[c][1].end.offset - e[c][1].start.offset ? (s = 2, a = le(a, [
                            ["enter", e[c][1], n],
                            ["exit", e[c][1], n]
                        ])) : s = 0, ie(e, t - 1, c - t + 3, a), c = t + a.length - s - 2;
                        break
                    } c = -1;
        for (; ++c < e.length;) "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
        return e
    }
};

function Pe(e, n) {
    e.column += n, e.offset += n, e._bufferIndex += n
}
const Le = {
    name: "autolink",
    tokenize: function(e, n, t) {
        let r = 0;
        return function(n) {
            return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o
        };

        function o(n) {
            return ce(n) ? (e.consume(n), i) : a(n)
        }

        function i(e) {
            return 43 === e || 45 === e || 46 === e || fe(e) ? (r = 1, l(e)) : a(e)
        }

        function l(n) {
            return 58 === n ? (e.consume(n), r = 0, u) : (43 === n || 45 === n || 46 === n || fe(n)) && r++ < 32 ? (e.consume(n), l) : (r = 0, a(n))
        }

        function u(r) {
            return 62 === r ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), n) : null === r || 32 === r || 60 === r || de(r) ? t(r) : (e.consume(r), u)
        }

        function a(n) {
            return 64 === n ? (e.consume(n), s) : pe(n) ? (e.consume(n), a) : t(n)
        }

        function s(e) {
            return fe(e) ? c(e) : t(e)
        }

        function c(t) {
            return 46 === t ? (e.consume(t), r = 0, s) : 62 === t ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.exit("autolink"), n) : f(t)
        }

        function f(n) {
            if ((45 === n || fe(n)) && r++ < 63) {
                const t = 45 === n ? f : c;
                return e.consume(n), t
            }
            return t(n)
        }
    }
};
const Ie = {
    tokenize: function(e, n, t) {
        return function(n) {
            return ke(n) ? Se(e, r, "linePrefix")(n) : r(n)
        };

        function r(e) {
            return null === e || ye(e) ? n(e) : t(e)
        }
    },
    partial: !0
};
const Oe = {
    name: "blockQuote",
    tokenize: function(e, n, t) {
        const r = this;
        return function(n) {
            if (62 === n) {
                const t = r.containerState;
                return t.open || (e.enter("blockQuote", {
                    _container: !0
                }), t.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(n), e.exit("blockQuoteMarker"), o
            }
            return t(n)
        };

        function o(t) {
            return ke(t) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(t), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(t))
        }
    },
    continuation: {
        tokenize: function(e, n, t) {
            const r = this;
            return function(n) {
                if (ke(n)) return Se(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(n);
                return o(n)
            };

            function o(r) {
                return e.attempt(Oe, n, t)(r)
            }
        }
    },
    exit: function(e) {
        e.exit("blockQuote")
    }
};
const ze = {
    name: "characterEscape",
    tokenize: function(e, n, t) {
        return function(n) {
            return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(n), e.exit("escapeMarker"), r
        };

        function r(r) {
            return ge(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(r)
        }
    }
};
const je = document.createElement("i");

function Ne(e) {
    const n = "&" + e + ";";
    je.innerHTML = n;
    const t = je.textContent;
    return (59 !== t.charCodeAt(t.length - 1) || "semi" === e) && (t !== n && t)
}
const Me = {
    name: "characterReference",
    tokenize: function(e, n, t) {
        const r = this;
        let o, i, l = 0;
        return function(n) {
            return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(n), e.exit("characterReferenceMarker"), u
        };

        function u(n) {
            return 35 === n ? (e.enter("characterReferenceMarkerNumeric"), e.consume(n), e.exit("characterReferenceMarkerNumeric"), a) : (e.enter("characterReferenceValue"), o = 31, i = fe, s(n))
        }

        function a(n) {
            return 88 === n || 120 === n ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(n), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, i = me, s) : (e.enter("characterReferenceValue"), o = 7, i = he, s(n))
        }

        function s(u) {
            if (59 === u && l) {
                const o = e.exit("characterReferenceValue");
                return i !== fe || Ne(r.sliceSerialize(o)) ? (e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), e.exit("characterReference"), n) : t(u)
            }
            return i(u) && l++ < o ? (e.consume(u), s) : t(u)
        }
    }
};
const Be = {
        tokenize: function(e, n, t) {
            const r = this;
            return function(n) {
                if (null === n) return t(n);
                return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o
            };

            function o(e) {
                return r.parser.lazy[r.now().line] ? t(e) : n(e)
            }
        },
        partial: !0
    },
    Re = {
        name: "codeFenced",
        tokenize: function(e, n, t) {
            const r = this,
                o = {
                    tokenize: function(e, n, t) {
                        let o = 0;
                        return l;

                        function l(n) {
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), a
                        }

                        function a(n) {
                            return e.enter("codeFencedFence"), ke(n) ? Se(e, s, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(n) : s(n)
                        }

                        function s(n) {
                            return n === i ? (e.enter("codeFencedFenceSequence"), c(n)) : t(n)
                        }

                        function c(n) {
                            return n === i ? (o++, e.consume(n), c) : o >= u ? (e.exit("codeFencedFenceSequence"), ke(n) ? Se(e, f, "whitespace")(n) : f(n)) : t(n)
                        }

                        function f(r) {
                            return null === r || ye(r) ? (e.exit("codeFencedFence"), n(r)) : t(r)
                        }
                    },
                    partial: !0
                };
            let i, l = 0,
                u = 0;
            return function(n) {
                return function(n) {
                    const t = r.events[r.events.length - 1];
                    return l = t && "linePrefix" === t[1].type ? t[2].sliceSerialize(t[1], !0).length : 0, i = n, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), a(n)
                }(n)
            };

            function a(n) {
                return n === i ? (u++, e.consume(n), a) : u < 3 ? t(n) : (e.exit("codeFencedFenceSequence"), ke(n) ? Se(e, s, "whitespace")(n) : s(n))
            }

            function s(t) {
                return null === t || ye(t) ? (e.exit("codeFencedFence"), r.interrupt ? n(t) : e.check(Be, d, x)(t)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                    contentType: "string"
                }), c(t))
            }

            function c(n) {
                return null === n || ye(n) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), s(n)) : ke(n) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), Se(e, f, "whitespace")(n)) : 96 === n && n === i ? t(n) : (e.consume(n), c)
            }

            function f(n) {
                return null === n || ye(n) ? s(n) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                    contentType: "string"
                }), p(n))
            }

            function p(n) {
                return null === n || ye(n) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), s(n)) : 96 === n && n === i ? t(n) : (e.consume(n), p)
            }

            function d(n) {
                return e.attempt(o, x, h)(n)
            }

            function h(n) {
                return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), m
            }

            function m(n) {
                return l > 0 && ke(n) ? Se(e, g, "linePrefix", l + 1)(n) : g(n)
            }

            function g(n) {
                return null === n || ye(n) ? e.check(Be, d, x)(n) : (e.enter("codeFlowValue"), y(n))
            }

            function y(n) {
                return null === n || ye(n) ? (e.exit("codeFlowValue"), g(n)) : (e.consume(n), y)
            }

            function x(t) {
                return e.exit("codeFenced"), n(t)
            }
        },
        concrete: !0
    };
const _e = {
        name: "codeIndented",
        tokenize: function(e, n, t) {
            const r = this;
            return function(n) {
                return e.enter("codeIndented"), Se(e, o, "linePrefix", 5)(n)
            };

            function o(e) {
                const n = r.events[r.events.length - 1];
                return n && "linePrefix" === n[1].type && n[2].sliceSerialize(n[1], !0).length >= 4 ? i(e) : t(e)
            }

            function i(n) {
                return null === n ? u(n) : ye(n) ? e.attempt(He, i, u)(n) : (e.enter("codeFlowValue"), l(n))
            }

            function l(n) {
                return null === n || ye(n) ? (e.exit("codeFlowValue"), i(n)) : (e.consume(n), l)
            }

            function u(t) {
                return e.exit("codeIndented"), n(t)
            }
        }
    },
    He = {
        tokenize: function(e, n, t) {
            const r = this;
            return o;

            function o(n) {
                return r.parser.lazy[r.now().line] ? t(n) : ye(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o) : Se(e, i, "linePrefix", 5)(n)
            }

            function i(e) {
                const i = r.events[r.events.length - 1];
                return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? n(e) : ye(e) ? o(e) : t(e)
            }
        },
        partial: !0
    };
const Ue = {
    name: "codeText",
    tokenize: function(e, n, t) {
        let r, o, i = 0;
        return function(n) {
            return e.enter("codeText"), e.enter("codeTextSequence"), l(n)
        };

        function l(n) {
            return 96 === n ? (e.consume(n), i++, l) : (e.exit("codeTextSequence"), u(n))
        }

        function u(n) {
            return null === n ? t(n) : 32 === n ? (e.enter("space"), e.consume(n), e.exit("space"), u) : 96 === n ? (o = e.enter("codeTextSequence"), r = 0, s(n)) : ye(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), u) : (e.enter("codeTextData"), a(n))
        }

        function a(n) {
            return null === n || 32 === n || 96 === n || ye(n) ? (e.exit("codeTextData"), u(n)) : (e.consume(n), a)
        }

        function s(t) {
            return 96 === t ? (e.consume(t), r++, s) : r === i ? (e.exit("codeTextSequence"), e.exit("codeText"), n(t)) : (o.type = "codeTextData", a(t))
        }
    },
    resolve: function(e) {
        let n, t, r = e.length - 4,
            o = 3;
        if (!("lineEnding" !== e[o][1].type && "space" !== e[o][1].type || "lineEnding" !== e[r][1].type && "space" !== e[r][1].type))
            for (n = o; ++n < r;)
                if ("codeTextData" === e[n][1].type) {
                    e[o][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", o += 2, r -= 2;
                    break
                } n = o - 1, r++;
        for (; ++n <= r;) void 0 === t ? n !== r && "lineEnding" !== e[n][1].type && (t = n) : n !== r && "lineEnding" !== e[n][1].type || (e[t][1].type = "codeTextData", n !== t + 2 && (e[t][1].end = e[n - 1][1].end, e.splice(t + 2, n - t - 2), r -= n - t - 2, n = t + 2), t = void 0);
        return e
    },
    previous: function(e) {
        return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
    }
};

function qe(e) {
    const n = {};
    let t, r, o, i, l, u, a, s = -1;
    for (; ++s < e.length;) {
        for (; s in n;) s = n[s];
        if (t = e[s], s && "chunkFlow" === t[1].type && "listItemPrefix" === e[s - 1][1].type && (u = t[1]._tokenizer.events, o = 0, o < u.length && "lineEndingBlank" === u[o][1].type && (o += 2), o < u.length && "content" === u[o][1].type))
            for (; ++o < u.length && "content" !== u[o][1].type;) "chunkText" === u[o][1].type && (u[o][1]._isInFirstContentOfListItem = !0, o++);
        if ("enter" === t[0]) t[1].contentType && (Object.assign(n, Ve(e, s)), s = n[s], a = !0);
        else if (t[1]._container) {
            for (o = s, r = void 0; o-- && (i = e[o], "lineEnding" === i[1].type || "lineEndingBlank" === i[1].type);) "enter" === i[0] && (r && (e[r][1].type = "lineEndingBlank"), i[1].type = "lineEnding", r = o);
            r && (t[1].end = Object.assign({}, e[r][1].start), l = e.slice(r, s), l.unshift(t), ie(e, r, s - r + 1, l))
        }
    }
    return !a
}

function Ve(e, n) {
    const t = e[n][1],
        r = e[n][2];
    let o = n - 1;
    const i = [],
        l = t._tokenizer || r.parser[t.contentType](t.start),
        u = l.events,
        a = [],
        s = {};
    let c, f, p = -1,
        d = t,
        h = 0,
        m = 0;
    const g = [m];
    for (; d;) {
        for (; e[++o][1] !== d;);
        i.push(o), d._tokenizer || (c = r.sliceStream(d), d.next || c.push(null), f && l.defineSkip(d.start), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(c), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), f = d, d = d.next
    }
    for (d = t; ++p < u.length;) "exit" === u[p][0] && "enter" === u[p - 1][0] && u[p][1].type === u[p - 1][1].type && u[p][1].start.line !== u[p][1].end.line && (m = p + 1, g.push(m), d._tokenizer = void 0, d.previous = void 0, d = d.next);
    for (l.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : g.pop(), p = g.length; p--;) {
        const n = u.slice(g[p], g[p + 1]),
            t = i.pop();
        a.unshift([t, t + n.length - 1]), ie(e, t, 2, n)
    }
    for (p = -1; ++p < a.length;) s[h + a[p][0]] = h + a[p][1], h += a[p][1] - a[p][0] - 1;
    return s
}
const $e = {
        tokenize: function(e, n) {
            let t;
            return function(n) {
                return e.enter("content"), t = e.enter("chunkContent", {
                    contentType: "content"
                }), r(n)
            };

            function r(n) {
                return null === n ? o(n) : ye(n) ? e.check(We, i, o)(n) : (e.consume(n), r)
            }

            function o(t) {
                return e.exit("chunkContent"), e.exit("content"), n(t)
            }

            function i(n) {
                return e.consume(n), e.exit("chunkContent"), t.next = e.enter("chunkContent", {
                    contentType: "content",
                    previous: t
                }), t = t.next, r
            }
        },
        resolve: function(e) {
            return qe(e), e
        }
    },
    We = {
        tokenize: function(e, n, t) {
            const r = this;
            return function(n) {
                return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Se(e, o, "linePrefix")
            };

            function o(o) {
                if (null === o || ye(o)) return t(o);
                const i = r.events[r.events.length - 1];
                return !r.parser.constructs.disable.null.includes("codeIndented") && i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? n(o) : e.interrupt(r.parser.constructs.flow, t, n)(o)
            }
        },
        partial: !0
    };

function Qe(e, n, t, r, o, i, l, u, a) {
    const s = a || Number.POSITIVE_INFINITY;
    let c = 0;
    return function(n) {
        if (60 === n) return e.enter(r), e.enter(o), e.enter(i), e.consume(n), e.exit(i), f;
        if (null === n || 32 === n || 41 === n || de(n)) return t(n);
        return e.enter(r), e.enter(l), e.enter(u), e.enter("chunkString", {
            contentType: "string"
        }), h(n)
    };

    function f(t) {
        return 62 === t ? (e.enter(i), e.consume(t), e.exit(i), e.exit(o), e.exit(r), n) : (e.enter(u), e.enter("chunkString", {
            contentType: "string"
        }), p(t))
    }

    function p(n) {
        return 62 === n ? (e.exit("chunkString"), e.exit(u), f(n)) : null === n || 60 === n || ye(n) ? t(n) : (e.consume(n), 92 === n ? d : p)
    }

    function d(n) {
        return 60 === n || 62 === n || 92 === n ? (e.consume(n), p) : p(n)
    }

    function h(o) {
        return c || null !== o && 41 !== o && !xe(o) ? c < s && 40 === o ? (e.consume(o), c++, h) : 41 === o ? (e.consume(o), c--, h) : null === o || 32 === o || 40 === o || de(o) ? t(o) : (e.consume(o), 92 === o ? m : h) : (e.exit("chunkString"), e.exit(u), e.exit(l), e.exit(r), n(o))
    }

    function m(n) {
        return 40 === n || 41 === n || 92 === n ? (e.consume(n), h) : h(n)
    }
}

function Ye(e, n, t, r, o, i) {
    const l = this;
    let u, a = 0;
    return function(n) {
        return e.enter(r), e.enter(o), e.consume(n), e.exit(o), e.enter(i), s
    };

    function s(f) {
        return a > 999 || null === f || 91 === f || 93 === f && !u || 94 === f && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? t(f) : 93 === f ? (e.exit(i), e.enter(o), e.consume(f), e.exit(o), e.exit(r), n) : ye(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), s) : (e.enter("chunkString", {
            contentType: "string"
        }), c(f))
    }

    function c(n) {
        return null === n || 91 === n || 93 === n || ye(n) || a++ > 999 ? (e.exit("chunkString"), s(n)) : (e.consume(n), u || (u = !ke(n)), 92 === n ? f : c)
    }

    function f(n) {
        return 91 === n || 92 === n || 93 === n ? (e.consume(n), a++, c) : c(n)
    }
}

function Ke(e, n, t, r, o, i) {
    let l;
    return function(n) {
        if (34 === n || 39 === n || 40 === n) return e.enter(r), e.enter(o), e.consume(n), e.exit(o), l = 40 === n ? 41 : n, u;
        return t(n)
    };

    function u(t) {
        return t === l ? (e.enter(o), e.consume(t), e.exit(o), e.exit(r), n) : (e.enter(i), a(t))
    }

    function a(n) {
        return n === l ? (e.exit(i), u(l)) : null === n ? t(n) : ye(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Se(e, a, "linePrefix")) : (e.enter("chunkString", {
            contentType: "string"
        }), s(n))
    }

    function s(n) {
        return n === l || null === n || ye(n) ? (e.exit("chunkString"), a(n)) : (e.consume(n), 92 === n ? c : s)
    }

    function c(n) {
        return n === l || 92 === n ? (e.consume(n), s) : s(n)
    }
}

function Xe(e, n) {
    let t;
    return function r(o) {
        if (ye(o)) return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t = !0, r;
        if (ke(o)) return Se(e, r, t ? "linePrefix" : "lineSuffix")(o);
        return n(o)
    }
}

function Ze(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
}
const Ge = {
        name: "definition",
        tokenize: function(e, n, t) {
            const r = this;
            let o;
            return function(n) {
                return e.enter("definition"),
                    function(n) {
                        return Ye.call(r, e, i, t, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(n)
                    }(n)
            };

            function i(n) {
                return o = Ze(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), 58 === n ? (e.enter("definitionMarker"), e.consume(n), e.exit("definitionMarker"), l) : t(n)
            }

            function l(n) {
                return xe(n) ? Xe(e, u)(n) : u(n)
            }

            function u(n) {
                return Qe(e, a, t, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(n)
            }

            function a(n) {
                return e.attempt(Je, s, s)(n)
            }

            function s(n) {
                return ke(n) ? Se(e, c, "whitespace")(n) : c(n)
            }

            function c(i) {
                return null === i || ye(i) ? (e.exit("definition"), r.parser.defined.push(o), n(i)) : t(i)
            }
        }
    },
    Je = {
        tokenize: function(e, n, t) {
            return function(n) {
                return xe(n) ? Xe(e, r)(n) : t(n)
            };

            function r(n) {
                return Ke(e, o, t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(n)
            }

            function o(n) {
                return ke(n) ? Se(e, i, "whitespace")(n) : i(n)
            }

            function i(e) {
                return null === e || ye(e) ? n(e) : t(e)
            }
        },
        partial: !0
    };
const en = {
    name: "hardBreakEscape",
    tokenize: function(e, n, t) {
        return function(n) {
            return e.enter("hardBreakEscape"), e.consume(n), r
        };

        function r(r) {
            return ye(r) ? (e.exit("hardBreakEscape"), n(r)) : t(r)
        }
    }
};
const nn = {
    name: "headingAtx",
    tokenize: function(e, n, t) {
        let r = 0;
        return function(n) {
            return e.enter("atxHeading"),
                function(n) {
                    return e.enter("atxHeadingSequence"), o(n)
                }(n)
        };

        function o(n) {
            return 35 === n && r++ < 6 ? (e.consume(n), o) : null === n || xe(n) ? (e.exit("atxHeadingSequence"), i(n)) : t(n)
        }

        function i(t) {
            return 35 === t ? (e.enter("atxHeadingSequence"), l(t)) : null === t || ye(t) ? (e.exit("atxHeading"), n(t)) : ke(t) ? Se(e, i, "whitespace")(t) : (e.enter("atxHeadingText"), u(t))
        }

        function l(n) {
            return 35 === n ? (e.consume(n), l) : (e.exit("atxHeadingSequence"), i(n))
        }

        function u(n) {
            return null === n || 35 === n || xe(n) ? (e.exit("atxHeadingText"), i(n)) : (e.consume(n), u)
        }
    },
    resolve: function(e, n) {
        let t, r, o = e.length - 2,
            i = 3;
        "whitespace" === e[i][1].type && (i += 2);
        o - 2 > i && "whitespace" === e[o][1].type && (o -= 2);
        "atxHeadingSequence" === e[o][1].type && (i === o - 1 || o - 4 > i && "whitespace" === e[o - 2][1].type) && (o -= i + 1 === o ? 2 : 4);
        o > i && (t = {
            type: "atxHeadingText",
            start: e[i][1].start,
            end: e[o][1].end
        }, r = {
            type: "chunkText",
            start: e[i][1].start,
            end: e[o][1].end,
            contentType: "text"
        }, ie(e, i, o - i + 1, [
            ["enter", t, n],
            ["enter", r, n],
            ["exit", r, n],
            ["exit", t, n]
        ]));
        return e
    }
};
const tn = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
    rn = ["pre", "script", "style", "textarea"],
    on = {
        name: "htmlFlow",
        tokenize: function(e, n, t) {
            const r = this;
            let o, i, l, u, a;
            return function(n) {
                return function(n) {
                    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), s
                }(n)
            };

            function s(u) {
                return 33 === u ? (e.consume(u), c) : 47 === u ? (e.consume(u), i = !0, d) : 63 === u ? (e.consume(u), o = 3, r.interrupt ? n : z) : ce(u) ? (e.consume(u), l = String.fromCharCode(u), h) : t(u)
            }

            function c(i) {
                return 45 === i ? (e.consume(i), o = 2, f) : 91 === i ? (e.consume(i), o = 5, u = 0, p) : ce(i) ? (e.consume(i), o = 4, r.interrupt ? n : z) : t(i)
            }

            function f(o) {
                return 45 === o ? (e.consume(o), r.interrupt ? n : z) : t(o)
            }

            function p(o) {
                const i = "CDATA[";
                return o === i.charCodeAt(u++) ? (e.consume(o), u === i.length ? r.interrupt ? n : A : p) : t(o)
            }

            function d(n) {
                return ce(n) ? (e.consume(n), l = String.fromCharCode(n), h) : t(n)
            }

            function h(u) {
                if (null === u || 47 === u || 62 === u || xe(u)) {
                    const a = 47 === u,
                        s = l.toLowerCase();
                    return a || i || !rn.includes(s) ? tn.includes(l.toLowerCase()) ? (o = 6, a ? (e.consume(u), m) : r.interrupt ? n(u) : A(u)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(u) : i ? g(u) : y(u)) : (o = 1, r.interrupt ? n(u) : A(u))
                }
                return 45 === u || fe(u) ? (e.consume(u), l += String.fromCharCode(u), h) : t(u)
            }

            function m(o) {
                return 62 === o ? (e.consume(o), r.interrupt ? n : A) : t(o)
            }

            function g(n) {
                return ke(n) ? (e.consume(n), g) : C(n)
            }

            function y(n) {
                return 47 === n ? (e.consume(n), C) : 58 === n || 95 === n || ce(n) ? (e.consume(n), x) : ke(n) ? (e.consume(n), y) : C(n)
            }

            function x(n) {
                return 45 === n || 46 === n || 58 === n || 95 === n || fe(n) ? (e.consume(n), x) : k(n)
            }

            function k(n) {
                return 61 === n ? (e.consume(n), b) : ke(n) ? (e.consume(n), k) : y(n)
            }

            function b(n) {
                return null === n || 60 === n || 61 === n || 62 === n || 96 === n ? t(n) : 34 === n || 39 === n ? (e.consume(n), a = n, v) : ke(n) ? (e.consume(n), b) : w(n)
            }

            function v(n) {
                return n === a ? (e.consume(n), a = null, S) : null === n || ye(n) ? t(n) : (e.consume(n), v)
            }

            function w(n) {
                return null === n || 34 === n || 39 === n || 47 === n || 60 === n || 61 === n || 62 === n || 96 === n || xe(n) ? k(n) : (e.consume(n), w)
            }

            function S(e) {
                return 47 === e || 62 === e || ke(e) ? y(e) : t(e)
            }

            function C(n) {
                return 62 === n ? (e.consume(n), E) : t(n)
            }

            function E(n) {
                return null === n || ye(n) ? A(n) : ke(n) ? (e.consume(n), E) : t(n)
            }

            function A(n) {
                return 45 === n && 2 === o ? (e.consume(n), P) : 60 === n && 1 === o ? (e.consume(n), L) : 62 === n && 4 === o ? (e.consume(n), j) : 63 === n && 3 === o ? (e.consume(n), z) : 93 === n && 5 === o ? (e.consume(n), O) : !ye(n) || 6 !== o && 7 !== o ? null === n || ye(n) ? (e.exit("htmlFlowData"), F(n)) : (e.consume(n), A) : (e.exit("htmlFlowData"), e.check(ln, N, F)(n))
            }

            function F(n) {
                return e.check(un, T, N)(n)
            }

            function T(n) {
                return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), D
            }

            function D(n) {
                return null === n || ye(n) ? F(n) : (e.enter("htmlFlowData"), A(n))
            }

            function P(n) {
                return 45 === n ? (e.consume(n), z) : A(n)
            }

            function L(n) {
                return 47 === n ? (e.consume(n), l = "", I) : A(n)
            }

            function I(n) {
                if (62 === n) {
                    const t = l.toLowerCase();
                    return rn.includes(t) ? (e.consume(n), j) : A(n)
                }
                return ce(n) && l.length < 8 ? (e.consume(n), l += String.fromCharCode(n), I) : A(n)
            }

            function O(n) {
                return 93 === n ? (e.consume(n), z) : A(n)
            }

            function z(n) {
                return 62 === n ? (e.consume(n), j) : 45 === n && 2 === o ? (e.consume(n), z) : A(n)
            }

            function j(n) {
                return null === n || ye(n) ? (e.exit("htmlFlowData"), N(n)) : (e.consume(n), j)
            }

            function N(t) {
                return e.exit("htmlFlow"), n(t)
            }
        },
        resolveTo: function(e) {
            let n = e.length;
            for (; n-- && ("enter" !== e[n][0] || "htmlFlow" !== e[n][1].type););
            n > 1 && "linePrefix" === e[n - 2][1].type && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2));
            return e
        },
        concrete: !0
    },
    ln = {
        tokenize: function(e, n, t) {
            return function(r) {
                return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(Ie, n, t)
            }
        },
        partial: !0
    },
    un = {
        tokenize: function(e, n, t) {
            const r = this;
            return function(n) {
                if (ye(n)) return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o;
                return t(n)
            };

            function o(e) {
                return r.parser.lazy[r.now().line] ? t(e) : n(e)
            }
        },
        partial: !0
    };
const an = {
    name: "htmlText",
    tokenize: function(e, n, t) {
        const r = this;
        let o, i, l;
        return function(n) {
            return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(n), u
        };

        function u(n) {
            return 33 === n ? (e.consume(n), a) : 47 === n ? (e.consume(n), b) : 63 === n ? (e.consume(n), x) : ce(n) ? (e.consume(n), S) : t(n)
        }

        function a(n) {
            return 45 === n ? (e.consume(n), s) : 91 === n ? (e.consume(n), i = 0, d) : ce(n) ? (e.consume(n), y) : t(n)
        }

        function s(n) {
            return 45 === n ? (e.consume(n), p) : t(n)
        }

        function c(n) {
            return null === n ? t(n) : 45 === n ? (e.consume(n), f) : ye(n) ? (l = c, I(n)) : (e.consume(n), c)
        }

        function f(n) {
            return 45 === n ? (e.consume(n), p) : c(n)
        }

        function p(e) {
            return 62 === e ? L(e) : 45 === e ? f(e) : c(e)
        }

        function d(n) {
            const r = "CDATA[";
            return n === r.charCodeAt(i++) ? (e.consume(n), i === r.length ? h : d) : t(n)
        }

        function h(n) {
            return null === n ? t(n) : 93 === n ? (e.consume(n), m) : ye(n) ? (l = h, I(n)) : (e.consume(n), h)
        }

        function m(n) {
            return 93 === n ? (e.consume(n), g) : h(n)
        }

        function g(n) {
            return 62 === n ? L(n) : 93 === n ? (e.consume(n), g) : h(n)
        }

        function y(n) {
            return null === n || 62 === n ? L(n) : ye(n) ? (l = y, I(n)) : (e.consume(n), y)
        }

        function x(n) {
            return null === n ? t(n) : 63 === n ? (e.consume(n), k) : ye(n) ? (l = x, I(n)) : (e.consume(n), x)
        }

        function k(e) {
            return 62 === e ? L(e) : x(e)
        }

        function b(n) {
            return ce(n) ? (e.consume(n), v) : t(n)
        }

        function v(n) {
            return 45 === n || fe(n) ? (e.consume(n), v) : w(n)
        }

        function w(n) {
            return ye(n) ? (l = w, I(n)) : ke(n) ? (e.consume(n), w) : L(n)
        }

        function S(n) {
            return 45 === n || fe(n) ? (e.consume(n), S) : 47 === n || 62 === n || xe(n) ? C(n) : t(n)
        }

        function C(n) {
            return 47 === n ? (e.consume(n), L) : 58 === n || 95 === n || ce(n) ? (e.consume(n), E) : ye(n) ? (l = C, I(n)) : ke(n) ? (e.consume(n), C) : L(n)
        }

        function E(n) {
            return 45 === n || 46 === n || 58 === n || 95 === n || fe(n) ? (e.consume(n), E) : A(n)
        }

        function A(n) {
            return 61 === n ? (e.consume(n), F) : ye(n) ? (l = A, I(n)) : ke(n) ? (e.consume(n), A) : C(n)
        }

        function F(n) {
            return null === n || 60 === n || 61 === n || 62 === n || 96 === n ? t(n) : 34 === n || 39 === n ? (e.consume(n), o = n, T) : ye(n) ? (l = F, I(n)) : ke(n) ? (e.consume(n), F) : (e.consume(n), D)
        }

        function T(n) {
            return n === o ? (e.consume(n), o = void 0, P) : null === n ? t(n) : ye(n) ? (l = T, I(n)) : (e.consume(n), T)
        }

        function D(n) {
            return null === n || 34 === n || 39 === n || 60 === n || 61 === n || 96 === n ? t(n) : 47 === n || 62 === n || xe(n) ? C(n) : (e.consume(n), D)
        }

        function P(e) {
            return 47 === e || 62 === e || xe(e) ? C(e) : t(e)
        }

        function L(r) {
            return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(r)
        }

        function I(n) {
            return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), O
        }

        function O(n) {
            return ke(n) ? Se(e, z, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(n) : z(n)
        }

        function z(n) {
            return e.enter("htmlTextData"), l(n)
        }
    }
};
const sn = {
        name: "labelEnd",
        tokenize: function(e, n, t) {
            const r = this;
            let o, i, l = r.events.length;
            for (; l--;)
                if (("labelImage" === r.events[l][1].type || "labelLink" === r.events[l][1].type) && !r.events[l][1]._balanced) {
                    o = r.events[l][1];
                    break
                } return function(n) {
                if (!o) return t(n);
                if (o._inactive) return c(n);
                return i = r.parser.defined.includes(Ze(r.sliceSerialize({
                    start: o.end,
                    end: r.now()
                }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(n), e.exit("labelMarker"), e.exit("labelEnd"), u
            };

            function u(n) {
                return 40 === n ? e.attempt(cn, s, i ? s : c)(n) : 91 === n ? e.attempt(fn, s, i ? a : c)(n) : i ? s(n) : c(n)
            }

            function a(n) {
                return e.attempt(pn, s, c)(n)
            }

            function s(e) {
                return n(e)
            }

            function c(e) {
                return o._balanced = !0, t(e)
            }
        },
        resolveTo: function(e, n) {
            let t, r, o, i, l = e.length,
                u = 0;
            for (; l--;)
                if (t = e[l][1], r) {
                    if ("link" === t.type || "labelLink" === t.type && t._inactive) break;
                    "enter" === e[l][0] && "labelLink" === t.type && (t._inactive = !0)
                } else if (o) {
                if ("enter" === e[l][0] && ("labelImage" === t.type || "labelLink" === t.type) && !t._balanced && (r = l, "labelLink" !== t.type)) {
                    u = 2;
                    break
                }
            } else "labelEnd" === t.type && (o = l);
            const a = {
                    type: "labelLink" === e[r][1].type ? "link" : "image",
                    start: Object.assign({}, e[r][1].start),
                    end: Object.assign({}, e[e.length - 1][1].end)
                },
                s = {
                    type: "label",
                    start: Object.assign({}, e[r][1].start),
                    end: Object.assign({}, e[o][1].end)
                },
                c = {
                    type: "labelText",
                    start: Object.assign({}, e[r + u + 2][1].end),
                    end: Object.assign({}, e[o - 2][1].start)
                };
            return i = [
                ["enter", a, n],
                ["enter", s, n]
            ], i = le(i, e.slice(r + 1, r + u + 3)), i = le(i, [
                ["enter", c, n]
            ]), i = le(i, Te(n.parser.constructs.insideSpan.null, e.slice(r + u + 4, o - 3), n)), i = le(i, [
                ["exit", c, n], e[o - 2], e[o - 1],
                ["exit", s, n]
            ]), i = le(i, e.slice(o + 1)), i = le(i, [
                ["exit", a, n]
            ]), ie(e, r, e.length, i), e
        },
        resolveAll: function(e) {
            let n = -1;
            for (; ++n < e.length;) {
                const t = e[n][1];
                "labelImage" !== t.type && "labelLink" !== t.type && "labelEnd" !== t.type || (e.splice(n + 1, "labelImage" === t.type ? 4 : 2), t.type = "data", n++)
            }
            return e
        }
    },
    cn = {
        tokenize: function(e, n, t) {
            return function(n) {
                return e.enter("resource"), e.enter("resourceMarker"), e.consume(n), e.exit("resourceMarker"), r
            };

            function r(n) {
                return xe(n) ? Xe(e, o)(n) : o(n)
            }

            function o(n) {
                return 41 === n ? s(n) : Qe(e, i, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(n)
            }

            function i(n) {
                return xe(n) ? Xe(e, u)(n) : s(n)
            }

            function l(e) {
                return t(e)
            }

            function u(n) {
                return 34 === n || 39 === n || 40 === n ? Ke(e, a, t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(n) : s(n)
            }

            function a(n) {
                return xe(n) ? Xe(e, s)(n) : s(n)
            }

            function s(r) {
                return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), n) : t(r)
            }
        }
    },
    fn = {
        tokenize: function(e, n, t) {
            const r = this;
            return function(n) {
                return Ye.call(r, e, o, i, "reference", "referenceMarker", "referenceString")(n)
            };

            function o(e) {
                return r.parser.defined.includes(Ze(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(e) : t(e)
            }

            function i(e) {
                return t(e)
            }
        }
    },
    pn = {
        tokenize: function(e, n, t) {
            return function(n) {
                return e.enter("reference"), e.enter("referenceMarker"), e.consume(n), e.exit("referenceMarker"), r
            };

            function r(r) {
                return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), n) : t(r)
            }
        }
    };
const dn = {
    name: "labelStartImage",
    tokenize: function(e, n, t) {
        const r = this;
        return function(n) {
            return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(n), e.exit("labelImageMarker"), o
        };

        function o(n) {
            return 91 === n ? (e.enter("labelMarker"), e.consume(n), e.exit("labelMarker"), e.exit("labelImage"), i) : t(n)
        }

        function i(e) {
            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? t(e) : n(e)
        }
    },
    resolveAll: sn.resolveAll
};
const hn = {
    name: "labelStartLink",
    tokenize: function(e, n, t) {
        const r = this;
        return function(n) {
            return e.enter("labelLink"), e.enter("labelMarker"), e.consume(n), e.exit("labelMarker"), e.exit("labelLink"), o
        };

        function o(e) {
            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? t(e) : n(e)
        }
    },
    resolveAll: sn.resolveAll
};
const mn = {
    name: "lineEnding",
    tokenize: function(e, n) {
        return function(t) {
            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), Se(e, n, "linePrefix")
        }
    }
};
const gn = {
    name: "thematicBreak",
    tokenize: function(e, n, t) {
        let r, o = 0;
        return function(n) {
            return e.enter("thematicBreak"),
                function(e) {
                    return r = e, i(e)
                }(n)
        };

        function i(i) {
            return i === r ? (e.enter("thematicBreakSequence"), l(i)) : o >= 3 && (null === i || ye(i)) ? (e.exit("thematicBreak"), n(i)) : t(i)
        }

        function l(n) {
            return n === r ? (e.consume(n), o++, l) : (e.exit("thematicBreakSequence"), ke(n) ? Se(e, i, "whitespace")(n) : i(n))
        }
    }
};
const yn = {
        name: "list",
        tokenize: function(e, n, t) {
            const r = this,
                o = r.events[r.events.length - 1];
            let i = o && "linePrefix" === o[1].type ? o[2].sliceSerialize(o[1], !0).length : 0,
                l = 0;
            return function(n) {
                const o = r.containerState.type || (42 === n || 43 === n || 45 === n ? "listUnordered" : "listOrdered");
                if ("listUnordered" === o ? !r.containerState.marker || n === r.containerState.marker : he(n)) {
                    if (r.containerState.type || (r.containerState.type = o, e.enter(o, {
                            _container: !0
                        })), "listUnordered" === o) return e.enter("listItemPrefix"), 42 === n || 45 === n ? e.check(gn, t, a)(n) : a(n);
                    if (!r.interrupt || 49 === n) return e.enter("listItemPrefix"), e.enter("listItemValue"), u(n)
                }
                return t(n)
            };

            function u(n) {
                return he(n) && ++l < 10 ? (e.consume(n), u) : (!r.interrupt || l < 2) && (r.containerState.marker ? n === r.containerState.marker : 41 === n || 46 === n) ? (e.exit("listItemValue"), a(n)) : t(n)
            }

            function a(n) {
                return e.enter("listItemMarker"), e.consume(n), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || n, e.check(Ie, r.interrupt ? t : s, e.attempt(xn, f, c))
            }

            function s(e) {
                return r.containerState.initialBlankLine = !0, i++, f(e)
            }

            function c(n) {
                return ke(n) ? (e.enter("listItemPrefixWhitespace"), e.consume(n), e.exit("listItemPrefixWhitespace"), f) : t(n)
            }

            function f(t) {
                return r.containerState.size = i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, n(t)
            }
        },
        continuation: {
            tokenize: function(e, n, t) {
                const r = this;
                return r.containerState._closeFlow = void 0, e.check(Ie, o, i);

                function o(t) {
                    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, Se(e, n, "listItemIndent", r.containerState.size + 1)(t)
                }

                function i(t) {
                    return r.containerState.furtherBlankLines || !ke(t) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(t)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(kn, n, l)(t))
                }

                function l(o) {
                    return r.containerState._closeFlow = !0, r.interrupt = void 0, Se(e, e.attempt(yn, n, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o)
                }
            }
        },
        exit: function(e) {
            e.exit(this.containerState.type)
        }
    },
    xn = {
        tokenize: function(e, n, t) {
            const r = this;
            return Se(e, (function(e) {
                const o = r.events[r.events.length - 1];
                return !ke(e) && o && "listItemPrefixWhitespace" === o[1].type ? n(e) : t(e)
            }), "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5)
        },
        partial: !0
    },
    kn = {
        tokenize: function(e, n, t) {
            const r = this;
            return Se(e, (function(e) {
                const o = r.events[r.events.length - 1];
                return o && "listItemIndent" === o[1].type && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? n(e) : t(e)
            }), "listItemIndent", r.containerState.size + 1)
        },
        partial: !0
    };
const bn = {
    name: "setextUnderline",
    tokenize: function(e, n, t) {
        const r = this;
        let o;
        return function(n) {
            let l, u = r.events.length;
            for (; u--;)
                if ("lineEnding" !== r.events[u][1].type && "linePrefix" !== r.events[u][1].type && "content" !== r.events[u][1].type) {
                    l = "paragraph" === r.events[u][1].type;
                    break
                } if (!r.parser.lazy[r.now().line] && (r.interrupt || l)) return e.enter("setextHeadingLine"), o = n,
                function(n) {
                    return e.enter("setextHeadingLineSequence"), i(n)
                }(n);
            return t(n)
        };

        function i(n) {
            return n === o ? (e.consume(n), i) : (e.exit("setextHeadingLineSequence"), ke(n) ? Se(e, l, "lineSuffix")(n) : l(n))
        }

        function l(r) {
            return null === r || ye(r) ? (e.exit("setextHeadingLine"), n(r)) : t(r)
        }
    },
    resolveTo: function(e, n) {
        let t, r, o, i = e.length;
        for (; i--;)
            if ("enter" === e[i][0]) {
                if ("content" === e[i][1].type) {
                    t = i;
                    break
                }
                "paragraph" === e[i][1].type && (r = i)
            } else "content" === e[i][1].type && e.splice(i, 1), o || "definition" !== e[i][1].type || (o = i);
        const l = {
            type: "setextHeading",
            start: Object.assign({}, e[r][1].start),
            end: Object.assign({}, e[e.length - 1][1].end)
        };
        e[r][1].type = "setextHeadingText", o ? (e.splice(r, 0, ["enter", l, n]), e.splice(o + 1, 0, ["exit", e[t][1], n]), e[t][1].end = Object.assign({}, e[o][1].end)) : e[t][1] = l;
        return e.push(["exit", l, n]), e
    }
};
const vn = {
    tokenize: function(e) {
        const n = this,
            t = e.attempt(Ie, (function(r) {
                if (null === r) return void e.consume(r);
                return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), n.currentConstruct = void 0, t
            }), e.attempt(this.parser.constructs.flowInitial, r, Se(e, e.attempt(this.parser.constructs.flow, r, e.attempt($e, r)), "linePrefix")));
        return t;

        function r(r) {
            if (null !== r) return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), n.currentConstruct = void 0, t;
            e.consume(r)
        }
    }
};
const wn = {
        resolveAll: An()
    },
    Sn = En("string"),
    Cn = En("text");

function En(e) {
    return {
        tokenize: function(n) {
            const t = this,
                r = this.parser.constructs[e],
                o = n.attempt(r, i, l);
            return i;

            function i(e) {
                return a(e) ? o(e) : l(e)
            }

            function l(e) {
                if (null !== e) return n.enter("data"), n.consume(e), u;
                n.consume(e)
            }

            function u(e) {
                return a(e) ? (n.exit("data"), o(e)) : (n.consume(e), u)
            }

            function a(e) {
                if (null === e) return !0;
                const n = r[e];
                let o = -1;
                if (n)
                    for (; ++o < n.length;) {
                        const e = n[o];
                        if (!e.previous || e.previous.call(t, t.previous)) return !0
                    }
                return !1
            }
        },
        resolveAll: An("text" === e ? Fn : void 0)
    }
}

function An(e) {
    return function(n, t) {
        let r, o = -1;
        for (; ++o <= n.length;) void 0 === r ? n[o] && "data" === n[o][1].type && (r = o, o++) : n[o] && "data" === n[o][1].type || (o !== r + 2 && (n[r][1].end = n[o - 1][1].end, n.splice(r + 2, o - r - 2), o = r + 2), r = void 0);
        return e ? e(n, t) : n
    }
}

function Fn(e, n) {
    let t = 0;
    for (; ++t <= e.length;)
        if ((t === e.length || "lineEnding" === e[t][1].type) && "data" === e[t - 1][1].type) {
            const r = e[t - 1][1],
                o = n.sliceStream(r);
            let i, l = o.length,
                u = -1,
                a = 0;
            for (; l--;) {
                const e = o[l];
                if ("string" == typeof e) {
                    for (u = e.length; 32 === e.charCodeAt(u - 1);) a++, u--;
                    if (u) break;
                    u = -1
                } else if (-2 === e) i = !0, a++;
                else if (-1 !== e) {
                    l++;
                    break
                }
            }
            if (a) {
                const o = {
                    type: t === e.length || i || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                    start: {
                        line: r.end.line,
                        column: r.end.column - a,
                        offset: r.end.offset - a,
                        _index: r.start._index + l,
                        _bufferIndex: l ? u : r.start._bufferIndex + u
                    },
                    end: Object.assign({}, r.end)
                };
                r.end = Object.assign({}, o.start), r.start.offset === r.end.offset ? Object.assign(r, o) : (e.splice(t, 0, ["enter", o, n], ["exit", o, n]), t += 2)
            }
            t++
        } return e
}

function Tn(e, n, t) {
    let r = Object.assign(t ? Object.assign({}, t) : {
        line: 1,
        column: 1,
        offset: 0
    }, {
        _index: 0,
        _bufferIndex: -1
    });
    const o = {},
        i = [];
    let l = [],
        u = [];
    const a = {
            consume: function(e) {
                ye(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, x()) : -1 !== e && (r.column++, r.offset++);
                r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++));
                s.previous = e
            },
            enter: function(e, n) {
                const t = n || {};
                return t.type = e, t.start = p(), s.events.push(["enter", t, s]), u.push(t), t
            },
            exit: function(e) {
                const n = u.pop();
                return n.end = p(), s.events.push(["exit", n, s]), n
            },
            attempt: g((function(e, n) {
                y(e, n.from)
            })),
            check: g(m),
            interrupt: g(m, {
                interrupt: !0
            })
        },
        s = {
            previous: null,
            code: null,
            containerState: {},
            events: [],
            parser: e,
            sliceStream: f,
            sliceSerialize: function(e, n) {
                return function(e, n) {
                    let t = -1;
                    const r = [];
                    let o;
                    for (; ++t < e.length;) {
                        const i = e[t];
                        let l;
                        if ("string" == typeof i) l = i;
                        else switch (i) {
                            case -5:
                                l = "\r";
                                break;
                            case -4:
                                l = "\n";
                                break;
                            case -3:
                                l = "\r\n";
                                break;
                            case -2:
                                l = n ? " " : "\t";
                                break;
                            case -1:
                                if (!n && o) continue;
                                l = " ";
                                break;
                            default:
                                l = String.fromCharCode(i)
                        }
                        o = -2 === i, r.push(l)
                    }
                    return r.join("")
                }(f(e), n)
            },
            now: p,
            defineSkip: function(e) {
                o[e.line] = e.column, x()
            },
            write: function(e) {
                if (l = le(l, e), d(), null !== l[l.length - 1]) return [];
                return y(n, 0), s.events = Te(i, s.events, s), s.events
            }
        };
    let c = n.tokenize.call(s, a);
    return n.resolveAll && i.push(n), s;

    function f(e) {
        return function(e, n) {
            const t = n.start._index,
                r = n.start._bufferIndex,
                o = n.end._index,
                i = n.end._bufferIndex;
            let l;
            if (t === o) l = [e[t].slice(r, i)];
            else {
                if (l = e.slice(t, o), r > -1) {
                    const e = l[0];
                    "string" == typeof e ? l[0] = e.slice(r) : l.shift()
                }
                i > 0 && l.push(e[o].slice(0, i))
            }
            return l
        }(l, e)
    }

    function p() {
        const {
            line: e,
            column: n,
            offset: t,
            _index: o,
            _bufferIndex: i
        } = r;
        return {
            line: e,
            column: n,
            offset: t,
            _index: o,
            _bufferIndex: i
        }
    }

    function d() {
        let e;
        for (; r._index < l.length;) {
            const n = l[r._index];
            if ("string" == typeof n)
                for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length;) h(n.charCodeAt(r._bufferIndex));
            else h(n)
        }
    }

    function h(e) {
        c = c(e)
    }

    function m(e, n) {
        n.restore()
    }

    function g(e, n) {
        return function(t, o, i) {
            let l, c, f, d;
            return Array.isArray(t) ? h(t) : "tokenize" in t ? h([t]) : function(e) {
                return n;

                function n(n) {
                    const t = null !== n && e[n],
                        r = null !== n && e.null;
                    return h([...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(r) ? r : r ? [r] : []])(n)
                }
            }(t);

            function h(e) {
                return l = e, c = 0, 0 === e.length ? i : m(e[c])
            }

            function m(e) {
                return function(t) {
                    d = function() {
                        const e = p(),
                            n = s.previous,
                            t = s.currentConstruct,
                            o = s.events.length,
                            i = Array.from(u);
                        return {
                            restore: l,
                            from: o
                        };

                        function l() {
                            r = e, s.previous = n, s.currentConstruct = t, s.events.length = o, u = i, x()
                        }
                    }(), f = e, e.partial || (s.currentConstruct = e);
                    if (e.name && s.parser.constructs.disable.null.includes(e.name)) return y();
                    return e.tokenize.call(n ? Object.assign(Object.create(s), n) : s, a, g, y)(t)
                }
            }

            function g(n) {
                return e(f, d), o
            }

            function y(e) {
                return d.restore(), ++c < l.length ? m(l[c]) : i
            }
        }
    }

    function y(e, n) {
        e.resolveAll && !i.includes(e) && i.push(e), e.resolve && ie(s.events, n, s.events.length - n, e.resolve(s.events.slice(n), s)), e.resolveTo && (s.events = e.resolveTo(s.events, s))
    }

    function x() {
        r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1)
    }
}
const Dn = {
        42: yn,
        43: yn,
        45: yn,
        48: yn,
        49: yn,
        50: yn,
        51: yn,
        52: yn,
        53: yn,
        54: yn,
        55: yn,
        56: yn,
        57: yn,
        62: Oe
    },
    Pn = {
        91: Ge
    },
    Ln = {
        [-2]: _e,
        [-1]: _e,
        32: _e
    },
    In = {
        35: nn,
        42: gn,
        45: [bn, gn],
        60: on,
        61: bn,
        95: gn,
        96: Re,
        126: Re
    },
    On = {
        38: Me,
        92: ze
    },
    zn = {
        [-5]: mn,
        [-4]: mn,
        [-3]: mn,
        33: dn,
        38: Me,
        42: De,
        60: [Le, an],
        91: hn,
        92: [en, ze],
        93: sn,
        95: De,
        96: Ue
    },
    jn = {
        null: [De, wn]
    },
    Nn = Object.freeze(Object.defineProperty({
        __proto__: null,
        attentionMarkers: {
            null: [42, 95]
        },
        contentInitial: Pn,
        disable: {
            null: []
        },
        document: Dn,
        flow: In,
        flowInitial: Ln,
        insideSpan: jn,
        string: On,
        text: zn
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function Mn(e) {
    const n = function(e) {
            const n = {};
            let t = -1;
            for (; ++t < e.length;) ae(n, e[t]);
            return n
        }([Nn, ...(e || {}).extensions || []]),
        t = {
            defined: [],
            lazy: {},
            constructs: n,
            content: r(Ce),
            document: r(Ee),
            flow: r(vn),
            string: r(Sn),
            text: r(Cn)
        };
    return t;

    function r(e) {
        return function(n) {
            return Tn(t, e, n)
        }
    }
}
const Bn = /[\0\t\n\r]/g;

function Rn(e, n) {
    const t = Number.parseInt(e, n);
    return t < 9 || 11 === t || t > 13 && t < 32 || t > 126 && t < 160 || t > 55295 && t < 57344 || t > 64975 && t < 65008 || 65535 == (65535 & t) || 65534 == (65535 & t) || t > 1114111 ? "�" : String.fromCharCode(t)
}
const _n = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

function Hn(e, n, t) {
    if (n) return n;
    if (35 === t.charCodeAt(0)) {
        const e = t.charCodeAt(1),
            n = 120 === e || 88 === e;
        return Rn(t.slice(n ? 2 : 1), n ? 16 : 10)
    }
    return Ne(t) || e
}
const Un = {}.hasOwnProperty,
    qn = function(e, n, t) {
        return "string" != typeof n && (t = n, n = void 0),
            function(e) {
                const n = {
                    transforms: [],
                    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                    enter: {
                        autolink: u(ie),
                        autolinkProtocol: F,
                        autolinkEmail: F,
                        atxHeading: u(J),
                        blockQuote: u(Y),
                        characterEscape: F,
                        characterReference: F,
                        codeFenced: u(K),
                        codeFencedFenceInfo: a,
                        codeFencedFenceMeta: a,
                        codeIndented: u(K, a),
                        codeText: u(X, a),
                        codeTextData: F,
                        data: F,
                        codeFlowValue: F,
                        definition: u(Z),
                        definitionDestinationString: a,
                        definitionLabelString: a,
                        definitionTitleString: a,
                        emphasis: u(G),
                        hardBreakEscape: u(ee),
                        hardBreakTrailing: u(ee),
                        htmlFlow: u(ne, a),
                        htmlFlowData: F,
                        htmlText: u(ne, a),
                        htmlTextData: F,
                        image: u(oe),
                        label: a,
                        link: u(ie),
                        listItem: u(ue),
                        listItemValue: h,
                        listOrdered: u(le, d),
                        listUnordered: u(le),
                        paragraph: u(ae),
                        reference: U,
                        referenceString: a,
                        resourceDestinationString: a,
                        resourceTitleString: a,
                        setextHeading: u(J),
                        strong: u(se),
                        thematicBreak: u(fe)
                    },
                    exit: {
                        atxHeading: c(),
                        atxHeadingSequence: S,
                        autolink: c(),
                        autolinkEmail: Q,
                        autolinkProtocol: W,
                        blockQuote: c(),
                        characterEscapeValue: T,
                        characterReferenceMarkerHexadecimal: V,
                        characterReferenceMarkerNumeric: V,
                        characterReferenceValue: $,
                        codeFenced: c(x),
                        codeFencedFence: y,
                        codeFencedFenceInfo: m,
                        codeFencedFenceMeta: g,
                        codeFlowValue: T,
                        codeIndented: c(k),
                        codeText: c(z),
                        codeTextData: T,
                        data: T,
                        definition: c(),
                        definitionDestinationString: w,
                        definitionLabelString: b,
                        definitionTitleString: v,
                        emphasis: c(),
                        hardBreakEscape: c(L),
                        hardBreakTrailing: c(L),
                        htmlFlow: c(I),
                        htmlFlowData: T,
                        htmlText: c(O),
                        htmlTextData: T,
                        image: c(N),
                        label: B,
                        labelText: M,
                        lineEnding: P,
                        link: c(j),
                        listItem: c(),
                        listOrdered: c(),
                        listUnordered: c(),
                        paragraph: c(),
                        referenceString: q,
                        resourceDestinationString: R,
                        resourceTitleString: _,
                        resource: H,
                        setextHeading: c(A),
                        setextHeadingLineSequence: E,
                        setextHeadingText: C,
                        strong: c(),
                        thematicBreak: c()
                    }
                };
                $n(n, (e || {}).mdastExtensions || []);
                const t = {};
                return r;

                function r(e) {
                    let t = {
                        type: "root",
                        children: []
                    };
                    const r = {
                            stack: [t],
                            tokenStack: [],
                            config: n,
                            enter: s,
                            exit: f,
                            buffer: a,
                            resume: p,
                            setData: i,
                            getData: l
                        },
                        u = [];
                    let c = -1;
                    for (; ++c < e.length;)
                        if ("listOrdered" === e[c][1].type || "listUnordered" === e[c][1].type)
                            if ("enter" === e[c][0]) u.push(c);
                            else {
                                c = o(e, u.pop(), c)
                            } for (c = -1; ++c < e.length;) {
                        const t = n[e[c][0]];
                        Un.call(t, e[c][1].type) && t[e[c][1].type].call(Object.assign({
                            sliceSerialize: e[c][2].sliceSerialize
                        }, r), e[c][1])
                    }
                    if (r.tokenStack.length > 0) {
                        const e = r.tokenStack[r.tokenStack.length - 1];
                        (e[1] || Qn).call(r, void 0, e[0])
                    }
                    for (t.position = {
                            start: Vn(e.length > 0 ? e[0][1].start : {
                                line: 1,
                                column: 1,
                                offset: 0
                            }),
                            end: Vn(e.length > 0 ? e[e.length - 2][1].end : {
                                line: 1,
                                column: 1,
                                offset: 0
                            })
                        }, c = -1; ++c < n.transforms.length;) t = n.transforms[c](t) || t;
                    return t
                }

                function o(e, n, t) {
                    let r, o, i, l, u = n - 1,
                        a = -1,
                        s = !1;
                    for (; ++u <= t;) {
                        const n = e[u];
                        if ("listUnordered" === n[1].type || "listOrdered" === n[1].type || "blockQuote" === n[1].type ? ("enter" === n[0] ? a++ : a--, l = void 0) : "lineEndingBlank" === n[1].type ? "enter" === n[0] && (!r || l || a || i || (i = u), l = void 0) : "linePrefix" === n[1].type || "listItemValue" === n[1].type || "listItemMarker" === n[1].type || "listItemPrefix" === n[1].type || "listItemPrefixWhitespace" === n[1].type || (l = void 0), !a && "enter" === n[0] && "listItemPrefix" === n[1].type || -1 === a && "exit" === n[0] && ("listUnordered" === n[1].type || "listOrdered" === n[1].type)) {
                            if (r) {
                                let l = u;
                                for (o = void 0; l--;) {
                                    const n = e[l];
                                    if ("lineEnding" === n[1].type || "lineEndingBlank" === n[1].type) {
                                        if ("exit" === n[0]) continue;
                                        o && (e[o][1].type = "lineEndingBlank", s = !0), n[1].type = "lineEnding", o = l
                                    } else if ("linePrefix" !== n[1].type && "blockQuotePrefix" !== n[1].type && "blockQuotePrefixWhitespace" !== n[1].type && "blockQuoteMarker" !== n[1].type && "listItemIndent" !== n[1].type) break
                                }
                                i && (!o || i < o) && (r._spread = !0), r.end = Object.assign({}, o ? e[o][1].start : n[1].end), e.splice(o || u, 0, ["exit", r, n[2]]), u++, t++
                            }
                            "listItemPrefix" === n[1].type && (r = {
                                type: "listItem",
                                _spread: !1,
                                start: Object.assign({}, n[1].start),
                                end: void 0
                            }, e.splice(u, 0, ["enter", r, n[2]]), u++, t++, i = void 0, l = !0)
                        }
                    }
                    return e[n][1]._spread = s, t
                }

                function i(e, n) {
                    t[e] = n
                }

                function l(e) {
                    return t[e]
                }

                function u(e, n) {
                    return t;

                    function t(t) {
                        s.call(this, e(t), t), n && n.call(this, t)
                    }
                }

                function a() {
                    this.stack.push({
                        type: "fragment",
                        children: []
                    })
                }

                function s(e, n, t) {
                    return this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([n, t]), e.position = {
                        start: Vn(n.start)
                    }, e
                }

                function c(e) {
                    return n;

                    function n(n) {
                        e && e.call(this, n), f.call(this, n)
                    }
                }

                function f(e, n) {
                    const t = this.stack.pop(),
                        r = this.tokenStack.pop();
                    if (!r) throw new Error("Cannot close `" + e.type + "` (" + D({
                        start: e.start,
                        end: e.end
                    }) + "): it’s not open");
                    if (r[0].type !== e.type)
                        if (n) n.call(this, e, r[0]);
                        else {
                            (r[1] || Qn).call(this, e, r[0])
                        } return t.position.end = Vn(e.end), t
                }

                function p() {
                    return function(e, n) {
                        const t = n || te;
                        return re(e, "boolean" != typeof t.includeImageAlt || t.includeImageAlt, "boolean" != typeof t.includeHtml || t.includeHtml)
                    }(this.stack.pop())
                }

                function d() {
                    i("expectingFirstListItemValue", !0)
                }

                function h(e) {
                    if (l("expectingFirstListItemValue")) {
                        this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10), i("expectingFirstListItemValue")
                    }
                }

                function m() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].lang = e
                }

                function g() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].meta = e
                }

                function y() {
                    l("flowCodeInside") || (this.buffer(), i("flowCodeInside", !0))
                }

                function x() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), i("flowCodeInside")
                }

                function k() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "")
                }

                function b(e) {
                    const n = this.resume(),
                        t = this.stack[this.stack.length - 1];
                    t.label = n, t.identifier = Ze(this.sliceSerialize(e)).toLowerCase()
                }

                function v() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].title = e
                }

                function w() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].url = e
                }

                function S(e) {
                    const n = this.stack[this.stack.length - 1];
                    if (!n.depth) {
                        const t = this.sliceSerialize(e).length;
                        n.depth = t
                    }
                }

                function C() {
                    i("setextHeadingSlurpLineEnding", !0)
                }

                function E(e) {
                    this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                }

                function A() {
                    i("setextHeadingSlurpLineEnding")
                }

                function F(e) {
                    const n = this.stack[this.stack.length - 1];
                    let t = n.children[n.children.length - 1];
                    t && "text" === t.type || (t = ce(), t.position = {
                        start: Vn(e.start)
                    }, n.children.push(t)), this.stack.push(t)
                }

                function T(e) {
                    const n = this.stack.pop();
                    n.value += this.sliceSerialize(e), n.position.end = Vn(e.end)
                }

                function P(e) {
                    const t = this.stack[this.stack.length - 1];
                    if (l("atHardBreak")) {
                        return t.children[t.children.length - 1].position.end = Vn(e.end), void i("atHardBreak")
                    }!l("setextHeadingSlurpLineEnding") && n.canContainEols.includes(t.type) && (F.call(this, e), T.call(this, e))
                }

                function L() {
                    i("atHardBreak", !0)
                }

                function I() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].value = e
                }

                function O() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].value = e
                }

                function z() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].value = e
                }

                function j() {
                    const e = this.stack[this.stack.length - 1];
                    if (l("inReference")) {
                        const n = l("referenceType") || "shortcut";
                        e.type += "Reference", e.referenceType = n, delete e.url, delete e.title
                    } else delete e.identifier, delete e.label;
                    i("referenceType")
                }

                function N() {
                    const e = this.stack[this.stack.length - 1];
                    if (l("inReference")) {
                        const n = l("referenceType") || "shortcut";
                        e.type += "Reference", e.referenceType = n, delete e.url, delete e.title
                    } else delete e.identifier, delete e.label;
                    i("referenceType")
                }

                function M(e) {
                    const n = this.sliceSerialize(e),
                        t = this.stack[this.stack.length - 2];
                    t.label = function(e) {
                        return e.replace(_n, Hn)
                    }(n), t.identifier = Ze(n).toLowerCase()
                }

                function B() {
                    const e = this.stack[this.stack.length - 1],
                        n = this.resume(),
                        t = this.stack[this.stack.length - 1];
                    if (i("inReference", !0), "link" === t.type) {
                        const n = e.children;
                        t.children = n
                    } else t.alt = n
                }

                function R() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].url = e
                }

                function _() {
                    const e = this.resume();
                    this.stack[this.stack.length - 1].title = e
                }

                function H() {
                    i("inReference")
                }

                function U() {
                    i("referenceType", "collapsed")
                }

                function q(e) {
                    const n = this.resume(),
                        t = this.stack[this.stack.length - 1];
                    t.label = n, t.identifier = Ze(this.sliceSerialize(e)).toLowerCase(), i("referenceType", "full")
                }

                function V(e) {
                    i("characterReferenceType", e.type)
                }

                function $(e) {
                    const n = this.sliceSerialize(e),
                        t = l("characterReferenceType");
                    let r;
                    if (t) r = Rn(n, "characterReferenceMarkerNumeric" === t ? 10 : 16), i("characterReferenceType");
                    else {
                        r = Ne(n)
                    }
                    const o = this.stack.pop();
                    o.value += r, o.position.end = Vn(e.end)
                }

                function W(e) {
                    T.call(this, e);
                    this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
                }

                function Q(e) {
                    T.call(this, e);
                    this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
                }

                function Y() {
                    return {
                        type: "blockquote",
                        children: []
                    }
                }

                function K() {
                    return {
                        type: "code",
                        lang: null,
                        meta: null,
                        value: ""
                    }
                }

                function X() {
                    return {
                        type: "inlineCode",
                        value: ""
                    }
                }

                function Z() {
                    return {
                        type: "definition",
                        identifier: "",
                        label: null,
                        title: null,
                        url: ""
                    }
                }

                function G() {
                    return {
                        type: "emphasis",
                        children: []
                    }
                }

                function J() {
                    return {
                        type: "heading",
                        depth: void 0,
                        children: []
                    }
                }

                function ee() {
                    return {
                        type: "break"
                    }
                }

                function ne() {
                    return {
                        type: "html",
                        value: ""
                    }
                }

                function oe() {
                    return {
                        type: "image",
                        title: null,
                        url: "",
                        alt: null
                    }
                }

                function ie() {
                    return {
                        type: "link",
                        title: null,
                        url: "",
                        children: []
                    }
                }

                function le(e) {
                    return {
                        type: "list",
                        ordered: "listOrdered" === e.type,
                        start: null,
                        spread: e._spread,
                        children: []
                    }
                }

                function ue(e) {
                    return {
                        type: "listItem",
                        spread: e._spread,
                        checked: null,
                        children: []
                    }
                }

                function ae() {
                    return {
                        type: "paragraph",
                        children: []
                    }
                }

                function se() {
                    return {
                        type: "strong",
                        children: []
                    }
                }

                function ce() {
                    return {
                        type: "text",
                        value: ""
                    }
                }

                function fe() {
                    return {
                        type: "thematicBreak"
                    }
                }
            }(t)(function(e) {
                for (; !qe(e););
                return e
            }(Mn(t).document().write(function() {
                let e, n = 1,
                    t = "",
                    r = !0;
                return function(o, i, l) {
                    const u = [];
                    let a, s, c, f, p;
                    for (o = t + o.toString(i), c = 0, t = "", r && (65279 === o.charCodeAt(0) && c++, r = void 0); c < o.length;) {
                        if (Bn.lastIndex = c, a = Bn.exec(o), f = a && void 0 !== a.index ? a.index : o.length, p = o.charCodeAt(f), !a) {
                            t = o.slice(c);
                            break
                        }
                        if (10 === p && c === f && e) u.push(-3), e = void 0;
                        else switch (e && (u.push(-5), e = void 0), c < f && (u.push(o.slice(c, f)), n += f - c), p) {
                            case 0:
                                u.push(65533), n++;
                                break;
                            case 9:
                                for (s = 4 * Math.ceil(n / 4), u.push(-2); n++ < s;) u.push(-1);
                                break;
                            case 10:
                                u.push(-4), n = 1;
                                break;
                            default:
                                e = !0, n = 1
                        }
                        c = f + 1
                    }
                    return l && (e && u.push(-5), t && u.push(t), u.push(null)), u
                }
            }()(e, n, !0))))
    };

function Vn(e) {
    return {
        line: e.line,
        column: e.column,
        offset: e.offset
    }
}

function $n(e, n) {
    let t = -1;
    for (; ++t < n.length;) {
        const r = n[t];
        Array.isArray(r) ? $n(e, r) : Wn(e, r)
    }
}

function Wn(e, n) {
    let t;
    for (t in n)
        if (Un.call(n, t))
            if ("canContainEols" === t) {
                const r = n[t];
                r && e[t].push(...r)
            } else if ("transforms" === t) {
        const r = n[t];
        r && e[t].push(...r)
    } else if ("enter" === t || "exit" === t) {
        const r = n[t];
        r && Object.assign(e[t], r)
    }
}

function Qn(e, n) {
    throw e ? new Error("Cannot close `" + e.type + "` (" + D({
        start: e.start,
        end: e.end
    }) + "): a different token (`" + n.type + "`, " + D({
        start: n.start,
        end: n.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + n.type + "`, " + D({
        start: n.start,
        end: n.end
    }) + ") is still open")
}

function Yn(e) {
    Object.assign(this, {
        Parser: n => {
            const t = this.data("settings");
            return qn(n, Object.assign({}, t, e, {
                extensions: this.data("micromarkExtensions") || [],
                mdastExtensions: this.data("fromMarkdownExtensions") || []
            }))
        }
    })
}

function Kn(e) {
    const n = [];
    let t = -1,
        r = 0,
        o = 0;
    for (; ++t < e.length;) {
        const i = e.charCodeAt(t);
        let l = "";
        if (37 === i && fe(e.charCodeAt(t + 1)) && fe(e.charCodeAt(t + 2))) o = 2;
        else if (i < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) || (l = String.fromCharCode(i));
        else if (i > 55295 && i < 57344) {
            const n = e.charCodeAt(t + 1);
            i < 56320 && n > 56319 && n < 57344 ? (l = String.fromCharCode(i, n), o = 1) : l = "�"
        } else l = String.fromCharCode(i);
        l && (n.push(e.slice(r, t), encodeURIComponent(l)), r = t + o + 1, l = ""), o && (t += o, o = 0)
    }
    return n.join("") + e.slice(r)
}

function Xn(e, n) {
    const t = String(n.identifier).toUpperCase(),
        r = Kn(t.toLowerCase()),
        o = e.footnoteOrder.indexOf(t);
    let i; - 1 === o ? (e.footnoteOrder.push(t), e.footnoteCounts[t] = 1, i = e.footnoteOrder.length) : (e.footnoteCounts[t]++, i = o + 1);
    const l = e.footnoteCounts[t],
        u = {
            type: "element",
            tagName: "a",
            properties: {
                href: "#" + e.clobberPrefix + "fn-" + r,
                id: e.clobberPrefix + "fnref-" + r + (l > 1 ? "-" + l : ""),
                dataFootnoteRef: !0,
                ariaDescribedBy: ["footnote-label"]
            },
            children: [{
                type: "text",
                value: String(i)
            }]
        };
    e.patch(n, u);
    const a = {
        type: "element",
        tagName: "sup",
        properties: {},
        children: [u]
    };
    return e.patch(n, a), e.applyData(n, a)
}

function Zn(e, n) {
    const t = n.referenceType;
    let r = "]";
    if ("collapsed" === t ? r += "[]" : "full" === t && (r += "[" + (n.label || n.identifier) + "]"), "imageReference" === n.type) return {
        type: "text",
        value: "![" + n.alt + r
    };
    const o = e.all(n),
        i = o[0];
    i && "text" === i.type ? i.value = "[" + i.value : o.unshift({
        type: "text",
        value: "["
    });
    const l = o[o.length - 1];
    return l && "text" === l.type ? l.value += r : o.push({
        type: "text",
        value: r
    }), o
}

function Gn(e) {
    const n = e.spread;
    return null == n ? e.children.length > 1 : n
}
const Jn = nt("start"),
    et = nt("end");

function nt(e) {
    return function(n) {
        const t = n && n.position && n.position[e] || {};
        return {
            line: t.line || null,
            column: t.column || null,
            offset: t.offset > -1 ? t.offset : null
        }
    }
}

function tt(e) {
    const n = String(e),
        t = /\r?\n|\r/g;
    let r = t.exec(n),
        o = 0;
    const i = [];
    for (; r;) i.push(rt(n.slice(o, r.index), o > 0, !0), r[0]), o = r.index + r[0].length, r = t.exec(n);
    return i.push(rt(n.slice(o), o > 0, !1)), i.join("")
}

function rt(e, n, t) {
    let r = 0,
        o = e.length;
    if (n) {
        let n = e.codePointAt(r);
        for (; 9 === n || 32 === n;) r++, n = e.codePointAt(r)
    }
    if (t) {
        let n = e.codePointAt(o - 1);
        for (; 9 === n || 32 === n;) o--, n = e.codePointAt(o - 1)
    }
    return o > r ? e.slice(r, o) : ""
}
const ot = {
    blockquote: function(e, n) {
        const t = {
            type: "element",
            tagName: "blockquote",
            properties: {},
            children: e.wrap(e.all(n), !0)
        };
        return e.patch(n, t), e.applyData(n, t)
    },
    break: function(e, n) {
        const t = {
            type: "element",
            tagName: "br",
            properties: {},
            children: []
        };
        return e.patch(n, t), [e.applyData(n, t), {
            type: "text",
            value: "\n"
        }]
    },
    code: function(e, n) {
        const t = n.value ? n.value + "\n" : "",
            r = n.lang ? n.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null,
            o = {};
        r && (o.className = ["language-" + r]);
        let i = {
            type: "element",
            tagName: "code",
            properties: o,
            children: [{
                type: "text",
                value: t
            }]
        };
        return n.meta && (i.data = {
            meta: n.meta
        }), e.patch(n, i), i = e.applyData(n, i), i = {
            type: "element",
            tagName: "pre",
            properties: {},
            children: [i]
        }, e.patch(n, i), i
    },
    delete: function(e, n) {
        const t = {
            type: "element",
            tagName: "del",
            properties: {},
            children: e.all(n)
        };
        return e.patch(n, t), e.applyData(n, t)
    },
    emphasis: function(e, n) {
        const t = {
            type: "element",
            tagName: "em",
            properties: {},
            children: e.all(n)
        };
        return e.patch(n, t), e.applyData(n, t)
    },
    footnoteReference: Xn,
    footnote: function(e, n) {
        const t = e.footnoteById;
        let r = 1;
        for (; r in t;) r++;
        const o = String(r);
        return t[o] = {
            type: "footnoteDefinition",
            identifier: o,
            children: [{
                type: "paragraph",
                children: n.children
            }],
            position: n.position
        }, Xn(e, {
            type: "footnoteReference",
            identifier: o,
            position: n.position
        })
    },
    heading: function(e, n) {
        const t = {
            type: "element",
            tagName: "h" + n.depth,
            properties: {},
            children: e.all(n)
        };
        return e.patch(n, t), e.applyData(n, t)
    },
    html: function(e, n) {
        if (e.dangerous) {
            const t = {
                type: "raw",
                value: n.value
            };
            return e.patch(n, t), e.applyData(n, t)
        }
        return null
    },
    imageReference: function(e, n) {
        const t = e.definition(n.identifier);
        if (!t) return Zn(e, n);
        const r = {
            src: Kn(t.url || ""),
            alt: n.alt
        };
        null !== t.title && void 0 !== t.title && (r.title = t.title);
        const o = {
            type: "element",
            tagName: "img",
            properties: r,
            children: []
        };
        return e.patch(n, o), e.applyData(n, o)
    },
    image: function(e, n) {
        const t = {
            src: Kn(n.url)
        };
        null !== n.alt && void 0 !== n.alt && (t.alt = n.alt), null !== n.title && void 0 !== n.title && (t.title = n.title);
        const r = {
            type: "element",
            tagName: "img",
            properties: t,
            children: []
        };
        return e.patch(n, r), e.applyData(n, r)
    },
    inlineCode: function(e, n) {
        const t = {
            type: "text",
            value: n.value.replace(/\r?\n|\r/g, " ")
        };
        e.patch(n, t);
        const r = {
            type: "element",
            tagName: "code",
            properties: {},
            children: [t]
        };
        return e.patch(n, r), e.applyData(n, r)
    },
    linkReference: function(e, n) {
        const t = e.definition(n.identifier);
        if (!t) return Zn(e, n);
        const r = {
            href: Kn(t.url || "")
        };
        null !== t.title && void 0 !== t.title && (r.title = t.title);
        const o = {
            type: "element",
            tagName: "a",
            properties: r,
            children: e.all(n)
        };
        return e.patch(n, o), e.applyData(n, o)
    },
    link: function(e, n) {
        const t = {
            href: Kn(n.url)
        };
        null !== n.title && void 0 !== n.title && (t.title = n.title);
        const r = {
            type: "element",
            tagName: "a",
            properties: t,
            children: e.all(n)
        };
        return e.patch(n, r), e.applyData(n, r)
    },
    listItem: function(e, n, t) {
        const r = e.all(n),
            o = t ? function(e) {
                let n = !1;
                if ("list" === e.type) {
                    n = e.spread || !1;
                    const t = e.children;
                    let r = -1;
                    for (; !n && ++r < t.length;) n = Gn(t[r])
                }
                return n
            }(t) : Gn(n),
            i = {},
            l = [];
        if ("boolean" == typeof n.checked) {
            const e = r[0];
            let t;
            e && "element" === e.type && "p" === e.tagName ? t = e : (t = {
                type: "element",
                tagName: "p",
                properties: {},
                children: []
            }, r.unshift(t)), t.children.length > 0 && t.children.unshift({
                type: "text",
                value: " "
            }), t.children.unshift({
                type: "element",
                tagName: "input",
                properties: {
                    type: "checkbox",
                    checked: n.checked,
                    disabled: !0
                },
                children: []
            }), i.className = ["task-list-item"]
        }
        let u = -1;
        for (; ++u < r.length;) {
            const e = r[u];
            (o || 0 !== u || "element" !== e.type || "p" !== e.tagName) && l.push({
                type: "text",
                value: "\n"
            }), "element" !== e.type || "p" !== e.tagName || o ? l.push(e) : l.push(...e.children)
        }
        const a = r[r.length - 1];
        a && (o || "element" !== a.type || "p" !== a.tagName) && l.push({
            type: "text",
            value: "\n"
        });
        const s = {
            type: "element",
            tagName: "li",
            properties: i,
            children: l
        };
        return e.patch(n, s), e.applyData(n, s)
    },
    list: function(e, n) {
        const t = {},
            r = e.all(n);
        let o = -1;
        for ("number" == typeof n.start && 1 !== n.start && (t.start = n.start); ++o < r.length;) {
            const e = r[o];
            if ("element" === e.type && "li" === e.tagName && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
                t.className = ["contains-task-list"];
                break
            }
        }
        const i = {
            type: "element",
            tagName: n.ordered ? "ol" : "ul",
            properties: t,
            children: e.wrap(r, !0)
        };
        return e.patch(n, i), e.applyData(n, i)
    },
    paragraph: function(e, n) {
        const t = {
            type: "element",
            tagName: "p",
            properties: {},
            children: e.all(n)
        };
        return e.patch(n, t), e.applyData(n, t)
    },
    root: function(e, n) {
        const t = {
            type: "root",
            children: e.wrap(e.all(n))
        };
        return e.patch(n, t), e.applyData(n, t)
    },
    strong: function(e, n) {
        const t = {
            type: "element",
            tagName: "strong",
            properties: {},
            children: e.all(n)
        };
        return e.patch(n, t), e.applyData(n, t)
    },
    table: function(e, n) {
        const t = e.all(n),
            r = t.shift(),
            o = [];
        if (r) {
            const t = {
                type: "element",
                tagName: "thead",
                properties: {},
                children: e.wrap([r], !0)
            };
            e.patch(n.children[0], t), o.push(t)
        }
        if (t.length > 0) {
            const r = {
                    type: "element",
                    tagName: "tbody",
                    properties: {},
                    children: e.wrap(t, !0)
                },
                i = Jn(n.children[1]),
                l = et(n.children[n.children.length - 1]);
            i.line && l.line && (r.position = {
                start: i,
                end: l
            }), o.push(r)
        }
        const i = {
            type: "element",
            tagName: "table",
            properties: {},
            children: e.wrap(o, !0)
        };
        return e.patch(n, i), e.applyData(n, i)
    },
    tableCell: function(e, n) {
        const t = {
            type: "element",
            tagName: "td",
            properties: {},
            children: e.all(n)
        };
        return e.patch(n, t), e.applyData(n, t)
    },
    tableRow: function(e, n, t) {
        const r = t ? t.children : void 0,
            o = 0 === (r ? r.indexOf(n) : 1) ? "th" : "td",
            i = t && "table" === t.type ? t.align : void 0,
            l = i ? i.length : n.children.length;
        let u = -1;
        const a = [];
        for (; ++u < l;) {
            const t = n.children[u],
                r = {},
                l = i ? i[u] : void 0;
            l && (r.align = l);
            let s = {
                type: "element",
                tagName: o,
                properties: r,
                children: []
            };
            t && (s.children = e.all(t), e.patch(t, s), s = e.applyData(n, s)), a.push(s)
        }
        const s = {
            type: "element",
            tagName: "tr",
            properties: {},
            children: e.wrap(a, !0)
        };
        return e.patch(n, s), e.applyData(n, s)
    },
    text: function(e, n) {
        const t = {
            type: "text",
            value: tt(String(n.value))
        };
        return e.patch(n, t), e.applyData(n, t)
    },
    thematicBreak: function(e, n) {
        const t = {
            type: "element",
            tagName: "hr",
            properties: {},
            children: []
        };
        return e.patch(n, t), e.applyData(n, t)
    },
    toml: it,
    yaml: it,
    definition: it,
    footnoteDefinition: it
};

function it() {
    return null
}
const lt = function(e) {
    if (null == e) return at;
    if ("string" == typeof e) return function(e) {
        return ut(n);

        function n(n) {
            return n && n.type === e
        }
    }(e);
    if ("object" == typeof e) return Array.isArray(e) ? function(e) {
        const n = [];
        let t = -1;
        for (; ++t < e.length;) n[t] = lt(e[t]);
        return ut(r);

        function r(...e) {
            let t = -1;
            for (; ++t < n.length;)
                if (n[t].call(this, ...e)) return !0;
            return !1
        }
    }(e) : function(e) {
        return ut(n);

        function n(n) {
            let t;
            for (t in e)
                if (n[t] !== e[t]) return !1;
            return !0
        }
    }(e);
    if ("function" == typeof e) return ut(e);
    throw new Error("Expected function, string, or object as test")
};

function ut(e) {
    return function(n, ...t) {
        return Boolean(n && "object" == typeof n && "type" in n && Boolean(e.call(this, n, ...t)))
    }
}

function at() {
    return !0
}
const st = function(e, n, t, r) {
    "function" == typeof n && "function" != typeof t && (r = t, t = n, n = null);
    const o = lt(n),
        i = r ? -1 : 1;
    ! function e(l, u, a) {
        const s = l && "object" == typeof l ? l : {};
        if ("string" == typeof s.type) {
            const e = "string" == typeof s.tagName ? s.tagName : "string" == typeof s.name ? s.name : void 0;
            Object.defineProperty(c, "name", {
                value: "node (" + l.type + (e ? "<" + e + ">" : "") + ")"
            })
        }
        return c;

        function c() {
            let s, c, f, p = [];
            if ((!n || o(l, u, a[a.length - 1] || null)) && (p = function(e) {
                    if (Array.isArray(e)) return e;
                    if ("number" == typeof e) return [true, e];
                    return [e]
                }(t(l, a)), false === p[0])) return p;
            if (l.children && "skip" !== p[0])
                for (c = (r ? l.children.length : -1) + i, f = a.concat(l); c > -1 && c < l.children.length;) {
                    if (s = e(l.children[c], c, f)(), false === s[0]) return s;
                    c = "number" == typeof s[1] ? s[1] : c + i
                }
            return p
        }
    }(e, void 0, [])()
};
const ct = function(e, n, t, r) {
    "function" == typeof n && "function" != typeof t && (r = t, t = n, n = null), st(e, n, (function(e, n) {
        const r = n[n.length - 1];
        return t(e, r ? r.children.indexOf(e) : null, r)
    }), r)
};
const ft = {}.hasOwnProperty;

function pt(e) {
    return String(e || "").toUpperCase()
}
const dt = {}.hasOwnProperty;

function ht(e, n) {
    const t = n || {},
        r = t.allowDangerousHtml || !1,
        o = {};
    return l.dangerous = r, l.clobberPrefix = void 0 === t.clobberPrefix || null === t.clobberPrefix ? "user-content-" : t.clobberPrefix, l.footnoteLabel = t.footnoteLabel || "Footnotes", l.footnoteLabelTagName = t.footnoteLabelTagName || "h2", l.footnoteLabelProperties = t.footnoteLabelProperties || {
        className: ["sr-only"]
    }, l.footnoteBackLabel = t.footnoteBackLabel || "Back to content", l.unknownHandler = t.unknownHandler, l.passThrough = t.passThrough, l.handlers = {
        ...ot,
        ...t.handlers
    }, l.definition = function(e) {
        const n = Object.create(null);
        if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
        return ct(e, "definition", (e => {
                const t = pt(e.identifier);
                t && !ft.call(n, t) && (n[t] = e)
            })),
            function(e) {
                const t = pt(e);
                return t && ft.call(n, t) ? n[t] : null
            }
    }(e), l.footnoteById = o, l.footnoteOrder = [], l.footnoteCounts = {}, l.patch = mt, l.applyData = gt, l.one = function(e, n) {
        return yt(l, e, n)
    }, l.all = function(e) {
        return xt(l, e)
    }, l.wrap = kt, l.augment = i, ct(e, "footnoteDefinition", (e => {
        const n = String(e.identifier).toUpperCase();
        dt.call(o, n) || (o[n] = e)
    })), l;

    function i(e, n) {
        if (e && "data" in e && e.data) {
            const t = e.data;
            t.hName && ("element" !== n.type && (n = {
                type: "element",
                tagName: "",
                properties: {},
                children: []
            }), n.tagName = t.hName), "element" === n.type && t.hProperties && (n.properties = {
                ...n.properties,
                ...t.hProperties
            }), "children" in n && n.children && t.hChildren && (n.children = t.hChildren)
        }
        if (e) {
            const t = "type" in e ? e : {
                position: e
            };
            (function(e) {
                return !(e && e.position && e.position.start && e.position.start.line && e.position.start.column && e.position.end && e.position.end.line && e.position.end.column)
            })(t) || (n.position = {
                start: Jn(t),
                end: et(t)
            })
        }
        return n
    }

    function l(e, n, t, r) {
        return Array.isArray(t) && (r = t, t = {}), i(e, {
            type: "element",
            tagName: n,
            properties: t || {},
            children: r || []
        })
    }
}

function mt(e, n) {
    e.position && (n.position = function(e) {
        return {
            start: Jn(e),
            end: et(e)
        }
    }(e))
}

function gt(e, n) {
    let t = n;
    if (e && e.data) {
        const n = e.data.hName,
            r = e.data.hChildren,
            o = e.data.hProperties;
        "string" == typeof n && ("element" === t.type ? t.tagName = n : t = {
            type: "element",
            tagName: n,
            properties: {},
            children: []
        }), "element" === t.type && o && (t.properties = {
            ...t.properties,
            ...o
        }), "children" in t && t.children && null != r && (t.children = r)
    }
    return t
}

function yt(e, n, t) {
    const r = n && n.type;
    if (!r) throw new Error("Expected node, got `" + n + "`");
    return dt.call(e.handlers, r) ? e.handlers[r](e, n, t) : e.passThrough && e.passThrough.includes(r) ? "children" in n ? {
        ...n,
        children: xt(e, n)
    } : n : e.unknownHandler ? e.unknownHandler(e, n, t) : function(e, n) {
        const t = n.data || {},
            r = !("value" in n) || dt.call(t, "hProperties") || dt.call(t, "hChildren") ? {
                type: "element",
                tagName: "div",
                properties: {},
                children: xt(e, n)
            } : {
                type: "text",
                value: n.value
            };
        return e.patch(n, r), e.applyData(n, r)
    }(e, n)
}

function xt(e, n) {
    const t = [];
    if ("children" in n) {
        const r = n.children;
        let o = -1;
        for (; ++o < r.length;) {
            const i = yt(e, r[o], n);
            if (i) {
                if (o && "break" === r[o - 1].type && (Array.isArray(i) || "text" !== i.type || (i.value = i.value.replace(/^\s+/, "")), !Array.isArray(i) && "element" === i.type)) {
                    const e = i.children[0];
                    e && "text" === e.type && (e.value = e.value.replace(/^\s+/, ""))
                }
                Array.isArray(i) ? t.push(...i) : t.push(i)
            }
        }
    }
    return t
}

function kt(e, n) {
    const t = [];
    let r = -1;
    for (n && t.push({
            type: "text",
            value: "\n"
        }); ++r < e.length;) r && t.push({
        type: "text",
        value: "\n"
    }), t.push(e[r]);
    return n && e.length > 0 && t.push({
        type: "text",
        value: "\n"
    }), t
}

function bt(e, n) {
    const t = ht(e, n),
        r = t.one(e, null),
        o = function(e) {
            const n = [];
            let t = -1;
            for (; ++t < e.footnoteOrder.length;) {
                const r = e.footnoteById[e.footnoteOrder[t]];
                if (!r) continue;
                const o = e.all(r),
                    i = String(r.identifier).toUpperCase(),
                    l = Kn(i.toLowerCase());
                let u = 0;
                const a = [];
                for (; ++u <= e.footnoteCounts[i];) {
                    const n = {
                        type: "element",
                        tagName: "a",
                        properties: {
                            href: "#" + e.clobberPrefix + "fnref-" + l + (u > 1 ? "-" + u : ""),
                            dataFootnoteBackref: !0,
                            className: ["data-footnote-backref"],
                            ariaLabel: e.footnoteBackLabel
                        },
                        children: [{
                            type: "text",
                            value: "↩"
                        }]
                    };
                    u > 1 && n.children.push({
                        type: "element",
                        tagName: "sup",
                        children: [{
                            type: "text",
                            value: String(u)
                        }]
                    }), a.length > 0 && a.push({
                        type: "text",
                        value: " "
                    }), a.push(n)
                }
                const s = o[o.length - 1];
                if (s && "element" === s.type && "p" === s.tagName) {
                    const e = s.children[s.children.length - 1];
                    e && "text" === e.type ? e.value += " " : s.children.push({
                        type: "text",
                        value: " "
                    }), s.children.push(...a)
                } else o.push(...a);
                const c = {
                    type: "element",
                    tagName: "li",
                    properties: {
                        id: e.clobberPrefix + "fn-" + l
                    },
                    children: e.wrap(o, !0)
                };
                e.patch(r, c), n.push(c)
            }
            if (0 !== n.length) return {
                type: "element",
                tagName: "section",
                properties: {
                    dataFootnotes: !0,
                    className: ["footnotes"]
                },
                children: [{
                    type: "element",
                    tagName: e.footnoteLabelTagName,
                    properties: {
                        ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
                        id: "footnote-label"
                    },
                    children: [{
                        type: "text",
                        value: e.footnoteLabel
                    }]
                }, {
                    type: "text",
                    value: "\n"
                }, {
                    type: "element",
                    tagName: "ol",
                    properties: {},
                    children: e.wrap(n, !0)
                }, {
                    type: "text",
                    value: "\n"
                }]
            }
        }(t);
    return o && r.children.push({
        type: "text",
        value: "\n"
    }, o), Array.isArray(r) ? {
        type: "root",
        children: r
    } : r
}
const vt = function(e, n) {
    return e && "run" in e ? function(e, n) {
        return (t, r, o) => {
            e.run(bt(t, n), r, (e => {
                o(e)
            }))
        }
    }(e, n) : function(e) {
        return n => bt(n, e)
    }(e || n)
};
class wt {
    constructor(e, n, t) {
        this.property = e, this.normal = n, t && (this.space = t)
    }
}

function St(e, n) {
    const t = {},
        r = {};
    let o = -1;
    for (; ++o < e.length;) Object.assign(t, e[o].property), Object.assign(r, e[o].normal);
    return new wt(t, r, n)
}

function Ct(e) {
    return e.toLowerCase()
}
wt.prototype.property = {}, wt.prototype.normal = {}, wt.prototype.space = null;
class Et {
    constructor(e, n) {
        this.property = e, this.attribute = n
    }
}
Et.prototype.space = null, Et.prototype.boolean = !1, Et.prototype.booleanish = !1, Et.prototype.overloadedBoolean = !1, Et.prototype.number = !1, Et.prototype.commaSeparated = !1, Et.prototype.spaceSeparated = !1, Et.prototype.commaOrSpaceSeparated = !1, Et.prototype.mustUseProperty = !1, Et.prototype.defined = !1;
let At = 0;
const Ft = zt(),
    Tt = zt(),
    Dt = zt(),
    Pt = zt(),
    Lt = zt(),
    It = zt(),
    Ot = zt();

function zt() {
    return 2 ** ++At
}
const jt = Object.freeze(Object.defineProperty({
        __proto__: null,
        boolean: Ft,
        booleanish: Tt,
        commaOrSpaceSeparated: Ot,
        commaSeparated: It,
        number: Pt,
        overloadedBoolean: Dt,
        spaceSeparated: Lt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Nt = Object.keys(jt);
class Mt extends Et {
    constructor(e, n, t, r) {
        let o = -1;
        if (super(e, n), Bt(this, "space", r), "number" == typeof t)
            for (; ++o < Nt.length;) {
                const e = Nt[o];
                Bt(this, Nt[o], (t & jt[e]) === jt[e])
            }
    }
}

function Bt(e, n, t) {
    t && (e[n] = t)
}
Mt.prototype.defined = !0;
const Rt = {}.hasOwnProperty;

function _t(e) {
    const n = {},
        t = {};
    let r;
    for (r in e.properties)
        if (Rt.call(e.properties, r)) {
            const o = e.properties[r],
                i = new Mt(r, e.transform(e.attributes || {}, r), o, e.space);
            e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), n[r] = i, t[Ct(r)] = r, t[Ct(i.attribute)] = r
        } return new wt(n, t, e.space)
}
const Ht = _t({
        space: "xlink",
        transform: (e, n) => "xlink:" + n.slice(5).toLowerCase(),
        properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null
        }
    }),
    Ut = _t({
        space: "xml",
        transform: (e, n) => "xml:" + n.slice(3).toLowerCase(),
        properties: {
            xmlLang: null,
            xmlBase: null,
            xmlSpace: null
        }
    });

function qt(e, n) {
    return n in e ? e[n] : n
}

function Vt(e, n) {
    return qt(e, n.toLowerCase())
}
const $t = _t({
        space: "xmlns",
        attributes: {
            xmlnsxlink: "xmlns:xlink"
        },
        transform: Vt,
        properties: {
            xmlns: null,
            xmlnsXLink: null
        }
    }),
    Wt = _t({
        transform: (e, n) => "role" === n ? n : "aria-" + n.slice(4).toLowerCase(),
        properties: {
            ariaActiveDescendant: null,
            ariaAtomic: Tt,
            ariaAutoComplete: null,
            ariaBusy: Tt,
            ariaChecked: Tt,
            ariaColCount: Pt,
            ariaColIndex: Pt,
            ariaColSpan: Pt,
            ariaControls: Lt,
            ariaCurrent: null,
            ariaDescribedBy: Lt,
            ariaDetails: null,
            ariaDisabled: Tt,
            ariaDropEffect: Lt,
            ariaErrorMessage: null,
            ariaExpanded: Tt,
            ariaFlowTo: Lt,
            ariaGrabbed: Tt,
            ariaHasPopup: null,
            ariaHidden: Tt,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: Lt,
            ariaLevel: Pt,
            ariaLive: null,
            ariaModal: Tt,
            ariaMultiLine: Tt,
            ariaMultiSelectable: Tt,
            ariaOrientation: null,
            ariaOwns: Lt,
            ariaPlaceholder: null,
            ariaPosInSet: Pt,
            ariaPressed: Tt,
            ariaReadOnly: Tt,
            ariaRelevant: null,
            ariaRequired: Tt,
            ariaRoleDescription: Lt,
            ariaRowCount: Pt,
            ariaRowIndex: Pt,
            ariaRowSpan: Pt,
            ariaSelected: Tt,
            ariaSetSize: Pt,
            ariaSort: null,
            ariaValueMax: Pt,
            ariaValueMin: Pt,
            ariaValueNow: Pt,
            ariaValueText: null,
            role: null
        }
    }),
    Qt = _t({
        space: "html",
        attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv"
        },
        transform: Vt,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
            abbr: null,
            accept: It,
            acceptCharset: Lt,
            accessKey: Lt,
            action: null,
            allow: null,
            allowFullScreen: Ft,
            allowPaymentRequest: Ft,
            allowUserMedia: Ft,
            alt: null,
            as: null,
            async: Ft,
            autoCapitalize: null,
            autoComplete: Lt,
            autoFocus: Ft,
            autoPlay: Ft,
            capture: Ft,
            charSet: null,
            checked: Ft,
            cite: null,
            className: Lt,
            cols: Pt,
            colSpan: null,
            content: null,
            contentEditable: Tt,
            controls: Ft,
            controlsList: Lt,
            coords: Pt | It,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: Ft,
            defer: Ft,
            dir: null,
            dirName: null,
            disabled: Ft,
            download: Dt,
            draggable: Tt,
            encType: null,
            enterKeyHint: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: Ft,
            formTarget: null,
            headers: Lt,
            height: Pt,
            hidden: Ft,
            high: Pt,
            href: null,
            hrefLang: null,
            htmlFor: Lt,
            httpEquiv: Lt,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: Ft,
            itemId: null,
            itemProp: Lt,
            itemRef: Lt,
            itemScope: Ft,
            itemType: Lt,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: Ft,
            low: Pt,
            manifest: null,
            max: null,
            maxLength: Pt,
            media: null,
            method: null,
            min: null,
            minLength: Pt,
            multiple: Ft,
            muted: Ft,
            name: null,
            nonce: null,
            noModule: Ft,
            noValidate: Ft,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: Ft,
            optimum: Pt,
            pattern: null,
            ping: Lt,
            placeholder: null,
            playsInline: Ft,
            poster: null,
            preload: null,
            readOnly: Ft,
            referrerPolicy: null,
            rel: Lt,
            required: Ft,
            reversed: Ft,
            rows: Pt,
            rowSpan: Pt,
            sandbox: Lt,
            scope: null,
            scoped: Ft,
            seamless: Ft,
            selected: Ft,
            shape: null,
            size: Pt,
            sizes: null,
            slot: null,
            span: Pt,
            spellCheck: Tt,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: Pt,
            step: null,
            style: null,
            tabIndex: Pt,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: Ft,
            useMap: null,
            value: Tt,
            width: Pt,
            wrap: null,
            align: null,
            aLink: null,
            archive: Lt,
            axis: null,
            background: null,
            bgColor: null,
            border: Pt,
            borderColor: null,
            bottomMargin: Pt,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: Ft,
            declare: Ft,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: Pt,
            leftMargin: Pt,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: Pt,
            marginWidth: Pt,
            noResize: Ft,
            noHref: Ft,
            noShade: Ft,
            noWrap: Ft,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: Pt,
            rules: null,
            scheme: null,
            scrolling: Tt,
            standby: null,
            summary: null,
            text: null,
            topMargin: Pt,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: Pt,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: Ft,
            disableRemotePlayback: Ft,
            prefix: null,
            property: null,
            results: Pt,
            security: null,
            unselectable: null
        }
    }),
    Yt = _t({
        space: "svg",
        attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin"
        },
        transform: qt,
        properties: {
            about: Ot,
            accentHeight: Pt,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: Pt,
            amplitude: Pt,
            arabicForm: null,
            ascent: Pt,
            attributeName: null,
            attributeType: null,
            azimuth: Pt,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: Pt,
            by: null,
            calcMode: null,
            capHeight: Pt,
            className: Lt,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: Pt,
            diffuseConstant: Pt,
            direction: null,
            display: null,
            dur: null,
            divisor: Pt,
            dominantBaseline: null,
            download: Ft,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: Pt,
            enableBackground: null,
            end: null,
            event: null,
            exponent: Pt,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: Pt,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: It,
            g2: It,
            glyphName: It,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: Pt,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: Pt,
            horizOriginX: Pt,
            horizOriginY: Pt,
            id: null,
            ideographic: Pt,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: Pt,
            k: Pt,
            k1: Pt,
            k2: Pt,
            k3: Pt,
            k4: Pt,
            kernelMatrix: Ot,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: Pt,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: Pt,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: Pt,
            overlineThickness: Pt,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: Pt,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: Lt,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: Pt,
            pointsAtY: Pt,
            pointsAtZ: Pt,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: Ot,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: Ot,
            rev: Ot,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: Ot,
            requiredFeatures: Ot,
            requiredFonts: Ot,
            requiredFormats: Ot,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: Pt,
            specularExponent: Pt,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: Pt,
            strikethroughThickness: Pt,
            string: null,
            stroke: null,
            strokeDashArray: Ot,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: Pt,
            strokeOpacity: Pt,
            strokeWidth: null,
            style: null,
            surfaceScale: Pt,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: Ot,
            tabIndex: Pt,
            tableValues: null,
            target: null,
            targetX: Pt,
            targetY: Pt,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: Ot,
            to: null,
            transform: null,
            u1: null,
            u2: null,
            underlinePosition: Pt,
            underlineThickness: Pt,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: Pt,
            values: null,
            vAlphabetic: Pt,
            vMathematical: Pt,
            vectorEffect: null,
            vHanging: Pt,
            vIdeographic: Pt,
            version: null,
            vertAdvY: Pt,
            vertOriginX: Pt,
            vertOriginY: Pt,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: Pt,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null
        }
    }),
    Kt = /^data[-\w.:]+$/i,
    Xt = /-[a-z]/g,
    Zt = /[A-Z]/g;

function Gt(e) {
    return "-" + e.toLowerCase()
}

function Jt(e) {
    return e.charAt(1).toUpperCase()
}
const er = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink"
    },
    nr = St([Ut, Ht, $t, Wt, Qt], "html"),
    tr = St([Ut, Ht, $t, Wt, Yt], "svg"),
    rr = function(e) {
        if (null == e) return ir;
        if ("string" == typeof e) return function(e) {
            return or(n);

            function n(n) {
                return n && n.type === e
            }
        }(e);
        if ("object" == typeof e) return Array.isArray(e) ? function(e) {
            const n = [];
            let t = -1;
            for (; ++t < e.length;) n[t] = rr(e[t]);
            return or(r);

            function r(...e) {
                let t = -1;
                for (; ++t < n.length;)
                    if (n[t].call(this, ...e)) return !0;
                return !1
            }
        }(e) : function(e) {
            return or(n);

            function n(n) {
                let t;
                for (t in e)
                    if (n[t] !== e[t]) return !1;
                return !0
            }
        }(e);
        if ("function" == typeof e) return or(e);
        throw new Error("Expected function, string, or object as test")
    };

function or(e) {
    return function(n, ...t) {
        return Boolean(n && "object" == typeof n && "type" in n && Boolean(e.call(this, n, ...t)))
    }
}

function ir() {
    return !0
}
const lr = function(e, n, t, r) {
    "function" == typeof n && "function" != typeof t && (r = t, t = n, n = null);
    const o = rr(n),
        i = r ? -1 : 1;
    ! function e(l, u, a) {
        const s = l && "object" == typeof l ? l : {};
        if ("string" == typeof s.type) {
            const e = "string" == typeof s.tagName ? s.tagName : "string" == typeof s.name ? s.name : void 0;
            Object.defineProperty(c, "name", {
                value: "node (" + l.type + (e ? "<" + e + ">" : "") + ")"
            })
        }
        return c;

        function c() {
            let s, c, f, p = [];
            if ((!n || o(l, u, a[a.length - 1] || null)) && (p = function(e) {
                    if (Array.isArray(e)) return e;
                    if ("number" == typeof e) return [true, e];
                    return [e]
                }(t(l, a)), false === p[0])) return p;
            if (l.children && "skip" !== p[0])
                for (c = (r ? l.children.length : -1) + i, f = a.concat(l); c > -1 && c < l.children.length;) {
                    if (s = e(l.children[c], c, f)(), false === s[0]) return s;
                    c = "number" == typeof s[1] ? s[1] : c + i
                }
            return p
        }
    }(e, void 0, [])()
};

function ur(e) {
    if (e.allowedElements && e.disallowedElements) throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
    if (e.allowedElements || e.disallowedElements || e.allowElement) return n => {
        ! function(e, n, t, r) {
            "function" == typeof n && "function" != typeof t && (r = t, t = n, n = null), lr(e, n, (function(e, n) {
                const r = n[n.length - 1];
                return t(e, r ? r.children.indexOf(e) : null, r)
            }), r)
        }(n, "element", ((n, t, r) => {
            const o = r;
            let i;
            if (e.allowedElements ? i = !e.allowedElements.includes(n.tagName) : e.disallowedElements && (i = e.disallowedElements.includes(n.tagName)), !i && e.allowElement && "number" == typeof t && (i = !e.allowElement(n, t, o)), i && "number" == typeof t) return e.unwrapDisallowed && n.children ? o.children.splice(t, 1, ...n.children) : o.children.splice(t, 1), t
        }))
    }
}

function ar(e) {
    const n = e && "object" == typeof e && "text" === e.type ? e.value || "" : e;
    return "string" == typeof n && "" === n.replace(/[ \t\n\f\r]/g, "")
}
var sr = {
        exports: {}
    },
    cr = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    fr = /\n/g,
    pr = /^\s*/,
    dr = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    hr = /^:\s*/,
    mr = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    gr = /^[;\s]*/,
    yr = /^\s+|\s+$/g;

function xr(e) {
    return e ? e.replace(yr, "") : ""
}
var kr = function(e, n) {
    if ("string" != typeof e) throw new TypeError("First argument must be a string");
    if (!e) return [];
    n = n || {};
    var t = 1,
        r = 1;

    function o(e) {
        var n = e.match(fr);
        n && (t += n.length);
        var o = e.lastIndexOf("\n");
        r = ~o ? e.length - o : r + e.length
    }

    function i() {
        var e = {
            line: t,
            column: r
        };
        return function(n) {
            return n.position = new l(e), s(), n
        }
    }

    function l(e) {
        this.start = e, this.end = {
            line: t,
            column: r
        }, this.source = n.source
    }

    function u(o) {
        var i = new Error(n.source + ":" + t + ":" + r + ": " + o);
        if (i.reason = o, i.filename = n.source, i.line = t, i.column = r, i.source = e, !n.silent) throw i
    }

    function a(n) {
        var t = n.exec(e);
        if (t) {
            var r = t[0];
            return o(r), e = e.slice(r.length), t
        }
    }

    function s() {
        a(pr)
    }

    function c(e) {
        var n;
        for (e = e || []; n = f();) !1 !== n && e.push(n);
        return e
    }

    function f() {
        var n = i();
        if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (var t = 2;
                "" != e.charAt(t) && ("*" != e.charAt(t) || "/" != e.charAt(t + 1));) ++t;
            if (t += 2, "" === e.charAt(t - 1)) return u("End of comment missing");
            var l = e.slice(2, t - 2);
            return r += 2, o(l), e = e.slice(t), r += 2, n({
                type: "comment",
                comment: l
            })
        }
    }

    function p() {
        var e = i(),
            n = a(dr);
        if (n) {
            if (f(), !a(hr)) return u("property missing ':'");
            var t = a(mr),
                r = e({
                    type: "declaration",
                    property: xr(n[0].replace(cr, "")),
                    value: t ? xr(t[0].replace(cr, "")) : ""
                });
            return a(gr), r
        }
    }
    return l.prototype.content = e, s(),
        function() {
            var e, n = [];
            for (c(n); e = p();) !1 !== e && (n.push(e), c(n));
            return n
        }()
};

function br(e, n) {
    var t, r = null;
    if (!e || "string" != typeof e) return r;
    for (var o, i, l = kr(e), u = "function" == typeof n, a = 0, s = l.length; a < s; a++) o = (t = l[a]).property, i = t.value, u ? n(o, i, t) : i && (r || (r = {}), r[o] = i);
    return r
}
sr.exports = br, sr.exports.default = br;
const vr = e(sr.exports),
    wr = {}.hasOwnProperty,
    Sr = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

function Cr(e, n) {
    const t = [];
    let r, o = -1;
    for (; ++o < n.children.length;) r = n.children[o], "element" === r.type ? t.push(Er(e, r, o, n)) : "text" === r.type ? "element" === n.type && Sr.has(n.tagName) && ar(r) || t.push(r.value) : "raw" !== r.type || e.options.skipHtml || t.push(r.value);
    return t
}

function Er(e, t, r, o) {
    const i = e.options,
        l = void 0 === i.transformLinkUri ? T : i.transformLinkUri,
        u = e.schema,
        a = t.tagName,
        s = {};
    let c, f = u;
    if ("html" === u.space && "svg" === a && (f = tr, e.schema = f), t.properties)
        for (c in t.properties) wr.call(t.properties, c) && Fr(s, c, t.properties[c], e);
    "ol" !== a && "ul" !== a || e.listDepth++;
    const p = Cr(e, t);
    "ol" !== a && "ul" !== a || e.listDepth--, e.schema = u;
    const d = t.position || {
            start: {
                line: null,
                column: null,
                offset: null
            },
            end: {
                line: null,
                column: null,
                offset: null
            }
        },
        h = i.components && wr.call(i.components, a) ? i.components[a] : a,
        m = "string" == typeof h || h === n.Fragment;
    if (!C.isValidElementType(h)) throw new TypeError(`Component for name \`${a}\` not defined or is not renderable`);
    if (s.key = r, "a" === a && i.linkTarget && (s.target = "function" == typeof i.linkTarget ? i.linkTarget(String(s.href || ""), t.children, "string" == typeof s.title ? s.title : null) : i.linkTarget), "a" === a && l && (s.href = l(String(s.href || ""), t.children, "string" == typeof s.title ? s.title : null)), m || "code" !== a || "element" !== o.type || "pre" === o.tagName || (s.inline = !0), m || "h1" !== a && "h2" !== a && "h3" !== a && "h4" !== a && "h5" !== a && "h6" !== a || (s.level = Number.parseInt(a.charAt(1), 10)), "img" === a && i.transformImageUri && (s.src = i.transformImageUri(String(s.src || ""), String(s.alt || ""), "string" == typeof s.title ? s.title : null)), !m && "li" === a && "element" === o.type) {
        const e = function(e) {
            let n = -1;
            for (; ++n < e.children.length;) {
                const t = e.children[n];
                if ("element" === t.type && "input" === t.tagName) return t
            }
            return null
        }(t);
        s.checked = e && e.properties ? Boolean(e.properties.checked) : null, s.index = Ar(o, t), s.ordered = "ol" === o.tagName
    }
    var g;
    return m || "ol" !== a && "ul" !== a || (s.ordered = "ol" === a, s.depth = e.listDepth), "td" !== a && "th" !== a || (s.align && (s.style || (s.style = {}), s.style.textAlign = s.align, delete s.align), m || (s.isHeader = "th" === a)), m || "tr" !== a || "element" !== o.type || (s.isHeader = Boolean("thead" === o.tagName)), i.sourcePos && (s["data-sourcepos"] = [(g = d).start.line, ":", g.start.column, "-", g.end.line, ":", g.end.column].map(String).join("")), !m && i.rawSourcePos && (s.sourcePosition = t.position), !m && i.includeElementIndex && (s.index = Ar(o, t), s.siblingCount = Ar(o)), m || (s.node = t), p.length > 0 ? n.createElement(h, s, p) : n.createElement(h, s)
}

function Ar(e, n) {
    let t = -1,
        r = 0;
    for (; ++t < e.children.length && e.children[t] !== n;) "element" === e.children[t].type && r++;
    return r
}

function Fr(e, n, t, r) {
    const o = function(e, n) {
        const t = Ct(n);
        let r = n,
            o = Et;
        if (t in e.normal) return e.property[e.normal[t]];
        if (t.length > 4 && "data" === t.slice(0, 4) && Kt.test(n)) {
            if ("-" === n.charAt(4)) {
                const e = n.slice(5).replace(Xt, Jt);
                r = "data" + e.charAt(0).toUpperCase() + e.slice(1)
            } else {
                const e = n.slice(4);
                if (!Xt.test(e)) {
                    let t = e.replace(Zt, Gt);
                    "-" !== t.charAt(0) && (t = "-" + t), n = "data" + t
                }
            }
            o = Mt
        }
        return new o(r, n)
    }(r.schema, n);
    let i = t;
    null != i && i == i && (Array.isArray(i) && (i = o.commaSeparated ? function(e, n) {
        const t = n || {};
        return ("" === e[e.length - 1] ? [...e, ""] : e).join((t.padRight ? " " : "") + "," + (!1 === t.padLeft ? "" : " ")).trim()
    }(i) : i.join(" ").trim()), "style" === o.property && "string" == typeof i && (i = function(e) {
        const n = {};
        try {
            vr(e, t)
        } catch {}
        return n;

        function t(e, t) {
            const r = "-ms-" === e.slice(0, 4) ? `ms-${e.slice(4)}` : e;
            n[r.replace(/-([a-z])/g, Tr)] = t
        }
    }(i)), o.space && o.property ? e[wr.call(er, o.property) ? er[o.property] : o.property] = i : o.attribute && (e[o.attribute] = i))
}

function Tr(e, n) {
    return n.toUpperCase()
}
const Dr = {}.hasOwnProperty,
    Pr = {
        plugins: {
            to: "remarkPlugins",
            id: "change-plugins-to-remarkplugins"
        },
        renderers: {
            to: "components",
            id: "change-renderers-to-components"
        },
        astPlugins: {
            id: "remove-buggy-html-in-markdown-parser"
        },
        allowDangerousHtml: {
            id: "remove-buggy-html-in-markdown-parser"
        },
        escapeHtml: {
            id: "remove-buggy-html-in-markdown-parser"
        },
        source: {
            to: "children",
            id: "change-source-to-children"
        },
        allowNode: {
            to: "allowElement",
            id: "replace-allownode-allowedtypes-and-disallowedtypes"
        },
        allowedTypes: {
            to: "allowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes"
        },
        disallowedTypes: {
            to: "disallowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes"
        },
        includeNodeIndex: {
            to: "includeElementIndex",
            id: "change-includenodeindex-to-includeelementindex"
        }
    };

function Lr(e) {
    for (const n in Pr)
        if (Dr.call(Pr, n) && Dr.call(e, n)) {
            const e = Pr[n];
            console.warn(`[react-markdown] Warning: please ${e.to?`use \`${e.to}\` instead of`:"remove"} \`${n}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${e.id}> for more info)`), delete Pr[n]
        } const t = Q().use(Yn).use(e.remarkPlugins || []).use(vt, {
            ...e.remarkRehypeOptions,
            allowDangerousHtml: !0
        }).use(e.rehypePlugins || []).use(ur, e),
        r = new _;
    "string" == typeof e.children ? r.value = e.children : void 0 !== e.children && null !== e.children && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);
    const o = t.runSync(t.parse(r), r);
    if ("root" !== o.type) throw new TypeError("Expected a `root` node");
    let i = n.createElement(n.Fragment, {}, Cr({
        options: e,
        schema: nr,
        listDepth: 0
    }, o));
    return e.className && (i = n.createElement("div", {
        className: e.className
    }, i)), i
}
Lr.propTypes = {
    children: t.string,
    className: t.string,
    allowElement: t.func,
    allowedElements: t.arrayOf(t.string),
    disallowedElements: t.arrayOf(t.string),
    unwrapDisallowed: t.bool,
    remarkPlugins: t.arrayOf(t.oneOfType([t.object, t.func, t.arrayOf(t.oneOfType([t.bool, t.string, t.object, t.func, t.arrayOf(t.any)]))])),
    rehypePlugins: t.arrayOf(t.oneOfType([t.object, t.func, t.arrayOf(t.oneOfType([t.bool, t.string, t.object, t.func, t.arrayOf(t.any)]))])),
    sourcePos: t.bool,
    rawSourcePos: t.bool,
    skipHtml: t.bool,
    includeElementIndex: t.bool,
    transformLinkUri: t.oneOfType([t.func, t.bool]),
    linkTarget: t.oneOfType([t.func, t.string]),
    transformImageUri: t.func,
    components: t.object
};
const Ir = () => {
        const {
            locale: e
        } = i(), {
            guild: n
        } = l(), t = () => {
            a("dashboard_livebuzz_ads_click", {
                source: "plugins"
            }, n, !0), window.open(`/${e}/livebuzz`, "livebuzz")
        };
        return u.jsxs(u.Fragment, {
            children: [u.jsx("img", {
                onClick: t,
                className: "cursor-pointer w-full mb-10 hidden lg:block",
                src: "/assets/LiveBuzzBanner-fb5685bf.png",
                alt: "Create your own chrome extension"
            }), u.jsx("img", {
                onClick: t,
                className: "cursor-pointer w-full mb-10 hidden md:block lg:hidden lg:mt-0 mt-10",
                src: "/assets/LiveBuzzBannerMid-37b700a4.png",
                alt: "Create your own chrome extension"
            }), u.jsx("img", {
                onClick: t,
                className: "cursor-pointer w-full mb-10 md:hidden lg:mt-0 mt-10",
                src: "/assets/LiveBuzzBannerSmall-20f1c101.png",
                alt: "Create your own chrome extension"
            })]
        })
    },
    Or = ({
        plugin: e,
        renderTitle: n,
        renderDescription: t,
        renderControls: a,
        isBeta: d = !1,
        premiumBadge: h = !1,
        toggle: m = !0,
        showMoreDescription: v,
        className: S = "",
        onDisable: C
    }) => {
        const E = s(),
            {
                locale: A
            } = i(),
            {
                guild: F,
                isPremium: T
            } = l(),
            {
                alert: D
            } = (e => {
                const {
                    gw: n
                } = w(), {
                    data: t,
                    isLoading: i,
                    refetch: l
                } = g(["plugins-alerts"], (async () => {
                    const e = await r.listAlerts();
                    return e.ok ? e?.data?.alerts : []
                }));
                return o.useEffect((() => {
                    if (n) return n.listen("PLUGIN_ALERT_CREATED", (() => l())), n.listen("PLUGIN_ALERT_DELETED", (() => l())), () => {
                        n.off("PLUGIN_ALERT_CREATED", (() => l())), n.off("PLUGIN_ALERT_DELETED", (() => l()))
                    }
                }), [n]), {
                    alert: o.useMemo((() => t && e ? t?.find((n => n?.plugin === e)) : null), [t, e]),
                    loading: i
                }
            })(e),
            P = "enabled" === c("livebuzz-fd") && ["twitch", "youtube", "twitter", "kick", "tiktok", "instagram", "reddit"].indexOf(e || "") > -1,
            [L, I] = o.useState(!1);
        return u.jsxs(u.Fragment, {
            children: [P ? u.jsx(Ir, {}) : null, u.jsxs("div", {
                className: "flex justify-between mb-8 lg:mb-6",
                children: [u.jsxs("div", {
                    className: `flex flex-col grow items-center lg:items-start ${S}`,
                    children: [u.jsxs("div", {
                        className: "bg-dark-800 sm:bg-transparent flex items-center justify-between w-[calc(100%+48px)] sm:w-full px-6 py-4 sm:px-0 sm:py-0 mb-3 sm:mb-0",
                        children: [u.jsx(y, {
                            className: "sm:hidden",
                            onClick: () => E(`/${A}/dashboard/` + F?.id)
                        }), u.jsxs("h4", {
                            className: "font-bold text-dark-100 text-h5 flex-1 text-center lg:text-left flex flex-row items-center",
                            children: [n ? n() : u.jsx(f, {
                                id: `plugins.${e}.name`
                            }), d && u.jsx(x, {
                                className: "ml-3"
                            }), h && u.jsx(k, {
                                className: "ml-3",
                                hasText: !0
                            })]
                        }), e && m ? "boolean" == typeof m ? u.jsx(zr, {
                            plugin: e,
                            onDisable: C
                        }) : m : null]
                    }), a && u.jsx("div", {
                        className: "lg:hidden",
                        children: a()
                    }), u.jsx("p", {
                        className: "text-base text-dark-300 max-w-[830px] ml-0 w-full mt-3 text-center sm:text-left",
                        children: t ? t() : u.jsx(f, {
                            id: `plugins.${e}.description`
                        })
                    }), v && u.jsxs(u.Fragment, {
                        children: [u.jsxs("p", {
                            className: "flex items-center justify-start text-dark-100 hover:underline cursor-pointer text-sm mt-1",
                            onClick: () => I(!L),
                            children: ["Show more", u.jsx(b, {
                                className: `w-5 text-dark-100 transition-all duration-200 ${L&&"rotate-90"}`
                            })]
                        }), L && u.jsx("p", {
                            className: "mt-1",
                            children: u.jsx(f, {
                                id: `plugins.${e}.description.showMore`
                            })
                        })]
                    })]
                }), a && u.jsx("div", {
                    className: "hidden lg:block",
                    children: a()
                })]
            }), D && u.jsxs("div", {
                className: p("bg-opacity-10 rounded-lg p-5 mb-6 border", {
                    "bg-warning-default text-warning-default border-warning-default": "warning" === D?.type,
                    "bg-danger-default text-danger-default border-danger-default": "error" === D?.type,
                    "bg-teal-default text-teal-default border-teal-default": "info" === D?.type
                }),
                children: [D?.title && u.jsx("p", {
                    className: "font-bold text-xl mb-2",
                    children: D?.title
                }), u.jsx("p", {
                    className: "whitespace-pre-line",
                    children: u.jsx(Lr, {
                        children: D?.description,
                        components: {
                            a: ({
                                children: e,
                                node: n,
                                ...t
                            }) => u.jsx("a", {
                                ...t,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-white underline",
                                children: e
                            })
                        }
                    })
                })]
            })]
        })
    },
    zr = ({
        plugin: e,
        onDisable: n
    }) => {
        const t = s(),
            {
                locale: r
            } = i(),
            {
                guild: o
            } = l(),
            {
                updatePluginConfig: a,
                config: c
            } = S({
                pluginId: e
            }),
            {
                isOpen: p,
                open: g,
                close: y
            } = d();
        return u.jsxs("div", {
            children: [u.jsx(m, {
                eventLabel: c.enabled ? "plugins.active.toggle" : "plugins.inactive.toggle",
                labelPosition: "left",
                title: u.jsx("p", {
                    className: "text-sm text-dark-100 hidden md:inline-block",
                    children: u.jsx(f, {
                        id: c.enabled ? "plugins.active.toggle" : "plugins.inactive.toggle"
                    })
                }),
                displayTextToggle: !0,
                onChange: e => {
                    if (!e) {
                        if (n && n()) return;
                        return g()
                    }
                    a({
                        ...c,
                        enabled: !0
                    })
                },
                value: c.enabled
            }), u.jsxs(v, {
                open: p,
                theme: "danger",
                onClose: y,
                label: "disable_plugin",
                children: [u.jsx(v.Header, {
                    title: u.jsx(f, {
                        id: "plugins.disable.modal.title",
                        values: {
                            plugin: () => u.jsx(f, {
                                id: `plugins.${e}.name`
                            })
                        }
                    }),
                    subtitle: u.jsx("p", {
                        className: "text-sm",
                        children: u.jsx(f, {
                            id: "plugins.disable.modal.text"
                        })
                    }),
                    className: "mb-8"
                }), u.jsx(v.Footer, {
                    renderConfirmButton: () => u.jsx(h, {
                        theme: "danger",
                        onClick: async () => {
                            await a({
                                ...c,
                                enabled: !1
                            }), t(`/${r}/dashboard/${o?.id}`)
                        },
                        children: u.jsx(f, {
                            id: "plugins.disable.modal.button",
                            values: {
                                plugin: () => u.jsx(f, {
                                    id: `plugins.${e}.name`
                                })
                            }
                        })
                    }),
                    cancelButtonText: "button.cancel"
                })]
            })]
        })
    };
export {
    Or as P
};
