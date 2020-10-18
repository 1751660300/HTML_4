(function(){
	var class_detail = null
	var types = classinfo["key"]
	console.log(cid)
	for (i in types){
		var data = classinfo[types[i]]
		// console.log(data)
		for(j in data){
			// console.log(data[j]["cid"])
			if(data[j]["cid"] == cid){
				class_detail = data[j]
				console.log(class_detail)
			}
		}
		
		
	}
	// console.log(class_detail[0]["cimg"])
	
	$(".detail .left img").prop("src",class_detail["cimg"])
	$(".detail .right .name div").html(class_detail["cname"])
	$(".decri").html(class_detail["cdiscrible"])
	$(".route").html(class_detail["cdiscrible"])
	
	
})()