var $ = require('fishfront/ui/global');
var dialog = require('fishfront/ui/dialog');
var loginPage = require('fishfront/ui/loginPage');
loginPage.use({
	title:'烘焙帮后台管理系统',
	init:function(){
		alert('初始化');
	},
	login:function(data){
		alert(data);
	}
});