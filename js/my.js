$(".shistory").mouseover(function(){
	$(".shistory .right-spet button").css({"visibility":"visible"})
	$(".shistory .left-spet button").css({"visibility":"visible"})
})

$(".shistory").mouseout(function(){
	$(".shistory .right-spet button").css({"visibility":"hidden"})
	$(".shistory .left-spet button").css({"visibility":"hidden"})
})

// 学习记录轮播图
var shistory = [1,1,1,0,0,0,0]

$(".shistory .right-spet button").click(function(){
	next()
	// console.log($(".shistory .main>div"))
	$(".shistory .main>div").each(function(i){
		if(shistory[i] != 1){
			$(this).addClass("shunshow")
		}else{
			$(this).removeClass("shunshow")
		}
	})
})

$(".shistory .left-spet button").click(function(){
	last()
	$(".shistory .main>div").each(function(i){
		if(shistory[i] != 1){
			$(this).addClass("shunshow")
		}else{
			$(this).removeClass("shunshow")
		}
	})
	
})


function next(){
	if(shistory[$(".shistory .main>div").length-1] != 1){
		var n = shistory.pop()
		shistory.unshift(n)
		// console.log(shistory)
	}
	
}

function last(){
	if(shistory[0] != 1){
		var n = shistory.shift()
		shistory.push(n)
		// console.log(shistory)
	}

}

