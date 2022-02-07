function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var ec = getParameterByName('code');
if(ec==='404'){
  document.body.textContent = '404 not fucking found!'
} else if(ec === '69420' || ec === '69' || ec === '420'){
  document.body.textContent = 'lmao nice'
} else {
  document.body.textContent = 'hey uh buddy, yeah uhmmmm, yeah soo uhhhh, yeah... thats not an error code we support so uhhh yeaaahhhhhhh...'
}
