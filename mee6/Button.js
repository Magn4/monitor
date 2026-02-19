import {
    A as o,
    W as e,
    m as r,
    x as i,
    D as n,
    E as a,
    R as s,
    l as t,
    k as d,
    H as l,
    T as c,
    I as p,
    j as b,
    F as g,
    P as $,
    J as u,
    L as h
} from "./index-67e26437.js";
import {
    s as k,
    A as m
} from "./Loader2-a0775a07.js";
import {
    I as f,
    S as x
} from "./Icon-1873cd36.js";
import {
    L as D
} from "./app-36ea11eb.js";
import {
    m as y,
    p as v
} from "./mixins-9df48c32.js";
import {
    R as P
} from "./Grid-a92b7c1d.js";
const R = {
        SMALL: "small",
        DEFAULT: "default",
        LARGE: "large",
        XLARGE: "xlarge"
    },
    I = {
        PRIMARY: "primary",
        SECONDARY: "secondary",
        TERTIARY: "tertiary",
        DANGER: "danger",
        SUCCESS: "success",
        PREMIUM: "premium",
        OUTLINED: "outlined",
        LINK_PRIMARY: "linkPrimary",
        LINK_SECONDARY: "linkSecondary",
        WHITE: "white"
    },
    L = {
        [I.PRIMARY]: {
            background: o,
            color: e,
            backgroundHover: "#0076FF",
            backgroundPressed: "#245998",
            backgroundDisabled: "#1e3c65",
            opacityDisabled: .4
        },
        [I.SECONDARY]: {
            background: r,
            color: e,
            backgroundHover: "#6B6E7E",
            backgroundPressed: i,
            colorDisabled: n,
            backgroundDisabled: i
        },
        [I.TERTIARY]: {
            color: e,
            background: "rgba(255, 255, 255, 0.1)",
            backgroundHover: "rgba(255, 255, 255, 0.2)",
            opacityPressed: .5,
            opacityDisabled: .25
        },
        [I.OUTLINED]: {
            background: "transparent",
            color: a,
            border: n,
            colorHover: e,
            colorPressed: a,
            colorDisabled: n
        },
        [I.DANGER]: {
            background: s(t, .12),
            color: t,
            backgroundHover: s(t, .24),
            backgroundPressed: s(t, .08),
            backgroundDisabled: s(t, .08),
            opacityDisabled: .54
        },
        [I.SUCCESS]: {
            background: s(d, .12),
            color: d,
            backgroundHover: s(d, .24),
            backgroundPressed: s(d, .08),
            backgroundDisabled: s(d, .08),
            opacityDisabled: .54
        },
        [I.PREMIUM]: {
            background: s(l, .12),
            color: l,
            backgroundHover: s(l, .24),
            backgroundPressed: s(l, .08),
            backgroundDisabled: s(l, .08),
            opacityDisabled: .56
        },
        [I.LINK_PRIMARY]: {
            background: "transparent",
            color: o,
            colorHover: e,
            colorDisabled: n
        },
        [I.LINK_SECONDARY]: {
            background: "transparent",
            color: c,
            colorHover: e,
            colorDisabled: n
        },
        [I.WHITE]: {
            background: e,
            backgroundHover: s(e, .88),
            backgroundPressed: s(e, .76),
            color: o,
            opacityDisabled: .4
        }
    },
    C = Object.entries(L).reduce(((o, [e, r]) => ({
        ...o,
        [e]: {
            background: r.background,
            color: r.color,
            border: r.border || void 0,
            backgroundHover: r.backgroundHover || r.background,
            colorHover: r.colorHover || r.color,
            borderHover: r.borderHover || r.border || void 0,
            backgroundPressed: r.backgroundPressed || r.background,
            opacityPressed: r.opacityPressed || 1,
            colorPressed: r.colorPressed || r.color,
            borderPressed: r.borderPressed || r.border || void 0,
            colorDisabled: r.colorDisabled || r.color,
            backgroundDisabled: r.backgroundDisabled || r.background,
            borderDisabled: r.borderDisabled || r.border || void 0,
            opacityDisabled: r.opacityDisabled || void 0
        }
    })), {}),
    E = k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.15s ease-out;

  ${o=>o.$left&&m`
      justify-content: flex-start;
    `}
