function showAvatar () {
    const userName = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    const tags = document.getElementById('avatar-tags');
    // Cambiar el display a flex para que sea visible
    tags.style.display = 'flex';

    // Usar un pequeño retraso para asegurar que el navegador procese el cambio de display
    setTimeout(() => {
        tags.style.opacity = 1; // Transición de opacidad
    }, 10); // Retraso corto para permitir que el navegador procese el cambio
    
    const image = document.getElementById('avatar');
    image.style.display = 'flex';

    const avatar = document.getElementById('avatar').src = `https://unavatar.io/gravatar/${email}`;
    const tagName = document.getElementById('tagName').innerText = `${userName}`;
    const tagEmail = document.getElementById('tagEmail').innerText = `${email}`;

    if(!userName || !email) {
        alert('Debes completar los campos');
        tags.style.display = 'none';
    }
}

function handleCredentialResponse(response) {
    console.log("ID Token: ", response.credential);
    // Aquí puedes enviarlo a tu backend para verificar el usuario
}

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client("1031366356818-g644gbbd0vttbh6rsjhl5omnpodh8o8d.apps.googleusercontent.com");

async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: "1031366356818-g644gbbd0vttbh6rsjhl5omnpodh8o8d.apps.googleusercontent.com",
    });
    const payload = ticket.getPayload();
    console.log(payload); // Aquí tienes los datos del usuario
}