/*!
 * console-ban v5.0.0
 * (c) 2020-2023 fz6m
 * Released under the MIT License.
 */
!(function (e, t) {
    typeof exports == 'object' && typeof module != 'undefined'
        ? t(exports)
        : typeof define == 'function' && define.amd
        ? define(['exports'], t)
        : t(((e = typeof globalThis != 'undefined' ? globalThis : e || self).ConsoleBan = {}))
  })(this, function (e) {
    'use strict'
    var t = function () {
        return (
            (t =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++) {
                        for (var o in (t = arguments[n])) {
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                        }
                    }
                    return e
                }),
            t.apply(this, arguments)
        )
    }
    var n = { clear: !0, debug: !0, debugTime: 3e3, bfcache: !0 }
    var i = 2
    var o = function (e) {
        return ~navigator.userAgent.toLowerCase().indexOf(e)
    }
    var r = function (e, t) {
        t !== i ? (location.href = e) : location.replace(e)
    }
    var c = 0
    var a = 0
    var f = function (e) {
        var t = 0
        var n = 1 << c++
        return function () {
            ;(!a || a & n) && ++t === 2 && ((a |= n), e(), (t = 1))
        }
    }
    var s = function (e) {
        var t = /./
        t.toString = f(e)
        var n = function () {
            return t
        }
        n.toString = f(e)
        var i = new Date()
        ;(i.toString = f(e)), console.log('%c', n, n(), i)
        var o
        var r
        var c = f(e)
        ;(o = c),
            (r = new Error()),
            Object.defineProperty(r, 'message', {
                get: function () {
                    o()
                }
            }),
            console.log(r)
    }
    var u = (function () {
        function e(e) {
            var i = t(t({}, n), e)
            var o = i.clear
            var r = i.debug
            var c = i.debugTime
            var a = i.callback
            var f = i.redirect
            var s = i.write
            var u = i.bfcache
            ;(this._debug = r),
                (this._debugTime = c),
                (this._clear = o),
                (this._bfcache = u),
                (this._callback = a),
                (this._redirect = f),
                (this._write = s)
        }
        return (
            (e.prototype.clear = function () {
                this._clear && (console.clear = function () {})
            }),
            (e.prototype.bfcache = function () {
                this._bfcache &&
                    (window.addEventListener('unload', function () {}),
                    window.addEventListener('beforeunload', function () {}))
            }),
            (e.prototype.debug = function () {
                if (this._debug) {
                    var e = new Function('debugger')
                    setInterval(e, this._debugTime)
                }
            }),
            (e.prototype.redirect = function (e) {
                var t = this._redirect
                if (t) {
                    if (t.indexOf('http') !== 0) {
                        var n
                        var i = location.pathname + location.search
                        if (((n = t) ? (n[0] !== '/' ? '/'.concat(n) : n) : '/') !== i) r(t, e)
                    } else location.href !== t && r(t, e)
                }
            }),
            (e.prototype.callback = function () {
                if ((this._callback || this._redirect || this._write) && window) {
                    var e
                    var t = this.fire.bind(this)
                    var n = window.chrome || o('chrome')
                    var r = o('firefox')
                    if (!n) {
                        return r
                            ? (((e = /./).toString = t), void console.log(e))
                            : void (function (e) {
                                  var t = new Image()
                                  Object.defineProperty(t, 'id', {
                                      get: function () {
                                          e(i)
                                      }
                                  }),
                                      console.log(t)
                              })(t)
                    }
                    s(t)
                }
            }),
            (e.prototype.write = function () {
                var e = this._write
                e && (document.body.innerHTML = typeof e == 'string' ? e : e.innerHTML)
            }),
            (e.prototype.fire = function (e) {
                this._callback
                    ? this._callback.call(null)
                    : (this.redirect(e), this._redirect || this.write())
            }),
            (e.prototype.prepare = function () {
                this.clear(), this.bfcache(), this.debug()
            }),
            (e.prototype.ban = function () {
                this.prepare(), this.callback()
            }),
            e
        )
    })()
    e.init = function (e) {
        new u(e).ban()
    }
  })
  