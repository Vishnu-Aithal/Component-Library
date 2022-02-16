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
