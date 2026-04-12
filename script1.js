function startSession(name) {

  alert("You are now with " + Haya + " 💛");
}
////////////


//تغيير اللغة
 function setLanguage(lang) {
  currentLang = lang; // 🔥 هذا أهم سطر
  const elements = document.querySelectorAll("[data-ar]");

  elements.forEach(el => {
    el.innerText = el.getAttribute(`data-${lang}`);
  });

  // تغيير الاتجاه
  if (lang === "ar") {
    document.body.style.direction = "rtl";
  } else {
    document.body.style.direction = "ltr";
  }
}
////////
let currentLang = "ar";
setLanguage("ar");
////////////////////
function setLanguage(lang) {
  currentLang = lang;

  const elements = document.querySelectorAll("[data-ar]");

  elements.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (!text) return;

    if (el.tagName === "TEXTAREA") {
      el.placeholder = text; // ✅ الحل الحقيقي
    } else {
      el.innerText = text;
    }
  });

  document.body.style.direction = lang === "ar" ? "rtl" : "ltr";
}




/*start*/

const popup = document.getElementById("popup");
const buttons = document.querySelectorAll(".card button");
const closeBtn = document.querySelector(".close-btn");

const title = document.getElementById("popup-title");
const text = document.getElementById("popup-text");

const duration = document.getElementById("popup-duration");
const price = document.getElementById("popup-price");

let sessions = {
  relax: {
    title:{
      ar:"🌿جلسة روق بالك",
      en:"🌿 Relax Session"
    },
    text:{
      ar:"خد نفس عميق.. إنت بخير وبأمان.🌸",
      en: "Take a deep breath... you are safe 🌸"
    },
    price: "$30",
    duration:{
      ar:"1 ساعة",
      en:"1 hour"
    } 
  },
  friend: {
    title:{
      ar:"رفيق متفهم 🤝",
      en:"🤝 Understanding Friend"
    },
    text:{
      ar:"أنا هنا عشان أسمعك 🤍",
      en:"I'm here to listen 🤍"
    },
    price: "$20",
    duration:{
      ar:"30دقيقه",
      en:"30 min"
    } 
  },
  alone: {
    title:{
      ar:"إنت مو لحالك🧡",
      en:"💛 You're Not Alone"
    },
    text:{
      ar:"إنت مش لوحدك 🌿",
      en:"You are not alone 🌿"
    },
    price: "$30",
    duration:{
      ar:"1 ساعة",
      en:"1 hour"
    }
  },
  calm: {
    title:{
      ar:"هداوة بال.. نصيحه وكلام يفيدك.",
      en:"🧘 Calm & Advice"
    },
    text:{
      ar:"أنا هنا.. قولي اللي في بالك 😌",
      en:"I'm here tell me what in your mind😌"
    },
    price: "$40",
    duration:{
      ar:"2 ساعة",
      en:"2 hours"
    }
  },
  nana: {
    title:{
      ar:"🌿 نانا - قعدة رايقة",
      en:"🌿 Nana - Calm Session"
    },
    text:{
      ar:"إنت هون وبأمان.. خِدلك نفس، أنا معك وما رح خليك لحالك 💓",
      en:"You are safe here. Take a breath. You are not alone.💓"
    },
    price: "$25.9",
    duration:{
      ar:"50 دقيقة",
      en:"50 min"
    }  
  },
  haya: {
    title:{
      ar:"🌸 هيا - الصديقة اللي تفهمكي",
      en:"🌸 Haya - Understanding Friendbr"
    },
    text:{
      ar:"أنا جنبك وأسمعك.. احكي اللي بدك اياه وخد راحتك ع الآخر 💕",
      en:"I’m here to listen. You can talk freely.💕"
    },
    price: "$20",
    duration:{
      ar:"30دقيقه",
      en: "30 min"
    }
  },
  hadi: {
    title:{
      ar:"🤝 هادي - جنبك وسندك",
      en:"🤝 Hadi - Support & Strength"
    },
    text:{
      ar:"إنت أقوى بكتير مما بتتخيل.. خلينا نكمل الطريق سوا وما نوقف ✨",
      en:"You are stronger than you think. Let’s keep going together.✨"
    },
    price: "$5",
    duration:{
      ar:"30دقيقه",
      en:"30 min"
    } 
  }

};




// فتح popup

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-session");

    if (!sessions[key]) {
      alert("Session not found!");
      return;
    }

    const session = sessions[key];

    currentSession = session; // 🔥 مهم جدًا

    title.innerText = session.title[currentLang];
    text.innerText = session.text[currentLang];
    duration.innerText = "⏱ " + session.duration[currentLang];
    price.innerText = "💰 " + session.price;

    popup.style.display = "flex";
    document.body.classList.add("no-scroll");
  });
});

//إرسال الى الواتس 

/////////////
function sendToWhatsApp() {
  let messageInput = document.getElementById("userMessage").value;

  let message = currentLang === "ar"
    ? `مرحبا 👋
أرغب بحجز جلسة:

🧘 الجلسة: ${currentSession.title.ar}
⏱ المدة: ${currentSession.duration.ar}
💰 السعر: ${currentSession.price}

💬 رسالتي:
${messageInput}`
    
    : `Hello 👋
I want to book a session:

🧘 Session: ${currentSession.title.en}
⏱ Duration: ${currentSession.duration.en}
💰 Price: ${currentSession.price}

💬 My message:
${messageInput}`;

  let url = `https://wa.me/9627xxxxxxxx?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// إغلاق popup
closeBtn.addEventListener("click", () => {
  popup.style.display = "none"
  document.body.classList.remove("no-scroll");
});

// إغلاق عند الضغط خارج النافذة
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none"
    document.body.classList.remove("no-scroll");
  }
});




