<?php

// 进行登录账号判断
function login_check($name,$pswd,$call){
	if($name == "root" && $pswd == "root"){
		$return = ["status"=>1,"data"=>'登录成功'];
	}else{
		$return = ["status"=>0,"data"=>'登录失败'];
	}

	$json = json_encode($return);
	echo $call.'('.$json.')';
}


function nav($navtype,$call,$navarrs){
	$return = ['type'=>$navtype,'data'=>$navarrs[$navtype]];
	$json = json_encode($return);
	echo $call.'('.$json.')';

}

function navadd($navtype,$call,$navarrs,$arr){
	array_push($navarrs[$navtype],$arr);
	$return = ['type'=>$navtype,'data'=>$navarrs[$navtype]];
	$json = json_encode($return);
	echo $call.'('.$json.')';
}

$funarrs = [['key'=>"内涵段子",'url'=>"http://neihanshequ.com/"],['key'=>"糗事百科",'url'=>"https://www.qiushibaike.com/"],['key'=>"百思不得姐",'url'=>"http://www.budejie.com/"],['key'=>"犯贱志",'url'=>"http://www.fanjian.net/"]];

$tiebaarrs = [['key'=>"百度贴吧",'url'=>"https://tieba.baidu.com/"]];

$shoparrs = [['key'=>"天猫",'url'=>"https://www.tmall.com/"],['key'=>"唯品会",'url'=>"https://www.vip.com/"],['key'=>"一号店",'url'=>"http://www.yhd.com"],['key'=>"京东",'url'=>"https://www.jd.com/"]];

$navarrs = array("fun"=>$funarrs,"tieba"=>$tiebaarrs,"shop"=>$shoparrs);

$type = $_GET["type"];
$call = $_GET['callback'];
switch ($type) {
	
	case 'login':
		
		$name = $_GET['name'];
		$pswd = $_GET['pswd'];
		login_check($name,$pswd,$call);
		break;

	case 'nav':

		$navtype = $_GET['navtype'];
		nav($navtype,$call,$navarrs);
		break;

	case 'navadd':

		$navtype = $_GET['navtype'];
		$title = $_GET['title'];
		$website = $_GET['website'];
		$arr = ['key'=>$title,'url'=>$website];
		navadd($navtype,$call,$navarrs,$arr);
		break;	

	default:
		# code...
		break;
}

