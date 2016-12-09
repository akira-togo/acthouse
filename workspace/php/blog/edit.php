<?php $page_title = "編集画面"; ?><!--1番最初にここが読み込まれる-->
<?php include"parts/header.php"; ?>
<?php
 $id = $_GET['id'];
 $post = get_post($id);
?>
   <div class="container">
		<?php include "parts/form.php";?>
	</div>
<?php include "parts/footer.php"; ?>