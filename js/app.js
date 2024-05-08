function NavbarEffect() {
  // Navbar Effect
  const nav = document.querySelector("nav")

  window.addEventListener("scroll", (e) => {
    if (scrollY > 50) {
      nav.classList.add("bg-dark")
      nav.classList.add("navbar-effect")
    } else {
      nav.classList.remove("bg-dark")
      nav.classList.remove("navbar-effect")
    }
  })
}
document.addEventListener("DOMContentLoaded", NavbarEffect)
