!function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).adapter = e();
}(function() {
    return (function a(o, s, c) {
        function d(t, e) {
            if (!s[t]) {
                if (!o[t]) {
                    var r = "function" == typeof require && undefined;
                    if (!e && r) return r(t, !0);
                    if (p) return p(t, !0);
                    var n = new Error("Cannot find module '" + t + "'");
                    throw n.code = "MODULE_NOT_FOUND", n;
                }
                var i = s[t] = {
                    exports: {}
                };
                o[t][0].call(i.exports, function(e) {
                    return d(o[t][1][e] || e);
                }, i, i.exports, a, o, s, c);
            }
            return s[t].exports;
        }
        for(var p = "function" == typeof require && undefined, e = 0; e < c.length; e++)d(c[e]);
        return d;
    })({
        1: [
            function(e, t, r) {
                "use strict";
                var n = (0, e("./adapter_factory.js").adapterFactory)({
                    window: window
                });
                t.exports = n;
            },
            {
                "./adapter_factory.js": 2
            }
        ],
        2: [
            function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.adapterFactory = function() {
                    var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).window, t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                        shimChrome: !0,
                        shimFirefox: !0,
                        shimEdge: !0,
                        shimSafari: !0
                    }, r = a.log, n = a.detectBrowser(e), i = {
                        browserDetails: n,
                        commonShim: p,
                        extractVersion: a.extractVersion,
                        disableLog: a.disableLog,
                        disableWarnings: a.disableWarnings
                    };
                    switch(n.browser){
                        case "chrome":
                            if (!o || !o.shimPeerConnection || !t.shimChrome) return r("Chrome shim is not included in this adapter release."), i;
                            r("adapter.js shimming chrome."), (i.browserShim = o).shimGetUserMedia(e), o.shimMediaStream(e), o.shimPeerConnection(e), o.shimOnTrack(e), o.shimAddTrackRemoveTrack(e), o.shimGetSendersWithDtmf(e), o.shimGetStats(e), o.shimSenderReceiverGetStats(e), o.fixNegotiationNeeded(e), p.shimRTCIceCandidate(e), p.shimConnectionState(e), p.shimMaxMessageSize(e), p.shimSendThrowTypeError(e), p.removeAllowExtmapMixed(e);
                            break;
                        case "firefox":
                            if (!c || !c.shimPeerConnection || !t.shimFirefox) return r("Firefox shim is not included in this adapter release."), i;
                            r("adapter.js shimming firefox."), (i.browserShim = c).shimGetUserMedia(e), c.shimPeerConnection(e), c.shimOnTrack(e), c.shimRemoveStream(e), c.shimSenderGetStats(e), c.shimReceiverGetStats(e), c.shimRTCDataChannel(e), c.shimAddTransceiver(e), c.shimCreateOffer(e), c.shimCreateAnswer(e), p.shimRTCIceCandidate(e), p.shimConnectionState(e), p.shimMaxMessageSize(e), p.shimSendThrowTypeError(e);
                            break;
                        case "edge":
                            if (!s || !s.shimPeerConnection || !t.shimEdge) return r("MS edge shim is not included in this adapter release."), i;
                            r("adapter.js shimming edge."), (i.browserShim = s).shimGetUserMedia(e), s.shimGetDisplayMedia(e), s.shimPeerConnection(e), s.shimReplaceTrack(e), p.shimMaxMessageSize(e), p.shimSendThrowTypeError(e);
                            break;
                        case "safari":
                            if (!d || !t.shimSafari) return r("Safari shim is not included in this adapter release."), i;
                            r("adapter.js shimming safari."), (i.browserShim = d).shimRTCIceServerUrls(e), d.shimCreateOfferLegacy(e), d.shimCallbacksAPI(e), d.shimLocalStreamsAPI(e), d.shimRemoteStreamsAPI(e), d.shimTrackEventTransceiver(e), d.shimGetUserMedia(e), p.shimRTCIceCandidate(e), p.shimMaxMessageSize(e), p.shimSendThrowTypeError(e), p.removeAllowExtmapMixed(e);
                            break;
                        default:
                            r("Unsupported browser!");
                    }
                    return i;
                };
                var a = n(e("./utils")), o = n(e("./chrome/chrome_shim")), s = n(e("./edge/edge_shim")), c = n(e("./firefox/firefox_shim")), d = n(e("./safari/safari_shim")), p = n(e("./common_shim"));
                function n(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t;
                }
            },
            {
                "./chrome/chrome_shim": 3,
                "./common_shim": 6,
                "./edge/edge_shim": 7,
                "./firefox/firefox_shim": 11,
                "./safari/safari_shim": 14,
                "./utils": 15
            }
        ],
        3: [
            function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.shimGetDisplayMedia = r.shimGetUserMedia = void 0;
                var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, n = e("./getusermedia");
                Object.defineProperty(r, "shimGetUserMedia", {
                    enumerable: !0,
                    get: function() {
                        return n.shimGetUserMedia;
                    }
                });
                var i = e("./getdisplaymedia");
                Object.defineProperty(r, "shimGetDisplayMedia", {
                    enumerable: !0,
                    get: function() {
                        return i.shimGetDisplayMedia;
                    }
                }), r.shimMediaStream = function(e) {
                    e.MediaStream = e.MediaStream || e.webkitMediaStream;
                }, r.shimOnTrack = function(a) {
                    if ("object" !== (void 0 === a ? "undefined" : s(a)) || !a.RTCPeerConnection || "ontrack" in a.RTCPeerConnection.prototype) c.wrapPeerConnectionEvent(a, "track", function(e) {
                        return e.transceiver || Object.defineProperty(e, "transceiver", {
                            value: {
                                receiver: e.receiver
                            }
                        }), e;
                    });
                    else {
                        Object.defineProperty(a.RTCPeerConnection.prototype, "ontrack", {
                            get: function() {
                                return this._ontrack;
                            },
                            set: function(e) {
                                this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e);
                            },
                            enumerable: !0,
                            configurable: !0
                        });
                        var e = a.RTCPeerConnection.prototype.setRemoteDescription;
                        a.RTCPeerConnection.prototype.setRemoteDescription = function() {
                            var i = this;
                            return this._ontrackpoly || (this._ontrackpoly = function(n) {
                                n.stream.addEventListener("addtrack", function(t) {
                                    var e = void 0;
                                    e = a.RTCPeerConnection.prototype.getReceivers ? i.getReceivers().find(function(e) {
                                        return e.track && e.track.id === t.track.id;
                                    }) : {
                                        track: t.track
                                    };
                                    var r = new Event("track");
                                    r.track = t.track, r.receiver = e, r.transceiver = {
                                        receiver: e
                                    }, r.streams = [
                                        n.stream
                                    ], i.dispatchEvent(r);
                                }), n.stream.getTracks().forEach(function(t) {
                                    var e = void 0;
                                    e = a.RTCPeerConnection.prototype.getReceivers ? i.getReceivers().find(function(e) {
                                        return e.track && e.track.id === t.id;
                                    }) : {
                                        track: t
                                    };
                                    var r = new Event("track");
                                    r.track = t, r.receiver = e, r.transceiver = {
                                        receiver: e
                                    }, r.streams = [
                                        n.stream
                                    ], i.dispatchEvent(r);
                                });
                            }, this.addEventListener("addstream", this._ontrackpoly)), e.apply(this, arguments);
                        };
                    }
                }, r.shimGetSendersWithDtmf = function(e) {
                    if ("object" === (void 0 === e ? "undefined" : s(e)) && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
                        var n = function(e, t) {
                            return {
                                track: t,
                                get dtmf () {
                                    return void 0 === this._dtmf && ("audio" === t.kind ? this._dtmf = e.createDTMFSender(t) : this._dtmf = null), this._dtmf;
                                },
                                _pc: e
                            };
                        };
                        if (!e.RTCPeerConnection.prototype.getSenders) {
                            e.RTCPeerConnection.prototype.getSenders = function() {
                                return this._senders = this._senders || [], this._senders.slice();
                            };
                            var i = e.RTCPeerConnection.prototype.addTrack;
                            e.RTCPeerConnection.prototype.addTrack = function(e, t) {
                                var r = i.apply(this, arguments);
                                return r || (r = n(this, e), this._senders.push(r)), r;
                            };
                            var r = e.RTCPeerConnection.prototype.removeTrack;
                            e.RTCPeerConnection.prototype.removeTrack = function(e) {
                                r.apply(this, arguments);
                                var t = this._senders.indexOf(e);
                                -1 !== t && this._senders.splice(t, 1);
                            };
                        }
                        var a = e.RTCPeerConnection.prototype.addStream;
                        e.RTCPeerConnection.prototype.addStream = function(e) {
                            var t = this;
                            this._senders = this._senders || [], a.apply(this, [
                                e
                            ]), e.getTracks().forEach(function(e) {
                                t._senders.push(n(t, e));
                            });
                        };
                        var t = e.RTCPeerConnection.prototype.removeStream;
                        e.RTCPeerConnection.prototype.removeStream = function(e) {
                            var r = this;
                            this._senders = this._senders || [], t.apply(this, [
                                e
                            ]), e.getTracks().forEach(function(t) {
                                var e = r._senders.find(function(e) {
                                    return e.track === t;
                                });
                                e && r._senders.splice(r._senders.indexOf(e), 1);
                            });
                        };
                    } else if ("object" === (void 0 === e ? "undefined" : s(e)) && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
                        var o = e.RTCPeerConnection.prototype.getSenders;
                        e.RTCPeerConnection.prototype.getSenders = function() {
                            var t = this, e = o.apply(this, []);
                            return e.forEach(function(e) {
                                return e._pc = t;
                            }), e;
                        }, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                            get: function() {
                                return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
                            }
                        });
                    }
                }, r.shimGetStats = function(e) {
                    if (!e.RTCPeerConnection) return;
                    var s = e.RTCPeerConnection.prototype.getStats;
                    e.RTCPeerConnection.prototype.getStats = function() {
                        var r = this, e = Array.prototype.slice.call(arguments), t = e[0], n = e[1], i = e[2];
                        if (0 < arguments.length && "function" == typeof t) return s.apply(this, arguments);
                        if (0 === s.length && (0 === arguments.length || "function" != typeof t)) return s.apply(this, []);
                        function a(e) {
                            var n = {};
                            return e.result().forEach(function(t) {
                                var r = {
                                    id: t.id,
                                    timestamp: t.timestamp,
                                    type: {
                                        localcandidate: "local-candidate",
                                        remotecandidate: "remote-candidate"
                                    }[t.type] || t.type
                                };
                                t.names().forEach(function(e) {
                                    r[e] = t.stat(e);
                                }), n[r.id] = r;
                            }), n;
                        }
                        function o(t) {
                            return new Map(Object.keys(t).map(function(e) {
                                return [
                                    e,
                                    t[e]
                                ];
                            }));
                        }
                        if (2 <= arguments.length) return s.apply(this, [
                            function(e) {
                                n(o(a(e)));
                            },
                            t
                        ]);
                        return new Promise(function(t, e) {
                            s.apply(r, [
                                function(e) {
                                    t(o(a(e)));
                                },
                                e
                            ]);
                        }).then(n, i);
                    };
                }, r.shimSenderReceiverGetStats = function(a) {
                    if (!("object" === (void 0 === a ? "undefined" : s(a)) && a.RTCPeerConnection && a.RTCRtpSender && a.RTCRtpReceiver)) return;
                    if (!("getStats" in a.RTCRtpSender.prototype)) {
                        var r = a.RTCPeerConnection.prototype.getSenders;
                        r && (a.RTCPeerConnection.prototype.getSenders = function() {
                            var t = this, e = r.apply(this, []);
                            return e.forEach(function(e) {
                                return e._pc = t;
                            }), e;
                        });
                        var t = a.RTCPeerConnection.prototype.addTrack;
                        t && (a.RTCPeerConnection.prototype.addTrack = function() {
                            var e = t.apply(this, arguments);
                            return e._pc = this, e;
                        }), a.RTCRtpSender.prototype.getStats = function() {
                            var t = this;
                            return this._pc.getStats().then(function(e) {
                                return c.filterStats(e, t.track, !0);
                            });
                        };
                    }
                    if (!("getStats" in a.RTCRtpReceiver.prototype)) {
                        var n = a.RTCPeerConnection.prototype.getReceivers;
                        n && (a.RTCPeerConnection.prototype.getReceivers = function() {
                            var t = this, e = n.apply(this, []);
                            return e.forEach(function(e) {
                                return e._pc = t;
                            }), e;
                        }), c.wrapPeerConnectionEvent(a, "track", function(e) {
                            return e.receiver._pc = e.srcElement, e;
                        }), a.RTCRtpReceiver.prototype.getStats = function() {
                            var t = this;
                            return this._pc.getStats().then(function(e) {
                                return c.filterStats(e, t.track, !1);
                            });
                        };
                    }
                    if (!("getStats" in a.RTCRtpSender.prototype && "getStats" in a.RTCRtpReceiver.prototype)) return;
                    var o = a.RTCPeerConnection.prototype.getStats;
                    a.RTCPeerConnection.prototype.getStats = function(e) {
                        if (0 < arguments.length && e instanceof a.MediaStreamTrack) {
                            var t = e, r = void 0, n = void 0, i = void 0;
                            return this.getSenders().forEach(function(e) {
                                e.track === t && (r ? i = !0 : r = e);
                            }), this.getReceivers().forEach(function(e) {
                                return e.track === t && (n ? i = !0 : n = e), e.track === t;
                            }), i || r && n ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : r ? r.getStats() : n ? n.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
                        }
                        return o.apply(this, arguments);
                    };
                }, r.shimAddTrackRemoveTrackWithNative = p, r.shimAddTrackRemoveTrack = function(o) {
                    if (!o.RTCPeerConnection) return;
                    var e = c.detectBrowser(o);
                    if (o.RTCPeerConnection.prototype.addTrack && 65 <= e.version) return p(o);
                    var r = o.RTCPeerConnection.prototype.getLocalStreams;
                    o.RTCPeerConnection.prototype.getLocalStreams = function() {
                        var t = this, e = r.apply(this);
                        return this._reverseStreams = this._reverseStreams || {}, e.map(function(e) {
                            return t._reverseStreams[e.id];
                        });
                    };
                    var n = o.RTCPeerConnection.prototype.addStream;
                    o.RTCPeerConnection.prototype.addStream = function(e) {
                        var r = this;
                        if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, e.getTracks().forEach(function(t) {
                            if (r.getSenders().find(function(e) {
                                return e.track === t;
                            })) throw new DOMException("Track already exists.", "InvalidAccessError");
                        }), !this._reverseStreams[e.id]) {
                            var t = new o.MediaStream(e.getTracks());
                            this._streams[e.id] = t, this._reverseStreams[t.id] = e, e = t;
                        }
                        n.apply(this, [
                            e
                        ]);
                    };
                    var t = o.RTCPeerConnection.prototype.removeStream;
                    function i(n, e) {
                        var i = e.sdp;
                        return Object.keys(n._reverseStreams || []).forEach(function(e) {
                            var t = n._reverseStreams[e], r = n._streams[t.id];
                            i = i.replace(new RegExp(r.id, "g"), t.id);
                        }), new RTCSessionDescription({
                            type: e.type,
                            sdp: i
                        });
                    }
                    o.RTCPeerConnection.prototype.removeStream = function(e) {
                        this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t.apply(this, [
                            this._streams[e.id] || e
                        ]), delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id], delete this._streams[e.id];
                    }, o.RTCPeerConnection.prototype.addTrack = function(t, e) {
                        var r = this;
                        if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                        var n = [].slice.call(arguments, 1);
                        if (1 !== n.length || !n[0].getTracks().find(function(e) {
                            return e === t;
                        })) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
                        if (this.getSenders().find(function(e) {
                            return e.track === t;
                        })) throw new DOMException("Track already exists.", "InvalidAccessError");
                        this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
                        var i = this._streams[e.id];
                        if (i) i.addTrack(t), Promise.resolve().then(function() {
                            r.dispatchEvent(new Event("negotiationneeded"));
                        });
                        else {
                            var a = new o.MediaStream([
                                t
                            ]);
                            this._streams[e.id] = a, this._reverseStreams[a.id] = e, this.addStream(a);
                        }
                        return this.getSenders().find(function(e) {
                            return e.track === t;
                        });
                    }, [
                        "createOffer",
                        "createAnswer"
                    ].forEach(function(e) {
                        var t = o.RTCPeerConnection.prototype[e], r = d({}, e, function() {
                            var r = this, n = arguments;
                            return arguments.length && "function" == typeof arguments[0] ? t.apply(this, [
                                function(e) {
                                    var t = i(r, e);
                                    n[0].apply(null, [
                                        t
                                    ]);
                                },
                                function(e) {
                                    n[1] && n[1].apply(null, e);
                                },
                                arguments[2]
                            ]) : t.apply(this, arguments).then(function(e) {
                                return i(r, e);
                            });
                        });
                        o.RTCPeerConnection.prototype[e] = r[e];
                    });
                    var a = o.RTCPeerConnection.prototype.setLocalDescription;
                    o.RTCPeerConnection.prototype.setLocalDescription = function(e) {
                        return arguments.length && e.type && (e = function(n, e) {
                            var i = e.sdp;
                            return Object.keys(n._reverseStreams || []).forEach(function(e) {
                                var t = n._reverseStreams[e], r = n._streams[t.id];
                                i = i.replace(new RegExp(t.id, "g"), r.id);
                            }), new RTCSessionDescription({
                                type: e.type,
                                sdp: i
                            });
                        }(this, e)), a.apply(this, arguments);
                    };
                    var s = Object.getOwnPropertyDescriptor(o.RTCPeerConnection.prototype, "localDescription");
                    Object.defineProperty(o.RTCPeerConnection.prototype, "localDescription", {
                        get: function() {
                            var e = s.get.apply(this);
                            return "" === e.type ? e : i(this, e);
                        }
                    }), o.RTCPeerConnection.prototype.removeTrack = function(t) {
                        var r = this;
                        if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                        if (!t._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
                        if (!(t._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
                        this._streams = this._streams || {};
                        var n = void 0;
                        Object.keys(this._streams).forEach(function(e) {
                            r._streams[e].getTracks().find(function(e) {
                                return t.track === e;
                            }) && (n = r._streams[e]);
                        }), n && (1 === n.getTracks().length ? this.removeStream(this._reverseStreams[n.id]) : n.removeTrack(t.track), this.dispatchEvent(new Event("negotiationneeded")));
                    };
                }, r.shimPeerConnection = function(n) {
                    var r = c.detectBrowser(n);
                    !n.RTCPeerConnection && n.webkitRTCPeerConnection && (n.RTCPeerConnection = n.webkitRTCPeerConnection);
                    if (!n.RTCPeerConnection) return;
                    r.version < 53 && [
                        "setLocalDescription",
                        "setRemoteDescription",
                        "addIceCandidate"
                    ].forEach(function(e) {
                        var t = n.RTCPeerConnection.prototype[e], r = d({}, e, function() {
                            return arguments[0] = new ("addIceCandidate" === e ? n.RTCIceCandidate : n.RTCSessionDescription)(arguments[0]), t.apply(this, arguments);
                        });
                        n.RTCPeerConnection.prototype[e] = r[e];
                    });
                    var i = n.RTCPeerConnection.prototype.addIceCandidate;
                    n.RTCPeerConnection.prototype.addIceCandidate = function(e, t) {
                        return e ? r.version < 78 && e && "" === e.candidate ? Promise.resolve() : i.apply(this, arguments) : (t && t.apply(null), Promise.resolve());
                    };
                }, r.fixNegotiationNeeded = function(e) {
                    c.wrapPeerConnectionEvent(e, "negotiationneeded", function(e) {
                        if ("stable" === e.target.signalingState) return e;
                    });
                };
                var c = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t;
                }(e("../utils.js"));
                function d(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e;
                }
                function p(e) {
                    e.RTCPeerConnection.prototype.getLocalStreams = function() {
                        var t = this;
                        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(function(e) {
                            return t._shimmedLocalStreams[e][0];
                        });
                    };
                    var n = e.RTCPeerConnection.prototype.addTrack;
                    e.RTCPeerConnection.prototype.addTrack = function(e, t) {
                        if (!t) return n.apply(this, arguments);
                        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                        var r = n.apply(this, arguments);
                        return this._shimmedLocalStreams[t.id] ? -1 === this._shimmedLocalStreams[t.id].indexOf(r) && this._shimmedLocalStreams[t.id].push(r) : this._shimmedLocalStreams[t.id] = [
                            t,
                            r
                        ], r;
                    };
                    var i = e.RTCPeerConnection.prototype.addStream;
                    e.RTCPeerConnection.prototype.addStream = function(e) {
                        var r = this;
                        this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e.getTracks().forEach(function(t) {
                            if (r.getSenders().find(function(e) {
                                return e.track === t;
                            })) throw new DOMException("Track already exists.", "InvalidAccessError");
                        });
                        var t = this.getSenders();
                        i.apply(this, arguments);
                        var n = this.getSenders().filter(function(e) {
                            return -1 === t.indexOf(e);
                        });
                        this._shimmedLocalStreams[e.id] = [
                            e
                        ].concat(n);
                    };
                    var t = e.RTCPeerConnection.prototype.removeStream;
                    e.RTCPeerConnection.prototype.removeStream = function(e) {
                        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e.id], t.apply(this, arguments);
                    };
                    var a = e.RTCPeerConnection.prototype.removeTrack;
                    e.RTCPeerConnection.prototype.removeTrack = function(r) {
                        var n = this;
                        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, r && Object.keys(this._shimmedLocalStreams).forEach(function(e) {
                            var t = n._shimmedLocalStreams[e].indexOf(r);
                            -1 !== t && n._shimmedLocalStreams[e].splice(t, 1), 1 === n._shimmedLocalStreams[e].length && delete n._shimmedLocalStreams[e];
                        }), a.apply(this, arguments);
                    };
                }
            },
            {
                "../utils.js": 15,
                "./getdisplaymedia": 4,
                "./getusermedia": 5
            }
        ],
        4: [
            function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.shimGetDisplayMedia = function(a, e) {
                    if (a.navigator.mediaDevices && "getDisplayMedia" in a.navigator.mediaDevices) return;
                    if (!a.navigator.mediaDevices) return;
                    if ("function" != typeof e) return void console.error("shimGetDisplayMedia: getSourceId argument is not a function");
                    a.navigator.mediaDevices.getDisplayMedia = function(i) {
                        return e(i).then(function(e) {
                            var t = i.video && i.video.width, r = i.video && i.video.height, n = i.video && i.video.frameRate;
                            return i.video = {
                                mandatory: {
                                    chromeMediaSource: "desktop",
                                    chromeMediaSourceId: e,
                                    maxFrameRate: n || 3
                                }
                            }, t && (i.video.mandatory.maxWidth = t), r && (i.video.mandatory.maxHeight = r), a.navigator.mediaDevices.getUserMedia(i);
                        });
                    };
                };
            },
            {}
        ],
        5: [
            function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                };
                r.shimGetUserMedia = function(e) {
                    var o = e && e.navigator;
                    if (!o.mediaDevices) return;
                    function s(i) {
                        if ("object" !== (void 0 === i ? "undefined" : d(i)) || i.mandatory || i.optional) return i;
                        var a = {};
                        return Object.keys(i).forEach(function(t) {
                            if ("require" !== t && "advanced" !== t && "mediaSource" !== t) {
                                var r = "object" === d(i[t]) ? i[t] : {
                                    ideal: i[t]
                                };
                                void 0 !== r.exact && "number" == typeof r.exact && (r.min = r.max = r.exact);
                                var n = function(e, t) {
                                    return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t;
                                };
                                if (void 0 !== r.ideal) {
                                    a.optional = a.optional || [];
                                    var e = {};
                                    "number" == typeof r.ideal ? (e[n("min", t)] = r.ideal, a.optional.push(e), (e = {})[n("max", t)] = r.ideal) : e[n("", t)] = r.ideal, a.optional.push(e);
                                }
                                void 0 !== r.exact && "number" != typeof r.exact ? (a.mandatory = a.mandatory || {}, a.mandatory[n("", t)] = r.exact) : [
                                    "min",
                                    "max"
                                ].forEach(function(e) {
                                    void 0 !== r[e] && (a.mandatory = a.mandatory || {}, a.mandatory[n(e, t)] = r[e]);
                                });
                            }
                        }), i.advanced && (a.optional = (a.optional || []).concat(i.advanced)), a;
                    }
                    function n(r, n) {
                        if (61 <= c.version) return n(r);
                        if ((r = JSON.parse(JSON.stringify(r))) && "object" === d(r.audio)) {
                            var e = function(e, t, r) {
                                t in e && !(r in e) && (e[r] = e[t], delete e[t]);
                            };
                            e((r = JSON.parse(JSON.stringify(r))).audio, "autoGainControl", "googAutoGainControl"), e(r.audio, "noiseSuppression", "googNoiseSuppression"), r.audio = s(r.audio);
                        }
                        if (r && "object" === d(r.video)) {
                            var i = r.video.facingMode;
                            i = i && ("object" === (void 0 === i ? "undefined" : d(i)) ? i : {
                                ideal: i
                            });
                            var t = c.version < 66;
                            if (i && ("user" === i.exact || "environment" === i.exact || "user" === i.ideal || "environment" === i.ideal) && (!o.mediaDevices.getSupportedConstraints || !o.mediaDevices.getSupportedConstraints().facingMode || t)) {
                                delete r.video.facingMode;
                                var a = void 0;
                                if ("environment" === i.exact || "environment" === i.ideal ? a = [
                                    "back",
                                    "rear"
                                ] : "user" !== i.exact && "user" !== i.ideal || (a = [
                                    "front"
                                ]), a) return o.mediaDevices.enumerateDevices().then(function(e) {
                                    var t = (e = e.filter(function(e) {
                                        return "videoinput" === e.kind;
                                    })).find(function(t) {
                                        return a.some(function(e) {
                                            return t.label.toLowerCase().includes(e);
                                        });
                                    });
                                    return !t && e.length && a.includes("back") && (t = e[e.length - 1]), t && (r.video.deviceId = i.exact ? {
                                        exact: t.deviceId
                                    } : {
                                        ideal: t.deviceId
                                    }), r.video = s(r.video), p("chrome: " + JSON.stringify(r)), n(r);
                                });
                            }
                            r.video = s(r.video);
                        }
                        return p("chrome: " + JSON.stringify(r)), n(r);
                    }
                    function i(e) {
                        return 64 <= c.version ? e : {
                            name: ({
                                PermissionDeniedError: "NotAllowedError",
                                PermissionDismissedError: "NotAllowedError",
                                InvalidStateError: "NotAllowedError",
                                DevicesNotFoundError: "NotFoundError",
                                ConstraintNotSatisfiedError: "OverconstrainedError",
                                TrackStartError: "NotReadableError",
                                MediaDeviceFailedDueToShutdown: "NotAllowedError",
                                MediaDeviceKillSwitchOn: "NotAllowedError",
                                TabCaptureError: "AbortError",
                                ScreenCaptureError: "AbortError",
                                DeviceCaptureError: "AbortError"
                            })[e.name] || e.name,
                            message: e.message,
                            constraint: e.constraint || e.constraintName,
                            toString: function() {
                                return this.name + (this.message && ": ") + this.message;
                            }
                        };
                    }
                    var c = a.detectBrowser(e);
                    if (o.getUserMedia = (function(e, t, r) {
                        n(e, function(e) {
                            o.webkitGetUserMedia(e, t, function(e) {
                                if (r) r(i(e));
                            });
                        });
                    }).bind(o), o.mediaDevices.getUserMedia) {
                        var r = o.mediaDevices.getUserMedia.bind(o.mediaDevices);
                        o.mediaDevices.getUserMedia = function(e) {
                            return n(e, function(t) {
                                return r(t).then(function(e) {
                                    if (t.audio && !e.getAudioTracks().length || t.video && !e.getVideoTracks().length) throw e.getTracks().forEach(function(e) {
                                        e.stop();
                                    }), new DOMException("", "NotFoundError");
                                    return e;
                                }, function(e) {
                                    return Promise.reject(i(e));
                                });
                            });
                        };
                    }
                };
                var a = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t;
                }(e("../utils.js"));
                var p = a.log;
            },
            {
                "../utils.js": 15
            }
        ],
        6: [
            function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                };
                r.shimRTCIceCandidate = function(t) {
                    if (!t.RTCIceCandidate || t.RTCIceCandidate && "foundation" in t.RTCIceCandidate.prototype) return;
                    var i = t.RTCIceCandidate;
                    t.RTCIceCandidate = function(e) {
                        if ("object" === (void 0 === e ? "undefined" : a(e)) && e.candidate && 0 === e.candidate.indexOf("a=") && ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)), e.candidate && e.candidate.length) {
                            var t = new i(e), r = c.default.parseCandidate(e.candidate), n = Object.assign(t, r);
                            return n.toJSON = function() {
                                return {
                                    candidate: n.candidate,
                                    sdpMid: n.sdpMid,
                                    sdpMLineIndex: n.sdpMLineIndex,
                                    usernameFragment: n.usernameFragment
                                };
                            }, n;
                        }
                        return new i(e);
                    }, t.RTCIceCandidate.prototype = i.prototype, d.wrapPeerConnectionEvent(t, "icecandidate", function(e) {
                        return e.candidate && Object.defineProperty(e, "candidate", {
                            value: new t.RTCIceCandidate(e.candidate),
                            writable: "false"
                        }), e;
                    });
                }, r.shimMaxMessageSize = function(e) {
                    if (!e.RTCPeerConnection) return;
                    var o = d.detectBrowser(e);
                    "sctp" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
                        get: function() {
                            return void 0 === this._sctp ? null : this._sctp;
                        }
                    });
                    var s = e.RTCPeerConnection.prototype.setRemoteDescription;
                    e.RTCPeerConnection.prototype.setRemoteDescription = function(e) {
                        this._sctp = null, "chrome" === o.browser && 76 <= o.version && "plan-b" === this.getConfiguration().sdpSemantics && Object.defineProperty(this, "sctp", {
                            get: function() {
                                return void 0 === this._sctp ? null : this._sctp;
                            },
                            enumerable: !0,
                            configurable: !0
                        });
                        if (function(e) {
                            if (!e || !e.sdp) return !1;
                            var t = c.default.splitSections(e.sdp);
                            return t.shift(), t.some(function(e) {
                                var t = c.default.parseMLine(e);
                                return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP");
                            });
                        }(e)) {
                            var t = function(e) {
                                var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                                if (null === t || t.length < 2) return -1;
                                var r = parseInt(t[1], 10);
                                return r != r ? -1 : r;
                            }(e), r = function(e) {
                                var t = 65536;
                                return "firefox" === o.browser && (t = o.version < 57 ? -1 === e ? 16384 : 2147483637 : o.version < 60 ? 57 === o.version ? 65535 : 65536 : 2147483637), t;
                            }(t), n = function(e, t) {
                                var r = 65536;
                                "firefox" === o.browser && 57 === o.version && (r = 65535);
                                var n = c.default.matchPrefix(e.sdp, "a=max-message-size:");
                                return 0 < n.length ? r = parseInt(n[0].substr(19), 10) : "firefox" === o.browser && -1 !== t && (r = 2147483637), r;
                            }(e, t), i = void 0;
                            i = 0 === r && 0 === n ? Number.POSITIVE_INFINITY : 0 === r || 0 === n ? Math.max(r, n) : Math.min(r, n);
                            var a = {};
                            Object.defineProperty(a, "maxMessageSize", {
                                get: function() {
                                    return i;
                                }
                            }), this._sctp = a;
                        }
                        return s.apply(this, arguments);
                    };
                }, r.shimSendThrowTypeError = function(e) {
                    if (!(e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype)) return;
                    function t(n, i) {
                        var a = n.send;
                        n.send = function(e) {
                            var t = e, r = t.length || t.size || t.byteLength;
                            if ("open" === n.readyState && i.sctp && r > i.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + i.sctp.maxMessageSize + " bytes)");
                            return a.apply(n, arguments);
                        };
                    }
                    var r = e.RTCPeerConnection.prototype.createDataChannel;
                    e.RTCPeerConnection.prototype.createDataChannel = function() {
                        var e = r.apply(this, arguments);
                        return t(e, this), e;
                    }, d.wrapPeerConnectionEvent(e, "datachannel", function(e) {
                        return t(e.channel, e.target), e;
                    });
                }, r.shimConnectionState = function(e) {
                    if (!e.RTCPeerConnection || "connectionState" in e.RTCPeerConnection.prototype) return;
                    var r = e.RTCPeerConnection.prototype;
                    Object.defineProperty(r, "connectionState", {
                        get: function() {
                            return ({
                                completed: "connected",
                                checking: "connecting"
                            })[this.iceConnectionState] || this.iceConnectionState;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(r, "onconnectionstatechange", {
                        get: function() {
                            return this._onconnectionstatechange || null;
                        },
                        set: function(e) {
                            this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e);
                        },
                        enumerable: !0,
                        configurable: !0
                    }), [
                        "setLocalDescription",
                        "setRemoteDescription"
                    ].forEach(function(e) {
                        var t = r[e];
                        r[e] = function() {
                            return this._connectionstatechangepoly || (this._connectionstatechangepoly = function(e) {
                                var t = e.target;
                                if (t._lastConnectionState !== t.connectionState) {
                                    t._lastConnectionState = t.connectionState;
                                    var r = new Event("connectionstatechange", e);
                                    t.dispatchEvent(r);
                                }
                                return e;
                            }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), t.apply(this, arguments);
                        };
                    });
                }, r.removeAllowExtmapMixed = function(e) {
                    if (!e.RTCPeerConnection) return;
                    var t = d.detectBrowser(e);
                    if ("chrome" === t.browser && 71 <= t.version) return;
                    var r = e.RTCPeerConnection.prototype.setRemoteDescription;
                    e.RTCPeerConnection.prototype.setRemoteDescription = function(e) {
                        return e && e.sdp && -1 !== e.sdp.indexOf("\na=extmap-allow-mixed") && (e.sdp = e.sdp.split("\n").filter(function(e) {
                            return "a=extmap-allow-mixed" !== e.trim();
                        }).join("\n")), r.apply(this, arguments);
                    };
                };
                var n, i = e("sdp"), c = (n = i) && n.__esModule ? n : {
                    default: n
                }, d = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t;
                }(e("./utils"));
            },
            {
                "./utils": 15,
                sdp: 17
            }
        ],
        7: [
            function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.shimGetDisplayMedia = r.shimGetUserMedia = void 0;
                var n = e("./getusermedia");
                Object.defineProperty(r, "shimGetUserMedia", {
                    enumerable: !0,
                    get: function() {
                        return n.shimGetUserMedia;
                    }
                });
                var i = e("./getdisplaymedia");
                Object.defineProperty(r, "shimGetDisplayMedia", {
                    enumerable: !0,
                    get: function() {
                        return i.shimGetDisplayMedia;
                    }
                }), r.shimPeerConnection = function(e) {
                    var t = o.detectBrowser(e);
                    if (e.RTCIceGatherer && (e.RTCIceCandidate || (e.RTCIceCandidate = function(e) {
                        return e;
                    }), e.RTCSessionDescription || (e.RTCSessionDescription = function(e) {
                        return e;
                    }), t.version < 15025)) {
                        var r = Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype, "enabled");
                        Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
                            set: function(e) {
                                r.set.call(this, e);
                                var t = new Event("enabled");
                                t.enabled = e, this.dispatchEvent(t);
                            }
                        });
                    }
                    !e.RTCRtpSender || "dtmf" in e.RTCRtpSender.prototype || Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                        get: function() {
                            return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new e.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf;
                        }
                    });
                    e.RTCDtmfSender && !e.RTCDTMFSender && (e.RTCDTMFSender = e.RTCDtmfSender);
                    var n = (0, d.default)(e, t.version);
                    e.RTCPeerConnection = function(e) {
                        return e && e.iceServers && (e.iceServers = (0, s.filterIceServers)(e.iceServers, t.version), o.log("ICE servers after filtering:", e.iceServers)), new n(e);
                    }, e.RTCPeerConnection.prototype = n.prototype;
                }, r.shimReplaceTrack = function(e) {
                    !e.RTCRtpSender || "replaceTrack" in e.RTCRtpSender.prototype || (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack);
                };
                var a, o = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t;
                }(e("../utils")), s = e("./filtericeservers"), c = e("rtcpeerconnection-shim"), d = (a = c) && a.__esModule ? a : {
                    default: a
                };
            },
            {
                "../utils": 15,
                "./filtericeservers": 8,
                "./getdisplaymedia": 9,
                "./getusermedia": 10,
                "rtcpeerconnection-shim": 16
            }
        ],
        8: [
            function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.filterIceServers = function(e, t) {
                    var n = !1;
                    return (e = JSON.parse(JSON.stringify(e))).filter(function(e) {
                        if (e && (e.urls || e.url)) {
                            var t = e.urls || e.url;
                            e.url && !e.urls && i.deprecated("RTCIceServer.url", "RTCIceServer.urls");
                            var r = "string" == typeof t;
                            return r && (t = [
                                t
                            ]), t = t.filter(function(e) {
                                if (0 === e.indexOf("stun:")) return !1;
                                var t = e.startsWith("turn") && !e.startsWith("turn:[") && e.includes("transport=udp");
                                return t && !n ? n = !0 : t && !n;
                            }), delete e.url, e.urls = r ? t[0] : t, !!t.length;
                        }
                    });
                };
                var i = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t;
                }(e("../utils"));
            },
            {
                "../utils": 15
            }
        ],
        9: [
            function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.shimGetDisplayMedia = function(e) {
                    if (!("getDisplayMedia" in e.navigator)) return;
                    if (!e.navigator.mediaDevices) return;
                    if (e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices) return;
                    e.navigator.mediaDevices.getDisplayMedia = e.navigator.getDisplayMedia.bind(e.navigator);
                };
            },
            {}
        ],
        10: [
            function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.shimGetUserMedia = function(e) {
                    var t = e && e.navigator, r = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
                    t.mediaDevices.getUserMedia = function(e) {
                        return r(e).catch(function(e) {
                            return Promise.reject(function(e) {
                                return {
                                    name: ({
                                        PermissionDeniedError: "NotAllowedError"
                                    })[e.name] || e.name,
                                    message: e.message,
                                    constraint: e.constraint,
                                    toString: function() {
                                        return this.name;
                                    }
                                };
                            }(e));
                        });
                    };
                };
            },
            {}
        ],
        11: [
            function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.shimGetDisplayMedia = r.shimGetUserMedia = void 0;
                var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, n = e("./getusermedia");
                Object.defineProperty(r, "shimGetUserMedia", {
                    enumerable: !0,
                    get: function() {
                        return n.shimGetUserMedia;
                    }
                });
                var i = e("./getdisplaymedia");
                Object.defineProperty(r, "shimGetDisplayMedia", {
                    enumerable: !0,
                    get: function() {
                        return i.shimGetDisplayMedia;
                    }
                }), r.shimOnTrack = function(e) {
                    "object" === (void 0 === e ? "undefined" : c(e)) && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                        get: function() {
                            return {
                                receiver: this.receiver
                            };
                        }
                    });
                }, r.shimPeerConnection = function(n) {
                    var i = s.detectBrowser(n);
                    if ("object" !== (void 0 === n ? "undefined" : c(n)) || !n.RTCPeerConnection && !n.mozRTCPeerConnection) return;
                    !n.RTCPeerConnection && n.mozRTCPeerConnection && (n.RTCPeerConnection = n.mozRTCPeerConnection);
                    i.version < 53 && [
                        "setLocalDescription",
                        "setRemoteDescription",
                        "addIceCandidate"
                    ].forEach(function(e) {
                        var t = n.RTCPeerConnection.prototype[e], r = function(e, t, r) {
                            t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r;
                            return e;
                        }({}, e, function() {
                            return arguments[0] = new ("addIceCandidate" === e ? n.RTCIceCandidate : n.RTCSessionDescription)(arguments[0]), t.apply(this, arguments);
                        });
                        n.RTCPeerConnection.prototype[e] = r[e];
                    });
                    if (i.version < 68) {
                        var r = n.RTCPeerConnection.prototype.addIceCandidate;
                        n.RTCPeerConnection.prototype.addIceCandidate = function(e, t) {
                            return e ? e && "" === e.candidate ? Promise.resolve() : r.apply(this, arguments) : (t && t.apply(null), Promise.resolve());
                        };
                    }
                    var a = {
                        inboundrtp: "inbound-rtp",
                        outboundrtp: "outbound-rtp",
                        candidatepair: "candidate-pair",
                        localcandidate: "local-candidate",
                        remotecandidate: "remote-candidate"
                    }, o = n.RTCPeerConnection.prototype.getStats;
                    n.RTCPeerConnection.prototype.getStats = function() {
                        var e = Array.prototype.slice.call(arguments), t = e[0], n = e[1], r = e[2];
                        return o.apply(this, [
                            t || null
                        ]).then(function(r) {
                            if (i.version < 53 && !n) try {
                                r.forEach(function(e) {
                                    e.type = a[e.type] || e.type;
                                });
                            } catch (e) {
                                if ("TypeError" !== e.name) throw e;
                                r.forEach(function(e, t) {
                                    r.set(t, Object.assign({}, e, {
                                        type: a[e.type] || e.type
                                    }));
                                });
                            }
                            return r;
                        }).then(n, r);
                    };
                }, r.shimSenderGetStats = function(e) {
                    if ("object" !== (void 0 === e ? "undefined" : c(e)) || !e.RTCPeerConnection || !e.RTCRtpSender) return;
                    if (e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype) return;
                    var r = e.RTCPeerConnection.prototype.getSenders;
                    r && (e.RTCPeerConnection.prototype.getSenders = function() {
                        var t = this, e = r.apply(this, []);
                        return e.forEach(function(e) {
                            return e._pc = t;
                        }), e;
                    });
                    var t = e.RTCPeerConnection.prototype.addTrack;
                    t && (e.RTCPeerConnection.prototype.addTrack = function() {
                        var e = t.apply(this, arguments);
                        return e._pc = this, e;
                    });
                    e.RTCRtpSender.prototype.getStats = function() {
                        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map);
                    };
                }, r.shimReceiverGetStats = function(e) {
                    if ("object" !== (void 0 === e ? "undefined" : c(e)) || !e.RTCPeerConnection || !e.RTCRtpSender) return;
                    if (e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype) return;
                    var r = e.RTCPeerConnection.prototype.getReceivers;
                    r && (e.RTCPeerConnection.prototype.getReceivers = function() {
                        var t = this, e = r.apply(this, []);
                        return e.forEach(function(e) {
                            return e._pc = t;
                        }), e;
                    });
                    s.wrapPeerConnectionEvent(e, "track", function(e) {
                        return e.receiver._pc = e.srcElement, e;
                    }), e.RTCRtpReceiver.prototype.getStats = function() {
                        return this._pc.getStats(this.track);
                    };
                }, r.shimRemoveStream = function(e) {
                    if (!e.RTCPeerConnection || "removeStream" in e.RTCPeerConnection.prototype) return;
                    e.RTCPeerConnection.prototype.removeStream = function(t) {
                        var r = this;
                        s.deprecated("removeStream", "removeTrack"), this.getSenders().forEach(function(e) {
                            e.track && t.getTracks().includes(e.track) && r.removeTrack(e);
                        });
                    };
                }, r.shimRTCDataChannel = function(e) {
                    e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel);
                }, r.shimAddTransceiver = function(e) {
                    if ("object" !== (void 0 === e ? "undefined" : c(e)) || !e.RTCPeerConnection) return;
                    var s = e.RTCPeerConnection.prototype.addTransceiver;
                    s && (e.RTCPeerConnection.prototype.addTransceiver = function(e, t) {
                        this.setParametersPromises = [];
                        var r = t, n = r && "sendEncodings" in r;
                        n && r.sendEncodings.forEach(function(e) {
                            if ("rid" in e) {
                                if (!/^[a-z0-9]{0,16}$/i.test(e.rid)) throw new TypeError("Invalid RID value provided.");
                            }
                            if ("scaleResolutionDownBy" in e && !(1 <= parseFloat(e.scaleResolutionDownBy))) throw new RangeError("scale_resolution_down_by must be >= 1.0");
                            if ("maxFramerate" in e && !(0 <= parseFloat(e.maxFramerate))) throw new RangeError("max_framerate must be >= 0.0");
                        });
                        var i = s.apply(this, arguments);
                        if (n) {
                            var a = i.sender, o = a.getParameters();
                            "encodings" in o || (o.encodings = r.sendEncodings, this.setParametersPromises.push(a.setParameters(o).catch(function() {})));
                        }
                        return i;
                    });
                }, r.shimCreateOffer = function(e) {
                    if ("object" !== (void 0 === e ? "undefined" : c(e)) || !e.RTCPeerConnection) return;
                    var r = e.RTCPeerConnection.prototype.createOffer;
                    e.RTCPeerConnection.prototype.createOffer = function() {
                        var e = this, t = arguments;
                        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(function() {
                            return r.apply(e, t);
                        }).finally(function() {
                            e.setParametersPromises = [];
                        }) : r.apply(this, arguments);
                    };
                }, r.shimCreateAnswer = function(e) {
                    if ("object" !== (void 0 === e ? "undefined" : c(e)) || !e.RTCPeerConnection) return;
                    var r = e.RTCPeerConnection.prototype.createAnswer;
                    e.RTCPeerConnection.prototype.createAnswer = function() {
                        var e = this, t = arguments;
                        return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(function() {
                            return r.apply(e, t);
                        }).finally(function() {
                            e.setParametersPromises = [];
                        }) : r.apply(this, arguments);
                    };
                };
                var s = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t;
                }(e("../utils"));
            },
            {
                "../utils": 15,
                "./getdisplaymedia": 12,
                "./getusermedia": 13
            }
        ],
        12: [
            function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.shimGetDisplayMedia = function(r, n) {
                    if (r.navigator.mediaDevices && "getDisplayMedia" in r.navigator.mediaDevices) return;
                    if (!r.navigator.mediaDevices) return;
                    r.navigator.mediaDevices.getDisplayMedia = function(e) {
                        if (e && e.video) return !0 === e.video ? e.video = {
                            mediaSource: n
                        } : e.video.mediaSource = n, r.navigator.mediaDevices.getUserMedia(e);
                        var t = new DOMException("getDisplayMedia without video constraints is undefined");
                        return t.name = "NotFoundError", t.code = 8, Promise.reject(t);
                    };
                };
            },
            {}
        ],
        13: [
            function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                };
                r.shimGetUserMedia = function(e) {
                    var t = d.detectBrowser(e), n = e && e.navigator, r = e && e.MediaStreamTrack;
                    if (n.getUserMedia = function(e, t, r) {
                        d.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n.mediaDevices.getUserMedia(e).then(t, r);
                    }, !(55 < t.version && "autoGainControl" in n.mediaDevices.getSupportedConstraints())) {
                        var i = function(e, t, r) {
                            t in e && !(r in e) && (e[r] = e[t], delete e[t]);
                        }, a = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
                        if (n.mediaDevices.getUserMedia = function(e) {
                            return "object" === (void 0 === e ? "undefined" : c(e)) && "object" === c(e.audio) && (e = JSON.parse(JSON.stringify(e)), i(e.audio, "autoGainControl", "mozAutoGainControl"), i(e.audio, "noiseSuppression", "mozNoiseSuppression")), a(e);
                        }, r && r.prototype.getSettings) {
                            var o = r.prototype.getSettings;
                            r.prototype.getSettings = function() {
                                var e = o.apply(this, arguments);
                                return i(e, "mozAutoGainControl", "autoGainControl"), i(e, "mozNoiseSuppression", "noiseSuppression"), e;
                            };
                        }
                        if (r && r.prototype.applyConstraints) {
                            var s = r.prototype.applyConstraints;
                            r.prototype.applyConstraints = function(e) {
                                return "audio" === this.kind && "object" === (void 0 === e ? "undefined" : c(e)) && (e = JSON.parse(JSON.stringify(e)), i(e, "autoGainControl", "mozAutoGainControl"), i(e, "noiseSuppression", "mozNoiseSuppression")), s.apply(this, [
                                    e
                                ]);
                            };
                        }
                    }
                };
                var d = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t;
                }(e("../utils"));
            },
            {
                "../utils": 15
            }
        ],
        14: [
            function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                };
                r.shimLocalStreamsAPI = function(e) {
                    if ("object" !== (void 0 === e ? "undefined" : d(e)) || !e.RTCPeerConnection) return;
                    "getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = function() {
                        return this._localStreams || (this._localStreams = []), this._localStreams;
                    });
                    if (!("addStream" in e.RTCPeerConnection.prototype)) {
                        var n = e.RTCPeerConnection.prototype.addTrack;
                        e.RTCPeerConnection.prototype.addStream = function(t) {
                            var r = this;
                            this._localStreams || (this._localStreams = []), this._localStreams.includes(t) || this._localStreams.push(t), t.getAudioTracks().forEach(function(e) {
                                return n.call(r, e, t);
                            }), t.getVideoTracks().forEach(function(e) {
                                return n.call(r, e, t);
                            });
                        }, e.RTCPeerConnection.prototype.addTrack = function(e, t) {
                            var r = t;
                            return r && (this._localStreams ? this._localStreams.includes(r) || this._localStreams.push(r) : this._localStreams = [
                                r
                            ]), n.apply(this, arguments);
                        };
                    }
                    "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function(e) {
                        var t = this;
                        this._localStreams || (this._localStreams = []);
                        var r = this._localStreams.indexOf(e);
                        if (-1 !== r) {
                            this._localStreams.splice(r, 1);
                            var n = e.getTracks();
                            this.getSenders().forEach(function(e) {
                                n.includes(e.track) && t.removeTrack(e);
                            });
                        }
                    });
                }, r.shimRemoteStreamsAPI = function(e) {
                    if ("object" !== (void 0 === e ? "undefined" : d(e)) || !e.RTCPeerConnection) return;
                    "getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = function() {
                        return this._remoteStreams ? this._remoteStreams : [];
                    });
                    if (!("onaddstream" in e.RTCPeerConnection.prototype)) {
                        Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
                            get: function() {
                                return this._onaddstream;
                            },
                            set: function(e) {
                                var r = this;
                                this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e), this.addEventListener("track", this._onaddstreampoly = function(e) {
                                    e.streams.forEach(function(e) {
                                        if (r._remoteStreams || (r._remoteStreams = []), !r._remoteStreams.includes(e)) {
                                            r._remoteStreams.push(e);
                                            var t = new Event("addstream");
                                            t.stream = e, r.dispatchEvent(t);
                                        }
                                    });
                                });
                            }
                        });
                        var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                        e.RTCPeerConnection.prototype.setRemoteDescription = function() {
                            var r = this;
                            return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(e) {
                                e.streams.forEach(function(e) {
                                    if (r._remoteStreams || (r._remoteStreams = []), !(0 <= r._remoteStreams.indexOf(e))) {
                                        r._remoteStreams.push(e);
                                        var t = new Event("addstream");
                                        t.stream = e, r.dispatchEvent(t);
                                    }
                                });
                            }), t.apply(r, arguments);
                        };
                    }
                }, r.shimCallbacksAPI = function(e) {
                    if ("object" !== (void 0 === e ? "undefined" : d(e)) || !e.RTCPeerConnection) return;
                    var t = e.RTCPeerConnection.prototype, a = t.createOffer, o = t.createAnswer, i = t.setLocalDescription, s = t.setRemoteDescription, c = t.addIceCandidate;
                    t.createOffer = function(e, t, r) {
                        var n = 2 <= arguments.length ? r : e, i = a.apply(this, [
                            n
                        ]);
                        return t ? (i.then(e, t), Promise.resolve()) : i;
                    }, t.createAnswer = function(e, t, r) {
                        var n = 2 <= arguments.length ? r : e, i = o.apply(this, [
                            n
                        ]);
                        return t ? (i.then(e, t), Promise.resolve()) : i;
                    };
                    var r = function(e, t, r) {
                        var n = i.apply(this, [
                            e
                        ]);
                        return r ? (n.then(t, r), Promise.resolve()) : n;
                    };
                    t.setLocalDescription = r, r = function(e, t, r) {
                        var n = s.apply(this, [
                            e
                        ]);
                        return r ? (n.then(t, r), Promise.resolve()) : n;
                    }, t.setRemoteDescription = r, r = function(e, t, r) {
                        var n = c.apply(this, [
                            e
                        ]);
                        return r ? (n.then(t, r), Promise.resolve()) : n;
                    }, t.addIceCandidate = r;
                }, r.shimGetUserMedia = function(e) {
                    var n = e && e.navigator;
                    if (n.mediaDevices && n.mediaDevices.getUserMedia) {
                        var t = n.mediaDevices, r = t.getUserMedia.bind(t);
                        n.mediaDevices.getUserMedia = function(e) {
                            return r(i(e));
                        };
                    }
                    !n.getUserMedia && n.mediaDevices && n.mediaDevices.getUserMedia && (n.getUserMedia = (function(e, t, r) {
                        n.mediaDevices.getUserMedia(e).then(t, r);
                    }).bind(n));
                }, r.shimConstraints = i, r.shimRTCIceServerUrls = function(e) {
                    var a = e.RTCPeerConnection;
                    e.RTCPeerConnection = function(e, t) {
                        if (e && e.iceServers) {
                            for(var r = [], n = 0; n < e.iceServers.length; n++){
                                var i = e.iceServers[n];
                                !i.hasOwnProperty("urls") && i.hasOwnProperty("url") ? (o.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (i = JSON.parse(JSON.stringify(i))).urls = i.url, delete i.url, r.push(i)) : r.push(e.iceServers[n]);
                            }
                            e.iceServers = r;
                        }
                        return new a(e, t);
                    }, e.RTCPeerConnection.prototype = a.prototype, "generateCertificate" in e.RTCPeerConnection && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
                        get: function() {
                            return a.generateCertificate;
                        }
                    });
                }, r.shimTrackEventTransceiver = function(e) {
                    "object" === (void 0 === e ? "undefined" : d(e)) && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                        get: function() {
                            return {
                                receiver: this.receiver
                            };
                        }
                    });
                }, r.shimCreateOfferLegacy = function(e) {
                    var n = e.RTCPeerConnection.prototype.createOffer;
                    e.RTCPeerConnection.prototype.createOffer = function(e) {
                        if (e) {
                            void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
                            var t = this.getTransceivers().find(function(e) {
                                return "audio" === e.receiver.track.kind;
                            });
                            !1 === e.offerToReceiveAudio && t ? "sendrecv" === t.direction ? t.setDirection ? t.setDirection("sendonly") : t.direction = "sendonly" : "recvonly" === t.direction && (t.setDirection ? t.setDirection("inactive") : t.direction = "inactive") : !0 !== e.offerToReceiveAudio || t || this.addTransceiver("audio"), void 0 !== e.offerToReceiveVideo && (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
                            var r = this.getTransceivers().find(function(e) {
                                return "video" === e.receiver.track.kind;
                            });
                            !1 === e.offerToReceiveVideo && r ? "sendrecv" === r.direction ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : "recvonly" === r.direction && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : !0 !== e.offerToReceiveVideo || r || this.addTransceiver("video");
                        }
                        return n.apply(this, arguments);
                    };
                };
                var o = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t;
                }(e("../utils"));
                function i(e) {
                    return e && void 0 !== e.video ? Object.assign({}, e, {
                        video: o.compactObject(e.video)
                    }) : e;
                }
            },
            {
                "../utils": 15
            }
        ],
        15: [
            function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                };
                function s(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e;
                }
                r.extractVersion = o, r.wrapPeerConnectionEvent = function(e, n, i) {
                    if (!e.RTCPeerConnection) return;
                    var t = e.RTCPeerConnection.prototype, a = t.addEventListener;
                    t.addEventListener = function(e, r) {
                        if (e !== n) return a.apply(this, arguments);
                        function t(e) {
                            var t = i(e);
                            t && r(t);
                        }
                        return this._eventMap = this._eventMap || {}, this._eventMap[r] = t, a.apply(this, [
                            e,
                            t
                        ]);
                    };
                    var o = t.removeEventListener;
                    t.removeEventListener = function(e, t) {
                        if (e !== n || !this._eventMap || !this._eventMap[t]) return o.apply(this, arguments);
                        var r = this._eventMap[t];
                        return delete this._eventMap[t], o.apply(this, [
                            e,
                            r
                        ]);
                    }, Object.defineProperty(t, "on" + n, {
                        get: function() {
                            return this["_on" + n];
                        },
                        set: function(e) {
                            this["_on" + n] && (this.removeEventListener(n, this["_on" + n]), delete this["_on" + n]), e && this.addEventListener(n, this["_on" + n] = e);
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                }, r.disableLog = function(e) {
                    return "boolean" == typeof e ? (i = e) ? "adapter.js logging disabled" : "adapter.js logging enabled" : new Error("Argument type: " + (void 0 === e ? "undefined" : n(e)) + ". Please use a boolean.");
                }, r.disableWarnings = function(e) {
                    return "boolean" == typeof e ? (a = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled")) : new Error("Argument type: " + (void 0 === e ? "undefined" : n(e)) + ". Please use a boolean.");
                }, r.log = function() {
                    if ("object" === ("undefined" == typeof window ? "undefined" : n(window))) {
                        if (i) return;
                        "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments);
                    }
                }, r.deprecated = function(e, t) {
                    if (!a) return;
                    console.warn(e + " is deprecated, please use " + t + " instead.");
                }, r.detectBrowser = function(e) {
                    var t = e.navigator, r = {
                        browser: null,
                        version: null
                    };
                    if (void 0 === e || !e.navigator) return r.browser = "Not a browser.", r;
                    if (t.mozGetUserMedia) r.browser = "firefox", r.version = o(t.userAgent, /Firefox\/(\d+)\./, 1);
                    else if (t.webkitGetUserMedia || !1 === e.isSecureContext && e.webkitRTCPeerConnection && !e.RTCIceGatherer) r.browser = "chrome", r.version = o(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
                    else if (t.mediaDevices && t.userAgent.match(/Edge\/(\d+).(\d+)$/)) r.browser = "edge", r.version = o(t.userAgent, /Edge\/(\d+).(\d+)$/, 2);
                    else {
                        if (!e.RTCPeerConnection || !t.userAgent.match(/AppleWebKit\/(\d+)\./)) return r.browser = "Not a supported browser.", r;
                        r.browser = "safari", r.version = o(t.userAgent, /AppleWebKit\/(\d+)\./, 1), r.supportsUnifiedPlan = e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype;
                    }
                    return r;
                }, r.compactObject = function a(o) {
                    if (!c(o)) return o;
                    return Object.keys(o).reduce(function(e, t) {
                        var r = c(o[t]), n = r ? a(o[t]) : o[t], i = r && !Object.keys(n).length;
                        return void 0 === n || i ? e : Object.assign(e, s({}, t, n));
                    }, {});
                }, r.walkStats = d, r.filterStats = function(r, t, e) {
                    var n = e ? "outbound-rtp" : "inbound-rtp", i = new Map;
                    if (null === t) return i;
                    var a = [];
                    return r.forEach(function(e) {
                        "track" === e.type && e.trackIdentifier === t.id && a.push(e);
                    }), a.forEach(function(t) {
                        r.forEach(function(e) {
                            e.type === n && e.trackId === t.id && d(r, e, i);
                        });
                    }), i;
                };
                var i = !0, a = !0;
                function o(e, t, r) {
                    var n = e.match(t);
                    return n && n.length >= r && parseInt(n[r], 10);
                }
                function c(e) {
                    return "[object Object]" === Object.prototype.toString.call(e);
                }
                function d(t, r, n) {
                    r && !n.has(r.id) && (n.set(r.id, r), Object.keys(r).forEach(function(e) {
                        e.endsWith("Id") ? d(t, t.get(r[e]), n) : e.endsWith("Ids") && r[e].forEach(function(e) {
                            d(t, t.get(e), n);
                        });
                    }));
                }
            },
            {}
        ],
        16: [
            function(e, t, r) {
                "use strict";
                var G = e("sdp");
                function c(e, t, r, n, i) {
                    var a = G.writeRtpDescription(e.kind, t);
                    if (a += G.writeIceParameters(e.iceGatherer.getLocalParameters()), a += G.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : i || "active"), a += "a=mid:" + e.mid + "\r\n", e.rtpSender && e.rtpReceiver ? a += "a=sendrecv\r\n" : e.rtpSender ? a += "a=sendonly\r\n" : e.rtpReceiver ? a += "a=recvonly\r\n" : a += "a=inactive\r\n", e.rtpSender) {
                        var o = e.rtpSender._initialTrackId || e.rtpSender.track.id;
                        e.rtpSender._initialTrackId = o;
                        var s = "msid:" + (n ? n.id : "-") + " " + o + "\r\n";
                        a += "a=" + s, a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + s, e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + s, a += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n");
                    }
                    return a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + G.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + G.localCName + "\r\n"), a;
                }
                function A(d, p) {
                    function u(e, t) {
                        e = parseInt(e, 10);
                        for(var r = 0; r < t.length; r++)if (t[r].payloadType === e || t[r].preferredPayloadType === e) return t[r];
                    }
                    var f = {
                        codecs: [],
                        headerExtensions: [],
                        fecMechanisms: []
                    };
                    return d.codecs.forEach(function(r) {
                        for(var e = 0; e < p.codecs.length; e++){
                            var t = p.codecs[e];
                            if (r.name.toLowerCase() === t.name.toLowerCase() && r.clockRate === t.clockRate) {
                                if ("rtx" === r.name.toLowerCase() && r.parameters && t.parameters.apt && (n = r, i = t, a = d.codecs, o = p.codecs, c = s = void 0, s = u(n.parameters.apt, a), c = u(i.parameters.apt, o), !s || !c || s.name.toLowerCase() !== c.name.toLowerCase())) continue;
                                (t = JSON.parse(JSON.stringify(t))).numChannels = Math.min(r.numChannels, t.numChannels), f.codecs.push(t), t.rtcpFeedback = t.rtcpFeedback.filter(function(e) {
                                    for(var t = 0; t < r.rtcpFeedback.length; t++)if (r.rtcpFeedback[t].type === e.type && r.rtcpFeedback[t].parameter === e.parameter) return !0;
                                    return !1;
                                });
                                break;
                            }
                        }
                        var n, i, a, o, s, c;
                    }), d.headerExtensions.forEach(function(e) {
                        for(var t = 0; t < p.headerExtensions.length; t++){
                            var r = p.headerExtensions[t];
                            if (e.uri === r.uri) {
                                f.headerExtensions.push(r);
                                break;
                            }
                        }
                    }), f;
                }
                function a(e, t, r) {
                    return -1 !== ({
                        offer: {
                            setLocalDescription: [
                                "stable",
                                "have-local-offer"
                            ],
                            setRemoteDescription: [
                                "stable",
                                "have-remote-offer"
                            ]
                        },
                        answer: {
                            setLocalDescription: [
                                "have-remote-offer",
                                "have-local-pranswer"
                            ],
                            setRemoteDescription: [
                                "have-local-offer",
                                "have-remote-pranswer"
                            ]
                        }
                    })[t][e].indexOf(r);
                }
                function N(e, t) {
                    var r = e.getRemoteCandidates().find(function(e) {
                        return t.foundation === e.foundation && t.ip === e.ip && t.port === e.port && t.priority === e.priority && t.protocol === e.protocol && t.type === e.type;
                    });
                    return r || e.addRemoteCandidate(t), !r;
                }
                function m(e, t) {
                    var r = new Error(t);
                    return r.name = e, r.code = ({
                        NotSupportedError: 9,
                        InvalidStateError: 11,
                        InvalidAccessError: 15,
                        TypeError: void 0,
                        OperationError: void 0
                    })[e], r;
                }
                t.exports = function(I, j) {
                    function L(e, t) {
                        t.addTrack(e), t.dispatchEvent(new I.MediaStreamTrackEvent("addtrack", {
                            track: e
                        }));
                    }
                    function i(e, t, r, n) {
                        var i = new Event("track");
                        i.track = t, i.receiver = r, i.transceiver = {
                            receiver: r
                        }, i.streams = n, I.setTimeout(function() {
                            e._dispatchEvent("track", i);
                        });
                    }
                    function n(e) {
                        var t = this, r = document.createDocumentFragment();
                        if ([
                            "addEventListener",
                            "removeEventListener",
                            "dispatchEvent"
                        ].forEach(function(e) {
                            t[e] = r[e].bind(r);
                        }), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", e = JSON.parse(JSON.stringify(e || {})), this.usingBundle = "max-bundle" === e.bundlePolicy, "negotiate" === e.rtcpMuxPolicy) throw m("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
                        switch(e.rtcpMuxPolicy || (e.rtcpMuxPolicy = "require"), e.iceTransportPolicy){
                            case "all":
                            case "relay":
                                break;
                            default:
                                e.iceTransportPolicy = "all";
                        }
                        switch(e.bundlePolicy){
                            case "balanced":
                            case "max-compat":
                            case "max-bundle":
                                break;
                            default:
                                e.bundlePolicy = "balanced";
                        }
                        if (e.iceServers = function(e, n) {
                            var i = !1;
                            return (e = JSON.parse(JSON.stringify(e))).filter(function(e) {
                                if (e && (e.urls || e.url)) {
                                    var t = e.urls || e.url;
                                    e.url && !e.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                                    var r = "string" == typeof t;
                                    return r && (t = [
                                        t
                                    ]), t = t.filter(function(e) {
                                        return 0 === e.indexOf("turn:") && -1 !== e.indexOf("transport=udp") && -1 === e.indexOf("turn:[") && !i ? i = !0 : 0 === e.indexOf("stun:") && 14393 <= n && -1 === e.indexOf("?transport=udp");
                                    }), delete e.url, e.urls = r ? t[0] : t, !!t.length;
                                }
                            });
                        }(e.iceServers || [], j), this._iceGatherers = [], e.iceCandidatePoolSize) for(var n = e.iceCandidatePoolSize; 0 < n; n--)this._iceGatherers.push(new I.RTCIceGatherer({
                            iceServers: e.iceServers,
                            gatherPolicy: e.iceTransportPolicy
                        }));
                        else e.iceCandidatePoolSize = 0;
                        this._config = e, this.transceivers = [], this._sdpSessionId = G.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1;
                    }
                    Object.defineProperty(n.prototype, "localDescription", {
                        configurable: !0,
                        get: function() {
                            return this._localDescription;
                        }
                    }), Object.defineProperty(n.prototype, "remoteDescription", {
                        configurable: !0,
                        get: function() {
                            return this._remoteDescription;
                        }
                    }), n.prototype.onicecandidate = null, n.prototype.onaddstream = null, n.prototype.ontrack = null, n.prototype.onremovestream = null, n.prototype.onsignalingstatechange = null, n.prototype.oniceconnectionstatechange = null, n.prototype.onconnectionstatechange = null, n.prototype.onicegatheringstatechange = null, n.prototype.onnegotiationneeded = null, n.prototype.ondatachannel = null, n.prototype._dispatchEvent = function(e, t) {
                        this._isClosed || (this.dispatchEvent(t), "function" == typeof this["on" + e] && this["on" + e](t));
                    }, n.prototype._emitGatheringStateChange = function() {
                        var e = new Event("icegatheringstatechange");
                        this._dispatchEvent("icegatheringstatechange", e);
                    }, n.prototype.getConfiguration = function() {
                        return this._config;
                    }, n.prototype.getLocalStreams = function() {
                        return this.localStreams;
                    }, n.prototype.getRemoteStreams = function() {
                        return this.remoteStreams;
                    }, n.prototype._createTransceiver = function(e, t) {
                        var r = 0 < this.transceivers.length, n = {
                            track: null,
                            iceGatherer: null,
                            iceTransport: null,
                            dtlsTransport: null,
                            localCapabilities: null,
                            remoteCapabilities: null,
                            rtpSender: null,
                            rtpReceiver: null,
                            kind: e,
                            mid: null,
                            sendEncodingParameters: null,
                            recvEncodingParameters: null,
                            stream: null,
                            associatedRemoteMediaStreams: [],
                            wantReceive: !0
                        };
                        if (this.usingBundle && r) n.iceTransport = this.transceivers[0].iceTransport, n.dtlsTransport = this.transceivers[0].dtlsTransport;
                        else {
                            var i = this._createIceAndDtlsTransports();
                            n.iceTransport = i.iceTransport, n.dtlsTransport = i.dtlsTransport;
                        }
                        return t || this.transceivers.push(n), n;
                    }, n.prototype.addTrack = function(t, e) {
                        if (this._isClosed) throw m("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
                        var r;
                        if (this.transceivers.find(function(e) {
                            return e.track === t;
                        })) throw m("InvalidAccessError", "Track already exists.");
                        for(var n = 0; n < this.transceivers.length; n++)this.transceivers[n].track || this.transceivers[n].kind !== t.kind || (r = this.transceivers[n]);
                        return r = r || this._createTransceiver(t.kind), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(e) && this.localStreams.push(e), r.track = t, r.stream = e, r.rtpSender = new I.RTCRtpSender(t, r.dtlsTransport), r.rtpSender;
                    }, n.prototype.addStream = function(t) {
                        var r = this;
                        if (15025 <= j) t.getTracks().forEach(function(e) {
                            r.addTrack(e, t);
                        });
                        else {
                            var n = t.clone();
                            t.getTracks().forEach(function(e, t) {
                                var r = n.getTracks()[t];
                                e.addEventListener("enabled", function(e) {
                                    r.enabled = e.enabled;
                                });
                            }), n.getTracks().forEach(function(e) {
                                r.addTrack(e, n);
                            });
                        }
                    }, n.prototype.removeTrack = function(t) {
                        if (this._isClosed) throw m("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
                        if (!(t instanceof I.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
                        var e = this.transceivers.find(function(e) {
                            return e.rtpSender === t;
                        });
                        if (!e) throw m("InvalidAccessError", "Sender was not created by this connection.");
                        var r = e.stream;
                        e.rtpSender.stop(), e.rtpSender = null, e.track = null, e.stream = null, -1 === this.transceivers.map(function(e) {
                            return e.stream;
                        }).indexOf(r) && -1 < this.localStreams.indexOf(r) && this.localStreams.splice(this.localStreams.indexOf(r), 1), this._maybeFireNegotiationNeeded();
                    }, n.prototype.removeStream = function(e) {
                        var r = this;
                        e.getTracks().forEach(function(t) {
                            var e = r.getSenders().find(function(e) {
                                return e.track === t;
                            });
                            e && r.removeTrack(e);
                        });
                    }, n.prototype.getSenders = function() {
                        return this.transceivers.filter(function(e) {
                            return !!e.rtpSender;
                        }).map(function(e) {
                            return e.rtpSender;
                        });
                    }, n.prototype.getReceivers = function() {
                        return this.transceivers.filter(function(e) {
                            return !!e.rtpReceiver;
                        }).map(function(e) {
                            return e.rtpReceiver;
                        });
                    }, n.prototype._createIceGatherer = function(r, e) {
                        var n = this;
                        if (e && 0 < r) return this.transceivers[0].iceGatherer;
                        if (this._iceGatherers.length) return this._iceGatherers.shift();
                        var i = new I.RTCIceGatherer({
                            iceServers: this._config.iceServers,
                            gatherPolicy: this._config.iceTransportPolicy
                        });
                        return Object.defineProperty(i, "state", {
                            value: "new",
                            writable: !0
                        }), this.transceivers[r].bufferedCandidateEvents = [], this.transceivers[r].bufferCandidates = function(e) {
                            var t = !e.candidate || 0 === Object.keys(e.candidate).length;
                            i.state = t ? "completed" : "gathering", null !== n.transceivers[r].bufferedCandidateEvents && n.transceivers[r].bufferedCandidateEvents.push(e);
                        }, i.addEventListener("localcandidate", this.transceivers[r].bufferCandidates), i;
                    }, n.prototype._gather = function(s, c) {
                        var d = this, p = this.transceivers[c].iceGatherer;
                        if (!p.onlocalcandidate) {
                            var e = this.transceivers[c].bufferedCandidateEvents;
                            this.transceivers[c].bufferedCandidateEvents = null, p.removeEventListener("localcandidate", this.transceivers[c].bufferCandidates), p.onlocalcandidate = function(e) {
                                if (!(d.usingBundle && 0 < c)) {
                                    var t = new Event("icecandidate");
                                    t.candidate = {
                                        sdpMid: s,
                                        sdpMLineIndex: c
                                    };
                                    var r = e.candidate, n = !r || 0 === Object.keys(r).length;
                                    if (n) "new" !== p.state && "gathering" !== p.state || (p.state = "completed");
                                    else {
                                        "new" === p.state && (p.state = "gathering"), r.component = 1, r.ufrag = p.getLocalParameters().usernameFragment;
                                        var i = G.writeCandidate(r);
                                        t.candidate = Object.assign(t.candidate, G.parseCandidate(i)), t.candidate.candidate = i, t.candidate.toJSON = function() {
                                            return {
                                                candidate: t.candidate.candidate,
                                                sdpMid: t.candidate.sdpMid,
                                                sdpMLineIndex: t.candidate.sdpMLineIndex,
                                                usernameFragment: t.candidate.usernameFragment
                                            };
                                        };
                                    }
                                    var a = G.getMediaSections(d._localDescription.sdp);
                                    a[t.candidate.sdpMLineIndex] += n ? "a=end-of-candidates\r\n" : "a=" + t.candidate.candidate + "\r\n", d._localDescription.sdp = G.getDescription(d._localDescription.sdp) + a.join("");
                                    var o = d.transceivers.every(function(e) {
                                        return e.iceGatherer && "completed" === e.iceGatherer.state;
                                    });
                                    "gathering" !== d.iceGatheringState && (d.iceGatheringState = "gathering", d._emitGatheringStateChange()), n || d._dispatchEvent("icecandidate", t), o && (d._dispatchEvent("icecandidate", new Event("icecandidate")), d.iceGatheringState = "complete", d._emitGatheringStateChange());
                                }
                            }, I.setTimeout(function() {
                                e.forEach(function(e) {
                                    p.onlocalcandidate(e);
                                });
                            }, 0);
                        }
                    }, n.prototype._createIceAndDtlsTransports = function() {
                        var e = this, t = new I.RTCIceTransport(null);
                        t.onicestatechange = function() {
                            e._updateIceConnectionState(), e._updateConnectionState();
                        };
                        var r = new I.RTCDtlsTransport(t);
                        return r.ondtlsstatechange = function() {
                            e._updateConnectionState();
                        }, r.onerror = function() {
                            Object.defineProperty(r, "state", {
                                value: "failed",
                                writable: !0
                            }), e._updateConnectionState();
                        }, {
                            iceTransport: t,
                            dtlsTransport: r
                        };
                    }, n.prototype._disposeIceAndDtlsTransports = function(e) {
                        var t = this.transceivers[e].iceGatherer;
                        t && (delete t.onlocalcandidate, delete this.transceivers[e].iceGatherer);
                        var r = this.transceivers[e].iceTransport;
                        r && (delete r.onicestatechange, delete this.transceivers[e].iceTransport);
                        var n = this.transceivers[e].dtlsTransport;
                        n && (delete n.ondtlsstatechange, delete n.onerror, delete this.transceivers[e].dtlsTransport);
                    }, n.prototype._transceive = function(e, t, r) {
                        var n = A(e.localCapabilities, e.remoteCapabilities);
                        t && e.rtpSender && (n.encodings = e.sendEncodingParameters, n.rtcp = {
                            cname: G.localCName,
                            compound: e.rtcpParameters.compound
                        }, e.recvEncodingParameters.length && (n.rtcp.ssrc = e.recvEncodingParameters[0].ssrc), e.rtpSender.send(n)), r && e.rtpReceiver && 0 < n.codecs.length && ("video" === e.kind && e.recvEncodingParameters && j < 15019 && e.recvEncodingParameters.forEach(function(e) {
                            delete e.rtx;
                        }), e.recvEncodingParameters.length ? n.encodings = e.recvEncodingParameters : n.encodings = [
                            {}
                        ], n.rtcp = {
                            compound: e.rtcpParameters.compound
                        }, e.rtcpParameters.cname && (n.rtcp.cname = e.rtcpParameters.cname), e.sendEncodingParameters.length && (n.rtcp.ssrc = e.sendEncodingParameters[0].ssrc), e.rtpReceiver.receive(n));
                    }, n.prototype.setLocalDescription = function(e) {
                        var t, u, f = this;
                        if (-1 === [
                            "offer",
                            "answer"
                        ].indexOf(e.type)) return Promise.reject(m("TypeError", 'Unsupported type "' + e.type + '"'));
                        if (!a("setLocalDescription", e.type, f.signalingState) || f._isClosed) return Promise.reject(m("InvalidStateError", "Can not set local " + e.type + " in state " + f.signalingState));
                        if ("offer" === e.type) t = G.splitSections(e.sdp), u = t.shift(), t.forEach(function(e, t) {
                            var r = G.parseRtpParameters(e);
                            f.transceivers[t].localCapabilities = r;
                        }), f.transceivers.forEach(function(e, t) {
                            f._gather(e.mid, t);
                        });
                        else if ("answer" === e.type) {
                            t = G.splitSections(f._remoteDescription.sdp), u = t.shift();
                            var l = 0 < G.matchPrefix(u, "a=ice-lite").length;
                            t.forEach(function(e, t) {
                                var r = f.transceivers[t], n = r.iceGatherer, i = r.iceTransport, a = r.dtlsTransport, o = r.localCapabilities, s = r.remoteCapabilities;
                                if (!(G.isRejected(e) && 0 === G.matchPrefix(e, "a=bundle-only").length) && !r.rejected) {
                                    var c = G.getIceParameters(e, u), d = G.getDtlsParameters(e, u);
                                    l && (d.role = "server"), f.usingBundle && 0 !== t || (f._gather(r.mid, t), "new" === i.state && i.start(n, c, l ? "controlling" : "controlled"), "new" === a.state && a.start(d));
                                    var p = A(o, s);
                                    f._transceive(r, 0 < p.codecs.length, !1);
                                }
                            });
                        }
                        return f._localDescription = {
                            type: e.type,
                            sdp: e.sdp
                        }, "offer" === e.type ? f._updateSignalingState("have-local-offer") : f._updateSignalingState("stable"), Promise.resolve();
                    }, n.prototype.setRemoteDescription = function(_) {
                        var w = this;
                        if (-1 === [
                            "offer",
                            "answer"
                        ].indexOf(_.type)) return Promise.reject(m("TypeError", 'Unsupported type "' + _.type + '"'));
                        if (!a("setRemoteDescription", _.type, w.signalingState) || w._isClosed) return Promise.reject(m("InvalidStateError", "Can not set remote " + _.type + " in state " + w.signalingState));
                        var k = {};
                        w.remoteStreams.forEach(function(e) {
                            k[e.id] = e;
                        });
                        var x = [], e = G.splitSections(_.sdp), M = e.shift(), D = 0 < G.matchPrefix(M, "a=ice-lite").length, O = 0 < G.matchPrefix(M, "a=group:BUNDLE ").length;
                        w.usingBundle = O;
                        var t = G.matchPrefix(M, "a=ice-options:")[0];
                        return w.canTrickleIceCandidates = !!t && 0 <= t.substr(14).split(" ").indexOf("trickle"), e.forEach(function(e, t) {
                            var r = G.splitLines(e), n = G.getKind(e), i = G.isRejected(e) && 0 === G.matchPrefix(e, "a=bundle-only").length, a = r[0].substr(2).split(" ")[2], o = G.getDirection(e, M), s = G.parseMsid(e), c = G.getMid(e) || G.generateIdentifier();
                            if (i || "application" === n && ("DTLS/SCTP" === a || "UDP/DTLS/SCTP" === a)) w.transceivers[t] = {
                                mid: c,
                                kind: n,
                                protocol: a,
                                rejected: !0
                            };
                            else {
                                var d, p, u, f, l, m, h, v, y;
                                !i && w.transceivers[t] && w.transceivers[t].rejected && (w.transceivers[t] = w._createTransceiver(n, !0));
                                var g, C, S = G.parseRtpParameters(e);
                                i || (g = G.getIceParameters(e, M), (C = G.getDtlsParameters(e, M)).role = "client"), h = G.parseRtpEncodingParameters(e);
                                var T = G.parseRtcpParameters(e), P = 0 < G.matchPrefix(e, "a=end-of-candidates", M).length, R = G.matchPrefix(e, "a=candidate:").map(function(e) {
                                    return G.parseCandidate(e);
                                }).filter(function(e) {
                                    return 1 === e.component;
                                });
                                if (("offer" === _.type || "answer" === _.type) && !i && O && 0 < t && w.transceivers[t] && (w._disposeIceAndDtlsTransports(t), w.transceivers[t].iceGatherer = w.transceivers[0].iceGatherer, w.transceivers[t].iceTransport = w.transceivers[0].iceTransport, w.transceivers[t].dtlsTransport = w.transceivers[0].dtlsTransport, w.transceivers[t].rtpSender && w.transceivers[t].rtpSender.setTransport(w.transceivers[0].dtlsTransport), w.transceivers[t].rtpReceiver && w.transceivers[t].rtpReceiver.setTransport(w.transceivers[0].dtlsTransport)), "offer" !== _.type || i) {
                                    if ("answer" === _.type && !i) p = (d = w.transceivers[t]).iceGatherer, u = d.iceTransport, f = d.dtlsTransport, l = d.rtpReceiver, m = d.sendEncodingParameters, v = d.localCapabilities, w.transceivers[t].recvEncodingParameters = h, w.transceivers[t].remoteCapabilities = S, w.transceivers[t].rtcpParameters = T, R.length && "new" === u.state && (!D && !P || O && 0 !== t ? R.forEach(function(e) {
                                        N(d.iceTransport, e);
                                    }) : u.setRemoteCandidates(R)), O && 0 !== t || ("new" === u.state && u.start(p, g, "controlling"), "new" === f.state && f.start(C)), !A(d.localCapabilities, d.remoteCapabilities).codecs.filter(function(e) {
                                        return "rtx" === e.name.toLowerCase();
                                    }).length && d.sendEncodingParameters[0].rtx && delete d.sendEncodingParameters[0].rtx, w._transceive(d, "sendrecv" === o || "recvonly" === o, "sendrecv" === o || "sendonly" === o), !l || "sendrecv" !== o && "sendonly" !== o ? delete d.rtpReceiver : (y = l.track, s ? (k[s.stream] || (k[s.stream] = new I.MediaStream), L(y, k[s.stream]), x.push([
                                        y,
                                        l,
                                        k[s.stream]
                                    ])) : (k.default || (k.default = new I.MediaStream), L(y, k.default), x.push([
                                        y,
                                        l,
                                        k.default
                                    ])));
                                } else {
                                    (d = w.transceivers[t] || w._createTransceiver(n)).mid = c, d.iceGatherer || (d.iceGatherer = w._createIceGatherer(t, O)), R.length && "new" === d.iceTransport.state && (!P || O && 0 !== t ? R.forEach(function(e) {
                                        N(d.iceTransport, e);
                                    }) : d.iceTransport.setRemoteCandidates(R)), v = I.RTCRtpReceiver.getCapabilities(n), j < 15019 && (v.codecs = v.codecs.filter(function(e) {
                                        return "rtx" !== e.name;
                                    })), m = d.sendEncodingParameters || [
                                        {
                                            ssrc: 1001 * (2 * t + 2)
                                        }
                                    ];
                                    var b, E = !1;
                                    if ("sendrecv" === o || "sendonly" === o) {
                                        if (E = !d.rtpReceiver, l = d.rtpReceiver || new I.RTCRtpReceiver(d.dtlsTransport, n), E) y = l.track, s && "-" === s.stream || (b = s ? (k[s.stream] || (k[s.stream] = new I.MediaStream, Object.defineProperty(k[s.stream], "id", {
                                            get: function() {
                                                return s.stream;
                                            }
                                        })), Object.defineProperty(y, "id", {
                                            get: function() {
                                                return s.track;
                                            }
                                        }), k[s.stream]) : (k.default || (k.default = new I.MediaStream), k.default)), b && (L(y, b), d.associatedRemoteMediaStreams.push(b)), x.push([
                                            y,
                                            l,
                                            b
                                        ]);
                                    } else d.rtpReceiver && d.rtpReceiver.track && (d.associatedRemoteMediaStreams.forEach(function(e) {
                                        var t = e.getTracks().find(function(e) {
                                            return e.id === d.rtpReceiver.track.id;
                                        });
                                        t && function(e, t) {
                                            t.removeTrack(e), t.dispatchEvent(new I.MediaStreamTrackEvent("removetrack", {
                                                track: e
                                            }));
                                        }(t, e);
                                    }), d.associatedRemoteMediaStreams = []);
                                    d.localCapabilities = v, d.remoteCapabilities = S, d.rtpReceiver = l, d.rtcpParameters = T, d.sendEncodingParameters = m, d.recvEncodingParameters = h, w._transceive(w.transceivers[t], !1, E);
                                }
                            }
                        }), void 0 === w._dtlsRole && (w._dtlsRole = "offer" === _.type ? "active" : "passive"), w._remoteDescription = {
                            type: _.type,
                            sdp: _.sdp
                        }, "offer" === _.type ? w._updateSignalingState("have-remote-offer") : w._updateSignalingState("stable"), Object.keys(k).forEach(function(e) {
                            var n = k[e];
                            if (n.getTracks().length) {
                                if (-1 === w.remoteStreams.indexOf(n)) {
                                    w.remoteStreams.push(n);
                                    var t = new Event("addstream");
                                    t.stream = n, I.setTimeout(function() {
                                        w._dispatchEvent("addstream", t);
                                    });
                                }
                                x.forEach(function(e) {
                                    var t = e[0], r = e[1];
                                    n.id === e[2].id && i(w, t, r, [
                                        n
                                    ]);
                                });
                            }
                        }), x.forEach(function(e) {
                            e[2] || i(w, e[0], e[1], []);
                        }), I.setTimeout(function() {
                            w && w.transceivers && w.transceivers.forEach(function(e) {
                                e.iceTransport && "new" === e.iceTransport.state && 0 < e.iceTransport.getRemoteCandidates().length && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), e.iceTransport.addRemoteCandidate({}));
                            });
                        }, 4e3), Promise.resolve();
                    }, n.prototype.close = function() {
                        this.transceivers.forEach(function(e) {
                            e.iceTransport && e.iceTransport.stop(), e.dtlsTransport && e.dtlsTransport.stop(), e.rtpSender && e.rtpSender.stop(), e.rtpReceiver && e.rtpReceiver.stop();
                        }), this._isClosed = !0, this._updateSignalingState("closed");
                    }, n.prototype._updateSignalingState = function(e) {
                        this.signalingState = e;
                        var t = new Event("signalingstatechange");
                        this._dispatchEvent("signalingstatechange", t);
                    }, n.prototype._maybeFireNegotiationNeeded = function() {
                        var t = this;
                        "stable" === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, I.setTimeout(function() {
                            if (t.needNegotiation) {
                                t.needNegotiation = !1;
                                var e = new Event("negotiationneeded");
                                t._dispatchEvent("negotiationneeded", e);
                            }
                        }, 0));
                    }, n.prototype._updateIceConnectionState = function() {
                        var e, t = {
                            new: 0,
                            closed: 0,
                            checking: 0,
                            connected: 0,
                            completed: 0,
                            disconnected: 0,
                            failed: 0
                        };
                        if (this.transceivers.forEach(function(e) {
                            e.iceTransport && !e.rejected && t[e.iceTransport.state]++;
                        }), e = "new", 0 < t.failed ? e = "failed" : 0 < t.checking ? e = "checking" : 0 < t.disconnected ? e = "disconnected" : 0 < t.new ? e = "new" : 0 < t.connected ? e = "connected" : 0 < t.completed && (e = "completed"), e !== this.iceConnectionState) {
                            this.iceConnectionState = e;
                            var r = new Event("iceconnectionstatechange");
                            this._dispatchEvent("iceconnectionstatechange", r);
                        }
                    }, n.prototype._updateConnectionState = function() {
                        var e, t = {
                            new: 0,
                            closed: 0,
                            connecting: 0,
                            connected: 0,
                            completed: 0,
                            disconnected: 0,
                            failed: 0
                        };
                        if (this.transceivers.forEach(function(e) {
                            e.iceTransport && e.dtlsTransport && !e.rejected && (t[e.iceTransport.state]++, t[e.dtlsTransport.state]++);
                        }), t.connected += t.completed, e = "new", 0 < t.failed ? e = "failed" : 0 < t.connecting ? e = "connecting" : 0 < t.disconnected ? e = "disconnected" : 0 < t.new ? e = "new" : 0 < t.connected && (e = "connected"), e !== this.connectionState) {
                            this.connectionState = e;
                            var r = new Event("connectionstatechange");
                            this._dispatchEvent("connectionstatechange", r);
                        }
                    }, n.prototype.createOffer = function() {
                        var s = this;
                        if (s._isClosed) return Promise.reject(m("InvalidStateError", "Can not call createOffer after close"));
                        var t = s.transceivers.filter(function(e) {
                            return "audio" === e.kind;
                        }).length, r = s.transceivers.filter(function(e) {
                            return "video" === e.kind;
                        }).length, e = arguments[0];
                        if (e) {
                            if (e.mandatory || e.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                            void 0 !== e.offerToReceiveAudio && (t = !0 === e.offerToReceiveAudio ? 1 : !1 === e.offerToReceiveAudio ? 0 : e.offerToReceiveAudio), void 0 !== e.offerToReceiveVideo && (r = !0 === e.offerToReceiveVideo ? 1 : !1 === e.offerToReceiveVideo ? 0 : e.offerToReceiveVideo);
                        }
                        for(s.transceivers.forEach(function(e) {
                            "audio" === e.kind ? --t < 0 && (e.wantReceive = !1) : "video" === e.kind && --r < 0 && (e.wantReceive = !1);
                        }); 0 < t || 0 < r;)0 < t && (s._createTransceiver("audio"), t--), 0 < r && (s._createTransceiver("video"), r--);
                        var n = G.writeSessionBoilerplate(s._sdpSessionId, s._sdpSessionVersion++);
                        s.transceivers.forEach(function(e, t) {
                            var r = e.track, n = e.kind, i = e.mid || G.generateIdentifier();
                            e.mid = i, e.iceGatherer || (e.iceGatherer = s._createIceGatherer(t, s.usingBundle));
                            var a = I.RTCRtpSender.getCapabilities(n);
                            j < 15019 && (a.codecs = a.codecs.filter(function(e) {
                                return "rtx" !== e.name;
                            })), a.codecs.forEach(function(t) {
                                "H264" === t.name && void 0 === t.parameters["level-asymmetry-allowed"] && (t.parameters["level-asymmetry-allowed"] = "1"), e.remoteCapabilities && e.remoteCapabilities.codecs && e.remoteCapabilities.codecs.forEach(function(e) {
                                    t.name.toLowerCase() === e.name.toLowerCase() && t.clockRate === e.clockRate && (t.preferredPayloadType = e.payloadType);
                                });
                            }), a.headerExtensions.forEach(function(t) {
                                (e.remoteCapabilities && e.remoteCapabilities.headerExtensions || []).forEach(function(e) {
                                    t.uri === e.uri && (t.id = e.id);
                                });
                            });
                            var o = e.sendEncodingParameters || [
                                {
                                    ssrc: 1001 * (2 * t + 1)
                                }
                            ];
                            r && 15019 <= j && "video" === n && !o[0].rtx && (o[0].rtx = {
                                ssrc: o[0].ssrc + 1
                            }), e.wantReceive && (e.rtpReceiver = new I.RTCRtpReceiver(e.dtlsTransport, n)), e.localCapabilities = a, e.sendEncodingParameters = o;
                        }), "max-compat" !== s._config.bundlePolicy && (n += "a=group:BUNDLE " + s.transceivers.map(function(e) {
                            return e.mid;
                        }).join(" ") + "\r\n"), n += "a=ice-options:trickle\r\n", s.transceivers.forEach(function(e, t) {
                            n += c(e, e.localCapabilities, "offer", e.stream, s._dtlsRole), n += "a=rtcp-rsize\r\n", !e.iceGatherer || "new" === s.iceGatheringState || 0 !== t && s.usingBundle || (e.iceGatherer.getLocalCandidates().forEach(function(e) {
                                e.component = 1, n += "a=" + G.writeCandidate(e) + "\r\n";
                            }), "completed" === e.iceGatherer.state && (n += "a=end-of-candidates\r\n"));
                        });
                        var i = new I.RTCSessionDescription({
                            type: "offer",
                            sdp: n
                        });
                        return Promise.resolve(i);
                    }, n.prototype.createAnswer = function() {
                        var i = this;
                        if (i._isClosed) return Promise.reject(m("InvalidStateError", "Can not call createAnswer after close"));
                        if ("have-remote-offer" !== i.signalingState && "have-local-pranswer" !== i.signalingState) return Promise.reject(m("InvalidStateError", "Can not call createAnswer in signalingState " + i.signalingState));
                        var a = G.writeSessionBoilerplate(i._sdpSessionId, i._sdpSessionVersion++);
                        i.usingBundle && (a += "a=group:BUNDLE " + i.transceivers.map(function(e) {
                            return e.mid;
                        }).join(" ") + "\r\n"), a += "a=ice-options:trickle\r\n";
                        var o = G.getMediaSections(i._remoteDescription.sdp).length;
                        i.transceivers.forEach(function(e, t) {
                            if (!(o < t + 1)) {
                                if (e.rejected) return "application" === e.kind ? "DTLS/SCTP" === e.protocol ? a += "m=application 0 DTLS/SCTP 5000\r\n" : a += "m=application 0 " + e.protocol + " webrtc-datachannel\r\n" : "audio" === e.kind ? a += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n" : "video" === e.kind && (a += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"), void (a += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e.mid + "\r\n");
                                var r;
                                if (e.stream) "audio" === e.kind ? r = e.stream.getAudioTracks()[0] : "video" === e.kind && (r = e.stream.getVideoTracks()[0]), r && 15019 <= j && "video" === e.kind && !e.sendEncodingParameters[0].rtx && (e.sendEncodingParameters[0].rtx = {
                                    ssrc: e.sendEncodingParameters[0].ssrc + 1
                                });
                                var n = A(e.localCapabilities, e.remoteCapabilities);
                                !n.codecs.filter(function(e) {
                                    return "rtx" === e.name.toLowerCase();
                                }).length && e.sendEncodingParameters[0].rtx && delete e.sendEncodingParameters[0].rtx, a += c(e, n, "answer", e.stream, i._dtlsRole), e.rtcpParameters && e.rtcpParameters.reducedSize && (a += "a=rtcp-rsize\r\n");
                            }
                        });
                        var e = new I.RTCSessionDescription({
                            type: "answer",
                            sdp: a
                        });
                        return Promise.resolve(e);
                    }, n.prototype.addIceCandidate = function(c) {
                        var d, p = this;
                        return c && void 0 === c.sdpMLineIndex && !c.sdpMid ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new Promise(function(e, t) {
                            if (!p._remoteDescription) return t(m("InvalidStateError", "Can not add ICE candidate without a remote description"));
                            if (c && "" !== c.candidate) {
                                var r = c.sdpMLineIndex;
                                if (c.sdpMid) {
                                    for(var n = 0; n < p.transceivers.length; n++)if (p.transceivers[n].mid === c.sdpMid) {
                                        r = n;
                                        break;
                                    }
                                }
                                var i = p.transceivers[r];
                                if (!i) return t(m("OperationError", "Can not add ICE candidate"));
                                if (i.rejected) return e();
                                var a = 0 < Object.keys(c.candidate).length ? G.parseCandidate(c.candidate) : {};
                                if ("tcp" === a.protocol && (0 === a.port || 9 === a.port)) return e();
                                if (a.component && 1 !== a.component) return e();
                                if ((0 === r || 0 < r && i.iceTransport !== p.transceivers[0].iceTransport) && !N(i.iceTransport, a)) return t(m("OperationError", "Can not add ICE candidate"));
                                var o = c.candidate.trim();
                                0 === o.indexOf("a=") && (o = o.substr(2)), (d = G.getMediaSections(p._remoteDescription.sdp))[r] += "a=" + (a.type ? o : "end-of-candidates") + "\r\n", p._remoteDescription.sdp = G.getDescription(p._remoteDescription.sdp) + d.join("");
                            } else for(var s = 0; s < p.transceivers.length && (p.transceivers[s].rejected || (p.transceivers[s].iceTransport.addRemoteCandidate({}), (d = G.getMediaSections(p._remoteDescription.sdp))[s] += "a=end-of-candidates\r\n", p._remoteDescription.sdp = G.getDescription(p._remoteDescription.sdp) + d.join(""), !p.usingBundle)); s++);
                            e();
                        });
                    }, n.prototype.getStats = function(t) {
                        if (t && t instanceof I.MediaStreamTrack) {
                            var r = null;
                            if (this.transceivers.forEach(function(e) {
                                e.rtpSender && e.rtpSender.track === t ? r = e.rtpSender : e.rtpReceiver && e.rtpReceiver.track === t && (r = e.rtpReceiver);
                            }), !r) throw m("InvalidAccessError", "Invalid selector.");
                            return r.getStats();
                        }
                        var n = [];
                        return this.transceivers.forEach(function(t) {
                            [
                                "rtpSender",
                                "rtpReceiver",
                                "iceGatherer",
                                "iceTransport",
                                "dtlsTransport"
                            ].forEach(function(e) {
                                t[e] && n.push(t[e].getStats());
                            });
                        }), Promise.all(n).then(function(e) {
                            var t = new Map;
                            return e.forEach(function(e) {
                                e.forEach(function(e) {
                                    t.set(e.id, e);
                                });
                            }), t;
                        });
                    };
                    [
                        "RTCRtpSender",
                        "RTCRtpReceiver",
                        "RTCIceGatherer",
                        "RTCIceTransport",
                        "RTCDtlsTransport"
                    ].forEach(function(e) {
                        var t = I[e];
                        if (t && t.prototype && t.prototype.getStats) {
                            var r = t.prototype.getStats;
                            t.prototype.getStats = function() {
                                return r.apply(this).then(function(t) {
                                    var r = new Map;
                                    return Object.keys(t).forEach(function(e) {
                                        t[e].type = function(e) {
                                            return ({
                                                inboundrtp: "inbound-rtp",
                                                outboundrtp: "outbound-rtp",
                                                candidatepair: "candidate-pair",
                                                localcandidate: "local-candidate",
                                                remotecandidate: "remote-candidate"
                                            })[e.type] || e.type;
                                        }(t[e]), r.set(e, t[e]);
                                    }), r;
                                });
                            };
                        }
                    });
                    var e = [
                        "createOffer",
                        "createAnswer"
                    ];
                    return e.forEach(function(e) {
                        var r = n.prototype[e];
                        n.prototype[e] = function() {
                            var t = arguments;
                            return "function" == typeof t[0] || "function" == typeof t[1] ? r.apply(this, [
                                arguments[2]
                            ]).then(function(e) {
                                "function" == typeof t[0] && t[0].apply(null, [
                                    e
                                ]);
                            }, function(e) {
                                "function" == typeof t[1] && t[1].apply(null, [
                                    e
                                ]);
                            }) : r.apply(this, arguments);
                        };
                    }), (e = [
                        "setLocalDescription",
                        "setRemoteDescription",
                        "addIceCandidate"
                    ]).forEach(function(e) {
                        var r = n.prototype[e];
                        n.prototype[e] = function() {
                            var t = arguments;
                            return "function" == typeof t[1] || "function" == typeof t[2] ? r.apply(this, arguments).then(function() {
                                "function" == typeof t[1] && t[1].apply(null);
                            }, function(e) {
                                "function" == typeof t[2] && t[2].apply(null, [
                                    e
                                ]);
                            }) : r.apply(this, arguments);
                        };
                    }), [
                        "getStats"
                    ].forEach(function(e) {
                        var t = n.prototype[e];
                        n.prototype[e] = function() {
                            var e = arguments;
                            return "function" == typeof e[1] ? t.apply(this, arguments).then(function() {
                                "function" == typeof e[1] && e[1].apply(null);
                            }) : t.apply(this, arguments);
                        };
                    }), n;
                };
            },
            {
                sdp: 17
            }
        ],
        17: [
            function(e, t, r) {
                "use strict";
                var p = {
                    generateIdentifier: function() {
                        return Math.random().toString(36).substr(2, 10);
                    }
                };
                p.localCName = p.generateIdentifier(), p.splitLines = function(e) {
                    return e.trim().split("\n").map(function(e) {
                        return e.trim();
                    });
                }, p.splitSections = function(e) {
                    return e.split("\nm=").map(function(e, t) {
                        return (0 < t ? "m=" + e : e).trim() + "\r\n";
                    });
                }, p.getDescription = function(e) {
                    var t = p.splitSections(e);
                    return t && t[0];
                }, p.getMediaSections = function(e) {
                    var t = p.splitSections(e);
                    return t.shift(), t;
                }, p.matchPrefix = function(e, t) {
                    return p.splitLines(e).filter(function(e) {
                        return 0 === e.indexOf(t);
                    });
                }, p.parseCandidate = function(e) {
                    for(var t, r = {
                        foundation: (t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0],
                        component: parseInt(t[1], 10),
                        protocol: t[2].toLowerCase(),
                        priority: parseInt(t[3], 10),
                        ip: t[4],
                        address: t[4],
                        port: parseInt(t[5], 10),
                        type: t[7]
                    }, n = 8; n < t.length; n += 2)switch(t[n]){
                        case "raddr":
                            r.relatedAddress = t[n + 1];
                            break;
                        case "rport":
                            r.relatedPort = parseInt(t[n + 1], 10);
                            break;
                        case "tcptype":
                            r.tcpType = t[n + 1];
                            break;
                        case "ufrag":
                            r.ufrag = t[n + 1], r.usernameFragment = t[n + 1];
                            break;
                        default:
                            r[t[n]] = t[n + 1];
                    }
                    return r;
                }, p.writeCandidate = function(e) {
                    var t = [];
                    t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.address || e.ip), t.push(e.port);
                    var r = e.type;
                    return t.push("typ"), t.push(r), "host" !== r && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)), "candidate:" + t.join(" ");
                }, p.parseIceOptions = function(e) {
                    return e.substr(14).split(" ");
                }, p.parseRtpMap = function(e) {
                    var t = e.substr(9).split(" "), r = {
                        payloadType: parseInt(t.shift(), 10)
                    };
                    return t = t[0].split("/"), r.name = t[0], r.clockRate = parseInt(t[1], 10), r.channels = 3 === t.length ? parseInt(t[2], 10) : 1, r.numChannels = r.channels, r;
                }, p.writeRtpMap = function(e) {
                    var t = e.payloadType;
                    void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
                    var r = e.channels || e.numChannels || 1;
                    return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== r ? "/" + r : "") + "\r\n";
                }, p.parseExtmap = function(e) {
                    var t = e.substr(9).split(" ");
                    return {
                        id: parseInt(t[0], 10),
                        direction: 0 < t[0].indexOf("/") ? t[0].split("/")[1] : "sendrecv",
                        uri: t[1]
                    };
                }, p.writeExtmap = function(e) {
                    return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + "\r\n";
                }, p.parseFmtp = function(e) {
                    for(var t, r = {}, n = e.substr(e.indexOf(" ") + 1).split(";"), i = 0; i < n.length; i++)r[(t = n[i].trim().split("="))[0].trim()] = t[1];
                    return r;
                }, p.writeFmtp = function(t) {
                    var e = "", r = t.payloadType;
                    if (void 0 !== t.preferredPayloadType && (r = t.preferredPayloadType), t.parameters && Object.keys(t.parameters).length) {
                        var n = [];
                        Object.keys(t.parameters).forEach(function(e) {
                            t.parameters[e] ? n.push(e + "=" + t.parameters[e]) : n.push(e);
                        }), e += "a=fmtp:" + r + " " + n.join(";") + "\r\n";
                    }
                    return e;
                }, p.parseRtcpFb = function(e) {
                    var t = e.substr(e.indexOf(" ") + 1).split(" ");
                    return {
                        type: t.shift(),
                        parameter: t.join(" ")
                    };
                }, p.writeRtcpFb = function(e) {
                    var t = "", r = e.payloadType;
                    return void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach(function(e) {
                        t += "a=rtcp-fb:" + r + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n";
                    }), t;
                }, p.parseSsrcMedia = function(e) {
                    var t = e.indexOf(" "), r = {
                        ssrc: parseInt(e.substr(7, t - 7), 10)
                    }, n = e.indexOf(":", t);
                    return -1 < n ? (r.attribute = e.substr(t + 1, n - t - 1), r.value = e.substr(n + 1)) : r.attribute = e.substr(t + 1), r;
                }, p.parseSsrcGroup = function(e) {
                    var t = e.substr(13).split(" ");
                    return {
                        semantics: t.shift(),
                        ssrcs: t.map(function(e) {
                            return parseInt(e, 10);
                        })
                    };
                }, p.getMid = function(e) {
                    var t = p.matchPrefix(e, "a=mid:")[0];
                    if (t) return t.substr(6);
                }, p.parseFingerprint = function(e) {
                    var t = e.substr(14).split(" ");
                    return {
                        algorithm: t[0].toLowerCase(),
                        value: t[1]
                    };
                }, p.getDtlsParameters = function(e, t) {
                    return {
                        role: "auto",
                        fingerprints: p.matchPrefix(e + t, "a=fingerprint:").map(p.parseFingerprint)
                    };
                }, p.writeDtlsParameters = function(e, t) {
                    var r = "a=setup:" + t + "\r\n";
                    return e.fingerprints.forEach(function(e) {
                        r += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n";
                    }), r;
                }, p.getIceParameters = function(e, t) {
                    var r = p.splitLines(e);
                    return {
                        usernameFragment: (r = r.concat(p.splitLines(t))).filter(function(e) {
                            return 0 === e.indexOf("a=ice-ufrag:");
                        })[0].substr(12),
                        password: r.filter(function(e) {
                            return 0 === e.indexOf("a=ice-pwd:");
                        })[0].substr(10)
                    };
                }, p.writeIceParameters = function(e) {
                    return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n";
                }, p.parseRtpParameters = function(e) {
                    for(var t = {
                        codecs: [],
                        headerExtensions: [],
                        fecMechanisms: [],
                        rtcp: []
                    }, r = p.splitLines(e)[0].split(" "), n = 3; n < r.length; n++){
                        var i = r[n], a = p.matchPrefix(e, "a=rtpmap:" + i + " ")[0];
                        if (a) {
                            var o = p.parseRtpMap(a), s = p.matchPrefix(e, "a=fmtp:" + i + " ");
                            switch(o.parameters = s.length ? p.parseFmtp(s[0]) : {}, o.rtcpFeedback = p.matchPrefix(e, "a=rtcp-fb:" + i + " ").map(p.parseRtcpFb), t.codecs.push(o), o.name.toUpperCase()){
                                case "RED":
                                case "ULPFEC":
                                    t.fecMechanisms.push(o.name.toUpperCase());
                            }
                        }
                    }
                    return p.matchPrefix(e, "a=extmap:").forEach(function(e) {
                        t.headerExtensions.push(p.parseExtmap(e));
                    }), t;
                }, p.writeRtpDescription = function(e, t) {
                    var r = "";
                    r += "m=" + e + " ", r += 0 < t.codecs.length ? "9" : "0", r += " UDP/TLS/RTP/SAVPF ", r += t.codecs.map(function(e) {
                        return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType;
                    }).join(" ") + "\r\n", r += "c=IN IP4 0.0.0.0\r\n", r += "a=rtcp:9 IN IP4 0.0.0.0\r\n", t.codecs.forEach(function(e) {
                        r += p.writeRtpMap(e), r += p.writeFmtp(e), r += p.writeRtcpFb(e);
                    });
                    var n = 0;
                    return t.codecs.forEach(function(e) {
                        e.maxptime > n && (n = e.maxptime);
                    }), 0 < n && (r += "a=maxptime:" + n + "\r\n"), r += "a=rtcp-mux\r\n", t.headerExtensions && t.headerExtensions.forEach(function(e) {
                        r += p.writeExtmap(e);
                    }), r;
                }, p.parseRtpEncodingParameters = function(e) {
                    var r, n = [], t = p.parseRtpParameters(e), i = -1 !== t.fecMechanisms.indexOf("RED"), a = -1 !== t.fecMechanisms.indexOf("ULPFEC"), o = p.matchPrefix(e, "a=ssrc:").map(function(e) {
                        return p.parseSsrcMedia(e);
                    }).filter(function(e) {
                        return "cname" === e.attribute;
                    }), s = 0 < o.length && o[0].ssrc, c = p.matchPrefix(e, "a=ssrc-group:FID").map(function(e) {
                        return e.substr(17).split(" ").map(function(e) {
                            return parseInt(e, 10);
                        });
                    });
                    0 < c.length && 1 < c[0].length && c[0][0] === s && (r = c[0][1]), t.codecs.forEach(function(e) {
                        if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                            var t = {
                                ssrc: s,
                                codecPayloadType: parseInt(e.parameters.apt, 10)
                            };
                            s && r && (t.rtx = {
                                ssrc: r
                            }), n.push(t), i && ((t = JSON.parse(JSON.stringify(t))).fec = {
                                ssrc: s,
                                mechanism: a ? "red+ulpfec" : "red"
                            }, n.push(t));
                        }
                    }), 0 === n.length && s && n.push({
                        ssrc: s
                    });
                    var d = p.matchPrefix(e, "b=");
                    return d.length && (d = 0 === d[0].indexOf("b=TIAS:") ? parseInt(d[0].substr(7), 10) : 0 === d[0].indexOf("b=AS:") ? 1e3 * parseInt(d[0].substr(5), 10) * .95 - 16e3 : void 0, n.forEach(function(e) {
                        e.maxBitrate = d;
                    })), n;
                }, p.parseRtcpParameters = function(e) {
                    var t = {}, r = p.matchPrefix(e, "a=ssrc:").map(function(e) {
                        return p.parseSsrcMedia(e);
                    }).filter(function(e) {
                        return "cname" === e.attribute;
                    })[0];
                    r && (t.cname = r.value, t.ssrc = r.ssrc);
                    var n = p.matchPrefix(e, "a=rtcp-rsize");
                    t.reducedSize = 0 < n.length, t.compound = 0 === n.length;
                    var i = p.matchPrefix(e, "a=rtcp-mux");
                    return t.mux = 0 < i.length, t;
                }, p.parseMsid = function(e) {
                    var t, r = p.matchPrefix(e, "a=msid:");
                    if (1 === r.length) return {
                        stream: (t = r[0].substr(7).split(" "))[0],
                        track: t[1]
                    };
                    var n = p.matchPrefix(e, "a=ssrc:").map(function(e) {
                        return p.parseSsrcMedia(e);
                    }).filter(function(e) {
                        return "msid" === e.attribute;
                    });
                    return 0 < n.length ? {
                        stream: (t = n[0].value.split(" "))[0],
                        track: t[1]
                    } : void 0;
                }, p.parseSctpDescription = function(e) {
                    var t, r = p.parseMLine(e), n = p.matchPrefix(e, "a=max-message-size:");
                    0 < n.length && (t = parseInt(n[0].substr(19), 10)), isNaN(t) && (t = 65536);
                    var i = p.matchPrefix(e, "a=sctp-port:");
                    if (0 < i.length) return {
                        port: parseInt(i[0].substr(12), 10),
                        protocol: r.fmt,
                        maxMessageSize: t
                    };
                    if (0 < p.matchPrefix(e, "a=sctpmap:").length) {
                        var a = p.matchPrefix(e, "a=sctpmap:")[0].substr(10).split(" ");
                        return {
                            port: parseInt(a[0], 10),
                            protocol: a[1],
                            maxMessageSize: t
                        };
                    }
                }, p.writeSctpDescription = function(e, t) {
                    var r = [];
                    return r = "DTLS/SCTP" !== e.protocol ? [
                        "m=" + e.kind + " 9 " + e.protocol + " " + t.protocol + "\r\n",
                        "c=IN IP4 0.0.0.0\r\n",
                        "a=sctp-port:" + t.port + "\r\n"
                    ] : [
                        "m=" + e.kind + " 9 " + e.protocol + " " + t.port + "\r\n",
                        "c=IN IP4 0.0.0.0\r\n",
                        "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n"
                    ], void 0 !== t.maxMessageSize && r.push("a=max-message-size:" + t.maxMessageSize + "\r\n"), r.join("");
                }, p.generateSessionId = function() {
                    return Math.random().toString().substr(2, 21);
                }, p.writeSessionBoilerplate = function(e, t, r) {
                    var n = void 0 !== t ? t : 2;
                    return "v=0\r\no=" + (r || "thisisadapterortc") + " " + (e || p.generateSessionId()) + " " + n + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n";
                }, p.writeMediaSection = function(e, t, r, n) {
                    var i = p.writeRtpDescription(e.kind, t);
                    if (i += p.writeIceParameters(e.iceGatherer.getLocalParameters()), i += p.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : "active"), i += "a=mid:" + e.mid + "\r\n", e.direction ? i += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? i += "a=sendrecv\r\n" : e.rtpSender ? i += "a=sendonly\r\n" : e.rtpReceiver ? i += "a=recvonly\r\n" : i += "a=inactive\r\n", e.rtpSender) {
                        var a = "msid:" + n.id + " " + e.rtpSender.track.id + "\r\n";
                        i += "a=" + a, i += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + a, e.sendEncodingParameters[0].rtx && (i += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + a, i += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n");
                    }
                    return i += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + p.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (i += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + p.localCName + "\r\n"), i;
                }, p.getDirection = function(e, t) {
                    for(var r = p.splitLines(e), n = 0; n < r.length; n++)switch(r[n]){
                        case "a=sendrecv":
                        case "a=sendonly":
                        case "a=recvonly":
                        case "a=inactive":
                            return r[n].substr(2);
                    }
                    return t ? p.getDirection(t) : "sendrecv";
                }, p.getKind = function(e) {
                    return p.splitLines(e)[0].split(" ")[0].substr(2);
                }, p.isRejected = function(e) {
                    return "0" === e.split(" ", 2)[1];
                }, p.parseMLine = function(e) {
                    var t = p.splitLines(e)[0].substr(2).split(" ");
                    return {
                        kind: t[0],
                        port: parseInt(t[1], 10),
                        protocol: t[2],
                        fmt: t.slice(3).join(" ")
                    };
                }, p.parseOLine = function(e) {
                    var t = p.matchPrefix(e, "o=")[0].substr(2).split(" ");
                    return {
                        username: t[0],
                        sessionId: t[1],
                        sessionVersion: parseInt(t[2], 10),
                        netType: t[3],
                        addressType: t[4],
                        address: t[5]
                    };
                }, p.isValidSDP = function(e) {
                    if ("string" != typeof e || 0 === e.length) return !1;
                    for(var t = p.splitLines(e), r = 0; r < t.length; r++)if (t[r].length < 2 || "=" !== t[r].charAt(1)) return !1;
                    return !0;
                }, "object" == typeof t && (t.exports = p);
            },
            {}
        ]
    }, {}, [
        1
    ])(1);
});

//# sourceMappingURL=index.470fdb1f.js.map
