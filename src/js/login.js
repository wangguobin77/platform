/*
* @Author: Marte
* @Date:   2018-06-27 17:52:03
* @Last Modified by:   Marte
* @Last Modified time: 2018-07-03 11:15:49
*/

'use strict';
/*登录判断*/

$('.dl').click(function(){
    var username=$('.username').val(),
        pwd=$('.password').val(),
        reg_pwd=/^.{6,20}$/;

    if(username==""){
        /*
        先判断用户名
         */
        $('.username-ts').show();
        $('.username-ts').removeClass('icon-judge_success_small');
        $('.username-ts').removeClass('success');
        $('.username-ts').addClass('icon-judge_failed_small');
        $('.username-ts').addClass('error');
         $('.username-ts').html('请输入正确账户名称');

    }else{
        /*
        用户名满足要求
         */
        $('.username-ts').show();
        $('.username-ts').removeClass('icon-judge_failed_small');
        $('.username-ts').removeClass('error');

        $('.username-ts').addClass('icon-judge_success_small');
        $('.username-ts').addClass('success');
        $('.username-ts').html('');

        /*
        判断密码
         */
        if(reg_pwd.test(pwd)){
            $('.mm-ts').show();
            $('.mm-ts').removeClass('icon-judge_failed_small');
            $('.mm-ts').removeClass('error');
            $('.mm-ts').addClass('icon-judge_success_small');
            $('.mm-ts').addClass('success');
            $('.mm-ts').html('');

        }else{
            $('.mm-ts').show();
            $('.mm-ts').removeClass('icon-judge_success_small');
            $('.mm-ts').removeClass('success');
            $('.mm-ts').addClass('icon-judge_failed_small');
            $('.mm-ts').addClass('error');
            $('.mm-ts').html('密码不正确');

        }

    }

})