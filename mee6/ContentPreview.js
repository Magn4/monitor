import {
    a4 as t,
    I as s,
    P as e,
    j as r,
    b as o,
    a5 as n,
    a6 as a
} from "./index-e0afec69.js";
import {
    C as i
} from "./Loader-4138e1c7.js";
import {
    q as p,
    r as c
} from "./app-b4886647.js";
import "./Loader2-ea5f73c7.js";
import "./CSSTransition-13331f95.js";
import "./objectWithoutPropertiesLoose-87a5ea27.js";
import "./modal.constants-09c27985.js";
import "./moment-e0d604bc.js";
const l = {
    changelog: ({
        entry: t
    }) => r.jsx(c, {
        open: !0,
        entries: [t]
    }),
    tutorial: ({
        entry: t
    }) => {
        const {
            locale: s
        } = o();
        return r.jsx(n, {
            to: `/${s}/tutorials/${t.fields.slug}?preview`
        })
    }
};
class m extends s.PureComponent {
    static propTypes = {
        locale: e.string
    };
    state = {
        entry: null
    };
    componentDidMount() {
        p.getEntry(this.props.params.entryId, {
            locale: "fr"
        }).then((t => {
            this.setState({
                entry: t
            })
        })).catch((() => alert("Error")))
    }
    render() {
        if (!this.state.entry) return r.jsx(i, {});
        const t = l[this.state.entry.sys.contentType.sys.id];
        return t ? r.jsx("div", {
            children: r.jsx(t, {
                entry: this.state.entry
            })
        }) : r.jsx("div", {
            children: "Component not found"
        })
    }
}
const d = t((t => {
    const s = a();
    return r.jsx(m, {
        ...t,
        params: s
    })
}));
export {
    d as
    default
};
