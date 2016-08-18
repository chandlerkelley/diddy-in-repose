$(function() {
	var $formContainer = $("#formContainer");
	var $newUser = $("#newUser");
	var $newVideo = $("#newVideo");
	var $logIn = $("#logIn")
	$("#newVidButton").click(function() {
		$formContainer.toggle();
		$newVideo.toggle(200);
	});
	$("#newUserButton").click(function() {
		$formContainer.toggle();
		$newUser.toggle(200);
	});
	$("#logInButton").click(function() {
		$formContainer.toggle();
		$logIn.toggle(200);
	});
});

