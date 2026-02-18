const r = (r, e) => new Intl.NumberFormat(void 0, {
        style: "currency",
        currency: e.toUpperCase()
    }).format(r / 100),
    e = (r, e) => new Intl.NumberFormat(void 0, {
        style: "currency",
        currency: e.toUpperCase()
    }).format(r),
    c = r => new Intl.NumberFormat(void 0, {
        style: "currency",
        currency: r.toUpperCase(),
        currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((r => "currency" === r.type))?.value ?? r.toUpperCase(),
    n = (r, e) => {
        const c = e.filter((e => e.currency === r.currency)).map((r => r.price / r.months)),
            n = Math.max(...c);
        if (0 === n) return 0;
        const t = r.price / r.months;
        return Math.round(100 * (1 - t / n))
    },
    t = {
        minPrice: 3,
        maxPrice: 6e3
    },
    a = (r, e) => {
        const c = r.find((r => r.code === e));
        return c ? {
            minPrice: c.minPrice,
            maxPrice: c.maxPrice
        } : t
    },
    o = (r, e) => r.every((r => ((r, e) => {
        const {
            minPrice: c,
            maxPrice: n
        } = a(e, r.currency);
        return r.price >= c && r.price <= n
    })(r, e)));
export {
    r as a, a as b, n as c, o as d, e as f, c as g
};
