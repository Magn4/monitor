import {
    e,
    bc as t,
    al as s,
    aU as r,
    j as i,
    L as o,
    F as a,
    a9 as n,
    I as l,
    v as c,
    a4 as d,
    a6 as p,
    b as u,
    a as m,
    aG as h,
    aH as f,
    r as x,
    t as g
} from "./index-684a1b71.js";
import {
    s as y
} from "./Loader2-db3a3ef5.js";
import {
    C as j
} from "./Loader-ea4de7b3.js";
import {
    a6 as b,
    a7 as w,
    a8 as v,
    q as N,
    a9 as O,
    b as A
} from "./app-91bc7f76.js";
import {
    F as E
} from "./Footer-c0771483.js";
import {
    Error404 as $
} from "./404-86d43f79.js";
import {
    h as k
} from "./moment-e0d604bc.js";
import {
    G as S
} from "./page_view-956ac92e.js";
import {
    S as T
} from "./select-23e38ebc.js";
import "./channels-selector.constants-65100461.js";
import "./CSSTransition-f7f7974d.js";
import "./objectWithoutPropertiesLoose-87a5ea27.js";
import "./modal.constants-e7a21a8a.js";
import "./viewports-a6773e3e.js";
import "./404Illustration-b32a696b.js";
import "./tslib-2a382dea.js";
import "./label-e3f8b961.js";
import "./lodash-f0bb2534.js";
import "./edit-03c87f9a.js";
import "./useMount-6e43746a.js";
import "./useEffectOnce-d6a661a4.js";
var z = {},
    C = e => encodeURIComponent(e).replace(/[!'()*]/g, (e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)),
    I = (e, t) => {
        if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === t) return [e];
        const s = e.indexOf(t);
        return -1 === s ? [e] : [e.slice(0, s), e.slice(s + t.length)]
    },
    U = function(e, t) {
        for (var s = {}, r = Object.keys(e), i = Array.isArray(t), o = 0; o < r.length; o++) {
            var a = r[o],
                n = e[a];
            (i ? -1 !== t.indexOf(a) : t(a, n, e)) && (s[a] = n)
        }
        return s
    };
! function(e) {
    const s = C,
        r = t,
        i = I,
        o = U;

    function a(e) {
        if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
    }

    function n(e, t) {
        return t.encode ? t.strict ? s(e) : encodeURIComponent(e) : e
    }

    function l(e, t) {
        return t.decode ? r(e) : e
    }

    function c(e) {
        return Array.isArray(e) ? e.sort() : "object" == typeof e ? c(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e
    }

    function d(e) {
        const t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e
    }

    function p(e) {
        const t = (e = d(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1)
    }

    function u(e, t) {
        return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
    }

    function m(e, t) {
        a((t = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, t)).arrayFormatSeparator);
        const s = function(e) {
                let t;
                switch (e.arrayFormat) {
                    case "index":
                        return (e, s, r) => {
                            t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === r[e] && (r[e] = {}), r[e][t[1]] = s) : r[e] = s
                        };
                    case "bracket":
                        return (e, s, r) => {
                            t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], s) : r[e] = [s] : r[e] = s
                        };
                    case "comma":
                    case "separator":
                        return (t, s, r) => {
                            const i = "string" == typeof s && s.includes(e.arrayFormatSeparator),
                                o = "string" == typeof s && !i && l(s, e).includes(e.arrayFormatSeparator);
                            s = o ? l(s, e) : s;
                            const a = i || o ? s.split(e.arrayFormatSeparator).map((t => l(t, e))) : null === s ? s : l(s, e);
                            r[t] = a
                        };
                    default:
                        return (e, t, s) => {
                            void 0 !== s[e] ? s[e] = [].concat(s[e], t) : s[e] = t
                        }
                }
            }(t),
            r = Object.create(null);
        if ("string" != typeof e) return r;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return r;
        for (const o of e.split("&")) {
            if ("" === o) continue;
            let [e, a] = i(t.decode ? o.replace(/\+/g, " ") : o, "=");
            a = void 0 === a ? null : ["comma", "separator"].includes(t.arrayFormat) ? a : l(a, t), s(l(e, t), a, r)
        }
        for (const i of Object.keys(r)) {
            const e = r[i];
            if ("object" == typeof e && null !== e)
                for (const s of Object.keys(e)) e[s] = u(e[s], t);
            else r[i] = u(e, t)
        }
        return !1 === t.sort ? r : (!0 === t.sort ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce(((e, t) => {
            const s = r[t];
            return Boolean(s) && "object" == typeof s && !Array.isArray(s) ? e[t] = c(s) : e[t] = s, e
        }), Object.create(null))
    }
    e.extract = p, e.parse = m, e.stringify = (e, t) => {
        if (!e) return "";
        a((t = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, t)).arrayFormatSeparator);
        const s = s => t.skipNull && null == e[s] || t.skipEmptyString && "" === e[s],
            r = function(e) {
                switch (e.arrayFormat) {
                    case "index":
                        return t => (s, r) => {
                            const i = s.length;
                            return void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? s : null === r ? [...s, [n(t, e), "[", i, "]"].join("")] : [...s, [n(t, e), "[", n(i, e), "]=", n(r, e)].join("")]
                        };
                    case "bracket":
                        return t => (s, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? s : null === r ? [...s, [n(t, e), "[]"].join("")] : [...s, [n(t, e), "[]=", n(r, e)].join("")];
                    case "comma":
                    case "separator":
                        return t => (s, r) => null == r || 0 === r.length ? s : 0 === s.length ? [
                            [n(t, e), "=", n(r, e)].join("")
                        ] : [
                            [s, n(r, e)].join(e.arrayFormatSeparator)
                        ];
                    default:
                        return t => (s, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? s : null === r ? [...s, n(t, e)] : [...s, [n(t, e), "=", n(r, e)].join("")]
                }
            }(t),
            i = {};
        for (const a of Object.keys(e)) s(a) || (i[a] = e[a]);
        const o = Object.keys(i);
        return !1 !== t.sort && o.sort(t.sort), o.map((s => {
            const i = e[s];
            return void 0 === i ? "" : null === i ? n(s, t) : Array.isArray(i) ? i.reduce(r(s), []).join("&") : n(s, t) + "=" + n(i, t)
        })).filter((e => e.length > 0)).join("&")
    }, e.parseUrl = (e, t) => {
        t = Object.assign({
            decode: !0
        }, t);
        const [s, r] = i(e, "#");
        return Object.assign({
            url: s.split("?")[0] || "",
            query: m(p(e), t)
        }, t && t.parseFragmentIdentifier && r ? {
            fragmentIdentifier: l(r, t)
        } : {})
    }, e.stringifyUrl = (t, s) => {
        s = Object.assign({
            encode: !0,
            strict: !0
        }, s);
        const r = d(t.url).split("?")[0] || "",
            i = e.extract(t.url),
            o = e.parse(i, {
                sort: !1
            }),
            a = Object.assign(o, t.query);
        let l = e.stringify(a, s);
        l && (l = `?${l}`);
        let c = function(e) {
            let t = "";
            const s = e.indexOf("#");
            return -1 !== s && (t = e.slice(s)), t
        }(t.url);
        return t.fragmentIdentifier && (c = `#${n(t.fragmentIdentifier,s)}`), `${r}${l}${c}`
    }, e.pick = (t, s, r) => {
        r = Object.assign({
            parseFragmentIdentifier: !0
        }, r);
        const {
            url: i,
            query: a,
            fragmentIdentifier: n
        } = e.parseUrl(t, r);
        return e.stringifyUrl({
            url: i,
            query: o(a, s),
            fragmentIdentifier: n
        }, r)
    }, e.exclude = (t, s, r) => {
        const i = Array.isArray(s) ? e => !s.includes(e) : (e, t) => !s(e, t);
        return e.pick(t, i, r)
    }
}(z);
const L = e(z);
var F, H, J = {
    exports: {}
};
(F = J).exports = (H = function() {
    var e = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),
        t = JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');

    function s(s, r) {
        if ("string" != typeof s) throw new Error("slugify: string argument expected");
        var i = t[(r = "string" == typeof r ? {
                replacement: r
            } : r || {}).locale] || {},
            o = void 0 === r.replacement ? "-" : r.replacement,
            a = void 0 === r.trim || r.trim,
            n = s.normalize().split("").reduce((function(t, s) {
                var a = i[s] || e[s] || s;
                return a === o && (a = " "), t + a.replace(r.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "")
            }), "");
        return r.strict && (n = n.replace(/[^A-Za-z0-9\s]/g, "")), a && (n = n.trim()), n = n.replace(/\s+/g, o), r.lower && (n = n.toLowerCase()), n
    }
    return s.extend = function(t) {
        Object.assign(e, t)
    }, s
})(), F.exports.default = H();
const Y = e(J.exports);

