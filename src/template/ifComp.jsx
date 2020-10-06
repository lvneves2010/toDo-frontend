import React from 'react';

function ifComp(props) {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}

export default ifComp;