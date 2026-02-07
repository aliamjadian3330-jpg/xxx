

  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // غیرفعال کردن تب‌ها و محتواهای قبلی
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // فعال کردن تب و محتوای انتخابی
      tab.classList.add('active');
      const activeContent = document.getElementById(tab.dataset.tab);
      activeContent.classList.add('active');
    });
  });

// ...................................................
  const toggleBtn = document.querySelector('.support-toggle');
const supportPanel = document.querySelector('.support-panel');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click', () => {
  supportPanel.style.display = supportPanel.style.display === "flex" ? "none" : "flex";
});

closeBtn.addEventListener('click', () => {
  supportPanel.style.display = "none";
});


const cards = document.querySelectorAll('.why-card');

cards.forEach(card => {
  card.addEventListener('mousemove', e=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width/2;
    const centerY = rect.height/2;
    const rotateX = ((y-centerY)/centerY)*10;
    const rotateY = ((x-centerX)/centerX)*10;

    card.style.setProperty('--rx', `${-rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
    card.style.setProperty('--x', `${(x/rect.width)*100}%`);
    card.style.setProperty('--y', `${(y/rect.height)*100}%`);
  });

  card.addEventListener('mouseleave', ()=>{
    card.style.setProperty('--rx','0deg');
    card.style.setProperty('--ry','0deg');
    card.style.setProperty('--x','50%');
    card.style.setProperty('--y','50%');
  });
});



// مخفی کردن کارت ها

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("#site-footer");
  const bottomBar = document.querySelector(".bottom-bar");
  const supportWidget = document.querySelector(".support-widget");

  if (!footer) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bottomBar?.classList.add("hide");
          supportWidget?.classList.add("hide");
        } else {
          bottomBar?.classList.remove("hide");
          supportWidget?.classList.remove("hide");
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  observer.observe(footer);
});
// زیبایی های علرت
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  const progress = toast.querySelector('.toast-progress');

  // متن Toast
  toast.textContent = message;
  
  // اضافه کردن نوار داخل Toast
  toast.appendChild(progress);

  // نمایش Toast
  toast.classList.add('show');

  // ریست کردن نوار
  progress.style.transition = 'none';
  progress.style.transform = 'scaleX(1)';

  // شروع انیمیشن نوار
  setTimeout(() => {
    progress.style.transition = `transform ${duration}ms linear`;
    progress.style.transform = 'scaleX(0)';
  }, 50); // کمی تأخیر برای اجرای transition

  // مخفی کردن Toast بعد از زمان مشخص
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}
// استایل متن تایپی

const texts = [
  "   اپلیکیشن ضروری برای همه",
  "خدمات حرفه‌ای ما",
  "طراحی مدرن و سریع",
  "تجربه کاربری پیشرفته"
];

const el = document.getElementById("typewriter");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 90;
const deletingSpeed = 50;
const delayAfterType = 1500;
const delayAfterDelete = 500;

function typeLoop() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    el.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, delayAfterType);
    }
  } else {
    el.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(() => {}, delayAfterDelete);
    }
  }

  setTimeout(typeLoop, isDeleting ? deletingSpeed : typingSpeed);
}

typeLoop();







document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const drawer = document.getElementById("fullDrawer");
  const overlay = document.getElementById("drawerOverlay");
  const closeBtn = document.getElementById("drawerClose");

  // باز و بسته کردن منو
  toggle.addEventListener("click", () => {
    drawer.classList.toggle("open");
    overlay.classList.toggle("active");
  });

  // بستن با کلیک روی overlay
  overlay.addEventListener("click", () => {
    drawer.classList.remove("open");
    overlay.classList.remove("active");
  });

  // بستن با دکمه Close
  closeBtn.addEventListener("click", () => {
    drawer.classList.remove("open");
    overlay.classList.remove("active");
  });
});






document.addEventListener("DOMContentLoaded", () => {
  const widget = document.getElementById("supportWidget");
  const toggle = document.getElementById("supportToggle");
  const panel = document.getElementById("supportPanel");
  const closeBtn = document.getElementById("closeBtn");

  // 1️⃣ نمایش اولیه پنل با انیمیشن
  setTimeout(() => {
    toggle.classList.add("show"); // دکمه ظاهر شود
    panel.style.display = "flex"; // پنل وسط سایت ظاهر شود
  }, 500); // نیم ثانیه بعد از لود

  // 2️⃣ بعد از 5 ثانیه، پنل محو شود و فلش کوچک کنار سایت شود
  setTimeout(() => {
    panel.style.display = "none"; // پنل محو شود
    widget.classList.add("minimized"); // حالت فلش کوچک
  }, 5500); // 5 ثانیه بعد از ظاهر شدن

  // 3️⃣ کلیک روی فلش، پنل دوباره باز شود
  toggle.addEventListener("click", () => {
    if (widget.classList.contains("minimized")) {
      panel.style.display = "flex"; // باز شدن پنل
      widget.classList.remove("minimized");
    } else {
      panel.style.display = panel.style.display === "flex" ? "none" : "flex";
    }
  });

  // 4️⃣ دکمه بستن داخل پنل
  closeBtn.addEventListener("click", () => {
    panel.style.display = "none";
    widget.classList.add("minimized");
  });
});

