
// top scroll start here

const scrollTop = document.querySelector("#bttbutton")
scrollTop.addEventListener("click", smoth);
function smoth() {
    window.scrollTo({top:0, behavior: 'smooth'});
     
}
// top scroll end here


// nav manu icon
const menuBtn = document.getElementById("menuIcon");
const menu = document.getElementById("navbar_main");

menuBtn.addEventListener("click", function () {

    menu.classList.toggle("navActive");
    console.log("click")

    // console.log("click")
    // if (menu.className == "hideMenu") {
    //     menu.classList.remove("hideMenu");
       
    // } else {
    //      menu.classList.add("hideMenu");
    // }
})

// nav manu icon
