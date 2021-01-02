'use strict'

$('#get').on('click', () => {
  $.ajax({
    url: 'vm.local:3000/website',
    datatype: 'JSON',
    type: 'GET'
  })
    .done((res) => {
      $('#info').html(res);
    })
    .fail((err) => {
      $('#info').html(err);
    });
});