function M(e) {
    return i.jsx(b, {
        ...e
    })
}

function P({
    className: e,
    text: t,
    url: s
}) {
    return i.jsxs(o, {
        to: s,
        className: `flex flex-row text-white justify-start opacity-40 hover:opacity-70 ${e||""}`,
        children: [i.jsx("svg", {
            "aria-hidden": "true",
            role: "img",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            className: "-rotate-90",
            children: i.jsx("polygon", {
                fill: "currentColor",
                fillRule: "nonzero",
                points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
            })
        }), i.jsx("span", {
            className: "font-bold ml-[7px] text-[15px]",
            children: i.jsx(a, {
                id: t
            })
        })]
    })
}

function D({
    categories: e,
    locale: t
}) {
    const s = n(),
        r = "text-white underline",
        l = s.pathname.endsWith("/tutorials") || s.pathname.endsWith("/tutorials/");
    return i.jsx("div", {
        className: "w-[100%] bg-grey-700 overflow-scroll overflow-x-auto",
        children: i.jsx("div", {
            className: "flex flex-col h-[70px] px-10 py-6 max-w-[960px] m-auto",
            children: i.jsxs("nav", {
                className: "h-[70px] tracking-widest uppercase font-light",
                children: [i.jsx(o, {
                    className: `hover:underline mr-[50px] ${l?r:""}`,
                    to: `/${t}/tutorials`,
                    children: i.jsx(a, {
                        id: "tutorials.home"
                    })
                }), e.map((e => {
                    const a = new RegExp(`.*/tutorials/category/${Y(e).toLowerCase()}/?`),
                        n = s.pathname.match(a);
                    return i.jsx(o, {
                        className: `hover:underline mr-[50px] ${n?r:""}`,
                        to: `/${t}/tutorials/category/${Y(e).toLowerCase()}`,
                        children: e
                    })
                }))]
            })
        })
    })
}
y.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`, y.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 5px;
`, y.span`
  background-color: ${r};
  padding: 2px 10px;
  border-radius: 3px;
  margin-inline-end: 10px;
  margin-bottom: 10px;
  color: #9e9e9e;
  user-select: none;
  white-space: nowrap;
`;
const R = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "MEE6",
    url: "https://mee6.xyz",
    logo: {
        "@type": "ImageObject",
        url: "https://cdn-longterm.mee6.xyz/assets/logo.png",
        width: 777,
        height: 777
    }
};

