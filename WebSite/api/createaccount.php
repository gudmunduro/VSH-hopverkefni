<?php
   session_start();
   include "sql.php";
   include "functions.php";

   if (empty($_POST["kennitala"]) || empty($_POST["fullname"]) || empty($_POST["gender"]) || empty($_POST["address"]) ||
        empty($_POST["phone"]) || empty($_POST["club"]) || empty($_POST["email"]) || empty($_POST["password"]) ||
        empty($_POST["confirmpassword"]) || empty($_POST["redirect"]))
   {
       die("Óvænt villa(1)");
   }

   $kennitala = $_POST["kennitala"];
   $fullname = $_POST["fullname"];
   $gender = $_POST["gender"];
   $address = $_POST["address"];
   $phone = $_POST["phone"];
   $club = $_POST["club"];
   $email = $_POST["email"];
   $password = openssl_digest($_POST["password"], "sha512");
   $confirmpassword = $_POST["confirmpassword"];
   $redirect = $_POST["redirect"];

   if ($_POST["password"] != $confirmpassword)
   {
       die("Lykilorðin eru ekki eins");
   }
   if (!is_numeric($kennitala) || strlen($kennitala) != 10)
   {
       die("Kennitalan er ekki gild");
   }

   $conn = connect();
   $sql = $conn->prepare("INSERT INTO notendur (kennitala, fulltnafn, kyn, heimilisfang, simanumer, felag, netfang, lykilord) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
   $sql->bind_param("ssssssss", $kennitala, $fullname, $gender, $address, $phone, $club, $email, $password);
   $sql->execute();
   $sql->close();
   $_SESSION["kennitala"] = $kennitala;
   $_SESSION["firstname"] = fullNameToFirstName($fullname);
   header("location: ".$redirect);
?>