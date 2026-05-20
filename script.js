/* =========================
SCROLL TO TOP ON RELOAD
========================= */

window.onbeforeunload = function () {

  window.scrollTo(0, 0);

};

window.onload = function () {

  setTimeout(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });

  }, 10);

};

/* =========================
NAVBAR SCROLL
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 50);
  }

});

/* =========================
MOBILE MENU
========================= */

/* =========================
MOBILE MENU
========================= */

const hamburger =
  document.querySelector(".hamburger");

const navLinks =
  document.querySelector(".nav-links");

const navMenuLinks =
  document.querySelectorAll(".nav-links a");

if (hamburger && navLinks) {

  /* OPEN / CLOSE MENU */

  hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    /* HAMBURGER TO X */

    hamburger.classList.toggle("open");

  });

  /* CLOSE MENU WHEN LINK CLICK */

  navMenuLinks.forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");

      hamburger.classList.remove("open");

    });

  });

}

/* =========================
ULTRA PREMIUM SCROLL REVEAL
ONLY ON SCROLL DOWN
========================= */

const reveals =
  document.querySelectorAll(".reveal");

const observer =
  new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){

        entry.target.classList.add("active");

      }

    });

  },

  {
    threshold: 0.02
  }

);

reveals.forEach((el)=>{

  observer.observe(el);

});

/* =========================
COUNTER
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 100;

    if (count < target) {

      counter.innerText =
        `${Math.ceil(count + increment)}`;

      setTimeout(updateCounter, 30);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});

/* =========================
MENU FILTER
========================= */

const tabs = document.querySelectorAll(".tab");
const items = document.querySelectorAll(".menu-item");

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(btn =>
      btn.classList.remove("active")
    );

    tab.classList.add("active");

    const filter = tab.dataset.filter;

    items.forEach(item => {

      if (filter === "all") {

        item.style.display = "block";

      } else {

        if (item.classList.contains(filter)) {

          item.style.display = "block";

        } else {

          item.style.display = "none";

        }

      }

    });

  });

});

const luxurySlides = document.querySelectorAll(".review-slide");
const luxuryDots = document.querySelectorAll(".lux-dot");

let luxuryIndex = 0;

function showLuxuryReview(index) {

  luxurySlides.forEach(slide => {
    slide.classList.remove("active");
  });

  luxuryDots.forEach(dot => {
    dot.classList.remove("active");
  });

  luxurySlides[index].classList.add("active");
  luxuryDots[index].classList.add("active");

}

setInterval(() => {

  luxuryIndex++;

  if (luxuryIndex >= luxurySlides.length) {
    luxuryIndex = 0;
  }

  showLuxuryReview(luxuryIndex);

}, 4000);

luxuryDots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    luxuryIndex = index;

    showLuxuryReview(luxuryIndex);

  });

});

/* =========================
EMAIL JS INIT
========================= */

emailjs.init("6C78REhQClXmW5uMn");

/* =========================
CONTACT FORM
========================= */

const form = document.getElementById("form");

