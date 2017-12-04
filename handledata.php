<?php

        // Only process POST reqeusts.
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $con=mysqli_connect("localhost","root","","my_db");
    // Check connection
            if (!$con) {
               die("Connection failed: " . mysqli_connect_error());
            }

    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $users_name = mysql_real_escape_string($_POST['name']);
    $users_email = mysql_real_escape_string($email);

    // Check if there is any existing lead with the inputed email
    $check="SELECT COUNT(*) FROM persons WHERE Email = '$users_email'";
    $res = mysqli_query($con,$check);
    $data = mysqli_fetch_array($res, MYSQLI_NUM);

    if($data[0] > 1) {
    {
         echo 'User Already Exists<br/>';
    }
    else
    {
        $newUser="INSERT INTO table(nome,email,ip)
        VALUES (NULL, '$users_name', '$users_email', $_SERVER['REMOTE_ADDR']);";
        if (mysqli_query($con,$newUser))
        {
           echo 'Data Was Posted Successfully<br/>';
        }
        else
        {
          echo 'Error adding user in database<br/>';
        }
    }
        
    mysqli_close($con);    
}

?>
