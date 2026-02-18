(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6550], {
        9021: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.test = void 0;
            let r = i(82643),
                a = i(28624);
            e.test = (t = {
                logLevel: "error"
            }) => r.__awaiter(void 0, void 0, void 0, function*() {
                let {
                    logLevel: e
                } = t, i = new a.AdBlockerDetection({
                    logLevel: e
                });
                return yield i.runAllTests()
            })
        },
        17408: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        27794: t => {
            t.exports = {
                programmaticBanner: "AdSlot_programmaticBanner__DRbdg",
                programmaticBox: "AdSlot_programmaticBox__a1gLZ",
                adSlotHidden: "AdSlot_adSlotHidden__U9IOB"
            }
        },
        28624: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AdBlockerDetection = void 0;
            let r = i(82643),
                a = i(53952),
                o = i(84439);
            class n {
                constructor(t = {
                    logLevel: "error"
                }) {
                    this.isReady = !1, this.testResult = {
                        hasAdBlocker: !1,
                        error: !1,
                        detection: "none",
                        cssRuns: 0
                    }, this.cssBaitClasses = "adsbygoogle pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links", this.cssBaitStyle = "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;", this.remoteBaitResults = [], this.offsetProperty = "offset", this.clientProperty = "client", this.baitTriggers = {
                        nullProps: [this.offsetProperty + "Parent"],
                        zeroProps: []
                    }, this.initLogging = t => {
                        o.logging.configure({
                            minLevels: {
                                "": t
                            }
                        }).registerConsoleLogger()
                    };
                    let {
                        logLevel: e
                    } = t;
                    this.initLogging(e), this.logger = o.logging.getLogger("ad-block-detection"), this.baitTriggers.zeroProps = [this.offsetProperty + "Height", this.offsetProperty + "Left", this.offsetProperty + "Top", this.offsetProperty + "Width", this.offsetProperty + "Height", this.clientProperty + "Height", this.clientProperty + "Width"], this.baitElement = this.createBaitElement(), this.isReady = !0, this.logger.info("AdBlockerDetection is ready")
                }
                createBaitElement() {
                    this.baitElement = document.createElement("div"), this.baitElement.setAttribute("class", this.cssBaitClasses), this.baitElement.setAttribute("style", this.cssBaitStyle), this.logger.info("Adding HTML bait to DOM"), window.document.body.appendChild(this.baitElement), this.logger.info("HTML bait created");
                    for (let t = 0; t < this.baitTriggers.nullProps.length; t++) this.baitElement[this.baitTriggers.nullProps[t]];
                    for (let t = 0; t < this.baitTriggers.zeroProps.length; t++) this.baitElement[this.baitTriggers.zeroProps[t]];
                    return this.baitElement
                }
                testABPAtrribute() {
                    return null !== document.body.getAttribute("abp")
                }
                testNullProps(t) {
                    let e = !1;
                    for (let i = 0; i < this.baitTriggers.nullProps.length; i++) {
                        if (null == t[this.baitTriggers.nullProps[i]]) {
                            e = !0, this.logger.info("found adblock null attr: " + this.baitTriggers.nullProps[i]);
                            break
                        }
                        if (e) break
                    }
                    return e
                }
                testZeroProps(t) {
                    let e = !1;
                    for (let i = 0; i < this.baitTriggers.zeroProps.length && !e; i++)
                        if (0 === t[this.baitTriggers.zeroProps[i]]) {
                            e = !0, this.logger.info("found adblock zero attr: " + this.baitTriggers.zeroProps[i]);
                            break
                        } return e
                }
                testComputedStyle(t) {
                    let e = !1;
                    if (void 0 !== window.getComputedStyle) {
                        let i = window.getComputedStyle(t, null);
                        ("none" == i.getPropertyValue("display") || "hidden" == i.getPropertyValue("visibility")) && (e = !0, this.logger.info("found adblock computedStyle indicator"))
                    }
                    return e
                }
                runCssBaitTest() {
                    return (this.testResult.detection = "css", this.isReady) ? this.baitElement ? (this.testResult.cssRuns++, this.testABPAtrribute() || this.testNullProps(this.baitElement) || this.testZeroProps(this.baitElement)) ? this.testResult.hasAdBlocker = !0 : this.testComputedStyle(this.baitElement) ? (this.testResult.hasAdBlocker = !0, this.logger.info("TestComputedStyle has detected an adblock")) : (this.logger.info("Ended CSS bait adblock detection"), this.cleanCssBait()) : (this.logger.error("AdBlockerDetection bait element is not ready"), this.testResult.error = !0) : (this.logger.error("AdBlockerDetection is not ready"), this.testResult.error = !0), this.testResult
                }
                cleanCssBait() {
                    if (null === this.baitElement) return !0;
                    try {
                        document.body.removeChild(this.baitElement), this.logger.info("HTML Bait removed")
                    } catch (t) {
                        this.logger.warn("An error has happen when trying to clean the bait element")
                    }
                    return this.baitElement = null, !0
                }
                runNetworkBaitTest() {
                    var t, e;
                    return r.__awaiter(this, void 0, void 0, function*() {
                        if (this.testResult.detection = "network", !this.isReady) return this.logger.info("AdBlockerDetection is not ready"), this.testResult.error = !0, this.testResult;
                        if (this.testResult.hasAdBlocker) return this.logger.info("An adblocker was detected already"), this.testResult.error = !0, this.testResult;
                        0 === this.testResult.cssRuns && this.logger.warn("The adblocker css bait detection has not been run yet, is advised to run it first"), this.logger.info("Starting remote url bait adblock detection");
                        try {
                            for (var i, o = r.__asyncValues([{
                                    url: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                                    method: "HEAD"
                                }, {
                                    url: "https://e-10220.adzerk.net/api/v2",
                                    method: "OPTIONS"
                                }]); !(i = yield o.next()).done;) {
                                let {
                                    url: t,
                                    method: e
                                } = i.value;
                                try {
                                    let i = new a.AjaxHelper({
                                        url: t,
                                        method: e,
                                        logger: this.logger
                                    });
                                    yield i.send(), this.remoteBaitResults.push(!1)
                                } catch (t) {
                                    this.logger.info("A request has been blocked"), this.remoteBaitResults.push(!0);
                                    break
                                }
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (e = o.return) && (yield e.call(o))
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return this.testResult.hasAdBlocker = this.remoteBaitResults.filter(Boolean).length > 0, this.testResult
                    })
                }
                runAllTests() {
                    return r.__awaiter(this, void 0, void 0, function*() {
                        if (!this.isReady) return this.logger.info("AdBlockerDetection is not ready"), this.testResult.error = !0, this.testResult;
                        let t = this.runCssBaitTest();
                        return t.hasAdBlocker && !t.error ? (this.cleanCssBait(), t) : yield this.runNetworkBaitTest()
                    })
                }
            }
            e.AdBlockerDetection = n
        },
        29713: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            let r = i(82643);
            r.__exportStar(i(9021), e), r.__exportStar(i(17408), e)
        },
        36550: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => t2
            });
            var r = i(23798),
                a = i(21462),
                o = i(47993),
                n = i(38169),
                l = i(84870),
                s = i(77765),
                d = i(76850),
                c = i(41993),
                u = i(9912);
            let p = ["gb", "us", "fr", "au", "in", "br", "cn", "tr"],
                m = (t, e) => (0, u.T)({
                    name: "".concat("ads", ".").concat(t),
                    type: "action",
                    tags: e
                }),
                g = (t, e) => (i, r) => {
                    var a;
                    let o = "".concat("ads", ".").concat(i),
                        n = Math.ceil((null != r ? r : performance.now()) - t);
                    return p.includes(null == e || null == (a = e.country) ? void 0 : a.toLowerCase()) ? n < 0 ? (c.A.error('Web Metric Not Sent: Incorrect value given for "'.concat(o, '" with difference: "').concat(n, '"')), Promise.resolve) : (0, u.T)({
                        name: o,
                        type: "view",
                        time: n,
                        tags: e
                    }) : Promise.resolve
                };
            var f = i(5712),
                _ = i(30631),
                D = i(55296),
                v = i(93705),
                y = i(26465),
                w = i(16182),
                P = i.n(w),
                b = i(85236),
                A = i(33901),
                E = i(68849);

            function h() {
                var t, e;
                return (0, A.ox)() ? (0, E.Ol)() && null != (t = (0, E.JM)()) ? t : null : (0, A.ET)() && null != (e = (0, b.E0)()) ? e : null
            }
            var S = i(87676),
                I = i(87963),
                R = i(97220),
                T = i(17533);
            let U = () => "undefined" == typeof document ? "unknown" : document.visibilityState,
                k = {
                    playwire: "pending",
                    publift: "pending"
                },
                O = {
                    setLoaded: t => {
                        k[t] = "loaded", l.lD.log("Programmatic \uD83D\uDCE6 Script load status: ".concat(t, " = loaded"))
                    },
                    setFailed: t => {
                        k[t] = "failed", l.lD.log("Programmatic ❌ Script load status: ".concat(t, " = failed"))
                    },
                    reset: t => {
                        k[t] = "pending", l.lD.log("Programmatic \uD83D\uDD04 Script load status: ".concat(t, " = pending (reset)"))
                    },
                    hasFailed: t => "failed" === k[t],
                    getActiveStatus: () => "pending" !== k.playwire ? k.playwire : "pending" !== k.publift ? k.publift : "pending"
                },
                C = () => O.getActiveStatus(),
                L = {
                    PROVIDER_SCRIPT_LOADING: "programmatic_provider_script_loading",
                    PROVIDER_SCRIPT_LOADED: "programmatic_provider_script_loaded",
                    PROVIDER_SCRIPT_LOAD_FAILED: "programmatic_provider_script_load_failed",
                    PROVIDER_SCRIPT_READY: "programmatic_provider_script_ready",
                    PROVIDER_CLEANUP: "programmatic_provider_cleanup",
                    AUCTION_REQUESTED: "programmatic_auction_requested",
                    PROVIDER_AD_REQUESTED: "programmatic_provider_ad_requested",
                    AUCTION_WAITING: "programmatic_auction_waiting",
                    AUCTION_RESULT_RECEIVED: "programmatic_auction_result_received",
                    AUCTION_COMPLETED: "programmatic_auction_completed",
                    AUCTION_TIMEOUT: "programmatic_auction_timeout",
                    AUCTION_FAILED: "programmatic_auction_failed",
                    AD_UNIT_INITIALIZING: "programmatic_ad_unit_initializing",
                    AD_UNIT_INITIALIZED: "programmatic_ad_unit_initialized",
                    AD_UNIT_INIT_FAILED: "programmatic_ad_unit_init_failed",
                    AD_UNIT_READY_SIGNALED: "programmatic_ad_unit_ready_signaled",
                    AD_UNIT_DESTROYED: "programmatic_ad_unit_destroyed",
                    AD_LOADED: "programmatic_ad_loaded",
                    AD_RENDERED: "programmatic_ad_rendered",
                    AD_DISPLAYED: "programmatic_ad_displayed",
                    AD_DISPLAY_FAILED: "programmatic_ad_display_failed",
                    POSITION_CHANGE: "programmatic_position_change",
                    EVENT_LISTENERS_SETUP: "programmatic_event_listeners_setup",
                    FUSE_ZONE_REGISTERED: "programmatic_fuse_zone_registered",
                    FUSE_ZONE_DISPLAY: "programmatic_fuse_zone_display",
                    FUSE_SLOTS_RESET: "programmatic_fuse_slots_reset",
                    FUSE_ZONE_DESTROY: "programmatic_fuse_zone_destroy",
                    RAMP_ADD_UNITS: "programmatic_ramp_add_units",
                    RAMP_DESTROY_UNITS: "programmatic_ramp_destroy_units",
                    RAMP_CLEANUP_UNAVAILABLE: "programmatic_ramp_cleanup_unavailable",
                    AD_UNIT_READINESS_SIGNALED: "programmatic_ad_unit_readiness_signaled",
                    AD_UNIT_READINESS_WAIT: "programmatic_ad_unit_readiness_wait",
                    AD_UNIT_READINESS_TIMEOUT: "programmatic_ad_unit_readiness_timeout",
                    AD_UNIT_READINESS_RESET_ALL: "programmatic_ad_unit_readiness_reset_all",
                    AUCTION_MANAGER_INITIALIZED: "programmatic_auction_manager_initialized",
                    AUCTION_MANAGER_CLEANUP: "programmatic_auction_manager_cleanup",
                    AUCTION_REQUEST_RECEIVED: "programmatic_auction_request_received",
                    AUCTION_RESULT_SENT: "programmatic_auction_result_sent",
                    DOM_ELEMENT_CHECK: "programmatic_dom_element_check"
                },
                N = (t, e) => {
                    try {
                        y.L.addAction(t, e)
                    } catch (t) {}
                },
                F = {
                    providerScriptLoaded(t) {
                        let {
                            provider: e,
                            placement: i
                        } = t;
                        N(L.PROVIDER_SCRIPT_LOADED, {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    providerScriptLoadFailed(t) {
                        let {
                            provider: e,
                            placement: i,
                            error: r
                        } = t;
                        N(L.PROVIDER_SCRIPT_LOAD_FAILED, {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: C(),
                            ...r && {
                                error: r
                            }
                        })
                    },
                    auctionRequested(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r
                        } = t;
                        N(L.AUCTION_REQUESTED, {
                            provider: e,
                            placement: i,
                            position: r,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    providerAdRequested(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r
                        } = t;
                        N(L.PROVIDER_AD_REQUESTED, {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: C(),
                            ...void 0 !== r && {
                                position: r
                            }
                        })
                    },
                    auctionCompleted(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r,
                            hasBids: a
                        } = t;
                        N(L.AUCTION_COMPLETED, {
                            provider: e,
                            placement: i,
                            position: r,
                            hasBids: a,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    auctionTimeout(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r,
                            timeoutMs: a
                        } = t;
                        N(L.AUCTION_TIMEOUT, {
                            provider: e,
                            placement: i,
                            position: r,
                            timeoutMs: a,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    auctionFailed(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r,
                            error: a
                        } = t;
                        N(L.AUCTION_FAILED, {
                            provider: e,
                            placement: i,
                            position: r,
                            visibilityState: U(),
                            scriptStatus: C(),
                            ...a && {
                                error: a
                            }
                        })
                    },
                    adUnitInitialized(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r
                        } = t;
                        N(L.AD_UNIT_INITIALIZED, {
                            provider: e,
                            placement: i,
                            position: r,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    adUnitInitFailed(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r,
                            error: a
                        } = t;
                        N(L.AD_UNIT_INIT_FAILED, {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: C(),
                            ...void 0 !== r && {
                                position: r
                            },
                            ...a && {
                                error: a
                            }
                        })
                    },
                    adUnitDestroyed(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r,
                            reason: a
                        } = t;
                        N(L.AD_UNIT_DESTROYED, {
                            provider: e,
                            placement: i,
                            position: r,
                            reason: a,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    adLoaded(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r,
                            filled: a
                        } = t;
                        N(L.AD_LOADED, {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: C(),
                            ...void 0 !== r && {
                                position: r
                            },
                            filled: a
                        })
                    },
                    adRendered(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r
                        } = t;
                        N(L.AD_RENDERED, {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: C(),
                            ...void 0 !== r && {
                                position: r
                            }
                        })
                    },
                    adDisplayed(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r
                        } = t;
                        N(L.AD_DISPLAYED, {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: C(),
                            ...void 0 !== r && {
                                position: r
                            }
                        })
                    },
                    adDisplayFailed(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r,
                            error: a
                        } = t;
                        N(L.AD_DISPLAY_FAILED, {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: C(),
                            ...void 0 !== r && {
                                position: r
                            },
                            ...a && {
                                error: a
                            }
                        })
                    },
                    providerCleanup(t) {
                        let {
                            provider: e,
                            placement: i,
                            reason: r
                        } = t;
                        N(L.PROVIDER_CLEANUP, {
                            provider: e,
                            placement: i,
                            reason: r,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    providerScriptLoading(t) {
                        let {
                            provider: e,
                            placement: i
                        } = t;
                        N(L.PROVIDER_SCRIPT_LOADING, {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    providerScriptReady(t) {
                        let {
                            provider: e,
                            placement: i
                        } = t;
                        N(L.PROVIDER_SCRIPT_READY, {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    auctionWaiting(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r,
                            timeoutMs: a
                        } = t;
                        N(L.AUCTION_WAITING, {
                            provider: e,
                            placement: i,
                            position: r,
                            timeoutMs: a,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    auctionResultReceived(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r,
                            filled: a
                        } = t;
                        N(L.AUCTION_RESULT_RECEIVED, {
                            provider: e,
                            placement: i,
                            position: r,
                            filled: a,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    adUnitInitializing(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r
                        } = t;
                        N(L.AD_UNIT_INITIALIZING, {
                            provider: e,
                            placement: i,
                            position: r,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    adUnitReadySignaled(t) {
                        let {
                            provider: e,
                            placement: i,
                            position: r
                        } = t;
                        N(L.AD_UNIT_READY_SIGNALED, {
                            provider: e,
                            placement: i,
                            position: r,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    positionChange(t) {
                        let {
                            provider: e,
                            placement: i,
                            oldPosition: r,
                            newPosition: a
                        } = t;
                        N(L.POSITION_CHANGE, {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: C(),
                            ...void 0 !== r && {
                                oldPosition: r
                            },
                            newPosition: a
                        })
                    },
                    eventListenersSetup(t) {
                        let {
                            provider: e,
                            placement: i
                        } = t;
                        N(L.EVENT_LISTENERS_SETUP, {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    fuseZoneRegistered(t) {
                        let {
                            placement: e,
                            zoneCode: i
                        } = t;
                        N(L.FUSE_ZONE_REGISTERED, {
                            placement: e,
                            zoneCode: i,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    fuseZoneDisplay(t) {
                        let {
                            placement: e,
                            zoneCode: i
                        } = t;
                        N(L.FUSE_ZONE_DISPLAY, {
                            placement: e,
                            zoneCode: i,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    fuseSlotsReset() {
                        N(L.FUSE_SLOTS_RESET, {
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    fuseZoneDestroy(t) {
                        let {
                            placement: e,
                            zoneCode: i
                        } = t;
                        N(L.FUSE_ZONE_DESTROY, {
                            placement: e,
                            zoneCode: i,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    rampAddUnits(t) {
                        let {
                            placement: e,
                            adUnitType: i,
                            selectorId: r
                        } = t;
                        N(L.RAMP_ADD_UNITS, {
                            placement: e,
                            adUnitType: i,
                            selectorId: r,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    rampDestroyUnits(t) {
                        let {
                            scope: e
                        } = t;
                        N(L.RAMP_DESTROY_UNITS, {
                            scope: e,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    rampCleanupUnavailable(t) {
                        let {
                            hasRamp: e,
                            hasDestroyUnits: i
                        } = t;
                        N(L.RAMP_CLEANUP_UNAVAILABLE, {
                            hasRamp: e,
                            hasDestroyUnits: i,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    adUnitReadinessSignaled(t) {
                        let {
                            position: e,
                            hadWaiter: i
                        } = t;
                        N(L.AD_UNIT_READINESS_SIGNALED, {
                            position: e,
                            hadWaiter: i,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    adUnitReadinessWait(t) {
                        let {
                            position: e,
                            immediate: i,
                            timeoutMs: r
                        } = t;
                        N(L.AD_UNIT_READINESS_WAIT, {
                            position: e,
                            immediate: i,
                            visibilityState: U(),
                            scriptStatus: C(),
                            ...void 0 !== r && {
                                timeoutMs: r
                            }
                        })
                    },
                    adUnitReadinessTimeout(t) {
                        let {
                            position: e,
                            timeoutMs: i
                        } = t;
                        N(L.AD_UNIT_READINESS_TIMEOUT, {
                            position: e,
                            timeoutMs: i,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    adUnitReadinessResetAll(t) {
                        let {
                            pendingCount: e,
                            readyCount: i
                        } = t;
                        N(L.AD_UNIT_READINESS_RESET_ALL, {
                            pendingCount: e,
                            readyCount: i,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    auctionManagerInitialized() {
                        N(L.AUCTION_MANAGER_INITIALIZED, {
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    auctionManagerCleanup() {
                        N(L.AUCTION_MANAGER_CLEANUP, {
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    auctionRequestReceived(t) {
                        let {
                            programmaticAdType: e,
                            position: i
                        } = t;
                        N(L.AUCTION_REQUEST_RECEIVED, {
                            programmaticAdType: e,
                            position: i,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    auctionResultSent(t) {
                        let {
                            programmaticAdType: e,
                            hasBids: i,
                            hasError: r
                        } = t;
                        N(L.AUCTION_RESULT_SENT, {
                            programmaticAdType: e,
                            hasBids: i,
                            hasError: r,
                            visibilityState: U(),
                            scriptStatus: C()
                        })
                    },
                    domElementCheck(t) {
                        let {
                            provider: e,
                            placement: i,
                            elementId: r,
                            found: a,
                            isVisible: o
                        } = t;
                        N(L.DOM_ELEMENT_CHECK, {
                            provider: e,
                            placement: i,
                            elementId: r,
                            found: a,
                            visibilityState: U(),
                            scriptStatus: C(),
                            ...void 0 !== o && {
                                isVisible: o
                            }
                        })
                    }
                },
                M = () => O.getActiveStatus();
            var j = function(t) {
                return t.PROVIDER_SCRIPT_LOADED = "programmatic_provider_script_loaded", t.PROVIDER_SCRIPT_LOAD_FAILED = "programmatic_provider_script_load_failed", t.AUCTION_REQUESTED = "programmatic_auction_requested", t.PROVIDER_AD_REQUESTED = "programmatic_provider_ad_requested", t.AUCTION_COMPLETED = "programmatic_auction_completed", t.AUCTION_TIMEOUT = "programmatic_auction_timeout", t.AUCTION_FAILED = "programmatic_auction_failed", t.AD_UNIT_INITIALIZING = "programmatic_ad_unit_initializing", t.AD_UNIT_INITIALIZED = "programmatic_ad_unit_initialized", t.AD_UNIT_INIT_FAILED = "programmatic_ad_unit_init_failed", t.AD_UNIT_DESTROYED = "programmatic_ad_unit_destroyed", t.AD_LOADED = "programmatic_ad_loaded", t.AD_RENDERED = "programmatic_ad_rendered", t.AD_DISPLAYED = "programmatic_ad_displayed", t.AD_DISPLAY_FAILED = "programmatic_ad_display_failed", t.PROVIDER_CLEANUP = "programmatic_provider_cleanup", t
            }(j || {});
            let B = {
                providerScriptLoaded(t) {
                    let {
                        provider: e,
                        placement: i
                    } = t;
                    return {
                        kind: "programmatic_provider_script_loaded",
                        info: {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: M()
                        }
                    }
                },
                providerScriptLoadFailed(t) {
                    let {
                        provider: e,
                        placement: i,
                        error: r
                    } = t;
                    return {
                        kind: "programmatic_provider_script_load_failed",
                        info: {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: M(),
                            ...r && {
                                error: r
                            }
                        }
                    }
                },
                auctionRequested(t) {
                    let {
                        provider: e,
                        placement: i,
                        position: r
                    } = t;
                    return {
                        kind: "programmatic_auction_requested",
                        info: {
                            provider: e,
                            placement: i,
                            position: r,
                            visibilityState: U(),
                            scriptStatus: M()
                        }
                    }
                },
                providerAdRequested(t) {
                    let {
                        provider: e,
                        placement: i,
                        position: r
                    } = t;
                    return {
                        kind: "programmatic_provider_ad_requested",
                        info: {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: M(),
                            ...void 0 !== r && {
                                position: r
                            }
                        }
                    }
                },
                auctionCompleted(t) {
                    let {
                        provider: e,
                        placement: i,
                        position: r,
                        hasBids: a
                    } = t;
                    return {
                        kind: "programmatic_auction_completed",
                        info: {
                            provider: e,
                            placement: i,
                            position: r,
                            hasBids: a,
                            visibilityState: U(),
                            scriptStatus: M()
                        }
                    }
                },
                auctionTimeout(t) {
                    let {
                        provider: e,
                        placement: i,
                        position: r,
                        timeoutMs: a
                    } = t;
                    return {
                        kind: "programmatic_auction_timeout",
                        info: {
                            provider: e,
                            placement: i,
                            position: r,
                            timeoutMs: a,
                            visibilityState: U(),
                            scriptStatus: M()
                        }
                    }
                },
                auctionFailed(t) {
                    let {
                        provider: e,
                        placement: i,
                        position: r,
                        error: a
                    } = t;
                    return {
                        kind: "programmatic_auction_failed",
                        info: {
                            provider: e,
                            placement: i,
                            position: r,
                            visibilityState: U(),
                            scriptStatus: M(),
                            ...a && {
                                error: a
                            }
                        }
                    }
                },
                adUnitInitializing(t) {
                    let {
                        provider: e,
                        placement: i,
                        position: r
                    } = t;
                    return {
                        kind: "programmatic_ad_unit_initializing",
                        info: {
                            provider: e,
                            placement: i,
                            position: r,
                            visibilityState: U(),
                            scriptStatus: M()
                        }
                    }
                },
                adUnitInitialized(t) {
                    let {
                        provider: e,
                        placement: i,
                        position: r
                    } = t;
                    return {
                        kind: "programmatic_ad_unit_initialized",
                        info: {
                            provider: e,
                            placement: i,
                            position: r,
                            visibilityState: U(),
                            scriptStatus: M()
                        }
                    }
                },
                adUnitInitFailed(t) {
                    let {
                        provider: e,
                        placement: i,
                        position: r,
                        error: a
                    } = t;
                    return {
                        kind: "programmatic_ad_unit_init_failed",
                        info: {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: M(),
                            ...void 0 !== r && {
                                position: r
                            },
                            ...a && {
                                error: a
                            }
                        }
                    }
                },
                adUnitDestroyed(t) {
                    let {
                        provider: e,
                        placement: i,
                        position: r,
                        reason: a
                    } = t;
                    return {
                        kind: "programmatic_ad_unit_destroyed",
                        info: {
                            provider: e,
                            placement: i,
                            position: r,
                            reason: a,
                            visibilityState: U(),
                            scriptStatus: M()
                        }
                    }
                },
                adLoaded(t) {
                    let {
                        provider: e,
                        placement: i,
                        position: r,
                        filled: a
                    } = t;
                    return {
                        kind: "programmatic_ad_loaded",
                        info: {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: M(),
                            ...void 0 !== r && {
                                position: r
                            },
                            filled: a
                        }
                    }
                },
                adRendered(t) {
                    let {
                        provider: e,
                        placement: i,
                        position: r
                    } = t;
                    return {
                        kind: "programmatic_ad_rendered",
                        info: {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: M(),
                            ...void 0 !== r && {
                                position: r
                            }
                        }
                    }
                },
                adDisplayed(t) {
                    let {
                        provider: e,
                        placement: i,
                        position: r
                    } = t;
                    return {
                        kind: "programmatic_ad_displayed",
                        info: {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: M(),
                            ...void 0 !== r && {
                                position: r
                            }
                        }
                    }
                },
                adDisplayFailed(t) {
                    let {
                        provider: e,
                        placement: i,
                        position: r,
                        error: a
                    } = t;
                    return {
                        kind: "programmatic_ad_display_failed",
                        info: {
                            provider: e,
                            placement: i,
                            visibilityState: U(),
                            scriptStatus: M(),
                            ...void 0 !== r && {
                                position: r
                            },
                            ...a && {
                                error: a
                            }
                        }
                    }
                },
                providerCleanup(t) {
                    let {
                        provider: e,
                        placement: i,
                        reason: r
                    } = t;
                    return {
                        kind: "programmatic_provider_cleanup",
                        info: {
                            provider: e,
                            placement: i,
                            reason: r,
                            visibilityState: U(),
                            scriptStatus: M()
                        }
                    }
                }
            };
            var x = i(65370);
            let z = {
                playwire: {
                    mrec: {
                        id: "pw-central-rectangle",
                        type: "standard_iab_cntr1"
                    },
                    banner: {
                        id: "pw-footer-banner",
                        type: "standard_iab_foot1"
                    }
                },
                publift: {
                    mrec: {
                        id: "publift_mrec"
                    },
                    banner: {
                        id: "publift_footer"
                    }
                }
            };
            var q = i(66976);
            class V {
                signalReady(t) {
                    let e = this.registry.get(t);
                    e ? (clearTimeout(e.timeoutId), e.resolve(), this.registry.delete(t), l.lD.log("Programmatic ✅ Ad unit ready at position ".concat(t, " (resolved waiter)")), F.adUnitReadinessSignaled({
                        position: t,
                        hadWaiter: !0
                    })) : (this.readyPositions.add(t), l.lD.log("Programmatic ✅ Ad unit ready at position ".concat(t, " (marked for future waiter)")), F.adUnitReadinessSignaled({
                        position: t,
                        hadWaiter: !1
                    }))
                }
                waitForReady(t) {
                    let e, i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3;
                    if (this.readyPositions.has(t)) return l.lD.log("Programmatic ✅ Ad unit already ready at position ".concat(t, " (immediate)")), this.readyPositions.delete(t), F.adUnitReadinessWait({
                        position: t,
                        immediate: !0
                    }), Promise.resolve();
                    F.adUnitReadinessWait({
                        position: t,
                        immediate: !1,
                        timeoutMs: r
                    });
                    let a = this.registry.get(t);
                    a && (clearTimeout(a.timeoutId), a.reject(Error("Replaced by new wait request")), this.registry.delete(t));
                    let o = new Promise((t, r) => {
                            e = t, i = r
                        }),
                        n = setTimeout(() => {
                            this.registry.delete(t), i(Error("Ad unit not ready after ".concat(r, "ms at position ").concat(t))), l.lD.error("Programmatic ⏰ Ad unit not ready after ".concat(r, "ms at position ").concat(t)), F.adUnitReadinessTimeout({
                                position: t,
                                timeoutMs: r
                            })
                        }, r);
                    return this.registry.set(t, {
                        resolve: e,
                        reject: i,
                        timeoutId: n
                    }), l.lD.log("Programmatic ⏳ Waiting for ad unit to be ready at position ".concat(t, "...")), o
                }
                reset(t) {
                    let e = this.registry.get(t);
                    e && (clearTimeout(e.timeoutId), this.registry.delete(t)), this.readyPositions.delete(t)
                }
                resetAll() {
                    let t = this.registry.size,
                        e = this.readyPositions.size;
                    this.registry.forEach(t => {
                        clearTimeout(t.timeoutId)
                    }), this.registry.clear(), this.readyPositions.clear(), F.adUnitReadinessResetAll({
                        pendingCount: t,
                        readyCount: e
                    })
                }
                constructor() {
                    this.registry = new Map, this.readyPositions = new Set
                }
            }
            let W = new V,
                Z = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5e3,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                    return new Promise((i, r) => {
                        let a = Date.now(),
                            o = () => {
                                if (window.ramp && "function" == typeof window.ramp.requestAd) {
                                    l.lD.log("Programmatic (Playwire) ✅ RAMP is ready"), i();
                                    return
                                }
                                if (Date.now() - a >= t) {
                                    l.lD.error("Programmatic (Playwire) ❌ RAMP not ready after ".concat(t, "ms")), r(Error("RAMP not ready"));
                                    return
                                }
                                setTimeout(o, e)
                            };
                        l.lD.log("Programmatic (Playwire) ⏳ Waiting for RAMP to be ready..."), o()
                    })
                },
                H = async function(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e3;
                    try {
                        await Z()
                    } catch (i) {
                        return l.lD.error("Programmatic (Playwire) ❌ RAMP not available", i), (0, I.Od)().trackUserAction(B.auctionFailed({
                            provider: "playwire",
                            placement: t,
                            position: e,
                            error: "RAMP script not ready"
                        })), F.auctionFailed({
                            provider: "playwire",
                            placement: t,
                            position: e,
                            error: "RAMP script not ready"
                        }), !1
                    }
                    try {
                        await W.waitForReady(e)
                    } catch (i) {
                        return l.lD.error("Programmatic (Playwire) ❌ Ad unit not ready", i), (0, I.Od)().trackUserAction(B.auctionFailed({
                            provider: "playwire",
                            placement: t,
                            position: e,
                            error: "Ad unit not ready"
                        })), F.auctionFailed({
                            provider: "playwire",
                            placement: t,
                            position: e,
                            error: "Ad unit not ready"
                        }), !1
                    }
                    return new Promise(r => {
                        let a = !1,
                            o = i => {
                                a || (a = !0, n(), l.lD.log("Programmatic (Playwire) \uD83C\uDFAF Auction result - Filled: ".concat(i.detail.filled, ", Slot: ").concat(i.detail.slot)), F.auctionResultReceived({
                                    provider: "playwire",
                                    placement: t,
                                    position: e,
                                    filled: !0 === i.detail.filled
                                }), !0 === i.detail.filled ? ((0, I.Od)().trackUserAction(B.adLoaded({
                                    provider: "playwire",
                                    placement: t,
                                    position: e,
                                    filled: !0
                                })), F.adLoaded({
                                    provider: "playwire",
                                    placement: t,
                                    position: e,
                                    filled: !0
                                }), l.lD.log("Programmatic (Playwire) \uD83D\uDCE6 Ad loaded and ready to render for slot: ".concat(i.detail.slot, " - waiting for visibility")), q.default.dispatch((0, x.KD)({
                                    placement: t,
                                    slot: i.detail.slot,
                                    position: e
                                }))) : ((0, I.Od)().trackUserAction(B.adLoaded({
                                    provider: "playwire",
                                    placement: t,
                                    position: e,
                                    filled: !1
                                })), F.adLoaded({
                                    provider: "playwire",
                                    placement: t,
                                    position: e,
                                    filled: !1
                                })), r(!0 === i.detail.filled))
                            },
                            n = () => {
                                window.removeEventListener("pw-ad-loaded", o), clearTimeout(d)
                            },
                            s = z.playwire[t];
                        if (!s.type) {
                            l.lD.error("Programmatic (Playwire) ❌ No ad type configured"), r(!1);
                            return
                        }
                        window.addEventListener("pw-ad-loaded", o);
                        let d = setTimeout(() => {
                            a || (a = !0, n(), l.lD.log("Programmatic (Playwire) ⏰ Auction timed out, assuming no bids"), (0, I.Od)().trackUserAction(B.auctionTimeout({
                                provider: "playwire",
                                placement: t,
                                position: e,
                                timeoutMs: i
                            })), F.auctionTimeout({
                                provider: "playwire",
                                placement: t,
                                position: e,
                                timeoutMs: i
                            }), r(!1))
                        }, i);
                        l.lD.log("Programmatic (Playwire) \uD83D\uDE80 Requesting ad for ".concat(t, " (").concat(s.type, ")...")), window.ramp && (window.ramp.que = window.ramp.que || [], window.ramp.que.push(() => {
                            window.ramp && "function" == typeof window.ramp.requestAd && (l.lD.log("Programmatic (Playwire) \uD83D\uDCDE Calling window.ramp.requestAd() for ".concat(t)), (0, I.Od)().trackUserAction(B.providerAdRequested({
                                provider: "playwire",
                                placement: t,
                                position: e
                            })), F.providerAdRequested({
                                provider: "playwire",
                                placement: t,
                                position: e
                            }), window.ramp.requestAd(s.type), l.lD.log("Programmatic (Playwire) ⏳ Waiting for auction result (timeout: ".concat(i, "ms)...")), F.auctionWaiting({
                                provider: "playwire",
                                placement: t,
                                position: e,
                                timeoutMs: i
                            }))
                        }))
                    })
                }, G = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5e3,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                    return new Promise((i, r) => {
                        let a = Date.now(),
                            o = () => {
                                if (window.fusePbjs && "function" == typeof window.fusePbjs.onEvent) {
                                    l.lD.log("Programmatic (Publift) ✅ fusePbjs is ready"), i();
                                    return
                                }
                                if (Date.now() - a >= t) {
                                    l.lD.error("Programmatic (Publift) ❌ fusePbjs not ready after ".concat(t, "ms")), r(Error("fusePbjs not ready"));
                                    return
                                }
                                setTimeout(o, e)
                            };
                        l.lD.log("Programmatic (Publift) ⏳ Waiting for fusePbjs to be ready..."), o()
                    })
                }, Y = async function(t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e3;
                    try {
                        await G()
                    } catch (i) {
                        return l.lD.error("Programmatic (Publift) ❌ fusePbjs not available for ".concat(t), i), (0, I.Od)().trackUserAction(B.auctionFailed({
                            provider: "publift",
                            placement: t,
                            position: e,
                            error: "fusePbjs script not ready"
                        })), F.auctionFailed({
                            provider: "publift",
                            placement: t,
                            position: e,
                            error: "fusePbjs script not ready"
                        }), !1
                    }
                    try {
                        await W.waitForReady(e)
                    } catch (i) {
                        return l.lD.error("Programmatic (Publift) ❌ Zone not ready", i), (0, I.Od)().trackUserAction(B.auctionFailed({
                            provider: "publift",
                            placement: t,
                            position: e,
                            error: "Zone not ready"
                        })), F.auctionFailed({
                            provider: "publift",
                            placement: t,
                            position: e,
                            error: "Zone not ready"
                        }), !1
                    }
                    return new Promise(r => {
                        let a = !1,
                            o = () => {
                                clearTimeout(n)
                            };
                        window.fusePbjs && "function" == typeof window.fusePbjs.onEvent && window.fusePbjs.onEvent("auctionEnd", i => {
                            if (!a && "auctionStatus" in i) {
                                var n;
                                a = !0, o();
                                let s = i.bidsReceived && i.bidsReceived.length > 0;
                                l.lD.log("Programmatic (Publift) \uD83C\uDFAF Auction result for ".concat(t, " - Has bids: ").concat(s, ", Bids received: ").concat((null == (n = i.bidsReceived) ? void 0 : n.length) || 0)), F.auctionResultReceived({
                                    provider: "publift",
                                    placement: t,
                                    position: e,
                                    filled: s
                                }), r(s)
                            }
                        });
                        let n = setTimeout(() => {
                            a || (a = !0, o(), l.lD.log("Programmatic (Publift) ⏰ Auction timed out for ".concat(t, ", assuming no bids")), (0, I.Od)().trackUserAction(B.auctionTimeout({
                                provider: "publift",
                                placement: t,
                                position: e,
                                timeoutMs: i
                            })), F.auctionTimeout({
                                provider: "publift",
                                placement: t,
                                position: e,
                                timeoutMs: i
                            }), r(!1))
                        }, i);
                        l.lD.log("Programmatic (Publift) ⏳ Waiting for auction result for ".concat(t, " (timeout: ").concat(i, "ms)...")), F.auctionWaiting({
                            provider: "publift",
                            placement: t,
                            position: e,
                            timeoutMs: i
                        })
                    })
                }, Q = "request_programmatic_auction";
            var K = i(86781);
            let J = "1025542",
                $ = "75876",
                X = "4076",
                tt = [0x2741f62a, 840108],
                te = 1 / 0,
                ti = t => t.programmaticAd.requestedPosition;
            var tr = i(51033),
                ta = i(31705),
                to = i(87476);
            let tn = () => {
                var t;
                let e = (0, to.g)(),
                    i = (0, ta.jy)(),
                    r = (0, n.d4)(tr.j),
                    a = (0, n.d4)(ti),
                    o = null != (t = null == r ? void 0 : r.position) ? t : 1,
                    l = (null == r ? void 0 : r.campaignId) !== void 0 && tt.includes(r.campaignId),
                    s = i && o >= 2 && o <= te,
                    d = s && "visible" === e && null !== a && a >= 10;
                return {
                    shouldMount: s,
                    isActive: d,
                    shouldDisplay: d && l,
                    requestedProgrammaticAuctionPosition: a,
                    currentVisiblePosition: o
                }
            };
            var tl = i(27794),
                ts = i.n(tl),
                td = i(46001),
                tc = i.n(td),
                tu = i(60029),
                tp = i.n(tu);
            let tm = t => {
                    let {
                        width: e,
                        height: i,
                        positionX: o = "50%",
                        positionY: n = "50%",
                        children: l,
                        className: s
                    } = t, d = (0, a.useMemo)(() => ({
                        minWidth: "calc((".concat(e, " / ").concat(i, ") * 100vh)"),
                        height: "calc((".concat(i, " / ").concat(e, ") * 100vw)"),
                        top: n,
                        left: o,
                        transform: "translate(-".concat(o, ", -").concat(n, ")")
                    }), [e, i, o, n]);
                    return (0, r.jsx)("div", {
                        className: tc()(tp().wrapper, s),
                        style: d,
                        children: l
                    })
                },
                tg = t => {
                    let {
                        id: e,
                        type: i,
                        dataAttributes: a = {},
                        isVisible: o = !0
                    } = t;
                    if (!(() => {
                            let t = (0, ta.jy)();
                            return !_.Ay.isMobile && t
                        })()) return null;
                    let n = o ? "" : ts().adSlotHidden,
                        l = "footer-banner" === i;
                    return (0, r.jsxs)(tm, {
                        width: 1920,
                        height: 968,
                        positionX: "59%",
                        positionY: l ? "100%" : "50%",
                        className: n,
                        children: [l && (0, r.jsx)("div", {
                            id: e,
                            className: ts().programmaticBanner,
                            ...a
                        }), "central-rectangle" === i && (0, r.jsx)("div", {
                            id: e,
                            className: ts().programmaticBox,
                            ...a
                        })]
                    })
                },
                tf = (t, e) => {
                    let i = 0,
                        r = () => {
                            if (window.ramp && "function" == typeof window.ramp.addUnits) l.lD.log("Programmatic (Playwire) ✅ Script API ready (attempt ".concat(i + 1, "/").concat(60, ")")), t();
                            else if (i < 60) i++, l.lD.log("Programmatic (Playwire) ⏳ Waiting for script... (".concat(i, "/").concat(60, ")")), setTimeout(r, 500);
                            else {
                                let t = Error("Ramp script not ready after ".concat(60, " attempts"));
                                l.lD.error("Programmatic (Playwire) ❌ Timeout:", t), e(t)
                            }
                        };
                    r()
                },
                t_ = () => {
                    l.lD.log("Programmatic (Playwire) \uD83E\uDDF9 Component unmounting, destroying ad units..."), window.ramp && window.ramp.destroyUnits ? (F.rampDestroyUnits({
                        scope: "all"
                    }), window.ramp.destroyUnits("all"), l.lD.log("Programmatic (Playwire) ✅ All ad units destroyed")) : (l.lD.warn("Programmatic (Playwire) ⚠️ Not available during cleanup"), F.rampCleanupUnavailable({
                        hasRamp: !!window.ramp,
                        hasDestroyUnits: !!(window.ramp && window.ramp.destroyUnits)
                    }))
                },
                tD = t => {
                    let {
                        placement: e,
                        isVisible: i = !0
                    } = t, o = (0, n.wA)(), [s, d] = (0, a.useState)(!1), [c, u] = (0, a.useState)(!1), [p, m] = (0, a.useState)(!1), [g, f] = (0, a.useState)(null), _ = (0, n.d4)(t => t.programmaticAd.loadedSlots[e]), D = (null == _ ? void 0 : _.slot) || null, {
                        shouldMount: v,
                        isActive: y,
                        requestedProgrammaticAuctionPosition: w,
                        currentVisiblePosition: P
                    } = tn();
                    (0, a.useEffect)(() => {
                        if (!v || s) return void l.lD.log("Programmatic (Playwire) ⏭️ Skipping RAMP load -", {
                            isAdvertisementEnabled: v,
                            rampLoaded: s
                        });
                        let t = !1;
                        return (async () => {
                            try {
                                if (l.lD.log("Programmatic (Playwire) \uD83D\uDE80 Loading RAMP script for ".concat(e, "...")), F.providerScriptLoading({
                                        provider: "playwire",
                                        placement: e
                                    }), await new Promise((t, e) => {
                                        l.lD.log("Programmatic (Playwire) \uD83D\uDE80 Loading RAMP script...");
                                        let i = "ramp-script-".concat(J, "-").concat($);
                                        if (document.getElementById(i)) {
                                            l.lD.log("Programmatic (Playwire) \uD83D\uDCE6 Script already exists, reusing..."), window.ramp ? (l.lD.log("Programmatic (Playwire) ✅ Script already ready"), t()) : tf(t, e);
                                            return
                                        }
                                        window.ramp = window.ramp || {}, window.ramp.que = window.ramp.que || [], window.ramp.passiveMode = !0, l.lD.log("Programmatic (Playwire) \uD83D\uDCDD Object initialized with passive mode");
                                        let r = document.createElement("script");
                                        r.id = i, r.async = !0, r.src = "https://cdn.intergient.com/".concat(J, "/").concat($, "/ramp.js"), l.lD.log("Programmatic (Playwire) \uD83D\uDCE6 Loading script from:", r.src), r.onload = () => {
                                            l.lD.log("Programmatic (Playwire) ✅ Script loaded successfully"), tf(t, e)
                                        }, r.onerror = t => {
                                            l.lD.error("Programmatic (Playwire) ❌ Failed to load script:", t), l.lD.error("Programmatic (Playwire) \uD83D\uDCCB Script source was:", r.src), e(Error("Failed to load RAMP script"))
                                        }, document.body.appendChild(r), l.lD.log("Programmatic (Playwire) \uD83D\uDCE8 Script added to document body")
                                    }), t) return void l.lD.log("Programmatic (Playwire) ⚠️ Script loaded but component unmounted - ignoring result");
                                d(!0), O.setLoaded("playwire"), l.lD.log("Programmatic (Playwire) ✅ RAMP script loaded successfully for ".concat(e)), (0, I.Od)().trackUserAction(B.providerScriptLoaded({
                                    provider: "playwire",
                                    placement: e
                                })), F.providerScriptLoaded({
                                    provider: "playwire",
                                    placement: e
                                })
                            } catch (i) {
                                if (t) return void l.lD.log("Programmatic (Playwire) ⚠️ Script failed but component unmounted - ignoring result");
                                O.setFailed("playwire"), l.lD.error("Programmatic (Playwire) ❌ Failed to load script:", i), (0, I.Od)().trackUserAction(B.providerScriptLoadFailed({
                                    provider: "playwire",
                                    placement: e,
                                    error: i instanceof Error ? i.message : "Unknown error"
                                })), F.providerScriptLoadFailed({
                                    provider: "playwire",
                                    placement: e,
                                    error: i instanceof Error ? i.message : "Unknown error"
                                })
                            }
                        })(), () => {
                            t = !0
                        }
                    }, [v, e, s]), (0, a.useEffect)(() => {
                        s && y && !c && null !== w && (async () => {
                            try {
                                l.lD.log("Programmatic (Playwire) \uD83C\uDFAF DOM now active at position ".concat(w, ", initializing ad unit for ").concat(e, "...")), (0, I.Od)().trackUserAction(B.adUnitInitializing({
                                    provider: "playwire",
                                    placement: e,
                                    position: w
                                })), F.adUnitInitializing({
                                    provider: "playwire",
                                    placement: e,
                                    position: w
                                }), await (t => new Promise((e, i) => {
                                    l.lD.log("Programmatic (Playwire) \uD83D\uDD27 Initializing ad unit for ".concat(t, "..."));
                                    let r = z.playwire[t],
                                        a = document.getElementById(r.id);
                                    if (!a) {
                                        let e = Error("DOM element not found: ".concat(r.id));
                                        l.lD.error("Programmatic (Playwire) ❌ DOM error:", e.message), F.domElementCheck({
                                            provider: "playwire",
                                            placement: t,
                                            elementId: r.id,
                                            found: !1
                                        }), i(e);
                                        return
                                    }
                                    l.lD.log("Programmatic (Playwire) \uD83D\uDD27 Found DOM element for ".concat(t, ":"), a), F.domElementCheck({
                                        provider: "playwire",
                                        placement: t,
                                        elementId: r.id,
                                        found: !0,
                                        isVisible: null !== a.offsetParent
                                    }), ((t, e, i) => {
                                        let r = 0,
                                            a = () => {
                                                window.ramp && "function" == typeof window.ramp.addUnits ? ((t, e, i) => {
                                                    if (!z.playwire || !z.playwire[t]) {
                                                        let e = Error("Invalid placement configuration: ".concat(t));
                                                        l.lD.error("Programmatic (Playwire) ❌ Configuration error:", e.message), i(e);
                                                        return
                                                    }
                                                    let r = z.playwire[t];
                                                    if (!r.type || !r.id) {
                                                        let e = Error("Missing type or id for placement: ".concat(t));
                                                        l.lD.error("Programmatic (Playwire) ❌ Configuration error:", e.message), i(e);
                                                        return
                                                    }
                                                    let a = document.getElementById(r.id);
                                                    if (!a) {
                                                        let e = Error("DOM element not found: ".concat(r.id));
                                                        l.lD.error("Programmatic (Playwire) ❌ DOM error:", e.message), F.domElementCheck({
                                                            provider: "playwire",
                                                            placement: t,
                                                            elementId: r.id,
                                                            found: !1
                                                        }), i(e);
                                                        return
                                                    }
                                                    l.lD.log("Programmatic (Playwire) \uD83D\uDD27 Adding ad unit for placement:", t);
                                                    let o = {
                                                        type: r.type,
                                                        selectorId: r.id
                                                    };
                                                    l.lD.log("Programmatic (Playwire) \uD83D\uDCCB Ad unit to add:", o), l.lD.log("Programmatic (Playwire) \uD83D\uDD0D DOM element ".concat(r.id, ":"), a), F.domElementCheck({
                                                        provider: "playwire",
                                                        placement: t,
                                                        elementId: r.id,
                                                        found: !0,
                                                        isVisible: null !== a.offsetParent
                                                    }), window.ramp = window.ramp || {}, window.ramp.que = window.ramp.que || [], l.lD.log("Programmatic (Playwire) \uD83D\uDCCB Queuing ad unit initialization..."), window.ramp.que.push(() => {
                                                        window.ramp && "function" == typeof window.ramp.addUnits ? (F.rampAddUnits({
                                                            placement: t,
                                                            adUnitType: r.type,
                                                            selectorId: r.id
                                                        }), window.ramp.addUnits([o]).then(() => {
                                                            var i;
                                                            l.lD.log("Programmatic (Playwire) ✅ Ad unit successfully added for ".concat(t)), l.lD.log("Programmatic (Playwire) \uD83C\uDFAF Ready for ad requests"), l.lD.log("Programmatic (Playwire) \uD83D\uDCCA Current units:", (null == (i = window.ramp) ? void 0 : i.getUnits) ? window.ramp.getUnits() : "getUnits not available"), e()
                                                        }).catch(e => {
                                                            l.lD.error("Programmatic (Playwire) ❌ Error adding ad unit for ".concat(t, ":"), e), i(e)
                                                        })) : (l.lD.error("Programmatic (Playwire) ❌ addUnits method not available in queue"), i(Error("addUnits method not available")))
                                                    }), l.lD.log("Programmatic (Playwire) \uD83D\uDCCA Queue status after adding initialization:", {
                                                        queueLength: window.ramp.que.length,
                                                        placement: t
                                                    })
                                                })(t, e, i) : r < 5 ? (r++, l.lD.log("Programmatic (Playwire) ⏳ Waiting for addUnits method (".concat(r, "/").concat(5, ")...")), l.lD.log("Programmatic (Playwire) \uD83D\uDD0D Current window.ramp:", window.ramp), setTimeout(a, 500)) : (l.lD.error("Programmatic (Playwire) ❌ addUnits method not available after maximum retries"), i(Error("RAMP addUnits method not available")))
                                            };
                                        a()
                                    })(t, e, i)
                                }))(e), u(!0), l.lD.log("Programmatic (Playwire) ✅ Ad unit initialized for ".concat(e)), (0, I.Od)().trackUserAction(B.adUnitInitialized({
                                    provider: "playwire",
                                    placement: e,
                                    position: w
                                })), F.adUnitInitialized({
                                    provider: "playwire",
                                    placement: e,
                                    position: w
                                }), W.signalReady(w), l.lD.log("Programmatic (Playwire) \uD83D\uDCE1 Signaled ad unit ready for ".concat(e, " at position ").concat(w)), F.adUnitReadySignaled({
                                    provider: "playwire",
                                    placement: e,
                                    position: w
                                })
                            } catch (t) {
                                l.lD.error("Programmatic (Playwire) ❌ Failed to initialize ad unit for ".concat(e, ":"), t), (0, I.Od)().trackUserAction(B.adUnitInitFailed({
                                    provider: "playwire",
                                    placement: e,
                                    position: w,
                                    error: t instanceof Error ? t.message : "Ad unit initialization failed"
                                })), F.adUnitInitFailed({
                                    provider: "playwire",
                                    placement: e,
                                    position: w,
                                    error: t instanceof Error ? t.message : "Ad unit initialization failed"
                                })
                            }
                        })()
                    }, [s, y, c, w, e]), (0, a.useEffect)(() => () => {
                        l.lD.log("Programmatic (Playwire) \uD83D\uDDD1️ Component unmounting for ".concat(e)), (0, I.Od)().trackUserAction(B.providerCleanup({
                            provider: "playwire",
                            placement: e,
                            reason: "unmount"
                        })), F.providerCleanup({
                            provider: "playwire",
                            placement: e,
                            reason: "unmount"
                        }), t_(), c && null !== w && ((0, I.Od)().trackUserAction(B.adUnitDestroyed({
                            provider: "playwire",
                            placement: e,
                            position: w,
                            reason: "unmount"
                        })), F.adUnitDestroyed({
                            provider: "playwire",
                            placement: e,
                            position: w,
                            reason: "unmount"
                        })), o((0, x.LG)(e)), f(null), W.resetAll(), o((0, x.Cx)(null)), O.reset("playwire"), d(!1), l.lD.log("Programmatic (Playwire) \uD83D\uDD04 Reset requested position to null on unmount for ".concat(e))
                    }, [o, e]), (0, a.useEffect)(() => {
                        if ((P > te || P < 2) && s) {
                            let t = P > te ? "beyond range" : "new lap started";
                            l.lD.log("Programmatic (Playwire) \uD83E\uDDF9 Visible position ".concat(P, " out of range (").concat(t, "), cleaning up for ").concat(e, "..."));
                            let i = P > te ? "out_of_range" : "new_lap";
                            (0, I.Od)().trackUserAction(B.providerCleanup({
                                provider: "playwire",
                                placement: e,
                                reason: i
                            })), F.providerCleanup({
                                provider: "playwire",
                                placement: e,
                                reason: i
                            });
                            let r = z.playwire[e];
                            window.ramp && window.ramp.destroyUnits && r.type && (window.ramp.destroyUnits(r.type), u(!1), o((0, x.LG)(e)), f(null), (0, I.Od)().trackUserAction(B.adUnitDestroyed({
                                provider: "playwire",
                                placement: e,
                                position: P,
                                reason: i
                            })), F.adUnitDestroyed({
                                provider: "playwire",
                                placement: e,
                                position: P,
                                reason: i
                            })), t_(), W.resetAll(), o((0, x.Cx)(null)), l.lD.log("Programmatic (Playwire) ✅ Cleanup completed for ".concat(e, " - ").concat(t, " (reset position to null)"))
                        }
                    }, [P, s, e, o]), (0, a.useEffect)(() => {
                        if (!v || !s || null === w) return;
                        l.lD.log("Programmatic (Playwire) \uD83D\uDD04 Position ".concat(w, " for ").concat(e)), F.positionChange({
                            provider: "playwire",
                            placement: e,
                            newPosition: w
                        });
                        let t = z.playwire[e];
                        window.ramp = window.ramp || {}, window.ramp.que = window.ramp.que || [], w > 10 && window.ramp && window.ramp.destroyUnits && t.type && (l.lD.log("Programmatic (Playwire) \uD83D\uDDD1️ Position ".concat(w, ", destroying previous ad unit for ").concat(e, "...")), (0, I.Od)().trackUserAction(B.adUnitDestroyed({
                            provider: "playwire",
                            placement: e,
                            position: w,
                            reason: "position_change"
                        })), F.adUnitDestroyed({
                            provider: "playwire",
                            placement: e,
                            position: w,
                            reason: "position_change"
                        }), window.ramp.destroyUnits(t.type), o((0, x.LG)(e)), f(null), u(!1)), l.lD.log("Programmatic (Playwire) ✅ Provider ready for ".concat(e, " at position ").concat(w, ". Waiting for auction manager to request ads."))
                    }, [v, e, s, w]), (0, a.useEffect)(() => {
                        if (i && c && D && g !== D) {
                            var t, r;
                            l.lD.log("Programmatic (Playwire) \uD83C\uDFA8 Ad is now visible, rendering slot: ".concat(D)), null == (r = window.ramp) || null == (t = r.que) || t.push(() => {
                                window.ramp && window.ramp.renderDeferredAd && ((0, I.Od)().trackUserAction(B.adRendered({
                                    provider: "playwire",
                                    placement: e,
                                    position: null != w ? w : void 0
                                })), F.adRendered({
                                    provider: "playwire",
                                    placement: e,
                                    position: null != w ? w : void 0
                                }), window.ramp.renderDeferredAd(D), l.lD.log("Programmatic (Playwire) ✅ Ad rendered for slot: ".concat(D)), f(D))
                            })
                        }
                        i && g && !p ? (l.lD.log("Programmatic (Playwire) \uD83D\uDC41️ Ad slot now visible to user for ".concat(e, " at position ").concat(w)), (0, I.Od)().trackUserAction(B.adDisplayed({
                            provider: "playwire",
                            placement: e,
                            position: null != w ? w : void 0
                        })), F.adDisplayed({
                            provider: "playwire",
                            placement: e,
                            position: null != w ? w : void 0
                        }), m(!0)) : i && g || !p || m(!1)
                    }, [i, c, D, g, p, e, w]);
                    let b = z.playwire[e],
                        A = "mrec" === e ? "central-rectangle" : "footer-banner";
                    return y ? (0, r.jsx)(tg, {
                        id: b.id,
                        type: A,
                        isVisible: i
                    }) : (l.lD.log("Programmatic (Playwire) ⏳ Provider mounted but DOM elements hidden (position ".concat(w, ") - waiting for position ").concat(10)), null)
                },
                tv = (t, e) => {
                    let i = 0,
                        r = () => {
                            if (i++, window.fusetag) {
                                l.lD.log("Programmatic (Publift) ✅ Script API ready"), t();
                                return
                            }
                            if (i >= 60) {
                                let t = Error("Fuse script not ready after ".concat(60, " attempts"));
                                l.lD.error("Programmatic (Publift) ❌ Timeout:", t.message), e(t);
                                return
                            }
                            l.lD.log("Programmatic (Publift) ⏳ Waiting for script... (attempt ".concat(i, "/").concat(60, ")")), setTimeout(r, 500)
                        };
                    r()
                },
                ty = () => {
                    if (!window.fusetag || "function" != typeof window.fusetag.resetSlots) return void l.lD.error("Programmatic (Publift) ❌ resetSlots method not available");
                    l.lD.log("Programmatic (Publift) \uD83D\uDD04 Resetting slots"), F.fuseSlotsReset(), window.fusetag.resetSlots()
                },
                tw = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
                    return new Promise(i => {
                        let r = 0,
                            a = () => {
                                if (r++, l.lD.log("Programmatic (Publift) \uD83D\uDD0D Checking for fusePbjs (attempt ".concat(r, "/").concat(t, "):"), {
                                        fusePbjsExists: !!window.fusePbjs,
                                        onEventExists: window.fusePbjs && "function" == typeof window.fusePbjs.onEvent,
                                        fusePbjsKeys: window.fusePbjs ? Object.keys(window.fusePbjs) : []
                                    }), window.fusePbjs && "function" == typeof window.fusePbjs.onEvent) {
                                    l.lD.log("Programmatic (Publift) ✅ fusePbjs.onEvent found after ".concat(r, " attempts")), i(!0);
                                    return
                                }
                                if (r >= t) {
                                    l.lD.warn("Programmatic (Publift) ❌ fusePbjs.onEvent not found after ".concat(t, " attempts")), i(!1);
                                    return
                                }
                                setTimeout(a, e)
                            };
                        a()
                    })
                },
                tP = async (t, e, i) => {
                    let r = z.publift[t].id;
                    await tw() ? (l.lD.log("Programmatic (Publift) \uD83D\uDD27 fusePbjs found, setting up auction listener for ".concat(r)), window.fusePbjs.onEvent("auctionEnd", t => {
                        "auctionStatus" in t && (l.lD.log("Programmatic (Publift) \uD83C\uDFAF Auction ended:", t), e(t.bidsReceived && t.bidsReceived.length > 0))
                    }), l.lD.log("Programmatic (Publift) \uD83D\uDC42 Listening for auction events for zone: ".concat(r))) : l.lD.warn("Programmatic (Publift) ⚠️ fusePbjs not available for ".concat(r, ":"), {
                        fusePbjsExists: !!window.fusePbjs,
                        onEventExists: window.fusePbjs && "function" == typeof window.fusePbjs.onEvent,
                        fusePbjsKeys: window.fusePbjs ? Object.keys(window.fusePbjs) : [],
                        fusePbjsType: typeof window.fusePbjs,
                        windowKeys: Object.keys(window).filter(t => t.includes("fuse")),
                        fusePbjsMethods: window.fusePbjs ? Object.getOwnPropertyNames(window.fusePbjs).filter(t => window.fusePbjs && "function" == typeof window.fusePbjs[t]) : []
                    }), window.fusetag && "function" == typeof window.fusetag.onSlotRenderEnded && (window.fusetag.onSlotRenderEnded(t => {
                        let e = new RegExp("fuse-slot-(".concat(r, ")"));
                        t.slotId.match(e) && (l.lD.log("Programmatic (Publift) \uD83C\uDFA8 Slot render ended for ".concat(t.slotId, ":"), t), i(t.hasCreative))
                    }), l.lD.log("Programmatic (Publift) \uD83D\uDC42 Listening for render events for slot: fuse-slot-".concat(r)))
                }, tb = () => {
                    let t = "fuse-script-".concat(X),
                        e = document.getElementById(t);
                    e && (e.remove(), l.lD.log("Programmatic (Publift) \uD83E\uDDF9 Script removed")), l.lD.log("Programmatic (Publift) \uD83E\uDDF9 Cleanup completed")
                }, tA = t => {
                    let {
                        placement: e,
                        isVisible: i = !0
                    } = t, o = (0, n.wA)(), [s, d] = (0, a.useState)(!1), [c, u] = (0, a.useState)(!1), [p, m] = (0, a.useState)(!1), [g, f] = (0, a.useState)(!1), [_, D] = (0, a.useState)(!1), [v, y] = (0, a.useState)(!1), {
                        shouldMount: w,
                        isActive: P,
                        requestedProgrammaticAuctionPosition: b,
                        currentVisiblePosition: A
                    } = tn(), E = z.publift[e], h = "mrec" === e ? "central-rectangle" : "footer-banner", S = E.id, R = (0, a.useRef)(), T = (0, a.useRef)(), U = (0, a.useRef)(!1), k = (0, a.useRef)(!1), C = (0, a.useCallback)(t => {
                        l.lD.log("Programmatic (Publift) \uD83C\uDFAF Auction ended for ".concat(e, ":"), {
                            placement: e,
                            hasBidsReceived: t,
                            zoneCode: S,
                            timestamp: new Date().toISOString()
                        }), m(!0), f(t), (0, I.Od)().trackUserAction(B.adLoaded({
                            provider: "publift",
                            placement: e,
                            position: null != b ? b : void 0,
                            filled: t
                        })), F.adLoaded({
                            provider: "publift",
                            placement: e,
                            position: null != b ? b : void 0,
                            filled: t
                        }), t ? (l.lD.log("Programmatic (Publift) ✅ Displaying ad for ".concat(e, ":"), {
                            placement: e,
                            zoneCode: S,
                            action: "displayFuseZone"
                        }), (t => {
                            let e = z.publift[t].id;
                            if (!window.fusetag || "function" != typeof window.fusetag.displayZone) return l.lD.error("Programmatic (Publift) ❌ displayZone method not available");
                            l.lD.log("Programmatic (Publift) \uD83C\uDFAF Displaying zone: ".concat(e)), F.fuseZoneDisplay({
                                placement: t,
                                zoneCode: e
                            }), window.fusetag.displayZone(e)
                        })(e)) : l.lD.log("Programmatic (Publift) ❌ No bids for ".concat(e, ":"), {
                            placement: e,
                            zoneCode: S,
                            fallbackAction: "should_show_kevel",
                            timestamp: new Date().toISOString()
                        })
                    }, [e, S]), L = (0, a.useCallback)(t => {
                        l.lD.log("Programmatic (Publift) \uD83C\uDFA8 Slot render ended for ".concat(e, ":"), {
                            placement: e,
                            hasCreative: t,
                            zoneCode: S,
                            adConfigId: E.id,
                            timestamp: new Date().toISOString()
                        }), D(t), t ? (l.lD.log("Programmatic (Publift) \uD83C\uDF89 Creative successfully rendered for ".concat(e, ":"), {
                            placement: e,
                            zoneCode: S,
                            adConfigId: E.id
                        }), (0, I.Od)().trackUserAction(B.adRendered({
                            provider: "publift",
                            placement: e,
                            position: null != b ? b : void 0
                        })), F.adRendered({
                            provider: "publift",
                            placement: e,
                            position: null != b ? b : void 0
                        })) : (l.lD.log("Programmatic (Publift) ⚠️ No creative rendered for ".concat(e, ":"), {
                            placement: e,
                            zoneCode: S,
                            hadBids: g,
                            fallbackAction: "should_show_kevel_safety",
                            timestamp: new Date().toISOString()
                        }), g && ((0, I.Od)().trackUserAction(B.adDisplayFailed({
                            provider: "publift",
                            placement: e,
                            position: null != b ? b : void 0,
                            error: "No creative rendered despite having bids"
                        })), F.adDisplayFailed({
                            provider: "publift",
                            placement: e,
                            position: null != b ? b : void 0,
                            error: "No creative rendered despite having bids"
                        })))
                    }, [e, S, E.id, g]);
                    return (R.current = C, T.current = L, (0, a.useEffect)(() => {
                        if (l.lD.log("Programmatic (Publift) \uD83D\uDE80 useEffect[loadFuse] triggered for ".concat(e, ":"), {
                                isAdvertisementEnabled: w,
                                fuseLoaded: s,
                                shouldProceed: w && !s
                            }), !w || s) return void l.lD.log("Programmatic (Publift) ⏭️ Skipping Fuse load for ".concat(e, ":"), {
                            reason: w ? "already_loaded" : "no_consent",
                            isAdvertisementEnabled: w,
                            fuseLoaded: s
                        });
                        let t = !1;
                        return (async () => {
                            try {
                                if (l.lD.log("Programmatic (Publift) \uD83D\uDCE5 Starting Fuse initialization for ".concat(e, "...")), F.providerScriptLoading({
                                        provider: "publift",
                                        placement: e
                                    }), await (t => new Promise((e, i) => {
                                        l.lD.log("Programmatic (Publift) \uD83D\uDE80 Loading Publift Fuse script...");
                                        let r = "fuse-script-".concat(X);
                                        if (document.getElementById(r)) {
                                            l.lD.log("Programmatic (Publift) \uD83D\uDCE6 Script already exists, reusing..."), window.fusetag ? (l.lD.log("Programmatic (Publift) ✅ Script already ready"), e()) : tv(e, i);
                                            return
                                        }
                                        if (!z.publift || !z.publift[t]) {
                                            let e = Error("Invalid placement configuration: ".concat(t));
                                            l.lD.error("Programmatic (Publift) ❌ Configuration error:", e.message), i(e);
                                            return
                                        }
                                        if (!z.publift[t].id) {
                                            let e = Error("Missing id for placement: ".concat(t));
                                            l.lD.error("Programmatic (Publift) ❌ Configuration error:", e.message), i(e);
                                            return
                                        }
                                        let a = document.createElement("script");
                                        a.id = r, a.async = !0, a.src = "https://cdn.fuseplatform.net/publift/tags/2/".concat(X, "/fuse.js"), l.lD.log("Programmatic (Publift) \uD83D\uDCE6 Loading script from:", a.src), a.onload = () => {
                                            l.lD.log("Programmatic (Publift) ✅ Script loaded successfully"), tv(e, i)
                                        }, a.onerror = t => {
                                            l.lD.error("Programmatic (Publift) ❌ Failed to load script:", t), l.lD.error("Programmatic (Publift) \uD83D\uDCCB Script source was:", a.src), i(Error("Failed to load Fuse script"))
                                        }, document.head.appendChild(a), l.lD.log("Programmatic (Publift) \uD83D\uDCE8 Script added to document head")
                                    }))(e), t) return void l.lD.log("Programmatic (Publift) ⚠️ Script loaded but component unmounted - ignoring result");
                                l.lD.log("Programmatic (Publift) ✅ Fuse script loaded for ".concat(e)), d(!0), O.setLoaded("publift"), U.current = !0, l.lD.log("Programmatic (Publift) \uD83C\uDF89 Script loading successful for ".concat(e, ":"), {
                                    placement: e,
                                    zoneCode: S,
                                    adConfigId: E.id,
                                    timestamp: new Date().toISOString()
                                }), (0, I.Od)().trackUserAction(B.providerScriptLoaded({
                                    provider: "publift",
                                    placement: e
                                })), F.providerScriptLoaded({
                                    provider: "publift",
                                    placement: e
                                })
                            } catch (i) {
                                if (t) return void l.lD.log("Programmatic (Publift) ⚠️ Script failed but component unmounted - ignoring result");
                                O.setFailed("publift"), l.lD.error("Programmatic (Publift) \uD83D\uDCA5 Failed to initialize for ".concat(e, ":"), {
                                    placement: e,
                                    error: i instanceof Error ? i.message : i,
                                    stack: i instanceof Error ? i.stack : void 0,
                                    timestamp: new Date().toISOString()
                                }), (0, I.Od)().trackUserAction(B.providerScriptLoadFailed({
                                    provider: "publift",
                                    placement: e,
                                    error: i instanceof Error ? i.message : "Unknown error"
                                })), F.providerScriptLoadFailed({
                                    provider: "publift",
                                    placement: e,
                                    error: i instanceof Error ? i.message : "Unknown error"
                                })
                            }
                        })(), () => {
                            t = !0, l.lD.log("Programmatic (Publift) \uD83E\uDDF9 Cleanup function called for loadFuse effect - ".concat(e))
                        }
                    }, [w, e, s, S, E.id]), (0, a.useEffect)(() => {
                        s && P && !c && null !== b && (async () => {
                            try {
                                l.lD.log("Programmatic (Publift) \uD83C\uDFAF DOM now active at position ".concat(b, ", registering zone for ").concat(e, "...")), (0, I.Od)().trackUserAction(B.adUnitInitializing({
                                    provider: "publift",
                                    placement: e,
                                    position: b
                                })), F.adUnitInitializing({
                                    provider: "publift",
                                    placement: e,
                                    position: b
                                }), await (t => new Promise((e, i) => {
                                    l.lD.log("Programmatic (Publift) \uD83D\uDD27 Registering zone for ".concat(t, "..."));
                                    let r = z.publift[t],
                                        a = document.getElementById(r.id);
                                    if (!a) {
                                        let e = Error("DOM element not found: ".concat(r.id));
                                        l.lD.error("Programmatic (Publift) ❌ DOM error:", e.message), F.domElementCheck({
                                            provider: "publift",
                                            placement: t,
                                            elementId: r.id,
                                            found: !1
                                        }), i(e);
                                        return
                                    }
                                    l.lD.log("Programmatic (Publift) \uD83D\uDD27 Found DOM element for ".concat(t, ":"), a), F.domElementCheck({
                                        provider: "publift",
                                        placement: t,
                                        elementId: r.id,
                                        found: !0,
                                        isVisible: null !== a.offsetParent
                                    }), ((t, e, i) => {
                                        let r = 0,
                                            a = () => {
                                                if (r++, window.fusetag && window.fusePbjs) {
                                                    l.lD.log("Programmatic (Publift) ✅ API ready, registering zone"), ((t, e, i) => {
                                                        try {
                                                            let i = z.publift[t],
                                                                r = i.id;
                                                            if (window.fusetag && "function" == typeof window.fusetag.registerZone) {
                                                                window.fusetag.registerZone(r), l.lD.log("Programmatic (Publift) \uD83D\uDCCB Registered zone: ".concat(r)), F.fuseZoneRegistered({
                                                                    placement: t,
                                                                    zoneCode: r
                                                                });
                                                                let e = document.getElementById(i.id);
                                                                e ? (l.lD.log("Programmatic (Publift) \uD83D\uDD0D DOM element after registration:", {
                                                                    id: e.id,
                                                                    className: e.className,
                                                                    attributes: e.attributes ? Array.from(e.attributes).map(t => "".concat(t.name, '="').concat(t.value, '"')) : [],
                                                                    innerHTML: e.innerHTML,
                                                                    offsetWidth: e.offsetWidth,
                                                                    offsetHeight: e.offsetHeight,
                                                                    isVisible: null !== e.offsetParent
                                                                }), F.domElementCheck({
                                                                    provider: "publift",
                                                                    placement: t,
                                                                    elementId: i.id,
                                                                    found: !0,
                                                                    isVisible: null !== e.offsetParent
                                                                })) : (l.lD.warn("Programmatic (Publift) ⚠️ DOM element not found after registration: ".concat(i.id)), F.domElementCheck({
                                                                    provider: "publift",
                                                                    placement: t,
                                                                    elementId: i.id,
                                                                    found: !1
                                                                }))
                                                            }
                                                            e()
                                                        } catch (t) {
                                                            l.lD.error("Programmatic (Publift) ❌ Failed to register zone:", t), i(t instanceof Error ? t : Error("Failed to register zone"))
                                                        }
                                                    })(t, e, i);
                                                    return
                                                }
                                                if (r >= 5) {
                                                    let t = Error("Fuse API not ready after ".concat(5, " attempts"));
                                                    l.lD.error("Programmatic (Publift) ❌ Timeout:", t.message), i(t);
                                                    return
                                                }
                                                l.lD.log("Programmatic (Publift) ⏳ Waiting for API... (attempt ".concat(r, "/").concat(5, ")")), setTimeout(a, 500)
                                            };
                                        a()
                                    })(t, e, i)
                                }))(e), u(!0), k.current || (l.lD.log("Programmatic (Publift) \uD83C\uDFA7 Setting up event listeners for ".concat(e, " (one-time setup after first registration)...")), await tP(e, t => {
                                    var e;
                                    return null == (e = R.current) ? void 0 : e.call(R, t)
                                }, t => {
                                    var e;
                                    return null == (e = T.current) ? void 0 : e.call(T, t)
                                }), k.current = !0, l.lD.log("Programmatic (Publift) ✅ Event listeners set up successfully for ".concat(e)), F.eventListenersSetup({
                                    provider: "publift",
                                    placement: e
                                })), l.lD.log("Programmatic (Publift) ✅ Zone registered for ".concat(e)), (0, I.Od)().trackUserAction(B.adUnitInitialized({
                                    provider: "publift",
                                    placement: e,
                                    position: b
                                })), F.adUnitInitialized({
                                    provider: "publift",
                                    placement: e,
                                    position: b
                                }), W.signalReady(b), l.lD.log("Programmatic (Publift) \uD83D\uDCE1 Signaled zone ready for ".concat(e, " at position ").concat(b)), F.adUnitReadySignaled({
                                    provider: "publift",
                                    placement: e,
                                    position: b
                                })
                            } catch (t) {
                                l.lD.error("Programmatic (Publift) ❌ Failed to register zone for ".concat(e, ":"), t), (0, I.Od)().trackUserAction(B.adUnitInitFailed({
                                    provider: "publift",
                                    placement: e,
                                    position: null != b ? b : void 0,
                                    error: t instanceof Error ? t.message : "Zone registration failed"
                                })), F.adUnitInitFailed({
                                    provider: "publift",
                                    placement: e,
                                    position: null != b ? b : void 0,
                                    error: t instanceof Error ? t.message : "Zone registration failed"
                                })
                            }
                        })()
                    }, [s, P, c, b, e]), (0, a.useEffect)(() => {
                        w && s && null !== b && (l.lD.log("Programmatic (Publift) \uD83D\uDD04 Position ".concat(b, " for ").concat(e)), F.positionChange({
                            provider: "publift",
                            placement: e,
                            newPosition: b
                        }), b > 10 && (l.lD.log("Programmatic (Publift) \uD83D\uDD04 Resetting slots for ".concat(e, "...")), (0, I.Od)().trackUserAction(B.adUnitDestroyed({
                            provider: "publift",
                            placement: e,
                            position: b,
                            reason: "position_change"
                        })), F.adUnitDestroyed({
                            provider: "publift",
                            placement: e,
                            position: b,
                            reason: "position_change"
                        }), ty(), u(!1), m(!1), f(!1), D(!1)), l.lD.log("Programmatic (Publift) ✅ Provider ready for ".concat(e, " at position ").concat(b, ". DOM elements present - auction will auto-trigger.")))
                    }, [b, w, s, e]), (0, a.useEffect)(() => () => {
                        l.lD.log("Programmatic (Publift) \uD83D\uDDD1️ Component unmounting for ".concat(e, ":"), {
                            needsCleanup: U.current,
                            fuseLoaded: s,
                            auctionCompleted: p,
                            hasBids: g,
                            adDisplayed: _
                        }), O.reset("publift"), U.current && (l.lD.log("Programmatic (Publift) \uD83E\uDDFD Performing cleanup for ".concat(e, "...")), (0, I.Od)().trackUserAction(B.providerCleanup({
                            provider: "publift",
                            placement: e,
                            reason: "unmount"
                        })), F.providerCleanup({
                            provider: "publift",
                            placement: e,
                            reason: "unmount"
                        }), ty(), tb(), c && null !== b && ((0, I.Od)().trackUserAction(B.adUnitDestroyed({
                            provider: "publift",
                            placement: e,
                            position: b,
                            reason: "unmount"
                        })), F.adUnitDestroyed({
                            provider: "publift",
                            placement: e,
                            position: b,
                            reason: "unmount"
                        })), W.resetAll(), o((0, x.Cx)(null)), d(!1), u(!1), m(!1), f(!1), D(!1), U.current = !1, k.current = !1, l.lD.log("Programmatic (Publift) ✨ Cleanup completed for ".concat(e, " (reset position to null)")))
                    }, [o, e]), (0, a.useEffect)(() => {
                        if ((A > te || A < 2) && s) {
                            let t = A > te ? "beyond range" : "new lap started";
                            l.lD.log("Programmatic (Publift) \uD83E\uDDF9 Visible position ".concat(A, " out of range (").concat(t, "), cleaning up for ").concat(e, "..."));
                            let i = A > te ? "out_of_range" : "new_lap";
                            (0, I.Od)().trackUserAction(B.providerCleanup({
                                provider: "publift",
                                placement: e,
                                reason: i
                            })), F.providerCleanup({
                                provider: "publift",
                                placement: e,
                                reason: i
                            }), ty(), tb(), (0, I.Od)().trackUserAction(B.adUnitDestroyed({
                                provider: "publift",
                                placement: e,
                                position: A,
                                reason: i
                            })), F.adUnitDestroyed({
                                provider: "publift",
                                placement: e,
                                position: A,
                                reason: i
                            }), W.resetAll(), o((0, x.Cx)(null)), u(!1), m(!1), f(!1), D(!1), k.current = !1, l.lD.log("Programmatic (Publift) ✅ Cleanup completed for ".concat(e, " - ").concat(t, " (reset position to null)"))
                        }
                    }, [A, s, e, o]), (0, a.useEffect)(() => {
                        i && c && !v ? (l.lD.log("Programmatic (Publift) \uD83D\uDC41️ Ad slot now visible to user for ".concat(e, " at position ").concat(b)), (0, I.Od)().trackUserAction(B.adDisplayed({
                            provider: "publift",
                            placement: e,
                            position: null != b ? b : void 0
                        })), F.adDisplayed({
                            provider: "publift",
                            placement: e,
                            position: null != b ? b : void 0
                        }), y(!0)) : i && c || !v || y(!1)
                    }, [i, c, v, e, b]), w) ? P ? (0, r.jsx)(tg, {
                        id: E.id,
                        type: h,
                        dataAttributes: {
                            "data-fuse": S
                        },
                        isVisible: i
                    }) : (l.lD.log("Programmatic (Publift) ⏳ Provider mounted but DOM elements hidden (position ".concat(b, ") - waiting for position ").concat(10)), null) : (l.lD.log("Programmatic (Publift) \uD83D\uDEAB Not rendering - no advertisement consent for ".concat(e)), null)
                };
            var tE = i(62760);
            let th = (0, i(4559).Mz)(t => t.roktAd, t => t.isDisplaying);
            var tS = i(46966),
                tI = i(12130);
            let tR = () => (0, tI.NL)() || (0, tI.kU)() ? l.Ru.Staging : l.Ru.Production;
            var tT = i(32770),
                tU = i.n(tT),
                tk = i(51853),
                tO = i(88848),
                tC = i(72255);
            let tL = t => {
                    let {
                        path: e,
                        adId: i,
                        trk: r,
                        shouldTrack: a
                    } = t, {
                        route: o,
                        session: n
                    } = q.default.getState();
                    if (!e || !e.match(/^\/[a-z0-9]/)) return;
                    let l = tj(n, o),
                        s = "wp_".concat(i, "_").concat(l, "_").concat(e.replace("/", ""));
                    e === tk.bP.route && q.default.dispatch((0, tO.jt)(tO.vW.BACKGROUND_AD_CTA)), tC.A.navigateTo(e, !1, a && "boolean" == typeof a ? {
                        search: "trk=".concat(s)
                    } : r ? {
                        search: "trk=".concat(r)
                    } : {})
                },
                tN = t => {
                    var e, i;
                    let r = !!(null == (e = t.params) ? void 0 : e.advert_id),
                        a = !!(null == (i = t.query) ? void 0 : i.ad_id);
                    return r || a
                },
                tF = () => {
                    tC.A.navigateTo(tC.A.getLastRoute("transfer", "/"))
                },
                tM = (t, e) => {
                    let i = t.region;
                    return tN(e) && (i = {
                        ...t.region,
                        country: tU()(e, "query.wp_country", tU()(t, "region.country"))
                    }), i
                },
                tj = (t, e) => {
                    let i = t.language;
                    return tN(e) && (i = tU()(e, "query.wp_language", t.language)), i
                };
            var tB = i(12127),
                tx = i(29713);
            let tz = () => {
                    let [t, e] = (0, a.useState)(void 0);
                    return (0, f.S)(() => {
                        (async () => {
                            try {
                                let t = await (0, tx.test)({
                                    logLevel: "error"
                                });
                                e(!!(null == t ? void 0 : t.hasAdBlocker))
                            } catch (t) {
                                e(!1)
                            }
                        })()
                    }), {
                        isReady: void 0 !== t,
                        result: t
                    }
                },
                tq = {
                    unstructuredEvent(t) {
                        let {
                            snowplowEvent: e,
                            isInvalidTraffic: i,
                            lotameAudiences: r
                        } = t, a = window.innerWidth, o = window.innerHeight, n = document.visibilityState;
                        return {
                            kind: function(t) {
                                let e;
                                switch (!0) {
                                    case "impressions" === t.category && "sendSnowplowWallpaperImpressions" === t.action:
                                        e = "web_ad_event_wallpaper_impression";
                                        break;
                                    case "click" === t.category && "clickThrough" === t.action:
                                        e = "web_ad_event_click_outbound";
                                        break;
                                    case "mainCta" === t.category && "click" === t.action:
                                        e = "web_ad_event_click_main_cta";
                                        break;
                                    case "vast" === t.category && "start" === t.action:
                                        e = "web_ad_event_vast_start";
                                        break;
                                    case "vast" === t.category && "firstQuartile" === t.action:
                                        e = "web_ad_event_vast_first_quartile";
                                        break;
                                    case "vast" === t.category && "midpoint" === t.action:
                                        e = "web_ad_event_vast_midpoint";
                                        break;
                                    case "vast" === t.category && "thirdQuartile" === t.action:
                                        e = "web_ad_event_vast_third_quartile";
                                        break;
                                    case "vast" === t.category && "complete" === t.action:
                                        e = "web_ad_event_vast_complete";
                                        break;
                                    case "vast" === t.category && "pause" === t.action:
                                        e = "web_ad_event_vast_pause";
                                        break;
                                    case "vast" === t.category && "resume" === t.action:
                                        e = "web_ad_event_vast_resume";
                                        break;
                                    case "vast" === t.category && "rewind" === t.action:
                                        e = "web_ad_event_vast_rewind";
                                        break;
                                    case "vast" === t.category && "mute" === t.action:
                                        e = "web_ad_event_vast_mute";
                                        break;
                                    case "vast" === t.category && "unmute" === t.action:
                                        e = "web_ad_event_vast_unmute";
                                        break;
                                    case "vast" === t.category && "impression" === t.action:
                                        e = "web_ad_event_vast_impression"
                                }
                                let i = "web_ad_event_picocategory_".concat(t.category, "_picoaction_").concat(t.action);
                                return null != e ? e : i
                            }(e),
                            info: {
                                ...tV(e),
                                pageVisibilityState: n,
                                pageWidth: a,
                                pageHeight: o,
                                ...void 0 !== i && {
                                    isInvalidTraffic: i
                                },
                                ...void 0 !== r && {
                                    lotameAudiences: r
                                }
                            }
                        }
                    }
                };

            function tV(t) {
                return Object.fromEntries(Object.entries(t).filter(t => {
                    let [e, i] = t;
                    return null != i
                }).map(t => {
                    let [e, i] = t;
                    return "value" === e && "string" == typeof i ? ["adtech_string_value", i] : "object" != typeof i || Array.isArray(i) ? [e, i] : [e, JSON.stringify(i)]
                }))
            }

            function tW(t) {
                let e = {
                    kind: t.kind,
                    ...t.info && {
                        info: tV(t.info)
                    }
                };
                (0, I.Od)().trackUserAction(e)
            }
            var tZ = i(2269),
                tH = i(51153),
                tG = i(76423),
                tY = i(7012),
                tQ = i(88919),
                tK = i(96773),
                tJ = i(68401),
                t$ = i(98172);
            let tX = t => {
                var e, i, o, c;
                let {
                    isFirstAdSdkLoad: u,
                    setIsFirstAdSdkLoad: p
                } = t, D = (0, n.wA)(), w = (0, a.useRef)(null), {
                    setAdsdkLoaded: b
                } = (0, s.on)(), A = (0, a.useRef)(performance.now()), E = (0, ta.jy)(), U = (() => {
                    let {
                        settings: t
                    } = (0, tE.k)();
                    switch (null == t ? void 0 : t.programmatic_ad_type) {
                        case "playwire_mrec":
                            return {
                                provider: "playwire", placement: "mrec"
                            };
                        case "playwire_banner":
                            return {
                                provider: "playwire", placement: "banner"
                            };
                        case "publift_mrec":
                            return {
                                provider: "publift", placement: "mrec"
                            };
                        case "publift_banner":
                            return {
                                provider: "publift", placement: "banner"
                            };
                        default:
                            return
                    }
                })(), {
                    shouldMount: k,
                    shouldDisplay: C
                } = tn();
                (() => {
                    let t = (0, n.d4)(K.mB);
                    (0, a.useEffect)(() => {
                        l.lD.init(null == t ? void 0 : t.email)
                    }, [null == t ? void 0 : t.email])
                })(), (() => {
                    let t = (0, n.wA)(),
                        [e, i] = (0, a.useState)(!1),
                        r = (0, a.useCallback)(t => {
                            l.lD.log("Programmatic \uD83D\uDCE4 Sending auction result:", t), F.auctionResultSent({
                                programmaticAdType: t.programmaticAdType,
                                hasBids: t.hasBids,
                                hasError: !!t.error
                            }), window.dispatchEvent(new CustomEvent("programmatic_auction_result", {
                                detail: t
                            }))
                        }, []),
                        o = (0, a.useCallback)(async t => {
                            l.lD.log("Programmatic \uD83C\uDFAF Running auction for request:", t);
                            try {
                                let e = t.programmaticAdType.split("_");
                                if (2 !== e.length) throw Error('Invalid programmaticAdType format: "'.concat(t.programmaticAdType, '". Expected format: "provider_placement"'));
                                let [i, r] = e;
                                if ("playwire" !== i && "publift" !== i) throw Error('Invalid provider: "'.concat(i, '". Expected "playwire" or "publift"'));
                                if ("mrec" !== r && "banner" !== r) throw Error('Invalid placement: "'.concat(r, '". Expected "mrec" or "banner"'));
                                if (O.hasFailed(i)) return l.lD.log("Programmatic \uD83D\uDEAB Script loading failed for ".concat(i, " - skipping auction for ").concat(r)), (0, I.Od)().trackUserAction(B.auctionFailed({
                                    provider: i,
                                    placement: r,
                                    position: t.position,
                                    error: "Script loading failed - auction prevented"
                                })), F.auctionFailed({
                                    provider: i,
                                    placement: r,
                                    position: t.position,
                                    error: "Script loading failed - auction prevented"
                                }), {
                                    hasBids: !1,
                                    programmaticAdType: t.programmaticAdType,
                                    error: "Script loading failed - auction prevented"
                                };
                                l.lD.log("Programmatic ⏳ Running ".concat(i, " auction for ").concat(r, "...")), (0, I.Od)().trackUserAction(B.auctionRequested({
                                    provider: i,
                                    placement: r,
                                    position: t.position
                                })), F.auctionRequested({
                                    provider: i,
                                    placement: r,
                                    position: t.position
                                });
                                let a = !1;
                                "playwire" === i ? a = await H(r, t.position) : "publift" === i && (a = await Y(r, t.position));
                                let o = {
                                    hasBids: a,
                                    programmaticAdType: t.programmaticAdType
                                };
                                return l.lD.log("Programmatic ✅ Auction completed:", o), (0, I.Od)().trackUserAction(B.auctionCompleted({
                                    provider: i,
                                    placement: r,
                                    position: t.position,
                                    hasBids: a
                                })), F.auctionCompleted({
                                    provider: i,
                                    placement: r,
                                    position: t.position,
                                    hasBids: a
                                }), o
                            } catch (i) {
                                l.lD.error("Programmatic \uD83D\uDCA5 Auction failed:", i);
                                let e = t.programmaticAdType.split("_");
                                if (2 === e.length) {
                                    let [r, a] = e;
                                    (0, I.Od)().trackUserAction(B.auctionFailed({
                                        provider: r,
                                        placement: a,
                                        position: t.position,
                                        error: i instanceof Error ? i.message : "Unknown error"
                                    })), F.auctionFailed({
                                        provider: r,
                                        placement: a,
                                        position: t.position,
                                        error: i instanceof Error ? i.message : "Unknown error"
                                    })
                                }
                                return {
                                    hasBids: !1,
                                    programmaticAdType: t.programmaticAdType,
                                    error: i instanceof Error ? i.message : "Unknown error"
                                }
                            }
                        }, []);
                    return (0, a.useEffect)(() => {
                        let e = async e => {
                            l.lD.log("Programmatic \uD83D\uDCE5 Received auction request:", e.detail), F.auctionRequestReceived({
                                programmaticAdType: e.detail.programmaticAdType,
                                position: e.detail.position
                            }), t((0, x.Cx)(e.detail.position)), l.lD.log("Programmatic \uD83D\uDCCD Dispatched requested position: ".concat(e.detail.position)), i(!0);
                            try {
                                let t = await o(e.detail);
                                r(t)
                            } catch (i) {
                                l.lD.error("Programmatic \uD83D\uDCA5 Error handling auction request:", i);
                                let t = e.detail.programmaticAdType.split("_");
                                if (2 === t.length) {
                                    let [r, a] = t;
                                    (0, I.Od)().trackUserAction(B.auctionFailed({
                                        provider: r,
                                        placement: a,
                                        position: e.detail.position,
                                        error: i instanceof Error ? i.message : "Unknown error"
                                    })), F.auctionFailed({
                                        provider: r,
                                        placement: a,
                                        position: e.detail.position,
                                        error: i instanceof Error ? i.message : "Unknown error"
                                    })
                                }
                                r({
                                    hasBids: !1,
                                    programmaticAdType: e.detail.programmaticAdType,
                                    error: i instanceof Error ? i.message : "Unknown error"
                                })
                            } finally {
                                i(!1)
                            }
                        };
                        return l.lD.log("Programmatic \uD83D\uDC42 Listening for auction requests..."), F.auctionManagerInitialized(), window.addEventListener(Q, e), () => {
                            l.lD.log("Programmatic \uD83D\uDD07 Stopped listening for auction requests"), F.auctionManagerCleanup(), window.removeEventListener(Q, e)
                        }
                    }, [o, r, t])
                })();
                let L = h(),
                    {
                        isReady: N,
                        result: M
                    } = tz(),
                    j = (0, a.useRef)(void 0),
                    z = (0, a.useRef)(void 0),
                    {
                        auth: q,
                        session: V,
                        user: W,
                        route: Z,
                        layout: G,
                        channel: J
                    } = (0, d.lV)(),
                    $ = (0, tG.mx)(tG.cm),
                    X = (0, tG.mx)(tG.Q0),
                    tt = Z.path.includes("download"),
                    te = tj(V, Z),
                    ti = tM(V, Z),
                    tr = (0, ta.uz)({
                        auth: q,
                        session: V
                    }),
                    to = (0, tB.Tw)(),
                    tl = (0, tB.av)(),
                    ts = (0, n.d4)(th),
                    td = tJ.A.areAccepted(),
                    tc = Z.path.match(/download/) ? "download" : "upload",
                    tu = !(0, n.d4)(K.lD),
                    tp = null != (o = (0, tY.Al)(W)) ? o : null,
                    tm = (null == Z || null == (e = Z.params) ? void 0 : e.advert_id) || void 0,
                    tg = (0, n.d4)(t$.JQ),
                    tf = (0, S.J)().hasRedeemedFreeTrial,
                    t_ = (0, R.vb)(T.V.UK_AGE),
                    tv = (0, R.vb)(T.V.US_DE_AGE_30_60),
                    ty = (0, R.vb)(T.V.FR_25_PLUS),
                    tw = (0, R.vb)(T.V.UK_FEMALE_18_PLUS),
                    tP = (() => {
                        switch (t_) {
                            case "35+":
                                return !0;
                            case "18-34":
                                return !1;
                            default:
                                return null
                        }
                    })(),
                    tb = (() => {
                        switch (tv) {
                            case "30-60":
                                return !0;
                            case "other":
                                return !1;
                            default:
                                return null
                        }
                    })(),
                    tI = (() => {
                        switch (ty) {
                            case "25+":
                                return !0;
                            case "18-25":
                                return !1;
                            default:
                                return null
                        }
                    })(),
                    tT = (() => {
                        switch (tw) {
                            case "female_18_plus":
                                return !0;
                            case "other":
                                return !1;
                            default:
                                return null
                        }
                    })(),
                    {
                        settings: tU,
                        experiments: tk
                    } = (0, tE.k)(),
                    tO = {
                        adDurationType: null != (c = null == tU ? void 0 : tU.ad_duration_type) ? c : "default",
                        customBackgroundWallpaperAdsEnabled: (null == (i = tk.custom_background_wallpapers) ? void 0 : i.name) === "custom_background_wallpapers_enabled"
                    },
                    tC = null === _.Ay || void 0 === _.Ay ? void 0 : _.Ay.identity,
                    tN = g(A.current, {
                        country: null == ti ? void 0 : ti.country,
                        product: l.PQ.Web,
                        firstAdSdkLoad: u ? "yes" : "no"
                    }),
                    tx = (0, a.useCallback)(() => {
                        var t;
                        return {
                            isTermsAccepted: td,
                            isAdBlockEnabled: !!M,
                            isAdvertisementEnabled: E,
                            client: l.rw.Transfer,
                            product: l.PQ.Web,
                            geo: ti,
                            language: te,
                            userAgent: tC,
                            channel: J,
                            user: {
                                key: tr,
                                isPayingUser: tu,
                                id: null == W ? void 0 : W.id,
                                auth0UserId: null == q ? void 0 : q.auth0UserId,
                                planTier: tp,
                                canSeeFreeTrials: !tu && !tf,
                                ukIs35PlusAge: tP,
                                usDeIs30To60Age: tb,
                                frIs25PlusAge: tI,
                                ukIsFemale18Plus: tT,
                                email: tg
                            },
                            nav: to,
                            transferBox: tl,
                            isRoktAdDisplaying: ts,
                            isPanelOpen: Z.isPanelOpen,
                            isPanelHalfOpen: Z.isPanelHalfOpen,
                            isPanelFullOpen: Z.isPanelFullOpen,
                            dropzoneActive: G.dropzoneActive,
                            demoAdvertId: tm,
                            userAction: tc,
                            ...tt && {
                                transferHasDocumentFiles: $,
                                transferHasVideoFiles: X
                            },
                            acceptedLanguages: null == (t = window.__session__.user) ? void 0 : t.accepted_languages,
                            tcf: {
                                tcString: L
                            },
                            programmaticAdType: U ? "".concat(U.provider, "_").concat(U.placement) : void 0
                        }
                    }, [td, M, E, ti, te, tr, tu, null == W ? void 0 : W.id, null == q ? void 0 : q.auth0UserId, to, tl, ts, Z.isPanelOpen, Z.isPanelHalfOpen, Z.isPanelFullOpen, G.dropzoneActive, tc, tm, tp, tf, J, L, tC, $, X, tt, t_, tv, ty, tw, U, tg]);
                (0, a.useEffect)(() => {
                    window.addEventListener(l.kb.UPDATE_CLIENT_STATE, t => {
                        if (t.detail) {
                            let {
                                invalidTraffic: e,
                                lotameAudiences: i,
                                ...r
                            } = t.detail;
                            D((0, tS.nf)(r)), j.current = e, z.current = i
                        } else D((0, tS.nf)(void 0))
                    })
                }, [D]);
                let tV = (0, tQ.Z)(tx());
                return (0, a.useEffect)(() => {
                    if (tV && !P()(tV, tx())) try {
                        window.dispatchEvent(new CustomEvent(l.DF.AD_SDK_INTERNAL_STATE_UPDATE, {
                            detail: tx()
                        }))
                    } catch (t) {
                        y.L.addError(Error("ad_sdk_internal_state_update_failed"), {
                            errorMessage: t.message
                        })
                    }
                }, [tx, tV]), (0, a.useEffect)(() => {
                    N && (async () => {
                        let t = {
                                ...l.YJ
                            },
                            e = await t.init({
                                adUnitId: v.iV,
                                adUnitProduct: l.PQ.Web,
                                adUnitClient: l.rw.Transfer,
                                clientEnvironment: tR(),
                                applicationState: tx(),
                                clientEventTracking: {
                                    trackUnstructSnowplowEvent: (t, e) => {
                                        (0, I.Od)().trackUserAction(tq.unstructuredEvent({
                                            snowplowEvent: e,
                                            isInvalidTraffic: j.current,
                                            lotameAudiences: z.current
                                        })), tK.Ay.trackUnstructSnowplowEvent(t, e)
                                    }
                                },
                                clientPicoTracking: {
                                    trackUserAction: tW
                                },
                                errorTracking: {
                                    trackError: y.L.addError,
                                    addTiming: tN,
                                    addAction: m,
                                    addRumGlobalContext: y.L.addRumGlobalContext
                                },
                                clientActions: {
                                    showDropzone: tB.pV,
                                    showApp: tB.fe,
                                    hideApp: tB.WI,
                                    closePanel: tF,
                                    navigateTo: tL,
                                    startJurassicWorldTransferBoxEffect: () => {
                                        (0, tB.Yw)("jurassic-world")
                                    },
                                    openCustomWallpaperModal: () => {
                                        D((0, tZ.VK)(tH.$.adWallpaper))
                                    }
                                },
                                experiments: tO
                            });
                        b(!0), w.current = "object" == typeof e && e.unmount ? e.unmount : null
                    })()
                }, [N]), (0, f.S)(() => () => {
                    var t;
                    null == p || p(!1), null == (t = w.current) || t.call(w)
                }), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: "micro-frontend-container",
                        id: v.iV,
                        "data-testid": v.iV
                    }), k && (null == U ? void 0 : U.provider) === "playwire" && (0, r.jsx)(tD, {
                        placement: U.placement,
                        isVisible: C
                    }), k && (null == U ? void 0 : U.provider) === "publift" && (0, r.jsx)(tA, {
                        placement: U.placement,
                        isVisible: C
                    })]
                })
            };
            var t0 = i(78598);
            class t1 extends a.PureComponent {
                static getDerivedStateFromError() {
                    return {
                        hasError: !0
                    }
                }
                componentDidCatch(t) {
                    let e = this.props.isMobile ? v.H.ERROR_BOUNDARY : v.TP.ERROR_BOUNDARY;
                    t0.A.track(Error(e), {
                        errorMessage: t.message
                    })
                }
                render() {
                    return this.state.hasError ? (0, r.jsx)(r.Fragment, {}) : this.props.children
                }
                constructor(...t) {
                    super(...t), this.state = {
                        hasError: !1
                    }
                }
            }
            var t3 = i(62373);
            let t8 = t => {
                    var e, i;
                    let {
                        isFirstAdSdkLoad: o,
                        setIsFirstAdSdkLoad: c
                    } = t, u = (0, n.wA)(), p = (0, a.useRef)(null), {
                        setAdsdkLoaded: D
                    } = (0, s.on)(), w = (0, d.lV)(), b = (0, a.useRef)(performance.now()), A = h(), {
                        isReady: E,
                        result: S
                    } = tz(), R = (0, a.useRef)(void 0), T = (0, a.useRef)(void 0), {
                        auth: U,
                        session: k,
                        user: O,
                        route: C,
                        layout: L,
                        transfer: N
                    } = w, F = (0, tQ.Z)(w), M = tj(k, C), j = tM(k, C), B = (0, ta.uz)({
                        auth: U,
                        session: k
                    }), x = tJ.A.areAccepted(), z = (0, tY.WU)(O), q = (null == C || null == (e = C.params) ? void 0 : e.advert_id) || void 0, V = null != (i = (0, tY.Al)(O)) ? i : null, W = (0, n.d4)(t$.JQ), Z = null === _.Ay || void 0 === _.Ay ? void 0 : _.Ay.identity, H = g(b.current, {
                        country: null == j ? void 0 : j.country,
                        product: l.PQ.Web,
                        firstAdSdkLoad: o ? "yes" : "no"
                    }), G = (0, ta.jy)(), Y = a.useCallback(() => {
                        var t;
                        return {
                            isTermsAccepted: x,
                            isAdBlockEnabled: !!S,
                            isAdvertisementEnabled: G,
                            client: l.rw.Transfer,
                            product: l.PQ.WebMobile,
                            geo: j,
                            language: M,
                            userAgent: Z,
                            user: {
                                key: B,
                                isPayingUser: z,
                                id: null == O ? void 0 : O.id,
                                auth0UserId: null == U ? void 0 : U.auth0UserId,
                                planTier: V,
                                email: W
                            },
                            isPanelOpen: C.isPanelOpen,
                            isPanelHalfOpen: C.isPanelHalfOpen,
                            isPanelFullOpen: C.isPanelFullOpen,
                            dropzoneActive: L.dropzoneActive,
                            demoAdvertId: q,
                            acceptedLanguages: null == (t = window.__session__.user) ? void 0 : t.accepted_languages,
                            tcf: {
                                tcString: A
                            },
                            transfer: {
                                state: N.state
                            }
                        }
                    }, [x, S, j, M, B, z, null == O ? void 0 : O.id, null == U ? void 0 : U.auth0UserId, C.isPanelOpen, C.isPanelHalfOpen, C.isPanelFullOpen, L.dropzoneActive, q, N.state, V, A, Z, G, W]);
                    return (0, a.useEffect)(() => {
                        window.addEventListener(l.kb.UPDATE_CLIENT_STATE, t => {
                            if (t.detail) {
                                let {
                                    invalidTraffic: e,
                                    lotameAudiences: i,
                                    ...r
                                } = t.detail;
                                u((0, tS.nf)(r)), R.current = e, T.current = i
                            } else u((0, tS.nf)(void 0))
                        })
                    }, [u]), a.useEffect(() => {
                        if (F && !P()(F, Y())) try {
                            window.dispatchEvent(new CustomEvent(l.DF.AD_SDK_INTERNAL_STATE_UPDATE, {
                                detail: Y()
                            }))
                        } catch (t) {
                            y.L.addError(Error("ad_sdk_internal_state_update_failed"), {
                                errorMessage: t.message
                            })
                        }
                    }, [Y, F]), a.useEffect(() => {
                        E && (async () => {
                            let t = {
                                    ...l.YJ
                                },
                                e = await t.init({
                                    adUnitId: v.hG,
                                    adUnitProduct: l.PQ.WebMobile,
                                    adUnitClient: l.rw.Transfer,
                                    clientEnvironment: tR(),
                                    applicationState: Y(),
                                    clientEventTracking: {
                                        trackUnstructSnowplowEvent: (t, e) => {
                                            (0, I.Od)().trackUserAction(tq.unstructuredEvent({
                                                snowplowEvent: e,
                                                isInvalidTraffic: R.current,
                                                lotameAudiences: T.current
                                            })), t3.A.trackUnstructSnowplowEvent(t, e)
                                        }
                                    },
                                    clientPicoTracking: {
                                        trackUserAction: tW
                                    },
                                    errorTracking: {
                                        trackError: y.L.addError,
                                        addTiming: H,
                                        addAction: m,
                                        addRumGlobalContext: y.L.addRumGlobalContext
                                    }
                                });
                            D(!0), p.current = "object" == typeof e && e.unmount ? e.unmount : null
                        })()
                    }, [E]), (0, f.S)(() => () => {
                        var t;
                        null == c || c(!1), null == (t = p.current) || t.call(p)
                    }), (0, r.jsx)("div", {
                        className: v.hG,
                        id: v.hG,
                        "data-testid": v.hG
                    })
                },
                t2 = () => {
                    let {
                        data: {
                            isAdWallpaperEnabled: t
                        }
                    } = (0, s.on)(), [e, i] = (0, a.useState)(!0), c = _.Ay.isMobile, u = document.getElementById(d.DC), p = (0, D.g)(), {
                        session: m
                    } = (0, n.d4)(t => ({
                        session: t.session
                    })), y = g(0, {
                        country: m.region.country.toLowerCase(),
                        product: c ? l.PQ.WebMobile : l.PQ.Web
                    });
                    return ((0, f.S)(() => {
                        y(v.Oc, performance.now())
                    }), t && u && !p) ? (0, o.createPortal)((0, r.jsx)(t1, {
                        isMobile: c,
                        children: (0, r.jsx)(c ? t8 : tX, {
                            isFirstAdSdkLoad: e,
                            setIsFirstAdSdkLoad: i
                        })
                    }), u) : null
                }
        },
        53952: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AjaxHelper = void 0;
            class i {
                constructor(t) {
                    this.options = t, this.request = new XMLHttpRequest
                }
                abort() {
                    var t;
                    try {
                        this.request.abort()
                    } catch (e) {
                        null == (t = this.options.logger) || t.warn("XHR request abort failed")
                    }
                }
                send() {
                    return new Promise((t, e) => (this.request.open(this.options.method, this.options.url, !0), this.request.onload = () => {
                        t(this.request.status)
                    }, this.request.onerror = () => {
                        e(this.request.status)
                    }, this.request.send()))
                }
            }
            e.AjaxHelper = i
        },
        60029: t => {
            t.exports = {
                wrapper: "BackgroundCoverAlign_wrapper__u7OvY"
            }
        },
        84439: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.logging = e.Logger = e.LogManager = void 0;
            let r = i(38356);
            class a extends r.EventEmitter {
                constructor() {
                    super(...arguments), this.options = {
                        minLevels: {
                            "": "warn"
                        }
                    }, this.consoleLoggerRegistered = !1
                }
                configure(t) {
                    return this.options = Object.assign({}, this.options, t), this
                }
                getLogger(t) {
                    let e = "none",
                        i = "";
                    for (let r in this.options.minLevels) t.startsWith(r) && r.length >= i.length && (e = this.options.minLevels[r], i = r);
                    return new o(this, t, e)
                }
                onLogEntry(t) {
                    return this.on("log", t), this
                }
                registerConsoleLogger() {
                    return this.consoleLoggerRegistered || (this.onLogEntry(t => {
                        let e = `[${t.module}] ${t.message}`;
                        switch (t.level) {
                            case "trace":
                                console.trace(e);
                                break;
                            case "debug":
                                console.debug(e);
                                break;
                            case "info":
                                console.info(e);
                                break;
                            case "warn":
                                console.warn(e);
                                break;
                            case "error":
                                console.error(e);
                                break;
                            default:
                                console.log(`{${t.level}} ${e}`)
                        }
                    }), this.consoleLoggerRegistered = !0), this
                }
            }
            e.LogManager = a;
            class o {
                constructor(t, e, i) {
                    this.levels = {
                        trace: 1,
                        debug: 2,
                        info: 3,
                        warn: 4,
                        error: 5
                    }, this.logManager = t, this.module = e, this.minLevel = this.levelToInt(i)
                }
                levelToInt(t) {
                    return t.toLowerCase() in this.levels ? this.levels[t.toLowerCase()] : 99
                }
                log(t, e) {
                    if (this.levelToInt(t) < this.minLevel) return;
                    let i = {
                            level: t,
                            module: this.module,
                            message: e
                        },
                        r = Error("");
                    if (r.stack) {
                        let t = r.stack.split("\n"),
                            e = 1;
                        for (; e < t.length && t[e].includes("at Logger.Object.");) e++;
                        e < t.length && (i.location = t[e].slice(t[e].indexOf("at ") + 3, t[e].length))
                    }
                    this.logManager.emit("log", i)
                }
                trace(t) {
                    this.log("trace", t)
                }
                debug(t) {
                    this.log("debug", t)
                }
                info(t) {
                    this.log("info", t)
                }
                warn(t) {
                    this.log("warn", t)
                }
                error(t) {
                    this.log("error", t)
                }
            }
            e.Logger = o, e.logging = new a
        },
        87476: (t, e, i) => {
            "use strict";
            i.d(e, {
                g: () => a
            });
            var r = i(21462);

            function a() {
                let [t, e] = (0, r.useState)(document.visibilityState), i = (0, r.useCallback)(() => {
                    e(document.visibilityState)
                }, [e]);
                return (0, r.useEffect)(() => (document.addEventListener("visibilitychange", i), () => document.removeEventListener("visibilitychange", i)), [i]), t
            }
        }
    }
]);
//# sourceMappingURL=6550.aaa011bd6afd06fb.js.map