if (form) {

  const submitBtn =
    form.querySelector("button");

  /* TOAST MESSAGE */

  const toast =
    document.createElement("div");

  toast.className = "toast-message";

  toast.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>
    Message Sent Successfully
  `;

  document.body.appendChild(toast);

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    /* BUTTON LOADING */

    submitBtn.innerHTML = "Sending...";
    submitBtn.style.pointerEvents = "none";
    submitBtn.style.opacity = "0.7";

    /* SEND EMAIL */

    emailjs.sendForm(
      "service_6m4ckft",
      "template_umyilo7",
      "#form"
    )

      .then(() => {

        submitBtn.innerHTML =
          "Send Message";

        submitBtn.style.pointerEvents =
          "auto";

        submitBtn.style.opacity = "1";

        form.reset();

        /* SHOW SUCCESS */

        toast.classList.add("show");

        setTimeout(() => {

          toast.classList.remove("show");

        }, 3000);

      })

      .catch((error) => {

        console.log(error);

        submitBtn.innerHTML =
          "Send Message";

        submitBtn.style.pointerEvents =
          "auto";

        submitBtn.style.opacity = "1";

        alert("Failed to send message");

      });

  });

}


/* =========================
PREMIUM WHY CARD TILT
========================= */

const whyCards = document.querySelectorAll(".why-card");

whyCards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX =
      ((y - centerY) / 18);

    const rotateY =
      ((centerX - x) / 18);

    card.style.transform = `
  perspective(1000px)
  rotateX(${rotateX * 0.6}deg)
  rotateY(${rotateY * 0.6}deg)
  translateY(-6px)
  scale(1.01)
`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "";

  });

});

/* =========================
BACKGROUND PARALLAX
========================= */

document.addEventListener("mousemove", (e) => {

  const glow1 =
    document.querySelector(".why-bg1");

  const glow2 =
    document.querySelector(".why-bg2");

  if (glow1 && glow2) {

    let x =
      (window.innerWidth - e.pageX * 2) / 90;

    let y =
      (window.innerHeight - e.pageY * 2) / 90;

    glow1.style.transform =
      `translate(${x}px, ${y}px)`;

    glow2.style.transform =
      `translate(${-x}px, ${-y}px)`;

  }

});

/* =========================
SMOOTH ACTIVE NAVBAR LINK
========================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 200;

    const sectionHeight =
      section.clientHeight;

    if (window.scrollY >= sectionTop) {

      current = section.getAttribute("id");

    }

  });

  navItems.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {

      link.classList.add("active");

    }

  });

});

/* =========================
SMOOTH FLOATING ANIMATION
========================= */

const floatingCards =
  document.querySelectorAll(".floating-card");

floatingCards.forEach((card, index) => {

  card.animate(

    [
      {
        transform:
          "translateY(0px)"
      },

      {
        transform:
          "translateY(-15px)"
      },

      {
        transform:
          "translateY(0px)"
      }

    ],

    {
      duration: 4000 + (index * 1000),
      iterations: Infinity
    }

  );

});


document.addEventListener("DOMContentLoaded", () => {

  /* =========================
  FOOD SLIDER
  ========================= */

  const foodData = [
    {
      title: "Crispy Chicken Wings",
      desc: "Crispy chicken wings tossed in premium sauces with rich flavours and perfect spices."
    },

    {
      title: "Special Fried Rice",
      desc: "Authentic Indo-Chinese fried rice loaded with fresh vegetables and juicy chicken."
    },

    {
      title: "Dragon Chicken",
      desc: "The Red Box signature dragon chicken with spicy glaze and smoky flavours."
    }
  ];

  const cards = document.querySelectorAll(".food-card");

  const title = document.querySelector(".food-title");
  const desc = document.getElementById("foodDescription");

  const nextBtn = document.getElementById("nextSlide");
  const prevBtn = document.getElementById("prevSlide");

  let current = 0;

  function updateSlider() {

    cards.forEach(card => {
      card.classList.remove("active", "next", "prev");
    });

    cards[current].classList.add("active");

    cards[(current + 1) % cards.length]
      .classList.add("next");

    cards[
      (current - 1 + cards.length) % cards.length
    ].classList.add("prev");

    title.innerHTML = foodData[current].title;

    desc.innerHTML = foodData[current].desc;
  }

  /* NEXT */

  nextBtn.addEventListener("click", () => {

    current++;

    if (current >= cards.length) {
      current = 0;
    }

    updateSlider();
  });

  /* PREV */

  prevBtn.addEventListener("click", () => {

    current--;

    if (current < 0) {
      current = cards.length - 1;
    }

    updateSlider();
  });

  /* AUTO SLIDE */

  setInterval(() => {

    current++;

    if (current >= cards.length) {
      current = 0;
    }

    updateSlider();

  }, 3000);

  updateSlider();

});


const scrollTopBtn =
document.getElementById("scrollTop");

const footer =
document.querySelector(".footer");

window.addEventListener("scroll",()=>{

  const footerTop =
  footer.getBoundingClientRect().top;

  const windowHeight =
  window.innerHeight;

  /* SHOW ONLY WHEN FOOTER ENTERS SCREEN */

  if(footerTop < windowHeight - 100){

    scrollTopBtn.classList.add("show");

  }else{

    scrollTopBtn.classList.remove("show");

  }

});

/* SCROLL TO TOP */

scrollTopBtn.addEventListener("click",()=>{

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});

const images = [
  "assets/ambiance-main.webp",
  "assets/ambiance-main-1.webp",
  "assets/ambiance-main-2.webp",
  "assets/ambiance-main-3.webp"
];

let current = 0;

const storyImage = document.getElementById("autoStoryImage");

setInterval(() => {

  current++;

  if(current >= images.length){
    current = 0;
  }

  storyImage.src = images[current];

}, 3000);


/* =========================
MENU DOWNLOAD BUTTON
========================= */

const downloadBtn =
document.getElementById("downloadBtn");

const popup =
document.getElementById("downloadPopup");

downloadBtn.addEventListener("click", function(){

  downloadBtn.innerText = "Downloading...";

  setTimeout(() => {

    downloadBtn.innerText =
    "Download Full Menu";

    popup.classList.add("show");

    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000);

  }, 2000);

});

const video = document.querySelector(".restaurant-video");

video.addEventListener("click", (e) => {

  // Ignore clicks on native controls
  if (e.target.closest("video")) {

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

  }

});