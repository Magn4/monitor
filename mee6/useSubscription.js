import {
    z as e,
    t as a,
    Q as t
} from "./index-afe8eeea.js";
import {
    e as i
} from "./app-ba64cf70.js";
import {
    u as s
} from "./load_notifications-88398de1.js";
import {
    h as r
} from "./moment-e0d604bc.js";
const n = () => {
    const {
        guild: n
    } = e(), {
        addNotification: c
    } = s(), o = a(), {
        data: m,
        status: u,
        refetch: d
    } = i(["getGuildSubscription", n?.id], (async () => {
        const e = await t.getGuildSubscription(n?.id);
        if (e.ok) return e.data
    }));
    return {
        loading: "loading" === u,
        subscription: m,
        refetch: d,
        cancel: async e => {
            (await t.cancelPremiumSubscription(n?.id)).ok && (await d(), c({
                type: "success",
                content: o.formatMessage({
                    id: "premium.manage.cancel.success"
                }, {
                    date: r(m?.current_term_end).format("LLL")
                })
            }), e())
        },
        reactivate: async () => {
            const e = await t.reactivatePremiumSubscription(n?.id);
            if (!e.ok) {
                let a = "premium.manage.reactivate.error";
                return 403 === e.status && (a = "premium.manage.reactivate.forbidden"), void c({
                    type: "warning",
                    content: o.formatMessage({
                        id: a
                    })
                })
            }
            await new Promise((e => setTimeout(e, 1e4))), await d(), c({
                type: "success",
                content: o.formatMessage({
                    id: "premium.manage.reactivate.success"
                }, {
                    date: r().format("LLL")
                })
            })
        },
        pause: async e => {
            (await t.pausePremiumSubscription(n?.id)).ok && (await d(), e())
        },
        unpause: async () => {
            (await t.resumePremiumSubscription(n?.id)).ok && (await d(), c({
                type: "success",
                content: o.formatMessage({
                    id: "premium.manage.resume.success"
                }, {
                    date: r().format("LLL")
                })
            }))
        },
        grabFreeMonth: async () => {
            (await t.grabFreeMonthPremiumSubscription(n?.id)).ok && (await d(), c({
                type: "success",
                content: o.formatMessage({
                    id: "premium.manage.extend.success"
                }, {
                    date: r(m?.current_term_end).format("LLL")
                })
            }))
        }
    }
};
export {
    n as u
};
