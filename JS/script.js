'use strict'

$('#get').on('click', () => {
  $.ajax({
    url: 'http://vm.local:3000/website',
    dataType: 'JSON',
    type: 'GET'
  })
    .done((res) => {
      console.log(res);
      console.log(typeof (res));
      let senseiData = JSON.parse(res);
      $('#info').html(senseiData);
    })
    .fail((err) => {
      $('#info').html(err);
    });
});