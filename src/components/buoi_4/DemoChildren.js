import React from 'react'

const DemoChildren = (props) => {
    console.log("props", props);

    const { children } = props;

    return (
        <div>{children}</div>
    )
}

export default DemoChildren