import{ab as S,a3 as z,aG as H,C as Z,n as q,o as J,s as K,g as Q,c as X,b as Y,_ as d,l as F,t as ee,d as te,D as ae,H as re,P as ne,k as ie}from"./index-d0d322a8.js";import{p as se}from"./chunk-4BX2VUAB-348bfb9c.js";import{p as oe}from"./mermaid-parser.core-92905e9b.js";import{d as I}from"./arc-deb9ff94.js";import{o as le}from"./ordinal-ba9b4969.js";import"./vendor-fdc615e7.js";import"./utils-51323502.js";import"./_baseUniq-c8b3cef9.js";import"./_basePickBy-3c208ce7.js";import"./clone-a65cc527.js";import"./init-77b53fdd.js";function ce(e,a){return a<e?-1:a>e?1:a>=e?0:NaN}function ue(e){return e}function pe(){var e=ue,a=ce,f=null,x=S(0),s=S(z),l=S(0);function o(t){var n,c=(t=H(t)).length,u,y,h=0,p=new Array(c),i=new Array(c),v=+x.apply(this,arguments),w=Math.min(z,Math.max(-z,s.apply(this,arguments)-v)),m,C=Math.min(Math.abs(w)/c,l.apply(this,arguments)),$=C*(w<0?-1:1),g;for(n=0;n<c;++n)(g=i[p[n]=n]=+e(t[n],n,t))>0&&(h+=g);for(a!=null?p.sort(function(A,D){return a(i[A],i[D])}):f!=null&&p.sort(function(A,D){return f(t[A],t[D])}),n=0,y=h?(w-c*$)/h:0;n<c;++n,v=m)u=p[n],g=i[u],m=v+(g>0?g*y:0)+$,i[u]={data:t[u],index:n,value:g,startAngle:v,endAngle:m,padAngle:C};return i}return o.value=function(t){return arguments.length?(e=typeof t=="function"?t:S(+t),o):e},o.sortValues=function(t){return arguments.length?(a=t,f=null,o):a},o.sort=function(t){return arguments.length?(f=t,a=null,o):f},o.startAngle=function(t){return arguments.length?(x=typeof t=="function"?t:S(+t),o):x},o.endAngle=function(t){return arguments.length?(s=typeof t=="function"?t:S(+t),o):s},o.padAngle=function(t){return arguments.length?(l=typeof t=="function"?t:S(+t),o):l},o}var L=Z.pie,G={sections:new Map,showData:!1,config:L},T=G.sections,N=G.showData,de=structuredClone(L),ge=d(()=>structuredClone(de),"getConfig"),fe=d(()=>{T=new Map,N=G.showData,ee()},"clear"),me=d(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(e)||(T.set(e,a),F.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),he=d(()=>T,"getSections"),ve=d(e=>{N=e},"setShowData"),Se=d(()=>N,"getShowData"),_={getConfig:ge,clear:fe,setDiagramTitle:q,getDiagramTitle:J,setAccTitle:K,getAccTitle:Q,setAccDescription:X,getAccDescription:Y,addSection:me,getSections:he,setShowData:ve,getShowData:Se},xe=d((e,a)=>{se(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ye={parse:d(async e=>{const a=await oe("pie",e);F.debug(a),xe(a,_)},"parse")},we=d(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),Ae=we,De=d(e=>{const a=[...e.values()].reduce((s,l)=>s+l,0),f=[...e.entries()].map(([s,l])=>({label:s,value:l})).filter(s=>s.value/a*100>=1).sort((s,l)=>l.value-s.value);return pe().value(s=>s.value)(f)},"createPieArcs"),Ce=d((e,a,f,x)=>{F.debug(`rendering pie chart
`+e);const s=x.db,l=te(),o=ae(s.getConfig(),l.pie),t=40,n=18,c=4,u=450,y=u,h=re(a),p=h.append("g");p.attr("transform","translate("+y/2+","+u/2+")");const{themeVariables:i}=l;let[v]=ne(i.pieOuterStrokeWidth);v??=2;const w=o.textPosition,m=Math.min(y,u)/2-t,C=I().innerRadius(0).outerRadius(m),$=I().innerRadius(m*w).outerRadius(m*w);p.append("circle").attr("cx",0).attr("cy",0).attr("r",m+v/2).attr("class","pieOuterCircle");const g=s.getSections(),A=De(g),D=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let b=0;g.forEach(r=>{b+=r});const P=A.filter(r=>(r.data.value/b*100).toFixed(0)!=="0"),k=le(D);p.selectAll("mySlices").data(P).enter().append("path").attr("d",C).attr("fill",r=>k(r.data.label)).attr("class","pieCircle"),p.selectAll("mySlices").data(P).enter().append("text").text(r=>(r.data.value/b*100).toFixed(0)+"%").attr("transform",r=>"translate("+$.centroid(r)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-(u-50)/2).attr("class","pieTitleText");const W=[...g.entries()].map(([r,M])=>({label:r,value:M})),E=p.selectAll(".legend").data(W).enter().append("g").attr("class","legend").attr("transform",(r,M)=>{const R=n+c,V=R*W.length/2,U=12*n,j=M*R-V;return"translate("+U+","+j+")"});E.append("rect").attr("width",n).attr("height",n).style("fill",r=>k(r.label)).style("stroke",r=>k(r.label)),E.append("text").attr("x",n+c).attr("y",n-c).text(r=>s.getShowData()?`${r.label} [${r.value}]`:r.label);const B=Math.max(...E.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),O=y+t+n+c+B;h.attr("viewBox",`0 0 ${O} ${u}`),ie(h,u,O,o.useMaxWidth)},"draw"),$e={draw:Ce},Oe={parser:ye,db:_,renderer:$e,styles:Ae};export{Oe as diagram};
