/**
 * Created by zx591 on 2015/7/14.
 */
function getInfo(){
//        var uni = GetQueryString('uni');
    var page = 1;
    //var jobList = document.getElementById('list');
    switch (uni){
        case '0':
            $.getJSON('http://121.42.151.165/web/ckinfo/json/CQUPT1',{uni:uni,page:page},function(json){
                if(json != null){
                    for(var i = 0; i<json.length;i++){
                        loadCquptInfo(json[i]);
                    }
                }
            });
            break;
        case '1':
            loadXinan();
            break;
        case '2':
            $.getJSON('http://121.42.151.165/web/ckinfo/json/XNZF1',{uni:uni,page:page},function(json){
                if(json != null){
                    for(var i= 0;i<json.length;i++){
                        loadXnzfInfo(json[i]);
                    }
                }
            });
            break;
        case '3':
            $.getJSON('http://121.42.151.165/web/ckinfo/json/CQGS1',{uni:uni,page:page},function(json){
                if(json != null){
                    for(var i= 0;i<json.length;i++){
                        loadGsInfo(json[i]);
                    }
                }
            });
            break;
        case '4':
            $.getJSON('http://121.42.151.165/web/ckinfo/json/CQSF1',{uni:uni,page:page},function(json){
                if(json != null){
                    for(var i= 0;i<json.length;i++){
                        loadSfInfo(json[i]);
                    }
                }
            });
            break;
        case '5':
            $.getJSON('http://121.42.151.165/web/ckinfo/json/CQYK1',{uni:uni,page:page},function(json){
                if(json != null){
                    for(var i= 0;i<json.length;i++){
                        loadYkInfo(json[i]);
                    }
                }
            });
            break;
        case '6':
            $.getJSON('http://121.42.151.165/web/ckinfo/json/DESF1',{uni:uni,page:page},function(json){
                if(json != null){
                    for(var i= 0;i<json.length;i++){
                        loadDesfInfo(json[i]);
                    }
                }
            });
            break;
    }
}