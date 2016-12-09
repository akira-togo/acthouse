	<link rel="stylesheet" href="blog.css">
<?php $page_title = "ブログ"; ?><!--1番最初にここが読み込まれる-->
<?php include "parts/header.php"; ?>
<div class="top"></div>
 <?php
   if(!isset($_GET['o']) or empty($_GET['o']) or $_GET['o'] < 0){
   	$offset = 0;
   }else{
   	$offset = $_GET['o'];
   }
   if(isset($_GET['draft'])){
   	$posts = get_drafts($offset);
   	$count = get_drafts_count();
   	$params = ["draft" =>""];
   }else{
   	$posts = get_posts($offset);
   	$count = get_posts_count();
   	$params = [];
   }
 ?>
 <div clas="container"> 
  <a href="new.php">新規投稿<li>ABOUT</li></a>
  <a href="new.php">画像一覧</a>
  <a href="index.php?draft">下書き一覧</a>

  <?php
   $limit = get_limit();
   $prev_offset = $offset - $limit;
   $next_offset = $offset + $limit;
  ?>
  <?php
   $next_offset = $offset + $limit;
  ?>
  <nav aria-label="page navigation">
   <ul class="pagination">
	  <?php if($prev_offset >= 0) : ?>
	   <li>
	  	<?php $params["o"] = $prev_offset;
	  	link_tag("index.php","前へ",$params);
	  	?>
	   </li>
	  <?php endif; ?>
  
		  <?php
		   for($i =0; $i<$count; $i++){
		   	if($i % $limit == 0){
		   		$page = $i / $limit;
		   		$page_offset = $page * $limit;
		   		$params['o'] = $page_offset;
		   		link_tag("index.php",$page + 1,$params);
		   	}
		   }
		  ?> 
		  <?php if ($next_offset < $count) : ?>
		  	<li>
		  	 <?php $params["o"] = $next_offset;
		  	 link_tag("index.php","次へ",$params) 
		  	 ?>
		  	</li>
		     <?php endif; ?>
		   </ul>
		  </nav>
		  <div style="border:1px solid red;">
		  	<h2>メイン記事</h2>
		  	<?php $main = $posts->fetch(); ?>
		  	<h3><?php echo $main['title']; ?></h3>
		  	<p><?php echo $main['content']; ?></p>
		  </div>
    <?php foreach($posts as $row) : ?>
	 <article>
	  <?php
	   $likes = $row['likes'];
	   if($likes==0) : ?>
	   <p>いいねはまだありません。</p>
	  <?php else : ?>
	   <p><?php echo $post['likes']; ?>回いいねされています。</p>
	  <?php endif; ?>
	   <a href="show.php?id=<?php echo $row['id']; ?>">
	  <div>投稿日時:<?php echo $row['created_at']; ?></div>
	  <div>
	  	<img src="image.php?id=<?php echo $row['id']; ?>" alt="<?php echo $row['title']; ?>">
	  </div>
	  <div><?php echo $row['title']; ?></div>
	  <?php
	   $content = $row['content'];
	   if(mb_strlen($content) >= 50){
	   	 $content = substr($content, 0, 50);
	   	 $content = $content . '...';
	   }
	  ?>	 
	  <div><?php echo $content; ?></div>
	  </a>
	 </article>
	 <?php endforeach; ?>
</div>
<?php include "parts/footer.php"; ?>