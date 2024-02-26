// Get the button element with the id "buttonInstall"
const butInstall = document.getElementById("buttonInstall");

// Add an event listener for the 'beforeinstallprompt' event
window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events in the deferredPrompt variable
    window.deferredPrompt = event;

    // Remove the hidden class from the button to make it visible
    butInstall.classList.toggle('hidden', false);
});

// Add an event listener for the click event on the install button
butInstall.addEventListener('click', async () => {

    // Retrieve the stored prompt event
    const promptEvent = window.deferredPrompt;

    // If there's no prompt event, return
    if (!promptEvent) {
        return;
    }

    // Show the installation prompt
    promptEvent.prompt();

    // Reset the deferred prompt variable as it can only be used once
    window.deferredPrompt = null;

    // Hide the install button after prompting
    butInstall.classList.toggle('hidden', true);
});

// Add an event listener for the 'appinstalled' event
window.addEventListener('appinstalled', (event) => {

    // Clear the deferredPrompt variable when the app is installed
    window.deferredPrompt = null;
});
