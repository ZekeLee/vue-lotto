import{_ as C,u as g,r as k,c as i,a as u,b as t,d as n,w as d,e as o,f as s,o as a,F as N,g as V,h as y,B}from"./index-DHY281c4.js";const w={class:"tooltip-box"},I={key:0},F={key:1},R={class:"tooltip-box"},D={key:0},E={key:1},z={class:"btn-group d-flex justify-center ga-2"},G={__name:"GetNumbersView",setup(L){const l=g(),p=k(""),m=k("");return(S,e)=>{const c=s("v-icon"),b=s("v-tooltip"),_=s("v-text-field"),f=s("v-card"),x=s("v-btn");return a(),i("section",null,[u("article",null,[u("h1",null,[e[6]||(e[6]=t(" 고정 번호 ")),u("div",w,[n(c,{size:"24"},{default:d(()=>e[4]||(e[4]=[t(" mdi-help-circle-outline ")])),_:1}),n(b,{activator:"parent",location:"top"},{default:d(()=>e[5]||(e[5]=[t("해당 번호를 고정으로 포함시켜서 번호를 추첨합니다."),u("br",null,null,-1),t("최소 0개부터 최대 5개의 번호를 선택 가능합니다.")])),_:1})])]),n(_,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=r=>p.value=r),variant:"underlined",type:"number",placeholder:"고정 번호 입력",clearable:"","append-inner-icon":"mdi-plus-circle","onClick:appendInner":e[1]||(e[1]=r=>o(l).addFixedNumber(parseInt(p.value,10)))},null,8,["modelValue"]),n(f,{class:"ball-container"},{default:d(()=>[o(l).fixedNumbers.length===0?(a(),i("p",I,"선택된 고정 번호가 없습니다.")):(a(),i("ul",F,[(a(!0),i(N,null,V(o(l).fixedNumbers,(r,v)=>(a(),y(B,{key:v,number:r,editable:!0,onRemoveBall:o(l).removeFixedNumber},null,8,["number","onRemoveBall"]))),128))]))]),_:1})]),u("article",null,[u("h1",null,[e[9]||(e[9]=t(" 제외 번호 ")),u("div",R,[n(c,{size:"24"},{default:d(()=>e[7]||(e[7]=[t(" mdi-help-circle-outline ")])),_:1}),n(b,{activator:"parent",location:"top"},{default:d(()=>e[8]||(e[8]=[t("해당 번호를 제외하고 번호를 추첨합니다."),u("br",null,null,-1),t("최소 0개부터 최대 38개까지 선택 가능합니다.")])),_:1})])]),n(_,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=r=>m.value=r),variant:"underlined",type:"number",placeholder:"제외 번호 입력",clearable:"","append-inner-icon":"mdi-plus-circle","onClick:appendInner":e[3]||(e[3]=r=>o(l).addExcludedNumber(parseInt(m.value,10)))},null,8,["modelValue"]),n(f,{class:"ball-container"},{default:d(()=>[o(l).excludedNumbers.length===0?(a(),i("p",D,"선택된 제외 번호가 없습니다.")):(a(),i("ul",E,[(a(!0),i(N,null,V(o(l).excludedNumbers,(r,v)=>(a(),y(B,{key:v,number:r,editable:!0,onRemoveBall:o(l).removeExcludedNumber},null,8,["number","onRemoveBall"]))),128))]))]),_:1})]),u("div",z,[n(x,{variant:"outlined","min-width":"150",onClick:o(l).openDrawDialog},{default:d(()=>e[10]||(e[10]=[t("추천번호 뽑기")])),_:1},8,["onClick"]),n(x,{variant:"outlined","min-width":"150",onClick:o(l).openHistoryDialog},{default:d(()=>e[11]||(e[11]=[t("추천번호 추첨기록")])),_:1},8,["onClick"])])])}}},$=C(G,[["__scopeId","data-v-70c9e1bd"]]);export{$ as default};