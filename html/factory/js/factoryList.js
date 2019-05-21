/*
* @Author: Marte
* @Date:   2018-08-22 16:23:23
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-22 16:29:34
*/

'use strict';

 // 删除提示框
$('.del-box').find('.cancel').click(function(){
    $('.del-box').hide();
    window.location.href="";
})

$('.del-box').find('.icon-close').click(function(){
    $('.del-box').hide();
    window.location.href="";
})

// 点击出现删除框
function del(){
    $('.delete').show();
}