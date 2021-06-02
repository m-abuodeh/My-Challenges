/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
let sections = document.querySelectorAll('*[id^="section"]');
let numOfSections = document.querySelectorAll('*[id^="section"]').length;
const mainArea = document.querySelector("#main_area");
const navbarUL = document.querySelector("#navbar__list");
const openSectionFormButton = document.querySelector("#add_button");
const closeSectionFormButton = document.querySelector("#close_button");
const addSectionButton = document.querySelector("#form-button");
const formDIV = document.querySelector("#pop_up");
const sectionName = document.querySelector("#sec-name");
const sectionContent = document.querySelector("#sec-content");
const toTop = document.querySelector(".to_top");
let listItems = [];

/**
 * End Global Variables
 */

// Insert all li inside UL element dynamically
sections.forEach((element, index) => {
    navbarUL.insertAdjacentHTML("beforeend", `<li class="navbar_li section${index + 1}">  <a  class="menu__link"> ${element.dataset.nav} </a></li>`);
    listItems = document.querySelectorAll(".navbar_li");
});

// Open form pop-up when clicking on Add Section button
openSectionFormButton.addEventListener("click", openForm);
function openForm() {
    formDIV.classList.add("shown");
}
// Close form pop-up when clicking on X button
closeSectionFormButton.addEventListener("click", closeForm);
function closeForm() {
    formDIV.classList.remove("shown");
}

// take the values from the form and inject them inside <main> element as a new section
addSectionButton.addEventListener("click", addSection);
function addSection() {
    formDIV.classList.add("shown");
    let name = sectionName.value;
    let content = sectionContent.value;
    if (name !== "" && content !== "") {
        numOfSections += 1;
        let sectionHTML = `<section id="section${numOfSections}" data-nav="Section ${numOfSections}">
        <div class="landing__container">
            <h2>${name}</h2>
            <p>
                ${content}
            </p>
        </div>
            </section>`;
        mainArea.insertAdjacentHTML("beforeend", sectionHTML);
        navbarUL.insertAdjacentHTML("beforeend", `<li class="navbar_li section${numOfSections}"> <a  class="menu__link"> ${name} </a> </li>`);
        formDIV.classList.remove("shown");
        sectionName.value = "";
        sectionContent.value = "";
        updateLinks();
    }
}

// Set threshold conditions based on viewport width to scroll to right position when clicked
let viewportWidthScale = 30;
if (window.innerWidth < 320) {
    viewportWidthScale = 80;
}

// Update li items and Scroll to section on link click
let updateLinks = () => {
    listItems = document.querySelectorAll(".navbar_li");
    sections = document.querySelectorAll('*[id^="section"]');
    listItems.forEach((element, index) => {
        element.addEventListener("click", () => {
            this.scrollTo(0, sections[index].offsetTop - viewportWidthScale);
        });
    });
};
updateLinks();

// Set sections as active
window.addEventListener("scroll", () => {
    sections.forEach((element, index) => {
        let activeSection = document.querySelector(`#section${index + 1}`);
        let activeLi = document.querySelector(`.section${index + 1}`);
        activeSection.classList.remove("your-active-class");
        activeLi.classList.remove("your-active-class");
        // Add class 'active' to section when near top of viewport
        if (element.getBoundingClientRect().y < 400 && element.getBoundingClientRect().bottom > 400) {
            activeSection.classList.add("your-active-class");
            activeLi.classList.add("your-active-class");
        }
    });
});

// Scroll to top
toTop.addEventListener("click", () => {
    this.scrollTo(0, 0);
});
