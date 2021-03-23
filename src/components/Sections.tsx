import React from 'react';

import { ISection } from '../data/questionnaire';
import { Questions } from './Questions';

interface IProps {
    sections: ISection[];
}

export class Sections extends React.PureComponent<IProps> {
    public render() {
        const { sections } = this.props;
        return sections.map((section, index) => (
            <div key={index}>
                <strong>{ section.title }</strong>
                <Questions questions={section.questions}/>
            </div>
        ))
    }
}