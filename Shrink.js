var size = parseInt($('p').css('font-size').replace('px', ''));
var i = 0;
var tid = setInterval(shrink, 500);
function shrink() {
  var textSize = size - i;
  $('p').css({'font-size': textSize + 'px'})
  i += 0.1;
  if(i >= size){
  abortTimer();
}
}
function abortTimer() {
  clearInterval(tid);
}
$('body').click(reset);
function reset(){i = 0};