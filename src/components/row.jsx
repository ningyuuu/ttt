import React from 'react';
import Square from './square';

export default class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const row = [];
        let key = 0;

        for (let square of this.props.row) {
            row.push(<Square value={square} 
                             key={key}
                             click={this.props.click(key)}
                             />);
            key++;
        } 
        return(
            <div className='row'>
                {row}
            </div>
        );
    }
}