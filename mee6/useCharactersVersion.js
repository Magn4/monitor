import {
    an as e,
    r as a
} from "./index-afe8eeea.js";
const n = () => {
    const [n, s] = a.useState(void 0), {
        enabled: o
    } = (() => {
        const a = e.useFlags()?.find((e => "force-chars-v1" === e.name));
        return {
            enabled: a?.enabled && a?.variant?.name?.includes("with-force-chars-v1")
        }
    })();
    return a.useEffect((() => {
        void 0 !== o && s(o)
    }), [o]), {
        loading: void 0 === o || void 0 === n,
        v1: !!n
    }
};
export {
    n as u
};
