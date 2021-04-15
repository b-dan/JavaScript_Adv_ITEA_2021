function validate(elem, pattern) {
    var res = pattern.test(elem.value);
    if (res === false) {
        elem.className = "invalid";
    } // установка CSS класса 
    else {
        elem.className = "valid";
    }
}
// обработчики событий изменения текста в окне.
function nameOnChange() {
    var pattern = /\S/;
    validate(this.form1.userName, pattern);
}

function emailOnChange() {
    var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
    validate(this.form1.email, pattern);
}

function zipcodeOnChange() {
    var pattern = /\d{5}/;
    validate(this.form1.zip, pattern);
}

// событие при отправке формы на сервер.
function onsubmitHandler(event) {
    for (var i = 0; i < form1.elements.length; ++i) {
        var elem = form1.elements[i];
        elem.className = "valid"
        // проверка типа элемента и наличия обработчика события onchange.
        if (elem.type == "text" && elem.onchange) {
            elem.onchange(); // запуск события onchange
            if (elem.className == "invalid") {
                alert("Допущены ошибки при заполнении формы.");
                event.preventDefault();
                return false; // отмена отправки формы.
            }
        }
    }     
}