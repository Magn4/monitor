import {
    bw as t,
    al as r,
    e
} from "./index-afe8eeea.js";
var i = {
    exports: {}
};
! function(r, e) {
    function i(t, r) {
        if (!t) throw new Error(r || "Assertion failed")
    }

    function n(t, r) {
        t.super_ = r;
        var e = function() {};
        e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
    }

    function o(t, r, e) {
        if (o.isBN(t)) return t;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== r && "be" !== r || (e = r, r = 10), this._init(t || 0, r || 10, e || "be"))
    }
    var s;
    "object" == typeof r ? r.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
    try {
        s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : t.Buffer
    } catch (I) {}

    function a(t, r) {
        var e = t.charCodeAt(r);
        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : void i(!1, "Invalid character in " + t)
    }

    function h(t, r, e) {
        var i = a(t, e);
        return e - 1 >= r && (i |= a(t, e - 1) << 4), i
    }

    function u(t, r, e, n) {
        for (var o = 0, s = 0, a = Math.min(t.length, e), h = r; h < a; h++) {
            var u = t.charCodeAt(h) - 48;
            o *= n, s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u, i(u >= 0 && s < n, "Invalid character"), o += s
        }
        return o
    }

    function l(t, r) {
        t.words = r.words, t.length = r.length, t.negative = r.negative, t.red = r.red
    }
    if (o.isBN = function(t) {
            return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
        }, o.max = function(t, r) {
            return t.cmp(r) > 0 ? t : r
        }, o.min = function(t, r) {
            return t.cmp(r) < 0 ? t : r
        }, o.prototype._init = function(t, r, e) {
            if ("number" == typeof t) return this._initNumber(t, r, e);
            if ("object" == typeof t) return this._initArray(t, r, e);
            "hex" === r && (r = 16), i(r === (0 | r) && r >= 2 && r <= 36);
            var n = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === r ? this._parseHex(t, n, e) : (this._parseBase(t, r, n), "le" === e && this._initArray(this.toArray(), r, e)))
        }, o.prototype._initNumber = function(t, r, e) {
            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (i(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === e && this._initArray(this.toArray(), r, e)
        }, o.prototype._initArray = function(t, r, e) {
            if (i("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var o, s, a = 0;
            if ("be" === e)
                for (n = t.length - 1, o = 0; n >= 0; n -= 3) s = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
            else if ("le" === e)
                for (n = 0, o = 0; n < t.length; n += 3) s = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
            return this._strip()
        }, o.prototype._parseHex = function(t, r, e) {
            this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var n, o = 0,
                s = 0;
            if ("be" === e)
                for (i = t.length - 1; i >= r; i -= 2) n = h(t, r, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
            else
                for (i = (t.length - r) % 2 == 0 ? r + 1 : r; i < t.length; i += 2) n = h(t, r, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
            this._strip()
        }, o.prototype._parseBase = function(t, r, e) {
            this.words = [0], this.length = 1;
            for (var i = 0, n = 1; n <= 67108863; n *= r) i++;
            i--, n = n / r | 0;
            for (var o = t.length - e, s = o % i, a = Math.min(o, o - s) + e, h = 0, l = e; l < a; l += i) h = u(t, l, l + i, r), this.imuln(n), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
            if (0 !== s) {
                var f = 1;
                for (h = u(t, l, t.length, r), l = 0; l < s; l++) f *= r;
                this.imuln(f), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
            }
            this._strip()
        }, o.prototype.copy = function(t) {
            t.words = new Array(this.length);
            for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
            t.length = this.length, t.negative = this.negative, t.red = this.red
        }, o.prototype._move = function(t) {
            l(t, this)
        }, o.prototype.clone = function() {
            var t = new o(null);
            return this.copy(t), t
        }, o.prototype._expand = function(t) {
            for (; this.length < t;) this.words[this.length++] = 0;
            return this
        }, o.prototype._strip = function() {
            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
            return this._normSign()
        }, o.prototype._normSign = function() {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
        }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
        o.prototype[Symbol.for("nodejs.util.inspect.custom")] = f
    } catch (I) {
        o.prototype.inspect = f
    } else o.prototype.inspect = f;

    function f() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
    }
    var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
        d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        m = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

    function p(t, r, e) {
        e.negative = r.negative ^ t.negative;
        var i = t.length + r.length | 0;
        e.length = i, i = i - 1 | 0;
        var n = 0 | t.words[0],
            o = 0 | r.words[0],
            s = n * o,
            a = 67108863 & s,
            h = s / 67108864 | 0;
        e.words[0] = a;
        for (var u = 1; u < i; u++) {
            for (var l = h >>> 26, f = 67108863 & h, c = Math.min(u, r.length - 1), d = Math.max(0, u - t.length + 1); d <= c; d++) {
                var m = u - d | 0;
                l += (s = (n = 0 | t.words[m]) * (o = 0 | r.words[d]) + f) / 67108864 | 0, f = 67108863 & s
            }
            e.words[u] = 0 | f, h = 0 | l
        }
        return 0 !== h ? e.words[u] = 0 | h : e.length--, e._strip()
    }
    o.prototype.toString = function(t, r) {
        var e;
        if (r = 0 | r || 1, 16 === (t = t || 10) || "hex" === t) {
            e = "";
            for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                var a = this.words[s],
                    h = (16777215 & (a << n | o)).toString(16);
                o = a >>> 24 - n & 16777215, (n += 2) >= 26 && (n -= 26, s--), e = 0 !== o || s !== this.length - 1 ? c[6 - h.length] + h + e : h + e
            }
            for (0 !== o && (e = o.toString(16) + e); e.length % r != 0;) e = "0" + e;
            return 0 !== this.negative && (e = "-" + e), e
        }
        if (t === (0 | t) && t >= 2 && t <= 36) {
            var u = d[t],
                l = m[t];
            e = "";
            var f = this.clone();
            for (f.negative = 0; !f.isZero();) {
                var p = f.modrn(l).toString(t);
                e = (f = f.idivn(l)).isZero() ? p + e : c[u - p.length] + p + e
            }
            for (this.isZero() && (e = "0" + e); e.length % r != 0;) e = "0" + e;
            return 0 !== this.negative && (e = "-" + e), e
        }
        i(!1, "Base should be between 2 and 36")
    }, o.prototype.toNumber = function() {
        var t = this.words[0];
        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
    }, o.prototype.toJSON = function() {
        return this.toString(16, 2)
    }, s && (o.prototype.toBuffer = function(t, r) {
        return this.toArrayLike(s, t, r)
    }), o.prototype.toArray = function(t, r) {
        return this.toArrayLike(Array, t, r)
    }, o.prototype.toArrayLike = function(t, r, e) {
        this._strip();
        var n = this.byteLength(),
            o = e || Math.max(1, n);
        i(n <= o, "byte array longer than desired length"), i(o > 0, "Requested array length <= 0");
        var s = function(t, r) {
            return t.allocUnsafe ? t.allocUnsafe(r) : new t(r)
        }(t, o);
        return this["_toArrayLike" + ("le" === r ? "LE" : "BE")](s, n), s
    }, o.prototype._toArrayLikeLE = function(t, r) {
        for (var e = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
            var s = this.words[n] << o | i;
            t[e++] = 255 & s, e < t.length && (t[e++] = s >> 8 & 255), e < t.length && (t[e++] = s >> 16 & 255), 6 === o ? (e < t.length && (t[e++] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2)
        }
        if (e < t.length)
            for (t[e++] = i; e < t.length;) t[e++] = 0
    }, o.prototype._toArrayLikeBE = function(t, r) {
        for (var e = t.length - 1, i = 0, n = 0, o = 0; n < this.length; n++) {
            var s = this.words[n] << o | i;
            t[e--] = 255 & s, e >= 0 && (t[e--] = s >> 8 & 255), e >= 0 && (t[e--] = s >> 16 & 255), 6 === o ? (e >= 0 && (t[e--] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2)
        }
        if (e >= 0)
            for (t[e--] = i; e >= 0;) t[e--] = 0
    }, Math.clz32 ? o.prototype._countBits = function(t) {
        return 32 - Math.clz32(t)
    } : o.prototype._countBits = function(t) {
        var r = t,
            e = 0;
        return r >= 4096 && (e += 13, r >>>= 13), r >= 64 && (e += 7, r >>>= 7), r >= 8 && (e += 4, r >>>= 4), r >= 2 && (e += 2, r >>>= 2), e + r
    }, o.prototype._zeroBits = function(t) {
        if (0 === t) return 26;
        var r = t,
            e = 0;
        return 0 == (8191 & r) && (e += 13, r >>>= 13), 0 == (127 & r) && (e += 7, r >>>= 7), 0 == (15 & r) && (e += 4, r >>>= 4), 0 == (3 & r) && (e += 2, r >>>= 2), 0 == (1 & r) && e++, e
    }, o.prototype.bitLength = function() {
        var t = this.words[this.length - 1],
            r = this._countBits(t);
        return 26 * (this.length - 1) + r
    }, o.prototype.zeroBits = function() {
        if (this.isZero()) return 0;
        for (var t = 0, r = 0; r < this.length; r++) {
            var e = this._zeroBits(this.words[r]);
            if (t += e, 26 !== e) break
        }
        return t
    }, o.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8)
    }, o.prototype.toTwos = function(t) {
        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
    }, o.prototype.fromTwos = function(t) {
        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
    }, o.prototype.isNeg = function() {
        return 0 !== this.negative
    }, o.prototype.neg = function() {
        return this.clone().ineg()
    }, o.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this
    }, o.prototype.iuor = function(t) {
        for (; this.length < t.length;) this.words[this.length++] = 0;
        for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] | t.words[r];
        return this._strip()
    }, o.prototype.ior = function(t) {
        return i(0 == (this.negative | t.negative)), this.iuor(t)
    }, o.prototype.or = function(t) {
        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
    }, o.prototype.uor = function(t) {
        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
    }, o.prototype.iuand = function(t) {
        var r;
        r = this.length > t.length ? t : this;
        for (var e = 0; e < r.length; e++) this.words[e] = this.words[e] & t.words[e];
        return this.length = r.length, this._strip()
    }, o.prototype.iand = function(t) {
        return i(0 == (this.negative | t.negative)), this.iuand(t)
    }, o.prototype.and = function(t) {
        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
    }, o.prototype.uand = function(t) {
        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
    }, o.prototype.iuxor = function(t) {
        var r, e;
        this.length > t.length ? (r = this, e = t) : (r = t, e = this);
        for (var i = 0; i < e.length; i++) this.words[i] = r.words[i] ^ e.words[i];
        if (this !== r)
            for (; i < r.length; i++) this.words[i] = r.words[i];
        return this.length = r.length, this._strip()
    }, o.prototype.ixor = function(t) {
        return i(0 == (this.negative | t.negative)), this.iuxor(t)
    }, o.prototype.xor = function(t) {
        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
    }, o.prototype.uxor = function(t) {
        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
    }, o.prototype.inotn = function(t) {
        i("number" == typeof t && t >= 0);
        var r = 0 | Math.ceil(t / 26),
            e = t % 26;
        this._expand(r), e > 0 && r--;
        for (var n = 0; n < r; n++) this.words[n] = 67108863 & ~this.words[n];
        return e > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - e), this._strip()
    }, o.prototype.notn = function(t) {
        return this.clone().inotn(t)
    }, o.prototype.setn = function(t, r) {
        i("number" == typeof t && t >= 0);
        var e = t / 26 | 0,
            n = t % 26;
        return this._expand(e + 1), this.words[e] = r ? this.words[e] | 1 << n : this.words[e] & ~(1 << n), this._strip()
    }, o.prototype.iadd = function(t) {
        var r, e, i;
        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, r = this.isub(t), this.negative ^= 1, this._normSign();
        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, r = this.isub(t), t.negative = 1, r._normSign();
        this.length > t.length ? (e = this, i = t) : (e = t, i = this);
        for (var n = 0, o = 0; o < i.length; o++) r = (0 | e.words[o]) + (0 | i.words[o]) + n, this.words[o] = 67108863 & r, n = r >>> 26;
        for (; 0 !== n && o < e.length; o++) r = (0 | e.words[o]) + n, this.words[o] = 67108863 & r, n = r >>> 26;
        if (this.length = e.length, 0 !== n) this.words[this.length] = n, this.length++;
        else if (e !== this)
            for (; o < e.length; o++) this.words[o] = e.words[o];
        return this
    }, o.prototype.add = function(t) {
        var r;
        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, r = this.sub(t), t.negative ^= 1, r) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, r = t.sub(this), this.negative = 1, r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
    }, o.prototype.isub = function(t) {
        if (0 !== t.negative) {
            t.negative = 0;
            var r = this.iadd(t);
            return t.negative = 1, r._normSign()
        }
        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
        var e, i, n = this.cmp(t);
        if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        n > 0 ? (e = this, i = t) : (e = t, i = this);
        for (var o = 0, s = 0; s < i.length; s++) o = (r = (0 | e.words[s]) - (0 | i.words[s]) + o) >> 26, this.words[s] = 67108863 & r;
        for (; 0 !== o && s < e.length; s++) o = (r = (0 | e.words[s]) + o) >> 26, this.words[s] = 67108863 & r;
        if (0 === o && s < e.length && e !== this)
            for (; s < e.length; s++) this.words[s] = e.words[s];
        return this.length = Math.max(this.length, s), e !== this && (this.negative = 1), this._strip()
    }, o.prototype.sub = function(t) {
        return this.clone().isub(t)
    };
    var g = function(t, r, e) {
        var i, n, o, s = t.words,
            a = r.words,
            h = e.words,
            u = 0,
            l = 0 | s[0],
            f = 8191 & l,
            c = l >>> 13,
            d = 0 | s[1],
            m = 8191 & d,
            p = d >>> 13,
            g = 0 | s[2],
            v = 8191 & g,
            y = g >>> 13,
            w = 0 | s[3],
            A = 8191 & w,
            b = w >>> 13,
            M = 0 | s[4],
            E = 8191 & M,
            _ = M >>> 13,
            k = 0 | s[5],
            N = 8191 & k,
            I = k >>> 13,
            x = 0 | s[6],
            S = 8191 & x,
            P = x >>> 13,
            R = 0 | s[7],
            T = 8191 & R,
            C = R >>> 13,
            B = 0 | s[8],
            O = 8191 & B,
            L = B >>> 13,
            F = 0 | s[9],
            U = 8191 & F,
            D = F >>> 13,
            q = 0 | a[0],
            G = 8191 & q,
            z = q >>> 13,
            H = 0 | a[1],
            Q = 8191 & H,
            K = H >>> 13,
            J = 0 | a[2],
            j = 8191 & J,
            Y = J >>> 13,
            X = 0 | a[3],
            V = 8191 & X,
            W = X >>> 13,
            Z = 0 | a[4],
            $ = 8191 & Z,
            tt = Z >>> 13,
            rt = 0 | a[5],
            et = 8191 & rt,
            it = rt >>> 13,
            nt = 0 | a[6],
            ot = 8191 & nt,
            st = nt >>> 13,
            at = 0 | a[7],
            ht = 8191 & at,
            ut = at >>> 13,
            lt = 0 | a[8],
            ft = 8191 & lt,
            ct = lt >>> 13,
            dt = 0 | a[9],
            mt = 8191 & dt,
            pt = dt >>> 13;
        e.negative = t.negative ^ r.negative, e.length = 19;
        var gt = (u + (i = Math.imul(f, G)) | 0) + ((8191 & (n = (n = Math.imul(f, z)) + Math.imul(c, G) | 0)) << 13) | 0;
        u = ((o = Math.imul(c, z)) + (n >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, i = Math.imul(m, G), n = (n = Math.imul(m, z)) + Math.imul(p, G) | 0, o = Math.imul(p, z);
        var vt = (u + (i = i + Math.imul(f, Q) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, K) | 0) + Math.imul(c, Q) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, K) | 0) + (n >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, i = Math.imul(v, G), n = (n = Math.imul(v, z)) + Math.imul(y, G) | 0, o = Math.imul(y, z), i = i + Math.imul(m, Q) | 0, n = (n = n + Math.imul(m, K) | 0) + Math.imul(p, Q) | 0, o = o + Math.imul(p, K) | 0;
        var yt = (u + (i = i + Math.imul(f, j) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, Y) | 0) + Math.imul(c, j) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, Y) | 0) + (n >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, i = Math.imul(A, G), n = (n = Math.imul(A, z)) + Math.imul(b, G) | 0, o = Math.imul(b, z), i = i + Math.imul(v, Q) | 0, n = (n = n + Math.imul(v, K) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, K) | 0, i = i + Math.imul(m, j) | 0, n = (n = n + Math.imul(m, Y) | 0) + Math.imul(p, j) | 0, o = o + Math.imul(p, Y) | 0;
        var wt = (u + (i = i + Math.imul(f, V) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, W) | 0) + Math.imul(c, V) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, W) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, i = Math.imul(E, G), n = (n = Math.imul(E, z)) + Math.imul(_, G) | 0, o = Math.imul(_, z), i = i + Math.imul(A, Q) | 0, n = (n = n + Math.imul(A, K) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, K) | 0, i = i + Math.imul(v, j) | 0, n = (n = n + Math.imul(v, Y) | 0) + Math.imul(y, j) | 0, o = o + Math.imul(y, Y) | 0, i = i + Math.imul(m, V) | 0, n = (n = n + Math.imul(m, W) | 0) + Math.imul(p, V) | 0, o = o + Math.imul(p, W) | 0;
        var At = (u + (i = i + Math.imul(f, $) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, tt) | 0) + Math.imul(c, $) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, tt) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, i = Math.imul(N, G), n = (n = Math.imul(N, z)) + Math.imul(I, G) | 0, o = Math.imul(I, z), i = i + Math.imul(E, Q) | 0, n = (n = n + Math.imul(E, K) | 0) + Math.imul(_, Q) | 0, o = o + Math.imul(_, K) | 0, i = i + Math.imul(A, j) | 0, n = (n = n + Math.imul(A, Y) | 0) + Math.imul(b, j) | 0, o = o + Math.imul(b, Y) | 0, i = i + Math.imul(v, V) | 0, n = (n = n + Math.imul(v, W) | 0) + Math.imul(y, V) | 0, o = o + Math.imul(y, W) | 0, i = i + Math.imul(m, $) | 0, n = (n = n + Math.imul(m, tt) | 0) + Math.imul(p, $) | 0, o = o + Math.imul(p, tt) | 0;
        var bt = (u + (i = i + Math.imul(f, et) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, it) | 0) + Math.imul(c, et) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, it) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, i = Math.imul(S, G), n = (n = Math.imul(S, z)) + Math.imul(P, G) | 0, o = Math.imul(P, z), i = i + Math.imul(N, Q) | 0, n = (n = n + Math.imul(N, K) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, K) | 0, i = i + Math.imul(E, j) | 0, n = (n = n + Math.imul(E, Y) | 0) + Math.imul(_, j) | 0, o = o + Math.imul(_, Y) | 0, i = i + Math.imul(A, V) | 0, n = (n = n + Math.imul(A, W) | 0) + Math.imul(b, V) | 0, o = o + Math.imul(b, W) | 0, i = i + Math.imul(v, $) | 0, n = (n = n + Math.imul(v, tt) | 0) + Math.imul(y, $) | 0, o = o + Math.imul(y, tt) | 0, i = i + Math.imul(m, et) | 0, n = (n = n + Math.imul(m, it) | 0) + Math.imul(p, et) | 0, o = o + Math.imul(p, it) | 0;
        var Mt = (u + (i = i + Math.imul(f, ot) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, st) | 0) + Math.imul(c, ot) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, st) | 0) + (n >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, i = Math.imul(T, G), n = (n = Math.imul(T, z)) + Math.imul(C, G) | 0, o = Math.imul(C, z), i = i + Math.imul(S, Q) | 0, n = (n = n + Math.imul(S, K) | 0) + Math.imul(P, Q) | 0, o = o + Math.imul(P, K) | 0, i = i + Math.imul(N, j) | 0, n = (n = n + Math.imul(N, Y) | 0) + Math.imul(I, j) | 0, o = o + Math.imul(I, Y) | 0, i = i + Math.imul(E, V) | 0, n = (n = n + Math.imul(E, W) | 0) + Math.imul(_, V) | 0, o = o + Math.imul(_, W) | 0, i = i + Math.imul(A, $) | 0, n = (n = n + Math.imul(A, tt) | 0) + Math.imul(b, $) | 0, o = o + Math.imul(b, tt) | 0, i = i + Math.imul(v, et) | 0, n = (n = n + Math.imul(v, it) | 0) + Math.imul(y, et) | 0, o = o + Math.imul(y, it) | 0, i = i + Math.imul(m, ot) | 0, n = (n = n + Math.imul(m, st) | 0) + Math.imul(p, ot) | 0, o = o + Math.imul(p, st) | 0;
        var Et = (u + (i = i + Math.imul(f, ht) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, ut) | 0) + Math.imul(c, ht) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, ut) | 0) + (n >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, i = Math.imul(O, G), n = (n = Math.imul(O, z)) + Math.imul(L, G) | 0, o = Math.imul(L, z), i = i + Math.imul(T, Q) | 0, n = (n = n + Math.imul(T, K) | 0) + Math.imul(C, Q) | 0, o = o + Math.imul(C, K) | 0, i = i + Math.imul(S, j) | 0, n = (n = n + Math.imul(S, Y) | 0) + Math.imul(P, j) | 0, o = o + Math.imul(P, Y) | 0, i = i + Math.imul(N, V) | 0, n = (n = n + Math.imul(N, W) | 0) + Math.imul(I, V) | 0, o = o + Math.imul(I, W) | 0, i = i + Math.imul(E, $) | 0, n = (n = n + Math.imul(E, tt) | 0) + Math.imul(_, $) | 0, o = o + Math.imul(_, tt) | 0, i = i + Math.imul(A, et) | 0, n = (n = n + Math.imul(A, it) | 0) + Math.imul(b, et) | 0, o = o + Math.imul(b, it) | 0, i = i + Math.imul(v, ot) | 0, n = (n = n + Math.imul(v, st) | 0) + Math.imul(y, ot) | 0, o = o + Math.imul(y, st) | 0, i = i + Math.imul(m, ht) | 0, n = (n = n + Math.imul(m, ut) | 0) + Math.imul(p, ht) | 0, o = o + Math.imul(p, ut) | 0;
        var _t = (u + (i = i + Math.imul(f, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, ct) | 0) + Math.imul(c, ft) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, ct) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, i = Math.imul(U, G), n = (n = Math.imul(U, z)) + Math.imul(D, G) | 0, o = Math.imul(D, z), i = i + Math.imul(O, Q) | 0, n = (n = n + Math.imul(O, K) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, K) | 0, i = i + Math.imul(T, j) | 0, n = (n = n + Math.imul(T, Y) | 0) + Math.imul(C, j) | 0, o = o + Math.imul(C, Y) | 0, i = i + Math.imul(S, V) | 0, n = (n = n + Math.imul(S, W) | 0) + Math.imul(P, V) | 0, o = o + Math.imul(P, W) | 0, i = i + Math.imul(N, $) | 0, n = (n = n + Math.imul(N, tt) | 0) + Math.imul(I, $) | 0, o = o + Math.imul(I, tt) | 0, i = i + Math.imul(E, et) | 0, n = (n = n + Math.imul(E, it) | 0) + Math.imul(_, et) | 0, o = o + Math.imul(_, it) | 0, i = i + Math.imul(A, ot) | 0, n = (n = n + Math.imul(A, st) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, st) | 0, i = i + Math.imul(v, ht) | 0, n = (n = n + Math.imul(v, ut) | 0) + Math.imul(y, ht) | 0, o = o + Math.imul(y, ut) | 0, i = i + Math.imul(m, ft) | 0, n = (n = n + Math.imul(m, ct) | 0) + Math.imul(p, ft) | 0, o = o + Math.imul(p, ct) | 0;
        var kt = (u + (i = i + Math.imul(f, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, pt) | 0) + Math.imul(c, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, pt) | 0) + (n >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, i = Math.imul(U, Q), n = (n = Math.imul(U, K)) + Math.imul(D, Q) | 0, o = Math.imul(D, K), i = i + Math.imul(O, j) | 0, n = (n = n + Math.imul(O, Y) | 0) + Math.imul(L, j) | 0, o = o + Math.imul(L, Y) | 0, i = i + Math.imul(T, V) | 0, n = (n = n + Math.imul(T, W) | 0) + Math.imul(C, V) | 0, o = o + Math.imul(C, W) | 0, i = i + Math.imul(S, $) | 0, n = (n = n + Math.imul(S, tt) | 0) + Math.imul(P, $) | 0, o = o + Math.imul(P, tt) | 0, i = i + Math.imul(N, et) | 0, n = (n = n + Math.imul(N, it) | 0) + Math.imul(I, et) | 0, o = o + Math.imul(I, it) | 0, i = i + Math.imul(E, ot) | 0, n = (n = n + Math.imul(E, st) | 0) + Math.imul(_, ot) | 0, o = o + Math.imul(_, st) | 0, i = i + Math.imul(A, ht) | 0, n = (n = n + Math.imul(A, ut) | 0) + Math.imul(b, ht) | 0, o = o + Math.imul(b, ut) | 0, i = i + Math.imul(v, ft) | 0, n = (n = n + Math.imul(v, ct) | 0) + Math.imul(y, ft) | 0, o = o + Math.imul(y, ct) | 0;
        var Nt = (u + (i = i + Math.imul(m, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, pt) | 0) + Math.imul(p, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(p, pt) | 0) + (n >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, i = Math.imul(U, j), n = (n = Math.imul(U, Y)) + Math.imul(D, j) | 0, o = Math.imul(D, Y), i = i + Math.imul(O, V) | 0, n = (n = n + Math.imul(O, W) | 0) + Math.imul(L, V) | 0, o = o + Math.imul(L, W) | 0, i = i + Math.imul(T, $) | 0, n = (n = n + Math.imul(T, tt) | 0) + Math.imul(C, $) | 0, o = o + Math.imul(C, tt) | 0, i = i + Math.imul(S, et) | 0, n = (n = n + Math.imul(S, it) | 0) + Math.imul(P, et) | 0, o = o + Math.imul(P, it) | 0, i = i + Math.imul(N, ot) | 0, n = (n = n + Math.imul(N, st) | 0) + Math.imul(I, ot) | 0, o = o + Math.imul(I, st) | 0, i = i + Math.imul(E, ht) | 0, n = (n = n + Math.imul(E, ut) | 0) + Math.imul(_, ht) | 0, o = o + Math.imul(_, ut) | 0, i = i + Math.imul(A, ft) | 0, n = (n = n + Math.imul(A, ct) | 0) + Math.imul(b, ft) | 0, o = o + Math.imul(b, ct) | 0;
        var It = (u + (i = i + Math.imul(v, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(v, pt) | 0) + Math.imul(y, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(y, pt) | 0) + (n >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, i = Math.imul(U, V), n = (n = Math.imul(U, W)) + Math.imul(D, V) | 0, o = Math.imul(D, W), i = i + Math.imul(O, $) | 0, n = (n = n + Math.imul(O, tt) | 0) + Math.imul(L, $) | 0, o = o + Math.imul(L, tt) | 0, i = i + Math.imul(T, et) | 0, n = (n = n + Math.imul(T, it) | 0) + Math.imul(C, et) | 0, o = o + Math.imul(C, it) | 0, i = i + Math.imul(S, ot) | 0, n = (n = n + Math.imul(S, st) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, st) | 0, i = i + Math.imul(N, ht) | 0, n = (n = n + Math.imul(N, ut) | 0) + Math.imul(I, ht) | 0, o = o + Math.imul(I, ut) | 0, i = i + Math.imul(E, ft) | 0, n = (n = n + Math.imul(E, ct) | 0) + Math.imul(_, ft) | 0, o = o + Math.imul(_, ct) | 0;
        var xt = (u + (i = i + Math.imul(A, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(A, pt) | 0) + Math.imul(b, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(b, pt) | 0) + (n >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, i = Math.imul(U, $), n = (n = Math.imul(U, tt)) + Math.imul(D, $) | 0, o = Math.imul(D, tt), i = i + Math.imul(O, et) | 0, n = (n = n + Math.imul(O, it) | 0) + Math.imul(L, et) | 0, o = o + Math.imul(L, it) | 0, i = i + Math.imul(T, ot) | 0, n = (n = n + Math.imul(T, st) | 0) + Math.imul(C, ot) | 0, o = o + Math.imul(C, st) | 0, i = i + Math.imul(S, ht) | 0, n = (n = n + Math.imul(S, ut) | 0) + Math.imul(P, ht) | 0, o = o + Math.imul(P, ut) | 0, i = i + Math.imul(N, ft) | 0, n = (n = n + Math.imul(N, ct) | 0) + Math.imul(I, ft) | 0, o = o + Math.imul(I, ct) | 0;
        var St = (u + (i = i + Math.imul(E, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(E, pt) | 0) + Math.imul(_, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(_, pt) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, i = Math.imul(U, et), n = (n = Math.imul(U, it)) + Math.imul(D, et) | 0, o = Math.imul(D, it), i = i + Math.imul(O, ot) | 0, n = (n = n + Math.imul(O, st) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, st) | 0, i = i + Math.imul(T, ht) | 0, n = (n = n + Math.imul(T, ut) | 0) + Math.imul(C, ht) | 0, o = o + Math.imul(C, ut) | 0, i = i + Math.imul(S, ft) | 0, n = (n = n + Math.imul(S, ct) | 0) + Math.imul(P, ft) | 0, o = o + Math.imul(P, ct) | 0;
        var Pt = (u + (i = i + Math.imul(N, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(N, pt) | 0) + Math.imul(I, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(I, pt) | 0) + (n >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, i = Math.imul(U, ot), n = (n = Math.imul(U, st)) + Math.imul(D, ot) | 0, o = Math.imul(D, st), i = i + Math.imul(O, ht) | 0, n = (n = n + Math.imul(O, ut) | 0) + Math.imul(L, ht) | 0, o = o + Math.imul(L, ut) | 0, i = i + Math.imul(T, ft) | 0, n = (n = n + Math.imul(T, ct) | 0) + Math.imul(C, ft) | 0, o = o + Math.imul(C, ct) | 0;
        var Rt = (u + (i = i + Math.imul(S, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(S, pt) | 0) + Math.imul(P, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(P, pt) | 0) + (n >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, i = Math.imul(U, ht), n = (n = Math.imul(U, ut)) + Math.imul(D, ht) | 0, o = Math.imul(D, ut), i = i + Math.imul(O, ft) | 0, n = (n = n + Math.imul(O, ct) | 0) + Math.imul(L, ft) | 0, o = o + Math.imul(L, ct) | 0;
        var Tt = (u + (i = i + Math.imul(T, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(T, pt) | 0) + Math.imul(C, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(C, pt) | 0) + (n >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, i = Math.imul(U, ft), n = (n = Math.imul(U, ct)) + Math.imul(D, ft) | 0, o = Math.imul(D, ct);
        var Ct = (u + (i = i + Math.imul(O, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(O, pt) | 0) + Math.imul(L, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(L, pt) | 0) + (n >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863;
        var Bt = (u + (i = Math.imul(U, mt)) | 0) + ((8191 & (n = (n = Math.imul(U, pt)) + Math.imul(D, mt) | 0)) << 13) | 0;
        return u = ((o = Math.imul(D, pt)) + (n >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, h[0] = gt, h[1] = vt, h[2] = yt, h[3] = wt, h[4] = At, h[5] = bt, h[6] = Mt, h[7] = Et, h[8] = _t, h[9] = kt, h[10] = Nt, h[11] = It, h[12] = xt, h[13] = St, h[14] = Pt, h[15] = Rt, h[16] = Tt, h[17] = Ct, h[18] = Bt, 0 !== u && (h[19] = u, e.length++), e
    };

    function v(t, r, e) {
        e.negative = r.negative ^ t.negative, e.length = t.length + r.length;
        for (var i = 0, n = 0, o = 0; o < e.length - 1; o++) {
            var s = n;
            n = 0;
            for (var a = 67108863 & i, h = Math.min(o, r.length - 1), u = Math.max(0, o - t.length + 1); u <= h; u++) {
                var l = o - u,
                    f = (0 | t.words[l]) * (0 | r.words[u]),
                    c = 67108863 & f;
                a = 67108863 & (c = c + a | 0), n += (s = (s = s + (f / 67108864 | 0) | 0) + (c >>> 26) | 0) >>> 26, s &= 67108863
            }
            e.words[o] = a, i = s, s = n
        }
        return 0 !== i ? e.words[o] = i : e.length--, e._strip()
    }

    function y(t, r, e) {
        return v(t, r, e)
    }
    Math.imul || (g = p), o.prototype.mulTo = function(t, r) {
        var e = this.length + t.length;
        return 10 === this.length && 10 === t.length ? g(this, t, r) : e < 63 ? p(this, t, r) : e < 1024 ? v(this, t, r) : y(this, t, r)
    }, o.prototype.mul = function(t) {
        var r = new o(null);
        return r.words = new Array(this.length + t.length), this.mulTo(t, r)
    }, o.prototype.mulf = function(t) {
        var r = new o(null);
        return r.words = new Array(this.length + t.length), y(this, t, r)
    }, o.prototype.imul = function(t) {
        return this.clone().mulTo(t, this)
    }, o.prototype.imuln = function(t) {
        var r = t < 0;
        r && (t = -t), i("number" == typeof t), i(t < 67108864);
        for (var e = 0, n = 0; n < this.length; n++) {
            var o = (0 | this.words[n]) * t,
                s = (67108863 & o) + (67108863 & e);
            e >>= 26, e += o / 67108864 | 0, e += s >>> 26, this.words[n] = 67108863 & s
        }
        return 0 !== e && (this.words[n] = e, this.length++), r ? this.ineg() : this
    }, o.prototype.muln = function(t) {
        return this.clone().imuln(t)
    }, o.prototype.sqr = function() {
        return this.mul(this)
    }, o.prototype.isqr = function() {
        return this.imul(this.clone())
    }, o.prototype.pow = function(t) {
        var r = function(t) {
            for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
                var i = e / 26 | 0,
                    n = e % 26;
                r[e] = t.words[i] >>> n & 1
            }
            return r
        }(t);
        if (0 === r.length) return new o(1);
        for (var e = this, i = 0; i < r.length && 0 === r[i]; i++, e = e.sqr());
        if (++i < r.length)
            for (var n = e.sqr(); i < r.length; i++, n = n.sqr()) 0 !== r[i] && (e = e.mul(n));
        return e
    }, o.prototype.iushln = function(t) {
        i("number" == typeof t && t >= 0);
        var r, e = t % 26,
            n = (t - e) / 26,
            o = 67108863 >>> 26 - e << 26 - e;
        if (0 !== e) {
            var s = 0;
            for (r = 0; r < this.length; r++) {
                var a = this.words[r] & o,
                    h = (0 | this.words[r]) - a << e;
                this.words[r] = h | s, s = a >>> 26 - e
            }
            s && (this.words[r] = s, this.length++)
        }
        if (0 !== n) {
            for (r = this.length - 1; r >= 0; r--) this.words[r + n] = this.words[r];
            for (r = 0; r < n; r++) this.words[r] = 0;
            this.length += n
        }
        return this._strip()
    }, o.prototype.ishln = function(t) {
        return i(0 === this.negative), this.iushln(t)
    }, o.prototype.iushrn = function(t, r, e) {
        var n;
        i("number" == typeof t && t >= 0), n = r ? (r - r % 26) / 26 : 0;
        var o = t % 26,
            s = Math.min((t - o) / 26, this.length),
            a = 67108863 ^ 67108863 >>> o << o,
            h = e;
        if (n -= s, n = Math.max(0, n), h) {
            for (var u = 0; u < s; u++) h.words[u] = this.words[u];
            h.length = s
        }
        if (0 === s);
        else if (this.length > s)
            for (this.length -= s, u = 0; u < this.length; u++) this.words[u] = this.words[u + s];
        else this.words[0] = 0, this.length = 1;
        var l = 0;
        for (u = this.length - 1; u >= 0 && (0 !== l || u >= n); u--) {
            var f = 0 | this.words[u];
            this.words[u] = l << 26 - o | f >>> o, l = f & a
        }
        return h && 0 !== l && (h.words[h.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
    }, o.prototype.ishrn = function(t, r, e) {
        return i(0 === this.negative), this.iushrn(t, r, e)
    }, o.prototype.shln = function(t) {
        return this.clone().ishln(t)
    }, o.prototype.ushln = function(t) {
        return this.clone().iushln(t)
    }, o.prototype.shrn = function(t) {
        return this.clone().ishrn(t)
    }, o.prototype.ushrn = function(t) {
        return this.clone().iushrn(t)
    }, o.prototype.testn = function(t) {
        i("number" == typeof t && t >= 0);
        var r = t % 26,
            e = (t - r) / 26,
            n = 1 << r;
        return !(this.length <= e || !(this.words[e] & n))
    }, o.prototype.imaskn = function(t) {
        i("number" == typeof t && t >= 0);
        var r = t % 26,
            e = (t - r) / 26;
        if (i(0 === this.negative, "imaskn works only with positive numbers"), this.length <= e) return this;
        if (0 !== r && e++, this.length = Math.min(e, this.length), 0 !== r) {
            var n = 67108863 ^ 67108863 >>> r << r;
            this.words[this.length - 1] &= n
        }
        return this._strip()
    }, o.prototype.maskn = function(t) {
        return this.clone().imaskn(t)
    }, o.prototype.iaddn = function(t) {
        return i("number" == typeof t), i(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
    }, o.prototype._iaddn = function(t) {
        this.words[0] += t;
        for (var r = 0; r < this.length && this.words[r] >= 67108864; r++) this.words[r] -= 67108864, r === this.length - 1 ? this.words[r + 1] = 1 : this.words[r + 1]++;
        return this.length = Math.max(this.length, r + 1), this
    }, o.prototype.isubn = function(t) {
        if (i("number" == typeof t), i(t < 67108864), t < 0) return this.iaddn(-t);
        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
        else
            for (var r = 0; r < this.length && this.words[r] < 0; r++) this.words[r] += 67108864, this.words[r + 1] -= 1;
        return this._strip()
    }, o.prototype.addn = function(t) {
        return this.clone().iaddn(t)
    }, o.prototype.subn = function(t) {
        return this.clone().isubn(t)
    }, o.prototype.iabs = function() {
        return this.negative = 0, this
    }, o.prototype.abs = function() {
        return this.clone().iabs()
    }, o.prototype._ishlnsubmul = function(t, r, e) {
        var n, o, s = t.length + e;
        this._expand(s);
        var a = 0;
        for (n = 0; n < t.length; n++) {
            o = (0 | this.words[n + e]) + a;
            var h = (0 | t.words[n]) * r;
            a = ((o -= 67108863 & h) >> 26) - (h / 67108864 | 0), this.words[n + e] = 67108863 & o
        }
        for (; n < this.length - e; n++) a = (o = (0 | this.words[n + e]) + a) >> 26, this.words[n + e] = 67108863 & o;
        if (0 === a) return this._strip();
        for (i(-1 === a), a = 0, n = 0; n < this.length; n++) a = (o = -(0 | this.words[n]) + a) >> 26, this.words[n] = 67108863 & o;
        return this.negative = 1, this._strip()
    }, o.prototype._wordDiv = function(t, r) {
        var e = (this.length, t.length),
            i = this.clone(),
            n = t,
            s = 0 | n.words[n.length - 1];
        0 != (e = 26 - this._countBits(s)) && (n = n.ushln(e), i.iushln(e), s = 0 | n.words[n.length - 1]);
        var a, h = i.length - n.length;
        if ("mod" !== r) {
            (a = new o(null)).length = h + 1, a.words = new Array(a.length);
            for (var u = 0; u < a.length; u++) a.words[u] = 0
        }
        var l = i.clone()._ishlnsubmul(n, 1, h);
        0 === l.negative && (i = l, a && (a.words[h] = 1));
        for (var f = h - 1; f >= 0; f--) {
            var c = 67108864 * (0 | i.words[n.length + f]) + (0 | i.words[n.length + f - 1]);
            for (c = Math.min(c / s | 0, 67108863), i._ishlnsubmul(n, c, f); 0 !== i.negative;) c--, i.negative = 0, i._ishlnsubmul(n, 1, f), i.isZero() || (i.negative ^= 1);
            a && (a.words[f] = c)
        }
        return a && a._strip(), i._strip(), "div" !== r && 0 !== e && i.iushrn(e), {
            div: a || null,
            mod: i
        }
    }, o.prototype.divmod = function(t, r, e) {
        return i(!t.isZero()), this.isZero() ? {
            div: new o(0),
            mod: new o(0)
        } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, r), "mod" !== r && (n = a.div.neg()), "div" !== r && (s = a.mod.neg(), e && 0 !== s.negative && s.iadd(t)), {
            div: n,
            mod: s
        }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), r), "mod" !== r && (n = a.div.neg()), {
            div: n,
            mod: a.mod
        }) : 0 != (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), r), "div" !== r && (s = a.mod.neg(), e && 0 !== s.negative && s.isub(t)), {
            div: a.div,
            mod: s
        }) : t.length > this.length || this.cmp(t) < 0 ? {
            div: new o(0),
            mod: this
        } : 1 === t.length ? "div" === r ? {
            div: this.divn(t.words[0]),
            mod: null
        } : "mod" === r ? {
            div: null,
            mod: new o(this.modrn(t.words[0]))
        } : {
            div: this.divn(t.words[0]),
            mod: new o(this.modrn(t.words[0]))
        } : this._wordDiv(t, r);
        var n, s, a
    }, o.prototype.div = function(t) {
        return this.divmod(t, "div", !1).div
    }, o.prototype.mod = function(t) {
        return this.divmod(t, "mod", !1).mod
    }, o.prototype.umod = function(t) {
        return this.divmod(t, "mod", !0).mod
    }, o.prototype.divRound = function(t) {
        var r = this.divmod(t);
        if (r.mod.isZero()) return r.div;
        var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
            i = t.ushrn(1),
            n = t.andln(1),
            o = e.cmp(i);
        return o < 0 || 1 === n && 0 === o ? r.div : 0 !== r.div.negative ? r.div.isubn(1) : r.div.iaddn(1)
    }, o.prototype.modrn = function(t) {
        var r = t < 0;
        r && (t = -t), i(t <= 67108863);
        for (var e = (1 << 26) % t, n = 0, o = this.length - 1; o >= 0; o--) n = (e * n + (0 | this.words[o])) % t;
        return r ? -n : n
    }, o.prototype.modn = function(t) {
        return this.modrn(t)
    }, o.prototype.idivn = function(t) {
        var r = t < 0;
        r && (t = -t), i(t <= 67108863);
        for (var e = 0, n = this.length - 1; n >= 0; n--) {
            var o = (0 | this.words[n]) + 67108864 * e;
            this.words[n] = o / t | 0, e = o % t
        }
        return this._strip(), r ? this.ineg() : this
    }, o.prototype.divn = function(t) {
        return this.clone().idivn(t)
    }, o.prototype.egcd = function(t) {
        i(0 === t.negative), i(!t.isZero());
        var r = this,
            e = t.clone();
        r = 0 !== r.negative ? r.umod(t) : r.clone();
        for (var n = new o(1), s = new o(0), a = new o(0), h = new o(1), u = 0; r.isEven() && e.isEven();) r.iushrn(1), e.iushrn(1), ++u;
        for (var l = e.clone(), f = r.clone(); !r.isZero();) {
            for (var c = 0, d = 1; 0 == (r.words[0] & d) && c < 26; ++c, d <<= 1);
            if (c > 0)
                for (r.iushrn(c); c-- > 0;)(n.isOdd() || s.isOdd()) && (n.iadd(l), s.isub(f)), n.iushrn(1), s.iushrn(1);
            for (var m = 0, p = 1; 0 == (e.words[0] & p) && m < 26; ++m, p <<= 1);
            if (m > 0)
                for (e.iushrn(m); m-- > 0;)(a.isOdd() || h.isOdd()) && (a.iadd(l), h.isub(f)), a.iushrn(1), h.iushrn(1);
            r.cmp(e) >= 0 ? (r.isub(e), n.isub(a), s.isub(h)) : (e.isub(r), a.isub(n), h.isub(s))
        }
        return {
            a: a,
            b: h,
            gcd: e.iushln(u)
        }
    }, o.prototype._invmp = function(t) {
        i(0 === t.negative), i(!t.isZero());
        var r = this,
            e = t.clone();
        r = 0 !== r.negative ? r.umod(t) : r.clone();
        for (var n, s = new o(1), a = new o(0), h = e.clone(); r.cmpn(1) > 0 && e.cmpn(1) > 0;) {
            for (var u = 0, l = 1; 0 == (r.words[0] & l) && u < 26; ++u, l <<= 1);
            if (u > 0)
                for (r.iushrn(u); u-- > 0;) s.isOdd() && s.iadd(h), s.iushrn(1);
            for (var f = 0, c = 1; 0 == (e.words[0] & c) && f < 26; ++f, c <<= 1);
            if (f > 0)
                for (e.iushrn(f); f-- > 0;) a.isOdd() && a.iadd(h), a.iushrn(1);
            r.cmp(e) >= 0 ? (r.isub(e), s.isub(a)) : (e.isub(r), a.isub(s))
        }
        return (n = 0 === r.cmpn(1) ? s : a).cmpn(0) < 0 && n.iadd(t), n
    }, o.prototype.gcd = function(t) {
        if (this.isZero()) return t.abs();
        if (t.isZero()) return this.abs();
        var r = this.clone(),
            e = t.clone();
        r.negative = 0, e.negative = 0;
        for (var i = 0; r.isEven() && e.isEven(); i++) r.iushrn(1), e.iushrn(1);
        for (;;) {
            for (; r.isEven();) r.iushrn(1);
            for (; e.isEven();) e.iushrn(1);
            var n = r.cmp(e);
            if (n < 0) {
                var o = r;
                r = e, e = o
            } else if (0 === n || 0 === e.cmpn(1)) break;
            r.isub(e)
        }
        return e.iushln(i)
    }, o.prototype.invm = function(t) {
        return this.egcd(t).a.umod(t)
    }, o.prototype.isEven = function() {
        return 0 == (1 & this.words[0])
    }, o.prototype.isOdd = function() {
        return 1 == (1 & this.words[0])
    }, o.prototype.andln = function(t) {
        return this.words[0] & t
    }, o.prototype.bincn = function(t) {
        i("number" == typeof t);
        var r = t % 26,
            e = (t - r) / 26,
            n = 1 << r;
        if (this.length <= e) return this._expand(e + 1), this.words[e] |= n, this;
        for (var o = n, s = e; 0 !== o && s < this.length; s++) {
            var a = 0 | this.words[s];
            o = (a += o) >>> 26, a &= 67108863, this.words[s] = a
        }
        return 0 !== o && (this.words[s] = o, this.length++), this
    }, o.prototype.isZero = function() {
        return 1 === this.length && 0 === this.words[0]
    }, o.prototype.cmpn = function(t) {
        var r, e = t < 0;
        if (0 !== this.negative && !e) return -1;
        if (0 === this.negative && e) return 1;
        if (this._strip(), this.length > 1) r = 1;
        else {
            e && (t = -t), i(t <= 67108863, "Number is too big");
            var n = 0 | this.words[0];
            r = n === t ? 0 : n < t ? -1 : 1
        }
        return 0 !== this.negative ? 0 | -r : r
    }, o.prototype.cmp = function(t) {
        if (0 !== this.negative && 0 === t.negative) return -1;
        if (0 === this.negative && 0 !== t.negative) return 1;
        var r = this.ucmp(t);
        return 0 !== this.negative ? 0 | -r : r
    }, o.prototype.ucmp = function(t) {
        if (this.length > t.length) return 1;
        if (this.length < t.length) return -1;
        for (var r = 0, e = this.length - 1; e >= 0; e--) {
            var i = 0 | this.words[e],
                n = 0 | t.words[e];
            if (i !== n) {
                i < n ? r = -1 : i > n && (r = 1);
                break
            }
        }
        return r
    }, o.prototype.gtn = function(t) {
        return 1 === this.cmpn(t)
    }, o.prototype.gt = function(t) {
        return 1 === this.cmp(t)
    }, o.prototype.gten = function(t) {
        return this.cmpn(t) >= 0
    }, o.prototype.gte = function(t) {
        return this.cmp(t) >= 0
    }, o.prototype.ltn = function(t) {
        return -1 === this.cmpn(t)
    }, o.prototype.lt = function(t) {
        return -1 === this.cmp(t)
    }, o.prototype.lten = function(t) {
        return this.cmpn(t) <= 0
    }, o.prototype.lte = function(t) {
        return this.cmp(t) <= 0
    }, o.prototype.eqn = function(t) {
        return 0 === this.cmpn(t)
    }, o.prototype.eq = function(t) {
        return 0 === this.cmp(t)
    }, o.red = function(t) {
        return new k(t)
    }, o.prototype.toRed = function(t) {
        return i(!this.red, "Already a number in reduction context"), i(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
    }, o.prototype.fromRed = function() {
        return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
    }, o.prototype._forceRed = function(t) {
        return this.red = t, this
    }, o.prototype.forceRed = function(t) {
        return i(!this.red, "Already a number in reduction context"), this._forceRed(t)
    }, o.prototype.redAdd = function(t) {
        return i(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
    }, o.prototype.redIAdd = function(t) {
        return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
    }, o.prototype.redSub = function(t) {
        return i(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
    }, o.prototype.redISub = function(t) {
        return i(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
    }, o.prototype.redShl = function(t) {
        return i(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
    }, o.prototype.redMul = function(t) {
        return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
    }, o.prototype.redIMul = function(t) {
        return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
    }, o.prototype.redSqr = function() {
        return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
    }, o.prototype.redISqr = function() {
        return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
    }, o.prototype.redSqrt = function() {
        return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
    }, o.prototype.redInvm = function() {
        return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
    }, o.prototype.redNeg = function() {
        return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
    }, o.prototype.redPow = function(t) {
        return i(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
    };
    var w = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
    };

    function A(t, r) {
        this.name = t, this.p = new o(r, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
    }

    function b() {
        A.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
    }

    function M() {
        A.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
    }

    function E() {
        A.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
    }

    function _() {
        A.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
    }

    function k(t) {
        if ("string" == typeof t) {
            var r = o._prime(t);
            this.m = r.p, this.prime = r
        } else i(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
    }

    function N(t) {
        k.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
    }
    A.prototype._tmp = function() {
        var t = new o(null);
        return t.words = new Array(Math.ceil(this.n / 13)), t
    }, A.prototype.ireduce = function(t) {
        var r, e = t;
        do {
            this.split(e, this.tmp), r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength()
        } while (r > this.n);
        var i = r < this.n ? -1 : e.ucmp(this.p);
        return 0 === i ? (e.words[0] = 0, e.length = 1) : i > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), e
    }, A.prototype.split = function(t, r) {
        t.iushrn(this.n, 0, r)
    }, A.prototype.imulK = function(t) {
        return t.imul(this.k)
    }, n(b, A), b.prototype.split = function(t, r) {
        for (var e = 4194303, i = Math.min(t.length, 9), n = 0; n < i; n++) r.words[n] = t.words[n];
        if (r.length = i, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
        var o = t.words[9];
        for (r.words[r.length++] = o & e, n = 10; n < t.length; n++) {
            var s = 0 | t.words[n];
            t.words[n - 10] = (s & e) << 4 | o >>> 22, o = s
        }
        o >>>= 22, t.words[n - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
    }, b.prototype.imulK = function(t) {
        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
        for (var r = 0, e = 0; e < t.length; e++) {
            var i = 0 | t.words[e];
            r += 977 * i, t.words[e] = 67108863 & r, r = 64 * i + (r / 67108864 | 0)
        }
        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
    }, n(M, A), n(E, A), n(_, A), _.prototype.imulK = function(t) {
        for (var r = 0, e = 0; e < t.length; e++) {
            var i = 19 * (0 | t.words[e]) + r,
                n = 67108863 & i;
            i >>>= 26, t.words[e] = n, r = i
        }
        return 0 !== r && (t.words[t.length++] = r), t
    }, o._prime = function(t) {
        if (w[t]) return w[t];
        var r;
        if ("k256" === t) r = new b;
        else if ("p224" === t) r = new M;
        else if ("p192" === t) r = new E;
        else {
            if ("p25519" !== t) throw new Error("Unknown prime " + t);
            r = new _
        }
        return w[t] = r, r
    }, k.prototype._verify1 = function(t) {
        i(0 === t.negative, "red works only with positives"), i(t.red, "red works only with red numbers")
    }, k.prototype._verify2 = function(t, r) {
        i(0 == (t.negative | r.negative), "red works only with positives"), i(t.red && t.red === r.red, "red works only with red numbers")
    }, k.prototype.imod = function(t) {
        return this.prime ? this.prime.ireduce(t)._forceRed(this) : (l(t, t.umod(this.m)._forceRed(this)), t)
    }, k.prototype.neg = function(t) {
        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
    }, k.prototype.add = function(t, r) {
        this._verify2(t, r);
        var e = t.add(r);
        return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this)
    }, k.prototype.iadd = function(t, r) {
        this._verify2(t, r);
        var e = t.iadd(r);
        return e.cmp(this.m) >= 0 && e.isub(this.m), e
    }, k.prototype.sub = function(t, r) {
        this._verify2(t, r);
        var e = t.sub(r);
        return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this)
    }, k.prototype.isub = function(t, r) {
        this._verify2(t, r);
        var e = t.isub(r);
        return e.cmpn(0) < 0 && e.iadd(this.m), e
    }, k.prototype.shl = function(t, r) {
        return this._verify1(t), this.imod(t.ushln(r))
    }, k.prototype.imul = function(t, r) {
        return this._verify2(t, r), this.imod(t.imul(r))
    }, k.prototype.mul = function(t, r) {
        return this._verify2(t, r), this.imod(t.mul(r))
    }, k.prototype.isqr = function(t) {
        return this.imul(t, t.clone())
    }, k.prototype.sqr = function(t) {
        return this.mul(t, t)
    }, k.prototype.sqrt = function(t) {
        if (t.isZero()) return t.clone();
        var r = this.m.andln(3);
        if (i(r % 2 == 1), 3 === r) {
            var e = this.m.add(new o(1)).iushrn(2);
            return this.pow(t, e)
        }
        for (var n = this.m.subn(1), s = 0; !n.isZero() && 0 === n.andln(1);) s++, n.iushrn(1);
        i(!n.isZero());
        var a = new o(1).toRed(this),
            h = a.redNeg(),
            u = this.m.subn(1).iushrn(1),
            l = this.m.bitLength();
        for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, u).cmp(h);) l.redIAdd(h);
        for (var f = this.pow(l, n), c = this.pow(t, n.addn(1).iushrn(1)), d = this.pow(t, n), m = s; 0 !== d.cmp(a);) {
            for (var p = d, g = 0; 0 !== p.cmp(a); g++) p = p.redSqr();
            i(g < m);
            var v = this.pow(f, new o(1).iushln(m - g - 1));
            c = c.redMul(v), f = v.redSqr(), d = d.redMul(f), m = g
        }
        return c
    }, k.prototype.invm = function(t) {
        var r = t._invmp(this.m);
        return 0 !== r.negative ? (r.negative = 0, this.imod(r).redNeg()) : this.imod(r)
    }, k.prototype.pow = function(t, r) {
        if (r.isZero()) return new o(1).toRed(this);
        if (0 === r.cmpn(1)) return t.clone();
        var e = new Array(16);
        e[0] = new o(1).toRed(this), e[1] = t;
        for (var i = 2; i < e.length; i++) e[i] = this.mul(e[i - 1], t);
        var n = e[0],
            s = 0,
            a = 0,
            h = r.bitLength() % 26;
        for (0 === h && (h = 26), i = r.length - 1; i >= 0; i--) {
            for (var u = r.words[i], l = h - 1; l >= 0; l--) {
                var f = u >> l & 1;
                n !== e[0] && (n = this.sqr(n)), 0 !== f || 0 !== s ? (s <<= 1, s |= f, (4 == ++a || 0 === i && 0 === l) && (n = this.mul(n, e[s]), a = 0, s = 0)) : a = 0
            }
            h = 26
        }
        return n
    }, k.prototype.convertTo = function(t) {
        var r = t.umod(this.m);
        return r === t ? r.clone() : r
    }, k.prototype.convertFrom = function(t) {
        var r = t.clone();
        return r.red = null, r
    }, o.mont = function(t) {
        return new N(t)
    }, n(N, k), N.prototype.convertTo = function(t) {
        return this.imod(t.ushln(this.shift))
    }, N.prototype.convertFrom = function(t) {
        var r = this.imod(t.mul(this.rinv));
        return r.red = null, r
    }, N.prototype.imul = function(t, r) {
        if (t.isZero() || r.isZero()) return t.words[0] = 0, t.length = 1, t;
        var e = t.imul(r),
            i = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
            n = e.isub(i).iushrn(this.shift),
            o = n;
        return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : n.cmpn(0) < 0 && (o = n.iadd(this.m)), o._forceRed(this)
    }, N.prototype.mul = function(t, r) {
        if (t.isZero() || r.isZero()) return new o(0)._forceRed(this);
        var e = t.mul(r),
            i = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
            n = e.isub(i).iushrn(this.shift),
            s = n;
        return n.cmp(this.m) >= 0 ? s = n.isub(this.m) : n.cmpn(0) < 0 && (s = n.iadd(this.m)), s._forceRed(this)
    }, N.prototype.invm = function(t) {
        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
    }
}(i, r);
const n = e(i.exports);
let o = !1,
    s = !1;
const a = {
    debug: 1,
    default: 2,
    info: 2,
    warning: 3,
    error: 4,
    off: 5
};
let h = a.default,
    u = null;
const l = function() {
    try {
        const t = [];
        if (["NFD", "NFC", "NFKD", "NFKC"].forEach((r => {
                try {
                    if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
                } catch (e) {
                    t.push(r)
                }
            })), t.length) throw new Error("missing " + t.join(", "));
        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
    } catch (t) {
        return t.message
    }
    return null
}();
var f, c;
! function(t) {
    t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF"
}(f || (f = {})),
function(t) {
    t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", t.ACTION_REJECTED = "ACTION_REJECTED"
}(c || (c = {}));
const d = "0123456789abcdef";
class m {
    constructor(t) {
        Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1
        })
    }
    _log(t, r) {
        const e = t.toLowerCase();
        null == a[e] && this.throwArgumentError("invalid log level name", "logLevel", t), h > a[e] || console.log.apply(console, r)
    }
    debug(...t) {
        this._log(m.levels.DEBUG, t)
    }
    info(...t) {
        this._log(m.levels.INFO, t)
    }
    warn(...t) {
        this._log(m.levels.WARNING, t)
    }
    makeError(t, r, e) {
        if (s) return this.makeError("censored error", r, {});
        r || (r = m.errors.UNKNOWN_ERROR), e || (e = {});
        const i = [];
        Object.keys(e).forEach((t => {
            const r = e[t];
            try {
                if (r instanceof Uint8Array) {
                    let e = "";
                    for (let t = 0; t < r.length; t++) e += d[r[t] >> 4], e += d[15 & r[t]];
                    i.push(t + "=Uint8Array(0x" + e + ")")
                } else i.push(t + "=" + JSON.stringify(r))
            } catch (a) {
                i.push(t + "=" + JSON.stringify(e[t].toString()))
            }
        })), i.push(`code=${r}`), i.push(`version=${this.version}`);
        const n = t;
        let o = "";
        switch (r) {
            case c.NUMERIC_FAULT: {
                o = "NUMERIC_FAULT";
                const r = t;
                switch (r) {
                    case "overflow":
                    case "underflow":
                    case "division-by-zero":
                        o += "-" + r;
                        break;
                    case "negative-power":
                    case "negative-width":
                        o += "-unsupported";
                        break;
                    case "unbound-bitwise-result":
                        o += "-unbound-result"
                }
                break
            }
            case c.CALL_EXCEPTION:
            case c.INSUFFICIENT_FUNDS:
            case c.MISSING_NEW:
            case c.NONCE_EXPIRED:
            case c.REPLACEMENT_UNDERPRICED:
            case c.TRANSACTION_REPLACED:
            case c.UNPREDICTABLE_GAS_LIMIT:
                o = r
        }
        o && (t += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"), i.length && (t += " (" + i.join(", ") + ")");
        const a = new Error(t);
        return a.reason = n, a.code = r, Object.keys(e).forEach((function(t) {
            a[t] = e[t]
        })), a
    }
    throwError(t, r, e) {
        throw this.makeError(t, r, e)
    }
    throwArgumentError(t, r, e) {
        return this.throwError(t, m.errors.INVALID_ARGUMENT, {
            argument: r,
            value: e
        })
    }
    assert(t, r, e, i) {
        t || this.throwError(r, e, i)
    }
    assertArgument(t, r, e, i) {
        t || this.throwArgumentError(r, e, i)
    }
    checkNormalize(t) {
        l && this.throwError("platform missing String.prototype.normalize", m.errors.UNSUPPORTED_OPERATION, {
            operation: "String.prototype.normalize",
            form: l
        })
    }
    checkSafeUint53(t, r) {
        "number" == typeof t && (null == r && (r = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r, m.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "out-of-safe-range",
            value: t
        }), t % 1 && this.throwError(r, m.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "non-integer",
            value: t
        }))
    }
    checkArgumentCount(t, r, e) {
        e = e ? ": " + e : "", t < r && this.throwError("missing argument" + e, m.errors.MISSING_ARGUMENT, {
            count: t,
            expectedCount: r
        }), t > r && this.throwError("too many arguments" + e, m.errors.UNEXPECTED_ARGUMENT, {
            count: t,
            expectedCount: r
        })
    }
    checkNew(t, r) {
        t !== Object && null != t || this.throwError("missing new", m.errors.MISSING_NEW, {
            name: r.name
        })
    }
    checkAbstract(t, r) {
        t === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", m.errors.UNSUPPORTED_OPERATION, {
            name: t.name,
            operation: "new"
        }) : t !== Object && null != t || this.throwError("missing new", m.errors.MISSING_NEW, {
            name: r.name
        })
    }
    static globalLogger() {
        return u || (u = new m("logger/5.7.0")), u
    }
    static setCensorship(t, r) {
        if (!t && r && this.globalLogger().throwError("cannot permanently disable censorship", m.errors.UNSUPPORTED_OPERATION, {
                operation: "setCensorship"
            }), o) {
            if (!t) return;
            this.globalLogger().throwError("error censorship permanent", m.errors.UNSUPPORTED_OPERATION, {
                operation: "setCensorship"
            })
        }
        s = !!t, o = !!r
    }
    static setLogLevel(t) {
        const r = a[t.toLowerCase()];
        null != r ? h = r : m.globalLogger().warn("invalid log level - " + t)
    }
    static from(t) {
        return new m(t)
    }
}
m.errors = c, m.levels = f;
const p = new m("bytes/5.7.0");

function g(t) {
    return !!t.toHexString
}

function v(t) {
    return t.slice || (t.slice = function() {
        const r = Array.prototype.slice.call(arguments);
        return v(new Uint8Array(Array.prototype.slice.apply(t, r)))
    }), t
}

function y(t) {
    return k(t) && !(t.length % 2) || A(t)
}

function w(t) {
    return "number" == typeof t && t == t && t % 1 == 0
}

function A(t) {
    if (null == t) return !1;
    if (t.constructor === Uint8Array) return !0;
    if ("string" == typeof t) return !1;
    if (!w(t.length) || t.length < 0) return !1;
    for (let r = 0; r < t.length; r++) {
        const e = t[r];
        if (!w(e) || e < 0 || e >= 256) return !1
    }
    return !0
}

function b(t, r) {
    if (r || (r = {}), "number" == typeof t) {
        p.checkSafeUint53(t, "invalid arrayify value");
        const r = [];
        for (; t;) r.unshift(255 & t), t = parseInt(String(t / 256));
        return 0 === r.length && r.push(0), v(new Uint8Array(r))
    }
    if (r.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), g(t) && (t = t.toHexString()), k(t)) {
        let e = t.substring(2);
        e.length % 2 && ("left" === r.hexPad ? e = "0" + e : "right" === r.hexPad ? e += "0" : p.throwArgumentError("hex data is odd-length", "value", t));
        const i = [];
        for (let t = 0; t < e.length; t += 2) i.push(parseInt(e.substring(t, t + 2), 16));
        return v(new Uint8Array(i))
    }
    return A(t) ? v(new Uint8Array(t)) : p.throwArgumentError("invalid arrayify value", "value", t)
}

function M(t) {
    const r = t.map((t => b(t))),
        e = r.reduce(((t, r) => t + r.length), 0),
        i = new Uint8Array(e);
    return r.reduce(((t, r) => (i.set(r, t), t + r.length)), 0), v(i)
}

function E(t) {
    let r = b(t);
    if (0 === r.length) return r;
    let e = 0;
    for (; e < r.length && 0 === r[e];) e++;
    return e && (r = r.slice(e)), r
}

function _(t, r) {
    (t = b(t)).length > r && p.throwArgumentError("value out of range", "value", arguments[0]);
    const e = new Uint8Array(r);
    return e.set(t, r - t.length), v(e)
}

function k(t, r) {
    return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!r || t.length === 2 + 2 * r)
}

function N(t, r) {
    if (r || (r = {}), "number" == typeof t) {
        p.checkSafeUint53(t, "invalid hexlify value");
        let r = "";
        for (; t;) r = "0123456789abcdef" [15 & t] + r, t = Math.floor(t / 16);
        return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00"
    }
    if ("bigint" == typeof t) return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
    if (r.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), g(t)) return t.toHexString();
    if (k(t)) return t.length % 2 && ("left" === r.hexPad ? t = "0x0" + t.substring(2) : "right" === r.hexPad ? t += "0" : p.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
    if (A(t)) {
        let r = "0x";
        for (let e = 0; e < t.length; e++) {
            let i = t[e];
            r += "0123456789abcdef" [(240 & i) >> 4] + "0123456789abcdef" [15 & i]
        }
        return r
    }
    return p.throwArgumentError("invalid hexlify value", "value", t)
}

function I(t) {
    if ("string" != typeof t) t = N(t);
    else if (!k(t) || t.length % 2) return null;
    return (t.length - 2) / 2
}

function x(t, r, e) {
    return "string" != typeof t ? t = N(t) : (!k(t) || t.length % 2) && p.throwArgumentError("invalid hexData", "value", t), r = 2 + 2 * r, null != e ? "0x" + t.substring(r, 2 + 2 * e) : "0x" + t.substring(r)
}

function S(t) {
    let r = "0x";
    return t.forEach((t => {
        r += N(t).substring(2)
    })), r
}

function P(t) {
    const r = R(N(t, {
        hexPad: "left"
    }));
    return "0x" === r ? "0x0" : r
}

function R(t) {
    "string" != typeof t && (t = N(t)), k(t) || p.throwArgumentError("invalid hex string", "value", t), t = t.substring(2);
    let r = 0;
    for (; r < t.length && "0" === t[r];) r++;
    return "0x" + t.substring(r)
}

function T(t, r) {
    for ("string" != typeof t ? t = N(t) : k(t) || p.throwArgumentError("invalid hex string", "value", t), t.length > 2 * r + 2 && p.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * r + 2;) t = "0x0" + t.substring(2);
    return t
}

function C(t) {
    const r = {
        r: "0x",
        s: "0x",
        _vs: "0x",
        recoveryParam: 0,
        v: 0,
        yParityAndS: "0x",
        compact: "0x"
    };
    if (y(t)) {
        let e = b(t);
        64 === e.length ? (r.v = 27 + (e[32] >> 7), e[32] &= 127, r.r = N(e.slice(0, 32)), r.s = N(e.slice(32, 64))) : 65 === e.length ? (r.r = N(e.slice(0, 32)), r.s = N(e.slice(32, 64)), r.v = e[64]) : p.throwArgumentError("invalid signature string", "signature", t), r.v < 27 && (0 === r.v || 1 === r.v ? r.v += 27 : p.throwArgumentError("signature invalid v byte", "signature", t)), r.recoveryParam = 1 - r.v % 2, r.recoveryParam && (e[32] |= 128), r._vs = N(e.slice(32, 64))
    } else {
        if (r.r = t.r, r.s = t.s, r.v = t.v, r.recoveryParam = t.recoveryParam, r._vs = t._vs, null != r._vs) {
            const e = _(b(r._vs), 32);
            r._vs = N(e);
            const i = e[0] >= 128 ? 1 : 0;
            null == r.recoveryParam ? r.recoveryParam = i : r.recoveryParam !== i && p.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), e[0] &= 127;
            const n = N(e);
            null == r.s ? r.s = n : r.s !== n && p.throwArgumentError("signature v mismatch _vs", "signature", t)
        }
        if (null == r.recoveryParam) null == r.v ? p.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === r.v || 1 === r.v ? r.recoveryParam = r.v : r.recoveryParam = 1 - r.v % 2;
        else if (null == r.v) r.v = 27 + r.recoveryParam;
        else {
            const e = 0 === r.v || 1 === r.v ? r.v : 1 - r.v % 2;
            r.recoveryParam !== e && p.throwArgumentError("signature recoveryParam mismatch v", "signature", t)
        }
        null != r.r && k(r.r) ? r.r = T(r.r, 32) : p.throwArgumentError("signature missing or invalid r", "signature", t), null != r.s && k(r.s) ? r.s = T(r.s, 32) : p.throwArgumentError("signature missing or invalid s", "signature", t);
        const e = b(r.s);
        e[0] >= 128 && p.throwArgumentError("signature s out of range", "signature", t), r.recoveryParam && (e[0] |= 128);
        const i = N(e);
        r._vs && (k(r._vs) || p.throwArgumentError("signature invalid _vs", "signature", t), r._vs = T(r._vs, 32)), null == r._vs ? r._vs = i : r._vs !== i && p.throwArgumentError("signature _vs mismatch v and s", "signature", t)
    }
    return r.yParityAndS = r._vs, r.compact = r.r + r.yParityAndS.substring(2), r
}

function B(t) {
    return N(M([(t = C(t)).r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
}
const O = "bignumber/5.7.0";
var L = n.BN;
const F = new m("bignumber/5.7.0"),
    U = {};

function D(t) {
    return null != t && (G.isBigNumber(t) || "number" == typeof t && t % 1 == 0 || "string" == typeof t && !!t.match(/^-?[0-9]+$/) || k(t) || "bigint" == typeof t || A(t))
}
let q = !1;
class G {
    constructor(t, r) {
        t !== U && F.throwError("cannot call constructor directly; use BigNumber.from", m.errors.UNSUPPORTED_OPERATION, {
            operation: "new (BigNumber)"
        }), this._hex = r, this._isBigNumber = !0, Object.freeze(this)
    }
    fromTwos(t) {
        return H(Q(this).fromTwos(t))
    }
    toTwos(t) {
        return H(Q(this).toTwos(t))
    }
    abs() {
        return "-" === this._hex[0] ? G.from(this._hex.substring(1)) : this
    }
    add(t) {
        return H(Q(this).add(Q(t)))
    }
    sub(t) {
        return H(Q(this).sub(Q(t)))
    }
    div(t) {
        return G.from(t).isZero() && K("division-by-zero", "div"), H(Q(this).div(Q(t)))
    }
    mul(t) {
        return H(Q(this).mul(Q(t)))
    }
    mod(t) {
        const r = Q(t);
        return r.isNeg() && K("division-by-zero", "mod"), H(Q(this).umod(r))
    }
    pow(t) {
        const r = Q(t);
        return r.isNeg() && K("negative-power", "pow"), H(Q(this).pow(r))
    }
    and(t) {
        const r = Q(t);
        return (this.isNegative() || r.isNeg()) && K("unbound-bitwise-result", "and"), H(Q(this).and(r))
    }
    or(t) {
        const r = Q(t);
        return (this.isNegative() || r.isNeg()) && K("unbound-bitwise-result", "or"), H(Q(this).or(r))
    }
    xor(t) {
        const r = Q(t);
        return (this.isNegative() || r.isNeg()) && K("unbound-bitwise-result", "xor"), H(Q(this).xor(r))
    }
    mask(t) {
        return (this.isNegative() || t < 0) && K("negative-width", "mask"), H(Q(this).maskn(t))
    }
    shl(t) {
        return (this.isNegative() || t < 0) && K("negative-width", "shl"), H(Q(this).shln(t))
    }
    shr(t) {
        return (this.isNegative() || t < 0) && K("negative-width", "shr"), H(Q(this).shrn(t))
    }
    eq(t) {
        return Q(this).eq(Q(t))
    }
    lt(t) {
        return Q(this).lt(Q(t))
    }
    lte(t) {
        return Q(this).lte(Q(t))
    }
    gt(t) {
        return Q(this).gt(Q(t))
    }
    gte(t) {
        return Q(this).gte(Q(t))
    }
    isNegative() {
        return "-" === this._hex[0]
    }
    isZero() {
        return Q(this).isZero()
    }
    toNumber() {
        try {
            return Q(this).toNumber()
        } catch (t) {
            K("overflow", "toNumber", this.toString())
        }
        return null
    }
    toBigInt() {
        try {
            return BigInt(this.toString())
        } catch (t) {}
        return F.throwError("this platform does not support BigInt", m.errors.UNSUPPORTED_OPERATION, {
            value: this.toString()
        })
    }
    toString() {
        return arguments.length > 0 && (10 === arguments[0] ? q || (q = !0, F.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? F.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", m.errors.UNEXPECTED_ARGUMENT, {}) : F.throwError("BigNumber.toString does not accept parameters", m.errors.UNEXPECTED_ARGUMENT, {})), Q(this).toString(10)
    }
    toHexString() {
        return this._hex
    }
    toJSON(t) {
        return {
            type: "BigNumber",
            hex: this.toHexString()
        }
    }
    static from(t) {
        if (t instanceof G) return t;
        if ("string" == typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new G(U, z(t)) : t.match(/^-?[0-9]+$/) ? new G(U, z(new L(t))) : F.throwArgumentError("invalid BigNumber string", "value", t);
        if ("number" == typeof t) return t % 1 && K("underflow", "BigNumber.from", t), (t >= 9007199254740991 || t <= -9007199254740991) && K("overflow", "BigNumber.from", t), G.from(String(t));
        const r = t;
        if ("bigint" == typeof r) return G.from(r.toString());
        if (A(r)) return G.from(N(r));
        if (r)
            if (r.toHexString) {
                const t = r.toHexString();
                if ("string" == typeof t) return G.from(t)
            } else {
                let t = r._hex;
                if (null == t && "BigNumber" === r.type && (t = r.hex), "string" == typeof t && (k(t) || "-" === t[0] && k(t.substring(1)))) return G.from(t)
            } return F.throwArgumentError("invalid BigNumber value", "value", t)
    }
    static isBigNumber(t) {
        return !(!t || !t._isBigNumber)
    }
}

function z(t) {
    if ("string" != typeof t) return z(t.toString(16));
    if ("-" === t[0]) return "-" === (t = t.substring(1))[0] && F.throwArgumentError("invalid hex", "value", t), "0x00" === (t = z(t)) ? t : "-" + t;
    if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
    for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
    return t
}

function H(t) {
    return G.from(z(t))
}

function Q(t) {
    const r = G.from(t).toHexString();
    return "-" === r[0] ? new L("-" + r.substring(3), 16) : new L(r.substring(2), 16)
}

function K(t, r, e) {
    const i = {
        fault: t,
        operation: r
    };
    return null != e && (i.value = e), F.throwError(t, m.errors.NUMERIC_FAULT, i)
}
var J = globalThis && globalThis.__awaiter || function(t, r, e, i) {
    return new(e || (e = Promise))((function(n, o) {
        function s(t) {
            try {
                h(i.next(t))
            } catch (r) {
                o(r)
            }
        }

        function a(t) {
            try {
                h(i.throw(t))
            } catch (r) {
                o(r)
            }
        }

        function h(t) {
            var r;
            t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e((function(t) {
                t(r)
            }))).then(s, a)
        }
        h((i = i.apply(t, r || [])).next())
    }))
};
const j = new m("properties/5.7.0");

function Y(t, r, e) {
    Object.defineProperty(t, r, {
        enumerable: !0,
        value: e,
        writable: !1
    })
}

function X(t, r) {
    for (let e = 0; e < 32; e++) {
        if (t[r]) return t[r];
        if (!t.prototype || "object" != typeof t.prototype) break;
        t = Object.getPrototypeOf(t.prototype).constructor
    }
    return null
}

function V(t) {
    return J(this, void 0, void 0, (function*() {
        const r = Object.keys(t).map((r => {
            const e = t[r];
            return Promise.resolve(e).then((t => ({
                key: r,
                value: t
            })))
        }));
        return (yield Promise.all(r)).reduce(((t, r) => (t[r.key] = r.value, t)), {})
    }))
}

function W(t, r) {
    t && "object" == typeof t || j.throwArgumentError("invalid object", "object", t), Object.keys(t).forEach((e => {
        r[e] || j.throwArgumentError("invalid object key - " + e, "transaction:" + e, t)
    }))
}

function Z(t) {
    const r = {};
    for (const e in t) r[e] = t[e];
    return r
}
const $ = {
    bigint: !0,
    boolean: !0,
    function: !0,
    number: !0,
    string: !0
};

function tt(t) {
    if (null == t || $[typeof t]) return !0;
    if (Array.isArray(t) || "object" == typeof t) {
        if (!Object.isFrozen(t)) return !1;
        const e = Object.keys(t);
        for (let i = 0; i < e.length; i++) {
            let n = null;
            try {
                n = t[e[i]]
            } catch (r) {
                continue
            }
            if (!tt(n)) return !1
        }
        return !0
    }
    return j.throwArgumentError("Cannot deepCopy " + typeof t, "object", t)
}

function rt(t) {
    if (tt(t)) return t;
    if (Array.isArray(t)) return Object.freeze(t.map((t => et(t))));
    if ("object" == typeof t) {
        const r = {};
        for (const e in t) {
            const i = t[e];
            void 0 !== i && Y(r, e, et(i))
        }
        return r
    }
    return j.throwArgumentError("Cannot deepCopy " + typeof t, "object", t)
}

function et(t) {
    return rt(t)
}
class it {
    constructor(t) {
        for (const r in t) this[r] = et(t[r])
    }
}
var nt, ot = {
    exports: {}
};
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */
nt = ot,
    function() {
        var t = "input is invalid type",
            e = "object" == typeof window,
            i = e ? window : {};
        i.JS_SHA3_NO_WINDOW && (e = !1);
        var n = !e && "object" == typeof self;
        !i.JS_SHA3_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node ? i = r : n && (i = self);
        var o = !i.JS_SHA3_NO_COMMON_JS && nt.exports,
            s = !i.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
            a = "0123456789abcdef".split(""),
            h = [4, 1024, 262144, 67108864],
            u = [0, 8, 16, 24],
            l = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
            f = [224, 256, 384, 512],
            c = [128, 256],
            d = ["hex", "buffer", "arrayBuffer", "array", "digest"],
            m = {
                128: 168,
                256: 136
            };
        !i.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }), !s || !i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(t) {
            return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
        });
        for (var p = function(t, r, e) {
                return function(i) {
                    return new P(t, r, t).update(i)[e]()
                }
            }, g = function(t, r, e) {
                return function(i, n) {
                    return new P(t, r, n).update(i)[e]()
                }
            }, v = function(t, r, e) {
                return function(r, i, n, o) {
                    return M["cshake" + t].update(r, i, n, o)[e]()
                }
            }, y = function(t, r, e) {
                return function(r, i, n, o) {
                    return M["kmac" + t].update(r, i, n, o)[e]()
                }
            }, w = function(t, r, e, i) {
                for (var n = 0; n < d.length; ++n) {
                    var o = d[n];
                    t[o] = r(e, i, o)
                }
                return t
            }, A = function(t, r) {
                var e = p(t, r, "hex");
                return e.create = function() {
                    return new P(t, r, t)
                }, e.update = function(t) {
                    return e.create().update(t)
                }, w(e, p, t, r)
            }, b = [{
                name: "keccak",
                padding: [1, 256, 65536, 16777216],
                bits: f,
                createMethod: A
            }, {
                name: "sha3",
                padding: [6, 1536, 393216, 100663296],
                bits: f,
                createMethod: A
            }, {
                name: "shake",
                padding: [31, 7936, 2031616, 520093696],
                bits: c,
                createMethod: function(t, r) {
                    var e = g(t, r, "hex");
                    return e.create = function(e) {
                        return new P(t, r, e)
                    }, e.update = function(t, r) {
                        return e.create(r).update(t)
                    }, w(e, g, t, r)
                }
            }, {
                name: "cshake",
                padding: h,
                bits: c,
                createMethod: function(t, r) {
                    var e = m[t],
                        i = v(t, 0, "hex");
                    return i.create = function(i, n, o) {
                        return n || o ? new P(t, r, i).bytepad([n, o], e) : M["shake" + t].create(i)
                    }, i.update = function(t, r, e, n) {
                        return i.create(r, e, n).update(t)
                    }, w(i, v, t, r)
                }
            }, {
                name: "kmac",
                padding: h,
                bits: c,
                createMethod: function(t, r) {
                    var e = m[t],
                        i = y(t, 0, "hex");
                    return i.create = function(i, n, o) {
                        return new R(t, r, n).bytepad(["KMAC", o], e).bytepad([i], e)
                    }, i.update = function(t, r, e, n) {
                        return i.create(t, e, n).update(r)
                    }, w(i, y, t, r)
                }
            }], M = {}, E = [], _ = 0; _ < b.length; ++_)
            for (var k = b[_], N = k.bits, I = 0; I < N.length; ++I) {
                var x = k.name + "_" + N[I];
                if (E.push(x), M[x] = k.createMethod(N[I], k.padding), "sha3" !== k.name) {
                    var S = k.name + N[I];
                    E.push(S), M[S] = M[x]
                }
            }

        function P(t, r, e) {
            this.blocks = [], this.s = [], this.padding = r, this.outputBits = e, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = e >> 5, this.extraBytes = (31 & e) >> 3;
            for (var i = 0; i < 50; ++i) this.s[i] = 0
        }

        function R(t, r, e) {
            P.call(this, t, r, e)
        }
        P.prototype.update = function(r) {
            if (this.finalized) throw new Error("finalize already called");
            var e, i = typeof r;
            if ("string" !== i) {
                if ("object" !== i) throw new Error(t);
                if (null === r) throw new Error(t);
                if (s && r.constructor === ArrayBuffer) r = new Uint8Array(r);
                else if (!(Array.isArray(r) || s && ArrayBuffer.isView(r))) throw new Error(t);
                e = !0
            }
            for (var n, o, a = this.blocks, h = this.byteCount, l = r.length, f = this.blockCount, c = 0, d = this.s; c < l;) {
                if (this.reset)
                    for (this.reset = !1, a[0] = this.block, n = 1; n < f + 1; ++n) a[n] = 0;
                if (e)
                    for (n = this.start; c < l && n < h; ++c) a[n >> 2] |= r[c] << u[3 & n++];
                else
                    for (n = this.start; c < l && n < h; ++c)(o = r.charCodeAt(c)) < 128 ? a[n >> 2] |= o << u[3 & n++] : o < 2048 ? (a[n >> 2] |= (192 | o >> 6) << u[3 & n++], a[n >> 2] |= (128 | 63 & o) << u[3 & n++]) : o < 55296 || o >= 57344 ? (a[n >> 2] |= (224 | o >> 12) << u[3 & n++], a[n >> 2] |= (128 | o >> 6 & 63) << u[3 & n++], a[n >> 2] |= (128 | 63 & o) << u[3 & n++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & r.charCodeAt(++c)), a[n >> 2] |= (240 | o >> 18) << u[3 & n++], a[n >> 2] |= (128 | o >> 12 & 63) << u[3 & n++], a[n >> 2] |= (128 | o >> 6 & 63) << u[3 & n++], a[n >> 2] |= (128 | 63 & o) << u[3 & n++]);
                if (this.lastByteIndex = n, n >= h) {
                    for (this.start = n - h, this.block = a[f], n = 0; n < f; ++n) d[n] ^= a[n];
                    T(d), this.reset = !0
                } else this.start = n
            }
            return this
        }, P.prototype.encode = function(t, r) {
            var e = 255 & t,
                i = 1,
                n = [e];
            for (e = 255 & (t >>= 8); e > 0;) n.unshift(e), e = 255 & (t >>= 8), ++i;
            return r ? n.push(i) : n.unshift(i), this.update(n), n.length
        }, P.prototype.encodeString = function(r) {
            var e, i = typeof r;
            if ("string" !== i) {
                if ("object" !== i) throw new Error(t);
                if (null === r) throw new Error(t);
                if (s && r.constructor === ArrayBuffer) r = new Uint8Array(r);
                else if (!(Array.isArray(r) || s && ArrayBuffer.isView(r))) throw new Error(t);
                e = !0
            }
            var n = 0,
                o = r.length;
            if (e) n = o;
            else
                for (var a = 0; a < r.length; ++a) {
                    var h = r.charCodeAt(a);
                    h < 128 ? n += 1 : h < 2048 ? n += 2 : h < 55296 || h >= 57344 ? n += 3 : (h = 65536 + ((1023 & h) << 10 | 1023 & r.charCodeAt(++a)), n += 4)
                }
            return n += this.encode(8 * n), this.update(r), n
        }, P.prototype.bytepad = function(t, r) {
            for (var e = this.encode(r), i = 0; i < t.length; ++i) e += this.encodeString(t[i]);
            var n = r - e % r,
                o = [];
            return o.length = n, this.update(o), this
        }, P.prototype.finalize = function() {
            if (!this.finalized) {
                this.finalized = !0;
                var t = this.blocks,
                    r = this.lastByteIndex,
                    e = this.blockCount,
                    i = this.s;
                if (t[r >> 2] |= this.padding[3 & r], this.lastByteIndex === this.byteCount)
                    for (t[0] = t[e], r = 1; r < e + 1; ++r) t[r] = 0;
                for (t[e - 1] |= 2147483648, r = 0; r < e; ++r) i[r] ^= t[r];
                T(i)
            }
        }, P.prototype.toString = P.prototype.hex = function() {
            this.finalize();
            for (var t, r = this.blockCount, e = this.s, i = this.outputBlocks, n = this.extraBytes, o = 0, s = 0, h = ""; s < i;) {
                for (o = 0; o < r && s < i; ++o, ++s) t = e[o], h += a[t >> 4 & 15] + a[15 & t] + a[t >> 12 & 15] + a[t >> 8 & 15] + a[t >> 20 & 15] + a[t >> 16 & 15] + a[t >> 28 & 15] + a[t >> 24 & 15];
                s % r == 0 && (T(e), o = 0)
            }
            return n && (t = e[o], h += a[t >> 4 & 15] + a[15 & t], n > 1 && (h += a[t >> 12 & 15] + a[t >> 8 & 15]), n > 2 && (h += a[t >> 20 & 15] + a[t >> 16 & 15])), h
        }, P.prototype.arrayBuffer = function() {
            this.finalize();
            var t, r = this.blockCount,
                e = this.s,
                i = this.outputBlocks,
                n = this.extraBytes,
                o = 0,
                s = 0,
                a = this.outputBits >> 3;
            t = n ? new ArrayBuffer(i + 1 << 2) : new ArrayBuffer(a);
            for (var h = new Uint32Array(t); s < i;) {
                for (o = 0; o < r && s < i; ++o, ++s) h[s] = e[o];
                s % r == 0 && T(e)
            }
            return n && (h[o] = e[o], t = t.slice(0, a)), t
        }, P.prototype.buffer = P.prototype.arrayBuffer, P.prototype.digest = P.prototype.array = function() {
            this.finalize();
            for (var t, r, e = this.blockCount, i = this.s, n = this.outputBlocks, o = this.extraBytes, s = 0, a = 0, h = []; a < n;) {
                for (s = 0; s < e && a < n; ++s, ++a) t = a << 2, r = i[s], h[t] = 255 & r, h[t + 1] = r >> 8 & 255, h[t + 2] = r >> 16 & 255, h[t + 3] = r >> 24 & 255;
                a % e == 0 && T(i)
            }
            return o && (t = a << 2, r = i[s], h[t] = 255 & r, o > 1 && (h[t + 1] = r >> 8 & 255), o > 2 && (h[t + 2] = r >> 16 & 255)), h
        }, R.prototype = new P, R.prototype.finalize = function() {
            return this.encode(this.outputBits, !0), P.prototype.finalize.call(this)
        };
        var T = function(t) {
            var r, e, i, n, o, s, a, h, u, f, c, d, m, p, g, v, y, w, A, b, M, E, _, k, N, I, x, S, P, R, T, C, B, O, L, F, U, D, q, G, z, H, Q, K, J, j, Y, X, V, W, Z, $, tt, rt, et, it, nt, ot, st, at, ht, ut, lt;
            for (i = 0; i < 48; i += 2) n = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], h = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], u = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], f = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], c = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], r = (d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ (s << 1 | a >>> 31), e = (m = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ (a << 1 | s >>> 31), t[0] ^= r, t[1] ^= e, t[10] ^= r, t[11] ^= e, t[20] ^= r, t[21] ^= e, t[30] ^= r, t[31] ^= e, t[40] ^= r, t[41] ^= e, r = n ^ (h << 1 | u >>> 31), e = o ^ (u << 1 | h >>> 31), t[2] ^= r, t[3] ^= e, t[12] ^= r, t[13] ^= e, t[22] ^= r, t[23] ^= e, t[32] ^= r, t[33] ^= e, t[42] ^= r, t[43] ^= e, r = s ^ (f << 1 | c >>> 31), e = a ^ (c << 1 | f >>> 31), t[4] ^= r, t[5] ^= e, t[14] ^= r, t[15] ^= e, t[24] ^= r, t[25] ^= e, t[34] ^= r, t[35] ^= e, t[44] ^= r, t[45] ^= e, r = h ^ (d << 1 | m >>> 31), e = u ^ (m << 1 | d >>> 31), t[6] ^= r, t[7] ^= e, t[16] ^= r, t[17] ^= e, t[26] ^= r, t[27] ^= e, t[36] ^= r, t[37] ^= e, t[46] ^= r, t[47] ^= e, r = f ^ (n << 1 | o >>> 31), e = c ^ (o << 1 | n >>> 31), t[8] ^= r, t[9] ^= e, t[18] ^= r, t[19] ^= e, t[28] ^= r, t[29] ^= e, t[38] ^= r, t[39] ^= e, t[48] ^= r, t[49] ^= e, p = t[0], g = t[1], j = t[11] << 4 | t[10] >>> 28, Y = t[10] << 4 | t[11] >>> 28, S = t[20] << 3 | t[21] >>> 29, P = t[21] << 3 | t[20] >>> 29, at = t[31] << 9 | t[30] >>> 23, ht = t[30] << 9 | t[31] >>> 23, H = t[40] << 18 | t[41] >>> 14, Q = t[41] << 18 | t[40] >>> 14, O = t[2] << 1 | t[3] >>> 31, L = t[3] << 1 | t[2] >>> 31, v = t[13] << 12 | t[12] >>> 20, y = t[12] << 12 | t[13] >>> 20, X = t[22] << 10 | t[23] >>> 22, V = t[23] << 10 | t[22] >>> 22, R = t[33] << 13 | t[32] >>> 19, T = t[32] << 13 | t[33] >>> 19, ut = t[42] << 2 | t[43] >>> 30, lt = t[43] << 2 | t[42] >>> 30, rt = t[5] << 30 | t[4] >>> 2, et = t[4] << 30 | t[5] >>> 2, F = t[14] << 6 | t[15] >>> 26, U = t[15] << 6 | t[14] >>> 26, w = t[25] << 11 | t[24] >>> 21, A = t[24] << 11 | t[25] >>> 21, W = t[34] << 15 | t[35] >>> 17, Z = t[35] << 15 | t[34] >>> 17, C = t[45] << 29 | t[44] >>> 3, B = t[44] << 29 | t[45] >>> 3, k = t[6] << 28 | t[7] >>> 4, N = t[7] << 28 | t[6] >>> 4, it = t[17] << 23 | t[16] >>> 9, nt = t[16] << 23 | t[17] >>> 9, D = t[26] << 25 | t[27] >>> 7, q = t[27] << 25 | t[26] >>> 7, b = t[36] << 21 | t[37] >>> 11, M = t[37] << 21 | t[36] >>> 11, $ = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, K = t[8] << 27 | t[9] >>> 5, J = t[9] << 27 | t[8] >>> 5, I = t[18] << 20 | t[19] >>> 12, x = t[19] << 20 | t[18] >>> 12, ot = t[29] << 7 | t[28] >>> 25, st = t[28] << 7 | t[29] >>> 25, G = t[38] << 8 | t[39] >>> 24, z = t[39] << 8 | t[38] >>> 24, E = t[48] << 14 | t[49] >>> 18, _ = t[49] << 14 | t[48] >>> 18, t[0] = p ^ ~v & w, t[1] = g ^ ~y & A, t[10] = k ^ ~I & S, t[11] = N ^ ~x & P, t[20] = O ^ ~F & D, t[21] = L ^ ~U & q, t[30] = K ^ ~j & X, t[31] = J ^ ~Y & V, t[40] = rt ^ ~it & ot, t[41] = et ^ ~nt & st, t[2] = v ^ ~w & b, t[3] = y ^ ~A & M, t[12] = I ^ ~S & R, t[13] = x ^ ~P & T, t[22] = F ^ ~D & G, t[23] = U ^ ~q & z, t[32] = j ^ ~X & W, t[33] = Y ^ ~V & Z, t[42] = it ^ ~ot & at, t[43] = nt ^ ~st & ht, t[4] = w ^ ~b & E, t[5] = A ^ ~M & _, t[14] = S ^ ~R & C, t[15] = P ^ ~T & B, t[24] = D ^ ~G & H, t[25] = q ^ ~z & Q, t[34] = X ^ ~W & $, t[35] = V ^ ~Z & tt, t[44] = ot ^ ~at & ut, t[45] = st ^ ~ht & lt, t[6] = b ^ ~E & p, t[7] = M ^ ~_ & g, t[16] = R ^ ~C & k, t[17] = T ^ ~B & N, t[26] = G ^ ~H & O, t[27] = z ^ ~Q & L, t[36] = W ^ ~$ & K, t[37] = Z ^ ~tt & J, t[46] = at ^ ~ut & rt, t[47] = ht ^ ~lt & et, t[8] = E ^ ~p & v, t[9] = _ ^ ~g & y, t[18] = C ^ ~k & I, t[19] = B ^ ~N & x, t[28] = H ^ ~O & F, t[29] = Q ^ ~L & U, t[38] = $ ^ ~K & j, t[39] = tt ^ ~J & Y, t[48] = ut ^ ~rt & it, t[49] = lt ^ ~et & nt, t[0] ^= l[i], t[1] ^= l[i + 1]
        };
        if (o) nt.exports = M;
        else
            for (_ = 0; _ < E.length; ++_) i[E[_]] = M[E[_]]
    }();
const st = e(ot.exports);

function at(t) {
    return "0x" + st.keccak_256(b(t))
}
const ht = new m("rlp/5.7.0");

function ut(t) {
    const r = [];
    for (; t;) r.unshift(255 & t), t >>= 8;
    return r
}

function lt(t, r, e) {
    let i = 0;
    for (let n = 0; n < e; n++) i = 256 * i + t[r + n];
    return i
}

function ft(t) {
    if (Array.isArray(t)) {
        let r = [];
        if (t.forEach((function(t) {
                r = r.concat(ft(t))
            })), r.length <= 55) return r.unshift(192 + r.length), r;
        const e = ut(r.length);
        return e.unshift(247 + e.length), e.concat(r)
    }
    y(t) || ht.throwArgumentError("RLP object must be BytesLike", "object", t);
    const r = Array.prototype.slice.call(b(t));
    if (1 === r.length && r[0] <= 127) return r;
    if (r.length <= 55) return r.unshift(128 + r.length), r;
    const e = ut(r.length);
    return e.unshift(183 + e.length), e.concat(r)
}

function ct(t) {
    return N(ft(t))
}

function dt(t, r, e, i) {
    const n = [];
    for (; e < r + 1 + i;) {
        const o = mt(t, e);
        n.push(o.result), (e += o.consumed) > r + 1 + i && ht.throwError("child data too short", m.errors.BUFFER_OVERRUN, {})
    }
    return {
        consumed: 1 + i,
        result: n
    }
}

function mt(t, r) {
    if (0 === t.length && ht.throwError("data too short", m.errors.BUFFER_OVERRUN, {}), t[r] >= 248) {
        const e = t[r] - 247;
        r + 1 + e > t.length && ht.throwError("data short segment too short", m.errors.BUFFER_OVERRUN, {});
        const i = lt(t, r + 1, e);
        return r + 1 + e + i > t.length && ht.throwError("data long segment too short", m.errors.BUFFER_OVERRUN, {}), dt(t, r, r + 1 + e, e + i)
    }
    if (t[r] >= 192) {
        const e = t[r] - 192;
        return r + 1 + e > t.length && ht.throwError("data array too short", m.errors.BUFFER_OVERRUN, {}), dt(t, r, r + 1, e)
    }
    if (t[r] >= 184) {
        const e = t[r] - 183;
        r + 1 + e > t.length && ht.throwError("data array too short", m.errors.BUFFER_OVERRUN, {});
        const i = lt(t, r + 1, e);
        r + 1 + e + i > t.length && ht.throwError("data array too short", m.errors.BUFFER_OVERRUN, {});
        return {
            consumed: 1 + e + i,
            result: N(t.slice(r + 1 + e, r + 1 + e + i))
        }
    }
    if (t[r] >= 128) {
        const e = t[r] - 128;
        r + 1 + e > t.length && ht.throwError("data too short", m.errors.BUFFER_OVERRUN, {});
        return {
            consumed: 1 + e,
            result: N(t.slice(r + 1, r + 1 + e))
        }
    }
    return {
        consumed: 1,
        result: N(t[r])
    }
}

function pt(t) {
    const r = b(t),
        e = mt(r, 0);
    return e.consumed !== r.length && ht.throwArgumentError("invalid rlp data", "data", t), e.result
}
const gt = Object.freeze(Object.defineProperty({
        __proto__: null,
        decode: pt,
        encode: ct
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    vt = new m("address/5.7.0");

function yt(t) {
    k(t, 20) || vt.throwArgumentError("invalid address", "address", t);
    const r = (t = t.toLowerCase()).substring(2).split(""),
        e = new Uint8Array(40);
    for (let n = 0; n < 40; n++) e[n] = r[n].charCodeAt(0);
    const i = b(at(e));
    for (let n = 0; n < 40; n += 2) i[n >> 1] >> 4 >= 8 && (r[n] = r[n].toUpperCase()), (15 & i[n >> 1]) >= 8 && (r[n + 1] = r[n + 1].toUpperCase());
    return "0x" + r.join("")
}
const wt = {};
for (let Os = 0; Os < 10; Os++) wt[String(Os)] = String(Os);
for (let Os = 0; Os < 26; Os++) wt[String.fromCharCode(65 + Os)] = String(10 + Os);
const At = Math.floor(function(t) {
    return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10
}(9007199254740991));

function bt(t) {
    let r = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map((t => wt[t])).join("");
    for (; r.length >= At;) {
        let t = r.substring(0, At);
        r = parseInt(t, 10) % 97 + r.substring(t.length)
    }
    let e = String(98 - parseInt(r, 10) % 97);
    for (; e.length < 2;) e = "0" + e;
    return e
}

function Mt(t) {
    let r = null;
    if ("string" != typeof t && vt.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), r = yt(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && r !== t && vt.throwArgumentError("bad address checksum", "address", t);
    else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        for (t.substring(2, 4) !== bt(t) && vt.throwArgumentError("bad icap checksum", "address", t), e = t.substring(4), r = new L(e, 36).toString(16); r.length < 40;) r = "0" + r;
        r = yt("0x" + r)
    } else vt.throwArgumentError("invalid address", "address", t);
    var e;
    return r
}

function Et(t) {
    try {
        return Mt(t), !0
    } catch (r) {}
    return !1
}

function _t(t) {
    let r = (e = Mt(t).substring(2), new L(e, 16).toString(36)).toUpperCase();
    for (var e; r.length < 30;) r = "0" + r;
    return "XE" + bt("XE00" + r) + r
}

function kt(t) {
    let r = null;
    try {
        r = Mt(t.from)
    } catch (e) {
        vt.throwArgumentError("missing from address", "transaction", t)
    }
    return Mt(x(at(ct([r, E(b(G.from(t.nonce).toHexString()))])), 12))
}

function Nt(t, r, e) {
    return 32 !== I(r) && vt.throwArgumentError("salt must be 32 bytes", "salt", r), 32 !== I(e) && vt.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", e), Mt(x(at(M(["0xff", Mt(t), r, e])), 12))
}
const It = "0x0000000000000000000000000000000000000000",
    xt = G.from(-1),
    St = G.from(0),
    Pt = G.from(1),
    Rt = G.from(2),
    Tt = G.from("1000000000000000000"),
    Ct = G.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
    Bt = G.from("-0x8000000000000000000000000000000000000000000000000000000000000000"),
    Ot = G.from("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
    Lt = "0x0000000000000000000000000000000000000000000000000000000000000000",
    Ft = new m("strings/5.7.0");
var Ut, Dt;

function qt(t, r, e, i, n) {
    if (t === Dt.BAD_PREFIX || t === Dt.UNEXPECTED_CONTINUE) {
        let t = 0;
        for (let i = r + 1; i < e.length && e[i] >> 6 == 2; i++) t++;
        return t
    }
    return t === Dt.OVERRUN ? e.length - r - 1 : 0
}! function(t) {
    t.current = "", t.NFC = "NFC", t.NFD = "NFD", t.NFKC = "NFKC", t.NFKD = "NFKD"
}(Ut || (Ut = {})),
function(t) {
    t.UNEXPECTED_CONTINUE = "unexpected continuation byte", t.BAD_PREFIX = "bad codepoint prefix", t.OVERRUN = "string overrun", t.MISSING_CONTINUE = "missing continuation byte", t.OUT_OF_RANGE = "out of UTF-8 range", t.UTF16_SURROGATE = "UTF-16 surrogate", t.OVERLONG = "overlong representation"
}(Dt || (Dt = {}));
const Gt = Object.freeze({
    error: function(t, r, e, i, n) {
        return Ft.throwArgumentError(`invalid codepoint at offset ${r}; ${t}`, "bytes", e)
    },
    ignore: qt,
    replace: function(t, r, e, i, n) {
        return t === Dt.OVERLONG ? (i.push(n), 0) : (i.push(65533), qt(t, r, e))
    }
});

function zt(t, r) {
    null == r && (r = Gt.error), t = b(t);
    const e = [];
    let i = 0;
    for (; i < t.length;) {
        const n = t[i++];
        if (n >> 7 == 0) {
            e.push(n);
            continue
        }
        let o = null,
            s = null;
        if (192 == (224 & n)) o = 1, s = 127;
        else if (224 == (240 & n)) o = 2, s = 2047;
        else {
            if (240 != (248 & n)) {
                i += r(128 == (192 & n) ? Dt.UNEXPECTED_CONTINUE : Dt.BAD_PREFIX, i - 1, t, e);
                continue
            }
            o = 3, s = 65535
        }
        if (i - 1 + o >= t.length) {
            i += r(Dt.OVERRUN, i - 1, t, e);
            continue
        }
        let a = n & (1 << 8 - o - 1) - 1;
        for (let h = 0; h < o; h++) {
            let n = t[i];
            if (128 != (192 & n)) {
                i += r(Dt.MISSING_CONTINUE, i, t, e), a = null;
                break
            }
            a = a << 6 | 63 & n, i++
        }
        null !== a && (a > 1114111 ? i += r(Dt.OUT_OF_RANGE, i - 1 - o, t, e, a) : a >= 55296 && a <= 57343 ? i += r(Dt.UTF16_SURROGATE, i - 1 - o, t, e, a) : a <= s ? i += r(Dt.OVERLONG, i - 1 - o, t, e, a) : e.push(a))
    }
    return e
}

function Ht(t, r = Ut.current) {
    r != Ut.current && (Ft.checkNormalize(), t = t.normalize(r));
    let e = [];
    for (let i = 0; i < t.length; i++) {
        const r = t.charCodeAt(i);
        if (r < 128) e.push(r);
        else if (r < 2048) e.push(r >> 6 | 192), e.push(63 & r | 128);
        else if (55296 == (64512 & r)) {
            i++;
            const n = t.charCodeAt(i);
            if (i >= t.length || 56320 != (64512 & n)) throw new Error("invalid utf-8 string");
            const o = 65536 + ((1023 & r) << 10) + (1023 & n);
            e.push(o >> 18 | 240), e.push(o >> 12 & 63 | 128), e.push(o >> 6 & 63 | 128), e.push(63 & o | 128)
        } else e.push(r >> 12 | 224), e.push(r >> 6 & 63 | 128), e.push(63 & r | 128)
    }
    return b(e)
}

function Qt(t) {
    const r = "0000" + t.toString(16);
    return "\\u" + r.substring(r.length - 4)
}

function Kt(t, r) {
    return '"' + zt(t, r).map((t => {
        if (t < 256) {
            switch (t) {
                case 8:
                    return "\\b";
                case 9:
                    return "\\t";
                case 10:
                    return "\\n";
                case 13:
                    return "\\r";
                case 34:
                    return '\\"';
                case 92:
                    return "\\\\"
            }
            if (t >= 32 && t < 127) return String.fromCharCode(t)
        }
        return t <= 65535 ? Qt(t) : Qt(55296 + ((t -= 65536) >> 10 & 1023)) + Qt(56320 + (1023 & t))
    })).join("") + '"'
}

function Jt(t) {
    return t.map((t => t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10 & 1023), 56320 + (1023 & t))))).join("")
}

function jt(t, r) {
    return Jt(zt(t, r))
}

function Yt(t, r = Ut.current) {
    return zt(Ht(t, r))
}

function Xt(t) {
    return at(Ht(t))
}

function Vt(t) {
    t = atob(t);
    const r = [];
    for (let e = 0; e < t.length; e++) r.push(t.charCodeAt(e));
    return b(r)
}

function Wt(t) {
    t = b(t);
    let r = "";
    for (let e = 0; e < t.length; e++) r += String.fromCharCode(t[e]);
    return btoa(r)
}

function Zt(t, r) {
    null == r && (r = 1);
    const e = [],
        i = e.forEach,
        n = function(t, r) {
            i.call(t, (function(t) {
                r > 0 && Array.isArray(t) ? n(t, r - 1) : e.push(t)
            }))
        };
    return n(t, r), e
}

function $t(t) {
    return function(t) {
        let r = 0;
        return () => t[r++]
    }(function(t) {
        let r = 0;

        function e() {
            return t[r++] << 8 | t[r++]
        }
        let i = e(),
            n = 1,
            o = [0, 1];
        for (let A = 1; A < i; A++) o.push(n += e());
        let s = e(),
            a = r;
        r += s;
        let h = 0,
            u = 0;

        function l() {
            return 0 == h && (u = u << 8 | t[r++], h = 8), u >> --h & 1
        }
        const f = Math.pow(2, 31),
            c = f >>> 1,
            d = c >> 1,
            m = f - 1;
        let p = 0;
        for (let A = 0; A < 31; A++) p = p << 1 | l();
        let g = [],
            v = 0,
            y = f;
        for (;;) {
            let t = Math.floor(((p - v + 1) * n - 1) / y),
                r = 0,
                e = i;
            for (; e - r > 1;) {
                let i = r + e >>> 1;
                t < o[i] ? e = i : r = i
            }
            if (0 == r) break;
            g.push(r);
            let s = v + Math.floor(y * o[r] / n),
                a = v + Math.floor(y * o[r + 1] / n) - 1;
            for (; 0 == ((s ^ a) & c);) p = p << 1 & m | l(), s = s << 1 & m, a = a << 1 & m | 1;
            for (; s & ~a & d;) p = p & c | p << 1 & m >>> 1 | l(), s = s << 1 ^ c, a = (a ^ c) << 1 | c | 1;
            v = s, y = 1 + a - s
        }
        let w = i - 4;
        return g.map((r => {
            switch (r - w) {
                case 3:
                    return w + 65792 + (t[a++] << 16 | t[a++] << 8 | t[a++]);
                case 2:
                    return w + 256 + (t[a++] << 8 | t[a++]);
                case 1:
                    return w + t[a++];
                default:
                    return r - 1
            }
        }))
    }(t))
}

function tr(t) {
    return 1 & t ? ~t >> 1 : t >> 1
}

function rr(t, r) {
    let e = Array(t);
    for (let i = 0, n = -1; i < t; i++) e[i] = n += 1 + r();
    return e
}

function er(t, r) {
    let e = Array(t);
    for (let i = 0, n = 0; i < t; i++) e[i] = n += tr(r());
    return e
}

function ir(t, r) {
    let e = rr(t(), t),
        i = t(),
        n = rr(i, t),
        o = function(t, r) {
            let e = Array(t);
            for (let i = 0; i < t; i++) e[i] = 1 + r();
            return e
        }(i, t);
    for (let s = 0; s < i; s++)
        for (let t = 0; t < o[s]; t++) e.push(n[s] + t);
    return r ? e.map((t => r[t])) : e
}

function nr(t, r, e) {
    let i = Array(t).fill(void 0).map((() => []));
    for (let n = 0; n < r; n++) er(t, e).forEach(((t, r) => i[r].push(t)));
    return i
}

function or(t, r) {
    let e = 1 + r(),
        i = r(),
        n = function(t) {
            let r = [];
            for (;;) {
                let e = t();
                if (0 == e) break;
                r.push(e)
            }
            return r
        }(r);
    return Zt(nr(n.length, 1 + t, r).map(((t, r) => {
        const o = t[0],
            s = t.slice(1);
        return Array(n[r]).fill(void 0).map(((t, r) => {
            let n = r * i;
            return [o + r * e, s.map((t => t + n))]
        }))
    })))
}

function sr(t, r) {
    return nr(1 + r(), 1 + t, r).map((t => [t[0], t.slice(1)]))
}
const ar = $t(Vt("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA==")),
    hr = new Set(ir(ar)),
    ur = new Set(ir(ar)),
    lr = function(t) {
        let r = [];
        for (;;) {
            let e = t();
            if (0 == e) break;
            r.push(or(e, t))
        }
        for (;;) {
            let e = t() - 1;
            if (e < 0) break;
            r.push(sr(e, t))
        }
        return function(t) {
            const r = {};
            for (let e = 0; e < t.length; e++) {
                const i = t[e];
                r[i[0]] = i[1]
            }
            return r
        }(Zt(r))
    }(ar),
    fr = function(t) {
        let r = ir(t).sort(((t, r) => t - r));
        return function e() {
            let i = [];
            for (;;) {
                let n = ir(t, r);
                if (0 == n.length) break;
                i.push({
                    set: new Set(n),
                    node: e()
                })
            }
            i.sort(((t, r) => r.set.size - t.set.size));
            let n = t(),
                o = n % 3;
            n = n / 3 | 0;
            let s = !!(1 & n);
            return n >>= 1, {
                branches: i,
                valid: o,
                fe0f: s,
                save: 1 == n,
                check: 2 == n
            }
        }()
    }(ar);

function cr(t) {
    return Yt(t)
}

function dr(t) {
    return t.filter((t => 65039 != t))
}

function mr(t) {
    for (let e of t.split(".")) {
        let t = cr(e);
        try {
            for (let r = t.lastIndexOf(95) - 1; r >= 0; r--)
                if (95 !== t[r]) throw new Error("underscore only allowed at start");
            if (t.length >= 4 && t.every((t => t < 128)) && 45 === t[2] && 45 === t[3]) throw new Error("invalid label extension")
        } catch (r) {
            throw new Error(`Invalid label "${e}": ${r.message}`)
        }
    }
    return t
}

function pr(t) {
    return mr(function(t, r) {
        let e = cr(t).reverse(),
            i = [];
        for (; e.length;) {
            let t = gr(e);
            if (t) {
                i.push(...r(t));
                continue
            }
            let n = e.pop();
            if (hr.has(n)) {
                i.push(n);
                continue
            }
            if (ur.has(n)) continue;
            let o = lr[n];
            if (!o) throw new Error(`Disallowed codepoint: 0x${n.toString(16).toUpperCase()}`);
            i.push(...o)
        }
        return mr(function(t) {
            return t.normalize("NFC")
        }(String.fromCodePoint(...i)))
    }(t, dr))
}

function gr(t, r) {
    var e;
    let i, n, o = fr,
        s = [],
        a = t.length;
    for (r && (r.length = 0); a;) {
        let h = t[--a];
        if (o = null === (e = o.branches.find((t => t.set.has(h)))) || void 0 === e ? void 0 : e.node, !o) break;
        if (o.save) n = h;
        else if (o.check && h === n) break;
        s.push(h), o.fe0f && (s.push(65039), a > 0 && 65039 == t[a - 1] && a--), o.valid && (i = s.slice(), 2 == o.valid && i.splice(1, 1), r && r.push(...t.slice(a).reverse()), t.length = a)
    }
    return i
}
const vr = new m("hash/5.7.0"),
    yr = new Uint8Array(32);

function wr(t) {
    if (0 === t.length) throw new Error("invalid ENS name; empty component");
    return t
}

function Ar(t) {
    const r = Ht(pr(t)),
        e = [];
    if (0 === t.length) return e;
    let i = 0;
    for (let n = 0; n < r.length; n++) {
        46 === r[n] && (e.push(wr(r.slice(i, n))), i = n + 1)
    }
    if (i >= r.length) throw new Error("invalid ENS name; empty component");
    return e.push(wr(r.slice(i))), e
}

function br(t) {
    try {
        return 0 !== Ar(t).length
    } catch (r) {}
    return !1
}

function Mr(t) {
    "string" != typeof t && vr.throwArgumentError("invalid ENS name; not a string", "name", t);
    let r = yr;
    const e = Ar(t);
    for (; e.length;) r = at(M([r, at(e.pop())]));
    return N(r)
}

function Er(t) {
    return N(M(Ar(t).map((t => {
        if (t.length > 63) throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
        const r = new Uint8Array(t.length + 1);
        return r.set(t, 1), r[0] = r.length - 1, r
    })))) + "00"
}
yr.fill(0);
var _r = globalThis && globalThis.__awaiter || function(t, r, e, i) {
    return new(e || (e = Promise))((function(n, o) {
        function s(t) {
            try {
                h(i.next(t))
            } catch (r) {
                o(r)
            }
        }

        function a(t) {
            try {
                h(i.throw(t))
            } catch (r) {
                o(r)
            }
        }

        function h(t) {
            var r;
            t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e((function(t) {
                t(r)
            }))).then(s, a)
        }
        h((i = i.apply(t, r || [])).next())
    }))
};
const kr = new m("hash/5.7.0"),
    Nr = new Uint8Array(32);
Nr.fill(0);
const Ir = G.from(-1),
    xr = G.from(0),
    Sr = G.from(1),
    Pr = G.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
const Rr = T(Sr.toHexString(), 32),
    Tr = T(xr.toHexString(), 32),
    Cr = {
        name: "string",
        version: "string",
        chainId: "uint256",
        verifyingContract: "address",
        salt: "bytes32"
    },
    Br = ["name", "version", "chainId", "verifyingContract", "salt"];

function Or(t) {
    return function(r) {
        return "string" != typeof r && kr.throwArgumentError(`invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, r), r
    }
}
const Lr = {
    name: Or("name"),
    version: Or("version"),
    chainId: function(t) {
        try {
            return G.from(t).toString()
        } catch (r) {}
        return kr.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", t)
    },
    verifyingContract: function(t) {
        try {
            return Mt(t).toLowerCase()
        } catch (r) {}
        return kr.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", t)
    },
    salt: function(t) {
        try {
            const r = b(t);
            if (32 !== r.length) throw new Error("bad length");
            return N(r)
        } catch (r) {}
        return kr.throwArgumentError('invalid domain value "salt"', "domain.salt", t)
    }
};

function Fr(t) {
    {
        const r = t.match(/^(u?)int(\d*)$/);
        if (r) {
            const e = "" === r[1],
                i = parseInt(r[2] || "256");
            (i % 8 != 0 || i > 256 || r[2] && r[2] !== String(i)) && kr.throwArgumentError("invalid numeric width", "type", t);
            const n = Pr.mask(e ? i - 1 : i),
                o = e ? n.add(Sr).mul(Ir) : xr;
            return function(r) {
                const e = G.from(r);
                return (e.lt(o) || e.gt(n)) && kr.throwArgumentError(`value out-of-bounds for ${t}`, "value", r), T(e.toTwos(256).toHexString(), 32)
            }
        }
    } {
        const r = t.match(/^bytes(\d+)$/);
        if (r) {
            const e = parseInt(r[1]);
            return (0 === e || e > 32 || r[1] !== String(e)) && kr.throwArgumentError("invalid bytes width", "type", t),
                function(r) {
                    return b(r).length !== e && kr.throwArgumentError(`invalid length for ${t}`, "value", r),
                        function(t) {
                            const r = b(t),
                                e = r.length % 32;
                            return e ? S([r, Nr.slice(e)]) : N(r)
                        }(r)
                }
        }
    }
    switch (t) {
        case "address":
            return function(t) {
                return T(Mt(t), 32)
            };
        case "bool":
            return function(t) {
                return t ? Rr : Tr
            };
        case "bytes":
            return function(t) {
                return at(t)
            };
        case "string":
            return function(t) {
                return Xt(t)
            }
    }
    return null
}

function Ur(t, r) {
    return `${t}(${r.map((({name:t,type:r})=>r+" "+t)).join(",")})`
}
class Dr {
    constructor(t) {
        Y(this, "types", Object.freeze(et(t))), Y(this, "_encoderCache", {}), Y(this, "_types", {});
        const r = {},
            e = {},
            i = {};
        Object.keys(t).forEach((t => {
            r[t] = {}, e[t] = [], i[t] = {}
        }));
        for (const o in t) {
            const i = {};
            t[o].forEach((n => {
                i[n.name] && kr.throwArgumentError(`duplicate variable name ${JSON.stringify(n.name)} in ${JSON.stringify(o)}`, "types", t), i[n.name] = !0;
                const s = n.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
                s === o && kr.throwArgumentError(`circular type reference to ${JSON.stringify(s)}`, "types", t);
                Fr(s) || (e[s] || kr.throwArgumentError(`unknown type ${JSON.stringify(s)}`, "types", t), e[s].push(o), r[o][s] = !0)
            }))
        }
        const n = Object.keys(e).filter((t => 0 === e[t].length));
        0 === n.length ? kr.throwArgumentError("missing primary type", "types", t) : n.length > 1 && kr.throwArgumentError(`ambiguous primary types or unused types: ${n.map((t=>JSON.stringify(t))).join(", ")}`, "types", t), Y(this, "primaryType", n[0]),
            function n(o, s) {
                s[o] && kr.throwArgumentError(`circular type reference to ${JSON.stringify(o)}`, "types", t), s[o] = !0, Object.keys(r[o]).forEach((t => {
                    e[t] && (n(t, s), Object.keys(s).forEach((r => {
                        i[r][t] = !0
                    })))
                })), delete s[o]
            }(this.primaryType, {});
        for (const o in i) {
            const r = Object.keys(i[o]);
            r.sort(), this._types[o] = Ur(o, t[o]) + r.map((r => Ur(r, t[r]))).join("")
        }
    }
    getEncoder(t) {
        let r = this._encoderCache[t];
        return r || (r = this._encoderCache[t] = this._getEncoder(t)), r
    }
    _getEncoder(t) {
        {
            const r = Fr(t);
            if (r) return r
        }
        const r = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
        if (r) {
            const t = r[1],
                e = this.getEncoder(t),
                i = parseInt(r[3]);
            return r => {
                i >= 0 && r.length !== i && kr.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", r);
                let n = r.map(e);
                return this._types[t] && (n = n.map(at)), at(S(n))
            }
        }
        const e = this.types[t];
        if (e) {
            const r = Xt(this._types[t]);
            return t => {
                const i = e.map((({
                    name: r,
                    type: e
                }) => {
                    const i = this.getEncoder(e)(t[r]);
                    return this._types[e] ? at(i) : i
                }));
                return i.unshift(r), S(i)
            }
        }
        return kr.throwArgumentError(`unknown type: ${t}`, "type", t)
    }
    encodeType(t) {
        const r = this._types[t];
        return r || kr.throwArgumentError(`unknown type: ${JSON.stringify(t)}`, "name", t), r
    }
    encodeData(t, r) {
        return this.getEncoder(t)(r)
    }
    hashStruct(t, r) {
        return at(this.encodeData(t, r))
    }
    encode(t) {
        return this.encodeData(this.primaryType, t)
    }
    hash(t) {
        return this.hashStruct(this.primaryType, t)
    }
    _visit(t, r, e) {
        if (Fr(t)) return e(t, r);
        const i = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
        if (i) {
            const t = i[1],
                n = parseInt(i[3]);
            return n >= 0 && r.length !== n && kr.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", r), r.map((r => this._visit(t, r, e)))
        }
        const n = this.types[t];
        return n ? n.reduce(((t, {
            name: i,
            type: n
        }) => (t[i] = this._visit(n, r[i], e), t)), {}) : kr.throwArgumentError(`unknown type: ${t}`, "type", t)
    }
    visit(t, r) {
        return this._visit(this.primaryType, t, r)
    }
    static from(t) {
        return new Dr(t)
    }
    static getPrimaryType(t) {
        return Dr.from(t).primaryType
    }
    static hashStruct(t, r, e) {
        return Dr.from(r).hashStruct(t, e)
    }
    static hashDomain(t) {
        const r = [];
        for (const e in t) {
            const i = Cr[e];
            i || kr.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(e)}`, "domain", t), r.push({
                name: e,
                type: i
            })
        }
        return r.sort(((t, r) => Br.indexOf(t.name) - Br.indexOf(r.name))), Dr.hashStruct("EIP712Domain", {
            EIP712Domain: r
        }, t)
    }
    static encode(t, r, e) {
        return S(["0x1901", Dr.hashDomain(t), Dr.from(r).hash(e)])
    }
    static hash(t, r, e) {
        return at(Dr.encode(t, r, e))
    }
    static resolveNames(t, r, e, i) {
        return _r(this, void 0, void 0, (function*() {
            t = Z(t);
            const n = {};
            t.verifyingContract && !k(t.verifyingContract, 20) && (n[t.verifyingContract] = "0x");
            const o = Dr.from(r);
            o.visit(e, ((t, r) => ("address" !== t || k(r, 20) || (n[r] = "0x"), r)));
            for (const t in n) n[t] = yield i(t);
            return t.verifyingContract && n[t.verifyingContract] && (t.verifyingContract = n[t.verifyingContract]), e = o.visit(e, ((t, r) => "address" === t && n[r] ? n[r] : r)), {
                domain: t,
                value: e
            }
        }))
    }
    static getPayload(t, r, e) {
        Dr.hashDomain(t);
        const i = {},
            n = [];
        Br.forEach((r => {
            const e = t[r];
            null != e && (i[r] = Lr[r](e), n.push({
                name: r,
                type: Cr[r]
            }))
        }));
        const o = Dr.from(r),
            s = Z(r);
        return s.EIP712Domain ? kr.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", r) : s.EIP712Domain = n, o.encode(e), {
            types: s,
            domain: i,
            primaryType: o.primaryType,
            message: o.visit(e, ((t, r) => {
                if (t.match(/^bytes(\d*)/)) return N(b(r));
                if (t.match(/^u?int/)) return G.from(r).toString();
                switch (t) {
                    case "address":
                        return r.toLowerCase();
                    case "bool":
                        return !!r;
                    case "string":
                        return "string" != typeof r && kr.throwArgumentError("invalid string", "value", r), r
                }
                return kr.throwArgumentError("unsupported type", "type", t)
            }))
        }
    }
}
var qr = globalThis && globalThis.__awaiter || function(t, r, e, i) {
    return new(e || (e = Promise))((function(n, o) {
        function s(t) {
            try {
                h(i.next(t))
            } catch (r) {
                o(r)
            }
        }

        function a(t) {
            try {
                h(i.throw(t))
            } catch (r) {
                o(r)
            }
        }

        function h(t) {
            var r;
            t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e((function(t) {
                t(r)
            }))).then(s, a)
        }
        h((i = i.apply(t, r || [])).next())
    }))
};
const Gr = new m("abstract-provider/5.7.0");
class zr extends it {
    static isForkEvent(t) {
        return !(!t || !t._isForkEvent)
    }
}
class Hr {
    constructor() {
        Gr.checkAbstract(new.target, Hr), Y(this, "_isProvider", !0)
    }
    getFeeData() {
        return qr(this, void 0, void 0, (function*() {
            const {
                block: t,
                gasPrice: r
            } = yield V({
                block: this.getBlock("latest"),
                gasPrice: this.getGasPrice().catch((t => null))
            });
            let e = null,
                i = null,
                n = null;
            return t && t.baseFeePerGas && (e = t.baseFeePerGas, n = G.from("1500000000"), i = t.baseFeePerGas.mul(2).add(n)), {
                lastBaseFeePerGas: e,
                maxFeePerGas: i,
                maxPriorityFeePerGas: n,
                gasPrice: r
            }
        }))
    }
    addListener(t, r) {
        return this.on(t, r)
    }
    removeListener(t, r) {
        return this.off(t, r)
    }
    static isProvider(t) {
        return !(!t || !t._isProvider)
    }
}
var Qr = globalThis && globalThis.__awaiter || function(t, r, e, i) {
    return new(e || (e = Promise))((function(n, o) {
        function s(t) {
            try {
                h(i.next(t))
            } catch (r) {
                o(r)
            }
        }

        function a(t) {
            try {
                h(i.throw(t))
            } catch (r) {
                o(r)
            }
        }

        function h(t) {
            var r;
            t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e((function(t) {
                t(r)
            }))).then(s, a)
        }
        h((i = i.apply(t, r || [])).next())
    }))
};
const Kr = new m("abstract-signer/5.7.0"),
    Jr = ["accessList", "ccipReadEnabled", "chainId", "customData", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
    jr = [m.errors.INSUFFICIENT_FUNDS, m.errors.NONCE_EXPIRED, m.errors.REPLACEMENT_UNDERPRICED];
class Yr {
    constructor() {
        Kr.checkAbstract(new.target, Yr), Y(this, "_isSigner", !0)
    }
    getBalance(t) {
        return Qr(this, void 0, void 0, (function*() {
            return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), t)
        }))
    }
    getTransactionCount(t) {
        return Qr(this, void 0, void 0, (function*() {
            return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), t)
        }))
    }
    estimateGas(t) {
        return Qr(this, void 0, void 0, (function*() {
            this._checkProvider("estimateGas");
            const r = yield V(this.checkTransaction(t));
            return yield this.provider.estimateGas(r)
        }))
    }
    call(t, r) {
        return Qr(this, void 0, void 0, (function*() {
            this._checkProvider("call");
            const e = yield V(this.checkTransaction(t));
            return yield this.provider.call(e, r)
        }))
    }
    sendTransaction(t) {
        return Qr(this, void 0, void 0, (function*() {
            this._checkProvider("sendTransaction");
            const r = yield this.populateTransaction(t), e = yield this.signTransaction(r);
            return yield this.provider.sendTransaction(e)
        }))
    }
    getChainId() {
        return Qr(this, void 0, void 0, (function*() {
            this._checkProvider("getChainId");
            return (yield this.provider.getNetwork()).chainId
        }))
    }
    getGasPrice() {
        return Qr(this, void 0, void 0, (function*() {
            return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
        }))
    }
    getFeeData() {
        return Qr(this, void 0, void 0, (function*() {
            return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
        }))
    }
    resolveName(t) {
        return Qr(this, void 0, void 0, (function*() {
            return this._checkProvider("resolveName"), yield this.provider.resolveName(t)
        }))
    }
    checkTransaction(t) {
        for (const e in t) - 1 === Jr.indexOf(e) && Kr.throwArgumentError("invalid transaction key: " + e, "transaction", t);
        const r = Z(t);
        return null == r.from ? r.from = this.getAddress() : r.from = Promise.all([Promise.resolve(r.from), this.getAddress()]).then((r => (r[0].toLowerCase() !== r[1].toLowerCase() && Kr.throwArgumentError("from address mismatch", "transaction", t), r[0]))), r
    }
    populateTransaction(t) {
        return Qr(this, void 0, void 0, (function*() {
            const r = yield V(this.checkTransaction(t));
            null != r.to && (r.to = Promise.resolve(r.to).then((t => Qr(this, void 0, void 0, (function*() {
                if (null == t) return null;
                const r = yield this.resolveName(t);
                return null == r && Kr.throwArgumentError("provided ENS name resolves to null", "tx.to", t), r
            })))), r.to.catch((t => {})));
            const e = null != r.maxFeePerGas || null != r.maxPriorityFeePerGas;
            if (null == r.gasPrice || 2 !== r.type && !e ? 0 !== r.type && 1 !== r.type || !e || Kr.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", t) : Kr.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", t), 2 !== r.type && null != r.type || null == r.maxFeePerGas || null == r.maxPriorityFeePerGas)
                if (0 === r.type || 1 === r.type) null == r.gasPrice && (r.gasPrice = this.getGasPrice());
                else {
                    const t = yield this.getFeeData();
                    if (null == r.type)
                        if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                            if (r.type = 2, null != r.gasPrice) {
                                const t = r.gasPrice;
                                delete r.gasPrice, r.maxFeePerGas = t, r.maxPriorityFeePerGas = t
                            } else null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
                    else null != t.gasPrice ? (e && Kr.throwError("network does not support EIP-1559", m.errors.UNSUPPORTED_OPERATION, {
                        operation: "populateTransaction"
                    }), null == r.gasPrice && (r.gasPrice = t.gasPrice), r.type = 0) : Kr.throwError("failed to get consistent fee data", m.errors.UNSUPPORTED_OPERATION, {
                        operation: "signer.getFeeData"
                    });
                    else 2 === r.type && (null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas))
                }
            else r.type = 2;
            return null == r.nonce && (r.nonce = this.getTransactionCount("pending")), null == r.gasLimit && (r.gasLimit = this.estimateGas(r).catch((t => {
                if (jr.indexOf(t.code) >= 0) throw t;
                return Kr.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", m.errors.UNPREDICTABLE_GAS_LIMIT, {
                    error: t,
                    tx: r
                })
            }))), null == r.chainId ? r.chainId = this.getChainId() : r.chainId = Promise.all([Promise.resolve(r.chainId), this.getChainId()]).then((r => (0 !== r[1] && r[0] !== r[1] && Kr.throwArgumentError("chainId address mismatch", "transaction", t), r[0]))), yield V(r)
        }))
    }
    _checkProvider(t) {
        this.provider || Kr.throwError("missing provider", m.errors.UNSUPPORTED_OPERATION, {
            operation: t || "_checkProvider"
        })
    }
    static isSigner(t) {
        return !(!t || !t._isSigner)
    }
}
class Xr extends Yr {
    constructor(t, r) {
        super(), Y(this, "address", t), Y(this, "provider", r || null)
    }
    getAddress() {
        return Promise.resolve(this.address)
    }
    _fail(t, r) {
        return Promise.resolve().then((() => {
            Kr.throwError(t, m.errors.UNSUPPORTED_OPERATION, {
                operation: r
            })
        }))
    }
    signMessage(t) {
        return this._fail("VoidSigner cannot sign messages", "signMessage")
    }
    signTransaction(t) {
        return this._fail("VoidSigner cannot sign transactions", "signTransaction")
    }
    _signTypedData(t, r, e) {
        return this._fail("VoidSigner cannot sign typed data", "signTypedData")
    }
    connect(t) {
        return new Xr(this.address, t)
    }
}
var Vr = {
    exports: {}
};
! function(r, e) {
    function i(t, r) {
        if (!t) throw new Error(r || "Assertion failed")
    }

    function n(t, r) {
        t.super_ = r;
        var e = function() {};
        e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
    }

    function o(t, r, e) {
        if (o.isBN(t)) return t;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== r && "be" !== r || (e = r, r = 10), this._init(t || 0, r || 10, e || "be"))
    }
    var s;
    "object" == typeof r ? r.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
    try {
        s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : t.Buffer
    } catch (I) {}

    function a(t, r) {
        var e = t.charCodeAt(r);
        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : void i(!1, "Invalid character in " + t)
    }

    function h(t, r, e) {
        var i = a(t, e);
        return e - 1 >= r && (i |= a(t, e - 1) << 4), i
    }

    function u(t, r, e, n) {
        for (var o = 0, s = 0, a = Math.min(t.length, e), h = r; h < a; h++) {
            var u = t.charCodeAt(h) - 48;
            o *= n, s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u, i(u >= 0 && s < n, "Invalid character"), o += s
        }
        return o
    }

    function l(t, r) {
        t.words = r.words, t.length = r.length, t.negative = r.negative, t.red = r.red
    }
    if (o.isBN = function(t) {
            return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
        }, o.max = function(t, r) {
            return t.cmp(r) > 0 ? t : r
        }, o.min = function(t, r) {
            return t.cmp(r) < 0 ? t : r
        }, o.prototype._init = function(t, r, e) {
            if ("number" == typeof t) return this._initNumber(t, r, e);
            if ("object" == typeof t) return this._initArray(t, r, e);
            "hex" === r && (r = 16), i(r === (0 | r) && r >= 2 && r <= 36);
            var n = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === r ? this._parseHex(t, n, e) : (this._parseBase(t, r, n), "le" === e && this._initArray(this.toArray(), r, e)))
        }, o.prototype._initNumber = function(t, r, e) {
            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (i(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === e && this._initArray(this.toArray(), r, e)
        }, o.prototype._initArray = function(t, r, e) {
            if (i("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var o, s, a = 0;
            if ("be" === e)
                for (n = t.length - 1, o = 0; n >= 0; n -= 3) s = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
            else if ("le" === e)
                for (n = 0, o = 0; n < t.length; n += 3) s = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
            return this._strip()
        }, o.prototype._parseHex = function(t, r, e) {
            this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var n, o = 0,
                s = 0;
            if ("be" === e)
                for (i = t.length - 1; i >= r; i -= 2) n = h(t, r, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
            else
                for (i = (t.length - r) % 2 == 0 ? r + 1 : r; i < t.length; i += 2) n = h(t, r, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
            this._strip()
        }, o.prototype._parseBase = function(t, r, e) {
            this.words = [0], this.length = 1;
            for (var i = 0, n = 1; n <= 67108863; n *= r) i++;
            i--, n = n / r | 0;
            for (var o = t.length - e, s = o % i, a = Math.min(o, o - s) + e, h = 0, l = e; l < a; l += i) h = u(t, l, l + i, r), this.imuln(n), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
            if (0 !== s) {
                var f = 1;
                for (h = u(t, l, t.length, r), l = 0; l < s; l++) f *= r;
                this.imuln(f), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
            }
            this._strip()
        }, o.prototype.copy = function(t) {
            t.words = new Array(this.length);
            for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
            t.length = this.length, t.negative = this.negative, t.red = this.red
        }, o.prototype._move = function(t) {
            l(t, this)
        }, o.prototype.clone = function() {
            var t = new o(null);
            return this.copy(t), t
        }, o.prototype._expand = function(t) {
            for (; this.length < t;) this.words[this.length++] = 0;
            return this
        }, o.prototype._strip = function() {
            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
            return this._normSign()
        }, o.prototype._normSign = function() {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
        }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
        o.prototype[Symbol.for("nodejs.util.inspect.custom")] = f
    } catch (I) {
        o.prototype.inspect = f
    } else o.prototype.inspect = f;

    function f() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
    }
    var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
        d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        m = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

    function p(t, r, e) {
        e.negative = r.negative ^ t.negative;
        var i = t.length + r.length | 0;
        e.length = i, i = i - 1 | 0;
        var n = 0 | t.words[0],
            o = 0 | r.words[0],
            s = n * o,
            a = 67108863 & s,
            h = s / 67108864 | 0;
        e.words[0] = a;
        for (var u = 1; u < i; u++) {
            for (var l = h >>> 26, f = 67108863 & h, c = Math.min(u, r.length - 1), d = Math.max(0, u - t.length + 1); d <= c; d++) {
                var m = u - d | 0;
                l += (s = (n = 0 | t.words[m]) * (o = 0 | r.words[d]) + f) / 67108864 | 0, f = 67108863 & s
            }
            e.words[u] = 0 | f, h = 0 | l
        }
        return 0 !== h ? e.words[u] = 0 | h : e.length--, e._strip()
    }
    o.prototype.toString = function(t, r) {
        var e;
        if (r = 0 | r || 1, 16 === (t = t || 10) || "hex" === t) {
            e = "";
            for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                var a = this.words[s],
                    h = (16777215 & (a << n | o)).toString(16);
                o = a >>> 24 - n & 16777215, (n += 2) >= 26 && (n -= 26, s--), e = 0 !== o || s !== this.length - 1 ? c[6 - h.length] + h + e : h + e
            }
            for (0 !== o && (e = o.toString(16) + e); e.length % r != 0;) e = "0" + e;
            return 0 !== this.negative && (e = "-" + e), e
        }
        if (t === (0 | t) && t >= 2 && t <= 36) {
            var u = d[t],
                l = m[t];
            e = "";
            var f = this.clone();
            for (f.negative = 0; !f.isZero();) {
                var p = f.modrn(l).toString(t);
                e = (f = f.idivn(l)).isZero() ? p + e : c[u - p.length] + p + e
            }
            for (this.isZero() && (e = "0" + e); e.length % r != 0;) e = "0" + e;
            return 0 !== this.negative && (e = "-" + e), e
        }
        i(!1, "Base should be between 2 and 36")
    }, o.prototype.toNumber = function() {
        var t = this.words[0];
        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
    }, o.prototype.toJSON = function() {
        return this.toString(16, 2)
    }, s && (o.prototype.toBuffer = function(t, r) {
        return this.toArrayLike(s, t, r)
    }), o.prototype.toArray = function(t, r) {
        return this.toArrayLike(Array, t, r)
    }, o.prototype.toArrayLike = function(t, r, e) {
        this._strip();
        var n = this.byteLength(),
            o = e || Math.max(1, n);
        i(n <= o, "byte array longer than desired length"), i(o > 0, "Requested array length <= 0");
        var s = function(t, r) {
            return t.allocUnsafe ? t.allocUnsafe(r) : new t(r)
        }(t, o);
        return this["_toArrayLike" + ("le" === r ? "LE" : "BE")](s, n), s
    }, o.prototype._toArrayLikeLE = function(t, r) {
        for (var e = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
            var s = this.words[n] << o | i;
            t[e++] = 255 & s, e < t.length && (t[e++] = s >> 8 & 255), e < t.length && (t[e++] = s >> 16 & 255), 6 === o ? (e < t.length && (t[e++] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2)
        }
        if (e < t.length)
            for (t[e++] = i; e < t.length;) t[e++] = 0
    }, o.prototype._toArrayLikeBE = function(t, r) {
        for (var e = t.length - 1, i = 0, n = 0, o = 0; n < this.length; n++) {
            var s = this.words[n] << o | i;
            t[e--] = 255 & s, e >= 0 && (t[e--] = s >> 8 & 255), e >= 0 && (t[e--] = s >> 16 & 255), 6 === o ? (e >= 0 && (t[e--] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2)
        }
        if (e >= 0)
            for (t[e--] = i; e >= 0;) t[e--] = 0
    }, Math.clz32 ? o.prototype._countBits = function(t) {
        return 32 - Math.clz32(t)
    } : o.prototype._countBits = function(t) {
        var r = t,
            e = 0;
        return r >= 4096 && (e += 13, r >>>= 13), r >= 64 && (e += 7, r >>>= 7), r >= 8 && (e += 4, r >>>= 4), r >= 2 && (e += 2, r >>>= 2), e + r
    }, o.prototype._zeroBits = function(t) {
        if (0 === t) return 26;
        var r = t,
            e = 0;
        return 0 == (8191 & r) && (e += 13, r >>>= 13), 0 == (127 & r) && (e += 7, r >>>= 7), 0 == (15 & r) && (e += 4, r >>>= 4), 0 == (3 & r) && (e += 2, r >>>= 2), 0 == (1 & r) && e++, e
    }, o.prototype.bitLength = function() {
        var t = this.words[this.length - 1],
            r = this._countBits(t);
        return 26 * (this.length - 1) + r
    }, o.prototype.zeroBits = function() {
        if (this.isZero()) return 0;
        for (var t = 0, r = 0; r < this.length; r++) {
            var e = this._zeroBits(this.words[r]);
            if (t += e, 26 !== e) break
        }
        return t
    }, o.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8)
    }, o.prototype.toTwos = function(t) {
        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
    }, o.prototype.fromTwos = function(t) {
        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
    }, o.prototype.isNeg = function() {
        return 0 !== this.negative
    }, o.prototype.neg = function() {
        return this.clone().ineg()
    }, o.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this
    }, o.prototype.iuor = function(t) {
        for (; this.length < t.length;) this.words[this.length++] = 0;
        for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] | t.words[r];
        return this._strip()
    }, o.prototype.ior = function(t) {
        return i(0 == (this.negative | t.negative)), this.iuor(t)
    }, o.prototype.or = function(t) {
        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
    }, o.prototype.uor = function(t) {
        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
    }, o.prototype.iuand = function(t) {
        var r;
        r = this.length > t.length ? t : this;
        for (var e = 0; e < r.length; e++) this.words[e] = this.words[e] & t.words[e];
        return this.length = r.length, this._strip()
    }, o.prototype.iand = function(t) {
        return i(0 == (this.negative | t.negative)), this.iuand(t)
    }, o.prototype.and = function(t) {
        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
    }, o.prototype.uand = function(t) {
        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
    }, o.prototype.iuxor = function(t) {
        var r, e;
        this.length > t.length ? (r = this, e = t) : (r = t, e = this);
        for (var i = 0; i < e.length; i++) this.words[i] = r.words[i] ^ e.words[i];
        if (this !== r)
            for (; i < r.length; i++) this.words[i] = r.words[i];
        return this.length = r.length, this._strip()
    }, o.prototype.ixor = function(t) {
        return i(0 == (this.negative | t.negative)), this.iuxor(t)
    }, o.prototype.xor = function(t) {
        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
    }, o.prototype.uxor = function(t) {
        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
    }, o.prototype.inotn = function(t) {
        i("number" == typeof t && t >= 0);
        var r = 0 | Math.ceil(t / 26),
            e = t % 26;
        this._expand(r), e > 0 && r--;
        for (var n = 0; n < r; n++) this.words[n] = 67108863 & ~this.words[n];
        return e > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - e), this._strip()
    }, o.prototype.notn = function(t) {
        return this.clone().inotn(t)
    }, o.prototype.setn = function(t, r) {
        i("number" == typeof t && t >= 0);
        var e = t / 26 | 0,
            n = t % 26;
        return this._expand(e + 1), this.words[e] = r ? this.words[e] | 1 << n : this.words[e] & ~(1 << n), this._strip()
    }, o.prototype.iadd = function(t) {
        var r, e, i;
        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, r = this.isub(t), this.negative ^= 1, this._normSign();
        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, r = this.isub(t), t.negative = 1, r._normSign();
        this.length > t.length ? (e = this, i = t) : (e = t, i = this);
        for (var n = 0, o = 0; o < i.length; o++) r = (0 | e.words[o]) + (0 | i.words[o]) + n, this.words[o] = 67108863 & r, n = r >>> 26;
        for (; 0 !== n && o < e.length; o++) r = (0 | e.words[o]) + n, this.words[o] = 67108863 & r, n = r >>> 26;
        if (this.length = e.length, 0 !== n) this.words[this.length] = n, this.length++;
        else if (e !== this)
            for (; o < e.length; o++) this.words[o] = e.words[o];
        return this
    }, o.prototype.add = function(t) {
        var r;
        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, r = this.sub(t), t.negative ^= 1, r) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, r = t.sub(this), this.negative = 1, r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
    }, o.prototype.isub = function(t) {
        if (0 !== t.negative) {
            t.negative = 0;
            var r = this.iadd(t);
            return t.negative = 1, r._normSign()
        }
        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
        var e, i, n = this.cmp(t);
        if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        n > 0 ? (e = this, i = t) : (e = t, i = this);
        for (var o = 0, s = 0; s < i.length; s++) o = (r = (0 | e.words[s]) - (0 | i.words[s]) + o) >> 26, this.words[s] = 67108863 & r;
        for (; 0 !== o && s < e.length; s++) o = (r = (0 | e.words[s]) + o) >> 26, this.words[s] = 67108863 & r;
        if (0 === o && s < e.length && e !== this)
            for (; s < e.length; s++) this.words[s] = e.words[s];
        return this.length = Math.max(this.length, s), e !== this && (this.negative = 1), this._strip()
    }, o.prototype.sub = function(t) {
        return this.clone().isub(t)
    };
    var g = function(t, r, e) {
        var i, n, o, s = t.words,
            a = r.words,
            h = e.words,
            u = 0,
            l = 0 | s[0],
            f = 8191 & l,
            c = l >>> 13,
            d = 0 | s[1],
            m = 8191 & d,
            p = d >>> 13,
            g = 0 | s[2],
            v = 8191 & g,
            y = g >>> 13,
            w = 0 | s[3],
            A = 8191 & w,
            b = w >>> 13,
            M = 0 | s[4],
            E = 8191 & M,
            _ = M >>> 13,
            k = 0 | s[5],
            N = 8191 & k,
            I = k >>> 13,
            x = 0 | s[6],
            S = 8191 & x,
            P = x >>> 13,
            R = 0 | s[7],
            T = 8191 & R,
            C = R >>> 13,
            B = 0 | s[8],
            O = 8191 & B,
            L = B >>> 13,
            F = 0 | s[9],
            U = 8191 & F,
            D = F >>> 13,
            q = 0 | a[0],
            G = 8191 & q,
            z = q >>> 13,
            H = 0 | a[1],
            Q = 8191 & H,
            K = H >>> 13,
            J = 0 | a[2],
            j = 8191 & J,
            Y = J >>> 13,
            X = 0 | a[3],
            V = 8191 & X,
            W = X >>> 13,
            Z = 0 | a[4],
            $ = 8191 & Z,
            tt = Z >>> 13,
            rt = 0 | a[5],
            et = 8191 & rt,
            it = rt >>> 13,
            nt = 0 | a[6],
            ot = 8191 & nt,
            st = nt >>> 13,
            at = 0 | a[7],
            ht = 8191 & at,
            ut = at >>> 13,
            lt = 0 | a[8],
            ft = 8191 & lt,
            ct = lt >>> 13,
            dt = 0 | a[9],
            mt = 8191 & dt,
            pt = dt >>> 13;
        e.negative = t.negative ^ r.negative, e.length = 19;
        var gt = (u + (i = Math.imul(f, G)) | 0) + ((8191 & (n = (n = Math.imul(f, z)) + Math.imul(c, G) | 0)) << 13) | 0;
        u = ((o = Math.imul(c, z)) + (n >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, i = Math.imul(m, G), n = (n = Math.imul(m, z)) + Math.imul(p, G) | 0, o = Math.imul(p, z);
        var vt = (u + (i = i + Math.imul(f, Q) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, K) | 0) + Math.imul(c, Q) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, K) | 0) + (n >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, i = Math.imul(v, G), n = (n = Math.imul(v, z)) + Math.imul(y, G) | 0, o = Math.imul(y, z), i = i + Math.imul(m, Q) | 0, n = (n = n + Math.imul(m, K) | 0) + Math.imul(p, Q) | 0, o = o + Math.imul(p, K) | 0;
        var yt = (u + (i = i + Math.imul(f, j) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, Y) | 0) + Math.imul(c, j) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, Y) | 0) + (n >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, i = Math.imul(A, G), n = (n = Math.imul(A, z)) + Math.imul(b, G) | 0, o = Math.imul(b, z), i = i + Math.imul(v, Q) | 0, n = (n = n + Math.imul(v, K) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, K) | 0, i = i + Math.imul(m, j) | 0, n = (n = n + Math.imul(m, Y) | 0) + Math.imul(p, j) | 0, o = o + Math.imul(p, Y) | 0;
        var wt = (u + (i = i + Math.imul(f, V) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, W) | 0) + Math.imul(c, V) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, W) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, i = Math.imul(E, G), n = (n = Math.imul(E, z)) + Math.imul(_, G) | 0, o = Math.imul(_, z), i = i + Math.imul(A, Q) | 0, n = (n = n + Math.imul(A, K) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, K) | 0, i = i + Math.imul(v, j) | 0, n = (n = n + Math.imul(v, Y) | 0) + Math.imul(y, j) | 0, o = o + Math.imul(y, Y) | 0, i = i + Math.imul(m, V) | 0, n = (n = n + Math.imul(m, W) | 0) + Math.imul(p, V) | 0, o = o + Math.imul(p, W) | 0;
        var At = (u + (i = i + Math.imul(f, $) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, tt) | 0) + Math.imul(c, $) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, tt) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, i = Math.imul(N, G), n = (n = Math.imul(N, z)) + Math.imul(I, G) | 0, o = Math.imul(I, z), i = i + Math.imul(E, Q) | 0, n = (n = n + Math.imul(E, K) | 0) + Math.imul(_, Q) | 0, o = o + Math.imul(_, K) | 0, i = i + Math.imul(A, j) | 0, n = (n = n + Math.imul(A, Y) | 0) + Math.imul(b, j) | 0, o = o + Math.imul(b, Y) | 0, i = i + Math.imul(v, V) | 0, n = (n = n + Math.imul(v, W) | 0) + Math.imul(y, V) | 0, o = o + Math.imul(y, W) | 0, i = i + Math.imul(m, $) | 0, n = (n = n + Math.imul(m, tt) | 0) + Math.imul(p, $) | 0, o = o + Math.imul(p, tt) | 0;
        var bt = (u + (i = i + Math.imul(f, et) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, it) | 0) + Math.imul(c, et) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, it) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, i = Math.imul(S, G), n = (n = Math.imul(S, z)) + Math.imul(P, G) | 0, o = Math.imul(P, z), i = i + Math.imul(N, Q) | 0, n = (n = n + Math.imul(N, K) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, K) | 0, i = i + Math.imul(E, j) | 0, n = (n = n + Math.imul(E, Y) | 0) + Math.imul(_, j) | 0, o = o + Math.imul(_, Y) | 0, i = i + Math.imul(A, V) | 0, n = (n = n + Math.imul(A, W) | 0) + Math.imul(b, V) | 0, o = o + Math.imul(b, W) | 0, i = i + Math.imul(v, $) | 0, n = (n = n + Math.imul(v, tt) | 0) + Math.imul(y, $) | 0, o = o + Math.imul(y, tt) | 0, i = i + Math.imul(m, et) | 0, n = (n = n + Math.imul(m, it) | 0) + Math.imul(p, et) | 0, o = o + Math.imul(p, it) | 0;
        var Mt = (u + (i = i + Math.imul(f, ot) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, st) | 0) + Math.imul(c, ot) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, st) | 0) + (n >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, i = Math.imul(T, G), n = (n = Math.imul(T, z)) + Math.imul(C, G) | 0, o = Math.imul(C, z), i = i + Math.imul(S, Q) | 0, n = (n = n + Math.imul(S, K) | 0) + Math.imul(P, Q) | 0, o = o + Math.imul(P, K) | 0, i = i + Math.imul(N, j) | 0, n = (n = n + Math.imul(N, Y) | 0) + Math.imul(I, j) | 0, o = o + Math.imul(I, Y) | 0, i = i + Math.imul(E, V) | 0, n = (n = n + Math.imul(E, W) | 0) + Math.imul(_, V) | 0, o = o + Math.imul(_, W) | 0, i = i + Math.imul(A, $) | 0, n = (n = n + Math.imul(A, tt) | 0) + Math.imul(b, $) | 0, o = o + Math.imul(b, tt) | 0, i = i + Math.imul(v, et) | 0, n = (n = n + Math.imul(v, it) | 0) + Math.imul(y, et) | 0, o = o + Math.imul(y, it) | 0, i = i + Math.imul(m, ot) | 0, n = (n = n + Math.imul(m, st) | 0) + Math.imul(p, ot) | 0, o = o + Math.imul(p, st) | 0;
        var Et = (u + (i = i + Math.imul(f, ht) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, ut) | 0) + Math.imul(c, ht) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, ut) | 0) + (n >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, i = Math.imul(O, G), n = (n = Math.imul(O, z)) + Math.imul(L, G) | 0, o = Math.imul(L, z), i = i + Math.imul(T, Q) | 0, n = (n = n + Math.imul(T, K) | 0) + Math.imul(C, Q) | 0, o = o + Math.imul(C, K) | 0, i = i + Math.imul(S, j) | 0, n = (n = n + Math.imul(S, Y) | 0) + Math.imul(P, j) | 0, o = o + Math.imul(P, Y) | 0, i = i + Math.imul(N, V) | 0, n = (n = n + Math.imul(N, W) | 0) + Math.imul(I, V) | 0, o = o + Math.imul(I, W) | 0, i = i + Math.imul(E, $) | 0, n = (n = n + Math.imul(E, tt) | 0) + Math.imul(_, $) | 0, o = o + Math.imul(_, tt) | 0, i = i + Math.imul(A, et) | 0, n = (n = n + Math.imul(A, it) | 0) + Math.imul(b, et) | 0, o = o + Math.imul(b, it) | 0, i = i + Math.imul(v, ot) | 0, n = (n = n + Math.imul(v, st) | 0) + Math.imul(y, ot) | 0, o = o + Math.imul(y, st) | 0, i = i + Math.imul(m, ht) | 0, n = (n = n + Math.imul(m, ut) | 0) + Math.imul(p, ht) | 0, o = o + Math.imul(p, ut) | 0;
        var _t = (u + (i = i + Math.imul(f, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, ct) | 0) + Math.imul(c, ft) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, ct) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, i = Math.imul(U, G), n = (n = Math.imul(U, z)) + Math.imul(D, G) | 0, o = Math.imul(D, z), i = i + Math.imul(O, Q) | 0, n = (n = n + Math.imul(O, K) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, K) | 0, i = i + Math.imul(T, j) | 0, n = (n = n + Math.imul(T, Y) | 0) + Math.imul(C, j) | 0, o = o + Math.imul(C, Y) | 0, i = i + Math.imul(S, V) | 0, n = (n = n + Math.imul(S, W) | 0) + Math.imul(P, V) | 0, o = o + Math.imul(P, W) | 0, i = i + Math.imul(N, $) | 0, n = (n = n + Math.imul(N, tt) | 0) + Math.imul(I, $) | 0, o = o + Math.imul(I, tt) | 0, i = i + Math.imul(E, et) | 0, n = (n = n + Math.imul(E, it) | 0) + Math.imul(_, et) | 0, o = o + Math.imul(_, it) | 0, i = i + Math.imul(A, ot) | 0, n = (n = n + Math.imul(A, st) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, st) | 0, i = i + Math.imul(v, ht) | 0, n = (n = n + Math.imul(v, ut) | 0) + Math.imul(y, ht) | 0, o = o + Math.imul(y, ut) | 0, i = i + Math.imul(m, ft) | 0, n = (n = n + Math.imul(m, ct) | 0) + Math.imul(p, ft) | 0, o = o + Math.imul(p, ct) | 0;
        var kt = (u + (i = i + Math.imul(f, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, pt) | 0) + Math.imul(c, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(c, pt) | 0) + (n >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, i = Math.imul(U, Q), n = (n = Math.imul(U, K)) + Math.imul(D, Q) | 0, o = Math.imul(D, K), i = i + Math.imul(O, j) | 0, n = (n = n + Math.imul(O, Y) | 0) + Math.imul(L, j) | 0, o = o + Math.imul(L, Y) | 0, i = i + Math.imul(T, V) | 0, n = (n = n + Math.imul(T, W) | 0) + Math.imul(C, V) | 0, o = o + Math.imul(C, W) | 0, i = i + Math.imul(S, $) | 0, n = (n = n + Math.imul(S, tt) | 0) + Math.imul(P, $) | 0, o = o + Math.imul(P, tt) | 0, i = i + Math.imul(N, et) | 0, n = (n = n + Math.imul(N, it) | 0) + Math.imul(I, et) | 0, o = o + Math.imul(I, it) | 0, i = i + Math.imul(E, ot) | 0, n = (n = n + Math.imul(E, st) | 0) + Math.imul(_, ot) | 0, o = o + Math.imul(_, st) | 0, i = i + Math.imul(A, ht) | 0, n = (n = n + Math.imul(A, ut) | 0) + Math.imul(b, ht) | 0, o = o + Math.imul(b, ut) | 0, i = i + Math.imul(v, ft) | 0, n = (n = n + Math.imul(v, ct) | 0) + Math.imul(y, ft) | 0, o = o + Math.imul(y, ct) | 0;
        var Nt = (u + (i = i + Math.imul(m, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, pt) | 0) + Math.imul(p, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(p, pt) | 0) + (n >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, i = Math.imul(U, j), n = (n = Math.imul(U, Y)) + Math.imul(D, j) | 0, o = Math.imul(D, Y), i = i + Math.imul(O, V) | 0, n = (n = n + Math.imul(O, W) | 0) + Math.imul(L, V) | 0, o = o + Math.imul(L, W) | 0, i = i + Math.imul(T, $) | 0, n = (n = n + Math.imul(T, tt) | 0) + Math.imul(C, $) | 0, o = o + Math.imul(C, tt) | 0, i = i + Math.imul(S, et) | 0, n = (n = n + Math.imul(S, it) | 0) + Math.imul(P, et) | 0, o = o + Math.imul(P, it) | 0, i = i + Math.imul(N, ot) | 0, n = (n = n + Math.imul(N, st) | 0) + Math.imul(I, ot) | 0, o = o + Math.imul(I, st) | 0, i = i + Math.imul(E, ht) | 0, n = (n = n + Math.imul(E, ut) | 0) + Math.imul(_, ht) | 0, o = o + Math.imul(_, ut) | 0, i = i + Math.imul(A, ft) | 0, n = (n = n + Math.imul(A, ct) | 0) + Math.imul(b, ft) | 0, o = o + Math.imul(b, ct) | 0;
        var It = (u + (i = i + Math.imul(v, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(v, pt) | 0) + Math.imul(y, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(y, pt) | 0) + (n >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, i = Math.imul(U, V), n = (n = Math.imul(U, W)) + Math.imul(D, V) | 0, o = Math.imul(D, W), i = i + Math.imul(O, $) | 0, n = (n = n + Math.imul(O, tt) | 0) + Math.imul(L, $) | 0, o = o + Math.imul(L, tt) | 0, i = i + Math.imul(T, et) | 0, n = (n = n + Math.imul(T, it) | 0) + Math.imul(C, et) | 0, o = o + Math.imul(C, it) | 0, i = i + Math.imul(S, ot) | 0, n = (n = n + Math.imul(S, st) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, st) | 0, i = i + Math.imul(N, ht) | 0, n = (n = n + Math.imul(N, ut) | 0) + Math.imul(I, ht) | 0, o = o + Math.imul(I, ut) | 0, i = i + Math.imul(E, ft) | 0, n = (n = n + Math.imul(E, ct) | 0) + Math.imul(_, ft) | 0, o = o + Math.imul(_, ct) | 0;
        var xt = (u + (i = i + Math.imul(A, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(A, pt) | 0) + Math.imul(b, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(b, pt) | 0) + (n >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, i = Math.imul(U, $), n = (n = Math.imul(U, tt)) + Math.imul(D, $) | 0, o = Math.imul(D, tt), i = i + Math.imul(O, et) | 0, n = (n = n + Math.imul(O, it) | 0) + Math.imul(L, et) | 0, o = o + Math.imul(L, it) | 0, i = i + Math.imul(T, ot) | 0, n = (n = n + Math.imul(T, st) | 0) + Math.imul(C, ot) | 0, o = o + Math.imul(C, st) | 0, i = i + Math.imul(S, ht) | 0, n = (n = n + Math.imul(S, ut) | 0) + Math.imul(P, ht) | 0, o = o + Math.imul(P, ut) | 0, i = i + Math.imul(N, ft) | 0, n = (n = n + Math.imul(N, ct) | 0) + Math.imul(I, ft) | 0, o = o + Math.imul(I, ct) | 0;
        var St = (u + (i = i + Math.imul(E, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(E, pt) | 0) + Math.imul(_, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(_, pt) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, i = Math.imul(U, et), n = (n = Math.imul(U, it)) + Math.imul(D, et) | 0, o = Math.imul(D, it), i = i + Math.imul(O, ot) | 0, n = (n = n + Math.imul(O, st) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, st) | 0, i = i + Math.imul(T, ht) | 0, n = (n = n + Math.imul(T, ut) | 0) + Math.imul(C, ht) | 0, o = o + Math.imul(C, ut) | 0, i = i + Math.imul(S, ft) | 0, n = (n = n + Math.imul(S, ct) | 0) + Math.imul(P, ft) | 0, o = o + Math.imul(P, ct) | 0;
        var Pt = (u + (i = i + Math.imul(N, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(N, pt) | 0) + Math.imul(I, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(I, pt) | 0) + (n >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, i = Math.imul(U, ot), n = (n = Math.imul(U, st)) + Math.imul(D, ot) | 0, o = Math.imul(D, st), i = i + Math.imul(O, ht) | 0, n = (n = n + Math.imul(O, ut) | 0) + Math.imul(L, ht) | 0, o = o + Math.imul(L, ut) | 0, i = i + Math.imul(T, ft) | 0, n = (n = n + Math.imul(T, ct) | 0) + Math.imul(C, ft) | 0, o = o + Math.imul(C, ct) | 0;
        var Rt = (u + (i = i + Math.imul(S, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(S, pt) | 0) + Math.imul(P, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(P, pt) | 0) + (n >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, i = Math.imul(U, ht), n = (n = Math.imul(U, ut)) + Math.imul(D, ht) | 0, o = Math.imul(D, ut), i = i + Math.imul(O, ft) | 0, n = (n = n + Math.imul(O, ct) | 0) + Math.imul(L, ft) | 0, o = o + Math.imul(L, ct) | 0;
        var Tt = (u + (i = i + Math.imul(T, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(T, pt) | 0) + Math.imul(C, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(C, pt) | 0) + (n >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, i = Math.imul(U, ft), n = (n = Math.imul(U, ct)) + Math.imul(D, ft) | 0, o = Math.imul(D, ct);
        var Ct = (u + (i = i + Math.imul(O, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(O, pt) | 0) + Math.imul(L, mt) | 0)) << 13) | 0;
        u = ((o = o + Math.imul(L, pt) | 0) + (n >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863;
        var Bt = (u + (i = Math.imul(U, mt)) | 0) + ((8191 & (n = (n = Math.imul(U, pt)) + Math.imul(D, mt) | 0)) << 13) | 0;
        return u = ((o = Math.imul(D, pt)) + (n >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, h[0] = gt, h[1] = vt, h[2] = yt, h[3] = wt, h[4] = At, h[5] = bt, h[6] = Mt, h[7] = Et, h[8] = _t, h[9] = kt, h[10] = Nt, h[11] = It, h[12] = xt, h[13] = St, h[14] = Pt, h[15] = Rt, h[16] = Tt, h[17] = Ct, h[18] = Bt, 0 !== u && (h[19] = u, e.length++), e
    };

    function v(t, r, e) {
        e.negative = r.negative ^ t.negative, e.length = t.length + r.length;
        for (var i = 0, n = 0, o = 0; o < e.length - 1; o++) {
            var s = n;
            n = 0;
            for (var a = 67108863 & i, h = Math.min(o, r.length - 1), u = Math.max(0, o - t.length + 1); u <= h; u++) {
                var l = o - u,
                    f = (0 | t.words[l]) * (0 | r.words[u]),
                    c = 67108863 & f;
                a = 67108863 & (c = c + a | 0), n += (s = (s = s + (f / 67108864 | 0) | 0) + (c >>> 26) | 0) >>> 26, s &= 67108863
            }
            e.words[o] = a, i = s, s = n
        }
        return 0 !== i ? e.words[o] = i : e.length--, e._strip()
    }

    function y(t, r, e) {
        return v(t, r, e)
    }
    Math.imul || (g = p), o.prototype.mulTo = function(t, r) {
        var e = this.length + t.length;
        return 10 === this.length && 10 === t.length ? g(this, t, r) : e < 63 ? p(this, t, r) : e < 1024 ? v(this, t, r) : y(this, t, r)
    }, o.prototype.mul = function(t) {
        var r = new o(null);
        return r.words = new Array(this.length + t.length), this.mulTo(t, r)
    }, o.prototype.mulf = function(t) {
        var r = new o(null);
        return r.words = new Array(this.length + t.length), y(this, t, r)
    }, o.prototype.imul = function(t) {
        return this.clone().mulTo(t, this)
    }, o.prototype.imuln = function(t) {
        var r = t < 0;
        r && (t = -t), i("number" == typeof t), i(t < 67108864);
        for (var e = 0, n = 0; n < this.length; n++) {
            var o = (0 | this.words[n]) * t,
                s = (67108863 & o) + (67108863 & e);
            e >>= 26, e += o / 67108864 | 0, e += s >>> 26, this.words[n] = 67108863 & s
        }
        return 0 !== e && (this.words[n] = e, this.length++), r ? this.ineg() : this
    }, o.prototype.muln = function(t) {
        return this.clone().imuln(t)
    }, o.prototype.sqr = function() {
        return this.mul(this)
    }, o.prototype.isqr = function() {
        return this.imul(this.clone())
    }, o.prototype.pow = function(t) {
        var r = function(t) {
            for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
                var i = e / 26 | 0,
                    n = e % 26;
                r[e] = t.words[i] >>> n & 1
            }
            return r
        }(t);
        if (0 === r.length) return new o(1);
        for (var e = this, i = 0; i < r.length && 0 === r[i]; i++, e = e.sqr());
        if (++i < r.length)
            for (var n = e.sqr(); i < r.length; i++, n = n.sqr()) 0 !== r[i] && (e = e.mul(n));
        return e
    }, o.prototype.iushln = function(t) {
        i("number" == typeof t && t >= 0);
        var r, e = t % 26,
            n = (t - e) / 26,
            o = 67108863 >>> 26 - e << 26 - e;
        if (0 !== e) {
            var s = 0;
            for (r = 0; r < this.length; r++) {
                var a = this.words[r] & o,
                    h = (0 | this.words[r]) - a << e;
                this.words[r] = h | s, s = a >>> 26 - e
            }
            s && (this.words[r] = s, this.length++)
        }
        if (0 !== n) {
            for (r = this.length - 1; r >= 0; r--) this.words[r + n] = this.words[r];
            for (r = 0; r < n; r++) this.words[r] = 0;
            this.length += n
        }
        return this._strip()
    }, o.prototype.ishln = function(t) {
        return i(0 === this.negative), this.iushln(t)
    }, o.prototype.iushrn = function(t, r, e) {
        var n;
        i("number" == typeof t && t >= 0), n = r ? (r - r % 26) / 26 : 0;
        var o = t % 26,
            s = Math.min((t - o) / 26, this.length),
            a = 67108863 ^ 67108863 >>> o << o,
            h = e;
        if (n -= s, n = Math.max(0, n), h) {
            for (var u = 0; u < s; u++) h.words[u] = this.words[u];
            h.length = s
        }
        if (0 === s);
        else if (this.length > s)
            for (this.length -= s, u = 0; u < this.length; u++) this.words[u] = this.words[u + s];
        else this.words[0] = 0, this.length = 1;
        var l = 0;
        for (u = this.length - 1; u >= 0 && (0 !== l || u >= n); u--) {
            var f = 0 | this.words[u];
            this.words[u] = l << 26 - o | f >>> o, l = f & a
        }
        return h && 0 !== l && (h.words[h.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
    }, o.prototype.ishrn = function(t, r, e) {
        return i(0 === this.negative), this.iushrn(t, r, e)
    }, o.prototype.shln = function(t) {
        return this.clone().ishln(t)
    }, o.prototype.ushln = function(t) {
        return this.clone().iushln(t)
    }, o.prototype.shrn = function(t) {
        return this.clone().ishrn(t)
    }, o.prototype.ushrn = function(t) {
        return this.clone().iushrn(t)
    }, o.prototype.testn = function(t) {
        i("number" == typeof t && t >= 0);
        var r = t % 26,
            e = (t - r) / 26,
            n = 1 << r;
        return !(this.length <= e || !(this.words[e] & n))
    }, o.prototype.imaskn = function(t) {
        i("number" == typeof t && t >= 0);
        var r = t % 26,
            e = (t - r) / 26;
        if (i(0 === this.negative, "imaskn works only with positive numbers"), this.length <= e) return this;
        if (0 !== r && e++, this.length = Math.min(e, this.length), 0 !== r) {
            var n = 67108863 ^ 67108863 >>> r << r;
            this.words[this.length - 1] &= n
        }
        return this._strip()
    }, o.prototype.maskn = function(t) {
        return this.clone().imaskn(t)
    }, o.prototype.iaddn = function(t) {
        return i("number" == typeof t), i(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
    }, o.prototype._iaddn = function(t) {
        this.words[0] += t;
        for (var r = 0; r < this.length && this.words[r] >= 67108864; r++) this.words[r] -= 67108864, r === this.length - 1 ? this.words[r + 1] = 1 : this.words[r + 1]++;
        return this.length = Math.max(this.length, r + 1), this
    }, o.prototype.isubn = function(t) {
        if (i("number" == typeof t), i(t < 67108864), t < 0) return this.iaddn(-t);
        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
        else
            for (var r = 0; r < this.length && this.words[r] < 0; r++) this.words[r] += 67108864, this.words[r + 1] -= 1;
        return this._strip()
    }, o.prototype.addn = function(t) {
        return this.clone().iaddn(t)
    }, o.prototype.subn = function(t) {
        return this.clone().isubn(t)
    }, o.prototype.iabs = function() {
        return this.negative = 0, this
    }, o.prototype.abs = function() {
        return this.clone().iabs()
    }, o.prototype._ishlnsubmul = function(t, r, e) {
        var n, o, s = t.length + e;
        this._expand(s);
        var a = 0;
        for (n = 0; n < t.length; n++) {
            o = (0 | this.words[n + e]) + a;
            var h = (0 | t.words[n]) * r;
            a = ((o -= 67108863 & h) >> 26) - (h / 67108864 | 0), this.words[n + e] = 67108863 & o
        }
        for (; n < this.length - e; n++) a = (o = (0 | this.words[n + e]) + a) >> 26, this.words[n + e] = 67108863 & o;
        if (0 === a) return this._strip();
        for (i(-1 === a), a = 0, n = 0; n < this.length; n++) a = (o = -(0 | this.words[n]) + a) >> 26, this.words[n] = 67108863 & o;
        return this.negative = 1, this._strip()
    }, o.prototype._wordDiv = function(t, r) {
        var e = (this.length, t.length),
            i = this.clone(),
            n = t,
            s = 0 | n.words[n.length - 1];
        0 != (e = 26 - this._countBits(s)) && (n = n.ushln(e), i.iushln(e), s = 0 | n.words[n.length - 1]);
        var a, h = i.length - n.length;
        if ("mod" !== r) {
            (a = new o(null)).length = h + 1, a.words = new Array(a.length);
            for (var u = 0; u < a.length; u++) a.words[u] = 0
        }
        var l = i.clone()._ishlnsubmul(n, 1, h);
        0 === l.negative && (i = l, a && (a.words[h] = 1));
        for (var f = h - 1; f >= 0; f--) {
            var c = 67108864 * (0 | i.words[n.length + f]) + (0 | i.words[n.length + f - 1]);
            for (c = Math.min(c / s | 0, 67108863), i._ishlnsubmul(n, c, f); 0 !== i.negative;) c--, i.negative = 0, i._ishlnsubmul(n, 1, f), i.isZero() || (i.negative ^= 1);
            a && (a.words[f] = c)
        }
        return a && a._strip(), i._strip(), "div" !== r && 0 !== e && i.iushrn(e), {
            div: a || null,
            mod: i
        }
    }, o.prototype.divmod = function(t, r, e) {
        return i(!t.isZero()), this.isZero() ? {
            div: new o(0),
            mod: new o(0)
        } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, r), "mod" !== r && (n = a.div.neg()), "div" !== r && (s = a.mod.neg(), e && 0 !== s.negative && s.iadd(t)), {
            div: n,
            mod: s
        }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), r), "mod" !== r && (n = a.div.neg()), {
            div: n,
            mod: a.mod
        }) : 0 != (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), r), "div" !== r && (s = a.mod.neg(), e && 0 !== s.negative && s.isub(t)), {
            div: a.div,
            mod: s
        }) : t.length > this.length || this.cmp(t) < 0 ? {
            div: new o(0),
            mod: this
        } : 1 === t.length ? "div" === r ? {
            div: this.divn(t.words[0]),
            mod: null
        } : "mod" === r ? {
            div: null,
            mod: new o(this.modrn(t.words[0]))
        } : {
            div: this.divn(t.words[0]),
            mod: new o(this.modrn(t.words[0]))
        } : this._wordDiv(t, r);
        var n, s, a
    }, o.prototype.div = function(t) {
        return this.divmod(t, "div", !1).div
    }, o.prototype.mod = function(t) {
        return this.divmod(t, "mod", !1).mod
    }, o.prototype.umod = function(t) {
        return this.divmod(t, "mod", !0).mod
    }, o.prototype.divRound = function(t) {
        var r = this.divmod(t);
        if (r.mod.isZero()) return r.div;
        var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
            i = t.ushrn(1),
            n = t.andln(1),
            o = e.cmp(i);
        return o < 0 || 1 === n && 0 === o ? r.div : 0 !== r.div.negative ? r.div.isubn(1) : r.div.iaddn(1)
    }, o.prototype.modrn = function(t) {
        var r = t < 0;
        r && (t = -t), i(t <= 67108863);
        for (var e = (1 << 26) % t, n = 0, o = this.length - 1; o >= 0; o--) n = (e * n + (0 | this.words[o])) % t;
        return r ? -n : n
    }, o.prototype.modn = function(t) {
        return this.modrn(t)
    }, o.prototype.idivn = function(t) {
        var r = t < 0;
        r && (t = -t), i(t <= 67108863);
        for (var e = 0, n = this.length - 1; n >= 0; n--) {
            var o = (0 | this.words[n]) + 67108864 * e;
            this.words[n] = o / t | 0, e = o % t
        }
        return this._strip(), r ? this.ineg() : this
    }, o.prototype.divn = function(t) {
        return this.clone().idivn(t)
    }, o.prototype.egcd = function(t) {
        i(0 === t.negative), i(!t.isZero());
        var r = this,
            e = t.clone();
        r = 0 !== r.negative ? r.umod(t) : r.clone();
        for (var n = new o(1), s = new o(0), a = new o(0), h = new o(1), u = 0; r.isEven() && e.isEven();) r.iushrn(1), e.iushrn(1), ++u;
        for (var l = e.clone(), f = r.clone(); !r.isZero();) {
            for (var c = 0, d = 1; 0 == (r.words[0] & d) && c < 26; ++c, d <<= 1);
            if (c > 0)
                for (r.iushrn(c); c-- > 0;)(n.isOdd() || s.isOdd()) && (n.iadd(l), s.isub(f)), n.iushrn(1), s.iushrn(1);
            for (var m = 0, p = 1; 0 == (e.words[0] & p) && m < 26; ++m, p <<= 1);
            if (m > 0)
                for (e.iushrn(m); m-- > 0;)(a.isOdd() || h.isOdd()) && (a.iadd(l), h.isub(f)), a.iushrn(1), h.iushrn(1);
            r.cmp(e) >= 0 ? (r.isub(e), n.isub(a), s.isub(h)) : (e.isub(r), a.isub(n), h.isub(s))
        }
        return {
            a: a,
            b: h,
            gcd: e.iushln(u)
        }
    }, o.prototype._invmp = function(t) {
        i(0 === t.negative), i(!t.isZero());
        var r = this,
            e = t.clone();
        r = 0 !== r.negative ? r.umod(t) : r.clone();
        for (var n, s = new o(1), a = new o(0), h = e.clone(); r.cmpn(1) > 0 && e.cmpn(1) > 0;) {
            for (var u = 0, l = 1; 0 == (r.words[0] & l) && u < 26; ++u, l <<= 1);
            if (u > 0)
                for (r.iushrn(u); u-- > 0;) s.isOdd() && s.iadd(h), s.iushrn(1);
            for (var f = 0, c = 1; 0 == (e.words[0] & c) && f < 26; ++f, c <<= 1);
            if (f > 0)
                for (e.iushrn(f); f-- > 0;) a.isOdd() && a.iadd(h), a.iushrn(1);
            r.cmp(e) >= 0 ? (r.isub(e), s.isub(a)) : (e.isub(r), a.isub(s))
        }
        return (n = 0 === r.cmpn(1) ? s : a).cmpn(0) < 0 && n.iadd(t), n
    }, o.prototype.gcd = function(t) {
        if (this.isZero()) return t.abs();
        if (t.isZero()) return this.abs();
        var r = this.clone(),
            e = t.clone();
        r.negative = 0, e.negative = 0;
        for (var i = 0; r.isEven() && e.isEven(); i++) r.iushrn(1), e.iushrn(1);
        for (;;) {
            for (; r.isEven();) r.iushrn(1);
            for (; e.isEven();) e.iushrn(1);
            var n = r.cmp(e);
            if (n < 0) {
                var o = r;
                r = e, e = o
            } else if (0 === n || 0 === e.cmpn(1)) break;
            r.isub(e)
        }
        return e.iushln(i)
    }, o.prototype.invm = function(t) {
        return this.egcd(t).a.umod(t)
    }, o.prototype.isEven = function() {
        return 0 == (1 & this.words[0])
    }, o.prototype.isOdd = function() {
        return 1 == (1 & this.words[0])
    }, o.prototype.andln = function(t) {
        return this.words[0] & t
    }, o.prototype.bincn = function(t) {
        i("number" == typeof t);
        var r = t % 26,
            e = (t - r) / 26,
            n = 1 << r;
        if (this.length <= e) return this._expand(e + 1), this.words[e] |= n, this;
        for (var o = n, s = e; 0 !== o && s < this.length; s++) {
            var a = 0 | this.words[s];
            o = (a += o) >>> 26, a &= 67108863, this.words[s] = a
        }
        return 0 !== o && (this.words[s] = o, this.length++), this
    }, o.prototype.isZero = function() {
        return 1 === this.length && 0 === this.words[0]
    }, o.prototype.cmpn = function(t) {
        var r, e = t < 0;
        if (0 !== this.negative && !e) return -1;
        if (0 === this.negative && e) return 1;
        if (this._strip(), this.length > 1) r = 1;
        else {
            e && (t = -t), i(t <= 67108863, "Number is too big");
            var n = 0 | this.words[0];
            r = n === t ? 0 : n < t ? -1 : 1
        }
        return 0 !== this.negative ? 0 | -r : r
    }, o.prototype.cmp = function(t) {
        if (0 !== this.negative && 0 === t.negative) return -1;
        if (0 === this.negative && 0 !== t.negative) return 1;
        var r = this.ucmp(t);
        return 0 !== this.negative ? 0 | -r : r
    }, o.prototype.ucmp = function(t) {
        if (this.length > t.length) return 1;
        if (this.length < t.length) return -1;
        for (var r = 0, e = this.length - 1; e >= 0; e--) {
            var i = 0 | this.words[e],
                n = 0 | t.words[e];
            if (i !== n) {
                i < n ? r = -1 : i > n && (r = 1);
                break
            }
        }
        return r
    }, o.prototype.gtn = function(t) {
        return 1 === this.cmpn(t)
    }, o.prototype.gt = function(t) {
        return 1 === this.cmp(t)
    }, o.prototype.gten = function(t) {
        return this.cmpn(t) >= 0
    }, o.prototype.gte = function(t) {
        return this.cmp(t) >= 0
    }, o.prototype.ltn = function(t) {
        return -1 === this.cmpn(t)
    }, o.prototype.lt = function(t) {
        return -1 === this.cmp(t)
    }, o.prototype.lten = function(t) {
        return this.cmpn(t) <= 0
    }, o.prototype.lte = function(t) {
        return this.cmp(t) <= 0
    }, o.prototype.eqn = function(t) {
        return 0 === this.cmpn(t)
    }, o.prototype.eq = function(t) {
        return 0 === this.cmp(t)
    }, o.red = function(t) {
        return new k(t)
    }, o.prototype.toRed = function(t) {
        return i(!this.red, "Already a number in reduction context"), i(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
    }, o.prototype.fromRed = function() {
        return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
    }, o.prototype._forceRed = function(t) {
        return this.red = t, this
    }, o.prototype.forceRed = function(t) {
        return i(!this.red, "Already a number in reduction context"), this._forceRed(t)
    }, o.prototype.redAdd = function(t) {
        return i(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
    }, o.prototype.redIAdd = function(t) {
        return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
    }, o.prototype.redSub = function(t) {
        return i(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
    }, o.prototype.redISub = function(t) {
        return i(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
    }, o.prototype.redShl = function(t) {
        return i(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
    }, o.prototype.redMul = function(t) {
        return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
    }, o.prototype.redIMul = function(t) {
        return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
    }, o.prototype.redSqr = function() {
        return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
    }, o.prototype.redISqr = function() {
        return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
    }, o.prototype.redSqrt = function() {
        return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
    }, o.prototype.redInvm = function() {
        return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
    }, o.prototype.redNeg = function() {
        return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
    }, o.prototype.redPow = function(t) {
        return i(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
    };
    var w = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
    };

    function A(t, r) {
        this.name = t, this.p = new o(r, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
    }

    function b() {
        A.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
    }

    function M() {
        A.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
    }

    function E() {
        A.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
    }

    function _() {
        A.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
    }

    function k(t) {
        if ("string" == typeof t) {
            var r = o._prime(t);
            this.m = r.p, this.prime = r
        } else i(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
    }

    function N(t) {
        k.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
    }
    A.prototype._tmp = function() {
        var t = new o(null);
        return t.words = new Array(Math.ceil(this.n / 13)), t
    }, A.prototype.ireduce = function(t) {
        var r, e = t;
        do {
            this.split(e, this.tmp), r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength()
        } while (r > this.n);
        var i = r < this.n ? -1 : e.ucmp(this.p);
        return 0 === i ? (e.words[0] = 0, e.length = 1) : i > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), e
    }, A.prototype.split = function(t, r) {
        t.iushrn(this.n, 0, r)
    }, A.prototype.imulK = function(t) {
        return t.imul(this.k)
    }, n(b, A), b.prototype.split = function(t, r) {
        for (var e = 4194303, i = Math.min(t.length, 9), n = 0; n < i; n++) r.words[n] = t.words[n];
        if (r.length = i, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
        var o = t.words[9];
        for (r.words[r.length++] = o & e, n = 10; n < t.length; n++) {
            var s = 0 | t.words[n];
            t.words[n - 10] = (s & e) << 4 | o >>> 22, o = s
        }
        o >>>= 22, t.words[n - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9
    }, b.prototype.imulK = function(t) {
        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
        for (var r = 0, e = 0; e < t.length; e++) {
            var i = 0 | t.words[e];
            r += 977 * i, t.words[e] = 67108863 & r, r = 64 * i + (r / 67108864 | 0)
        }
        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
    }, n(M, A), n(E, A), n(_, A), _.prototype.imulK = function(t) {
        for (var r = 0, e = 0; e < t.length; e++) {
            var i = 19 * (0 | t.words[e]) + r,
                n = 67108863 & i;
            i >>>= 26, t.words[e] = n, r = i
        }
        return 0 !== r && (t.words[t.length++] = r), t
    }, o._prime = function(t) {
        if (w[t]) return w[t];
        var r;
        if ("k256" === t) r = new b;
        else if ("p224" === t) r = new M;
        else if ("p192" === t) r = new E;
        else {
            if ("p25519" !== t) throw new Error("Unknown prime " + t);
            r = new _
        }
        return w[t] = r, r
    }, k.prototype._verify1 = function(t) {
        i(0 === t.negative, "red works only with positives"), i(t.red, "red works only with red numbers")
    }, k.prototype._verify2 = function(t, r) {
        i(0 == (t.negative | r.negative), "red works only with positives"), i(t.red && t.red === r.red, "red works only with red numbers")
    }, k.prototype.imod = function(t) {
        return this.prime ? this.prime.ireduce(t)._forceRed(this) : (l(t, t.umod(this.m)._forceRed(this)), t)
    }, k.prototype.neg = function(t) {
        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
    }, k.prototype.add = function(t, r) {
        this._verify2(t, r);
        var e = t.add(r);
        return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this)
    }, k.prototype.iadd = function(t, r) {
        this._verify2(t, r);
        var e = t.iadd(r);
        return e.cmp(this.m) >= 0 && e.isub(this.m), e
    }, k.prototype.sub = function(t, r) {
        this._verify2(t, r);
        var e = t.sub(r);
        return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this)
    }, k.prototype.isub = function(t, r) {
        this._verify2(t, r);
        var e = t.isub(r);
        return e.cmpn(0) < 0 && e.iadd(this.m), e
    }, k.prototype.shl = function(t, r) {
        return this._verify1(t), this.imod(t.ushln(r))
    }, k.prototype.imul = function(t, r) {
        return this._verify2(t, r), this.imod(t.imul(r))
    }, k.prototype.mul = function(t, r) {
        return this._verify2(t, r), this.imod(t.mul(r))
    }, k.prototype.isqr = function(t) {
        return this.imul(t, t.clone())
    }, k.prototype.sqr = function(t) {
        return this.mul(t, t)
    }, k.prototype.sqrt = function(t) {
        if (t.isZero()) return t.clone();
        var r = this.m.andln(3);
        if (i(r % 2 == 1), 3 === r) {
            var e = this.m.add(new o(1)).iushrn(2);
            return this.pow(t, e)
        }
        for (var n = this.m.subn(1), s = 0; !n.isZero() && 0 === n.andln(1);) s++, n.iushrn(1);
        i(!n.isZero());
        var a = new o(1).toRed(this),
            h = a.redNeg(),
            u = this.m.subn(1).iushrn(1),
            l = this.m.bitLength();
        for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, u).cmp(h);) l.redIAdd(h);
        for (var f = this.pow(l, n), c = this.pow(t, n.addn(1).iushrn(1)), d = this.pow(t, n), m = s; 0 !== d.cmp(a);) {
            for (var p = d, g = 0; 0 !== p.cmp(a); g++) p = p.redSqr();
            i(g < m);
            var v = this.pow(f, new o(1).iushln(m - g - 1));
            c = c.redMul(v), f = v.redSqr(), d = d.redMul(f), m = g
        }
        return c
    }, k.prototype.invm = function(t) {
        var r = t._invmp(this.m);
        return 0 !== r.negative ? (r.negative = 0, this.imod(r).redNeg()) : this.imod(r)
    }, k.prototype.pow = function(t, r) {
        if (r.isZero()) return new o(1).toRed(this);
        if (0 === r.cmpn(1)) return t.clone();
        var e = new Array(16);
        e[0] = new o(1).toRed(this), e[1] = t;
        for (var i = 2; i < e.length; i++) e[i] = this.mul(e[i - 1], t);
        var n = e[0],
            s = 0,
            a = 0,
            h = r.bitLength() % 26;
        for (0 === h && (h = 26), i = r.length - 1; i >= 0; i--) {
            for (var u = r.words[i], l = h - 1; l >= 0; l--) {
                var f = u >> l & 1;
                n !== e[0] && (n = this.sqr(n)), 0 !== f || 0 !== s ? (s <<= 1, s |= f, (4 == ++a || 0 === i && 0 === l) && (n = this.mul(n, e[s]), a = 0, s = 0)) : a = 0
            }
            h = 26
        }
        return n
    }, k.prototype.convertTo = function(t) {
        var r = t.umod(this.m);
        return r === t ? r.clone() : r
    }, k.prototype.convertFrom = function(t) {
        var r = t.clone();
        return r.red = null, r
    }, o.mont = function(t) {
        return new N(t)
    }, n(N, k), N.prototype.convertTo = function(t) {
        return this.imod(t.ushln(this.shift))
    }, N.prototype.convertFrom = function(t) {
        var r = this.imod(t.mul(this.rinv));
        return r.red = null, r
    }, N.prototype.imul = function(t, r) {
        if (t.isZero() || r.isZero()) return t.words[0] = 0, t.length = 1, t;
        var e = t.imul(r),
            i = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
            n = e.isub(i).iushrn(this.shift),
            o = n;
        return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : n.cmpn(0) < 0 && (o = n.iadd(this.m)), o._forceRed(this)
    }, N.prototype.mul = function(t, r) {
        if (t.isZero() || r.isZero()) return new o(0)._forceRed(this);
        var e = t.mul(r),
            i = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
            n = e.isub(i).iushrn(this.shift),
            s = n;
        return n.cmp(this.m) >= 0 ? s = n.isub(this.m) : n.cmpn(0) < 0 && (s = n.iadd(this.m)), s._forceRed(this)
    }, N.prototype.invm = function(t) {
        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
    }
}(Vr, r);
const Wr = e(Vr.exports);
var Zr = {},
    $r = {},
    te = re;

function re(t, r) {
    if (!t) throw new Error(r || "Assertion failed")
}
re.equal = function(t, r, e) {
    if (t != r) throw new Error(e || "Assertion failed: " + t + " != " + r)
};
var ee = {
    exports: {}
};
"function" == typeof Object.create ? ee.exports = function(t, r) {
    r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }))
} : ee.exports = function(t, r) {
    if (r) {
        t.super_ = r;
        var e = function() {};
        e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
    }
};
var ie = ee.exports,
    ne = te,
    oe = ie;

function se(t, r) {
    return 55296 == (64512 & t.charCodeAt(r)) && (!(r < 0 || r + 1 >= t.length) && 56320 == (64512 & t.charCodeAt(r + 1)))
}

function ae(t) {
    return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
}

function he(t) {
    return 1 === t.length ? "0" + t : t
}

function ue(t) {
    return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
}
$r.inherits = oe, $r.toArray = function(t, r) {
    if (Array.isArray(t)) return t.slice();
    if (!t) return [];
    var e = [];
    if ("string" == typeof t)
        if (r) {
            if ("hex" === r)
                for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), n = 0; n < t.length; n += 2) e.push(parseInt(t[n] + t[n + 1], 16))
        } else
            for (var i = 0, n = 0; n < t.length; n++) {
                var o = t.charCodeAt(n);
                o < 128 ? e[i++] = o : o < 2048 ? (e[i++] = o >> 6 | 192, e[i++] = 63 & o | 128) : se(t, n) ? (o = 65536 + ((1023 & o) << 10) + (1023 & t.charCodeAt(++n)), e[i++] = o >> 18 | 240, e[i++] = o >> 12 & 63 | 128, e[i++] = o >> 6 & 63 | 128, e[i++] = 63 & o | 128) : (e[i++] = o >> 12 | 224, e[i++] = o >> 6 & 63 | 128, e[i++] = 63 & o | 128)
            } else
                for (n = 0; n < t.length; n++) e[n] = 0 | t[n];
    return e
}, $r.toHex = function(t) {
    for (var r = "", e = 0; e < t.length; e++) r += he(t[e].toString(16));
    return r
}, $r.htonl = ae, $r.toHex32 = function(t, r) {
    for (var e = "", i = 0; i < t.length; i++) {
        var n = t[i];
        "little" === r && (n = ae(n)), e += ue(n.toString(16))
    }
    return e
}, $r.zero2 = he, $r.zero8 = ue, $r.join32 = function(t, r, e, i) {
    var n = e - r;
    ne(n % 4 == 0);
    for (var o = new Array(n / 4), s = 0, a = r; s < o.length; s++, a += 4) {
        var h;
        h = "big" === i ? t[a] << 24 | t[a + 1] << 16 | t[a + 2] << 8 | t[a + 3] : t[a + 3] << 24 | t[a + 2] << 16 | t[a + 1] << 8 | t[a], o[s] = h >>> 0
    }
    return o
}, $r.split32 = function(t, r) {
    for (var e = new Array(4 * t.length), i = 0, n = 0; i < t.length; i++, n += 4) {
        var o = t[i];
        "big" === r ? (e[n] = o >>> 24, e[n + 1] = o >>> 16 & 255, e[n + 2] = o >>> 8 & 255, e[n + 3] = 255 & o) : (e[n + 3] = o >>> 24, e[n + 2] = o >>> 16 & 255, e[n + 1] = o >>> 8 & 255, e[n] = 255 & o)
    }
    return e
}, $r.rotr32 = function(t, r) {
    return t >>> r | t << 32 - r
}, $r.rotl32 = function(t, r) {
    return t << r | t >>> 32 - r
}, $r.sum32 = function(t, r) {
    return t + r >>> 0
}, $r.sum32_3 = function(t, r, e) {
    return t + r + e >>> 0
}, $r.sum32_4 = function(t, r, e, i) {
    return t + r + e + i >>> 0
}, $r.sum32_5 = function(t, r, e, i, n) {
    return t + r + e + i + n >>> 0
}, $r.sum64 = function(t, r, e, i) {
    var n = t[r],
        o = i + t[r + 1] >>> 0,
        s = (o < i ? 1 : 0) + e + n;
    t[r] = s >>> 0, t[r + 1] = o
}, $r.sum64_hi = function(t, r, e, i) {
    return (r + i >>> 0 < r ? 1 : 0) + t + e >>> 0
}, $r.sum64_lo = function(t, r, e, i) {
    return r + i >>> 0
}, $r.sum64_4_hi = function(t, r, e, i, n, o, s, a) {
    var h = 0,
        u = r;
    return h += (u = u + i >>> 0) < r ? 1 : 0, h += (u = u + o >>> 0) < o ? 1 : 0, t + e + n + s + (h += (u = u + a >>> 0) < a ? 1 : 0) >>> 0
}, $r.sum64_4_lo = function(t, r, e, i, n, o, s, a) {
    return r + i + o + a >>> 0
}, $r.sum64_5_hi = function(t, r, e, i, n, o, s, a, h, u) {
    var l = 0,
        f = r;
    return l += (f = f + i >>> 0) < r ? 1 : 0, l += (f = f + o >>> 0) < o ? 1 : 0, l += (f = f + a >>> 0) < a ? 1 : 0, t + e + n + s + h + (l += (f = f + u >>> 0) < u ? 1 : 0) >>> 0
}, $r.sum64_5_lo = function(t, r, e, i, n, o, s, a, h, u) {
    return r + i + o + a + u >>> 0
}, $r.rotr64_hi = function(t, r, e) {
    return (r << 32 - e | t >>> e) >>> 0
}, $r.rotr64_lo = function(t, r, e) {
    return (t << 32 - e | r >>> e) >>> 0
}, $r.shr64_hi = function(t, r, e) {
    return t >>> e
}, $r.shr64_lo = function(t, r, e) {
    return (t << 32 - e | r >>> e) >>> 0
};
var le = {},
    fe = $r,
    ce = te;

function de() {
    this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
}
le.BlockHash = de, de.prototype.update = function(t, r) {
    if (t = fe.toArray(t, r), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
        var e = (t = this.pending).length % this._delta8;
        this.pending = t.slice(t.length - e, t.length), 0 === this.pending.length && (this.pending = null), t = fe.join32(t, 0, t.length - e, this.endian);
        for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32)
    }
    return this
}, de.prototype.digest = function(t) {
    return this.update(this._pad()), ce(null === this.pending), this._digest(t)
}, de.prototype._pad = function() {
    var t = this.pendingTotal,
        r = this._delta8,
        e = r - (t + this.padLength) % r,
        i = new Array(e + this.padLength);
    i[0] = 128;
    for (var n = 1; n < e; n++) i[n] = 0;
    if (t <<= 3, "big" === this.endian) {
        for (var o = 8; o < this.padLength; o++) i[n++] = 0;
        i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = t >>> 24 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 8 & 255, i[n++] = 255 & t
    } else
        for (i[n++] = 255 & t, i[n++] = t >>> 8 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 24 & 255, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, o = 8; o < this.padLength; o++) i[n++] = 0;
    return i
};
var me = {},
    pe = {},
    ge = $r.rotr32;

function ve(t, r, e) {
    return t & r ^ ~t & e
}

function ye(t, r, e) {
    return t & r ^ t & e ^ r & e
}

function we(t, r, e) {
    return t ^ r ^ e
}
pe.ft_1 = function(t, r, e, i) {
    return 0 === t ? ve(r, e, i) : 1 === t || 3 === t ? we(r, e, i) : 2 === t ? ye(r, e, i) : void 0
}, pe.ch32 = ve, pe.maj32 = ye, pe.p32 = we, pe.s0_256 = function(t) {
    return ge(t, 2) ^ ge(t, 13) ^ ge(t, 22)
}, pe.s1_256 = function(t) {
    return ge(t, 6) ^ ge(t, 11) ^ ge(t, 25)
}, pe.g0_256 = function(t) {
    return ge(t, 7) ^ ge(t, 18) ^ t >>> 3
}, pe.g1_256 = function(t) {
    return ge(t, 17) ^ ge(t, 19) ^ t >>> 10
};
var Ae = $r,
    be = le,
    Me = pe,
    Ee = Ae.rotl32,
    _e = Ae.sum32,
    ke = Ae.sum32_5,
    Ne = Me.ft_1,
    Ie = be.BlockHash,
    xe = [1518500249, 1859775393, 2400959708, 3395469782];

function Se() {
    if (!(this instanceof Se)) return new Se;
    Ie.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
}
Ae.inherits(Se, Ie);
var Pe = Se;
Se.blockSize = 512, Se.outSize = 160, Se.hmacStrength = 80, Se.padLength = 64, Se.prototype._update = function(t, r) {
    for (var e = this.W, i = 0; i < 16; i++) e[i] = t[r + i];
    for (; i < e.length; i++) e[i] = Ee(e[i - 3] ^ e[i - 8] ^ e[i - 14] ^ e[i - 16], 1);
    var n = this.h[0],
        o = this.h[1],
        s = this.h[2],
        a = this.h[3],
        h = this.h[4];
    for (i = 0; i < e.length; i++) {
        var u = ~~(i / 20),
            l = ke(Ee(n, 5), Ne(u, o, s, a), h, e[i], xe[u]);
        h = a, a = s, s = Ee(o, 30), o = n, n = l
    }
    this.h[0] = _e(this.h[0], n), this.h[1] = _e(this.h[1], o), this.h[2] = _e(this.h[2], s), this.h[3] = _e(this.h[3], a), this.h[4] = _e(this.h[4], h)
}, Se.prototype._digest = function(t) {
    return "hex" === t ? Ae.toHex32(this.h, "big") : Ae.split32(this.h, "big")
};
var Re = $r,
    Te = le,
    Ce = pe,
    Be = te,
    Oe = Re.sum32,
    Le = Re.sum32_4,
    Fe = Re.sum32_5,
    Ue = Ce.ch32,
    De = Ce.maj32,
    qe = Ce.s0_256,
    Ge = Ce.s1_256,
    ze = Ce.g0_256,
    He = Ce.g1_256,
    Qe = Te.BlockHash,
    Ke = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

function Je() {
    if (!(this instanceof Je)) return new Je;
    Qe.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = Ke, this.W = new Array(64)
}
Re.inherits(Je, Qe);
var je = Je;
Je.blockSize = 512, Je.outSize = 256, Je.hmacStrength = 192, Je.padLength = 64, Je.prototype._update = function(t, r) {
    for (var e = this.W, i = 0; i < 16; i++) e[i] = t[r + i];
    for (; i < e.length; i++) e[i] = Le(He(e[i - 2]), e[i - 7], ze(e[i - 15]), e[i - 16]);
    var n = this.h[0],
        o = this.h[1],
        s = this.h[2],
        a = this.h[3],
        h = this.h[4],
        u = this.h[5],
        l = this.h[6],
        f = this.h[7];
    for (Be(this.k.length === e.length), i = 0; i < e.length; i++) {
        var c = Fe(f, Ge(h), Ue(h, u, l), this.k[i], e[i]),
            d = Oe(qe(n), De(n, o, s));
        f = l, l = u, u = h, h = Oe(a, c), a = s, s = o, o = n, n = Oe(c, d)
    }
    this.h[0] = Oe(this.h[0], n), this.h[1] = Oe(this.h[1], o), this.h[2] = Oe(this.h[2], s), this.h[3] = Oe(this.h[3], a), this.h[4] = Oe(this.h[4], h), this.h[5] = Oe(this.h[5], u), this.h[6] = Oe(this.h[6], l), this.h[7] = Oe(this.h[7], f)
}, Je.prototype._digest = function(t) {
    return "hex" === t ? Re.toHex32(this.h, "big") : Re.split32(this.h, "big")
};
var Ye = $r,
    Xe = je;

function Ve() {
    if (!(this instanceof Ve)) return new Ve;
    Xe.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
}
Ye.inherits(Ve, Xe);
var We = Ve;
Ve.blockSize = 512, Ve.outSize = 224, Ve.hmacStrength = 192, Ve.padLength = 64, Ve.prototype._digest = function(t) {
    return "hex" === t ? Ye.toHex32(this.h.slice(0, 7), "big") : Ye.split32(this.h.slice(0, 7), "big")
};
var Ze = $r,
    $e = le,
    ti = te,
    ri = Ze.rotr64_hi,
    ei = Ze.rotr64_lo,
    ii = Ze.shr64_hi,
    ni = Ze.shr64_lo,
    oi = Ze.sum64,
    si = Ze.sum64_hi,
    ai = Ze.sum64_lo,
    hi = Ze.sum64_4_hi,
    ui = Ze.sum64_4_lo,
    li = Ze.sum64_5_hi,
    fi = Ze.sum64_5_lo,
    ci = $e.BlockHash,
    di = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

function mi() {
    if (!(this instanceof mi)) return new mi;
    ci.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = di, this.W = new Array(160)
}
Ze.inherits(mi, ci);
var pi = mi;

function gi(t, r, e, i, n) {
    var o = t & e ^ ~t & n;
    return o < 0 && (o += 4294967296), o
}

function vi(t, r, e, i, n, o) {
    var s = r & i ^ ~r & o;
    return s < 0 && (s += 4294967296), s
}

function yi(t, r, e, i, n) {
    var o = t & e ^ t & n ^ e & n;
    return o < 0 && (o += 4294967296), o
}

function wi(t, r, e, i, n, o) {
    var s = r & i ^ r & o ^ i & o;
    return s < 0 && (s += 4294967296), s
}

function Ai(t, r) {
    var e = ri(t, r, 28) ^ ri(r, t, 2) ^ ri(r, t, 7);
    return e < 0 && (e += 4294967296), e
}

function bi(t, r) {
    var e = ei(t, r, 28) ^ ei(r, t, 2) ^ ei(r, t, 7);
    return e < 0 && (e += 4294967296), e
}

function Mi(t, r) {
    var e = ri(t, r, 14) ^ ri(t, r, 18) ^ ri(r, t, 9);
    return e < 0 && (e += 4294967296), e
}

function Ei(t, r) {
    var e = ei(t, r, 14) ^ ei(t, r, 18) ^ ei(r, t, 9);
    return e < 0 && (e += 4294967296), e
}

function _i(t, r) {
    var e = ri(t, r, 1) ^ ri(t, r, 8) ^ ii(t, r, 7);
    return e < 0 && (e += 4294967296), e
}

function ki(t, r) {
    var e = ei(t, r, 1) ^ ei(t, r, 8) ^ ni(t, r, 7);
    return e < 0 && (e += 4294967296), e
}

function Ni(t, r) {
    var e = ri(t, r, 19) ^ ri(r, t, 29) ^ ii(t, r, 6);
    return e < 0 && (e += 4294967296), e
}

function Ii(t, r) {
    var e = ei(t, r, 19) ^ ei(r, t, 29) ^ ni(t, r, 6);
    return e < 0 && (e += 4294967296), e
}
mi.blockSize = 1024, mi.outSize = 512, mi.hmacStrength = 192, mi.padLength = 128, mi.prototype._prepareBlock = function(t, r) {
    for (var e = this.W, i = 0; i < 32; i++) e[i] = t[r + i];
    for (; i < e.length; i += 2) {
        var n = Ni(e[i - 4], e[i - 3]),
            o = Ii(e[i - 4], e[i - 3]),
            s = e[i - 14],
            a = e[i - 13],
            h = _i(e[i - 30], e[i - 29]),
            u = ki(e[i - 30], e[i - 29]),
            l = e[i - 32],
            f = e[i - 31];
        e[i] = hi(n, o, s, a, h, u, l, f), e[i + 1] = ui(n, o, s, a, h, u, l, f)
    }
}, mi.prototype._update = function(t, r) {
    this._prepareBlock(t, r);
    var e = this.W,
        i = this.h[0],
        n = this.h[1],
        o = this.h[2],
        s = this.h[3],
        a = this.h[4],
        h = this.h[5],
        u = this.h[6],
        l = this.h[7],
        f = this.h[8],
        c = this.h[9],
        d = this.h[10],
        m = this.h[11],
        p = this.h[12],
        g = this.h[13],
        v = this.h[14],
        y = this.h[15];
    ti(this.k.length === e.length);
    for (var w = 0; w < e.length; w += 2) {
        var A = v,
            b = y,
            M = Mi(f, c),
            E = Ei(f, c),
            _ = gi(f, c, d, m, p),
            k = vi(f, c, d, m, p, g),
            N = this.k[w],
            I = this.k[w + 1],
            x = e[w],
            S = e[w + 1],
            P = li(A, b, M, E, _, k, N, I, x, S),
            R = fi(A, b, M, E, _, k, N, I, x, S);
        A = Ai(i, n), b = bi(i, n), M = yi(i, n, o, s, a), E = wi(i, n, o, s, a, h);
        var T = si(A, b, M, E),
            C = ai(A, b, M, E);
        v = p, y = g, p = d, g = m, d = f, m = c, f = si(u, l, P, R), c = ai(l, l, P, R), u = a, l = h, a = o, h = s, o = i, s = n, i = si(P, R, T, C), n = ai(P, R, T, C)
    }
    oi(this.h, 0, i, n), oi(this.h, 2, o, s), oi(this.h, 4, a, h), oi(this.h, 6, u, l), oi(this.h, 8, f, c), oi(this.h, 10, d, m), oi(this.h, 12, p, g), oi(this.h, 14, v, y)
}, mi.prototype._digest = function(t) {
    return "hex" === t ? Ze.toHex32(this.h, "big") : Ze.split32(this.h, "big")
};
var xi = $r,
    Si = pi;

function Pi() {
    if (!(this instanceof Pi)) return new Pi;
    Si.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
}
xi.inherits(Pi, Si);
var Ri = Pi;
Pi.blockSize = 1024, Pi.outSize = 384, Pi.hmacStrength = 192, Pi.padLength = 128, Pi.prototype._digest = function(t) {
    return "hex" === t ? xi.toHex32(this.h.slice(0, 12), "big") : xi.split32(this.h.slice(0, 12), "big")
}, me.sha1 = Pe, me.sha224 = We, me.sha256 = je, me.sha384 = Ri, me.sha512 = pi;
var Ti = {},
    Ci = $r,
    Bi = le,
    Oi = Ci.rotl32,
    Li = Ci.sum32,
    Fi = Ci.sum32_3,
    Ui = Ci.sum32_4,
    Di = Bi.BlockHash;

function qi() {
    if (!(this instanceof qi)) return new qi;
    Di.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
}

function Gi(t, r, e, i) {
    return t <= 15 ? r ^ e ^ i : t <= 31 ? r & e | ~r & i : t <= 47 ? (r | ~e) ^ i : t <= 63 ? r & i | e & ~i : r ^ (e | ~i)
}

function zi(t) {
    return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838
}

function Hi(t) {
    return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0
}
Ci.inherits(qi, Di), Ti.ripemd160 = qi, qi.blockSize = 512, qi.outSize = 160, qi.hmacStrength = 192, qi.padLength = 64, qi.prototype._update = function(t, r) {
    for (var e = this.h[0], i = this.h[1], n = this.h[2], o = this.h[3], s = this.h[4], a = e, h = i, u = n, l = o, f = s, c = 0; c < 80; c++) {
        var d = Li(Oi(Ui(e, Gi(c, i, n, o), t[Qi[c] + r], zi(c)), Ji[c]), s);
        e = s, s = o, o = Oi(n, 10), n = i, i = d, d = Li(Oi(Ui(a, Gi(79 - c, h, u, l), t[Ki[c] + r], Hi(c)), ji[c]), f), a = f, f = l, l = Oi(u, 10), u = h, h = d
    }
    d = Fi(this.h[1], n, l), this.h[1] = Fi(this.h[2], o, f), this.h[2] = Fi(this.h[3], s, a), this.h[3] = Fi(this.h[4], e, h), this.h[4] = Fi(this.h[0], i, u), this.h[0] = d
}, qi.prototype._digest = function(t) {
    return "hex" === t ? Ci.toHex32(this.h, "little") : Ci.split32(this.h, "little")
};
var Qi = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
    Ki = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
    Ji = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
    ji = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
    Yi = $r,
    Xi = te;

function Vi(t, r, e) {
    if (!(this instanceof Vi)) return new Vi(t, r, e);
    this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(Yi.toArray(r, e))
}
var Wi = Vi;
Vi.prototype._init = function(t) {
        t.length > this.blockSize && (t = (new this.Hash).update(t).digest()), Xi(t.length <= this.blockSize);
        for (var r = t.length; r < this.blockSize; r++) t.push(0);
        for (r = 0; r < t.length; r++) t[r] ^= 54;
        for (this.inner = (new this.Hash).update(t), r = 0; r < t.length; r++) t[r] ^= 106;
        this.outer = (new this.Hash).update(t)
    }, Vi.prototype.update = function(t, r) {
        return this.inner.update(t, r), this
    }, Vi.prototype.digest = function(t) {
        return this.outer.update(this.inner.digest()), this.outer.digest(t)
    },
    function(t) {
        var r = Zr;
        r.utils = $r, r.common = le, r.sha = me, r.ripemd = Ti, r.hmac = Wi, r.sha1 = r.sha.sha1, r.sha256 = r.sha.sha256, r.sha224 = r.sha.sha224, r.sha384 = r.sha.sha384, r.sha512 = r.sha.sha512, r.ripemd160 = r.ripemd.ripemd160
    }();
const Zi = e(Zr);

function $i(t, r, e) {
    return e = {
        path: r,
        exports: {},
        require: function(t, r) {
            return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }(null == r && e.path)
        }
    }, t(e, e.exports), e.exports
}
var tn = rn;

function rn(t, r) {
    if (!t) throw new Error(r || "Assertion failed")
}
rn.equal = function(t, r, e) {
    if (t != r) throw new Error(e || "Assertion failed: " + t + " != " + r)
};
var en = $i((function(t, r) {
        var e = r;

        function i(t) {
            return 1 === t.length ? "0" + t : t
        }

        function n(t) {
            for (var r = "", e = 0; e < t.length; e++) r += i(t[e].toString(16));
            return r
        }
        e.toArray = function(t, r) {
            if (Array.isArray(t)) return t.slice();
            if (!t) return [];
            var e = [];
            if ("string" != typeof t) {
                for (var i = 0; i < t.length; i++) e[i] = 0 | t[i];
                return e
            }
            if ("hex" === r) {
                (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t);
                for (i = 0; i < t.length; i += 2) e.push(parseInt(t[i] + t[i + 1], 16))
            } else
                for (i = 0; i < t.length; i++) {
                    var n = t.charCodeAt(i),
                        o = n >> 8,
                        s = 255 & n;
                    o ? e.push(o, s) : e.push(s)
                }
            return e
        }, e.zero2 = i, e.toHex = n, e.encode = function(t, r) {
            return "hex" === r ? n(t) : t
        }
    })),
    nn = $i((function(t, r) {
        var e = r;
        e.assert = tn, e.toArray = en.toArray, e.zero2 = en.zero2, e.toHex = en.toHex, e.encode = en.encode, e.getNAF = function(t, r, e) {
            var i = new Array(Math.max(t.bitLength(), e) + 1);
            i.fill(0);
            for (var n = 1 << r + 1, o = t.clone(), s = 0; s < i.length; s++) {
                var a, h = o.andln(n - 1);
                o.isOdd() ? (a = h > (n >> 1) - 1 ? (n >> 1) - h : h, o.isubn(a)) : a = 0, i[s] = a, o.iushrn(1)
            }
            return i
        }, e.getJSF = function(t, r) {
            var e = [
                [],
                []
            ];
            t = t.clone(), r = r.clone();
            for (var i, n = 0, o = 0; t.cmpn(-n) > 0 || r.cmpn(-o) > 0;) {
                var s, a, h = t.andln(3) + n & 3,
                    u = r.andln(3) + o & 3;
                3 === h && (h = -1), 3 === u && (u = -1), s = 0 == (1 & h) ? 0 : 3 !== (i = t.andln(7) + n & 7) && 5 !== i || 2 !== u ? h : -h, e[0].push(s), a = 0 == (1 & u) ? 0 : 3 !== (i = r.andln(7) + o & 7) && 5 !== i || 2 !== h ? u : -u, e[1].push(a), 2 * n === s + 1 && (n = 1 - n), 2 * o === a + 1 && (o = 1 - o), t.iushrn(1), r.iushrn(1)
            }
            return e
        }, e.cachedProperty = function(t, r, e) {
            var i = "_" + r;
            t.prototype[r] = function() {
                return void 0 !== this[i] ? this[i] : this[i] = e.call(this)
            }
        }, e.parseBytes = function(t) {
            return "string" == typeof t ? e.toArray(t, "hex") : t
        }, e.intFromLE = function(t) {
            return new Wr(t, "hex", "le")
        }
    })),
    on = nn.getNAF,
    sn = nn.getJSF,
    an = nn.assert;

function hn(t, r) {
    this.type = t, this.p = new Wr(r.p, 16), this.red = r.prime ? Wr.red(r.prime) : Wr.mont(this.p), this.zero = new Wr(0).toRed(this.red), this.one = new Wr(1).toRed(this.red), this.two = new Wr(2).toRed(this.red), this.n = r.n && new Wr(r.n, 16), this.g = r.g && this.pointFromJSON(r.g, r.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
    var e = this.n && this.p.div(this.n);
    !e || e.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
}
var un = hn;

function ln(t, r) {
    this.curve = t, this.type = r, this.precomputed = null
}
hn.prototype.point = function() {
    throw new Error("Not implemented")
}, hn.prototype.validate = function() {
    throw new Error("Not implemented")
}, hn.prototype._fixedNafMul = function(t, r) {
    an(t.precomputed);
    var e = t._getDoubles(),
        i = on(r, 1, this._bitLength),
        n = (1 << e.step + 1) - (e.step % 2 == 0 ? 2 : 1);
    n /= 3;
    var o, s, a = [];
    for (o = 0; o < i.length; o += e.step) {
        s = 0;
        for (var h = o + e.step - 1; h >= o; h--) s = (s << 1) + i[h];
        a.push(s)
    }
    for (var u = this.jpoint(null, null, null), l = this.jpoint(null, null, null), f = n; f > 0; f--) {
        for (o = 0; o < a.length; o++)(s = a[o]) === f ? l = l.mixedAdd(e.points[o]) : s === -f && (l = l.mixedAdd(e.points[o].neg()));
        u = u.add(l)
    }
    return u.toP()
}, hn.prototype._wnafMul = function(t, r) {
    var e = 4,
        i = t._getNAFPoints(e);
    e = i.wnd;
    for (var n = i.points, o = on(r, e, this._bitLength), s = this.jpoint(null, null, null), a = o.length - 1; a >= 0; a--) {
        for (var h = 0; a >= 0 && 0 === o[a]; a--) h++;
        if (a >= 0 && h++, s = s.dblp(h), a < 0) break;
        var u = o[a];
        an(0 !== u), s = "affine" === t.type ? u > 0 ? s.mixedAdd(n[u - 1 >> 1]) : s.mixedAdd(n[-u - 1 >> 1].neg()) : u > 0 ? s.add(n[u - 1 >> 1]) : s.add(n[-u - 1 >> 1].neg())
    }
    return "affine" === t.type ? s.toP() : s
}, hn.prototype._wnafMulAdd = function(t, r, e, i, n) {
    var o, s, a, h = this._wnafT1,
        u = this._wnafT2,
        l = this._wnafT3,
        f = 0;
    for (o = 0; o < i; o++) {
        var c = (a = r[o])._getNAFPoints(t);
        h[o] = c.wnd, u[o] = c.points
    }
    for (o = i - 1; o >= 1; o -= 2) {
        var d = o - 1,
            m = o;
        if (1 === h[d] && 1 === h[m]) {
            var p = [r[d], null, null, r[m]];
            0 === r[d].y.cmp(r[m].y) ? (p[1] = r[d].add(r[m]), p[2] = r[d].toJ().mixedAdd(r[m].neg())) : 0 === r[d].y.cmp(r[m].y.redNeg()) ? (p[1] = r[d].toJ().mixedAdd(r[m]), p[2] = r[d].add(r[m].neg())) : (p[1] = r[d].toJ().mixedAdd(r[m]), p[2] = r[d].toJ().mixedAdd(r[m].neg()));
            var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                v = sn(e[d], e[m]);
            for (f = Math.max(v[0].length, f), l[d] = new Array(f), l[m] = new Array(f), s = 0; s < f; s++) {
                var y = 0 | v[0][s],
                    w = 0 | v[1][s];
                l[d][s] = g[3 * (y + 1) + (w + 1)], l[m][s] = 0, u[d] = p
            }
        } else l[d] = on(e[d], h[d], this._bitLength), l[m] = on(e[m], h[m], this._bitLength), f = Math.max(l[d].length, f), f = Math.max(l[m].length, f)
    }
    var A = this.jpoint(null, null, null),
        b = this._wnafT4;
    for (o = f; o >= 0; o--) {
        for (var M = 0; o >= 0;) {
            var E = !0;
            for (s = 0; s < i; s++) b[s] = 0 | l[s][o], 0 !== b[s] && (E = !1);
            if (!E) break;
            M++, o--
        }
        if (o >= 0 && M++, A = A.dblp(M), o < 0) break;
        for (s = 0; s < i; s++) {
            var _ = b[s];
            0 !== _ && (_ > 0 ? a = u[s][_ - 1 >> 1] : _ < 0 && (a = u[s][-_ - 1 >> 1].neg()), A = "affine" === a.type ? A.mixedAdd(a) : A.add(a))
        }
    }
    for (o = 0; o < i; o++) u[o] = null;
    return n ? A : A.toP()
}, hn.BasePoint = ln, ln.prototype.eq = function() {
    throw new Error("Not implemented")
}, ln.prototype.validate = function() {
    return this.curve.validate(this)
}, hn.prototype.decodePoint = function(t, r) {
    t = nn.toArray(t, r);
    var e = this.p.byteLength();
    if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * e) return 6 === t[0] ? an(t[t.length - 1] % 2 == 0) : 7 === t[0] && an(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + e), t.slice(1 + e, 1 + 2 * e));
    if ((2 === t[0] || 3 === t[0]) && t.length - 1 === e) return this.pointFromX(t.slice(1, 1 + e), 3 === t[0]);
    throw new Error("Unknown point format")
}, ln.prototype.encodeCompressed = function(t) {
    return this.encode(t, !0)
}, ln.prototype._encode = function(t) {
    var r = this.curve.p.byteLength(),
        e = this.getX().toArray("be", r);
    return t ? [this.getY().isEven() ? 2 : 3].concat(e) : [4].concat(e, this.getY().toArray("be", r))
}, ln.prototype.encode = function(t, r) {
    return nn.encode(this._encode(r), t)
}, ln.prototype.precompute = function(t) {
    if (this.precomputed) return this;
    var r = {
        doubles: null,
        naf: null,
        beta: null
    };
    return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, t), r.beta = this._getBeta(), this.precomputed = r, this
}, ln.prototype._hasDoubles = function(t) {
    if (!this.precomputed) return !1;
    var r = this.precomputed.doubles;
    return !!r && r.points.length >= Math.ceil((t.bitLength() + 1) / r.step)
}, ln.prototype._getDoubles = function(t, r) {
    if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
    for (var e = [this], i = this, n = 0; n < r; n += t) {
        for (var o = 0; o < t; o++) i = i.dbl();
        e.push(i)
    }
    return {
        step: t,
        points: e
    }
}, ln.prototype._getNAFPoints = function(t) {
    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
    for (var r = [this], e = (1 << t) - 1, i = 1 === e ? null : this.dbl(), n = 1; n < e; n++) r[n] = r[n - 1].add(i);
    return {
        wnd: t,
        points: r
    }
}, ln.prototype._getBeta = function() {
    return null
}, ln.prototype.dblp = function(t) {
    for (var r = this, e = 0; e < t; e++) r = r.dbl();
    return r
};
var fn = $i((function(t) {
        "function" == typeof Object.create ? t.exports = function(t, r) {
            r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        } : t.exports = function(t, r) {
            if (r) {
                t.super_ = r;
                var e = function() {};
                e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
            }
        }
    })),
    cn = nn.assert;

function dn(t) {
    un.call(this, "short", t), this.a = new Wr(t.a, 16).toRed(this.red), this.b = new Wr(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
}
fn(dn, un);
var mn = dn;

function pn(t, r, e, i) {
    un.BasePoint.call(this, t, "affine"), null === r && null === e ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new Wr(r, 16), this.y = new Wr(e, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
}

function gn(t, r, e, i) {
    un.BasePoint.call(this, t, "jacobian"), null === r && null === e && null === i ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new Wr(0)) : (this.x = new Wr(r, 16), this.y = new Wr(e, 16), this.z = new Wr(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
}
dn.prototype._getEndomorphism = function(t) {
    if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
        var r, e;
        if (t.beta) r = new Wr(t.beta, 16).toRed(this.red);
        else {
            var i = this._getEndoRoots(this.p);
            r = (r = i[0].cmp(i[1]) < 0 ? i[0] : i[1]).toRed(this.red)
        }
        if (t.lambda) e = new Wr(t.lambda, 16);
        else {
            var n = this._getEndoRoots(this.n);
            0 === this.g.mul(n[0]).x.cmp(this.g.x.redMul(r)) ? e = n[0] : (e = n[1], cn(0 === this.g.mul(e).x.cmp(this.g.x.redMul(r))))
        }
        return {
            beta: r,
            lambda: e,
            basis: t.basis ? t.basis.map((function(t) {
                return {
                    a: new Wr(t.a, 16),
                    b: new Wr(t.b, 16)
                }
            })) : this._getEndoBasis(e)
        }
    }
}, dn.prototype._getEndoRoots = function(t) {
    var r = t === this.p ? this.red : Wr.mont(t),
        e = new Wr(2).toRed(r).redInvm(),
        i = e.redNeg(),
        n = new Wr(3).toRed(r).redNeg().redSqrt().redMul(e);
    return [i.redAdd(n).fromRed(), i.redSub(n).fromRed()]
}, dn.prototype._getEndoBasis = function(t) {
    for (var r, e, i, n, o, s, a, h, u, l = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), f = t, c = this.n.clone(), d = new Wr(1), m = new Wr(0), p = new Wr(0), g = new Wr(1), v = 0; 0 !== f.cmpn(0);) {
        var y = c.div(f);
        h = c.sub(y.mul(f)), u = p.sub(y.mul(d));
        var w = g.sub(y.mul(m));
        if (!i && h.cmp(l) < 0) r = a.neg(), e = d, i = h.neg(), n = u;
        else if (i && 2 == ++v) break;
        a = h, c = f, f = h, p = d, d = u, g = m, m = w
    }
    o = h.neg(), s = u;
    var A = i.sqr().add(n.sqr());
    return o.sqr().add(s.sqr()).cmp(A) >= 0 && (o = r, s = e), i.negative && (i = i.neg(), n = n.neg()), o.negative && (o = o.neg(), s = s.neg()), [{
        a: i,
        b: n
    }, {
        a: o,
        b: s
    }]
}, dn.prototype._endoSplit = function(t) {
    var r = this.endo.basis,
        e = r[0],
        i = r[1],
        n = i.b.mul(t).divRound(this.n),
        o = e.b.neg().mul(t).divRound(this.n),
        s = n.mul(e.a),
        a = o.mul(i.a),
        h = n.mul(e.b),
        u = o.mul(i.b);
    return {
        k1: t.sub(s).sub(a),
        k2: h.add(u).neg()
    }
}, dn.prototype.pointFromX = function(t, r) {
    (t = new Wr(t, 16)).red || (t = t.toRed(this.red));
    var e = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
        i = e.redSqrt();
    if (0 !== i.redSqr().redSub(e).cmp(this.zero)) throw new Error("invalid point");
    var n = i.fromRed().isOdd();
    return (r && !n || !r && n) && (i = i.redNeg()), this.point(t, i)
}, dn.prototype.validate = function(t) {
    if (t.inf) return !0;
    var r = t.x,
        e = t.y,
        i = this.a.redMul(r),
        n = r.redSqr().redMul(r).redIAdd(i).redIAdd(this.b);
    return 0 === e.redSqr().redISub(n).cmpn(0)
}, dn.prototype._endoWnafMulAdd = function(t, r, e) {
    for (var i = this._endoWnafT1, n = this._endoWnafT2, o = 0; o < t.length; o++) {
        var s = this._endoSplit(r[o]),
            a = t[o],
            h = a._getBeta();
        s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), h = h.neg(!0)), i[2 * o] = a, i[2 * o + 1] = h, n[2 * o] = s.k1, n[2 * o + 1] = s.k2
    }
    for (var u = this._wnafMulAdd(1, i, n, 2 * o, e), l = 0; l < 2 * o; l++) i[l] = null, n[l] = null;
    return u
}, fn(pn, un.BasePoint), dn.prototype.point = function(t, r, e) {
    return new pn(this, t, r, e)
}, dn.prototype.pointFromJSON = function(t, r) {
    return pn.fromJSON(this, t, r)
}, pn.prototype._getBeta = function() {
    if (this.curve.endo) {
        var t = this.precomputed;
        if (t && t.beta) return t.beta;
        var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
        if (t) {
            var e = this.curve,
                i = function(t) {
                    return e.point(t.x.redMul(e.endo.beta), t.y)
                };
            t.beta = r, r.precomputed = {
                beta: null,
                naf: t.naf && {
                    wnd: t.naf.wnd,
                    points: t.naf.points.map(i)
                },
                doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(i)
                }
            }
        }
        return r
    }
}, pn.prototype.toJSON = function() {
    return this.precomputed ? [this.x, this.y, this.precomputed && {
        doubles: this.precomputed.doubles && {
            step: this.precomputed.doubles.step,
            points: this.precomputed.doubles.points.slice(1)
        },
        naf: this.precomputed.naf && {
            wnd: this.precomputed.naf.wnd,
            points: this.precomputed.naf.points.slice(1)
        }
    }] : [this.x, this.y]
}, pn.fromJSON = function(t, r, e) {
    "string" == typeof r && (r = JSON.parse(r));
    var i = t.point(r[0], r[1], e);
    if (!r[2]) return i;

    function n(r) {
        return t.point(r[0], r[1], e)
    }
    var o = r[2];
    return i.precomputed = {
        beta: null,
        doubles: o.doubles && {
            step: o.doubles.step,
            points: [i].concat(o.doubles.points.map(n))
        },
        naf: o.naf && {
            wnd: o.naf.wnd,
            points: [i].concat(o.naf.points.map(n))
        }
    }, i
}, pn.prototype.inspect = function() {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
}, pn.prototype.isInfinity = function() {
    return this.inf
}, pn.prototype.add = function(t) {
    if (this.inf) return t;
    if (t.inf) return this;
    if (this.eq(t)) return this.dbl();
    if (this.neg().eq(t)) return this.curve.point(null, null);
    if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
    var r = this.y.redSub(t.y);
    0 !== r.cmpn(0) && (r = r.redMul(this.x.redSub(t.x).redInvm()));
    var e = r.redSqr().redISub(this.x).redISub(t.x),
        i = r.redMul(this.x.redSub(e)).redISub(this.y);
    return this.curve.point(e, i)
}, pn.prototype.dbl = function() {
    if (this.inf) return this;
    var t = this.y.redAdd(this.y);
    if (0 === t.cmpn(0)) return this.curve.point(null, null);
    var r = this.curve.a,
        e = this.x.redSqr(),
        i = t.redInvm(),
        n = e.redAdd(e).redIAdd(e).redIAdd(r).redMul(i),
        o = n.redSqr().redISub(this.x.redAdd(this.x)),
        s = n.redMul(this.x.redSub(o)).redISub(this.y);
    return this.curve.point(o, s)
}, pn.prototype.getX = function() {
    return this.x.fromRed()
}, pn.prototype.getY = function() {
    return this.y.fromRed()
}, pn.prototype.mul = function(t) {
    return t = new Wr(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
}, pn.prototype.mulAdd = function(t, r, e) {
    var i = [this, r],
        n = [t, e];
    return this.curve.endo ? this.curve._endoWnafMulAdd(i, n) : this.curve._wnafMulAdd(1, i, n, 2)
}, pn.prototype.jmulAdd = function(t, r, e) {
    var i = [this, r],
        n = [t, e];
    return this.curve.endo ? this.curve._endoWnafMulAdd(i, n, !0) : this.curve._wnafMulAdd(1, i, n, 2, !0)
}, pn.prototype.eq = function(t) {
    return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
}, pn.prototype.neg = function(t) {
    if (this.inf) return this;
    var r = this.curve.point(this.x, this.y.redNeg());
    if (t && this.precomputed) {
        var e = this.precomputed,
            i = function(t) {
                return t.neg()
            };
        r.precomputed = {
            naf: e.naf && {
                wnd: e.naf.wnd,
                points: e.naf.points.map(i)
            },
            doubles: e.doubles && {
                step: e.doubles.step,
                points: e.doubles.points.map(i)
            }
        }
    }
    return r
}, pn.prototype.toJ = function() {
    return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
}, fn(gn, un.BasePoint), dn.prototype.jpoint = function(t, r, e) {
    return new gn(this, t, r, e)
}, gn.prototype.toP = function() {
    if (this.isInfinity()) return this.curve.point(null, null);
    var t = this.z.redInvm(),
        r = t.redSqr(),
        e = this.x.redMul(r),
        i = this.y.redMul(r).redMul(t);
    return this.curve.point(e, i)
}, gn.prototype.neg = function() {
    return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
}, gn.prototype.add = function(t) {
    if (this.isInfinity()) return t;
    if (t.isInfinity()) return this;
    var r = t.z.redSqr(),
        e = this.z.redSqr(),
        i = this.x.redMul(r),
        n = t.x.redMul(e),
        o = this.y.redMul(r.redMul(t.z)),
        s = t.y.redMul(e.redMul(this.z)),
        a = i.redSub(n),
        h = o.redSub(s);
    if (0 === a.cmpn(0)) return 0 !== h.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
    var u = a.redSqr(),
        l = u.redMul(a),
        f = i.redMul(u),
        c = h.redSqr().redIAdd(l).redISub(f).redISub(f),
        d = h.redMul(f.redISub(c)).redISub(o.redMul(l)),
        m = this.z.redMul(t.z).redMul(a);
    return this.curve.jpoint(c, d, m)
}, gn.prototype.mixedAdd = function(t) {
    if (this.isInfinity()) return t.toJ();
    if (t.isInfinity()) return this;
    var r = this.z.redSqr(),
        e = this.x,
        i = t.x.redMul(r),
        n = this.y,
        o = t.y.redMul(r).redMul(this.z),
        s = e.redSub(i),
        a = n.redSub(o);
    if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
    var h = s.redSqr(),
        u = h.redMul(s),
        l = e.redMul(h),
        f = a.redSqr().redIAdd(u).redISub(l).redISub(l),
        c = a.redMul(l.redISub(f)).redISub(n.redMul(u)),
        d = this.z.redMul(s);
    return this.curve.jpoint(f, c, d)
}, gn.prototype.dblp = function(t) {
    if (0 === t) return this;
    if (this.isInfinity()) return this;
    if (!t) return this.dbl();
    var r;
    if (this.curve.zeroA || this.curve.threeA) {
        var e = this;
        for (r = 0; r < t; r++) e = e.dbl();
        return e
    }
    var i = this.curve.a,
        n = this.curve.tinv,
        o = this.x,
        s = this.y,
        a = this.z,
        h = a.redSqr().redSqr(),
        u = s.redAdd(s);
    for (r = 0; r < t; r++) {
        var l = o.redSqr(),
            f = u.redSqr(),
            c = f.redSqr(),
            d = l.redAdd(l).redIAdd(l).redIAdd(i.redMul(h)),
            m = o.redMul(f),
            p = d.redSqr().redISub(m.redAdd(m)),
            g = m.redISub(p),
            v = d.redMul(g);
        v = v.redIAdd(v).redISub(c);
        var y = u.redMul(a);
        r + 1 < t && (h = h.redMul(c)), o = p, a = y, u = v
    }
    return this.curve.jpoint(o, u.redMul(n), a)
}, gn.prototype.dbl = function() {
    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
}, gn.prototype._zeroDbl = function() {
    var t, r, e;
    if (this.zOne) {
        var i = this.x.redSqr(),
            n = this.y.redSqr(),
            o = n.redSqr(),
            s = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
        s = s.redIAdd(s);
        var a = i.redAdd(i).redIAdd(i),
            h = a.redSqr().redISub(s).redISub(s),
            u = o.redIAdd(o);
        u = (u = u.redIAdd(u)).redIAdd(u), t = h, r = a.redMul(s.redISub(h)).redISub(u), e = this.y.redAdd(this.y)
    } else {
        var l = this.x.redSqr(),
            f = this.y.redSqr(),
            c = f.redSqr(),
            d = this.x.redAdd(f).redSqr().redISub(l).redISub(c);
        d = d.redIAdd(d);
        var m = l.redAdd(l).redIAdd(l),
            p = m.redSqr(),
            g = c.redIAdd(c);
        g = (g = g.redIAdd(g)).redIAdd(g), t = p.redISub(d).redISub(d), r = m.redMul(d.redISub(t)).redISub(g), e = (e = this.y.redMul(this.z)).redIAdd(e)
    }
    return this.curve.jpoint(t, r, e)
}, gn.prototype._threeDbl = function() {
    var t, r, e;
    if (this.zOne) {
        var i = this.x.redSqr(),
            n = this.y.redSqr(),
            o = n.redSqr(),
            s = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
        s = s.redIAdd(s);
        var a = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
            h = a.redSqr().redISub(s).redISub(s);
        t = h;
        var u = o.redIAdd(o);
        u = (u = u.redIAdd(u)).redIAdd(u), r = a.redMul(s.redISub(h)).redISub(u), e = this.y.redAdd(this.y)
    } else {
        var l = this.z.redSqr(),
            f = this.y.redSqr(),
            c = this.x.redMul(f),
            d = this.x.redSub(l).redMul(this.x.redAdd(l));
        d = d.redAdd(d).redIAdd(d);
        var m = c.redIAdd(c),
            p = (m = m.redIAdd(m)).redAdd(m);
        t = d.redSqr().redISub(p), e = this.y.redAdd(this.z).redSqr().redISub(f).redISub(l);
        var g = f.redSqr();
        g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g), r = d.redMul(m.redISub(t)).redISub(g)
    }
    return this.curve.jpoint(t, r, e)
}, gn.prototype._dbl = function() {
    var t = this.curve.a,
        r = this.x,
        e = this.y,
        i = this.z,
        n = i.redSqr().redSqr(),
        o = r.redSqr(),
        s = e.redSqr(),
        a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(n)),
        h = r.redAdd(r),
        u = (h = h.redIAdd(h)).redMul(s),
        l = a.redSqr().redISub(u.redAdd(u)),
        f = u.redISub(l),
        c = s.redSqr();
    c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
    var d = a.redMul(f).redISub(c),
        m = e.redAdd(e).redMul(i);
    return this.curve.jpoint(l, d, m)
}, gn.prototype.trpl = function() {
    if (!this.curve.zeroA) return this.dbl().add(this);
    var t = this.x.redSqr(),
        r = this.y.redSqr(),
        e = this.z.redSqr(),
        i = r.redSqr(),
        n = t.redAdd(t).redIAdd(t),
        o = n.redSqr(),
        s = this.x.redAdd(r).redSqr().redISub(t).redISub(i),
        a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
        h = i.redIAdd(i);
    h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
    var u = n.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(h),
        l = r.redMul(u);
    l = (l = l.redIAdd(l)).redIAdd(l);
    var f = this.x.redMul(a).redISub(l);
    f = (f = f.redIAdd(f)).redIAdd(f);
    var c = this.y.redMul(u.redMul(h.redISub(u)).redISub(s.redMul(a)));
    c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
    var d = this.z.redAdd(s).redSqr().redISub(e).redISub(a);
    return this.curve.jpoint(f, c, d)
}, gn.prototype.mul = function(t, r) {
    return t = new Wr(t, r), this.curve._wnafMul(this, t)
}, gn.prototype.eq = function(t) {
    if ("affine" === t.type) return this.eq(t.toJ());
    if (this === t) return !0;
    var r = this.z.redSqr(),
        e = t.z.redSqr();
    if (0 !== this.x.redMul(e).redISub(t.x.redMul(r)).cmpn(0)) return !1;
    var i = r.redMul(this.z),
        n = e.redMul(t.z);
    return 0 === this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0)
}, gn.prototype.eqXToP = function(t) {
    var r = this.z.redSqr(),
        e = t.toRed(this.curve.red).redMul(r);
    if (0 === this.x.cmp(e)) return !0;
    for (var i = t.clone(), n = this.curve.redN.redMul(r);;) {
        if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
        if (e.redIAdd(n), 0 === this.x.cmp(e)) return !0
    }
}, gn.prototype.inspect = function() {
    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
}, gn.prototype.isInfinity = function() {
    return 0 === this.z.cmpn(0)
};
var vn = $i((function(t, r) {
        var e = r;
        e.base = un, e.short = mn, e.mont = null, e.edwards = null
    })),
    yn = $i((function(t, r) {
        var e, i = r,
            n = nn.assert;

        function o(t) {
            "short" === t.type ? this.curve = new vn.short(t) : "edwards" === t.type ? this.curve = new vn.edwards(t) : this.curve = new vn.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
        }

        function s(t, r) {
            Object.defineProperty(i, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    var e = new o(r);
                    return Object.defineProperty(i, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: e
                    }), e
                }
            })
        }
        i.PresetCurve = o, s("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: Zi.sha256,
            gRed: !1,
            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
        }), s("p224", {
            type: "short",
            prime: "p224",
            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
            hash: Zi.sha256,
            gRed: !1,
            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
        }), s("p256", {
            type: "short",
            prime: null,
            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
            hash: Zi.sha256,
            gRed: !1,
            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
        }), s("p384", {
            type: "short",
            prime: null,
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
            hash: Zi.sha384,
            gRed: !1,
            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
        }), s("p521", {
            type: "short",
            prime: null,
            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
            hash: Zi.sha512,
            gRed: !1,
            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
        }), s("curve25519", {
            type: "mont",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "76d06",
            b: "1",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: Zi.sha256,
            gRed: !1,
            g: ["9"]
        }), s("ed25519", {
            type: "edwards",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "-1",
            c: "1",
            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: Zi.sha256,
            gRed: !1,
            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
        });
        try {
            e = null.crash()
        } catch (a) {
            e = void 0
        }
        s("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: Zi.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [{
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3"
            }, {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15"
            }],
            gRed: !1,
            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", e]
        })
    }));

function wn(t) {
    if (!(this instanceof wn)) return new wn(t);
    this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
    var r = en.toArray(t.entropy, t.entropyEnc || "hex"),
        e = en.toArray(t.nonce, t.nonceEnc || "hex"),
        i = en.toArray(t.pers, t.persEnc || "hex");
    tn(r.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(r, e, i)
}
var An = wn;
wn.prototype._init = function(t, r, e) {
    var i = t.concat(r).concat(e);
    this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
    for (var n = 0; n < this.V.length; n++) this.K[n] = 0, this.V[n] = 1;
    this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656
}, wn.prototype._hmac = function() {
    return new Zi.hmac(this.hash, this.K)
}, wn.prototype._update = function(t) {
    var r = this._hmac().update(this.V).update([0]);
    t && (r = r.update(t)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
}, wn.prototype.reseed = function(t, r, e, i) {
    "string" != typeof r && (i = e, e = r, r = null), t = en.toArray(t, r), e = en.toArray(e, i), tn(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(e || [])), this._reseed = 1
}, wn.prototype.generate = function(t, r, e, i) {
    if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
    "string" != typeof r && (i = e, e = r, r = null), e && (e = en.toArray(e, i || "hex"), this._update(e));
    for (var n = []; n.length < t;) this.V = this._hmac().update(this.V).digest(), n = n.concat(this.V);
    var o = n.slice(0, t);
    return this._update(e), this._reseed++, en.encode(o, r)
};
var bn = nn.assert;

function Mn(t, r) {
    this.ec = t, this.priv = null, this.pub = null, r.priv && this._importPrivate(r.priv, r.privEnc), r.pub && this._importPublic(r.pub, r.pubEnc)
}
var En = Mn;
Mn.fromPublic = function(t, r, e) {
    return r instanceof Mn ? r : new Mn(t, {
        pub: r,
        pubEnc: e
    })
}, Mn.fromPrivate = function(t, r, e) {
    return r instanceof Mn ? r : new Mn(t, {
        priv: r,
        privEnc: e
    })
}, Mn.prototype.validate = function() {
    var t = this.getPublic();
    return t.isInfinity() ? {
        result: !1,
        reason: "Invalid public key"
    } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
        result: !0,
        reason: null
    } : {
        result: !1,
        reason: "Public key * N != O"
    } : {
        result: !1,
        reason: "Public key is not a point"
    }
}, Mn.prototype.getPublic = function(t, r) {
    return "string" == typeof t && (r = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, t) : this.pub
}, Mn.prototype.getPrivate = function(t) {
    return "hex" === t ? this.priv.toString(16, 2) : this.priv
}, Mn.prototype._importPrivate = function(t, r) {
    this.priv = new Wr(t, r || 16), this.priv = this.priv.umod(this.ec.curve.n)
}, Mn.prototype._importPublic = function(t, r) {
    if (t.x || t.y) return "mont" === this.ec.curve.type ? bn(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || bn(t.x && t.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(t.x, t.y));
    this.pub = this.ec.curve.decodePoint(t, r)
}, Mn.prototype.derive = function(t) {
    return t.validate() || bn(t.validate(), "public point not validated"), t.mul(this.priv).getX()
}, Mn.prototype.sign = function(t, r, e) {
    return this.ec.sign(t, this, r, e)
}, Mn.prototype.verify = function(t, r) {
    return this.ec.verify(t, r, this)
}, Mn.prototype.inspect = function() {
    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
};
var _n = nn.assert;

function kn(t, r) {
    if (t instanceof kn) return t;
    this._importDER(t, r) || (_n(t.r && t.s, "Signature without r or s"), this.r = new Wr(t.r, 16), this.s = new Wr(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
}
var Nn = kn;

function In() {
    this.place = 0
}

function xn(t, r) {
    var e = t[r.place++];
    if (!(128 & e)) return e;
    var i = 15 & e;
    if (0 === i || i > 4) return !1;
    for (var n = 0, o = 0, s = r.place; o < i; o++, s++) n <<= 8, n |= t[s], n >>>= 0;
    return !(n <= 127) && (r.place = s, n)
}

function Sn(t) {
    for (var r = 0, e = t.length - 1; !t[r] && !(128 & t[r + 1]) && r < e;) r++;
    return 0 === r ? t : t.slice(r)
}

function Pn(t, r) {
    if (r < 128) t.push(r);
    else {
        var e = 1 + (Math.log(r) / Math.LN2 >>> 3);
        for (t.push(128 | e); --e;) t.push(r >>> (e << 3) & 255);
        t.push(r)
    }
}
kn.prototype._importDER = function(t, r) {
    t = nn.toArray(t, r);
    var e = new In;
    if (48 !== t[e.place++]) return !1;
    var i = xn(t, e);
    if (!1 === i) return !1;
    if (i + e.place !== t.length) return !1;
    if (2 !== t[e.place++]) return !1;
    var n = xn(t, e);
    if (!1 === n) return !1;
    var o = t.slice(e.place, n + e.place);
    if (e.place += n, 2 !== t[e.place++]) return !1;
    var s = xn(t, e);
    if (!1 === s) return !1;
    if (t.length !== s + e.place) return !1;
    var a = t.slice(e.place, s + e.place);
    if (0 === o[0]) {
        if (!(128 & o[1])) return !1;
        o = o.slice(1)
    }
    if (0 === a[0]) {
        if (!(128 & a[1])) return !1;
        a = a.slice(1)
    }
    return this.r = new Wr(o), this.s = new Wr(a), this.recoveryParam = null, !0
}, kn.prototype.toDER = function(t) {
    var r = this.r.toArray(),
        e = this.s.toArray();
    for (128 & r[0] && (r = [0].concat(r)), 128 & e[0] && (e = [0].concat(e)), r = Sn(r), e = Sn(e); !(e[0] || 128 & e[1]);) e = e.slice(1);
    var i = [2];
    Pn(i, r.length), (i = i.concat(r)).push(2), Pn(i, e.length);
    var n = i.concat(e),
        o = [48];
    return Pn(o, n.length), o = o.concat(n), nn.encode(o, t)
};
var Rn = function() {
        throw new Error("unsupported")
    },
    Tn = nn.assert;

function Cn(t) {
    if (!(this instanceof Cn)) return new Cn(t);
    "string" == typeof t && (Tn(Object.prototype.hasOwnProperty.call(yn, t), "Unknown curve " + t), t = yn[t]), t instanceof yn.PresetCurve && (t = {
        curve: t
    }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
}
var Bn = Cn;
Cn.prototype.keyPair = function(t) {
    return new En(this, t)
}, Cn.prototype.keyFromPrivate = function(t, r) {
    return En.fromPrivate(this, t, r)
}, Cn.prototype.keyFromPublic = function(t, r) {
    return En.fromPublic(this, t, r)
}, Cn.prototype.genKeyPair = function(t) {
    t || (t = {});
    for (var r = new An({
            hash: this.hash,
            pers: t.pers,
            persEnc: t.persEnc || "utf8",
            entropy: t.entropy || Rn(this.hash.hmacStrength),
            entropyEnc: t.entropy && t.entropyEnc || "utf8",
            nonce: this.n.toArray()
        }), e = this.n.byteLength(), i = this.n.sub(new Wr(2));;) {
        var n = new Wr(r.generate(e));
        if (!(n.cmp(i) > 0)) return n.iaddn(1), this.keyFromPrivate(n)
    }
}, Cn.prototype._truncateToN = function(t, r) {
    var e = 8 * t.byteLength() - this.n.bitLength();
    return e > 0 && (t = t.ushrn(e)), !r && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
}, Cn.prototype.sign = function(t, r, e, i) {
    "object" == typeof e && (i = e, e = null), i || (i = {}), r = this.keyFromPrivate(r, e), t = this._truncateToN(new Wr(t, 16));
    for (var n = this.n.byteLength(), o = r.getPrivate().toArray("be", n), s = t.toArray("be", n), a = new An({
            hash: this.hash,
            entropy: o,
            nonce: s,
            pers: i.pers,
            persEnc: i.persEnc || "utf8"
        }), h = this.n.sub(new Wr(1)), u = 0;; u++) {
        var l = i.k ? i.k(u) : new Wr(a.generate(this.n.byteLength()));
        if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(h) >= 0)) {
            var f = this.g.mul(l);
            if (!f.isInfinity()) {
                var c = f.getX(),
                    d = c.umod(this.n);
                if (0 !== d.cmpn(0)) {
                    var m = l.invm(this.n).mul(d.mul(r.getPrivate()).iadd(t));
                    if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                        var p = (f.getY().isOdd() ? 1 : 0) | (0 !== c.cmp(d) ? 2 : 0);
                        return i.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m), p ^= 1), new Nn({
                            r: d,
                            s: m,
                            recoveryParam: p
                        })
                    }
                }
            }
        }
    }
}, Cn.prototype.verify = function(t, r, e, i) {
    t = this._truncateToN(new Wr(t, 16)), e = this.keyFromPublic(e, i);
    var n = (r = new Nn(r, "hex")).r,
        o = r.s;
    if (n.cmpn(1) < 0 || n.cmp(this.n) >= 0) return !1;
    if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
    var s, a = o.invm(this.n),
        h = a.mul(t).umod(this.n),
        u = a.mul(n).umod(this.n);
    return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(h, e.getPublic(), u)).isInfinity() && s.eqXToP(n) : !(s = this.g.mulAdd(h, e.getPublic(), u)).isInfinity() && 0 === s.getX().umod(this.n).cmp(n)
}, Cn.prototype.recoverPubKey = function(t, r, e, i) {
    Tn((3 & e) === e, "The recovery param is more than two bits"), r = new Nn(r, i);
    var n = this.n,
        o = new Wr(t),
        s = r.r,
        a = r.s,
        h = 1 & e,
        u = e >> 1;
    if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) throw new Error("Unable to find sencond key candinate");
    s = u ? this.curve.pointFromX(s.add(this.curve.n), h) : this.curve.pointFromX(s, h);
    var l = r.r.invm(n),
        f = n.sub(o).mul(l).umod(n),
        c = a.mul(l).umod(n);
    return this.g.mulAdd(f, s, c)
}, Cn.prototype.getKeyRecoveryParam = function(t, r, e, i) {
    if (null !== (r = new Nn(r, i)).recoveryParam) return r.recoveryParam;
    for (var n = 0; n < 4; n++) {
        var o;
        try {
            o = this.recoverPubKey(t, r, n)
        } catch (t) {
            continue
        }
        if (o.eq(e)) return n
    }
    throw new Error("Unable to find valid recovery factor")
};
var On = $i((function(t, r) {
    var e = r;
    e.version = "6.5.4", e.utils = nn, e.rand = function() {
        throw new Error("unsupported")
    }, e.curve = vn, e.curves = yn, e.ec = Bn, e.eddsa = null
})).ec;
const Ln = new m("signing-key/5.7.0");
let Fn = null;

function Un() {
    return Fn || (Fn = new On("secp256k1")), Fn
}
class Dn {
    constructor(t) {
        Y(this, "curve", "secp256k1"), Y(this, "privateKey", N(t)), 32 !== I(this.privateKey) && Ln.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
        const r = Un().keyFromPrivate(b(this.privateKey));
        Y(this, "publicKey", "0x" + r.getPublic(!1, "hex")), Y(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")), Y(this, "_isSigningKey", !0)
    }
    _addPoint(t) {
        const r = Un().keyFromPublic(b(this.publicKey)),
            e = Un().keyFromPublic(b(t));
        return "0x" + r.pub.add(e.pub).encodeCompressed("hex")
    }
    signDigest(t) {
        const r = Un().keyFromPrivate(b(this.privateKey)),
            e = b(t);
        32 !== e.length && Ln.throwArgumentError("bad digest length", "digest", t);
        const i = r.sign(e, {
            canonical: !0
        });
        return C({
            recoveryParam: i.recoveryParam,
            r: T("0x" + i.r.toString(16), 32),
            s: T("0x" + i.s.toString(16), 32)
        })
    }
    computeSharedSecret(t) {
        const r = Un().keyFromPrivate(b(this.privateKey)),
            e = Un().keyFromPublic(b(Gn(t)));
        return T("0x" + r.derive(e.getPublic()).toString(16), 32)
    }
    static isSigningKey(t) {
        return !(!t || !t._isSigningKey)
    }
}

function qn(t, r) {
    const e = C(r),
        i = {
            r: b(e.r),
            s: b(e.s)
        };
    return "0x" + Un().recoverPubKey(b(t), i, e.recoveryParam).encode("hex", !1)
}

function Gn(t, r) {
    const e = b(t);
    if (32 === e.length) {
        const t = new Dn(e);
        return r ? "0x" + Un().keyFromPrivate(e).getPublic(!0, "hex") : t.publicKey
    }
    return 33 === e.length ? r ? N(e) : "0x" + Un().keyFromPublic(e).getPublic(!1, "hex") : 65 === e.length ? r ? "0x" + Un().keyFromPublic(e).getPublic(!0, "hex") : N(e) : Ln.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
}
const zn = new m("transactions/5.7.0");
var Hn;

function Qn(t) {
    return "0x" === t ? null : Mt(t)
}

function Kn(t) {
    return "0x" === t ? St : G.from(t)
}! function(t) {
    t[t.legacy = 0] = "legacy", t[t.eip2930 = 1] = "eip2930", t[t.eip1559 = 2] = "eip1559"
}(Hn || (Hn = {}));
const Jn = [{
        name: "nonce",
        maxLength: 32,
        numeric: !0
    }, {
        name: "gasPrice",
        maxLength: 32,
        numeric: !0
    }, {
        name: "gasLimit",
        maxLength: 32,
        numeric: !0
    }, {
        name: "to",
        length: 20
    }, {
        name: "value",
        maxLength: 32,
        numeric: !0
    }, {
        name: "data"
    }],
    jn = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        type: !0,
        value: !0
    };

function Yn(t) {
    return Mt(x(at(x(Gn(t), 1)), 12))
}

function Xn(t, r) {
    return Yn(qn(b(t), r))
}

function Vn(t, r) {
    const e = E(G.from(t).toHexString());
    return e.length > 32 && zn.throwArgumentError("invalid length for " + r, "transaction:" + r, t), e
}

function Wn(t, r) {
    return {
        address: Mt(t),
        storageKeys: (r || []).map(((r, e) => (32 !== I(r) && zn.throwArgumentError("invalid access list storageKey", `accessList[${t}:${e}]`, r), r.toLowerCase())))
    }
}

function Zn(t) {
    if (Array.isArray(t)) return t.map(((t, r) => Array.isArray(t) ? (t.length > 2 && zn.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${r}]`, t), Wn(t[0], t[1])) : Wn(t.address, t.storageKeys)));
    const r = Object.keys(t).map((r => {
        const e = t[r].reduce(((t, r) => (t[r] = !0, t)), {});
        return Wn(r, Object.keys(e).sort())
    }));
    return r.sort(((t, r) => t.address.localeCompare(r.address))), r
}

function $n(t) {
    return Zn(t).map((t => [t.address, t.storageKeys]))
}

function to(t, r) {
    if (null != t.gasPrice) {
        const r = G.from(t.gasPrice),
            e = G.from(t.maxFeePerGas || 0);
        r.eq(e) || zn.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
            gasPrice: r,
            maxFeePerGas: e
        })
    }
    const e = [Vn(t.chainId || 0, "chainId"), Vn(t.nonce || 0, "nonce"), Vn(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), Vn(t.maxFeePerGas || 0, "maxFeePerGas"), Vn(t.gasLimit || 0, "gasLimit"), null != t.to ? Mt(t.to) : "0x", Vn(t.value || 0, "value"), t.data || "0x", $n(t.accessList || [])];
    if (r) {
        const t = C(r);
        e.push(Vn(t.recoveryParam, "recoveryParam")), e.push(E(t.r)), e.push(E(t.s))
    }
    return S(["0x02", ct(e)])
}

function ro(t, r) {
    const e = [Vn(t.chainId || 0, "chainId"), Vn(t.nonce || 0, "nonce"), Vn(t.gasPrice || 0, "gasPrice"), Vn(t.gasLimit || 0, "gasLimit"), null != t.to ? Mt(t.to) : "0x", Vn(t.value || 0, "value"), t.data || "0x", $n(t.accessList || [])];
    if (r) {
        const t = C(r);
        e.push(Vn(t.recoveryParam, "recoveryParam")), e.push(E(t.r)), e.push(E(t.s))
    }
    return S(["0x01", ct(e)])
}

function eo(t, r) {
    if (null == t.type || 0 === t.type) return null != t.accessList && zn.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", t),
        function(t, r) {
            W(t, jn);
            const e = [];
            Jn.forEach((function(r) {
                let i = t[r.name] || [];
                const n = {};
                r.numeric && (n.hexPad = "left"), i = b(N(i, n)), r.length && i.length !== r.length && i.length > 0 && zn.throwArgumentError("invalid length for " + r.name, "transaction:" + r.name, i), r.maxLength && (i = E(i), i.length > r.maxLength && zn.throwArgumentError("invalid length for " + r.name, "transaction:" + r.name, i)), e.push(N(i))
            }));
            let i = 0;
            if (null != t.chainId ? (i = t.chainId, "number" != typeof i && zn.throwArgumentError("invalid transaction.chainId", "transaction", t)) : r && !y(r) && r.v > 28 && (i = Math.floor((r.v - 35) / 2)), 0 !== i && (e.push(N(i)), e.push("0x"), e.push("0x")), !r) return ct(e);
            const n = C(r);
            let o = 27 + n.recoveryParam;
            return 0 !== i ? (e.pop(), e.pop(), e.pop(), o += 2 * i + 8, n.v > 28 && n.v !== o && zn.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", r)) : n.v !== o && zn.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", r), e.push(N(o)), e.push(E(b(n.r))), e.push(E(b(n.s))), ct(e)
        }(t, r);
    switch (t.type) {
        case 1:
            return ro(t, r);
        case 2:
            return to(t, r)
    }
    return zn.throwError(`unsupported transaction type: ${t.type}`, m.errors.UNSUPPORTED_OPERATION, {
        operation: "serializeTransaction",
        transactionType: t.type
    })
}

function io(t, r, e) {
    try {
        const e = Kn(r[0]).toNumber();
        if (0 !== e && 1 !== e) throw new Error("bad recid");
        t.v = e
    } catch (i) {
        zn.throwArgumentError("invalid v for transaction type: 1", "v", r[0])
    }
    t.r = T(r[1], 32), t.s = T(r[2], 32);
    try {
        const r = at(e(t));
        t.from = Xn(r, {
            r: t.r,
            s: t.s,
            recoveryParam: t.v
        })
    } catch (i) {}
}

function no(t) {
    const r = b(t);
    if (r[0] > 127) return function(t) {
        const r = pt(t);
        9 !== r.length && 6 !== r.length && zn.throwArgumentError("invalid raw transaction", "rawTransaction", t);
        const e = {
            nonce: Kn(r[0]).toNumber(),
            gasPrice: Kn(r[1]),
            gasLimit: Kn(r[2]),
            to: Qn(r[3]),
            value: Kn(r[4]),
            data: r[5],
            chainId: 0
        };
        if (6 === r.length) return e;
        try {
            e.v = G.from(r[6]).toNumber()
        } catch (i) {
            return e
        }
        if (e.r = T(r[7], 32), e.s = T(r[8], 32), G.from(e.r).isZero() && G.from(e.s).isZero()) e.chainId = e.v, e.v = 0;
        else {
            e.chainId = Math.floor((e.v - 35) / 2), e.chainId < 0 && (e.chainId = 0);
            let n = e.v - 27;
            const o = r.slice(0, 6);
            0 !== e.chainId && (o.push(N(e.chainId)), o.push("0x"), o.push("0x"), n -= 2 * e.chainId + 8);
            const s = at(ct(o));
            try {
                e.from = Xn(s, {
                    r: N(e.r),
                    s: N(e.s),
                    recoveryParam: n
                })
            } catch (i) {}
            e.hash = at(t)
        }
        return e.type = null, e
    }(r);
    switch (r[0]) {
        case 1:
            return function(t) {
                const r = pt(t.slice(1));
                8 !== r.length && 11 !== r.length && zn.throwArgumentError("invalid component count for transaction type: 1", "payload", N(t));
                const e = {
                    type: 1,
                    chainId: Kn(r[0]).toNumber(),
                    nonce: Kn(r[1]).toNumber(),
                    gasPrice: Kn(r[2]),
                    gasLimit: Kn(r[3]),
                    to: Qn(r[4]),
                    value: Kn(r[5]),
                    data: r[6],
                    accessList: Zn(r[7])
                };
                return 8 === r.length || (e.hash = at(t), io(e, r.slice(8), ro)), e
            }(r);
        case 2:
            return function(t) {
                const r = pt(t.slice(1));
                9 !== r.length && 12 !== r.length && zn.throwArgumentError("invalid component count for transaction type: 2", "payload", N(t));
                const e = Kn(r[2]),
                    i = Kn(r[3]),
                    n = {
                        type: 2,
                        chainId: Kn(r[0]).toNumber(),
                        nonce: Kn(r[1]).toNumber(),
                        maxPriorityFeePerGas: e,
                        maxFeePerGas: i,
                        gasPrice: null,
                        gasLimit: Kn(r[4]),
                        to: Qn(r[5]),
                        value: Kn(r[6]),
                        data: r[7],
                        accessList: Zn(r[8])
                    };
                return 9 === r.length || (n.hash = at(t), io(n, r.slice(9), to)), n
            }(r)
    }
    return zn.throwError(`unsupported transaction type: ${r[0]}`, m.errors.UNSUPPORTED_OPERATION, {
        operation: "parseTransaction",
        transactionType: r[0]
    })
}
class oo {
    constructor(t) {
        Y(this, "alphabet", t), Y(this, "base", t.length), Y(this, "_alphabetMap", {}), Y(this, "_leader", t.charAt(0));
        for (let r = 0; r < t.length; r++) this._alphabetMap[t.charAt(r)] = r
    }
    encode(t) {
        let r = b(t);
        if (0 === r.length) return "";
        let e = [0];
        for (let n = 0; n < r.length; ++n) {
            let t = r[n];
            for (let r = 0; r < e.length; ++r) t += e[r] << 8, e[r] = t % this.base, t = t / this.base | 0;
            for (; t > 0;) e.push(t % this.base), t = t / this.base | 0
        }
        let i = "";
        for (let n = 0; 0 === r[n] && n < r.length - 1; ++n) i += this._leader;
        for (let n = e.length - 1; n >= 0; --n) i += this.alphabet[e[n]];
        return i
    }
    decode(t) {
        if ("string" != typeof t) throw new TypeError("Expected String");
        let r = [];
        if (0 === t.length) return new Uint8Array(r);
        r.push(0);
        for (let e = 0; e < t.length; e++) {
            let i = this._alphabetMap[t[e]];
            if (void 0 === i) throw new Error("Non-base" + this.base + " character");
            let n = i;
            for (let t = 0; t < r.length; ++t) n += r[t] * this.base, r[t] = 255 & n, n >>= 8;
            for (; n > 0;) r.push(255 & n), n >>= 8
        }
        for (let e = 0; t[e] === this._leader && e < t.length - 1; ++e) r.push(0);
        return b(new Uint8Array(r.reverse()))
    }
}
new oo("abcdefghijklmnopqrstuvwxyz234567");
const so = new oo("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
var ao;
! function(t) {
    t.sha256 = "sha256", t.sha512 = "sha512"
}(ao || (ao = {}));
const ho = new m("sha2/5.7.0");

function uo(t) {
    return "0x" + Zi.ripemd160().update(b(t)).digest("hex")
}

function lo(t) {
    return "0x" + Zi.sha256().update(b(t)).digest("hex")
}

function fo(t) {
    return "0x" + Zi.sha512().update(b(t)).digest("hex")
}

function co(t, r, e) {
    return ao[t] || ho.throwError("unsupported algorithm " + t, m.errors.UNSUPPORTED_OPERATION, {
        operation: "hmac",
        algorithm: t
    }), "0x" + Zi.hmac(Zi[t], b(r)).update(b(e)).digest("hex")
}
const mo = new m("networks/5.7.1");

function po(t) {
    const r = function(r, e) {
        null == e && (e = {});
        const i = [];
        if (r.InfuraProvider && "-" !== e.infura) try {
            i.push(new r.InfuraProvider(t, e.infura))
        } catch (n) {}
        if (r.EtherscanProvider && "-" !== e.etherscan) try {
            i.push(new r.EtherscanProvider(t, e.etherscan))
        } catch (n) {}
        if (r.AlchemyProvider && "-" !== e.alchemy) try {
            i.push(new r.AlchemyProvider(t, e.alchemy))
        } catch (n) {}
        if (r.PocketProvider && "-" !== e.pocket) {
            const o = ["goerli", "ropsten", "rinkeby", "sepolia"];
            try {
                const n = new r.PocketProvider(t, e.pocket);
                n.network && -1 === o.indexOf(n.network.name) && i.push(n)
            } catch (n) {}
        }
        if (r.CloudflareProvider && "-" !== e.cloudflare) try {
            i.push(new r.CloudflareProvider(t))
        } catch (n) {}
        if (r.AnkrProvider && "-" !== e.ankr) try {
            const n = ["ropsten"],
                o = new r.AnkrProvider(t, e.ankr);
            o.network && -1 === n.indexOf(o.network.name) && i.push(o)
        } catch (n) {}
        if (0 === i.length) return null;
        if (r.FallbackProvider) {
            let n = 1;
            return null != e.quorum ? n = e.quorum : "homestead" === t && (n = 2), new r.FallbackProvider(i, n)
        }
        return i[0]
    };
    return r.renetwork = function(t) {
        return po(t)
    }, r
}

function go(t, r) {
    const e = function(e, i) {
        return e.JsonRpcProvider ? new e.JsonRpcProvider(t, r) : null
    };
    return e.renetwork = function(r) {
        return go(t, r)
    }, e
}
const vo = {
        chainId: 1,
        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        name: "homestead",
        _defaultProvider: po("homestead")
    },
    yo = {
        chainId: 3,
        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        name: "ropsten",
        _defaultProvider: po("ropsten")
    },
    wo = {
        chainId: 63,
        name: "classicMordor",
        _defaultProvider: go("https://www.ethercluster.com/mordor", "classicMordor")
    },
    Ao = {
        unspecified: {
            chainId: 0,
            name: "unspecified"
        },
        homestead: vo,
        mainnet: vo,
        morden: {
            chainId: 2,
            name: "morden"
        },
        ropsten: yo,
        testnet: yo,
        rinkeby: {
            chainId: 4,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "rinkeby",
            _defaultProvider: po("rinkeby")
        },
        kovan: {
            chainId: 42,
            name: "kovan",
            _defaultProvider: po("kovan")
        },
        goerli: {
            chainId: 5,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "goerli",
            _defaultProvider: po("goerli")
        },
        kintsugi: {
            chainId: 1337702,
            name: "kintsugi"
        },
        sepolia: {
            chainId: 11155111,
            name: "sepolia",
            _defaultProvider: po("sepolia")
        },
        classic: {
            chainId: 61,
            name: "classic",
            _defaultProvider: go("https://www.ethercluster.com/etc", "classic")
        },
        classicMorden: {
            chainId: 62,
            name: "classicMorden"
        },
        classicMordor: wo,
        classicTestnet: wo,
        classicKotti: {
            chainId: 6,
            name: "classicKotti",
            _defaultProvider: go("https://www.ethercluster.com/kotti", "classicKotti")
        },
        xdai: {
            chainId: 100,
            name: "xdai"
        },
        matic: {
            chainId: 137,
            name: "matic",
            _defaultProvider: po("matic")
        },
        maticmum: {
            chainId: 80001,
            name: "maticmum"
        },
        optimism: {
            chainId: 10,
            name: "optimism",
            _defaultProvider: po("optimism")
        },
        "optimism-kovan": {
            chainId: 69,
            name: "optimism-kovan"
        },
        "optimism-goerli": {
            chainId: 420,
            name: "optimism-goerli"
        },
        arbitrum: {
            chainId: 42161,
            name: "arbitrum"
        },
        "arbitrum-rinkeby": {
            chainId: 421611,
            name: "arbitrum-rinkeby"
        },
        "arbitrum-goerli": {
            chainId: 421613,
            name: "arbitrum-goerli"
        },
        bnb: {
            chainId: 56,
            name: "bnb"
        },
        bnbt: {
            chainId: 97,
            name: "bnbt"
        }
    };

function bo(t) {
    if (null == t) return null;
    if ("number" == typeof t) {
        for (const r in Ao) {
            const e = Ao[r];
            if (e.chainId === t) return {
                name: e.name,
                chainId: e.chainId,
                ensAddress: e.ensAddress || null,
                _defaultProvider: e._defaultProvider || null
            }
        }
        return {
            chainId: t,
            name: "unknown"
        }
    }
    if ("string" == typeof t) {
        const r = Ao[t];
        return null == r ? null : {
            name: r.name,
            chainId: r.chainId,
            ensAddress: r.ensAddress,
            _defaultProvider: r._defaultProvider || null
        }
    }
    const r = Ao[t.name];
    if (!r) return "number" != typeof t.chainId && mo.throwArgumentError("invalid network chainId", "network", t), t;
    0 !== t.chainId && t.chainId !== r.chainId && mo.throwArgumentError("network chainId mismatch", "network", t);
    let e = t._defaultProvider || null;
    var i;
    return null == e && r._defaultProvider && (e = (i = r._defaultProvider) && "function" == typeof i.renetwork ? r._defaultProvider.renetwork(t) : r._defaultProvider), {
        name: t.name,
        chainId: r.chainId,
        ensAddress: t.ensAddress || r.ensAddress || null,
        _defaultProvider: e
    }
}
var Mo = globalThis && globalThis.__awaiter || function(t, r, e, i) {
    return new(e || (e = Promise))((function(n, o) {
        function s(t) {
            try {
                h(i.next(t))
            } catch (r) {
                o(r)
            }
        }

        function a(t) {
            try {
                h(i.throw(t))
            } catch (r) {
                o(r)
            }
        }

        function h(t) {
            var r;
            t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e((function(t) {
                t(r)
            }))).then(s, a)
        }
        h((i = i.apply(t, r || [])).next())
    }))
};

function Eo(t, r) {
    return Mo(this, void 0, void 0, (function*() {
        null == r && (r = {});
        const e = {
            method: r.method || "GET",
            headers: r.headers || {},
            body: r.body || void 0
        };
        if (!0 !== r.skipFetchSetup && (e.mode = "cors", e.cache = "no-cache", e.credentials = "same-origin", e.redirect = "follow", e.referrer = "client"), null != r.fetchOptions) {
            const t = r.fetchOptions;
            t.mode && (e.mode = t.mode), t.cache && (e.cache = t.cache), t.credentials && (e.credentials = t.credentials), t.redirect && (e.redirect = t.redirect), t.referrer && (e.referrer = t.referrer)
        }
        const i = yield fetch(t, e), n = yield i.arrayBuffer(), o = {};
        return i.headers.forEach ? i.headers.forEach(((t, r) => {
            o[r.toLowerCase()] = t
        })) : i.headers.keys().forEach((t => {
            o[t.toLowerCase()] = i.headers.get(t)
        })), {
            headers: o,
            statusCode: i.status,
            statusMessage: i.statusText,
            body: b(new Uint8Array(n))
        }
    }))
}
var _o = globalThis && globalThis.__awaiter || function(t, r, e, i) {
    return new(e || (e = Promise))((function(n, o) {
        function s(t) {
            try {
                h(i.next(t))
            } catch (r) {
                o(r)
            }
        }

        function a(t) {
            try {
                h(i.throw(t))
            } catch (r) {
                o(r)
            }
        }

        function h(t) {
            var r;
            t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e((function(t) {
                t(r)
            }))).then(s, a)
        }
        h((i = i.apply(t, r || [])).next())
    }))
};
const ko = new m("web/5.7.1");

function No(t) {
    return new Promise((r => {
        setTimeout(r, t)
    }))
}

function Io(t, r) {
    if (null == t) return null;
    if ("string" == typeof t) return t;
    if (y(t)) {
        if (r && ("text" === r.split("/")[0] || "application/json" === r.split(";")[0].trim())) try {
            return jt(t)
        } catch (e) {}
        return N(t)
    }
    return t
}

function xo(t, r, e) {
    const i = "object" == typeof t && null != t.throttleLimit ? t.throttleLimit : 12;
    ko.assertArgument(i > 0 && i % 1 == 0, "invalid connection throttle limit", "connection.throttleLimit", i);
    const n = "object" == typeof t ? t.throttleCallback : null,
        o = "object" == typeof t && "number" == typeof t.throttleSlotInterval ? t.throttleSlotInterval : 100;
    ko.assertArgument(o > 0 && o % 1 == 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", o);
    const s = "object" == typeof t && !!t.errorPassThrough,
        a = {};
    let h = null;
    const u = {
        method: "GET"
    };
    let l = !1,
        f = 12e4;
    if ("string" == typeof t) h = t;
    else if ("object" == typeof t) {
        if (null != t && null != t.url || ko.throwArgumentError("missing URL", "connection.url", t), h = t.url, "number" == typeof t.timeout && t.timeout > 0 && (f = t.timeout), t.headers)
            for (const r in t.headers) a[r.toLowerCase()] = {
                key: r,
                value: String(t.headers[r])
            }, ["if-none-match", "if-modified-since"].indexOf(r.toLowerCase()) >= 0 && (l = !0);
        if (u.allowGzip = !!t.allowGzip, null != t.user && null != t.password) {
            "https:" !== h.substring(0, 6) && !0 !== t.allowInsecureAuthentication && ko.throwError("basic authentication requires a secure https url", m.errors.INVALID_ARGUMENT, {
                argument: "url",
                url: h,
                user: t.user,
                password: "[REDACTED]"
            });
            const r = t.user + ":" + t.password;
            a.authorization = {
                key: "Authorization",
                value: "Basic " + Wt(Ht(r))
            }
        }
        null != t.skipFetchSetup && (u.skipFetchSetup = !!t.skipFetchSetup), null != t.fetchOptions && (u.fetchOptions = Z(t.fetchOptions))
    }
    const c = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
        d = h ? h.match(c) : null;
    if (d) try {
        const t = {
            statusCode: 200,
            statusMessage: "OK",
            headers: {
                "content-type": d[1] || "text/plain"
            },
            body: d[2] ? Vt(d[3]) : (p = d[3], Ht(p.replace(/%([0-9a-f][0-9a-f])/gi, ((t, r) => String.fromCharCode(parseInt(r, 16))))))
        };
        let r = t.body;
        return e && (r = e(t.body, t)), Promise.resolve(r)
    } catch (w) {
        ko.throwError("processing response error", m.errors.SERVER_ERROR, {
            body: Io(d[1], d[2]),
            error: w,
            requestBody: null,
            requestMethod: "GET",
            url: h
        })
    }
    var p;
    r && (u.method = "POST", u.body = r, null == a["content-type"] && (a["content-type"] = {
        key: "Content-Type",
        value: "application/octet-stream"
    }), null == a["content-length"] && (a["content-length"] = {
        key: "Content-Length",
        value: String(r.length)
    }));
    const g = {};
    Object.keys(a).forEach((t => {
        const r = a[t];
        g[r.key] = r.value
    })), u.headers = g;
    const v = function() {
            let t = null;
            return {
                promise: new Promise((function(r, e) {
                    f && (t = setTimeout((() => {
                        null != t && (t = null, e(ko.makeError("timeout", m.errors.TIMEOUT, {
                            requestBody: Io(u.body, g["content-type"]),
                            requestMethod: u.method,
                            timeout: f,
                            url: h
                        })))
                    }), f))
                })),
                cancel: function() {
                    null != t && (clearTimeout(t), t = null)
                }
            }
        }(),
        y = function() {
            return _o(this, void 0, void 0, (function*() {
                for (let t = 0; t < i; t++) {
                    let r = null;
                    try {
                        if (r = yield Eo(h, u), t < i)
                            if (301 === r.statusCode || 302 === r.statusCode) {
                                const t = r.headers.location || "";
                                if ("GET" === u.method && t.match(/^https:/)) {
                                    h = r.headers.location;
                                    continue
                                }
                            } else if (429 === r.statusCode) {
                            let e = !0;
                            if (n && (e = yield n(t, h)), e) {
                                let e = 0;
                                const i = r.headers["retry-after"];
                                e = "string" == typeof i && i.match(/^[1-9][0-9]*$/) ? 1e3 * parseInt(i) : o * parseInt(String(Math.random() * Math.pow(2, t))), yield No(e);
                                continue
                            }
                        }
                    } catch (w) {
                        r = w.response, null == r && (v.cancel(), ko.throwError("missing response", m.errors.SERVER_ERROR, {
                            requestBody: Io(u.body, g["content-type"]),
                            requestMethod: u.method,
                            serverError: w,
                            url: h
                        }))
                    }
                    let a = r.body;
                    if (l && 304 === r.statusCode ? a = null : !s && (r.statusCode < 200 || r.statusCode >= 300) && (v.cancel(), ko.throwError("bad response", m.errors.SERVER_ERROR, {
                            status: r.statusCode,
                            headers: r.headers,
                            body: Io(a, r.headers ? r.headers["content-type"] : null),
                            requestBody: Io(u.body, g["content-type"]),
                            requestMethod: u.method,
                            url: h
                        })), e) try {
                        const t = yield e(a, r);
                        return v.cancel(), t
                    } catch (w) {
                        if (w.throttleRetry && t < i) {
                            let r = !0;
                            if (n && (r = yield n(t, h)), r) {
                                const r = o * parseInt(String(Math.random() * Math.pow(2, t)));
                                yield No(r);
                                continue
                            }
                        }
                        v.cancel(), ko.throwError("processing response error", m.errors.SERVER_ERROR, {
                            body: Io(a, r.headers ? r.headers["content-type"] : null),
                            error: w,
                            requestBody: Io(u.body, g["content-type"]),
                            requestMethod: u.method,
                            url: h
                        })
                    }
                    return v.cancel(), a
                }
                return ko.throwError("failed response", m.errors.SERVER_ERROR, {
                    requestBody: Io(u.body, g["content-type"]),
                    requestMethod: u.method,
                    url: h
                })
            }))
        }();
    return Promise.race([v.promise, y])
}

function So(t, r, e) {
    let i = null;
    if (null != r) {
        i = Ht(r);
        const e = "string" == typeof t ? {
            url: t
        } : Z(t);
        if (e.headers) {
            0 !== Object.keys(e.headers).filter((t => "content-type" === t.toLowerCase())).length || (e.headers = Z(e.headers), e.headers["content-type"] = "application/json")
        } else e.headers = {
            "content-type": "application/json"
        };
        t = e
    }
    return xo(t, i, ((t, r) => {
        let i = null;
        if (null != t) try {
            i = JSON.parse(jt(t))
        } catch (n) {
            ko.throwError("invalid JSON", m.errors.SERVER_ERROR, {
                body: t,
                error: n
            })
        }
        return e && (i = e(i, r)), i
    }))
}

function Po(t, r) {
    return r || (r = {}), null == (r = Z(r)).floor && (r.floor = 0), null == r.ceiling && (r.ceiling = 1e4), null == r.interval && (r.interval = 250), new Promise((function(e, i) {
        let n = null,
            o = !1;
        const s = () => !o && (o = !0, n && clearTimeout(n), !0);
        r.timeout && (n = setTimeout((() => {
            s() && i(new Error("timeout"))
        }), r.timeout));
        const a = r.retryLimit;
        let h = 0;
        ! function n() {
            return t().then((function(t) {
                if (void 0 !== t) s() && e(t);
                else if (r.oncePoll) r.oncePoll.once("poll", n);
                else if (r.onceBlock) r.onceBlock.once("block", n);
                else if (!o) {
                    if (h++, h > a) return void(s() && i(new Error("retry limit reached")));
                    let t = r.interval * parseInt(String(Math.random() * Math.pow(2, h)));
                    t < r.floor && (t = r.floor), t > r.ceiling && (t = r.ceiling), setTimeout(n, t)
                }
                return null
            }), (function(t) {
                s() && i(t)
            }))
        }()
    }))
}
for (var Ro = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", To = {}, Co = 0; Co < Ro.length; Co++) {
    var Bo = Ro.charAt(Co);
    if (void 0 !== To[Bo]) throw new TypeError(Bo + " is ambiguous");
    To[Bo] = Co
}

function Oo(t) {
    var r = t >> 25;
    return (33554431 & t) << 5 ^ 996825010 & -(r >> 0 & 1) ^ 642813549 & -(r >> 1 & 1) ^ 513874426 & -(r >> 2 & 1) ^ 1027748829 & -(r >> 3 & 1) ^ 705979059 & -(r >> 4 & 1)
}

function Lo(t) {
    for (var r = 1, e = 0; e < t.length; ++e) {
        var i = t.charCodeAt(e);
        if (i < 33 || i > 126) return "Invalid prefix (" + t + ")";
        r = Oo(r) ^ i >> 5
    }
    for (r = Oo(r), e = 0; e < t.length; ++e) {
        var n = t.charCodeAt(e);
        r = Oo(r) ^ 31 & n
    }
    return r
}

function Fo(t, r) {
    if (r = r || 90, t.length < 8) return t + " too short";
    if (t.length > r) return "Exceeds length limit";
    var e = t.toLowerCase(),
        i = t.toUpperCase();
    if (t !== e && t !== i) return "Mixed-case string " + t;
    var n = (t = e).lastIndexOf("1");
    if (-1 === n) return "No separator character for " + t;
    if (0 === n) return "Missing prefix for " + t;
    var o = t.slice(0, n),
        s = t.slice(n + 1);
    if (s.length < 6) return "Data too short";
    var a = Lo(o);
    if ("string" == typeof a) return a;
    for (var h = [], u = 0; u < s.length; ++u) {
        var l = s.charAt(u),
            f = To[l];
        if (void 0 === f) return "Unknown character " + l;
        a = Oo(a) ^ f, u + 6 >= s.length || h.push(f)
    }
    return 1 !== a ? "Invalid checksum for " + t : {
        prefix: o,
        words: h
    }
}

function Uo(t, r, e, i) {
    for (var n = 0, o = 0, s = (1 << e) - 1, a = [], h = 0; h < t.length; ++h)
        for (n = n << r | t[h], o += r; o >= e;) o -= e, a.push(n >> o & s);
    if (i) o > 0 && a.push(n << e - o & s);
    else {
        if (o >= r) return "Excess padding";
        if (n << e - o & s) return "Non-zero padding"
    }
    return a
}
var Do = {
    decodeUnsafe: function() {
        var t = Fo.apply(null, arguments);
        if ("object" == typeof t) return t
    },
    decode: function(t) {
        var r = Fo.apply(null, arguments);
        if ("object" == typeof r) return r;
        throw new Error(r)
    },
    encode: function(t, r, e) {
        if (e = e || 90, t.length + 7 + r.length > e) throw new TypeError("Exceeds length limit");
        var i = Lo(t = t.toLowerCase());
        if ("string" == typeof i) throw new Error(i);
        for (var n = t + "1", o = 0; o < r.length; ++o) {
            var s = r[o];
            if (s >> 5 != 0) throw new Error("Non 5-bit word");
            i = Oo(i) ^ s, n += Ro.charAt(s)
        }
        for (o = 0; o < 6; ++o) i = Oo(i);
        for (i ^= 1, o = 0; o < 6; ++o) {
            n += Ro.charAt(i >> 5 * (5 - o) & 31)
        }
        return n
    },
    toWordsUnsafe: function(t) {
        var r = Uo(t, 8, 5, !0);
        if (Array.isArray(r)) return r
    },
    toWords: function(t) {
        var r = Uo(t, 8, 5, !0);
        if (Array.isArray(r)) return r;
        throw new Error(r)
    },
    fromWordsUnsafe: function(t) {
        var r = Uo(t, 5, 8, !1);
        if (Array.isArray(r)) return r
    },
    fromWords: function(t) {
        var r = Uo(t, 5, 8, !1);
        if (Array.isArray(r)) return r;
        throw new Error(r)
    }
};
const qo = e(Do),
    Go = "providers/5.7.1",
    zo = new m(Go);
class Ho {
    constructor() {
        this.formats = this.getDefaultFormats()
    }
    getDefaultFormats() {
        const t = {},
            r = this.address.bind(this),
            e = this.bigNumber.bind(this),
            i = this.blockTag.bind(this),
            n = this.data.bind(this),
            o = this.hash.bind(this),
            s = this.hex.bind(this),
            a = this.number.bind(this),
            h = this.type.bind(this);
        return t.transaction = {
            hash: o,
            type: h,
            accessList: Ho.allowNull(this.accessList.bind(this), null),
            blockHash: Ho.allowNull(o, null),
            blockNumber: Ho.allowNull(a, null),
            transactionIndex: Ho.allowNull(a, null),
            confirmations: Ho.allowNull(a, null),
            from: r,
            gasPrice: Ho.allowNull(e),
            maxPriorityFeePerGas: Ho.allowNull(e),
            maxFeePerGas: Ho.allowNull(e),
            gasLimit: e,
            to: Ho.allowNull(r, null),
            value: e,
            nonce: a,
            data: n,
            r: Ho.allowNull(this.uint256),
            s: Ho.allowNull(this.uint256),
            v: Ho.allowNull(a),
            creates: Ho.allowNull(r, null),
            raw: Ho.allowNull(n)
        }, t.transactionRequest = {
            from: Ho.allowNull(r),
            nonce: Ho.allowNull(a),
            gasLimit: Ho.allowNull(e),
            gasPrice: Ho.allowNull(e),
            maxPriorityFeePerGas: Ho.allowNull(e),
            maxFeePerGas: Ho.allowNull(e),
            to: Ho.allowNull(r),
            value: Ho.allowNull(e),
            data: Ho.allowNull((t => this.data(t, !0))),
            type: Ho.allowNull(a),
            accessList: Ho.allowNull(this.accessList.bind(this), null)
        }, t.receiptLog = {
            transactionIndex: a,
            blockNumber: a,
            transactionHash: o,
            address: r,
            topics: Ho.arrayOf(o),
            data: n,
            logIndex: a,
            blockHash: o
        }, t.receipt = {
            to: Ho.allowNull(this.address, null),
            from: Ho.allowNull(this.address, null),
            contractAddress: Ho.allowNull(r, null),
            transactionIndex: a,
            root: Ho.allowNull(s),
            gasUsed: e,
            logsBloom: Ho.allowNull(n),
            blockHash: o,
            transactionHash: o,
            logs: Ho.arrayOf(this.receiptLog.bind(this)),
            blockNumber: a,
            confirmations: Ho.allowNull(a, null),
            cumulativeGasUsed: e,
            effectiveGasPrice: Ho.allowNull(e),
            status: Ho.allowNull(a),
            type: h
        }, t.block = {
            hash: Ho.allowNull(o),
            parentHash: o,
            number: a,
            timestamp: a,
            nonce: Ho.allowNull(s),
            difficulty: this.difficulty.bind(this),
            gasLimit: e,
            gasUsed: e,
            miner: Ho.allowNull(r),
            extraData: n,
            transactions: Ho.allowNull(Ho.arrayOf(o)),
            baseFeePerGas: Ho.allowNull(e)
        }, t.blockWithTransactions = Z(t.block), t.blockWithTransactions.transactions = Ho.allowNull(Ho.arrayOf(this.transactionResponse.bind(this))), t.filter = {
            fromBlock: Ho.allowNull(i, void 0),
            toBlock: Ho.allowNull(i, void 0),
            blockHash: Ho.allowNull(o, void 0),
            address: Ho.allowNull(r, void 0),
            topics: Ho.allowNull(this.topics.bind(this), void 0)
        }, t.filterLog = {
            blockNumber: Ho.allowNull(a),
            blockHash: Ho.allowNull(o),
            transactionIndex: a,
            removed: Ho.allowNull(this.boolean.bind(this)),
            address: r,
            data: Ho.allowFalsish(n, "0x"),
            topics: Ho.arrayOf(o),
            transactionHash: o,
            logIndex: a
        }, t
    }
    accessList(t) {
        return Zn(t || [])
    }
    number(t) {
        return "0x" === t ? 0 : G.from(t).toNumber()
    }
    type(t) {
        return "0x" === t || null == t ? 0 : G.from(t).toNumber()
    }
    bigNumber(t) {
        return G.from(t)
    }
    boolean(t) {
        if ("boolean" == typeof t) return t;
        if ("string" == typeof t) {
            if ("true" === (t = t.toLowerCase())) return !0;
            if ("false" === t) return !1
        }
        throw new Error("invalid boolean - " + t)
    }
    hex(t, r) {
        return "string" == typeof t && (r || "0x" === t.substring(0, 2) || (t = "0x" + t), k(t)) ? t.toLowerCase() : zo.throwArgumentError("invalid hash", "value", t)
    }
    data(t, r) {
        const e = this.hex(t, r);
        if (e.length % 2 != 0) throw new Error("invalid data; odd-length - " + t);
        return e
    }
    address(t) {
        return Mt(t)
    }
    callAddress(t) {
        if (!k(t, 32)) return null;
        const r = Mt(x(t, 12));
        return r === It ? null : r
    }
    contractAddress(t) {
        return kt(t)
    }
    blockTag(t) {
        if (null == t) return "latest";
        if ("earliest" === t) return "0x0";
        switch (t) {
            case "earliest":
                return "0x0";
            case "latest":
            case "pending":
            case "safe":
            case "finalized":
                return t
        }
        if ("number" == typeof t || k(t)) return P(t);
        throw new Error("invalid blockTag")
    }
    hash(t, r) {
        const e = this.hex(t, r);
        return 32 !== I(e) ? zo.throwArgumentError("invalid hash", "value", t) : e
    }
    difficulty(t) {
        if (null == t) return null;
        const r = G.from(t);
        try {
            return r.toNumber()
        } catch (e) {}
        return null
    }
    uint256(t) {
        if (!k(t)) throw new Error("invalid uint256");
        return T(t, 32)
    }
    _block(t, r) {
        null != t.author && null == t.miner && (t.miner = t.author);
        const e = null != t._difficulty ? t._difficulty : t.difficulty,
            i = Ho.check(r, t);
        return i._difficulty = null == e ? null : G.from(e), i
    }
    block(t) {
        return this._block(t, this.formats.block)
    }
    blockWithTransactions(t) {
        return this._block(t, this.formats.blockWithTransactions)
    }
    transactionRequest(t) {
        return Ho.check(this.formats.transactionRequest, t)
    }
    transactionResponse(t) {
        null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas), t.to && G.from(t.to).isZero() && (t.to = "0x0000000000000000000000000000000000000000"), null != t.input && null == t.data && (t.data = t.input), null == t.to && null == t.creates && (t.creates = this.contractAddress(t)), 1 !== t.type && 2 !== t.type || null != t.accessList || (t.accessList = []);
        const r = Ho.check(this.formats.transaction, t);
        if (null != t.chainId) {
            let e = t.chainId;
            k(e) && (e = G.from(e).toNumber()), r.chainId = e
        } else {
            let e = t.networkId;
            null == e && null == r.v && (e = t.chainId), k(e) && (e = G.from(e).toNumber()), "number" != typeof e && null != r.v && (e = (r.v - 35) / 2, e < 0 && (e = 0), e = parseInt(e)), "number" != typeof e && (e = 0), r.chainId = e
        }
        return r.blockHash && "x" === r.blockHash.replace(/0/g, "") && (r.blockHash = null), r
    }
    transaction(t) {
        return no(t)
    }
    receiptLog(t) {
        return Ho.check(this.formats.receiptLog, t)
    }
    receipt(t) {
        const r = Ho.check(this.formats.receipt, t);
        if (null != r.root)
            if (r.root.length <= 4) {
                const t = G.from(r.root).toNumber();
                0 === t || 1 === t ? (null != r.status && r.status !== t && zo.throwArgumentError("alt-root-status/status mismatch", "value", {
                    root: r.root,
                    status: r.status
                }), r.status = t, delete r.root) : zo.throwArgumentError("invalid alt-root-status", "value.root", r.root)
            } else 66 !== r.root.length && zo.throwArgumentError("invalid root hash", "value.root", r.root);
        return null != r.status && (r.byzantium = !0), r
    }
    topics(t) {
        return Array.isArray(t) ? t.map((t => this.topics(t))) : null != t ? this.hash(t, !0) : null
    }
    filter(t) {
        return Ho.check(this.formats.filter, t)
    }
    filterLog(t) {
        return Ho.check(this.formats.filterLog, t)
    }
    static check(t, r) {
        const e = {};
        for (const n in t) try {
            const i = t[n](r[n]);
            void 0 !== i && (e[n] = i)
        } catch (i) {
            throw i.checkKey = n, i.checkValue = r[n], i
        }
        return e
    }
    static allowNull(t, r) {
        return function(e) {
            return null == e ? r : t(e)
        }
    }
    static allowFalsish(t, r) {
        return function(e) {
            return e ? t(e) : r
        }
    }
    static arrayOf(t) {
        return function(r) {
            if (!Array.isArray(r)) throw new Error("not an array");
            const e = [];
            return r.forEach((function(r) {
                e.push(t(r))
            })), e
        }
    }
}

function Qo(t) {
    return t && "function" == typeof t.isCommunityResource
}

function Ko(t) {
    return Qo(t) && t.isCommunityResource()
}
let Jo = !1;

function jo() {
    Jo || (Jo = !0, console.log("========= NOTICE ========="), console.log("Request-Rate Exceeded  (this message will not be repeated)"), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.io/api-keys/"), console.log("=========================="))
}
var Yo = globalThis && globalThis.__awaiter || function(t, r, e, i) {
    return new(e || (e = Promise))((function(n, o) {
        function s(t) {
            try {
                h(i.next(t))
            } catch (r) {
                o(r)
            }
        }

        function a(t) {
            try {
                h(i.throw(t))
            } catch (r) {
                o(r)
            }
        }

        function h(t) {
            var r;
            t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e((function(t) {
                t(r)
            }))).then(s, a)
        }
        h((i = i.apply(t, r || [])).next())
    }))
};
const Xo = new m(Go);

function Vo(t) {
    return null == t ? "null" : (32 !== I(t) && Xo.throwArgumentError("invalid topic", "topic", t), t.toLowerCase())
}

function Wo(t) {
    for (t = t.slice(); t.length > 0 && null == t[t.length - 1];) t.pop();
    return t.map((t => {
        if (Array.isArray(t)) {
            const r = {};
            t.forEach((t => {
                r[Vo(t)] = !0
            }));
            const e = Object.keys(r);
            return e.sort(), e.join("|")
        }
        return Vo(t)
    })).join("&")
}

function Zo(t) {
    if ("string" == typeof t) {
        if (32 === I(t = t.toLowerCase())) return "tx:" + t;
        if (-1 === t.indexOf(":")) return t
    } else {
        if (Array.isArray(t)) return "filter:*:" + Wo(t);
        if (zr.isForkEvent(t)) throw Xo.warn("not implemented"), new Error("not implemented");
        if (t && "object" == typeof t) return "filter:" + (t.address || "*") + ":" + Wo(t.topics || [])
    }
    throw new Error("invalid event - " + t)
}

function $o() {
    return (new Date).getTime()
}

function ts(t) {
    return new Promise((r => {
        setTimeout(r, t)
    }))
}
const rs = ["block", "network", "pending", "poll"];
class es {
    constructor(t, r, e) {
        Y(this, "tag", t), Y(this, "listener", r), Y(this, "once", e), this._lastBlockNumber = -2, this._inflight = !1
    }
    get event() {
        switch (this.type) {
            case "tx":
                return this.hash;
            case "filter":
                return this.filter
        }
        return this.tag
    }
    get type() {
        return this.tag.split(":")[0]
    }
    get hash() {
        const t = this.tag.split(":");
        return "tx" !== t[0] ? null : t[1]
    }
    get filter() {
        const t = this.tag.split(":");
        if ("filter" !== t[0]) return null;
        const r = t[1],
            e = "" === (i = t[2]) ? [] : i.split(/&/g).map((t => {
                if ("" === t) return [];
                const r = t.split("|").map((t => "null" === t ? null : t));
                return 1 === r.length ? r[0] : r
            }));
        var i;
        const n = {};
        return e.length > 0 && (n.topics = e), r && "*" !== r && (n.address = r), n
    }
    pollable() {
        return this.tag.indexOf(":") >= 0 || rs.indexOf(this.tag) >= 0
    }
}
const is = {
    0: {
        symbol: "btc",
        p2pkh: 0,
        p2sh: 5,
        prefix: "bc"
    },
    2: {
        symbol: "ltc",
        p2pkh: 48,
        p2sh: 50,
        prefix: "ltc"
    },
    3: {
        symbol: "doge",
        p2pkh: 30,
        p2sh: 22
    },
    60: {
        symbol: "eth",
        ilk: "eth"
    },
    61: {
        symbol: "etc",
        ilk: "eth"
    },
    700: {
        symbol: "xdai",
        ilk: "eth"
    }
};

function ns(t) {
    return T(G.from(t).toHexString(), 32)
}

function os(t) {
    return so.encode(M([t, x(lo(lo(t)), 0, 4)]))
}
const ss = new RegExp("^(ipfs)://(.*)$", "i"),
    as = [new RegExp("^(https)://(.*)$", "i"), new RegExp("^(data):(.*)$", "i"), ss, new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];

function hs(t, r) {
    try {
        return jt(us(t, r))
    } catch (e) {}
    return null
}

function us(t, r) {
    if ("0x" === t) return null;
    const e = G.from(x(t, r, r + 32)).toNumber(),
        i = G.from(x(t, e, e + 32)).toNumber();
    return x(t, e + 32, e + 32 + i)
}

function ls(t) {
    return t.match(/^ipfs:\/\/ipfs\//i) ? t = t.substring(12) : t.match(/^ipfs:\/\//i) ? t = t.substring(7) : Xo.throwArgumentError("unsupported IPFS format", "link", t), `https://gateway.ipfs.io/ipfs/${t}`
}

function fs(t) {
    const r = b(t);
    if (r.length > 32) throw new Error("internal; should not happen");
    const e = new Uint8Array(32);
    return e.set(r, 32 - r.length), e
}

function cs(t) {
    if (t.length % 32 == 0) return t;
    const r = new Uint8Array(32 * Math.ceil(t.length / 32));
    return r.set(t), r
}

function ds(t) {
    const r = [];
    let e = 0;
    for (let i = 0; i < t.length; i++) r.push(null), e += 32;
    for (let i = 0; i < t.length; i++) {
        const n = b(t[i]);
        r[i] = fs(e), r.push(fs(n.length)), r.push(cs(n)), e += 32 + 32 * Math.ceil(n.length / 32)
    }
    return S(r)
}
class ms {
    constructor(t, r, e, i) {
        Y(this, "provider", t), Y(this, "name", e), Y(this, "address", t.formatter.address(r)), Y(this, "_resolvedAddress", i)
    }
    supportsWildcard() {
        return this._supportsEip2544 || (this._supportsEip2544 = this.provider.call({
            to: this.address,
            data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"
        }).then((t => G.from(t).eq(1))).catch((t => {
            if (t.code === m.errors.CALL_EXCEPTION) return !1;
            throw this._supportsEip2544 = null, t
        }))), this._supportsEip2544
    }
    _fetch(t, r) {
        return Yo(this, void 0, void 0, (function*() {
            const e = {
                to: this.address,
                ccipReadEnabled: !0,
                data: S([t, Mr(this.name), r || "0x"])
            };
            let i = !1;
            (yield this.supportsWildcard()) && (i = !0, e.data = S(["0x9061b923", ds([Er(this.name), e.data])]));
            try {
                let t = yield this.provider.call(e);
                return b(t).length % 32 == 4 && Xo.throwError("resolver threw error", m.errors.CALL_EXCEPTION, {
                    transaction: e,
                    data: t
                }), i && (t = us(t, 0)), t
            } catch (n) {
                if (n.code === m.errors.CALL_EXCEPTION) return null;
                throw n
            }
        }))
    }
    _fetchBytes(t, r) {
        return Yo(this, void 0, void 0, (function*() {
            const e = yield this._fetch(t, r);
            return null != e ? us(e, 0) : null
        }))
    }
    _getAddress(t, r) {
        const e = is[String(t)];
        if (null == e && Xo.throwError(`unsupported coin type: ${t}`, m.errors.UNSUPPORTED_OPERATION, {
                operation: `getAddress(${t})`
            }), "eth" === e.ilk) return this.provider.formatter.address(r);
        const i = b(r);
        if (null != e.p2pkh) {
            const t = r.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
            if (t) {
                const r = parseInt(t[1], 16);
                if (t[2].length === 2 * r && r >= 1 && r <= 75) return os(M([
                    [e.p2pkh], "0x" + t[2]
                ]))
            }
        }
        if (null != e.p2sh) {
            const t = r.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
            if (t) {
                const r = parseInt(t[1], 16);
                if (t[2].length === 2 * r && r >= 1 && r <= 75) return os(M([
                    [e.p2sh], "0x" + t[2]
                ]))
            }
        }
        if (null != e.prefix) {
            const t = i[1];
            let r = i[0];
            if (0 === r ? 20 !== t && 32 !== t && (r = -1) : r = -1, r >= 0 && i.length === 2 + t && t >= 1 && t <= 75) {
                const t = qo.toWords(i.slice(2));
                return t.unshift(r), qo.encode(e.prefix, t)
            }
        }
        return null
    }
    getAddress(t) {
        return Yo(this, void 0, void 0, (function*() {
            if (null == t && (t = 60), 60 === t) try {
                const t = yield this._fetch("0x3b3b57de");
                return "0x" === t || t === Lt ? null : this.provider.formatter.callAddress(t)
            } catch (i) {
                if (i.code === m.errors.CALL_EXCEPTION) return null;
                throw i
            }
            const r = yield this._fetchBytes("0xf1cb7e06", ns(t));
            if (null == r || "0x" === r) return null;
            const e = this._getAddress(t, r);
            return null == e && Xo.throwError("invalid or unsupported coin data", m.errors.UNSUPPORTED_OPERATION, {
                operation: `getAddress(${t})`,
                coinType: t,
                data: r
            }), e
        }))
    }
    getAvatar() {
        return Yo(this, void 0, void 0, (function*() {
            const t = [{
                type: "name",
                content: this.name
            }];
            try {
                const r = yield this.getText("avatar");
                if (null == r) return null;
                for (let e = 0; e < as.length; e++) {
                    const i = r.match(as[e]);
                    if (null == i) continue;
                    const n = i[1].toLowerCase();
                    switch (n) {
                        case "https":
                            return t.push({
                                type: "url",
                                content: r
                            }), {
                                linkage: t,
                                url: r
                            };
                        case "data":
                            return t.push({
                                type: "data",
                                content: r
                            }), {
                                linkage: t,
                                url: r
                            };
                        case "ipfs":
                            return t.push({
                                type: "ipfs",
                                content: r
                            }), {
                                linkage: t,
                                url: ls(r)
                            };
                        case "erc721":
                        case "erc1155": {
                            const e = "erc721" === n ? "0xc87b56dd" : "0x0e89341c";
                            t.push({
                                type: n,
                                content: r
                            });
                            const o = this._resolvedAddress || (yield this.getAddress()),
                                s = (i[2] || "").split("/");
                            if (2 !== s.length) return null;
                            const a = yield this.provider.formatter.address(s[0]), h = T(G.from(s[1]).toHexString(), 32);
                            if ("erc721" === n) {
                                const r = this.provider.formatter.callAddress(yield this.provider.call({
                                    to: a,
                                    data: S(["0x6352211e", h])
                                }));
                                if (o !== r) return null;
                                t.push({
                                    type: "owner",
                                    content: r
                                })
                            } else if ("erc1155" === n) {
                                const r = G.from(yield this.provider.call({
                                    to: a,
                                    data: S(["0x00fdd58e", T(o, 32), h])
                                }));
                                if (r.isZero()) return null;
                                t.push({
                                    type: "balance",
                                    content: r.toString()
                                })
                            }
                            const u = {
                                to: this.provider.formatter.address(s[0]),
                                data: S([e, h])
                            };
                            let l = hs(yield this.provider.call(u), 0);
                            if (null == l) return null;
                            t.push({
                                type: "metadata-url-base",
                                content: l
                            }), "erc1155" === n && (l = l.replace("{id}", h.substring(2)), t.push({
                                type: "metadata-url-expanded",
                                content: l
                            })), l.match(/^ipfs:/i) && (l = ls(l)), t.push({
                                type: "metadata-url",
                                content: l
                            });
                            const f = yield So(l);
                            if (!f) return null;
                            t.push({
                                type: "metadata",
                                content: JSON.stringify(f)
                            });
                            let c = f.image;
                            if ("string" != typeof c) return null;
                            if (c.match(/^(https:\/\/|data:)/i));
                            else {
                                if (null == c.match(ss)) return null;
                                t.push({
                                    type: "url-ipfs",
                                    content: c
                                }), c = ls(c)
                            }
                            return t.push({
                                type: "url",
                                content: c
                            }), {
                                linkage: t,
                                url: c
                            }
                        }
                    }
                }
            } catch (r) {}
            return null
        }))
    }
    getContentHash() {
        return Yo(this, void 0, void 0, (function*() {
            const t = yield this._fetchBytes("0xbc1c58d1");
            if (null == t || "0x" === t) return null;
            const r = t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
            if (r) {
                const t = parseInt(r[3], 16);
                if (r[4].length === 2 * t) return "ipfs://" + so.encode("0x" + r[1])
            }
            const e = t.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
            if (e) {
                const t = parseInt(e[3], 16);
                if (e[4].length === 2 * t) return "ipns://" + so.encode("0x" + e[1])
            }
            const i = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
            if (i && 64 === i[1].length) return "bzz://" + i[1];
            const n = t.match(/^0x90b2c605([0-9a-f]*)$/);
            if (n && 68 === n[1].length) {
                const t = {
                    "=": "",
                    "+": "-",
                    "/": "_"
                };
                return "sia://" + Wt("0x" + n[1]).replace(/[=+\/]/g, (r => t[r]))
            }
            return Xo.throwError("invalid or unsupported content hash data", m.errors.UNSUPPORTED_OPERATION, {
                operation: "getContentHash()",
                data: t
            })
        }))
    }
    getText(t) {
        return Yo(this, void 0, void 0, (function*() {
            let r = Ht(t);
            r = M([ns(64), ns(r.length), r]), r.length % 32 != 0 && (r = M([r, T("0x", 32 - t.length % 32)]));
            const e = yield this._fetchBytes("0x59d1d43c", N(r));
            return null == e || "0x" === e ? null : jt(e)
        }))
    }
}
let ps = null,
    gs = 1;
class vs extends Hr {
    constructor(t) {
        if (super(), this._events = [], this._emitted = {
                block: -2
            }, this.disableCcipRead = !1, this.formatter = new.target.getFormatter(), Y(this, "anyNetwork", "any" === t), this.anyNetwork && (t = this.detectNetwork()), t instanceof Promise) this._networkPromise = t, t.catch((t => {})), this._ready().catch((t => {}));
        else {
            const r = X(new.target, "getNetwork")(t);
            r ? (Y(this, "_network", r), this.emit("network", r, null)) : Xo.throwArgumentError("invalid network", "network", t)
        }
        this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._maxFilterBlockRange = 10, this._pollingInterval = 4e3, this._fastQueryDate = 0
    }
    _ready() {
        return Yo(this, void 0, void 0, (function*() {
            if (null == this._network) {
                let r = null;
                if (this._networkPromise) try {
                    r = yield this._networkPromise
                } catch (t) {}
                null == r && (r = yield this.detectNetwork()), r || Xo.throwError("no network detected", m.errors.UNKNOWN_ERROR, {}), null == this._network && (this.anyNetwork ? this._network = r : Y(this, "_network", r), this.emit("network", r, null))
            }
            return this._network
        }))
    }
    get ready() {
        return Po((() => this._ready().then((t => t), (t => {
            if (t.code !== m.errors.NETWORK_ERROR || "noNetwork" !== t.event) throw t
        }))))
    }
    static getFormatter() {
        return null == ps && (ps = new Ho), ps
    }
    static getNetwork(t) {
        return bo(null == t ? "homestead" : t)
    }
    ccipReadFetch(t, r, e) {
        return Yo(this, void 0, void 0, (function*() {
            if (this.disableCcipRead || 0 === e.length) return null;
            const i = t.to.toLowerCase(),
                n = r.toLowerCase(),
                o = [];
            for (let t = 0; t < e.length; t++) {
                const r = e[t],
                    s = r.replace("{sender}", i).replace("{data}", n),
                    a = r.indexOf("{data}") >= 0 ? null : JSON.stringify({
                        data: n,
                        sender: i
                    }),
                    h = yield So({
                        url: s,
                        errorPassThrough: !0
                    }, a, ((t, r) => (t.status = r.statusCode, t)));
                if (h.data) return h.data;
                const u = h.message || "unknown error";
                if (h.status >= 400 && h.status < 500) return Xo.throwError(`response not found during CCIP fetch: ${u}`, m.errors.SERVER_ERROR, {
                    url: r,
                    errorMessage: u
                });
                o.push(u)
            }
            return Xo.throwError(`error encountered during CCIP fetch: ${o.map((t=>JSON.stringify(t))).join(", ")}`, m.errors.SERVER_ERROR, {
                urls: e,
                errorMessages: o
            })
        }))
    }
    _getInternalBlockNumber(t) {
        return Yo(this, void 0, void 0, (function*() {
            if (yield this._ready(), t > 0)
                for (; this._internalBlockNumber;) {
                    const r = this._internalBlockNumber;
                    try {
                        const e = yield r;
                        if ($o() - e.respTime <= t) return e.blockNumber;
                        break
                    } catch (i) {
                        if (this._internalBlockNumber === r) break
                    }
                }
            const r = $o(),
                e = V({
                    blockNumber: this.perform("getBlockNumber", {}),
                    networkError: this.getNetwork().then((t => null), (t => t))
                }).then((({
                    blockNumber: t,
                    networkError: i
                }) => {
                    if (i) throw this._internalBlockNumber === e && (this._internalBlockNumber = null), i;
                    const n = $o();
                    return (t = G.from(t).toNumber()) < this._maxInternalBlockNumber && (t = this._maxInternalBlockNumber), this._maxInternalBlockNumber = t, this._setFastBlockNumber(t), {
                        blockNumber: t,
                        reqTime: r,
                        respTime: n
                    }
                }));
            return this._internalBlockNumber = e, e.catch((t => {
                this._internalBlockNumber === e && (this._internalBlockNumber = null)
            })), (yield e).blockNumber
        }))
    }
    poll() {
        return Yo(this, void 0, void 0, (function*() {
            const t = gs++,
                r = [];
            let e = null;
            try {
                e = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
            } catch (i) {
                return void this.emit("error", i)
            }
            if (this._setFastBlockNumber(e), this.emit("poll", t, e), e !== this._lastBlockNumber) {
                if (-2 === this._emitted.block && (this._emitted.block = e - 1), Math.abs(this._emitted.block - e) > 1e3) Xo.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${e})`), this.emit("error", Xo.makeError("network block skew detected", m.errors.NETWORK_ERROR, {
                    blockNumber: e,
                    event: "blockSkew",
                    previousBlockNumber: this._emitted.block
                })), this.emit("block", e);
                else
                    for (let t = this._emitted.block + 1; t <= e; t++) this.emit("block", t);
                this._emitted.block !== e && (this._emitted.block = e, Object.keys(this._emitted).forEach((t => {
                    if ("block" === t) return;
                    const r = this._emitted[t];
                    "pending" !== r && e - r > 12 && delete this._emitted[t]
                }))), -2 === this._lastBlockNumber && (this._lastBlockNumber = e - 1), this._events.forEach((t => {
                    switch (t.type) {
                        case "tx": {
                            const e = t.hash;
                            let i = this.getTransactionReceipt(e).then((t => t && null != t.blockNumber ? (this._emitted["t:" + e] = t.blockNumber, this.emit(e, t), null) : null)).catch((t => {
                                this.emit("error", t)
                            }));
                            r.push(i);
                            break
                        }
                        case "filter":
                            if (!t._inflight) {
                                t._inflight = !0, -2 === t._lastBlockNumber && (t._lastBlockNumber = e - 1);
                                const i = t.filter;
                                i.fromBlock = t._lastBlockNumber + 1, i.toBlock = e;
                                const n = i.toBlock - this._maxFilterBlockRange;
                                n > i.fromBlock && (i.fromBlock = n), i.fromBlock < 0 && (i.fromBlock = 0);
                                const o = this.getLogs(i).then((r => {
                                    t._inflight = !1, 0 !== r.length && r.forEach((r => {
                                        r.blockNumber > t._lastBlockNumber && (t._lastBlockNumber = r.blockNumber), this._emitted["b:" + r.blockHash] = r.blockNumber, this._emitted["t:" + r.transactionHash] = r.blockNumber, this.emit(i, r)
                                    }))
                                })).catch((r => {
                                    this.emit("error", r), t._inflight = !1
                                }));
                                r.push(o)
                            }
                    }
                })), this._lastBlockNumber = e, Promise.all(r).then((() => {
                    this.emit("didPoll", t)
                })).catch((t => {
                    this.emit("error", t)
                }))
            } else this.emit("didPoll", t)
        }))
    }
    resetEventsBlock(t) {
        this._lastBlockNumber = t - 1, this.polling && this.poll()
    }
    get network() {
        return this._network
    }
    detectNetwork() {
        return Yo(this, void 0, void 0, (function*() {
            return Xo.throwError("provider does not support network detection", m.errors.UNSUPPORTED_OPERATION, {
                operation: "provider.detectNetwork"
            })
        }))
    }
    getNetwork() {
        return Yo(this, void 0, void 0, (function*() {
            const t = yield this._ready(), r = yield this.detectNetwork();
            if (t.chainId !== r.chainId) {
                if (this.anyNetwork) return this._network = r, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", r, t), yield ts(0), this._network;
                const e = Xo.makeError("underlying network changed", m.errors.NETWORK_ERROR, {
                    event: "changed",
                    network: t,
                    detectedNetwork: r
                });
                throw this.emit("error", e), e
            }
            return t
        }))
    }
    get blockNumber() {
        return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then((t => {
            this._setFastBlockNumber(t)
        }), (t => {})), null != this._fastBlockNumber ? this._fastBlockNumber : -1
    }
    get polling() {
        return null != this._poller
    }
    set polling(t) {
        t && !this._poller ? (this._poller = setInterval((() => {
            this.poll()
        }), this.pollingInterval), this._bootstrapPoll || (this._bootstrapPoll = setTimeout((() => {
            this.poll(), this._bootstrapPoll = setTimeout((() => {
                this._poller || this.poll(), this._bootstrapPoll = null
            }), this.pollingInterval)
        }), 0))) : !t && this._poller && (clearInterval(this._poller), this._poller = null)
    }
    get pollingInterval() {
        return this._pollingInterval
    }
    set pollingInterval(t) {
        if ("number" != typeof t || t <= 0 || parseInt(String(t)) != t) throw new Error("invalid polling interval");
        this._pollingInterval = t, this._poller && (clearInterval(this._poller), this._poller = setInterval((() => {
            this.poll()
        }), this._pollingInterval))
    }
    _getFastBlockNumber() {
        const t = $o();
        return t - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = t, this._fastBlockNumberPromise = this.getBlockNumber().then((t => ((null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t), this._fastBlockNumber)))), this._fastBlockNumberPromise
    }
    _setFastBlockNumber(t) {
        null != this._fastBlockNumber && t < this._fastBlockNumber || (this._fastQueryDate = $o(), (null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t, this._fastBlockNumberPromise = Promise.resolve(t)))
    }
    waitForTransaction(t, r, e) {
        return Yo(this, void 0, void 0, (function*() {
            return this._waitForTransaction(t, null == r ? 1 : r, e || 0, null)
        }))
    }
    _waitForTransaction(t, r, e, i) {
        return Yo(this, void 0, void 0, (function*() {
            const n = yield this.getTransactionReceipt(t);
            return (n ? n.confirmations : 0) >= r ? n : new Promise(((n, o) => {
                const s = [];
                let a = !1;
                const h = function() {
                        return !!a || (a = !0, s.forEach((t => {
                            t()
                        })), !1)
                    },
                    u = t => {
                        t.confirmations < r || h() || n(t)
                    };
                if (this.on(t, u), s.push((() => {
                        this.removeListener(t, u)
                    })), i) {
                    let e = i.startBlock,
                        n = null;
                    const u = s => Yo(this, void 0, void 0, (function*() {
                        a || (yield ts(1e3), this.getTransactionCount(i.from).then((l => Yo(this, void 0, void 0, (function*() {
                            if (!a) {
                                if (l <= i.nonce) e = s;
                                else {
                                    {
                                        const r = yield this.getTransaction(t);
                                        if (r && null != r.blockNumber) return
                                    }
                                    for (null == n && (n = e - 3, n < i.startBlock && (n = i.startBlock)); n <= s;) {
                                        if (a) return;
                                        const e = yield this.getBlockWithTransactions(n);
                                        for (let n = 0; n < e.transactions.length; n++) {
                                            const s = e.transactions[n];
                                            if (s.hash === t) return;
                                            if (s.from === i.from && s.nonce === i.nonce) {
                                                if (a) return;
                                                const e = yield this.waitForTransaction(s.hash, r);
                                                if (h()) return;
                                                let n = "replaced";
                                                return s.data === i.data && s.to === i.to && s.value.eq(i.value) ? n = "repriced" : "0x" === s.data && s.from === s.to && s.value.isZero() && (n = "cancelled"), void o(Xo.makeError("transaction was replaced", m.errors.TRANSACTION_REPLACED, {
                                                    cancelled: "replaced" === n || "cancelled" === n,
                                                    reason: n,
                                                    replacement: this._wrapTransaction(s),
                                                    hash: t,
                                                    receipt: e
                                                }))
                                            }
                                        }
                                        n++
                                    }
                                }
                                a || this.once("block", u)
                            }
                        }))), (t => {
                            a || this.once("block", u)
                        })))
                    }));
                    if (a) return;
                    this.once("block", u), s.push((() => {
                        this.removeListener("block", u)
                    }))
                }
                if ("number" == typeof e && e > 0) {
                    const t = setTimeout((() => {
                        h() || o(Xo.makeError("timeout exceeded", m.errors.TIMEOUT, {
                            timeout: e
                        }))
                    }), e);
                    t.unref && t.unref(), s.push((() => {
                        clearTimeout(t)
                    }))
                }
            }))
        }))
    }
    getBlockNumber() {
        return Yo(this, void 0, void 0, (function*() {
            return this._getInternalBlockNumber(0)
        }))
    }
    getGasPrice() {
        return Yo(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const t = yield this.perform("getGasPrice", {});
            try {
                return G.from(t)
            } catch (r) {
                return Xo.throwError("bad result from backend", m.errors.SERVER_ERROR, {
                    method: "getGasPrice",
                    result: t,
                    error: r
                })
            }
        }))
    }
    getBalance(t, r) {
        return Yo(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const e = yield V({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(r)
            }), i = yield this.perform("getBalance", e);
            try {
                return G.from(i)
            } catch (n) {
                return Xo.throwError("bad result from backend", m.errors.SERVER_ERROR, {
                    method: "getBalance",
                    params: e,
                    result: i,
                    error: n
                })
            }
        }))
    }
    getTransactionCount(t, r) {
        return Yo(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const e = yield V({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(r)
            }), i = yield this.perform("getTransactionCount", e);
            try {
                return G.from(i).toNumber()
            } catch (n) {
                return Xo.throwError("bad result from backend", m.errors.SERVER_ERROR, {
                    method: "getTransactionCount",
                    params: e,
                    result: i,
                    error: n
                })
            }
        }))
    }
    getCode(t, r) {
        return Yo(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const e = yield V({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(r)
            }), i = yield this.perform("getCode", e);
            try {
                return N(i)
            } catch (n) {
                return Xo.throwError("bad result from backend", m.errors.SERVER_ERROR, {
                    method: "getCode",
                    params: e,
                    result: i,
                    error: n
                })
            }
        }))
    }
    getStorageAt(t, r, e) {
        return Yo(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const i = yield V({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(e),
                position: Promise.resolve(r).then((t => P(t)))
            }), n = yield this.perform("getStorageAt", i);
            try {
                return N(n)
            } catch (o) {
                return Xo.throwError("bad result from backend", m.errors.SERVER_ERROR, {
                    method: "getStorageAt",
                    params: i,
                    result: n,
                    error: o
                })
            }
        }))
    }
    _wrapTransaction(t, r, e) {
        if (null != r && 32 !== I(r)) throw new Error("invalid response - sendTransaction");
        const i = t;
        return null != r && t.hash !== r && Xo.throwError("Transaction hash mismatch from Provider.sendTransaction.", m.errors.UNKNOWN_ERROR, {
            expectedHash: t.hash,
            returnedHash: r
        }), i.wait = (r, i) => Yo(this, void 0, void 0, (function*() {
            let n;
            null == r && (r = 1), null == i && (i = 0), 0 !== r && null != e && (n = {
                data: t.data,
                from: t.from,
                nonce: t.nonce,
                to: t.to,
                value: t.value,
                startBlock: e
            });
            const o = yield this._waitForTransaction(t.hash, r, i, n);
            return null == o && 0 === r ? null : (this._emitted["t:" + t.hash] = o.blockNumber, 0 === o.status && Xo.throwError("transaction failed", m.errors.CALL_EXCEPTION, {
                transactionHash: t.hash,
                transaction: t,
                receipt: o
            }), o)
        })), i
    }
    sendTransaction(t) {
        return Yo(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const r = yield Promise.resolve(t).then((t => N(t))), e = this.formatter.transaction(t);
            null == e.confirmations && (e.confirmations = 0);
            const i = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
            try {
                const t = yield this.perform("sendTransaction", {
                    signedTransaction: r
                });
                return this._wrapTransaction(e, t, i)
            } catch (n) {
                throw n.transaction = e, n.transactionHash = e.hash, n
            }
        }))
    }
    _getTransactionRequest(t) {
        return Yo(this, void 0, void 0, (function*() {
            const r = yield t, e = {};
            return ["from", "to"].forEach((t => {
                null != r[t] && (e[t] = Promise.resolve(r[t]).then((t => t ? this._getAddress(t) : null)))
            })), ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach((t => {
                null != r[t] && (e[t] = Promise.resolve(r[t]).then((t => t ? G.from(t) : null)))
            })), ["type"].forEach((t => {
                null != r[t] && (e[t] = Promise.resolve(r[t]).then((t => null != t ? t : null)))
            })), r.accessList && (e.accessList = this.formatter.accessList(r.accessList)), ["data"].forEach((t => {
                null != r[t] && (e[t] = Promise.resolve(r[t]).then((t => t ? N(t) : null)))
            })), this.formatter.transactionRequest(yield V(e))
        }))
    }
    _getFilter(t) {
        return Yo(this, void 0, void 0, (function*() {
            t = yield t;
            const r = {};
            return null != t.address && (r.address = this._getAddress(t.address)), ["blockHash", "topics"].forEach((e => {
                null != t[e] && (r[e] = t[e])
            })), ["fromBlock", "toBlock"].forEach((e => {
                null != t[e] && (r[e] = this._getBlockTag(t[e]))
            })), this.formatter.filter(yield V(r))
        }))
    }
    _call(t, r, e) {
        return Yo(this, void 0, void 0, (function*() {
            e >= 10 && Xo.throwError("CCIP read exceeded maximum redirections", m.errors.SERVER_ERROR, {
                redirects: e,
                transaction: t
            });
            const i = t.to,
                n = yield this.perform("call", {
                    transaction: t,
                    blockTag: r
                });
            if (e >= 0 && "latest" === r && null != i && "0x556f1830" === n.substring(0, 10) && I(n) % 32 == 4) try {
                const o = x(n, 4),
                    s = x(o, 0, 32);
                G.from(s).eq(i) || Xo.throwError("CCIP Read sender did not match", m.errors.CALL_EXCEPTION, {
                    name: "OffchainLookup",
                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                    transaction: t,
                    data: n
                });
                const a = [],
                    h = G.from(x(o, 32, 64)).toNumber(),
                    u = G.from(x(o, h, h + 32)).toNumber(),
                    l = x(o, h + 32);
                for (let r = 0; r < u; r++) {
                    const e = hs(l, 32 * r);
                    null == e && Xo.throwError("CCIP Read contained corrupt URL string", m.errors.CALL_EXCEPTION, {
                        name: "OffchainLookup",
                        signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                        transaction: t,
                        data: n
                    }), a.push(e)
                }
                const f = us(o, 64);
                G.from(x(o, 100, 128)).isZero() || Xo.throwError("CCIP Read callback selector included junk", m.errors.CALL_EXCEPTION, {
                    name: "OffchainLookup",
                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                    transaction: t,
                    data: n
                });
                const c = x(o, 96, 100),
                    d = us(o, 128),
                    p = yield this.ccipReadFetch(t, f, a);
                null == p && Xo.throwError("CCIP Read disabled or provided no URLs", m.errors.CALL_EXCEPTION, {
                    name: "OffchainLookup",
                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                    transaction: t,
                    data: n
                });
                const g = {
                    to: i,
                    data: S([c, ds([p, d])])
                };
                return this._call(g, r, e + 1)
            } catch (o) {
                if (o.code === m.errors.SERVER_ERROR) throw o
            }
            try {
                return N(n)
            } catch (o) {
                return Xo.throwError("bad result from backend", m.errors.SERVER_ERROR, {
                    method: "call",
                    params: {
                        transaction: t,
                        blockTag: r
                    },
                    result: n,
                    error: o
                })
            }
        }))
    }
    call(t, r) {
        return Yo(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const e = yield V({
                transaction: this._getTransactionRequest(t),
                blockTag: this._getBlockTag(r),
                ccipReadEnabled: Promise.resolve(t.ccipReadEnabled)
            });
            return this._call(e.transaction, e.blockTag, e.ccipReadEnabled ? 0 : -1)
        }))
    }
    estimateGas(t) {
        return Yo(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const r = yield V({
                transaction: this._getTransactionRequest(t)
            }), e = yield this.perform("estimateGas", r);
            try {
                return G.from(e)
            } catch (i) {
                return Xo.throwError("bad result from backend", m.errors.SERVER_ERROR, {
                    method: "estimateGas",
                    params: r,
                    result: e,
                    error: i
                })
            }
        }))
    }
    _getAddress(t) {
        return Yo(this, void 0, void 0, (function*() {
            "string" != typeof(t = yield t) && Xo.throwArgumentError("invalid address or ENS name", "name", t);
            const r = yield this.resolveName(t);
            return null == r && Xo.throwError("ENS name not configured", m.errors.UNSUPPORTED_OPERATION, {
                operation: `resolveName(${JSON.stringify(t)})`
            }), r
        }))
    }
    _getBlock(t, r) {
        return Yo(this, void 0, void 0, (function*() {
            yield this.getNetwork(), t = yield t;
            let e = -128;
            const i = {
                includeTransactions: !!r
            };
            if (k(t, 32)) i.blockHash = t;
            else try {
                i.blockTag = yield this._getBlockTag(t), k(i.blockTag) && (e = parseInt(i.blockTag.substring(2), 16))
            } catch (n) {
                Xo.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", t)
            }
            return Po((() => Yo(this, void 0, void 0, (function*() {
                const t = yield this.perform("getBlock", i);
                if (null == t) return null != i.blockHash && null == this._emitted["b:" + i.blockHash] || null != i.blockTag && e > this._emitted.block ? null : void 0;
                if (r) {
                    let r = null;
                    for (let i = 0; i < t.transactions.length; i++) {
                        const e = t.transactions[i];
                        if (null == e.blockNumber) e.confirmations = 0;
                        else if (null == e.confirmations) {
                            null == r && (r = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                            let t = r - e.blockNumber + 1;
                            t <= 0 && (t = 1), e.confirmations = t
                        }
                    }
                    const e = this.formatter.blockWithTransactions(t);
                    return e.transactions = e.transactions.map((t => this._wrapTransaction(t))), e
                }
                return this.formatter.block(t)
            }))), {
                oncePoll: this
            })
        }))
    }
    getBlock(t) {
        return this._getBlock(t, !1)
    }
    getBlockWithTransactions(t) {
        return this._getBlock(t, !0)
    }
    getTransaction(t) {
        return Yo(this, void 0, void 0, (function*() {
            yield this.getNetwork(), t = yield t;
            const r = {
                transactionHash: this.formatter.hash(t, !0)
            };
            return Po((() => Yo(this, void 0, void 0, (function*() {
                const e = yield this.perform("getTransaction", r);
                if (null == e) return null == this._emitted["t:" + t] ? null : void 0;
                const i = this.formatter.transactionResponse(e);
                if (null == i.blockNumber) i.confirmations = 0;
                else if (null == i.confirmations) {
                    let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - i.blockNumber + 1;
                    t <= 0 && (t = 1), i.confirmations = t
                }
                return this._wrapTransaction(i)
            }))), {
                oncePoll: this
            })
        }))
    }
    getTransactionReceipt(t) {
        return Yo(this, void 0, void 0, (function*() {
            yield this.getNetwork(), t = yield t;
            const r = {
                transactionHash: this.formatter.hash(t, !0)
            };
            return Po((() => Yo(this, void 0, void 0, (function*() {
                const e = yield this.perform("getTransactionReceipt", r);
                if (null == e) return null == this._emitted["t:" + t] ? null : void 0;
                if (null == e.blockHash) return;
                const i = this.formatter.receipt(e);
                if (null == i.blockNumber) i.confirmations = 0;
                else if (null == i.confirmations) {
                    let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - i.blockNumber + 1;
                    t <= 0 && (t = 1), i.confirmations = t
                }
                return i
            }))), {
                oncePoll: this
            })
        }))
    }
    getLogs(t) {
        return Yo(this, void 0, void 0, (function*() {
            yield this.getNetwork();
            const r = yield V({
                filter: this._getFilter(t)
            }), e = yield this.perform("getLogs", r);
            return e.forEach((t => {
                null == t.removed && (t.removed = !1)
            })), Ho.arrayOf(this.formatter.filterLog.bind(this.formatter))(e)
        }))
    }
    getEtherPrice() {
        return Yo(this, void 0, void 0, (function*() {
            return yield this.getNetwork(), this.perform("getEtherPrice", {})
        }))
    }
    _getBlockTag(t) {
        return Yo(this, void 0, void 0, (function*() {
            if ("number" == typeof(t = yield t) && t < 0) {
                t % 1 && Xo.throwArgumentError("invalid BlockTag", "blockTag", t);
                let r = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                return r += t, r < 0 && (r = 0), this.formatter.blockTag(r)
            }
            return this.formatter.blockTag(t)
        }))
    }
    getResolver(t) {
        return Yo(this, void 0, void 0, (function*() {
            let r = t;
            for (;;) {
                if ("" === r || "." === r) return null;
                if ("eth" !== t && "eth" === r) return null;
                const e = yield this._getResolver(r, "getResolver");
                if (null != e) {
                    const i = new ms(this, e, t);
                    return r === t || (yield i.supportsWildcard()) ? i : null
                }
                r = r.split(".").slice(1).join(".")
            }
        }))
    }
    _getResolver(t, r) {
        return Yo(this, void 0, void 0, (function*() {
            null == r && (r = "ENS");
            const e = yield this.getNetwork();
            e.ensAddress || Xo.throwError("network does not support ENS", m.errors.UNSUPPORTED_OPERATION, {
                operation: r,
                network: e.name
            });
            try {
                const r = yield this.call({
                    to: e.ensAddress,
                    data: "0x0178b8bf" + Mr(t).substring(2)
                });
                return this.formatter.callAddress(r)
            } catch (i) {}
            return null
        }))
    }
    resolveName(t) {
        return Yo(this, void 0, void 0, (function*() {
            t = yield t;
            try {
                return Promise.resolve(this.formatter.address(t))
            } catch (e) {
                if (k(t)) throw e
            }
            "string" != typeof t && Xo.throwArgumentError("invalid ENS name", "name", t);
            const r = yield this.getResolver(t);
            return r ? yield r.getAddress(): null
        }))
    }
    lookupAddress(t) {
        return Yo(this, void 0, void 0, (function*() {
            t = yield t;
            const r = (t = this.formatter.address(t)).substring(2).toLowerCase() + ".addr.reverse",
                e = yield this._getResolver(r, "lookupAddress");
            if (null == e) return null;
            const i = hs(yield this.call({
                to: e,
                data: "0x691f3431" + Mr(r).substring(2)
            }), 0);
            return (yield this.resolveName(i)) != t ? null : i
        }))
    }
    getAvatar(t) {
        return Yo(this, void 0, void 0, (function*() {
            let r = null;
            if (k(t)) {
                const e = this.formatter.address(t).substring(2).toLowerCase() + ".addr.reverse",
                    n = yield this._getResolver(e, "getAvatar");
                if (!n) return null;
                r = new ms(this, n, e);
                try {
                    const t = yield r.getAvatar();
                    if (t) return t.url
                } catch (i) {
                    if (i.code !== m.errors.CALL_EXCEPTION) throw i
                }
                try {
                    const t = hs(yield this.call({
                        to: n,
                        data: "0x691f3431" + Mr(e).substring(2)
                    }), 0);
                    r = yield this.getResolver(t)
                } catch (i) {
                    if (i.code !== m.errors.CALL_EXCEPTION) throw i;
                    return null
                }
            } else if (r = yield this.getResolver(t), !r) return null;
            const e = yield r.getAvatar();
            return null == e ? null : e.url
        }))
    }
    perform(t, r) {
        return Xo.throwError(t + " not implemented", m.errors.NOT_IMPLEMENTED, {
            operation: t
        })
    }
    _startEvent(t) {
        this.polling = this._events.filter((t => t.pollable())).length > 0
    }
    _stopEvent(t) {
        this.polling = this._events.filter((t => t.pollable())).length > 0
    }
    _addEventListener(t, r, e) {
        const i = new es(Zo(t), r, e);
        return this._events.push(i), this._startEvent(i), this
    }
    on(t, r) {
        return this._addEventListener(t, r, !1)
    }
    once(t, r) {
        return this._addEventListener(t, r, !0)
    }
    emit(t, ...r) {
        let e = !1,
            i = [],
            n = Zo(t);
        return this._events = this._events.filter((t => t.tag !== n || (setTimeout((() => {
            t.listener.apply(this, r)
        }), 0), e = !0, !t.once || (i.push(t), !1)))), i.forEach((t => {
            this._stopEvent(t)
        })), e
    }
    listenerCount(t) {
        if (!t) return this._events.length;
        let r = Zo(t);
        return this._events.filter((t => t.tag === r)).length
    }
    listeners(t) {
        if (null == t) return this._events.map((t => t.listener));
        let r = Zo(t);
        return this._events.filter((t => t.tag === r)).map((t => t.listener))
    }
    off(t, r) {
        if (null == r) return this.removeAllListeners(t);
        const e = [];
        let i = !1,
            n = Zo(t);
        return this._events = this._events.filter((t => t.tag !== n || t.listener != r || (!!i || (i = !0, e.push(t), !1)))), e.forEach((t => {
            this._stopEvent(t)
        })), this
    }
    removeAllListeners(t) {
        let r = [];
        if (null == t) r = this._events, this._events = [];
        else {
            const e = Zo(t);
            this._events = this._events.filter((t => t.tag !== e || (r.push(t), !1)))
        }
        return r.forEach((t => {
            this._stopEvent(t)
        })), this
    }
}
var ys = globalThis && globalThis.__awaiter || function(t, r, e, i) {
    return new(e || (e = Promise))((function(n, o) {
        function s(t) {
            try {
                h(i.next(t))
            } catch (r) {
                o(r)
            }
        }

        function a(t) {
            try {
                h(i.throw(t))
            } catch (r) {
                o(r)
            }
        }

        function h(t) {
            var r;
            t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e((function(t) {
                t(r)
            }))).then(s, a)
        }
        h((i = i.apply(t, r || [])).next())
    }))
};
const ws = new m(Go),
    As = ["call", "estimateGas"];

function bs(t, r) {
    if (null == t) return null;
    if ("string" == typeof t.message && t.message.match("reverted")) {
        const e = k(t.data) ? t.data : null;
        if (!r || e) return {
            message: t.message,
            data: e
        }
    }
    if ("object" == typeof t) {
        for (const e in t) {
            const i = bs(t[e], r);
            if (i) return i
        }
        return null
    }
    if ("string" == typeof t) try {
        return bs(JSON.parse(t), r)
    } catch (e) {}
    return null
}

function Ms(t, r, e) {
    const i = e.transaction || e.signedTransaction;
    if ("call" === t) {
        const t = bs(r, !0);
        if (t) return t.data;
        ws.throwError("missing revert data in call exception; Transaction reverted without a reason string", m.errors.CALL_EXCEPTION, {
            data: "0x",
            transaction: i,
            error: r
        })
    }
    if ("estimateGas" === t) {
        let e = bs(r.body, !1);
        null == e && (e = bs(r, !1)), e && ws.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", m.errors.UNPREDICTABLE_GAS_LIMIT, {
            reason: e.message,
            method: t,
            transaction: i,
            error: r
        })
    }
    let n = r.message;
    throw r.code === m.errors.SERVER_ERROR && r.error && "string" == typeof r.error.message ? n = r.error.message : "string" == typeof r.body ? n = r.body : "string" == typeof r.responseText && (n = r.responseText), n = (n || "").toLowerCase(), n.match(/insufficient funds|base fee exceeds gas limit/i) && ws.throwError("insufficient funds for intrinsic transaction cost", m.errors.INSUFFICIENT_FUNDS, {
        error: r,
        method: t,
        transaction: i
    }), n.match(/nonce (is )?too low/i) && ws.throwError("nonce has already been used", m.errors.NONCE_EXPIRED, {
        error: r,
        method: t,
        transaction: i
    }), n.match(/replacement transaction underpriced|transaction gas price.*too low/i) && ws.throwError("replacement fee too low", m.errors.REPLACEMENT_UNDERPRICED, {
        error: r,
        method: t,
        transaction: i
    }), n.match(/only replay-protected/i) && ws.throwError("legacy pre-eip-155 transactions not supported", m.errors.UNSUPPORTED_OPERATION, {
        error: r,
        method: t,
        transaction: i
    }), As.indexOf(t) >= 0 && n.match(/gas required exceeds allowance|always failing transaction|execution reverted/) && ws.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", m.errors.UNPREDICTABLE_GAS_LIMIT, {
        error: r,
        method: t,
        transaction: i
    }), r
}

function Es(t) {
    return new Promise((function(r) {
        setTimeout(r, t)
    }))
}

function _s(t) {
    if (t.error) {
        const r = new Error(t.error.message);
        throw r.code = t.error.code, r.data = t.error.data, r
    }
    return t.result
}

function ks(t) {
    return t ? t.toLowerCase() : t
}
const Ns = {};
class Is extends Yr {
    constructor(t, r, e) {
        if (super(), t !== Ns) throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
        Y(this, "provider", r), null == e && (e = 0), "string" == typeof e ? (Y(this, "_address", this.provider.formatter.address(e)), Y(this, "_index", null)) : "number" == typeof e ? (Y(this, "_index", e), Y(this, "_address", null)) : ws.throwArgumentError("invalid address or index", "addressOrIndex", e)
    }
    connect(t) {
        return ws.throwError("cannot alter JSON-RPC Signer connection", m.errors.UNSUPPORTED_OPERATION, {
            operation: "connect"
        })
    }
    connectUnchecked() {
        return new xs(Ns, this.provider, this._address || this._index)
    }
    getAddress() {
        return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then((t => (t.length <= this._index && ws.throwError("unknown account #" + this._index, m.errors.UNSUPPORTED_OPERATION, {
            operation: "getAddress"
        }), this.provider.formatter.address(t[this._index]))))
    }
    sendUncheckedTransaction(t) {
        t = Z(t);
        const r = this.getAddress().then((t => (t && (t = t.toLowerCase()), t)));
        if (null == t.gasLimit) {
            const e = Z(t);
            e.from = r, t.gasLimit = this.provider.estimateGas(e)
        }
        return null != t.to && (t.to = Promise.resolve(t.to).then((t => ys(this, void 0, void 0, (function*() {
            if (null == t) return null;
            const r = yield this.provider.resolveName(t);
            return null == r && ws.throwArgumentError("provided ENS name resolves to null", "tx.to", t), r
        }))))), V({
            tx: V(t),
            sender: r
        }).then((({
            tx: r,
            sender: e
        }) => {
            null != r.from ? r.from.toLowerCase() !== e && ws.throwArgumentError("from address mismatch", "transaction", t) : r.from = e;
            const i = this.provider.constructor.hexlifyTransaction(r, {
                from: !0
            });
            return this.provider.send("eth_sendTransaction", [i]).then((t => t), (t => ("string" == typeof t.message && t.message.match(/user denied/i) && ws.throwError("user rejected transaction", m.errors.ACTION_REJECTED, {
                action: "sendTransaction",
                transaction: r
            }), Ms("sendTransaction", t, i))))
        }))
    }
    signTransaction(t) {
        return ws.throwError("signing transactions is unsupported", m.errors.UNSUPPORTED_OPERATION, {
            operation: "signTransaction"
        })
    }
    sendTransaction(t) {
        return ys(this, void 0, void 0, (function*() {
            const r = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval), e = yield this.sendUncheckedTransaction(t);
            try {
                return yield Po((() => ys(this, void 0, void 0, (function*() {
                    const t = yield this.provider.getTransaction(e);
                    if (null !== t) return this.provider._wrapTransaction(t, e, r)
                }))), {
                    oncePoll: this.provider
                })
            } catch (i) {
                throw i.transactionHash = e, i
            }
        }))
    }
    signMessage(t) {
        return ys(this, void 0, void 0, (function*() {
            const r = "string" == typeof t ? Ht(t) : t,
                e = yield this.getAddress();
            try {
                return yield this.provider.send("personal_sign", [N(r), e.toLowerCase()])
            } catch (i) {
                throw "string" == typeof i.message && i.message.match(/user denied/i) && ws.throwError("user rejected signing", m.errors.ACTION_REJECTED, {
                    action: "signMessage",
                    from: e,
                    messageData: t
                }), i
            }
        }))
    }
    _legacySignMessage(t) {
        return ys(this, void 0, void 0, (function*() {
            const r = "string" == typeof t ? Ht(t) : t,
                e = yield this.getAddress();
            try {
                return yield this.provider.send("eth_sign", [e.toLowerCase(), N(r)])
            } catch (i) {
                throw "string" == typeof i.message && i.message.match(/user denied/i) && ws.throwError("user rejected signing", m.errors.ACTION_REJECTED, {
                    action: "_legacySignMessage",
                    from: e,
                    messageData: t
                }), i
            }
        }))
    }
    _signTypedData(t, r, e) {
        return ys(this, void 0, void 0, (function*() {
            const i = yield Dr.resolveNames(t, r, e, (t => this.provider.resolveName(t))), n = yield this.getAddress();
            try {
                return yield this.provider.send("eth_signTypedData_v4", [n.toLowerCase(), JSON.stringify(Dr.getPayload(i.domain, r, i.value))])
            } catch (o) {
                throw "string" == typeof o.message && o.message.match(/user denied/i) && ws.throwError("user rejected signing", m.errors.ACTION_REJECTED, {
                    action: "_signTypedData",
                    from: n,
                    messageData: {
                        domain: i.domain,
                        types: r,
                        value: i.value
                    }
                }), o
            }
        }))
    }
    unlock(t) {
        return ys(this, void 0, void 0, (function*() {
            const r = this.provider,
                e = yield this.getAddress();
            return r.send("personal_unlockAccount", [e.toLowerCase(), t, null])
        }))
    }
}
class xs extends Is {
    sendTransaction(t) {
        return this.sendUncheckedTransaction(t).then((t => ({
            hash: t,
            nonce: null,
            gasLimit: null,
            gasPrice: null,
            data: null,
            value: null,
            chainId: null,
            confirmations: 0,
            from: null,
            wait: r => this.provider.waitForTransaction(t, r)
        })))
    }
}
const Ss = {
    chainId: !0,
    data: !0,
    gasLimit: !0,
    gasPrice: !0,
    nonce: !0,
    to: !0,
    value: !0,
    type: !0,
    accessList: !0,
    maxFeePerGas: !0,
    maxPriorityFeePerGas: !0
};
class Ps extends vs {
    constructor(t, r) {
        let e = r;
        null == e && (e = new Promise(((t, r) => {
            setTimeout((() => {
                this.detectNetwork().then((r => {
                    t(r)
                }), (t => {
                    r(t)
                }))
            }), 0)
        }))), super(e), t || (t = X(this.constructor, "defaultUrl")()), Y(this, "connection", "string" == typeof t ? Object.freeze({
            url: t
        }) : Object.freeze(Z(t))), this._nextId = 42
    }
    get _cache() {
        return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache
    }
    static defaultUrl() {
        return "http://localhost:8545"
    }
    detectNetwork() {
        return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(), setTimeout((() => {
            this._cache.detectNetwork = null
        }), 0)), this._cache.detectNetwork
    }
    _uncachedDetectNetwork() {
        return ys(this, void 0, void 0, (function*() {
            yield Es(0);
            let t = null;
            try {
                t = yield this.send("eth_chainId", [])
            } catch (r) {
                try {
                    t = yield this.send("net_version", [])
                } catch (r) {}
            }
            if (null != t) {
                const e = X(this.constructor, "getNetwork");
                try {
                    return e(G.from(t).toNumber())
                } catch (r) {
                    return ws.throwError("could not detect network", m.errors.NETWORK_ERROR, {
                        chainId: t,
                        event: "invalidNetwork",
                        serverError: r
                    })
                }
            }
            return ws.throwError("could not detect network", m.errors.NETWORK_ERROR, {
                event: "noNetwork"
            })
        }))
    }
    getSigner(t) {
        return new Is(Ns, this, t)
    }
    getUncheckedSigner(t) {
        return this.getSigner(t).connectUnchecked()
    }
    listAccounts() {
        return this.send("eth_accounts", []).then((t => t.map((t => this.formatter.address(t)))))
    }
    send(t, r) {
        const e = {
            method: t,
            params: r,
            id: this._nextId++,
            jsonrpc: "2.0"
        };
        this.emit("debug", {
            action: "request",
            request: et(e),
            provider: this
        });
        const i = ["eth_chainId", "eth_blockNumber"].indexOf(t) >= 0;
        if (i && this._cache[t]) return this._cache[t];
        const n = So(this.connection, JSON.stringify(e), _s).then((t => (this.emit("debug", {
            action: "response",
            request: e,
            response: t,
            provider: this
        }), t)), (t => {
            throw this.emit("debug", {
                action: "response",
                error: t,
                request: e,
                provider: this
            }), t
        }));
        return i && (this._cache[t] = n, setTimeout((() => {
            this._cache[t] = null
        }), 0)), n
    }
    prepareRequest(t, r) {
        switch (t) {
            case "getBlockNumber":
                return ["eth_blockNumber", []];
            case "getGasPrice":
                return ["eth_gasPrice", []];
            case "getBalance":
                return ["eth_getBalance", [ks(r.address), r.blockTag]];
            case "getTransactionCount":
                return ["eth_getTransactionCount", [ks(r.address), r.blockTag]];
            case "getCode":
                return ["eth_getCode", [ks(r.address), r.blockTag]];
            case "getStorageAt":
                return ["eth_getStorageAt", [ks(r.address), T(r.position, 32), r.blockTag]];
            case "sendTransaction":
                return ["eth_sendRawTransaction", [r.signedTransaction]];
            case "getBlock":
                return r.blockTag ? ["eth_getBlockByNumber", [r.blockTag, !!r.includeTransactions]] : r.blockHash ? ["eth_getBlockByHash", [r.blockHash, !!r.includeTransactions]] : null;
            case "getTransaction":
                return ["eth_getTransactionByHash", [r.transactionHash]];
            case "getTransactionReceipt":
                return ["eth_getTransactionReceipt", [r.transactionHash]];
            case "call":
                return ["eth_call", [X(this.constructor, "hexlifyTransaction")(r.transaction, {
                    from: !0
                }), r.blockTag]];
            case "estimateGas":
                return ["eth_estimateGas", [X(this.constructor, "hexlifyTransaction")(r.transaction, {
                    from: !0
                })]];
            case "getLogs":
                return r.filter && null != r.filter.address && (r.filter.address = ks(r.filter.address)), ["eth_getLogs", [r.filter]]
        }
        return null
    }
    perform(t, r) {
        return ys(this, void 0, void 0, (function*() {
            if ("call" === t || "estimateGas" === t) {
                const t = r.transaction;
                if (t && null != t.type && G.from(t.type).isZero() && null == t.maxFeePerGas && null == t.maxPriorityFeePerGas) {
                    const e = yield this.getFeeData();
                    null == e.maxFeePerGas && null == e.maxPriorityFeePerGas && ((r = Z(r)).transaction = Z(t), delete r.transaction.type)
                }
            }
            const e = this.prepareRequest(t, r);
            null == e && ws.throwError(t + " not implemented", m.errors.NOT_IMPLEMENTED, {
                operation: t
            });
            try {
                return yield this.send(e[0], e[1])
            } catch (i) {
                return Ms(t, i, r)
            }
        }))
    }
    _startEvent(t) {
        "pending" === t.tag && this._startPending(), super._startEvent(t)
    }
    _startPending() {
        if (null != this._pendingFilter) return;
        const t = this,
            r = this.send("eth_newPendingTransactionFilter", []);
        this._pendingFilter = r, r.then((function(e) {
            return function i() {
                t.send("eth_getFilterChanges", [e]).then((function(e) {
                    if (t._pendingFilter != r) return null;
                    let i = Promise.resolve();
                    return e.forEach((function(r) {
                        t._emitted["t:" + r.toLowerCase()] = "pending", i = i.then((function() {
                            return t.getTransaction(r).then((function(r) {
                                return t.emit("pending", r), null
                            }))
                        }))
                    })), i.then((function() {
                        return Es(1e3)
                    }))
                })).then((function() {
                    if (t._pendingFilter == r) return setTimeout((function() {
                        i()
                    }), 0), null;
                    t.send("eth_uninstallFilter", [e])
                })).catch((t => {}))
            }(), e
        })).catch((t => {}))
    }
    _stopEvent(t) {
        "pending" === t.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null), super._stopEvent(t)
    }
    static hexlifyTransaction(t, r) {
        const e = Z(Ss);
        if (r)
            for (const n in r) r[n] && (e[n] = !0);
        W(t, e);
        const i = {};
        return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((function(r) {
            if (null == t[r]) return;
            const e = P(G.from(t[r]));
            "gasLimit" === r && (r = "gas"), i[r] = e
        })), ["from", "to", "data"].forEach((function(r) {
            null != t[r] && (i[r] = N(t[r]))
        })), t.accessList && (i.accessList = Zn(t.accessList)), i
    }
}
const Rs = new m(Go);
let Ts = 1;

function Cs(t, r) {
    const e = "Web3LegacyFetcher";
    return function(t, i) {
        const n = {
            method: t,
            params: i,
            id: Ts++,
            jsonrpc: "2.0"
        };
        return new Promise(((t, i) => {
            this.emit("debug", {
                action: "request",
                fetcher: e,
                request: et(n),
                provider: this
            }), r(n, ((r, o) => {
                if (r) return this.emit("debug", {
                    action: "response",
                    fetcher: e,
                    error: r,
                    request: n,
                    provider: this
                }), i(r);
                if (this.emit("debug", {
                        action: "response",
                        fetcher: e,
                        request: n,
                        response: o,
                        provider: this
                    }), o.error) {
                    const t = new Error(o.error.message);
                    return t.code = o.error.code, t.data = o.error.data, i(t)
                }
                t(o.result)
            }))
        }))
    }
}
class Bs extends Ps {
    constructor(t, r) {
        null == t && Rs.throwArgumentError("missing provider", "provider", t);
        let e = null,
            i = null,
            n = null;
        "function" == typeof t ? (e = "unknown:", i = t) : (e = t.host || t.path || "", !e && t.isMetaMask && (e = "metamask"), n = t, t.request ? ("" === e && (e = "eip-1193:"), i = function(t) {
            return function(r, e) {
                null == e && (e = []);
                const i = {
                    method: r,
                    params: e
                };
                return this.emit("debug", {
                    action: "request",
                    fetcher: "Eip1193Fetcher",
                    request: et(i),
                    provider: this
                }), t.request(i).then((t => (this.emit("debug", {
                    action: "response",
                    fetcher: "Eip1193Fetcher",
                    request: i,
                    response: t,
                    provider: this
                }), t)), (t => {
                    throw this.emit("debug", {
                        action: "response",
                        fetcher: "Eip1193Fetcher",
                        request: i,
                        error: t,
                        provider: this
                    }), t
                }))
            }
        }(t)) : t.sendAsync ? i = Cs(0, t.sendAsync.bind(t)) : t.send ? i = Cs(0, t.send.bind(t)) : Rs.throwArgumentError("unsupported provider", "provider", t), e || (e = "unknown:")), super(e, r), Y(this, "jsonRpcFetchFunc", i), Y(this, "provider", n)
    }
    send(t, r) {
        return this.jsonRpcFetchFunc(t, r)
    }
}
export {
    Dr as $, It as A, G as B, V as C, it as D, Zn as E, co as F, Dn as G, Lt as H, uo as I, lo as J, Yn as K, m as L, Ot as M, xt as N, Pt as O, Hr as P, ao as Q, so as R, Yr as S, Rt as T, Ut as U, Xr as V, Bs as W, eo as X, B as Y, St as Z, Jt as _, b as a, Xn as a0, Go as a1, Ps as a2, jo as a3, vs as a4, So as a5, P as a6, Ko as a7, Po as a8, bo as a9, E as aA, c as aB, Ho as aa, Is as ab, ms as ac, Qo as ad, _ as ae, gt as af, Hn as ag, Gt as ah, Dt as ai, xo as aj, Kt as ak, W as al, Gn as am, Er as an, Nt as ao, _t as ap, I as aq, R as ar, Et as as, y as at, br as au, Mr as av, no as aw, qn as ax, fo as ay, C as az, A as b, S as c, Y as d, M as e, N as f, Mt as g, T as h, D as i, Ct as j, Bt as k, Tt as l, jt as m, Yt as n, Vt as o, Wt as p, at as q, X as r, x as s, Ht as t, Xt as u, O as v, k as w, kt as x, Z as y, et as z
};
