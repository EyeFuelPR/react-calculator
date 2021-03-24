import React from 'react';

import { EstimatorContext } from './components/Contexts';
import { Estimator, ISelectedService } from './components/Estimator';
import { Header } from './components/Header';
import { Sections } from './components/Sections';
import { Tabs } from './components/Tabs';
import { questionnaire } from './data/questionnaire';

interface IState {
    currentTab: number;
    selectedServices: IObject<ISelectedService>;
}

export class App extends React.PureComponent<{}, IState> {
    public state: IState = {
        currentTab: 0,
        selectedServices: {}
    }

    public render() {
        const { currency, title, tabs, estimatorTitle } = questionnaire;
        const { currentTab, selectedServices } = this.state;
        return (
            <EstimatorContext.Provider
                value={{
                    onChoiceSelected: (sectionID: number, questionID: number, choiceID: number, isDefault: boolean = false) => this.updateCost(sectionID, questionID, choiceID, isDefault)
                }}
            >
                <div className='row'>
                    <div className='col'>
                        <Header title={title}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-8'>
                        <Tabs
                            tabs={tabs}
                            activeTabIndex={currentTab}
                            onTabClicked={this.onTabClick}
                        />
                        <div style={{ height: 'calc(100vh - 98px)', overflowY: 'scroll' }}>
                            <Sections sections={tabs[currentTab].sections}/>
                        </div>
                    </div>
                    <div className='col-4'>
                        <Estimator
                            title={estimatorTitle}
                            currency={currency}
                            selectedServices={selectedServices}
                        />
                    </div>
                </div>
            </EstimatorContext.Provider>
        );
    }

    private onTabClick = (tabIndex: number) => {
        this.setState({
            currentTab: tabIndex,
        })
    }

    private updateCost = (sectionID: number, questionID: number, choiceID: number, isDefault: boolean) => {
        const { selectedServices, currentTab } = this.state;
        const index = Object.keys(selectedServices).length;
        const selectedQuestion = questionnaire.tabs[currentTab].sections[sectionID].questions[questionID]
        const selectedChoice = selectedQuestion.options[choiceID];
        const { pseudoTitle } = selectedQuestion;
        const { range } = selectedChoice;
        if (selectedServices[pseudoTitle]) {
            this.setState({
                selectedServices: {
                    ...selectedServices,
                    [pseudoTitle]: {
                        ...selectedServices[pseudoTitle],
                        title: pseudoTitle,
                        range,
                    }
                }
            });
        } else {
            this.setState({
                selectedServices: {
                    ...selectedServices,
                    [pseudoTitle]: {
                        order: index,
                        title: pseudoTitle,
                        range,
                    }
                }
            });
        }
    }
}