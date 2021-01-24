setInterval(function time() {
  var d = new Date();
  var da = d.getDate();
  var month = d.getMonth() + 1;
  if ((month + '').length == 1) {
    month = '0' + month;
  }
  var year = d.getFullYear();
  var hours = d.getHours();
  var min = d.getMinutes();
  if ((min + '').length == 1) {
    min = '0' + min;
  }
  var sec = d.getSeconds();
  if ((sec + '').length == 1) {
    sec = '0' + sec;
  }
  jQuery('#the-final-countdown p').html(da + '/' + month + '/' + year + '&nbsp' + hours + ':' + min + ':' + sec)
}, 1000);

