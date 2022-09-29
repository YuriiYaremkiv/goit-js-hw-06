const refs = {
    form: document.querySelector('.login-form'),
    email: document.querySelector('[name="email"]'),
    password: document.querySelector('[name="password"]'),

};

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (refs.email.value === '' || refs.password.value === '') {
        return alert('All fields must be filled');
    };

    const elements = {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
    }

    console.log(elements);

    refs.form.reset();
});