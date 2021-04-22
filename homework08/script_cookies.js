window.addEventListener('load', init);

function init() {
    let log = document.querySelector('#log-in');
    let logInSubmit = document.querySelector('#log-in [type="button"]');
    let logInText = document.querySelector('#log-in [type="text"]');
    logInSubmit.addEventListener('click', logInHadler);

    let logOut = document.querySelector('#log-out');
    let innerText = document.querySelector('#innerText');
    let logOutSubmit = document.querySelector('#log-out [type="button"]');
    logOutSubmit.addEventListener('click', logOutHadler);

    (function() {
        if(findCookieValue('name')){
            log.style.display = 'none';
            logOut.style.display = 'flex';
            innerText.innerHTML = `Пользователь ${findCookieValue('name')} вошел в систему`;
            
        }
    })();

    function logInHadler() {
        if(logInText.value=='Admin'||logInText.value=='admin'){
            document.cookie = 'name=' + encodeURIComponent(logInText.value) + ';';
            log.style.display = 'none';
            logOut.style.display = 'flex';
            innerText.innerHTML = `Пользователь ${findCookieValue('name')} вошел в систему`;
        } else alert('Wrong name, try again!')
    }

    function logOutHadler() {
        log.style.display = 'flex';
        logOut.style.display = 'none';
        document.cookie = `name=${findCookieValue('name')}; max-age=0`;
        
    }

    function findCookieValue(cookieName) {
        var allcookies = document.cookie;
        var pos = allcookies.indexOf(cookieName + "=");

        // Если cookie с указанным именем найден, извлечь его значения.
        if (pos != -1) {
            var start = pos + cookieName.length + 1;
            var end = allcookies.indexOf(";", start);

            if (end == -1) end = allcookies.length;

            var value = allcookies.substring(start, end);
            value = decodeURIComponent(value);
            return value;
        }
    };
}