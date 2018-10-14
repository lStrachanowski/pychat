document.addEventListener('DOMContentLoaded', ()=>{
    if(document.querySelector('.index-header-menu-align')){
        document.querySelector('.index-header-menu-align').onclick = hide_menu_icon;
    }
    if (window.screen.width >= 1200){
        if(document.querySelector("dot-one")){
            document.getElementById("dot-one").onclick = swith_slide_one;
        }
        if(document.getElementById("dot-two")){
            document.getElementById("dot-two").onclick = swith_slide_two;
        }
        window.addEventListener('wheel', slides);
    }
});


var swith_slide_one = () =>{
    document.getElementsByClassName("slide-one")[0].style.display = "block";
    document.getElementsByClassName("slide-two")[0].style.display = "none";
    document.getElementById("dot-one").classList.remove("blue-dot");
    document.getElementById("dot-one").classList.add("red-dot");
    document.getElementById("dot-two").classList.remove("red-dot");
    
}

var swith_slide_two = () =>{
    document.getElementsByClassName("slide-one")[0].style.display = "none";
    document.getElementsByClassName("slide-two")[0].style.display = "block";
    document.getElementById("dot-one").classList.remove("red-dot");
    document.getElementById("dot-one").classList.add("blue-dot");
    document.getElementById("dot-two").classList.add("red-dot");
}

var slides = (e)=>{
    if(e.deltaY < 0 ){
        swith_slide_one() ;
    }else{
        swith_slide_two();
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
