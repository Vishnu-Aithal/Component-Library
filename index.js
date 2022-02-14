//Alert dismiss
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
