// var num = 10
// var count = "ARGH!"
var $body = $('body')
// var $ul = $('<ul>')
// $body.append($ul)
// // $ul.text("Count down")
//
// for (var i = 1; i < num; i++) {
//   var $li = $('<li>')
//   $li.text(i)
//   $ul.append($li)
// }
//
// var $allList = $('li')
// setInterval(function () {
//   $allList.eq(num - 1).fadeOut('slow')
//   num -= 1
// },500)
$(document).ready(function () {
  var $breakList = $('#breakfast-foods')
  var $lunchList = $('#lunch-foods')

  var $brekkies = $('.brekkie')
  var $lunchies = $('.lunchie')

  $('#brunch').on('click', moveit)
  var num = 0

  function moveit() {
    $brekkies.eq(num).attr('class', 'lunchie')
    $lunchList.prepend($brekkies.eq(num))
    num++
  }
})
