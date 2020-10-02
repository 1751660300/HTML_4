// 背景
// var y = parseInt(window.outerHeight)
// $(".bc").css({"height": y +"px"})
// console.log($(".bc").css("width"), $(".bc").css("height"))
	



$(".type-left ul li").each(function(){
	var id = $(this).attr("id")
	var flag = true
	if(id%2 == 0){
		$(this).addClass("li-color1")
	}else{
		$(this).addClass("li-color2")
	}
	
	$(this).click(function(){
		if(flag == true){
			$(this).children("div").slideDown().toggle()
			flag = !flag
		}else{
			$(this).children("div").slideUp().toggle()
			flag = !flag
		}
		
	})
	
	// $(this).children("div").mouseover(function(){
	// 	$(this).show()
	// })
})

$(".tuijian .bottom .bottom-right div").each(function(){
	var id = $(this).attr("id")
	if(id%2 == 0){
		$(this).addClass("li-color1")
	}else{
		$(this).addClass("li-color2")
	}
})

$.ajax({
	url:"footer.html",
	type:"get",
	data:"",
	success:function(result){
		// console.log(result)
		$(result).replaceAll("foot")
	}
})

$.ajax({
	url:"login.html",
	type:"get",
	data:"",
	success:function(result){
		// console.log(result)
		//$("head").append(`<link rel="stylesheet" type="text/css" href="css/login.css"/>`)
		$(".login-bc").html(result)
	}
})

// $.ajax({
// 	url:"footer.html",
// 	type:"get",
// 	data:"",
// 	success:function(result){
// 		console.log(result)
// 	}
// })


// 主讲名师
function getTeachers(){
	$.ajax({
		url:"http://127.0.0.1:5000/teachers",
		type:"get",
		data:"",
		success:function(res){
			console.log(res)
			setTeacher(res)
		}
	})
	
	

}
getTeachers()
function setTeacher(res){
	$(".main .md").each(function(i){
		$(this).css({"background-image":"url("+res[i].theadimg+")"})
		$(this).children(".md-name").html(res[i].tname)
	})
}

$(".md").each(function(){
	console.log(".md")
	$(this).mouseover(function(){
		$(this).children(".md-name").slideDown(500)
	})
})

var timer = setInterval(function(){
	// console.log("timer")
	$(".md-name").slideUp(500)
}, 3000)
			