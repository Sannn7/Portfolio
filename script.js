// ===== MOBILE MENU =====
const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.getElementById("navLinks");

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener("click", () => {
    mobileToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
}

// Click logo -> top
const logoBtn = document.getElementById("logoBtn");
if (logoBtn) {
  logoBtn.addEventListener("click", () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  });
}

// ===== SMOOTH SCROLL FOR ANCHORS =====
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href) return;
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    navLinks?.classList.remove("active");
    mobileToggle?.classList.remove("active");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ===== RENDER PROJECTS =====
function renderProjects() {
  const container = document.getElementById("projectsContainer");
  if (!container || !Array.isArray(window.projects)) return;

  container.innerHTML = window.projects.map((p) => `
    <div class="project-card js-animate">
      <div class="project-header">
        <span class="project-icon">${p.icon || "✨"}</span>
        <h3>${p.title}</h3>
        <div class="project-tech">
          ${(p.tech || []).map(t => `<span class="pill">${t}</span>`).join("")}
        </div>
      </div>

      <div class="project-body">
        <p class="project-desc">${p.description || ""}</p>

        <ul class="project-list">
          ${(p.features || []).map(f => `<li>${f}</li>`).join("")}
        </ul>

        <div class="project-metrics">
          ${(p.metrics || []).map(m => `<span class="metric">${m}</span>`).join("")}
        </div>

        <div class="project-links">
          <a class="link-btn" href="${p.github || "#"}" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a class="link-btn" href="${p.docs || "#"}" target="_blank" rel="noopener noreferrer">Docs</a>
        </div>
      </div>
    </div>
  `).join("");
}

// ===== RENDER SKILLS =====
function renderSkills() {
  const container = document.getElementById("skillsContainer");
  if (!container || !window.skills) return;

  container.innerHTML = Object.entries(window.skills).map(([cat, list]) => `
    <div class="skill-category js-animate">
      <h4>${cat}</h4>
      <div class="skill-tags">
        ${(list || []).map(s => `<span class="skill-tag">${s}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ===== RENDER TIMELINE =====
function renderTimeline() {
  const track = document.getElementById("timelineTrack");
  if (!track || !Array.isArray(window.timeline)) return;

  track.innerHTML = window.timeline.map((item) => {
    const hasPdf = item.pdf && item.pdf.trim().length > 0;

    return `
      <div class="tl-item ${item.lane === "bottom" ? "bottom" : "top"} js-animate">
        <div class="tl-dot"></div>
        <div class="tl-card">
          <div class="tl-title">${item.title}</div>
          <div class="tl-org">${item.org}</div>
          <div class="tl-time">${item.time}</div>

          <div class="tl-hover">
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const els = document.querySelectorAll(".js-animate");
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el) => observer.observe(el));
}

// ===== ACTIVE NAV LINK =====
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section");
  let current = "home";

  sections.forEach((s) => {
    const top = s.offsetTop;
    if (window.scrollY >= top - 220) current = s.id;
  });

  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) a.classList.add("active");
  });
}

window.addEventListener("scroll", updateActiveNavLink);

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderTimeline();
  renderProjects();
  renderSkills();

  initScrollAnimations();
  updateActiveNavLink();
});