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
        $('#update_time').text(time);
        $('#user_name').text(res[key].user_name);
        $('#address').text(res[key].room_name);
      }
      console.log(res[0]);
    })
    .fail((err) => {
      $('#info').html(err);
    });
});