import React, { useEffect, useState } from 'react'

export default function StylePanel(props) {
    const [styleObject, setStyleObject] = useState(null);
    useEffect(() => {

        setStyleObject(props.elStyle)
    }, []);


    useEffect(() => {
        props.onChange(styleObject)
    }, [styleObject]);

    function onChangeHandler(filedNAme, value) {
        setStyleObject({
            ...styleObject,
            [filedNAme]: value
        })
    }
    if(!styleObject) {
        return <p> LOADING ... </p>
    }
    return (
        <div>
            Width: <input type="text" onChange={(e) => {
                onChangeHandler("width", e.target.value + "px")
            }}/> <br/>
            Height: {styleObject.height} <br/>
            Background color: <input type="text" onChange={(e) => {
                onChangeHandler("backgroundColor", e.target.value)
            }}/> <br/>
            Background image: {styleObject.backgroundImage} <br/>
            margin: {styleObject.margin} <br/>
            padding: {styleObject.padding} <br/>
            color: {styleObject.color} <br/>
            {JSON.stringify(styleObject)}
        </div>
    )
}
