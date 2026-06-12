document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === "SUS@with.us" && password === "29/4/2006") {

        window.location.href = 'dox.html';
    } else {
        alert('Incorrect email or password.');
    }
});
