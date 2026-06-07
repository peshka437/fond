const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector("textarea").value;

        if (name === "" || email === "" || message === "") {
            alert("Заполните все поля!");
            return;
        }

        alert(
            "Спасибо за обращение, " +
            name +
            "! Ваше сообщение успешно отправлено."
        );

        form.reset();
    });

}