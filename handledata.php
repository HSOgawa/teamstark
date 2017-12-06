<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // connection to database
    $servername = "localhost";
    $username = "root";
    // TODO: remove when pushing to Git
    $password = "";
    $dbname = "";
    // create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // check connection
    if ($conn->connect_error) {
      die ("Connection failed: " . $conn->connect_error);
    }
    //--
    $nome = $_REQUEST['nome'];
    $email = $_REQUEST['email'];
    $timestamp = date("Y-m-d H:i:s");
    $query = "INSERT INTO leads VALUES ('".$nome."','".$email."','".$_SERVER['REMOTE_ADDR']."','".$timestamp."')";
    $result = $conn->query($query);
    $conn->close();
  }
?>
