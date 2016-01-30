
//
// cmd like
//   { action: "actionname", "source":"whofrom",target:"who against"}
//


var heads = {
    "hamlet":{x:660,y:253},
    "gertrude":{x:480,y:230},
    "ophelia":{x:130,y:280},
    "claudius":{x:300,y:260}
    
}
var courseFood = {
    "first":"soup",
    "second":"salad",
    "main":"meat"
};
 

function showState(cmd){
    console.log("in art showState");
    console.log(cmd);
}

function showAction(cmd){
    console.log("in art showAction");
    console.log(cmd);
    if (cmd.target == "all") return;  // temporary hack to enable testing
    if(cmd.actiontype == "dagger"){
        throwSomething("dagger",true,heads[cmd.source].x,heads[cmd.source].y,heads[cmd.target].x,heads[cmd.target].y);                        
    }
    if(cmd.actiontype == "heart"){
        throwSomething("heart",false,heads[cmd.source].x,heads[cmd.source].y,heads[cmd.target].x,heads[cmd.target].y);                        
    }
    //speak, source, topic
}


function throwSomething(thing,rotate,sourceX,sourceY,targetX,targetY){
    
        var $dagger = $("<div class='"+thing+"'></div>");
        //which way to point the dagger based on who is sitting left or right
        //transform:rotate(210deg);
        if(rotate && sourceX != targetX){
            var rotation = 270;
            if(sourceX > targetX) rotation = 90;
            $dagger.css("transform","rotate("+rotation+"deg)");
        }
        $dagger.css("left",sourceX+"px");
        $dagger.css("top",sourceY+"px");
        $("#stage").append($dagger);
        $dagger.animate({"top":targetY,"left":targetX},2000,"linear",function(){
            $(this).remove()
        });

}



function displayCourse(courseName){
    $(".food").remove();
    
    var foodName = courseFood[courseName];
    var $stage = $("#stage");
    for(name in heads){
        var $npcplate = $(".plate."+name);
        var $food = $("<div class='food npc eaten "+foodName+"'></div>");
        console.log($npcplate.css("top"));
        $food.css("top",$npcplate.css("top"));
        $food.css("left",$npcplate.css("left"));
        $stage.append($food);
        
    }
    var $playerplate = $(".plate.player");
    var $food = $("<div class='food player eaten "+foodName+"'></div>");   
            $food.css("top",$playerplate.css("top"));
        $food.css("left",$playerplate.css("left"));
        $stage.append($food);

    
}


function displaySpeech(who,topic){
    var $balloon = $('<div class="speechballoon '+who+' '+topic+'">');
    var $img = $('<img src="css/speech/icon_'+topic+'.png">');
    $balloon.append($img);
    $("#stage").append($balloon);
                   /* 
                   <div class="angry"></div>
                    <div class="conf"></div>
                    <div class="excited"></div>
                    <div class="neutral"></div>
                
                    <div class="susp"></div>*/
}


function clickStage(e){
    alert("class:"+$(this).attr("class")+"\nid:"+$(this).attr('id'));
    
}
    

