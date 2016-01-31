
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
    
    var mood = mapHappyAndClarityToImageState(cmd.happy,cmd.clarity);
    $("#"+cmd.name).css("background-image","url(css/people/"+cmd.name+"_"+mood+".png)");
    //cmd.happy;
    //cmd.clarity;
}

function showAction(cmd){
    console.log("in art showAction");
    console.log(cmd);
    if (cmd.target == "all") return;  // temporary hack to enable testing
    if(cmd.actiontype == "dagger"){
        throwSomething("dagger",true,heads[cmd.source].x,heads[cmd.source].y,heads[cmd.target].x,heads[cmd.target].y);
        return;
    }
    if(cmd.actiontype == "heart"){
        throwSomething("heart",false,heads[cmd.source].x,heads[cmd.source].y,heads[cmd.target].x,heads[cmd.target].y);
        return;
    }
    if(cmd.actiontype == "talk"){
        displaySpeech(cmd.source,cmd.topic);
        return;
    }
    console.log("Unhandle daction:");
    console.log(cmd);
    
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

        $food.click(clickStage);
    
}


var responses = ["angry","conf","excited","neutral","susp"];

function displaySpeech(who,topic){
    var $balloon = $('<div class="speechballoon '+who+' '+topic+'">');
    var $img = $('<img src="css/speech/icon_'+topic+'.png">');
    $balloon.append($img);
    
    for(var i = 0; i < responses.length; i++){
        var r = responses[i];
        var $res = $("<div class='"+r+"'></div>");
        $res.data("who",who)
        $res.click(clickResponse)
        $balloon.append($res);
    }
    
    $("#stage").append($balloon);
    setTimeout(function() { $balloon.remove();
			    GLOBALS.npcs[who].topic = null; }, 
	       15000);
    
                   /* 
                   <div class="angry"></div>
                    <div class="conf"></div>
                    <div class="excited"></div>
                    <div class="neutral"></div>
                
                    <div class="susp"></div>*/
}


function clickResponse(){
    var $res = $(this);
    var responseType = $res.attr("class"); //kind of a hack, but the only class on the thing is the response type
    var responseListener = $res.data("who");
    GLOBALS.player.speak(responseListener,responseType)
    $res.parent(".speechballoon").remove();
}

function dropUtensil(utensil) {
    $("." + utensil + ".player").css({"transform":  "", "z-index": ""});
}

function liftUtensil(utensil) {
    $("." + utensil + ".player").css({"transform": "skewX(-30deg)", "z-index": 500});
}

function clickStage(e){
    var cssClass = $(this).attr("class");
    var playerIdx = cssClass.lastIndexOf("player");
    if (playerIdx > 0) {
	GLOBALS.player.perform(cssClass.substring(0, playerIdx).trimRight());
    }
}

function mapHappyAndClarityToImageState(happy,clarity){
    if(happy < .05) return "final"; //this is a special case very close to the end state
    if(happy < .4 && clarity < .4) return "angry";
    if(happy > .7 && clarity < .4) return "confused";
    if(happy < .4 && clarity > .7) return "suspicious";
    if(happy > .7 && clarity > .7) return "excited";
    return "neutral";
}

/*

 {
    happy: [0, .4],
    clarity: [0, .4],
    image: "hamlet_angry.jpg"
  },
  {
  	happy: [.7, 1],
  	clarity: [0, .4],
  	image: "hamlet_confused.jpg"
  },
  {
  	happy: [0, .4],
  	clarity: [.7, 1],
  	image: "hamlet_suspicious.jpg"
  },
  {
  	happy: [.7, 1],
  	clarity: [.7, 1],
  	image: "hamlet_excited.jpg"
  },
  {
  	image: "hamlet_neutral.jpg"
  }
  ]
*/
