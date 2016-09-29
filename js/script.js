var input = 5
var num = input + 1
var count = "ARGH!"
var $body = $('body')
var $ul = $('<ul>')
$body.append($ul)
// $ul.text("Count down")

for (var i = 1; i < num; i++) {
  var $li = $('<li>')
  $li.text(i)
  $ul.append($li)
}
