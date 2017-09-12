define([], function () {
  return {
    page: 1,
    offset: 20,
    init: function () {
      var that = this;
      $.getJSON("/photo/output.json", function (data) {
        that.render(that.page, data);

        that.scroll(data);
      });
    },

    render: function (page, data) {
      var begin = (page - 1) * this.offset;
      var end = page * this.offset;
      if (begin >= data.length) return;
      var html, li = "";
      for (var i = begin; i < end && i < data.length; i++) {
        li += '<li><div class="img-box">' +
          '<a class="img-bg" rel="example_group" href="https://oc1gyfe6q.qnssl.com/' + data[i] + '?raw=true"></a>' +
          '![](https://oc1gyfe6q.qnssl.com/' + data[i] + '?raw=true)' +
          '</li>';
      }


      $(".img-box-ul").append(li);
      $(".img-box-ul").lazyload();
      $("a[rel=example_group]").fancybox();
    },

    scroll: function (data) {
      var that = this;
      $(window).scroll(function () {
        var windowPageYOffset = window.pageYOffset;
        var windowPageYOffsetAddHeight = windowPageYOffset + window.innerHeight;
        var sensitivity = 0;

        var offsetTop = $(".instagram").offset().top + $(".instagram").height();

        if (offsetTop >= windowPageYOffset && offsetTop < windowPageYOffsetAddHeight + sensitivity) {
          that.render(++that.page, data);
        }
      })
    }
  }
})

作者：平凡数
链接：http://www.jianshu.com/p/02a53eca3408
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。