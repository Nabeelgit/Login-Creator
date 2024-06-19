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
