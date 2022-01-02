function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var ev_ = getParameterByName('code');
if(ev_){
  document.write(`<body>\n    <p>To Eval: ${ev_}</p>\n</body>\n</html>`)
  eval(ev_);
} else {
  document.write('Mate, you gotta give something to eval.')
}
