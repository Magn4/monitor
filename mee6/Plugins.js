import {
    D as e,
    W as s,
    A as t,
    r as i,
    j as a,
    I as n,
    aT as l,
    v as r,
    B as o,
    F as c,
    b as d,
    t as g,
    E as x,
    T as m,
    q as p,
    V as h,
    d as A,
    a9 as j,
    ab as u,
    ac as b
} from "./index-afe8eeea.js";
import {
    s as f,
    A as w
} from "./Loader2-e1b3d35e.js";
import {
    m as E,
    a as v,
    t as N
} from "./viewports-c65d73a1.js";
import {
    b as y,
    I as k
} from "./app-ba64cf70.js";
import {
    F as C,
    b as I,
    s as B,
    d as R,
    C as Q,
    H as M
} from "./styles-8925274f.js";
import {
    A as O
} from "./discord_button-833e5a26.js";
import {
    P as F
} from "./personalize_banner-d62d60bc.js";
import {
    G as U
} from "./page_view-108bcc78.js";
import {
    T
} from "./Title-b4f370d0.js";
import {
    F as D
} from "./Footer-55333e9b.js";
import {
    A as H
} from "./aos-4add535f.js"; /* empty css            */
import {
    C as z,
    T as L
} from "./title-561753ff.js";
import {
    u as J
} from "./public_page-79dba24a.js";
import "./modal.constants-0cca4730.js";
import "./moment-e0d604bc.js";
import "./throttle-57801fc9.js";
const S = f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,
    Y = f.div`
  display: flex;
  width: 100%;
  align-self: stretch;
`,
    P = f.div`
  pointer-events: none;
  opacity: 0;
  transition: 0.3s ease-out;
  transition-property: opacity;
  width: 100%;

  ${e=>e.$index&&w`
      transform: translateX(-${100*e.$index}%);
    `}

  ${e=>e.$active&&w`
      pointer-events: all;
      opacity: 1;
    `}
`,
    G = f.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,
    K = f.button`
  cursor: pointer;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  width: 40px;
  height: 8px;
  border-radius: 8px;
  background-color: ${e};
  transition: background-color 0.3s ease-out;

  :focus,
  :hover {
    background-color: ${s};
  }

  :not(:first-child) {
    margin-left: 16px;
  }

  ${e=>e.$active&&w`
      && {
        cursor: default;
        background-color: ${t};
      }
    `}
`,
    X = f(C)`
  margin: 156px auto;

  ${E(w`
    margin: 80px auto;
  `)}
`,
    V = f.div`
  background: ${l};
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  color: ${s};
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${E(w`
    margin: 0 auto 32px;
  `)}
`,
    Z = f(I)`
  ${B};

  ${v(w`
    position: relative;
    margin-top: ${246}px;

    ::before {
      content: '';
      display: block;
      height: ${45.5}px;
      border-left: 1px dashed ${e};
      transform: scaleY(4);
      transform-origin: bottom;
      position: absolute;
      bottom: 100%;
      margin-bottom: 32px;
    }
  `)}
`,
    W = f((({
        children: e,
        disabled: s,
        ...t
    }) => {
        const [l, r] = i.useState(0), o = i.useRef(null), c = () => {
            r((s => (s + 1) % n.Children.count(e)))
        };
        return i.useEffect((() => (o.current || s ? s && o.current && clearInterval(o.current) : o.current = setInterval(c, 5e3), () => {
            o.current && clearInterval(o.current)
        })), [s]), s ? e : a.jsxs(S, {
            ...t,
            children: [a.jsx(Y, {
                children: n.Children.map(e, ((e, s) => a.jsx(P, {
                    $index: s,
                    $active: l === s,
                    children: e
                }, s)))
            }), a.jsx(G, {
                children: n.Children.map(e, ((e, s) => a.jsx(K, {
                    $active: l === s,
                    onClick: () => {
                        o.current && clearInterval(o.current), r(s)
                    }
                }, s)))
            })]
        })
    }))`
  ${E(w`
    margin: 32px auto 0;
    width: min(100%, 560px);
  `)}
`;
class q extends n.Component {
    i18n = e => this.props.intl.formatMessage({
        id: `public.plugins.management.${e}`
    });
    render() {
        return a.jsxs(U, {
            children: [a.jsxs(r, {
                children: [a.jsx("title", {
                    children: "The Best Discord Moderation Bot | MEE6"
                }), a.jsx("link", {
                    rel: "canonical",
                    href: `https://mee6.xyz/${this.props.locale}/plugins/management`
                }), a.jsx("meta", {
                    name: "description",
                    content: this.i18n("hero.description")
                })]
            }), a.jsx(y, {
                redirectToDashboard: !0
            }), a.jsxs("div", {
                children: [a.jsx(R, {
                    image: "/assets/IllustrationPublicManagement-525ab4e0.svg",
                    title: this.i18n("hero.title"),
                    description: this.i18n("hero.description")
                }), a.jsxs(Q, {
                    children: [a.jsx(I, {
                        image: "/assets/MuteKickBan-72d2793f.webp",
                        title: this.i18n("moderator.title"),
                        description: this.i18n("moderator.description"),
                        floatingImage: !0,
                        ref: this.props.registerRef("moderator"),
                        $visible: !0
                    }), a.jsxs(W, {
                        disabled: !this.props.isMobile,
                        children: [a.jsx(Z, {
                            image: "/assets/AutoModeration-92fa7528.png",
                            title: this.i18n("automoderator.title"),
                            description: this.i18n("automoderator.description"),
                            preContent: () => a.jsx(V, {
                                children: "01"
                            }),
                            smallTitle: !0,
                            floatingImage: !0,
                            mobileNoReverse: !0,
                            ref: this.props.registerRef("automoderator"),
                            $visible: !0,
                            children: a.jsx(O, {
                                className: "mt-8",
                                label: "none"
                            })
                        }), a.jsx(Z, {
                            image: "/assets/AuditLogging-038f5207.png",
                            title: this.i18n("logs.title"),
                            description: this.i18n("logs.description"),
                            preContent: () => a.jsx(V, {
                                children: "02"
                            }),
                            smallTitle: !0,
                            floatingImage: !0,
                            mobileNoReverse: !0,
                            ref: this.props.registerRef("logs"),
                            $visible: !0,
                            children: a.jsx(O, {
                                className: "mt-8",
                                label: "none"
                            })
                        }), a.jsx(Z, {
                            image: "/assets/ModerationCommands-6be4a025.png",
                            title: this.i18n("commands.title"),
                            description: this.i18n("commands.description"),
                            preContent: () => a.jsx(V, {
                                children: "03"
                            }),
                            smallTitle: !0,
                            alignImageTop: !0,
                            mobileNoReverse: !0,
                            ref: this.props.registerRef("commands"),
                            $visible: !0,
                            children: a.jsx(O, {
                                className: "mt-8",
                                label: "none"
                            })
                        })]
                    })]
                }), a.jsx(X, {
                    title: this.i18n("welcome.title"),
                    description: this.i18n("welcome.description"),
                    image: "/assets/YourServer-91327727.webp",
                    height: this.props.isMobile ? 336 : 448,
                    width: 960,
                    children: a.jsx(O, {
                        label: "landing_management"
                    })
                }), a.jsxs(Q, {
                    children: [a.jsx(I, {
                        image: "/assets/CustomCommands-0977e806.png",
                        title: this.i18n("customCommands.title"),
                        description: this.i18n("customCommands.description"),
                        reversed: !0,
                        ref: this.props.registerRef("customCommands"),
                        $visible: !0,
                        children: a.jsx(O, {
                            label: "landing_management",
                            className: "mt-8"
                        })
                    }), a.jsx(I, {
                        image: "/assets/ReactionRoles-b11c04c5.webp",
                        title: this.i18n("reactionsRoles.title"),
                        description: this.i18n("reactionsRoles.description"),
                        topMargin: !0,
                        ref: this.props.registerRef("reactionsRoles"),
                        $visible: !0,
                        children: a.jsxs("div", {
                            className: "flex items-center justify-start gap-4 mt-8",
                            children: [a.jsx(O, {
                                label: "landing_management"
                            }), a.jsx(o, {
                                theme: "secondary",
                                size: "large",
                                to: `/${this.props.locale}/plugins/reaction-roles`,
                                className: "!inline-block max-w-max",
                                children: a.jsx(c, {
                                    id: "home.hero.button.learnMore"
                                })
                            })]
                        })
                    })]
                }), a.jsx(F, {
                    className: "lg:mt-32 mt-24"
                })]
            })]
        })
    }
}
const $ = e => {
        const {
            locale: s
        } = d(), t = g();
        return a.jsx(q, {
            locale: s,
            intl: t,
            ...e
        })
    },
    _ = f.ul`
  width: min(460px, 100%);
  max-width: 100%;
  margin-right: 32px;
  display: flex;
  flex-direction: column;

  ${N(w`
    width: min(360px, 100%);
  `)}
`,
    ee = f(T)`
  ${E(w`
    display: none;
  `)}
`,
    se = f(T)`
  justify-content: center;
  text-align: center;

  ${v(w`
    display: none;
  `)}
`,
    te = f.p`
  margin-top: 32px;
  font-size: 16px;
  line-height: 24px;

  ${E(w`
    display: none;
  `)}
`,
    ie = f(te)`
  display: block;
  text-align: center;

  ${v(w`
    display: none;
  `)}
`,
    ae = f(T).attrs({
        level: "HEADLINE",
        tag: "h2",
        noMargin: !0
    })`
  transition: color 0.3s ease-out;
  color: ${x};
`,
    ne = f.div`
  font-size: 16px;
  line-height: 24px;
  margin-top: 24px;
  transition: color 0.3s ease-out;
  color: ${e};
`,
    le = f.div`
  width: min(100%, 560px);
  position: relative;
`,
    re = f.img`
  max-width: 100%;

  ${v(w`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `)}

  pointer-events: none;
  opacity: 0;
  transition: 0.3s ease-out;
  transition-property: opacity;

  ${e=>e.$active&&w`
      pointer-events: all;
      opacity: 1;
    `}
`,
    oe = f.button`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  text-align: left;
  padding-left: 20px;
  position: relative;

  margin-top: 32px;

  ::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 24px;
    left: 0;
    background-color: transparent;
    border-radius: 8px;
    transition: background-color 0.3s ease-out;
  }

  :hover,
  :focus {
    ${ne} {
      color: ${m};
    }

    ${ae} {
      color: ${s};
    }
  }

  ${E(w`
    display: none;
    padding-left: 0;

    ::before {
      display: none;
    }

    ${ae} {
      justify-content: center;
    }

    ${ne} {
      text-align: center;
    }
  `)}

  ${e=>e.$active&&w`
      && {
        display: block;
      }

      ::before {
        background-color: ${t};
      }

      ${ne} {
        color: ${m};
      }

      ${ae} {
        color: ${s};
      }
    `}
`,
    ce = f.div`
  display: none;

  ${E(w`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
  `)}
`,
    de = f.button`
  cursor: pointer;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  width: 40px;
  height: 8px;
  border-radius: 8px;
  background-color: ${e};
  transition: background-color 0.3s ease-out;

  :focus,
  :hover {
    background-color: ${s};
  }

  :not(:first-child) {
    margin-left: 16px;
  }

  ${e=>e.$active&&w`
      && {
        cursor: default;
        background-color: ${t};
      }
    `}
`,
    ge = f.div`
  display: flex;
  justify-content: space-between;

  ${E(w`
    flex-direction: column;
    align-items: center;

    ${re} {
      height: 200px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    ${le} {
      margin-top: 32px;
      height: 200px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      order: 1;
    }

    ${_}, ${ce} {
      order: 2;
    }

    ${_} {
      margin-right: 0;
    }
  `)}
`,
    xe = ({
        items: e,
        title: s,
        description: t,
        ...n
    }) => {
        const l = i.useRef(null),
            [r, o] = i.useState(0),
            c = () => {
                o((s => (s + 1) % e.length))
            };
        return i.useEffect((() => (l.current = setInterval(c, 1e4), () => !!l.current && clearInterval(l.current)))), a.jsxs(ge, {
            ...n,
            children: [a.jsx(se, {
                noMargin: !0,
                level: "H1",
                tag: "h2",
                children: s
            }), a.jsx(ie, {
                children: t
            }), a.jsxs(_, {
                children: [a.jsx(ee, {
                    noMargin: !0,
                    level: "H1",
                    tag: "h2",
                    children: s
                }), a.jsx(te, {
                    children: t
                }), e.map(((e, s) => a.jsxs(oe, {
                    $active: s === r,
                    onClick: () => {
                        l.current && clearInterval(l.current), o(s)
                    },
                    children: [a.jsx(ae, {
                        children: e.title
                    }), a.jsx(ne, {
                        children: e.description
                    })]
                }, s)))]
            }), a.jsx(le, {
                children: e.map(((e, s) => a.jsx(re, {
                    $active: s === r,
                    src: e.image
                }, s)))
            }), a.jsx(ce, {
                children: e.map(((e, s) => a.jsx(de, {
                    $active: r === s,
                    onClick: () => {
                        l.current && clearInterval(l.current), o(s)
                    }
                }, s)))
            })]
        })
    },
    me = [{
        title: "commands.search.title",
        description: "commands.search.description",
        image: "/assets/SearchAnything-a0d69750.png"
    }, {
        title: "commands.help.title",
        description: "commands.help.description",
        image: "/assets/Help-df42b954.png"
    }],
    pe = f(C)`
  margin: -20px 0 156px;
`;
f(Q)`
  ${B};
`;
class he extends n.Component {
    i18n = e => this.props.intl.formatMessage({
        id: `public.plugins.utilities.${e}`
    });
    render() {
        return a.jsxs(U, {
            children: [a.jsxs(r, {
                children: [a.jsx("title", {
                    children: "The Best Utilities on Discord | MEE6"
                }), a.jsx("link", {
                    rel: "canonical",
                    href: "https://mee6.xyz/en/plugins/utilities"
                }), a.jsx("meta", {
                    name: "description",
                    content: this.i18n("meta.description")
                })]
            }), a.jsx(y, {
                redirectToDashboard: !0
            }), a.jsxs("div", {
                children: [a.jsx(R, {
                    image: "/assets/IllustrationPublicUtilities-7e746df6.svg",
                    title: this.i18n("hero.title"),
                    description: this.i18n("hero.description")
                }), a.jsx(pe, {
                    title: this.i18n("embeds.title"),
                    description: this.i18n("embeds.description"),
                    image: "/assets/Embed-92596af9.png",
                    height: this.props.isMobile ? 560 : 780,
                    width: 690,
                    color: h[700],
                    children: a.jsx(O, {
                        className: "mt-8",
                        label: "landing_utilities"
                    })
                }), a.jsxs(Q, {
                    children: [a.jsx(I, {
                        image: "/assets/Timers-a387d2b2.png",
                        title: this.i18n("timers.title"),
                        description: this.i18n("timers.description"),
                        ref: this.props.registerRef("timers"),
                        $visible: !0,
                        children: a.jsx(O, {
                            className: "mt-8",
                            label: "landing_utilities"
                        })
                    }), a.jsx(I, {
                        image: "/assets/Statistics-14e5ec4b.png",
                        title: this.i18n("statistics.title"),
                        description: this.i18n("statistics.description"),
                        reversed: !0,
                        ref: this.props.registerRef("statistics"),
                        $visible: !0,
                        topMargin: !0,
                        children: a.jsx(O, {
                            className: "mt-8",
                            label: "landing_utilities"
                        })
                    }), a.jsx(I, {
                        image: "/assets/TemporaryChannel-697690a0.png",
                        title: this.i18n("temporaryChannels.title"),
                        description: this.i18n("temporaryChannels.description"),
                        ref: this.props.registerRef("temporaryChannels"),
                        $visible: !0,
                        topMargin: !0,
                        children: a.jsx(O, {
                            className: "mt-8",
                            label: "landing_utilities"
                        })
                    })]
                }), a.jsx(Q, {
                    className: "mt-32",
                    children: a.jsx(xe, {
                        title: this.i18n("commands.title"),
                        description: this.i18n("commands.description"),
                        items: me.map((e => ({
                            ...e,
                            title: this.i18n(e.title),
                            description: this.i18n(e.description)
                        })))
                    })
                }), a.jsx(F, {
                    className: "lg:mt-32 mt-24"
                })]
            })]
        })
    }
}
const Ae = p(he),
    je = f(I)`
  ${B};

  ${v(w`
    position: relative;
    margin-top: ${356}px;

    ::before {
      content: '';
      display: block;
      height: ${73}px;
      border-left: 1px dashed ${e};
      transform: scaleY(4);
      transform-origin: bottom;
      position: absolute;
      bottom: 100%;
      margin-bottom: 32px;
    }
  `)}

  ${E(w`
    margin-top: 80px;
  `)}
`,
    ue = f.img`
  width: 40px;
  height: 40px;

  ${E(w`
    display: block;
    margin: 0 auto 32px;
  `)}
`,
    be = f(Q)`
  padding-top: 117px;

  ${E(w`
    padding-top: 80px;
    padding-bottom: 80px;
  `)}
`;
class fe extends n.Component {
    i18n = e => this.props.intl.formatMessage({
        id: `public.plugins.socialConnectors.${e}`
    });
    render() {
        return a.jsxs(U, {
            children: [a.jsxs(r, {
                children: [a.jsx("title", {
                    children: "Discord Alerts for Twitch, YouTube, Twitter & Instagram | MEE6"
                }), a.jsx("link", {
                    rel: "canonical",
                    href: "https://mee6.xyz/en/plugins/social-connectors"
                }), a.jsx("meta", {
                    name: "description",
                    content: this.i18n("meta.description")
                })]
            }), a.jsx(y, {
                redirectToDashboard: !0
            }), a.jsxs("div", {
                children: [a.jsxs("div", {
                    className: "max-w-[1160px] relative flex flex-col items-center text-center m-auto gap-6 my-20 px-6 lg:px-0",
                    children: [a.jsx("h2", {
                        className: "text-h4 lg:text-6xl text-white font-bold max-w-[760px] m-auto",
                        children: a.jsx(k, {
                            id: "public.plugins.socialConnectors.hero.title"
                        })
                    }), a.jsx("div", {
                        className: "text-lg max-w-[460px] m-auto",
                        children: a.jsx(k, {
                            id: "public.plugins.socialConnectors.hero.description"
                        })
                    }), a.jsx(O, {
                        label: "social_connectors",
                        className: "mt-4"
                    }), a.jsx("img", {
                        src: "/assets/IllustrationPublicSocialConnectors-d35e384c.png",
                        className: "lg:-mt-32"
                    })]
                }), a.jsxs(be, {
                    children: [a.jsx(I, {
                        image: "/assets/Twitch-07a11776.png",
                        title: this.i18n("twitch.title"),
                        description: this.i18n("twitch.description"),
                        preContent: () => a.jsx(ue, {
                            src: "data:image/png;base64,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"
                        }),
                        smallTitle: !1,
                        floatingImage: !0,
                        mobileNoReverse: !0,
                        "data-offset": -50,
                        ref: this.props.registerRef("twitch"),
                        $visible: !0,
                        children: a.jsx(O, {
                            className: "mt-8",
                            label: "social_connectors"
                        })
                    }), a.jsx(je, {
                        image: "/assets/YouTube-1a7b3832.png",
                        title: this.i18n("youtube.title"),
                        description: this.i18n("youtube.description"),
                        preContent: () => a.jsx(ue, {
                            src: "data:image/png;base64,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"
                        }),
                        smallTitle: !1,
                        floatingImage: !0,
                        mobileNoReverse: !0,
                        ref: this.props.registerRef("youtube"),
                        $visible: !0,
                        children: a.jsx(O, {
                            className: "mt-8",
                            label: "social_connectors"
                        })
                    }), a.jsx(je, {
                        image: "/assets/RSS-d629b18f.png",
                        title: this.i18n("twitter.title"),
                        description: this.i18n("twitter.description"),
                        preContent: () => a.jsx(ue, {
                            src: "data:image/png;base64,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"
                        }),
                        smallTitle: !1,
                        floatingImage: !0,
                        mobileNoReverse: !0,
                        ref: this.props.registerRef("twitter"),
                        $visible: !0,
                        children: a.jsx(O, {
                            className: "mt-8",
                            label: "social_connectors"
                        })
                    }), a.jsx(je, {
                        image: "/assets/Reddit-0892be28.png",
                        title: this.i18n("reddit.title"),
                        description: this.i18n("reddit.description"),
                        preContent: () => a.jsx(ue, {
                            src: "/assets/IconReddit-065433db.png"
                        }),
                        smallTitle: !1,
                        floatingImage: !0,
                        mobileNoReverse: !0,
                        ref: this.props.registerRef("reddit"),
                        $visible: !0,
                        children: a.jsx(O, {
                            className: "mt-8",
                            label: "social_connectors"
                        })
                    }), a.jsx(je, {
                        image: "/assets/Instagram-c932691c.svg",
                        title: this.i18n("instagram.title"),
                        description: this.i18n("instagram.description"),
                        preContent: () => a.jsx(ue, {
                            src: "data:image/png;base64,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"
                        }),
                        smallTitle: !1,
                        floatingImage: !0,
                        mobileNoReverse: !0,
                        ref: this.props.registerRef("instagram"),
                        $visible: !0,
                        children: a.jsx(O, {
                            className: "mt-8",
                            label: "social_connectors"
                        })
                    }), a.jsx(je, {
                        image: "/assets/RSS-d629b18f.png",
                        title: this.i18n("rss.title"),
                        description: this.i18n("rss.description"),
                        preContent: () => a.jsx(ue, {
                            src: "data:image/png;base64,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"
                        }),
                        smallTitle: !1,
                        floatingImage: !0,
                        mobileNoReverse: !0,
                        ref: this.props.registerRef("rss"),
                        $visible: !0,
                        children: a.jsx(O, {
                            className: "mt-8",
                            label: "social_connectors"
                        })
                    })]
                })]
            }), a.jsx(F, {
                className: "lg:mt-56 mt-16"
            })]
        })
    }
}
const we = p(fe),
    Ee = f(Q)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${e=>e.$image}) no-repeat top center;
  background-size: contain;
  height: 666px;

  ${N(w`
    height: 588px;
  `)}

  ${E(w`
    height: 306px;
    /* padding: 0; */
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    background-size: cover;
    background-position: bottom center;
  `)}

  ${M} {
    justify-content: center;
    text-align: center;
    width: 520px;
    margin-top: -90px;
  }
