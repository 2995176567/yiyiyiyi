<?php

// 指定目标文件夹路径
$targetDir = 'ppp/';

// 获取 POST 请求中的图像数据
$imageData = $_POST['image'];

// 创建一个唯一的文件名
$filename = md5(uniqid()) . '.jpg';

// 将图像数据解码并保存为文件
$data = base64_decode(str_replace('data:image/jpeg;base64,', '', $imageData));
file_put_contents($targetDir . $filename, $data);

// 返回新文件的 URL
echo '/uploads/' . $filename;

?>
