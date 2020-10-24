(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{50:function(e,t,a){e.exports=a(84)},55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),s=(a(55),a(22)),m=a(5),d=(a(56),a(57),a(12)),o=a(13),i=a(16),u=a(15),E=(a(58),a(90)),v=a(88),p=a(86),h=a(19),b=a.n(h),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={stateData:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.covid19india.org/state_district_wise.json").then((function(t){var a=t.data;e.setState({stateData:a})}))}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.stateData);return l.a.createElement("div",{className:"statedata"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(v.a,null,t.map((function(t,a){var n=e.state.stateData[t].districtData,r=(Object.keys(n),0),c=0,s=0,m=0,d=[];for(var o in n){r+=n[o].active,c+=n[o].confirmed,s+=n[o].deceased,m+=n[o].recovered;var i=n[o];i.district_name=o,d.push(i)}return console.log(d),l.a.createElement(E.a,null,l.a.createElement(E.a.Header,null,l.a.createElement(v.a.Toggle,{as:p.a,variant:"primary",eventKey:a},t," - ",l.a.createElement("span",{className:"btn btn-dark p-1 mr-2"},"Total Cases -",c),l.a.createElement("span",{className:"btn btn-dark p-1 mr-2"},"Active- ",r),l.a.createElement("span",{className:"btn btn-dark p-1 mr-2"},"Recovered - ",m),l.a.createElement("span",{className:"btn btn-dark p-1 mr-2"},"Death - ",s))),l.a.createElement(v.a.Collapse,{eventKey:a},l.a.createElement(E.a.Body,null,l.a.createElement("table",{className:" table table-bordered table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Districts"),l.a.createElement("td",null,"Confirmed"),l.a.createElement("td",null,"Active"),l.a.createElement("td",null,"Recovered"),l.a.createElement("td",null,"Deaths"))),l.a.createElement("tbody",null,d.map((function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",null,e.district_name),l.a.createElement("td",null,e.confirmed),l.a.createElement("td",null,e.active),l.a.createElement("td",null,e.recovered),l.a.createElement("td",null,e.deceased))})))))))}))))))}}]),a}(n.Component),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={data:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://corona.lmao.ninja/v2/countries/india").then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"Row"},l.a.createElement("div",{className:"col-md-12 col"},l.a.createElement("img",{src:"https://www.countryflags.io/in/shiny/64.png"}),l.a.createElement("h3",null,"INDIA")),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement(E.a,{style:{width:"18rem"},className:"badge badge-primary"},l.a.createElement(E.a.Body,{className:"text-center"},l.a.createElement(E.a.Title,null,"TOTAL CASES"),l.a.createElement("h3",null,this.state.data.cases)))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(E.a,{style:{width:"18rem"},className:"badge badge-warning"},l.a.createElement(E.a.Body,{className:"text-center"},l.a.createElement(E.a.Title,null,"ACTIVE CASES"),l.a.createElement("h3",null,this.state.data.active)))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(E.a,{style:{width:"18rem"},className:"badge badge-success"},l.a.createElement(E.a.Body,{className:"text-center"},l.a.createElement(E.a.Title,null,"RECOVERED"),l.a.createElement("h3",null,this.state.data.recovered)))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(E.a,{style:{width:"18rem"},className:"badge badge-danger"},l.a.createElement(E.a.Body,{className:"text-center"},l.a.createElement(E.a.Title,null,"TOTAL DEATHS"),l.a.createElement("h3",null,this.state.data.todayDeaths)))))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement(y,null)))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={data:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://corona.lmao.ninja/v2/countries").then((function(t){e.setState({data:t.data}),console.log(t.data)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("table",{className:"table table-primary table-bordered table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Country"),l.a.createElement("td",null,"Total Cases"),l.a.createElement("td",null,"Recovered"),l.a.createElement("td",null,"Death"),l.a.createElement("td",null,"TodayCases"),l.a.createElement("td",null,"TodayRecovered"),l.a.createElement("td",null,"TodayDeaths "))),l.a.createElement("tbody",null,this.state.data.map((function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",null,e.country,l.a.createElement("img",{style:{width:"50px",height:"50px",paddingLeft:"5px"},src:e.countryInfo.flag})),l.a.createElement("td",null,e.cases),l.a.createElement("td",null,e.recovered),l.a.createElement("td",null,e.deaths),l.a.createElement("td",null,e.todayCases),l.a.createElement("td",null,e.todayRecovered),l.a.createElement("td",null,e.todayDeaths))}))))))}}]),a}(n.Component),N=a(89),w=a(87),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N.a,{collapseOnSelect:!0,expand:"lg",style:{background:"#6610f2"},variant:"dark"},l.a.createElement("div",{className:"virusimage",style:{width:"50px",height:"50px"}},l.a.createElement("span",null,l.a.createElement("img",{style:{width:"50px",height:"50px"},src:"https://images.newscientist.com/wp-content/uploads/2020/02/11165812/c0481846-wuhan_novel_coronavirus_illustration-spl.jpg"}))),l.a.createElement(N.a.Brand,null,l.a.createElement(s.b,{to:"/",style:{color:"white",textDecorationLine:"none",paddingLeft:"5px"}},l.a.createElement("strong",null,"COVID-19 TRACKER"))),l.a.createElement(N.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(N.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(w.a,{className:"mr-auto"},l.a.createElement(s.b,{to:"/India",style:{color:"#fdf614",textDecorationLine:"none",paddingLeft:"30px"}},l.a.createElement("strong",null,"India")),l.a.createElement(s.b,{to:"/World",style:{color:"#fdf614",textDecorationLine:"none",paddingLeft:"30px"}},l.a.createElement("strong",null,"World"))))))}}]),a}(n.Component);var j=function(){return l.a.createElement("div",{className:"App "},l.a.createElement(s.a,null,l.a.createElement(O,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(f,null)),l.a.createElement(m.a,{path:"/india"},l.a.createElement(f,null)),l.a.createElement(m.a,{path:"/world"},l.a.createElement(g,null)),l.a.createElement(m.a,{path:"/statedata"},l.a.createElement(y,null)))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.a0d25a94.chunk.js.map