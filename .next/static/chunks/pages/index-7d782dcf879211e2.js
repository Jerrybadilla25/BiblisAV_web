(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(4135)}])},4135:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return C}});var d=c(7568),e=c(4051),f=c.n(e),g=c(5893),h=c(7294),i=c(9008),j=c.n(i);c(5675);var k=function(){return(0,g.jsxs)("div",{className:"header ",children:[(0,g.jsx)("div",{children:(0,g.jsx)("i",{class:"bi bi-justify"})}),(0,g.jsx)("div",{children:(0,g.jsx)("img",{src:"/images/logo1.png",alt:"Biblia AV",className:"logo1"})})]})},l=k,m=c(4298),n=c.n(m),o=function(){return(0,g.jsx)("div",{className:"footer",children:(0,g.jsxs)("div",{className:"footer-row",children:[(0,g.jsxs)("h6",{className:"text-footer-3",children:[(0,g.jsx)("span",{className:"text-footer-1",children:"Biblia"}),"AV"]}),(0,g.jsxs)("h6",{children:[" ",(0,g.jsx)("span",{className:"text-footer-2",children:"Aliento de Vida"})]}),(0,g.jsx)("i",{class:"bi bi-facebook text-footer-icon",children:(0,g.jsx)("a",{href:""})})]})})},p=o,q=function(a){return(0,g.jsxs)("div",{children:[(0,g.jsxs)(j(),{children:[(0,g.jsx)("title",{children:"Biblia AV"}),(0,g.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"}),(0,g.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossorigin:"anonymous"}),(0,g.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,g.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0})]}),(0,g.jsx)(l,{}),(0,g.jsx)("div",{children:a.children}),(0,g.jsx)(p,{}),(0,g.jsx)(n(),{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",integrity:"sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2",crossorigin:"anonymous"})]})},r=q,s=function(a){var b=a.books,c=a.selectBook,d=a.charterNumber,e=a.atras,f=a.getCharter;return null===d?(0,g.jsx)("div",{className:"box-libro",children:b&&(0,g.jsxs)("div",{children:[(0,g.jsx)("h5",{className:"text-center text-2",children:"Libros"}),(0,g.jsx)("ul",{className:"ul-libro",children:b.map(function(a){return(0,g.jsx)("div",{className:"ul-div",children:(0,g.jsxs)("li",{onClick:function(){return c(a._id)},className:"list-per",children:[" ",(0,g.jsx)("span",{className:"text-charter"}),a.book]})},a._id)})})]})}):(0,g.jsxs)("div",{className:"box-libro pt-3",children:[(0,g.jsx)("h5",{className:"text-center ",children:d.book}),(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsx)("div",{className:"px-3 d-flex align-items-center",children:(0,g.jsx)("i",{className:"bi bi-arrow-left icon20",onClick:e})}),(0,g.jsx)("div",{className:"px-3",children:(0,g.jsx)("h6",{className:"text-center text-2",children:"Capitulos"})})]}),(0,g.jsx)("div",{className:"d-flex-charter",children:d.capitulos.map(function(a,b){return(0,g.jsx)("div",{className:"charter-item",onClick:function(){return f(a)},children:(0,g.jsx)("h6",{children:b+1})},a)})})]})},t=s,u=function(a){var b=a.charterView,c=a.changeNavView,d=a.decks,e=a.getCharter;return null===b?(0,g.jsx)("div",{children:"vacio"}):(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{children:(0,g.jsxs)("div",{className:"d-flex justify-content-evenly box-social ",children:[(0,g.jsxs)("h6",{className:"social-1",children:[(0,g.jsx)("span",{className:"mx-2",children:"Vistas"})," ",b.like]}),(0,g.jsxs)("h6",{className:"social-1",children:[(0,g.jsx)("span",{className:"mx-2",children:"Likes"}),b.view]})]})}),(0,g.jsx)("div",{children:d&&(0,g.jsxs)("div",{className:"d-flex justify-content-evenly box-deck",children:[(0,g.jsxs)("h6",{onClick:function(){return e(d[0]._id)},children:[(0,g.jsx)("i",{class:"bi bi-caret-left"})," ",(0,g.jsx)("span",{children:d[0].charter})]}),(0,g.jsxs)("h6",{className:"text-1",onClick:c,children:[b.charter," ",(0,g.jsx)("i",{class:"bi bi-caret-down-fill"})," "]}),(0,g.jsxs)("h6",{onClick:function(){return e(d[1]._id)},children:[" ",(0,g.jsx)("span",{children:d[1].charter})," ",(0,g.jsx)("i",{class:"bi bi-caret-right"})," "]})]})}),(0,g.jsxs)("div",{className:"body-per-1",children:[(0,g.jsx)("h1",{className:"text-1 mb-5",children:b.charter}),b.verses.map(function(a){return(0,g.jsx)("div",{children:(0,g.jsxs)("p",{className:"text-verses",children:[" ",(0,g.jsx)("span",{className:"me-2 text-2",children:a.numero})," ",a.versiculo]})},a._id)}),(0,g.jsx)("div",{className:"box-like",children:(0,g.jsxs)("div",{className:"d-flex justify-content-center",children:[(0,g.jsx)("h6",{children:"Me gusta"}),(0,g.jsx)("i",{class:"bi bi-heart"})]})}),(0,g.jsx)("h2",{className:"text-2 text-center py-3",children:b.testament})]})]})},v=u,w=function(a){var b=a.books,c=(a.getCharter,a.changeNavView);return null===b?(0,g.jsx)("div",{children:"hada"}):(0,g.jsxs)("div",{className:"nav-barra",children:[(0,g.jsx)("div",{className:"mx-3 mt-3",children:(0,g.jsxs)("form",{action:"",className:"d-flex justify-content-between",children:[(0,g.jsx)("input",{type:"text",className:"input-per",placeholder:"Digite libro, palabra, versiculo"}),(0,g.jsx)("button",{className:"btn btn-per px-4",children:(0,g.jsx)("i",{className:"bi bi-search"})})]})}),(0,g.jsx)("div",{className:"mx-3 mt-3",children:(0,g.jsxs)("select",{className:"selection-per",children:[(0,g.jsx)("option",{value:"",className:"option-per",children:"Reina Valera 1960"}),(0,g.jsx)("option",{value:"",className:"option-per",children:"Version del Oso 1906"})]})}),(0,g.jsxs)("div",{className:"d-flex justify-content-between px-3 pt-3",children:[(0,g.jsxs)("div",{className:"d-flex justify-content-between",onClick:c,children:[(0,g.jsx)("p",{className:"mx-2",children:"Biblia, Libros"}),(0,g.jsx)("i",{className:"bi bi-journal-arrow-down"})]}),(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsx)("p",{className:"mx-2",children:"Tama\xf1o fuente"}),(0,g.jsx)("i",{className:"bi bi-file-font"})]})]})]})},x=w,y=function(a){var b=a.books,c=a.changeNavView,d=a.selectBook,e=(0,h.useState)(null),f=e[0],i=e[1],j=(0,h.useState)(null),k=j[0],l=j[1],m=(0,h.useState)("vacio"),n=m[0],o=m[1];(0,h.useEffect)(function(){p()},[]);var p=function(){var a=b.filter(function(a){return"Antiguo testamento"===a.testament}),c=b.filter(function(a){return"Nuevo testamento"===a.testament});i(a),l(c),o("Books")};return"vacio"===n?(0,g.jsx)("div",{children:"vacio"}):"Books"===n?(0,g.jsx)("div",{className:"contenedor-libro",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsxs)("div",{className:"col-sm-5",children:[(0,g.jsx)("h4",{children:"Antiguo testamento"}),f.map(function(a){return(0,g.jsx)("div",{onClick:function(){return d(a._id)},children:(0,g.jsx)("h6",{children:a.book})},a._id)})]}),(0,g.jsxs)("div",{className:"col-sm-5",children:[(0,g.jsx)("h4",{children:"Nuevo testamento"}),k.map(function(a){return(0,g.jsx)("div",{onClick:function(){return d(a._id)},children:(0,g.jsx)("h6",{children:a.book})},a._id)})]}),(0,g.jsx)("div",{className:"col-sm-1 ",children:(0,g.jsx)("button",{className:"btn btn-per",onClick:c,children:(0,g.jsx)("i",{class:"bi bi-x-lg icon-text-danger"})})})]})}):void 0},z=y,A=function(a){var b=a.charterNumber,c=a.rewCharter,d=a.getCharter;return(0,g.jsx)("div",{className:"contenedor-libro vh-100",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsxs)("div",{className:"d-flex justify-content-between border-buton",children:[(0,g.jsx)("h5",{className:"text-center",children:b.book}),(0,g.jsx)("button",{className:"btn btn-per",onClick:c,children:(0,g.jsx)("i",{class:"bi bi-x-lg icon-text-danger"})})]}),(0,g.jsx)("div",{className:"charter-number",children:b.capitulos.map(function(a,b){return(0,g.jsx)("div",{onClick:function(){return d(a)},children:(0,g.jsx)("p",{children:b+1})},a)})})]})})},B=A;function C(){var a="http://bibliaav",b=(0,h.useState)(!1),c=(b[0],b[1],(0,h.useState)("Reina_Valera_1960")),e=c[0];c[1];var i=(0,h.useState)(null),j=i[0],k=i[1],l=(0,h.useState)(null),m=l[0],n=l[1],o=(0,h.useState)(!0);o[0],o[1];var p=(0,h.useState)([{_id:"6274668957aefaff092e32d4",charter:"Apocalipsis 22"},{_id:"62732467a09db64c94514890",charter:"Genesis 2"}]),q=p[0],s=p[1],u=(0,h.useState)(null),w=u[0],y=u[1],A=(0,h.useState)(!0),C=A[0],D=A[1],E=(0,h.useState)(!0),F=E[0],G=E[1],H=(0,h.useState)(!0),I=H[0],J=H[1];(0,h.useEffect)(function(b){function c(){return(c=(0,d.Z)(f().mark(function b(c){var d,e;return f().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,b.next=3,fetch("".concat(a,"/api/getBooks/getbook"),{method:"POST",body:JSON.stringify({version:c}),headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return d=b.sent,b.next=6,d.json();case 6:k((e=b.sent).arrayBook),n(e.char),b.next=14;break;case 11:b.prev=11,b.t0=b.catch(0),console.log(b.t0);case 14:case"end":return b.stop()}},b,null,[[0,11]])}))).apply(this,arguments)}!function(a){return c.apply(this,arguments)}()},[]);var K,L=function(a){y(j.find(function(b){return b._id===a})),J(!1)},M=function(){y(null)},N=function(){J(!0)},O=function(){D(!1),G(!1)},P=(K=(0,d.Z)(f().mark(function b(c){var d,g;return f().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,b.next=3,fetch("".concat(a,"/api/getBooks/getCharter"),{method:"POST",body:JSON.stringify({version:e,idCharter:c}),headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return d=b.sent,b.next=6,d.json();case 6:g=b.sent,console.log(g),n(g.data1),s(g.deck.deck),y(null),D(!0),J(!0),G(!0),b.next=19;break;case 16:b.prev=16,b.t0=b.catch(0),console.log(b.t0);case 19:case"end":return b.stop()}},b,null,[[0,16]])})),function(a){return K.apply(this,arguments)});return(0,g.jsxs)(r,{children:[C?(0,g.jsx)(x,{changeNavView:O}):(0,g.jsx)(g.Fragment,{children:I?(0,g.jsx)(z,{books:j,changeNavView:O,selectBook:L}):(0,g.jsx)(B,{charterNumber:w,rewCharter:N,getCharter:P})}),(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-sm-12 col-md-3 col-xl-2 display-none",children:(0,g.jsx)(t,{books:j,selectBook:L,charterNumber:w,atras:M,getCharter:P})}),(0,g.jsx)("div",{className:"col-sm-12 col-md-7 col-xl-8 body-per",children:F?(0,g.jsx)(v,{charterView:m,changeNavView:O,decks:q,getCharter:P}):(0,g.jsx)("h6",{})}),(0,g.jsx)("div",{className:"col-sm-12 col-md-2 col-xl-2 box-libro display-none"})]})]})}}},function(a){a.O(0,[758,774,888,179],function(){var b;return a(a.s=5728)}),_N_E=a.O()}])