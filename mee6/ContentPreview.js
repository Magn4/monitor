import {
    a4 as t,
    I as s,
    P as e,
    j as r,
    b as o,
    a5 as n,
    a6 as a
} from "./index-8524466f.js";
import {
    C as i
} from "./Loader-92eafbbf.js";
import {
    q as p,
    r as c
} from "./app-3ecfb394.js";
import "./Loader2-7697ef2c.js";
import "./CSSTransition-fa458c8d.js";
import "./objectWithoutPropertiesLoose-87a5ea27.js";
import "./modal.constants-cb2154a2.js";
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
