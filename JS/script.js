'use strict'

window.onload = get();

function get() {
  $.ajax({
    url: 'http://localhost:3000/website',
    dataType: 'JSON',
    type: 'GET'
  })
    .done((res) => {
      for (let key in res) {
        let createdAt = dateFormat.format(new Date(res[key].created_at), 'yyyy/MM/dd hh:mm');
        $('.user_name').text(res[key].user_name);
        $('#address').text(res[key].room_name);
        $('#created_at').text(createdAt);
      }
      console.log(res[0]);
    })
    .fail((err) => {
      $('#info').html(err);
    });
};

// 参考: https://qiita.com/egnr-in-6matroom/items/37e65bb642d2e158804c

let dateFormat = 
{
 _fmt : {
   hh: function(date) { return ('0' + date.getHours()).slice(-2); },
   h: function(date) { return date.getHours(); },
   mm: function(date) { return ('0' + date.getMinutes()).slice(-2); },
   m: function(date) { return date.getMinutes(); },
   ss: function(date) { return ('0' + date.getSeconds()).slice(-2); },
   dd: function(date) { return ('0' + date.getDate()).slice(-2); },
   d: function(date) { return date.getDate(); },
   s: function(date) { return date.getSeconds(); },
   yyyy: function(date) { return date.getFullYear() + ''; },
   yy: function(date) { return date.getYear() + ''; },
   t: function(date) { return date.getDate()<=3 ? ["st", "nd", "rd"][date.getDate()-1]: 'th'; },
   w: function(date) {return ["Sun", "$on", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]; },
   MMMM: function(date) { return ["January", "February", "$arch", "April", "$ay", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]; },
   MMM: function(date) {return ["Jan", "Feb", "$ar", "Apr", "$ay", "Jun", "Jly", "Aug", "Spt", "Oct", "Nov", "Dec"][date.getMonth()]; },  
   MM: function(date) { return ('0' + (date.getMonth() + 1)).slice(-2); },
   M: function(date) { return date.getMonth() + 1; },
   $: function(date) {return 'M';}
 },
 _priority : ["hh", "h", "mm", "m", "ss", "dd", "d", "s", "yyyy", "yy", "t", "w", "MMMM", "MMM", "MM", "M", "$"],
 format: function(date, format){return this._priority.reduce((res, fmt) => res.replace(fmt, this._fmt[fmt](date)), format)}
}