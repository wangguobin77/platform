/*
* @Author: Marte
* @Date:   2018-07-06 16:16:58
* @Last Modified by:   Marte
* @Last Modified time: 2018-07-23 11:52:47
*/

'use strict';
// 出现添加position区域
$('.add-btn').click(function(event) {
    // $('.add_position').css('opacity','1');
    $('.add_position').css({
        opacity: '1',

    });

});

// 点击保存
$('.bc-pos').click(function(){
    if($('.div-textarea-add').html()==""){
        $('.add_position').find('.error-ts').show();
        $('.div-textarea-add').css('border','1px solid red');

    }
})

// 删除框体
$('.icon-operation_delate').click(function(){
    $('.del-box').show();
})

$('.icon-close').click(function(){
    $('.del-box').hide();
})

$('.cancel').click(function(){
    $('.del-box').hide();
})



//编辑职位
$('.edit-box').click(function(){
    $(this).parent().siblings('td').find('div.div-textarea').attr('contenteditable','true');
    $(this).parent().siblings('td').find('div.div-textarea').addClass('div-textarea-active');
    $(this).parent().parent().addClass('edit-active');
    // 相邻元素不可以操作 禁用相邻元素的可编辑属性
    $(this).parent().parent().siblings().find('div.div-textarea-edit').removeClass('div-textarea-active');
    $(this).parent().parent().siblings().removeClass('edit-active');
    $(this).parent().parent().siblings().find('div.div-textarea-edit').attr('contenteditable','false');
    // 编辑删除按钮消失  出现保存取消
    $(this).css('display',"none");
    $(this).next("span.edit-pancel").css('display','none');
    $(this).parent().find('span.btn-opr').css('display','block');
    $(this).parent().parent().siblings().find('span.btn-opr').css('display','none');
    $(this).parent().parent().siblings().find('span.edit-pancel').css('display','block');
})

$('div.div-textarea').blur(function(){
    $(this).parent().siblings('td').find('div.div-textarea').removeClass('div-textarea-active');
    $(this).parent().parent().removeClass('edit-active');
    console.log($('div.div-textarea').html());
})


// 编辑职位baocun
$('.btn-save').click(function(){
    // 获取对应编辑文本的值
    var pos_val=$(this).parent().siblings('td').find('div.div-textarea-edit').html();
    console.log(pos_val);
    // 刷新列表
    window.location.href="";

})
// 编辑职位 取消操作
$('.btn-cancel').click(function(){
    window.location.href="";
})
