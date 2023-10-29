document.getElementById('login').addEventListener('click',()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
      if(email==""&&password==""){
        alert("Enter Your Email And Password");
      }else{
        console.log(email,password);
      }
    
})