/**
 * Created by zx591 on 2015/7/14.
 */
function init(uni){
    var myScript = document.createElement('script');
    myScript.type = "text/javascript";
    console.log(uni);
    switch(uni){
        case "0":
            myScript.src = 'script/cqupt/cqupt.js';
            break;
        case "1":
            myScript.src = "script/xinan/xinan.js";
            break;
        case "2":
            myScript.src = "script/xnzf/xnzf.js";
            break;
        case "3":
            myScript.src = "script/cqgs/cqgs.js";
            break;
        case "4":
            myScript.src = "script/cqsf/cqsf.js";
            break;
        case "5":
            myScript.src = "script/cqyk/cqyk.js";
            break;
        case "6":
            myScript.src = "script/desf/desf.js";
            break;

    }
    console.log(myScript.src);
    document.getElementsByTagName('head')[0].appendChild(myScript);
}