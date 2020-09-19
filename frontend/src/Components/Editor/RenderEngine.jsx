import React from 'react';

const RenderEngin = (props) => {
    function getElemnt(el, index = "0") {
        switch(el.type) {
            case "div":
                return <div key={index} {...el} onClick={(e) => {
                    e.stopPropagation()
                    props.onSelectElement(el)
                }}>
                    {el.children?.map((x, i )=> getElemnt(x, i))}
                </div>;
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
                return null
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