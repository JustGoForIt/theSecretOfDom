window.onload = function(){
	var loginBtn = document.getElementById("login");
	var close = document.getElementById("close");
	addEvent(loginBtn,'click',showLogin);
	addEvent(close,'click',hideLogin);

}
//封装添加事件函数
var addEvent = function(element, type, handler){
	if(element.addEventListener){
		element.addEventListener(type,handler,false);
	}else if(element.attachEvent){
		element.attachEvent("on" + type,handler);
	}else{
		element["on"+type] = handler;
	}
}
//显示登录层函数
function showLogin(){
	var loginBox = document.getElementById("login_box");
	loginBox.style.display = "block";
}
//隐藏登录层函数
function hideLogin(){
	var loginBox = document.getElementById("login_box");
	loginBox.style.display = "none";
}