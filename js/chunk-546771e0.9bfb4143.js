(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-546771e0"],{"6f44":function(e,t,a){var o=a("89cf");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=a("499e").default;r("5178d006",o,!0,{sourceMap:!1,shadowMode:!1})},"73cf":function(e,t,a){"use strict";a.r(t);var o=a("7a23"),r=Object(o["withScopeId"])("data-v-01f5a79d");Object(o["pushScopeId"])("data-v-01f5a79d");var i={class:"container-fluid hcare-container",style:{"min-height":"1300px"}},n={class:"row-top row d-flex justify-content-center mb-4",style:{"padding-top":"180px"}},s={class:"col-sm-12 col-md-6 col-lg-4 col-xl-4"},c=Object(o["createVNode"])("h1",null,"HamsterCare🐹",-1),l={class:"title-one"},d={class:"pt-1",style:{"max-width":"500px"}},h=Object(o["createVNode"])("div",{class:"col-sm-12 col-md-6 col-lg-4 col-xl-3"},[Object(o["createVNode"])("img",{src:"https://raw.githubusercontent.com/hanchengxu/picture-host/master/hamster-wheel.png",width:"300"})],-1),m={class:"row d-flex justify-content-center",style:{"margin-top":"100px"}},p={class:"col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-3 mt-4"},f={class:"pt-2"},u={class:"row d-flex justify-content-center",style:{"margin-top":"150px","margin-bottom":"50px"}},g={class:"col-sm-12 col-md-12 col-lg-12 col-xl-4 ms-xl-5 col-xxl-3 ms-xxl-5 mt-4"},b={class:"pt-2"};Object(o["popScopeId"])();var y=r((function(e,t,a,y,x,w){var v=Object(o["resolveComponent"])("LazyShow");return Object(o["openBlock"])(),Object(o["createBlock"])("div",i,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("div",s,[c,Object(o["createVNode"])("h1",l,Object(o["toDisplayString"])(e.$t("hamsterCare.pageOne.tilteOne")),1),Object(o["createVNode"])("p",d,Object(o["toDisplayString"])(e.$t("hamsterCare.pageOne.titleTwo")),1)]),h]),Object(o["createVNode"])("div",m,[Object(o["createVNode"])("div",{class:["col-sm-12","col-md-12","col-lg-12","col-xl-6","col-xxl-5","mx-4",y.showDayChart?"anima-chart-left":"anima-chart-hidden"]},[Object(o["createVNode"])("div",{id:a.dayChartId,style:{width:"100%"},class:"shadow rounded-3 dayChart"},null,8,["id"])],2),Object(o["createVNode"])(v,{time:"100",transName:"topslip"},{default:r((function(){return[Object(o["createVNode"])("div",p,[Object(o["createVNode"])("h3",null,Object(o["toDisplayString"])(e.$t("hamsterCare.pageTwo.title")),1),Object(o["createVNode"])("p",f,Object(o["toDisplayString"])(e.$t("hamsterCare.pageTwo.p1")),1),Object(o["createVNode"])("p",null,Object(o["toDisplayString"])(e.$t("hamsterCare.pageTwo.p2")),1),Object(o["createVNode"])("p",{innerHTML:e.$tc("hamsterCare.pageTwo.p3",{sys_name:"<strong> HamsterCare</strong>🐹"})},null,8,["innerHTML"])])]})),_:1})]),Object(o["createVNode"])("div",u,[Object(o["createVNode"])(v,{time:"100",transName:"topslip"},{default:r((function(){return[Object(o["createVNode"])("div",g,[Object(o["createVNode"])("h3",null,Object(o["toDisplayString"])(e.$t("hamsterCare.pageThree.title")),1),Object(o["createVNode"])("p",b,Object(o["toDisplayString"])(e.$t("hamsterCare.pageThree.p1")),1),Object(o["createVNode"])("p",null,Object(o["toDisplayString"])(e.$t("hamsterCare.pageThree.p2")),1),Object(o["createVNode"])("p",null,Object(o["toDisplayString"])(e.$t("hamsterCare.pageThree.p3")),1)])]})),_:1}),Object(o["createVNode"])("div",{class:["col-sm-12","col-md-12","col-lg-12","col-xl-6","col-xxl-5","mx-4",y.showTimeChart?"anima-chart-right":"anima-chart-hidden"]},[Object(o["createVNode"])("div",{id:a.timeChartId,style:{width:"100%"},class:"shadow rounded-3 dayChart"},null,8,["id"])],2)])])})),x=a("44bd"),w=(a("4d63"),a("ac1f"),a("25f0"),a("159b"),a("313e")),v=a("2ef0"),O=a.n(v),j=a("bc3a"),C=a.n(j);function S(e){Object(o["onMounted"])((function(){String.prototype.endWith=function(e){var t=new RegExp(e+"$");return t.test(this)};var t=w["b"](document.getElementById(e.dayChartId)),a=w["b"](document.getElementById(e.timeChartId)),o={color:["#2ec7c9"],grid:{left:"13%",right:"5%"},dataZoom:[{show:!0,realtime:!0,start:96,end:100,brushSelect:!1,zoomLock:!1},{type:"inside",realtime:!0,start:96,end:100,zoomLock:!0}],tooltip:{trigger:"axis",formatter:function(e){var t="";return e.forEach((function(e){t+=e.marker+e.axisValue+"<br><b>&nbsp&nbsp&nbsp"+e.value+"圈</b>"})),t}},xAxis:{type:"category",data:["","",""],axisLabel:{textStyle:{fontSize:12},formatter:function(e){return e.endWith("01")||e.endWith("5")||e.endWith("10")||e.endWith("15")||e.endWith("20")||e.endWith("25")||e.endWith("30")?e:""}}},yAxis:{type:"value",axisLabel:{formatter:"{value}圈"},splitLine:{show:!0,lineStyle:{type:"dashed"}}},series:[{data:[],type:"line",itemStyle:{normal:{label:{show:!0,fontSize:15}}},lineStyle:{normal:{width:4}},areaStyle:{color:new w["a"].LinearGradient(0,0,0,1,[{offset:0,color:"#2ec7c9"},{offset:1,color:"rgb(252, 250, 232)"}])}}]};t.setOption(o),t.showLoading();var r=O.a.cloneDeep(o);delete r.dataZoom,r.series[0].lineStyle.normal.width=2,r.series[0].smooth=!0,r.series[0].itemStyle.normal.label.show=!1,r.series[0].markPoint={data:[{type:"max",name:"max"}]},r.series[0].markLine={data:[{type:"average",name:"average"}]},r.series[0].showSymbol=!1,r.series[0].markArea={silent:!0,label:{fontSize:14,offset:[0,-23]},data:[[{name:"🌞 Daytime",xAxis:"06",itemStyle:{color:"rgba(223, 175, 53, 0)"}},{xAxis:"19"}],[{name:"🌙 Nighttime",xAxis:"00",itemStyle:{color:{type:"linear",x:.5,colorStops:[{offset:0,color:"DarkGray"},{offset:1,color:"rgba(255, 255, 255, 0)"}]}}},{xAxis:"08"}],[{name:"🌙 Nighttime",xAxis:"15",itemStyle:{color:{type:"linear",x:.1,colorStops:[{offset:0,color:"rgba(255, 255, 255, 0)"},{offset:1,color:"DarkGray"}]}}},{xAxis:"23"}]]},r.grid.left="12%",r.grid.right="10%",delete r.xAxis.axisLabel.formatter,r.tooltip={trigger:"axis",animation:!0,formatter:function(e){var t="";return e.forEach((function(e){t+=e.marker+e.axisValue+"時<br><b>&nbsp&nbsp&nbsp"+e.value+"圈</b>"})),t}},a.setOption(r),a.showLoading(),C.a.get("https://hanchengxu.com/hamster/getLapCountByDay").then((function(e){o.xAxis.data=e.data.xAxis,o.series[0].data=e.data.series,t.setOption(o),t.hideLoading()})).catch((function(e){console.log(e),t.hideLoading()})),C.a.get("https://hanchengxu.com/hamster/getScatterByHour").then((function(e){r.xAxis.data=e.data.xAxis,r.series[0].data=e.data.series,a.setOption(r),a.hideLoading()})).catch((function(e){console.log(e),a.hideLoading()})),window.onresize=function(){t.resize(),a.resize()}}))}function N(e){var t=Object(o["ref"])(!1),a=Object(o["ref"])(!1),r=function(){return window.innerHeight},i=Object(o["ref"])(r()),n=function(){i.value=r()};return Object(o["onMounted"])((function(){window.addEventListener("resize",n)})),Object(o["onUnmounted"])((function(){window.removeEventListener("resize",n)})),window.onscroll=function(){var o=document.getElementById(e.dayChartId),r=o.offsetTop-document.documentElement.scrollTop;i.value>=r?t.value=!0:t.value=!1;var n=document.getElementById(e.timeChartId),s=n.offsetTop-document.documentElement.scrollTop;i.value>=s?a.value=!0:a.value=!1},{showTimeChart:a,showDayChart:t}}var V={components:{LazyShow:x["a"]},name:"HamsterCare",props:{dayChartId:{type:String,default:function(){return"dayChart"+Math.floor(100*Math.random())},require:!1},timeChartId:{type:String,default:function(){return"timeChart"+Math.floor(100*Math.random())},require:!1}},setup:function(e){S(e);var t=N(e),a=t.showTimeChart,o=t.showDayChart;return{showDayChart:o,showTimeChart:a}}},k=(a("9dcf"),a("6b0d")),L=a.n(k);const T=L()(V,[["render",y],["__scopeId","data-v-01f5a79d"]]);t["default"]=T},"89cf":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,".title-one[data-v-01f5a79d]{font-weight:100}.row-top[data-v-01f5a79d]{background-image:linear-gradient(rgba(59,183,194,.4588235294117647),rgba(59,183,194,.8352941176470589));min-height:600px;-webkit-clip-path:polygon(0 0,100% 0,100% calc(100% - 6vw),0 100%);clip-path:polygon(0 0,100% 0,100% calc(100% - 6vw),0 100%);color:#fff}.anima-chart-hidden[data-v-01f5a79d]{visibility:hidden}.anima-chart-left[data-v-01f5a79d]{visibility:visible;-webkit-animation:disp-left-01f5a79d 1.5s ease-in-out;animation:disp-left-01f5a79d 1.5s ease-in-out}.anima-chart-right[data-v-01f5a79d]{visibility:visible;-webkit-animation:disp-right-01f5a79d 1.5s ease-in-out;animation:disp-right-01f5a79d 1.5s ease-in-out}@-webkit-keyframes disp-left-01f5a79d{0%{transform:translateX(-100px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes disp-left-01f5a79d{0%{transform:translateX(-100px);opacity:0}to{transform:translateY(0);opacity:1}}@-webkit-keyframes disp-right-01f5a79d{0%{transform:translateX(100px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes disp-right-01f5a79d{0%{transform:translateX(100px);opacity:0}to{transform:translateY(0);opacity:1}}.dayChart[data-v-01f5a79d]{height:400px}@media screen and (max-width:900px){.dayChart[data-v-01f5a79d]{height:300px}}@media screen and (max-width:500px){.dayChart[data-v-01f5a79d]{height:250px}}",""]),e.exports=t},"9dcf":function(e,t,a){"use strict";a("6f44")}}]);