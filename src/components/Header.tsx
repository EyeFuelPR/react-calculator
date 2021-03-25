import React from 'react';

interface IProps {
    title: string;
    currency: string;
    onEstimateToggle: () => void;
}

export class Header extends React.PureComponent<IProps> {
    public render() {
        return (
            <div className='navbar navbar-dark bg-dark shadow-sm'>
                <div className='container d-flex justify-content-between'>
                    <div className='navbar-brand d-flex align-items-center'>
                        <div className='d-flex justify-content-between'>
                            <div className='d-none d-sm-block'>{ this.props.title }</div>
                            <div className='d-block d-sm-none' style={{ width: 'calc(100vw - 120px)' }}>Calculator</div>
                            <button type='button' className='btn btn-outline-light d-block d-sm-none btn-sm' onClick={this.props.onEstimateToggle}>Total { this.props.currency }</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}