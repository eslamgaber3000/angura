 
 var btn=document.querySelector('button')
 var container=JSON.parse(localStorage.getItem('user sign up'))
 var h1=document.getElementById('h1')
 var cartona="welcome "
 console.log(h1)
 for (let i = 0; i < container.length; i++) {
    var userName=container[i].uName
    cartona+=userName;
    h1.innerHTML=cartona;
 }
   
btn.addEventListener('click',function () {
    window.location.href="index.html"
})