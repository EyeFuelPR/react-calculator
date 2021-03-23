import React from 'react';
import { Nav } from 'react-bootstrap';

import { ITab } from '../data/questionnaire';

interface IProps {
    tabs: ITab[];
    onTabClicked: (tabIndex: number) => void;
}

export class Tabs extends React.PureComponent<IProps> {
    public render() {
        const { tabs } = this.props;
        return (
            <Nav fill variant="tabs">
                {
                    tabs.map((tab, index) => {
                        return (
                            <Nav.Item onClick={() => this.props.onTabClicked(index)} key={index}>
                                { tab.title }
                            </Nav.Item>
                        )
                    })
                }
            </Nav>
        );
    }
}