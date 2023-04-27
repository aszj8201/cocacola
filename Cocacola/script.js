const images = document.querySelectorAll('.image11');

const cocaImg = document.getElementById('coc');
const fanImg = document.getElementById('fan');
const spriteImg = document.getElementById('spr');

const spsSpan = document.querySelector('.sps');
const sps1Span = document.querySelector('.sps1');
const sps2Span = document.querySelector('.sps2');
const lorSpan = document.querySelector('.lor');
const bigSpan = document.querySelector('.big');

images.forEach((image) => {
    image.addEventListener('click', () => {
        images.forEach((otherImage) => {
            if (otherImage !== image) {
                otherImage.style.transform = 'translateY(0)';
                otherImage.style.transition = 'transform 0.5s ease'; /* 이미지가 천천히 내려오도록 transition을 추가합니다. */
            } else {
                image.style.transform = 'translateY(-20px)';
                image.style.transition = 'transform 0.5s ease'; /* 이미지가 천천히 올라오도록 transition을 추가합니다. */
            }
        });
    });
});

cocaImg.addEventListener('click', function () {
    spsSpan.style.backgroundColor  = 'red';
    sps1Span.style.backgroundColor  = 'red';
    sps2Span.style.backgroundColor  = 'red';
    lorSpan.style.backgroundColor  = 'red';
    bigSpan.style.backgroundColor  = 'red';
});

fanImg.addEventListener('click', function () {
    spsSpan.style.backgroundColor  = 'purple';
    sps1Span.style.backgroundColor  = 'purple';
    sps2Span.style.backgroundColor  = 'purple';
    lorSpan.style.backgroundColor  = 'purple';
    bigSpan.style.backgroundColor  = 'purple';
});

spriteImg.addEventListener('click', function () {
    spsSpan.style.backgroundColor  = '#28A745';
    sps1Span.style.backgroundColor  = '#28A745';
    sps2Span.style.backgroundColor  = '#28A745';
    lorSpan.style.backgroundColor  = '#28A745';
    bigSpan.style.backgroundColor  = '#28A745';
});

