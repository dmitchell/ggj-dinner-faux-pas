var PLAYER_OPS = {
    operations: {
	plate: [{  // what's selected
	    course: "main",     // optional gate
	    utensil: "fork",    // optional gate
	    effect: {
		gertrude: [0.3, 0.2]
	    }
	    
	},
	{
	    course: "main",
	    utensil: "knife",
	    effect: {gertrude: [0.2, 0.3]
	    }
	},
	{
	    course: "main",
	    utensil: "spoon",
	    effect: {gertrude: [0, -0.2]}
	},
	{
	    course: "main",
	    utensil: null,
	    effect: {gertrude: [-0.2, 0]}
	},
	{
	    course: "first",
	    utensil: "fork",
	    effect: {gertrude: [0, -0.3]}
	},
	{
	    course: "first",
	    utensil: "knife",
	    effect: {gertrude: [0, -0.2]}
	},
	{
	    course: "first",
	    utensil: "spoon",
	    effect: {gertrude: [0.3, 0.3]}
	},
	{
	    course: "first",
	    utensil: null,
	    effect: {gertrude: [-0.4, 0]}
	},
	{
	    course: "second",
	    utensil: "fork",
	    effect: {gertrude: [0.3, 0.3]}
	},
	{
	    course: "second",
	    utensil: "knife",
	    effect: {gertrude: [0, -0.2]}
	},
	{
	    course: "second",
	    utensil: "spoon",
	    effect: {gertrude: [0, -0.2]}
	},
	{
	    course: "second",
	    utensil: null,
	    effect: {gertrude: [-0.3, 0]}
	},
	],
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
    	hamlet: {
	      ent: { 
	          excited: {
        	    hamlet: [0.1, 0]
	          },
	          confused: {
	              hamlet: [-0.1, 0]
	          },
	          neutral: {
	              hamlet: [0, 0.1]
	          },
	          suspicious: {
	              hamlet: [-0.1, 0]
	          },
	          angry: {
	              hamlet: [0, -0.1]
	          }
	      }
	      family: {
	            excited: {
	                hamlet: [-0.1, 0]
	            },
	            confused: {
	                hamlet: [0, 0.1]
	            },
	            neutral: {
	                hamlet: [0, -0.1]
	            },
	            suspicious: {
	                hamlet: [0, 0.1]
	            },
	            angry: {
	                hamlet: [0.1, 0]
	            }
	        }
	        food: {
	            excited: {
	                hamlet: [0, 0.1]
	            },
	            confused: {
	                hamlet: [0.1, 0]
	            },
	            neutral: {
	                hamlet: [-0.1, 0]
	            },
	            suspicious: {
	                hamlet: [0.1, 0]
	            },
	            angry: {
	                hamlet: [0, -0.1]
	            }
	        }
	        gov {
	            excited: {
	                hamlet: [-0.1, 0]
	            },
	            confused: {
	                hamlet: [0.1, 0]
	            },
	            neutral: {
	                hamlet: [-0.1, 0]
	            },
	            suspicious: {
	                hamlet: [0.1, 0]
	            },
	            angry: {
	                hamlet: [0, -0.1]
	            }
	        }
	    
	}
    }
}
