import React from 'react';

function Button(props) {
    return(
        <button className= {props.className} onClick={props.onClick} {...props}>
            {props.icon ?
                <i className="material-icons">{props.icon}</i>
                :
                props.children
            }

        </button>
    );
}

Button.PropTypes = {
    icon: React.PropTypes.string,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    children: React.PropTypes.node
};

export default Button;

