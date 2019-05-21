/*
* @Author: Marte
* @Date:   2018-07-20 14:39:08
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-15 16:50:23
*/

'use strict';
/*
点击编辑
 */
$('.list_son').find('.edit').click(function(ev){
    var oEvent = ev || event;
    event = event || window.event;
    $(this).parent().parent().find('div.text_box').addClass('text_boxactive');
    $(this).parent().parent().find('div.text_box').attr('contenteditable','true')
    $(this).parent().parent().addClass('tr-active');
    oEvent.cancelBubble = true;
    oEvent.stopPropagation();

})

// 添加一级分类
$('.add-btn').click(function(){
    $('.tiamjia-wrap').find('td.tj-td').css('padding-left',"24px");
    $('.tiamjia-wrap').show();
})

$('.tiamjia-wrap').find('span.quxiao').click(function(){
    $('.tiamjia-wrap').hide();
})
// 添加二级分类
$('.opr-box').find('.glyphicon-plus').click(function(){
    $('.tiamjia-wrap').find('td.tj-td').css('padding-left',"70px");
    $('.tiamjia-wrap').show();


})

// 删除分类
$('span.icon-operation_delate').click(function(){
    $('.del-box').show();
})
// 删除提示框
$('.delate').click(function(){
    $('.del-box').show();
})
$('.del-box').find('.cancel').click(function(){
    $('.del-box').hide();
    window.location.href="";
})

$('.del-box').find('.icon-close').click(function(){
    $('.del-box').hide();
    window.location.href="";3
})
// 添加属性
$('.add-btn').click(function(){
    $('.attr-box-add').show();

})
// 编辑时
$('.opr-box').find('span.icon-operation_edit').click(function(){

    $(this).parent().parent().find('.text-box').attr('contenteditable','true');
    $(this).parent().parent().find('.text-box').addClass('text-box-active');
    $(this).parent().parent('tr').addClass('tr-active');

    $(this).parent().parent().find('td.crud-box').hide();
    $(this).parent().parent().find('td.save-cancel-box').show();


    // 相邻元素禁止编辑
    $(this).parent().parent().siblings().find('.save-cancel-box').hide();
    $(this).parent().parent().siblings().find('.text-box').attr('contenteditable','false');
    $(this).parent().parent().siblings().find('.text-box').removeClass('text-box-active');
})

$('.save-cancel-box').find('span.quxiao').click(function(){
    window.location.href="";
})