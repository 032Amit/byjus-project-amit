(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(164)},154:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),o=a.n(r),l=a(39),c=a(49),s=a(222),d=a(223),m=a(20),g=a(68),f=a(97),u=a(89),p=a(38),h="GET_COURSE_DETAILS",b="GET_COURSE_DETAILS_SUCCESS",E=Object(p.fromJS)({courseDetails:""});var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return e.set("courseDetails",t.courseDetails);default:return e}},v=Object(u.combineReducers)({AppReducer:y}),w=a(24),O=a.n(w),j=a(98),x=a(35),S=function(e){return{type:b,courseDetails:e}},C=(a(134),[{type:"On Track",data:[{title:"CBSE: Grade 5 Maths - Algebra"},{title:"CBSE: Grade 4 Maths - Algebra"},{title:"CBSE: Grade 3 Maths - Algebra"},{title:"CBSE: Grade 2 Maths - Algebra"}]},{type:"Delayed",data:[{title:"CBSE: Grade 5 English"},{title:"CBSE: Grade 4 English"},{title:"CBSE: Grade 3 English"},{title:"CBSE: Grade 2 English"}]},{type:"On Hold",data:[{title:"CBSE: Grade 5 Science"},{title:"CBSE: Grade 4 Science"},{title:"CBSE: Grade 3 Science"},{title:"CBSE: Grade 2 Science"}]}]);function k(){return C}var L=O.a.mark(T),W=O.a.mark(B);function T(){var e;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(x.b)(k);case 3:return e=t.sent,t.next=6,Object(x.c)(S(e));case 6:t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}},L,this,[[0,8]])}function B(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.d)(h,T);case 2:case"end":return e.stop()}},W,this)}var A=[B],D=O.a.mark(H);function H(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)(Object(j.a)(A.map(function(e){return e()})));case 2:case"end":return e.stop()}},D,this)}var z=a(90),R=a(56),G=a(57),N=a(65),P=a(58),I=a(66),M=(a(154),a(36)),U=a(37),_=a(99),J=a(91),F=a(5),K=a(188),X=a(202),$=a(203),q=a(204),Q=a(205),V=a(206),Y=a(207),Z=a(208),ee=a(213),te=a(200),ae=a(218),ne=a(219),ie=a(221),re=a(225),oe=a(195),le=a(209),ce=a(210),se=a(211),de=a(227),me=a(212),ge=a(226),fe=a(214),ue=a(215),pe=a(229),he=a(216),be=a(217),Ee=a(196),ye=a(220),ve=a(191),we=a(194),Oe=a(199),je=a(92),xe=a.n(je),Se=a(59),Ce=a.n(Se),ke=a(158),Le=a(93),We=a.n(Le),Te=a(197),Be=a(201),Ae=Object(K.a)(function(e){return{media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:ke.a[500]}}});function De(e){var t=Ae(),a=e.listData,r=e.type,o=Object(n.useState)(""),l=Object(U.a)(o,2),c=l[0],s=l[1];Object(n.useEffect)(function(){d()},[r]);var d=function(){"On Track"===r?s("3px solid rgb(76, 175, 80)"):"Delayed"===r?s("3px solid rgb(230, 56, 7)"):"On Hold"===r&&s("3px solid rgb(243, 217, 51)")};return a.map(function(e,a){return i.a.createElement("div",{style:{borderTop:c,marginTop:10}},i.a.createElement(ve.a,{className:t.root},i.a.createElement(we.a,{action:i.a.createElement(Ee.a,{"aria-label":"settings"},i.a.createElement(Te.a,null)),title:e.title,titleTypographyProps:{variant:"subtitle2"},style:{margin:0,paddingTop:0,paddingRight:10,paddingLeft:10,paddingBottom:0,textAlign:"start"}}),i.a.createElement(Oe.a,{style:{paddingBottom:0}},i.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:8}},i.a.createElement("div",{style:{flexDirection:"row",justifyContent:"flex-start",textAlign:"start",display:"flex",alignItems:"center"}},i.a.createElement("img",{src:We.a,alt:"logo",className:t.logo,style:{width:20,height:20}}),i.a.createElement("img",{src:Ce.a,alt:"logo",className:t.logo,style:{width:20,height:20,marginLeft:10}}),i.a.createElement(te.a,{style:{width:15,height:15,marginLeft:10,fill:"#833589"}})),i.a.createElement("div",{style:{flexDirection:"row",justifyContent:"flex-end"}},i.a.createElement("div",{style:{flexDirection:"row",display:"flex",alignItems:"center",textAlign:"center"}},i.a.createElement("div",{style:{display:"contents",flexDirection:"row",fontSize:10}},i.a.createElement(Be.a,{style:{width:15,height:15,marginRight:5}}),i.a.createElement("text",null,"21 nov 2020")),i.a.createElement("div",{style:{backgroundColor:"blue",marginLeft:10,width:45,borderRadius:3,fontSize:12,color:"#fff"}},"75%")))))))})}var He=Object(K.a)(function(e){return{root:{display:"flex"},paper:{background:"#833589",borderRight:"none"},appBar:{zIndex:e.zIndex.drawer+1},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:180,flexShrink:0},drawerPaper:{width:180},drawerContainer:{overflow:"none"},drawerOpen:{width:180,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},toolbar:Object(J.a)({display:"flex",alignItems:"center",justifyContent:"flex-end"},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}});function ze(e){return{id:"scrollable-force-tab-".concat(e),"aria-controls":"scrollable-force-tabpanel-".concat(e)}}function Re(e){var t=e.children,a=e.value,n=e.index,r=Object(_.a)(e,["children","value","index"]);return i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"scrollable-force-tabpanel-".concat(n),"aria-labelledby":"scrollable-force-tab-".concat(n)},r),a===n&&i.a.createElement(re.a,{p:3},i.a.createElement(oe.a,null,t)))}function Ge(e){var t,a;console.log(e);var r=e.courseData.courseDetails,o=He(),l=Object(n.useState)(!1),c=Object(U.a)(l,2),s=c[0],d=c[1],m=Object(n.useState)(0),g=Object(U.a)(m,2),f=g[0],u=(g[1],Object(n.useState)(2)),p=Object(U.a)(u,2),h=p[0],b=p[1],E=Object(n.useState)(window.innerWidth+"px"),y=Object(U.a)(E,2),v=y[0],w=y[1],O=Object(n.useState)(2),j=Object(U.a)(O,2),x=j[0],S=j[1];Object(n.useEffect)(function(){console.log(r)},[r]),Object(n.useEffect)(function(){return window.addEventListener("resize",C),function(){return window.removeEventListener("resize",C)}});var C=function(){w(window.innerWidth)};return i.a.createElement("div",{className:o.root},i.a.createElement(le.a,null),i.a.createElement(ce.a,{position:"fixed",className:Object(F.a)(o.appBar,Object(M.a)({},o.appBarShift,s)),style:{backgroundColor:"#fafafa",color:"#000",boxShadow:"0px 1px 1px -1px"}},i.a.createElement(se.a,{style:{padding:10,alignItems:"inherit",justifyContent:"space-between"}},i.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},i.a.createElement("img",{src:xe.a,alt:"logo",className:o.logo,style:{marginLeft:-5}}),i.a.createElement("div",{style:{flexDirection:"row",textAlign:"start"}},i.a.createElement(oe.a,{style:{fontWeight:600,marginLeft:40},variant:"subtitle1",noWrap:!0},"CBSE: Grade 5 Maths - Algebra"),i.a.createElement(de.a,{variant:"scrollable",scrollButtons:"on",inkBarStyle:{background:"blue"},TabIndicatorProps:{style:{background:"#833589"}},value:f,"aria-label":"scrollable force tabs example",style:v<=760||window.innerWidth<=524?{minHeight:24,paddingTop:5,width:150}:{minHeight:24,paddingTop:5,width:475}},i.a.createElement(me.a,Object.assign({label:"Task"},ze(0),{style:{margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10,color:"#000",fontWeight:"bold"}})),i.a.createElement(me.a,Object.assign({label:"Conversation"},ze(1),{style:{margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10,marginLeft:20}})),i.a.createElement(me.a,Object.assign({label:"Files"},ze(2),{style:{margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10,marginLeft:20}})),i.a.createElement(me.a,Object.assign({label:"Resources"},ze(2),{style:{margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10,marginLeft:20}})),i.a.createElement(me.a,Object.assign({label:"Status"},ze(2),{style:{margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10,marginLeft:20}}))))),i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement(ee.a,{style:{fill:"#833589"}}),i.a.createElement(te.a,{style:{fill:"#833589",marginLeft:20}}),i.a.createElement("img",{src:Ce.a,alt:"logo",className:o.logo,style:{width:20,height:20,marginLeft:20}}),i.a.createElement("text",{style:{marginLeft:5}},"Amit Kumar")))),i.a.createElement(ge.a,{variant:"permanent",className:Object(F.a)("".concat(o.drawer," ").concat(o.drawerPaper),(t={},Object(M.a)(t,o.drawerOpen,s),Object(M.a)(t,o.drawerClose,!s),t)),classes:{paper:Object(F.a)((a={},Object(M.a)(a,"".concat(o.drawerOpen," ").concat(o.paper),s),Object(M.a)(a,"".concat(o.drawerClose," ").concat(o.paper),!s),a))}},i.a.createElement(se.a,null),i.a.createElement("div",{className:o.drawerContainer},i.a.createElement(fe.a,null),i.a.createElement(ue.a,null,["Home","Search","Courses","Assignment","Share","Track","Assessment"].map(function(e,t){return i.a.createElement(pe.a,{button:!0,key:e,onClick:function(){return function(e){console.log(e),S(e)}(t)},selected:x===t,style:x===t?{backgroundColor:"#fff",borderTopLeftRadius:5,borderBottomLeftRadius:5,padding:15}:{padding:15}},i.a.createElement(he.a,null,function(e,t){return"Home"===e?i.a.createElement(X.a,{style:x===t?{fill:"#833589"}:{fill:"#fff"}}):"Search"===e?i.a.createElement($.a,{style:x===t?{fill:"#833589"}:{fill:"#fff"}}):"Courses"===e?i.a.createElement(q.a,{style:x===t?{fill:"#833589"}:{fill:"#fff"}}):"Assignment"===e?i.a.createElement(Q.a,{style:x===t?{fill:"#833589"}:{fill:"#fff"}}):"Assessment"===e?i.a.createElement(V.a,{style:x===t?{fill:"#833589"}:{fill:"#fff"}}):"Share"===e?i.a.createElement(Y.a,{style:x===t?{fill:"#833589"}:{fill:"#fff"}}):"Track"===e?i.a.createElement(Z.a,{style:x===t?{fill:"#833589"}:{fill:"#fff"}}):void 0}(e,t)),i.a.createElement(be.a,{primary:e,style:x===t?{color:"#000"}:{color:"#fff"}}))})))),i.a.createElement("div",{className:o.paperAnchorLeft8},!s&&i.a.createElement(Ee.a,{color:"inherit","aria-label":"open drawer",onClick:function(){d(!0)},edge:"start",style:{marginTop:300,marginLeft:0,height:70,width:20,backgroundColor:"#d8d6d8",borderRadius:5}},i.a.createElement(ae.a,null)),s&&i.a.createElement(Ee.a,{color:"inherit","aria-label":"open drawer",onClick:function(){d(!1)},edge:"start",style:{marginTop:300,marginLeft:0,height:70,width:20,backgroundColor:"#d8d6d8",borderRadius:0}},i.a.createElement(ne.a,null))),i.a.createElement("main",{className:o.content,style:{padding:0,marginLeft:11,marginTop:10}},i.a.createElement("div",{className:o.toolbar}),i.a.createElement(de.a,{scrollable:!0,scrollButtons:"on",TabIndicatorProps:{style:{background:"#833589"}},value:h,onChange:function(e,t){b(t)},"aria-label":"simple tabs example",style:{minHeight:24,paddingTop:15}},i.a.createElement(me.a,Object.assign({label:"List"},ze(0),{style:0===h?{color:"#000",fontWeight:"bold",margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10}:{margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10}})),i.a.createElement(me.a,Object.assign({label:"Gantt"},ze(1),{style:1===h?{color:"#000",fontWeight:"bold",margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10,marginLeft:20}:{margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10,marginLeft:20}})),i.a.createElement(me.a,Object.assign({label:"Board"},ze(2),{style:2===h?{color:"#000",fontWeight:"bold",margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10,marginLeft:20}:{margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10,marginLeft:20}})),i.a.createElement(me.a,Object.assign({label:"Calendar"},ze(3),{style:3===h?{color:"#000",fontWeight:"bold",margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10,marginLeft:20}:{margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10,marginLeft:20}})),i.a.createElement(me.a,Object.assign({label:"Pivot"},ze(4),{style:4===h?{color:"#000",fontWeight:"bold",margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10,marginLeft:20}:{margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10,marginLeft:20}})),i.a.createElement(me.a,Object.assign({label:"Process"},ze(5),{style:5===h?{color:"#000",fontWeight:"bold",margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10,marginLeft:20}:{margin:0,padding:0,minHeight:10,minWidth:55,fontSize:10,marginLeft:20}}))),i.a.createElement(Re,{value:h,index:0},"Coming Soon..."),i.a.createElement(Re,{value:h,index:1,style:{justifyContent:"center",textAlign:"center"}},"Coming Soon..."),i.a.createElement(Re,{value:h,index:2},i.a.createElement(ye.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"flex-start"},r&&r.map(function(e){return i.a.createElement(ye.a,{item:!0,xs:12,sm:6,md:4,key:r.indexOf(e)},i.a.createElement(ve.a,{style:{backgroundColor:"#efededde"}},i.a.createElement(we.a,{action:i.a.createElement(Ee.a,{"aria-label":"settings"},i.a.createElement(ie.a,null)),title:e.type,titleTypographyProps:{variant:"subtitle2"},style:{margin:0,paddingTop:0,paddingRight:25,paddingLeft:25,paddingBottom:0,textAlign:"start"}}),i.a.createElement(Oe.a,{style:{marginTop:0,paddingTop:0}},i.a.createElement(De,{listData:e.data,type:e.type}))))}))),i.a.createElement(Re,{value:h,index:3},"Coming Soon..."),i.a.createElement(Re,{value:h,index:4},"Coming Soon..."),i.a.createElement(Re,{value:h,index:5},"Coming Soon...")))}var Ne=function(e){function t(){return Object(R.a)(this,t),Object(N.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){var e=Object(z.a)(O.a.mark(function e(){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.loadCourseDetails,e.next=3,t();case 3:console.log(this.props);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.props.courseDetails&&i.a.createElement("div",{className:"App"},i.a.createElement(Ge,{courseData:this.props}))}}]),t}(n.Component),Pe=Object(c.connect)(function(e){return{courseDetails:e.getIn(["AppReducer","courseDetails"])}},function(e){return{loadCourseDetails:function(){return e({type:h})}}})(Ne),Ie=function(e){function t(){return Object(R.a)(this,t),Object(N.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){return i.a.createElement("h2",null,"404 Page Not Found...")}}]),t}(n.Component),Me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ue(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var _e=Object(m.a)(),Je=Object(g.routerMiddleware)(_e),Fe=Object(f.a)(),Ke=l.c;console.log("=---here--");var Xe=Object(l.d)(Object(g.connectRouter)(_e)(v),Ke(Object(l.a)(Je,Fe)));console.log("=---heress--"),Fe.run(H),console.log(_e),o.a.render(i.a.createElement(c.Provider,{store:Xe},i.a.createElement(g.ConnectedRouter,{history:_e},i.a.createElement(s.a,null,i.a.createElement(d.a,{path:"/",component:Pe}),i.a.createElement(d.a,{component:Ie})))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");Me?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ue(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Ue(t,e)})}}()},59:function(e,t,a){e.exports=a.p+"static/media/malePP.299c7a58.png"},92:function(e,t,a){e.exports=a.p+"static/media/byjusLogo.b8b8e410.PNG"},93:function(e,t,a){e.exports=a.p+"static/media/femalePP.09031aff.png"}},[[108,2,1]]]);
//# sourceMappingURL=main.fb792f48.chunk.js.map