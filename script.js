(() => {
  "use strict";
  const data=window.CG_CONTENT;
  if(!data)return;
  const i18n={
    en:{
      navServices:"Services",navAbout:"About",navWork:"Selected work",navProcess:"Process",navContact:"Start a project",
      heroEyebrow:"Architectural branding & fabrication",heroLine1:"WE BUILD",heroLine2:"THE FIRST",heroLine3:"IMPRESSION.",
      heroDescription:"Facade systems, illuminated signage and architectural branding — designed with intent, engineered for impact, and executed with precision.",
      heroButton:"Explore our work",heroLink:"What we do",heroFootnote:"From concept to execution",heroImageLabel:"FEATURED PROJECT",
      servicesEyebrow:"What we do",servicesTitle:"BUILT TO<br><em>BE SEEN.</em>",servicesIntro:"One integrated partner across design, fabrication and on-site execution.",
      aboutEyebrow:"The Concept Grid approach",aboutTitle:"ARCHITECTURE<br>MEETS <em>IDENTITY.</em>",aboutLead:"We transform commercial spaces into recognizable landmarks.",
      aboutBody:"CONCEPT GRID is a design and fabrication company specializing in facade cladding, illuminated signage and architectural branding. We connect creative thinking with technical detailing, material knowledge and real-world execution.",
      aboutLink:"See how we work",processEyebrow:"How we work",processTitle:"FROM FIRST IDEA<br>TO FINAL DETAIL.",
      processIntro:"A clear, connected process that takes the project from the first conversation to installation.",
      workEyebrow:"Selected projects",workTitle:"WORK THAT<br><em>SPEAKS.</em>",workIntro:"A selection of spaces, structures and identities brought to life through design and execution.",
      workFootnote:"Selected projects / more work coming into focus",workLink:"Discuss your project",
      contactEyebrow:"Let's build something distinct",contactTitle:"MAKE YOUR<br>FIRST IMPRESSION<br><em>COUNT.</em>",
      contactDescription:"Tell us about your space, your project or your next big idea.",contactWhatsapp:"WhatsApp / Call",
      contactButton:"Start a conversation",footerStatement:"DESIGN / FABRICATION / EXECUTION",footerRights:"All rights reserved.",backToTop:"Back to top ↑"
    },
    ar:{
      navServices:"خدماتنا",navAbout:"من نحن",navWork:"أعمال مختارة",navProcess:"منهج العمل",navContact:"ابدأ مشروعك",
      heroEyebrow:"الهوية المعمارية والتصنيع",heroLine1:"نصنع",heroLine2:"الانطباع",heroLine3:"الأول.",
      heroDescription:"أنظمة واجهات، وحروف مضيئة، وهوية معمارية — بتصميم مدروس، وتفاصيل فنية، وتنفيذ دقيق.",
      heroButton:"استكشف أعمالنا",heroLink:"خدماتنا",heroFootnote:"من الفكرة إلى التنفيذ",heroImageLabel:"مشروع مختار",
      servicesEyebrow:"ماذا نقدم",servicesTitle:"تصميم يستحق<br><em>أن يُرى.</em>",servicesIntro:"شريك متكامل يجمع بين التصميم والتصنيع والتنفيذ في الموقع.",
      aboutEyebrow:"منهج كونسبت جريد",aboutTitle:"العمارة تلتقي<br><em>بالهوية.</em>",aboutLead:"نحوّل المساحات التجارية إلى علامات يسهل تمييزها.",
      aboutBody:"CONCEPT GRID شركة متخصصة في التصميم والتصنيع، تعمل في واجهات الكلادينج والحروف المضيئة والهوية المعمارية. نجمع بين التفكير الإبداعي والتفاصيل الفنية وفهم الخامات والتنفيذ على أرض الواقع.",
      aboutLink:"اكتشف طريقة عملنا",processEyebrow:"كيف نعمل",processTitle:"من أول فكرة<br>إلى آخر تفصيلة.",
      processIntro:"خطوات واضحة ومترابطة تنقل المشروع من أول نقاش وحتى التركيب والتسليم.",
      workEyebrow:"مشاريع مختارة",workTitle:"أعمال تتحدث<br><em>عن نفسها.</em>",workIntro:"مجموعة من المساحات والهياكل والهويات التي تحولت إلى واقع من خلال التصميم والتنفيذ.",
      workFootnote:"مشاريع مختارة / المزيد من الأعمال قريباً",workLink:"ناقش مشروعك",
      contactEyebrow:"لنصنع شيئاً مميزاً",contactTitle:"اجعل انطباعك<br>الأول<br><em>لا يُنسى.</em>",
      contactDescription:"احكِ لنا عن مساحتك أو مشروعك أو فكرتك القادمة.",contactWhatsapp:"واتساب / اتصال",
      contactButton:"ابدأ محادثة",footerStatement:"تصميم / تصنيع / تنفيذ",footerRights:"جميع الحقوق محفوظة.",backToTop:"العودة للأعلى ↑"
    }
  };
  const icons={
    facade:'<svg viewBox="0 0 24 24"><path d="M4 20V5l8-2 8 2v15M4 9h16M8 9v11M16 9v11M4 14h16"/></svg>',
    letters:'<svg viewBox="0 0 24 24"><path d="M4 19 10 5h4l6 14M7 13h10M3 21h18"/></svg>',
    branding:'<svg viewBox="0 0 24 24"><path d="M4 20V4h16v16H4ZM8 8h8M8 12h8M8 16h4"/></svg>',
    design:'<svg viewBox="0 0 24 24"><path d="m12 3 2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3ZM19 16v5M16.5 18.5h5"/></svg>',
    drawings:'<svg viewBox="0 0 24 24"><path d="M5 3h10l4 4v14H5V3ZM15 3v5h4M8 12h8M8 16h8M8 8h3"/></svg>',
    execution:'<svg viewBox="0 0 24 24"><path d="m4 18 5-5 3 3 8-9M14 7h6v6M4 21h16"/></svg>'
  };
  const $=(s,r=document)=>r.querySelector(s);
  let language=localStorage.getItem("cg-language")||"en";
  const value=v=>v&&typeof v==="object"?(v[language]||v.en||""):(v||"");

  function observeReveals(){
    const nodes=document.querySelectorAll(".reveal:not(.is-visible)");
    if(!("IntersectionObserver"in window)){nodes.forEach(n=>n.classList.add("is-visible"));return;}
    const observer=new IntersectionObserver((entries,obs)=>entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add("is-visible");obs.unobserve(e.target);}
    }),{threshold:.12,rootMargin:"0px 0px -35px 0px"});
    nodes.forEach(n=>observer.observe(n));
  }
  function render(){
    $("#serviceGrid").innerHTML=data.services.map((s,i)=>`<article class="service-card reveal" style="--reveal-delay:${i%3*80}ms"><div class="service-top"><span class="service-number">${s.number} / 06</span><span class="service-mark">${icons[s.icon]||""}</span></div><h3>${value(s.title)}</h3><p>${value(s.description)}</p></article>`).join("");
    $("#processGrid").innerHTML=data.process.map((s,i)=>`<article class="process-step reveal" style="--reveal-delay:${i*90}ms"><span>${s.number}</span><h3>${value(s.title)}</h3><p>${value(s.description)}</p></article>`).join("");
    $("#projectGrid").innerHTML=data.projects.filter(p=>p.visible!==false).map(p=>`<a class="project-card ${p.layout||"third"} reveal" href="#contact" aria-label="${value(p.title)}"><img src="${p.image}" alt="${p.alt||value(p.title)}" loading="lazy" decoding="async"><div class="project-content"><div><span class="project-category">${value(p.category)}</span><h3>${value(p.title)}</h3></div><span class="project-arrow" aria-hidden="true">↗</span></div></a>`).join("");
    observeReveals();
  }
  function applyLanguage(next){
    language=next;localStorage.setItem("cg-language",language);
    document.documentElement.lang=language;document.documentElement.dir=language==="ar"?"rtl":"ltr";
    document.querySelectorAll("[data-i18n]").forEach(n=>{const k=n.dataset.i18n;if(i18n[language][k]!==undefined)n.innerHTML=i18n[language][k];});
    $("#languageToggle").textContent=language==="en"?"AR":"EN";
    $("#languageToggle").setAttribute("aria-label",language==="en"?"Switch to Arabic":"Switch to English");
    $("#heroImageTitle").textContent=value(data.hero.title);
    render();
  }
  function initImages(){$("#heroImage").src=data.hero.image;$("#heroInsetImage").src=data.hero.insetImage;$("#aboutImage").src=data.aboutImage;}
  function initNavigation(){
    const header=$(".site-header"),menu=$("#menuToggle"),nav=$("#navLinks");
    menu.addEventListener("click",()=>{const open=header.classList.toggle("menu-open");menu.setAttribute("aria-expanded",String(open));});
    nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{header.classList.remove("menu-open");menu.setAttribute("aria-expanded","false");}));
    $("#languageToggle").addEventListener("click",()=>applyLanguage(language==="en"?"ar":"en"));
  }
  function initScroll(){
    const progress=$("#scrollProgress"),header=$(".site-header");let busy=false;
    function update(){
      const max=document.documentElement.scrollHeight-innerHeight;
      progress.style.width=(max>0?scrollY/max*100:0)+"%";
      header.classList.toggle("is-scrolled",scrollY>20);
      const visual=$("#heroVisual");
      if(visual&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&innerWidth>760)visual.style.transform=`translateY(${Math.min(scrollY*.045,36)}px)`;
      busy=false;
    }
    addEventListener("scroll",()=>{if(!busy){requestAnimationFrame(update);busy=true;}},{passive:true});update();
  }
  function initCursor(){
    if(matchMedia("(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)").matches)return;
    const dot=$(".cursor-dot"),ring=$(".cursor-outline");let x=0,y=0,rx=0,ry=0;
    addEventListener("mousemove",e=>{x=e.clientX;y=e.clientY;dot.style.opacity=ring.style.opacity="1";dot.style.left=x+"px";dot.style.top=y+"px";});
    function move(){rx+=(x-rx)*.17;ry+=(y-ry)*.17;ring.style.left=rx+"px";ring.style.top=ry+"px";requestAnimationFrame(move);}move();
    document.addEventListener("mouseover",e=>{if(e.target.closest("a,button"))ring.classList.add("is-hover");});
    document.addEventListener("mouseout",e=>{if(e.target.closest("a,button"))ring.classList.remove("is-hover");});
  }
  function initPreloader(){
    const loader=$("#preloader"),bar=$("#loaderBar");let progress=0;
    const timer=setInterval(()=>{progress=Math.min(progress+15+Math.random()*16,92);bar.style.width=progress+"%";},90);
    addEventListener("load",()=>{clearInterval(timer);bar.style.width="100%";setTimeout(()=>loader.classList.add("is-done"),350);},{once:true});
    setTimeout(()=>loader.classList.add("is-done"),2200);
  }
  initImages();initNavigation();initScroll();initCursor();initPreloader();
  $("#currentYear").textContent=new Date().getFullYear();
  applyLanguage(language);
})();