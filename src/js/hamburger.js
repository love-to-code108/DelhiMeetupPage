let counter = 1;

let menu = document.getElementById("hamburgerMenuButton");

menu.addEventListener("click", () => {
    
    if(counter%2 != 0){
        
        gsap.
        to("#hamburgerMenu" , {
            x:-320,
            duration: 1,
            ease:"power4",
        })



    }else if(counter%2 == 0){
        gsap.
        to("#hamburgerMenu" , {
            x:320,
            duration: 1,
            ease:"power4.in",
        })
    }

    counter = counter + 1;
})
