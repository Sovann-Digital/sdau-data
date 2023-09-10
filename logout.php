<?php
// Start the session if it's not already started
session_start();

// Unset all session variables
session_unset();

// Destroy the session
session_destroy();

// Redirect to the login page (adjust the URL as needed)
header("Location: admin.php");
exit();
?>
