/*
* @Author: Marte
* @Date:   2018-07-16 16:27:31
* @Last Modified by:   Marte
* @Last Modified time: 2018-07-16 16:27:43
*/

'use strict';


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