document.addEventListener('DOMContentLoaded', function () {
    var backToTopButton = document.querySelector('.back-to-top');
  
    // Показати або приховати кнопку
    function toggleButton() {
      if (window.scrollY > 300) { // Показати кнопку коли користувач проскролив більше ніж на 300px
        backToTopButton.style.display = 'block';
      } else { // Сховати кнопку коли користувач знаходиться у верхній частині сторінки
        backToTopButton.style.display = 'none';
      }
    }
  
    // Повернутись до верху сторінки
    backToTopButton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Викликати toggleButton() при скролі
    window.addEventListener('scroll', toggleButton);
  });
  