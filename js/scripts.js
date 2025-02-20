var e;
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (T, e) {
    "use strict";
    var t = [], S = T.document, n = Object.getPrototypeOf, a = t.slice, g = t.concat, l = t.push, o = t.indexOf, i = {},
        r = i.toString, v = i.hasOwnProperty, s = v.toString, d = s.call(Object), y = {}, m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }, w = function (e) {
            return null != e && e === e.window
        }, c = {type: !0, src: !0, nonce: !0, noModule: !0};

    function b(e, t, i) {
        var n, o, r = (i = i || S).createElement("script");
        if (r.text = e, t) for (n in c) (o = t[n] || t.getAttribute && t.getAttribute(n)) && r.setAttribute(n, o);
        i.head.appendChild(r).parentNode.removeChild(r)
    }

    function k(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[r.call(e)] || "object" : typeof e
    }

    var u = "3.4.1", C = function (e, t) {
        return new C.fn.init(e, t)
    }, p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function f(e) {
        var t = !!e && "length" in e && e.length, i = k(e);
        return !m(e) && !w(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    C.fn = C.prototype = {
        jquery: u, constructor: C, length: 0, toArray: function () {
            return a.call(this)
        }, get: function (e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return C.each(this, e)
        }, map: function (i) {
            return this.pushStack(C.map(this, function (e, t) {
                return i.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(a.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: l, sort: t.sort, splice: t.splice
    }, C.extend = C.fn.extend = function () {
        var e, t, i, n, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, d = !1;
        for ("boolean" == typeof s && (d = s, s = arguments[a] || {}, a++), "object" == typeof s || m(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) n = e[t], "__proto__" !== t && s !== n && (d && n && (C.isPlainObject(n) || (o = Array.isArray(n))) ? (i = s[t], r = o && !Array.isArray(i) ? [] : o || C.isPlainObject(i) ? i : {}, o = !1, s[t] = C.extend(d, r, n)) : void 0 !== n && (s[t] = n));
        return s
    }, C.extend({
        expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, i;
            return !(!e || "[object Object]" !== r.call(e) || (t = n(e)) && ("function" != typeof (i = v.call(t, "constructor") && t.constructor) || s.call(i) !== d))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e, t) {
            b(e, {nonce: t && t.nonce})
        }, each: function (e, t) {
            var i, n = 0;
            if (f(e)) for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++) ; else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(p, "")
        }, makeArray: function (e, t) {
            var i = t || [];
            return null != e && (f(Object(e)) ? C.merge(i, "string" == typeof e ? [e] : e) : l.call(i, e)), i
        }, inArray: function (e, t, i) {
            return null == t ? -1 : o.call(t, e, i)
        }, merge: function (e, t) {
            for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
            return e.length = o, e
        }, grep: function (e, t, i) {
            for (var n = [], o = 0, r = e.length, s = !i; o < r; o++) !t(e[o], o) !== s && n.push(e[o]);
            return n
        }, map: function (e, t, i) {
            var n, o, r = 0, s = [];
            if (f(e)) for (n = e.length; r < n; r++) null != (o = t(e[r], r, i)) && s.push(o); else for (r in e) null != (o = t(e[r], r, i)) && s.push(o);
            return g.apply([], s)
        }, guid: 1, support: y
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function (i) {
        var e, f, b, r, o, h, u, g, k, l, d, x, T, s, S, v, a, c, y, C = "sizzle" + 1 * new Date, m = i.document, $ = 0,
            n = 0, p = le(), w = le(), A = le(), j = le(), E = function (e, t) {
                return e === t && (d = !0), 0
            }, D = {}.hasOwnProperty, t = [], N = t.pop, L = t.push, H = t.push, _ = t.slice, q = function (e, t) {
                for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + P + "*(" + M + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]",
            z = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            R = new RegExp(P + "+", "g"), W = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            F = new RegExp("^" + P + "*," + P + "*"), B = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            U = new RegExp(P + "|>"), X = new RegExp(z), Y = new RegExp("^" + M + "$"), V = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            }, G = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), ie = function (e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, re = function () {
                x()
            }, se = be(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {dir: "parentNode", next: "legend"});
        try {
            H.apply(t = _.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, _.call(t))
                } : function (e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];) ;
                    e.length = i - 1
                }
            }
        }

        function ae(e, t, i, n) {
            var o, r, s, a, l, d, c, u = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return i;
            if (!n && ((t ? t.ownerDocument || t : m) !== T && x(t), t = t || T, S)) {
                if (11 !== p && (l = Z.exec(e))) if (o = l[1]) {
                    if (9 === p) {
                        if (!(s = t.getElementById(o))) return i;
                        if (s.id === o) return i.push(s), i
                    } else if (u && (s = u.getElementById(o)) && y(t, s) && s.id === o) return i.push(s), i
                } else {
                    if (l[2]) return H.apply(i, t.getElementsByTagName(e)), i;
                    if ((o = l[3]) && f.getElementsByClassName && t.getElementsByClassName) return H.apply(i, t.getElementsByClassName(o)), i
                }
                if (f.qsa && !j[e + " "] && (!v || !v.test(e)) && (1 !== p || "object" !== t.nodeName.toLowerCase())) {
                    if (c = e, u = t, 1 === p && U.test(e)) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ne, oe) : t.setAttribute("id", a = C), r = (d = h(e)).length; r--;) d[r] = "#" + a + " " + we(d[r]);
                        c = d.join(","), u = ee.test(e) && ye(t.parentNode) || t
                    }
                    try {
                        return H.apply(i, u.querySelectorAll(c)), i
                    } catch (t) {
                        j(e, !0)
                    } finally {
                        a === C && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(W, "$1"), t, i, n)
        }

        function le() {
            var n = [];
            return function e(t, i) {
                return n.push(t + " ") > b.cacheLength && delete e[n.shift()], e[t + " "] = i
            }
        }

        function de(e) {
            return e[C] = !0, e
        }

        function ce(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            for (var i = e.split("|"), n = i.length; n--;) b.attrHandle[i[n]] = t
        }

        function pe(e, t) {
            var i = t && e, n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i) for (; i = i.nextSibling;) if (i === t) return -1;
            return e ? 1 : -1
        }

        function fe(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(i) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === i
            }
        }

        function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(s) {
            return de(function (r) {
                return r = +r, de(function (e, t) {
                    for (var i, n = s([], e.length, r), o = n.length; o--;) e[i = n[o]] && (e[i] = !(t[i] = e[i]))
                })
            })
        }

        function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        for (e in f = ae.support = {}, o = ae.isXML = function (e) {
            var t = e.namespaceURI, i = (e.ownerDocument || e).documentElement;
            return !G.test(t || i && i.nodeName || "HTML")
        }, x = ae.setDocument = function (e) {
            var t, i, n = e ? e.ownerDocument || e : m;
            return n !== T && 9 === n.nodeType && n.documentElement && (s = (T = n).documentElement, S = !o(T), m !== T && (i = T.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), f.attributes = ce(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), f.getElementsByTagName = ce(function (e) {
                return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
            }), f.getElementsByClassName = J.test(T.getElementsByClassName), f.getById = ce(function (e) {
                return s.appendChild(e).id = C, !T.getElementsByName || !T.getElementsByName(C).length
            }), f.getById ? (b.filter.ID = function (e) {
                var t = e.replace(te, ie);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && S) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }) : (b.filter.ID = function (e) {
                var i = e.replace(te, ie);
                return function (e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === i
                }
            }, b.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && S) {
                    var i, n, o, r = t.getElementById(e);
                    if (r) {
                        if ((i = r.getAttributeNode("id")) && i.value === e) return [r];
                        for (o = t.getElementsByName(e), n = 0; r = o[n++];) if ((i = r.getAttributeNode("id")) && i.value === e) return [r]
                    }
                    return []
                }
            }), b.find.TAG = f.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var i, n = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" !== e) return r;
                for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                return n
            }, b.find.CLASS = f.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && S) return t.getElementsByClassName(e)
            }, a = [], v = [], (f.qsa = J.test(T.querySelectorAll)) && (ce(function (e) {
                s.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + P + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + C + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || v.push(".#.+[+~]")
            }), ce(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = T.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (f.matchesSelector = J.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ce(function (e) {
                f.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), a.push("!=", z)
            }), v = v.length && new RegExp(v.join("|")), a = a.length && new RegExp(a.join("|")), t = J.test(s.compareDocumentPosition), y = t || J.test(s.contains) ? function (e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, E = t ? function (e, t) {
                if (e === t) return d = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === i ? e === T || e.ownerDocument === m && y(m, e) ? -1 : t === T || t.ownerDocument === m && y(m, t) ? 1 : l ? q(l, e) - q(l, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t) return d = !0, 0;
                var i, n = 0, o = e.parentNode, r = t.parentNode, s = [e], a = [t];
                if (!o || !r) return e === T ? -1 : t === T ? 1 : o ? -1 : r ? 1 : l ? q(l, e) - q(l, t) : 0;
                if (o === r) return pe(e, t);
                for (i = e; i = i.parentNode;) s.unshift(i);
                for (i = t; i = i.parentNode;) a.unshift(i);
                for (; s[n] === a[n];) n++;
                return n ? pe(s[n], a[n]) : s[n] === m ? -1 : a[n] === m ? 1 : 0
            }), T
        }, ae.matches = function (e, t) {
            return ae(e, null, null, t)
        }, ae.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== T && x(e), f.matchesSelector && S && !j[t + " "] && (!a || !a.test(t)) && (!v || !v.test(t))) try {
                var i = c.call(e, t);
                if (i || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {
                j(t, !0)
            }
            return 0 < ae(t, T, null, [e]).length
        }, ae.contains = function (e, t) {
            return (e.ownerDocument || e) !== T && x(e), y(e, t)
        }, ae.attr = function (e, t) {
            (e.ownerDocument || e) !== T && x(e);
            var i = b.attrHandle[t.toLowerCase()],
                n = i && D.call(b.attrHandle, t.toLowerCase()) ? i(e, t, !S) : void 0;
            return void 0 !== n ? n : f.attributes || !S ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, ae.escape = function (e) {
            return (e + "").replace(ne, oe)
        }, ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ae.uniqueSort = function (e) {
            var t, i = [], n = 0, o = 0;
            if (d = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(E), d) {
                for (; t = e[o++];) t === e[o] && (n = i.push(o));
                for (; n--;) e.splice(i[n], 1)
            }
            return l = null, e
        }, r = ae.getText = function (e) {
            var t, i = "", n = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += r(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[n++];) i += r(t);
            return i
        }, (b = ae.selectors = {
            cacheLength: 50,
            createPseudo: de,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(te, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, i = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && X.test(i) && (t = h(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ie).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = p[e + " "];
                    return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && p(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (i, n, o) {
                    return function (e) {
                        var t = ae.attr(e, i);
                        return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === o : "!=" === n ? t !== o : "^=" === n ? o && 0 === t.indexOf(o) : "*=" === n ? o && -1 < t.indexOf(o) : "$=" === n ? o && t.slice(-o.length) === o : "~=" === n ? -1 < (" " + t.replace(R, " ") + " ").indexOf(o) : "|=" === n && (t === o || t.slice(0, o.length + 1) === o + "-"))
                    }
                }, CHILD: function (h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), w = "of-type" === e;
                    return 1 === g && 0 === v ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, i) {
                        var n, o, r, s, a, l, d = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode,
                            u = w && e.nodeName.toLowerCase(), p = !i && !w, f = !1;
                        if (c) {
                            if (y) {
                                for (; d;) {
                                    for (s = e; s = s[d];) if (w ? s.nodeName.toLowerCase() === u : 1 === s.nodeType) return !1;
                                    l = d = "only" === h && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [m ? c.firstChild : c.lastChild], m && p) {
                                for (f = (a = (n = (o = (r = (s = c)[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === $ && n[1]) && n[2], s = a && c.childNodes[a]; s = ++a && s && s[d] || (f = a = 0) || l.pop();) if (1 === s.nodeType && ++f && s === e) {
                                    o[h] = [$, a, f];
                                    break
                                }
                            } else if (p && (f = a = (n = (o = (r = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === $ && n[1]), !1 === f) for (; (s = ++a && s && s[d] || (f = a = 0) || l.pop()) && ((w ? s.nodeName.toLowerCase() !== u : 1 !== s.nodeType) || !++f || (p && ((o = (r = s[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] = [$, f]), s !== e));) ;
                            return (f -= v) === g || f % g == 0 && 0 <= f / g
                        }
                    }
                }, PSEUDO: function (e, r) {
                    var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    return s[C] ? s(r) : 1 < s.length ? (t = [e, e, "", r], b.setFilters.hasOwnProperty(e.toLowerCase()) ? de(function (e, t) {
                        for (var i, n = s(e, r), o = n.length; o--;) e[i = q(e, n[o])] = !(t[i] = n[o])
                    }) : function (e) {
                        return s(e, 0, t)
                    }) : s
                }
            },
            pseudos: {
                not: de(function (e) {
                    var n = [], o = [], a = u(e.replace(W, "$1"));
                    return a[C] ? de(function (e, t, i, n) {
                        for (var o, r = a(e, null, n, []), s = e.length; s--;) (o = r[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, t, i) {
                        return n[0] = e, a(n, null, i, o), n[0] = null, !o.pop()
                    }
                }), has: de(function (t) {
                    return function (e) {
                        return 0 < ae(t, e).length
                    }
                }), contains: de(function (t) {
                    return t = t.replace(te, ie), function (e) {
                        return -1 < (e.textContent || r(e)).indexOf(t)
                    }
                }), lang: de(function (i) {
                    return Y.test(i || "") || ae.error("unsupported lang: " + i), i = i.replace(te, ie).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = i.location && i.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === s
                }, focus: function (e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !b.pseudos.empty(e)
                }, header: function (e) {
                    return K.test(e.nodeName)
                }, input: function (e) {
                    return Q.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: ve(function () {
                    return [0]
                }), last: ve(function (e, t) {
                    return [t - 1]
                }), eq: ve(function (e, t, i) {
                    return [i < 0 ? i + t : i]
                }), even: ve(function (e, t) {
                    for (var i = 0; i < t; i += 2) e.push(i);
                    return e
                }), odd: ve(function (e, t) {
                    for (var i = 1; i < t; i += 2) e.push(i);
                    return e
                }), lt: ve(function (e, t, i) {
                    for (var n = i < 0 ? i + t : t < i ? t : i; 0 <= --n;) e.push(n);
                    return e
                }), gt: ve(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = fe(e);
        for (e in {submit: !0, reset: !0}) b.pseudos[e] = he(e);

        function me() {
        }

        function we(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function be(a, e, t) {
            var l = e.dir, d = e.next, c = d || l, u = t && "parentNode" === c, p = n++;
            return e.first ? function (e, t, i) {
                for (; e = e[l];) if (1 === e.nodeType || u) return a(e, t, i);
                return !1
            } : function (e, t, i) {
                var n, o, r, s = [$, p];
                if (i) {
                    for (; e = e[l];) if ((1 === e.nodeType || u) && a(e, t, i)) return !0
                } else for (; e = e[l];) if (1 === e.nodeType || u) if (o = (r = e[C] || (e[C] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), d && d === e.nodeName.toLowerCase()) e = e[l] || e; else {
                    if ((n = o[c]) && n[0] === $ && n[1] === p) return s[2] = n[2];
                    if ((o[c] = s)[2] = a(e, t, i)) return !0
                }
                return !1
            }
        }

        function ke(o) {
            return 1 < o.length ? function (e, t, i) {
                for (var n = o.length; n--;) if (!o[n](e, t, i)) return !1;
                return !0
            } : o[0]
        }

        function xe(e, t, i, n, o) {
            for (var r, s = [], a = 0, l = e.length, d = null != t; a < l; a++) (r = e[a]) && (i && !i(r, n, o) || (s.push(r), d && t.push(a)));
            return s
        }

        function Te(f, h, g, v, y, e) {
            return v && !v[C] && (v = Te(v)), y && !y[C] && (y = Te(y, e)), de(function (e, t, i, n) {
                var o, r, s, a = [], l = [], d = t.length, c = e || function (e, t, i) {
                        for (var n = 0, o = t.length; n < o; n++) ae(e, t[n], i);
                        return i
                    }(h || "*", i.nodeType ? [i] : i, []), u = !f || !e && h ? c : xe(c, a, f, i, n),
                    p = g ? y || (e ? f : d || v) ? [] : t : u;
                if (g && g(u, p, i, n), v) for (o = xe(p, l), v(o, [], i, n), r = o.length; r--;) (s = o[r]) && (p[l[r]] = !(u[l[r]] = s));
                if (e) {
                    if (y || f) {
                        if (y) {
                            for (o = [], r = p.length; r--;) (s = p[r]) && o.push(u[r] = s);
                            y(null, p = [], o, n)
                        }
                        for (r = p.length; r--;) (s = p[r]) && -1 < (o = y ? q(e, s) : a[r]) && (e[o] = !(t[o] = s))
                    }
                } else p = xe(p === t ? p.splice(d, p.length) : p), y ? y(null, t, p, n) : H.apply(t, p)
            })
        }

        function Se(e) {
            for (var o, t, i, n = e.length, r = b.relative[e[0].type], s = r || b.relative[" "], a = r ? 1 : 0, l = be(function (e) {
                return e === o
            }, s, !0), d = be(function (e) {
                return -1 < q(o, e)
            }, s, !0), c = [function (e, t, i) {
                var n = !r && (i || t !== k) || ((o = t).nodeType ? l(e, t, i) : d(e, t, i));
                return o = null, n
            }]; a < n; a++) if (t = b.relative[e[a].type]) c = [be(ke(c), t)]; else {
                if ((t = b.filter[e[a].type].apply(null, e[a].matches))[C]) {
                    for (i = ++a; i < n && !b.relative[e[i].type]; i++) ;
                    return Te(1 < a && ke(c), 1 < a && we(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(W, "$1"), t, a < i && Se(e.slice(a, i)), i < n && Se(e = e.slice(i)), i < n && we(e))
                }
                c.push(t)
            }
            return ke(c)
        }

        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = ae.tokenize = function (e, t) {
            var i, n, o, r, s, a, l, d = w[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (s = e, a = [], l = b.preFilter; s;) {
                for (r in i && !(n = F.exec(s)) || (n && (s = s.slice(n[0].length) || s), a.push(o = [])), i = !1, (n = B.exec(s)) && (i = n.shift(), o.push({
                    value: i,
                    type: n[0].replace(W, " ")
                }), s = s.slice(i.length)), b.filter) !(n = V[r].exec(s)) || l[r] && !(n = l[r](n)) || (i = n.shift(), o.push({
                    value: i,
                    type: r,
                    matches: n
                }), s = s.slice(i.length));
                if (!i) break
            }
            return t ? s.length : s ? ae.error(e) : w(e, a).slice(0)
        }, u = ae.compile = function (e, t) {
            var i, v, y, m, w, n, o = [], r = [], s = A[e + " "];
            if (!s) {
                for (t || (t = h(e)), i = t.length; i--;) (s = Se(t[i]))[C] ? o.push(s) : r.push(s);
                (s = A(e, (v = r, m = 0 < (y = o).length, w = 0 < v.length, n = function (e, t, i, n, o) {
                    var r, s, a, l = 0, d = "0", c = e && [], u = [], p = k, f = e || w && b.find.TAG("*", o),
                        h = $ += null == p ? 1 : Math.random() || .1, g = f.length;
                    for (o && (k = t === T || t || o); d !== g && null != (r = f[d]); d++) {
                        if (w && r) {
                            for (s = 0, t || r.ownerDocument === T || (x(r), i = !S); a = v[s++];) if (a(r, t || T, i)) {
                                n.push(r);
                                break
                            }
                            o && ($ = h)
                        }
                        m && ((r = !a && r) && l--, e && c.push(r))
                    }
                    if (l += d, m && d !== l) {
                        for (s = 0; a = y[s++];) a(c, u, t, i);
                        if (e) {
                            if (0 < l) for (; d--;) c[d] || u[d] || (u[d] = N.call(n));
                            u = xe(u)
                        }
                        H.apply(n, u), o && !e && 0 < u.length && 1 < l + y.length && ae.uniqueSort(n)
                    }
                    return o && ($ = h, k = p), c
                }, m ? de(n) : n))).selector = e
            }
            return s
        }, g = ae.select = function (e, t, i, n) {
            var o, r, s, a, l, d = "function" == typeof e && e, c = !n && h(e = d.selector || e);
            if (i = i || [], 1 === c.length) {
                if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && S && b.relative[r[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(te, ie), t) || [])[0])) return i;
                    d && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = V.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !b.relative[a = s.type]);) if ((l = b.find[a]) && (n = l(s.matches[0].replace(te, ie), ee.test(r[0].type) && ye(t.parentNode) || t))) {
                    if (r.splice(o, 1), !(e = n.length && we(r))) return H.apply(i, n), i;
                    break
                }
            }
            return (d || u(e, c))(n, t, !S, i, !t || ee.test(e) && ye(t.parentNode) || t), i
        }, f.sortStable = C.split("").sort(E).join("") === C, f.detectDuplicates = !!d, x(), f.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function (e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), f.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function (e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || ue(O, function (e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), ae
    }(T);
    C.find = h, C.expr = h.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = h.uniqueSort, C.text = h.getText, C.isXMLDoc = h.isXML, C.contains = h.contains, C.escapeSelector = h.escape;
    var x = function (e, t, i) {
        for (var n = [], o = void 0 !== i; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (o && C(e).is(i)) break;
            n.push(e)
        }
        return n
    }, $ = function (e, t) {
        for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
        return i
    }, A = C.expr.match.needsContext;

    function j(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, i, n) {
        return m(i) ? C.grep(e, function (e, t) {
            return !!i.call(e, t, e) !== n
        }) : i.nodeType ? C.grep(e, function (e) {
            return e === i !== n
        }) : "string" != typeof i ? C.grep(e, function (e) {
            return -1 < o.call(i, e) !== n
        }) : C.filter(i, e, n)
    }

    C.filter = function (e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? C.find.matchesSelector(n, e) ? [n] : [] : C.find.matches(e, C.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, C.fn.extend({
        find: function (e) {
            var t, i, n = this.length, o = this;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
                for (t = 0; t < n; t++) if (C.contains(o[t], this)) return !0
            }));
            for (i = this.pushStack([]), t = 0; t < n; t++) C.find(e, o[t], i);
            return 1 < n ? C.uniqueSort(i) : i
        }, filter: function (e) {
            return this.pushStack(D(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(D(this, e || [], !0))
        }, is: function (e) {
            return !!D(this, "string" == typeof e && A.test(e) ? C(e) : e || [], !1).length
        }
    });
    var N, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function (e, t, i) {
        var n, o;
        if (!e) return this;
        if (i = i || N, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== i.ready ? i.ready(e) : e(C) : C.makeArray(e, this);
        if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
        if (n[1]) {
            if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), E.test(n[1]) && C.isPlainObject(t)) for (n in t) m(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this
        }
        return (o = S.getElementById(n[2])) && (this[0] = o, this.length = 1), this
    }).prototype = C.fn, N = C(S);
    var H = /^(?:parents|prev(?:Until|All))/, _ = {children: !0, contents: !0, next: !0, prev: !0};

    function q(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    C.fn.extend({
        has: function (e) {
            var t = C(e, this), i = t.length;
            return this.filter(function () {
                for (var e = 0; e < i; e++) if (C.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var i, n = 0, o = this.length, r = [], s = "string" != typeof e && C(e);
            if (!A.test(e)) for (; n < o; n++) for (i = this[n]; i && i !== t; i = i.parentNode) if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && C.find.matchesSelector(i, e))) {
                r.push(i);
                break
            }
            return this.pushStack(1 < r.length ? C.uniqueSort(r) : r)
        }, index: function (e) {
            return e ? "string" == typeof e ? o.call(C(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), C.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return x(e, "parentNode")
        }, parentsUntil: function (e, t, i) {
            return x(e, "parentNode", i)
        }, next: function (e) {
            return q(e, "nextSibling")
        }, prev: function (e) {
            return q(e, "previousSibling")
        }, nextAll: function (e) {
            return x(e, "nextSibling")
        }, prevAll: function (e) {
            return x(e, "previousSibling")
        }, nextUntil: function (e, t, i) {
            return x(e, "nextSibling", i)
        }, prevUntil: function (e, t, i) {
            return x(e, "previousSibling", i)
        }, siblings: function (e) {
            return $((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return $(e.firstChild)
        }, contents: function (e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (j(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
        }
    }, function (n, o) {
        C.fn[n] = function (e, t) {
            var i = C.map(this, o, e);
            return "Until" !== n.slice(-5) && (t = e), t && "string" == typeof t && (i = C.filter(t, i)), 1 < this.length && (_[n] || C.uniqueSort(i), H.test(n) && i.reverse()), this.pushStack(i)
        }
    });
    var O = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, i, n) {
        var o;
        try {
            e && m(o = e.promise) ? o.call(e).done(t).fail(i) : e && m(o = e.then) ? o.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }

    C.Callbacks = function (n) {
        var e, i;
        n = "string" == typeof n ? (e = n, i = {}, C.each(e.match(O) || [], function (e, t) {
            i[t] = !0
        }), i) : C.extend({}, n);
        var o, t, r, s, a = [], l = [], d = -1, c = function () {
            for (s = s || n.once, r = o = !0; l.length; d = -1) for (t = l.shift(); ++d < a.length;) !1 === a[d].apply(t[0], t[1]) && n.stopOnFalse && (d = a.length, t = !1);
            n.memory || (t = !1), o = !1, s && (a = t ? [] : "")
        }, u = {
            add: function () {
                return a && (t && !o && (d = a.length - 1, l.push(t)), function i(e) {
                    C.each(e, function (e, t) {
                        m(t) ? n.unique && u.has(t) || a.push(t) : t && t.length && "string" !== k(t) && i(t)
                    })
                }(arguments), t && !o && c()), this
            }, remove: function () {
                return C.each(arguments, function (e, t) {
                    for (var i; -1 < (i = C.inArray(t, a, i));) a.splice(i, 1), i <= d && d--
                }), this
            }, has: function (e) {
                return e ? -1 < C.inArray(e, a) : 0 < a.length
            }, empty: function () {
                return a && (a = []), this
            }, disable: function () {
                return s = l = [], a = t = "", this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return s = l = [], t || o || (a = t = ""), this
            }, locked: function () {
                return !!s
            }, fireWith: function (e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || c()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return u
    }, C.extend({
        Deferred: function (e) {
            var r = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]],
                o = "pending", s = {
                    state: function () {
                        return o
                    }, always: function () {
                        return a.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return s.then(null, e)
                    }, pipe: function () {
                        var o = arguments;
                        return C.Deferred(function (n) {
                            C.each(r, function (e, t) {
                                var i = m(o[t[4]]) && o[t[4]];
                                a[t[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    }, then: function (t, i, n) {
                        var l = 0;

                        function d(o, r, s, a) {
                            return function () {
                                var i = this, n = arguments, e = function () {
                                    var e, t;
                                    if (!(o < l)) {
                                        if ((e = s.apply(i, n)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? a ? t.call(e, d(l, r, P, a), d(l, r, M, a)) : (l++, t.call(e, d(l, r, P, a), d(l, r, M, a), d(l, r, P, r.notifyWith))) : (s !== P && (i = void 0, n = [e]), (a || r.resolveWith)(i, n))
                                    }
                                }, t = a ? e : function () {
                                    try {
                                        e()
                                    } catch (e) {
                                        C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (s !== M && (i = void 0, n = [e]), r.rejectWith(i, n))
                                    }
                                };
                                o ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), T.setTimeout(t))
                            }
                        }

                        return C.Deferred(function (e) {
                            r[0][3].add(d(0, e, m(n) ? n : P, e.notifyWith)), r[1][3].add(d(0, e, m(t) ? t : P)), r[2][3].add(d(0, e, m(i) ? i : M))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? C.extend(e, s) : s
                    }
                }, a = {};
            return C.each(r, function (e, t) {
                var i = t[2], n = t[5];
                s[t[1]] = i.add, n && i.add(function () {
                    o = n
                }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), i.add(t[3].fire), a[t[0]] = function () {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = i.fireWith
            }), s.promise(a), e && e.call(a, a), a
        }, when: function (e) {
            var i = arguments.length, t = i, n = Array(t), o = a.call(arguments), r = C.Deferred(), s = function (t) {
                return function (e) {
                    n[t] = this, o[t] = 1 < arguments.length ? a.call(arguments) : e, --i || r.resolveWith(n, o)
                }
            };
            if (i <= 1 && (I(e, r.done(s(t)).resolve, r.reject, !i), "pending" === r.state() || m(o[t] && o[t].then))) return r.then();
            for (; t--;) I(o[t], s(t), r.reject);
            return r.promise()
        }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function (e, t) {
        T.console && T.console.warn && e && z.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, C.readyException = function (e) {
        T.setTimeout(function () {
            throw e
        })
    };
    var R = C.Deferred();

    function W() {
        S.removeEventListener("DOMContentLoaded", W), T.removeEventListener("load", W), C.ready()
    }

    C.fn.ready = function (e) {
        return R.then(e).catch(function (e) {
            C.readyException(e)
        }), this
    }, C.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || R.resolveWith(S, [C])
        }
    }), C.ready.then = R.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? T.setTimeout(C.ready) : (S.addEventListener("DOMContentLoaded", W), T.addEventListener("load", W));
    var F = function (e, t, i, n, o, r, s) {
        var a = 0, l = e.length, d = null == i;
        if ("object" === k(i)) for (a in o = !0, i) F(e, t, a, i[a], !0, r, s); else if (void 0 !== n && (o = !0, m(n) || (s = !0), d && (t = s ? (t.call(e, n), null) : (d = t, function (e, t, i) {
            return d.call(C(e), i)
        })), t)) for (; a < l; a++) t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
        return o ? e : d ? t.call(e) : l ? t(e[0], i) : r
    }, B = /^-ms-/, U = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function Y(e) {
        return e.replace(B, "ms-").replace(U, X)
    }

    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = C.expando + G.uid++
    }

    G.uid = 1, G.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, i) {
            var n, o = this.cache(e);
            if ("string" == typeof t) o[Y(t)] = i; else for (n in t) o[Y(n)] = t[n];
            return o
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
        }, access: function (e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        }, remove: function (e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in n ? [t] : t.match(O) || []).length;
                    for (; i--;) delete n[t[i]]
                }
                (void 0 === t || C.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t)
        }
    };
    var Q = new G, K = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g;

    function ee(e, t, i) {
        var n, o;
        if (void 0 === i && 1 === e.nodeType) if (n = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (i = e.getAttribute(n))) {
            try {
                i = "true" === (o = i) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : J.test(o) ? JSON.parse(o) : o)
            } catch (e) {
            }
            K.set(e, t, i)
        } else i = void 0;
        return i
    }

    C.extend({
        hasData: function (e) {
            return K.hasData(e) || Q.hasData(e)
        }, data: function (e, t, i) {
            return K.access(e, t, i)
        }, removeData: function (e, t) {
            K.remove(e, t)
        }, _data: function (e, t, i) {
            return Q.access(e, t, i)
        }, _removeData: function (e, t) {
            Q.remove(e, t)
        }
    }), C.fn.extend({
        data: function (i, e) {
            var t, n, o, r = this[0], s = r && r.attributes;
            if (void 0 !== i) return "object" == typeof i ? this.each(function () {
                K.set(this, i)
            }) : F(this, function (e) {
                var t;
                if (r && void 0 === e) return void 0 !== (t = K.get(r, i)) ? t : void 0 !== (t = ee(r, i)) ? t : void 0;
                this.each(function () {
                    K.set(this, i, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = K.get(r), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && 0 === (n = s[t].name).indexOf("data-") && (n = Y(n.slice(5)), ee(r, n, o[n]));
                Q.set(r, "hasDataAttrs", !0)
            }
            return o
        }, removeData: function (e) {
            return this.each(function () {
                K.remove(this, e)
            })
        }
    }), C.extend({
        queue: function (e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = Q.get(e, t), i && (!n || Array.isArray(i) ? n = Q.access(e, t, C.makeArray(i)) : n.push(i)), n || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var i = C.queue(e, t), n = i.length, o = i.shift(), r = C._queueHooks(e, t);
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete r.stop, o.call(e, function () {
                C.dequeue(e, t)
            }, r)), !n && r && r.empty.fire()
        }, _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return Q.get(e, i) || Q.access(e, i, {
                empty: C.Callbacks("once memory").add(function () {
                    Q.remove(e, [t + "queue", i])
                })
            })
        }
    }), C.fn.extend({
        queue: function (t, i) {
            var e = 2;
            return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === i ? this : this.each(function () {
                var e = C.queue(this, t, i);
                C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                C.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var i, n = 1, o = C.Deferred(), r = this, s = this.length, a = function () {
                --n || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (i = Q.get(r[s], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"], oe = S.documentElement, re = function (e) {
            return C.contains(e.ownerDocument, e)
        }, se = {composed: !0};
    oe.getRootNode && (re = function (e) {
        return C.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
    });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === C.css(e, "display")
    }, le = function (e, t, i, n) {
        var o, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        for (r in o = i.apply(e, n || []), t) e.style[r] = s[r];
        return o
    };

    function de(e, t, i, n) {
        var o, r, s = 20, a = n ? function () {
                return n.cur()
            } : function () {
                return C.css(e, t, "")
            }, l = a(), d = i && i[3] || (C.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (C.cssNumber[t] || "px" !== d && +l) && ie.exec(C.css(e, t));
        if (c && c[3] !== d) {
            for (l /= 2, d = d || c[3], c = +l || 1; s--;) C.style(e, t, c + d), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), c /= r;
            c *= 2, C.style(e, t, c + d), i = i || []
        }
        return i && (c = +c || +l || 0, o = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = d, n.start = c, n.end = o)), o
    }

    var ce = {};

    function ue(e, t) {
        for (var i, n, o, r, s, a, l, d = [], c = 0, u = e.length; c < u; c++) (n = e[c]).style && (i = n.style.display, t ? ("none" === i && (d[c] = Q.get(n, "display") || null, d[c] || (n.style.display = "")), "" === n.style.display && ae(n) && (d[c] = (l = s = r = void 0, s = (o = n).ownerDocument, a = o.nodeName, (l = ce[a]) || (r = s.body.appendChild(s.createElement(a)), l = C.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), ce[a] = l)))) : "none" !== i && (d[c] = "none", Q.set(n, "display", i)));
        for (c = 0; c < u; c++) null != d[c] && (e[c].style.display = d[c]);
        return e
    }

    C.fn.extend({
        show: function () {
            return ue(this, !0)
        }, hide: function () {
            return ue(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? C(this).show() : C(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i, fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ve(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && j(e, t) ? C.merge([e], i) : i
    }

    function ye(e, t) {
        for (var i = 0, n = e.length; i < n; i++) Q.set(e[i], "globalEval", !t || Q.get(t[i], "globalEval"))
    }

    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var me, we, be = /<|&#?\w+;/;

    function ke(e, t, i, n, o) {
        for (var r, s, a, l, d, c, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) if ((r = e[f]) || 0 === r) if ("object" === k(r)) C.merge(p, r.nodeType ? [r] : r); else if (be.test(r)) {
            for (s = s || u.appendChild(t.createElement("div")), a = (fe.exec(r) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + C.htmlPrefilter(r) + l[2], c = l[0]; c--;) s = s.lastChild;
            C.merge(p, s.childNodes), (s = u.firstChild).textContent = ""
        } else p.push(t.createTextNode(r));
        for (u.textContent = "", f = 0; r = p[f++];) if (n && -1 < C.inArray(r, n)) o && o.push(r); else if (d = re(r), s = ve(u.appendChild(r), "script"), d && ye(s), i) for (c = 0; r = s[c++];) he.test(r.type || "") && i.push(r);
        return u
    }

    me = S.createDocumentFragment().appendChild(S.createElement("div")), (we = S.createElement("input")).setAttribute("type", "radio"), we.setAttribute("checked", "checked"), we.setAttribute("name", "t"), me.appendChild(we), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var xe = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Se = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0
    }

    function $e() {
        return !1
    }

    function Ae(e, t) {
        return e === function () {
            try {
                return S.activeElement
            } catch (e) {
            }
        }() == ("focus" === t)
    }

    function je(e, t, i, n, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), t) je(e, a, i, n, t[a], r);
            return e
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = $e; else if (!o) return e;
        return 1 === r && (s = o, (o = function (e) {
            return C().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = C.guid++)), e.each(function () {
            C.event.add(this, t, o, n, i)
        })
    }

    function Ee(e, o, r) {
        r ? (Q.set(e, o, !1), C.event.add(e, o, {
            namespace: !1, handler: function (e) {
                var t, i, n = Q.get(this, o);
                if (1 & e.isTrigger && this[o]) {
                    if (n.length) (C.event.special[o] || {}).delegateType && e.stopPropagation(); else if (n = a.call(arguments), Q.set(this, o, n), t = r(this, o), this[o](), n !== (i = Q.get(this, o)) || t ? Q.set(this, o, !1) : i = {}, n !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                } else n.length && (Q.set(this, o, {value: C.event.trigger(C.extend(n[0], C.Event.prototype), n.slice(1), this)}), e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, o) && C.event.add(e, o, Ce)
    }

    C.event = {
        global: {}, add: function (t, e, i, n, o) {
            var r, s, a, l, d, c, u, p, f, h, g, v = Q.get(t);
            if (v) for (i.handler && (i = (r = i).handler, o = r.selector), o && C.find.matchesSelector(oe, o), i.guid || (i.guid = C.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function (e) {
                return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
            }), d = (e = (e || "").match(O) || [""]).length; d--;) f = g = (a = Se.exec(e[d]) || [])[1], h = (a[2] || "").split(".").sort(), f && (u = C.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = C.event.special[f] || {}, c = C.extend({
                type: f,
                origType: g,
                data: n,
                handler: i,
                guid: i.guid,
                selector: o,
                needsContext: o && C.expr.match.needsContext.test(o),
                namespace: h.join(".")
            }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, h, s) || t.addEventListener && t.addEventListener(f, s)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), C.event.global[f] = !0)
        }, remove: function (e, t, i, n, o) {
            var r, s, a, l, d, c, u, p, f, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (l = v.events)) {
                for (d = (t = (t || "").match(O) || [""]).length; d--;) if (f = g = (a = Se.exec(t[d]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                    for (u = C.event.special[f] || {}, p = l[f = (n ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) c = p[r], !o && g !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (p.splice(r, 1), c.selector && p.delegateCount--, u.remove && u.remove.call(e, c));
                    s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, v.handle) || C.removeEvent(e, f, v.handle), delete l[f])
                } else for (f in l) C.event.remove(e, f + t[d], i, n, !0);
                C.isEmptyObject(l) && Q.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, i, n, o, r, s, a = C.event.fix(e), l = new Array(arguments.length),
                d = (Q.get(this, "events") || {})[a.type] || [], c = C.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = C.event.handlers.call(this, a, d), t = 0; (o = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = o.elem, i = 0; (r = o.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (n = ((C.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        }, handlers: function (e, t) {
            var i, n, o, r, s, a = [], l = t.delegateCount, d = e.target;
            if (l && d.nodeType && !("click" === e.type && 1 <= e.button)) for (; d !== this; d = d.parentNode || this) if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                for (r = [], s = {}, i = 0; i < l; i++) void 0 === s[o = (n = t[i]).selector + " "] && (s[o] = n.needsContext ? -1 < C(o, this).index(d) : C.find(o, this, null, [d]).length), s[o] && r.push(n);
                r.length && a.push({elem: d, handlers: r})
            }
            return d = this, l < t.length && a.push({elem: d, handlers: t.slice(l)}), a
        }, addProp: function (t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (e) {
            return e[C.expando] ? e : new C.Event(e)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && j(t, "input") && Ee(t, "click", Ce), !1
                }, trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && j(t, "input") && Ee(t, "click"), !0
                }, _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && j(t, "input") && Q.get(t, "click") || j(t, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, C.removeEvent = function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, C.Event = function (e, t) {
        if (!(this instanceof C.Event)) return new C.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : $e, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
    }, C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: $e,
        isPropagationStopped: $e,
        isImmediatePropagationStopped: $e,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, C.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, C.event.addProp), C.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        C.event.special[e] = {
            setup: function () {
                return Ee(this, e, Ae), !1
            }, trigger: function () {
                return Ee(this, e), !0
            }, delegateType: t
        }
    }), C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, o) {
        C.event.special[e] = {
            delegateType: o, bindType: o, handle: function (e) {
                var t, i = e.relatedTarget, n = e.handleObj;
                return i && (i === this || C.contains(this, i)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), C.fn.extend({
        on: function (e, t, i, n) {
            return je(this, e, t, i, n)
        }, one: function (e, t, i, n) {
            return je(this, e, t, i, n, 1)
        }, off: function (e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, C(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = $e), this.each(function () {
                C.event.remove(this, e, i, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ne = /<script|<style|<link/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function _e(e, t) {
        return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
    }

    function qe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var i, n, o, r, s, a, l, d;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (r = Q.access(e), s = Q.set(t, r), d = r.events)) for (o in delete s.handle, s.events = {}, d) for (i = 0, n = d[o].length; i < n; i++) C.event.add(t, o, d[o][i]);
            K.hasData(e) && (a = K.access(e), l = C.extend({}, a), K.set(t, l))
        }
    }

    function Me(i, n, o, r) {
        n = g.apply([], n);
        var e, t, s, a, l, d, c = 0, u = i.length, p = u - 1, f = n[0], h = m(f);
        if (h || 1 < u && "string" == typeof f && !y.checkClone && Le.test(f)) return i.each(function (e) {
            var t = i.eq(e);
            h && (n[0] = f.call(this, e, t.html())), Me(t, n, o, r)
        });
        if (u && (t = (e = ke(n, i[0].ownerDocument, !1, i, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
            for (a = (s = C.map(ve(e, "script"), qe)).length; c < u; c++) l = e, c !== p && (l = C.clone(l, !0, !0), a && C.merge(s, ve(l, "script"))), o.call(i[c], l, c);
            if (a) for (d = s[s.length - 1].ownerDocument, C.map(s, Oe), c = 0; c < a; c++) l = s[c], he.test(l.type || "") && !Q.access(l, "globalEval") && C.contains(d, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {nonce: l.nonce || l.getAttribute("nonce")}) : b(l.textContent.replace(He, ""), l, d))
        }
        return i
    }

    function Ie(e, t, i) {
        for (var n, o = t ? C.filter(t, e) : e, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || C.cleanData(ve(n)), n.parentNode && (i && re(n) && ye(ve(n, "script")), n.parentNode.removeChild(n));
        return e
    }

    C.extend({
        htmlPrefilter: function (e) {
            return e.replace(De, "<$1></$2>")
        }, clone: function (e, t, i) {
            var n, o, r, s, a, l, d, c = e.cloneNode(!0), u = re(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (s = ve(c), n = 0, o = (r = ve(e)).length; n < o; n++) a = r[n], "input" === (d = (l = s[n]).nodeName.toLowerCase()) && pe.test(a.type) ? l.checked = a.checked : "input" !== d && "textarea" !== d || (l.defaultValue = a.defaultValue);
            if (t) if (i) for (r = r || ve(e), s = s || ve(c), n = 0, o = r.length; n < o; n++) Pe(r[n], s[n]); else Pe(e, c);
            return 0 < (s = ve(c, "script")).length && ye(s, !u && ve(e, "script")), c
        }, cleanData: function (e) {
            for (var t, i, n, o = C.event.special, r = 0; void 0 !== (i = e[r]); r++) if (V(i)) {
                if (t = i[Q.expando]) {
                    if (t.events) for (n in t.events) o[n] ? C.event.remove(i, n) : C.removeEvent(i, n, t.handle);
                    i[Q.expando] = void 0
                }
                i[K.expando] && (i[K.expando] = void 0)
            }
        }
    }), C.fn.extend({
        detach: function (e) {
            return Ie(this, e, !0)
        }, remove: function (e) {
            return Ie(this, e)
        }, text: function (e) {
            return F(this, function (e) {
                return void 0 === e ? C.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return Me(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _e(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Me(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = _e(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Me(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Me(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(ve(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return C.clone(this, e, t)
            })
        }, html: function (e) {
            return F(this, function (e) {
                var t = this[0] || {}, i = 0, n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (C.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var i = [];
            return Me(this, arguments, function (e) {
                var t = this.parentNode;
                C.inArray(this, i) < 0 && (C.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, i)
        }
    }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, s) {
        C.fn[e] = function (e) {
            for (var t, i = [], n = C(e), o = n.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), C(n[r])[s](t), l.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var ze = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), Re = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = T), t.getComputedStyle(e)
    }, We = new RegExp(ne.join("|"), "i");

    function Fe(e, t, i) {
        var n, o, r, s, a = e.style;
        return (i = i || Re(e)) && ("" !== (s = i.getPropertyValue(t) || i[t]) || re(e) || (s = C.style(e, t)), !y.pixelBoxStyles() && ze.test(s) && We.test(t) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function Be(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function e() {
            if (l) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(a).appendChild(l);
                var e = T.getComputedStyle(l);
                i = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", r = 36 === t(e.right), n = 36 === t(e.width), l.style.position = "absolute", o = 12 === t(l.offsetWidth / 3), oe.removeChild(a), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }

        var i, n, o, r, s, a = S.createElement("div"), l = S.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, C.extend(y, {
            boxSizingReliable: function () {
                return e(), n
            }, pixelBoxStyles: function () {
                return e(), r
            }, pixelPosition: function () {
                return e(), i
            }, reliableMarginLeft: function () {
                return e(), s
            }, scrollboxSize: function () {
                return e(), o
            }
        }))
    }();
    var Ue = ["Webkit", "Moz", "ms"], Xe = S.createElement("div").style, Ye = {};

    function Ve(e) {
        return C.cssProps[e] || Ye[e] || (e in Xe ? e : Ye[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), i = Ue.length; i--;) if ((e = Ue[i] + t) in Xe) return e
        }(e) || e)
    }

    var Ge = /^(none|table(?!-c[ea]).+)/, Qe = /^--/,
        Ke = {position: "absolute", visibility: "hidden", display: "block"},
        Je = {letterSpacing: "0", fontWeight: "400"};

    function Ze(e, t, i) {
        var n = ie.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function et(e, t, i, n, o, r) {
        var s = "width" === t ? 1 : 0, a = 0, l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === i && (l += C.css(e, i + ne[s], !0, o)), n ? ("content" === i && (l -= C.css(e, "padding" + ne[s], !0, o)), "margin" !== i && (l -= C.css(e, "border" + ne[s] + "Width", !0, o))) : (l += C.css(e, "padding" + ne[s], !0, o), "padding" !== i ? l += C.css(e, "border" + ne[s] + "Width", !0, o) : a += C.css(e, "border" + ne[s] + "Width", !0, o));
        return !n && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
    }

    function tt(e, t, i) {
        var n = Re(e), o = (!y.boxSizingReliable() || i) && "border-box" === C.css(e, "boxSizing", !1, n), r = o,
            s = Fe(e, t, n), a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ze.test(s)) {
            if (!i) return s;
            s = "auto"
        }
        return (!y.boxSizingReliable() && o || "auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, n)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, n), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + et(e, t, i || (o ? "border" : "content"), r, n, s) + "px"
    }

    function it(e, t, i, n, o) {
        return new it.prototype.init(e, t, i, n, o)
    }

    C.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = Fe(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = Y(t), l = Qe.test(t), d = e.style;
                if (l || (t = Ve(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (o = s.get(e, !1, n)) ? o : d[t];
                "string" == (r = typeof i) && (o = ie.exec(i)) && o[1] && (i = de(e, t, o), r = "number"), null != i && i == i && ("number" !== r || l || (i += o && o[3] || (C.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (d[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l ? d.setProperty(t, i) : d[t] = i))
            }
        },
        css: function (e, t, i, n) {
            var o, r, s, a = Y(t);
            return Qe.test(t) || (t = Ve(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (o = s.get(e, !0, i)), void 0 === o && (o = Fe(e, t, n)), "normal" === o && t in Je && (o = Je[t]), "" === i || i ? (r = parseFloat(o), !0 === i || isFinite(r) ? r || 0 : o) : o
        }
    }), C.each(["height", "width"], function (e, l) {
        C.cssHooks[l] = {
            get: function (e, t, i) {
                if (t) return !Ge.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, l, i) : le(e, Ke, function () {
                    return tt(e, l, i)
                })
            }, set: function (e, t, i) {
                var n, o = Re(e), r = !y.scrollboxSize() && "absolute" === o.position,
                    s = (r || i) && "border-box" === C.css(e, "boxSizing", !1, o), a = i ? et(e, l, i, s, o) : 0;
                return s && r && (a -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(o[l]) - et(e, l, "border", !1, o) - .5)), a && (n = ie.exec(t)) && "px" !== (n[3] || "px") && (e.style[l] = t, t = C.css(e, l)), Ze(0, t, a)
            }
        }
    }), C.cssHooks.marginLeft = Be(y.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), C.each({margin: "", padding: "", border: "Width"}, function (o, r) {
        C.cssHooks[o + r] = {
            expand: function (e) {
                for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[o + ne[t] + r] = n[t] || n[t - 2] || n[0];
                return i
            }
        }, "margin" !== o && (C.cssHooks[o + r].set = Ze)
    }), C.fn.extend({
        css: function (e, t) {
            return F(this, function (e, t, i) {
                var n, o, r = {}, s = 0;
                if (Array.isArray(t)) {
                    for (n = Re(e), o = t.length; s < o; s++) r[t[s]] = C.css(e, t[s], !1, n);
                    return r
                }
                return void 0 !== i ? C.style(e, t, i) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((C.Tween = it).prototype = {
        constructor: it, init: function (e, t, i, n, o, r) {
            this.elem = e, this.prop = i, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (C.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var e = it.propHooks[this.prop];
            return e && e.get ? e.get(this) : it.propHooks._default.get(this)
        }, run: function (e) {
            var t, i = it.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : it.propHooks._default.set(this), this
        }
    }).init.prototype = it.prototype, (it.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = it.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, C.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, C.fx = it.prototype.init, C.fx.step = {};
    var nt, ot, rt, st, at = /^(?:toggle|show|hide)$/, lt = /queueHooks$/;

    function dt() {
        ot && (!1 === S.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(dt) : T.setTimeout(dt, C.fx.interval), C.fx.tick())
    }

    function ct() {
        return T.setTimeout(function () {
            nt = void 0
        }), nt = Date.now()
    }

    function ut(e, t) {
        var i, n = 0, o = {height: e};
        for (t = t ? 1 : 0; n < 4; n += 2 - t) o["margin" + (i = ne[n])] = o["padding" + i] = e;
        return t && (o.opacity = o.width = e), o
    }

    function pt(e, t, i) {
        for (var n, o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), r = 0, s = o.length; r < s; r++) if (n = o[r].call(i, t, e)) return n
    }

    function ft(r, e, t) {
        var i, s, n = 0, o = ft.prefilters.length, a = C.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (s) return !1;
            for (var e = nt || ct(), t = Math.max(0, d.startTime + d.duration - e), i = 1 - (t / d.duration || 0), n = 0, o = d.tweens.length; n < o; n++) d.tweens[n].run(i);
            return a.notifyWith(r, [d, i, t]), i < 1 && o ? t : (o || a.notifyWith(r, [d, 1, 0]), a.resolveWith(r, [d]), !1)
        }, d = a.promise({
            elem: r,
            props: C.extend({}, e),
            opts: C.extend(!0, {specialEasing: {}, easing: C.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: nt || ct(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var i = C.Tween(r, d.opts, e, t, d.opts.specialEasing[e] || d.opts.easing);
                return d.tweens.push(i), i
            },
            stop: function (e) {
                var t = 0, i = e ? d.tweens.length : 0;
                if (s) return this;
                for (s = !0; t < i; t++) d.tweens[t].run(1);
                return e ? (a.notifyWith(r, [d, 1, 0]), a.resolveWith(r, [d, e])) : a.rejectWith(r, [d, e]), this
            }
        }), c = d.props;
        for (function (e, t) {
            var i, n, o, r, s;
            for (i in e) if (o = t[n = Y(i)], r = e[i], Array.isArray(r) && (o = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), (s = C.cssHooks[n]) && "expand" in s) for (i in r = s.expand(r), delete e[n], r) i in e || (e[i] = r[i], t[i] = o); else t[n] = o
        }(c, d.opts.specialEasing); n < o; n++) if (i = ft.prefilters[n].call(d, r, c, d.opts)) return m(i.stop) && (C._queueHooks(d.elem, d.opts.queue).stop = i.stop.bind(i)), i;
        return C.map(c, pt, d), m(d.opts.start) && d.opts.start.call(r, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), C.fx.timer(C.extend(l, {
            elem: r,
            anim: d,
            queue: d.opts.queue
        })), d
    }

    C.Animation = C.extend(ft, {
        tweeners: {
            "*": [function (e, t) {
                var i = this.createTween(e, t);
                return de(i.elem, e, ie.exec(t), i), i
            }]
        }, tweener: function (e, t) {
            for (var i, n = 0, o = (e = m(e) ? (t = e, ["*"]) : e.match(O)).length; n < o; n++) i = e[n], ft.tweeners[i] = ft.tweeners[i] || [], ft.tweeners[i].unshift(t)
        }, prefilters: [function (e, t, i) {
            var n, o, r, s, a, l, d, c, u = "width" in t || "height" in t, p = this, f = {}, h = e.style,
                g = e.nodeType && ae(e), v = Q.get(e, "fxshow");
            for (n in i.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
            }), s.unqueued++, p.always(function () {
                p.always(function () {
                    s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
                })
            })), t) if (o = t[n], at.test(o)) {
                if (delete t[n], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                    if ("show" !== o || !v || void 0 === v[n]) continue;
                    g = !0
                }
                f[n] = v && v[n] || C.style(e, n)
            }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f)) for (n in u && 1 === e.nodeType && (i.overflow = [h.overflow, h.overflowX, h.overflowY], null == (d = v && v.display) && (d = Q.get(e, "display")), "none" === (c = C.css(e, "display")) && (d ? c = d : (ue([e], !0), d = e.style.display || d, c = C.css(e, "display"), ue([e]))), ("inline" === c || "inline-block" === c && null != d) && "none" === C.css(e, "float") && (l || (p.done(function () {
                h.display = d
            }), null == d && (c = h.display, d = "none" === c ? "" : c)), h.display = "inline-block")), i.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
            })), l = !1, f) l || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {display: d}), r && (v.hidden = !g), g && ue([e], !0), p.done(function () {
                for (n in g || ue([e]), Q.remove(e, "fxshow"), f) C.style(e, n, f[n])
            })), l = pt(g ? v[n] : 0, n, p), n in v || (v[n] = l.start, g && (l.end = l.start, l.start = 0))
        }], prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), C.speed = function (e, t, i) {
        var n = e && "object" == typeof e ? C.extend({}, e) : {
            complete: i || !i && t || m(e) && e,
            duration: e,
            easing: i && t || t && !m(t) && t
        };
        return C.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in C.fx.speeds ? n.duration = C.fx.speeds[n.duration] : n.duration = C.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            m(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue)
        }, n
    }, C.fn.extend({
        fadeTo: function (e, t, i, n) {
            return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, i, n)
        }, animate: function (t, e, i, n) {
            var o = C.isEmptyObject(t), r = C.speed(e, i, n), s = function () {
                var e = ft(this, C.extend({}, t), r);
                (o || Q.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        }, stop: function (o, e, r) {
            var s = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function () {
                var e = !0, t = null != o && o + "queueHooks", i = C.timers, n = Q.get(this);
                if (t) n[t] && n[t].stop && s(n[t]); else for (t in n) n[t] && n[t].stop && lt.test(t) && s(n[t]);
                for (t = i.length; t--;) i[t].elem !== this || null != o && i[t].queue !== o || (i[t].anim.stop(r), e = !1, i.splice(t, 1));
                !e && r || C.dequeue(this, o)
            })
        }, finish: function (s) {
            return !1 !== s && (s = s || "fx"), this.each(function () {
                var e, t = Q.get(this), i = t[s + "queue"], n = t[s + "queueHooks"], o = C.timers, r = i ? i.length : 0;
                for (t.finish = !0, C.queue(this, s, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete t.finish
            })
        }
    }), C.each(["toggle", "show", "hide"], function (e, n) {
        var o = C.fn[n];
        C.fn[n] = function (e, t, i) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(ut(n, !0), e, t, i)
        }
    }), C.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, n) {
        C.fn[e] = function (e, t, i) {
            return this.animate(n, e, t, i)
        }
    }), C.timers = [], C.fx.tick = function () {
        var e, t = 0, i = C.timers;
        for (nt = Date.now(); t < i.length; t++) (e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || C.fx.stop(), nt = void 0
    }, C.fx.timer = function (e) {
        C.timers.push(e), C.fx.start()
    }, C.fx.interval = 13, C.fx.start = function () {
        ot || (ot = !0, dt())
    }, C.fx.stop = function () {
        ot = null
    }, C.fx.speeds = {slow: 600, fast: 200, _default: 400}, C.fn.delay = function (n, e) {
        return n = C.fx && C.fx.speeds[n] || n, e = e || "fx", this.queue(e, function (e, t) {
            var i = T.setTimeout(e, n);
            t.stop = function () {
                T.clearTimeout(i)
            }
        })
    }, rt = S.createElement("input"), st = S.createElement("select").appendChild(S.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = st.selected, (rt = S.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
    var ht, gt = C.expr.attrHandle;
    C.fn.extend({
        attr: function (e, t) {
            return F(this, C.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                C.removeAttr(this, e)
            })
        }
    }), C.extend({
        attr: function (e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? C.prop(e, t, i) : (1 === r && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ht : void 0)), void 0 !== i ? null === i ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : null == (n = C.find.attr(e, t)) ? void 0 : n)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!y.radioValue && "radio" === t && j(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var i, n = 0, o = t && t.match(O);
            if (o && 1 === e.nodeType) for (; i = o[n++];) e.removeAttribute(i)
        }
    }), ht = {
        set: function (e, t, i) {
            return !1 === t ? C.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var s = gt[t] || C.find.attr;
        gt[t] = function (e, t, i) {
            var n, o, r = t.toLowerCase();
            return i || (o = gt[r], gt[r] = n, n = null != s(e, t, i) ? r : null, gt[r] = o), n
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;

    function mt(e) {
        return (e.match(O) || []).join(" ")
    }

    function wt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
    }

    C.fn.extend({
        prop: function (e, t) {
            return F(this, C.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[C.propFix[e] || e]
            })
        }
    }), C.extend({
        prop: function (e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), y.optSelected || (C.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        C.propFix[this.toLowerCase()] = this
    }), C.fn.extend({
        addClass: function (t) {
            var e, i, n, o, r, s, a, l = 0;
            if (m(t)) return this.each(function (e) {
                C(this).addClass(t.call(this, e, wt(this)))
            });
            if ((e = bt(t)).length) for (; i = this[l++];) if (o = wt(i), n = 1 === i.nodeType && " " + mt(o) + " ") {
                for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                o !== (a = mt(n)) && i.setAttribute("class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, i, n, o, r, s, a, l = 0;
            if (m(t)) return this.each(function (e) {
                C(this).removeClass(t.call(this, e, wt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = bt(t)).length) for (; i = this[l++];) if (o = wt(i), n = 1 === i.nodeType && " " + mt(o) + " ") {
                for (s = 0; r = e[s++];) for (; -1 < n.indexOf(" " + r + " ");) n = n.replace(" " + r + " ", " ");
                o !== (a = mt(n)) && i.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (o, t) {
            var r = typeof o, s = "string" === r || Array.isArray(o);
            return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : m(o) ? this.each(function (e) {
                C(this).toggleClass(o.call(this, e, wt(this), t), t)
            }) : this.each(function () {
                var e, t, i, n;
                if (s) for (t = 0, i = C(this), n = bt(o); e = n[t++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e); else void 0 !== o && "boolean" !== r || ((e = wt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : Q.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];) if (1 === i.nodeType && -1 < (" " + mt(wt(i)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var kt = /\r/g;
    C.fn.extend({
        val: function (i) {
            var n, e, o, t = this[0];
            return arguments.length ? (o = m(i), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = o ? i.call(this, e, C(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
            })) : t ? (n = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(kt, "") : null == e ? "" : e : void 0
        }
    }), C.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : mt(C.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, i, n, o = e.options, r = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [],
                        l = s ? r + 1 : o.length;
                    for (n = r < 0 ? l : s ? r : 0; n < l; n++) if (((i = o[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !j(i.parentNode, "optgroup"))) {
                        if (t = C(i).val(), s) return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var i, n, o = e.options, r = C.makeArray(t), s = o.length; s--;) ((n = o[s]).selected = -1 < C.inArray(C.valHooks.option.get(n), r)) && (i = !0);
                    return i || (e.selectedIndex = -1), r
                }
            }
        }
    }), C.each(["radio", "checkbox"], function () {
        C.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
            }
        }, y.checkOn || (C.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in T;
    var xt = /^(?:focusinfocus|focusoutblur)$/, Tt = function (e) {
        e.stopPropagation()
    };
    C.extend(C.event, {
        trigger: function (e, t, i, n) {
            var o, r, s, a, l, d, c, u, p = [i || S], f = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = u = s = i = i || S, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(f + C.event.triggered) && (-1 < f.indexOf(".") && (f = (h = f.split(".")).shift(), h.sort()), l = f.indexOf(":") < 0 && "on" + f, (e = e[C.expando] ? e : new C.Event(f, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : C.makeArray(t, [e]), c = C.event.special[f] || {}, n || !c.trigger || !1 !== c.trigger.apply(i, t))) {
                if (!n && !c.noBubble && !w(i)) {
                    for (a = c.delegateType || f, xt.test(a + f) || (r = r.parentNode); r; r = r.parentNode) p.push(r), s = r;
                    s === (i.ownerDocument || S) && p.push(s.defaultView || s.parentWindow || T)
                }
                for (o = 0; (r = p[o++]) && !e.isPropagationStopped();) u = r, e.type = 1 < o ? a : c.bindType || f, (d = (Q.get(r, "events") || {})[e.type] && Q.get(r, "handle")) && d.apply(r, t), (d = l && r[l]) && d.apply && V(r) && (e.result = d.apply(r, t), !1 === e.result && e.preventDefault());
                return e.type = f, n || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(i) || l && m(i[f]) && !w(i) && ((s = i[l]) && (i[l] = null), C.event.triggered = f, e.isPropagationStopped() && u.addEventListener(f, Tt), i[f](), e.isPropagationStopped() && u.removeEventListener(f, Tt), C.event.triggered = void 0, s && (i[l] = s)), e.result
            }
        }, simulate: function (e, t, i) {
            var n = C.extend(new C.Event, i, {type: e, isSimulated: !0});
            C.event.trigger(n, null, t)
        }
    }), C.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                C.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var i = this[0];
            if (i) return C.event.trigger(e, t, i, !0)
        }
    }), y.focusin || C.each({focus: "focusin", blur: "focusout"}, function (i, n) {
        var o = function (e) {
            C.event.simulate(n, e.target, C.event.fix(e))
        };
        C.event.special[n] = {
            setup: function () {
                var e = this.ownerDocument || this, t = Q.access(e, n);
                t || e.addEventListener(i, o, !0), Q.access(e, n, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this, t = Q.access(e, n) - 1;
                t ? Q.access(e, n, t) : (e.removeEventListener(i, o, !0), Q.remove(e, n))
            }
        }
    });
    var St = T.location, Ct = Date.now(), $t = /\?/;
    C.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
    };
    var At = /\[\]$/, jt = /\r?\n/g, Et = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;

    function Nt(i, e, n, o) {
        var t;
        if (Array.isArray(e)) C.each(e, function (e, t) {
            n || At.test(i) ? o(i, t) : Nt(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, n, o)
        }); else if (n || "object" !== k(e)) o(i, e); else for (t in e) Nt(i + "[" + t + "]", e[t], n, o)
    }

    C.param = function (e, t) {
        var i, n = [], o = function (e, t) {
            var i = m(t) ? t() : t;
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
            o(this.name, this.value)
        }); else for (i in e) Nt(i, e[i], t, o);
        return n.join("&")
    }, C.fn.extend({
        serialize: function () {
            return C.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && Dt.test(this.nodeName) && !Et.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var i = C(this).val();
                return null == i ? null : Array.isArray(i) ? C.map(i, function (e) {
                    return {name: t.name, value: e.replace(jt, "\r\n")}
                }) : {name: t.name, value: i.replace(jt, "\r\n")}
            }).get()
        }
    });
    var Lt = /%20/g, Ht = /#.*$/, _t = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//, Mt = {}, It = {}, zt = "*/".concat("*"), Rt = S.createElement("a");

    function Wt(r) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var i, n = 0, o = e.toLowerCase().match(O) || [];
            if (m(t)) for (; i = o[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (r[i] = r[i] || []).unshift(t)) : (r[i] = r[i] || []).push(t)
        }
    }

    function Ft(t, o, r, s) {
        var a = {}, l = t === It;

        function d(e) {
            var n;
            return a[e] = !0, C.each(t[e] || [], function (e, t) {
                var i = t(o, r, s);
                return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (o.dataTypes.unshift(i), d(i), !1)
            }), n
        }

        return d(o.dataTypes[0]) || !a["*"] && d("*")
    }

    function Bt(e, t) {
        var i, n, o = C.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && C.extend(!0, e, n), e
    }

    Rt.href = St.href, C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: St.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Bt(Bt(e, C.ajaxSettings), t) : Bt(C.ajaxSettings, e)
        },
        ajaxPrefilter: Wt(Mt),
        ajaxTransport: Wt(It),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, u, p, i, f, n, h, g, o, r, v = C.ajaxSetup({}, t), y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? C(y) : C.event, w = C.Deferred(),
                b = C.Callbacks("once memory"), k = v.statusCode || {}, s = {}, a = {}, l = "canceled", x = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!i) for (i = {}; t = qt.exec(p);) i[t[1].toLowerCase() + " "] = (i[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = i[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    }, getAllResponseHeaders: function () {
                        return h ? p : null
                    }, setRequestHeader: function (e, t) {
                        return null == h && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == h && (v.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (h) x.always(e[x.status]); else for (t in e) k[t] = [k[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || l;
                        return c && c.abort(t), d(0, t), this
                    }
                };
            if (w.promise(x), v.url = ((e || v.url || St.href) + "").replace(Pt, St.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(O) || [""], null == v.crossDomain) {
                n = S.createElement("a");
                try {
                    n.href = v.url, n.href = n.href, v.crossDomain = Rt.protocol + "//" + Rt.host != n.protocol + "//" + n.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = C.param(v.data, v.traditional)), Ft(Mt, v, t, x), h) return x;
            for (o in (g = C.event && v.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), u = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (r = v.url.slice(u.length), v.data && (v.processData || "string" == typeof v.data) && (u += ($t.test(u) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (u = u.replace(_t, "$1"), r = ($t.test(u) ? "&" : "?") + "_=" + Ct++ + r), v.url = u + r), v.ifModified && (C.lastModified[u] && x.setRequestHeader("If-Modified-Since", C.lastModified[u]), C.etag[u] && x.setRequestHeader("If-None-Match", C.etag[u])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && x.setRequestHeader("Content-Type", v.contentType), x.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) x.setRequestHeader(o, v.headers[o]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, x, v) || h)) return x.abort();
            if (l = "abort", b.add(v.complete), x.done(v.success), x.fail(v.error), c = Ft(It, v, t, x)) {
                if (x.readyState = 1, g && m.trigger("ajaxSend", [x, v]), h) return x;
                v.async && 0 < v.timeout && (f = T.setTimeout(function () {
                    x.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(s, d)
                } catch (e) {
                    if (h) throw e;
                    d(-1, e)
                }
            } else d(-1, "No Transport");

            function d(e, t, i, n) {
                var o, r, s, a, l, d = t;
                h || (h = !0, f && T.clearTimeout(f), c = void 0, p = n || "", x.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, i && (a = function (e, t, i) {
                    for (var n, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n) for (o in a) if (a[o] && a[o].test(n)) {
                        l.unshift(o);
                        break
                    }
                    if (l[0] in i) r = l[0]; else {
                        for (o in i) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    if (r) return r !== l[0] && l.unshift(r), i[r]
                }(v, x, i)), a = function (e, t, i, n) {
                    var o, r, s, a, l, d = {}, c = e.dataTypes.slice();
                    if (c[1]) for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
                    for (r = c.shift(); r;) if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                        if (!(s = d[l + " " + r] || d["* " + r])) for (o in d) if ((a = o.split(" "))[1] === r && (s = d[l + " " + a[0]] || d["* " + a[0]])) {
                            !0 === s ? s = d[o] : !0 !== d[o] && (r = a[0], c.unshift(a[1]));
                            break
                        }
                        if (!0 !== s) if (s && e.throws) t = s(t); else try {
                            t = s(t)
                        } catch (e) {
                            return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r}
                        }
                    }
                    return {state: "success", data: t}
                }(v, a, x, o), o ? (v.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (C.lastModified[u] = l), (l = x.getResponseHeader("etag")) && (C.etag[u] = l)), 204 === e || "HEAD" === v.type ? d = "nocontent" : 304 === e ? d = "notmodified" : (d = a.state, r = a.data, o = !(s = a.error))) : (s = d, !e && d || (d = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || d) + "", o ? w.resolveWith(y, [r, d, x]) : w.rejectWith(y, [x, d, s]), x.statusCode(k), k = void 0, g && m.trigger(o ? "ajaxSuccess" : "ajaxError", [x, v, o ? r : s]), b.fireWith(y, [x, d]), g && (m.trigger("ajaxComplete", [x, v]), --C.active || C.event.trigger("ajaxStop")))
            }

            return x
        },
        getJSON: function (e, t, i) {
            return C.get(e, t, i, "json")
        },
        getScript: function (e, t) {
            return C.get(e, void 0, t, "script")
        }
    }), C.each(["get", "post"], function (e, o) {
        C[o] = function (e, t, i, n) {
            return m(t) && (n = n || i, i = t, t = void 0), C.ajax(C.extend({
                url: e,
                type: o,
                dataType: n,
                data: t,
                success: i
            }, C.isPlainObject(e) && e))
        }
    }), C._evalUrl = function (e, t) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (e) {
                C.globalEval(e, t)
            }
        })
    }, C.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (i) {
            return m(i) ? this.each(function (e) {
                C(this).wrapInner(i.call(this, e))
            }) : this.each(function () {
                var e = C(this), t = e.contents();
                t.length ? t.wrapAll(i) : e.append(i)
            })
        }, wrap: function (t) {
            var i = m(t);
            return this.each(function (e) {
                C(this).wrapAll(i ? t.call(this, e) : t)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                C(this).replaceWith(this.childNodes)
            }), this
        }
    }), C.expr.pseudos.hidden = function (e) {
        return !C.expr.pseudos.visible(e)
    }, C.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, C.ajaxSettings.xhr = function () {
        try {
            return new T.XMLHttpRequest
        } catch (e) {
        }
    };
    var Ut = {0: 200, 1223: 204}, Xt = C.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, C.ajaxTransport(function (o) {
        var r, s;
        if (y.cors || Xt && !o.crossDomain) return {
            send: function (e, t) {
                var i, n = o.xhr();
                if (n.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields) for (i in o.xhrFields) n[i] = o.xhrFields[i];
                for (i in o.mimeType && n.overrideMimeType && n.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) n.setRequestHeader(i, e[i]);
                r = function (e) {
                    return function () {
                        r && (r = s = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null, "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(Ut[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {binary: n.response} : {text: n.responseText}, n.getAllResponseHeaders()))
                    }
                }, n.onload = r(), s = n.onerror = n.ontimeout = r("error"), void 0 !== n.onabort ? n.onabort = s : n.onreadystatechange = function () {
                    4 === n.readyState && T.setTimeout(function () {
                        r && s()
                    })
                }, r = r("abort");
                try {
                    n.send(o.hasContent && o.data || null)
                } catch (e) {
                    if (r) throw e
                }
            }, abort: function () {
                r && r()
            }
        }
    }), C.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), C.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return C.globalEval(e), e
            }
        }
    }), C.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), C.ajaxTransport("script", function (i) {
        var n, o;
        if (i.crossDomain || i.scriptAttrs) return {
            send: function (e, t) {
                n = C("<script>").attr(i.scriptAttrs || {}).prop({
                    charset: i.scriptCharset,
                    src: i.url
                }).on("load error", o = function (e) {
                    n.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), S.head.appendChild(n[0])
            }, abort: function () {
                o && o()
            }
        }
    });
    var Yt, Vt = [], Gt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Vt.pop() || C.expando + "_" + Ct++;
            return this[e] = !0, e
        }
    }), C.ajaxPrefilter("json jsonp", function (e, t, i) {
        var n, o, r,
            s = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Gt, "$1" + n) : !1 !== e.jsonp && (e.url += ($t.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function () {
            return r || C.error(n + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = T[n], T[n] = function () {
            r = arguments
        }, i.always(function () {
            void 0 === o ? C(T).removeProp(n) : T[n] = o, e[n] && (e.jsonpCallback = t.jsonpCallback, Vt.push(n)), r && m(o) && o(r[0]), r = o = void 0
        }), "script"
    }), y.createHTMLDocument = ((Yt = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Yt.childNodes.length), C.parseHTML = function (e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (y.createHTMLDocument ? ((n = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(n)) : t = S), r = !i && [], (o = E.exec(e)) ? [t.createElement(o[1])] : (o = ke([e], t, r), r && r.length && C(r).remove(), C.merge([], o.childNodes)));
        var n, o, r
    }, C.fn.load = function (e, t, i) {
        var n, o, r, s = this, a = e.indexOf(" ");
        return -1 < a && (n = mt(e.slice(a)), e = e.slice(0, a)), m(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && C.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, s.html(n ? C("<div>").append(C.parseHTML(e)).find(n) : e)
        }).always(i && function (e, t) {
            s.each(function () {
                i.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        C.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), C.expr.pseudos.animated = function (t) {
        return C.grep(C.timers, function (e) {
            return t === e.elem
        }).length
    }, C.offset = {
        setOffset: function (e, t, i) {
            var n, o, r, s, a, l, d = C.css(e, "position"), c = C(e), u = {};
            "static" === d && (e.style.position = "relative"), a = c.offset(), r = C.css(e, "top"), l = C.css(e, "left"), o = ("absolute" === d || "fixed" === d) && -1 < (r + l).indexOf("auto") ? (s = (n = c.position()).top, n.left) : (s = parseFloat(r) || 0, parseFloat(l) || 0), m(t) && (t = t.call(e, i, C.extend({}, a))), null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : c.css(u)
        }
    }, C.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                C.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: e.top + i.pageYOffset,
                left: e.left + i.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, i, n = this[0], o = {top: 0, left: 0};
                if ("fixed" === C.css(n, "position")) t = n.getBoundingClientRect(); else {
                    for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - C.css(n, "marginTop", !0),
                    left: t.left - o.left - C.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                return e || oe
            })
        }
    }), C.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, o) {
        var r = "pageYOffset" === o;
        C.fn[t] = function (e) {
            return F(this, function (e, t, i) {
                var n;
                if (w(e) ? n = e : 9 === e.nodeType && (n = e.defaultView), void 0 === i) return n ? n[o] : e[t];
                n ? n.scrollTo(r ? n.pageXOffset : i, r ? i : n.pageYOffset) : e[t] = i
            }, t, e, arguments.length)
        }
    }), C.each(["top", "left"], function (e, i) {
        C.cssHooks[i] = Be(y.pixelPosition, function (e, t) {
            if (t) return t = Fe(e, i), ze.test(t) ? C(e).position()[i] + "px" : t
        })
    }), C.each({Height: "height", Width: "width"}, function (s, a) {
        C.each({padding: "inner" + s, content: a, "": "outer" + s}, function (n, r) {
            C.fn[r] = function (e, t) {
                var i = arguments.length && (n || "boolean" != typeof e),
                    o = n || (!0 === e || !0 === t ? "margin" : "border");
                return F(this, function (e, t, i) {
                    var n;
                    return w(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + s], n["scroll" + s], e.body["offset" + s], n["offset" + s], n["client" + s])) : void 0 === i ? C.css(e, t, o) : C.style(e, t, i, o)
                }, a, i ? e : void 0, i)
            }
        })
    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, i) {
        C.fn[i] = function (e, t) {
            return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
        }
    }), C.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), C.fn.extend({
        bind: function (e, t, i) {
            return this.on(e, null, t, i)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        }, undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), C.proxy = function (e, t) {
        var i, n, o;
        if ("string" == typeof t && (i = e[t], t = e, e = i), m(e)) return n = a.call(arguments, 2), (o = function () {
            return e.apply(t || this, n.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || C.guid++, o
    }, C.holdReady = function (e) {
        e ? C.readyWait++ : C.ready(!0)
    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = j, C.isFunction = m, C.isWindow = w, C.camelCase = Y, C.type = k, C.now = Date.now, C.isNumeric = function (e) {
        var t = C.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return C
    });
    var Qt = T.jQuery, Kt = T.$;
    return C.noConflict = function (e) {
        return T.$ === C && (T.$ = Kt), e && T.jQuery === C && (T.jQuery = Qt), C
    }, e || (T.jQuery = T.$ = C), C
}), e = function (S) {
    var n, e = navigator.userAgent, C = /iphone/i.test(e), o = /chrome/i.test(e), $ = /android/i.test(e);
    S.mask = {
        definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"},
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, S.fn.extend({
        caret: function (e, t) {
            var i;
            if (0 !== this.length && !this.is(":hidden") && this.get(0) === document.activeElement) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((i = this.createTextRange()).collapse(!0), i.moveEnd("character", t), i.moveStart("character", e), i.select())
            })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (i = document.selection.createRange(), e = 0 - i.duplicate().moveStart("character", -1e5), t = e + i.text.length), {
                begin: e,
                end: t
            })
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (t, y) {
            var i, m, w, b, k, x, T;
            if (!t && 0 < this.length) {
                var e = S(this[0]).data(S.mask.dataName);
                return e ? e() : void 0
            }
            return y = S.extend({
                autoclear: S.mask.autoclear,
                placeholder: S.mask.placeholder,
                completed: null
            }, y), i = S.mask.definitions, m = [], w = x = t.length, b = null, t = String(t), S.each(t.split(""), function (e, t) {
                "?" == t ? (x--, w = e) : i[t] ? (m.push(new RegExp(i[t])), null === b && (b = m.length - 1), e < w && (k = m.length - 1)) : m.push(null)
            }), this.trigger("unmask").each(function () {
                var s = S(this), a = S.map(t.split(""), function (e, t) {
                    if ("?" != e) return i[e] ? c(t) : e
                }), l = a.join(""), r = s.val();

                function d() {
                    if (y.completed) {
                        for (var e = b; e <= k; e++) if (m[e] && a[e] === c(e)) return;
                        y.completed.call(s)
                    }
                }

                function c(e) {
                    return e < y.placeholder.length ? y.placeholder.charAt(e) : y.placeholder.charAt(0)
                }

                function u(e) {
                    for (; ++e < x && !m[e];) ;
                    return e
                }

                function p(e, t) {
                    var i, n;
                    if (!(e < 0)) {
                        for (i = e, n = u(t); i < x; i++) if (m[i]) {
                            if (!(n < x && m[i].test(a[n]))) break;
                            a[i] = a[n], a[n] = c(n), n = u(n)
                        }
                        g(), s.caret(Math.max(b, e))
                    }
                }

                function f(e) {
                    v(), s.val() != r && s.change()
                }

                function h(e, t) {
                    var i;
                    for (i = e; i < t && i < x; i++) m[i] && (a[i] = c(i))
                }

                function g() {
                    s.val(a.join(""))
                }

                function v(e) {
                    var t, i, n, o = s.val(), r = -1;
                    for (n = t = 0; t < x; t++) if (m[t]) {
                        for (a[t] = c(t); n++ < o.length;) if (i = o.charAt(n - 1), m[t].test(i)) {
                            a[t] = i, r = t;
                            break
                        }
                        if (n > o.length) {
                            h(t + 1, x);
                            break
                        }
                    } else a[t] === o.charAt(n) && n++, t < w && (r = t);
                    return e ? g() : r + 1 < w ? y.autoclear || a.join("") === l ? (s.val() && s.val(""), h(0, x)) : g() : (g(), s.val(s.val().substring(0, r + 1))), w ? t : b
                }

                s.data(S.mask.dataName, function () {
                    return S.map(a, function (e, t) {
                        return m[t] && e != c(t) ? e : null
                    }).join("")
                }), s.one("unmask", function () {
                    s.off(".mask").removeData(S.mask.dataName)
                }).on("focus.mask", function () {
                    var e;
                    s.prop("readonly") || (clearTimeout(n), r = s.val(), e = v(), n = setTimeout(function () {
                        s.get(0) === document.activeElement && (g(), e == t.replace("?", "").length ? s.caret(0, e) : s.caret(e))
                    }, 10))
                }).on("blur.mask", f).on("keydown.mask", function (e) {
                    if (!s.prop("readonly")) {
                        var t, i, n, o = e.which || e.keyCode;
                        T = s.val(), 8 === o || 46 === o || C && 127 === o ? (i = (t = s.caret()).begin, (n = t.end) - i == 0 && (i = 46 !== o ? function (e) {
                            for (; 0 <= --e && !m[e];) ;
                            return e
                        }(i) : n = u(i - 1), n = 46 === o ? u(n) : n), h(i, n), p(i, n - 1), e.preventDefault()) : 13 === o ? f.call(this, e) : 27 === o && (s.val(r), s.caret(0, v()), e.preventDefault())
                    }
                }).on("keypress.mask", function (e) {
                    if (!s.prop("readonly")) {
                        var r, t, i, n = e.which || e.keyCode, o = s.caret();
                        e.ctrlKey || e.altKey || e.metaKey || n < 32 || !n || 13 === n || (o.end - o.begin != 0 && (h(o.begin, o.end), p(o.begin, o.end - 1)), (r = u(o.begin - 1)) < x && (t = String.fromCharCode(n), m[r].test(t)) && (function (e) {
                            var t, i, n, o;
                            for (i = c(t = r); t < x; t++) if (m[t]) {
                                if (n = u(t), o = a[t], a[t] = i, !(n < x && m[n].test(o))) break;
                                i = o
                            }
                        }(), a[r] = t, g(), i = u(r), $ ? setTimeout(function () {
                            S.proxy(S.fn.caret, s, i)()
                        }, 0) : s.caret(i), o.begin <= k && d()), e.preventDefault())
                    }
                }).on("input.mask paste.mask", function () {
                    s.prop("readonly") || setTimeout(function () {
                        var e = v(!0);
                        s.caret(e), d()
                    }, 0)
                }), o && $ && s.off("input.mask").on("input.mask", function (e) {
                    var t = s.val(), i = s.caret();
                    if (T && T.length && T.length > t.length) {
                        for (v(!0); 0 < i.begin && !m[i.begin - 1];) i.begin--;
                        if (0 === i.begin) for (; i.begin < b && !m[i.begin];) i.begin++;
                        s.caret(i.begin, i.begin)
                    } else {
                        v(!0);
                        var n = t.charAt(i.begin);
                        i.begin < x && (m[i.begin] || i.begin++, m[i.begin].test(n) && i.begin++), s.caret(i.begin, i.begin)
                    }
                    d()
                }), v()
            })
        }
    })
}, "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (d) {
    "use strict";
    var o, s = window.Slick || {};
    (o = 0, s = function (e, t) {
        var i, n = this;
        n.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: d(e),
            appendDots: d(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function (e, t) {
                return d('<button type="button" />').text(t + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, n.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, d.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = d(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = d(e).data("slick") || {}, n.options = d.extend({}, n.defaults, t, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = d.proxy(n.autoPlay, n), n.autoPlayClear = d.proxy(n.autoPlayClear, n), n.autoPlayIterator = d.proxy(n.autoPlayIterator, n), n.changeSlide = d.proxy(n.changeSlide, n), n.clickHandler = d.proxy(n.clickHandler, n), n.selectHandler = d.proxy(n.selectHandler, n), n.setPosition = d.proxy(n.setPosition, n), n.swipeHandler = d.proxy(n.swipeHandler, n), n.dragHandler = d.proxy(n.dragHandler, n), n.keyHandler = d.proxy(n.keyHandler, n), n.instanceUid = o++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
    }).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, s.prototype.addSlide = s.prototype.slickAdd = function (e, t, i) {
        var n = this;
        if ("boolean" == typeof t) i = t, t = null; else if (t < 0 || t >= n.slideCount) return !1;
        n.unload(), "number" == typeof t ? 0 === t && 0 === n.$slides.length ? d(e).appendTo(n.$slideTrack) : i ? d(e).insertBefore(n.$slides.eq(t)) : d(e).insertAfter(n.$slides.eq(t)) : !0 === i ? d(e).prependTo(n.$slideTrack) : d(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function (e, t) {
            d(t).attr("data-slick-index", e)
        }), n.$slidesCache = n.$slides, n.reinit()
    }, s.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({height: t}, e.options.speed)
        }
    }, s.prototype.animateSlide = function (e, t) {
        var i = {}, n = this;
        n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({left: e}, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({top: e}, n.options.speed, n.options.easing, t) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), d({animStart: n.currentLeft}).animate({animStart: e}, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function (e) {
                e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate(" + e + "px, 0px)" : i[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(i)
            },
            complete: function () {
                t && t.call()
            }
        })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(i), t && setTimeout(function () {
            n.disableTransition(), t.call()
        }, n.options.speed))
    }, s.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = d(e).not(this.$slider)), e
    }, s.prototype.asNavFor = function (t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function () {
            var e = d(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }, s.prototype.applyTransition = function (e) {
        var t = this, i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, s.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, s.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, s.prototype.autoPlayIterator = function () {
        var e = this, t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, s.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = d(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = d(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, s.prototype.buildDots = function () {
        var e, t, i = this;
        if (!0 === i.options.dots) {
            for (i.$slider.addClass("slick-dotted"), t = d("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) t.append(d("<li />").append(i.options.customPaging.call(this, i, e)));
            i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
        }
    }, s.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            d(t).attr("data-slick-index", e).data("originalStyling", d(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? d('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), d("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, s.prototype.buildRows = function () {
        var e, t, i, n, o, r, s, a = this;
        if (n = document.createDocumentFragment(), r = a.$slider.children(), 1 < a.options.rows) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var d = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var c = e * s + (t * a.options.slidesPerRow + i);
                        r.get(c) && d.appendChild(r.get(c))
                    }
                    l.appendChild(d)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, s.prototype.checkResponsive = function (e, t) {
        var i, n, o, r = this, s = !1, a = r.$slider.width(), l = window.innerWidth || d(window).width();
        if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(l, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (i in n = null, r.breakpoints) r.breakpoints.hasOwnProperty(i) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[i] && (n = r.breakpoints[i]) : o > r.breakpoints[i] && (n = r.breakpoints[i]));
            null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || t) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = d.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = d.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), s = n), e || !1 === s || r.$slider.trigger("breakpoint", [r, s])
        }
    }, s.prototype.changeSlide = function (e, t) {
        var i, n, o = this, r = d(e.currentTarget);
        switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
            case"previous":
                n = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, t);
                break;
            case"next":
                n = 0 === i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, t);
                break;
            case"index":
                var s = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
                o.slideHandler(o.checkNavigable(s), !1, t), r.children().trigger("focus");
                break;
            default:
                return
        }
    }, s.prototype.checkNavigable = function (e) {
        var t, i;
        if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1]; else for (var n in t) {
            if (e < t[n]) {
                e = i;
                break
            }
            i = t[n]
        }
        return e
    }, s.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (d("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", d.proxy(e.interrupt, e, !0)).off("mouseleave.slick", d.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), d(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().off("click.slick", e.selectHandler), d(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), d(window).off("resize.slick.slick-" + e.instanceUid, e.resize), d("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), d(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, s.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", d.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", d.proxy(e.interrupt, e, !1))
    }, s.prototype.cleanUpRows = function () {
        var e;
        1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
    }, s.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, s.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), d(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            d(this).attr("style", d(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, s.prototype.disableTransition = function (e) {
        var t = {};
        t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
    }, s.prototype.fadeSlide = function (e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({zIndex: i.options.zIndex}), i.$slides.eq(e).animate({opacity: 1}, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function () {
            i.disableTransition(e), t.call()
        }, i.options.speed))
    }, s.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, s.prototype.filterSlides = s.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, s.prototype.focusHandler = function () {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (e) {
            e.stopImmediatePropagation();
            var t = d(this);
            setTimeout(function () {
                i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay())
            }, 0)
        })
    }, s.prototype.getCurrent = s.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, s.prototype.getDotCount = function () {
        var e = this, t = 0, i = 0, n = 0;
        if (!0 === e.options.infinite) if (e.slideCount <= e.options.slidesToShow) ++n; else for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (!0 === e.options.centerMode) n = e.slideCount; else if (e.options.asNavFor) for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return n - 1
    }, s.prototype.getLeft = function (e) {
        var t, i, n, o, r = this, s = 0;
        return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = i * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (s = e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, (r.options.slidesToShow - (e - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, r.slideCount % r.options.slidesToScroll * i * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (s = r.slideOffset = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * i * -1 + s, !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (r.$list.width() - n.outerWidth()) / 2)), t
    }, s.prototype.getOption = s.prototype.slickGetOption = function (e) {
        return this.options[e]
    }, s.prototype.getNavigableIndexes = function () {
        var e, t = this, i = 0, n = 0, o = [];
        for (e = !1 === t.options.infinite ? t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, s.prototype.getSlick = function () {
        return this
    }, s.prototype.getSlideCount = function () {
        var i, n, o = this;
        return n = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (e, t) {
            if (t.offsetLeft - n + d(t).outerWidth() / 2 > -1 * o.swipeLeft) return i = t, !1
        }), Math.abs(d(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, s.prototype.goTo = s.prototype.slickGoTo = function (e, t) {
        this.changeSlide({data: {message: "index", index: parseInt(e)}}, t)
    }, s.prototype.init = function (e) {
        var t = this;
        d(t.$slider).hasClass("slick-initialized") || (d(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, s.prototype.initADA = function () {
        var i = this, n = Math.ceil(i.slideCount / i.options.slidesToShow),
            o = i.getNavigableIndexes().filter(function (e) {
                return 0 <= e && e < i.slideCount
            });
        i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== i.$dots && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function (e) {
            var t = o.indexOf(e);
            d(this).attr({
                role: "tabpanel",
                id: "slick-slide" + i.instanceUid + e,
                tabindex: -1
            }), -1 !== t && d(this).attr({"aria-describedby": "slick-slide-control" + i.instanceUid + t})
        }), i.$dots.attr("role", "tablist").find("li").each(function (e) {
            var t = o[e];
            d(this).attr({role: "presentation"}), d(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + i.instanceUid + e,
                "aria-controls": "slick-slide" + i.instanceUid + t,
                "aria-label": e + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(i.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var e = i.currentSlide, t = e + i.options.slidesToShow; e < t; e++) i.$slides.eq(e).attr("tabindex", 0);
        i.activateADA()
    }, s.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, s.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (d("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && d("li", e.$dots).on("mouseenter.slick", d.proxy(e.interrupt, e, !0)).on("mouseleave.slick", d.proxy(e.interrupt, e, !1))
    }, s.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", d.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", d.proxy(e.interrupt, e, !1)))
    }, s.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), d(document).on(e.visibilityChange, d.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), d(window).on("orientationchange.slick.slick-" + e.instanceUid, d.proxy(e.orientationChange, e)), d(window).on("resize.slick.slick-" + e.instanceUid, d.proxy(e.resize, e)), d("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), d(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), d(e.setPosition)
    }, s.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, s.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({data: {message: !0 === t.options.rtl ? "next" : "previous"}}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({data: {message: !0 === t.options.rtl ? "previous" : "next"}}))
    }, s.prototype.lazyLoad = function () {
        function e(e) {
            d("img[data-lazy]", e).each(function () {
                var e = d(this), t = d(this).attr("data-lazy"), i = d(this).attr("data-srcset"),
                    n = d(this).attr("data-sizes") || r.$slider.attr("data-sizes"), o = document.createElement("img");
                o.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        i && (e.attr("srcset", i), n && e.attr("sizes", n)), e.attr("src", t).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), r.$slider.trigger("lazyLoaded", [r, e, t])
                    })
                }, o.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
                }, o.src = t
            })
        }

        var t, i, n, r = this;
        if (!0 === r.options.centerMode ? n = !0 === r.options.infinite ? (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(i + r.options.slidesToShow), !0 === r.options.fade && (0 < i && i--, n <= r.slideCount && n++)), t = r.$slider.find(".slick-slide").slice(i, n), "anticipated" === r.options.lazyLoad) for (var o = i - 1, s = n, a = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++) o < 0 && (o = r.slideCount - 1), t = (t = t.add(a.eq(o))).add(a.eq(s)), o--, s++;
        e(t), r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
    }, s.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, s.prototype.next = s.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, s.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
    }, s.prototype.pause = s.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
    }, s.prototype.play = s.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, s.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && d(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, s.prototype.prev = s.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, s.prototype.preventDefault = function (e) {
        e.preventDefault()
    }, s.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t, i, n, o, r, s = this, a = d("img[data-lazy]", s.$slider);
        a.length ? (t = a.first(), i = t.attr("data-lazy"), n = t.attr("data-srcset"), o = t.attr("data-sizes") || s.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            n && (t.attr("srcset", n), o && t.attr("sizes", o)), t.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, t, i]), s.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                s.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, i]), s.progressiveLazyLoad())
        }, r.src = i) : s.$slider.trigger("allImagesLoaded", [s])
    }, s.prototype.refresh = function (e) {
        var t, i, n = this;
        i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), t = n.currentSlide, n.destroy(!0), d.extend(n, n.initials, {currentSlide: t}), n.init(), e || n.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, s.prototype.registerBreakpoints = function () {
        var e, t, i, n = this, o = n.options.responsive || null;
        if ("array" === d.type(o) && o.length) {
            for (e in n.respondTo = n.options.respondTo || "window", o) if (i = n.breakpoints.length - 1, o.hasOwnProperty(e)) {
                for (t = o[e].breakpoint; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === t && n.breakpoints.splice(i, 1), i--;
                n.breakpoints.push(t), n.breakpointSettings[t] = o[e].settings
            }
            n.breakpoints.sort(function (e, t) {
                return n.options.mobileFirst ? e - t : t - e
            })
        }
    }, s.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, s.prototype.resize = function () {
        var e = this;
        d(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = d(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, s.prototype.removeSlide = s.prototype.slickRemove = function (e, t, i) {
        var n = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
        n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
    }, s.prototype.setCSS = function (e) {
        var t, i, n = this, o = {};
        !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled || (!(o = {}) === n.cssTransitions ? o[n.animType] = "translate(" + t + ", " + i + ")" : o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"), n.$slideTrack.css(o)
    }, s.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({padding: "0px " + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({padding: e.options.centerPadding + " 0px"})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, s.prototype.setFade = function () {
        var i, n = this;
        n.$slides.each(function (e, t) {
            i = n.slideWidth * e * -1, !0 === n.options.rtl ? d(t).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : d(t).css({position: "relative", left: i, top: 0, zIndex: n.options.zIndex - 2, opacity: 0})
        }), n.$slides.eq(n.currentSlide).css({zIndex: n.options.zIndex - 1, opacity: 1})
    }, s.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, s.prototype.setOption = s.prototype.slickSetOption = function () {
        var e, t, i, n, o, r = this, s = !1;
        if ("object" === d.type(arguments[0]) ? (i = arguments[0], s = arguments[1], o = "multiple") : "string" === d.type(arguments[0]) && (i = arguments[0], n = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === d.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[i] = n; else if ("multiple" === o) d.each(i, function (e, t) {
            r.options[e] = t
        }); else if ("responsive" === o) for (t in n) if ("array" !== d.type(r.options.responsive)) r.options.responsive = [n[t]]; else {
            for (e = r.options.responsive.length - 1; 0 <= e;) r.options.responsive[e].breakpoint === n[t].breakpoint && r.options.responsive.splice(e, 1), e--;
            r.options.responsive.push(n[t])
        }
        s && (r.unload(), r.reinit())
    }, s.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, s.prototype.setProps = function () {
        var e = this, t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, s.prototype.setSlideClasses = function (e) {
        var t, i, n, o, r = this;
        if (i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
            var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t <= e && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + e, i.slice(n - t + 1 + s, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
        } else 0 <= e && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
    }, s.prototype.setupInfinite = function () {
        var e, t, i, n = this;
        if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (t = null, n.slideCount > n.options.slidesToShow)) {
            for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - i; e -= 1) t = e - 1, d(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < i + n.slideCount; e += 1) t = e, d(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
            n.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                d(this).attr("id", "")
            })
        }
    }, s.prototype.interrupt = function (e) {
        e || this.autoPlay(), this.interrupted = e
    }, s.prototype.selectHandler = function (e) {
        var t = d(e.target).is(".slick-slide") ? d(e.target) : d(e.target).parents(".slick-slide"),
            i = parseInt(t.attr("data-slick-index"));
        i || (i = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i)
    }, s.prototype.slideHandler = function (e, t, i) {
        var n, o, r, s, a, l = null, d = this;
        if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e)) if (!1 === t && d.asNavFor(e), n = e, l = d.getLeft(n), s = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? s : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (n = d.currentSlide, !0 !== i ? d.animateSlide(s, function () {
            d.postSlide(n)
        }) : d.postSlide(n)); else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (n = d.currentSlide, !0 !== i ? d.animateSlide(s, function () {
            d.postSlide(n)
        }) : d.postSlide(n)); else {
            if (d.options.autoplay && clearInterval(d.autoPlayTimer), o = n < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + n : n >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : n - d.slideCount : n, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), r = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = (a = d.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== i ? (d.fadeSlideOut(r), d.fadeSlide(o, function () {
                d.postSlide(o)
            })) : d.postSlide(o), void d.animateHeight();
            !0 !== i ? d.animateSlide(l, function () {
                d.postSlide(o)
            }) : d.postSlide(o)
        }
    }, s.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, s.prototype.swipeDirection = function () {
        var e, t, i, n, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === o.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
    }, s.prototype.swipeEnd = function (e) {
        var t, i, n = this;
        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1;
        if (n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case"left":
                case"down":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, s.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case"start":
                t.swipeStart(e);
                break;
            case"move":
                t.swipeMove(e);
                break;
            case"end":
                t.swipeEnd(e)
        }
    }, s.prototype.swipeMove = function (e) {
        var t, i, n, o, r, s, a = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < s ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), i = a.swipeDirection(), void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * o : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, s.prototype.swipeStart = function (e) {
        var t, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return !(i.touchObject = {});
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
    }, s.prototype.unfilterSlides = s.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, s.prototype.unload = function () {
        var e = this;
        d(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, s.prototype.unslick = function (e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy()
    }, s.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, s.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, s.prototype.visibility = function () {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, d.fn.slick = function () {
        var e, t, i = this, n = arguments[0], o = Array.prototype.slice.call(arguments, 1), r = i.length;
        for (e = 0; e < r; e++) if ("object" == typeof n || void 0 === n ? i[e].slick = new s(i[e], n) : t = i[e].slick[n].apply(i[e].slick, o), void 0 !== t) return t;
        return i
    }
}), $(function () {
    var e = $(".js_open_menu"), t = $(".js_menu"), i = $(".js_close_menu"), n = $(".page__blackout");
    e.click(function () {
        t.toggleClass("is-active"), n.toggleClass("is-active")
    }), i.click(function () {
        t.removeClass("is-active"), n.removeClass("is-active")
    }), n.click(function () {
        t.removeClass("is-active"), n.removeClass("is-active")
    })
}), $(".js_title_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: !1,
    dots: !0,
    infinite: !0,
    vertical: !0,
    swipe: !1,
    asNavFor: ".js_title_star_slider",
    responsive: [{breakpoint: 551, settings: {slidesToShow: 1, slidesToScroll: 1, vertical: !1}}]
}), $(".js_title_star_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 100,
    arrows: !1,
    dots: !1,
    infinite: !0,
    asNavFor: ".js_title_slider",
    rtl: !0,
    focusOnSelect: !0,
    infinite: !0
}), $(document).ready(function () {
    var e = $(".js_title_star_slider").find(".slick-current").index();
    3 < $(".js_title_star_slider").find(".slick-slide").length ? ($(".js_title_star_slider").find(".slick-slide").eq(parseInt(e + 2)).addClass("slick-slide--4"), $(".js_title_star_slider").find(".slick-slide").last().addClass("slick-slide--1")) : $(window).width() <= 1100 ? $(".js_title_star_slider").find(".slick-slide").last().addClass("slick-slide--1") : $(".js_title_star_slider").find(".slick-slide").last().addClass("slick-slide--4"), $(".js_title_star_slider").find(".slick-slide").eq(e).addClass("slick-slide--2"), $(".js_title_star_slider").find(".slick-slide").eq(parseInt(e + 1)).addClass("slick-slide--3")
}), $(".js_title_star_slider").on("beforeChange", function (e, t, i, n) {
    for (var o = 0; o < $(".js_title_star_slider").find(".slick-slide").length; o++) $(".js_title_star_slider").find(".slick-slide").removeClass("slick-slide--1"), $(".js_title_star_slider").find(".slick-slide").removeClass("slick-slide--2"), $(".js_title_star_slider").find(".slick-slide").removeClass("slick-slide--3"), $(".js_title_star_slider").find(".slick-slide").removeClass("slick-slide--4")
}), $(".js_title_star_slider").on("afterChange", function (e, t, i, n) {
    var o = $(".js_title_star_slider").find(".slick-current").index();
    5 <= $(".js_title_star_slider").find(".slick-slide").length ? ($(".js_title_star_slider").find(".slick-slide").eq(o - 1).addClass("slick-slide--1"), $(".js_title_star_slider").find(".slick-slide").eq(o).addClass("slick-slide--2"), $(".js_title_star_slider").find(".slick-slide").eq(parseInt(o + 1)).addClass("slick-slide--3"), $(".js_title_star_slider").find(".slick-slide").eq(parseInt(o + 2)).addClass("slick-slide--4")) : 4 == $(".js_title_star_slider").find(".slick-slide").length ? ($(".js_title_star_slider").find(".slick-slide").eq(o - 1).addClass("slick-slide--1"), $(".js_title_star_slider").find(".slick-slide").eq(o).addClass("slick-slide--2"), $(".js_title_star_slider").find(".slick-slide").eq(parseInt(o - 2)).addClass("slick-slide--4"), $(".js_title_star_slider").find(".slick-slide").eq(parseInt(o - 3)).addClass("slick-slide--3")) : ($(window).width() <= 1100 ? $(".js_title_star_slider").find(".slick-slide").eq(o - 1).addClass("slick-slide--1") : $(".js_title_star_slider").find(".slick-slide").eq(o - 1).addClass("slick-slide--4"), $(".js_title_star_slider").find(".slick-slide").eq(o).addClass("slick-slide--2"), $(".js_title_star_slider").find(".slick-slide").eq(parseInt(o - 2)).addClass("slick-slide--3"))
}), $(".js_projects_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    arrows: !1,
    dots: !0,
    infinite: !1,
    responsive: [{breakpoint: 951, settings: {slidesToShow: 2}}, {
        breakpoint: 851,
        settings: {slidesToShow: 3}
    }, {
        breakpoint: 780,
        settings: {slidesToShow: 2, slidesToScroll: 1, centerMode: !0, centerPadding: "50px", infinite: !0}
    }, {
        breakpoint: 551,
        settings: {slidesToShow: 1, slidesToScroll: 1, centerMode: !0, centerPadding: "90px", infinite: !0}
    }]
}), 780 < $(window).width() && ($(".js_projects_slider").find(".slick-current").addClass("mt200"), $(".js_projects_slider").on("beforeChange", function (e, t, i) {
    $(".js_projects_slider").find(".slick-slide").removeClass("mt200"), $(".js_projects_slider").find(".slick-slide").eq(i + 1).addClass("mt200")
}), $(".js_projects_slider").on("afterChange", function (e, t, i) {
    $(".js_projects_slider").find(".slick-slide").removeClass("mt200"), $(".js_projects_slider").find(".slick-slide").eq(t.currentSlide).addClass("mt200")
})), $(".js_news_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    arrows: !1,
    dots: !0,
    infinite: !1,
    responsive: [{breakpoint: 1101, settings: {slidesToShow: 3}}, {
        breakpoint: 851,
        settings: {slidesToShow: 3}
    }, {
        breakpoint: 780,
        settings: {slidesToShow: 2, slidesToScroll: 1, centerMode: !0, centerPadding: "50px", infinite: !0}
    }, {
        breakpoint: 551,
        settings: {slidesToShow: 1, slidesToScroll: 1, centerMode: !0, centerPadding: "90px", infinite: !0}
    }]
}), $(function () {
    var l = $(window);

    function e() {
        var s = l.scrollTop(), a = s + l.height();
        $(".js_scroll_animate:not(.animated)").each(function () {
            var e = $(this), t = (e.data("viewportOffset"), l.height()), i = s + t, n = a - t, o = e.offset().top,
                r = o + e.height();
            (i < r && o < i || o < n && n < r) && (e.data("timeout") ? window.setTimeout(function () {
                e.addClass("animated " + e.data("animation"))
            }, parseInt(e.data("timeout"), 10)) : e.addClass("animated " + e.data("animation")))
        })
    }

    l.on("scroll", e), e()
}),
    $(".header__search").on("click", function () {
        if ($(window).width() > "850") {
            $(this).addClass("active");
            $(this).find(".header__search-text").focus();
        } else {
            $(".inline-search__block").addClass("show");
            $(".search-overlay").addClass("is-active");
        }
    });
$(".header__search-text").on("blur", function () {
    if ($(window).width() > "850") {
        $(".header__search").removeClass("active");
    }
});
$(".inline-search__close").on("click", function () {
    $(".inline-search__block").removeClass("show");
    $(".search-overlay").removeClass("is-active");
});
$(".search-overlay").on("click", function () {
    $(".inline-search__block").removeClass("show");
    $(this).removeClass("is-active");
});
