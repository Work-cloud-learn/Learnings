// Reveal on scroll
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));

// View resume
function viewResume() {
  document.getElementById("resume").scrollIntoView({ behavior: "smooth" });
  if (typeof gtag !== "undefined") gtag('event', 'view_resume');
}

// Download resume
function downloadResume() {
  document.title = "Balaji_Duraisamy_Senior_QA";
  if (typeof gtag !== "undefined") gtag('event', 'resume_download');
  window.print();
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
}
