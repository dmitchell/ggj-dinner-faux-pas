var GAME_SETUP = 
{npc: 
 {hamlet: 
   {happy: .6, // starting value scale 0..1
    clarity: .3,
    operations: {
	anytime: {
	    dagger_all: {
		happy: [0, 0.39], // if happiness between these
		clarity: [0, 0.39],
		p: 1/60, // once per minute
		target: "all", // or all or player
		effect: {claudius: [-0.04, 0], ophelia: [-0.05, 0], gertrude: [-0.02, 0]} // this model has the weakness
	     // that claudius's and gertrude's responses should be a function of 
             // their current state: if confused, then they may ignore the interaction.
             // if they are happy, then they should get confused not angry
             // if they are angry, it should amplify
	    },
	    dagger_claudius: {
	    	happy: [0, 0.39],
	    	clarity: [0.7, 1],
	    	p: 1/60,
	    	target: "claudius",
	    	effect: {claudius: [-0.02, 0]}
	    }
	    }
	    }
	    sword: {
		happy: [0, 0.05], // end game
		p: 0.5, // almost certain to occur in 5 seconds (1 - 0.5^5)
		target: "Claudius",
		endgame: "Claudius" // ends the game with claudius dead
	    }
	},
	drinks: {
	    // shows how some operators can have different effects during different courses
	    toast: {
		happy: [.6, 1.0],
		clarity: [0, 1.0],  // anytime
		p: 1/(60 * 3), // once every 3 mins
		target: "all",
		effect: {ophelia: [0.1, 0], claudius: [0.05, 0], gertrude: [0.1, 0], hamlet: [0.05, 0]}
	    }
	}
    },
  appearance: [
      // which image to use for each happiness x clarity range
  {
    happy: [0, .39],
    clarity: [0, .39],
    image: "hamlet_angry.jpg"
  }
  {
  	happy: [.7, 1],
  	clarity: [0, .39],
  	image: "hamlet_confused.jpg"
  }
  {
  	happy: [0, .39],
  	clarity: [.7, 1],
  	image: "hamlet_suspicious.jpg"
  }
  {
  	happy: [.7, 1],
  	clarity: [.7, 1],
  	image: "hamlet_excited.jpg"
  }
  {
  	image: "hamlet_neutral.jpg"
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
     main: {
	 start: 105, end: 195
     },
     dessert: {
	 start: 195, end: 240
     }
   }
}
