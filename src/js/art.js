
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

var tableCenterX = (heads.hamlet.x - heads.ophelia.x)/2 + heads.ophelia.x;

var glassStart = {
    "hamlet":{x: halfWayToCenter(heads.hamlet.x), y: 270 + heads.hamlet.y},
    "gertrude":{x: halfWayToCenter(heads.gertrude.x), y: 270 + heads.gertrude.y},
    "ophelia":{x: halfWayToCenter(heads.ophelia.x), y: 270 + heads.ophelia.y},
    "claudius":{x: halfWayToCenter(heads.claudius.x), y: 270 + heads.claudius.y},
}

function halfWayToCenter(x) {
    return x - (x - tableCenterX)/4;
}

var courseFood = {
    "first":"soup",
    "second":"salad",
    "main":"meat"
};
 
 
var prevHappy = {};
var prevClarity = {};

function showState(npc){
    console.log("in art showState");
    console.log(npc);
    
    var mood = mapHappyAndClarityToImageState(npc.happy,npc.clarity);
    $("#"+npc.name).css("background-image","url(css/people/"+npc.name+"_"+mood+".png)");
    
    
    var oldHappy = prevHappy[npc.name];
    var oldClarity = prevClarity[npc.name];
    console.log("for "+npc.name+":::");
    
    
    var deltaIcon = null;
    
    if(oldHappy){
        console.log("happy delta::"+ (npc.happy - oldHappy));
        if(npc.happy > oldHappy) deltaIcon = "excited";
        if(npc.happy < oldHappy) deltaIcon = "angry";
        
    }
    if(oldClarity){
        console.log("happy delta::"+ (npc.clarity - oldClarity));
        if(npc.clarity > oldClarity) deltaIcon = "susp";
        if(npc.clarity < oldClarity) deltaIcon = "conf";
    }
    
    prevHappy[npc.name] = npc.happy;
    prevClarity[npc.name] = npc.clarity;
    
    if(! deltaIcon){
        deltaIcon = "neutral";
    }
    throwSomething("delta "+deltaIcon,false,heads[npc.name].x-50,heads[npc.name].y,heads[npc.name].x-50,heads[npc.name].y-200);
    //cmd.happy;
    //cmd.clarity;
}

function showAction(cmd){
    console.log("in art showAction");
    console.log(cmd);
    if(cmd.actiontype == "dagger" || cmd.actiontype == "heart"){
        if(cmd.target == "all") throwMultipleSomething(cmd.actiontype,(cmd.actiontype == "dagger"),cmd.source);
        else throwSomething( cmd.actiontype,(cmd.actiontype == "dagger"),heads[cmd.source].x,heads[cmd.source].y,heads[cmd.target].x,heads[cmd.target].y);
        return;
    }
    else if(cmd.actiontype == "talk"){
        displaySpeech(cmd.source,cmd.topic);
        return;
    }
    else if(cmd.actiontype == "toast") {
	throwSomething(
	    "glass", false,
	    glassStart[cmd.source].x, glassStart[cmd.source].y,
	    glassStart[cmd.source].x, glassStart[cmd.source].y - 240);
	setTimeout(othersRaise, 750, cmd.source);
	return;
    }
    console.log("Unhandled action:");
    console.log(cmd);
    
    //speak, source, topic
}

function throwMultipleSomething(thing,rotate,thrower){
    for(name in heads){
        if(name != thrower){
            throwSomething(thing,rotate,heads[thrower].x,heads[thrower].y,heads[name].x,heads[name].y);
        }
    }
}

function othersRaise(initiator) {
    for (var name in glassStart) {
	if (name != initiator) {
	    throwSomething(
		"glass", false,
		glassStart[name].x, glassStart[name].y,
		glassStart[name].x, glassStart[name].y - 240);
	}
    }
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
        $food.css("top",$npcplate.css("top"));
        $food.css("left",$npcplate.css("left"));
        $stage.append($food);
        
    }
    GLOBALS.eaten = 4;
    var $playerplate = $(".plate.player");
    var $food = $("<div class='food player  "+foodName+"'></div>");   
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
        $res.data("who",who);
        $res.click(clickResponse);
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
    hintPlate(false);
}

function liftUtensil(utensil, rotateOtherWay) {
    var angle = "30";
    if(rotateOtherWay) angle = "-"+angle;
    $("." + utensil + ".player").css({"transform": "skewX("+angle+"deg)", "z-index": 500});
    hintPlate(true);
}


function hintPlate(doHint){
    if(doHint) $(".plate.player").addClass("hint");
    else  $(".plate.player").removeClass("hint");
}

function eatFood() {
    GLOBALS.eaten--;
    if (GLOBALS.eaten > 0) {
	$(".food.player").addClass("eaten");
    } else {
	$(".food.player").remove();
    }
}


function clickStage(e){
    var cssClass = $(this).attr("class");
    var playerIdx = cssClass.lastIndexOf("player");
    if (playerIdx > 0) {
	GLOBALS.player.perform(cssClass.substring(0, playerIdx).trimRight());
    }
    event.stopPropagation();
}

function mapHappyAndClarityToImageState(happy,clarity){
    if(happy < .05) return "final"; //this is a special case very close to the end state
    if(happy < .4 && clarity < .4) return "angry";
    if(happy > .7 && clarity < .4) return "confused";
    if(happy < .4 && clarity > .7) return "suspicious";
    if(happy > .7 && clarity > .7) return "excited";
    return "neutral";
}


var states = ["suspicious","excited","confused","angry","neutral","final"];

function preloadStatesEtc(){
    var images = [];
    
    for(var name in heads){
        for(var i = 0; i < states.length; i++){
            var res = states[i];
            images.push("people/"+name+"_"+res+".png");
    }
    preload(images,"css/");
    }
}

function preload(sources, prefix)
{
  var images = [];
  for (var i = 0; i < sources.length; ++i) {
    images[i] = new Image();
 var src = sources[i];
 if(prefix != undefined){
   src = prefix + src;
 }
    images[i].src = src;
  }
}

function endGame(rage_master) {
    /*switch (rage_master) {
    case null:
	msg = "Dinner's over: everyone lived!";
	break;
    case "ophelia":
	msg = "Ophelia killed herself";
	break;
    case "hamlet":
	msg = "Hamlet killed Claudius";
	break;
    case "claudius":
	msg = "Claudius killed Hamlet";
	break;
    case "gertrude":
	msg = "Gertrude killed you for being rude";
	break;
    } */
    //$("#stage").append("<h1>"+msg+"</h1>");
    if(! rage_master) rage_master = "happy";
    $("#stage").hide();
    $("body").append("<img class='endscreen' src='css/endscreens/"+rage_master+".jpg'>");
    //$("#stage").append("<h1>"+msg+"</h1>");
}


$(preloadStatesEtc); //preload images on boot
