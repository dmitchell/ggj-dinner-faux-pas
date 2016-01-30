var PLAYER_OPS = {
    operations: {
	plate: [{  // what's selected
	    course: "main",     // optional gate
	    utensil: "fork",    // optional gate
	    effect: {
		gertrude: [0.3, 0.2]
	    }
	}],
	fork: [{
	    effect: {
		utensil: "fork"
	    }
	}],
	knife: [{
	    effect: {
		utensil: "knife"
	    }
	}],
	spoon: [{
	    effect: {
		utensil: "spoon"
	    }
	}]
    },
    speech: {
	respond_food_hamlet: {
	    speaker: "hamlet",
	    topic: "food",
	    emoticon: "cry",
	    effect: {
		hamlet: [-0.1, 0], claudius: [0.04, 0]
	    }
	}
    }
}
