/*
* @Author: Marte
* @Date:   2018-08-07 11:47:48
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-10 16:29:28
*/

'use strict';
// 格式化控件
var enLang = {
    name  : "en",
    month : ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    weeks : [ "日","一","二","三","四","五","六" ],
    times : ["时","分","秒"],
    timetxt: ["时间","开始时间","结束时间"],
    backtxt:"返回",
    clear : "清空",
    today : "现在",
    yes   : "确定",
    close : "关闭"
}
jeDate("#test02",{
    format: "YYYY-MM"
});


// 点击行出现详情
$('tbody').find('tr').click(function(id){
    window.location.href="deductDetail.html";
})