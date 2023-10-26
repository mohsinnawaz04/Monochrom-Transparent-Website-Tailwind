console.log('Connected');


var btn = document.getElementById('hamburger')
var mobileMenu = document.getElementById('mobile-menu')

btn.addEventListener('click', ()=> {
    btn.classList.toggle('open')
    mobileMenu.classList.toggle('flex')
    mobileMenu.classList.toggle('hidden')
})

// Animating Website - GSAP

var tl = gsap.timeline()
var tl2 = gsap.timeline()
var tl3 = gsap.timeline()
var tl4 = gsap.timeline()

tl
.from('#navbar', {
    y:50,
    duration: .8
})
.from('#large-menu', {
    opacity: 0,
    duration: .3
})

tl2
.from('.text-7xl', {
    opacity: 0,
    y:50,
    duration: .7
})
.from('#sub-heading', {
    opacity: 0,
    y: 50,
    duration: .5
})

tl3
.from('.contact',{
    opacity: 0,
    x: 50,
    duration: 1.2
})


tl4
.from('.bx',{
    scale: .5,
    opacity: 0,
    duration: .5
})


gsap.from('#about-me', {
    scrollTrigger: {
        trigger: '#about-me',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 60%',
        scrub: 2
    },
    y:-50,
    opacity: 0,
    duration: 1
})


