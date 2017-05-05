<?php
    include "../api/sql.php";
    include "../api/functions.php";

    session_start();
    if (empty($_SESSION["kennitala"]))
    {
        header("location: /hv");
        die();
    }
    $fullname = "";
    $kennitala = $_SESSION["kennitala"];
    $gender = "";
    $address = "";
    $phonenumber = "";
    $club = "";
    $email = "";
    $firstname = $_SESSION["firstname"];

    $conn = connect();
    $sql = $conn->prepare("SELECT * FROM notendur WHERE kennitala=?");
    $sql->bind_param("s", $kennitala);
    $sql->execute();
    if ($sql === false)
    {
        die("Villa: SQL villa");
    }
    $result = $sql->get_result();
    if ($result->num_rows > 0)
    {
        while ($row = $result->fetch_assoc())
        {
            $fullname = $row["fulltnafn"];
            $gender = $row["kyn"];
            $address = $row["heimilisfang"];
            $phonenumber = $row["simanumer"];
            $club = $row["felag"];
            $email = $row["netfang"];
        }
    }
    else
    {
        die("Óvænt villa(1)");
    }
?>
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Aðgangur</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                <li><a href="../Dagskra" id="menuOption2">Dagskrá</a></li>
                <li><a href="../Reglur" id="menuOption3">Reglur</a></li>
                <li><a href="../Keppendur" id="menuOption4">Keppendur</a></li>
                <li><a href="../adgangur" id="menuOption5"><?php echo accountMenuText() ?></a></li>
            </ul>
        </nav>
        <h1 class="accountTitle"><i class="fa fa-user" aria-hidden="true"></i> <?php echo $firstname; ?></h1>
        <a class="accountLogoutButton" href="../api/logout.php">Útskrá</a>
        <table class="accountTable">
            <tbody>
                <tr>
                    <td>Fullt nafn</td>
                    <td><?php echo $fullname; ?> (<a>Breyta</a>)</td>
                </tr>
                <tr>
                    <td>Kennitala</td>
                    <td><?php echo $kennitala; ?></td>
                </tr>
                <tr>
                    <td>Kyn</td>
                    <td><?php echo $gender; ?> (<a>Breyta</a>)</td>
                </tr>
                <tr>
                    <td>Heimilsfang</td>
                    <td><?php echo $address; ?> (<a>Breyta</a>)</td>
                </tr>
                <tr>
                    <td>Símanumer</td>
                    <td><?php echo $phonenumber; ?> (<a>Breyta</a>)</td>
                </tr>
                <tr>
                    <td>Félag</td>
                    <td><?php echo $club; ?> (<a>Breyta</a>)</td>
                </tr>
                <tr>
                    <td>Netfang</td>
                    <td><?php echo $email; ?> (<a>Breyta</a>)</td>
                </tr>
                <tr>
                    <td>Lykilorð</td>
                    <td><a>Breyta</a></td>
                </tr>
            </tbody>
        </table>
    </body>
</html>