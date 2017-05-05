<?php
session_start();
include "sql.php";
include "functions.php";
header('Content-Type: text/html; charset=ISO-8859-15');

function getSelectedText($num)
{
    switch ($num)
    {
        case 1: return "Götubílar";
        case 2: return "Sérútbúnir";
        case 3: return "Sérútbúnir götubílar";
    }
}

if (empty($_POST["selected"] || empty($_SESSION["kennitala"])) || !between(intval($_POST["selected"]), 0, 4))
{
    die("Óvænt villa(1)");
}
$kennitala = $_SESSION["kennitala"];
$category = getSelectedText(intval($_POST["selected"]));

$conn = connect();
$sql = $conn->prepare("INSERT INTO keppni (kennitala, flokkur) VALUES (?, ?) ");
$sql->bind_param("ss", $kennitala, $category);
$sql->execute();
$sql->close();
die("1");

?>