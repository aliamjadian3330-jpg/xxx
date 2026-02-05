

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
