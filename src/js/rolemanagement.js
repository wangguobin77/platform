/*
* @Author: Marte
* @Date:   2018-07-12 14:21:30
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-05 11:16:08
*/

'use strict';
$(".click_dt").on("click", function() {
    $('.list_dd').stop();
    $(this).parent().siblings("dt").removeAttr("id");
    if ($(this).parent().attr("id") == "open") {
        $(this).parent().removeAttr("id").siblings("dd").slideUp();
    } else {
        $(this).parent().attr("id", "open").next().slideDown().siblings("dd").slideUp();
    }
});

$(".list_li").on("click", function() {
    $(this).siblings("li").removeAttr("id");
    if ($(this).attr("id") == "ziti") {
        $(this).removeAttr("id");
    } else {
        $(this).attr("id", "ziti");
    }
});

// 阻止事件冒泡
 var oDiv1 = $('.dian-more');
 $(".dian-more").on("click", function(ev) {
    var oEvent = ev || event;
    $(this).next('.operate-box').toggle();
    if($(this).next('.operate-box').css('display')=="block"){
        $(this).parent().parent().parent().prev('dl').find('.operate-box').css('display',"none");
        $(this).parent().siblings('li').find('.operate-box').css('display','none');


    }
        //js阻止事件冒泡
        oEvent.cancelBubble = true;
        oEvent.stopPropagation();
        return false;
})

$(document).click(function(e){
    var _con = $('.operate-box');   // 设置目标区域
    if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
        $('.operate-box').css('display','none');
    }

})

// 编辑角色组名字
$('.renamegroup').click(function(){
    $(this).parent().prev().prev().find('p.a-textarea-edit').attr('contenteditable',true);
    $(this).parent().prev().prev().find('p.a-textarea-edit').addClass('a-textarea-edit-active');
    //隐藏小圆点
    $(this).parent().prev('i.dian-more').hide();

    // 出现保存文字
    $(this).parent().next().show();

})

//点击保存
$('i.bc-btn').click(function(){
    //ajax请求
    refresh();

})

// 删除角色组
$('.del-rolegroup').click(function(){
    $('.dialog').find('h6').html('是否确认删除该分组，该分组下角色也会一并删除？');
    $('.del-box').show();

})

//编辑角色名
$('.operate-box').find('.rename').click(function(){
    $(this).parent().parent().find('a.a-textarea-edit').attr('contenteditable','true');
    $(this).parent().parent().find('a.a-textarea-edit').addClass('a-textarea-edit-active');
    $(this).parent().parent().addClass('list_li-active');

    //隐藏小圆点
    $(this).parent().prev('i.dian-more').hide();
    //隐藏操作框
    $(this).parent().hide();
    // 出现保存文字
    $(this).parent().next().show();

})

//添加角色
$('.operate-box').find('a.add-role').click(function(){
    $(this).parent().parent().next().find('li.add-role-wrap').css('display','block');
    //new
    $(this).parent().parent().next().slideDown().siblings("dd").slideUp();
    $(this).parent().hide();

})

// 添加角色组
$('.add-role-group').click(function(){
    $('.addgroup-wrap').css('display','block');

})

//删除角色
$('.del-role').click(function(){
    $('.dialog').find('h6').html('是否确认删除该角色？');
    $('.del-box').show();

})


// 删除框  确认取消
$('.del-box').find('.cancel').click(function(){
    $('.del-box').hide();

})
//点击确认按键
$('.del-box').find('.confirm').click(function(){
    refresh();
})


