var $ = require('fishfront/ui/global.js');
var dialog = require('fishfront/ui/dialog.js');
var indexPage = require('fishfront/ui/indexPage.js');
indexPage.use({
	title:'后台管理系统',
	init:function(){
		alert("初始化");
	},
	logout:function(){
		alert("登出");
	},
	menu:{
		'系统管理':{
			'系统管理':[
				{name:'帐号管理',url:'http://www.baidu.com'},
				{name:'密码管理',url:'http://www.qq.com'}
			],
			'微信管理':[
				{name:'开发者配置',url:'http://www.sina.com'},
			]
		}
	}
});