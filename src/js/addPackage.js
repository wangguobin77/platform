/*
* @Author: Marte
* @Date:   2018-08-28 17:23:52
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-28 18:18:00
*/

'use strict';
 /**
  * 格式化控件
  */
var enLang = {
    name  : "cn",
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

 jeDate("#enYMDhms",{
    language:enLang,
    format: "YYYY-MM-DD hh:mm:ss"
});