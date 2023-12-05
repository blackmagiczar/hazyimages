function ShowLoginForm() {
    document.getElementById("blind").style.display = 'block';
    document.getElementById("loginForm").style.display = 'flex';

}
function HideLoginForm() {
    document.getElementById("blind").style.display = 'none';
    document.getElementById("loginForm").style.display = 'none';
}

function ToggleBurger() {
    var burger = document.getElementById("navig");
    if (burger.style.display == 'none') {
        burger.style.display = 'flex';

    } else {
        burger.style.display = 'none';
    }
}