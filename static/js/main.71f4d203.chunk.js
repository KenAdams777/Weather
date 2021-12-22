(this.webpackJsonpvid=this.webpackJsonpvid||[]).push([[0],{121:function(e,t,a){e.exports=a(159)},130:function(e,t,a){},149:function(e,t,a){},154:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),o=a(16),i=(a(130),a(17)),s=a(33),u=a(214),d=a(45),m=a.n(d),E=function(e){return{type:"HANDLE_LOGIN",payload:e}},v=a(11);a(149);var p=function(){var e,t,a,n,c,l,i,s,u,d,m,E,v,p,f,g,_,y=Object(o.c)((function(e){return e.forecast}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home__main-forecast-head"},r.a.createElement("h2",null,y.forecastData.name," Weather Forecast")),r.a.createElement("div",{className:"home__main-forecast-body"},r.a.createElement("div",{className:"container py-5 h-100"},r.a.createElement("div",{className:"row d-flex justify-content-center align-items-center h-100"},r.a.createElement("div",{className:"col-md-8 col-lg-6 col-xl-4"},r.a.createElement("div",{className:"card",style:{color:"#4B515D",borderRadius:"35px"}},r.a.createElement("div",{className:"card-body p-4"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("h5",{className:"flex-grow-1",style:{fontWeight:"bold"}},null===y||void 0===y||null===(e=y.forecastData)||void 0===e?void 0:e.name),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("h6",null),r.a.createElement("h6",null,"min:"," ",Math.round(null===y||void 0===y||null===(t=y.forecastData)||void 0===t||null===(a=t.main)||void 0===a?void 0:a.temp_min),"\xb0C"),r.a.createElement("h6",null,"max:"," ",Math.round(null===y||void 0===y||null===(n=y.forecastData)||void 0===n||null===(c=n.main)||void 0===c?void 0:c.temp_max),"\xb0C"),r.a.createElement("h6",null,"feels like:"," ",Math.round(null===y||void 0===y||null===(l=y.forecastData)||void 0===l||null===(i=l.main)||void 0===i?void 0:i.feels_like),"\xb0C"))),r.a.createElement("div",{className:"d-flex flex-column text-center mt-5 mb-4"},r.a.createElement("h6",{className:"display-4 mb-0 font-weight-bold",style:{color:"#1C2331"}},Math.round(null===y||void 0===y||null===(s=y.forecastData)||void 0===s||null===(u=s.main)||void 0===u?void 0:u.temp),"\xb0C"),r.a.createElement("span",{className:"small",style:{color:"#868B94"}},null===y||void 0===y||null===(d=y.weatherData[0])||void 0===d?void 0:d.description)),r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("div",{className:"flex-grow-1",style:{fontSize:"1rem"}},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-wind fa-fw",style:{color:"#868B94"}}),r.a.createElement("span",{className:"ms-1"},null===y||void 0===y||null===(m=y.forecastData)||void 0===m||null===(E=m.wind)||void 0===E?void 0:E.speed," m/s")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-tint fa-fw",style:{color:"#868B94"}}),r.a.createElement("span",{className:"ms-1"},null===y||void 0===y||null===(v=y.forecastData)||void 0===v||null===(p=v.main)||void 0===p?void 0:p.humidity,"%")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-sun fa-fw",style:{color:"#868B94"}}),r.a.createElement("span",{className:"ms-1"},null===y||void 0===y||null===(f=y.forecastData)||void 0===f||null===(g=f.main)||void 0===g?void 0:g.pressure," mm"))),r.a.createElement("div",null,r.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(null===y||void 0===y||null===(_=y.weatherData[0])||void 0===_?void 0:_.icon,"@2x.png"),width:"100px"}))))))))))},f=a(106),g=a(213),_=a(102),y=a.n(_);var b=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.cities.favoritesCities})),a=Object(o.c)((function(e){return e.cities.selectedCity})),r=n.useState(null),c=Object(v.a)(r,2),l=c[0],i=c[1],s=Boolean(l),d=function(){i(null)};return n.createElement("div",null,n.createElement(u.a,{"aria-label":"more",id:"long-button","aria-controls":"long-menu","aria-expanded":s?"true":void 0,"aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},variant:"contained"},"Select city",n.createElement(y.a,null)),n.createElement(f.a,{id:"long-menu",MenuListProps:{"aria-labelledby":"long-button"},anchorEl:l,open:s,onClose:d,PaperProps:{style:{maxHeight:216,width:"20ch"}}},null===t||void 0===t?void 0:t.map((function(t){return n.createElement(g.a,{key:t,selected:t===a,onClick:function(){d(),t!==a&&e(function(e){return{type:"REPLACE_SELECTED_CITY",payload:e}}(t))}},t)}))))};a(154);var C=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.login.username})),a=Object(o.c)((function(e){return e.cities.selectedCity})),c=Object(o.c)((function(e){return e.forecast}));return Object(n.useEffect)((function(){var t;a&&e((t=a,function(e){e({type:"GET_FORECAST_REQUEST"});var a={method:"get",url:"https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("0416fc94bd8c14e8697e298e323b8846","&units=metric")};m()(a).then((function(t){var a=t.data;e(function(e){return{type:"GET_FORECAST_SUCCESS",payload:e}}(a)),console.log(a)})).catch((function(t){var a,n,r,c=null===t||void 0===t||null===(a=t.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message;e(function(e){return{type:"GET_FORECAST_FAILURE",payload:e}}(c)),console.log(null===t||void 0===t||null===(r=t.response)||void 0===r?void 0:r.data)}))}))}),[a]),r.a.createElement("div",{className:"home__wrapper"},r.a.createElement("header",{className:"home__header"},r.a.createElement("div",{className:"home__header-greeting"},r.a.createElement("div",{className:"home__header-logo"},r.a.createElement(s.b,{to:"/",className:"home__header-logo link"},r.a.createElement("h1",null,"Forecast"))),r.a.createElement("div",{className:"home__header-title"},r.a.createElement("h1",null,"Hello, ",t,"!")),r.a.createElement("div",{className:"home__header-logOut"},r.a.createElement(u.a,{variant:"contained",onClick:function(){e({type:"HANDLE_LOGOUT"}),e({type:"CLEAR_STATE"})}},"Logout"))),r.a.createElement("div",{className:"home__header-buttons"},r.a.createElement(s.b,{to:"/add_city"},r.a.createElement("div",{className:"home__header-addNewCity",style:{margin:"3px"}},r.a.createElement(u.a,{variant:"contained"},"Add new city"))),r.a.createElement("div",{className:"home__header-selectCity",style:{margin:"3px"}},r.a.createElement(b,null)),r.a.createElement("div",{className:"home__header-removeCurrentCity",style:{margin:"3px"}},r.a.createElement(u.a,{variant:"contained",onClick:function(){e(function(e){return{type:"REMOVE_CURRENT_CITY",payload:e}}(a)),console.log(a)}},"Remove current city")))),r.a.createElement("main",{className:"home__main"},a?r.a.createElement("div",{className:"home__main-forecast-wrapper"},c.forecastLoading?r.a.createElement("div",{className:"home__main-forecast-loading"},r.a.createElement("h3",null,"Loading...")):c.getForecastError?r.a.createElement("div",{className:"home__main-forecast-error"},"Loading forecast Error: ",c.getForecastError):r.a.createElement(p,null)):r.a.createElement("div",{className:"home__main-addCity-button-wrapper"},r.a.createElement("h2",null,"Please press the button to select a city:"),r.a.createElement(s.b,{to:"/add_city",className:"login__body link"},r.a.createElement(u.a,{variant:"contained"},"Select city")))))},h=a(211);a(157);var O=function(){var e=Object(o.b)(),t=Object(n.useState)(""),a=Object(v.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),d=Object(v.a)(i,2),m=d[0],p=d[1],f=/^(?=[a-zA-Z._]{3,12}$)(?!.*[_.]{2})[^_.].*[^_.]$/;return r.a.createElement("div",{className:"login__wrapper"},r.a.createElement("div",{className:"login__head"},r.a.createElement("h2",null,"Please enter your name first:")),r.a.createElement("div",{className:"login__body"},r.a.createElement(h.a,{required:!0,id:"outlined-basic",label:"Name is required",variant:"outlined",value:c,onBlur:function(){return p("")},onChange:function(e){l(e.target.value),f.test(String(e.target.value))?p(""):p("Username requires 3 to 12 characters, only latin letters can be used")}}),r.a.createElement(s.b,{to:"/",className:"login__body link"},r.a.createElement(u.a,{variant:"contained",disabled:!c,onClick:function(){m?p("Invalid input"):(e(E(c)),l(""))}},"Next"))),r.a.createElement("div",{className:"login__error-wrapper"},r.a.createElement("p",{className:"login__error-input"}," ",m," ")))},S=a(14),j=a(209),T=a(210),N=a(217),I=a(215);a(158);var L=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.countries.countries})),a=Object(o.c)((function(e){return e.countries.getCountriesError})),c=Object(o.c)((function(e){return e.cities.cities})),l=Object(o.c)((function(e){return e.cities.getCitiesError})),i=0===(null===t||void 0===t?void 0:t.length),d=0===(null===c||void 0===c?void 0:c.length),E=Object(n.useState)(""),p=Object(v.a)(E,2),f=p[0],g=p[1],_=Object(n.useState)(""),y=Object(v.a)(_,2),b=y[0],C=y[1],O=Object(n.useState)(""),L=Object(v.a)(O,2),w=L[0],R=L[1],A=localStorage.getItem("selectedCity");return Object(n.useEffect)((function(){t.length||e((function(e){e({type:" GET_COUNTRIES_REQUEST"}),m()({method:"get",url:"https://countriesnow.space/api/v0.1/countries/flag/images"}).then((function(t){var a=t.data.data;e(function(e){return{type:" GET_COUNTRIES_SUCCESS",payload:e}}(a)),console.log(a)})).catch((function(t){var a=null===t||void 0===t?void 0:t.message;e(function(e){return{type:" GET_COUNTRIES_FAILURE",payload:e}}(a)),console.log("Error: ",a)}))}))}),[t]),Object(n.useEffect)((function(){f&&e(function(e){return function(t){t({type:"GET_CITIES_REQUEST"});var a={method:"post",url:"https://countriesnow.space/api/v0.1/countries/cities",data:{country:e}};m()(a).then((function(e){var a=e.data.data;t(function(e){return{type:"GET_CITIES_SUCCESS",payload:e}}(a))})).catch((function(e){var a=null===e||void 0===e?void 0:e.message;t(function(e){return{type:"GET_CITIES_FAILURE",payload:e}}(a)),console.log(e)}))}}(f))}),[f]),r.a.createElement("div",{className:"addCity__wrapper"},a&&r.a.createElement("div",{className:"addCity__error"},"Countries loading error: ",a)||l&&r.a.createElement("div",{className:"addCity__error"},"Cities loading error: ",l),r.a.createElement("div",{className:"addCity__autocomplete-country"},r.a.createElement(T.a,{onChange:function(e,t){return g(null===t||void 0===t?void 0:t.name)},id:"country-select",sx:{width:300},options:t,loading:i,isOptionEqualToValue:function(e,t){return e.name===t.name},getOptionLabel:function(e){return e.name},renderOption:function(e,t){return r.a.createElement(I.a,Object.assign({component:"li",sx:{"& > img":{mr:2,flexShrink:0}}},e),r.a.createElement("img",{loading:"lazy",width:"20",src:t.flag,alt:""}),t.name)},renderInput:function(e){return r.a.createElement(h.a,Object.assign({},e,{label:"Choose a country...",InputProps:Object(S.a)(Object(S.a)({},e.InputProps),{},{endAdornment:r.a.createElement(r.a.Fragment,null,i?r.a.createElement(N.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))}})),r.a.createElement("div",{className:"addCity__autocomplete-city"},f&&r.a.createElement(T.a,{onChange:function(e,t){A?R(t):C(t)},id:"city-select",sx:{width:300},options:c,loading:d,isOptionEqualToValue:function(e,t){return e===t},getOptionLabel:function(e){return e},renderOption:function(e,t){return r.a.createElement(I.a,Object.assign({component:"li",sx:{"& > img":{mr:2,flexShrink:0}}},e),t)},renderInput:function(e){return r.a.createElement(h.a,Object.assign({},e,{label:"Choose a city...",InputProps:Object(S.a)(Object(S.a)({},e.InputProps),{},{endAdornment:r.a.createElement(r.a.Fragment,null,d?r.a.createElement(N.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))}})),(b||w)&&r.a.createElement(s.b,{to:"/",className:"addCity__link link"},r.a.createElement(u.a,{onClick:function(){b?e(function(e){return{type:"SAVE_SELECTED_CITY",payload:e}}(b)):w&&e(function(e){return{type:"ADD_NEW_CITY",payload:e}}(w))},variant:"contained",endIcon:r.a.createElement(j.a,null)},"Save city")))};var w=function(){var e=Object(o.b)(),t=localStorage.getItem("username"),a=localStorage.getItem("selectedCity"),n=localStorage.getItem("favoritesCities");if(t&&e(E(t)),a&&e({type:"INIT_SELECTED_CITY",payload:a}),n){var c=JSON.parse(n);e(function(e){return{type:"SET_FAVORITES_CITIES",payload:e}}(c.data)),console.log(c)}var l=Object(o.c)((function(e){return e.login.username})),u=function(e){for(var t=e.component,a=arguments.length,n=new Array(a>1?a-1:0),c=1;c<a;c++)n[c-1]=arguments[c];return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return l?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/login"}})}}))};return r.a.createElement(s.a,null,r.a.createElement("div",{className:"mainScreen__wrapper"},r.a.createElement(i.d,null,r.a.createElement(u,{exact:!0,path:"/",component:C}),r.a.createElement(u,{exact:!0,path:"/add_city",component:L}),r.a.createElement(i.b,{path:"/login",component:O}),r.a.createElement(i.a,{from:"*",to:"/"}))))},R=a(46),A=a(104),x=a(105),D=a(18),U={citiesLoading:!1,cities:[],getCitiesError:"",selectedCity:"",favoritesCities:[]},F={countriesLoading:!1,countries:[],getCountriesError:""},G={forecastLoading:!1,forecastData:{},weatherData:[],getForecastError:""},k={username:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HANDLE_LOGIN":return localStorage.setItem("username",t.payload),{username:t.payload};case"HANDLE_LOGOUT":return localStorage.removeItem("username"),{initialState:k};default:return e}},Y=Object(R.combineReducers)({login:P,countries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case" GET_COUNTRIES_REQUEST":return Object(S.a)(Object(S.a)({},e),{},{countriesLoading:!0});case" GET_COUNTRIES_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{countriesLoading:!1,countries:t.payload,getCountriesError:""});case" GET_COUNTRIES_FAILURE":return Object(S.a)(Object(S.a)({},e),{},{countriesLoading:!1,getCountriesError:t.payload});default:return e}},cities:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_CITIES_REQUEST":return Object(S.a)(Object(S.a)({},t),{},{citiesLoading:!0});case"GET_CITIES_SUCCESS":return Object(S.a)(Object(S.a)({},t),{},{citiesLoading:!1,cities:a.payload,getCitiesError:""});case"GET_CITIES_FAILURE":return Object(S.a)(Object(S.a)({},t),{},{citiesLoading:!1,getCitiesError:a.payload});case"SAVE_SELECTED_CITY":return localStorage.setItem("selectedCity",a.payload),(null===t||void 0===t||null===(e=t.favoritesCities)||void 0===e?void 0:e.includes(a.payload))?Object(S.a)(Object(S.a)({},t),{},{selectedCity:a.payload}):(localStorage.setItem("favoritesCities",JSON.stringify({data:[a.payload]})),Object(S.a)(Object(S.a)({},t),{},{selectedCity:a.payload,favoritesCities:[a.payload]}));case"REPLACE_SELECTED_CITY":return localStorage.setItem("selectedCity",a.payload),Object(S.a)(Object(S.a)({},t),{},{selectedCity:a.payload});case"ADD_NEW_CITY":return t.favoritesCities.includes(a.payload)?Object(S.a)({},t):(localStorage.setItem("favoritesCities",JSON.stringify({data:[].concat(Object(D.a)(t.favoritesCities),[a.payload])})),Object(S.a)(Object(S.a)({},t),{},{favoritesCities:[].concat(Object(D.a)(t.favoritesCities),[a.payload])}));case"REMOVE_CURRENT_CITY":localStorage.removeItem("selectedCity");var n=Object(D.a)(t.favoritesCities).filter((function(e){return e!==a.payload}));localStorage.setItem("favoritesCities",JSON.stringify({data:n}));var r=n.length?n[0]:"";return localStorage.setItem("selectedCity",r),Object(S.a)(Object(S.a)({},t),{},{selectedCity:r,favoritesCities:n});case"INIT_SELECTED_CITY":return Object(S.a)(Object(S.a)({},t),{},{selectedCity:a.payload});case"SET_FAVORITES_CITIES":return Object(S.a)(Object(S.a)({},t),{},{favoritesCities:a.payload});case"CLEAR_STATE":return localStorage.clear(),{initialState:U};default:return t}},forecast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FORECAST_REQUEST":return Object(S.a)(Object(S.a)({},e),{},{forecastLoading:!0});case"GET_FORECAST_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{forecastLoading:!1,forecastData:t.payload,weatherData:t.payload.weather,getForecastError:""});case"GET_FORECAST_FAILURE":return Object(S.a)(Object(S.a)({},e),{},{forecastLoading:!1,getForecastError:t.payload});default:return e}}}),B=Object(R.createStore)(Y,Object(A.composeWithDevTools)(Object(R.applyMiddleware)(x.a)));function M(){return r.a.createElement(o.a,{store:B},r.a.createElement("div",{className:"App"},r.a.createElement(w,null)))}l.a.render(r.a.createElement(M,null),document.querySelector("#root"));var V=M;l.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.71f4d203.chunk.js.map