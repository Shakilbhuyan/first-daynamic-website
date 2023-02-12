//  step 1: Add click even handler with the submit button
 document.getElementById('btn-submit').addEventListener('click',function(){
    // step 2: get the email address inside input field
    // always remember to use .value to  get the text from input field
    const emailFied = document.getElementById('user-email');
    const email = emailFied.value;
    // step 3: get passsWord
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;

//DANGER: Dont't use this system its only for study
// step 4: verify email and password
if(email == 'shakil@gmail.com' && password == "asdshakil"){
    window.location.href = 'bank-inside.html';
}
else{
    alert('invalid user');
}
})