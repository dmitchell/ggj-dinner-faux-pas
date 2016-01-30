var GLOBALS = {
    baseinterval:1000,
    npcs: {},
    course: null,
    time: 0,
}


$(document).ready(function(){
    // TODO initialize course
    // TODO initialize npcs
    // TODO initialize player
    gogogo(); 
});


function gogogo(){
    // TODO check course expiration
    // TODO move each player
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
