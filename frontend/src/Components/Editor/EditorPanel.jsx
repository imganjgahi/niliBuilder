import React from 'react';

const EditorPanel = (props) => {
    return ( 
        <div className="editorPanel">
            <div className="panelHeader">
                <span>Panel</span>
                <span onClick={props.onClose}>X</span>
            </div>
            {JSON.stringify(props.el.style)}
        </div>
     );
}
 
export default EditorPanel;