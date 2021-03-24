import React from 'react';

export interface IEstimatorContext {
    onChoiceSelected: (sectionID: number, questionID: number, choiceID: number, isDefault?: boolean) => void;
}

export const EstimatorContext = React.createContext<IEstimatorContext>({
    onChoiceSelected: () => null,
});