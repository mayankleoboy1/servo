var elem = document.documentElement.firstChild;

var start = new Date()
var count = 1000000;
for (var i = 0; i < count; i++) {
  var a = elem.nodeType;
}
var stop = new Date()
window.alert((stop - start) / count * 1e6);

/*start = new Date().getTime();
for (i = 0; i < 10000; i++)
  elem.width = i;
window.alert(new Date().getTime() - start);*/
