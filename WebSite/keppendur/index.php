<?php
session_start();
include "../api/functions.php";
$keppendur = [1, 2, 3, 4, 5, 6, 7, 8];
?>
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="../include/style.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="../include/menu.js"></script>
        <script src="../include/loginform.js"></script>
        <title>Torfærukeppni</title>
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

        <h1>Keppendur</h1>
        <table>
            <thead>
                <tr>
                    <td>Nafn</td>
                    <td>Flokkur</td>
                </tr>
            </thead>
            <tbody>
            <?php
            for ($i = 0; $i < count($keppendur); $i++)
            {
            ?>
                <tr>
                    <td>1</td>
                    <td>2</td>
                </tr>
            <?php
            }
            ?>
            </tbody>
        </table>

    </body>
</html>