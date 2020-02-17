// var mp = document.getElementById('main-panel')
// document.addEventListener('DOMContentLoaded', (event) => {
//     fade(mp, 20)
// });

// function fade(element, time) {
//     var op = 0.1  // initial opacity
//     var mg = 100
//     console.log(element)
//     var timer = setInterval(function () {
//         if (op >= 1) {
//             clearInterval(timer)
//         }
//         element.style.opacity = op
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")"
//         op += op * 0.1
//     }, time)
// }

// document.querySelectorAll('.nav-button').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault(); //prevent default behaviour

//         var panelID = this.id + '-panel' //button has root name of panel
//         element = document.getElementById(panelID)
//         element.scrollIntoView({ //smooth scroll to panel
//             behavior: "smooth"
//         })
//         fade(element, 30)
//     });
// });