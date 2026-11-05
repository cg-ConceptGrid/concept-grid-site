/* Edit the image paths below. Remove a project by setting visible:false or deleting its object. */
const OLD_SITE_ASSETS = "https://raw.githubusercontent.com/cg-ConceptGrid/concept-grid-website/main/assets/projects/";
window.CG_CONTENT = {
  contact:{phoneDisplay:"+20 100 320 9239",phoneDigits:"201003209239",email:"cg.official.co@gmail.com",behance:"https://www.behance.net/tarekhunter"},
  hero:{image:OLD_SITE_ASSETS+"1.jpeg",insetImage:OLD_SITE_ASSETS+"2.jpeg",title:{en:"FACADE SYSTEMS",ar:"أنظمة الواجهات"}},
  aboutImage:OLD_SITE_ASSETS+"3.jpg",
  services:[
    {number:"01",title:{en:"FACADE CLADDING",ar:"واجهات الكلادينج"},description:{en:"Cladding systems, detailing and installation for distinctive building exteriors.",ar:"تصميم وتفصيل وتنفيذ وتركيب أنظمة الكلادينج للواجهات المعمارية."},icon:"facade"},
    {number:"02",title:{en:"ILLUMINATED LETTERS",ar:"الحروف المضيئة"},description:{en:"3D acrylic and metal letters with professional lighting and finishing.",ar:"حروف بارزة من الأكريليك والمعادن بإضاءة وتشطيبات احترافية."},icon:"letters"},
    {number:"03",title:{en:"ARCHITECTURAL BRANDING",ar:"الهوية المعمارية"},description:{en:"Signage and visual identity integrated with the building architecture.",ar:"لافتات وهوية بصرية متكاملة مع التصميم المعماري للمبنى."},icon:"branding"},
    {number:"04",title:{en:"CREATIVE DESIGN",ar:"التصميم الإبداعي"},description:{en:"Concept development, material selection and design direction.",ar:"تطوير الأفكار واختيار الخامات وتحديد الاتجاه التصميمي للمشروع."},icon:"design"},
    {number:"05",title:{en:"SHOP DRAWINGS",ar:"الرسومات التنفيذية"},description:{en:"Technical drawings, dimensions and fabrication-ready detailing.",ar:"رسومات فنية وأبعاد وتفاصيل جاهزة للتصنيع والتنفيذ بالموقع."},icon:"drawings"},
    {number:"06",title:{en:"FABRICATION & EXECUTION",ar:"التصنيع والتنفيذ"},description:{en:"Production, site coordination, installation and final delivery.",ar:"التصنيع والتنسيق بالموقع والتركيب والتسليم النهائي."},icon:"execution"}
  ],
  process:[
    {number:"01",title:{en:"DISCOVER",ar:"نفهم المشروع"},description:{en:"Understand the site, brand, goals and technical requirements.",ar:"فهم الموقع والهوية والأهداف والاشتراطات الفنية."}},
    {number:"02",title:{en:"DESIGN",ar:"نصمم"},description:{en:"Develop the concept, materials, details and visual direction.",ar:"تطوير الفكرة والخامات والتفاصيل والاتجاه البصري."}},
    {number:"03",title:{en:"ENGINEER",ar:"نجهز للتنفيذ"},description:{en:"Prepare shop drawings, fabrication details and coordination.",ar:"إعداد الرسومات التنفيذية وتفاصيل التصنيع والتنسيق."}},
    {number:"04",title:{en:"EXECUTE",ar:"ننّفذ"},description:{en:"Fabricate, install and deliver with attention to every detail.",ar:"التصنيع والتركيب والتسليم مع الاهتمام بكل التفاصيل."}}
  ],
  projects:[
    {id:"facade-cladding",visible:true,title:{en:"FACADE CLADDING",ar:"واجهات كلادينج"},category:{en:"FACADE SYSTEMS",ar:"أنظمة واجهات"},image:OLD_SITE_ASSETS+"1.jpeg",layout:"wide",alt:"Facade cladding project"},
    {id:"illuminated-letters",visible:true,title:{en:"ILLUMINATED LETTERS",ar:"حروف مضيئة"},category:{en:"3D SIGNAGE",ar:"لافتات ثلاثية الأبعاد"},image:OLD_SITE_ASSETS+"2.jpeg",layout:"medium",alt:"Illuminated signage project"},
    {id:"exhibition-booth",visible:true,title:{en:"EXHIBITION SPACES",ar:"مساحات المعارض"},category:{en:"EXHIBITION DESIGN",ar:"تصميم أجنحة المعارض"},image:OLD_SITE_ASSETS+"3.jpg",layout:"third",alt:"Exhibition design project"},
    {id:"cladding-pergola",visible:true,title:{en:"CLADDING PERGOLA",ar:"برجولة كلادينج"},category:{en:"ARCHITECTURAL BRANDING",ar:"هوية معمارية"},image:OLD_SITE_ASSETS+"4.jpeg",layout:"third",alt:"Cladding pergola project"},
    {id:"canopy",visible:true,title:{en:"CANOPY & STRUCTURES",ar:"مظلات وهياكل"},category:{en:"CLADDING EXECUTION",ar:"تنفيذ كلادينج"},image:OLD_SITE_ASSETS+"5.jpeg",layout:"third",alt:"Canopy cladding project"},
    {id:"kiosk",visible:true,title:{en:"RETAIL KIOSK",ar:"كشك تجاري"},category:{en:"RETAIL BRANDING",ar:"هوية تجارية"},image:OLD_SITE_ASSETS+"6.jpeg",layout:"third",alt:"Retail kiosk project"},
    {id:"next-and-go",visible:true,title:{en:"NEXT & GO",ar:"نكست آند جو"},category:{en:"SIGNAGE & IDENTITY",ar:"لافتات وهوية"},image:OLD_SITE_ASSETS+"7.jpeg",layout:"medium",alt:"Next and Go project"},
    {id:"car-service",visible:true,title:{en:"CAR SERVICE CENTER",ar:"مركز خدمة سيارات"},category:{en:"COMMERCIAL BRANDING",ar:"هوية تجارية"},image:OLD_SITE_ASSETS+"8.jpeg",layout:"wide",alt:"Car service branding project"}
  ]
};