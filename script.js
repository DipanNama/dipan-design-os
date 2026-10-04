(function(){
if(/[?&]shot/.test(location.search)){var st=document.createElement('style');st.textContent='*{transition:none!important}';document.head.appendChild(st)}
var d=document,r=d.documentElement;r.classList.add('js');
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
// theme
d.getElementById('theme').onclick=function(){var t=r.dataset.theme==='dark'?'light':'dark';r.dataset.theme=t;try{localStorage.setItem('ddos-theme',t)}catch(e){}};
// drawer
var dr=d.getElementById('drawer'),mb=d.getElementById('menu');
function tog(o){dr.classList.toggle('open',o);dr.setAttribute('aria-hidden',!o);mb.setAttribute('aria-expanded',o)}
mb.onclick=function(){tog(true)};d.getElementById('close').onclick=function(){tog(false)};
dr.querySelectorAll('a').forEach(function(a){a.onclick=function(){tog(false)}});
d.addEventListener('keydown',function(e){if(e.key==='Escape')tog(false)});
// skeleton -> ready
d.querySelectorAll('.skel').forEach(function(s){var i=s.querySelector('img');function ok(){s.classList.add('ready')}if(i.complete)ok();else{i.addEventListener('load',ok);i.addEventListener('error',ok)}});
// reveal
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
if(/[?&]shot/.test(location.search))d.querySelectorAll('.reveal').forEach(function(e){e.style.transition='none';e.classList.add('in')});
d.querySelectorAll('.reveal').forEach(function(el,i){el.style.transitionDelay=(i%3)*70+'ms';io.observe(el)});
// number ticker
var nio=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;nio.unobserve(e.target);var el=e.target,to=+el.dataset.to,t0=performance.now();
if(reduce){el.textContent=to;return}
(function f(t){var p=Math.min(1,(t-t0)/1400),v=1-Math.pow(1-p,3);el.textContent=Math.round(to*v);if(p<1)requestAnimationFrame(f)})(t0)})},{threshold:.5});
d.querySelectorAll('.num').forEach(function(n){nio.observe(n)});
// rotating word
var w=d.getElementById('rot'),words=['landing pages','SaaS products','component libraries','docs sites','portfolios'],k=0;
if(!reduce&&!/[?&]shot/.test(location.search))setInterval(function(){w.classList.add('out');setTimeout(function(){k=(k+1)%words.length;w.textContent=words[k];w.classList.remove('out');w.classList.add('in');void w.offsetWidth;w.classList.remove('in')},450)},2600);
// flickering grid
var c=d.getElementById('flicker'),x=c.getContext('2d'),cells=[],S=14,G=4,W,H,cols,rows;
function col(){return getComputedStyle(r).getPropertyValue('--acc').trim()}
function size(){var b=c.getBoundingClientRect(),dp=Math.min(devicePixelRatio||1,2);W=b.width;H=b.height;c.width=W*dp;c.height=H*dp;x.setTransform(dp,0,0,dp,0,0);cols=Math.ceil(W/(S+G));rows=Math.ceil(H/(S+G));cells=[];for(var i=0;i<cols*rows;i++)cells.push(Math.random()*.25)}
function draw(){x.clearRect(0,0,W,H);x.fillStyle=col();for(var i=0;i<cells.length;i++){if(!reduce&&Math.random()<.004)cells[i]=Math.random()*.5;x.globalAlpha=cells[i]*.55;x.fillRect((i%cols)*(S+G),Math.floor(i/cols)*(S+G),S,S)}x.globalAlpha=1}
size();draw();addEventListener('resize',function(){size();draw()});
if(!reduce){var vis=true;new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(c);(function loop(){if(vis)draw();setTimeout(function(){requestAnimationFrame(loop)},60)})()}
})();
