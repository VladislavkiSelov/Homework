$(document).ready(function(){
    $('.carousel').slick({
    dots: true
    });
  });





//   fullWidth: true;
//   indicators: true;





$(function() {
  $('nav a').on('click', function() {
  $('.triangle-container').remove();
    show_content($(this).index());
  });
  
  show_content(0);

  function show_content(index) {
    // Make the content visible
    $('.tabs .content.visible').removeClass('visible');
    $('.tabs .content:nth-of-type(' + (index + 1) + ')').addClass('visible');

    // Set the tab to selected
    $('nav a.selected').removeClass('selected');
    $('nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');
    // Add arrow
    $( 'nav a.selected').append( "<div class='triangle-container'></div>" );
    // How to remove the arrow and only show it on the selected tab?
  }
})( jQuery ); 
