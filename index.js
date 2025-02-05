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

const apiKey = '19762c1305b9898fe35eb16428d4dd12 '; // Reemplaza con tu clave API
    const weatherForm = document.getElementById('weatherForm');

    weatherForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // Evitar el comportamiento por defecto del formulario
                              // Evitamos que se recargue la página

      const city = document.getElementById('city').value.trim(); //


      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Ciudad no encontrada o error en la solicitud.');
        }

        const data = await response.json();
        const temp = data.main.temp;
        const description = data.weather[0].description;

        const descriptionMap = {  // Creación de un objeto tipo mapa para la descripcion
          "clear sky": "cielo despejado",
          "overcast clouds": "nubes",
          "broken clouds": "ciertas nubes",
          "few clouds": "pocas nubes",
          "scattered clouds": "nubes dispersas",
          "shower rain": "lluvia ligera",
          "rain": "lluvia",
          "thunderstorm": "tormenta",
          "snow": "nieve",
          "mist": "neblina"
        }

        const weatherSection = document.getElementById('weather-section');
        weatherSection.style.display = 'flex';

        setTimeout(() => {
          weatherSection.style.opacity = 1; // Transición de opacidad
        }, 10);

        document.getElementById('h6').textContent = `La temperatura en ${city} es ${temp}°C con ${descriptionMap[description]}.`;
      } catch (error) {
        alert(`Error: ${error.message}`); // Envía el throw new Error, completando el error.message declarado
      }
    });

/*function handleCredentialResponse(response) {
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
}*/