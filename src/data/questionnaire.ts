export interface IRange {
    min: number;
    max: number;
}

export interface IOption {
    title: string;
    range: IRange | string;
    default?: boolean;
}

export interface IQuestion {
    questionNumber: number;
    hint: string;
    title: string;
    pseudoTitle: string;
    options: IOption[];
}

export interface ISection {
    title: string;
    questions: IQuestion[];
}

export interface ITab {
    title: string;
    sections: ISection[];
}

export interface IQuestionnaire {
    currency: string;
    title: string;
    estimatorTitle: string;
    tabs: ITab[];
}

export const questionnaire: IQuestionnaire = {
    currency: '$',
    title: 'Video Production Cost Calculator',
    estimatorTitle: 'Video Production Cost Range',
    tabs: [{
        title: 'Low-Cost',
        sections: [{
            title: 'Pre-Production',
            questions: [{
                questionNumber: 1,
                hint: `Pre-production is the most imporant phase of video production. If you don't have the right concept, script and storyboard in place it doesn't matter how well you film and edit your project. 'Creative' is never the goal. 'Creative' is a tool you use to engage your audience and ultimately achieve your objective. You start the production process by developing an idea or concept that helps you achieve your objective. You then build a script and you build a storyboard to explain what happens throughout the video. What are the important elements, situations, actions, text, animations, conversations, special effects, etc. that happen during the video? All of this should be outlined in detail in the storyboard. The storyboard is where you validate your idea, your script and everything you plan on showing in the video with your customer before you start production.`,
                title: 'Do you require a concept, script and storyboard?',
                pseudoTitle: 'Concept or Storyboard',
                options: [{
                    default: true,
                    title: 'We will supply the concept and script',
                    range: {
                        max: 0,
                        min: 0,
                    }
                }, {
                    title: 'We need a concept only',
                    range: {
                        max: 500,
                        min: 100,
                    }
                }, {
                    title: 'We need a concept and script',
                    range: {
                        max: 700,
                        min: 200,
                    }
                }, {
                    title: 'We need a concept and storyboard',
                    range: {
                        max: 1000,
                        min: 300,
                    }
                }]
            }, {
                questionNumber: 2,
                hint: `Pre-production is the most imporant phase of video production. If you don't have the right concept, script and storyboard in place it doesn't matter how well you film and edit your project. 'Creative' is never the goal. 'Creative' is a tool you use to engage your audience and ultimately achieve your objective. You start the production process by developing an idea or concept that helps you achieve your objective. You then build a script and you build a storyboard to explain what happens throughout the video. What are the important elements, situations, actions, text, animations, conversations, special effects, etc. that happen during the video? All of this should be outlined in detail in the storyboard. The storyboard is where you validate your idea, your script and everything you plan on showing in the video with your customer before you start production.`,
                title: 'Who will handle the project scheduling and the admin?',
                pseudoTitle: 'Project Management',
                options: [{
                    default: true,
                    title: 'We will handle all schedulintg and admin',
                    range: {
                        max: 0,
                        min: 0,
                    }
                }, {
                    title: 'We will share admin and scheduling with production company',
                    range: {
                        max: 350,
                        min: 150,
                    }
                }, {
                    title: 'Production company to perform basic scheduling tasks',
                    range: {
                        max: 400,
                        min: 200,
                    }
                }, {
                    title: 'Production company to perform all scheduling and admin',
                    range: {
                        max: 500,
                        min: 300,
                    }
                }]
            }]
        }, {
            title: 'Production',
            questions: [{
                questionNumber: 3,
                hint: 'How many people do you need to shoot your video? What camera, lighting and audio equipment will they require? What skills and what support crew are needed to do the job right? There are two critical elements that determine the success of any shoot: The expertise of the entire crew and time. A top notch crew will perfrom miracles if they have enough time to do their jobs properly. On smaller productions time is always a factor - budgets are low and the client is often not willing to pay for the time it takes to do the job well. On larger projects budgets are often greater and their is more lattitude to bring in the best people for the job and allow them the time to do the job properly.',
                title: 'What type of film crew do you need for your shoot?',
                pseudoTitle: 'Film Crew',
                options: [{
                    title: `We don't need a camera for this video project`,
                    range: {
                        max: 0,
                        min: 0,
                    },
                }, {
                    title: 'One camera operator with camera, lights and audio',
                    range: {
                        max: 800,
                        min: 300,
                    },
                    default: true
                }, {
                    title: 'One camera operator with two cameras lights and audio',
                    range: {
                        max: 1000,
                        min: 400,
                    },
                }, {
                    title: 'Two camera operators with two cameras lights and audio',
                    range: {
                        max: 1200,
                        min: 500,
                    },
                }]
            }, {
                questionNumber: 4,
                hint: '',
                title: 'How many days of shooting are required?',
                pseudoTitle: 'Shooting Days',
                options: [{
                    title: 'Half day of shooting',
                    range: 'Half day',
                }, {
                    title: 'Full day of shooting',
                    range: '1 day',
                    default: true,
                }, {
                    title: 'Two days of shooting',
                    range: '2 days',
                }, {
                    title: 'Three days of shooting',
                    range: '3 days',
                }]
            }, {
                questionNumber: 5,
                hint: '',
                title: 'Do you need a studio or other controlled shooting space that you cannot provide?',
                pseudoTitle: 'Studio Space',
                options: [{
                    default: true,
                    title: 'We will shoot at our location',
                    range: {
                        max: 0,
                        min: 0,
                    }
                }, {
                    title: 'We will find a shooting location for free',
                    range: {
                        max: 0,
                        min: 0,
                    }
                }, {
                    title: 'We require a studio or controlled space to shoot',
                    range: {
                        max: 1000,
                        min: 200,
                    }
                }]
            }, {
                questionNumber: 6,
                hint: '',
                title: 'Do you require a teleprompter and operator?',
                pseudoTitle: 'Telepompter',
                options: [{
                    title: `No, we don't need a teleprompter`,
                    range: {
                        max: 0,
                        min: 0,
                    },
                    default: true,
                }, {
                    title: 'We need a teleprompter and operator for half day',
                    range: {
                        min: 150,
                        max: 350,
                    }
                }, {
                    title: 'We need a teleprompter and operator for full day',
                    range: {
                        min: 250,
                        max: 500,
                    }
                }, {
                    title: 'We need a teleprompter and operator for two days',
                    range: {
                        min: 400,
                        max: 800,
                    }
                }]
            }, {
                questionNumber: 7,
                hint: '',
                title: 'Do you require on-camera talent?',
                pseudoTitle: 'Talent',
                options: [{
                    title: `We don't require on-camera talent`,
                    range: {
                        min: 0,
                        max: 0,
                    },
                    default: true,
                }, {
                    title: 'We will supply all on-camera talent',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'We need a low-cost presenter',
                    range: {
                        min: 50,
                        max: 250,
                    }
                }, {
                    title: 'We need a professional Presenter',
                    range: {
                        min: 250,
                        max: 1000,
                    }
                }, {
                    title: 'We need an actor',
                    range: {
                        min: 500,
                        max: 1500,
                    }
                }]
            }, {
                questionNumber: 8,
                hint: '',
                title: 'How many days of shooting are needed for talent?',
                pseudoTitle: 'Talent Shooting Days',
                options: [{
                    title: 'Half day of shooting',
                    range: 'Half day'
                }, {
                    title: 'Full day of shooting',
                    range: '1 day',
                    default: true,
                }, {
                    title: 'Two days of shooting',
                    range: '2 days',
                }, {
                    title: 'Three days of shooting',
                    range: '3 days',
                }]
            }]
        }, {
            title: 'Post-Production',
            questions: [{
                questionNumber: 9,
                hint: '',
                title: 'How many days of editing are required?',
                pseudoTitle: 'Editing',
                options: [{
                    title: 'No editing needed, we will take care of all post-production',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'One day of editing',
                    range: {
                        min: 200,
                        max: 750,
                    },
                    default: true,
                }, {
                    title: 'Two days of editing',
                    range: {
                        min: 400,
                        max: 1500,
                    }
                }, {
                    title: 'Three days of editing',
                    range: {
                        min: 600,
                        max: 2250,
                    }
                }, {
                    title: 'Four days of editing',
                    range: {
                        min: 800,
                        max: 3000,
                    }
                }]
            }, {
                questionNumber: 10,
                hint: '',
                title: 'Is there special animation or graphics required?',
                pseudoTitle: 'Animation / Graphics',
                options: [{
                    title: 'No animation is required beyond simple graphics and text',
                    range: {
                        min: 0,
                        max: 0,
                    },
                    default: true,
                }, {
                    title: 'A half day of graphic creation / animation',
                    range: {
                        min: 100,
                        max: 400,
                    },
                }, {
                    title: 'One day of graphic creation / animation',
                    range: {
                        min: 200,
                        max: 600,
                    },
                }, {
                    title: 'Two days of graphic creation / animation',
                    range: {
                        min: 400,
                        max: 1200,
                    },
                }, {
                    title: 'Three days of graphic creation / animation',
                    range: {
                        min: 600,
                        max: 1800,
                    },
                }]
            }, {
                questionNumber: 11,
                hint: '',
                title: 'Is music required for your project?',
                pseudoTitle: 'Music',
                options: [{
                    title: 'No music is required for this project',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'A generic music track is needed',
                    range: {
                        min: 25,
                        max: 100,
                    },
                    default: true,
                }, {
                    title: 'A specific type of music is needed for this project',
                    range: {
                        min: 100,
                        max: 300,
                    }
                }]
            }, {
                questionNumber: 12,
                hint: '',
                title: 'Is voice-over required for this project?',
                pseudoTitle: 'Voice-Over',
                options: [{
                    title: 'No voice-over is need for this project',
                    range: {
                        min: 0,
                        max: 0,
                    },
                    default: true,
                }, {
                    title: 'We will supply the audio for the project',
                    range: {
                        min: 0,
                        max: 0,
                    },
                }, {
                    title: 'No voice-over is need for this project',
                    range: {
                        min: 100,
                        max: 200,
                    },
                }, {
                    title: 'Professional Voice-over talent is required',
                    range: {
                        min: 250,
                        max: 500,
                    },
                }]
            }, {
                questionNumber: 13,
                hint: '',
                title: 'Do you need stock footage or photos?',
                pseudoTitle: 'Stock photos and images',
                options: [{
                    title: 'No stock footage or photos are required',
                    range: {
                        min: 0,
                        max: 0,
                    },
                    default: true,
                }, {
                    title: 'Basic photos or stock footage is needed',
                    range: {
                        min: 50,
                        max: 200,
                    }
                }, {
                    title: 'Premium phtotos or stock footage is needed',
                    range: {
                        min: 100,
                        max: 400,
                    }
                }]
            }]
        }]
    }, {
        title: 'Mid-Range',
        sections: [{
            title: 'Pre-Production',
            questions: [{
                questionNumber: 1,
                hint: '',
                title: 'Do you have a concept and storyboard in place?',
                pseudoTitle: 'Concept and Storyboard',
                options: [{
                    title: `We're supplying the concept and the storyboard`,
                    range: {
                        min: 0,
                        max: 0,
                    },
                }, {
                    title: 'We have a concpet and need to develop a storyboard',
                    range: {
                        min: 450,
                        max: 2500,
                    },
                }, {
                    title: 'We need a concept developed and a storyboard',
                    range: {
                        min: 1000,
                        max: 5000,
                    },
                    default: true,
                }],
            }, {
                questionNumber: 2,
                hint: '',
                title: 'How much project management and scheduling is required?',
                pseudoTitle: 'Project Management',
                options: [{
                    title: 'A small amount of project management is required',
                    range: {
                        min: 250,
                        max: 750,
                    }
                }, {
                    title: 'A modest amount of project management is needed',
                    range: {
                        min: 500,
                        max: 1500,
                    },
                    default: true,
                }, {
                    title: 'A great deal of project management is required',
                    range: {
                        min: 1000,
                        max: 3000,
                    }
                }],
            }]
        }, {
            title: 'Production',
            questions: [{
                questionNumber: 3,
                hint: '',
                title: 'What type of film crew do you need for your shoot?',
                pseudoTitle: 'Film Crew',
                options: [{
                    title: `We don't need a camera crew for this video project`,
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'Two man crew - two cameras or camera and audio',
                    range: {
                        min: 2400,
                        max: 8000,
                    }
                }, {
                    title: 'Three man crew - two cameras and one audio',
                    range: {
                        min: 3600,
                        max: 10000,
                    },
                    default: true
                }, {
                    title: 'Four man crew - two cameras, one audio and director',
                    range: {
                        min: 5600,
                        max: 16000,
                    }
                }, {
                    title: 'Five man + crew - two cameras, audio, director and gaffer',
                    range: {
                        min: 6400,
                        max: 20000,
                    }
                }],
            }, {
                questionNumber: 4,
                hint: '',
                title: 'How many days of shooting are required?',
                pseudoTitle: 'Days of Shooting',
                options: [{
                    title: 'Half day of shooting',
                    range: 'Half day'
                }, {
                    title: 'Full day of shooting',
                    range: '1 day'
                }, {
                    title: 'Two days of shooting',
                    range: '2 days',
                    default: true
                }, {
                    title: 'Three days of shooting',
                    range: '3 days'
                }, {
                    title: 'Four days of shooting',
                    range: '4 days'
                }],
            }, {
                questionNumber: 5,
                hint: '',
                title: 'Do you require special production equipment?',
                pseudoTitle: 'Special Production Equipment',
                options: [{
                    title: 'No special equipment is needed',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'Some special equipment will be needed',
                    range: {
                        min: 500,
                        max: 2000,
                    },
                    default: true
                }, {
                    title: 'A lot of specialized gear is required',
                    range: {
                        min: 1000,
                        max: 5000,
                    }
                }],
            }, {
                questionNumber: 6,
                hint: '',
                title: 'Do you need a studio or other controlled shooting space that you cannot provide?',
                pseudoTitle: 'Studio',
                options: [{
                    title: 'We will provide the shooting location',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'We need a studio location to shoot in',
                    range: {
                        min: 700,
                        max: 3000,
                    },
                    default: true
                }, {
                    title: 'We will require on-location shooting for this video',
                    range: {
                        min: 500,
                        max: 5000,
                    }
                }],
            }, {
                questionNumber: 7,
                hint: '',
                title: 'Do you require a teleprompter and operator?',
                pseudoTitle: 'Teleprompter',
                options: [{
                    title: `No, we don't need a teleprompter`,
                    range: {
                        min: 0,
                        max: 0,
                    },
                    default: true
                }, {
                    title: 'We need a teleprompter and operator for half day',
                    range: {
                        min: 300,
                        max: 600,
                    }
                }, {
                    title: 'We need a teleprompter and operator for full day',
                    range: {
                        min: 800,
                        max: 1800,
                    }
                }, {
                    title: 'We need a teleprompter and operator for two days',
                    range: {
                        min: 800,
                        max: 1800,
                    }
                }, {
                    title: 'We need a teleprompter and operator for three days',
                    range: {
                        min: 1200,
                        max: 2700,
                    }
                }],
            }, {
                questionNumber: 8,
                hint: '',
                title: 'Do you require on-camera talent?',
                pseudoTitle: 'Talent',
                options: [{
                    title: 'We will supply any on-camera talent (if needed)',
                    range: {
                        min: 0,
                        max: 0,
                    },
                    default: true,
                }, {
                    title: 'We need a professional Presenter',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'We need a non-union actor',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'We need a union actor',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'We need a Celebrity',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }],
            }, {
                questionNumber: 9,
                hint: '',
                title: 'How many days of shooting is needed for talent?',
                pseudoTitle: 'Talent Shooting Days',
                options: [{
                    title: 'No shooting days are required',
                    range: 'No shooting',
                    default: true
                }, {
                    title: 'Half day of shooting',
                    range: 'Half day'
                }, {
                    title: 'Full day of shooting',
                    range: '1 day'
                }, {
                    title: 'Two days of shooting',
                    range: '2 days'
                }, {
                    title: 'Three days of shooting',
                    range: '3 days'
                }],
            }, {
                questionNumber: 10,
                hint: '',
                title: 'Do you require hair, make-up or wardrobe for talent?',
                pseudoTitle: 'Hair & Make-up',
                options: [{
                    title: 'No hair, make-up or wardrobe required',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'We require basic hair and makeup',
                    range: {
                        min: 400,
                        max: 1000
                    },
                    default: true
                }, {
                    title: 'We require professional hair and makeup',
                    range: {
                        min: 800,
                        max: 2500
                    }
                }, {
                    title: 'We require full hair, makeup and wardrobe',
                    range: {
                        min: 1000,
                        max: 4000
                    }
                }],
            }, {
                questionNumber: 11,
                hint: '',
                title: 'Location and Permission costs',
                pseudoTitle: 'Location costs',
                options: [{
                    title: 'No special costs associated with lcoation',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'Basic Location Costs',
                    range: {
                        min: 500,
                        max: 2000
                    },
                    default: true
                }, {
                    title: 'Advanced Location and Permissions needed',
                    range: {
                        min: 2000,
                        max: 5000
                    }
                }],
            }]
        }, {
            title: 'Post_Production',
            questions: [{
                questionNumber: 12,
                hint: '',
                title: 'How many days of editing are required?',
                pseudoTitle: 'Editing',
                options: [{
                    title: 'No editing, a filming-only project',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'One to two days of editing',
                    range: {
                        min: 800,
                        max: 3200
                    },
                    default: true
                }, {
                    title: 'Three to five days of editing',
                    range: {
                        min: 2400,
                        max: 8000
                    }
                }, {
                    title: 'Five to nine days of editing',
                    range: {
                        min: 4000,
                        max: 14000
                    }
                }, {
                    title: 'Ten days of editing',
                    range: {
                        min: 8000,
                        max: 20000
                    }
                }],
            }, {
                questionNumber: 13,
                hint: '',
                title: ' Is there special animation or special effects required?',
                pseudoTitle: 'Animation & Special Effects',
                options: [{
                    title: 'No animation / fx are required beyond simple graphics and text',
                    range: {
                        min: 0,
                        max: 0
                    },
                    default: true
                }, {
                    title: 'One to two days of animation / fx',
                    range: {
                        min: 800,
                        max: 3200
                    }
                }, {
                    title: 'Three to five days of animation / fx',
                    range: {
                        min: 2400,
                        max: 8000
                    }
                }, {
                    title: 'Five to nine days of animation / fx',
                    range: {
                        min: 4000,
                        max: 14000
                    }
                }, {
                    title: 'Ten days or more of animation / fx',
                    range: {
                        min: 8000,
                        max: 20000
                    }
                }],
            }, {
                questionNumber: 14,
                hint: '',
                title: 'Is music required for your project?',
                pseudoTitle: 'Music',
                options: [{
                    title: 'No music is required for this project',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'A sound track is required',
                    range: {
                        min: 200,
                        max: 800
                    },
                    default: true
                }, {
                    title: 'Specialized production music is required',
                    range: {
                        min: 500,
                        max: 1500
                    }
                }, {
                    title: 'Custom music is required',
                    range: {
                        min: 2000,
                        max: 10000
                    }
                }],
            }, {
                questionNumber: 15,
                hint: '',
                title: 'Is voice-over required for this project?',
                pseudoTitle: 'Voice-Over',
                options: [{
                    title: 'No voice-over is need for this project',
                    range: {
                        min: 0,
                        max: 0
                    },
                    default: true
                }, {
                    title: 'We will supply the audio for voice-over',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'We will supply the voice-over talent',
                    range: {
                        min: 200,
                        max: 800
                    }
                }, {
                    title: 'Professional voice-over talent is required',
                    range: {
                        min: 400,
                        max: 1000
                    }
                }, {
                    title: 'Celebrity Voice-over talent is required',
                    range: {
                        min: 1000,
                        max: 10000
                    }
                }],
            }, {
                questionNumber: 16,
                hint: '',
                title: 'Is specialized audio work required?',
                pseudoTitle: 'Audio and Foley',
                options: [{
                    title: 'No specialized audio work is needed',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'Some audio work is required',
                    range: {
                        min: 500,
                        max: 1500
                    },
                    default: true
                }, {
                    title: 'A moderate amount of audio work is required',
                    range: {
                        min: 1000,
                        max: 25000
                    }
                }, {
                    title: 'A great deal of audio work is required',
                    range: {
                        min: 2000,
                        max: 5000
                    }
                }],
            }, {
                questionNumber: 17,
                hint: '',
                title: 'Stock footage, photos, illustrations and graphics?',
                pseudoTitle: 'Stock Images and Footage',
                options: [{
                    title: 'No stock footage or photos are required',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'Basic photos and /or stock footage is needed',
                    range: {
                        min: 200,
                        max: 1000
                    },
                    default: true
                }, {
                    title: 'Premium phtotos or stock footage is needed',
                    range: {
                        min: 500,
                        max: 5000
                    }
                }],
            }]
        }]
    }, {
        title: 'High-End',
        sections: [],
    }]
}