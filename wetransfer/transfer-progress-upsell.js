"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6836], {
        8995: (e, t, r) => {
            r.r(t), r.d(t, {
                Progress: () => v,
                default: () => y
            });
            var s = r(23798),
                i = r(50084),
                n = r.n(i),
                a = r(21462),
                l = r(38169),
                o = r(97197),
                d = r(78883),
                c = r(28338),
                p = r(56682),
                f = r(78598),
                T = r(72255),
                m = r(66976),
                u = r(10995),
                h = r(10694),
                D = r(52458),
                w = r(82901);
            class v extends a.Component {
                pollTransferDetails() {
                    let {
                        transfer: e,
                        pending: t
                    } = m.default.getState(), {
                        currentTransferDetails: r,
                        fetchTransfer: s
                    } = this.props;
                    if ((null == r ? void 0 : r.state) === h.r.DOWNLOADABLE && e.id === r.id) return void clearTimeout(this.pollTimer);
                    t["retrieveTransfer_".concat(e.id)] || s(e.id), clearTimeout(this.pollTimer), this.pollTimer = setTimeout(this.pollTransferDetails, 2500)
                }
                async anonPollTransferDetails() {
                    let {
                        transfer: e
                    } = m.default.getState(), {
                        convertedTransfer: t
                    } = this.state;
                    if ((null == t ? void 0 : t.state) === h.r.DOWNLOADABLE && e.id === t.id) return void clearTimeout(this.pollTimer);
                    if (e.downloaderEmailVerification === c.B.TRACKING || e.downloaderEmailVerification === c.B.RESTRICTED) {
                        clearTimeout(this.pollTimer), this.setState({
                            convertedTransfer: (e => {
                                let t = {};
                                return t.id = e.id, t.number_of_downloads = 0, t.number_of_previews = 0, t.security_hash = e.securityHash, t.display_name = e.displayName, t.transfer_type = parseInt(Object.entries(o.R0).find(t => {
                                    let [, r] = t;
                                    return r === e.type
                                })[0], 10), t.shortened_url = e.shortURL, t.password_protected = !!e.password, t.recipients = e.recipients, t.creator = {
                                    email: e.sender,
                                    auth0UserId: ""
                                }, t.description = e.message, t.from = e.sender, t.items = e.items, t.itemsTree = e.itemsTree, e.expiryInSeconds && (t.expiresAt = new Date(Date.now() + 1e3 * e.expiryInSeconds).toISOString()), t.expiryInSeconds = e.expiryInSeconds, t.viewOption = e.viewOption, t.downloaderEmailVerification = e.downloaderEmailVerification, t.paid = e.paid || !1, t.size = e.size, t.isRecoverable = e.isRecoverable, t.allowlist = e.allowlist, t
                            })(e)
                        });
                        return
                    }
                    try {
                        let t = await w.QQ.fetchTransfer(e.id, e.securityHash, !1, e.password);
                        t.recipients = e.recipients, t.from = e.sender, t.items = t.items.map(e => ({
                            ...e,
                            file: {
                                id: e.id,
                                state: t.state
                            }
                        })), t.itemsTree = {
                            items: t.items
                        }, this.setState({
                            convertedTransfer: (0, D.J)(t)
                        })
                    } catch (e) {
                        f.A.track(e)
                    } finally {
                        clearTimeout(this.pollTimer), this.pollTimer = setTimeout(this.anonPollTransferDetails, 2500)
                    }
                }
                closeProgressPanel() {
                    T.A.navigateTo(T.A.getLastRoute("transfer", "/"))
                }
                componentDidMount() {
                    let {
                        user: e
                    } = this.props;
                    this.timer = setTimeout(this.closeProgressPanel, 3e4), (null == e ? void 0 : e.loggedIn) ? this.pollTransferDetails() : this.anonPollTransferDetails()
                }
                componentWillUnmount() {
                    this.resetTimer(), clearTimeout(this.pollTimer)
                }
                render() {
                    let {
                        currentTransferDetails: e
                    } = this.props;
                    return (0, s.jsx)("div", {
                        className: "details",
                        onClick: this.resetTimer,
                        onMouseEnter: this.resetTimer,
                        children: (0, s.jsx)(d.E, {
                            transfer: this.state.convertedTransfer || e,
                            transferGroup: p.a.SENT,
                            fromTransferWindowUpload: !0,
                            onRoktAdDisplayed: this.resetTimer
                        })
                    })
                }
                constructor(e) {
                    super(e), this.timer = null, this.pollTimer = null, this.resetTimer = () => {
                        clearTimeout(this.timer)
                    }, this.state = {
                        convertedTransfer: null
                    }, this.pollTransferDetails = this.pollTransferDetails.bind(this), this.anonPollTransferDetails = this.anonPollTransferDetails.bind(this)
                }
            }
            v.propTypes = {
                user: n().object.isRequired,
                transfer: n().object.isRequired,
                currentTransferDetails: n().object,
                pending: n().object.isRequired,
                fetchTransfer: n().func.isRequired
            };
            let g = {
                    fetchTransfer: u.A.Transfers.getTransfer
                },
                y = (0, l.Ng)(e => ({
                    user: e.user,
                    pending: e.pending,
                    transfer: e.transfer,
                    currentTransferDetails: e.transfers.transfer
                }), g)(v)
        }
    }
]);
//# sourceMappingURL=transfer-progress-upsell.d76a9adc970bce54.js.map