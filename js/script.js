$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 50) {
            $(".navbar").addClass("sticky")
        } else {
            $(".navbar").removeClass("sticky")
        }
    })
})

function fecharL() {
    var display = document.getElementById("dialogLuiz").style.display
    display = "none"
    document.getElementById("dialogLuiz").style.display = display
}

function abrirL() {
    var display = document.getElementById("dialogLuiz").style.display
    display = "flex"
    document.getElementById("dialogLuiz").style.display = display
}

function fecharJ() {
    var displayJ = document.getElementById("dialogJunior").style.display
    displayJ = "none"
    document.getElementById("dialogJunior").style.display = displayJ
}

function abrirJ() {
    var displayJ = document.getElementById("dialogJunior").style.display
    displayJ = "flex"
    document.getElementById("dialogJunior").style.display = displayJ
}