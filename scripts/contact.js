function sendEmail() {
    let name = document.getElementById('name').value
    // let email = document.getElementById('email').value
    let subject = document.getElementById('subject').value
    let content = document.getElementById('content').value
    window.open(`mailto:mckenziewjday@gmail.com?subject=${name}: ${subject}&body=${content}`)
}

gsap.from('.anim1', {
    duration: 0.75,
    opacity: 0,
    width: 90,
    ease: 'bounce.out',
    stagger: 0.5
})

gsap.from('.reveal', {
    duration: 1,
    opacity: 0,
    y: 10,
    ease: 'power2.out',
    stagger: 0.5
})

gsap.from('.btn', {
    duration: 1,
    opacity: 0,
    ease: 'slow.in',
    delay: 1.6
})

gsap.from('.popup', {
    duration: 1,
    y: 100,
    ease: 'bounce.out',
    stagger: 0.05,
    delay: 1.5
})