// ------завдання №1------
alert('завдання №1');
function isInteger(num) {
  return(num ^ 0) === num;
}

function pow(x, n) {
  var result = x;
  for (var i = 1; i < n; i++) {
    result *= x;
  }
  return result;
  }

var x = +prompt('задайте число x', '');
var n = +prompt('задайте n степінь числа x', '');

if ( isInteger(x) && isInteger(n) && n >= 1 ) {
  console.log('Степінь ', n, ' числа ', x,' дорівнює ',pow(x, n));
  } else {
    alert('x i n повинні бути цілими числами та степінь n >=1');
  }

  // ------завдання №2------
alert('завдання №2');
var arrName = [];
// заповнюємо масив
for (var i = 0; i < 5; i++) {
  arrName[i] = prompt('користувач ' + i, '');
}
var userName = prompt("Введіть ім'я користувача", '');
console.log(userName);

// перевірка імені в масиві масив
var flag = 5;
for (var i = 0; i < 5; i++) {
  if (userName == arrName[i]) {
    flag = i;
    break;
  }
}

//вивід повідомлення
if (flag < 5) {
  alert(userName + ', Ви успішноо увійшли');
} else {
  alert('Ви не авторизовані!!!');
}
