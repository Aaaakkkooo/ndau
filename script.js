document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Сообщение отправлено!');
        document.getElementById('contactForm').reset();
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});
