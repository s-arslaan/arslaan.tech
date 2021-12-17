const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll(".section");

let activeLink = 0;

links.forEach((link, i) => {
  link.addEventListener("click", () => {
    if (activeLink != 1) {
      links[activeLink].classList.remove("active");
      link.classList.add("active");
      sections[activeLink].classList.remove("active");
    }
  });
});
