





const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    burgerBtn.classList.toggle('active'); // добавляем класс для крестика
});




document.addEventListener("click", (e) => {
    const clickedInsideNav = navMenu.contains(e.target);
    const clickedBurger = burgerBtn.contains(e.target);

    if (!clickedInsideNav && !clickedBurger) {
        navMenu.classList.remove("open");
        burgerBtn.classList.remove("active");
    }
});
// Smooth scroll + close menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navMenu.classList.remove('open');
        burgerBtn.classList.remove('active');
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});



window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});





document.querySelectorAll('.home-link ').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


const swiper = document.querySelector('.hero-swiper')
if(swiper){

    const swiper = new Swiper('.hero-swiper', {
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        pagination:{
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
const infoSwiper = document.querySelector('.infoSwiper')
if(infoSwiper){

    const infoSwiper = new Swiper('.infoSwiper', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

}













const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2,
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});



document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('open');
    });
});


const cookieNotice = document.getElementById('cookieNotice');
const cookieAccept = document.getElementById('cookieAccept');

// Если ещё не согласился — показать
if (!localStorage.getItem('cookieAccepted')) {
    setTimeout(() => {
        cookieNotice.classList.add('show');
    }, 1000); // показываем через 1 сек
}

cookieAccept.addEventListener('click', () => {
    localStorage.setItem('cookieAccepted', 'true');
    cookieNotice.classList.remove('show');
});
