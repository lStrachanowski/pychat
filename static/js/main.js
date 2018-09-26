document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('.menu-style-wrapper').onclick = hide_menu_icon;
    document.querySelector('.cross').onclick = hide_menu_icon;
    document.querySelector('.menu-active-background').onclick = hide_menu;
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

var hide_menu =()=>{
    if(document.querySelector(".menu-style-wrapper").style.display==""){
        document.querySelector(".menu-active-background").style.display = "none";
    }
    
}