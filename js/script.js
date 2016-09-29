var num = 5
var count = "ARGH!"
var $body = $('body')
var $ul = $('<ul>')
$body.append($ul)
// $ul.text("Count down")

for (var i = 0; i < num; i++) {
  var $li = $('<li>')
  $li.text(count)
  $ul.append($li)
}
