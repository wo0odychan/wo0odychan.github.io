
const ASIDE = document.querySelectorAll('.gnb li');
const SECTION = document.querySelectorAll('.section');

const NUM = document.querySelector('.t_num')

new fullpage('#main', {
    anchors: ['HOME', 'PROJECT', 'TRAINING', 'PROFILE'],
    css3: false,
    scrollOverflow: false,

    controlArrows: false,
    loopHorizontal: false,

    // responsiveWidth: 768,

    afterLoad: function (origin, destination, direction, trigger) {
        console.log(destination.index, ASIDE[destination.index]);
        ASIDE.forEach(it => it.classList.remove('on'));
        ASIDE[destination.index].classList.add('on');
        SECTION.forEach(it => it.classList.remove('on'));
        SECTION[destination.index].classList.add('on');
    },

    afterSlideLoad: function (section, origin, destination, direction, trigger) {
        // console.log(destination.index, SLIDE_ITM[0]);
        NUM.innerHTML = `0${destination.index + 1}`
    },
});
const SLIDE = document.querySelector('#slide_move');

SLIDE.addEventListener('wheel', (e) => {

    console.log(e, e.deltaY); // e.deltaY 100, -100

    if (e.deltaY > 0) {
        fullpage_api.moveSlideRight();
    } else {
        fullpage_api.moveSlideLeft();
    }

});

const tabItem = document.querySelectorAll('.tab_menu li')
const tabInner = document.querySelectorAll('.trn li');

const tabBg = document.querySelector('.tab_bg');

tabItem.forEach((tab, idx) => {
    tab.addEventListener('click', function () {
        tabInner.forEach((inner) => {
            inner.classList.remove('on')
        })

        tabItem.forEach((item) => {
            item.classList.remove('on')
        })

        tabItem[idx].classList.add('on');
        tabInner[idx].classList.add('on');
        tabBg.style.background = `url(../images/tr0${idx + 1}.png) no-repeat center center/cover`;

    })
})


const T = document.querySelector('.profile .flower');
const TXT = document.querySelectorAll('.profile .flower span');
//const STXT = [...TXT].map(it => `<span>${it}</span>`).join('');
// T.innerHTML = STXT;

//const SPAN = T.querySelectorAll('span');

console.log(TXT)

TXT.forEach((it, idx) => {
    it.style.cssText = `
font-size: 28px;
transform: translate(-50%, 0) rotate(${50 / TXT.length * idx}deg);
`;
});

gsap.to(T, {
    rotate: 360,
    duration: 10,
    repeat: -1,
    ease: 'linear'
});



const Mopen = document.querySelector('.mopen');
const GNB = document.querySelector('.gnb');

Mopen.addEventListener('click', function () {
    Mopen.classList.toggle('on');
    GNB.classList.toggle('on');
});

GNB.addEventListener('click', function () {
    GNB.classList.remove('on');
    Mopen.classList.remove('on');
});