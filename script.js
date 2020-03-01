gsap.from('#showcase', {
    duration: 1.5,
    y: -200,
    opacity: 0,
    ease: 'expo.out'
})

gsap.from('.anim1', {
    duration: 1,
    opacity: 0,
    ease: 'rough',
    stagger: 0.6,
    delay: 1.6
})

gsap.from('.anim2', {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: 'expo.in',
    stagger: 0.6,
    delay: 1.8
})