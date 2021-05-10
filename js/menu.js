(function () {
  var menu = document.getElementById('header'); // colocar em cache
  window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        document.getElementById("logo").src = 'images/LogoWhite.svg';
        menu.classList.add('menu-scroll');
      }else {
        menu.classList.remove('menu-scroll');
        document.getElementById("logo").src = 'images/LogoBlack.svg';

    };
  });
})();