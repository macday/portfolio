var tl = gsap.timeline({defaults: {
    duration: 1,
    opacity: 0
}})

tl.from('#showcase', {
    ease: 'expo.expo'
})
.from('.anim1', {
    ease: 'power2.inOut',
    stagger: 0.5
})
// .from('.anim2', {
//     y: 10,
//     ease: 'expo.in',
//     stagger: 0.5
// })
.from('.popup', {
    y: 10,
    ease: 'power4.out',
    stagger: 0.2
})