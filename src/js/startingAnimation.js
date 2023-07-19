


//  THIS IS TO DISABLE SCROLLING 

function disable() {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
    
    // if scroll happens, set it to the previous value
    window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
            };
    }
    
    function enable() {
    window.onscroll = function() {};
    }

disable();


let t1 = gsap.timeline()
t1

    .to("#startingAnimationBlue", {
        x: -4000,
        duration: 2,
        ease: "power4.in",
        
    });




t1. to("#startingAnimationWhite", {
        y: -2000,
        duration: 2,
        ease: "power2.in",
        
    });


const timer = setTimeout(enable, 3500);







