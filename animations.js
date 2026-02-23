const carousel = document.querySelector('.mockups');
const cards = document.querySelectorAll('.mockup');
let current = 0;
const interval = 3000; // 3s per card
let timer;

function showCard(index) {
   cards.forEach(card => card.classList.remove('active'));
   cards[index].classList.add('active');

   // Dynamic centering based on bounding boxes
   const cardRect = cards[index].getBoundingClientRect();
   const carouselRect = carousel.getBoundingClientRect();
   const cardCenter = cardRect.left + cardRect.width / 2;
   const carouselCenter = carouselRect.left + carouselRect.width / 2;
   const scrollLeft = carousel.scrollLeft + (cardCenter - carouselCenter);

   carousel.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
   });
}

function cycleCards() {
   if (current < cards.length) {
      showCard(current);
      current++;
   }

   if (current === cards.length) {

      // hold last card for one full interval, then reset
      setTimeout(() => {
         carousel.classList.add('zooming');

         setTimeout(() => {
            carousel.classList.remove('zooming');
            current = 0;
            showCard(current);
            current++;
         }

            , 1000); // zoom animation duration
      }

         , interval);
   }
}

function startCarousel() {
   timer = setInterval(() => {
      if (current < cards.length) {
         cycleCards();
      }
   }

      , interval);
}

function stopCarousel() {
   clearInterval(timer);
}

// run immediately
cycleCards();
startCarousel();

// pause on hover
carousel.addEventListener('mouseenter', stopCarousel);
carousel.addEventListener('mouseleave', startCarousel);

// JS to toggle class
window.addEventListener('scroll', () => {
   const nav = document.querySelector('nav');
   if (window.scrollY > window.innerHeight * 0.8) {
      nav.classList.add('scrolled');
   } else {
      nav.classList.remove('scrolled');
   }
});
