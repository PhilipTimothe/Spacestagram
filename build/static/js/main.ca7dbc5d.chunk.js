(this.webpackJsonpspacestagram=this.webpackJsonpspacestagram||[]).push([[0],{30:function(t,e,n){},34:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(8),o=n.n(a),s=(n(30),n(11)),i=n(12),l=n(21),d=n(20),h=n(18),j=n(22),g=n(16),u=n(24),b=n(17),x=n(1),p=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={pod:[],startDate:new Date,endDate:new Date,toggle:!1,show:!1,currentPhoto:[]},t.toggle=function(e){var n=t.state.pod[e.target.id].toggle,r=Object.assign({},t.state.pod);!1===n&&(r[e.target.id].toggle=!0,t.setState({pod:Object.values(r)})),!0===n&&(r[e.target.id].toggle=!1,t.setState({pod:Object.values(r)}))},t.renderModal=function(e){var n=new Date(t.state.currentPhoto.date),r="".concat(n.getFullYear(),"-")+"0".concat(n.getMonth()+1).slice(-2)+"-"+"0".concat(n.getDate()).slice(-2);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(b.a,{show:t.state.show,onHide:function(){return t.setState({show:!1})},animation:!1,centered:!0,children:[Object(x.jsx)(b.a.Header,{closeButton:!0,children:Object(x.jsx)(b.a.Title,{children:t.state.currentPhoto.title})}),Object(x.jsxs)(b.a.Body,{children:[Object(x.jsx)("p",{style:{marginBottom:"0"},children:t.state.currentPhoto.explanation}),Object(x.jsx)("br",{style:{borderBottom:"1rem"}}),Object(x.jsx)("h6",{children:"Photo of the day Date:"}),Object(x.jsx)("p",{children:r})]})]})})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=new Date(this.state.startDate),n="".concat(e.getFullYear(),"-")+"0".concat(e.getMonth()+1).slice(-2)+"-"+"0".concat(e.getDate()-5).slice(-2),r=new Date(this.state.endDate),c="".concat(r.getFullYear(),"-")+"0".concat(r.getMonth()+1).slice(-2)+"-"+"0".concat(r.getDate()).slice(-2);fetch("https://api.nasa.gov/planetary/apod?api_key=".concat("PG7HPAShBt539mvrcYnAZ0zWukaNzVaLiLfxNPfQ","&start_date=").concat(n,"&end_date=").concat(c)).then((function(t){return t.json()})).then((function(e){t.setState({pod:e}),t.state.pod.map((function(t){return t.toggle=!1})),t.setState({pod:t.state.pod.reverse()})}))}},{key:"renderPhotos",value:function(){var t=this;return Object(x.jsx)(x.Fragment,{children:this.state.pod.map((function(e,n){return Object(x.jsx)(j.a,{children:Object(x.jsx)(g.a,{sm:!0,children:Object(x.jsxs)(h.a,{className:"photocard",style:{width:"24rem",height:"26rem"},children:[Object(x.jsx)(h.a.Img,{variant:"top",className:"cardImg",src:e.hdurl,style:{paddingBottom:".80rem",width:"25rem",height:"20rem",overflow:"hidden",objectFit:"cover"}}),Object(x.jsxs)(h.a.Body,{children:[Object(x.jsx)(h.a.Text,{style:{textAlign:"center"},children:e.title}),Object(x.jsx)("div",{children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(g.a,{style:{textAlign:"left"},children:Object(x.jsx)(u.a,{variant:"outline-dark",id:n,onClick:function(e){return t.setState({show:!0,currentPhoto:t.state.pod[n]})},children:"Explore"})}),Object(x.jsx)(g.a,{style:{textAlign:"right"},children:Object(x.jsx)(u.a,{variant:"light",className:"heart",id:n,onClick:function(e){return t.toggle(e)},style:{outline:"none",borderStyle:"none",backgroundColor:"transparent"},children:t.renderLike(e)})})]})})]})]},n)})},n)}))})}},{key:"renderLike",value:function(t){return!1===t.toggle?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("svg",{style:{width:"1.25rem",height:"1.25rem"},xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"bi bi-heart",viewBox:"0 0 16 16",children:Object(x.jsx)("path",{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"})})," ","Like"]}):!0===t.toggle?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("svg",{style:{color:"red",width:"1.25rem",height:"1.25rem"},xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"bi bi-heart-fill",viewBox:"0 0 16 16",children:Object(x.jsx)("path",{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})," ","Unlike"]}):void 0}},{key:"render",value:function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(j.a,{children:Object(x.jsx)(g.a,{children:Object(x.jsxs)("div",{style:{textAlign:"-webkit-center",paddingTop:"5rem"},children:[Object(x.jsxs)("div",{style:{width:"35%",padding:"2rem",backgroundColor:"#F8F8F8"},children:[Object(x.jsx)("h1",{children:"Spacestagram"}),this.renderPhotos()]}),this.renderModal()]})})})})}}]),n}(r.Component),O=p;n(34),n(35);var m=function(){return Object(x.jsx)(O,{})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),a(t),o(t)}))};n(36).config(),o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(m,{})}),document.getElementById("root")),v()}},[[40,1,2]]]);
//# sourceMappingURL=main.ca7dbc5d.chunk.js.map