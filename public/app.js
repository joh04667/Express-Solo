$(function(){

 $('.button').on('click', function(event) {
   event.preventDefault;
    $.get('http://localhost:3000/balance').done(function(response) {
      var data = response;
      $('.cashmoney').empty();
      $('.cashmoney').append('<h1>' + response + '</h1>').hide().fadeIn('slow');
    })
 });














});
