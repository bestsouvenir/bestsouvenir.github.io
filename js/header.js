var meta =  document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width";
document.getElementsByTagName('head')[0].appendChild(meta);



var link =  document.createElement('link');
link.href = "css/header.css" ;
link.rel = "stylesheet";
document.head.appendChild(link);

var jQ = false;
function initJQ() {
  if (typeof(jQuery) == 'undefined') {
    if (!jQ) {
      jQ = true;
      document.write('<scr' + 'ipt type="text/javascript" src="js/jquery-3.2.1.min.js"></scr' + 'ipt>');
    }
    setTimeout('initJQ()', 50);
  } else {
    (function($) {
    $(function() {

      // здесь пишем jQuery код
	$('.header').load('header.html'); // загрузку HTML кода из файла example.html 
    })
    })(jQuery)
  }
}
initJQ();