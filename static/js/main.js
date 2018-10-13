document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('.index-header-menu-align').onclick = hide_menu_icon;
    window.addEventListener('wheel', test);
});

var test = (e)=>{
    if(e.deltaY < 0 ){
        document.getElementsByClassName("slide-one")[0].style.display = "block";
        document.getElementsByClassName("slide-two")[0].style.display = "none";
        document.getElementsByClassName("dot-menu")[0].style.background = "#C1292F";
        document.getElementsByClassName("dot-menu")[1].style.background = "#3A7DB8";
    }else{
        document.getElementsByClassName("slide-one")[0].style.display = "none";
        document.getElementsByClassName("slide-two")[0].style.display = "block";
        document.getElementsByClassName("dot-menu")[1].style.background = "#C1292F";
        document.getElementsByClassName("dot-menu")[0].style.background = "#3A7DB8";
    }
}


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
