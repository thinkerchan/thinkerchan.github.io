/*! SimpleShare 2014-11-16 */
var SimpleShare = function(e) {
    function t(e) {
        return e = e.replace("{url}", n), e = e.replace("{title}", r), e = e.replace("{content}", i),
        e = e.replace("{pic}", s);
    }
    e = e || {};
    var n = e.url || window.location.href, r = e.title || document.title, i = e.content || "", s = e.pic || "";
    n = encodeURIComponent(n), r = encodeURIComponent(r), i = encodeURIComponent(i),
    s = encodeURIComponent(s);
    var o = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&pics={pic}&summary={content}",
      u = "http://service.weibo.com/share/share.php?url={url}&title={title}&pic={pic}&searchPic=false",
      a = "http://share.v.t.qq.com/index.php?c=share&a=index&url={url}&title={title}&appkey=801cf76d3cfc44ada52ec13114e84a96",
      f = "http://widget.renren.com/dialog/share?resourceUrl={url}&srcUrl={url}&title={title}&description={content}",
      l = "http://www.douban.com/share/service?href={url}&name={title}&text={content}&image={pic}",
      c = "https://www.facebook.com/sharer/sharer.php?u={url}&t={title}&pic={pic}",
      h = "https://twitter.com/intent/tweet?text={title}&url={url}",
      p = "https://www.linkedin.com/shareArticle?title={title}&summary={content}&mini=true&url={url}&ro=true";

    var qrcodeApi = 'https://pan.baidu.com/share/qrcode?w=160&h=160&url=';

    this.qzone = function() {
        window.open(t(o));
    }, this.weibo = function() {
        window.open(t(u));
    }, this.tqq = function() {
        window.open(t(a));
    }, this.renren = function() {
        window.open(t(f));
    }, this.douban = function() {
        window.open(t(l));
    }, this.facebook = function() {
        window.open(t(c));
    }, this.twitter = function() {
        window.open(t(h));
    }, this.linkedin = function() {
        window.open(t(p));
    };
    this.wechat = function(dom){
      if (dom.id !='imgLoaded') {
      console.log(dom.id)
      // return;
        var img = new Image(),
            _src = qrcodeApi+window.location.href;

        img.src = _src;
        img.onload = function(){
          console.log('loaded')
          dom.id = 'imgLoaded';
          wechatQrcodeImg.setAttribute('src',_src)
        }
      }
      qrcodeBox.classList.add('on');
    }
    this.wechatHide = function(){
        console.log('hide');
       qrcodeBox.classList.remove('on');
    }
};

define("simple-share.min", function() {

}),

require([ "simple-share.min" ], function(e) {
    share = new SimpleShare();
}),

define("main", function() {});
