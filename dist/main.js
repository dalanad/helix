/*hlx components*/
(()=>{var Ae=`
<style>

 
</style>
    <div class="spacer"></div>
    <div class="thumb"></div>

 `,G=class extends HTMLElement{constructor(){super()}connectedCallback(){let e=document.createElement("template");e.innerHTML=Ae;let t=document.createElement("div"),s=this.querySelector('[slot="trigger"]');console.log(this.children),t.appendChild(s),this.appendChild(t),this.appendChild(e.content.cloneNode(!0)),this.tabIndex=0,this.onclick=()=>{}}};var je=`<style>

.thumb {
    width: 1rem;
    border-radius: 3px;
    height: 1rem;
    background: #ffffff;
}

.spacer,helix-toggle {
    transition: all ease-in 100ms
}

helix-toggle {
    display: flex;
    width: 2.5rem;
    padding: 3px;
    border-radius: 3px;
    margin: 6px 6px 6px 0;
}

helix-toggle.disabled {
    pointer-events: none;
    cursor: not-allowed;
    display: inline-block;
}

</style>
    <div class="spacer"></div>
    <div class="thumb"></div>

 `,pe=class extends HTMLElement{constructor(){super()}connectedCallback(){let e=document.createElement("template");e.innerHTML=je;let t=document.createElement("input");this.appendChild(t),t.type="hidden",t.name=this.getAttribute("name"),t.value=this.getAttribute("value")||"0",this.isChecked=t.value=="1",this.appendChild(e.content.cloneNode(!0)),this.tabIndex=0,this.update(),t.value=this.isChecked?1:0,this.onclick=()=>{this.focus(),this.isChecked=!this.isChecked,t.value=this.isChecked?1:0,this.update()}}update(){this.querySelector(".spacer").style.flex=this.isChecked===!0?"1 1 0":"0 ",this.style.background=this.isChecked?"var(--primary)":"var(--muted)"}};window.customElements.define("helix-toggle",pe);var K=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0;var v=(n,e,t=null)=>{for(;e!==t;){let s=e.nextSibling;n.removeChild(e),e=s}};var h=`{{lit-${String(Math.random()).slice(2)}}}`,Q=`<!--${h}-->`,ue=new RegExp(`${h}|${Q}`),k="$lit$",A=class{constructor(e,t){this.parts=[],this.element=t;let s=[],r=[],i=document.createTreeWalker(t.content,133,null,!1),a=0,o=-1,d=0,{strings:c,values:{length:u}}=e;for(;d<u;){let l=i.nextNode();if(l===null){i.currentNode=r.pop();continue}if(o++,l.nodeType===1){if(l.hasAttributes()){let m=l.attributes,{length:M}=m,b=0;for(let f=0;f<M;f++)he(m[f].name,k)&&b++;for(;b-- >0;){let f=c[d],E=U.exec(f)[2],N=E.toLowerCase()+k,w=l.getAttribute(N);l.removeAttribute(N);let g=w.split(ue);this.parts.push({type:"attribute",index:o,name:E,strings:g}),d+=g.length-1}}l.tagName==="TEMPLATE"&&(r.push(l),i.currentNode=l.content)}else if(l.nodeType===3){let m=l.data;if(m.indexOf(h)>=0){let M=l.parentNode,b=m.split(ue),f=b.length-1;for(let E=0;E<f;E++){let N,w=b[E];if(w==="")N=y();else{let g=U.exec(w);g!==null&&he(g[2],k)&&(w=w.slice(0,g.index)+g[1]+g[2].slice(0,-k.length)+g[3]),N=document.createTextNode(w)}M.insertBefore(N,l),this.parts.push({type:"node",index:++o})}b[f]===""?(M.insertBefore(y(),l),s.push(l)):l.data=b[f],d+=f}}else if(l.nodeType===8)if(l.data===h){let m=l.parentNode;(l.previousSibling===null||o===a)&&(o++,m.insertBefore(y(),l)),a=o,this.parts.push({type:"node",index:o}),l.nextSibling===null?l.data="":(s.push(l),o--),d++}else{let m=-1;for(;(m=l.data.indexOf(h,m+1))!==-1;)this.parts.push({type:"node",index:-1}),d++}}for(let l of s)l.parentNode.removeChild(l)}},he=(n,e)=>{let t=n.length-e.length;return t>=0&&n.slice(t)===e},j=n=>n.index!==-1,y=()=>document.createComment(""),U=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var Y=133;function X(n,e){let{element:{content:t},parts:s}=n,r=document.createTreeWalker(t,Y,null,!1),i=R(s),a=s[i],o=-1,d=0,c=[],u=null;for(;r.nextNode();){o++;let l=r.currentNode;for(l.previousSibling===u&&(u=null),e.has(l)&&(c.push(l),u===null&&(u=l)),u!==null&&d++;a!==void 0&&a.index===o;)a.index=u!==null?-1:a.index-d,i=R(s,i),a=s[i]}c.forEach(l=>l.parentNode.removeChild(l))}var Re=n=>{let e=n.nodeType===11?0:1,t=document.createTreeWalker(n,Y,null,!1);for(;t.nextNode();)e++;return e},R=(n,e=-1)=>{for(let t=e+1;t<n.length;t++){let s=n[t];if(j(s))return t}return-1};function me(n,e,t=null){let{element:{content:s},parts:r}=n;if(t==null){s.appendChild(e);return}let i=document.createTreeWalker(s,Y,null,!1),a=R(r),o=0,d=-1;for(;i.nextNode();)for(d++,i.currentNode===t&&(o=Re(e),t.parentNode.insertBefore(e,t));a!==-1&&r[a].index===d;){if(o>0){for(;a!==-1;)r[a].index+=o,a=R(r,a);return}a=R(r,a)}}var Ie=new WeakMap;var T=n=>typeof n=="function"&&Ie.has(n);var p={},L={};var P=class{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(let s of this.__parts)s!==void 0&&s.setValue(e[t]),t++;for(let s of this.__parts)s!==void 0&&s.commit()}_clone(){let e=K?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,r=document.createTreeWalker(e,133,null,!1),i=0,a=0,o,d=r.nextNode();for(;i<s.length;){if(o=s[i],!j(o)){this.__parts.push(void 0),i++;continue}for(;a<o.index;)a++,d.nodeName==="TEMPLATE"&&(t.push(d),r.currentNode=d.content),(d=r.nextNode())===null&&(r.currentNode=t.pop(),d=r.nextNode());if(o.type==="node"){let c=this.processor.handleTextExpression(this.options);c.insertAfterNode(d.previousSibling),this.__parts.push(c)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,o.name,o.strings,this.options));i++}return K&&(document.adoptNode(e),customElements.upgrade(e)),e}};var fe=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:n=>n}),Me=` ${h} `,_=class{constructor(e,t,s,r){this.strings=e,this.values=t,this.type=s,this.processor=r}getHTML(){let e=this.strings.length-1,t="",s=!1;for(let r=0;r<e;r++){let i=this.strings[r],a=i.lastIndexOf("<!--");s=(a>-1||s)&&i.indexOf("-->",a+1)===-1;let o=U.exec(i);o===null?t+=i+(s?Me:Q):t+=i.substr(0,o.index)+o[1]+o[2]+k+o[3]+h}return t+=this.strings[e],t}getTemplateElement(){let e=document.createElement("template"),t=this.getHTML();return fe!==void 0&&(t=fe.createHTML(t)),e.innerHTML=t,e}};var O=n=>n===null||!(typeof n=="object"||typeof n=="function"),q=n=>Array.isArray(n)||!!(n&&n[Symbol.iterator]),I=class{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let r=0;r<s.length-1;r++)this.parts[r]=this._createPart()}_createPart(){return new H(this)}_getValue(){let e=this.strings,t=e.length-1,s=this.parts;if(t===1&&e[0]===""&&e[1]===""){let i=s[0].value;if(typeof i=="symbol")return String(i);if(typeof i=="string"||!q(i))return i}let r="";for(let i=0;i<t;i++){r+=e[i];let a=s[i];if(a!==void 0){let o=a.value;if(O(o)||!q(o))r+=typeof o=="string"?o:String(o);else for(let d of o)r+=typeof d=="string"?d:String(d)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}},H=class{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==p&&(!O(e)||e!==this.value)&&(this.value=e,T(e)||(this.committer.dirty=!0))}commit(){for(;T(this.value);){let e=this.value;this.value=p,e(this)}this.value!==p&&this.committer.commit()}},S=class{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(y()),this.endNode=e.appendChild(y())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=y()),e.__insert(this.endNode=y())}insertAfterPart(e){e.__insert(this.startNode=y()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;T(this.__pendingValue);){let t=this.__pendingValue;this.__pendingValue=p,t(this)}let e=this.__pendingValue;e!==p&&(O(e)?e!==this.value&&this.__commitText(e):e instanceof _?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):q(e)?this.__commitIterable(e):e===L?(this.value=L,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){let t=this.startNode.nextSibling;e=e??"";let s=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){let t=this.options.templateFactory(e);if(this.value instanceof P&&this.value.template===t)this.value.update(e.values);else{let s=new P(t,e.processor,this.options),r=s._clone();s.update(e.values),this.__commitNode(r),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());let t=this.value,s=0,r;for(let i of e)r=t[s],r===void 0&&(r=new S(this.options),t.push(r),s===0?r.appendIntoPart(this):r.insertAfterPart(t[s-1])),r.setValue(i),r.commit(),s++;s<t.length&&(t.length=s,this.clear(r&&r.endNode))}clear(e=this.startNode){v(this.startNode.parentNode,e.nextSibling,this.endNode)}},F=class{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,s.length!==2||s[0]!==""||s[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;T(this.__pendingValue);){let t=this.__pendingValue;this.__pendingValue=p,t(this)}if(this.__pendingValue===p)return;let e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=p}},B=class extends I{constructor(e,t,s){super(e,t,s);this.single=s.length===2&&s[0]===""&&s[1]===""}_createPart(){return new Z(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}},Z=class extends H{},ye=!1;(()=>{try{let n={get capture(){return ye=!0,!1}};window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch(n){}})();var $=class{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=r=>this.handleEvent(r)}setValue(e){this.__pendingValue=e}commit(){for(;T(this.__pendingValue);){let i=this.__pendingValue;this.__pendingValue=p,i(this)}if(this.__pendingValue===p)return;let e=this.__pendingValue,t=this.value,s=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=e!=null&&(t==null||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=Ue(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=p}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}},Ue=n=>n&&(ye?{capture:n.capture,passive:n.passive,once:n.once}:n.capture);function ee(n){let e=C.get(n.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},C.set(n.type,e));let t=e.stringsArray.get(n.strings);if(t!==void 0)return t;let s=n.strings.join(h);return t=e.keyString.get(s),t===void 0&&(t=new A(n,n.getTemplateElement()),e.keyString.set(s,t)),e.stringsArray.set(n.strings,t),t}var C=new Map;var x=new WeakMap,te=(n,e,t)=>{let s=x.get(e);s===void 0&&(v(e,e.firstChild),x.set(e,s=new S(Object.assign({templateFactory:ee},t))),s.appendInto(e)),s.setValue(n),s.commit()};var se=class{handleAttributeExpressions(e,t,s,r){let i=t[0];return i==="."?new B(e,t.slice(1),s).parts:i==="@"?[new $(e,t.slice(1),r.eventContext)]:i==="?"?[new F(e,t.slice(1),s)]:new I(e,t,s).parts}handleTextExpression(e){return new S(e)}},ne=new se;typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");var z=(n,...e)=>new _(n,e,"html",ne);var _e=(n,e)=>`${n}--${e}`,W=!0;typeof window.ShadyCSS=="undefined"?W=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),W=!1);var Oe=n=>e=>{let t=_e(e.type,n),s=C.get(t);s===void 0&&(s={stringsArray:new WeakMap,keyString:new Map},C.set(t,s));let r=s.stringsArray.get(e.strings);if(r!==void 0)return r;let i=e.strings.join(h);if(r=s.keyString.get(i),r===void 0){let a=e.getTemplateElement();W&&window.ShadyCSS.prepareTemplateDom(a,n),r=new A(e,a),s.keyString.set(i,r)}return s.stringsArray.set(e.strings,r),r},qe=["html","svg"],He=n=>{qe.forEach(e=>{let t=C.get(_e(e,n));t!==void 0&&t.keyString.forEach(s=>{let{element:{content:r}}=s,i=new Set;Array.from(r.querySelectorAll("style")).forEach(a=>{i.add(a)}),X(s,i)})})},Se=new Set,Fe=(n,e,t)=>{Se.add(n);let s=t?t.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:i}=r;if(i===0){window.ShadyCSS.prepareTemplateStyles(s,n);return}let a=document.createElement("style");for(let c=0;c<i;c++){let u=r[c];u.parentNode.removeChild(u),a.textContent+=u.textContent}He(n);let o=s.content;t?me(t,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(s,n);let d=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&d!==null)e.insertBefore(d.cloneNode(!0),e.firstChild);else if(t){o.insertBefore(a,o.firstChild);let c=new Set;c.add(a),X(t,c)}},xe=(n,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");let s=t.scopeName,r=x.has(e),i=W&&e.nodeType===11&&!!e.host,a=i&&!Se.has(s),o=a?document.createDocumentFragment():e;if(te(n,o,Object.assign({templateFactory:Oe(s)},t)),a){let d=x.get(o);x.delete(o);let c=d.value instanceof P?d.value.template:void 0;Fe(s,o,c),v(e,e.firstChild),e.appendChild(o),x.set(e,d)}!r&&i&&window.ShadyCSS.styleElement(e.host)};var be;window.JSCompiler_renameProperty=(n,e)=>n;var re={toAttribute(n,e){switch(e){case Boolean:return n?"":null;case Object:case Array:return n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){switch(e){case Boolean:return n!==null;case Number:return n===null?null:Number(n);case Object:case Array:return JSON.parse(n)}return n}},we=(n,e)=>e!==n&&(e===e||n===n),ie={attribute:!0,type:String,converter:re,reflect:!1,hasChanged:we},oe=1,ae=1<<2,le=1<<3,de=1<<4,ce="finalized",D=class extends HTMLElement{constructor(){super();this.initialize()}static get observedAttributes(){this.finalize();let e=[];return this._classProperties.forEach((t,s)=>{let r=this._attributeNameForProperty(s,t);r!==void 0&&(this._attributeToPropertyMap.set(r,s),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;let e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(e,t=ie){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;let s=typeof e=="symbol"?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(r){let i=this[e];this[t]=r,this.requestUpdateInternal(e,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||ie}static finalize(){let e=Object.getPrototypeOf(this);if(e.hasOwnProperty(ce)||e.finalize(),this[ce]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){let t=this.properties,s=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(let r of s)this.createProperty(r,t[r])}}static _attributeNameForProperty(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=we){return s(e,t)}static _propertyValueFromAttribute(e,t){let s=t.type,r=t.converter||re,i=typeof r=="function"?r:r.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;let s=t.type,r=t.converter;return(r&&r.toAttribute||re.toAttribute)(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){let s=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,s)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=ie){let r=this.constructor,i=r._attributeNameForProperty(e,s);if(i!==void 0){let a=r._propertyValueToAttribute(t,s);if(a===void 0)return;this._updateState=this._updateState|le,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._updateState=this._updateState&~le}}_attributeToProperty(e,t){if(this._updateState&le)return;let s=this.constructor,r=s._attributeToPropertyMap.get(e);if(r!==void 0){let i=s.getPropertyOptions(r);this._updateState=this._updateState|de,this[r]=s._propertyValueFromAttribute(t,i),this._updateState=this._updateState&~de}}requestUpdateInternal(e,t,s){let r=!0;if(e!==void 0){let i=this.constructor;s=s||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),s.reflect===!0&&!(this._updateState&de)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|ae;try{await this._updatePromise}catch(t){}let e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&ae}get hasUpdated(){return this._updateState&oe}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1,t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(s){throw e=!1,this._markUpdated(),s}e&&(this._updateState&oe||(this._updateState=this._updateState|oe,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~ae}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}};be=ce;D[be]=!0;var ve=Element.prototype,Bt=ve.msMatchesSelector||ve.webkitMatchesSelector;var J=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),Pe=class{constructor(e,t){if(t!==Te)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(J?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}},Ce=n=>new Pe(String(n),Te);(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");var Ee={},V=class extends D{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;let e=this.getStyles();if(Array.isArray(e)){let t=(i,a)=>i.reduceRight((o,d)=>Array.isArray(d)?t(d,o):(o.add(d),o),a),s=t(e,new Set),r=[];s.forEach(i=>r.unshift(i)),this._styles=r}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!J){let s=Array.prototype.slice.call(t.cssRules).reduce((r,i)=>r+i.cssText,"");return Ce(s)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){let e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):J?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){let t=this.render();super.update(e),t!==Ee&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(s=>{let r=document.createElement("style");r.textContent=s.cssText,this.renderRoot.appendChild(r)}))}render(){return Ee}};V.finalized=!0;V.render=xe;var Be=` 
<div>
<svg style="height: 1.4em;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="10" r="30" stroke-dasharray="164 56">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.5s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
</circle>
</div>`,Ne=class extends V{createRenderRoot(){return this}content="";_firstUpdateDone=!1;static get properties(){return{loading:{type:Boolean},loadOnClick:{type:Boolean}}}async firstUpdated(){await new Promise(s=>setTimeout(s,0));let e=this.querySelector("#btx");e.addEventListener("click",s=>(this.loadOnClick&&setTimeout(()=>this._handleClick(),50),!0)),this._firstUpdateDone=!0;for(var t=1;t<this.childNodes.length;t++)e.isSameNode(this.childNodes[t])||e.appendChild(this.childNodes[t]);this.updateLoadingIndicator()}connectedCallback(){super.connectedCallback()}_handleClick(){this.loading=!this.loading}updated(e){this._firstUpdateDone&&this.updateLoadingIndicator()}updateLoadingIndicator(){let e=this.querySelector("#btx");this.content.trim()===""&&(this.width=e.offsetWidth,this.content=e.innerHTML),this.loading===!0?(e.innerHTML=Be,e.style.width=this.width+"px",e.setAttribute("disabled",!0)):(e.innerHTML=this.content,e.removeAttribute("disabled"))}render(){return z`<button id="btx" class="btn"></button> `}};customElements.define("hl-button",Ne);var $e='<span> Select <span style="float:right">\u02C5 &nbsp;</span></span>',ke=class extends HTMLElement{constructor(){super()}connectedCallback(){let e=document.createElement("template");e.innerHTML=$e,this.appendChild(e.content.cloneNode(!0)),this.classList.add("ctrl"),console.log(this),this.tabIndex=0,this.onclick=()=>{this.focus()}}};window.customElements.define("helix-select",ke);window.customElements.define("helix-dropdown",G);document.addEventListener("mousedown",function(){document.body.classList.add("using-mouse")});document.addEventListener("keydown",function(n){n.keyCode===9&&document.body.classList.remove("using-mouse")});})();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
