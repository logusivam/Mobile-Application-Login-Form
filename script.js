document.querySelector('.hideshow').addEventListener('click', function() 
{
    const passwordInput = document.querySelector('.pas');
    const eyeIcon = document.querySelector('.hideshow');

    /* checks the password for the icon change */
    if(passwordInput.type === 'password')
    {
        passwordInput.type = 'text';
        eyeIcon.setAttribute('name', 'eye-outline');  /* changes to open eye */
        eyeIcon.classList.add('eyeopen');
    }

    else
    {
        passwordInput.type = 'password';
        eyeIcon.setAttribute('name', 'eye-off-outline');  /* changes to close eye */
        eyeIcon.classList.remove('eyeopen');
    }
});