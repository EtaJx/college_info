/**
 * Created by monster on 2015/7/12.
 */
//    get uni
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null) {
        return unescape(r[2]);
    }else{
        return null;
    }
}