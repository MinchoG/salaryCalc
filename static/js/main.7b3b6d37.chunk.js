(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(8),c=n.n(r),i=(n(16),n(2)),d=n(3),m=n(6),u=n(4),o=n(5),E=function(){return l.a.createElement("div",{className:"Header"},l.a.createElement("span",null,"123"))},s=n(9),b=n(1),h=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={salaryGross:"",yearsExp:""},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(o.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleClick",value:function(){var e=parseInt(this.state.salaryGross,10),t=parseInt(this.state.yearsExp,10),n=document.getElementById("id1"),a=document.getElementById("id2"),l=document.getElementById("id3"),r=document.getElementById("id4"),c=document.getElementById("id5"),i=document.getElementById("id6"),d=document.getElementById("id7"),m=document.getElementById("id8"),u=document.getElementById("id9"),o=document.getElementById("id10"),E=document.getElementById("id11"),s=document.getElementById("id12"),b=e<=3e3?.0838*e:251.4,h=e<=3e3?.022*e:66,y=e<=3e3?.032*e:96,g=b+h+y,p=e+.006*t*e-g;n.innerHTML=e,a.innerHTML=.006*t*e,l.innerHTML=e+.006*t*e,r.innerHTML=e<=3e3?e:3e3,c.innerHTML=b,i.innerHTML=h,d.innerHTML=y,m.innerHTML=g,u.innerHTML=p,o.innerHTML=.1*p,E.innerHTML=g+.1*p,s.innerHTML=e+.006*t*e-(g+.1*p)}},{key:"render",value:function(){return l.a.createElement("form",{name:"calcForm"},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"\u041a\u0430\u043b\u043a\u0443\u043b\u0430\u0442\u043e\u0440 \u0431\u0440\u0443\u0442\u043d\u043e/\u043d\u0435\u0442\u043d\u043e \u0432\u044a\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435:"),l.a.createElement("label",null,"\u0411\u0440\u0443\u0442\u043d\u043e \u0432\u044a\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435: \xa0",l.a.createElement("input",{name:"salaryGross",type:"number",value:this.state.value,placeholder:"amount",onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("label",null,"\u0413\u043e\u0434\u0438\u043d\u0438 \u0442\u0440\u0443\u0434\u043e\u0432 \u0441\u0442\u0430\u0436: \xa0",l.a.createElement("input",{name:"yearsExp",type:"number",value:this.state.value,placeholder:"amount",onChange:this.handleChange})),l.a.createElement("button",{type:"button",onClick:this.handleClick},"Calc!"),l.a.createElement("br",null),l.a.createElement("div",{className:"displayPool"},l.a.createElement("p",null,"1. \u0411\u0440\u0443\u0442\u043d\u043e \u0432\u044a\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435:\xa0 ",l.a.createElement("label",{id:"id1"}," "),l.a.createElement("br",null),"2. \u0422\u0440\u0443\u0434\u043e\u0432 \u0441\u0442\u0430\u0436 X*0.6%:\xa0 ",l.a.createElement("label",{id:"id2"}," "),l.a.createElement("br",null),"3. \u0421\u0443\u043c\u0430\u0440\u043d\u043e(1+2):\xa0 ",l.a.createElement("label",{id:"id3"}," "),l.a.createElement("br",null),"4. \u041e\u0441\u0438\u0433\u0443\u0440\u0438\u0442\u0435\u043b\u0435\u043d \u0434\u043e\u0445\u043e\u0434: \xa0",l.a.createElement("label",{id:"id4"}," "),l.a.createElement("br",null),'5. \u0414\u044a\u0440\u0436\u0430\u0432\u043d\u043e \u043e\u0431\u0449. \u043e\u0441\u0438\u0433.("\u041f\u0435\u043d\u0441\u0438\u0438": 6.58%,"\u041e\u0417\u041c": 1.4%,"\u0411\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u0438\u0446\u0430": 0.4%): \xa0',l.a.createElement("label",{id:"id5"}," "),l.a.createElement("br",null),"6. \u0424\u043e\u043d\u0434 \u0414\u0417\u041f\u041e \u0432 \u0423\u041f\u0424 2.20%: \xa0",l.a.createElement("label",{id:"id6"}," "),l.a.createElement("br",null),"7. \u0417\u0434\u0440\u0430\u0432\u043d\u043e \u043e\u0441\u0438\u0433\u0443\u0440\u044f\u0432\u0430\u043d\u0435 3.20%: \xa0",l.a.createElement("label",{id:"id7"}," "),l.a.createElement("br",null),"8. \u041e\u0431\u0449\u043e \u043e\u0441\u0438\u0433. \u0432\u043d\u043e\u0441\u043a\u0438(5+6+7): \xa0",l.a.createElement("label",{id:"id8"}," "),l.a.createElement("br",null),"9. \u0414\u0430\u043d\u044a\u0447\u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430 \u0437\u0430 \u043e\u0431\u043b\u0430\u0433\u0430\u043d\u0435(3-8): \xa0",l.a.createElement("label",{id:"id9"}," "),l.a.createElement("br",null),"10. \u0414\u0430\u043d\u044a\u043a \u0434\u043e\u0445\u043e\u0434 (9*10%): \xa0",l.a.createElement("label",{id:"id10"}," "),l.a.createElement("br",null),"11. \u041e\u0431\u0449\u043e \u0443\u0434\u0440\u044a\u0436\u043a\u0438 \u0441\u043b\u0443\u0436\u0438\u0442\u0435\u043b (8+10): \xa0",l.a.createElement("label",{id:"id11"}," "),l.a.createElement("br",null),"12. \u041d\u0435\u0442\u043d\u043e(3-11): \xa0",l.a.createElement("label",{id:"id12"}," "),l.a.createElement("br",null)))))}}]),t}(a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(h,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.7b3b6d37.chunk.js.map