/*
* @Author: Marte
* @Date:   2018-07-17 16:10:41
* @Last Modified by:   Marte
* @Last Modified time: 2018-07-30 16:35:37
*/

'use strict';

//上传商品配图
     function imgUpload_sm(obj){
        // console.log(obj);
       var vvw=obj.getAttribute('data-width');
       var vvh=obj.getAttribute('data-height');
       var imgarr=[],
            img_none=[];
       var imgs=$('.imgs');
        imgarr.push(imgs);


       var fileData = obj.files[0];
       console.log(size);
       // var type=fileData.type;
       // console.log(type);
       var size = fileData.size / 1024;
       if(size>1000){
           alert("附件不能大1M");
           return;
      }
       var reader = new FileReader();
       console.log(reader);

       reader.onload = function (e) {

        var data = e.target.result;
        console.log(data);

        //加载图片获取图片真实宽度和高度
        var image = new Image();
        image.onload=function(){
            var width = image.width+'px';
            var height = image.height+'px';
            if(width!=vvw && height!=vvh){
                alert('规格错误，请上传'+vvw+"*"+vvh+'的图片');
                $('input[name="picurl"]').val(null);
                return false;
            }
                $(obj).prev("i").show();
                $(obj).prev("i").html("<span class='close-icon'>"+"</span>"+"<img class='img-pic cursor' data-pic='"+data+"' src='"+data+"'>");

                for(var i=0;i<imgarr.length;i++){
                    if(imgarr[i].attr('src')!=undefined){
                        img_none.push(imgarr[i]);
                        console.log(img_none.length);

                    }

                }
        };
        image.src= data;
    };

    //读取文件的base64数据
    reader.readAsDataURL(fileData);
 }