'use strict'

$('#get').on('click', () => {
  $.ajax({
    url: 'http://localhost:3000/website',
    dataType: 'JSON',
    type: 'GET'
  })
    .done((res) => {
      for (let key in res) {
        let time = new Date(res[key].created_at).toLocaleString();
        $('#info').text(time);
        $('#info').text(res[key].user_name);
        $('#info').text(res[key].room_name);
        $('#info').text(res[key].address);
      }
      console.log(res[0]);
    })
    .fail((err) => {
      $('#info').html(err);
    });
});