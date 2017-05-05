<?php
session_start();
include "../api/functions.php";
?>
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Skráning</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="../include/style.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="../include/menu.js"></script>
        <script src="../include/loginform.js"></script>
    </head>
    <body>
        <nav class="mobileNav" id="mobileNav">
            <a onclick="Menu.toggle()">&#9776;</a>
        </nav>
        <nav class="navBar" id="navBar">
            <ul>
                <li><h2>Valmynd</h2></li>
                <li><a href="../" id="menuOption1">Aðalsíða</a></li>
                <li><a href="../dagskra" id="menuOption2">Dagskrá</a></li>
                <li><a href="../reglur" id="menuOption3">Reglur</a></li>
                <li><a href="../keppendur" id="menuOption4">Keppendur</a></li>
                <li><?php echo accountMenuItem("/hv/keppendur"); ?></li>
            </ul>
        </nav>
    </body>
</html>