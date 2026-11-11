var cats=[["الكل","all"],["هويات تجارية","id",[13,14,15,16,17,18,19,20,21]],["بروفايل شركات","pr",[22]],["هدايا دعائية","gf",[23,24,25]],["تغليف وعلب","bx",[26,27,28,29]],["أكياس وشنط","bg",[30]],["لوحات وإعلانات","sg",[31,32,33,34,35]],["تسويق إلكتروني","sm",[36,37,38]]];
var items=[];cats.slice(1).forEach(function(c){c[2].forEach(function(n){items.push({n:n,c:c[1],t:c[0]})})});
var g=document.getElementById('gallery'),f=document.getElementById('filters'),lb=document.getElementById('lb');
function pad(n){return n<10?'0'+n:''+n}
function render(k){g.innerHTML='';items.filter(function(i){return k=='all'||i.c==k}).forEach(function(i){var a=document.createElement('figure');a.innerHTML='<img loading="lazy" src="images/p-'+pad(i.n)+'.jpg" alt="'+i.t+'"><figcaption>'+i.t+'</figcaption>';a.onclick=function(){lb.querySelector('img').src='images/p-'+pad(i.n)+'.jpg';lb.classList.add('open')};g.appendChild(a)})}
cats.forEach(function(c,ix){var b=document.createElement('button');b.textContent=c[0];if(!ix)b.className='on';b.onclick=function(){[].forEach.call(f.children,function(x){x.className=''});b.className='on';render(c[1])};f.appendChild(b)});
render('all');document.getElementById('y').textContent=new Date().getFullYear();
document.querySelectorAll('nav a').forEach(function(a){a.onclick=function(){document.body.classList.remove('menu')}});
