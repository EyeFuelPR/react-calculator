import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { IQuestion } from '../data/questionnaire';
import { EstimatorContext } from './Contexts';
import { Options } from './Options';

interface IProps {
    questions: IQuestion[],
    sectionID: number;
}

interface IState {
    expandedIndex: number;
}

export class Questions extends React.PureComponent<IProps, IState> {
    static contextType = EstimatorContext;

    public state: IState = {
        expandedIndex: -1,
    }

    public render() {
        const { questions } = this.props;
        const { expandedIndex } = this.state;
        return questions.map((question, index) => {
            const isCollapsed = index !== expandedIndex;
            return (
                <div key={index} style={{ marginBottom: isCollapsed ? 20 : 40, border: '1px solid #e5e5e5', padding: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className='font-weight-bold' style={{ cursor: 'pointer', marginBottom: 0 }} onClick={() => this.onToggle(index)}>{ question.title }</p>
                        <OverlayTrigger
                            key='right'
                            placement='right'
                            overlay={
                                <Tooltip id={'tooltip-right'}>
                                    { question.hint }
                                </Tooltip>
                            }
                        >
                            <span style={{ cursor: 'pointer' }}>?</span>
                        </OverlayTrigger>
                    </div>
                    <div style={{ display: isCollapsed ? 'none' : 'block' }}>
                        <Options options={question.options} onOptionSelected={(selectedOptionIndex) => this.onOptionSelected(index, selectedOptionIndex)}/> 
                    </div>
                </div>
            )
        })
    }

    private onToggle = (index: number) => {
        this.setState({
            expandedIndex: index,
        }, () => {
            const defaultAnswerIndex = this.props.questions[index].options.findIndex((option) => option.default);
            this.onDefaultOptionSelected(index, defaultAnswerIndex);
        })
    }

    private onOptionSelected = (questionIndex: number, selectedOptionIndex: number) => {
        const { onChoiceSelected } = this.context;
        onChoiceSelected(this.props.sectionID, questionIndex, selectedOptionIndex);
    }

    private onDefaultOptionSelected = (questionIndex: number, selectedOptionIndex: number) => {
        const { onChoiceSelected } = this.context;
        onChoiceSelected(this.props.sectionID, questionIndex, selectedOptionIndex, true);
    }
}