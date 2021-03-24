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
            <div key={index} style={{ padding: 20, border: '1px solid #e5e5e5', borderTop: 0 }}>
                <h4>{ section.title }</h4>
                <Questions questions={section.questions} sectionID={index}/>
            </div>
        ))
    }
}