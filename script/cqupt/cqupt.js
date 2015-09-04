//重庆邮电大学
function loadCquptInfo(data){
    var uni = GetQueryString('uni');
    var time = getTime(data.subTime);
   //var link;
    $.ajax({
        url:"http://121.42.151.165:8080",
        data:{uni:uni,id:data.id},
        type:'GET',
        dataType:'text',
        success:function(form_data){
         var link = form_data;
            $('.collection').append(function(){
                //link;
                var str = "<li>"+
                    "<a href=\""+link+"\" class=\"collection-item blue-text lighten-4\">" +
                    "<div class=\"listInfo\">"+
                    "<div class=\"title\">"+data.title+"</div>" +
                    "<div class=\"info\">" +
                    "<span class=\"detail\">点击查看详细信息>></span>" +
                    "<span class=\"time\">"+time+"</span>" +
                    "</div>" +
                    "</div>" +
                    "</a>" +
                    "</li>";
                return str;
            })

        },
        error:function(){
            alert('加载失败');
        }
    });
}