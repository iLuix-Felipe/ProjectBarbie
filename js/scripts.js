const sendBtn = document.getElementById('text-s')
sendBtn.addEventListener('click', message)
const close = document.getElementsByClassName('close')[0]



$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 100) {
            $(".navbar").addClass("sticky")
        } else {
            $(".navbar").removeClass("sticky")
        }
    })
})
$(".menu-toggler").click(function() {
    $(this).toggleClass("active")
    $(".nav-menu").toggleClass("active")
})

function message() {
    document.getElementById('dialog').style.display = "flex"
}
close.onclick = function() {
    document.getElementById('dialog').style.display = "none"
}
window.onclick = function(event) {
    if (event.target == document.getElementById('dialog')) {
        document.getElementById('dialog').style.display = "none"
    }
}