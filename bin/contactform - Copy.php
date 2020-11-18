<?php 
    if (isset($_POST['submit'])){
    $name=$_POST['name']; 
    $email=$_POST['email']; 
    $message=$_POST['message']; 

    if (($name!="")||($email!="")||($message!="")) 
        {         
        $from="From: $name<$email>\r\nReturn-path: $email";
        // Change subject
        $subject="From website contact form";
        // Replace with your email
        mail("kevinoooey@gmail.com", $subject, $message, $from); 
        
        //echo "Email sent!"; 
        }
    }    
?> 