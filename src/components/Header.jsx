import React from 'react';
import Stats from './stats';
import Stopwatch from './stopwatch';

function Header (props) {
    return (
        <header>
            <Stats todos={props.todos}/>
            <h1>{props.title}</h1>
            <Stopwatch/>
        </header>
    );
}

Header.propTypes= {
    title: React.PropTypes.string.isRequired,
    todos: React.PropTypes.array.isRequired
};

export default Header;