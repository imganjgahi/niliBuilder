import React from 'react';

const RenderEngin = (props) => {

    console.log("TEMP: ", props.template);
    function getElemnt(el, index = "0") {
        switch(el.type) {
            case "h1":
                return <h1 key={index} {...el} onClick={(e) => {
                    e.stopPropagation()
                    props.onSelectElement(el)
                }}>
                    {el.content}
                </h1>;
            case "p":
                return <p key={index} {...el} onClick={(e) => {
                    e.stopPropagation()
                    props.onSelectElement(el)
                }}>
                    {el.content}
                </p>;

            default:
            return <div key={index} {...el} onClick={(e) => {
                e.stopPropagation()
                props.onSelectElement(el)
            }}>
                {el.children?.map((x, i )=> getElemnt(x, i))}
            </div>
        }
    }
    if(!props.template) {
        return <p>Loading ...</p>
    }
    return ( 
        <div className="template">
            {
                getElemnt(props.template)
            }
        </div>
     );
}
 
export default RenderEngin;