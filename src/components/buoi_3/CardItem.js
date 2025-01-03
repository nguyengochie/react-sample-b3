import React from 'react'

const CardItem = (props) => {
    const { title, icon, description } = props;
    return (
        <li>
            <div>
                <p>{icon}</p>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </li>
    )
}
export default CardItem