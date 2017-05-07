<?php
session_start();
include "api/functions.php";

?>
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="include/style.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="include/menu.js"></script>
        <script src="include/homepage.js"></script>
        <script src="include/loginform.js"></script>
        <?php
          $loggedIn = "false";
          if (!empty($_SESSION["kennitala"]))
          {
              $loggedIn = "true";
          }
          echo "<script> var loggedIn = {$loggedIn};</script>\n"
        ?>
        <title>Torfærukeppni</title>
    </head>
    <body class="mainBody">
        <nav class="mobileNav mobileNavTransparent" id="mobileNav">
            <a onclick="Menu.toggle()">&#9776;</a>
        </nav>
        <nav class="navBar navBarTransparent" id="navBar">
            <ul>
                <li><h2>Valmynd</h2></li>
                <li><a href="" id="menuOption1">Aðalsíða</a></li>
                <li><a href="Dagskra" id="menuOption2">Dagskrá</a></li>
                <li><a href="Reglur" id="menuOption3">Reglur</a></li>
                <li><a href="Keppendur" id="menuOption4">Keppendur</a></li>
                <li><?php echo accountMenuItem("/hv"); ?></li>
            </ul>
        </nav>
        <div class="mainDiv" id="mainDiv">
            <h1 class="mainTitle">Torfæran á hellu 2017</h1>
            <a class="openFormButton" onclick="openForm()">Skráning</a>
            <a class="openFormButton" onclick="openAboutPage()">Um keppnina</a>
        </div>
    </body>
</html>