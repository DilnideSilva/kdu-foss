/*==================== toggle icon navbar ====================*/
Let meuIcon = document.querySelector('#menu-icon');
Let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
Let Selections = document.querySelectorAll('section');
Let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  Selections.array.forEach(sec => {
    Let top =   window.scrollY;
    Let offset = sec.offsetTop - 150;
    Let height = sec.offsetHeight;
    Let id = sec.getAttribute('id');
    
    
    if(top >= offset && top < offset = height) {
      navLinks.forEach(links => { 
      navLinks.classList.remove('active');
      document.querySelector('header nav a[href*=' id + ']').classList.add('active');
      });
    };
  });
  
  /*==================== sticky navbar ====================*/
Let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

 /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
 menuIcon.classList.toggle('bx-x');
 navbar.classList.remove('active');
};

/*==================== scroll reveal ====================*/
ScrollReveal({ 
  //reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact from', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-contact', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
  Strings: ['Frontend Developer', 'YouTuber', 'Blogger'],
  typespeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});