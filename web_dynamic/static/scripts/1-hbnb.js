/*
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
