var emailInput = document.querySelector('#email');
var msg = document.querySelector('.msg');
var msg2 = document.querySelector('.msg2')
var button = document.querySelector('.but')

button.addEventListener('click', oneClick)
var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function oneClick(e) {
    e.preventDefault();
    if (emailInput.value === '' || !reg.test(emailInput.value)) {
        msg.classList.add('error');
        msg.innerHTML = 'Oops! Please check your email';
        setTimeout(() => msg.classList.remove('error'), 3000);
    } else {
        msg2.classList.add('goodMail');
        msg2.innerHTML = 'Successful!';    
        setTimeout(() => msg2.remove(), 3000);
    }
    return emailInput.value = '';

} 