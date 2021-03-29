// alert("Este es un mensaje de alerta");

const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
// const text1 = intro.querySelector("h2");
// const text2 = intro.querySelector("h3");
//end section 
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scene
let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElemnt: intro,
    triggerHook: 1
})
    // .addIndicators()
    .setPin(intro)
    .addTo(controller);

//text animatión
const textAnim = TweenMax.fromTo(text, 3, { opacity: 2 }, { opacity: 0 });
// const textAnim1 = TweenMax.fromTo(text1, 4, { opacity: 3 }, { opacity: 0.5 });
// const textAnim2 = TweenMax.fromTo(text2, 5, { opacity: 3 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 9000,
    triggerElemnt: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);

//Video ANimation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {

    delay += (scrollpos - delay) * accelamount;
    // console.log(scrollpos, delay);

    video.currentTime = delay;
}, 33.3);