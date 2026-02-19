import {
    g as e,
    f as s,
    c as a
} from "./api-32050a10.js";
import {
    y as r,
    z as t
} from "./index-67e26437.js";
import {
    c as i,
    e as n,
    u as o,
    t as c,
    f as u,
    g as p,
    h as l
} from "./app-36ea11eb.js";
const m = e => {
        switch (e) {
            case 0:
                return "lifetime";
            case 1:
            default:
                return "monthly";
            case 12:
                return "yearly";
            case 36:
                return "3years"
        }
    },
    d = () => {
        const d = r(),
            {
                guild: y
            } = t(),
            {
                loadPortal: g
            } = i(),
            {
                data: h,
                status: f,
                isLoading: x
            } = n(["getPremiumPrices", y?.id], (async () => {
                const s = await e(y?.id);
                return s.ok ? {
                    ...s.data,
                    plans: {
                        ...s.data.plans,
                        premium: {
                            ...s.data.plans.premium,
                            periods: Object.entries(s.data.plans.premium.periods).map((([e, s]) => ({
                                ...s,
                                price: s.price,
                                key: m(s.period_months),
                                original_price: s.original_price
                            })))
                        }
                    }
                } : {
                    currency: "",
                    country: "",
                    taxExclusive: !1,
                    plans: {
                        premium: {
                            periods: []
                        }
                    }
                }
            })),
            {
                couponId: _,
                autoApplyCoupon: v
            } = o();
        let w = null;
        const P = new URLSearchParams(window.location.search);
        P.get("s") && (w = P.get("s"));
        const k = (e, s, r = !1, t = []) => () => {
            if (y) return a(y.id, e, s, t, l(), p(), r, v ? _ : null).then((e => e.ok ? e.data : Promise.reject(e.status)))
        };
        return {
            currency: h?.currency || "",
            plans: h ? h.plans : void 0,
            country: h?.country,
            taxExclusive: !!h?.tax_exclusive,
            isLoading: "loading" === f,
            loading: x,
            checkout: async (e, a, r = [], t = !1) => {
                await g((i => {
                    i.openCheckout({
                        hostedPage: k(e, a, t, r),
                        error: console.log,
                        success: e => {
                            s(e).then((e => {
                                e.ok && (c("new_premium_buy_success", y ? y.id : null, {
                                    source: w
                                }), u.buyPremiumSuccess(w || "", y), ga("send", "event", {
                                    eventCategory: "premium",
                                    eventAction: "buy_success"
                                })), d.refetchQueries(["getGuildSubscription"])
                            }))
                        }
                    }, y, "premium")
                }))
            }
        }
    };
export {
    d as u
};
