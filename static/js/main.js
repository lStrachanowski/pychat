document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('.index-header-menu-align').onclick = hide_menu_icon;
})

var hide_menu_icon =() =>{
    if(document.querySelector(".menu-style-wrapper").style.display=="" || document.querySelector(".menu-style-wrapper").style.display=="block"){
        document.querySelector(".menu-style-wrapper").style.display = "none";
        document.querySelector(".cross").style.display = "block"; 
        document.querySelector(".menu-active-background").style.display = "block";
    }else{
        document.querySelector(".cross").style.display = "none"; 
        document.querySelector(".menu-style-wrapper").style.display = "block";
        document.querySelector(".menu-active-background").style.display = "none";
    }
}
