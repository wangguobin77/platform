function trim(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function isIP(e){var i=new RegExp("^[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}$");if(!i.exec(e))return!1;var t=e.split(".");if(4!=t.length)return!1;for(var n=0;n<t.length;n++){if(0==t[n].indexOf("0")&&t[n].length>1)return!1;if(parseInt(t[n])>255||parseInt(t[n])<0)return!1}return e.search(/^192\.168\./)==-1&&e.search(/^172/)==-1&&e.search(/^127\.0/)==-1}function isAllIP(e,i){var t=new RegExp("^[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}$");if(!t.exec(e))return!1;var n=e.split(".");if(4!=n.length)return!1;for(var r=0;r<n.length;r++){if(0==n[r].indexOf("0")&&n[r].length>1)return!1;if(parseInt(n[r])>255||parseInt(n[r])<0)return!1}return 0!=i||e.search(/^192\.168\./)==-1&&e.search(/^172/)==-1&&e.search(/^127\.0/)==-1}function isEmail(e){return e.search(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)!=-1}function isTelphone(e){return e.search(/^(\d{3}-\d{8}|\d{4}-\d{7}|\d{4}-\d{8})$/)!=-1}function isMobilePhone(e){return e.search(/^(\+\d{2,3})?\d{11}$/)!=-1}function isZipcode(e){return e.search(/^[1-9]\d{5}$/)!=-1}function isQQ(e){return e.search(/^[1-9][0-9]{4,}$/)!=-1}function isNumber(e,i){var t;return t=0==i?new RegExp("^\\d*$"):new RegExp("^\\d{"+i+"}$"),e.search(t)!=-1}function showTooltips(e,i,t){if(""!=e){""==i&&(i="Error!"),$("#"+e).prepend("<div class='for_fix_ie6_bug' style='position:relative;'><div class='tooltips_main'><div class='tooltips_box'><div class='tooltips'><div class='msg'>"+i+"</div></div><div class='ov'></div></div></div></div>"),$("#"+e+" .tooltips_main").fadeIn("slow").animate({marginTop:"-23px"},{queue:!0,duration:400});try{"undefined"!=typeof t&&setTimeout('hideTooltips("'+e+'")',t)}catch(n){}}}function hideTooltips(e){try{$("#"+e).find(".tooltips_main").fadeOut("slow"),$("#"+e).find(".tooltips_main").remove()}catch(i){}}function hideAllTooltips(){$(".tooltips_main").fadeOut("slow"),$(".tooltips_main").remove()}$(document).ready(function(){$(".control-group input").not(".not_click_hide").focus(function(){hideTooltips($(this).parent().parent().attr("id"))})});
//# sourceMappingURL=jq22.js.map
