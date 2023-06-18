const slider = document.querySelector('.slider'),
    slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false,
    startPos = 0,
    prevTranslate = 0,
    currentTranslate = 0,
    animationId,
    currentIndex = 0

slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())

    slide.addEventListener('pointerdown', pointerDown(index))
    slide.addEventListener('pointerup', pointerUp)
    slide.addEventListener('pointerleave', pointerUp)
    slide.addEventListener('pointermove', pointerMove)
})

window.addEventListener('resize', setPositionByindex)

window.oncontextmenu = function(event) {
    event.preventDefault()
    event.stopPropagation()
    return false
}

function pointerDown(index) {
    return function(event) {
        currentIndex = index
        startPos = event.clientX
        isDragging = true
        animationId = requestAnimationFrame(animation)
        slider.classList.add('grabbing')
    }
}

function pointerMove(event) {
    if (isDragging) {
        const currentPosition = event.clientX
        currentTranslate = prevTranslate + currentPosition - startPos
    }
}

function pointerUp() {
    cancelAnimationFrame(animationId)
    isDragging = false
    
    const movedBy = currentTranslate - prevTranslate

    if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1
    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

    slider.classList.remove('grabbing')

    setPositionByindex()
}

function animation() {
    setSliderPosition()
    if (isDragging) requestAnimationFrame(animation)
}

function setPositionByindex() {
    currentTranslate = currentIndex * -window.innerWidth
    prevTranslate = currentTranslate
    setSliderPosition()
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`
}















