const form = document.getElementById('loginForm');
    form.addEventListener(
        'click',function(event){
            event.preventDefault();
            const userName = document.getElementById('userName').value;
            const password = document.getElementById('password').value;
            const passwordError = document.getElementById('passwordError');
            const nameError= document.getElementById('nameError');
            
        
        const users=[];
        const newUser={userName,password};
        users.push(newUser);
        console.log(users)
        document.getElementById('userName').value=""
        document.getElementById('password').value=""
        }
    )


// form validation
let isValid=true;
if(userName ===''){
    nameError.innerHTML="Name is required";
   isValid=false;
}
else{
    nameError="";
}
if(password ===''){
    passwordError.innerHTML="Password is required";
   isValid=false;
}
else{
    passwordError="";
}
if(!isValid){
    return;
}