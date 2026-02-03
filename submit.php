<?php
$conn = new mysqli("localhost", "db_user", "db_pass", "db_name");
if ($conn->connect_error) {
    die("خطا در اتصال");
}

$service = $_POST['service_type'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$plate = $_POST['plate'];
$lat = $_POST['latitude'];
$lon = $_POST['longitude'];
$desc = $_POST['description'];

$sql = "INSERT INTO requests 
(service_type, name, phone, plate, latitude, longitude, description)
VALUES (?,?,?,?,?,?,?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssss",
  $service, $name, $phone, $plate, $lat, $lon, $desc
);
$stmt->execute();

$mapLink = "https://maps.google.com/?q=$lat,$lon";

// ⬅️ اینجا بعداً می‌تونی پیامک/تلگرام اضافه کنی

echo "
درخواست با موفقیت ثبت شد ✅<br>
<a href='$mapLink' target='_blank'>مشاهده موقعیت روی نقشه</a>
";

$stmt->close();
$conn->close();
?>
