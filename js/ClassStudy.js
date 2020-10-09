// 聊天模块

// 点击发送按钮
$(".Danmu_Anniu input:nth-child(2)").click(function(){
	console.log(".Danmu_Anniu input:nth-child(1)")
	var text = $(".Danmu_Anniu input:nth-child(1)").prop("value")
	if(text == ""){
		return
	}else{
		$.ajax({
			url:"http://127.0.0.1:5000/send",
			type:"post",
			data:{"data":text, "user":userinfo[0].uname},
			success:function(){
				console.log("发送成功！")
			}
		})
	}
})


// 消息接收
var jstimer = setInterval(function(){
	$.ajax({
		url:"http://127.0.0.1:5000/jieshou",
		type:"get",
		data:"",
		success:function(res){
			// console.log("接收成功！")
			// console.log(res)
			mes = res.mes
			if(msg.length == 0){
				msg = mes
			}else{
				if(msg[msg.length-1]["time"] == mes[mes.length-1]["time"])
				{
					// console.log("数据未发生改变！！")
					return
				}
				var flag = 0
				// msg.shift()
				for(var i in mes){
					// console.log(i)
					// if(i >= msg.length){
					// 	flag = i
					// 	break
					// }
					// console.log(mes)
					// console.log(i)
					if(mes[i]["time"] == (msg[msg.length-1]["time"])){
						flag = i
						console.log("数据不相同的位置！！" + flag)
						break
					}
				}
				console.log("flag:"+flag)
				if(flag != 0){
					for(var j=0;j<=flag;j++){
						mes.shift()
					}
					console.log(mes)
					msg = mes
				}else{
					msg = mes
				}
			}
			
			for(var i in msg){
				var name = msg[i].user
				var data = msg[i].data
				$(".class_right .airtle").append(`
				<p> ${name}: ${data} </p>
				`)
			}
		}
	})
}, 1000)