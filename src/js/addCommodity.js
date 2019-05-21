// 生成表格
var alreadySetSkuVals = {};//已经设置的SKU值数据

$(function(){
    //sku属性发生改变时,进行表格创建
    $(document).on("change",'.sku_value',function(){
        getAlreadySetSkuVals();//获取已经设置的SKU值
        // var b = true;
        var skuTypeArr =  [];//存放SKU类型的数组
        var totalRow = 1;//总行数
        //获取元素类型
        $(".SKU_TYPE").each(function(){
            //SKU类型节点
            var skuTypeNode = $(this).children("li");
            var skuTypeObj = {};//sku类型对象
            //SKU属性类型标题
            skuTypeObj.skuTypeTitle = $(skuTypeNode).attr("sku-type-name");
            //SKU属性类型主键
            var propid = $(skuTypeNode).attr("propid");
            skuTypeObj.skuTypeKey = propid;
            //是否是必选SKU 0：不是；1：是；
            var is_required = $(skuTypeNode).attr("is_required");
            skuValueArr = [];//存放SKU值得数组
            //SKU相对应的节点
            var skuValNode = $(this).next();
            //获取SKU值
            var skuValCheckBoxs = $(skuValNode).find("input[type='checkbox'][class*='sku_value']");
            var checkedNodeLen = 0 ;//选中的SKU节点的个数
            $(skuValCheckBoxs).each(function(){
                if($(this).is(":checked")){
                    var skuValObj = {};//SKU值对象
                    skuValObj.skuValueTitle = $(this).val();//SKU值名称
                    skuValObj.skuValueId = $(this).attr("propvalid");//SKU值主键
                    skuValObj.skuPropId = $(this).attr("propid");//SKU类型主键
                    skuValueArr.push(skuValObj);
                    checkedNodeLen ++ ;
                }
            });
            if(skuValueArr && skuValueArr.length > 0){
                totalRow = totalRow * skuValueArr.length;
                skuTypeObj.skuValues = skuValueArr;//sku值数组
                skuTypeObj.skuValueLen = skuValueArr.length;//sku值长度
                skuTypeArr.push(skuTypeObj);//保存进数组中
            }
        });
        var SKUTableDom = "";//sku表格数据
        //开始创建行
            SKUTableDom += "<table class='skuTable'><tr>";
            //创建表头
            for(var t = 0 ; t < skuTypeArr.length ; t ++){
                SKUTableDom += '<th>'+skuTypeArr[t].skuTypeTitle+'</th>';
            }
            SKUTableDom += '<th>关联商品名称</th><th>关联商品upc</th><th>操作</th>';
            SKUTableDom += "</tr>";
            //循环处理表体
            for(var i = 0 ; i < totalRow ; i ++){//总共需要创建多少行
                var currRowDoms = "";
                var rowCount = 1;//记录行数
                var propvalidArr = [];//记录SKU值主键
                var propIdArr = [];//属性类型主键
                var propvalnameArr = [];//记录SKU值标题
                var propNameArr = [];//属性类型标题
                for(var j = 0 ; j < skuTypeArr.length ; j ++){//sku列
                    var skuValues = skuTypeArr[j].skuValues;//SKU值数组
                    var skuValueLen = skuValues.length;//sku值长度
                    rowCount = (rowCount * skuValueLen);//目前的生成的总行数
                    var anInterBankNum = (totalRow / rowCount);//跨行数
                    var point = ((i / anInterBankNum) % skuValueLen);
                    propNameArr.push(skuTypeArr[j].skuTypeTitle);
                    if(0  == (i % anInterBankNum)){//需要创建td
                        currRowDoms += '<td rowspan='+anInterBankNum+'>'+skuValues[point].skuValueTitle+'</td>';
                        propvalidArr.push(skuValues[point].skuValueId);
                        propIdArr.push(skuValues[point].skuPropId);
                        propvalnameArr.push(skuValues[point].skuValueTitle);
                    }else{
                        //当前单元格为跨行
                        propvalidArr.push(skuValues[parseInt(point)].skuValueId);
                        propIdArr.push(skuValues[parseInt(point)].skuPropId);
                        propvalnameArr.push(skuValues[parseInt(point)].skuValueTitle);
                    }
                }

                var propvalids = propvalidArr.toString()
                var productName = "";//已经设置的商品名称
                var productUpc = "";//已经设置的商品的UPC
                //赋值
                if(alreadySetSkuVals){
                    var currGroupSkuVal = alreadySetSkuVals[propvalids];//当前这组SKU值
                    if(currGroupSkuVal){
                        productName = currGroupSkuVal.skuPrice;
                        productUpc = currGroupSkuVal.skuStock
                    }
                }
                //console.log(propvalids);
                SKUTableDom += '<tr propvalids=\''+propvalids+'\' propids=\''+propIdArr.toString()+'\' propvalnames=\''+propvalnameArr.join(";")+'\'  propnames=\''+propNameArr.join(";")+'\' class="sku_table_tr">'+currRowDoms+'<td>'+productName+'</td><td>'+productUpc+'</td>'+'<td class="xuanze cursor">'+'<span class="select">'+'选择'+'</span>'+'<span class="moren">'+'默认'+'</span>'+'</td></tr>';
            }
            SKUTableDom += "</table>";
        // }
        $("#skuTable").html(SKUTableDom);
    });
});

