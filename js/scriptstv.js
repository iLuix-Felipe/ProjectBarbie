

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 50) {
            $(".navbar").addClass("sticky")
        } else {
            $(".navbar").removeClass("sticky")
        }
    })
})

const videos = document.querySelectorAll("div.video-content")

videos.forEach(element => {
    element.addEventListener('click', takeVideo)
})

function takeVideo(e) {
    const source = e.target
    addVideo(source.dataset.local)
}

function addVideo(video) {
    while (document.getElementById('video-watch').firstChild) {
        document.getElementById('video-watch').removeChild(document.getElementById('video-watch').firstChild)
    }

    const container = document.createElement('video')
    container.setAttribute('src', video)
    container.setAttribute('controls', true)
    container.classList.add('video-Dinamic')
    window.scrollTo(100, 0);
    container.setAttribute('autoplay', true)
    document.getElementById('video-watch').appendChild(container)
}