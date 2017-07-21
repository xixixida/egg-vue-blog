/* !
 * vue-resource v1.3.4
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */

!function(t, e) { typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = e() : typeof define === 'function' && define.amd ? define(e) : t.VueResource = e(); }(this, function() {
  'use strict'; function t(t) { this.state = J, this.value = void 0, this.deferred = []; const e = this; try { t(function(t) { e.resolve(t); }, function(t) { e.reject(t); }); } catch (t) { e.reject(t); } } function e(t, e) { t instanceof Promise ? this.promise = t : this.promise = new Promise(t.bind(e)), this.context = e; } function n(t) { typeof console !== 'undefined' && _ && console.warn('[VueResource warn]: ' + t); } function o(t) { typeof console !== 'undefined' && console.error(t); } function r(t, e) { return F(t, e); } function i(t) { return t ? t.replace(/^\s*|\s*$/g, '') : ''; } function u(t, e) { return t && void 0 === e ? t.replace(/\s+$/, '') : t && e ? t.replace(new RegExp('[' + e + ']+$'), '') : t; } function s(t) { return t ? t.toLowerCase() : ''; } function a(t) { return t ? t.toUpperCase() : ''; } function c(t) { return typeof t === 'string'; } function f(t) { return typeof t === 'function'; } function p(t) { return t !== null && typeof t === 'object'; } function h(t) { return p(t) && Object.getPrototypeOf(t) == Object.prototype; } function d(t) { return typeof Blob !== 'undefined' && t instanceof Blob; } function l(t) { return typeof FormData !== 'undefined' && t instanceof FormData; } function m(t, n, o) { const r = e.resolve(t); return arguments.length < 2 ? r : r.then(n, o); } function y(t, e, n) { return n = n || {}, f(n) && (n = n.call(e)), b(t.bind({ $vm: e, $options: n }), t, { $options: n }); } function v(t, e) {
    let n,
      o; if (Q(t)) for (n = 0; n < t.length; n++)e.call(t[n], t[n], n); else if (p(t)) for (o in t)G.call(t, o) && e.call(t[o], t[o], o); return t;
  } function b(t) { return V.call(arguments, 1).forEach(function(e) { T(t, e, !0); }), t; } function g(t) { return V.call(arguments, 1).forEach(function(e) { for (const n in e) void 0 === t[n] && (t[n] = e[n]); }), t; } function w(t) { return V.call(arguments, 1).forEach(function(e) { T(t, e); }), t; } function T(t, e, n) { for (const o in e)n && (h(e[o]) || Q(e[o])) ? (h(e[o]) && !h(t[o]) && (t[o] = {}), Q(e[o]) && !Q(t[o]) && (t[o] = []), T(t[o], e[o], n)) : void 0 !== e[o] && (t[o] = e[o]); } function x(t, e, n) {
    let o = j(t),
      r = o.expand(e); return n && n.push.apply(n, o.vars), r;
  } function j(t) {
    let e = [ '+', '#', '.', '/', ';', '?', '&' ],
      n = []; return { vars: n, expand(o) {
        return t.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(t, r, i) {
          if (r) {
            let u = null,
             s = []; if (e.indexOf(r.charAt(0)) !== -1 && (u = r.charAt(0), r = r.substr(1)), r.split(/,/g).forEach(function(t) { const e = /([^:\*]*)(?::(\d+)|(\*))?/.exec(t); s.push.apply(s, E(o, u, e[1], e[2] || e[3])), n.push(e[1]); }), u && u !== '+') { let a = ','; return u === '?' ? a = '&' : u !== '#' && (a = u), (s.length !== 0 ? u : '') + s.join(a); } return s.join(',');
          } return $(i);
        });
      } };
  } function E(t, e, n, o) {
    let r = t[n],
      i = []; if (O(r) && r !== '') if (typeof r === 'string' || typeof r === 'number' || typeof r === 'boolean')r = r.toString(), o && o !== '*' && (r = r.substring(0, parseInt(o, 10))), i.push(C(e, r, P(e) ? n : null)); else if (o === '*')Array.isArray(r) ? r.filter(O).forEach(function(t) { i.push(C(e, t, P(e) ? n : null)); }) : Object.keys(r).forEach(function(t) { O(r[t]) && i.push(C(e, r[t], t)); }); else { const u = []; Array.isArray(r) ? r.filter(O).forEach(function(t) { u.push(C(e, t)); }) : Object.keys(r).forEach(function(t) { O(r[t]) && (u.push(encodeURIComponent(t)), u.push(C(e, r[t].toString()))); }), P(e) ? i.push(encodeURIComponent(n) + '=' + u.join(',')) : u.length !== 0 && i.push(u.join(',')); } else e === ';' ? i.push(encodeURIComponent(n)) : r !== '' || e !== '&' && e !== '?' ? r === '' && i.push('') : i.push(encodeURIComponent(n) + '='); return i;
  } function O(t) { return void 0 !== t && t !== null; } function P(t) { return t === ';' || t === '&' || t === '?'; } function C(t, e, n) { return e = t === '+' || t === '#' ? $(e) : encodeURIComponent(e), n ? encodeURIComponent(n) + '=' + e : e; } function $(t) { return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t) { return /%[0-9A-Fa-f]/.test(t) || (t = encodeURI(t)), t; }).join(''); } function U(t, e) {
    let n,
      o = this || {},
      r = t; return c(t) && (r = { url: t, params: e }), r = b({}, U.options, o.$options, r), U.transforms.forEach(function(t) { c(t) && (t = U.transform[t]), f(t) && (n = R(t, n, o.$vm)); }), n(r);
  } function R(t, e, n) { return function(o) { return t.call(n, o, e); }; } function A(t, e, n) {
    let o,
      r = Q(e),
      i = h(e); v(e, function(e, u) { o = p(e) || Q(e), n && (u = n + '[' + (i || o ? u : '') + ']'), !n && r ? t.add(e.name, e.value) : o ? A(t, e, u) : t.add(u, e); });
  } function S(t) {
    let e = t.match(/^\[|^\{(?!\{)/),
     n = { '[': /]$/, '{': /}$/ }; return e && n[e[0]].test(t);
  } function k(t, e) { e((t.client || (z ? ht : dt))(t)); } function I(t, e) { return Object.keys(t).reduce(function(t, n) { return s(e) === s(n) ? n : t; }, null); } function q(t) { if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError('Invalid character in header field name'); return i(t); } function H(t) { return new e(function(e) { const n = new FileReader(); n.readAsText(t), n.onload = function() { e(n.result); }; }); } function L(t) { return t.type.indexOf('text') === 0 || t.type.indexOf('json') !== -1; } function B(t) {
   let n = this || {},
    r = lt(n.$vm); return g(t || {}, n.$options, B.options), B.interceptors.forEach(function(t) { c(t) && (t = B.interceptor[t]), f(t) && r.use(t); }), r(new vt(t)).then(function(t) { return t.ok ? t : e.reject(t); }, function(t) { return t instanceof Error && o(t), e.reject(t); });
 } function M(t, e, n, o) {
  let r = this || {},
    i = {}; return n = Y({}, M.actions, n), v(n, function(n, u) { n = b({ url: t, params: Y({}, e) }, o, n), i[u] = function() { return (r.$http || B)(N(n, arguments)); }; }), i;
} function N(t, e) {
  let n,
    o = Y({}, t),
    r = {}; switch (e.length) { case 2:r = e[0], n = e[1]; break; case 1:/^(POST|PUT|PATCH)$/i.test(o.method) ? n = e[0] : r = e[0]; break; case 0:break; default:throw 'Expected up to 2 arguments [params, body], got ' + e.length + ' arguments'; } return o.body = n, o.params = Y({}, o.params, r), o;
} function D(t) { D.installed || (K(t), t.url = U, t.http = B, t.resource = M, t.Promise = e, Object.defineProperties(t.prototype, { $url: { get() { return y(t.url, this, this.$options.url); } }, $http: { get() { return y(t.http, this, this.$options.http); } }, $resource: { get() { return t.resource.bind(this); } }, $promise: { get() { const e = this; return function(n) { return new t.Promise(n, e); }; } } })); } var J = 2; t.reject = function(e) { return new t(function(t, n) { n(e); }); }, t.resolve = function(e) { return new t(function(t, n) { t(e); }); }, t.all = function(e) {
  return new t(function(n, o) {
    let r = 0,
      i = []; e.length === 0 && n(i); for (let u = 0; u < e.length; u += 1)t.resolve(e[u]).then(function(t) { return function(o) { i[t] = o, (r += 1) === e.length && n(i); }; }(u), o);
  });
}, t.race = function(e) { return new t(function(n, o) { for (let r = 0; r < e.length; r += 1)t.resolve(e[r]).then(n, o); }); }; const W = t.prototype; W.resolve = function(t) { const e = this; if (e.state === J) { if (t === e) throw new TypeError('Promise settled with itself.'); let n = !1; try { const o = t && t.then; if (t !== null && typeof t === 'object' && typeof o === 'function') return void o.call(t, function(t) { n || e.resolve(t), n = !0; }, function(t) { n || e.reject(t), n = !0; }); } catch (t) { return void (n || e.reject(t)); }e.state = 0, e.value = t, e.notify(); } }, W.reject = function(t) { const e = this; if (e.state === J) { if (t === e) throw new TypeError('Promise settled with itself.'); e.state = 1, e.value = t, e.notify(); } }, W.notify = function() {
  const t = this; r(function() {
    if (t.state !== J) {
      for (;t.deferred.length;) {
        let e = t.deferred.shift(),
          n = e[0],
          o = e[1],
          r = e[2],
          i = e[3]; try { t.state === 0 ? r(typeof n === 'function' ? n.call(void 0, t.value) : t.value) : t.state === 1 && (typeof o === 'function' ? r(o.call(void 0, t.value)) : i(t.value)); } catch (t) { i(t); }
      }
    }
  });
}, W.then = function(e, n) { const o = this; return new t(function(t, r) { o.deferred.push([ e, n, t, r ]), o.notify(); }); }, W.catch = function(t) { return this.then(void 0, t); }, typeof Promise === 'undefined' && (window.Promise = t), e.all = function(t, n) { return new e(Promise.all(t), n); }, e.resolve = function(t, n) { return new e(Promise.resolve(t), n); }, e.reject = function(t, n) { return new e(Promise.reject(t), n); }, e.race = function(t, n) { return new e(Promise.race(t), n); }; const X = e.prototype; X.bind = function(t) { return this.context = t, this; }, X.then = function(t, n) { return t && t.bind && this.context && (t = t.bind(this.context)), n && n.bind && this.context && (n = n.bind(this.context)), new e(this.promise.then(t, n), this.context); }, X.catch = function(t) { return t && t.bind && this.context && (t = t.bind(this.context)), new e(this.promise.catch(t), this.context); }, X.finally = function(t) { return this.then(function(e) { return t.call(this), e; }, function(e) { return t.call(this), Promise.reject(e); }); }; var F,
  G = {}.hasOwnProperty,
  V = [].slice,
  _ = !1,
  z = typeof window !== 'undefined',
  K = function(t) {
    let e = t.config,
      n = t.nextTick; F = n, _ = e.debug || !e.silent;
  },
  Q = Array.isArray,
  Y = Object.assign || w,
  Z = function(t, e) { let n = e(t); return c(t.root) && !/^(https?:)?\//.test(n) && (n = u(t.root, '/') + '/' + n), n; },
  tt = function(t, e) {
    let n = Object.keys(U.options.params),
      o = {},
      r = e(t); return v(t.params, function(t, e) { n.indexOf(e) === -1 && (o[e] = t); }), (o = U.params(o)) && (r += (r.indexOf('?') == -1 ? '?' : '&') + o), r;
  },
  et = function(t) {
    let e = [],
      n = x(t.url, t.params, e); return e.forEach(function(e) { delete t.params[e]; }), n;
  }; U.options = { url: '', root: null, params: {} }, U.transform = { template: et, query: tt, root: Z }, U.transforms = [ 'template', 'query', 'root' ], U.params = function(t) {
    let e = [],
      n = encodeURIComponent; return e.add = function(t, e) { f(e) && (e = e()), e === null && (e = ''), this.push(n(t) + '=' + n(e)); }, A(e, t), e.join('&').replace(/%20/g, '+');
  }, U.parse = function(t) { const e = document.createElement('a'); return document.documentMode && (e.href = t, t = e.href), e.href = t, { href: e.href, protocol: e.protocol ? e.protocol.replace(/:$/, '') : '', port: e.port, host: e.host, hostname: e.hostname, pathname: e.pathname.charAt(0) === '/' ? e.pathname : '/' + e.pathname, search: e.search ? e.search.replace(/^\?/, '') : '', hash: e.hash ? e.hash.replace(/^#/, '') : '' }; }; var nt = function(t) {
      return new e(function(e) {
        let n = new XDomainRequest(),
          o = function(o) {
            let r = o.type,
              i = 0; r === 'load' ? i = 200 : r === 'error' && (i = 500), e(t.respondWith(n.responseText, { status: i }));
          }; t.abort = function() { return n.abort(); }, n.open(t.method, t.getUrl()), t.timeout && (n.timeout = t.timeout), n.onload = o, n.onabort = o, n.onerror = o, n.ontimeout = o, n.onprogress = function() {}, n.send(t.getBody());
      });
    },
    ot = z && 'withCredentials' in new XMLHttpRequest(),
    rt = function(t, e) {
      if (z) {
        let n = U.parse(location.href),
          o = U.parse(t.getUrl()); o.protocol === n.protocol && o.host === n.host || (t.crossOrigin = !0, t.emulateHTTP = !1, ot || (t.client = nt));
      }e();
    },
    it = function(t, e) { l(t.body) ? t.headers.delete('Content-Type') : p(t.body) && t.emulateJSON && (t.body = U.params(t.body), t.headers.set('Content-Type', 'application/x-www-form-urlencoded')), e(); },
    ut = function(t, e) { let n = t.headers.get('Content-Type') || ''; p(t.body) && n.indexOf('application/json') === 0 && (t.body = JSON.stringify(t.body)), e(function(t) { return t.bodyText ? m(t.text(), function(e) { if ((n = t.headers.get('Content-Type') || '').indexOf('application/json') === 0 || S(e)) try { t.body = JSON.parse(e); } catch (e) { t.body = null; } else t.body = e; return t; }) : t; }); },
    st = function(t) {
      return new e(function(e) {
        let n,
          o,
          r = t.jsonp || 'callback',
          i = t.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2),
          u = null; n = function(n) {
            let r = n.type,
            s = 0; r === 'load' && u !== null ? s = 200 : r === 'error' && (s = 500), s && window[i] && (delete window[i], document.body.removeChild(o)), e(t.respondWith(u, { status: s }));
          }, window[i] = function(t) { u = JSON.stringify(t); }, t.abort = function() { n({ type: 'abort' }); }, t.params[r] = i, t.timeout && setTimeout(t.abort, t.timeout), (o = document.createElement('script')).src = t.getUrl(), o.type = 'text/javascript', o.async = !0, o.onload = n, o.onerror = n, document.body.appendChild(o);
      });
    },
    at = function(t, e) { t.method == 'JSONP' && (t.client = st), e(); },
    ct = function(t, e) { f(t.before) && t.before.call(this, t), e(); },
    ft = function(t, e) { t.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(t.method) && (t.headers.set('X-HTTP-Method-Override', t.method), t.method = 'POST'), e(); },
    pt = function(t, e) { v(Y({}, B.headers.common, t.crossOrigin ? {} : B.headers.custom, B.headers[s(t.method)]), function(e, n) { t.headers.has(n) || t.headers.set(n, e); }), e(); },
    ht = function(t) {
      return new e(function(e) {
        let n = new XMLHttpRequest(),
          o = function(o) { const r = t.respondWith('response' in n ? n.response : n.responseText, { status: n.status === 1223 ? 204 : n.status, statusText: n.status === 1223 ? 'No Content' : i(n.statusText) }); v(i(n.getAllResponseHeaders()).split('\n'), function(t) { r.headers.append(t.slice(0, t.indexOf(':')), t.slice(t.indexOf(':') + 1)); }), e(r); }; t.abort = function() { return n.abort(); }, t.progress && (t.method === 'GET' ? n.addEventListener('progress', t.progress) : /^(POST|PUT)$/i.test(t.method) && n.upload.addEventListener('progress', t.progress)), n.open(t.method, t.getUrl(), !0), t.timeout && (n.timeout = t.timeout), t.responseType && 'responseType' in n && (n.responseType = t.responseType), (t.withCredentials || t.credentials) && (n.withCredentials = !0), t.crossOrigin || t.headers.set('X-Requested-With', 'XMLHttpRequest'), t.headers.forEach(function(t, e) { n.setRequestHeader(e, t); }), n.onload = o, n.onabort = o, n.onerror = o, n.ontimeout = o, n.send(t.getBody());
      });
    },
    dt = function(t) {
      const n = require('got'); return new e(function(e) {
        let o,
          r = t.getUrl(),
          u = t.getBody(),
          s = t.method,
          a = {}; t.headers.forEach(function(t, e) { a[e] = t; }), n(r, { body: u, method: s, headers: a }).then(o = function(n) { const o = t.respondWith(n.body, { status: n.statusCode, statusText: i(n.statusMessage) }); v(n.headers, function(t, e) { o.headers.set(e, t); }), e(o); }, function(t) { return o(t.response); });
      });
    },
    lt = function(t) {
      function o(o) { return new e(function(e, s) { function a() { f(r = i.pop()) ? r.call(t, o, c) : (n('Invalid interceptor of type ' + typeof r + ', must be a function'), c()); } function c(n) { if (f(n))u.unshift(n); else if (p(n)) return u.forEach(function(e) { n = m(n, function(n) { return e.call(t, n) || n; }, s); }), void m(n, e, s); a(); }a(); }, t); } var r,
        i = [ k ],
        u = []; return p(t) || (t = null), o.use = function(t) { i.push(t); }, o;
    },
    mt = function(t) { const e = this; this.map = {}, v(t, function(t, n) { return e.append(n, t); }); }; mt.prototype.has = function(t) { return I(this.map, t) !== null; }, mt.prototype.get = function(t) { const e = this.map[I(this.map, t)]; return e ? e.join() : null; }, mt.prototype.getAll = function(t) { return this.map[I(this.map, t)] || []; }, mt.prototype.set = function(t, e) { this.map[q(I(this.map, t) || t)] = [ i(e) ]; }, mt.prototype.append = function(t, e) { const n = this.map[I(this.map, t)]; n ? n.push(i(e)) : this.set(t, e); }, mt.prototype.delete = function(t) { delete this.map[I(this.map, t)]; }, mt.prototype.deleteAll = function() { this.map = {}; }, mt.prototype.forEach = function(t, e) { const n = this; v(this.map, function(o, r) { v(o, function(o) { return t.call(e, o, r, n); }); }); }; const yt = function(t, e) {
      let n = e.url,
        o = e.headers,
        r = e.status,
        i = e.statusText; this.url = n, this.ok = r >= 200 && r < 300, this.status = r || 0, this.statusText = i || '', this.headers = new mt(o), this.body = t, c(t) ? this.bodyText = t : d(t) && (this.bodyBlob = t, L(t) && (this.bodyText = H(t)));
    }; yt.prototype.blob = function() { return m(this.bodyBlob); }, yt.prototype.text = function() { return m(this.bodyText); }, yt.prototype.json = function() { return m(this.text(), function(t) { return JSON.parse(t); }); }, Object.defineProperty(yt.prototype, 'data', { get() { return this.body; }, set(t) { this.body = t; } }); var vt = function(t) { this.body = null, this.params = {}, Y(this, t, { method: a(t.method || 'GET') }), this.headers instanceof mt || (this.headers = new mt(this.headers)); }; vt.prototype.getUrl = function() { return U(this); }, vt.prototype.getBody = function() { return this.body; }, vt.prototype.respondWith = function(t, e) { return new yt(t, Y(e || {}, { url: this.getUrl() })); }; let bt = { Accept: 'application/json, text/plain, */*' },
      gt = { 'Content-Type': 'application/json;charset=utf-8' }; return B.options = {}, B.headers = { put: gt, post: gt, patch: gt, delete: gt, common: bt, custom: {} }, B.interceptor = { before: ct, method: ft, jsonp: at, json: ut, form: it, header: pt, cors: rt }, B.interceptors = [ 'before', 'method', 'jsonp', 'json', 'form', 'header', 'cors' ], [ 'get', 'delete', 'head', 'jsonp' ].forEach(function(t) { B[t] = function(e, n) { return this(Y(n || {}, { url: e, method: t })); }; }), [ 'post', 'put', 'patch' ].forEach(function(t) { B[t] = function(e, n, o) { return this(Y(o || {}, { url: e, method: t, body: n })); }; }), M.actions = { get: { method: 'GET' }, save: { method: 'POST' }, query: { method: 'GET' }, update: { method: 'PUT' }, remove: { method: 'DELETE' }, delete: { method: 'DELETE' } }, typeof window !== 'undefined' && window.Vue && window.Vue.use(D), D;
});
