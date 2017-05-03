<?php

function connect()
{
    $username = "torfaera";
    $password = "password";
    $conn = new mysqli("localhost", $username, $password, "torfaera");
    if ($conn->connect_error)
    {
        die("Villa: villa kom upp við SQL tengingu");
    }
    return $conn;
}

?>