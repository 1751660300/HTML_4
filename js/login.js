var dl = true // 是否处于登录页面
var userinfo = [] // 用户信息
// 点击注册,到注册页
$(".bottom button:nth-child(1)").click(function(){
	console.log("123")
	if(dl == true){
		$(".lpt").slideUp(1000).addClass("zlactive")
		// $(".zpt").slideDown(1000).removeClass("zlactive")
		$(".zpt").slideDown(1000).removeClass("zlactive")
		$(".X").html("⬅")
		dl = !dl
	}
})

// $(document).ready(function(){
// 	$(".background").hide()
// 	$(".login-bc").hide()
// })

// 点击X按钮后隐藏登录页面
$(".X").click(function(){
	if(dl==true){
		$(".background").hide()
		$(".login-bc").hide()
	}else{
		$(".zpt").slideUp(1000).addClass("zlactive")
		// $(".lpt").slideDown(1000).removeClass("zlactive")
		$(".lpt").slideDown(1000).removeClass("zlactive")
		$(".X").html("X")
		dl = !dl
	}
	
})


// 登录功能
// 输入检测
$(".lpt input").each(function(i){
	var val = ["账号","密码"]
	$(this).blur(function(){
		var uid = $(this).prop("value")
		if(uid == ""){
			$(this).prop("placeholder", "未输入"+val[i]+"！！！").addClass("nullid")
		}
	})
})

// 登录向后台传送数据
$("button.c").click(function(){
	var datas = {}
	$(".lpt input").each(function(i){
		var v = $(this).prop("value")
		var f = $(this).prop("id")
		datas[f] = v
	})
	console.log(datas)
	$.ajax({
		url:"http://127.0.0.1:5000/login",
		type:"POST",
		data:datas,
		success:function(res){
			console.log("success" + res.type)
			if(res.type == true){
				$(".background").hide()
				$(".login-bc").hide()
			}
		}
		
	})
})


// 开始处于隐藏状态

$(document).ready(function(){
	$(".background").hide()
	$(".login-bc").hide()
})

// 点击我的弹出登录框
$(".foot div:nth-last-child(1)").click(function(){
	if(userinfo.length == 0){
		$(".background").show()
		$(".login-bc").show()
	}else{
		
	}
})

//点击课程学习，先判断是否有用户信息
$(".foot div:nth-last-child(2)").click(function(){
	if(userinfo.length == 0){
		$(".background").show()
		$(".login-bc").show()
	}else{
		// 替换main中的内容
		
	}
})