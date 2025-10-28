document.getElementById('year').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:0.16});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const id=a.getAttribute('href').slice(1),el=document.getElementById(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'})}})});
