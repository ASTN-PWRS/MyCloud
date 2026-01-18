(function(Pe){typeof define=="function"&&define.amd?define(Pe):Pe()})((function(){"use strict";var Pe=Object.defineProperty,Jo=Object.defineProperties,tr=Object.getOwnPropertyDescriptor,er=Object.getOwnPropertyDescriptors,Is=Object.getOwnPropertySymbols,ir=Object.prototype.hasOwnProperty,sr=Object.prototype.propertyIsEnumerable,Ni=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Ui=t=>{throw TypeError(t)},Os=(t,e,i)=>e in t?Pe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Zt=(t,e)=>{for(var i in e||(e={}))ir.call(e,i)&&Os(t,i,e[i]);if(Is)for(var i of Is(e))sr.call(e,i)&&Os(t,i,e[i]);return t},Me=(t,e)=>Jo(t,er(e)),r=(t,e,i,s)=>{for(var o=s>1?void 0:s?tr(e,i):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(o=(s?n(e,i,o):n(o))||o);return s&&o&&Pe(e,i,o),o},Ls=(t,e,i)=>e.has(t)||Ui("Cannot "+i),or=(t,e,i)=>(Ls(t,e,"read from private field"),e.get(t)),rr=(t,e,i)=>e.has(t)?Ui("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),ar=(t,e,i,s)=>(Ls(t,e,"write to private field"),e.set(t,i),i),nr=function(t,e){this[0]=t,this[1]=e},lr=t=>{var e=t[Ni("asyncIterator")],i=!1,s,o={};return e==null?(e=t[Ni("iterator")](),s=a=>o[a]=n=>e[a](n)):(e=e.call(t),s=a=>o[a]=n=>{if(i){if(i=!1,a==="throw")throw n;return n}return i=!0,{done:!1,value:new nr(new Promise(d=>{var c=e[a](n);c instanceof Object||Ui("Object expected"),d(c)}),1)}}),o[Ni("iterator")]=()=>o,s("next"),"throw"in e?s("throw"):o.throw=a=>{throw a},"return"in e&&s("return"),o},Re=new WeakMap,Fe=new WeakMap,Ve=new WeakMap,Wi=new WeakSet,ui=new WeakMap,Jt=class{constructor(t,e){this.handleFormData=i=>{const s=this.options.disabled(this.host),o=this.options.name(this.host),a=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!n&&typeof o=="string"&&o.length>0&&typeof a<"u"&&(Array.isArray(a)?a.forEach(d=>{i.formData.append(o,d.toString())}):i.formData.append(o,a.toString()))},this.handleFormSubmit=i=>{var s;const o=this.options.disabled(this.host),a=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=Re.get(this.form))==null||s.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!o&&!a(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ui.set(this.host,[])},this.handleInteraction=i=>{const s=ui.get(this.host);s.includes(i.type)||s.push(i.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Zt({form:i=>{const s=i.form;if(s){const a=i.getRootNode().querySelector(`#${s}`);if(a)return a}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var s;return(s=i.disabled)!=null?s:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,s)=>i.value=s,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),ui.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ui.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Re.has(this.form)?Re.get(this.form).add(this.host):Re.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Fe.has(this.form)||(Fe.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ve.has(this.form)||(Ve.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Re.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Fe.has(this.form)&&(this.form.reportValidity=Fe.get(this.form),Fe.delete(this.form)),Ve.has(this.form)&&(this.form.checkValidity=Ve.get(this.form),Ve.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Wi.add(t):Wi.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{e.hasAttribute(s)&&i.setAttribute(s,e.getAttribute(s))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=!!Wi.has(e),s=!!e.required;e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},pi=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),cr=Object.freeze(Me(Zt({},pi),{valid:!1,valueMissing:!0})),dr=Object.freeze(Me(Zt({},pi),{valid:!1,customError:!0}));const fi=globalThis,qi=fi.ShadowRoot&&(fi.ShadyCSS===void 0||fi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ji=Symbol(),Ds=new WeakMap;let Ps=class{constructor(e,i,s){if(this._$cssResult$=!0,s!==ji)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(qi&&e===void 0){const s=i!==void 0&&i.length===1;s&&(e=Ds.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Ds.set(i,e))}return e}toString(){return this.cssText}};const hr=t=>new Ps(typeof t=="string"?t:t+"",void 0,ji),T=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((s,o,a)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[a+1],t[0]);return new Ps(i,t,ji)},ur=(t,e)=>{if(qi)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const s=document.createElement("style"),o=fi.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}},Ms=qi?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const s of e.cssRules)i+=s.cssText;return hr(i)})(t):t;const{is:pr,defineProperty:fr,getOwnPropertyDescriptor:mr,getOwnPropertyNames:br,getOwnPropertySymbols:gr,getPrototypeOf:vr}=Object,mi=globalThis,Rs=mi.trustedTypes,yr=Rs?Rs.emptyScript:"",wr=mi.reactiveElementPolyfillSupport,Be=(t,e)=>t,xe={toAttribute(t,e){switch(e){case Boolean:t=t?yr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Ki=(t,e)=>!pr(t,e),Fs={attribute:!0,type:String,converter:xe,reflect:!1,useDefault:!1,hasChanged:Ki};Symbol.metadata??=Symbol("metadata"),mi.litPropertyMetadata??=new WeakMap;let ke=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=Fs){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(e,s,i);o!==void 0&&fr(this.prototype,e,o)}}static getPropertyDescriptor(e,i,s){const{get:o,set:a}=mr(this.prototype,e)??{get(){return this[i]},set(n){this[i]=n}};return{get:o,set(n){const d=o?.call(this);a?.call(this,n),this.requestUpdate(e,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Fs}static _$Ei(){if(this.hasOwnProperty(Be("elementProperties")))return;const e=vr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Be("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Be("properties"))){const i=this.properties,s=[...br(i),...gr(i)];for(const o of s)this.createProperty(o,i[o])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[s,o]of i)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[i,s]of this.elementProperties){const o=this._$Eu(i,s);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const o of s)i.unshift(Ms(o))}else e!==void 0&&i.push(Ms(e));return i}static _$Eu(e,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ur(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,i,s){this._$AK(e,s)}_$ET(e,i){const s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(o!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:xe).toAttribute(i,s.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,i){const s=this.constructor,o=s._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=s.getPropertyOptions(o),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:xe;this._$Em=o;const d=n.fromAttribute(i,a.type);this[o]=d??this._$Ej?.get(o)??d,this._$Em=null}}requestUpdate(e,i,s,o=!1,a){if(e!==void 0){const n=this.constructor;if(o===!1&&(a=this[e]),s??=n.getPropertyOptions(e),!((s.hasChanged??Ki)(a,i)||s.useDefault&&s.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,i,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:s,reflect:o,wrapped:a},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??i??this[e]),a!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(i=void 0),this._$AL.set(e,i)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s){const{wrapped:n}=a,d=this[o];n!==!0||this._$AL.has(o)||d===void 0||this.C(o,void 0,a,d)}}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(i)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(e){}firstUpdated(e){}};ke.elementStyles=[],ke.shadowRootOptions={mode:"open"},ke[Be("elementProperties")]=new Map,ke[Be("finalized")]=new Map,wr?.({ReactiveElement:ke}),(mi.reactiveElementVersions??=[]).push("2.1.2");const Xi=globalThis,Vs=t=>t,bi=Xi.trustedTypes,Bs=bi?bi.createPolicy("lit-html",{createHTML:t=>t}):void 0,Hs="$lit$",ee=`lit$${Math.random().toFixed(9).slice(2)}$`,Ns="?"+ee,_r=`<${Ns}>`,ce=document,He=()=>ce.createComment(""),Ne=t=>t===null||typeof t!="object"&&typeof t!="function",Yi=Array.isArray,xr=t=>Yi(t)||typeof t?.[Symbol.iterator]=="function",Gi=`[ 	
\f\r]`,Ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Us=/-->/g,Ws=/>/g,de=RegExp(`>|${Gi}(?:([^\\s"'>=/]+)(${Gi}*=${Gi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qs=/'/g,js=/"/g,Ks=/^(?:script|style|textarea|title)$/i,kr=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),y=kr(1),wt=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Xs=new WeakMap,he=ce.createTreeWalker(ce,129);function Ys(t,e){if(!Yi(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bs!==void 0?Bs.createHTML(e):e}const Cr=(t,e)=>{const i=t.length-1,s=[];let o,a=e===2?"<svg>":e===3?"<math>":"",n=Ue;for(let d=0;d<i;d++){const c=t[d];let u,f,h=-1,p=0;for(;p<c.length&&(n.lastIndex=p,f=n.exec(c),f!==null);)p=n.lastIndex,n===Ue?f[1]==="!--"?n=Us:f[1]!==void 0?n=Ws:f[2]!==void 0?(Ks.test(f[2])&&(o=RegExp("</"+f[2],"g")),n=de):f[3]!==void 0&&(n=de):n===de?f[0]===">"?(n=o??Ue,h=-1):f[1]===void 0?h=-2:(h=n.lastIndex-f[2].length,u=f[1],n=f[3]===void 0?de:f[3]==='"'?js:qs):n===js||n===qs?n=de:n===Us||n===Ws?n=Ue:(n=de,o=void 0);const m=n===de&&t[d+1].startsWith("/>")?" ":"";a+=n===Ue?c+_r:h>=0?(s.push(u),c.slice(0,h)+Hs+c.slice(h)+ee+m):c+ee+(h===-2?d:m)}return[Ys(t,a+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class We{constructor({strings:e,_$litType$:i},s){let o;this.parts=[];let a=0,n=0;const d=e.length-1,c=this.parts,[u,f]=Cr(e,i);if(this.el=We.createElement(u,s),he.currentNode=this.el.content,i===2||i===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=he.nextNode())!==null&&c.length<d;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(Hs)){const p=f[n++],m=o.getAttribute(h).split(ee),b=/([.?@])?(.*)/.exec(p);c.push({type:1,index:a,name:b[2],strings:m,ctor:b[1]==="."?Sr:b[1]==="?"?zr:b[1]==="@"?Ar:gi}),o.removeAttribute(h)}else h.startsWith(ee)&&(c.push({type:6,index:a}),o.removeAttribute(h));if(Ks.test(o.tagName)){const h=o.textContent.split(ee),p=h.length-1;if(p>0){o.textContent=bi?bi.emptyScript:"";for(let m=0;m<p;m++)o.append(h[m],He()),he.nextNode(),c.push({type:2,index:++a});o.append(h[p],He())}}}else if(o.nodeType===8)if(o.data===Ns)c.push({type:2,index:a});else{let h=-1;for(;(h=o.data.indexOf(ee,h+1))!==-1;)c.push({type:7,index:a}),h+=ee.length-1}a++}}static createElement(e,i){const s=ce.createElement("template");return s.innerHTML=e,s}}function Ce(t,e,i=t,s){if(e===wt)return e;let o=s!==void 0?i._$Co?.[s]:i._$Cl;const a=Ne(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(t),o._$AT(t,i,s)),s!==void 0?(i._$Co??=[])[s]=o:i._$Cl=o),o!==void 0&&(e=Ce(t,o._$AS(t,e.values),o,s)),e}class $r{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:s}=this._$AD,o=(e?.creationScope??ce).importNode(i,!0);he.currentNode=o;let a=he.nextNode(),n=0,d=0,c=s[0];for(;c!==void 0;){if(n===c.index){let u;c.type===2?u=new qe(a,a.nextSibling,this,e):c.type===1?u=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(u=new Er(a,this,e)),this._$AV.push(u),c=s[++d]}n!==c?.index&&(a=he.nextNode(),n++)}return he.currentNode=ce,o}p(e){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}}class qe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,s,o){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=Ce(this,e,i),Ne(e)?e===K||e==null||e===""?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==wt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):xr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&Ne(this._$AH)?this._$AA.nextSibling.data=e:this.T(ce.createTextNode(e)),this._$AH=e}$(e){const{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=We.createElement(Ys(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(i);else{const a=new $r(o,this),n=a.u(this.options);a.p(i),this.T(n),this._$AH=a}}_$AC(e){let i=Xs.get(e.strings);return i===void 0&&Xs.set(e.strings,i=new We(e)),i}k(e){Yi(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,o=0;for(const a of e)o===i.length?i.push(s=new qe(this.O(He()),this.O(He()),this,this.options)):s=i[o],s._$AI(a),o++;o<i.length&&(this._$AR(s&&s._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e!==this._$AB;){const s=Vs(e).nextSibling;Vs(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}let gi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,s,o,a){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=i,this._$AM=o,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=K}_$AI(e,i=this,s,o){const a=this.strings;let n=!1;if(a===void 0)e=Ce(this,e,i,0),n=!Ne(e)||e!==this._$AH&&e!==wt,n&&(this._$AH=e);else{const d=e;let c,u;for(e=a[0],c=0;c<a.length-1;c++)u=Ce(this,d[s+c],i,c),u===wt&&(u=this._$AH[c]),n||=!Ne(u)||u!==this._$AH[c],u===K?e=K:e!==K&&(e+=(u??"")+a[c+1]),this._$AH[c]=u}n&&!o&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class Sr extends gi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class zr extends gi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class Ar extends gi{constructor(e,i,s,o,a){super(e,i,s,o,a),this.type=5}_$AI(e,i=this){if((e=Ce(this,e,i,0)??K)===wt)return;const s=this._$AH,o=e===K&&s!==K||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==K&&(s===K||o);o&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Er{constructor(e,i,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Ce(this,e)}}const Tr=Xi.litHtmlPolyfillSupport;Tr?.(We,qe),(Xi.litHtmlVersions??=[]).push("3.3.2");const Ir=(t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(o===void 0){const a=i?.renderBefore??null;s._$litPart$=o=new qe(e.insertBefore(He(),a),a,void 0,i??{})}return o._$AI(t),o};const Qi=globalThis;let je=class extends ke{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ir(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return wt}};je._$litElement$=!0,je.finalized=!0,Qi.litElementHydrateSupport?.({LitElement:je});const Or=Qi.litElementPolyfillSupport;Or?.({LitElement:je}),(Qi.litElementVersions??=[]).push("4.2.2");var Lr=T`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Dr=T`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,$e=(t="value")=>(e,i)=>{const s=e.constructor,o=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(a,n,d){var c;const u=s.getPropertyOptions(t),f=typeof u.attribute=="string"?u.attribute:t;if(a===f){const h=u.converter||xe,m=(typeof h=="function"?h:(c=h?.fromAttribute)!=null?c:xe.fromAttribute)(d,u.type);this[t]!==m&&(this[i]=m)}o.call(this,a,n,d)}},ue=T`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,gt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const s=i.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Pr(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(i+=s.textContent)}),i}var Zi="";function Ji(t){Zi=t}function Mr(t=""){if(!Zi){const e=[...document.getElementsByTagName("script")],i=e.find(s=>s.hasAttribute("data-shoelace"));if(i)Ji(i.getAttribute("data-shoelace"));else{const s=e.find(a=>/shoelace(\.min)?\.js($|\?)/.test(a.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(a.src));let o="";s&&(o=s.getAttribute("src")),Ji(o.split("/").slice(0,-1).join("/"))}}return Zi.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Rr={name:"default",resolver:t=>Mr(`assets/icons/${t}.svg`)},Fr=Rr,Gs={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Vr={name:"system",resolver:t=>t in Gs?`data:image/svg+xml,${encodeURIComponent(Gs[t])}`:""},Br=Vr,vi=[Fr,Br],yi=[];function Hr(t){yi.push(t)}function Nr(t){yi=yi.filter(e=>e!==t)}function Qs(t){return vi.find(e=>e.name===t)}function Ur(t,e){Wr(t),vi.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),yi.forEach(i=>{i.library===t&&i.setIcon()})}function Wr(t){vi=vi.filter(e=>e.name!==t)}var qr=T`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function x(t,e){const i=Zt({waitUntilFirstUpdate:!1},e);return(s,o)=>{const{update:a}=s,n=Array.isArray(t)?t:[t];s.update=function(d){n.forEach(c=>{const u=c;if(d.has(u)){const f=d.get(u),h=this[u];f!==h&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](f,h)}}),a.call(this,d)}}}var O=T`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;const jr={attribute:!0,type:String,converter:xe,reflect:!1,hasChanged:Ki},Kr=(t=jr,e,i)=>{const{kind:s,metadata:o}=i;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),s==="setter"&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),s==="accessor"){const{name:n}=i;return{set(d){const c=e.get.call(this);e.set.call(this,d),this.requestUpdate(n,c,t,!0,d)},init(d){return d!==void 0&&this.C(n,void 0,t,d),d}}}if(s==="setter"){const{name:n}=i;return function(d){const c=this[n];e.call(this,d),this.requestUpdate(n,c,t,!0,d)}}throw Error("Unsupported decorator location: "+s)};function l(t){return(e,i)=>typeof i=="object"?Kr(t,e,i):((s,o,a)=>{const n=o.hasOwnProperty(a);return o.constructor.createProperty(a,s),n?Object.getOwnPropertyDescriptor(o,a):void 0})(t,e,i)}function I(t){return l({...t,state:!0,attribute:!1})}function Ke(t){return(e,i)=>{const s=typeof e=="function"?e:e[i];Object.assign(s,t)}}const Zs=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);function k(t,e){return(i,s,o)=>{const a=n=>n.renderRoot?.querySelector(t)??null;return Zs(i,s,{get(){return a(this)}})}}function Xr(t){return(e,i)=>Zs(e,i,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}var wi,S=class extends je{constructor(){super(),rr(this,wi,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,Zt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const s=customElements.get(t);if(!s){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let o=" (unknown version)",a=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in s&&s.version&&(a=" v"+s.version),!(o&&a&&o===a)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${a} has already been registered.`)}attributeChangedCallback(t,e,i){or(this,wi)||(this.constructor.elementProperties.forEach((s,o)=>{s.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),ar(this,wi,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};wi=new WeakMap,S.version="2.20.1",S.dependencies={},r([l()],S.prototype,"dir",2),r([l()],S.prototype,"lang",2);const Yr=(t,e)=>t?._$litType$!==void 0,Js=t=>t.strings===void 0,Gr={},Qr=(t,e=Gr)=>t._$AH=e;var Xe=Symbol(),_i=Symbol(),ts,es=new Map,j=class extends S{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let s;if(e?.spriteSheet)return this.svg=y`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(s=await fetch(t,{mode:"cors"}),!s.ok)return s.status===410?Xe:_i}catch{return _i}try{const o=document.createElement("div");o.innerHTML=await s.text();const a=o.firstElementChild;if(((i=a?.tagName)==null?void 0:i.toLowerCase())!=="svg")return Xe;ts||(ts=new DOMParser);const d=ts.parseFromString(a.outerHTML,"text/html").body.querySelector("svg");return d?(d.part.add("svg"),document.adoptNode(d)):Xe}catch{return Xe}}connectedCallback(){super.connectedCallback(),Hr(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Nr(this)}getIconSource(){const t=Qs(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),s=i?Qs(this.library):void 0;if(!e){this.svg=null;return}let o=es.get(e);if(o||(o=this.resolveIcon(e,s),es.set(e,o)),!this.initialRender)return;const a=await o;if(a===_i&&es.delete(e),e===this.getIconSource().url){if(Yr(a)){if(this.svg=a,s){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&n&&s.mutator(n)}return}switch(a){case _i:case Xe:this.svg=null,this.emit("sl-error");break;default:this.svg=a.cloneNode(!0),(t=s?.mutator)==null||t.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};j.styles=[O,qr],r([I()],j.prototype,"svg",2),r([l({reflect:!0})],j.prototype,"name",2),r([l()],j.prototype,"src",2),r([l()],j.prototype,"label",2),r([l({reflect:!0})],j.prototype,"library",2),r([x("label")],j.prototype,"handleLabelChange",1),r([x(["name","src","library"])],j.prototype,"setIcon",1);const Ut={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Ye=t=>(...e)=>({_$litDirective$:t,values:e});let Ge=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,s){this._$Ct=e,this._$AM=i,this._$Ci=s}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};const L=Ye(class extends Ge{constructor(t){if(super(t),t.type!==Ut.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(e)}const i=t.element.classList;for(const s of this.st)s in e||(i.remove(s),this.st.delete(s));for(const s in e){const o=!!e[s];o===this.st.has(s)||this.nt?.has(s)||(o?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return wt}});const z=t=>t??K;const pe=Ye(class extends Ge{constructor(t){if(super(t),t.type!==Ut.PROPERTY&&t.type!==Ut.ATTRIBUTE&&t.type!==Ut.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Js(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===wt||e===K)return e;const i=t.element,s=t.name;if(t.type===Ut.PROPERTY){if(e===i[s])return wt}else if(t.type===Ut.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(s))return wt}else if(t.type===Ut.ATTRIBUTE&&i.getAttribute(s)===e+"")return wt;return Qr(t),e}});var ot=class extends S{constructor(){super(...arguments),this.formControlController=new Jt(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new gt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return y`
      <div
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${L({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${z(this.value)}
            .indeterminate=${pe(this.indeterminate)}
            .checked=${pe(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?y`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?y`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ot.styles=[O,ue,Dr],ot.dependencies={"sl-icon":j},r([k('input[type="checkbox"]')],ot.prototype,"input",2),r([I()],ot.prototype,"hasFocus",2),r([l()],ot.prototype,"title",2),r([l()],ot.prototype,"name",2),r([l()],ot.prototype,"value",2),r([l({reflect:!0})],ot.prototype,"size",2),r([l({type:Boolean,reflect:!0})],ot.prototype,"disabled",2),r([l({type:Boolean,reflect:!0})],ot.prototype,"checked",2),r([l({type:Boolean,reflect:!0})],ot.prototype,"indeterminate",2),r([$e("checked")],ot.prototype,"defaultChecked",2),r([l({reflect:!0})],ot.prototype,"form",2),r([l({type:Boolean,reflect:!0})],ot.prototype,"required",2),r([l({attribute:"help-text"})],ot.prototype,"helpText",2),r([x("disabled",{waitUntilFirstUpdate:!0})],ot.prototype,"handleDisabledChange",1),r([x(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],ot.prototype,"handleStateChange",1);var Zr=T`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const is=new Set,Se=new Map;let fe,ss="ltr",os="en";const to=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(to){const t=new MutationObserver(io);ss=document.documentElement.dir||"ltr",os=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function eo(...t){t.map(e=>{const i=e.$code.toLowerCase();Se.has(i)?Se.set(i,Object.assign(Object.assign({},Se.get(i)),e)):Se.set(i,e),fe||(fe=e)}),io()}function io(){to&&(ss=document.documentElement.dir||"ltr",os=document.documentElement.lang||navigator.language),[...is.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Jr=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){is.add(this.host)}hostDisconnected(){is.delete(this.host)}dir(){return`${this.host.dir||ss}`.toLowerCase()}lang(){return`${this.host.lang||os}`.toLowerCase()}getTranslationData(e){var i,s;const o=new Intl.Locale(e.replace(/_/g,"-")),a=o?.language.toLowerCase(),n=(s=(i=o?.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&s!==void 0?s:"",d=Se.get(`${a}-${n}`),c=Se.get(a);return{locale:o,language:a,region:n,primary:d,secondary:c}}exists(e,i){var s;const{primary:o,secondary:a}=this.getTranslationData((s=i.lang)!==null&&s!==void 0?s:this.lang());return i=Object.assign({includeFallback:!1},i),!!(o&&o[e]||a&&a[e]||i.includeFallback&&fe&&fe[e])}term(e,...i){const{primary:s,secondary:o}=this.getTranslationData(this.lang());let a;if(s&&s[e])a=s[e];else if(o&&o[e])a=o[e];else if(fe&&fe[e])a=fe[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof a=="function"?a(...i):a}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(e,i)}};var so={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};eo(so);var ta=so,H=class extends Jr{};eo(ta);var Qe=class extends S{constructor(){super(...arguments),this.localize=new H(this)}render(){return y`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Qe.styles=[O,Zr];var oo=new Map,ea=new WeakMap;function ia(t){return t??{keyframes:[],options:{duration:0}}}function ro(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function U(t,e){oo.set(t,ia(e))}function X(t,e,i){const s=ea.get(t);if(s?.[e])return ro(s[e],i.dir);const o=oo.get(e);return o?ro(o,i.dir):{keyframes:[],options:{duration:0}}}function G(t,e,i){return new Promise(s=>{if(i?.duration===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,Me(Zt({},i),{duration:rs()?0:i.duration}));o.addEventListener("cancel",s,{once:!0}),o.addEventListener("finish",s,{once:!0})})}function ao(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function rs(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function tt(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}function xi(t,e){return t.map(i=>Me(Zt({},i),{height:i.height==="auto"?`${e}px`:i.height}))}function no(t,e,i){return t?e(t):i?.(t)}var Q=class Ts extends S{constructor(){super(...arguments),this.localize=new H(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await tt(this.childrenContainer);const{keyframes:e,options:i}=X(this,"tree-item.collapse",{dir:this.localize.dir()});await G(this.childrenContainer,xi(e,this.childrenContainer.scrollHeight),i),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&Ts.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await tt(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:i}=X(this,"tree-item.expand",{dir:this.localize.dir()});await G(this.childrenContainer,xi(e,this.childrenContainer.scrollHeight),i),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>Ts.isTreeItem(i)&&(e||!i.disabled)):[]}render(){const e=this.localize.dir()==="rtl",i=!this.loading&&(!this.isLeaf||this.lazy);return y`
      <div
        part="base"
        class="${L({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":i,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${L({"tree-item__expand-button":!0,"tree-item__expand-button--visible":i})}
            aria-hidden="true"
          >
            ${no(this.loading,()=>y` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${no(this.selectable,()=>y`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${pe(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};Q.styles=[O,Lr],Q.dependencies={"sl-checkbox":ot,"sl-icon":j,"sl-spinner":Qe},r([I()],Q.prototype,"indeterminate",2),r([I()],Q.prototype,"isLeaf",2),r([I()],Q.prototype,"loading",2),r([I()],Q.prototype,"selectable",2),r([l({type:Boolean,reflect:!0})],Q.prototype,"expanded",2),r([l({type:Boolean,reflect:!0})],Q.prototype,"selected",2),r([l({type:Boolean,reflect:!0})],Q.prototype,"disabled",2),r([l({type:Boolean,reflect:!0})],Q.prototype,"lazy",2),r([k("slot:not([name])")],Q.prototype,"defaultSlot",2),r([k("slot[name=children]")],Q.prototype,"childrenSlot",2),r([k(".tree-item__item")],Q.prototype,"itemElement",2),r([k(".tree-item__children")],Q.prototype,"childrenContainer",2),r([k(".tree-item__expand-button slot")],Q.prototype,"expandButtonSlot",2),r([x("loading",{waitUntilFirstUpdate:!0})],Q.prototype,"handleLoadingChange",1),r([x("disabled")],Q.prototype,"handleDisabledChange",1),r([x("selected")],Q.prototype,"handleSelectedChange",1),r([x("expanded",{waitUntilFirstUpdate:!0})],Q.prototype,"handleExpandedChange",1),r([x("expanded",{waitUntilFirstUpdate:!0})],Q.prototype,"handleExpandAnimation",1),r([x("lazy",{waitUntilFirstUpdate:!0})],Q.prototype,"handleLazyChange",1);var Ze=Q;U("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),U("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),Ze.define("sl-tree-item");var sa=T`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,oa=T`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const ie=Math.min,_t=Math.max,ki=Math.round,Ci=Math.floor,Wt=t=>({x:t,y:t}),ra={left:"right",right:"left",bottom:"top",top:"bottom"},aa={start:"end",end:"start"};function as(t,e,i){return _t(t,ie(e,i))}function ze(t,e){return typeof t=="function"?t(e):t}function se(t){return t.split("-")[0]}function Ae(t){return t.split("-")[1]}function lo(t){return t==="x"?"y":"x"}function ns(t){return t==="y"?"height":"width"}const na=new Set(["top","bottom"]);function te(t){return na.has(se(t))?"y":"x"}function ls(t){return lo(te(t))}function la(t,e,i){i===void 0&&(i=!1);const s=Ae(t),o=ls(t),a=ns(o);let n=o==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(n=$i(n)),[n,$i(n)]}function ca(t){const e=$i(t);return[cs(t),e,cs(e)]}function cs(t){return t.replace(/start|end/g,e=>aa[e])}const co=["left","right"],ho=["right","left"],da=["top","bottom"],ha=["bottom","top"];function ua(t,e,i){switch(t){case"top":case"bottom":return i?e?ho:co:e?co:ho;case"left":case"right":return e?da:ha;default:return[]}}function pa(t,e,i,s){const o=Ae(t);let a=ua(se(t),i==="start",s);return o&&(a=a.map(n=>n+"-"+o),e&&(a=a.concat(a.map(cs)))),a}function $i(t){return t.replace(/left|right|bottom|top/g,e=>ra[e])}function fa(t){return{top:0,right:0,bottom:0,left:0,...t}}function uo(t){return typeof t!="number"?fa(t):{top:t,right:t,bottom:t,left:t}}function Si(t){const{x:e,y:i,width:s,height:o}=t;return{width:s,height:o,top:i,left:e,right:e+s,bottom:i+o,x:e,y:i}}function po(t,e,i){let{reference:s,floating:o}=t;const a=te(e),n=ls(e),d=ns(n),c=se(e),u=a==="y",f=s.x+s.width/2-o.width/2,h=s.y+s.height/2-o.height/2,p=s[d]/2-o[d]/2;let m;switch(c){case"top":m={x:f,y:s.y-o.height};break;case"bottom":m={x:f,y:s.y+s.height};break;case"right":m={x:s.x+s.width,y:h};break;case"left":m={x:s.x-o.width,y:h};break;default:m={x:s.x,y:s.y}}switch(Ae(e)){case"start":m[n]-=p*(i&&u?-1:1);break;case"end":m[n]+=p*(i&&u?-1:1);break}return m}const ma=async(t,e,i)=>{const{placement:s="bottom",strategy:o="absolute",middleware:a=[],platform:n}=i,d=a.filter(Boolean),c=await(n.isRTL==null?void 0:n.isRTL(e));let u=await n.getElementRects({reference:t,floating:e,strategy:o}),{x:f,y:h}=po(u,s,c),p=s,m={},b=0;for(let g=0;g<d.length;g++){const{name:$,fn:A}=d[g],{x:_,y:C,data:v,reset:w}=await A({x:f,y:h,initialPlacement:s,placement:p,strategy:o,middlewareData:m,rects:u,platform:n,elements:{reference:t,floating:e}});f=_??f,h=C??h,m={...m,[$]:{...m[$],...v}},w&&b<=50&&(b++,typeof w=="object"&&(w.placement&&(p=w.placement),w.rects&&(u=w.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:o}):w.rects),{x:f,y:h}=po(u,p,c)),g=-1)}return{x:f,y:h,placement:p,strategy:o,middlewareData:m}};async function ds(t,e){var i;e===void 0&&(e={});const{x:s,y:o,platform:a,rects:n,elements:d,strategy:c}=t,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:h="floating",altBoundary:p=!1,padding:m=0}=ze(e,t),b=uo(m),$=d[p?h==="floating"?"reference":"floating":h],A=Si(await a.getClippingRect({element:(i=await(a.isElement==null?void 0:a.isElement($)))==null||i?$:$.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(d.floating)),boundary:u,rootBoundary:f,strategy:c})),_=h==="floating"?{x:s,y:o,width:n.floating.width,height:n.floating.height}:n.reference,C=await(a.getOffsetParent==null?void 0:a.getOffsetParent(d.floating)),v=await(a.isElement==null?void 0:a.isElement(C))?await(a.getScale==null?void 0:a.getScale(C))||{x:1,y:1}:{x:1,y:1},w=Si(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:_,offsetParent:C,strategy:c}):_);return{top:(A.top-w.top+b.top)/v.y,bottom:(w.bottom-A.bottom+b.bottom)/v.y,left:(A.left-w.left+b.left)/v.x,right:(w.right-A.right+b.right)/v.x}}const ba=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:s,placement:o,rects:a,platform:n,elements:d,middlewareData:c}=e,{element:u,padding:f=0}=ze(t,e)||{};if(u==null)return{};const h=uo(f),p={x:i,y:s},m=ls(o),b=ns(m),g=await n.getDimensions(u),$=m==="y",A=$?"top":"left",_=$?"bottom":"right",C=$?"clientHeight":"clientWidth",v=a.reference[b]+a.reference[m]-p[m]-a.floating[b],w=p[m]-a.reference[m],D=await(n.getOffsetParent==null?void 0:n.getOffsetParent(u));let M=D?D[C]:0;(!M||!await(n.isElement==null?void 0:n.isElement(D)))&&(M=d.floating[C]||a.floating[b]);const B=v/2-w/2,P=M/2-g[b]/2-1,E=ie(h[A],P),at=ie(h[_],P),it=E,bt=M-g[b]-at,st=M/2-g[b]/2+B,Ot=as(it,st,bt),Qt=!c.arrow&&Ae(o)!=null&&st!==Ot&&a.reference[b]/2-(st<it?E:at)-g[b]/2<0,Ht=Qt?st<it?st-it:st-bt:0;return{[m]:p[m]+Ht,data:{[m]:Ot,centerOffset:st-Ot-Ht,...Qt&&{alignmentOffset:Ht}},reset:Qt}}}),ga=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,s;const{placement:o,middlewareData:a,rects:n,initialPlacement:d,platform:c,elements:u}=e,{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:g=!0,...$}=ze(t,e);if((i=a.arrow)!=null&&i.alignmentOffset)return{};const A=se(o),_=te(d),C=se(d)===d,v=await(c.isRTL==null?void 0:c.isRTL(u.floating)),w=p||(C||!g?[$i(d)]:ca(d)),D=b!=="none";!p&&D&&w.push(...pa(d,g,b,v));const M=[d,...w],B=await ds(e,$),P=[];let E=((s=a.flip)==null?void 0:s.overflows)||[];if(f&&P.push(B[A]),h){const st=la(o,n,v);P.push(B[st[0]],B[st[1]])}if(E=[...E,{placement:o,overflows:P}],!P.every(st=>st<=0)){var at,it;const st=(((at=a.flip)==null?void 0:at.index)||0)+1,Ot=M[st];if(Ot&&(!(h==="alignment"?_!==te(Ot):!1)||E.every(Nt=>te(Nt.placement)===_?Nt.overflows[0]>0:!0)))return{data:{index:st,overflows:E},reset:{placement:Ot}};let Qt=(it=E.filter(Ht=>Ht.overflows[0]<=0).sort((Ht,Nt)=>Ht.overflows[1]-Nt.overflows[1])[0])==null?void 0:it.placement;if(!Qt)switch(m){case"bestFit":{var bt;const Ht=(bt=E.filter(Nt=>{if(D){const le=te(Nt.placement);return le===_||le==="y"}return!0}).map(Nt=>[Nt.placement,Nt.overflows.filter(le=>le>0).reduce((le,zd)=>le+zd,0)]).sort((Nt,le)=>Nt[1]-le[1])[0])==null?void 0:bt[0];Ht&&(Qt=Ht);break}case"initialPlacement":Qt=d;break}if(o!==Qt)return{reset:{placement:Qt}}}return{}}}},va=new Set(["left","top"]);async function ya(t,e){const{placement:i,platform:s,elements:o}=t,a=await(s.isRTL==null?void 0:s.isRTL(o.floating)),n=se(i),d=Ae(i),c=te(i)==="y",u=va.has(n)?-1:1,f=a&&c?-1:1,h=ze(e,t);let{mainAxis:p,crossAxis:m,alignmentAxis:b}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return d&&typeof b=="number"&&(m=d==="end"?b*-1:b),c?{x:m*f,y:p*u}:{x:p*u,y:m*f}}const wa=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,s;const{x:o,y:a,placement:n,middlewareData:d}=e,c=await ya(e,t);return n===((i=d.offset)==null?void 0:i.placement)&&(s=d.arrow)!=null&&s.alignmentOffset?{}:{x:o+c.x,y:a+c.y,data:{...c,placement:n}}}}},_a=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:o}=e,{mainAxis:a=!0,crossAxis:n=!1,limiter:d={fn:$=>{let{x:A,y:_}=$;return{x:A,y:_}}},...c}=ze(t,e),u={x:i,y:s},f=await ds(e,c),h=te(se(o)),p=lo(h);let m=u[p],b=u[h];if(a){const $=p==="y"?"top":"left",A=p==="y"?"bottom":"right",_=m+f[$],C=m-f[A];m=as(_,m,C)}if(n){const $=h==="y"?"top":"left",A=h==="y"?"bottom":"right",_=b+f[$],C=b-f[A];b=as(_,b,C)}const g=d.fn({...e,[p]:m,[h]:b});return{...g,data:{x:g.x-i,y:g.y-s,enabled:{[p]:a,[h]:n}}}}}},xa=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,s;const{placement:o,rects:a,platform:n,elements:d}=e,{apply:c=()=>{},...u}=ze(t,e),f=await ds(e,u),h=se(o),p=Ae(o),m=te(o)==="y",{width:b,height:g}=a.floating;let $,A;h==="top"||h==="bottom"?($=h,A=p===(await(n.isRTL==null?void 0:n.isRTL(d.floating))?"start":"end")?"left":"right"):(A=h,$=p==="end"?"top":"bottom");const _=g-f.top-f.bottom,C=b-f.left-f.right,v=ie(g-f[$],_),w=ie(b-f[A],C),D=!e.middlewareData.shift;let M=v,B=w;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(B=C),(s=e.middlewareData.shift)!=null&&s.enabled.y&&(M=_),D&&!p){const E=_t(f.left,0),at=_t(f.right,0),it=_t(f.top,0),bt=_t(f.bottom,0);m?B=b-2*(E!==0||at!==0?E+at:_t(f.left,f.right)):M=g-2*(it!==0||bt!==0?it+bt:_t(f.top,f.bottom))}await c({...e,availableWidth:B,availableHeight:M});const P=await n.getDimensions(d.floating);return b!==P.width||g!==P.height?{reset:{rects:!0}}:{}}}};function zi(){return typeof window<"u"}function Ee(t){return fo(t)?(t.nodeName||"").toLowerCase():"#document"}function xt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function qt(t){var e;return(e=(fo(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function fo(t){return zi()?t instanceof Node||t instanceof xt(t).Node:!1}function Lt(t){return zi()?t instanceof Element||t instanceof xt(t).Element:!1}function jt(t){return zi()?t instanceof HTMLElement||t instanceof xt(t).HTMLElement:!1}function mo(t){return!zi()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof xt(t).ShadowRoot}const ka=new Set(["inline","contents"]);function Je(t){const{overflow:e,overflowX:i,overflowY:s,display:o}=Dt(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+i)&&!ka.has(o)}const Ca=new Set(["table","td","th"]);function $a(t){return Ca.has(Ee(t))}const Sa=[":popover-open",":modal"];function Ai(t){return Sa.some(e=>{try{return t.matches(e)}catch{return!1}})}const za=["transform","translate","scale","rotate","perspective"],Aa=["transform","translate","scale","rotate","perspective","filter"],Ea=["paint","layout","strict","content"];function Ei(t){const e=hs(),i=Lt(t)?Dt(t):t;return za.some(s=>i[s]?i[s]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||Aa.some(s=>(i.willChange||"").includes(s))||Ea.some(s=>(i.contain||"").includes(s))}function Ta(t){let e=oe(t);for(;jt(e)&&!Te(e);){if(Ei(e))return e;if(Ai(e))return null;e=oe(e)}return null}function hs(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Ia=new Set(["html","body","#document"]);function Te(t){return Ia.has(Ee(t))}function Dt(t){return xt(t).getComputedStyle(t)}function Ti(t){return Lt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function oe(t){if(Ee(t)==="html")return t;const e=t.assignedSlot||t.parentNode||mo(t)&&t.host||qt(t);return mo(e)?e.host:e}function bo(t){const e=oe(t);return Te(e)?t.ownerDocument?t.ownerDocument.body:t.body:jt(e)&&Je(e)?e:bo(e)}function ti(t,e,i){var s;e===void 0&&(e=[]),i===void 0&&(i=!0);const o=bo(t),a=o===((s=t.ownerDocument)==null?void 0:s.body),n=xt(o);if(a){const d=us(n);return e.concat(n,n.visualViewport||[],Je(o)?o:[],d&&i?ti(d):[])}return e.concat(o,ti(o,[],i))}function us(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function go(t){const e=Dt(t);let i=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const o=jt(t),a=o?t.offsetWidth:i,n=o?t.offsetHeight:s,d=ki(i)!==a||ki(s)!==n;return d&&(i=a,s=n),{width:i,height:s,$:d}}function ps(t){return Lt(t)?t:t.contextElement}function Ie(t){const e=ps(t);if(!jt(e))return Wt(1);const i=e.getBoundingClientRect(),{width:s,height:o,$:a}=go(e);let n=(a?ki(i.width):i.width)/s,d=(a?ki(i.height):i.height)/o;return(!n||!Number.isFinite(n))&&(n=1),(!d||!Number.isFinite(d))&&(d=1),{x:n,y:d}}const Oa=Wt(0);function vo(t){const e=xt(t);return!hs()||!e.visualViewport?Oa:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function La(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==xt(t)?!1:e}function me(t,e,i,s){e===void 0&&(e=!1),i===void 0&&(i=!1);const o=t.getBoundingClientRect(),a=ps(t);let n=Wt(1);e&&(s?Lt(s)&&(n=Ie(s)):n=Ie(t));const d=La(a,i,s)?vo(a):Wt(0);let c=(o.left+d.x)/n.x,u=(o.top+d.y)/n.y,f=o.width/n.x,h=o.height/n.y;if(a){const p=xt(a),m=s&&Lt(s)?xt(s):s;let b=p,g=us(b);for(;g&&s&&m!==b;){const $=Ie(g),A=g.getBoundingClientRect(),_=Dt(g),C=A.left+(g.clientLeft+parseFloat(_.paddingLeft))*$.x,v=A.top+(g.clientTop+parseFloat(_.paddingTop))*$.y;c*=$.x,u*=$.y,f*=$.x,h*=$.y,c+=C,u+=v,b=xt(g),g=us(b)}}return Si({width:f,height:h,x:c,y:u})}function Ii(t,e){const i=Ti(t).scrollLeft;return e?e.left+i:me(qt(t)).left+i}function yo(t,e){const i=t.getBoundingClientRect(),s=i.left+e.scrollLeft-Ii(t,i),o=i.top+e.scrollTop;return{x:s,y:o}}function Da(t){let{elements:e,rect:i,offsetParent:s,strategy:o}=t;const a=o==="fixed",n=qt(s),d=e?Ai(e.floating):!1;if(s===n||d&&a)return i;let c={scrollLeft:0,scrollTop:0},u=Wt(1);const f=Wt(0),h=jt(s);if((h||!h&&!a)&&((Ee(s)!=="body"||Je(n))&&(c=Ti(s)),jt(s))){const m=me(s);u=Ie(s),f.x=m.x+s.clientLeft,f.y=m.y+s.clientTop}const p=n&&!h&&!a?yo(n,c):Wt(0);return{width:i.width*u.x,height:i.height*u.y,x:i.x*u.x-c.scrollLeft*u.x+f.x+p.x,y:i.y*u.y-c.scrollTop*u.y+f.y+p.y}}function Pa(t){return Array.from(t.getClientRects())}function Ma(t){const e=qt(t),i=Ti(t),s=t.ownerDocument.body,o=_t(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),a=_t(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let n=-i.scrollLeft+Ii(t);const d=-i.scrollTop;return Dt(s).direction==="rtl"&&(n+=_t(e.clientWidth,s.clientWidth)-o),{width:o,height:a,x:n,y:d}}const wo=25;function Ra(t,e){const i=xt(t),s=qt(t),o=i.visualViewport;let a=s.clientWidth,n=s.clientHeight,d=0,c=0;if(o){a=o.width,n=o.height;const f=hs();(!f||f&&e==="fixed")&&(d=o.offsetLeft,c=o.offsetTop)}const u=Ii(s);if(u<=0){const f=s.ownerDocument,h=f.body,p=getComputedStyle(h),m=f.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,b=Math.abs(s.clientWidth-h.clientWidth-m);b<=wo&&(a-=b)}else u<=wo&&(a+=u);return{width:a,height:n,x:d,y:c}}const Fa=new Set(["absolute","fixed"]);function Va(t,e){const i=me(t,!0,e==="fixed"),s=i.top+t.clientTop,o=i.left+t.clientLeft,a=jt(t)?Ie(t):Wt(1),n=t.clientWidth*a.x,d=t.clientHeight*a.y,c=o*a.x,u=s*a.y;return{width:n,height:d,x:c,y:u}}function _o(t,e,i){let s;if(e==="viewport")s=Ra(t,i);else if(e==="document")s=Ma(qt(t));else if(Lt(e))s=Va(e,i);else{const o=vo(t);s={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return Si(s)}function xo(t,e){const i=oe(t);return i===e||!Lt(i)||Te(i)?!1:Dt(i).position==="fixed"||xo(i,e)}function Ba(t,e){const i=e.get(t);if(i)return i;let s=ti(t,[],!1).filter(d=>Lt(d)&&Ee(d)!=="body"),o=null;const a=Dt(t).position==="fixed";let n=a?oe(t):t;for(;Lt(n)&&!Te(n);){const d=Dt(n),c=Ei(n);!c&&d.position==="fixed"&&(o=null),(a?!c&&!o:!c&&d.position==="static"&&!!o&&Fa.has(o.position)||Je(n)&&!c&&xo(t,n))?s=s.filter(f=>f!==n):o=d,n=oe(n)}return e.set(t,s),s}function Ha(t){let{element:e,boundary:i,rootBoundary:s,strategy:o}=t;const n=[...i==="clippingAncestors"?Ai(e)?[]:Ba(e,this._c):[].concat(i),s],d=n[0],c=n.reduce((u,f)=>{const h=_o(e,f,o);return u.top=_t(h.top,u.top),u.right=ie(h.right,u.right),u.bottom=ie(h.bottom,u.bottom),u.left=_t(h.left,u.left),u},_o(e,d,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Na(t){const{width:e,height:i}=go(t);return{width:e,height:i}}function Ua(t,e,i){const s=jt(e),o=qt(e),a=i==="fixed",n=me(t,!0,a,e);let d={scrollLeft:0,scrollTop:0};const c=Wt(0);function u(){c.x=Ii(o)}if(s||!s&&!a)if((Ee(e)!=="body"||Je(o))&&(d=Ti(e)),s){const m=me(e,!0,a,e);c.x=m.x+e.clientLeft,c.y=m.y+e.clientTop}else o&&u();a&&!s&&o&&u();const f=o&&!s&&!a?yo(o,d):Wt(0),h=n.left+d.scrollLeft-c.x-f.x,p=n.top+d.scrollTop-c.y-f.y;return{x:h,y:p,width:n.width,height:n.height}}function fs(t){return Dt(t).position==="static"}function ko(t,e){if(!jt(t)||Dt(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return qt(t)===i&&(i=i.ownerDocument.body),i}function Co(t,e){const i=xt(t);if(Ai(t))return i;if(!jt(t)){let o=oe(t);for(;o&&!Te(o);){if(Lt(o)&&!fs(o))return o;o=oe(o)}return i}let s=ko(t,e);for(;s&&$a(s)&&fs(s);)s=ko(s,e);return s&&Te(s)&&fs(s)&&!Ei(s)?i:s||Ta(t)||i}const Wa=async function(t){const e=this.getOffsetParent||Co,i=this.getDimensions,s=await i(t.floating);return{reference:Ua(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function qa(t){return Dt(t).direction==="rtl"}const Oi={convertOffsetParentRelativeRectToViewportRelativeRect:Da,getDocumentElement:qt,getClippingRect:Ha,getOffsetParent:Co,getElementRects:Wa,getClientRects:Pa,getDimensions:Na,getScale:Ie,isElement:Lt,isRTL:qa};function $o(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function ja(t,e){let i=null,s;const o=qt(t);function a(){var d;clearTimeout(s),(d=i)==null||d.disconnect(),i=null}function n(d,c){d===void 0&&(d=!1),c===void 0&&(c=1),a();const u=t.getBoundingClientRect(),{left:f,top:h,width:p,height:m}=u;if(d||e(),!p||!m)return;const b=Ci(h),g=Ci(o.clientWidth-(f+p)),$=Ci(o.clientHeight-(h+m)),A=Ci(f),C={rootMargin:-b+"px "+-g+"px "+-$+"px "+-A+"px",threshold:_t(0,ie(1,c))||1};let v=!0;function w(D){const M=D[0].intersectionRatio;if(M!==c){if(!v)return n();M?n(!1,M):s=setTimeout(()=>{n(!1,1e-7)},1e3)}M===1&&!$o(u,t.getBoundingClientRect())&&n(),v=!1}try{i=new IntersectionObserver(w,{...C,root:o.ownerDocument})}catch{i=new IntersectionObserver(w,C)}i.observe(t)}return n(!0),a}function Ka(t,e,i,s){s===void 0&&(s={});const{ancestorScroll:o=!0,ancestorResize:a=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:c=!1}=s,u=ps(t),f=o||a?[...u?ti(u):[],...ti(e)]:[];f.forEach(A=>{o&&A.addEventListener("scroll",i,{passive:!0}),a&&A.addEventListener("resize",i)});const h=u&&d?ja(u,i):null;let p=-1,m=null;n&&(m=new ResizeObserver(A=>{let[_]=A;_&&_.target===u&&m&&(m.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var C;(C=m)==null||C.observe(e)})),i()}),u&&!c&&m.observe(u),m.observe(e));let b,g=c?me(t):null;c&&$();function $(){const A=me(t);g&&!$o(g,A)&&i(),g=A,b=requestAnimationFrame($)}return i(),()=>{var A;f.forEach(_=>{o&&_.removeEventListener("scroll",i),a&&_.removeEventListener("resize",i)}),h?.(),(A=m)==null||A.disconnect(),m=null,c&&cancelAnimationFrame(b)}}const Xa=wa,Ya=_a,Ga=ga,So=xa,Qa=ba,Za=(t,e,i)=>{const s=new Map,o={platform:Oi,...i},a={...o.platform,_c:s};return ma(t,e,{...o,platform:a})};function Ja(t){return tn(t)}function ms(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function tn(t){for(let e=t;e;e=ms(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=ms(t);e;e=ms(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||Ei(i)||e.tagName==="BODY"))return e}return null}function en(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var W=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let s=0,o=0,a=0,n=0,d=0,c=0,u=0,f=0;i?t.top<e.top?(s=t.left,o=t.bottom,a=t.right,n=t.bottom,d=e.left,c=e.top,u=e.right,f=e.top):(s=e.left,o=e.bottom,a=e.right,n=e.bottom,d=t.left,c=t.top,u=t.right,f=t.top):t.left<e.left?(s=t.right,o=t.top,a=e.left,n=e.top,d=t.right,c=t.bottom,u=e.left,f=e.bottom):(s=e.right,o=e.top,a=t.left,n=t.top,d=e.right,c=e.bottom,u=t.left,f=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${f}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||en(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Ka(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Xa({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(So({apply:({rects:i})=>{const s=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${i.reference.width}px`:"",this.popup.style.height=o?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Ga({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Ya({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(So({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Qa({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>Oi.getOffsetParent(i,Ja):Oi.getOffsetParent;Za(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Me(Zt({},Oi),{getOffsetParent:e})}).then(({x:i,y:s,middlewareData:o,placement:a})=>{const n=this.localize.dir()==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[a.split("-")[0]];if(this.setAttribute("data-current-placement",a),Object.assign(this.popup.style,{left:`${i}px`,top:`${s}px`}),this.arrow){const c=o.arrow.x,u=o.arrow.y;let f="",h="",p="",m="";if(this.arrowPlacement==="start"){const b=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=n?b:"",m=n?"":b}else if(this.arrowPlacement==="end"){const b=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=n?"":b,m=n?b:"",p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof c=="number"?`${c}px`:"",f=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:f,right:h,bottom:p,left:m,[d]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return y`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${L({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${L({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?y`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};W.styles=[O,oa],r([k(".popup")],W.prototype,"popup",2),r([k(".popup__arrow")],W.prototype,"arrowEl",2),r([l()],W.prototype,"anchor",2),r([l({type:Boolean,reflect:!0})],W.prototype,"active",2),r([l({reflect:!0})],W.prototype,"placement",2),r([l({reflect:!0})],W.prototype,"strategy",2),r([l({type:Number})],W.prototype,"distance",2),r([l({type:Number})],W.prototype,"skidding",2),r([l({type:Boolean})],W.prototype,"arrow",2),r([l({attribute:"arrow-placement"})],W.prototype,"arrowPlacement",2),r([l({attribute:"arrow-padding",type:Number})],W.prototype,"arrowPadding",2),r([l({type:Boolean})],W.prototype,"flip",2),r([l({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],W.prototype,"flipFallbackPlacements",2),r([l({attribute:"flip-fallback-strategy"})],W.prototype,"flipFallbackStrategy",2),r([l({type:Object})],W.prototype,"flipBoundary",2),r([l({attribute:"flip-padding",type:Number})],W.prototype,"flipPadding",2),r([l({type:Boolean})],W.prototype,"shift",2),r([l({type:Object})],W.prototype,"shiftBoundary",2),r([l({attribute:"shift-padding",type:Number})],W.prototype,"shiftPadding",2),r([l({attribute:"auto-size"})],W.prototype,"autoSize",2),r([l()],W.prototype,"sync",2),r([l({type:Object})],W.prototype,"autoSizeBoundary",2),r([l({attribute:"auto-size-padding",type:Number})],W.prototype,"autoSizePadding",2),r([l({attribute:"hover-bridge",type:Boolean})],W.prototype,"hoverBridge",2);function vt(t,e){return new Promise(i=>{function s(o){o.target===t&&(t.removeEventListener(e,s),i())}t.addEventListener(e,s)})}var nt=class extends S{constructor(){super(),this.localize=new H(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=ao(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=ao(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await tt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:s}=X(this,"tooltip.show",{dir:this.localize.dir()});await G(this.popup.popup,i,s),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await tt(this.body);const{keyframes:i,options:s}=X(this,"tooltip.hide",{dir:this.localize.dir()});await G(this.popup.popup,i,s),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,vt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,vt(this,"sl-after-hide")}render(){return y`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${L({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};nt.styles=[O,sa],nt.dependencies={"sl-popup":W},r([k("slot:not([name])")],nt.prototype,"defaultSlot",2),r([k(".tooltip__body")],nt.prototype,"body",2),r([k("sl-popup")],nt.prototype,"popup",2),r([l()],nt.prototype,"content",2),r([l()],nt.prototype,"placement",2),r([l({type:Boolean,reflect:!0})],nt.prototype,"disabled",2),r([l({type:Number})],nt.prototype,"distance",2),r([l({type:Boolean,reflect:!0})],nt.prototype,"open",2),r([l({type:Number})],nt.prototype,"skidding",2),r([l()],nt.prototype,"trigger",2),r([l({type:Boolean})],nt.prototype,"hoist",2),r([x("open",{waitUntilFirstUpdate:!0})],nt.prototype,"handleOpenChange",1),r([x(["content","distance","hoist","placement","skidding"])],nt.prototype,"handleOptionsChange",1),r([x("disabled")],nt.prototype,"handleDisabledChange",1),U("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),U("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),nt.define("sl-tooltip");var sn=T`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function et(t,e,i){const s=o=>Object.is(o,-0)?0:o;return t<e?s(e):t>i?s(i):s(t)}function zo(t,e=!1){function i(a){const n=a.getChildrenItems({includeDisabled:!1});if(n.length){const d=n.every(u=>u.selected),c=n.every(u=>!u.selected&&!u.indeterminate);a.selected=d,a.indeterminate=!d&&!c}}function s(a){const n=a.parentElement;Ze.isTreeItem(n)&&(i(n),s(n))}function o(a){for(const n of a.getChildrenItems())n.selected=e?a.selected||n.selected:!n.disabled&&a.selected,o(n);e&&i(a)}o(t),s(t)}var be=class extends S{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new H(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const i=t.querySelector(`[slot="${e}-icon"]`),s=this.getExpandButtonIcon(e);s&&(i===null?t.append(s):i.hasAttribute("data-default")&&i.replaceWith(s))})},this.handleTreeChanged=t=>{for(const e of t){const i=[...e.addedNodes].filter(Ze.isTreeItem),s=[...e.removedNodes].filter(Ze.isTreeItem);i.forEach(this.initTreeItem),this.lastFocusedItem&&s.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Ze.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){const i=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){const s=i.cloneNode(!0);return[s,...s.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),s.setAttribute("data-default",""),s.slot=`${t}-icon`,s}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),zo(t);else if(this.selection==="single"||t.isLeaf){const s=this.getAllTreeItems();for(const o of s)o.selected=o===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const i=this.selectedItems;(e.length!==i.length||i.some(s=>!e.includes(s)))&&Promise.all(i.map(s=>s.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(o=>{var a;return["input","textarea"].includes((a=o?.tagName)==null?void 0:a.toLowerCase())}))return;const e=this.getFocusableItems(),i=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const o=e.findIndex(c=>c.matches(":focus")),a=e[o],n=c=>{const u=e[et(c,0,e.length-1)];this.focusItem(u)},d=c=>{a.expanded=c};t.key==="ArrowDown"?n(o+1):t.key==="ArrowUp"?n(o-1):i&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft"?!a||a.disabled||a.expanded||a.isLeaf&&!a.lazy?n(o+1):d(!0):i&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight"?!a||a.disabled||a.isLeaf||!a.expanded?n(o-1):d(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(a.disabled||this.selectItem(a))}}handleClick(t){const e=t.target,i=e.closest("sl-tree-item"),s=t.composedPath().some(o=>{var a;return(a=o?.classList)==null?void 0:a.contains("tree-item__expand-button")});!i||i.disabled||e!==this.clickTarget||(s?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const i of e)i.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(i=>zo(i,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=i=>i.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(i=>{var s;if(i.disabled)return!1;const o=(s=i.parentElement)==null?void 0:s.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(i),!e.has(i)})}render(){return y`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};be.styles=[O,sn],r([k("slot:not([name])")],be.prototype,"defaultSlot",2),r([k("slot[name=expand-icon]")],be.prototype,"expandedIconSlot",2),r([k("slot[name=collapse-icon]")],be.prototype,"collapsedIconSlot",2),r([l()],be.prototype,"selection",2),r([x("selection")],be.prototype,"handleSelectionChange",1),be.define("sl-tree");var on=T`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,bs=class extends S{render(){return y` <slot></slot> `}};bs.styles=[O,on],bs.define("sl-visually-hidden");var rn=T`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,an=0,ei=class extends S{constructor(){super(...arguments),this.attrId=++an,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return y`
      <slot
        part="base"
        class=${L({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};ei.styles=[O,rn],r([l({reflect:!0})],ei.prototype,"name",2),r([l({type:Boolean,reflect:!0})],ei.prototype,"active",2),r([x("active")],ei.prototype,"handleActiveChange",1),ei.define("sl-tab-panel");var nn=T`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,ln=T`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;const Ao=Symbol.for(""),cn=t=>{if(t?.r===Ao)return t?._$litStatic$},Li=(t,...e)=>({_$litStatic$:e.reduce((i,s,o)=>i+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[o+1],t[0]),r:Ao}),Eo=new Map,dn=t=>(e,...i)=>{const s=i.length;let o,a;const n=[],d=[];let c,u=0,f=!1;for(;u<s;){for(c=e[u];u<s&&(a=i[u],(o=cn(a))!==void 0);)c+=o+e[++u],f=!0;u!==s&&d.push(a),n.push(c),u++}if(u===s&&n.push(e[s]),f){const h=n.join("$$lit$$");(e=Eo.get(h))===void 0&&(n.raw=n,Eo.set(h,e=n)),i=d}return t(e,...i)},ii=dn(y);var rt=class extends S{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Li`a`:Li`button`;return ii`
      <${e}
        part="base"
        class=${L({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${z(t?void 0:this.disabled)}
        type=${z(t?void 0:"button")}
        href=${z(t?this.href:void 0)}
        target=${z(t?this.target:void 0)}
        download=${z(t?this.download:void 0)}
        rel=${z(t&&this.target?"noreferrer noopener":void 0)}
        role=${z(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${z(this.name)}
          library=${z(this.library)}
          src=${z(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};rt.styles=[O,ln],rt.dependencies={"sl-icon":j},r([k(".icon-button")],rt.prototype,"button",2),r([I()],rt.prototype,"hasFocus",2),r([l()],rt.prototype,"name",2),r([l()],rt.prototype,"library",2),r([l()],rt.prototype,"src",2),r([l()],rt.prototype,"href",2),r([l()],rt.prototype,"target",2),r([l()],rt.prototype,"download",2),r([l()],rt.prototype,"label",2),r([l({type:Boolean,reflect:!0})],rt.prototype,"disabled",2);var re=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return y`
      <span
        part="base"
        class=${L({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?y`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};re.styles=[O,nn],re.dependencies={"sl-icon-button":rt},r([l({reflect:!0})],re.prototype,"variant",2),r([l({reflect:!0})],re.prototype,"size",2),r([l({type:Boolean,reflect:!0})],re.prototype,"pill",2),r([l({type:Boolean})],re.prototype,"removable",2),re.define("sl-tag");var hn=T`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,N=class extends S{constructor(){super(...arguments),this.formControlController=new Jt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new gt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const o=e??this.input.selectionStart,a=i??this.input.selectionEnd;this.input.setRangeText(t,o,a,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e;return y`
      <div
        part="form-control"
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${L({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${z(this.name)}
              .value=${pe(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${z(this.placeholder)}
              rows=${z(this.rows)}
              minlength=${z(this.minlength)}
              maxlength=${z(this.maxlength)}
              autocapitalize=${z(this.autocapitalize)}
              autocorrect=${z(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${z(this.spellcheck)}
              enterkeyhint=${z(this.enterkeyhint)}
              inputmode=${z(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};N.styles=[O,ue,hn],r([k(".textarea__control")],N.prototype,"input",2),r([k(".textarea__size-adjuster")],N.prototype,"sizeAdjuster",2),r([I()],N.prototype,"hasFocus",2),r([l()],N.prototype,"title",2),r([l()],N.prototype,"name",2),r([l()],N.prototype,"value",2),r([l({reflect:!0})],N.prototype,"size",2),r([l({type:Boolean,reflect:!0})],N.prototype,"filled",2),r([l()],N.prototype,"label",2),r([l({attribute:"help-text"})],N.prototype,"helpText",2),r([l()],N.prototype,"placeholder",2),r([l({type:Number})],N.prototype,"rows",2),r([l()],N.prototype,"resize",2),r([l({type:Boolean,reflect:!0})],N.prototype,"disabled",2),r([l({type:Boolean,reflect:!0})],N.prototype,"readonly",2),r([l({reflect:!0})],N.prototype,"form",2),r([l({type:Boolean,reflect:!0})],N.prototype,"required",2),r([l({type:Number})],N.prototype,"minlength",2),r([l({type:Number})],N.prototype,"maxlength",2),r([l()],N.prototype,"autocapitalize",2),r([l()],N.prototype,"autocorrect",2),r([l()],N.prototype,"autocomplete",2),r([l({type:Boolean})],N.prototype,"autofocus",2),r([l()],N.prototype,"enterkeyhint",2),r([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],N.prototype,"spellcheck",2),r([l()],N.prototype,"inputmode",2),r([$e()],N.prototype,"defaultValue",2),r([x("disabled",{waitUntilFirstUpdate:!0})],N.prototype,"handleDisabledChange",1),r([x("rows",{waitUntilFirstUpdate:!0})],N.prototype,"handleRowsChange",1),r([x("value",{waitUntilFirstUpdate:!0})],N.prototype,"handleValueChange",1),N.define("sl-textarea");var un=T`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,pn=0,Pt=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.attrId=++pn,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,y`
      <div
        part="base"
        class=${L({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?y`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Pt.styles=[O,un],Pt.dependencies={"sl-icon-button":rt},r([k(".tab")],Pt.prototype,"tab",2),r([l({reflect:!0})],Pt.prototype,"panel",2),r([l({type:Boolean,reflect:!0})],Pt.prototype,"active",2),r([l({type:Boolean,reflect:!0})],Pt.prototype,"closable",2),r([l({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2),r([l({type:Number,reflect:!0})],Pt.prototype,"tabIndex",2),r([x("active")],Pt.prototype,"handleActiveChange",1),r([x("disabled")],Pt.prototype,"handleDisabledChange",1),Pt.define("sl-tab");var fn=T`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,mn=T`
  :host {
    display: contents;
  }
`,si=class extends S{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],e.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return y` <slot @slotchange=${this.handleSlotChange}></slot> `}};si.styles=[O,mn],r([l({type:Boolean,reflect:!0})],si.prototype,"disabled",2),r([x("disabled",{waitUntilFirstUpdate:!0})],si.prototype,"handleDisabledChange",1);function bn(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var gs=new Set;function gn(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function vn(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function oi(t){if(gs.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=gn()+vn();let i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),e<2&&(i=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",i),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function ri(t){gs.delete(t),gs.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function vs(t,e,i="vertical",s="smooth"){const o=bn(t,e),a=o.top+e.scrollTop,n=o.left+e.scrollLeft,d=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,u=e.scrollTop,f=e.scrollTop+e.offsetHeight;(i==="horizontal"||i==="both")&&(n<d?e.scrollTo({left:n,behavior:s}):n+t.clientWidth>c&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:s})),(i==="vertical"||i==="both")&&(a<u?e.scrollTo({top:a,behavior:s}):a+t.clientHeight>f&&e.scrollTo({top:a-e.offsetHeight+t.clientHeight,behavior:s}))}var dt=class extends S{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new H(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{const i=e.filter(({target:s})=>{if(s===this)return!0;if(s.closest("sl-tab-group")!==this)return!1;const o=s.tagName.toLowerCase();return o==="sl-tab"||o==="sl-tab-panel"});if(i.length!==0){if(i.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),i.some(s=>s.attributeName==="disabled"))this.syncTabsAndPanels();else if(i.some(s=>s.attributeName==="active")){const o=i.filter(a=>a.attributeName==="active"&&a.target.tagName.toLowerCase()==="sl-tab").map(a=>a.target).find(a=>a.active);o&&this.setActiveTab(o)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((i,s)=>{var o;i[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),s.unobserve(i[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const i=t.target.closest("sl-tab");i?.closest("sl-tab-group")===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(t){const i=t.target.closest("sl-tab");if(i?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const o=this.tabs.find(d=>d.matches(":focus")),a=this.localize.dir()==="rtl";let n=null;if(o?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")n=this.focusableTabs[0];else if(t.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const d=this.tabs.findIndex(c=>c===o);n=this.findNextFocusableTab(d,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const d=this.tabs.findIndex(c=>c===o);n=this.findNextFocusableTab(d,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(d=>{d.tabIndex=d===n?0:-1}),["top","bottom"].includes(this.placement)&&vs(n,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=Zt({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const i=this.activeTab;this.activeTab=t,this.tabs.forEach(s=>{s.active=s===this.activeTab,s.tabIndex=s===this.activeTab?0:-1}),this.panels.forEach(s=>{var o;return s.active=s.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&vs(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(i=>i.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,i=t.clientHeight,s=this.localize.dir()==="rtl",o=this.getAllTabs(),n=o.slice(0,o.indexOf(t)).reduce((d,c)=>({left:d.left+c.clientWidth,top:d.top+c.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let i=null;const s=e==="forward"?1:-1;let o=t+s;for(;t<this.tabs.length;){if(i=this.tabs[o]||null,i===null){e==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;o+=s}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(i=>i.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return y`
      <div
        part="base"
        class=${L({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?y`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${L({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?y`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${L({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};dt.styles=[O,fn],dt.dependencies={"sl-icon-button":rt,"sl-resize-observer":si},r([k(".tab-group")],dt.prototype,"tabGroup",2),r([k(".tab-group__body")],dt.prototype,"body",2),r([k(".tab-group__nav")],dt.prototype,"nav",2),r([k(".tab-group__indicator")],dt.prototype,"indicator",2),r([I()],dt.prototype,"hasScrollControls",2),r([I()],dt.prototype,"shouldHideScrollStartButton",2),r([I()],dt.prototype,"shouldHideScrollEndButton",2),r([l()],dt.prototype,"placement",2),r([l()],dt.prototype,"activation",2),r([l({attribute:"no-scroll-controls",type:Boolean})],dt.prototype,"noScrollControls",2),r([l({attribute:"fixed-scroll-controls",type:Boolean})],dt.prototype,"fixedScrollControls",2),r([Ke({passive:!0})],dt.prototype,"updateScrollButtons",1),r([x("noScrollControls",{waitUntilFirstUpdate:!0})],dt.prototype,"updateScrollControls",1),r([x("placement",{waitUntilFirstUpdate:!0})],dt.prototype,"syncIndicator",1),dt.define("sl-tab-group");var yn=T`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,ys=class extends S{constructor(){super(...arguments),this.effect="none"}render(){return y`
      <div
        part="base"
        class=${L({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};ys.styles=[O,yn],r([l()],ys.prototype,"effect",2),ys.define("sl-skeleton");var wn=T`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function ai(t,e){function i(o){const a=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,d=a.left+n.scrollX,c=a.top+n.scrollY,u=o.pageX-d,f=o.pageY-c;e?.onMove&&e.onMove(u,f)}function s(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",s),e?.onStop&&e.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",s),e?.initialEvent instanceof PointerEvent&&i(e.initialEvent)}var To=()=>null,kt=class extends S{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new H(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=To,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:i,size:s,snapThreshold:o,isRtl:a,vertical:n})=>{let d=i,c=Number.POSITIVE_INFINITY;return e.forEach(u=>{let f;if(u.startsWith("repeat(")){const p=t.substring(7,t.length-1),m=p.endsWith("%"),b=Number.parseFloat(p),g=m?s*(b/100):b;f=Math.round((a&&!n?s-i:i)/g)*g}else u.endsWith("%")?f=s*(Number.parseFloat(u)/100):f=Number.parseFloat(u);a&&!n&&(f=s-f);const h=Math.abs(i-f);h<=o&&h<c&&(d=f,c=h)}),d}}set snap(t){this.snapValue=t??"",t?this.snapFunction=typeof t=="string"?this.toSnapFunction(t):t:this.snapFunction=To}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),ai(this,{onMove:(i,s)=>{var o;let a=this.vertical?s:i;this.primary==="end"&&(a=this.size-a),a=(o=this.snapFunction({pos:a,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))!=null?o:a,this.position=et(this.pixelsToPercentage(a),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const i=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=i),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=i),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const s=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=s})}this.position=et(e,0,100)}}handleResize(t){const{width:e,height:i}=t[0].contentRect;this.size=this.vertical?i:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",i=this.localize.dir()==="rtl",s=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?i&&!this.vertical?this.style[t]=`${s} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${s}`:i&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${o}`,this.style[e]="",y`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${z(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};kt.styles=[O,wn],r([k(".divider")],kt.prototype,"divider",2),r([l({type:Number,reflect:!0})],kt.prototype,"position",2),r([l({attribute:"position-in-pixels",type:Number})],kt.prototype,"positionInPixels",2),r([l({type:Boolean,reflect:!0})],kt.prototype,"vertical",2),r([l({type:Boolean,reflect:!0})],kt.prototype,"disabled",2),r([l()],kt.prototype,"primary",2),r([l({reflect:!0})],kt.prototype,"snap",1),r([l({type:Number,attribute:"snap-threshold"})],kt.prototype,"snapThreshold",2),r([x("position")],kt.prototype,"handlePositionChange",1),r([x("positionInPixels")],kt.prototype,"handlePositionInPixelsChange",1),r([x("vertical")],kt.prototype,"handleVerticalChange",1),kt.define("sl-split-panel");var _n=T`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,ft=class extends S{constructor(){super(...arguments),this.formControlController=new Jt(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new gt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return y`
      <div
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${L({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${z(this.value)}
            .checked=${pe(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ft.styles=[O,ue,_n],r([k('input[type="checkbox"]')],ft.prototype,"input",2),r([I()],ft.prototype,"hasFocus",2),r([l()],ft.prototype,"title",2),r([l()],ft.prototype,"name",2),r([l()],ft.prototype,"value",2),r([l({reflect:!0})],ft.prototype,"size",2),r([l({type:Boolean,reflect:!0})],ft.prototype,"disabled",2),r([l({type:Boolean,reflect:!0})],ft.prototype,"checked",2),r([$e("checked")],ft.prototype,"defaultChecked",2),r([l({reflect:!0})],ft.prototype,"form",2),r([l({type:Boolean,reflect:!0})],ft.prototype,"required",2),r([l({attribute:"help-text"})],ft.prototype,"helpText",2),r([x("checked",{waitUntilFirstUpdate:!0})],ft.prototype,"handleCheckedChange",1),r([x("disabled",{waitUntilFirstUpdate:!0})],ft.prototype,"handleDisabledChange",1),ft.define("sl-switch"),si.define("sl-resize-observer");var xn=T`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;let ws=class extends Ge{constructor(e){if(super(e),this.it=K,e.type!==Ut.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===K||e==null)return this._t=void 0,this.it=e;if(e===wt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const i=[e];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};ws.directiveName="unsafeHTML",ws.resultType=1;const Di=Ye(ws);var F=class extends S{constructor(){super(...arguments),this.formControlController=new Jt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new gt(this,"help-text","label"),this.localize=new H(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>y`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=e.closest(".select__clear")!==null,s=e.closest("sl-icon-button")!==null;if(!(i||s)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const o=this.getAllOptions(),a=o.indexOf(this.currentOption);let n=Math.max(0,a);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=a+1,n>o.length-1&&(n=0)):t.key==="ArrowUp"?(n=a-1,n<0&&(n=o.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=o.length-1),this.setCurrentOption(o[n])}if(t.key&&t.key.length===1||t.key==="Backspace"){const o=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const a of o)if(a.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(a);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const i=t.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="sl-icon-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("sl-option"),s=this.value;i&&!i.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(e)?e:[e],s=[];t.forEach(o=>s.push(o.value)),this.setSelectedOptions(t.filter(o=>i.includes(o.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(s=>s.selected=!1),i.length&&i.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i;const s=this.getAllOptions();this.selectedOptions=s.filter(a=>a.selected);const o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(a=>a.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const a=this.selectedOptions[0];this.value=(t=a?.value)!=null?t:"",this.displayLabel=(i=(e=a?.getTextLabel)==null?void 0:e.call(a))!=null?i:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return y`<div @sl-remove=${s=>this.handleTagRemove(s,t)}>
          ${typeof i=="string"?Di(i):i}
        </div>`}else if(e===this.maxOptionsVisible)return y`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return y``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t==="value"){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}}handleValueChange(){if(!this.valueHasChanged){const i=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=i}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(i=>e.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await tt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=X(this,"select.show",{dir:this.localize.dir()});await G(this.popup.popup,t,e),this.currentOption&&vs(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await tt(this);const{keyframes:t,options:e}=X(this,"select.hide",{dir:this.localize.dir()});await G(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,vt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,vt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&this.value.length>0,a=this.placeholder&&this.value&&this.value.length<=0;return y`
      <div
        part="form-control"
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${L({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":a,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?y`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?y`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};F.styles=[O,ue,xn],F.dependencies={"sl-icon":j,"sl-popup":W,"sl-tag":re},r([k(".select")],F.prototype,"popup",2),r([k(".select__combobox")],F.prototype,"combobox",2),r([k(".select__display-input")],F.prototype,"displayInput",2),r([k(".select__value-input")],F.prototype,"valueInput",2),r([k(".select__listbox")],F.prototype,"listbox",2),r([I()],F.prototype,"hasFocus",2),r([I()],F.prototype,"displayLabel",2),r([I()],F.prototype,"currentOption",2),r([I()],F.prototype,"selectedOptions",2),r([I()],F.prototype,"valueHasChanged",2),r([l()],F.prototype,"name",2),r([I()],F.prototype,"value",1),r([l({attribute:"value"})],F.prototype,"defaultValue",2),r([l({reflect:!0})],F.prototype,"size",2),r([l()],F.prototype,"placeholder",2),r([l({type:Boolean,reflect:!0})],F.prototype,"multiple",2),r([l({attribute:"max-options-visible",type:Number})],F.prototype,"maxOptionsVisible",2),r([l({type:Boolean,reflect:!0})],F.prototype,"disabled",2),r([l({type:Boolean})],F.prototype,"clearable",2),r([l({type:Boolean,reflect:!0})],F.prototype,"open",2),r([l({type:Boolean})],F.prototype,"hoist",2),r([l({type:Boolean,reflect:!0})],F.prototype,"filled",2),r([l({type:Boolean,reflect:!0})],F.prototype,"pill",2),r([l()],F.prototype,"label",2),r([l({reflect:!0})],F.prototype,"placement",2),r([l({attribute:"help-text"})],F.prototype,"helpText",2),r([l({reflect:!0})],F.prototype,"form",2),r([l({type:Boolean,reflect:!0})],F.prototype,"required",2),r([l()],F.prototype,"getTag",2),r([x("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1),r([x(["defaultValue","value"],{waitUntilFirstUpdate:!0})],F.prototype,"handleValueChange",1),r([x("open",{waitUntilFirstUpdate:!0})],F.prototype,"handleOpenChange",1),U("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),U("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),F.define("sl-select"),Qe.define("sl-spinner");var kn=T`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,Y=class extends S{constructor(){super(...arguments),this.formControlController=new Jt(this),this.hasSlotController=new gt(this,"help-text","label"),this.localize=new H(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,i=this.output.offsetWidth,s=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",a=e*t;if(o){const n=`${e-a}px + ${t} * ${s}`;this.output.style.translate=`calc((${n} - ${i/2}px - ${s} / 2))`}else{const n=`${a}px - ${t} * ${s}`;this.output.style.translate=`calc(${n} - ${i/2}px + ${s} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e;return y`
      <div
        part="form-control"
        class=${L({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${L({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${z(this.name)}
              ?disabled=${this.disabled}
              min=${z(this.min)}
              max=${z(this.max)}
              step=${z(this.step)}
              .value=${pe(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?y`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Y.styles=[O,ue,kn],r([k(".range__control")],Y.prototype,"input",2),r([k(".range__tooltip")],Y.prototype,"output",2),r([I()],Y.prototype,"hasFocus",2),r([I()],Y.prototype,"hasTooltip",2),r([l()],Y.prototype,"title",2),r([l()],Y.prototype,"name",2),r([l({type:Number})],Y.prototype,"value",2),r([l()],Y.prototype,"label",2),r([l({attribute:"help-text"})],Y.prototype,"helpText",2),r([l({type:Boolean,reflect:!0})],Y.prototype,"disabled",2),r([l({type:Number})],Y.prototype,"min",2),r([l({type:Number})],Y.prototype,"max",2),r([l({type:Number})],Y.prototype,"step",2),r([l()],Y.prototype,"tooltip",2),r([l({attribute:!1})],Y.prototype,"tooltipFormatter",2),r([l({reflect:!0})],Y.prototype,"form",2),r([$e()],Y.prototype,"defaultValue",2),r([Ke({passive:!0})],Y.prototype,"handleThumbDragStart",1),r([x("value",{waitUntilFirstUpdate:!0})],Y.prototype,"handleValueChange",1),r([x("disabled",{waitUntilFirstUpdate:!0})],Y.prototype,"handleDisabledChange",1),r([x("hasTooltip",{waitUntilFirstUpdate:!0})],Y.prototype,"syncRange",1),Y.define("sl-range");var Cn=T`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;const Io="important",$n=" !"+Io,yt=Ye(class extends Ge{constructor(t){if(super(t),t.type!==Ut.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return s==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in e){const o=e[s];if(o!=null){this.ft.add(s);const a=typeof o=="string"&&o.endsWith($n);s.includes("-")||a?i.setProperty(s,a?o.slice(0,-11):o,a?Io:""):i[s]=o}}return wt}});var mt=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:i,right:s,width:o}=this.rating.getBoundingClientRect(),a=e?this.roundToPrecision((s-t)/o*this.max,this.precision):this.roundToPrecision((t-i)/o*this.max,this.precision);return et(a,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl",s=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"){const o=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"){const o=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==s&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const i=1/e;return Math.ceil(t*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let i=0;return this.disabled||this.readonly?i=this.value:i=this.isHovering?this.hoverValue:this.value,y`
      <div
        part="base"
        class=${L({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(s=>i>s&&i<s+1?y`
                <span
                  class=${L({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===s+1})}
                  role="presentation"
                >
                  <div
                    style=${yt({clipPath:t?`inset(0 ${(i-s)*100}% 0 0)`:`inset(0 0 0 ${(i-s)*100}%)`})}
                  >
                    ${Di(this.getSymbol(s+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${yt({clipPath:t?`inset(0 0 0 ${100-(i-s)*100}%)`:`inset(0 ${100-(i-s)*100}% 0 0)`})}
                  >
                    ${Di(this.getSymbol(s+1))}
                  </div>
                </span>
              `:y`
              <span
                class=${L({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===s+1,"rating__symbol--active":i>=s+1})}
                role="presentation"
              >
                ${Di(this.getSymbol(s+1))}
              </span>
            `)}
        </span>
      </div>
    `}};mt.styles=[O,Cn],mt.dependencies={"sl-icon":j},r([k(".rating")],mt.prototype,"rating",2),r([I()],mt.prototype,"hoverValue",2),r([I()],mt.prototype,"isHovering",2),r([l()],mt.prototype,"label",2),r([l({type:Number})],mt.prototype,"value",2),r([l({type:Number})],mt.prototype,"max",2),r([l({type:Number})],mt.prototype,"precision",2),r([l({type:Boolean,reflect:!0})],mt.prototype,"readonly",2),r([l({type:Boolean,reflect:!0})],mt.prototype,"disabled",2),r([l()],mt.prototype,"getSymbol",2),r([Ke({passive:!0})],mt.prototype,"handleTouchMove",1),r([x("hoverValue")],mt.prototype,"handleHoverValueChange",1),r([x("isHovering")],mt.prototype,"handleIsHoveringChange",1),mt.define("sl-rating");var Sn=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],ge=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=e.getTime()-t.getTime(),{unit:s,value:o}=Sn.find(a=>Math.abs(i)<a.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/o),s,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let a;s==="minute"?a=Pi("second"):s==="hour"?a=Pi("minute"):s==="day"?a=Pi("hour"):a=Pi("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),a)}return y` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};r([I()],ge.prototype,"isoTime",2),r([I()],ge.prototype,"relativeTime",2),r([l()],ge.prototype,"date",2),r([l()],ge.prototype,"format",2),r([l()],ge.prototype,"numeric",2),r([l({type:Boolean})],ge.prototype,"sync",2);function Pi(t){const i={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return i-Date.now()%i}ge.define("sl-relative-time");var Oo=T`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,zn=T`
  ${Oo}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Mt=class extends S{constructor(){super(...arguments),this.hasSlotController=new gt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return ii`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${L({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${z(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Mt.styles=[O,zn],r([k(".button")],Mt.prototype,"input",2),r([k(".hidden-input")],Mt.prototype,"hiddenInput",2),r([I()],Mt.prototype,"hasFocus",2),r([l({type:Boolean,reflect:!0})],Mt.prototype,"checked",2),r([l()],Mt.prototype,"value",2),r([l({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2),r([l({reflect:!0})],Mt.prototype,"size",2),r([l({type:Boolean,reflect:!0})],Mt.prototype,"pill",2),r([x("disabled",{waitUntilFirstUpdate:!0})],Mt.prototype,"handleDisabledChange",1),Mt.define("sl-radio-button");var An=T`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,En=T`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,ve=class extends S{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=ni(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=ni(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=ni(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=ni(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const i=t.indexOf(e),s=ni(e);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",i===0),s.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<t.length-1),s.toggleAttribute("data-sl-button-group__button--last",i===t.length-1),s.toggleAttribute("data-sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return y`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};ve.styles=[O,En],r([k("slot")],ve.prototype,"defaultSlot",2),r([I()],ve.prototype,"disableRole",2),r([l()],ve.prototype,"label",2);function ni(t){var e;const i="sl-button, sl-radio-button";return(e=t.closest(i))!=null?e:t.querySelector(i)}var ht=class extends S{constructor(){super(...arguments),this.formControlController=new Jt(this),this.hasSlotController=new gt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?dr:t?cr:pi}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),s=this.value;!e||e.disabled||(this.value=e.value,i.forEach(o=>o.checked=o===e),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const i=this.getAllRadios().filter(d=>!d.disabled),s=(e=i.find(d=>d.checked))!=null?e:i[0],o=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,a=this.value;let n=i.indexOf(s)+o;n<0&&(n=i.length-1),n>i.length-1&&(n=0),this.getAllRadios().forEach(d=>{d.checked=!1,this.hasButtonGroup||d.setAttribute("tabindex","-1")}),this.value=i[n].value,i[n].checked=!0,this.hasButtonGroup?i[n].shadowRoot.querySelector("button").focus():(i[n].setAttribute("tabindex","0"),i[n].focus()),this.value!==a&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const i=this.getAllRadios();if(await Promise.all(i.map(async s=>{await s.updateComplete,s.checked=s.value===this.value,s.size=this.size})),this.hasButtonGroup=i.some(s=>s.tagName.toLowerCase()==="sl-radio-button"),i.length>0&&!i.some(s=>s.checked))if(this.hasButtonGroup){const s=(t=i[0].shadowRoot)==null?void 0:t.querySelector("button");s&&s.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const s=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");s&&(s.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),i=e.find(a=>a.checked),s=e.find(a=>!a.disabled),o=i||s;o&&o.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,o=y`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return y`
      <fieldset
        part="form-control"
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?y`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};ht.styles=[O,ue,An],ht.dependencies={"sl-button-group":ve},r([k("slot:not([name])")],ht.prototype,"defaultSlot",2),r([k(".radio-group__validation-input")],ht.prototype,"validationInput",2),r([I()],ht.prototype,"hasButtonGroup",2),r([I()],ht.prototype,"errorMessage",2),r([I()],ht.prototype,"defaultValue",2),r([l()],ht.prototype,"label",2),r([l({attribute:"help-text"})],ht.prototype,"helpText",2),r([l()],ht.prototype,"name",2),r([l({reflect:!0})],ht.prototype,"value",2),r([l({reflect:!0})],ht.prototype,"size",2),r([l({reflect:!0})],ht.prototype,"form",2),r([l({type:Boolean,reflect:!0})],ht.prototype,"required",2),r([x("size",{waitUntilFirstUpdate:!0})],ht.prototype,"handleSizeChange",1),r([x("value")],ht.prototype,"handleValueChange",1),ht.define("sl-radio-group");var Tn=T`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Oe=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*e,s=i-this.value/100*i;this.indicatorOffset=`${s}px`}}render(){return y`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Oe.styles=[O,Tn],r([k(".progress-ring__indicator")],Oe.prototype,"indicator",2),r([I()],Oe.prototype,"indicatorOffset",2),r([l({type:Number,reflect:!0})],Oe.prototype,"value",2),r([l()],Oe.prototype,"label",2),Oe.define("sl-progress-ring");var In=T`
  :host {
    display: inline-block;
  }
`;let Lo=null;class Do{}Do.render=function(t,e){Lo(t,e)},self.QrCreator=Do,(function(t){function e(d,c,u,f){var h={},p=t(u,c);p.u(d),p.J(),f=f||0;var m=p.h(),b=p.h()+2*f;return h.text=d,h.level=c,h.version=u,h.O=b,h.a=function(g,$){return g-=f,$-=f,0>g||g>=m||0>$||$>=m?!1:p.a(g,$)},h}function i(d,c,u,f,h,p,m,b,g,$){function A(_,C,v,w,D,M,B){_?(d.lineTo(C+M,v+B),d.arcTo(C,v,w,D,p)):d.lineTo(C,v)}m?d.moveTo(c+p,u):d.moveTo(c,u),A(b,f,u,f,h,-p,0),A(g,f,h,c,h,0,-p),A($,c,h,c,u,p,0),A(m,c,u,f,u,0,p)}function s(d,c,u,f,h,p,m,b,g,$){function A(_,C,v,w){d.moveTo(_+v,C),d.lineTo(_,C),d.lineTo(_,C+w),d.arcTo(_,C,_+v,C,p)}m&&A(c,u,p,p),b&&A(f,u,-p,p),g&&A(f,h,-p,-p),$&&A(c,h,p,-p)}function o(d,c){var u=c.fill;if(typeof u=="string")d.fillStyle=u;else{var f=u.type,h=u.colorStops;if(u=u.position.map(m=>Math.round(m*c.size)),f==="linear-gradient")var p=d.createLinearGradient.apply(d,u);else if(f==="radial-gradient")p=d.createRadialGradient.apply(d,u);else throw Error("Unsupported fill");h.forEach(([m,b])=>{p.addColorStop(m,b)}),d.fillStyle=p}}function a(d,c){t:{var u=c.text,f=c.v,h=c.N,p=c.K,m=c.P;for(h=Math.max(1,h||1),p=Math.min(40,p||40);h<=p;h+=1)try{var b=e(u,f,h,m);break t}catch{}b=void 0}if(!b)return null;for(u=d.getContext("2d"),c.background&&(u.fillStyle=c.background,u.fillRect(c.left,c.top,c.size,c.size)),f=b.O,p=c.size/f,u.beginPath(),m=0;m<f;m+=1)for(h=0;h<f;h+=1){var g=u,$=c.left+h*p,A=c.top+m*p,_=m,C=h,v=b.a,w=$+p,D=A+p,M=_-1,B=_+1,P=C-1,E=C+1,at=Math.floor(Math.min(.5,Math.max(0,c.R))*p),it=v(_,C),bt=v(M,P),st=v(M,C);M=v(M,E);var Ot=v(_,E);E=v(B,E),C=v(B,C),B=v(B,P),_=v(_,P),$=Math.round($),A=Math.round(A),w=Math.round(w),D=Math.round(D),it?i(g,$,A,w,D,at,!st&&!_,!st&&!Ot,!C&&!Ot,!C&&!_):s(g,$,A,w,D,at,st&&_&&bt,st&&Ot&&M,C&&Ot&&E,C&&_&&B)}return o(u,c),u.fill(),d}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Lo=function(d,c){var u={};Object.assign(u,n,d),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,c instanceof HTMLCanvasElement?((c.width!==u.size||c.height!==u.size)&&(c.width=u.size,c.height=u.size),c.getContext("2d").clearRect(0,0,c.width,c.height),a(c,u)):(d=document.createElement("canvas"),d.width=u.size,d.height=u.size,u=a(d,u),c.appendChild(u))}})((function(){function t(c){var u=i.s(c);return{S:function(){return 4},b:function(){return u.length},write:function(f){for(var h=0;h<u.length;h+=1)f.put(u[h],8)}}}function e(){var c=[],u=0,f={B:function(){return c},c:function(h){return(c[Math.floor(h/8)]>>>7-h%8&1)==1},put:function(h,p){for(var m=0;m<p;m+=1)f.m((h>>>p-m-1&1)==1)},f:function(){return u},m:function(h){var p=Math.floor(u/8);c.length<=p&&c.push(0),h&&(c[p]|=128>>>u%8),u+=1}};return f}function i(c,u){function f(_,C){for(var v=-1;7>=v;v+=1)if(!(-1>=_+v||b<=_+v))for(var w=-1;7>=w;w+=1)-1>=C+w||b<=C+w||(m[_+v][C+w]=0<=v&&6>=v&&(w==0||w==6)||0<=w&&6>=w&&(v==0||v==6)||2<=v&&4>=v&&2<=w&&4>=w)}function h(_,C){for(var v=b=4*c+17,w=Array(v),D=0;D<v;D+=1){w[D]=Array(v);for(var M=0;M<v;M+=1)w[D][M]=null}for(m=w,f(0,0),f(b-7,0),f(0,b-7),v=a.G(c),w=0;w<v.length;w+=1)for(D=0;D<v.length;D+=1){M=v[w];var B=v[D];if(m[M][B]==null)for(var P=-2;2>=P;P+=1)for(var E=-2;2>=E;E+=1)m[M+P][B+E]=P==-2||P==2||E==-2||E==2||P==0&&E==0}for(v=8;v<b-8;v+=1)m[v][6]==null&&(m[v][6]=v%2==0);for(v=8;v<b-8;v+=1)m[6][v]==null&&(m[6][v]=v%2==0);for(v=a.w(p<<3|C),w=0;15>w;w+=1)D=!_&&(v>>w&1)==1,m[6>w?w:8>w?w+1:b-15+w][8]=D,m[8][8>w?b-w-1:9>w?15-w:14-w]=D;if(m[b-8][8]=!_,7<=c){for(v=a.A(c),w=0;18>w;w+=1)D=!_&&(v>>w&1)==1,m[Math.floor(w/3)][w%3+b-8-3]=D;for(w=0;18>w;w+=1)D=!_&&(v>>w&1)==1,m[w%3+b-8-3][Math.floor(w/3)]=D}if(g==null){for(_=d.I(c,p),v=e(),w=0;w<$.length;w+=1)D=$[w],v.put(4,4),v.put(D.b(),a.f(4,c)),D.write(v);for(w=D=0;w<_.length;w+=1)D+=_[w].j;if(v.f()>8*D)throw Error("code length overflow. ("+v.f()+">"+8*D+")");for(v.f()+4<=8*D&&v.put(0,4);v.f()%8!=0;)v.m(!1);for(;!(v.f()>=8*D)&&(v.put(236,8),!(v.f()>=8*D));)v.put(17,8);var at=0;for(D=w=0,M=Array(_.length),B=Array(_.length),P=0;P<_.length;P+=1){var it=_[P].j,bt=_[P].o-it;for(w=Math.max(w,it),D=Math.max(D,bt),M[P]=Array(it),E=0;E<M[P].length;E+=1)M[P][E]=255&v.B()[E+at];for(at+=it,E=a.C(bt),it=s(M[P],E.b()-1).l(E),B[P]=Array(E.b()-1),E=0;E<B[P].length;E+=1)bt=E+it.b()-B[P].length,B[P][E]=0<=bt?it.c(bt):0}for(E=v=0;E<_.length;E+=1)v+=_[E].o;for(v=Array(v),E=at=0;E<w;E+=1)for(P=0;P<_.length;P+=1)E<M[P].length&&(v[at]=M[P][E],at+=1);for(E=0;E<D;E+=1)for(P=0;P<_.length;P+=1)E<B[P].length&&(v[at]=B[P][E],at+=1);g=v}for(_=g,v=-1,w=b-1,D=7,M=0,C=a.F(C),B=b-1;0<B;B-=2)for(B==6&&--B;;){for(P=0;2>P;P+=1)m[w][B-P]==null&&(E=!1,M<_.length&&(E=(_[M]>>>D&1)==1),C(w,B-P)&&(E=!E),m[w][B-P]=E,--D,D==-1&&(M+=1,D=7));if(w+=v,0>w||b<=w){w-=v,v=-v;break}}}var p=o[u],m=null,b=0,g=null,$=[],A={u:function(_){_=t(_),$.push(_),g=null},a:function(_,C){if(0>_||b<=_||0>C||b<=C)throw Error(_+","+C);return m[_][C]},h:function(){return b},J:function(){for(var _=0,C=0,v=0;8>v;v+=1){h(!0,v);var w=a.D(A);(v==0||_>w)&&(_=w,C=v)}h(!1,C)}};return A}function s(c,u){if(typeof c.length>"u")throw Error(c.length+"/"+u);var f=(function(){for(var p=0;p<c.length&&c[p]==0;)p+=1;for(var m=Array(c.length-p+u),b=0;b<c.length-p;b+=1)m[b]=c[b+p];return m})(),h={c:function(p){return f[p]},b:function(){return f.length},multiply:function(p){for(var m=Array(h.b()+p.b()-1),b=0;b<h.b();b+=1)for(var g=0;g<p.b();g+=1)m[b+g]^=n.i(n.g(h.c(b))+n.g(p.c(g)));return s(m,0)},l:function(p){if(0>h.b()-p.b())return h;for(var m=n.g(h.c(0))-n.g(p.c(0)),b=Array(h.b()),g=0;g<h.b();g+=1)b[g]=h.c(g);for(g=0;g<p.b();g+=1)b[g]^=n.i(n.g(p.c(g))+m);return s(b,0).l(p)}};return h}i.s=function(c){for(var u=[],f=0;f<c.length;f++){var h=c.charCodeAt(f);128>h?u.push(h):2048>h?u.push(192|h>>6,128|h&63):55296>h||57344<=h?u.push(224|h>>12,128|h>>6&63,128|h&63):(f++,h=65536+((h&1023)<<10|c.charCodeAt(f)&1023),u.push(240|h>>18,128|h>>12&63,128|h>>6&63,128|h&63))}return u};var o={L:1,M:0,Q:3,H:2},a=(function(){function c(h){for(var p=0;h!=0;)p+=1,h>>>=1;return p}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],f={w:function(h){for(var p=h<<10;0<=c(p)-c(1335);)p^=1335<<c(p)-c(1335);return(h<<10|p)^21522},A:function(h){for(var p=h<<12;0<=c(p)-c(7973);)p^=7973<<c(p)-c(7973);return h<<12|p},G:function(h){return u[h-1]},F:function(h){switch(h){case 0:return function(p,m){return(p+m)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,m){return m%3==0};case 3:return function(p,m){return(p+m)%3==0};case 4:return function(p,m){return(Math.floor(p/2)+Math.floor(m/3))%2==0};case 5:return function(p,m){return p*m%2+p*m%3==0};case 6:return function(p,m){return(p*m%2+p*m%3)%2==0};case 7:return function(p,m){return(p*m%3+(p+m)%2)%2==0};default:throw Error("bad maskPattern:"+h)}},C:function(h){for(var p=s([1],0),m=0;m<h;m+=1)p=p.multiply(s([1,n.i(m)],0));return p},f:function(h,p){if(h!=4||1>p||40<p)throw Error("mode: "+h+"; type: "+p);return 10>p?8:16},D:function(h){for(var p=h.h(),m=0,b=0;b<p;b+=1)for(var g=0;g<p;g+=1){for(var $=0,A=h.a(b,g),_=-1;1>=_;_+=1)if(!(0>b+_||p<=b+_))for(var C=-1;1>=C;C+=1)0>g+C||p<=g+C||(_!=0||C!=0)&&A==h.a(b+_,g+C)&&($+=1);5<$&&(m+=3+$-5)}for(b=0;b<p-1;b+=1)for(g=0;g<p-1;g+=1)$=0,h.a(b,g)&&($+=1),h.a(b+1,g)&&($+=1),h.a(b,g+1)&&($+=1),h.a(b+1,g+1)&&($+=1),($==0||$==4)&&(m+=3);for(b=0;b<p;b+=1)for(g=0;g<p-6;g+=1)h.a(b,g)&&!h.a(b,g+1)&&h.a(b,g+2)&&h.a(b,g+3)&&h.a(b,g+4)&&!h.a(b,g+5)&&h.a(b,g+6)&&(m+=40);for(g=0;g<p;g+=1)for(b=0;b<p-6;b+=1)h.a(b,g)&&!h.a(b+1,g)&&h.a(b+2,g)&&h.a(b+3,g)&&h.a(b+4,g)&&!h.a(b+5,g)&&h.a(b+6,g)&&(m+=40);for(g=$=0;g<p;g+=1)for(b=0;b<p;b+=1)h.a(b,g)&&($+=1);return m+=Math.abs(100*$/p/p-50)/5*10}};return f})(),n=(function(){for(var c=Array(256),u=Array(256),f=0;8>f;f+=1)c[f]=1<<f;for(f=8;256>f;f+=1)c[f]=c[f-4]^c[f-5]^c[f-6]^c[f-8];for(f=0;255>f;f+=1)u[c[f]]=f;return{g:function(h){if(1>h)throw Error("glog("+h+")");return u[h]},i:function(h){for(;0>h;)h+=255;for(;256<=h;)h-=255;return c[h]}}})(),d=(function(){function c(h,p){switch(p){case o.L:return u[4*(h-1)];case o.M:return u[4*(h-1)+1];case o.Q:return u[4*(h-1)+2];case o.H:return u[4*(h-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f={I:function(h,p){var m=c(h,p);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+h+"/errorCorrectLevel:"+p);h=m.length/3,p=[];for(var b=0;b<h;b+=1)for(var g=m[3*b],$=m[3*b+1],A=m[3*b+2],_=0;_<g;_+=1){var C=A,v={};v.o=$,v.j=C,p.push(v)}return p}};return f})();return i})());const On=QrCreator;var Rt=class extends S{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&On.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return y`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${yt({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Rt.styles=[O,In],r([k("canvas")],Rt.prototype,"canvas",2),r([l()],Rt.prototype,"value",2),r([l()],Rt.prototype,"label",2),r([l({type:Number})],Rt.prototype,"size",2),r([l()],Rt.prototype,"fill",2),r([l()],Rt.prototype,"background",2),r([l({type:Number})],Rt.prototype,"radius",2),r([l({attribute:"error-correction"})],Rt.prototype,"errorCorrection",2),r([x(["background","errorCorrection","fill","radius","size","value"])],Rt.prototype,"generate",1),Rt.define("sl-qr-code");var Ln=T`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Kt=class extends S{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return y`
      <span
        part="base"
        class=${L({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?y` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Kt.styles=[O,Ln],Kt.dependencies={"sl-icon":j},r([I()],Kt.prototype,"checked",2),r([I()],Kt.prototype,"hasFocus",2),r([l()],Kt.prototype,"value",2),r([l({reflect:!0})],Kt.prototype,"size",2),r([l({type:Boolean,reflect:!0})],Kt.prototype,"disabled",2),r([x("checked")],Kt.prototype,"handleCheckedChange",1),r([x("disabled",{waitUntilFirstUpdate:!0})],Kt.prototype,"handleDisabledChange",1),Kt.define("sl-radio");var Dn=T`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Tt=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&(i.hasAttribute("slot")||(e+=i.textContent)),i.nodeType===Node.TEXT_NODE&&(e+=i.textContent)}),e.trim()}render(){return y`
      <div
        part="base"
        class=${L({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Tt.styles=[O,Dn],Tt.dependencies={"sl-icon":j},r([k(".option__label")],Tt.prototype,"defaultSlot",2),r([I()],Tt.prototype,"current",2),r([I()],Tt.prototype,"selected",2),r([I()],Tt.prototype,"hasHover",2),r([l({reflect:!0})],Tt.prototype,"value",2),r([l({type:Boolean,reflect:!0})],Tt.prototype,"disabled",2),r([x("disabled")],Tt.prototype,"handleDisabledChange",1),r([x("selected")],Tt.prototype,"handleSelectedChange",1),r([x("value")],Tt.prototype,"handleValueChange",1),Tt.define("sl-option"),W.define("sl-popup");var Pn=T`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,li=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return y`
      <div
        part="base"
        class=${L({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${z(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${yt({width:`${this.value}%`})}>
          ${this.indeterminate?"":y` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};li.styles=[O,Pn],r([l({type:Number,reflect:!0})],li.prototype,"value",2),r([l({type:Boolean,reflect:!0})],li.prototype,"indeterminate",2),r([l()],li.prototype,"label",2),li.define("sl-progress-bar");var Mn=T`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Po=class extends S{render(){return y` <slot part="base" class="menu-label"></slot> `}};Po.styles=[O,Mn],Po.define("sl-menu-label");var Rn=T`
  :host {
    display: contents;
  }
`,Xt=class extends S{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return y` <slot></slot> `}};Xt.styles=[O,Rn],r([l({reflect:!0})],Xt.prototype,"attr",2),r([l({attribute:"attr-old-value",type:Boolean,reflect:!0})],Xt.prototype,"attrOldValue",2),r([l({attribute:"char-data",type:Boolean,reflect:!0})],Xt.prototype,"charData",2),r([l({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Xt.prototype,"charDataOldValue",2),r([l({attribute:"child-list",type:Boolean,reflect:!0})],Xt.prototype,"childList",2),r([l({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2),r([x("disabled")],Xt.prototype,"handleDisabledChange",1),r([x("attr",{waitUntilFirstUpdate:!0}),x("attr-old-value",{waitUntilFirstUpdate:!0}),x("char-data",{waitUntilFirstUpdate:!0}),x("char-data-old-value",{waitUntilFirstUpdate:!0}),x("childList",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleChange",1),Xt.define("sl-mutation-observer");var Fn=T`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,R=class extends S{constructor(){super(...arguments),this.formControlController=new Jt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new gt(this,"help-text","label"),this.localize=new H(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const o=e??this.input.selectionStart,a=i??this.input.selectionEnd;this.input.setRangeText(t,o,a,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,a=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return y`
      <div
        part="form-control"
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${L({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${z(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${z(this.placeholder)}
              minlength=${z(this.minlength)}
              maxlength=${z(this.maxlength)}
              min=${z(this.min)}
              max=${z(this.max)}
              step=${z(this.step)}
              .value=${pe(this.value)}
              autocapitalize=${z(this.autocapitalize)}
              autocomplete=${z(this.autocomplete)}
              autocorrect=${z(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${z(this.pattern)}
              enterkeyhint=${z(this.enterkeyhint)}
              inputmode=${z(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${a?y`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?y`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?y`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:y`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};R.styles=[O,ue,Fn],R.dependencies={"sl-icon":j},r([k(".input__control")],R.prototype,"input",2),r([I()],R.prototype,"hasFocus",2),r([l()],R.prototype,"title",2),r([l({reflect:!0})],R.prototype,"type",2),r([l()],R.prototype,"name",2),r([l()],R.prototype,"value",2),r([$e()],R.prototype,"defaultValue",2),r([l({reflect:!0})],R.prototype,"size",2),r([l({type:Boolean,reflect:!0})],R.prototype,"filled",2),r([l({type:Boolean,reflect:!0})],R.prototype,"pill",2),r([l()],R.prototype,"label",2),r([l({attribute:"help-text"})],R.prototype,"helpText",2),r([l({type:Boolean})],R.prototype,"clearable",2),r([l({type:Boolean,reflect:!0})],R.prototype,"disabled",2),r([l()],R.prototype,"placeholder",2),r([l({type:Boolean,reflect:!0})],R.prototype,"readonly",2),r([l({attribute:"password-toggle",type:Boolean})],R.prototype,"passwordToggle",2),r([l({attribute:"password-visible",type:Boolean})],R.prototype,"passwordVisible",2),r([l({attribute:"no-spin-buttons",type:Boolean})],R.prototype,"noSpinButtons",2),r([l({reflect:!0})],R.prototype,"form",2),r([l({type:Boolean,reflect:!0})],R.prototype,"required",2),r([l()],R.prototype,"pattern",2),r([l({type:Number})],R.prototype,"minlength",2),r([l({type:Number})],R.prototype,"maxlength",2),r([l()],R.prototype,"min",2),r([l()],R.prototype,"max",2),r([l()],R.prototype,"step",2),r([l()],R.prototype,"autocapitalize",2),r([l()],R.prototype,"autocorrect",2),r([l()],R.prototype,"autocomplete",2),r([l({type:Boolean})],R.prototype,"autofocus",2),r([l()],R.prototype,"enterkeyhint",2),r([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],R.prototype,"spellcheck",2),r([l()],R.prototype,"inputmode",2),r([x("disabled",{waitUntilFirstUpdate:!0})],R.prototype,"handleDisabledChange",1),r([x("step",{waitUntilFirstUpdate:!0})],R.prototype,"handleStepChange",1),r([x("value",{waitUntilFirstUpdate:!0})],R.prototype,"handleValueChange",1),R.define("sl-input");var Vn=T`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,_s=class extends S{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],i=t.composedPath(),s=i.find(d=>{var c;return e.includes(((c=d?.getAttribute)==null?void 0:c.call(d,"role"))||"")});if(!s||i.find(d=>{var c;return((c=d?.getAttribute)==null?void 0:c.call(d,"role"))==="menu"})!==this)return;const n=s;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),i=this.getCurrentItem();let s=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?s++:t.key==="ArrowUp"?s--:t.key==="Home"?s=0:t.key==="End"&&(s=e.length-1),s<0&&(s=e.length-1),s>e.length-1&&(s=0),this.setCurrentItem(e[s]),e[s].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===t?"0":"-1")})}render(){return y`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};_s.styles=[O,Vn],r([k("slot")],_s.prototype,"defaultSlot",2),_s.define("sl-menu");var Bn=T`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;const ci=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const s of i)s._$AO?.(e,!1),ci(s,e);return!0},Mi=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},Mo=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Un(e)}};function Hn(t){this._$AN!==void 0?(Mi(this),this._$AM=t,Mo(this)):this._$AM=t}function Nn(t,e=!1,i=0){const s=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(s))for(let a=i;a<s.length;a++)ci(s[a],!1),Mi(s[a]);else s!=null&&(ci(s,!1),Mi(s));else ci(this,t)}const Un=t=>{t.type==Ut.CHILD&&(t._$AP??=Nn,t._$AQ??=Hn)};class Wn extends Ge{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,s){super._$AT(e,i,s),Mo(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(ci(this,e),Mi(this))}setValue(e){if(Js(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const qn=()=>new jn;class jn{}const xs=new WeakMap,Kn=Ye(class extends Wn{render(t){return K}update(t,[e]){const i=e!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),K}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let i=xs.get(e);i===void 0&&(i=new WeakMap,xs.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?xs.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Xn=class{constructor(t,e){this.popupRef=qn(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var s;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(s=i.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),s=i?.assignedElements({flatten:!0}).filter(u=>u.localName==="sl-menu")[0],o=getComputedStyle(this.host).direction==="rtl";if(!s)return;const{left:a,top:n,width:d,height:c}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?a+d:a}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?a+d:a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+c}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const s of e.assignedElements())if(i=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let s=1;s!==i.length;++s)i[s].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((o,a)=>{var n;const d=(n=e.get(a))!=null?n:new CSSUnitValue(0,"px"),u=(d instanceof CSSUnitValue?d:new CSSUnitValue(0,"px")).to("px");return o-u.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?y`
      <sl-popup
        ${Kn(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:y` <slot name="submenu" hidden></slot> `}},Ct=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new gt(this,"submenu"),this.submenuController=new Xn(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Pr(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return y`
      <div
        id="anchor"
        part="base"
        class=${L({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?y` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};Ct.styles=[O,Bn],Ct.dependencies={"sl-icon":j,"sl-popup":W,"sl-spinner":Qe},r([k("slot:not([name])")],Ct.prototype,"defaultSlot",2),r([k(".menu-item")],Ct.prototype,"menuItem",2),r([l()],Ct.prototype,"type",2),r([l({type:Boolean,reflect:!0})],Ct.prototype,"checked",2),r([l()],Ct.prototype,"value",2),r([l({type:Boolean,reflect:!0})],Ct.prototype,"loading",2),r([l({type:Boolean,reflect:!0})],Ct.prototype,"disabled",2),r([x("checked")],Ct.prototype,"handleCheckedChange",1),r([x("disabled")],Ct.prototype,"handleDisabledChange",1),r([x("type")],Ct.prototype,"handleTypeChange",1),Ct.define("sl-menu-item");var Yn=T`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,ye=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),i=this.localize.dir()==="rtl";t.preventDefault(),ai(this.base,{onMove:s=>{this.position=parseFloat(et(s/e*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const s=t.shiftKey?10:1;let o=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight")&&(o-=s),(e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft")&&(o+=s),t.key==="Home"&&(o=0),t.key==="End"&&(o=100),o=et(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const t=this.localize.dir()==="rtl";return y`
      <div
        part="base"
        id="image-comparer"
        class=${L({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${yt({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${yt({left:t?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};ye.styles=[O,Yn],ye.scopedElement={"sl-icon":j},r([k(".image-comparer")],ye.prototype,"base",2),r([k(".image-comparer__handle")],ye.prototype,"handle",2),r([l({type:Number,reflect:!0})],ye.prototype,"position",2),r([x("position",{waitUntilFirstUpdate:!0})],ye.prototype,"handlePositionChange",1),ye.define("sl-image-comparer");var Gn=T`
  :host {
    display: block;
  }
`,ks=new Map;function Qn(t,e="cors"){const i=ks.get(t);if(i!==void 0)return Promise.resolve(i);const s=fetch(t,{mode:e}).then(async o=>{const a={ok:o.ok,status:o.status,html:await o.text()};return ks.set(t,a),a});return ks.set(t,s),s}var Le=class extends S{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(i=>e.setAttribute(i.name,i.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await Qn(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(i=>this.executeScript(i)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return y`<slot></slot>`}};Le.styles=[O,Gn],r([l()],Le.prototype,"src",2),r([l()],Le.prototype,"mode",2),r([l({attribute:"allow-scripts",type:Boolean})],Le.prototype,"allowScripts",2),r([x("src")],Le.prototype,"handleSrcChange",1),Le.define("sl-include"),j.define("sl-icon"),rt.define("sl-icon-button");var Ri=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?t:e,s=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),o=i[s]+this.unit,a=parseFloat((this.value/Math.pow(1e3,s)).toPrecision(3));return this.localize.number(a,{style:"unit",unit:o,unitDisplay:this.display})}};r([l({type:Number})],Ri.prototype,"value",2),r([l()],Ri.prototype,"unit",2),r([l()],Ri.prototype,"display",2),Ri.define("sl-format-bytes");var $t=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return y`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};r([l()],$t.prototype,"date",2),r([l()],$t.prototype,"weekday",2),r([l()],$t.prototype,"era",2),r([l()],$t.prototype,"year",2),r([l()],$t.prototype,"month",2),r([l()],$t.prototype,"day",2),r([l()],$t.prototype,"hour",2),r([l()],$t.prototype,"minute",2),r([l()],$t.prototype,"second",2),r([l({attribute:"time-zone-name"})],$t.prototype,"timeZoneName",2),r([l({attribute:"time-zone"})],$t.prototype,"timeZone",2),r([l({attribute:"hour-format"})],$t.prototype,"hourFormat",2),$t.define("sl-format-date");var Ft=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};r([l({type:Number})],Ft.prototype,"value",2),r([l()],Ft.prototype,"type",2),r([l({attribute:"no-grouping",type:Boolean})],Ft.prototype,"noGrouping",2),r([l()],Ft.prototype,"currency",2),r([l({attribute:"currency-display"})],Ft.prototype,"currencyDisplay",2),r([l({attribute:"minimum-integer-digits",type:Number})],Ft.prototype,"minimumIntegerDigits",2),r([l({attribute:"minimum-fraction-digits",type:Number})],Ft.prototype,"minimumFractionDigits",2),r([l({attribute:"maximum-fraction-digits",type:Number})],Ft.prototype,"maximumFractionDigits",2),r([l({attribute:"minimum-significant-digits",type:Number})],Ft.prototype,"minimumSignificantDigits",2),r([l({attribute:"maximum-significant-digits",type:Number})],Ft.prototype,"maximumSignificantDigits",2),Ft.define("sl-format-number");var Zn=T`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Fi=class extends S{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Fi.styles=[O,Zn],r([l({type:Boolean,reflect:!0})],Fi.prototype,"vertical",2),r([x("vertical")],Fi.prototype,"handleVerticalChange",1),Fi.define("sl-divider");var Jn=T`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*Cs(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*lr(Cs(t.shadowRoot.activeElement))))}function Ro(){return[...Cs()].pop()}var Fo=new WeakMap;function Vo(t){let e=Fo.get(t);return e||(e=window.getComputedStyle(t,null),Fo.set(t,e)),e}function tl(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Vo(t);return e.visibility!=="hidden"&&e.display!=="none"}function el(t){const e=Vo(t),{overflowY:i,overflowX:s}=e;return i==="scroll"||s==="scroll"?!0:i!=="auto"||s!=="auto"?!1:t.scrollHeight>t.clientHeight&&i==="auto"||t.scrollWidth>t.clientWidth&&s==="auto"}function il(t){const e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const a=t.getRootNode(),n=`input[type='radio'][name="${t.getAttribute("name")}"]`,d=a.querySelector(`${n}:checked`);return d?d===t:a.querySelector(n)===t}return tl(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:el(t):!1}function sl(t){var e,i;const s=$s(t),o=(e=s[0])!=null?e:null,a=(i=s[s.length-1])!=null?i:null;return{start:o,end:a}}function ol(t,e){var i;return((i=t.getRootNode({composed:!0}))==null?void 0:i.host)!==e}function $s(t){const e=new WeakMap,i=[];function s(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||e.has(o))return;e.set(o,!0),!i.includes(o)&&il(o)&&i.push(o),o instanceof HTMLSlotElement&&ol(o,t)&&o.assignedElements({flatten:!0}).forEach(a=>{s(a)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&s(o.shadowRoot)}for(const a of o.children)s(a)}return s(t),i.sort((o,a)=>{const n=Number(o.getAttribute("tabindex"))||0;return(Number(a.getAttribute("tabindex"))||0)-n})}var di=[],Bo=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var i;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=Ro();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=$s(this.element);let a=o.findIndex(d=>d===s);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){a+n>=o.length?a=0:a+n<0?a=o.length-1:a+=n,this.previousFocus=this.currentFocus;const d=o[a];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||d&&this.possiblyHasTabbableChildren(d))return;e.preventDefault(),this.currentFocus=d,(i=this.currentFocus)==null||i.focus({preventScroll:!1});const c=[...Cs()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){di.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){di=di.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return di[di.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=$s(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],s=this.tabDirection==="forward"?e:i;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},Ss=t=>{var e;const{activeElement:i}=document;i&&t.contains(i)&&((e=document.activeElement)==null||e.blur())};function Ho(t){return t.charAt(0).toUpperCase()+t.slice(1)}var St=class extends S{constructor(){super(...arguments),this.hasSlotController=new gt(this,"footer"),this.localize=new H(this),this.modal=new Bo(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),oi(this)))}disconnectedCallback(){super.disconnectedCallback(),ri(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=X(this,"drawer.denyClose",{dir:this.localize.dir()});G(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),oi(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([tt(this.drawer),tt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=X(this,`drawer.show${Ho(this.placement)}`,{dir:this.localize.dir()}),i=X(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([G(this.panel,e.keyframes,e.options),G(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{Ss(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),ri(this)),await Promise.all([tt(this.drawer),tt(this.overlay)]);const t=X(this,`drawer.hide${Ho(this.placement)}`,{dir:this.localize.dir()}),e=X(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([G(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),G(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),oi(this)),this.open&&this.contained&&(this.modal.deactivate(),ri(this))}async show(){if(!this.open)return this.open=!0,vt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,vt(this,"sl-after-hide")}render(){return y`
      <div
        part="base"
        class=${L({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${z(this.noHeader?this.label:void 0)}
          aria-labelledby=${z(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":y`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};St.styles=[O,Jn],St.dependencies={"sl-icon-button":rt},r([k(".drawer")],St.prototype,"drawer",2),r([k(".drawer__panel")],St.prototype,"panel",2),r([k(".drawer__overlay")],St.prototype,"overlay",2),r([l({type:Boolean,reflect:!0})],St.prototype,"open",2),r([l({reflect:!0})],St.prototype,"label",2),r([l({reflect:!0})],St.prototype,"placement",2),r([l({type:Boolean,reflect:!0})],St.prototype,"contained",2),r([l({attribute:"no-header",type:Boolean,reflect:!0})],St.prototype,"noHeader",2),r([x("open",{waitUntilFirstUpdate:!0})],St.prototype,"handleOpenChange",1),r([x("contained",{waitUntilFirstUpdate:!0})],St.prototype,"handleNoModalChange",1),U("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),U("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),U("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),U("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),U("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),U("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),U("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),U("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),U("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),U("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),U("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),St.define("sl-drawer");var rl=T`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,ut=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}const i=(s,o)=>{if(!s)return null;const a=s.closest(o);if(a)return a;const n=s.getRootNode();return n instanceof ShadowRoot?i(n.host,o):null};setTimeout(()=>{var s;const o=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?Ro():document.activeElement;(!this.containingElement||i(o,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const i=e.getAllItems(),s=i[0],o=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(s),s.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(s=>sl(s).start);let i;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=e.button;break;default:i=e}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,vt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,vt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await tt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=X(this,"dropdown.show",{dir:this.localize.dir()});await G(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await tt(this);const{keyframes:t,options:e}=X(this,"dropdown.hide",{dir:this.localize.dir()});await G(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return y`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${z(this.sync?this.sync:void 0)}
        class=${L({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};ut.styles=[O,rl],ut.dependencies={"sl-popup":W},r([k(".dropdown")],ut.prototype,"popup",2),r([k(".dropdown__trigger")],ut.prototype,"trigger",2),r([k(".dropdown__panel")],ut.prototype,"panel",2),r([l({type:Boolean,reflect:!0})],ut.prototype,"open",2),r([l({reflect:!0})],ut.prototype,"placement",2),r([l({type:Boolean,reflect:!0})],ut.prototype,"disabled",2),r([l({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],ut.prototype,"stayOpenOnSelect",2),r([l({attribute:!1})],ut.prototype,"containingElement",2),r([l({type:Number})],ut.prototype,"distance",2),r([l({type:Number})],ut.prototype,"skidding",2),r([l({type:Boolean})],ut.prototype,"hoist",2),r([l({reflect:!0})],ut.prototype,"sync",2),r([x("open",{waitUntilFirstUpdate:!0})],ut.prototype,"handleOpenChange",1),U("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),U("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),ut.define("sl-dropdown");var al=T`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,lt=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),i=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let o=this.from,a="";i?[o,a]=this.from.trim().split("."):s&&([o,a]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(o):null;n?s?t=n.getAttribute(a)||"":i?t=n[a]||"":t=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),s=this.errorLabel||this.localize.term("error"),o=t==="success"?this.successIcon:this.errorIcon,a=X(this,"copy.in",{dir:"ltr"}),n=X(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?i:s,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,o.hidden=!1,await o.animate(a.keyframes,a.options).finished,setTimeout(async()=>{await o.animate(n.keyframes,n.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(a.keyframes,a.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return y`
      <sl-tooltip
        class=${L({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};lt.styles=[O,al],lt.dependencies={"sl-icon":j,"sl-tooltip":nt},r([k('slot[name="copy-icon"]')],lt.prototype,"copyIcon",2),r([k('slot[name="success-icon"]')],lt.prototype,"successIcon",2),r([k('slot[name="error-icon"]')],lt.prototype,"errorIcon",2),r([k("sl-tooltip")],lt.prototype,"tooltip",2),r([I()],lt.prototype,"isCopying",2),r([I()],lt.prototype,"status",2),r([l()],lt.prototype,"value",2),r([l()],lt.prototype,"from",2),r([l({type:Boolean,reflect:!0})],lt.prototype,"disabled",2),r([l({attribute:"copy-label"})],lt.prototype,"copyLabel",2),r([l({attribute:"success-label"})],lt.prototype,"successLabel",2),r([l({attribute:"error-label"})],lt.prototype,"errorLabel",2),r([l({attribute:"feedback-duration",type:Number})],lt.prototype,"feedbackDuration",2),r([l({attribute:"tooltip-placement"})],lt.prototype,"tooltipPlacement",2),r([l({type:Boolean})],lt.prototype,"hoist",2),U("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}}),U("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}}),lt.define("sl-copy-button");var nl=T`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Vt=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await tt(this.body);const{keyframes:e,options:i}=X(this,"details.show",{dir:this.localize.dir()});await G(this.body,xi(e,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await tt(this.body);const{keyframes:e,options:i}=X(this,"details.hide",{dir:this.localize.dir()});await G(this.body,xi(e,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,vt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,vt(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return y`
      <details
        part="base"
        class=${L({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Vt.styles=[O,nl],Vt.dependencies={"sl-icon":j},r([k(".details")],Vt.prototype,"details",2),r([k(".details__header")],Vt.prototype,"header",2),r([k(".details__body")],Vt.prototype,"body",2),r([k(".details__expand-icon-slot")],Vt.prototype,"expandIconSlot",2),r([l({type:Boolean,reflect:!0})],Vt.prototype,"open",2),r([l()],Vt.prototype,"summary",2),r([l({type:Boolean,reflect:!0})],Vt.prototype,"disabled",2),r([x("open",{waitUntilFirstUpdate:!0})],Vt.prototype,"handleOpenChange",1),U("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),U("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}}),Vt.define("sl-details");var ll=T`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Yt=class extends S{constructor(){super(...arguments),this.hasSlotController=new gt(this,"footer"),this.localize=new H(this),this.modal=new Bo(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),oi(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),ri(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=X(this,"dialog.denyClose",{dir:this.localize.dir()});G(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),oi(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([tt(this.dialog),tt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=X(this,"dialog.show",{dir:this.localize.dir()}),i=X(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([G(this.panel,e.keyframes,e.options),G(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{Ss(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([tt(this.dialog),tt(this.overlay)]);const t=X(this,"dialog.hide",{dir:this.localize.dir()}),e=X(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([G(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),G(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,ri(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,vt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,vt(this,"sl-after-hide")}render(){return y`
      <div
        part="base"
        class=${L({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${z(this.noHeader?this.label:void 0)}
          aria-labelledby=${z(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":y`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Yt.styles=[O,ll],Yt.dependencies={"sl-icon-button":rt},r([k(".dialog")],Yt.prototype,"dialog",2),r([k(".dialog__panel")],Yt.prototype,"panel",2),r([k(".dialog__overlay")],Yt.prototype,"overlay",2),r([l({type:Boolean,reflect:!0})],Yt.prototype,"open",2),r([l({reflect:!0})],Yt.prototype,"label",2),r([l({attribute:"no-header",type:Boolean,reflect:!0})],Yt.prototype,"noHeader",2),r([x("open",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleOpenChange",1),U("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),U("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),U("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),U("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),U("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Yt.define("sl-dialog"),ot.define("sl-checkbox");var cl=T`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,q=class extends S{constructor(){super(...arguments),this.formControlController=new Jt(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new gt(this,"[default]","prefix","suffix"),this.localize=new H(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:pi}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Li`a`:Li`button`;return ii`
      <${e}
        part="base"
        class=${L({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${z(t?void 0:this.disabled)}
        type=${z(t?void 0:this.type)}
        title=${this.title}
        name=${z(t?void 0:this.name)}
        value=${z(t?void 0:this.value)}
        href=${z(t&&!this.disabled?this.href:void 0)}
        target=${z(t?this.target:void 0)}
        download=${z(t?this.download:void 0)}
        rel=${z(t?this.rel:void 0)}
        role=${z(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?ii` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?ii`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};q.styles=[O,Oo],q.dependencies={"sl-icon":j,"sl-spinner":Qe},r([k(".button")],q.prototype,"button",2),r([I()],q.prototype,"hasFocus",2),r([I()],q.prototype,"invalid",2),r([l()],q.prototype,"title",2),r([l({reflect:!0})],q.prototype,"variant",2),r([l({reflect:!0})],q.prototype,"size",2),r([l({type:Boolean,reflect:!0})],q.prototype,"caret",2),r([l({type:Boolean,reflect:!0})],q.prototype,"disabled",2),r([l({type:Boolean,reflect:!0})],q.prototype,"loading",2),r([l({type:Boolean,reflect:!0})],q.prototype,"outline",2),r([l({type:Boolean,reflect:!0})],q.prototype,"pill",2),r([l({type:Boolean,reflect:!0})],q.prototype,"circle",2),r([l()],q.prototype,"type",2),r([l()],q.prototype,"name",2),r([l()],q.prototype,"value",2),r([l()],q.prototype,"href",2),r([l()],q.prototype,"target",2),r([l()],q.prototype,"rel",2),r([l()],q.prototype,"download",2),r([l()],q.prototype,"form",2),r([l({attribute:"formaction"})],q.prototype,"formAction",2),r([l({attribute:"formenctype"})],q.prototype,"formEnctype",2),r([l({attribute:"formmethod"})],q.prototype,"formMethod",2),r([l({attribute:"formnovalidate",type:Boolean})],q.prototype,"formNoValidate",2),r([l({attribute:"formtarget"})],q.prototype,"formTarget",2),r([x("disabled",{waitUntilFirstUpdate:!0})],q.prototype,"handleDisabledChange",1);function pt(t,e){dl(t)&&(t="100%");const i=hl(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Vi(t){return Math.min(1,Math.max(0,t))}function dl(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function hl(t){return typeof t=="string"&&t.indexOf("%")!==-1}function No(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Bi(t){return Number(t)<=1?`${Number(t)*100}%`:t}function we(t){return t.length===1?"0"+t:String(t)}function ul(t,e,i){return{r:pt(t,255)*255,g:pt(e,255)*255,b:pt(i,255)*255}}function Uo(t,e,i){t=pt(t,255),e=pt(e,255),i=pt(i,255);const s=Math.max(t,e,i),o=Math.min(t,e,i);let a=0,n=0;const d=(s+o)/2;if(s===o)n=0,a=0;else{const c=s-o;switch(n=d>.5?c/(2-s-o):c/(s+o),s){case t:a=(e-i)/c+(e<i?6:0);break;case e:a=(i-t)/c+2;break;case i:a=(t-e)/c+4;break}a/=6}return{h:a,s:n,l:d}}function zs(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*(6*i):i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function pl(t,e,i){let s,o,a;if(t=pt(t,360),e=pt(e,100),i=pt(i,100),e===0)o=i,a=i,s=i;else{const n=i<.5?i*(1+e):i+e-i*e,d=2*i-n;s=zs(d,n,t+1/3),o=zs(d,n,t),a=zs(d,n,t-1/3)}return{r:s*255,g:o*255,b:a*255}}function Wo(t,e,i){t=pt(t,255),e=pt(e,255),i=pt(i,255);const s=Math.max(t,e,i),o=Math.min(t,e,i);let a=0;const n=s,d=s-o,c=s===0?0:d/s;if(s===o)a=0;else{switch(s){case t:a=(e-i)/d+(e<i?6:0);break;case e:a=(i-t)/d+2;break;case i:a=(t-e)/d+4;break}a/=6}return{h:a,s:c,v:n}}function fl(t,e,i){t=pt(t,360)*6,e=pt(e,100),i=pt(i,100);const s=Math.floor(t),o=t-s,a=i*(1-e),n=i*(1-o*e),d=i*(1-(1-o)*e),c=s%6,u=[i,n,a,a,d,i][c],f=[d,i,i,n,a,a][c],h=[a,a,d,i,i,n][c];return{r:u*255,g:f*255,b:h*255}}function qo(t,e,i,s){const o=[we(Math.round(t).toString(16)),we(Math.round(e).toString(16)),we(Math.round(i).toString(16))];return s&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function ml(t,e,i,s,o){const a=[we(Math.round(t).toString(16)),we(Math.round(e).toString(16)),we(Math.round(i).toString(16)),we(gl(s))];return o&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function bl(t,e,i,s){const o=t/100,a=e/100,n=i/100,d=s/100,c=255*(1-o)*(1-d),u=255*(1-a)*(1-d),f=255*(1-n)*(1-d);return{r:c,g:u,b:f}}function jo(t,e,i){let s=1-t/255,o=1-e/255,a=1-i/255,n=Math.min(s,o,a);return n===1?(s=0,o=0,a=0):(s=(s-n)/(1-n)*100,o=(o-n)/(1-n)*100,a=(a-n)/(1-n)*100),n*=100,{c:Math.round(s),m:Math.round(o),y:Math.round(a),k:Math.round(n)}}function gl(t){return Math.round(parseFloat(t)*255).toString(16)}function Ko(t){return zt(t)/255}function zt(t){return parseInt(t,16)}function vl(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const As={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function yl(t){let e={r:0,g:0,b:0},i=1,s=null,o=null,a=null,n=!1,d=!1;return typeof t=="string"&&(t=wl(t)),typeof t=="object"&&(At(t.r)&&At(t.g)&&At(t.b)?(e=ul(t.r,t.g,t.b),n=!0,d=String(t.r).substr(-1)==="%"?"prgb":"rgb"):At(t.h)&&At(t.s)&&At(t.v)?(s=Bi(t.s),o=Bi(t.v),e=fl(t.h,s,o),n=!0,d="hsv"):At(t.h)&&At(t.s)&&At(t.l)?(s=Bi(t.s),a=Bi(t.l),e=pl(t.h,s,a),n=!0,d="hsl"):At(t.c)&&At(t.m)&&At(t.y)&&At(t.k)&&(e=bl(t.c,t.m,t.y,t.k),n=!0,d="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=No(i),{ok:n,format:t.format||d,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}const ae="(?:"+"[-\\+]?\\d*\\.\\d+%?"+")|(?:"+"[-\\+]?\\d+%?"+")",Es="[\\s|\\(]+("+ae+")[,|\\s]+("+ae+")[,|\\s]+("+ae+")\\s*\\)?",Hi="[\\s|\\(]+("+ae+")[,|\\s]+("+ae+")[,|\\s]+("+ae+")[,|\\s]+("+ae+")\\s*\\)?",It={CSS_UNIT:new RegExp(ae),rgb:new RegExp("rgb"+Es),rgba:new RegExp("rgba"+Hi),hsl:new RegExp("hsl"+Es),hsla:new RegExp("hsla"+Hi),hsv:new RegExp("hsv"+Es),hsva:new RegExp("hsva"+Hi),cmyk:new RegExp("cmyk"+Hi),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function wl(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(As[t])t=As[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=It.rgb.exec(t);return i?{r:i[1],g:i[2],b:i[3]}:(i=It.rgba.exec(t),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=It.hsl.exec(t),i?{h:i[1],s:i[2],l:i[3]}:(i=It.hsla.exec(t),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=It.hsv.exec(t),i?{h:i[1],s:i[2],v:i[3]}:(i=It.hsva.exec(t),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=It.cmyk.exec(t),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=It.hex8.exec(t),i?{r:zt(i[1]),g:zt(i[2]),b:zt(i[3]),a:Ko(i[4]),format:e?"name":"hex8"}:(i=It.hex6.exec(t),i?{r:zt(i[1]),g:zt(i[2]),b:zt(i[3]),format:e?"name":"hex"}:(i=It.hex4.exec(t),i?{r:zt(i[1]+i[1]),g:zt(i[2]+i[2]),b:zt(i[3]+i[3]),a:Ko(i[4]+i[4]),format:e?"name":"hex8"}:(i=It.hex3.exec(t),i?{r:zt(i[1]+i[1]),g:zt(i[2]+i[2]),b:zt(i[3]+i[3]),format:e?"name":"hex"}:!1))))))))))}function At(t){return typeof t=="number"?!Number.isNaN(t):It.CSS_UNIT.test(t)}class Z{constructor(e="",i={}){if(e instanceof Z)return e;typeof e=="number"&&(e=vl(e)),this.originalInput=e;const s=yl(e);this.originalInput=e,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??s.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let i,s,o;const a=e.r/255,n=e.g/255,d=e.b/255;return a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),d<=.03928?o=d/12.92:o=Math.pow((d+.055)/1.055,2.4),.2126*i+.7152*s+.0722*o}getAlpha(){return this.a}setAlpha(e){return this.a=No(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=Wo(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Wo(this.r,this.g,this.b),i=Math.round(e.h*360),s=Math.round(e.s*100),o=Math.round(e.v*100);return this.a===1?`hsv(${i}, ${s}%, ${o}%)`:`hsva(${i}, ${s}%, ${o}%, ${this.roundA})`}toHsl(){const e=Uo(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=Uo(this.r,this.g,this.b),i=Math.round(e.h*360),s=Math.round(e.s*100),o=Math.round(e.l*100);return this.a===1?`hsl(${i}, ${s}%, ${o}%)`:`hsla(${i}, ${s}%, ${o}%, ${this.roundA})`}toHex(e=!1){return qo(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return ml(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),i=Math.round(this.g),s=Math.round(this.b);return this.a===1?`rgb(${e}, ${i}, ${s})`:`rgba(${e}, ${i}, ${s}, ${this.roundA})`}toPercentageRgb(){const e=i=>`${Math.round(pt(i,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=i=>Math.round(pt(i,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...jo(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:i,y:s,k:o}=jo(this.r,this.g,this.b);return`cmyk(${e}, ${i}, ${s}, ${o})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+qo(this.r,this.g,this.b,!1);for(const[i,s]of Object.entries(As))if(e===s)return i;return!1}toString(e){const i=!!e;e=e??this.format;let s=!1;const o=this.a<1&&this.a>=0;return!i&&o&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(s=this.toRgbString()),e==="prgb"&&(s=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(s=this.toHexString()),e==="hex3"&&(s=this.toHexString(!0)),e==="hex4"&&(s=this.toHex8String(!0)),e==="hex8"&&(s=this.toHex8String()),e==="name"&&(s=this.toName()),e==="hsl"&&(s=this.toHslString()),e==="hsv"&&(s=this.toHsvString()),e==="cmyk"&&(s=this.toCmykString()),s||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new Z(this.toString())}lighten(e=10){const i=this.toHsl();return i.l+=e/100,i.l=Vi(i.l),new Z(i)}brighten(e=10){const i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(e/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(e/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(e/100)))),new Z(i)}darken(e=10){const i=this.toHsl();return i.l-=e/100,i.l=Vi(i.l),new Z(i)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const i=this.toHsl();return i.s-=e/100,i.s=Vi(i.s),new Z(i)}saturate(e=10){const i=this.toHsl();return i.s+=e/100,i.s=Vi(i.s),new Z(i)}greyscale(){return this.desaturate(100)}spin(e){const i=this.toHsl(),s=(i.h+e)%360;return i.h=s<0?360+s:s,new Z(i)}mix(e,i=50){const s=this.toRgb(),o=new Z(e).toRgb(),a=i/100,n={r:(o.r-s.r)*a+s.r,g:(o.g-s.g)*a+s.g,b:(o.b-s.b)*a+s.b,a:(o.a-s.a)*a+s.a};return new Z(n)}analogous(e=6,i=30){const s=this.toHsl(),o=360/i,a=[this];for(s.h=(s.h-(o*e>>1)+720)%360;--e;)s.h=(s.h+o)%360,a.push(new Z(s));return a}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new Z(e)}monochromatic(e=6){const i=this.toHsv(),{h:s}=i,{s:o}=i;let{v:a}=i;const n=[],d=1/e;for(;e--;)n.push(new Z({h:s,s:o,v:a})),a=(a+d)%1;return n}splitcomplement(){const e=this.toHsl(),{h:i}=e;return[this,new Z({h:(i+72)%360,s:e.s,l:e.l}),new Z({h:(i+216)%360,s:e.s,l:e.l})]}onBackground(e){const i=this.toRgb(),s=new Z(e).toRgb(),o=i.a+s.a*(1-i.a);return new Z({r:(i.r*i.a+s.r*s.a*(1-i.a))/o,g:(i.g*i.a+s.g*s.a*(1-i.a))/o,b:(i.b*i.a+s.b*s.a*(1-i.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const i=this.toHsl(),{h:s}=i,o=[this],a=360/e;for(let n=1;n<e;n++)o.push(new Z({h:(s+n*a)%360,s:i.s,l:i.l}));return o}equals(e){const i=new Z(e);return this.format==="cmyk"||i.format==="cmyk"?this.toCmykString()===i.toCmykString():this.toRgbString()===i.toRgbString()}}var Xo="EyeDropper"in window,V=class extends S{constructor(){super(),this.formControlController=new Jt(this),this.isSafeValue=!1,this.localize=new H(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=e.querySelector(".color-picker__slider-handle"),{width:s}=e.getBoundingClientRect();let o=this.value,a=this.value;i.focus(),t.preventDefault(),ai(e,{onMove:n=>{this.alpha=et(n/s*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=e.querySelector(".color-picker__slider-handle"),{width:s}=e.getBoundingClientRect();let o=this.value,a=this.value;i.focus(),t.preventDefault(),ai(e,{onMove:n=>{this.hue=et(n/s*360,0,360),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),i=e.querySelector(".color-picker__grid-handle"),{width:s,height:o}=e.getBoundingClientRect();let a=this.value,n=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,ai(e,{onMove:(d,c)=>{this.saturation=et(d/s*100,0,100),this.brightness=et(100-c/o*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==a&&(a=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=et(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=et(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=et(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=et(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=et(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=et(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=et(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=et(this.brightness-e,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new Z(t);if(!e.isValid)return null;const i=e.toHsl(),s={h:i.h,s:i.s*100,l:i.l*100,a:i.a},o=e.toRgb(),a=e.toHexString(),n=e.toHex8String(),d=e.toHsv(),c={h:d.h,s:d.s*100,v:d.v*100,a:d.a};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(a),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Xo)return;new EyeDropper().open().then(e=>{const i=this.value;this.setColor(e.sRGBHex),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,i,s=100){const o=new Z(`hsva(${t}, ${e}%, ${i}%, ${s/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(e);i!==null?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),s=y`
      <div
        part="base"
        class=${L({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?y`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${yt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${L({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${yt({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${z(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${yt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${z(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?y`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${yt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${yt({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${z(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${yt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":y`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Xo?y`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${i.length>0?y`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(o=>{const a=this.parseColor(o);return a?y`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${z(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(a.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${yt({backgroundColor:a.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?s:y`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${L({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${yt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${s}
      </sl-dropdown>
    `}};V.styles=[O,cl],V.dependencies={"sl-button-group":ve,"sl-button":q,"sl-dropdown":ut,"sl-icon":j,"sl-input":R,"sl-visually-hidden":bs},r([k('[part~="base"]')],V.prototype,"base",2),r([k('[part~="input"]')],V.prototype,"input",2),r([k(".color-dropdown")],V.prototype,"dropdown",2),r([k('[part~="preview"]')],V.prototype,"previewButton",2),r([k('[part~="trigger"]')],V.prototype,"trigger",2),r([I()],V.prototype,"hasFocus",2),r([I()],V.prototype,"isDraggingGridHandle",2),r([I()],V.prototype,"isEmpty",2),r([I()],V.prototype,"inputValue",2),r([I()],V.prototype,"hue",2),r([I()],V.prototype,"saturation",2),r([I()],V.prototype,"brightness",2),r([I()],V.prototype,"alpha",2),r([l()],V.prototype,"value",2),r([$e()],V.prototype,"defaultValue",2),r([l()],V.prototype,"label",2),r([l()],V.prototype,"format",2),r([l({type:Boolean,reflect:!0})],V.prototype,"inline",2),r([l({reflect:!0})],V.prototype,"size",2),r([l({attribute:"no-format-toggle",type:Boolean})],V.prototype,"noFormatToggle",2),r([l()],V.prototype,"name",2),r([l({type:Boolean,reflect:!0})],V.prototype,"disabled",2),r([l({type:Boolean})],V.prototype,"hoist",2),r([l({type:Boolean})],V.prototype,"opacity",2),r([l({type:Boolean})],V.prototype,"uppercase",2),r([l()],V.prototype,"swatches",2),r([l({reflect:!0})],V.prototype,"form",2),r([l({type:Boolean,reflect:!0})],V.prototype,"required",2),r([Ke({passive:!1})],V.prototype,"handleTouchMove",1),r([x("format",{waitUntilFirstUpdate:!0})],V.prototype,"handleFormatChange",1),r([x("opacity",{waitUntilFirstUpdate:!0})],V.prototype,"handleOpacityChange",1),r([x("value")],V.prototype,"handleValueChange",1),V.define("sl-color-picker");var _l=T`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Yo=class extends S{constructor(){super(...arguments),this.hasSlotController=new gt(this,"footer","header","image")}render(){return y`
      <div
        part="base"
        class=${L({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Yo.styles=[O,_l],Yo.define("sl-card");var xl=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},kl=T`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;function*Cl(t,e){if(t!==void 0){let i=0;for(const s of t)yield e(s,i++)}}function*$l(t,e,i=1){const s=e===void 0?0:t;e??=t;for(let o=s;i>0?o<e:e<o;o+=i)yield o}var J=class extends S{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new xl(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new H(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const s=t.scrollLeft,o=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==s||i!==o)&&(t.scrollTo({left:s,top:o,behavior:rs()?"auto":"smooth"}),await vt(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(i=>[...i.addedNodes,...i.removedNodes].some(s=>this.isCarouselItem(s)&&!s.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:i,loop:s}=this,o=s?t/i:(t-e)/i+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),i=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+i*i)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,i=this.localize.dir()==="rtl",s=e.closest('[part~="pagination-item"]')!==null,o=t.key==="ArrowDown"||!i&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft",a=t.key==="ArrowUp"||!i&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight";t.preventDefault(),a&&this.previous(),o&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),s&&this.updateComplete.then(()=>{var n;const d=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');d&&d.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const d of e){const c=d.target;c.toggleAttribute("inert",!d.isIntersecting),c.classList.toggle("--in-view",d.isIntersecting),c.setAttribute("aria-hidden",d.isIntersecting?"false":"true")}const i=e.find(d=>d.isIntersecting);if(!i)return;const s=this.getSlides({excludeClones:!1}),o=this.getSlides().length,a=s.indexOf(i.target),n=this.loop?a-this.slidesPerPage:a;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+o)%o,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone")){const d=Number(i.target.getAttribute("data-clone"));this.goToSlide(d,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("role","group"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),this.pagination&&(t.setAttribute("id",`slide-${e+1}`),t.setAttribute("role","tabpanel"),t.removeAttribute("aria-label"),t.setAttribute("aria-labelledby",`tab-${e+1}`)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,i=t.slice(-e),s=t.slice(0,e);i.reverse().forEach((o,a)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(t.length-a-1)),this.prepend(n)}),s.forEach((o,a)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(a)),this.append(n)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,i)=>{e.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((i,s)=>{(s+e)%e===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:i,loop:s}=this,o=this.getSlides(),a=this.getSlides({excludeClones:!1});if(!o.length)return;const n=s?(t+o.length)%o.length:et(t,0,o.length-i);this.activeSlide=n;const d=this.localize.dir()==="rtl",c=et(t+(s?i:0)+(d?i-1:0),0,a.length-1),u=a[c];this.scrollToSlide(u,rs()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const i=this.scrollContainer,s=i.getBoundingClientRect(),o=t.getBoundingClientRect(),a=o.left-s.left,n=o.top-s.top;a||n?(this.pendingSlideChange=!0,i.scrollTo({left:a+i.scrollLeft,top:n+i.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this,i=this.getPageCount(),s=this.getCurrentPage(),o=this.canScrollPrev(),a=this.canScrollNext(),n=this.localize.dir()==="ltr";return y`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${L({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?y`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${L({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${L({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!a})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${a?"false":"true"}"
                  @click=${a?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?y`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${Cl($l(i),d=>{const c=d===s;return y`
                    <button
                      part="pagination-item ${c?"pagination-item--active":""}"
                      class="${L({"carousel__pagination-item":!0,"carousel__pagination-item--active":c})}"
                      role="tab"
                      id="tab-${d+1}"
                      aria-controls="slide-${d+1}"
                      aria-selected="${c?"true":"false"}"
                      aria-label="${c?this.localize.term("slideNum",d+1):this.localize.term("goToSlide",d+1,i)}"
                      tabindex=${c?"0":"-1"}
                      @click=${()=>this.goToSlide(d*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};J.styles=[O,kl],J.dependencies={"sl-icon":j},r([l({type:Boolean,reflect:!0})],J.prototype,"loop",2),r([l({type:Boolean,reflect:!0})],J.prototype,"navigation",2),r([l({type:Boolean,reflect:!0})],J.prototype,"pagination",2),r([l({type:Boolean,reflect:!0})],J.prototype,"autoplay",2),r([l({type:Number,attribute:"autoplay-interval"})],J.prototype,"autoplayInterval",2),r([l({type:Number,attribute:"slides-per-page"})],J.prototype,"slidesPerPage",2),r([l({type:Number,attribute:"slides-per-move"})],J.prototype,"slidesPerMove",2),r([l()],J.prototype,"orientation",2),r([l({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],J.prototype,"mouseDragging",2),r([k(".carousel__slides")],J.prototype,"scrollContainer",2),r([k(".carousel__pagination")],J.prototype,"paginationContainer",2),r([I()],J.prototype,"activeSlide",2),r([I()],J.prototype,"scrolling",2),r([I()],J.prototype,"dragging",2),r([Ke({passive:!0})],J.prototype,"handleScroll",1),r([x("loop",{waitUntilFirstUpdate:!0}),x("slidesPerPage",{waitUntilFirstUpdate:!0})],J.prototype,"initializeSlides",1),r([x("activeSlide")],J.prototype,"handleSlideChange",1),r([x("slidesPerMove")],J.prototype,"updateSlidesSnap",1),r([x("autoplay")],J.prototype,"handleAutoplayChange",1),J.define("sl-carousel");var Sl=(t,e)=>{let i=0;return function(...s){window.clearTimeout(i),i=window.setTimeout(()=>{t.call(this,...s)},e)}},Go=(t,e,i)=>{const s=t[e];t[e]=function(...o){s.call(this,...o),i.call(this,s,...o)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,i=new WeakMap,s=a=>{for(const n of a.changedTouches)e.add(n.identifier)},o=a=>{for(const n of a.changedTouches)e.delete(n.identifier)};document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),Go(EventTarget.prototype,"addEventListener",function(a,n){if(n!=="scrollend")return;const d=Sl(()=>{e.size?d():this.dispatchEvent(new Event("scrollend"))},100);a.call(this,"scroll",d,{passive:!0}),i.set(this,d)}),Go(EventTarget.prototype,"removeEventListener",function(a,n){if(n!=="scrollend")return;const d=i.get(this);d&&a.call(this,"scroll",d,{passive:!0})})}})();var zl=T`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Qo=class extends S{connectedCallback(){super.connectedCallback()}render(){return y` <slot></slot> `}};Qo.styles=[O,zl],Qo.define("sl-carousel-item");var Al=T`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,ne=class extends S{constructor(){super(...arguments),this.hasSlotController=new gt(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return y`
      <div
        part="base"
        class=${L({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?y`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${z(this.target?this.target:void 0)}"
                rel=${z(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?y`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?y`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};ne.styles=[O,Al],r([k("slot:not([name])")],ne.prototype,"defaultSlot",2),r([I()],ne.prototype,"renderType",2),r([l()],ne.prototype,"href",2),r([l()],ne.prototype,"target",2),r([l()],ne.prototype,"rel",2),r([x("href",{waitUntilFirstUpdate:!0})],ne.prototype,"hrefChanged",1),ne.define("sl-breadcrumb-item"),ve.define("sl-button-group");var El=T`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Gt=class extends S{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=y`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=y``;return this.initials?e=y`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=y`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,y`
      <div
        part="base"
        class=${L({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};Gt.styles=[O,El],Gt.dependencies={"sl-icon":j},r([I()],Gt.prototype,"hasError",2),r([l()],Gt.prototype,"image",2),r([l()],Gt.prototype,"label",2),r([l()],Gt.prototype,"initials",2),r([l()],Gt.prototype,"loading",2),r([l({reflect:!0})],Gt.prototype,"shape",2),r([x("image")],Gt.prototype,"handleImageChange",1),Gt.define("sl-avatar");var Tl=T`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,De=class extends S{constructor(){super(...arguments),this.localize=new H(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,i)=>{const s=e.querySelector('[slot="separator"]');s===null?e.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),i===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),y`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};De.styles=[O,Tl],De.dependencies={"sl-icon":j},r([k("slot")],De.prototype,"defaultSlot",2),r([k('slot[name="separator"]')],De.prototype,"separatorSlot",2),r([l()],De.prototype,"label",2),De.define("sl-breadcrumb"),q.define("sl-button");var Il=T`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,Bt=class extends S{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:i}=this.animatedImage;t.width=e,t.height=i,t.getContext("2d").drawImage(this.animatedImage,0,0,e,i),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return y`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?y`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Bt.styles=[O,Il],Bt.dependencies={"sl-icon":j},r([k(".animated-image__animated")],Bt.prototype,"animatedImage",2),r([I()],Bt.prototype,"frozenFrame",2),r([I()],Bt.prototype,"isLoaded",2),r([l()],Bt.prototype,"src",2),r([l()],Bt.prototype,"alt",2),r([l({type:Boolean,reflect:!0})],Bt.prototype,"play",2),r([x("play",{waitUntilFirstUpdate:!0})],Bt.prototype,"handlePlayChange",1),r([x("src")],Bt.prototype,"handleSrcChange",1),Bt.define("sl-animated-image");var Ol=T`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,hi=class extends S{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return y`
      <span
        part="base"
        class=${L({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};hi.styles=[O,Ol],r([l({reflect:!0})],hi.prototype,"variant",2),r([l({type:Boolean,reflect:!0})],hi.prototype,"pill",2),r([l({type:Boolean,reflect:!0})],hi.prototype,"pulse",2),hi.define("sl-badge");var Ll=T`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,Et=class _e extends S{constructor(){super(...arguments),this.hasSlotController=new gt(this,"icon","suffix"),this.localize=new H(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,i="100%",s="0";this.countdownAnimation=e.animate([{width:i},{width:s}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await tt(this.base),this.base.hidden=!1;const{keyframes:e,options:i}=X(this,"alert.show",{dir:this.localize.dir()});await G(this.base,e,i),this.emit("sl-after-show")}else{Ss(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await tt(this.base);const{keyframes:e,options:i}=X(this,"alert.hide",{dir:this.localize.dir()});await G(this.base,e,i),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,vt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,vt(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),_e.toastStack.parentElement===null&&document.body.append(_e.toastStack),_e.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{_e.toastStack.removeChild(this),e(),_e.toastStack.querySelector("sl-alert")===null&&_e.toastStack.remove()},{once:!0})})}render(){return y`
      <div
        part="base"
        class=${L({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?y`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?y`
              <div
                class=${L({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Et.styles=[O,Ll],Et.dependencies={"sl-icon-button":rt},r([k('[part~="base"]')],Et.prototype,"base",2),r([k(".alert__countdown-elapsed")],Et.prototype,"countdownElement",2),r([l({type:Boolean,reflect:!0})],Et.prototype,"open",2),r([l({type:Boolean,reflect:!0})],Et.prototype,"closable",2),r([l({reflect:!0})],Et.prototype,"variant",2),r([l({type:Number})],Et.prototype,"duration",2),r([l({type:String,reflect:!0})],Et.prototype,"countdown",2),r([I()],Et.prototype,"remainingTime",2),r([x("open",{waitUntilFirstUpdate:!0})],Et.prototype,"handleOpenChange",1),r([x("duration")],Et.prototype,"handleDurationChange",1);var Dl=Et;U("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),U("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),Dl.define("sl-alert");const Pl=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Ml=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Rl=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Fl=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Vl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Bl=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Hl=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Nl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ul=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Wl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ql=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],jl=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Kl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Xl=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Yl=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Gl=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ql=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Zl=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Jl=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],tc=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],ec=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],ic=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],sc=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],oc=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],rc=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ac=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],nc=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],lc=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],cc=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],dc=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],hc=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],uc=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],pc=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fc=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],mc=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],bc=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],gc=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],vc=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],yc=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],wc=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_c=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],xc=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],kc=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Cc=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],$c=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Sc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],zc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Ac=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Ec=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],Tc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Ic=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Oc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Lc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Dc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Pc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Mc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Rc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Fc=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Vc=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Bc=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Hc=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Nc=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Uc=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Wc=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],qc=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],jc=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Kc=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Xc=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Yc=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Gc=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Qc=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Zc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Jc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],td=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],ed=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],id=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],sd=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],od=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],rd=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ad=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],nd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],ld=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],cd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],dd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],hd=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],ud=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],pd=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],md=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],bd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],gd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],vd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],yd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],wd=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],_d=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],xd=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],kd=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Cd=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Zo={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},$d=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Xl,backInLeft:Yl,backInRight:Gl,backInUp:Ql,backOutDown:Zl,backOutLeft:Jl,backOutRight:tc,backOutUp:ec,bounce:Pl,bounceIn:ic,bounceInDown:sc,bounceInLeft:oc,bounceInRight:rc,bounceInUp:ac,bounceOut:nc,bounceOutDown:lc,bounceOutLeft:cc,bounceOutRight:dc,bounceOutUp:hc,easings:Zo,fadeIn:uc,fadeInBottomLeft:pc,fadeInBottomRight:fc,fadeInDown:mc,fadeInDownBig:bc,fadeInLeft:gc,fadeInLeftBig:vc,fadeInRight:yc,fadeInRightBig:wc,fadeInTopLeft:_c,fadeInTopRight:xc,fadeInUp:kc,fadeInUpBig:Cc,fadeOut:$c,fadeOutBottomLeft:Sc,fadeOutBottomRight:zc,fadeOutDown:Ac,fadeOutDownBig:Ec,fadeOutLeft:Tc,fadeOutLeftBig:Ic,fadeOutRight:Oc,fadeOutRightBig:Lc,fadeOutTopLeft:Dc,fadeOutTopRight:Pc,fadeOutUp:Mc,fadeOutUpBig:Rc,flash:Ml,flip:Fc,flipInX:Vc,flipInY:Bc,flipOutX:Hc,flipOutY:Nc,headShake:Rl,heartBeat:Fl,hinge:hd,jackInTheBox:ud,jello:Vl,lightSpeedInLeft:Uc,lightSpeedInRight:Wc,lightSpeedOutLeft:qc,lightSpeedOutRight:jc,pulse:Bl,rollIn:pd,rollOut:fd,rotateIn:Kc,rotateInDownLeft:Xc,rotateInDownRight:Yc,rotateInUpLeft:Gc,rotateInUpRight:Qc,rotateOut:Zc,rotateOutDownLeft:Jc,rotateOutDownRight:td,rotateOutUpLeft:ed,rotateOutUpRight:id,rubberBand:Hl,shake:Nl,shakeX:Ul,shakeY:Wl,slideInDown:sd,slideInLeft:od,slideInRight:rd,slideInUp:ad,slideOutDown:nd,slideOutLeft:ld,slideOutRight:cd,slideOutUp:dd,swing:ql,tada:jl,wobble:Kl,zoomIn:md,zoomInDown:bd,zoomInLeft:gd,zoomInRight:vd,zoomInUp:yd,zoomOut:wd,zoomOutDown:_d,zoomOutLeft:xd,zoomOutRight:kd,zoomOutUp:Cd},Symbol.toStringTag,{value:"Module"}));var Sd=T`
  :host {
    display: contents;
  }
`,ct=class extends S{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const i=(t=Zo[this.easing])!=null?t:this.easing,s=(e=this.keyframes)!=null?e:$d[this.name],a=(await this.defaultSlot).assignedElements()[0];return!a||!s?!1:(this.destroyAnimation(),this.animation=a.animate(s,{delay:this.delay,direction:this.direction,duration:this.duration,easing:i,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return y` <slot @slotchange=${this.handleSlotChange}></slot> `}};ct.styles=[O,Sd],r([Xr("slot")],ct.prototype,"defaultSlot",2),r([l()],ct.prototype,"name",2),r([l({type:Boolean,reflect:!0})],ct.prototype,"play",2),r([l({type:Number})],ct.prototype,"delay",2),r([l()],ct.prototype,"direction",2),r([l({type:Number})],ct.prototype,"duration",2),r([l()],ct.prototype,"easing",2),r([l({attribute:"end-delay",type:Number})],ct.prototype,"endDelay",2),r([l()],ct.prototype,"fill",2),r([l({type:Number})],ct.prototype,"iterations",2),r([l({attribute:"iteration-start",type:Number})],ct.prototype,"iterationStart",2),r([l({attribute:!1})],ct.prototype,"keyframes",2),r([l({attribute:"playback-rate",type:Number})],ct.prototype,"playbackRate",2),r([x(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],ct.prototype,"handleAnimationChange",1),r([x("play")],ct.prototype,"handlePlayChange",1),r([x("playbackRate")],ct.prototype,"handlePlaybackRateChange",1),ct.define("sl-animation"),Ji("/shoelace/"),Ur("vscode",{resolver:t=>`/icons/vscode/file_type_${t}.svg`})}));
