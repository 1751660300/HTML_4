var dl = true // 是否处于登录页面
// var userinfo = [] // 用户信息
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
	// console.log(datas)
	$.ajax({
		url:"http://127.0.0.1:5000/users",
		type:"POST",
		data:datas,
		success:function(res){
			// console.log(res)
			for(var i in res){
				// console.log(res[i].uid, res[i].upw)
				if(res[i].uid == datas["card"] && res[i].upw == datas["pass"]){
					userinfo.push(res[i])
					// console.log(i)
				}
			}
			if(userinfo.length != 0){
			// 	userinfo.push(res[0])
			// 	console.log("success" + res[datas["card"]])
				$(".background").hide()
				$(".login-bc").hide()
			}else{
				alert("用户名或密码错误！")
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
		// 替换main中的内容
		// console.log("替换main中的内容")
		$.ajax({
			url:"my.html",
			type:"get",
			data:"",
			success:function(result){
				$("main").html(result)
				myxr(userinfo)
			}
		})
	}
})


function myxr(userinfo){
	var use = userinfo[0]
	// background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601616870285&di=ff31dc3a8dac28d6693afa1b39707c24&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F19%2F20190119231949_buetu.jpg");
	console.log(use)
	if(use.uheadimg.trim() == ""){
		$(".userinfo .left .headimg").html("上传头像")
	}else{
		$(".userinfo .left .headimg").css({"background-image":"url(\""+use.uheadimg+"\")"})
	}
	if(use["uname"] == ""){
		$(".userinfo .left .uname h2").html("双击修改姓名")
	}else{
		$(".userinfo .left .uname h2").html(use["uname"])
	}
	
	$(".nr").each(function(){
		$(this).children("span").html(use[$(this).prop("id")])
	})
}

//点击课程学习，先判断是否有用户信息
$(".foot div:nth-last-child(2)").click(function(){
	if(userinfo.length == 0){
		$(".background").show()
		$(".login-bc").show()
	}else{
		// console.log("123456")
		// console.log("替换main中的内容")
		$.ajax({
			url:"ClassStudy.html",
			type:"get",
			data:"",
			success:function(result){
				$("main").html(result)
			}
		})
	}
})


// 底部点击首页
$(".foot div:nth-last-child(3)").click(function(){
	// console.log("123456")
	// console.log("替换main中的内容")
	$.ajax({
		url:"index1.html",
		type:"get",
		data:"",
		success:function(result){
			$("main").html(result)
		}
	})
})


// 注册的功能
$(".zpt #check").click(function(){
	var uid = $(".zpt #zcard").prop("value")
	var pwd = $(".zpt #zpwd").prop("value")
	var zqpwd = $(".zpt #zqpwd").prop("value")
	if(zqpwd != pwd){
		alert("两次输入的密码不相同")
	}else{
		$.ajax({
			url:"http://127.0.0.1:5000/zc",
			type:"post",
			data:{"uid": uid, "pwd": pwd},
			success:function(result){
				if(result.type == true){
					alert("注册成功")
				}else{
					alert("注册失败")
				}
			}
		})
	}
})
