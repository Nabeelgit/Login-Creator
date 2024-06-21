function toggleSettings() {
    var modal = document.getElementById("settingsModal");
    var display = modal.style.display;
    modal.style.display = (display === "block" ? "none" : "block");
}

// Function to toggle dark mode
function toggleDarkMode() {
    var isChecked = document.getElementById("darkMode").checked;
    localStorage.setItem("darkMode", isChecked); // Save state to localStorage
    applyDarkMode(isChecked);
}

// Apply dark mode based on the checkbox
function applyDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

// Check local storage for dark mode preference on page load
document.addEventListener("DOMContentLoaded", function() {
    var isDarkMode = localStorage.getItem("darkMode") === "true";
    document.getElementById("darkMode").checked = isDarkMode;
    applyDarkMode(isDarkMode);
});

function validateInputs() {
    var websiteName = document.getElementById('websiteName').value.trim();
    var themeColor = document.getElementById('themeColor').value.trim();
    var errorMessage = '';

    // Check if the website name is empty
    if (!websiteName) {
        errorMessage += 'Name of Website is required. ';
    }

    // Check if the theme color is empty or not a valid hex code
    if (!themeColor) {
        errorMessage += 'Theme Color is required. ';
    } else if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(themeColor)) {
        errorMessage += 'Theme Color must be a valid hex code. ';
    }

    // Display the error message or clear it if no errors
    var errorDiv = document.getElementById('error-message');
    if (errorMessage) {
        errorDiv.innerText = errorMessage;
    } else {
        errorDiv.innerText = '';
        // Here you can add further actions, like submitting the form
        console.log('Form is valid and can be submitted');
        generateCode(); // Call the generateCode function
    }
}

function generateCode() {
    var websiteName = document.getElementById('websiteName').value.trim();
    var themeColor = document.getElementById('themeColor').value.trim();

    var commonStyles = `
        body { text-align: center; font-family: Arial, sans-serif; }
        .navbar { background-color: ${themeColor}; padding: 10px; color: white; }
        input, button {
            width: 400px; /* Increased width for better visibility */
            height: 40px; /* Reduced height for a sleeker look */
            margin: 15px auto; /* Increased spacing and center alignment */
            padding: 0 10px; /* Padding inside the input for text */
            border-radius: 10px; /* Slightly less rounded edges */
            border: 1px solid #ccc; /* Subtle border */
            font-size: 16px; /* Larger font size for readability */
            box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Soft shadow for depth */
            display: block; /* Ensure inputs are block level to fill width */
        }
        button {
            background-color: ${themeColor}; /* Button color matches navbar */
            color: white; /* Text color for buttons */
            cursor: pointer; /* Cursor changes to pointer on hover */
        }
        button:hover {
            background-color: darken(${themeColor}, 10%); /* Slightly darker on hover */
        }
    `;

    var loginCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - ${websiteName}</title>
    <style>${commonStyles}</style>
</head>
<body>
    <div class="navbar">${websiteName}</div>
    <h2>Login</h2>
    <input type="text" placeholder="Username">
    <input type="password" placeholder="Password">
    <button>Login</button>
</body>
</html>
`;

    var signupCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup - ${websiteName}</title>
    <style>${commonStyles}</style>
</head>
<body>
    <div class="navbar">${websiteName}</div>
    <h2>Sign Up</h2>
    <input type="text" placeholder="Username">
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Sign Up</button>
</body>
</html>
`;

    document.getElementById('loginCode').value = loginCode;
    document.getElementById('signupCode').value = signupCode;
}

function copyCode(elementId) {
    var textarea = document.getElementById(elementId);
    textarea.select(); // Select the text
    navigator.clipboard.writeText(textarea.value) // Use Clipboard API to copy text
        .then(() => alert('Code copied to clipboard!')) // Success message
        .catch(err => console.error('Error copying text: ', err)); // Error handling
}

document.querySelector('.submit-button').addEventListener('click', validateInputs);