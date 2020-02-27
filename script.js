function sendEmail() {
    let name = document.getElementById('name').value
    // let email = document.getElementById('email').value
    let subject = document.getElementById('subject').value
    let content = document.getElementById('content').value
    alert(`${name} says: ${content}`)
    window.open(`mailto:mckenziewjday@gmail.com?subject=${name}: ${subject}&body=${content}`)
}