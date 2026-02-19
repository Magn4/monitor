import {
    z as a,
    Q as s
} from "./index-67e26437.js";
import {
    e as i
} from "./app-36ea11eb.js";
const t = () => {
    const {
        guild: t
    } = a(), {
        data: d,
        isLoading: n
    } = i(["userManagedGuilds"], (async () => {
        const a = await s.getManagedGuilds();
        if (a?.ok) {
            const s = a?.data?.guilds?.filter((a => a?.bot));
            return s?.find((a => a?.id == a?.id)) || s.push(t), s
        }
        return []
    }));
    return {
        guilds: d,
        loading: n
    }
};
export {
    t as u
};
