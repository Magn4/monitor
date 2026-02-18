import {
    d as t,
    r as i,
    K as s
} from "./index-afe8eeea.js";
import {
    e as a
} from "./app-ba64cf70.js";
import {
    g as e
} from "./api-11bf0659.js";
const n = n => {
    const {
        user: r
    } = t(), o = i.useRef(), {
        data: c,
        status: d
    } = a(["getMonetizePlans", n, r?.id], (async () => {
        if (!n) return {
            plans: [],
            guild: {},
            active_subscription: void 0
        };
        const t = await e(n);
        return t.ok ? (t.data.plans.some((t => t._links.subscribe_with_stripe)) && await (i = t.data.account, new Promise(((t, a) => {
            const e = i?.stripe_id;
            if (document.getElementById("stripeScript")) return void t();
            const n = document.createElement("script"),
                r = document.head || document.getElementsByTagName("head")[0];
            n.id = "stripeScript", n.src = "https://js.stripe.com/v3/", n.onload = () => {
                o.current = Stripe(s.STRIPE_PUBLIC_KEY, {
                    stripeAccount: e
                }), t()
            }, r.insertBefore(n, r.firstChild)
        }))), {
            plans: t.data.plans || [],
            guild: t.data.guild || {},
            active_subscription: t.data.active_subscription
        }) : {
            plans: [],
            roles: {},
            account: void 0,
            guild: void 0
        };
        var i
    }));
    return {
        activeSubscription: c?.active_subscription || c?.plans?.find((t => t.active_subscription))?.active_subscription,
        plans: c?.plans || [],
        loading: "loading" === d,
        guild: c?.guild
    }
};
export {
    n as u
};
