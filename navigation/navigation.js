document.querySelector(".nav-toggle").onclick = (e) => {
  const toggleTarget = document.querySelector(e.target.dataset.toggle)
  toggleTarget.classList.toggle("show")
}