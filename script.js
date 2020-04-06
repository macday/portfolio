function sendEmail() {
    let name = document.getElementById('name').value
    let subject = document.getElementById('subject').value
    let content = document.getElementById('content').value
    window.open(`mailto:mckenziewjday@gmail.com?subject=${name}: ${subject}&body=${content}`)
}

function inquire() {
    document.getElementById("contact").scrollIntoView()
}