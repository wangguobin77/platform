/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e, t) {
    var n, r, i = typeof t,
    o = e.document,
    a = e.location,
    s = e.jQuery,
    u = e.$,
    l = {},
    c = [],
    p = "1.9.1",
    f = c.concat,
    d = c.push,
    h = c.slice,
    g = c.indexOf,
    m = l.toString,
    y = l.hasOwnProperty,
    v = p.trim,
    b = function(e, t) {
        return new b.fn.init(e, t, r)
    },
    x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    w = /\S+/g,
    T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    k = /^[\],:{}\s]*$/,
    E = /(?:^|:|,)(?:\s*\[)+/g,
    S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    j = /^-ms-/,
    D = /-([\da-z])/gi,
    L = function(e, t) {
        return t.toUpperCase()
    },
    H = function(e) { (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready())
    },
    q = function() {
        o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
    };
    b.fn = b.prototype = {
        jquery: p,
        constructor: b,
        init: function(e, n, r) {
            var i, a;
            if (!e) {
                return this
            }
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) {
                    return ! n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                if (i[1]) {
                    if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n: o, !0)), C.test(i[1]) && b.isPlainObject(n)) {
                        for (i in n) {
                            b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i])
                        }
                    }
                    return this
                }
                if (a = o.getElementById(i[2]), a && a.parentNode) {
                    if (a.id !== i[2]) {
                        return r.find(e)
                    }
                    this.length = 1,
                    this[0] = a
                }
                return this.context = o,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return h.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return b.each(this, e, t)
        },
        ready: function(e) {
            return b.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(h.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(b.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: d,
        sort: [].sort,
        splice: [].splice
    },
    b.fn.init.prototype = b.fn,
    b.extend = b.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
        u = 1,
        l = arguments.length,
        c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {},
        u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) {
            if (null != (o = arguments[u])) {
                for (i in o) {
                    e = s[i],
                    r = o[i],
                    s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e: []) : a = e && b.isPlainObject(e) ? e: {},
                    s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r))
                }
            }
        }
        return s
    },
    b.extend({
        noConflict: function(t) {
            return e.$ === b && (e.$ = u),
            t && e.jQuery === b && (e.jQuery = s),
            b
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? b.readyWait++:b.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--b.readyWait: !b.isReady) {
                if (!o.body) {
                    return setTimeout(b.ready)
                }
                b.isReady = !0,
                e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === b.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === b.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return ! isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object": typeof e
        },
        isPlainObject: function(e) {
            if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) {
                return ! 1
            }
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) {
                    return ! 1
                }
            } catch(n) {
                return ! 1
            }
            var r;
            for (r in e) {}
            return r === t || y.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) {
                return ! 1
            }
            return ! 0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) {
                return null
            }
            "boolean" == typeof t && (n = t, t = !1),
            t = t || o;
            var r = C.exec(e),
            i = !n && [];
            return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n: "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) {
                return null
            }
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch(o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && b.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(j, "ms-").replace(D, L)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
            o = e.length,
            a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.apply(e[i], n), r === !1) {
                            break
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.apply(e[i], n), r === !1) {
                            break
                        }
                    }
                }
            } else {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.call(e[i], i, e[i]), r === !1) {
                            break
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.call(e[i], i, e[i]), r === !1) {
                            break
                        }
                    }
                }
            }
            return e
        },
        trim: v && !v.call("\ufeff\u00a0") ?
        function(e) {
            return null == e ? "": v.call(e)
        }: function(e) {
            return null == e ? "": (e + "").replace(T, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (g) {
                    return g.call(t, e, n)
                }
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) {
                    if (n in t && t[n] === e) {
                        return n
                    }
                }
            }
            return - 1
        },
        merge: function(e, n) {
            var r = n.length,
            i = e.length,
            o = 0;
            if ("number" == typeof r) {
                for (; r > o; o++) {
                    e[i++] = n[o]
                }
            } else {
                while (n[o] !== t) {
                    e[i++] = n[o++]
                }
            }
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [],
            o = 0,
            a = e.length;
            for (n = !!n; a > o; o++) {
                r = !!t(e[o], o),
                n !== r && i.push(e[o])
            }
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
            o = e.length,
            a = M(e),
            s = [];
            if (a) {
                for (; o > i; i++) {
                    r = t(e[i], i, n),
                    null != r && (s[s.length] = r)
                }
            } else {
                for (i in e) {
                    r = t(e[i], i, n),
                    null != r && (s[s.length] = r)
                }
            }
            return f.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o),
            b.isFunction(e) ? (r = h.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(h.call(arguments)))
            },
            i.guid = e.guid = e.guid || b.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var u = 0,
            l = e.length,
            c = null == r;
            if ("object" === b.type(r)) {
                o = !0;
                for (u in r) {
                    b.access(e, n, u, r[u], !0, a, s)
                }
            } else {
                if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                    return c.call(b(e), n)
                })), n)) {
                    for (; l > u; u++) {
                        n(e[u], r, s ? i: i.call(e[u], u, n(e[u], r)))
                    }
                }
            }
            return o ? e: c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    b.ready.promise = function(t) {
        if (!n) {
            if (n = b.Deferred(), "complete" === o.readyState) {
                setTimeout(b.ready)
            } else {
                if (o.addEventListener) {
                    o.addEventListener("DOMContentLoaded", H, !1),
                    e.addEventListener("load", H, !1)
                } else {
                    o.attachEvent("onreadystatechange", H),
                    e.attachEvent("onload", H);
                    var r = !1;
                    try {
                        r = null == e.frameElement && o.documentElement
                    } catch(i) {}
                    r && r.doScroll &&
                    function a() {
                        if (!b.isReady) {
                            try {
                                r.doScroll("left")
                            } catch(e) {
                                return setTimeout(a, 50)
                            }
                            q(),
                            b.ready()
                        }
                    } ()
                }
            }
        }
        return n.promise(t)
    },
    b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    function M(e) {
        var t = e.length,
        n = b.type(e);
        return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = b(o);
    var _ = {};
    function F(e) {
        var t = _[e] = {};
        return b.each(e.match(w) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    b.Callbacks = function(e) {
        e = "string" == typeof e ? _[e] || F(e) : b.extend({},
        e);
        var n, r, i, o, a, s, u = [],
        l = !e.once && [],
        c = function(t) {
            for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++) {
                if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
            }
            n = !1,
            u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
        },
        p = {
            add: function() {
                if (u) {
                    var t = u.length; (function i(t) {
                        b.each(t,
                        function(t, n) {
                            var r = b.type(n);
                            "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    })(arguments),
                    n ? o = u.length: r && (s = t, c(r))
                }
                return this
            },
            remove: function() {
                return u && b.each(arguments,
                function(e, t) {
                    var r;
                    while ((r = b.inArray(t, u, r)) > -1) {
                        u.splice(r, 1),
                        n && (o >= r && o--, a >= r && a--)
                    }
                }),
                this
            },
            has: function(e) {
                return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                this
            },
            disable: function() {
                return u = l = r = t,
                this
            },
            disabled: function() {
                return ! u
            },
            lock: function() {
                return l = t,
                r || p.disable(),
                this
            },
            locked: function() {
                return ! l
            },
            fireWith: function(e, t) {
                return t = t || [],
                t = [e, t.slice ? t.slice() : t],
                !u || i && !l || (n ? l.push(t) : c(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! i
            }
        };
        return p
    },
    b.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", b.Callbacks("once memory"), "resolved"], ["reject", "fail", b.Callbacks("once memory"), "rejected"], ["notify", "progress", b.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return b.Deferred(function(n) {
                        b.each(t,
                        function(t, o) {
                            var a = o[0],
                            s = b.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? b.extend(e, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            b.each(t,
            function(e, o) {
                var a = o[2],
                s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0,
            n = h.call(arguments),
            r = n.length,
            i = 1 !== r || e && b.isFunction(e.promise) ? r: 0,
            o = 1 === i ? e: b.Deferred(),
            a = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? h.call(arguments) : r,
                    n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                }
            },
            s,
            u,
            l;
            if (r > 1) {
                for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) {
                    n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i
                }
            }
            return i || o.resolveWith(l, n),
            o.promise()
        }
    }),
    b.support = function() {
        var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) {
            return {}
        }
        s = o.createElement("select"),
        l = s.appendChild(o.createElement("option")),
        a = d.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t = {
            getSetAttribute: "t" !== d.className,
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!a.value,
            optSelected: l.selected,
            enctype: !!o.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === o.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        a.checked = !0,
        t.noCloneChecked = a.cloneNode(!0).checked,
        s.disabled = !0,
        t.optDisabled = !l.disabled;
        try {
            delete d.test
        } catch(h) {
            t.deleteExpando = !1
        }
        a = o.createElement("input"),
        a.setAttribute("value", ""),
        t.input = "" === a.getAttribute("value"),
        a.value = "t",
        a.setAttribute("type", "radio"),
        t.radioValue = "t" === a.value,
        a.setAttribute("checked", "t"),
        a.setAttribute("name", "t"),
        u = o.createDocumentFragment(),
        u.appendChild(a),
        t.appendChecked = a.checked,
        t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked,
        d.attachEvent && (d.attachEvent("onclick",
        function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) {
            d.setAttribute(c = "on" + f, "t"),
            t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1
        }
        return d.style.backgroundClip = "content-box",
        d.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === d.style.backgroundClip,
        b(function() {
            var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            u = o.getElementsByTagName("body")[0];
            u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null)
        }),
        n = s = u = l = r = a = null,
        t
    } ();
    var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    B = /([A-Z])/g;
    function P(e, n, r, i) {
        if (b.acceptData(e)) {
            var o, a, s = b.expando,
            u = "string" == typeof n,
            l = e.nodeType,
            p = l ? b.cache: e,
            f = l ? e[s] : e[s] && s;
            if (f && p[f] && (i || p[f].data) || !u || r !== t) {
                return f || (l ? e[s] = f = c.pop() || b.guid++:f = s),
                p[f] || (p[f] = {},
                l || (p[f].toJSON = b.noop)),
                ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)),
                o = p[f],
                i || (o.data || (o.data = {}), o = o.data),
                r !== t && (o[b.camelCase(n)] = r),
                u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o,
                a
            }
        }
    }
    function R(e, t, n) {
        if (b.acceptData(e)) {
            var r, i, o, a = e.nodeType,
            s = a ? b.cache: e,
            u = a ? e[b.expando] : b.expando;
            if (s[u]) {
                if (t && (o = n ? s[u] : s[u].data)) {
                    b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) {
                        delete o[t[r]]
                    }
                    if (! (n ? $: b.isEmptyObject)(o)) {
                        return
                    }
                } (n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
            }
        }
    }
    b.extend({
        cache: {},
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando],
            !!e && !$(e)
        },
        data: function(e, t, n) {
            return P(e, t, n)
        },
        removeData: function(e, t) {
            return R(e, t)
        },
        _data: function(e, t, n) {
            return P(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return R(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) {
                return ! 1
            }
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return ! t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    b.fn.extend({
        data: function(e, n) {
            var r, i, o = this[0],
            a = 0,
            s = null;
            if (e === t) {
                if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > a; a++) {
                        i = r[a].name,
                        i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]))
                    }
                    b._data(o, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function() {
                b.data(this, e)
            }) : b.access(this,
            function(n) {
                return n === t ? o ? W(o, e, b.data(o, e)) : null: (this.each(function() {
                    b.data(this, e, n)
                }), t)
            },
            null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                b.removeData(this, e)
            })
        }
    });
    function W(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(B, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null: +r + "" === r ? +r: O.test(r) ? b.parseJSON(r) : r
                } catch(o) {}
                b.data(e, n, r)
            } else {
                r = t
            }
        }
        return r
    }
    function $(e) {
        var t;
        for (t in e) {
            if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) {
                return ! 1
            }
        }
        return ! 0
    }
    b.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = b._queueHooks(e, t),
            a = function() {
                b.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--),
            o.cur = i,
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {
                empty: b.Callbacks("once memory").add(function() {
                    b._removeData(e, t + "queue"),
                    b._removeData(e, n)
                })
            })
        }
    }),
    b.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--),
            r > arguments.length ? b.queue(this[0], e) : n === t ? this: this.each(function() {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = b.fx ? b.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
            o = b.Deferred(),
            a = this,
            s = this.length,
            u = function() {--i || o.resolveWith(a, [a])
            };
            "string" != typeof e && (n = e, e = t),
            e = e || "fx";
            while (s--) {
                r = b._data(a[s], e + "queueHooks"),
                r && r.empty && (i++, r.empty.add(u))
            }
            return u(),
            o.promise(n)
        }
    });
    var I, z, X = /[\t\r\n]/g,
    U = /\r/g,
    V = /^(?:input|select|textarea|button|object)$/i,
    Y = /^(?:a|area)$/i,
    J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    G = /^(?:checked|selected)$/i,
    Q = b.support.getSetAttribute,
    K = b.support.input;
    b.fn.extend({
        attr: function(e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = b.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch(n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
            s = this.length,
            u = "string" == typeof e && e;
            if (b.isFunction(e)) {
                return this.each(function(t) {
                    b(this).addClass(e.call(this, t, this.className))
                })
            }
            if (u) {
                for (t = (e || "").match(w) || []; s > a; a++) {
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) {
                            0 > r.indexOf(" " + i + " ") && (r += i + " ")
                        }
                        n.className = b.trim(r)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
            s = this.length,
            u = 0 === arguments.length || "string" == typeof e && e;
            if (b.isFunction(e)) {
                return this.each(function(t) {
                    b(this).removeClass(e.call(this, t, this.className))
                })
            }
            if (u) {
                for (t = (e || "").match(w) || []; s > a; a++) {
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                        o = 0;
                        while (i = t[o++]) {
                            while (r.indexOf(" " + i + " ") >= 0) {
                                r = r.replace(" " + i + " ", " ")
                            }
                        }
                        n.className = e ? b.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
            r = "boolean" == typeof t;
            return b.isFunction(e) ? this.each(function(n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var o, a = 0,
                    s = b(this),
                    u = t,
                    l = e.match(w) || [];
                    while (o = l[a++]) {
                        u = r ? u: !s.hasClass(o),
                        s[u ? "addClass": "removeClass"](o)
                    }
                } else { (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": b._data(this, "__className__") || "")
                }
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
            n = 0,
            r = this.length;
            for (; r > n; n++) {
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) {
                    return ! 0
                }
            }
            return ! 1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            if (arguments.length) {
                return i = b.isFunction(e),
                this.each(function(n) {
                    var o, a = b(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "": "number" == typeof o ? o += "": b.isArray(o) && (o = b.map(o,
                    function(e) {
                        return null == e ? "": e + ""
                    })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                })
            }
            if (o) {
                return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()],
                r && "get" in r && (n = r.get(o, "value")) !== t ? n: (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "": n)
            }
        }
    }),
    b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return ! t || t.specified ? e.value: e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                    i = e.selectedIndex,
                    o = "select-one" === e.type || 0 > i,
                    a = o ? null: [],
                    s = o ? i + 1 : r.length,
                    u = 0 > i ? s: o ? i: 0;
                    for (; s > u; u++) {
                        if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(), o) {
                                return t
                            }
                            a.push(t)
                        }
                    }
                    return a
                },
                set: function(e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function() {
                        this.selected = b.inArray(b(this).val(), n) >= 0
                    }),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) {
                return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z: I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s: (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t: s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s: (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            o = t && t.match(w);
            if (o && 1 === e.nodeType) {
                while (n = o[i++]) {
                    r = b.propFix[n] || n,
                    J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""),
                    e.removeAttribute(Q ? n: r)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) {
                return a = 1 !== s || !b.isXMLDoc(e),
                a && (n = b.propFix[n] || n, o = b.propHooks[n]),
                r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i: e[n] = r: o && "get" in o && null !== (i = o.get(e, n)) ? i: e[n]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }),
    z = {
        get: function(e, n) {
            var r = b.prop(e, n),
            i = "boolean" == typeof r && e.getAttribute(n),
            o = "boolean" == typeof r ? K && Q ? null != i: G.test(n) ? e[b.camelCase("default-" + n)] : !!i: e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    K && Q || (b.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue: r && r.specified ? r.value: t
        },
        set: function(e, n, r) {
            return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r)
        }
    }),
    Q || (I = b.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value: r.specified) ? r.value: t
        },
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
            i.value = n += "",
            "value" === r || n === e.getAttribute(r) ? n: t
        }
    },
    b.attrHooks.contenteditable = {
        get: I.get,
        set: function(e, t, n) {
            I.set(e, "" === t ? !1 : t, n)
        }
    },
    b.each(["width", "height"],
    function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })),
    b.support.hrefNormalized || (b.each(["href", "src", "width", "height"],
    function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t: r
            }
        })
    }), b.each(["href", "src"],
    function(e, t) {
        b.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    })),
    b.support.style || (b.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    b.support.enctype || (b.propFix.enctype = "encoding"),
    b.support.checkOn || b.each(["radio", "checkbox"],
    function() {
        b.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on": e.value
            }
        }
    }),
    b.each(["radio", "checkbox"],
    function() {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function(e, n) {
                return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
            }
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
    et = /^key/,
    tt = /^(?:mouse|contextmenu)|click/,
    nt = /^(?:focusinfocus|focusoutblur)$/,
    rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return ! 0
    }
    function ot() {
        return ! 1
    }
    b.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector),
                r.guid || (r.guid = b.guid++),
                (u = v.events) || (u = v.events = {}),
                (f = v.handle) || (f = v.handle = function(e) {
                    return typeof b === i || e && b.event.triggered === e.type ? t: b.event.dispatch.apply(f.elem, arguments)
                },
                f.elem = e),
                n = (n || "").match(w) || [""],
                l = n.length;
                while (l--) {
                    s = rt.exec(n[l]) || [],
                    g = y = s[1],
                    m = (s[2] || "").split(".").sort(),
                    p = b.event.special[g] || {},
                    g = (a ? p.delegateType: p.bindType) || g,
                    p = b.event.special[g] || {},
                    d = b.extend({
                        type: g,
                        origType: y,
                        data: o,
                        handler: r,
                        guid: r.guid,
                        selector: a,
                        needsContext: a && b.expr.match.needsContext.test(a),
                        namespace: m.join(".")
                    },
                    c),
                    (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))),
                    p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)),
                    a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                    b.event.global[g] = !0
                }
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(w) || [""],
                l = t.length;
                while (l--) {
                    if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = b.event.special[d] || {},
                        d = (r ? p.delegateType: p.bindType) || d,
                        f = c[d] || [],
                        s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        u = o = f.length;
                        while (o--) {
                            a = f[o],
                            !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a))
                        }
                        u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d])
                    } else {
                        for (d in c) {
                            b.event.remove(e, d + t[l], n, r, !0)
                        }
                    }
                }
                b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, a) {
            var s, u, l, c, p, f, d, h = [i || o],
            g = y.call(n, "type") ? n.type: n,
            m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n: new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {},
            a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!a && !p.noBubble && !b.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) {
                        h.push(l),
                        f = l
                    }
                    f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((l = h[d++]) && !n.isPropagationStopped()) {
                    n.type = d > 1 ? c: p.bindType || g,
                    s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"),
                    s && s.apply(l, r),
                    s = u && l[u],
                    s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault()
                }
                if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
                    f = i[u],
                    f && (i[u] = null),
                    b.event.triggered = g;
                    try {
                        i[g]()
                    } catch(v) {}
                    b.event.triggered = t,
                    f && (i[u] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = b.event.fix(e);
            var n, r, i, o, a, s = [],
            u = h.call(arguments),
            l = (b._data(this, "events") || {})[e.type] || [],
            c = b.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = b.event.handlers.call(this, e, l),
                n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem,
                    a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) { (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                    }
                }
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
            u = n.delegateCount,
            l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) {
                for (; l != this; l = l.parentNode || this) {
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; u > a; a++) {
                            i = n[a],
                            r = i.selector + " ",
                            o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length),
                            o[r] && o.push(i)
                        }
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
                }
            }
            return n.length > u && s.push({
                elem: this,
                handlers: n.slice(u)
            }),
            s
        },
        fix: function(e) {
            if (e[b.expando]) {
                return e
            }
            var t, n, r, i = e.type,
            a = e,
            s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks: et.test(i) ? this.keyHooks: {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            e = new b.Event(a),
            t = r.length;
            while (t--) {
                n = r[t],
                e[n] = a[n]
            }
            return e.target || (e.target = a.srcElement || o),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            s.filter ? s.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, a, s = n.button,
                u = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)),
                !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement: u),
                e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }
            },
            focus: {
                trigger: function() {
                    if (this !== o.activeElement && this.focus) {
                        try {
                            return this.focus(),
                            !1
                        } catch(e) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === o.activeElement && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    b.removeEvent = o.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    },
    b.Event = function(e, n) {
        return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.defaultPrevented && e.defaultPrevented() ? it: ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
    },
    b.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it,
            this.stopPropagation()
        }
    },
    b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                i = e.relatedTarget,
                o = e.handleObj;
                return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    b.support.submitBubbles || (b.event.special.submit = {
        setup: function() {
            return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit",
            function(e) {
                var n = e.target,
                r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form: t;
                r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), b._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
        }
    }),
    b.support.changeBubbles || (b.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), b.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                b.event.simulate("change", this, e, !0)
            })), !1) : (b.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
                }), b._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return b.event.remove(this, "._change"),
            !Z.test(this.nodeName)
        }
    }),
    b.support.focusinBubbles || b.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = 0,
        r = function(e) {
            b.event.simulate(t, e.target, b.event.fix(e), !0)
        };
        b.event.special[t] = {
            setup: function() {
                0 === n++&&o.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && o.removeEventListener(e, r, !0)
            }
        }
    }),
    b.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) {
                    this.on(a, n, r, e[a], o)
                }
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) {
                i = ot
            } else {
                if (!i) {
                    return this
                }
            }
            return 1 === o && (s = i, i = function(e) {
                return b().off(e),
                s.apply(this, arguments)
            },
            i.guid = s.guid || (s.guid = b.guid++)),
            this.each(function() {
                b.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) {
                return i = e.handleObj,
                b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
                this
            }
            if ("object" == typeof e) {
                for (o in e) {
                    this.off(o, n, e[o])
                }
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t),
            r === !1 && (r = ot),
            this.each(function() {
                b.event.remove(this, e, r, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                b.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? b.event.trigger(e, n, r, !0) : t
        }
    }),
    function(e, t) {
        var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date,
        w = e.document,
        T = {},
        N = 0,
        C = 0,
        k = it(),
        E = it(),
        S = it(),
        A = typeof t,
        j = 1 << 31,
        D = [],
        L = D.pop,
        H = D.push,
        q = D.slice,
        M = D.indexOf ||
        function(e) {
            var t = 0,
            n = this.length;
            for (; n > t; t++) {
                if (this[t] === e) {
                    return t
                }
            }
            return - 1
        },
        _ = "[\\x20\\t\\r\\n\\f]",
        F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        O = F.replace("w", "w#"),
        B = "([*^$|!~]?=)",
        P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]",
        R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
        W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
        $ = RegExp("^" + _ + "*," + _ + "*"),
        I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"),
        z = RegExp(R),
        X = RegExp("^" + O + "$"),
        U = {
            ID: RegExp("^#(" + F + ")"),
            CLASS: RegExp("^\\.(" + F + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
            TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + P),
            PSEUDO: RegExp("^" + R),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
            needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
        },
        V = /[\x20\t\r\n\f]*[+~]/,
        Y = /^[^{]+\{\s*\[native code/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        G = /^(?:input|select|textarea|button)$/i,
        Q = /^h\d$/i,
        K = /'|\\/g,
        Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        tt = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t: 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
        };
        try {
            q.call(w.documentElement.childNodes, 0)[0].nodeType
        } catch(nt) {
            q = function(e) {
                var t, n = [];
                while (t = this[e++]) {
                    n.push(t)
                }
                return n
            }
        }
        function rt(e) {
            return Y.test(e + "")
        }
        function it() {
            var e, t = [];
            return e = function(n, r) {
                return t.push(n += " ") > i.cacheLength && delete e[t.shift()],
                e[n] = r
            }
        }
        function ot(e) {
            return e[x] = !0,
            e
        }
        function at(e) {
            var t = p.createElement("div");
            try {
                return e(t)
            } catch(n) {
                return ! 1
            } finally {
                t = null
            }
        }
        function st(e, t, n, r) {
            var i, o, a, s, u, l, f, g, m, v;
            if ((t ? t.ownerDocument || t: w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) {
                return n
            }
            if (1 !== (s = t.nodeType) && 9 !== s) {
                return []
            }
            if (!d && !r) {
                if (i = J.exec(e)) {
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) {
                                return n
                            }
                            if (o.id === a) {
                                return n.push(o),
                                n
                            }
                        } else {
                            if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) {
                                return n.push(o),
                                n
                            }
                        }
                    } else {
                        if (i[2]) {
                            return H.apply(n, q.call(t.getElementsByTagName(e), 0)),
                            n
                        }
                        if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) {
                            return H.apply(n, q.call(t.getElementsByClassName(a), 0)),
                            n
                        }
                    }
                }
                if (T.qsa && !h.test(e)) {
                    if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        l = ft(e),
                        (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g),
                        g = "[id='" + g + "'] ",
                        u = l.length;
                        while (u--) {
                            l[u] = g + dt(l[u])
                        }
                        m = V.test(e) && t.parentNode || t,
                        v = l.join(",")
                    }
                    if (v) {
                        try {
                            return H.apply(n, q.call(m.querySelectorAll(v), 0)),
                            n
                        } catch(b) {} finally {
                            f || t.removeAttribute("id")
                        }
                    }
                }
            }
            return wt(e.replace(W, "$1"), t, n, r)
        }
        a = st.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        },
        c = st.setDocument = function(e) {
            var n = e ? e.ownerDocument || e: w;
            return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }), T.attributes = at(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), T.getByClassName = at(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), T.getByName = at(function(e) {
                e.id = x + 0,
                e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>",
                f.insertBefore(e, f.firstChild);
                var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
                return T.getIdNotName = !n.getElementById(x),
                f.removeChild(e),
                t
            }), i.attrHandle = at(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
            }) ? {}: {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            T.getIdNotName ? (i.find.ID = function(e, t) {
                if (typeof t.getElementById !== A && !d) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            i.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (i.find.ID = function(e, n) {
                if (typeof n.getElementById !== A && !d) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t: []
                }
            },
            i.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), i.find.TAG = T.tagNameNoComments ?
            function(e, n) {
                return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
            }: function(e, t) {
                var n, r = [],
                i = 0,
                o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) {
                        1 === n.nodeType && r.push(n)
                    }
                    return r
                }
                return o
            },
            i.find.NAME = T.getByName &&
            function(e, n) {
                return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
            },
            i.find.CLASS = T.getByClassName &&
            function(e, n) {
                return typeof n.getElementsByClassName === A || d ? t: n.getElementsByClassName(e)
            },
            g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                e.querySelectorAll(":checked").length || h.push(":checked")
            }), at(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>",
                e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"),
                e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                h.push(",.*:")
            })), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(e) {
                T.disconnectedMatch = m.call(e, "div"),
                m.call(e, "[s!='']:x"),
                g.push("!=", R)
            }), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }: function(e, t) {
                if (t) {
                    while (t = t.parentNode) {
                        if (t === e) {
                            return ! 0
                        }
                    }
                }
                return ! 1
            },
            v = f.compareDocumentPosition ?
            function(e, t) {
                var r;
                return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }: function(e, t) {
                var r, i = 0,
                o = e.parentNode,
                a = t.parentNode,
                s = [e],
                l = [t];
                if (e === t) {
                    return u = !0,
                    0
                }
                if (!o || !a) {
                    return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0
                }
                if (o === a) {
                    return ut(e, t)
                }
                r = e;
                while (r = r.parentNode) {
                    s.unshift(r)
                }
                r = t;
                while (r = r.parentNode) {
                    l.unshift(r)
                }
                while (s[i] === l[i]) {
                    i++
                }
                return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            },
            u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p
        },
        st.matches = function(e, t) {
            return st(e, null, null, t)
        },
        st.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) {
                try {
                    var n = m.call(e, t);
                    if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
                        return n
                    }
                } catch(r) {}
            }
            return st(t, p, null, [e]).length > 0
        },
        st.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && c(e),
            y(e, t)
        },
        st.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== p && c(e),
            d || (t = t.toLowerCase()),
            (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t: n && n.specified ? n.value: null
        },
        st.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        },
        st.uniqueSort = function(e) {
            var t, n = [],
            r = 1,
            i = 0;
            if (u = !T.detectDuplicates, e.sort(v), u) {
                for (; t = e[r]; r++) {
                    t === e[r - 1] && (i = n.push(r))
                }
                while (i--) {
                    e.splice(n[i], 1)
                }
            }
            return e
        };
        function ut(e, t) {
            var n = t && e,
            r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
            if (r) {
                return r
            }
            if (n) {
                while (n = n.nextSibling) {
                    if (n === t) {
                        return - 1
                    }
                }
            }
            return e ? 1 : -1
        }
        function lt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function ct(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function pt(e) {
            return ot(function(t) {
                return t = +t,
                ot(function(n, r) {
                    var i, o = e([], n.length, t),
                    a = o.length;
                    while (a--) {
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    }
                })
            })
        }
        o = st.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) {
                        return e.textContent
                    }
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        n += o(e)
                    }
                } else {
                    if (3 === i || 4 === i) {
                        return e.nodeValue
                    }
                }
            } else {
                for (; t = e[r]; r++) {
                    n += o(t)
                }
            }
            return n
        },
        i = st.selectors = {
            cacheLength: 50,
            createPseudo: ot,
            match: U,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(et, tt),
                    e[3] = (e[4] || e[5] || "").replace(et, tt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return U.CHILD.test(e[0]) ? null: (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: (e = e.replace(et, tt).toLowerCase(),
                    function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function(e) {
                    var t = k[e + " "];
                    return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e,
                    function(e) {
                        return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = st.attr(r, e);
                        return null == i ? "!=" === t: t ? (i += "", "=" === t ? i === n: "!=" === t ? i !== n: "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice( - n.length) === n: "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, u) {
                        var l, c, p, f, d, h, g = o !== a ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        y = s && t.nodeName.toLowerCase(),
                        v = !u && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) {
                                        if (s ? p.nodeName.toLowerCase() === y: 1 === p.nodeType) {
                                            return ! 1
                                        }
                                    }
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [a ? m.firstChild: m.lastChild], a && v) {
                                c = m[x] || (m[x] = {}),
                                l = c[e] || [],
                                d = l[0] === N && l[1],
                                f = l[0] === N && l[2],
                                p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [N, d, f];
                                        break
                                    }
                                }
                            } else {
                                if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) {
                                    f = l[1]
                                } else {
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                        if ((s ? p.nodeName.toLowerCase() === y: 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return f -= i,
                            f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                    return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
                        var i, o = r(e, t),
                        a = o.length;
                        while (a--) {
                            i = M.call(e, o[a]),
                            e[i] = !(n[i] = o[a])
                        }
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: ot(function(e) {
                    var t = [],
                    n = [],
                    r = s(e.replace(W, "$1"));
                    return r[x] ? ot(function(e, t, n, i) {
                        var o, a = r(e, null, i, []),
                        s = e.length;
                        while (s--) { (o = a[s]) && (e[s] = !(t[s] = o))
                        }
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: ot(function(e) {
                    return function(t) {
                        return st(e, t).length > 0
                    }
                }),
                contains: ot(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    }
                }),
                lang: ot(function(e) {
                    return X.test(e || "") || st.error("unsupported lang: " + e),
                    e = e.replace(et, tt).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) {
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-")
                            }
                        } while (( t = t . parentNode ) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === f
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) {
                            return ! 1
                        }
                    }
                    return ! 0
                },
                parent: function(e) {
                    return ! i.pseudos.empty(e)
                },
                header: function(e) {
                    return Q.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: pt(function() {
                    return [0]
                }),
                last: pt(function(e, t) {
                    return [t - 1]
                }),
                eq: pt(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: pt(function(e, t) {
                    var n = 0;
                    for (; t > n; n += 2) {
                        e.push(n)
                    }
                    return e
                }),
                odd: pt(function(e, t) {
                    var n = 1;
                    for (; t > n; n += 2) {
                        e.push(n)
                    }
                    return e
                }),
                lt: pt(function(e, t, n) {
                    var r = 0 > n ? n + t: n;
                    for (; --r >= 0;) {
                        e.push(r)
                    }
                    return e
                }),
                gt: pt(function(e, t, n) {
                    var r = 0 > n ? n + t: n;
                    for (; t > ++r;) {
                        e.push(r)
                    }
                    return e
                })
            }
        };
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) {
            i.pseudos[n] = lt(n)
        }
        for (n in {
            submit: !0,
            reset: !0
        }) {
            i.pseudos[n] = ct(n)
        }
        function ft(e, t) {
            var n, r, o, a, s, u, l, c = E[e + " "];
            if (c) {
                return t ? 0 : c.slice(0)
            }
            s = e,
            u = [],
            l = i.preFilter;
            while (s) { (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])),
                n = !1,
                (r = I.exec(s)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }), s = s.slice(n.length));
                for (a in i.filter) { ! (r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: a,
                        matches: r
                    }), s = s.slice(n.length))
                }
                if (!n) {
                    break
                }
            }
            return t ? s.length: s ? st.error(e) : E(e, u).slice(0)
        }
        function dt(e) {
            var t = 0,
            n = e.length,
            r = "";
            for (; n > t; t++) {
                r += e[t].value
            }
            return r
        }
        function ht(e, t, n) {
            var i = t.dir,
            o = n && "parentNode" === i,
            a = C++;
            return t.first ?
            function(t, n, r) {
                while (t = t[i]) {
                    if (1 === t.nodeType || o) {
                        return e(t, n, r)
                    }
                }
            }: function(t, n, s) {
                var u, l, c, p = N + " " + a;
                if (s) {
                    while (t = t[i]) {
                        if ((1 === t.nodeType || o) && e(t, n, s)) {
                            return ! 0
                        }
                    }
                } else {
                    while (t = t[i]) {
                        if (1 === t.nodeType || o) {
                            if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
                                if ((u = l[1]) === !0 || u === r) {
                                    return u === !0
                                }
                            } else {
                                if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) {
                                    return ! 0
                                }
                            }
                        }
                    }
                }
            }
        }
        function gt(e) {
            return e.length > 1 ?
            function(t, n, r) {
                var i = e.length;
                while (i--) {
                    if (!e[i](t, n, r)) {
                        return ! 1
                    }
                }
                return ! 0
            }: e[0]
        }
        function mt(e, t, n, r, i) {
            var o, a = [],
            s = 0,
            u = e.length,
            l = null != t;
            for (; u > s; s++) { (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s))
            }
            return a
        }
        function yt(e, t, n, r, i, o) {
            return r && !r[x] && (r = yt(r)),
            i && !i[x] && (i = yt(i, o)),
            ot(function(o, a, s, u) {
                var l, c, p, f = [],
                d = [],
                h = a.length,
                g = o || xt(t || "*", s.nodeType ? [s] : s, []),
                m = !e || !o && t ? g: mt(g, f, e, s, u),
                y = n ? i || (o ? e: h || r) ? [] : a: m;
                if (n && n(m, y, s, u), r) {
                    l = mt(y, d),
                    r(l, [], s, u),
                    c = l.length;
                    while (c--) { (p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
                    }
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [],
                            c = y.length;
                            while (c--) { (p = y[c]) && l.push(m[c] = p)
                            }
                            i(null, y = [], l, u)
                        }
                        c = y.length;
                        while (c--) { (p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
                        }
                    }
                } else {
                    y = mt(y === a ? y.splice(h, y.length) : y),
                    i ? i(null, a, y, u) : H.apply(a, y)
                }
            })
        }
        function vt(e) {
            var t, n, r, o = e.length,
            a = i.relative[e[0].type],
            s = a || i.relative[" "],
            u = a ? 1 : 0,
            c = ht(function(e) {
                return e === t
            },
            s, !0),
            p = ht(function(e) {
                return M.call(t, e) > -1
            },
            s, !0),
            f = [function(e, n, r) {
                return ! a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }];
            for (; o > u; u++) {
                if (n = i.relative[e[u].type]) {
                    f = [ht(gt(f), n)]
                } else {
                    if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
                        for (r = ++u; o > r; r++) {
                            if (i.relative[e[r].type]) {
                                break
                            }
                        }
                        return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
                    }
                    f.push(n)
                }
            }
            return gt(f)
        }
        function bt(e, t) {
            var n = 0,
            o = t.length > 0,
            a = e.length > 0,
            s = function(s, u, c, f, d) {
                var h, g, m, y = [],
                v = 0,
                b = "0",
                x = s && [],
                w = null != d,
                T = l,
                C = s || a && i.find.TAG("*", d && u.parentNode || u),
                k = N += null == T ? 1 : Math.random() || 0.1;
                for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++]) {
                            if (m(h, u, c)) {
                                f.push(h);
                                break
                            }
                        }
                        w && (N = k, r = ++n)
                    }
                    o && ((h = !m && h) && v--, s && x.push(h))
                }
                if (v += b, o && b !== v) {
                    g = 0;
                    while (m = t[g++]) {
                        m(x, y, u, c)
                    }
                    if (s) {
                        if (v > 0) {
                            while (b--) {
                                x[b] || y[b] || (y[b] = L.call(f))
                            }
                        }
                        y = mt(y)
                    }
                    H.apply(f, y),
                    w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
                }
                return w && (N = k, l = T),
                x
            };
            return o ? ot(s) : s
        }
        s = st.compile = function(e, t) {
            var n, r = [],
            i = [],
            o = S[e + " "];
            if (!o) {
                t || (t = ft(e)),
                n = t.length;
                while (n--) {
                    o = vt(t[n]),
                    o[x] ? r.push(o) : i.push(o)
                }
                o = S(e, bt(i, r))
            }
            return o
        };
        function xt(e, t, n) {
            var r = 0,
            i = t.length;
            for (; i > r; r++) {
                st(e, t[r], n)
            }
            return n
        }
        function wt(e, t, n, r) {
            var o, a, u, l, c, p = ft(e);
            if (!r && 1 === p.length) {
                if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
                    if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) {
                        return n
                    }
                    e = e.slice(a.shift().value.length)
                }
                o = U.needsContext.test(e) ? 0 : a.length;
                while (o--) {
                    if (u = a[o], i.relative[l = u.type]) {
                        break
                    }
                    if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
                        if (a.splice(o, 1), e = r.length && dt(a), !e) {
                            return H.apply(n, q.call(r, 0)),
                            n
                        }
                        break
                    }
                }
            }
            return s(e, p)(r, t, d, n, V.test(e)),
            n
        }
        i.pseudos.nth = i.pseudos.eq;
        function Tt() {}
        i.filters = Tt.prototype = i.pseudos,
        i.setFilters = new Tt,
        c(),
        st.attr = b.attr,
        b.find = st,
        b.expr = st.selectors,
        b.expr[":"] = b.expr.pseudos,
        b.unique = st.uniqueSort,
        b.text = st.getText,
        b.isXMLDoc = st.isXML,
        b.contains = st.contains
    } (e);
    var at = /Until$/,
    st = /^(?:parents|prev(?:Until|All))/,
    ut = /^.[^:#\[\.,]*$/,
    lt = b.expr.match.needsContext,
    ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    b.fn.extend({
        find: function(e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) {
                return r = this,
                this.pushStack(b(e).filter(function() {
                    for (t = 0; i > t; t++) {
                        if (b.contains(r[t], this)) {
                            return ! 0
                        }
                    }
                }))
            }
            for (n = [], t = 0; i > t; t++) {
                b.find(e, this[t], n)
            }
            return n = this.pushStack(i > 1 ? b.unique(n) : n),
            n.selector = (this.selector ? this.selector + " ": "") + e,
            n
        },
        has: function(e) {
            var t, n = b(e, this),
            r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) {
                    if (b.contains(this, n[t])) {
                        return ! 0
                    }
                }
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e, !0))
        },
        is: function(e) {
            return !! e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0,
            i = this.length,
            o = [],
            a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
            for (; i > r; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                    if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return this.pushStack(o.length > 1 ? b.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
            r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    b.fn.andSelf = b.fn.addBack;
    function pt(e, t) {
        do {
            e = e[t]
        } while ( e && 1 !== e . nodeType );
        return e
    }
    b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return b.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return b.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return b.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return b.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return b.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return b.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return b.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return b.sibling(e.firstChild)
        },
        contents: function(e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: b.merge([], e.childNodes)
        }
    },
    function(e, t) {
        b.fn[e] = function(n, r) {
            var i = b.map(this, t, n);
            return at.test(e) || (r = n),
            r && "string" == typeof r && (i = b.filter(r, i)),
            i = this.length > 1 && !ct[e] ? b.unique(i) : i,
            this.length > 1 && st.test(e) && (i = i.reverse()),
            this.pushStack(i)
        }
    }),
    b.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = [],
            o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) {
                1 === o.nodeType && i.push(o),
                o = o[n]
            }
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                1 === e.nodeType && e !== t && n.push(e)
            }
            return n
        }
    });
    function ft(e, t, n) {
        if (t = t || 0, b.isFunction(t)) {
            return b.grep(e,
            function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n
            })
        }
        if (t.nodeType) {
            return b.grep(e,
            function(e) {
                return e === t === n
            })
        }
        if ("string" == typeof t) {
            var r = b.grep(e,
            function(e) {
                return 1 === e.nodeType
            });
            if (ut.test(t)) {
                return b.filter(t, r, !n)
            }
            t = b.filter(t, r)
        }
        return b.grep(e,
        function(e) {
            return b.inArray(e, t) >= 0 === n
        })
    }
    function dt(e) {
        var t = ht.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) {
            while (t.length) {
                n.createElement(t.pop())
            }
        }
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    gt = / jQuery\d+="(?:null|\d+)"/g,
    mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
    yt = /^\s+/,
    vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    bt = /<([\w:]+)/,
    xt = /<tbody/i,
    wt = /<|&#?\w+;/,
    Tt = /<(?:script|style|link)/i,
    Nt = /^(?:checkbox|radio)$/i,
    Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
    kt = /^$|\/(?:java|ecma)script/i,
    Et = /^true\/(.*)/,
    St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    At = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    jt = dt(o),
    Dt = jt.appendChild(o.createElement("div"));
    At.optgroup = At.option,
    At.tbody = At.tfoot = At.colgroup = At.caption = At.thead,
    At.th = At.td,
    b.fn.extend({
        text: function(e) {
            return b.access(this,
            function(e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            },
            null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (b.isFunction(e)) {
                return this.each(function(t) {
                    b(this).wrapAll(e.call(this, t))
                })
            }
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) {
                        e = e.firstChild
                    }
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return b.isFunction(e) ? this.each(function(t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = b(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = b.isFunction(e);
            return this.each(function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = 0;
            for (; null != (n = this[r]); r++) { (!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)))
            }
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && b.cleanData(Ot(e, !1));
                while (e.firstChild) {
                    e.removeChild(e.firstChild)
                }
                e.options && b.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e: t,
            this.map(function() {
                return b.clone(this, e, t)
            })
        },
        html: function(e) {
            return b.access(this,
            function(e) {
                var n = this[0] || {},
                r = 0,
                i = this.length;
                if (e === t) {
                    return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t
                }
                if (! ("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) {
                            n = this[r] || {},
                            1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e)
                        }
                        n = 0
                    } catch(o) {}
                }
                n && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = b.isFunction(e);
            return t || "string" == typeof e || (e = b(e).not(this).detach()),
            this.domManip([e], !0,
            function(e) {
                var t = this.nextSibling,
                n = this.parentNode;
                n && (b(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = f.apply([], e);
            var i, o, a, s, u, l, c = 0,
            p = this.length,
            d = this,
            h = p - 1,
            g = e[0],
            m = b.isFunction(g);
            if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) {
                return this.each(function(i) {
                    var o = d.eq(i);
                    m && (e[0] = g.call(this, i, n ? o.html() : t)),
                    o.domManip(e, n, r)
                })
            }
            if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) {
                    o = l,
                    c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))),
                    r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c)
                }
                if (a) {
                    for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) {
                        o = s[c],
                        kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
                            url: o.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")))
                    }
                }
                l = i = null
            }
            return this
        }
    });
    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function Ht(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type,
        e
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function Mt(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) {
            b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
        }
    }
    function _t(e, t) {
        if (1 === t.nodeType && b.hasData(e)) {
            var n, r, i, o = b._data(e),
            a = b._data(t, o),
            s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) {
                    for (r = 0, i = s[n].length; i > r; r++) {
                        b.event.add(t, n, s[n][r])
                    }
                }
            }
            a.data && (a.data = b.extend({},
            a.data))
        }
    }
    function Ft(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
                i = b._data(t);
                for (r in i.events) {
                    b.removeEvent(t, r, i.handle)
                }
                t.removeAttribute(b.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        b.fn[e] = function(e) {
            var n, r = 0,
            i = [],
            o = b(e),
            a = o.length - 1;
            for (; a >= r; r++) {
                n = r === a ? this: this.clone(!0),
                b(o[r])[t](n),
                d.apply(i, n.get())
            }
            return this.pushStack(i)
        }
    });
    function Ot(e, n) {
        var r, o, a = 0,
        s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s) {
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) { ! n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n))
            }
        }
        return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
    }
    function Bt(e) {
        Nt.test(e.type) && (e.defaultChecked = e.checked)
    }
    b.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
            if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) {
                for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) {
                    r[a] && Ft(i, r[a])
                }
            }
            if (t) {
                if (n) {
                    for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) {
                        _t(i, r[a])
                    }
                } else {
                    _t(e, o)
                }
            }
            return r = Ot(o, "script"),
            r.length > 0 && Mt(r, !u && Ot(e, "script")),
            r = s = i = null,
            o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, u, l, c, p = e.length,
            f = dt(t),
            d = [],
            h = 0;
            for (; p > h; h++) {
                if (o = e[h], o || 0 === o) {
                    if ("object" === b.type(o)) {
                        b.merge(d, o.nodeType ? [o] : o)
                    } else {
                        if (wt.test(o)) {
                            s = s || f.appendChild(t.createElement("div")),
                            u = (bt.exec(o) || ["", ""])[1].toLowerCase(),
                            c = At[u] || At._default,
                            s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2],
                            i = c[0];
                            while (i--) {
                                s = s.lastChild
                            }
                            if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
                                o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s: s.firstChild,
                                i = o && o.childNodes.length;
                                while (i--) {
                                    b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
                                }
                            }
                            b.merge(d, s.childNodes),
                            s.textContent = "";
                            while (s.firstChild) {
                                s.removeChild(s.firstChild)
                            }
                            s = f.lastChild
                        } else {
                            d.push(t.createTextNode(o))
                        }
                    }
                }
            }
            s && f.removeChild(s),
            b.support.appendChecked || b.grep(Ot(d, "input"), Bt),
            h = 0;
            while (o = d[h++]) {
                if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
                    i = 0;
                    while (o = s[i++]) {
                        kt.test(o.type || "") && n.push(o)
                    }
                }
            }
            return s = null,
            f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
            u = b.expando,
            l = b.cache,
            p = b.support.deleteExpando,
            f = b.event.special;
            for (; null != (n = e[s]); s++) {
                if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
                    if (a.events) {
                        for (r in a.events) {
                            f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle)
                        }
                    }
                    l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o))
                }
            }
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
    It = /opacity\s*=\s*([^)]*)/,
    zt = /^(top|right|bottom|left)$/,
    Xt = /^(none|table(?!-c[ea]).+)/,
    Ut = /^margin/,
    Vt = RegExp("^(" + x + ")(.*)$", "i"),
    Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
    Jt = RegExp("^([+-])=(" + x + ")", "i"),
    Gt = {
        BODY: "block"
    },
    Qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Kt = {
        letterSpacing: 0,
        fontWeight: 400
    },
    Zt = ["Top", "Right", "Bottom", "Left"],
    en = ["Webkit", "O", "Moz", "ms"];
    function tn(e, t) {
        if (t in e) {
            return t
        }
        var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = en.length;
        while (i--) {
            if (t = en[i] + n, t in e) {
                return t
            }
        }
        return r
    }
    function nn(e, t) {
        return e = t || e,
        "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
    }
    function rn(e, t) {
        var n, r, i, o = [],
        a = 0,
        s = e.length;
        for (; s > a; a++) {
            r = e[a],
            r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n: b.css(r, "display"))))
        }
        for (a = 0; s > a; a++) {
            r = e[a],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "": "none"))
        }
        return e
    }
    b.fn.extend({
        css: function(e, n) {
            return b.access(this,
            function(e, n, r) {
                var i, o, a = {},
                s = 0;
                if (b.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) {
                        a[n[s]] = b.css(e, n[s], !1, o)
                    }
                    return a
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n)
            },
            e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() { (t ? e: nn(this)) ? b(this).show() : b(this).hide()
            })
        }
    }),
    b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = b.camelCase(n),
                l = e.style;
                if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) {
                    return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o: l[n]
                }
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) {
                    try {
                        l[n] = r
                    } catch(c) {}
                }
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = b.camelCase(n);
            return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)),
            s = b.cssHooks[n] || b.cssHooks[u],
            s && "get" in s && (a = s.get(e, !0, r)),
            a === t && (a = Wt(e, n, i)),
            "normal" === a && n in Kt && (a = Kt[n]),
            "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) {
                a[o] = e.style[o],
                e.style[o] = t[o]
            }
            i = n.apply(e, r || []);
            for (o in t) {
                e.style[o] = a[o]
            }
            return i
        }
    }),
    e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    },
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
        u = s ? s.getPropertyValue(n) || s[n] : t,
        l = e.style;
        return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)),
        u
    }) : o.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    },
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
        u = s ? s[n] : t,
        l = e.style;
        return null == u && l && l[n] && (u = l[n]),
        Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em": u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)),
        "" === u ? "auto": u
    });
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function an(e, t, n, r, i) {
        var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;
        for (; 4 > o; o += 2) {
            "margin" === n && (a += b.css(e, n + Zt[o], !0, i)),
            r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)))
        }
        return a
    }
    function sn(e, t, n) {
        var r = !0,
        i = "width" === t ? e.offsetWidth: e.offsetHeight,
        o = Rt(e),
        a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) {
                return i
            }
            r = a && (b.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border": "content"), r, o) + "px"
    }
    function un(e) {
        var t = o,
        n = Gt[e];
        return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n),
        n
    }
    function ln(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body),
        r = b.css(n[0], "display");
        return n.remove(),
        r
    }
    b.each(["height", "width"],
    function(e, n) {
        b.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt,
                function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    b.support.opacity || (b.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            r = e.currentStyle,
            i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }),
    b(function() {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? b.swap(e, {
                    display: "inline-block"
                },
                Wt, [e, "marginRight"]) : t
            }
        }),
        !b.support.pixelPosition && b.fn.position && b.each(["top", "left"],
        function(e, n) {
            b.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px": r) : t
                }
            }
        })
    }),
    b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
    },
    b.expr.filters.visible = function(e) {
        return ! b.expr.filters.hidden(e)
    }),
    b.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                i = {},
                o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) {
                    i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]
                }
                return i
            }
        },
        Ut.test(e) || (b.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
    pn = /\[\]$/,
    fn = /\r?\n/g,
    dn = /^(?:submit|button|image|reset|file)$/i,
    hn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
            }).map(function(e, t) {
                var n = b(this).val();
                return null == n ? null: b.isArray(n) ? b.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }),
    b.param = function(e, n) {
        var r, i = [],
        o = function(e, t) {
            t = b.isFunction(t) ? t() : null == t ? "": t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) {
            b.each(e,
            function() {
                o(this.name, this.value)
            })
        } else {
            for (r in e) {
                gn(r, e[r], n, o)
            }
        }
        return i.join("&").replace(cn, "+")
    };
    function gn(e, t, n, r) {
        var i;
        if (b.isArray(t)) {
            b.each(t,
            function(t, i) {
                n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t: "") + "]", i, n, r)
            })
        } else {
            if (n || "object" !== b.type(t)) {
                r(e, t)
            } else {
                for (i in t) {
                    gn(e + "[" + i + "]", t[i], n, r)
                }
            }
        }
    }
    b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    b.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var mn, yn, vn = b.now(),
    bn = /\?/,
    xn = /#.*$/,
    wn = /([?&])_=[^&]*/,
    Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Cn = /^(?:GET|HEAD)$/,
    kn = /^\/\//,
    En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Sn = b.fn.load,
    An = {},
    jn = {},
    Dn = "*/".concat("*");
    try {
        yn = a.href
    } catch(Ln) {
        yn = o.createElement("a"),
        yn.href = "",
        yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
            o = t.toLowerCase().match(w) || [];
            if (b.isFunction(n)) {
                while (r = o[i++]) {
                    "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
        }
    }
    function qn(e, n, r, i) {
        var o = {},
        a = e === jn;
        function s(u) {
            var l;
            return o[u] = !0,
            b.each(e[u] || [],
            function(e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : t: (n.dataTypes.unshift(c), s(c), !1)
            }),
            l
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }
    function Mn(e, n) {
        var r, i, o = b.ajaxSettings.flatOptions || {};
        for (i in n) {
            n[i] !== t && ((o[i] ? e: r || (r = {}))[i] = n[i])
        }
        return r && b.extend(!0, e, r),
        e
    }
    b.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) {
            return Sn.apply(this, arguments)
        }
        var i, o, a, s = this,
        u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)),
        b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"),
        s.length > 0 && b.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments,
            s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
        }).complete(r &&
        function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }),
        this
    },
    b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    b.each(["get", "post"],
    function(e, n) {
        b[n] = function(e, r, i, o) {
            return b.isFunction(r) && (o = o || i, i = r, r = t),
            b.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }),
    b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Nn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t),
            n = n || {};
            var r, i, o, a, s, u, l, c, p = b.ajaxSetup({},
            n),
            f = p.context || p,
            d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
            h = b.Deferred(),
            g = b.Callbacks("once memory"),
            m = p.statusCode || {},
            y = {},
            v = {},
            x = 0,
            T = "canceled",
            N = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!c) {
                            c = {};
                            while (t = Tn.exec(a)) {
                                c[t[1].toLowerCase()] = t[2]
                            }
                        }
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? a: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = v[n] = v[n] || e, y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) {
                        if (2 > x) {
                            for (t in e) {
                                m[t] = [m[t], e[t]]
                            }
                        } else {
                            N.always(e[N.status])
                        }
                    }
                    return this
                },
                abort: function(e) {
                    var t = e || T;
                    return l && l.abort(t),
                    k(0, t),
                    this
                }
            };
            if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) {
                return N
            }
            u = p.global,
            u && 0 === b.active++&&b.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Cn.test(p.type),
            o = p.url,
            p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&": "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&": "?") + "_=" + vn++)),
            p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType),
            N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01": "") : p.accepts["*"]);
            for (i in p.headers) {
                N.setRequestHeader(i, p.headers[i])
            }
            if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) {
                return N.abort()
            }
            T = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                N[i](p[i])
            }
            if (l = qn(jn, p, n, N)) {
                N.readyState = 1,
                u && d.trigger("ajaxSend", [N, p]),
                p.async && p.timeout > 0 && (s = setTimeout(function() {
                    N.abort("timeout")
                },
                p.timeout));
                try {
                    x = 1,
                    l.send(y, k)
                } catch(C) {
                    if (! (2 > x)) {
                        throw C
                    }
                    k( - 1, C)
                }
            } else {
                k( - 1, "No Transport")
            }
            function k(e, n, r, i) {
                var c, y, v, w, T, C = n;
                2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess": "ajaxError", [N, p, c ? y: v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")))
            }
            return N
        },
        getScript: function(e, n) {
            return b.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json")
        }
    });
    function _n(e, n, r) {
        var i, o, a, s, u = e.contents,
        l = e.dataTypes,
        c = e.responseFields;
        for (s in c) {
            s in r && (n[c[s]] = r[s])
        }
        while ("*" === l[0]) {
            l.shift(),
            o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"))
        }
        if (o) {
            for (s in u) {
                if (u[s] && u[s].test(o)) {
                    l.unshift(s);
                    break
                }
            }
        }
        if (l[0] in r) {
            a = l[0]
        } else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t
    }
    function Fn(e, t) {
        var n, r, i, o, a = {},
        s = 0,
        u = e.dataTypes.slice(),
        l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) {
            for (i in e.converters) {
                a[i.toLowerCase()] = e.converters[i]
            }
        }
        for (; r = u[++s];) {
            if ("*" !== r) {
                if ("*" !== l && l !== r) {
                    if (i = a[l + " " + r] || a["* " + r], !i) {
                        for (n in a) {
                            if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                                i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                                break
                            }
                        }
                    }
                    if (i !== !0) {
                        if (i && e["throws"]) {
                            t = i(t)
                        } else {
                            try {
                                t = i(t)
                            } catch(c) {
                                return {
                                    state: "parsererror",
                                    error: i ? c: "No conversion from " + l + " to " + r
                                }
                            }
                        }
                    }
                }
                l = r
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e),
                e
            }
        }
    }),
    b.ajaxPrefilter("script",
    function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    b.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var n, r = o.head || b("head")[0] || o.documentElement;
            return {
                send: function(t, i) {
                    n = o.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    },
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var On = [],
    Bn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = On.pop() || b.expando + "_" + vn++;
            return this[e] = !0,
            e
        }
    }),
    b.ajaxPrefilter("json jsonp",
    function(n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&": "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || b.error(o + " was not called"),
            s[0]
        },
        n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        },
        i.always(function() {
            e[o] = a,
            n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)),
            s && b.isFunction(a) && a(s[0]),
            s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0,
    $n = e.ActiveXObject &&
    function() {
        var e;
        for (e in Pn) {
            Pn[e](t, !0)
        }
    };
    function In() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    b.ajaxSettings.xhr = e.ActiveXObject ?
    function() {
        return ! this.isLocal && In() || zn()
    }: In,
    Rn = b.ajaxSettings.xhr(),
    b.support.cors = !!Rn && "withCredentials" in Rn,
    Rn = b.support.ajax = !!Rn,
    Rn && b.ajaxTransport(function(n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) {
                        for (s in n.xhrFields) {
                            u[s] = n.xhrFields[s]
                        }
                    }
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType),
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) {
                            u.setRequestHeader(s, i[s])
                        }
                    } catch(l) {}
                    u.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var s, l, c, p;
                        try {
                            if (r && (i || 4 === u.readyState)) {
                                if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) {
                                    4 !== u.readyState && u.abort()
                                } else {
                                    p = {},
                                    s = u.status,
                                    l = u.getAllResponseHeaders(),
                                    "string" == typeof u.responseText && (p.text = u.responseText);
                                    try {
                                        c = u.statusText
                                    } catch(f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                            }
                        } catch(d) {
                            i || o( - 1, d)
                        }
                        p && o(s, c, p, l)
                    },
                    n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {},
                    b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
    Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
    Jn = /queueHooks$/,
    Gn = [nr],
    Qn = {
        "*": [function(e, t) {
            var n, r, i = this.createTween(e, t),
            o = Yn.exec(t),
            a = i.cur(),
            s = +a || 0,
            u = 1,
            l = 20;
            if (o) {
                if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "": "px"), "px" !== r && s) {
                    s = b.css(i.elem, e, !0) || n || 1;
                    do {
                        u = u || ".5", s /= u, b.style(i.elem, e, s + r)
                    } while ( u !== ( u = i . cur () / a) && 1 !== u && --l)
                }
                i.unit = r,
                i.start = s,
                i.end = o[1] ? s + (o[1] + 1) * n: n
            }
            return i
        }]
    };
    function Kn() {
        return setTimeout(function() {
            Xn = t
        }),
        Xn = b.now()
    }
    function Zn(e, t) {
        b.each(t,
        function(t, n) {
            var r = (Qn[t] || []).concat(Qn["*"]),
            i = 0,
            o = r.length;
            for (; o > i; i++) {
                if (r[i].call(e, t, n)) {
                    return
                }
            }
        })
    }
    function er(e, t, n) {
        var r, i, o = 0,
        a = Gn.length,
        s = b.Deferred().always(function() {
            delete u.elem
        }),
        u = function() {
            if (i) {
                return ! 1
            }
            var t = Xn || Kn(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = n / l.duration || 0,
            o = 1 - r,
            a = 0,
            u = l.tweens.length;
            for (; u > a; a++) {
                l.tweens[a].run(o)
            }
            return s.notifyWith(e, [l, o, n]),
            1 > o && u ? n: (s.resolveWith(e, [l]), !1)
        },
        l = s.promise({
            elem: e,
            props: b.extend({},
            t),
            opts: b.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Kn(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? l.tweens.length: 0;
                if (i) {
                    return this
                }
                for (i = !0; r > n; n++) {
                    l.tweens[n].run(1)
                }
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                this
            }
        }),
        c = l.props;
        for (tr(c, l.opts.specialEasing); a > o; o++) {
            if (r = Gn[o].call(l, e, c, l.opts)) {
                return r
            }
        }
        return Zn(l, c),
        b.isFunction(l.opts.start) && l.opts.start.call(e, l),
        b.fx.timer(b.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for (i in e) {
            if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
                n = a.expand(n),
                delete e[r];
                for (i in n) {
                    i in e || (e[i] = n[i], t[i] = o)
                }
            } else {
                t[r] = o
            }
        }
    }
    b.Animation = b.extend(er, {
        tweener: function(e, t) {
            b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
            i = e.length;
            for (; i > r; r++) {
                n = e[r],
                Qn[n] = Qn[n] || [],
                Qn[n].unshift(t)
            }
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });
    function nr(e, t, n) {
        var r, i, o, a, s, u, l, c, p, f = this,
        d = e.style,
        h = {},
        g = [],
        m = e.nodeType && nn(e);
        n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function() {
            c.unqueued || p()
        }), c.unqueued++, f.always(function() {
            f.always(function() {
                c.unqueued--,
                b.queue(e, "fx").length || c.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }));
        for (i in t) {
            if (a = t[i], Vn.exec(a)) {
                if (delete t[i], u = u || "toggle" === a, a === (m ? "hide": "show")) {
                    continue
                }
                g.push(i)
            }
        }
        if (o = g.length) {
            s = b._data(e, "fxshow") || b._data(e, "fxshow", {}),
            "hidden" in s && (m = s.hidden),
            u && (s.hidden = !m),
            m ? b(e).show() : f.done(function() {
                b(e).hide()
            }),
            f.done(function() {
                var t;
                b._removeData(e, "fxshow");
                for (t in h) {
                    b.style(e, t, h[t])
                }
            });
            for (i = 0; o > i; i++) {
                r = g[i],
                l = f.createTween(r, m ? s[r] : 0),
                h[r] = s[r] || b.style(e, r),
                r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
            }
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    b.Tween = rr,
    rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (b.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : rr.propHooks._default.set(this),
            this
        }
    },
    rr.prototype.init.prototype = rr.prototype,
    rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    b.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = b.fn[t];
        b.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }),
    b.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = b.isEmptyObject(e),
            o = b.speed(t, n, r),
            a = function() {
                var t = er(this, b.extend({},
                e), o);
                a.finish = function() {
                    t.stop(!0)
                },
                (i || b._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                n = null != e && e + "queueHooks",
                o = b.timers,
                a = b._data(this);
                if (n) {
                    a[n] && a[n].stop && i(a[n])
                } else {
                    for (n in a) {
                        a[n] && a[n].stop && Jn.test(n) && i(a[n])
                    }
                }
                for (n = o.length; n--;) {
                    o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1))
                } (t || !r) && b.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = b._data(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = b.timers,
                a = r ? r.length: 0;
                for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) {
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1))
                }
                for (t = 0; a > t; t++) {
                    r[t] && r[t].finish && r[t].finish.call(this)
                }
                delete n.finish
            })
        }
    });
    function ir(e, t) {
        var n, r = {
            height: e
        },
        i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
            n = Zt[i],
            r["margin" + n] = r["padding" + n] = e
        }
        return t && (r.opacity = r.width = e),
        r
    }
    b.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        b.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    b.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? b.extend({},
        e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            b.isFunction(r.old) && r.old.call(this),
            r.queue && b.dequeue(this, r.queue)
        },
        r
    },
    b.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    },
    b.timers = [],
    b.fx = rr.prototype.init,
    b.fx.tick = function() {
        var e, n = b.timers,
        r = 0;
        for (Xn = b.now(); n.length > r; r++) {
            e = n[r],
            e() || n[r] !== e || n.splice(r--, 1)
        }
        n.length || b.fx.stop(),
        Xn = t
    },
    b.fx.timer = function(e) {
        e() && b.timers.push(e) && b.fx.start()
    },
    b.fx.interval = 13,
    b.fx.start = function() {
        Un || (Un = setInterval(b.fx.tick, b.fx.interval))
    },
    b.fx.stop = function() {
        clearInterval(Un),
        Un = null
    },
    b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    b.fx.step = {},
    b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
        return b.grep(b.timers,
        function(t) {
            return e === t.elem
        }).length
    }),
    b.fn.offset = function(e) {
        if (arguments.length) {
            return e === t ? this: this.each(function(t) {
                b.offset.setOffset(this, e, t)
            })
        }
        var n, r, o = {
            top: 0,
            left: 0
        },
        a = this[0],
        s = a && a.ownerDocument;
        if (s) {
            return n = s.documentElement,
            b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
                top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o
        }
    },
    b.offset = {
        setOffset: function(e, t, n) {
            var r = b.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = b(e),
            o = i.offset(),
            a = b.css(e, "top"),
            s = b.css(e, "left"),
            u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1,
            l = {},
            c = {},
            p,
            f;
            u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0),
            b.isFunction(t) && (t = t.call(e, n, o)),
            null != t.top && (l.top = t.top - o.top + p),
            null != t.left && (l.left = t.left - o.left + f),
            "using" in t ? t.using.call(e, l) : i.css(l)
        }
    },
    b.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
                return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - b.css(r, "marginTop", !0),
                    left: t.left - n.left - b.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || o.documentElement;
                while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) {
                    e = e.offsetParent
                }
                return e || o.documentElement
            })
        }
    }),
    b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function(i) {
            return b.access(this,
            function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o: b(a).scrollTop()) : e[i] = o, t)
            },
            e, i, arguments.length, null)
        }
    });
    function or(e) {
        return b.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
    }
    b.each({
        Height: "height",
        Width: "width"
    },
    function(e, n) {
        b.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        },
        function(r, i) {
            b.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                s = r || (i === !0 || o === !0 ? "margin": "border");
                return b.access(this,
                function(n, r, i) {
                    var o;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
                },
                n, a ? i: t, a, null)
            }
        })
    }),
    e.jQuery = e.$ = b,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return b
    })
})(window);
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
function(ah, O, Y) {
    function U(b) {
        var a = O.console;
        ad[b] || (ad[b] = !0, ah.migrateWarnings.push(b), a && a.warn && !ah.migrateMute && (a.warn("JQMIGRATE: " + b), ah.migrateTrace && a.trace && a.trace()))
    }
    function al(d, b, c, f) {
        if (Object.defineProperty) {
            try {
                return Object.defineProperty(d, b, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return U(f),
                        c
                    },
                    set: function(a) {
                        U(f),
                        c = a
                    }
                }),
                Y
            } catch(e) {}
        }
        ah._definePropertyBroken = !0,
        d[b] = c
    }
    var ad = {};
    ah.migrateWarnings = [],
    !ah.migrateMute && O.console && O.console.log && O.console.log("JQMIGRATE: Logging is active"),
    ah.migrateTrace === Y && (ah.migrateTrace = !0),
    ah.migrateReset = function() {
        ad = {},
        ah.migrateWarnings.length = 0
    },
    "BackCompat" === document.compatMode && U("jQuery is not compatible with Quirks Mode");
    var X = ah("<input/>", {
        size: 1
    }).attr("size") && ah.attrFn,
    P = ah.attr,
    L = ah.attrHooks.value && ah.attrHooks.value.get ||
    function() {
        return null
    },
    aj = ah.attrHooks.value && ah.attrHooks.value.set ||
    function() {
        return Y
    },
    aa = /^(?:input|button)$/i,
    ai = /^[238]$/,
    W = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    ag = /^(?:checked|selected)$/i;
    al(ah, "attrFn", X || {},
    "jQuery.attrFn is deprecated"),
    ah.attr = function(f, b, e, d) {
        var j = b.toLowerCase(),
        h = f && f.nodeType;
        return d && (4 > P.length && U("jQuery.fn.attr( props, pass ) is deprecated"), f && !ai.test(h) && (X ? b in X: ah.isFunction(ah.fn[b]))) ? ah(f)[b](e) : ("type" === b && e !== Y && aa.test(f.nodeName) && f.parentNode && U("Can't change the 'type' of an input or button in IE 6/7/8"), !ah.attrHooks[j] && W.test(j) && (ah.attrHooks[j] = {
            get: function(k, l) {
                var c, g = ah.prop(k, l);
                return g === !0 || "boolean" != typeof g && (c = k.getAttributeNode(l)) && c.nodeValue !== !1 ? l.toLowerCase() : Y
            },
            set: function(g, l, k) {
                var c;
                return l === !1 ? ah.removeAttr(g, k) : (c = ah.propFix[k] || k, c in g && (g[c] = !0), g.setAttribute(k, k.toLowerCase())),
                k
            }
        },
        ag.test(j) && U("jQuery.fn.attr('" + j + "') may use property instead of attribute")), P.call(ah, f, b, e))
    },
    ah.attrHooks.value = {
        get: function(b, a) {
            var c = (b.nodeName || "").toLowerCase();
            return "button" === c ? L.apply(this, arguments) : ("input" !== c && "option" !== c && U("jQuery.fn.attr('value') no longer gets properties"), a in b ? b.value: null)
        },
        set: function(d, c) {
            var b = (d.nodeName || "").toLowerCase();
            return "button" === b ? aj.apply(this, arguments) : ("input" !== b && "option" !== b && U("jQuery.fn.attr('value', val) no longer sets properties"), d.value = c, Y)
        }
    };
    var af, ae, K = ah.fn.init,
    Z = ah.parseJSON,
    F = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    ah.fn.init = function(d, e, b) {
        var c;
        return d && "string" == typeof d && !ah.isPlainObject(e) && (c = F.exec(ah.trim(d))) && c[0] && ("<" !== d.charAt(0) && U("$(html) HTML strings must start with '<' character"), c[3] && U("$(html) HTML text after last tag is ignored"), "#" === c[0].charAt(0) && (U("HTML string cannot start with a '#' character"), ah.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && (e = e.context), ah.parseHTML) ? K.call(this, ah.parseHTML(c[2], e, !0), e, b) : K.apply(this, arguments)
    },
    ah.fn.init.prototype = ah.fn,
    ah.parseJSON = function(a) {
        return a || null === a ? Z.apply(this, arguments) : (U("jQuery.parseJSON requires a valid JSON string"), null)
    },
    ah.uaMatch = function(b) {
        b = b.toLowerCase();
        var a = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: a[1] || "",
            version: a[2] || "0"
        }
    },
    ah.browser || (af = ah.uaMatch(navigator.userAgent), ae = {},
    af.browser && (ae[af.browser] = !0, ae.version = af.version), ae.chrome ? ae.webkit = !0 : ae.webkit && (ae.safari = !0), ah.browser = ae),
    al(ah, "browser", ah.browser, "jQuery.browser is deprecated"),
    ah.sub = function() {
        function a(c, d) {
            return new a.fn.init(c, d)
        }
        ah.extend(!0, a, this),
        a.superclass = this,
        a.fn = a.prototype = this(),
        a.fn.constructor = a,
        a.sub = this.sub,
        a.fn.init = function(d, c) {
            return c && c instanceof ah && !(c instanceof a) && (c = a(c)),
            ah.fn.init.call(this, d, c, b)
        },
        a.fn.init.prototype = a.fn;
        var b = a(document);
        return U("jQuery.sub() is deprecated"),
        a
    },
    ah.ajaxSetup({
        converters: {
            "text json": ah.parseJSON
        }
    });
    var ak = ah.fn.data;
    ah.fn.data = function(d) {
        var b, c, e = this[0];
        return ! e || "events" !== d || 1 !== arguments.length || (b = ah.data(e, d), c = ah._data(e, d), b !== Y && b !== c || c === Y) ? ak.apply(this, arguments) : (U("Use of jQuery.fn.data('events') is deprecated"), c)
    };
    var ac = /\/(java|ecma)script/i,
    J = ah.fn.andSelf || ah.fn.addBack;
    ah.fn.andSelf = function() {
        return U("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        J.apply(this, arguments)
    },
    ah.clean || (ah.clean = function(m, j, f, b) {
        j = j || document,
        j = !j.nodeType && j[0] || j,
        j = j.ownerDocument || j,
        U("jQuery.clean() is deprecated");
        var n, k, h, e, g = [];
        if (ah.merge(g, ah.buildFragment(m, j).childNodes), f) {
            for (h = function(a) {
                return ! a.type || ac.test(a.type) ? b ? b.push(a.parentNode ? a.parentNode.removeChild(a) : a) : f.appendChild(a) : Y
            },
            n = 0; null != (k = g[n]); n++) {
                ah.nodeName(k, "script") && h(k) || (f.appendChild(k), k.getElementsByTagName !== Y && (e = ah.grep(ah.merge([], k.getElementsByTagName("script")), h), g.splice.apply(g, [n + 1, 0].concat(e)), n += e.length))
            }
        }
        return g
    });
    var B = ah.event.add,
    G = ah.event.remove,
    ab = ah.event.trigger,
    D = ah.fn.toggle,
    q = ah.fn.live,
    E = ah.fn.die,
    z = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
    R = RegExp("\\b(?:" + z + ")\\b"),
    I = /(?:^|\s)hover(\.\S+|)\b/,
    V = function(a) {
        return "string" != typeof a || ah.event.special.hover ? a: (I.test(a) && U("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), a && a.replace(I, "mouseenter$1 mouseleave$1"))
    };
    ah.event.props && "attrChange" !== ah.event.props[0] && ah.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"),
    ah.event.dispatch && al(ah.event, "handle", ah.event.dispatch, "jQuery.event.handle is undocumented and deprecated"),
    ah.event.add = function(f, d, g, b, c) {
        f !== document && R.test(d) && U("AJAX events should be attached to document: " + d),
        B.call(this, f, V(d || ""), g, b, c)
    },
    ah.event.remove = function(f, c, g, d, b) {
        G.call(this, f, V(c) || "", g, d, b)
    },
    ah.fn.error = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return U("jQuery.fn.error() is deprecated"),
        a.splice(0, 0, "error"),
        arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this)
    },
    ah.fn.toggle = function(d, g) {
        if (!ah.isFunction(d) || !ah.isFunction(g)) {
            return D.apply(this, arguments)
        }
        U("jQuery.fn.toggle(handler, handler...) is deprecated");
        var b = arguments,
        c = d.guid || ah.guid++,
        f = 0,
        e = function(h) {
            var a = (ah._data(this, "lastToggle" + d.guid) || 0) % f;
            return ah._data(this, "lastToggle" + d.guid, a + 1),
            h.preventDefault(),
            b[a].apply(this, arguments) || !1
        };
        for (e.guid = c; b.length > f;) {
            b[f++].guid = c
        }
        return this.click(e)
    },
    ah.fn.live = function(c, d, b) {
        return U("jQuery.fn.live() is deprecated"),
        q ? q.apply(this, arguments) : (ah(this.context).on(c, this.selector, d, b), this)
    },
    ah.fn.die = function(a, b) {
        return U("jQuery.fn.die() is deprecated"),
        E ? E.apply(this, arguments) : (ah(this.context).off(a, this.selector || "**", b), this)
    },
    ah.event.trigger = function(d, c, f, b) {
        return f || R.test(d) || U("Global events are undocumented and deprecated"),
        ab.call(this, d, c, f || document, b)
    },
    ah.each(z.split("|"),
    function(a, b) {
        ah.event.special[b] = {
            setup: function() {
                var c = this;
                return c !== document && (ah.event.add(document, b + "." + ah.guid,
                function() {
                    ah.event.trigger(b, null, c, !0)
                }), ah._data(this, b, ah.guid++)),
                !1
            },
            teardown: function() {
                return this !== document && ah.event.remove(document, b + "." + ah._data(this, b)),
                !1
            }
        }
    })
} (jQuery, window);
jQuery.cookie = function(b, j, m) {
    if (typeof j != "undefined") {
        m = m || {};
        if (j === null) {
            j = "";
            m.expires = -1
        }
        var e = "";
        if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
            var f;
            if (typeof m.expires == "number") {
                f = new Date();
                f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000))
            } else {
                f = m.expires
            }
            e = "; expires=" + f.toUTCString()
        }
        var l = m.path ? "; path=" + (m.path) : "";
        var g = m.domain ? "; domain=" + (m.domain) : "";
        var a = m.secure ? "; secure": "";
        document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("")
    } else {
        var d = null;
        if (document.cookie && document.cookie != "") {
            var k = document.cookie.split(";");
            for (var h = 0; h < k.length; h++) {
                var c = jQuery.trim(k[h]);
                if (c.substring(0, b.length + 1) == (b + "=")) {
                    d = decodeURIComponent(c.substring(b.length + 1));
                    break
                }
            }
        }
        return d
    }
}; (function(b) {
    b.hotkeys = {
        version: "0.8",
        specialKeys: {
            8 : "backspace",
            9 : "tab",
            13 : "return",
            16 : "shift",
            17 : "ctrl",
            18 : "alt",
            19 : "pause",
            20 : "capslock",
            27 : "esc",
            32 : "space",
            33 : "pageup",
            34 : "pagedown",
            35 : "end",
            36 : "home",
            37 : "left",
            38 : "up",
            39 : "right",
            40 : "down",
            45 : "insert",
            46 : "del",
            96 : "0",
            97 : "1",
            98 : "2",
            99 : "3",
            100 : "4",
            101 : "5",
            102 : "6",
            103 : "7",
            104 : "8",
            105 : "9",
            106 : "*",
            107 : "+",
            109 : "-",
            110 : ".",
            111 : "/",
            112 : "f1",
            113 : "f2",
            114 : "f3",
            115 : "f4",
            116 : "f5",
            117 : "f6",
            118 : "f7",
            119 : "f8",
            120 : "f9",
            121 : "f10",
            122 : "f11",
            123 : "f12",
            144 : "numlock",
            145 : "scroll",
            191 : "/",
            224 : "meta"
        },
        shiftNums: {
            "`": "~",
            "1": "!",
            "2": "@",
            "3": "#",
            "4": "$",
            "5": "%",
            "6": "^",
            "7": "&",
            "8": "*",
            "9": "(",
            "0": ")",
            "-": "_",
            "=": "+",
            ";": ": ",
            "'": '"',
            ",": "<",
            ".": ">",
            "/": "?",
            "\\": "|"
        }
    };
    function a(d) {
        if (typeof d.data !== "string") {
            return
        }
        var c = d.handler,
        e = d.data.toLowerCase().split(" ");
        d.handler = function(n) {
            if (this !== n.target && (/textarea|select/i.test(n.target.nodeName) || n.target.type === "text")) {
                return
            }
            var h = n.type !== "keypress" && b.hotkeys.specialKeys[n.which],
            o = String.fromCharCode(n.which).toLowerCase(),
            k,
            m = "",
            g = {};
            if (n.altKey && h !== "alt") {
                m += "alt+"
            }
            if (n.ctrlKey && h !== "ctrl") {
                m += "ctrl+"
            }
            if (n.metaKey && !n.ctrlKey && h !== "meta") {
                m += "meta+"
            }
            if (n.shiftKey && h !== "shift") {
                m += "shift+"
            }
            if (h) {
                g[m + h] = true
            } else {
                g[m + o] = true;
                g[m + b.hotkeys.shiftNums[o]] = true;
                if (m === "shift+") {
                    g[b.hotkeys.shiftNums[o]] = true
                }
            }
            for (var j = 0,
            f = e.length; j < f; j++) {
                if (g[e[j]]) {
                    return c.apply(this, arguments)
                }
            }
        }
    }
    b.each(["keydown", "keyup", "keypress"],
    function() {
        b.event.special[this] = {
            add: a
        }
    })
})(jQuery);
/*!
 * ZUI: zui for zentao - v1.7.0 - 2017-08-22
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git
 * Copyright (c) 2017 cnezsoft.com; Licensed MIT
 */
/*! Some code copy from Bootstrap v3.0.0 by @fat and @mdo. (Copyright 2013 Twitter, Inc. Licensed under http://www.apache.org/licenses/)*/
!
function(d, f, b) {
    if ("undefined" == typeof d) {
        throw new Error("ZUI requires jQuery")
    }
    d.zui || (d.zui = function(a) {
        d.isPlainObject(a) && d.extend(d.zui, a)
    });
    var c = {
        all: -1,
        left: 0,
        middle: 1,
        right: 2
    },
    g = 0;
    d.zui({
        uuid: function() {
            return 1000 * (new Date).getTime() + g++%1000
        },
        callEvent: function(h, a, j) {
            if (d.isFunction(h)) {
                j !== b && (h = d.proxy(h, j));
                var k = h(a);
                return a && (a.result = k),
                !(k !== b && !k)
            }
            return 1
        },
        clientLang: function() {
            var e, h = f.config;
            if ("undefined" != typeof h && h.clientLang && (e = h.clientLang), !e) {
                var j = d("html").attr("lang");
                e = j ? j: navigator.userLanguage || navigator.userLanguage || "zh_cn"
            }
            return e.replace("-", "_").toLowerCase()
        },
        strCode: function(j) {
            var k = 0;
            if (j && j.length) {
                for (var h = 0; h < j.length; ++h) {
                    k += h * j.charCodeAt(h)
                }
            }
            return k
        },
        getMouseButtonCode: function(a) {
            return "number" != typeof a && (a = c[a]),
            a !== b && null !== a || (a = -1),
            a
        }
    }),
    d.fn.callEvent = function(m, h, q) {
        var u = d(this),
        j = m.indexOf(".zui."),
        k = j < 0 ? m: m.substring(0, j),
        a = d.Event(k, h);
        if (q === b && j > 0 && (q = u.data(m.substring(j + 1))), q && q.options) {
            var p = q.options[k];
            d.isFunction(p) && (a.result = d.zui.callEvent(p, a, q))
        }
        return u.trigger(a),
        a
    }
} (jQuery, window, void 0),
function() {
    String.prototype.format || (String.prototype.format = function(d) {
        var f = this;
        if (arguments.length > 0) {
            var b;
            if (arguments.length <= 2 && "object" == typeof d) {
                for (var c in d) {
                    void 0 !== d[c] && (b = new RegExp("(" + (arguments[1] ? arguments[1].replace("0", c) : "{" + c + "}") + ")", "g"), f = f.replace(b, d[c]))
                }
            } else {
                for (var g = 0; g < arguments.length; g++) {
                    void 0 !== arguments[g] && (b = new RegExp("({[" + g + "]})", "g"), f = f.replace(b, arguments[g]))
                }
            }
        }
        return f
    }),
    String.prototype.isNum || (String.prototype.isNum = function(c) {
        if (null !== c) {
            var d, b;
            return b = /\d*/i,
            d = c.match(b),
            d == c
        }
        return ! 1
    })
} (),
/*!
 * jQuery resize event - v1.1
 * http://benalman.com/projects/jquery-resize-plugin/
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * MIT & GPL http://benalman.com/about/license/
 */
function(w, m, v) {
    function k() {
        g = m[b](function() {
            h.each(function() {
                var l = w(this),
                c = l.width(),
                d = l.height(),
                n = w.data(this, q);
                c === n.w && d === n.h || l.trigger(j, [n.w = c, n.h = d])
            }),
            k()
        },
        x[u])
    }
    var g, h = w([]),
    x = w.resize = w.extend(w.resize, {}),
    b = "setTimeout",
    j = "resize",
    q = j + "-special-event",
    u = "delay",
    f = "throttleWindow";
    x[u] = 250,
    x[f] = !0,
    w.event.special[j] = {
        setup: function() {
            if (!x[f] && this[b]) {
                return ! 1
            }
            var a = w(this);
            h = h.add(a),
            w.data(this, q, {
                w: a.width(),
                h: a.height()
            }),
            1 === h.length && k()
        },
        teardown: function() {
            if (!x[f] && this[b]) {
                return ! 1
            }
            var a = w(this);
            h = h.not(a),
            a.removeData(q),
            h.length || clearTimeout(g)
        },
        add: function(c) {
            function a(y, l, z) {
                var o = w(this),
                p = w.data(this, q) || {};
                p.w = l !== v ? l: o.width(),
                p.h = z !== v ? z: o.height(),
                d.apply(this, arguments)
            }
            if (!x[f] && this[b]) {
                return ! 1
            }
            var d;
            return w.isFunction(c) ? (d = c, a) : (d = c.handler, void(c.handler = a))
        }
    }
} (jQuery, this),
function() {
    Date.ONEDAY_TICKS = 86400000,
    Date.prototype.format || (Date.prototype.format = function(c) {
        var d = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        /(y+)/i.test(c) && (c = c.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var b in d) {
            new RegExp("(" + b + ")").test(c) && (c = c.replace(RegExp.$1, 1 == RegExp.$1.length ? d[b] : ("00" + d[b]).substr(("" + d[b]).length)))
        }
        return c
    }),
    Date.prototype.addMilliseconds || (Date.prototype.addMilliseconds = function(a) {
        return this.setTime(this.getTime() + a),
        this
    }),
    Date.prototype.addDays || (Date.prototype.addDays = function(a) {
        return this.addMilliseconds(a * Date.ONEDAY_TICKS),
        this
    }),
    Date.prototype.clone || (Date.prototype.clone = function() {
        var a = new Date;
        return a.setTime(this.getTime()),
        a
    }),
    Date.isLeapYear || (Date.isLeapYear = function(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }),
    Date.getDaysInMonth || (Date.getDaysInMonth = function(a, b) {
        return [31, Date.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
    }),
    Date.prototype.isLeapYear || (Date.prototype.isLeapYear = function() {
        return Date.isLeapYear(this.getFullYear())
    }),
    Date.prototype.clearTime || (Date.prototype.clearTime = function() {
        return this.setHours(0),
        this.setMinutes(0),
        this.setSeconds(0),
        this.setMilliseconds(0),
        this
    }),
    Date.prototype.getDaysInMonth || (Date.prototype.getDaysInMonth = function() {
        return Date.getDaysInMonth(this.getFullYear(), this.getMonth())
    }),
    Date.prototype.addMonths || (Date.prototype.addMonths = function(a) {
        var b = this.getDate();
        return this.setDate(1),
        this.setMonth(this.getMonth() + a),
        this.setDate(Math.min(b, this.getDaysInMonth())),
        this
    }),
    Date.prototype.getLastWeekday || (Date.prototype.getLastWeekday = function(a) {
        a = a || 1;
        for (var b = this.clone(); b.getDay() != a;) {
            b.addDays( - 1)
        }
        return b.clearTime(),
        b
    }),
    Date.prototype.isSameDay || (Date.prototype.isSameDay = function(a) {
        return a.toDateString() === this.toDateString()
    }),
    Date.prototype.isSameWeek || (Date.prototype.isSameWeek = function(c) {
        var d = this.getLastWeekday(),
        b = d.clone().addDays(7);
        return c >= d && c < b
    }),
    Date.prototype.isSameYear || (Date.prototype.isSameYear = function(a) {
        return this.getFullYear() === a.getFullYear()
    })
} (),
function(d, g) {
    var b, c, h = "localStorage",
    j = "page_" + d.location.pathname + d.location.search,
    f = function() {
        this.slience = !0;
        try {
            h in d && d[h] && d[h].setItem && (this.enable = !0, b = d[h])
        } catch(a) {}
        this.enable || (c = {},
        b = {
            getLength: function() {
                var e = 0;
                return g.each(c,
                function() {
                    e++
                }),
                e
            },
            key: function(k) {
                var e, l = 0;
                return g.each(c,
                function(m) {
                    return l === k ? (e = m, !1) : void l++
                }),
                e
            },
            removeItem: function(e) {
                delete c[e]
            },
            getItem: function(e) {
                return c[e]
            },
            setItem: function(k, l) {
                c[k] = l
            },
            clear: function() {
                c = {}
            }
        }),
        this.storage = b,
        this.page = this.get(j, {})
    };
    f.prototype.pageSave = function() {
        if (g.isEmptyObject(this.page)) {
            this.remove(j)
        } else {
            var l, e = [];
            for (l in this.page) {
                var k = this.page[l];
                null === k && e.push(l)
            }
            for (l = e.length - 1; l >= 0; l--) {
                delete this.page[e[l]]
            }
            this.set(j, this.page)
        }
    },
    f.prototype.pageRemove = function(a) {
        "undefined" != typeof this.page[a] && (this.page[a] = null, this.pageSave())
    },
    f.prototype.pageClear = function() {
        this.page = {},
        this.pageSave()
    },
    f.prototype.pageGet = function(l, m) {
        var k = this.page[l];
        return void 0 === m || null !== k && void 0 !== k ? k: m
    },
    f.prototype.pageSet = function(k, e) {
        g.isPlainObject(k) ? g.extend(!0, this.page, k) : this.page[this.serialize(k)] = e,
        this.pageSave()
    },
    f.prototype.check = function() {
        if (!this.enable && !this.slience) {
            throw new Error("Browser not support localStorage or enable status been set true.")
        }
        return this.enable
    },
    f.prototype.length = function() {
        return this.check() ? b.getLength ? b.getLength() : b.length: 0
    },
    f.prototype.removeItem = function(a) {
        return b.removeItem(a),
        this
    },
    f.prototype.remove = function(a) {
        return this.removeItem(a)
    },
    f.prototype.getItem = function(a) {
        return b.getItem(a)
    },
    f.prototype.get = function(l, m) {
        var k = this.deserialize(this.getItem(l));
        return "undefined" != typeof k && null !== k || "undefined" == typeof m ? k: m
    },
    f.prototype.key = function(a) {
        return b.key(a)
    },
    f.prototype.setItem = function(a, k) {
        return b.setItem(a, k),
        this
    },
    f.prototype.set = function(a, k) {
        return void 0 === k ? this.remove(a) : (this.setItem(a, this.serialize(k)), this)
    },
    f.prototype.clear = function() {
        return b.clear(),
        this
    },
    f.prototype.forEach = function(k) {
        for (var l = this.length(), a = l - 1; a >= 0; a--) {
            var m = b.key(a);
            k(m, this.get(m))
        }
        return this
    },
    f.prototype.getAll = function() {
        var a = {};
        return this.forEach(function(l, k) {
            a[l] = k
        }),
        a
    },
    f.prototype.serialize = function(a) {
        return "string" == typeof a ? a: JSON.stringify(a)
    },
    f.prototype.deserialize = function(a) {
        if ("string" == typeof a) {
            try {
                return JSON.parse(a)
            } catch(k) {
                return a || void 0
            }
        }
    },
    g.zui({
        store: new f
    })
} (window, jQuery),
function(z, N, R, J) {
    function F(d) {
        if (d = d.toLowerCase(), d && P.test(d)) {
            var f;
            if (4 === d.length) {
                var b = "#";
                for (f = 1; f < 4; f += 1) {
                    b += d.slice(f, f + 1).concat(d.slice(f, f + 1))
                }
                d = b
            }
            var c = [];
            for (f = 1; f < 7; f += 2) {
                c.push(j("0x" + d.slice(f, f + 2)))
            }
            return {
                r: c[0],
                g: c[1],
                b: c[2],
                a: 1
            }
        }
        throw new Error("Wrong hex string! (hex: " + d + ")")
    }
    function G(a) {
        return typeof a === x && ("transparent" === a.toLowerCase() || q[a.toLowerCase()] || P.test(z.trim(a.toLowerCase())))
    }
    function A(p) {
        function h(a) {
            return a = a < 0 ? a + 1 : a > 1 ? a - 1 : a,
            6 * a < 1 ? b + (u - b) * a * 6 : 2 * a < 1 ? u: 3 * a < 2 ? b + (u - b) * (2 / 3 - a) * 6 : b
        }
        var m = p.h,
        g = p.s,
        d = p.l,
        f = p.a;
        m = O(m) % K / K,
        g = I(O(g)),
        d = I(O(d)),
        f = I(O(f));
        var u = d <= 0.5 ? d * (g + 1) : d + g - d * g,
        b = 2 * d - u,
        l = {
            r: h(m + 1 / 3) * E,
            g: h(m) * E,
            b: h(m - 1 / 3) * E,
            a: f
        };
        return l
    }
    function D(d, b, c) {
        return H(c) && (c = 0),
        H(b) && (b = E),
        N.min(N.max(d, c), b)
    }
    function I(a, b) {
        return D(a, b)
    }
    function O(a) {
        return "number" == typeof a ? a: parseFloat(a)
    }
    var P = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,
    E = 255,
    K = 360,
    M = 100,
    x = "string",
    L = "object",
    q = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    },
    H = function(a) {
        return a === J
    },
    Q = function(a) {
        return ! H(a)
    },
    j = function(a) {
        return parseInt(a)
    },
    k = function(a) {
        return j(I(O(a), E))
    },
    B = function(f, h, b, d) {
        var m = this;
        if (m.r = m.g = m.b = 0, m.a = 1, Q(d) && (m.a = I(O(d), 1)), Q(f) && Q(h) && Q(b)) {
            m.r = k(f),
            m.g = k(h),
            m.b = k(b)
        } else {
            if (Q(f)) {
                var g = typeof f;
                if (g == x) {
                    f = f.toLowerCase(),
                    "transparent" === f ? m.a = 0 : q[f] ? this.rgb(F(q[f])) : m.rgb(F(f))
                } else {
                    if ("number" == g && H(h)) {
                        m.r = m.g = m.b = k(f)
                    } else {
                        if (g == L && Q(f.r)) {
                            m.r = k(f.r),
                            Q(f.g) && (m.g = k(f.g)),
                            Q(f.b) && (m.b = k(f.b)),
                            Q(f.a) && (m.a = I(O(f.a), 1))
                        } else {
                            if (g == L && Q(f.h)) {
                                var l = {
                                    h: I(O(f.h), K),
                                    s: 1,
                                    l: 1,
                                    a: 1
                                };
                                Q(f.s) && (l.s = I(O(f.s), 1)),
                                Q(f.l) && (l.l = I(O(f.l), 1)),
                                Q(f.a) && (l.a = I(O(f.a), 1)),
                                m.rgb(A(l))
                            }
                        }
                    }
                }
            }
        }
    };
    B.prototype.rgb = function(c) {
        var d = this;
        if (Q(c)) {
            if (typeof c == L) {
                Q(c.r) && (d.r = k(c.r)),
                Q(c.g) && (d.g = k(c.g)),
                Q(c.b) && (d.b = k(c.b)),
                Q(c.a) && (d.a = I(O(c.a), 1))
            } else {
                var b = j(O(c));
                d.r = b,
                d.g = b,
                d.b = b
            }
            return d
        }
        return {
            r: d.r,
            g: d.g,
            b: d.b,
            a: d.a
        }
    },
    B.prototype.hue = function(c) {
        var d = this,
        b = d.toHsl();
        return H(c) ? b.h: (b.h = I(O(c), K), d.rgb(A(b)), d)
    },
    B.prototype.darken = function(c) {
        var d = this,
        b = d.toHsl();
        return b.l -= c / M,
        b.l = I(b.l, 1),
        d.rgb(A(b)),
        d
    },
    B.prototype.clone = function() {
        var a = this;
        return new B(a.r, a.g, a.b, a.a)
    },
    B.prototype.lighten = function(a) {
        return this.darken( - a)
    },
    B.prototype.fade = function(a) {
        return this.a = I(a / M, 1),
        this
    },
    B.prototype.spin = function(c) {
        var d = this.toHsl(),
        b = (d.h + c) % K;
        return d.h = b < 0 ? K + b: b,
        this.rgb(A(d))
    },
    B.prototype.toHsl = function() {
        var y, w, m = this,
        e = m.r / E,
        g = m.g / E,
        C = m.b / E,
        b = m.a,
        h = N.max(e, g, C),
        u = N.min(e, g, C),
        v = (h + u) / 2,
        p = h - u;
        if (h === u) {
            y = w = 0
        } else {
            switch (w = v > 0.5 ? p / (2 - h - u) : p / (h + u), h) {
            case e:
                y = (g - C) / p + (g < C ? 6 : 0);
                break;
            case g:
                y = (C - e) / p + 2;
                break;
            case C:
                y = (e - g) / p + 4
            }
            y /= 6
        }
        return {
            h: y * K,
            s: w,
            l: v,
            a: b
        }
    },
    B.prototype.luma = function() {
        var d = this.r / E,
        b = this.g / E,
        c = this.b / E;
        return d = d <= 0.03928 ? d / 12.92 : N.pow((d + 0.055) / 1.055, 2.4),
        b = b <= 0.03928 ? b / 12.92 : N.pow((b + 0.055) / 1.055, 2.4),
        c = c <= 0.03928 ? c / 12.92 : N.pow((c + 0.055) / 1.055, 2.4),
        0.2126 * d + 0.7152 * b + 0.0722 * c
    },
    B.prototype.saturate = function(a) {
        var b = this.toHsl();
        return b.s += a / M,
        b.s = I(b.s),
        this.rgb(A(b))
    },
    B.prototype.desaturate = function(a) {
        return this.saturate( - a)
    },
    B.prototype.contrast = function(d, f, b) {
        if (f = H(f) ? new B(E, E, E, 1) : new B(f), d = H(d) ? new B(0, 0, 0, 1) : new B(d), d.luma() > f.luma()) {
            var c = f;
            f = d,
            d = c
        }
        return this.a < 0.5 ? d: (b = H(b) ? 0.43 : O(b), this.luma() < b ? f: d)
    },
    B.prototype.hexStr = function() {
        var c = this.r.toString(16),
        d = this.g.toString(16),
        b = this.b.toString(16);
        return 1 == c.length && (c = "0" + c),
        1 == d.length && (d = "0" + d),
        1 == b.length && (b = "0" + b),
        "#" + c + d + b
    },
    B.prototype.toCssStr = function() {
        var a = this;
        return a.a > 0 ? a.a < 1 ? "rgba(" + a.r + "," + a.g + "," + a.b + "," + a.a + ")": a.hexStr() : "transparent"
    },
    B.isColor = G,
    B.names = q,
    B.get = function(a) {
        return new B(a)
    },
    z.zui({
        Color: B
    })
} (jQuery, Math, window, void 0),
/*!
 * ZUI: Generated from less code - v1.7.0 - 2017-08-22
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git
 * Copyright (c) 2017 cnezsoft.com; Licensed MIT
 */
function(d) {
    var f = 0,
    b = ["primary", "red", "yellow", "green", "blue", "purple", "brown", "dark"],
    c = {
        primary: "#3280fc",
        secondary: "#145ccd",
        pale: "#ebf2f9",
        fore: "#353535",
        back: "#fff",
        grayDarker: "#222222",
        grayDark: "#333333",
        gray: "#808080",
        grayLight: "#dddddd",
        grayLighter: "#e5e5e5",
        grayPale: "#f1f1f1",
        white: "#fff",
        black: "#000",
        red: "#ea644a",
        yellow: "#f1a325",
        green: "#38b03f",
        blue: "#03b8cf",
        purple: "#8666b8",
        brown: "#bd7b46",
        greenPale: "#ddf4df",
        yellowPale: "#fff0d5",
        redPale: "#ffe5e0",
        bluePale: "#ddf3f5",
        brownPale: "#f7ebe1",
        purplePale: "#f5eeff",
        light: "#fff",
        dark: "#353535",
        success: "#38b03f",
        warning: "#f1a325",
        danger: "#ea644a",
        info: "#03b8cf",
        important: "#bd7b46",
        special: "#8666b8",
        successPale: "#ddf4df",
        warningPale: "#fff0d5",
        dangerPale: "#ffe5e0",
        infoPale: "#ddf3f5",
        importantPale: "#f7ebe1",
        specialPale: "#f5eeff"
    };
    c.get = function(a) {
        "undefined" != typeof a && "random" !== a || (a = b[f++%b.length]);
        var e = c[a] ? c[a] : a;
        return d.zui.Color ? new d.zui.Color(e) : e
    },
    d.zui({
        colorset: c
    }),
    d.zui.Color && d.extend(d.zui.Color, c)
} (jQuery),
+
function(a) {
    function b() {
        var d = document.createElement("bootstrap"),
        f = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in f) {
            if (void 0 !== d.style[c]) {
                return {
                    end: f[c]
                }
            }
        }
        return ! 1
    }
    a.fn.emulateTransitionEnd = function(f) {
        var c = !1,
        d = this;
        a(this).one("bsTransitionEnd",
        function() {
            c = !0
        });
        var g = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(g, f),
        this
    },
    a(function() {
        a.support.transition = b(),
        a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(c) {
                if (a(c.target).is(this)) {
                    return c.handleObj.handler.apply(this, arguments)
                }
            }
        })
    })
} (jQuery),
function(a) {
    a.fn.fixOlPd = function(b) {
        return b = b || 10,
        this.each(function() {
            var c = a(this);
            c.css("paddingLeft", Math.ceil(Math.log10(c.children().length)) * b + 10)
        })
    },
    a(function() {
        a(".ol-pd-fix,.article ol").fixOlPd()
    })
} (jQuery),
+
function(c) {
    var d = function(e, f) {
        this.$element = c(e),
        this.options = c.extend({},
        d.DEFAULTS, f),
        this.isLoading = !1
    };
    d.DEFAULTS = {
        loadingText: "loading..."
    },
    d.prototype.setState = function(h) {
        var f = "disabled",
        g = this.$element,
        j = g.is("input") ? "val": "html",
        k = g.data();
        h += "Text",
        k.resetText || g.data("resetText", g[j]()),
        g[j](k[h] || this.options[h]),
        setTimeout(c.proxy(function() {
            "loadingText" == h ? (this.isLoading = !0, g.addClass(f).attr(f, f)) : this.isLoading && (this.isLoading = !1, g.removeClass(f).removeAttr(f))
        },
        this), 0)
    },
    d.prototype.toggle = function() {
        var g = !0,
        h = this.$element.closest('[data-toggle="buttons"]');
        if (h.length) {
            var f = this.$element.find("input");
            "radio" == f.prop("type") && (f.prop("checked") && this.$element.hasClass("active") ? g = !1 : h.find(".active").removeClass("active")),
            g && f.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        g && this.$element.toggleClass("active")
    };
    var b = c.fn.button;
    c.fn.button = function(e) {
        return this.each(function() {
            var a = c(this),
            f = a.data("zui.button"),
            g = "object" == typeof e && e;
            f || a.data("zui.button", f = new d(this, g)),
            "toggle" == e ? f.toggle() : e && f.setState(e)
        })
    },
    c.fn.button.Constructor = d,
    c.fn.button.noConflict = function() {
        return c.fn.button = b,
        this
    },
    c(document).on("click.zui.button.data-api", "[data-toggle^=button]",
    function(g) {
        var f = c(g.target);
        f.hasClass("btn") || (f = f.closest(".btn")),
        f.button("toggle"),
        g.preventDefault()
    })
} (jQuery),
function(c) {
    var d = {
        zh_cn: '您的浏览器版本过低，无法体验所有功能，建议升级或者更换浏览器。 <a href="http://browsehappy.com/" target="_blank" class="alert-link">了解更多...</a>',
        zh_tw: '您的瀏覽器版本過低，無法體驗所有功能，建議升級或者更换瀏覽器。<a href="http://browsehappy.com/" target="_blank" class="alert-link">了解更多...</a>',
        en: 'Your browser is too old, it has been unable to experience the colorful internet. We strongly recommend that you upgrade a better one. <a href="http://browsehappy.com/" target="_blank" class="alert-link">Learn more...</a>'
    },
    b = function() {
        var a = this.isIE() || this.isIE10() || !1;
        if (a) {
            for (var f = 10; f > 5; f--) {
                if (this.isIE(f)) {
                    a = f;
                    break
                }
            }
        }
        this.ie = a,
        this.cssHelper()
    };
    b.prototype.cssHelper = function() {
        var g = this.ie,
        f = c("html");
        f.toggleClass("ie", g).removeClass("ie-6 ie-7 ie-8 ie-9 ie-10"),
        g && f.addClass("ie-" + g).toggleClass("gt-ie-7 gte-ie-8 support-ie", g >= 8).toggleClass("lte-ie-7 lt-ie-8 outdated-ie", g < 8).toggleClass("gt-ie-8 gte-ie-9", g >= 9).toggleClass("lte-ie-8 lt-ie-9", g < 9).toggleClass("gt-ie-9 gte-ie-10", g >= 10).toggleClass("lte-ie-9 lt-ie-10", g < 10)
    },
    b.prototype.tip = function(e) {
        var f = c("#browseHappyTip");
        f.length || (f = c('<div id="browseHappyTip" class="alert alert-dismissable alert-danger-inverse alert-block" style="position: relative; z-index: 99999"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><div class="container"><div class="content text-center"></div></div></div>'), f.prependTo("body")),
        f.find(".content").html(e || this.browseHappyTip || d[c.zui.clientLang() || "zh_cn"])
    },
    b.prototype.isIE = function(a) {
        if (10 === a) {
            return this.isIE10()
        }
        var f = document.createElement("b");
        return f.innerHTML = "<!--[if IE " + (a || "") + "]><i></i><![endif]-->",
        1 === f.getElementsByTagName("i").length
    },
    b.prototype.isIE10 = function() {
        return ! 1
    },
    c.zui({
        browser: new b
    }),
    c(function() {
        c("body").hasClass("disabled-browser-tip") || c.zui.browser.ie && c.zui.browser.ie < 8 && c.zui.browser.tip()
    })
} (jQuery),
+
function(d) {
    var f = "zui.collapse",
    b = function(g, a) {
        this.$element = d(g),
        this.options = d.extend({},
        b.DEFAULTS, a),
        this.transitioning = null,
        this.options.parent && (this.$parent = d(this.options.parent)),
        this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {
        toggle: !0
    },
    b.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width": "height"
    },
    b.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e = d.Event("show." + f);
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var g = this.$parent && this.$parent.find(".in");
                if (g && g.length) {
                    var k = g.data(f);
                    if (k && k.transitioning) {
                        return
                    }
                    g.collapse("hide"),
                    k || g.data(f, null)
                }
                var l = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[l](0),
                this.transitioning = 1;
                var h = function() {
                    this.$element.removeClass("collapsing").addClass("in")[l]("auto"),
                    this.transitioning = 0,
                    this.$element.trigger("shown." + f)
                };
                if (!d.support.transition) {
                    return h.call(this)
                }
                var j = d.camelCase(["scroll", l].join("-"));
                this.$element.one(d.support.transition.end, d.proxy(h, this)).emulateTransitionEnd(350)[l](this.$element[0][j])
            }
        }
    },
    b.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = d.Event("hide." + f);
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var g = this.dimension();
                this.$element[g](this.$element[g]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),
                this.transitioning = 1;
                var h = function() {
                    this.transitioning = 0,
                    this.$element.trigger("hidden." + f).removeClass("collapsing").addClass("collapse")
                };
                return d.support.transition ? void this.$element[g](0).one(d.support.transition.end, d.proxy(h, this)).emulateTransitionEnd(350) : h.call(this)
            }
        }
    },
    b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide": "show"]()
    };
    var c = d.fn.collapse;
    d.fn.collapse = function(a) {
        return this.each(function() {
            var g = d(this),
            h = g.data(f),
            e = d.extend({},
            b.DEFAULTS, g.data(), "object" == typeof a && a);
            h || g.data(f, h = new b(this, e)),
            "string" == typeof a && h[a]()
        })
    },
    d.fn.collapse.Constructor = b,
    d.fn.collapse.noConflict = function() {
        return d.fn.collapse = c,
        this
    },
    d(document).on("click." + f + ".data-api", "[data-toggle=collapse]",
    function(q) {
        var k, g = d(this),
        h = g.attr("data-target") || q.preventDefault() || (k = g.attr("href")) && k.replace(/.*(?=#[^\s]+$)/, ""),
        u = d(h),
        e = u.data(f),
        j = e ? "toggle": g.data(),
        m = g.attr("data-parent"),
        p = m && d(m);
        e && e.transitioning || (p && p.find('[data-toggle=collapse][data-parent="' + m + '"]').not(g).addClass("collapsed"), g[u.hasClass("in") ? "addClass": "removeClass"]("collapsed")),
        u.collapse(j)
    })
} (window.jQuery),
+
function(k) {
    function h() {
        k(c).remove(),
        k(d).each(function(a) {
            var l = j(k(this));
            l.hasClass("open") && (l.trigger(a = k.Event("hide." + g)), a.isDefaultPrevented() || l.removeClass("open").trigger("hidden." + g))
        })
    }
    function j(p) {
        var l = p.attr("data-target");
        l || (l = p.attr("href"), l = l && /#/.test(l) && l.replace(/.*(?=#[^\s]*$)/, ""));
        var n;
        try {
            n = l && k(l)
        } catch(q) {}
        return n && n.length ? n: p.parent()
    }
    var g = "zui.dropdown",
    c = ".dropdown-backdrop",
    d = "[data-toggle=dropdown]",
    m = function(a) {
        k(a).on("click." + g, this.toggle)
    };
    m.prototype.toggle = function(l) {
        var p = k(this);
        if (!p.is(".disabled, :disabled")) {
            var a = j(p),
            e = a.hasClass("open");
            if (h(), !e) {
                if ("ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && k('<div class="dropdown-backdrop"/>').insertAfter(k(this)).on("click", h), a.trigger(l = k.Event("show." + g)), l.isDefaultPrevented()) {
                    return
                }
                a.toggleClass("open").trigger("shown." + g),
                p.focus()
            }
            return ! 1
        }
    },
    m.prototype.keydown = function(u) {
        if (/(38|40|27)/.test(u.keyCode)) {
            var n = k(this);
            if (u.preventDefault(), u.stopPropagation(), !n.is(".disabled, :disabled")) {
                var v = j(n),
                p = v.hasClass("open");
                if (!p || p && 27 == u.keyCode) {
                    return 27 == u.which && v.find(d).focus(),
                    n.click()
                }
                var q = k("[role=menu] li:not(.divider):visible a", v);
                if (q.length) {
                    var a = q.index(q.filter(":focus"));
                    38 == u.keyCode && a > 0 && a--,
                    40 == u.keyCode && a < q.length - 1 && a++,
                    ~a || (a = 0),
                    q.eq(a).focus()
                }
            }
        }
    };
    var b = k.fn.dropdown;
    k.fn.dropdown = function(a) {
        return this.each(function() {
            var e = k(this),
            l = e.data("dropdown");
            l || e.data("dropdown", l = new m(this)),
            "string" == typeof a && l[a].call(e)
        })
    },
    k.fn.dropdown.Constructor = m,
    k.fn.dropdown.noConflict = function() {
        return k.fn.dropdown = b,
        this
    };
    var f = g + ".data-api";
    k(document).on("click." + f, h).on("click." + f, ".dropdown form",
    function(a) {
        a.stopPropagation()
    }).on("click." + f, d, m.prototype.toggle).on("keydown." + f, d + ", [role=menu]", m.prototype.keydown)
} (window.jQuery),
+
function(d) {
    var f = '[data-dismiss="alert"]',
    b = "zui.alert",
    c = function(e) {
        d(e).on("click", f, this.close)
    };
    c.prototype.close = function(j) {
        function a() {
            h.trigger("closed." + b).remove()
        }
        var k = d(this),
        l = k.attr("data-target");
        l || (l = k.attr("href"), l = l && l.replace(/.*(?=#[^\s]*$)/, ""));
        var h = d(l);
        j && j.preventDefault(),
        h.length || (h = k.hasClass("alert") ? k: k.parent()),
        h.trigger(j = d.Event("close." + b)),
        j.isDefaultPrevented() || (h.removeClass("in"), d.support.transition && h.hasClass("fade") ? h.one(d.support.transition.end, a).emulateTransitionEnd(150) : a())
    };
    var g = d.fn.alert;
    d.fn.alert = function(a) {
        return this.each(function() {
            var e = d(this),
            h = e.data(b);
            h || e.data(b, h = new c(this)),
            "string" == typeof a && h[a].call(e)
        })
    },
    d.fn.alert.Constructor = c,
    d.fn.alert.noConflict = function() {
        return d.fn.alert = g,
        this
    },
    d(document).on("click." + b + ".data-api", f, c.prototype.close)
} (window.jQuery),
+
function(d) {
    var f = "zui.tab",
    b = function(a) {
        this.element = d(a)
    };
    b.prototype.show = function() {
        var e = this.element,
        g = e.closest("ul:not(.dropdown-menu)"),
        k = e.attr("data-target") || e.attr("data-tab");
        if (k || (k = e.attr("href"), k = k && k.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var l = g.find(".active:last a")[0],
            h = d.Event("show." + f, {
                relatedTarget: l
            });
            if (e.trigger(h), !h.isDefaultPrevented()) {
                var j = d(k);
                this.activate(e.parent("li"), g),
                this.activate(j, j.parent(),
                function() {
                    e.trigger({
                        type: "shown." + f,
                        relatedTarget: l
                    })
                })
            }
        }
    },
    b.prototype.activate = function(k, g, h) {
        function l() {
            m.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
            k.addClass("active"),
            j ? (k[0].offsetWidth, k.addClass("in")) : k.removeClass("fade"),
            k.parent(".dropdown-menu") && k.closest("li.dropdown").addClass("active"),
            h && h()
        }
        var m = g.find("> .active"),
        j = h && d.support.transition && m.hasClass("fade");
        j ? m.one(d.support.transition.end, l).emulateTransitionEnd(150) : l(),
        m.removeClass("in")
    };
    var c = d.fn.tab;
    d.fn.tab = function(a) {
        return this.each(function() {
            var e = d(this),
            g = e.data(f);
            g || e.data(f, g = new b(this)),
            "string" == typeof a && g[a]()
        })
    },
    d.fn.tab.Constructor = b,
    d.fn.tab.noConflict = function() {
        return d.fn.tab = c,
        this
    },
    d(document).on("click.zui.tab.data-api", '[data-toggle="tab"], [data-tab]',
    function(a) {
        a.preventDefault(),
        d(this).tab("show")
    })
} (window.jQuery),
+
function(d) {
    function f(a, h, j) {
        return this.each(function() {
            var k = d(this),
            m = k.data(b),
            e = d.extend({},
            c.DEFAULTS, k.data(), "object" == typeof a && a);
            m || k.data(b, m = new c(this, e)),
            "string" == typeof a ? m[a](h, j) : e.show && m.show(h, j)
        })
    }
    var b = "zui.modal",
    c = function(h, a) {
        this.options = a,
        this.$body = d(document.body),
        this.$element = d(h),
        this.$backdrop = this.isShown = null,
        this.scrollbarWidth = 0,
        "undefined" == typeof this.options.moveable && (this.options.moveable = this.$element.hasClass("modal-moveable")),
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, d.proxy(function() {
            this.$element.trigger("loaded." + b)
        },
        this))
    };
    c.VERSION = "3.2.0",
    c.TRANSITION_DURATION = 300,
    c.BACKDROP_TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0,
        position: "fit"
    },
    c.prototype.toggle = function(a, h) {
        return this.isShown ? this.hide() : this.show(a, h)
    },
    c.prototype.ajustPosition = function(k) {
        if ("undefined" == typeof k && (k = this.options.position), "undefined" != typeof k) {
            var a = this.$element.find(".modal-dialog"),
            l = Math.max(0, (d(window).height() - a.outerHeight()) / 2),
            m = "fit" == k ? 2 * l / 3 : "center" == k ? l: k;
            if (a.hasClass("modal-moveable")) {
                var h = null,
                j = this.options.rememberPos;
                j && (j === !0 ? h = this.$element.data("modal-pos") : d.zui.store && (h = d.zui.store.pageGet(b + ".rememberPos." + j))),
                h || (h = {
                    left: Math.max(0, (d(window).width() - a.outerWidth()) / 2),
                    top: m
                }),
                a.css(h)
            } else {
                a.css("margin-top", m)
            }
        }
    },
    c.prototype.setMoveale = function() {
        d.fn.draggable || console.error("Moveable modal requires draggable.js.");
        var h = this,
        a = h.options,
        j = h.$element.find(".modal-dialog").removeClass("modal-dragged");
        j.toggleClass("modal-moveable", a.moveable),
        h.$element.data("modal-moveable-setup") || j.draggable({
            container: h.$element,
            handle: ".modal-header",
            before: function() {
                j.css("margin-top", "").addClass("modal-dragged")
            },
            finish: function(e) {
                var k = a.rememberPos;
                k && (h.$element.data("modal-pos", e.pos), d.zui.store && k !== !0 && d.zui.store.pageSet(b + ".rememberPos." + k, e.pos))
            }
        })
    },
    c.prototype.show = function(h, j) {
        var k = this,
        a = d.Event("show." + b, {
            relatedTarget: h
        });
        k.$element.trigger(a),
        k.isShown || a.isDefaultPrevented() || (k.isShown = !0, k.options.moveable && k.setMoveale(), k.checkScrollbar(), k.$body.addClass("modal-open"), k.setScrollbar(), k.escape(), k.$element.on("click.dismiss." + b, '[data-dismiss="modal"]', d.proxy(k.hide, k)), k.backdrop(function() {
            var e = d.support.transition && k.$element.hasClass("fade");
            k.$element.parent().length || k.$element.appendTo(k.$body),
            k.$element.show().scrollTop(0),
            e && k.$element[0].offsetWidth,
            k.$element.addClass("in").attr("aria-hidden", !1),
            k.ajustPosition(j),
            k.enforceFocus();
            var l = d.Event("shown." + b, {
                relatedTarget: h
            });
            e ? k.$element.find(".modal-dialog").one("bsTransitionEnd",
            function() {
                k.$element.trigger("focus").trigger(l)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : k.$element.trigger("focus").trigger(l)
        }))
    },
    c.prototype.hide = function(a) {
        a && a.preventDefault(),
        a = d.Event("hide." + b),
        this.$element.trigger(a),
        this.isShown && !a.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), d(document).off("focusin." + b), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss." + b), d.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", d.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    },
    c.prototype.enforceFocus = function() {
        d(document).off("focusin." + b).on("focusin." + b, d.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        },
        this))
    },
    c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? d(document).on("keydown.dismiss." + b, d.proxy(function(h) {
            if (27 == h.which) {
                var a = d.Event("escaping." + b),
                j = this.$element.triggerHandler(a, "esc");
                if (void 0 != j && !j) {
                    return
                }
                this.hide()
            }
        },
        this)) : this.isShown || d(document).off("keydown.dismiss." + b)
    },
    c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
        this.backdrop(function() {
            a.$element.trigger("hidden." + b)
        })
    },
    c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    },
    c.prototype.backdrop = function(j) {
        var k = this,
        l = this.$element.hasClass("fade") ? "fade": "";
        if (this.isShown && this.options.backdrop) {
            var a = d.support.transition && l;
            if (this.$backdrop = d('<div class="modal-backdrop ' + l + '" />').appendTo(this.$body), this.$element.on("mousedown.dismiss." + b, d.proxy(function(e) {
                e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            },
            this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !j) {
                return
            }
            a ? this.$backdrop.one("bsTransitionEnd", j).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : j()
        } else {
            if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var h = function() {
                    k.removeBackdrop(),
                    j && j()
                };
                d.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", h).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : h()
            } else {
                j && j()
            }
        }
    },
    c.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    },
    c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth)
    },
    c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    },
    c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure",
        this.$body.append(a);
        var h = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a),
        h
    };
    var g = d.fn.modal;
    d.fn.modal = f,
    d.fn.modal.Constructor = c,
    d.fn.modal.noConflict = function() {
        return d.fn.modal = g,
        this
    },
    d(document).on("click." + b + ".data-api", '[data-toggle="modal"]',
    function(e) {
        var k = d(this),
        m = k.attr("href"),
        h = null;
        try {
            h = d(k.attr("data-target") || m && m.replace(/.*(?=#[^\s]+$)/, ""))
        } catch(j) {
            return
        }
        if (h.length) {
            var a = h.data(b) ? "toggle": d.extend({
                remote: !/#/.test(m) && m
            },
            h.data(), k.data());
            k.is("a") && e.preventDefault(),
            h.one("show." + b,
            function(l) {
                l.isDefaultPrevented() || h.one("hidden." + b,
                function() {
                    k.is(":visible") && k.trigger("focus")
                })
            }),
            f.call(h, a, this, k.data("position"))
        }
    })
} (jQuery),
+
function(c) {
    var d = function(a, f) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.init("tooltip", a, f)
    };
    d.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    },
    d.prototype.init = function(m, g, h) {
        this.enabled = !0,
        this.type = m,
        this.$element = c(g),
        this.options = this.getOptions(h);
        for (var p = this.options.trigger.split(" "), q = p.length; q--;) {
            var j = p[q];
            if ("click" == j) {
                this.$element.on("click." + this.type, this.options.selector, c.proxy(this.toggle, this))
            } else {
                if ("manual" != j) {
                    var k = "hover" == j ? "mouseenter": "focus",
                    f = "hover" == j ? "mouseleave": "blur";
                    this.$element.on(k + "." + this.type, this.options.selector, c.proxy(this.enter, this)),
                    this.$element.on(f + "." + this.type, this.options.selector, c.proxy(this.leave, this))
                }
            }
        }
        this.options.selector ? this._options = c.extend({},
        this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    },
    d.prototype.getDefaults = function() {
        return d.DEFAULTS
    },
    d.prototype.getOptions = function(a) {
        return a = c.extend({},
        this.getDefaults(), this.$element.data(), a),
        a.delay && "number" == typeof a.delay && (a.delay = {
            show: a.delay,
            hide: a.delay
        }),
        a
    },
    d.prototype.getDelegateOptions = function() {
        var g = {},
        f = this.getDefaults();
        return this._options && c.each(this._options,
        function(e, a) {
            f[e] != a && (g[e] = a)
        }),
        g
    },
    d.prototype.enter = function(g) {
        var f = g instanceof this.constructor ? g: c(g.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type);
        return clearTimeout(f.timeout),
        f.hoverState = "in",
        f.options.delay && f.options.delay.show ? void(f.timeout = setTimeout(function() {
            "in" == f.hoverState && f.show()
        },
        f.options.delay.show)) : f.show()
    },
    d.prototype.leave = function(g) {
        var f = g instanceof this.constructor ? g: c(g.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type);
        return clearTimeout(f.timeout),
        f.hoverState = "out",
        f.options.delay && f.options.delay.hide ? void(f.timeout = setTimeout(function() {
            "out" == f.hoverState && f.hide()
        },
        f.options.delay.hide)) : f.hide()
    },
    d.prototype.show = function(G) {
        var K = c.Event("show.zui." + this.type);
        if ((G || this.hasContent()) && this.enabled) {
            var C = this;
            if (C.$element.trigger(K), K.isDefaultPrevented()) {
                return
            }
            var y = C.tip();
            C.setContent(G),
            C.options.animation && y.addClass("fade");
            var z = "function" == typeof C.options.placement ? C.options.placement.call(C, y[0], C.$element[0]) : C.options.placement,
            q = /\s?auto?\s?/i,
            w = q.test(z);
            w && (z = z.replace(q, "") || "top"),
            y.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(z),
            C.options.container ? y.appendTo(C.options.container) : y.insertAfter(C.$element);
            var B = C.getPosition(),
            H = y[0].offsetWidth,
            I = y[0].offsetHeight;
            if (w) {
                var x = C.$element.parent(),
                D = z,
                F = document.documentElement.scrollTop || document.body.scrollTop,
                k = "body" == C.options.container ? window.innerWidth: x.outerWidth(),
                E = "body" == C.options.container ? window.innerHeight: x.outerHeight(),
                j = "body" == C.options.container ? 0 : x.offset().left;
                z = "bottom" == z && B.top + B.height + I - F > E ? "top": "top" == z && B.top - F - I < 0 ? "bottom": "right" == z && B.right + H > k ? "left": "left" == z && B.left - H < j ? "right": z,
                y.removeClass(D).addClass(z)
            }
            var A = C.getCalculatedOffset(z, B, H, I);
            C.applyPlacement(A, z);
            var J = function() {
                var a = C.hoverState;
                C.$element.trigger("shown.bs." + C.type),
                C.hoverState = null,
                "out" == a && C.leave(C)
            };
            c.support.transition && C.$tip.hasClass("fade") ? y.one("bsTransitionEnd", J).emulateTransitionEnd(150) : J()
        }
    },
    d.prototype.applyPlacement = function(v, m) {
        var u, k = this.tip(),
        g = k[0].offsetWidth,
        h = k[0].offsetHeight,
        w = parseInt(k.css("margin-top"), 10),
        f = parseInt(k.css("margin-left"), 10);
        isNaN(w) && (w = 0),
        isNaN(f) && (f = 0),
        v.top = v.top + w,
        v.left = v.left + f,
        k.offset(v).addClass("in");
        var j = k[0].offsetWidth,
        p = k[0].offsetHeight;
        if ("top" == m && p != h && (u = !0, v.top = v.top + h - p), /bottom|top/.test(m)) {
            var q = 0;
            v.left < 0 && (q = v.left * -2, v.left = 0, k.offset(v), j = k[0].offsetWidth, p = k[0].offsetHeight),
            this.replaceArrow(q - g + j, j, "left")
        } else {
            this.replaceArrow(p - h, p, "top")
        }
        u && k.offset(v)
    },
    d.prototype.replaceArrow = function(g, h, f) {
        this.arrow().css(f, g ? 50 * (1 - g / h) + "%": "")
    },
    d.prototype.setContent = function(g) {
        var h = this.tip(),
        f = g || this.getTitle();
        this.options.tipId && h.attr("id", this.options.tipId),
        this.options.tipClass && h.addClass(this.options.tipClass),
        h.find(".tooltip-inner")[this.options.html ? "html": "text"](f),
        h.removeClass("fade in top bottom left right")
    },
    d.prototype.hide = function() {
        function h() {
            "in" != f.hoverState && g.detach()
        }
        var f = this,
        g = this.tip(),
        j = c.Event("hide.zui." + this.type);
        if (this.$element.trigger(j), !j.isDefaultPrevented()) {
            return g.removeClass("in"),
            c.support.transition && this.$tip.hasClass("fade") ? g.one(c.support.transition.end, h).emulateTransitionEnd(150) : h(),
            this.$element.trigger("hidden.zui." + this.type),
            this
        }
    },
    d.prototype.fixTitle = function() {
        var a = this.$element; (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    },
    d.prototype.hasContent = function() {
        return this.getTitle()
    },
    d.prototype.getPosition = function() {
        var a = this.$element[0];
        return c.extend({},
        "function" == typeof a.getBoundingClientRect ? a.getBoundingClientRect() : {
            width: a.offsetWidth,
            height: a.offsetHeight
        },
        this.$element.offset())
    },
    d.prototype.getCalculatedOffset = function(h, j, f, g) {
        return "bottom" == h ? {
            top: j.top + j.height,
            left: j.left + j.width / 2 - f / 2
        }: "top" == h ? {
            top: j.top - g,
            left: j.left + j.width / 2 - f / 2
        }: "left" == h ? {
            top: j.top + j.height / 2 - g / 2,
            left: j.left - f
        }: {
            top: j.top + j.height / 2 - g / 2,
            left: j.left + j.width
        }
    },
    d.prototype.getTitle = function() {
        var g, h = this.$element,
        f = this.options;
        return g = h.attr("data-original-title") || ("function" == typeof f.title ? f.title.call(h[0]) : f.title)
    },
    d.prototype.tip = function() {
        return this.$tip = this.$tip || c(this.options.template)
    },
    d.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },
    d.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    },
    d.prototype.enable = function() {
        this.enabled = !0
    },
    d.prototype.disable = function() {
        this.enabled = !1
    },
    d.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    },
    d.prototype.toggle = function(g) {
        var f = g ? c(g.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type) : this;
        f.tip().hasClass("in") ? f.leave(f) : f.enter(f)
    },
    d.prototype.destroy = function() {
        this.hide().$element.off("." + this.type).removeData("zui." + this.type)
    };
    var b = c.fn.tooltip;
    c.fn.tooltip = function(e, f) {
        return this.each(function() {
            var g = c(this),
            h = g.data("zui.tooltip"),
            a = "object" == typeof e && e;
            h || g.data("zui.tooltip", h = new d(this, a)),
            "string" == typeof e && h[e](f)
        })
    },
    c.fn.tooltip.Constructor = d,
    c.fn.tooltip.noConflict = function() {
        return c.fn.tooltip = b,
        this
    }
} (window.jQuery),
+
function(c) {
    var d = function(a, f) {
        this.init("popover", a, f)
    };
    if (!c.fn.tooltip) {
        throw new Error("Popover requires tooltip.js")
    }
    d.DEFAULTS = c.extend({},
    c.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    d.prototype = c.extend({},
    c.fn.tooltip.Constructor.prototype),
    d.prototype.constructor = d,
    d.prototype.getDefaults = function() {
        return d.DEFAULTS
    },
    d.prototype.setContent = function() {
        var h = this.tip(),
        j = this.getTarget();
        if (j) {
            return j.find(".arrow").length < 1 && h.addClass("no-arrow"),
            void h.html(j.html())
        }
        var f = this.getTitle(),
        g = this.getContent();
        h.find(".popover-title")[this.options.html ? "html": "text"](f),
        h.find(".popover-content")[this.options.html ? "html": "text"](g),
        h.removeClass("fade top bottom left right in"),
        this.options.tipId && h.attr("id", this.options.tipId),
        this.options.tipClass && h.addClass(this.options.tipClass),
        h.find(".popover-title").html() || h.find(".popover-title").hide()
    },
    d.prototype.hasContent = function() {
        return this.getTarget() || this.getTitle() || this.getContent()
    },
    d.prototype.getContent = function() {
        var a = this.$element,
        f = this.options;
        return a.attr("data-content") || ("function" == typeof f.content ? f.content.call(a[0]) : f.content)
    },
    d.prototype.getTarget = function() {
        var h = this.$element,
        f = this.options,
        g = h.attr("data-target") || ("function" == typeof f.target ? f.target.call(h[0]) : f.target);
        return !! g && ("$next" == g ? h.next(".popover") : c(g))
    },
    d.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    },
    d.prototype.tip = function() {
        return this.$tip || (this.$tip = c(this.options.template)),
        this.$tip
    };
    var b = c.fn.popover;
    c.fn.popover = function(e) {
        return this.each(function() {
            var a = c(this),
            f = a.data("zui.popover"),
            g = "object" == typeof e && e;
            f || a.data("zui.popover", f = new d(this, g)),
            "string" == typeof e && f[e]()
        })
    },
    c.fn.popover.Constructor = d,
    c.fn.popover.noConflict = function() {
        return c.fn.popover = b,
        this
    }
} (window.jQuery),
function(d, g, b) {
    var c = "zui.droppable",
    h = {
        target: ".droppable-target",
        deviation: 5,
        sensorOffsetX: 0,
        sensorOffsetY: 0
    },
    j = 0,
    f = function(m, k) {
        var l = this;
        l.id = j++,
        l.$ = d(m),
        l.options = d.extend({},
        h, l.$.data(), k),
        l.init()
    };
    f.DEFAULTS = h,
    f.NAME = c,
    f.prototype.trigger = function(l, k) {
        return d.zui.callEvent(this.options[l], k, this)
    },
    f.prototype.init = function() {
        var ab, ac, W, Y, ae, ak, al, aa, ah, aj, R, ai, Q, ad = this,
        am = ad.$,
        J = ad.options,
        N = J.deviation,
        X = "." + c + "." + ad.id,
        K = "mousedown" + X,
        q = "mouseup" + X,
        af = "mousemove" + X,
        a = J.selector,
        U = J.handle,
        I = J.flex,
        e = J.container,
        V = J.canMoveHere,
        H = am,
        Z = !1,
        F = e ? d(J.container).first() : a ? am: d("body"),
        B = function(o) {
            if (Z && (R = {
                left: o.pageX,
                top: o.pageY
            },
            !(b.abs(R.left - aa.left) < N && b.abs(R.top - aa.top) < N))) {
                if (null === W) {
                    var n = F.css("position");
                    "absolute" != n && "relative" != n && "fixed" != n && (ak = n, F.css("position", "relative")),
                    W = H.clone().removeClass("drag-from").addClass("drag-shadow").css({
                        position: "absolute",
                        width: H.outerWidth(),
                        transition: "none"
                    }).appendTo(F),
                    H.addClass("dragging"),
                    ad.trigger("start", {
                        event: o,
                        element: H
                    })
                }
                var r = {
                    left: R.left - aj.left,
                    top: R.top - aj.top
                },
                m = {
                    left: r.left - ah.left,
                    top: r.top - ah.top
                };
                W.css(m),
                d.extend(ai, R);
                var l = !1;
                Y = !1,
                I || ab.removeClass("drop-to");
                var p = null;
                if (ab.each(function() {
                    var x = d(this),
                    u = x.offset(),
                    v = x.outerWidth(),
                    y = x.outerHeight(),
                    z = u.left + J.sensorOffsetX,
                    w = u.top + J.sensorOffsetY;
                    if (R.left > z && R.top > w && R.left < z + v && R.top < w + y && (p && p.removeClass("drop-to"), p = x, !J.nested)) {
                        return ! 1
                    }
                }), p) {
                    Y = !0;
                    var k = p.data("id");
                    H.data("id") != k && (ae = !1),
                    (null === ac || ac.data("id") !== k && !ae) && (l = !0),
                    ac = p,
                    I && ab.removeClass("drop-to"),
                    ac.addClass("drop-to")
                }
                I ? null !== ac && ac.length && (Y = !0) : (H.toggleClass("drop-in", Y), W.toggleClass("drop-in", Y)),
                V && V(H, ac) === !1 || ad.trigger("drag", {
                    event: o,
                    isIn: Y,
                    target: ac,
                    element: H,
                    isNew: l,
                    selfTarget: ae,
                    clickOffset: aj,
                    offset: r,
                    position: {
                        left: r.left - ah.left,
                        top: r.top - ah.top
                    },
                    mouseOffset: R
                }),
                o.preventDefault()
            }
        },
        G = function(l) {
            if (d(g).off(X), clearTimeout(Q), Z) {
                if (Z = !1, ak && F.css("position", ak), null === W) {
                    return H.removeClass("drag-from"),
                    void ad.trigger("always", {
                        event: l,
                        cancel: !0
                    })
                }
                Y || (ac = null);
                var m = !0;
                R = l ? {
                    left: l.pageX,
                    top: l.pageY
                }: ai;
                var o = {
                    left: R.left - aj.left,
                    top: R.top - aj.top
                },
                n = {
                    left: R.left - ai.left,
                    top: R.top - ai.top
                };
                ai.left = R.left,
                ai.top = R.top;
                var k = {
                    event: l,
                    isIn: Y,
                    target: ac,
                    element: H,
                    isNew: !ae && null !== ac,
                    selfTarget: ae,
                    offset: o,
                    mouseOffset: R,
                    position: {
                        left: o.left - ah.left,
                        top: o.top - ah.top
                    },
                    lastMouseOffset: ai,
                    moveOffset: n
                };
                m = ad.trigger("beforeDrop", k),
                m && Y && ad.trigger("drop", k),
                ab.removeClass("drop-to"),
                H.removeClass("dragging").removeClass("drag-from"),
                W.remove(),
                W = null,
                ad.trigger("finish", k),
                ad.trigger("always", k),
                l && l.preventDefault()
            }
        },
        ag = function(k) {
            var m = d.zui.getMouseButtonCode(J.mouseButton);
            if (! (m > -1 && k.button !== m)) {
                var l = d(this);
                a && (H = U ? l.closest(a) : l),
                H.hasClass("drag-shadow") || J.before && J.before({
                    event: k,
                    element: H
                }) === !1 || (Z = !0, ab = d.isFunction(J.target) ? J.target(am) : F.find(J.target), ac = null, W = null, Y = !1, ae = !0, ak = null, al = H.offset(), ah = F.offset(), aa = {
                    left: k.pageX,
                    top: k.pageY
                },
                ai = d.extend({},
                aa), aj = {
                    left: aa.left - al.left,
                    top: aa.top - al.top
                },
                H.addClass("drag-from"), d(g).on(af, B).on(q, G), Q = setTimeout(function() {
                    d(g).on(K, G)
                },
                10), k.preventDefault())
            }
        };
        U ? am.on(K, U, ag) : a ? am.on(K, a, ag) : am.on(K, ag)
    },
    f.prototype.destroy = function() {
        var e = "." + c + "." + this.id;
        this.$.off(e),
        d(g).off(e),
        this.$.data(c, null)
    },
    f.prototype.reset = function() {
        this.destroy(),
        this.init()
    },
    d.fn.droppable = function(a) {
        return this.each(function() {
            var e = d(this),
            k = e.data(c),
            l = "object" == typeof a && a;
            k || e.data(c, k = new f(this, l)),
            "string" == typeof a && k[a]()
        })
    },
    d.fn.droppable.Constructor = f
} (jQuery, document, Math),
+
function(d, g, b) {
    if (!d.fn.droppable) {
        return void console.error("Sortable requires droppable.js")
    }
    var c = "zui.sortable",
    h = {
        selector: "li,div",
        dragCssClass: "invisible",
        sortingClass: "sortable-sorting"
    },
    j = "order",
    f = function(m, k) {
        var l = this;
        l.$ = d(m),
        l.options = d.extend({},
        h, l.$.data(), k),
        l.init()
    };
    f.DEFAULTS = h,
    f.NAME = c,
    f.prototype.init = function() {
        var u = this,
        m = u.$,
        n = u.options,
        w = n.selector,
        p = n.sortingClass,
        q = n.dragCssClass,
        k = n.reverse,
        v = function(e) {
            e = e || u.getItems(1);
            var l = [];
            e.each(function() {
                var a = d(this).data(j);
                "number" == typeof a && l.push(a)
            }),
            l.sort(function(a, o) {
                return a - o
            });
            for (var r = e.length; l.length < r;) {
                l.push(l.length ? l[l.length - 1] + 1 : 0)
            }
            k && l.reverse(),
            e.each(function(a) {
                d(this).data(j, l[a]).attr("data-" + j, l[a])
            })
        };
        v(),
        m.droppable({
            handle: n.trigger,
            target: w,
            selector: w,
            container: m,
            always: n.always,
            flex: !0,
            lazy: n.lazy,
            canMoveHere: n.canMoveHere,
            nested: n.nested,
            before: n.before,
            mouseButton: n.mouseButton,
            start: function(a) {
                q && a.element.addClass(q),
                u.trigger("start", a)
            },
            drag: function(e) {
                if (m.addClass(p), e.isIn) {
                    var a = e.element,
                    x = e.target,
                    l = a.data(j),
                    y = x.data(j);
                    if (l == y) {
                        return
                    }
                    l > y ? x[k ? "after": "before"](a) : x[k ? "before": "after"](a);
                    var s = u.getItems(1);
                    v(s),
                    u.trigger(j, {
                        list: s,
                        element: a
                    })
                }
            },
            finish: function(a) {
                q && a.element && a.element.removeClass(q),
                m.removeClass(p),
                u.trigger("finish", {
                    list: u.getItems(1),
                    element: a.element
                })
            }
        })
    },
    f.prototype.destroy = function() {
        this.$.droppable("destroy")
    },
    f.prototype.reset = function() {
        this.destroy(),
        this.init()
    },
    f.prototype.getItems = function(l) {
        var k = this.$.children(this.options.selector).not(".drag-shadow");
        return l ? k: k.map(function() {
            var a = d(this);
            return {
                item: a,
                order: a.data("order")
            }
        })
    },
    f.prototype.trigger = function(l, k) {
        return d.zui.callEvent(this.options[l], k, this)
    },
    d.fn.sortable = function(a) {
        return this.each(function() {
            var e = d(this),
            k = e.data(c),
            l = "object" == typeof a && a;
            k ? "object" == typeof a && k.reset() : e.data(c, k = new f(this, l)),
            "string" == typeof a && k[a]()
        })
    },
    d.fn.sortable.Constructor = f
} (jQuery, window, document),
/*! bootbox.js v4.4.0 http://bootboxjs.com/license.txt */
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.bootbox = b(a.jQuery)
} (this,
function t(A, D) {
    function w(a) {
        var c = E[F.locale];
        return c ? c[a] : E.en[a]
    }
    function k(e, c, d) {
        e.stopPropagation(),
        e.preventDefault();
        var f = A.isFunction(d) && d.call(c, e) === !1;
        f || c.modal("hide")
    }
    function m(d) {
        var f, c = 0;
        for (f in d) {
            c++
        }
        return c
    }
    function G(e, c) {
        var d = 0;
        A.each(e,
        function(a, f) {
            c(a, f, d++)
        })
    }
    function b(e) {
        var c, d;
        if ("object" != typeof e) {
            throw new Error("Please supply an object of options")
        }
        if (!e.message) {
            throw new Error("Please specify a message")
        }
        return e = A.extend({},
        F, e),
        e.buttons || (e.buttons = {}),
        c = e.buttons,
        d = m(c),
        G(c,
        function(a, f, g) {
            if (A.isFunction(f) && (f = c[a] = {
                callback: f
            }), "object" !== A.type(f)) {
                throw new Error("button with key " + a + " must be an object")
            }
            f.label || (f.label = a),
            f.className || (2 === d && ("ok" === a || "confirm" === a) || 1 === d ? f.className = "btn-primary": f.className = "btn-default")
        }),
        e
    }
    function q(f, g) {
        var c = f.length,
        d = {};
        if (c < 1 || c > 2) {
            throw new Error("Invalid argument length")
        }
        return 2 === c || "string" == typeof f[0] ? (d[g[0]] = f[0], d[g[1]] = f[1]) : d = f[0],
        d
    }
    function B(e, c, d) {
        return A.extend(!0, {},
        e, q(c, d))
    }
    function C(f, g, c, d) {
        var h = {
            className: "bootbox-" + f,
            buttons: j.apply(null, g)
        };
        return x(B(h, d, c), g)
    }
    function j() {
        for (var d = {},
        g = 0,
        c = arguments.length; g < c; g++) {
            var h = arguments[g],
            l = h.toLowerCase(),
            f = h.toUpperCase();
            d[l] = {
                label: w(f)
            }
        }
        return d
    }
    function x(c, d) {
        var a = {};
        return G(d,
        function(f, g) {
            a[g] = !0
        }),
        G(c.buttons,
        function(e) {
            if (a[e] === D) {
                throw new Error("button key " + e + " is not allowed (options are " + d.join("\n") + ")")
            }
        }),
        c
    }
    var z = {
        dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",
        header: "<div class='modal-header'><h4 class='modal-title'></h4></div>",
        footer: "<div class='modal-footer'></div>",
        closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
        form: "<form class='bootbox-form'></form>",
        inputs: {
            text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
            textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
            email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
            select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
            checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
            date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
            time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
            number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
            password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
        }
    },
    F = {
        locale: A.zui && A.zui.clientLang ? A.zui.clientLang() : "zh_cn",
        backdrop: "static",
        animate: !0,
        className: null,
        closeButton: !0,
        show: !0,
        container: "body"
    },
    y = {};
    y.alert = function() {
        var a;
        if (a = C("alert", ["ok"], ["message", "callback"], arguments), a.callback && !A.isFunction(a.callback)) {
            throw new Error("alert requires callback property to be a function when provided")
        }
        return a.buttons.ok.callback = a.onEscape = function() {
            return ! A.isFunction(a.callback) || a.callback.call(this)
        },
        y.dialog(a)
    },
    y.confirm = function() {
        var a;
        if (a = C("confirm", ["confirm", "cancel"], ["message", "callback"], arguments), a.buttons.cancel.callback = a.onEscape = function() {
            return a.callback.call(this, !1)
        },
        a.buttons.confirm.callback = function() {
            return a.callback.call(this, !0)
        },
        !A.isFunction(a.callback)) {
            throw new Error("confirm requires a callback")
        }
        return y.dialog(a)
    },
    y.prompt = function() {
        var H, g, d, e, a, f, h;
        if (e = A(z.form), g = {
            className: "bootbox-prompt",
            buttons: j("cancel", "confirm"),
            value: "",
            inputType: "text"
        },
        H = x(B(g, arguments, ["title", "callback"]), ["confirm", "cancel"]), f = H.show === D || H.show, H.message = e, H.buttons.cancel.callback = H.onEscape = function() {
            return H.callback.call(this, null)
        },
        H.buttons.confirm.callback = function() {
            var c;
            switch (H.inputType) {
            case "text":
            case "textarea":
            case "email":
            case "select":
            case "date":
            case "time":
            case "number":
            case "password":
                c = a.val();
                break;
            case "checkbox":
                var l = a.find("input:checked");
                c = [],
                G(l,
                function(o, n) {
                    c.push(A(n).val())
                })
            }
            return H.callback.call(this, c)
        },
        H.show = !1, !H.title) {
            throw new Error("prompt requires a title")
        }
        if (!A.isFunction(H.callback)) {
            throw new Error("prompt requires a callback")
        }
        if (!z.inputs[H.inputType]) {
            throw new Error("invalid prompt type")
        }
        switch (a = A(z.inputs[H.inputType]), H.inputType) {
        case "text":
        case "textarea":
        case "email":
        case "date":
        case "time":
        case "number":
        case "password":
            a.val(H.value);
            break;
        case "select":
            var s = {};
            if (h = H.inputOptions || [], !A.isArray(h)) {
                throw new Error("Please pass an array of input options")
            }
            if (!h.length) {
                throw new Error("prompt with select requires options")
            }
            G(h,
            function(l, c) {
                var n = a;
                if (c.value === D || c.text === D) {
                    throw new Error("given options in wrong format")
                }
                c.group && (s[c.group] || (s[c.group] = A("<optgroup/>").attr("label", c.group)), n = s[c.group]),
                n.append("<option value='" + c.value + "'>" + c.text + "</option>")
            }),
            G(s,
            function(c, l) {
                a.append(l)
            }),
            a.val(H.value);
            break;
        case "checkbox":
            var p = A.isArray(H.value) ? H.value: [H.value];
            if (h = H.inputOptions || [], !h.length) {
                throw new Error("prompt with checkbox requires options")
            }
            if (!h[0].value || !h[0].text) {
                throw new Error("given options in wrong format")
            }
            a = A("<div/>"),
            G(h,
            function(c, l) {
                var n = A(z.inputs[H.inputType]);
                n.find("input").attr("value", l.value),
                n.find("label").append(l.text),
                G(p,
                function(o, r) {
                    r === l.value && n.find("input").prop("checked", !0)
                }),
                a.append(n)
            })
        }
        return H.placeholder && a.attr("placeholder", H.placeholder),
        H.pattern && a.attr("pattern", H.pattern),
        H.maxlength && a.attr("maxlength", H.maxlength),
        e.append(a),
        e.on("submit",
        function(c) {
            c.preventDefault(),
            c.stopPropagation(),
            d.find(".btn-primary").click()
        }),
        d = y.dialog(H),
        d.off("shown.zui.modal"),
        d.on("shown.zui.modal",
        function() {
            a.focus()
        }),
        f === !0 && d.modal("show"),
        d
    },
    y.dialog = function(f) {
        f = b(f);
        var e = A(z.dialog),
        u = e.find(".modal-dialog"),
        a = e.find(".modal-body"),
        r = f.buttons,
        s = "",
        o = {
            onEscape: f.onEscape
        };
        if (A.fn.modal === D) {
            throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.")
        }
        if (G(r,
        function(c, d) {
            s += "<button data-bb-handler='" + c + "' type='button' class='btn " + d.className + "'>" + d.label + "</button>",
            o[c] = d.callback
        }), a.find(".bootbox-body").html(f.message), f.animate === !0 && e.addClass("fade"), f.className && e.addClass(f.className), "large" === f.size ? u.addClass("modal-lg") : "small" === f.size && u.addClass("modal-sm"), f.title && a.before(z.header), f.closeButton) {
            var g = A(z.closeButton);
            f.title ? e.find(".modal-header").prepend(g) : g.css("margin-top", "-10px").prependTo(a)
        }
        return f.title && e.find(".modal-title").html(f.title),
        s.length && (a.after(z.footer), e.find(".modal-footer").html(s)),
        e.on("hidden.zui.modal",
        function(c) {
            c.target === this && e.remove()
        }),
        e.on("shown.zui.modal",
        function() {
            e.find(".btn-primary:first").focus()
        }),
        "static" !== f.backdrop && e.on("click.dismiss.zui.modal",
        function(c) {
            e.children(".modal-backdrop").length && (c.currentTarget = e.children(".modal-backdrop").get(0)),
            c.target === c.currentTarget && e.trigger("escape.close.bb")
        }),
        e.on("escape.close.bb",
        function(c) {
            o.onEscape && k(c, e, o.onEscape)
        }),
        e.on("click", ".modal-footer button",
        function(d) {
            var c = A(this).data("bb-handler");
            k(d, e, o[c])
        }),
        e.on("click", ".bootbox-close-button",
        function(c) {
            k(c, e, o.onEscape)
        }),
        e.on("keyup",
        function(c) {
            27 === c.which && e.trigger("escape.close.bb")
        }),
        A(f.container).append(e),
        e.modal({
            backdrop: !!f.backdrop && "static",
            keyboard: !1,
            show: !1
        }),
        f.show && e.modal("show"),
        e
    },
    y.setDefaults = function() {
        var a = {};
        2 === arguments.length ? a[arguments[0]] = arguments[1] : a = arguments[0],
        A.extend(F, a)
    },
    y.hideAll = function() {
        return A(".bootbox").modal("hide"),
        y
    };
    var E = {
        en: {
            OK: "OK",
            CANCEL: "Cancel",
            CONFIRM: "OK"
        },
        zh_cn: {
            OK: "确认",
            CANCEL: "取消",
            CONFIRM: "确认"
        },
        zh_tw: {
            OK: "確認",
            CANCEL: "取消",
            CONFIRM: "確認"
        }
    };
    return y.addLocale = function(d, c) {
        return A.each(["OK", "CANCEL", "CONFIRM"],
        function(a, f) {
            if (!c[f]) {
                throw new Error("Please supply a translation for '" + f + "'")
            }
        }),
        E[d] = {
            OK: c.OK,
            CANCEL: c.CANCEL,
            CONFIRM: c.CONFIRM
        },
        y
    },
    y.removeLocale = function(a) {
        return delete E[a],
        y
    },
    y.setLocale = function(a) {
        return y.setDefaults("locale", a)
    },
    y.init = function(c) {
        return t(c || A)
    },
    y
}),
function(d, f) {
    var b = "zui.draggable",
    c = {
        container: "body",
        move: !0
    },
    g = 0,
    h = function(k, j) {
        var l = this;
        l.$ = d(k),
        l.id = g++,
        l.options = d.extend({},
        c, l.$.data(), j),
        l.init()
    };
    h.DEFAULTS = c,
    h.NAME = b,
    h.prototype.init = function() {
        var J, F, G, A, D, I = this,
        N = I.$,
        O = "before",
        E = "drag",
        K = "finish",
        M = "." + b + "." + I.id,
        z = "mousedown" + M,
        L = "mouseup" + M,
        q = "mousemove" + M,
        H = I.options,
        P = H.selector,
        e = H.handle,
        k = N,
        B = function(m) {
            var n = m.pageX,
            l = m.pageY;
            D = !0;
            var p = {
                left: n - G.x,
                top: l - G.y
            };
            k.removeClass("drag-ready").addClass("dragging"),
            H.move && k.css(p),
            H[E] && H[E]({
                event: m,
                element: k,
                startOffset: G,
                pos: p,
                offset: {
                    x: n - J.x,
                    y: l - J.y
                },
                smallOffset: {
                    x: n - A.x,
                    y: l - A.y
                }
            }),
            A.x = n,
            A.y = l,
            H.stopPropagation && m.stopPropagation()
        },
        j = function(l) {
            if (d(f).off(M), !D) {
                return void k.removeClass("drag-ready")
            }
            var m = {
                left: l.pageX - G.x,
                top: l.pageY - G.y
            };
            k.removeClass("drag-ready dragging"),
            H.move && k.css(m),
            H[K] && H[K]({
                event: l,
                element: k,
                startOffset: G,
                pos: m,
                offset: {
                    x: l.pageX - J.x,
                    y: l.pageY - J.y
                },
                smallOffset: {
                    x: l.pageX - A.x,
                    y: l.pageY - A.y
                }
            }),
            l.preventDefault(),
            H.stopPropagation && l.stopPropagation()
        },
        a = function(n) {
            var m = d.zui.getMouseButtonCode(H.mouseButton);
            if (! (m > -1 && n.button !== m)) {
                var u = d(this);
                if (P && (k = e ? u.closest(P) : u), H[O]) {
                    var s = H[O]({
                        event: n,
                        element: k
                    });
                    if (s === !1) {
                        return
                    }
                }
                var o = d(H.container),
                r = k.offset();
                F = o.offset(),
                J = {
                    x: n.pageX,
                    y: n.pageY
                },
                G = {
                    x: n.pageX - r.left + F.left,
                    y: n.pageY - r.top + F.top
                },
                A = d.extend({},
                J),
                D = !1,
                k.addClass("drag-ready"),
                n.preventDefault(),
                H.stopPropagation && n.stopPropagation(),
                d(f).on(q, B).on(L, j)
            }
        };
        e ? N.on(z, e, a) : P ? N.on(z, P, a) : N.on(z, a)
    },
    h.prototype.destroy = function() {
        var a = "." + b + "." + this.id;
        this.$.off(a),
        d(f).off(a),
        this.$.data(b, null)
    },
    d.fn.draggable = function(a) {
        return this.each(function() {
            var e = d(this),
            k = e.data(b),
            j = "object" == typeof a && a;
            k || e.data(b, k = new h(this, j)),
            "string" == typeof a && k[a]()
        })
    },
    d.fn.draggable.Constructor = h
} (jQuery, document),
function(d) {
    function g(m, k) {
        if (m === !1) {
            return m
        }
        if (!m) {
            return k
        }
        m === !0 ? m = {
            add: !0,
            "delete": !0,
            edit: !0,
            sort: !0
        }: "string" == typeof m && (m = m.split(","));
        var l;
        return d.isArray(m) && (l = {},
        d.each(m,
        function(o, n) {
            d.isPlainObject(n) ? l[n.action] = n: l[n] = !0
        }), m = l),
        d.isPlainObject(m) && (l = {},
        d.each(m,
        function(o, n) {
            n ? l[o] = d.extend({
                type: o
            },
            f[o], d.isPlainObject(n) ? n: null) : l[o] = !1
        }), m = l),
        k ? d.extend(!0, {},
        k, m) : m
    }
    function b(m, k, l) {
        return k = k || m.type,
        d(l || m.template).addClass("tree-action").attr(d.extend({
            "data-type": k,
            title: m.title || ""
        },
        m.attr)).data("action", m)
    }
    var c = "zui.tree",
    h = 0,
    j = function(l, k) {
        this.name = c,
        this.$ = d(l),
        this.getOptions(k),
        this._init()
    },
    f = {
        sort: {
            template: '<a class="sort-handler" href="javascript:;"><i class="icon icon-move"></i></a>'
        },
        add: {
            template: '<a href="javascript:;"><i class="icon icon-plus"></i></a>'
        },
        edit: {
            template: '<a href="javascript:;"><i class="icon icon-pencil"></i></a>'
        },
        "delete": {
            template: '<a href="javascript:;"><i class="icon icon-trash"></i></a>'
        }
    };
    j.DEFAULTS = {
        animate: null,
        initialState: "normal",
        toggleTemplate: '<i class="list-toggle icon"></i>'
    },
    j.prototype.add = function(v, x, u, m, p) {
        var y, k = d(v),
        q = this.options;
        if (k.is("li") ? (y = k.children("ul"), y.length || (y = d("<ul/>"), k.append(y), this._initList(y, k))) : y = k, y) {
            var w = this;
            d.isArray(x) || (x = [x]),
            d.each(x,
            function(s, l) {
                var r = d("<li/>").data(l).appendTo(y);
                void 0 !== l.id && r.attr("data-id", l.id);
                var z = q.itemWrapper ? d(q.itemWrapper === !0 ? '<div class="tree-item-wrapper"/>': q.itemWrapper).appendTo(r) : r;
                if (l.html) {
                    z.html(l.html)
                } else {
                    if (d.isFunction(w.options.itemCreator)) {
                        var A = w.options.itemCreator(r, l);
                        A !== !0 && A !== !1 && z.html(A)
                    } else {
                        l.url ? z.append(d("<a/>", {
                            href: l.url
                        }).text(l.title || l.name)) : z.append(d("<span/>").text(l.title || l.name))
                    }
                }
                w._initItem(r, l.idx || s, y, l),
                l.children && l.children.length && w.add(r, l.children)
            }),
            this._initList(y),
            u && !y.hasClass("tree") && w.expand(y.parent("li"), m, p)
        }
    },
    j.prototype.reload = function(l) {
        var k = this;
        l && (k.$.empty(), k.add(k.$, l)),
        k.isPreserve && k.store.time && k.$.find("li:not(.tree-action-item)").each(function() {
            var a = d(this);
            k[k.store[a.data("id")] ? "expand": "collapse"](a, !0, !0)
        })
    },
    j.prototype._initList = function(e, q, v, k) {
        var m = this;
        e.hasClass("tree") ? (v = 0, q = null) : (q = (q || e.closest("li")).addClass("has-list"), q.find(".list-toggle").length || q.prepend(this.options.toggleTemplate), v = v || q.data("idx"));
        var a = e.attr("data-idx", v || 0).children("li:not(.tree-action-item)").each(function(l) {
            m._initItem(d(this), l + 1, e)
        });
        1 !== a.length || a.find("ul").length || a.addClass("tree-single-item"),
        k = k || (q ? q.data() : null);
        var p = g(k ? k.actions: null, this.actions);
        if (p) {
            if (p.add && p.add.templateInList !== !1) {
                var u = e.children("li.tree-action-item");
                u.length ? u.detach().appendTo(e) : d('<li class="tree-action-item"/>').append(b(p.add, "add", p.add.templateInList)).appendTo(e)
            }
            p.sort && e.sortable(d.extend({
                dragCssClass: "tree-drag-holder",
                trigger: ".sort-handler",
                selector: "li:not(.tree-action-item)",
                finish: function(l) {
                    m.callEvent("action", {
                        action: p.sort,
                        $list: e,
                        target: l.target,
                        item: k
                    })
                }
            },
            p.sort.options, d.isPlainObject(this.options.sortable) ? this.options.sortable: null))
        }
        q && (q.hasClass("open") || k && k.open) && q.addClass("open in")
    },
    j.prototype._initItem = function(u, k, m, x) {
        if (void 0 === k) {
            var a = u.prev("li");
            k = a.length ? a.data("idx") + 1 : 1
        }
        if (m = m || u.closest("ul"), u.attr("data-idx", k).removeClass("tree-single-item"), !u.data("id")) {
            var q = k;
            m.hasClass("tree") || (q = m.parent("li").data("id") + "-" + q),
            u.attr("data-id", q)
        }
        x = x || u.data();
        var v = g(x.actions, this.actions);
        if (v) {
            var w = u.find(".tree-actions");
            w.length || (w = d('<div class="tree-actions"/>').appendTo(this.options.itemWrapper ? u.find(".tree-item-wrapper") : u), d.each(v,
            function(l, n) {
                n && w.append(b(n, l))
            }))
        }
        var e = u.children("ul");
        e.length && this._initList(e, u, k, x)
    },
    j.prototype._init = function() {
        var e = this.options,
        m = this;
        this.actions = g(e.actions),
        this.$.addClass("tree"),
        e.animate && this.$.addClass("tree-animate"),
        this._initList(this.$);
        var k = e.initialState,
        l = d.zui && d.zui.store && d.zui.store.enable;
        l && (this.selector = c + "::" + (e.name || "") + "#" + (this.$.attr("id") || h++), this.store = d.zui.store[e.name ? "get": "pageGet"](this.selector, {})),
        "preserve" === k && (l ? this.isPreserve = !0 : this.options.initialState = k = "normal"),
        this.reload(e.data),
        l && (this.isPreserve = !0),
        "expand" === k ? this.expand() : "collapse" === k && this.collapse(),
        this.$.on("click", '.list-toggle,a[href="#"],.tree-toggle',
        function(p) {
            var n = d(this),
            o = n.parent("li");
            m.callEvent("hit", {
                target: o,
                item: o.data()
            }),
            m.toggle(o),
            n.is("a") && p.preventDefault()
        }).on("click", ".tree-action",
        function() {
            var p = d(this),
            n = p.data();
            if (n.action && (n = n.action), "sort" !== n.type) {
                var o = p.closest("li:not(.tree-action-item)");
                m.callEvent("action", {
                    action: n,
                    target: this,
                    $item: o,
                    item: o.data()
                })
            }
        })
    },
    j.prototype.preserve = function(m, k, l) {
        if (this.isPreserve) {
            if (m) {
                k = k || m.data("id"),
                l = void 0 === l && m.hasClass("open"),
                l ? this.store[k] = l: delete this.store[k],
                this.store.time = (new Date).getTime(),
                d.zui.store[this.options.name ? "set": "pageSet"](this.selector, this.store)
            } else {
                var n = this;
                this.store = {},
                this.$.find("li").each(function() {
                    n.preserve(d(this))
                })
            }
        }
    },
    j.prototype.expand = function(l, m, k) {
        l ? (l.addClass("open"), !m && this.options.animate ? setTimeout(function() {
            l.addClass("in")
        },
        10) : l.addClass("in")) : l = this.$.find("li.has-list").addClass("open in"),
        k || this.preserve(l),
        this.callEvent("expand", l, this)
    },
    j.prototype.show = function(m, k, l) {
        var n = this;
        m.each(function() {
            var o = d(this);
            if (n.expand(o, k, l), o) {
                for (var p = o.parent("ul"); p && p.length && !p.hasClass("tree");) {
                    var a = p.parent("li");
                    a.length ? (n.expand(a, k, l), p = a.parent("ul")) : p = !1
                }
            }
        })
    },
    j.prototype.collapse = function(l, m, k) {
        l ? !m && this.options.animate ? (l.removeClass("in"), setTimeout(function() {
            l.removeClass("open")
        },
        300)) : l.removeClass("open in") : l = this.$.find("li.has-list").removeClass("open in"),
        k || this.preserve(l),
        this.callEvent("collapse", l, this)
    },
    j.prototype.toggle = function(a) {
        var k = a && a.hasClass("open") || a === !1 || void 0 === a && this.$.find("li.has-list.open").length;
        this[k ? "collapse": "expand"](a)
    },
    j.prototype.getOptions = function(a) {
        this.options = d.extend({},
        j.DEFAULTS, this.$.data(), a),
        null === this.options.animate && this.$.hasClass("tree-animate") && (this.options.animate = !0)
    },
    j.prototype.toData = function(m, k) {
        d.isFunction(m) && (k = m, m = null),
        m = m || this.$;
        var l = this;
        return m.children("li:not(.tree-action-item)").map(function() {
            var a = d(this),
            p = a.data();
            delete p["zui.droppable"];
            var q = a.children("ul");
            return q.length && (p.children = l.toData(q)),
            d.isFunction(k) ? k(p, a) : p
        }).get()
    },
    j.prototype.callEvent = function(m, k) {
        var l;
        return d.isFunction(this.options[m]) && (l = this.options[m](k, this)),
        this.$.trigger(d.Event(m + "." + this.name, k)),
        l
    },
    d.fn.tree = function(l, k) {
        return this.each(function() {
            var m = d(this),
            a = m.data(c),
            e = "object" == typeof l && l;
            a || m.data(c, a = new j(this, e)),
            "string" == typeof l && a[l](k)
        })
    },
    d.fn.tree.Constructor = j,
    d(function() {
        d('[data-ride="tree"]').tree()
    })
} (jQuery),
function(d, f) {
    function b(a, g) {
        if (d.isArray(a)) {
            return void d.each(a,
            function(j, k) {
                b(k, g)
            })
        }
        var h = {};
        h[a] = c[a],
        g ? d.extend(g, h) : d.extend(h)
    }
    var c = d.zui;
    c && (b(["uuid", "callEvent", "clientLang", "browser", "messager", "Messager", "showMessager", "closeModal", "ajustModalPosition", "ModalTrigger", "modalTrigger", "store"]), b(["Color", "imgReady", "messager", "Messager", "showMessager", "closeModal", "ajustModalPosition", "ModalTrigger", "modalTrigger", "store"], f))
} (jQuery, window),
function(d, h, b) {
    function c(m, e, l, n) {
        return h.abs((l - m) * (n - e))
    }
    function j(p, q, l, m, r, s) {
        return p >= l && p <= r && q >= m && q <= s
    }
    function k(B, z, o, C, e, q, x, y) {
        var m = h.max(B, e),
        v = h.max(z, q),
        w = h.min(o, x),
        A = h.min(C, y);
        return j(m, v, B, z, o, C) && j(w, A, B, z, o, C) && j(m, v, e, q, x, y) && j(w, A, e, q, x, y) ? c(m, v, w, A) : 0
    }
    var f = d.zui.Messager ? new d.zui.Messager({
        placement: "top",
        time: 1500,
        close: 0,
        scale: !1,
        fade: !1
    }) : 0,
    g = function(m, l) {
        this.$ = d(m),
        this.options = this.getOptions(l),
        this.draggable = this.$.hasClass("dashboard-draggable") || this.options.draggable,
        this.init()
    };
    g.DEFAULTS = {
        minHeight: 100,
        height: 360,
        shadowType: "normal",
        sensitive: !1,
        circleShadowSize: 100,
        onlyRefreshBody: !0,
        resizable: !0,
        resizeMessage: !1
    },
    g.prototype.getOptions = function(a) {
        return a = d.extend({},
        g.DEFAULTS, this.$.data(), a)
    },
    g.prototype.handleRemoveEvent = function() {
        var l = this.options.afterPanelRemoved,
        a = this.options.panelRemovingTip;
        this.$.on("click", ".remove-panel",
        function() {
            var m = d(this).closest(".panel"),
            p = m.data("name") || m.find(".panel-heading").text().replace("\n", "").replace(/(^\s*)|(\s*$)/g, ""),
            e = m.attr("data-id"); (a === b || a === !1 || confirm(a.format(p))) && (m.parent().remove(), l && d.isFunction(l) && l(e))
        })
    },
    g.prototype.handleRefreshEvent = function() {
        var m = this,
        l = this.options.onlyRefreshBody;
        this.$.on("click", ".refresh-panel",
        function() {
            var a = d(this).closest(".panel");
            m.refresh(a, l)
        })
    },
    g.prototype.handleDraggable = function() {
        var m = this.$,
        u = this.options,
        n = "circle" === u.shadowType,
        p = u.circleShadowSize,
        e = p / 2,
        q = u.afterOrdered;
        this.$.addClass("dashboard-draggable"),
        this.$.on("mousedown", ".panel-actions, .drag-disabled",
        function(a) {
            a.stopPropagation()
        });
        var v;
        this.$.on("mousedown", ".panel-heading, .panel-drag-handler",
        function(O) {
            function R(x) {
                var y = J.data("mouseOffset");
                U = x.pageX - y.x,
                H = x.pageY - y.y,
                P = U + r,
                W = H + N,
                J.css({
                    left: U,
                    top: H
                }),
                a.find(".dragging-in").removeClass("dragging-in"),
                M = !1,
                G = null;
                var z, w = 0;
                a.children(":not(.dragging-col)").each(function() {
                    var Y = d(this);
                    if (Y.hasClass("dragging-col-holder")) {
                        return M = !u.sensitive || w < 100,
                        !0
                    }
                    var E = Y.children(".panel"),
                    L = E.offset(),
                    A = E.width(),
                    C = E.height(),
                    D = L.left,
                    X = L.top;
                    if (u.sensitive) {
                        D -= l.left,
                        X -= l.top,
                        z = k(U, H, P, W, D, X, D + A, X + C),
                        z > 100 && z > w && z > h.min(c(U, H, P, W), c(D, X, D + A, X + C)) / 3 && (w = z, G = Y)
                    } else {
                        var S = x.pageX,
                        T = x.pageY;
                        if (S > D && T > X && S < D + A && T < X + C) {
                            return G = Y,
                            !1
                        }
                    }
                }),
                G && (B && clearTimeout(B), F = G, B = setTimeout(V, 50)),
                x.preventDefault()
            }
            function V() {
                F && (F.addClass("dragging-in"), M ? K.insertAfter(F) : K.insertBefore(F), m.addClass("dashboard-holding"), B = null, F = null)
            }
            function I(x) {
                B && clearTimeout(B);
                var w = o.data("order");
                o.parent().insertAfter(K);
                var y = 0,
                z = {};
                a.children(":not(.dragging-col-holder)").each(function() {
                    var A = d(this).children(".panel");
                    A.data("order", ++y),
                    z[A.data("id") || A.attr("id")] = y,
                    A.parent().attr("data-order", y)
                }),
                w != z[o.data("id") || o.attr("id")] && (a.data("orders", z), q && d.isFunction(q) && q(z)),
                J.remove(),
                m.removeClass("dashboard-holding"),
                m.find(".dragging-col").removeClass("dragging-col"),
                m.find(".panel-dragging").removeClass("panel-dragging"),
                a.find(".dragging-in").removeClass("dragging-in"),
                m.removeClass("dashboard-dragging"),
                d(document).off("mousemove", R).off("mouseup", I),
                x.preventDefault()
            }
            var U, H, P, W, B, G, M, F, o = d(this).closest(".panel"),
            Q = o.parent(),
            a = o.closest(".row"),
            J = o.clone().addClass("panel-dragging-shadow"),
            s = o.offset(),
            l = m.offset(),
            K = a.find(".dragging-col-holder"),
            r = o.width(),
            N = o.height();
            K.length || (K = d('<div class="dragging-col-holder"><div class="panel"></div></div>').removeClass("dragging-col").appendTo(a)),
            v && K.removeClass(v),
            K.addClass(v = Q.attr("class")),
            K.insertBefore(Q).find(".panel").replaceWith(o.clone().addClass("panel-dragging panel-dragging-holder")),
            m.addClass("dashboard-dragging"),
            o.addClass("panel-dragging").parent().addClass("dragging-col"),
            J.css({
                left: s.left - l.left,
                top: s.top - l.top,
                width: r,
                height: N
            }).appendTo(m).data("mouseOffset", {
                x: O.pageX - s.left + l.left,
                y: O.pageY - s.top + l.top
            }),
            n && (J.addClass("circle"), setTimeout(function() {
                J.css({
                    left: O.pageX - l.left - e,
                    top: O.pageY - l.top - e,
                    width: p,
                    height: p
                }).data("mouseOffset", {
                    x: l.left + e,
                    y: l.top + e
                })
            },
            100)),
            d(document).on("mousemove", R).on("mouseup", I),
            O.preventDefault()
        })
    },
    g.prototype.handlePanelPadding = function() {
        this.$.find(".panel-body > table, .panel-body > .list-group").parent().addClass("no-padding")
    },
    g.prototype.updatePanelHeight = function() {
        var e = this,
        l = e.options.height,
        m = e.options.minHeight,
        p = {};
        return e.id && d.zui.store && (p = d.zui.store.pageGet("zui.dashboard." + e.id + ".sizeConfig", p)),
        this.$.children(".row").each(function() {
            var o = d(this),
            q = o.width(),
            u = [],
            n = [],
            v = 0;
            o.children(":not(.dragging-col-holder)").each(function() {
                var s = d(this),
                r = s.width();
                v + r > q ? (n.length && u.push(n), n = [s], v = r) : (v += r, n.push(s))
            }),
            n.length && u.push(n),
            u.length && d.each(u,
            function(r) {
                n = u[r];
                var w = 0,
                x = [],
                y = !1;
                d.each(n,
                function(s) {
                    var a = n[s].data("row-id", r),
                    A = a.children(".panel:first");
                    if (x.push(A), !y) {
                        var B = A.data("newHeight");
                        if (B) {
                            A.data("newHeight", null).data("height", B),
                            w = h.max(m, B),
                            y = !0
                        } else {
                            var z = A.data("height") || p[A.data("id")];
                            z && (w = h.max(w, z))
                        }
                    }
                }),
                w || (w = l),
                d.each(x,
                function(a) {
                    var s = x[a].css("height", w);
                    p[s.data("id")] = s.data("height")
                })
            })
        }),
        e.id && d.zui.store && d.zui.store.pageSet("zui.dashboard." + e.id + ".sizeConfig", p),
        p
    },
    g.prototype.handleResizeEvent = function() {
        var m = this,
        p = m.options,
        u = p.resizable,
        w = p.onResize,
        q = p.minHeight,
        e = p.resizeMessage,
        s = e && f;
        m.$.on("mousedown", ".resize-handle",
        function(A) {
            var r = d(this),
            z = r.hasClass("resize-vertical"),
            F = r.parent().addClass("resizing").toggleClass("resizing-v", z).toggleClass("resizing-h", !z),
            n = F.closest(".row"),
            B = F.children(".panel"),
            E = A.pageX,
            K = A.pageY,
            D = F.width(),
            J = B.height(),
            x = n.width(),
            H = h.round(12 * D / x),
            G = H;
            z || F.attr("data-grid", H);
            var I = function(y) {
                if (z) {
                    B.css("height", h.max(q, J + (y.pageY - K)))
                } else {
                    var l = y.pageX,
                    o = h.max(1, h.min(12, h.round(12 * (D + (l - E)) / x)));
                    G != o && (F.attr("data-grid", o).css("width", 100 * o / 12 + "%"), s && f[f.isShow ? "update": "show"](h.round(100 * o / 12) + "% (" + o + "/12)"), G = o)
                }
                y.preventDefault(),
                y.stopPropagation()
            },
            a = function(l) {
                if (F.removeClass("resizing resizing-v resizing-h"), z) {
                    var M = h.max(q, J + (l.pageY - K));
                    if (M !== J) {
                        if (d.isFunction(w)) {
                            var L = function() {
                                B.css("height", J).data("height", J),
                                m.updatePanelHeight()
                            },
                            C = w({
                                type: "vertical",
                                id: B.data("id"),
                                element: F,
                                old: J,
                                height: M,
                                revert: L
                            });
                            C === !1 && L()
                        }
                        B.css("height", M).data("newHeight", M)
                    }
                } else {
                    var y = F.attr("data-grid");
                    if (H != y && d.isFunction(w)) {
                        var L = function() {
                            F.attr("data-grid", H).css("width", null),
                            m.updatePanelHeight()
                        },
                        C = w({
                            type: "horizontal",
                            id: B.data("id"),
                            element: F,
                            old: H,
                            grid: y,
                            revert: L
                        });
                        C === !1 ? L() : C !== !0 && s && f.show(h.round(100 * y / 12) + "% (" + y + "/12)")
                    }
                }
                m.updatePanelHeight(),
                d("body").off("mousemove.resize", I).off("mouseup.resize", a),
                l.preventDefault(),
                l.stopPropagation()
            };
            d("body").on("mousemove.resize", I).on("mouseup.resize", a),
            A.preventDefault(),
            A.stopPropagation()
        });
        var v = m.$.children(".row").children(":not(.dragging-col-holder)");
        u !== !0 && "horizontal" !== u || v.append('<div class="resize-handle resize-horizontal"><i class="icon icon-resize-h"></i></div>'),
        u !== !0 && "vertical" !== u || v.append('<div class="resize-handle resize-vertical"><i class="icon icon-resize-v"></i></div>')
    },
    g.prototype.refresh = function(l, a) {
        a === b && (a = this.options.onlyRefreshBody);
        var m = this.options.afterRefresh;
        l = d(l);
        var p = l.data("url");
        p && (l.addClass("panel-loading").find(".panel-heading .icon-refresh,.panel-heading .icon-repeat").addClass("icon-spin"), d.ajax({
            url: p,
            dataType: "html"
        }).done(function(e) {
            var o = d(e);
            o.hasClass("panel") ? l.empty().append(o.children()) : a ? l.find(".panel-body").empty().html(e) : l.html(e),
            d.isFunction(m) && m.call(this, {
                result: !0,
                data: e,
                $panel: l
            })
        }).fail(function() {
            l.addClass("panel-error"),
            d.isFunction(m) && m.call(this, {
                result: !1,
                $panel: l
            })
        }).always(function() {
            l.removeClass("panel-loading"),
            l.find(".panel-heading .icon-refresh,.panel-heading .icon-repeat").removeClass("icon-spin")
        }))
    },
    g.prototype.init = function() {
        var l = this.options,
        a = this;
        if (a.id = l.id ? l.id: a.$.attr("id"), l.data) {
            var m = d('<div class="row"/>');
            d.each(l.data,
            function(v, o) {
                var w = d('<div class="col-sm-' + (o.colWidth || 4) + '"/>');
                o.colAttrs && w.attr(o.colAttrs);
                var q = d('<div class="panel" data-id="' + (o.id || d.zui.uuid()) + '"/>');
                if (o.panelAttrs && q.attr(o.panelAttrs), o.height !== b && q.data("height", o.height), o.content !== b) {
                    if (d.isFunction(o.content)) {
                        var u = o.content(q);
                        u !== !0 && q.html(u)
                    } else {
                        q.html(o.content)
                    }
                }
                m.append(w.append(q.data("url", o.url)))
            }),
            a.$.append(m)
        }
        a.updatePanelHeight(),
        a.handlePanelPadding(),
        a.handleRemoveEvent(),
        a.handleRefreshEvent(),
        l.resizable && a.handleResizeEvent(),
        a.draggable && a.handleDraggable();
        var p = 0;
        a.$.find(".panel").each(function() {
            var e = d(this);
            e.data("order", ++p),
            e.attr("id") || e.attr("id", "panel" + p),
            e.attr("data-id") || e.attr("data-id", p),
            a.refresh(e, l.onlyRefreshBody)
        }),
        a.$.find('[data-toggle="tooltip"]').tooltip({
            container: "body"
        })
    },
    d.fn.dashboard = function(a) {
        return this.each(function() {
            var e = d(this),
            l = e.data("zui.dashboard"),
            m = "object" == typeof a && a;
            l || e.data("zui.dashboard", l = new g(this, m)),
            "string" == typeof a && l[a]()
        })
    },
    d.fn.dashboard.Constructor = g
} (jQuery, Math, void 0),
function(d) {
    var f = "zui.colorPicker",
    b = '<div class="colorpicker"><button type="button" class="btn dropdown-toggle" data-toggle="dropdown"><span class="cp-title"></span><i class="ic"></i></button><ul class="dropdown-menu clearfix"></ul></div>',
    c = {
        zh_cn: {
            errorTip: "不是有效的颜色值"
        },
        zh_tw: {
            errorTip: "不是有效的顏色值"
        },
        en: {
            errorTip: "Not a valid color value"
        }
    },
    g = function(e, h) {
        this.name = f,
        this.$ = d(e),
        this.getOptions(h),
        this.init()
    };
    g.DEFAULTS = {
        colors: ["#00BCD4", "#388E3C", "#3280fc", "#3F51B5", "#9C27B0", "#795548", "#F57C00", "#F44336", "#E91E63"],
        pullMenuRight: !0,
        wrapper: "btn-wrapper",
        tileSize: 30,
        lineCount: 5,
        optional: !0,
        tooltip: "top",
        icon: "caret-down"
    },
    g.prototype.init = function() {
        var h = this.options,
        a = this;
        this.$picker = d(b).addClass(h.wrapper),
        this.$picker.find(".cp-title").toggle(void 0 !== h.title).text(h.title),
        this.$menu = this.$picker.find(".dropdown-menu").toggleClass("pull-right", h.pullMenuRight),
        this.$btn = this.$picker.find(".btn.dropdown-toggle"),
        this.$btn.find(".ic").addClass("icon-" + h.icon),
        h.btnTip && this.$picker.attr("data-toggle", "tooltip").tooltip({
            title: h.btnTip,
            placement: h.tooltip,
            container: "body"
        }),
        this.$.attr("data-provide", null).after(this.$picker),
        this.colors = {},
        d.each(this.options.colors,
        function(m, l) {
            if (d.zui.Color.isColor(l)) {
                var n = new d.zui.Color(l);
                a.colors[n.toCssStr()] = n
            }
        }),
        this.updateColors();
        var a = this;
        this.$picker.on("click", ".cp-tile",
        function() {
            a.setValue(d(this).data("color"))
        });
        var j = this.$,
        k = function() {
            var e = j.val(),
            l = d.zui.Color.isColor(e);
            j.parent().toggleClass("has-error", !(l || h.optional && "" === e)),
            l ? a.setValue(e, !0) : h.optional && "" === e ? j.tooltip("hide") : j.is(":focus") || j.tooltip("show", h.errorTip)
        };
        j.is("input:not([type=hidden])") ? (h.tooltip && j.attr("data-toggle", "tooltip").tooltip({
            trigger: "manual",
            placement: h.tooltip,
            tipClass: "tooltip-danger",
            container: "body"
        }), j.on("keyup paste input change", k)) : j.appendTo(this.$picker),
        k()
    },
    g.prototype.addColor = function(k) {
        k instanceof d.zui.Color || (k = new d.zui.Color(k));
        var h = k.toCssStr(),
        j = this.options;
        this.colors[h] || (this.colors[h] = k);
        var l = d('<a href="###" class="cp-tile"></a>', {
            titile: k
        }).data("color", k).css({
            color: k.contrast().toCssStr(),
            background: h,
            "border-color": k.luma() > 0.43 ? "#ccc": "transparent"
        }).attr("data-color", h);
        this.$menu.append(d("<li/>").css({
            width: j.tileSize,
            height: j.tileSize
        }).append(l)),
        j.optional && this.$menu.find(".cp-tile.empty").parent().detach().appendTo(this.$menu)
    },
    g.prototype.updateColors = function(l) {
        var h = (this.$picker, this.$menu.empty()),
        j = this.options,
        l = l || this.colors,
        m = this,
        p = 0;
        if (d.each(l,
        function(a, n) {
            m.addColor(n),
            p++
        }), j.optional) {
            var k = d('<li><a class="cp-tile empty" href="###"></a></li>').css({
                width: j.tileSize,
                height: j.tileSize
            });
            this.$menu.append(k),
            p++
        }
        h.css("width", Math.min(p, j.lineCount) * j.tileSize + 6)
    },
    g.prototype.setValue = function(k, h) {
        var j = this.options;
        this.$menu.find(".cp-tile.active").removeClass("active");
        var l = "";
        if (k) {
            var m = new d.zui.Color(k);
            l = m.toCssStr().toLowerCase(),
            this.$btn.css({
                background: l,
                color: m.contrast().toCssStr(),
                borderColor: m.luma() > 0.43 ? "#ccc": l
            }),
            this.colors[l] || this.addColor(m),
            h || this.$.val().toLowerCase() === l || this.$.val(l).trigger("change"),
            this.$menu.find('.cp-tile[data-color="' + l + '"]').addClass("active"),
            this.$.tooltip("hide"),
            this.$.trigger("colorchange", m)
        } else {
            this.$btn.attr("style", null),
            h || "" === this.$.val() || this.$.val(l).trigger("change"),
            j.optional && this.$.tooltip("hide"),
            this.$menu.find(".cp-tile.empty").addClass("active"),
            this.$.trigger("colorchange", null)
        }
        j.updateBorder && d(j.updateBorder).css("border-color", l),
        j.updateBackground && d(j.updateBackground).css("background-color", l),
        j.updateColor && d(j.updateText).css("color", l),
        j.updateText && d(j.updateText).text(l)
    },
    g.prototype.getOptions = function(j) {
        var h = d.extend({},
        g.DEFAULTS, this.$.data(), j);
        "string" == typeof h.colors && (h.colors = h.colors.split(","));
        var k = (h.lang || d.zui.clientLang()).toLowerCase();
        h.errorTip || (h.errorTip = c[k].errorTip),
        d.fn.tooltip || (h.btnTip = !1),
        this.options = h
    },
    d.fn.colorPicker = function(e) {
        return this.each(function() {
            var a = d(this),
            j = a.data(f),
            h = "object" == typeof e && e;
            j || a.data(f, j = new g(this, h)),
            "string" == typeof e && j[e]()
        })
    },
    d.fn.colorPicker.Constructor = g,
    d(function() {
        d('[data-provide="colorpicker"]').colorPicker()
    })
} (jQuery),
function(w, m, v) {
    var k = 0,
    g = '<div class="messager messager-{type} {placement}" style="display: none"><div class="messager-content"></div><div class="messager-actions"></div></div>',
    h = {
        type: "default",
        placement: "top",
        time: 4000,
        parent: "body",
        icon: null,
        close: !0,
        fade: !0,
        scale: !0
    },
    x = {},
    b = function(z, o) {
        w.isPlainObject(z) && (o = z, z = o.message);
        var a = this;
        o = a.options = w.extend({},
        h, o),
        a.id = o.id || k++;
        var A = x[a.id];
        A && A.destroy(),
        x[a.id] = a,
        a.message = (o.icon ? '<i class="icon-' + o.icon + ' icon"></i> ': "") + z,
        a.$ = w(g.format(o)).toggleClass("fade", o.fade).toggleClass("scale", o.scale).attr("id", "messager-" + a.id),
        o.cssClass && a.$.addClass(o.cssClass);
        var B = !1,
        y = a.$.find(".messager-actions"),
        n = function(d) {
            var c = w('<button type="button" class="action action-' + d.name + '"/>');
            "close" === d.name && c.addClass("close"),
            d.html !== v && c.html(d.html),
            d.icon !== v && c.append('<i class="action-icon icon-' + d.icon + '"/>'),
            d.text !== v && c.append('<span class="action-text">' + d.text + "</span>"),
            d.tooltip !== v && c.attr("title", d.tooltip).tooltip(),
            c.data("action", d),
            y.append(c)
        };
        o.actions && w.each(o.actions,
        function(c, d) {
            d.name === v && (d.name = c),
            "close" == d.name && (B = !0),
            n(d)
        }),
        !B && o.close && n({
            name: "close",
            html: "&times;"
        }),
        a.$.on("click", ".action",
        function(l) {
            var c, d = w(this).data("action");
            o.onAction && (c = o.onAction.call(this, d.name, d, a), c === !1) || w.isFunction(d.action) && (c = d.action.call(this, a), c === !1) || (a.hide(), l.stopPropagation())
        }),
        a.$.on("click",
        function(c) {
            if (o.onAction) {
                var d = o.onAction.call(this, "content", null, a);
                d === !0 && a.hide()
            }
        });
        var s = a.$.find(".messager-content").html(a.message);
        o.contentClass && s.addClass(o.contentClass),
        a.$.data("zui.messager", a),
        o.show && a.message !== v && a.show()
    };
    b.prototype.update = function(l, c) {
        var d = this,
        n = d.options;
        d.$.removeClass("messager-" + n.type),
        c && (n = w.extend(n, c)),
        d.$.addClass("messager-" + n.type),
        l && (d.message = (n.icon ? '<i class="icon-' + n.icon + ' icon"></i> ': "") + l, d.$.find(".messager-content").html(d.message))
    },
    b.prototype.show = function(B, y) {
        var z = this,
        E = this.options;
        if (w.isFunction(B)) {
            var a = y;
            y = B,
            a !== v && (B = a)
        }
        if (z.isShow) {
            return void z.hide(function() {
                z.show(B, y)
            })
        }
        z.hiding && (clearTimeout(z.hiding), z.hiding = null),
        z.update(B);
        var A = E.placement,
        C = w(E.parent),
        D = C.children(".messagers-holder." + A);
        if (D.length || (D = w("<div/>").attr("class", "messagers-holder " + A).appendTo(C)), D.append(z.$), "center" === A) {
            var e = w(m).height() - D.height();
            D.css("top", Math.max( - e, e / 2))
        }
        return z.$.show().addClass("in"),
        E.time && (z.hiding = setTimeout(function() {
            z.hide()
        },
        E.time)),
        z.isShow = !0,
        y && y(),
        z
    },
    b.prototype.hide = function(l, n) {
        l === !0 && (n = !0, l = null);
        var c = this;
        if (c.$.hasClass("in")) {
            c.$.removeClass("in");
            var d = function() {
                var a = c.$.parent();
                c.$.detach(),
                a.children().length || a.remove(),
                l && l(!0)
            };
            n ? d() : setTimeout(d, 200)
        } else {
            l && l(!1)
        }
        c.isShow = !1
    },
    b.prototype.destroy = function() {
        var a = this;
        a.hide(function() {
            a.$.remove(),
            a.$ = null
        },
        !0),
        delete x[a.id]
    },
    b.all = x;
    var j = function() {
        w(".messager").each(function() {
            var a = w(this).data("zui.messager");
            a && a.hide && a.hide(!0)
        })
    },
    q = function(c, a) {
        "string" == typeof a && (a = {
            type: a
        }),
        a = w.extend({},
        a),
        a.id === v && j();
        var d = x[a.id] || new b(c, a);
        return d.show(),
        d
    },
    u = function(a) {
        return "string" == typeof a ? {
            placement: a
        }: a
    },
    f = {
        show: q,
        hide: j
    };
    w.each({
        primary: 0,
        success: "ok-sign",
        info: "info-sign",
        warning: "warning-sign",
        danger: "exclamation-sign",
        important: 0,
        special: 0
    },
    function(d, c) {
        f[d] = function(a, e) {
            return q(a, w.extend({
                type: d,
                icon: c || null
            },
            u(e)))
        }
    }),
    w.zui({
        Messager: b,
        showMessager: q,
        messager: f
    })
} (jQuery, window, void 0),
function(d) {
    var f = "zui.selectable",
    b = function(e, h) {
        this.name = f,
        this.$ = d(e),
        this.id = d.zui.uuid(),
        this.selectOrder = 1,
        this.selections = {},
        this.getOptions(h),
        this._init()
    },
    c = function(j, k, h) {
        return j >= h.left && j <= h.left + h.width && k >= h.top && k <= h.top + h.height
    },
    g = function(j, l) {
        var h = Math.max(j.left, l.left),
        m = Math.max(j.top, l.top),
        p = Math.min(j.left + j.width, l.left + l.width),
        k = Math.min(j.top + j.height, l.top + l.height);
        return c(h, m, j) && c(p, k, j) && c(h, m, l) && c(p, k, l)
    };
    b.DEFAULTS = {
        selector: "li,tr,div",
        trigger: "",
        selectClass: "active",
        rangeStyle: {
            border: "1px solid " + (d.zui.colorset ? d.zui.colorset.primary: "#3280fc"),
            backgroundColor: d.zui.colorset ? new d.zui.Color(d.zui.colorset.primary).fade(20).toCssStr() : "rgba(50, 128, 252, 0.2)"
        },
        clickBehavior: "toggle",
        ignoreVal: 3
    },
    b.prototype.getOptions = function(a) {
        this.options = d.extend({},
        b.DEFAULTS, this.$.data(), a)
    },
    b.prototype.select = function(a) {
        this.toggle(a, !0)
    },
    b.prototype.unselect = function(a) {
        this.toggle(a, !1)
    },
    b.prototype.toggle = function(q, j, k) {
        var u, v, m = this.options.selector,
        p = this;
        if (void 0 === q) {
            return void this.$.find(m).each(function() {
                p.toggle(this, j)
            })
        }
        if ("object" == typeof q ? (u = d(q).closest(m), v = u.data("id")) : (v = q, u = p.$.find('.slectable-item[data-id="' + v + '"]')), u && u.length) {
            if (v || (v = d.zui.uuid(), u.attr("data-id", v)), void 0 !== j && null !== j || (j = !p.selections[v]), !!j != !!p.selections[v]) {
                var h;
                d.isFunction(k) && (h = k(j)),
                h !== !0 && (p.selections[v] = !!j && p.selectOrder++, p.callEvent(j ? "select": "unselect", {
                    id: v,
                    selections: p.selections,
                    target: u,
                    selected: p.getSelectedArray()
                },
                p))
            }
            u.toggleClass(p.options.selectClass, j)
        }
    },
    b.prototype.getSelectedArray = function() {
        var a = [];
        return d.each(this.selections,
        function(h, e) {
            e && a.push(h)
        }),
        a
    },
    b.prototype._init = function() {
        var N, R, J, G, B, E, I, O = this.options,
        P = this,
        F = O.ignoreVal,
        K = !0,
        M = "." + this.name + "." + this.id,
        A = d.isFunction(O.checkFunc) ? O.checkFunc: null,
        L = d.isFunction(O.rangeFunc) ? O.rangeFunc: null,
        z = !1,
        H = null,
        Q = "mousedown" + M,
        k = function() {
            G && P.$children.each(function() {
                var n = d(this),
                h = n.offset();
                h.width = n.outerWidth(),
                h.height = n.outerHeight();
                var l = L ? L.call(this, G, h) : g(G, h);
                if (A) {
                    var m = A.call(P, {
                        intersect: l,
                        target: n,
                        range: G,
                        targetRange: h
                    });
                    m === !0 ? P.select(n) : m === !1 && P.unselect(n)
                } else {
                    l ? P.select(n) : P.multiKey || P.unselect(n)
                }
            })
        },
        q = function(a) {
            z && (B = a.pageX, E = a.pageY, G = {
                width: Math.abs(B - N),
                height: Math.abs(E - R),
                left: B > N ? N: B,
                top: E > R ? R: E
            },
            K && G.width < F && G.height < F || (J || (J = d('.selectable-range[data-id="' + P.id + '"]'), J.length || (J = d('<div class="selectable-range" data-id="' + P.id + '"></div>').css(d.extend({
                zIndex: 1060,
                position: "absolute",
                top: N,
                left: R,
                pointerEvents: "none"
            },
            P.options.rangeStyle)).appendTo(d("body")))), J.css(G), clearTimeout(I), I = setTimeout(k, 10), K = !1))
        },
        D = function(a) {
            d(document).off(M),
            clearTimeout(H),
            z && (z = !1, J && J.remove(), K || G && (clearTimeout(I), k(), G = null), P.callEvent("finish", {
                selections: P.selections,
                selected: P.getSelectedArray()
            }), a.preventDefault())
        },
        o = function(h) {
            if (z) {
                return D(h)
            }
            var l = d.zui.getMouseButtonCode(O.mouseButton);
            if (! (l > -1 && h.button !== l || P.altKey || 3 === h.which || P.callEvent("start", h) === !1)) {
                var a = P.$children = P.$.find(O.selector);
                a.addClass("slectable-item");
                var e = P.multiKey ? "multi": O.clickBehavior;
                if ("multi" === e ? P.toggle(h.target) : "single" === e ? (P.unselect(), P.select(h.target)) : "toggle" === e && P.toggle(h.target, null,
                function(m) {
                    P.unselect()
                }), P.callEvent("startDrag", h) === !1) {
                    return void P.callEvent("finish", {
                        selections: P.selections,
                        selected: P.getSelectedArray()
                    })
                }
                N = h.pageX,
                R = h.pageY,
                J = null,
                K = !0,
                z = !0,
                d(document).on("mousemove" + M, q).on("mouseup" + M, D),
                H = setTimeout(function() {
                    d(document).on(Q, D)
                },
                10),
                h.preventDefault()
            }
        },
        j = O.container && "default" !== O.container ? d(O.container) : this.$;
        O.trigger ? j.on(Q, O.trigger, o) : j.on(Q, o),
        d(document).on("keydown",
        function(a) {
            var h = a.keyCode;
            17 === h || 91 == h ? P.multiKey = h: 18 === h && (P.altKey = !0)
        }).on("keyup",
        function(a) {
            P.multiKey = !1,
            P.altKey = !1
        })
    },
    b.prototype.callEvent = function(k, h) {
        var j = d.Event(k + "." + this.name);
        this.$.trigger(j, h);
        var l = j.result,
        m = this.options[k];
        return d.isFunction(m) && (l = m.apply(this, d.isArray(h) ? h: [h])),
        l
    },
    d.fn.selectable = function(a) {
        return this.each(function() {
            var h = d(this),
            j = h.data(f),
            e = "object" == typeof a && a;
            j || h.data(f, j = new b(this, e)),
            "string" == typeof a && j[a]()
        })
    },
    d.fn.selectable.Constructor = b,
    d(function() {
        d('[data-ride="selectable"]').selectable()
    })
} (jQuery),
function(d) {
    var f = "zui.datatable",
    b = d.zui.store,
    c = function(e, g) {
        this.name = f,
        this.$ = d(e),
        this.isTable = "TABLE" === this.$[0].tagName,
        this.firstShow = !0,
        this.isTable ? (this.$table = this.$, this.id = "datatable-" + (this.$.attr("id") || d.zui.uuid())) : (this.$datatable = this.$.addClass("datatable"), this.$.attr("id") ? this.id = this.$.attr("id") : (this.id = "datatable-" + d.zui.uuid(), this.$.attr("id", this.id))),
        this.getOptions(g),
        this.load(),
        this.callEvent("ready")
    };
    c.DEFAULTS = {
        checkable: !1,
        checkByClickRow: !0,
        checkedClass: "active",
        checkboxName: null,
        selectable: !0,
        sortable: !1,
        storage: !0,
        fixedHeader: !1,
        fixedHeaderOffset: 0,
        fixedLeftWidth: "30%",
        fixedRightWidth: "30%",
        flexHeadDrag: !0,
        scrollPos: "in",
        rowHover: !0,
        colHover: !0,
        hoverClass: "hover",
        colHoverClass: "col-hover",
        fixCellHeight: !0,
        mergeRows: !1,
        minColWidth: 20,
        minFixedLeftWidth: 200,
        minFixedRightWidth: 200,
        minFlexAreaWidth: 200
    },
    c.prototype.getOptions = function(h) {
        var g = this.$;
        h = d.extend({},
        c.DEFAULTS, this.$.data(), h),
        h.tableClass = h.tableClass || "",
        h.tableClass = " " + h.tableClass + " table-datatable",
        d.each(["bordered", "condensed", "striped", "condensed", "fixed"],
        function(e, a) {
            a = "table-" + a,
            g.hasClass(a) && (h.tableClass += " " + a)
        }),
        (g.hasClass("table-hover") || h.rowHover) && (h.tableClass += " table-hover"),
        h.checkable && d.fn.selectable || (h.selectable = !1),
        this.options = h
    },
    c.prototype.load = function(B) {
        var v, k = this.options;
        if (d.isFunction(B)) {
            B = B(this.data, this),
            B.keepSort = !0
        } else {
            if (d.isPlainObject(B)) {
                this.data = B
            } else {
                if ("string" == typeof B) {
                    var m = d(B);
                    m.length && (this.$table = m.first(), this.$table.data(f, this), this.isTable = !0),
                    B = null
                } else {
                    B = k.data
                }
            }
        }
        if (!B) {
            if (!this.isTable) {
                throw new Error("No data avaliable!")
            }
            B = {
                cols: [],
                rows: []
            },
            v = B.cols;
            var D, e, q, z, A, j, w = B.rows,
            y = this.$table;
            y.find("thead > tr:first").children("th").each(function() {
                e = d(this),
                v.push(d.extend({
                    text: e.html(),
                    flex: e.hasClass("flex-col"),
                    width: "auto",
                    cssClass: e.attr("class"),
                    css: e.attr("style"),
                    type: "string",
                    ignore: e.hasClass("ignore"),
                    sort: !e.hasClass("sort-disabled"),
                    mergeRows: e.attr("merge-rows")
                },
                e.data()))
            }),
            y.find("tbody > tr").each(function() {
                q = d(this),
                A = d.extend({
                    data: [],
                    checked: !1,
                    cssClass: q.attr("class"),
                    css: q.attr("style"),
                    id: q.attr("id")
                },
                q.data()),
                q.children("td").each(function() {
                    if (z = d(this), j = z.attr("colspan") || 1, A.data.push(d.extend({
                        cssClass: z.attr("class"),
                        css: z.attr("style"),
                        text: z.html(),
                        colSpan: j,
                        title: z.attr("title")
                    },
                    z.data())), j > 1) {
                        for (D = 1; D < j; D++) {
                            A.data.push({
                                empty: !0
                            })
                        }
                    }
                }),
                w.push(A)
            });
            var C = y.find("tfoot");
            C.length && (B.footer = d('<table class="table' + k.tableClass + '"></table>').append(C))
        }
        B.flexStart = -1,
        B.flexEnd = -1,
        v = B.cols,
        B.colsLength = v.length;
        for (var D = 0; D < B.colsLength; ++D) {
            var x = v[D];
            x.flex && (B.flexStart < 0 && (B.flexStart = D), B.flexEnd = D)
        }
        0 === B.flexStart && B.flexEnd === B.colsLength && (B.flexStart = -1, B.flexEnd = -1),
        B.flexArea = B.flexStart >= 0,
        B.fixedRight = B.flexEnd >= 0 && B.flexEnd < B.colsLength - 1,
        B.fixedLeft = B.flexStart > 0,
        B.flexStart < 0 && B.flexEnd < 0 && (B.fixedLeft = !0, B.flexStart = B.colsLength, B.flexEnd = B.colsLength),
        this.data = B,
        this.callEvent("afterLoad", {
            data: B
        }),
        this.render()
    },
    c.prototype.render = function() {
        var aj, ac, X, Y, Q = this,
        U = Q.$datatable || (Q.isTable ? d('<div class="datatable" id="' + Q.id + '"/>') : Q.$datatable),
        aa = Q.options,
        ag = Q.data,
        ah = Q.data.cols,
        W = Q.data.rows,
        ad = aa.checkable,
        af = '<div class="datatable-rows-span datatable-span"><div class="datatable-wrapper"><table class="table"></table></div></div>',
        M = '<div class="datatable-head-span datatable-span"><div class="datatable-wrapper"><table class="table"><thead></thead></table></div></div>';
        U.children(".datatable-head, .datatable-rows, .scroll-wrapper").remove(),
        U.toggleClass("sortable", aa.sortable);
        var ae, K, Z, ai = d('<div class="datatable-head"/>');
        for (aj = d("<tr/>"), X = d("<tr/>"), Y = d("<tr/>"), ac = 0; ac < ah.length; ac++) {
            Z = ah[ac],
            ae = ac < ag.flexStart ? aj: ac >= ag.flexStart && ac <= ag.flexEnd ? Y: X,
            0 === ac && ad && ae.append('<th data-index="check" class="check-all check-btn"><i class="icon-check-empty"></i></th>'),
            Z.ignore || (K = d("<th/>"), K.toggleClass("sort-down", "down" === Z.sort).toggleClass("sort-up", "up" === Z.sort).toggleClass("sort-disabled", Z.sort === !1), K.addClass(Z.cssClass).addClass(Z.colClass).html(Z.text).attr({
                "data-index": ac,
                "data-type": Z.type,
                style: Z.css
            }).css("width", Z.width), ae.append(K))
        }
        var H;
        ag.fixedLeft && (H = d(M), H.addClass("fixed-left").find("table").addClass(aa.tableClass).find("thead").append(aj), ai.append(H)),
        ag.flexArea && (H = d(M), H.addClass("flexarea").find(".datatable-wrapper").append('<div class="scrolled-shadow scrolled-in-shadow"></div><div class="scrolled-shadow scrolled-out-shadow"></div>').find("table").addClass(aa.tableClass).find("thead").append(Y), ai.append(H)),
        ag.fixedRight && (H = d(M), H.addClass("fixed-right").find("table").addClass(aa.tableClass).find("thead").append(X), ai.append(H)),
        U.append(ai);
        var J, R, I, q, ab, e, N, G, j = d('<div class="datatable-rows">'),
        P = W.length;
        aj = d("<tbody/>"),
        X = d("<tbody/>"),
        Y = d("<tbody/>");
        for (var F = 0; F < P; ++F) {
            for (e = W[F], "undefined" == typeof e.id && (e.id = F), e.index = F, J = d("<tr/>"), J.addClass(e.cssClass).toggleClass(aa.checkedClass, !!e.checked).attr({
                "data-index": F,
                "data-id": e.id
            }), R = J.clone(), I = J.clone(), G = e.data.length, ac = 0; ac < G; ++ac) {
                N = e.data[ac],
                ac > 0 && N.empty || (ae = ac < ag.flexStart ? J: ac >= ag.flexStart && ac <= ag.flexEnd ? R: I, 0 === ac && ad && (ab = d('<td data-index="check" class="check-row check-btn"><i class="icon-check-empty"></i></td>'), aa.checkboxName && ab.append('<input class="hide" type="checkbox" name="' + aa.checkboxName + '" value="' + e.id + '">'), ae.append(ab)), ah[ac].ignore || (d.isPlainObject(N) ? (N.row = F, N.index = ac) : N = {
                    text: N,
                    row: F,
                    index: ac
                },
                e.data[ac] = N, q = d("<td/>"), q.html(N.text).addClass(N.cssClass).addClass(ah[ac].colClass).attr("colspan", N.colSpan).attr({
                    "data-row": F,
                    "data-index": ac,
                    "data-flex": !1,
                    "data-type": ah[ac].type,
                    style: N.css,
                    title: N.title || ""
                }).css("width", ah[ac].width), ae.append(q)))
            }
            aj.append(J),
            Y.append(R),
            X.append(I)
        }
        var V;
        ag.fixedLeft && (V = d(af), V.addClass("fixed-left").find("table").addClass(aa.tableClass).append(aj), j.append(V)),
        ag.flexArea && (V = d(af), V.addClass("flexarea").find(".datatable-wrapper").append('<div class="scrolled-shadow scrolled-in-shadow"></div><div class="scrolled-shadow scrolled-out-shadow"></div>').find("table").addClass(aa.tableClass).append(Y), j.append(V)),
        ag.fixedRight && (V = d(af), V.addClass("fixed-right").find("table").addClass(aa.tableClass).append(X), j.append(V)),
        U.append(j),
        ag.flexArea && U.append('<div class="scroll-wrapper"><div class="scroll-slide scroll-pos-' + aa.scrollPos + '"><div class="bar"></div></div></div>');
        var B = U.children(".datatable-footer").detach();
        ag.footer ? (U.append(d('<div class="datatable-footer"/>').append(ag.footer)), ag.footer = null) : B.length && U.append(B),
        Q.$datatable = U.data(f, Q),
        Q.isTable && Q.firstShow && (Q.$table.attr("data-datatable-id", this.id).hide().after(U), Q.firstShow = !1),
        Q.bindEvents(),
        Q.refreshSize(),
        Q.callEvent("render")
    },
    c.prototype.bindEvents = function() {
        var aB = this,
        ax = this.data,
        aq = this.options,
        ar = this.$datatable,
        an = aB.$dataSpans = ar.children(".datatable-head, .datatable-rows").find(".datatable-span"),
        ao = aB.$rowsSpans = ar.children(".datatable-rows").children(".datatable-rows-span"),
        au = aB.$headSpans = ar.children(".datatable-head").children(".datatable-head-span"),
        aC = aB.$cells = an.find("td, th"),
        aD = aB.$dataCells = aC.filter("td");
        aB.$headCells = aC.filter("th");
        var ap = aB.$rows = aB.$rowsSpans.find(".table > tbody > tr");
        if (aq.rowHover) {
            var ay = aq.hoverClass;
            ao.on("mouseenter", "td",
            function() {
                aD.filter("." + ay).removeClass(ay),
                ap.filter("." + ay).removeClass(ay),
                ap.filter('[data-index="' + d(this).addClass(ay).closest("tr").data("index") + '"]').addClass(ay)
            }).on("mouseleave", "td",
            function() {
                aD.filter("." + ay).removeClass(ay),
                ap.filter("." + ay).removeClass(ay)
            })
        }
        if (aq.colHover) {
            var aA = aq.colHoverClass;
            au.on("mouseenter", "th",
            function() {
                aC.filter("." + aA).removeClass(aA),
                aC.filter('[data-index="' + d(this).data("index") + '"]').addClass(aA)
            }).on("mouseleave", "th",
            function() {
                aC.filter("." + aA).removeClass(aA)
            })
        }
        if (ax.flexArea) {
            var am, az, al, at, aE, ai, ak, ad = ar.find(".scroll-slide"),
            aj = ar.find(".datatable-span.flexarea"),
            ag = ar.find(".datatable-span.fixed-left"),
            av = ar.find(".datatable-span.flexarea .table"),
            q = ad.children(".bar"),
            ab = aB.id + "_scrollOffset";
            aB.width = ar.width(),
            ar.resize(function() {
                aB.width = ar.width()
            });
            var ah = function(g, h) {
                aE = Math.max(0, Math.min(am - az, g)),
                h || ar.addClass("scrolling"),
                q.css("left", aE),
                ak = 0 - Math.floor((al - am) * aE / (am - az)),
                av.css("left", ak),
                at = aE,
                ar.toggleClass("scrolled-in", aE > 2).toggleClass("scrolled-out", aE < am - az - 2),
                aq.storage && b.pageSet(ab, aE)
            },
            G = function() {
                am = aj.width(),
                ad.width(am).css("left", ag.width()),
                al = av.width(),
                az = Math.floor(am * am / al),
                q.css("width", az),
                av.css("min-width", am),
                ar.toggleClass("show-scroll-slide", al > am),
                ai || am === az || (ai = !0, ah(b.pageGet(ab, 0), !0)),
                ar.hasClass("size-changing") && ah(aE, !0)
            };
            aj.resize(G),
            aq.storage && G();
            var ac = {
                move: !1,
                stopPropagation: !0,
                drag: function(e) {
                    ah(q.position().left + e.smallOffset.x * (e.element.hasClass("bar") ? 1 : -1))
                },
                finish: function() {
                    ar.removeClass("scrolling")
                }
            };
            d.fn.draggable ? (q.draggable(ac), aq.flexHeadDrag && ar.find(".datatable-head-span.flexarea").draggable(ac)) : console.error("DataTable requires draggable.js to improve UI."),
            ad.mousedown(function(g) {
                var h = g.pageX - ad.offset().left;
                ah(h - az / 2)
            })
        }
        if (aq.checkable) {
            var X, af = aB.id + "_checkedStatus",
            Q = aq.checkedClass,
            K = function() {
                var h = ao.first().find(".table > tbody > tr"),
                e = h.filter("." + Q);
                aq.checkboxName && h.find(".check-row input:checkbox").prop("checked", !1);
                var g = {
                    checkedAll: h.length === e.length && e.length > 0,
                    checks: e.map(function() {
                        return X = d(this).data("id"),
                        aq.checkboxName && d(this).find(".check-row input:checkbox").prop("checked", !0),
                        X
                    }).toArray()
                };
                aB.checks = g,
                d.each(ax.rows,
                function(k, j) {
                    j.checked = d.inArray(j.id, g.checks) > -1
                }),
                au.find(".check-all").toggleClass("checked", !!g.checkedAll),
                aq.storage && b.pageSet(af, g),
                aB.callEvent("checksChanged", {
                    checks: g
                })
            },
            V = function(j, g) {
                var h = d(j).closest("tr");
                void 0 === g && (g = !h.hasClass(Q)),
                ap.filter('[data-index="' + h.data("index") + '"]').toggleClass(Q, !!g)
            },
            aw = "click.zui.datatable.check";
            if (aq.selectable) {
                var aa = {
                    selector: ".datatable-rows tr",
                    trigger: ".datatable-rows",
                    start: function(h) {
                        var g = d(h.target).closest(".check-row, .check-btn");
                        if (g.length) {
                            return g.is(".check-row") && (V(g), K()),
                            !1
                        }
                    },
                    rangeFunc: function(g, h) {
                        return Math.max(g.top, h.top) < Math.min(g.top + g.height, h.top + h.height)
                    },
                    select: function(e) {
                        V(e.target, !0)
                    },
                    unselect: function(e) {
                        V(e.target, !1)
                    },
                    finish: function(e) {
                        K()
                    }
                };
                d.isPlainObject(aq.selectable) && d.extend(aa, aq.selectable),
                this.$datatable.selectable(aa)
            } else {
                this.$rowsSpans.off(aw).on(aw + "row", aq.checkByClickRow ? "tr": ".check-row",
                function() {
                    V(this),
                    K()
                })
            }
            if (this.$datatable.off(aw).on("click.zui.datatable.check", ".check-all",
            function() {
                ap.toggleClass(Q, d(this).toggleClass("checked").hasClass("checked")),
                K()
            }).on(aw + ".none", ".check-none",
            function() {
                ap.toggleClass(Q, !1),
                K()
            }).on(aw + ".inverse", ".check-inverse",
            function() {
                ap.toggleClass(Q),
                K()
            }), aq.storage) {
                var Y = b.pageGet(af);
                Y && (au.find(".check-all").toggleClass("checked", Y.checkedAll), Y.checkedAll ? ap.addClass(Q) : (ap.removeClass(Q), d.each(Y.checks,
                function(g, h) {
                    ap.filter('[data-id="' + h + '"]').addClass(Q)
                })), Y.checks.length && K())
            }
        }
        if (aq.fixedHeader) {
            var U, J, Z, a = ar.children(".datatable-head"),
            aF = aq.fixedHeaderOffset || d(".navbar.navbar-fixed-top").height() || 0,
            ae = function() {
                U = ar.offset().top,
                Z = d(window).scrollTop(),
                J = ar.height(),
                ar.toggleClass("head-fixed", Z + aF > U && Z + aF < U + J),
                ar.hasClass("head-fixed") ? a.css({
                    width: ar.width(),
                    top: aF
                }) : a.attr("style", "")
            };
            d(window).scroll(ae),
            ae()
        }
        aq.sortable ? (au.on("click", "th:not(.sort-disabled, .check-btn)",
        function() {
            ar.hasClass("size-changing") || aB.sortTable(d(this))
        }), aq.storage && aB.sortTable()) : aq.mergeRows && this.mergeRows()
    },
    c.prototype.mergeRows = function() {
        for (var l = this.$rowsSpans.find(".table > tbody > tr > td"), g = this.data.cols, h = 0; h < g.length; h++) {
            var m = g[h];
            if (m.mergeRows) {
                var p = l.filter('[data-index="' + h + '"]');
                if (p.length > 1) {
                    var j, k;
                    p.each(function() {
                        var a = d(this);
                        j && a.html() === j.html() ? (k = j.attr("rowspan") || 1, "number" != typeof k && (k = parseInt(k), isNaN(k) && (k = 1)), j.attr("rowspan", k + 1).css("vertical-align", "middle"), a.remove()) : j = a
                    })
                }
            }
        }
    },
    c.prototype.sortTable = function(M) {
        var Q = d.zui.store,
        I = this.options,
        E = this.id + "_datatableSorter",
        F = I.storage ? Q.pageGet(E) : null;
        if (M || (M = F ? this.$headCells.filter('[data-index="' + F.index + '"]').addClass("sort-" + F.type) : this.$headCells.filter(".sort-up, .sort-down").first()), M.length) {
            var z, B, H, N = this.data,
            O = N.cols,
            D = N.rows,
            J = this.$headCells;
            z = !M.hasClass("sort-up"),
            N.keepSort && (z = !z),
            N.keepSort = null,
            J.removeClass("sort-up sort-down"),
            M.addClass(z ? "sort-up": "sort-down"),
            H = M.data("index"),
            d.each(O,
            function(a, g) {
                a == H || "up" !== g.sort && "down" !== g.sort ? a == H && (g.sort = z ? "up": "down", B = g.type) : g.sort = !0
            });
            var L, x, K, q = this.$dataCells.filter('[data-index="' + H + '"]');
            D.sort(function(a, g) {
                return a = a.data[H],
                g = g.data[H],
                L = q.filter('[data-row="' + a.row + '"]').text(),
                x = q.filter('[data-row="' + g.row + '"]').text(),
                "number" === B ? (L = parseFloat(L), x = parseFloat(x)) : "date" === B ? (L = Date.parse(L), x = Date.parse(x)) : (L = L.toLowerCase(), x = x.toLowerCase()),
                K = L > x ? 1 : L < x ? -1 : 0,
                z && (K *= -1),
                K
            });
            var G, P, j, k = this.$rows,
            A = [];
            d.each(D,
            function(h, g) {
                G = k.filter('[data-index="' + g.index + '"]'),
                G.each(function(a) {
                    j = d(this),
                    P = A[a],
                    P ? P.after(j) : j.parent().prepend(j),
                    A[a] = j
                })
            }),
            F = {
                index: H,
                type: z ? "up": "down"
            },
            I.storage && Q.pageSet(E, F),
            this.callEvent("sort", {
                sorter: F
            })
        }
    },
    c.prototype.refreshSize = function() {
        var p, v = this.$datatable,
        m = this.options,
        h = this.data.rows;
        this.data.cols;
        if (v.find(".datatable-span.fixed-left").css("width", m.fixedLeftWidth), v.find(".datatable-span.fixed-right").css("width", m.fixedRightWidth), m.fixCellHeight) {
            var j = function(r) {
                var l, n, s = 0;
                return r.css("height", "auto"),
                r.each(function() {
                    l = d(this),
                    n = l.attr("rowspan"),
                    n && 1 != n || (s = Math.max(s, l.outerHeight()))
                }),
                s
            },
            w = this.$dataCells,
            g = (this.$cells, this.$headCells),
            k = j(g);
            g.css("min-height", k).css("height", k);
            var q;
            for (p = 0; p < h.length; ++p) {
                q = w.filter('[data-row="' + p + '"]');
                var u = j(q);
                q.css("min-height", u).css("height", u)
            }
        }
    },
    c.prototype.callEvent = function(h, j) {
        var g = this.$.callEvent(h + "." + this.name, j, this).result;
        return ! (void 0 !== g && !g)
    },
    d.fn.datatable = function(e, g) {
        return this.each(function() {
            var j = d(this),
            a = j.data(f),
            h = "object" == typeof e && e;
            a || j.data(f, a = new c(this, h)),
            "string" == typeof e && ("load" !== e || !d.isPlainObject(g) || void 0 !== g.keepSort && null !== g.keepSort || (g.keepSort = !0), a[e](g))
        })
    },
    d.fn.datatable.Constructor = c
} (jQuery);
function createLink(d, b, e, a, c) {
    if (!a) {
        a = config.defaultView
    }
    if (!c) {
        c = false
    }
    if (e) {
        e = e.split("&");
        for (i = 0; i < e.length; i++) {
            splited = e[i].split("=");
            var f = new Array();
            f[0] = splited.shift();
            f[1] = splited.join("=");
            e[i] = f
        }
    }
    if (config.requestType != "GET") {
        if (config.requestType == "PATH_INFO") {
            link = config.webRoot + d + config.requestFix + b
        }
        if (config.requestType == "PATH_INFO2") {
            link = config.webRoot + "index.php/" + d + config.requestFix + b
        }
        if (e) {
            for (i = 0; i < e.length; i++) {
                link += config.requestFix + e[i][1]
            }
        }
        link += "." + a
    } else {
        link = config.router + "?" + config.moduleVar + "=" + d + "&" + config.methodVar + "=" + b + "&" + config.viewVar + "=" + a;
        if (e) {
            for (i = 0; i < e.length; i++) {
                link += "&" + e[i][0] + "=" + e[i][1]
            }
        }
    }
    if ((typeof(config.onlybody) != "undefined" && config.onlybody == "yes") || c) {
        var g = config.requestType != "GET" ? "?onlybody=yes": "&onlybody=yes";
        link = link + g
    }
    return link
}
function setSearchBox() {
    $("#typeSelector a").click(function() {
        $("#typeSelector li.active").removeClass("active");
        var a = $(this);
        a.closest("li").addClass("active");
        $("#searchType").val(a.data("value"));
        $("#searchTypeName").text(a.text())
    })
}
function shortcut() {
    objectType = $("#searchType").attr("value");
    objectValue = $("#searchQuery").attr("value");
    if (objectType && objectValue) {
        method = objectType == "testsuite" ? "library": "view";
        location.href = createLink(objectType, method, "id=" + objectValue)
    }
}
function showSearchMenu(f, g, h, b, j) {
    var e = $(f == "branch" ? "#currentBranch": (f == "tree" ? "#currentModule": "#currentItem")).closest("li").toggleClass("show");
    if (!e.hasClass("show")) {
        return
    }
    var c = e.find("#dropMenu");
    var d = $.zui.uuid();
    if (!$.cookie("ajax_quickJump")) {
        $.cookie("ajax_quickJump", "on", {
            expires: config.cookieLife,
            path: config.webRoot
        });
        $.get(createLink("score", "ajax", "method=quickJump"))
    }
    if (!c.data("initData")) {
        var a = createLink(f, "ajaxGetDropMenu", "objectID=" + g + "&module=" + h + "&method=" + b + "&extra=" + j);
        $.get(a,
        function(o) {
            var n = c.html(o).find("#search").focus();
            var p = c.find("#searchResult ul > li:not(.heading)");
            var l = [];
            p.each(function() {
                var q = $(this).removeClass("active");
                var r = q.data();
                r.uuid = "searchItem-" + (d++);
                r.key = (r.key || "") + q.text();
                r.tag = (r.tag || "") + "#" + r.id;
                q.attr("id", r.uuid);
                l.push(r)
            });
            var k = function() {
                var s = $.trim(n.val());
                if (s !== null && s.length) {
                    p.removeClass("show-search");
                    c.addClass("searching");
                    var r = s.length > 1 && (s[0] === ":" || s[0] === "@" || s[0] === "#");
                    $.each(l,
                    function(u, v) {
                        if ((r && v.tag.indexOf(s) > -1) || v.key.indexOf(s) > -1) {
                            $("#" + v.uuid).addClass("show-search")
                        }
                    });
                    var q = p.filter(".show-search");
                    if (!q.filter(".active").length) {
                        q.first().addClass("active")
                    }
                } else {
                    c.removeClass("searching")
                }
            };
            var m = null;
            n.on("change keyup paste input propertychange",
            function() {
                clearTimeout(m);
                m = setTimeout(k, 200)
            }).on("keydown",
            function(v) {
                var s = v.which;
                var r = c.hasClass("searching");
                var q = r ? p.filter(".show-search") : p;
                var x = q.length;
                if (!x) {
                    return
                }
                var u = q.filter(".active:first");
                var w = function() {
                    var y = -1;
                    q.each(function(z) {
                        if ($(this).is(u)) {
                            y = z;
                            return false
                        }
                    });
                    return y
                };
                if (s === 38) {
                    p.removeClass("active");
                    if (u.length) {
                        q.eq((w() - 1) % x).addClass("active")
                    } else {
                        q.last().addClass("active")
                    }
                } else {
                    if (s === 40) {
                        p.removeClass("active");
                        if (u.length) {
                            q.eq((w() + 1) % x).addClass("active")
                        } else {
                            q.first().addClass("active")
                        }
                    } else {
                        if (s === 13) {
                            if (u.length) {
                                window.location.href = u.children("a").attr("href")
                            }
                        }
                    }
                }
            });
            c.on("mouseenter", " ul > li:not(.heading)",
            function() {
                p.filter(".active").removeClass("active");
                $(this).addClass("active")
            })
        });
        c.data("initData", true);
        $(document).on("click",
        function() {
            e.removeClass("show")
        });
        e.on("click",
        function(k) {
            k.stopPropagation()
        })
    } else {
        c.find("#search").focus()
    }
}
function switchMore() {
    $("#search").width($("#search").width()).focus();
    $("#moreMenu").width($("#defaultMenu").outerWidth());
    $("#searchResult").toggleClass("show-more")
}
function switchDocLib(c, b, d, a) {
    if (b == "doc") {
        if (d != "view" && d != "edit") {
            link = createLink(b, d, "rootID=" + c)
        } else {
            link = createLink("doc", "browse")
        }
    } else {
        if (b == "tree") {
            link = createLink(b, d, "rootID=" + c + "&type=" + a)
        }
    }
    location.href = link
}
function setPing() {
    $("#hiddenwin").attr("src", createLink("misc", "ping"))
}
function setRequiredFields() {
    if (config.requiredFields) {
        requiredFields = config.requiredFields.split(",");
        for (i = 0; i < requiredFields.length; i++) {
            var a = $("#" + requiredFields[i]);
            var c = a.parent();
            if (c.hasClass("input-group") && c.find("input").length > 1) {
                var b = $('<div class="input-group-required"><div class="required"></div></div>');
                a.after(b);
                b.find(".required").append(a);
                if (a.is("select")) {
                    b.addClass("fix-pd-right")
                }
            } else {
                a.closest("td,th").prepend("<div class='required required-wrapper'></div>");
                var d = a.closest('[class*="col-"]');
                if (d.parent().hasClass("form-group")) {
                    d.addClass("required")
                }
            }
        }
    }
    $(".required").closest("td,th").next().css("padding-left", "15px")
}
function setHelpLink() {
    if (!$.cookie("help")) {
        $.cookie("help", "off", {
            expires: config.cookieLife,
            path: config.webRoot
        })
    }
    className = $.cookie("help") == "off" ? "hidden": "";
    $("form input[id], form select[id], form textarea[id]").each(function() {
        if ($(this).attr("type") == "hidden" || $(this).attr("type") == "file") {
            return
        }
        currentFieldName = $(this).attr("name") ? $(this).attr("name") : $(this).attr("id");
        if (currentFieldName == "submit" || currentFieldName == "reset") {
            return
        }
        if (currentFieldName.indexOf("[") > 0) {
            currentFieldName = currentFieldName.substr(0, currentFieldName.indexOf("["))
        }
        currentFieldName = currentFieldName.toLowerCase();
        helpLink = createLink("help", "field", "module=" + config.currentModule + "&method=" + config.currentMethod + "&field=" + currentFieldName);
        $(this).after(' <a class="helplink ' + className + '" href=' + helpLink + ' target="_blank">?</a> ')
    });
    $("a.helplink").modalTrigger({
        width: 600,
        type: "iframe"
    })
}
function setPlaceholder() {
    if (typeof(holders) != "undefined") {
        for (var a in holders) {
            if ($("#" + a).prop("tagName") == "INPUT") {
                $("#" + a).attr("placeholder", holders[a])
            }
        }
    }
}
function toggleHelpLink() {
    $(".helplink").toggle();
    if ($.cookie("help") == "off") {
        return $.cookie("help", "on", {
            expires: config.cookieLife,
            path: config.webRoot
        })
    }
    if ($.cookie("help") == "on") {
        return $.cookie("help", "off", {
            expires: config.cookieLife,
            path: config.webRoot
        })
    }
}
function hideTreeBox(a) {
    $.cookie(a, "hide", {
        expires: config.cookieLife,
        path: config.webRoot
    });
    $(".outer").addClass("hide-side");
    var b = $(".side-handle .icon-caret-left").size() > 0 ? "left": "right";
    $(".side-handle .icon-caret-" + b).removeClass("icon-caret-" + b).addClass("icon-caret-" + (b == "left" ? "right": "left"))
}
function showTreeBox(a) {
    $.cookie(a, "show", {
        expires: config.cookieLife,
        path: config.webRoot
    });
    $(".outer").removeClass("hide-side");
    var b = $(".side-handle .icon-caret-left").size() > 0 ? "left": "right";
    $(".side-handle .icon-caret-" + b).removeClass("icon-caret-" + b).addClass("icon-caret-" + (b == "left" ? "right": "left"))
}
function setTreeBox() {
    var b = $(".side-handle");
    if (b.data("setted")) {
        return
    }
    var a = b.data("id");
    if (a) {
        if ($.cookie(a) == "hide") {
            hideTreeBox(a)
        }
        b.toggle(function() {
            if ($.cookie(a) == "hide") {
                return showTreeBox(a)
            }
            hideTreeBox(a)
        },
        function() {
            if ($.cookie(a) == "show") {
                return hideTreeBox(a)
            }
            showTreeBox(a)
        }).data("setted", true)
    }
    if ($(".outer > .side").length) {
        $(".outer").addClass("with-side")
    }
    setTimeout(function() {
        $(".outer.with-side").addClass("with-transition")
    },
    1000);
    adjustOuterSize()
}
function selectLang(a) {
    $.cookie("lang", a, {
        expires: config.cookieLife,
        path: config.webRoot
    });
    $.get(createLink("score", "ajax", "method=selectLang"));
    location.href = removeAnchor(location.href)
}
function selectTheme(a) {
    $.cookie("theme", a, {
        expires: config.cookieLife,
        path: config.webRoot
    });
    $.get(createLink("score", "ajax", "method=selectTheme"));
    location.href = removeAnchor(location.href)
}
function removeAnchor(a) {
    pos = a.indexOf("#");
    if (pos > 0) {
        return a.substring(0, pos)
    }
    return a
}
function saveWindowSize() {
    width = $(window).width();
    height = $(window).height();
    $.cookie("windowWidth", width);
    $.cookie("windowHeight", height)
}
function adjustOuterSize() {
    var b = $("#wrap .outer > .side");
    var c = b.length ? (b.outerHeight() + $("#featurebar").outerHeight() + 20) : 0;
    var a = Math.max(c, $(window).height() - $("#header").outerHeight() - ($("#footer").outerHeight() || 0) - 20);
    if (navigator.userAgent.indexOf("MSIE 8.0") >= 0) {
        a -= 40
    }
    $("#wrap .outer").css("min-height", a)
}
function setOuterBox() {
    var a = $("#wrap .outer > .side");
    a.resize(adjustOuterSize);
    $(window).resize(adjustOuterSize);
    adjustOuterSize()
}
function setForm() {
    var a = false;
    $("form").submit(function() {
        submitObj = $(this).find(":submit");
        if ($(submitObj).size() >= 1) {
            var c = submitObj.prop("tagName") == "BUTTON";
            submitLabel = c ? $(submitObj).html() : $(submitObj).attr("value");
            $(submitObj).attr("disabled", "disabled");
            var b = submitObj.attr("data-submitting") || lang.submitting;
            if (c) {
                submitObj.text(b)
            } else {
                $(submitObj).attr("value", b)
            }
            a = true
        }
    });
    $("body").click(function() {
        if (a) {
            $(submitObj).removeAttr("disabled");
            if (submitObj.prop("tagName") == "BUTTON") {
                submitObj.text(submitLabel)
            } else {
                $(submitObj).attr("value", submitLabel)
            }
            $(submitObj).removeClass("button-d")
        }
        a = false
    })
}
function setFormAction(b, c, f) {
    $form = typeof(f) == "undefined" ? $("form") : $(f).closest("form");
    if (c) {
        $form.attr("target", c)
    } else {
        $form.removeAttr("target")
    }
    $form.attr("action", b);
    var d = navigator.userAgent;
    var a = d.indexOf("AppleWebKit") > -1 && d.indexOf("Safari") > -1 && d.indexOf("Chrome") < 0;
    if (a) {
        var e = "checkbox-fix-" + $.zui.uuid();
        $form.find("[data-fix-checkbox]").remove();
        $form.find('input[type="checkbox"]:not(.rows-selector)').each(function() {
            var g = $(this);
            var h = e + g.val();
            g.clone().attr("data-fix-checkbox", h).css("display", "none").after('<div id="' + h + '"/>').appendTo($form)
        })
    }
    $form.submit()
}
function setImageSize(b, a) {
    if (!a) {
        bodyWidth = $("body").width();
        a = bodyWidth - 470
    }
    if ($(b).width() > a) {
        $(b).attr("width", a)
    }
    $(b).wrap('<a href="' + $(b).attr("src") + '" target="_blank"></a>')
}
function setModalTriggerLink() {
    $(".repolink").modalTrigger({
        width: 960,
        type: "iframe"
    });
    $(".export").modalTrigger({
        width: 800,
        type: "iframe",
        afterShown: setCheckedCookie
    })
}
function setMailto(a, b) {
    link = createLink("user", "ajaxGetContactUsers", "listID=" + b);
    $.get(link,
    function(c) {
        $("#" + a).replaceWith(c);
        $("#" + a + "_chosen").remove();
        $("#" + a).chosen(defaultChosenOptions)
    })
}
function ajaxGetContacts(a) {
    link = createLink("user", "ajaxGetContactList");
    $.get(link,
    function(b) {
        if (!b) {
            return false
        }
        $inputgroup = $(a).closest(".input-group");
        $inputgroup.find(".input-group-btn").remove();
        $inputgroup.append(b);
        $inputgroup.find("select:last").chosen(defaultChosenOptions)
    })
}
function setComment() {
    $("#commentBox").toggle();
    $(".ke-container").css("width", "100%");
    setTimeout(function() {
        $("#commentBox textarea").focus()
    },
    50)
}
function checkTable(a) {
    $(document).off("change.checktable").on("change.checktable", ".rows-selector:checkbox",
    function() {
        var g = $(this);
        var h = g.closest(".datatable");
        if (h.length) {
            var e = h.find(".check-all.check-btn:first").trigger("click");
            g.prop("checked", e.hasClass("checked"));
            return
        }
        var f = g.data("scope");
        var d = f ? $("#" + f) : g.closest(".table");
        var j = g.prop("checked");
        d.find("tbody > tr").toggleClass("active", j).find("td :checkbox").prop("checked", j)
    });
    a = a || $('.table-selectable,table[checkable="true"]');
    if (!a.length) {
        return
    }
    if (!a.find(":checkbox").length) {
        a.on("click", "tbody > tr",
        function() {
            a.find("tr.active").removeClass("active");
            $(this).addClass("active")
        });
        return
    }
    var c = function(f) {
        if (document.activeElement.type != "select-one" && document.activeElement.type != "text") {
            var g = $(this);
            var e = g.closest("tr");
            var d = e.find(":checkbox");
            if (d.size() == 0) {
                return
            }
            var h = d.prop("checked");
            if (!g.is(":checkbox")) {
                if (!$.cookie("ajax_dragSelected") && d.size() > 2) {
                    $.cookie("ajax_dragSelected", "on", {
                        expires: config.cookieLife,
                        path: config.webRoot
                    });
                    $.get(createLink("score", "ajax", "method=dragSelected"))
                }
                h = f === true || f === false ? f: !h;
                d.prop("checked", h)
            }
            if (!e.hasClass(".active-disabled")) {
                e.toggleClass("active", h)
            }
            e.closest(".table").find(".rows-selector").prop("checked", false)
        }
    };
    var b = a.hasClass("table-selectable");
    a.selectable({
        selector: "tbody > tr",
        trigger: "tbody",
        ignoreVal: 10,
        start: function(f) {
            if ($(f.target).is(":checkbox,a")) {
                return false
            }
            var d = this;
            d.selections = {};
            d.$.find("tbody > tr").each(function(e) {
                var g = $(this);
                if (g.hasClass(d.options.selectClass)) {
                    d.selections[g.data("id")] = e + 1
                }
            })
        },
        clickBehavior: "multi",
        startDrag: function(d) {
            if (!this.multiKey && b && !$(d.target).closest(".cell-id").length) {
                return false
            }
        },
        select: function(d) {
            c.call(d.target, true)
        },
        unselect: function(d) {
            c.call(d.target, false)
        }
    }).on("click", "tbody > tr :checkbox",
    function(d) {
        c.call(this);
        d.stopPropagation()
    }).on("click mousedown mousemove mouseup", "tbody a,tbody select,tbody input",
    function(d) {
        d.stopPropagation()
    })
}
function toggleSearch() {
    $("#bysearchTab").toggle(function() {
        if (browseType == "bymodule") {
            $("#bymoduleTab").removeClass("active")
        } else {
            $("#" + browseType + "Tab").removeClass("active")
        }
        $("#bysearchTab").addClass("active");
        ajaxGetSearchForm();
        $("#querybox").addClass("show")
    },
    function() {
        if (browseType == "bymodule") {
            $("#bymoduleTab").addClass("active")
        } else {
            $("#" + browseType + "Tab").addClass("active")
        }
        $("#bysearchTab").removeClass("active");
        $("#querybox").removeClass("show")
    })
}
function ajaxGetSearchForm(b) {
    var a = $(b || "#querybox");
    if (a.html() == "") {
        $.get(createLink("search", "buildForm"),
        function(c) {
            a.html(c)
        })
    }
}
function addItem(d, b) {
    ItemList = document.getElementById(d);
    Target = document.getElementById(b);
    for (var a = 0; a < ItemList.length; a++) {
        var c = ItemList.options[a];
        if (c.selected) {
            flag = true;
            for (var f = 0; f < Target.length; f++) {
                var e = Target.options[f];
                if (e.value == c.value) {
                    flag = false
                }
            }
            if (flag) {
                Target.options[Target.options.length] = new Option(c.text, c.value, 0, 0)
            }
        }
    }
}
function delItem(c) {
    ItemList = document.getElementById(c);
    for (var a = ItemList.length - 1; a >= 0; a--) {
        var b = ItemList.options[a];
        if (b.selected) {
            ItemList.options[a] = null
        }
    }
}
function upItem(c) {
    ItemList = document.getElementById(c);
    for (var a = 1; a < ItemList.length; a++) {
        var b = ItemList.options[a];
        if (b.selected) {
            tmpUpValue = ItemList.options[a - 1].value;
            tmpUpText = ItemList.options[a - 1].text;
            ItemList.options[a - 1].value = b.value;
            ItemList.options[a - 1].text = b.text;
            ItemList.options[a].value = tmpUpValue;
            ItemList.options[a].text = tmpUpText;
            ItemList.options[a - 1].selected = true;
            ItemList.options[a].selected = false;
            break
        }
    }
}
function downItem(c) {
    ItemList = document.getElementById(c);
    for (var a = 0; a < ItemList.length; a++) {
        var b = ItemList.options[a];
        if (b.selected) {
            tmpUpValue = ItemList.options[a + 1].value;
            tmpUpText = ItemList.options[a + 1].text;
            ItemList.options[a + 1].value = b.value;
            ItemList.options[a + 1].text = b.text;
            ItemList.options[a].value = tmpUpValue;
            ItemList.options[a].text = tmpUpText;
            ItemList.options[a + 1].selected = true;
            ItemList.options[a].selected = false;
            break
        }
    }
}
function selectItem(c) {
    ItemList = document.getElementById(c);
    for (var a = ItemList.length - 1; a >= 0; a--) {
        var b = ItemList.options[a];
        b.selected = true
    }
}
function ajaxDelete(a, c, b) {
    if (confirm(b)) {
        $.ajax({
            type: "GET",
            url: a,
            dataType: "json",
            success: function(d) {
                if (d.result == "success") {
                    $.get(document.location.href,
                    function(e) {
                        $("#" + c).html($(e).find("#" + c).html());
                        if (typeof sortTable == "function") {
                            sortTable()
                        }
                        $("#" + c).find("[data-toggle=modal], a.iframe").modalTrigger();
                        $("#" + c).find("table.datatable").datatable()
                    })
                }
            }
        })
    }
}
function isNum(b) {
    if (b != null) {
        var c, a;
        a = /\d*/i;
        c = b.match(a);
        return (c == b) ? true: false
    }
    return false
}
function setModal() {
    jQuery.fn.modalTrigger = function(e) {
        return $(this).each(function() {
            var f = $(this);
            f.off("click.modalTrigger.zui");
            f.on("click.modalTrigger.zui",
            function(m) {
                var j = $(this);
                if (j.closest(".body-modal").length) {
                    return
                }
                if (j.hasClass("disabled")) {
                    return false
                }
                var h = (e ? e.url: false) || j.attr("href") || j.data("url");
                var l = (e ? e.type: false) || (j.hasClass("iframe") ? "iframe": (j.data("type") || "ajax"));
                if (l == "iframe") {
                    var g = $.extend({
                        url: h,
                        title: j.attr("title") || j.text(),
                        cssClass: j.data("class"),
                        icon: "?",
                        center: true
                    },
                    e, j.data());
                    if (g.icon == "?") {
                        var k = j.find("[class^='icon-']");
                        g.icon = k.length ? k.attr("class").substring(5) : "file-text"
                    }
                    c(g)
                } else {
                    a();
                    $.get(h,
                    function(p) {
                        var o = $.extend({
                            width: 800,
                            title: j.attr("title") || j.text(),
                            icon: "?",
                            backdrop: "static",
                            show: true
                        },
                        e, j.data());
                        var q = $("#ajaxModal");
                        if (p.indexOf("modal-dialog") < 0) {
                            p = "<div class='modal-dialog modal-ajax' style='width: {width};'><div class='modal-content'><div class='modal-header'><button class='close' data-dismiss='modal'>×</button><h4 class='modal-title'><i class='icon-{icon}'></i> {title}</h4></div><div class='modal-body' style='height:{height}'>{content}</div></div></div>".format($.extend({
                                content: p
                            },
                            o))
                        }
                        q.html(p);
                        if (o.width) {
                            var n = parseInt(o.width);
                            $ajaxModal.data("width", n).find(".modal-dialog").css("width", n);
                            d()
                        }
                        q.modal(o)
                    })
                }
                $("#ajaxModal").attr("rel", h);
                m.preventDefault();
                return false
            })
        })
    };
    function c(h) {
        var f = {
            width: 800,
            height: "auto",
            icon: "?",
            title: "",
            name: "modalIframe",
            cssClass: "",
            headerless: false,
            waittime: 0,
            center: true,
            backdrop: "static",
            show: true
        };
        if (typeof(h) == "string") {
            f.url = h
        } else {
            f = $.extend(f, h)
        }
        a(f);
        if (isNum(f.height.toString())) {
            f.height += "px"
        }
        if (isNum(f.width.toString())) {
            f.width += "px"
        }
        if (f.size == "fullscreen") {
            var k = $(window);
            f.width = k.width();
            f.height = k.height();
            f.cssClass += " fullscreen"
        }
        if (f.headerless) {
            f.cssClass += " hide-header"
        }
        if (typeof(f.url) == "undefined" || !f.url) {
            return false
        }
        var j = $("#ajaxModal").addClass("modal-loading").data("first", true);
        j.html("<div class='icon-spinner icon-spin loader'></div><div class='modal-dialog modal-iframe' style='width: {width};'><div class='modal-content'><div class='modal-header'><button class='close' data-dismiss='modal'>×</button><h4 class='modal-title'><i class='icon-{icon}'></i> {title}</h4></div><div class='modal-body' style='height:{height}'><iframe id='{name}' name='{name}' src='{url}' frameborder='no' allowtransparency='true' scrolling='auto' hidefocus='' style='width: 100%; height: 100%; left: 0px;'></iframe></div></div></div>".format(f));
        var e = j.find(".modal-body"),
        g = j.find(".modal-dialog");
        if (f.cssClass) {
            g.addClass(f.cssClass)
        }
        if (f.waittime > 0) {
            f.waitingFuc = setTimeout(function() {
                b(f, j, e, g)
            },
            f.waittime)
        }
        var l = document.getElementById(f.name);
        l.onload = l.onreadystatechange = function() {
            if (this.readyState && this.readyState != "complete") {
                return
            }
            if (j.data("first") && (!j.hasClass("modal-loading"))) {
                return
            }
            if (!j.data("first")) {
                j.addClass("modal-loading")
            }
            if (f.waittime > 0) {
                clearTimeout(f.waitingFuc)
            }
            b(f, j, e, g)
        };
        j.modal(f)
    }
    function b(h, k, g, j) {
        g.css("height", h.height - k.find(".modal-header").outerHeight());
        try {
            var f = window.frames[h.name].$;
            f(function() {
                if (f("#titlebar").length) {
                    k.addClass("with-titlebar");
                    if (h.size == "fullscreen") {
                        g.css("height", h.height)
                    }
                }
                if (h.height == "auto") {
                    var e = f("body");
                    setTimeout(function() {
                        k.removeClass("fade");
                        var m = e.addClass("body-modal").outerHeight();
                        f("#titlebar > .heading a").each(function() {
                            var n = f(this);
                            n.replaceWith("<strong class='heading-title'>" + n.text() + "</strong>")
                        });
                        if (typeof m == "object") {
                            m = e.height()
                        }
                        g.css("height", m);
                        d();
                        if (k.data("first")) {
                            k.data("first", false)
                        }
                        k.removeClass("modal-loading").addClass("fade")
                    },
                    100);
                    e.resize(function() {
                        var m = e.outerHeight();
                        if (typeof m == "object") {
                            m = e.height()
                        }
                        g.css("height", m);
                        d()
                    })
                } else {
                    k.removeClass("modal-loading")
                }
            });
            if (f) {
                f.extend({
                    closeModal: $.closeModal
                })
            }
        } catch(l) {
            k.removeClass("modal-loading")
        }
    }
    function a(e) {
        if ($("#ajaxModal").length) {
            $("#ajaxModal").attr("class", "modal fade").off("show.zui.modal shown.zui.modal hide.zui.modal hidden.zui.modal")
        } else {
            $('<div id="ajaxModal" class="modal fade"></div>').appendTo("body")
        }
        $ajaxModal = $("#ajaxModal");
        $ajaxModal.data("cancel-reload", false);
        $.extend({
            closeModal: function(g, f) {
                $ajaxModal.on("hidden.zui.modal",
                function() {
                    if (f && (!$ajaxModal.data("cancel-reload"))) {
                        if (f == "this") {
                            window.location.reload()
                        } else {
                            window.location = f
                        }
                    }
                    if (g && $.isFunction(g)) {
                        g()
                    }
                });
                $ajaxModal.modal("hide")
            },
            cancelReloadCloseModal: function() {
                $ajaxModal.data("cancel-reload", true)
            }
        });
        if (!e) {
            return
        }
        if (e.afterShow && $.isFunction(e.afterShow)) {
            $ajaxModal.on("show.zui.modal", e.afterShow)
        }
        if (e.afterShown && $.isFunction(e.afterShown)) {
            $ajaxModal.on("shown.zui.modal", e.afterShown)
        }
        if (e.afterHide && $.isFunction(e.afterHide)) {
            $ajaxModal.on("hide.zui.modal", e.afterHide)
        }
        if (e.afterHidden && $.isFunction(e.afterHidden)) {
            $ajaxModal.on("hidden.zui.modal", e.afterHidden)
        }
    }
    function d(e, f) {
        e = e || "fit";
        if (!f) {
            f = $("#ajaxModal .modal-dialog")
        }
        if (e) {
            var g = Math.max(0, ($(window).height() - f.outerHeight()) / 2);
            var h = e == "fit" ? (g * 2 / 3) : (e == "center" ? g: e);
            f.css("margin-top", h)
        }
    }
    $.extend({
        ajustModalPosition: d,
        modalTrigger: c,
        colorbox: function(e) {
            if ((typeof e == "object") && e.iframe) {
                $.modalTrigger({
                    type: "iframe",
                    width: e.width,
                    afterHide: e.onCleanup,
                    url: e.href
                })
            }
        }
    });
    $("[data-toggle=modal], a.iframe").modalTrigger();
    jQuery.fn.colorbox = function(e) {
        if ((typeof e == "object") && e.iframe) {
            $(this).modalTrigger({
                type: "iframe",
                width: e.width,
                afterHide: e.onCleanup,
                url: e.href
            })
        }
    }
}
function setModal4List(c, b, d, a) {
    if (typeof(a) == "undefined") {
        a = 900
    }
    $("." + c).modalTrigger({
        width: a,
        type: "iframe",
        afterHide: function() {
            var f = $.cookie("selfClose");
            if (f != 1) {
                return
            }
            saveWindowSize();
            if (typeof(b) == "string" && b.length > 0) {
                $.cancelReloadCloseModal();
                var g = self.location.href;
                var e = "#" + b;
                $(e).wrap("<div id='tmpDiv'></div>");
                $("#tmpDiv").load(g + " " + e,
                function() {
                    $("#tmpDiv").replaceWith($("#tmpDiv").html());
                    setTimeout(function() {
                        setModal4List(c, b, d, a)
                    },
                    150);
                    var h = $(e),
                    k = $("#datatable-" + h.attr("id"));
                    if (h.hasClass("datatable") && k.length && $.fn.datatable) {
                        h.hide();
                        k.data("zui.datatable").load(e)
                    }
                    h.find("[data-toggle=modal], a.iframe").modalTrigger();
                    try {
                        $(".date").datetimepicker(datepickerOptions)
                    } catch(j) {}
                    if (h.is(".table-selectable:not(.table-datatable)")) {
                        checkTable(h)
                    } else {
                        h.find("tbody tr:not(.active-disabled) td").click(function() {
                            $(this).closest("tr").toggleClass("active")
                        })
                    }
                    if ($.isFunction(d)) {
                        d(h)
                    }
                    $.cookie("selfClose", 0)
                })
            } else {
                if ($.isFunction(d)) {
                    d()
                }
            }
        }
    })
}
function setCheckedCookie() {
    var a = "";
    $(":checkbox").each(function() {
        if ($(this).attr("checked")) {
            if (!isNaN($(this).val())) {
                var b = parseInt($(this).val());
                if (b != 0) {
                    a = a + b + ","
                }
            }
        }
    });
    if (a != "") {
        a = a.substring(0, a.length - 1)
    }
    $.cookie("checkedItem", a, {
        expires: config.cookieLife,
        path: config.webRoot
    })
}
function setTableBehavior() {
    $("#wrap .outer > .table, #wrap .outer > form > .table, #wrap .outer > .mian > .table, #wrap .outer > .mian > form > .table, #wrap .outer > .container > .table").not(".table-data, .table-form, .table-custom").addClass("table table-condensed table-hover table-striped tablesorter").each(function() {
        var a = $(this).children("tbody");
        if (!a.children().length) {
            a.remove()
        }
    });
    $(document).on("click", "tr[data-url]",
    function() {
        var a = $(this).data("url");
        if (a) {
            window.location.href = a
        }
    })
}
function fixStyle() {
    var a = $("#titlebar > .actions");
    if (a.length) {
        $("#titlebar > .heading").css("padding-right", a.width())
    }
}
function startCron(a) {
    if (typeof(a) == "undefined") {
        a = 0
    }
    $.ajax({
        type: "GET",
        timeout: 100,
        url: createLink("cron", "ajaxExec", "restart=" + a)
    })
}
function computePasswordStrength(b) {
    if (b.length == 0) {
        return 0
    }
    var h = 0;
    var e = b.length;
    var c = "";
    var a = new Array();
    for (i = 0; i < e; i++) {
        letter = b.charAt(i);
        var d = letter.charCodeAt();
        if (d >= 48 && d <= 57) {
            a[2] = 2
        } else {
            if ((d >= 65 && d <= 90)) {
                a[1] = 2
            } else {
                if (d >= 97 && d <= 122) {
                    a[0] = 1
                } else {
                    a[3] = 3
                }
            }
        }
        if (c.indexOf(letter) == -1) {
            c += letter
        }
    }
    if (c.length > 4) {
        h += c.length - 4
    }
    var g = 0;
    var f = 0;
    for (i in a) {
        f += 1;
        g += a[i]
    }
    h += g + (2 * (f - 1));
    if (e < 6 && h >= 10) {
        h = 9
    }
    h = h > 29 ? 29 : h;
    h = Math.floor(h / 10);
    return h
}
function checkOnlybodyPage() {
    if (self == parent) {
        href = location.href.replace("?onlybody=yes", "");
        location.href = href.replace("&onlybody=yes", "")
    }
}
function fixedTfootAction(a) {
    var n = $(a);
    if (!n.length) {
        return false
    }
    var j = n.find("table:last");
    var g = j.find("tfoot");
    if (j.hasClass("table-datatable")) {
        j = n.find(".datatable-rows");
        g = n.find(".datatable-footer tfoot")
    }
    if (!g.length) {
        return false
    }
    var b = j.find("tbody"),
    k = g.find(".table-actions").children(".input-group"),
    h = $("#footer").height(),
    f,
    m,
    c;
    if (!b.length) {
        return false
    }
    if (typeof(ssoRedirect) != "undefined") {
        h = 0
    }
    function l() {
        var o = n.find("table:last");
        var p = o.find("tfoot");
        if (o.hasClass("table-datatable")) {
            o = n.find(".datatable-rows");
            p = n.find(".datatable-footer tfoot")
        }
        b = o.find("tbody"),
        k = p.find(".table-actions").children(".input-group"),
        h = $("#footer").height(),
        f = o.width();
        c = p.hasClass("fixedTfootAction");
        offsetHeight = $(window).height() + $(window).scrollTop() - h / 2;
        m = b.offset().top + b.height() + p.height();
        if (!c && offsetHeight <= m) {
            p.addClass("fixedTfootAction").width(f).find("td").width(f);
            if (k.size() > 0) {
                k.width(k.width())
            }
        }
        if (c && (offsetHeight > m || $(document).height() == offsetHeight)) {
            p.removeClass("fixedTfootAction").removeAttr("style").find("td").removeAttr("style")
        }
    }
    function e() {
        if (g.hasClass("fixedTfootAction")) {
            g.removeClass("fixedTfootAction")
        }
        l()
    }
    e();
    var d;
    $(window).scroll(function() {
        l();
        var o = n.find("table:last");
        var p = o.find("tfoot");
        if (o.hasClass("table-datatable")) {
            o = n.find(".datatable-rows");
            p = n.find(".datatable-footer tfoot")
        }
        p.addClass("scrolling scrolled");
        clearTimeout(d);
        d = setTimeout(function() {
            p.removeClass("scrolling")
        },
        200)
    }).resize(l);
    $(".side-handle").click(function() {
        setTimeout(e, 300)
    })
}
function fixedTableHead(a) {
    $(a).scroll(function() {
        var b = $(this).find(".fixedHead").size() > 0;
        if (!b) {
            $(this).css("position", "relative");
            if ($(this).find("table").size() == 1) {
                var d = "<table class='fixedHead' style='position:absolute;top:0px'><thead>" + $(this).find("table thead").html() + "</thead></table>";
                $(this).prepend(d);
                var e = $(this).find("table.fixedHead");
                e.addClass($(this).find("table:last").attr("class"));
                var c = $(this).find("table:last thead th");
                e.find("thead th").each(function(f) {
                    e.find("thead th").eq(f).width(c.eq(f).width())
                })
            }
        }
        $(this).find("table.fixedHead").css("top", $(this).scrollTop())
    })
}
function fixedTheadOfList(d) {
    if ($(d).size() == 0) {
        return false
    }
    if ($(d).css("display") == "none") {
        return false
    }
    if ($(d).find("thead").size() == 0) {
        return false
    }
    e();
    $(window).scroll(g);
    $(".side-handle").click(function() {
        setTimeout(e, 300)
    });
    var b, f, c, a;
    function g() {
        f = $(d).find("thead").offset().top;
        a = $(d).parent().find(".fixedTheadOfList");
        if (a.size() <= 0 && f < $(window).scrollTop()) {
            b = $(d).width();
            c = "<table class='fixedTheadOfList'><thead>" + $(d).find("thead").html() + "</thead></table>";
            $(d).before(c);
            $(".fixedTheadOfList").addClass($(d).attr("class")).width(b)
        }
        if (a.size() > 0 && f >= $(window).scrollTop()) {
            a.remove()
        }
    }
    function e() {
        a = $(d).parent().find(".fixedTheadOfList");
        if (a.size() > 0) {
            a.remove()
        }
        g()
    }
}
function initPrioritySelector() {
    $(".dropdown-pris").each(function() {
        var g = $(this);
        var f = g.data("prefix") || "pri";
        var c = g.find("select");
        var a = parseInt(c.hide().val());
        var e = g.children(".dropdown-menu");
        if (!e.length) {
            e = $('<ul class="dropdown-menu"></ul>');
            g.append(e)
        }
        if (!e.children("li").length) {
            var h = c.children("option").map(function() {
                return parseInt($(this).val())
            }).get();
            if (!h || !h.length) {
                h = g.data("set");
                h = h ? h.split(",") : [0, 1, 2, 3, 4]
            }
            h.sort(function(k, j) {
                return k - j
            });
            for (var d = 0; d < h.length; ++d) {
                var b = h[d];
                e.append('<li><a href="###" data-pri="' + b + '"><span class="' + f + b + '">' + (b ? b: "") + "</span></a></li>")
            }
        }
        e.find('a[data-pri="' + a + '"]').parent().addClass("active");
        g.find(".pri-text").html('<span class="' + f + a + '">' + (a ? a: "") + "</span>");
        g.on("click", ".dropdown-menu > li > a",
        function() {
            var j = $(this);
            e.children("li.active").removeClass("active");
            j.parent().addClass("active");
            a = j.data("pri");
            c.val(a);
            g.find(".pri-text").html('<span class="' + f + a + '">' + (a ? a: "") + "</span>")
        })
    })
}
function applyCssStyle(e, b) {
    b = b || "default";
    var d = "applyStyle-" + b;
    var c = $("style#" + d);
    if (!c.length) {
        c = $('<style id="' + d + '">').appendTo("body")
    }
    var a = c.get(0);
    if (a.styleSheet) {
        a.styleSheet.cssText = e
    } else {
        a.innerHTML = e
    }
}
function showBrowserNotice() {
    userAgent = navigator.userAgent.toLowerCase();
    $browser = new Object();
    $browser.msie = /msie/.test(userAgent);
    $browser.chrome = /chrome/.test(userAgent);
    var a = false;
    if (navigator.userAgent.indexOf("MetaSr") >= 0) {
        a = true
    } else {
        if (navigator.userAgent.indexOf("LBBROWSER") >= 0) {
            a = true
        } else {
            if (navigator.userAgent.indexOf("QQBrowser") >= 0) {
                a = true
            } else {
                if (navigator.userAgent.indexOf("TheWorld") >= 0) {
                    a = true
                } else {
                    if (navigator.userAgent.indexOf("BIDUBrowser") >= 0) {
                        a = true
                    } else {
                        if (navigator.userAgent.indexOf("Maxthon") >= 0) {
                            a = true
                        }
                    }
                }
            }
        }
    }
    if (a) {
        $("body").prepend('<div class="alert alert-info alert-dismissable" style="margin:0px;"><button type=button" onclick="ajaxIgnoreBrowser()" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-remove"></i></button><p>' + browserNotice + "</p></div>")
    }
}
function removeCookieByKey(a) {
    $.cookie(a, "", {
        expires: config.cookieLife,
        path: config.webRoot
    });
    location.href = location.href
}
function initHotKey() {
    $(document).bind("keydown", "Ctrl+g",
    function(a) {
        $("#searchQuery").val("").focus();
        a.stopPropagation();
        a.preventDefault();
        return false
    }).bind("keydown", "Alt+up",
    function() {
        var a = $("#back").attr("href");
        if (a) {
            location.href = a
        }
    }).bind("keydown", "left",
    function() {
        var a = $("#pre").attr("href");
        if (!$.cookie("ajax_lastNext")) {
            $.cookie("ajax_lastNext", "on", {
                expires: config.cookieLife,
                path: config.webRoot
            });
            $.get(createLink("score", "ajax", "method=lastNext"))
        }
        if (a) {
            location.href = a
        }
    }).bind("keydown", "right",
    function() {
        var a = $("#next").attr("href");
        if (!$.cookie("ajax_lastNext")) {
            $.cookie("ajax_lastNext", "on", {
                expires: config.cookieLife,
                path: config.webRoot
            });
            $.get(createLink("score", "ajax", "method=lastNext"))
        }
        if (a) {
            location.href = a
        }
    })
}
function initHelpLink() {
    var c = "http://www.zentao.net/book/zentaopmshelp.html?fullScreen=zentao";
    if (config.clientLang == "en") {
        c = "http://www.zentao.pm/book/zentaomanual/8.html?fullScreen=zentao"
    }
    var f = $("#mainmenu > .nav").first();
    var a;
    var e = 10000;
    var d = function() {
        clearTimeout(a);
        $("#helpContent").removeClass("show-error")
    };
    var g = function() {
        d();
        var j = f.children("li.active:not(#helpMenuItem)").removeClass("active").addClass("close-help-tab");
        var h = $("#helpMenuItem").addClass("active");
        var l = $("#helpContent");
        if (!l.length) {
            l = $('<div id="helpContent"><div class="load-error text-center"><h4 class="text-danger">' + lang.timeout + '</h4><p><a href="###" class="open-help-tab"><i class="icon icon-arrow-right"></i> ' + c + '</a></p></div><iframe id="helpIframe" name="helpIframe" src="' + c + '" frameborder="no" allowtransparency="true" scrolling="auto" hidefocus="" style="width: 100%; height: 100%; left: 0px;"></iframe></div>');
            $("#header").after(l);
            var k = $("#helpIframe").get(0);
            a = setTimeout(function() {
                $("#helpContent").addClass("show-error")
            },
            e);
            k.onload = k.onreadystatechange = function() {
                if (this.readyState && this.readyState != "complete") {
                    return
                }
                d()
            }
        } else {
            if ($("body").hasClass("show-help-tab")) {
                $("#helpIframe").get(0).contentWindow.location.replace(c);
                return
            }
        }
        $("body").addClass("show-help-tab")
    };
    var b = function() {
        $("body").removeClass("show-help-tab");
        $("#helpMenuItem").removeClass("active");
        f.find("li.close-help-tab").removeClass("close-help-tab").addClass("active")
    };
    $(document).on("click", ".open-help-tab",
    function() {
        var h = $("#helpMenuItem");
        if (!h.length) {
            h = $('<li id="helpMenuItem"><a href="javascript:;" class="open-help-tab">' + $(this).text() + '<i class="icon icon-remove close-help-tab"></i></a></li>');
            f.find(".custom-item").before(h)
        }
        g()
    }).on("click", ".close-help-tab",
    function(h) {
        b();
        h.stopPropagation();
        h.preventDefault()
    })
}
function setHomepage(a, b) {
    $.get(createLink("custom", "ajaxSetHomepage", "module=" + a + "&page=" + b),
    function() {
        location.reload(true)
    })
}
function checkTutorial() {
    if (config.currentModule != "tutorial" && window.TUTORIAL && (!frameElement || frameElement.tagName != "IFRAME")) {
        if (confirm(window.TUTORIAL.tip)) {
            $.getJSON(createLink("tutorial", "ajaxQuit"),
            function() {
                window.location.reload()
            }).error(function() {
                alert(lang.timeout)
            })
        }
    }
}
function removeDitto() {
    $firstTr = $(".table-form").find("tbody tr:first");
    $firstTr.find("td select").each(function() {
        $(this).find("option[value='ditto']").remove();
        $(this).trigger("chosen:updated")
    })
}
function revertModuleCookie() {
    if ($('#mainmenu .nav li[data-id="project"]').hasClass("active")) {
        $('#modulemenu .nav li[data-id="task"] a').click(function() {
            $.cookie("moduleBrowseParam", 0, {
                expires: config.cookieLife,
                path: config.webRoot
            })
        })
    }
    if ($('#mainmenu .nav li[data-id="product"]').hasClass("active")) {
        $('#modulemenu .nav li[data-id="story"] a').click(function() {
            $.cookie("storyModule", 0, {
                expires: config.cookieLife,
                path: config.webRoot
            })
        })
    }
    if ($('#mainmenu .nav li[data-id="qa"]').hasClass("active")) {
        $('#modulemenu .nav li[data-id="bug"] a').click(function() {
            $.cookie("bugModule", 0, {
                expires: config.cookieLife,
                path: config.webRoot
            })
        });
        $('#modulemenu .nav li[data-id="testcase"] a').click(function() {
            $.cookie("caseModule", 0, {
                expires: config.cookieLife,
                path: config.webRoot
            })
        })
    }
}
function inputFocusJump(d) {
    var f = $("input").is(":focus");
    if (f) {
        var e = $("input:focus").attr("name").replace(/\[\d]/g, "");
        var g = $(":input[name^=" + e + "]:text:not(:disabled):not([name*='%'])");
        var c = g.length;
        var b = parseInt($("input:focus").attr("name").replace(/[^0-9]/g, ""));
        var a = d == "down" ? b + 1 : b - 1;
        if (a < c && a >= 0) {
            g[a].focus()
        }
    }
}
function selectFocusJump(e) {
    var g = $("select").is(":focus");
    if (g) {
        var f = $("select:focus").attr("name").replace(/\[\d]/g, "");
        var d = $("select[name^=" + f + "]:not([name*='%'])");
        var c = d.length;
        var b = parseInt($("select:focus").attr("name").replace(/[^0-9]/g, ""));
        var a = e == "down" ? b + 1 : b - 1;
        if (a < c && a >= 0) {
            d[a].focus()
        }
    }
}
function adjustNoticePosition() {
    var a = 25;
    $("#noticeBox").find(".alert").each(function() {
        $(this).css("bottom", a + "px");
        a += $(this).outerHeight(true) - 10
    })
}
function notifyMessage(a) {
    if (window.Notification) {
        if (Notification.permission == "granted") {
            new Notification("", {
                body: a
            })
        } else {
            if (Notification.permission != "denied") {
                Notification.requestPermission(function(b) {
                    new Notification("", {
                        body: a
                    })
                })
            }
        }
    }
}
needPing = true;
$(document).ready(function() {
    if (typeof(config.onlybody) != "undefined" && config.onlybody == "yes") {
        checkOnlybodyPage()
    }
    $("body").addClass("m-{currentModule}-{currentMethod}".format(config));
    setModal();
    setTableBehavior();
    setForm();
    saveWindowSize();
    setSearchBox();
    setOuterBox();
    setRequiredFields();
    setPlaceholder();
    setModalTriggerLink();
    checkTable();
    toggleSearch();
    fixStyle();
    $(".tree").tree({
        initialState: "preserve"
    });
    $(window).resize(saveWindowSize);
    if (needPing) {
        setTimeout("setPing()", 1000 * 60 * 10)
    }
    initPrioritySelector();
    initHotKey();
    initHelpLink();
    checkTutorial();
    revertModuleCookie();
    $("li.dropdown-submenu").mouseover(function() {
        $("li.dropdown-submenu > .dropdown-menu").each(function() {
            if ($(this).css("display") == "block") {
                var a = $(this).offset().top;
                if (a < 0) {
                    $(this).css("bottom", Number($(this).css("bottom").replace("px", "")) + a)
                }
            }
        })
    })
});
/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.1.0
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
*/
(function() {
    var b, g, d, a, f, j = {}.hasOwnProperty,
    c = function(l, n) {
        function m() {
            this.constructor = l
        }
        for (var h in n) {
            j.call(n, h) && (l[h] = n[h])
        }
        return m.prototype = n.prototype,
        l.prototype = new m,
        l.__super__ = n.prototype,
        l
    },
    k = {
        zh_cn: {
            no_results_text: "没有找到"
        },
        zh_tw: {
            no_results_text: "沒有找到"
        },
        en: {
            no_results_text: "No results match"
        }
    };
    a = function() {
        function h() {
            this.options_index = 0,
            this.parsed = []
        }
        return h.prototype.add_node = function(e) {
            return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) : this.add_option(e)
        },
        h.prototype.add_group = function(u) {
            var p, l, q, v, m, w;
            for (p = this.parsed.length, this.parsed.push({
                array_index: p,
                group: !0,
                label: this.escapeExpression(u.label),
                children: 0,
                disabled: u.disabled,
                title: u.title,
                search_keys: b.trim(u.getAttribute("data-keys") || "").replace(/,/g, " ")
            }), m = u.childNodes, w = [], q = 0, v = m.length; q < v; q++) {
                l = m[q],
                w.push(this.add_option(l, p, u.disabled))
            }
            return w
        },
        h.prototype.add_option = function(n, m, l) {
            if ("OPTION" === n.nodeName.toUpperCase()) {
                return "" !== n.text ? (null != m && (this.parsed[m].children += 1), this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    value: n.value,
                    text: n.text,
                    title: n.title,
                    html: n.innerHTML,
                    selected: n.selected,
                    disabled: l === !0 ? l: n.disabled,
                    group_array_index: m,
                    classes: n.className,
                    style: n.style.cssText,
                    search_keys: b.trim(n.getAttribute("data-keys") || "").replace(/,/, " ")
                })) : this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    empty: !0
                }),
                this.options_index += 1
            }
        },
        h.prototype.escapeExpression = function(l) {
            var n, m;
            return null == l || l === !1 ? "": /[\&\<\>\"\'\`]/.test(l) ? (n = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            m = /&(?!\w+;)|[\<\>\"\'\`]/g, l.replace(m,
            function(e) {
                return n[e] || "&amp;"
            })) : l
        },
        h
    } (),
    a.select_to_array = function(l) {
        var q, n, p, u, m;
        for (n = new a, m = l.childNodes, p = 0, u = m.length; p < u; p++) {
            q = m[p],
            n.add_node(q)
        }
        return n.parsed
    },
    g = function() {
        function h(l, e) {
            this.form_field = l,
            this.options = null != e ? e: {},
            h.browser_is_supported() && (this.lang = k[this.options.lang || (b.zui.clientLang ? b.zui.clientLang() : "zh_cn")], this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
        }
        return h.prototype.set_default_values = function() {
            var e = this;
            return this.click_test_action = function(l) {
                return e.test_active_click(l)
            },
            this.activate_action = function(l) {
                return e.activate_field(l)
            },
            this.active_field = !1,
            this.mouse_on_container = !1,
            this.results_showing = !1,
            this.result_highlighted = null,
            this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect,
            this.disable_search_threshold = this.options.disable_search_threshold || 0,
            this.disable_search = this.options.disable_search || !1,
            this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search,
            this.group_search = null == this.options.group_search || this.options.group_search,
            this.search_contains = this.options.search_contains || !1,
            this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete,
            this.max_selected_options = this.options.max_selected_options || 1 / 0,
            this.drop_direction = this.options.drop_direction || "auto",
            this.middle_highlight = this.options.middle_highlight,
            this.inherit_select_classes = this.options.inherit_select_classes || !1,
            this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options,
            this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options
        },
        h.prototype.set_default_text = function() {
            return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || h.default_multiple_text: this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || h.default_single_text,
            this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || this.lang.no_results_text || h.default_no_result_text
        },
        h.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        },
        h.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        },
        h.prototype.input_focus = function(l) {
            var m = this;
            if (this.is_multiple) {
                if (!this.active_field) {
                    return setTimeout(function() {
                        return m.container_mousedown()
                    },
                    50)
                }
            } else {
                if (!this.active_field) {
                    return this.activate_field()
                }
            }
        },
        h.prototype.input_blur = function(l) {
            var m = this;
            if (!this.mouse_on_container) {
                return this.active_field = !1,
                setTimeout(function() {
                    return m.blur_test()
                },
                100)
            }
        },
        h.prototype.results_option_build = function(m) {
            var q, n, l, p, u;
            for (q = "", u = this.results_data, l = 0, p = u.length; l < p; l++) {
                n = u[l],
                q += n.group ? this.result_add_group(n) : this.result_add_option(n),
                (null != m ? m.first: void 0) && (n.selected && this.is_multiple ? this.choice_build(n) : n.selected && !this.is_multiple && this.single_set_selected_text(n.text))
            }
            return q
        },
        h.prototype.result_add_option = function(l) {
            var n, m;
            return l.search_match && this.include_option_in_results(l) ? (n = [], l.disabled || l.selected && this.is_multiple || n.push("active-result"), !l.disabled || l.selected && this.is_multiple || n.push("disabled-result"), l.selected && n.push("result-selected"), null != l.group_array_index && n.push("group-option"), "" !== l.classes && n.push(l.classes), m = document.createElement("li"), m.className = n.join(" "), m.style.cssText = l.style, m.title = l.title, m.setAttribute("data-option-array-index", l.array_index), m.innerHTML = l.search_text, this.outerHTML(m)) : ""
        },
        h.prototype.result_add_group = function(l) {
            var m;
            return (l.search_match || l.group_match) && l.active_options > 0 ? (m = document.createElement("li"), m.className = "group-result", m.title = l.title, m.innerHTML = l.search_text, this.outerHTML(m)) : ""
        },
        h.prototype.results_update_field = function() {
            if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) {
                return this.winnow_results()
            }
        },
        h.prototype.reset_single_select_options = function() {
            var m, p, n, l, o;
            for (l = this.results_data, o = [], p = 0, n = l.length; p < n; p++) {
                m = l[p],
                m.selected ? o.push(m.selected = !1) : o.push(void 0)
            }
            return o
        },
        h.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        },
        h.prototype.results_search = function(e) {
            return this.results_showing ? this.winnow_results(1) : this.results_show()
        },
        h.prototype.winnow_results = function(E) {
            var y, F, w, m, p, x, q, v, A, B, C, D, z;
            for (this.no_results_clear(), p = 0, q = this.get_search_text(), y = q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), m = this.search_contains ? "": "^", w = new RegExp(m + y, "i"), B = new RegExp(y, "i"), z = this.results_data, C = 0, D = z.length; C < D; C++) {
                F = z[C],
                F.search_match = !1,
                x = null,
                this.include_option_in_results(F) && (F.group && (F.group_match = !1, F.active_options = 0), null != F.group_array_index && this.results_data[F.group_array_index] && (x = this.results_data[F.group_array_index], 0 === x.active_options && x.search_match && (p += 1), x.active_options += 1), F.group && !this.group_search || (F.search_text = F.group ? F.label: F.html, F.search_keys_match = this.search_string_match(F.search_keys, w), F.search_text_match = this.search_string_match(F.search_text, w), F.search_match = F.search_text_match || F.search_keys_match, F.search_match && !F.group && (p += 1), F.search_match ? (F.search_text_match && F.search_text.length ? (v = F.search_text.search(B), A = F.search_text.substr(0, v + q.length) + "</em>" + F.search_text.substr(v + q.length), F.search_text = A.substr(0, v) + "<em>" + A.substr(v)) : F.search_keys_match && F.search_keys.length && (v = F.search_keys.search(B), A = F.search_keys.substr(0, v + q.length) + "</em>" + F.search_keys.substr(v + q.length), F.search_text += '&nbsp; <small style="opacity: 0.7">' + A.substr(0, v) + "<em>" + A.substr(v) + "</small>"), null != x && (x.group_match = !0)) : null != F.group_array_index && this.results_data[F.group_array_index].search_match && (F.search_match = !0)))
            }
            return this.result_clear_highlight(),
            p < 1 && q.length ? (this.update_results_content(""), this.no_results(q)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight(E))
        },
        h.prototype.search_string_match = function(m, q) {
            var n, l, p, u;
            if (q.test(m)) {
                return ! 0
            }
            if (this.enable_split_word_search && (m.indexOf(" ") >= 0 || 0 === m.indexOf("[")) && (l = m.replace(/\[|\]/g, "").split(" "), l.length)) {
                for (p = 0, u = l.length; p < u; p++) {
                    if (n = l[p], q.test(n)) {
                        return ! 0
                    }
                }
            }
        },
        h.prototype.choices_count = function() {
            var m, o, n, l;
            if (null != this.selected_option_count) {
                return this.selected_option_count
            }
            for (this.selected_option_count = 0, l = this.form_field.options, o = 0, n = l.length; o < n; o++) {
                m = l[o],
                m.selected && "" != m.value && (this.selected_option_count += 1)
            }
            return this.selected_option_count
        },
        h.prototype.choices_click = function(e) {
            if (e.preventDefault(), !this.results_showing && !this.is_disabled) {
                return this.results_show()
            }
        },
        h.prototype.keyup_checker = function(l) {
            var n, m;
            switch (n = null != (m = l.which) ? m: l.keyCode, this.search_field_scale(), n) {
            case 8:
                if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
                    return this.keydown_backstroke()
                }
                if (!this.pending_backstroke) {
                    return this.result_clear_highlight(),
                    this.results_search()
                }
                break;
            case 13:
                if (l.preventDefault(), this.results_showing) {
                    return this.result_select(l)
                }
                break;
            case 27:
                return this.results_showing && this.results_hide(),
                !0;
            case 9:
            case 38:
            case 40:
            case 16:
            case 91:
            case 17:
                break;
            default:
                return this.results_search()
            }
        },
        h.prototype.clipboard_event_checker = function(l) {
            var m = this;
            return setTimeout(function() {
                return m.results_search()
            },
            50)
        },
        h.prototype.container_width = function() {
            return null != this.options.width ? this.options.width: "" + this.form_field.offsetWidth + "px"
        },
        h.prototype.include_option_in_results = function(e) {
            return ! (this.is_multiple && !this.display_selected_options && e.selected) && (!(!this.display_disabled_options && e.disabled) && !e.empty)
        },
        h.prototype.search_results_touchstart = function(e) {
            return this.touch_started = !0,
            this.search_results_mouseover(e)
        },
        h.prototype.search_results_touchmove = function(e) {
            return this.touch_started = !1,
            this.search_results_mouseout(e)
        },
        h.prototype.search_results_touchend = function(e) {
            if (this.touch_started) {
                return this.search_results_mouseup(e)
            }
        },
        h.prototype.outerHTML = function(l) {
            var m;
            return l.outerHTML ? l.outerHTML: (m = document.createElement("div"), m.appendChild(l), m.innerHTML)
        },
        h.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !/iP(od|hone)/i.test(window.navigator.userAgent) && (!/Android/i.test(window.navigator.userAgent) || !/Mobile/i.test(window.navigator.userAgent))
        },
        h.default_multiple_text = "",
        h.default_single_text = "",
        h.default_no_result_text = "No results match",
        h
    } (),
    b = jQuery,
    b.fn.extend({
        chosen: function(e) {
            return g.browser_is_supported() ? this.each(function(l) {
                var h, m;
                h = b(this),
                m = h.data("chosen"),
                "destroy" === e && m ? m.destroy() : m || h.data("chosen", new d(this, e))
            }) : this
        }
    }),
    d = function(l) {
        function h() {
            return f = h.__super__.constructor.apply(this, arguments)
        }
        return c(h, l),
        h.prototype.setup = function() {
            return this.form_field_jq = b(this.form_field),
            this.current_selectedIndex = this.form_field.selectedIndex,
            this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        },
        h.prototype.set_up_html = function() {
            var o, n;
            o = ["chosen-container"],
            o.push("chosen-container-" + (this.is_multiple ? "multi": "single")),
            this.inherit_select_classes && this.form_field.className && o.push(this.form_field.className),
            this.is_rtl && o.push("chosen-rtl");
            var m = this.form_field.getAttribute("data-css-class");
            return m && o.push(m),
            n = {
                "class": o.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            },
            this.form_field.id.length && (n.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"),
            this.container = b("<div />", n),
            this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),
            this.form_field_jq.hide().after(this.container),
            this.dropdown = this.container.find("div.chosen-drop").first(),
            this.search_field = this.container.find("input").first(),
            this.search_results = this.container.find("ul.chosen-results").first(),
            this.search_field_scale(),
            this.search_no_results = this.container.find("li.no-results").first(),
            this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()),
            this.options.drop_width && this.dropdown.css("width", this.options.drop_width).addClass("chosen-drop-size-limited"),
            this.results_build(),
            this.set_tab_index(),
            this.set_label_behavior(),
            this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        },
        h.prototype.register_observers = function() {
            var e = this;
            return this.container.bind("mousedown.chosen",
            function(m) {
                e.container_mousedown(m)
            }),
            this.container.bind("mouseup.chosen",
            function(m) {
                e.container_mouseup(m)
            }),
            this.container.bind("mouseenter.chosen",
            function(m) {
                e.mouse_enter(m)
            }),
            this.container.bind("mouseleave.chosen",
            function(m) {
                e.mouse_leave(m)
            }),
            this.search_results.bind("mouseup.chosen",
            function(m) {
                e.search_results_mouseup(m)
            }),
            this.search_results.bind("mouseover.chosen",
            function(m) {
                e.search_results_mouseover(m)
            }),
            this.search_results.bind("mouseout.chosen",
            function(m) {
                e.search_results_mouseout(m)
            }),
            this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",
            function(m) {
                e.search_results_mousewheel(m)
            }),
            this.search_results.bind("touchstart.chosen",
            function(m) {
                e.search_results_touchstart(m)
            }),
            this.search_results.bind("touchmove.chosen",
            function(m) {
                e.search_results_touchmove(m)
            }),
            this.search_results.bind("touchend.chosen",
            function(m) {
                e.search_results_touchend(m)
            }),
            this.form_field_jq.bind("chosen:updated.chosen",
            function(m) {
                e.results_update_field(m)
            }),
            this.form_field_jq.bind("chosen:activate.chosen",
            function(m) {
                e.activate_field(m)
            }),
            this.form_field_jq.bind("chosen:open.chosen",
            function(m) {
                e.container_mousedown(m)
            }),
            this.form_field_jq.bind("chosen:close.chosen",
            function(m) {
                e.input_blur(m)
            }),
            this.search_field.bind("blur.chosen",
            function(m) {
                e.input_blur(m)
            }),
            this.search_field.bind("keyup.chosen",
            function(m) {
                e.keyup_checker(m)
            }),
            this.search_field.bind("keydown.chosen",
            function(m) {
                e.keydown_checker(m)
            }),
            this.search_field.bind("focus.chosen",
            function(m) {
                e.input_focus(m)
            }),
            this.search_field.bind("cut.chosen",
            function(m) {
                e.clipboard_event_checker(m)
            }),
            this.search_field.bind("paste.chosen",
            function(m) {
                e.clipboard_event_checker(m)
            }),
            this.is_multiple ? this.search_choices.bind("click.chosen",
            function(m) {
                e.choices_click(m)
            }) : this.container.bind("click.chosen",
            function(m) {
                m.preventDefault()
            })
        },
        h.prototype.destroy = function() {
            return b(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action),
            this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex),
            this.container.remove(),
            this.form_field_jq.removeData("chosen"),
            this.form_field_jq.show()
        },
        h.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field_jq[0].disabled,
            this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        },
        h.prototype.container_mousedown = function(m) {
            if (!this.is_disabled && (m && "mousedown" === m.type && !this.results_showing && m.preventDefault(), null == m || !b(m.target).hasClass("search-choice-close"))) {
                return this.active_field ? this.is_multiple || !m || b(m.target)[0] !== this.selected_item[0] && !b(m.target).parents("a.chosen-single").length || (m.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), b(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()),
                this.activate_field()
            }
        },
        h.prototype.container_mouseup = function(e) {
            if ("ABBR" === e.target.nodeName && !this.is_disabled) {
                return this.results_reset(e)
            }
        },
        h.prototype.search_results_mousewheel = function(m) {
            var n;
            if (m.originalEvent && (n = -m.originalEvent.wheelDelta || m.originalEvent.detail), null != n) {
                return m.preventDefault(),
                "DOMMouseScroll" === m.type && (n = 40 * n),
                this.search_results.scrollTop(n + this.search_results.scrollTop())
            }
        },
        h.prototype.blur_test = function(e) {
            if (!this.active_field && this.container.hasClass("chosen-container-active")) {
                return this.close_field()
            }
        },
        h.prototype.close_field = function() {
            return b(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action),
            this.active_field = !1,
            this.results_hide(),
            this.container.removeClass("chosen-container-active"),
            this.clear_backstroke(),
            this.show_search_field_default(),
            this.search_field_scale()
        },
        h.prototype.activate_field = function() {
            return this.container.addClass("chosen-container-active"),
            this.active_field = !0,
            this.search_field.val(this.search_field.val()),
            this.search_field.focus()
        },
        h.prototype.test_active_click = function(n) {
            var m;
            return m = b(n.target).closest(".chosen-container"),
            m.length && this.container[0] === m[0] ? this.active_field = !0 : this.close_field()
        },
        h.prototype.results_build = function() {
            return this.parsing = !0,
            this.selected_option_count = null,
            this.results_data = a.select_to_array(this.form_field),
            this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))),
            this.update_results_content(this.results_option_build({
                first: !0
            })),
            this.search_field_disabled(),
            this.show_search_field_default(),
            this.search_field_scale(),
            this.parsing = !1
        },
        h.prototype.result_do_highlight = function(y, x) {
            var z, v, m, p, w, q, u = -1;
            y.length && (this.result_clear_highlight(), this.result_highlight = y, this.result_highlight.addClass("highlighted"), m = parseInt(this.search_results.css("maxHeight"), 10), q = this.result_highlight.outerHeight(), w = this.search_results.scrollTop(), p = m + w, v = this.result_highlight.position().top + this.search_results.scrollTop(), z = v + q, this.middle_highlight && (x || "always" === this.middle_highlight || z >= p || v < w) ? u = Math.min(v - q, Math.max(0, v - (m - q) / 2)) : z >= p ? u = z - m > 0 ? z - m: 0 : v < w && (u = v), u > -1 && this.search_results.scrollTop(u))
        },
        h.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"),
            this.result_highlight = null
        },
        h.prototype.results_show = function() {
            if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
                return this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }),
                !1
            }
            this.container.addClass("chosen-with-drop"),
            this.results_showing = !0,
            this.search_field.focus(),
            this.search_field.val(this.search_field.val()),
            this.winnow_results(1);
            var o = this.drop_direction;
            if ("auto" === o) {
                var n = this.container.find(".chosen-drop"),
                m = this.container.offset();
                m.top + n.outerHeight() + 30 > b(window).height() + b(window).scrollTop() && (o = "up")
            }
            return this.container.toggleClass("chosen-up", "up" === o),
            this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            })
        },
        h.prototype.update_results_content = function(e) {
            return this.search_results.html(e)
        },
        h.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })),
            this.results_showing = !1
        },
        h.prototype.set_tab_index = function(m) {
            var n;
            if (this.form_field.tabIndex) {
                return n = this.form_field.tabIndex,
                this.form_field.tabIndex = -1,
                this.search_field[0].tabIndex = n
            }
        },
        h.prototype.set_label_behavior = function() {
            var m = this;
            if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = b("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0) {
                return this.form_field_label.bind("click.chosen",
                function(e) {
                    return m.is_multiple ? m.container_mousedown(e) : m.activate_field()
                })
            }
        },
        h.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        },
        h.prototype.search_results_mouseup = function(n) {
            var m;
            m = b(n.target).hasClass("active-result") ? b(n.target) : b(n.target).parents(".active-result").first(),
            m.length && (this.result_highlight = m, this.result_select(n))
        },
        h.prototype.search_results_mouseover = function(n) {
            var m;
            if (m = b(n.target).hasClass("active-result") ? b(n.target) : b(n.target).parents(".active-result").first()) {
                return this.result_do_highlight(m)
            }
        },
        h.prototype.search_results_mouseout = function(m) {
            if (b(m.target).hasClass("active-result")) {
                return this.result_clear_highlight()
            }
        },
        h.prototype.choice_build = function(p) {
            var n, m, o = this;
            return n = b("<li />", {
                "class": "search-choice"
            }).html("<span title='" + p.html + "'>" + p.html + "</span>"),
            p.disabled ? n.addClass("search-choice-disabled") : (m = b("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": p.array_index
            }), m.bind("click.chosen",
            function(e) {
                return o.choice_destroy_link_click(e)
            }), n.append(m)),
            this.search_container.before(n)
        },
        h.prototype.choice_destroy_link_click = function(m) {
            if (m.preventDefault(), m.stopPropagation(), !this.is_disabled) {
                return this.choice_destroy(b(m.target))
            }
        },
        h.prototype.choice_destroy = function(e) {
            if (this.result_deselect(e[0].getAttribute("data-option-array-index"))) {
                return this.show_search_field_default(),
                this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(),
                e.parents("li").first().remove(),
                this.search_field_scale()
            }
        },
        h.prototype.results_reset = function() {
            if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field) {
                return this.results_hide()
            }
        },
        h.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex,
            this.selected_item.find("abbr").remove()
        },
        h.prototype.result_select = function(m) {
            var o, n;
            if (this.result_highlight) {
                return o = this.result_highlight,
                this.result_clear_highlight(),
                this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.is_multiple ? o.removeClass("active-result") : this.reset_single_select_options(), n = this.results_data[o[0].getAttribute("data-option-array-index")], n.selected = !0, this.form_field.options[n.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(n) : this.single_set_selected_text(n.text), (m.metaKey || m.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                    selected: this.form_field.options[n.options_index].value
                }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())
            }
        },
        h.prototype.single_set_selected_text = function(e) {
            return null == e && (e = this.default_text),
            e === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")),
            this.selected_item.find("span").attr("title", e).text(e)
        },
        h.prototype.result_deselect = function(m) {
            var n;
            return n = this.results_data[m],
            !this.form_field.options[n.options_index].disabled && (n.selected = !1, this.form_field.options[n.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[n.options_index].value
            }), this.search_field_scale(), !0)
        },
        h.prototype.single_deselect_control_build = function() {
            if (this.allow_single_deselect) {
                return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),
                this.selected_item.addClass("chosen-single-with-deselect")
            }
        },
        h.prototype.get_search_text = function() {
            return this.search_field.val() === this.default_text ? "": b("<div/>").text(b.trim(this.search_field.val())).html()
        },
        h.prototype.winnow_results_set_highlight = function(m) {
            var o, n;
            if (n = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), o = n.length ? n.first() : this.search_results.find(".active-result").first(), null != o) {
                return this.result_do_highlight(o, m)
            }
        },
        h.prototype.no_results = function(n) {
            var m;
            return m = b('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'),
            m.find("span").first().html(n),
            this.search_results.append(m),
            this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        },
        h.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        },
        h.prototype.keydown_arrow = function() {
            var e;
            return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(e) : void 0 : this.results_show()
        },
        h.prototype.keyup_arrow = function() {
            var e;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight.prevAll("li.active-result"), e.length ? this.result_do_highlight(e.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        },
        h.prototype.keydown_backstroke = function() {
            var e;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (e = this.search_container.siblings("li.search-choice").last(), e.length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        },
        h.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"),
            this.pending_backstroke = null
        },
        h.prototype.keydown_checker = function(m) {
            var o, n;
            switch (o = null != (n = m.which) ? n: m.keyCode, this.search_field_scale(), 8 !== o && this.pending_backstroke && this.clear_backstroke(), o) {
            case 8:
                this.backstroke_length = this.search_field.val().length;
                break;
            case 9:
                this.results_showing && !this.is_multiple && this.result_select(m),
                this.mouse_on_container = !1;
                break;
            case 13:
                m.preventDefault();
                break;
            case 38:
                m.preventDefault(),
                this.keyup_arrow();
                break;
            case 40:
                m.preventDefault(),
                this.keydown_arrow()
            }
        },
        h.prototype.search_field_scale = function() {
            var x, z, v, m, p, w, q, u, y;
            if (this.is_multiple) {
                for (v = 0, q = 0, p = "position:absolute; left: -1000px; top: -1000px; display:none;", w = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], u = 0, y = w.length; u < y; u++) {
                    m = w[u],
                    p += m + ":" + this.search_field.css(m) + ";"
                }
                return x = b("<div />", {
                    style: p
                }),
                x.text(this.search_field.val()),
                b("body").append(x),
                q = x.width() + 25,
                x.remove(),
                z = this.container.outerWidth(),
                q > z - 10 && (q = z - 10),
                this.search_field.css({
                    width: q + "px"
                })
            }
        },
        h
    } (g)
}).call(this); (function(a) {
    a.extend(a.fn, {
        swapClass: function(e, d) {
            var c = this.filter("." + e);
            this.filter("." + d).removeClass(d).addClass(e);
            c.removeClass(e).addClass(d);
            return this
        },
        replaceClass: function(d, c) {
            return this.filter("." + d).removeClass(d).addClass(c).end()
        },
        hoverClass: function(c) {
            c = c || "hover";
            return this.hover(function() {
                a(this).addClass(c)
            },
            function() {
                a(this).removeClass(c)
            })
        },
        heightToggle: function(c, d) {
            c ? this.animate({
                height: "toggle"
            },
            c, d) : this.each(function() {
                jQuery(this)[jQuery(this).css("display") == "none" ? "show": "hide"]();
                if (d) {
                    d.apply(this, arguments)
                }
            })
        },
        heightHide: function(c, d) {
            if (c) {
                this.animate({
                    height: "hide"
                },
                c, d)
            } else {
                this.hide();
                if (d) {
                    this.each(d)
                }
            }
        },
        prepareBranches: function(c) {
            if (!c.prerendered) {
                this.filter(":last-child:not(ul)").addClass(b.last);
                this.filter((c.collapsed ? "": "." + b.closed) + ":not(." + b.open + ")").find(">ul").hide()
            }
            return this.filter(":has(>ul)")
        },
        applyClasses: function(c, d) {
            this.filter(":has(>ul):not(:has(>a))").find(">span").click(function(e) {
                d.apply(a(this).next())
            }).add(a("a", this)).hoverClass();
            if (!c.prerendered) {
                this.filter(":has(>ul:hidden)").addClass(b.expandable).replaceClass(b.last, b.lastExpandable);
                this.not(":has(>ul:hidden)").addClass(b.collapsable).replaceClass(b.last, b.lastCollapsable);
                this.prepend('<div class="' + b.hitarea + '"/>').find("div." + b.hitarea).each(function() {
                    var e = "";
                    a.each(a(this).parent().attr("class").split(" "),
                    function() {
                        e += this + "-hitarea "
                    });
                    a(this).addClass(e)
                })
            }
            this.find("div." + b.hitarea).click(d)
        },
        treeview: function(d) {
            d = a.extend({
                cookieId: "treeview"
            },
            d);
            if (d.add) {
                return this.trigger("add", [d.add])
            }
            if (d.toggle) {
                var j = d.toggle;
                d.toggle = function() {
                    return j.apply(a(this).parent()[0], arguments)
                }
            }
            function c(m, o) {
                function n(p) {
                    return function() {
                        f.apply(a("div." + b.hitarea, m).filter(function() {
                            return p ? a(this).parent("." + p).length: true
                        }));
                        return false
                    }
                }
                a("a:eq(0)", o).click(n(b.collapsable));
                a("a:eq(1)", o).click(n(b.expandable));
                a("a:eq(2)", o).click(n())
            }
            function f() {
                a(this).parent().find(">.hitarea").swapClass(b.collapsableHitarea, b.expandableHitarea).swapClass(b.lastCollapsableHitarea, b.lastExpandableHitarea).end().swapClass(b.collapsable, b.expandable).swapClass(b.lastCollapsable, b.lastExpandable).find(">ul").heightToggle(d.animated, d.toggle);
                if (d.unique) {
                    a(this).parent().siblings().find(">.hitarea").replaceClass(b.collapsableHitarea, b.expandableHitarea).replaceClass(b.lastCollapsableHitarea, b.lastExpandableHitarea).end().replaceClass(b.collapsable, b.expandable).replaceClass(b.lastCollapsable, b.lastExpandable).find(">ul").heightHide(d.animated, d.toggle)
                }
            }
            function l() {
                function n(o) {
                    return o ? 1 : 0
                }
                var m = [];
                k.each(function(o, p) {
                    m[o] = a(p).is(":has(>ul:visible)") ? 1 : 0
                });
                a.cookie(d.cookieId, m.join(""))
            }
            function e() {
                var m = a.cookie(d.cookieId);
                if (m) {
                    var n = m.split("");
                    k.each(function(o, p) {
                        a(p).find(">ul")[parseInt(n[o]) ? "show": "hide"]()
                    })
                }
            }
            this.addClass("treeview");
            var k = this.find("li").prepareBranches(d);
            switch (d.persist) {
            case "cookie":
                var h = d.toggle;
                d.toggle = function() {
                    l();
                    if (h) {
                        h.apply(this, arguments)
                    }
                };
                e();
                break;
            case "location":
                var g = this.find("a").filter(function() {
                    return this.href.toLowerCase() == location.href.toLowerCase()
                });
                if (g.length) {
                    g.addClass("selected").parents("ul, li").add(g.next()).show()
                }
                break
            }
            k.applyClasses(d, f);
            if (d.control) {
                c(this, d.control);
                a(d.control).show()
            }
            return this.bind("add",
            function(n, m) {
                a(m).prev().removeClass(b.last).removeClass(b.lastCollapsable).removeClass(b.lastExpandable).find(">.hitarea").removeClass(b.lastCollapsableHitarea).removeClass(b.lastExpandableHitarea);
                a(m).find("li").andSelf().prepareBranches(d).applyClasses(d, f)
            })
        }
    });
    var b = a.fn.treeview.classes = {
        open: "open",
        closed: "closed",
        expandable: "expandable",
        expandableHitarea: "expandable-hitarea",
        lastExpandableHitarea: "lastExpandable-hitarea",
        collapsable: "collapsable",
        collapsableHitarea: "collapsable-hitarea",
        lastCollapsableHitarea: "lastCollapsable-hitarea",
        lastCollapsable: "lastCollapsable",
        lastExpandable: "lastExpandable",
        last: "last",
        hitarea: "hitarea"
    };
    a.fn.Treeview = a.fn.treeview
})(jQuery); !
function(g) {
    function d() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    var c = function(e, a) {
        var h = this;
        this.element = g(e),
        this.language = a.language || this.element.data("date-language") || "en",
        this.language = this.language in f ? this.language: "en",
        this.isRTL = f[this.language].rtl || !1,
        this.formatType = a.formatType || this.element.data("format-type") || "standard",
        this.format = b.parseFormat(a.format || this.element.data("date-format") || f[this.language].format || b.getDefaultFormat(this.formatType, "input"), this.formatType),
        this.isInline = !1,
        this.isVisible = !1,
        this.isInput = this.element.is("input"),
        this.component = this.element.is(".date") ? this.element.find(".input-group-addon .icon-th, .input-group-addon .icon-time, .input-group-addon .icon-calendar").parent() : !1,
        this.componentReset = this.element.is(".date") ? this.element.find(".input-group-addon .icon-remove").parent() : !1,
        this.hasInput = this.component && this.element.find("input").length,
        this.component && 0 === this.component.length && (this.component = !1),
        this.linkField = a.linkField || this.element.data("link-field") || !1,
        this.linkFormat = b.parseFormat(a.linkFormat || this.element.data("link-format") || b.getDefaultFormat(this.formatType, "link"), this.formatType),
        this.minuteStep = a.minuteStep || this.element.data("minute-step") || 5,
        this.pickerPosition = a.pickerPosition || this.element.data("picker-position") || "bottom-right",
        this.showMeridian = a.showMeridian || this.element.data("show-meridian") || !1,
        this.initialDate = a.initialDate || new Date,
        this._attachEvents(),
        this.formatViewType = "datetime",
        "formatViewType" in a ? this.formatViewType = a.formatViewType: "formatViewType" in this.element.data() && (this.formatViewType = this.element.data("formatViewType")),
        this.minView = 0,
        "minView" in a ? this.minView = a.minView: "minView" in this.element.data() && (this.minView = this.element.data("min-view")),
        this.minView = b.convertViewMode(this.minView),
        this.maxView = b.modes.length - 1,
        "maxView" in a ? this.maxView = a.maxView: "maxView" in this.element.data() && (this.maxView = this.element.data("max-view")),
        this.maxView = b.convertViewMode(this.maxView),
        this.wheelViewModeNavigation = !1,
        "wheelViewModeNavigation" in a ? this.wheelViewModeNavigation = a.wheelViewModeNavigation: "wheelViewModeNavigation" in this.element.data() && (this.wheelViewModeNavigation = this.element.data("view-mode-wheel-navigation")),
        this.wheelViewModeNavigationInverseDirection = !1,
        "wheelViewModeNavigationInverseDirection" in a ? this.wheelViewModeNavigationInverseDirection = a.wheelViewModeNavigationInverseDirection: "wheelViewModeNavigationInverseDirection" in this.element.data() && (this.wheelViewModeNavigationInverseDirection = this.element.data("view-mode-wheel-navigation-inverse-dir")),
        this.wheelViewModeNavigationDelay = 100,
        "wheelViewModeNavigationDelay" in a ? this.wheelViewModeNavigationDelay = a.wheelViewModeNavigationDelay: "wheelViewModeNavigationDelay" in this.element.data() && (this.wheelViewModeNavigationDelay = this.element.data("view-mode-wheel-navigation-delay")),
        this.startViewMode = 2,
        "startView" in a ? this.startViewMode = a.startView: "startView" in this.element.data() && (this.startViewMode = this.element.data("start-view")),
        this.startViewMode = b.convertViewMode(this.startViewMode),
        this.viewMode = this.startViewMode,
        this.viewSelect = this.minView,
        "viewSelect" in a ? this.viewSelect = a.viewSelect: "viewSelect" in this.element.data() && (this.viewSelect = this.element.data("view-select")),
        this.viewSelect = b.convertViewMode(this.viewSelect),
        this.forceParse = !0,
        "forceParse" in a ? this.forceParse = a.forceParse: "dateForceParse" in this.element.data() && (this.forceParse = this.element.data("date-force-parse")),
        this.picker = g(b.template).appendTo(this.isInline ? this.element: "body").on({
            click: g.proxy(this.click, this),
            mousedown: g.proxy(this.mousedown, this)
        }),
        this.wheelViewModeNavigation && (g.fn.mousewheel ? this.picker.on({
            mousewheel: g.proxy(this.mousewheel, this)
        }) : console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")),
        this.isInline ? this.picker.addClass("datetimepicker-inline") : this.picker.addClass("datetimepicker-dropdown-" + this.pickerPosition + " dropdown-menu"),
        this.isRTL && (this.picker.addClass("datetimepicker-rtl"), this.picker.find(".prev span, .next span").toggleClass("icon-arrow-left icon-arrow-right")),
        g(document).on("mousedown",
        function(j) {
            0 === g(j.target).closest(".datetimepicker").length && h.hide()
        }),
        this.autoclose = !1,
        "autoclose" in a ? this.autoclose = a.autoclose: "dateAutoclose" in this.element.data() && (this.autoclose = this.element.data("date-autoclose")),
        this.keyboardNavigation = !0,
        "keyboardNavigation" in a ? this.keyboardNavigation = a.keyboardNavigation: "dateKeyboardNavigation" in this.element.data() && (this.keyboardNavigation = this.element.data("date-keyboard-navigation")),
        this.todayBtn = a.todayBtn || this.element.data("date-today-btn") || !1,
        this.todayHighlight = a.todayHighlight || this.element.data("date-today-highlight") || !1,
        this.weekStart = (a.weekStart || this.element.data("date-weekstart") || f[this.language].weekStart || 0) % 7,
        this.weekEnd = (this.weekStart + 6) % 7,
        this.startDate = -1 / 0,
        this.endDate = 1 / 0,
        this.daysOfWeekDisabled = [],
        this.setStartDate(a.startDate || this.element.data("date-startdate")),
        this.setEndDate(a.endDate || this.element.data("date-enddate")),
        this.setDaysOfWeekDisabled(a.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled")),
        this.fillDow(),
        this.fillMonths(),
        this.update(),
        this.showMode(),
        this.isInline && this.show()
    };
    c.prototype = {
        constructor: c,
        _events: [],
        _attachEvents: function() {
            this._detachEvents(),
            this.isInput ? this._events = [[this.element, {
                focus: g.proxy(this.show, this),
                keyup: g.proxy(this.update, this),
                keydown: g.proxy(this.keydown, this)
            }]] : this.component && this.hasInput ? (this._events = [[this.element.find("input"), {
                focus: g.proxy(this.show, this),
                keyup: g.proxy(this.update, this),
                keydown: g.proxy(this.keydown, this)
            }], [this.component, {
                click: g.proxy(this.show, this)
            }]], this.componentReset && this._events.push([this.componentReset, {
                click: g.proxy(this.reset, this)
            }])) : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {
                click: g.proxy(this.show, this)
            }]];
            for (var e, a, h = 0; h < this._events.length; h++) {
                e = this._events[h][0],
                a = this._events[h][1],
                e.on(a)
            }
        },
        _detachEvents: function() {
            for (var j, h, a = 0; a < this._events.length; a++) {
                j = this._events[a][0],
                h = this._events[a][1],
                j.off(h)
            }
            this._events = []
        },
        show: function(a) {
            this.picker.show(),
            this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(),
            this.forceParse && this.update(),
            this.place(),
            g(window).on("resize", g.proxy(this.place, this)),
            a && (a.stopPropagation(), a.preventDefault()),
            this.isVisible = !0,
            this.element.trigger({
                type: "show",
                date: this.date
            })
        },
        hide: function() {
            this.isVisible && (this.isInline || (this.picker.hide(), g(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || g(document).off("mousedown", this.hide), this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this.isVisible = !1, this.element.trigger({
                type: "hide",
                date: this.date
            })))
        },
        remove: function() {
            this._detachEvents(),
            this.picker.remove(),
            delete this.picker,
            delete this.element.data().datetimepicker
        },
        getDate: function() {
            var a = this.getUTCDate();
            return new Date(a.getTime() + 60000 * a.getTimezoneOffset())
        },
        getUTCDate: function() {
            return this.date
        },
        setDate: function(a) {
            this.setUTCDate(new Date(a.getTime() - 60000 * a.getTimezoneOffset()))
        },
        setUTCDate: function(a) {
            a >= this.startDate && a <= this.endDate ? (this.date = a, this.setValue(), this.viewDate = this.date, this.fill()) : this.element.trigger({
                type: "outOfRange",
                date: a,
                startDate: this.startDate,
                endDate: this.endDate
            })
        },
        setFormat: function(h) {
            this.format = b.parseFormat(h, this.formatType);
            var a;
            this.isInput ? a = this.element: this.component && (a = this.element.find("input")),
            a && a.val() && this.setValue()
        },
        setValue: function() {
            var a = this.getFormattedDate();
            this.isInput ? this.element.val(a) : (this.component && this.element.find("input").val(a), this.element.data("date", a)),
            this.linkField && g("#" + this.linkField).val(this.getFormattedDate(this.linkFormat))
        },
        getFormattedDate: function(a) {
            return void 0 == a && (a = this.format),
            b.formatDate(this.date, a, this.language, this.formatType)
        },
        setStartDate: function(a) {
            this.startDate = a || -1 / 0,
            this.startDate !== -1 / 0 && (this.startDate = b.parseDate(this.startDate, this.format, this.language, this.formatType)),
            this.update(),
            this.updateNavArrows()
        },
        setEndDate: function(a) {
            this.endDate = a || 1 / 0,
            1 / 0 !== this.endDate && (this.endDate = b.parseDate(this.endDate, this.format, this.language, this.formatType)),
            this.update(),
            this.updateNavArrows()
        },
        setDaysOfWeekDisabled: function(a) {
            this.daysOfWeekDisabled = a || [],
            g.isArray(this.daysOfWeekDisabled) || (this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)),
            this.daysOfWeekDisabled = g.map(this.daysOfWeekDisabled,
            function(h) {
                return parseInt(h, 10)
            }),
            this.update(),
            this.updateNavArrows()
        },
        place: function() {
            if (!this.isInline) {
                var j = 0;
                g("div").each(function() {
                    var a = parseInt(g(this).css("zIndex"), 10);
                    a > j && (j = a)
                });
                var h, k, e, l = j + 10;
                this.component ? (h = this.component.offset(), e = h.left, ("bottom-left" == this.pickerPosition || "top-left" == this.pickerPosition) && (e += this.component.outerWidth() - this.picker.outerWidth())) : (h = this.element.offset(), e = h.left),
                k = "top-left" == this.pickerPosition || "top-right" == this.pickerPosition ? h.top - this.picker.outerHeight() : h.top + this.height,
                this.picker.css({
                    top: k,
                    left: e,
                    zIndex: l
                })
            }
        },
        update: function() {
            var h, a = !1;
            arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (h = arguments[0], a = !0) : (h = this.element.data("date") || (this.isInput ? this.element.val() : this.element.find("input").val()) || this.initialDate, ("string" == typeof h || h instanceof String) && (h = h.replace(/^\s+|\s+$/g, ""))),
            h || (h = new Date, a = !1),
            this.date = b.parseDate(h, this.format, this.language, this.formatType),
            a && this.setValue(),
            this.viewDate = this.date < this.startDate ? new Date(this.startDate) : this.date > this.endDate ? new Date(this.endDate) : new Date(this.date),
            this.fill()
        },
        fillDow: function() {
            for (var h = this.weekStart,
            a = "<tr>"; h < this.weekStart + 7;) {
                a += '<th class="dow">' + f[this.language].daysMin[h++%7] + "</th>"
            }
            a += "</tr>",
            this.picker.find(".datetimepicker-days thead").append(a)
        },
        fillMonths: function() {
            for (var h = "",
            a = 0; 12 > a;) {
                h += '<span class="month">' + f[this.language].monthsShort[a++] + "</span>"
            }
            this.picker.find(".datetimepicker-months td").html(h)
        },
        fill: function() {
            if (null != this.date && null != this.viewDate) {
                var aa = new Date(this.viewDate),
                W = aa.getUTCFullYear(),
                ab = aa.getUTCMonth(),
                R = aa.getUTCDate(),
                P = aa.getUTCHours(),
                ae = aa.getUTCMinutes(),
                Y = this.startDate !== -1 / 0 ? this.startDate.getUTCFullYear() : -1 / 0,
                K = this.startDate !== -1 / 0 ? this.startDate.getUTCMonth() : -1 / 0,
                af = 1 / 0 !== this.endDate ? this.endDate.getUTCFullYear() : 1 / 0,
                X = 1 / 0 !== this.endDate ? this.endDate.getUTCMonth() : 1 / 0,
                Q = new d(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate()).valueOf(),
                I = new Date;
                if (this.picker.find(".datetimepicker-days thead th:eq(1)").text(f[this.language].months[ab] + " " + W), "time" == this.formatViewType) {
                    var ac = P % 12 ? P % 12 : 12,
                    ad = (10 > ac ? "0": "") + ac,
                    G = (10 > ae ? "0": "") + ae,
                    L = f[this.language].meridiem[12 > P ? 0 : 1];
                    this.picker.find(".datetimepicker-hours thead th:eq(1)").text(ad + ":" + G + " " + L.toUpperCase()),
                    this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(ad + ":" + G + " " + L.toUpperCase())
                } else {
                    this.picker.find(".datetimepicker-hours thead th:eq(1)").text(R + " " + f[this.language].months[ab] + " " + W),
                    this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(R + " " + f[this.language].months[ab] + " " + W)
                }
                this.picker.find("tfoot th.today").text(f[this.language].today).toggle(this.todayBtn !== !1),
                this.updateNavArrows(),
                this.fillMonths();
                var A = d(W, ab - 1, 28, 0, 0, 0, 0),
                j = b.getDaysInMonth(A.getUTCFullYear(), A.getUTCMonth());
                A.setUTCDate(j),
                A.setUTCDate(j - (A.getUTCDay() - this.weekStart + 7) % 7);
                var z = new Date(A);
                z.setUTCDate(z.getUTCDate() + 42),
                z = z.valueOf();
                for (var O, Z = []; A.valueOf() < z;) {
                    A.getUTCDay() == this.weekStart && Z.push("<tr>"),
                    O = "",
                    A.getUTCFullYear() < W || A.getUTCFullYear() == W && A.getUTCMonth() < ab ? O += " old": (A.getUTCFullYear() > W || A.getUTCFullYear() == W && A.getUTCMonth() > ab) && (O += " new"),
                    this.todayHighlight && A.getUTCFullYear() == I.getFullYear() && A.getUTCMonth() == I.getMonth() && A.getUTCDate() == I.getDate() && (O += " today"),
                    A.valueOf() == Q && (O += " active"),
                    (A.valueOf() + 86400000 <= this.startDate || A.valueOf() > this.endDate || -1 !== g.inArray(A.getUTCDay(), this.daysOfWeekDisabled)) && (O += " disabled"),
                    Z.push('<td class="day' + O + '">' + A.getUTCDate() + "</td>"),
                    A.getUTCDay() == this.weekEnd && Z.push("</tr>"),
                    A.setUTCDate(A.getUTCDate() + 1)
                }
                this.picker.find(".datetimepicker-days tbody").empty().append(Z.join("")),
                Z = [];
                for (var e = "",
                ag = "",
                a = "",
                q = 0; 24 > q; q++) {
                    var J = d(W, ab, R, q);
                    O = "",
                    J.valueOf() + 3600000 <= this.startDate || J.valueOf() > this.endDate ? O += " disabled": P == q && (O += " active"),
                    this.showMeridian && 2 == f[this.language].meridiem.length ? (ag = 12 > q ? f[this.language].meridiem[0] : f[this.language].meridiem[1], ag != a && ("" != a && Z.push("</fieldset>"), Z.push('<fieldset class="hour"><legend>' + ag.toUpperCase() + "</legend>")), a = ag, e = q % 12 ? q % 12 : 12, Z.push('<span class="hour' + O + " hour_" + (12 > q ? "am": "pm") + '">' + e + "</span>"), 23 == q && Z.push("</fieldset>")) : (e = q + ":00", Z.push('<span class="hour' + O + '">' + e + "</span>"))
                }
                this.picker.find(".datetimepicker-hours td").html(Z.join("")),
                Z = [],
                e = "",
                ag = "",
                a = "";
                for (var q = 0; 60 > q; q += this.minuteStep) {
                    var J = d(W, ab, R, P, q, 0);
                    O = "",
                    J.valueOf() < this.startDate || J.valueOf() > this.endDate ? O += " disabled": Math.floor(ae / this.minuteStep) == Math.floor(q / this.minuteStep) && (O += " active"),
                    this.showMeridian && 2 == f[this.language].meridiem.length ? (ag = 12 > P ? f[this.language].meridiem[0] : f[this.language].meridiem[1], ag != a && ("" != a && Z.push("</fieldset>"), Z.push('<fieldset class="minute"><legend>' + ag.toUpperCase() + "</legend>")), a = ag, e = P % 12 ? P % 12 : 12, Z.push('<span class="minute' + O + '">' + e + ":" + (10 > q ? "0" + q: q) + "</span>"), 59 == q && Z.push("</fieldset>")) : (e = q + ":00", Z.push('<span class="minute' + O + '">' + P + ":" + (10 > q ? "0" + q: q) + "</span>"))
                }
                this.picker.find(".datetimepicker-minutes td").html(Z.join(""));
                var B = this.date.getUTCFullYear(),
                E = this.picker.find(".datetimepicker-months").find("th:eq(1)").text(W).end().find("span").removeClass("active");
                B == W && E.eq(this.date.getUTCMonth()).addClass("active"),
                (Y > W || W > af) && E.addClass("disabled"),
                W == Y && E.slice(0, K).addClass("disabled"),
                W == af && E.slice(X + 1).addClass("disabled"),
                Z = "",
                W = 10 * parseInt(W / 10, 10);
                var s = this.picker.find(".datetimepicker-years").find("th:eq(1)").text(W + "-" + (W + 9)).end().find("td");
                W -= 1;
                for (var q = -1; 11 > q; q++) {
                    Z += '<span class="year' + ( - 1 == q || 10 == q ? " old": "") + (B == W ? " active": "") + (Y > W || W > af ? " disabled": "") + '">' + W + "</span>",
                    W += 1
                }
                s.html(Z),
                this.place()
            }
        },
        updateNavArrows: function() {
            var m = new Date(this.viewDate),
            k = m.getUTCFullYear(),
            j = m.getUTCMonth(),
            l = m.getUTCDate(),
            h = m.getUTCHours();
            switch (this.viewMode) {
            case 0:
                this.startDate !== -1 / 0 && k <= this.startDate.getUTCFullYear() && j <= this.startDate.getUTCMonth() && l <= this.startDate.getUTCDate() && h <= this.startDate.getUTCHours() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                1 / 0 !== this.endDate && k >= this.endDate.getUTCFullYear() && j >= this.endDate.getUTCMonth() && l >= this.endDate.getUTCDate() && h >= this.endDate.getUTCHours() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                });
                break;
            case 1:
                this.startDate !== -1 / 0 && k <= this.startDate.getUTCFullYear() && j <= this.startDate.getUTCMonth() && l <= this.startDate.getUTCDate() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                1 / 0 !== this.endDate && k >= this.endDate.getUTCFullYear() && j >= this.endDate.getUTCMonth() && l >= this.endDate.getUTCDate() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                });
                break;
            case 2:
                this.startDate !== -1 / 0 && k <= this.startDate.getUTCFullYear() && j <= this.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                1 / 0 !== this.endDate && k >= this.endDate.getUTCFullYear() && j >= this.endDate.getUTCMonth() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                });
                break;
            case 3:
            case 4:
                this.startDate !== -1 / 0 && k <= this.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                    visibility: "hidden"
                }) : this.picker.find(".prev").css({
                    visibility: "visible"
                }),
                1 / 0 !== this.endDate && k >= this.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                    visibility: "hidden"
                }) : this.picker.find(".next").css({
                    visibility: "visible"
                })
            }
        },
        mousewheel: function(j) {
            if (j.preventDefault(), j.stopPropagation(), !this.wheelPause) {
                this.wheelPause = !0;
                var h = j.originalEvent,
                k = h.wheelDelta,
                e = k > 0 ? 1 : 0 === k ? 0 : -1;
                this.wheelViewModeNavigationInverseDirection && (e = -e),
                this.showMode(e),
                setTimeout(g.proxy(function() {
                    this.wheelPause = !1
                },
                this), this.wheelViewModeNavigationDelay)
            }
        },
        click: function(q) {
            q.stopPropagation(),
            q.preventDefault();
            var z = g(q.target).closest("span, td, th, legend");
            if (1 == z.length) {
                if (z.is(".disabled")) {
                    return this.element.trigger({
                        type: "outOfRange",
                        date: this.viewDate,
                        startDate: this.startDate,
                        endDate: this.endDate
                    }),
                    void 0
                }
                switch (z[0].nodeName.toLowerCase()) {
                case "th":
                    switch (z[0].className) {
                    case "switch":
                        this.showMode(1);
                        break;
                    case "prev":
                    case "next":
                        var j = b.modes[this.viewMode].navStep * ("prev" == z[0].className ? -1 : 1);
                        switch (this.viewMode) {
                        case 0:
                            this.viewDate = this.moveHour(this.viewDate, j);
                            break;
                        case 1:
                            this.viewDate = this.moveDate(this.viewDate, j);
                            break;
                        case 2:
                            this.viewDate = this.moveMonth(this.viewDate, j);
                            break;
                        case 3:
                        case 4:
                            this.viewDate = this.moveYear(this.viewDate, j)
                        }
                        this.fill();
                        break;
                    case "today":
                        var v = new Date;
                        v = d(v.getFullYear(), v.getMonth(), v.getDate(), v.getHours(), v.getMinutes(), v.getSeconds(), 0),
                        v < this.startDate ? v = this.startDate: v > this.endDate && (v = this.endDate),
                        this.viewMode = this.startViewMode,
                        this.showMode(0),
                        this._setDate(v),
                        this.fill(),
                        this.autoclose && this.hide()
                    }
                    break;
                case "span":
                    if (!z.is(".disabled")) {
                        var e = this.viewDate.getUTCFullYear(),
                        a = this.viewDate.getUTCMonth(),
                        w = this.viewDate.getUTCDate(),
                        p = this.viewDate.getUTCHours(),
                        y = this.viewDate.getUTCMinutes(),
                        x = this.viewDate.getUTCSeconds();
                        if (z.is(".month") ? (this.viewDate.setUTCDate(1), a = z.parent().find("span").index(z), w = this.viewDate.getUTCDate(), this.viewDate.setUTCMonth(a), this.element.trigger({
                            type: "changeMonth",
                            date: this.viewDate
                        }), this.viewSelect >= 3 && this._setDate(d(e, a, w, p, y, x, 0))) : z.is(".year") ? (this.viewDate.setUTCDate(1), e = parseInt(z.text(), 10) || 0, this.viewDate.setUTCFullYear(e), this.element.trigger({
                            type: "changeYear",
                            date: this.viewDate
                        }), this.viewSelect >= 4 && this._setDate(d(e, a, w, p, y, x, 0))) : z.is(".hour") ? (p = parseInt(z.text(), 10) || 0, (z.hasClass("hour_am") || z.hasClass("hour_pm")) && (12 == p && z.hasClass("hour_am") ? p = 0 : 12 != p && z.hasClass("hour_pm") && (p += 12)), this.viewDate.setUTCHours(p), this.element.trigger({
                            type: "changeHour",
                            date: this.viewDate
                        }), this.viewSelect >= 1 && this._setDate(d(e, a, w, p, y, x, 0))) : z.is(".minute") && (y = parseInt(z.text().substr(z.text().indexOf(":") + 1), 10) || 0, this.viewDate.setUTCMinutes(y), this.element.trigger({
                            type: "changeMinute",
                            date: this.viewDate
                        }), this.viewSelect >= 0 && this._setDate(d(e, a, w, p, y, x, 0))), 0 != this.viewMode) {
                            var k = this.viewMode;
                            this.showMode( - 1),
                            this.fill(),
                            k == this.viewMode && this.autoclose && this.hide()
                        } else {
                            this.fill(),
                            this.autoclose && this.hide()
                        }
                    }
                    break;
                case "td":
                    if (z.is(".day") && !z.is(".disabled")) {
                        var w = parseInt(z.text(), 10) || 1,
                        e = this.viewDate.getUTCFullYear(),
                        a = this.viewDate.getUTCMonth(),
                        p = this.viewDate.getUTCHours(),
                        y = this.viewDate.getUTCMinutes(),
                        x = this.viewDate.getUTCSeconds();
                        z.is(".old") ? 0 === a ? (a = 11, e -= 1) : a -= 1 : z.is(".new") && (11 == a ? (a = 0, e += 1) : a += 1),
                        this.viewDate.setUTCFullYear(e),
                        this.viewDate.setUTCMonth(a, w),
                        this.element.trigger({
                            type: "changeDay",
                            date: this.viewDate
                        }),
                        this.viewSelect >= 2 && this._setDate(d(e, a, w, p, y, x, 0))
                    }
                    var k = this.viewMode;
                    this.showMode( - 1),
                    this.fill(),
                    k == this.viewMode && this.autoclose && this.hide()
                }
            }
        },
        _setDate: function(j, h) {
            h && "date" != h || (this.date = j),
            h && "view" != h || (this.viewDate = j),
            this.fill(),
            this.setValue();
            var a;
            this.isInput ? a = this.element: this.component && (a = this.element.find("input")),
            a && (a.change(), this.autoclose && (!h || "date" == h)),
            this.element.trigger({
                type: "changeDate",
                date: this.date
            })
        },
        moveMinute: function(j, h) {
            if (!h) {
                return j
            }
            var a = new Date(j.valueOf());
            return a.setUTCMinutes(a.getUTCMinutes() + h * this.minuteStep),
            a
        },
        moveHour: function(j, h) {
            if (!h) {
                return j
            }
            var a = new Date(j.valueOf());
            return a.setUTCHours(a.getUTCHours() + h),
            a
        },
        moveDate: function(j, h) {
            if (!h) {
                return j
            }
            var a = new Date(j.valueOf());
            return a.setUTCDate(a.getUTCDate() + h),
            a
        },
        moveMonth: function(q, v) {
            if (!v) {
                return q
            }
            var m, w, u = new Date(q.valueOf()),
            l = u.getUTCDate(),
            p = u.getUTCMonth(),
            k = Math.abs(v);
            if (v = v > 0 ? 1 : -1, 1 == k) {
                w = -1 == v ?
                function() {
                    return u.getUTCMonth() == p
                }: function() {
                    return u.getUTCMonth() != m
                },
                m = p + v,
                u.setUTCMonth(m),
                (0 > m || m > 11) && (m = (m + 12) % 12)
            } else {
                for (var j = 0; k > j; j++) {
                    u = this.moveMonth(u, v)
                }
                m = u.getUTCMonth(),
                u.setUTCDate(l),
                w = function() {
                    return m != u.getUTCMonth()
                }
            }
            for (; w();) {
                u.setUTCDate(--l),
                u.setUTCMonth(m)
            }
            return u
        },
        moveYear: function(h, a) {
            return this.moveMonth(h, 12 * a)
        },
        dateWithinRange: function(a) {
            return a >= this.startDate && a <= this.endDate
        },
        keydown: function(p) {
            if (this.picker.is(":not(:visible)")) {
                return 27 == p.keyCode && this.show(),
                void 0
            }
            var l, k, o, j = !1;
            switch (p.keyCode) {
            case 27:
                this.hide(),
                p.preventDefault();
                break;
            case 37:
            case 39:
                if (!this.keyboardNavigation) {
                    break
                }
                l = 37 == p.keyCode ? -1 : 1,
                viewMode = this.viewMode,
                p.ctrlKey ? viewMode += 2 : p.shiftKey && (viewMode += 1),
                4 == viewMode ? (k = this.moveYear(this.date, l), o = this.moveYear(this.viewDate, l)) : 3 == viewMode ? (k = this.moveMonth(this.date, l), o = this.moveMonth(this.viewDate, l)) : 2 == viewMode ? (k = this.moveDate(this.date, l), o = this.moveDate(this.viewDate, l)) : 1 == viewMode ? (k = this.moveHour(this.date, l), o = this.moveHour(this.viewDate, l)) : 0 == viewMode && (k = this.moveMinute(this.date, l), o = this.moveMinute(this.viewDate, l)),
                this.dateWithinRange(k) && (this.date = k, this.viewDate = o, this.setValue(), this.update(), p.preventDefault(), j = !0);
                break;
            case 38:
            case 40:
                if (!this.keyboardNavigation) {
                    break
                }
                l = 38 == p.keyCode ? -1 : 1,
                viewMode = this.viewMode,
                p.ctrlKey ? viewMode += 2 : p.shiftKey && (viewMode += 1),
                4 == viewMode ? (k = this.moveYear(this.date, l), o = this.moveYear(this.viewDate, l)) : 3 == viewMode ? (k = this.moveMonth(this.date, l), o = this.moveMonth(this.viewDate, l)) : 2 == viewMode ? (k = this.moveDate(this.date, 7 * l), o = this.moveDate(this.viewDate, 7 * l)) : 1 == viewMode ? this.showMeridian ? (k = this.moveHour(this.date, 6 * l), o = this.moveHour(this.viewDate, 6 * l)) : (k = this.moveHour(this.date, 4 * l), o = this.moveHour(this.viewDate, 4 * l)) : 0 == viewMode && (k = this.moveMinute(this.date, 4 * l), o = this.moveMinute(this.viewDate, 4 * l)),
                this.dateWithinRange(k) && (this.date = k, this.viewDate = o, this.setValue(), this.update(), p.preventDefault(), j = !0);
                break;
            case 13:
                if (0 != this.viewMode) {
                    var q = this.viewMode;
                    this.showMode( - 1),
                    this.fill(),
                    q == this.viewMode && this.autoclose && this.hide()
                } else {
                    this.fill(),
                    this.autoclose && this.hide()
                }
                p.preventDefault();
                break;
            case 9:
                this.hide()
            }
            if (j) {
                var m;
                this.isInput ? m = this.element: this.component && (m = this.element.find("input")),
                m && m.change(),
                this.element.trigger({
                    type: "changeDate",
                    date: this.date
                })
            }
        },
        showMode: function(h) {
            if (h) {
                var a = Math.max(0, Math.min(b.modes.length - 1, this.viewMode + h));
                a >= this.minView && a <= this.maxView && (this.element.trigger({
                    type: "changeMode",
                    date: this.viewDate,
                    oldViewMode: this.viewMode,
                    newViewMode: a
                }), this.viewMode = a)
            }
            this.picker.find(">div").hide().filter(".datetimepicker-" + b.modes[this.viewMode].clsName).css("display", "block"),
            this.updateNavArrows()
        },
        reset: function() {
            this._setDate(null, "date")
        }
    },
    g.fn.datetimepicker = function(a) {
        var e = Array.apply(null, arguments);
        return e.shift(),
        this.each(function() {
            var j = g(this),
            l = j.data("datetimepicker"),
            k = "object" == typeof a && a;
            l || j.data("datetimepicker", l = new c(this, g.extend({},
            g.fn.datetimepicker.defaults, k))),
            "string" == typeof a && "function" == typeof l[a] && l[a].apply(l, e)
        })
    },
    g.fn.datetimepicker.defaults = {},
    g.fn.datetimepicker.Constructor = c;
    var f = g.fn.datetimepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            meridiem: ["am", "pm"],
            suffix: ["st", "nd", "rd", "th"],
            today: "Today"
        }
    };
    f["zh-cn"] = {
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
        daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        today: "今日",
        suffix: [],
        meridiem: []
    },
    f["zh-tw"] = {
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
        daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        today: "今天",
        suffix: [],
        meridiem: ["上午", "下午"]
    };
    var b = {
        modes: [{
            clsName: "minutes",
            navFnc: "Hours",
            navStep: 1
        },
        {
            clsName: "hours",
            navFnc: "Date",
            navStep: 1
        },
        {
            clsName: "days",
            navFnc: "Month",
            navStep: 1
        },
        {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        },
        {
            clsName: "years",
            navFnc: "FullYear",
            navStep: 10
        }],
        isLeapYear: function(a) {
            return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400
        },
        getDaysInMonth: function(h, a) {
            return [31, b.isLeapYear(h) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][a]
        },
        getDefaultFormat: function(h, a) {
            if ("standard" == h) {
                return "input" == a ? "yyyy-mm-dd hh:ii": "yyyy-mm-dd hh:ii:ss"
            }
            if ("php" == h) {
                return "input" == a ? "Y-m-d H:i": "Y-m-d H:i:s"
            }
            throw new Error("Invalid format type.")
        },
        validParts: function(a) {
            if ("standard" == a) {
                return /hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g
            }
            if ("php" == a) {
                return /[dDjlNwzFmMnStyYaABgGhHis]/g
            }
            throw new Error("Invalid format type.")
        },
        nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
        parseFormat: function(k, h) {
            var a = k.replace(this.validParts(h), "\0").split("\0"),
            j = k.match(this.validParts(h));
            if (!a || !a.length || !j || 0 == j.length) {
                throw new Error("Invalid date format.")
            }
            return {
                separators: a,
                parts: j
            }
        },
        parseDate: function(H, s, A, q) {
            if (H instanceof Date) {
                var j = new Date(H.valueOf() - 60000 * H.getTimezoneOffset());
                return j.setMilliseconds(0),
                j
            }
            if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(H) && (s = this.parseFormat("yyyy-mm-dd", q)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(H) && (s = this.parseFormat("yyyy-mm-dd hh:ii", q)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(H) && (s = this.parseFormat("yyyy-mm-dd hh:ii:ss", q)), /^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(H)) {
                var E, z, K = /([-+]\d+)([dmwy])/,
                F = H.match(/([-+]\d+)([dmwy])/g);
                H = new Date;
                for (var x = 0; x < F.length; x++) {
                    switch (E = K.exec(F[x]), z = parseInt(E[1]), E[2]) {
                    case "d":
                        H.setUTCDate(H.getUTCDate() + z);
                        break;
                    case "m":
                        H = c.prototype.moveMonth.call(c.prototype, H, z);
                        break;
                    case "w":
                        H.setUTCDate(H.getUTCDate() + 7 * z);
                        break;
                    case "y":
                        H = c.prototype.moveYear.call(c.prototype, H, z)
                    }
                }
                return d(H.getUTCFullYear(), H.getUTCMonth(), H.getUTCDate(), H.getUTCHours(), H.getUTCMinutes(), H.getUTCSeconds(), 0)
            }
            var k, J, E, F = H && H.match(this.nonpunctuation) || [],
            H = new Date(0, 0, 0, 0, 0, 0, 0),
            B = {},
            C = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "D", "DD", "d", "dd", "H", "HH", "p", "P"],
            I = {
                hh: function(h, a) {
                    return h.setUTCHours(a)
                },
                h: function(h, a) {
                    return h.setUTCHours(a)
                },
                HH: function(h, a) {
                    return h.setUTCHours(12 == a ? 0 : a)
                },
                H: function(h, a) {
                    return h.setUTCHours(12 == a ? 0 : a)
                },
                ii: function(h, a) {
                    return h.setUTCMinutes(a)
                },
                i: function(h, a) {
                    return h.setUTCMinutes(a)
                },
                ss: function(h, a) {
                    return h.setUTCSeconds(a)
                },
                s: function(h, a) {
                    return h.setUTCSeconds(a)
                },
                yyyy: function(h, a) {
                    return h.setUTCFullYear(a)
                },
                yy: function(h, a) {
                    return h.setUTCFullYear(2000 + a)
                },
                m: function(h, a) {
                    for (a -= 1; 0 > a;) {
                        a += 12
                    }
                    for (a %= 12, h.setUTCMonth(a); h.getUTCMonth() != a;) {
                        h.setUTCDate(h.getUTCDate() - 1)
                    }
                    return h
                },
                d: function(h, a) {
                    return h.setUTCDate(a)
                },
                p: function(h, a) {
                    return h.setUTCHours(1 == a ? h.getUTCHours() + 12 : h.getUTCHours())
                }
            };
            if (I.M = I.MM = I.mm = I.m, I.dd = I.d, I.P = I.p, H = d(H.getFullYear(), H.getMonth(), H.getDate(), H.getHours(), H.getMinutes(), H.getSeconds()), F.length == s.parts.length) {
                for (var x = 0,
                e = s.parts.length; e > x; x++) {
                    if (k = parseInt(F[x], 10), E = s.parts[x], isNaN(k)) {
                        switch (E) {
                        case "MM":
                            J = g(f[A].months).filter(function() {
                                var h = this.slice(0, F[x].length),
                                a = F[x].slice(0, h.length);
                                return h == a
                            }),
                            k = g.inArray(J[0], f[A].months) + 1;
                            break;
                        case "M":
                            J = g(f[A].monthsShort).filter(function() {
                                var h = this.slice(0, F[x].length),
                                a = F[x].slice(0, h.length);
                                return h == a
                            }),
                            k = g.inArray(J[0], f[A].monthsShort) + 1;
                            break;
                        case "p":
                        case "P":
                            k = g.inArray(F[x].toLowerCase(), f[A].meridiem)
                        }
                    }
                    B[E] = k
                }
                for (var G, x = 0; x < C.length; x++) {
                    G = C[x],
                    G in B && !isNaN(B[G]) && I[G](H, B[G])
                }
            }
            return H
        },
        formatDate: function(j, e, s, k) {
            if (null == j) {
                return ""
            }
            var q;
            if ("standard" == k) {
                q = {
                    yy: j.getUTCFullYear().toString().substring(2),
                    yyyy: j.getUTCFullYear(),
                    m: j.getUTCMonth() + 1,
                    M: f[s].monthsShort[j.getUTCMonth()],
                    MM: f[s].months[j.getUTCMonth()],
                    d: j.getUTCDate(),
                    D: f[s].daysShort[j.getUTCDay()],
                    DD: f[s].days[j.getUTCDay()],
                    p: 2 == f[s].meridiem.length ? f[s].meridiem[j.getUTCHours() < 12 ? 0 : 1] : "",
                    h: j.getUTCHours(),
                    i: j.getUTCMinutes(),
                    s: j.getUTCSeconds()
                },
                q.H = 2 == f[s].meridiem.length ? 0 == q.h % 12 ? 12 : q.h % 12 : q.h,
                q.HH = (q.H < 10 ? "0": "") + q.H,
                q.P = q.p.toUpperCase(),
                q.hh = (q.h < 10 ? "0": "") + q.h,
                q.ii = (q.i < 10 ? "0": "") + q.i,
                q.ss = (q.s < 10 ? "0": "") + q.s,
                q.dd = (q.d < 10 ? "0": "") + q.d,
                q.mm = (q.m < 10 ? "0": "") + q.m
            } else {
                if ("php" != k) {
                    throw new Error("Invalid format type.")
                }
                q = {
                    y: j.getUTCFullYear().toString().substring(2),
                    Y: j.getUTCFullYear(),
                    F: f[s].months[j.getUTCMonth()],
                    M: f[s].monthsShort[j.getUTCMonth()],
                    n: j.getUTCMonth() + 1,
                    t: b.getDaysInMonth(j.getUTCFullYear(), j.getUTCMonth()),
                    j: j.getUTCDate(),
                    l: f[s].days[j.getUTCDay()],
                    D: f[s].daysShort[j.getUTCDay()],
                    w: j.getUTCDay(),
                    N: 0 == j.getUTCDay() ? 7 : j.getUTCDay(),
                    S: j.getUTCDate() % 10 <= f[s].suffix.length ? f[s].suffix[j.getUTCDate() % 10 - 1] : "",
                    a: 2 == f[s].meridiem.length ? f[s].meridiem[j.getUTCHours() < 12 ? 0 : 1] : "",
                    g: 0 == j.getUTCHours() % 12 ? 12 : j.getUTCHours() % 12,
                    G: j.getUTCHours(),
                    i: j.getUTCMinutes(),
                    s: j.getUTCSeconds()
                },
                q.m = (q.n < 10 ? "0": "") + q.n,
                q.d = (q.j < 10 ? "0": "") + q.j,
                q.A = q.a.toString().toUpperCase(),
                q.h = (q.g < 10 ? "0": "") + q.g,
                q.H = (q.G < 10 ? "0": "") + q.G,
                q.i = (q.i < 10 ? "0": "") + q.i,
                q.s = (q.s < 10 ? "0": "") + q.s
            }
            for (var j = [], m = g.extend([], e.separators), p = 0, a = e.parts.length; a > p; p++) {
                m.length && j.push(m.shift()),
                j.push(q[e.parts[p]])
            }
            return m.length && j.push(m.shift()),
            j.join("")
        },
        convertViewMode: function(a) {
            switch (a) {
            case 4:
            case "decade":
                a = 4;
                break;
            case 3:
            case "year":
                a = 3;
                break;
            case 2:
            case "month":
                a = 2;
                break;
            case 1:
            case "day":
                a = 1;
                break;
            case 0:
            case "hour":
                a = 0
            }
            return a
        },
        headTemplate: '<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
    };
    b.template = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + b.headTemplate + b.contTemplate + b.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + b.headTemplate + b.contTemplate + b.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + b.headTemplate + "<tbody></tbody>" + b.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + b.headTemplate + b.contTemplate + b.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + b.headTemplate + b.contTemplate + b.footTemplate + "</table></div></div>",
    g.fn.datetimepicker.DPGlobal = b,
    g.fn.datetimepicker.noConflict = function() {
        return g.fn.datetimepicker = old,
        this
    },
    g(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api", '[data-provide="datetimepicker"]',
    function(e) {
        var a = g(this);
        a.data("datetimepicker") || (e.preventDefault(), a.datetimepicker("show"))
    }),
    g(function() {
        g('[data-provide="datetimepicker-inline"]').datetimepicker()
    })
} (window.jQuery);
/*!
 * ZUI: Chart.js - v1.5.0 - 2016-11-01
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git
 * Copyright (c) 2016 cnezsoft.com; Licensed MIT
 */
/*!
 * Chart.js 1.0.2
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * http://chartjs.org/
 */
(function(X) {
    var aj = X && X.zui ? X.zui: this,
    an = (aj.Chart,
    function(b) {
        this.canvas = b.canvas,
        this.ctx = b;
        var a = function(f, e) {
            return f["offset" + e] ? f["offset" + e] : document.defaultView.getComputedStyle(f).getPropertyValue(e)
        },
        c = this.width = a(b.canvas, "Width"),
        d = this.height = a(b.canvas, "Height");
        b.canvas.width = c,
        b.canvas.height = d;
        var c = this.width = b.canvas.width,
        d = this.height = b.canvas.height;
        return this.aspectRatio = this.width / this.height,
        Y.retinaScale(this),
        this
    });
    an.defaults = {
        global: {
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: !0,
            scaleBeginAtZero: !1,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: !1,
            maintainAspectRatio: !0,
            showTooltips: !0,
            customTooltips: !1,
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            onAnimationProgress: function() {},
            onAnimationComplete: function() {}
        }
    },
    an.types = {};
    var Y = an.helpers = {},
    af = Y.each = function(b, a, d) {
        var c = Array.prototype.slice.call(arguments, 3);
        if (b) {
            if (b.length === +b.length) {
                var g;
                for (g = 0; g < b.length; g++) {
                    a.apply(d, [b[g], g].concat(c))
                }
            } else {
                for (var f in b) {
                    a.apply(d, [b[f], f].concat(c))
                }
            }
        }
    },
    ae = Y.clone = function(b) {
        var a = {};
        return af(b,
        function(d, c) {
            b.hasOwnProperty(c) && (a[c] = d)
        }),
        a
    },
    ar = Y.extend = function(a) {
        return af(Array.prototype.slice.call(arguments, 1),
        function(b) {
            af(b,
            function(d, c) {
                b.hasOwnProperty(c) && (a[c] = d)
            })
        }),
        a
    },
    ak = Y.merge = function(b, a) {
        var c = Array.prototype.slice.call(arguments, 0);
        return c.unshift({}),
        ar.apply(null, c)
    },
    ah = Y.indexOf = function(b, a) {
        if (Array.prototype.indexOf) {
            return b.indexOf(a)
        }
        for (var c = 0; c < b.length; c++) {
            if (b[c] === a) {
                return c
            }
        }
        return - 1
    },
    aa = (Y.where = function(b, a) {
        var c = [];
        return Y.each(b,
        function(d) {
            a(d) && c.push(d)
        }),
        c
    },
    Y.findNextWhere = function(b, a, d) {
        d || (d = -1);
        for (var c = d + 1; c < b.length; c++) {
            var f = b[c];
            if (a(f)) {
                return f
            }
        }
    },
    Y.findPreviousWhere = function(b, a, d) {
        d || (d = b.length);
        for (var c = d - 1; c >= 0; c--) {
            var f = b[c];
            if (a(f)) {
                return f
            }
        }
    },
    Y.inherits = function(b) {
        var a = this,
        d = b && b.hasOwnProperty("constructor") ? b.constructor: function() {
            return a.apply(this, arguments)
        },
        c = function() {
            this.constructor = d
        };
        return c.prototype = a.prototype,
        d.prototype = new c,
        d.extend = aa,
        b && ar(d.prototype, b),
        d.__super__ = a.prototype,
        d
    }),
    ap = Y.noop = function() {},
    V = Y.uid = function() {
        var a = 0;
        return function() {
            return "chart-" + a++
        }
    } (),
    ao = Y.warn = function(a) {
        window.console && "function" == typeof window.console.warn && console.warn(a)
    },
    am = Y.amd = "function" == typeof define && define.amd,
    ad = Y.isNumber = function(a) {
        return ! isNaN(parseFloat(a)) && isFinite(a)
    },
    al = Y.max = function(a) {
        return Math.max.apply(Math, a)
    },
    Q = Y.min = function(a) {
        return Math.min.apply(Math, a)
    },
    N = (Y.cap = function(b, a, c) {
        if (ad(a)) {
            if (b > a) {
                return a
            }
        } else {
            if (ad(c) && c > b) {
                return c
            }
        }
        return b
    },
    Y.getDecimalPlaces = function(a) {
        return a % 1 !== 0 && ad(a) ? a.toString().split(".")[1].length: 0
    }),
    ag = Y.radians = function(a) {
        return a * (Math.PI / 180)
    },
    K = (Y.getAngleFromPoint = function(b, a) {
        var d = a.x - b.x,
        c = a.y - b.y,
        g = Math.sqrt(d * d + c * c),
        f = 2 * Math.PI + Math.atan2(c, d);
        return 0 > d && 0 > c && (f += 2 * Math.PI),
        {
            angle: f,
            distance: g
        }
    },
    Y.aliasPixel = function(a) {
        return a % 2 === 0 ? 0 : 0.5
    }),
    O = (Y.splineCurve = function(d, c, k, g) {
        var m = Math.sqrt(Math.pow(c.x - d.x, 2) + Math.pow(c.y - d.y, 2)),
        l = Math.sqrt(Math.pow(k.x - c.x, 2) + Math.pow(k.y - c.y, 2)),
        b = g * m / (m + l),
        f = g * l / (m + l);
        return {
            inner: {
                x: c.x - b * (k.x - d.x),
                y: c.y - b * (k.y - d.y)
            },
            outer: {
                x: c.x + f * (k.x - d.x),
                y: c.y + f * (k.y - d.y)
            }
        }
    },
    Y.calculateOrderOfMagnitude = function(a) {
        return Math.floor(Math.log(a) / Math.LN10)
    }),
    D = (Y.calculateScaleRange = function(S, z, C, T, v) {
        var k = 2,
        P = Math.floor(z / (1.5 * C)),
        A = k >= P,
        y = al(S),
        b = Q(S);
        y === b && (y += 0.5, b >= 0.5 && !T ? b -= 0.5 : y += 0.5);
        for (var L = Math.abs(y - b), R = O(L), F = Math.ceil(y / (1 * Math.pow(10, R))) * Math.pow(10, R), B = T ? 0 : Math.floor(b / (1 * Math.pow(10, R))) * Math.pow(10, R), g = F - B, M = Math.pow(10, R), w = Math.round(g / M); (w > P || P > 2 * w) && !A;) {
            if (w > P) {
                M *= 2,
                w = Math.round(g / M),
                w % 1 !== 0 && (A = !0)
            } else {
                if (v && R >= 0) {
                    if (M / 2 % 1 !== 0) {
                        break
                    }
                    M /= 2,
                    w = Math.round(g / M)
                } else {
                    M /= 2,
                    w = Math.round(g / M)
                }
            }
        }
        return A && (w = k, M = g / w),
        {
            steps: w,
            stepValue: M,
            min: B,
            max: B + w * M
        }
    },
    Y.template = function(b, a) {
        function d(g, f) {
            var h = /\W/.test(g) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + g.replace(/[\r\t\n]/g, " ").split("<%").join("  ").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split(" ").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : c[g] = c[g];
            return f ? h(f) : h
        }
        if (b instanceof Function) {
            return b(a)
        }
        var c = {};
        return d(b, a)
    }),
    Z = (Y.generateLabels = function(b, a, d, c) {
        var f = new Array(a);
        return labelTemplateString && af(f,
        function(e, g) {
            f[g] = D(b, {
                value: d + c * (g + 1)
            })
        }),
        f
    },
    Y.easingEffects = {
        linear: function(a) {
            return a
        },
        easeInQuad: function(a) {
            return a * a
        },
        easeOutQuad: function(a) {
            return - 1 * a * (a - 2)
        },
        easeInOutQuad: function(a) {
            return (a /= 0.5) < 1 ? 0.5 * a * a: -0.5 * (--a * (a - 2) - 1)
        },
        easeInCubic: function(a) {
            return a * a * a
        },
        easeOutCubic: function(a) {
            return 1 * ((a = a / 1 - 1) * a * a + 1)
        },
        easeInOutCubic: function(a) {
            return (a /= 0.5) < 1 ? 0.5 * a * a * a: 0.5 * ((a -= 2) * a * a + 2)
        },
        easeInQuart: function(a) {
            return a * a * a * a
        },
        easeOutQuart: function(a) {
            return - 1 * ((a = a / 1 - 1) * a * a * a - 1)
        },
        easeInOutQuart: function(a) {
            return (a /= 0.5) < 1 ? 0.5 * a * a * a * a: -0.5 * ((a -= 2) * a * a * a - 2)
        },
        easeInQuint: function(a) {
            return 1 * (a /= 1) * a * a * a * a
        },
        easeOutQuint: function(a) {
            return 1 * ((a = a / 1 - 1) * a * a * a * a + 1)
        },
        easeInOutQuint: function(a) {
            return (a /= 0.5) < 1 ? 0.5 * a * a * a * a * a: 0.5 * ((a -= 2) * a * a * a * a + 2)
        },
        easeInSine: function(a) {
            return - 1 * Math.cos(a / 1 * (Math.PI / 2)) + 1
        },
        easeOutSine: function(a) {
            return 1 * Math.sin(a / 1 * (Math.PI / 2))
        },
        easeInOutSine: function(a) {
            return - 0.5 * (Math.cos(Math.PI * a / 1) - 1)
        },
        easeInExpo: function(a) {
            return 0 === a ? 1 : 1 * Math.pow(2, 10 * (a / 1 - 1))
        },
        easeOutExpo: function(a) {
            return 1 === a ? 1 : 1 * ( - Math.pow(2, -10 * a / 1) + 1)
        },
        easeInOutExpo: function(a) {
            return 0 === a ? 0 : 1 === a ? 1 : (a /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * ( - Math.pow(2, -10 * --a) + 2)
        },
        easeInCirc: function(a) {
            return a >= 1 ? a: -1 * (Math.sqrt(1 - (a /= 1) * a) - 1)
        },
        easeOutCirc: function(a) {
            return 1 * Math.sqrt(1 - (a = a / 1 - 1) * a)
        },
        easeInOutCirc: function(a) {
            return (a /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        },
        easeInElastic: function(b) {
            var a = 1.70158,
            d = 0,
            c = 1;
            return 0 === b ? 0 : 1 == (b /= 1) ? 1 : (d || (d = 0.3), c < Math.abs(1) ? (c = 1, a = d / 4) : a = d / (2 * Math.PI) * Math.asin(1 / c), -(c * Math.pow(2, 10 * (b -= 1)) * Math.sin((1 * b - a) * (2 * Math.PI) / d)))
        },
        easeOutElastic: function(b) {
            var a = 1.70158,
            d = 0,
            c = 1;
            return 0 === b ? 0 : 1 == (b /= 1) ? 1 : (d || (d = 0.3), c < Math.abs(1) ? (c = 1, a = d / 4) : a = d / (2 * Math.PI) * Math.asin(1 / c), c * Math.pow(2, -10 * b) * Math.sin((1 * b - a) * (2 * Math.PI) / d) + 1)
        },
        easeInOutElastic: function(b) {
            var a = 1.70158,
            d = 0,
            c = 1;
            return 0 === b ? 0 : 2 == (b /= 0.5) ? 1 : (d || (d = 1 * (0.3 * 1.5)), c < Math.abs(1) ? (c = 1, a = d / 4) : a = d / (2 * Math.PI) * Math.asin(1 / c), 1 > b ? -0.5 * (c * Math.pow(2, 10 * (b -= 1)) * Math.sin((1 * b - a) * (2 * Math.PI) / d)) : c * Math.pow(2, -10 * (b -= 1)) * Math.sin((1 * b - a) * (2 * Math.PI) / d) * 0.5 + 1)
        },
        easeInBack: function(b) {
            var a = 1.70158;
            return 1 * (b /= 1) * b * ((a + 1) * b - a)
        },
        easeOutBack: function(b) {
            var a = 1.70158;
            return 1 * ((b = b / 1 - 1) * b * ((a + 1) * b + a) + 1)
        },
        easeInOutBack: function(b) {
            var a = 1.70158;
            return (b /= 0.5) < 1 ? 0.5 * (b * b * (((a *= 1.525) + 1) * b - a)) : 0.5 * ((b -= 2) * b * (((a *= 1.525) + 1) * b + a) + 2)
        },
        easeInBounce: function(a) {
            return 1 - Z.easeOutBounce(1 - a)
        },
        easeOutBounce: function(a) {
            return (a /= 1) < 1 / 2.75 ? 1 * (7.5625 * a * a) : 2 / 2.75 > a ? 1 * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) : 2.5 / 2.75 > a ? 1 * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) : 1 * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
        },
        easeInOutBounce: function(a) {
            return 0.5 > a ? 0.5 * Z.easeInBounce(2 * a) : 0.5 * Z.easeOutBounce(2 * a - 1) + 0.5
        }
    }),
    aq = Y.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(a) {
            return window.setTimeout(a, 1000 / 60)
        }
    } (),
    G = Y.cancelAnimFrame = function() {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame ||
        function(a) {
            return window.clearTimeout(a, 1000 / 60)
        }
    } (),
    I = (Y.animationLoop = function(p, f, k, r, c, b) {
        var m = 0,
        g = Z[k] || Z.linear,
        d = function() {
            m++;
            var h = m / f,
            a = g(h);
            p.call(b, a, h, m),
            r.call(b, a, h),
            f > m ? b.animationFrame = aq(d) : c.apply(b)
        };
        aq(d)
    },
    Y.getRelativePosition = function(b) {
        var a, d, c = b.originalEvent || b,
        g = b.currentTarget || b.srcElement,
        f = g.getBoundingClientRect();
        return c.touches ? (a = c.touches[0].clientX - f.left, d = c.touches[0].clientY - f.top) : (a = c.clientX - f.left, d = c.clientY - f.top),
        {
            x: a,
            y: d
        }
    },
    Y.addEvent = function(b, a, c) {
        b.addEventListener ? b.addEventListener(a, c) : b.attachEvent ? b.attachEvent("on" + a, c) : b["on" + a] = c
    }),
    ai = Y.removeEvent = function(b, a, c) {
        b.removeEventListener ? b.removeEventListener(a, c, !1) : b.detachEvent ? b.detachEvent("on" + a, c) : b["on" + a] = ap
    },
    U = (Y.bindEvents = function(b, a, c) {
        b.events || (b.events = {}),
        af(a,
        function(d) {
            b.events[d] = function() {
                c.apply(b, arguments)
            },
            I(b.chart.canvas, d, b.events[d])
        })
    },
    Y.unbindEvents = function(b, a) {
        af(a,
        function(c, d) {
            ai(b.chart.canvas, d, c)
        })
    }),
    J = Y.getMaximumWidth = function(b) {
        var a = b.parentNode;
        return a.clientWidth
    },
    q = Y.getMaximumHeight = function(b) {
        var a = b.parentNode;
        return a.clientHeight
    },
    H = (Y.getMaximumSize = Y.getMaximumWidth, Y.retinaScale = function(b) {
        var a = b.ctx,
        d = b.canvas.width,
        c = b.canvas.height;
        window.devicePixelRatio && (a.canvas.style.width = d + "px", a.canvas.style.height = c + "px", a.canvas.height = c * window.devicePixelRatio, a.canvas.width = d * window.devicePixelRatio, a.scale(window.devicePixelRatio, window.devicePixelRatio))
    }),
    E = Y.clear = function(a) {
        a.ctx.clearRect(0, 0, a.width, a.height)
    },
    ac = Y.fontString = function(b, a, c) {
        return a + " " + b + "px " + c
    },
    j = Y.longestText = function(b, a, d) {
        b.font = a;
        var c = 0;
        return af(d,
        function(f) {
            var g = b.measureText(f).width;
            c = g > c ? g: c
        }),
        c
    },
    ab = Y.drawRoundedRectangle = function(b, a, d, c, g, f) {
        b.beginPath(),
        b.moveTo(a + f, d),
        b.lineTo(a + c - f, d),
        b.quadraticCurveTo(a + c, d, a + c, d + f),
        b.lineTo(a + c, d + g - f),
        b.quadraticCurveTo(a + c, d + g, a + c - f, d + g),
        b.lineTo(a + f, d + g),
        b.quadraticCurveTo(a, d + g, a, d + g - f),
        b.lineTo(a, d + f),
        b.quadraticCurveTo(a, d, a + f, d),
        b.closePath()
    };
    an.instances = {},
    an.Type = function(b, a, c) {
        this.options = a,
        this.chart = c,
        this.id = V(),
        an.instances[this.id] = this,
        a.responsive && this.resize(),
        this.initialize.call(this, b)
    },
    ar(an.Type.prototype, {
        initialize: function() {
            return this
        },
        clear: function() {
            return E(this.chart),
            this
        },
        stop: function() {
            return G(this.animationFrame),
            this
        },
        resize: function(b) {
            this.stop();
            var a = this.chart.canvas,
            d = J(this.chart.canvas),
            c = this.options.maintainAspectRatio ? d / this.chart.aspectRatio: q(this.chart.canvas);
            return a.width = this.chart.width = d,
            a.height = this.chart.height = c,
            H(this.chart),
            "function" == typeof b && b.apply(this, Array.prototype.slice.call(arguments, 1)),
            this
        },
        reflow: ap,
        render: function(a) {
            return a && this.reflow(),
            this.options.animation && !a ? Y.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)),
            this
        },
        generateLegend: function() {
            return D(this.options.legendTemplate, this)
        },
        destroy: function() {
            this.clear(),
            U(this, this.events);
            var a = this.chart.canvas;
            a.width = this.chart.width,
            a.height = this.chart.height,
            a.style.removeProperty ? (a.style.removeProperty("width"), a.style.removeProperty("height")) : (a.style.removeAttribute("width"), a.style.removeAttribute("height")),
            delete an.instances[this.id]
        },
        showTooltip: function(p, f) {
            "undefined" == typeof this.activeElements && (this.activeElements = []);
            var e = function(c) {
                var a = !1;
                return c.length !== this.activeElements.length ? a = !0 : (af(c,
                function(d, h) {
                    d !== this.activeElements[h] && (a = !0)
                },
                this), a)
            }.call(this, p);
            if (e || f) {
                if (this.activeElements = p, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), p.length > 0) {
                    if (this.datasets && this.datasets.length > 1) {
                        for (var m, g, b = this.datasets.length - 1; b >= 0 && (m = this.datasets[b].points || this.datasets[b].bars || this.datasets[b].segments, g = ah(m, p[0]), -1 === g); b--) {}
                        var l = [],
                        n = [],
                        k = function(z) {
                            var v, w, s, h, y, u = [],
                            c = [],
                            x = [];
                            return Y.each(this.datasets,
                            function(a) {
                                a.showTooltips !== !1 && (v = a.points || a.bars || a.segments, v[g] && v[g].hasValue() && u.push(v[g]))
                            }),
                            Y.each(u,
                            function(a) {
                                c.push(a.x),
                                x.push(a.y),
                                l.push(Y.template(this.options.multiTooltipTemplate, a)),
                                n.push({
                                    fill: a._saved.fillColor || a.fillColor,
                                    stroke: a._saved.strokeColor || a.strokeColor
                                })
                            },
                            this),
                            y = Q(x),
                            s = al(x),
                            h = Q(c),
                            w = al(c),
                            {
                                x: h > this.chart.width / 2 ? h: w,
                                y: (y + s) / 2
                            }
                        }.call(this, g);
                        new an.MultiTooltip({
                            x: k.x,
                            y: k.y,
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            xOffset: this.options.tooltipXOffset,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            titleTextColor: this.options.tooltipTitleFontColor,
                            titleFontFamily: this.options.tooltipTitleFontFamily,
                            titleFontStyle: this.options.tooltipTitleFontStyle,
                            titleFontSize: this.options.tooltipTitleFontSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            labels: l,
                            legendColors: n,
                            legendColorBackground: this.options.multiTooltipKeyBackground,
                            title: p[0].label,
                            chart: this.chart,
                            ctx: this.chart.ctx,
                            custom: this.options.customTooltips
                        }).draw()
                    } else {
                        af(p,
                        function(c) {
                            var a = c.tooltipPosition();
                            new an.Tooltip({
                                x: Math.round(a.x),
                                y: Math.round(a.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: D(this.options.tooltipTemplate, c),
                                chart: this.chart,
                                custom: this.options.customTooltips
                            }).draw()
                        },
                        this)
                    }
                }
                return this
            }
        },
        toBase64Image: function() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
        }
    }),
    an.Type.extend = function(c) {
        var b = this,
        d = function() {
            return b.apply(this, arguments)
        };
        if (d.prototype = ae(b.prototype), ar(d.prototype, c), d.extend = an.Type.extend, c.name || b.prototype.name) {
            var e = c.name || b.prototype.name,
            a = an.defaults[b.prototype.name] ? ae(an.defaults[b.prototype.name]) : {};
            an.defaults[e] = ar(a, c.defaults),
            an.types[e] = d,
            an.prototype[e] = function(g, f) {
                var h = ak(an.defaults.global, an.defaults[e], f || {});
                return new d(g, h, this)
            }
        } else {
            ao("Name not provided for this chart, so it hasn't been registered")
        }
        return b
    },
    an.Element = function(a) {
        ar(this, a),
        this.initialize.apply(this, arguments),
        this.save()
    },
    ar(an.Element.prototype, {
        initialize: function() {},
        restore: function(a) {
            return a ? af(a,
            function(b) {
                this[b] = this._saved[b]
            },
            this) : ar(this, this._saved),
            this
        },
        save: function() {
            return this._saved = ae(this),
            delete this._saved._saved,
            this
        },
        update: function(a) {
            return af(a,
            function(c, b) {
                this._saved[b] = this[b],
                this[b] = c
            },
            this),
            this
        },
        transition: function(b, a) {
            return af(b,
            function(c, d) {
                this[d] = (c - this._saved[d]) * a + this._saved[d]
            },
            this),
            this
        },
        tooltipPosition: function() {
            return {
                x: this.x,
                y: this.y
            }
        },
        hasValue: function() {
            return ad(this.value)
        }
    }),
    an.Element.extend = aa,
    an.Point = an.Element.extend({
        display: !0,
        inRange: function(b, a) {
            var c = this.hitDetectionRadius + this.radius;
            return Math.pow(b - this.x, 2) + Math.pow(a - this.y, 2) < Math.pow(c, 2)
        },
        draw: function() {
            if (this.display) {
                var a = this.ctx;
                a.beginPath(),
                a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI),
                a.closePath(),
                a.strokeStyle = this.strokeColor,
                a.lineWidth = this.strokeWidth,
                a.fillStyle = this.fillColor,
                a.fill(),
                a.stroke()
            }
        }
    }),
    an.Arc = an.Element.extend({
        inRange: function(b, a) {
            var c = Y.getAngleFromPoint(this, {
                x: b,
                y: a
            }),
            f = c.angle >= this.startAngle && c.angle <= this.endAngle,
            d = c.distance >= this.innerRadius && c.distance <= this.outerRadius;
            return f && d
        },
        tooltipPosition: function() {
            var b = this.startAngle + (this.endAngle - this.startAngle) / 2,
            a = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {
                x: this.x + Math.cos(b) * a,
                y: this.y + Math.sin(b) * a
            }
        },
        draw: function(b) {
            var a = this.ctx;
            a.beginPath(),
            a.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle),
            a.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0),
            a.closePath(),
            a.strokeStyle = this.strokeColor,
            a.lineWidth = this.strokeWidth,
            a.fillStyle = this.fillColor,
            a.fill(),
            a.lineJoin = "bevel",
            this.showStroke && a.stroke()
        }
    }),
    an.Rectangle = an.Element.extend({
        draw: function() {
            var b = this.ctx,
            a = this.width / 2,
            d = this.x - a,
            c = this.x + a,
            g = this.base - (this.base - this.y),
            f = this.strokeWidth / 2;
            this.showStroke && (d += f, c -= f, g += f),
            b.beginPath(),
            b.fillStyle = this.fillColor,
            b.strokeStyle = this.strokeColor,
            b.lineWidth = this.strokeWidth,
            b.moveTo(d, this.base),
            b.lineTo(d, g),
            b.lineTo(c, g),
            b.lineTo(c, this.base),
            b.fill(),
            this.showStroke && b.stroke()
        },
        height: function() {
            return this.base - this.y
        },
        inRange: function(b, a) {
            return b >= this.x - this.width / 2 && b <= this.x + this.width / 2 && a >= this.y && a <= this.base
        }
    }),
    an.Tooltip = an.Element.extend({
        draw: function() {
            var d = this.chart.ctx;
            d.font = ac(this.fontSize, this.fontStyle, this.fontFamily),
            this.xAlign = "center",
            this.yAlign = "above";
            var c = this.caretPadding = 2,
            g = d.measureText(this.text).width + 2 * this.xPadding,
            f = this.fontSize + 2 * this.yPadding,
            k = f + this.caretHeight + c;
            this.x + g / 2 > this.chart.width ? this.xAlign = "left": this.x - g / 2 < 0 && (this.xAlign = "right"),
            this.y - k < 0 && (this.yAlign = "below");
            var h = this.x - g / 2,
            b = this.y - k;
            if (d.fillStyle = this.fillColor, this.custom) {
                this.custom(this)
            } else {
                switch (this.yAlign) {
                case "above":
                    d.beginPath(),
                    d.moveTo(this.x, this.y - c),
                    d.lineTo(this.x + this.caretHeight, this.y - (c + this.caretHeight)),
                    d.lineTo(this.x - this.caretHeight, this.y - (c + this.caretHeight)),
                    d.closePath(),
                    d.fill();
                    break;
                case "below":
                    b = this.y + c + this.caretHeight,
                    d.beginPath(),
                    d.moveTo(this.x, this.y + c),
                    d.lineTo(this.x + this.caretHeight, this.y + c + this.caretHeight),
                    d.lineTo(this.x - this.caretHeight, this.y + c + this.caretHeight),
                    d.closePath(),
                    d.fill()
                }
                switch (this.xAlign) {
                case "left":
                    h = this.x - g + (this.cornerRadius + this.caretHeight);
                    break;
                case "right":
                    h = this.x - (this.cornerRadius + this.caretHeight)
                }
                ab(d, h, b, g, f, this.cornerRadius),
                d.fill(),
                d.fillStyle = this.textColor,
                d.textAlign = "center",
                d.textBaseline = "middle",
                d.fillText(this.text, h + g / 2, b + f / 2)
            }
        }
    }),
    an.MultiTooltip = an.Element.extend({
        initialize: function() {
            this.font = ac(this.fontSize, this.fontStyle, this.fontFamily),
            this.titleFont = ac(this.titleFontSize, this.titleFontStyle, this.titleFontFamily),
            this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize,
            this.ctx.font = this.titleFont;
            var b = this.ctx.measureText(this.title).width,
            a = j(this.ctx, this.font, this.labels) + this.fontSize + 3,
            d = al([a, b]);
            this.width = d + 2 * this.xPadding;
            var c = this.height / 2;
            this.y - c < 0 ? this.y = c: this.y + c > this.chart.height && (this.y = this.chart.height - c),
            this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width: this.x += this.xOffset
        },
        getLineHeight: function(b) {
            var a = this.y - this.height / 2 + this.yPadding,
            c = b - 1;
            return 0 === b ? a + this.titleFontSize / 2 : a + (1.5 * this.fontSize * c + this.fontSize / 2) + 1.5 * this.titleFontSize
        },
        draw: function() {
            if (this.custom) {
                this.custom(this)
            } else {
                ab(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var a = this.ctx;
                a.fillStyle = this.fillColor,
                a.fill(),
                a.closePath(),
                a.textAlign = "left",
                a.textBaseline = "middle",
                a.fillStyle = this.titleTextColor,
                a.font = this.titleFont,
                a.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)),
                a.font = this.font,
                Y.each(this.labels,
                function(b, c) {
                    a.fillStyle = this.textColor,
                    a.fillText(b, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(c + 1)),
                    a.fillStyle = this.legendColorBackground,
                    a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize),
                    a.fillStyle = this.legendColors[c].fill,
                    a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                },
                this)
            }
        }
    }),
    an.Scale = an.Element.extend({
        initialize: function() {
            this.fit()
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var b = N(this.stepValue), a = 0; a <= this.steps; a++) {
                this.yLabels.push(D(this.templateString, {
                    value: (this.min + a * this.stepValue).toFixed(b)
                }))
            }
            this.yLabelWidth = this.display && this.showLabels ? j(this.ctx, this.font, this.yLabels) : 0
        },
        addXLabel: function(a) {
            this.xLabels.push(a),
            this.valuesCount++,
            this.fit()
        },
        removeXLabel: function() {
            this.xLabels.shift(),
            this.valuesCount--,
            this.fit()
        },
        fit: function() {
            this.startPoint = this.display ? this.fontSize: 0,
            this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height,
            this.startPoint += this.padding,
            this.endPoint -= this.padding;
            var b, a = this.endPoint - this.startPoint;
            for (this.calculateYRange(a), this.buildYLabels(), this.calculateXLabelRotation(); a > this.endPoint - this.startPoint;) {
                a = this.endPoint - this.startPoint,
                b = this.yLabelWidth,
                this.calculateYRange(a),
                this.buildYLabels(),
                b < this.yLabelWidth && this.calculateXLabelRotation()
            }
        },
        calculateXLabelRotation: function() {
            this.ctx.font = this.font;
            var d, c, g = this.ctx.measureText(this.xLabels[0]).width,
            f = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = f / 2 + 3, this.xScalePaddingLeft = g / 2 > this.yLabelWidth + 10 ? g / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                var k, h = j(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = h;
                for (var b = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > b && 0 === this.xLabelRotation || this.xLabelWidth > b && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) {
                    k = Math.cos(ag(this.xLabelRotation)),
                    d = k * g,
                    c = k * f,
                    d + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = d + this.fontSize / 2),
                    this.xScalePaddingRight = this.fontSize / 2,
                    this.xLabelRotation++,
                    this.xLabelWidth = k * h
                }
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(ag(this.xLabelRotation)) * h + 3)
            } else {
                this.xLabelWidth = 0,
                this.xScalePaddingRight = this.padding,
                this.xScalePaddingLeft = this.padding
            }
        },
        calculateYRange: ap,
        drawingArea: function() {
            return this.startPoint - this.endPoint
        },
        calculateY: function(b) {
            var a = this.drawingArea() / (this.min - this.max);
            return this.endPoint - a * (b - this.min)
        },
        calculateX: function(b) {
            var a = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
            d = a / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
            c = d * b + this.xScalePaddingLeft;
            return this.offsetGridLines && (c += d / 2),
            Math.round(c)
        },
        update: function(a) {
            Y.extend(this, a),
            this.fit()
        },
        draw: function() {
            var b = this.ctx,
            a = (this.endPoint - this.startPoint) / this.steps,
            c = Math.round(this.xScalePaddingLeft);
            if (this.display) {
                b.fillStyle = this.textColor,
                b.font = this.font;
                var d = this.showBeyondLine ? 5 : 0;
                af(this.yLabels,
                function(m, f) {
                    var g = this.endPoint - a * f,
                    e = Math.round(g),
                    k = this.showHorizontalLines;
                    b.textAlign = "right",
                    b.textBaseline = "middle",
                    this.showLabels && b.fillText(m, c - 10, g),
                    0 !== f || k || (k = !0),
                    k && b.beginPath(),
                    f > 0 ? (b.lineWidth = this.gridLineWidth, b.strokeStyle = this.gridLineColor) : (b.lineWidth = this.lineWidth, b.strokeStyle = this.lineColor),
                    e += Y.aliasPixel(b.lineWidth),
                    k && (b.moveTo(c, e), b.lineTo(this.width, e), b.stroke(), b.closePath()),
                    b.lineWidth = this.lineWidth,
                    b.strokeStyle = this.lineColor,
                    b.beginPath(),
                    b.moveTo(c - d, e),
                    b.lineTo(c, e),
                    b.stroke(),
                    b.closePath()
                },
                this),
                af(this.xLabels,
                function(g, m) {
                    var l = this.calculateX(m) + K(this.lineWidth),
                    o = this.calculateX(m - (this.offsetGridLines ? 0.5 : 0)) + K(this.lineWidth),
                    f = this.xLabelRotation > 0,
                    k = this.showVerticalLines;
                    0 !== m || k || (k = !0),
                    k && b.beginPath(),
                    m > 0 ? (b.lineWidth = this.gridLineWidth, b.strokeStyle = this.gridLineColor) : (b.lineWidth = this.lineWidth, b.strokeStyle = this.lineColor),
                    k && (b.moveTo(o, this.endPoint), b.lineTo(o, this.startPoint - 3), b.stroke(), b.closePath()),
                    b.lineWidth = this.lineWidth,
                    b.strokeStyle = this.lineColor,
                    b.beginPath(),
                    b.moveTo(o, this.endPoint),
                    b.lineTo(o, this.endPoint + d),
                    b.stroke(),
                    b.closePath(),
                    b.save(),
                    b.translate(l, f ? this.endPoint + 12 : this.endPoint + 8),
                    b.rotate( - 1 * ag(this.xLabelRotation)),
                    b.font = this.font,
                    b.textAlign = f ? "right": "center",
                    b.textBaseline = f ? "middle": "top",
                    b.fillText(g, 0, 0),
                    b.restore()
                },
                this)
            }
        }
    }),
    an.RadialScale = an.Element.extend({
        initialize: function() {
            this.size = Q([this.height, this.width]),
            this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
        },
        calculateCenterOffset: function(b) {
            var a = this.drawingArea / (this.max - this.min);
            return (b - this.min) * a
        },
        update: function() {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(),
            this.buildYLabels()
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var b = N(this.stepValue), a = 0; a <= this.steps; a++) {
                this.yLabels.push(D(this.templateString, {
                    value: (this.min + a * this.stepValue).toFixed(b)
                }))
            }
        },
        getCircumference: function() {
            return 2 * Math.PI / this.valuesCount
        },
        setScaleSize: function() {
            var L, v, z, M, m, k, C, w, p, b, B, F, A = Q([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
            y = this.width,
            x = 0;
            for (this.ctx.font = ac(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), v = 0; v < this.valuesCount; v++) {
                L = this.getPointPosition(v, A),
                z = this.ctx.measureText(D(this.templateString, {
                    value: this.labels[v]
                })).width + 5,
                0 === v || v === this.valuesCount / 2 ? (M = z / 2, L.x + M > y && (y = L.x + M, m = v), L.x - M < x && (x = L.x - M, C = v)) : v < this.valuesCount / 2 ? L.x + z > y && (y = L.x + z, m = v) : v > this.valuesCount / 2 && L.x - z < x && (x = L.x - z, C = v)
            }
            p = x,
            b = Math.ceil(y - this.width),
            k = this.getIndexAngle(m),
            w = this.getIndexAngle(C),
            B = b / Math.sin(k + Math.PI / 2),
            F = p / Math.sin(w + Math.PI / 2),
            B = ad(B) ? B: 0,
            F = ad(F) ? F: 0,
            this.drawingArea = A - (F + B) / 2,
            this.setCenterPoint(F, B)
        },
        setCenterPoint: function(b, a) {
            var d = this.width - a - this.drawingArea,
            c = b + this.drawingArea;
            this.xCenter = (c + d) / 2,
            this.yCenter = this.height / 2
        },
        getIndexAngle: function(b) {
            var a = 2 * Math.PI / this.valuesCount;
            return b * a - Math.PI / 2
        },
        getPointPosition: function(b, a) {
            var c = this.getIndexAngle(b);
            return {
                x: Math.cos(c) * a + this.xCenter,
                y: Math.sin(c) * a + this.yCenter
            }
        },
        draw: function() {
            if (this.display) {
                var n = this.ctx;
                if (af(this.yLabels,
                function(r, w) {
                    if (w > 0) {
                        var v, y = w * (this.drawingArea / this.steps),
                        x = this.yCenter - y;
                        if (this.lineWidth > 0) {
                            if (n.strokeStyle = this.lineColor, n.lineWidth = this.lineWidth, this.lineArc) {
                                n.beginPath(),
                                n.arc(this.xCenter, this.yCenter, y, 0, 2 * Math.PI),
                                n.closePath(),
                                n.stroke()
                            } else {
                                n.beginPath();
                                for (var l = 0; l < this.valuesCount; l++) {
                                    v = this.getPointPosition(l, this.calculateCenterOffset(this.min + w * this.stepValue)),
                                    0 === l ? n.moveTo(v.x, v.y) : n.lineTo(v.x, v.y)
                                }
                                n.closePath(),
                                n.stroke()
                            }
                        }
                        if (this.showLabels) {
                            if (n.font = ac(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                var u = n.measureText(r).width;
                                n.fillStyle = this.backdropColor,
                                n.fillRect(this.xCenter - u / 2 - this.backdropPaddingX, x - this.fontSize / 2 - this.backdropPaddingY, u + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                            }
                            n.textAlign = "center",
                            n.textBaseline = "middle",
                            n.fillStyle = this.fontColor,
                            n.fillText(r, this.xCenter, x)
                        }
                    }
                },
                this), !this.lineArc) {
                    n.lineWidth = this.angleLineWidth,
                    n.strokeStyle = this.angleLineColor;
                    for (var f = this.valuesCount - 1; f >= 0; f--) {
                        if (this.angleLineWidth > 0) {
                            var k = this.getPointPosition(f, this.calculateCenterOffset(this.max));
                            n.beginPath(),
                            n.moveTo(this.xCenter, this.yCenter),
                            n.lineTo(k.x, k.y),
                            n.stroke(),
                            n.closePath()
                        }
                        var p = this.getPointPosition(f, this.calculateCenterOffset(this.max) + 5);
                        n.font = ac(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily),
                        n.fillStyle = this.pointLabelFontColor;
                        var c = this.labels.length,
                        m = this.labels.length / 2,
                        g = m / 2,
                        d = g > f || f > c - g,
                        b = f === g || f === c - g;
                        0 === f ? n.textAlign = "center": f === m ? n.textAlign = "center": m > f ? n.textAlign = "left": n.textAlign = "right",
                        b ? n.textBaseline = "middle": d ? n.textBaseline = "bottom": n.textBaseline = "top",
                        n.fillText(this.labels[f], p.x, p.y)
                    }
                }
            }
        }
    }),
    Y.addEvent(window, "resize",
    function() {
        var a;
        return function() {
            clearTimeout(a),
            a = setTimeout(function() {
                af(an.instances,
                function(b) {
                    b.options.responsive && b.resize(b.render, !0)
                })
            },
            50)
        }
    } ()),
    am ? define(function() {
        return an
    }) : "object" == typeof module && module.exports && (module.exports = an),
    aj.Chart = an,
    X.fn.chart = function() {
        var a = [];
        return this.each(function() {
            a.push(new an(this.getContext("2d")))
        }),
        1 === a.length ? a[0] : a
    }
}).call(this, jQuery),
function(b) {
    var a = b && b.zui ? b.zui: this,
    d = a.Chart,
    c = d.helpers,
    f = {
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowBeyondLine: !0,
        scaleShowVerticalLines: !0,
        bezierCurve: !0,
        bezierCurveTension: 0.4,
        pointDot: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !0,
        datasetStrokeWidth: 2,
        datasetFill: !0,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    d.Type.extend({
        name: "Line",
        defaults: f,
        initialize: function(e) {
            this.PointClass = d.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx,
                inRange: function(g) {
                    return Math.pow(g - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                }
            }),
            this.datasets = [],
            this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents,
            function(h) {
                var g = "mouseout" !== h.type ? this.getPointsAtEvent(h) : [];
                this.eachPoints(function(j) {
                    j.restore(["fillColor", "strokeColor"])
                }),
                c.each(g,
                function(j) {
                    j.fillColor = j.highlightFill,
                    j.strokeColor = j.highlightStroke
                }),
                this.showTooltip(g)
            }),
            c.each(e.datasets,
            function(h) {
                if (b.zui && b.zui.Color && b.zui.Color.get) {
                    var k = b.zui.Color.get(h.color),
                    j = k.toCssStr();
                    h.fillColor || (h.fillColor = k.clone().fade(20).toCssStr()),
                    h.strokeColor || (h.strokeColor = j),
                    h.pointColor || (h.pointColor = j),
                    h.pointStrokeColor || (h.pointStrokeColor = "#fff"),
                    h.pointHighlightFill || (h.pointHighlightFill = "#fff"),
                    h.pointHighlightStroke || (h.pointHighlightStroke = j)
                }
                var g = {
                    label: h.label || null,
                    fillColor: h.fillColor,
                    strokeColor: h.strokeColor,
                    pointColor: h.pointColor,
                    pointStrokeColor: h.pointStrokeColor,
                    showTooltips: h.showTooltips !== !1,
                    points: []
                };
                this.datasets.push(g),
                c.each(h.data,
                function(l, m) {
                    g.points.push(new this.PointClass({
                        value: l,
                        label: e.labels[m],
                        datasetLabel: h.label,
                        strokeColor: h.pointStrokeColor,
                        fillColor: h.pointColor,
                        highlightFill: h.pointHighlightFill || h.pointColor,
                        highlightStroke: h.pointHighlightStroke || h.pointStrokeColor
                    }))
                },
                this),
                this.buildScale(e.labels),
                this.eachPoints(function(m, l) {
                    c.extend(m, {
                        x: this.scale.calculateX(l),
                        y: this.scale.endPoint
                    }),
                    m.save()
                },
                this)
            },
            this),
            this.render()
        },
        update: function() {
            this.scale.update(),
            c.each(this.activeElements,
            function(e) {
                e.restore(["fillColor", "strokeColor"])
            }),
            this.eachPoints(function(e) {
                e.save()
            }),
            this.render()
        },
        eachPoints: function(e) {
            c.each(this.datasets,
            function(g) {
                c.each(g.points, e, this)
            },
            this)
        },
        getPointsAtEvent: function(h) {
            var g = [],
            j = c.getRelativePosition(h);
            return c.each(this.datasets,
            function(e) {
                c.each(e.points,
                function(k) {
                    k.inRange(j.x, j.y) && g.push(k)
                })
            },
            this),
            g
        },
        buildScale: function(g) {
            var e = this,
            j = function() {
                var k = [];
                return e.eachPoints(function(l) {
                    k.push(l.value)
                }),
                k
            },
            h = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: g.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(l) {
                    var k = c.calculateScaleRange(j(), l, this.fontSize, this.beginAtZero, this.integersOnly);
                    c.extend(this, k)
                },
                xLabels: g,
                font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                showBeyondLine: this.options.scaleShowBeyondLine,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth: 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor: "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && c.extend(h, {
                calculateYRange: c.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }),
            this.scale = new d.Scale(h)
        },
        addData: function(g, e) {
            c.each(g,
            function(h, j) {
                this.datasets[j].points.push(new this.PointClass({
                    value: h,
                    label: e,
                    x: this.scale.calculateX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    strokeColor: this.datasets[j].pointStrokeColor,
                    fillColor: this.datasets[j].pointColor
                }))
            },
            this),
            this.scale.addXLabel(e),
            this.update()
        },
        removeData: function() {
            this.scale.removeXLabel(),
            c.each(this.datasets,
            function(e) {
                e.points.shift()
            },
            this),
            this.update()
        },
        reflow: function() {
            var e = c.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(e)
        },
        draw: function(j) {
            var h = j || 1;
            this.clear();
            var k = this.chart.ctx,
            m = function(e) {
                return null !== e.value
            },
            l = function(o, n, p) {
                return c.findNextWhere(n, m, p) || o
            },
            g = function(o, n, p) {
                return c.findPreviousWhere(n, m, p) || o
            };
            this.scale.draw(h),
            c.each(this.datasets,
            function(e) {
                var n = c.where(e.points, m);
                c.each(e.points,
                function(o, p) {
                    o.hasValue() && o.transition({
                        y: this.scale.calculateY(o.value),
                        x: this.scale.calculateX(p)
                    },
                    h)
                },
                this),
                this.options.bezierCurve && c.each(n,
                function(p, o) {
                    var q = o > 0 && o < n.length - 1 ? this.options.bezierCurveTension: 0;
                    p.controlPoints = c.splineCurve(g(p, n, o), p, l(p, n, o), q),
                    p.controlPoints.outer.y > this.scale.endPoint ? p.controlPoints.outer.y = this.scale.endPoint: p.controlPoints.outer.y < this.scale.startPoint && (p.controlPoints.outer.y = this.scale.startPoint),
                    p.controlPoints.inner.y > this.scale.endPoint ? p.controlPoints.inner.y = this.scale.endPoint: p.controlPoints.inner.y < this.scale.startPoint && (p.controlPoints.inner.y = this.scale.startPoint)
                },
                this),
                k.lineWidth = this.options.datasetStrokeWidth,
                k.strokeStyle = e.strokeColor,
                k.beginPath(),
                c.each(n,
                function(p, o) {
                    if (0 === o) {
                        k.moveTo(p.x, p.y)
                    } else {
                        if (this.options.bezierCurve) {
                            var q = g(p, n, o);
                            k.bezierCurveTo(q.controlPoints.outer.x, q.controlPoints.outer.y, p.controlPoints.inner.x, p.controlPoints.inner.y, p.x, p.y)
                        } else {
                            k.lineTo(p.x, p.y)
                        }
                    }
                },
                this),
                k.stroke(),
                this.options.datasetFill && n.length > 0 && (k.lineTo(n[n.length - 1].x, this.scale.endPoint), k.lineTo(n[0].x, this.scale.endPoint), k.fillStyle = e.fillColor, k.closePath(), k.fill()),
                c.each(n,
                function(o) {
                    o.draw()
                })
            },
            this)
        }
    }),
    b.fn.lineChart = function(e, g) {
        var h = [];
        return this.each(function() {
            var j = b(this);
            h.push(new d(this.getContext("2d")).Line(e, b.extend(j.data(), g)))
        }),
        1 === h.length ? h[0] : h
    }
}.call(this, jQuery),
function(b) {
    var a = b && b.zui ? b.zui: this,
    d = a.Chart,
    c = d.helpers,
    f = {
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 1,
        percentageInnerCutout: 50,
        scaleShowLabels: !1,
        scaleLabel: "<%=value%>",
        scaleLabelPlacement: "auto",
        animationSteps: 60,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    d.Type.extend({
        name: "Doughnut",
        defaults: f,
        initialize: function(e) {
            this.segments = [],
            this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2,
            this.SegmentArc = d.Arc.extend({
                ctx: this.chart.ctx,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }),
            this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents,
            function(h) {
                var g = "mouseout" !== h.type ? this.getSegmentsAtEvent(h) : [];
                c.each(this.segments,
                function(j) {
                    j.restore(["fillColor"])
                }),
                c.each(g,
                function(j) {
                    j.fillColor = j.highlightColor
                }),
                this.showTooltip(g)
            }),
            this.calculateTotal(e),
            c.each(e,
            function(h, g) {
                this.addData(h, g, !0)
            },
            this),
            this.render()
        },
        getSegmentsAtEvent: function(h) {
            var g = [],
            j = c.getRelativePosition(h);
            return c.each(this.segments,
            function(e) {
                e.inRange(j.x, j.y) && g.push(e)
            },
            this),
            g
        },
        addData: function(g, j, h) {
            if (b.zui && b.zui.Color && b.zui.Color.get) {
                var l = new b.zui.Color.get(g.color);
                g.color = l.toCssStr(),
                g.highlight || (g.highlight = l.lighten(5).toCssStr())
            }
            var k = j || this.segments.length;
            this.segments.splice(k, 0, new this.SegmentArc({
                id: "undefined" == typeof g.id ? k: g.id,
                value: g.value,
                outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                fillColor: g.color,
                highlightColor: g.highlight || g.color,
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                startAngle: 1.5 * Math.PI,
                circumference: this.options.animateRotate ? 0 : this.calculateCircumference(g.value),
                showLabel: g.showLabel !== !1,
                label: g.label
            })),
            h || (this.reflow(), this.update())
        },
        calculateCircumference: function(e) {
            return 2 * Math.PI * (Math.abs(e) / this.total)
        },
        calculateTotal: function(e) {
            this.total = 0,
            c.each(e,
            function(g) {
                this.total += Math.abs(g.value)
            },
            this)
        },
        update: function() {
            this.calculateTotal(this.segments),
            c.each(this.activeElements,
            function(e) {
                e.restore(["fillColor"])
            }),
            c.each(this.segments,
            function(e) {
                e.save()
            }),
            this.render()
        },
        removeData: function(g) {
            var e = c.isNumber(g) ? g: this.segments.length - 1;
            this.segments.splice(e, 1),
            this.reflow(),
            this.update()
        },
        reflow: function() {
            c.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }),
            this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2,
            c.each(this.segments,
            function(e) {
                e.update({
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                })
            },
            this)
        },
        drawLabel: function(E, I, B) {
            var A = this.options,
            L = (E.endAngle + E.startAngle) / 2,
            F = A.scaleLabelPlacement;
            "inside" !== F && "outside" !== F && this.chart.width - this.chart.height > 50 && E.circumference < Math.PI / 18 && (F = "outside");
            var D = Math.cos(L) * E.outerRadius,
            w = Math.sin(L) * E.outerRadius,
            K = c.template(A.scaleLabel, {
                value: "undefined" == typeof I ? E.value: Math.round(I * E.value),
                label: E.label
            }),
            s = this.chart.ctx;
            s.font = c.fontString(A.scaleFontSize, A.scaleFontStyle, A.scaleFontFamily),
            s.textBaseline = "middle",
            s.textAlign = "center";
            var J = (s.measureText(K).width, this.chart.width / 2),
            H = this.chart.height / 2;
            if ("outside" === F) {
                var z = D >= 0,
                G = D + J,
                q = w + H;
                s.textAlign = z ? "left": "right",
                s.measureText(K).width,
                D = z ? Math.max(J + E.outerRadius + 10, D + 30 + J) : Math.min(J - E.outerRadius - 10, D - 30 + J);
                var k = A.scaleFontSize,
                C = Math.round((0.8 * w + H) / k) + 1,
                j = (Math.floor(this.chart.width / k) + 1, z ? 1 : -1);
                if (B[C * j] && (C > 1 ? C--:C++), B[C * j]) {
                    return
                }
                w = (C - 1) * k + A.scaleFontSize / 2,
                B[C * j] = !0,
                s.beginPath(),
                s.moveTo(G, q),
                s.lineTo(D, w),
                D = z ? D + 5 : D - 5,
                s.lineTo(D, w),
                s.strokeStyle = b.zui && b.zui.Color ? new b.zui.Color(E.fillColor).fade(40).toCssStr() : E.fillColor,
                s.strokeWidth = A.scaleLineWidth,
                s.stroke(),
                s.fillStyle = E.fillColor
            } else {
                D = 0.7 * D + J,
                w = 0.7 * w + H,
                s.fillStyle = b.zui && b.zui.Color ? new b.zui.Color(E.fillColor).contrast().toCssStr() : "#fff"
            }
            s.fillText(K, D, w)
        },
        draw: function(h) {
            var g = h ? h: 1;
            this.clear();
            var j;
            if (c.each(this.segments,
            function(l, m) {
                l.transition({
                    circumference: this.calculateCircumference(l.value),
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                },
                g),
                l.endAngle = l.startAngle + l.circumference,
                l.draw(),
                0 === m && (l.startAngle = 1.5 * Math.PI),
                m < this.segments.length - 1 && (this.segments[m + 1].startAngle = l.endAngle)
            },
            this), this.options.scaleShowLabels) {
                var k = this.segments.slice().sort(function(l, e) {
                    return e.value - l.value
                }),
                j = {};
                c.each(k,
                function(e, l) {
                    e.showLabel && this.drawLabel(e, h, j)
                },
                this)
            }
        }
    }),
    d.types.Doughnut.extend({
        name: "Pie",
        defaults: c.merge(f, {
            percentageInnerCutout: 0
        })
    }),
    b.fn.pieChart = function(e, g) {
        var h = [];
        return this.each(function() {
            var j = b(this);
            h.push(new d(this.getContext("2d")).Pie(e, b.extend(j.data(), g)))
        }),
        1 === h.length ? h[0] : h
    },
    b.fn.doughnutChart = function(e, g) {
        var h = [];
        return this.each(function() {
            var j = b(this);
            h.push(new d(this.getContext("2d")).Doughnut(e, b.extend(j.data(), g)))
        }),
        1 === h.length ? h[0] : h
    }
}.call(this, jQuery),
function(b) {
    var a = b && b.zui ? b.zui: this,
    d = a.Chart,
    c = d.helpers,
    f = {
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        scaleShowBeyondLine: !0,
        barShowStroke: !0,
        barStrokeWidth: 1,
        scaleValuePlacement: "auto",
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    d.Type.extend({
        name: "Bar",
        defaults: f,
        initialize: function(e) {
            var g = this.options;
            this.ScaleClass = d.Scale.extend({
                offsetGridLines: !0,
                calculateBarX: function(k, j, m) {
                    var l = this.calculateBaseWidth(),
                    n = this.calculateX(m) - l / 2,
                    h = this.calculateBarWidth(k);
                    return n + h * j + j * g.barDatasetSpacing + h / 2
                },
                calculateBaseWidth: function() {
                    return this.calculateX(1) - this.calculateX(0) - 2 * g.barValueSpacing
                },
                calculateBarWidth: function(j) {
                    var h = this.calculateBaseWidth() - (j - 1) * g.barDatasetSpacing;
                    return h / j
                }
            }),
            this.datasets = [],
            this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents,
            function(j) {
                var h = "mouseout" !== j.type ? this.getBarsAtEvent(j) : [];
                this.eachBars(function(k) {
                    k.restore(["fillColor", "strokeColor"])
                }),
                c.each(h,
                function(k) {
                    k.fillColor = k.highlightFill,
                    k.strokeColor = k.highlightStroke
                }),
                this.showTooltip(h)
            }),
            this.BarClass = d.Rectangle.extend({
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx
            }),
            c.each(e.datasets,
            function(l, p) {
                if (b.zui && b.zui.Color && b.zui.Color.get) {
                    var m = b.zui.Color.get(l.color),
                    j = m.toCssStr();
                    l.fillColor || (l.fillColor = m.clone().fade(50).toCssStr()),
                    l.strokeColor || (l.strokeColor = j)
                }
                var k = {
                    label: l.label || null,
                    fillColor: l.fillColor,
                    strokeColor: l.strokeColor,
                    bars: []
                };
                this.datasets.push(k),
                c.each(l.data,
                function(h, n) {
                    k.bars.push(new this.BarClass({
                        value: h,
                        label: e.labels[n],
                        datasetLabel: l.label,
                        strokeColor: l.strokeColor,
                        fillColor: l.fillColor,
                        highlightFill: l.highlightFill || l.fillColor,
                        highlightStroke: l.highlightStroke || l.strokeColor
                    }))
                },
                this)
            },
            this),
            this.buildScale(e.labels),
            this.BarClass.prototype.base = this.scale.endPoint,
            this.eachBars(function(j, h, k) {
                c.extend(j, {
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    x: this.scale.calculateBarX(this.datasets.length, k, h),
                    y: this.scale.endPoint
                }),
                j.save()
            },
            this),
            this.render()
        },
        update: function() {
            this.scale.update(),
            c.each(this.activeElements,
            function(e) {
                e.restore(["fillColor", "strokeColor"])
            }),
            this.eachBars(function(e) {
                e.save()
            }),
            this.render()
        },
        eachBars: function(e) {
            c.each(this.datasets,
            function(g, h) {
                c.each(g.bars, e, this, h)
            },
            this)
        },
        getBarsAtEvent: function(j) {
            for (var h, k = [], m = c.getRelativePosition(j), l = function(e) {
                k.push(e.bars[h])
            },
            g = 0; g < this.datasets.length; g++) {
                for (h = 0; h < this.datasets[g].bars.length; h++) {
                    if (this.datasets[g].bars[h].inRange(m.x, m.y)) {
                        return c.each(this.datasets, l),
                        k
                    }
                }
            }
            return k
        },
        buildScale: function(h) {
            var g = this,
            j = function() {
                var e = [];
                return g.eachBars(function(l) {
                    e.push(l.value)
                }),
                e
            },
            k = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: h.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(l) {
                    var e = c.calculateScaleRange(j(), l, this.fontSize, this.beginAtZero, this.integersOnly);
                    c.extend(this, e)
                },
                xLabels: h,
                font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                showBeyondLine: this.options.scaleShowBeyondLine,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth: 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor: "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth: 0,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && c.extend(k, {
                calculateYRange: c.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }),
            this.scale = new this.ScaleClass(k)
        },
        addData: function(g, e) {
            c.each(g,
            function(h, j) {
                this.datasets[j].bars.push(new this.BarClass({
                    value: h,
                    label: e,
                    x: this.scale.calculateBarX(this.datasets.length, j, this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[j].strokeColor,
                    fillColor: this.datasets[j].fillColor
                }))
            },
            this),
            this.scale.addXLabel(e),
            this.update()
        },
        removeData: function() {
            this.scale.removeXLabel(),
            c.each(this.datasets,
            function(e) {
                e.bars.shift()
            },
            this),
            this.update()
        },
        reflow: function() {
            c.extend(this.BarClass.prototype, {
                y: this.scale.endPoint,
                base: this.scale.endPoint
            });
            var e = c.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(e)
        },
        drawLabel: function(h, g) {
            var j = this.options;
            g = g || j.scaleValuePlacement,
            g = g ? g.toLowerCase() : "auto",
            "auto" === g && (g = h.y < 15 ? "insdie": "outside");
            var l = "insdie" === g ? h.y + 10 : h.y - 10,
            k = this.chart.ctx;
            k.font = c.fontString(j.scaleFontSize, j.scaleFontStyle, j.scaleFontFamily),
            k.textBaseline = "middle",
            k.textAlign = "center",
            k.fillStyle = j.scaleFontColor,
            k.fillText(h.value, h.x, l)
        },
        draw: function(h) {
            var g = h || 1;
            this.clear();
            this.chart.ctx;
            this.scale.draw(g);
            var j = this.options.scaleShowLabels && this.options.scaleValuePlacement;
            c.each(this.datasets,
            function(e, k) {
                c.each(e.bars,
                function(l, m) {
                    l.hasValue() && (l.base = this.scale.endPoint, l.transition({
                        x: this.scale.calculateBarX(this.datasets.length, k, m),
                        y: this.scale.calculateY(l.value),
                        width: this.scale.calculateBarWidth(this.datasets.length)
                    },
                    g).draw()),
                    j && this.drawLabel(l)
                },
                this)
            },
            this)
        }
    }),
    b.fn.barChart = function(e, g) {
        var h = [];
        return this.each(function() {
            var j = b(this);
            h.push(new d(this.getContext("2d")).Bar(e, b.extend(j.data(), g)))
        }),
        1 === h.length ? h[0] : h
    }
}.call(this, jQuery);