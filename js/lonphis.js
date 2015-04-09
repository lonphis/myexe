/**
*创建自己的js库
*作者：lonphis
*/

//创建命名空间
LONG = window.LONG || {};

(function(){
	//定义函数

function isCompatible(other) {
	if(other === false ||Array.prototype.push || !Object.hasOwnProperty 
		|| !document.createElement || !document.getElementsByTagName){
		return false;
	}
	return true;
}
LONG.isCompatible = isCompatible;

function $() {
	var elements = new Array();
	for (var i=0; i< argunments.length; i++)
	{
		var element = arguments[i];
		if (typeof element == "string")
		{
			element = document.getElementById(element);
		}
		//如果只提供了一个元素，则立刻返回
		if (arguments.length == 1)
		{
			return element;
		}
		//否则，将它添加到数组当中
			elements.push(element);
		//返回包含多个请求的元素数组
		return elements;
	
	}
LONG.$ = $;

}

function addEvent( node, type, listener ) {
    // Check compatibility using the earlier method
    // to ensure graceful degradation
    if(!isCompatible()) { return false }
    if(!(node = $(node))) return false;
    
    if (node.addEventListener) {
        // W3C method
        node.addEventListener( type, listener, false );
        return true;
    } else if(node.attachEvent) {
        // MSIE method
		//this 指向node 对象
        node['e'+type+listener] = listener;
		//将事件对象传入函数
        node[type+listener] = function(){node['e'+type+listener]( window.event );}
        node.attachEvent( 'on'+type, node[type+listener] );
        return true;
    }
    //修复IEattach 方法this指向的错误。
    // Didn't have either so return false
    return false;
}
LONG.addEvent = addEvent;

//字符串转换为十六进制
function stringToHex(str){
	var val="";
	for(var i=0;i<str.length;i++){
		val += ((val === '' ? '' : ',' )+ str.charCodeAt(i).toString(10));
	}
	return val;
}
LONG.stringToHex = stringToHex;

//十六进制转换为字符串
function hexToString(str){
	return String.fromCharCode(parseInt(str,10));
}
LONG.hexToString = hexToString;

}())