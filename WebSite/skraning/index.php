<?php
    session_start();
    include "../api/functions.php";

    if (empty($_SESSION["kennitala"]))
    {
        header("location: /hv");
        die();
    }
?>
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Skráning</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="../include/style.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="../include/menu.js"></script>
        <script src="../include/loginform.js"></script>
        <script src="../include/registration.js"></script>
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
        <h1 class="registrationTitle">Skráning</h1>
        <div class="registrationDiv">
            <h1>Veldu flokk</h1>
            <ul>
                <li><a onclick="onSelection(options.streetlegal.id)" id="option1" >Götubílar</a></li>
                <li><a onclick="onSelection(options.unlimited.id)" id="option2" >Sérútbúnir</a></li>
                <li><a onclick="onSelection(options.modified.id)" id="option3" >Sérútbúnir götubílar</a></li>
            </ul>
            <a onclick="register()" id="confirmButton" class="confirmButton">Staðfesta skráningu</a>
        </div>
    </body>
</html>