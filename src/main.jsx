import React from 'react';
import Board from './components/board'

export default class Main extends React.Component {
    render() {
        return (
            <div id='tictactoe-board'>
                <Board />
            </div>
        );
    }
}