
function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#demo").html("NEWWW PARAGRAPH #javascript #fire");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#doge-image").append(`<img class="img-circle" src="images/wowdoge.jpeg" />`);
}

/**function setTimeout() {
    function() {
      // modify this one line below, and see the result !
      var logoTitle = 'Jaemok Yoon';
      var logoRandom = '';
      var logoTitleContainer = l.text(0, '98%', '');*/
      //var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
   /**   logoTitleContainer.attr({
          fontSize: 60,
          fontFamily: 'Dosis',
          fontWeight: '600',
          color: black
      });

      function generateRandomTitle(i, logoRandom) {
          setTimeout( function() {
              logoTitleContainer.attr({ text: logoRandom });
          }, i*70 );
      }

      for( var i=0; i < logoTitle.length+1; i++ ) {
          logoRandom = logoTitle.substr(0, i);
          for( var j=i; j < logoTitle.length; j++ ) { 
              logoRandom += possible.charAt(Math.floor(Math.random() * possible.length)); 
          }
          generateRandomTitle(i, logoRandom);
          logoRandom = '';
      }

  }, 500 );

}*/