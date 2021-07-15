const password1 = document.forms.p1;
const password = document.forms.p2;

const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (password1.value !== password2.value) {
        alert('passwords does not match');
        return false;
} else {
    alert('form submitted');
}
});