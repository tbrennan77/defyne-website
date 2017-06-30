<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <link rel="icon" href="favicon.ico">

    <title>Defyne Payments | Defyne Your Success</title>

	<?php include ("inc/header.php"); ?>

	<script src='https://www.google.com/recaptcha/api.js'></script><!-- Page Specific -->
</head>
<body class="contact-us">

	<!-- Page Menu Row -->
	<?php include ("inc/page-menu.php"); ?>
    <!-- /.container -->

    <!-- Column Row -->
    <div class="container-fluid contact-section" data-aos="fade-down">
    	<div class="row">
    	    <!-- Contact Row -->
		    <div class="container contact text-center">
		    	<div class="row pt-4 pb-4">
			    	<div class="col-sm-12 text-center mx-auto">
			    			<h2 class="pt-4 pb-4 white">Ready to Start a Conversation?</h2>
			    			<p class="pt-4 pb-4" style="color: #fff;">Give us a call <strong><a href="tel:18007115769">+1 (800) 711-5769</a></strong>, or send us a message and we’d be happy to help you save time, money, and simplify your payment processing!</p>
			    	</div>
			    	<div class="col-sm-12" id="form-messages"></div>
		    		<div class="col-sm-12">
		    			<form id="ajax-contact" method="post" action="script/mailer.php">
						  <div class="form-group">
						    <input class="form-control" type="text" placeholder="Name" id="name" name="name" required />
						  </div>
						  <div class="form-group">
						    <input class="form-control" type="text" placeholder="Company Name" id="company" />
						  </div>
						  <div class="form-group row">
							  <div class="col-6">
							     <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Email" required />
							  </div>
							  <div class="col-6">
							    <input class="form-control" type="tel" placeholder="Phone" id="phone" />
							  </div>
						  </div>
						  <div class="form-group">
						    <textarea class="form-control" id="comments" name="comments" rows="5" placeholder="Tell Us About Your Needs" required></textarea>
						  </div>
						  <div class="form-group">
						     <div class="g-recaptcha" data-sitekey="6LeKXCcUAAAAACcDvb9-QfROQR6i-hl5ayDCpuOm"></div>
						  </div>
						  <div class="form-group">
						     <button type="submit" class="btn btn-default" >Let's Talk</button>
						  </div>
						</form>
		    		</div>
		    	</div>
		    </div><!-- /.container -->
    	</div>
    </div><!-- /.container -->



    <!-- Footer Menu Row -->
	<?php include ("inc/footer-menu.php"); ?>

    <!-- Footer Small Print Row -->
    <?php include ("inc/footer.php"); ?>

</body>