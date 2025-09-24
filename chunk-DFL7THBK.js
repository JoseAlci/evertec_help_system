import{j as E,k as M}from"./chunk-FNC2QKET.js";import{Ca as w,Ja as C,Ka as r,La as s,Ma as T,Na as P,Oa as y,Sa as f,Ta as l,Ua as v,V as x,W as b,pa as m,za as O}from"./chunk-3NBVSXPI.js";function $(p,t){if(p&1&&(r(0,"option",11),l(1),s()),p&2){let e=t.$implicit;C("value",e.value),m(),v(e.label)}}var F=class p{result="";actions_list=[{value:"parse_highlighting_spaces",label:"Parsear realzando espacios"},{value:"parse_no_highlighting_spaces",label:"Parsear sin realzar espacios"}];process_tokens(t,e){this.result="",t==="parse_highlighting_spaces"&&this.parse_highlighting_spaces(e.replace(/(\r\n|\n|\r)/g,"")),t==="parse_no_highlighting_spaces"&&this.parse_no_highlighting_spaces(e.replace(/(\r\n|\n|\r)/g,""))}parse_highlighting_spaces(t){let e=`NOTA: En 'lista completa' y en 'token content', los signos '%' al comienzo y final, marcan el comienzo y final del mismo, NO forman parte del token

`,c=t.split("&")[0],n=t.split("&")[1],_=n.split("!")[0],o=n.split("!").slice(1),d=`lista completa: %&${n}%`;e=e+d+`


`;for(let a=0;a<o.length;a++){let i=o[a].slice(1),g=i.slice(0,2),u=i.slice(2,7),h=i.slice(8),k=`------------------------------------- TOKEN ${g}-------------------------------------
${i}

token id: ${g}
token length: ${u}
token content: %${h.replaceAll(" ","\xA6")}%`;e=e+k+`


`}this.result=e}parse_no_highlighting_spaces(t){let e=`NOTA: En 'lista completa' y en 'token content', los signos '%' al comienzo y final, marcan el comienzo y final del mismo, NO forman parte del token

`,c=t.split("&")[0],n=t.split("&")[1],_=n.split("!")[0],o=n.split("!").slice(1),d=`lista completa: %&${n}%`;e=e+d+`


`;for(let a=0;a<o.length;a++){let i=o[a].slice(1),g=i.slice(0,2),u=i.slice(2,7),h=i.slice(8),k=`------------------------------------- TOKEN ${g}-------------------------------------
${i}

token id: ${g}
token length: ${u}
token content: %${h}%`;e=e+k+`


`}this.result=e}copyToClipboard(t){navigator.clipboard.writeText(t).then(()=>{alert("Texto copiado al portapapeles")}).catch(e=>{console.error("Error al copiar: ",e)})}static \u0275fac=function(e){return new(e||p)};static \u0275cmp=O({type:p,selectors:[["app-tokens-format"]],decls:18,vars:2,consts:[["my_original_token",""],["my_result_tokens",""],["selector_list",""],[1,"container"],["id","entrada","placeholder","Ingresa el campo de tokens aqu\xED..."],["id","salida","readonly","","placeholder","Aqu\xED aparecer\xE1 el resultado..."],[1,"actions"],["id","selector"],[3,"value",4,"ngFor","ngForOf"],[3,"click"],[1,"footer"],[3,"value"]],template:function(e,c){if(e&1){let n=P();r(0,"div",3)(1,"h2"),l(2,"Formateador de tokens"),s(),T(3,"textarea",4,0),r(5,"textarea",5,1),l(7),s(),r(8,"div",6)(9,"select",7,2),w(11,$,2,2,"option",8),s(),r(12,"button",9),y("click",function(){x(n);let o=f(4),d=f(10);return b(c.process_tokens(d.value,o.value))}),l(13,"Procesar"),s(),r(14,"button",9),y("click",function(){x(n);let o=f(6);return b(c.copyToClipboard(o.value))}),l(15,"Copiar resultado"),s()(),r(16,"div",10),l(17,"Formateador de tokens by Jos\xE9 Alcivar"),s()()}e&2&&(m(7),v(c.result),m(4),C("ngForOf",c.actions_list))},dependencies:[M,E],styles:[".container[_ngcontent-%COMP%]{background:#fff;padding:10px;border-radius:16px;box-shadow:0 8px 24px #0000001a;width:95%;max-width:95%;display:flex;flex-direction:column;gap:12px;margin:0 auto}.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:28px;font-weight:600;text-align:center;color:#2c3e50}textarea[_ngcontent-%COMP%]{width:98%;min-height:250px;padding:14px;border:1.5px solid #dcdfe6;border-radius:10px;font-size:15px;resize:none;transition:border .3s}textarea[_ngcontent-%COMP%]:focus{border-color:#3a7afe;outline:none;box-shadow:0 0 6px #3a7afe33}textarea[readonly][_ngcontent-%COMP%]{background:#f9fafb;color:#555}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;width:40%;margin:0 auto}select[_ngcontent-%COMP%]{flex:1;padding:12px;border-radius:8px;border:1.5px solid #dcdfe6;font-size:15px;background:#fff;cursor:pointer;transition:border .3s}select[_ngcontent-%COMP%]:focus{border-color:#3a7afe;outline:none;box-shadow:0 0 6px #3a7afe33}button[_ngcontent-%COMP%]{background:#3a7afe;color:#fff;font-size:16px;font-weight:500;padding:12px 24px;border:none;border-radius:8px;cursor:pointer;transition:background .3s,transform .2s;flex-shrink:0}button[_ngcontent-%COMP%]:hover{background:#2f63d7}button[_ngcontent-%COMP%]:active{transform:scale(.97)}.footer[_ngcontent-%COMP%]{font-size:12px;color:#999;text-align:center;margin-top:10px}"]})};export{F as TokensFormatComponent};
