import {
    z as a,
    Q as s
} from "./index-afe8eeea.js";
import {
    e as i
} from "./app-ba64cf70.js";
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
