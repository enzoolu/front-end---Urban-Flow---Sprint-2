const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const link5 = document.getElementById('link5');
const link6 = document.getElementById('link6');

document.addEventListener('scroll', () => {
    let scrollPosition = (document.documentElement.scrollTop);
    console.log(scrollPosition);
    
    if (scrollPosition >= 1008 && scrollPosition <= 2015) {
        link1.classList.add('link-color');
    } else {
        link1.classList.remove('link-color');
    }


    if (scrollPosition > 2015 && scrollPosition <= 3022) {
        link2.classList.add('link-color');
    } else {
        link2.classList.remove('link-color');
    }


    if (scrollPosition > 3022 && scrollPosition <= 4029) {
        link3.classList.add('link-color');
    } else {
        link3.classList.remove('link-color');
    }


    if (scrollPosition > 4029 && scrollPosition <= 5036) {
        link4.classList.add('link-color');
    } else {
        link4.classList.remove('link-color');
    }


    if (scrollPosition > 5036) {
        link5.classList.add('link-color');
        link6.classList.add('link-color');
    } else {
        link5.classList.remove('link-color');
        link6.classList.remove('link-color');
    }
})

    
