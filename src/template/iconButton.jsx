import React from 'react';
import IfComp from './ifComp'

function iconButton(props) {
        return (
            <IfComp test={!props.hide}>
                <button className={'btn btn-'+ props.style}
                    onClick={props.onClick}
                    ><i className={"fa fa-"+ props.icon}></i>
                </button>
            </IfComp>
        );
}

export default iconButton;