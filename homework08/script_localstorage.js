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
        if(window.localStorage.getItem('name')){
            log.style.display = 'none';
            logOut.style.display = 'flex';
            innerText.innerHTML = `Пользователь ${window.localStorage.getItem('name')} вошел в систему`;
            
        }
    })();

    function logInHadler() {
        if(logInText.value=='Admin'||logInText.value=='admin'){
            window.localStorage.setItem('name', logInText.value);
            log.style.display = 'none';
            logOut.style.display = 'flex';
            innerText.innerHTML = `Пользователь ${window.localStorage.getItem('name')} вошел в систему`;
        } else alert('Wrong name, try again!')
    }

    function logOutHadler() {
        log.style.display = 'flex';
        logOut.style.display = 'none';
        window.localStorage.removeItem('name');
        
    }
}