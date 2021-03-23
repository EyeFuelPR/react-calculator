export interface IRange {
    min: number;
    max: number;
}

export interface IOption {
    title: string;
    range: IRange;
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
        }]
    }, {
        title: 'Mid-Range',
        sections: []
    }, {
        title: 'High-End',
        sections: [],
    }]
}