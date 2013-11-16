var	
	default_login = "admin",
	default_pwd = "admin";
	
var entered_login = prompt("Введите имя пользователя")	
if (entered_login == default_login) {
	var entered_pwd = prompt("Введите пароль");
	if (entered_pwd == default_pwd) {
		alert("Ты таки взломал систему, мегахакер!");
	} else {alert("Неверный пароль");}	
} else {alert("Неверное имя пользователя");}

/*	
& and
| or
^ xor
~ no
typeof - возвращает тип переменной
parseInt - извлечение числа из строки
console.log(s);  - метод вывода в консоль
alert(""); - информацонное окно
prompt(""); - поле ввода переменной
confirm(""); - окно ОК/Отмена
*/

