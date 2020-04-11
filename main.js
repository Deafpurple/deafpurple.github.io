function main(){
	VK.init(onSuccess, onFail, "5.103");
	//alert ("Main!");
}

function onSuccess(){
	alert ("Success!");
}

function onFail(){
	alert ("Fail!");
}