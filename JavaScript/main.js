// alert("Привет это урок про функции")
//
// function jobb(Hello){
//   document.write(Hello);
// }
//
// function math(a,b){
//   console.log(a + b);
// }
//
// math(5, 7);
// jobb('Hello');

// function math(arr) {
//   var sum = 0;
//   for( var i = 0; i < arr.length; i++)
//     sum += arr[i];
//   return sum;
// }
//
//
// var fact = [6, 8, 1];
// math(fact);
// var res = math(fact);
// console.log(res);

// var num = 10;
// function info() {
//   var nu m = 10;
//   console.log(num);
// }
// info()


// события
// var num = 0;
//
// function onClick(jobb){
//   num++;
//   jobb.innerHTML = 'Кол-во нажатий ' +  num;
//   jobb.stile.background = "blue";
//   jobb.stile.color="red";
// }
function chek(el) {
  var name = el.name.value;
  var pass = el.pass.value;
  var repass = el.repass.value;

  var yt = "Заполните все поля"

  if(name =="" || pass =="" || repass =="")
    yt ="Заполните все поля";
  else if(name.length <=1 || name.length > 10 )
    yt = "Введите коректное имя";
  else if (pass != repass)
    yt = 'Пароли не совпалают.'
  else if (pass.split("$").length > 1)
   yt =  'запретный элмент'

   if(yt != ""){
     document.getElementById('error').innerHTML = yt;
     return false;
   }else {
     alert("Все приянто ")
     return true;
   }



  return false;
}