function _(e) {
    const t = e.sys?.createdAt?.split("T")[0],
        s = e.sys?.updatedAt?.split("T")[0],
        r = document.location.href.split(/[?#]/)[0];
    return {
        "@context": "http://schema.org",
        "@type": "Article",
        headline: e.fields.title,
        name: e.fields.title,
        mainEntityOfPage: {
            "@type": "WebPage",
            id: r
        },
        author: R,
        datePublished: t,
        dateModified: s,
        publisher: R
    }
}

function q(e) {
    const t = [];
    console.log(e);
    for (const l of e.fields.content.content) "embedded-entry-block" === l.nodeType && "howTo" === l.data.target.sys.contentType.sys.id && t.push(l);
    if (0 === t.length) return null;
    const s = document.location.href.split(/[?#]/)[0],
        r = e.sys?.createdAt?.split("T")[0],
        i = e.sys?.updatedAt?.split("T")[0],
        o = t[0].anchor,
        a = [];
    for (const l of t) a.push(l.data.target.fields.steps.content.find((e => "ordered-list" === e.nodeType))?.content.map((e => ({
        "@type": "HowToStep",
        text: w(e),
        image: v(e),
        url: `${s}#${e.anchor}`
    }))));
    const n = 1 === t.length ? a : a.map(((e, s) => ({
        "@type": "HowToSection",
        name: t[s].data.target.fields.title,
        itemListElement: e
    })));
    return {
        "@context": "http://schema.org",
        "@type": "HowTo",
        headline: e.fields.title,
        name: e.fields.title,
        mainEntityOfPage: {
            "@type": "WebPage",
            id: `${document.location.href.split(/[?#]/)[0]}#${o}`
        },
        author: R,
        datePublished: r,
        dateModified: i,
        publisher: R,
        step: n
    }
}
const W = y.div`
  margin: 50px auto;
  padding: 0 40px;
  scroll-behavior: smooth;
  display: flex;
  justify-content: center;
  max-width: 1050px;

  @media (max-width: ${850}px) {
    flex-direction: column;
    max-width: 100%;
  }
`,
    G = y.div`
  padding: 0 0 0 30px;
  color: #ffffffc4;

  @media (max-width: ${850}px) {
    padding: 0;
  }
`,
    Z = y.a`
  line-height: 1.25;
  font-weight: 800;
  font-family: Helvetica Neue, Helvetica, sans-serif;
  margin-bottom: 15px;
  display: block;
  padding-top: 0;
  color: rgb(57 148 255);
  font-size: 14px;
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
  }
`,
    B = y.h1`
  text-transform: none;
  font-size: 37px;
  line-height: 1.25;
  font-weight: 800;
  font-family: Helvetica Neue, Helvetica, sans-serif;
  margin-bottom: 20px;
  padding-top: 0;
`,
    K = y.div`
  font-family: Helvetica Neue, Helvetica, sans-serif;
  color: #9e9e9e;
  font-size: 14px;
  margin-bottom: 25px;
  margin-top: 10px;
`,
    V = y.img`
  max-width: 650px;
  margin-bottom: 30px;
`,
    X = y.div`
  display: flex;
  flex-direction: column;
`,
    Q = y.nav`
  display: flex;
  flex-direction: column;
  max-width: 230px;
  min-width: 230px;
  align-self: flex-start;
  @media (max-width: ${850}px) {
    display: none;
  }
`,
    ee = y.div`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 10px;
  font-weight: bold;
  color: white;
`,
    te = y.a`
  margin-inline-end: 10px;
  margin-bottom: 10px;
  user-select: none;
  white-space: nowrap;
  padding: 10px 15px;
  width: fit-content;
  border-radius: 10px;
  color: #cdcdd0;
  background-color: #ffffff1c;

  &:hover {
    color: #fff;
    background-color: #ffffff2c;
  }
`,
    se = y.nav`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 20px;
  max-width: 230px;
  min-width: 230px;
  align-self: flex-start;
  margin-top: 20px;

  li {
    list-style: none;
  }

  @media (max-width: ${850}px) {
    max-width: unset;
    border-bottom: 0.5px solid #ffffff6b;
    width: 100%;
    margin-bottom: 26px;
    padding-bottom: 25px;
    position: unset;
    top: unset;
  }
`,
    re = y.a`
  color: ${e=>e.selected?"white":"#ffffff5e"};
  display: block;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${850}px) {
    margin-bottom: 10px;
  }
`,
    ie = y.div`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 10px;
  font-weight: bold;
  color: white;
`,
    oe = {
        "how-to-enable-intents-for-your-custom-bot": "how-to-enable-intents-for-your-bot-personalizer",
        "custom-bot-and-2-factor-authentication": "bot-personalizer-and-2-factor-authentication",
        "how-to-generate-a-custom-bot-token": "how-to-generate-a-bot-personalizer-token"
    };
class ae extends l.PureComponent {
    state = {
        anchors: [],
        loading: !0,
        tutorial: null,
        selectedAnchorId: null,
        howToJSON: null,
        articleJSON: null
    };
    componentDidMount() {
        this._fetchArticle(), this._containerRef = l.createRef()
    }
    componentDidUpdate(e) {
        e.params.slug !== this.props.params.slug && this._fetchArticle()
    }
    _generateAnchors = e => {
        const t = [],
            s = (e, s) => {
                t.push({
                    id: e,
                    text: s.slice(0, 120)
                })
            };
        let r = 0;
        const i = e => {
                e.data.target.fields.displayTitle && (e.anchor = `ht-${e.data.target.sys.id.slice(0,4)}`, s(e.anchor, e.data.target.fields.title));
                const t = e.data.target.fields.steps.content.find((e => "ordered-list" === e.nodeType));
                t && t.content.forEach(((t, r) => {
                    t.anchor = `ht-${e.data.target.sys.id.slice(0,4)}-${r.toString().padStart(2,"0")}`, s(t.anchor, `Step ${r+1}: ${w(t)}`)
                }))
            },
            o = e => {
                e.anchor = `faq-${e.data.target.sys.id.slice(0,4)}`, s(e.anchor, e.data.target.fields.title)
            };
        for (const n of e.fields.content.content) "heading-2" === n.nodeType && ((a = n).anchor = r.toString().padStart(2, "0"), s(a.anchor, a.content?.[0]?.value), r++), "embedded-entry-block" === n.nodeType && "howTo" === n.data.target.sys.contentType.sys.id && i(n), "embedded-entry-block" === n.nodeType && "faq" === n.data.target.sys.contentType.sys.id && o(n);
        var a;
        return [e, t]
    };
    _fetchArticle() {
        const e = void 0 !== L.parse(this.props.location.search, {
            ignoreQueryPrefix: !0
        }).preview ? N : O;
        e.getEntries({
            content_type: "tutorial",
            "fields.slug": this.props.params.slug
        }).then((t => {
            const s = t.items[0];
            return s ? e.getEntry(s.sys.id, {
                locale: "en"
            }) : void 0
        })).then((e => {
            const [t, s] = this._generateAnchors(e);
            this.setState({
                tutorial: t,
                anchors: s,
                loading: !1,
                howToJSON: q(t),
                articleJSON: _(t)
            }, (() => {
                setTimeout((() => {
                    const e = window.location.hash ? window.location.hash.slice(1) : null;
                    e && document.getElementById(e).scrollIntoView()
                }), 100)
            }))
        })).catch((e => {
            this.setState({
                loading: !1
            })
        }))
    }
    _renderThumbnail = () => this.state.tutorial.fields.thumbnail && this.state.tutorial.fields.displayThumbnail ? i.jsx(V, {
        src: this.state.tutorial.fields.thumbnail.fields.file.url,
        alt: this.state.tutorial.fields.thumbnail.fields.file.description || this.state.tutorial.fields.thumbnail.fields.file.title
    }) : null;
    render() {
        return oe[this.props.params.slug] && this.props.navigate(`/${this.props.locale}/tutorials/${oe[this.props.params.slug]}`), this.state.loading ? i.jsx("div", {
            className: "min-h-screen flex items-center justify-center",
            children: i.jsx(j, {})
        }) : this.state.tutorial ? i.jsx(S, {
            children: i.jsxs(W, {
                ref: this._containerRef,
                className: "relative",
                children: [i.jsxs(c, {
                    children: [i.jsx("title", {
                        children: this.state.tutorial.fields.metaTitle
                    }), i.jsx("link", {
                        rel: "canonical",
                        href: `https://mee6.xyz/${this.props.locale}/tutorials/${this.props.params.slug}`
                    }), i.jsx("meta", {
                        name: "description",
                        content: this.state.tutorial.fields.metaDescription
                    }), i.jsx("meta", {
                        property: "og:title",
                        content: this.state.tutorial.fields.title
                    }), this.state.tutorial.fields.thumbnail ? i.jsx("meta", {
                        property: "og:image",
                        content: `https:${this.state.tutorial.fields.thumbnail.fields.file.url}`
                    }) : null, i.jsx("meta", {
                        property: "og:description",
                        content: this.state.tutorial.fields.metaDescription
                    }), this.state.howToJSON ? i.jsx("script", {
                        type: "application/ld+json",
                        children: JSON.stringify(this.state.howToJSON)
                    }) : null, this.state.articleJSON ? i.jsx("script", {
                        type: "application/ld+json",
                        children: JSON.stringify(this.state.articleJSON)
                    }) : null]
                }), i.jsxs(X, {
                    children: [this.state.tutorial.fields.tags ? i.jsxs(Q, {
                        children: [i.jsx(P, {
                            text: "tutorials.home",
                            url: `/${this.props.locale}/tutorials`,
                            className: "mb-[30px]"
                        }), i.jsx(ee, {
                            children: i.jsx(a, {
                                id: "tutorials.tags"
                            })
                        }), i.jsx("div", {
                            className: "flex flex-row flex-wrap pr-[20px]",
                            children: this.state.tutorial.fields.tags.map(((e, t) => i.jsx(te, {
                                href: `/${this.props.locale}/tutorials/tag/${Y(e).toLowerCase()}`,
                                children: e
                            }, t)))
                        })]
                    }) : null, this.state.anchors.length > 0 ? i.jsxs(se, {
                        children: [i.jsx(ie, {
                            children: i.jsx(a, {
                                id: "tutorials.toc"
                            })
                        }), i.jsx("ol", {
                            children: this.state.anchors.map(((e, t) => i.jsx("li", {
                                children: i.jsx(re, {
                                    href: `#${e.id}`,
                                    selected: this.state.selectedAnchorId,
                                    dir: "ltr",
                                    children: e.text
                                })
                            })))
                        })]
                    }) : null]
                }), i.jsxs(G, {
                    dir: "ltr",
                    children: [i.jsxs("div", {
                        children: [this.state.tutorial.fields.category ? i.jsx(Z, {
                            href: `/${this.props.locale}/tutorials/category/${Y(this.state.tutorial.fields.category).toLowerCase()}`,
                            children: this.state.tutorial.fields.category
                        }) : null, i.jsx(B, {
                            children: this.state.tutorial.fields.title
                        }), i.jsxs(K, {
                            children: [i.jsx("b", {
                                children: i.jsx(a, {
                                    id: "tutorials.lastUpdate"
                                })
                            }), " ", k(this.state.tutorial.sys.updatedAt || this.state.tutorial.sys.createdAt).format("LL")]
                        })]
                    }), this._renderThumbnail(), i.jsx(M, {
                        node: this.state.tutorial.fields.content,
                        includes: this.state.includes
                    })]
                })]
            })
        }) : i.jsx($, {})
    }
}
const ne = d((e => {
    const t = p(),
        s = n(),
        {
            locale: r
        } = u(),
        o = m();
    return i.jsx(ae, {
        ...e,
        params: t,
        location: s,
        locale: r,
        navigate: o
    })
}));
y.section`
  text-align: center;
  width: 100%;
  margin-bottom: 50px;
  margin-top: 15px;

  h1 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  p {
    font-size: 22px;
  }
`;
const le = y.div`
  display: flex;
  flex-direction: row;
  padding: 50px 0;
  border-bottom: 1px solid #ffffff11;
  @media (max-width: ${850}px) {
    flex-direction: column;
  }

  &:last-of-type {
    border: none;
  }
`,
    ce = y.div`
  min-width: 250px;
  min-height: 180px;
  display: inline-block;
  background-size: cover;
  background-position: center center;
  background-image: url(${e=>e.url});
  border-radius: 0;
  margin-right: 30px;
  @media (max-width: ${850}px) {
    margin-bottom: 20px;
  }
`,
    de = y.div`
  display: flex;
  flex-direction: column;

  p {
    margin-top: 12px;
    font-size: 16px;
  }
`,
    pe = y.h2`
  font-size: 24px;
  color: white;
  line-height: 1.25;
  font-weight: 800;
  font-family: Helvetica Neue, Helvetica, sans-serif;
  text-transform: none;
  padding-top: 0;
`,
    ue = e => {
        const [t, s] = x.useState({
            entries: [],
            entriesLoading: !0,
            categories: [],
            selectedCategory: "All"
        }), r = p();
        x.useEffect((() => {
            O.getEntries({
                content_type: "tutorial",
                locale: "en"
            }).then((e => {
                const r = [...new Set(e.items.filter((e => !!e.fields.category)).map((e => e.fields.category)))];
                s({
                    ...t,
                    entries: e.items,
                    entriesLoading: !1,
                    categories: r
                })
            }))
        }), []);
        const n = g(),
            l = t => t.fields.thumbnail ? i.jsx(o, {
                to: `/${e.locale}/tutorials/${t.fields.slug}`,
                children: i.jsx(ce, {
                    url: t.fields.thumbnail.fields.file.url
                })
            }) : null,
            d = t => t.fields.category ? i.jsx("span", {
                className: "font-medium font-[Helvetica Neue] mb-[10px] block pt-[0] text-blue-default text-[14px] uppercase",
                children: i.jsx(o, {
                    to: `/${e.locale}/tutorials/category/${Y(t.fields.category).toLowerCase()}`,
                    children: t.fields.category
                })
            }) : null,
            u = t => i.jsx("div", {
                children: t.map((t => i.jsxs(le, {
                    children: [l(t), i.jsxs(de, {
                        dir: "ltr",
                        children: [d(t), i.jsx(o, {
                            to: `/${e.locale}/tutorials/${t.fields.slug}`,
                            children: i.jsx(pe, {
                                children: t.fields.title
                            })
                        }), i.jsx("p", {
                            children: i.jsx(o, {
                                to: `/${e.locale}/tutorials/${t.fields.slug}`,
                                children: t.fields.excerpt
                            })
                        })]
                    }, t.fields.slug)]
                })))
            }),
            m = s => i.jsxs(i.Fragment, {
                children: [i.jsxs(c, {
                    children: [i.jsx("title", {
                        children: `${s} | MEE6 Tutorials`
                    }), i.jsx("meta", {
                        name: "description",
                        content: n.formatMessage({
                            id: "tutorials.home.description"
                        })
                    }), i.jsx("meta", {
                        property: "og:title",
                        content: `${s} | MEE6 Tutorials`
                    }), i.jsx("meta", {
                        property: "og:description",
                        content: n.formatMessage({
                            id: "tutorials.home.description"
                        })
                    })]
                }), i.jsx(D, {
                    locale: e.locale,
                    categories: t.categories
                }), i.jsx("section", {
                    className: "pt-[20px] pb-[50px]",
                    children: i.jsxs("div", {
                        className: "flex flex-col px-10 py-6 max-w-[960px] m-auto",
                        children: [i.jsx("h1", {
                            className: "font-bold mb-[20px] uppercase text-[30px] tracking-widest border-b-[4px] border-blue-default w-fit pb-[5px]",
                            children: s
                        }), u(t.entries.filter((e => e.fields.category === s)))]
                    })
                })]
            }),
            h = s => i.jsxs(i.Fragment, {
                children: [i.jsxs(c, {
                    children: [i.jsx("title", {
                        children: `${s} | MEE6 Tutorials`
                    }), i.jsx("meta", {
                        name: "description",
                        content: n.formatMessage({
                            id: "tutorials.home.description"
                        })
                    }), i.jsx("meta", {
                        property: "og:title",
                        content: `${s} | MEE6 Tutorials`
                    }), i.jsx("meta", {
                        property: "og:description",
                        content: n.formatMessage({
                            id: "tutorials.home.description"
                        })
                    })]
                }), i.jsx(D, {
                    locale: e.locale,
                    categories: t.categories
                }), i.jsx("section", {
                    className: "pt-[20px] pb-[50px]",
                    children: i.jsxs("div", {
                        className: "flex flex-col px-10 py-6 max-w-[960px] m-auto",
                        children: [i.jsx("h1", {
                            className: "font-bold mb-[20px] uppercase text-[30px] tracking-widest border-b-[4px] border-blue-default w-fit pb-[5px]",
                            children: s
                        }), u(t.entries.filter((e => e.fields.tags && e.fields.tags.includes(s))))]
                    })
                })]
            });
        if (t.entriesLoading) return i.jsx("div", {
            className: "flex flex-col min-h-screen px-10 py-6 max-w-[960px] m-auto",
            children: i.jsx(j, {})
        });
        if (e.category) {
            const e = t.categories.find((e => Y(e).toLowerCase() === r.slug));
            return i.jsx("div", {
                className: "w-[100%]",
                children: m(e)
            })
        }
        if (e.tag) {
            const e = t.entries.map((e => e.fields.tags || [])).flat().find((e => Y(e).toLowerCase() === r.slug));
            return i.jsx("div", {
                className: "w-[100%]",
                children: h(e)
            })
        }
        return i.jsx("div", {
            className: "w-[100%]",
            children: i.jsxs(i.Fragment, {
                children: [i.jsxs(c, {
                    children: [i.jsx("title", {
                        children: n.formatMessage({
                            id: "tutorials.home.title"
                        })
                    }), i.jsx("meta", {
                        name: "description",
                        content: n.formatMessage({
                            id: "tutorials.home.description"
                        })
                    }), i.jsx("meta", {
                        property: "og:title",
                        content: n.formatMessage({
                            id: "tutorials.home.title"
                        })
                    }), i.jsx("meta", {
                        property: "og:description",
                        content: n.formatMessage({
                            id: "tutorials.home.description"
                        })
                    })]
                }), i.jsxs(i.Fragment, {
                    children: [i.jsxs("section", {
                        className: "text-center mb-[130px] mt-[110px] width-[100%]",
                        children: [i.jsx("h1", {
                            className: "text-[50px] font-bold",
                            children: i.jsx(a, {
                                id: "tutorials.hero.title"
                            })
                        }), i.jsx("p", {
                            className: "text-[24px] mt-[10px]",
                            children: i.jsx(a, {
                                id: "tutorials.hero.subtitle"
                            })
                        })]
                    }), i.jsx(D, {
                        locale: e.locale,
                        categories: t.categories
                    })]
                }), i.jsx("section", {
                    className: "bg-dark-800 pt-[50px] pb-[50px]",
                    children: i.jsxs("div", {
                        className: "flex flex-col px-10 py-6 max-w-[960px] m-auto",
                        children: [i.jsx("h1", {
                            className: "font-bold mb-[20px] uppercase text-[30px] tracking-widest border-b-[4px] border-blue-default w-fit pb-[5px]",
                            children: i.jsx(a, {
                                id: "tutorials.mostPopular"
                            })
                        }), u(t.entries.filter((e => e.fields.popular)))]
                    })
                }), i.jsx("section", {
                    className: "pt-[50px] pb-[50px]",
                    children: i.jsxs("div", {
                        className: "relative flex flex-col px-10 py-6 max-w-[960px] m-auto",
                        children: [i.jsx("h1", {
                            className: "font-bold mb-[20px] uppercase text-[30px] tracking-widest border-b-[4px] border-blue-default w-fit pb-[5px]",
                            children: i.jsx(a, {
                                id: "tutorials.browseAll"
                            })
                        }), i.jsx("div", {
                            className: "absolute max-w-[200px] min-w-[200px] top-[24px] right-[40px]",
                            children: i.jsx(T, {
                                options: ["All", ...t.categories],
                                value: t.selectedCategory,
                                onChange: e => s({
                                    ...t,
                                    selectedCategory: e
                                })
                            })
                        }), u("All" === t.selectedCategory ? t.entries : t.entries.filter((e => e.fields.category === t.selectedCategory)))]
                    })
                })]
            })
        })
    },
    me = d((e => {
        const {
            locale: t
        } = u();
        return i.jsx(ue, {
            ...e,
            locale: t
        })
    }));

function he() {
    const e = h([f({
        path: "/",
        element: i.jsx(me, {})
    }), f({
        path: "/category/:slug",
        element: i.jsx(me, {
            category: !0
        })
    }), f({
        path: "/tag/:slug",
        element: i.jsx(me, {
            tag: !0
        })
    }), f({
        path: ":slug",
        element: i.jsx(ne, {})
    })]);
    return i.jsxs(S, {
        children: [i.jsx(A, {}), e, i.jsx(E, {})]
    })
}
export {
    he as
    default
};
