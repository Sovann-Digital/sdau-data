<?php
// Check if the user is authenticated (you should implement proper authentication)
session_start();
if (!isset($_SESSION["authenticated"]) || $_SESSION["authenticated"] !== true) {
    header("Location: admin.php"); // Redirect to the login page if not authenticated
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="admin-panel.css">
    <title>Admin Panel</title>
</head>
<body>
    <header>
        <h1>Welcome to the Admin Panel</h1>
        <a href="logout.php">Logout</a> <!-- Create a logout.php file to handle logout -->
    </header>
    <nav>
        <!-- Add navigation links to various admin functionalities -->
        <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Users</a></li>
            <li><a href="#">Settings</a></li>
        </ul>
    </nav>
    <main>
        <!-- Your admin panel content goes here -->
        <p>This is the admin panel content.</p>
    </main>
</body>
</html>
