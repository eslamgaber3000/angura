


var signupName=document.getElementById("signupName")
var signupEimale=document.getElementById("signupEimale")
var signupPassword=document.getElementById("signupPassword")
var signupBtn=document.getElementById('signupBtn')
var required=document.getElementById('required')
var done=document.getElementById('done')
 var usersContainer=[];

 

function signupUser() {
    if ( falidateuserName()&&validationPassowrd()&&signupName.value!=""&&signupEimale.value!=""&&signupPassword.value!="") {
        done.classList.remove('d-none')
        var user={
            uName:signupName.value,
            uEimale:signupEimale.value,
            uPassword:signupPassword.value,
        }
        usersContainer.push(user)
        localStorage.setItem('sign up',JSON.stringify(usersContainer) )
        console.log(user)
        console.log(usersContainer)  
    }
   else{
    required.classList.replace("d-none","d-block")
   }
}
signupBtn.addEventListener('click',signupUser)

function falidateuserName() {
    var regex=/^[A-Za-z]{3,10}$/
    if (regex.test(signupName.value)==true) {
       
        return true;
    }
    else{
      return false}
}
console.log(signupName.value)
// for (var i = 0; i < usersContainer.length; i++) {
//     
//     // if (usersContainer[i]=null) {
//         document.addEventListener('keypress',function (e) {
//             if (e.code=="Enter") {
//                 signupUser() 
//             }
               
//         }) 
        

//     // }else{
//     //     required.classList.replace('d-none','d-block')
//     // }
// }





// var done=document.getElementById('done')
// var exist=document.getElementById('exist')

// var signupContainer=[]

// var container=JSON.parse(localStorage.getItem('user sign up'))
// var eimale;
// for (let i = 0; i < container.length; i++) {
  
//    var eimale= container[i].ueimale

// } 
// console.log(typeof(eimale))
// function signingup() {
//     {
//         var user={
//             uName:signupName.value,
//             ueimale:signupEimale.value,
//             upassword:signupPassword.value
//         }
//         signupContainer.push(user);

//         console.log(user)
//         console.log(signupContainer) 
//     }
      
//     }
    



function validationPassowrd() {
    var regex=/^[a-zA-Z0-9\!\@\#\$\%\^\&]{8,12}$/
  if (regex.test(signupPassword.value)==true) {
    return true;
  } else{ return false} 
 }
// function validationEimale() {
//     var regex=/^[A-Za-z]?[a-zA-Z0-9]{3,5}@(gimale|yahoo)\.com$/
//   if (regex.test(signupEimale.value)==true) {
//     return true;
//   }

//   else{return false}
// }




