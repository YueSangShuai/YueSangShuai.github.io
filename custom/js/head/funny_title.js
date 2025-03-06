var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://raw.githubusercontent.com/YueSangShuai/upload_imgs/master/bachongyingQ2.png");
        document.title = '👀你是不是去拉屎了 ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://raw.githubusercontent.com/YueSangShuai/upload_imgs/master/bachongyingQ2.png");
        document.title = '😍来了老弟 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});