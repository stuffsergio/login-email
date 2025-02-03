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

    if (avatar, tagName, tagEmail) {
        const sectionInputsGenerator = document.getElementById('section2');
        sectionInputsGenerator.style, display = 'none';
    }
}

/*
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
*/


function handleCredentialResponse(response) {
    // Decodificar el ID Token (Google lo envía en base64)
    const data = JSON.parse(atob(response.credential.split(".")[1]));

    console.log("Datos del usuario:", data);

    // Mostrar los datos en la web
    document.getElementById("user-info").innerHTML = `
        <h3>Bienvenido, ${data.name}</h3>
        <p>Email: ${data.email}</p>
        <img src="${data.picture}" alt="Avatar" width="100">
        <button onclick="logout()">Cerrar sesión</button>
    `;

    // Guardar sesión en localStorage
    localStorage.setItem("user", JSON.stringify(data));
}
function logout() {
    localStorage.removeItem("user");
    document.getElementById("user-info").innerHTML = "<p>Sesión cerrada</p>";
    google.accounts.id.disableAutoSelect(); // Evita que Google auto-inicie sesión
}
window.onload = function () {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        document.getElementById("user-info").innerHTML = `
            <h3>Bienvenido, ${user.name}</h3>
            <p>Email: ${user.email}</p>
            <img src="${user.picture}" alt="Avatar" width="100">
            <button onclick="logout()">Cerrar sesión</button>
        `;
        document.getElementById("g_id_signin").style.display = "none"; // Ocultar botón de login
    } else {
        document.getElementById("g_id_signin").style.display = "block"; // Mostrar botón de login
    }
};

