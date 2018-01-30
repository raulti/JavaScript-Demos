webpackJsonp([1],{51:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(18),r=n(52);o.platformBrowserDynamic().bootstrapModule(r.AppModule)},52:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(e,"__esModule",{value:!0});var r=n(20),i=n(0),s=n(53),a=n(55),c=n(9),l=function(){function t(){}return t=o([i.NgModule({bootstrap:[s.AppComponent],imports:[r.BrowserModule],declarations:[s.AppComponent,a.ChildComponent],providers:[c.KeyboardShortcuts]})],t)}();e.AppModule=l},53:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=n(9),a=function(){function t(t){this.keyboardShortcuts=t,this.isShowingChildView=!1,this.unlisten=null}return t.prototype.ngOnDestroy=function(){this.unlisten&&this.unlisten()},t.prototype.ngOnInit=function(){var t=this;this.unlisten=this.keyboardShortcuts.listen({"Command.F":function(e){console.log("Handler[ 0 ]: Command.F"),t.isShowingChildView=!0,e.preventDefault()},Escape:function(e){console.log("Handler[ 0 ]: Escape"),t.isShowingChildView=!1}},{priority:0})},t=o([i.Component({selector:"my-app",styles:[n(54)],template:'\n\t\t<p>\n\t\t\tUse <code>Command+F</code> to open the child view.\n\t\t\tUse <code>Esc</code> to close the child view.\n\t\t</p>\n\n\t\t<my-child *ngIf="isShowingChildView"></my-child>\n\t\t\n\t\t<p>\n\t\t\t<strong>Note</strong>: The key-commands do not work when the child Input\n\t\t\tis focused. This is because the default setting is to ignore events that\n\t\t\toriginate from a form element.\n\t\t</p>\n\t'}),r("design:paramtypes",[s.KeyboardShortcuts])],t)}();e.AppComponent=a},54:function(t,e){t.exports=":host {\n  display: block ;\n  font-size: 18px ;\n}\ncode {\n  background-color: #FAFAFA ;\n  border: 1px solid #999999 ;\n  border-radius: 5px 5px 5px 5px ;\n  color: red ;\n  display: inline-block;\n  padding: 1px 5px 2px 5px ;\n}\n"},55:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=n(9),a=function(){function t(t){this.keyboardShortcuts=t,this.isShowingSearch=!1,this.unlisten=null}return t.prototype.ngOnDestroy=function(){this.unlisten&&this.unlisten()},t.prototype.ngOnInit=function(){var t=this;this.unlisten=this.keyboardShortcuts.listen({"Command.F":function(e){console.log("Handler[ 100 ]: Command.F"),t.isShowingSearch=!0,e.preventDefault()}},{priority:100,terminalWhitelist:["Escape"]})},t=o([i.Component({selector:"my-child",styles:[n(56)],template:'\n\t\tUse <code>Command+F</code> to show search.\n\t\t\n\t\t<ng-template [ngIf]="isShowingSearch">\n\t\t\t<br /><br />\n\t\t\t<strong>Search:</strong>\n\t\t\t<input type="text" placeholder="Search...." size="30" autofocus />\n\t\t</ng-template>\n\t'}),r("design:paramtypes",[s.KeyboardShortcuts])],t)}();e.ChildComponent=a},56:function(t,e){t.exports=":host {\n  background-color: #FAFAFA ;\n  border: 1px solid #CCCCCC ;\n  border-radius: 3px 3px 3px 3px ;\n  display: block ;\n  margin: 16px 0px 16px 0px ;\n  padding: 20px 20px 20px 20px ;\n}\ninput {\n  font-size: inherit ;\n}\ncode {\n  background-color: #FFFFFF ;\n  border: 1px solid #999999 ;\n  border-radius: 5px 5px 5px 5px ;\n  color: red ;\n  display: inline-block;\n  padding: 1px 5px 2px 5px ;\n}\n"},9:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=n(0),a={"\b":"Backspace","\t":"Tab","":"Delete","":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"," ":"Space",".":"Dot"},c={command:"meta",ctrl:"control",del:"delete",down:"arrowdown",esc:"escape",left:"arrowleft",right:"arrowright",up:"arrowup"},l=function(){function t(t){var e=this;this.handleKeyboardEvent=function(t){for(var n,o=e.getKeyFromEvent(t),r=e.isEventFromInput(t),i=0,s=e.listeners;i<s.length;i++){var a=s[i];if(n=a.bindings[o]){if(!r||a.inputs){var c=e.zone.runGuarded(function(){return n(t)});if(!1===c)return;if(!0===c)continue}if("match"===a.terminal)return}if(!0===a.terminal&&!a.terminalWhitelist[o])return}},this.zone=t,this.listeners=[],this.normalizedKeys=Object.create(null),this.zone.runOutsideAngular(function(){window.addEventListener("keydown",e.handleKeyboardEvent)})}return t.prototype.listen=function(t,e){var n=this,o=this.addListener({priority:e.priority,terminal:this.normalizeTerminal(e.terminal),terminalWhitelist:this.normalizeTerminalWhitelist(e.terminalWhitelist),inputs:this.normalizeInputs(e.inputs),bindings:this.normalizeBindings(t)});return function(){n.removeListener(o)}},t.prototype.addListener=function(t){return this.listeners.push(t),this.listeners.sort(function(t,e){return t.priority<e.priority?1:t.priority>e.priority?-1:0}),t},t.prototype.getKeyFromEvent=function(t){var e=t.key||t.keyIdentifier||"Unidentified";e.startsWith("U+")&&(e=String.fromCharCode(parseInt(e.slice(2),16)));var n=[a[e]||e];return t.altKey&&n.push("Alt"),t.ctrlKey&&n.push("Control"),t.metaKey&&n.push("Meta"),t.shiftKey&&n.push("Shift"),this.normalizeKey(n.join("."))},t.prototype.isEventFromInput=function(t){if(t.target instanceof Node)switch(t.target.nodeName){case"INPUT":case"SELECT":case"TEXTAREA":return!0;default:return!1}return!1},t.prototype.normalizeBindings=function(t){var e=Object.create(null);for(var n in t)e[this.normalizeKey(n)]=t[n];return e},t.prototype.normalizeInputs=function(t){return void 0!==t&&t},t.prototype.normalizeKey=function(t){return this.normalizedKeys[t]||(this.normalizedKeys[t]=t.toLowerCase().split(".").map(function(t){return c[t]||t}).sort().join(".")),this.normalizedKeys[t]},t.prototype.normalizeTerminal=function(t){return void 0===t||t},t.prototype.normalizeTerminalWhitelist=function(t){var e=Object.create(null);if(t)for(var n=0,o=t;n<o.length;n++){var r=o[n];e[this.normalizeKey(r)]=!0}return e},t.prototype.removeListener=function(t){this.listeners=this.listeners.filter(function(e){return e!==t})},t=o([i.Injectable(),r("design:paramtypes",[s.NgZone])],t)}();e.KeyboardShortcuts=l}},[51]);