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

const form = document.getElementById('form')
                const username = document.getElementById('username');
                const email = document.getElementById('email');
                const password = document.getElementById('password');
                const cpassword = document.getElementById('cpassword');

                // const users=[];
                // const newUser={username,email,password,cpassword};
                // users.push(newUser);
                // console.log(users)
                // document.getElementByTagName('username') .value=""
                // document.getElementByTagName('email').value=""    
                // document.getElementByTagName('password').value=""  
                // document.getElementByTagName('cpassword').value=""              
         form.addEventListener('submit',(event)=>{
                        event.preventDefault();
                        validateInputs();
        })
            
            function validateInputs(){
                const usernameVal = username.value.trim();
                const emailVal = email.value.trim();
                const passwordVal = password.value.trim();
                const cpasswordVal = cpassword.value.trim();
                
                
            } 


            function setError(element,message){
                const inputGroup = element.parentElement;
                const errorElement = inputGroup.getElementByTagName('error')

                errorElement.innerText = message;
                inputGroup.classList.add('error')
                inputGroup.classList.remove('success')
            }
    
            function setsuccess(element,message){
                const inputGroup = element.parentElement;
                const errorElement = inputGroup.getElementByTagName('error')

                errorElement.innerText = message;
                inputGroup.classList.add('error')
                inputGroup.classList.remove('success')
            }



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

  





