// Simple bilingual content manager (ES/EN)
const strings = {
  es: {
    nav_services: "Servicios",
    nav_about: "Sobre mí",
    nav_contact: "Contacto",
    hero_title: "Un acompañamiento para toda tu lactancia.",
    hero_sub: "Desde la preparación antes de la llegada de tu bebé hasta el destete, con cercanía, calma y basado en la evidencia científica.",
    hero_cta: "Pide cita",
    hero_cta2: "Ver servicios",
    services_title: "Servicios",
    services_sub: "Sesiones presenciales y online tanto individuales como en grupo.",
    svc_1_title: "Consulta a domicilio",
    svc_1_desc: "Visita a domicilio para cuidar y apoyar el bienestar del binomio madre-bebé. Evaluación práctica y acompañamiento integral.",
    svc_2_title: "Consulta online",
    svc_2_desc: "Acompañamiento integral por videollamada, con orientación práctica, seguimiento y apoyo emocional desde casa.",
    svc_3_title: "Apoyo preparto y postparto",
    svc_3_desc: "Preparación a la lactancia, acompañamiento emocional y recursos para los primeros meses.",
    svc_4_title: "Talleres y formación",
    svc_4_desc: "Preparación a la lactancia, acompañamiento emocional y recursos para los primeros meses.",
    about_svc_4_point1:"Preparación a la lactancia",
    about_svc_4_point2:"Tribu",
    about_svc_4_point3:"Banco de leche",
    about_svc_4_point4:"Destete",
    about_title: "Sobre mí",
    about_desc: "Hola, soy Nerea Yarzabal.<br><br> Soy enfermera con más de 10 años de experiencia y madre de dos hijos. Durante el embarazo de mi primer bebé creía que, por mi formación y experiencia, sabía lo suficiente para tener una lactancia fácil y exitosa. Sin embargo, el comienzo fue duro, lleno de dudas y dificultades. <br><br> Esa vivencia me hizo comprender lo importante que es contar con un buen apoyo profesional, alguien que escuche, acompañe y ofrezca herramientas basadas en la evidencia. Ver a mi alrededor cómo muchas madres pasaban por lo mismo me impulsó a formarme como consultora de lactancia, para poder acompañar a otras mujeres y familias desde la comprensión, la empatía y el conocimiento actualizado. <br><br> Hoy dedico mi trabajo a ayudar a las madres a vivir su lactancia y maternidad con confianza, serenidad y bienestar.",
    about_point1: "Consultas presenciales",
    about_point2: "Sesiones online",
    about_point3: "Talleres y formación",
    contact_title: "Contacto",
    contact_sub: "Reserva una cita o cuéntanos tu caso.",
    contact_book: "Reservas",
    contact_phone: "Tel: +34 664 471 740",
    form_name: "Nombre",
    form_email: "Email",
    form_message: "Mensaje",
    form_submit: "Enviar",
    footer_rights: "Todos los derechos reservados"
  },
  en: {
    nav_services: "Services",
    nav_about: "About",
    nav_contact: "Contact",
    hero_title: "Breastfeeding support for families",
    hero_sub: "Professional, warm, evidence-based support.",
    hero_cta: "Book a visit",
    hero_cta2: "See services",
    services_title: "Our services",
    services_sub: "In-home and online sessions, help for feeding issues, pumping support and more.",
    svc_1_title: "In-home consult",
    svc_1_desc: "Hands-on evaluation at your home, help with positioning and latch.",
    svc_2_title: "Online consult",
    svc_2_desc: "Video session for follow-up and practical tips.",
    svc_3_title: "Postpartum support",
    svc_3_desc: "Emotional support and resources for the first months.",
    about_title: "About me",
    about_desc: "I am a certified lactation consultant with experience supporting families, mixed feeding and pumping. I offer in-person and online support.",
    about_point1: "In-person consultations",
    about_point2: "Online sessions",
    about_point3: "Workshops & training",
    contact_title: "Contact",
    contact_sub: "Book an appointment or tell us about your case.",
    contact_book: "Bookings",
    contact_phone: "Tel: +34 664 471 740",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message",
    form_submit: "Send",
    footer_rights: "All rights reserved"
  }, 
  eus: {
  nav_services: "Zerbitzuak",
  nav_about: "Nire berri",
  nav_contact: "Kontaktua",
  hero_title: "Edoskitzaroaren laguntza familientzat",
  hero_sub: "Laguntza profesionala, hurbila eta ebidentzietan oinarritua.",
  hero_cta: "Hitzordua eskatu",
  hero_cta2: "Ikusi zerbitzuak",
  services_title: "Gure zerbitzuak",
  services_sub: "Aurrez aurreko eta online saioak, zailtasunak dituzten haurrentzako aholkularitza, esne-ateratzea eta gehiago.",
  svc_1_title: "Etxez etxeko kontsulta",
  svc_1_desc: "Etxean bertan ebaluazio praktikoa, jarreraren, zupatzearen eta edoskitzearen teknikaren laguntza.",
  svc_2_title: "Online kontsulta",
  svc_2_desc: "Bideo bidezko saioa jarraipenerako eta aholku praktikoetarako.",
  svc_3_title: "Erditu ondorengo laguntza",
  svc_3_desc: "Laguntza emozionala eta lehen hilabeteetarako baliabideak.",
  about_title: "Nire berri",
  about_desc: "Edoskitzearen aholkulari ziurtatua naiz, familiei laguntzen esperientzia handiarekin, edoskitzaro mistoan eta esne-ateratzean. Aurrez aurre eta online lan egiten dut.",
  about_point1: "Aurrez aurreko kontsultak",
  about_point2: "Online saioak",
  about_point3: "Tailerrak eta prestakuntza",
  contact_title: "Kontaktua",
  contact_sub: "Eskatu hitzordua edo kontatu zure kasua.",
  contact_book: "Erreserbak",
  contact_phone: "Tel: +34 664 471 740",
  form_name: "Izena",
  form_email: "Emaila",
  form_message: "Mezua",
  form_submit: "Bidali",
  footer_rights: "Eskubide guztiak erreserbatuta"
}

};

function setLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(strings[lang] && strings[lang][key]){
      el.innerHTML  = strings[lang][key];
    }
  });
  document.querySelectorAll('.lang').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  localStorage.setItem('site_lang', lang);
}

// init language
const saved = localStorage.getItem('site_lang') || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'es');
setLang(saved);

// bind buttons
document.querySelectorAll('.lang').forEach(b=>{
  b.addEventListener('click', ()=> setLang(b.dataset.lang));
});

// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// simple contact form handler (example)
// NOTE: replace with real backend or service like Formspree / Netlify Forms for production
function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const result = document.getElementById('formResult');

  // Very simple client-only feedback
  if(!name || !email || !message){
    result.textContent = "Por favor completa todos los campos.";
    return;
  }

  // In production: send to server or 3rd-party form endpoint.
  result.textContent = "Gracias — tu mensaje ha sido recibido (ejemplo).";
  e.target.reset();
}
