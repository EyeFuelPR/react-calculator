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
    hint: string;
    title: string;
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
    tabs: ITab[];
}

export const questionnaire: IQuestionnaire = {
    currency: '$',
    title: 'Video Production Cost Calculator',
    tabs: [{
        title: 'Low-Cost',
        sections: [{
            title: 'Pre-Production',
            questions: [{
                hint: `Pre-production is the most imporant phase of video production. If you don't have the right concept, script and storyboard in place it doesn't matter how well you film and edit your project. 'Creative' is never the goal. 'Creative' is a tool you use to engage your audience and ultimately achieve your objective. You start the production process by developing an idea or concept that helps you achieve your objective. You then build a script and you build a storyboard to explain what happens throughout the video. What are the important elements, situations, actions, text, animations, conversations, special effects, etc. that happen during the video? All of this should be outlined in detail in the storyboard. The storyboard is where you validate your idea, your script and everything you plan on showing in the video with your customer before you start production.`,
                title: '1. Do you require a concept, script and storyboard?',
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
                hint: `Pre-production is the most imporant phase of video production. If you don't have the right concept, script and storyboard in place it doesn't matter how well you film and edit your project. 'Creative' is never the goal. 'Creative' is a tool you use to engage your audience and ultimately achieve your objective. You start the production process by developing an idea or concept that helps you achieve your objective. You then build a script and you build a storyboard to explain what happens throughout the video. What are the important elements, situations, actions, text, animations, conversations, special effects, etc. that happen during the video? All of this should be outlined in detail in the storyboard. The storyboard is where you validate your idea, your script and everything you plan on showing in the video with your customer before you start production.`,
                title: '2. Who will handle the project scheduling and the admin?',
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
                hint: 'How many people do you need to shoot your video? What camera, lighting and audio equipment will they require? What skills and what support crew are needed to do the job right? There are two critical elements that determine the success of any shoot: The expertise of the entire crew and time. A top notch crew will perfrom miracles if they have enough time to do their jobs properly. On smaller productions time is always a factor - budgets are low and the client is often not willing to pay for the time it takes to do the job well. On larger projects budgets are often greater and their is more lattitude to bring in the best people for the job and allow them the time to do the job properly.',
                title: '3. What type of film crew do you need for your shoot?',
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
                hint: '',
                title: '4. How many days of shooting are required?',
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
                hint: '',
                title: '5. Do you need a studio or other controlled shooting space that you cannot provide?',
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
                title: '6. Do you require a teleprompter and operator?',
                hint: '',
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
                title: '7. Do you require on-camera talent?',
                hint: '',
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
                title: '8. How many days of shooting are needed for talent?',
                hint: '',
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
                title: '9. How many days of editing are required?',
                hint: '',
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
                title: '10. Is there special animation or graphics required?',
                hint: '',
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
                title: '11. Is music required for your project?',
                hint: '',
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
                    }
                }, {
                    title: 'A specific type of music is needed for this project',
                    range: {
                        min: 100,
                        max: 300,
                    }
                }]
            }, {
                title: '12. Is voice-over required for this project?',
                hint: '',
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
                title: '13. Do you need stock footage or photos?',
                hint: '',
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
        sections: []
    }, {
        title: 'High-End',
        sections: [],
    }]
}