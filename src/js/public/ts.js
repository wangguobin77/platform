// // 刷新
// function refresh(){
//      window.location.reload();
// }
// // 成功提示
// function succ(val){
//     $('.succ').find('p').html(val);
//     $('.succ').show();
//     $('.succ').delay(1600).hide(0);

// }

// // fail提示
// function fail(val){
//     $('.fail-ts').find('p').html(val);
//     $('.fail-ts').show();
//     $('.fail-ts').delay(1600).hide(0);

// }

// 刷新
function refresh(){
     window.location.reload();
}
// 成功提示
function succ(val, url){
    $('.succ').find('p').html(val);
    $('.succ').show();
    $('.succ').delay(1600).hide(0);
    if( url ) setTimeout(location.href=url,1600);
}

// fail提示
function fail(val, url){
    $('.fail-ts').find('p').html(val);
    $('.fail-ts').show();
    $('.fail-ts').delay(1600).hide(0);
    if( url ) setTimeout(location.href=url,1600);
}