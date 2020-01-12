(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){var n=a(18),r=a(46);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var l={insert:"head",singleton:!1},o=(n(e.i,r,l),r.locals?r.locals:{});e.exports=o},46:function(e,t,a){(t=a(19)(!1)).push([e.i,"body {\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: absolute;\r\n    background-color: rgb(229, 229, 229)\r\n}\r\n\r\n.party-list {\r\n    margin: 4px;\r\n    position: absolute;\r\n    top: 4px;\r\n    right: 4px;\r\n}\r\n\r\n.hori-scroll {\r\n    margin: 4px;\r\n    overflow: auto;\r\n    white-space: nowrap;\r\n}\r\n\r\n.hori-scroll button {\r\n    margin: 4px;\r\n}\r\n\r\n.playground {\r\n    padding: 8px;\r\n}\r\n\r\n.loading {\r\n    margin-top: 1rem;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    nav {\r\n        margin-top: env(safe-area-inset-top);\r\n    }\r\n\r\n    .party-list {\r\n        margin-top: env(safe-area-inset-top);\r\n    }\r\n\r\n    .modal {\r\n        padding-top: env(safe-area-inset-top);\r\n        padding-bottom: env(safe-area-inset-bottom);\r\n    }\r\n\r\n    .playground {\r\n        padding-top: env(safe-area-inset-top);\r\n        padding-bottom: env(safe-area-inset-bottom);\r\n    }\r\n}\r\n\r\n/* Touch Keypad */\r\n\r\n.touch-keypad {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    z-index: 2;\r\n    background: rgba(255, 255, 255, 0.4);\r\n    padding-bottom: env(safe-area-inset-bottom);\r\n}\r\n\r\n.touch-keypad .btn-group-vertical {\r\n    width: 100%;\r\n}\r\n\r\n.touch-keypad .numeric-keypad {\r\n    width: 75%;\r\n}\r\n\r\n.touch-keypad-key {\r\n    min-height: 58px;\r\n}",""]),e.exports=t},47:function(e,t,a){var n=a(18),r=a(48);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var l={insert:"head",singleton:!1},o=(n(e.i,r,l),r.locals?r.locals:{});e.exports=o},48:function(e,t,a){(t=a(19)(!1)).push([e.i,".guessnum-home-screen {\r\n    height: 90vh;\r\n}\r\n\r\nbody.guessnum-correct {\r\n    background-color: rgb(166, 255, 168)\r\n}",""]),e.exports=t},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),s=a(55),i=a(51),c=a(26),u=a(57),m=a(56),d=function(e){return r.a.createElement(s.a,{show:e.show,animation:!1,backdrop:"static"},r.a.createElement(s.a.Header,null,r.a.createElement(s.a.Title,null,"Play³")),r.a.createElement(s.a.Body,null,r.a.createElement("label",null,"Join a party:"),r.a.createElement(i.a,{className:"mb-3"},r.a.createElement(c.a,{placeholder:"Party Code","aria-label":"Party Code","aria-describedby":"party-code-field-addon"}),r.a.createElement(i.a.Append,null,r.a.createElement(u.a,{variant:"success"},"Join"))),r.a.createElement("div",{className:"d-flex"},r.a.createElement(u.a,{variant:"success",className:"btn-block"},"Quick join"),r.a.createElement(u.a,{variant:"secondary",className:"ml-2"},r.a.createElement("i",{className:"fas fa-cog"}))),r.a.createElement("hr",null),r.a.createElement("p",null,"Start a new game:"),r.a.createElement("div",{className:"hori-scroll"},r.a.createElement(u.a,{variant:"secondary",onClick:function(){e.startGame("classic")}},r.a.createElement("i",{className:"fas fa-heart fa-2x"}),r.a.createElement("br",null),"Classic"),r.a.createElement(u.a,{variant:"secondary",onClick:function(){e.startGame("royal")}},r.a.createElement("i",{className:"fas fa-grin-stars fa-2x"}),r.a.createElement("br",null),"Royal"),r.a.createElement(u.a,{variant:"secondary",onClick:function(){e.startGame("twentyone")}},r.a.createElement("i",{className:"fas fa-sort-numeric-down fa-2x"}),r.a.createElement("br",null),"Twenty-one"),r.a.createElement(u.a,{variant:"secondary",onClick:function(){e.startGame("guessnum")}},r.a.createElement("i",{className:"fas fa-list-ol fa-2x"}),r.a.createElement("br",null),"Guess Number"),r.a.createElement(u.a,{variant:"secondary",onClick:function(){e.startGame("guessbig")}},r.a.createElement("i",{className:"fas fa-dice fa-2x"}),r.a.createElement("br",null),"Guess Big")),r.a.createElement(m.a.Check,{type:"switch",id:"local-mode-switch",label:"Start game locally",checked:!0,disabled:!0})),r.a.createElement(s.a.Footer,null,r.a.createElement("p",null,"Application licensed under the GPLv3 Public License.")))};a(36),a(38),a(42),a(43),a(44),a(45);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(e){var t,a=y(r.a.useState(!1),2),n=a[0],l=a[1],o=[];for(t=e.min;t<=e.max;t++)o.push(r.a.createElement("option",{key:t},t));n||(n=e.min);var d=[];for(t=1;t<=n;t++)d.push(r.a.createElement(i.a,{className:"mb-3",key:t},r.a.createElement(i.a.Prepend,null,r.a.createElement(i.a.Text,{id:"player-number-"+t},"Player ",t)),r.a.createElement(c.a,{placeholder:"Player "+t,"aria-label":"Nickname","aria-describedby":"player-number-"+t,id:"player-nick-"+t})));return r.a.createElement(s.a,{show:e.show,animation:!1,backdrop:"static"},r.a.createElement(s.a.Header,null,r.a.createElement(s.a.Title,null,"Setup Players")),r.a.createElement(s.a.Body,null,r.a.createElement("p",null,"This game requires at least ",e.min," player(s) and at maximum ",e.max," player(s). Please enter the names for the players below:"),r.a.createElement(m.a.Group,null,r.a.createElement(m.a.Label,null,"Players:"),r.a.createElement(m.a.Control,{as:"select",id:"localPlayersSelect",onChange:function(){var e=document.getElementById("localPlayersSelect").value;l(e)}},o)),d,r.a.createElement(u.a,{variant:"success",block:!0,onClick:function(){var t,a,r=[];for(t=1;t<=n;t++)""===(a=document.getElementById("player-nick-"+t).value)&&(a="Player "+t),r.push(a);e.onComplete(r)}},"Continue")),r.a.createElement(s.a.Footer,null,r.a.createElement("p",null,"Application licensed under the GPLv3 Public License.")))},h=function(e){return r.a.createElement(s.a,{show:e.show,backdrop:"static"},r.a.createElement(s.a.Header,null,r.a.createElement(s.a.Title,null,"Pass to ",e.playerName)),r.a.createElement(s.a.Body,null,r.a.createElement("p",null,"It is ",r.a.createElement("b",null,e.playerName),"'s turn! Pass the device and let ",e.playerName,' to press the "Continue" button.'),r.a.createElement(u.a,{variant:"success",block:!0,onClick:e.onContinue},"Continue")),r.a.createElement(s.a.Footer,null,r.a.createElement("p",null,"Application licensed under the GPLv3 Public License.")))},f=function(e){return r.a.createElement(s.a,{show:e.show,backdrop:"static"},r.a.createElement(s.a.Header,null,r.a.createElement(s.a.Title,null,"Keypad or keyboard?")),r.a.createElement(s.a.Body,null,r.a.createElement("p",null,"Please select either to use keypad or keyboard for input:"),r.a.createElement("div",{className:"d-flex"},r.a.createElement(u.a,{block:!0},r.a.createElement("i",{className:"fas fa-keyboard"}),r.a.createElement("br",null),"Keyboard"),r.a.createElement(u.a,{block:!0},r.a.createElement("i",{className:"fas fa-gamepad"}),r.a.createElement("br",null),"Keypad"))),r.a.createElement(s.a.Footer,null,r.a.createElement("p",null,"Application licensed under the GPLv3 Public License.")))},b=a(52);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=E(this,k(t).call(this,e))).players=!1,a.turns=0,a.state={loading:!0,loadingMsg:"Loading playground",keypad:!0},a}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),a=t,(n=[{key:"componentDidMount",value:function(){this.props.localMode?this.setupLocalPlayers(this.getMinimumPlayers(),this.getMaximumPlayers()):this.enable()}},{key:"componentWillUnmount",value:function(){this.disable()}},{key:"isSetupComplete",value:function(){return this.props.localMode&&this.players}},{key:"setupLocalPlayers",value:function(e,t){this.setState({loadingMsg:"Setting up local players",minPlayers:e,maxPlayers:t,setupLocalPlayers:!0})}},{key:"startGame",value:function(){}},{key:"resetTurns",value:function(){this.turns=0}},{key:"ready",value:function(){this.props.localMode&&this.startGame()}},{key:"readyNextTurn",value:function(){if(this.props.localMode)if(this.players.length>1){var e=this.players[this.turns++%this.players.length];this.setState({waitPlayer:!0,playerName:e})}else this.nextTurn()}},{key:"leave",value:function(){this.disable(),this.props.onDisable()}},{key:"getMinimumPlayers",value:function(){return 1}},{key:"getMaximumPlayers",value:function(){return 1}},{key:"nextTurn",value:function(){}},{key:"enable",value:function(){}},{key:"disable",value:function(){}},{key:"renderPlayground",value:function(){}},{key:"render",value:function(){var e,t=this,a=!1;if(this.players)for(a=[],e=0;e<this.players.length;e++)a.push(r.a.createElement("div",{key:this.players[e]},r.a.createElement("span",{className:this.state.playerName===this.players[e]?"font-weight-bold":""},this.players[e]),r.a.createElement("br",null)));return r.a.createElement("div",{className:"container-fluid playground"},this.state.loading&&r.a.createElement("div",{className:"loading d-flex align-items-center justify-content-center"},r.a.createElement("center",null,r.a.createElement(b.a,{animation:"border"}),r.a.createElement("br",null),r.a.createElement("span",null,this.state.loadingMsg))),this.isSetupComplete()&&this.renderPlayground(),this.state.selectKeypadKeyboard&&r.a.createElement(f,{show:!0}),this.state.setupLocalPlayers&&r.a.createElement(p,{min:this.state.minPlayers,max:this.state.maxPlayers,show:this.state.setupLocalPlayers,onComplete:function(e){console.log(e),t.players=e,t.setState({setupLocalPlayers:!1,loadingMsg:"Loading playground"}),t.enable()}}),this.state.waitPlayer&&r.a.createElement(h,{show:this.state.waitPlayer,playerName:this.state.playerName,onContinue:function(){t.setState({waitPlayer:!1}),t.nextTurn()}.bind(this)}),a&&r.a.createElement("div",{className:"party-list"},r.a.createElement("h4",null,"Party"),a))}}])&&v(a.prototype,n),l&&v(a,l),t}(r.a.Component),S=a(53),N=a(54),M=function(e){var t,a,n,l,o=[],s=[[1,2,3],[4,5,6],[7,8,9]];for(a=0;a<s.length;a++){for(t=[],n=0;n<s[a].length;n++)l=e.enabled.includes(s[a][n]),t.push(r.a.createElement(u.a,{variant:l?"outline-secondary":"secondary",className:"py-3 touch-keypad-key touch-keypad-value",key:a+"-"+n,onClick:e.onNumberClick,disabled:!l},s[a][n]));o.push(r.a.createElement(S.a,{key:a},t))}return r.a.createElement(N.a,{fluid:!0,className:"touch-keypad row",style:{display:e.show?"":"none"}},r.a.createElement(S.a,{vertical:!0},o,r.a.createElement(S.a,null,r.a.createElement(u.a,{variant:"primary",className:"py-3 touch-keypad-key touch-keypad-function touch-keypad-function-done",disabled:!e.doneEnabled,onClick:e.onDoneClick},r.a.createElement("i",{className:"fas fa-check"})),r.a.createElement(u.a,{variant:e.enabled.includes(0)?"outline-secondary":"secondary",className:"py-3 touch-keypad-key touch-keypad-value",onClick:e.onNumberClick,disabled:!e.enabled.includes(0)},"0"),r.a.createElement(u.a,{variant:"warning",className:"py-3 touch-keypad-key touch-keypad-function touch-keypad-function-backspace",disabled:!e.backspaceEnabled,onClick:e.onBackspaceClick},r.a.createElement("i",{className:"fas fa-backspace"})))))};a(47);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K={guessnum:function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=T(t).call(this,e))||"object"!==P(r)&&"function"!=typeof r?O(n):r).maximum=100,a.randCount=0,a.guess=a.guess.bind(O(a)),a}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),a=t,(n=[{key:"getMinimumPlayers",value:function(){return 1}},{key:"getMaximumPlayers",value:function(){return 4}},{key:"enable",value:function(){this.players.length>2&&(this.maximum=100*this.players.length),this.setState({loading:!1,homeScreen:!0,gameScreen:!1,text:0,number:0,numberMin:1,numberMax:this.maximum,enabledKeys:[]}),this.random()}},{key:"disable",value:function(){clearInterval(this.interval),document.getElementsByTagName("body")[0].classList.remove("guessnum-correct"),clearTimeout(this.timeout)}},{key:"random",value:function(){var e=Math.floor(Math.random()*this.maximum);this.setState({text:e}),this.randCount++,this.randCount<50?this.timeout=setTimeout(function(){this.random()}.bind(this),25):this.state.homeScreen?(this.randCount=0,this.timeout=setTimeout(function(){this.random()}.bind(this),Math.floor(5e3*Math.random()))):(this.randCount=0,e=Math.floor(Math.random()*this.maximum),this.setState({text:"?",number:e}),this.readyNextTurn())}},{key:"nextTurn",value:function(){this.state.keypad||(document.getElementById("guess-number-field").disabled=!1,document.getElementById("guess-number-field").focus()),this.setState({enabledKeys:[1,2,3,4,5,6,7,8,9,0]}),this.updateKeypad()}},{key:"updateKeypad",value:function(){}},{key:"isKeyAvailable",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(0===t&&0===a)return!1;var n=Math.floor(Math.log10(this.state.numberMin)),r=Math.floor(Math.log10(this.state.numberMax));return console.log("key: "+t+" len: "+a),console.log("minLog: "+n+" maxLog: "+r),console.log("numMin/pow: "+Math.floor(this.state.numberMin/Math.pow(10,a))),console.log("powMinloglen: "+Math.pow(t,n-a)),console.log("numMax/pow: "+Math.floor(this.state.numberMax/Math.pow(10,a))),console.log("powMaxloglen: "+Math.pow(t,r-a)),Math.floor(this.state.numberMin/Math.pow(10,a))<Math.pow(t,n-a)?(console.log("Minlog success"),n-a>0?(console.log("Not len 0"),this.isKeyAvailable(t,a+1)):(console.log("Done true"),!0)):Math.floor(this.state.numberMax/Math.pow(10,a))>Math.pow(t,r-a)?(console.log("Maxlog success"),r-a>0?(console.log("Not len 0"),this.isKeyAvailable(t,a+1)):(console.log("Done true"),!0)):(console.log("Not correct"),!1)}},{key:"startGame",value:function(){clearTimeout(this.timeout),this.setState({homeScreen:!1,gameScreen:!0,playerName:!1,numberMin:1,numberMax:this.maximum}),this.resetTurns(),this.random()}},{key:"countUpDownTo",value:function(e){var t=this.state.text;if(e>t)this.setState({text:t+1}),this.timeout=setTimeout(function(){this.countUpDownTo(e)}.bind(this),750/(e-t));else if(e<t)this.setState({text:t-1}),this.timeout=setTimeout(function(){this.countUpDownTo(e)}.bind(this),750/(t-e));else{if(e===this.state.number)return this.setState({gameScreen:!1,resultScreen:!0}),void(this.interval=setInterval((function(){var e=document.getElementsByTagName("body")[0].classList;e.contains("guessnum-correct")?e.remove("guessnum-correct"):e.add("guessnum-correct")}),1e3));this.readyNextTurn()}}},{key:"guess",value:function(){this.setState({enabledKeys:[]});var e=document.getElementById("guess-number-field").value;if(""===e)return this.setState({enabledKeys:[1,2,3,4,5,6,7,8,9,0]}),void this.setState({error:"It cannot be blank."});var t=parseInt(e);return isNaN(t)?(this.setState({enabledKeys:[1,2,3,4,5,6,7,8,9,0]}),void this.setState({error:"It must be an integer."})):t>=this.state.numberMax?(this.setState({error:"It cannot be larger than the maximum value."}),void this.setState({enabledKeys:[1,2,3,4,5,6,7,8,9,0]})):t<=this.state.numberMin?(this.setState({error:"It cannot be less than the minimum value."}),void this.setState({enabledKeys:[1,2,3,4,5,6,7,8,9,0]})):(this.setState({error:""}),t>this.state.number?this.setState({numberMax:t}):this.setState({numberMin:t}),"?"===this.state.text?(this.setState({text:t}),document.getElementById("guess-number-field").value="",this.state.keypad||document.getElementById("guess-number-field").focus(),void this.readyNextTurn()):(this.state.keypad||(document.getElementById("guess-number-field").disabled=!0),this.countUpDownTo(t),void(document.getElementById("guess-number-field").value="")))}},{key:"renderPlayground",value:function(){var e=this;return r.a.createElement("div",null,this.state.homeScreen&&r.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center guessnum-home-screen"},r.a.createElement("p",{className:"display-2"},this.state.text),r.a.createElement("p",{className:"display-4"},"Guess The Number"),r.a.createElement("br",null),r.a.createElement("div",{className:"d-flex"},r.a.createElement(u.a,{variant:"success",onClick:function(){e.ready()}},"Ready"),r.a.createElement(u.a,{variant:"secondary",className:"ml-3"},"Instructions"),r.a.createElement(u.a,{variant:"danger",className:"ml-3",onClick:function(){e.leave()}},"Leave"))),this.state.gameScreen&&r.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center guessnum-home-screen"},r.a.createElement("p",{className:"display-2"},this.state.text),r.a.createElement("p",{className:"display-4"},this.state.numberMin," - ",this.state.numberMax),r.a.createElement("br",null),r.a.createElement(i.a,{className:"ml-8 mr-8"},r.a.createElement(c.a,{id:"guess-number-field",type:"number",placeholder:"Your Guess","aria-label":"Your Guess",onKeyPress:function(t){"Enter"===t.key&&e.guess()},disabled:!0}),r.a.createElement(i.a.Append,null,r.a.createElement(u.a,{variant:"success",onClick:this.guess},"Guess"))),r.a.createElement("br",null),r.a.createElement("p",{className:"text-danger"},this.state.error)),this.state.resultScreen&&r.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center guessnum-home-screen"},r.a.createElement("p",{className:"display-2"},this.state.text),r.a.createElement("p",{className:"display-4 text-success"},"Bingo!"),this.state.playerName&&r.a.createElement("p",null,"Winner: ",r.a.createElement("b",null,this.state.playerName)),r.a.createElement("br",null),r.a.createElement("div",{className:"d-flex"},r.a.createElement(u.a,{variant:"success",onClick:function(){clearInterval(e.interval),document.getElementsByTagName("body")[0].classList.remove("guessnum-correct"),e.ready()}},"Ready"),r.a.createElement(u.a,{variant:"secondary",className:"ml-3"},"Instructions"),r.a.createElement(u.a,{variant:"danger",className:"ml-3",onClick:function(){e.leave()}},"Leave"))),r.a.createElement(M,{show:this.state.gameScreen,enabled:this.state.enabledKeys,doneEnabled:!0,backspaceEnabled:!0,onNumberClick:function(t){t.preventDefault(),console.log("Click num");var a=t.target.innerHTML;document.getElementById("guess-number-field").value=document.getElementById("guess-number-field").value+a,e.updateKeypad()},onDoneClick:function(t){t.preventDefault(),console.log("Click done"),e.guess()},onBackspaceClick:function(t){t.preventDefault(),console.log("Click bs"),document.getElementById("guess-number-field").value=document.getElementById("guess-number-field").value.slice(0,-1),e.updateKeypad()}}))}}])&&C(a.prototype,n),l&&C(a,l),t}(x)},D=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=B(t).call(this,e))||"object"!==_(r)&&"function"!=typeof r?L(n):r).state={modalShow:!0,playground:!1},a.startGame=a.startGame.bind(L(a)),a}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,e),a=t,(n=[{key:"startGame",value:function(e){var t=this;if(K[e]){var a=document.getElementById("local-mode-switch").checked;this.setState({modalShow:!1,playground:r.a.createElement(K[e],{localMode:a,onDisable:function(){t.setState({modalShow:!0,playground:!1})}})})}else alert("The selected game is currently unavailable.")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.playground,r.a.createElement(d,{show:this.state.modalShow,onHide:function(){return e.setState({modalShow:!1})},startGame:this.startGame}))}}])&&I(a.prototype,n),l&&I(a,l),t}(r.a.Component);o.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=app.d29139d7a02bb722abcb.js.map