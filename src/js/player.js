var Player = function() {
    this.utensil = null;
    this.operations = PLAYER_OPS.operations;
    this.speech = PLAYER_OPS.speech;
}

Player.prototype.perform = function(selection) {
    // select operation and perform effects
    var ops = this.operations[selection];
    if (ops != undefined) {
	for (var idx in ops) {
	    var op = ops[idx];
	    if (in_course(op.course) && this.holding_utensil(op.utensil)) {
		for (var target in op.effect) {
		    if (target == "utensil") {
			if (this.utensil != undefined) {
			    dropUtensil(this.utensil);
			}
			this.utensil = op.effect[target];
			liftUtensil(this.utensil, (selection=="fork"));
		    } else {
			GLOBALS.npcs[target].react(op.effect[target]);
		    }
		}
	    }
	}
    }
}

Player.prototype.speak = function(target, emoticon) {
    var speechDecl = this.speech[target];
    if (speechDecl == undefined) return;

    var speaker = GLOBALS.npcs[target];
    var topic = speaker.topic;
    speaker.topic = null; // clear topic

    speechDecl = speechDecl[topic];
    if (speechDecl == undefined) return;

    speechDecl = speechDecl[emoticon];
    if (speechDecl != undefined) {
	console.log(target + " received " + emoticon);
	for (var target in speechDecl) {
	    GLOBALS.npcs[target].react(speechDecl[target]);
	}
    }
}

Player.prototype.course = function(course) {
    if (this.utensil != undefined) {
	dropUtensil(this.utensil);
    }
    this.utensil = null;
}

Player.prototype.holding_utensil = function(needed) {
    return (needed == undefined || this.utensil == needed);
}

// when NPC does action, it enables/disables response options by setting topic, speaker, and utensil
// course resets utensil
