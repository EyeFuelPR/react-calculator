import React from 'react';

import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { questionnaire } from './data/questionnaire';

export class App extends React.PureComponent {
    public render() {
        const { title, tabs } = questionnaire;
        return (
            <>
                <Header title={title}/>
                <Tabs tabs={tabs}/>
            </>
        );
    }
}