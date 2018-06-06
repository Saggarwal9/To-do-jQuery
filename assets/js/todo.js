//Check off specific Todos by clicking
$("ul").on("click","li",function(){ //on adds the listener at the starting of the program. 
	//But if we specify the second argument, we're saying whenever li is clicked in ul
	//run this segment of code again
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	}); //gives the parent element, and fades the parent element.  
	event.stopPropagation(); //Will stop the event bubbling up
});

$("input[type='text']").keypress(function(event){
	if(event.which== 13){ //13-enter key
		var todo=$(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>");
		$(this).val("");
	}
});

