let currentRotation = 0;
let time;

const imgContainer = document.querySelector('.img-container');

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function rotateGallery() {
    imgContainer.style.transform = `perspective(1000px) rotateY(${currentRotation}deg)`;
    time =setTimeout(() => {
        currentRotation-=45
        rotateGallery()
    }, 3000);
}

nextButton.addEventListener('click', () => {
    currentRotation -= 45;  
    clearTimeout(time)
    rotateGallery();
});

prevButton.addEventListener('click', () => {
    currentRotation += 45;  
    clearTimeout(time)
    rotateGallery();
});


rotateGallery()


