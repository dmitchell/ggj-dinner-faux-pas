var GAME_SETUP = 
{npc:{ 
 hamlet: 
   {happy: .55, // starting value scale 0..1
    clarity: .25,
    operations: {
	anytime: {
	    dagger_all: {
		happy: [0, 0.4], // if happiness between these
		clarity: [0, 0.4],
		p: 1/13, // once per minute
		actiontype: "dagger",
		target: "all", // or all or player
		effect: {claudius: [-0.03, 0], ophelia: [-0.04, 0], gertrude: [-0.015, 0]} // this model has the weakness
	     // that claudius's and gertrude's responses should be a function of 
             // their current state: if confused, then they may ignore the interaction.
             // if they are happy, then they should get confused not angry
             // if they are angry, it should amplify
	    },
	    dagger_claudius: {
	    	happy: [0, 0.4],
	    	clarity: [0.7, 1],
	    	p: 1/13,
	    	actiontype: "dagger",
	    	target: "claudius",
	    	effect: {claudius: [-0.025, 0]}
	    },
	    dagger_self: {
	    	happy: [0, 0.4],
	    	clarity: [0.4, 0.7],
	    	p: 1/13,
	    	actiontype: "dagger",
	    	target: "hamlet",
	    	effect: {hamlet: [-0.015, -0.015]}
	    },
	    dagger_self2: {
	    	happy: [.4, .7],
	    	clarity: [0, .4],
	    	p: 1/13,
	    	actiontype: "dagger",
	    	target: "hamlet",
	    	effect: {hamlet: [-0.035, 0]}
	    },
	    heart_all: {
	    	happy: [0.7, 1],
	    	clarity: [0.7, 1],
	    	p: 1/15,
	    	actiontype: "heart",
	    	target: "all",
	    	effect: {claudius: [0.015, 0], ophelia: [0.02, 0], gertrude: [0.01, 0]}
	    },
	    heart_ophelia: {
	    	happy: [.7, 1],
	    	clarity: [.4, .7],
	    	p: 1/25,
	    	actiontype: "heart",
	    	target: "ophelia",
	    	effect: {ophelia: [.02, 0]}
	    },
	    talk: {
	    	p: 1/25,
	    	actiontype: "talk",
	    	target: "player",
	    },
	    sword: {
		happy: [0, 0.05], // end game
		p: 0.5, // almost certain to occur in 5 seconds (1 - 0.5^5)
		target: "claudius",
		endgame: "claudius" // ends the game with claudius dead
	    }
	},
	drinks: {
	    // shows how some operators can have different effects during different courses
	    toast: {
		happy: [.6, 1.0],
		clarity: [0, 1.0],  // anytime
		p: 1/(60 * 3), // once every 3 mins
		actiontype: "toast",
		target: "all",
		effect: {ophelia: [0.1, 0], claudius: [0.05, 0], gertrude: [0.1, 0], hamlet: [0.05, 0]}
	    }
	}
    },
  appearance: [
      // which image to use for each happiness x clarity range
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
 },
 claudius: 
   {happy: .55, // starting value scale 0..1
    clarity: .85,
    operations: {
	anytime: {
	    dagger_all: {
		happy: [0, 0.4], // if happiness between these
		clarity: [0, 0.4],
		p: 1/12,
		actiontype: "dagger",
		target: "all", // or all or player
		effect: {hamlet: [-0.03, 0], ophelia: [-0.015, 0], gertrude: [-0.04, 0]} 
	    },
	    dagger_hamlet: {
	    	happy: [0, 0.4],
	    	clarity: [0.7, 1],
	    	p: 1/10,
	    	actiontype: "dagger",
	    	target: "hamlet",
	    	effect: {hamlet: [-0.025, 0]}
	    },
	    dagger_self: {
	    	happy: [0, 0.4],
	    	clarity: [0.4, 0.7],
	    	p: 1/15,
	    	actiontype: "dagger",
	    	target: "claudius",
	    	effect: {claudius: [-0.01, -0.01]}
	    },
	    dagger_self2: {
	    	happy: [.4, .7],
	    	clarity: [0, .4],
	    	p: 1/15,
	    	actiontype: "dagger",
	    	target: "claudius",
	    	effect: {claudius: [-0.025, 0]}
	    },
	    heart_all: {
	    	happy: [0.7, 1],
	    	clarity: [0.7, 1],
	    	p: 1/15,
	    	actiontype: "heart",
	    	target: "all",
	    	effect: {hamlet: [0.01, 0], ophelia: [0.01, 0], gertrude: [0.02, 0]}
	    },
	    heart_gertrude: {
	    	happy: [.7, 1],
	    	clarity: [.4, .7],
	    	p: 1/15,
	    	actiontype: "heart",
	    	target: "gertrude",
	    	effect: {gertrude: [.02, 0]}
	    },
	    talk: {
	    	p: 1/25,
	    	actiontype: "talk",
	    	target: "player",
	    },
	    sword: {
		happy: [0, 0.05], // end game
		p: 0.5, // almost certain to occur in 5 seconds (1 - 0.5^5)
		target: "hamlet",
		endgame: "hamlet" // ends the game with hamlet dead
	    }
	},
	drinks: {
	    // shows how some operators can have different effects during different courses
	    toast: {
		happy: [.6, 1.0],
		clarity: [0, 1.0],  // anytime
		p: 1/(60 * 3), // once every 3 mins
		actiontype: "toast",
		target: "all",
		effect: {ophelia: [0.1, 0], claudius: [0.05, 0], gertrude: [0.1, 0], hamlet: [0.05, 0]}
	    }
	}
    },
  appearance: [
      // which image to use for each happiness x clarity range
  {
    happy: [0, .4],
    clarity: [0, .4],
    image: "claudius_angry.jpg"
  },
  {
  	happy: [.7, 1],
  	clarity: [0, .4],
  	image: "claudius_confused.jpg"
  },
  {
  	happy: [0, .4],
  	clarity: [.7, 1],
  	image: "claudius_suspicious.jpg"
  },
  {
  	happy: [.7, 1],
  	clarity: [.7, 1],
  	image: "claudius_excited.jpg"
  },
  {
  	image: "claudius_neutral.jpg"
  }
  ]
 },
 ophelia: 
   {happy: .55, // starting value scale 0..1
    clarity: .45,
    operations: {
	anytime: {
	    dagger_all: {
		happy: [0, 0.4], // if happiness between these
		clarity: [0, 0.4],
		p: 1/15,
		actiontype: "dagger",
		target: "all", // or all or player
		effect: {claudius: [-0.03, 0], gertrude: [-0.04, 0], hamlet: [-0.015, 0]} 
	    },
	    dagger_gertrude: {
	    	happy: [0, 0.4],
	    	clarity: [0.7, 1],
	    	p: 1/15,
	    	actiontype: "dagger",
	    	target: "gertrude",
	    	effect: {gertrude: [-0.025, 0]}
	    },
	    dagger_self: {
	    	happy: [0, 0.4],
	    	clarity: [0.4, 0.7],
	    	p: 1/10,
	    	actiontype: "dagger",
	    	target: "ophelia",
	    	effect: {ophelia: [-0.015, -0.015]}
	    },
	    dagger_self2: {
	    	happy: [.4, .7],
	    	clarity: [0, .4],
	    	p: 1/10,
	    	actiontype: "dagger",
	    	target: "ophelia",
	    	effect: {ophelia: [-0.035, 0]}
	    },
	    heart_all: {
	    	happy: [0.7, 1],
	    	clarity: [0.7, 1],
	    	p: 1/20,
	    	actiontype: "heart",
	    	target: "all",
	    	effect: {claudius: [0.01, 0], gertrude: [0.015, 0], hamlet: [0.015, 0]}
	    },
	    heart_hamlet: {
	    	happy: [.7, 1],
	    	clarity: [.4, .7],
	    	p: 1/15,
	    	actiontype: "heart",
	    	target: "hamlet",
	    	effect: {hamlet: [.02, 0], ophelia: [-0.015, 0]}
	    },
	    talk: {
	    	p: 1/30,
	    	actiontype: "talk",
	    	target: "player",
	    },
	    sword: {
		happy: [0, 0.025], // end game
		p: 0.5, // almost certain to occur in 5 seconds (1 - 0.5^5)
		target: "ophelia",
		endgame: "ophelia" // ends the game with ophelia dead
	    }
	},
	drinks: {
	    // shows how some operators can have different effects during different courses
	    toast: {
		happy: [.6, 1.0],
		clarity: [0, 1.0],  // anytime
		p: 1/(60 * 3), // once every 3 mins
		actiontype: "toast",
		target: "all",
		effect: {ophelia: [0.05, 0], claudius: [0.1, 0], gertrude: [0.05, 0], hamlet: [0.1, 0]}
	    }
	}
    },
  appearance: [
      // which image to use for each happiness x clarity range
  {
    happy: [0, .4],
    clarity: [0, .4],
    image: "ophelia_angry.jpg"
  },
  {
  	happy: [.7, 1],
  	clarity: [0, .4],
  	image: "ophelia_confused.jpg"
  },
  {
  	happy: [0, .4],
  	clarity: [.7, 1],
  	image: "ophelia_suspicious.jpg"
  },
  {
  	happy: [.7, 1],
  	clarity: [.7, 1],
  	image: "ophelia_excited.jpg"
  },
  {
  	image: "ophelia_neutral.jpg"
  }
  ]
 },
 gertrude: 
   {happy: .55, // starting value scale 0..1
    clarity: .8,
    operations: {
	anytime: {
	    dagger_all: {
		happy: [0, 0.4], // if happiness between these
		clarity: [0, 0.4],
		p: 1/10,
		actiontype: "dagger",
		target: "all", // or all or player
		effect: {hamlet: [-0.015, 0], ophelia: [-0.03, 0], claudius: [-0.04, 0]} 
	    },
	    dagger_ophelia: {
	    	happy: [0, 0.4],
	    	clarity: [0.7, 1],
	    	p: 1/12,
	    	actiontype: "dagger",
	    	target: "ophelia",
	    	effect: {ophelia: [-0.025, 0]}
	    },
	    dagger_self: {
	    	happy: [0, 0.4],
	    	clarity: [0.4, 0.7],
	    	p: 1/15,
	    	actiontype: "dagger",
	    	target: "gertrude",
	    	effect: {gertrude: [-0.01, -0.01]}
	    },
	    dagger_self2: {
	    	happy: [.4, .7],
	    	clarity: [0, .4],
	    	p: 1/15,
	    	actiontype: "dagger",
	    	target: "gertrude",
	    	effect: {gertrude: [-0.025, 0]}
	    },
	    heart_all: {
	    	happy: [0.7, 1],
	    	clarity: [0.7, 1],
	    	p: 1/15,
	    	actiontype: "heart",
	    	target: "all",
	    	effect: {hamlet: [0.01, 0], ophelia: [0.015, 0], claudius: [0.02, 0]}
	    },
	    heart_claudius: {
	    	happy: [.7, 1],
	    	clarity: [.4, .7],
	    	p: 1/15,
	    	actiontype: "heart",
	    	target: "claudius",
	    	effect: {claudius: [.02, 0]}
	    },
	    talk: {
	    	p: 1/20,
	    	actiontype: "talk",
	    	target: "player",
	    },
	    sword: {
		happy: [0, 0.05], // end game
		p: 0.5, // almost certain to occur in 5 seconds (1 - 0.5^5)
		target: "player",
		endgame: "player" // ends the game with player dead
	    }
	},
	drinks: {
	    // shows how some operators can have different effects during different courses
	    toast: {
		happy: [.6, 1.0],
		clarity: [0, 1.0],  // anytime
		p: 1/(60 * 3), // once every 3 mins
		actiontype: "toast",
		target: "all",
		effect: {ophelia: [0.05, 0], claudius: [0.1, 0], gertrude: [0.05, 0], hamlet: [0.1, 0]}
	    }
	}
    },
  appearance: [
      // which image to use for each happiness x clarity range
  {
    happy: [0, .4],
    clarity: [0, .4],
    image: "gertrude_angry.jpg"
  },
  {
  	happy: [.7, 1],
  	clarity: [0, .4],
  	image: "gertrude_confused.jpg"
  },
  {
  	happy: [0, .4],
  	clarity: [.7, 1],
  	image: "gertrude_suspicious.jpg"
  },
  {
  	happy: [.7, 1],
  	clarity: [.7, 1],
  	image: "gertrude_excited.jpg"
  },
  {
  	image: "gertrude_neutral.jpg"
  }
  ]
 }
},
 course: {
     drinks: {
	 start: 0, end: 45 // 0..45 seconds
	 // image: drink.jpg,
	 // x: ..., y: ...
     },
     first: {
	 start: 45, end: 105
     },
     second: {
	 start: 105, end: 165
     },
     main: {
	 start: 165, end: 240
     },
     successful: {
     	start: 240
     }
   }
}

