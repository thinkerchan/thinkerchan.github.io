var SimpleShare=function(a){function b(a){return a=a.replace("{url}",c),a=a.replace("{title}",d),a=a.replace("{content}",e),a=a.replace("{pic}",f)}var c,d,e,f,g,h,i,j,k,l,m,n,o,p;a=a||{},c=a.url||window.location.href,d=a.title||document.title,e=a.content||"",f=a.pic||"",c=encodeURIComponent(c),d=encodeURIComponent(d),e=encodeURIComponent(e),f=encodeURIComponent(f),g="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&pics={pic}&summary={content}",h="http://service.weibo.com/share/share.php?url={url}&title={title}&pic={pic}&searchPic=false",i="http://share.v.t.qq.com/index.php?c=share&a=index&url={url}&title={title}&appkey=801cf76d3cfc44ada52ec13114e84a96",j="http://widget.renren.com/dialog/share?resourceUrl={url}&srcUrl={url}&title={title}&description={content}",k="http://www.douban.com/share/service?href={url}&name={title}&text={content}&image={pic}",l="https://www.facebook.com/sharer/sharer.php?u={url}&t={title}&pic={pic}",m="https://twitter.com/intent/tweet?text={title}&url={url}",n="https://www.linkedin.com/shareArticle?title={title}&summary={content}&mini=true&url={url}&ro=true",o="https://pan.baidu.com/share/qrcode?w=160&h=160&url=",this.qzone=function(){window.open(b(g))},this.weibo=function(){window.open(b(h))},this.tqq=function(){window.open(b(i))},this.renren=function(){window.open(b(j))},this.douban=function(){window.open(b(k))},this.facebook=function(){window.open(b(l))},this.twitter=function(){window.open(b(m))},this.linkedin=function(){window.open(b(n))},p=!0,this.wechat=function(a){if("imgLoaded"!=a.id&&p){p=!1;var b=new Image,c=o+window.location.href;b.src=c,b.onload=function(){a.id="imgLoaded",wechatQrcodeImg.setAttribute("src",c),p=!0}}qrcodeBox.classList.add("on")},this.wechatHide=function(){console.log("hide"),qrcodeBox.classList.remove("on")}};define("simple-share.min",function(){}),require(["simple-share.min"],function(){share=new SimpleShare}),define("main",function(){}),require(["main"],function(){!function(){var b,a=document.createElement("script");a.src="https://hm.baidu.com/hm.js?0e2e75fa8329a6860f4229333cc6bc9f",b=document.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,b)}()});