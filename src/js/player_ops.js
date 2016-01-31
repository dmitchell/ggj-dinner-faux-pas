var PLAYER_OPS = {
    operations: {
	food: [{  // what's selected
	    course: "main",     // optional gate
	    utensil: "fork",    // optional gate
	    effect: {
		gertrude: [0.04, 0.02]
	    }
	    
	},
	{
	    course: "main",
	    utensil: "knife",
	    effect: {gertrude: [0.02, 0.04]
	    }
	},
	{
	    course: "main",
	    utensil: "spoon",
	    effect: {gertrude: [0, -0.15]}
	},
	{
	    course: "main",
	    utensil: null,
	    effect: {gertrude: [-0.15, 0]}
	},
	{
	    course: "first",
	    utensil: "fork",
	    effect: {gertrude: [0, -0.15]}
	},
	{
	    course: "first",
	    utensil: "knife",
	    effect: {gertrude: [0, -0.1]}
	},
	{
	    course: "first",
	    utensil: "spoon",
	    effect: {gertrude: [0.03, 0.25]}
	},
	{
	    course: "first",
	    utensil: null,
	    effect: {gertrude: [-0.2, 0]}
	},
	{
	    course: "second",
	    utensil: "fork",
	    effect: {gertrude: [0.03, 0.25]}
	},
	{
	    course: "second",
	    utensil: "knife",
	    effect: {gertrude: [0, -0.1]}
	},
	{
	    course: "second",
	    utensil: "spoon",
	    effect: {gertrude: [0, -0.1]}
	},
	{
	    course: "second",
	    utensil: null,
	    effect: {gertrude: [-0.15, 0]}
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
        	    hamlet: [0.05, 0]
	          },
	          confused: {
	              hamlet: [-0.1, 0]
	          },
	          neutral: {
	              hamlet: [0, 0.05]
	          },
	          suspicious: {
	              hamlet: [-0.1, 0]
	          },
	          angry: {
	              hamlet: [0, -0.1]
	          }
	      },
	      family: {
	            excited: {
	                hamlet: [-0.1, 0]
	            },
	            confused: {
	                hamlet: [0, 0]
	            },
	            neutral: {
	                hamlet: [0, -0.1]
	            },
	            suspicious: {
	                hamlet: [0, 0.05]
	            },
	            angry: {
	                hamlet: [0.05, 0]
	            }
	        },
	        food: {
	            excited: {
	                hamlet: [0, 0.05]
	            },
	            confused: {
	                hamlet: [0, 0]
	            },
	            neutral: {
	                hamlet: [-0.1, 0]
	            },
	            suspicious: {
	                hamlet: [0.05, 0]
	            },
	            angry: {
	                hamlet: [0, -0.1]
	            }
	        },
	        gov: {
	            excited: {
	                hamlet: [-0.1, 0]
	            },
	            confused: {
	                hamlet: [0, -0.1]
	            },
	            neutral: {
	                hamlet: [0, 0]
	            },
	            suspicious: {
	                hamlet: [0.05, 0]
	            },
	            angry: {
	                hamlet: [0, 0.05]
	            }
	        },
	        occult: {
	            excited: {
	                hamlet: [0.1, 0], claudius: [-0.3, 0]
	            },
	            confused: {
	                hamlet: [0, 0.05]
	            },
	            neutral: {
	                hamlet: [0, -0.2]
	            },
	            suspicious: {
	                hamlet: [0, -0.3], claudius: [0, 0.1]
	            },
	            angry: {
	                hamlet: [-0.25, 0]
	            }
	        },
	        travel: {
	            excited: {
	                hamlet: [0, -0.1]
	            },
	            confused: {
	                hamlet: [0.05, 0]
	            },
	            neutral: {
	                hamlet: [0, -0.05]
	            },
	            suspicious: {
	                hamlet: [0, 0.05]
	            },
	            angry: {
	                hamlet: [-0.1, 0]
	            }
	        }
	},
	claudius: {
	      ent: { 
	          excited: {
        	    claudius: [-0.1, 0]
	          },
	          confused: {
	              claudius: [0.05, 0], hamlet: [-0.1, 0]
	          },
	          neutral: {
	              claudius: [0, 0]
	          },
	          suspicious: {
	              claudius: [0, 0.05]
	          },
	          angry: {
	              claudius: [0, -0.1]
	          }
	      },
	      family: {
	            excited: {
	                claudius: [0, -0.1]
	            },
	            confused: {
	                claudius: [-0.1, 0]
	            },
	            neutral: {
	                claudius: [0.05, 0]
	            },
	            suspicious: {
	                claudius: [0, -0.1], hamlet: [0, 0.1]
	            },
	            angry: {
	                claudius: [0, 0.05]
	            }
	        },
	        food: {
	            excited: {
	                claudius: [0, 0]
	            },
	            confused: {
	                claudius: [0.05, 0]
	            },
	            neutral: {
	                claudius: [0, 0.05]
	            },
	            suspicious: {
	                claudius: [0, -0.1]
	            },
	            angry: {
	                claudius: [-0.1, 0]
	            }
	        },
	        gov: {
	            excited: {
	                claudius: [0.25, 0]
	            },
	            confused: {
	                claudius: [-0.2, 0]
	            },
	            neutral: {
	                claudius: [0, -0.25]
	            },
	            suspicious: {
	                claudius: [-0.35, 0]
	            },
	            angry: {
	                claudius: [0, 0.1]
	            }
	        },
	        occult: {
	            excited: {
	                claudius: [-0.3, 0], hamlet: [0.1, 0]
	            },
	            confused: {
	                claudius: [0, 0.1]
	            },
	            neutral: {
	                claudius: [0, -0.25]
	            },
	            suspicious: {
	                claudius: [0.1, 0], hamlet: [-0.3, 0]
	            },
	            angry: {
	                claudius: [0.1, 0], hamlet: [-0.3, 0]
	            }
	        },
	        travel: {
	            excited: {
	                claudius: [0, 0.05]
	            },
	            confused: {
	                claudius: [0, -0.1]
	            },
	            neutral: {
	                claudius: [0, 0]
	            },
	            suspicious: {
	                claudius: [-0.1, 0]
	            },
	            angry: {
	                claudius: [0.05, 0]
	            }
	        }
	},
	ophelia: {
	      ent: { 
	          excited: {
        	    ophelia: [0, 0]
	          },
	          confused: {
	              ophelia: [0.05, 0]
	          },
	          neutral: {
	              ophelia: [-0.1, 0]
	          },
	          suspicious: {
	              ophelia: [0, -0.1]
	          },
	          angry: {
	              ophelia: [0, 0.05]
	          }
	      },
	      family: {
	            excited: {
	                ophelia: [0.1, 0]
	            },
	            confused: {
	                ophelia: [0, 0.1]
	            },
	            neutral: {
	                ophelia: [0, -0.2]
	            },
	            suspicious: {
	                ophelia: [-0.3, 0], gertrude: [0.1, 0]
	            },
	            angry: {
	                ophelia: [0, -0.25]
	            }
	        },
	        food: {
	            excited: {
	                ophelia: [0, 0]
	            },
	            confused: {
	                ophelia: [-0.1, 0]
	            },
	            neutral: {
	                ophelia: [0.05, 0]
	            },
	            suspicious: {
	                ophelia: [0, 0.05]
	            },
	            angry: {
	                ophelia: [0, -0.1]
	            }
	        },
	        gov: {
	            excited: {
	                ophelia: [0, -0.1]
	            },
	            confused: {
	                ophelia: [0, 0.05]
	            },
	            neutral: {
	                ophelia: [0.05, 0]
	            },
	            suspicious: {
	                ophelia: [0, 0]
	            },
	            angry: {
	                ophelia: [-0.1, 0]
	            }
	        },
	        occult: {
	            excited: {
	                ophelia: [0, -0.1]
	            },
	            confused: {
	                ophelia: [0.05, 0]
	            },
	            neutral: {
	                ophelia: [0, 0.05]
	            },
	            suspicious: {
	                ophelia: [-0.1, 0]
	            },
	            angry: {
	                ophelia: [0, 0]
	            }
	        },
	        travel: {
	            excited: {
	                ophelia: [-0.1, 0]
	            },
	            confused: {
	                ophelia: [0, -0.1]
	            },
	            neutral: {
	                ophelia: [0, 0.05]
	            },
	            suspicious: {
	                ophelia: [0.05, 0], hamlet: [0, 0.05]
	            },
	            angry: {
	                ophelia: [0.02, 0]
	            }
	        }
	},
	gertrude: {
	      ent: { 
	          excited: {
        	    gertrude: [0, -0.1]
	          },
	          confused: {
	              gertrude: [0, 0.05]
	          },
	          neutral: {
	              gertrude: [-0.1, 0]
	          },
	          suspicious: {
	              gertrude: [0.05, 0]
	          },
	          angry: {
	              gertrude: [0, 0]
	          }
	      },
	      family: {
	            excited: {
	                gertrude: [0, 0.05]
	            },
	            confused: {
	                gertrude: [-0.1, 0]
	            },
	            neutral: {
	                gertrude: [0, -0.1]
	            },
	            suspicious: {
	                gertrude: [0.05, 0]
	            },
	            angry: {
	                gertrude: [-0.1, 0]
	            }
	        },
	        food: {
	            excited: {
	                gertrude: [0.1, 0]
	            },
	            confused: {
	                gertrude: [0, -0.25]
	            },
	            neutral: {
	                gertrude: [0, 0.1]
	            },
	            suspicious: {
	                gertrude: [-0.2, 0]
	            },
	            angry: {
	                gertrude: [-0.3, 0]
	            }
	        },
	        gov: {
	            excited: {
	                gertrude: [0, 0.05]
	            },
	            confused: {
	                gertrude: [0, 0]
	            },
	            neutral: {
	                gertrude: [0.05, 0]
	            },
	            suspicious: {
	                gertrude: [-0.1, 0]
	            },
	            angry: {
	                gertrude: [0, -0.1]
	            }
	        },
	        occult: {
	            excited: {
	                gertrude: [-0.1, 0]
	            },
	            confused: {
	                gertrude: [0.05, 0]
	            },
	            neutral: {
	                gertrude: [0, -0.1]
	            },
	            suspicious: {
	                gertrude: [0, 0.05]
	            },
	            angry: {
	                gertrude: [0, -0.1]
	            }
	        },
	        travel: {
	            excited: {
	                gertrude: [0.05, 0]
	            },
	            confused: {
	                gertrude: [0, 0.05]
	            },
	            neutral: {
	                gertrude: [-0.1, 0]
	            },
	            suspicious: {
	                gertrude: [0, -0.1]
	            },
	            angry: {
	                gertrude: [0, 0]
	            }
	        }
	}
    }
}
