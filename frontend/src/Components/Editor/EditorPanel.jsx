import React from 'react';
import { useDragging } from '../Utils/Dragable';
import StylePanel from './Tools/StylePanel';

const EditorPanel = (props) => {
    const [ref, x, y, isDragging] = useDragging(450, 150);
    return ( 
        <div className="editorPanel"
        ref={ref}
        style={{
            left: x,
            top: y,
            opacity: isDragging ? 0.6 : 1
        }}
        >
            <div className="panelHeader dragable">
                <span>Panel</span>
                <span onClick={props.onClose}>X</span>
            </div>
            <StylePanel elStyle={props.el.style} onChange= {(value)=> props.onStyleChange(value)}/>
        </div>
     );
}
 
export default EditorPanel;