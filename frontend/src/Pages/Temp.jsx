import React, { useState } from 'react';
import { useParams } from 'react-router';
import EditorPanel from '../Components/Editor/EditorPanel';
import RenderEngin from '../Components/Editor/RenderEngine';
import { TEMPLATES } from '../Data/Templates';

const Temp = (props) => {
    let {tempId} = useParams()
    const [templates, setTemplates] = useState(TEMPLATES)
    const [showPanel, setPanelStatus] = useState(false);
    const [targetElement, setTargetElement] = useState(null);

    function closePanel() {
        setTargetElement(null);
        setPanelStatus(false);
    }

    function selectedElementHandler(el) {
        if(showPanel) return;
        setTargetElement(el);
        setPanelStatus(true);
    }

    function returnUpdatedElement(el, updatedEl) {

        if(el.id === updatedEl.id){
            return updatedEl
        }

        if(el.children) {
            el.children = el.children.map(item => returnUpdatedElement(item, updatedEl))
        }

        return el
    }
    function updateTemplates (updatedElement) {
        return templates.map(item => returnUpdatedElement(item, updatedElement))
    }
    function styleChangeHandler(value) {
        const updatedElement = {
            ...targetElement,
            style: value
        }
        setTemplates(updateTemplates(updatedElement))
        console.log("styleChangeHandler: ", updatedElement)
    }
    if(!templates) {
        return <p> LOADING ...</p>
    }
    return ( 
        <>
        <RenderEngin 
        template={templates.filter(x => x.id === tempId)[0]} 
        onSelectElement={selectedElementHandler} />


        {showPanel && targetElement && <EditorPanel 
        onClose={closePanel} 
        onStyleChange={styleChangeHandler}
        el={targetElement} /> }
        </>
     );
}
 
export default Temp;