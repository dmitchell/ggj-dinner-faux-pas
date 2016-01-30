var NPC = function(name, descriptor) {
    this.name = name;
    this.happy = descriptor.happy || .6;
    this.clarity = descriptor.clarity || .6;
    // TODO normalize probabilities
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
	for (var idx = 0; idx < phaseOps.length; idx++) {
	    var op = phaseOps[idx];
	    if (Math.random() < op) {
		// TODO invoke graphics
		// affect each target
		for (var target in op.effect) {
		    GLOBALS.npcs[target].react(op.effect[target]);
		}
	    }
	}
    } 
}

NPC.prototype.react = function(effect) {
    this.happy += effect[this.name][0];  // should this be *=?
    this.clarity += effect[this.name][1];
    if (effect[this.name].length > 2) {
	this.topic = effect[this.name][2];
    }
    // TODO invoke character image change
}
