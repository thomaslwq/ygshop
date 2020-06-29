/**
*name:zepto.kslider.js
*time：2015/7/4
*基于zepto.js
*支持网站图片切换以及TAB切换
*/

(function ($) {
    /*
    参数：config
    change:tab页变更事件
    参数e: 当前页码
    tick:自动滚动间隔时间毫秒 (不设置则不自动滚动)
    maxWidth:容器最大宽度 (默认有100%)
    minWidth:容器最小宽度 (默认有100%)
    className:样式类名
    "ks_wt_1" 标题栏-方形 (默认)
    "ks_wt_2" 标题栏-小圆形(适用于图片切换)
    或者你自定义的类名
    */
    $.fn.slider = function (config) {

        config = $.extend({}, { className: "ks_wt_1" }, config);

        var b = $(this), tw, timer,
        target = b.find(".ks_dbox"),
        title = b.find(".ks_wt"),
        m = { initX: 0, initY: 0, startX: 0, endX: 0, startY: 0, canmove: false },
        currentTab = 0;

        b.toggleClass(config.className,true);
        if (config.maxWidth) b.css({ maxWidth: config.maxWidth });
        if (config.minWidth) b.css({ mixWidth: config.minWidth });

        title.on("click", function (e) {
            if (e.target == this) return;
            toTab($(e.target).index());
        });

        b.on("touchstart", function (e) {
            var et = e.touches[0];
            if ($(et.target).closest(".ks_dbox").length != 0) {
                m.canmove = true, m.initX = m.startX = et.pageX;
                m.initY = et.pageY;
                clearTimer();
            }

        }).on("touchmove", function (e) {

            var et = e.touches[0];
            if (m.canmove && Math.abs(et.pageY - m.initY) / Math.abs(et.pageX - m.initX) < 0.6) {
                //             if (m.canmove && Math.abs(et.pageX - m.startX) > 10) {
                target.removeClass("ks_ts").css("-webkit-transform", "translate3d(" + (m.endX += et.pageX - m.startX) + "px,0,0)");
                m.startX = et.pageX;
                e.preventDefault();
            }
        }).on("touchend", function (e) {
            if (!m.canmove) return;
            target.toggleClass("ks_ts", true);

            tw = target.width();
            //是否超过了边界
            var bl = false, current = Math.abs(m.endX / tw);

            if (m.endX > 0) {
                current = m.endX = 0;
                bl = true;
            }
            else if (m.endX < -tw * (target.children().length - 1)) {
                current = target.children().length - 1;
                bl = true;
            }

            if (!bl) {
                if (m.endX % tw != 0) {
                    //target.css("transform", "translate(" + (m.endX = -tw*Math.abs(Math.round(m.endX/tw))) + "px,0px)");       
                    var str = parseInt((current + "").split(".")[1][0]);

                    if (e.changedTouches[0].pageX > m.initX) {
                        //往右
                        current = str <= 9 ? Math.floor(Math.abs(current)) : Math.abs(Math.round(m.endX / tw));
                    } else {
                        //往左
                        current = str >= 1 ? Math.floor(Math.abs(current)) + 1 : Math.abs(Math.round(m.endX / tw));
                    }
                }
            }
            toTab(current);
            setTimer();
            m.canmove = false;
        });

        var move = function (i) {
            target.css("-webkit-transform", "translate3d(" + (m.endX = i) + "px,0,0)");
        }

        var setIndex = function (i) {
            return i < 0 ? 0 : i >= target.children().length ? target.children().length - 1 : i;
        }

        var toTab = function (i) {
            i = setIndex(i), tw = target.width();
            move(-tw * i), toTitle(i);
            if (currentTab != i && config.change) {
                config.change(i);
            }
            currentTab = i
        }

        var toTitle = function (i) {
            if (title.length == 0) return;
            title.children().toggleClass("active", false).eq(i).toggleClass("active", true);
        }

        var setTimer = function () {
            if (!config.tick) return;
            if (timer) clearTimer();
            timer = setInterval(function () {
                toTab(currentTab >= target.children().length - 1 ? 0 : currentTab + 1);
            }, config.tick)
        }

        var clearTimer = function () {
            clearInterval(timer);
            timer = null;
        }

        setTimer();

        return {
            add: function (t, c) {
                //添加tab
                title.append("<li>" + t + "</li>");
                target.append("<div class=\"ks_warp\">" + c + "</div>");
                return this;
            },
            remove: function (i) {
                //移除tab
                if (title.children().length == 1) return;
                i = setIndex(i);
                title.children().eq(i).remove();
                target.children().eq(i).remove();
                if (i == currentTab) toTab(0);
                return this;
            }, tab: function (i) {
                //设置或者获取当前tab
                return i ? toTab(i) : currentTab;
            }
        }
    }
})(Zepto);
