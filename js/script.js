/* const é o objeto icone para trocar a cor do site */
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeader = document.querySelectorAll(".accordion-header");
const menuLinks = document.querySelectorAll(".menu-link");

/* Mudança de Tema */
function changeTheme () {

    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme","light") : rootHtml.setAttribute("data-theme","dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");

}

toggleTheme.addEventListener("click", changeTheme);

/* Function Accordion */

accordionHeader.forEach(header => {

    header.addEventListener("click", () => {

        const accordiionItem = header.parentElement;
        const accordionActive = accordiionItem.classList.contains("active");

        accordionActive ? accordiionItem.classList.remove("active") : accordiionItem.classList.add("active")

    })

})

/* Mudança menu-cor */

menuLinks.forEach(item => {

    item.addEventListener("click", () => {

        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

    })

})