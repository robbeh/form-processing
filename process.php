<?php
/**
 * Created by robbeh.
 * Date: 17/11/12
 * Time: 20:51
 */
$result = array();
$result['status'] = 1;
$name = $_POST['name'];
$age = $_POST['age'];
$result['message'] = "Your name is {$name} and your age is {$age}";
echo json_encode($result);