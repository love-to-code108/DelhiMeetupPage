


// THIS IS FOR LOADING PERCENTAGE THINGY
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function Tutor() {
    for (let i = 1; i <= 100; i++) {
        await sleep(26);
        document.getElementById("startingAnimationPercent").innerHTML = i + "%";

    }
}
Tutor()









//  THIS IS TO DISABLE SCROLLING 

function disable() {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,

        // if scroll happens, set it to the previous value
        window.onscroll = function () {
            window.scrollTo(LeftScroll, TopScroll);
        };
}

function enable() {
    window.onscroll = function () { };
}

disable();






let width = screen.width;
let height = screen.height;



let t1 = gsap.timeline()
t1

    .to("#startingAnimationBlue", {
        x: -width,
        duration: 3,
        ease: "none",

    });




// t1.to("#startingAnimationPercent", {
//     color: "#0148a3",
//     duration: 0,
// }, "<1.4")





t1.to("#startingAnimationWhite", {
    y: -height,
    duration: 2,
    ease: "power2",

});



// t1.to("#startingAnimationPercent", {
//     y: -height,
//     duration: 2,
//     ease: "power2"
// }, "<")




const timer = setTimeout(enable, 3500);







