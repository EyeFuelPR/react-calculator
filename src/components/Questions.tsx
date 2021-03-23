import React from 'react';

import { IQuestion } from '../data/questionnaire';
import { Options } from './Options';

interface IProps {
    questions: IQuestion[]
}

export class Questions extends React.PureComponent<IProps> {
    public render() {
        const { questions } = this.props;
        return questions.map((question, index) => (
            <div key={index} style={{ marginBottom: 40 }}>
                <strong>{ question.title }</strong>
                <Options options={question.options}/> 
            </div>
        ))
    }
}