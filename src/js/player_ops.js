var PLAYER_OPS = {
    operations: {
	food: [{  // what's selected
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
	      },
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
	        },
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
	        },
	        gov: {
	            excited: {
	                hamlet: [-0.1, 0]
	            },
	            confused: {
	                hamlet: [0, -0.1]
	            },
	            neutral: {
	                hamlet: [0, 0.1]
	            },
	            suspicious: {
	                hamlet: [0.1, 0]
	            },
	            angry: {
	                hamlet: [0, 0.1]
	            }
	        },
	        occult: {
	            excited: {
	                hamlet: [0.1, 0]
	            },
	            confused: {
	                hamlet: [0, 0.1]
	            },
	            neutral: {
	                hamlet: [0, -0.1]
	            },
	            suspicious: {
	                hamlet: [0, -0.1]
	            },
	            angry: {
	                hamlet: [-0.1, 0]
	            }
	        },
	        travel: {
	            excited: {
	                hamlet: [0, -0.1]
	            },
	            confused: {
	                hamlet: [0.1, 0]
	            },
	            neutral: {
	                hamlet: [0.1, 0]
	            },
	            suspicious: {
	                hamlet: [0, 0.1]
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
	              claudius: [0.1, 0]
	          },
	          neutral: {
	              claudius: [0.1, 0]
	          },
	          suspicious: {
	              claudius: [0, 0.1]
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
	                claudius: [0.1, 0]
	            },
	            suspicious: {
	                claudius: [0, -0.1]
	            },
	            angry: {
	                claudius: [0, 0.1]
	            }
	        },
	        food: {
	            excited: {
	                claudius: [-0.1, 0]
	            },
	            confused: {
	                claudius: [0.1, 0]
	            },
	            neutral: {
	                claudius: [0, 0.1]
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
	                claudius: [0.1, 0]
	            },
	            confused: {
	                claudius: [-0.1, 0]
	            },
	            neutral: {
	                claudius: [0, -0.1]
	            },
	            suspicious: {
	                claudius: [-0.1, 0]
	            },
	            angry: {
	                claudius: [0, 0.1]
	            }
	        },
	        occult: {
	            excited: {
	                claudius: [-0.1, 0]
	            },
	            confused: {
	                claudius: [0, 0.1]
	            },
	            neutral: {
	                claudius: [0, -0.1]
	            },
	            suspicious: {
	                claudius: [0.1, 0]
	            },
	            angry: {
	                claudius: [0.1, 0]
	            }
	        },
	        travel: {
	            excited: {
	                claudius: [0, 0.1]
	            },
	            confused: {
	                claudius: [0, -0.1]
	            },
	            neutral: {
	                claudius: [-0.1, 0]
	            },
	            suspicious: {
	                claudius: [-0.1, 0]
	            },
	            angry: {
	                claudius: [0.1, 0]
	            }
	        }
	},
	ophelia: {
	      ent: { 
	          excited: {
        	    ophelia: [0, -0.1]
	          },
	          confused: {
	              ophelia: [0.1, 0]
	          },
	          neutral: {
	              ophelia: [-0.1, 0]
	          },
	          suspicious: {
	              ophelia: [0, -0.1]
	          },
	          angry: {
	              ophelia: [0, 0.1]
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
	                ophelia: [0, -0.1]
	            },
	            suspicious: {
	                ophelia: [-0.1, 0]
	            },
	            angry: {
	                ophelia: [0, -0.1]
	            }
	        },
	        food: {
	            excited: {
	                ophelia: [0, 0.1]
	            },
	            confused: {
	                ophelia: [-0.1, 0]
	            },
	            neutral: {
	                ophelia: [0.1, 0]
	            },
	            suspicious: {
	                ophelia: [0, 0.1]
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
	                ophelia: [0, 0.1]
	            },
	            neutral: {
	                ophelia: [0.1, 0]
	            },
	            suspicious: {
	                ophelia: [0, -0.1]
	            },
	            angry: {
	                ophelia: [-0.1, 0]
	            }
	        },
	        occult: {
	            excited: {
	                ophelia: [0, 0.1]
	            },
	            confused: {
	                ophelia: [0.1, 0]
	            },
	            neutral: {
	                ophelia: [0, 0.1]
	            },
	            suspicious: {
	                ophelia: [-0.1, 0]
	            },
	            angry: {
	                ophelia: [0, -0.1]
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
	                ophelia: [0, 0.1]
	            },
	            suspicious: {
	                ophelia: [0.1, 0]
	            },
	            angry: {
	                ophelia: [0.1, 0]
	            }
	        }
	},
	gertrude: {
	      ent: { 
	          excited: {
        	    gertrude: [0, -0.1]
	          },
	          confused: {
	              gertrude: [0, 0.1]
	          },
	          neutral: {
	              gertrude: [-0.1, 0]
	          },
	          suspicious: {
	              gertrude: [0.1, 0]
	          },
	          angry: {
	              gertrude: [0, 0.1]
	          }
	      },
	      family: {
	            excited: {
	                gertrude: [0, 0.1]
	            },
	            confused: {
	                gertrude: [-0.1, 0]
	            },
	            neutral: {
	                gertrude: [0, -0.1]
	            },
	            suspicious: {
	                gertrude: [0.1, 0]
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
	                gertrude: [0, -0.1]
	            },
	            neutral: {
	                gertrude: [0, 0.1]
	            },
	            suspicious: {
	                gertrude: [-0.1, 0]
	            },
	            angry: {
	                gertrude: [-0.1, 0]
	            }
	        },
	        gov: {
	            excited: {
	                gertrude: [0, 0.1]
	            },
	            confused: {
	                gertrude: [0.1, 0]
	            },
	            neutral: {
	                gertrude: [0.1, 0]
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
	                gertrude: [0.1, 0]
	            },
	            neutral: {
	                gertrude: [0, -0.1]
	            },
	            suspicious: {
	                gertrude: [0, 0.1]
	            },
	            angry: {
	                gertrude: [0.1, 0]
	            }
	        },
	        travel: {
	            excited: {
	                gertrude: [0.1, 0]
	            },
	            confused: {
	                gertrude: [0, 0.1]
	            },
	            neutral: {
	                gertrude: [-0.1, 0]
	            },
	            suspicious: {
	                gertrude: [0, -0.1]
	            },
	            angry: {
	                gertrude: [0, -0.1]
	            }
	        }
	}
    }
}
