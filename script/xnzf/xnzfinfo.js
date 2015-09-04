/**
 * Created by zx591 on 2015/7/14.
 */
function hideInfo(){
    var obj = $('#loadinfo');
    obj.contents().find('.top_nav').css('diplay','none');
    $('.focuses').css('display','none');
    $('#smoothmenu1').css('display','none');
    $('#position').css('display','none');
    $('.erji_banner').css('display','none');
    $('#left').css('display','none');
    console.log('hide info');
    console.log(obj.html());
}