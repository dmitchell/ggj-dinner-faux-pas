var GLOBALS = {
    baseinterval:1000,
    npcs: {},
    course: null,
    time: 0,
    player: null,
}


$(document).ready(function(){
    // initialize course
    for (var course in GAME_SETUP.course) {
	if (GAME_SETUP.course[course].start == 0) {
	    GLOBALS.course = course;
	    listLog("set course to " + course);
	}
    }
    // initialize npcs
    for (var actor in GAME_SETUP.npc) {
	new NPC(actor, GAME_SETUP.npc[actor]);
    }
    GLOBALS.player = new Player();
});


function gogogo(){
    // move each player
    for (var npc_id in GLOBALS.npcs) {
	var npc = GLOBALS.npcs[npc_id];
	npc.move();
	// check for end game
	if (npc.happy <= 0) {
	    endGame(npc_id);
	    return;
	}
    }
    // check course transition
    GLOBALS.time++;
    if (GLOBALS.time > GAME_SETUP.course[GLOBALS.course].end) {
	// find next course
	for (var course in GAME_SETUP.course) {
	    if (GAME_SETUP.course[course].start < GLOBALS.time &&
		(GAME_SETUP.course[course].end == undefined ||
		 GAME_SETUP.course[course].end > GLOBALS.time)) {
		GLOBALS.course = course;
		// draw course transition
		listLog("Change course to " + course);
                displayCourse(course);
		GLOBALS.player.course(course);
		if (course == "successful") {
		    listLog("Game over. You survived!");
		    endGame(null);
		    return;
		}
	    }
	}
    }
    setTimeout(gogogo,GLOBALS.baseinterval);
}

function in_course(needed) {
    return (needed == undefined || GLOBALS.course == needed);
}

function listLog(msg){
    console.log(msg);
}
