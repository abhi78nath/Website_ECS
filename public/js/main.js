const ball = document.querySelector(".ball");
const cube = document.querySelector(".cube");
const loop = document.querySelector(".loop");
const helix = document.querySelector(".helix");

helix.addEventListener("click",()=>{
    
    helix.classList.add("floating");
    cube.classList.remove("floating");
    ball.classList.remove("floating");
    loop.classList.remove("floating");




    $("#screen_code").delay(500).fadeIn();

    $("#screen_innovation").delay(500).fadeOut();
    $("#screen_literature").delay(500).fadeOut();
    $("#screen_communication").delay(500).fadeOut();
    $("#screen_ece").delay(500).fadeOut();
    
 

})
ball.addEventListener("click",()=>{

    helix.classList.remove("floating");
    cube.classList.remove("floating");
    ball.classList.add("floating");
    loop.classList.remove("floating");

    $("#screen_innovation").delay(500).fadeIn();

    $("#screen_code").delay(500).fadeOut();
    $("#screen_literature").delay(500).fadeOut();
    $("#screen_communication").delay(500).fadeOut();
    $("#screen_ece").delay(500).fadeOut();




   

})
cube.addEventListener("click",()=>{

    helix.classList.remove("floating");
    cube.classList.add("floating");
    ball.classList.remove("floating");
    loop.classList.remove("floating");


    $("#screen_literature").delay(500).fadeIn();

    $("#screen_code").delay(500).fadeOut();
    $("#screen_innovation").delay(500).fadeOut();
    $("#screen_communication").delay(500).fadeOut();
    $("#screen_ece").delay(500).fadeOut();

})
loop.addEventListener("click",()=>{

    helix.classList.remove("floating");
    cube.classList.remove("floating");
    ball.classList.remove("floating");
    loop.classList.add("floating");


    $("#screen_communication").delay(500).fadeIn();

    $("#screen_code").delay(500).fadeOut();
    $("#screen_innovation").delay(500).fadeOut();
    $("#screen_literature").delay(500).fadeOut();
    $("#screen_ece").delay(500).fadeOut();

})






// slide show starts here


   
    var images = document.getElementsByClassName("screens")
    // console.log(images);
    var counter = 1;

    if(counter <= 5){
        setInterval(function(){
            for(var j =0; j < images.length; j++){
                
                images[j].style.display ='none'
            }
            images[counter].style.display = 'block';
          
            counter++;

            if(counter === images.length){
                counter = 1;
            }
        },8000);
    }



// slide show ends here

