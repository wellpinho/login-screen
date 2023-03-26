const togglePassword = () => {
    document
        .querySelectorAll('.eye')
        .forEach(eye => eye.classList.toggle('hide'))

    showPassword();
}

const showPassword = () => {
    show = document.querySelector('#password')

    const type = show.getAttribute('type') === 'password' ? 'text' : 'password';
    show.setAttribute('type', type)
}