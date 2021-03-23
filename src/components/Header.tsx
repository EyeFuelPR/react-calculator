import React from 'react';

interface IProps {
    title: string;
}

export class Header extends React.PureComponent<IProps> {
    public render() {
        return (
            <div className='navbar navbar-dark bg-dark shadow-sm'>
                <div className='container d-flex justify-content-between'>
                    <div className='navbar-brand d-flex align-items-center'>
                        { this.props.title }
                    </div>
                </div>
            </div>
        );
    }
}