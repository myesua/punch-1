const stickySocials = document.getElementById("other-socials");


document.addEventListener ("scroll", scrollStickySocials) 
 

function scrollStickySocials (){
    stickySocials.style.position = "sticky"; 
    stickySocials.style.top = "200px"; 
}


