document.addEventListener('DOMContentLoaded', () => {
    const burgers = Array.from(document.querySelectorAll('.navbar-burger'));

    burgers.forEach((burger) => {
        burger.addEventListener('click', () => {
            const targetId = burger.dataset.target;
            const menu = document.getElementById(targetId);

            if (!menu) {
                return;
            }

            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
            burger.setAttribute('aria-expanded', String(burger.classList.contains('is-active')));
        });
    });

    const demoForms = Array.from(document.querySelectorAll('[data-demo-form]'));

    demoForms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            let message = form.querySelector('.form-message');

            if (!message) {
                message = document.createElement('div');
                message.className = 'notification is-success is-light form-message';
                form.appendChild(message);
            }

            message.textContent = 'Спасибо! Данные успешно приняты в демонстрационном режиме.';
            message.classList.add('is-visible');
            form.reset();
        });
    });
});
