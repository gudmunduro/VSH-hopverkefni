<?php
    include "functions.php";
    session_start();

    if (empty($_SESSION["kennitala"]) || !hasProfilePic($_SESSION["kennitala"]))
    {
        die("Óvænt villa(1)");
    }

    $kennitala = $_SESSION["kennitala"];

    if (file_exists("/opt/lampp/phpfiles/Torfaera/ProfilePics/{$kennitala}.jpg"))
    {
        die(readfile("/opt/lampp/phpfiles/Torfaera/ProfilePics/{$kennitala}.jpg"));
    }

    if (file_exists("/opt/lampp/phpfiles/Torfaera/ProfilePics/{$kennitala}.png"))
    {
        die(readfile("/opt/lampp/phpfiles/Torfaera/ProfilePics/{$kennitala}.png"));
    }

?>