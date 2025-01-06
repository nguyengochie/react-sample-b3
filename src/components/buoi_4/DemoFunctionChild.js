import React from 'react'

const DemoFunctionChild = (props) => {
    const { children, item } = props;
    console.log("children", children);

    return (children())
}

export default DemoFunctionChild