import React from 'react'

export default function StylePanel(props) {
    return (
        <div>
            Width: {props.elStyle.width} <br/>
            Height: {props.elStyle.height} <br/>
            Background color: {props.elStyle.backgroundColor} <br/>
            Background image: {props.elStyle.backgroundImage} <br/>
            margin: {props.elStyle.margin} <br/>
            padding: {props.elStyle.padding} <br/>
            color: {props.elStyle.color} <br/>
            {JSON.stringify(props.elStyle)}
        </div>
    )
}
