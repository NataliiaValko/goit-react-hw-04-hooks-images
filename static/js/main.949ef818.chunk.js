(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={backdrop:"Modal_backdrop__1jrDa",content:"Modal_content__1NzdB",button:"Modal_button__xEu6N"}},13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__TEViM",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__s0h2Z"}},14:function(e,t,a){e.exports={loader:"Loader_loader__1qs9I",loader__text:"Loader_loader__text__2gb8A"}},16:function(e,t,a){e.exports={container:"Container_container__3-OcI"}},18:function(e,t,a){e.exports={imageGallery__list:"ImageGallery_imageGallery__list__3JaI5"}},19:function(e,t,a){e.exports={button:"Button_button__3gINQ"}},27:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(5),r=a.n(c),o=(a(26),a(27),a(15)),s=a(4),l=a(10),i=(a(28),a(17)),_=a(16),u=a.n(_),j=a(2),m=function(e){var t=e.children;return Object(j.jsx)("div",{className:u.a.container,children:t})},b=a(6),d=a.n(b),g=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],o=c[1];return Object(j.jsx)("header",{className:d.a.header,children:Object(j.jsx)(m,{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),!r&&l.b.error("Please, enter your request!"),r&&t(r),r&&o("")},className:d.a.searchForm,children:[Object(j.jsx)("input",{className:d.a.searchForm__input,name:"queryToSearch",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.currentTarget.value.toLowerCase().trim())},value:r}),Object(j.jsx)("button",{type:"submit",className:d.a.searchForm__button,children:Object(j.jsx)(i.a,{className:d.a.icon})})]})})})},h="22065853-88fcaf807f7c22500af22ab22",O={fetchImage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(h,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}))}},p=a(13),f=a.n(p),x=function(e){var t=e.openModal,a=e.toggleOnLoading,n=e.webformatURL,c=e.largeImageURL,r=e.tags,o=void 0===r?"photo":r;return Object(j.jsx)("li",{className:f.a.ImageGalleryItem,children:Object(j.jsx)("img",{onClick:function(e){t(e.target.dataset.large),a()},src:n,"data-large":c,alt:o,className:f.a.ImageGalleryItem__image})})},y=a(18),I=a.n(y),v=function(e){var t=e.images,a=e.toggleOnLoading,n=e.openModal;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:I.a.imageGallery__list,children:t.map((function(e){var t=e.id,c=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(j.jsx)(x,{openModal:n,toggleOnLoading:a,webformatURL:c,largeImageURL:r,tags:o},t)}))})})},N=a(19),S=a.n(N),w=function(e){var t=e.handleIncrement;return Object(j.jsx)("button",{type:"button",className:S.a.button,onClick:t,children:"Load more"})},L=a(20),k=a(11),F=a.n(k),G=document.querySelector("#modal-root"),q=function(e){var t=e.onClose,a=e.children;Object(n.useEffect)((function(){window.addEventListener("keydown",o)}),[]);var r=function(){window.removeEventListener("keydown",o),t()},o=function(e){"Escape"===e.code&&r()};return Object(c.createPortal)(Object(j.jsx)("div",{className:F.a.backdrop,onClick:function(e){e.currentTarget===e.target&&r()},children:Object(j.jsxs)("div",{className:F.a.content,children:[Object(j.jsx)("button",{type:"button",className:F.a.button,onClick:r,children:Object(j.jsx)(L.a,{})}),a]})}),G)},C=a(21),E=a.n(C),M=a(14),R=a.n(M),A=function(){return Object(j.jsxs)("div",{className:R.a.loader,children:[Object(j.jsx)(E.a,{type:"Bars",color:"#5ab1e4",height:80,width:80}),Object(j.jsx)("p",{className:R.a.loader__text,children:"Loading..."})]})},B=a(7),U=a.n(B),T="idle",D="pending",J="resolved",P="rejected",Q="loading",V=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),i=Object(s.a)(r,2),_=i[0],u=i[1],b=Object(n.useState)(1),d=Object(s.a)(b,2),h=d[0],p=d[1],f=Object(n.useState)(""),x=Object(s.a)(f,2),y=x[0],I=x[1],N=Object(n.useState)(T),S=Object(s.a)(N,2),L=S[0],k=S[1],F=Object(n.useState)(null),G=Object(s.a)(F,2),C=G[0],E=G[1],M=Object(n.useState)(!1),R=Object(s.a)(M,2),B=R[0],V=R[1],z=Object(n.useState)(""),H=Object(s.a)(z,2),Y=H[0],W=H[1],Z=Object(n.useState)(!1),K=Object(s.a)(Z,2),X=K[0],$=K[1],ee=function(e,t){""!==e&&O.fetchImage(e,t).then((function(e){var t=e.hits,a=e.total;u([].concat(Object(o.a)(_),Object(o.a)(t))),E(a/12>500?500:a/12),t[0]?k(J):k(P),!t[0]&&I("We couldn\u2019t find anything =/. Change your request, please!"),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){k(P),I("".concat(e))}))};Object(n.useEffect)((function(){L!==T&&(L===Q&&(I(""),k(D),ee(a,h)),L!==Q&&(I(""),ee(a,h)))}),[a,h]);var te=function(){V(!B)},ae=function(){$(!X)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.a,{}),Object(j.jsx)(g,{onSubmit:function(e){u([]),c(e),p(1),k(Q),E(null)}}),Object(j.jsx)("section",{className:U.a.gallery,children:Object(j.jsxs)(m,{children:[L===T&&Object(j.jsx)("p",{className:U.a.gallery__request,children:"Please, enter your request!"}),L===P&&Object(j.jsxs)("p",{className:U.a.gallery__error,children:["Oops! ",y]}),L===J&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{className:U.a.gallery__text,children:['Results on request of "',a,'"']}),Object(j.jsx)(v,{images:_,openModal:function(e){te(),W(e)},toggleOnLoading:ae}),h<C&&Object(j.jsx)(w,{handleIncrement:function(){p(h+1)}})]}),L===D&&Object(j.jsx)(A,{})]})}),B&&Object(j.jsxs)(q,{onClose:function(){te(),W("")},children:[X&&Object(j.jsx)(A,{}),Object(j.jsx)("img",{onLoad:ae,src:Y,alt:"",className:U.a.modal__image})]})]})};r.a.render(Object(j.jsx)(n.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={header:"Searchbar_header__QA1f2",searchForm:"Searchbar_searchForm___D7mr",searchForm__input:"Searchbar_searchForm__input__1tdoV",searchForm__button:"Searchbar_searchForm__button__3-9Vx",icon:"Searchbar_icon__2BcYY"}},7:function(e,t,a){e.exports={gallery:"App_gallery__wsnBj",gallery__text:"App_gallery__text__2_5cC",gallery__request:"App_gallery__request__1HOER",gallery__error:"App_gallery__error__3qd-d",modal__image:"App_modal__image__33QsG"}}},[[50,1,2]]]);
//# sourceMappingURL=main.949ef818.chunk.js.map