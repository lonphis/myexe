/**
*�����Լ���js��
*���ߣ�lonphis
*/

//���������ռ�
LONG = window.LONG || {};

(function(){
	//���庯��

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
		//���ֻ�ṩ��һ��Ԫ�أ������̷���
		if (arguments.length == 1)
		{
			return element;
		}
		//���򣬽�����ӵ����鵱��
			elements.push(element);
		//���ذ�����������Ԫ������
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
		//this ָ��node ����
        node['e'+type+listener] = listener;
		//���¼������뺯��
        node[type+listener] = function(){node['e'+type+listener]( window.event );}
        node.attachEvent( 'on'+type, node[type+listener] );
        return true;
    }
    //�޸�IEattach ����thisָ��Ĵ���
    // Didn't have either so return false
    return false;
}
LONG.addEvent = addEvent;

//�ַ���ת��Ϊʮ������
function stringToHex(str){
	var val="";
	for(var i=0;i<str.length;i++){
		val += ((val === '' ? '' : ',' )+ str.charCodeAt(i).toString(10));
	}
	return val;
}
LONG.stringToHex = stringToHex;

//ʮ������ת��Ϊ�ַ���
function hexToString(str){
	return String.fromCharCode(parseInt(str,10));
}
LONG.hexToString = hexToString;

}())