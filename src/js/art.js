
//
// cmd like
//   { action: "actionname", "source":"whofrom",target:"who against"}
//


var heads = {
    "hamlet":{x:660,y:53},
    "gertrude":{x:480,y:30},
    "ophelia":{x:130,y:80},
    "claudius":{x:300,y:60}
    
}



function showState(cmd){
    console.log("in art showState");
    console.log(cmd);
}

function showAction(cmd){
    console.log("in art showAction");
    console.log(cmd);
    if(cmd.actiontype == "dagger"){
        throwSomething("dagger",true,heads[cmd.source].x,heads[cmd.source].y,heads[cmd.target].x,heads[cmd.target].y);                        
    }
    if(cmd.actiontype == "heart"){
        throwSomething("heart",false,heads[cmd.source].x,heads[cmd.source].y,heads[cmd.target].x,heads[cmd.target].y);                        
    }

}


function throwSomething(thing,rotate,sourceX,sourceY,targetX,targetY){
    
        var $dagger = $("<div class='"+thing+"'></div>");
        //which way to point the dagger based on who is sitting left or right
        //transform:rotate(210deg);
        if(rotate){
            var rotate = 270;
            if(sourceX > targetX) rotate = 90;
            $dagger.css("transform","rotate("+rotate+"deg)");
        }
        $dagger.css("left",sourceX+"px");
        $dagger.css("top",sourceY+"px");
        $("#stage").append($dagger);
        $dagger.animate({"top":targetY,"left":targetX},2000,"linear",function(){
            $(this).remove()
        });

}



function displayCourse(courseName){
    
}

