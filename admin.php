<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["name"];
    $password = $_POST["password"];

    // Simulated admin credentials
    $adminUsername = "admin";
    $adminPassword = "admin123";

    // Check if the entered credentials match the admin credentials
    if ($username === $adminUsername && $password === $adminPassword) {
        // Successful login - redirect to admin panel or display a success message
        header("Location: admin-panel.php"); // Replace with the actual admin panel URL
        exit();
    } else {
        // Invalid credentials - display an error message
        $errorMessage = "Invalid username or password. Please try again.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Admin</title>
</head>
<body>
    <div class="container">
        <form action="./admin.php" method="post" id="login-form">
            <h2>Admin Login</h2>
            <?php
            if (isset($errorMessage)) {
                echo '<p class="error-message">' . $errorMessage . '</p>';
            }
            ?>
            <div class="form-group">
                <label for="name">Username:</label>
                <input type="text" name="name" id="name" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" required>
                <span id="toggle-password">Show</span>
            </div>
            <div class="form-group">
                <input type="submit" value="Submit">
            </div>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
