
var GLOBALS = {
    baseinterval:1000
}


$(document).ready(function(){
    gogogo(); 
});


function gogogo(){
    if(Math.random() < .2){
        listLog("tick: HIT!");    
    } else {
        listLog("tick");    
    }
    setTimeout(gogogo,GLOBALS.baseinterval);
}

function listLog(msg){
    $("#msglist").append("<li>"+msg+"</li>");
}