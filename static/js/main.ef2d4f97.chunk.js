(this["webpackJsonphooks-app"]=this["webpackJsonphooks-app"]||[]).push([[0],{42:function(e,t,n){e.exports=n(69)},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(37),l=n.n(o),c=n(8),u=n(7),s=n(12),i=n.n(s),m=n(14),p=n(15);function d(e){var t=e.title,n=e.body,a=e.id,o=Object(u.g)();return r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement(c.b,{to:"".concat(o.url,"/").concat(a)},t)),r.a.createElement("p",null,n))}var E=n(40),h=n.n(E).a.create({baseURL:"https://jsonplaceholder.typicode.com/"}),f=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/posts");case 2:if(t=e.sent,console.log(t),!(t&&200===t.status)){e.next=7;break}return e.abrupt("return",t.data);case 7:throw new Error(t.statusText);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var v=function(){var e=Object(p.a)({promiseFn:f}),t=e.data,n=e.error;return e.isPending?"Loading...":n?"Something went wrong: ".concat(n.message):r.a.createElement(r.a.Fragment,null,t&&t.map((function(e){return r.a.createElement(d,{key:e.id,title:e.title,body:e.body,id:e.id})})))},b=function(){var e=Object(m.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.postId,e.next=3,h.get("/posts/".concat(n));case 3:if(a=e.sent,console.log(a),!(a&&200===a.status)){e.next=8;break}return e.abrupt("return",a.data);case 8:throw new Error(a.statusText);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function g(e){var t=e.title,n=e.body;return r.a.createElement("div",null,r.a.createElement("h4",null,t),r.a.createElement("p",null,n))}var w=function(){var e=Object(u.f)().postId,t=Object(p.a)({promiseFn:b,postId:e}),n=t.data,a=t.error;return t.isPending?r.a.createElement("p",null,"Loading..."):a?r.a.createElement("p",null,"Something went wrong: ",a):r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(g,{title:n.title,body:n.body}))};var y=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/posts"},"Posts")))),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/posts/:postId"},r.a.createElement(w,null)),r.a.createElement(u.a,{path:"/posts"},r.a.createElement(v,null)),r.a.createElement(u.a,{path:"/"},r.a.createElement(k,null)))))};function k(){return r.a.createElement("h2",null,"Home")}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.ef2d4f97.chunk.js.map