`,
    ve = f.div`
  margin: 80px 0 156px;

  ${v(w`
    background: url(${"/assets/BranchLeft-71a26517.svg"}) left bottom no-repeat, url(${"/assets/BranchRight-42558428.svg"}) right top no-repeat;
  `)}

  ${Q} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    width: min(560px, 100%);
    margin-top: 32px;
  }

  img {
    width: min(560px, 100%);
    margin-top: 32px;
  }

  ${E(w`
    margin-bottom: 80px;

    img {
      width: min(448px, 100%);
    }
  `)}
`,
    Ne = f(C)`
  margin: 156px 0;

  ${E(w`
    margin: 124px 0;
  `)}
`,
    ye = f(T)`
  text-align: center;
  width: min(560px, 100%);
`,
    ke = f.p`
  text-align: center;
  line-height: 24px;
  font-size: 16px;
  width: 560px;
  max-width: 100%;

  ${N(w`
    width: 448px;
  `)}
`;
class Ce extends n.Component {
    i18n = e => this.props.intl.formatMessage({
        id: `public.plugins.engagementFun.${e}`
    });
    render() {
        return a.jsxs(U, {
            children: [a.jsxs(r, {
                children: [a.jsx("title", {
                    children: "Games & Fun Discord Bot | MEE6"
                }), a.jsx("link", {
                    rel: "canonical",
                    href: `https://mee6.xyz/${this.props.locale}/plugins/engagement-and-fun`
                }), a.jsx("meta", {
                    name: "description",
                    content: this.i18n("meta.description")
                })]
            }), a.jsx(y, {
                redirectToDashboard: !0
            }), a.jsxs("div", {
                children: [a.jsx(Ee, {
                    $image: "/assets/IllustrationPublicEngagementFun-9a0c6192.svg",
                    children: a.jsxs("div", {
                        children: [a.jsx(M, {
                            children: this.i18n("hero.title")
                        }), a.jsx(O, {
                            label: "engagement_and_fun",
                            className: "mt-8 mx-auto"
                        })]
                    })
                }), a.jsx(ve, {
                    children: a.jsxs(Q, {
                        children: [a.jsx(ye, {
                            level: "H1",
                            tag: "h2",
                            children: a.jsx(c, {
                                id: "public.plugins.engagementFun.levels.title"
                            })
                        }), a.jsx(ke, {
                            children: a.jsx(c, {
                                id: "public.plugins.engagementFun.levels.description"
                            })
                        }), a.jsx("img", {
                            src: "/assets/Leveling-96efae9d.png",
                            alt: this.i18n("levels.title")
                        }), a.jsx(O, {
                            label: "engagement_and_fun",
                            className: "mt-8 mx-auto"
                        })]
                    })
                }), a.jsxs(Q, {
                    children: [a.jsx(I, {
                        image: "/assets/plugin_giveaways-b2b0707f.svg",
                        title: this.i18n("giveaways.title"),
                        description: this.i18n("giveaways.description"),
                        ref: this.props.registerRef("giveaways"),
                        $visible: !0,
                        className: "mb-32",
                        children: a.jsxs("div", {
                            className: "flex items-center justify-start gap-4 mt-8",
                            children: [a.jsx(O, {
                                label: "engagement_and_fun"
                            }), a.jsx(o, {
                                theme: "secondary",
                                size: "large",
                                to: `/${this.props.locale}/plugins/giveaway`,
                                className: "!inline-block max-w-max",
                                children: a.jsx(c, {
                                    id: "home.hero.button.learnMore"
                                })
                            })]
                        })
                    }), a.jsx(I, {
                        image: "/assets/plugin_levels-c6e4044a.webp",
                        title: this.i18n("rankCards.title"),
                        description: this.i18n("rankCards.description"),
                        ref: this.props.registerRef("rankCards"),
                        $visible: !0,
                        reversed: !0,
                        children: a.jsx(O, {
                            label: "engagement_and_fun",
                            className: "mt-8"
                        })
                    })]
                }), a.jsx(Ne, {
                    title: this.i18n("economy.title"),
                    description: this.i18n("economy.description"),
                    image: "/assets/Economy-621eafe7.png",
                    height: this.props.isMobile ? 570 : 628,
                    width: 558,
                    children: a.jsx(O, {
                        label: "engagement_and_fun",
                        className: "mt-8"
                    })
                }), a.jsx(Q, {
                    children: a.jsx(I, {
                        image: "/assets/Birthdays-00376380.png",
                        title: this.i18n("birthdays.title"),
                        description: this.i18n("birthdays.description"),
                        ref: this.props.registerRef("birthdays"),
                        $visible: !0,
                        children: a.jsx(O, {
                            label: "engagement_and_fun",
                            className: "mt-8"
                        })
                    })
                }), a.jsx(F, {
                    className: "lg:mt-24 mt-16"
                })]
            })]
        })
    }
}
const Ie = e => {
        const {
            locale: s
        } = d(), t = g();
        return a.jsx(Ce, {
            locale: s,
            intl: t,
            ...e
        })
    },
    Be = ({
        children: e,
        color: s,
        center: t = !0,
        className: i
    }) => a.jsx("p", {
        className: `uppercase text-sm font-semibold ${t&&"mx-auto text-center"} ${s} ${i}`,
        children: e
    }),
    Re = () => {
        const e = g(),
            {
                locale: s
            } = d();
        return i.useEffect((() => {
            H.init({
                once: !0
            })
        }), []), a.jsxs(U, {
            children: [a.jsxs(r, {
                children: [a.jsx("title", {
                    children: "Reaction Roles Discord Bot | MEE6"
                }), a.jsx("link", {
                    rel: "canonical",
                    href: `https://mee6.xyz/${s}/plugins/reaction-roles`
                }), a.jsx("meta", {
                    name: "description",
                    content: e.formatMessage({
                        id: "landing.reactionRoles.meta.description"
                    })
                })]
            }), a.jsx(y, {}), a.jsxs(z, {
                className: "text-center lg:mt-6 lg:!pb-0",
                children: [a.jsx(Be, {
                    color: "text-[#2EB6DE]",
                    children: a.jsx(c, {
                        id: "landing.reactionRoles.subtitle"
                    })
                }), a.jsx(L, {
                    size: "large",
                    type: "h1",
                    className: "max-w-[760px] w-full mx-auto my-4",
                    children: a.jsx(c, {
                        id: "landing.reactionRoles.title"
                    })
                }), a.jsx("p", {
                    className: "text-lg text-dark-300",
                    children: a.jsx(c, {
                        id: "landing.reactionRoles.description"
                    })
                }), a.jsx(O, {
                    label: "landing_reactionRoles",
                    className: "mx-auto mt-10"
                }), a.jsx("img", {
                    src: "/assets/header-f90bf28e.svg",
                    className: "w-full transform lg:-translate-y-16 pointer-events-none",
                    alt: "MEE6 Reaction roles"
                })]
            }), a.jsxs(z, {
                className: "text-center lg:!pt-0 transform lg:-translate-y-10",
                children: [a.jsx(Be, {
                    color: "text-web3-default",
                    children: a.jsx(c, {
                        id: "landing.reactionRoles.what-is-it.subtitle"
                    })
                }), a.jsx(L, {
                    type: "h2",
                    className: "max-w-[760px] w-full mx-auto my-4",
                    children: a.jsx(c, {
                        id: "landing.reactionRoles.what-is-it.title"
                    })
                }), a.jsx("p", {
                    className: "text-base text-dark-300 max-w-[760px] w-full mx-auto mb-4",
                    children: a.jsx(c, {
                        id: "landing.reactionRoles.what-is-it.description"
                    })
                }), a.jsx("img", {
                    id: "anchor-aos",
                    src: "/assets/what-is-it-b325fece.svg",
                    className: "w-full max-w-[920px] mx-auto mt-10",
                    alt: "How it works"
                }), a.jsx(o, {
                    icon: "DropdownRight",
                    to: `/${s}/dashboard`,
                    iconPosition: "right",
                    size: "large",
                    className: "mx-auto mt-8 max-w-max",
                    children: a.jsx(c, {
                        id: "landing.reactionRoles.what-is-it.cta"
                    })
                })]
            }), a.jsxs(z, {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10",
                children: [a.jsxs("div", {
                    "data-aos": "fade-right",
                    "data-aos-anchor": "#anchor-aos",
                    "data-aos-offset": "1000",
                    className: "bg-dark-900 px-8 pt-8 text-center lg:text-left lg:px-10 lg:pt-10 rounded-2xl flex flex-col gap-3",
                    children: [a.jsx(Be, {
                        color: "text-discord-default",
                        center: !1,
                        children: a.jsx(c, {
                            id: "landing.reactionRoles.card1.subtitle"
                        })
                    }), a.jsx(L, {
                        type: "h2",
                        children: a.jsx(c, {
                            id: "landing.reactionRoles.card1.title"
                        })
                    }), a.jsx("p", {
                        className: "text-base text-dark-300",
                        children: a.jsx(c, {
                            id: "landing.reactionRoles.card1.description"
                        })
                    }), a.jsx("img", {
                        src: "/assets/how-to-use-desktop-9d9cc0ef.svg",
                        alt: "How to use it",
                        className: "max-w-[418px] w-full tranform -translate-x-20 mt-6 hidden lg:block"
                    }), a.jsx("img", {
                        src: "/assets/how-to-use-mobile-1c1f41d0.svg",
                        alt: "How to use it",
                        className: "max-w-[418px] mx-auto w-full lg:hidden"
                    })]
                }), a.jsxs("div", {
                    "data-aos": "fade-left",
                    "data-aos-anchor": "#anchor-aos",
                    "data-aos-offset": "1000",
                    className: "bg-dark-900 p-8 lg:p-10 text-center lg:text-left rounded-2xl flex flex-col gap-4 justify-between",
                    children: [a.jsx("img", {
                        src: "/assets/functions-43ca689d.svg",
                        alt: "Other plugins by MEE6",
                        className: "w-full lg:h-[300px]"
                    }), a.jsxs("div", {
                        className: "grid gris-cols-1 gap-3",
                        children: [a.jsx(Be, {
                            color: "text-success-default",
                            center: !1,
                            children: a.jsx(c, {
                                id: "landing.reactionRoles.card2.subtitle"
                            })
                        }), a.jsx(L, {
                            type: "h2",
                            children: a.jsx(c, {
                                id: "landing.reactionRoles.card2.title"
                            })
                        }), a.jsx("p", {
                            className: "text-base text-dark-300",
                            children: a.jsx(c, {
                                id: "landing.reactionRoles.card3.description"
                            })
                        })]
                    })]
                }), a.jsxs("div", {
                    "data-aos": "fade-up",
                    "data-aos-anchor": "#anchor-aos",
                    "data-aos-offset": "1500",
                    className: "bg-dark-900 px-10 py-14 rounded-2xl lg:col-span-2 grid gris-cols-1 gap-3 text-center",
                    children: [a.jsx("img", {
                        src: "/assets/simplest-a0d72ee6.svg",
                        alt: "Other plugins by MEE6",
                        className: "w-full max-w-[760px] mx-auto mb-4"
                    }), a.jsx(Be, {
                        color: "text-premium-default",
                        children: a.jsx(c, {
                            id: "landing.reactionRoles.card3.subtitle"
                        })
                    }), a.jsx(L, {
                        type: "h2",
                        children: a.jsx(c, {
                            id: "landing.reactionRoles.card3.title"
                        })
                    }), a.jsx("p", {
                        className: "text-base text-dark-300 max-w-[760px] w-full mx-auto",
                        children: a.jsx(c, {
                            id: "landing.reactionRoles.card3.description"
                        })
                    })]
                })]
            }), a.jsx(F, {
                className: "mt-20 lg:mt-32"
            })]
        })
    },
    Qe = () => {
        const e = g(),
            {
                locale: s
            } = d();
        return i.useEffect((() => {
            H.init({
                once: !0
            })
        }), []), a.jsxs(U, {
            children: [a.jsxs(r, {
                children: [a.jsx("title", {
                    children: "Games & Fun Discord Bot | MEE6"
                }), a.jsx("link", {
                    rel: "canonical",
                    href: `https://mee6.xyz/${s}/plugins/giveaway`
                }), a.jsx("meta", {
                    name: "description",
                    content: e.formatMessage({
                        id: "landing.giveaway.meta.description"
                    })
                })]
            }), a.jsx(y, {}), a.jsxs(z, {
                className: "text-center lg:mt-6 lg:!pb-0",
                children: [a.jsx(Be, {
                    color: "text-[#2EB6DE]",
                    children: a.jsx(c, {
                        id: "landing.giveaway.subtitle"
                    })
                }), a.jsx(L, {
                    size: "large",
                    type: "h1",
                    className: "max-w-[760px] w-full mx-auto my-4",
                    children: a.jsx(c, {
                        id: "landing.giveaway.title"
                    })
                }), a.jsx("p", {
                    className: "text-lg text-dark-300",
                    children: a.jsx(c, {
                        id: "landing.giveaway.description"
                    })
                }), a.jsx(O, {
                    label: "landing_reactionRoles",
                    className: "mx-auto mt-10"
                }), a.jsx("img", {
                    src: "/assets/header-29a928f1.svg",
                    className: "w-full transform lg:-translate-y-16 pointer-events-none",
                    alt: "MEE6 Reaction roles"
                })]
            }), a.jsxs(z, {
                className: "text-center lg:!pt-0 transform lg:-translate-y-10",
                children: [a.jsx(Be, {
                    color: "text-web3-default",
                    children: a.jsx(c, {
                        id: "landing.giveaway.what-is-it.subtitle"
                    })
                }), a.jsx(L, {
                    type: "h2",
                    className: "max-w-[760px] w-full mx-auto my-4",
                    children: a.jsx(c, {
                        id: "landing.giveaway.what-is-it.title"
                    })
                }), a.jsx("p", {
                    className: "text-base text-dark-300 max-w-[760px] w-full mx-auto mb-4",
                    children: a.jsx(c, {
                        id: "landing.giveaway.what-is-it.description",
                        values: {
                            b: e => a.jsxs("span", {
                                className: "text-dark-100",
                                children: [" ", e, " "]
                            })
                        }
                    })
                }), a.jsxs("div", {
                    className: "relative w-full max-w-[920px] mx-auto mt-10 select-none",
                    children: [a.jsx("img", {
                        src: "/assets/blue-gem-f5a94ec7.svg",
                        alt: "MEE6 Giveaways plugins",
                        className: "absolute -top-4 -left-1 lg:-top-10 lg:-left-3 float_animation w-[20px] lg:w-[40px]"
                    }), a.jsx("img", {
                        src: "/assets/participate-3886a4bc.svg",
                        alt: "MEE6 Giveaways plugins",
                        className: "absolute top-2 -right-4 lg:top-10 lg:-right-16 animate__tada animate__animated animate__repeat-3 w-[110px] lg:w-[168px]"
                    }), a.jsx("img", {
                        src: "/assets/re-roll-5c311596.svg",
                        alt: "MEE6 Giveaways plugins re-roll option",
                        className: "hidden lg:block absolute -bottom-6 -left-20",
                        "data-aos": "fade-right",
                        "data-aos-offset": "1000",
                        "data-aos-anchor": "#anchor-aos"
                    }), a.jsx("img", {
                        src: "/assets/green-gem-d576d42a.svg",
                        alt: "MEE6 Giveaways plugins",
                        className: "absolute -right-2 -bottom-6 lg:-bottom-16 lg:-right-20 float_animation w-[60px] lg:w-[160px]"
                    }), a.jsx("img", {
                        id: "anchor-aos",
                        src: "/assets/what-is-it-55671e65.svg",
                        className: "w-full ",
                        alt: "How it works"
                    })]
                }), a.jsx(o, {
                    icon: "DropdownRight",
                    to: `/${s}/dashboard`,
                    iconPosition: "right",
                    size: "large",
                    className: "mx-auto mt-8 max-w-max",
                    children: a.jsx(c, {
                        id: "landing.giveaway.what-is-it.cta"
                    })
                })]
            }), a.jsx(z, {
                children: a.jsxs("div", {
                    className: "bg-dark-900 p-8 lg:p-20 text-center lg:text-left rounded-2xl grid grid-cols-1 gap-y-8 lg:grid-cols-6 gap-x-8 lg:gap-y-16 relative",
                    children: [a.jsx("img", {
                        src: "/assets/coin-1-4bc99b24.svg",
                        alt: "MEE6 Giveaways plugins",
                        className: "hidden lg:block absolute -right-5 -top-5 float_animation"
                    }), a.jsx("img", {
                        src: "/assets/coin-2-c7f627b0.svg",
                        alt: "MEE6 Giveaways plugins",
                        className: "hidden lg:block absolute -left-10 top-1/4 float_animation"
                    }), a.jsxs("div", {
                        className: "lg:col-span-4 grid grid-cols-1 gap-3",
                        children: [a.jsx(Be, {
                            color: "text-discord-default",
                            center: !1,
                            children: a.jsx(c, {
                                id: "landing.giveaways.card1.subtitle"
                            })
                        }), a.jsx(L, {
                            type: "h2",
                            className: "max-w-[400px] w-full",
                            children: a.jsx(c, {
                                id: "landing.giveaways.card1.title",
                                values: {
                                    "discord-logo": e => a.jsx("img", {
                                        src: "/assets/discord-logo-finger-2aad0f50.svg",
                                        className: "inline-block"
                                    })
                                }
                            })
                        }), a.jsx("p", {
                            className: "text-base text-dark-300",
                            children: a.jsx(c, {
                                id: "landing.giveaways.card1.description"
                            })
                        })]
                    }), a.jsx("img", {
                        src: "/assets/magician-6e55baa4.svg",
                        alt: "MEE6 Giveaways plugins",
                        className: "hidden lg:block w-full col-span-2"
                    }), a.jsx("div", {
                        className: "lg:col-span-3 flex items-center",
                        children: a.jsxs("div", {
                            className: "grid grid-cols-1 gap-3",
                            children: [a.jsx(Be, {
                                color: "text-premium-default",
                                center: !1,
                                children: a.jsx(c, {
                                    id: "landing.giveaways.card2.subtitle"
                                })
                            }), a.jsx(L, {
                                type: "h2",
                                children: a.jsx(c, {
                                    id: "landing.giveaways.card2.title"
                                })
                            }), a.jsx("p", {
                                className: "text-base text-dark-300",
                                children: a.jsx(c, {
                                    id: "landing.giveaways.card2.description"
                                })
                            }), a.jsx("div", {
                                className: "mt-4",
                                children: a.jsx(o, {
                                    icon: "DropdownRight",
                                    iconPosition: "right",
                                    className: "mx-auto lg:!mx-[initial]",
                                    children: a.jsx(c, {
                                        id: "landing.giveaways.card2.cta"
                                    })
                                })
                            })]
                        })
                    }), a.jsx("img", {
                        src: "/assets/plug-and-play-f80399d2.svg",
                        alt: "MEE6 Giveaways plugins",
                        className: "w-full lg:col-span-3 max-h-[460px]"
                    }), a.jsx("img", {
                        src: "/assets/hassle-free-c3b70768.svg",
                        alt: "MEE6 Giveaways plugins",
                        className: "w-full lg:col-span-3 max-h-[460px]"
                    }), a.jsx("div", {
                        className: "lg:col-span-3 flex items-center",
                        children: a.jsxs("div", {
                            className: "grid grid-cols-1 gap-3",
                            children: [a.jsx(Be, {
                                color: "text-success-default",
                                center: !1,
                                children: a.jsx(c, {
                                    id: "landing.giveaways.card3.subtitle"
                                })
                            }), a.jsx(L, {
                                type: "h2",
                                children: a.jsx(c, {
                                    id: "landing.giveaways.card3.title"
                                })
                            }), a.jsx("p", {
                                className: "text-base text-dark-300",
                                children: a.jsx(c, {
                                    id: "landing.giveaways.card3.description",
                                    values: {
                                        span: e => a.jsx("span", {
                                            className: "text-sm text-dark-500",
                                            children: e
                                        }),
                                        b: e => a.jsx("span", {
                                            className: "text-dark-100",
                                            children: e
                                        })
                                    }
                                })
                            })]
                        })
                    }), a.jsx("img", {
                        src: "/assets/pink-gem-f57e0f3d.svg",
                        alt: "MEE6 Giveaways plugins",
                        className: "hidden lg:block absolute -bottom-10 -left-20 float_animation"
                    }), a.jsx("img", {
                        src: "/assets/coin-3-1224765c.svg",
                        alt: "MEE6 Giveaways plugins",
                        className: "hidden lg:block absolute bottom-1/4 -right-24 float_animation"
                    })]
                })
            }), a.jsx(F, {
                className: "mt-20 lg:mt-32"
            })]
        })
    },
    Me = f.div`
  margin: 0 auto;
  padding: 0;
`,
    Oe = () => {
        const {
            user: e
        } = A(), {
            registerRef: s,
            visibleRefs: t,
            affixRefs: n,
            setVisibleRefs: l,
            updateScrollInfo: r,
            mode: o
        } = J(), c = j();
        i.useEffect((() => {
            Object.keys(n.current).forEach((e => {
                delete n.current[e]
            })), l([]), r()
        }), [c.pathname]), i.useEffect((() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            })
        }), [c.pathname]);
        const d = {
            hasUser: !!e,
            isMobile: "mobile" === o,
            registerRef: s,
            visibleRefs: t
        };
        return a.jsxs(Me, {
            children: [a.jsxs(u, {
                children: [a.jsx(b, {
                    path: "/management",
                    element: a.jsx($, {
                        ...d
                    })
                }), a.jsx(b, {
                    path: "/utilities",
                    element: a.jsx(Ae, {
                        ...d
                    })
                }), a.jsx(b, {
                    path: "/social-connectors",
                    element: a.jsx(we, {
                        ...d
                    })
                }), a.jsx(b, {
                    path: "/engagement-and-fun",
                    element: a.jsx(Ie, {
                        ...d
                    })
                }), a.jsx(b, {
                    path: "/reaction-roles",
                    element: a.jsx(Re, {})
                }), a.jsx(b, {
                    path: "/giveaway",
                    element: a.jsx(Qe, {})
                })]
            }), a.jsx(D, {})]
        })
    };
export {
    Oe as
    default
};
