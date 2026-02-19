import {
    j as e,
    F as s,
    B as a
} from "./index-75d73738.js";
import {
    B as t
} from "./app-61e5c911.js";
const m = () => {
    const {
        setShowPremiumGift: m
    } = t();
    return e.jsxs("div", {
        className: "flex max-sm:flex-wrap md:flex-row gap-4 md:gap-0 items-center justify-between bg-opacity-10 rounded-lg pl-6 pr-7 py-4 mb-2 mt-2 border bg-warning-default text-warning-default border-warning-default",
        children: [e.jsxs("div", {
            className: "flex max-sm:flex-wrap md:flex-row gap-4 md:gap-6 justify-center",
            children: [e.jsx("div", {
                className: "flex justify-center",
                children: e.jsx("img", {
                    src: "/assets/gift-df0b69f2.svg",
                    alt: ""
                })
            }), e.jsxs("div", {
                className: "flex flex-col max-sm:items-center",
                children: [e.jsx("div", {
                    className: "text-2xl font-bold text-dark-100 max-sm:text-center",
                    children: e.jsx(s, {
                        id: "premium.plans.page.gift.title",
                        values: {
                            premium: s => e.jsx("span", {
                                className: "text-[#FFC34F] max-sm:block",
                                children: s
                            })
                        }
                    })
                }), e.jsxs("div", {
                    className: "text-dark-300 font-normal text-base max-sm:text-center",
                    children: [e.jsx(s, {
                        id: "premium.plans.page.gift.description_1"
                    }), e.jsx("br", {}), e.jsx(s, {
                        id: "premium.plans.page.gift.description_2"
                    })]
                })]
            })]
        }), e.jsx("div", {
            className: "max-sm:flex max-sm:w-full max-sm:justify-center",
            children: e.jsx(a, {
                theme: "secondary",
                size: "medium",
                onClick: () => m(!0),
                children: e.jsx("span", {
                    className: "text-dark-100",
                    children: e.jsx(s, {
                        id: "home.hero.button.learnMore"
                    })
                })
            })
        })]
    })
};
export {
    m as P
};
