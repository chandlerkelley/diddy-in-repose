$(function() {
	var $formContainer = $("#formContainer");
	var $newUser = $("#newUser");
	var $newVideo = $("#newVideo");
	var $logIn = $("#logIn")
	// $("#newVidButton").click(function() {
	// 	$(".popup").hide()
	// 	$formContainer.show();
	// 	$newVideo.show(200);
	// });
	$("#newUserButton").click(function() {
		$(".popup").hide()
		$formContainer.show();
		$newUser.show(200);
	});
	$("#logInButton").click(function() {
		$(".popup").hide()
		$formContainer.show();
		$logIn.show(200);
	});
	$(".close").click(function() {
		$formContainer.hide();
		$(".popup").hide();
	});
});

