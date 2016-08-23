var deleteCheck = $("")

$(function() {
	var $formContainer = $("#formContainer");
	var $newUser = $("#newUser");
	var $newVideo = $("#newVideo");
	var $logIn = $("#logIn");
	var $createUserButton = $("#create-user-button");
	$("#newUserButton").click(function() {
		$(".popup").hide()
		$("#new-user-button").attr("disabled", true);
		$formContainer.show();
		$newUser.show(200);
	});
	$("#password").keyup(function(){
		if ($(this).val().length >= 6) {
			$("#user-feedback").html("passwords must match");
			$("#pass-mark").css("display", "inline");
		} else {
			$("#user-feedback").html("password must be at least 6 characters long")
			$("#pass-mark").hide();
			$("#pass-check-mark").hide();
		}
	});
	$("#password-check").keyup(function(){
		if ($(this).val() === $("#password").val() && $("#password").val().length >= 6) {
			$("#user-feedback").html("");
			
		} else {
			$("#user-feedback").html("passwords must match")
		}
	});
	$(".input").keyup(function(){
		if ($("#password-check").val() === $("#password").val() && $("#password").val().length >= 6) {
			$createUserButton.removeAttr("id");
			$createUserButton.attr("type", "submit");
			$("#pass-check-mark").css("display", "inline");
		} else {
			$createUserButton.attr("id", "create-user-button");
			$createUserButton.attr("type", "button");
			$("#pass-check-mark").hide();
		}
	})
	$("#logInButton").click(function() {
		$(".popup").hide()
		$formContainer.show();
		$logIn.show(200);
	});
	$(".delete-button").click(function() {
		console.log($(this).attr("id"));
		var videoId = $(this).attr("id");
		$("#delete-form").attr("action", "/users/delete/" + videoId + "?_method=DELETE");
		$formContainer.show();
		$("#delete-check").show(200);
	})
	$(".close").click(function() {
		$formContainer.hide();
		$(".popup").hide();
	});
});

