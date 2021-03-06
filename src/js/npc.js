var NPC = function(name, descriptor) {
    this.name = name;
    this.happy = descriptor.happy || .6;
    this.clarity = descriptor.clarity || .6;
    // TODO normalize probabilities??
    this.operations = descriptor.operations;
    // set action and source properties
    for (var course in this.operations) {
	for (var action in this.operations[course]) {
	    var entry = this.operations[course][action];
	    entry.action = action;
	    entry.source = this.name;
	}
    }
    this.topic = null;
    GLOBALS.npcs[name] = this;
    // draw npc
    showState(this);
}

NPC.prototype.topics = ["travel", "occult", "gov", "family", "food", "ent"];

// figures out what if any moves this npc makes in this cycle
// at most one move per cycle per NPC
NPC.prototype.move = function() {
    // roll the dice against all available moves
    if (!this.moveInternal(GLOBALS.course)) this.moveInternal("anytime");
}

NPC.prototype.moveInternal = function(phase) {
    var phaseOps = this.operations[phase];
    for (var operator in phaseOps) {
	var op = phaseOps[operator];
	// if happiness and clarity and random
	if (this.gate(op) && Math.random() < op.p) {
	    if (op.actiontype == "talk") {
		if (this.topic != null) continue;

		this.topic = op.topic = this.topics[Math.floor(Math.random() * 6)];
	    }
	    // invoke graphics (use target property)
	    showAction(op);
	    // affect each target
	    for (var target in op.effect) {
		GLOBALS.npcs[target].react(op.effect[target]);
	    }
	    return true;  // only one move per cycle
	}
    }
    return false;
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
    this.happy += effect[0];  // should this be *=?
    if (this.happy > 1) { this.happy = 1; }
    this.clarity += effect[1];
    if (this.clarity < 0) {
	this.clarity = 0;
    } else if (this.clarity > 1) {
	this.clarity = 1;
    }
    if (effect.length > 2) {
	this.topic = effect[2];
    }
    // invoke character image change
    showState(this);
}
