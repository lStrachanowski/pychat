document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('.menu-style-wrapper').onclick = hide;
    document.querySelector('.cross').onclick = hide;
})

var hide =() =>{
    if(document.querySelector(".menu-style-wrapper").style.display=="" || document.querySelector(".menu-style-wrapper").style.display=="block"){
        document.querySelector(".menu-style-wrapper").style.display = "none";
        document.querySelector(".cross").style.display = "block"; 
    }else{
        document.querySelector(".cross").style.display = "none"; 
        document.querySelector(".menu-style-wrapper").style.display = "block";
    }
        
}