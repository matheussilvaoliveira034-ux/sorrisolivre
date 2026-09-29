const $=id=>document.getElementById(id);
const slot=(k,n,cls="")=>`<div class="slot ${cls}" data-img="${k}" data-name="${n}"></div>`;

$("mq").innerHTML=(t=>t+t)([
  "Implantes dentários", "Clareamento a laser", "Lentes de contato dental", 
  "Ortodontia (Aparelhos)", "Próteses dentárias", "Endodontia (Canal)", 
  "Periodontia", "Clínica Odontológica Sorriso Livre"
].map(x=>`<span>${x}</span>`).join(""));

const pair=(a,d,n)=>`<div class="pair">${slot(a,n+" – ANTES")}${slot(d,n+" – DEPOIS")}</div>`;

$("ba").innerHTML=[
  ["Reabilitação estética com lentes de contato"],
  ["Correção ortodôntica alinhada"],
  ["Implantes dentários fixos"],
  ["Clareamento dental de alto impacto"]
].map((c,i)=>`<div class="bc"><span class="badge">Antes e depois</span>${pair("ad"+(i+1)+"_antes","ad"+(i+1)+"_depois","CASO "+(i+1))}<div class="cap">${c[0]}</div></div>`).join("");

$("tg").innerHTML=[
  ["Implantes Dentários", "Substituição segura de dentes ausentes com pinos de titânio e próteses fixas altamente estéticas."],
  ["Ortodontia", "Correção do posicionamento dos dentes e maxilares com aparelhos tradicionais ou estéticos invisíveis."],
  ["Lentes de Contato Dental", "Finas películas de porcelana para transformar o formato, cor e alinhamento do sorriso de forma definitiva."],
  ["Clareamento Dental", "Técnicas avançadas a laser ou caseiras supervisionadas para um sorriso muito mais branco e brilhante."],
  ["Endodontia (Canal)", "Tratamento especializado da polpa dentária com tecnologia moderna para eliminar dores com conforto."],
  ["Próteses Dentárias", "Reposição de dentes perdidos devolvendo a estética, a mastigação e a harmonia facial."],
  ["Periodontia", "Prevenção e tratamento de gengivites, periodontites e cuidados com a saúde das gengivas."],
  ["Odontologia Preventiva", "Limpezas profissionais (profilaxia), orientações e exames periódicos para evitar problemas futuros."]
].map((c,i)=>`<div class="tc">${slot("trat"+(i+1),"TRATAMENTO "+(i+1))}<div class="b"><h3>${c[0]}</h3><p>${c[1]}<\/p><a href="#">Saber mais →</a></div></div>`).join("");

$("rg").innerHTML=[
  ["Harmonização do sorriso e auto-estima renovada"],
  ["Correção completa da oclusão e mordida"],
  ["Sorriso branco, natural e saudável"]
].map((c,i)=>`<div class="bc"><span class="badge">Resultado</span>${pair("res"+(i+1)+"_antes","res"+(i+1)+"_depois","RESULTADO "+(i+1))}<div class="cap">${c}</div></div>`).join("");

$("ag").innerHTML=[
  ["Mariana Souza","MS","2 meses atrás","Equipe maravilhosa! Fiz lentes de contato e o resultado superou todas as minhas expectativas. Super recomendo."],
  ["Carlos Eduardo","CE","2 meses atrás","Atendimento impecável, clínica muito limpa e dentistas extremamente cuidadosos. Zero dor!"],
  ["Beatriz Lima","BL","um mês atrás","A melhor clínica odontológica que já frequentei. Profissionais atenciosos e ambiente acolhedor."],
  ["Lucas Gabriel","LG","um mês atrás","Fiz meu tratamento de canal e ortodontia aqui. Excelente qualidade e pontualidade."],
  ["Camila Martins","CM","2 meses atrás","Atendimento nota 10! Explicam todo o procedimento detalhadamente."],
  ["Rafael Santos","RS","um mês atrás","Recomendo demais! Meu sorriso ficou perfeito."]
].map(r=>`<div class="rv"><div class="h"><div class="av">${r[1]}</div><div><b style="font-weight:500;font-size:14px">${r[0]}</b><small>${r[2]}</small></div></div><div class="s">★★★★★</div><p>${r[3]}</p><em><b>G</b>Avaliação do Google</em></div>`).join("");

$("wg").innerHTML=[
  ["👥","Equipe multidisciplinar","Especialistas em todas as áreas da medicina dentária reunidos num só lugar para cuidar de si."],
  ["♡","Atendimento humanizado","Foco total no conforto do paciente, com técnicas modernas para tratamentos sem ansiedade ou dor."],
  ["☰","Avaliação detalhada","Diagnóstico preciso e planeamento digital do seu novo sorriso antes de iniciar qualquer procedimento."],
  ["＋","Tecnologia de ponta","Equipamentos modernos que garantem maior precisão, rapidez e segurança nos tratamentos."],
  ["∿","Estética e funcionalidade","Tratamentos que unem a beleza do sorriso com a perfeita saúde mastigatória."],
  ["⌖","Localização de fácil acesso","Espaço planejado para oferecer total comodidade durante as suas consultas."]
].map(c=>`<div class="wc"><i>${c[0]}</i><h3>${c[1]}</h3><p>${c[2]}</p></div>`).join("");

/* aplica imagens */
document.querySelectorAll("[data-img]").forEach(e=>{const s=IMG[e.dataset.img];
 if(s){e.classList.add("has");e.innerHTML=`<img src="${s}" alt="${e.dataset.name}">`}
 else e.innerHTML=`<span>📷 ${e.dataset.name}<br><small style="font-weight:400">IMG.${e.dataset.img}</small></span>`});
document.querySelectorAll(".wpp").forEach(a=>a.href=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG)}`);

/* ============ EFEITOS ============ */
const hd=document.querySelector("header"),nv=document.querySelector("nav"),bg=$("bg");
addEventListener("scroll",()=>hd.classList.toggle("sc",scrollY>10),{passive:true});
const closeM=()=>{nv.classList.remove("open");bg.classList.remove("x")};
bg.onclick=()=>{nv.classList.toggle("open");bg.classList.toggle("x")};
nv.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeM));
addEventListener("resize",()=>innerWidth>820&&closeM());

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -40px 0px"});
document.querySelectorAll(".eyebrow,h2,.sub,.hero h1,.hero p,.hb,.chk,.hi,.fr,.sg>div,.st,.bc,.tc,.rv,.wc,.dif,.cta,.rg+a").forEach(e=>{
 e.classList.add("fx");const i=[...e.parentElement.children].indexOf(e);e.style.transitionDelay=Math.min(i,5)*90+"ms";io.observe(e)});

const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);
 const t=e.target.textContent,n=parseInt(t),suf=t.replace(/[0-9]/g,"");let s=null;
 const f=ts=>{s=s||ts;const p=Math.min((ts-s)/1200,1);e.target.textContent=Math.round(n*(1-Math.pow(1-p,3)))+suf;p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)}));
document.querySelectorAll(".st b").forEach(b=>co.observe(b));

const ids=["inicio","sobre","tratamentos","diferencial","resultados","contato"],links=[...nv.querySelectorAll("a")];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle("on",l.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
ids.forEach(i=>$(i)&&so.observe($(i)));