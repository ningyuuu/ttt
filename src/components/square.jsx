import React from 'react';

export default class Square extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const setValue = value => {
            switch (value) {
                case 0:
                    return ' ';
                case 1:
                    return 'X';
                case 2:
                    return 'O';
            }
        }

        // console.log(setValue(this.props.value));
        return (<span className='square' onClick={this.props.click}>
            {setValue(this.props.value)}
        </span>);
    }
}