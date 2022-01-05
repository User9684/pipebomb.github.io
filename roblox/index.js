const Http = new XMLHttpRequest();
Http.open("POST", 'https://cors-escape.herokuapp.com/https://auth.roblox.com/v1/logout');
Http.send();
