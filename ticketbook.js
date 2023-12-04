const navMenu=document.getElementById("nav-menu"),
    navToggle=document.getElementById("nav-toggle"),
    navClose=document.getElementById("nav-close")


if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{

        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
// Dark theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
// const changeName='Light Mode'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const themeName = getCurrentTheme() === 'dark' ? 'Light Mode' : 'Dark Mode';
themeButton.textContent = themeName;
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    const newThemeName = getCurrentTheme() === 'dark' ? 'Light Mode' : 'Dark Mode';
  themeButton.textContent = newThemeName;
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


const sr=ScrollReveal({
    distance:'60px',
    duration:2800,
    reset:true,
})

sr.reveal(`.top_traveler,.plane_book_title`,{
    origin:'top',
    interval:150,
})
sr.reveal(`.mainText,.left_side,.car_title`,{
    origin:'left'
})
sr.reveal(`.titleDiv,.right_side,.car_p`,{
    origin:'right',
    interval:100,
})
sr.reveal(`.middle,.plane_book_p`,{
    origin:'bottom',
    interval:150,
})