`,
    A = k(f)``,
    H = k(D)`
  pointer-events: none;
  opacity: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  transition: opacity 0.15s ease-out;
`,
    j = k.button`
  font-family: 'proxima-nova', sans-serif;
  border-radius: 8px;
  min-height: 38px;
  font-size: 14px;
  line-height: 22px;
  padding-inline-end: 16px;
  padding-inline-start: 16px;
  transition: 0.15s ease-out;
  box-sizing: border-box;
  border: none;
  outline: none;
  cursor: pointer;
  transition-property: background-color, color, opacity, border;
  text-decoration: none;
  position: relative;
  user-select: none;
  flex-shrink: 0;
  -webkit-appearance: initial;
  ${o=>y(o)}
  ${o=>v(o)}

  ${o=>o.$size===R.XLARGE&&m`
      padding-inline-end: 48px;
      padding-inline-start: 48px;
      min-height: 68px;
      font-size: 18px;
      line-height: 26px;
    `}

  ${o=>o.$link&&m`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${o=>!o.$hasChildren&&o.$hasIcon&&m`
      padding-inline-end: 9px;
      padding-inline-start: 9px;
    `}

  ${o=>o.$hasChildren&&o.$hasIcon&&!o.$iconLeft&&m`
      padding-inline-end: 8px;

      ${A} {
        margin-inline-start: 8px;
      }
    `}

  ${o=>o.$hasChildren&&o.$iconLeft&&o.$hasIcon&&m`
      padding-inline-start: 8px;

      ${A} {
        margin-inline-start: 0;
        margin-inline-end: 8px;
      }
    `}

  ${o=>o.$size===R.LARGE&&m`
      padding-inline-end: 40px;
      padding-inline-start: 40px;
      min-height: 56px;
      font-size: 16px;
      line-height: 24px;

      ${o.$hasChildren&&o.$hasIcon&&!o.$iconLeft&&m`
        padding-inline-end: 16px;

        ${A} {
          margin-inline-start: 16px;
        }
      `}

      ${o.$hasChildren&&o.$iconLeft&&o.$hasIcon&&m`
        padding-inline-start: 16px;

        ${A} {
          margin-inline-start: 0;
          margin-inline-end: 16px;
        }
      `}
    `}

  ${A} [data-fill] {
    transition: fill 0.15s ease-out;
  }

  ${o=>o.$iconLeft&&m`
      ${A} {
        order: -1;
      }
    `}

  ${o=>{return e=C[o.$theme]||C[I.PRIMARY],m`
  background: ${e.background};
  color: ${e.color};
  [data-fill='main'] {
    fill: ${e.color};
  }
  [data-stroke='main'] {
    stroke: ${e.color};
  }
  border: ${e.border?`1px solid ${e.border}`:"none"};

  &:hover,
  &:focus {
    background: ${e.backgroundHover};
    color: ${e.colorHover};
    border: ${e.borderHover?`1px solid ${e.borderHover}`:"none"};

    [data-fill='main'] {
      fill: ${e.colorHover};
    }
    [data-stroke='main'] {
      stroke: ${e.colorHover};
    }
  }

  &:active {
    background: ${e.backgroundPressed};
    color: ${e.colorPressed};
    border: ${e.borderPressed?`1px solid ${e.borderPressed}`:"none"};
    opacity: ${e.opacityPressed};

    [data-fill='main'] {
      fill: ${e.colorPressed};
    }
    [data-stroke='main'] {
      stroke: ${e.colorPressed};
    }
  }

  &:disabled {
    background: ${e.backgroundDisabled};
    color: ${e.colorDisabled};
    border: ${e.borderDisabled?`1px solid ${e.borderDisabled}`:"none"};

    ${e.opacityDisabled&&m`
      ${E} {
        opacity: ${e.opacityDisabled};
      }
    `}

    [data-fill='main'] {
      fill: ${e.colorDisabled};
    }
    [data-stroke='main'] {
      stroke: ${e.colorDisabled};
    }
  }
`;var e}}

  ${o=>o.$loading&&m`
      ${E} {
        opacity: 0.1;
      }

      ${H} {
        opacity: 1;
      }
    `}

  ${o=>o.$transparent&&m`
      padding-inline: 0;
    `}

    ${o=>o.$hasIcon&&!o.$hasChildren&&(o.$theme===I.LINK_SECONDARY||o.$theme===I.LINK_PRIMARY)&&m`
      min-height: 0;
      padding: 0;
    `}

  ${o=>o.$rounded&&o.$hasIcon&&!o.$hasChildren&&m`
      border-radius: 50%;
      width: 24px;
      height: 24px;
      max-height: 24px;
      min-height: 24px;
      line-height: 24px;
      padding-top: 0;
      padding-bottom: 0;
      padding-inline-start: 0;
      padding-inline-end: 0;
    `}

  &:disabled {
    cursor: not-allowed;
  }

  ${o=>y(o)}
  ${o=>v(o)}
`;
class S extends p.Component {
    state = {
        loading: !1
    };
    root = p.createRef();
    onClick = async o => {
        if (!(this.props.onClick || this.props.to || this.props.href) || this.state.loading || this.props.disabled) o.preventDefault();
        else if (this.props.onClick)
            if (this.props.awaitProm) {
                if (this.setState({
                        loading: !0
                    }), await this.props.onClick(o), !this._ismounted) return;
                this.setState({
                    loading: !1
                })
            } else this.props.onClick(o)
    };
    componentDidMount() {
        this._ismounted = !0
    }
    componentWillUnmount() {
        this._ismounted = !1
    }
    render() {
        const {
            to: o,
            theme: e,
            children: r,
            icon: i,
            iconLeft: n,
            onClick: a,
            loading: s,
            size: t,
            transparent: d,
            iconSize: l,
            rounded: c,
            awaitProm: p,
            alignLeft: $,
            titleKey: u,
            ...k
        } = this.props;
        let m;
        return o ? m = h : k.href && (m = "a", k.type = void 0), b.jsxs(j, {
            as: m,
            $link: !!m,
            $theme: e,
            $size: t,
            $hasChildren: !!r,
            $hasIcon: !!i,
            $iconLeft: n,
            $loading: this.state.loading || s,
            $transparent: d,
            $rounded: c,
            to: o,
            onClick: this.onClick,
            ref: this.root,
            ...k,
            children: [b.jsx(H, {}), b.jsxs(E, {
                $left: this.props.alignLeft,
                children: [u ? b.jsx(g, {
                    id: u
                }) : r, this.props.icon && b.jsx(A, {
                    icon: this.props.icon,
                    size: l
                })]
            })]
        })
    }
}
S.propTypes = {
    type: $.string,
    children: $.oneOfType([$.arrayOf($.node), $.node]),
    theme: $.oneOf(Object.values(I)),
    size: $.oneOf(Object.values(R)),
    disabled: $.bool,
    icon: $.string,
    iconLeft: $.bool,
    iconSize: $.oneOf(Object.values(x)),
    className: $.string,
    to: $.oneOfType([$.string, $.exact({
        pathname: $.string
    })]),
    transparent: $.bool,
    onClick: $.func,
    awaitProm: $.bool,
    loading: $.bool,
    href: $.string,
    rounded: $.bool,
    alignLeft: $.bool
}, S.defaultProps = {
    type: "button",
    theme: I.PRIMARY,
    size: R.DEFAULT,
    iconLeft: !1,
    transparent: !1,
    awaitProm: !0,
    loading: !1,
    iconSize: "small",
    alignLeft: !1
}, k.a`
  color: ${u};
  text-decoration: underline;
`, k(P)`
  margin-top: ${o=>o?.$top?24:0}px;
  display: flex;
  align-items: center;
  grid-gap: 8px;
`;
export {
    S as B
};
