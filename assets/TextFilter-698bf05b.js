import{r as g,R as c,P as i,c as m,j as l,n as x,k as d}from"./index-9246ef46.js";import{d as h}from"./debounce-c1ba2006.js";function u(){return u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},u.apply(this,arguments)}function v(t,n){if(t==null)return{};var e=b(t,n),o,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)o=s[r],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(e[o]=t[o])}return e}function b(t,n){if(t==null)return{};var e={},o=Object.keys(t),r,s;for(s=0;s<o.length;s++)r=o[s],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}var p=g.forwardRef(function(t,n){var e=t.color,o=e===void 0?"currentColor":e,r=t.size,s=r===void 0?24:r,a=v(t,["color","size"]);return c.createElement("svg",u({ref:n,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),c.createElement("polyline",{points:"23 4 23 10 17 10"}),c.createElement("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}))});p.propTypes={color:i.string,size:i.oneOfType([i.string,i.number])};p.displayName="RotateCw";const y=p,R="_rotate_1dspl_1",_="_isRotating_1dspl_5",j="_rotating_1dspl_1",f={rotate:R,isRotating:_,rotating:j};function $(t){const n=t.size||16,e=m(f.rotate,{[f.isRotating]:t.isRotating});return l.jsx("span",{className:e,children:l.jsx(y,{size:n})})}const{useCallback:w,useState:O,useMemo:T}=d;function C(t){const[,n]=x(t),[e,o]=O(""),r=T(()=>h(n,300),[n]);return[w(a=>{o(a.target.value),r(a.target.value)},[r]),e]}const k="_input_16a1f_1",z={input:k};function L(t){const[n,e]=C(t.textAtom);return l.jsx("input",{className:z.input,type:"text",value:e,onChange:n,placeholder:t.placeholder})}export{$ as R,L as T,y as a};
