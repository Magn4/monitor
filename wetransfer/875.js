(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7528], {
        1230: (e, t, a) => {
            "use strict";
            a.d(t, {
                VB: () => K
            });
            var n = a(21462),
                r = a(50084),
                i = a.n(r),
                o = a(82643),
                l = new Map([
                    ["aac", "audio/aac"],
                    ["abw", "application/x-abiword"],
                    ["arc", "application/x-freearc"],
                    ["avif", "image/avif"],
                    ["avi", "video/x-msvideo"],
                    ["azw", "application/vnd.amazon.ebook"],
                    ["bin", "application/octet-stream"],
                    ["bmp", "image/bmp"],
                    ["bz", "application/x-bzip"],
                    ["bz2", "application/x-bzip2"],
                    ["cda", "application/x-cdf"],
                    ["csh", "application/x-csh"],
                    ["css", "text/css"],
                    ["csv", "text/csv"],
                    ["doc", "application/msword"],
                    ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
                    ["eot", "application/vnd.ms-fontobject"],
                    ["epub", "application/epub+zip"],
                    ["gz", "application/gzip"],
                    ["gif", "image/gif"],
                    ["htm", "text/html"],
                    ["html", "text/html"],
                    ["ico", "image/vnd.microsoft.icon"],
                    ["ics", "text/calendar"],
                    ["jar", "application/java-archive"],
                    ["jpeg", "image/jpeg"],
                    ["jpg", "image/jpeg"],
                    ["js", "text/javascript"],
                    ["json", "application/json"],
                    ["jsonld", "application/ld+json"],
                    ["mid", "audio/midi"],
                    ["midi", "audio/midi"],
                    ["mjs", "text/javascript"],
                    ["mp3", "audio/mpeg"],
                    ["mp4", "video/mp4"],
                    ["mpeg", "video/mpeg"],
                    ["mpkg", "application/vnd.apple.installer+xml"],
                    ["odp", "application/vnd.oasis.opendocument.presentation"],
                    ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
                    ["odt", "application/vnd.oasis.opendocument.text"],
                    ["oga", "audio/ogg"],
                    ["ogv", "video/ogg"],
                    ["ogx", "application/ogg"],
                    ["opus", "audio/opus"],
                    ["otf", "font/otf"],
                    ["png", "image/png"],
                    ["pdf", "application/pdf"],
                    ["php", "application/x-httpd-php"],
                    ["ppt", "application/vnd.ms-powerpoint"],
                    ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
                    ["rar", "application/vnd.rar"],
                    ["rtf", "application/rtf"],
                    ["sh", "application/x-sh"],
                    ["svg", "image/svg+xml"],
                    ["swf", "application/x-shockwave-flash"],
                    ["tar", "application/x-tar"],
                    ["tif", "image/tiff"],
                    ["tiff", "image/tiff"],
                    ["ts", "video/mp2t"],
                    ["ttf", "font/ttf"],
                    ["txt", "text/plain"],
                    ["vsd", "application/vnd.visio"],
                    ["wav", "audio/wav"],
                    ["weba", "audio/webm"],
                    ["webm", "video/webm"],
                    ["webp", "image/webp"],
                    ["woff", "font/woff"],
                    ["woff2", "font/woff2"],
                    ["xhtml", "application/xhtml+xml"],
                    ["xls", "application/vnd.ms-excel"],
                    ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
                    ["xml", "application/xml"],
                    ["xul", "application/vnd.mozilla.xul+xml"],
                    ["zip", "application/zip"],
                    ["7z", "application/x-7z-compressed"],
                    ["mkv", "video/x-matroska"],
                    ["mov", "video/quicktime"],
                    ["msg", "application/vnd.ms-outlook"]
                ]);

            function s(e, t) {
                var a = function(e) {
                    var t = e.name;
                    if (t && -1 !== t.lastIndexOf(".") && !e.type) {
                        var a = t.split(".").pop().toLowerCase(),
                            n = l.get(a);
                        n && Object.defineProperty(e, "type", {
                            value: n,
                            writable: !1,
                            configurable: !1,
                            enumerable: !0
                        })
                    }
                    return e
                }(e);
                if ("string" != typeof a.path) {
                    var n = e.webkitRelativePath;
                    Object.defineProperty(a, "path", {
                        value: "string" == typeof t ? t : "string" == typeof n && n.length > 0 ? n : e.name,
                        writable: !1,
                        configurable: !1,
                        enumerable: !0
                    })
                }
                return a
            }
            var d = [".DS_Store", "Thumbs.db"];

            function u(e) {
                return "object" == typeof e && null !== e
            }

            function c(e) {
                return e.filter(function(e) {
                    return -1 === d.indexOf(e.name)
                })
            }

            function _(e) {
                if (null === e) return [];
                for (var t = [], a = 0; a < e.length; a++) {
                    var n = e[a];
                    t.push(n)
                }
                return t
            }

            function f(e) {
                if ("function" != typeof e.webkitGetAsEntry) return m(e);
                var t = e.webkitGetAsEntry();
                return t && t.isDirectory ? p(t) : m(e)
            }

            function m(e) {
                var t = e.getAsFile();
                return t ? Promise.resolve(s(t)) : Promise.reject(e + " is not a File")
            }

            function g(e) {
                return (0, o.__awaiter)(this, void 0, void 0, function() {
                    return (0, o.__generator)(this, function(t) {
                        return [2, e.isDirectory ? p(e) : function(e) {
                            return (0, o.__awaiter)(this, void 0, void 0, function() {
                                return (0, o.__generator)(this, function(t) {
                                    return [2, new Promise(function(t, a) {
                                        e.file(function(a) {
                                            t(s(a, e.fullPath))
                                        }, function(e) {
                                            a(e)
                                        })
                                    })]
                                })
                            })
                        }(e)]
                    })
                })
            }

            function p(e) {
                var t = e.createReader();
                return new Promise(function(e, a) {
                    var n = [];
                    ! function r() {
                        var i = this;
                        t.readEntries(function(t) {
                            return (0, o.__awaiter)(i, void 0, void 0, function() {
                                var i;
                                return (0, o.__generator)(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (t.length) return [3, 5];
                                            o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, Promise.all(n)];
                                        case 2:
                                            return e(o.sent()), [3, 4];
                                        case 3:
                                            return a(o.sent()), [3, 4];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            i = Promise.all(t.map(g)), n.push(i), r(), o.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, function(e) {
                            a(e)
                        })
                    }()
                })
            }
            var h = a(91292);

            function y(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), a.push.apply(a, n)
                }
                return a
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(a), !0).forEach(function(t) {
                        b(e, t, a[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : y(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    })
                }
                return e
            }

            function b(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a, n, r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); o = !0);
                        } catch (e) {
                            l = !0, n = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw n
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return x(e, t);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a) return Array.from(e);
                        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return x(e, t)
                    }
                }(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
                return n
            }
            var S = function(e) {
                    var t = Array.isArray(e = Array.isArray(e) && 1 === e.length ? e[0] : e) ? "one of ".concat(e.join(", ")) : e;
                    return {
                        code: "file-invalid-type",
                        message: "File type must be ".concat(t)
                    }
                },
                L = function(e) {
                    return {
                        code: "file-too-large",
                        message: "File is larger than ".concat(e, " ").concat(1 === e ? "byte" : "bytes")
                    }
                },
                k = function(e) {
                    return {
                        code: "file-too-small",
                        message: "File is smaller than ".concat(e, " ").concat(1 === e ? "byte" : "bytes")
                    }
                },
                T = {
                    code: "too-many-files",
                    message: "Too many files"
                };

            function B(e, t) {
                var a = "application/x-moz-file" === e.type || (0, h.A)(e, t);
                return [a, a ? null : S(t)]
            }

            function D(e, t, a) {
                if (H(e.size)) {
                    if (H(t) && H(a)) {
                        if (e.size > a) return [!1, L(a)];
                        if (e.size < t) return [!1, k(t)]
                    } else if (H(t) && e.size < t) return [!1, k(t)];
                    else if (H(a) && e.size > a) return [!1, L(a)]
                }
                return [!0, null]
            }

            function H(e) {
                return null != e
            }

            function N(e) {
                return "function" == typeof e.isPropagationStopped ? e.isPropagationStopped() : void 0 !== e.cancelBubble && e.cancelBubble
            }

            function P(e) {
                return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(e) {
                    return "Files" === e || "application/x-moz-file" === e
                }) : !!e.target && !!e.target.files
            }

            function C(e) {
                e.preventDefault()
            }

            function A() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return function(e) {
                    for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++) n[r - 1] = arguments[r];
                    return t.some(function(t) {
                        return !N(e) && t && t.apply(void 0, [e].concat(n)), N(e)
                    })
                }
            }

            function E() {
                return "showOpenFilePicker" in window
            }
            var M = ["children"],
                j = ["open"],
                O = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
                z = ["refKey", "onChange", "onClick"];

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a, n, r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); o = !0);
                        } catch (e) {
                            l = !0, n = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw n
                            }
                        }
                        return i
                    }
                }(e, t) || W(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function W(e, t) {
                if (e) {
                    if ("string" == typeof e) return I(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return I(e, t)
                }
            }

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function F(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), a.push.apply(a, n)
                }
                return a
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(a), !0).forEach(function(t) {
                        $(e, t, a[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : F(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    })
                }
                return e
            }

            function $(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function X(e, t) {
                if (null == e) return {};
                var a, n, r = function(e, t) {
                    if (null == e) return {};
                    var a, n, r = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) a = i[n], t.indexOf(a) >= 0 || (r[a] = e[a]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) a = i[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])
                }
                return r
            }
            var q = (0, n.forwardRef)(function(e, t) {
                var a = e.children,
                    r = K(X(e, M)),
                    i = r.open,
                    o = X(r, j);
                return (0, n.useImperativeHandle)(t, function() {
                    return {
                        open: i
                    }
                }, [i]), n.createElement(n.Fragment, null, a(U(U({}, o), {}, {
                    open: i
                })))
            });
            q.displayName = "Dropzone";
            var V = {
                disabled: !1,
                getFilesFromEvent: function(e) {
                    return (0, o.__awaiter)(this, void 0, void 0, function() {
                        return (0, o.__generator)(this, function(t) {
                            var a;
                            if (u(e) && u(e.dataTransfer)) return [2, function(e, t) {
                                return (0, o.__awaiter)(this, void 0, void 0, function() {
                                    var a;
                                    return (0, o.__generator)(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                if (null === e) return [2, []];
                                                if (!e.items) return [3, 2];
                                                if (a = _(e.items).filter(function(e) {
                                                        return "file" === e.kind
                                                    }), "drop" !== t) return [2, a];
                                                return [4, Promise.all(a.map(f))];
                                            case 1:
                                                return [2, c(function e(t) {
                                                    return t.reduce(function(t, a) {
                                                        return (0, o.__spread)(t, Array.isArray(a) ? e(a) : [a])
                                                    }, [])
                                                }(n.sent()))];
                                            case 2:
                                                return [2, c(_(e.files).map(function(e) {
                                                    return s(e)
                                                }))]
                                        }
                                    })
                                })
                            }(e.dataTransfer, e.type)];
                            if (u(a = e) && u(a.target)) return [2, _(e.target.files).map(function(e) {
                                return s(e)
                            })];
                            return Array.isArray(e) && e.every(function(e) {
                                return "getFile" in e && "function" == typeof e.getFile
                            }) ? [2, function(e) {
                                return (0, o.__awaiter)(this, void 0, void 0, function() {
                                    return (0, o.__generator)(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, Promise.all(e.map(function(e) {
                                                    return e.getFile()
                                                }))];
                                            case 1:
                                                return [2, t.sent().map(function(e) {
                                                    return s(e)
                                                })]
                                        }
                                    })
                                })
                            }(e)] : [2, []]
                        })
                    })
                },
                maxSize: 1 / 0,
                minSize: 0,
                multiple: !0,
                maxFiles: 0,
                preventDropOnDocument: !0,
                noClick: !1,
                noKeyboard: !1,
                noDrag: !1,
                noDragEventsBubbling: !1,
                validator: null,
                useFsAccessApi: !1
            };
            q.defaultProps = V, q.propTypes = {
                children: i().func,
                accept: i().oneOfType([i().string, i().arrayOf(i().string)]),
                multiple: i().bool,
                preventDropOnDocument: i().bool,
                noClick: i().bool,
                noKeyboard: i().bool,
                noDrag: i().bool,
                noDragEventsBubbling: i().bool,
                minSize: i().number,
                maxSize: i().number,
                maxFiles: i().number,
                disabled: i().bool,
                getFilesFromEvent: i().func,
                onFileDialogCancel: i().func,
                onFileDialogOpen: i().func,
                useFsAccessApi: i().bool,
                onDragEnter: i().func,
                onDragLeave: i().func,
                onDragOver: i().func,
                onDrop: i().func,
                onDropAccepted: i().func,
                onDropRejected: i().func,
                validator: i().func
            };
            var G = {
                isFocused: !1,
                isFileDialogActive: !1,
                isDragActive: !1,
                isDragAccept: !1,
                isDragReject: !1,
                draggedFiles: [],
                acceptedFiles: [],
                fileRejections: []
            };

            function K() {
                var e, t, a, r, i, o, l, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    d = U(U({}, V), s),
                    u = d.accept,
                    c = d.disabled,
                    _ = d.getFilesFromEvent,
                    f = d.maxSize,
                    m = d.minSize,
                    g = d.multiple,
                    p = d.maxFiles,
                    h = d.onDragEnter,
                    y = d.onDragLeave,
                    x = d.onDragOver,
                    S = d.onDrop,
                    L = d.onDropAccepted,
                    k = d.onDropRejected,
                    H = d.onFileDialogCancel,
                    M = d.onFileDialogOpen,
                    j = d.useFsAccessApi,
                    F = d.preventDropOnDocument,
                    q = d.noClick,
                    K = d.noKeyboard,
                    Q = d.noDrag,
                    Z = d.noDragEventsBubbling,
                    ee = d.validator,
                    et = (0, n.useMemo)(function() {
                        return "function" == typeof M ? M : J
                    }, [M]),
                    ea = (0, n.useMemo)(function() {
                        return "function" == typeof H ? H : J
                    }, [H]),
                    en = (0, n.useRef)(null),
                    er = (0, n.useRef)(null),
                    ei = R((0, n.useReducer)(Y, G), 2),
                    eo = ei[0],
                    el = ei[1],
                    es = eo.isFocused,
                    ed = eo.isFileDialogActive,
                    eu = eo.draggedFiles,
                    ec = function() {
                        ed && setTimeout(function() {
                            er.current && (er.current.files.length || (el({
                                type: "closeDialog"
                            }), ea()))
                        }, 300)
                    };
                (0, n.useEffect)(function() {
                    return j && E() ? function() {} : (window.addEventListener("focus", ec, !1), function() {
                        window.removeEventListener("focus", ec, !1)
                    })
                }, [er, ed, ea, j]);
                var e_ = (0, n.useRef)([]),
                    ef = function(e) {
                        en.current && en.current.contains(e.target) || (e.preventDefault(), e_.current = [])
                    };
                (0, n.useEffect)(function() {
                    return F && (document.addEventListener("dragover", C, !1), document.addEventListener("drop", ef, !1)),
                        function() {
                            F && (document.removeEventListener("dragover", C), document.removeEventListener("drop", ef))
                        }
                }, [en, F]);
                var em = (0, n.useCallback)(function(e) {
                        var t;
                        e.preventDefault(), e.persist(), eB(e), e_.current = [].concat(function(e) {
                            if (Array.isArray(e)) return I(e)
                        }(t = e_.current) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(t) || W(t) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(), [e.target]), P(e) && Promise.resolve(_(e)).then(function(t) {
                            (!N(e) || Z) && (el({
                                draggedFiles: t,
                                isDragActive: !0,
                                type: "setDraggedFiles"
                            }), h && h(e))
                        })
                    }, [_, h, Z]),
                    eg = (0, n.useCallback)(function(e) {
                        e.preventDefault(), e.persist(), eB(e);
                        var t = P(e);
                        if (t && e.dataTransfer) try {
                            e.dataTransfer.dropEffect = "copy"
                        } catch (e) {}
                        return t && x && x(e), !1
                    }, [x, Z]),
                    ep = (0, n.useCallback)(function(e) {
                        e.preventDefault(), e.persist(), eB(e);
                        var t = e_.current.filter(function(e) {
                                return en.current && en.current.contains(e)
                            }),
                            a = t.indexOf(e.target); - 1 !== a && t.splice(a, 1), e_.current = t, !(t.length > 0) && (el({
                            isDragActive: !1,
                            type: "setDraggedFiles",
                            draggedFiles: []
                        }), P(e) && y && y(e))
                    }, [en, y, Z]),
                    eh = (0, n.useCallback)(function(e, t) {
                        var a = [],
                            n = [];
                        e.forEach(function(e) {
                            var t = R(B(e, u), 2),
                                r = t[0],
                                i = t[1],
                                o = R(D(e, m, f), 2),
                                l = o[0],
                                s = o[1],
                                d = ee ? ee(e) : null;
                            if (r && l && !d) a.push(e);
                            else {
                                var c = [i, s];
                                d && (c = c.concat(d)), n.push({
                                    file: e,
                                    errors: c.filter(function(e) {
                                        return e
                                    })
                                })
                            }
                        }), (!g && a.length > 1 || g && p >= 1 && a.length > p) && (a.forEach(function(e) {
                            n.push({
                                file: e,
                                errors: [T]
                            })
                        }), a.splice(0)), el({
                            acceptedFiles: a,
                            fileRejections: n,
                            type: "setFiles"
                        }), S && S(a, n, t), n.length > 0 && k && k(n, t), a.length > 0 && L && L(a, t)
                    }, [el, g, u, m, f, p, S, L, k, ee]),
                    ey = (0, n.useCallback)(function(e) {
                        e.preventDefault(), e.persist(), eB(e), e_.current = [], P(e) && Promise.resolve(_(e)).then(function(t) {
                            (!N(e) || Z) && eh(t, e)
                        }), el({
                            type: "reset"
                        })
                    }, [_, eh, Z]),
                    ew = (0, n.useCallback)(function() {
                        if (j && E()) {
                            el({
                                type: "openDialog"
                            }), et();
                            var e, t = {
                                multiple: g,
                                types: [{
                                    description: "everything",
                                    accept: Array.isArray(e = "string" == typeof(e = u) ? e.split(",") : e) ? e.filter(function(e) {
                                        return "audio/*" === e || "video/*" === e || "image/*" === e || "text/*" === e || /\w+\/[-+.\w]+/g.test(e)
                                    }).reduce(function(e, t) {
                                        return w(w({}, e), {}, b({}, t, []))
                                    }, {}) : {}
                                }]
                            };
                            window.showOpenFilePicker(t).then(function(e) {
                                return _(e)
                            }).then(function(e) {
                                return eh(e, null)
                            }).catch(function(e) {
                                return ea(e)
                            }).finally(function() {
                                return el({
                                    type: "closeDialog"
                                })
                            });
                            return
                        }
                        er.current && (el({
                            type: "openDialog"
                        }), et(), er.current.value = null, er.current.click())
                    }, [el, et, ea, j, eh, u, g]),
                    eb = (0, n.useCallback)(function(e) {
                        en.current && en.current.isEqualNode(e.target) && (32 === e.keyCode || 13 === e.keyCode) && (e.preventDefault(), ew())
                    }, [en, er, ew]),
                    ev = (0, n.useCallback)(function() {
                        el({
                            type: "focus"
                        })
                    }, []),
                    ex = (0, n.useCallback)(function() {
                        el({
                            type: "blur"
                        })
                    }, []),
                    eS = (0, n.useCallback)(function() {
                        q || (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                            return -1 !== e.indexOf("MSIE") || -1 !== e.indexOf("Trident/") || -1 !== e.indexOf("Edge/")
                        }() ? setTimeout(ew, 0) : ew())
                    }, [er, q, ew]),
                    eL = function(e) {
                        return c ? null : e
                    },
                    ek = function(e) {
                        return K ? null : eL(e)
                    },
                    eT = function(e) {
                        return Q ? null : eL(e)
                    },
                    eB = function(e) {
                        Z && e.stopPropagation()
                    },
                    eD = (0, n.useMemo)(function() {
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.refKey,
                                a = e.role,
                                n = e.onKeyDown,
                                r = e.onFocus,
                                i = e.onBlur,
                                o = e.onClick,
                                l = e.onDragEnter,
                                s = e.onDragOver,
                                d = e.onDragLeave,
                                u = e.onDrop,
                                _ = X(e, O);
                            return U(U($({
                                onKeyDown: ek(A(n, eb)),
                                onFocus: ek(A(r, ev)),
                                onBlur: ek(A(i, ex)),
                                onClick: eL(A(o, eS)),
                                onDragEnter: eT(A(l, em)),
                                onDragOver: eT(A(s, eg)),
                                onDragLeave: eT(A(d, ep)),
                                onDrop: eT(A(u, ey)),
                                role: "string" == typeof a && "" !== a ? a : "button"
                            }, void 0 === t ? "ref" : t, en), c || K ? {} : {
                                tabIndex: 0
                            }), _)
                        }
                    }, [en, eb, ev, ex, eS, em, eg, ep, ey, K, Q, c]),
                    eH = (0, n.useCallback)(function(e) {
                        e.stopPropagation()
                    }, []),
                    eN = (0, n.useMemo)(function() {
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.refKey,
                                a = e.onChange,
                                n = e.onClick,
                                r = X(e, z);
                            return U(U({}, $({
                                accept: u,
                                multiple: g,
                                type: "file",
                                style: {
                                    display: "none"
                                },
                                onChange: eL(A(a, ey)),
                                onClick: eL(A(n, eH)),
                                autoComplete: "off",
                                tabIndex: -1
                            }, void 0 === t ? "ref" : t, er)), r)
                        }
                    }, [er, u, g, ey, c]),
                    eP = eu.length,
                    eC = eP > 0 && (t = (e = {
                        files: eu,
                        accept: u,
                        minSize: m,
                        maxSize: f,
                        multiple: g,
                        maxFiles: p
                    }).files, a = e.accept, r = e.minSize, i = e.maxSize, o = e.multiple, l = e.maxFiles, (!!o || !(t.length > 1)) && (!o || !(l >= 1) || !(t.length > l)) && t.every(function(e) {
                        var t = v(B(e, a), 1)[0],
                            n = v(D(e, r, i), 1)[0];
                        return t && n
                    }));
                return U(U({}, eo), {}, {
                    isDragAccept: eC,
                    isDragReject: eP > 0 && !eC,
                    isFocused: es && !c,
                    getRootProps: eD,
                    getInputProps: eN,
                    rootRef: en,
                    inputRef: er,
                    open: eL(ew)
                })
            }

            function Y(e, t) {
                switch (t.type) {
                    case "focus":
                        return U(U({}, e), {}, {
                            isFocused: !0
                        });
                    case "blur":
                        return U(U({}, e), {}, {
                            isFocused: !1
                        });
                    case "openDialog":
                        return U(U({}, G), {}, {
                            isFileDialogActive: !0
                        });
                    case "closeDialog":
                        return U(U({}, e), {}, {
                            isFileDialogActive: !1
                        });
                    case "setDraggedFiles":
                        var a = t.isDragActive,
                            n = t.draggedFiles;
                        return U(U({}, e), {}, {
                            draggedFiles: n,
                            isDragActive: a
                        });
                    case "setFiles":
                        return U(U({}, e), {}, {
                            acceptedFiles: t.acceptedFiles,
                            fileRejections: t.fileRejections
                        });
                    case "reset":
                        return U({}, G);
                    default:
                        return e
                }
            }

            function J() {}
        },
        3616: (e, t, a) => {
            "use strict";
            a.d(t, {
                ll: () => T,
                rD: () => C,
                __: () => B,
                UU: () => N,
                cY: () => D,
                BN: () => H,
                Ej: () => P
            });
            var n = a(29612);

            function r(e, t, a) {
                let r, {
                        reference: i,
                        floating: o
                    } = e,
                    l = (0, n.TV)(t),
                    s = (0, n.Dz)(t),
                    d = (0, n.sq)(s),
                    u = (0, n.C0)(t),
                    c = "y" === l,
                    _ = i.x + i.width / 2 - o.width / 2,
                    f = i.y + i.height / 2 - o.height / 2,
                    m = i[d] / 2 - o[d] / 2;
                switch (u) {
                    case "top":
                        r = {
                            x: _,
                            y: i.y - o.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: _,
                            y: i.y + i.height
                        };
                        break;
                    case "right":
                        r = {
                            x: i.x + i.width,
                            y: f
                        };
                        break;
                    case "left":
                        r = {
                            x: i.x - o.width,
                            y: f
                        };
                        break;
                    default:
                        r = {
                            x: i.x,
                            y: i.y
                        }
                }
                switch ((0, n.Sg)(t)) {
                    case "start":
                        r[s] -= m * (a && c ? -1 : 1);
                        break;
                    case "end":
                        r[s] += m * (a && c ? -1 : 1)
                }
                return r
            }
            async function i(e, t) {
                var a;
                void 0 === t && (t = {});
                let {
                    x: r,
                    y: i,
                    platform: o,
                    rects: l,
                    elements: s,
                    strategy: d
                } = e, {
                    boundary: u = "clippingAncestors",
                    rootBoundary: c = "viewport",
                    elementContext: _ = "floating",
                    altBoundary: f = !1,
                    padding: m = 0
                } = (0, n._3)(t, e), g = (0, n.nI)(m), p = s[f ? "floating" === _ ? "reference" : "floating" : _], h = (0, n.B1)(await o.getClippingRect({
                    element: null == (a = await (null == o.isElement ? void 0 : o.isElement(p))) || a ? p : p.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(s.floating)),
                    boundary: u,
                    rootBoundary: c,
                    strategy: d
                })), y = "floating" === _ ? {
                    x: r,
                    y: i,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, w = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(s.floating)), b = await (null == o.isElement ? void 0 : o.isElement(w)) && await (null == o.getScale ? void 0 : o.getScale(w)) || {
                    x: 1,
                    y: 1
                }, v = (0, n.B1)(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: s,
                    rect: y,
                    offsetParent: w,
                    strategy: d
                }) : y);
                return {
                    top: (h.top - v.top + g.top) / b.y,
                    bottom: (v.bottom - h.bottom + g.bottom) / b.y,
                    left: (h.left - v.left + g.left) / b.x,
                    right: (v.right - h.right + g.right) / b.x
                }
            }
            let o = async (e, t, a) => {
                let {
                    placement: n = "bottom",
                    strategy: o = "absolute",
                    middleware: l = [],
                    platform: s
                } = a, d = l.filter(Boolean), u = await (null == s.isRTL ? void 0 : s.isRTL(t)), c = await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: _,
                    y: f
                } = r(c, n, u), m = n, g = {}, p = 0;
                for (let a = 0; a < d.length; a++) {
                    var h;
                    let {
                        name: l,
                        fn: y
                    } = d[a], {
                        x: w,
                        y: b,
                        data: v,
                        reset: x
                    } = await y({
                        x: _,
                        y: f,
                        initialPlacement: n,
                        placement: m,
                        strategy: o,
                        middlewareData: g,
                        rects: c,
                        platform: {
                            ...s,
                            detectOverflow: null != (h = s.detectOverflow) ? h : i
                        },
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    _ = null != w ? w : _, f = null != b ? b : f, g = {
                        ...g,
                        [l]: {
                            ...g[l],
                            ...v
                        }
                    }, x && p <= 50 && (p++, "object" == typeof x && (x.placement && (m = x.placement), x.rects && (c = !0 === x.rects ? await s.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : x.rects), {
                        x: _,
                        y: f
                    } = r(c, m, u)), a = -1)
                }
                return {
                    x: _,
                    y: f,
                    placement: m,
                    strategy: o,
                    middlewareData: g
                }
            }, l = new Set(["left", "top"]);
            async function s(e, t) {
                let {
                    placement: a,
                    platform: r,
                    elements: i
                } = e, o = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)), s = (0, n.C0)(a), d = (0, n.Sg)(a), u = "y" === (0, n.TV)(a), c = l.has(s) ? -1 : 1, _ = o && u ? -1 : 1, f = (0, n._3)(t, e), {
                    mainAxis: m,
                    crossAxis: g,
                    alignmentAxis: p
                } = "number" == typeof f ? {
                    mainAxis: f,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: f.mainAxis || 0,
                    crossAxis: f.crossAxis || 0,
                    alignmentAxis: f.alignmentAxis
                };
                return d && "number" == typeof p && (g = "end" === d ? -1 * p : p), u ? {
                    x: g * _,
                    y: m * c
                } : {
                    x: m * c,
                    y: g * _
                }
            }
            var d = a(30474);

            function u(e) {
                let t = (0, d.L9)(e),
                    a = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    i = (0, d.sb)(e),
                    o = i ? e.offsetWidth : a,
                    l = i ? e.offsetHeight : r,
                    s = (0, n.LI)(a) !== o || (0, n.LI)(r) !== l;
                return s && (a = o, r = l), {
                    width: a,
                    height: r,
                    $: s
                }
            }

            function c(e) {
                return (0, d.vq)(e) ? e : e.contextElement
            }

            function _(e) {
                let t = c(e);
                if (!(0, d.sb)(t)) return (0, n.Jx)(1);
                let a = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: i,
                        $: o
                    } = u(t),
                    l = (o ? (0, n.LI)(a.width) : a.width) / r,
                    s = (o ? (0, n.LI)(a.height) : a.height) / i;
                return l && Number.isFinite(l) || (l = 1), s && Number.isFinite(s) || (s = 1), {
                    x: l,
                    y: s
                }
            }
            let f = (0, n.Jx)(0);

            function m(e) {
                let t = (0, d.zk)(e);
                return (0, d.Tc)() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : f
            }

            function g(e, t, a, r) {
                var i;
                void 0 === t && (t = !1), void 0 === a && (a = !1);
                let o = e.getBoundingClientRect(),
                    l = c(e),
                    s = (0, n.Jx)(1);
                t && (r ? (0, d.vq)(r) && (s = _(r)) : s = _(e));
                let u = (void 0 === (i = a) && (i = !1), r && (!i || r === (0, d.zk)(l)) && i) ? m(l) : (0, n.Jx)(0),
                    f = (o.left + u.x) / s.x,
                    g = (o.top + u.y) / s.y,
                    p = o.width / s.x,
                    h = o.height / s.y;
                if (l) {
                    let e = (0, d.zk)(l),
                        t = r && (0, d.vq)(r) ? (0, d.zk)(r) : r,
                        a = e,
                        n = (0, d._m)(a);
                    for (; n && r && t !== a;) {
                        let e = _(n),
                            t = n.getBoundingClientRect(),
                            r = (0, d.L9)(n),
                            i = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            o = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
                        f *= e.x, g *= e.y, p *= e.x, h *= e.y, f += i, g += o, a = (0, d.zk)(n), n = (0, d._m)(a)
                    }
                }
                return (0, n.B1)({
                    width: p,
                    height: h,
                    x: f,
                    y: g
                })
            }

            function p(e, t) {
                let a = (0, d.CP)(e).scrollLeft;
                return t ? t.left + a : g((0, d.ep)(e)).left + a
            }

            function h(e, t) {
                let a = e.getBoundingClientRect();
                return {
                    x: a.left + t.scrollLeft - p(e, a),
                    y: a.top + t.scrollTop
                }
            }
            let y = new Set(["absolute", "fixed"]);

            function w(e, t, a) {
                let r;
                if ("viewport" === t) r = function(e, t) {
                    let a = (0, d.zk)(e),
                        n = (0, d.ep)(e),
                        r = a.visualViewport,
                        i = n.clientWidth,
                        o = n.clientHeight,
                        l = 0,
                        s = 0;
                    if (r) {
                        i = r.width, o = r.height;
                        let e = (0, d.Tc)();
                        (!e || e && "fixed" === t) && (l = r.offsetLeft, s = r.offsetTop)
                    }
                    let u = p(n);
                    if (u <= 0) {
                        let e = n.ownerDocument,
                            t = e.body,
                            a = getComputedStyle(t),
                            r = "CSS1Compat" === e.compatMode && parseFloat(a.marginLeft) + parseFloat(a.marginRight) || 0,
                            o = Math.abs(n.clientWidth - t.clientWidth - r);
                        o <= 25 && (i -= o)
                    } else u <= 25 && (i += u);
                    return {
                        width: i,
                        height: o,
                        x: l,
                        y: s
                    }
                }(e, a);
                else if ("document" === t) r = function(e) {
                    let t = (0, d.ep)(e),
                        a = (0, d.CP)(e),
                        r = e.ownerDocument.body,
                        i = (0, n.T9)(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        o = (0, n.T9)(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        l = -a.scrollLeft + p(e),
                        s = -a.scrollTop;
                    return "rtl" === (0, d.L9)(r).direction && (l += (0, n.T9)(t.clientWidth, r.clientWidth) - i), {
                        width: i,
                        height: o,
                        x: l,
                        y: s
                    }
                }((0, d.ep)(e));
                else if ((0, d.vq)(t)) r = function(e, t) {
                    let a = g(e, !0, "fixed" === t),
                        r = a.top + e.clientTop,
                        i = a.left + e.clientLeft,
                        o = (0, d.sb)(e) ? _(e) : (0, n.Jx)(1),
                        l = e.clientWidth * o.x,
                        s = e.clientHeight * o.y;
                    return {
                        width: l,
                        height: s,
                        x: i * o.x,
                        y: r * o.y
                    }
                }(t, a);
                else {
                    let a = m(e);
                    r = {
                        x: t.x - a.x,
                        y: t.y - a.y,
                        width: t.width,
                        height: t.height
                    }
                }
                return (0, n.B1)(r)
            }

            function b(e) {
                return "static" === (0, d.L9)(e).position
            }

            function v(e, t) {
                if (!(0, d.sb)(e) || "fixed" === (0, d.L9)(e).position) return null;
                if (t) return t(e);
                let a = e.offsetParent;
                return (0, d.ep)(e) === a && (a = a.ownerDocument.body), a
            }

            function x(e, t) {
                let a = (0, d.zk)(e);
                if ((0, d.Tf)(e)) return a;
                if (!(0, d.sb)(e)) {
                    let t = (0, d.$4)(e);
                    for (; t && !(0, d.eu)(t);) {
                        if ((0, d.vq)(t) && !b(t)) return t;
                        t = (0, d.$4)(t)
                    }
                    return a
                }
                let n = v(e, t);
                for (; n && (0, d.Lv)(n) && b(n);) n = v(n, t);
                return n && (0, d.eu)(n) && b(n) && !(0, d.sQ)(n) ? a : n || (0, d.gJ)(e) || a
            }
            let S = async function(e) {
                let t = this.getOffsetParent || x,
                    a = this.getDimensions,
                    r = await a(e.floating);
                return {
                    reference: function(e, t, a) {
                        let r = (0, d.sb)(t),
                            i = (0, d.ep)(t),
                            o = "fixed" === a,
                            l = g(e, !0, o, t),
                            s = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            u = (0, n.Jx)(0);
                        if (r || !r && !o)
                            if (("body" !== (0, d.mq)(t) || (0, d.ZU)(i)) && (s = (0, d.CP)(t)), r) {
                                let e = g(t, !0, o, t);
                                u.x = e.x + t.clientLeft, u.y = e.y + t.clientTop
                            } else i && (u.x = p(i));
                        o && !r && i && (u.x = p(i));
                        let c = !i || r || o ? (0, n.Jx)(0) : h(i, s);
                        return {
                            x: l.left + s.scrollLeft - u.x - c.x,
                            y: l.top + s.scrollTop - u.y - c.y,
                            width: l.width,
                            height: l.height
                        }
                    }(e.reference, await t(e.floating), e.strategy),
                    floating: {
                        x: 0,
                        y: 0,
                        width: r.width,
                        height: r.height
                    }
                }
            }, L = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                    let {
                        elements: t,
                        rect: a,
                        offsetParent: r,
                        strategy: i
                    } = e, o = "fixed" === i, l = (0, d.ep)(r), s = !!t && (0, d.Tf)(t.floating);
                    if (r === l || s && o) return a;
                    let u = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        c = (0, n.Jx)(1),
                        f = (0, n.Jx)(0),
                        m = (0, d.sb)(r);
                    if ((m || !m && !o) && (("body" !== (0, d.mq)(r) || (0, d.ZU)(l)) && (u = (0, d.CP)(r)), (0, d.sb)(r))) {
                        let e = g(r);
                        c = _(r), f.x = e.x + r.clientLeft, f.y = e.y + r.clientTop
                    }
                    let p = !l || m || o ? (0, n.Jx)(0) : h(l, u);
                    return {
                        width: a.width * c.x,
                        height: a.height * c.y,
                        x: a.x * c.x - u.scrollLeft * c.x + f.x + p.x,
                        y: a.y * c.y - u.scrollTop * c.y + f.y + p.y
                    }
                },
                getDocumentElement: d.ep,
                getClippingRect: function(e) {
                    let {
                        element: t,
                        boundary: a,
                        rootBoundary: r,
                        strategy: i
                    } = e, o = [..."clippingAncestors" === a ? (0, d.Tf)(t) ? [] : function(e, t) {
                        let a = t.get(e);
                        if (a) return a;
                        let n = (0, d.v9)(e, [], !1).filter(e => (0, d.vq)(e) && "body" !== (0, d.mq)(e)),
                            r = null,
                            i = "fixed" === (0, d.L9)(e).position,
                            o = i ? (0, d.$4)(e) : e;
                        for (;
                            (0, d.vq)(o) && !(0, d.eu)(o);) {
                            let t = (0, d.L9)(o),
                                a = (0, d.sQ)(o);
                            a || "fixed" !== t.position || (r = null), (i ? !a && !r : !a && "static" === t.position && !!r && y.has(r.position) || (0, d.ZU)(o) && !a && function e(t, a) {
                                let n = (0, d.$4)(t);
                                return !(n === a || !(0, d.vq)(n) || (0, d.eu)(n)) && ("fixed" === (0, d.L9)(n).position || e(n, a))
                            }(e, o)) ? n = n.filter(e => e !== o) : r = t, o = (0, d.$4)(o)
                        }
                        return t.set(e, n), n
                    }(t, this._c) : [].concat(a), r], l = o[0], s = o.reduce((e, a) => {
                        let r = w(t, a, i);
                        return e.top = (0, n.T9)(r.top, e.top), e.right = (0, n.jk)(r.right, e.right), e.bottom = (0, n.jk)(r.bottom, e.bottom), e.left = (0, n.T9)(r.left, e.left), e
                    }, w(t, l, i));
                    return {
                        width: s.right - s.left,
                        height: s.bottom - s.top,
                        x: s.left,
                        y: s.top
                    }
                },
                getOffsetParent: x,
                getElementRects: S,
                getClientRects: function(e) {
                    return Array.from(e.getClientRects())
                },
                getDimensions: function(e) {
                    let {
                        width: t,
                        height: a
                    } = u(e);
                    return {
                        width: t,
                        height: a
                    }
                },
                getScale: _,
                isElement: d.vq,
                isRTL: function(e) {
                    return "rtl" === (0, d.L9)(e).direction
                }
            };

            function k(e, t) {
                return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
            }

            function T(e, t, a, r) {
                let i;
                void 0 === r && (r = {});
                let {
                    ancestorScroll: o = !0,
                    ancestorResize: l = !0,
                    elementResize: s = "function" == typeof ResizeObserver,
                    layoutShift: u = "function" == typeof IntersectionObserver,
                    animationFrame: _ = !1
                } = r, f = c(e), m = o || l ? [...f ? (0, d.v9)(f) : [], ...(0, d.v9)(t)] : [];
                m.forEach(e => {
                    o && e.addEventListener("scroll", a, {
                        passive: !0
                    }), l && e.addEventListener("resize", a)
                });
                let p = f && u ? function(e, t) {
                        let a, r = null,
                            i = (0, d.ep)(e);

                        function o() {
                            var e;
                            clearTimeout(a), null == (e = r) || e.disconnect(), r = null
                        }
                        return ! function l(s, d) {
                            void 0 === s && (s = !1), void 0 === d && (d = 1), o();
                            let u = e.getBoundingClientRect(),
                                {
                                    left: c,
                                    top: _,
                                    width: f,
                                    height: m
                                } = u;
                            if (s || t(), !f || !m) return;
                            let g = (0, n.RI)(_),
                                p = (0, n.RI)(i.clientWidth - (c + f)),
                                h = {
                                    rootMargin: -g + "px " + -p + "px " + -(0, n.RI)(i.clientHeight - (_ + m)) + "px " + -(0, n.RI)(c) + "px",
                                    threshold: (0, n.T9)(0, (0, n.jk)(1, d)) || 1
                                },
                                y = !0;

                            function w(t) {
                                let n = t[0].intersectionRatio;
                                if (n !== d) {
                                    if (!y) return l();
                                    n ? l(!1, n) : a = setTimeout(() => {
                                        l(!1, 1e-7)
                                    }, 1e3)
                                }
                                1 !== n || k(u, e.getBoundingClientRect()) || l(), y = !1
                            }
                            try {
                                r = new IntersectionObserver(w, {
                                    ...h,
                                    root: i.ownerDocument
                                })
                            } catch (e) {
                                r = new IntersectionObserver(w, h)
                            }
                            r.observe(e)
                        }(!0), o
                    }(f, a) : null,
                    h = -1,
                    y = null;
                s && (y = new ResizeObserver(e => {
                    let [n] = e;
                    n && n.target === f && y && (y.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
                        var e;
                        null == (e = y) || e.observe(t)
                    })), a()
                }), f && !_ && y.observe(f), y.observe(t));
                let w = _ ? g(e) : null;
                return _ && function t() {
                    let n = g(e);
                    w && !k(w, n) && a(), w = n, i = requestAnimationFrame(t)
                }(), a(), () => {
                    var e;
                    m.forEach(e => {
                        o && e.removeEventListener("scroll", a), l && e.removeEventListener("resize", a)
                    }), null == p || p(), null == (e = y) || e.disconnect(), y = null, _ && cancelAnimationFrame(i)
                }
            }
            let B = i,
                D = function(e) {
                    return void 0 === e && (e = 0), {
                        name: "offset",
                        options: e,
                        async fn(t) {
                            var a, n;
                            let {
                                x: r,
                                y: i,
                                placement: o,
                                middlewareData: l
                            } = t, d = await s(t, e);
                            return o === (null == (a = l.offset) ? void 0 : a.placement) && null != (n = l.arrow) && n.alignmentOffset ? {} : {
                                x: r + d.x,
                                y: i + d.y,
                                data: {
                                    ...d,
                                    placement: o
                                }
                            }
                        }
                    }
                },
                H = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "shift",
                        options: e,
                        async fn(t) {
                            let {
                                x: a,
                                y: r,
                                placement: i,
                                platform: o
                            } = t, {
                                mainAxis: l = !0,
                                crossAxis: s = !1,
                                limiter: d = {
                                    fn: e => {
                                        let {
                                            x: t,
                                            y: a
                                        } = e;
                                        return {
                                            x: t,
                                            y: a
                                        }
                                    }
                                },
                                ...u
                            } = (0, n._3)(e, t), c = {
                                x: a,
                                y: r
                            }, _ = await o.detectOverflow(t, u), f = (0, n.TV)((0, n.C0)(i)), m = (0, n.PG)(f), g = c[m], p = c[f];
                            if (l) {
                                let e = "y" === m ? "top" : "left",
                                    t = "y" === m ? "bottom" : "right",
                                    a = g + _[e],
                                    r = g - _[t];
                                g = (0, n.qE)(a, g, r)
                            }
                            if (s) {
                                let e = "y" === f ? "top" : "left",
                                    t = "y" === f ? "bottom" : "right",
                                    a = p + _[e],
                                    r = p - _[t];
                                p = (0, n.qE)(a, p, r)
                            }
                            let h = d.fn({
                                ...t,
                                [m]: g,
                                [f]: p
                            });
                            return {
                                ...h,
                                data: {
                                    x: h.x - a,
                                    y: h.y - r,
                                    enabled: {
                                        [m]: l,
                                        [f]: s
                                    }
                                }
                            }
                        }
                    }
                },
                N = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "flip",
                        options: e,
                        async fn(t) {
                            var a, r, i, o, l;
                            let {
                                placement: s,
                                middlewareData: d,
                                rects: u,
                                initialPlacement: c,
                                platform: _,
                                elements: f
                            } = t, {
                                mainAxis: m = !0,
                                crossAxis: g = !0,
                                fallbackPlacements: p,
                                fallbackStrategy: h = "bestFit",
                                fallbackAxisSideDirection: y = "none",
                                flipAlignment: w = !0,
                                ...b
                            } = (0, n._3)(e, t);
                            if (null != (a = d.arrow) && a.alignmentOffset) return {};
                            let v = (0, n.C0)(s),
                                x = (0, n.TV)(c),
                                S = (0, n.C0)(c) === c,
                                L = await (null == _.isRTL ? void 0 : _.isRTL(f.floating)),
                                k = p || (S || !w ? [(0, n.bV)(c)] : (0, n.WJ)(c)),
                                T = "none" !== y;
                            !p && T && k.push(...(0, n.lP)(c, w, y, L));
                            let B = [c, ...k],
                                D = await _.detectOverflow(t, b),
                                H = [],
                                N = (null == (r = d.flip) ? void 0 : r.overflows) || [];
                            if (m && H.push(D[v]), g) {
                                let e = (0, n.w7)(s, u, L);
                                H.push(D[e[0]], D[e[1]])
                            }
                            if (N = [...N, {
                                    placement: s,
                                    overflows: H
                                }], !H.every(e => e <= 0)) {
                                let e = ((null == (i = d.flip) ? void 0 : i.index) || 0) + 1,
                                    t = B[e];
                                if (t && ("alignment" !== g || x === (0, n.TV)(t) || N.every(e => (0, n.TV)(e.placement) !== x || e.overflows[0] > 0))) return {
                                    data: {
                                        index: e,
                                        overflows: N
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                                let a = null == (o = N.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : o.placement;
                                if (!a) switch (h) {
                                    case "bestFit": {
                                        let e = null == (l = N.filter(e => {
                                            if (T) {
                                                let t = (0, n.TV)(e.placement);
                                                return t === x || "y" === t
                                            }
                                            return !0
                                        }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];
                                        e && (a = e);
                                        break
                                    }
                                    case "initialPlacement":
                                        a = c
                                }
                                if (s !== a) return {
                                    reset: {
                                        placement: a
                                    }
                                }
                            }
                            return {}
                        }
                    }
                },
                P = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "size",
                        options: e,
                        async fn(t) {
                            var a, r;
                            let i, o, {
                                    placement: l,
                                    rects: s,
                                    platform: d,
                                    elements: u
                                } = t,
                                {
                                    apply: c = () => {},
                                    ..._
                                } = (0, n._3)(e, t),
                                f = await d.detectOverflow(t, _),
                                m = (0, n.C0)(l),
                                g = (0, n.Sg)(l),
                                p = "y" === (0, n.TV)(l),
                                {
                                    width: h,
                                    height: y
                                } = s.floating;
                            "top" === m || "bottom" === m ? (i = m, o = g === (await (null == d.isRTL ? void 0 : d.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (o = m, i = "end" === g ? "top" : "bottom");
                            let w = y - f.top - f.bottom,
                                b = h - f.left - f.right,
                                v = (0, n.jk)(y - f[i], w),
                                x = (0, n.jk)(h - f[o], b),
                                S = !t.middlewareData.shift,
                                L = v,
                                k = x;
                            if (null != (a = t.middlewareData.shift) && a.enabled.x && (k = b), null != (r = t.middlewareData.shift) && r.enabled.y && (L = w), S && !g) {
                                let e = (0, n.T9)(f.left, 0),
                                    t = (0, n.T9)(f.right, 0),
                                    a = (0, n.T9)(f.top, 0),
                                    r = (0, n.T9)(f.bottom, 0);
                                p ? k = h - 2 * (0 !== e || 0 !== t ? e + t : (0, n.T9)(f.left, f.right)) : L = y - 2 * (0 !== a || 0 !== r ? a + r : (0, n.T9)(f.top, f.bottom))
                            }
                            await c({
                                ...t,
                                availableWidth: k,
                                availableHeight: L
                            });
                            let T = await d.getDimensions(u.floating);
                            return h !== T.width || y !== T.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                },
                C = (e, t, a) => {
                    let n = new Map,
                        r = {
                            platform: L,
                            ...a
                        },
                        i = {
                            ...r.platform,
                            _c: n
                        };
                    return o(e, t, {
                        ...r,
                        platform: i
                    })
                }
        },
        4119: (e, t, a) => {
            var n = a(6168);
            e.exports = function(e) {
                var t = n(e),
                    a = t % 1;
                return t == t ? a ? t - a : t : 0
            }
        },
        4323: (e, t, a) => {
            var n = a(92651),
                r = a(59156),
                i = a(18783),
                o = a(4119),
                l = a(30036),
                s = Math.max;
            e.exports = function(e, t, a, d) {
                e = r(e) ? e : l(e), a = a && !d ? o(a) : 0;
                var u = e.length;
                return a < 0 && (a = s(u + a, 0)), i(e) ? a <= u && e.indexOf(t, a) > -1 : !!u && n(e, t, a) > -1
            }
        },
        5286: (e, t, a) => {
            e.exports = a(95796)
        },
        6069: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => i
            });
            var n = a(61935),
                r = a(56993);

            function i(e, t) {
                (0, r.A)(2, arguments);
                var a = (0, n.A)(e),
                    i = (0, n.A)(t);
                return a.getTime() < i.getTime()
            }
        },
        6168: (e, t, a) => {
            var n = a(68906),
                r = 1 / 0;
            e.exports = function(e) {
                return e ? (e = n(e)) === r || e === -r ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
            }
        },
        6841: (e, t, a) => {
            var n = a(54557),
                r = a(20815),
                i = a(78047),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!n(e)) return i(e);
                var t = r(e),
                    a = [];
                for (var l in e) "constructor" == l && (t || !o.call(e, l)) || a.push(l);
                return a
            }
        },
        7794: (e, t, a) => {
            "use strict";
            a.d(t, {
                Ck: () => Z,
                IN: () => D,
                fK: () => Y,
                rH: () => V,
                zB: () => T
            });
            var n, r, i, o, l, s = -1,
                d = function(e) {
                    addEventListener("pageshow", function(t) {
                        t.persisted && (s = t.timeStamp, e(t))
                    }, !0)
                },
                u = function() {
                    return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
                },
                c = function() {
                    var e = u();
                    return e && e.activationStart || 0
                },
                _ = function(e, t) {
                    var a = u(),
                        n = "navigate";
                    return s >= 0 ? n = "back-forward-cache" : a && (document.prerendering || c() > 0 ? n = "prerender" : document.wasDiscarded ? n = "restore" : a.type && (n = a.type.replace(/_/g, "-"))), {
                        name: e,
                        value: void 0 === t ? -1 : t,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: "v3-".concat(Date.now(), "-").concat(Math.floor(0x82f79cd8fff * Math.random()) + 1e12),
                        navigationType: n
                    }
                },
                f = function(e, t, a) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                            var n = new PerformanceObserver(function(e) {
                                Promise.resolve().then(function() {
                                    t(e.getEntries())
                                })
                            });
                            return n.observe(Object.assign({
                                type: e,
                                buffered: !0
                            }, a || {})), n
                        }
                    } catch (e) {}
                },
                m = function(e, t, a, n) {
                    var r, i;
                    return function(o) {
                        var l;
                        t.value >= 0 && (o || n) && ((i = t.value - (r || 0)) || void 0 === r) && (r = t.value, t.delta = i, l = t.value, t.rating = l > a[1] ? "poor" : l > a[0] ? "needs-improvement" : "good", e(t))
                    }
                },
                g = function(e) {
                    requestAnimationFrame(function() {
                        return requestAnimationFrame(function() {
                            return e()
                        })
                    })
                },
                p = function(e) {
                    var t = function(t) {
                        "pagehide" !== t.type && "hidden" !== document.visibilityState || e(t)
                    };
                    addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0)
                },
                h = function(e) {
                    var t = !1;
                    return function(a) {
                        t || (e(a), t = !0)
                    }
                },
                y = -1,
                w = function() {
                    return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
                },
                b = function(e) {
                    "hidden" === document.visibilityState && y > -1 && (y = "visibilitychange" === e.type ? e.timeStamp : 0, x())
                },
                v = function() {
                    addEventListener("visibilitychange", b, !0), addEventListener("prerenderingchange", b, !0)
                },
                x = function() {
                    removeEventListener("visibilitychange", b, !0), removeEventListener("prerenderingchange", b, !0)
                },
                S = function() {
                    return y < 0 && (y = w(), v(), d(function() {
                        setTimeout(function() {
                            y = w(), v()
                        }, 0)
                    })), {
                        get firstHiddenTime() {
                            return y
                        }
                    }
                },
                L = function(e) {
                    document.prerendering ? addEventListener("prerenderingchange", function() {
                        return e()
                    }, !0) : e()
                },
                k = [1800, 3e3],
                T = function(e, t) {
                    t = t || {}, L(function() {
                        var a, n = S(),
                            r = _("FCP"),
                            i = f("paint", function(e) {
                                e.forEach(function(e) {
                                    "first-contentful-paint" === e.name && (i.disconnect(), e.startTime < n.firstHiddenTime && (r.value = Math.max(e.startTime - c(), 0), r.entries.push(e), a(!0)))
                                })
                            });
                        i && (a = m(e, r, k, t.reportAllChanges), d(function(n) {
                            a = m(e, r = _("FCP"), k, t.reportAllChanges), g(function() {
                                r.value = performance.now() - n.timeStamp, a(!0)
                            })
                        }))
                    })
                },
                B = [.1, .25],
                D = function(e, t) {
                    t = t || {}, T(h(function() {
                        var a, n = _("CLS", 0),
                            r = 0,
                            i = [],
                            o = function(e) {
                                e.forEach(function(e) {
                                    if (!e.hadRecentInput) {
                                        var t = i[0],
                                            a = i[i.length - 1];
                                        r && e.startTime - a.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (r += e.value, i.push(e)) : (r = e.value, i = [e])
                                    }
                                }), r > n.value && (n.value = r, n.entries = i, a())
                            },
                            l = f("layout-shift", o);
                        l && (a = m(e, n, B, t.reportAllChanges), p(function() {
                            o(l.takeRecords()), a(!0)
                        }), d(function() {
                            r = 0, a = m(e, n = _("CLS", 0), B, t.reportAllChanges), g(function() {
                                return a()
                            })
                        }), setTimeout(a, 0))
                    }))
                },
                H = {
                    passive: !0,
                    capture: !0
                },
                N = new Date,
                P = function(e, t) {
                    n || (n = t, r = e, i = new Date, E(removeEventListener), C())
                },
                C = function() {
                    if (r >= 0 && r < i - N) {
                        var e = {
                            entryType: "first-input",
                            name: n.type,
                            target: n.target,
                            cancelable: n.cancelable,
                            startTime: n.timeStamp,
                            processingStart: n.timeStamp + r
                        };
                        o.forEach(function(t) {
                            t(e)
                        }), o = []
                    }
                },
                A = function(e) {
                    if (e.cancelable) {
                        var t, a, n, r = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                        "pointerdown" == e.type ? (t = function() {
                            P(r, e), n()
                        }, a = function() {
                            n()
                        }, n = function() {
                            removeEventListener("pointerup", t, H), removeEventListener("pointercancel", a, H)
                        }, addEventListener("pointerup", t, H), addEventListener("pointercancel", a, H)) : P(r, e)
                    }
                },
                E = function(e) {
                    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(t) {
                        return e(t, A, H)
                    })
                },
                M = 0,
                j = 1 / 0,
                O = 0,
                z = function(e) {
                    e.forEach(function(e) {
                        e.interactionId && (j = Math.min(j, e.interactionId), M = (O = Math.max(O, e.interactionId)) ? (O - j) / 7 + 1 : 0)
                    })
                },
                R = function() {
                    return l ? M : performance.interactionCount || 0
                },
                W = function() {
                    "interactionCount" in performance || l || (l = f("event", z, {
                        type: "event",
                        buffered: !0,
                        durationThreshold: 0
                    }))
                },
                I = [200, 500],
                F = 0,
                U = function() {
                    return R() - F
                },
                $ = [],
                X = {},
                q = function(e) {
                    var t = $[$.length - 1],
                        a = X[e.interactionId];
                    if (a || $.length < 10 || e.duration > t.latency) {
                        if (a) a.entries.push(e), a.latency = Math.max(a.latency, e.duration);
                        else {
                            var n = {
                                id: e.interactionId,
                                latency: e.duration,
                                entries: [e]
                            };
                            X[n.id] = n, $.push(n)
                        }
                        $.sort(function(e, t) {
                            return t.latency - e.latency
                        }), $.splice(10).forEach(function(e) {
                            delete X[e.id]
                        })
                    }
                },
                V = function(e, t) {
                    t = t || {}, L(function() {
                        W();
                        var a, n, r = _("INP"),
                            i = function(e) {
                                e.forEach(function(e) {
                                    e.interactionId && q(e), "first-input" === e.entryType && ($.some(function(t) {
                                        return t.entries.some(function(t) {
                                            return e.duration === t.duration && e.startTime === t.startTime
                                        })
                                    }) || q(e))
                                });
                                var t, a = (t = Math.min($.length - 1, Math.floor(U() / 50)), $[t]);
                                a && a.latency !== r.value && (r.value = a.latency, r.entries = a.entries, n())
                            },
                            o = f("event", i, {
                                durationThreshold: null != (a = t.durationThreshold) ? a : 40
                            });
                        n = m(e, r, I, t.reportAllChanges), o && ("PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && o.observe({
                            type: "first-input",
                            buffered: !0
                        }), p(function() {
                            i(o.takeRecords()), r.value < 0 && U() > 0 && (r.value = 0, r.entries = []), n(!0)
                        }), d(function() {
                            $ = [], F = R(), n = m(e, r = _("INP"), I, t.reportAllChanges)
                        }))
                    })
                },
                G = [2500, 4e3],
                K = {},
                Y = function(e, t) {
                    t = t || {}, L(function() {
                        var a, n = S(),
                            r = _("LCP"),
                            i = function(e) {
                                var t = e[e.length - 1];
                                t && t.startTime < n.firstHiddenTime && (r.value = Math.max(t.startTime - c(), 0), r.entries = [t], a())
                            },
                            o = f("largest-contentful-paint", i);
                        if (o) {
                            a = m(e, r, G, t.reportAllChanges);
                            var l = h(function() {
                                K[r.id] || (i(o.takeRecords()), o.disconnect(), K[r.id] = !0, a(!0))
                            });
                            ["keydown", "click"].forEach(function(e) {
                                addEventListener(e, function() {
                                    return setTimeout(l, 0)
                                }, !0)
                            }), p(l), d(function(n) {
                                a = m(e, r = _("LCP"), G, t.reportAllChanges), g(function() {
                                    r.value = performance.now() - n.timeStamp, K[r.id] = !0, a(!0)
                                })
                            })
                        }
                    })
                },
                J = [800, 1800],
                Q = function e(t) {
                    document.prerendering ? L(function() {
                        return e(t)
                    }) : "complete" !== document.readyState ? addEventListener("load", function() {
                        return e(t)
                    }, !0) : setTimeout(t, 0)
                },
                Z = function(e, t) {
                    t = t || {};
                    var a = _("TTFB"),
                        n = m(e, a, J, t.reportAllChanges);
                    Q(function() {
                        var r = u();
                        if (r) {
                            var i = r.responseStart;
                            if (i <= 0 || i > performance.now()) return;
                            a.value = Math.max(i - c(), 0), a.entries = [r], n(!0), d(function() {
                                (n = m(e, a = _("TTFB", 0), J, t.reportAllChanges))(!0)
                            })
                        }
                    })
                }
        },
        8399: (e, t, a) => {
            "use strict";
            var n = a(21462),
                r = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                i = n.useSyncExternalStore,
                o = n.useRef,
                l = n.useEffect,
                s = n.useMemo,
                d = n.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, a, n, u) {
                var c = o(null);
                if (null === c.current) {
                    var _ = {
                        hasValue: !1,
                        value: null
                    };
                    c.current = _
                } else _ = c.current;
                var f = i(e, (c = s(function() {
                    function e(e) {
                        if (!l) {
                            if (l = !0, i = e, e = n(e), void 0 !== u && _.hasValue) {
                                var t = _.value;
                                if (u(t, e)) return o = t
                            }
                            return o = e
                        }
                        if (t = o, r(i, e)) return t;
                        var a = n(e);
                        return void 0 !== u && u(t, a) ? (i = e, t) : (i = e, o = a)
                    }
                    var i, o, l = !1,
                        s = void 0 === a ? null : a;
                    return [function() {
                        return e(t())
                    }, null === s ? void 0 : function() {
                        return e(s())
                    }]
                }, [t, a, n, u]))[0], c[1]);
                return l(function() {
                    _.hasValue = !0, _.value = f
                }, [f]), d(f), f
            }
        },
        11222: (e, t, a) => {
            "use strict";
            a.d(t, {
                Q: () => _
            });
            var n, r = a(13897),
                i = a(23798),
                o = a(71623),
                l = a(30149),
                s = a(21462);

            function d() {
                return (d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a)({}).hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            var u = function(e) {
                return s.createElement("svg", d({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 40,
                    height: 20,
                    fill: "none"
                }, e), n || (n = s.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M12.23 15.014c-.383-.605-.697-.926-1.254-.926-.558 0-.872.32-1.255.926L8.05 17.686c-.627 1.032-1.15 1.745-2.37 1.745s-1.777-.499-2.369-1.888a42.3 42.3 0 0 1-2.195-6.554C.348 7.89 0 5.967 0 4.4s.488-2.493 2.16-2.813c2.3-.428 5.401-.677 8.816-.677 3.414 0 6.515.25 8.815.677 1.672.32 2.16 1.246 2.16 2.814 0 1.567-.348 3.49-1.115 6.59a42.3 42.3 0 0 1-2.195 6.553c-.592 1.39-1.15 1.888-2.37 1.888-1.219 0-1.741-.713-2.369-1.745zm26.516 2.5c-1.185 1.282-3.415 2.208-6.342 2.208-5.888 0-9.373-4.096-9.373-9.474 0-5.77 4.007-9.19 9.199-9.19 4.634 0 7.7 2.458 7.7 5.77 0 3.135-2.613 5.165-5.575 5.165-1.602 0-2.787-.32-3.588-.961-.314-.25-.488-.214-.488.071 0 1.175.418 2.173 1.184 2.956.628.641 1.812 1.069 2.927 1.069 1.15 0 2.16-.25 3.066-.713s1.673-.32 2.126.428c.523.855-.21 1.959-.836 2.671",
                    clipRule: "evenodd"
                })))
            };
            (0, a(85752).$)('.styles_module_logo__0ad29c84{color:#fff;position:relative;z-index:2}.styles_module_logo__0ad29c84.styles_module_light__0ad29c84{color:#000}.styles_module_logoLink__0ad29c84.styles_module_dark__0ad29c84:after{box-shadow:0 2px 12px 9px rgba(0,0,0,.3);content:"";display:block;height:0;left:25%;position:absolute;top:50%;width:50%;z-index:1}');
            var c = {
                logo: "styles_module_logo__0ad29c84",
                light: "styles_module_light__0ad29c84",
                logoLink: "styles_module_logoLink__0ad29c84",
                dark: "styles_module_dark__0ad29c84"
            };
            let _ = e => {
                var {
                    mode: t = "light",
                    className: a
                } = e, n = (0, r.Tt)(e, ["mode", "className"]);
                return (0, i.jsx)(l.N, Object.assign({
                    className: (0, o.A)(c.logoLink, c[t], a),
                    appearance: "utility",
                    href: "https://wetransfer.com/",
                    title: "WeTransfer.com"
                }, n, {
                    children: (0, i.jsx)(u, {
                        className: (0, o.A)(c.logo, c[t])
                    })
                }))
            }
        },
        11417: (e, t, a) => {
            "use strict";
            a.d(t, {
                E: () => s
            });
            var n = a(13897),
                r = a(23798),
                i = a(71623),
                o = a(21462);
            (0, a(85752).$)(".styles_module_wtBadge__e5ac0237{align-items:center;border-radius:8px;color:hsla(0,0%,100%,.95);display:inline-flex;font-size:inherit;font-size:12px;justify-content:center;padding:.25rem .375rem .3125rem}.styles_module_wtBadge_Small__e5ac0237,.styles_module_wtBadge__e5ac0237{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-weight:700;line-height:1.2}.styles_module_wtBadge_Small__e5ac0237{border-radius:6px;font-size:inherit;font-size:10px;padding:.1875rem .375rem .25rem}.styles_module_wtBadge_BlueDark__e5ac0237{background:#a1beff;color:rgba(0,0,0,.95)}.styles_module_wtBadge_BlueLight__e5ac0237{background:#3767ea}.styles_module_wtBadge_GreenDark__e5ac0237{background:#4fb961;color:rgba(0,0,0,.95)}.styles_module_wtBadge_GreenLight__e5ac0237{background:#3a9249}.styles_module_wtBadge_RedDark__e5ac0237{background:#ff7350;color:rgba(0,0,0,.95)}.styles_module_wtBadge_RedLight__e5ac0237{background:#d33300}.styles_module_wtBadge_YellowDark__e5ac0237,.styles_module_wtBadge_YellowLight__e5ac0237{background:#fbc738;color:rgba(0,0,0,.95)}.styles_module_wtBadge_DarkenDark__e5ac0237{background:rgba(0,0,0,.4);color:hsla(0,0%,100%,.95)}.styles_module_wtBadge_DarkenLight__e5ac0237{background:rgba(0,0,0,.05);color:rgba(0,0,0,.95)}.styles_module_wtBadge_LightenDark__e5ac0237{background:hsla(0,0%,100%,.15);color:hsla(0,0%,100%,.95)}.styles_module_wtBadge_LightenLight__e5ac0237,.styles_module_wtBadge_NeutralDark__e5ac0237{background:hsla(0,0%,100%,.8);color:rgba(0,0,0,.95)}.styles_module_wtBadge_NeutralLight__e5ac0237{background:rgba(0,0,0,.6)}.styles_module_wtBadge_HighContrastDark__e5ac0237{background:#f9f9f9;color:rgba(0,0,0,.95)}.styles_module_wtBadge_HighContrastLight__e5ac0237{background:#161616}.styles_module_wtBadge_UpsellLight__e5ac0237{background:#8e21cc;color:hsla(0,0%,100%,.95)}.styles_module_wtBadge_UpsellDark__e5ac0237{background:#d7a7ff;color:rgba(0,0,0,.95)}.styles_module_wtBadge_BlueSubtleDark__e5ac0237,.styles_module_wtBadge_BlueSubtleLight__e5ac0237{background:#f5f8ff;color:#3767ea}.styles_module_wtBadge_UpsellSubtleDark__e5ac0237,.styles_module_wtBadge_UpsellSubtleLight__e5ac0237{background:#faf6ff;color:#8e21cc}");
            var l = {
                "wt-badge": "styles_module_wtBadge__e5ac0237",
                "wt-badge--small": "styles_module_wtBadge_Small__e5ac0237",
                "wt-badge--blue-dark": "styles_module_wtBadge_BlueDark__e5ac0237",
                "wt-badge--blue-light": "styles_module_wtBadge_BlueLight__e5ac0237",
                "wt-badge--green-dark": "styles_module_wtBadge_GreenDark__e5ac0237",
                "wt-badge--green-light": "styles_module_wtBadge_GreenLight__e5ac0237",
                "wt-badge--red-dark": "styles_module_wtBadge_RedDark__e5ac0237",
                "wt-badge--red-light": "styles_module_wtBadge_RedLight__e5ac0237",
                "wt-badge--yellow-dark": "styles_module_wtBadge_YellowDark__e5ac0237",
                "wt-badge--yellow-light": "styles_module_wtBadge_YellowLight__e5ac0237",
                "wt-badge--darken-dark": "styles_module_wtBadge_DarkenDark__e5ac0237",
                "wt-badge--darken-light": "styles_module_wtBadge_DarkenLight__e5ac0237",
                "wt-badge--lighten-dark": "styles_module_wtBadge_LightenDark__e5ac0237",
                "wt-badge--lighten-light": "styles_module_wtBadge_LightenLight__e5ac0237",
                "wt-badge--neutral-dark": "styles_module_wtBadge_NeutralDark__e5ac0237",
                "wt-badge--neutral-light": "styles_module_wtBadge_NeutralLight__e5ac0237",
                "wt-badge--high-contrast-dark": "styles_module_wtBadge_HighContrastDark__e5ac0237",
                "wt-badge--high-contrast-light": "styles_module_wtBadge_HighContrastLight__e5ac0237",
                "wt-badge--upsell-light": "styles_module_wtBadge_UpsellLight__e5ac0237",
                "wt-badge--upsell-dark": "styles_module_wtBadge_UpsellDark__e5ac0237",
                "wt-badge--blue-subtle-dark": "styles_module_wtBadge_BlueSubtleDark__e5ac0237",
                "wt-badge--blue-subtle-light": "styles_module_wtBadge_BlueSubtleLight__e5ac0237",
                "wt-badge--upsell-subtle-dark": "styles_module_wtBadge_UpsellSubtleDark__e5ac0237",
                "wt-badge--upsell-subtle-light": "styles_module_wtBadge_UpsellSubtleLight__e5ac0237"
            };
            let s = (0, o.forwardRef)((e, t) => {
                var {
                    appearance: a = "blue",
                    className: o,
                    children: s,
                    mode: d = "light",
                    size: u = "medium"
                } = e, c = (0, n.Tt)(e, ["appearance", "className", "children", "mode", "size"]);
                return (0, r.jsx)("span", Object.assign({}, c, {
                    "aria-hidden": !s,
                    className: (0, i.A)(l["wt-badge"], l[`wt-badge--${a}-${d}`], l[`wt-badge--${u}`], o),
                    ref: t,
                    children: s
                }))
            });
            s.displayName = "Badge"
        },
        11985: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => l
            });
            var n = a(61935),
                r = a(69267),
                i = a(56993);

            function o(e, t) {
                var a = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
                return a < 0 ? -1 : a > 0 ? 1 : a
            }

            function l(e, t) {
                (0, i.A)(2, arguments);
                var a = (0, n.A)(e),
                    l = (0, n.A)(t),
                    s = o(a, l),
                    d = Math.abs((0, r.A)(a, l));
                a.setDate(a.getDate() - s * d);
                var u = Number(o(a, l) === -s),
                    c = s * (d - u);
                return 0 === c ? 0 : c
            }
        },
        12096: (e, t, a) => {
            var n = a(47225),
                r = a(68185);
            e.exports = function(e, t) {
                return e && n(t, r(t), e)
            }
        },
        12163: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => i
            });
            var n = a(61935),
                r = a(56993);

            function i(e) {
                (0, r.A)(1, arguments);
                var t = (0, n.A)(e);
                return t.setHours(0, 0, 0, 0), t
            }
        },
        14225: (e, t, a) => {
            var n = a(65439);
            e.exports = function(e, t) {
                var a = t ? n(e.buffer) : e.buffer;
                return new e.constructor(a, e.byteOffset, e.byteLength)
            }
        },
        17747: e => {
            e.exports = function(e) {
                return e != e
            }
        },
        18629: (e, t, a) => {
            var n = a(59099);
            e.exports = function(e) {
                return n(e, 5)
            }
        },
        18783: (e, t, a) => {
            var n = a(77882),
                r = a(867),
                i = a(50482);
            e.exports = function(e) {
                return "string" == typeof e || !r(e) && i(e) && "[object String]" == n(e)
            }
        },
        19361: (e, t, a) => {
            var n = a(90164),
                r = a(29569),
                i = a(55922),
                o = a(43279);
            e.exports = Object.getOwnPropertySymbols ? function(e) {
                for (var t = []; e;) n(t, i(e)), e = r(e);
                return t
            } : o
        },
        19806: (e, t, a) => {
            var n = a(32446),
                r = a(63213),
                i = a(519),
                o = i && i.isSet;
            e.exports = o ? r(o) : n
        },
        19954: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => R
            });
            var n = a(48231),
                r = a(56993),
                i = a(61935),
                o = a(55189),
                l = a(70028);

            function s(e) {
                (0, r.A)(1, arguments);
                var t = (0, i.A)(e),
                    a = t.getUTCDay();
                return t.setUTCDate(t.getUTCDate() - (7 * (a < 1) + a - 1)), t.setUTCHours(0, 0, 0, 0), t
            }

            function d(e) {
                (0, r.A)(1, arguments);
                var t = (0, i.A)(e),
                    a = t.getUTCFullYear(),
                    n = new Date(0);
                n.setUTCFullYear(a + 1, 0, 4), n.setUTCHours(0, 0, 0, 0);
                var o = s(n),
                    l = new Date(0);
                l.setUTCFullYear(a, 0, 4), l.setUTCHours(0, 0, 0, 0);
                var d = s(l);
                return t.getTime() >= o.getTime() ? a + 1 : t.getTime() >= d.getTime() ? a : a - 1
            }
            var u = {};

            function c(e, t) {
                (0, r.A)(1, arguments);
                var a, n, o, s, d, c, _, f, m = (0, l.A)(null != (a = null != (n = null != (o = null != (s = null == t ? void 0 : t.weekStartsOn) ? s : null == t || null == (d = t.locale) || null == (c = d.options) ? void 0 : c.weekStartsOn) ? o : u.weekStartsOn) ? n : null == (_ = u.locale) || null == (f = _.options) ? void 0 : f.weekStartsOn) ? a : 0);
                if (!(m >= 0 && m <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
                var g = (0, i.A)(e),
                    p = g.getUTCDay();
                return g.setUTCDate(g.getUTCDate() - (7 * (p < m) + p - m)), g.setUTCHours(0, 0, 0, 0), g
            }

            function _(e, t) {
                (0, r.A)(1, arguments);
                var a, n, o, s, d, _, f, m, g = (0, i.A)(e),
                    p = g.getUTCFullYear(),
                    h = (0, l.A)(null != (a = null != (n = null != (o = null != (s = null == t ? void 0 : t.firstWeekContainsDate) ? s : null == t || null == (d = t.locale) || null == (_ = d.options) ? void 0 : _.firstWeekContainsDate) ? o : u.firstWeekContainsDate) ? n : null == (f = u.locale) || null == (m = f.options) ? void 0 : m.firstWeekContainsDate) ? a : 1);
                if (!(h >= 1 && h <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
                var y = new Date(0);
                y.setUTCFullYear(p + 1, 0, h), y.setUTCHours(0, 0, 0, 0);
                var w = c(y, t),
                    b = new Date(0);
                b.setUTCFullYear(p, 0, h), b.setUTCHours(0, 0, 0, 0);
                var v = c(b, t);
                return g.getTime() >= w.getTime() ? p + 1 : g.getTime() >= v.getTime() ? p : p - 1
            }

            function f(e, t) {
                for (var a = Math.abs(e).toString(); a.length < t;) a = "0" + a;
                return (e < 0 ? "-" : "") + a
            }
            let m = {
                y: function(e, t) {
                    var a = e.getUTCFullYear(),
                        n = a > 0 ? a : 1 - a;
                    return f("yy" === t ? n % 100 : n, t.length)
                },
                M: function(e, t) {
                    var a = e.getUTCMonth();
                    return "M" === t ? String(a + 1) : f(a + 1, 2)
                },
                d: function(e, t) {
                    return f(e.getUTCDate(), t.length)
                },
                h: function(e, t) {
                    return f(e.getUTCHours() % 12 || 12, t.length)
                },
                H: function(e, t) {
                    return f(e.getUTCHours(), t.length)
                },
                m: function(e, t) {
                    return f(e.getUTCMinutes(), t.length)
                },
                s: function(e, t) {
                    return f(e.getUTCSeconds(), t.length)
                },
                S: function(e, t) {
                    var a = t.length;
                    return f(Math.floor(e.getUTCMilliseconds() * Math.pow(10, a - 3)), t.length)
                }
            };
            var g = {
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night"
            };

            function p(e, t) {
                var a = e > 0 ? "-" : "+",
                    n = Math.abs(e),
                    r = Math.floor(n / 60),
                    i = n % 60;
                return 0 === i ? a + String(r) : a + String(r) + (t || "") + f(i, 2)
            }

            function h(e, t) {
                return e % 60 == 0 ? (e > 0 ? "-" : "+") + f(Math.abs(e) / 60, 2) : y(e, t)
            }

            function y(e, t) {
                var a = Math.abs(e);
                return (e > 0 ? "-" : "+") + f(Math.floor(a / 60), 2) + (t || "") + f(a % 60, 2)
            }
            let w = {
                G: function(e, t, a) {
                    var n = +(e.getUTCFullYear() > 0);
                    switch (t) {
                        case "G":
                        case "GG":
                        case "GGG":
                            return a.era(n, {
                                width: "abbreviated"
                            });
                        case "GGGGG":
                            return a.era(n, {
                                width: "narrow"
                            });
                        default:
                            return a.era(n, {
                                width: "wide"
                            })
                    }
                },
                y: function(e, t, a) {
                    if ("yo" === t) {
                        var n = e.getUTCFullYear();
                        return a.ordinalNumber(n > 0 ? n : 1 - n, {
                            unit: "year"
                        })
                    }
                    return m.y(e, t)
                },
                Y: function(e, t, a, n) {
                    var r = _(e, n),
                        i = r > 0 ? r : 1 - r;
                    return "YY" === t ? f(i % 100, 2) : "Yo" === t ? a.ordinalNumber(i, {
                        unit: "year"
                    }) : f(i, t.length)
                },
                R: function(e, t) {
                    return f(d(e), t.length)
                },
                u: function(e, t) {
                    return f(e.getUTCFullYear(), t.length)
                },
                Q: function(e, t, a) {
                    var n = Math.ceil((e.getUTCMonth() + 1) / 3);
                    switch (t) {
                        case "Q":
                            return String(n);
                        case "QQ":
                            return f(n, 2);
                        case "Qo":
                            return a.ordinalNumber(n, {
                                unit: "quarter"
                            });
                        case "QQQ":
                            return a.quarter(n, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "QQQQQ":
                            return a.quarter(n, {
                                width: "narrow",
                                context: "formatting"
                            });
                        default:
                            return a.quarter(n, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                q: function(e, t, a) {
                    var n = Math.ceil((e.getUTCMonth() + 1) / 3);
                    switch (t) {
                        case "q":
                            return String(n);
                        case "qq":
                            return f(n, 2);
                        case "qo":
                            return a.ordinalNumber(n, {
                                unit: "quarter"
                            });
                        case "qqq":
                            return a.quarter(n, {
                                width: "abbreviated",
                                context: "standalone"
                            });
                        case "qqqqq":
                            return a.quarter(n, {
                                width: "narrow",
                                context: "standalone"
                            });
                        default:
                            return a.quarter(n, {
                                width: "wide",
                                context: "standalone"
                            })
                    }
                },
                M: function(e, t, a) {
                    var n = e.getUTCMonth();
                    switch (t) {
                        case "M":
                        case "MM":
                            return m.M(e, t);
                        case "Mo":
                            return a.ordinalNumber(n + 1, {
                                unit: "month"
                            });
                        case "MMM":
                            return a.month(n, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "MMMMM":
                            return a.month(n, {
                                width: "narrow",
                                context: "formatting"
                            });
                        default:
                            return a.month(n, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                L: function(e, t, a) {
                    var n = e.getUTCMonth();
                    switch (t) {
                        case "L":
                            return String(n + 1);
                        case "LL":
                            return f(n + 1, 2);
                        case "Lo":
                            return a.ordinalNumber(n + 1, {
                                unit: "month"
                            });
                        case "LLL":
                            return a.month(n, {
                                width: "abbreviated",
                                context: "standalone"
                            });
                        case "LLLLL":
                            return a.month(n, {
                                width: "narrow",
                                context: "standalone"
                            });
                        default:
                            return a.month(n, {
                                width: "wide",
                                context: "standalone"
                            })
                    }
                },
                w: function(e, t, a, n) {
                    var o = function(e, t) {
                        (0, r.A)(1, arguments);
                        var a = (0, i.A)(e);
                        return Math.round((c(a, t).getTime() - (function(e, t) {
                            (0, r.A)(1, arguments);
                            var a, n, i, o, s, d, f, m, g = (0, l.A)(null != (a = null != (n = null != (i = null != (o = null == t ? void 0 : t.firstWeekContainsDate) ? o : null == t || null == (s = t.locale) || null == (d = s.options) ? void 0 : d.firstWeekContainsDate) ? i : u.firstWeekContainsDate) ? n : null == (f = u.locale) || null == (m = f.options) ? void 0 : m.firstWeekContainsDate) ? a : 1),
                                p = _(e, t),
                                h = new Date(0);
                            return h.setUTCFullYear(p, 0, g), h.setUTCHours(0, 0, 0, 0), c(h, t)
                        })(a, t).getTime()) / 6048e5) + 1
                    }(e, n);
                    return "wo" === t ? a.ordinalNumber(o, {
                        unit: "week"
                    }) : f(o, t.length)
                },
                I: function(e, t, a) {
                    var n = function(e) {
                        (0, r.A)(1, arguments);
                        var t = (0, i.A)(e);
                        return Math.round((s(t).getTime() - (function(e) {
                            (0, r.A)(1, arguments);
                            var t = d(e),
                                a = new Date(0);
                            return a.setUTCFullYear(t, 0, 4), a.setUTCHours(0, 0, 0, 0), s(a)
                        })(t).getTime()) / 6048e5) + 1
                    }(e);
                    return "Io" === t ? a.ordinalNumber(n, {
                        unit: "week"
                    }) : f(n, t.length)
                },
                d: function(e, t, a) {
                    return "do" === t ? a.ordinalNumber(e.getUTCDate(), {
                        unit: "date"
                    }) : m.d(e, t)
                },
                D: function(e, t, a) {
                    var n = function(e) {
                        (0, r.A)(1, arguments);
                        var t = (0, i.A)(e),
                            a = t.getTime();
                        return t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0), Math.floor((a - t.getTime()) / 864e5) + 1
                    }(e);
                    return "Do" === t ? a.ordinalNumber(n, {
                        unit: "dayOfYear"
                    }) : f(n, t.length)
                },
                E: function(e, t, a) {
                    var n = e.getUTCDay();
                    switch (t) {
                        case "E":
                        case "EE":
                        case "EEE":
                            return a.day(n, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "EEEEE":
                            return a.day(n, {
                                width: "narrow",
                                context: "formatting"
                            });
                        case "EEEEEE":
                            return a.day(n, {
                                width: "short",
                                context: "formatting"
                            });
                        default:
                            return a.day(n, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                e: function(e, t, a, n) {
                    var r = e.getUTCDay(),
                        i = (r - n.weekStartsOn + 8) % 7 || 7;
                    switch (t) {
                        case "e":
                            return String(i);
                        case "ee":
                            return f(i, 2);
                        case "eo":
                            return a.ordinalNumber(i, {
                                unit: "day"
                            });
                        case "eee":
                            return a.day(r, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "eeeee":
                            return a.day(r, {
                                width: "narrow",
                                context: "formatting"
                            });
                        case "eeeeee":
                            return a.day(r, {
                                width: "short",
                                context: "formatting"
                            });
                        default:
                            return a.day(r, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                c: function(e, t, a, n) {
                    var r = e.getUTCDay(),
                        i = (r - n.weekStartsOn + 8) % 7 || 7;
                    switch (t) {
                        case "c":
                            return String(i);
                        case "cc":
                            return f(i, t.length);
                        case "co":
                            return a.ordinalNumber(i, {
                                unit: "day"
                            });
                        case "ccc":
                            return a.day(r, {
                                width: "abbreviated",
                                context: "standalone"
                            });
                        case "ccccc":
                            return a.day(r, {
                                width: "narrow",
                                context: "standalone"
                            });
                        case "cccccc":
                            return a.day(r, {
                                width: "short",
                                context: "standalone"
                            });
                        default:
                            return a.day(r, {
                                width: "wide",
                                context: "standalone"
                            })
                    }
                },
                i: function(e, t, a) {
                    var n = e.getUTCDay(),
                        r = 0 === n ? 7 : n;
                    switch (t) {
                        case "i":
                            return String(r);
                        case "ii":
                            return f(r, t.length);
                        case "io":
                            return a.ordinalNumber(r, {
                                unit: "day"
                            });
                        case "iii":
                            return a.day(n, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "iiiii":
                            return a.day(n, {
                                width: "narrow",
                                context: "formatting"
                            });
                        case "iiiiii":
                            return a.day(n, {
                                width: "short",
                                context: "formatting"
                            });
                        default:
                            return a.day(n, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                a: function(e, t, a) {
                    var n = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
                    switch (t) {
                        case "a":
                        case "aa":
                            return a.dayPeriod(n, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "aaa":
                            return a.dayPeriod(n, {
                                width: "abbreviated",
                                context: "formatting"
                            }).toLowerCase();
                        case "aaaaa":
                            return a.dayPeriod(n, {
                                width: "narrow",
                                context: "formatting"
                            });
                        default:
                            return a.dayPeriod(n, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                b: function(e, t, a) {
                    var n, r = e.getUTCHours();
                    switch (n = 12 === r ? g.noon : 0 === r ? g.midnight : r / 12 >= 1 ? "pm" : "am", t) {
                        case "b":
                        case "bb":
                            return a.dayPeriod(n, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "bbb":
                            return a.dayPeriod(n, {
                                width: "abbreviated",
                                context: "formatting"
                            }).toLowerCase();
                        case "bbbbb":
                            return a.dayPeriod(n, {
                                width: "narrow",
                                context: "formatting"
                            });
                        default:
                            return a.dayPeriod(n, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                B: function(e, t, a) {
                    var n, r = e.getUTCHours();
                    switch (n = r >= 17 ? g.evening : r >= 12 ? g.afternoon : r >= 4 ? g.morning : g.night, t) {
                        case "B":
                        case "BB":
                        case "BBB":
                            return a.dayPeriod(n, {
                                width: "abbreviated",
                                context: "formatting"
                            });
                        case "BBBBB":
                            return a.dayPeriod(n, {
                                width: "narrow",
                                context: "formatting"
                            });
                        default:
                            return a.dayPeriod(n, {
                                width: "wide",
                                context: "formatting"
                            })
                    }
                },
                h: function(e, t, a) {
                    if ("ho" === t) {
                        var n = e.getUTCHours() % 12;
                        return 0 === n && (n = 12), a.ordinalNumber(n, {
                            unit: "hour"
                        })
                    }
                    return m.h(e, t)
                },
                H: function(e, t, a) {
                    return "Ho" === t ? a.ordinalNumber(e.getUTCHours(), {
                        unit: "hour"
                    }) : m.H(e, t)
                },
                K: function(e, t, a) {
                    var n = e.getUTCHours() % 12;
                    return "Ko" === t ? a.ordinalNumber(n, {
                        unit: "hour"
                    }) : f(n, t.length)
                },
                k: function(e, t, a) {
                    var n = e.getUTCHours();
                    return (0 === n && (n = 24), "ko" === t) ? a.ordinalNumber(n, {
                        unit: "hour"
                    }) : f(n, t.length)
                },
                m: function(e, t, a) {
                    return "mo" === t ? a.ordinalNumber(e.getUTCMinutes(), {
                        unit: "minute"
                    }) : m.m(e, t)
                },
                s: function(e, t, a) {
                    return "so" === t ? a.ordinalNumber(e.getUTCSeconds(), {
                        unit: "second"
                    }) : m.s(e, t)
                },
                S: function(e, t) {
                    return m.S(e, t)
                },
                X: function(e, t, a, n) {
                    var r = (n._originalDate || e).getTimezoneOffset();
                    if (0 === r) return "Z";
                    switch (t) {
                        case "X":
                            return h(r);
                        case "XXXX":
                        case "XX":
                            return y(r);
                        default:
                            return y(r, ":")
                    }
                },
                x: function(e, t, a, n) {
                    var r = (n._originalDate || e).getTimezoneOffset();
                    switch (t) {
                        case "x":
                            return h(r);
                        case "xxxx":
                        case "xx":
                            return y(r);
                        default:
                            return y(r, ":")
                    }
                },
                O: function(e, t, a, n) {
                    var r = (n._originalDate || e).getTimezoneOffset();
                    switch (t) {
                        case "O":
                        case "OO":
                        case "OOO":
                            return "GMT" + p(r, ":");
                        default:
                            return "GMT" + y(r, ":")
                    }
                },
                z: function(e, t, a, n) {
                    var r = (n._originalDate || e).getTimezoneOffset();
                    switch (t) {
                        case "z":
                        case "zz":
                        case "zzz":
                            return "GMT" + p(r, ":");
                        default:
                            return "GMT" + y(r, ":")
                    }
                },
                t: function(e, t, a, n) {
                    return f(Math.floor((n._originalDate || e).getTime() / 1e3), t.length)
                },
                T: function(e, t, a, n) {
                    return f((n._originalDate || e).getTime(), t.length)
                }
            };
            var b = function(e, t) {
                    switch (e) {
                        case "P":
                            return t.date({
                                width: "short"
                            });
                        case "PP":
                            return t.date({
                                width: "medium"
                            });
                        case "PPP":
                            return t.date({
                                width: "long"
                            });
                        default:
                            return t.date({
                                width: "full"
                            })
                    }
                },
                v = function(e, t) {
                    switch (e) {
                        case "p":
                            return t.time({
                                width: "short"
                            });
                        case "pp":
                            return t.time({
                                width: "medium"
                            });
                        case "ppp":
                            return t.time({
                                width: "long"
                            });
                        default:
                            return t.time({
                                width: "full"
                            })
                    }
                };
            let x = {
                p: v,
                P: function(e, t) {
                    var a, n = e.match(/(P+)(p+)?/) || [],
                        r = n[1],
                        i = n[2];
                    if (!i) return b(e, t);
                    switch (r) {
                        case "P":
                            a = t.dateTime({
                                width: "short"
                            });
                            break;
                        case "PP":
                            a = t.dateTime({
                                width: "medium"
                            });
                            break;
                        case "PPP":
                            a = t.dateTime({
                                width: "long"
                            });
                            break;
                        default:
                            a = t.dateTime({
                                width: "full"
                            })
                    }
                    return a.replace("{{date}}", b(r, t)).replace("{{time}}", v(i, t))
                }
            };
            var S = a(61624),
                L = ["D", "DD"],
                k = ["YY", "YYYY"];

            function T(e, t, a) {
                if ("YYYY" === e) throw RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
                if ("YY" === e) throw RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
                if ("D" === e) throw RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
                if ("DD" === e) throw RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))
            }
            var B = {
                lessThanXSeconds: {
                    one: "less than a second",
                    other: "less than {{count}} seconds"
                },
                xSeconds: {
                    one: "1 second",
                    other: "{{count}} seconds"
                },
                halfAMinute: "half a minute",
                lessThanXMinutes: {
                    one: "less than a minute",
                    other: "less than {{count}} minutes"
                },
                xMinutes: {
                    one: "1 minute",
                    other: "{{count}} minutes"
                },
                aboutXHours: {
                    one: "about 1 hour",
                    other: "about {{count}} hours"
                },
                xHours: {
                    one: "1 hour",
                    other: "{{count}} hours"
                },
                xDays: {
                    one: "1 day",
                    other: "{{count}} days"
                },
                aboutXWeeks: {
                    one: "about 1 week",
                    other: "about {{count}} weeks"
                },
                xWeeks: {
                    one: "1 week",
                    other: "{{count}} weeks"
                },
                aboutXMonths: {
                    one: "about 1 month",
                    other: "about {{count}} months"
                },
                xMonths: {
                    one: "1 month",
                    other: "{{count}} months"
                },
                aboutXYears: {
                    one: "about 1 year",
                    other: "about {{count}} years"
                },
                xYears: {
                    one: "1 year",
                    other: "{{count}} years"
                },
                overXYears: {
                    one: "over 1 year",
                    other: "over {{count}} years"
                },
                almostXYears: {
                    one: "almost 1 year",
                    other: "almost {{count}} years"
                }
            };

            function D(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = t.width ? String(t.width) : e.defaultWidth;
                    return e.formats[a] || e.formats[e.defaultWidth]
                }
            }
            var H = {
                    date: D({
                        formats: {
                            full: "EEEE, MMMM do, y",
                            long: "MMMM do, y",
                            medium: "MMM d, y",
                            short: "MM/dd/yyyy"
                        },
                        defaultWidth: "full"
                    }),
                    time: D({
                        formats: {
                            full: "h:mm:ss a zzzz",
                            long: "h:mm:ss a z",
                            medium: "h:mm:ss a",
                            short: "h:mm a"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: D({
                        formats: {
                            full: "{{date}} 'at' {{time}}",
                            long: "{{date}} 'at' {{time}}",
                            medium: "{{date}}, {{time}}",
                            short: "{{date}}, {{time}}"
                        },
                        defaultWidth: "full"
                    })
                },
                N = {
                    lastWeek: "'last' eeee 'at' p",
                    yesterday: "'yesterday at' p",
                    today: "'today at' p",
                    tomorrow: "'tomorrow at' p",
                    nextWeek: "eeee 'at' p",
                    other: "P"
                };

            function P(e) {
                return function(t, a) {
                    var n;
                    if ("formatting" === (null != a && a.context ? String(a.context) : "standalone") && e.formattingValues) {
                        var r = e.defaultFormattingWidth || e.defaultWidth,
                            i = null != a && a.width ? String(a.width) : r;
                        n = e.formattingValues[i] || e.formattingValues[r]
                    } else {
                        var o = e.defaultWidth,
                            l = null != a && a.width ? String(a.width) : e.defaultWidth;
                        n = e.values[l] || e.values[o]
                    }
                    return n[e.argumentCallback ? e.argumentCallback(t) : t]
                }
            }

            function C(e) {
                return function(t) {
                    var a, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = n.width,
                        i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth],
                        o = t.match(i);
                    if (!o) return null;
                    var l = o[0],
                        s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth],
                        d = Array.isArray(s) ? function(e, t) {
                            for (var a = 0; a < e.length; a++)
                                if (t(e[a])) return a
                        }(s, function(e) {
                            return e.test(l)
                        }) : function(e, t) {
                            for (var a in e)
                                if (e.hasOwnProperty(a) && t(e[a])) return a
                        }(s, function(e) {
                            return e.test(l)
                        });
                    return a = e.valueCallback ? e.valueCallback(d) : d, {
                        value: a = n.valueCallback ? n.valueCallback(a) : a,
                        rest: t.slice(l.length)
                    }
                }
            }
            let A = {
                code: "en-US",
                formatDistance: function(e, t, a) {
                    var n, r = B[e];
                    if (n = "string" == typeof r ? r : 1 === t ? r.one : r.other.replace("{{count}}", t.toString()), null != a && a.addSuffix)
                        if (a.comparison && a.comparison > 0) return "in " + n;
                        else return n + " ago";
                    return n
                },
                formatLong: H,
                formatRelative: function(e, t, a, n) {
                    return N[e]
                },
                localize: {
                    ordinalNumber: function(e, t) {
                        var a = Number(e),
                            n = a % 100;
                        if (n > 20 || n < 10) switch (n % 10) {
                            case 1:
                                return a + "st";
                            case 2:
                                return a + "nd";
                            case 3:
                                return a + "rd"
                        }
                        return a + "th"
                    },
                    era: P({
                        values: {
                            narrow: ["B", "A"],
                            abbreviated: ["BC", "AD"],
                            wide: ["Before Christ", "Anno Domini"]
                        },
                        defaultWidth: "wide"
                    }),
                    quarter: P({
                        values: {
                            narrow: ["1", "2", "3", "4"],
                            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                            wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
                        },
                        defaultWidth: "wide",
                        argumentCallback: function(e) {
                            return e - 1
                        }
                    }),
                    month: P({
                        values: {
                            narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                            abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                        },
                        defaultWidth: "wide"
                    }),
                    day: P({
                        values: {
                            narrow: ["S", "M", "T", "W", "T", "F", "S"],
                            short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                            abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                        },
                        defaultWidth: "wide"
                    }),
                    dayPeriod: P({
                        values: {
                            narrow: {
                                am: "a",
                                pm: "p",
                                midnight: "mi",
                                noon: "n",
                                morning: "morning",
                                afternoon: "afternoon",
                                evening: "evening",
                                night: "night"
                            },
                            abbreviated: {
                                am: "AM",
                                pm: "PM",
                                midnight: "midnight",
                                noon: "noon",
                                morning: "morning",
                                afternoon: "afternoon",
                                evening: "evening",
                                night: "night"
                            },
                            wide: {
                                am: "a.m.",
                                pm: "p.m.",
                                midnight: "midnight",
                                noon: "noon",
                                morning: "morning",
                                afternoon: "afternoon",
                                evening: "evening",
                                night: "night"
                            }
                        },
                        defaultWidth: "wide",
                        formattingValues: {
                            narrow: {
                                am: "a",
                                pm: "p",
                                midnight: "mi",
                                noon: "n",
                                morning: "in the morning",
                                afternoon: "in the afternoon",
                                evening: "in the evening",
                                night: "at night"
                            },
                            abbreviated: {
                                am: "AM",
                                pm: "PM",
                                midnight: "midnight",
                                noon: "noon",
                                morning: "in the morning",
                                afternoon: "in the afternoon",
                                evening: "in the evening",
                                night: "at night"
                            },
                            wide: {
                                am: "a.m.",
                                pm: "p.m.",
                                midnight: "midnight",
                                noon: "noon",
                                morning: "in the morning",
                                afternoon: "in the afternoon",
                                evening: "in the evening",
                                night: "at night"
                            }
                        },
                        defaultFormattingWidth: "wide"
                    })
                },
                match: {
                    ordinalNumber: function(e) {
                        return function(t) {
                            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = t.match(e.matchPattern);
                            if (!n) return null;
                            var r = n[0],
                                i = t.match(e.parsePattern);
                            if (!i) return null;
                            var o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
                            return {
                                value: o = a.valueCallback ? a.valueCallback(o) : o,
                                rest: t.slice(r.length)
                            }
                        }
                    }({
                        matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(e) {
                            return parseInt(e, 10)
                        }
                    }),
                    era: C({
                        matchPatterns: {
                            narrow: /^(b|a)/i,
                            abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                            wide: /^(before christ|before common era|anno domini|common era)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/^b/i, /^(a|c)/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: C({
                        matchPatterns: {
                            narrow: /^[1234]/i,
                            abbreviated: /^q[1234]/i,
                            wide: /^[1234](th|st|nd|rd)? quarter/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/1/i, /2/i, /3/i, /4/i]
                        },
                        defaultParseWidth: "any",
                        valueCallback: function(e) {
                            return e + 1
                        }
                    }),
                    month: C({
                        matchPatterns: {
                            narrow: /^[jfmasond]/i,
                            abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                            wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                            any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    day: C({
                        matchPatterns: {
                            narrow: /^[smtwf]/i,
                            short: /^(su|mo|tu|we|th|fr|sa)/i,
                            abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                            wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                            any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: C({
                        matchPatterns: {
                            narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                            any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
                        },
                        defaultMatchWidth: "any",
                        parsePatterns: {
                            any: {
                                am: /^a/i,
                                pm: /^p/i,
                                midnight: /^mi/i,
                                noon: /^no/i,
                                morning: /morning/i,
                                afternoon: /afternoon/i,
                                evening: /evening/i,
                                night: /night/i
                            }
                        },
                        defaultParseWidth: "any"
                    })
                },
                options: {
                    weekStartsOn: 0,
                    firstWeekContainsDate: 1
                }
            };
            var E = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
                M = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
                j = /^'([^]*?)'?$/,
                O = /''/g,
                z = /[a-zA-Z]/;

            function R(e, t, a) {
                (0, r.A)(2, arguments);
                var s, d, c, _, f, m, g, p, h, y, b, v, B, D, H, N, P, C, R = String(t),
                    W = null != (s = null != (d = null == a ? void 0 : a.locale) ? d : u.locale) ? s : A,
                    I = (0, l.A)(null != (c = null != (_ = null != (f = null != (m = null == a ? void 0 : a.firstWeekContainsDate) ? m : null == a || null == (g = a.locale) || null == (p = g.options) ? void 0 : p.firstWeekContainsDate) ? f : u.firstWeekContainsDate) ? _ : null == (h = u.locale) || null == (y = h.options) ? void 0 : y.firstWeekContainsDate) ? c : 1);
                if (!(I >= 1 && I <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
                var F = (0, l.A)(null != (b = null != (v = null != (B = null != (D = null == a ? void 0 : a.weekStartsOn) ? D : null == a || null == (H = a.locale) || null == (N = H.options) ? void 0 : N.weekStartsOn) ? B : u.weekStartsOn) ? v : null == (P = u.locale) || null == (C = P.options) ? void 0 : C.weekStartsOn) ? b : 0);
                if (!(F >= 0 && F <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
                if (!W.localize) throw RangeError("locale must contain localize property");
                if (!W.formatLong) throw RangeError("locale must contain formatLong property");
                var U = (0, i.A)(e);
                if (! function(e) {
                        return (0, r.A)(1, arguments), (!! function(e) {
                            return (0, r.A)(1, arguments), e instanceof Date || "object" === (0, n.A)(e) && "[object Date]" === Object.prototype.toString.call(e)
                        }(e) || "number" == typeof e) && !isNaN(Number((0, i.A)(e)))
                    }(U)) throw RangeError("Invalid time value");
                var $ = (0, S.A)(U),
                    X = function(e, t) {
                        (0, r.A)(2, arguments);
                        var a = (0, l.A)(t);
                        return (0, o.A)(e, -a)
                    }(U, $),
                    q = {
                        firstWeekContainsDate: I,
                        weekStartsOn: F,
                        locale: W,
                        _originalDate: U
                    };
                return R.match(M).map(function(e) {
                    var t = e[0];
                    return "p" === t || "P" === t ? (0, x[t])(e, W.formatLong) : e
                }).join("").match(E).map(function(n) {
                    if ("''" === n) return "'";
                    var r, i, o = n[0];
                    if ("'" === o) {
                        return (i = (r = n).match(j)) ? i[1].replace(O, "'") : r
                    }
                    var l = w[o];
                    if (l) return null != a && a.useAdditionalWeekYearTokens || -1 === k.indexOf(n) || T(n, t, String(e)), null != a && a.useAdditionalDayOfYearTokens || -1 === L.indexOf(n) || T(n, t, String(e)), l(X, n, W.localize, q);
                    if (o.match(z)) throw RangeError("Format string contains an unescaped latin alphabet character `" + o + "`");
                    return n
                }).join("")
            }
        },
        23104: (e, t, a) => {
            var n = a(47225),
                r = a(19361);
            e.exports = function(e, t) {
                return n(e, r(e), t)
            }
        },
        23307: e => {
            var t = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var a = e.length,
                    n = new e.constructor(a);
                return a && "string" == typeof e[0] && t.call(e, "index") && (n.index = e.index, n.input = e.input), n
            }
        },
        23768: (e, t, a) => {
            e.exports = a(53950)
        },
        28300: e => {
            var t = /\s/;
            e.exports = function(e) {
                for (var a = e.length; a-- && t.test(e.charAt(a)););
                return a
            }
        },
        28859: (e, t, a) => {
            "use strict";

            function n() {
                let e = navigator.userAgentData;
                return e && Array.isArray(e.brands) ? e.brands.map(e => {
                    let {
                        brand: t,
                        version: a
                    } = e;
                    return t + "/" + a
                }).join(" ") : navigator.userAgent
            }
            a.d(t, {
                $t: () => n
            })
        },
        29265: (e, t, a) => {
            "use strict";
            a.d(t, {
                _: () => i
            });
            var n = a(21462),
                r = a(84873);

            function i(e, t, a) {
                let i = (0, n.useCallback)(t, [t, ...a]);
                (0, n.useEffect)(() => (r.AZ.on(e, i), () => {
                    r.AZ.removeListener(e, i)
                }), [e, i])
            }
        },
        29612: (e, t, a) => {
            "use strict";
            a.d(t, {
                B1: () => H,
                C0: () => _,
                Dz: () => y,
                Jx: () => l,
                LI: () => i,
                PG: () => m,
                RI: () => o,
                Sg: () => f,
                T9: () => r,
                TV: () => h,
                WJ: () => b,
                _3: () => c,
                bV: () => B,
                jk: () => n,
                lP: () => T,
                nI: () => D,
                qE: () => u,
                sq: () => g,
                w7: () => w
            });
            let n = Math.min,
                r = Math.max,
                i = Math.round,
                o = Math.floor,
                l = e => ({
                    x: e,
                    y: e
                }),
                s = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                d = {
                    start: "end",
                    end: "start"
                };

            function u(e, t, a) {
                return r(e, n(t, a))
            }

            function c(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function _(e) {
                return e.split("-")[0]
            }

            function f(e) {
                return e.split("-")[1]
            }

            function m(e) {
                return "x" === e ? "y" : "x"
            }

            function g(e) {
                return "y" === e ? "height" : "width"
            }
            let p = new Set(["top", "bottom"]);

            function h(e) {
                return p.has(_(e)) ? "y" : "x"
            }

            function y(e) {
                return m(h(e))
            }

            function w(e, t, a) {
                void 0 === a && (a = !1);
                let n = f(e),
                    r = y(e),
                    i = g(r),
                    o = "x" === r ? n === (a ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                return t.reference[i] > t.floating[i] && (o = B(o)), [o, B(o)]
            }

            function b(e) {
                let t = B(e);
                return [v(e), t, v(t)]
            }

            function v(e) {
                return e.replace(/start|end/g, e => d[e])
            }
            let x = ["left", "right"],
                S = ["right", "left"],
                L = ["top", "bottom"],
                k = ["bottom", "top"];

            function T(e, t, a, n) {
                let r = f(e),
                    i = function(e, t, a) {
                        switch (e) {
                            case "top":
                            case "bottom":
                                if (a) return t ? S : x;
                                return t ? x : S;
                            case "left":
                            case "right":
                                return t ? L : k;
                            default:
                                return []
                        }
                    }(_(e), "start" === a, n);
                return r && (i = i.map(e => e + "-" + r), t && (i = i.concat(i.map(v)))), i
            }

            function B(e) {
                return e.replace(/left|right|bottom|top/g, e => s[e])
            }

            function D(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function H(e) {
                let {
                    x: t,
                    y: a,
                    width: n,
                    height: r
                } = e;
                return {
                    width: n,
                    height: r,
                    top: a,
                    left: t,
                    right: t + n,
                    bottom: a + r,
                    x: t,
                    y: a
                }
            }
        },
        29643: (e, t, a) => {
            var n = a(69804),
                r = a(55304),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, a) {
                var o = e[t];
                i.call(e, t) && r(o, a) && (void 0 !== a || t in e) || n(e, t, a)
            }
        },
        30149: (e, t, a) => {
            "use strict";
            a.d(t, {
                N: () => d
            });
            var n = a(13897),
                r = a(23798),
                i = a(71623),
                o = a(29320);
            (0, a(85752).$)(".styles_module_wtLink__f24f44fb{align-items:center;background:none;border:0;color:inherit;cursor:pointer;display:inline-flex;gap:.5rem}.styles_module_wtLink__f24f44fb:focus-visible{border-radius:3px;box-shadow:0 0 3px 1px #4e7df7;outline:1px solid #4e7df7;outline-offset:1px}.styles_module_wtLink_Navigational__f24f44fb{text-decoration:none}.styles_module_wtLink_Navigational__f24f44fb.styles_module_wtLink_Disabled__f24f44fb{cursor:default;opacity:.5;text-decoration:none}.styles_module_wtLink_Hyperlink__f24f44fb{text-decoration:underline}.styles_module_wtLink_Hyperlink__f24f44fb:hover:not(.styles_module_wtLink_Disabled__f24f44fb){text-decoration:none}.styles_module_wtLink_Hyperlink__f24f44fb.styles_module_wtLink_Disabled__f24f44fb{cursor:default;opacity:.5;text-decoration:underline}.styles_module_wtLink_Utility__f24f44fb{color:inherit;text-decoration:none}.styles_module_wtLink_Default__f24f44fb.styles_module_wtLink_Light__f24f44fb:not(.styles_module_wtLink_Utility__f24f44fb){color:#3767ea}.styles_module_wtLink_Default__f24f44fb.styles_module_wtLink_Light__f24f44fb:not(.styles_module_wtLink_Utility__f24f44fb):hover{color:#4e7df7}.styles_module_wtLink_Default__f24f44fb.styles_module_wtLink_Dark__f24f44fb:not(.styles_module_wtLink_Utility__f24f44fb){color:#a1beff}.styles_module_wtLink_Default__f24f44fb.styles_module_wtLink_Dark__f24f44fb:not(.styles_module_wtLink_Utility__f24f44fb):hover{color:#e0eaff}.styles_module_wtLink_Upsell__f24f44fb.styles_module_wtLink_Light__f24f44fb{color:#8e21cc}.styles_module_wtLink_Upsell__f24f44fb.styles_module_wtLink_Light__f24f44fb:hover{color:#a035e2}.styles_module_wtLink_Upsell__f24f44fb.styles_module_wtLink_Dark__f24f44fb{color:#d7a7ff}.styles_module_wtLink_Upsell__f24f44fb.styles_module_wtLink_Dark__f24f44fb:hover{color:#e5c9ff}.styles_module_wtLink_Neutral__f24f44fb.styles_module_wtLink_Light__f24f44fb{color:#353535}.styles_module_wtLink_Neutral__f24f44fb.styles_module_wtLink_Light__f24f44fb:hover{color:#676767}.styles_module_wtLink_Neutral__f24f44fb.styles_module_wtLink_Dark__f24f44fb{color:#fff}.styles_module_wtLink_Neutral__f24f44fb.styles_module_wtLink_Dark__f24f44fb:hover{color:#f1f1f1}.styles_module_wtDisplayHeadingLargeBoldNarrow__f24f44fb,.styles_module_wtDisplayHeadingLargeBoldWide__f24f44fb,.styles_module_wtDisplayHeadingLargeBold__f24f44fb,.styles_module_wtDisplayHeadingLargeNarrow__f24f44fb,.styles_module_wtDisplayHeadingLargeWide__f24f44fb,.styles_module_wtDisplayHeadingLarge__f24f44fb,.styles_module_wtDisplayHeadingMediumBoldNarrow__f24f44fb,.styles_module_wtDisplayHeadingMediumBoldWide__f24f44fb,.styles_module_wtDisplayHeadingMediumBold__f24f44fb,.styles_module_wtDisplayHeadingMediumNarrow__f24f44fb,.styles_module_wtDisplayHeadingMediumWide__f24f44fb,.styles_module_wtDisplayHeadingMedium__f24f44fb,.styles_module_wtDisplayHeadingSmallBoldNarrow__f24f44fb,.styles_module_wtDisplayHeadingSmallBoldWide__f24f44fb,.styles_module_wtDisplayHeadingSmallBold__f24f44fb,.styles_module_wtDisplayHeadingSmallNarrow__f24f44fb,.styles_module_wtDisplayHeadingSmallWide__f24f44fb,.styles_module_wtDisplayHeadingSmall__f24f44fb,.styles_module_wtDisplayHeadingXSmallBold__f24f44fb,.styles_module_wtDisplayHeading__f24f44fb{font-family:GT Super WT,Times New Roman,Times,serif;font-size:inherit}.styles_module_wtDisplayHeadingLargeWide__f24f44fb,.styles_module_wtDisplayHeadingLarge__f24f44fb{font-size:64px;font-weight:400;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeNarrow__f24f44fb{font-size:40px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingLargeBoldWide__f24f44fb,.styles_module_wtDisplayHeadingLargeBold__f24f44fb{font-size:64px;font-weight:900;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeBoldNarrow__f24f44fb{font-size:40px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumWide__f24f44fb,.styles_module_wtDisplayHeadingMedium__f24f44fb{font-size:48px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumNarrow__f24f44fb{font-size:34px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingMediumBoldWide__f24f44fb,.styles_module_wtDisplayHeadingMediumBold__f24f44fb{font-size:48px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumBoldNarrow__f24f44fb{font-size:34px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallWide__f24f44fb,.styles_module_wtDisplayHeadingSmall__f24f44fb{font-size:36px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallNarrow__f24f44fb{font-size:28px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldWide__f24f44fb,.styles_module_wtDisplayHeadingSmallBold__f24f44fb{font-size:36px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldNarrow__f24f44fb{font-size:28px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingXSmallBold__f24f44fb{font-size:14px;font-weight:900;line-height:1.2}.styles_module_wtSubHeading__f24f44fb,.styles_module_wtTextHeadingLargeBoldNarrow__f24f44fb,.styles_module_wtTextHeadingLargeBoldWide__f24f44fb,.styles_module_wtTextHeadingLargeBold__f24f44fb,.styles_module_wtTextHeadingLargeNarrow__f24f44fb,.styles_module_wtTextHeadingLargeWide__f24f44fb,.styles_module_wtTextHeadingLarge__f24f44fb,.styles_module_wtTextHeadingMediumBoldWide__f24f44fb,.styles_module_wtTextHeadingMediumBold__f24f44fb,.styles_module_wtTextHeadingMediumNarrow__f24f44fb,.styles_module_wtTextHeadingMediumSemiNarrow__f24f44fb,.styles_module_wtTextHeadingMediumSemiWide__f24f44fb,.styles_module_wtTextHeadingMediumSemi__f24f44fb,.styles_module_wtTextHeadingMediumWide__f24f44fb,.styles_module_wtTextHeadingMedium__f24f44fb,.styles_module_wtTextHeadingSmallBoldNarrow__f24f44fb,.styles_module_wtTextHeadingSmallBoldWide__f24f44fb,.styles_module_wtTextHeadingSmallBold__f24f44fb,.styles_module_wtTextHeadingSmallNarrow__f24f44fb,.styles_module_wtTextHeadingSmallWide__f24f44fb,.styles_module_wtTextHeadingSmall__f24f44fb,.styles_module_wtTextHeadingXLargeNarrow__f24f44fb,.styles_module_wtTextHeadingXLargeWide__f24f44fb,.styles_module_wtTextHeadingXLarge__f24f44fb,.styles_module_wtTextHeading__f24f44fb{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtTextHeadingXLargeWide__f24f44fb,.styles_module_wtTextHeadingXLarge__f24f44fb{font-size:64px;font-weight:500}.styles_module_wtTextHeadingXLargeNarrow__f24f44fb{font-size:36px;font-weight:500}.styles_module_wtTextHeadingLargeWide__f24f44fb,.styles_module_wtTextHeadingLarge__f24f44fb{font-size:36px;font-weight:400}.styles_module_wtTextHeadingLargeNarrow__f24f44fb{font-size:24px;font-weight:400}.styles_module_wtTextHeadingLargeBoldWide__f24f44fb,.styles_module_wtTextHeadingLargeBold__f24f44fb{font-size:36px;font-weight:700}.styles_module_wtTextHeadingLargeBoldNarrow__f24f44fb{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumWide__f24f44fb,.styles_module_wtTextHeadingMedium__f24f44fb{font-size:24px;font-weight:400}.styles_module_wtTextHeadingMediumSemiWide__f24f44fb,.styles_module_wtTextHeadingMediumSemi__f24f44fb{font-size:24px;font-weight:500}.styles_module_wtTextHeadingMediumNarrow__f24f44fb{font-size:20px;font-weight:400}.styles_module_wtTextHeadingMediumSemiNarrow__f24f44fb{font-size:20px;font-weight:500}.styles_module_wtTextHeadingMediumBoldWide__f24f44fb,.styles_module_wtTextHeadingMediumBold__f24f44fb{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumBoldWide__f24f44fb{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallWide__f24f44fb,.styles_module_wtTextHeadingSmall__f24f44fb{font-size:20px;font-weight:400}.styles_module_wtTextHeadingSmallNarrow__f24f44fb{font-size:18px;font-weight:400}.styles_module_wtTextHeadingSmallBoldWide__f24f44fb,.styles_module_wtTextHeadingSmallBold__f24f44fb{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallBoldNarrow__f24f44fb{font-size:18px;font-weight:700}.styles_module_wtSubHeading__f24f44fb{font-size:14px;font-weight:700;line-height:1.25;text-transform:uppercase}.styles_module_wtBodyLargeBold__f24f44fb,.styles_module_wtBodyLarge__f24f44fb,.styles_module_wtBodyMediumBold__f24f44fb,.styles_module_wtBodyMediumSemi__f24f44fb,.styles_module_wtBodyMedium__f24f44fb,.styles_module_wtBodySmallBold__f24f44fb,.styles_module_wtBodySmallSemi__f24f44fb,.styles_module_wtBodySmall__f24f44fb,.styles_module_wtBodyXLarge__f24f44fb,.styles_module_wtBodyXSmallSemi__f24f44fb,.styles_module_wtBodyXSmall__f24f44fb{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.5}.styles_module_wtBodyXLarge__f24f44fb{font-size:24px;font-weight:400}.styles_module_wtBodyLarge__f24f44fb{font-size:18px;font-weight:400}.styles_module_wtBodyLargeBold__f24f44fb{font-size:18px;font-weight:700}.styles_module_wtBodyMedium__f24f44fb{font-size:16px;font-weight:400}.styles_module_wtBodyMediumSemi__f24f44fb{font-size:16px;font-weight:500}.styles_module_wtBodyMediumBold__f24f44fb{font-size:16px;font-weight:700}.styles_module_wtBodySmall__f24f44fb{font-size:14px;font-weight:400}.styles_module_wtBodySmallSemi__f24f44fb{font-size:14px;font-weight:500}.styles_module_wtBodySmallBold__f24f44fb{font-size:14px;font-weight:700}.styles_module_wtBodyXSmall__f24f44fb{font-size:12px;font-weight:400}.styles_module_wtBodyXSmallSemi__f24f44fb{font-size:12px;font-weight:500}.styles_module_wtLabelLargeBold__f24f44fb,.styles_module_wtLabelLargeSemi__f24f44fb,.styles_module_wtLabelLarge__f24f44fb,.styles_module_wtLabelMediumBold__f24f44fb,.styles_module_wtLabelMediumSemi__f24f44fb,.styles_module_wtLabelMedium__f24f44fb,.styles_module_wtLabelSmallBold__f24f44fb,.styles_module_wtLabelSmallSemi__f24f44fb,.styles_module_wtLabelSmall__f24f44fb,.styles_module_wtLabelXSmallBold__f24f44fb,.styles_module_wtLabelXSmallSemi__f24f44fb,.styles_module_wtLabelXSmall__f24f44fb{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtLabelLarge__f24f44fb{font-size:16px;font-weight:400}.styles_module_wtLabelLargeSemi__f24f44fb{font-size:16px;font-weight:500}.styles_module_wtLabelLargeBold__f24f44fb{font-size:16px;font-weight:700}.styles_module_wtLabelMedium__f24f44fb{font-size:14px;font-weight:400}.styles_module_wtLabelMediumSemi__f24f44fb{font-size:14px;font-weight:500}.styles_module_wtLabelMediumBold__f24f44fb{font-size:14px;font-weight:700}.styles_module_wtLabelSmall__f24f44fb{font-size:12px;font-weight:400}.styles_module_wtLabelSmallSemi__f24f44fb{font-size:12px;font-weight:500}.styles_module_wtLabelSmallBold__f24f44fb{font-size:12px;font-weight:700}.styles_module_wtLabelXSmall__f24f44fb{font-size:10px;font-weight:400}.styles_module_wtLabelXSmallSemi__f24f44fb{font-size:10px;font-weight:500}.styles_module_wtLabelXSmallBold__f24f44fb{font-size:10px;font-weight:700}");
            var l = {
                "wt-link": "styles_module_wtLink__f24f44fb",
                "wt-link--navigational": "styles_module_wtLink_Navigational__f24f44fb",
                "wt-link--disabled": "styles_module_wtLink_Disabled__f24f44fb",
                "wt-link--hyperlink": "styles_module_wtLink_Hyperlink__f24f44fb",
                "wt-link--utility": "styles_module_wtLink_Utility__f24f44fb",
                "wt-link--default": "styles_module_wtLink_Default__f24f44fb",
                "wt-link--light": "styles_module_wtLink_Light__f24f44fb",
                "wt-link--dark": "styles_module_wtLink_Dark__f24f44fb",
                "wt-link--upsell": "styles_module_wtLink_Upsell__f24f44fb",
                "wt-link--neutral": "styles_module_wtLink_Neutral__f24f44fb",
                "wt-display-heading-x-small-bold": "styles_module_wtDisplayHeadingXSmallBold__f24f44fb",
                "wt-display-heading-small-bold-narrow": "styles_module_wtDisplayHeadingSmallBoldNarrow__f24f44fb",
                "wt-display-heading-small-bold": "styles_module_wtDisplayHeadingSmallBold__f24f44fb",
                "wt-display-heading-small-bold-wide": "styles_module_wtDisplayHeadingSmallBoldWide__f24f44fb",
                "wt-display-heading-small-narrow": "styles_module_wtDisplayHeadingSmallNarrow__f24f44fb",
                "wt-display-heading-small": "styles_module_wtDisplayHeadingSmall__f24f44fb",
                "wt-display-heading-small-wide": "styles_module_wtDisplayHeadingSmallWide__f24f44fb",
                "wt-display-heading-medium-bold-narrow": "styles_module_wtDisplayHeadingMediumBoldNarrow__f24f44fb",
                "wt-display-heading-medium-bold": "styles_module_wtDisplayHeadingMediumBold__f24f44fb",
                "wt-display-heading-medium-bold-wide": "styles_module_wtDisplayHeadingMediumBoldWide__f24f44fb",
                "wt-display-heading-medium-narrow": "styles_module_wtDisplayHeadingMediumNarrow__f24f44fb",
                "wt-display-heading-medium": "styles_module_wtDisplayHeadingMedium__f24f44fb",
                "wt-display-heading-medium-wide": "styles_module_wtDisplayHeadingMediumWide__f24f44fb",
                "wt-display-heading-large-bold-narrow": "styles_module_wtDisplayHeadingLargeBoldNarrow__f24f44fb",
                "wt-display-heading-large-bold": "styles_module_wtDisplayHeadingLargeBold__f24f44fb",
                "wt-display-heading-large-bold-wide": "styles_module_wtDisplayHeadingLargeBoldWide__f24f44fb",
                "wt-display-heading-large-narrow": "styles_module_wtDisplayHeadingLargeNarrow__f24f44fb",
                "wt-display-heading-large": "styles_module_wtDisplayHeadingLarge__f24f44fb",
                "wt-display-heading-large-wide": "styles_module_wtDisplayHeadingLargeWide__f24f44fb",
                "wt-display-heading": "styles_module_wtDisplayHeading__f24f44fb",
                "wt-sub-heading": "styles_module_wtSubHeading__f24f44fb",
                "wt-text-heading-small-bold-narrow": "styles_module_wtTextHeadingSmallBoldNarrow__f24f44fb",
                "wt-text-heading-small-bold": "styles_module_wtTextHeadingSmallBold__f24f44fb",
                "wt-text-heading-small-bold-wide": "styles_module_wtTextHeadingSmallBoldWide__f24f44fb",
                "wt-text-heading-small-narrow": "styles_module_wtTextHeadingSmallNarrow__f24f44fb",
                "wt-text-heading-small": "styles_module_wtTextHeadingSmall__f24f44fb",
                "wt-text-heading-small-wide": "styles_module_wtTextHeadingSmallWide__f24f44fb",
                "wt-text-heading-medium-bold": "styles_module_wtTextHeadingMediumBold__f24f44fb",
                "wt-text-heading-medium-bold-wide": "styles_module_wtTextHeadingMediumBoldWide__f24f44fb",
                "wt-text-heading-medium-semi-narrow": "styles_module_wtTextHeadingMediumSemiNarrow__f24f44fb",
                "wt-text-heading-medium-narrow": "styles_module_wtTextHeadingMediumNarrow__f24f44fb",
                "wt-text-heading-medium-semi": "styles_module_wtTextHeadingMediumSemi__f24f44fb",
                "wt-text-heading-medium-semi-wide": "styles_module_wtTextHeadingMediumSemiWide__f24f44fb",
                "wt-text-heading-medium": "styles_module_wtTextHeadingMedium__f24f44fb",
                "wt-text-heading-medium-wide": "styles_module_wtTextHeadingMediumWide__f24f44fb",
                "wt-text-heading-large-bold-narrow": "styles_module_wtTextHeadingLargeBoldNarrow__f24f44fb",
                "wt-text-heading-large-bold": "styles_module_wtTextHeadingLargeBold__f24f44fb",
                "wt-text-heading-large-bold-wide": "styles_module_wtTextHeadingLargeBoldWide__f24f44fb",
                "wt-text-heading-large-narrow": "styles_module_wtTextHeadingLargeNarrow__f24f44fb",
                "wt-text-heading-large": "styles_module_wtTextHeadingLarge__f24f44fb",
                "wt-text-heading-large-wide": "styles_module_wtTextHeadingLargeWide__f24f44fb",
                "wt-text-heading-x-large-narrow": "styles_module_wtTextHeadingXLargeNarrow__f24f44fb",
                "wt-text-heading-x-large": "styles_module_wtTextHeadingXLarge__f24f44fb",
                "wt-text-heading-x-large-wide": "styles_module_wtTextHeadingXLargeWide__f24f44fb",
                "wt-text-heading": "styles_module_wtTextHeading__f24f44fb",
                "wt-body-x-small-semi": "styles_module_wtBodyXSmallSemi__f24f44fb",
                "wt-body-x-small": "styles_module_wtBodyXSmall__f24f44fb",
                "wt-body-small-bold": "styles_module_wtBodySmallBold__f24f44fb",
                "wt-body-small-semi": "styles_module_wtBodySmallSemi__f24f44fb",
                "wt-body-small": "styles_module_wtBodySmall__f24f44fb",
                "wt-body-medium-bold": "styles_module_wtBodyMediumBold__f24f44fb",
                "wt-body-medium-semi": "styles_module_wtBodyMediumSemi__f24f44fb",
                "wt-body-medium": "styles_module_wtBodyMedium__f24f44fb",
                "wt-body-large-bold": "styles_module_wtBodyLargeBold__f24f44fb",
                "wt-body-large": "styles_module_wtBodyLarge__f24f44fb",
                "wt-body-x-large": "styles_module_wtBodyXLarge__f24f44fb",
                "wt-label-x-small-bold": "styles_module_wtLabelXSmallBold__f24f44fb",
                "wt-label-x-small-semi": "styles_module_wtLabelXSmallSemi__f24f44fb",
                "wt-label-x-small": "styles_module_wtLabelXSmall__f24f44fb",
                "wt-label-small-bold": "styles_module_wtLabelSmallBold__f24f44fb",
                "wt-label-small-semi": "styles_module_wtLabelSmallSemi__f24f44fb",
                "wt-label-small": "styles_module_wtLabelSmall__f24f44fb",
                "wt-label-medium-bold": "styles_module_wtLabelMediumBold__f24f44fb",
                "wt-label-medium-semi": "styles_module_wtLabelMediumSemi__f24f44fb",
                "wt-label-medium": "styles_module_wtLabelMedium__f24f44fb",
                "wt-label-large-bold": "styles_module_wtLabelLargeBold__f24f44fb",
                "wt-label-large-semi": "styles_module_wtLabelLargeSemi__f24f44fb",
                "wt-label-large": "styles_module_wtLabelLarge__f24f44fb"
            };
            let s = {
                    hyperlink: "wt-body-small",
                    navigational: "wt-label-medium",
                    utility: "wt-body-medium"
                },
                d = (0, o.V)((e, t) => {
                    var {
                        appearance: a = "hyperlink",
                        as: d = "a",
                        typography: u,
                        children: c,
                        mode: _ = "light",
                        href: f,
                        disabled: m,
                        variation: g = "default",
                        className: p
                    } = e, h = (0, n.Tt)(e, ["appearance", "as", "typography", "children", "mode", "href", "disabled", "variation", "className"]);
                    let y = "object" == typeof d,
                        w = "a" === d,
                        b = u || s[a],
                        v = [l["wt-link"], l[`wt-link--${a}`], l[`wt-link--${g}`], l[`wt-link--${_}`], l[b], m && l["wt-link--disabled"], p];
                    return (0, r.jsx)(o.y, m ? Object.assign({
                        as: y ? "a" : d,
                        className: (0, i.A)(v),
                        ref: t
                    }, !m || y || w ? {} : {
                        disabled: m
                    }, h, {
                        children: c
                    }) : Object.assign({
                        as: d,
                        className: (0, i.A)(v),
                        ref: t
                    }, "string" == typeof f ? {
                        href: f
                    } : {}, h, {
                        children: c
                    }))
                });
            d.displayName = "Link"
        },
        30442: (e, t, a) => {
            var n = a(54557),
                r = Object.create;
            e.exports = function() {
                function e() {}
                return function(t) {
                    if (!n(t)) return {};
                    if (r) return r(t);
                    e.prototype = t;
                    var a = new e;
                    return e.prototype = void 0, a
                }
            }()
        },
        30474: (e, t, a) => {
            "use strict";

            function n() {
                return "undefined" != typeof window
            }

            function r(e) {
                return l(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function i(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function o(e) {
                var t;
                return null == (t = (l(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function l(e) {
                return !!n() && (e instanceof Node || e instanceof i(e).Node)
            }

            function s(e) {
                return !!n() && (e instanceof Element || e instanceof i(e).Element)
            }

            function d(e) {
                return !!n() && (e instanceof HTMLElement || e instanceof i(e).HTMLElement)
            }

            function u(e) {
                return !!n() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof i(e).ShadowRoot)
            }
            a.d(t, {
                $4: () => B,
                CP: () => T,
                L9: () => k,
                Lv: () => m,
                Tc: () => x,
                Tf: () => p,
                ZU: () => _,
                _m: () => D,
                ep: () => o,
                eu: () => L,
                gJ: () => v,
                mq: () => r,
                sQ: () => b,
                sb: () => d,
                v9: () => function e(t, a, n) {
                    var r;
                    void 0 === a && (a = []), void 0 === n && (n = !0);
                    let o = function e(t) {
                            let a = B(t);
                            return L(a) ? t.ownerDocument ? t.ownerDocument.body : t.body : d(a) && _(a) ? a : e(a)
                        }(t),
                        l = o === (null == (r = t.ownerDocument) ? void 0 : r.body),
                        s = i(o);
                    if (l) {
                        let t = D(s);
                        return a.concat(s, s.visualViewport || [], _(o) ? o : [], t && n ? e(t) : [])
                    }
                    return a.concat(o, e(o, [], n))
                },
                vq: () => s,
                zk: () => i
            });
            let c = new Set(["inline", "contents"]);

            function _(e) {
                let {
                    overflow: t,
                    overflowX: a,
                    overflowY: n,
                    display: r
                } = k(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + n + a) && !c.has(r)
            }
            let f = new Set(["table", "td", "th"]);

            function m(e) {
                return f.has(r(e))
            }
            let g = [":popover-open", ":modal"];

            function p(e) {
                return g.some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }
            let h = ["transform", "translate", "scale", "rotate", "perspective"],
                y = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
                w = ["paint", "layout", "strict", "content"];

            function b(e) {
                let t = x(),
                    a = s(e) ? k(e) : e;
                return h.some(e => !!a[e] && "none" !== a[e]) || !!a.containerType && "normal" !== a.containerType || !t && !!a.backdropFilter && "none" !== a.backdropFilter || !t && !!a.filter && "none" !== a.filter || y.some(e => (a.willChange || "").includes(e)) || w.some(e => (a.contain || "").includes(e))
            }

            function v(e) {
                let t = B(e);
                for (; d(t) && !L(t);) {
                    if (b(t)) return t;
                    if (p(t)) break;
                    t = B(t)
                }
                return null
            }

            function x() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }
            let S = new Set(["html", "body", "#document"]);

            function L(e) {
                return S.has(r(e))
            }

            function k(e) {
                return i(e).getComputedStyle(e)
            }

            function T(e) {
                return s(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function B(e) {
                if ("html" === r(e)) return e;
                let t = e.assignedSlot || e.parentNode || u(e) && e.host || o(e);
                return u(t) ? t.host : t
            }

            function D(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }
        },
        30908: (e, t, a) => {
            var n = a(94995),
                r = a(50482);
            e.exports = function(e) {
                return r(e) && "[object Map]" == n(e)
            }
        },
        31929: (e, t, a) => {
            var n = a(65439),
                r = a(14225),
                i = a(95677),
                o = a(38264),
                l = a(33449);
            e.exports = function(e, t, a) {
                var s = e.constructor;
                switch (t) {
                    case "[object ArrayBuffer]":
                        return n(e);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new s(+e);
                    case "[object DataView]":
                        return r(e, a);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return l(e, a);
                    case "[object Map]":
                    case "[object Set]":
                        return new s;
                    case "[object Number]":
                    case "[object String]":
                        return new s(e);
                    case "[object RegExp]":
                        return i(e);
                    case "[object Symbol]":
                        return o(e)
                }
            }
        },
        32446: (e, t, a) => {
            var n = a(94995),
                r = a(50482);
            e.exports = function(e) {
                return r(e) && "[object Set]" == n(e)
            }
        },
        33449: (e, t, a) => {
            var n = a(65439);
            e.exports = function(e, t) {
                var a = t ? n(e.buffer) : e.buffer;
                return new e.constructor(a, e.byteOffset, e.length)
            }
        },
        33575: (e, t, a) => {
            "use strict";
            a.d(t, {
                BN: () => f,
                Ej: () => g,
                UU: () => m,
                cY: () => _,
                we: () => c
            });
            var n = a(3616),
                r = a(21462),
                i = a(47993),
                o = "undefined" != typeof document ? r.useLayoutEffect : function() {};

            function l(e, t) {
                let a, n, r;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((a = e.length) !== t.length) return !1;
                        for (n = a; 0 != n--;)
                            if (!l(e[n], t[n])) return !1;
                        return !0
                    }
                    if ((a = (r = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (n = a; 0 != n--;)
                        if (!({}).hasOwnProperty.call(t, r[n])) return !1;
                    for (n = a; 0 != n--;) {
                        let a = r[n];
                        if (("_owner" !== a || !e.$$typeof) && !l(e[a], t[a])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function s(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function d(e, t) {
                let a = s(e);
                return Math.round(t * a) / a
            }

            function u(e) {
                let t = r.useRef(e);
                return o(() => {
                    t.current = e
                }), t
            }

            function c(e) {
                void 0 === e && (e = {});
                let {
                    placement: t = "bottom",
                    strategy: a = "absolute",
                    middleware: c = [],
                    platform: _,
                    elements: {
                        reference: f,
                        floating: m
                    } = {},
                    transform: g = !0,
                    whileElementsMounted: p,
                    open: h
                } = e, [y, w] = r.useState({
                    x: 0,
                    y: 0,
                    strategy: a,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1
                }), [b, v] = r.useState(c);
                l(b, c) || v(c);
                let [x, S] = r.useState(null), [L, k] = r.useState(null), T = r.useCallback(e => {
                    e !== N.current && (N.current = e, S(e))
                }, []), B = r.useCallback(e => {
                    e !== P.current && (P.current = e, k(e))
                }, []), D = f || x, H = m || L, N = r.useRef(null), P = r.useRef(null), C = r.useRef(y), A = null != p, E = u(p), M = u(_), j = u(h), O = r.useCallback(() => {
                    if (!N.current || !P.current) return;
                    let e = {
                        placement: t,
                        strategy: a,
                        middleware: b
                    };
                    M.current && (e.platform = M.current), (0, n.rD)(N.current, P.current, e).then(e => {
                        let t = {
                            ...e,
                            isPositioned: !1 !== j.current
                        };
                        z.current && !l(C.current, t) && (C.current = t, i.flushSync(() => {
                            w(t)
                        }))
                    })
                }, [b, t, a, M, j]);
                o(() => {
                    !1 === h && C.current.isPositioned && (C.current.isPositioned = !1, w(e => ({
                        ...e,
                        isPositioned: !1
                    })))
                }, [h]);
                let z = r.useRef(!1);
                o(() => (z.current = !0, () => {
                    z.current = !1
                }), []), o(() => {
                    if (D && (N.current = D), H && (P.current = H), D && H) {
                        if (E.current) return E.current(D, H, O);
                        O()
                    }
                }, [D, H, O, E, A]);
                let R = r.useMemo(() => ({
                        reference: N,
                        floating: P,
                        setReference: T,
                        setFloating: B
                    }), [T, B]),
                    W = r.useMemo(() => ({
                        reference: D,
                        floating: H
                    }), [D, H]),
                    I = r.useMemo(() => {
                        let e = {
                            position: a,
                            left: 0,
                            top: 0
                        };
                        if (!W.floating) return e;
                        let t = d(W.floating, y.x),
                            n = d(W.floating, y.y);
                        return g ? {
                            ...e,
                            transform: "translate(" + t + "px, " + n + "px)",
                            ...s(W.floating) >= 1.5 && {
                                willChange: "transform"
                            }
                        } : {
                            position: a,
                            left: t,
                            top: n
                        }
                    }, [a, g, W.floating, y.x, y.y]);
                return r.useMemo(() => ({
                    ...y,
                    update: O,
                    refs: R,
                    elements: W,
                    floatingStyles: I
                }), [y, O, R, W, I])
            }
            let _ = (e, t) => ({
                    ...(0, n.cY)(e),
                    options: [e, t]
                }),
                f = (e, t) => ({
                    ...(0, n.BN)(e),
                    options: [e, t]
                }),
                m = (e, t) => ({
                    ...(0, n.UU)(e),
                    options: [e, t]
                }),
                g = (e, t) => ({
                    ...(0, n.Ej)(e),
                    options: [e, t]
                })
        },
        33753: (e, t, a) => {
            "use strict";
            a.d(t, {
                tH: () => o
            });
            var n = a(21462);
            let r = (0, n.createContext)(null),
                i = {
                    didCatch: !1,
                    error: null
                };
            class o extends n.Component {
                constructor(e) {
                    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = i
                }
                static getDerivedStateFromError(e) {
                    return {
                        didCatch: !0,
                        error: e
                    }
                }
                resetErrorBoundary() {
                    let {
                        error: e
                    } = this.state;
                    if (null !== e) {
                        for (var t, a, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        null == (t = (a = this.props).onReset) || t.call(a, {
                            args: r,
                            reason: "imperative-api"
                        }), this.setState(i)
                    }
                }
                componentDidCatch(e, t) {
                    var a, n;
                    null == (a = (n = this.props).onError) || a.call(n, e, t)
                }
                componentDidUpdate(e, t) {
                    let {
                        didCatch: a
                    } = this.state, {
                        resetKeys: n
                    } = this.props;
                    if (a && null !== t.error && function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return e.length !== t.length || e.some((e, a) => !Object.is(e, t[a]))
                        }(e.resetKeys, n)) {
                        var r, o;
                        null == (r = (o = this.props).onReset) || r.call(o, {
                            next: n,
                            prev: e.resetKeys,
                            reason: "keys"
                        }), this.setState(i)
                    }
                }
                render() {
                    let {
                        children: e,
                        fallbackRender: t,
                        FallbackComponent: a,
                        fallback: i
                    } = this.props, {
                        didCatch: o,
                        error: l
                    } = this.state, s = e;
                    if (o) {
                        let e = {
                            error: l,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ("function" == typeof t) s = t(e);
                        else if (a) s = (0, n.createElement)(a, e);
                        else if (null === i || (0, n.isValidElement)(i)) s = i;
                        else throw l
                    }
                    return (0, n.createElement)(r.Provider, {
                        value: {
                            didCatch: o,
                            error: l,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, s)
                }
            }
        },
        36317: (e, t, a) => {
            var n = a(11650);
            e.exports = function() {
                try {
                    var e = n(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch (e) {}
            }()
        },
        36781: (e, t, a) => {
            "use strict";
            let n;
            a.d(t, {
                b: () => at
            });
            var r, i, o, l, s, d, u, c = a(13897),
                _ = a(23798),
                f = a(71623),
                m = a(48768),
                g = a(21462),
                p = a(7135);
            let h = (...e) => {
                    console?.warn && (S(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e))
                },
                y = {},
                w = (...e) => {
                    S(e[0]) && y[e[0]] || (S(e[0]) && (y[e[0]] = new Date), h(...e))
                },
                b = (e, t) => () => {
                    if (e.isInitialized) t();
                    else {
                        let a = () => {
                            setTimeout(() => {
                                e.off("initialized", a)
                            }, 0), t()
                        };
                        e.on("initialized", a)
                    }
                },
                v = (e, t, a) => {
                    e.loadNamespaces(t, b(e, a))
                },
                x = (e, t, a, n) => {
                    S(a) && (a = [a]), a.forEach(t => {
                        0 > e.options.ns.indexOf(t) && e.options.ns.push(t)
                    }), e.loadLanguages(t, b(e, n))
                },
                S = e => "string" == typeof e,
                L = e => "object" == typeof e && null !== e,
                k = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
                T = {
                    "&amp;": "&",
                    "&#38;": "&",
                    "&lt;": "<",
                    "&#60;": "<",
                    "&gt;": ">",
                    "&#62;": ">",
                    "&apos;": "'",
                    "&#39;": "'",
                    "&quot;": '"',
                    "&#34;": '"',
                    "&nbsp;": " ",
                    "&#160;": " ",
                    "&copy;": "\xa9",
                    "&#169;": "\xa9",
                    "&reg;": "\xae",
                    "&#174;": "\xae",
                    "&hellip;": "…",
                    "&#8230;": "…",
                    "&#x2F;": "/",
                    "&#47;": "/"
                },
                B = e => T[e],
                D = {
                    bindI18n: "languageChanged",
                    bindI18nStore: "",
                    transEmptyNodeValue: "",
                    transSupportBasicHtmlNodes: !0,
                    transWrapTextNodes: "",
                    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
                    useSuspense: !0,
                    unescape: e => e.replace(k, B)
                },
                H = (e, t) => {
                    if (!e) return !1;
                    let a = e.props?.children ?? e.children;
                    return t ? a.length > 0 : !!a
                },
                N = e => {
                    if (!e) return [];
                    let t = e.props?.children ?? e.children;
                    return e.props?.i18nIsDynamicList ? P(t) : t
                },
                P = e => Array.isArray(e) ? e : [e],
                C = (e, t) => {
                    if (!e) return "";
                    let a = "",
                        n = P(e),
                        r = t?.transSupportBasicHtmlNodes ? t.transKeepBasicHtmlNodesFor ?? [] : [];
                    return n.forEach((e, n) => {
                        if (S(e)) a += `${e}`;
                        else if ((0, g.isValidElement)(e)) {
                            let {
                                props: i,
                                type: o
                            } = e, l = Object.keys(i).length, s = r.indexOf(o) > -1, d = i.children;
                            if (d || !s || l)
                                if (!d && (!s || l) || i.i18nIsDynamicList) a += `<${n}></${n}>`;
                                else if (s && 1 === l && S(d)) a += `<${o}>${d}</${o}>`;
                            else {
                                let e = C(d, t);
                                a += `<${n}>${e}</${n}>`
                            } else a += `<${o}/>`
                        } else if (null === e) h("Trans: the passed in value is invalid - seems you passed in a null child.");
                        else if (L(e)) {
                            let {
                                format: t,
                                ...n
                            } = e, r = Object.keys(n);
                            if (1 === r.length) {
                                let e = t ? `${r[0]}, ${t}` : r[0];
                                a += `{{${e}}}`
                            } else h("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", e)
                        } else h("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", e)
                    }), a
                },
                A = (0, g.createContext)();
            class E {
                constructor() {
                    this.usedNamespaces = {}
                }
                addUsedNamespaces(e) {
                    e.forEach(e => {
                        this.usedNamespaces[e] ??= !0
                    })
                }
                getUsedNamespaces() {
                    return Object.keys(this.usedNamespaces)
                }
            }

            function M({
                children: e,
                count: t,
                parent: a,
                i18nKey: r,
                context: i,
                tOptions: o = {},
                values: l,
                defaults: s,
                components: d,
                ns: u,
                i18n: c,
                t: _,
                shouldUnescape: f,
                ...m
            }) {
                let {
                    i18n: h,
                    defaultNS: y
                } = (0, g.useContext)(A) || {}, b = c || h || n, v = _ || b?.t.bind(b);
                return function({
                    children: e,
                    count: t,
                    parent: a,
                    i18nKey: r,
                    context: i,
                    tOptions: o = {},
                    values: l,
                    defaults: s,
                    components: d,
                    ns: u,
                    i18n: c,
                    t: _,
                    shouldUnescape: f,
                    ...m
                }) {
                    let h = c || n;
                    if (!h) return w("You will need to pass in an i18next instance by using i18nextReactModule"), e;
                    let y = _ || h.t.bind(h) || (e => e),
                        b = {
                            ...D,
                            ...h.options?.react
                        },
                        v = u || y.ns || h.options?.defaultNS;
                    v = S(v) ? [v] : v || ["translation"];
                    let x = C(e, b),
                        k = s || x || b.transEmptyNodeValue || r,
                        {
                            hashTransKey: T
                        } = b,
                        B = r || (T ? T(x || k) : x || k);
                    h.options?.interpolation?.defaultVariables && (l = l && Object.keys(l).length > 0 ? {
                        ...l,
                        ...h.options.interpolation.defaultVariables
                    } : {
                        ...h.options.interpolation.defaultVariables
                    });
                    let A = l || void 0 !== t || !e ? o.interpolation : {
                            interpolation: {
                                ...o.interpolation,
                                prefix: "#$?",
                                suffix: "?$#"
                            }
                        },
                        E = {
                            ...o,
                            context: i || o.context,
                            count: t,
                            ...l,
                            ...A,
                            defaultValue: k,
                            ns: v
                        },
                        M = B ? y(B, E) : k;
                    d && Object.keys(d).forEach(e => {
                        let t = d[e];
                        "function" == typeof t.type || !t.props || !t.props.children || 0 > M.indexOf(`${e}/>`) && 0 > M.indexOf(`${e} />`) || (d[e] = (0, g.createElement)(function() {
                            return (0, g.createElement)(g.Fragment, null, t)
                        }))
                    });
                    let j = ((e, t, a, n, r, i) => {
                            if ("" === t) return [];
                            let o = n.transKeepBasicHtmlNodesFor || [],
                                l = t && new RegExp(o.map(e => `<${e}`).join("|")).test(t);
                            if (!e && !l && !i) return [t];
                            let s = {},
                                d = e => {
                                    P(e).forEach(e => {
                                        S(e) || (H(e) ? d(N(e)) : L(e) && !(0, g.isValidElement)(e) && Object.assign(s, e))
                                    })
                                };
                            d(e);
                            let u = p.A.parse(`<0>${t}</0>`),
                                c = {
                                    ...s,
                                    ...r
                                },
                                _ = (e, t, a) => {
                                    let n, r = N(e),
                                        i = m(r, t.children, a);
                                    return Array.isArray(n = r) && n.every(g.isValidElement) && 0 === i.length || e.props?.i18nIsDynamicList ? r : i
                                },
                                f = (e, t, a, n, r) => {
                                    e.dummy ? (e.children = t, a.push((0, g.cloneElement)(e, {
                                        key: n
                                    }, r ? void 0 : t))) : a.push(...g.Children.map([e], e => {
                                        let a = {
                                            ...e.props
                                        };
                                        return delete a.i18nIsDynamicList, (0, g.createElement)(e.type, {
                                            ...a,
                                            key: n,
                                            ref: e.ref
                                        }, r ? null : t)
                                    }))
                                },
                                m = (t, r, s) => {
                                    let d = P(t);
                                    return P(r).reduce((t, r, u) => {
                                        let p = r.children?.[0]?.content && a.services.interpolator.interpolate(r.children[0].content, c, a.language);
                                        if ("tag" === r.type) {
                                            let i = d[parseInt(r.name, 10)];
                                            1 !== s.length || i || (i = s[0][r.name]), i || (i = {});
                                            let h = 0 !== Object.keys(r.attrs).length ? ((e, t) => {
                                                    let a = {
                                                        ...t
                                                    };
                                                    return a.props = Object.assign(e.props, t.props), a
                                                })({
                                                    props: r.attrs
                                                }, i) : i,
                                                y = (0, g.isValidElement)(h),
                                                w = y && H(r, !0) && !r.voidElement,
                                                b = l && L(h) && h.dummy && !y,
                                                v = L(e) && Object.hasOwnProperty.call(e, r.name);
                                            if (S(h)) {
                                                let e = a.services.interpolator.interpolate(h, c, a.language);
                                                t.push(e)
                                            } else if (H(h) || w) {
                                                let e = _(h, r, s);
                                                f(h, e, t, u)
                                            } else if (b) f(h, m(d, r.children, s), t, u);
                                            else if (Number.isNaN(parseFloat(r.name)))
                                                if (v) {
                                                    let e = _(h, r, s);
                                                    f(h, e, t, u, r.voidElement)
                                                } else if (n.transSupportBasicHtmlNodes && o.indexOf(r.name) > -1)
                                                if (r.voidElement) t.push((0, g.createElement)(r.name, {
                                                    key: `${r.name}-${u}`
                                                }));
                                                else {
                                                    let e = m(d, r.children, s);
                                                    t.push((0, g.createElement)(r.name, {
                                                        key: `${r.name}-${u}`
                                                    }, e))
                                                }
                                            else if (r.voidElement) t.push(`<${r.name} />`);
                                            else {
                                                let e = m(d, r.children, s);
                                                t.push(`<${r.name}>${e}</${r.name}>`)
                                            } else if (L(h) && !y) {
                                                let e = r.children[0] ? p : null;
                                                e && t.push(e)
                                            } else f(h, p, t, u, 1 !== r.children.length || !p)
                                        } else if ("text" === r.type) {
                                            let e = n.transWrapTextNodes,
                                                o = i ? n.unescape(a.services.interpolator.interpolate(r.content, c, a.language)) : a.services.interpolator.interpolate(r.content, c, a.language);
                                            e ? t.push((0, g.createElement)(e, {
                                                key: `${r.name}-${u}`
                                            }, o)) : t.push(o)
                                        }
                                        return t
                                    }, [])
                                };
                            return N(m([{
                                dummy: !0,
                                children: e || []
                            }], u, P(e || []))[0])
                        })(d || e, M, h, b, E, f),
                        O = a ?? b.defaultTransParent;
                    return O ? (0, g.createElement)(O, m, j) : j
                }({
                    children: e,
                    count: t,
                    parent: a,
                    i18nKey: r,
                    context: i,
                    tOptions: o,
                    values: l,
                    defaults: s,
                    components: d,
                    ns: u || v?.ns || y || b?.options?.defaultNS,
                    i18n: b,
                    t: _,
                    shouldUnescape: f,
                    ...m
                })
            }
            let j = (e, t, a, n) => e.getFixedT(t, a, n),
                O = (e, t = {}) => {
                    let {
                        i18n: a
                    } = t, {
                        i18n: r,
                        defaultNS: i
                    } = (0, g.useContext)(A) || {}, o = a || r || n;
                    if (o && !o.reportNamespaces && (o.reportNamespaces = new E), !o) {
                        w("You will need to pass in an i18next instance by using initReactI18next");
                        let e = (e, t) => S(t) ? t : L(t) && S(t.defaultValue) ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e,
                            t = [e, {}, !1];
                        return t.t = e, t.i18n = {}, t.ready = !1, t
                    }
                    o.options.react?.wait && w("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                    let l = {
                            ...D,
                            ...o.options.react,
                            ...t
                        },
                        {
                            useSuspense: s,
                            keyPrefix: d
                        } = l,
                        u = e || i || o.options?.defaultNS;
                    u = S(u) ? [u] : u || ["translation"], o.reportNamespaces.addUsedNamespaces?.(u);
                    let c = (o.isInitialized || o.initializedStoreOnce) && u.every(e => ((e, t, a = {}) => t.languages && t.languages.length ? t.hasLoadedNamespace(e, {
                            lng: a.lng,
                            precheck: (t, n) => {
                                if (a.bindI18n?.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !n(t.isLanguageChangingTo, e)) return !1
                            }
                        }) : (w("i18n.languages were undefined or empty", t.languages), !0))(e, o, l)),
                        _ = ((e, t, a, n) => (0, g.useCallback)(j(e, t, a, n), [e, t, a, n]))(o, t.lng || null, "fallback" === l.nsMode ? u : u[0], d),
                        f = () => _,
                        m = () => j(o, t.lng || null, "fallback" === l.nsMode ? u : u[0], d),
                        [p, h] = (0, g.useState)(f),
                        y = u.join();
                    t.lng && (y = `${t.lng}${y}`);
                    let b = ((e, t) => {
                            let a = (0, g.useRef)();
                            return (0, g.useEffect)(() => {
                                a.current = t ? a.current : e
                            }, [e, t]), a.current
                        })(y),
                        k = (0, g.useRef)(!0);
                    (0, g.useEffect)(() => {
                        let {
                            bindI18n: e,
                            bindI18nStore: a
                        } = l;
                        k.current = !0, c || s || (t.lng ? x(o, t.lng, u, () => {
                            k.current && h(m)
                        }) : v(o, u, () => {
                            k.current && h(m)
                        })), c && b && b !== y && k.current && h(m);
                        let n = () => {
                            k.current && h(m)
                        };
                        return e && o?.on(e, n), a && o?.store.on(a, n), () => {
                            k.current = !1, o && e?.split(" ").forEach(e => o.off(e, n)), a && o && a.split(" ").forEach(e => o.store.off(e, n))
                        }
                    }, [o, y]), (0, g.useEffect)(() => {
                        k.current && c && h(f)
                    }, [o, d, c]);
                    let T = [p, o, c];
                    if (T.t = p, T.i18n = o, T.ready = c, c || !c && !s) return T;
                    throw new Promise(e => {
                        t.lng ? x(o, t.lng, u, () => e()) : v(o, u, () => e())
                    })
                };

            function z({
                i18n: e,
                defaultNS: t,
                children: a
            }) {
                let n = (0, g.useMemo)(() => ({
                    i18n: e,
                    defaultNS: t
                }), [e, t]);
                return (0, g.createElement)(A.Provider, {
                    value: n
                }, a)
            }
            let R = {
                type: "logger",
                log(e) {
                    this.output("log", e)
                },
                warn(e) {
                    this.output("warn", e)
                },
                error(e) {
                    this.output("error", e)
                },
                output(e, t) {
                    console && console[e] && console[e].apply(console, t)
                }
            };
            class W {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.init(e, t)
                }
                init(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = t.prefix || "i18next:", this.logger = e || R, this.options = t, this.debug = t.debug
                }
                log() {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    return this.forward(t, "log", "", !0)
                }
                warn() {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    return this.forward(t, "warn", "", !0)
                }
                error() {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    return this.forward(t, "error", "")
                }
                deprecate() {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                }
                forward(e, t, a, n) {
                    return n && !this.debug ? null : ("string" == typeof e[0] && (e[0] = `${a}${this.prefix} ${e[0]}`), this.logger[t](e))
                }
                create(e) {
                    return new W(this.logger, {
                        ...{
                            prefix: `${this.prefix}:${e}:`
                        },
                        ...this.options
                    })
                }
                clone(e) {
                    return (e = e || this.options).prefix = e.prefix || this.prefix, new W(this.logger, e)
                }
            }
            var I = new W;
            class F {
                constructor() {
                    this.observers = {}
                }
                on(e, t) {
                    return e.split(" ").forEach(e => {
                        this.observers[e] || (this.observers[e] = new Map);
                        let a = this.observers[e].get(t) || 0;
                        this.observers[e].set(t, a + 1)
                    }), this
                }
                off(e, t) {
                    if (this.observers[e]) {
                        if (!t) return void delete this.observers[e];
                        this.observers[e].delete(t)
                    }
                }
                emit(e) {
                    for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) a[n - 1] = arguments[n];
                    this.observers[e] && Array.from(this.observers[e].entries()).forEach(e => {
                        let [t, n] = e;
                        for (let e = 0; e < n; e++) t(...a)
                    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(t => {
                        let [n, r] = t;
                        for (let t = 0; t < r; t++) n.apply(n, [e, ...a])
                    })
                }
            }
            let U = () => {
                    let e, t, a = new Promise((a, n) => {
                        e = a, t = n
                    });
                    return a.resolve = e, a.reject = t, a
                },
                $ = e => null == e ? "" : "" + e,
                X = /###/g,
                q = e => e && e.indexOf("###") > -1 ? e.replace(X, ".") : e,
                V = e => !e || "string" == typeof e,
                G = (e, t, a) => {
                    let n = "string" != typeof t ? t : t.split("."),
                        r = 0;
                    for (; r < n.length - 1;) {
                        if (V(e)) return {};
                        let t = q(n[r]);
                        !e[t] && a && (e[t] = new a), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++r
                    }
                    return V(e) ? {} : {
                        obj: e,
                        k: q(n[r])
                    }
                },
                K = (e, t, a) => {
                    let {
                        obj: n,
                        k: r
                    } = G(e, t, Object);
                    if (void 0 !== n || 1 === t.length) {
                        n[r] = a;
                        return
                    }
                    let i = t[t.length - 1],
                        o = t.slice(0, t.length - 1),
                        l = G(e, o, Object);
                    for (; void 0 === l.obj && o.length;) i = `${o[o.length-1]}.${i}`, (l = G(e, o = o.slice(0, o.length - 1), Object)) && l.obj && void 0 !== l.obj[`${l.k}.${i}`] && (l.obj = void 0);
                    l.obj[`${l.k}.${i}`] = a
                },
                Y = (e, t) => {
                    let {
                        obj: a,
                        k: n
                    } = G(e, t);
                    if (a) return a[n]
                },
                J = (e, t, a) => {
                    for (let n in t) "__proto__" !== n && "constructor" !== n && (n in e ? "string" == typeof e[n] || e[n] instanceof String || "string" == typeof t[n] || t[n] instanceof String ? a && (e[n] = t[n]) : J(e[n], t[n], a) : e[n] = t[n]);
                    return e
                },
                Q = e => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            var Z = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };
            let ee = e => "string" == typeof e ? e.replace(/[&<>"'\/]/g, e => Z[e]) : e;
            class et {
                constructor(e) {
                    this.capacity = e, this.regExpMap = new Map, this.regExpQueue = []
                }
                getRegExp(e) {
                    let t = this.regExpMap.get(e);
                    if (void 0 !== t) return t;
                    let a = new RegExp(e);
                    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, a), this.regExpQueue.push(e), a
                }
            }
            let ea = [" ", ",", "?", "!", ";"],
                en = new et(20),
                er = function(e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                    if (!e) return;
                    if (e[t]) return e[t];
                    let n = t.split(a),
                        r = e;
                    for (let e = 0; e < n.length;) {
                        let t;
                        if (!r || "object" != typeof r) return;
                        let i = "";
                        for (let o = e; o < n.length; ++o)
                            if (o !== e && (i += a), i += n[o], void 0 !== (t = r[i])) {
                                if (["string", "number", "boolean"].indexOf(typeof t) > -1 && o < n.length - 1) continue;
                                e += o - e + 1;
                                break
                            } r = t
                    }
                    return r
                },
                ei = e => e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
            class eo extends F {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        ns: ["translation"],
                        defaultNS: "translation"
                    };
                    super(), this.data = e || {}, this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
                }
                addNamespaces(e) {
                    0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
                }
                removeNamespaces(e) {
                    let t = this.options.ns.indexOf(e);
                    t > -1 && this.options.ns.splice(t, 1)
                }
                getResource(e, t, a) {
                    let n, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                        o = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
                    e.indexOf(".") > -1 ? n = e.split(".") : (n = [e, t], a && (Array.isArray(a) ? n.push(...a) : "string" == typeof a && i ? n.push(...a.split(i)) : n.push(a)));
                    let l = Y(this.data, n);
                    return (!l && !t && !a && e.indexOf(".") > -1 && (e = n[0], t = n[1], a = n.slice(2).join(".")), l || !o || "string" != typeof a) ? l : er(this.data && this.data[e] && this.data[e][t], a, i)
                }
                addResource(e, t, a, n) {
                    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                            silent: !1
                        },
                        i = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                        o = [e, t];
                    a && (o = o.concat(i ? a.split(i) : a)), e.indexOf(".") > -1 && (o = e.split("."), n = t, t = o[1]), this.addNamespaces(t), K(this.data, o, n), r.silent || this.emit("added", e, t, a, n)
                }
                addResources(e, t, a) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        silent: !1
                    };
                    for (let n in a)("string" == typeof a[n] || Array.isArray(a[n])) && this.addResource(e, t, n, a[n], {
                        silent: !0
                    });
                    n.silent || this.emit("added", e, t, a)
                }
                addResourceBundle(e, t, a, n, r) {
                    let i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                            silent: !1,
                            skipCopy: !1
                        },
                        o = [e, t];
                    e.indexOf(".") > -1 && (o = e.split("."), n = a, a = t, t = o[1]), this.addNamespaces(t);
                    let l = Y(this.data, o) || {};
                    i.skipCopy || (a = JSON.parse(JSON.stringify(a))), n ? J(l, a, r) : l = {
                        ...l,
                        ...a
                    }, K(this.data, o, l), i.silent || this.emit("added", e, t, a)
                }
                removeResourceBundle(e, t) {
                    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                }
                hasResourceBundle(e, t) {
                    return void 0 !== this.getResource(e, t)
                }
                getResourceBundle(e, t) {
                    return (t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI) ? {
                        ...this.getResource(e, t)
                    } : this.getResource(e, t)
                }
                getDataByLanguage(e) {
                    return this.data[e]
                }
                hasLanguageSomeTranslations(e) {
                    let t = this.getDataByLanguage(e);
                    return !!(t && Object.keys(t) || []).find(e => t[e] && Object.keys(t[e]).length > 0)
                }
                toJSON() {
                    return this.data
                }
            }
            var el = {
                processors: {},
                addPostProcessor(e) {
                    this.processors[e.name] = e
                },
                handle(e, t, a, n, r) {
                    return e.forEach(e => {
                        this.processors[e] && (t = this.processors[e].process(t, a, n, r))
                    }), t
                }
            };
            let es = {};
            class ed extends F {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(), ((e, t, a) => {
                        e.forEach(e => {
                            t[e] && (a[e] = t[e])
                        })
                    })(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = I.create("translator")
                }
                changeLanguage(e) {
                    e && (this.language = e)
                }
                exists(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    };
                    if (null == e) return !1;
                    let a = this.resolve(e, t);
                    return a && void 0 !== a.res
                }
                extractFromKey(e, t) {
                    let a = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                    void 0 === a && (a = ":");
                    let n = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                        r = t.ns || this.options.defaultNS || [],
                        i = a && e.indexOf(a) > -1,
                        o = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !((e, t, a) => {
                            t = t || "", a = a || "";
                            let n = ea.filter(e => 0 > t.indexOf(e) && 0 > a.indexOf(e));
                            if (0 === n.length) return !0;
                            let r = en.getRegExp(`(${n.map(e=>"?"===e?"\\?":e).join("|")})`),
                                i = !r.test(e);
                            if (!i) {
                                let t = e.indexOf(a);
                                t > 0 && !r.test(e.substring(0, t)) && (i = !0)
                            }
                            return i
                        })(e, a, n);
                    if (i && !o) {
                        let t = e.match(this.interpolator.nestingRegexp);
                        if (t && t.length > 0) return {
                            key: e,
                            namespaces: r
                        };
                        let i = e.split(a);
                        (a !== n || a === n && this.options.ns.indexOf(i[0]) > -1) && (r = i.shift()), e = i.join(n)
                    }
                    return "string" == typeof r && (r = [r]), {
                        key: e,
                        namespaces: r
                    }
                }
                translate(e, t, a) {
                    if ("object" != typeof t && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), "object" == typeof t && (t = {
                            ...t
                        }), t || (t = {}), null == e) return "";
                    Array.isArray(e) || (e = [String(e)]);
                    let n = void 0 !== t.returnDetails ? t.returnDetails : this.options.returnDetails,
                        r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                        {
                            key: i,
                            namespaces: o
                        } = this.extractFromKey(e[e.length - 1], t),
                        l = o[o.length - 1],
                        s = t.lng || this.language,
                        d = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (s && "cimode" === s.toLowerCase()) {
                        if (d) {
                            let e = t.nsSeparator || this.options.nsSeparator;
                            return n ? {
                                res: `${l}${e}${i}`,
                                usedKey: i,
                                exactUsedKey: i,
                                usedLng: s,
                                usedNS: l,
                                usedParams: this.getUsedParamsDetails(t)
                            } : `${l}${e}${i}`
                        }
                        return n ? {
                            res: i,
                            usedKey: i,
                            exactUsedKey: i,
                            usedLng: s,
                            usedNS: l,
                            usedParams: this.getUsedParamsDetails(t)
                        } : i
                    }
                    let u = this.resolve(e, t),
                        c = u && u.res,
                        _ = u && u.usedKey || i,
                        f = u && u.exactUsedKey || i,
                        m = Object.prototype.toString.apply(c),
                        g = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
                        p = !this.i18nFormat || this.i18nFormat.handleAsObject,
                        h = "string" != typeof c && "boolean" != typeof c && "number" != typeof c;
                    if (p && c && h && 0 > ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(m) && !("string" == typeof g && Array.isArray(c))) {
                        if (!t.returnObjects && !this.options.returnObjects) {
                            this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                            let e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(_, c, {
                                ...t,
                                ns: o
                            }) : `key '${i} (${this.language})' returned an object instead of string.`;
                            return n ? (u.res = e, u.usedParams = this.getUsedParamsDetails(t), u) : e
                        }
                        if (r) {
                            let e = Array.isArray(c),
                                a = e ? [] : {},
                                n = e ? f : _;
                            for (let e in c)
                                if (Object.prototype.hasOwnProperty.call(c, e)) {
                                    let i = `${n}${r}${e}`;
                                    a[e] = this.translate(i, {
                                        ...t,
                                        joinArrays: !1,
                                        ns: o
                                    }), a[e] === i && (a[e] = c[e])
                                } c = a
                        }
                    } else if (p && "string" == typeof g && Array.isArray(c))(c = c.join(g)) && (c = this.extendTranslation(c, e, t, a));
                    else {
                        let n = !1,
                            o = !1,
                            d = void 0 !== t.count && "string" != typeof t.count,
                            _ = ed.hasDefaultValue(t),
                            f = d ? this.pluralResolver.getSuffix(s, t.count, t) : "",
                            m = t.ordinal && d ? this.pluralResolver.getSuffix(s, t.count, {
                                ordinal: !1
                            }) : "",
                            g = d && !t.ordinal && 0 === t.count && this.pluralResolver.shouldUseIntlApi(),
                            p = g && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${f}`] || t[`defaultValue${m}`] || t.defaultValue;
                        !this.isValidLookup(c) && _ && (n = !0, c = p), this.isValidLookup(c) || (o = !0, c = i);
                        let h = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && o ? void 0 : c,
                            y = _ && p !== c && this.options.updateMissing;
                        if (o || n || y) {
                            if (this.logger.log(y ? "updateKey" : "missingKey", s, l, i, y ? p : c), r) {
                                let e = this.resolve(i, {
                                    ...t,
                                    keySeparator: !1
                                });
                                e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            let e = [],
                                a = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && a && a[0])
                                for (let t = 0; t < a.length; t++) e.push(a[t]);
                            else "all" === this.options.saveMissingTo ? e = this.languageUtils.toResolveHierarchy(t.lng || this.language) : e.push(t.lng || this.language);
                            let n = (e, a, n) => {
                                let r = _ && n !== c ? n : h;
                                this.options.missingKeyHandler ? this.options.missingKeyHandler(e, l, a, r, y, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(e, l, a, r, y, t), this.emit("missingKey", e, l, a, c)
                            };
                            this.options.saveMissing && (this.options.saveMissingPlurals && d ? e.forEach(e => {
                                let a = this.pluralResolver.getSuffixes(e, t);
                                g && t[`defaultValue${this.options.pluralSeparator}zero`] && 0 > a.indexOf(`${this.options.pluralSeparator}zero`) && a.push(`${this.options.pluralSeparator}zero`), a.forEach(a => {
                                    n([e], i + a, t[`defaultValue${a}`] || p)
                                })
                            }) : n(e, i, p))
                        }
                        c = this.extendTranslation(c, e, t, u, a), o && c === i && this.options.appendNamespaceToMissingKey && (c = `${l}:${i}`), (o || n) && this.options.parseMissingKeyHandler && (c = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${i}` : i, n ? c : void 0) : this.options.parseMissingKeyHandler(c))
                    }
                    return n ? (u.res = c, u.usedParams = this.getUsedParamsDetails(t), u) : c
                }
                extendTranslation(e, t, a, n, r) {
                    var i = this;
                    if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, {
                        ...this.options.interpolation.defaultVariables,
                        ...a
                    }, a.lng || this.language || n.usedLng, n.usedNS, n.usedKey, {
                        resolved: n
                    });
                    else if (!a.skipInterpolation) {
                        let o;
                        a.interpolation && this.interpolator.init({
                            ...a,
                            ...{
                                interpolation: {
                                    ...this.options.interpolation,
                                    ...a.interpolation
                                }
                            }
                        });
                        let l = "string" == typeof e && (a && a.interpolation && void 0 !== a.interpolation.skipOnVariables ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                        if (l) {
                            let t = e.match(this.interpolator.nestingRegexp);
                            o = t && t.length
                        }
                        let s = a.replace && "string" != typeof a.replace ? a.replace : a;
                        if (this.options.interpolation.defaultVariables && (s = {
                                ...this.options.interpolation.defaultVariables,
                                ...s
                            }), e = this.interpolator.interpolate(e, s, a.lng || this.language || n.usedLng, a), l) {
                            let t = e.match(this.interpolator.nestingRegexp);
                            o < (t && t.length) && (a.nest = !1)
                        }!a.lng && "v1" !== this.options.compatibilityAPI && n && n.res && (a.lng = this.language || n.usedLng), !1 !== a.nest && (e = this.interpolator.nest(e, function() {
                            for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                            return r && r[0] === n[0] && !a.context ? (i.logger.warn(`It seems you are nesting recursively key: ${n[0]} in key: ${t[0]}`), null) : i.translate(...n, t)
                        }, a)), a.interpolation && this.interpolator.reset()
                    }
                    let o = a.postProcess || this.options.postProcess,
                        l = "string" == typeof o ? [o] : o;
                    return null != e && l && l.length && !1 !== a.applyPostProcessor && (e = el.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
                        i18nResolved: {
                            ...n,
                            usedParams: this.getUsedParamsDetails(a)
                        },
                        ...a
                    } : a, this)), e
                }
                resolve(e) {
                    let t, a, n, r, i, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" == typeof e && (e = [e]), e.forEach(e => {
                        if (this.isValidLookup(t)) return;
                        let l = this.extractFromKey(e, o),
                            s = l.key;
                        a = s;
                        let d = l.namespaces;
                        this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
                        let u = void 0 !== o.count && "string" != typeof o.count,
                            c = u && !o.ordinal && 0 === o.count && this.pluralResolver.shouldUseIntlApi(),
                            _ = void 0 !== o.context && ("string" == typeof o.context || "number" == typeof o.context) && "" !== o.context,
                            f = o.lngs ? o.lngs : this.languageUtils.toResolveHierarchy(o.lng || this.language, o.fallbackLng);
                        d.forEach(e => {
                            this.isValidLookup(t) || (i = e, !es[`${f[0]}-${e}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(i) && (es[`${f[0]}-${e}`] = !0, this.logger.warn(`key "${a}" for languages "${f.join(", ")}" won't get resolved as namespace "${i}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), f.forEach(a => {
                                let i;
                                if (this.isValidLookup(t)) return;
                                r = a;
                                let l = [s];
                                if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(l, s, a, e, o);
                                else {
                                    let e;
                                    u && (e = this.pluralResolver.getSuffix(a, o.count, o));
                                    let t = `${this.options.pluralSeparator}zero`,
                                        n = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                    if (u && (l.push(s + e), o.ordinal && 0 === e.indexOf(n) && l.push(s + e.replace(n, this.options.pluralSeparator)), c && l.push(s + t)), _) {
                                        let a = `${s}${this.options.contextSeparator}${o.context}`;
                                        l.push(a), u && (l.push(a + e), o.ordinal && 0 === e.indexOf(n) && l.push(a + e.replace(n, this.options.pluralSeparator)), c && l.push(a + t))
                                    }
                                }
                                for (; i = l.pop();) this.isValidLookup(t) || (n = i, t = this.getResource(a, e, i, o))
                            }))
                        })
                    }), {
                        res: t,
                        usedKey: a,
                        exactUsedKey: n,
                        usedLng: r,
                        usedNS: i
                    }
                }
                isValidLookup(e) {
                    return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
                }
                getResource(e, t, a) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, a, n) : this.resourceStore.getResource(e, t, a, n)
                }
                getUsedParamsDetails() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.replace && "string" != typeof e.replace,
                        a = t ? e.replace : e;
                    if (t && void 0 !== e.count && (a.count = e.count), this.options.interpolation.defaultVariables && (a = {
                            ...this.options.interpolation.defaultVariables,
                            ...a
                        }), !t)
                        for (let e of (a = {
                                ...a
                            }, ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"])) delete a[e];
                    return a
                }
                static hasDefaultValue(e) {
                    let t = "defaultValue";
                    for (let a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a) && t === a.substring(0, t.length) && void 0 !== e[a]) return !0;
                    return !1
                }
            }
            let eu = e => e.charAt(0).toUpperCase() + e.slice(1);
            class ec {
                constructor(e) {
                    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = I.create("languageUtils")
                }
                getScriptPartFromCode(e) {
                    if (!(e = ei(e)) || 0 > e.indexOf("-")) return null;
                    let t = e.split("-");
                    return 2 === t.length || (t.pop(), "x" === t[t.length - 1].toLowerCase()) ? null : this.formatLanguageCode(t.join("-"))
                }
                getLanguagePartFromCode(e) {
                    if (!(e = ei(e)) || 0 > e.indexOf("-")) return e;
                    let t = e.split("-");
                    return this.formatLanguageCode(t[0])
                }
                formatLanguageCode(e) {
                    if ("string" == typeof e && e.indexOf("-") > -1) {
                        let t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                            a = e.split("-");
                        return this.options.lowerCaseLng ? a = a.map(e => e.toLowerCase()) : 2 === a.length ? (a[0] = a[0].toLowerCase(), a[1] = a[1].toUpperCase(), t.indexOf(a[1].toLowerCase()) > -1 && (a[1] = eu(a[1].toLowerCase()))) : 3 === a.length && (a[0] = a[0].toLowerCase(), 2 === a[1].length && (a[1] = a[1].toUpperCase()), "sgn" !== a[0] && 2 === a[2].length && (a[2] = a[2].toUpperCase()), t.indexOf(a[1].toLowerCase()) > -1 && (a[1] = eu(a[1].toLowerCase())), t.indexOf(a[2].toLowerCase()) > -1 && (a[2] = eu(a[2].toLowerCase()))), a.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }
                isSupportedCode(e) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                }
                getBestMatchFromCodes(e) {
                    let t;
                    return e ? (e.forEach(e => {
                        if (t) return;
                        let a = this.formatLanguageCode(e);
                        (!this.options.supportedLngs || this.isSupportedCode(a)) && (t = a)
                    }), !t && this.options.supportedLngs && e.forEach(e => {
                        if (t) return;
                        let a = this.getLanguagePartFromCode(e);
                        if (this.isSupportedCode(a)) return t = a;
                        t = this.options.supportedLngs.find(e => {
                            if (e === a || !(0 > e.indexOf("-") && 0 > a.indexOf("-")) && (e.indexOf("-") > 0 && 0 > a.indexOf("-") && e.substring(0, e.indexOf("-")) === a || 0 === e.indexOf(a) && a.length > 1)) return e
                        })
                    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
                }
                getFallbackCodes(e, t) {
                    if (!e) return [];
                    if ("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), Array.isArray(e)) return e;
                    if (!t) return e.default || [];
                    let a = e[t];
                    return a || (a = e[this.getScriptPartFromCode(t)]), a || (a = e[this.formatLanguageCode(t)]), a || (a = e[this.getLanguagePartFromCode(t)]), a || (a = e.default), a || []
                }
                toResolveHierarchy(e, t) {
                    let a = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                        n = [],
                        r = e => {
                            e && (this.isSupportedCode(e) ? n.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))
                        };
                    return "string" == typeof e && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && r(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && r(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(e))) : "string" == typeof e && r(this.formatLanguageCode(e)), a.forEach(e => {
                        0 > n.indexOf(e) && r(this.formatLanguageCode(e))
                    }), n
                }
            }
            let e_ = [{
                    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
                    nr: [1, 2],
                    fc: 1
                }, {
                    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                    nr: [1, 2],
                    fc: 2
                }, {
                    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                    nr: [1],
                    fc: 3
                }, {
                    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                    nr: [1, 2, 5],
                    fc: 4
                }, {
                    lngs: ["ar"],
                    nr: [0, 1, 2, 3, 11, 100],
                    fc: 5
                }, {
                    lngs: ["cs", "sk"],
                    nr: [1, 2, 5],
                    fc: 6
                }, {
                    lngs: ["csb", "pl"],
                    nr: [1, 2, 5],
                    fc: 7
                }, {
                    lngs: ["cy"],
                    nr: [1, 2, 3, 8],
                    fc: 8
                }, {
                    lngs: ["fr"],
                    nr: [1, 2],
                    fc: 9
                }, {
                    lngs: ["ga"],
                    nr: [1, 2, 3, 7, 11],
                    fc: 10
                }, {
                    lngs: ["gd"],
                    nr: [1, 2, 3, 20],
                    fc: 11
                }, {
                    lngs: ["is"],
                    nr: [1, 2],
                    fc: 12
                }, {
                    lngs: ["jv"],
                    nr: [0, 1],
                    fc: 13
                }, {
                    lngs: ["kw"],
                    nr: [1, 2, 3, 4],
                    fc: 14
                }, {
                    lngs: ["lt"],
                    nr: [1, 2, 10],
                    fc: 15
                }, {
                    lngs: ["lv"],
                    nr: [1, 2, 0],
                    fc: 16
                }, {
                    lngs: ["mk"],
                    nr: [1, 2],
                    fc: 17
                }, {
                    lngs: ["mnk"],
                    nr: [0, 1, 2],
                    fc: 18
                }, {
                    lngs: ["mt"],
                    nr: [1, 2, 11, 20],
                    fc: 19
                }, {
                    lngs: ["or"],
                    nr: [2, 1],
                    fc: 2
                }, {
                    lngs: ["ro"],
                    nr: [1, 2, 20],
                    fc: 20
                }, {
                    lngs: ["sl"],
                    nr: [5, 1, 2, 3],
                    fc: 21
                }, {
                    lngs: ["he", "iw"],
                    nr: [1, 2, 20, 21],
                    fc: 22
                }],
                ef = {
                    1: e => Number(e > 1),
                    2: e => Number(1 != e),
                    3: e => 0,
                    4: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2),
                    5: e => Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5),
                    6: e => Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2),
                    7: e => Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2),
                    8: e => Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3),
                    9: e => Number(e >= 2),
                    10: e => Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
                    11: e => Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3),
                    12: e => Number(e % 10 != 1 || e % 100 == 11),
                    13: e => Number(0 !== e),
                    14: e => Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3),
                    15: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2),
                    16: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2),
                    17: e => Number(+(1 != e && (e % 10 != 1 || e % 100 == 11))),
                    18: e => Number(0 == e ? 0 : 1 == e ? 1 : 2),
                    19: e => Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3),
                    20: e => Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2),
                    21: e => Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : 3 * (e % 100 == 3 || e % 100 == 4)),
                    22: e => Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                },
                em = ["v1", "v2", "v3"],
                eg = ["v4"],
                ep = {
                    zero: 0,
                    one: 1,
                    two: 2,
                    few: 3,
                    many: 4,
                    other: 5
                };
            class eh {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.languageUtils = e, this.options = t, this.logger = I.create("pluralResolver"), (!this.options.compatibilityJSON || eg.includes(this.options.compatibilityJSON)) && ("undefined" == typeof Intl || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = (() => {
                        let e = {};
                        return e_.forEach(t => {
                            t.lngs.forEach(a => {
                                e[a] = {
                                    numbers: t.nr,
                                    plurals: ef[t.fc]
                                }
                            })
                        }), e
                    })(), this.pluralRulesCache = {}
                }
                addRule(e, t) {
                    this.rules[e] = t
                }
                clearCache() {
                    this.pluralRulesCache = {}
                }
                getRule(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.shouldUseIntlApi()) try {
                        let a = ei("dev" === e ? "en" : e),
                            n = t.ordinal ? "ordinal" : "cardinal",
                            r = JSON.stringify({
                                cleanedCode: a,
                                type: n
                            });
                        if (r in this.pluralRulesCache) return this.pluralRulesCache[r];
                        let i = new Intl.PluralRules(a, {
                            type: n
                        });
                        return this.pluralRulesCache[r] = i, i
                    } catch (e) {
                        return
                    }
                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }
                needsPlural(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = this.getRule(e, t);
                    return this.shouldUseIntlApi() ? a && a.resolvedOptions().pluralCategories.length > 1 : a && a.numbers.length > 1
                }
                getPluralFormsOfKey(e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.getSuffixes(e, a).map(e => `${t}${e}`)
                }
                getSuffixes(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = this.getRule(e, t);
                    return a ? this.shouldUseIntlApi() ? a.resolvedOptions().pluralCategories.sort((e, t) => ep[e] - ep[t]).map(e => `${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`) : a.numbers.map(a => this.getSuffix(e, a, t)) : []
                }
                getSuffix(e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = this.getRule(e, a);
                    return n ? this.shouldUseIntlApi() ? `${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${n.select(t)}` : this.getSuffixRetroCompatible(n, t) : (this.logger.warn(`no plural rule found for: ${e}`), "")
                }
                getSuffixRetroCompatible(e, t) {
                    let a = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                        n = e.numbers[a];
                    this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === n ? n = "plural" : 1 === n && (n = ""));
                    let r = () => this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString();
                    return "v1" === this.options.compatibilityJSON ? 1 === n ? "" : "number" == typeof n ? `_plural_${n.toString()}` : r() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? r() : this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString()
                }
                shouldUseIntlApi() {
                    return !em.includes(this.options.compatibilityJSON)
                }
            }
            let ey = function(e, t, a) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".",
                        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                        i = ((e, t, a) => {
                            let n = Y(e, a);
                            return void 0 !== n ? n : Y(t, a)
                        })(e, t, a);
                    return !i && r && "string" == typeof a && void 0 === (i = er(e, a, n)) && (i = er(t, a, n)), i
                },
                ew = e => e.replace(/\$/g, "$$$$");
            class eb {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger = I.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || (e => e), this.init(e)
                }
                init() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.interpolation || (e.interpolation = {
                        escapeValue: !0
                    });
                    let {
                        escape: t,
                        escapeValue: a,
                        useRawValueToEscape: n,
                        prefix: r,
                        prefixEscaped: i,
                        suffix: o,
                        suffixEscaped: l,
                        formatSeparator: s,
                        unescapeSuffix: d,
                        unescapePrefix: u,
                        nestingPrefix: c,
                        nestingPrefixEscaped: _,
                        nestingSuffix: f,
                        nestingSuffixEscaped: m,
                        nestingOptionsSeparator: g,
                        maxReplaces: p,
                        alwaysFormat: h
                    } = e.interpolation;
                    this.escape = void 0 !== t ? t : ee, this.escapeValue = void 0 === a || a, this.useRawValueToEscape = void 0 !== n && n, this.prefix = r ? Q(r) : i || "{{", this.suffix = o ? Q(o) : l || "}}", this.formatSeparator = s || ",", this.unescapePrefix = d ? "" : u || "-", this.unescapeSuffix = this.unescapePrefix ? "" : d || "", this.nestingPrefix = c ? Q(c) : _ || Q("$t("), this.nestingSuffix = f ? Q(f) : m || Q(")"), this.nestingOptionsSeparator = g || ",", this.maxReplaces = p || 1e3, this.alwaysFormat = void 0 !== h && h, this.resetRegExp()
                }
                reset() {
                    this.options && this.init(this.options)
                }
                resetRegExp() {
                    let e = (e, t) => e && e.source === t ? (e.lastIndex = 0, e) : RegExp(t, "g");
                    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
                }
                interpolate(e, t, a, n) {
                    let r, i, o, l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
                        s = e => {
                            if (0 > e.indexOf(this.formatSeparator)) {
                                let r = ey(t, l, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                                return this.alwaysFormat ? this.format(r, void 0, a, {
                                    ...n,
                                    ...t,
                                    interpolationkey: e
                                }) : r
                            }
                            let r = e.split(this.formatSeparator),
                                i = r.shift().trim(),
                                o = r.join(this.formatSeparator).trim();
                            return this.format(ey(t, l, i, this.options.keySeparator, this.options.ignoreJSONStructure), o, a, {
                                ...n,
                                ...t,
                                interpolationkey: i
                            })
                        };
                    this.resetRegExp();
                    let d = n && n.missingInterpolationHandler || this.options.missingInterpolationHandler,
                        u = n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                    return [{
                        regex: this.regexpUnescape,
                        safeValue: e => ew(e)
                    }, {
                        regex: this.regexp,
                        safeValue: e => this.escapeValue ? ew(this.escape(e)) : ew(e)
                    }].forEach(t => {
                        for (o = 0; r = t.regex.exec(e);) {
                            let a = r[1].trim();
                            if (void 0 === (i = s(a)))
                                if ("function" == typeof d) {
                                    let t = d(e, r, n);
                                    i = "string" == typeof t ? t : ""
                                } else if (n && Object.prototype.hasOwnProperty.call(n, a)) i = "";
                            else if (u) {
                                i = r[0];
                                continue
                            } else this.logger.warn(`missed to pass in variable ${a} for interpolating ${e}`), i = "";
                            else "string" == typeof i || this.useRawValueToEscape || (i = $(i));
                            let l = t.safeValue(i);
                            if (e = e.replace(r[0], l), u ? (t.regex.lastIndex += i.length, t.regex.lastIndex -= r[0].length) : t.regex.lastIndex = 0, ++o >= this.maxReplaces) break
                        }
                    }), e
                }
                nest(e, t) {
                    let a, n, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = (e, t) => {
                            let a = this.nestingOptionsSeparator;
                            if (0 > e.indexOf(a)) return e;
                            let n = e.split(RegExp(`${a}[ ]*{`)),
                                i = `{${n[1]}`;
                            e = n[0];
                            let o = (i = this.interpolate(i, r)).match(/'/g),
                                l = i.match(/"/g);
                            (o && o.length % 2 == 0 && !l || l.length % 2 != 0) && (i = i.replace(/'/g, '"'));
                            try {
                                r = JSON.parse(i), t && (r = {
                                    ...t,
                                    ...r
                                })
                            } catch (t) {
                                return this.logger.warn(`failed parsing options string in nesting for key ${e}`, t), `${e}${a}${i}`
                            }
                            return r.defaultValue && r.defaultValue.indexOf(this.prefix) > -1 && delete r.defaultValue, e
                        };
                    for (; a = this.nestingRegexp.exec(e);) {
                        let l = [];
                        (r = (r = {
                            ...i
                        }).replace && "string" != typeof r.replace ? r.replace : r).applyPostProcessor = !1, delete r.defaultValue;
                        let s = !1;
                        if (-1 !== a[0].indexOf(this.formatSeparator) && !/{.*}/.test(a[1])) {
                            let e = a[1].split(this.formatSeparator).map(e => e.trim());
                            a[1] = e.shift(), l = e, s = !0
                        }
                        if ((n = t(o.call(this, a[1].trim(), r), r)) && a[0] === e && "string" != typeof n) return n;
                        "string" != typeof n && (n = $(n)), n || (this.logger.warn(`missed to resolve ${a[1]} for nesting ${e}`), n = ""), s && (n = l.reduce((e, t) => this.format(e, t, i.lng, {
                            ...i,
                            interpolationkey: a[1].trim()
                        }), n.trim())), e = e.replace(a[0], n), this.regexp.lastIndex = 0
                    }
                    return e
                }
            }
            let ev = e => {
                let t = {};
                return (a, n, r) => {
                    let i = r;
                    r && r.interpolationkey && r.formatParams && r.formatParams[r.interpolationkey] && r[r.interpolationkey] && (i = {
                        ...i,
                        [r.interpolationkey]: void 0
                    });
                    let o = n + JSON.stringify(i),
                        l = t[o];
                    return l || (l = e(ei(n), r), t[o] = l), l(a)
                }
            };
            class ex {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger = I.create("formatter"), this.options = e, this.formats = {
                        number: ev((e, t) => {
                            let a = new Intl.NumberFormat(e, {
                                ...t
                            });
                            return e => a.format(e)
                        }),
                        currency: ev((e, t) => {
                            let a = new Intl.NumberFormat(e, {
                                ...t,
                                style: "currency"
                            });
                            return e => a.format(e)
                        }),
                        datetime: ev((e, t) => {
                            let a = new Intl.DateTimeFormat(e, {
                                ...t
                            });
                            return e => a.format(e)
                        }),
                        relativetime: ev((e, t) => {
                            let a = new Intl.RelativeTimeFormat(e, {
                                ...t
                            });
                            return e => a.format(e, t.range || "day")
                        }),
                        list: ev((e, t) => {
                            let a = new Intl.ListFormat(e, {
                                ...t
                            });
                            return e => a.format(e)
                        })
                    }, this.init(e)
                }
                init(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            interpolation: {}
                        },
                        a = t.interpolation;
                    this.formatSeparator = a.formatSeparator ? a.formatSeparator : a.formatSeparator || ","
                }
                add(e, t) {
                    this.formats[e.toLowerCase().trim()] = t
                }
                addCached(e, t) {
                    this.formats[e.toLowerCase().trim()] = ev(t)
                }
                format(e, t, a) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        r = t.split(this.formatSeparator);
                    if (r.length > 1 && r[0].indexOf("(") > 1 && 0 > r[0].indexOf(")") && r.find(e => e.indexOf(")") > -1)) {
                        let e = r.findIndex(e => e.indexOf(")") > -1);
                        r[0] = [r[0], ...r.splice(1, e)].join(this.formatSeparator)
                    }
                    return r.reduce((e, t) => {
                        let {
                            formatName: r,
                            formatOptions: i
                        } = (e => {
                            let t = e.toLowerCase().trim(),
                                a = {};
                            if (e.indexOf("(") > -1) {
                                let n = e.split("(");
                                t = n[0].toLowerCase().trim();
                                let r = n[1].substring(0, n[1].length - 1);
                                "currency" === t && 0 > r.indexOf(":") ? a.currency || (a.currency = r.trim()) : "relativetime" === t && 0 > r.indexOf(":") ? a.range || (a.range = r.trim()) : r.split(";").forEach(e => {
                                    if (e) {
                                        let [t, ...n] = e.split(":"), r = n.join(":").trim().replace(/^'+|'+$/g, ""), i = t.trim();
                                        a[i] || (a[i] = r), "false" === r && (a[i] = !1), "true" === r && (a[i] = !0), isNaN(r) || (a[i] = parseInt(r, 10))
                                    }
                                })
                            }
                            return {
                                formatName: t,
                                formatOptions: a
                            }
                        })(t);
                        if (this.formats[r]) {
                            let t = e;
                            try {
                                let o = n && n.formatParams && n.formatParams[n.interpolationkey] || {},
                                    l = o.locale || o.lng || n.locale || n.lng || a;
                                t = this.formats[r](e, l, {
                                    ...i,
                                    ...n,
                                    ...o
                                })
                            } catch (e) {
                                this.logger.warn(e)
                            }
                            return t
                        }
                        return this.logger.warn(`there was no format function for ${r}`), e
                    }, e)
                }
            }
            class eS extends F {
                constructor(e, t, a) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    super(), this.backend = e, this.store = t, this.services = a, this.languageUtils = a.languageUtils, this.options = n, this.logger = I.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = n.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = n.maxRetries >= 0 ? n.maxRetries : 5, this.retryTimeout = n.retryTimeout >= 1 ? n.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(a, n.backend, n)
                }
                queueLoad(e, t, a, n) {
                    let r = {},
                        i = {},
                        o = {},
                        l = {};
                    return e.forEach(e => {
                        let n = !0;
                        t.forEach(t => {
                            let o = `${e}|${t}`;
                            !a.reload && this.store.hasResourceBundle(e, t) ? this.state[o] = 2 : this.state[o] < 0 || (1 === this.state[o] ? void 0 === i[o] && (i[o] = !0) : (this.state[o] = 1, n = !1, void 0 === i[o] && (i[o] = !0), void 0 === r[o] && (r[o] = !0), void 0 === l[t] && (l[t] = !0)))
                        }), n || (o[e] = !0)
                    }), (Object.keys(r).length || Object.keys(i).length) && this.queue.push({
                        pending: i,
                        pendingCount: Object.keys(i).length,
                        loaded: {},
                        errors: [],
                        callback: n
                    }), {
                        toLoad: Object.keys(r),
                        pending: Object.keys(i),
                        toLoadLanguages: Object.keys(o),
                        toLoadNamespaces: Object.keys(l)
                    }
                }
                loaded(e, t, a) {
                    let n = e.split("|"),
                        r = n[0],
                        i = n[1];
                    t && this.emit("failedLoading", r, i, t), !t && a && this.store.addResourceBundle(r, i, a, void 0, void 0, {
                        skipCopy: !0
                    }), this.state[e] = t ? -1 : 2, t && a && (this.state[e] = 0);
                    let o = {};
                    this.queue.forEach(a => {
                        ((e, t, a, n) => {
                            let {
                                obj: r,
                                k: i
                            } = G(e, t, Object);
                            r[i] = r[i] || [], r[i].push(a)
                        })(a.loaded, [r], i), void 0 !== a.pending[e] && (delete a.pending[e], a.pendingCount--), t && a.errors.push(t), 0 !== a.pendingCount || a.done || (Object.keys(a.loaded).forEach(e => {
                            o[e] || (o[e] = {});
                            let t = a.loaded[e];
                            t.length && t.forEach(t => {
                                void 0 === o[e][t] && (o[e][t] = !0)
                            })
                        }), a.done = !0, a.errors.length ? a.callback(a.errors) : a.callback())
                    }), this.emit("loaded", o), this.queue = this.queue.filter(e => !e.done)
                }
                read(e, t, a) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout,
                        i = arguments.length > 5 ? arguments[5] : void 0;
                    if (!e.length) return i(null, {});
                    if (this.readingCalls >= this.maxParallelReads) return void this.waitingReads.push({
                        lng: e,
                        ns: t,
                        fcName: a,
                        tried: n,
                        wait: r,
                        callback: i
                    });
                    this.readingCalls++;
                    let o = (o, l) => {
                            if (this.readingCalls--, this.waitingReads.length > 0) {
                                let e = this.waitingReads.shift();
                                this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback)
                            }
                            if (o && l && n < this.maxRetries) return void setTimeout(() => {
                                this.read.call(this, e, t, a, n + 1, 2 * r, i)
                            }, r);
                            i(o, l)
                        },
                        l = this.backend[a].bind(this.backend);
                    if (2 === l.length) {
                        try {
                            let a = l(e, t);
                            a && "function" == typeof a.then ? a.then(e => o(null, e)).catch(o) : o(null, a)
                        } catch (e) {
                            o(e)
                        }
                        return
                    }
                    return l(e, t, o)
                }
                prepareLoading(e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = arguments.length > 3 ? arguments[3] : void 0;
                    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
                    "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                    let r = this.queueLoad(e, t, a, n);
                    if (!r.toLoad.length) return r.pending.length || n(), null;
                    r.toLoad.forEach(e => {
                        this.loadOne(e)
                    })
                }
                load(e, t, a) {
                    this.prepareLoading(e, t, {}, a)
                }
                reload(e, t, a) {
                    this.prepareLoading(e, t, {
                        reload: !0
                    }, a)
                }
                loadOne(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        a = e.split("|"),
                        n = a[0],
                        r = a[1];
                    this.read(n, r, "read", void 0, void 0, (a, i) => {
                        a && this.logger.warn(`${t}loading namespace ${r} for language ${n} failed`, a), !a && i && this.logger.log(`${t}loaded namespace ${r} for language ${n}`, i), this.loaded(e, a, i)
                    })
                }
                saveMissing(e, t, a, n, r) {
                    let i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                        o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {};
                    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) return void this.logger.warn(`did not save key "${a}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                    if (null != a && "" !== a) {
                        if (this.backend && this.backend.create) {
                            let l = {
                                    ...i,
                                    isUpdate: r
                                },
                                s = this.backend.create.bind(this.backend);
                            if (s.length < 6) try {
                                let r;
                                (r = 5 === s.length ? s(e, t, a, n, l) : s(e, t, a, n)) && "function" == typeof r.then ? r.then(e => o(null, e)).catch(o) : o(null, r)
                            } catch (e) {
                                o(e)
                            } else s(e, t, a, n, o, l)
                        }
                        e && e[0] && this.store.addResource(e[0], t, a, n)
                    }
                }
            }
            let eL = () => ({
                    debug: !1,
                    initImmediate: !0,
                    ns: ["translation"],
                    defaultNS: ["translation"],
                    fallbackLng: ["dev"],
                    fallbackNS: !1,
                    supportedLngs: !1,
                    nonExplicitSupportedLngs: !1,
                    load: "all",
                    preload: !1,
                    simplifyPluralSuffix: !0,
                    keySeparator: ".",
                    nsSeparator: ":",
                    pluralSeparator: "_",
                    contextSeparator: "_",
                    partialBundledLanguages: !1,
                    saveMissing: !1,
                    updateMissing: !1,
                    saveMissingTo: "fallback",
                    saveMissingPlurals: !0,
                    missingKeyHandler: !1,
                    missingInterpolationHandler: !1,
                    postProcess: !1,
                    postProcessPassResolved: !1,
                    returnNull: !1,
                    returnEmptyString: !0,
                    returnObjects: !1,
                    joinArrays: !1,
                    returnedObjectHandler: !1,
                    parseMissingKeyHandler: !1,
                    appendNamespaceToMissingKey: !1,
                    appendNamespaceToCIMode: !1,
                    overloadTranslationOptionHandler: e => {
                        let t = {};
                        if ("object" == typeof e[1] && (t = e[1]), "string" == typeof e[1] && (t.defaultValue = e[1]), "string" == typeof e[2] && (t.tDescription = e[2]), "object" == typeof e[2] || "object" == typeof e[3]) {
                            let a = e[3] || e[2];
                            Object.keys(a).forEach(e => {
                                t[e] = a[e]
                            })
                        }
                        return t
                    },
                    interpolation: {
                        escapeValue: !0,
                        format: e => e,
                        prefix: "{{",
                        suffix: "}}",
                        formatSeparator: ",",
                        unescapePrefix: "-",
                        nestingPrefix: "$t(",
                        nestingSuffix: ")",
                        nestingOptionsSeparator: ",",
                        maxReplaces: 1e3,
                        skipOnVariables: !0
                    }
                }),
                ek = e => ("string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && 0 > e.supportedLngs.indexOf("cimode") && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e),
                eT = () => {};
            class eB extends F {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    if (super(), this.options = ek(e), this.services = {}, this.logger = I, this.modules = {
                            external: []
                        }, (e => {
                            Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t => {
                                "function" == typeof e[t] && (e[t] = e[t].bind(e))
                            })
                        })(this), t && !this.isInitialized && !e.isClone) {
                        if (!this.options.initImmediate) return this.init(e, t), this;
                        setTimeout(() => {
                            this.init(e, t)
                        }, 0)
                    }
                }
                init() {
                    var e = this;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = arguments.length > 1 ? arguments[1] : void 0;
                    this.isInitializing = !0, "function" == typeof t && (a = t, t = {}), !t.defaultNS && !1 !== t.defaultNS && t.ns && ("string" == typeof t.ns ? t.defaultNS = t.ns : 0 > t.ns.indexOf("translation") && (t.defaultNS = t.ns[0]));
                    let n = eL();
                    this.options = {
                        ...n,
                        ...this.options,
                        ...ek(t)
                    }, "v1" !== this.options.compatibilityAPI && (this.options.interpolation = {
                        ...n.interpolation,
                        ...this.options.interpolation
                    }), void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator), void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator);
                    let r = e => e ? "function" == typeof e ? new e : e : null;
                    if (!this.options.isClone) {
                        let t;
                        this.modules.logger ? I.init(r(this.modules.logger), this.options) : I.init(null, this.options), this.modules.formatter ? t = this.modules.formatter : "undefined" != typeof Intl && (t = ex);
                        let a = new ec(this.options);
                        this.store = new eo(this.options.resources, this.options);
                        let i = this.services;
                        i.logger = I, i.resourceStore = this.store, i.languageUtils = a, i.pluralResolver = new eh(a, {
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }), t && (!this.options.interpolation.format || this.options.interpolation.format === n.interpolation.format) && (i.formatter = r(t), i.formatter.init(i, this.options), this.options.interpolation.format = i.formatter.format.bind(i.formatter)), i.interpolator = new eb(this.options), i.utils = {
                            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                        }, i.backendConnector = new eS(r(this.modules.backend), i.resourceStore, i, this.options), i.backendConnector.on("*", function(t) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++) n[r - 1] = arguments[r];
                            e.emit(t, ...n)
                        }), this.modules.languageDetector && (i.languageDetector = r(this.modules.languageDetector), i.languageDetector.init && i.languageDetector.init(i, this.options.detection, this.options)), this.modules.i18nFormat && (i.i18nFormat = r(this.modules.i18nFormat), i.i18nFormat.init && i.i18nFormat.init(this)), this.translator = new ed(this.services, this.options), this.translator.on("*", function(t) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++) n[r - 1] = arguments[r];
                            e.emit(t, ...n)
                        }), this.modules.external.forEach(e => {
                            e.init && e.init(this)
                        })
                    }
                    if (this.format = this.options.interpolation.format, a || (a = eT), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                        let e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0])
                    }
                    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(t => {
                        this[t] = function() {
                            return e.store[t](...arguments)
                        }
                    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(t => {
                        this[t] = function() {
                            return e.store[t](...arguments), e
                        }
                    });
                    let i = U(),
                        o = () => {
                            let e = (e, t) => {
                                this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), i.resolve(t), a(e, t)
                            };
                            if (this.languages && "v1" !== this.options.compatibilityAPI && !this.isInitialized) return e(null, this.t.bind(this));
                            this.changeLanguage(this.options.lng, e)
                        };
                    return this.options.resources || !this.options.initImmediate ? o() : setTimeout(o, 0), i
                }
                loadResources(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT,
                        a = t,
                        n = "string" == typeof e ? e : this.language;
                    if ("function" == typeof e && (a = e), !this.options.resources || this.options.partialBundledLanguages) {
                        if (n && "cimode" === n.toLowerCase() && (!this.options.preload || 0 === this.options.preload.length)) return a();
                        let e = [],
                            t = t => {
                                t && "cimode" !== t && this.services.languageUtils.toResolveHierarchy(t).forEach(t => {
                                    "cimode" !== t && 0 > e.indexOf(t) && e.push(t)
                                })
                            };
                        n ? t(n) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e => t(e)), this.options.preload && this.options.preload.forEach(e => t(e)), this.services.backendConnector.load(e, this.options.ns, e => {
                            e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), a(e)
                        })
                    } else a(null)
                }
                reloadResources(e, t, a) {
                    let n = U();
                    return "function" == typeof e && (a = e, e = void 0), "function" == typeof t && (a = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), a || (a = eT), this.services.backendConnector.reload(e, t, e => {
                        n.resolve(), a(e)
                    }), n
                }
                use(e) {
                    if (!e) throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                    if (!e.type) throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                    return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && el.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this
                }
                setResolvedLanguage(e) {
                    if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
                        for (let e = 0; e < this.languages.length; e++) {
                            let t = this.languages[e];
                            if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
                                this.resolvedLanguage = t;
                                break
                            }
                        }
                }
                changeLanguage(e, t) {
                    var a = this;
                    this.isLanguageChangingTo = e;
                    let n = U();
                    this.emit("languageChanging", e);
                    let r = e => {
                            this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e)
                        },
                        i = (e, i) => {
                            i ? (r(i), this.translator.changeLanguage(i), this.isLanguageChangingTo = void 0, this.emit("languageChanged", i), this.logger.log("languageChanged", i)) : this.isLanguageChangingTo = void 0, n.resolve(function() {
                                return a.t(...arguments)
                            }), t && t(e, function() {
                                return a.t(...arguments)
                            })
                        },
                        o = t => {
                            e || t || !this.services.languageDetector || (t = []);
                            let a = "string" == typeof t ? t : this.services.languageUtils.getBestMatchFromCodes(t);
                            a && (this.language || r(a), this.translator.language || this.translator.changeLanguage(a), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(a)), this.loadResources(a, e => {
                                i(e, a)
                            })
                        };
                    return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect()), n
                }
                getFixedT(e, t, a) {
                    var n = this;
                    let r = function(e, t) {
                        let i, o;
                        if ("object" != typeof t) {
                            for (var l = arguments.length, s = Array(l > 2 ? l - 2 : 0), d = 2; d < l; d++) s[d - 2] = arguments[d];
                            i = n.options.overloadTranslationOptionHandler([e, t].concat(s))
                        } else i = {
                            ...t
                        };
                        i.lng = i.lng || r.lng, i.lngs = i.lngs || r.lngs, i.ns = i.ns || r.ns, "" !== i.keyPrefix && (i.keyPrefix = i.keyPrefix || a || r.keyPrefix);
                        let u = n.options.keySeparator || ".";
                        return o = i.keyPrefix && Array.isArray(e) ? e.map(e => `${i.keyPrefix}${u}${e}`) : i.keyPrefix ? `${i.keyPrefix}${u}${e}` : e, n.t(o, i)
                    };
                    return "string" == typeof e ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = a, r
                }
                t() {
                    return this.translator && this.translator.translate(...arguments)
                }
                exists() {
                    return this.translator && this.translator.exists(...arguments)
                }
                setDefaultNamespace(e) {
                    this.options.defaultNS = e
                }
                hasLoadedNamespace(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                    if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                    let a = t.lng || this.resolvedLanguage || this.languages[0],
                        n = !!this.options && this.options.fallbackLng,
                        r = this.languages[this.languages.length - 1];
                    if ("cimode" === a.toLowerCase()) return !0;
                    let i = (e, t) => {
                        let a = this.services.backendConnector.state[`${e}|${t}`];
                        return -1 === a || 0 === a || 2 === a
                    };
                    if (t.precheck) {
                        let e = t.precheck(this, i);
                        if (void 0 !== e) return e
                    }
                    return !!(this.hasResourceBundle(a, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || i(a, e) && (!n || i(r, e)))
                }
                loadNamespaces(e, t) {
                    let a = U();
                    return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach(e => {
                        0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
                    }), this.loadResources(e => {
                        a.resolve(), t && t(e)
                    }), a) : (t && t(), Promise.resolve())
                }
                loadLanguages(e, t) {
                    let a = U();
                    "string" == typeof e && (e = [e]);
                    let n = this.options.preload || [],
                        r = e.filter(e => 0 > n.indexOf(e) && this.services.languageUtils.isSupportedCode(e));
                    return r.length ? (this.options.preload = n.concat(r), this.loadResources(e => {
                        a.resolve(), t && t(e)
                    }), a) : (t && t(), Promise.resolve())
                }
                dir(e) {
                    return (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), e) ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf((this.services && this.services.languageUtils || new ec(eL())).getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr" : "rtl"
                }
                static createInstance() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return new eB(e, t)
                }
                cloneInstance() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT,
                        a = e.forkResourceStore;
                    a && delete e.forkResourceStore;
                    let n = {
                            ...this.options,
                            ...e,
                            isClone: !0
                        },
                        r = new eB(n);
                    return (void 0 !== e.debug || void 0 !== e.prefix) && (r.logger = r.logger.clone(e)), ["store", "services", "language"].forEach(e => {
                        r[e] = this[e]
                    }), r.services = {
                        ...this.services
                    }, r.services.utils = {
                        hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
                    }, a && (r.store = new eo(this.store.data, n), r.services.resourceStore = r.store), r.translator = new ed(r.services, n), r.translator.on("*", function(e) {
                        for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) a[n - 1] = arguments[n];
                        r.emit(e, ...a)
                    }), r.init(n, t), r.translator.options = n, r.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
                    }, r
                }
                toJSON() {
                    return {
                        options: this.options,
                        store: this.store,
                        language: this.language,
                        languages: this.languages,
                        resolvedLanguage: this.resolvedLanguage
                    }
                }
            }
            let eD = eB.createInstance();
            eD.createInstance = eB.createInstance;
            let eH = eD.createInstance;
            eD.dir, eD.init, eD.loadResources, eD.reloadResources, eD.use, eD.changeLanguage, eD.getFixedT, eD.t, eD.exists, eD.setDefaultNamespace, eD.hasLoadedNamespace, eD.loadNamespaces, eD.loadLanguages;
            let eN = {
                    "da-DK": {
                        topNav: {
                            about: "Om os",
                            advertising: "Advertising",
                            accountSettings: "Kontoindstillinger",
                            blog: "Blog",
                            whatsNew: "Nyt",
                            branding: "Branding",
                            customize: "Tilpas din side",
                            contacts: "Kontakter",
                            "create-review": "Opret en gennemgang",
                            explore: {
                                "advertising-policies": "Reklamepolitik",
                                advertising: "Reklam\xe9r hos os",
                                awards: "Anerkendelser og priser",
                                careers: "Karriere",
                                collect: "Opret moodboards",
                                company: "Virksomhed",
                                csr: "Virksomhedens sociale ansvar",
                                culture: "Kultur",
                                distribution: "Distribuer dit indhold",
                                getBenefitsAndPerks: "F\xe5 goder og fordele",
                                features: "Alle funktioner",
                                "file-sharing": "Del dine filer",
                                leadership: "Lederskab",
                                legal: "Juridisk & Privatliv",
                                newsroom: "Presserum",
                                photographers: "Til fotografer",
                                videographers: "For videografer",
                                "designers-illustrators": "For designere og illustratorer",
                                "for-businesses": "Til virksomheder",
                                "responsible-advertising": "Ansvarlig praksis",
                                security: "Beskyt dine filer",
                                sellFiles: "Bliv betalt for dit arbejde",
                                students: "Til studerende",
                                teams: "Samarbejd med dit team"
                            },
                            features: "Egenskaber",
                            gotoWorkspace: "G\xe5 til dit arbejdsomr\xe5de",
                            help: "Hj\xe6lp",
                            home: "Hjem",
                            login: "Log ind",
                            logout: "log ud",
                            members_one: "{{count}} medlem",
                            members_other: "{{count}} medlemmer",
                            more: "Mere",
                            "plan-tiers": {
                                collaborate: "Samarbejd abonnement",
                                distribute: "Distribuer abonnement",
                                free: "Grundl\xe6ggende abonnement",
                                free_legacy: "Gratis abonnement",
                                lite: "Lite-abonnement",
                                plus: "Pro-abonnement",
                                premium_2022: "Premium-abonnement",
                                pro_2022: "Pro-abonnement",
                                starter: "Starter-abonnement",
                                transfer: "Overf\xf8r abonnement",
                                ultimate: "Ultimate-abonnement",
                                enterprise: "Teams-abonnement",
                                enterprise_custom_contract: "Enterprise-abonnement"
                            },
                            "powered-by": "Leveret af <1>WeTransfer</1>",
                            pricing: "Priser",
                            resources: "Ressourcer",
                            "send-files": "Send filer",
                            signup: "Tilmeld dig",
                            storage_widget: {
                                compare: "Sammenlign planer",
                                description: "Inkluder overf\xf8rsler og gennemgange",
                                remove_limits: "Fjern gr\xe6nser",
                                usage: "{{usedStorage}}/{{totalStorage}} uploadet de sidste 30 dage"
                            },
                            transfer_count_widget: {
                                usage: "{{usedTransfers}}/{{totalTransfers}} overf\xf8rsler uploadet de sidste 30 dage"
                            },
                            toggle_account_menu: "Vis/skjul kontomenu",
                            toggle_menu: "Vis/skjul menu",
                            transfers: "Overf\xf8rsler",
                            upgrade: "Opgrad\xe9r",
                            "use-cases": "Anvendelsesomr\xe5der",
                            workspaceSettings: "Indstillinger for arbejdsomr\xe5de",
                            "wetransfer-ultimate": "WeTransfer <br /> Ultimate",
                            product_updates_dropdown: {
                                title: "Produktopdateringer",
                                empty_title: "G\xe5 aldrig glip af noget!",
                                empty_subtitle: "Det er her, dine meddelelser vil dukke op.",
                                previous_notifications: "Tidligere meddelelser"
                            }
                        }
                    },
                    "de-DE": {
                        topNav: {
                            about: "\xdcber uns",
                            advertising: "Advertising",
                            accountSettings: "Kontoeinstellungen",
                            blog: "Blog",
                            whatsNew: "Neuigkeiten",
                            branding: "Branding",
                            customize: "Deine Seite individuell gestalten",
                            contacts: "Kontakte",
                            "create-review": "Review erstellen",
                            explore: {
                                "advertising-policies": "Werberichtlinien",
                                advertising: "Werbepartner werden",
                                awards: "Auszeichnungen",
                                careers: "Jobs",
                                collect: "Moodboards erstellen",
                                company: "Unternehmen",
                                csr: "Soziale Unternehmensverantwortung",
                                culture: "Kultur",
                                distribution: "Inhalte verbreiten",
                                getBenefitsAndPerks: "Vorteile und Verg\xfcnstigungen sichern",
                                features: "Alle Funktionen",
                                "file-sharing": "Dateien teilen",
                                leadership: "F\xfchrungsqualit\xe4ten",
                                legal: "Rechtliches & Datenschutz",
                                newsroom: "Nachrichten",
                                photographers: "F\xfcr Fotografen",
                                videographers: "F\xfcr Videografen",
                                "designers-illustrators": "F\xfcr Designer und Illustratoren",
                                "for-businesses": "F\xfcr Unternehmen",
                                "responsible-advertising": "Verantwortungsbewusste Praktiken",
                                security: "Dateien sch\xfctzen",
                                sellFiles: "Lass dich f\xfcr deine Arbeit bezahlen",
                                students: "F\xfcr Studierende",
                                teams: "Im Team zusammenarbeiten"
                            },
                            features: "Funktionen",
                            gotoWorkspace: "Zu deinem Arbeitsbereich gehen",
                            help: "Hilfe",
                            home: "Startseite",
                            login: "Anmelden",
                            logout: "Abmelden",
                            members_one: "{{count}} Mitglied",
                            members_other: "{{count}} Mitglieder",
                            more: "mehr",
                            "plan-tiers": {
                                collaborate: "Zusammenarbeitsplan",
                                distribute: "Verteilungsplan",
                                free: "Basisplan",
                                free_legacy: "Kostenloses Abo",
                                lite: "Lite-Abo",
                                plus: "Pro-Plan",
                                premium_2022: "Premium-Plan",
                                pro_2022: "Pro-Plan",
                                starter: "Starter-Plan",
                                transfer: "\xdcbertragungsplan",
                                ultimate: "Ultimate-Plan",
                                enterprise: "Teams-Plan",
                                enterprise_custom_contract: "Enterprise-Plan"
                            },
                            "powered-by": "Powered by <1>WeTransfer</1>",
                            pricing: "Preise",
                            resources: "Ressourcen",
                            "send-files": "Dateien senden",
                            signup: "Jetzt registrieren",
                            storage_widget: {
                                compare: "Pl\xe4ne vergleichen",
                                description: "Beinhaltet \xdcbertragungen und Reviews",
                                remove_limits: "Limit entfernen",
                                usage: "{{usedStorage}}/{{totalStorage}} hochgeladen in den letzten 30 Tagen"
                            },
                            transfer_count_widget: {
                                usage: "{{usedTransfers}}/{{totalTransfers}} \xdcbertragungen in den letzten 30 Tagen hochgeladen"
                            },
                            toggle_account_menu: "Kontomen\xfc aktivieren/deaktivieren",
                            toggle_menu: "Men\xfc aktivieren/deaktivieren",
                            transfers: "\xdcbertragungen",
                            upgrade: "Upgrade",
                            "use-cases": "Anwendungsf\xe4lle",
                            workspaceSettings: "Arbeitsbereich-Einstellungen",
                            "wetransfer-ultimate": "WeTransfer <br /> Ultimate",
                            product_updates_dropdown: {
                                title: "Produktaktualisierungen",
                                empty_title: "Nie verpassen Sie ein Update!",
                                empty_subtitle: "Hier werden deine Benachrichtigungen angezeigt.",
                                previous_notifications: "Vorherige Benachrichtigungen"
                            }
                        }
                    },
                    "en-US": {
                        topNav: {
                            about: "About us",
                            advertising: "Advertising",
                            accountSettings: "Account settings",
                            blog: "Blog",
                            whatsNew: "What's new",
                            branding: "Branding",
                            customize: "Customize your page",
                            contacts: "Contacts",
                            "create-review": "Create review",
                            explore: {
                                "advertising-policies": "Ad policies",
                                advertising: "Advertise with us",
                                awards: "Awards",
                                careers: "Careers",
                                collect: "Create moodboards",
                                company: "Company",
                                csr: "Corporate social responsibility",
                                culture: "Culture",
                                distribution: "Distribute your content",
                                getBenefitsAndPerks: "Get benefits & perks",
                                features: "All features",
                                "file-sharing": "Share your files",
                                leadership: "Leadership",
                                legal: "Legal & Privacy",
                                newsroom: "Newsroom",
                                photographers: "For photographers",
                                videographers: "For videographers",
                                "designers-illustrators": "For designers & illustrators",
                                "for-businesses": "For businesses",
                                "responsible-advertising": "Responsible practices",
                                security: "Protect your files",
                                sellFiles: "Get paid for your work",
                                students: "For students",
                                teams: "Collaborate with your team"
                            },
                            features: "Features",
                            gotoWorkspace: "Go to your workspace",
                            help: "Help",
                            home: "Home",
                            login: "Log in",
                            logout: "Log out",
                            members_one: "{{count}} member",
                            members_other: "{{count}} members",
                            more: "More",
                            "plan-tiers": {
                                collaborate: "Collaborate plan",
                                distribute: "Distribute plan",
                                free: "Basic plan",
                                free_legacy: "Free plan",
                                lite: "Lite plan",
                                plus: "Pro plan",
                                premium_2022: "Premium plan",
                                pro_2022: "Pro plan",
                                starter: "Starter plan",
                                transfer: "Transfer plan",
                                ultimate: "Ultimate plan",
                                enterprise: "Teams plan",
                                enterprise_custom_contract: "Enterprise plan"
                            },
                            "powered-by": "Powered by <1>WeTransfer</1>",
                            pricing: "Pricing",
                            resources: "Resources",
                            "send-files": "Send files",
                            signup: "Sign up",
                            storage_widget: {
                                compare: "Compare plans",
                                description: "Includes transfers and reviews",
                                remove_limits: "Remove limits",
                                usage: "{{usedStorage}}/{{totalStorage}} uploaded in the last 30 days"
                            },
                            transfer_count_widget: {
                                usage: "{{usedTransfers}}/{{totalTransfers}} transfers uploaded in the last 30 days"
                            },
                            toggle_account_menu: "Toggle account menu",
                            toggle_menu: "Toggle menu",
                            transfers: "Transfers",
                            upgrade: "Upgrade",
                            "use-cases": "Use cases",
                            workspaceSettings: "Workspace settings",
                            "wetransfer-ultimate": "WeTransfer <br /> Ultimate",
                            product_updates_dropdown: {
                                title: "Product updates",
                                empty_title: "Never miss a beat!",
                                empty_subtitle: "Here's where your notifications will pop up.",
                                previous_notifications: "Previous notifications"
                            }
                        }
                    },
                    "es-ES": {
                        topNav: {
                            about: "Sobre nosotros",
                            advertising: "Advertising",
                            accountSettings: "Configuraci\xf3n de la cuenta",
                            blog: "Blog",
                            whatsNew: "Novedades",
                            branding: "Branding",
                            customize: "Personaliza tu p\xe1gina",
                            contacts: "Contactos",
                            "create-review": "Crear revisi\xf3n",
                            explore: {
                                "advertising-policies": "Pol\xedticas de anuncios",
                                advertising: "An\xfanciate con nosotros",
                                awards: "Premios",
                                careers: "Empleo",
                                collect: "Crear paneles de tendencias",
                                company: "Empresa",
                                csr: "Responsabilidad social corporativa",
                                culture: "Cultura",
                                distribution: "Distribuye tu contenido",
                                getBenefitsAndPerks: "Consigue ventajas y beneficios",
                                features: "Todas las funciones",
                                "file-sharing": "Comparte tus archivos",
                                leadership: "Liderazgo",
                                legal: "Legal y Privacidad",
                                newsroom: "Sala de prensa",
                                photographers: "Para fot\xf3grafos",
                                videographers: "Para vide\xf3grafos",
                                "designers-illustrators": "Para dise\xf1adores e ilustradores",
                                "for-businesses": "Para empresas",
                                "responsible-advertising": "Pr\xe1cticas responsables",
                                security: "Protege tus archivos",
                                sellFiles: "Cobra por tu trabajo",
                                students: "Para estudiantes",
                                teams: "Colabora con tu equipo"
                            },
                            features: "Uso",
                            gotoWorkspace: "Ve a tu espacio de trabajo",
                            help: "Ayuda",
                            home: "Inicio",
                            login: "Iniciar sesi\xf3n",
                            logout: "Cerrar sesi\xf3n",
                            members_one: "{{count}} miembro",
                            members_other: "{{count}} miembros",
                            more: "m\xe1s",
                            "plan-tiers": {
                                collaborate: "Plan Colaborar",
                                distribute: "Plan Distribuir",
                                free: "Plan B\xe1sico",
                                free_legacy: "Plan gratuito",
                                lite: "Plan Lite",
                                plus: "Plan Pro",
                                premium_2022: "Plan Premium",
                                pro_2022: "Plan Pro",
                                starter: "Plan Starter",
                                transfer: "Plan Transferir",
                                ultimate: "Plan Ultimate",
                                enterprise: "Plan Teams",
                                enterprise_custom_contract: "Plan Enterprise"
                            },
                            "powered-by": "Facilitado por <1>WeTransfer</1>",
                            pricing: "Tarifas",
                            resources: "Recursos",
                            "send-files": "Enviar archivos",
                            signup: "Registrarse",
                            storage_widget: {
                                compare: "Comparar planes",
                                description: "Incluye transferencias y revisiones",
                                remove_limits: "Eliminar l\xedmites",
                                usage: "{{usedStorage}}/{{totalStorage}} subido en los \xfaltimos 30 d\xedas"
                            },
                            transfer_count_widget: {
                                usage: "{{usedTransfers}}/{{totalTransfers}} transferencias subidas en los \xfaltimos 30 d\xedas"
                            },
                            toggle_account_menu: "Activar/desactivar men\xfa de la cuenta",
                            toggle_menu: "Activar/desactivar men\xfa",
                            transfers: "Transferencias",
                            upgrade: "Actualizar",
                            "use-cases": "Casos pr\xe1cticos",
                            workspaceSettings: "Ajustes de espacio de trabajo",
                            "wetransfer-ultimate": "WeTransfer <br /> Ultimate",
                            product_updates_dropdown: {
                                title: "Novedades del producto",
                                empty_title: "\xa1No te pierdas nada!",
                                empty_subtitle: "Aqu\xed es donde aparecer\xe1n tus notificaciones.",
                                previous_notifications: "Notificaciones anteriores"
                            }
                        }
                    },
                    "es-LA": {
                        topNav: {
                            about: "Acerca de nosotros",
                            advertising: "Publicidad",
                            accountSettings: "Configuraci\xf3n de la cuenta",
                            blog: "Blog",
                            whatsNew: "Novedades",
                            branding: "Personalizaci\xf3n",
                            customize: "Personaliza tu p\xe1gina",
                            contacts: "Contactos",
                            "create-review": "Crear revisi\xf3n",
                            explore: {
                                "advertising-policies": "Pol\xedticas sobre avisos",
                                advertising: "Publicita en nuestros servicios",
                                awards: "Premios",
                                careers: "Empleo",
                                collect: "Crear moodboards",
                                company: "Empresa",
                                csr: "Responsabilidad social corporativa",
                                culture: "Cultura",
                                distribution: "Distribuye tu contenido",
                                getBenefitsAndPerks: "Recibir beneficios y ventajas",
                                features: "Todas las funciones",
                                "file-sharing": "Comparte tus archivos",
                                leadership: "Liderazgo",
                                legal: "Legal y Privacidad",
                                newsroom: "Sala de prensa",
                                photographers: "Para fot\xf3grafos",
                                videographers: "Para creadores de videos",
                                "designers-illustrators": "Para dise\xf1adores e ilustradores",
                                "for-businesses": "Para empresas",
                                "responsible-advertising": "Pr\xe1cticas responsables",
                                security: "Protege tus archivos",
                                sellFiles: "Recibe pagos por tu trabajo",
                                students: "Para estudiantes",
                                teams: "Colabora con tu equipo"
                            },
                            features: "Funciones",
                            gotoWorkspace: "Ve a tu espacio de trabajo",
                            help: "Asistencia",
                            home: "Inicio",
                            login: "Iniciar sesi\xf3n",
                            logout: "Cerrar sesi\xf3n",
                            members_one: "{{count}} miembro",
                            members_other: "{{count}} miembros",
                            more: "M\xe1s",
                            "plan-tiers": {
                                collaborate: "Plan Colaborar",
                                distribute: "Plan Distribuir",
                                free: "Plan b\xe1sico",
                                free_legacy: "Plan gratis",
                                lite: "Plan Lite",
                                plus: "Plan Pro",
                                premium_2022: "Plan Premium",
                                pro_2022: "Plan Pro",
                                starter: "Plan Starter",
                                transfer: "Plan Transferir",
                                ultimate: "Plan Ultimate",
                                enterprise: "Plan Teams",
                                enterprise_custom_contract: "Plan Enterprise"
                            },
                            "powered-by": "Con tecnolog\xeda de <1>WeTransfer</1>",
                            pricing: "Tarifas",
                            resources: "Recursos",
                            "send-files": "Enviar archivos",
                            signup: "Registrarse",
                            storage_widget: {
                                compare: "Comparar planes",
                                description: "Incluye transferencias y revisiones",
                                remove_limits: "Eliminar l\xedmites",
                                usage: "{{usedStorage}}/{{totalStorage}} subido en los \xfaltimos 30 d\xedas"
                            },
                            transfer_count_widget: {
                                usage: "{{usedTransfers}}/{{totalTransfers}} transferencias cargadas en los \xfaltimos 30 d\xedas"
                            },
                            toggle_account_menu: "Cambia el men\xfa de la cuenta",
                            toggle_menu: "Cambia el men\xfa",
                            transfers: "Transferencias",
                            upgrade: "Actualizar",
                            "use-cases": "Casos de uso",
                            workspaceSettings: "Configuraci\xf3n del espacio de trabajo",
                            "wetransfer-ultimate": "WeTransfer <br /> Ultimate",
                            product_updates_dropdown: {
                                title: "Novedades del producto",
                                empty_title: "\xa1No te pierdas nada!",
                                empty_subtitle: "Aqu\xed es donde aparecer\xe1n tus notificaciones.",
                                previous_notifications: "Notificaciones anteriores"
                            }
                        }
                    },
                    "fr-FR": {
                        topNav: {
                            about: "\xc0 propos de nous",
                            advertising: "Advertising",
                            accountSettings: "Param\xe8tres du compte",
                            blog: "Blog",
                            whatsNew: "Nouveaut\xe9s",
                            branding: "Param\xe8tres du profil",
                            customize: "Personnaliser votre page",
                            contacts: "Contacts",
                            "create-review": "Cr\xe9er un avis",
                            explore: {
                                "advertising-policies": "Politiques publicitaires",
                                advertising: "Faites votre publicit\xe9 chez nous",
                                awards: "R\xe9compenses",
                                careers: "Offres d'emploi",
                                collect: "Cr\xe9er des moodboards",
                                company: "Entreprise",
                                csr: "Responsabilit\xe9 sociale d'entreprise",
                                culture: "Culture",
                                distribution: "Distribuer votre contenu",
                                getBenefitsAndPerks: "Profiter de nos avantages",
                                features: "Toutes les fonctionnalit\xe9s",
                                "file-sharing": "Partager vos fichiers",
                                leadership: "Leadership",
                                legal: "L\xe9gal et confidentialit\xe9",
                                newsroom: "Salle de presse",
                                photographers: "Pour les photographes",
                                videographers: "Pour les vid\xe9astes",
                                "designers-illustrators": "Pour les cr\xe9ateurs et les illustrateurs",
                                "for-businesses": "Pour les entreprises",
                                "responsible-advertising": "Pratiques responsables",
                                security: "Prot\xe9ger vos fichiers",
                                sellFiles: "Obtenir une r\xe9mun\xe9ration pour votre travail",
                                students: "Pour les \xe9tudiants",
                                teams: "Collaborer avec votre \xe9quipe"
                            },
                            features: "Caract\xe9ristiques",
                            gotoWorkspace: "Acc\xe9der \xe0 votre espace de travail",
                            help: "Aide",
                            home: "Accueil",
                            login: "Connexion",
                            logout: "D\xe9connexion",
                            members_one: "{{count}} membre",
                            members_other: "{{count}} membres",
                            more: "Plus",
                            "plan-tiers": {
                                collaborate: "Forfait Collaborer",
                                distribute: "Forfait Distribuer",
                                free: "Forfait \xc9l\xe9mentaire",
                                free_legacy: "Forfait gratuit",
                                lite: "Forfait Lite",
                                plus: "Forfait Pro",
                                premium_2022: "Forfait Premium",
                                pro_2022: "Forfait Pro",
                                starter: "Forfait Starter",
                                transfer: "Forfait Transf\xe9rer",
                                ultimate: "Forfait Ultimate",
                                enterprise: "Forfait Teams",
                                enterprise_custom_contract: "Forfait Enterprise"
                            },
                            "powered-by": "Optimis\xe9 par <1>WeTransfer</1>",
                            pricing: "Tarifs",
                            resources: "Ressources",
                            "send-files": "Envoyer des fichiers",
                            signup: "S'inscrire",
                            storage_widget: {
                                compare: "Comparer les forfaits",
                                description: "Inclut les transferts et les avis",
                                remove_limits: "Supprimer les limites",
                                usage: "{{usedStorage}}/{{totalStorage}} t\xe9l\xe9charg\xe9s au cours des 30 derniers jours"
                            },
                            transfer_count_widget: {
                                usage: "{{usedTransfers}}/{{totalTransfers}} transferts t\xe9l\xe9charg\xe9s au cours des 30 derniers jours"
                            },
                            toggle_account_menu: "Activer/d\xe9sactiver le menu du compte",
                            toggle_menu: "Activer/d\xe9sactiver le menu",
                            transfers: "Transferts",
                            upgrade: "Mettre \xe0 niveau",
                            "use-cases": "Cas d'utilisation",
                            workspaceSettings: "Param\xe8tres de l'espace de travail",
                            "wetransfer-ultimate": "WeTransfer <br /> Ultimate",
                            product_updates_dropdown: {
                                title: "Actualit\xe9s du produit",
                                empty_title: "Ne manquez rien!",
                                empty_subtitle: "C'est ici que vos notifications appara\xeetront.",
                                previous_notifications: "Notifications pr\xe9c\xe9dentes"
                            }
                        }
                    },
                    "it-IT": {
                        topNav: {
                            about: "Chi siamo",
                            advertising: "Advertising",
                            accountSettings: "Impostazioni account",
                            blog: "Blog",
                            whatsNew: "Novit\xe0",
                            branding: "Branding",
                            customize: "Personalizza la tua pagina",
                            contacts: "Contatti",
                            "create-review": "Crea revisione",
                            explore: {
                                "advertising-policies": "Politiche pubblicitarie",
                                advertising: "Pubblicizza con noi",
                                awards: "Premi",
                                careers: "Lavora con noi",
                                collect: "Crea moodboard",
                                company: "L'azienda",
                                csr: "Responsabilit\xe0 sociale dell'azienda",
                                culture: "Cultura",
                                distribution: "Distribuisci i tuoi contenuti",
                                getBenefitsAndPerks: "Ottieni tutti i vantaggi",
                                features: "Tutte le funzionalit\xe0",
                                "file-sharing": "Condividi i tuoi file",
                                leadership: "Leadership",
                                legal: "Informazioni legali e Privacy",
                                newsroom: "Sala stampa",
                                photographers: "Per i fotografi",
                                videographers: "Per realizzatori di video",
                                "designers-illustrators": "Per designer e illustratori",
                                "for-businesses": "Per le imprese",
                                "responsible-advertising": "Pratiche responsabili",
                                security: "Proteggi i tuoi file",
                                sellFiles: "Fatti pagare per il tuo lavoro",
                                students: "Per gli studenti",
                                teams: "Collabora con il tuo team"
                            },
                            features: "Funzionalit\xe0",
                            gotoWorkspace: "Vai al tuo spazio di lavoro",
                            help: "Assistenza",
                            home: "Home",
                            login: "Login",
                            logout: "Esci",
                            members_one: "{{count}} membro",
                            members_other: "{{count}} membri",
                            more: "di pi\xf9",
                            "plan-tiers": {
                                collaborate: "Piano Collaborate",
                                distribute: "Piano Distribute",
                                free: "Piano Base",
                                free_legacy: "Piano Free",
                                lite: "Piano Lite",
                                plus: "Piano Pro",
                                premium_2022: "Piano Premium",
                                pro_2022: "Piano Pro",
                                starter: "Piano Starter",
                                transfer: "Piano Transfer",
                                ultimate: "Piano Ultimate",
                                enterprise: "Piano Teams",
                                enterprise_custom_contract: "Piano Enterprise"
                            },
                            "powered-by": "Sviluppato da <1>WeTransfer</1>",
                            pricing: "Prezzi",
                            resources: "Risorse",
                            "send-files": "Invia file",
                            signup: "Iscrizione",
                            storage_widget: {
                                compare: "Confronta i piani",
                                description: "Include trasferimenti e revisioni",
                                remove_limits: "Rimuovi limiti",
                                usage: "{{usedStorage}}/{{totalStorage}} caricati negli ultimi 30 giorni"
                            },
                            toggle_account_menu: "Attiva/Disattiva menu dell'account",
                            toggle_menu: "Attiva/Disattiva menu",
                            transfers: "Trasferimenti",
                            transfer_count_widget: {
                                usage: "{{usedTransfers}}/{{totalTransfers}} trasferimenti caricati negli ultimi 30 giorni"
                            },
                            upgrade: "Effettua l'upgrade",
                            "use-cases": "Casi d'uso",
                            workspaceSettings: "Impostazioni spazio di lavoro",
                            "wetransfer-ultimate": "WeTransfer <br /> Ultimate",
                            product_updates_dropdown: {
                                title: "Aggiornamenti del prodotto",
                                empty_title: "Non perderti nulla!",
                                empty_subtitle: "Qui \xe8 dove appariranno le tue notifiche.",
                                previous_notifications: "Notifiche precedenti"
                            }
                        }
                    },
                    "nb-NO": {
                        topNav: {
                            about: "Om oss",
                            advertising: "Advertising",
                            accountSettings: "Kontoinnstillinger",
                            blog: "Blog",
                            whatsNew: "Nyheter",
                            branding: "Merkevarebygging",
                            customize: "Tilpass siden din",
                            contacts: "Kontakter",
                            "create-review": "Opprett en gjennomgang",
                            explore: {
                                "advertising-policies": "Retningslinjer for annonser",
                                advertising: "Annonser hos oss",
                                awards: "Priser",
                                careers: "Karriere",
                                collect: "Opprett moodboards",
                                company: "Bedrift",
                                csr: "Bedriftenes samfunnsansvar",
                                culture: "Kultur",
                                distribution: "Distribuer innholdet ditt",
                                getBenefitsAndPerks: "F\xe5 goder og tilbud",
                                features: "Alle funksjoner",
                                "file-sharing": "Del filene dine",
                                leadership: "Lederskap",
                                legal: "Juridisk & Personvern",
                                newsroom: "Redaksjon",
                                photographers: "For fotografer",
                                videographers: "For videografer",
                                "designers-illustrators": "For designere og illustrat\xf8rer",
                                "for-businesses": "For bedrifter",
                                "responsible-advertising": "Ansvarlig praksis",
                                security: "Beskytt filene dine",
                                sellFiles: "F\xe5 betalt for arbeidet ditt",
                                students: "For studenter",
                                teams: "Samarbeid med teamet ditt"
                            },
                            features: "Funksjoner",
                            gotoWorkspace: "G\xe5 til arbeidsomr\xe5det ditt",
                            help: "Hjelp",
                            home: "Hjem",
                            login: "Logg inn",
                            logout: "Logg ut",
                            members_one: "{{count}} medlem",
                            members_other: "{{count}} medlemmer",
                            more: "Mer",
                            "plan-tiers": {
                                collaborate: "Samarbeidsplan",
                                distribute: "Distribusjonsplan",
                                free: "Grunnleggende plan",
                                free_legacy: "Gratisplan",
                                lite: "Lite-plan",
                                plus: "Pro-plan",
                                premium_2022: "Premium-plan",
                                pro_2022: "Pro-plan",
                                starter: "Starter-plan",
                                transfer: "Overf\xf8ringsplan",
                                ultimate: "Ultimate-plan",
                                enterprise: "Teams-plan",
                                enterprise_custom_contract: "Enterprise-plan"
                            },
                            "powered-by": "Levert av <1>WeTransfer</1>",
                            pricing: "Priser",
                            resources: "Ressurser",
                            "send-files": "Send filer",
                            signup: "Registrer deg",
                            storage_widget: {
                                compare: "Sammenlign abonnementer",
                                description: "Inkluderer overf\xf8ringer og gjennomganger",
                                remove_limits: "Fjern gr\xe6nser",
                                usage: "{{usedStorage}}/{{totalStorage}} lastet opp de siste 30 dagene"
                            },
                            transfer_count_widget: {
                                usage: "{{usedTransfers}}/{{totalTransfers}} overf\xf8ringer lastet opp de siste 30 dagene"
                            },
                            toggle_account_menu: "\xc5pne eller lukk kontomenyen",
                            toggle_menu: "\xc5pne eller lukk menyen",
                            transfers: "Overf\xf8ringer",
                            upgrade: "Oppgrader",
                            "use-cases": "Brukseksempler",
                            workspaceSettings: "Innstillinger for arbeidsomr\xe5de",
                            "wetransfer-ultimate": "WeTransfer <br /> Ultimate",
                            product_updates_dropdown: {
                                title: "Produktoppdateringer",
                                empty_title: "G\xe5 aldri glipp av noe!",
                                empty_subtitle: "Her vil varslene dine dukke opp.",
                                previous_notifications: "Tidligere varsler"
                            }
                        }
                    },
                    "nl-NL": {
                        topNav: {
                            about: "Over ons",
                            advertising: "Advertising",
                            accountSettings: "Accountinstellingen",
                            blog: "Blog",
                            whatsNew: "Nieuws",
                            branding: "Branding",
                            customize: "Pas je pagina aan",
                            contacts: "Contacten",
                            "create-review": "Maak een review",
                            explore: {
                                "advertising-policies": "Advertentiebeleid",
                                advertising: "Adverteer bij ons",
                                awards: "Awards",
                                careers: "Vacatures",
                                collect: "Moodboards maken",
                                company: "Bedrijf",
                                csr: "Maatschappelijk verantwoord ondernemen",
                                culture: "Cultuur",
                                distribution: "Verspreid je content",
                                getBenefitsAndPerks: "Krijg voordelen en extra's",
                                features: "Alle functies",
                                "file-sharing": "Deel je bestanden",
                                leadership: "Management",
                                legal: "Juridisch & Privacy",
                                newsroom: "Nieuws en pers",
                                photographers: "Voor fotografen",
                                videographers: "Voor videomakers",
                                "designers-illustrators": "Voor ontwerpers en illustratoren",
                                "for-businesses": "Voor bedrijven",
                                "responsible-advertising": "Verantwoord ondernemen",
                                security: "Bescherm je bestanden",
                                sellFiles: "Krijg betaald voor je werk",
                                students: "Voor studenten",
                                teams: "Werk samen met je team"
                            },
                            features: "Functionaliteiten",
                            gotoWorkspace: "Ga naar je workspace",
                            help: "Help",
                            home: "Home",
                            login: "Inloggen",
                            logout: "Uitloggen",
                            members_one: "{{count}} teamlid",
                            members_other: "{{count}} leden",
                            more: "Meer",
                            "plan-tiers": {
                                collaborate: "Samenwerkingsplan",
                                distribute: "Verspreidingsplan",
                                free: "Basic-plan",
                                free_legacy: "Gratis abonnement",
                                lite: "Lite-plan",
                                plus: "Pro-plan",
                                premium_2022: "Premium-plan",
                                pro_2022: "Pro-plan",
                                starter: "Starter-plan",
                                transfer: "Transfer-plan",
                                ultimate: "Ultimate-plan",
                                enterprise: "Teams-plan",
                                enterprise_custom_contract: "Enterprise-plan"
                            },
                            "powered-by": "Powered by <1>WeTransfer</1>",
                            pricing: "Prijzen",
                            resources: "Hulpmiddelen",
                            "send-files": "Bestanden verzenden",
                            signup: "Aanmelden",
                            storage_widget: {
                                compare: "Vergelijk plannen",
                                description: "Inclusief transfers en reviews",
                                remove_limits: "Grenzen verwijderen",
                                usage: "{{usedStorage}}/{{totalStorage}} ge\xfcpload in de afgelopen 30 dagen"
                            },
                            transfer_count_widget: {
                                usage: "{{usedTransfers}}/{{totalTransfers}} overdrachten ge\xfcpload in de afgelopen 30 dagen"
                            },
                            toggle_account_menu: "Accountmenu weergeven of verbergen",
                            toggle_menu: "Menu weergeven of verbergen",
                            transfers: "Transfers",
                            upgrade: "Upgraden",
                            "use-cases": "Casestudies",
                            workspaceSettings: "Workspace-instellingen",
                            "wetransfer-ultimate": "WeTransfer <br /> Ultimate",
                            product_updates_dropdown: {
                                title: "Productupdates",
                                empty_title: "Mis nooit meer iets!",
                                empty_subtitle: "Hier verschijnen je meldingen.",
                                previous_notifications: "Vorige meldingen"
                            }
                        }
                    },
                    "pl-PL": {
                        topNav: {
                            about: "O nas",
                            advertising: "Reklama",
                            accountSettings: "Ustawienia konta",
                            blog: "Blog",
                            whatsNew: "Nowości",
                            branding: "Branding",
                            customize: "Spersonalizuj swoją stronę",
                            contacts: "Kontakty",
                            "create-review": "Utw\xf3rz przegląd",
                            explore: {
                                "advertising-policies": "Polityka reklam",
                                advertising: "Reklamuj się u nas",
                                awards: "Nagrody",
                                careers: "Kariera",
                                collect: "Utw\xf3rz moodboardy",
                                company: "Firma",
                                csr: "Społeczna odpowiedzialność biznesu",
                                culture: "Kultura",
                                distribution: "Dystrybuuj swoje treści",
                                getBenefitsAndPerks: "Uzyskaj korzyści",
                                features: "Wszystkie funkcje",
                                "file-sharing": "Dziel się swoimi plikami",
                                leadership: "Przyw\xf3dztwo",
                                legal: "Prawne & Prywatność",
                                newsroom: "Serwis informacyjny",
                                photographers: "Dla fotograf\xf3w",
                                videographers: "Dla tw\xf3rc\xf3w film\xf3w",
                                "designers-illustrators": "Dla projektant\xf3w i grafik\xf3w",
                                "for-businesses": "Dla firm",
                                "responsible-advertising": "Odpowiedzialne praktyki",
                                security: "Chroń swoje pliki",
                                sellFiles: "Otrzymuj wynagrodzenie za swoją pracę",
                                students: "Dla uczni\xf3w i student\xf3w",
                                teams: "Wsp\xf3łpracuj ze swoim zespołem"
                            },
                            features: "Funkcje",
                            gotoWorkspace: "Przejdź do swojego obszaru roboczego",
                            help: "Pomoc",
                            home: "Strona gł\xf3wna",
                            login: "Zaloguj się",
                            logout: "Wyloguj się",
                            members_one: "{{count}} członek",
                            members_other: "Członkowie: {{count}}",
                            more: "Więcej",
                            "plan-tiers": {
                                collaborate: "Taryfa Wsp\xf3łpracuj",
                                distribute: "Taryfa Dystrybuuj",
                                free: "Taryfa Podstawowa",
                                free_legacy: "Taryfa Free",
                                lite: "Taryfa Lite",
                                plus: "Taryfa Pro",
                                premium_2022: "Taryfa Premium",
                                pro_2022: "Taryfa Pro",
                                starter: "Taryfa Starter",
                                transfer: "Taryfa Transfer",
                                ultimate: "Taryfa Ultimate",
                                enterprise: "Taryfa Teams",
                                enterprise_custom_contract: "Taryfa Enterprise"
                            },
                            "powered-by": "Technologia <1>WeTransfer</1>",
                            pricing: "Cennik",
                            resources: "Zasoby",
                            "send-files": "Wyślij pliki",
                            signup: "Zarejestruj się",
                            storage_widget: {
                                compare: "Por\xf3wnaj plany",
                                description: "Obejmuje transfery i pulpity",
                                remove_limits: "Usuń ograniczenia",
                                usage: "{{usedStorage}}/{{totalStorage}} przesłane w ciągu ostatnich 30 dni"
                            },
                            transfer_count_widget: {
                                usage: "{{usedTransfers}}/{{totalTransfers}} transfery wysłane w ciągu ostatnich 30 dni"
                            },
                            toggle_account_menu: "Przełącz menu konta",
                            toggle_menu: "Przełącz menu",
                            transfers: "Transfery",
                            upgrade: "Ulepsz",
                            "use-cases": "Przypadki zastosowania",
                            workspaceSettings: "Ustawienia obszaru roboczego",
                            "wetransfer-ultimate": "WeTransfer <br /> Ultimate",
                            product_updates_dropdown: {
                                title: "Aktualizacje produktu",
                                empty_title: "Bądź na bieżąco!",
                                empty_subtitle: "Tutaj będą pojawiać się Twoje powiadomienia.",
                                previous_notifications: "Poprzednie powiadomienia"
                            }
                        }
                    },
                    "pt-BR": {
                        topNav: {
                            about: "Sobre n\xf3s",
                            advertising: "Publicidade",
                            accountSettings: "Defini\xe7\xf5es da conta",
                            blog: "Blog",
                            whatsNew: "Novidades",
                            branding: "Desenvolvimento de marca",
                            customize: "Personalize sua p\xe1gina",
                            contacts: "Contatos",
                            "create-review": "Criar avalia\xe7\xe3o",
                            explore: {
                                "advertising-policies": "Pol\xedticas de an\xfancios",
                                advertising: "Anuncie conosco",
                                awards: "Pr\xeamios",
                                careers: "Carreiras",
                                collect: "Criar pain\xe9is de refer\xeancia",
                                company: "Empresa",
                                csr: "Responsabilidade social corporativa",
                                culture: "Cultura",
                                distribution: "Distribua seu conte\xfado",
                                getBenefitsAndPerks: "Receba benef\xedcios e regalias",
                                features: "Todos os recursos",
                                "file-sharing": "Compartilhe seus arquivos",
                                leadership: "Lideran\xe7a",
                                legal: "Legal e Privacidade",
                                newsroom: "\xc1rea de imprensa",
                                photographers: "Para fot\xf3grafos",
                                videographers: "Para cinegrafistas",
                                "designers-illustrators": "Para designers e ilustradores",
                                "for-businesses": "Para empresas",
                                "responsible-advertising": "Pr\xe1ticas respons\xe1veis",
                                security: "Proteja seus arquivos",
                                sellFiles: "Receba pelo seu trabalho",
                                students: "Para estudantes",
                                teams: "Colabore com a sua equipe"
                            },
                            features: "Caracter\xedsticas",
                            gotoWorkspace: "Acesse sua \xe1rea de trabalho",
                            help: "Ajuda",
                            home: "P\xe1gina principal",
                            login: "Entrar",
                            logout: "Terminar sess\xe3o",
                            members_one: "{{count}} membro",
                            members_other: "{{count}} membros",
                            more: "Mais",
                            "plan-tiers": {
                                collaborate: "Plano Colaborar",
                                distribute: "Plano Distribuir",
                                free: "Plano B\xe1sico",
                                free_legacy: "Plano gr\xe1tis",
                                lite: "Plano Lite",
                                plus: "Plano Pro",
                                premium_2022: "Plano Premium",
                                pro_2022: "Plano Pro",
                                starter: "Plano Starter",
                                transfer: "Plano de transfer\xeancia",
                                ultimate: "Plano Ultimate",
                                enterprise: "Plano Teams",
                                enterprise_custom_contract: "Plano Enterprise"
                            },
                            "powered-by": "Com tecnologia <1>WeTransfer</1>",
                            pricing: "Tarifas",
                            resources: "Recursos",
                            "send-files": "Enviar arquivos",
                            signup: "Inscreva-se",
                            storage_widget: {
                                compare: "Comparar planos",
                                description: "Inclui transfer\xeancias e avalia\xe7\xf5es",
                                remove_limits: "Remover limites",
                                usage: "{{usedStorage}}/{{totalStorage}} enviados nos \xfaltimos 30 dias"
                            },
                            transfer_count_widget: {
                                usage: "{{usedTransfers}}/{{totalTransfers}} transfer\xeancias enviadas nos \xfaltimos 30 dias"
                            },
                            toggle_account_menu: "Trocar menu da conta",
                            toggle_menu: "Trocar menu",
                            transfers: "Transfer\xeancias",
                            upgrade: "Upgrade",
                            "use-cases": "Casos de uso",
                            workspaceSettings: "Configura\xe7\xf5es do espa\xe7o de trabalho",
                            "wetransfer-ultimate": "WeTransfer <br /> Ultimate",
                            product_updates_dropdown: {
                                title: "Atualiza\xe7\xf5es do produto",
                                empty_title: "N\xe3o perca nada!",
                                empty_subtitle: "\xc9 aqui que suas notifica\xe7\xf5es aparecer\xe3o.",
                                previous_notifications: "Notifica\xe7\xf5es anteriores"
                            }
                        }
                    },
                    "pt-PT": {
                        topNav: {
                            about: "Sobre n\xf3s",
                            advertising: "Advertising",
                            accountSettings: "Defini\xe7\xf5es da conta",
                            blog: "Blog",
                            whatsNew: "Novidades",
                            branding: "Branding",
                            customize: "Personaliza a tua p\xe1gina",
                            contacts: "Contactos",
                            "create-review": "Criar revis\xe3o",
                            explore: {
                                "advertising-policies": "Pol\xedticas de publicidade",
                                advertising: "Anuncia connosco",
                                awards: "Pr\xe9mios",
                                careers: "carreiras",
                                collect: "Criar moodboards",
                                company: "Company",
                                csr: "Responsabilidade social corporativa",
                                culture: "Cultura",
                                distribution: "Distribua os seus conte\xfados",
                                getBenefitsAndPerks: "Obtenha benef\xedcios e regalias",
                                features: "Todas as funcionalidades",
                                "file-sharing": "Partilha os teus ficheiros",
                                leadership: "Lideran\xe7a",
                                legal: "Legal e Privacidade",
                                newsroom: "Novidades",
                                photographers: "Para fot\xf3grafos",
                                videographers: "Para vide\xf3grafos",
                                "designers-illustrators": "Para designers e ilustradores",
                                "for-businesses": "Para empresas",
                                "responsible-advertising": "Pr\xe1ticas respons\xe1veis",
                                security: "Protege os teus ficheiros",
                                sellFiles: "Recebe pelo teu trabalho",
                                students: "Para estudantes",
                                teams: "Colabora com a tua equipa"
                            },
                            features: "Funcionalidades",
                            gotoWorkspace: "Aceder ao espa\xe7o de trabalho",
                            help: "Ajuda",
                            home: "P\xe1gina principal",
                            login: "Entrar",
                            logout: "Terminar sess\xe3o",
                            members_one: "{{count}} membro",
                            members_other: "{{count}} membros",
                            more: "Mais",
                            "plan-tiers": {
                                collaborate: "Plano de colabora\xe7\xe3o",
                                distribute: "Plano de distribui\xe7\xe3o",
                                free: "Plano b\xe1sico",
                                free_legacy: "Plano gr\xe1tis",
                                lite: "Plano Lite",
                                plus: "Plano Pro",
                                premium_2022: "Plano Premium",
                                pro_2022: "Plano Pro",
                                starter: "Plano Starter",
                                transfer: "Plano Transferir",
                                ultimate: "Plano Ultimate",
                                enterprise: "Plano Teams",
                                enterprise_custom_contract: "Plano Enterprise"
                            },
                            "powered-by": "Com a tecnologia <1>WeTransfer</1>",
                            pricing: "Pre\xe7os",
                            resources: "Recursos",
                            "send-files": "Enviar ficheiros",
                            signup: "Inscri\xe7\xe3o",
                            storage_widget: {
                                compare: "Comparar planos",
                                description: "Inclui transfer\xeancias e revis\xf5es",
                                remove_limits: "Remover limites",
                                usage: "{{usedStorage}}/{{totalStorage}} carregados nos \xfaltimos 30 dias"
                            },
                            transfer_count_widget: {
                                usage: "{{usedTransfers}}/{{totalTransfers}} transfer\xeancias enviadas nos \xfaltimos 30 dias"
                            },
                            toggle_account_menu: "Ativar/desativar menu da conta",
                            toggle_menu: "Ativar/desativar menu",
                            transfers: "Transfer\xeancias",
                            upgrade: "Faz o upgrade",
                            "use-cases": "Casos de estudo",
                            workspaceSettings: "Defini\xe7\xf5es do espa\xe7o de trabalho",
                            "wetransfer-ultimate": "WeTransfer <br /> Ultimate",
                            product_updates_dropdown: {
                                title: "Atualiza\xe7\xf5es do produto",
                                empty_title: "N\xe3o perca nada!",
                                empty_subtitle: "\xc9 aqui que as suas notifica\xe7\xf5es aparecer\xe3o.",
                                previous_notifications: "Notifica\xe7\xf5es anteriores"
                            }
                        }
                    },
                    "sv-SE": {
                        topNav: {
                            about: "Om oss",
                            advertising: "Advertising",
                            accountSettings: "Kontoinst\xe4llningar",
                            blog: "Blog",
                            whatsNew: "Nyheter",
                            branding: "Varum\xe4rke",
                            customize: "Anpassa din sida",
                            contacts: "Kontakter",
                            "create-review": "Skapa granskning",
                            explore: {
                                "advertising-policies": "Annonspolicyer",
                                advertising: "Annonsera hos oss",
                                awards: "Utm\xe4rkelser",
                                careers: "Lediga jobb",
                                collect: "Skapa moodboards",
                                company: "Om f\xf6retaget",
                                csr: "F\xf6retags samh\xe4llsansvar",
                                culture: "Kultur",
                                distribution: "Distribuera ditt inneh\xe5ll",
                                getBenefitsAndPerks: "F\xe5 f\xf6rm\xe5ner och erbjudanden",
                                features: "Alla funktioner",
                                "file-sharing": "Dela dina filer",
                                leadership: "Ledarskap",
                                legal: "Juridisk & integritet",
                                newsroom: "Nyheter",
                                photographers: "F\xf6r fotografer",
                                videographers: "F\xf6r videofilmare",
                                "designers-illustrators": "F\xf6r designers och illustrat\xf6rer",
                                "for-businesses": "F\xf6r f\xf6retag",
                                "responsible-advertising": "Ansvarsfulla metoder",
                                security: "Skydda dina filer",
                                sellFiles: "F\xe5 betalt f\xf6r ditt arbete",
                                students: "F\xf6r studenter",
                                teams: "Samarbeta med ditt team"
                            },
                            features: "Funktioner",
                            gotoWorkspace: "G\xe5 till din arbetsyta",
                            help: "Hj\xe4lp",
                            home: "Hem",
                            login: "Logga in",
                            logout: "Logga ut",
                            members_one: "{{count}} medlem",
                            members_other: "{{count}} medlemmar",
                            more: "Mer",
                            "plan-tiers": {
                                collaborate: "Paketet Samarbeta",
                                distribute: "Paketet Distribuera",
                                free: "Paketet Bas",
                                free_legacy: "Gratispaket",
                                lite: "Paketet Lite",
                                plus: "Pro-paket",
                                premium_2022: "Premium-paket",
                                pro_2022: "Pro-paket",
                                starter: "Starter-paket",
                                transfer: "\xd6verf\xf6ringspaket",
                                ultimate: "Ultimate-paket",
                                enterprise: "Teams-paket",
                                enterprise_custom_contract: "Enterprise-paket"
                            },
                            "powered-by": "Drivs av <1>WeTransfer</1>",
                            pricing: "Priss\xe4ttning",
                            resources: "Resurser",
                            "send-files": "Skicka filer",
                            signup: "registrera dig",
                            storage_widget: {
                                compare: "J\xe4mf\xf6r paket",
                                description: "Inkluderar \xf6verf\xf6ringar och granskningar",
                                remove_limits: "Ta bort gr\xe4nser",
                                usage: "{{usedStorage}}/{{totalStorage}} uppladdade under de senaste 30 dagarna"
                            },
                            transfer_count_widget: {
                                usage: "{{usedTransfers}}/{{totalTransfers}} \xf6verf\xf6ringar uppladdade de senaste 30 dagarna"
                            },
                            toggle_account_menu: "V\xe4xla kontomeny",
                            toggle_menu: "V\xe4xla meny",
                            transfers: "\xd6verf\xf6ringar",
                            upgrade: "Uppgradera",
                            "use-cases": "Anv\xe4ndningsfall",
                            workspaceSettings: "Inst\xe4llningar f\xf6r arbetsyta",
                            "wetransfer-ultimate": "WeTransfer <br /> Ultimate",
                            product_updates_dropdown: {
                                title: "Produktuppdateringar",
                                empty_title: "Missa aldrig n\xe5gonting!",
                                empty_subtitle: "H\xe4r kommer dina aviseringar att visas.",
                                previous_notifications: "Tidligere aviseringar"
                            }
                        }
                    },
                    "tr-TR": {
                        topNav: {
                            about: "Hakkımızda",
                            advertising: "Advertising",
                            accountSettings: "Hesap ayarları",
                            blog: "Blog",
                            whatsNew: "Yenilikler",
                            branding: "Profil ayarları",
                            customize: "Sayfanızı \xf6zelleştirin",
                            contacts: "Kişiler",
                            "create-review": "İnceleme oluşturun",
                            explore: {
                                "advertising-policies": "Reklam politikaları",
                                advertising: "Bize reklam verin",
                                awards: "\xd6d\xfcller",
                                careers: "Kkariyer",
                                collect: "İlham panoları oluştur",
                                company: "Şirket",
                                csr: "Şirket Toplumsal Sorumluluğu",
                                culture: "K\xfclt\xfcr",
                                distribution: "İ\xe7eriğinizi dağıtın",
                                getBenefitsAndPerks: "Avantajlardan faydalanın",
                                features: "T\xfcm \xf6zellikler",
                                "file-sharing": "Dosyalarınızı paylaşın",
                                leadership: "Liderlik",
                                legal: "Yasal ve Gizlilik",
                                newsroom: "Haber Odası",
                                photographers: "Fotoğraf\xe7ılar i\xe7in",
                                videographers: "Video grafikerleri i\xe7in",
                                "designers-illustrators": "Tasarımcılar ve ill\xfcstrat\xf6rler i\xe7in",
                                "for-businesses": "İşletmeler i\xe7in",
                                "responsible-advertising": "Sorumlu uygulamalar",
                                security: "Dosyalarınızı koruyun",
                                sellFiles: "\xc7alışmalarınız i\xe7in \xf6deme alın",
                                students: "\xd6ğrenciler i\xe7in",
                                teams: "Ekibinizle iş birliği yapın"
                            },
                            features: "\xd6zellikler",
                            gotoWorkspace: "\xc7alışma alanınıza gidin",
                            help: "Yardım",
                            home: "Ana Sayfa",
                            login: "Giriş yap",
                            logout: "\xc7ıkış yap",
                            members_one: "{{count}} \xfcye",
                            members_other: "{{count}} \xfcye",
                            more: "Daha fazlası",
                            "plan-tiers": {
                                collaborate: "İş Birliği planı",
                                distribute: "Dağıtım planı",
                                free: "Temel plan",
                                free_legacy: "\xdccretsiz plan",
                                lite: "Lite plan",
                                plus: "Pro plan",
                                premium_2022: "Premium plan",
                                pro_2022: "Pro plan",
                                starter: "Starter planı",
                                transfer: "Transfer planı",
                                ultimate: "Ultimate plan",
                                enterprise: "Teams planı",
                                enterprise_custom_contract: "Enterprise planı"
                            },
                            "powered-by": "Geliştirici: <1>WeTransfer</1>",
                            pricing: "Fiyatlandırma",
                            resources: "Kaynaklar",
                            "send-files": "Dosya g\xf6nder",
                            signup: "Kaydol",
                            storage_widget: {
                                compare: "Planları karşılaştır",
                                description: "Transferler ve incelemeler d\xe2hildir",
                                remove_limits: "Sınırları kaldır",
                                usage: "{{usedStorage}}/{{totalStorage}} son 30 g\xfcnde y\xfcklendi"
                            },
                            transfer_count_widget: {
                                usage: "{{usedTransfers}}/{{totalTransfers}} son 30 g\xfcnde y\xfcklenen transferler"
                            },
                            toggle_account_menu: "Hesap men\xfcs\xfcn\xfc a\xe7/kapat",
                            toggle_menu: "Men\xfcy\xfc a\xe7/kapat",
                            transfers: "Transferler",
                            upgrade: "Hesabınızı y\xfckseltin",
                            "use-cases": "\xd6rnekleri kullanın",
                            workspaceSettings: "\xc7alışma Alanı ayarları",
                            "wetransfer-ultimate": "WeTransfer <br /> Ultimate",
                            product_updates_dropdown: {
                                title: "\xdcr\xfcn g\xfcncellemeleri",
                                empty_title: "Hi\xe7bir şeyi ka\xe7ırmayın!",
                                empty_subtitle: "Bildirimleriniz burada g\xf6r\xfcnecek.",
                                previous_notifications: "\xd6nceki bildirimler"
                            }
                        }
                    }
                },
                eP = eH();
            var eC = a(43701);
            let eA = () => {},
                eE = (0, g.createContext)({
                    app: eC.Uu.TRANSFER,
                    linkAs: "a",
                    setLinkAs: eA,
                    mode: "light",
                    setMode: eA,
                    id: "",
                    setId: eA,
                    user: void 0,
                    setUser: eA,
                    workspaces: [],
                    currentWorkspace: void 0,
                    setWorkspaces: eA,
                    setBoundaryElement: eA,
                    isFreeTier: !0,
                    isLegacyTier: !1,
                    isAuthorized: !1,
                    activeStorage: void 0,
                    activeTransferNumber: void 0,
                    activePlanTier: eC.js.FREE
                }),
                eM = ({
                    children: e,
                    app: t,
                    mode: a,
                    user: n,
                    workspaces: r
                }) => {
                    var i, o;
                    let [l, s] = (0, g.useState)("a"), [d, u] = (0, g.useState)(null != a ? a : "light"), [c, f] = (0, g.useState)(null != r ? r : []), [m, p] = (0, g.useState)(""), [h, y] = (0, g.useState)(n), [w, b] = (0, g.useState)(), v = c.find(e => !0 === e.active), x = null == v ? void 0 : v.planName, S = null != (i = null == v ? void 0 : v.storage) ? i : void 0, L = null != (o = null == v ? void 0 : v.transferNumber) ? o : void 0, k = c.length > 0 || !!(null == h ? void 0 : h.loggedIn), T = (0, g.useMemo)(() => x === eC.js.PLUS || x === eC.js.PRO_2022 || x === eC.js.PREMIUM_2022 || x === eC.js.FREE_LEGACY, [x]), B = (0, g.useMemo)(() => x === eC.js.FREE || x === eC.js.FREE_LEGACY, [x]), D = (0, g.useMemo)(() => ({
                        app: null != t ? t : eC.Uu.TRANSFER,
                        linkAs: l,
                        setLinkAs: s,
                        mode: d,
                        setMode: u,
                        id: m,
                        setId: p,
                        user: h,
                        setUser: y,
                        isFreeTier: B,
                        isLegacyTier: T,
                        isAuthorized: k,
                        workspaces: c,
                        currentWorkspace: v,
                        setWorkspaces: f,
                        activeStorage: S,
                        activeTransferNumber: L,
                        activePlanTier: x,
                        boundaryElement: w,
                        setBoundaryElement: b
                    }), [t, l, s, d, u, m, B, T, k, p, h, y, c, v, f, S, L, x, w, b]);
                    return (0, _.jsx)(eE.Provider, {
                        value: D,
                        children: e
                    })
                };
            eM.displayName = "NavContextProvider";
            let ej = !!("undefined" != typeof window && window.document && window.document.createElement),
                eO = new Map,
                ez = e => {
                    if (!ej || !("undefined" != typeof window && "matchMedia" in window)) return (e => {
                        eO.has(e) || (eO.set(e, !0), console.warn(e))
                    })("matchMedia is not supported, this could happen both because window.matchMedia is not supported by your current browser or you're using the useMediaQuery hook whilst server side rendering."), !1;
                    let [t, a] = (0, g.useState)(!!window.matchMedia(e).matches);
                    return (0, g.useEffect)(() => {
                        let t = window.matchMedia(e),
                            n = () => {
                                a(!!t.matches)
                            };
                        try {
                            t.addEventListener("change", n)
                        } catch (e) {
                            t.addListener(n)
                        }
                        return n(), () => {
                            try {
                                t.removeEventListener("change", n)
                            } catch (e) {
                                t.removeListener(n)
                            }
                        }
                    }, [e]), t
                };

            function eR() {
                let e = function() {
                        let [e, t] = (0, g.useState)(!1);
                        return (0, g.useEffect)(() => {
                            t(!0)
                        }, []), e
                    }(),
                    t = e && void 0 !== navigator && /Android|CriOS|FxiOS|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    a = ez("(max-width: 600px)") || t,
                    n = ez("(max-width: 800px)");
                return {
                    isMobile: !!e && a,
                    isTablet: !!e && n
                }
            }
            var eW = a(76616),
                eI = a(85752);
            (0, eI.$)(".styles_module_container__78d3913b{align-items:center;background:#fff;border-radius:.5rem;display:flex;height:3rem;justify-content:center;outline:1px solid rgba(0,0,0,.05);position:absolute;right:1rem;top:1rem;width:3rem;z-index:90}.styles_module_container__78d3913b.styles_module_mobile__78d3913b{margin:0 auto;outline:none;position:static}");
            var eF = {
                mobile: "styles_module_mobile__78d3913b",
                container: "styles_module_container__78d3913b"
            };
            let eU = () => {
                let {
                    isMobile: e
                } = eR();
                return (0, _.jsx)("div", {
                    "data-testid": "loading-spinner",
                    className: (0, f.A)(eF.container, e && eF.mobile),
                    children: (0, _.jsx)(eW.y, {
                        size: "small"
                    })
                })
            };
            var e$ = a(11222),
                eX = a(30149),
                eq = a(84873);
            let eV = () => {
                    let e = "undefined" != typeof window ? window.location.hostname : "wetransfer.com",
                        t = e.split("."),
                        a = t.length > 1 ? `${t[t.length-2]}.${t[t.length-1]}` : e,
                        n = void 0 !== t[t.length - 3],
                        r = /^pr\d+-.*\.wetransferbeta\.com$/.test(e);
                    return {
                        domain: a,
                        hasCustomDomain: n && !r
                    }
                },
                eG = ({
                    path: e,
                    needsAbsolutePath: t = !1,
                    subdomain: a = "",
                    queryParams: n
                }) => {
                    let {
                        domain: r,
                        hasCustomDomain: i
                    } = eV(), o = n ? n.toString() : "", l = i && (e.startsWith("/blog") || e.startsWith("/explore"));
                    if (t || l) {
                        let t = "" !== a.trim() ? `${a}.${r}` : r;
                        return void 0 === n ? `https://${t}${e}` : `https://${t}${e}?${o}`
                    }
                    return void 0 === n ? e : `${e}?${o}`
                },
                eK = ({
                    navPagesQueryParams: e = {}
                }) => {
                    let {
                        app: t
                    } = (0, g.useContext)(eE), {
                        t: a
                    } = O(), {
                        domain: n
                    } = eV(), r = t === eC.Uu.PORTALS;
                    return {
                        explore: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/explore",
                                    needsAbsolutePath: r,
                                    queryParams: e.explore
                                }),
                                label: a("explore.company"),
                                trackingEvent: "clickNavCompany"
                            },
                            fileSharing: {
                                data: {
                                    type: "link",
                                    pathname: eG({
                                        path: "/explore/file-sharing",
                                        needsAbsolutePath: r,
                                        queryParams: e.fileSharing
                                    }),
                                    label: a("explore.file-sharing"),
                                    trackingEvent: "clickNavFeaturesFileSharing"
                                }
                            },
                            dataSecurity: {
                                data: {
                                    type: "link",
                                    pathname: eG({
                                        path: "/explore/data-security",
                                        needsAbsolutePath: r,
                                        queryParams: e.dataSecurity
                                    }),
                                    label: a("explore.security"),
                                    trackingEvent: "clickNavFeaturesDataSecurity"
                                }
                            },
                            distribution: {
                                data: {
                                    type: "link",
                                    pathname: eG({
                                        path: "/explore/distribution",
                                        needsAbsolutePath: r,
                                        queryParams: e.distribution
                                    }),
                                    label: a("explore.distribution"),
                                    trackingEvent: "clickNavDistribution"
                                }
                            },
                            branding: {
                                data: {
                                    type: "link",
                                    pathname: eG({
                                        path: "/explore/branding",
                                        needsAbsolutePath: r,
                                        queryParams: e.branding
                                    }),
                                    label: a("customize"),
                                    trackingEvent: "clickNavFeaturesBranding"
                                }
                            },
                            teams: {
                                data: {
                                    type: "link",
                                    pathname: eG({
                                        path: "/explore/wetransfer-teams",
                                        needsAbsolutePath: r,
                                        queryParams: e.teams
                                    }),
                                    label: a("explore.teams"),
                                    trackingEvent: "clickNavTeams"
                                }
                            },
                            "for-businesses": {
                                data: {
                                    type: "link",
                                    pathname: eG({
                                        path: "/explore/wetransfer-teams",
                                        needsAbsolutePath: r,
                                        queryParams: e.forBusinesses
                                    }),
                                    label: a("explore.for-businesses"),
                                    trackingEvent: "clickNavForBusinesses"
                                }
                            },
                            careers: {
                                data: {
                                    type: "link",
                                    label: a("explore.careers"),
                                    pathname: eG({
                                        path: "/explore/careers",
                                        needsAbsolutePath: r,
                                        queryParams: e.careers
                                    }),
                                    trackingEvent: "clickNavCareers"
                                }
                            },
                            culture: {
                                data: {
                                    type: "link",
                                    label: a("explore.culture"),
                                    pathname: eG({
                                        path: "/explore/culture",
                                        needsAbsolutePath: r,
                                        queryParams: e.culture
                                    }),
                                    trackingEvent: "clickNavCulture"
                                }
                            },
                            "sell-files-get-paid": {
                                data: {
                                    type: "link",
                                    pathname: eG({
                                        path: "/explore/sell-files-get-paid",
                                        needsAbsolutePath: r,
                                        queryParams: e.sellFilesGetPaid
                                    }),
                                    label: a("explore.sellFiles"),
                                    trackingEvent: "clickSellGetPaid"
                                }
                            },
                            "subscriber-benefits": {
                                data: {
                                    type: "link",
                                    pathname: eG({
                                        path: "/explore/subscriber-benefits",
                                        needsAbsolutePath: r,
                                        queryParams: e.subscriberBenefits
                                    }),
                                    label: a("explore.getBenefitsAndPerks"),
                                    trackingEvent: "clickSubscriberBenefits"
                                }
                            },
                            corporate: {
                                data: {
                                    type: "link",
                                    label: a("explore.newsroom"),
                                    pathname: eG({
                                        path: "/blog/newsroom",
                                        needsAbsolutePath: r,
                                        queryParams: e.corporate
                                    }),
                                    trackingEvent: "clickNavNewsroom"
                                },
                                leadership: {
                                    data: {
                                        type: "link",
                                        label: a("explore.leadership"),
                                        pathname: eG({
                                            path: "/explore/corporate/leadership",
                                            needsAbsolutePath: r,
                                            queryParams: e.corporateLeadership
                                        }),
                                        trackingEvent: "clickNavLeadership"
                                    }
                                },
                                awards: {
                                    data: {
                                        type: "link",
                                        label: a("explore.awards"),
                                        pathname: eG({
                                            path: "/explore/corporate/awards",
                                            needsAbsolutePath: r,
                                            queryParams: e.corporateAwards
                                        }),
                                        trackingEvent: "clickNavAwards"
                                    }
                                }
                            },
                            "all-features": {
                                data: {
                                    type: "link",
                                    label: a("features"),
                                    pathname: eG({
                                        path: "/explore/all-features",
                                        needsAbsolutePath: r,
                                        queryParams: e.allFeatures
                                    }),
                                    trackingEvent: "clickNavAllFeatures"
                                }
                            },
                            "for-students": {
                                data: {
                                    type: "link",
                                    pathname: eG({
                                        path: "/explore/for-students",
                                        needsAbsolutePath: r,
                                        queryParams: e.forStudents
                                    }),
                                    label: a("explore.students"),
                                    trackingEvent: "clickNavForStudents"
                                }
                            },
                            photographers: {
                                data: {
                                    type: "link",
                                    label: a("explore.photographers"),
                                    pathname: eG({
                                        path: "/explore/photographers",
                                        needsAbsolutePath: r,
                                        queryParams: e.photographers
                                    }),
                                    trackingEvent: "clickNavPhotographers"
                                }
                            },
                            videographers: {
                                data: {
                                    type: "link",
                                    label: a("explore.videographers"),
                                    pathname: eG({
                                        path: "/explore/videographers",
                                        needsAbsolutePath: r,
                                        queryParams: e.videographers
                                    }),
                                    trackingEvent: "clickNavVideographers"
                                }
                            },
                            "designers-illustrators": {
                                data: {
                                    type: "link",
                                    label: a("explore.designers-illustrators"),
                                    pathname: eG({
                                        path: "/explore/designers-illustrators",
                                        needsAbsolutePath: r,
                                        queryParams: e.designersIllustrators
                                    }),
                                    trackingEvent: "clickNavDesignersIllustrators"
                                }
                            },
                            csr: {
                                data: {
                                    type: "link",
                                    label: a("explore.csr"),
                                    pathname: eG({
                                        path: "/explore/csr",
                                        needsAbsolutePath: r,
                                        queryParams: e.csr
                                    }),
                                    trackingEvent: "clickNavCsr"
                                }
                            },
                            legal: {
                                data: {
                                    type: "link",
                                    label: a("explore.legal"),
                                    pathname: eG({
                                        path: "/explore/legal/principles-of-content-protection",
                                        needsAbsolutePath: r,
                                        queryParams: e.legal
                                    }),
                                    trackingEvent: "clickNavLegal"
                                }
                            },
                            advertising: {
                                data: {
                                    type: "link",
                                    pathname: eG({
                                        path: "/explore/advertising",
                                        needsAbsolutePath: r,
                                        queryParams: e.advertising
                                    }),
                                    label: a("explore.advertising"),
                                    trackingEvent: "clickNavAdvertising"
                                },
                                responsible: {
                                    data: {
                                        type: "link",
                                        pathname: eG({
                                            path: "/explore/advertising/responsible",
                                            needsAbsolutePath: r,
                                            queryParams: e.advertisingResponsible
                                        }),
                                        label: a("explore.responsible-advertising"),
                                        trackingEvent: "clickNavResponsibleAdvertising"
                                    }
                                },
                                policies: {
                                    data: {
                                        type: "link",
                                        pathname: eG({
                                            path: "/explore/advertising/policies",
                                            needsAbsolutePath: r,
                                            queryParams: e.advertisingPolicies
                                        }),
                                        label: a("explore.advertising-policies"),
                                        trackingEvent: "clickNavAdvertisingPolicies"
                                    }
                                }
                            },
                            weTransferSignLanding: {
                                data: {
                                    type: "link",
                                    label: "WeTransfer Sign",
                                    pathname: eG({
                                        path: "/explore-sign",
                                        needsAbsolutePath: r
                                    }),
                                    trackingEvent: "clickNavWeTransferSignLanding"
                                }
                            }
                        },
                        portals: {
                            data: {
                                type: "link",
                                label: "Reviews",
                                pathname: eG({
                                    path: "/",
                                    needsAbsolutePath: !r,
                                    subdomain: "portals",
                                    queryParams: e.portals
                                }),
                                trackingEvent: "clickNavPortals"
                            },
                            reviews: {
                                create: {
                                    data: {
                                        type: "link",
                                        pathname: eG({
                                            path: "/reviews/create",
                                            needsAbsolutePath: !r,
                                            subdomain: "portals"
                                        }),
                                        label: a("create-review"),
                                        trackingEvent: "clickNavCreateReview"
                                    }
                                }
                            }
                        },
                        collect: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/explore/collect",
                                    needsAbsolutePath: r,
                                    queryParams: e.collect
                                }),
                                label: a("explore.collect"),
                                trackingEvent: "clickNavCollect"
                            }
                        },
                        signup: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/pricing?trk=WT202005_signup",
                                    needsAbsolutePath: r,
                                    queryParams: e.signup
                                }),
                                label: a("signup"),
                                trackingEvent: "clickNavSignup"
                            }
                        },
                        gotoWorkspace: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/log-in",
                                    needsAbsolutePath: r,
                                    queryParams: e.gotoWorkspace
                                }),
                                label: a("gotoWorkspace"),
                                trackingEvent: "clickNavWorkspaces"
                            }
                        },
                        login: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/log-in",
                                    needsAbsolutePath: r,
                                    queryParams: e.login
                                }),
                                label: a("login"),
                                trackingEvent: "clickNavSignin",
                                attr: {
                                    "data-prevent-routing": "true"
                                }
                            }
                        },
                        logout: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/logout",
                                    needsAbsolutePath: r,
                                    queryParams: e.logout
                                }),
                                label: a("logout"),
                                trackingEvent: "clickNavLogout"
                            }
                        },
                        pricing: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/pricing?trk=NAV_pricing",
                                    needsAbsolutePath: r,
                                    queryParams: e.pricing
                                }),
                                label: a("pricing"),
                                trackingEvent: "clickNavPricing"
                            }
                        },
                        upgrade: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/pricing",
                                    needsAbsolutePath: r,
                                    queryParams: e.upgrade
                                }),
                                label: a("upgrade"),
                                trackingEvent: "clickNavUpgrade"
                            }
                        },
                        usageBarCta: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/pricing",
                                    needsAbsolutePath: r,
                                    queryParams: e.upgrade
                                }),
                                label: a("upgrade"),
                                trackingEvent: "clickNavUsageBarCta"
                            }
                        },
                        upload: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/",
                                    needsAbsolutePath: r,
                                    queryParams: e.upload
                                }),
                                label: a("send-files"),
                                trackingEvent: "clickNavUpload"
                            }
                        },
                        help: {
                            data: {
                                type: "link",
                                pathname: e.help ? `https://help.wetransfer.com/hc/en-us?${e.help.toString()}` : "https://help.wetransfer.com/hc/en-us",
                                label: a("help"),
                                trackingEvent: "clickNavHelp"
                            }
                        },
                        wepresent: {
                            data: {
                                type: "link",
                                pathname: e.wepresent ? `https://wepresent.${n}/?${e.wepresent.toString()}` : `https://wepresent.${n}/`,
                                label: "WePresent",
                                trackingEvent: "clickNavWepresent"
                            }
                        },
                        blog: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/blog",
                                    needsAbsolutePath: r,
                                    queryParams: e.blog
                                }),
                                label: a("blog"),
                                trackingEvent: "clickNavBlog"
                            }
                        },
                        whatsNew: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/blog/product-updates",
                                    needsAbsolutePath: r,
                                    queryParams: e.whatsNew
                                }),
                                label: a("whatsNew"),
                                trackingEvent: "clickNavWhatsNew"
                            }
                        },
                        account: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/account",
                                    needsAbsolutePath: r,
                                    queryParams: e.account
                                }),
                                label: a("accountSettings"),
                                trackingEvent: "clickNavAccountSettings"
                            }
                        },
                        transfers: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/transfers",
                                    needsAbsolutePath: r,
                                    queryParams: e.transfers
                                }),
                                label: a("transfers"),
                                trackingEvent: "clickNavTransfers"
                            }
                        },
                        workspace: {
                            settings: {
                                data: {
                                    type: "link",
                                    pathname: eG({
                                        path: "/workspace/branded-page",
                                        needsAbsolutePath: r,
                                        queryParams: e.workspaceSettings
                                    }),
                                    label: a("workspaceSettings"),
                                    trackingEvent: "clickNavWorkspaceSettings"
                                }
                            },
                            "branded-page": {
                                data: {
                                    type: "link",
                                    pathname: eG({
                                        path: "/workspace/branded-page",
                                        needsAbsolutePath: r,
                                        queryParams: e.workspaceBrandedPage
                                    }),
                                    label: a("branding"),
                                    trackingEvent: "clickNavBranding"
                                }
                            }
                        },
                        contacts: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/contacts",
                                    needsAbsolutePath: r,
                                    queryParams: e.contacts
                                }),
                                label: a("contacts"),
                                trackingEvent: "clickNavContacts"
                            }
                        },
                        home: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/",
                                    needsAbsolutePath: r,
                                    queryParams: e.home
                                }),
                                label: a("home"),
                                trackingEvent: "clickNavHome"
                            }
                        },
                        logo: {
                            data: {
                                type: "link",
                                pathname: eG({
                                    path: "/",
                                    needsAbsolutePath: r,
                                    queryParams: e.logo
                                }),
                                label: "Wetransfer Logo",
                                trackingEvent: "clickNavLogo"
                            }
                        }
                    }
                };
            (0, eI.$)(".styles_module_wtDisplayHeadingLargeBoldNarrow__8b18fdc2,.styles_module_wtDisplayHeadingLargeBoldWide__8b18fdc2,.styles_module_wtDisplayHeadingLargeBold__8b18fdc2,.styles_module_wtDisplayHeadingLargeNarrow__8b18fdc2,.styles_module_wtDisplayHeadingLargeWide__8b18fdc2,.styles_module_wtDisplayHeadingLarge__8b18fdc2,.styles_module_wtDisplayHeadingMediumBoldNarrow__8b18fdc2,.styles_module_wtDisplayHeadingMediumBoldWide__8b18fdc2,.styles_module_wtDisplayHeadingMediumBold__8b18fdc2,.styles_module_wtDisplayHeadingMediumNarrow__8b18fdc2,.styles_module_wtDisplayHeadingMediumWide__8b18fdc2,.styles_module_wtDisplayHeadingMedium__8b18fdc2,.styles_module_wtDisplayHeadingSmallBoldNarrow__8b18fdc2,.styles_module_wtDisplayHeadingSmallBoldWide__8b18fdc2,.styles_module_wtDisplayHeadingSmallBold__8b18fdc2,.styles_module_wtDisplayHeadingSmallNarrow__8b18fdc2,.styles_module_wtDisplayHeadingSmallWide__8b18fdc2,.styles_module_wtDisplayHeadingSmall__8b18fdc2,.styles_module_wtDisplayHeadingXSmallBold__8b18fdc2,.styles_module_wtDisplayHeading__8b18fdc2{font-family:GT Super WT,Times New Roman,Times,serif;font-size:inherit}.styles_module_wtDisplayHeadingLargeWide__8b18fdc2,.styles_module_wtDisplayHeadingLarge__8b18fdc2{font-size:64px;font-weight:400;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeNarrow__8b18fdc2{font-size:40px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingLargeBoldWide__8b18fdc2,.styles_module_wtDisplayHeadingLargeBold__8b18fdc2{font-size:64px;font-weight:900;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeBoldNarrow__8b18fdc2{font-size:40px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumWide__8b18fdc2,.styles_module_wtDisplayHeadingMedium__8b18fdc2{font-size:48px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumNarrow__8b18fdc2{font-size:34px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingMediumBoldWide__8b18fdc2,.styles_module_wtDisplayHeadingMediumBold__8b18fdc2{font-size:48px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumBoldNarrow__8b18fdc2{font-size:34px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallWide__8b18fdc2,.styles_module_wtDisplayHeadingSmall__8b18fdc2{font-size:36px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallNarrow__8b18fdc2{font-size:28px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldWide__8b18fdc2,.styles_module_wtDisplayHeadingSmallBold__8b18fdc2{font-size:36px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldNarrow__8b18fdc2{font-size:28px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingXSmallBold__8b18fdc2{font-size:14px;font-weight:900;line-height:1.2}.styles_module_wtSubHeading__8b18fdc2,.styles_module_wtTextHeadingLargeBoldNarrow__8b18fdc2,.styles_module_wtTextHeadingLargeBoldWide__8b18fdc2,.styles_module_wtTextHeadingLargeBold__8b18fdc2,.styles_module_wtTextHeadingLargeNarrow__8b18fdc2,.styles_module_wtTextHeadingLargeWide__8b18fdc2,.styles_module_wtTextHeadingLarge__8b18fdc2,.styles_module_wtTextHeadingMediumBoldWide__8b18fdc2,.styles_module_wtTextHeadingMediumBold__8b18fdc2,.styles_module_wtTextHeadingMediumNarrow__8b18fdc2,.styles_module_wtTextHeadingMediumSemiNarrow__8b18fdc2,.styles_module_wtTextHeadingMediumSemiWide__8b18fdc2,.styles_module_wtTextHeadingMediumSemi__8b18fdc2,.styles_module_wtTextHeadingMediumWide__8b18fdc2,.styles_module_wtTextHeadingMedium__8b18fdc2,.styles_module_wtTextHeadingSmallBoldNarrow__8b18fdc2,.styles_module_wtTextHeadingSmallBoldWide__8b18fdc2,.styles_module_wtTextHeadingSmallBold__8b18fdc2,.styles_module_wtTextHeadingSmallNarrow__8b18fdc2,.styles_module_wtTextHeadingSmallWide__8b18fdc2,.styles_module_wtTextHeadingSmall__8b18fdc2,.styles_module_wtTextHeadingXLargeNarrow__8b18fdc2,.styles_module_wtTextHeadingXLargeWide__8b18fdc2,.styles_module_wtTextHeadingXLarge__8b18fdc2,.styles_module_wtTextHeading__8b18fdc2{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtTextHeadingXLargeWide__8b18fdc2,.styles_module_wtTextHeadingXLarge__8b18fdc2{font-size:64px;font-weight:500}.styles_module_wtTextHeadingXLargeNarrow__8b18fdc2{font-size:36px;font-weight:500}.styles_module_wtTextHeadingLargeWide__8b18fdc2,.styles_module_wtTextHeadingLarge__8b18fdc2{font-size:36px;font-weight:400}.styles_module_wtTextHeadingLargeNarrow__8b18fdc2{font-size:24px;font-weight:400}.styles_module_wtTextHeadingLargeBoldWide__8b18fdc2,.styles_module_wtTextHeadingLargeBold__8b18fdc2{font-size:36px;font-weight:700}.styles_module_wtTextHeadingLargeBoldNarrow__8b18fdc2{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumWide__8b18fdc2,.styles_module_wtTextHeadingMedium__8b18fdc2{font-size:24px;font-weight:400}.styles_module_wtTextHeadingMediumSemiWide__8b18fdc2,.styles_module_wtTextHeadingMediumSemi__8b18fdc2{font-size:24px;font-weight:500}.styles_module_wtTextHeadingMediumNarrow__8b18fdc2{font-size:20px;font-weight:400}.styles_module_wtTextHeadingMediumSemiNarrow__8b18fdc2{font-size:20px;font-weight:500}.styles_module_wtTextHeadingMediumBoldWide__8b18fdc2,.styles_module_wtTextHeadingMediumBold__8b18fdc2{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumBoldWide__8b18fdc2{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallWide__8b18fdc2,.styles_module_wtTextHeadingSmall__8b18fdc2{font-size:20px;font-weight:400}.styles_module_wtTextHeadingSmallNarrow__8b18fdc2{font-size:18px;font-weight:400}.styles_module_wtTextHeadingSmallBoldWide__8b18fdc2,.styles_module_wtTextHeadingSmallBold__8b18fdc2{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallBoldNarrow__8b18fdc2{font-size:18px;font-weight:700}.styles_module_wtSubHeading__8b18fdc2{font-size:14px;font-weight:700;line-height:1.25;text-transform:uppercase}.styles_module_wtBodyLargeBold__8b18fdc2,.styles_module_wtBodyLarge__8b18fdc2,.styles_module_wtBodyMediumBold__8b18fdc2,.styles_module_wtBodyMediumSemi__8b18fdc2,.styles_module_wtBodyMedium__8b18fdc2,.styles_module_wtBodySmallBold__8b18fdc2,.styles_module_wtBodySmallSemi__8b18fdc2,.styles_module_wtBodySmall__8b18fdc2,.styles_module_wtBodyXLarge__8b18fdc2,.styles_module_wtBodyXSmallSemi__8b18fdc2,.styles_module_wtBodyXSmall__8b18fdc2{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.5}.styles_module_wtBodyXLarge__8b18fdc2{font-size:24px;font-weight:400}.styles_module_wtBodyLarge__8b18fdc2{font-size:18px;font-weight:400}.styles_module_wtBodyLargeBold__8b18fdc2{font-size:18px;font-weight:700}.styles_module_wtBodyMedium__8b18fdc2{font-size:16px;font-weight:400}.styles_module_wtBodyMediumSemi__8b18fdc2{font-size:16px;font-weight:500}.styles_module_wtBodyMediumBold__8b18fdc2{font-size:16px;font-weight:700}.styles_module_wtBodySmall__8b18fdc2{font-size:14px;font-weight:400}.styles_module_wtBodySmallSemi__8b18fdc2{font-size:14px;font-weight:500}.styles_module_wtBodySmallBold__8b18fdc2{font-size:14px;font-weight:700}.styles_module_wtBodyXSmall__8b18fdc2{font-size:12px;font-weight:400}.styles_module_wtBodyXSmallSemi__8b18fdc2{font-size:12px;font-weight:500}.styles_module_wtLabelLargeBold__8b18fdc2,.styles_module_wtLabelLargeSemi__8b18fdc2,.styles_module_wtLabelLarge__8b18fdc2,.styles_module_wtLabelMediumBold__8b18fdc2,.styles_module_wtLabelMediumSemi__8b18fdc2,.styles_module_wtLabelMedium__8b18fdc2,.styles_module_wtLabelSmallBold__8b18fdc2,.styles_module_wtLabelSmallSemi__8b18fdc2,.styles_module_wtLabelSmall__8b18fdc2,.styles_module_wtLabelXSmallBold__8b18fdc2,.styles_module_wtLabelXSmallSemi__8b18fdc2,.styles_module_wtLabelXSmall__8b18fdc2{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtLabelLarge__8b18fdc2{font-size:16px;font-weight:400}.styles_module_wtLabelLargeSemi__8b18fdc2{font-size:16px;font-weight:500}.styles_module_wtLabelLargeBold__8b18fdc2{font-size:16px;font-weight:700}.styles_module_wtLabelMedium__8b18fdc2{font-size:14px;font-weight:400}.styles_module_wtLabelMediumSemi__8b18fdc2{font-size:14px;font-weight:500}.styles_module_wtLabelMediumBold__8b18fdc2{font-size:14px;font-weight:700}.styles_module_wtLabelSmall__8b18fdc2{font-size:12px;font-weight:400}.styles_module_wtLabelSmallSemi__8b18fdc2{font-size:12px;font-weight:500}.styles_module_wtLabelSmallBold__8b18fdc2{font-size:12px;font-weight:700}.styles_module_wtLabelXSmall__8b18fdc2{font-size:10px;font-weight:400}.styles_module_wtLabelXSmallSemi__8b18fdc2{font-size:10px;font-weight:500}.styles_module_wtLabelXSmallBold__8b18fdc2{font-size:10px;font-weight:700}.styles_module_copyright__8b18fdc2{align-items:baseline}.styles_module_wetransfer__8b18fdc2{color:inherit;font-family:GT Super WT,Times New Roman,Times,serif;font-size:inherit;font-size:14px;font-weight:900;line-height:1.2;margin-left:-.25rem}");
            var eY = {
                copyright: "styles_module_copyright__8b18fdc2",
                wetransfer: "styles_module_wetransfer__8b18fdc2"
            };
            let eJ = () => {
                let {
                    mode: e
                } = (0, g.useContext)(eE), t = eK({});
                return (0, _.jsx)(eX.N, {
                    href: "https://wetransfer.com",
                    appearance: "utility",
                    typography: "wt-body-small-semi",
                    mode: e,
                    className: eY.copyright,
                    onClick: (0, eq.eE)(t.logo.data),
                    children: (0, _.jsxs)(M, {
                        i18nKey: "powered-by",
                        children: ["Powered by ", (0, _.jsx)("span", {
                            className: eY.wetransfer,
                            children: "WeTransfer"
                        })]
                    })
                })
            };
            var eQ = a(85633);

            function eZ() {
                return (eZ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a)({}).hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            var e0 = function(e) {
                return g.createElement("svg", eZ({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 32,
                    height: 32,
                    fill: "none"
                }, e), r || (r = g.createElement("rect", {
                    width: 32,
                    height: 32,
                    fill: "url(#placeholder-logo_svg__a)",
                    rx: 8
                })), i || (i = g.createElement("defs", null, g.createElement("linearGradient", {
                    id: "placeholder-logo_svg__a",
                    x1: 25.5,
                    x2: 7.5,
                    y1: 0,
                    y2: 32,
                    gradientUnits: "userSpaceOnUse"
                }, g.createElement("stop", {
                    stopColor: "#FF3C11"
                }), g.createElement("stop", {
                    offset: 1,
                    stopColor: "#FFCB11"
                })))))
            };
            (0, eI.$)(".styles_module_wtDisplayHeadingLargeBoldNarrow__558fd836,.styles_module_wtDisplayHeadingLargeBoldWide__558fd836,.styles_module_wtDisplayHeadingLargeBold__558fd836,.styles_module_wtDisplayHeadingLargeNarrow__558fd836,.styles_module_wtDisplayHeadingLargeWide__558fd836,.styles_module_wtDisplayHeadingLarge__558fd836,.styles_module_wtDisplayHeadingMediumBoldNarrow__558fd836,.styles_module_wtDisplayHeadingMediumBoldWide__558fd836,.styles_module_wtDisplayHeadingMediumBold__558fd836,.styles_module_wtDisplayHeadingMediumNarrow__558fd836,.styles_module_wtDisplayHeadingMediumWide__558fd836,.styles_module_wtDisplayHeadingMedium__558fd836,.styles_module_wtDisplayHeadingSmallBoldNarrow__558fd836,.styles_module_wtDisplayHeadingSmallBoldWide__558fd836,.styles_module_wtDisplayHeadingSmallBold__558fd836,.styles_module_wtDisplayHeadingSmallNarrow__558fd836,.styles_module_wtDisplayHeadingSmallWide__558fd836,.styles_module_wtDisplayHeadingSmall__558fd836,.styles_module_wtDisplayHeadingXSmallBold__558fd836,.styles_module_wtDisplayHeading__558fd836{font-family:GT Super WT,Times New Roman,Times,serif;font-size:inherit}.styles_module_wtDisplayHeadingLargeWide__558fd836,.styles_module_wtDisplayHeadingLarge__558fd836{font-size:64px;font-weight:400;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeNarrow__558fd836{font-size:40px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingLargeBoldWide__558fd836,.styles_module_wtDisplayHeadingLargeBold__558fd836{font-size:64px;font-weight:900;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeBoldNarrow__558fd836{font-size:40px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumWide__558fd836,.styles_module_wtDisplayHeadingMedium__558fd836{font-size:48px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumNarrow__558fd836{font-size:34px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingMediumBoldWide__558fd836,.styles_module_wtDisplayHeadingMediumBold__558fd836{font-size:48px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumBoldNarrow__558fd836{font-size:34px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallWide__558fd836,.styles_module_wtDisplayHeadingSmall__558fd836{font-size:36px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallNarrow__558fd836{font-size:28px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldWide__558fd836,.styles_module_wtDisplayHeadingSmallBold__558fd836{font-size:36px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldNarrow__558fd836{font-size:28px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingXSmallBold__558fd836{font-size:14px;font-weight:900;line-height:1.2}.styles_module_wtSubHeading__558fd836,.styles_module_wtTextHeadingLargeBoldNarrow__558fd836,.styles_module_wtTextHeadingLargeBoldWide__558fd836,.styles_module_wtTextHeadingLargeBold__558fd836,.styles_module_wtTextHeadingLargeNarrow__558fd836,.styles_module_wtTextHeadingLargeWide__558fd836,.styles_module_wtTextHeadingLarge__558fd836,.styles_module_wtTextHeadingMediumBoldWide__558fd836,.styles_module_wtTextHeadingMediumBold__558fd836,.styles_module_wtTextHeadingMediumNarrow__558fd836,.styles_module_wtTextHeadingMediumSemiNarrow__558fd836,.styles_module_wtTextHeadingMediumSemiWide__558fd836,.styles_module_wtTextHeadingMediumSemi__558fd836,.styles_module_wtTextHeadingMediumWide__558fd836,.styles_module_wtTextHeadingMedium__558fd836,.styles_module_wtTextHeadingSmallBoldNarrow__558fd836,.styles_module_wtTextHeadingSmallBoldWide__558fd836,.styles_module_wtTextHeadingSmallBold__558fd836,.styles_module_wtTextHeadingSmallNarrow__558fd836,.styles_module_wtTextHeadingSmallWide__558fd836,.styles_module_wtTextHeadingSmall__558fd836,.styles_module_wtTextHeadingXLargeNarrow__558fd836,.styles_module_wtTextHeadingXLargeWide__558fd836,.styles_module_wtTextHeadingXLarge__558fd836,.styles_module_wtTextHeading__558fd836{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtTextHeadingXLargeWide__558fd836,.styles_module_wtTextHeadingXLarge__558fd836{font-size:64px;font-weight:500}.styles_module_wtTextHeadingXLargeNarrow__558fd836{font-size:36px;font-weight:500}.styles_module_wtTextHeadingLargeWide__558fd836,.styles_module_wtTextHeadingLarge__558fd836{font-size:36px;font-weight:400}.styles_module_wtTextHeadingLargeNarrow__558fd836{font-size:24px;font-weight:400}.styles_module_wtTextHeadingLargeBoldWide__558fd836,.styles_module_wtTextHeadingLargeBold__558fd836{font-size:36px;font-weight:700}.styles_module_wtTextHeadingLargeBoldNarrow__558fd836{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumWide__558fd836,.styles_module_wtTextHeadingMedium__558fd836{font-size:24px;font-weight:400}.styles_module_wtTextHeadingMediumSemiWide__558fd836,.styles_module_wtTextHeadingMediumSemi__558fd836{font-size:24px;font-weight:500}.styles_module_wtTextHeadingMediumNarrow__558fd836{font-size:20px;font-weight:400}.styles_module_wtTextHeadingMediumSemiNarrow__558fd836{font-size:20px;font-weight:500}.styles_module_wtTextHeadingMediumBoldWide__558fd836,.styles_module_wtTextHeadingMediumBold__558fd836{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumBoldWide__558fd836{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallWide__558fd836,.styles_module_wtTextHeadingSmall__558fd836{font-size:20px;font-weight:400}.styles_module_wtTextHeadingSmallNarrow__558fd836{font-size:18px;font-weight:400}.styles_module_wtTextHeadingSmallBoldWide__558fd836,.styles_module_wtTextHeadingSmallBold__558fd836{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallBoldNarrow__558fd836{font-size:18px;font-weight:700}.styles_module_wtSubHeading__558fd836{font-size:14px;font-weight:700;line-height:1.25;text-transform:uppercase}.styles_module_wtBodyLargeBold__558fd836,.styles_module_wtBodyLarge__558fd836,.styles_module_wtBodyMediumBold__558fd836,.styles_module_wtBodyMediumSemi__558fd836,.styles_module_wtBodyMedium__558fd836,.styles_module_wtBodySmallBold__558fd836,.styles_module_wtBodySmallSemi__558fd836,.styles_module_wtBodySmall__558fd836,.styles_module_wtBodyXLarge__558fd836,.styles_module_wtBodyXSmallSemi__558fd836,.styles_module_wtBodyXSmall__558fd836{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.5}.styles_module_wtBodyXLarge__558fd836{font-size:24px;font-weight:400}.styles_module_wtBodyLarge__558fd836{font-size:18px;font-weight:400}.styles_module_wtBodyLargeBold__558fd836{font-size:18px;font-weight:700}.styles_module_wtBodyMedium__558fd836{font-size:16px;font-weight:400}.styles_module_wtBodyMediumSemi__558fd836{font-size:16px;font-weight:500}.styles_module_wtBodyMediumBold__558fd836{font-size:16px;font-weight:700}.styles_module_wtBodySmall__558fd836{font-size:14px;font-weight:400}.styles_module_wtBodySmallSemi__558fd836{font-size:14px;font-weight:500}.styles_module_wtBodySmallBold__558fd836{font-size:14px;font-weight:700}.styles_module_wtBodyXSmall__558fd836{font-size:12px;font-weight:400}.styles_module_wtBodyXSmallSemi__558fd836{font-size:12px;font-weight:500}.styles_module_wtLabelLargeBold__558fd836,.styles_module_wtLabelLargeSemi__558fd836,.styles_module_wtLabelLarge__558fd836,.styles_module_wtLabelMediumBold__558fd836,.styles_module_wtLabelMediumSemi__558fd836,.styles_module_wtLabelMedium__558fd836,.styles_module_wtLabelSmallBold__558fd836,.styles_module_wtLabelSmallSemi__558fd836,.styles_module_wtLabelSmall__558fd836,.styles_module_wtLabelXSmallBold__558fd836,.styles_module_wtLabelXSmallSemi__558fd836,.styles_module_wtLabelXSmall__558fd836{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtLabelLarge__558fd836{font-size:16px;font-weight:400}.styles_module_wtLabelLargeSemi__558fd836{font-size:16px;font-weight:500}.styles_module_wtLabelLargeBold__558fd836{font-size:16px;font-weight:700}.styles_module_wtLabelMedium__558fd836{font-size:14px;font-weight:400}.styles_module_wtLabelMediumSemi__558fd836{font-size:14px;font-weight:500}.styles_module_wtLabelMediumBold__558fd836{font-size:14px;font-weight:700}.styles_module_wtLabelSmall__558fd836{font-size:12px;font-weight:400}.styles_module_wtLabelSmallSemi__558fd836{font-size:12px;font-weight:500}.styles_module_wtLabelSmallBold__558fd836{font-size:12px;font-weight:700}.styles_module_wtLabelXSmall__558fd836{font-size:10px;font-weight:400}.styles_module_wtLabelXSmallSemi__558fd836{font-size:10px;font-weight:500}.styles_module_wtLabelXSmallBold__558fd836{font-size:10px;font-weight:700}.styles_module_workspaceThumb__558fd836{align-items:center;display:flex;gap:.75rem}.styles_module_workspaceThumb__558fd836 .styles_module_info__558fd836{display:flex;flex-direction:column;gap:0}.styles_module_workspaceThumb__558fd836 .styles_module_logo__558fd836{border-radius:8px;height:2rem;-o-object-fit:cover;object-fit:cover;width:2rem}.styles_module_workspaceThumb__558fd836 .styles_module_name__558fd836{color:inherit;font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-size:14px;font-weight:500;line-height:1.2;max-width:12rem;overflow:hidden;text-overflow:ellipsis}.styles_module_workspaceThumb__558fd836 .styles_module_details__558fd836{color:#676767;font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-size:10px;font-weight:400;line-height:1.2}.styles_module_workspaceSwitch__558fd836{align-items:center;cursor:default;display:flex;gap:.5rem;justify-content:space-between;padding:0}.styles_module_workspaceLink__558fd836{color:#161616;cursor:pointer}.styles_module_workspaceLink__558fd836:hover{color:#676767}");
            var e1 = {
                workspaceThumb: "styles_module_workspaceThumb__558fd836",
                info: "styles_module_info__558fd836",
                logo: "styles_module_logo__558fd836",
                name: "styles_module_name__558fd836",
                details: "styles_module_details__558fd836",
                workspaceSwitch: "styles_module_workspaceSwitch__558fd836",
                workspaceLink: "styles_module_workspaceLink__558fd836"
            };
            let e4 = ({
                    src: e,
                    name: t,
                    className: a
                }) => e ? (0, _.jsx)("img", {
                    className: (0, f.A)(e1.logo, a),
                    alt: t,
                    src: e
                }) : (0, _.jsx)(e0, {
                    className: e1.logo
                }),
                e2 = ({
                    alignment: e = "left",
                    name: t,
                    details: a,
                    logoSrc: n
                }) => {
                    let r = (0, _.jsxs)("div", {
                        className: e1.info,
                        children: [(0, _.jsx)("div", {
                            className: e1.name,
                            children: t
                        }), (0, _.jsx)("div", {
                            className: e1.details,
                            children: a
                        })]
                    });
                    return (0, _.jsxs)("div", {
                        className: (0, f.A)(e1.workspaceThumb),
                        children: ["right" === e && r, (0, _.jsx)(e4, {
                            src: n,
                            name: t
                        }), "left" === e && r]
                    })
                },
                e8 = Object.assign(e2, {
                    Thumb: e2,
                    Logo: e4,
                    Select: ({
                        active: e,
                        children: t,
                        href: a,
                        onSelect: n
                    }) => e ? (0, _.jsxs)("div", {
                        className: e1.workspaceSwitch,
                        children: [t, e && (0, _.jsx)(eQ.bT1, {})]
                    }) : (0, _.jsx)(eX.N, {
                        appearance: "utility",
                        className: (0, f.A)(e1.workspaceSwitch, e1.workspaceLink),
                        href: a,
                        onClick: n,
                        children: t
                    })
                });
            (0, eI.$)(".styles_module_navLink__0a0665ea{align-items:center;display:flex;gap:.25rem;line-height:1.25rem;padding:.875rem 1.5rem;white-space:normal}");
            var e5 = {
                navLink: "styles_module_navLink__0a0665ea"
            };
            let e3 = (0, g.forwardRef)((e, t) => {
                var {
                    as: a,
                    children: n,
                    variation: r = "neutral",
                    mode: i,
                    badge: o,
                    className: l
                } = e, s = (0, c.Tt)(e, ["as", "children", "variation", "mode", "badge", "className"]);
                let {
                    mode: d,
                    linkAs: u
                } = (0, g.useContext)(eE), {
                    isMobile: m
                } = eR();
                return (0, _.jsxs)(eX.N, Object.assign({
                    as: null != a ? a : u,
                    appearance: "navigational",
                    mode: i || d,
                    variation: r,
                    typography: "wt-label-medium-semi",
                    className: (0, f.A)(e5.navLink, l),
                    ref: t
                }, s, {
                    children: [!m && o, n, m && o]
                }))
            });
            e3.displayName = "NavLink";
            var e6 = a(81436);

            function e7() {
                return (e7 = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a)({}).hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            var e9 = function(e) {
                return g.createElement("svg", e7({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 16,
                    height: 16,
                    fill: "none"
                }, e), o || (o = g.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeWidth: 1.5,
                    d: "M5.172 8 8 10.828 10.83 8"
                })))
            };
            let te = (0, g.createContext)({
                    close: () => {},
                    isOpen: !1
                }),
                tt = () => {
                    let {
                        close: e
                    } = (0, g.useContext)(te), t = (0, g.useCallback)(t => a => (e(), "planName" in t ? (0, eq.R2)(t)(a) : t.pathname.includes("/logout") ? (0, eq.Eo)(t)(a) : (0, eq.eE)(t)(a)), [e]);
                    return {
                        close: e,
                        handleEventWithClose: t
                    }
                };
            (0, eI.$)(".styles_module_wtDisplayHeadingLargeBoldNarrow__8456d348,.styles_module_wtDisplayHeadingLargeBoldWide__8456d348,.styles_module_wtDisplayHeadingLargeBold__8456d348,.styles_module_wtDisplayHeadingLargeNarrow__8456d348,.styles_module_wtDisplayHeadingLargeWide__8456d348,.styles_module_wtDisplayHeadingLarge__8456d348,.styles_module_wtDisplayHeadingMediumBoldNarrow__8456d348,.styles_module_wtDisplayHeadingMediumBoldWide__8456d348,.styles_module_wtDisplayHeadingMediumBold__8456d348,.styles_module_wtDisplayHeadingMediumNarrow__8456d348,.styles_module_wtDisplayHeadingMediumWide__8456d348,.styles_module_wtDisplayHeadingMedium__8456d348,.styles_module_wtDisplayHeadingSmallBoldNarrow__8456d348,.styles_module_wtDisplayHeadingSmallBoldWide__8456d348,.styles_module_wtDisplayHeadingSmallBold__8456d348,.styles_module_wtDisplayHeadingSmallNarrow__8456d348,.styles_module_wtDisplayHeadingSmallWide__8456d348,.styles_module_wtDisplayHeadingSmall__8456d348,.styles_module_wtDisplayHeadingXSmallBold__8456d348,.styles_module_wtDisplayHeading__8456d348{font-family:GT Super WT,Times New Roman,Times,serif;font-size:inherit}.styles_module_wtDisplayHeadingLargeWide__8456d348,.styles_module_wtDisplayHeadingLarge__8456d348{font-size:64px;font-weight:400;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeNarrow__8456d348{font-size:40px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingLargeBoldWide__8456d348,.styles_module_wtDisplayHeadingLargeBold__8456d348{font-size:64px;font-weight:900;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeBoldNarrow__8456d348{font-size:40px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumWide__8456d348,.styles_module_wtDisplayHeadingMedium__8456d348{font-size:48px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumNarrow__8456d348{font-size:34px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingMediumBoldWide__8456d348,.styles_module_wtDisplayHeadingMediumBold__8456d348{font-size:48px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumBoldNarrow__8456d348{font-size:34px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallWide__8456d348,.styles_module_wtDisplayHeadingSmall__8456d348{font-size:36px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallNarrow__8456d348{font-size:28px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldWide__8456d348,.styles_module_wtDisplayHeadingSmallBold__8456d348{font-size:36px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldNarrow__8456d348{font-size:28px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingXSmallBold__8456d348{font-size:14px;font-weight:900;line-height:1.2}.styles_module_wtSubHeading__8456d348,.styles_module_wtTextHeadingLargeBoldNarrow__8456d348,.styles_module_wtTextHeadingLargeBoldWide__8456d348,.styles_module_wtTextHeadingLargeBold__8456d348,.styles_module_wtTextHeadingLargeNarrow__8456d348,.styles_module_wtTextHeadingLargeWide__8456d348,.styles_module_wtTextHeadingLarge__8456d348,.styles_module_wtTextHeadingMediumBoldWide__8456d348,.styles_module_wtTextHeadingMediumBold__8456d348,.styles_module_wtTextHeadingMediumNarrow__8456d348,.styles_module_wtTextHeadingMediumSemiNarrow__8456d348,.styles_module_wtTextHeadingMediumSemiWide__8456d348,.styles_module_wtTextHeadingMediumSemi__8456d348,.styles_module_wtTextHeadingMediumWide__8456d348,.styles_module_wtTextHeadingMedium__8456d348,.styles_module_wtTextHeadingSmallBoldNarrow__8456d348,.styles_module_wtTextHeadingSmallBoldWide__8456d348,.styles_module_wtTextHeadingSmallBold__8456d348,.styles_module_wtTextHeadingSmallNarrow__8456d348,.styles_module_wtTextHeadingSmallWide__8456d348,.styles_module_wtTextHeadingSmall__8456d348,.styles_module_wtTextHeadingXLargeNarrow__8456d348,.styles_module_wtTextHeadingXLargeWide__8456d348,.styles_module_wtTextHeadingXLarge__8456d348,.styles_module_wtTextHeading__8456d348{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtTextHeadingXLargeWide__8456d348,.styles_module_wtTextHeadingXLarge__8456d348{font-size:64px;font-weight:500}.styles_module_wtTextHeadingXLargeNarrow__8456d348{font-size:36px;font-weight:500}.styles_module_wtTextHeadingLargeWide__8456d348,.styles_module_wtTextHeadingLarge__8456d348{font-size:36px;font-weight:400}.styles_module_wtTextHeadingLargeNarrow__8456d348{font-size:24px;font-weight:400}.styles_module_wtTextHeadingLargeBoldWide__8456d348,.styles_module_wtTextHeadingLargeBold__8456d348{font-size:36px;font-weight:700}.styles_module_wtTextHeadingLargeBoldNarrow__8456d348{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumWide__8456d348,.styles_module_wtTextHeadingMedium__8456d348{font-size:24px;font-weight:400}.styles_module_wtTextHeadingMediumSemiWide__8456d348,.styles_module_wtTextHeadingMediumSemi__8456d348{font-size:24px;font-weight:500}.styles_module_wtTextHeadingMediumNarrow__8456d348{font-size:20px;font-weight:400}.styles_module_wtTextHeadingMediumSemiNarrow__8456d348{font-size:20px;font-weight:500}.styles_module_wtTextHeadingMediumBoldWide__8456d348,.styles_module_wtTextHeadingMediumBold__8456d348{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumBoldWide__8456d348{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallWide__8456d348,.styles_module_wtTextHeadingSmall__8456d348{font-size:20px;font-weight:400}.styles_module_wtTextHeadingSmallNarrow__8456d348{font-size:18px;font-weight:400}.styles_module_wtTextHeadingSmallBoldWide__8456d348,.styles_module_wtTextHeadingSmallBold__8456d348{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallBoldNarrow__8456d348{font-size:18px;font-weight:700}.styles_module_wtSubHeading__8456d348{font-size:14px;font-weight:700;line-height:1.25;text-transform:uppercase}.styles_module_wtBodyLargeBold__8456d348,.styles_module_wtBodyLarge__8456d348,.styles_module_wtBodyMediumBold__8456d348,.styles_module_wtBodyMediumSemi__8456d348,.styles_module_wtBodyMedium__8456d348,.styles_module_wtBodySmallBold__8456d348,.styles_module_wtBodySmallSemi__8456d348,.styles_module_wtBodySmall__8456d348,.styles_module_wtBodyXLarge__8456d348,.styles_module_wtBodyXSmallSemi__8456d348,.styles_module_wtBodyXSmall__8456d348{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.5}.styles_module_wtBodyXLarge__8456d348{font-size:24px;font-weight:400}.styles_module_wtBodyLarge__8456d348{font-size:18px;font-weight:400}.styles_module_wtBodyLargeBold__8456d348{font-size:18px;font-weight:700}.styles_module_wtBodyMedium__8456d348{font-size:16px;font-weight:400}.styles_module_wtBodyMediumSemi__8456d348{font-size:16px;font-weight:500}.styles_module_wtBodyMediumBold__8456d348{font-size:16px;font-weight:700}.styles_module_wtBodySmall__8456d348{font-size:14px;font-weight:400}.styles_module_wtBodySmallSemi__8456d348{font-size:14px;font-weight:500}.styles_module_wtBodySmallBold__8456d348{font-size:14px;font-weight:700}.styles_module_wtBodyXSmall__8456d348{font-size:12px;font-weight:400}.styles_module_wtBodyXSmallSemi__8456d348{font-size:12px;font-weight:500}.styles_module_wtLabelLargeBold__8456d348,.styles_module_wtLabelLargeSemi__8456d348,.styles_module_wtLabelLarge__8456d348,.styles_module_wtLabelMediumBold__8456d348,.styles_module_wtLabelMediumSemi__8456d348,.styles_module_wtLabelMedium__8456d348,.styles_module_wtLabelSmallBold__8456d348,.styles_module_wtLabelSmallSemi__8456d348,.styles_module_wtLabelSmall__8456d348,.styles_module_wtLabelXSmallBold__8456d348,.styles_module_wtLabelXSmallSemi__8456d348,.styles_module_wtLabelXSmall__8456d348{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtLabelLarge__8456d348{font-size:16px;font-weight:400}.styles_module_wtLabelLargeSemi__8456d348{font-size:16px;font-weight:500}.styles_module_wtLabelLargeBold__8456d348{font-size:16px;font-weight:700}.styles_module_wtLabelMedium__8456d348{font-size:14px;font-weight:400}.styles_module_wtLabelMediumSemi__8456d348{font-size:14px;font-weight:500}.styles_module_wtLabelMediumBold__8456d348{font-size:14px;font-weight:700}.styles_module_wtLabelSmall__8456d348{font-size:12px;font-weight:400}.styles_module_wtLabelSmallSemi__8456d348{font-size:12px;font-weight:500}.styles_module_wtLabelSmallBold__8456d348{font-size:12px;font-weight:700}.styles_module_wtLabelXSmall__8456d348{font-size:10px;font-weight:400}.styles_module_wtLabelXSmallSemi__8456d348{font-size:10px;font-weight:500}.styles_module_wtLabelXSmallBold__8456d348{font-size:10px;font-weight:700}.styles_module_popoverContainer__8456d348{cursor:default!important;display:flex;flex-flow:row;flex-wrap:wrap;gap:1.5rem;margin-top:.5rem;max-width:40rem;min-width:14rem;opacity:0;overflow:auto;padding:1rem 1.5rem}.styles_module_popoverContainer__8456d348.styles_module_open__8456d348{opacity:1;transition:opacity .1s ease-in-out}@media (max-width:600px){.styles_module_popoverContainer__8456d348{flex-flow:column;max-width:40rem}}.styles_module_targetLink__8456d348{align-self:stretch;display:flex;line-height:1.25rem;padding:.875rem 1.5rem;text-align:left;white-space:nowrap}@media (max-width:600px){.styles_module_targetLink__8456d348{line-height:1.5rem;padding:.5rem 0}}");
            var ta = {
                "wt-display-heading-x-small-bold": "styles_module_wtDisplayHeadingXSmallBold__8456d348",
                "wt-display-heading-small-bold-narrow": "styles_module_wtDisplayHeadingSmallBoldNarrow__8456d348",
                "wt-display-heading-small-bold": "styles_module_wtDisplayHeadingSmallBold__8456d348",
                "wt-display-heading-small-bold-wide": "styles_module_wtDisplayHeadingSmallBoldWide__8456d348",
                "wt-display-heading-small-narrow": "styles_module_wtDisplayHeadingSmallNarrow__8456d348",
                "wt-display-heading-small": "styles_module_wtDisplayHeadingSmall__8456d348",
                "wt-display-heading-small-wide": "styles_module_wtDisplayHeadingSmallWide__8456d348",
                "wt-display-heading-medium-bold-narrow": "styles_module_wtDisplayHeadingMediumBoldNarrow__8456d348",
                "wt-display-heading-medium-bold": "styles_module_wtDisplayHeadingMediumBold__8456d348",
                "wt-display-heading-medium-bold-wide": "styles_module_wtDisplayHeadingMediumBoldWide__8456d348",
                "wt-display-heading-medium-narrow": "styles_module_wtDisplayHeadingMediumNarrow__8456d348",
                "wt-display-heading-medium": "styles_module_wtDisplayHeadingMedium__8456d348",
                "wt-display-heading-medium-wide": "styles_module_wtDisplayHeadingMediumWide__8456d348",
                "wt-display-heading-large-bold-narrow": "styles_module_wtDisplayHeadingLargeBoldNarrow__8456d348",
                "wt-display-heading-large-bold": "styles_module_wtDisplayHeadingLargeBold__8456d348",
                "wt-display-heading-large-bold-wide": "styles_module_wtDisplayHeadingLargeBoldWide__8456d348",
                "wt-display-heading-large-narrow": "styles_module_wtDisplayHeadingLargeNarrow__8456d348",
                "wt-display-heading-large": "styles_module_wtDisplayHeadingLarge__8456d348",
                "wt-display-heading-large-wide": "styles_module_wtDisplayHeadingLargeWide__8456d348",
                "wt-display-heading": "styles_module_wtDisplayHeading__8456d348",
                "wt-sub-heading": "styles_module_wtSubHeading__8456d348",
                "wt-text-heading-small-bold-narrow": "styles_module_wtTextHeadingSmallBoldNarrow__8456d348",
                "wt-text-heading-small-bold": "styles_module_wtTextHeadingSmallBold__8456d348",
                "wt-text-heading-small-bold-wide": "styles_module_wtTextHeadingSmallBoldWide__8456d348",
                "wt-text-heading-small-narrow": "styles_module_wtTextHeadingSmallNarrow__8456d348",
                "wt-text-heading-small": "styles_module_wtTextHeadingSmall__8456d348",
                "wt-text-heading-small-wide": "styles_module_wtTextHeadingSmallWide__8456d348",
                "wt-text-heading-medium-bold": "styles_module_wtTextHeadingMediumBold__8456d348",
                "wt-text-heading-medium-bold-wide": "styles_module_wtTextHeadingMediumBoldWide__8456d348",
                "wt-text-heading-medium-semi-narrow": "styles_module_wtTextHeadingMediumSemiNarrow__8456d348",
                "wt-text-heading-medium-narrow": "styles_module_wtTextHeadingMediumNarrow__8456d348",
                "wt-text-heading-medium-semi": "styles_module_wtTextHeadingMediumSemi__8456d348",
                "wt-text-heading-medium-semi-wide": "styles_module_wtTextHeadingMediumSemiWide__8456d348",
                "wt-text-heading-medium": "styles_module_wtTextHeadingMedium__8456d348",
                "wt-text-heading-medium-wide": "styles_module_wtTextHeadingMediumWide__8456d348",
                "wt-text-heading-large-bold-narrow": "styles_module_wtTextHeadingLargeBoldNarrow__8456d348",
                "wt-text-heading-large-bold": "styles_module_wtTextHeadingLargeBold__8456d348",
                "wt-text-heading-large-bold-wide": "styles_module_wtTextHeadingLargeBoldWide__8456d348",
                "wt-text-heading-large-narrow": "styles_module_wtTextHeadingLargeNarrow__8456d348",
                "wt-text-heading-large": "styles_module_wtTextHeadingLarge__8456d348",
                "wt-text-heading-large-wide": "styles_module_wtTextHeadingLargeWide__8456d348",
                "wt-text-heading-x-large-narrow": "styles_module_wtTextHeadingXLargeNarrow__8456d348",
                "wt-text-heading-x-large": "styles_module_wtTextHeadingXLarge__8456d348",
                "wt-text-heading-x-large-wide": "styles_module_wtTextHeadingXLargeWide__8456d348",
                "wt-text-heading": "styles_module_wtTextHeading__8456d348",
                "wt-body-x-small-semi": "styles_module_wtBodyXSmallSemi__8456d348",
                "wt-body-x-small": "styles_module_wtBodyXSmall__8456d348",
                "wt-body-small-bold": "styles_module_wtBodySmallBold__8456d348",
                "wt-body-small-semi": "styles_module_wtBodySmallSemi__8456d348",
                "wt-body-small": "styles_module_wtBodySmall__8456d348",
                "wt-body-medium-bold": "styles_module_wtBodyMediumBold__8456d348",
                "wt-body-medium-semi": "styles_module_wtBodyMediumSemi__8456d348",
                "wt-body-medium": "styles_module_wtBodyMedium__8456d348",
                "wt-body-large-bold": "styles_module_wtBodyLargeBold__8456d348",
                "wt-body-large": "styles_module_wtBodyLarge__8456d348",
                "wt-body-x-large": "styles_module_wtBodyXLarge__8456d348",
                "wt-label-x-small-bold": "styles_module_wtLabelXSmallBold__8456d348",
                "wt-label-x-small-semi": "styles_module_wtLabelXSmallSemi__8456d348",
                "wt-label-x-small": "styles_module_wtLabelXSmall__8456d348",
                "wt-label-small-bold": "styles_module_wtLabelSmallBold__8456d348",
                "wt-label-small-semi": "styles_module_wtLabelSmallSemi__8456d348",
                "wt-label-small": "styles_module_wtLabelSmall__8456d348",
                "wt-label-medium-bold": "styles_module_wtLabelMediumBold__8456d348",
                "wt-label-medium-semi": "styles_module_wtLabelMediumSemi__8456d348",
                "wt-label-medium": "styles_module_wtLabelMedium__8456d348",
                "wt-label-large-bold": "styles_module_wtLabelLargeBold__8456d348",
                "wt-label-large-semi": "styles_module_wtLabelLargeSemi__8456d348",
                "wt-label-large": "styles_module_wtLabelLarge__8456d348",
                popoverContainer: "styles_module_popoverContainer__8456d348",
                open: "styles_module_open__8456d348",
                targetLink: "styles_module_targetLink__8456d348"
            };
            let tn = e => {
                var t, {
                        children: a,
                        hideCaret: n,
                        targetClassName: r,
                        targetLinkClassName: i,
                        targetTestId: o,
                        title: l,
                        fullScreen: s,
                        className: d,
                        callback: u,
                        boundaryInset: m = 16,
                        eventTrigger: p = "hover",
                        align: h = "start"
                    } = e,
                    y = (0, c.Tt)(e, ["children", "hideCaret", "targetClassName", "targetLinkClassName", "targetTestId", "title", "fullScreen", "className", "callback", "boundaryInset", "eventTrigger", "align"]);
                let [w, b] = (0, g.useState)(!1), [v, x] = (0, g.useState)(!1), {
                    boundaryElement: S
                } = (0, g.useContext)(eE), {
                    isMobile: L
                } = eR(), k = (0, g.useRef)(null), T = "undefined" != typeof window ? null == document ? void 0 : document.documentElement : void 0, B = (0, g.useCallback)(() => {
                    var e;
                    return null != (e = null != S ? S : T) ? e : void 0
                }, [S, T]), D = (0, g.useCallback)(() => {
                    setTimeout(() => {
                        b(!1)
                    }, 100)
                }, []), H = (0, g.useMemo)(() => ({
                    close: D,
                    isOpen: w
                }), [D, w]), N = (0, g.useCallback)(e => {
                    void 0 !== u && u(e), b(e)
                }, [u]);
                return (0, g.useLayoutEffect)(() => {
                    setTimeout(() => {
                        x(w)
                    }, 20)
                }, [w, x]), (0, _.jsx)(te.Provider, {
                    value: H,
                    children: (0, _.jsx)(e6.A, Object.assign({
                        isCondensed: !0,
                        hideArrow: !0,
                        fullScreen: !1 !== s && L,
                        eventTrigger: p,
                        className: (0, f.A)(ta.popoverContainer, v && ta.open, d),
                        boundaryInset: m,
                        getBoundaryElement: B,
                        targetClassName: r,
                        isOpen: w,
                        callback: N,
                        align: h,
                        parentElement: null != (t = k.current) ? t : void 0,
                        positions: ["bottom"]
                    }, y, {
                        children: (0, _.jsxs)(e3, {
                            as: "button",
                            className: (0, f.A)(ta.targetLink, i),
                            ref: k,
                            "data-testid": o,
                            title: l,
                            "aria-label": l,
                            children: [a, !n && (0, _.jsx)(e9, {
                                className: ta.caret
                            })]
                        })
                    }))
                })
            };
            (0, eI.$)('.styles_module_wtDisplayHeadingLargeBoldNarrow__053a1bc1,.styles_module_wtDisplayHeadingLargeBoldWide__053a1bc1,.styles_module_wtDisplayHeadingLargeBold__053a1bc1,.styles_module_wtDisplayHeadingLargeNarrow__053a1bc1,.styles_module_wtDisplayHeadingLargeWide__053a1bc1,.styles_module_wtDisplayHeadingLarge__053a1bc1,.styles_module_wtDisplayHeadingMediumBoldNarrow__053a1bc1,.styles_module_wtDisplayHeadingMediumBoldWide__053a1bc1,.styles_module_wtDisplayHeadingMediumBold__053a1bc1,.styles_module_wtDisplayHeadingMediumNarrow__053a1bc1,.styles_module_wtDisplayHeadingMediumWide__053a1bc1,.styles_module_wtDisplayHeadingMedium__053a1bc1,.styles_module_wtDisplayHeadingSmallBoldNarrow__053a1bc1,.styles_module_wtDisplayHeadingSmallBoldWide__053a1bc1,.styles_module_wtDisplayHeadingSmallBold__053a1bc1,.styles_module_wtDisplayHeadingSmallNarrow__053a1bc1,.styles_module_wtDisplayHeadingSmallWide__053a1bc1,.styles_module_wtDisplayHeadingSmall__053a1bc1,.styles_module_wtDisplayHeadingXSmallBold__053a1bc1,.styles_module_wtDisplayHeading__053a1bc1{font-family:GT Super WT,Times New Roman,Times,serif;font-size:inherit}.styles_module_wtDisplayHeadingLargeWide__053a1bc1,.styles_module_wtDisplayHeadingLarge__053a1bc1{font-size:64px;font-weight:400;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeNarrow__053a1bc1{font-size:40px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingLargeBoldWide__053a1bc1,.styles_module_wtDisplayHeadingLargeBold__053a1bc1{font-size:64px;font-weight:900;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeBoldNarrow__053a1bc1{font-size:40px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumWide__053a1bc1,.styles_module_wtDisplayHeadingMedium__053a1bc1{font-size:48px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumNarrow__053a1bc1{font-size:34px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingMediumBoldWide__053a1bc1,.styles_module_wtDisplayHeadingMediumBold__053a1bc1{font-size:48px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumBoldNarrow__053a1bc1{font-size:34px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallWide__053a1bc1,.styles_module_wtDisplayHeadingSmall__053a1bc1{font-size:36px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallNarrow__053a1bc1{font-size:28px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldWide__053a1bc1,.styles_module_wtDisplayHeadingSmallBold__053a1bc1{font-size:36px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldNarrow__053a1bc1{font-size:28px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingXSmallBold__053a1bc1{font-size:14px;font-weight:900;line-height:1.2}.styles_module_wtSubHeading__053a1bc1,.styles_module_wtTextHeadingLargeBoldNarrow__053a1bc1,.styles_module_wtTextHeadingLargeBoldWide__053a1bc1,.styles_module_wtTextHeadingLargeBold__053a1bc1,.styles_module_wtTextHeadingLargeNarrow__053a1bc1,.styles_module_wtTextHeadingLargeWide__053a1bc1,.styles_module_wtTextHeadingLarge__053a1bc1,.styles_module_wtTextHeadingMediumBoldWide__053a1bc1,.styles_module_wtTextHeadingMediumBold__053a1bc1,.styles_module_wtTextHeadingMediumNarrow__053a1bc1,.styles_module_wtTextHeadingMediumSemiNarrow__053a1bc1,.styles_module_wtTextHeadingMediumSemiWide__053a1bc1,.styles_module_wtTextHeadingMediumSemi__053a1bc1,.styles_module_wtTextHeadingMediumWide__053a1bc1,.styles_module_wtTextHeadingMedium__053a1bc1,.styles_module_wtTextHeadingSmallBoldNarrow__053a1bc1,.styles_module_wtTextHeadingSmallBoldWide__053a1bc1,.styles_module_wtTextHeadingSmallBold__053a1bc1,.styles_module_wtTextHeadingSmallNarrow__053a1bc1,.styles_module_wtTextHeadingSmallWide__053a1bc1,.styles_module_wtTextHeadingSmall__053a1bc1,.styles_module_wtTextHeadingXLargeNarrow__053a1bc1,.styles_module_wtTextHeadingXLargeWide__053a1bc1,.styles_module_wtTextHeadingXLarge__053a1bc1,.styles_module_wtTextHeading__053a1bc1{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtTextHeadingXLargeWide__053a1bc1,.styles_module_wtTextHeadingXLarge__053a1bc1{font-size:64px;font-weight:500}.styles_module_wtTextHeadingXLargeNarrow__053a1bc1{font-size:36px;font-weight:500}.styles_module_wtTextHeadingLargeWide__053a1bc1,.styles_module_wtTextHeadingLarge__053a1bc1{font-size:36px;font-weight:400}.styles_module_wtTextHeadingLargeNarrow__053a1bc1{font-size:24px;font-weight:400}.styles_module_wtTextHeadingLargeBoldWide__053a1bc1,.styles_module_wtTextHeadingLargeBold__053a1bc1{font-size:36px;font-weight:700}.styles_module_wtTextHeadingLargeBoldNarrow__053a1bc1{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumWide__053a1bc1,.styles_module_wtTextHeadingMedium__053a1bc1{font-size:24px;font-weight:400}.styles_module_wtTextHeadingMediumSemiWide__053a1bc1,.styles_module_wtTextHeadingMediumSemi__053a1bc1{font-size:24px;font-weight:500}.styles_module_wtTextHeadingMediumNarrow__053a1bc1{font-size:20px;font-weight:400}.styles_module_wtTextHeadingMediumSemiNarrow__053a1bc1{font-size:20px;font-weight:500}.styles_module_wtTextHeadingMediumBoldWide__053a1bc1,.styles_module_wtTextHeadingMediumBold__053a1bc1{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumBoldWide__053a1bc1{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallWide__053a1bc1,.styles_module_wtTextHeadingSmall__053a1bc1{font-size:20px;font-weight:400}.styles_module_wtTextHeadingSmallNarrow__053a1bc1{font-size:18px;font-weight:400}.styles_module_wtTextHeadingSmallBoldWide__053a1bc1,.styles_module_wtTextHeadingSmallBold__053a1bc1{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallBoldNarrow__053a1bc1{font-size:18px;font-weight:700}.styles_module_wtSubHeading__053a1bc1{font-size:14px;font-weight:700;line-height:1.25;text-transform:uppercase}.styles_module_wtBodyLargeBold__053a1bc1,.styles_module_wtBodyLarge__053a1bc1,.styles_module_wtBodyMediumBold__053a1bc1,.styles_module_wtBodyMediumSemi__053a1bc1,.styles_module_wtBodyMedium__053a1bc1,.styles_module_wtBodySmallBold__053a1bc1,.styles_module_wtBodySmallSemi__053a1bc1,.styles_module_wtBodySmall__053a1bc1,.styles_module_wtBodyXLarge__053a1bc1,.styles_module_wtBodyXSmallSemi__053a1bc1,.styles_module_wtBodyXSmall__053a1bc1{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.5}.styles_module_wtBodyXLarge__053a1bc1{font-size:24px;font-weight:400}.styles_module_wtBodyLarge__053a1bc1{font-size:18px;font-weight:400}.styles_module_wtBodyLargeBold__053a1bc1{font-size:18px;font-weight:700}.styles_module_wtBodyMedium__053a1bc1{font-size:16px;font-weight:400}.styles_module_wtBodyMediumSemi__053a1bc1{font-size:16px;font-weight:500}.styles_module_wtBodyMediumBold__053a1bc1{font-size:16px;font-weight:700}.styles_module_wtBodySmall__053a1bc1{font-size:14px;font-weight:400}.styles_module_wtBodySmallSemi__053a1bc1{font-size:14px;font-weight:500}.styles_module_wtBodySmallBold__053a1bc1{font-size:14px;font-weight:700}.styles_module_wtBodyXSmall__053a1bc1{font-size:12px;font-weight:400}.styles_module_wtBodyXSmallSemi__053a1bc1{font-size:12px;font-weight:500}.styles_module_wtLabelLargeBold__053a1bc1,.styles_module_wtLabelLargeSemi__053a1bc1,.styles_module_wtLabelLarge__053a1bc1,.styles_module_wtLabelMediumBold__053a1bc1,.styles_module_wtLabelMediumSemi__053a1bc1,.styles_module_wtLabelMedium__053a1bc1,.styles_module_wtLabelSmallBold__053a1bc1,.styles_module_wtLabelSmallSemi__053a1bc1,.styles_module_wtLabelSmall__053a1bc1,.styles_module_wtLabelXSmallBold__053a1bc1,.styles_module_wtLabelXSmallSemi__053a1bc1,.styles_module_wtLabelXSmall__053a1bc1{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtLabelLarge__053a1bc1{font-size:16px;font-weight:400}.styles_module_wtLabelLargeSemi__053a1bc1{font-size:16px;font-weight:500}.styles_module_wtLabelLargeBold__053a1bc1{font-size:16px;font-weight:700}.styles_module_wtLabelMedium__053a1bc1{font-size:14px;font-weight:400}.styles_module_wtLabelMediumSemi__053a1bc1{font-size:14px;font-weight:500}.styles_module_wtLabelMediumBold__053a1bc1{font-size:14px;font-weight:700}.styles_module_wtLabelSmall__053a1bc1{font-size:12px;font-weight:400}.styles_module_wtLabelSmallSemi__053a1bc1{font-size:12px;font-weight:500}.styles_module_wtLabelSmallBold__053a1bc1{font-size:12px;font-weight:700}.styles_module_wtLabelXSmall__053a1bc1{font-size:10px;font-weight:400}.styles_module_wtLabelXSmallSemi__053a1bc1{font-size:10px;font-weight:500}.styles_module_wtLabelXSmallBold__053a1bc1{font-size:10px;font-weight:700}.styles_module_columnedContent__053a1bc1{display:flex;flex-direction:row}.styles_module_columnedContent__053a1bc1.styles_module_oneColumn__053a1bc1{flex-direction:column;max-width:auto!important;padding:1.5rem}.styles_module_columnedContent__053a1bc1.styles_module_oneColumn__053a1bc1>a{padding:0}.styles_module_column__053a1bc1{display:flex;flex:1;flex-direction:column;gap:1.5rem;max-width:12rem;min-width:10rem;padding:.5rem .5rem .5rem 0;position:relative}@media (max-width:800px){.styles_module_column__053a1bc1{min-width:8.5rem}}@media (max-width:600px){.styles_module_column__053a1bc1{gap:1rem;max-width:none;padding:0}}.styles_module_column__053a1bc1:not(:first-child):before{background:#f1f1f1;content:"";display:block;height:90%;left:-1.5rem;position:absolute;top:5%;width:1px}@media (max-width:600px){.styles_module_column__053a1bc1:not(:first-child):before{display:none}}.styles_module_columnLink__053a1bc1{padding:0}.styles_module_columnHeading__053a1bc1{text-wrap:wrap;color:#3767ea;font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-size:12px;font-weight:700;letter-spacing:.1em;line-height:1.25;line-height:1rem;text-transform:uppercase}');
            var tr = {
                columnedContent: "styles_module_columnedContent__053a1bc1",
                oneColumn: "styles_module_oneColumn__053a1bc1",
                column: "styles_module_column__053a1bc1",
                columnLink: "styles_module_columnLink__053a1bc1",
                columnHeading: "styles_module_columnHeading__053a1bc1"
            };
            let ti = e => {
                    var {
                        links: t,
                        caption: a,
                        hideCaption: n,
                        className: r
                    } = e, i = (0, c.Tt)(e, ["links", "caption", "hideCaption", "className"]);
                    let {
                        handleEventWithClose: o
                    } = tt();
                    return (0, _.jsxs)("div", Object.assign({
                        className: (0, f.A)(tr.column, r)
                    }, i, {
                        children: [a && !n ? (0, _.jsx)("div", {
                            className: tr.columnHeading,
                            children: a
                        }) : null, t.map(e => (0, _.jsx)(e3, {
                            mode: "light",
                            className: tr.columnLink,
                            href: e.pathname,
                            onClick: o(e),
                            children: e.label
                        }, e.pathname))]
                    }))
                },
                to = ({
                    content: e
                }) => {
                    let {
                        handleEventWithClose: t
                    } = tt();
                    return (0, _.jsx)(_.Fragment, {
                        children: e.map((a, n) => {
                            var r;
                            return "link" === a.type ? (0, _.jsx)(e3, {
                                href: a.pathname,
                                onClick: t(a),
                                children: a.label
                            }, a.pathname) : (0, _.jsx)(ti, {
                                caption: a.caption,
                                links: a.links,
                                hideCaption: 1 === e.length
                            }, null != (r = a.caption) ? r : n)
                        })
                    })
                },
                tl = ({
                    children: e,
                    content: t,
                    multirow: a,
                    targetTestId: n
                }) => {
                    let r = t.every(e => "link" === e.type);
                    return (0, _.jsx)(tn, {
                        className: (0, f.A)(tr.columnedContent, (a || r) && tr.oneColumn),
                        content: (0, _.jsx)(to, {
                            content: t
                        }),
                        positions: ["bottom"],
                        targetTestId: n,
                        children: e
                    })
                };

            function ts() {
                return (ts = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a)({}).hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            var td = function(e) {
                return g.createElement("svg", ts({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 16,
                    height: 16,
                    fill: "none"
                }, e), l || (l = g.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeWidth: 1.5,
                    d: "M5.172 8 8 10.828 10.83 8"
                })))
            };
            let tu = (0, g.createContext)({
                    activeIndex: NaN,
                    setActiveIndex: () => {}
                }),
                tc = ({
                    children: e
                }) => {
                    let [t, a] = (0, g.useState)(NaN), n = (0, g.useMemo)(() => ({
                        activeIndex: t,
                        setActiveIndex: a
                    }), [t, a]);
                    return (0, _.jsx)(tu.Provider, {
                        value: n,
                        children: e
                    })
                };
            tc.displayName = "AccordionProvider", (0, eI.$)(".styles_module_accordionMenu__c0caa7de{border-top:1px solid #f1f1f1;height:auto;max-height:40rem;padding-bottom:.5rem;transition:max-height .2s ease-in-out,visibility .2s ease-in-out}.styles_module_accordionMenu__c0caa7de.styles_module_collapsed__c0caa7de{border:0;max-height:0;overflow:hidden;padding:0;visibility:hidden}.styles_module_accordionMenu__c0caa7de a{font-weight:400}.styles_module_accordionContainer__c0caa7de{padding:.5rem 1rem}.styles_module_caret__c0caa7de.styles_module_open__c0caa7de{transform:rotate(180deg)}.styles_module_target__c0caa7de{display:flex;justify-content:space-between;width:100%}.styles_module_accordionPopover__c0caa7de{min-width:10rem}.styles_module_targetIcon__c0caa7de{align-self:stretch;display:flex}.styles_module_targetIcon__c0caa7de.styles_module_dark__c0caa7de{color:#fff}");
            var t_ = {
                accordionMenu: "styles_module_accordionMenu__c0caa7de",
                collapsed: "styles_module_collapsed__c0caa7de",
                caret: "styles_module_caret__c0caa7de",
                open: "styles_module_open__c0caa7de",
                target: "styles_module_target__c0caa7de",
                accordionPopover: "styles_module_accordionPopover__c0caa7de"
            };
            let tf = ({
                    isOpen: e,
                    children: t
                }) => (0, _.jsx)("div", {
                    className: (0, f.A)(t_.accordionMenu, !e && t_.collapsed),
                    children: t
                }),
                tm = ({
                    callback: e,
                    children: t,
                    className: a
                }) => (0, _.jsx)(e3, {
                    mode: "light",
                    className: (0, f.A)(t_.target, a),
                    onClick: e,
                    as: "button",
                    children: t
                }),
                tg = ({
                    children: e
                }) => (0, _.jsx)(tc, {
                    children: e
                }),
                tp = Object.assign(tg, {
                    Group: tg,
                    Item: ({
                        target: e,
                        children: t,
                        index: a,
                        className: n,
                        targetClassName: r
                    }) => {
                        let {
                            setActiveIndex: i,
                            activeIndex: o
                        } = (0, g.useContext)(tu), l = a === o, s = (0, g.useCallback)(() => {
                            (0, eq.Wj)(!l, e), i(l ? NaN : a)
                        }, [a, i, l, e]);
                        return (0, _.jsxs)("div", {
                            className: (0, f.A)(t_.accordionPopover, l && t_.open, n),
                            children: [(0, _.jsxs)(tm, {
                                className: r,
                                callback: s,
                                children: [e, (0, _.jsx)(td, {
                                    className: (0, f.A)(t_.caret, l && t_.open)
                                })]
                            }), (0, _.jsx)(tf, {
                                isOpen: a === o,
                                children: t
                            })]
                        })
                    }
                });
            (0, eI.$)(".styles_module_mobilePopoverWrapper__62fa7f87{flex-flow:column;gap:0}.styles_module_mobileDropdownItem__62fa7f87{border-bottom:1px solid #f1f1f1;border-top:1px solid #f1f1f1;margin-bottom:-1px}.styles_module_mobileDropdownItem__62fa7f87:first-child{border-top:0}.styles_module_mobileDropdownItem__62fa7f87:last-child{border-bottom:0}.styles_module_mobileDropdownLink__62fa7f87{padding-left:0;padding-right:0}.styles_module_mobileColumn__62fa7f87{padding:1rem 0}.styles_module_accordionMobileContent__62fa7f87{display:flex;flex-direction:column;gap:1.5rem;padding:1rem 0}.styles_module_mobileTarget__62fa7f87{align-self:stretch;display:flex;min-width:3rem}.styles_module_mobileTargetIcon__62fa7f87{align-self:stretch;display:flex}.styles_module_mobileTargetIcon__62fa7f87.styles_module_dark__62fa7f87{color:#fff}");
            var th = {
                mobilePopoverWrapper: "styles_module_mobilePopoverWrapper__62fa7f87",
                mobileDropdownItem: "styles_module_mobileDropdownItem__62fa7f87",
                mobileDropdownLink: "styles_module_mobileDropdownLink__62fa7f87",
                mobileColumn: "styles_module_mobileColumn__62fa7f87",
                accordionMobileContent: "styles_module_accordionMobileContent__62fa7f87",
                mobileTarget: "styles_module_mobileTarget__62fa7f87",
                mobileTargetIcon: "styles_module_mobileTargetIcon__62fa7f87",
                dark: "styles_module_dark__62fa7f87"
            };
            let ty = () => {
                    let {
                        isOpen: e
                    } = (0, g.useContext)(te), {
                        mode: t
                    } = (0, g.useContext)(eE);
                    return (0, _.jsx)(e ? eQ.$Td : eQ.YVe, {
                        size: "medium",
                        className: (0, f.A)(th.mobileTargetIcon, th[t])
                    })
                },
                tw = ({
                    navigation: e
                }) => {
                    let {
                        handleEventWithClose: t
                    } = tt(), a = e.map((e, a) => {
                        if ("link" === e.type) return (0, _.jsx)("div", {
                            className: th.mobileDropdownItem,
                            children: (0, _.jsx)(e3, {
                                mode: "light",
                                href: e.pathname,
                                className: th.mobileDropdownLink,
                                onClick: t(e),
                                variation: "/" === e.pathname ? "default" : "neutral",
                                children: e.label
                            }, e.pathname)
                        }, e.pathname);
                        let n = e.content;
                        return (0, _.jsx)(tp.Item, {
                            className: th.mobileDropdownItem,
                            targetClassName: th.mobileDropdownLink,
                            index: a,
                            target: e.target,
                            children: (0, _.jsx)("div", {
                                className: th.accordionMobileContent,
                                children: (0, _.jsx)(to, {
                                    content: n
                                })
                            })
                        }, e.target)
                    });
                    return (0, _.jsx)(tp.Group, {
                        children: a
                    })
                },
                tb = ({
                    navigation: e = []
                }) => {
                    let {
                        t: t
                    } = O();
                    return (0, _.jsx)(tn, {
                        content: (0, _.jsx)(tw, {
                            navigation: e
                        }),
                        hideArrow: !0,
                        hideCaret: !0,
                        isCondensed: !0,
                        align: "start",
                        position: "bottom",
                        eventTrigger: "click",
                        boundaryInset: 16,
                        targetClassName: th.mobileTarget,
                        className: th.mobilePopoverWrapper,
                        callback: eq.fd,
                        title: t("toggle_menu"),
                        children: (0, _.jsx)(ty, {})
                    })
                };
            (0, eI.$)(".styles_module_wtDisplayHeadingLargeBoldNarrow__a75ea064,.styles_module_wtDisplayHeadingLargeBoldWide__a75ea064,.styles_module_wtDisplayHeadingLargeBold__a75ea064,.styles_module_wtDisplayHeadingLargeNarrow__a75ea064,.styles_module_wtDisplayHeadingLargeWide__a75ea064,.styles_module_wtDisplayHeadingLarge__a75ea064,.styles_module_wtDisplayHeadingMediumBoldNarrow__a75ea064,.styles_module_wtDisplayHeadingMediumBoldWide__a75ea064,.styles_module_wtDisplayHeadingMediumBold__a75ea064,.styles_module_wtDisplayHeadingMediumNarrow__a75ea064,.styles_module_wtDisplayHeadingMediumWide__a75ea064,.styles_module_wtDisplayHeadingMedium__a75ea064,.styles_module_wtDisplayHeadingSmallBoldNarrow__a75ea064,.styles_module_wtDisplayHeadingSmallBoldWide__a75ea064,.styles_module_wtDisplayHeadingSmallBold__a75ea064,.styles_module_wtDisplayHeadingSmallNarrow__a75ea064,.styles_module_wtDisplayHeadingSmallWide__a75ea064,.styles_module_wtDisplayHeadingSmall__a75ea064,.styles_module_wtDisplayHeadingXSmallBold__a75ea064,.styles_module_wtDisplayHeading__a75ea064{font-family:GT Super WT,Times New Roman,Times,serif;font-size:inherit}.styles_module_wtDisplayHeadingLargeWide__a75ea064,.styles_module_wtDisplayHeadingLarge__a75ea064{font-size:64px;font-weight:400;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeNarrow__a75ea064{font-size:40px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingLargeBoldWide__a75ea064,.styles_module_wtDisplayHeadingLargeBold__a75ea064{font-size:64px;font-weight:900;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeBoldNarrow__a75ea064{font-size:40px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumWide__a75ea064,.styles_module_wtDisplayHeadingMedium__a75ea064{font-size:48px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumNarrow__a75ea064{font-size:34px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingMediumBoldWide__a75ea064,.styles_module_wtDisplayHeadingMediumBold__a75ea064{font-size:48px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumBoldNarrow__a75ea064{font-size:34px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallWide__a75ea064,.styles_module_wtDisplayHeadingSmall__a75ea064{font-size:36px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallNarrow__a75ea064{font-size:28px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldWide__a75ea064,.styles_module_wtDisplayHeadingSmallBold__a75ea064{font-size:36px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldNarrow__a75ea064{font-size:28px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingXSmallBold__a75ea064{font-size:14px;font-weight:900;line-height:1.2}.styles_module_wtSubHeading__a75ea064,.styles_module_wtTextHeadingLargeBoldNarrow__a75ea064,.styles_module_wtTextHeadingLargeBoldWide__a75ea064,.styles_module_wtTextHeadingLargeBold__a75ea064,.styles_module_wtTextHeadingLargeNarrow__a75ea064,.styles_module_wtTextHeadingLargeWide__a75ea064,.styles_module_wtTextHeadingLarge__a75ea064,.styles_module_wtTextHeadingMediumBoldWide__a75ea064,.styles_module_wtTextHeadingMediumBold__a75ea064,.styles_module_wtTextHeadingMediumNarrow__a75ea064,.styles_module_wtTextHeadingMediumSemiNarrow__a75ea064,.styles_module_wtTextHeadingMediumSemiWide__a75ea064,.styles_module_wtTextHeadingMediumSemi__a75ea064,.styles_module_wtTextHeadingMediumWide__a75ea064,.styles_module_wtTextHeadingMedium__a75ea064,.styles_module_wtTextHeadingSmallBoldNarrow__a75ea064,.styles_module_wtTextHeadingSmallBoldWide__a75ea064,.styles_module_wtTextHeadingSmallBold__a75ea064,.styles_module_wtTextHeadingSmallNarrow__a75ea064,.styles_module_wtTextHeadingSmallWide__a75ea064,.styles_module_wtTextHeadingSmall__a75ea064,.styles_module_wtTextHeadingXLargeNarrow__a75ea064,.styles_module_wtTextHeadingXLargeWide__a75ea064,.styles_module_wtTextHeadingXLarge__a75ea064,.styles_module_wtTextHeading__a75ea064{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtTextHeadingXLargeWide__a75ea064,.styles_module_wtTextHeadingXLarge__a75ea064{font-size:64px;font-weight:500}.styles_module_wtTextHeadingXLargeNarrow__a75ea064{font-size:36px;font-weight:500}.styles_module_wtTextHeadingLargeWide__a75ea064,.styles_module_wtTextHeadingLarge__a75ea064{font-size:36px;font-weight:400}.styles_module_wtTextHeadingLargeNarrow__a75ea064{font-size:24px;font-weight:400}.styles_module_wtTextHeadingLargeBoldWide__a75ea064,.styles_module_wtTextHeadingLargeBold__a75ea064{font-size:36px;font-weight:700}.styles_module_wtTextHeadingLargeBoldNarrow__a75ea064{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumWide__a75ea064,.styles_module_wtTextHeadingMedium__a75ea064{font-size:24px;font-weight:400}.styles_module_wtTextHeadingMediumSemiWide__a75ea064,.styles_module_wtTextHeadingMediumSemi__a75ea064{font-size:24px;font-weight:500}.styles_module_wtTextHeadingMediumNarrow__a75ea064{font-size:20px;font-weight:400}.styles_module_wtTextHeadingMediumSemiNarrow__a75ea064{font-size:20px;font-weight:500}.styles_module_wtTextHeadingMediumBoldWide__a75ea064,.styles_module_wtTextHeadingMediumBold__a75ea064{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumBoldWide__a75ea064{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallWide__a75ea064,.styles_module_wtTextHeadingSmall__a75ea064{font-size:20px;font-weight:400}.styles_module_wtTextHeadingSmallNarrow__a75ea064{font-size:18px;font-weight:400}.styles_module_wtTextHeadingSmallBoldWide__a75ea064,.styles_module_wtTextHeadingSmallBold__a75ea064{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallBoldNarrow__a75ea064{font-size:18px;font-weight:700}.styles_module_wtSubHeading__a75ea064{font-size:14px;font-weight:700;line-height:1.25;text-transform:uppercase}.styles_module_wtBodyLargeBold__a75ea064,.styles_module_wtBodyLarge__a75ea064,.styles_module_wtBodyMediumBold__a75ea064,.styles_module_wtBodyMediumSemi__a75ea064,.styles_module_wtBodyMedium__a75ea064,.styles_module_wtBodySmallBold__a75ea064,.styles_module_wtBodySmallSemi__a75ea064,.styles_module_wtBodySmall__a75ea064,.styles_module_wtBodyXLarge__a75ea064,.styles_module_wtBodyXSmallSemi__a75ea064,.styles_module_wtBodyXSmall__a75ea064{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.5}.styles_module_wtBodyXLarge__a75ea064{font-size:24px;font-weight:400}.styles_module_wtBodyLarge__a75ea064{font-size:18px;font-weight:400}.styles_module_wtBodyLargeBold__a75ea064{font-size:18px;font-weight:700}.styles_module_wtBodyMedium__a75ea064{font-size:16px;font-weight:400}.styles_module_wtBodyMediumSemi__a75ea064{font-size:16px;font-weight:500}.styles_module_wtBodyMediumBold__a75ea064{font-size:16px;font-weight:700}.styles_module_wtBodySmall__a75ea064{font-size:14px;font-weight:400}.styles_module_wtBodySmallSemi__a75ea064{font-size:14px;font-weight:500}.styles_module_wtBodySmallBold__a75ea064{font-size:14px;font-weight:700}.styles_module_wtBodyXSmall__a75ea064{font-size:12px;font-weight:400}.styles_module_wtBodyXSmallSemi__a75ea064{font-size:12px;font-weight:500}.styles_module_wtLabelLargeBold__a75ea064,.styles_module_wtLabelLargeSemi__a75ea064,.styles_module_wtLabelLarge__a75ea064,.styles_module_wtLabelMediumBold__a75ea064,.styles_module_wtLabelMediumSemi__a75ea064,.styles_module_wtLabelMedium__a75ea064,.styles_module_wtLabelSmallBold__a75ea064,.styles_module_wtLabelSmallSemi__a75ea064,.styles_module_wtLabelSmall__a75ea064,.styles_module_wtLabelXSmallBold__a75ea064,.styles_module_wtLabelXSmallSemi__a75ea064,.styles_module_wtLabelXSmall__a75ea064{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtLabelLarge__a75ea064{font-size:16px;font-weight:400}.styles_module_wtLabelLargeSemi__a75ea064{font-size:16px;font-weight:500}.styles_module_wtLabelLargeBold__a75ea064{font-size:16px;font-weight:700}.styles_module_wtLabelMedium__a75ea064{font-size:14px;font-weight:400}.styles_module_wtLabelMediumSemi__a75ea064{font-size:14px;font-weight:500}.styles_module_wtLabelMediumBold__a75ea064{font-size:14px;font-weight:700}.styles_module_wtLabelSmall__a75ea064{font-size:12px;font-weight:400}.styles_module_wtLabelSmallSemi__a75ea064{font-size:12px;font-weight:500}.styles_module_wtLabelSmallBold__a75ea064{font-size:12px;font-weight:700}.styles_module_wtLabelXSmall__a75ea064{font-size:10px;font-weight:400}.styles_module_wtLabelXSmallSemi__a75ea064{font-size:10px;font-weight:500}.styles_module_wtLabelXSmallBold__a75ea064{font-size:10px;font-weight:700}.styles_module_menuBar__a75ea064{align-items:center;background-color:#fff;border-radius:12px;box-shadow:0 4px 8px 0 rgba(0,0,0,.05);display:inline-flex;font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-size:14px;font-weight:500;gap:0;height:3rem;line-height:1.2;outline:1px solid rgba(0,0,0,.05);padding:0}.styles_module_menuBar__a75ea064 a:not(:last-child),.styles_module_menuBar__a75ea064 span:not(:last-child)>button{padding-right:0}@media (min-width:600px){.styles_module_menuBar__a75ea064.styles_module_dark__a75ea064{background-color:#161616;border-color:#161616;color:#fff}}.styles_module_fullMenu__a75ea064{align-items:center;align-self:stretch;display:flex}.styles_module_fullMenu__a75ea064.styles_module_hidden__a75ea064{height:0;opacity:0;overflow:hidden;position:absolute}.styles_module_menuGroup__a75ea064{display:flex;gap:.5rem}");
            var tv = {
                "wt-display-heading-x-small-bold": "styles_module_wtDisplayHeadingXSmallBold__a75ea064",
                "wt-display-heading-small-bold-narrow": "styles_module_wtDisplayHeadingSmallBoldNarrow__a75ea064",
                "wt-display-heading-small-bold": "styles_module_wtDisplayHeadingSmallBold__a75ea064",
                "wt-display-heading-small-bold-wide": "styles_module_wtDisplayHeadingSmallBoldWide__a75ea064",
                "wt-display-heading-small-narrow": "styles_module_wtDisplayHeadingSmallNarrow__a75ea064",
                "wt-display-heading-small": "styles_module_wtDisplayHeadingSmall__a75ea064",
                "wt-display-heading-small-wide": "styles_module_wtDisplayHeadingSmallWide__a75ea064",
                "wt-display-heading-medium-bold-narrow": "styles_module_wtDisplayHeadingMediumBoldNarrow__a75ea064",
                "wt-display-heading-medium-bold": "styles_module_wtDisplayHeadingMediumBold__a75ea064",
                "wt-display-heading-medium-bold-wide": "styles_module_wtDisplayHeadingMediumBoldWide__a75ea064",
                "wt-display-heading-medium-narrow": "styles_module_wtDisplayHeadingMediumNarrow__a75ea064",
                "wt-display-heading-medium": "styles_module_wtDisplayHeadingMedium__a75ea064",
                "wt-display-heading-medium-wide": "styles_module_wtDisplayHeadingMediumWide__a75ea064",
                "wt-display-heading-large-bold-narrow": "styles_module_wtDisplayHeadingLargeBoldNarrow__a75ea064",
                "wt-display-heading-large-bold": "styles_module_wtDisplayHeadingLargeBold__a75ea064",
                "wt-display-heading-large-bold-wide": "styles_module_wtDisplayHeadingLargeBoldWide__a75ea064",
                "wt-display-heading-large-narrow": "styles_module_wtDisplayHeadingLargeNarrow__a75ea064",
                "wt-display-heading-large": "styles_module_wtDisplayHeadingLarge__a75ea064",
                "wt-display-heading-large-wide": "styles_module_wtDisplayHeadingLargeWide__a75ea064",
                "wt-display-heading": "styles_module_wtDisplayHeading__a75ea064",
                "wt-sub-heading": "styles_module_wtSubHeading__a75ea064",
                "wt-text-heading-small-bold-narrow": "styles_module_wtTextHeadingSmallBoldNarrow__a75ea064",
                "wt-text-heading-small-bold": "styles_module_wtTextHeadingSmallBold__a75ea064",
                "wt-text-heading-small-bold-wide": "styles_module_wtTextHeadingSmallBoldWide__a75ea064",
                "wt-text-heading-small-narrow": "styles_module_wtTextHeadingSmallNarrow__a75ea064",
                "wt-text-heading-small": "styles_module_wtTextHeadingSmall__a75ea064",
                "wt-text-heading-small-wide": "styles_module_wtTextHeadingSmallWide__a75ea064",
                "wt-text-heading-medium-bold": "styles_module_wtTextHeadingMediumBold__a75ea064",
                "wt-text-heading-medium-bold-wide": "styles_module_wtTextHeadingMediumBoldWide__a75ea064",
                "wt-text-heading-medium-semi-narrow": "styles_module_wtTextHeadingMediumSemiNarrow__a75ea064",
                "wt-text-heading-medium-narrow": "styles_module_wtTextHeadingMediumNarrow__a75ea064",
                "wt-text-heading-medium-semi": "styles_module_wtTextHeadingMediumSemi__a75ea064",
                "wt-text-heading-medium-semi-wide": "styles_module_wtTextHeadingMediumSemiWide__a75ea064",
                "wt-text-heading-medium": "styles_module_wtTextHeadingMedium__a75ea064",
                "wt-text-heading-medium-wide": "styles_module_wtTextHeadingMediumWide__a75ea064",
                "wt-text-heading-large-bold-narrow": "styles_module_wtTextHeadingLargeBoldNarrow__a75ea064",
                "wt-text-heading-large-bold": "styles_module_wtTextHeadingLargeBold__a75ea064",
                "wt-text-heading-large-bold-wide": "styles_module_wtTextHeadingLargeBoldWide__a75ea064",
                "wt-text-heading-large-narrow": "styles_module_wtTextHeadingLargeNarrow__a75ea064",
                "wt-text-heading-large": "styles_module_wtTextHeadingLarge__a75ea064",
                "wt-text-heading-large-wide": "styles_module_wtTextHeadingLargeWide__a75ea064",
                "wt-text-heading-x-large-narrow": "styles_module_wtTextHeadingXLargeNarrow__a75ea064",
                "wt-text-heading-x-large": "styles_module_wtTextHeadingXLarge__a75ea064",
                "wt-text-heading-x-large-wide": "styles_module_wtTextHeadingXLargeWide__a75ea064",
                "wt-text-heading": "styles_module_wtTextHeading__a75ea064",
                "wt-body-x-small-semi": "styles_module_wtBodyXSmallSemi__a75ea064",
                "wt-body-x-small": "styles_module_wtBodyXSmall__a75ea064",
                "wt-body-small-bold": "styles_module_wtBodySmallBold__a75ea064",
                "wt-body-small-semi": "styles_module_wtBodySmallSemi__a75ea064",
                "wt-body-small": "styles_module_wtBodySmall__a75ea064",
                "wt-body-medium-bold": "styles_module_wtBodyMediumBold__a75ea064",
                "wt-body-medium-semi": "styles_module_wtBodyMediumSemi__a75ea064",
                "wt-body-medium": "styles_module_wtBodyMedium__a75ea064",
                "wt-body-large-bold": "styles_module_wtBodyLargeBold__a75ea064",
                "wt-body-large": "styles_module_wtBodyLarge__a75ea064",
                "wt-body-x-large": "styles_module_wtBodyXLarge__a75ea064",
                "wt-label-x-small-bold": "styles_module_wtLabelXSmallBold__a75ea064",
                "wt-label-x-small-semi": "styles_module_wtLabelXSmallSemi__a75ea064",
                "wt-label-x-small": "styles_module_wtLabelXSmall__a75ea064",
                "wt-label-small-bold": "styles_module_wtLabelSmallBold__a75ea064",
                "wt-label-small-semi": "styles_module_wtLabelSmallSemi__a75ea064",
                "wt-label-small": "styles_module_wtLabelSmall__a75ea064",
                "wt-label-medium-bold": "styles_module_wtLabelMediumBold__a75ea064",
                "wt-label-medium-semi": "styles_module_wtLabelMediumSemi__a75ea064",
                "wt-label-medium": "styles_module_wtLabelMedium__a75ea064",
                "wt-label-large-bold": "styles_module_wtLabelLargeBold__a75ea064",
                "wt-label-large-semi": "styles_module_wtLabelLargeSemi__a75ea064",
                "wt-label-large": "styles_module_wtLabelLarge__a75ea064",
                menuBar: "styles_module_menuBar__a75ea064",
                dark: "styles_module_dark__a75ea064",
                fullMenu: "styles_module_fullMenu__a75ea064",
                hidden: "styles_module_hidden__a75ea064",
                menuGroup: "styles_module_menuGroup__a75ea064"
            };
            let tx = (...e) => void 0;
            tx.noop = !0;
            let tS = (0, g.forwardRef)(({
                children: e,
                className: t
            }, a) => {
                let {
                    mode: n
                } = (0, g.useContext)(eE);
                return (0, _.jsx)("div", {
                    ref: a,
                    className: (0, f.A)(tv.menuBar, tv[n], t),
                    children: e
                })
            });
            tS.displayName = "MenuBarContainer";
            let tL = ({
                    navigation: e
                }) => (0, _.jsx)(_.Fragment, {
                    children: e.map((e, t) => {
                        var a;
                        return "link" === e.type ? (0, g.createElement)(e3, Object.assign({}, null != (a = e.attr) ? a : {}, {
                            key: e.pathname + t,
                            href: e.pathname,
                            onClick: (0, eq.eE)(e),
                            "data-testid": e.label
                        }), e.label) : (0, _.jsx)(tl, {
                            content: e.content,
                            targetTestId: e.target,
                            children: e.target
                        }, e.target + t)
                    })
                }),
                tk = Object.assign(({
                    navigation: e = [],
                    autoMore: t = !1,
                    className: a
                }) => {
                    let {
                        isMobile: n
                    } = eR(), {
                        t: r
                    } = O(), i = (0, g.useRef)(null), o = (0, g.useRef)(null), l = (({
                        barRef: e,
                        fullBarRef: t
                    }) => {
                        let [a, n] = (0, g.useState)(NaN), [r, i] = (0, g.useState)([]), o = (0, g.useCallback)(() => {
                            var a, r;
                            let o = (t && t.current ? Array.from(t.current.querySelectorAll(":scope > span, :scope > a")) : []).map(e => (null == e ? void 0 : e.clientWidth) || 0),
                                l = (null == (r = null == (a = null == e ? void 0 : e.current) ? void 0 : a.getBoundingClientRect()) ? void 0 : r.right) || 0;
                            i(o), n(l)
                        }, [i, e, t]);
                        return (() => {
                            var e;
                            return ej ? ((e, t, a) => {
                                let [n, r] = (e => {
                                    let t = (0, g.useRef)(e),
                                        a = (0, g.useRef)(e => {
                                            if ("function" != typeof e) throw Error("the argument supplied to the 'setHandler' function should be of type function");
                                            t.current = e
                                        });
                                    return [t, a.current]
                                })();
                                if (e && !((e, t) => !!e && Object.prototype.hasOwnProperty.call(e, t))(e, "current")) throw Error("Unable to assign any scroll event to the given ref");
                                return (0, g.useEffect)(() => {
                                    var r;
                                    let i = e => {
                                        n.current && n.current(e)
                                    };
                                    return (null == (r = e.current) ? void 0 : r.addEventListener) && n.current && e.current.addEventListener(t, i, a), () => {
                                        var r;
                                        (null == (r = e.current) ? void 0 : r.addEventListener) && n.current && e.current.removeEventListener(t, i, a)
                                    }
                                }, [t, e.current, a]), r
                            })({
                                current: window
                            }, "resize", e) : tx
                        })()(() => {
                            o()
                        }), (0, g.useEffect)(() => {
                            o()
                        }, [o]), (0, g.useMemo)(() => {
                            let e = a,
                                t = 0;
                            for (; e >= 280 && t < r.length;) e -= r[t], t++;
                            return t === r.length - 1 ? t - 1 : t
                        }, [a, r])
                    })({
                        fullBarRef: o,
                        barRef: i
                    }), s = i.current && o.current ? l : e.length, d = e.slice(0, s), u = e.slice(s), c = t && !!u.length, m = u.map(e => "link" === e.type ? e : e.content).flat();
                    return n ? (0, _.jsx)(tb, {
                        navigation: e
                    }) : (0, _.jsxs)(tS, {
                        ref: i,
                        className: (0, f.A)(tv.container, a),
                        children: [(0, _.jsx)("div", {
                            ref: o,
                            className: (0, f.A)(tv.fullMenu, c && tv.hidden),
                            "aria-hidden": c,
                            children: (0, _.jsx)(tL, {
                                navigation: e
                            })
                        }), c && (0, _.jsxs)(_.Fragment, {
                            children: [(0, _.jsx)(tL, {
                                navigation: d
                            }), !!m.length && (0, _.jsx)(tl, {
                                content: m,
                                multirow: !0,
                                targetTestId: r("more"),
                                children: r("more")
                            })]
                        })]
                    })
                }, {
                    Container: tS,
                    Group: ({
                        children: e
                    }) => (0, _.jsx)("div", {
                        className: tv.menuGroup,
                        children: e
                    })
                });
            var tT = a(97116);
            (0, eI.$)(".styles_module_signupBtn__5422c2bd{white-space:nowrap}");
            var tB = {
                signupBtn: "styles_module_signupBtn__5422c2bd"
            };
            let tD = () => {
                    let {
                        mode: e
                    } = (0, g.useContext)(eE), {
                        isMobile: t
                    } = eR(), a = eK({}).signup.data;
                    return (0, _.jsx)(tT.$, {
                        as: "a",
                        href: a.pathname,
                        mode: e,
                        size: "x-small",
                        variation: "neutral",
                        appearance: t ? "tertiary" : "primary",
                        onClick: (0, eq.eE)(a),
                        "data-testid": a.label,
                        className: tB.signupBtn,
                        children: a.label
                    })
                },
                tH = () => {
                    let {
                        mode: e
                    } = (0, g.useContext)(eE), {
                        isMobile: t
                    } = eR(), a = eK({}).gotoWorkspace.data;
                    return (0, _.jsx)(tT.$, {
                        as: "a",
                        href: null == a ? void 0 : a.pathname,
                        mode: e,
                        size: "x-small",
                        variation: "neutral",
                        appearance: t ? "tertiary" : "primary",
                        children: null == a ? void 0 : a.label
                    })
                };
            (0, eI.$)(".styles_module_logoAligner__3b1d34c9{align-items:center;align-self:stretch;display:flex;width:4.5rem}.styles_module_buttonAligner__3b1d34c9{left:.5rem;position:relative}div.styles_module_section__3b1d34c9{display:flex;gap:1.25rem;padding:0 .5rem 0 1.25rem}");
            var tN = {
                logoAligner: "styles_module_logoAligner__3b1d34c9",
                buttonAligner: "styles_module_buttonAligner__3b1d34c9",
                section: "styles_module_section__3b1d34c9"
            };
            let tP = () => {
                let {
                    isMobile: e
                } = eR(), {
                    isAuthorized: t,
                    mode: a
                } = (0, g.useContext)(eE), n = (0, _.jsx)(t ? tH : tD, {});
                return (0, _.jsxs)(_.Fragment, e ? {
                    children: [(0, _.jsx)("div", {
                        className: tN.logoAligner,
                        children: (0, _.jsx)(e8.Logo, {
                            name: "placeholder"
                        })
                    }), (0, _.jsx)(e$.Q, {
                        mode: a
                    }), (0, _.jsx)("div", {
                        className: tN.buttonAligner,
                        children: n
                    })]
                } : {
                    children: [(0, _.jsx)(e8.Logo, {
                        name: "placeholder"
                    }), (0, _.jsxs)(tk.Container, {
                        className: tN.section,
                        children: [(0, _.jsx)(eJ, {}), n]
                    })]
                })
            };
            (0, eI.$)(".styles_module_loginLink__5c188bc3{white-space:nowrap}");
            var tC = {
                loginLink: "styles_module_loginLink__5c188bc3"
            };
            let tA = e => {
                    var t, {
                            className: a
                        } = e,
                        n = (0, c.Tt)(e, ["className"]);
                    let r = eK({});
                    return (0, _.jsx)(e3, Object.assign({}, n, null != (t = r.login.data.attr) ? t : {}, {
                        href: r.login.data.pathname,
                        onClick: (0, eq.BN)(r.login.data),
                        "data-testid": r.login.data.label,
                        className: (0, f.A)(a, tC.loginLink),
                        children: r.login.data.label
                    }))
                },
                tE = ({
                    nav: e,
                    navPagesQueryParams: t = {},
                    canHideReviews: a = !1,
                    shouldShowWeTransferSignLanding: n = !1
                }) => {
                    let r = eK({
                            navPagesQueryParams: t
                        }),
                        i = (({
                            navPagesQueryParams: e,
                            shouldShowWeTransferSignLanding: t = !1
                        }) => {
                            let {
                                t: a
                            } = O(), n = eK({
                                navPagesQueryParams: e
                            }), r = [n.explore.data, n.explore.corporate.awards.data, n.explore.corporate.data], i = [n.explore.advertising.data, n.explore.advertising.policies.data], o = [n.wepresent.data, n.blog.data, n.help.data, n.explore.legal.data], l = [{
                                type: "column",
                                caption: a("about"),
                                links: r
                            }, {
                                type: "column",
                                caption: a("advertising"),
                                links: i
                            }, {
                                type: "column",
                                caption: a("more"),
                                links: o
                            }], s = [{
                                type: "column",
                                links: [n.explore.fileSharing.data, n.explore.dataSecurity.data, n.explore.branding.data, n.explore.teams.data, n.explore["sell-files-get-paid"].data, n.explore.distribution.data, n.explore["subscriber-benefits"].data, ...t ? [n.explore.weTransferSignLanding.data] : []]
                            }], d = [{
                                type: "column",
                                caption: a("use-cases"),
                                links: [n.explore["for-businesses"].data, n.explore.photographers.data, n.explore.videographers.data, n.explore["designers-illustrators"].data, n.explore["for-students"].data]
                            }];
                            return [{
                                type: "dropdown",
                                content: s,
                                target: a("features")
                            }, n.pricing.data, {
                                type: "dropdown",
                                content: d,
                                target: a("use-cases")
                            }, {
                                type: "dropdown",
                                content: l,
                                target: a("resources")
                            }, n.whatsNew.data]
                        })({
                            navPagesQueryParams: t,
                            shouldShowWeTransferSignLanding: n
                        }),
                        {
                            activePlanTier: o
                        } = (0, g.useContext)(eE),
                        l = o && ![eC.js.ENTERPRISE, eC.js.ENTERPRISE_CUSTOM_CONTRACT].includes(o),
                        s = [r.transfers.data, ...a ? [] : [r.portals.data], r.workspace["branded-page"].data, r.contacts.data, r.whatsNew.data];
                    return l && s.splice(1, 0, r.pricing.data), ({
                        TRANSFER: s,
                        PORTALS: [r.transfers.data, ...a ? [] : [r.portals.data]],
                        FRONTSITE: i
                    })[e]
                };
            (0, eI.$)(".styles_module_logoAligner__33aa50d8{align-items:center;align-self:stretch;display:flex;width:4.5rem}.styles_module_buttonsSection__33aa50d8{gap:1.5rem;padding-right:.5rem}");
            var tM = {
                logoAligner: "styles_module_logoAligner__33aa50d8",
                buttonsSection: "styles_module_buttonsSection__33aa50d8"
            };
            let tj = ({
                links: e,
                app: t = eC.Uu.FRONTSITE,
                navPagesQueryParams: a,
                canHideReviews: n = !1,
                shouldShowWeTransferSignLanding: r = !1
            }) => {
                let {
                    isMobile: i
                } = eR(), {
                    mode: o
                } = (0, g.useContext)(eE), l = eK({
                    navPagesQueryParams: a
                }), s = tE({
                    nav: t,
                    navPagesQueryParams: a,
                    canHideReviews: n,
                    shouldShowWeTransferSignLanding: r
                }), d = e || s, u = [l.upload.data, ...d, l.login.data];
                return i ? (0, _.jsxs)(_.Fragment, {
                    children: [(0, _.jsx)("div", {
                        className: tM.logoAligner,
                        children: (0, _.jsx)(tb, {
                            navigation: u
                        })
                    }), (0, _.jsx)(e$.Q, {
                        mode: o
                    }), (0, _.jsx)(tD, {})]
                }) : (0, _.jsx)(_.Fragment, {
                    children: (0, _.jsxs)(tk.Group, {
                        children: [(0, _.jsx)(tk, {
                            autoMore: !0,
                            navigation: d
                        }), (0, _.jsxs)(tk.Container, {
                            className: tM.buttonsSection,
                            children: [(0, _.jsx)(tA, {}), (0, _.jsx)(tD, {})]
                        })]
                    })
                })
            };
            var tO = a(84607);

            function tz(e, t = 2, a = !0, n) {
                if (!+e) return "0 Bytes";
                let r = t < 0 ? 0 : t,
                    i = [s.BYTES, s.KB, s.MB, s.GB, s.TB, s.PB, s.EB, s.ZB, s.YB];
                if (n && i.includes(n)) {
                    let t = i.indexOf(n);
                    return `${parseFloat((e/Math.pow(1024,t)).toFixed(r))}${a?` ${n}`:""}`
                }
                let o = Math.floor(Math.log(e) / Math.log(1024));
                return `${parseFloat((e/Math.pow(1024,o)).toFixed(r))}${a?` ${i[o]}`:""}`
            }! function(e) {
                e.BYTES = "Bytes", e.KB = "KB", e.MB = "MB", e.GB = "GB", e.TB = "TB", e.PB = "PB", e.EB = "EB", e.ZB = "ZB", e.YB = "YB"
            }(s || (s = {})), (0, eI.$)(".styles_module_wtDisplayHeadingLargeBoldNarrow__1d2a3ad8,.styles_module_wtDisplayHeadingLargeBoldWide__1d2a3ad8,.styles_module_wtDisplayHeadingLargeBold__1d2a3ad8,.styles_module_wtDisplayHeadingLargeNarrow__1d2a3ad8,.styles_module_wtDisplayHeadingLargeWide__1d2a3ad8,.styles_module_wtDisplayHeadingLarge__1d2a3ad8,.styles_module_wtDisplayHeadingMediumBoldNarrow__1d2a3ad8,.styles_module_wtDisplayHeadingMediumBoldWide__1d2a3ad8,.styles_module_wtDisplayHeadingMediumBold__1d2a3ad8,.styles_module_wtDisplayHeadingMediumNarrow__1d2a3ad8,.styles_module_wtDisplayHeadingMediumWide__1d2a3ad8,.styles_module_wtDisplayHeadingMedium__1d2a3ad8,.styles_module_wtDisplayHeadingSmallBoldNarrow__1d2a3ad8,.styles_module_wtDisplayHeadingSmallBoldWide__1d2a3ad8,.styles_module_wtDisplayHeadingSmallBold__1d2a3ad8,.styles_module_wtDisplayHeadingSmallNarrow__1d2a3ad8,.styles_module_wtDisplayHeadingSmallWide__1d2a3ad8,.styles_module_wtDisplayHeadingSmall__1d2a3ad8,.styles_module_wtDisplayHeadingXSmallBold__1d2a3ad8,.styles_module_wtDisplayHeading__1d2a3ad8{font-family:GT Super WT,Times New Roman,Times,serif;font-size:inherit}.styles_module_wtDisplayHeadingLargeWide__1d2a3ad8,.styles_module_wtDisplayHeadingLarge__1d2a3ad8{font-size:64px;font-weight:400;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeNarrow__1d2a3ad8{font-size:40px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingLargeBoldWide__1d2a3ad8,.styles_module_wtDisplayHeadingLargeBold__1d2a3ad8{font-size:64px;font-weight:900;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeBoldNarrow__1d2a3ad8{font-size:40px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumWide__1d2a3ad8,.styles_module_wtDisplayHeadingMedium__1d2a3ad8{font-size:48px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumNarrow__1d2a3ad8{font-size:34px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingMediumBoldWide__1d2a3ad8,.styles_module_wtDisplayHeadingMediumBold__1d2a3ad8{font-size:48px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumBoldNarrow__1d2a3ad8{font-size:34px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallWide__1d2a3ad8,.styles_module_wtDisplayHeadingSmall__1d2a3ad8{font-size:36px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallNarrow__1d2a3ad8{font-size:28px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldWide__1d2a3ad8,.styles_module_wtDisplayHeadingSmallBold__1d2a3ad8{font-size:36px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldNarrow__1d2a3ad8{font-size:28px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingXSmallBold__1d2a3ad8{font-size:14px;font-weight:900;line-height:1.2}.styles_module_wtSubHeading__1d2a3ad8,.styles_module_wtTextHeadingLargeBoldNarrow__1d2a3ad8,.styles_module_wtTextHeadingLargeBoldWide__1d2a3ad8,.styles_module_wtTextHeadingLargeBold__1d2a3ad8,.styles_module_wtTextHeadingLargeNarrow__1d2a3ad8,.styles_module_wtTextHeadingLargeWide__1d2a3ad8,.styles_module_wtTextHeadingLarge__1d2a3ad8,.styles_module_wtTextHeadingMediumBoldWide__1d2a3ad8,.styles_module_wtTextHeadingMediumBold__1d2a3ad8,.styles_module_wtTextHeadingMediumNarrow__1d2a3ad8,.styles_module_wtTextHeadingMediumSemiNarrow__1d2a3ad8,.styles_module_wtTextHeadingMediumSemiWide__1d2a3ad8,.styles_module_wtTextHeadingMediumSemi__1d2a3ad8,.styles_module_wtTextHeadingMediumWide__1d2a3ad8,.styles_module_wtTextHeadingMedium__1d2a3ad8,.styles_module_wtTextHeadingSmallBoldNarrow__1d2a3ad8,.styles_module_wtTextHeadingSmallBoldWide__1d2a3ad8,.styles_module_wtTextHeadingSmallBold__1d2a3ad8,.styles_module_wtTextHeadingSmallNarrow__1d2a3ad8,.styles_module_wtTextHeadingSmallWide__1d2a3ad8,.styles_module_wtTextHeadingSmall__1d2a3ad8,.styles_module_wtTextHeadingXLargeNarrow__1d2a3ad8,.styles_module_wtTextHeadingXLargeWide__1d2a3ad8,.styles_module_wtTextHeadingXLarge__1d2a3ad8,.styles_module_wtTextHeading__1d2a3ad8{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtTextHeadingXLargeWide__1d2a3ad8,.styles_module_wtTextHeadingXLarge__1d2a3ad8{font-size:64px;font-weight:500}.styles_module_wtTextHeadingXLargeNarrow__1d2a3ad8{font-size:36px;font-weight:500}.styles_module_wtTextHeadingLargeWide__1d2a3ad8,.styles_module_wtTextHeadingLarge__1d2a3ad8{font-size:36px;font-weight:400}.styles_module_wtTextHeadingLargeNarrow__1d2a3ad8{font-size:24px;font-weight:400}.styles_module_wtTextHeadingLargeBoldWide__1d2a3ad8,.styles_module_wtTextHeadingLargeBold__1d2a3ad8{font-size:36px;font-weight:700}.styles_module_wtTextHeadingLargeBoldNarrow__1d2a3ad8{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumWide__1d2a3ad8,.styles_module_wtTextHeadingMedium__1d2a3ad8{font-size:24px;font-weight:400}.styles_module_wtTextHeadingMediumSemiWide__1d2a3ad8,.styles_module_wtTextHeadingMediumSemi__1d2a3ad8{font-size:24px;font-weight:500}.styles_module_wtTextHeadingMediumNarrow__1d2a3ad8{font-size:20px;font-weight:400}.styles_module_wtTextHeadingMediumSemiNarrow__1d2a3ad8{font-size:20px;font-weight:500}.styles_module_wtTextHeadingMediumBoldWide__1d2a3ad8,.styles_module_wtTextHeadingMediumBold__1d2a3ad8{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumBoldWide__1d2a3ad8{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallWide__1d2a3ad8,.styles_module_wtTextHeadingSmall__1d2a3ad8{font-size:20px;font-weight:400}.styles_module_wtTextHeadingSmallNarrow__1d2a3ad8{font-size:18px;font-weight:400}.styles_module_wtTextHeadingSmallBoldWide__1d2a3ad8,.styles_module_wtTextHeadingSmallBold__1d2a3ad8{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallBoldNarrow__1d2a3ad8{font-size:18px;font-weight:700}.styles_module_wtSubHeading__1d2a3ad8{font-size:14px;font-weight:700;line-height:1.25;text-transform:uppercase}.styles_module_wtBodyLargeBold__1d2a3ad8,.styles_module_wtBodyLarge__1d2a3ad8,.styles_module_wtBodyMediumBold__1d2a3ad8,.styles_module_wtBodyMediumSemi__1d2a3ad8,.styles_module_wtBodyMedium__1d2a3ad8,.styles_module_wtBodySmallBold__1d2a3ad8,.styles_module_wtBodySmallSemi__1d2a3ad8,.styles_module_wtBodySmall__1d2a3ad8,.styles_module_wtBodyXLarge__1d2a3ad8,.styles_module_wtBodyXSmallSemi__1d2a3ad8,.styles_module_wtBodyXSmall__1d2a3ad8{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.5}.styles_module_wtBodyXLarge__1d2a3ad8{font-size:24px;font-weight:400}.styles_module_wtBodyLarge__1d2a3ad8{font-size:18px;font-weight:400}.styles_module_wtBodyLargeBold__1d2a3ad8{font-size:18px;font-weight:700}.styles_module_wtBodyMedium__1d2a3ad8{font-size:16px;font-weight:400}.styles_module_wtBodyMediumSemi__1d2a3ad8{font-size:16px;font-weight:500}.styles_module_wtBodyMediumBold__1d2a3ad8{font-size:16px;font-weight:700}.styles_module_wtBodySmall__1d2a3ad8{font-size:14px;font-weight:400}.styles_module_wtBodySmallSemi__1d2a3ad8{font-size:14px;font-weight:500}.styles_module_wtBodySmallBold__1d2a3ad8{font-size:14px;font-weight:700}.styles_module_wtBodyXSmall__1d2a3ad8{font-size:12px;font-weight:400}.styles_module_wtBodyXSmallSemi__1d2a3ad8{font-size:12px;font-weight:500}.styles_module_wtLabelLargeBold__1d2a3ad8,.styles_module_wtLabelLargeSemi__1d2a3ad8,.styles_module_wtLabelLarge__1d2a3ad8,.styles_module_wtLabelMediumBold__1d2a3ad8,.styles_module_wtLabelMediumSemi__1d2a3ad8,.styles_module_wtLabelMedium__1d2a3ad8,.styles_module_wtLabelSmallBold__1d2a3ad8,.styles_module_wtLabelSmallSemi__1d2a3ad8,.styles_module_wtLabelSmall__1d2a3ad8,.styles_module_wtLabelXSmallBold__1d2a3ad8,.styles_module_wtLabelXSmallSemi__1d2a3ad8,.styles_module_wtLabelXSmall__1d2a3ad8{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtLabelLarge__1d2a3ad8{font-size:16px;font-weight:400}.styles_module_wtLabelLargeSemi__1d2a3ad8{font-size:16px;font-weight:500}.styles_module_wtLabelLargeBold__1d2a3ad8{font-size:16px;font-weight:700}.styles_module_wtLabelMedium__1d2a3ad8{font-size:14px;font-weight:400}.styles_module_wtLabelMediumSemi__1d2a3ad8{font-size:14px;font-weight:500}.styles_module_wtLabelMediumBold__1d2a3ad8{font-size:14px;font-weight:700}.styles_module_wtLabelSmall__1d2a3ad8{font-size:12px;font-weight:400}.styles_module_wtLabelSmallSemi__1d2a3ad8{font-size:12px;font-weight:500}.styles_module_wtLabelSmallBold__1d2a3ad8{font-size:12px;font-weight:700}.styles_module_wtLabelXSmall__1d2a3ad8{font-size:10px;font-weight:400}.styles_module_wtLabelXSmallSemi__1d2a3ad8{font-size:10px;font-weight:500}.styles_module_wtLabelXSmallBold__1d2a3ad8{font-size:10px;font-weight:700}.styles_module_container__1d2a3ad8{padding:1rem 0}.styles_module_heading__1d2a3ad8{color:#353535;font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-size:14px!important;font-weight:500;line-height:1.2;margin:0 0 .5rem}.styles_module_transferNumberInfo__1d2a3ad8{font-weight:500;margin:.5rem 0}.styles_module_copy__1d2a3ad8,.styles_module_transferNumberInfo__1d2a3ad8{color:#676767;font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-size:12px!important;line-height:1.2}.styles_module_copy__1d2a3ad8{font-weight:400;margin:.5rem 0 0}.styles_module_upgradeLink__1d2a3ad8{font-size:14px!important;margin:.5rem 0 0;padding:0}");
            var tR = {
                heading: "styles_module_heading__1d2a3ad8",
                transferNumberInfo: "styles_module_transferNumberInfo__1d2a3ad8",
                copy: "styles_module_copy__1d2a3ad8",
                upgradeLink: "styles_module_upgradeLink__1d2a3ad8",
                container: "styles_module_container__1d2a3ad8"
            };
            let tW = e => {
                let {
                    t: t
                } = O(), a = eK({}), {
                    activeTransferNumber: n,
                    activePlanTier: r,
                    activeStorage: i,
                    isLegacyTier: o,
                    isFreeTier: l
                } = (0, g.useContext)(eE), {
                    handleEventWithClose: d
                } = tt(), u = (null == n ? void 0 : n.transferNumberLimit) === 1 / 0, c = !(null == i ? void 0 : i.storageLimit), f = r && [eC.js.ENTERPRISE, eC.js.ENTERPRISE_CUSTOM_CONTRACT].includes(r), m = (0, g.useMemo)(() => l || r === eC.js.STARTER ? t("storage_widget.remove_limits") : t("storage_widget.compare"), [r, t]), p = (0, g.useMemo)(() => {
                    if (!n) return 0;
                    let {
                        usedTransfers: e = 0,
                        transferNumberLimit: t = 0
                    } = n;
                    return t === 1 / 0 || 0 === t ? 0 : e >= t ? 100 : e / t * 100
                }, [n]), h = (0, g.useMemo)(() => {
                    if (!i) return 0;
                    let {
                        usedStorage: e = 0,
                        storageLimit: t = 0
                    } = i;
                    return t === 1 / 0 || 0 === t ? 0 : e >= t ? 100 : e / t * 100
                }, [i]);
                return n || i ? (0, _.jsxs)("div", {
                    className: tR.container,
                    children: [(0, _.jsx)("h4", {
                        className: tR.heading,
                        children: t(`plan-tiers.${r}`)
                    }), !u && n && (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)("p", {
                            className: tR.transferNumberInfo,
                            children: t("transfer_count_widget.usage", {
                                usedTransfers: n.usedTransfers,
                                totalTransfers: n.transferNumberLimit
                            })
                        }), (0, _.jsx)(tO.z, {
                            value: p,
                            max: 100,
                            appearance: n.isLimitReached || 100 === p ? "red" : "neutral"
                        })]
                    }), !c && !e.shouldHideUsageProgressBar && i && (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)("p", {
                            className: tR.transferNumberInfo,
                            children: t("storage_widget.usage", {
                                usedStorage: tz(i.usedStorage, 2, !1, s.GB),
                                totalStorage: tz(i.storageLimit, 2, !0, s.GB)
                            })
                        }), (0, _.jsx)(tO.z, {
                            value: h,
                            max: 100,
                            appearance: i.isLimitReached || 100 === h ? "red" : "neutral"
                        })]
                    }), !o && (0, _.jsx)("p", {
                        className: tR.copy,
                        children: t("storage_widget.description")
                    }), !f && (0, _.jsxs)(e3, {
                        variation: "upsell",
                        href: (() => {
                            var t;
                            switch (e.usageWidgetUpsellButtonData.behaviour) {
                                case eC.aX.REDIRECT_TO_PRICING:
                                    return null == (t = a.upgrade.data) ? void 0 : t.pathname;
                                case eC.aX.REDIRECT_TO_CHECKOUT:
                                    return e.usageWidgetUpsellButtonData.checkoutRoute;
                                case eC.aX.SHOW_PAYWALL:
                                    return
                            }
                        })(),
                        onClick: d(a.usageBarCta.data),
                        className: tR.upgradeLink,
                        children: [(0, _.jsx)(eQ.DmQ, {
                            size: "small"
                        }), m]
                    })]
                }) : null
            };
            (0, eI.$)(".styles_module_content__3b5dbb6a{display:flex;flex:1;flex-direction:column}.styles_module_section__3b5dbb6a{border-top:1px solid #f1f1f1;padding:.5rem 0}.styles_module_section__3b5dbb6a:last-child{padding-bottom:0}.styles_module_workspaces__3b5dbb6a{display:flex;flex-direction:column;gap:1rem;padding:.25rem 0 1rem}.styles_module_link__3b5dbb6a{padding:.75rem 0}.styles_module_mobileTargetLogo__3b5dbb6a{border-radius:25%;height:32px;-o-object-fit:cover;object-fit:cover;position:relative;width:32px}.styles_module_accountTarget__3b5dbb6a{align-self:stretch;display:flex}.styles_module_accountTargetLink__3b5dbb6a{padding-right:.5rem}@media (max-width:600px){.styles_module_accountTargetLink__3b5dbb6a{padding:0}}");
            var tI = {
                section: "styles_module_section__3b5dbb6a",
                workspaces: "styles_module_workspaces__3b5dbb6a",
                link: "styles_module_link__3b5dbb6a",
                mobileTargetLogo: "styles_module_mobileTargetLogo__3b5dbb6a",
                accountTarget: "styles_module_accountTarget__3b5dbb6a",
                accountTargetLink: "styles_module_accountTargetLink__3b5dbb6a",
                content: "styles_module_content__3b5dbb6a"
            };
            (0, eI.$)(".styles_module_logoutLink__e009d7fd{white-space:nowrap}");
            var tF = {
                logoutLink: "styles_module_logoutLink__e009d7fd"
            };
            let tU = e => {
                    var t, a, {
                            className: n
                        } = e,
                        r = (0, c.Tt)(e, ["className"]);
                    let i = eK({}),
                        {
                            handleEventWithClose: o
                        } = tt();
                    return (0, _.jsx)(e3, Object.assign({}, r, {
                        href: null == (t = i.logout.data) ? void 0 : t.pathname,
                        onClick: o(i.logout.data),
                        className: (0, f.A)(n, tF.logoutLink),
                        children: null == (a = i.logout.data) ? void 0 : a.label
                    }))
                },
                t$ = e => {
                    let {
                        t: t
                    } = O(), {
                        workspaces: a,
                        currentWorkspace: n,
                        activeStorage: r,
                        activeTransferNumber: i
                    } = (0, g.useContext)(eE), o = eK({}), {
                        handleEventWithClose: l
                    } = tt();
                    if (!a || !n) return null;
                    let s = "admin" === (null == n ? void 0 : n.userRole) ? [o.workspace.settings.data] : [];
                    s.push(o.account.data, o.blog.data, o.explore["all-features"].data, o.help.data, o.explore.legal.data);
                    let d = !!i || !!r && !e.shouldHideUsageProgressBar;
                    return (0, _.jsxs)("div", {
                        className: tI.content,
                        children: [(0, _.jsx)("div", {
                            className: tI.workspaces,
                            children: a.map(e => {
                                var {
                                    active: a,
                                    id: n,
                                    pathname: r,
                                    membersCount: i = 0
                                } = e, o = (0, c.Tt)(e, ["active", "id", "pathname", "membersCount"]);
                                return (0, _.jsx)(e8.Select, {
                                    href: r,
                                    active: a,
                                    onSelect: l(Object.assign({
                                        active: a,
                                        id: n,
                                        pathname: r
                                    }, o)),
                                    children: (0, _.jsx)(e8.Thumb, Object.assign({}, o, {
                                        details: t("members", {
                                            count: i
                                        })
                                    }))
                                }, n)
                            })
                        }), d && (0, _.jsx)("div", {
                            className: tI.section,
                            children: (0, _.jsx)(tW, {
                                shouldHideUsageProgressBar: e.shouldHideUsageProgressBar,
                                usageWidgetUpsellButtonData: e.usageWidgetUpsellButtonData
                            })
                        }), (0, _.jsx)("div", {
                            className: tI.section,
                            children: s.map(e => (0, _.jsx)(e3, {
                                className: tI.link,
                                href: e.pathname,
                                onClick: l(e),
                                children: e.label
                            }, e.pathname))
                        }), (0, _.jsx)("div", {
                            className: tI.section,
                            children: (0, _.jsx)(tU, {
                                className: tI.link
                            })
                        })]
                    })
                },
                tX = e => {
                    let {
                        t: t
                    } = O(), {
                        isMobile: a
                    } = eR(), {
                        workspaces: n
                    } = (0, g.useContext)(eE), r = (0, g.useMemo)(() => n.find(e => e.active) || n[0], [n]);
                    return n && r ? (0, _.jsx)(tn, {
                        align: "end",
                        hideCaret: !0,
                        targetClassName: tI.accountTarget,
                        targetLinkClassName: tI.accountTargetLink,
                        content: (0, _.jsx)(t$, {
                            shouldHideUsageProgressBar: e.shouldHideUsageProgressBar,
                            usageWidgetUpsellButtonData: e.usageWidgetUpsellButtonData
                        }),
                        reposition: !1,
                        callback: eq.gf,
                        targetTestId: r.name,
                        title: a ? t("toggle_account_menu") : void 0,
                        children: a ? (0, _.jsx)(e8.Logo, {
                            src: r.logoSrc,
                            name: r.name,
                            className: tI.mobileTargetLogo
                        }) : (0, _.jsx)(e8.Thumb, {
                            name: r.name,
                            planName: r.planName,
                            logoSrc: r.logoSrc,
                            alignment: "right",
                            details: t(`plan-tiers.${e.showcaseFreeTrial?eC.js.ULTIMATE:r.planName}`)
                        })
                    }) : null
                };
            (0, eI.$)('div.styles_module_container__74104a25{gap:0;padding:0}div.styles_module_container__74104a25.styles_module_withButton__74104a25{min-width:-moz-fit-content;min-width:fit-content}.styles_module_section__74104a25{align-items:center;align-self:stretch;display:inline-flex}@media (max-width:600px){.styles_module_section__74104a25{align-items:stretch;display:flex;flex-direction:column;height:auto}}.styles_module_section__74104a25.styles_module_borderedLeft__74104a25:before{background:#f1f1f1;content:"";display:block;height:60%;margin:0;width:1px}.styles_module_section__74104a25.styles_module_productUpdatesDropdownSection__74104a25 button{padding:.875rem 1rem}');
            var tq = {
                    withButton: "styles_module_withButton__74104a25",
                    section: "styles_module_section__74104a25",
                    borderedLeft: "styles_module_borderedLeft__74104a25",
                    productUpdatesDropdownSection: "styles_module_productUpdatesDropdownSection__74104a25",
                    container: "styles_module_container__74104a25"
                },
                tV = a(11417);
            (0, eI.$)(".styles_module_content__b1651b55{display:flex;flex:1;flex-direction:column;height:auto;overflow:hidden;padding:0 1rem;width:352px}.styles_module_header__b1651b55{align-items:center;display:flex;justify-content:space-between;margin-bottom:.8rem}.styles_module_title__b1651b55{color:#161616;font-size:12px;font-weight:700;letter-spacing:.1em}.styles_module_empty__b1651b55{align-items:center;display:flex;flex-direction:column;flex-grow:1;padding-top:6.4rem;text-align:center}.styles_module_emptyTitle__b1651b55{color:#161616;font-size:16px;font-weight:700;margin-bottom:.4rem}.styles_module_emptySubtitle__b1651b55{text-wrap:balance;color:#161616;font-size:14px;font-weight:400;line-height:1.2;max-width:15.7rem}.styles_module_carouselContainer__b1651b55{margin:0 -1.6rem .8rem -1.4rem;overflow:visible;position:relative;width:100%}.styles_module_carouselTrack__b1651b55{display:flex;gap:.6rem;transition:transform .3s ease-in-out;width:100%}.styles_module_carouselItem__b1651b55{display:flex;flex-direction:column;flex-shrink:0;gap:1.2rem;width:300px}.styles_module_carouselItem__b1651b55 .styles_module_textContent__b1651b55{opacity:0;pointer-events:none;transition:opacity .3s ease-in-out}.styles_module_carouselItem__b1651b55.styles_module_activeItem__b1651b55 .styles_module_textContent__b1651b55{opacity:1;pointer-events:auto}.styles_module_carouselItem__b1651b55:not(.styles_module_activeItem__b1651b55) .styles_module_imageContainer__b1651b55{opacity:.5}.styles_module_imageContainer__b1651b55{background-color:#f9f9f9;border-radius:5px;height:200px;overflow:hidden;position:relative;transition:opacity .3s ease-in-out;width:100%}.styles_module_image__b1651b55{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.styles_module_textContent__b1651b55{display:flex;flex-direction:column;gap:.8rem}.styles_module_updateTitle__b1651b55{color:#000;font-size:18px;font-weight:500;line-height:1.2}.styles_module_updateSubtitle__b1651b55{text-wrap:wrap;color:#464646;font-size:14px;font-weight:400;line-height:1.5}.styles_module_ctaButton__b1651b55{align-self:flex-start;margin-bottom:.1rem}.styles_module_navigation__b1651b55{align-items:center;display:flex;justify-content:space-between;margin:0 .5rem}.styles_module_dots__b1651b55{align-items:center;display:flex;gap:.4rem}.styles_module_dot__b1651b55{background-color:#bfbfbf;border:none;border-radius:50%;height:7px;transition:all .2s ease;width:7px}.styles_module_dotActive__b1651b55{background-color:#4e7df7;border-radius:3.5px;height:7px;width:25px}.styles_module_arrows__b1651b55{display:flex;gap:.8rem}.styles_module_arrowButton__b1651b55{border-radius:50%;height:24px;padding:0!important;width:24px}");
            var tG = {
                header: "styles_module_header__b1651b55",
                title: "styles_module_title__b1651b55",
                empty: "styles_module_empty__b1651b55",
                emptyTitle: "styles_module_emptyTitle__b1651b55",
                emptySubtitle: "styles_module_emptySubtitle__b1651b55",
                carouselContainer: "styles_module_carouselContainer__b1651b55",
                carouselTrack: "styles_module_carouselTrack__b1651b55",
                carouselItem: "styles_module_carouselItem__b1651b55",
                textContent: "styles_module_textContent__b1651b55",
                activeItem: "styles_module_activeItem__b1651b55",
                imageContainer: "styles_module_imageContainer__b1651b55",
                image: "styles_module_image__b1651b55",
                updateTitle: "styles_module_updateTitle__b1651b55",
                updateSubtitle: "styles_module_updateSubtitle__b1651b55",
                ctaButton: "styles_module_ctaButton__b1651b55",
                navigation: "styles_module_navigation__b1651b55",
                dots: "styles_module_dots__b1651b55",
                dot: "styles_module_dot__b1651b55",
                dotActive: "styles_module_dotActive__b1651b55",
                arrows: "styles_module_arrows__b1651b55",
                arrowButton: "styles_module_arrowButton__b1651b55",
                content: "styles_module_content__b1651b55"
            };
            let tK = "productUpdatesCarouselIndex",
                tY = ({
                    productUpdates: e,
                    onProductUpdateClick: t
                }) => {
                    let {
                        t: a
                    } = O(), [n, r] = (0, g.useState)(() => {
                        var t, a;
                        if ("undefined" == typeof window) return 0;
                        let n = parseInt(null != (t = sessionStorage.getItem(tK)) ? t : "0", 10),
                            r = null != (a = null == e ? void 0 : e.length) ? a : 0;
                        return n >= 0 && n < r ? n : 0
                    }), [i, o] = (0, g.useState)(n), [l, s] = (0, g.useState)(!0), d = e && e.length > 0, u = e && e.length > 1 ? [e[e.length - 1], ...e, e[0]] : e || [], c = `calc(32px - (${e&&e.length>1?i+1:i} * (300px + 0.6rem)))`;
                    return (0, g.useEffect)(() => {
                        "undefined" != typeof window && sessionStorage.setItem(tK, n.toString())
                    }, [n]), (0, _.jsxs)("div", {
                        className: tG.content,
                        children: [(0, _.jsx)("div", {
                            className: tG.header,
                            children: (0, _.jsx)("span", {
                                className: tG.title,
                                children: a("product_updates_dropdown.title").toUpperCase()
                            })
                        }), d ? (0, _.jsxs)(_.Fragment, {
                            children: [(0, _.jsx)("div", {
                                className: tG.carouselContainer,
                                children: (0, _.jsx)("div", {
                                    className: tG.carouselTrack,
                                    style: {
                                        transform: `translateX(${c})`,
                                        transition: l ? "transform 0.3s ease-in-out" : "none"
                                    },
                                    children: u.map((a, r) => {
                                        let i = e.length > 1 ? r - 1 === n : r === n;
                                        return (0, _.jsxs)("div", {
                                            className: (0, f.A)(tG.carouselItem, {
                                                [tG.activeItem]: i
                                            }),
                                            children: [a.imageUrl && (0, _.jsx)("div", {
                                                className: tG.imageContainer,
                                                children: (0, _.jsx)("img", {
                                                    src: a.imageUrl,
                                                    alt: a.title,
                                                    className: tG.image
                                                })
                                            }), (0, _.jsxs)("div", {
                                                className: tG.textContent,
                                                children: [(0, _.jsx)("div", {
                                                    className: tG.updateTitle,
                                                    children: a.title
                                                }), (0, _.jsx)("div", {
                                                    className: tG.updateSubtitle,
                                                    children: a.subtitle
                                                }), a.ctaText && a.ctaUrl && (0, _.jsx)(tT.$, {
                                                    as: "a",
                                                    href: a.ctaUrl,
                                                    appearance: "secondary",
                                                    size: "small",
                                                    onClick: () => null == t ? void 0 : t(a.id),
                                                    className: tG.ctaButton,
                                                    children: a.ctaText
                                                })]
                                            })]
                                        }, `${a.id}-${r}`)
                                    })
                                })
                            }), (0, _.jsxs)("div", {
                                className: tG.navigation,
                                children: [(0, _.jsx)("div", {
                                    className: tG.dots,
                                    children: e.map((e, t) => (0, _.jsx)("div", {
                                        className: (0, f.A)(tG.dot, {
                                            [tG.dotActive]: t === n
                                        })
                                    }, t))
                                }), (0, _.jsxs)("div", {
                                    className: tG.arrows,
                                    children: [(0, _.jsx)(tT.$, {
                                        appearance: "secondary",
                                        size: "small",
                                        className: tG.arrowButton,
                                        onMouseDown: e => {
                                            e.stopPropagation(), e.preventDefault()
                                        },
                                        onClick: () => {
                                            if (e && l)
                                                if (0 === n) o(-1), setTimeout(() => {
                                                    s(!1);
                                                    let t = e.length - 1;
                                                    r(t), o(t), setTimeout(() => s(!0), 20)
                                                }, 300);
                                                else {
                                                    let e = n - 1;
                                                    r(e), o(e)
                                                }
                                        },
                                        "aria-label": "Previous update",
                                        disabled: 0 === n,
                                        children: (0, _.jsx)(eQ.LYB, {
                                            size: "small"
                                        })
                                    }), (0, _.jsx)(tT.$, {
                                        appearance: "secondary",
                                        size: "small",
                                        className: tG.arrowButton,
                                        onMouseDown: e => {
                                            e.stopPropagation(), e.preventDefault()
                                        },
                                        onClick: () => {
                                            if (e && l)
                                                if (n >= e.length - 1) o(e.length), setTimeout(() => {
                                                    s(!1), r(0), o(0), setTimeout(() => s(!0), 20)
                                                }, 300);
                                                else {
                                                    let e = n + 1;
                                                    r(e), o(e)
                                                }
                                        },
                                        "aria-label": "Next update",
                                        disabled: e.length <= 1,
                                        children: (0, _.jsx)(eQ._mK, {
                                            size: "small"
                                        })
                                    })]
                                })]
                            })]
                        }) : (0, _.jsxs)("div", {
                            className: tG.empty,
                            children: [(0, _.jsx)("div", {
                                className: tG.emptyTitle,
                                children: a("product_updates_dropdown.empty_title")
                            }), (0, _.jsx)("div", {
                                className: tG.emptySubtitle,
                                children: a("product_updates_dropdown.empty_subtitle")
                            })]
                        })]
                    })
                };
            (0, eI.$)('.styles_module_content__31836f86{display:flex;flex:1;flex-direction:column;max-height:483px;overflow:hidden;padding:0 1.4rem;width:333px}.styles_module_content__31836f86.styles_module_emptyContent__31836f86{height:374px}.styles_module_header__31836f86{align-items:center;display:flex;justify-content:space-between;margin-bottom:.8rem}.styles_module_title__31836f86{color:#161616;font-size:12px;font-weight:700;letter-spacing:.1em}.styles_module_list__31836f86{-ms-overflow-style:none;display:flex;flex-direction:column;mask-image:linear-gradient(180deg,#000 95%,transparent);-webkit-mask-image:linear-gradient(180deg,#000 95%,transparent);overflow-y:auto;padding-bottom:.8rem;scrollbar-width:none}.styles_module_list__31836f86::-webkit-scrollbar{display:none}.styles_module_empty__31836f86{align-items:center;display:flex;flex-direction:column;flex-grow:1;padding-top:6.4rem;text-align:center}.styles_module_emptyTitle__31836f86{color:#161616;font-size:16px;font-weight:700;margin-bottom:.4rem}.styles_module_emptySubtitle__31836f86{text-wrap:balance;color:#161616;font-size:14px;font-weight:400;line-height:1.2;max-width:15.7rem}.styles_module_item__31836f86{display:flex;gap:.8rem;position:relative}.styles_module_notificationContent__31836f86{display:flex;flex-direction:column;flex-grow:1;gap:.2rem}.styles_module_timestamp__31836f86{color:#a4a4a4;font-size:12px;line-height:1.4}.styles_module_titleRow__31836f86{align-items:flex-start;display:flex;gap:.6rem}.styles_module_unreadDot__31836f86{align-self:center;background-color:#4e7df7;border-radius:50%;flex-shrink:0;height:8px;width:8px}.styles_module_notificationTitle__31836f86{color:#000;font-size:14px;font-weight:500;line-height:1.2}.styles_module_subtitle__31836f86{text-wrap:wrap;color:#464646;font-size:14px;font-weight:400;line-height:1.2}.styles_module_cta__31836f86{align-items:center;color:#3767ea;display:inline-flex;font-size:14px;font-weight:500;gap:.4rem;margin:8px 0;text-decoration:none}.styles_module_divider__31836f86{align-items:center;display:flex;margin:.6rem 0}.styles_module_divider__31836f86:after,.styles_module_divider__31836f86:before{background-color:#d6d6d6;content:"";flex:1;height:1px}.styles_module_previousNotificationsDividerText__31836f86{color:#464646;font-size:12px;font-weight:400;padding:0 .4rem;white-space:nowrap}');
            var tJ = {
                emptyContent: "styles_module_emptyContent__31836f86",
                header: "styles_module_header__31836f86",
                title: "styles_module_title__31836f86",
                list: "styles_module_list__31836f86",
                empty: "styles_module_empty__31836f86",
                emptyTitle: "styles_module_emptyTitle__31836f86",
                emptySubtitle: "styles_module_emptySubtitle__31836f86",
                item: "styles_module_item__31836f86",
                notificationContent: "styles_module_notificationContent__31836f86",
                timestamp: "styles_module_timestamp__31836f86",
                titleRow: "styles_module_titleRow__31836f86",
                unreadDot: "styles_module_unreadDot__31836f86",
                notificationTitle: "styles_module_notificationTitle__31836f86",
                subtitle: "styles_module_subtitle__31836f86",
                cta: "styles_module_cta__31836f86",
                divider: "styles_module_divider__31836f86",
                previousNotificationsDividerText: "styles_module_previousNotificationsDividerText__31836f86",
                content: "styles_module_content__31836f86"
            };
            let tQ = ({
                productUpdates: e,
                onProductUpdateClick: t
            }) => {
                var a, n;
                let {
                    t: r
                } = O(), i = e && e.length > 0, o = (null != (a = null == e ? void 0 : e.length) ? a : 0) - (null != (n = null == e ? void 0 : e.slice().reverse().findIndex(e => !e.isRead)) ? n : -1) - 1;
                return (0, _.jsxs)("div", {
                    className: (0, f.A)(tJ.content, {
                        [tJ.emptyContent]: !i
                    }),
                    children: [(0, _.jsx)("div", {
                        className: tJ.header,
                        children: (0, _.jsx)("span", {
                            className: tJ.title,
                            children: r("product_updates_dropdown.title").toUpperCase()
                        })
                    }), i ? (0, _.jsx)("div", {
                        className: tJ.list,
                        children: e.map((a, n) => (0, _.jsxs)("div", {
                            children: [(0, _.jsx)("div", {
                                className: tJ.item,
                                children: (0, _.jsxs)("div", {
                                    className: tJ.notificationContent,
                                    children: [a.timestamp && (0, _.jsx)("div", {
                                        className: tJ.timestamp,
                                        children: a.timestamp
                                    }), (0, _.jsxs)("div", {
                                        className: tJ.titleRow,
                                        children: [!a.isRead && (0, _.jsx)("div", {
                                            className: tJ.unreadDot
                                        }), (0, _.jsx)("div", {
                                            className: tJ.notificationTitle,
                                            children: a.title
                                        })]
                                    }), (0, _.jsx)("div", {
                                        className: tJ.subtitle,
                                        children: a.subtitle
                                    }), a.ctaText && a.ctaUrl && (0, _.jsxs)(eX.N, {
                                        href: a.ctaUrl,
                                        className: tJ.cta,
                                        onClick: () => null == t ? void 0 : t(a.id),
                                        children: [a.ctaText, (0, _.jsx)(eQ.ird, {
                                            size: "medium"
                                        })]
                                    })]
                                })
                            }), n < e.length - 1 && (0, _.jsx)("div", {
                                className: tJ.divider,
                                children: n === o && (0, _.jsx)("span", {
                                    className: tJ.previousNotificationsDividerText,
                                    children: r("product_updates_dropdown.previous_notifications")
                                })
                            })]
                        }, a.id))
                    }) : (0, _.jsxs)("div", {
                        className: tJ.empty,
                        children: [(0, _.jsx)("div", {
                            className: tJ.emptyTitle,
                            children: r("product_updates_dropdown.empty_title")
                        }), (0, _.jsx)("div", {
                            className: tJ.emptySubtitle,
                            children: r("product_updates_dropdown.empty_subtitle")
                        })]
                    })]
                })
            };
            (0, eI.$)(".styles_module_buttonWrapper__84211fb3{align-items:center;display:flex;justify-content:center;position:relative}.styles_module_badge__84211fb3{background-color:#4e7df7;font-size:10px;font-weight:700;padding:0 3px;position:absolute;right:-5px;top:-4px}.styles_module_dropdownContent__84211fb3{padding-left:0;padding-right:0}.styles_module_dropdownTarget__84211fb3{align-items:center;display:flex}");
            var tZ = {
                buttonWrapper: "styles_module_buttonWrapper__84211fb3",
                badge: "styles_module_badge__84211fb3",
                dropdownContent: "styles_module_dropdownContent__84211fb3",
                dropdownTarget: "styles_module_dropdownTarget__84211fb3"
            };
            let t0 = ({
                type: e,
                productUpdates: t,
                onProductUpdateClick: a
            }) => {
                let n = null == t ? void 0 : t.filter(e => !e.isRead).length;
                return (0, _.jsx)(tn, {
                    align: "end",
                    hideCaret: !0,
                    content: e === eC.DA.CLASSIC ? (0, _.jsx)(tQ, {
                        productUpdates: t,
                        onProductUpdateClick: a
                    }) : (0, _.jsx)(tY, {
                        productUpdates: t,
                        onProductUpdateClick: a
                    }),
                    className: tZ.dropdownContent,
                    callback: eq.AG,
                    targetClassName: tZ.dropdownTarget,
                    targetTestId: "product-updates-dropdown",
                    children: (0, _.jsxs)("div", {
                        className: tZ.buttonWrapper,
                        children: [e === eC.DA.CLASSIC ? (0, _.jsx)(eQ.s2$, {
                            size: "small"
                        }) : (0, _.jsx)(eQ.XoK, {
                            size: "small"
                        }), void 0 !== n && n > 0 && (0, _.jsx)(tV.E, {
                            size: "small",
                            className: tZ.badge,
                            children: n < 10 ? n : "9+"
                        })]
                    })
                })
            };

            function t1() {
                return (t1 = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a)({}).hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(null, arguments)
            }
            var t4 = function(e) {
                return g.createElement("svg", t1({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 16,
                    height: 16,
                    fill: "none"
                }, e), d || (d = g.createElement("g", {
                    clipPath: "url(#WeLove_svg__a)"
                }, g.createElement("path", {
                    fill: "#C4D6FF",
                    fillRule: "evenodd",
                    d: "M8 2.199a4.815 4.815 0 0 1 6.662.197 4.87 4.87 0 0 1 1.397 3.418c0 1.276-.5 2.506-1.398 3.418-.597.606-1.193 1.227-1.792 1.85-1.217 1.267-2.447 2.547-3.725 3.753l-.003.003a1.683 1.683 0 0 1-2.334-.05l-5.47-5.556a4.88 4.88 0 0 1 0-6.836A4.813 4.813 0 0 1 8 2.199",
                    clipRule: "evenodd"
                }), g.createElement("g", {
                    clipPath: "url(#WeLove_svg__b)"
                }, g.createElement("path", {
                    fill: "#4E7DF7",
                    d: "M10.538 5.699c1.006 0 1.672.534 1.672 1.254 0 .68-.567 1.122-1.21 1.122-.349 0-.606-.07-.78-.21-.068-.053-.106-.046-.106.016 0 .256.091.473.258.643.136.139.393.232.635.232q.373-.002.666-.155c.197-.1.364-.07.462.093.114.186-.045.426-.181.58-.258.28-.743.48-1.378.48-1.28 0-2.037-.89-2.037-2.058 0-1.254.87-1.997 1.999-1.997m-4.619-.033c.742 0 1.416.055 1.915.148.364.07.47.27.47.611s-.075.759-.242 1.432a9 9 0 0 1-.477 1.424c-.128.302-.25.41-.515.41s-.379-.155-.515-.38l-.363-.58c-.083-.131-.152-.201-.273-.201-.12 0-.189.07-.272.2l-.363.582c-.136.224-.25.379-.515.379s-.387-.108-.516-.41a9 9 0 0 1-.476-1.424c-.167-.673-.242-1.091-.242-1.432s.106-.541.47-.611c.499-.093 1.173-.148 1.914-.148"
                })))), u || (u = g.createElement("defs", null, g.createElement("clipPath", {
                    id: "WeLove_svg__a"
                }, g.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h16v16H0z"
                })), g.createElement("clipPath", {
                    id: "WeLove_svg__b"
                }, g.createElement("path", {
                    fill: "#fff",
                    d: "M3.535 2.753h8.69v9.778h-8.69z"
                })))))
            };
            (0, eI.$)(".styles_module_wtDisplayHeadingLargeBoldNarrow__2d7c3e0c,.styles_module_wtDisplayHeadingLargeBoldWide__2d7c3e0c,.styles_module_wtDisplayHeadingLargeBold__2d7c3e0c,.styles_module_wtDisplayHeadingLargeNarrow__2d7c3e0c,.styles_module_wtDisplayHeadingLargeWide__2d7c3e0c,.styles_module_wtDisplayHeadingLarge__2d7c3e0c,.styles_module_wtDisplayHeadingMediumBoldNarrow__2d7c3e0c,.styles_module_wtDisplayHeadingMediumBoldWide__2d7c3e0c,.styles_module_wtDisplayHeadingMediumBold__2d7c3e0c,.styles_module_wtDisplayHeadingMediumNarrow__2d7c3e0c,.styles_module_wtDisplayHeadingMediumWide__2d7c3e0c,.styles_module_wtDisplayHeadingMedium__2d7c3e0c,.styles_module_wtDisplayHeadingSmallBoldNarrow__2d7c3e0c,.styles_module_wtDisplayHeadingSmallBoldWide__2d7c3e0c,.styles_module_wtDisplayHeadingSmallBold__2d7c3e0c,.styles_module_wtDisplayHeadingSmallNarrow__2d7c3e0c,.styles_module_wtDisplayHeadingSmallWide__2d7c3e0c,.styles_module_wtDisplayHeadingSmall__2d7c3e0c,.styles_module_wtDisplayHeadingXSmallBold__2d7c3e0c,.styles_module_wtDisplayHeading__2d7c3e0c{font-family:GT Super WT,Times New Roman,Times,serif;font-size:inherit}.styles_module_wtDisplayHeadingLargeWide__2d7c3e0c,.styles_module_wtDisplayHeadingLarge__2d7c3e0c{font-size:64px;font-weight:400;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeNarrow__2d7c3e0c{font-size:40px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingLargeBoldWide__2d7c3e0c,.styles_module_wtDisplayHeadingLargeBold__2d7c3e0c{font-size:64px;font-weight:900;letter-spacing:-.02em;line-height:1}.styles_module_wtDisplayHeadingLargeBoldNarrow__2d7c3e0c{font-size:40px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumWide__2d7c3e0c,.styles_module_wtDisplayHeadingMedium__2d7c3e0c{font-size:48px;font-weight:400;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumNarrow__2d7c3e0c{font-size:34px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingMediumBoldWide__2d7c3e0c,.styles_module_wtDisplayHeadingMediumBold__2d7c3e0c{font-size:48px;font-weight:900;letter-spacing:-.01em;line-height:1.1}.styles_module_wtDisplayHeadingMediumBoldNarrow__2d7c3e0c{font-size:34px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallWide__2d7c3e0c,.styles_module_wtDisplayHeadingSmall__2d7c3e0c{font-size:36px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallNarrow__2d7c3e0c{font-size:28px;font-weight:400;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldWide__2d7c3e0c,.styles_module_wtDisplayHeadingSmallBold__2d7c3e0c{font-size:36px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingSmallBoldNarrow__2d7c3e0c{font-size:28px;font-weight:900;line-height:1.2}.styles_module_wtDisplayHeadingXSmallBold__2d7c3e0c{font-size:14px;font-weight:900;line-height:1.2}.styles_module_wtSubHeading__2d7c3e0c,.styles_module_wtTextHeadingLargeBoldNarrow__2d7c3e0c,.styles_module_wtTextHeadingLargeBoldWide__2d7c3e0c,.styles_module_wtTextHeadingLargeBold__2d7c3e0c,.styles_module_wtTextHeadingLargeNarrow__2d7c3e0c,.styles_module_wtTextHeadingLargeWide__2d7c3e0c,.styles_module_wtTextHeadingLarge__2d7c3e0c,.styles_module_wtTextHeadingMediumBoldWide__2d7c3e0c,.styles_module_wtTextHeadingMediumBold__2d7c3e0c,.styles_module_wtTextHeadingMediumNarrow__2d7c3e0c,.styles_module_wtTextHeadingMediumSemiNarrow__2d7c3e0c,.styles_module_wtTextHeadingMediumSemiWide__2d7c3e0c,.styles_module_wtTextHeadingMediumSemi__2d7c3e0c,.styles_module_wtTextHeadingMediumWide__2d7c3e0c,.styles_module_wtTextHeadingMedium__2d7c3e0c,.styles_module_wtTextHeadingSmallBoldNarrow__2d7c3e0c,.styles_module_wtTextHeadingSmallBoldWide__2d7c3e0c,.styles_module_wtTextHeadingSmallBold__2d7c3e0c,.styles_module_wtTextHeadingSmallNarrow__2d7c3e0c,.styles_module_wtTextHeadingSmallWide__2d7c3e0c,.styles_module_wtTextHeadingSmall__2d7c3e0c,.styles_module_wtTextHeadingXLargeNarrow__2d7c3e0c,.styles_module_wtTextHeadingXLargeWide__2d7c3e0c,.styles_module_wtTextHeadingXLarge__2d7c3e0c,.styles_module_wtTextHeading__2d7c3e0c{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtTextHeadingXLargeWide__2d7c3e0c,.styles_module_wtTextHeadingXLarge__2d7c3e0c{font-size:64px;font-weight:500}.styles_module_wtTextHeadingXLargeNarrow__2d7c3e0c{font-size:36px;font-weight:500}.styles_module_wtTextHeadingLargeWide__2d7c3e0c,.styles_module_wtTextHeadingLarge__2d7c3e0c{font-size:36px;font-weight:400}.styles_module_wtTextHeadingLargeNarrow__2d7c3e0c{font-size:24px;font-weight:400}.styles_module_wtTextHeadingLargeBoldWide__2d7c3e0c,.styles_module_wtTextHeadingLargeBold__2d7c3e0c{font-size:36px;font-weight:700}.styles_module_wtTextHeadingLargeBoldNarrow__2d7c3e0c{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumWide__2d7c3e0c,.styles_module_wtTextHeadingMedium__2d7c3e0c{font-size:24px;font-weight:400}.styles_module_wtTextHeadingMediumSemiWide__2d7c3e0c,.styles_module_wtTextHeadingMediumSemi__2d7c3e0c{font-size:24px;font-weight:500}.styles_module_wtTextHeadingMediumNarrow__2d7c3e0c{font-size:20px;font-weight:400}.styles_module_wtTextHeadingMediumSemiNarrow__2d7c3e0c{font-size:20px;font-weight:500}.styles_module_wtTextHeadingMediumBoldWide__2d7c3e0c,.styles_module_wtTextHeadingMediumBold__2d7c3e0c{font-size:24px;font-weight:700}.styles_module_wtTextHeadingMediumBoldWide__2d7c3e0c{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallWide__2d7c3e0c,.styles_module_wtTextHeadingSmall__2d7c3e0c{font-size:20px;font-weight:400}.styles_module_wtTextHeadingSmallNarrow__2d7c3e0c{font-size:18px;font-weight:400}.styles_module_wtTextHeadingSmallBoldWide__2d7c3e0c,.styles_module_wtTextHeadingSmallBold__2d7c3e0c{font-size:20px;font-weight:700}.styles_module_wtTextHeadingSmallBoldNarrow__2d7c3e0c{font-size:18px;font-weight:700}.styles_module_wtSubHeading__2d7c3e0c{font-size:14px;font-weight:700;line-height:1.25;text-transform:uppercase}.styles_module_wtBodyLargeBold__2d7c3e0c,.styles_module_wtBodyLarge__2d7c3e0c,.styles_module_wtBodyMediumBold__2d7c3e0c,.styles_module_wtBodyMediumSemi__2d7c3e0c,.styles_module_wtBodyMedium__2d7c3e0c,.styles_module_wtBodySmallBold__2d7c3e0c,.styles_module_wtBodySmallSemi__2d7c3e0c,.styles_module_wtBodySmall__2d7c3e0c,.styles_module_wtBodyXLarge__2d7c3e0c,.styles_module_wtBodyXSmallSemi__2d7c3e0c,.styles_module_wtBodyXSmall__2d7c3e0c{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.5}.styles_module_wtBodyXLarge__2d7c3e0c{font-size:24px;font-weight:400}.styles_module_wtBodyLarge__2d7c3e0c{font-size:18px;font-weight:400}.styles_module_wtBodyLargeBold__2d7c3e0c{font-size:18px;font-weight:700}.styles_module_wtBodyMedium__2d7c3e0c{font-size:16px;font-weight:400}.styles_module_wtBodyMediumSemi__2d7c3e0c{font-size:16px;font-weight:500}.styles_module_wtBodyMediumBold__2d7c3e0c{font-size:16px;font-weight:700}.styles_module_wtBodySmall__2d7c3e0c{font-size:14px;font-weight:400}.styles_module_wtBodySmallSemi__2d7c3e0c{font-size:14px;font-weight:500}.styles_module_wtBodySmallBold__2d7c3e0c{font-size:14px;font-weight:700}.styles_module_wtBodyXSmall__2d7c3e0c{font-size:12px;font-weight:400}.styles_module_wtBodyXSmallSemi__2d7c3e0c{font-size:12px;font-weight:500}.styles_module_wtLabelLargeBold__2d7c3e0c,.styles_module_wtLabelLargeSemi__2d7c3e0c,.styles_module_wtLabelLarge__2d7c3e0c,.styles_module_wtLabelMediumBold__2d7c3e0c,.styles_module_wtLabelMediumSemi__2d7c3e0c,.styles_module_wtLabelMedium__2d7c3e0c,.styles_module_wtLabelSmallBold__2d7c3e0c,.styles_module_wtLabelSmallSemi__2d7c3e0c,.styles_module_wtLabelSmall__2d7c3e0c,.styles_module_wtLabelXSmallBold__2d7c3e0c,.styles_module_wtLabelXSmallSemi__2d7c3e0c,.styles_module_wtLabelXSmall__2d7c3e0c{font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-weight:400;line-height:1.2}.styles_module_wtLabelLarge__2d7c3e0c{font-size:16px;font-weight:400}.styles_module_wtLabelLargeSemi__2d7c3e0c{font-size:16px;font-weight:500}.styles_module_wtLabelLargeBold__2d7c3e0c{font-size:16px;font-weight:700}.styles_module_wtLabelMedium__2d7c3e0c{font-size:14px;font-weight:400}.styles_module_wtLabelMediumSemi__2d7c3e0c{font-size:14px;font-weight:500}.styles_module_wtLabelMediumBold__2d7c3e0c{font-size:14px;font-weight:700}.styles_module_wtLabelSmall__2d7c3e0c{font-size:12px;font-weight:400}.styles_module_wtLabelSmallSemi__2d7c3e0c{font-size:12px;font-weight:500}.styles_module_wtLabelSmallBold__2d7c3e0c{font-size:12px;font-weight:700}.styles_module_wtLabelXSmall__2d7c3e0c{font-size:10px;font-weight:400}.styles_module_wtLabelXSmallSemi__2d7c3e0c{font-size:10px;font-weight:500}.styles_module_wtLabelXSmallBold__2d7c3e0c{font-size:10px;font-weight:700}.styles_module_freeTrialBadgeContainer__2d7c3e0c{align-items:center;display:flex;gap:.5rem;justify-content:center;padding:.625rem .625rem .625rem .75rem}.styles_module_freeTrialBadgeIcon__2d7c3e0c{height:1rem;width:1rem}.styles_module_freeTrialBadgeText__2d7c3e0c{color:#676767;font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-size:12px;font-weight:400;line-height:1.2}");
            var t2 = {
                freeTrialBadgeContainer: "styles_module_freeTrialBadgeContainer__2d7c3e0c",
                freeTrialBadgeIcon: "styles_module_freeTrialBadgeIcon__2d7c3e0c",
                freeTrialBadgeText: "styles_module_freeTrialBadgeText__2d7c3e0c"
            };
            let t8 = () => (0, _.jsxs)("div", {
                    className: t2.freeTrialBadgeContainer,
                    children: [(0, _.jsx)(t4, {
                        "aria-hidden": "true",
                        focusable: "false",
                        className: t2.freeTrialBadgeIcon
                    }), (0, _.jsx)("span", {
                        className: t2.freeTrialBadgeText,
                        children: (0, _.jsx)(M, {
                            i18nKey: "wetransfer-ultimate",
                            components: {
                                br: (0, _.jsx)("br", {})
                            }
                        })
                    })]
                }),
                t5 = ({
                    upgradeButtonData: e
                }) => {
                    let t = eK({}).upgrade.data;
                    return (0, _.jsxs)(e3, {
                        variation: "upsell",
                        href: (() => {
                            switch (e.behaviour) {
                                case eC.aX.REDIRECT_TO_PRICING:
                                    return null == t ? void 0 : t.pathname;
                                case eC.aX.REDIRECT_TO_CHECKOUT:
                                    return e.checkoutRoute;
                                case eC.aX.SHOW_PAYWALL:
                                    return
                            }
                        })(),
                        onClick: (0, eq.eE)(t),
                        children: [(0, _.jsx)(eQ.DmQ, {
                            size: "small"
                        }), null == t ? void 0 : t.label]
                    })
                },
                t3 = ({
                    className: e,
                    shouldHideUsageProgressBar: t,
                    upgradeButtonData: a,
                    usageWidgetUpsellButtonData: n,
                    showcaseFreeTrial: r,
                    productUpdatesDropdownProps: i
                }) => {
                    let {
                        isFreeTier: o
                    } = (0, g.useContext)(eE);
                    return (0, _.jsxs)(tk.Container, {
                        className: (0, f.A)(tq.container, o && tq.withButton, e),
                        children: [o && (0, _.jsx)("div", r ? {
                            className: tq.section,
                            children: (0, _.jsx)(t8, {})
                        } : {
                            className: tq.section,
                            children: (0, _.jsx)(t5, {
                                upgradeButtonData: a
                            })
                        }), (0, _.jsx)("div", {
                            className: (0, f.A)(tq.section, o && tq.borderedLeft),
                            children: (0, _.jsx)(tX, {
                                shouldHideUsageProgressBar: t,
                                usageWidgetUpsellButtonData: n,
                                showcaseFreeTrial: r
                            })
                        }), (null == i ? void 0 : i.type) && (0, _.jsx)("div", {
                            className: (0, f.A)(tq.section, tq.productUpdatesDropdownSection, tq.borderedLeft),
                            children: (0, _.jsx)(t0, Object.assign({}, i))
                        })]
                    })
                },
                t6 = ({
                    links: e,
                    app: t = eC.Uu.TRANSFER,
                    navPagesQueryParams: a,
                    shouldHideUsageProgressBar: n,
                    upgradeButtonData: r,
                    usageWidgetUpsellButtonData: i,
                    canHideReviews: o = !1,
                    showcaseFreeTrial: l = !1,
                    productUpdatesDropdownProps: s
                }) => {
                    let {
                        isMobile: d
                    } = eR(), {
                        isAuthorized: u
                    } = (0, g.useContext)(eE), c = eK({
                        navPagesQueryParams: a
                    }), f = tE({
                        nav: t,
                        navPagesQueryParams: a,
                        canHideReviews: o
                    }), m = e || f, p = [c.upload.data, ...m];
                    return u ? d ? (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)(tb, {
                            navigation: p
                        }), (0, _.jsx)(e$.Q, {}), (0, _.jsx)(tX, {
                            shouldHideUsageProgressBar: n,
                            usageWidgetUpsellButtonData: i,
                            showcaseFreeTrial: !1
                        })]
                    }) : (0, _.jsx)(_.Fragment, {
                        children: (0, _.jsxs)(tk.Group, {
                            children: [(0, _.jsx)(tk, {
                                autoMore: !0,
                                navigation: m
                            }), (0, _.jsx)(t3, {
                                shouldHideUsageProgressBar: n,
                                upgradeButtonData: r,
                                usageWidgetUpsellButtonData: i,
                                showcaseFreeTrial: l,
                                productUpdatesDropdownProps: s
                            })]
                        })
                    }) : (0, _.jsx)(tj, {
                        app: eC.Uu.FRONTSITE
                    })
                };
            (0, eI.$)(".styles_module_container__05ad3f7f{align-items:center;display:flex;gap:.5rem;justify-content:space-between;padding:1rem;position:absolute;right:0;top:0;z-index:89}.styles_module_container__05ad3f7f.styles_module_fullWidth__05ad3f7f{width:100%}.styles_module_container__05ad3f7f.styles_module_mobile__05ad3f7f{align-items:center;background-color:#fff;display:flex;height:50px;justify-content:space-between!important;padding:0 1rem;width:100%}.styles_module_container__05ad3f7f.styles_module_mobile__05ad3f7f.styles_module_dark__05ad3f7f{background-color:#161616}");
            var t7 = {
                fullWidth: "styles_module_fullWidth__05ad3f7f",
                mobile: "styles_module_mobile__05ad3f7f",
                dark: "styles_module_dark__05ad3f7f",
                container: "styles_module_container__05ad3f7f"
            };
            let t9 = ({
                    children: e,
                    className: t,
                    colorMode: a,
                    boundaryElement: n,
                    fullWidth: r,
                    isLoading: i,
                    language: o,
                    linkAs: l,
                    workspaces: s,
                    user: d
                }) => {
                    let {
                        id: u,
                        mode: c,
                        setId: p,
                        setLinkAs: h,
                        setMode: y,
                        setWorkspaces: w,
                        setBoundaryElement: b,
                        setUser: v
                    } = (0, g.useContext)(eE), x = (0, g.useRef)((0, m.Ak)()), S = (eP.isInitialized || eP.isInitializing || eP.init({
                        fallbackLng: "en-US",
                        lng: o,
                        ns: ["topNav"],
                        partialBundledLanguages: !0,
                        resources: eN
                    }), eP), {
                        isMobile: L
                    } = eR();
                    return (0, g.useEffect)(() => {
                        S.changeLanguage(o)
                    }, [S, o]), (0, g.useEffect)(() => {
                        p(x.current), h(null != l ? l : "a"), y(null != a ? a : "light"), w(null != s ? s : []), v(d), b(n)
                    }, [a, n, l, b, p, h, y, w, v, d, s]), (0, _.jsx)(z, {
                        i18n: S,
                        defaultNS: "topNav",
                        children: (0, _.jsx)("nav", {
                            id: `wt-top-navigation-${u}`,
                            className: (0, f.A)(t7.container, t7[c], L && t7.mobile, r && t7.fullWidth, t),
                            children: i ? (0, _.jsx)(eU, {}) : e
                        })
                    })
                },
                ae = e => {
                    var {
                        app: t,
                        children: a,
                        colorMode: n,
                        fullWidth: r,
                        user: i,
                        workspaces: o
                    } = e, l = (0, c.Tt)(e, ["app", "children", "colorMode", "fullWidth", "user", "workspaces"]);
                    return (0, _.jsx)(eM, {
                        app: t,
                        mode: n,
                        user: i,
                        workspaces: o,
                        children: (0, _.jsx)(t9, Object.assign({}, l, {
                            colorMode: n,
                            fullWidth: r,
                            user: i,
                            workspaces: o,
                            children: a
                        }))
                    })
                },
                at = {
                    Product: e => {
                        var t, a, n, r, i, {
                                links: o,
                                navPagesQueryParams: l
                            } = e,
                            s = (0, c.Tt)(e, ["links", "navPagesQueryParams"]);
                        return (0, _.jsx)(ae, Object.assign({}, s, {
                            app: eC.Uu.TRANSFER,
                            children: (0, _.jsx)(t6, {
                                app: eC.Uu.TRANSFER,
                                links: o,
                                navPagesQueryParams: l,
                                shouldHideUsageProgressBar: null != (t = s.shouldHideUsageProgressBar) && t,
                                canHideReviews: null != (a = s.canHideReviews) && a,
                                upgradeButtonData: null != (n = s.upgradeButtonData) ? n : {
                                    behaviour: eC.aX.REDIRECT_TO_PRICING,
                                    checkoutRoute: ""
                                },
                                usageWidgetUpsellButtonData: null != (r = s.usageWidgetUpsellButtonData) ? r : {
                                    behaviour: eC.aX.REDIRECT_TO_PRICING,
                                    checkoutRoute: ""
                                },
                                showcaseFreeTrial: null != (i = s.shouldShowcaseFreeTrial) && i,
                                productUpdatesDropdownProps: s.productUpdatesDropdownProps
                            })
                        }))
                    },
                    Authorized: e => {
                        var t, a, n, r, i, {
                                links: o,
                                app: l = eC.Uu.TRANSFER,
                                navPagesQueryParams: s
                            } = e,
                            d = (0, c.Tt)(e, ["links", "app", "navPagesQueryParams"]);
                        return (0, _.jsx)(ae, Object.assign({}, d, {
                            app: eC.Uu.TRANSFER,
                            children: (0, _.jsx)(t6, {
                                app: l,
                                links: o,
                                navPagesQueryParams: s,
                                shouldHideUsageProgressBar: null != (t = d.shouldHideUsageProgressBar) && t,
                                canHideReviews: null != (a = d.canHideReviews) && a,
                                upgradeButtonData: null != (n = d.upgradeButtonData) ? n : {
                                    behaviour: eC.aX.REDIRECT_TO_PRICING,
                                    checkoutRoute: ""
                                },
                                usageWidgetUpsellButtonData: null != (r = d.usageWidgetUpsellButtonData) ? r : {
                                    behaviour: eC.aX.REDIRECT_TO_PRICING,
                                    checkoutRoute: ""
                                },
                                showcaseFreeTrial: null != (i = d.shouldShowcaseFreeTrial) && i,
                                productUpdatesDropdownProps: d.productUpdatesDropdownProps
                            })
                        }))
                    },
                    Portals: e => {
                        var t, a, n, r, i, {
                                links: o,
                                navPagesQueryParams: l
                            } = e,
                            s = (0, c.Tt)(e, ["links", "navPagesQueryParams"]);
                        return (0, _.jsx)(ae, Object.assign({}, s, {
                            app: eC.Uu.PORTALS,
                            children: (0, _.jsx)(t6, {
                                app: eC.Uu.PORTALS,
                                links: o,
                                navPagesQueryParams: l,
                                shouldHideUsageProgressBar: null != (t = s.shouldHideUsageProgressBar) && t,
                                canHideReviews: null != (a = s.canHideReviews) && a,
                                upgradeButtonData: null != (n = s.upgradeButtonData) ? n : {
                                    behaviour: eC.aX.REDIRECT_TO_PRICING,
                                    checkoutRoute: ""
                                },
                                usageWidgetUpsellButtonData: null != (r = s.usageWidgetUpsellButtonData) ? r : {
                                    behaviour: eC.aX.REDIRECT_TO_PRICING,
                                    checkoutRoute: ""
                                },
                                showcaseFreeTrial: null != (i = s.shouldShowcaseFreeTrial) && i
                            })
                        }))
                    },
                    Frontsite: e => {
                        var t, a, {
                                links: n,
                                navPagesQueryParams: r
                            } = e,
                            i = (0, c.Tt)(e, ["links", "navPagesQueryParams"]);
                        return (0, _.jsx)(ae, Object.assign({}, i, {
                            app: eC.Uu.FRONTSITE,
                            children: (0, _.jsx)(tj, {
                                app: eC.Uu.FRONTSITE,
                                links: n,
                                navPagesQueryParams: r,
                                canHideReviews: null != (t = i.canHideReviews) && t,
                                shouldShowWeTransferSignLanding: null != (a = i.shouldShowWeTransferSignLanding) && a
                            })
                        }))
                    },
                    Anonymous: e => {
                        var t, a, {
                                links: n,
                                navPagesQueryParams: r
                            } = e,
                            i = (0, c.Tt)(e, ["links", "navPagesQueryParams"]);
                        return (0, _.jsx)(ae, Object.assign({}, i, {
                            app: eC.Uu.FRONTSITE,
                            children: (0, _.jsx)(tj, {
                                app: eC.Uu.FRONTSITE,
                                links: n,
                                navPagesQueryParams: r,
                                canHideReviews: null != (t = i.canHideReviews) && t,
                                shouldShowWeTransferSignLanding: null != (a = i.shouldShowWeTransferSignLanding) && a
                            })
                        }))
                    },
                    Copyrighted: e => (0, _.jsx)(ae, Object.assign({}, e, {
                        app: eC.Uu.TRANSFER,
                        fullWidth: !0,
                        children: (0, _.jsx)(tP, {})
                    }))
                }
        },
        37670: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => o
            });
            var n = a(66257),
                r = a(56993),
                i = a(70028);

            function o(e, t) {
                (0, r.A)(1, arguments);
                var a, o, g, p = (0, i.A)(null != (a = null == t ? void 0 : t.additionalDigits) ? a : 2);
                if (2 !== p && 1 !== p && 0 !== p) throw RangeError("additionalDigits must be 0, 1 or 2");
                if ("string" != typeof e && "[object String]" !== Object.prototype.toString.call(e)) return new Date(NaN);
                var h = function(e) {
                    var t, a = {},
                        n = e.split(l.dateTimeDelimiter);
                    if (n.length > 2) return a;
                    if (/:/.test(n[0]) ? t = n[0] : (a.date = n[0], t = n[1], l.timeZoneDelimiter.test(a.date) && (a.date = e.split(l.timeZoneDelimiter)[0], t = e.substr(a.date.length, e.length))), t) {
                        var r = l.timezone.exec(t);
                        r ? (a.time = t.replace(r[1], ""), a.timezone = r[1]) : a.time = t
                    }
                    return a
                }(e);
                if (h.date) {
                    var y = function(e, t) {
                        var a = RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"),
                            n = e.match(a);
                        if (!n) return {
                            year: NaN,
                            restDateString: ""
                        };
                        var r = n[1] ? parseInt(n[1]) : null,
                            i = n[2] ? parseInt(n[2]) : null;
                        return {
                            year: null === i ? r : 100 * i,
                            restDateString: e.slice((n[1] || n[2]).length)
                        }
                    }(h.date, p);
                    o = function(e, t) {
                        if (null === t) return new Date(NaN);
                        var a, n, r, i, o, l, d, u, _, g, p, h, y = e.match(s);
                        if (!y) return new Date(NaN);
                        var w = !!y[4],
                            b = c(y[1]),
                            v = c(y[2]) - 1,
                            x = c(y[3]),
                            S = c(y[4]),
                            L = c(y[5]) - 1;
                        if (w) {
                            return (a = S, n = L, a >= 1 && a <= 53 && n >= 0 && n <= 6) ? (r = t, i = S, o = L, (l = new Date(0)).setUTCFullYear(r, 0, 4), d = l.getUTCDay() || 7, l.setUTCDate(l.getUTCDate() + ((i - 1) * 7 + o + 1 - d)), l) : new Date(NaN)
                        }
                        var k = new Date(0);
                        return (u = t, _ = v, g = x, _ >= 0 && _ <= 11 && g >= 1 && g <= (f[_] || (m(u) ? 29 : 28)) && (p = t, (h = b) >= 1 && h <= (m(p) ? 366 : 365))) ? (k.setUTCFullYear(t, v, Math.max(b, x)), k) : new Date(NaN)
                    }(y.restDateString, y.year)
                }
                if (!o || isNaN(o.getTime())) return new Date(NaN);
                var w = o.getTime(),
                    b = 0;
                if (h.time && isNaN(b = function(e) {
                        var t, a, r, i = e.match(d);
                        if (!i) return NaN;
                        var o = _(i[1]),
                            l = _(i[2]),
                            s = _(i[3]);
                        return (t = o, a = l, r = s, 24 === t ? 0 === a && 0 === r : r >= 0 && r < 60 && a >= 0 && a < 60 && t >= 0 && t < 25) ? o * n.s0 + l * n.Cg + 1e3 * s : NaN
                    }(h.time))) return new Date(NaN);
                if (h.timezone) {
                    if (isNaN(g = function(e) {
                            if ("Z" === e) return 0;
                            var t, a = e.match(u);
                            if (!a) return 0;
                            var r = "+" === a[1] ? -1 : 1,
                                i = parseInt(a[2]),
                                o = a[3] && parseInt(a[3]) || 0;
                            return (t = o) >= 0 && t <= 59 ? r * (i * n.s0 + o * n.Cg) : NaN
                        }(h.timezone))) return new Date(NaN)
                } else {
                    var v = new Date(w + b),
                        x = new Date(0);
                    return x.setFullYear(v.getUTCFullYear(), v.getUTCMonth(), v.getUTCDate()), x.setHours(v.getUTCHours(), v.getUTCMinutes(), v.getUTCSeconds(), v.getUTCMilliseconds()), x
                }
                return new Date(w + b + g)
            }
            var l = {
                    dateTimeDelimiter: /[T ]/,
                    timeZoneDelimiter: /[Z ]/i,
                    timezone: /([Z+-].*)$/
                },
                s = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
                d = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
                u = /^([+-])(\d{2})(?::?(\d{2}))?$/;

            function c(e) {
                return e ? parseInt(e) : 1
            }

            function _(e) {
                return e && parseFloat(e.replace(",", ".")) || 0
            }
            var f = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            function m(e) {
                return e % 400 == 0 || e % 4 == 0 && e % 100 != 0
            }
        },
        38264: (e, t, a) => {
            var n = a(82087),
                r = n ? n.prototype : void 0,
                i = r ? r.valueOf : void 0;
            e.exports = function(e) {
                return i ? Object(i.call(e)) : {}
            }
        },
        39320: (e, t, a) => {
            "use strict";
            a.d(t, {
                t: () => _
            });
            var n = a(23798),
                r = a(71623),
                i = a(46240);
            (0, a(85752).$)(".styles_module_wtShadowNone__e3ab482a{box-shadow:none}.styles_module_wtShadow2_Dark__e3ab482a{box-shadow:0 2px 4px 0 rgba(0,0,0,.2),inset 0 1px 0 0 hsla(0,0%,100%,.3),inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow2_Light__e3ab482a{box-shadow:0 2px 4px 0 rgba(0,0,0,.2),inset 0 1px 0 0 #fff,inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow4_Dark__e3ab482a{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),inset 0 1px 0 0 hsla(0,0%,100%,.3),inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow4_Light__e3ab482a{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),inset 0 1px 0 0 #fff,inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow8_Dark__e3ab482a{box-shadow:0 8px 16px 0 rgba(0,0,0,.2),inset 0 1px 0 0 hsla(0,0%,100%,.3),inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow8_Light__e3ab482a{box-shadow:0 8px 16px 0 rgba(0,0,0,.2),inset 0 1px 0 0 #fff,inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow16_Dark__e3ab482a{box-shadow:0 16px 32px 0 rgba(0,0,0,.2),inset 0 1px 0 0 hsla(0,0%,100%,.3),inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow16_Light__e3ab482a{box-shadow:0 16px 32px 0 rgba(0,0,0,.2),inset 0 1px 0 0 #fff,inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow32_Dark__e3ab482a{box-shadow:0 32px 64px 0 rgba(0,0,0,.2),inset 0 1px 0 0 hsla(0,0%,100%,.3),inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow32_Light__e3ab482a{box-shadow:0 32px 64px 0 rgba(0,0,0,.2),inset 0 1px 0 0 #fff,inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtToast__e3ab482a{align-items:center;border-radius:24px;display:flex;font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-size:16px;font-weight:400;gap:.75rem;line-height:1.5;padding:.75rem;position:relative}.styles_module_wtToast_Dark__e3ab482a{background:#161616;box-shadow:0 32px 64px 0 rgba(0,0,0,.2),inset 0 1px 0 0 hsla(0,0%,100%,.3),inset 0 -1px 0 0 rgba(0,0,0,.1);color:#fff}.styles_module_wtToast_Light__e3ab482a{background:#f9f9f9;box-shadow:0 32px 64px 0 rgba(0,0,0,.2),inset 0 1px 0 0 #fff,inset 0 -1px 0 0 rgba(0,0,0,.1);color:rgba(0,0,0,.7)}.styles_module_wtToastContent__e3ab482a{padding:.5rem;width:100%}.styles_module_wtToastClose__e3ab482a{flex-shrink:0}.styles_module_wtToastActions__e3ab482a{display:flex;flex-shrink:0;gap:.5rem}.styles_module_toastProvider__e3ab482a{z-index:90}");
            var o = {
                    "wt-shadow-none": "styles_module_wtShadowNone__e3ab482a",
                    "wt-shadow-2--dark": "styles_module_wtShadow2_Dark__e3ab482a",
                    "wt-shadow-2--light": "styles_module_wtShadow2_Light__e3ab482a",
                    "wt-shadow-4--dark": "styles_module_wtShadow4_Dark__e3ab482a",
                    "wt-shadow-4--light": "styles_module_wtShadow4_Light__e3ab482a",
                    "wt-shadow-8--dark": "styles_module_wtShadow8_Dark__e3ab482a",
                    "wt-shadow-8--light": "styles_module_wtShadow8_Light__e3ab482a",
                    "wt-shadow-16--dark": "styles_module_wtShadow16_Dark__e3ab482a",
                    "wt-shadow-16--light": "styles_module_wtShadow16_Light__e3ab482a",
                    "wt-shadow-32--dark": "styles_module_wtShadow32_Dark__e3ab482a",
                    "wt-shadow-32--light": "styles_module_wtShadow32_Light__e3ab482a",
                    "wt-toast": "styles_module_wtToast__e3ab482a",
                    "wt-toast--dark": "styles_module_wtToast_Dark__e3ab482a",
                    "wt-toast--light": "styles_module_wtToast_Light__e3ab482a",
                    "wt-toast-content": "styles_module_wtToastContent__e3ab482a",
                    "wt-toast-close": "styles_module_wtToastClose__e3ab482a",
                    "wt-toast-actions": "styles_module_wtToastActions__e3ab482a",
                    "toast-provider": "styles_module_toastProvider__e3ab482a"
                },
                l = a(21462),
                s = a(50496),
                d = a(85633),
                u = a(30403);
            let c = (0, l.forwardRef)(({
                actions: e,
                "aria-live": t,
                className: a,
                id: i,
                isDismissible: l,
                message: c,
                mode: _ = "dark",
                onClose: f,
                role: m
            }, g) => {
                let {
                    dismissToast: p
                } = (0, u.d)();
                return (0, n.jsxs)("div", {
                    "aria-live": t || "polite",
                    className: (0, r.A)(o["wt-toast"], o[`wt-toast--${_}`], a),
                    id: `toast_${i}`,
                    ref: g,
                    role: m || "status",
                    children: [(0, n.jsx)("div", {
                        className: o["wt-toast-content"],
                        children: c
                    }), !!e && (0, n.jsx)("div", {
                        className: o["wt-toast-actions"],
                        children: e(i)
                    }), !!l && (0, n.jsx)(s.K, {
                        appearance: "tertiary",
                        className: o["wt-toast-close"],
                        icon: d.$Td,
                        mode: _,
                        onClick: function() {
                            p(i), f && f()
                        },
                        shape: "rounded",
                        size: "small",
                        variation: "neutral",
                        children: "Close"
                    })]
                })
            });
            c.displayName = "Toast";
            let _ = ({
                anchorHorizontal: e = "right",
                anchorVertical: t = "top",
                children: a,
                className: l,
                maxToast: s = 3
            }) => (0, n.jsx)(i.n, {
                anchorOrigin: {
                    horizontal: e,
                    vertical: t
                },
                classes: {
                    containerRoot: (0, r.A)(o["toast-provider"], l)
                },
                Components: {
                    default: c
                },
                maxSnack: s,
                preventDuplicate: !0,
                children: a
            })
        },
        42189: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => l
            });
            var n = a(66257),
                r = a(81620),
                i = a(56993),
                o = a(53012);

            function l(e, t, a) {
                (0, i.A)(2, arguments);
                var l = (0, r.A)(e, t) / n.Cg;
                return (0, o.u)(null == a ? void 0 : a.roundingMethod)(l)
            }
        },
        43562: (e, t, a) => {
            "use strict";

            function n(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            a.d(t, {
                A: () => n
            })
        },
        43699: (e, t, a) => {
            "use strict";
            a.d(t, {
                l: () => u,
                y: () => d
            });
            var n = a(23798),
                r = a(71623),
                i = a(21462);
            (0, a(85752).$)(".styles_module_wtBanner__8480ad46,.styles_module_wtSitewideBanner__8480ad46{color:rgba(0,0,0,.9)}.styles_module_wtBanner_DestructiveDark__8480ad46,.styles_module_wtBanner_DestructiveLight__8480ad46,.styles_module_wtSitewideBanner_DestructiveDark__8480ad46,.styles_module_wtSitewideBanner_DestructiveLight__8480ad46{background-color:#ffede9}.styles_module_wtBanner_InformationDark__8480ad46,.styles_module_wtBanner_InformationLight__8480ad46,.styles_module_wtSitewideBanner_InformationDark__8480ad46,.styles_module_wtSitewideBanner_InformationLight__8480ad46{background-color:#f5f8ff}.styles_module_wtBanner_DefaultDark__8480ad46,.styles_module_wtBanner_NeutralDark__8480ad46,.styles_module_wtSitewideBanner_DefaultDark__8480ad46,.styles_module_wtSitewideBanner_NeutralDark__8480ad46{background:#161616;color:#fff}.styles_module_wtBanner_DefaultLight__8480ad46,.styles_module_wtBanner_NeutralLight__8480ad46,.styles_module_wtSitewideBanner_DefaultLight__8480ad46,.styles_module_wtSitewideBanner_NeutralLight__8480ad46{background:#f9f9f9}.styles_module_wtBanner_UpsellDark__8480ad46,.styles_module_wtBanner_UpsellLight__8480ad46,.styles_module_wtSitewideBanner_UpsellDark__8480ad46,.styles_module_wtSitewideBanner_UpsellLight__8480ad46{background-color:#f6edff}.styles_module_wtBanner_Rounded__8480ad46,.styles_module_wtSitewideBanner_Rounded__8480ad46{border-radius:16px}.styles_module_wtBanner__8480ad46{container-type:inline-size;width:100%}.styles_module_wtBannerInner__8480ad46{align-items:center;display:flex;flex-direction:column;gap:1rem;justify-content:center;padding:12px 16px}@container (min-width: 42ch){.styles_module_wtBannerInner__8480ad46{flex-direction:row;flex-wrap:wrap}}.styles_module_wtBannerClose__8480ad46{display:flex;flex-shrink:0;justify-content:flex-end;margin-bottom:-1rem;order:1;width:100%}@container (min-width: 42ch){.styles_module_wtBannerClose__8480ad46{margin-bottom:0;order:4;width:auto}}@container (min-width: 60ch){.styles_module_wtBannerClose__8480ad46{margin-bottom:0;order:5;width:auto}}.styles_module_wtBannerIcon__8480ad46{flex-shrink:0;height:24px;order:2}.styles_module_wtBannerIcon_DefaultDark__8480ad46{color:#fff}.styles_module_wtBannerIcon_DefaultLight__8480ad46{color:#161616}.styles_module_wtBannerIcon_DestructiveDark__8480ad46,.styles_module_wtBannerIcon_DestructiveLight__8480ad46{color:#b82b00}.styles_module_wtBannerIcon_InformationDark__8480ad46,.styles_module_wtBannerIcon_InformationLight__8480ad46{color:#3767ea}.styles_module_wtBannerIcon_NeutralDark__8480ad46{color:#fff}.styles_module_wtBannerIcon_NeutralLight__8480ad46{color:#161616}.styles_module_wtBannerIcon_UpsellDark__8480ad46,.styles_module_wtBannerIcon_UpsellLight__8480ad46{color:#8e21cc}.styles_module_wtBannerContent__8480ad46{flex-grow:1;order:3;text-align:center;width:100%}@container (min-width: 42ch){.styles_module_wtBannerContent__8480ad46{text-align:left;width:-moz-min-content;width:min-content}}.styles_module_wtBannerActions__8480ad46{display:flex;flex-direction:column;flex-shrink:0;gap:.5rem;order:4;width:100%}@container (min-width: 42ch){.styles_module_wtBannerActions__8480ad46{flex-direction:row;justify-content:center}}@container (min-width: 60ch){.styles_module_wtBannerActions__8480ad46{width:auto}}.styles_module_wtBannerActions__8480ad46>*{width:100%}@container (min-width: 60ch){.styles_module_wtBannerActions__8480ad46>*{width:auto}}.styles_module_wtSitewideBanner__8480ad46{display:flex;justify-content:center}");
            var o = {
                    "wt-banner": "styles_module_wtBanner__8480ad46",
                    "wt-sitewide-banner": "styles_module_wtSitewideBanner__8480ad46",
                    "wt-banner--destructive-dark": "styles_module_wtBanner_DestructiveDark__8480ad46",
                    "wt-banner--destructive-light": "styles_module_wtBanner_DestructiveLight__8480ad46",
                    "wt-sitewide-banner--destructive-dark": "styles_module_wtSitewideBanner_DestructiveDark__8480ad46",
                    "wt-sitewide-banner--destructive-light": "styles_module_wtSitewideBanner_DestructiveLight__8480ad46",
                    "wt-banner--information-dark": "styles_module_wtBanner_InformationDark__8480ad46",
                    "wt-banner--information-light": "styles_module_wtBanner_InformationLight__8480ad46",
                    "wt-sitewide-banner--information-dark": "styles_module_wtSitewideBanner_InformationDark__8480ad46",
                    "wt-sitewide-banner--information-light": "styles_module_wtSitewideBanner_InformationLight__8480ad46",
                    "wt-banner--default-dark": "styles_module_wtBanner_DefaultDark__8480ad46",
                    "wt-banner--neutral-dark": "styles_module_wtBanner_NeutralDark__8480ad46",
                    "wt-sitewide-banner--default-dark": "styles_module_wtSitewideBanner_DefaultDark__8480ad46",
                    "wt-sitewide-banner--neutral-dark": "styles_module_wtSitewideBanner_NeutralDark__8480ad46",
                    "wt-banner--default-light": "styles_module_wtBanner_DefaultLight__8480ad46",
                    "wt-banner--neutral-light": "styles_module_wtBanner_NeutralLight__8480ad46",
                    "wt-sitewide-banner--default-light": "styles_module_wtSitewideBanner_DefaultLight__8480ad46",
                    "wt-sitewide-banner--neutral-light": "styles_module_wtSitewideBanner_NeutralLight__8480ad46",
                    "wt-banner--upsell-dark": "styles_module_wtBanner_UpsellDark__8480ad46",
                    "wt-banner--upsell-light": "styles_module_wtBanner_UpsellLight__8480ad46",
                    "wt-sitewide-banner--upsell-dark": "styles_module_wtSitewideBanner_UpsellDark__8480ad46",
                    "wt-sitewide-banner--upsell-light": "styles_module_wtSitewideBanner_UpsellLight__8480ad46",
                    "wt-banner--rounded": "styles_module_wtBanner_Rounded__8480ad46",
                    "wt-sitewide-banner--rounded": "styles_module_wtSitewideBanner_Rounded__8480ad46",
                    "wt-banner-inner": "styles_module_wtBannerInner__8480ad46",
                    "wt-banner-close": "styles_module_wtBannerClose__8480ad46",
                    "wt-banner-icon": "styles_module_wtBannerIcon__8480ad46",
                    "wt-banner-icon--default-dark": "styles_module_wtBannerIcon_DefaultDark__8480ad46",
                    "wt-banner-icon--default-light": "styles_module_wtBannerIcon_DefaultLight__8480ad46",
                    "wt-banner-icon--destructive-dark": "styles_module_wtBannerIcon_DestructiveDark__8480ad46",
                    "wt-banner-icon--destructive-light": "styles_module_wtBannerIcon_DestructiveLight__8480ad46",
                    "wt-banner-icon--information-dark": "styles_module_wtBannerIcon_InformationDark__8480ad46",
                    "wt-banner-icon--information-light": "styles_module_wtBannerIcon_InformationLight__8480ad46",
                    "wt-banner-icon--neutral-dark": "styles_module_wtBannerIcon_NeutralDark__8480ad46",
                    "wt-banner-icon--neutral-light": "styles_module_wtBannerIcon_NeutralLight__8480ad46",
                    "wt-banner-icon--upsell-dark": "styles_module_wtBannerIcon_UpsellDark__8480ad46",
                    "wt-banner-icon--upsell-light": "styles_module_wtBannerIcon_UpsellLight__8480ad46",
                    "wt-banner-content": "styles_module_wtBannerContent__8480ad46",
                    "wt-banner-actions": "styles_module_wtBannerActions__8480ad46"
                },
                l = a(50496),
                s = a(85633);
            let d = (0, i.createContext)({
                    mode: "light",
                    variation: "default"
                }),
                u = Object.assign(({
                    children: e,
                    className: t,
                    isOpen: a = !0,
                    mode: i = "light",
                    style: l,
                    variation: s = "default",
                    rounded: u = !0
                }) => a ? (0, n.jsx)(d.Provider, {
                    value: {
                        mode: i,
                        variation: s
                    },
                    children: (0, n.jsx)("div", {
                        className: (0, r.A)(o["wt-banner"], o[`wt-banner--${s}-${i}`], u && o["wt-banner--rounded"], t),
                        role: "status",
                        style: l,
                        children: (0, n.jsx)("div", {
                            className: o["wt-banner-inner"],
                            children: e
                        })
                    })
                }) : null, {
                    Actions: ({
                        children: e,
                        className: t
                    }) => (0, n.jsx)("div", {
                        className: (0, r.A)(o["wt-banner-actions"], t),
                        children: e
                    }),
                    CloseButton: ({
                        className: e,
                        onClose: t
                    }) => {
                        let {
                            mode: a
                        } = (0, i.useContext)(d);
                        return (0, n.jsx)("div", {
                            className: (0, r.A)(o["wt-banner-close"], e),
                            children: (0, n.jsx)(l.K, {
                                appearance: "tertiary",
                                icon: s.$Td,
                                mode: a,
                                onClick: t,
                                shape: "rounded",
                                size: "small",
                                variation: "neutral",
                                children: "Close"
                            })
                        })
                    },
                    Content: ({
                        children: e,
                        className: t
                    }) => (0, n.jsx)("div", {
                        className: (0, r.A)(o["wt-banner-content"], t),
                        children: e
                    }),
                    Icon: ({
                        className: e,
                        icon: t,
                        size: a = "medium"
                    }) => {
                        let {
                            mode: l,
                            variation: s
                        } = (0, i.useContext)(d);
                        return (0, n.jsx)("div", {
                            className: (0, r.A)(o["wt-banner-icon"], o[`wt-banner-icon--${s}-${l}`], e),
                            children: (0, n.jsx)(t, {
                                "aria-hidden": "true",
                                size: a
                            })
                        })
                    }
                })
        },
        43701: (e, t, a) => {
            "use strict";
            var n, r, i, o;
            a.d(t, {
                    DA: () => o,
                    Uu: () => r,
                    aX: () => i,
                    js: () => n
                }),
                function(e) {
                    e.FREE_LEGACY = "free_legacy", e.PLUS = "plus", e.PRO_2022 = "pro_2022", e.PREMIUM_2022 = "premium_2022", e.FREE = "free", e.TRANSFER = "transfer", e.DISTRIBUTE = "distribute", e.COLLABORATE = "collaborate", e.LITE = "lite", e.STARTER = "starter", e.ULTIMATE = "ultimate", e.ENTERPRISE = "enterprise", e.ENTERPRISE_CUSTOM_CONTRACT = "enterprise_custom_contract"
                }(n || (n = {})),
                function(e) {
                    e.TRANSFER = "TRANSFER", e.PORTALS = "PORTALS", e.FRONTSITE = "FRONTSITE"
                }(r || (r = {})),
                function(e) {
                    e.SHOW_PAYWALL = "show_paywall", e.REDIRECT_TO_PRICING = "redirect_to_pricing", e.REDIRECT_TO_CHECKOUT = "redirect_to_checkout"
                }(i || (i = {})),
                function(e) {
                    e.CLASSIC = "classic", e.CAROUSEL = "carousel"
                }(o || (o = {}))
        },
        44652: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => A
            });
            var n = a(43562),
                r = a(80242),
                i = a(21462),
                o = Object.defineProperty,
                l = Object.defineProperties,
                s = Object.getOwnPropertyDescriptors,
                d = Object.getOwnPropertySymbols,
                u = Object.prototype.hasOwnProperty,
                c = Object.prototype.propertyIsEnumerable,
                _ = (e, t, a) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a,
                f = (e, t) => {
                    for (var a in t || (t = {})) u.call(t, a) && _(e, a, t[a]);
                    if (d)
                        for (var a of d(t)) c.call(t, a) && _(e, a, t[a]);
                    return e
                },
                m = (e, t) => l(e, s(t)),
                g = (e, t, a) => (_(e, "symbol" != typeof t ? t + "" : t, a), a),
                p = (e, t, a) => new Promise((n, r) => {
                    var i = e => {
                            try {
                                l(a.next(e))
                            } catch (e) {
                                r(e)
                            }
                        },
                        o = e => {
                            try {
                                l(a.throw(e))
                            } catch (e) {
                                r(e)
                            }
                        },
                        l = e => e.done ? n(e.value) : Promise.resolve(e.value).then(i, o);
                    l((a = a.apply(e, t)).next())
                }),
                h = "hCaptchaOnLoad",
                y = "script-error",
                w = "@hCaptcha/loader";

            function b(e) {
                let t = e && e.ownerDocument || document,
                    a = t.defaultView || t.parentWindow || window;
                return {
                    document: t,
                    window: a
                }
            }

            function v(e) {
                return e || document.head
            }
            var x = class e {
                    constructor(e) {
                        g(this, "_parent"), g(this, "breadcrumbs", []), g(this, "context", {}), g(this, "extra", {}), g(this, "tags", {}), g(this, "request"), g(this, "user"), this._parent = e
                    }
                    get parent() {
                        return this._parent
                    }
                    child() {
                        return new e(this)
                    }
                    setRequest(e) {
                        return this.request = e, this
                    }
                    removeRequest() {
                        return this.request = void 0, this
                    }
                    addBreadcrumb(e) {
                        return typeof e.timestamp > "u" && (e.timestamp = new Date().toISOString()), this.breadcrumbs.push(e), this
                    }
                    setExtra(e, t) {
                        return this.extra[e] = t, this
                    }
                    removeExtra(e) {
                        return delete this.extra[e], this
                    }
                    setContext(e, t) {
                        return typeof t.type > "u" && (t.type = e), this.context[e] = t, this
                    }
                    removeContext(e) {
                        return delete this.context[e], this
                    }
                    setTags(e) {
                        return this.tags = f(f({}, this.tags), e), this
                    }
                    setTag(e, t) {
                        return this.tags[e] = t, this
                    }
                    removeTag(e) {
                        return delete this.tags[e], this
                    }
                    setUser(e) {
                        return this.user = e, this
                    }
                    removeUser() {
                        return this.user = void 0, this
                    }
                    toBody() {
                        let e = [],
                            t = this;
                        for (; t;) e.push(t), t = t.parent;
                        return e.reverse().reduce((e, t) => {
                            var a;
                            return e.breadcrumbs = [...null != (a = e.breadcrumbs) ? a : [], ...t.breadcrumbs], e.extra = f(f({}, e.extra), t.extra), e.contexts = f(f({}, e.contexts), t.context), e.tags = f(f({}, e.tags), t.tags), t.user && (e.user = t.user), t.request && (e.request = t.request), e
                        }, {
                            breadcrumbs: [],
                            extra: {},
                            contexts: {},
                            tags: {},
                            request: void 0,
                            user: void 0
                        })
                    }
                    clear() {
                        this.breadcrumbs = [], this.context = {}, this.tags = {}, this.user = void 0
                    }
                },
                S = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
                L = "An unknown error occurred";

            function k(e) {
                return (e + 256).toString(16).substring(1)
            }
            var T, B = [
                    [/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, "chrome"],
                    [/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, "winjs"],
                    [/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i, "gecko"]
                ],
                D = (T = class {
                    constructor(e) {
                        var t, a, n, r, i;
                        g(this, "apiURL"), g(this, "dsn"), g(this, "environment"), g(this, "release"), g(this, "sampleRate"), g(this, "debug"), g(this, "_scope"), g(this, "shouldBuffer", !1), g(this, "bufferlimit", 20), g(this, "buffer", []), this.environment = e.environment, this.release = e.release, this.sampleRate = null != (t = e.sampleRate) ? t : 1, this.debug = null != (a = e.debug) && a, this._scope = null != (n = e.scope) ? n : new x, this.apiURL = function(e) {
                            let t = S.exec(e),
                                a = t ? t.slice(1) : [];
                            if (6 !== a.length) throw Error("Invalid DSN");
                            let n = a[5].split("/"),
                                r = n.slice(0, -1).join("/");
                            return a[0] + "://" + a[3] + (a[4] ? ":" + a[4] : "") + (r ? "/" + r : "") + "/api/" + n.pop() + "/envelope/?sentry_version=7&sentry_key=" + a[1] + (a[2] ? "&sentry_secret=" + a[2] : "")
                        }(e.dsn), this.dsn = e.dsn, this.shouldBuffer = null != (r = e.buffer) && r, this.bufferlimit = null != (i = e.bufferLimit) ? i : 20
                    }
                    static init(e) {
                        T._instance || (T._instance = new T(e))
                    }
                    static get instance() {
                        if (!T._instance) throw Error("Sentry has not been initialized");
                        return T._instance
                    }
                    log(...e) {
                        this.debug && console.log(...e)
                    }
                    get scope() {
                        return this._scope
                    }
                    static get scope() {
                        return T.instance.scope
                    }
                    withScope(e) {
                        e(this._scope.child())
                    }
                    static withScope(e) {
                        T.instance.withScope(e)
                    }
                    captureException(e, t) {
                        this.captureEvent({
                            type: "exception",
                            level: "error",
                            error: function(e) {
                                if (e instanceof Error) return e;
                                if ("string" == typeof e) return Error(e);
                                if ("object" == typeof e && null !== e && !Array.isArray(e)) {
                                    let {
                                        message: t
                                    } = e, a = ((e, t) => {
                                        var a = {};
                                        for (var n in e) u.call(e, n) && 0 > t.indexOf(n) && (a[n] = e[n]);
                                        if (null != e && d)
                                            for (var n of d(e)) 0 > t.indexOf(n) && c.call(e, n) && (a[n] = e[n]);
                                        return a
                                    })(e, ["message"]);
                                    return Object.assign(Error("string" == typeof t ? t : L), a)
                                }
                                return Object.assign(Error(L), {
                                    cause: e
                                })
                            }(e),
                            scope: null != t ? t : this._scope
                        })
                    }
                    static captureException(e, t) {
                        T.instance.captureException(e, t)
                    }
                    captureMessage(e, t = "info", a) {
                        this.captureEvent({
                            type: "message",
                            level: t,
                            message: e,
                            scope: null != a ? a : this._scope
                        })
                    }
                    static captureMessage(e, t = "info", a) {
                        T.instance.captureMessage(e, t, a)
                    }
                    captureEvent(e) {
                        if (Math.random() >= this.sampleRate) return void this.log("Dropped event due to sample rate");
                        if (this.shouldBuffer) {
                            if (this.buffer.length >= this.bufferlimit) return;
                            this.buffer.push(e)
                        } else this.sendEvent(e)
                    }
                    sendEvent(e, t = 5e3) {
                        return p(this, null, function*() {
                            try {
                                this.log("Sending sentry event", e);
                                let a = function(e, t, a) {
                                        var n, r, i;
                                        let o, l = f({
                                            event_id: ((o = function(e) {
                                                for (let t = 0; t < e.length; t++) e[t] = Math.floor(256 * Math.random());
                                                return e
                                            }(Array(16)))[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, k(o[0]) + k(o[1]) + k(o[2]) + k(o[3]) + "-" + k(o[4]) + k(o[5]) + "-" + k(o[6]) + k(o[7]) + "-" + k(o[8]) + k(o[9]) + "-" + k(o[10]) + k(o[11]) + k(o[12]) + k(o[13]) + k(o[14]) + k(o[15])).replaceAll("-", ""),
                                            platform: "javascript",
                                            sdk: {
                                                name: "@hcaptcha/sentry",
                                                version: "0.0.4"
                                            },
                                            environment: t,
                                            release: a,
                                            timestamp: Date.now() / 1e3
                                        }, e.scope.toBody());
                                        if ("exception" === e.type) {
                                            let t;
                                            l.message = null != (r = null == (n = e.error) ? void 0 : n.message) ? r : "Unknown error", l.fingerprint = [l.message];
                                            let a = [],
                                                o = e.error;
                                            for (let e = 0; e < 5 && o && (a.push((t = function(e) {
                                                    var t, a, n, r;
                                                    if (!e.stack) return null;
                                                    let i = [],
                                                        o = null != (n = null == (a = (t = e.stack).split) ? void 0 : a.call(t, `
`)) ? n : [];
                                                    for (let t = 0; t < o.length; ++t) {
                                                        let a = null,
                                                            n = null,
                                                            l = null;
                                                        for (let [e, a] of B)
                                                            if (n = e.exec(o[t])) {
                                                                l = a;
                                                                break
                                                            } if (!(!n || !l)) {
                                                            if ("chrome" === l) a = {
                                                                filename: null != (r = n[2]) && r.startsWith("address at ") ? n[2].substring(11) : n[2],
                                                                function: n[1] || "?",
                                                                lineno: n[3] ? +n[3] : null,
                                                                colno: n[4] ? +n[4] : null
                                                            };
                                                            else if ("winjs" === l) a = {
                                                                filename: n[2],
                                                                function: n[1] || "?",
                                                                lineno: +n[3],
                                                                colno: n[4] ? +n[4] : null
                                                            };
                                                            else {
                                                                if ("gecko" !== l) continue;
                                                                0 === t && !n[5] && void 0 !== e.columnNumber && i.length > 0 && (i[0].column = e.columnNumber + 1), a = {
                                                                    filename: n[3],
                                                                    function: n[1] || "?",
                                                                    lineno: n[4] ? +n[4] : null,
                                                                    colno: n[5] ? +n[5] : null
                                                                }
                                                            }!a.function && a.lineno && (a.function = "?"), i.push(a)
                                                        }
                                                    }
                                                    return i.length ? i.reverse() : null
                                                }(i = o), {
                                                    type: i.name,
                                                    value: i.message,
                                                    stacktrace: {
                                                        frames: null != t ? t : []
                                                    }
                                                })), !(!o.cause || !(o.cause instanceof Error))); e++) o = o.cause;
                                            l.exception = {
                                                values: a.reverse()
                                            }
                                        }
                                        return "message" === e.type && (l.message = e.message, l.level = e.level), l
                                    }(e, this.environment, this.release),
                                    n = {
                                        event_id: a.event_id,
                                        dsn: this.dsn
                                    },
                                    r = JSON.stringify(n) + `
` + JSON.stringify({
                                        type: "event"
                                    }) + `
` + JSON.stringify(a),
                                    i = yield function(e, t, a) {
                                        return p(this, null, function*() {
                                            var n, r;
                                            try {
                                                if ("u" > typeof fetch && "u" > typeof AbortSignal) {
                                                    let n;
                                                    if (a) {
                                                        let e = new AbortController;
                                                        n = e.signal, setTimeout(() => e.abort(), a)
                                                    }
                                                    let r = yield fetch(e, m(f({}, t), {
                                                        signal: n
                                                    })), i = yield r.text();
                                                    return {
                                                        status: r.status,
                                                        body: i
                                                    }
                                                }
                                                return yield new Promise((n, r) => {
                                                    var i, o;
                                                    let l = new XMLHttpRequest;
                                                    if (l.open(null != (i = null == t ? void 0 : t.method) ? i : "GET", e), l.onload = () => n({
                                                            status: l.status,
                                                            body: l.responseText
                                                        }), l.onerror = () => r(Error("XHR Network Error")), null == t ? void 0 : t.headers)
                                                        for (let [e, a] of Object.entries(t.headers)) l.setRequestHeader(e, a);
                                                    if (a) {
                                                        let e = setTimeout(() => {
                                                            l.abort(), r(Error("Request timed out"))
                                                        }, a);
                                                        l.onloadend = () => {
                                                            clearTimeout(e)
                                                        }
                                                    }
                                                    l.send(null == (o = null == t ? void 0 : t.body) ? void 0 : o.toString())
                                                })
                                            } catch (e) {
                                                return {
                                                    status: 0,
                                                    body: null != (r = null == (n = null == e ? void 0 : e.toString) ? void 0 : n.call(e)) ? r : "Unknown error"
                                                }
                                            }
                                        })
                                    }(this.apiURL, {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/x-sentry-envelope"
                                        },
                                        body: r
                                    }, t);
                                this.log("Sentry response", i.status), 200 !== i.status && (console.log(i.body), console.error("Failed to send event to Sentry", i))
                            } catch (e) {
                                console.error("Failed to send event", e)
                            }
                        })
                    }
                    flush(e = 5e3) {
                        return p(this, null, function*() {
                            try {
                                this.log("Flushing sentry events", this.buffer.length);
                                let t = this.buffer.splice(0, this.buffer.length).map(t => this.sendEvent(t, e));
                                yield Promise.all(t), this.log("Flushed all events")
                            } catch (e) {
                                console.error("Failed to flush events", e)
                            }
                        })
                    }
                    static flush(e = 5e3) {
                        return T.instance.flush(e)
                    }
                    static reset() {
                        T._instance = void 0
                    }
                }, g(T, "_instance"), T);

            function H(e = null) {
                return {
                    addBreadcrumb: t => {
                        e && e.addBreadcrumb(t)
                    },
                    captureRequest: t => {
                        e && e.setRequest(t)
                    },
                    captureException: t => {
                        e && D.captureException(t, e)
                    }
                }
            }
            var N = [];

            function P(e) {
                var t = e && e.ownerDocument || document,
                    a = t.defaultView || t.parentWindow || window;
                return {
                    document: t,
                    window: a
                }
            }

            function C(e) {
                return e || document.head
            }
            let A = function(e) {
                function t(t) {
                    var a;
                    return (a = e.call(this, t) || this)._hcaptcha = void 0, a.renderCaptcha = a.renderCaptcha.bind((0, n.A)(a)), a.resetCaptcha = a.resetCaptcha.bind((0, n.A)(a)), a.removeCaptcha = a.removeCaptcha.bind((0, n.A)(a)), a.isReady = a.isReady.bind((0, n.A)(a)), a._onReady = null, a.loadCaptcha = a.loadCaptcha.bind((0, n.A)(a)), a.handleOnLoad = a.handleOnLoad.bind((0, n.A)(a)), a.handleSubmit = a.handleSubmit.bind((0, n.A)(a)), a.handleExpire = a.handleExpire.bind((0, n.A)(a)), a.handleError = a.handleError.bind((0, n.A)(a)), a.handleOpen = a.handleOpen.bind((0, n.A)(a)), a.handleClose = a.handleClose.bind((0, n.A)(a)), a.handleChallengeExpired = a.handleChallengeExpired.bind((0, n.A)(a)), a.ref = i.createRef(), a.apiScriptRequested = !1, a.sentryHub = null, a.captchaId = "", a._pendingExecute = null, a.state = {
                        isApiReady: !1,
                        isRemoved: !1,
                        elementId: t.id
                    }, a
                }(0, r.A)(t, e);
                var a = t.prototype;
                return a.componentDidMount = function() {
                    var e = this,
                        t = P(C(this.props.scriptLocation));
                    if (this._hcaptcha = t.window.hcaptcha || void 0, void 0 !== this._hcaptcha) return void this.setState({
                        isApiReady: !0
                    }, function() {
                        e.renderCaptcha()
                    });
                    this.loadCaptcha()
                }, a.componentWillUnmount = function() {
                    var e = this._hcaptcha,
                        t = this.captchaId;
                    this._cancelPendingExecute("react-component-unmounted"), this.isReady() && (e.reset(t), e.remove(t))
                }, a.shouldComponentUpdate = function(e, t) {
                    return this.state.isApiReady === t.isApiReady && this.state.isRemoved === t.isRemoved
                }, a.componentDidUpdate = function(e) {
                    var t = this;
                    ["sitekey", "size", "theme", "tabindex", "languageOverride", "endpoint"].every(function(a) {
                        return e[a] === t.props[a]
                    }) || this.removeCaptcha(function() {
                        t.renderCaptcha()
                    })
                }, a.loadCaptcha = function() {
                    if (!this.apiScriptRequested) {
                        var e = this.props,
                            t = e.apihost,
                            a = e.assethost,
                            n = e.endpoint,
                            r = e.host,
                            i = e.imghost,
                            o = e.languageOverride,
                            l = e.reCaptchaCompat,
                            s = e.reportapi,
                            d = e.sentry,
                            u = e.custom,
                            c = e.loadAsync,
                            _ = e.scriptLocation,
                            g = e.scriptSource,
                            x = e.secureApi,
                            S = e.cleanup,
                            L = e.userJourneys;
                        (function() {
                            return p(this, arguments, function*(e = {}) {
                                let t = function(e = !0) {
                                    var t, a, n, r, i, o, l;
                                    let s, d, u, c, _;
                                    if (!e) return H();
                                    D.init({
                                        dsn: "https://d233059272824702afc8c43834c4912d@sentry.hcaptcha.com/6",
                                        release: "2.3.0",
                                        environment: "production"
                                    });
                                    let g = D.scope;
                                    return g.setTag("source", w), g.setTag("url", document.URL), g.setContext("os", {
                                        UA: navigator.userAgent
                                    }), g.setContext("browser", f({}, (-1 !== (s = navigator.userAgent).indexOf("Firefox") ? (d = "Firefox", u = null == (a = s.match(/Firefox\/([\d.]+)/)) ? void 0 : a[1]) : -1 !== s.indexOf("Edg") ? (d = "Microsoft Edge", u = null == (n = s.match(/Edg\/([\d.]+)/)) ? void 0 : n[1]) : -1 !== s.indexOf("Chrome") && -1 !== s.indexOf("Safari") ? (d = "Chrome", u = null == (r = s.match(/Chrome\/([\d.]+)/)) ? void 0 : r[1]) : -1 !== s.indexOf("Safari") && -1 === s.indexOf("Chrome") ? (d = "Safari", u = null == (i = s.match(/Version\/([\d.]+)/)) ? void 0 : i[1]) : -1 !== s.indexOf("Opera") || -1 !== s.indexOf("OPR") ? (d = "Opera", u = null == (o = s.match(/(Opera|OPR)\/([\d.]+)/)) ? void 0 : o[2]) : -1 !== s.indexOf("MSIE") || -1 !== s.indexOf("Trident") ? (d = "Internet Explorer", u = null == (l = s.match(/(MSIE |rv:)([\d.]+)/)) ? void 0 : l[2]) : (d = "Unknown", u = "Unknown"), {
                                        name: d,
                                        version: u
                                    }))), g.setContext("device", m(f({}, {
                                        model: _ = -1 !== (c = navigator.userAgent).indexOf("Win") ? "Windows" : -1 !== c.indexOf("Mac") ? "Mac" : -1 !== c.indexOf("Linux") ? "Linux" : -1 !== c.indexOf("Android") ? "Android" : -1 !== c.indexOf("like Mac") || -1 !== c.indexOf("iPhone") || -1 !== c.indexOf("iPad") ? "iOS" : "Unknown",
                                        family: _,
                                        device: /Mobile|iPhone|iPod|Android/i.test(c) ? "Mobile" : /Tablet|iPad/i.test(c) ? "Tablet" : "Desktop"
                                    }), {
                                        screen_width_pixels: screen.width,
                                        screen_height_pixels: screen.height,
                                        language: navigator.language,
                                        orientation: (null == (t = screen.orientation) ? void 0 : t.type) || "Unknown",
                                        processor_count: navigator.hardwareConcurrency,
                                        platform: navigator.platform
                                    })), H(g)
                                }(e.sentry);
                                return yield function e(t, a, n = 0) {
                                    return p(this, null, function*() {
                                        var r, i;
                                        let o = null != (r = t.maxRetries) ? r : 2,
                                            l = null != (i = t.retryDelay) ? i : 1e3,
                                            s = n < o ? "Retry loading hCaptcha Api" : "Exceeded maximum retries";
                                        try {
                                            return yield function(e = {
                                                cleanup: !1
                                            }, t) {
                                                try {
                                                    t.addBreadcrumb({
                                                        category: w,
                                                        message: "hCaptcha loader params",
                                                        data: e
                                                    });
                                                    let a = v(e.scriptLocation),
                                                        n = b(a),
                                                        r = N.find(({
                                                            scope: e
                                                        }) => e === n.window);
                                                    if (r) return t.addBreadcrumb({
                                                        category: w,
                                                        message: "hCaptcha already loaded"
                                                    }), r.promise;
                                                    let i = new Promise((a, i) => p(this, null, function*() {
                                                        try {
                                                            var o;
                                                            n.window[h] = () => {
                                                                t.addBreadcrumb({
                                                                    category: w,
                                                                    message: "hCaptcha script called onload function"
                                                                }), a(n.window.hcaptcha)
                                                            };
                                                            let i = (o = {
                                                                custom: e.custom,
                                                                render: e.render,
                                                                sentry: e.sentry,
                                                                assethost: e.assethost,
                                                                imghost: e.imghost,
                                                                reportapi: e.reportapi,
                                                                endpoint: e.endpoint,
                                                                host: e.host,
                                                                recaptchacompat: e.recaptchacompat,
                                                                hl: e.hl,
                                                                uj: e.uj
                                                            }, Object.entries(o).filter(([, e]) => e || !1 === e).map(([e, t]) => `${encodeURIComponent(e)}=${encodeURIComponent(String(t))}`).join("&"));
                                                            yield function({
                                                                scriptLocation: e,
                                                                query: t,
                                                                loadAsync: a = !0,
                                                                crossOrigin: n = "anonymous",
                                                                apihost: r = "https://js.hcaptcha.com",
                                                                cleanup: i = !1,
                                                                secureApi: o = !1,
                                                                scriptSource: l = ""
                                                            } = {}, s) {
                                                                let d = v(e),
                                                                    u = b(d);
                                                                return new Promise((e, c) => {
                                                                    let _ = u.document.createElement("script");
                                                                    _.id = "hCaptcha-script", l ? _.src = `${l}?onload=${h}` : o ? _.src = `${r}/1/secure-api.js?onload=${h}` : _.src = `${r}/1/api.js?onload=${h}`, _.crossOrigin = n, _.async = a;
                                                                    let f = (e, t) => {
                                                                        try {
                                                                            !o && i && d.removeChild(_), t(e)
                                                                        } catch (e) {
                                                                            c(e)
                                                                        }
                                                                    };
                                                                    _.onload = t => f(t, e), _.onerror = e => {
                                                                        s && s(_.src), f(e, c)
                                                                    }, _.src += "" !== t ? `&${t}` : "", d.appendChild(_)
                                                                })
                                                            }(f({
                                                                query: i
                                                            }, e), e => {
                                                                t.captureRequest({
                                                                    url: e,
                                                                    method: "GET"
                                                                })
                                                            }), t.addBreadcrumb({
                                                                category: w,
                                                                message: "hCaptcha loaded",
                                                                data: r
                                                            })
                                                        } catch (a) {
                                                            t.addBreadcrumb({
                                                                category: w,
                                                                message: "hCaptcha failed to load"
                                                            });
                                                            let e = N.findIndex(e => e.scope === n.window); - 1 !== e && N.splice(e, 1), i(Error(y))
                                                        }
                                                    }));
                                                    return N.push({
                                                        promise: i,
                                                        scope: n.window
                                                    }), i
                                                } catch (e) {
                                                    return t.captureException(e), Promise.reject(Error(y))
                                                }
                                            }(t, a)
                                        } catch (r) {
                                            return a.addBreadcrumb({
                                                category: w,
                                                message: s
                                            }), n >= o ? (a.captureException(r), Promise.reject(r)) : (a.addBreadcrumb({
                                                category: w,
                                                message: `Waiting ${l}ms before retry attempt ${n+1}`
                                            }), yield new Promise(e => setTimeout(e, l)), e(t, a, n += 1))
                                        }
                                    })
                                }(e, t)
                            })
                        })({
                            render: "explicit",
                            apihost: t,
                            assethost: a,
                            endpoint: n,
                            hl: o,
                            host: r,
                            imghost: i,
                            recaptchacompat: !1 === l ? "off" : null,
                            reportapi: s,
                            sentry: d,
                            custom: u,
                            loadAsync: c,
                            scriptLocation: _,
                            scriptSource: g,
                            secureApi: x,
                            cleanup: void 0 === S || S,
                            uj: void 0 !== L && L
                        }).then(this.handleOnLoad, this.handleError).catch(this.handleError), this.apiScriptRequested = !0
                    }
                }, a.renderCaptcha = function(e) {
                    var t = this,
                        a = this.props.onReady,
                        n = this.state.isApiReady,
                        r = this.captchaId;
                    if (n && !r) {
                        var i = Object.assign({
                                "open-callback": this.handleOpen,
                                "close-callback": this.handleClose,
                                "error-callback": this.handleError,
                                "chalexpired-callback": this.handleChallengeExpired,
                                "expired-callback": this.handleExpire,
                                callback: this.handleSubmit
                            }, this.props, {
                                hl: this.props.hl || this.props.languageOverride,
                                languageOverride: void 0
                            }),
                            o = this._hcaptcha.render(this.ref.current, i);
                        this.captchaId = o, this.setState({
                            isRemoved: !1
                        }, function() {
                            e && e(), a && a(), t._onReady && t._onReady(o)
                        })
                    }
                }, a.resetCaptcha = function() {
                    var e = this._hcaptcha,
                        t = this.captchaId;
                    this.isReady() && (e.reset(t), this._cancelPendingExecute("hcaptcha-reset"))
                }, a.removeCaptcha = function(e) {
                    var t = this,
                        a = this._hcaptcha,
                        n = this.captchaId;
                    this._cancelPendingExecute("hcaptcha-removed"), this.isReady() && this.setState({
                        isRemoved: !0
                    }, function() {
                        t.captchaId = "", a.remove(n), e && e()
                    })
                }, a.handleOnLoad = function() {
                    var e = this;
                    this.setState({
                        isApiReady: !0
                    }, function() {
                        var t = P(C(e.props.scriptLocation));
                        e._hcaptcha = t.window.hcaptcha, e.renderCaptcha(function() {
                            var t = e.props.onLoad;
                            t && t()
                        })
                    })
                }, a.handleSubmit = function(e) {
                    var t = this.props.onVerify,
                        a = this.state.isRemoved,
                        n = this._hcaptcha,
                        r = this.captchaId;
                    if (void 0 !== n && !a) {
                        var i = n.getResponse(r),
                            o = n.getRespKey(r);
                        t && t(i, o)
                    }
                }, a.handleExpire = function() {
                    var e = this.props.onExpire,
                        t = this._hcaptcha,
                        a = this.captchaId;
                    this.isReady() && (t.reset(a), e && e())
                }, a.handleError = function(e) {
                    var t = this.props.onError,
                        a = this._hcaptcha,
                        n = this.captchaId;
                    this.isReady() && a.reset(n), t && t(e)
                }, a.isReady = function() {
                    var e = this.state,
                        t = e.isApiReady,
                        a = e.isRemoved;
                    return t && !a
                }, a._cancelPendingExecute = function(e) {
                    if (this._pendingExecute) {
                        var t = this._pendingExecute;
                        this._pendingExecute = null;
                        var a = Error(e);
                        t.reject(a)
                    }
                }, a.handleOpen = function() {
                    this.isReady() && this.props.onOpen && this.props.onOpen()
                }, a.handleClose = function() {
                    this.isReady() && this.props.onClose && this.props.onClose()
                }, a.handleChallengeExpired = function() {
                    this.isReady() && this.props.onChalExpired && this.props.onChalExpired()
                }, a.execute = function(e) {
                    var t = this;
                    void 0 === e && (e = null), e = "object" == typeof e ? e : null;
                    try {
                        var a = this._hcaptcha,
                            n = this.captchaId;
                        if (e && e.async && this._pendingExecute && this._cancelPendingExecute("hcaptcha-execute-replaced"), !this.isReady())
                            if (e && e.async) return new Promise(function(n, r) {
                                t._pendingExecute = {
                                    resolve: n,
                                    reject: r
                                }, t._onReady = function(i) {
                                    if (t._pendingExecute) try {
                                        var o = a.execute(i, e);
                                        o && "function" == typeof o.then ? o.then(function(e) {
                                            t._pendingExecute = null, n(e)
                                        }).catch(function(e) {
                                            t._pendingExecute = null, r(e)
                                        }) : (t._pendingExecute = null, r(Error("hcaptcha-execute-no-promise")))
                                    } catch (e) {
                                        t._pendingExecute = null, r(e)
                                    }
                                }
                            });
                            else return this._onReady = function(t) {
                                a.execute(t, e)
                            }, null;
                        var r = a.execute(n, e);
                        if (e && e.async && r && "function" == typeof r.then) return new Promise(function(e, a) {
                            t._pendingExecute = {
                                resolve: e,
                                reject: a
                            }, r.then(function(a) {
                                t._pendingExecute = null, e(a)
                            }).catch(function(e) {
                                t._pendingExecute = null, a(e)
                            })
                        });
                        return r
                    } catch (t) {
                        if (e && e.async) return Promise.reject(t);
                        return null
                    }
                }, a.close = function() {
                    var e = this._hcaptcha,
                        t = this.captchaId;
                    if (this._cancelPendingExecute("hcaptcha-closed"), this.isReady()) return e.close(t)
                }, a.setData = function(e) {
                    var t = this._hcaptcha,
                        a = this.captchaId;
                    this.isReady() && (e && "object" != typeof e && (e = null), t.setData(a, e))
                }, a.getResponse = function() {
                    return this._hcaptcha.getResponse(this.captchaId)
                }, a.getRespKey = function() {
                    return this._hcaptcha.getRespKey(this.captchaId)
                }, a.render = function() {
                    var e = this.state.elementId;
                    return i.createElement("div", {
                        ref: this.ref,
                        id: e
                    })
                }, t
            }(i.Component)
        },
        47225: (e, t, a) => {
            var n = a(29643),
                r = a(69804);
            e.exports = function(e, t, a, i) {
                var o = !a;
                a || (a = {});
                for (var l = -1, s = t.length; ++l < s;) {
                    var d = t[l],
                        u = i ? i(a[d], e[d], d, a, e) : void 0;
                    void 0 === u && (u = e[d]), o ? r(a, d, u) : n(a, d, u)
                }
                return a
            }
        },
        48902: (e, t, a) => {
            "use strict";
            a.d(t, {
                S: () => s
            });
            var n = a(13897),
                r = a(23798),
                i = a(71623),
                o = a(21462);
            (0, a(85752).$)(".styles_module_wtCheckbox__07151ddc{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-clip:padding-box;background-color:hsla(0,0%,100%,.8);border:1px solid rgba(0,0,0,.2);border-radius:8px;cursor:pointer;height:1.5rem;width:1.5rem}.styles_module_wtCheckbox__07151ddc:hover{background-color:#fff}.styles_module_wtCheckbox__07151ddc:active{background-color:#fff;border:1px solid rgba(0,0,0,.5)}.styles_module_wtCheckbox__07151ddc:focus-visible{border:1px solid rgba(0,0,0,.8);box-shadow:0 0 0 1px rgba(0,0,0,.8);outline:none}.styles_module_wtCheckbox__07151ddc:disabled{opacity:50%;pointer-events:none}.styles_module_wtCheckbox__07151ddc:checked{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI5IiBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMy40NDggOC43MDZhMS4wMjMgMS4wMjMgMCAwIDAgMS41NTgtLjE0N2w0LjgxMi02Ljk1NkExLjAyMiAxLjAyMiAwIDEgMCA4LjEzNi40NDFsLTQuMTIgNS45NTVMMS43NCA0LjE1N0ExLjAyMyAxLjAyMyAwIDAgMCAuMzA1IDUuNjE0bDMuMTQzIDMuMDkyWiIvPjwvc3ZnPg==)}.styles_module_wtCheckbox__07151ddc:indeterminate{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIyIiBmaWxsPSJub25lIj48cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMSAxaDEwIi8+PC9zdmc+)}.styles_module_wtCheckbox__07151ddc:checked,.styles_module_wtCheckbox__07151ddc:indeterminate{background-color:#3767ea;background-position:50%;background-repeat:no-repeat;color:#fff}.styles_module_wtCheckbox__07151ddc:checked:hover,.styles_module_wtCheckbox__07151ddc:indeterminate:hover{background-color:#4e7df7}.styles_module_wtCheckbox__07151ddc:checked:active,.styles_module_wtCheckbox__07151ddc:indeterminate:active{background-color:#1842ce}");
            var l = {
                "wt-checkbox": "styles_module_wtCheckbox__07151ddc"
            };
            let s = (0, o.forwardRef)((e, t) => {
                var {
                    className: a
                } = e, o = (0, n.Tt)(e, ["className"]);
                return (0, r.jsx)("input", Object.assign({}, o, {
                    type: "checkbox",
                    className: (0, i.A)(l["wt-checkbox"], a),
                    ref: t
                }))
            });
            s.displayName = "Checkbox"
        },
        52922: (e, t, a) => {
            e = a.nmd(e);
            var n = a(28811),
                r = t && !t.nodeType && t,
                i = r && e && !e.nodeType && e,
                o = i && i.exports === r ? n.Buffer : void 0,
                l = o ? o.allocUnsafe : void 0;
            e.exports = function(e, t) {
                if (t) return e.slice();
                var a = e.length,
                    n = l ? l(a) : new e.constructor(a);
                return e.copy(n), n
            }
        },
        52966: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => i
            });
            var n = a(61935),
                r = a(56993);

            function i(e, t) {
                (0, r.A)(2, arguments);
                var a = (0, n.A)(e),
                    i = (0, n.A)(t);
                return a.getTime() > i.getTime()
            }
        },
        53012: (e, t, a) => {
            "use strict";
            a.d(t, {
                u: () => r
            });
            var n = {
                ceil: Math.ceil,
                round: Math.round,
                floor: Math.floor,
                trunc: function(e) {
                    return e < 0 ? Math.ceil(e) : Math.floor(e)
                }
            };

            function r(e) {
                return e ? n[e] : n.trunc
            }
        },
        54236: (e, t, a) => {
            var n = a(30908),
                r = a(63213),
                i = a(519),
                o = i && i.isMap;
            e.exports = o ? r(o) : n
        },
        55189: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => o
            });
            var n = a(70028),
                r = a(61935),
                i = a(56993);

            function o(e, t) {
                return (0, i.A)(2, arguments), new Date((0, r.A)(e).getTime() + (0, n.A)(t))
            }
        },
        59099: (e, t, a) => {
            var n = a(41381),
                r = a(64401),
                i = a(29643),
                o = a(68111),
                l = a(12096),
                s = a(52922),
                d = a(29631),
                u = a(97295),
                c = a(23104),
                _ = a(54596),
                f = a(69047),
                m = a(94995),
                g = a(23307),
                p = a(31929),
                h = a(87890),
                y = a(867),
                w = a(38688),
                b = a(54236),
                v = a(54557),
                x = a(19806),
                S = a(89674),
                L = a(68185),
                k = "[object Arguments]",
                T = "[object Function]",
                B = "[object Object]",
                D = {};
            D[k] = D["[object Array]"] = D["[object ArrayBuffer]"] = D["[object DataView]"] = D["[object Boolean]"] = D["[object Date]"] = D["[object Float32Array]"] = D["[object Float64Array]"] = D["[object Int8Array]"] = D["[object Int16Array]"] = D["[object Int32Array]"] = D["[object Map]"] = D["[object Number]"] = D[B] = D["[object RegExp]"] = D["[object Set]"] = D["[object String]"] = D["[object Symbol]"] = D["[object Uint8Array]"] = D["[object Uint8ClampedArray]"] = D["[object Uint16Array]"] = D["[object Uint32Array]"] = !0, D["[object Error]"] = D[T] = D["[object WeakMap]"] = !1, e.exports = function e(t, a, H, N, P, C) {
                var A, E = 1 & a,
                    M = 2 & a,
                    j = 4 & a;
                if (H && (A = P ? H(t, N, P, C) : H(t)), void 0 !== A) return A;
                if (!v(t)) return t;
                var O = y(t);
                if (O) {
                    if (A = g(t), !E) return d(t, A)
                } else {
                    var z = m(t),
                        R = z == T || "[object GeneratorFunction]" == z;
                    if (w(t)) return s(t, E);
                    if (z == B || z == k || R && !P) {
                        if (A = M || R ? {} : h(t), !E) return M ? c(t, l(A, t)) : u(t, o(A, t))
                    } else {
                        if (!D[z]) return P ? t : {};
                        A = p(t, z, E)
                    }
                }
                C || (C = new n);
                var W = C.get(t);
                if (W) return W;
                C.set(t, A), x(t) ? t.forEach(function(n) {
                    A.add(e(n, a, H, n, t, C))
                }) : b(t) && t.forEach(function(n, r) {
                    A.set(r, e(n, a, H, r, t, C))
                });
                var I = j ? M ? f : _ : M ? L : S,
                    F = O ? void 0 : I(t);
                return r(F || t, function(n, r) {
                    F && (n = t[r = n]), i(A, r, e(n, a, H, r, t, C))
                }), A
            }
        },
        60929: (e, t, a) => {
            var n = a(54557),
                r = a(98142),
                i = a(68906),
                o = Math.max,
                l = Math.min;
            e.exports = function(e, t, a) {
                var s, d, u, c, _, f, m = 0,
                    g = !1,
                    p = !1,
                    h = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function y(t) {
                    var a = s,
                        n = d;
                    return s = d = void 0, m = t, c = e.apply(n, a)
                }

                function w(e) {
                    var a = e - f,
                        n = e - m;
                    return void 0 === f || a >= t || a < 0 || p && n >= u
                }

                function b() {
                    var e, a, n, i = r();
                    if (w(i)) return v(i);
                    _ = setTimeout(b, (e = i - f, a = i - m, n = t - e, p ? l(n, u - a) : n))
                }

                function v(e) {
                    return (_ = void 0, h && s) ? y(e) : (s = d = void 0, c)
                }

                function x() {
                    var e, a = r(),
                        n = w(a);
                    if (s = arguments, d = this, f = a, n) {
                        if (void 0 === _) return m = e = f, _ = setTimeout(b, t), g ? y(e) : c;
                        if (p) return clearTimeout(_), _ = setTimeout(b, t), y(f)
                    }
                    return void 0 === _ && (_ = setTimeout(b, t)), c
                }
                return t = i(t) || 0, n(a) && (g = !!a.leading, u = (p = "maxWait" in a) ? o(i(a.maxWait) || 0, t) : u, h = "trailing" in a ? !!a.trailing : h), x.cancel = function() {
                    void 0 !== _ && clearTimeout(_), m = 0, s = f = d = _ = void 0
                }, x.flush = function() {
                    return void 0 === _ ? c : v(r())
                }, x
            }
        },
        61624: (e, t, a) => {
            "use strict";

            function n(e) {
                var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
                return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime()
            }
            a.d(t, {
                A: () => n
            })
        },
        65439: (e, t, a) => {
            var n = a(73582);
            e.exports = function(e) {
                var t = new e.constructor(e.byteLength);
                return new n(t).set(new n(e)), t
            }
        },
        66257: (e, t, a) => {
            "use strict";
            a.d(t, {
                Cg: () => n,
                s0: () => r
            });
            var n = 6e4,
                r = 36e5
        },
        67584: (e, t, a) => {
            "use strict";
            a.d(t, {
                l: () => aB,
                r: () => ak
            });
            var n, r, i, o, l, s = a(13897),
                d = a(23798),
                u = a(21462);
            let c = "undefined" != typeof document ? u.useLayoutEffect : () => {};

            function _(e) {
                return e.nativeEvent = e, e.isDefaultPrevented = () => e.defaultPrevented, e.isPropagationStopped = () => e.cancelBubble, e.persist = () => {}, e
            }

            function f(e) {
                let t = (0, u.useRef)({
                    isFocused: !1,
                    observer: null
                });
                return c(() => {
                    let e = t.current;
                    return () => {
                        e.observer && (e.observer.disconnect(), e.observer = null)
                    }
                }, []), (0, u.useCallback)(a => {
                    if (a.target instanceof HTMLButtonElement || a.target instanceof HTMLInputElement || a.target instanceof HTMLTextAreaElement || a.target instanceof HTMLSelectElement) {
                        t.current.isFocused = !0;
                        let n = a.target;
                        n.addEventListener("focusout", a => {
                            if (t.current.isFocused = !1, n.disabled) {
                                let t = _(a);
                                null == e || e(t)
                            }
                            t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                        }, {
                            once: !0
                        }), t.current.observer = new MutationObserver(() => {
                            if (t.current.isFocused && n.disabled) {
                                var e;
                                null == (e = t.current.observer) || e.disconnect();
                                let a = n === document.activeElement ? null : document.activeElement;
                                n.dispatchEvent(new FocusEvent("blur", {
                                    relatedTarget: a
                                })), n.dispatchEvent(new FocusEvent("focusout", {
                                    bubbles: !0,
                                    relatedTarget: a
                                }))
                            }
                        }), t.current.observer.observe(n, {
                            attributes: !0,
                            attributeFilter: ["disabled"]
                        })
                    }
                }, [e])
            }

            function m(e) {
                var t;
                if ("undefined" == typeof window || null == window.navigator) return !1;
                let a = null == (t = window.navigator.userAgentData) ? void 0 : t.brands;
                return Array.isArray(a) && a.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
            }

            function g(e) {
                var t;
                return "undefined" != typeof window && null != window.navigator && e.test((null == (t = window.navigator.userAgentData) ? void 0 : t.platform) || window.navigator.platform)
            }

            function p(e) {
                let t = null;
                return () => (null == t && (t = e()), t)
            }
            let h = p(function() {
                    return g(/^Mac/i)
                }),
                y = p(function() {
                    return g(/^iPhone/i)
                }),
                w = p(function() {
                    return g(/^iPad/i) || h() && navigator.maxTouchPoints > 1
                }),
                b = p(function() {
                    return y() || w()
                });
            p(function() {
                return h() || b()
            });
            let v = p(function() {
                    return m(/AppleWebKit/i) && !x()
                }),
                x = p(function() {
                    return m(/Chrome/i)
                }),
                S = p(function() {
                    return m(/Android/i)
                }),
                L = p(function() {
                    return m(/Firefox/i)
                }),
                k = null;

            function T(e, t, a = !0) {
                var n, r;
                let {
                    metaKey: i,
                    ctrlKey: o,
                    altKey: l,
                    shiftKey: s
                } = t;
                L() && (null == (r = window.event) || null == (n = r.type) ? void 0 : n.startsWith("key")) && "_blank" === e.target && (h() ? i = !0 : o = !0);
                let d = v() && h() && !w() && 1 ? new KeyboardEvent("keydown", {
                    keyIdentifier: "Enter",
                    metaKey: i,
                    ctrlKey: o,
                    altKey: l,
                    shiftKey: s
                }) : new MouseEvent("click", {
                    metaKey: i,
                    ctrlKey: o,
                    altKey: l,
                    shiftKey: s,
                    detail: 1,
                    bubbles: !0,
                    cancelable: !0
                });
                if (T.isOpening = a, function() {
                        if (null == k) {
                            k = !1;
                            try {
                                document.createElement("div").focus({
                                    get preventScroll() {
                                        return k = !0, !0
                                    }
                                })
                            } catch {}
                        }
                        return k
                    }()) e.focus({
                    preventScroll: !0
                });
                else {
                    let t = function(e) {
                        let t = e.parentNode,
                            a = [],
                            n = document.scrollingElement || document.documentElement;
                        for (; t instanceof HTMLElement && t !== n;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && a.push({
                            element: t,
                            scrollTop: t.scrollTop,
                            scrollLeft: t.scrollLeft
                        }), t = t.parentNode;
                        return n instanceof HTMLElement && a.push({
                            element: n,
                            scrollTop: n.scrollTop,
                            scrollLeft: n.scrollLeft
                        }), a
                    }(e);
                    e.focus(),
                        function(e) {
                            for (let {
                                    element: t,
                                    scrollTop: a,
                                    scrollLeft: n
                                }
                                of e) t.scrollTop = a, t.scrollLeft = n
                        }(t)
                }
                e.dispatchEvent(d), T.isOpening = !1
            }
            T.isOpening = !1;
            let B = e => {
                    var t;
                    return null != (t = null == e ? void 0 : e.ownerDocument) ? t : document
                },
                D = e => e && "window" in e && e.window === e ? e : B(e).defaultView || window,
                H = null,
                N = new Set,
                P = new Map,
                C = !1,
                A = !1,
                E = {
                    Tab: !0,
                    Escape: !0
                };

            function M(e, t) {
                for (let a of N) a(e, t)
            }

            function j(e) {
                C = !0, T.isOpening || e.metaKey || !h() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (H = "keyboard", M("keyboard", e))
            }

            function O(e) {
                H = "pointer", "pointerType" in e && e.pointerType, ("mousedown" === e.type || "pointerdown" === e.type) && (C = !0, M("pointer", e))
            }

            function z(e) {
                T.isOpening || ("" !== e.pointerType || !e.isTrusted) && (S() && e.pointerType ? "click" !== e.type || 1 !== e.buttons : 0 !== e.detail || e.pointerType) || (C = !0, H = "virtual")
            }

            function R(e) {
                e.target !== window && e.target !== document && e.isTrusted && (C || A || (H = "virtual", M("virtual", e)), C = !1, A = !1)
            }

            function W() {
                C = !1, A = !0
            }

            function I(e) {
                if ("undefined" == typeof window || "undefined" == typeof document || P.get(D(e))) return;
                let t = D(e),
                    a = B(e),
                    n = t.HTMLElement.prototype.focus;
                t.HTMLElement.prototype.focus = function() {
                    C = !0, n.apply(this, arguments)
                }, a.addEventListener("keydown", j, !0), a.addEventListener("keyup", j, !0), a.addEventListener("click", z, !0), t.addEventListener("focus", R, !0), t.addEventListener("blur", W, !1), "undefined" != typeof PointerEvent && (a.addEventListener("pointerdown", O, !0), a.addEventListener("pointermove", O, !0), a.addEventListener("pointerup", O, !0)), t.addEventListener("beforeunload", () => {
                    F(e)
                }, {
                    once: !0
                }), P.set(t, {
                    focus: n
                })
            }
            let F = (e, t) => {
                let a = D(e),
                    n = B(e);
                t && n.removeEventListener("DOMContentLoaded", t), P.has(a) && (a.HTMLElement.prototype.focus = P.get(a).focus, n.removeEventListener("keydown", j, !0), n.removeEventListener("keyup", j, !0), n.removeEventListener("click", z, !0), a.removeEventListener("focus", R, !0), a.removeEventListener("blur", W, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", O, !0), n.removeEventListener("pointermove", O, !0), n.removeEventListener("pointerup", O, !0)), P.delete(a))
            };

            function U() {
                return "pointer" !== H
            }
            "undefined" != typeof document && function(e) {
                let t, a = B(void 0);
                "loading" !== a.readyState ? I(void 0) : (t = () => {
                    I(e)
                }, a.addEventListener("DOMContentLoaded", t)), () => F(e, t)
            }();
            let $ = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

            function X(e, t) {
                return !!t && !!e && e.contains(t)
            }

            function q() {
                let e = (0, u.useRef)(new Map),
                    t = (0, u.useCallback)((t, a, n, r) => {
                        let i = (null == r ? void 0 : r.once) ? (...t) => {
                            e.current.delete(n), n(...t)
                        } : n;
                        e.current.set(n, {
                            type: a,
                            eventTarget: t,
                            fn: i,
                            options: r
                        }), t.addEventListener(a, i, r)
                    }, []),
                    a = (0, u.useCallback)((t, a, n, r) => {
                        var i;
                        let o = (null == (i = e.current.get(n)) ? void 0 : i.fn) || n;
                        t.removeEventListener(a, o, r), e.current.delete(n)
                    }, []),
                    n = (0, u.useCallback)(() => {
                        e.current.forEach((e, t) => {
                            a(e.eventTarget, e.type, t, e.options)
                        })
                    }, [a]);
                return (0, u.useEffect)(() => n, [n]), {
                    addGlobalListener: t,
                    removeGlobalListener: a,
                    removeAllGlobalListeners: n
                }
            }
            let V = !1,
                G = 0;

            function K(e) {
                "touch" === e.pointerType && (V = !0, setTimeout(() => {
                    V = !1
                }, 50))
            }

            function Y() {
                if ("undefined" != typeof document) return 0 === G && "undefined" != typeof PointerEvent && document.addEventListener("pointerup", K), G++, () => {
                    --G > 0 || "undefined" != typeof PointerEvent && document.removeEventListener("pointerup", K)
                }
            }
            var J = a(47993),
                Q = Object.defineProperty,
                Z = (e, t, a) => (((e, t, a) => t in e ? Q(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a)(e, "symbol" != typeof t ? t + "" : t, a), a);
            class ee {
                set(e) {
                    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
                }
                reset() {
                    this.set(this.detect())
                }
                nextId() {
                    return ++this.currentId
                }
                get isServer() {
                    return "server" === this.current
                }
                get isClient() {
                    return "client" === this.current
                }
                detect() {
                    return "undefined" == typeof document ? "server" : "client"
                }
                handoff() {
                    "pending" === this.handoffState && (this.handoffState = "complete")
                }
                get isHandoffComplete() {
                    return "complete" === this.handoffState
                }
                constructor() {
                    Z(this, "current", this.detect()), Z(this, "handoffState", "pending"), Z(this, "currentId", 0)
                }
            }
            let et = new ee;

            function ea(e) {
                var t;
                return et.isServer ? null : null == e ? document : null != (t = null == e ? void 0 : e.ownerDocument) ? t : document
            }

            function en(e) {
                var t, a;
                return et.isServer ? null : null == e ? document : null != (a = null == (t = null == e ? void 0 : e.getRootNode) ? void 0 : t.call(e)) ? a : document
            }

            function er(e) {
                var t, a;
                return null != (a = null == (t = en(e)) ? void 0 : t.activeElement) ? a : null
            }

            function ei(e) {
                "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e => setTimeout(() => {
                    throw e
                }))
            }

            function eo() {
                let e = [],
                    t = {
                        addEventListener: (e, a, n, r) => (e.addEventListener(a, n, r), t.add(() => e.removeEventListener(a, n, r))),
                        requestAnimationFrame() {
                            for (var e = arguments.length, a = Array(e), n = 0; n < e; n++) a[n] = arguments[n];
                            let r = requestAnimationFrame(...a);
                            return t.add(() => cancelAnimationFrame(r))
                        },
                        nextFrame() {
                            for (var e = arguments.length, a = Array(e), n = 0; n < e; n++) a[n] = arguments[n];
                            return t.requestAnimationFrame(() => t.requestAnimationFrame(...a))
                        },
                        setTimeout() {
                            for (var e = arguments.length, a = Array(e), n = 0; n < e; n++) a[n] = arguments[n];
                            let r = setTimeout(...a);
                            return t.add(() => clearTimeout(r))
                        },
                        microTask() {
                            for (var e = arguments.length, a = Array(e), n = 0; n < e; n++) a[n] = arguments[n];
                            let r = {
                                current: !0
                            };
                            return ei(() => {
                                r.current && a[0]()
                            }), t.add(() => {
                                r.current = !1
                            })
                        },
                        style(e, t, a) {
                            let n = e.style.getPropertyValue(t);
                            return Object.assign(e.style, {
                                [t]: a
                            }), this.add(() => {
                                Object.assign(e.style, {
                                    [t]: n
                                })
                            })
                        },
                        group(e) {
                            let t = eo();
                            return e(t), this.add(() => t.dispose())
                        },
                        add: t => (e.includes(t) || e.push(t), () => {
                            let a = e.indexOf(t);
                            if (a >= 0)
                                for (let t of e.splice(a, 1)) t()
                        }),
                        dispose() {
                            for (let t of e.splice(0)) t()
                        }
                    };
                return t
            }

            function el() {
                let [e] = (0, u.useState)(eo);
                return (0, u.useEffect)(() => () => e.dispose(), [e]), e
            }
            let es = (e, t) => {
                et.isServer ? (0, u.useEffect)(e, t) : (0, u.useLayoutEffect)(e, t)
            };

            function ed(e) {
                let t = (0, u.useRef)(e);
                return es(() => {
                    t.current = e
                }, [e]), t
            }
            let eu = function(e) {
                let t = ed(e);
                return u.useCallback(function() {
                    for (var e = arguments.length, a = Array(e), n = 0; n < e; n++) a[n] = arguments[n];
                    return t.current(...a)
                }, [t])
            };

            function ec(e, t) {
                return null !== e && null !== t && "object" == typeof e && "object" == typeof t && "id" in e && "id" in t ? e.id === t.id : e === t
            }

            function e_(e) {
                if (null === e) return {
                    width: 0,
                    height: 0
                };
                let {
                    width: t,
                    height: a
                } = e.getBoundingClientRect();
                return {
                    width: t,
                    height: a
                }
            }
            var ef = (e => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(ef || {});

            function em(e) {
                return "object" == typeof e && null !== e && "nodeType" in e
            }

            function eg(e) {
                return em(e) && "tagName" in e
            }

            function ep(e) {
                return eg(e) && "accessKey" in e
            }

            function eh(e) {
                return eg(e) && "tabIndex" in e
            }

            function ey(e) {
                return ep(e) && "INPUT" === e.nodeName
            }

            function ew(e) {
                return ep(e) && "LABEL" === e.nodeName
            }

            function eb(e) {
                return ep(e) && "LEGEND" === e.nodeName
            }

            function ev(e) {
                var t;
                let a = e.parentElement,
                    n = null;
                for (; a && !(ep(t = a) && "FIELDSET" === t.nodeName);) eb(a) && (n = a), a = a.parentElement;
                let r = (null == a ? void 0 : a.getAttribute("disabled")) === "";
                return !(r && function(e) {
                    if (!e) return !1;
                    let t = e.previousElementSibling;
                    for (; null !== t;) {
                        if (eb(t)) return !1;
                        t = t.previousElementSibling
                    }
                    return !0
                }(n)) && r
            }
            class ex extends Map {
                get(e) {
                    let t = super.get(e);
                    return void 0 === t && (t = this.factory(e), this.set(e, t)), t
                }
                constructor(e) {
                    super(), this.factory = e
                }
            }
            var eS = Object.defineProperty,
                eL = (e, t, a) => {
                    if (!t.has(e)) throw TypeError("Cannot " + a)
                },
                ek = (e, t, a) => (eL(e, t, "read from private field"), a ? a.call(e) : t.get(e)),
                eT = (e, t, a) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, a)
                },
                eB = (e, t, a, n) => (eL(e, t, "write to private field"), n ? n.call(e, a) : t.set(e, a), a);
            class eD {
                dispose() {
                    this.disposables.dispose()
                }
                get state() {
                    return ek(this, n)
                }
                subscribe(e, t) {
                    if (et.isServer) return () => {};
                    let a = {
                        selector: e,
                        callback: t,
                        current: e(ek(this, n))
                    };
                    return ek(this, i).add(a), this.disposables.add(() => {
                        ek(this, i).delete(a)
                    })
                }
                on(e, t) {
                    return et.isServer ? () => {} : (ek(this, r).get(e).add(t), this.disposables.add(() => {
                        ek(this, r).get(e).delete(t)
                    }))
                }
                send(e) {
                    let t = this.reduce(ek(this, n), e);
                    if (t !== ek(this, n)) {
                        for (let e of (eB(this, n, t), ek(this, i))) {
                            let t = e.selector(ek(this, n));
                            eH(e.current, t) || (e.current = t, e.callback(t))
                        }
                        for (let t of ek(this, r).get(e.type)) t(ek(this, n), e)
                    }
                }
                constructor(e) {
                    eT(this, n, {}), eT(this, r, new ex(() => new Set)), eT(this, i, new Set), ((e, t, a) => ((e, t, a) => t in e ? eS(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: a
                    }) : e[t] = a)(e, "symbol" != typeof t ? t + "" : t, a))(this, "disposables", eo()), eB(this, n, e), et.isServer && this.disposables.microTask(() => {
                        this.dispose()
                    })
                }
            }

            function eH(e, t) {
                return !!Object.is(e, t) || "object" == typeof e && null !== e && "object" == typeof t && null !== t && (Array.isArray(e) && Array.isArray(t) ? e.length === t.length && eN(e[Symbol.iterator](), t[Symbol.iterator]()) : e instanceof Map && t instanceof Map || e instanceof Set && t instanceof Set ? e.size === t.size && eN(e.entries(), t.entries()) : !!(eP(e) && eP(t)) && eN(Object.entries(e)[Symbol.iterator](), Object.entries(t)[Symbol.iterator]()))
            }

            function eN(e, t) {
                for (;;) {
                    let a = e.next(),
                        n = t.next();
                    if (a.done && n.done) return !0;
                    if (a.done || n.done || !Object.is(a.value, n.value)) return !1
                }
            }

            function eP(e) {
                if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
                let t = Object.getPrototypeOf(e);
                return null === t || null === Object.getPrototypeOf(t)
            }

            function eC(e) {
                let [t, a] = e(), n = eo();
                return function() {
                    for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                    t(...r), n.dispose(), n.microTask(a)
                }
            }

            function eA(e, t) {
                for (var a = arguments.length, n = Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++) n[r - 2] = arguments[r];
                if (e in t) {
                    let a = t[e];
                    return "function" == typeof a ? a(...n) : a
                }
                let i = Error('Tried to handle "'.concat(e, '" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e => '"'.concat(e, '"')).join(", "), "."));
                throw Error.captureStackTrace && Error.captureStackTrace(i, eA), i
            }
            n = new WeakMap, r = new WeakMap, i = new WeakMap;
            var eE = Object.defineProperty,
                eM = (e, t, a) => (((e, t, a) => t in e ? eE(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a)(e, "symbol" != typeof t ? t + "" : t, a), a),
                ej = (e => (e[e.Push = 0] = "Push", e[e.Pop = 1] = "Pop", e))(ej || {});
            let eO = {
                0(e, t) {
                    let a = t.id,
                        n = e.stack,
                        r = e.stack.indexOf(a);
                    if (-1 !== r) {
                        let t = e.stack.slice();
                        return t.splice(r, 1), t.push(a), n = t, {
                            ...e,
                            stack: n
                        }
                    }
                    return {
                        ...e,
                        stack: [...e.stack, a]
                    }
                },
                1(e, t) {
                    let a = t.id,
                        n = e.stack.indexOf(a);
                    if (-1 === n) return e;
                    let r = e.stack.slice();
                    return r.splice(n, 1), {
                        ...e,
                        stack: r
                    }
                }
            };
            class ez extends eD {
                static new() {
                    return new ez({
                        stack: []
                    })
                }
                reduce(e, t) {
                    return eA(t.type, eO, e, t)
                }
                constructor() {
                    super(...arguments), eM(this, "actions", {
                        push: e => this.send({
                            type: 0,
                            id: e
                        }),
                        pop: e => this.send({
                            type: 1,
                            id: e
                        })
                    }), eM(this, "selectors", {
                        isTop: (e, t) => e.stack[e.stack.length - 1] === t,
                        inStack: (e, t) => e.stack.includes(t)
                    })
                }
            }
            let eR = new ex(() => ez.new());
            var eW = a(93549);

            function eI(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eH;
                return (0, eW.useSyncExternalStoreWithSelector)(eu(t => e.subscribe(eF, t)), eu(() => e.state), eu(() => e.state), eu(t), a)
            }

            function eF(e) {
                return e
            }

            function eU(e, t) {
                let a = (0, u.useId)(),
                    n = eR.get(t),
                    [r, i] = eI(n, (0, u.useCallback)(e => [n.selectors.isTop(e, a), n.selectors.inStack(e, a)], [n, a]));
                return es(() => {
                    if (e) return n.actions.push(a), () => n.actions.pop(a)
                }, [n, e, a]), !!e && (!i || r)
            }
            let e$ = new Map,
                eX = new Map;

            function eq(e) {
                var t;
                let a = null != (t = eX.get(e)) ? t : 0;
                return eX.set(e, a + 1), 0 !== a || (e$.set(e, {
                    "aria-hidden": e.getAttribute("aria-hidden"),
                    inert: e.inert
                }), e.setAttribute("aria-hidden", "true"), e.inert = !0), () => (function(e) {
                    var t;
                    let a = null != (t = eX.get(e)) ? t : 1;
                    if (1 === a ? eX.delete(e) : eX.set(e, a - 1), 1 !== a) return;
                    let n = e$.get(e);
                    n && (null === n["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", n["aria-hidden"]), e.inert = n.inert, e$.delete(e))
                })(e)
            }
            let eV = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map(e => "".concat(e, ":not([tabindex='-1'])")).join(","),
                eG = ["[data-autofocus]"].map(e => "".concat(e, ":not([tabindex='-1'])")).join(",");
            var eK = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(eK || {}),
                eY = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(eY || {}),
                eJ = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(eJ || {});

            function eQ() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
                return null == e ? [] : Array.from(e.querySelectorAll(eV)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
            }
            var eZ = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(eZ || {});

            function e0(e) {
                var t;
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return e !== (null == (t = ea(e)) ? void 0 : t.body) && eA(a, {
                    0: () => e.matches(eV),
                    1() {
                        let t = e;
                        for (; null !== t;) {
                            if (t.matches(eV)) return !0;
                            t = t.parentElement
                        }
                        return !1
                    }
                })
            }
            var e1 = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(e1 || {});

            function e4(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => e;
                return e.slice().sort((e, a) => {
                    let n = t(e),
                        r = t(a);
                    if (null === n || null === r) return 0;
                    let i = n.compareDocumentPosition(r);
                    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                })
            }

            function e2() {
                return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
            }

            function e8() {
                return e2() || /Android/gi.test(window.navigator.userAgent)
            }

            function e5(e, t, a, n) {
                let r = ed(a);
                (0, u.useEffect)(() => {
                    if (e) return document.addEventListener(t, a, n), () => document.removeEventListener(t, a, n);

                    function a(e) {
                        r.current(e)
                    }
                }, [e, t, n])
            }

            function e3() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, u.useMemo)(() => ea(...t), [...t])
            }
            "undefined" != typeof document && (document.addEventListener("keydown", e => {
                e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0), document.addEventListener("click", e => {
                1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0));
            var e6 = (e => (e[e.Ignore = 0] = "Ignore", e[e.Select = 1] = "Select", e[e.Close = 2] = "Close", e))(e6 || {});
            let e7 = {
                Ignore: {
                    kind: 0
                },
                Select: e => ({
                    kind: 1,
                    target: e
                }),
                Close: {
                    kind: 2
                }
            };

            function e9(e) {
                let t = {};
                for (let a of e) Object.assign(t, a(t));
                return t
            }
            let te = function(e, t) {
                let a = e(),
                    n = new Set;
                return {
                    getSnapshot: () => a,
                    subscribe: e => (n.add(e), () => n.delete(e)),
                    dispatch(e) {
                        for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                        let l = t[e].call(a, ...i);
                        l && (a = l, n.forEach(e => e()))
                    }
                }
            }(() => new Map, {
                PUSH(e, t) {
                    var a;
                    let n = null != (a = this.get(e)) ? a : {
                        doc: e,
                        count: 0,
                        d: eo(),
                        meta: new Set,
                        computedMeta: {}
                    };
                    return n.count++, n.meta.add(t), n.computedMeta = e9(n.meta), this.set(e, n), this
                },
                POP(e, t) {
                    let a = this.get(e);
                    return a && (a.count--, a.meta.delete(t), a.computedMeta = e9(a.meta)), this
                },
                SCROLL_PREVENT(e) {
                    let t, a = {
                            doc: e.doc,
                            d: e.d,
                            meta: () => e.computedMeta
                        },
                        n = [e2() ? {
                            before(e) {
                                let {
                                    doc: t,
                                    d: a,
                                    meta: n
                                } = e;

                                function r(e) {
                                    for (let t of n().containers)
                                        for (let a of t())
                                            if (a.contains(e)) return !0;
                                    return !1
                                }
                                a.microTask(() => {
                                    var e;
                                    if ("auto" !== window.getComputedStyle(t.documentElement).scrollBehavior) {
                                        let e = eo();
                                        e.style(t.documentElement, "scrollBehavior", "auto"), a.add(() => a.microTask(() => e.dispose()))
                                    }
                                    let n = null != (e = window.scrollY) ? e : window.pageYOffset,
                                        i = null;
                                    a.addEventListener(t, "click", e => {
                                        if (eh(e.target)) try {
                                            let a = e.target.closest("a");
                                            if (!a) return;
                                            let {
                                                hash: n
                                            } = new URL(a.href), o = t.querySelector(n);
                                            eh(o) && !r(o) && (i = o)
                                        } catch (e) {}
                                    }, !0), a.group(e => {
                                        a.addEventListener(t, "touchstart", t => {
                                            var a;
                                            if (e.dispose(), eh(t.target) && eg(a = t.target) && "style" in a)
                                                if (r(t.target)) {
                                                    let a = t.target;
                                                    for (; a.parentElement && r(a.parentElement);) a = a.parentElement;
                                                    e.style(a, "overscrollBehavior", "contain")
                                                } else e.style(t.target, "touchAction", "none")
                                        })
                                    }), a.addEventListener(t, "touchmove", e => {
                                        if (eh(e.target) && !ey(e.target))
                                            if (r(e.target)) {
                                                let t = e.target;
                                                for (; t.parentElement && "" !== t.dataset.headlessuiPortal && !(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);) t = t.parentElement;
                                                "" === t.dataset.headlessuiPortal && e.preventDefault()
                                            } else e.preventDefault()
                                    }, {
                                        passive: !1
                                    }), a.add(() => {
                                        var e;
                                        n !== (null != (e = window.scrollY) ? e : window.pageYOffset) && window.scrollTo(0, n), i && i.isConnected && (i.scrollIntoView({
                                            block: "nearest"
                                        }), i = null)
                                    })
                                })
                            }
                        } : {}, {
                            before(e) {
                                var a;
                                let {
                                    doc: n
                                } = e, r = n.documentElement;
                                t = Math.max(0, (null != (a = n.defaultView) ? a : window).innerWidth - r.clientWidth)
                            },
                            after(e) {
                                let {
                                    doc: a,
                                    d: n
                                } = e, r = a.documentElement, i = Math.max(0, r.clientWidth - r.offsetWidth), o = Math.max(0, t - i);
                                n.style(r, "paddingRight", "".concat(o, "px"))
                            }
                        }, {
                            before(e) {
                                let {
                                    doc: t,
                                    d: a
                                } = e;
                                a.style(t.documentElement, "overflow", "hidden")
                            }
                        }];
                    n.forEach(e => {
                        let {
                            before: t
                        } = e;
                        return null == t ? void 0 : t(a)
                    }), n.forEach(e => {
                        let {
                            after: t
                        } = e;
                        return null == t ? void 0 : t(a)
                    })
                },
                SCROLL_ALLOW(e) {
                    let {
                        d: t
                    } = e;
                    t.dispose()
                },
                TEARDOWN(e) {
                    let {
                        doc: t
                    } = e;
                    this.delete(t)
                }
            });

            function tt(e) {
                return (0, u.useMemo)(() => e, Object.values(e))
            }
            te.subscribe(() => {
                let e = te.getSnapshot(),
                    t = new Map;
                for (let [a] of e) t.set(a, a.documentElement.style.overflow);
                for (let a of e.values()) {
                    let e = "hidden" === t.get(a.doc),
                        n = 0 !== a.count;
                    (n && !e || !n && e) && te.dispatch(a.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", a), 0 === a.count && te.dispatch("TEARDOWN", a)
                }
            });
            let ta = Symbol();

            function tn() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                let n = (0, u.useRef)(t);
                (0, u.useEffect)(() => {
                    n.current = t
                }, [t]);
                let r = eu(e => {
                    for (let t of n.current) null != t && ("function" == typeof t ? t(e) : t.current = e)
                });
                return t.every(e => null == e || (null == e ? void 0 : e[ta])) ? void 0 : r
            }
            let tr = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

            function ti(e) {
                var t, a;
                let n = null != (t = e.innerText) ? t : "",
                    r = e.cloneNode(!0);
                if (!ep(r)) return n;
                let i = !1;
                for (let e of r.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) e.remove(), i = !0;
                let o = i ? null != (a = r.innerText) ? a : "" : n;
                return tr.test(o) && (o = o.replace(tr, "")), o
            }

            function to(e) {
                return [e.screenX, e.screenY]
            }
            var tl = a(75075);
            void 0 !== tl && "undefined" != typeof globalThis && "undefined" != typeof Element && (null == (o = null == tl ? void 0 : tl.env) ? void 0 : o.NODE_ENV) === "test" && void 0 === (null == (l = null == Element ? void 0 : Element.prototype) ? void 0 : l.getAnimations) && (Element.prototype.getAnimations = function() {
                return console.warn("Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.\nPlease install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.\n\nExample usage:\n```js\nimport { mockAnimationsApi } from 'jsdom-testing-mocks'\nmockAnimationsApi()\n```"), []
            });
            var ts = (e => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(ts || {});
            let td = (0, u.createContext)(void 0);

            function tu() {
                return (0, u.useContext)(td)
            }
            var tc = a(74622),
                t_ = a(33575),
                tf = a(3616);
            let tm = (0, u.createContext)({
                styles: void 0,
                setReference: () => {},
                setFloating: () => {},
                getReferenceProps: () => ({}),
                getFloatingProps: () => ({}),
                slot: {}
            });
            tm.displayName = "FloatingContext";
            let tg = (0, u.createContext)(null);

            function tp(e) {
                var t, a, n, r, i, o;
                let l, s, d, {
                        children: c,
                        enabled: _ = !0
                    } = e,
                    [f, m] = (0, u.useState)(null),
                    [g, p] = (0, u.useState)(0),
                    h = (0, u.useRef)(null),
                    [y, w] = (0, u.useState)(null);
                es(() => {
                    if (!t) return;
                    let e = new MutationObserver(() => {
                        let e = window.getComputedStyle(t).maxHeight,
                            a = parseFloat(e);
                        if (isNaN(a)) return;
                        let n = parseInt(e);
                        isNaN(n) || a !== n && (t.style.maxHeight = "".concat(Math.ceil(a), "px"))
                    });
                    return e.observe(t, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    }), () => {
                        e.disconnect()
                    }
                }, [t = y]);
                let b = _ && null !== f && null !== y,
                    {
                        to: v = "bottom",
                        gap: x = 0,
                        offset: S = 0,
                        padding: L = 0,
                        inner: k
                    } = (a = f, n = y, l = th(null != (r = null == a ? void 0 : a.gap) ? r : "var(--anchor-gap, 0)", n), s = th(null != (i = null == a ? void 0 : a.offset) ? i : "var(--anchor-offset, 0)", n), d = th(null != (o = null == a ? void 0 : a.padding) ? o : "var(--anchor-padding, 0)", n), {
                        ...a,
                        gap: l,
                        offset: s,
                        padding: d
                    }),
                    [T, B = "center"] = v.split(" ");
                es(() => {
                    b && p(0)
                }, [b]);
                let {
                    refs: D,
                    floatingStyles: H,
                    context: N
                } = (0, tc.we)({
                    open: b,
                    placement: "selection" === T ? "center" === B ? "bottom" : "bottom-".concat(B) : "center" === B ? "".concat(T) : "".concat(T, "-").concat(B),
                    strategy: "absolute",
                    transform: !1,
                    middleware: [(0, t_.cY)({
                        mainAxis: "selection" === T ? 0 : x,
                        crossAxis: S
                    }), (0, t_.BN)({
                        padding: L
                    }), "selection" !== T && (0, t_.UU)({
                        padding: L
                    }), "selection" === T && k ? (0, tc.vW)({
                        ...k,
                        padding: L,
                        overflowRef: h,
                        offset: g,
                        minItemsVisible: 4,
                        referenceOverflowThreshold: L,
                        onFallbackChange(e) {
                            var t, a;
                            if (!e) return;
                            let n = N.elements.floating;
                            if (!n) return;
                            let r = parseFloat(getComputedStyle(n).scrollPaddingBottom) || 0,
                                i = Math.min(4, n.childElementCount),
                                o = 0,
                                l = 0;
                            for (let e of null != (a = null == (t = N.elements.floating) ? void 0 : t.childNodes) ? a : [])
                                if (ep(e)) {
                                    let t = e.offsetTop,
                                        a = t + e.clientHeight + r,
                                        s = n.scrollTop,
                                        d = s + n.clientHeight;
                                    if (t >= s && a <= d) i--;
                                    else {
                                        l = Math.max(0, Math.min(a, d) - Math.max(t, s)), o = e.clientHeight;
                                        break
                                    }
                                } i >= 1 && p(e => {
                                let t = o * i - l + r;
                                return e >= t ? e : t
                            })
                        }
                    }) : null, (0, t_.Ej)({
                        padding: L,
                        apply(e) {
                            let {
                                availableWidth: t,
                                availableHeight: a,
                                elements: n
                            } = e;
                            Object.assign(n.floating.style, {
                                overflow: "auto",
                                maxWidth: "".concat(t, "px"),
                                maxHeight: "min(var(--anchor-max-height, 100vh), ".concat(a, "px)")
                            })
                        }
                    })].filter(Boolean),
                    whileElementsMounted: tf.ll
                }), [P = T, C = B] = N.placement.split("-");
                "selection" === T && (P = "selection");
                let A = (0, u.useMemo)(() => ({
                        anchor: [P, C].filter(Boolean).join(" ")
                    }), [P, C]),
                    E = (0, tc.Zx)(N, {
                        overflowRef: h,
                        onChange: p
                    }),
                    {
                        getReferenceProps: M,
                        getFloatingProps: j
                    } = (0, tc.bv)([E]),
                    O = eu(e => {
                        w(e), D.setFloating(e)
                    });
                return u.createElement(tg.Provider, {
                    value: m
                }, u.createElement(tm.Provider, {
                    value: {
                        setFloating: O,
                        setReference: D.setReference,
                        styles: H,
                        getReferenceProps: M,
                        getFloatingProps: j,
                        slot: A
                    }
                }, c))
            }

            function th(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    n = el(),
                    r = eu((e, t) => {
                        if (null == e) return [a, null];
                        if ("number" == typeof e) return [e, null];
                        if ("string" == typeof e) {
                            if (!t) return [a, null];
                            let r = ty(e, t);
                            return [r, a => {
                                let i = function e(t) {
                                    let a = /var\((.*)\)/.exec(t);
                                    if (a) {
                                        let t = a[1].indexOf(",");
                                        if (-1 === t) return [a[1]];
                                        let n = a[1].slice(0, t).trim(),
                                            r = a[1].slice(t + 1).trim();
                                        return r ? [n, ...e(r)] : [n]
                                    }
                                    return []
                                }(e);
                                {
                                    let o = i.map(e => window.getComputedStyle(t).getPropertyValue(e));
                                    n.requestAnimationFrame(function l() {
                                        n.nextFrame(l);
                                        let s = !1;
                                        for (let [e, a] of i.entries()) {
                                            let n = window.getComputedStyle(t).getPropertyValue(a);
                                            if (o[e] !== n) {
                                                o[e] = n, s = !0;
                                                break
                                            }
                                        }
                                        if (!s) return;
                                        let d = ty(e, t);
                                        r !== d && (a(d), r = d)
                                    })
                                }
                                return n.dispose
                            }]
                        }
                        return [a, null]
                    }),
                    i = (0, u.useMemo)(() => r(e, t)[0], [e, t]),
                    [o = i, l] = (0, u.useState)();
                return es(() => {
                    let [a, n] = r(e, t);
                    if (l(a), n) return n(l)
                }, [e, t]), o
            }

            function ty(e, t) {
                let a = document.createElement("div");
                t.appendChild(a), a.style.setProperty("margin-top", "0px", "important"), a.style.setProperty("margin-top", e, "important");
                let n = parseFloat(window.getComputedStyle(a).marginTop) || 0;
                return t.removeChild(a), n
            }
            tg.displayName = "PlacementContext";

            function tw(e, t) {
                return e ? e + "[" + t + "]" : t
            }

            function tb() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return Array.from(new Set(t.flatMap(e => "string" == typeof e ? e.split(" ") : []))).filter(Boolean).join(" ")
            }
            var tv = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(tv || {}),
                tx = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(tx || {});

            function tS() {
                let e, t, a = (e = (0, u.useRef)([]), t = (0, u.useCallback)(t => {
                    for (let a of e.current) null != a && ("function" == typeof a ? a(t) : a.current = t)
                }, []), function() {
                    for (var a = arguments.length, n = Array(a), r = 0; r < a; r++) n[r] = arguments[r];
                    if (!n.every(e => null == e)) return e.current = n, t
                });
                return (0, u.useCallback)(e => (function(e) {
                    let {
                        ourProps: t,
                        theirProps: a,
                        slot: n,
                        defaultTag: r,
                        features: i,
                        visible: o = !0,
                        name: l,
                        mergeRefs: s
                    } = e;
                    s = null != s ? s : tk;
                    let d = tT(a, t);
                    if (o) return tL(d, n, r, l, s);
                    let u = null != i ? i : 0;
                    if (2 & u) {
                        let {
                            static: e = !1,
                            ...t
                        } = d;
                        if (e) return tL(t, n, r, l, s)
                    }
                    if (1 & u) {
                        let {
                            unmount: e = !0,
                            ...t
                        } = d;
                        return eA(+!e, {
                            0: () => null,
                            1: () => tL({
                                ...t,
                                hidden: !0,
                                style: {
                                    display: "none"
                                }
                            }, n, r, l, s)
                        })
                    }
                    return tL(d, n, r, l, s)
                })({
                    mergeRefs: a,
                    ...e
                }), [a])
            }

            function tL(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = arguments.length > 2 ? arguments[2] : void 0,
                    n = arguments.length > 3 ? arguments[3] : void 0,
                    r = arguments.length > 4 ? arguments[4] : void 0,
                    {
                        as: i = a,
                        children: o,
                        refName: l = "ref",
                        ...s
                    } = tN(e, ["unmount", "static"]),
                    d = void 0 !== e.ref ? {
                        [l]: e.ref
                    } : {},
                    c = "function" == typeof o ? o(t) : o;
                "className" in s && s.className && "function" == typeof s.className && (s.className = s.className(t)), s["aria-labelledby"] && s["aria-labelledby"] === s.id && (s["aria-labelledby"] = void 0);
                let _ = {};
                if (t) {
                    let e = !1,
                        a = [];
                    for (let [n, r] of Object.entries(t)) "boolean" == typeof r && (e = !0), !0 === r && a.push(n.replace(/([A-Z])/g, e => "-".concat(e.toLowerCase())));
                    if (e)
                        for (let e of (_["data-headlessui-state"] = a.join(" "), a)) _["data-".concat(e)] = ""
                }
                if (tP(i) && (Object.keys(tH(s)).length > 0 || Object.keys(tH(_)).length > 0))
                    if (!(0, u.isValidElement)(c) || Array.isArray(c) && c.length > 1 || tP(c.type)) {
                        if (Object.keys(tH(s)).length > 0) throw Error(['Passing props on "Fragment"!\n', "The current component <".concat(n, ' /> is rendering a "Fragment".'), "However we need to passthrough the following props:", Object.keys(tH(s)).concat(Object.keys(tH(_))).map(e => "  - ".concat(e)).join("\n"), "\nYou can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => "  - ".concat(e)).join("\n")].join("\n"))
                    } else {
                        var f;
                        let e = c.props,
                            t = null == e ? void 0 : e.className,
                            a = "function" == typeof t ? function() {
                                for (var e = arguments.length, a = Array(e), n = 0; n < e; n++) a[n] = arguments[n];
                                return tb(t(...a), s.className)
                            } : tb(t, s.className),
                            n = tT(c.props, tH(tN(s, ["ref"])));
                        for (let e in _) e in n && delete _[e];
                        return (0, u.cloneElement)(c, Object.assign({}, n, _, d, {
                            ref: r((f = c, u.version.split(".")[0] >= "19" ? f.props.ref : f.ref), d.ref)
                        }, a ? {
                            className: a
                        } : {}))
                    } return (0, u.createElement)(i, Object.assign({}, tN(s, ["ref"]), !tP(i) && d, !tP(i) && _), c)
            }

            function tk() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return t.every(e => null == e) ? void 0 : e => {
                    for (let a of t) null != a && ("function" == typeof a ? a(e) : a.current = e)
                }
            }

            function tT() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                if (0 === t.length) return {};
                if (1 === t.length) return t[0];
                let n = {},
                    r = {};
                for (let e of t)
                    for (let t in e) t.startsWith("on") && "function" == typeof e[t] ? (null != r[t] || (r[t] = []), r[t].push(e[t])) : n[t] = e[t];
                if (n.disabled || n["aria-disabled"])
                    for (let e in r) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e) && (r[e] = [e => {
                        var t;
                        return null == (t = null == e ? void 0 : e.preventDefault) ? void 0 : t.call(e)
                    }]);
                for (let e in r) Object.assign(n, {
                    [e](t) {
                        for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++) n[i - 1] = arguments[i];
                        for (let a of r[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                            a(t, ...n)
                        }
                    }
                });
                return n
            }

            function tB() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                if (0 === t.length) return {};
                if (1 === t.length) return t[0];
                let n = {},
                    r = {};
                for (let e of t)
                    for (let t in e) t.startsWith("on") && "function" == typeof e[t] ? (null != r[t] || (r[t] = []), r[t].push(e[t])) : n[t] = e[t];
                for (let e in r) Object.assign(n, {
                    [e]() {
                        for (var t = arguments.length, a = Array(t), n = 0; n < t; n++) a[n] = arguments[n];
                        for (let t of r[e]) null == t || t(...a)
                    }
                });
                return n
            }

            function tD(e) {
                var t;
                return Object.assign((0, u.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function tH(e) {
                let t = Object.assign({}, e);
                for (let e in t) void 0 === t[e] && delete t[e];
                return t
            }

            function tN(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    a = Object.assign({}, e);
                for (let e of t) e in a && delete a[e];
                return a
            }

            function tP(e) {
                return e === u.Fragment || e === Symbol.for("react.fragment")
            }
            var tC = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(tC || {});
            let tA = tD(function(e, t) {
                    var a;
                    let {
                        features: n = 1,
                        ...r
                    } = e, i = {
                        ref: t,
                        "aria-hidden": (2 & n) == 2 || (null != (a = r["aria-hidden"]) ? a : void 0),
                        hidden: (4 & n) == 4 || void 0,
                        style: {
                            position: "fixed",
                            top: 1,
                            left: 1,
                            width: 1,
                            height: 0,
                            padding: 0,
                            margin: -1,
                            overflow: "hidden",
                            clip: "rect(0, 0, 0, 0)",
                            whiteSpace: "nowrap",
                            borderWidth: "0",
                            ...(4 & n) == 4 && (2 & n) != 2 && {
                                display: "none"
                            }
                        }
                    };
                    return tS()({
                        ourProps: i,
                        theirProps: r,
                        slot: {},
                        defaultTag: "span",
                        name: "Hidden"
                    })
                }),
                tE = (0, u.createContext)(null);

            function tM(e) {
                let {
                    children: t
                } = e, a = (0, u.useContext)(tE);
                if (!a) return u.createElement(u.Fragment, null, t);
                let {
                    target: n
                } = a;
                return n ? (0, J.createPortal)(u.createElement(u.Fragment, null, t), n) : null
            }

            function tj(e) {
                let {
                    data: t,
                    form: a,
                    disabled: n,
                    onReset: r,
                    overrides: i
                } = e, [o, l] = (0, u.useState)(null), s = el();
                return (0, u.useEffect)(() => {
                    if (r && o) return s.addEventListener(o, "reset", r)
                }, [o, a, r]), u.createElement(tM, null, u.createElement(tO, {
                    setForm: l,
                    formId: a
                }), (function e() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    for (let [r, i] of Object.entries(t)) ! function t(a, n, r) {
                        if (Array.isArray(r))
                            for (let [e, i] of r.entries()) t(a, tw(n, e.toString()), i);
                        else r instanceof Date ? a.push([n, r.toISOString()]) : "boolean" == typeof r ? a.push([n, r ? "1" : "0"]) : "string" == typeof r ? a.push([n, r]) : "number" == typeof r ? a.push([n, "".concat(r)]) : null == r ? a.push([n, ""]) : function(e) {
                            if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
                            let t = Object.getPrototypeOf(e);
                            return null === t || null === Object.getPrototypeOf(t)
                        }(r) && !(0, u.isValidElement)(r) && e(r, n, a)
                    }(n, tw(a, r), i);
                    return n
                })(t).map(e => {
                    let [t, r] = e;
                    return u.createElement(tA, {
                        features: tC.Hidden,
                        ...tH({
                            key: t,
                            as: "input",
                            type: "hidden",
                            hidden: !0,
                            readOnly: !0,
                            form: a,
                            disabled: n,
                            name: t,
                            value: r,
                            ...i
                        })
                    })
                }))
            }

            function tO(e) {
                let {
                    setForm: t,
                    formId: a
                } = e;
                return (0, u.useEffect)(() => {
                    if (a) {
                        let e = document.getElementById(a);
                        e && t(e)
                    }
                }, [t, a]), a ? null : u.createElement(tA, {
                    features: tC.Hidden,
                    as: "input",
                    type: "hidden",
                    hidden: !0,
                    readOnly: !0,
                    ref: e => {
                        if (!e) return;
                        let a = e.closest("form");
                        a && t(a)
                    }
                })
            }
            let tz = (0, u.createContext)(void 0);

            function tR() {
                return (0, u.useContext)(tz)
            }
            let tW = (0, u.createContext)(null);
            tW.displayName = "OpenClosedContext";
            var tI = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(tI || {});

            function tF(e) {
                let {
                    value: t,
                    children: a
                } = e;
                return u.createElement(tW.Provider, {
                    value: t
                }, a)
            }
            var tU = (e => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(tU || {});

            function t$(e, t) {
                let a = t.resolveItems();
                if (a.length <= 0) return null;
                let n = t.resolveActiveIndex(),
                    r = null != n ? n : -1;
                switch (e.focus) {
                    case 0:
                        for (let e = 0; e < a.length; ++e)
                            if (!t.resolveDisabled(a[e], e, a)) return e;
                        return n;
                    case 1:
                        -1 === r && (r = a.length);
                        for (let e = r - 1; e >= 0; --e)
                            if (!t.resolveDisabled(a[e], e, a)) return e;
                        return n;
                    case 2:
                        for (let e = r + 1; e < a.length; ++e)
                            if (!t.resolveDisabled(a[e], e, a)) return e;
                        return n;
                    case 3:
                        for (let e = a.length - 1; e >= 0; --e)
                            if (!t.resolveDisabled(a[e], e, a)) return e;
                        return n;
                    case 4:
                        for (let n = 0; n < a.length; ++n)
                            if (t.resolveId(a[n], n, a) === e.id) return n;
                        return n;
                    case 5:
                        return null;
                    default:
                        throw Error("Unexpected object: " + e)
                }
            }
            let tX = (0, u.createContext)(null);
            tX.displayName = "DescriptionContext", Object.assign(tD(function(e, t) {
                let a = (0, u.useId)(),
                    n = tu(),
                    {
                        id: r = "headlessui-description-".concat(a),
                        ...i
                    } = e,
                    o = function e() {
                        let t = (0, u.useContext)(tX);
                        if (null === t) {
                            let t = Error("You used a <Description /> component, but it is not inside a relevant parent.");
                            throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
                        }
                        return t
                    }(),
                    l = tn(t);
                es(() => o.register(r), [r, o.register]);
                let s = tt({
                        ...o.slot,
                        disabled: n || !1
                    }),
                    d = {
                        ref: l,
                        ...o.props,
                        id: r
                    };
                return tS()({
                    ourProps: d,
                    theirProps: i,
                    slot: s,
                    defaultTag: "p",
                    name: o.name || "Description"
                })
            }), {});
            var tq = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(tq || {});
            let tV = (0, u.createContext)(null);

            function tG(e) {
                var t, a, n;
                let r = null != (a = null == (t = (0, u.useContext)(tV)) ? void 0 : t.value) ? a : void 0;
                return (null != (n = null == e ? void 0 : e.length) ? n : 0) > 0 ? [r, ...e].filter(Boolean).join(" ") : r
            }
            tV.displayName = "LabelContext";
            let tK = Object.assign(tD(function(e, t) {
                var a;
                let n = (0, u.useId)(),
                    r = function e() {
                        let t = (0, u.useContext)(tV);
                        if (null === t) {
                            let t = Error("You used a <Label /> component, but it is not inside a relevant parent.");
                            throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
                        }
                        return t
                    }(),
                    i = tR(),
                    o = tu(),
                    {
                        id: l = "headlessui-label-".concat(n),
                        htmlFor: s = null != i ? i : null == (a = r.props) ? void 0 : a.htmlFor,
                        passive: d = !1,
                        ...c
                    } = e,
                    _ = tn(t);
                es(() => r.register(l), [l, r.register]);
                let f = eu(e => {
                        var t;
                        let a = e.currentTarget;
                        if (!(e.target !== e.currentTarget && eg(t = e.target) && t.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]')) && (ew(a) && e.preventDefault(), r.props && "onClick" in r.props && "function" == typeof r.props.onClick && r.props.onClick(e), ew(a))) {
                            let e = document.getElementById(a.htmlFor);
                            if (e) {
                                let t = e.getAttribute("disabled");
                                if ("true" === t || "" === t) return;
                                let a = e.getAttribute("aria-disabled");
                                if ("true" === a || "" === a) return;
                                (ey(e) && ("file" === e.type || "radio" === e.type || "checkbox" === e.type) || "radio" === e.role || "checkbox" === e.role || "switch" === e.role) && e.click(), e.focus({
                                    preventScroll: !0
                                })
                            }
                        }
                    }),
                    m = tt({
                        ...r.slot,
                        disabled: o || !1
                    }),
                    g = {
                        ref: _,
                        ...r.props,
                        id: l,
                        htmlFor: s,
                        onClick: f
                    };
                return d && ("onClick" in g && (delete g.htmlFor, delete g.onClick), "onClick" in c && delete c.onClick), tS()({
                    ourProps: g,
                    theirProps: c,
                    slot: m,
                    defaultTag: s ? "label" : "div",
                    name: r.name || "Label"
                })
            }), {});

            function tY(e) {
                let t = eu(e),
                    a = (0, u.useRef)(!1);
                (0, u.useEffect)(() => (a.current = !1, () => {
                    a.current = !0, ei(() => {
                        a.current && t()
                    })
                }), [t])
            }
            let tJ = (0, u.createContext)(!1),
                tQ = u.Fragment,
                tZ = tD(function(e, t) {
                    let {
                        ownerDocument: a = null,
                        ...n
                    } = e, r = (0, u.useRef)(null), i = tn(function(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                        return Object.assign(e, {
                            [ta]: t
                        })
                    }(e => {
                        r.current = e
                    }), t), o = e3(r.current), l = function(e) {
                        let t = (0, u.useContext)(tJ),
                            a = (0, u.useContext)(t1),
                            [n, r] = (0, u.useState)(() => {
                                var n;
                                if (!t && null !== a) return null != (n = a.current) ? n : null;
                                if (et.isServer) return null;
                                let r = null == e ? void 0 : e.getElementById("headlessui-portal-root");
                                if (r) return r;
                                if (null === e) return null;
                                let i = e.createElement("div");
                                return i.setAttribute("id", "headlessui-portal-root"), e.body.appendChild(i)
                            });
                        return (0, u.useEffect)(() => {
                            null !== n && (null != e && e.body.contains(n) || null == e || e.body.appendChild(n))
                        }, [n, e]), (0, u.useEffect)(() => {
                            t || null !== a && r(a.current)
                        }, [a, r, t]), n
                    }(null != a ? a : o), s = (0, u.useContext)(t4), d = el(), c = tS();
                    return tY(() => {
                        var e;
                        l && l.childNodes.length <= 0 && (null == (e = l.parentElement) || e.removeChild(l))
                    }), l ? (0, J.createPortal)(u.createElement("div", {
                        "data-headlessui-portal": "",
                        ref: e => {
                            d.dispose(), s && e && d.add(s.register(e))
                        }
                    }, c({
                        ourProps: {
                            ref: i
                        },
                        theirProps: n,
                        slot: {},
                        defaultTag: tQ,
                        name: "Portal"
                    })), l) : null
                }),
                t0 = u.Fragment,
                t1 = (0, u.createContext)(null),
                t4 = (0, u.createContext)(null),
                t2 = Object.assign(tD(function(e, t) {
                    let a = tn(t),
                        {
                            enabled: n = !0,
                            ownerDocument: r,
                            ...i
                        } = e,
                        o = tS();
                    return n ? u.createElement(tZ, {
                        ...i,
                        ownerDocument: r,
                        ref: a
                    }) : o({
                        ourProps: {
                            ref: a
                        },
                        theirProps: i,
                        slot: {},
                        defaultTag: tQ,
                        name: "Portal"
                    })
                }), {
                    Group: tD(function(e, t) {
                        let {
                            target: a,
                            ...n
                        } = e, r = {
                            ref: tn(t)
                        }, i = tS();
                        return u.createElement(t1.Provider, {
                            value: a
                        }, i({
                            ourProps: r,
                            theirProps: n,
                            defaultTag: t0,
                            name: "Popover.Group"
                        }))
                    })
                }),
                t8 = {
                    Idle: {
                        kind: "Idle"
                    },
                    Tracked: e => ({
                        kind: "Tracked",
                        position: e
                    }),
                    Moved: {
                        kind: "Moved"
                    }
                };

            function t5(e) {
                let t = e.getBoundingClientRect();
                return "".concat(t.x, ",").concat(t.y)
            }
            var t3 = Object.defineProperty,
                t6 = (e, t, a) => (((e, t, a) => t in e ? t3(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a)(e, "symbol" != typeof t ? t + "" : t, a), a),
                t7 = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(t7 || {}),
                t9 = (e => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(t9 || {}),
                ae = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(ae || {}),
                at = (e => (e[e.OpenListbox = 0] = "OpenListbox", e[e.CloseListbox = 1] = "CloseListbox", e[e.GoToOption = 2] = "GoToOption", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.SelectOption = 5] = "SelectOption", e[e.RegisterOptions = 6] = "RegisterOptions", e[e.UnregisterOptions = 7] = "UnregisterOptions", e[e.SetButtonElement = 8] = "SetButtonElement", e[e.SetOptionsElement = 9] = "SetOptionsElement", e[e.SortOptions = 10] = "SortOptions", e[e.MarkButtonAsMoved = 11] = "MarkButtonAsMoved", e))(at || {});

            function aa(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => e,
                    a = null !== e.activeOptionIndex ? e.options[e.activeOptionIndex] : null,
                    n = e4(t(e.options.slice()), e => e.dataRef.current.domRef.current),
                    r = a ? n.indexOf(a) : null;
                return -1 === r && (r = null), {
                    options: n,
                    activeOptionIndex: r
                }
            }
            let an = {
                1(e) {
                    if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
                    let t = e.buttonElement ? t8.Tracked(t5(e.buttonElement)) : e.buttonPositionState;
                    return {
                        ...e,
                        activeOptionIndex: null,
                        pendingFocus: {
                            focus: tU.Nothing
                        },
                        listboxState: 1,
                        __demoMode: !1,
                        buttonPositionState: t
                    }
                },
                0(e, t) {
                    if (e.dataRef.current.disabled || 0 === e.listboxState) return e;
                    let a = e.activeOptionIndex,
                        {
                            isSelected: n
                        } = e.dataRef.current,
                        r = e.options.findIndex(e => n(e.dataRef.current.value));
                    return -1 !== r && (a = r), {
                        ...e,
                        frozenValue: !1,
                        pendingFocus: t.focus,
                        listboxState: 0,
                        activeOptionIndex: a,
                        __demoMode: !1,
                        buttonPositionState: t8.Idle
                    }
                },
                2(e, t) {
                    var a, n, r, i, o;
                    if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
                    let l = {
                        ...e,
                        searchQuery: "",
                        activationTrigger: null != (a = t.trigger) ? a : 1,
                        __demoMode: !1
                    };
                    if (t.focus === tU.Nothing) return {
                        ...l,
                        activeOptionIndex: null
                    };
                    if (t.focus === tU.Specific) return {
                        ...l,
                        activeOptionIndex: e.options.findIndex(e => e.id === t.id)
                    };
                    if (t.focus === tU.Previous) {
                        let a = e.activeOptionIndex;
                        if (null !== a) {
                            let i = e.options[a].dataRef.current.domRef,
                                o = t$(t, {
                                    resolveItems: () => e.options,
                                    resolveActiveIndex: () => e.activeOptionIndex,
                                    resolveId: e => e.id,
                                    resolveDisabled: e => e.dataRef.current.disabled
                                });
                            if (null !== o) {
                                let t = e.options[o].dataRef.current.domRef;
                                if ((null == (n = i.current) ? void 0 : n.previousElementSibling) === t.current || (null == (r = t.current) ? void 0 : r.previousElementSibling) === null) return {
                                    ...l,
                                    activeOptionIndex: o
                                }
                            }
                        }
                    } else if (t.focus === tU.Next) {
                        let a = e.activeOptionIndex;
                        if (null !== a) {
                            let n = e.options[a].dataRef.current.domRef,
                                r = t$(t, {
                                    resolveItems: () => e.options,
                                    resolveActiveIndex: () => e.activeOptionIndex,
                                    resolveId: e => e.id,
                                    resolveDisabled: e => e.dataRef.current.disabled
                                });
                            if (null !== r) {
                                let t = e.options[r].dataRef.current.domRef;
                                if ((null == (i = n.current) ? void 0 : i.nextElementSibling) === t.current || (null == (o = t.current) ? void 0 : o.nextElementSibling) === null) return {
                                    ...l,
                                    activeOptionIndex: r
                                }
                            }
                        }
                    }
                    let s = aa(e),
                        d = t$(t, {
                            resolveItems: () => s.options,
                            resolveActiveIndex: () => s.activeOptionIndex,
                            resolveId: e => e.id,
                            resolveDisabled: e => e.dataRef.current.disabled
                        });
                    return {
                        ...l,
                        ...s,
                        activeOptionIndex: d
                    }
                },
                3: (e, t) => {
                    if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
                    let a = +("" === e.searchQuery),
                        n = e.searchQuery + t.value.toLowerCase(),
                        r = (null !== e.activeOptionIndex ? e.options.slice(e.activeOptionIndex + a).concat(e.options.slice(0, e.activeOptionIndex + a)) : e.options).find(e => {
                            var t;
                            return !e.dataRef.current.disabled && (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(n))
                        }),
                        i = r ? e.options.indexOf(r) : -1;
                    return -1 === i || i === e.activeOptionIndex ? {
                        ...e,
                        searchQuery: n
                    } : {
                        ...e,
                        searchQuery: n,
                        activeOptionIndex: i,
                        activationTrigger: 1
                    }
                },
                4: e => e.dataRef.current.disabled || 1 === e.listboxState || "" === e.searchQuery ? e : {
                    ...e,
                    searchQuery: ""
                },
                5: e => 0 === e.dataRef.current.mode ? {
                    ...e,
                    frozenValue: !0
                } : {
                    ...e
                },
                6: (e, t) => {
                    let a = e.options.concat(t.options),
                        n = e.activeOptionIndex;
                    if (e.pendingFocus.focus !== tU.Nothing && (n = t$(e.pendingFocus, {
                            resolveItems: () => a,
                            resolveActiveIndex: () => e.activeOptionIndex,
                            resolveId: e => e.id,
                            resolveDisabled: e => e.dataRef.current.disabled
                        })), null === e.activeOptionIndex) {
                        let {
                            isSelected: t
                        } = e.dataRef.current;
                        if (t) {
                            let e = a.findIndex(e => null == t ? void 0 : t(e.dataRef.current.value)); - 1 !== e && (n = e)
                        }
                    }
                    return {
                        ...e,
                        options: a,
                        activeOptionIndex: n,
                        pendingFocus: {
                            focus: tU.Nothing
                        },
                        pendingShouldSort: !0
                    }
                },
                7: (e, t) => {
                    let a = e.options,
                        n = [],
                        r = new Set(t.options);
                    for (let [e, t] of a.entries())
                        if (r.has(t.id) && (n.push(e), r.delete(t.id), 0 === r.size)) break;
                    if (n.length > 0)
                        for (let e of (a = a.slice(), n.reverse())) a.splice(e, 1);
                    return {
                        ...e,
                        options: a,
                        activationTrigger: 1
                    }
                },
                8: (e, t) => e.buttonElement === t.element ? e : {
                    ...e,
                    buttonElement: t.element
                },
                9: (e, t) => e.optionsElement === t.element ? e : {
                    ...e,
                    optionsElement: t.element
                },
                10: e => e.pendingShouldSort ? {
                    ...e,
                    ...aa(e),
                    pendingShouldSort: !1
                } : e,
                11: e => "Tracked" !== e.buttonPositionState.kind ? e : {
                    ...e,
                    buttonPositionState: t8.Moved
                }
            };
            class ar extends eD {
                static new(e) {
                    let {
                        id: t,
                        __demoMode: a = !1
                    } = e;
                    return new ar({
                        id: t,
                        dataRef: {
                            current: {}
                        },
                        listboxState: +!a,
                        options: [],
                        searchQuery: "",
                        activeOptionIndex: null,
                        activationTrigger: 1,
                        buttonElement: null,
                        optionsElement: null,
                        pendingShouldSort: !1,
                        pendingFocus: {
                            focus: tU.Nothing
                        },
                        frozenValue: !1,
                        __demoMode: a,
                        buttonPositionState: t8.Idle
                    })
                }
                reduce(e, t) {
                    return eA(t.type, an, e, t)
                }
                constructor(e) {
                    super(e), t6(this, "actions", {
                        onChange: e => {
                            let {
                                onChange: t,
                                compare: a,
                                mode: n,
                                value: r
                            } = this.state.dataRef.current;
                            return eA(n, {
                                0: () => null == t ? void 0 : t(e),
                                1: () => {
                                    let n = r.slice(),
                                        i = n.findIndex(t => a(t, e));
                                    return -1 === i ? n.push(e) : n.splice(i, 1), null == t ? void 0 : t(n)
                                }
                            })
                        },
                        registerOption: eC(() => {
                            let e = [],
                                t = new Set;
                            return [(a, n) => {
                                t.has(n) || (t.add(n), e.push({
                                    id: a,
                                    dataRef: n
                                }))
                            }, () => (t.clear(), this.send({
                                type: 6,
                                options: e.splice(0)
                            }))]
                        }),
                        unregisterOption: eC(() => {
                            let e = [];
                            return [t => e.push(t), () => {
                                this.send({
                                    type: 7,
                                    options: e.splice(0)
                                })
                            }]
                        }),
                        goToOption: eC(() => {
                            let e = null;
                            return [(t, a) => {
                                e = {
                                    type: 2,
                                    ...t,
                                    trigger: a
                                }
                            }, () => e && this.send(e)]
                        }),
                        closeListbox: () => {
                            this.send({
                                type: 1
                            })
                        },
                        openListbox: e => {
                            this.send({
                                type: 0,
                                focus: e
                            })
                        },
                        selectActiveOption: () => {
                            var e;
                            if (null !== this.state.activeOptionIndex) {
                                let {
                                    dataRef: e
                                } = this.state.options[this.state.activeOptionIndex];
                                this.actions.selectOption(e.current.value)
                            } else 0 === this.state.dataRef.current.mode && (this.actions.closeListbox(), null == (e = this.state.buttonElement) || e.focus({
                                preventScroll: !0
                            }))
                        },
                        selectOption: e => {
                            this.send({
                                type: 5,
                                value: e
                            })
                        },
                        search: e => {
                            this.send({
                                type: 3,
                                value: e
                            })
                        },
                        clearSearch: () => {
                            this.send({
                                type: 4
                            })
                        },
                        setButtonElement: e => {
                            this.send({
                                type: 8,
                                element: e
                            })
                        },
                        setOptionsElement: e => {
                            this.send({
                                type: 9,
                                element: e
                            })
                        }
                    }), t6(this, "selectors", {
                        activeDescendantId(e) {
                            var t;
                            let a = e.activeOptionIndex,
                                n = e.options;
                            return null === a || null == (t = n[a]) ? void 0 : t.id
                        },
                        isActive(e, t) {
                            var a;
                            let n = e.activeOptionIndex,
                                r = e.options;
                            return null !== n && (null == (a = r[n]) ? void 0 : a.id) === t
                        },
                        hasFrozenValue: e => e.frozenValue,
                        shouldScrollIntoView(e, t) {
                            return !e.__demoMode && 0 === e.listboxState && 0 !== e.activationTrigger && this.isActive(e, t)
                        },
                        didButtonMove: e => "Moved" === e.buttonPositionState.kind
                    }), this.on(6, () => {
                        requestAnimationFrame(() => {
                            this.send({
                                type: 10
                            })
                        })
                    });
                    {
                        let e = this.state.id,
                            t = eR.get(null);
                        this.disposables.add(t.on(ej.Push, a => {
                            t.selectors.isTop(a, e) || 0 !== this.state.listboxState || this.actions.closeListbox()
                        })), this.on(0, () => t.actions.push(e)), this.on(1, () => t.actions.pop(e))
                    }
                    this.disposables.group(e => {
                        this.on(1, t => {
                            t.buttonElement && (e.dispose(), e.add(function(e, t, a) {
                                let n = eo();
                                if ("Tracked" === t.kind) {
                                    let r = function() {
                                            i !== t5(e) && (n.dispose(), a())
                                        },
                                        {
                                            position: i
                                        } = t,
                                        o = new ResizeObserver(r);
                                    o.observe(e), n.add(() => o.disconnect()), n.addEventListener(window, "scroll", r, {
                                        passive: !0
                                    }), n.addEventListener(window, "resize", r)
                                }
                                return () => n.dispose()
                            }(t.buttonElement, t.buttonPositionState, () => {
                                this.send({
                                    type: 11
                                })
                            })))
                        })
                    }), this.on(5, (e, t) => {
                        var a;
                        this.actions.onChange(t.value), 0 === this.state.dataRef.current.mode && (this.actions.closeListbox(), null == (a = this.state.buttonElement) || a.focus({
                            preventScroll: !0
                        }))
                    })
                }
            }
            let ai = (0, u.createContext)(null);

            function ao(e) {
                let t = (0, u.useContext)(ai);
                if (null === t) {
                    let t = Error("<".concat(e, " /> is missing a parent <Listbox /> component."));
                    throw Error.captureStackTrace && Error.captureStackTrace(t, al), t
                }
                return t
            }

            function al(e) {
                let {
                    id: t,
                    __demoMode: a = !1
                } = e, n = (0, u.useMemo)(() => ar.new({
                    id: t,
                    __demoMode: a
                }), []);
                return tY(() => n.dispose()), n
            }
            let as = (0, u.createContext)(null);

            function ad(e) {
                let t = (0, u.useContext)(as);
                if (null === t) {
                    let t = Error("<".concat(e, " /> is missing a parent <Listbox /> component."));
                    throw Error.captureStackTrace && Error.captureStackTrace(t, ad), t
                }
                return t
            }
            as.displayName = "ListboxDataContext";
            let au = u.Fragment,
                ac = (0, u.createContext)(!1),
                a_ = tv.RenderStrategy | tv.Static,
                af = u.Fragment,
                am = tD(function(e, t) {
                    var a, n;
                    let r, i, o, l, s, d = (0, u.useId)(),
                        c = tu(),
                        {
                            value: _,
                            defaultValue: f,
                            form: m,
                            name: g,
                            onChange: p,
                            by: h,
                            invalid: y = !1,
                            disabled: w = c || !1,
                            horizontal: b = !1,
                            multiple: v = !1,
                            __demoMode: x = !1,
                            ...S
                        } = e,
                        L = tn(t),
                        k = function(e) {
                            let [t] = (0, u.useState)(e);
                            return t
                        }(f),
                        [T = v ? [] : void 0, B] = function(e, t, a) {
                            let [n, r] = (0, u.useState)(a), i = void 0 !== e, o = (0, u.useRef)(i), l = (0, u.useRef)(!1), s = (0, u.useRef)(!1);
                            return !i || o.current || l.current ? i || !o.current || s.current || (s.current = !0, o.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (l.current = !0, o.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [i ? e : n, eu(e => (i || (0, J.flushSync)(() => r(e)), null == t ? void 0 : t(e)))]
                        }(_, p, k),
                        D = al({
                            id: d,
                            __demoMode: x
                        }),
                        H = (0, u.useRef)({
                            static: !1,
                            hold: !1
                        }),
                        N = (0, u.useRef)(new Map),
                        P = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec;
                            return (0, u.useCallback)((t, a) => "string" == typeof e ? (null == t ? void 0 : t[e]) === (null == a ? void 0 : a[e]) : e(t, a), [e])
                        }(h),
                        C = (0, u.useCallback)(e => eA(A.mode, {
                            [t9.Multi]: () => T.some(t => P(t, e)),
                            [t9.Single]: () => P(T, e)
                        }), [T]),
                        A = tt({
                            value: T,
                            disabled: w,
                            invalid: y,
                            mode: v ? t9.Multi : t9.Single,
                            orientation: b ? "horizontal" : "vertical",
                            onChange: B,
                            compare: P,
                            isSelected: C,
                            optionsPropsRef: H,
                            listRef: N
                        });
                    es(() => {
                        D.state.dataRef.current = A
                    }, [A]);
                    let E = eI(D, e => e.listboxState),
                        M = eR.get(null),
                        j = eI(M, (0, u.useCallback)(e => M.selectors.isTop(e, d), [M, d])),
                        [O, z] = eI(D, e => [e.buttonElement, e.optionsElement]);
                    a = [O, z], r = ed((e, t) => {
                        D.send({
                            type: at.CloseListbox
                        }), e0(t, eZ.Loose) || (e.preventDefault(), null == O || O.focus())
                    }), i = (0, u.useCallback)(function(e, t) {
                        if (e.defaultPrevented) return;
                        let n = t(e);
                        if (null !== n && n.getRootNode().contains(n) && n.isConnected) {
                            for (let t of function e(t) {
                                    return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                                }(a))
                                if (null !== t && (t.contains(n) || e.composed && e.composedPath().includes(t))) return;
                            return e0(n, eZ.Loose) || -1 === n.tabIndex || e.preventDefault(), r.current(e, n)
                        }
                    }, [r, a]), o = (0, u.useRef)(null), e5(j, "pointerdown", e => {
                        var t, a;
                        e8() || (o.current = (null == (a = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : a[0]) || e.target)
                    }, !0), e5(j, "pointerup", e => {
                        if (e8() || !o.current) return;
                        let t = o.current;
                        return o.current = null, i(e, () => t)
                    }, !0), l = (0, u.useRef)({
                        x: 0,
                        y: 0
                    }), e5(j, "touchstart", e => {
                        l.current.x = e.touches[0].clientX, l.current.y = e.touches[0].clientY
                    }, !0), e5(j, "touchend", e => {
                        let t = {
                            x: e.changedTouches[0].clientX,
                            y: e.changedTouches[0].clientY
                        };
                        if (!(Math.abs(t.x - l.current.x) >= 30 || Math.abs(t.y - l.current.y) >= 30)) return i(e, () => eh(e.target) ? e.target : null)
                    }, !0), n = "blur", s = ed(e => i(e, () => {
                        var e;
                        return ep(e = window.document.activeElement) && "IFRAME" === e.nodeName ? window.document.activeElement : null
                    })), (0, u.useEffect)(() => {
                        if (j) return window.addEventListener(n, e, !0), () => window.removeEventListener(n, e, !0);

                        function e(e) {
                            s.current(e)
                        }
                    }, [j, n, !0]);
                    let R = tt({
                            open: E === t7.Open,
                            disabled: w,
                            invalid: y,
                            value: T
                        }),
                        [W, I] = function() {
                            let {
                                inherit: e = !1
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = tG(), [a, n] = (0, u.useState)([]), r = e ? [t, ...a].filter(Boolean) : a;
                            return [r.length > 0 ? r.join(" ") : void 0, (0, u.useMemo)(() => function(e) {
                                let t = eu(e => (n(t => [...t, e]), () => n(t => {
                                        let a = t.slice(),
                                            n = a.indexOf(e);
                                        return -1 !== n && a.splice(n, 1), a
                                    }))),
                                    a = (0, u.useMemo)(() => ({
                                        register: t,
                                        slot: e.slot,
                                        name: e.name,
                                        props: e.props,
                                        value: e.value
                                    }), [t, e.slot, e.name, e.props, e.value]);
                                return u.createElement(tV.Provider, {
                                    value: a
                                }, e.children)
                            }, [n])]
                        }({
                            inherit: !0
                        }),
                        F = (0, u.useCallback)(() => {
                            if (void 0 !== k) return null == B ? void 0 : B(k)
                        }, [B, k]),
                        U = tS();
                    return u.createElement(I, {
                        value: W,
                        props: {
                            htmlFor: null == O ? void 0 : O.id
                        },
                        slot: {
                            open: E === t7.Open,
                            disabled: w
                        }
                    }, u.createElement(tp, null, u.createElement(ai.Provider, {
                        value: D
                    }, u.createElement(as.Provider, {
                        value: A
                    }, u.createElement(tF, {
                        value: eA(E, {
                            [t7.Open]: tI.Open,
                            [t7.Closed]: tI.Closed
                        })
                    }, null != g && null != T && u.createElement(tj, {
                        disabled: w,
                        data: {
                            [g]: T
                        },
                        form: m,
                        onReset: F
                    }), U({
                        ourProps: {
                            ref: L
                        },
                        theirProps: S,
                        slot: R,
                        defaultTag: au,
                        name: "Listbox"
                    }))))))
                }),
                ag = tD(function(e, t) {
                    var a, n, r;
                    let i, o = (0, u.useId)(),
                        l = tR(),
                        s = ad("Listbox.Button"),
                        d = ao("Listbox.Button"),
                        {
                            id: c = l || "headlessui-listbox-button-".concat(o),
                            disabled: m = s.disabled || !1,
                            autoFocus: g = !1,
                            ...p
                        } = e,
                        h = tn(t, (0, u.useContext)(tm).setReference, d.actions.setButtonElement),
                        y = (0, u.useContext)(tm).getReferenceProps,
                        [w, b, v] = eI(d, e => [e.listboxState, e.buttonElement, e.optionsElement]);
                    ! function(e, t) {
                        let {
                            trigger: a,
                            action: n,
                            close: r,
                            select: i
                        } = t, o = (0, u.useRef)(null), l = (0, u.useRef)(null), s = (0, u.useRef)(null);
                        e5(e && null !== a, "pointerdown", e => {
                            em(null == e ? void 0 : e.target) && null != a && a.contains(e.target) && (l.current = e.x, s.current = e.y, o.current = e.timeStamp)
                        }), e5(e && null !== a, "pointerup", e => {
                            var t, a;
                            let d = o.current;
                            if (null === d || (o.current = null, !eh(e.target)) || 5 > Math.abs(e.x - (null != (t = l.current) ? t : e.x)) && 5 > Math.abs(e.y - (null != (a = s.current) ? a : e.y))) return;
                            let u = n(e);
                            switch (u.kind) {
                                case 0:
                                    return;
                                case 1:
                                    e.timeStamp - d > 200 && (i(u.target), r());
                                    break;
                                case 2:
                                    r()
                            }
                        }, {
                            capture: !0
                        })
                    }(w === t7.Open, {
                        trigger: b,
                        action: (0, u.useCallback)(e => {
                            if (null != b && b.contains(e.target)) return e7.Ignore;
                            let t = e.target.closest('[role="option"]:not([data-disabled])');
                            return ep(t) ? e7.Select(t) : null != v && v.contains(e.target) ? e7.Ignore : e7.Close
                        }, [b, v]),
                        close: d.actions.closeListbox,
                        select: d.actions.selectActiveOption
                    });
                    let x = eu(e => {
                            switch (e.key) {
                                case tq.Enter:
                                    ! function(e) {
                                        var t, a;
                                        let n = null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
                                        if (n) {
                                            for (let t of n.elements)
                                                if (t !== e && ("INPUT" === t.tagName && "submit" === t.type || "BUTTON" === t.tagName && "submit" === t.type || "INPUT" === t.nodeName && "image" === t.type)) return void t.click();
                                            null == (a = n.requestSubmit) || a.call(n)
                                        }
                                    }(e.currentTarget);
                                    break;
                                case tq.Space:
                                case tq.ArrowDown:
                                    e.preventDefault(), d.actions.openListbox({
                                        focus: s.value ? tU.Nothing : tU.First
                                    });
                                    break;
                                case tq.ArrowUp:
                                    e.preventDefault(), d.actions.openListbox({
                                        focus: s.value ? tU.Nothing : tU.Last
                                    })
                            }
                        }),
                        S = eu(e => {
                            e.key === tq.Space && e.preventDefault()
                        }),
                        L = (a = e => {
                            var t;
                            d.state.listboxState === t7.Open ? ((0, J.flushSync)(() => d.actions.closeListbox()), null == (t = d.state.buttonElement) || t.focus({
                                preventScroll: !0
                            })) : (e.preventDefault(), d.actions.openListbox({
                                focus: tU.Nothing
                            }))
                        }, i = (0, u.useRef)(null), {
                            onPointerDown: eu(e => {
                                i.current = e.pointerType, ev(e.currentTarget) || "mouse" !== e.pointerType || e.button !== ef.Left || (e.preventDefault(), a(e))
                            }),
                            onClick: eu(e => {
                                "mouse" !== i.current && (ev(e.currentTarget) || a(e))
                            })
                        }),
                        k = eu(e => e.preventDefault()),
                        T = tG([c]),
                        H = null != (r = null == (n = (0, u.useContext)(tX)) ? void 0 : n.value) ? r : void 0,
                        {
                            isFocusVisible: P,
                            focusProps: C
                        } = function(e = {}) {
                            var t;
                            let {
                                autoFocus: a = !1,
                                isTextInput: n,
                                within: r
                            } = e, i = (0, u.useRef)({
                                isFocused: !1,
                                isFocusVisible: a || U()
                            }), [o, l] = (0, u.useState)(!1), [s, d] = (0, u.useState)(() => i.current.isFocused && i.current.isFocusVisible), c = (0, u.useCallback)(() => d(i.current.isFocused && i.current.isFocusVisible), []), m = (0, u.useCallback)(e => {
                                i.current.isFocused = e, i.current.isFocusVisible = U(), l(e), c()
                            }, [c]);
                            t = {
                                enabled: o,
                                isTextInput: n
                            }, I(), (0, u.useEffect)(() => {
                                if ((null == t ? void 0 : t.enabled) === !1) return;
                                let e = (e, a) => {
                                    (function(e, t, a) {
                                        let n = B(null == a ? void 0 : a.target),
                                            r = "undefined" != typeof window ? D(null == a ? void 0 : a.target).HTMLInputElement : HTMLInputElement,
                                            i = "undefined" != typeof window ? D(null == a ? void 0 : a.target).HTMLTextAreaElement : HTMLTextAreaElement,
                                            o = "undefined" != typeof window ? D(null == a ? void 0 : a.target).HTMLElement : HTMLElement,
                                            l = "undefined" != typeof window ? D(null == a ? void 0 : a.target).KeyboardEvent : KeyboardEvent;
                                        return !((e = e || n.activeElement instanceof r && !$.has(n.activeElement.type) || n.activeElement instanceof i || n.activeElement instanceof o && n.activeElement.isContentEditable) && "keyboard" === t && a instanceof l && !E[a.key])
                                    })(!!(null == t ? void 0 : t.isTextInput), e, a) && (e => {
                                        i.current.isFocusVisible = e, c()
                                    })(U())
                                };
                                return N.add(e), () => {
                                    N.delete(e)
                                }
                            }, [n, o]);
                            let {
                                focusProps: g
                            } = function(e) {
                                let {
                                    isDisabled: t,
                                    onFocus: a,
                                    onBlur: n,
                                    onFocusChange: r
                                } = e, i = (0, u.useCallback)(e => {
                                    if (e.target === e.currentTarget) return n && n(e), r && r(!1), !0
                                }, [n, r]), o = f(i), l = (0, u.useCallback)(e => {
                                    var t;
                                    let n = B(e.target),
                                        i = n ? ((e = document) => e.activeElement)(n) : ((e = document) => e.activeElement)();
                                    e.target === e.currentTarget && i === (t = e.nativeEvent, t.target) && (a && a(e), r && r(!0), o(e))
                                }, [r, a, o]);
                                return {
                                    focusProps: {
                                        onFocus: !t && (a || r || n) ? l : void 0,
                                        onBlur: !t && (n || r) ? i : void 0
                                    }
                                }
                            }({
                                isDisabled: r,
                                onFocusChange: m
                            }), {
                                focusWithinProps: p
                            } = function(e) {
                                let {
                                    isDisabled: t,
                                    onBlurWithin: a,
                                    onFocusWithin: n,
                                    onFocusWithinChange: r
                                } = e, i = (0, u.useRef)({
                                    isFocusWithin: !1
                                }), {
                                    addGlobalListener: o,
                                    removeAllGlobalListeners: l
                                } = q(), s = (0, u.useCallback)(e => {
                                    X(e.currentTarget, e.target) && i.current.isFocusWithin && !X(e.currentTarget, e.relatedTarget) && (i.current.isFocusWithin = !1, l(), a && a(e), r && r(!1))
                                }, [a, r, i, l]), d = f(s), c = (0, u.useCallback)(e => {
                                    var t;
                                    if (!X(e.currentTarget, e.target)) return;
                                    let a = B(e.target),
                                        l = ((e = document) => e.activeElement)(a);
                                    if (!i.current.isFocusWithin && l === (t = e.nativeEvent, t.target)) {
                                        n && n(e), r && r(!0), i.current.isFocusWithin = !0, d(e);
                                        let t = e.currentTarget;
                                        o(a, "focus", e => {
                                            if (i.current.isFocusWithin && !X(t, e.target)) {
                                                let n = new a.defaultView.FocusEvent("blur", {
                                                    relatedTarget: e.target
                                                });
                                                Object.defineProperty(n, "target", {
                                                    value: t
                                                }), Object.defineProperty(n, "currentTarget", {
                                                    value: t
                                                }), s(_(n))
                                            }
                                        }, {
                                            capture: !0
                                        })
                                    }
                                }, [n, r, d, o, s]);
                                return t ? {
                                    focusWithinProps: {
                                        onFocus: void 0,
                                        onBlur: void 0
                                    }
                                } : {
                                    focusWithinProps: {
                                        onFocus: c,
                                        onBlur: s
                                    }
                                }
                            }({
                                isDisabled: !r,
                                onFocusWithinChange: m
                            });
                            return {
                                isFocused: o,
                                isFocusVisible: s,
                                focusProps: r ? p : g
                            }
                        }({
                            autoFocus: g
                        }),
                        {
                            isHovered: A,
                            hoverProps: M
                        } = function(e) {
                            let {
                                onHoverStart: t,
                                onHoverChange: a,
                                onHoverEnd: n,
                                isDisabled: r
                            } = e, [i, o] = (0, u.useState)(!1), l = (0, u.useRef)({
                                isHovered: !1,
                                ignoreEmulatedMouseEvents: !1,
                                pointerType: "",
                                target: null
                            }).current;
                            (0, u.useEffect)(Y, []);
                            let {
                                addGlobalListener: s,
                                removeAllGlobalListeners: d
                            } = q(), {
                                hoverProps: c,
                                triggerHoverEnd: _
                            } = (0, u.useMemo)(() => {
                                let e = (e, t) => {
                                        let r = l.target;
                                        l.pointerType = "", l.target = null, "touch" !== t && l.isHovered && r && (l.isHovered = !1, d(), n && n({
                                            type: "hoverend",
                                            target: r,
                                            pointerType: t
                                        }), a && a(!1), o(!1))
                                    },
                                    i = {};
                                return "undefined" != typeof PointerEvent && (i.onPointerEnter = n => {
                                    V && "mouse" === n.pointerType || ((n, i) => {
                                        if (l.pointerType = i, r || "touch" === i || l.isHovered || !X(n.currentTarget, n.target)) return;
                                        l.isHovered = !0;
                                        let d = n.currentTarget;
                                        l.target = d, s(B(n.target), "pointerover", t => {
                                            l.isHovered && l.target && !X(l.target, t.target) && e(t, t.pointerType)
                                        }, {
                                            capture: !0
                                        }), t && t({
                                            type: "hoverstart",
                                            target: d,
                                            pointerType: i
                                        }), a && a(!0), o(!0)
                                    })(n, n.pointerType)
                                }, i.onPointerLeave = t => {
                                    !r && X(t.currentTarget, t.target) && e(t, t.pointerType)
                                }), {
                                    hoverProps: i,
                                    triggerHoverEnd: e
                                }
                            }, [t, a, n, r, l, s, d]);
                            return (0, u.useEffect)(() => {
                                r && _({
                                    currentTarget: l.target
                                }, l.pointerType)
                            }, [r]), {
                                hoverProps: c,
                                isHovered: i
                            }
                        }({
                            isDisabled: m
                        }),
                        {
                            pressed: j,
                            pressProps: O
                        } = function() {
                            let {
                                disabled: e = !1
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (0, u.useRef)(null), [a, n] = (0, u.useState)(!1), r = el(), i = eu(() => {
                                t.current = null, n(!1), r.dispose()
                            }), o = eu(e => {
                                if (r.dispose(), null === t.current) {
                                    t.current = e.currentTarget, n(!0);
                                    {
                                        let a = ea(e.currentTarget);
                                        r.addEventListener(a, "pointerup", i, !1), r.addEventListener(a, "pointermove", e => {
                                            if (t.current) {
                                                var a, r;
                                                let i, o;
                                                n((i = e.width / 2, o = e.height / 2, a = {
                                                    top: e.clientY - o,
                                                    right: e.clientX + i,
                                                    bottom: e.clientY + o,
                                                    left: e.clientX - i
                                                }, r = t.current.getBoundingClientRect(), !(!a || !r || a.right < r.left || a.left > r.right || a.bottom < r.top || a.top > r.bottom)))
                                            }
                                        }, !1), r.addEventListener(a, "pointercancel", i, !1)
                                    }
                                }
                            });
                            return {
                                pressed: a,
                                pressProps: e ? {} : {
                                    onPointerDown: o,
                                    onPointerUp: i,
                                    onClick: i
                                }
                            }
                        }({
                            disabled: m
                        }),
                        z = tt({
                            open: w === t7.Open,
                            active: j || w === t7.Open,
                            disabled: m,
                            invalid: s.invalid,
                            value: s.value,
                            hover: A,
                            focus: P,
                            autofocus: g
                        }),
                        R = eI(d, e => e.listboxState === t7.Open),
                        W = tB(y(), {
                            ref: h,
                            id: c,
                            type: (0, u.useMemo)(() => {
                                var t;
                                if (e.type) return e.type;
                                let a = null != (t = e.as) ? t : "button";
                                if ("string" == typeof a && "button" === a.toLowerCase() || (null == b ? void 0 : b.tagName) === "BUTTON" && !b.hasAttribute("type")) return "button"
                            }, [e.type, e.as, b]),
                            "aria-haspopup": "listbox",
                            "aria-controls": null == v ? void 0 : v.id,
                            "aria-expanded": R,
                            "aria-labelledby": T,
                            "aria-describedby": H,
                            disabled: m || void 0,
                            autoFocus: g,
                            onKeyDown: x,
                            onKeyUp: S,
                            onKeyPress: k
                        }, L, C, M, O);
                    return tS()({
                        ourProps: W,
                        theirProps: p,
                        slot: z,
                        defaultTag: "button",
                        name: "Listbox.Button"
                    })
                }),
                ap = tD(function(e, t) {
                    var a;
                    let n, r = (0, u.useId)(),
                        {
                            id: i = "headlessui-listbox-options-".concat(r),
                            anchor: o,
                            portal: l = !1,
                            modal: s = !0,
                            transition: d = !1,
                            ...c
                        } = e,
                        _ = (0, u.useMemo)(() => o ? "string" == typeof o ? {
                            to: o
                        } : o : null, [o]),
                        [f, m] = (0, u.useState)(null);
                    _ && (l = !0);
                    let g = ad("Listbox.Options"),
                        p = ao("Listbox.Options"),
                        [h, y, w, b] = eI(p, e => [e.listboxState, e.buttonElement, e.optionsElement, e.__demoMode]),
                        v = e3(y),
                        x = e3(w),
                        S = (0, u.useContext)(tW),
                        [L, k] = function(e, t, a, n) {
                            let [r, i] = (0, u.useState)(a), {
                                hasFlag: o,
                                addFlag: l,
                                removeFlag: s
                            } = function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    [t, a] = (0, u.useState)(e),
                                    n = (0, u.useCallback)(e => a(e), []),
                                    r = (0, u.useCallback)(e => a(t => t | e), []),
                                    i = (0, u.useCallback)(e => (t & e) === e, [t]);
                                return {
                                    flags: t,
                                    setFlag: n,
                                    addFlag: r,
                                    hasFlag: i,
                                    removeFlag: (0, u.useCallback)(e => a(t => t & ~e), []),
                                    toggleFlag: (0, u.useCallback)(e => a(t => t ^ e), [])
                                }
                            }(e && r ? 3 : 0), d = (0, u.useRef)(!1), c = (0, u.useRef)(!1);
                            return es(() => {
                                if (e) {
                                    if (a && i(!0), !t) {
                                        a && l(3);
                                        return
                                    }
                                    return function(e, t) {
                                        let {
                                            prepare: a,
                                            run: n,
                                            done: r,
                                            inFlight: i
                                        } = t, o = eo();
                                        return function(e, t) {
                                            let {
                                                inFlight: a,
                                                prepare: n
                                            } = t;
                                            if (null != a && a.current) return n();
                                            let r = e.style.transition;
                                            e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r
                                        }(e, {
                                            prepare: a,
                                            inFlight: i
                                        }), o.nextFrame(() => {
                                            n(), o.requestAnimationFrame(() => {
                                                o.add(function(e, t) {
                                                    var a, n;
                                                    let r = eo();
                                                    if (!e) return r.dispose;
                                                    let i = !1;
                                                    r.add(() => {
                                                        i = !0
                                                    });
                                                    let o = null != (n = null == (a = e.getAnimations) ? void 0 : a.call(e).filter(e => e instanceof CSSTransition)) ? n : [];
                                                    return 0 === o.length ? t() : Promise.allSettled(o.map(e => e.finished)).then(() => {
                                                        i || t()
                                                    }), r.dispose
                                                }(e, r))
                                            })
                                        }), o.dispose
                                    }(t, {
                                        inFlight: d,
                                        prepare() {
                                            c.current ? c.current = !1 : c.current = d.current, d.current = !0, c.current || (a ? (l(3), s(4)) : (l(4), s(2)))
                                        },
                                        run() {
                                            c.current ? a ? (s(3), l(4)) : (s(4), l(3)) : a ? s(1) : l(1)
                                        },
                                        done() {
                                            var e, r, o, l;
                                            c.current && (null != (l = null == (o = (r = t).getAnimations) ? void 0 : o.call(r)) ? l : []).some(e => e instanceof CSSTransition && "finished" !== e.playState) || (d.current = !1, s(7), a || i(!1), null == (e = null == n ? void 0 : n.end) || e.call(n, a))
                                        }
                                    })
                                }
                            }, [e, a, t, el()]), e ? [r, {
                                closed: o(1),
                                enter: o(2),
                                leave: o(4),
                                transition: o(2) || o(4)
                            }] : [a, {
                                closed: void 0,
                                enter: void 0,
                                leave: void 0,
                                transition: void 0
                            }]
                        }(d, f, null !== S ? (S & tI.Open) === tI.Open : h === t7.Open);
                    a = p.actions.closeListbox, n = ed(e => {
                            let t = e.getBoundingClientRect();
                            0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && a()
                        }), (0, u.useEffect)(() => {
                            if (!L) return;
                            let e = null === y ? null : ep(y) ? y : y.current;
                            if (!e) return;
                            let t = eo();
                            if ("undefined" != typeof ResizeObserver) {
                                let a = new ResizeObserver(() => n.current(e));
                                a.observe(e), t.add(() => a.disconnect())
                            }
                            if ("undefined" != typeof IntersectionObserver) {
                                let a = new IntersectionObserver(() => n.current(e));
                                a.observe(e), t.add(() => a.disconnect())
                            }
                            return () => t.dispose()
                        }, [y, n, L]),
                        function(e, t) {
                            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => [document.body];
                            ! function(e, t) {
                                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => ({
                                        containers: []
                                    }),
                                    n = (0, u.useSyncExternalStore)(te.subscribe, te.getSnapshot, te.getSnapshot),
                                    r = t ? n.get(t) : void 0;
                                r && r.count, es(() => {
                                    if (!(!t || !e)) return te.dispatch("PUSH", t, a), () => te.dispatch("POP", t, a)
                                }, [e, t])
                            }(eU(e, "scroll-lock"), t, e => {
                                var t;
                                return {
                                    containers: [...null != (t = e.containers) ? t : [], a]
                                }
                            })
                        }(!b && s && h === t7.Open, x),
                        function(e) {
                            let {
                                allowed: t,
                                disallowed: a
                            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = eU(e, "inert-others");
                            es(() => {
                                var e, r;
                                if (!n) return;
                                let i = eo();
                                for (let t of null != (e = null == a ? void 0 : a()) ? e : []) t && i.add(eq(t));
                                let o = null != (r = null == t ? void 0 : t()) ? r : [];
                                for (let e of o) {
                                    if (!e) continue;
                                    let t = ea(e);
                                    if (!t) continue;
                                    let a = e.parentElement;
                                    for (; a && a !== t.body;) {
                                        for (let e of a.children) o.some(t => e.contains(t)) || i.add(eq(e));
                                        a = a.parentElement
                                    }
                                }
                                return i.dispose
                            }, [n, t, a])
                        }(!b && s && h === t7.Open, {
                            allowed: (0, u.useCallback)(() => [y, w], [y, w])
                        });
                    let T = !eI(p, p.selectors.didButtonMove) && L,
                        B = function(e, t) {
                            let [a, n] = (0, u.useState)(t);
                            return e || a === t || n(t), e ? a : t
                        }(eI(p, p.selectors.hasFrozenValue) && !e.static, g.value),
                        D = (0, u.useCallback)(e => g.compare(B, e), [g.compare, B]),
                        H = eI(p, e => {
                            var t;
                            if (null == _ || !(null != (t = null == _ ? void 0 : _.to) && t.includes("selection"))) return null;
                            let a = e.options.findIndex(e => D(e.dataRef.current.value));
                            return -1 === a && (a = 0), a
                        }),
                        [N, P] = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            !1 === e && (e = null), "string" == typeof e && (e = {
                                to: e
                            });
                            let t = (0, u.useContext)(tg),
                                a = (0, u.useMemo)(() => e, [JSON.stringify(e, (e, t) => {
                                    var a;
                                    return null != (a = null == t ? void 0 : t.outerHTML) ? a : t
                                })]);
                            es(() => {
                                null == t || t(null != a ? a : null)
                            }, [t, a]);
                            let n = (0, u.useContext)(tm);
                            return (0, u.useMemo)(() => [n.setFloating, e ? n.styles : {}], [n.setFloating, e, n.styles])
                        }((() => {
                            if (null == _) return;
                            if (null === H) return {
                                ..._,
                                inner: void 0
                            };
                            let e = Array.from(g.listRef.current.values());
                            return {
                                ..._,
                                inner: {
                                    listRef: {
                                        current: e
                                    },
                                    index: H
                                }
                            }
                        })()),
                        C = function() {
                            let {
                                getFloatingProps: e,
                                slot: t
                            } = (0, u.useContext)(tm);
                            return (0, u.useCallback)(function() {
                                for (var a = arguments.length, n = Array(a), r = 0; r < a; r++) n[r] = arguments[r];
                                return Object.assign({}, e(...n), {
                                    "data-anchor": t.anchor
                                })
                            }, [e, t])
                        }(),
                        A = tn(t, _ ? N : null, p.actions.setOptionsElement, m),
                        E = el();
                    (0, u.useEffect)(() => {
                        w && h === t7.Open && (er(w) === w || null == w || w.focus({
                            preventScroll: !0
                        }))
                    }, [h, w]);
                    let M = eu(e => {
                            var t;
                            switch (E.dispose(), e.key) {
                                case tq.Space:
                                    if ("" !== p.state.searchQuery) return e.preventDefault(), e.stopPropagation(), p.actions.search(e.key);
                                case tq.Enter:
                                    e.preventDefault(), e.stopPropagation(), p.actions.selectActiveOption();
                                    break;
                                case eA(g.orientation, {
                                    vertical: tq.ArrowDown,
                                    horizontal: tq.ArrowRight
                                }):
                                    return e.preventDefault(), e.stopPropagation(), p.actions.goToOption({
                                        focus: tU.Next
                                    });
                                case eA(g.orientation, {
                                    vertical: tq.ArrowUp,
                                    horizontal: tq.ArrowLeft
                                }):
                                    return e.preventDefault(), e.stopPropagation(), p.actions.goToOption({
                                        focus: tU.Previous
                                    });
                                case tq.Home:
                                case tq.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), p.actions.goToOption({
                                        focus: tU.First
                                    });
                                case tq.End:
                                case tq.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), p.actions.goToOption({
                                        focus: tU.Last
                                    });
                                case tq.Escape:
                                    e.preventDefault(), e.stopPropagation(), (0, J.flushSync)(() => p.actions.closeListbox()), null == (t = p.state.buttonElement) || t.focus({
                                        preventScroll: !0
                                    });
                                    return;
                                case tq.Tab:
                                    e.preventDefault(), e.stopPropagation(), (0, J.flushSync)(() => p.actions.closeListbox()),
                                        function(e, t) {
                                            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === e ? document.body : en(e);
                                            ! function(e, t) {
                                                var a, n, r;
                                                let {
                                                    sorted: i = !0,
                                                    relativeTo: o = null,
                                                    skipElements: l = []
                                                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = Array.isArray(e) ? e.length > 0 ? en(e[0]) : document : en(e), d = Array.isArray(e) ? i ? e4(e) : e : 64 & t ? function() {
                                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
                                                    return null == e ? [] : Array.from(e.querySelectorAll(eG)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
                                                }(e) : eQ(e);
                                                l.length > 0 && d.length > 1 && (d = d.filter(e => !l.some(t => null != t && "current" in t ? (null == t ? void 0 : t.current) === e : t === e))), o = null != o ? o : null == s ? void 0 : s.activeElement;
                                                let u = (() => {
                                                        if (5 & t) return 1;
                                                        if (10 & t) return -1;
                                                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                                                    })(),
                                                    c = (() => {
                                                        if (1 & t) return 0;
                                                        if (2 & t) return Math.max(0, d.indexOf(o)) - 1;
                                                        if (4 & t) return Math.max(0, d.indexOf(o)) + 1;
                                                        if (8 & t) return d.length - 1;
                                                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                                                    })(),
                                                    _ = 32 & t ? {
                                                        preventScroll: !0
                                                    } : {},
                                                    f = 0,
                                                    m = d.length,
                                                    g;
                                                do {
                                                    if (f >= m || f + m <= 0) return 0;
                                                    let e = c + f;
                                                    if (16 & t) e = (e + m) % m;
                                                    else {
                                                        if (e < 0) return 3;
                                                        if (e >= m) return 1
                                                    }
                                                    null == (g = d[e]) || g.focus(_), f += u
                                                } while (g !== er(g));
                                                6 & t && null != (r = null == (n = null == (a = g) ? void 0 : a.matches) ? void 0 : n.call(a, "textarea,input")) && r && g.select()
                                            }(eQ(a), t, {
                                                relativeTo: e
                                            })
                                        }(p.state.buttonElement, e.shiftKey ? eK.Previous : eK.Next);
                                    break;
                                default:
                                    1 === e.key.length && (p.actions.search(e.key), E.setTimeout(() => p.actions.clearSearch(), 350))
                            }
                        }),
                        j = eI(p, e => {
                            var t;
                            return null == (t = e.buttonElement) ? void 0 : t.id
                        }),
                        O = tt({
                            open: h === t7.Open
                        }),
                        z = tB(_ ? C() : {}, {
                            id: i,
                            ref: A,
                            "aria-activedescendant": eI(p, p.selectors.activeDescendantId),
                            "aria-multiselectable": g.mode === t9.Multi || void 0,
                            "aria-labelledby": j,
                            "aria-orientation": g.orientation,
                            onKeyDown: M,
                            role: "listbox",
                            tabIndex: h === t7.Open ? 0 : void 0,
                            style: {
                                ...c.style,
                                ...P,
                                "--button-width": function(e, t) {
                                    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                        [n, r] = (0, u.useState)(() => e_(t));
                                    return es(() => {
                                        if (!t || !e) return;
                                        let a = eo();
                                        return a.requestAnimationFrame(function e() {
                                            a.requestAnimationFrame(e), r(e => {
                                                let a = e_(t);
                                                return a.width === e.width && a.height === e.height ? e : a
                                            })
                                        }), () => {
                                            a.dispose()
                                        }
                                    }, [t, e]), a ? {
                                        width: "".concat(n.width, "px"),
                                        height: "".concat(n.height, "px")
                                    } : n
                                }(L, y, !0).width
                            },
                            ... function(e) {
                                let t = {};
                                for (let a in e) !0 === e[a] && (t["data-".concat(a)] = "");
                                return t
                            }(k)
                        }),
                        R = tS(),
                        W = (0, u.useMemo)(() => g.mode === t9.Multi ? g : {
                            ...g,
                            isSelected: D
                        }, [g, D]);
                    return u.createElement(t2, {
                        enabled: !!l && (e.static || L),
                        ownerDocument: v
                    }, u.createElement(as.Provider, {
                        value: W
                    }, R({
                        ourProps: z,
                        theirProps: c,
                        slot: O,
                        defaultTag: "div",
                        features: a_,
                        visible: T,
                        name: "Listbox.Options"
                    })))
                }),
                ah = tD(function(e, t) {
                    let a, n, r, i = (0, u.useId)(),
                        {
                            id: o = "headlessui-listbox-option-".concat(i),
                            disabled: l = !1,
                            value: s,
                            ...d
                        } = e,
                        c = !0 === (0, u.useContext)(ac),
                        _ = ad("Listbox.Option"),
                        f = ao("Listbox.Option"),
                        m = eI(f, e => f.selectors.isActive(e, o)),
                        g = _.isSelected(s),
                        p = (0, u.useRef)(null),
                        h = (a = (0, u.useRef)(""), n = (0, u.useRef)(""), eu(() => {
                            let e = p.current;
                            if (!e) return "";
                            let t = e.innerText;
                            if (a.current === t) return n.current;
                            let r = (function(e) {
                                let t = e.getAttribute("aria-label");
                                if ("string" == typeof t) return t.trim();
                                let a = e.getAttribute("aria-labelledby");
                                if (a) {
                                    let e = a.split(" ").map(e => {
                                        let t = document.getElementById(e);
                                        if (t) {
                                            let e = t.getAttribute("aria-label");
                                            return "string" == typeof e ? e.trim() : ti(t).trim()
                                        }
                                        return null
                                    }).filter(Boolean);
                                    if (e.length > 0) return e.join(", ")
                                }
                                return ti(e).trim()
                            })(e).trim().toLowerCase();
                            return a.current = t, n.current = r, r
                        })),
                        y = ed({
                            disabled: l,
                            value: s,
                            domRef: p,
                            get textValue() {
                                return h()
                            }
                        }),
                        w = tn(t, p, e => {
                            e ? _.listRef.current.set(o, e) : _.listRef.current.delete(o)
                        }),
                        b = eI(f, e => f.selectors.shouldScrollIntoView(e, o));
                    es(() => {
                        if (b) return eo().requestAnimationFrame(() => {
                            var e, t;
                            null == (t = null == (e = p.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                block: "nearest"
                            })
                        })
                    }, [b, p]), es(() => {
                        if (!c) return f.actions.registerOption(o, y), () => f.actions.unregisterOption(o)
                    }, [y, o, c]);
                    let v = eu(e => {
                            if (l) return e.preventDefault();
                            f.actions.selectOption(s)
                        }),
                        x = eu(() => {
                            if (l) return f.actions.goToOption({
                                focus: tU.Nothing
                            });
                            f.actions.goToOption({
                                focus: tU.Specific,
                                id: o
                            })
                        }),
                        S = (r = (0, u.useRef)([-1, -1]), {
                            wasMoved(e) {
                                let t = to(e);
                                return (r.current[0] !== t[0] || r.current[1] !== t[1]) && (r.current = t, !0)
                            },
                            update(e) {
                                r.current = to(e)
                            }
                        }),
                        L = eu(e => S.update(e)),
                        k = eu(e => {
                            S.wasMoved(e) && (l || m && f.state.activationTrigger === ae.Pointer || f.actions.goToOption({
                                focus: tU.Specific,
                                id: o
                            }, ae.Pointer))
                        }),
                        T = eu(e => {
                            S.wasMoved(e) && (l || m && f.state.activationTrigger === ae.Pointer && f.actions.goToOption({
                                focus: tU.Nothing
                            }))
                        }),
                        B = tt({
                            active: m,
                            focus: m,
                            selected: g,
                            disabled: l,
                            selectedOption: g && c
                        }),
                        D = c ? {} : {
                            id: o,
                            ref: w,
                            role: "option",
                            tabIndex: !0 === l ? void 0 : -1,
                            "aria-disabled": !0 === l || void 0,
                            "aria-selected": g,
                            disabled: void 0,
                            onClick: v,
                            onFocus: x,
                            onPointerEnter: L,
                            onMouseEnter: L,
                            onPointerMove: k,
                            onMouseMove: k,
                            onPointerLeave: T,
                            onMouseLeave: T
                        },
                        H = tS();
                    return !g && c ? null : H({
                        ourProps: D,
                        theirProps: d,
                        slot: B,
                        defaultTag: "div",
                        name: "Listbox.Option"
                    })
                }),
                ay = Object.assign(am, {
                    Button: ag,
                    Label: tK,
                    Options: ap,
                    Option: ah,
                    SelectedOption: tD(function(e, t) {
                        let {
                            options: a,
                            placeholder: n,
                            ...r
                        } = e, i = {
                            ref: tn(t)
                        }, o = ad("ListboxSelectedOption"), l = tt({}), s = void 0 === o.value || null === o.value || o.mode === t9.Multi && Array.isArray(o.value) && 0 === o.value.length, d = tS();
                        return u.createElement(ac.Provider, {
                            value: !0
                        }, d({
                            ourProps: i,
                            theirProps: {
                                ...r,
                                children: u.createElement(u.Fragment, null, n && s ? n : a)
                            },
                            slot: l,
                            defaultTag: af,
                            name: "ListboxSelectedOption"
                        }))
                    })
                });
            var aw = a(71623),
                ab = a(85633),
                av = a(24939);
            (0, a(85752).$)(".styles_module_wtInputWrapper__967252d1{align-items:center;background-color:#fff;border:0;border-radius:16px;box-shadow:0 0 0 1px #d6d6d6;color:#161616;display:flex;font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-size:16px;font-weight:400;gap:.5rem;line-height:1.2;margin:2px;outline:none;padding-left:1rem;padding-right:1rem;position:relative;transition:all .15s cubic-bezier(.4,0,.2,1)}.styles_module_wtInputWrapper_Disabled__967252d1{background-color:#f1f1f1;opacity:.5;pointer-events:none}.styles_module_wtInputWrapper__967252d1:focus-within{box-shadow:0 0 0 2px #353535}.styles_module_wtInputWrapper_Large__967252d1{height:56px}.styles_module_wtInputWrapper_Medium__967252d1{height:48px}.styles_module_wtInputWrapper_Small__967252d1{border-radius:12px;height:40px;padding-left:.75rem;padding-right:.75rem}.styles_module_wtInputWrapper_Activated__967252d1{box-shadow:0 0 0 1px #bfbfbf}.styles_module_wtInputWrapper_InvalidLight__967252d1{box-shadow:0 0 0 2px #d33300}.styles_module_wtInputWrapper_InvalidDark__967252d1{box-shadow:0 0 0 2px #ff7350}.styles_module_wtInput__967252d1{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-size:16px;font-weight:400;height:100%;line-height:1.5;outline:0;width:100%}.styles_module_wtInput__967252d1::-moz-placeholder{color:#a4a4a4}.styles_module_wtInput__967252d1::placeholder{color:#a4a4a4}.styles_module_wtTextarea__967252d1{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-size:16px;font-weight:400;height:100%;line-height:1.5;margin-bottom:1rem;margin-top:1rem;min-height:1.5rem;outline:0;width:100%}.styles_module_wtTextarea__967252d1::-moz-placeholder{color:#a4a4a4}.styles_module_wtTextarea__967252d1::placeholder{color:#a4a4a4}.styles_module_wtShadowNone__967252d1{box-shadow:none}.styles_module_wtShadow2_Dark__967252d1{box-shadow:0 2px 4px 0 rgba(0,0,0,.2),inset 0 1px 0 0 hsla(0,0%,100%,.3),inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow2_Light__967252d1{box-shadow:0 2px 4px 0 rgba(0,0,0,.2),inset 0 1px 0 0 #fff,inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow4_Dark__967252d1{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),inset 0 1px 0 0 hsla(0,0%,100%,.3),inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow4_Light__967252d1{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),inset 0 1px 0 0 #fff,inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow8_Dark__967252d1{box-shadow:0 8px 16px 0 rgba(0,0,0,.2),inset 0 1px 0 0 hsla(0,0%,100%,.3),inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow8_Light__967252d1{box-shadow:0 8px 16px 0 rgba(0,0,0,.2),inset 0 1px 0 0 #fff,inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow16_Dark__967252d1{box-shadow:0 16px 32px 0 rgba(0,0,0,.2),inset 0 1px 0 0 hsla(0,0%,100%,.3),inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow16_Light__967252d1{box-shadow:0 16px 32px 0 rgba(0,0,0,.2),inset 0 1px 0 0 #fff,inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow32_Dark__967252d1{box-shadow:0 32px 64px 0 rgba(0,0,0,.2),inset 0 1px 0 0 hsla(0,0%,100%,.3),inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtShadow32_Light__967252d1{box-shadow:0 32px 64px 0 rgba(0,0,0,.2),inset 0 1px 0 0 #fff,inset 0 -1px 0 0 rgba(0,0,0,.1)}.styles_module_wtSelectInputWrapper__967252d1{position:static;width:100%}.styles_module_wtSelectInput__967252d1{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-size:16px;font-weight:400;height:100%;line-height:1.5;margin:-1rem 0;outline:0;padding:1rem 0;text-align:left;width:100%}.styles_module_wtSelectInput__967252d1::-moz-placeholder{color:#a4a4a4}.styles_module_wtSelectInput__967252d1::placeholder{color:#a4a4a4}.styles_module_wtSelectInputChevron__967252d1{display:flex;gap:.5rem;pointer-events:none;position:absolute;right:1rem;top:50%;transform:translateY(-50%)}.styles_module_wtSelectOptions__967252d1{background-color:#fff;border-radius:16px;box-shadow:0 16px 32px 0 rgba(0,0,0,.2),inset 0 1px 0 0 #fff,inset 0 -1px 0 0 rgba(0,0,0,.1);font-family:Actief Grotesque,Arial,Helvetica,sans-serif;font-size:inherit;font-size:14px;font-weight:500;line-height:1.2;list-style-type:none;margin:0;max-width:none;overflow:clip;padding:0;position:absolute;z-index:90}.styles_module_wtSelectOptions__967252d1:focus-visible{outline:none}.styles_module_wtSelectOption__967252d1{cursor:pointer;padding:.875rem 1.25rem}.styles_module_wtSelectOption__967252d1:not(:last-child){border-bottom:1px solid #f1f1f1}.styles_module_wtSelectOptionActive__967252d1,.styles_module_wtSelectOption__967252d1:active,.styles_module_wtSelectOption__967252d1:focus-visible,.styles_module_wtSelectOption__967252d1:hover{background-color:#f9f9f9}.styles_module_wtSelectOptionDisabled__967252d1{color:hsla(0,0%,9%,.4)}.styles_module_selectOptions__967252d1{left:-2px;top:calc(100% + 8px);width:calc(100% + 4px)}");
            var ax = {
                "wt-select-input-wrapper": "styles_module_wtSelectInputWrapper__967252d1",
                "wt-select-input": "styles_module_wtSelectInput__967252d1",
                "wt-select-input-chevron": "styles_module_wtSelectInputChevron__967252d1",
                "wt-select-options": "styles_module_wtSelectOptions__967252d1",
                "wt-select-option": "styles_module_wtSelectOption__967252d1",
                "wt-select-option-active": "styles_module_wtSelectOptionActive__967252d1",
                "wt-select-option-disabled": "styles_module_wtSelectOptionDisabled__967252d1",
                "select-options": "styles_module_selectOptions__967252d1"
            };
            let aS = e => Array.isArray(e) ? e : [e],
                aL = e => {
                    if (null == e) return "";
                    switch (typeof e) {
                        case "string":
                        case "number":
                            return e.toString();
                        case "boolean":
                            return "";
                        case "object":
                            if (e instanceof Array) return e.map(aL).join("");
                            if ("props" in e) return aL(e.props.children);
                        default:
                            return console.warn("Unresolved `node` of type:", typeof e, e), ""
                    }
                },
                ak = (0, u.forwardRef)(({
                    chevron: e,
                    children: t,
                    defaultValue: a,
                    disabled: n,
                    id: r,
                    inputClassName: i,
                    inputWrapperClassName: o,
                    name: l,
                    onChange: s,
                    optionsClassName: c,
                    trailingElement: _,
                    value: f
                }, m) => {
                    let g = (0, u.useMemo)(() => aS(t).reduce((e, t) => t.type === u.Fragment && void 0 !== t.props.children ? [...e, ...aS(t.props.children)] : [...e, t], []), [t]),
                        p = (0, u.useMemo)(() => g.map(e => {
                            let t = e.props;
                            return {
                                content: t.children,
                                textContent: aL(t.children),
                                value: t.value
                            }
                        }), [g]),
                        h = (0, u.useMemo)(() => {
                            var e, t, a;
                            return null != (t = null == (e = p[0]) ? void 0 : e.value) ? t : null == (a = p[0]) ? void 0 : a.textContent
                        }, [p]);
                    return (0, u.useEffect)(() => {
                        if (!g.every(e => (null == e ? void 0 : e.type) === aB.Option)) throw Error("Select only accepts <Select.Option> as children")
                    }, [g]), (0, d.jsxs)("div", {
                        className: (0, aw.A)(ax["wt-select-input-wrapper"], o),
                        role: "combobox",
                        children: [(0, d.jsxs)(ay, {
                            onChange: s,
                            disabled: n,
                            value: f,
                            defaultValue: null != a ? a : h,
                            name: l,
                            children: [(0, d.jsx)(ag, {
                                className: (0, aw.A)(ax["wt-select-input"], i),
                                id: r,
                                ref: m,
                                children: ({
                                    value: e
                                }) => {
                                    var t;
                                    let a = p.find(t => e === t.value || e === t.textContent);
                                    return null != (t = null == a ? void 0 : a.content) ? t : "object" == typeof e ? e : (0, d.jsx)(d.Fragment, {})
                                }
                            }), (0, d.jsx)(ap, {
                                className: (0, aw.A)(ax["wt-select-options"], ax["select-options"], c),
                                children: t
                            })]
                        }), (0, d.jsxs)("div", {
                            className: ax["wt-select-input-chevron"],
                            children: [e || (0, d.jsx)(ab.A0v, {}), _]
                        })]
                    })
                });
            ak.displayName = "SelectInputRoot";
            let aT = (0, u.forwardRef)((e, t) => {
                var {
                    state: a = "default",
                    size: n = "large",
                    mode: r = "light",
                    disabled: i,
                    className: o
                } = e, l = (0, s.Tt)(e, ["state", "size", "mode", "disabled", "className"]);
                return (0, d.jsx)(av.v, {
                    className: o,
                    disabled: i,
                    mode: r,
                    size: n,
                    state: a,
                    children: (0, d.jsx)(ak, Object.assign({}, l, {
                        disabled: i,
                        ref: t
                    }))
                })
            });
            aT.displayName = "Select";
            let aB = Object.assign(aT, {
                Option: e => {
                    var t, {
                            children: a,
                            className: n,
                            value: r
                        } = e,
                        i = (0, s.Tt)(e, ["children", "className", "value"]);
                    let o = (0, u.useRef)(null),
                        [l, c] = (0, u.useState)();
                    return (0, u.useEffect)(() => {
                        var e, t;
                        c(null !== (null == (e = o.current) ? void 0 : e.textContent) ? null == (t = o.current) ? void 0 : t.textContent : void 0)
                    }, []), (0, d.jsx)(ah, Object.assign({
                        as: u.Fragment,
                        value: null != (t = null != r ? r : l) ? t : "string" == typeof a ? a : void 0,
                        ref: o
                    }, i, {
                        children: ({
                            focus: e,
                            disabled: t
                        }) => (0, d.jsx)("li", {
                            className: (0, aw.A)(ax["wt-select-option"], {
                                [ax["wt-select-option-active"]]: e
                            }, {
                                [ax["wt-select-option-disabled"]]: t
                            }, n),
                            children: a
                        })
                    }))
                }
            })
        },
        68111: (e, t, a) => {
            var n = a(47225),
                r = a(89674);
            e.exports = function(e, t) {
                return e && n(t, r(t), e)
            }
        },
        68185: (e, t, a) => {
            var n = a(66363),
                r = a(6841),
                i = a(59156);
            e.exports = function(e) {
                return i(e) ? n(e, !0) : r(e)
            }
        },
        68906: (e, t, a) => {
            var n = a(91826),
                r = a(54557),
                i = a(31266),
                o = 0 / 0,
                l = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                d = /^0o[0-7]+$/i,
                u = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return o;
                if (r(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = r(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = n(e);
                var a = s.test(e);
                return a || d.test(e) ? u(e.slice(2), a ? 2 : 8) : l.test(e) ? o : +e
            }
        },
        69047: (e, t, a) => {
            var n = a(98197),
                r = a(19361),
                i = a(68185);
            e.exports = function(e) {
                return n(e, i, r)
            }
        },
        69267: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => o
            });
            var n = a(61624),
                r = a(12163),
                i = a(56993);

            function o(e, t) {
                (0, i.A)(2, arguments);
                var a = (0, r.A)(e),
                    o = (0, r.A)(t);
                return Math.round((a.getTime() - (0, n.A)(a) - (o.getTime() - (0, n.A)(o))) / 864e5)
            }
        },
        69804: (e, t, a) => {
            var n = a(36317);
            e.exports = function(e, t, a) {
                "__proto__" == t && n ? n(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: a,
                    writable: !0
                }) : e[t] = a
            }
        },
        70028: (e, t, a) => {
            "use strict";

            function n(e) {
                if (null === e || !0 === e || !1 === e) return NaN;
                var t = Number(e);
                return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
            }
            a.d(t, {
                A: () => n
            })
        },
        70367: (e, t, a) => {
            "use strict";
            a.d(t, {
                i: () => l
            }), new TextEncoder;
            let n = new TextDecoder;
            class r extends Error {
                static code = "ERR_JOSE_GENERIC";
                code = "ERR_JOSE_GENERIC";
                constructor(e, t) {
                    super(e, t), this.name = this.constructor.name, Error.captureStackTrace?.(this, this.constructor)
                }
            }
            class i extends r {
                static code = "ERR_JWT_INVALID";
                code = "ERR_JWT_INVALID"
            }
            class o extends r {
                [Symbol.asyncIterator];
                static code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
                code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
                constructor(e = "multiple matching keys found in the JSON Web Key Set", t) {
                    super(e, t)
                }
            }

            function l(e) {
                let t, a;
                if ("string" != typeof e) throw new i("JWTs must use Compact JWS serialization, JWT must be a string");
                let {
                    1: r,
                    length: o
                } = e.split(".");
                if (5 === o) throw new i("Only JWTs using Compact JWS serialization can be decoded");
                if (3 !== o) throw new i("Invalid JWT");
                if (!r) throw new i("JWTs must contain a payload");
                try {
                    t = function(e) {
                        if (Uint8Array.fromBase64) return Uint8Array.fromBase64("string" == typeof e ? e : n.decode(e), {
                            alphabet: "base64url"
                        });
                        let t = e;
                        t instanceof Uint8Array && (t = n.decode(t)), t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
                        try {
                            var a = t;
                            if (Uint8Array.fromBase64) return Uint8Array.fromBase64(a);
                            let e = atob(a),
                                n = new Uint8Array(e.length);
                            for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
                            return n
                        } catch {
                            throw TypeError("The input to be decoded is not correctly encoded.")
                        }
                    }(r)
                } catch {
                    throw new i("Failed to base64url decode the payload")
                }
                try {
                    a = JSON.parse(n.decode(t))
                } catch {
                    throw new i("Failed to parse the decoded payload as JSON")
                }
                if (!(e => {
                        var t;
                        if ("object" != typeof(t = e) || null === t || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
                        if (null === Object.getPrototypeOf(e)) return !0;
                        let a = e;
                        for (; null !== Object.getPrototypeOf(a);) a = Object.getPrototypeOf(a);
                        return Object.getPrototypeOf(e) === a
                    })(a)) throw new i("Invalid JWT Claims Set");
                return a
            }
        },
        70536: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => i
            });
            var n = a(12163),
                r = a(56993);

            function i(e, t) {
                (0, r.A)(2, arguments);
                var a = (0, n.A)(e),
                    i = (0, n.A)(t);
                return a.getTime() === i.getTime()
            }
        },
        77101: (e, t) => {
            var a, n, r = function() {
                var e, t, a, n, r, i, o, l = function(e, t) {
                    var a = e,
                        n = s[t],
                        r = null,
                        i = 0,
                        o = null,
                        l = [],
                        u = {},
                        y = function(e, t) {
                            r = function(e) {
                                for (var t = Array(e), a = 0; a < e; a += 1) {
                                    t[a] = Array(e);
                                    for (var n = 0; n < e; n += 1) t[a][n] = null
                                }
                                return t
                            }(i = 4 * a + 17), w(0, 0), w(i - 7, 0), w(0, i - 7), S(), v(), k(e, t), a >= 7 && L(e), null == o && (o = D(a, n, l)), T(o, t)
                        },
                        w = function(e, t) {
                            for (var a = -1; a <= 7; a += 1)
                                if (!(e + a <= -1) && !(i <= e + a))
                                    for (var n = -1; n <= 7; n += 1) t + n <= -1 || i <= t + n || (0 <= a && a <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == a || 6 == a) || 2 <= a && a <= 4 && 2 <= n && n <= 4 ? r[e + a][t + n] = !0 : r[e + a][t + n] = !1)
                        },
                        b = function() {
                            for (var e = 0, t = 0, a = 0; a < 8; a += 1) {
                                y(!0, a);
                                var n = d.getLostPoint(u);
                                (0 == a || e > n) && (e = n, t = a)
                            }
                            return t
                        },
                        v = function() {
                            for (var e = 8; e < i - 8; e += 1) null == r[e][6] && (r[e][6] = e % 2 == 0);
                            for (var t = 8; t < i - 8; t += 1) null == r[6][t] && (r[6][t] = t % 2 == 0)
                        },
                        S = function() {
                            for (var e = d.getPatternPosition(a), t = 0; t < e.length; t += 1)
                                for (var n = 0; n < e.length; n += 1) {
                                    var i = e[t],
                                        o = e[n];
                                    if (null == r[i][o])
                                        for (var l = -2; l <= 2; l += 1)
                                            for (var s = -2; s <= 2; s += 1) - 2 == l || 2 == l || -2 == s || 2 == s || 0 == l && 0 == s ? r[i + l][o + s] = !0 : r[i + l][o + s] = !1
                                }
                        },
                        L = function(e) {
                            for (var t = d.getBCHTypeNumber(a), n = 0; n < 18; n += 1) {
                                var o = !e && (t >> n & 1) == 1;
                                r[Math.floor(n / 3)][n % 3 + i - 8 - 3] = o
                            }
                            for (var n = 0; n < 18; n += 1) {
                                var o = !e && (t >> n & 1) == 1;
                                r[n % 3 + i - 8 - 3][Math.floor(n / 3)] = o
                            }
                        },
                        k = function(e, t) {
                            for (var a = n << 3 | t, o = d.getBCHTypeInfo(a), l = 0; l < 15; l += 1) {
                                var s = !e && (o >> l & 1) == 1;
                                l < 6 ? r[l][8] = s : l < 8 ? r[l + 1][8] = s : r[i - 15 + l][8] = s
                            }
                            for (var l = 0; l < 15; l += 1) {
                                var s = !e && (o >> l & 1) == 1;
                                l < 8 ? r[8][i - l - 1] = s : l < 9 ? r[8][15 - l - 1 + 1] = s : r[8][15 - l - 1] = s
                            }
                            r[i - 8][8] = !e
                        },
                        T = function(e, t) {
                            for (var a = -1, n = i - 1, o = 7, l = 0, s = d.getMaskFunction(t), u = i - 1; u > 0; u -= 2)
                                for (6 == u && (u -= 1);;) {
                                    for (var c = 0; c < 2; c += 1)
                                        if (null == r[n][u - c]) {
                                            var _ = !1;
                                            l < e.length && (_ = (e[l] >>> o & 1) == 1), s(n, u - c) && (_ = !_), r[n][u - c] = _, -1 == (o -= 1) && (l += 1, o = 7)
                                        } if ((n += a) < 0 || i <= n) {
                                        n -= a, a = -a;
                                        break
                                    }
                                }
                        },
                        B = function(e, t) {
                            for (var a = 0, n = 0, r = 0, i = Array(t.length), o = Array(t.length), l = 0; l < t.length; l += 1) {
                                var s = t[l].dataCount,
                                    u = t[l].totalCount - s;
                                n = Math.max(n, s), r = Math.max(r, u), i[l] = Array(s);
                                for (var _ = 0; _ < i[l].length; _ += 1) i[l][_] = 255 & e.getBuffer()[_ + a];
                                a += s;
                                var f = d.getErrorCorrectPolynomial(u),
                                    m = c(i[l], f.getLength() - 1).mod(f);
                                o[l] = Array(f.getLength() - 1);
                                for (var _ = 0; _ < o[l].length; _ += 1) {
                                    var g = _ + m.getLength() - o[l].length;
                                    o[l][_] = g >= 0 ? m.getAt(g) : 0
                                }
                            }
                            for (var p = 0, _ = 0; _ < t.length; _ += 1) p += t[_].totalCount;
                            for (var h = Array(p), y = 0, _ = 0; _ < n; _ += 1)
                                for (var l = 0; l < t.length; l += 1) _ < i[l].length && (h[y] = i[l][_], y += 1);
                            for (var _ = 0; _ < r; _ += 1)
                                for (var l = 0; l < t.length; l += 1) _ < o[l].length && (h[y] = o[l][_], y += 1);
                            return h
                        },
                        D = function(e, t, a) {
                            for (var n = _.getRSBlocks(e, t), r = f(), i = 0; i < a.length; i += 1) {
                                var o = a[i];
                                r.put(o.getMode(), 4), r.put(o.getLength(), d.getLengthInBits(o.getMode(), e)), o.write(r)
                            }
                            for (var l = 0, i = 0; i < n.length; i += 1) l += n[i].dataCount;
                            if (r.getLengthInBits() > 8 * l) throw "code length overflow. (" + r.getLengthInBits() + ">" + 8 * l + ")";
                            for (r.getLengthInBits() + 4 <= 8 * l && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(!1);
                            for (; !(r.getLengthInBits() >= 8 * l) && (r.put(236, 8), !(r.getLengthInBits() >= 8 * l));) {
                                ;
                                r.put(17, 8)
                            }
                            return B(r, n)
                        };
                    u.addData = function(e, t) {
                        var a = null;
                        switch (t = t || "Byte") {
                            case "Numeric":
                                a = m(e);
                                break;
                            case "Alphanumeric":
                                a = g(e);
                                break;
                            case "Byte":
                                a = p(e);
                                break;
                            case "Kanji":
                                a = h(e);
                                break;
                            default:
                                throw "mode:" + t
                        }
                        l.push(a), o = null
                    }, u.isDark = function(e, t) {
                        if (e < 0 || i <= e || t < 0 || i <= t) throw e + "," + t;
                        return r[e][t]
                    }, u.getModuleCount = function() {
                        return i
                    }, u.make = function() {
                        if (a < 1) {
                            for (var e = 1; e < 40; e++) {
                                for (var t = _.getRSBlocks(e, n), r = f(), i = 0; i < l.length; i++) {
                                    var o = l[i];
                                    r.put(o.getMode(), 4), r.put(o.getLength(), d.getLengthInBits(o.getMode(), e)), o.write(r)
                                }
                                for (var s = 0, i = 0; i < t.length; i++) s += t[i].dataCount;
                                if (r.getLengthInBits() <= 8 * s) break
                            }
                            a = e
                        }
                        y(!1, b())
                    }, u.createTableTag = function(e, t) {
                        e = e || 2;
                        var a = "";
                        a += '<table style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: ' + (t = void 0 === t ? 4 * e : t) + 'px;"><tbody>';
                        for (var n = 0; n < u.getModuleCount(); n += 1) {
                            a += "<tr>";
                            for (var r = 0; r < u.getModuleCount(); r += 1) a += '<td style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: 0px; width: ' + e + "px;" + (" height: " + e) + "px; background-color: " + (u.isDark(n, r) ? "#000000" : "#ffffff") + ';"/>';
                            a += "</tr>"
                        }
                        return a + "</tbody></table>"
                    }, u.createSvgTag = function(e, t, a, n) {
                        var r = {};
                        "object" == typeof arguments[0] && (r = arguments[0], e = r.cellSize, t = r.margin, a = r.alt, n = r.title), e = e || 2, t = void 0 === t ? 4 * e : t, (a = "string" == typeof a ? {
                            text: a
                        } : a || {}).text = a.text || null, a.id = a.text ? a.id || "qrcode-description" : null, (n = "string" == typeof n ? {
                            text: n
                        } : n || {}).text = n.text || null, n.id = n.text ? n.id || "qrcode-title" : null;
                        var i, o, l, s, d = u.getModuleCount() * e + 2 * t,
                            c = "";
                        for (s = "l" + e + ",0 0," + e + " -" + e + ",0 0,-" + e + "z ", c += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', c += r.scalable ? "" : ' width="' + d + 'px" height="' + d + 'px"', c += ' viewBox="0 0 ' + d + " " + d + '" ', c += ' preserveAspectRatio="xMinYMin meet"', c += n.text || a.text ? ' role="img" aria-labelledby="' + H([n.id, a.id].join(" ").trim()) + '"' : "", c += ">", c += n.text ? '<title id="' + H(n.id) + '">' + H(n.text) + "</title>" : "", c += a.text ? '<description id="' + H(a.id) + '">' + H(a.text) + "</description>" : "", c += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', c += '<path d="', o = 0; o < u.getModuleCount(); o += 1)
                            for (i = 0, l = o * e + t; i < u.getModuleCount(); i += 1) u.isDark(o, i) && (c += "M" + (i * e + t) + "," + l + s);
                        return c += '" stroke="transparent" fill="black"/>', c += "</svg>"
                    }, u.createDataURL = function(e, t) {
                        e = e || 2, t = void 0 === t ? 4 * e : t;
                        var a = u.getModuleCount() * e + 2 * t,
                            n = t,
                            r = a - t;
                        return x(a, a, function(t, a) {
                            if (!(n <= t) || !(t < r) || !(n <= a) || !(a < r)) return 1;
                            var i = Math.floor((t - n) / e),
                                o = Math.floor((a - n) / e);
                            return +!u.isDark(o, i)
                        })
                    }, u.createImgTag = function(e, t, a) {
                        e = e || 2, t = void 0 === t ? 4 * e : t;
                        var n = u.getModuleCount() * e + 2 * t,
                            r = "";
                        return r += "<img", r += ' src="', r += u.createDataURL(e, t), r += '"', r += ' width="', r += n, r += '"', r += ' height="', r += n, r += '"', a && (r += ' alt="', r += H(a), r += '"'), r += "/>"
                    };
                    var H = function(e) {
                            for (var t = "", a = 0; a < e.length; a += 1) {
                                var n = e.charAt(a);
                                switch (n) {
                                    case "<":
                                        t += "&lt;";
                                        break;
                                    case ">":
                                        t += "&gt;";
                                        break;
                                    case "&":
                                        t += "&amp;";
                                        break;
                                    case '"':
                                        t += "&quot;";
                                        break;
                                    default:
                                        t += n
                                }
                            }
                            return t
                        },
                        N = function(e) {
                            e = void 0 === e ? 2 : e;
                            var t, a, n, r, i, o = +u.getModuleCount() + 2 * e,
                                l = e,
                                s = o - e,
                                d = {
                                    "██": "█",
                                    "█ ": "▀",
                                    " █": "▄",
                                    "  ": " "
                                },
                                c = {
                                    "██": "▀",
                                    "█ ": "▀",
                                    " █": " ",
                                    "  ": " "
                                },
                                _ = "";
                            for (t = 0; t < o; t += 2) {
                                for (a = 0, n = Math.floor((t - l) / 1), r = Math.floor((t + 1 - l) / 1); a < o; a += 1) i = "█", l <= a && a < s && l <= t && t < s && u.isDark(n, Math.floor((a - l) / 1)) && (i = " "), l <= a && a < s && l <= t + 1 && t + 1 < s && u.isDark(r, Math.floor((a - l) / 1)) ? i += " " : i += "█", _ += e < 1 && t + 1 >= s ? c[i] : d[i];
                                _ += "\n"
                            }
                            return o % 2 && e > 0 ? _.substring(0, _.length - o - 1) + Array(o + 1).join("▀") : _.substring(0, _.length - 1)
                        };
                    return u.createASCII = function(e, t) {
                        if ((e = e || 1) < 2) return N(t);
                        e -= 1, t = void 0 === t ? 2 * e : t;
                        var a, n, r, i, o = u.getModuleCount() * e + 2 * t,
                            l = t,
                            s = o - t,
                            d = Array(e + 1).join("██"),
                            c = Array(e + 1).join("  "),
                            _ = "",
                            f = "";
                        for (a = 0; a < o; a += 1) {
                            for (n = 0, r = Math.floor((a - l) / e), f = ""; n < o; n += 1) i = 1, l <= n && n < s && l <= a && a < s && u.isDark(r, Math.floor((n - l) / e)) && (i = 0), f += i ? d : c;
                            for (r = 0; r < e; r += 1) _ += f + "\n"
                        }
                        return _.substring(0, _.length - 1)
                    }, u.renderTo2dContext = function(e, t) {
                        t = t || 2;
                        for (var a = u.getModuleCount(), n = 0; n < a; n++)
                            for (var r = 0; r < a; r++) e.fillStyle = u.isDark(n, r) ? "black" : "white", e.fillRect(n * t, r * t, t, t)
                    }, u
                };
                l.stringToBytesFuncs = {
                    default: function(e) {
                        for (var t = [], a = 0; a < e.length; a += 1) {
                            var n = e.charCodeAt(a);
                            t.push(255 & n)
                        }
                        return t
                    }
                }, l.stringToBytes = l.stringToBytesFuncs.default, l.createStringToBytes = function(e, t) {
                    var a = function() {
                        for (var a = b(e), n = function() {
                                var e = a.read();
                                if (-1 == e) throw "eof";
                                return e
                            }, r = 0, i = {};;) {
                            var o = a.read();
                            if (-1 == o) break;
                            var l = n(),
                                s = n(),
                                d = n(),
                                u = String.fromCharCode(o << 8 | l),
                                c = s << 8 | d;
                            i[u] = c, r += 1
                        }
                        if (r != t) throw r + " != " + t;
                        return i
                    }();
                    return function(e) {
                        for (var t = [], n = 0; n < e.length; n += 1) {
                            var r = e.charCodeAt(n);
                            if (r < 128) t.push(r);
                            else {
                                var i = a[e.charAt(n)];
                                "number" == typeof i ? (255 & i) == i ? t.push(i) : (t.push(i >>> 8), t.push(255 & i)) : t.push(63)
                            }
                        }
                        return t
                    }
                };
                var s = {
                        L: 1,
                        M: 0,
                        Q: 3,
                        H: 2
                    },
                    d = (e = [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ], t = {}, a = function(e) {
                        for (var t = 0; 0 != e;) t += 1, e >>>= 1;
                        return t
                    }, t.getBCHTypeInfo = function(e) {
                        for (var t = e << 10; a(t) - a(1335) >= 0;) t ^= 1335 << a(t) - a(1335);
                        return (e << 10 | t) ^ 21522
                    }, t.getBCHTypeNumber = function(e) {
                        for (var t = e << 12; a(t) - a(7973) >= 0;) t ^= 7973 << a(t) - a(7973);
                        return e << 12 | t
                    }, t.getPatternPosition = function(t) {
                        return e[t - 1]
                    }, t.getMaskFunction = function(e) {
                        switch (e) {
                            case 0:
                                return function(e, t) {
                                    return (e + t) % 2 == 0
                                };
                            case 1:
                                return function(e, t) {
                                    return e % 2 == 0
                                };
                            case 2:
                                return function(e, t) {
                                    return t % 3 == 0
                                };
                            case 3:
                                return function(e, t) {
                                    return (e + t) % 3 == 0
                                };
                            case 4:
                                return function(e, t) {
                                    return (Math.floor(e / 2) + Math.floor(t / 3)) % 2 == 0
                                };
                            case 5:
                                return function(e, t) {
                                    return e * t % 2 + e * t % 3 == 0
                                };
                            case 6:
                                return function(e, t) {
                                    return (e * t % 2 + e * t % 3) % 2 == 0
                                };
                            case 7:
                                return function(e, t) {
                                    return (e * t % 3 + (e + t) % 2) % 2 == 0
                                };
                            default:
                                throw "bad maskPattern:" + e
                        }
                    }, t.getErrorCorrectPolynomial = function(e) {
                        for (var t = c([1], 0), a = 0; a < e; a += 1) t = t.multiply(c([1, u.gexp(a)], 0));
                        return t
                    }, t.getLengthInBits = function(e, t) {
                        if (1 <= t && t < 10) switch (e) {
                            case 1:
                                return 10;
                            case 2:
                                return 9;
                            case 4:
                            case 8:
                                return 8;
                            default:
                                throw "mode:" + e
                        }
                        if (t < 27) switch (e) {
                            case 1:
                                return 12;
                            case 2:
                                return 11;
                            case 4:
                                return 16;
                            case 8:
                                return 10;
                            default:
                                throw "mode:" + e
                        }
                        if (t < 41) switch (e) {
                            case 1:
                                return 14;
                            case 2:
                                return 13;
                            case 4:
                                return 16;
                            case 8:
                                return 12;
                            default:
                                throw "mode:" + e
                        }
                        throw "type:" + t
                    }, t.getLostPoint = function(e) {
                        for (var t = e.getModuleCount(), a = 0, n = 0; n < t; n += 1)
                            for (var r = 0; r < t; r += 1) {
                                for (var i = 0, o = e.isDark(n, r), l = -1; l <= 1; l += 1)
                                    if (!(n + l < 0) && !(t <= n + l))
                                        for (var s = -1; s <= 1; s += 1) r + s < 0 || t <= r + s || (0 != l || 0 != s) && o == e.isDark(n + l, r + s) && (i += 1);
                                i > 5 && (a += 3 + i - 5)
                            }
                        for (var n = 0; n < t - 1; n += 1)
                            for (var r = 0; r < t - 1; r += 1) {
                                var d = 0;
                                e.isDark(n, r) && (d += 1), e.isDark(n + 1, r) && (d += 1), e.isDark(n, r + 1) && (d += 1), e.isDark(n + 1, r + 1) && (d += 1), (0 == d || 4 == d) && (a += 3)
                            }
                        for (var n = 0; n < t; n += 1)
                            for (var r = 0; r < t - 6; r += 1) e.isDark(n, r) && !e.isDark(n, r + 1) && e.isDark(n, r + 2) && e.isDark(n, r + 3) && e.isDark(n, r + 4) && !e.isDark(n, r + 5) && e.isDark(n, r + 6) && (a += 40);
                        for (var r = 0; r < t; r += 1)
                            for (var n = 0; n < t - 6; n += 1) e.isDark(n, r) && !e.isDark(n + 1, r) && e.isDark(n + 2, r) && e.isDark(n + 3, r) && e.isDark(n + 4, r) && !e.isDark(n + 5, r) && e.isDark(n + 6, r) && (a += 40);
                        for (var u = 0, r = 0; r < t; r += 1)
                            for (var n = 0; n < t; n += 1) e.isDark(n, r) && (u += 1);
                        return a + 10 * (Math.abs(100 * u / t / t - 50) / 5)
                    }, t),
                    u = function() {
                        for (var e = Array(256), t = Array(256), a = 0; a < 8; a += 1) e[a] = 1 << a;
                        for (var a = 8; a < 256; a += 1) e[a] = e[a - 4] ^ e[a - 5] ^ e[a - 6] ^ e[a - 8];
                        for (var a = 0; a < 255; a += 1) t[e[a]] = a;
                        var n = {};
                        return n.glog = function(e) {
                            if (e < 1) throw "glog(" + e + ")";
                            return t[e]
                        }, n.gexp = function(t) {
                            for (; t < 0;) t += 255;
                            for (; t >= 256;) t -= 255;
                            return e[t]
                        }, n
                    }();

                function c(e, t) {
                    if (void 0 === e.length) throw e.length + "/" + t;
                    var a = function() {
                            for (var a = 0; a < e.length && 0 == e[a];) a += 1;
                            for (var n = Array(e.length - a + t), r = 0; r < e.length - a; r += 1) n[r] = e[r + a];
                            return n
                        }(),
                        n = {};
                    return n.getAt = function(e) {
                        return a[e]
                    }, n.getLength = function() {
                        return a.length
                    }, n.multiply = function(e) {
                        for (var t = Array(n.getLength() + e.getLength() - 1), a = 0; a < n.getLength(); a += 1)
                            for (var r = 0; r < e.getLength(); r += 1) t[a + r] ^= u.gexp(u.glog(n.getAt(a)) + u.glog(e.getAt(r)));
                        return c(t, 0)
                    }, n.mod = function(e) {
                        if (n.getLength() - e.getLength() < 0) return n;
                        for (var t = u.glog(n.getAt(0)) - u.glog(e.getAt(0)), a = Array(n.getLength()), r = 0; r < n.getLength(); r += 1) a[r] = n.getAt(r);
                        for (var r = 0; r < e.getLength(); r += 1) a[r] ^= u.gexp(u.glog(e.getAt(r)) + t);
                        return c(a, 0).mod(e)
                    }, n
                }
                var _ = (n = [
                        [1, 26, 19],
                        [1, 26, 16],
                        [1, 26, 13],
                        [1, 26, 9],
                        [1, 44, 34],
                        [1, 44, 28],
                        [1, 44, 22],
                        [1, 44, 16],
                        [1, 70, 55],
                        [1, 70, 44],
                        [2, 35, 17],
                        [2, 35, 13],
                        [1, 100, 80],
                        [2, 50, 32],
                        [2, 50, 24],
                        [4, 25, 9],
                        [1, 134, 108],
                        [2, 67, 43],
                        [2, 33, 15, 2, 34, 16],
                        [2, 33, 11, 2, 34, 12],
                        [2, 86, 68],
                        [4, 43, 27],
                        [4, 43, 19],
                        [4, 43, 15],
                        [2, 98, 78],
                        [4, 49, 31],
                        [2, 32, 14, 4, 33, 15],
                        [4, 39, 13, 1, 40, 14],
                        [2, 121, 97],
                        [2, 60, 38, 2, 61, 39],
                        [4, 40, 18, 2, 41, 19],
                        [4, 40, 14, 2, 41, 15],
                        [2, 146, 116],
                        [3, 58, 36, 2, 59, 37],
                        [4, 36, 16, 4, 37, 17],
                        [4, 36, 12, 4, 37, 13],
                        [2, 86, 68, 2, 87, 69],
                        [4, 69, 43, 1, 70, 44],
                        [6, 43, 19, 2, 44, 20],
                        [6, 43, 15, 2, 44, 16],
                        [4, 101, 81],
                        [1, 80, 50, 4, 81, 51],
                        [4, 50, 22, 4, 51, 23],
                        [3, 36, 12, 8, 37, 13],
                        [2, 116, 92, 2, 117, 93],
                        [6, 58, 36, 2, 59, 37],
                        [4, 46, 20, 6, 47, 21],
                        [7, 42, 14, 4, 43, 15],
                        [4, 133, 107],
                        [8, 59, 37, 1, 60, 38],
                        [8, 44, 20, 4, 45, 21],
                        [12, 33, 11, 4, 34, 12],
                        [3, 145, 115, 1, 146, 116],
                        [4, 64, 40, 5, 65, 41],
                        [11, 36, 16, 5, 37, 17],
                        [11, 36, 12, 5, 37, 13],
                        [5, 109, 87, 1, 110, 88],
                        [5, 65, 41, 5, 66, 42],
                        [5, 54, 24, 7, 55, 25],
                        [11, 36, 12, 7, 37, 13],
                        [5, 122, 98, 1, 123, 99],
                        [7, 73, 45, 3, 74, 46],
                        [15, 43, 19, 2, 44, 20],
                        [3, 45, 15, 13, 46, 16],
                        [1, 135, 107, 5, 136, 108],
                        [10, 74, 46, 1, 75, 47],
                        [1, 50, 22, 15, 51, 23],
                        [2, 42, 14, 17, 43, 15],
                        [5, 150, 120, 1, 151, 121],
                        [9, 69, 43, 4, 70, 44],
                        [17, 50, 22, 1, 51, 23],
                        [2, 42, 14, 19, 43, 15],
                        [3, 141, 113, 4, 142, 114],
                        [3, 70, 44, 11, 71, 45],
                        [17, 47, 21, 4, 48, 22],
                        [9, 39, 13, 16, 40, 14],
                        [3, 135, 107, 5, 136, 108],
                        [3, 67, 41, 13, 68, 42],
                        [15, 54, 24, 5, 55, 25],
                        [15, 43, 15, 10, 44, 16],
                        [4, 144, 116, 4, 145, 117],
                        [17, 68, 42],
                        [17, 50, 22, 6, 51, 23],
                        [19, 46, 16, 6, 47, 17],
                        [2, 139, 111, 7, 140, 112],
                        [17, 74, 46],
                        [7, 54, 24, 16, 55, 25],
                        [34, 37, 13],
                        [4, 151, 121, 5, 152, 122],
                        [4, 75, 47, 14, 76, 48],
                        [11, 54, 24, 14, 55, 25],
                        [16, 45, 15, 14, 46, 16],
                        [6, 147, 117, 4, 148, 118],
                        [6, 73, 45, 14, 74, 46],
                        [11, 54, 24, 16, 55, 25],
                        [30, 46, 16, 2, 47, 17],
                        [8, 132, 106, 4, 133, 107],
                        [8, 75, 47, 13, 76, 48],
                        [7, 54, 24, 22, 55, 25],
                        [22, 45, 15, 13, 46, 16],
                        [10, 142, 114, 2, 143, 115],
                        [19, 74, 46, 4, 75, 47],
                        [28, 50, 22, 6, 51, 23],
                        [33, 46, 16, 4, 47, 17],
                        [8, 152, 122, 4, 153, 123],
                        [22, 73, 45, 3, 74, 46],
                        [8, 53, 23, 26, 54, 24],
                        [12, 45, 15, 28, 46, 16],
                        [3, 147, 117, 10, 148, 118],
                        [3, 73, 45, 23, 74, 46],
                        [4, 54, 24, 31, 55, 25],
                        [11, 45, 15, 31, 46, 16],
                        [7, 146, 116, 7, 147, 117],
                        [21, 73, 45, 7, 74, 46],
                        [1, 53, 23, 37, 54, 24],
                        [19, 45, 15, 26, 46, 16],
                        [5, 145, 115, 10, 146, 116],
                        [19, 75, 47, 10, 76, 48],
                        [15, 54, 24, 25, 55, 25],
                        [23, 45, 15, 25, 46, 16],
                        [13, 145, 115, 3, 146, 116],
                        [2, 74, 46, 29, 75, 47],
                        [42, 54, 24, 1, 55, 25],
                        [23, 45, 15, 28, 46, 16],
                        [17, 145, 115],
                        [10, 74, 46, 23, 75, 47],
                        [10, 54, 24, 35, 55, 25],
                        [19, 45, 15, 35, 46, 16],
                        [17, 145, 115, 1, 146, 116],
                        [14, 74, 46, 21, 75, 47],
                        [29, 54, 24, 19, 55, 25],
                        [11, 45, 15, 46, 46, 16],
                        [13, 145, 115, 6, 146, 116],
                        [14, 74, 46, 23, 75, 47],
                        [44, 54, 24, 7, 55, 25],
                        [59, 46, 16, 1, 47, 17],
                        [12, 151, 121, 7, 152, 122],
                        [12, 75, 47, 26, 76, 48],
                        [39, 54, 24, 14, 55, 25],
                        [22, 45, 15, 41, 46, 16],
                        [6, 151, 121, 14, 152, 122],
                        [6, 75, 47, 34, 76, 48],
                        [46, 54, 24, 10, 55, 25],
                        [2, 45, 15, 64, 46, 16],
                        [17, 152, 122, 4, 153, 123],
                        [29, 74, 46, 14, 75, 47],
                        [49, 54, 24, 10, 55, 25],
                        [24, 45, 15, 46, 46, 16],
                        [4, 152, 122, 18, 153, 123],
                        [13, 74, 46, 32, 75, 47],
                        [48, 54, 24, 14, 55, 25],
                        [42, 45, 15, 32, 46, 16],
                        [20, 147, 117, 4, 148, 118],
                        [40, 75, 47, 7, 76, 48],
                        [43, 54, 24, 22, 55, 25],
                        [10, 45, 15, 67, 46, 16],
                        [19, 148, 118, 6, 149, 119],
                        [18, 75, 47, 31, 76, 48],
                        [34, 54, 24, 34, 55, 25],
                        [20, 45, 15, 61, 46, 16]
                    ], r = function(e, t) {
                        var a = {};
                        return a.totalCount = e, a.dataCount = t, a
                    }, i = {}, o = function(e, t) {
                        switch (t) {
                            case s.L:
                                return n[(e - 1) * 4 + 0];
                            case s.M:
                                return n[(e - 1) * 4 + 1];
                            case s.Q:
                                return n[(e - 1) * 4 + 2];
                            case s.H:
                                return n[(e - 1) * 4 + 3];
                            default:
                                return
                        }
                    }, i.getRSBlocks = function(e, t) {
                        var a = o(e, t);
                        if (void 0 === a) throw "bad rs block @ typeNumber:" + e + "/errorCorrectionLevel:" + t;
                        for (var n = a.length / 3, i = [], l = 0; l < n; l += 1)
                            for (var s = a[3 * l + 0], d = a[3 * l + 1], u = a[3 * l + 2], c = 0; c < s; c += 1) i.push(r(d, u));
                        return i
                    }, i),
                    f = function() {
                        var e = [],
                            t = 0,
                            a = {};
                        return a.getBuffer = function() {
                            return e
                        }, a.getAt = function(t) {
                            return (e[Math.floor(t / 8)] >>> 7 - t % 8 & 1) == 1
                        }, a.put = function(e, t) {
                            for (var n = 0; n < t; n += 1) a.putBit((e >>> t - n - 1 & 1) == 1)
                        }, a.getLengthInBits = function() {
                            return t
                        }, a.putBit = function(a) {
                            var n = Math.floor(t / 8);
                            e.length <= n && e.push(0), a && (e[n] |= 128 >>> t % 8), t += 1
                        }, a
                    },
                    m = function(e) {
                        var t = {};
                        t.getMode = function() {
                            return 1
                        }, t.getLength = function(t) {
                            return e.length
                        }, t.write = function(t) {
                            for (var n = 0; n + 2 < e.length;) t.put(a(e.substring(n, n + 3)), 10), n += 3;
                            n < e.length && (e.length - n == 1 ? t.put(a(e.substring(n, n + 1)), 4) : e.length - n == 2 && t.put(a(e.substring(n, n + 2)), 7))
                        };
                        var a = function(e) {
                                for (var t = 0, a = 0; a < e.length; a += 1) t = 10 * t + n(e.charAt(a));
                                return t
                            },
                            n = function(e) {
                                if ("0" <= e && e <= "9") return e.charCodeAt(0) - 48;
                                throw "illegal char :" + e
                            };
                        return t
                    },
                    g = function(e) {
                        var t = {};
                        t.getMode = function() {
                            return 2
                        }, t.getLength = function(t) {
                            return e.length
                        }, t.write = function(t) {
                            for (var n = 0; n + 1 < e.length;) t.put(45 * a(e.charAt(n)) + a(e.charAt(n + 1)), 11), n += 2;
                            n < e.length && t.put(a(e.charAt(n)), 6)
                        };
                        var a = function(e) {
                            if ("0" <= e && e <= "9") return e.charCodeAt(0) - 48;
                            if ("A" <= e && e <= "Z") return e.charCodeAt(0) - 65 + 10;
                            switch (e) {
                                case " ":
                                    return 36;
                                case "$":
                                    return 37;
                                case "%":
                                    return 38;
                                case "*":
                                    return 39;
                                case "+":
                                    return 40;
                                case "-":
                                    return 41;
                                case ".":
                                    return 42;
                                case "/":
                                    return 43;
                                case ":":
                                    return 44;
                                default:
                                    throw "illegal char :" + e
                            }
                        };
                        return t
                    },
                    p = function(e) {
                        var t = l.stringToBytes(e),
                            a = {};
                        return a.getMode = function() {
                            return 4
                        }, a.getLength = function(e) {
                            return t.length
                        }, a.write = function(e) {
                            for (var a = 0; a < t.length; a += 1) e.put(t[a], 8)
                        }, a
                    },
                    h = function(e) {
                        var t = l.stringToBytesFuncs.SJIS;
                        if (!t) throw "sjis not supported.";
                        var a = t("友");
                        if (2 != a.length || (a[0] << 8 | a[1]) != 38726) throw "sjis not supported.";
                        var n = t(e),
                            r = {};
                        return r.getMode = function() {
                            return 8
                        }, r.getLength = function(e) {
                            return ~~(n.length / 2)
                        }, r.write = function(e) {
                            for (var t = 0; t + 1 < n.length;) {
                                var a = (255 & n[t]) << 8 | 255 & n[t + 1];
                                if (33088 <= a && a <= 40956) a -= 33088;
                                else if (57408 <= a && a <= 60351) a -= 49472;
                                else throw "illegal char at " + (t + 1) + "/" + a;
                                a = (a >>> 8 & 255) * 192 + (255 & a), e.put(a, 13), t += 2
                            }
                            if (t < n.length) throw "illegal char at " + (t + 1)
                        }, r
                    },
                    y = function() {
                        var e = [],
                            t = {};
                        return t.writeByte = function(t) {
                            e.push(255 & t)
                        }, t.writeShort = function(e) {
                            t.writeByte(e), t.writeByte(e >>> 8)
                        }, t.writeBytes = function(e, a, n) {
                            a = a || 0, n = n || e.length;
                            for (var r = 0; r < n; r += 1) t.writeByte(e[r + a])
                        }, t.writeString = function(e) {
                            for (var a = 0; a < e.length; a += 1) t.writeByte(e.charCodeAt(a))
                        }, t.toByteArray = function() {
                            return e
                        }, t.toString = function() {
                            var t = "";
                            t += "[";
                            for (var a = 0; a < e.length; a += 1) a > 0 && (t += ","), t += e[a];
                            return t + "]"
                        }, t
                    },
                    w = function() {
                        var e = 0,
                            t = 0,
                            a = 0,
                            n = "",
                            r = {},
                            i = function(e) {
                                n += String.fromCharCode(o(63 & e))
                            },
                            o = function(e) {
                                if (e < 0);
                                else if (e < 26) return 65 + e;
                                else if (e < 52) return 97 + (e - 26);
                                else if (e < 62) return 48 + (e - 52);
                                else if (62 == e) return 43;
                                else if (63 == e) return 47;
                                throw "n:" + e
                            };
                        return r.writeByte = function(n) {
                            for (e = e << 8 | 255 & n, t += 8, a += 1; t >= 6;) i(e >>> t - 6), t -= 6
                        }, r.flush = function() {
                            if (t > 0 && (i(e << 6 - t), e = 0, t = 0), a % 3 != 0)
                                for (var r = 3 - a % 3, o = 0; o < r; o += 1) n += "="
                        }, r.toString = function() {
                            return n
                        }, r
                    },
                    b = function(e) {
                        var t = 0,
                            a = 0,
                            n = 0,
                            r = {};
                        r.read = function() {
                            for (; n < 8;) {
                                if (t >= e.length) {
                                    if (0 == n) return -1;
                                    throw "unexpected end of file./" + n
                                }
                                var r = e.charAt(t);
                                if (t += 1, "=" == r) return n = 0, -1;
                                r.match(/^\s$/) || (a = a << 6 | i(r.charCodeAt(0)), n += 6)
                            }
                            var o = a >>> n - 8 & 255;
                            return n -= 8, o
                        };
                        var i = function(e) {
                            if (65 <= e && e <= 90) return e - 65;
                            if (97 <= e && e <= 122) return e - 97 + 26;
                            if (48 <= e && e <= 57) return e - 48 + 52;
                            if (43 == e) return 62;
                            if (47 == e) return 63;
                            else throw "c:" + e
                        };
                        return r
                    },
                    v = function(e, t) {
                        var a = Array(e * t),
                            n = {};
                        n.setPixel = function(t, n, r) {
                            a[n * e + t] = r
                        }, n.write = function(a) {
                            a.writeString("GIF87a"), a.writeShort(e), a.writeShort(t), a.writeByte(128), a.writeByte(0), a.writeByte(0), a.writeByte(0), a.writeByte(0), a.writeByte(0), a.writeByte(255), a.writeByte(255), a.writeByte(255), a.writeString(","), a.writeShort(0), a.writeShort(0), a.writeShort(e), a.writeShort(t), a.writeByte(0);
                            var n = i(2);
                            a.writeByte(2);
                            for (var r = 0; n.length - r > 255;) a.writeByte(255), a.writeBytes(n, r, 255), r += 255;
                            a.writeByte(n.length - r), a.writeBytes(n, r, n.length - r), a.writeByte(0), a.writeString(";")
                        };
                        var r = function(e) {
                                var t = 0,
                                    a = 0,
                                    n = {};
                                return n.write = function(n, r) {
                                    if (n >>> r != 0) throw "length over";
                                    for (; t + r >= 8;) e.writeByte(255 & (n << t | a)), r -= 8 - t, n >>>= 8 - t, a = 0, t = 0;
                                    a = n << t | a, t += r
                                }, n.flush = function() {
                                    t > 0 && e.writeByte(a)
                                }, n
                            },
                            i = function(e) {
                                for (var t = 1 << e, n = (1 << e) + 1, i = e + 1, l = o(), s = 0; s < t; s += 1) l.add(String.fromCharCode(s));
                                l.add(String.fromCharCode(t)), l.add(String.fromCharCode(n));
                                var d = y(),
                                    u = r(d);
                                u.write(t, i);
                                var c = 0,
                                    _ = String.fromCharCode(a[0]);
                                for (c += 1; c < a.length;) {
                                    var f = String.fromCharCode(a[c]);
                                    c += 1, l.contains(_ + f) ? _ += f : (u.write(l.indexOf(_), i), 4095 > l.size() && (l.size() == 1 << i && (i += 1), l.add(_ + f)), _ = f)
                                }
                                return u.write(l.indexOf(_), i), u.write(n, i), u.flush(), d.toByteArray()
                            },
                            o = function() {
                                var e = {},
                                    t = 0,
                                    a = {};
                                return a.add = function(n) {
                                    if (a.contains(n)) throw "dup key:" + n;
                                    e[n] = t, t += 1
                                }, a.size = function() {
                                    return t
                                }, a.indexOf = function(t) {
                                    return e[t]
                                }, a.contains = function(t) {
                                    return void 0 !== e[t]
                                }, a
                            };
                        return n
                    },
                    x = function(e, t, a) {
                        for (var n = v(e, t), r = 0; r < t; r += 1)
                            for (var i = 0; i < e; i += 1) n.setPixel(i, r, a(i, r));
                        var o = y();
                        n.write(o);
                        for (var l = w(), s = o.toByteArray(), d = 0; d < s.length; d += 1) l.writeByte(s[d]);
                        return l.flush(), "data:image/gif;base64," + l
                    };
                return l
            }();
            r.stringToBytesFuncs["UTF-8"] = function(e) {
                for (var t = [], a = 0; a < e.length; a++) {
                    var n = e.charCodeAt(a);
                    n < 128 ? t.push(n) : n < 2048 ? t.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || n >= 57344 ? t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (a++, n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(a)), t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
                }
                return t
            }, void 0 === (n = "function" == typeof(a = function() {
                return r
            }) ? a.apply(t, []) : a) || (e.exports = n)
        },
        77959: e => {
            e.exports = function(e, t, a) {
                for (var n = a - 1, r = e.length; ++n < r;)
                    if (e[n] === t) return n;
                return -1
            }
        },
        78047: e => {
            e.exports = function(e) {
                var t = [];
                if (null != e)
                    for (var a in Object(e)) t.push(a);
                return t
            }
        },
        81620: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => i
            });
            var n = a(61935),
                r = a(56993);

            function i(e, t) {
                return (0, r.A)(2, arguments), (0, n.A)(e).getTime() - (0, n.A)(t).getTime()
            }
        },
        82706: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => f
            });
            var n = a(26128),
                r = a(10071),
                i = a(43562),
                o = a(80242),
                l = a(21462),
                s = a(59456);

            function d(e, t) {
                var a = Object.create(null);
                return e && l.Children.map(e, function(e) {
                    return e
                }).forEach(function(e) {
                    a[e.key] = t && (0, l.isValidElement)(e) ? t(e) : e
                }), a
            }

            function u(e, t, a) {
                return null != a[t] ? a[t] : e.props[t]
            }
            var c = Object.values || function(e) {
                    return Object.keys(e).map(function(t) {
                        return e[t]
                    })
                },
                _ = function(e) {
                    function t(t, a) {
                        var n = e.call(this, t, a) || this,
                            r = n.handleExited.bind((0, i.A)(n));
                        return n.state = {
                            contextValue: {
                                isMounting: !0
                            },
                            handleExited: r,
                            firstRender: !0
                        }, n
                    }(0, o.A)(t, e);
                    var a = t.prototype;
                    return a.componentDidMount = function() {
                        this.mounted = !0, this.setState({
                            contextValue: {
                                isMounting: !1
                            }
                        })
                    }, a.componentWillUnmount = function() {
                        this.mounted = !1
                    }, t.getDerivedStateFromProps = function(e, t) {
                        var a, n, r = t.children,
                            i = t.handleExited;
                        return {
                            children: t.firstRender ? d(e.children, function(t) {
                                return (0, l.cloneElement)(t, {
                                    onExited: i.bind(null, t),
                                    in: !0,
                                    appear: u(t, "appear", e),
                                    enter: u(t, "enter", e),
                                    exit: u(t, "exit", e)
                                })
                            }) : (Object.keys(n = function(e, t) {
                                function a(a) {
                                    return a in t ? t[a] : e[a]
                                }
                                e = e || {}, t = t || {};
                                var n, r = Object.create(null),
                                    i = [];
                                for (var o in e) o in t ? i.length && (r[o] = i, i = []) : i.push(o);
                                var l = {};
                                for (var s in t) {
                                    if (r[s])
                                        for (n = 0; n < r[s].length; n++) {
                                            var d = r[s][n];
                                            l[r[s][n]] = a(d)
                                        }
                                    l[s] = a(s)
                                }
                                for (n = 0; n < i.length; n++) l[i[n]] = a(i[n]);
                                return l
                            }(r, a = d(e.children))).forEach(function(t) {
                                var o = n[t];
                                if ((0, l.isValidElement)(o)) {
                                    var s = t in r,
                                        d = t in a,
                                        c = r[t],
                                        _ = (0, l.isValidElement)(c) && !c.props.in;
                                    d && (!s || _) ? n[t] = (0, l.cloneElement)(o, {
                                        onExited: i.bind(null, o),
                                        in: !0,
                                        exit: u(o, "exit", e),
                                        enter: u(o, "enter", e)
                                    }) : d || !s || _ ? d && s && (0, l.isValidElement)(c) && (n[t] = (0, l.cloneElement)(o, {
                                        onExited: i.bind(null, o),
                                        in: c.props.in,
                                        exit: u(o, "exit", e),
                                        enter: u(o, "enter", e)
                                    })) : n[t] = (0, l.cloneElement)(o, {
                                        in: !1
                                    })
                                }
                            }), n),
                            firstRender: !1
                        }
                    }, a.handleExited = function(e, t) {
                        var a = d(this.props.children);
                        e.key in a || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
                            var a = (0, r.A)({}, t.children);
                            return delete a[e.key], {
                                children: a
                            }
                        }))
                    }, a.render = function() {
                        var e = this.props,
                            t = e.component,
                            a = e.childFactory,
                            r = (0, n.A)(e, ["component", "childFactory"]),
                            i = this.state.contextValue,
                            o = c(this.state.children).map(a);
                        return (delete r.appear, delete r.enter, delete r.exit, null === t) ? l.createElement(s.A.Provider, {
                            value: i
                        }, o) : l.createElement(s.A.Provider, {
                            value: i
                        }, l.createElement(t, r, o))
                    }, t
                }(l.Component);
            _.propTypes = {}, _.defaultProps = {
                component: "div",
                childFactory: function(e) {
                    return e
                }
            };
            let f = _
        },
        84607: (e, t, a) => {
            "use strict";
            a.d(t, {
                z: () => s
            });
            var n = a(13897),
                r = a(23798),
                i = a(71623),
                o = a(21462);
            (0, a(85752).$)("@keyframes styles_module_loop__7d94b758{0%{left:-100%}to{left:100%}}.styles_module_progressbar__7d94b758{overflow:hidden;position:relative;width:100%}.styles_module_progressbar_BaseLight__7d94b758,.styles_module_progressbar_NeutralLight__7d94b758,.styles_module_progressbar_RedLight__7d94b758{background-color:rgba(0,0,0,.1)}.styles_module_progressbar_BaseDark__7d94b758,.styles_module_progressbar_NeutralDark__7d94b758,.styles_module_progressbar_RedDark__7d94b758{background-color:hsla(0,0%,100%,.3)}.styles_module_progressbar_Small__7d94b758{height:2px}.styles_module_progressbar_SmallRounded__7d94b758{border-radius:1px}.styles_module_progressbar_Medium__7d94b758{height:6px}.styles_module_progressbar_MediumRounded__7d94b758{border-radius:3px}.styles_module_progressbar_Large__7d94b758{height:10px}.styles_module_progressbar_LargeRounded__7d94b758{border-radius:5px}.styles_module_progressbar__bar__7d94b758{height:100%;margin:0;position:absolute;top:0;transition:width .2s linear}.styles_module_progressbar__bar_BaseDark__7d94b758,.styles_module_progressbar__bar_BaseLight__7d94b758{background-color:#3767ea}.styles_module_progressbar__bar_BaseDark_Looping__7d94b758,.styles_module_progressbar__bar_BaseLight_Looping__7d94b758{animation:styles_module_loop__7d94b758 2s linear infinite;background:linear-gradient(90deg,rgba(55,103,234,0),#3767ea 50%,rgba(55,103,234,0))}.styles_module_progressbar__bar_NeutralLight__7d94b758{background-color:rgba(0,0,0,.7)}.styles_module_progressbar__bar_NeutralLight_Looping__7d94b758{animation:styles_module_loop__7d94b758 2s linear infinite;background:linear-gradient(90deg,transparent,#000 50%,transparent)}.styles_module_progressbar__bar_NeutralDark__7d94b758{background-color:hsla(0,0%,100%,.7)}.styles_module_progressbar__bar_NeutralDark_Looping__7d94b758{animation:styles_module_loop__7d94b758 2s linear infinite;background:linear-gradient(90deg,hsla(0,0%,100%,0),#fff 50%,hsla(0,0%,100%,0))}.styles_module_progressbar__bar_RedDark__7d94b758,.styles_module_progressbar__bar_RedLight__7d94b758{background-color:#d33300}.styles_module_progressbar__bar_RedDark_Looping__7d94b758,.styles_module_progressbar__bar_RedLight_Looping__7d94b758{animation:styles_module_loop__7d94b758 2s linear infinite;background:linear-gradient(90deg,rgba(211,51,0,0),#d33300 50%,rgba(211,51,0,0))}.styles_module_progressbar__bar_Small__7d94b758{height:2px}.styles_module_progressbar__bar_SmallRounded__7d94b758{border-radius:1px}.styles_module_progressbar__bar_Medium__7d94b758{height:6px}.styles_module_progressbar__bar_MediumRounded__7d94b758{border-radius:3px}.styles_module_progressbar__bar_Large__7d94b758{height:10px}.styles_module_progressbar__bar_LargeRounded__7d94b758{border-radius:5px}");
            var l = {
                progressbar: "styles_module_progressbar__7d94b758",
                "progressbar--base-light": "styles_module_progressbar_BaseLight__7d94b758",
                "progressbar--neutral-light": "styles_module_progressbar_NeutralLight__7d94b758",
                "progressbar--red-light": "styles_module_progressbar_RedLight__7d94b758",
                "progressbar--base-dark": "styles_module_progressbar_BaseDark__7d94b758",
                "progressbar--neutral-dark": "styles_module_progressbar_NeutralDark__7d94b758",
                "progressbar--red-dark": "styles_module_progressbar_RedDark__7d94b758",
                "progressbar--small": "styles_module_progressbar_Small__7d94b758",
                "progressbar--small-rounded": "styles_module_progressbar_SmallRounded__7d94b758",
                "progressbar--medium": "styles_module_progressbar_Medium__7d94b758",
                "progressbar--medium-rounded": "styles_module_progressbar_MediumRounded__7d94b758",
                "progressbar--large": "styles_module_progressbar_Large__7d94b758",
                "progressbar--large-rounded": "styles_module_progressbar_LargeRounded__7d94b758",
                progressbar__bar: "styles_module_progressbar__bar__7d94b758",
                "progressbar__bar--base-light": "styles_module_progressbar__bar_BaseLight__7d94b758",
                "progressbar__bar--base-dark": "styles_module_progressbar__bar_BaseDark__7d94b758",
                "progressbar__bar--base-light--looping": "styles_module_progressbar__bar_BaseLight_Looping__7d94b758",
                "progressbar__bar--base-dark--looping": "styles_module_progressbar__bar_BaseDark_Looping__7d94b758",
                loop: "styles_module_loop__7d94b758",
                "progressbar__bar--neutral-light": "styles_module_progressbar__bar_NeutralLight__7d94b758",
                "progressbar__bar--neutral-light--looping": "styles_module_progressbar__bar_NeutralLight_Looping__7d94b758",
                "progressbar__bar--neutral-dark": "styles_module_progressbar__bar_NeutralDark__7d94b758",
                "progressbar__bar--neutral-dark--looping": "styles_module_progressbar__bar_NeutralDark_Looping__7d94b758",
                "progressbar__bar--red-light": "styles_module_progressbar__bar_RedLight__7d94b758",
                "progressbar__bar--red-dark": "styles_module_progressbar__bar_RedDark__7d94b758",
                "progressbar__bar--red-light--looping": "styles_module_progressbar__bar_RedLight_Looping__7d94b758",
                "progressbar__bar--red-dark--looping": "styles_module_progressbar__bar_RedDark_Looping__7d94b758",
                "progressbar__bar--small": "styles_module_progressbar__bar_Small__7d94b758",
                "progressbar__bar--small-rounded": "styles_module_progressbar__bar_SmallRounded__7d94b758",
                "progressbar__bar--medium": "styles_module_progressbar__bar_Medium__7d94b758",
                "progressbar__bar--medium-rounded": "styles_module_progressbar__bar_MediumRounded__7d94b758",
                "progressbar__bar--large": "styles_module_progressbar__bar_Large__7d94b758",
                "progressbar__bar--large-rounded": "styles_module_progressbar__bar_LargeRounded__7d94b758"
            };
            let s = e => {
                var {
                    size: t = "medium",
                    value: a,
                    max: s = 100,
                    rounded: d = !0,
                    mode: u = "light",
                    appearance: c = "base"
                } = e, _ = (0, n.Tt)(e, ["size", "value", "max", "rounded", "mode", "appearance"]);
                let f = (0, o.useMemo)(() => "number" == typeof a ? a / s * 100 : void 0, [a, s]),
                    m = (0, o.useMemo)(() => "number" == typeof f ? `${Math.max(0,Math.min(100,Math.floor(f)))}%` : "100%", [f]);
                return (0, r.jsx)("div", Object.assign({
                    className: (0, i.A)(l.progressbar, l[`progressbar--${t}`], l[`progressbar--${c}-${u}`], d && l[`progressbar--${t}-rounded`]),
                    role: "progressbar",
                    "aria-valuenow": null != f ? f : 0,
                    "aria-valuemax": s
                }, _, {
                    children: (0, r.jsx)("figure", {
                        className: (0, i.A)(l.progressbar__bar, l[`progressbar__bar--${t}`], l[`progressbar__bar--${c}-${u}`], d && l[`progressbar__bar--${t}-rounded`], {
                            [`${l[`progressbar__bar--${c}-${u}--looping`]}`]: void 0 === a
                        }),
                        style: {
                            width: `${m}`
                        }
                    })
                }))
            }
        },
        84873: (e, t, a) => {
            "use strict";
            a.d(t, {
                AG: () => _,
                AZ: () => o,
                BN: () => s,
                Eo: () => d,
                Jh: () => n,
                R2: () => m,
                Wj: () => f,
                eE: () => l,
                fd: () => u,
                gf: () => c
            });
            var n, r = a(38356),
                i = a.n(r);
            ! function(e) {
                e.ON_LINK_CLICK = "on_link_click", e.ON_MOBILE_MENU_TOGGLE = "on_mobile_menu_toggle", e.ON_ACCOUNT_MENU_TOGGLE = "on_account_menu_toggle", e.ON_PRODUCT_UPDATES_DROPDOWN_TOGGLE = "on_product_updates_dropdown_toggle", e.ON_ACCORDION_TOGGLE = "on_accordion_toggle", e.ON_WORKSPACE_SELECT = "on_workspace_select", e.ON_LOGIN_CLICK = "on_login", e.ON_LOGOUT_CLICK = "on_logout"
            }(n || (n = {}));
            let o = new(i()),
                l = e => t => (o.emit(n.ON_LINK_CLICK, e, t), !t.defaultPrevented),
                s = e => t => (o.emit(n.ON_LOGIN_CLICK, e, t), !t.defaultPrevented),
                d = e => t => (o.emit(n.ON_LOGOUT_CLICK, e, t), !t.defaultPrevented),
                u = e => {
                    o.emit(n.ON_MOBILE_MENU_TOGGLE, e)
                },
                c = e => {
                    o.emit(n.ON_ACCOUNT_MENU_TOGGLE, e)
                },
                _ = e => {
                    o.emit(n.ON_PRODUCT_UPDATES_DROPDOWN_TOGGLE, e)
                },
                f = (e, t) => {
                    o.emit(n.ON_ACCORDION_TOGGLE, e, t)
                },
                m = e => t => (o.emit(n.ON_WORKSPACE_SELECT, e, t), !t.defaultPrevented)
        },
        85327: e => {
            e.exports = function(e, t, a, n) {
                for (var r = e.length, i = a + (n ? 1 : -1); n ? i-- : ++i < r;)
                    if (t(e[i], i, e)) return i;
                return -1
            }
        },
        87890: (e, t, a) => {
            var n = a(30442),
                r = a(29569),
                i = a(20815);
            e.exports = function(e) {
                return "function" != typeof e.constructor || i(e) ? {} : n(r(e))
            }
        },
        90396: (e, t, a) => {
            "use strict";
            a.d(t, {
                a: () => s
            });
            var n = a(13897),
                r = a(23798),
                i = a(71623),
                o = a(21462);
            (0, a(85752).$)(".styles_module_wtRadio__3f1fb64b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-clip:padding-box;background-color:hsla(0,0%,100%,.8);border:1px solid rgba(0,0,0,.2);border-radius:50%;cursor:pointer;height:1.5rem;width:1.5rem}.styles_module_wtRadio__3f1fb64b:hover{background-color:#fff}.styles_module_wtRadio__3f1fb64b:active{background-color:#fff;border-color:rgba(0,0,0,.5)}.styles_module_wtRadio__3f1fb64b:focus-visible{background-color:#fff;border-color:rgba(0,0,0,.8);outline:1px solid rgba(0,0,0,.8);outline-offset:0}.styles_module_wtRadio__3f1fb64b:disabled{opacity:50%;pointer-events:none}.styles_module_wtRadio__3f1fb64b:checked{animation:wt-radio-circle .2s ease;background-color:#3767ea;box-shadow:inset 0 0 0 5px #fff}.styles_module_wtRadio__3f1fb64b:checked:hover{background-color:#4e7df7}.styles_module_wtRadio__3f1fb64b:checked:active{background-color:#1842ce}@keyframes wt-radio-circle{0%{box-shadow:inset 0 0 0 .75rem #fff}to{box-shadow:inset 0 0 0 5px #fff}}");
            var l = {
                "wt-radio": "styles_module_wtRadio__3f1fb64b"
            };
            let s = (0, o.forwardRef)((e, t) => {
                var {
                    className: a
                } = e, o = (0, n.Tt)(e, ["className"]);
                return (0, r.jsx)("input", Object.assign({}, o, {
                    type: "radio",
                    className: (0, i.A)(l["wt-radio"], a),
                    ref: t
                }))
            });
            s.displayName = "RadioButton"
        },
        90742: function(e, t, a) {
            (function(e, t, a) {
                "use strict";

                function n(e) {
                    return e && "object" == typeof e && "default" in e ? e : {
                        default: e
                    }
                }
                var r = n(t),
                    i = n(a);

                function o(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
                    return n
                }

                function l(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), a.push.apply(a, n)
                    }
                    return a
                }

                function s(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? l(Object(a), !0).forEach(function(t) {
                            var n, r;
                            n = t, r = a[t], (n = function(e) {
                                var t = function(e, t) {
                                    if ("object" != typeof e || !e) return e;
                                    var a = e[Symbol.toPrimitive];
                                    if (void 0 !== a) {
                                        var n = a.call(e, t || "default");
                                        if ("object" != typeof n) return n;
                                        throw TypeError("@@toPrimitive must return a primitive value.")
                                    }
                                    return ("string" === t ? String : Number)(e)
                                }(e, "string");
                                return "symbol" == typeof t ? t : t + ""
                            }(n)) in e ? Object.defineProperty(e, n, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[n] = r
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : l(Object(a)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                        })
                    }
                    return e
                }

                function d(e, t) {
                    if (null == e) return {};
                    var a, n, r = function(e, t) {
                        if (null == e) return {};
                        var a = {};
                        for (var n in e)
                            if (({}).hasOwnProperty.call(e, n)) {
                                if (t.includes(n)) continue;
                                a[n] = e[n]
                            } return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < i.length; n++) a = i[n], t.includes(a) || ({}).propertyIsEnumerable.call(e, a) && (r[a] = e[a])
                    }
                    return r
                }
                var u = ["animationData", "loop", "autoplay", "initialSegment", "onComplete", "onLoopComplete", "onEnterFrame", "onSegmentStart", "onConfigReady", "onDataReady", "onDataFailed", "onLoadedImages", "onDOMLoaded", "onDestroy", "lottieRef", "renderer", "name", "assetsPath", "rendererSettings"],
                    c = function(e, t) {
                        var n, l = e.animationData,
                            c = e.loop,
                            _ = e.autoplay,
                            f = e.initialSegment,
                            m = e.onComplete,
                            g = e.onLoopComplete,
                            p = e.onEnterFrame,
                            h = e.onSegmentStart,
                            y = e.onConfigReady,
                            w = e.onDataReady,
                            b = e.onDataFailed,
                            v = e.onLoadedImages,
                            x = e.onDOMLoaded,
                            S = e.onDestroy;
                        e.lottieRef, e.renderer, e.name, e.assetsPath, e.rendererSettings;
                        var L = d(e, u),
                            k = function(e) {
                                if (Array.isArray(e)) return e
                            }(n = a.useState(!1)) || function(e, t) {
                                var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != a) {
                                    var n, r, i, o, l = [],
                                        s = !0,
                                        d = !1;
                                    try {
                                        i = (a = a.call(e)).next, !1;
                                        for (; !(s = (n = i.call(a)).done) && (l.push(n.value), l.length !== t); s = !0);
                                    } catch (e) {
                                        d = !0, r = e
                                    } finally {
                                        try {
                                            if (!s && null != a.return && (o = a.return(), Object(o) !== o)) return
                                        } finally {
                                            if (d) throw r
                                        }
                                    }
                                    return l
                                }
                            }(n, 2) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return o(e, 2);
                                    var a = ({}).toString.call(e).slice(8, -1);
                                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? o(e, t) : void 0
                                }
                            }(n, 2) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(),
                            T = k[0],
                            B = k[1],
                            D = a.useRef(),
                            H = a.useRef(null),
                            N = function() {
                                var t, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if (H.current) {
                                    null == (t = D.current) || t.destroy();
                                    var n = s(s(s({}, e), a), {}, {
                                        container: H.current
                                    });
                                    return D.current = r.default.loadAnimation(n), B(!!D.current),
                                        function() {
                                            var e;
                                            null == (e = D.current) || e.destroy(), D.current = void 0
                                        }
                                }
                            };
                        return a.useEffect(function() {
                            var e = N();
                            return function() {
                                return null == e ? void 0 : e()
                            }
                        }, [l, c]), a.useEffect(function() {
                            D.current && (D.current.autoplay = !!_)
                        }, [_]), a.useEffect(function() {
                            if (D.current) {
                                if (!f) return void D.current.resetSegments(!0);
                                Array.isArray(f) && f.length && ((D.current.currentRawFrame < f[0] || D.current.currentRawFrame > f[1]) && (D.current.currentRawFrame = f[0]), D.current.setSegment(f[0], f[1]))
                            }
                        }, [f]), a.useEffect(function() {
                            var e = [{
                                name: "complete",
                                handler: m
                            }, {
                                name: "loopComplete",
                                handler: g
                            }, {
                                name: "enterFrame",
                                handler: p
                            }, {
                                name: "segmentStart",
                                handler: h
                            }, {
                                name: "config_ready",
                                handler: y
                            }, {
                                name: "data_ready",
                                handler: w
                            }, {
                                name: "data_failed",
                                handler: b
                            }, {
                                name: "loaded_images",
                                handler: v
                            }, {
                                name: "DOMLoaded",
                                handler: x
                            }, {
                                name: "destroy",
                                handler: S
                            }].filter(function(e) {
                                return null != e.handler
                            });
                            if (e.length) {
                                var t = e.map(function(e) {
                                    var t;
                                    return null == (t = D.current) || t.addEventListener(e.name, e.handler),
                                        function() {
                                            var t;
                                            null == (t = D.current) || t.removeEventListener(e.name, e.handler)
                                        }
                                });
                                return function() {
                                    t.forEach(function(e) {
                                        return e()
                                    })
                                }
                            }
                        }, [m, g, p, h, y, w, b, v, x, S]), {
                            View: i.default.createElement("div", s({
                                style: t,
                                ref: H
                            }, L)),
                            play: function() {
                                var e;
                                null == (e = D.current) || e.play()
                            },
                            stop: function() {
                                var e;
                                null == (e = D.current) || e.stop()
                            },
                            pause: function() {
                                var e;
                                null == (e = D.current) || e.pause()
                            },
                            setSpeed: function(e) {
                                var t;
                                null == (t = D.current) || t.setSpeed(e)
                            },
                            goToAndStop: function(e, t) {
                                var a;
                                null == (a = D.current) || a.goToAndStop(e, t)
                            },
                            goToAndPlay: function(e, t) {
                                var a;
                                null == (a = D.current) || a.goToAndPlay(e, t)
                            },
                            setDirection: function(e) {
                                var t;
                                null == (t = D.current) || t.setDirection(e)
                            },
                            playSegments: function(e, t) {
                                var a;
                                null == (a = D.current) || a.playSegments(e, t)
                            },
                            setSubframe: function(e) {
                                var t;
                                null == (t = D.current) || t.setSubframe(e)
                            },
                            getDuration: function(e) {
                                var t;
                                return null == (t = D.current) ? void 0 : t.getDuration(e)
                            },
                            destroy: function() {
                                var e;
                                null == (e = D.current) || e.destroy(), D.current = void 0
                            },
                            animationContainerRef: H,
                            animationLoaded: T,
                            animationItem: D.current
                        }
                    },
                    _ = function(e) {
                        var t = e.wrapperRef,
                            n = e.animationItem,
                            r = e.mode,
                            i = e.actions;
                        a.useEffect(function() {
                            var e, a, o, l, s, d = t.current;
                            if (d && n && i.length) switch (n.stop(), r) {
                                case "scroll":
                                    return e = null, a = function() {
                                            var t, a, r, o = (a = (t = d.getBoundingClientRect()).top, r = t.height, (window.innerHeight - a) / (window.innerHeight + r)),
                                                l = i.find(function(e) {
                                                    var t = e.visibility;
                                                    return t && o >= t[0] && o <= t[1]
                                                });
                                            if (l) {
                                                if ("seek" === l.type && l.visibility && 2 === l.frames.length) {
                                                    var s = l.frames[0] + Math.ceil((o - l.visibility[0]) / (l.visibility[1] - l.visibility[0]) * l.frames[1]);
                                                    n.goToAndStop(s - n.firstFrame - 1, !0)
                                                }
                                                "loop" === l.type && (null === e || e !== l.frames ? (n.playSegments(l.frames, !0), e = l.frames) : n.isPaused && (n.playSegments(l.frames, !0), e = l.frames)), "play" === l.type && n.isPaused && (n.resetSegments(!0), n.play()), "stop" === l.type && n.goToAndStop(l.frames[0] - n.firstFrame - 1, !0)
                                            }
                                        }, document.addEventListener("scroll", a),
                                        function() {
                                            document.removeEventListener("scroll", a)
                                        };
                                case "cursor":
                                    return o = function(e, t) {
                                            var a = e,
                                                r = t;
                                            if (-1 !== a && -1 !== r) {
                                                var o, l, s, u, c, _ = (o = a, l = r, u = (s = d.getBoundingClientRect()).top, c = s.left, {
                                                    x: (o - c) / s.width,
                                                    y: (l - u) / s.height
                                                });
                                                a = _.x, r = _.y
                                            }
                                            var f = i.find(function(e) {
                                                var t = e.position;
                                                return t && Array.isArray(t.x) && Array.isArray(t.y) ? a >= t.x[0] && a <= t.x[1] && r >= t.y[0] && r <= t.y[1] : !(!t || Number.isNaN(t.x) || Number.isNaN(t.y)) && a === t.x && r === t.y
                                            });
                                            if (f) {
                                                if ("seek" === f.type && f.position && Array.isArray(f.position.x) && Array.isArray(f.position.y) && 2 === f.frames.length) {
                                                    var m = (a - f.position.x[0]) / (f.position.x[1] - f.position.x[0]),
                                                        g = (r - f.position.y[0]) / (f.position.y[1] - f.position.y[0]);
                                                    n.playSegments(f.frames, !0), n.goToAndStop(Math.ceil((m + g) / 2 * (f.frames[1] - f.frames[0])), !0)
                                                }
                                                "loop" === f.type && n.playSegments(f.frames, !0), "play" === f.type && (n.isPaused && n.resetSegments(!1), n.playSegments(f.frames)), "stop" === f.type && n.goToAndStop(f.frames[0], !0)
                                            }
                                        }, l = function(e) {
                                            o(e.clientX, e.clientY)
                                        }, s = function() {
                                            o(-1, -1)
                                        }, d.addEventListener("mousemove", l), d.addEventListener("mouseout", s),
                                        function() {
                                            d.removeEventListener("mousemove", l), d.removeEventListener("mouseout", s)
                                        }
                            }
                        }, [r, n])
                    },
                    f = function(e) {
                        var t = e.actions,
                            a = e.mode,
                            n = e.lottieObj,
                            r = n.animationItem,
                            i = n.View;
                        return _({
                            actions: t,
                            animationItem: r,
                            mode: a,
                            wrapperRef: n.animationContainerRef
                        }), i
                    },
                    m = ["style", "interactivity"];
                Object.defineProperty(e, "LottiePlayer", {
                    enumerable: !0,
                    get: function() {
                        return r.default
                    }
                }), e.default = function(e) {
                    var t, n, r, i = e.style,
                        o = e.interactivity,
                        l = c(d(e, m), i),
                        s = l.View,
                        u = l.play,
                        _ = l.stop,
                        g = l.pause,
                        p = l.setSpeed,
                        h = l.goToAndStop,
                        y = l.goToAndPlay,
                        w = l.setDirection,
                        b = l.playSegments,
                        v = l.setSubframe,
                        x = l.getDuration,
                        S = l.destroy,
                        L = l.animationContainerRef,
                        k = l.animationLoaded,
                        T = l.animationItem;
                    return a.useEffect(function() {
                        e.lottieRef && (e.lottieRef.current = {
                            play: u,
                            stop: _,
                            pause: g,
                            setSpeed: p,
                            goToAndPlay: y,
                            goToAndStop: h,
                            setDirection: w,
                            playSegments: b,
                            setSubframe: v,
                            getDuration: x,
                            destroy: S,
                            animationContainerRef: L,
                            animationLoaded: k,
                            animationItem: T
                        })
                    }, [null == (t = e.lottieRef) ? void 0 : t.current]), f({
                        lottieObj: {
                            View: s,
                            play: u,
                            stop: _,
                            pause: g,
                            setSpeed: p,
                            goToAndStop: h,
                            goToAndPlay: y,
                            setDirection: w,
                            playSegments: b,
                            setSubframe: v,
                            getDuration: x,
                            destroy: S,
                            animationContainerRef: L,
                            animationLoaded: k,
                            animationItem: T
                        },
                        actions: null != (n = null == o ? void 0 : o.actions) ? n : [],
                        mode: null != (r = null == o ? void 0 : o.mode) ? r : "scroll"
                    })
                }, e.useLottie = c, e.useLottieInteractivity = f, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            })(t, a(76520), a(21462))
        },
        91292: (e, t) => {
            "use strict";
            t.A = function(e, t) {
                if (e && t) {
                    var a = Array.isArray(t) ? t : t.split(",");
                    if (0 === a.length) return !0;
                    var n = e.name || "",
                        r = (e.type || "").toLowerCase(),
                        i = r.replace(/\/.*$/, "");
                    return a.some(function(e) {
                        var t = e.trim().toLowerCase();
                        return "." === t.charAt(0) ? n.toLowerCase().endsWith(t) : t.endsWith("/*") ? i === t.replace(/\/.*$/, "") : r === t
                    })
                }
                return !0
            }
        },
        91826: (e, t, a) => {
            var n = a(28300),
                r = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, n(e) + 1).replace(r, "") : e
            }
        },
        92088: (e, t, a) => {
            e = a.nmd(e);
            var n, r, i = "__lodash_hash_undefined__",
                o = "[object Arguments]",
                l = "[object Array]",
                s = "[object Boolean]",
                d = "[object Date]",
                u = "[object Error]",
                c = "[object Function]",
                _ = "[object Map]",
                f = "[object Number]",
                m = "[object Object]",
                g = "[object Promise]",
                p = "[object RegExp]",
                h = "[object Set]",
                y = "[object String]",
                w = "[object WeakMap]",
                b = "[object ArrayBuffer]",
                v = "[object DataView]",
                x = /^\[object .+?Constructor\]$/,
                S = /^(?:0|[1-9]\d*)$/,
                L = {};
            L["[object Float32Array]"] = L["[object Float64Array]"] = L["[object Int8Array]"] = L["[object Int16Array]"] = L["[object Int32Array]"] = L["[object Uint8Array]"] = L["[object Uint8ClampedArray]"] = L["[object Uint16Array]"] = L["[object Uint32Array]"] = !0, L[o] = L[l] = L[b] = L[s] = L[v] = L[d] = L[u] = L[c] = L[_] = L[f] = L[m] = L[p] = L[h] = L[y] = L[w] = !1;
            var k = "object" == typeof a.g && a.g && a.g.Object === Object && a.g,
                T = "object" == typeof self && self && self.Object === Object && self,
                B = k || T || Function("return this")(),
                D = t && !t.nodeType && t,
                H = D && e && !e.nodeType && e,
                N = H && H.exports === D,
                P = N && k.process,
                C = function() {
                    try {
                        return P && P.binding && P.binding("util")
                    } catch (e) {}
                }(),
                A = C && C.isTypedArray;

            function E(e) {
                var t = -1,
                    a = Array(e.size);
                return e.forEach(function(e, n) {
                    a[++t] = [n, e]
                }), a
            }

            function M(e) {
                var t = -1,
                    a = Array(e.size);
                return e.forEach(function(e) {
                    a[++t] = e
                }), a
            }
            var j = Array.prototype,
                O = Function.prototype,
                z = Object.prototype,
                R = B["__core-js_shared__"],
                W = O.toString,
                I = z.hasOwnProperty,
                F = function() {
                    var e = /[^.]+$/.exec(R && R.keys && R.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }(),
                U = z.toString,
                $ = RegExp("^" + W.call(I).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                X = N ? B.Buffer : void 0,
                q = B.Symbol,
                V = B.Uint8Array,
                G = z.propertyIsEnumerable,
                K = j.splice,
                Y = q ? q.toStringTag : void 0,
                J = Object.getOwnPropertySymbols,
                Q = X ? X.isBuffer : void 0,
                Z = (n = Object.keys, r = Object, function(e) {
                    return n(r(e))
                }),
                ee = eL(B, "DataView"),
                et = eL(B, "Map"),
                ea = eL(B, "Promise"),
                en = eL(B, "Set"),
                er = eL(B, "WeakMap"),
                ei = eL(Object, "create"),
                eo = eB(ee),
                el = eB(et),
                es = eB(ea),
                ed = eB(en),
                eu = eB(er),
                ec = q ? q.prototype : void 0,
                e_ = ec ? ec.valueOf : void 0;

            function ef(e) {
                var t = -1,
                    a = null == e ? 0 : e.length;
                for (this.clear(); ++t < a;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function em(e) {
                var t = -1,
                    a = null == e ? 0 : e.length;
                for (this.clear(); ++t < a;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function eg(e) {
                var t = -1,
                    a = null == e ? 0 : e.length;
                for (this.clear(); ++t < a;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function ep(e) {
                var t = -1,
                    a = null == e ? 0 : e.length;
                for (this.__data__ = new eg; ++t < a;) this.add(e[t])
            }

            function eh(e) {
                var t = this.__data__ = new em(e);
                this.size = t.size
            }

            function ey(e, t) {
                for (var a = e.length; a--;)
                    if (eD(e[a][0], t)) return a;
                return -1
            }

            function ew(e) {
                var t;
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Y && Y in Object(e) ? function(e) {
                    var t = I.call(e, Y),
                        a = e[Y];
                    try {
                        e[Y] = void 0;
                        var n = !0
                    } catch (e) {}
                    var r = U.call(e);
                    return n && (t ? e[Y] = a : delete e[Y]), r
                }(e) : (t = e, U.call(t))
            }

            function eb(e) {
                return eM(e) && ew(e) == o
            }

            function ev(e, t, a, n, r, i) {
                var o = 1 & a,
                    l = e.length,
                    s = t.length;
                if (l != s && !(o && s > l)) return !1;
                var d = i.get(e);
                if (d && i.get(t)) return d == t;
                var u = -1,
                    c = !0,
                    _ = 2 & a ? new ep : void 0;
                for (i.set(e, t), i.set(t, e); ++u < l;) {
                    var f = e[u],
                        m = t[u];
                    if (n) var g = o ? n(m, f, u, t, e, i) : n(f, m, u, e, t, i);
                    if (void 0 !== g) {
                        if (g) continue;
                        c = !1;
                        break
                    }
                    if (_) {
                        if (! function(e, t) {
                                for (var a = -1, n = null == e ? 0 : e.length; ++a < n;)
                                    if (t(e[a], a, e)) return !0;
                                return !1
                            }(t, function(e, t) {
                                if (!_.has(t) && (f === e || r(f, e, a, n, i))) return _.push(t)
                            })) {
                            c = !1;
                            break
                        }
                    } else if (!(f === m || r(f, m, a, n, i))) {
                        c = !1;
                        break
                    }
                }
                return i.delete(e), i.delete(t), c
            }

            function ex(e) {
                var t;
                return t = eO(e), eN(e) ? t : function(e, t) {
                    for (var a = -1, n = t.length, r = e.length; ++a < n;) e[r + a] = t[a];
                    return e
                }(t, ek(e))
            }

            function eS(e, t) {
                var a, n, r = e.__data__;
                return ("string" == (n = typeof(a = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== a : null === a) ? r["string" == typeof t ? "string" : "hash"] : r.map
            }

            function eL(e, t) {
                var a, n = null == e ? void 0 : e[t];
                return !(!eE(n) || (a = n, F && F in a)) && (eC(n) ? $ : x).test(eB(n)) ? n : void 0
            }
            ef.prototype.clear = function() {
                this.__data__ = ei ? ei(null) : {}, this.size = 0
            }, ef.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= !!t, t
            }, ef.prototype.get = function(e) {
                var t = this.__data__;
                if (ei) {
                    var a = t[e];
                    return a === i ? void 0 : a
                }
                return I.call(t, e) ? t[e] : void 0
            }, ef.prototype.has = function(e) {
                var t = this.__data__;
                return ei ? void 0 !== t[e] : I.call(t, e)
            }, ef.prototype.set = function(e, t) {
                var a = this.__data__;
                return this.size += +!this.has(e), a[e] = ei && void 0 === t ? i : t, this
            }, em.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, em.prototype.delete = function(e) {
                var t = this.__data__,
                    a = ey(t, e);
                return !(a < 0) && (a == t.length - 1 ? t.pop() : K.call(t, a, 1), --this.size, !0)
            }, em.prototype.get = function(e) {
                var t = this.__data__,
                    a = ey(t, e);
                return a < 0 ? void 0 : t[a][1]
            }, em.prototype.has = function(e) {
                return ey(this.__data__, e) > -1
            }, em.prototype.set = function(e, t) {
                var a = this.__data__,
                    n = ey(a, e);
                return n < 0 ? (++this.size, a.push([e, t])) : a[n][1] = t, this
            }, eg.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new ef,
                    map: new(et || em),
                    string: new ef
                }
            }, eg.prototype.delete = function(e) {
                var t = eS(this, e).delete(e);
                return this.size -= !!t, t
            }, eg.prototype.get = function(e) {
                return eS(this, e).get(e)
            }, eg.prototype.has = function(e) {
                return eS(this, e).has(e)
            }, eg.prototype.set = function(e, t) {
                var a = eS(this, e),
                    n = a.size;
                return a.set(e, t), this.size += +(a.size != n), this
            }, ep.prototype.add = ep.prototype.push = function(e) {
                return this.__data__.set(e, i), this
            }, ep.prototype.has = function(e) {
                return this.__data__.has(e)
            }, eh.prototype.clear = function() {
                this.__data__ = new em, this.size = 0
            }, eh.prototype.delete = function(e) {
                var t = this.__data__,
                    a = t.delete(e);
                return this.size = t.size, a
            }, eh.prototype.get = function(e) {
                return this.__data__.get(e)
            }, eh.prototype.has = function(e) {
                return this.__data__.has(e)
            }, eh.prototype.set = function(e, t) {
                var a = this.__data__;
                if (a instanceof em) {
                    var n = a.__data__;
                    if (!et || n.length < 199) return n.push([e, t]), this.size = ++a.size, this;
                    a = this.__data__ = new eg(n)
                }
                return a.set(e, t), this.size = a.size, this
            };
            var ek = J ? function(e) {
                    return null == e ? [] : function(e, t) {
                        for (var a = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++a < n;) {
                            var o = e[a];
                            t(o, a, e) && (i[r++] = o)
                        }
                        return i
                    }(J(e = Object(e)), function(t) {
                        return G.call(e, t)
                    })
                } : function() {
                    return []
                },
                eT = ew;

            function eB(e) {
                if (null != e) {
                    try {
                        return W.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }

            function eD(e, t) {
                return e === t || e != e && t != t
            }(ee && eT(new ee(new ArrayBuffer(1))) != v || et && eT(new et) != _ || ea && eT(ea.resolve()) != g || en && eT(new en) != h || er && eT(new er) != w) && (eT = function(e) {
                var t = ew(e),
                    a = t == m ? e.constructor : void 0,
                    n = a ? eB(a) : "";
                if (n) switch (n) {
                    case eo:
                        return v;
                    case el:
                        return _;
                    case es:
                        return g;
                    case ed:
                        return h;
                    case eu:
                        return w
                }
                return t
            });
            var eH = eb(function() {
                    return arguments
                }()) ? eb : function(e) {
                    return eM(e) && I.call(e, "callee") && !G.call(e, "callee")
                },
                eN = Array.isArray,
                eP = Q || function() {
                    return !1
                };

            function eC(e) {
                if (!eE(e)) return !1;
                var t = ew(e);
                return t == c || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }

            function eA(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff
            }

            function eE(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function eM(e) {
                return null != e && "object" == typeof e
            }
            var ej = A ? function(e) {
                return A(e)
            } : function(e) {
                return eM(e) && eA(e.length) && !!L[ew(e)]
            };

            function eO(e) {
                return null != e && eA(e.length) && !eC(e) ? function(e, t) {
                    var a, n, r = eN(e),
                        i = !r && eH(e),
                        o = !r && !i && eP(e),
                        l = !r && !i && !o && ej(e),
                        s = r || i || o || l,
                        d = s ? function(e, t) {
                            for (var a = -1, n = Array(e); ++a < e;) n[a] = t(a);
                            return n
                        }(e.length, String) : [],
                        u = d.length;
                    for (var c in e) {
                        I.call(e, c) && !(s && ("length" == c || o && ("offset" == c || "parent" == c) || l && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || (a = c, (n = null == (n = u) ? 0x1fffffffffffff : n) && ("number" == typeof a || S.test(a)) && a > -1 && a % 1 == 0 && a < n))) && d.push(c)
                    }
                    return d
                }(e) : function(e) {
                    if (a = (t = e) && t.constructor, t !== ("function" == typeof a && a.prototype || z)) return Z(e);
                    var t, a, n = [];
                    for (var r in Object(e)) I.call(e, r) && "constructor" != r && n.push(r);
                    return n
                }(e)
            }
            e.exports = function(e, t) {
                return function e(t, a, n, r, i) {
                    return t === a || (null != t && null != a && (eM(t) || eM(a)) ? function(e, t, a, n, r, i) {
                        var c = eN(e),
                            g = eN(t),
                            w = c ? l : eT(e),
                            x = g ? l : eT(t);
                        w = w == o ? m : w, x = x == o ? m : x;
                        var S = w == m,
                            L = x == m,
                            k = w == x;
                        if (k && eP(e)) {
                            if (!eP(t)) return !1;
                            c = !0, S = !1
                        }
                        if (k && !S) return i || (i = new eh), c || ej(e) ? ev(e, t, a, n, r, i) : function(e, t, a, n, r, i, o) {
                            switch (a) {
                                case v:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                    e = e.buffer, t = t.buffer;
                                case b:
                                    if (e.byteLength != t.byteLength || !i(new V(e), new V(t))) break;
                                    return !0;
                                case s:
                                case d:
                                case f:
                                    return eD(+e, +t);
                                case u:
                                    return e.name == t.name && e.message == t.message;
                                case p:
                                case y:
                                    return e == t + "";
                                case _:
                                    var l = E;
                                case h:
                                    var c = 1 & n;
                                    if (l || (l = M), e.size != t.size && !c) break;
                                    var m = o.get(e);
                                    if (m) return m == t;
                                    n |= 2, o.set(e, t);
                                    var g = ev(l(e), l(t), n, r, i, o);
                                    return o.delete(e), g;
                                case "[object Symbol]":
                                    if (e_) return e_.call(e) == e_.call(t)
                            }
                            return !1
                        }(e, t, w, a, n, r, i);
                        if (!(1 & a)) {
                            var T = S && I.call(e, "__wrapped__"),
                                B = L && I.call(t, "__wrapped__");
                            if (T || B) {
                                var D = T ? e.value() : e,
                                    H = B ? t.value() : t;
                                return i || (i = new eh), r(D, H, a, n, i)
                            }
                        }
                        return !!k && (i || (i = new eh), function(e, t, a, n, r, i) {
                            var o = 1 & a,
                                l = ex(e),
                                s = l.length;
                            if (s != ex(t).length && !o) return !1;
                            for (var d = s; d--;) {
                                var u = l[d];
                                if (!(o ? u in t : I.call(t, u))) return !1
                            }
                            var c = i.get(e);
                            if (c && i.get(t)) return c == t;
                            var _ = !0;
                            i.set(e, t), i.set(t, e);
                            for (var f = o; ++d < s;) {
                                var m = e[u = l[d]],
                                    g = t[u];
                                if (n) var p = o ? n(g, m, u, t, e, i) : n(m, g, u, e, t, i);
                                if (!(void 0 === p ? m === g || r(m, g, a, n, i) : p)) {
                                    _ = !1;
                                    break
                                }
                                f || (f = "constructor" == u)
                            }
                            if (_ && !f) {
                                var h = e.constructor,
                                    y = t.constructor;
                                h != y && "constructor" in e && "constructor" in t && !("function" == typeof h && h instanceof h && "function" == typeof y && y instanceof y) && (_ = !1)
                            }
                            return i.delete(e), i.delete(t), _
                        }(e, t, a, n, r, i))
                    }(t, a, n, r, e, i) : t != t && a != a)
                }(e, t)
            }
        },
        92651: (e, t, a) => {
            var n = a(85327),
                r = a(17747),
                i = a(77959);
            e.exports = function(e, t, a) {
                return t == t ? i(e, t, a) : n(e, r, a)
            }
        },
        93549: (e, t, a) => {
            "use strict";
            e.exports = a(8399)
        },
        94236: function(e, t, a) {
            "use strict";
            var n, r = this && this.__extends || (n = function(e, t) {
                    return (n = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    })(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function a() {
                        this.constructor = e
                    }
                    n(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
                }),
                i = this && this.__assign || function() {
                    return (i = Object.assign || function(e) {
                        for (var t, a = 1, n = arguments.length; a < n; a++)
                            for (var r in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.QRCode = void 0;
            var o = a(92088),
                l = a(77101),
                s = a(21462);
            t.QRCode = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.canvasRef = s.createRef(), a
                }
                return r(t, e), t.prototype.download = function(e, t) {
                    if (this.canvasRef.current) {
                        var a = void 0;
                        switch (e) {
                            case "jpg":
                                a = "image/jpeg";
                                break;
                            case "webp":
                                a = "image/webp";
                                break;
                            default:
                                a = "image/png"
                        }
                        var n = this.canvasRef.current.toDataURL(a, 1),
                            r = document.createElement("a");
                        r.download = null != t ? t : "react-qrcode-logo", r.href = n, r.click()
                    }
                }, t.prototype.utf16to8 = function(e) {
                    var t, a, n = "",
                        r = e.length;
                    for (t = 0; t < r; t++)(a = e.charCodeAt(t)) >= 1 && a <= 127 ? n += e.charAt(t) : (a > 2047 ? (n += String.fromCharCode(224 | a >> 12 & 15), n += String.fromCharCode(128 | a >> 6 & 63)) : n += String.fromCharCode(192 | a >> 6 & 31), n += String.fromCharCode(128 | (0 | a) & 63));
                    return n
                }, t.prototype.drawRoundedSquare = function(e, t, a, n, r, i, o, l) {
                    l.lineWidth = e, l.fillStyle = r, l.strokeStyle = r, a += e / 2, t += e / 2, n -= e, Array.isArray(i) || (i = [i, i, i, i]);
                    var s = (i = i.map(function(e) {
                            return (e = Math.min(e, n / 2)) < 0 ? 0 : e
                        }))[0] || 0,
                        d = i[1] || 0,
                        u = i[2] || 0,
                        c = i[3] || 0;
                    l.beginPath(), l.moveTo(t + s, a), l.lineTo(t + n - d, a), d && l.quadraticCurveTo(t + n, a, t + n, a + d), l.lineTo(t + n, a + n - u), u && l.quadraticCurveTo(t + n, a + n, t + n - u, a + n), l.lineTo(t + c, a + n), c && l.quadraticCurveTo(t, a + n, t, a + n - c), l.lineTo(t, a + s), s && l.quadraticCurveTo(t, a, t + s, a), l.closePath(), l.stroke(), o && l.fill()
                }, t.prototype.drawPositioningPattern = function(e, t, a, n, r, i, o) {
                    void 0 === o && (o = [0, 0, 0, 0]);
                    var l, s, d, u, c = Math.ceil(t);
                    "number" == typeof o || Array.isArray(o) ? s = l = o : (l = o.outer || 0, s = o.inner || 0), "string" != typeof i ? (d = i.outer, u = i.inner) : (d = i, u = i);
                    var _ = n * t + a,
                        f = r * t + a,
                        m = 7 * t;
                    this.drawRoundedSquare(c, f, _, m, d, l, !1, e), m = 3 * t, _ += 2 * t, f += 2 * t, this.drawRoundedSquare(c, f, _, m, u, s, !0, e)
                }, t.prototype.isInPositioninZone = function(e, t, a) {
                    return a.some(function(a) {
                        return t >= a.row && t <= a.row + 7 && e >= a.col && e <= a.col + 7
                    })
                }, t.prototype.transformPixelLengthIntoNumberOfCells = function(e, t) {
                    return e / t
                }, t.prototype.isCoordinateInImage = function(e, t, a, n, r, i, o, l) {
                    if (!l) return !1;
                    var s = this.transformPixelLengthIntoNumberOfCells(r, o),
                        d = this.transformPixelLengthIntoNumberOfCells(i, o),
                        u = this.transformPixelLengthIntoNumberOfCells(a, o) - 1,
                        c = this.transformPixelLengthIntoNumberOfCells(n, o) - 1;
                    return t >= s - 2 && t <= s + u + 2 && e >= d - 2 && e <= d + c + 2
                }, t.prototype.shouldComponentUpdate = function(e) {
                    return !o(this.props, e)
                }, t.prototype.componentDidMount = function() {
                    this.update()
                }, t.prototype.componentDidUpdate = function() {
                    this.update()
                }, t.prototype.update = function() {
                    var e, t = this.props,
                        a = t.value,
                        n = t.ecLevel,
                        r = t.enableCORS,
                        i = t.bgColor,
                        o = t.fgColor,
                        s = t.logoImage,
                        d = t.logoOpacity,
                        u = t.logoOnLoad,
                        c = t.removeQrCodeBehindLogo,
                        _ = t.qrStyle,
                        f = t.eyeRadius,
                        m = t.eyeColor,
                        g = t.logoPaddingStyle,
                        p = +this.props.size,
                        h = +this.props.quietZone,
                        y = this.props.logoWidth ? +this.props.logoWidth : 0,
                        w = this.props.logoHeight ? +this.props.logoHeight : 0,
                        b = this.props.logoPadding ? +this.props.logoPadding : 0,
                        v = l(0, n);
                    v.addData(this.utf16to8(a)), v.make();
                    var x = null == (e = this.canvasRef) ? void 0 : e.current,
                        S = x.getContext("2d"),
                        L = p + 2 * h,
                        k = v.getModuleCount(),
                        T = p / k,
                        B = window.devicePixelRatio || 1;
                    x.height = x.width = L * B, S.scale(B, B), S.fillStyle = i, S.fillRect(0, 0, L, L);
                    var D = [{
                        row: 0,
                        col: 0
                    }, {
                        row: 0,
                        col: k - 7
                    }, {
                        row: k - 7,
                        col: 0
                    }];
                    if (S.strokeStyle = o, "dots" === _) {
                        S.fillStyle = o;
                        for (var H = T / 2, N = 0; N < k; N++)
                            for (var P = 0; P < k; P++) v.isDark(N, P) && !this.isInPositioninZone(N, P, D) && (S.beginPath(), S.arc(Math.round(P * T) + H + h, Math.round(N * T) + H + h, H / 100 * 75, 0, 2 * Math.PI, !1), S.closePath(), S.fill())
                    } else if ("fluid" === _) {
                        for (var H = Math.ceil(T / 2), N = 0; N < k; N++)
                            for (var P = 0; P < k; P++)
                                if (v.isDark(N, P) && !this.isInPositioninZone(N, P, D)) {
                                    var C = [!1, !1, !1, !1];
                                    N > 0 && !v.isDark(N - 1, P) && P > 0 && !v.isDark(N, P - 1) && (C[0] = !0), N > 0 && !v.isDark(N - 1, P) && P < k - 1 && !v.isDark(N, P + 1) && (C[1] = !0), N < k - 1 && !v.isDark(N + 1, P) && P < k - 1 && !v.isDark(N, P + 1) && (C[2] = !0), N < k - 1 && !v.isDark(N + 1, P) && P > 0 && !v.isDark(N, P - 1) && (C[3] = !0);
                                    var A = Math.ceil((P + 1) * T) - Math.floor(P * T),
                                        E = Math.ceil((N + 1) * T) - Math.floor(N * T);
                                    S.fillStyle = o, S.beginPath(), S.arc(Math.round(P * T) + H + h, Math.round(N * T) + H + h, H, 0, 2 * Math.PI, !1), S.closePath(), S.fill(), C[0] || S.fillRect(Math.round(P * T) + h, Math.round(N * T) + h, A / 2, E / 2), C[1] || S.fillRect(Math.round(P * T) + h + Math.floor(A / 2), Math.round(N * T) + h, A / 2, E / 2), C[2] || S.fillRect(Math.round(P * T) + h + Math.floor(A / 2), Math.round(N * T) + h + Math.floor(E / 2), A / 2, E / 2), C[3] || S.fillRect(Math.round(P * T) + h, Math.round(N * T) + h + Math.floor(E / 2), A / 2, E / 2)
                                }
                    } else
                        for (var N = 0; N < k; N++)
                            for (var P = 0; P < k; P++)
                                if (v.isDark(N, P) && !this.isInPositioninZone(N, P, D)) {
                                    S.fillStyle = o;
                                    var A = Math.ceil((P + 1) * T) - Math.floor(P * T),
                                        E = Math.ceil((N + 1) * T) - Math.floor(N * T);
                                    S.fillRect(Math.round(P * T) + h, Math.round(N * T) + h, A, E)
                                } for (var M = 0; M < 3; M++) {
                        var j = D[M],
                            N = j.row,
                            P = j.col,
                            O = f,
                            z = void 0;
                        Array.isArray(O) && (O = O[M]), "number" == typeof O && (O = [O, O, O, O]), z = m ? Array.isArray(m) ? m[M] : m : o, this.drawPositioningPattern(S, T, h, N, P, z, O)
                    }
                    if (s) {
                        var R = new Image;
                        r && (R.crossOrigin = "Anonymous"), R.onload = function(e) {
                            S.save();
                            var t = y || .2 * p,
                                a = w || t,
                                n = (p - t) / 2,
                                r = (p - a) / 2;
                            if (c || b) {
                                S.beginPath(), S.strokeStyle = i, S.fillStyle = i;
                                var o = t + 2 * b,
                                    l = a + 2 * b,
                                    s = n + h - b,
                                    _ = r + h - b;
                                "circle" === g ? (S.ellipse(s + o / 2, _ + l / 2, o / 2, l / 2, 0, 0, 2 * Math.PI), S.stroke(), S.fill()) : S.fillRect(s, _, o, l)
                            }
                            S.globalAlpha = d, S.drawImage(R, n + h, r + h, t, a), S.restore(), u && u(e)
                        }, R.src = s
                    }
                }, t.prototype.render = function() {
                    var e, t = +this.props.size + 2 * this.props.quietZone;
                    return s.createElement("canvas", {
                        id: null != (e = this.props.id) ? e : "react-qrcode-logo",
                        height: t,
                        width: t,
                        style: i({
                            height: t + "px",
                            width: t + "px"
                        }, this.props.style),
                        ref: this.canvasRef
                    })
                }, t.defaultProps = {
                    value: "https://reactjs.org/",
                    ecLevel: "M",
                    enableCORS: !1,
                    size: 150,
                    quietZone: 10,
                    bgColor: "#FFFFFF",
                    fgColor: "#000000",
                    logoOpacity: 1,
                    qrStyle: "squares",
                    eyeRadius: [0, 0, 0],
                    logoPaddingStyle: "square"
                }, t
            }(s.Component)
        },
        94715: (e, t, a) => {
            "use strict";
            a.d(t, {
                E_: () => r,
                Iu: () => u,
                Jv: () => o,
                Rv: () => _,
                VN: () => l,
                Y1: () => d,
                eD: () => f,
                oR: () => c,
                rO: () => s,
                we: () => n,
                z2: () => i
            });
            let n = () => (async e => {
                    try {
                        return (await WebAssembly.instantiate(e)).instance.exports.b(BigInt(0)) === BigInt(0)
                    } catch (e) {
                        return !1
                    }
                })(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 126, 1, 126, 3, 2, 1, 0, 7, 5, 1, 1, 98, 0, 0, 10, 6, 1, 4, 0, 32, 0, 11])),
                r = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11])), i = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 6, 64, 25, 11, 11])), o = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 0, 2, 127, 127, 3, 2, 1, 0, 10, 8, 1, 6, 0, 65, 0, 65, 0, 11])), l = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 2, 8, 1, 1, 97, 1, 98, 3, 127, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 5, 1, 1, 97, 3, 1])), s = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 7, 1, 5, 0, 208, 112, 26, 11])), d = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 12, 1, 10, 0, 67, 0, 0, 0, 0, 252, 0, 26, 11])), u = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 65, 0, 192, 26, 11])), c = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), _ = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 6, 1, 4, 0, 18, 0, 11])), f = () => (async e => {
                    try {
                        return "undefined" != typeof MessageChannel && (new MessageChannel).port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e)
                    } catch (e) {
                        return !1
                    }
                })(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11]))
        },
        95483: e => {
            "use strict";
            e.exports = e => {
                if ("string" != typeof e) throw TypeError("Expected a string");
                return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
            }
        },
        95677: e => {
            var t = /\w*$/;
            e.exports = function(e) {
                var a = new e.constructor(e.source, t.exec(e));
                return a.lastIndex = e.lastIndex, a
            }
        },
        96564: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => o
            });
            var n = a(70028),
                r = a(61935),
                i = a(56993);

            function o(e, t) {
                (0, i.A)(2, arguments);
                var a = (0, r.A)(e),
                    o = (0, n.A)(t);
                return isNaN(o) ? new Date(NaN) : (o && a.setDate(a.getDate() + o), a)
            }
        },
        97295: (e, t, a) => {
            var n = a(47225),
                r = a(55922);
            e.exports = function(e, t) {
                return n(e, r(e), t)
            }
        },
        98142: (e, t, a) => {
            var n = a(28811);
            e.exports = function() {
                return n.Date.now()
            }
        }
    }
]);
//# sourceMappingURL=7528.d0c487f110edad59.js.map