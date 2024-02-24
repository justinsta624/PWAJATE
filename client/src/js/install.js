// Get a reference to the button element with the ID 'buttonInstall'
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the Progressive Web App (PWA)

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default behavior of the beforeinstallprompt event
    event.preventDefault();
    // Make the install button visible
    butInstall.style.visibility = 'visible';
    // Set the text content of the install button to 'Install!'
    butInstall.textContent = 'Install!';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Disable the install button to prevent multiple installations
    butInstall.setAttribute('disabled', true);
    // Change the text content of the install button to 'Installed!'
    butInstall.textContent = 'Installed!';
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Log a message when the app is successfully installed
    console.log('Successfully Installed', 'appinstalled', event);
});