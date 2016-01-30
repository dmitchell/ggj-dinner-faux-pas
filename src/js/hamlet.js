var GAME_SETUP = 
{npc: 
 {hamlet: 
   {happy: .4, // starting value scale 0..1
    clarity: .5,
    operations: {
	anytime: {
	    dagger_emote: {
		happy: [0, .55], // if happiness between these
		clarity: [.4, 1.0],
		p: 1/60, // once per minute
		target: "claudius", // or all or player
		effect: {claudius: [.04, 0], hamlet: [.05, 0], gertrude: [.02, 0]} // this model has the weakness
	     // that claudius's and gertrude's responses should be a function of 
             // their current state: if confused, then they may ignore the interaction.
             // if they are happy, then they should get confused not angry
             // if they are angry, it should amplify
	    },
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
    happy: [0, .1],
    image: "hamlet_rage.jpg"
  }
  ]
 }
 },
 {course: {
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
