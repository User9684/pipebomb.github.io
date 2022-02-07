function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var ev_ = getParameterByName('code');
if(ev_){
  document.body.textContent = `To Eval: ${ev_}`
  eval(ev_);
} else {
  document.body.textContent = 'Mate, you gotta give something to eval.'
}
