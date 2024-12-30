import{r as F,R as v,P as y,c as W,j as e,e as q,g as L,h as T,i as H,k as R,l as G,m as K,n as b,u as Q,o as V,d as J,C as X,B as Y,q as Z,s as ee,t as te,v as se}from"./index-9246ef46.js";import{r as ne}from"./logs-6868445f.js";import{S as C}from"./Select-c1fd0ede.js";import{T as E}from"./Toggle-65c7735c.js";import{I as ae,S as oe}from"./Input-d4794ad0.js";import{u as le}from"./useMutation-22104842.js";function _(){return _=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},_.apply(this,arguments)}function re(t,o){if(t==null)return{};var a=ie(t,o),n,l;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],!(o.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function ie(t,o){if(t==null)return{};var a={},n=Object.keys(t),l,r;for(r=0;r<n.length;r++)l=n[r],!(o.indexOf(l)>=0)&&(a[l]=t[l]);return a}var w=F.forwardRef(function(t,o){var a=t.color,n=a===void 0?"currentColor":a,l=t.size,r=l===void 0?24:l,u=re(t,["color","size"]);return v.createElement("svg",_({ref:o,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),v.createElement("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),v.createElement("polyline",{points:"16 17 21 12 16 7"}),v.createElement("line",{x1:"21",y1:"12",x2:"9",y2:"12"}))});w.propTypes={color:y.string,size:y.oneOfType([y.string,y.number])};w.displayName="LogOut";const ce=w,de="_root_1s1gc_1",ue="_section_1s1gc_2",pe="_item_1s1gc_14",ge="_sep_1s1gc_34",he="_label_1s1gc_47",d={root:de,section:ue,item:pe,sep:ge,label:he},me="_fieldset_1ghjp_1",fe="_input_1ghjp_9",xe="_cnt_1ghjp_9",k={fieldset:me,input:fe,cnt:xe};function ve({OptionComponent:t,optionPropsList:o,selectedIndex:a,onChange:n}){const l=W("visually-hidden",k.input),r=u=>{n(u.target.value)};return e.jsx("fieldset",{className:k.fieldset,children:o.map((u,i)=>e.jsxs("label",{children:[e.jsx("input",{type:"radio",checked:a===i,name:"selection",value:i,"aria-labelledby":"traffic chart type "+i,onChange:r,className:l}),e.jsx("div",{className:k.cnt,children:e.jsx(t,{...u})})]},i))})}const{useMemo:ye}=R,je={plugins:{legend:{display:!1}},scales:{x:{display:!1,type:"category"},y:{display:!1,type:"linear"}}},B=[23e3,35e3,46e3,33e3,9e4,68e3,23e3,45e3],be=[184e3,183e3,196e3,182e3,19e4,186e3,182e3,189e3],Ce=B;function ke({id:t}){const o=q.read(),a=ye(()=>({labels:Ce,datasets:[{...L,...T[t].up,data:B},{...L,...T[t].down,data:be}]}),[t]),n="chart-"+t;return H(o.Chart,n,a,null,je),e.jsx("div",{style:{width:100,padding:5},children:e.jsx("canvas",{id:n})})}const{useEffect:_e,useState:we,useCallback:f,useRef:Oe,useMemo:Se}=R,Ie=[{id:0},{id:1},{id:2},{id:3}],Ne=[["debug","Debug"],["info","Info"],["warning","Warning"],["error","Error"],["silent","Silent"]],Pe=[{key:"port",label:"HTTP Proxy Port"},{key:"socks-port",label:"SOCKS5 Proxy Port"},{key:"mixed-port",label:"Mixed Port"},{key:"redir-port",label:"Redir Port"}],Le=[["zh","中文"],["en","English"]],Te=[["Global","Global"],["Rule","Rule"],["Direct","Direct"]];function $e(){const{data:t}=G();return e.jsx(Ee,{configs:t})}function Ee({configs:t}){const o=K(),[a,n]=b(Z),[l,r]=b(ee),u=Q(),[i,O]=we(t),S=Oe(t);_e(()=>{S.current!==t&&O(t),S.current=t},[t]);const m=f((s,c)=>{O({...i,[s]:c})},[i]),M=V(),h=le({mutationFn:te(u),onSuccess:()=>{M.invalidateQueries({queryKey:["/configs"]})}}),z=f(s=>{const c="allow-lan",p=s;m(c,p),h.mutate({"allow-lan":p})},[h,m]),x=f(({name:s,value:c})=>{switch(s){case"mode":case"log-level":m(s,c),h.mutate({[s]:c}),s==="log-level"&&ne({...u,logLevel:c});break;case"redir-port":case"socks-port":case"mixed-port":case"port":if(c!==""){const p=parseInt(c,10);if(p<0||p>65535)return}m(s,c);break;default:return}},[u,h,m]),A=f(s=>x(s.target),[x]),I=f(s=>{const c=s.target,{name:p,value:P}=c;switch(p){case"port":case"socks-port":case"mixed-port":case"redir-port":{const j=parseInt(P,10);if(j<0||j>65535)return;h.mutate({[p]:j});break}case"latencyTestUrl":{n(P);break}default:throw new Error(`unknown input name ${p}`)}},[h,n]),U=Se(()=>{const s=i.mode;return typeof s=="string"&&s[0].toUpperCase()+s.slice(1)},[i.mode]),[$,D]=b(se),{t:g,i18n:N}=J();return e.jsxs("div",{children:[e.jsx(X,{title:g("Config")}),e.jsxs("div",{className:d.root,style:{display:"none"},children:[Pe.map(s=>i[s.key]!==void 0?e.jsxs("div",{children:[e.jsx("div",{className:d.label,children:s.label}),e.jsx(ae,{name:s.key,value:i[s.key],onChange:A,onBlur:I})]},s.key):null),e.jsxs("div",{children:[e.jsx("div",{className:d.label,children:"Mode"}),e.jsx(C,{options:Te,selected:U,onChange:s=>x({name:"mode",value:s.target.value})})]}),e.jsxs("div",{children:[e.jsx("div",{className:d.label,children:"Log Level"}),e.jsx(C,{options:Ne,selected:i["log-level"],onChange:s=>x({name:"log-level",value:s.target.value})})]}),e.jsxs("div",{className:d.item,children:[e.jsx(E,{id:"config-allow-lan",checked:i["allow-lan"],onChange:z}),e.jsx("label",{htmlFor:"config-allow-lan",children:"Allow LAN"})]})]}),e.jsx("div",{className:d.sep,style:{display:"none"},children:e.jsx("div",{})}),e.jsxs("div",{className:d.section,children:[e.jsxs("div",{children:[e.jsx("div",{className:d.label,children:g("latency_test_url")}),e.jsx(oe,{name:"latencyTestUrl",type:"text",value:a,onBlur:I})]}),e.jsxs("div",{children:[e.jsx("div",{className:d.label,children:g("lang")}),e.jsx("div",{children:e.jsx(C,{options:Le,selected:N.language,onChange:s=>N.changeLanguage(s.target.value)})})]}),e.jsxs("div",{children:[e.jsx("div",{className:d.label,children:g("chart_style")}),e.jsx(ve,{OptionComponent:ke,optionPropsList:Ie,selectedIndex:l,onChange:s=>r(parseInt(s,10))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:d.label,children:[g("current_backend"),e.jsx("p",{children:u.baseURL})]}),e.jsx(Y,{start:e.jsx(ce,{size:16}),label:g("switch_backend"),onClick:()=>o("/backend")})]}),e.jsxs("div",{className:d.item,children:[e.jsx(E,{id:"dark-mode-pure-black-toggle",checked:$,onChange:D}),e.jsx("label",{htmlFor:"dark-mode-pure-black-toggle",children:g("dark_mode_pure_black_toggle_label")})]})]})]})}export{$e as default};
