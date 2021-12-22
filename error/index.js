function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var ec = getParameterByName('code');
if(ec==='404'){
  document.write('404 not fucking found!')
} //man i have no damn clue how to do this LOL
