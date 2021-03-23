import React from 'react';

import { Header } from './components/Header';
import { Sections } from './components/Sections';
import { Tabs } from './components/Tabs';
import { questionnaire } from './data/questionnaire';

interface IState {
    currentTab: number;
}

export class App extends React.PureComponent<{}, IState> {
    public state: IState = {
        currentTab: 0,
    }

    public render() {
        const { title, tabs } = questionnaire;
        const { currentTab } = this.state;
        return (
            <>
                <Header title={title}/>
                <Tabs tabs={tabs} onTabClicked={this.onTabClick}/>
                <Sections sections={tabs[currentTab].sections}/>
            </>
        );
    }

    private onTabClick = (tabIndex: number) => {
        this.setState({
            currentTab: tabIndex,
        })
    }
}