/**
 * 获取已经设置的SKU值
 */
function getAlreadySetSkuVals(){
    alreadySetSkuVals = {};
    //获取设置的SKU属性值
    $("tr[class*='sku_table_tr']").each(function(){
        var skuPrice = $(this).find("input[type='text'][class*='setting_sku_price']").val();//SKU价格
        var skuStock = $(this).find("input[type='text'][class*='setting_sku_stock']").val();//SKU库存
        if(skuPrice || skuStock){//已经设置了全部或部分值
            var propvalids = $(this).attr("propvalids");//SKU值主键集合
            alreadySetSkuVals[propvalids] = {
                "skuPrice" : skuPrice,
                "skuStock" : skuStock
            }
        }
    });
}
/*
添加规格参数
 */
$('.add-ggcs').click(function(){
    $(this).before(
        "<div class='row jiage-wrap'>"+
                "<div class='row'>"+
                    "<div class='col-md-5 row-xx gg-box'>"+
                        "<h4 class='col-md-12 T1RRTittle'>"+"规格标题:"+"</h4>"+
                        "<div class='input-box col-md-12 col-xs-12 input-box select-input'>"+
                            "<input type='text' name='' placeholder='请输入商品名称' class='sl shuru'>"+
                            "<span class='ts'>"+"*请输入正确的出参数"+"</span>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
                "<div class='row jiage-wrap' style='padding-left:15px;position:relative;'>"+
                    "<div class='col-md-5 row-xx gg-box' style='padding-left:0;'>"+
                        "<h4 class='col-md-12 T1RRTittle'>"+"规格名称："+"</h4>"+
                        "<div class='input-box col-md-12 col-xs-12 input-box select-input'>"+
                            "<input type='text' name='' placeholder='请输入商品名称' class='sl shuru'>"+
                            "<span class='ts'>"+"*请输入正确的出参数"+"</span>"+
                        "</div>"+
                    "</div>"+
                    "<div class='col-md-5 row-xx gg-box' style='padding-right:0;'>"+
                        "<h4 class='col-md-12 col-xs-12 T1RRTittle'>"+"规格内容："+"</h4>"+
                        "<div class='input-box col-md-12 col-xs-12 input-box select-input'>"+
                            "<input type='text' name='' placeholder='请输入商品名称' class='sl shuru'>"+
                            "<span class='ts'>"+"*请输入正确的出参数"+"</span>"+
                        "</div>"+
                    "</div>"+
                    "<span class='font_family icon-operation_delate col-md-1 cursor' style='font-size:24px;margin-top:45px;'>"+
                    "</span>"+
                "</div>"+

                "<div class='col-md-6 row-xx add-mc' style='padding-left:0;'>"+
                    "<h4 class='col-md-12 col-xs-12 T1RRTittle glyphicon glyphicon-plus cursor'>"+"添加名称及内容"+"</h4>"+
                "</div>"+
                "<hr class='col-md-10'>"+
            "</div>"

    )

})
/*
    添加规格名称及内容
 */
$('.content-wrap').delegate('.add-mc','click',function(e){
    e.preventDefault();
    $(this).before(
         "<div class='row jiage-wrap' style='padding-left:15px;position:relative;'>"+
            "<div class='col-md-5 row-xx gg-box' style='padding-left:0;'>"+
                "<h4 class='col-md-12 T1RRTittle'>"+"规格名称："+"</h4>"+
                "<div class='input-box col-md-12 col-xs-12 input-box select-input'>"+
                    "<input type='text' name='' placeholder='请输入商品名称' class='sl shuru'>"+
                    "<span class='ts'>"+"*请输入正确的出参数"+"</span>"+
                "</div>"+
            "</div>"+
            "<div class='col-md-5 row-xx gg-box' style='padding-right:0;'>"+
                "<h4 class='col-md-12 col-xs-12 T1RRTittle'>"+"规格内容："+"</h4>"+
                "<div class='input-box col-md-12 col-xs-12 input-box select-input'>"+
                    "<input type='text' name='' placeholder='请输入商品名称' class='sl shuru'>"+
                    "<span class='ts'>"+"*请输入正确的出参数"+"</span>"+
                "</div>"+
            "</div>"+
            "<span class='font_family icon-operation_delate col-md-1 cursor' style='font-size:24px;margin-top:45px;'>"+
            "</span>"+
        "</div>"

    )

})

// 点击选择  出现选择的关联商品
$('.sc-box').delegate('td.xuanze', 'click', function(e) {
    e.preventDefault();
    $('.del-box').show();
});

// 点击弹框关闭按钮
$('.btn-close').click(function(){
    $('.del-box').hide();

})

