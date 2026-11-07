/* Leach Chen — procedural neural studies, rendered locally with Canvas 2D. */
(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const TAU = Math.PI * 2;
  const mouse = { x: -1000, y: -1000, sx: -1000, sy: -1000, active: false };
  const pulses = [];
  const trail = [];
  const views = [];
  const aura = $('.cursor-aura');
  const activity = $('#neural-activity');
  const started = performance.now();
  let frame = 0, last = 0, resizeTimer;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const pipeline = { index: 0, preview: -1, elapsed: 0, playing: !reduced.matches, focused: false };
  const flowSteps = [
    { description: '把一句话，拆成可以计算的片段。', examples: ['神经', '网络', '如何', '理解', '语言', '？'] },
    { description: '让语言拥有坐标，在向量空间里寻找关系。', examples: ['−0.24', '+0.81', '+0.16', '…', 'ℝᵈ'] },
    { description: '在上下文之间，找到值得关注的连接。', examples: ['Q × Kᵀ', 'softmax', 'V', 'context'] },
    { description: '经过非线性变换，让每个位置的表达更丰富。', examples: ['Linear', 'Activation', 'Linear'] },
    { description: '预测下一个 Token，让语言一步步延续。', examples: ['模型', '通过', '上下文', '建立', '关联', '…'] }
  ];
  const flowTabs = $$('.flow-stage');
  const flowToggle = $('.flow-toggle');
  const flowPanel = $('#flow-detail');
  let pipelineView;

  function updateFlow() {
    const index = pipeline.preview >= 0 ? pipeline.preview : pipeline.index;
    flowTabs.forEach((tab, i) => {
      tab.classList.toggle('is-active', i === index);
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    flowPanel.setAttribute('aria-labelledby', `flow-tab-${index}`);
    $('.flow-detail-index').textContent = `0${index + 1} / 05`;
    $('#flow-description').textContent = flowSteps[index].description;
    $('#flow-example-tokens').replaceChildren(...flowSteps[index].examples.map(text => {
      const span = document.createElement('span'); span.textContent = text; return span;
    }));
    flowToggle.disabled = reduced.matches;
    flowToggle.setAttribute('aria-pressed', String(!pipeline.playing));
    flowToggle.setAttribute('aria-label', reduced.matches ? '静态展示' : pipeline.playing ? '暂停自动演示' : '继续自动演示');
    const icon = document.createElement('span');
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = reduced.matches ? '○' : pipeline.playing ? 'Ⅱ' : '▷';
    flowToggle.replaceChildren(icon, document.createTextNode(reduced.matches ? ' 静态' : pipeline.playing ? ' 暂停' : ' 继续'));
    if (pipelineView) pipelineView.draw(pipelineView, reduced.matches || !pipeline.playing ? 4 : (performance.now()-started)/1000+4);
  }

  function selectFlow(index) {
    pipeline.index = index; pipeline.elapsed = 0; pipeline.preview = -1; pipeline.playing = false;
    updateFlow();
  }

  function view(id, draw) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    const item = { canvas, ctx, draw, w: 0, h: 0, visible: true };
    item.resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(devicePixelRatio || 1, 1.5);
      item.w = Math.max(1, bounds.width); item.h = Math.max(1, bounds.height);
      canvas.width = Math.round(item.w * ratio); canvas.height = Math.round(item.h * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    item.resize();
    views.push(item);
    return item;
  }

  // Two folded hemispheres, joined by sparse long-range connections.
  // This is a conceptual artwork, not a biological or trained-model topology.
  function makeNetwork(count) {
    const points = [], edges = [], used = new Set();
    const half = count / 2;
    for (let side = 0; side < 2; side++) {
      for (let i = 0; i < half; i++) {
        const y = 1 - 2 * (i + .5) / half;
        const a = i * 2.39996323;
        const r = Math.sqrt(1 - y * y);
        const fold = 1 + .065 * Math.sin(a * 3 + y * 9) + .035 * Math.cos(a * 5 - y * 13);
        const x = Math.cos(a) * r;
        points.push({
          x: (side ? .43 : -.43) + x * .66 * fold,
          y: y * .94 * fold,
          z: Math.sin(a) * r * .73 * fold,
          side, seed: i * .731 + side * 2
        });
      }
    }
    points.forEach((p, i) => {
      const nearest = points.map((q, j) => ({ j, d: (p.x-q.x)**2 + (p.y-q.y)**2 + (p.z-q.z)**2 }))
        .filter((n) => n.j !== i && n.d < .19).sort((a, b) => a.d-b.d).slice(0, 4);
      nearest.forEach(({j}) => {
        const key = `${Math.min(i,j)}:${Math.max(i,j)}`;
        if (!used.has(key)) { used.add(key); edges.push([i,j]); }
      });
    });
    return { points, edges };
  }
  const brain = makeNetwork(600);

  function localPointer(item) {
    const bounds = item.canvas.getBoundingClientRect();
    return { x: mouse.x - bounds.left, y: mouse.y - bounds.top };
  }

  function drawBrain(item, time, thumbnail = false) {
    const {ctx, w, h} = item;
    ctx.clearRect(0,0,w,h);
    const p = localPointer(item);
    const hovered = mouse.active && p.x >= 0 && p.x < w && p.y >= 0 && p.y < h && !reduced.matches;
    const px = hovered ? (p.x/w-.5)*2 : 0;
    const py = hovered ? (p.y/h-.5)*2 : 0;
    const yaw = -.28 + Math.sin(time*.12)*.14 + px*.3;
    const pitch = -.11 + py*.17;
    const radius = Math.min(w, h) * (thumbnail ? .32 : .335);
    const cx = w*.51, cy = h*.51;
    const pulseBounds = pulses.length ? item.canvas.getBoundingClientRect() : null;
    const localPulses = pulses.map(pulse => ({ x: pulse.x-pulseBounds.left, y: pulse.y-pulseBounds.top, age: pulse.age }));
    const glow = ctx.createRadialGradient(cx,cy,0,cx,cy,radius*1.4);
    glow.addColorStop(0,'rgba(139,93,50,.10)');
    glow.addColorStop(.6,'rgba(79,101,88,.025)'); glow.addColorStop(1,'rgba(16,16,15,0)');
    ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
    ctx.save();ctx.translate(cx,cy);ctx.rotate(-.16);
    ctx.strokeStyle='rgba(184,167,131,.10)';ctx.lineWidth=.7;
    ctx.beginPath();ctx.ellipse(0,0,radius*1.29,radius*1.09,0,0,TAU);ctx.stroke();
    ctx.setLineDash([2,9]);ctx.beginPath();ctx.ellipse(0,0,radius*1.4,radius*.37,.25,0,TAU);ctx.stroke();
    ctx.setLineDash([]);ctx.restore();
    const projected = brain.points.map((point) => {
      let x=point.x*Math.cos(yaw)+point.z*Math.sin(yaw);
      let z=-point.x*Math.sin(yaw)+point.z*Math.cos(yaw);
      const y=point.y*Math.cos(pitch)-z*Math.sin(pitch);
      z=point.y*Math.sin(pitch)+z*Math.cos(pitch);
      const perspective=3.8/(3.8-z);
      const sx=cx+x*radius*perspective, sy=cy-y*radius*perspective;
      const distance=Math.hypot(sx-p.x,sy-p.y);
      let activation=hovered?Math.max(0,1-distance/(thumbnail?100:155)):0;
      if (!reduced.matches) localPulses.forEach((pulse) => {
        const d=Math.hypot(sx-pulse.x,sy-pulse.y);
        activation=Math.max(activation,Math.max(0,1-Math.abs(d-pulse.age*340)/42)*(1-pulse.age/1.7));
      });
      const pull=hovered?activation*activation*.045:0;
      return {x:sx+(p.x-sx)*pull,y:sy+(p.y-sy)*pull,z,activation,side:point.side,seed:point.seed};
    });
    // Deep connections stay quiet; foreground neurons carry the light.
    brain.edges.forEach(([i,j], k) => {
      const a=projected[i],b=projected[j];
      const depth=clamp(((a.z+b.z)/2+.9)/1.9,0,1);
      const active=Math.max(a.activation,b.activation);
      const pulse=Math.pow(Math.max(0,Math.sin(time*1.4-k*.16)),14)*.16;
      const cyan=active>.12 || (a.side===1 && k%7===0);
      const opacity=.045+depth*.23+active*.48+pulse*depth;
      ctx.strokeStyle=cyan?`rgba(139,213,202,${opacity})`:`rgba(222,165,103,${opacity})`;
      ctx.lineWidth=active>.25?1.1:.65;
      ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
      if (k%61===0) {
        const t=(time*.24+k*.137)%1;
        ctx.fillStyle=`rgba(190,231,213,${.5+depth*.4})`;
        ctx.beginPath();ctx.arc(lerp(a.x,b.x,t),lerp(a.y,b.y,t),1.45,0,TAU);ctx.fill();
      }
    });
    projected.sort((a,b)=>a.z-b.z).forEach((node,i) => {
      const depth=clamp((node.z+.9)/1.9,0,1);
      const active=node.activation;
      const flashing=Math.pow(Math.max(0,Math.sin(time*1.8+node.seed*3)),18);
      const size=.55+depth*.75+active*1.8+flashing*.4;
      const cyan=active>.15 || (node.side===1 && i%6===0);
      const color=cyan?'151,224,211':'237,177,111';
      if(active>.1 || (flashing>.7 && depth>.5)) {
        const r=size*(3+active*2);
        const bloom=ctx.createRadialGradient(node.x,node.y,0,node.x,node.y,r);
        bloom.addColorStop(0,`rgba(${color},${.35+active*.3})`);bloom.addColorStop(1,`rgba(${color},0)`);
        ctx.fillStyle=bloom;ctx.beginPath();ctx.arc(node.x,node.y,r,0,TAU);ctx.fill();
      }
      ctx.fillStyle=`rgba(${color},${.15+depth*.64+active*.2})`;
      ctx.beginPath();ctx.arc(node.x,node.y,size,0,TAU);ctx.fill();
    });
    if (!thumbnail) {
      activity.textContent=hovered?'RESPONDING':'SELF-ORGANIZING';
      $('.neural-readout').classList.toggle('is-active',hovered);
    }
  }

  // An abstract loss surface, drawn as a wireframe with moving highlights.
  function drawLandscape(item,time) {
    const {ctx,w,h}=item;
    ctx.fillStyle='#272b26';ctx.fillRect(0,0,w,h);
    const bg=ctx.createLinearGradient(0,0,w,h);
    bg.addColorStop(0,'#444b3b');bg.addColorStop(1,'#171e1c');ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
    const p=localPointer(item);
    const hovered=mouse.active&&p.x>=0&&p.x<w&&p.y>=0&&p.y<h&&!reduced.matches;
    const tilt=hovered?clamp((p.x/w-.5),-.5,.5)*.16:0;
    const height=(x,z)=>Math.sin(x*2.5+z*1.1)*.21+Math.cos(z*2.8-x*.6)*.2+Math.sin(x*4-z*2)*.045;
    function project(x,z) {
      const yy=height(x,z);
      const factor=1/(1+z*.11);
      return {x:w*.5+(x+z*.32)*w*.26*factor,y:h*.57+(z*.18-yy*.85+x*tilt)*h*factor};
    }
    for(let j=42;j>=0;j--) {
      const z=-1.8+j/42*3.6;
      ctx.beginPath();
      for(let i=0;i<=95;i++) {
        const x=-2+i/95*4,q=project(x,z);
        if(i===0)ctx.moveTo(q.x,q.y);else ctx.lineTo(q.x,q.y);
      }
      ctx.strokeStyle=`rgba(187,210,160,${.16+(42-j)/42*.27})`;ctx.lineWidth=.65;ctx.stroke();
    }
    for(let i=0;i<=32;i++) {
      ctx.beginPath();
      for(let j=0;j<=65;j++) {
        const q=project(-2+i/32*4,-1.8+j/65*3.6);
        if(j===0)ctx.moveTo(q.x,q.y);else ctx.lineTo(q.x,q.y);
      }
      ctx.strokeStyle='rgba(165,192,142,.18)';ctx.lineWidth=.55;ctx.stroke();
    }
    // Gradient-descent-inspired trajectory; illustrative, not model telemetry.
    ctx.beginPath();
    for(let i=0;i<=70;i++) {
      const t=i/70, q=project(-1.45+t*2.3,-1.45+t*2.4+Math.sin(t*6)*.13);
      if(i===0)ctx.moveTo(q.x,q.y);else ctx.lineTo(q.x,q.y);
    }
    ctx.strokeStyle='rgba(243,180,107,.8)';ctx.lineWidth=1.5;ctx.stroke();
    const t=(time*.08)%1,q=project(-1.45+t*2.3,-1.45+t*2.4+Math.sin(t*6)*.13);
    ctx.fillStyle='#f2c38c';ctx.shadowColor='#f2c38c';ctx.shadowBlur=12;
    ctx.beginPath();ctx.arc(q.x,q.y,3,0,TAU);ctx.fill();ctx.shadowBlur=0;
  }

  function drawAttention(item,time) {
    const {ctx,w,h}=item;ctx.clearRect(0,0,w,h);
    const p=localPointer(item);
    const labels=['The','model','learns','to','connect','.'];
    const size=Math.min(w*.65,h*.66),cell=size/6;
    const left=w*.52-size/2,top=h*.51-size/2;
    const hovered=mouse.active&&p.x>=left&&p.x<left+size&&p.y>=top&&p.y<top+size&&!reduced.matches;
    const selected=hovered?Math.floor((p.x-left)/cell):-1;
    ctx.font=`${Math.max(7,Math.min(9,w/75))}px monospace`;
    ctx.textAlign='center';ctx.textBaseline='middle';
    labels.forEach((label,i)=>{ctx.fillStyle='#59644b';ctx.fillText(label,left+i*cell+cell/2,top-14);});
    for(let row=0;row<6;row++)for(let col=0;col<6;col++) {
      const causal=col<=row;
      const focus=col===selected;
      const value=causal?(.1+Math.pow(Math.sin(row*2.8+col*1.4+1),2)*.75):.025;
      ctx.fillStyle=focus&&causal?`rgba(155,92,43,${value})`:`rgba(49,79,50,${value})`;
      ctx.fillRect(left+col*cell+2,top+row*cell+2,cell-4,cell-4);
      if(causal && (row+col)%3===0) {
        ctx.fillStyle=`rgba(222,231,208,${.3+Math.sin(time*.7+row)*.12})`;
        ctx.fillRect(left+col*cell+cell/2-1,top+row*cell+cell/2-1,2,2);
      }
    }
    ctx.textAlign='left';ctx.fillStyle='#66705a';ctx.font='8px monospace';
    ctx.fillText('CAUSAL SELF-ATTENTION',left,top+size+19);
  }

  function drawLayers(item,time) {
    const {ctx,w,h}=item;ctx.clearRect(0,0,w,h);
    const counts=[4,6,7,6,3];
    const p=localPointer(item);
    const layers=counts.map((count,col)=>Array.from({length:count},(_,row)=>({
      x:w*(.17+col*.165), y:h*.5+(row-(count-1)/2)*h*.084
    })));
    layers.forEach((layer,col)=>{
      if(col===layers.length-1)return;
      layer.forEach((a,i)=>layers[col+1].forEach((b,j)=>{
        const lit=(Math.sin(time*2-col*.8-i*.4-j*.2)+1)/2;
        ctx.strokeStyle=`rgba(199,159,106,${.035+lit*.15})`;ctx.lineWidth=.7;
        ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
      }));
    });
    layers.forEach((layer,col)=>layer.forEach((q,i)=>{
      const near=mouse.active&&!reduced.matches&&Math.hypot(p.x-q.x,p.y-q.y)<80;
      const lit=(Math.sin(time*2-col*.8-i*.4)+1)/2;
      ctx.beginPath();ctx.arc(q.x,q.y,4+lit*1.2,0,TAU);
      ctx.fillStyle=near?'#8bd5ca':`rgba(216,169,106,${.25+lit*.55})`;
      ctx.shadowColor=near?'#8bd5ca':'#d8a96a';ctx.shadowBlur=near?16:lit*6;ctx.fill();ctx.shadowBlur=0;
    }));
    ctx.fillStyle='#9d8d72';ctx.font='7px monospace';ctx.textAlign='center';
    ['INPUT','HIDDEN 01','HIDDEN 02','HIDDEN 03','OUTPUT'].forEach((label,i)=>ctx.fillText(label,w*(.17+i*.165),h*.83));
  }

  const ambientPoints=Array.from({length:45},(_,i)=>({x:(Math.sin(i*127.1)*43758.5453)%1,y:(Math.sin(i*311.7)*17375.531)%1,seed:i}));
  function drawAmbient(item,time) {
    const {ctx,w,h}=item;ctx.clearRect(0,0,w,h);
    if(!fine.matches||reduced.matches||!mouse.active)return;
    const points=ambientPoints.map(p=>({x:Math.abs(p.x)*w+Math.sin(time*.2+p.seed)*8,y:Math.abs(p.y)*h+Math.cos(time*.17+p.seed)*8}));
    points.forEach((p)=>{
      const distance=Math.hypot(p.x-mouse.x,p.y-mouse.y);
      if(distance>210)return;
      const opacity=(1-distance/210)*.28;
      ctx.strokeStyle=`rgba(134,202,189,${opacity})`;ctx.lineWidth=.7;
      ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(mouse.x,mouse.y);ctx.stroke();
      ctx.fillStyle=`rgba(232,172,104,${opacity*2})`;ctx.beginPath();ctx.arc(p.x,p.y,2,0,TAU);ctx.fill();
    });
    trail.forEach((p,i)=>{
      const a=(1-p.age/.65)*.4;
      ctx.fillStyle=`rgba(217,174,119,${a})`;ctx.beginPath();ctx.arc(p.x,p.y,1.2,0,TAU);ctx.fill();
      if(i>0){ctx.strokeStyle=`rgba(142,201,185,${a*.3})`;ctx.beginPath();ctx.moveTo(trail[i-1].x,trail[i-1].y);ctx.lineTo(p.x,p.y);ctx.stroke();}
    });
    pulses.forEach(p=>{ctx.strokeStyle=`rgba(142,213,198,${Math.max(0,.3-p.age*.25)})`;ctx.lineWidth=.7;ctx.beginPath();ctx.arc(p.x,p.y,p.age*220+3,0,TAU);ctx.stroke();});
  }

  function drawPipeline(item, time) {
    const {ctx,w,h}=item;
    ctx.clearRect(0,0,w,h);
    const index=pipeline.preview>=0?pipeline.preview:pipeline.index;
    const s=Math.min(17,w/38), y=h>140?59:h<125?45:51;
    const positions=Array.from({length:5},(_,i)=>w*(i+.5)/5);
    const moving=pipeline.playing&&pipeline.preview<0&&!pipeline.focused&&!reduced.matches;
    const clock=moving?time:pipeline.elapsed;
    positions.forEach((x,i)=>{
      if(i===4)return;
      const x1=x+s*1.8,x2=positions[i+1]-s*1.8;
      ctx.strokeStyle=i<index?'rgba(165,192,146,.35)':'rgba(165,192,146,.12)';ctx.lineWidth=.8;
      ctx.beginPath();ctx.moveTo(x1,y);ctx.lineTo(x2,y);ctx.stroke();
      for(let j=0;j<3;j++){
        const f=(clock*.28+j/3+i*.17)%1;
        const px=lerp(x1,x2,f);
        const alpha=(i < index ? .7 : .22)*Math.sin(f*Math.PI);
        ctx.fillStyle=`rgba(155,220,195,${alpha})`;
        ctx.shadowColor='#8bd5ca';ctx.shadowBlur=5;
        ctx.beginPath();ctx.arc(px,y,1.5,0,TAU);ctx.fill();ctx.shadowBlur=0;
      }
      const mid=(x1+x2)/2;
      ctx.strokeStyle='rgba(177,190,158,.3)';
      ctx.beginPath();ctx.moveTo(mid-3,y-3);ctx.lineTo(mid,y);ctx.lineTo(mid-3,y+3);ctx.stroke();
    });
    positions.forEach((x,i)=>{
      const active=i===index;
      const color=active?'232,185,128':i<index?'142,187,158':'107,124,99';
      const radius=s*1.65;
      if(active){
        const glow=ctx.createRadialGradient(x,y,0,x,y,radius*2.7);
        glow.addColorStop(0,'rgba(215,175,111,.095)');glow.addColorStop(1,'rgba(215,175,111,0)');
        ctx.fillStyle=glow;ctx.fillRect(x-radius*3,y-radius*3,radius*6,radius*6);
      }
      ctx.strokeStyle=active?'rgba(211,178,123,.4)':'rgba(130,150,117,.16)';ctx.lineWidth=.8;
      ctx.beginPath();ctx.arc(x,y,radius,0,TAU);ctx.stroke();
      if(active && pipeline.playing && pipeline.preview<0){
        ctx.strokeStyle='#b6c797';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(x,y,radius,-Math.PI/2,-Math.PI/2+TAU*(pipeline.elapsed/3.2));ctx.stroke();
      }
      ctx.save();ctx.translate(x,y);ctx.strokeStyle=`rgba(${color},${active ? .95 : .65})`;ctx.fillStyle=`rgba(${color},${active ? .95 : .7})`;ctx.lineWidth=1;
      const dot=(px,py,r=1.4)=>{ctx.beginPath();ctx.arc(px,py,r,0,TAU);ctx.fill();};
      if(i===0){
        for(let j=0;j<3;j++){
          const xx=(j-1)*s*.77,yy=(j%2?-.15:.1)*s;
          ctx.strokeRect(xx-s*.25,yy-s*.38,s*.5,s*.76);dot(xx,yy,.7);
        }
      }else if(i===1){
        for(let a=0;a<4;a++)for(let b=0;b<4;b++){
          ctx.globalAlpha=.3+((a*3+b*2)%5)/7;dot((a-1.5)*s*.43,(b-1.5)*s*.43,s*.09+((a+b)%3)*s*.035);
        }
      }else if(i===2){
        for(let a=0;a<3;a++)for(let b=0;b<3;b++){
          ctx.globalAlpha=active ? .25+.5*Math.abs(Math.sin(clock+a+b)) : .25;
          ctx.beginPath();ctx.moveTo(-s*.7,(a-1)*s*.65);ctx.quadraticCurveTo(0,(b-a)*s*.35,s*.7,(b-1)*s*.65);ctx.stroke();
        }
        ctx.globalAlpha=1;for(let j=0;j<3;j++){dot(-s*.7,(j-1)*s*.65);dot(s*.7,(j-1)*s*.65);}
      }else if(i===3){
        const layers=[2,4,2];
        layers.forEach((count,c)=>{
          for(let a=0;a<count;a++){
            const px=(c-1)*s*.75,py=(a-(count-1)/2)*s*.5;
            if(c<2)for(let b=0;b<layers[c+1];b++){
              ctx.globalAlpha=.25;ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(c*s*.75,(b-(layers[c+1]-1)/2)*s*.5);ctx.stroke();
            }
            ctx.globalAlpha=1;dot(px,py,s*.1);
          }
        });
      }else{
        ctx.beginPath();ctx.moveTo(-s*.75,-s*.55);ctx.lineTo(-s,-s*.55);ctx.lineTo(-s,s*.55);ctx.lineTo(-s*.75,s*.55);ctx.stroke();
        ctx.beginPath();ctx.moveTo(s*.75,-s*.55);ctx.lineTo(s,-s*.55);ctx.lineTo(s,s*.55);ctx.lineTo(s*.75,s*.55);ctx.stroke();
        for(let j=0;j<3;j++){ctx.globalAlpha=active ? .4+.6*Math.abs(Math.sin(clock*2-j*.6)) : .6;dot((j-1)*s*.4,0,s*.1);}
      }
      ctx.restore();
    });
  }

  view('hero-canvas',(item,t)=>drawBrain(item,t));
  view('project-canvas',(item,t)=>drawBrain(item,t,true));
  view('terrain-canvas',drawLandscape);
  view('signal-canvas',drawAttention);
  view('layers-canvas',drawLayers);
  view('interaction-canvas',drawAmbient);
  pipelineView=view('pipeline-canvas',drawPipeline);
  flowTabs.forEach((tab,i)=>{
    tab.addEventListener('pointerenter',event=>{
      if(event.pointerType==='touch'||!fine.matches)return;
      pipeline.preview=i;updateFlow();
    });
    tab.addEventListener('pointerleave',()=>{pipeline.preview=-1;updateFlow();});
    tab.addEventListener('click',()=>selectFlow(i));
    tab.addEventListener('keydown',event=>{
      let next;
      if(event.key==='ArrowRight')next=(i+1)%5;
      else if(event.key==='ArrowLeft')next=(i+4)%5;
      else if(event.key==='Home')next=0;
      else if(event.key==='End')next=4;
      else return;
      event.preventDefault();selectFlow(next);flowTabs[next].focus({preventScroll:true});
    });
  });
  $('.flow-stages').addEventListener('focusin',()=>{pipeline.focused=true;});
  $('.flow-stages').addEventListener('focusout',event=>{if(!event.currentTarget.contains(event.relatedTarget))pipeline.focused=false;});
  flowToggle.addEventListener('click',()=>{pipeline.playing=!pipeline.playing;pipeline.preview=-1;updateFlow();});
  $('.flow-replay').addEventListener('click',()=>{
    pipeline.index=0;pipeline.elapsed=0;pipeline.preview=-1;pipeline.playing=!reduced.matches;updateFlow();
  });
  updateFlow();

  function renderAll(time) { views.forEach(item=>item.draw(item,time)); }
  renderAll(4);
  if('IntersectionObserver' in window) {
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      const item=views.find(v=>v.canvas===entry.target);
      if(item)item.visible=entry.isIntersecting;
    }),{rootMargin:'80px'});
    views.forEach(item=>observer.observe(item.canvas));
  }

  function animate(now) {
    frame=0;
    if(document.hidden||reduced.matches)return;
    if(now-last>=1000/30) {
      const delta=Math.min((now-last)/1000,.1);last=now;
      mouse.sx=lerp(mouse.sx,mouse.x,.2);mouse.sy=lerp(mouse.sy,mouse.y,.2);
      aura.style.transform=`translate3d(${mouse.sx}px,${mouse.sy}px,0)`;
      for(let i=pulses.length-1;i>=0;i--){pulses[i].age+=delta;if(pulses[i].age>1.7)pulses.splice(i,1);}
      for(let i=trail.length-1;i>=0;i--){trail[i].age+=delta;if(trail[i].age>.65)trail.splice(i,1);}
      const time=(now-started)/1000+4;
      if(pipelineView&&pipelineView.visible&&pipeline.playing&&pipeline.preview<0&&!pipeline.focused){
        pipeline.elapsed+=delta;
        if(pipeline.elapsed>=3.2){pipeline.elapsed=0;pipeline.index=(pipeline.index+1)%5;updateFlow();}
      }
      views.forEach(item=>{if(item.visible)item.draw(item,time);});
    }
    frame=requestAnimationFrame(animate);
  }
  function syncMotion() {
    cancelAnimationFrame(frame);frame=0;
    if(!document.hidden&&!reduced.matches)frame=requestAnimationFrame(animate);
    else { aura.classList.remove('is-visible');renderAll(4); }
  }
  document.addEventListener('visibilitychange',syncMotion);
  reduced.addEventListener('change',()=>{
    if(reduced.matches)pipeline.playing=false;
    updateFlow();
    $$('.project-art').forEach(el=>{el.style.removeProperty('--tilt-x');el.style.removeProperty('--tilt-y');});
    $$('.magnetic').forEach(el=>{el.style.removeProperty('translate');});
    syncMotion();
  });
  syncMotion();

  window.addEventListener('pointermove',event=>{
    if(event.pointerType==='touch'||!fine.matches||reduced.matches)return;
    const wasActive=mouse.active;
    mouse.x=event.clientX;mouse.y=event.clientY;mouse.active=true;
    if(!wasActive){mouse.sx=mouse.x;mouse.sy=mouse.y;}
    aura.classList.add('is-visible');
    aura.classList.toggle('is-hovering',Boolean(event.target.closest('a,button')));
    const previous=trail[trail.length-1];
    if(!previous||Math.hypot(previous.x-mouse.x,previous.y-mouse.y)>7) {
      trail.push({x:mouse.x,y:mouse.y,age:0});if(trail.length>30)trail.shift();
    }
  },{passive:true});
  function leave() {mouse.active=false;aura.classList.remove('is-visible');trail.length=0;}
  document.documentElement.addEventListener('pointerleave',leave);
  window.addEventListener('blur',leave);
  window.addEventListener('pointerdown',event=>{
    if(event.pointerType==='touch'||!fine.matches||reduced.matches)return;
    pulses.push({x:event.clientX,y:event.clientY,age:0});if(pulses.length>5)pulses.shift();
  },{passive:true});

  $$('.project-card').forEach(card=>{
    const art=card.querySelector('.project-art');
    card.addEventListener('pointermove',event=>{
      if(event.pointerType==='touch'||!fine.matches||reduced.matches)return;
      const r=art.getBoundingClientRect(),x=clamp((event.clientX-r.left)/r.width,0,1),y=clamp((event.clientY-r.top)/r.height,0,1);
      art.style.setProperty('--tilt-x',`${(y-.5)*-5}deg`);
      art.style.setProperty('--tilt-y',`${(x-.5)*6}deg`);
      art.style.setProperty('--pointer-x',`${x*100}%`);art.style.setProperty('--pointer-y',`${y*100}%`);
    },{passive:true});
    card.addEventListener('pointerleave',()=>{art.style.setProperty('--tilt-x','0deg');art.style.setProperty('--tilt-y','0deg');});
  });
  $$('.magnetic').forEach(el=>{
    el.addEventListener('pointermove',event=>{
      if(event.pointerType==='touch'||!fine.matches||reduced.matches)return;
      const r=el.getBoundingClientRect();
      el.style.translate=`${(event.clientX-r.left-r.width/2)*.12}px ${(event.clientY-r.top-r.height/2)*.12}px`;
    },{passive:true});
    el.addEventListener('pointerleave',()=>{el.style.translate='0px 0px';});
  });

  window.addEventListener('resize',()=>{
    clearTimeout(resizeTimer);
    resizeTimer=setTimeout(()=>{views.forEach(item=>item.resize());renderAll(reduced.matches?4:(performance.now()-started)/1000+4);},160);
  },{passive:true});

  const projects={
    neural:{category:'001 / NEURAL NETWORKS / INTERACTIVE STUDY',title:'连接的涌现 — Neural Field',canvas:'project-canvas',
      description:'单个节点可以很简单，连接却能构成复杂的系统。这个概念实验用三维点阵与局部连线，表达神经网络中信息传递的直觉：节点持续闪烁，信号沿着边传播。移动鼠标会激活附近的节点，点击则产生扩散脉冲。它是一件交互艺术作品，借用脑形轮廓表达连接，不对应具体生物脑或训练模型。',
      tags:['神经网络','信号传播','三维投影','交互概念实验']},
    latent:{category:'002 / DEEP LEARNING / LOSS LANDSCAPE',title:'潜在空间 — Latent Space',canvas:'terrain-canvas',
      description:'学习，可以被想象为在高维地形中寻找更好的位置。这个实验以抽象曲面隐喻损失景观，用一条移动的路径表达沿梯度探索的过程。移动鼠标，地形会发生细微的视角变化。这里的曲面与轨迹均为程序生成的概念示意，不是真实模型的损失值或优化结果。',
      tags:['深度学习','损失景观','梯度下降','概念可视化']},
    attention:{category:'003 / LARGE LANGUAGE MODELS / SELF-ATTENTION',title:'注意力之间 — Attention',canvas:'signal-canvas',
      description:'一个 Token 的意义，也来自它与上下文的关系。这个实验用方格的深浅示意不同 Token 之间的注意力权重，以三角形结构表达自回归模型中对未来位置的遮罩。把鼠标移到矩阵上，可以突出一列连接。画面是帮助理解机制的示意图，格子的数值经过程序构造，不来自实际 LLM 的注意力输出。',
      tags:['LLM','Transformer','Self-Attention','Causal Mask']}
  };
  const dialog=$('.project-dialog');
  $$('.project-card').forEach(card=>card.addEventListener('click',()=>{
    const project=projects[card.dataset.project];
    $('#dialog-title').textContent=project.title;
    $('#dialog-category').textContent=project.category;
    $('#dialog-description').textContent=project.description;
    $('#dialog-tags').replaceChildren(...project.tags.map(tag=>{const span=document.createElement('span');span.textContent=tag;return span;}));
    const source=document.getElementById(project.canvas),preview=document.createElement('canvas');
    preview.width=source.width;preview.height=source.height;preview.getContext('2d').drawImage(source,0,0);
    $('.dialog-art').replaceChildren(preview);
    $('.dialog-art').style.backgroundColor=card.dataset.project==='attention'?'#d5d3c8':'#171a16';
    dialog.showModal();document.body.style.overflow='hidden';$('.dialog-close').focus({preventScroll:true});
  }));
  $('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{
    if(event.target!==dialog)return;
    const r=dialog.getBoundingClientRect();
    if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();
  });
  dialog.addEventListener('close',()=>{document.body.style.overflow='';});
})();
