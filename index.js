const SUI_verticalCollpase = (ele) => {
  ele.addEventListener("transitionend", SUI_removeInlineStyle);
  ele.style.transition = "none";
  requestAnimationFrame(() => {
    ele.style.height = ele.scrollHeight + "px";
    requestAnimationFrame(() => {
      ele.style.transition = "";
      ele.style.height = "0px";
    });
  });
  ele.dataset.collapsed = "true";
};
const SUI_verticalExpand = (ele) => {
  ele.addEventListener("transitionend", SUI_removeInlineStyle);
  ele.style.height = `${ele.scrollHeight}px`;
  ele.dataset.collapsed = "false";
};

const SUI_removeInlineStyle = (e) => {
  ele = e.target;
  ele.removeAttribute("style");
  ele.removeEventListener("transitionend", SUI_removeInlineStyle);
};

SUI_dismisses = document.querySelectorAll(".dismiss");
SUI_dismisses.forEach(
  (dismiss) =>
    (dismiss.onclick = () => {
      const dismissTarget = document.querySelector(dismiss.dataset.target);
      dismissTarget.style.display = none;
    })
);
//Alert dismisses
const SUI_alertDismisses = document.querySelectorAll(".alert__dismiss");

SUI_alertDismisses.forEach(
  (dissmissBtn) =>
    (dissmissBtn.onclick = (event) =>
      (event.target.parentElement.style.display = "none"))
);

//Card dismiss
const SUI_cardDismisses = document.querySelectorAll(".card__dismiss");

SUI_cardDismisses.forEach(
  (dissmissBtn) =>
    (dissmissBtn.onclick = (event) =>
      (event.target.parentElement.style.display = "none"))
);

// Nav-Bar Toggle
const SUI_navBarToggle = document.querySelector(".nav-bar__toggle");

SUI_navBarToggle.onclick = (e) => {
  const toggleBtn = e.target;
  const toggleTarget = document.querySelector(toggleBtn.dataset.toggle);
  toggleBtn.classList.toggle("active");
  toggleTarget.classList.toggle("show");
};

//Side-Bar Toggle
const SUI_sideBarToggle = document.querySelector(".side-bar__toggle");

SUI_sideBarToggle.onclick = (e) => {
  const toggleBtn = e.target;
  const toggleTarget = document.querySelector(toggleBtn.dataset.toggle);
  toggleTarget.classList.toggle("show");
  toggleTarget.classList.contains("show")
    ? toggleBtn.classList.add("active")
    : toggleBtn.classList.remove("active");
};

//Vertical Collapse Toggles
const SUI_verticalCollapseToggles = document.querySelectorAll(
  ".vertical-collapse-toggle"
);

SUI_verticalCollapseToggles.forEach(
  (toggle) =>
    (toggle.onclick = (e) => {
      const toggleBtn = e.target;
      const toggleTarget = document.querySelector(toggleBtn.dataset.toggle);
      if (toggleTarget.dataset.collapsed === "true") {
        SUI_verticalExpand(toggleTarget);
        toggleTarget.classList.add("show");
        toggleBtn.classList.add("active");
      } else {
        SUI_verticalCollpase(toggleTarget);
        toggleTarget.classList.remove("show");
        toggleBtn.classList.remove("active");
      }
    })
);

//Rating Functionality
const SUI_ratingInputStars = document.querySelectorAll(
  ".rating--input .rating__star"
);

SUI_ratingInputStars.forEach((star) => {
  const currentStarWrapper = star.parentElement;
  star.onchange = () => currentStarWrapper.classList.add("rating--checked");
  star.addEventListener("mouseenter", () =>
    currentStarWrapper.classList.add("rating--hover")
  );
  star.addEventListener("mouseleave", () =>
    currentStarWrapper.classList.remove("rating--hover")
  );
});

const SUI_ratingDisplayStars = document.querySelectorAll(
  ".rating--display .rating__star"
);

SUI_ratingDisplayStars.forEach((star) => (star.disabled = true));

const SUI_ratingDisplays = document.querySelectorAll(".rating--display");

SUI_ratingDisplays.forEach((display) => {
  const rating = display.classList.contains("rating--1")
    ? 1
    : display.classList.contains("rating--2")
    ? 2
    : display.classList.contains("rating--3")
    ? 3
    : display.classList.contains("rating--4")
    ? 4
    : display.classList.contains("rating--5")
    ? 5
    : 0;

  const displayStars = Array.from(display.children).slice(0, rating);
  // console.log(rating);
  // console.log(displayStars);
  displayStars.forEach((star) => star.classList.add("rating__star--filled"));
});
