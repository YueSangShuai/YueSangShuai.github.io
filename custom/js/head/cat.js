function scrollToDest(targetY, duration) {
    const startingY = window.pageYOffset;
    const diff = targetY - startingY;
    let start;

    // 使用 requestAnimationFrame 来平滑动画
    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        // 计算动画已进行的时间比例
        const time = timestamp - start;
        let percent = Math.min(time / duration, 1);

        // 使用缓动函数（在这里是 easeInOutCubic）进行平滑滚动
        percent = easeInOutCubic(percent);

        window.scrollTo(0, startingY + diff * percent);

        // 继续动画，直到完成
        if (time < duration) {
            window.requestAnimationFrame(step);
        }
    });
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}


function getBasicInfo() {
    /* 窗口高度 */
    var ViewH = $(window).height();
    /* document高度 */
    var DocH = $("body")[0].scrollHeight;
    /* 滚动的高度 */
    var ScrollTop = $(window).scrollTop();
    /* 可滚动的高度 */
    var S_V = DocH - ViewH;
    var Band_H = ScrollTop / (DocH - ViewH) * 100;
    return {
        ViewH: ViewH,
        DocH: DocH,
        ScrollTop: ScrollTop,
        Band_H: Band_H,
        S_V: S_V
    }
};
function show(basicInfo) {
    if (basicInfo.ScrollTop > 0.001) {
        $(".neko").css('display', 'block');
    } else {
        $(".neko").css('display', 'none');
    }
}
(function ($) {
    $.fn.nekoScroll = function (option) {
        var defaultSetting = {
            top: '0',
            scroWidth: 6 + 'px',
            z_index: 9999,
            zoom: 0.9,
            borderRadius: 5 + 'px',
            right: 60 + 'px',
            // 这里可以换为你喜欢的图片，例如我就换为了雪人，但是要抠图
            nekoImg: "https://bu.dusays.com/2022/07/20/62d812db74be9.png",
            hoverMsg: "喵喵喵~",
            color: "#6f42c1",
            during: 500,
            blog_body: "body",
        };
        var setting = $.extend(defaultSetting, option);
        var getThis = this.prop("className") !== "" ? "." + this.prop("className") : this.prop("id") !== "" ? "#" +
            this.prop("id") : this.prop("nodeName");

            
        if ($(".neko").length == 0) {
            this.after("<div class=\"neko\" id=" + setting.nekoname + " data-msg=\"" + setting.hoverMsg + "\"></div>");
        }
        let basicInfo = getBasicInfo();
        $(getThis)
            .css({
                'position': 'fixed',
                'width': setting.scroWidth,
                'top': setting.top,
                'height': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 + 'px',
                'z-index': setting.z_index,
                'background-color': setting.bgcolor,
                "border-radius": setting.borderRadius,
                'right': setting.right,
                'background-image': 'url(' + setting.scImg + ')',
                'background-image': '-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)', 'border-radius': '2em',
                'background-size': 'contain'
            });
        $("#" + setting.nekoname)
            .css({
                'position': 'fixed',
                'top': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 - 50 + 'px',
                'z-index': setting.z_index * 10,
                'right': setting.right,
                'background-image': 'url(' + setting.nekoImg + ')',
            });
        show(getBasicInfo());
        $(window)
            .scroll(function () {
                let basicInfo = getBasicInfo();
                show(basicInfo);
                $(getThis)
                    .css({
                        'position': 'fixed',
                        'width': setting.scroWidth,
                        'top': setting.top,
                        'height': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 + 'px',
                        'z-index': setting.z_index,
                        'background-color': setting.bgcolor,
                        "border-radius": setting.borderRadius,
                        'right': setting.right,
                        'background-image': 'url(' + setting.scImg + ')',
                        // 'background-image': '-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)', 'border-radius': '2em',
                        'background-size': 'contain'
                    });
                $("#" + setting.nekoname)
                    .css({
                        'position': 'fixed',
                        'top': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 - 50 + 'px',
                        'z-index': setting.z_index * 10,
                        'right': setting.right,
                        'background-image': 'url(' + setting.nekoImg + ')',
                    });
                if (basicInfo.ScrollTop == basicInfo.S_V) {
                    $("#" + setting.nekoname)
                        .addClass("showMsg")
                } else {
                    $("#" + setting.nekoname)
                        .removeClass("showMsg");
                    $("#" + setting.nekoname)
                        .attr("data-msg", setting.hoverMsg);
                }
            });
        this.click(function (e) {
            scrollToDest(0, 500);
        });
        $("#" + setting.nekoname)
            .click(function () {
                scrollToDest(0, 500);
            });
        return this;
    }
})(jQuery);

$(document).ready(function () {
    //部分自定义
    //自定义（去掉以下注释，并注释掉其他的查看效果）
    $("#catcat").nekoScroll({
        nekoname:'neko1', //nekoname，相当于id
        nekoImg:"https://raw.githubusercontent.com/YueSangShuai/upload_imgs/master/bachongyingQ2.png", //neko的背景图片
        scImg:"https://raw.githubusercontent.com/YueSangShuai/upload_imgs/master/Snipaste_2024-01-12_11-06-29-removebg-preview.png", //绳子的背景图片
        bgcolor:'rgba(0,0,0,0)', //背景颜色，没有绳子背景图片时有效
        zoom:0.9, //绳子长度的缩放值
        hoverMsg:'你好~喵', //鼠标浮动到neko上方的对话框信息
        right:'100px', //距离页面右边的距离
        fontFamily:'楷体', //对话框字体
        fontSize:'14px', //对话框字体的大小
        color:'#1e90ff', //对话框字体颜色
        scroWidth:'8px', //绳子的宽度
        z_index:100, //不用解释了吧
        during:1200, //从顶部到底部滑动的时长
    });

})
