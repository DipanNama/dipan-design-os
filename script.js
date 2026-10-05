(function(){
if(/[?&]shot/.test(location.search)){var st=document.createElement('style');st.textContent='*{transition:none!important}';document.head.appendChild(st)}
var d=document,r=d.documentElement;r.classList.add('js');
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
// theme
d.getElementById('theme').onclick=function(){var t=r.dataset.theme==='dark'?'light':'dark';r.dataset.theme=t;try{localStorage.setItem('ddos-theme',t)}catch(e){}};
// skeleton -> ready
d.querySelectorAll('.skel').forEach(function(s){var i=s.querySelector('img');function ok(){s.classList.add('ready')}if(i.complete)ok();else{i.addEventListener('load',ok);i.addEventListener('error',ok)}});
// reveal
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px -6% 0px'});
if(/[?&]shot/.test(location.search))d.querySelectorAll('.reveal').forEach(function(e){e.style.transition='none';e.classList.add('in')});
d.querySelectorAll('.reveal:not(.pg)').forEach(function(el){io.observe(el)});
// fans: observe the container, since off-screen pages are clipped and never intersect
var fio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.querySelectorAll('.pg').forEach(function(p){p.classList.add('in')});fio.unobserve(e.target)}})},{threshold:.25});
d.querySelectorAll('.fan').forEach(function(f){if(/[?&]shot/.test(location.search))f.querySelectorAll('.pg').forEach(function(p){p.style.transition='none';p.classList.add('in')});else fio.observe(f)});
// number ticker
var nio=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;nio.unobserve(e.target);var el=e.target,to=+el.dataset.to,t0=performance.now();
if(reduce||/[?&]shot/.test(location.search)){el.textContent=to;return}
(function f(t){var p=Math.min(1,(t-t0)/1400),v=1-Math.pow(1-p,3);el.textContent=Math.round(to*v);if(p<1)requestAnimationFrame(f)})(t0)})},{threshold:.5});
d.querySelectorAll('.num').forEach(function(n){nio.observe(n)});

// annotations toggle
var ann=d.getElementById('ann'),hero=d.getElementById('top');
ann.addEventListener('change',function(){hero.dataset.ann=ann.checked?'on':'off'});
// copy
var cb=d.getElementById('copy');cb.onclick=function(){var v=d.getElementById('cp').value;(navigator.clipboard?navigator.clipboard.writeText(v):Promise.reject()).catch(function(){}).then(function(){cb.textContent='Copied';setTimeout(function(){cb.textContent='Copy path'},1600)})};
})();
