var carousel = document.querySelector('.carousel');
var cellCount = 9;
var selectedIndex = 0;

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function() {
  selectedIndex++;
  rotateCarousel();
});

// Отримуємо посилання на кнопку "All foto"
var allFotoButton = document.querySelector('.all-foto-button');
allFotoButton.addEventListener('click', function() {
  // Здійснюємо перехід на сторінку Projects.html
  window.location.href = 'Projects.html';
});

