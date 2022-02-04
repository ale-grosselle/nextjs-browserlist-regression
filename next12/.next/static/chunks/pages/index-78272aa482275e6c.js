(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5301: function (n, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push(
        ['/', function () {return r(5075)}])
    }, 5075: function (n, t, r) {
      'use strict'
      r.r(t), r.d(t, { __N_SSP: function () {return s} })
      var o = r(4051), e = r.n(o), u = r(5893), c = r(7294)

      function i (n, t, r, o, e, u, c) {
        try {
          var i = n[u](c), f = i.value
        } catch (a) {return void r(a)}
        i.done ? t(f) : Promise.resolve(f).then(o, e)
      }

      var f = function () {
        var n, t = (n = e().
          mark((function n () {
            return e().
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
          return new Promise((function (o, e) {
            var u = n.apply(t, r)

            function c (n) {i(u, o, e, c, f, 'next', n)}

            function f (n) {i(u, o, e, c, f, 'throw', n)}

            c(void 0)
          }))
        })
        return function () {return t.apply(this, arguments)}
      }(), a = function n () {
        !function (n, t) {
          if (!(n instanceof t)) throw new TypeError(
            'Cannot call a class as a function')
        }(this, n), console.log('HELLO FROM AN INSTANCE!')
      }, s = !0
      t.default = function () {
        return c.useEffect((function () {f(), new a}), []), (0, u.jsx)('div',
          { children: 'Hello' })
      }
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
