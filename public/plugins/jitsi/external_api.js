! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.JitsiMeetExternalAPI = t() : e.JitsiMeetExternalAPI = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function n(i) {
            if (t[i]) return t[i].exports;
            var r = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) n.d(i, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return i
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "/libs/", n(n.s = 6)
    }([function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return s
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "c", (function() {
                return a
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "f", (function() {
                return u
            })), n.d(t, "g", (function() {
                return d
            })), n.d(t, "h", (function() {
                return p
            }));
            var i = n(5);
            const r = n.n(i).a.getLogger(e);

            function s(e) {
                return e.sendRequest({
                    type: "devices",
                    name: "getAvailableDevices"
                }).catch(e => (r.error(e), {}))
            }

            function o(e) {
                return e.sendRequest({
                    type: "devices",
                    name: "getCurrentDevices"
                }).catch(e => (r.error(e), {}))
            }

            function a(e, t) {
                return e.sendRequest({
                    deviceType: t,
                    type: "devices",
                    name: "isDeviceChangeAvailable"
                })
            }

            function c(e) {
                return e.sendRequest({
                    type: "devices",
                    name: "isDeviceListAvailable"
                })
            }

            function l(e) {
                return e.sendRequest({
                    type: "devices",
                    name: "isMultipleAudioInputSupported"
                })
            }

            function u(e, t, n) {
                return h(e, {
                    id: n,
                    kind: "audioinput",
                    label: t
                })
            }

            function d(e, t, n) {
                return h(e, {
                    id: n,
                    kind: "audiooutput",
                    label: t
                })
            }

            function h(e, t) {
                return e.sendRequest({
                    type: "devices",
                    name: "setDevice",
                    device: t
                })
            }

            function p(e, t, n) {
                return h(e, {
                    id: n,
                    kind: "videoinput",
                    label: t
                })
            }
        }).call(this, "modules/API/external/functions.js")
    }, function(e, t, n) {
        "use strict";
        var i, r = "object" == typeof Reflect ? Reflect : null,
            s = r && "function" == typeof r.apply ? r.apply : function(e, t, n) {
                return Function.prototype.apply.call(e, t, n)
            };
        i = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : function(e) {
            return Object.getOwnPropertyNames(e)
        };
        var o = Number.isNaN || function(e) {
            return e != e
        };

        function a() {
            a.init.call(this)
        }
        e.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
        var c = 10;

        function l(e) {
            if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }

        function u(e) {
            return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
        }

        function d(e, t, n, i) {
            var r, s, o, a;
            if (l(n), void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), s = e._events), o = s[t]), void 0 === o) o = s[t] = n, ++e._eventsCount;
            else if ("function" == typeof o ? o = s[t] = i ? [n, o] : [o, n] : i ? o.unshift(n) : o.push(n), (r = u(e)) > 0 && o.length > r && !o.warned) {
                o.warned = !0;
                var c = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = o.length, a = c, console && console.warn && console.warn(a)
            }
            return e
        }

        function h() {
            if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }

        function p(e, t, n) {
            var i = {
                    fired: !1,
                    wrapFn: void 0,
                    target: e,
                    type: t,
                    listener: n
                },
                r = h.bind(i);
            return r.listener = n, i.wrapFn = r, r
        }

        function f(e, t, n) {
            var i = e._events;
            if (void 0 === i) return [];
            var r = i[t];
            return void 0 === r ? [] : "function" == typeof r ? n ? [r.listener || r] : [r] : n ? function(e) {
                for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                return t
            }(r) : m(r, r.length)
        }

        function g(e) {
            var t = this._events;
            if (void 0 !== t) {
                var n = t[e];
                if ("function" == typeof n) return 1;
                if (void 0 !== n) return n.length
            }
            return 0
        }

        function m(e, t) {
            for (var n = new Array(t), i = 0; i < t; ++i) n[i] = e[i];
            return n
        }
        Object.defineProperty(a, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return c
            },
            set: function(e) {
                if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                c = e
            }
        }), a.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
        }, a.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e, this
        }, a.prototype.getMaxListeners = function() {
            return u(this)
        }, a.prototype.emit = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
            var i = "error" === e,
                r = this._events;
            if (void 0 !== r) i = i && void 0 === r.error;
            else if (!i) return !1;
            if (i) {
                var o;
                if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
                var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                throw a.context = o, a
            }
            var c = r[e];
            if (void 0 === c) return !1;
            if ("function" == typeof c) s(c, this, t);
            else {
                var l = c.length,
                    u = m(c, l);
                for (n = 0; n < l; ++n) s(u[n], this, t)
            }
            return !0
        }, a.prototype.addListener = function(e, t) {
            return d(this, e, t, !1)
        }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(e, t) {
            return d(this, e, t, !0)
        }, a.prototype.once = function(e, t) {
            return l(t), this.on(e, p(this, e, t)), this
        }, a.prototype.prependOnceListener = function(e, t) {
            return l(t), this.prependListener(e, p(this, e, t)), this
        }, a.prototype.removeListener = function(e, t) {
            var n, i, r, s, o;
            if (l(t), void 0 === (i = this._events)) return this;
            if (void 0 === (n = i[e])) return this;
            if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" != typeof n) {
                for (r = -1, s = n.length - 1; s >= 0; s--)
                    if (n[s] === t || n[s].listener === t) {
                        o = n[s].listener, r = s;
                        break
                    }
                if (r < 0) return this;
                0 === r ? n.shift() : function(e, t) {
                    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                    e.pop()
                }(n, r), 1 === n.length && (i[e] = n[0]), void 0 !== i.removeListener && this.emit("removeListener", e, o || t)
            }
            return this
        }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(e) {
            var t, n, i;
            if (void 0 === (n = this._events)) return this;
            if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
            if (0 === arguments.length) {
                var r, s = Object.keys(n);
                for (i = 0; i < s.length; ++i) "removeListener" !== (r = s[i]) && this.removeAllListeners(r);
                return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
            }
            if ("function" == typeof(t = n[e])) this.removeListener(e, t);
            else if (void 0 !== t)
                for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
            return this
        }, a.prototype.listeners = function(e) {
            return f(this, e, !0)
        }, a.prototype.rawListeners = function(e) {
            return f(this, e, !1)
        }, a.listenerCount = function(e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : g.call(e, t)
        }, a.prototype.listenerCount = g, a.prototype.eventNames = function() {
            return this._eventsCount > 0 ? i(this._events) : []
        }
    }, function(e, t) {
        var n = {
            trace: 0,
            debug: 1,
            info: 2,
            log: 3,
            warn: 4,
            error: 5
        };
        a.consoleTransport = console;
        var i = [a.consoleTransport];
        a.addGlobalTransport = function(e) {
            -1 === i.indexOf(e) && i.push(e)
        }, a.removeGlobalTransport = function(e) {
            var t = i.indexOf(e); - 1 !== t && i.splice(t, 1)
        };
        var r = {};

        function s() {
            var e = {
                    methodName: "",
                    fileLocation: "",
                    line: null,
                    column: null
                },
                t = new Error,
                n = t.stack ? t.stack.split("\n") : [];
            if (!n || n.length < 3) return e;
            var i = null;
            return n[3] && (i = n[3].match(/\s*at\s*(.+?)\s*\((\S*)\s*:(\d*)\s*:(\d*)\)/)), !i || i.length <= 4 ? (0 === n[2].indexOf("log@") ? e.methodName = n[3].substr(0, n[3].indexOf("@")) : e.methodName = n[2].substr(0, n[2].indexOf("@")), e) : (e.methodName = i[1], e.fileLocation = i[2], e.line = i[3], e.column = i[4], e)
        }

        function o() {
            var e = arguments[0],
                t = arguments[1],
                o = Array.prototype.slice.call(arguments, 2);
            if (!(n[t] < e.level))
                for (var a = !(e.options.disableCallerInfo || r.disableCallerInfo) && s(), c = i.concat(e.transports), l = 0; l < c.length; l++) {
                    var u = c[l],
                        d = u[t];
                    if (d && "function" == typeof d) {
                        var h = [];
                        h.push((new Date).toISOString()), e.id && h.push("[" + e.id + "]"), a && a.methodName.length > 1 && h.push("<" + a.methodName + ">: ");
                        var p = h.concat(o);
                        d.bind(u).apply(u, p)
                    }
                }
        }

        function a(e, t, i, r) {
            this.id = t, this.options = r || {}, this.transports = i, this.transports || (this.transports = []), this.level = n[e];
            for (var s = Object.keys(n), a = 0; a < s.length; a++) this[s[a]] = o.bind(null, this, s[a])
        }
        a.setGlobalOptions = function(e) {
            r = e || {}
        }, a.prototype.setLevel = function(e) {
            this.level = n[e]
        }, e.exports = a, a.levels = {
            TRACE: "trace",
            DEBUG: "debug",
            INFO: "info",
            LOG: "log",
            WARN: "warn",
            ERROR: "error"
        }
    }, function(e, t) {
        function n() {
            return new DOMException("The request is not allowed", "NotAllowedError")
        }
        /*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
        e.exports = async function(e) {
            try {
                await async function(e) {
                    if (!navigator.clipboard) throw n();
                    return navigator.clipboard.writeText(e)
                }(e)
            } catch (t) {
                try {
                    await async function(e) {
                        const t = document.createElement("span");
                        t.textContent = e, t.style.whiteSpace = "pre", t.style.webkitUserSelect = "auto", t.style.userSelect = "all", document.body.appendChild(t);
                        const i = window.getSelection(),
                            r = window.document.createRange();
                        i.removeAllRanges(), r.selectNode(t), i.addRange(r);
                        let s = !1;
                        try {
                            s = window.document.execCommand("copy")
                        } finally {
                            i.removeAllRanges(), window.document.body.removeChild(t)
                        }
                        if (!s) throw n()
                    }(e)
                } catch (e) {
                    throw e || t || n()
                }
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            var t, n = e.scope,
                i = e.window,
                r = e.windowForEventListening || window,
                s = e.allowedOrigin,
                o = {},
                a = [],
                c = {},
                l = !1,
                u = function(e) {
                    var t;
                    try {
                        t = JSON.parse(e.data)
                    } catch (e) {
                        return
                    }
                    if ((!s || e.origin === s) && t && t.postis && t.scope === n) {
                        var i = o[t.method];
                        if (i)
                            for (var r = 0; r < i.length; r++) i[r].call(null, t.params);
                        else c[t.method] = c[t.method] || [], c[t.method].push(t.params)
                    }
                };
            r.addEventListener("message", u, !1);
            var d = {
                    listen: function(e, t) {
                        o[e] = o[e] || [], o[e].push(t);
                        var n = c[e];
                        if (n)
                            for (var i = o[e], r = 0; r < i.length; r++)
                                for (var s = 0; s < n.length; s++) i[r].call(null, n[s]);
                        delete c[e]
                    },
                    send: function(e) {
                        var t = e.method;
                        (l || "__ready__" === e.method) && i && "function" == typeof i.postMessage ? i.postMessage(JSON.stringify({
                            postis: !0,
                            scope: n,
                            method: t,
                            params: e.params
                        }), "*") : a.push(e)
                    },
                    ready: function(e) {
                        l ? e() : setTimeout((function() {
                            d.ready(e)
                        }), 50)
                    },
                    destroy: function(e) {
                        clearInterval(t), l = !1, r && "function" == typeof r.removeEventListener && r.removeEventListener("message", u), e && e()
                    }
                },
                h = +new Date + Math.random() + "";
            return t = setInterval((function() {
                d.send({
                    method: "__ready__",
                    params: h
                })
            }), 50), d.listen("__ready__", (function(e) {
                if (e === h) {
                    clearInterval(t), l = !0;
                    for (var n = 0; n < a.length; n++) d.send(a[n]);
                    a = []
                } else d.send({
                    method: "__ready__",
                    params: e
                })
            })), d
        }
    }, function(e, t, n) {
        var i = n(2),
            r = n(7),
            s = {},
            o = [],
            a = i.levels.TRACE;
        e.exports = {
            addGlobalTransport: function(e) {
                i.addGlobalTransport(e)
            },
            removeGlobalTransport: function(e) {
                i.removeGlobalTransport(e)
            },
            setGlobalOptions: function(e) {
                i.setGlobalOptions(e)
            },
            getLogger: function(e, t, n) {
                var r = new i(a, e, t, n);
                return e ? (s[e] = s[e] || [], s[e].push(r)) : o.push(r), r
            },
            setLogLevelById: function(e, t) {
                for (var n = t ? s[t] || [] : o, i = 0; i < n.length; i++) n[i].setLevel(e)
            },
            setLogLevel: function(e) {
                a = e;
                for (var t = 0; t < o.length; t++) o[t].setLevel(e);
                for (var n in s) {
                    var i = s[n] || [];
                    for (t = 0; t < i.length; t++) i[t].setLevel(e)
                }
            },
            levels: i.levels,
            LogCollector: r
        }
    }, function(e, t, n) {
        e.exports = n(8).default
    }, function(e, t, n) {
        var i = n(2);

        function r(e, t) {
            this.logStorage = e, this.stringifyObjects = !(!t || !t.stringifyObjects) && t.stringifyObjects, this.storeInterval = t && t.storeInterval ? t.storeInterval : 3e4, this.maxEntryLength = t && t.maxEntryLength ? t.maxEntryLength : 1e4, Object.keys(i.levels).forEach(function(e) {
                this[i.levels[e]] = function() {
                    this._log.apply(this, arguments)
                }.bind(this, e)
            }.bind(this)), this.storeLogsIntervalID = null, this.queue = [], this.totalLen = 0, this.outputCache = []
        }
        r.prototype.stringify = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[object with circular refs?]"
            }
        }, r.prototype.formatLogMessage = function(e) {
            for (var t = "", n = 1, r = arguments.length; n < r; n++) {
                var s = arguments[n];
                !this.stringifyObjects && e !== i.levels.ERROR || "object" != typeof s || (s = this.stringify(s)), t += s, n !== r - 1 && (t += " ")
            }
            return t.length ? t : null
        }, r.prototype._log = function() {
            var e = arguments[1],
                t = this.formatLogMessage.apply(this, arguments);
            if (t) {
                var n = this.queue[this.queue.length - 1],
                    i = n && n.text;
                i === t ? n.count += 1 : (this.queue.push({
                    text: t,
                    timestamp: e,
                    count: 1
                }), this.totalLen += t.length)
            }
            this.totalLen >= this.maxEntryLength && this._flush(!0, !0)
        }, r.prototype.start = function() {
            this._reschedulePublishInterval()
        }, r.prototype._reschedulePublishInterval = function() {
            this.storeLogsIntervalID && (window.clearTimeout(this.storeLogsIntervalID), this.storeLogsIntervalID = null), this.storeLogsIntervalID = window.setTimeout(this._flush.bind(this, !1, !0), this.storeInterval)
        }, r.prototype.flush = function() {
            this._flush(!1, !0)
        }, r.prototype._flush = function(e, t) {
            this.totalLen > 0 && (this.logStorage.isReady() || e) && (this.logStorage.isReady() ? (this.outputCache.length && (this.outputCache.forEach(function(e) {
                this.logStorage.storeLogs(e)
            }.bind(this)), this.outputCache = []), this.logStorage.storeLogs(this.queue)) : this.outputCache.push(this.queue), this.queue = [], this.totalLen = 0), t && this._reschedulePublishInterval()
        }, r.prototype.stop = function() {
            this._flush(!1, !1)
        }, e.exports = r
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", (function() {
            return N
        }));
        var i = n(1),
            r = n.n(i);
        class s extends r.a {
            constructor(...e) {
                var t, n, i;
                super(...e), i = {}, (n = "_storage") in (t = this) ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            }
            clear() {
                this._storage = {}
            }
            get length() {
                return Object.keys(this._storage).length
            }
            getItem(e) {
                return this._storage[e]
            }
            setItem(e, t) {
                this._storage[e] = t
            }
            removeItem(e) {
                delete this._storage[e]
            }
            key(e) {
                const t = Object.keys(this._storage);
                if (!(t.length <= e)) return t[e]
            }
            serialize() {
                return JSON.stringify(this._storage)
            }
        }
        class o extends r.a {
            constructor() {
                super();
                try {
                    this._storage = window.localStorage, this._localStorageDisabled = !1
                } catch (e) {}
                this._storage || (console.warn("Local storage is disabled."), this._storage = new s, this._localStorageDisabled = !0)
            }
            isLocalStorageDisabled() {
                return this._localStorageDisabled
            }
            clear() {
                this._storage.clear(), this.emit("changed")
            }
            get length() {
                return this._storage.length
            }
            getItem(e) {
                return this._storage.getItem(e)
            }
            setItem(e, t, n = !1) {
                this._storage.setItem(e, t), n || this.emit("changed")
            }
            removeItem(e) {
                this._storage.removeItem(e), this.emit("changed")
            }
            key(e) {
                return this._storage.key(e)
            }
            serialize() {
                if (this.isLocalStorageDisabled()) return this._storage.serialize();
                const e = this._storage.length,
                    t = {};
                for (let n = 0; n < e; n++) {
                    const e = this._storage.key(n);
                    t[e] = this._storage.getItem(e)
                }
                return JSON.stringify(t)
            }
        }
        const a = new o;
        n(3);

        function c(e, t = !1, n = "hash") {
            const i = "search" === n ? e.search : e.hash,
                r = {},
                s = i && i.substr(1).split("&") || [];
            if ("hash" === n && 1 === s.length) {
                const e = s[0];
                if (e.startsWith("/") && 1 === e.split("&").length) return r
            }
            return s.forEach(e => {
                const n = e.split("="),
                    i = n[0];
                if (!i) return;
                let s;
                try {
                    if (s = n[1], !t) {
                        const e = decodeURIComponent(s).replace(/\\&/, "&");
                        s = "undefined" === e ? void 0 : JSON.parse(e)
                    }
                } catch (e) {
                    return void
                    function(e, t = "") {
                        console.error(t, e), window.onerror && window.onerror(t, null, null, null, e)
                    }(e, "Failed to parse URL parameter value: " + String(s))
                }
                r[i] = s
            }), r
        }

        function l(e) {
            const t = new RegExp("^([a-z][a-z0-9\\.\\+-]*:)+", "gi"),
                n = t.exec(e);
            if (n) {
                let i = n[n.length - 1].toLowerCase();
                "http:" !== i && "https:" !== i && (i = "https:"), (e = e.substring(t.lastIndex)).startsWith("//") && (e = i + e)
            }
            return e
        }

        function u(e = {}) {
            const t = [];
            for (const n in e) try {
                t.push(`${n}=${encodeURIComponent(JSON.stringify(e[n]))}`)
            } catch (e) {
                console.warn(`Error encoding ${n}: ${e}`)
            }
            return t
        }

        function d(e) {
            const t = {
                toString: h
            };
            let n, i, r;
            if (e = e.replace(/\s/g, ""), n = new RegExp("^([a-z][a-z0-9\\.\\+-]*:)", "gi"), i = n.exec(e), i && (t.protocol = i[1].toLowerCase(), e = e.substring(n.lastIndex)), n = new RegExp("^(//[^/?#]+)", "gi"), i = n.exec(e), i) {
                let r = i[1].substring(2);
                e = e.substring(n.lastIndex);
                const s = r.indexOf("@"); - 1 !== s && (r = r.substring(s + 1)), t.host = r;
                const o = r.lastIndexOf(":"); - 1 !== o && (t.port = r.substring(o + 1), r = r.substring(0, o)), t.hostname = r
            }
            if (n = new RegExp("^([^?#]*)", "gi"), i = n.exec(e), i && (r = i[1], e = e.substring(n.lastIndex)), r ? r.startsWith("/") || (r = "/" + r) : r = "/", t.pathname = r, e.startsWith("?")) {
                let n = e.indexOf("#", 1); - 1 === n && (n = e.length), t.search = e.substring(0, n), e = e.substring(n)
            } else t.search = "";
            return t.hash = e.startsWith("#") ? e : "", t
        }

        function h(e) {
            const {
                hash: t,
                host: n,
                pathname: i,
                protocol: r,
                search: s
            } = e || this;
            let o = "";
            return r && (o += r), n && (o += "//" + n), o += i || "/", s && (o += s), t && (o += t), o
        }

        function p(e) {
            let t;
            t = e.serverURL && e.room ? new URL(e.room, e.serverURL).toString() : e.room ? e.room : e.url || "";
            const n = d(l(t));
            if (!n.protocol) {
                let t = e.protocol || e.scheme;
                t && (t.endsWith(":") || (t += ":"), n.protocol = t)
            }
            let {
                pathname: i
            } = n;
            if (!n.host) {
                const t = e.domain || e.host || e.hostname;
                if (t) {
                    const {
                        host: e,
                        hostname: r,
                        pathname: s,
                        port: o
                    } = d(l("org.jitsi.meet://" + t));
                    e && (n.host = e, n.hostname = r, n.port = o), "/" === i && "/" !== s && (i = s)
                }
            }
            const r = e.roomName || e.room;
            !r || !n.pathname.endsWith("/") && n.pathname.endsWith("/" + r) || (i.endsWith("/") || (i += "/"), i += r), n.pathname = i;
            const {
                jwt: s
            } = e;
            if (s) {
                let {
                    search: e
                } = n; - 1 === e.indexOf("?jwt=") && -1 === e.indexOf("&jwt=") && (e.startsWith("?") || (e = "?" + e), 1 === e.length || (e += "&"), e += "jwt=" + s, n.search = e)
            }
            let {
                hash: o
            } = n;
            for (const t of ["config", "interfaceConfig", "devices", "userInfo", "appData"]) {
                const n = u(e[t + "Overwrite"] || e[t] || e[t + "Override"]);
                if (n.length) {
                    let e = `${t}.${n.join(`&${t}.`)}`;
                    o.length ? e = "&" + e : o = "#", o += e
                }
            }
            return n.hash = o, n.toString() || void 0
        }
        var f = n(4),
            g = n.n(f);

        function m(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        const v = {
            window: window.opener || window.parent
        };
        class y {
            constructor({
                postisOptions: e
            } = {}) {
                this.postis = g()(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), i.forEach((function(t) {
                            m(e, t, n[t])
                        }))
                    }
                    return e
                }({}, v, e)), this._receiveCallback = () => {}, this.postis.listen("message", e => this._receiveCallback(e))
            }
            dispose() {
                this.postis.destroy()
            }
            send(e) {
                this.postis.send({
                    method: "message",
                    params: e
                })
            }
            setReceiveCallback(e) {
                this._receiveCallback = e
            }
        }
        class _ {
            constructor({
                backend: e
            } = {}) {
                this._listeners = new Map, this._requestID = 0, this._responseHandlers = new Map, this._unprocessedMessages = new Set, this.addListener = this.on, e && this.setBackend(e)
            }
            _disposeBackend() {
                this._backend && (this._backend.dispose(), this._backend = null)
            }
            _onMessageReceived(e) {
                if ("response" === e.type) {
                    const t = this._responseHandlers.get(e.id);
                    t && (t(e), this._responseHandlers.delete(e.id))
                } else "request" === e.type ? this.emit("request", e.data, (t, n) => {
                    this._backend.send({
                        type: "response",
                        error: n,
                        id: e.id,
                        result: t
                    })
                }) : this.emit("event", e.data)
            }
            dispose() {
                this._responseHandlers.clear(), this._unprocessedMessages.clear(), this.removeAllListeners(), this._disposeBackend()
            }
            emit(e, ...t) {
                const n = this._listeners.get(e);
                let i = !1;
                return n && n.size && n.forEach(e => {
                    i = e(...t) || i
                }), i || this._unprocessedMessages.add(t), i
            }
            on(e, t) {
                let n = this._listeners.get(e);
                return n || (n = new Set, this._listeners.set(e, n)), n.add(t), this._unprocessedMessages.forEach(e => {
                    t(...e) && this._unprocessedMessages.delete(e)
                }), this
            }
            removeAllListeners(e) {
                return e ? this._listeners.delete(e) : this._listeners.clear(), this
            }
            removeListener(e, t) {
                const n = this._listeners.get(e);
                return n && n.delete(t), this
            }
            sendEvent(e = {}) {
                this._backend && this._backend.send({
                    type: "event",
                    data: e
                })
            }
            sendRequest(e) {
                if (!this._backend) return Promise.reject(new Error("No transport backend defined!"));
                this._requestID++;
                const t = this._requestID;
                return new Promise((n, i) => {
                    this._responseHandlers.set(t, ({
                        error: e,
                        result: t
                    }) => {
                        void 0 !== t ? n(t) : i(void 0 !== e ? e : new Error("Unexpected response format!"))
                    }), this._backend.send({
                        type: "request",
                        data: e,
                        id: t
                    })
                })
            }
            setBackend(e) {
                this._disposeBackend(), this._backend = e, this._backend.setReceiveCallback(this._onMessageReceived.bind(this))
            }
        }
        const b = c(window.location).jitsi_meet_external_api_id,
            w = {};
        let L;
        "number" == typeof b && (w.scope = "jitsi_meet_external_api_" + b), (window.JitsiMeetJS || (window.JitsiMeetJS = {}), window.JitsiMeetJS.app || (window.JitsiMeetJS.app = {}), window.JitsiMeetJS.app).setExternalTransportBackend = e => L.setBackend(e);
        var O = n(0);

        function x(e, t) {
            if (null == e) return {};
            var n, i, r = function(e, t) {
                if (null == e) return {};
                var n, i, r = {},
                    s = Object.keys(e);
                for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
            }
            return r
        }

        function j(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        const C = ["css/all.css", "libs/alwaysontop.min.js"],
            E = {
                avatarUrl: "avatar-url",
                cancelPrivateChat: "cancel-private-chat",
                displayName: "display-name",
                e2eeKey: "e2ee-key",
                email: "email",
                toggleLobby: "toggle-lobby",
                hangup: "video-hangup",
                intiatePrivateChat: "initiate-private-chat",
                kickParticipant: "kick-participant",
                muteEveryone: "mute-everyone",
                overwriteConfig: "overwrite-config",
                password: "password",
                pinParticipant: "pin-participant",
                resizeLargeVideo: "resize-large-video",
                sendEndpointTextMessage: "send-endpoint-text-message",
                sendTones: "send-tones",
                setLargeVideoParticipant: "set-large-video-participant",
                setTileView: "set-tile-view",
                setVideoQuality: "set-video-quality",
                startRecording: "start-recording",
                stopRecording: "stop-recording",
                subject: "subject",
                submitFeedback: "submit-feedback",
                toggleAudio: "toggle-audio",
                toggleChat: "toggle-chat",
                toggleFilmStrip: "toggle-film-strip",
                toggleRaiseHand: "toggle-raise-hand",
                toggleShareScreen: "toggle-share-screen",
                toggleTileView: "toggle-tile-view",
                toggleVideo: "toggle-video"
            },
            S = {
                "avatar-changed": "avatarChanged",
                "audio-availability-changed": "audioAvailabilityChanged",
                "audio-mute-status-changed": "audioMuteStatusChanged",
                "camera-error": "cameraError",
                "chat-updated": "chatUpdated",
                "content-sharing-participants-changed": "contentSharingParticipantsChanged",
                "device-list-changed": "deviceListChanged",
                "display-name-change": "displayNameChange",
                "email-change": "emailChange",
                "endpoint-text-message-received": "endpointTextMessageReceived",
                "feedback-submitted": "feedbackSubmitted",
                "feedback-prompt-displayed": "feedbackPromptDisplayed",
                "filmstrip-display-changed": "filmstripDisplayChanged",
                "incoming-message": "incomingMessage",
                log: "log",
                "mic-error": "micError",
                "outgoing-message": "outgoingMessage",
                "participant-joined": "participantJoined",
                "participant-kicked-out": "participantKickedOut",
                "participant-left": "participantLeft",
                "participant-role-changed": "participantRoleChanged",
                "password-required": "passwordRequired",
                "proxy-connection-event": "proxyConnectionEvent",
                "raise-hand-updated": "raiseHandUpdated",
                "recording-status-changed": "recordingStatusChanged",
                "video-ready-to-close": "readyToClose",
                "video-conference-joined": "videoConferenceJoined",
                "video-conference-left": "videoConferenceLeft",
                "video-availability-changed": "videoAvailabilityChanged",
                "video-mute-status-changed": "videoMuteStatusChanged",
                "video-quality-changed": "videoQualityChanged",
                "screen-sharing-status-changed": "screenSharingStatusChanged",
                "dominant-speaker-changed": "dominantSpeakerChanged",
                "subject-change": "subjectChange",
                "suspend-detected": "suspendDetected",
                "tile-view-changed": "tileViewChanged"
            };
        let I = 0;

        function k(e, t) {
            e._numberOfParticipants += t
        }

        function R(e, t = {}) {
            return p(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), i.forEach((function(t) {
                        j(e, t, n[t])
                    }))
                }
                return e
            }({}, t, {
                url: `https://${e}/#jitsi_meet_external_api_id=${I}`
            }))
        }

        function P(e) {
            let t;
            return "string" == typeof e && null !== String(e).match(/([0-9]*\.?[0-9]+)(em|pt|px|%)$/) ? t = e : "number" == typeof e && (t = e + "px"), t
        }
        class N extends r.a {
            constructor(e, ...t) {
                super();
                const {
                    roomName: n = "",
                    width: i = "100%",
                    height: r = "100%",
                    parentNode: s = document.body,
                    configOverwrite: o = {},
                    interfaceConfigOverwrite: c = {},
                    jwt: l,
                    onload: u,
                    invitees: d,
                    devices: h,
                    userInfo: p,
                    e2eeKey: f
                } = function(e) {
                    if (!e.length) return {};
                    switch (typeof e[0]) {
                        case "string":
                        case void 0:
                            {
                                const [t, n, i, r, s, o, a, c] = e;
                                return {
                                    roomName: t,
                                    width: n,
                                    height: i,
                                    parentNode: r,
                                    configOverwrite: s,
                                    interfaceConfigOverwrite: o,
                                    jwt: a,
                                    onload: c
                                }
                            }
                        case "object":
                            return e[0];
                        default:
                            throw new Error("Can't parse the arguments!")
                    }
                }(t), g = a.getItem("jitsiLocalStorage");
                this._parentNode = s, this._url = R(e, {
                    configOverwrite: o,
                    interfaceConfigOverwrite: c,
                    jwt: l,
                    roomName: n,
                    devices: h,
                    userInfo: p,
                    appData: {
                        localStorageContent: g
                    }
                }), this._createIFrame(r, i, u), this._transport = new _({
                    backend: new y({
                        postisOptions: {
                            allowedOrigin: new URL(this._url).origin,
                            scope: "jitsi_meet_external_api_" + I,
                            window: this._frame.contentWindow
                        }
                    })
                }), Array.isArray(d) && d.length > 0 && this.invite(d), this._tmpE2EEKey = f, this._isLargeVideoVisible = !0, this._numberOfParticipants = 0, this._participants = {}, this._myUserID = void 0, this._onStageParticipant = void 0, this._setupListeners(), I++
            }
            _createIFrame(e, t, n) {
                const i = "jitsiConferenceFrame" + I;
                this._frame = document.createElement("iframe"), this._frame.allow = "camera; microphone; display-capture; autoplay; clipboard-write", this._frame.src = this._url, this._frame.name = i, this._frame.id = i, this._setSize(e, t), this._frame.setAttribute("allowFullScreen", "true"), this._frame.style.border = 0, n && (this._frame.onload = n), this._frame = this._parentNode.appendChild(this._frame)
            }
            _getAlwaysOnTopResources() {
                const e = this._frame.contentWindow,
                    t = e.document;
                let n = "";
                const i = t.querySelector("base");
                if (i && i.href) n = i.href;
                else {
                    const {
                        protocol: t,
                        host: i
                    } = e.location;
                    n = `${t}//${i}`
                }
                return C.map(e => new URL(e, n).href)
            }
            _getFormattedDisplayName(e) {
                const {
                    formattedDisplayName: t
                } = this._participants[e] || {};
                return t
            }
            _getOnStageParticipant() {
                return this._onStageParticipant
            }
            _getLargeVideo() {
                const e = this.getIFrame();
                if (this._isLargeVideoVisible && e && e.contentWindow && e.contentWindow.document) return e.contentWindow.document.getElementById("largeVideo")
            }
            _getParticipantVideo(e) {
                const t = this.getIFrame();
                if (t && t.contentWindow && t.contentWindow.document) return void 0 === e || e === this._myUserID ? t.contentWindow.document.getElementById("localVideo_container") : t.contentWindow.document.querySelector(`#participant_${e} video`)
            }
            _setSize(e, t) {
                const n = P(e),
                    i = P(t);
                void 0 !== n && (this._height = e, this._frame.style.height = n), void 0 !== i && (this._width = t, this._frame.style.width = i)
            }
            _setupListeners() {
                this._transport.on("event", e => {
                    let {
                        name: t
                    } = e, n = x(e, ["name"]);
                    const i = n.id;
                    switch (t) {
                        case "video-conference-joined":
                            void 0 !== this._tmpE2EEKey && (this.executeCommand(E.e2eeKey, this._tmpE2EEKey), this._tmpE2EEKey = void 0), this._myUserID = i, this._participants[i] = {
                                avatarURL: n.avatarURL
                            };
                        case "participant-joined":
                            this._participants[i] = this._participants[i] || {}, this._participants[i].displayName = n.displayName, this._participants[i].formattedDisplayName = n.formattedDisplayName, k(this, 1);
                            break;
                        case "participant-left":
                            k(this, -1), delete this._participants[i];
                            break;
                        case "display-name-change":
                            {
                                const e = this._participants[i];e && (e.displayName = n.displayname, e.formattedDisplayName = n.formattedDisplayName);
                                break
                            }
                        case "email-change":
                            {
                                const e = this._participants[i];e && (e.email = n.email);
                                break
                            }
                        case "avatar-changed":
                            {
                                const e = this._participants[i];e && (e.avatarURL = n.avatarURL);
                                break
                            }
                        case "on-stage-participant-changed":
                            this._onStageParticipant = i, this.emit("largeVideoChanged");
                            break;
                        case "large-video-visibility-changed":
                            this._isLargeVideoVisible = n.isVisible, this.emit("largeVideoChanged");
                            break;
                        case "video-conference-left":
                            k(this, -1), delete this._participants[this._myUserID];
                            break;
                        case "video-quality-changed":
                            this._videoQuality = n.videoQuality;
                            break;
                        case "local-storage-changed":
                            return a.setItem("jitsiLocalStorage", n.localStorageContent), !0
                    }
                    const r = S[t];
                    return !!r && (this.emit(r, n), !0)
                })
            }
            addEventListener(e, t) {
                this.on(e, t)
            }
            addEventListeners(e) {
                for (const t in e) this.addEventListener(t, e[t])
            }
            captureLargeVideoScreenshot() {
                return this._transport.sendRequest({
                    name: "capture-largevideo-screenshot"
                })
            }
            dispose() {
                this.emit("_willDispose"), this._transport.dispose(), this.removeAllListeners(), this._frame && this._frame.parentNode && this._frame.parentNode.removeChild(this._frame)
            }
            executeCommand(e, ...t) {
                e in E ? this._transport.sendEvent({
                    data: t,
                    name: E[e]
                }) : console.error("Not supported command name.")
            }
            executeCommands(e) {
                for (const t in e) this.executeCommand(t, e[t])
            }
            getAvailableDevices() {
                return Object(O.a)(this._transport)
            }
            getContentSharingParticipants() {
                return this._transport.sendRequest({
                    name: "get-content-sharing-participants"
                })
            }
            getCurrentDevices() {
                return Object(O.b)(this._transport)
            }
            getLivestreamUrl() {
                return this._transport.sendRequest({
                    name: "get-livestream-url"
                })
            }
            getParticipantsInfo() {
                const e = Object.keys(this._participants),
                    t = Object.values(this._participants);
                return t.forEach((t, n) => {
                    t.participantId = e[n]
                }), t
            }
            getVideoQuality() {
                return this._videoQuality
            }
            isAudioAvailable() {
                return this._transport.sendRequest({
                    name: "is-audio-available"
                })
            }
            isDeviceChangeAvailable(e) {
                return Object(O.c)(this._transport, e)
            }
            isDeviceListAvailable() {
                return Object(O.d)(this._transport)
            }
            isMultipleAudioInputSupported() {
                return Object(O.e)(this._transport)
            }
            invite(e) {
                return Array.isArray(e) && 0 !== e.length ? this._transport.sendRequest({
                    name: "invite",
                    invitees: e
                }) : Promise.reject(new TypeError("Invalid Argument"))
            }
            isAudioMuted() {
                return this._transport.sendRequest({
                    name: "is-audio-muted"
                })
            }
            isSharingScreen() {
                return this._transport.sendRequest({
                    name: "is-sharing-screen"
                })
            }
            getAvatarURL(e) {
                const {
                    avatarURL: t
                } = this._participants[e] || {};
                return t
            }
            getDisplayName(e) {
                const {
                    displayName: t
                } = this._participants[e] || {};
                return t
            }
            getEmail(e) {
                const {
                    email: t
                } = this._participants[e] || {};
                return t
            }
            getIFrame() {
                return this._frame
            }
            getNumberOfParticipants() {
                return this._numberOfParticipants
            }
            isVideoAvailable() {
                return this._transport.sendRequest({
                    name: "is-video-available"
                })
            }
            isVideoMuted() {
                return this._transport.sendRequest({
                    name: "is-video-muted"
                })
            }
            pinParticipant(e) {
                this.executeCommand("pinParticipant", e)
            }
            removeEventListener(e) {
                this.removeAllListeners(e)
            }
            removeEventListeners(e) {
                e.forEach(e => this.removeEventListener(e))
            }
            resizeLargeVideo(e, t) {
                e <= this._width && t <= this._height && this.executeCommand("resizeLargeVideo", e, t)
            }
            sendProxyConnectionEvent(e) {
                this._transport.sendEvent({
                    data: [e],
                    name: "proxy-connection-event"
                })
            }
            setAudioInputDevice(e, t) {
                return Object(O.f)(this._transport, e, t)
            }
            setAudioOutputDevice(e, t) {
                return Object(O.g)(this._transport, e, t)
            }
            setLargeVideoParticipant(e) {
                this.executeCommand("setLargeVideoParticipant", e)
            }
            setVideoInputDevice(e, t) {
                return Object(O.h)(this._transport, e, t)
            }
            startRecording(e) {
                this.executeCommand("startRecording", e)
            }
            stopRecording(e) {
                this.executeCommand("startRecording", e)
            }
        }
    }])
}));
//# sourceMappingURL=external_api.min.map