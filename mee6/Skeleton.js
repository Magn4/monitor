import {
    j as e
} from "./index-684a1b71.js";
const s = ({
    count: s = 3
}) => e.jsx("div", {
    className: "grid grid-cols-1 gap-y-8 animate-pulse",
    children: Array.from({
        length: s
    }).map(((s, r) => e.jsxs("div", {
        className: "grid grid-cols-1 gap-y-4",
        children: [e.jsx("div", {
            className: "rounded w-16 h-5 text-grey-200 bg-grey-600 text-sm"
        }), e.jsx("div", {
            className: "bg-grey-600 rounded grid grid-cols-1 gap-y-4",
            children: Array.from({
                length: Math.floor(3 * Math.random()) + 1
            }).map(((s, r) => e.jsxs("div", {
                className: "w-full p-6 rounded lg:flex items-center justify-between cursor-pointer",
                children: [e.jsxs("div", {
                    className: "lg:flex items-center mb-3 lg:mb-0",
                    children: [e.jsx("div", {
                        className: "relative inline-block bg-grey-700 w-[43px] h-[43px] rounded"
                    }), e.jsxs("div", {
                        className: "lg:mt-0 mt-3 lg:ml-6",
                        children: [e.jsx("div", {
                            className: "bg-grey-700 w-24 h-5"
                        }), e.jsx("div", {
                            className: "bg-grey-700 w-10 h-3 mt-1"
                        })]
                    })]
                }), e.jsx("div", {
                    className: "bg-grey-700 w-32 h-10 rounded-md"
                })]
            }, r)))
        })]
    }, r)))
});
export {
    s as S
};
