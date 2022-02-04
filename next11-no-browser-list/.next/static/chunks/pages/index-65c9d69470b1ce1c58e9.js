(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    718: function (n, t, r) {
      'use strict'

      function o (n, t, r, o, e, u, c) {
        try {
          var i = n[u](c), f = i.value
        } catch (a) {return void r(a)}
        i.done ? t(f) : Promise.resolve(f).then(o, e)
      }

      r.r(t), r.d(t,
        { __N_SSP: function () {return s}, default: function () {return l} })
      var e = r(7757), u = r.n(e), c = r(7294), i = r(5893), f = function () {
        var n, t = (n = u().
          mark((function n () {
            return u().
              wrap((function (n) {
                for (; ;) switch (n.prev = n.next) {
                  case 0:
                    console.log('OK HELLO!')
                  case 1:
                  case'end':
                    return n.stop()
                }
              }), n)
          })), function () {
          var t = this, r = arguments
          return new Promise((function (e, u) {
            var c = n.apply(t, r)

            function i (n) {o(c, e, u, i, f, 'next', n)}

            function f (n) {o(c, e, u, i, f, 'throw', n)}

            i(void 0)
          }))
        })
        return function () {return t.apply(this, arguments)}
      }(), a = function n () {
        !function (n, t) {
          if (!(n instanceof t)) throw new TypeError(
            'Cannot call a class as a function')
        }(this, n), console.log('HELLO FROM AN INSTANCE!')
      }, s = !0, l = function () {
        return c.useEffect((function () {f(), new a}), []), (0, i.jsx)('div',
          { children: 'Hello' })
      }
    },
    5301: function (n, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push(
        ['/', function () {return r(718)}])
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], (function () {
      return t = 5301, n(n.s = t)
      var t
    }))
    var t = n.O()
    _N_E = t
  }])
