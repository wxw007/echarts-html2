window.onload=function() {
    function fixRem() {
      var windowWidth = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth;
      // windowWidth = windowWidth > 750 ? 750 : windowWidth;
      var rootSize = 100 * (windowWidth / 1920);
      var htmlNode = document.getElementsByTagName("html")[0];
      htmlNode.style.fontSize = rootSize + 'px';
    }
    fixRem();
    window.addEventListener('resize', fixRem, false);
  }