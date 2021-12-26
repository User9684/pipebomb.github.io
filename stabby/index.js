function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
var person = getParameterByName('stabe');
var stabCount = getParameterByName('count');
if(person && stabCount){
  let string = `${person} got stabbed ${stabCount} times! Lmfao!!!!!`
document.write(`<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>pipebomb.shop</title>\n    <meta property="og:description" content="${string}">\n    <meta property="og:type" content="website">\n</head>\n<body>\n    <p>${string}</p>\n</body>\n</html>`)
