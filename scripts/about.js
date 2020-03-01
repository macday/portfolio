gsap.from('.progress-fade', {
    duration: 1,
    stagger: 0.1,
    delay: 0.1,
    width: 0
})

gsap.from('.word-fade', {
    duration: 1,
    stagger: 0.1,
    opacity: 0
})

gsap.from('.blink', {
    opacity: 0,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true
})