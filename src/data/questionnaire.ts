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