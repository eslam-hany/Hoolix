let up=document.getElementById("up");
let navbar=document.getElementById("navbar");
window.onscroll = function(){
    if(this.scrollY >=500){
        up.classList.add("show");
        navbar.classList.add("navbarfff");
    }else{
        up.classList.remove("show");
        navbar.classList.remove("navbarfff");
    }
}
up.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}