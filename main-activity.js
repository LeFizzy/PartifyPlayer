$(document).ready(function(){
	//load the music list
	$(".home-mus").on("click",function(){
		$("#home").css("display","none");
		$("#music-list").css("display","block");
		$(".container").css("overflow-y","scroll");
		$(".container").css("overflow-x","hidden");
	});
	//load the selected music
	$(".local-music").on("click",function(){
		$("#music-list").css("display","none");
		$("#player").css("display","block");
		$(".container").css("overflow-y","hidden");
		$(".container").css("overflow-x","hidden");
	});
	//Back to home (back button not works yet)
	$(".tohome").on("click",function(){
		$("#music-list").css("display","none");
		$("#home").css("display","block");
		$(".container").css("overflow-y","hidden");
		$(".container").css("overflow-x","hidden");
	});
});
