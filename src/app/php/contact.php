<?php

  //Email Adress verification
  function isEmail($email){
    return filter_var($email, FILTER_VALIDATE_EMAIL);
  }

  if($_POST){

    $name = addslashes(trim($_POST['name']));
    $clientEmail = addslashes(trim($_POST['email']));
    $message = addslashes(trim($_POST['message']));
    $to = 'info@vr3.io';
    $subject = 'Mensaje de Contacto | VR3';

    $array = array('nameContact' => '', 'emailContact' => '', 'messageContact' => '');


    if(!isEmail($clientEmail)){
      $array['emailContact'] = 'Invalid email';
    }
    if($name == ''){
      $array['nameContact'] = 'Please write your name';
    }

    if($message == ''){
      $array['messageContact'] = 'Please write a message';
    }


    if(isEmail($clientEmail) && $name != '' && $message != ''){
      //Send Email
      $headers = "From: " . $clientEmail . " <" . $clientEmail . ">" . "\r\n" . "Reply-To: " . $clientEmail;
      mail($to, $subject, $message, $headers);
    }

    echo json_encode($array);

  }
?>
