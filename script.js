AOS.init({ duration: 1000 })

function sendEmail() {
    let name = document.getElementById('name').value
    let subject = document.getElementById('subject').value
    let content = document.getElementById('content').value
    window.open(`mailto:mckenziewjday@gmail.com?subject=${name}: ${subject}&body=${content}`)
}

function inquire(service) {
    document.getElementById('subject').value = service
    document.getElementById("contact").scrollIntoView()
}

function toggleMenu() {
    var nav = document.getElementById("nav-panel")
    var toggle = document.getElementById("menu-toggle")
    if (nav.style.top === "-100%") {
        toggle.classList.add("rotate-right")
        toggle.classList.remove("rotate-left")

        nav.style.top = "0"
        nav.classList.add("slide-down")
        nav.classList.remove("slide-up")
    } else {
        toggle.classList.add("rotate-left")
        toggle.classList.remove("rotate-right")

        nav.classList.add("slide-up")
        nav.classList.remove("slide-down")
        nav.style.top = "-100%"
    }
}