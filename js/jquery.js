// 搜索
$(".search .ipt input").focus(function(){
	// console.log(".search .result")
	$(".search .result").css({"visibility":"visible"})
	$(".search .result").html("")
	$(".search .result").append(`<div class="list">
						<span>无查询结果</span>
					</div>`)
})

$(".search .ipt input").blur(function(){
	// console.log(".search .result")
	$(".search .result").css({"visibility":"hidden"})
})

var stimer = setInterval(function(){
	var text = $(".search .ipt input").prop("value")
	if (text != ""){
		$.ajax({
			url:"http://127.0.0.1:5000/search",
			type:"post",
			data:{"text":text},
			success:function(result){
				// console.log(result)
				$(".search .result").html("")
				if(result.length != 0){
					for(var i in result){
						// console.log(i)
						var cname = result[i]["cname"]
						$(".search .result").append(`<div class="list">
											<a href="#">${cname}</a>
										</div>`)
					}
				}else{
					$(".search .result").append(`<div class="list">
										<span>无查询结果</span>
									</div>`)
				}
			}
		})
		$(".search .result").css({"visibility":"visible"})
	}else{
		// if()
		// $(".search .result").css({"visibility":"hidden"})
	}
}, 3000)

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
			// $(this).children("div").slideDown().toggle()
			$(this).children("div").slideDown()
			flag = !flag
		}else{
			// $(this).children("div").slideUp().toggle()
			$(this).children("div").slideUp()
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


// var lbttimer = setInterval(function(){
// 	lnext()
// 	lbtset(lbt)
// }, 3000)

// 轮播图的左右箭头显示
$(".type .type-right").mouseover(function(){
	$(".type .type-right .lbt button").css({"visibility": "visible"})
	clearInterval(lbttimer)
})
$(".type .type-right").mouseout(function(){
	$(".type .type-right .lbt button").css({"visibility": "hidden"})
	lbttimer = setInterval(function(){
		lnext()
		lbtset(lbt)
	}, 3000)
})

var lbt = [0,1,2]

$(".type .type-right .lbt .rightjt").click(function(){
	lnext()
	console.log(lbt)
	lbtset(lbt)
})

$(".type .type-right .lbt .leftjt").click(function(){
	llast()
	console.log(lbt)
	lbtset(lbt)
	
})



function lnext(){
		var n = lbt.pop()
		lbt.unshift(n)
}

function llast(){
	var n = lbt.shift()
	lbt.push(n)
}

function lbtset(lbts){
	$(".type .type-right .lbt>div").each(function(i){
		if(lbts[i] == 1){
			$(this).prop("class","lbt-active")
		}else if(lbts[i] == 2){
			$(this).prop("class","lbt-active-right")
		}else{
			$(this).prop("class","lbt-active-left")
		}
	})
}



// 推荐课程
$.ajax({
	url:"http://127.0.0.1:5000/classes",
	type:"get",
	data:"",
	success:function(res){
		console.log(res)
		flclass(res)
		console.log(classinfo)
		xrym(classinfo)
		tjkc(res)
	}
})

// 对数据进行分类
function flclass(res){
	for(var i in res){
		var con = false
		if(classinfo[res[i].ctype] == undefined){
			classinfo[res[i].ctype] = []
			classinfo.key.push(res[i].ctype)
			classinfo[res[i].ctype].push(res[i])
		}else{
			for (j in classinfo[res[i].ctype]){
				if(classinfo[res[i].ctype][j]["cid"] == res[i]["cid"]){
					con = true
				}
			}
			if(con){
				continue
			}
			classinfo[res[i].ctype].push(res[i])
		}
	}
}

// 渲染页面
function xrym(classinfo){
	for (var i in classinfo.key){
		var data = classinfo["key"][i]
		var child = parseInt(i) + 1
		// var child = parseInt(i)
		$(".type .type-left ul li:nth-child("+child+")").html(`
		<span>${data}</span>
		<div class="f-bottom">
			
		</div>
		`)
		$(".type .type-left ul li:nth-child("+child+") div").html("")
		for(var j in classinfo[data]){
			var name = classinfo[data][j].cname
			var id = classinfo[data][j].cid
			// console.log(name)
			$(".type .type-left ul li:nth-child("+child+") div").append(`<a href="#" onclick=detail("${id}")>${name}</a>`)
		}
	}
}


// 推荐课程
function tjkc(res){
	var img = "http:" + res[0]["cimg"]
	var lcid = res[0]["cid"]
	$(".tuijian .bottom .bottom-left").html(
		`<img src="${img}">
		 <div class="bottom-info" onclick=detail("${lcid}")></div>
		`
	)
	
	$(".tuijian .bottom .bottom-right div").each(function(i){
		if(i >= res.length) return
		var rimg = "http:" + res[i+1]["cimg"]
		var rcid = res[i+1]["cid"]
		$(this).html(`<img src="${rimg}">
		<div class="bottom-info" onclick=detail("${rcid}")></div>
		`)
	})
}


$(document).ready(function(){
	$(".md").each(function(i){
		// console.log(i)
		$(this).mouseover(function(){
			
			$(this).children(".md-name").slideDown(500)
		})
	})
})

var i = true
var timer = setInterval(function(){
	// console.log("timer")
	if(i==true){
		$(".md-name").slideDown(500)
		i = false
	}
	$(".md-name").slideUp(500)
	
}, 3000)


var detail = function(id){
	cid = id
	console.log("detail")
	$.ajax({
		url:"detail.html",
		type:"get",
		data:"",
		success:function(result){
			$("main").html(result)
		}
	})
}
