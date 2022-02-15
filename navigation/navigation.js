// Nav-Bar Toggle
const SUI_navBarToggle = document.querySelector(".nav-bar__toggle");

SUI_navBarToggle.onclick = (e) => {
  const toggleBtn = e.target;
  const toggleTarget = document.querySelector(toggleBtn.dataset.toggle);
  toggleBtn.classList.toggle("active");
  toggleTarget.classList.toggle("show");
};

const SUI_sideBarToggle = document.querySelector(".side-bar__toggle");

SUI_sideBarToggle.onclick = (e) => {
  const toggleBtn = e.target;
  const toggleTarget = document.querySelector(toggleBtn.dataset.toggle);
  toggleTarget.classList.toggle("hide");
  toggleTarget.classList.contains("hide")
    ? toggleBtn.classList.remove("active")
    : toggleBtn.classList.add("active");
};

const SUI_subMenuToggles = document.querySelectorAll(".side-bar__item--header");
SUI_subMenuToggles.forEach(
  (toggle) =>
    (toggle.onclick = (e) => {
      const toggleBtn = e.target;
      const toggleTarget = document.querySelector(toggleBtn.dataset.toggle);
      toggleBtn.classList.toggle("active");
      toggleTarget.classList.toggle("hide");
    })
);
