<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Creator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar">
        <a href="./about/" class="nav-item left">About</a>
        <div class="nav-item center">Login Creator</div>
        <div class="nav-item right" onclick="toggleSettings()" style="cursor: pointer;">Settings</div>
    </nav>
    <div id="settingsModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="toggleSettings()">&times;</span>
            <h2>Settings</h2>
            <div class="setting-item">
                <label for="darkMode">Dark Mode:</label>
                <div class="checkbox-wrapper-2">
                    <input type="checkbox" id="darkMode" class="sc-gJwTLC ikxBAC" onchange="toggleDarkMode()">
                </div>
            </div>
            <!-- Additional settings can be added here in similar div structures -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
