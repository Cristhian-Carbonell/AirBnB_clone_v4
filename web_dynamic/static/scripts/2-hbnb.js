/*
script
*/
$(document).ready(function () {
    const idAmenities = {};
    $('input:checkbox').click(function () {
      $(this).each(function () {
        if (this.checked) {
          idAmenities[$(this).data('id')] = $(this).data('name');   
        } else {
          delete idAmenities[$(this).data('id')];
        }
      });
      if (Object.values(idAmenities).length > 0) {
        $('.amenities h4').text(Object.values(idAmenities).join(', '));
      } else {
        $('.amenities h4').html('&nbsp');
      }
    });
  });

$.get('https://0.0.0.0:5000/api/v1/status/', function (data, status) {
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});