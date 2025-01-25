function showAvatar () {
    const userName = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    const image = document.getElementById('avatar');
    image.style.display = 'flex';

    document.getElementById('avatar').src = `https://unavatar.io/gravatar/${email}`;
    document.getElementById('tagName').innerText = `${userName}`;
    document.getElementById('tagEmail').innerText = `${email}`;
}