const backgroundCircle = document.querySelector('.backgroundCircle')
const hamburgerMenu = document.querySelector('.hamburgerMenu')
const plusIcon = document.querySelector('.plus-icon')
const links = document.querySelectorAll(".link")
const navCheckbox = document.querySelector('#toggle-nav')
backgroundCircle.style.transform = "scale(0,0)";


hamburgerMenu.addEventListener('mouseenter',()=>{
    backgroundCircle.style.transform = "scale(1,1)"
    // backgroundCircle.style.backgroundColor = 'white'

    plusIcon.style.filter = 'invert(1)'
} )
hamburgerMenu.addEventListener('mouseleave',()=>{
    backgroundCircle.style.transform = "scale(0,0)"
    // backgroundCircle.style.backgroundColor = 'black'
    plusIcon.style.filter = 'none'
} )

hamburgerMenu.addEventListener('click', ()=>{
    // hamburgerMenu.style.transform = 'rotateZ(225deg)' 
    hamburgerMenu.classList.toggle('hamburgerMenuClicked')
    console.log('hamburger clicked')
})

links.forEach((link)=>{
    link.addEventListener('click',()=>{
        hamburgerMenu.classList.toggle('hamburgerMenuClicked')
        navCheckbox.checked = false;
        console.log(navCheckbox.checked)
        console.log('hamburger clicked')
    })
})

hamburgerMenu.addEventListener("mousemove", (e) => {
    const xPos = (-e.offsetX + 27.5)* 0.2;
    const yPos = (-e.offsetY + 27.5)*0.2;
    const xPosPlusIcon = xPos*0.5;
    backgroundCircle.style.transform = "scale(1,1) translate3d(" + xPos + "px, " + yPos + "px, 0)"
    plusIcon.style.transform = "translateX(" + xPosPlusIcon + "px";
  });