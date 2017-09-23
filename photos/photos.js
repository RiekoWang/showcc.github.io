var render = function(page, data){
	var img = "";
	for (var i = 0; i < data.length; i++) {
		img += '<li><div class="img-box">' + '<a class="img-bg " rel="external" data-fancybox="images" href="http://ow4d8yam8.bkt.clouddn.com/' + data[i] + '" target="_blank"></a>' + '<img class="lazy" data-original="http://ow4d8yam8.bkt.clouddn.com/' + data[i] + '">'  + '</div></li>';
	}
	$(".img-box-ul").append(img);
	$(".img-box-ul").lazyload();
	$("a[rel=example_group]").fancybox();
}