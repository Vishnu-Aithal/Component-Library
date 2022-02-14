document.querySelector(".nav-bar__toggle").onclick = (e) => {
  const toggleBtn = e.target;
  const toggleTarget = document.querySelector(toggleBtn.dataset.toggle);
  toggleBtn.classList.toggle("active");
  toggleTarget.classList.toggle("show");
};

document.querySelector(".side-bar__toggle").onclick = (e) => {
  const toggleBtn = e.target;
  const toggleTarget = document.querySelector(toggleBtn.dataset.toggle);
  toggleTarget.classList.toggle("hide");
  toggleTarget.classList.contains("hide")
    ? toggleBtn.classList.remove("active")
    : toggleBtn.classList.add("active");
};

document.querySelector(".side-bar__item--header").onclick = (e) => {
  const toggleBtn = e.target;
  // console.log(toggleBtn.dataset.toggle)
  const toggleTarget = document.querySelector(toggleBtn.dataset.toggle);
  toggleBtn.classList.toggle("active");
  toggleTarget.classList.toggle("hide");
};
