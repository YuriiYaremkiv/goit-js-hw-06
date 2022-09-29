const refs = {
    input: document.querySelector('#validation-input'),
}

refs.input.addEventListener('blur', () => {
    if (refs.input.value.length < refs.input.getAttribute('data-length')) {
        refs.input.classList.remove('valid');
        return refs.input.classList.add('invalid'); 
    }
    refs.input.classList.remove('invalid');
    return refs.input.classList.add('valid'); 
});