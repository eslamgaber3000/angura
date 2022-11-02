var container=JSON.parse(localStorage.getItem('user sign up'))
var registrationEimale=document.getElementById('registrationEimale')
var registrationPassword=document.getElementById('registrationPassword')
 
var storedEimale;


function login() {
    for (let i = 0; i < container.length; i++) {
        storedEimale=container[i].ueimale
  }
  if (registrationEimale.value ==storedEimale) {
    window.location.href="home.html"
  }else{console.log("nooooo")}
     
}







// function validationEimale() {
//     var regex=/^[A-Za-z][a-zA-Z0-9]{3,5}@(gimale|yahoo)\.com$/
//   if (regex.test(registrationEimale.value)==true) {
//     return true;
//   } else{ return false} 
// }
// function validationPassowrd() {
//     var regex=/^[a-zA-Z0-9\!\@\#\$\%\^\&]{8,12}$/
//   if (regex.test(registrationPassword.value)==true) {
//     return true;
//   } else{ return false} 
// }
