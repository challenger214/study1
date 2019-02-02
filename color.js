var Link = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
var Body = {
  setColor:function(color){
    document.querySelector('body').style.color = color;
  }
}
function nightDayHandler (self){
  var target = document.querySelector('body');
  if (self.value === 'night'){
    Body.setColor('green');
    self.value = 'day';
    Link.setColor('powderblue');
  }
  else {
    Body.setColor('black');
    self.value = 'night';
    Link.setColor('red');
  }
}
