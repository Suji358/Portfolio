//SHOW MENU

const showMenu =(toogleId,navId) => {
    const toogleId = document.getElementById(toogleId)
        nav = document.getElementById(navId)
if(toogle && nav){
toogle.addEventListener('click',()=>
{nav.classlist.toogle(show)

});
showMenu('nav_toggle','nav_menu')
}
}
//  ACTIVE AND REMOVE ACTIVE
const navlink = document.querySelectorAll('.nav_link')
navlink.forEach(n.classList.remove('active'))

function linkAction(){
    navlink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click',linkAction))

