var tl = gsap.timeline({
    defaults: {
        duration: 1,
        opacity: 0
    }
})

tl.from('#showcase', {
    ease: 'expo.inOut'
})
    .from('.anim1', {
        ease: 'power2.in',
        stagger: 0.5
    })
    .from('.anim2', {
        delay: 0.2,
        y: 10,
        ease: 'expo.in',
        stagger: 0.5
    })
    .from('.popup', {
        delay: 0.2,
        y: 10,
        ease: 'power4.out',
        stagger: 0.2
    })

alert("This webpage is currently under construction. A newer version will be launching in the coming weeks.")