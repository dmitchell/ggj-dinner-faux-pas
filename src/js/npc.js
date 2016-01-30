var NPC = function(name, descriptor) {
    this.name = name;
    this.happy = descriptor.happy || .6;
    this.clarity = descriptor.clarity || .6;
    // TODO normalize probabilities??
    this.operations = descriptor.operations;
    this.topic = null;
    GLOBALS.npcs[name] = this;
    // TODO draw npc

}

// figures out what if any moves this npc makes in this cycle
// at most one move per cycle per NPC
NPC.prototype.move = function() {
    // roll the dice against all available moves
    for (var phase in [GLOBALS.course, "anytime"]) {
	var phaseOps = this.operations[phase];
	for (var operator in phaseOps) {
	    var op = phaseOps[operator];
	    // if happiness and clarity and random
	    if (this.gate(op) && Math.random() < op.p) {
		// TODO invoke graphics (use target property)
		// TODO possibly end game if target=="end"

		// affect each target
		for (var target in op.effect) {
		    GLOBALS.npcs[target].react(op.effect[target]);
		}
		return;  // only one move per cycle
	    }
	}
    } 
}

/**
* return true if the NPC's happiness and clarity are within the operator's range
*/
NPC.prototype.gate = function(operator) {
    if (operator.happy == undefined
	|| (this.happy > operator.happy[0] && this.happy < operator.happy[1])) {
	return (operator.clarity == undefined
		|| (this.clarity > operator.clarity[0] && this.clarity < operator.clarity[1]));
    } else return false;
}

NPC.prototype.react = function(effect) {
    // TODO handle overflow/underflow by adjusting alternate dimension?
    this.happy += effect[this.name][0];  // should this be *=?
    if (this.happy > 1) { this.happy = 1; }
    this.clarity += effect[this.name][1];
    if (this.clarity < 0) {
	this.clarity = 0;
    } else if (this.clarity > 1) {
	this.clarity = 1;
    }
    if (effect[this.name].length > 2) {
	this.topic = effect[this.name][2];
    }
    // TODO invoke character image change
}
