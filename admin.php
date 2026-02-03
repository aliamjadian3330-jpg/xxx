<?php
$conn = new mysqli("localhost","db_user","db_pass","db_name");
$result = $conn->query("SELECT * FROM requests ORDER BY id DESC");
?>

<table border="1" cellpadding="8">
<tr>
  <th>نوع</th>
  <th>نام</th>
  <th>تماس</th>
  <th>پلاک</th>
  <th>موقعیت</th>
  <th>زمان</th>
</tr>

<?php while($row = $result->fetch_assoc()) { ?>
<tr>
<td><?= $row['service_type'] ?></td>
<td><?= $row['name'] ?></td>
<td><a href="tel:<?= $row['phone'] ?>"><?= $row['phone'] ?></a></td>
<td><?= $row['plate'] ?></td>
<td>
<a target="_blank"
href="https://maps.google.com/?q=<?= $row['latitude'] ?>,<?= $row['longitude'] ?>">
نقشه
</a>
</td>
<td><?= $row['created_at'] ?></td>
</tr>
<?php } ?>

</table>
