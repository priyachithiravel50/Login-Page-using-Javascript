// const form = document.getElementById('loginForm');
//     form.addEventListener(
//         'click',function(event){
//             event.preventDefault();
//             const userName = document.getElementById('userName').value;
//             const password = document.getElementById('password').value;
//             const passwordError = document.getElementById('passwordError');
//             const nameError= document.getElementById('nameError');
            
        
//         const users=[];
//         const newUser={userName,password};
//         users.push(newUser);
//         console.log(users)
//         document.getElementById('userName').value=""
//         document.getElementById('password').value=""
//         }
//     )


            
                
            

// //form validation
// let isValid=true;
// if(username ===''){
//     error.innerHTML="Name is required";
//    isValid=false;
// }
// else{
//     nameError="";
// }
// if(password ===''){
//     error.innerHTML="Password is required";
//    isValid=false;
// }
// else{
//     passwordError="";
// }
// if(!isValid){
//     return;
// }

  

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }

    // const users=[];
    //     const newUser={userName,email,password,cpassword};
    //     users.push(newUser);
    //     console.log(users)
    //     document.getElementById('userName').value=""
    //     document.getElementById('email').value=""
    //     document.getElementById('password').value=""
    //     document.getElementById('cpassword').value=""
})

function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

    if(usernameVal===''){
        success=false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal === ''){
        success= false;
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    return success;

}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
         /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    );
  };



