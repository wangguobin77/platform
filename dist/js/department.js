"use strict";$(".opr-box").find("a.glyphicon-plus").click(function(){$(this).next().toggle().parent().parent().parent().siblings().find("ul.add-drop").hide()});var height=$("table").height();console.log(height),$("table").parent(".row").css("height",height+80),$(".opr-box").find("a.icon-operation_delate").click(function(){$(".del-box").show()}),$(".del-box").find(".cancel").click(function(){$(".del-box").hide(),window.location.href=""}),$(".del-box").find(".icon-close").click(function(){$(".del-box").hide(),window.location.href=""});
//# sourceMappingURL=department.js.map
