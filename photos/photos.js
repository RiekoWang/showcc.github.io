var render1 = function(page, data){

	var img = "";
	var img1 = "";
		img = '<li class="img-box1"><div class="img-box">' + 
		'<a class="img-bg" href="./me" rel="example_group"></a>' + '<img class="lazy" src="http://ow4d8yam8.bkt.clouddn.com/296483-106.jpg">我的相册'  + '</div></li>';

	img1 = '<li class="img-box2"><div class="img-box">' + 
		'<a class="img-bg" href="./mylove" rel="example_group1"></a>' + '<img class="lazy" src="http://ow4d8yam8.bkt.clouddn.com/tattoo_by_wlop-da3qao4.jpg">我的收藏'  + '</div></li>';

	$(".img-box-ul").append(img).append(img1);
	$(".img-box-ul").lazyload();
	$("a[rel=example_group1],a[rel=example_group]").fancybox();
};

	