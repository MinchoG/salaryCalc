(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,l){},16:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),r=l(7),c=l.n(r),u=(l(15),l(1)),m=l(2),o=l(4),E=l(3),d=l(5),i=function(){return n.a.createElement("div",{className:"Header"})},s=l(8),h=function(e){var t=parseInt(e.salary),l=parseInt(e.exp),a=t<=3e3?.0838*t:251.4,r=t<=3e3?.022*t:66,c=t<=3e3?.032*t:96,u=a+r+c,m=t+.006*l*t-u,o=.006*l*t,E=t+o,d=t<=3e3?t:3e3,i=Math.round(.1*m*100)/100,s=Math.round(100*(u+.1*m))/100,h=Math.round(100*(t+.006*l*t-(u+.1*m)))/100;return n.a.createElement("div",{className:"displayPool"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,"1. \u0411\u0440\u0443\u0442\u043d\u043e \u0432\u044a\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435:"),n.a.createElement("td",null,n.a.createElement("label",null,t," "))),n.a.createElement("tr",null,n.a.createElement("td",null,"2. \u0422\u0440\u0443\u0434\u043e\u0432 \u0441\u0442\u0430\u0436 X*0.6%:"),n.a.createElement("td",null,n.a.createElement("label",null,Math.round(100*o)/100," "))),n.a.createElement("tr",null,n.a.createElement("td",null,"3. \u0421\u0443\u043c\u0430\u0440\u043d\u043e(1+2):"),n.a.createElement("td",null,n.a.createElement("label",null," ",E))),n.a.createElement("tr",null,n.a.createElement("td",null,"4. \u041e\u0441\u0438\u0433\u0443\u0440\u0438\u0442\u0435\u043b\u0435\u043d \u0434\u043e\u0445\u043e\u0434:"),n.a.createElement("td",null,n.a.createElement("label",null,d," "))),n.a.createElement("tr",null,n.a.createElement("td",null,'5. \u0414\u044a\u0440\u0436\u0430\u0432\u043d\u043e \u043e\u0431\u0449. \u043e\u0441\u0438\u0433.("\u041f\u0435\u043d\u0441\u0438\u0438": 6.58%,"\u041e\u0417\u041c": 1.4%,"\u0411\u0435\u0437\u0440\u0430\u0431\u043e\u0442\u0438\u0446\u0430": 0.4%):'),n.a.createElement("td",null,n.a.createElement("label",null,Math.round(100*a)/100))),n.a.createElement("tr",null,n.a.createElement("td",null,"6. \u0424\u043e\u043d\u0434 \u0414\u0417\u041f\u041e \u0432 \u0423\u041f\u0424 2.20%:"),n.a.createElement("td",null,n.a.createElement("label",null," ",Math.round(100*r)/100))),n.a.createElement("tr",null,n.a.createElement("td",null,"7. \u0417\u0434\u0440\u0430\u0432\u043d\u043e \u043e\u0441\u0438\u0433\u0443\u0440\u044f\u0432\u0430\u043d\u0435 3.20%:"),n.a.createElement("td",null,n.a.createElement("label",null,c," "))),n.a.createElement("tr",null,n.a.createElement("td",null,"8. \u041e\u0431\u0449\u043e \u043e\u0441\u0438\u0433. \u0432\u043d\u043e\u0441\u043a\u0438(5+6+7):"),n.a.createElement("td",null,n.a.createElement("label",null,Math.round(100*u)/100))),n.a.createElement("tr",null,n.a.createElement("td",null,"9. \u0414\u0430\u043d\u044a\u0447\u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430 \u0437\u0430 \u043e\u0431\u043b\u0430\u0433\u0430\u043d\u0435(3-8):"),n.a.createElement("td",null,n.a.createElement("label",null,Math.round(100*m)/100))),n.a.createElement("tr",null,n.a.createElement("td",null,"10. \u0414\u0430\u043d\u044a\u043a \u0434\u043e\u0445\u043e\u0434 (9*10%):"),n.a.createElement("td",null,n.a.createElement("label",null,i," "))),n.a.createElement("tr",null,n.a.createElement("td",null,"11. \u041e\u0431\u0449\u043e \u0443\u0434\u0440\u044a\u0436\u043a\u0438 \u0441\u043b\u0443\u0436\u0438\u0442\u0435\u043b (8+10):"),n.a.createElement("td",null,n.a.createElement("label",null,s))),n.a.createElement("tr",null,n.a.createElement("td",null,"12. \u041d\u0435\u0442\u043d\u043e(3-11):"),n.a.createElement("td",null,n.a.createElement("label",null,h," ")))))},b=function(e){function t(){var e,l;Object(u.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(l=Object(o.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(n)))).state={displayTable:!1,salary:"",exp:""},l}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleClick",value:function(){this.setState({displayTable:!0})}},{key:"render",value:function(){var e=this,t=this.state,l=t.displayTable,a=t.salary,r=t.exp;return n.a.createElement("form",{name:"calcForm"},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"\u041a\u0430\u043b\u043a\u0443\u043b\u0430\u0442\u043e\u0440 \u0431\u0440\u0443\u0442\u043d\u043e/\u043d\u0435\u0442\u043d\u043e \u0432\u044a\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435:"),n.a.createElement("label",null,"\u0411\u0440\u0443\u0442\u043d\u043e \u0432\u044a\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435:",n.a.createElement("input",{name:"salary",id:"salaryGross",type:"number",placeholder:"amount",value:this.state.salary,onChange:function(t){return e.handleChange(t)}})),n.a.createElement("label",null,"\u0413\u043e\u0434\u0438\u043d\u0438 \u0442\u0440\u0443\u0434\u043e\u0432 \u0441\u0442\u0430\u0436:",n.a.createElement("input",{name:"exp",id:"yearsExp",type:"number",placeholder:"amount",value:this.state.exp,onChange:function(t){return e.handleChange(t)}})),n.a.createElement("button",{type:"button",onClick:function(){return e.handleClick()}},"Calc!"),n.a.createElement("div",{className:"displayPool"},l&&n.a.createElement(h,{salary:a,exp:r}))))}}]),t}(a.Component),p=function(){return n.a.createElement("div",{className:"bottom"},n.a.createElement("p",null,"\u0422\u043e\u0437\u0438 \u043a\u0430\u043b\u043a\u0443\u043b\u0430\u0442\u043e\u0440 \u0435 \u0441\u0430\u043c\u043e \u0437\u0430 \u0440\u043e\u0434\u0435\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434 1960\u0433. \u0438 III \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0442\u0440\u0443\u0434"))},y=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i,null),n.a.createElement(b,null),n.a.createElement(p,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,l){e.exports=l(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.bcf5a231.chunk.js.map