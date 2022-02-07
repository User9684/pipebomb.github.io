function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var person = getParameterByName('stabe');
var stabCount = getParameterByName('count');
if(person && stabCount){
  let string = `${person} got stabbed ${stabCount} times! Lmfao!!!!!`
  document.body.textContent = string
}
