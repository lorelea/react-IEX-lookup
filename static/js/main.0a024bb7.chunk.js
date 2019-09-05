(window["webpackJsonpiex-cloud-test"]=window["webpackJsonpiex-cloud-test"]||[]).push([[0],{188:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},190:function(e,t,n){e.exports=n(443)},432:function(e,t,n){},433:function(e,t,n){},434:function(e,t,n){},441:function(e,t,n){},442:function(e,t,n){},443:function(e,t,n){"use strict";n.r(t);n(191),n(240);var a=n(2),o=n.n(a),c=n(55),s=n.n(c),i=(n(432),n(188)),r=n.n(i),l=(n(433),n(16)),u=n(17),h=n(18),m=n(19),p=n(20),f=(n(434),n(121)),d=n.n(f),g=(n(441),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){var t=n.props.items,a=e.target.value,o=[];if(a.length){var c=new RegExp("^".concat(a),"i");o=t.sort().filter(function(e){return c.test(e)})}n.setState({suggestions:o,query:a})},n.handleClearClick=function(){n.setState({query:""}),n.search.focus()},n.handleSuggestionSelected=function(e){n.setState({suggestions:[],query:e},function(){n.props.onValueUpdated&&n.props.onValueUpdated(e)})},n.state={suggestions:[],query:n.props.value||""},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"renderFilteredSuggestions",value:function(){var e=this,t=this.state.suggestions;return t.length?o.a.createElement("ul",null,t.map(function(t,n){return o.a.createElement("li",{key:t+n,onClick:function(){return e.handleSuggestionSelected(t)}},t)})):null}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"my-autocomplete "+this.props.className},o.a.createElement("input",{type:"text",ref:function(t){return e.search=t},placeholder:this.props.placeholder,value:this.state.query,onChange:this.handleInputChange}),this.state.query&&o.a.createElement("span",{className:"clearable",onClick:this.handleClearClick}),this.renderFilteredSuggestions())}}]),t}(o.a.Component)),y=(n(442),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleSwitchToggle=function(){n.setState(function(e){return{isChecked:!e.isChecked}},function(){n.props.onSwitchToggle&&n.props.onSwitchToggle(n.state.isChecked)})},n.state={id:"myonoffswitch-"+Math.random().toString().substr(2,15),isChecked:!!n.props.value},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"onoffswitch"},o.a.createElement("input",{type:"checkbox",name:"onoffswitch",className:"onoffswitch-checkbox",id:this.state.id,checked:this.state.isChecked,onChange:this.handleSwitchToggle}),o.a.createElement("label",{className:"onoffswitch-label",htmlFor:this.state.id},o.a.createElement("span",{className:"onoffswitch-inner"}),o.a.createElement("span",{className:"onoffswitch-switch"})))}}]),t}(o.a.Component)),v={servicesApi:"https://cloud.iexapis.com/stable",apiToken:"pk_751ca3addf034ca9aad7203640ca54d9"};function b(e){if(e.ok)return e;var t=new Error("HTTP Error ".concat(e.statusText));throw t.status=e.statusText,t.response=e,t}function k(e){throw[401,403].includes(e.status),e.StatusText}var S={getAllSymbols:function(){return fetch("".concat(v.servicesApi,"/ref-data/symbols?token=").concat(v.apiToken)).then(b).then(function(e){return e.json()}).catch(k)},getSymbolInfo:function(e){return fetch("".concat(v.servicesApi,"/search/").concat(e,"?token=").concat(v.apiToken)).then(b).then(function(e){return e.json()}).catch(k)},getLatestPrice:function(e){return fetch("".concat(v.servicesApi,"/stock/").concat(e,"/quote/latestPrice?token=").concat(v.apiToken)).then(b).then(function(e){return e.json()}).catch(k)},getCompanyInfo:function(e){return fetch("".concat(v.servicesApi,"/stock/").concat(e,"/company?token=").concat(v.apiToken)).then(b).then(function(e){return e.json()}).catch(k)}},w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleSymbolChanged=function(e){n.setState({activeSymbol:e},function(){n.getLatestPrice(),n.getCompanyInfo()})},n.handleSwitchToggle=function(e){n.setState({showAutocomplete:e})},n.state={symbols:[],activeSymbol:"",price:"",company:{},showAutocomplete:!1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"getAllSymbols",value:function(){var e=this;S.getAllSymbols().then(function(t){e.setState({symbols:t})})}},{key:"getLatestPrice",value:function(){var e=this;S.getLatestPrice(this.state.activeSymbol).then(function(t){e.setState({price:t})})}},{key:"getCompanyInfo",value:function(){var e=this;S.getCompanyInfo(this.state.activeSymbol).then(function(t){e.setState({company:t})})}},{key:"componentDidMount",value:function(){this.getAllSymbols()}},{key:"renderSymbolInfo",value:function(){var e=this.state,t=e.symbols,n=e.activeSymbol,a=e.company.description;if(!t.length||!n)return null;var c=new RegExp("^".concat(n),"i"),s=t.find(function(e){return c.test(e.symbol)});return s?o.a.createElement("dl",null,o.a.createElement("dt",null,"Symbol"),o.a.createElement("dd",null,n),o.a.createElement("dt",null,"Current Stock Price"),o.a.createElement("dd",null,this.state.price," ",s.currency),o.a.createElement("dt",null,"Description"),o.a.createElement("dd",null,a)):null}},{key:"render",value:function(){var e=this,t=this.state.showAutocomplete?this.state.symbols.map(function(e){return e.symbol}):[],n=this.state.symbols.map(function(e){return{value:e.symbol,label:e.symbol}});return o.a.createElement("div",{className:"my-iex_info_lookup"},o.a.createElement(y,{value:this.state.showAutocomplete,onSwitchToggle:this.handleSwitchToggle}),this.state.showAutocomplete&&o.a.createElement(g,{items:t,placeholder:"Start to type...",value:this.state.activeSymbol,onValueUpdated:this.handleSymbolChanged}),o.a.createElement(d.a,{className:"my-iex_info_lookup-autocomplete "+(this.state.showAutocomplete?"hide":""),filterOption:Object(f.createFilter)({ignoreAccents:!1}),isLoading:!n.length,options:n,value:n.find(function(t){return t.value===e.state.activeSymbol}),onChange:function(t){return e.handleSymbolChanged(t.value)}}),this.renderSymbolInfo())}}]),t}(o.a.Component);var E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:r.a,className:"App-logo",alt:"logo"})),o.a.createElement("main",{className:"App-main"},o.a.createElement("div",{className:"App-component"},o.a.createElement(w,null))),o.a.createElement("footer",{className:"App-footer"},o.a.createElement("a",{className:"App-link",href:"https://iexcloud.io",target:"_blank",rel:"noopener noreferrer"},"Data provided by IEX Cloud")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[190,1,2]]]);
//# sourceMappingURL=main.0a024bb7.chunk.js.map