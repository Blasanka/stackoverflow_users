import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ borderTop: '3px solid yellow' }}>
            {props.children}
        </div>
    );
};

export default Scroll;