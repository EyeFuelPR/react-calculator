import React from 'react';

import { IOption } from '../data/questionnaire';

interface IProps {
    options: IOption[];
}

export class Options extends React.PureComponent<IProps> {
    public render() {
        const { options } = this.props;
        return options.map((option, index) => (
            <div key={index}>{ option.title }</div>
        ))
    }
}