<?php
session_start();
include "../api/sql.php";

if (empty($_POST["id"]) || empty($_POST["to"]) || empty($_SESSION["kennitala"]))
{
    die("Óvænt villa(1)");
}

$id = intval($_POST["id"]);
$changeTo = $_POST["to"];
$kennitala = $_SESSION["kennitala"];
$conn = connect();
switch($id)
{
    case 1:
    {
        $sql = $conn->prepare("UPDATE notendur SET fulltnafn = ? WHERE kennitala = ?");
        break;
    }
    case 2:
    {
        $sql = $conn->prepare("UPDATE notendur SET kyn = ? WHERE kennitala = ?");
        break;
    }
    case 3:
    {
        $sql = $conn->prepare("UPDATE notendur SET heimilisfang = ? WHERE kennitala = ?");
        break;
    }
    case 4:
    {
        $sql = $conn->prepare("UPDATE notendur SET simanumer = ? WHERE kennitala = ?");
        break;
    }
    case 5:
    {
        $sql = $conn->prepare("UPDATE notendur SET felag = ? WHERE kennitala = ?");
        break;
    }
    case 6:
    {
        $sql = $conn->prepare("UPDATE notendur SET netfang = ? WHERE kennitala = ?");
        break;
    }
    case 7:
    {
        $sql = $conn->prepare("UPDATE notendur SET lykilord = ? WHERE kennitala = ?");
        $changeTo = openssl_digest($changeTo, "sha512");
        break;
    }
    default:
    {
        die("Óvænt villa(2)");
    }
}
$sql->bind_param("ss", $changeTo, $kennitala);
$sql->execute();
die("1");
?>