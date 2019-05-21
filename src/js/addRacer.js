/*
* @Author: Marte
* @Date:   2018-07-27 16:37:08
* @Last Modified by:   Marte
* @Last Modified time: 2018-07-27 17:02:24
* background-color: rgba(0, 0, 0, 0.04);
*/

'use strict';

// 感玩车手checked时显示
function checkgw(){
      if($('#male').prop('checked', 'true')){
        $('.row-xx').find('.zhuli-box').hide();
        $('.row-xx').find('.gw-box').show();
        $('.tc-box').find('input').removeAttr('disabled');
        $('.tc-box').find('input').css('background','none');
        $('.tc-box').css('background','#fff');
    }
}

// 助理车手
function checkzl(){
      if($('#manu').prop('checked', 'true')){
        $('.row-xx').find('.zhuli-box').show();
        $('.row-xx').find('.gw-box').hide();
        $('.tc-box').find('input').attr('disabled','true');
        $('.tc-box').find('input').css('background','none');
        $('.tc-box').css('background','rgba(0, 0, 0, 0.04)');
    }

}