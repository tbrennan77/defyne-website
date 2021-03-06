<?php 
	$page = $_SERVER['PHP_SELF']; 
	$page = str_replace(".php","",$page);
	$page = trim(str_replace("/","",$page));
?>   
<nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
	<div class="container force-mobile-full">
		<div class="row w-100">
			<div class="col-8 col-sm-10 col-lg-4">
		      <a class="navbar-brand" href="#">
		      	<img src="img/Defyne-Solutions_V2_Final.png" class="img-fluid" />
		      </a>
	    	</div>
	    	<div class="col-4 col-sm-2 hidden-lg-up">
		    	<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">☰</button>
		    </div>
		    <div class="collapse navbar-collapse col-lg-8 col-sm-12 col-xs-12 pl-0 pr-0 ml-xs-4" id="navbarCollapse">
		        <ul class="navbar-nav">
		          <li class="nav-item <?php echo ($page == "index" ? "active" : "")?>">
		            <a class="nav-link hvr-pulse" href="/">Home <span class="sr-only">(current)</span></a>
		          </li>
		          <li class="nav-item <?php echo ($page == "about" ? "active" : "")?>">
		            <a class="nav-link hvr-pulse" href="/about">About</a>
		          </li>
		          <li class="nav-item <?php echo ($page == "partners" ? "active" : "")?>">
		            <a class="nav-link hvr-pulse" href="/partners">Partners</a>
		          </li>
		          <li class="nav-item <?php echo ($page == "products" ? "active" : "")?>">
		            <a class="nav-link hvr-pulse" href="/products">Products</a>
		          </li>
		          <li class="nav-item <?php echo ($page == "contact" ? "active" : "")?>">
		            <a class="nav-link hvr-pulse" href="/contact">Contact</a>
		          </li>
		        </ul>
		    </div>
	    </div>
    </div>
</nav>