/*
* @Author: Marte
* @Date:   2018-07-21 13:59:20
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-15 20:08:01
*/

'use strict';

// 添加一级分类
$('.add-btn').click(function(){
    $('.yj-wrap').find('td.tj-td').css('padding-left',"24px");
    $('.yj-wrap').show();
})
$('.yj-wrap').find('span.quxiao').click(function(){

    $('.yj-wrap').hide();

})

// 删除分类
$('span.icon-operation_delate').click(function(){
    $('.del-box').show();
    alert(11);
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
    window.location.href="";
})
// 添加属性
$('.add-btn').click(function(){
    $('.attr-box-add').show();
})

// 点击编辑时
$("input[name='blues']").each(function(j,item){
    // 你要实现的业务逻辑
    console.log(item.value);
});

$('.opr-box').find('span.icon-operation_edit').click(function(){
    var val=$(this).parent().parent().find('.list-type').html();
    alert(val);
    var names = $(".label-name");
    // for(var i=0;i<names.length;i++){
    //     if(names[i].html()=="全部"){
    //         alert(111);
    //      }else{
    //         alert(222)
    //      }
    //  }
    // $(".label-name").each(function(j,item){
    //     // 你要实现的业务逻辑
    //     console.log(item.innerHTML);
    // });
    $(this).parent().parent().find('.text-box').attr('contenteditable','true');
    $(this).parent().parent().find('.text-box').addClass('text-box-active');
    $(this).parent().parent().find('td.list-type').hide();
    $(this).parent().parent().find('td.edit-type-box').show();

    $(this).parent().parent('tr').addClass('tr-active');
    $(this).parent().parent().find('td.crud-box').hide();
    $(this).parent().parent().find('td.save-cancel-box').show();

    // 相邻元素禁止编辑
    $(this).parent().parent().siblings().find('td.save-cancel-box').hide();
     $(this).parent().parent().siblings().find('td.edit-type-box').hide();
    $(this).parent().parent().siblings().find('.text-box').removeClass('text-box-active');
    $(this).parent().parent().siblings().find('td.crud-box').show();
    $(this).parent().parent().siblings('tr').find('.text-box').attr('contenteditable','false');
    $(this).parent().parent().siblings().removeClass('tr-active');
})

$('.save-cancel-box').find('span.quxiao').click(function(){
    window.location.href="";
})