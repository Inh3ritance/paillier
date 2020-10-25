(this.webpackJsonppaillier=this.webpackJsonppaillier||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(7),i=a.n(l),c=(a(16),a(1)),r=a.n(c),m=a(2),o=a(4),p=a(5),u=a(3),h=a(10),d=a(8),E=a(9),g=(a(18),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={publicKey:{n:0,g:0},privateKey:{lambda:0,mu:0,publicKey:{}},m1:0,m2:0,c1:0,c2:0,c3:0,d:0,key_size:400},e.handleChangem1=e.handleChangem1.bind(Object(u.a)(e)),e.handleChangem2=e.handleChangem2.bind(Object(u.a)(e)),e.generate_key=e.generate_key.bind(Object(u.a)(e)),e}return Object(p.a)(a,[{key:"handleChangem1",value:function(e){this.setState({m1:e.currentTarget.value})}},{key:"handleChangem2",value:function(e){this.setState({m2:e.currentTarget.value})}},{key:"generate_key",value:function(){var e=Object(m.a)(r.a.mark((function e(t){var a,n,s,l,i,c,m,o,p,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("1"),console.time(),e.next=4,E.a(this.state.key_size).catch((function(e){console.log(e)}));case 4:a=e.sent,n=a.publicKey,s=a.privateKey,this.setState({publicKey:{n:n.n,g:n.g}}),this.setState({privateKey:{lambda:s.lambda,privateKey:s.mu,publicKey:this.state.publicKey}}),this.state.m1>0&&this.state.m2>0?(l=BigInt(this.state.m1),i=BigInt(this.state.m2),c=n.encrypt(l),this.setState({c1:c}),m=n.encrypt(i),this.setState({c2:m}),o=n.addition(c,m),p=n.multiply(o,2n),this.setState({c3:p}),u=s.decrypt(p),this.setState({d:u}),console.timeEnd()):(this.setState({c1:0}),this.setState({c2:0}),this.setState({c3:0}),this.setState({d:0})),console.timeEnd();case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",null,"Paillier Demo CS 3180"),s.a.createElement("p",{className:"side"},"Message 1:"),s.a.createElement("input",{type:"number",onClick:this.handleChangem1,className:"side"}),s.a.createElement("p",{className:"side"},"Message 2:"),s.a.createElement("input",{type:"number",onClick:this.handleChangem2,className:"side"}),s.a.createElement("div",null,s.a.createElement("p",{className:"side push"},"Key Size(",this.state.key_size,"):"),s.a.createElement("input",{type:"range",min:"1",max:"3720",step:"1",value:this.state.key_size,className:"slider",id:"myRange",onChange:function(t){var a=parseInt(t.target.value,10);e.setState({key_size:a})}})),s.a.createElement("div",null,s.a.createElement("h4",{className:"side push"},"Generate Key:"),s.a.createElement("button",{onClick:this.generate_key,className:"side"},"press me")),s.a.createElement("p",null,"Public Key(n,g): "),s.a.createElement("div",null,s.a.createElement("p",{className:"side push"},"n: "),s.a.createElement("p",{className:"side sol"},this.state.publicKey.n.toString())),s.a.createElement("div",null,s.a.createElement("p",{className:"side push"},"g: "),s.a.createElement("p",{className:"side sol"},this.state.publicKey.g.toString())),s.a.createElement("p",null,"Private Key(lambda): "),s.a.createElement("div",null,s.a.createElement("p",{className:"side push"},"lambda: "),s.a.createElement("p",{className:"side sol"},this.state.privateKey.lambda.toString())),s.a.createElement("p",null,"Encrypted messages m1 and m2: "),s.a.createElement("div",null,s.a.createElement("p",{className:"side push"},"c1: "),s.a.createElement("p",{className:"side sol"},this.state.c1.toString())),s.a.createElement("div",null,s.a.createElement("p",{className:"side push"},"c2: "),s.a.createElement("p",{className:"side sol"},this.state.c2.toString())),s.a.createElement("p",null,"Encrypted messages 2*(c1 + c2): ",s.a.createElement("i",null,"*Note 2 is just an arbitrary Constant to show property of homomorphicism")),s.a.createElement("div",null,s.a.createElement("p",{className:"side push"},"c3: "),s.a.createElement("p",{className:"side sol"},this.state.c3.toString())),s.a.createElement("p",null,"Decrypt c3:"),s.a.createElement("div",null,s.a.createElement("p",{className:"side push"},"d: "),s.a.createElement("p",{className:"side sol"},this.state.d.toString())),s.a.createElement("h6",null,"**Special thanks to the contributor for this package at: https://www.npmjs.com/package/paillier-bigint")))}}]),a}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.a51739b8.chunk.js.map