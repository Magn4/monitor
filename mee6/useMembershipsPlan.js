import "./index-afe8eeea.js";
import "./moment-e0d604bc.js";
const e = e => e?.bundles?.map((e => ({
        pricePerMonth: e.price / e.months,
        ...e
    }))).sort(((e, r) => e.pricePerMonth - r.pricePerMonth))[0],
    r = e => e.bundles.filter((e => e._links?.upgrade));
export {
    e as c, r as u
};
