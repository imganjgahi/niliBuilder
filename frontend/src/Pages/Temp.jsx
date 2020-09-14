import React, { useState } from 'react';
import { useParams } from 'react-router';
import EditorPanel from '../Components/Editor/EditorPanel';
import RenderEngin from '../Components/Editor/RenderEngine';
import { TEMPLATES } from '../Data/Templates';

const Temp = (props) => {
    let {tempId} = useParams()
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
    return ( 
        <>
        <RenderEngin 
        template={TEMPLATES.filter(x => x.id === tempId)[0]} 
        onSelectElement={selectedElementHandler} />
        {showPanel && targetElement && <EditorPanel 
        onClose={closePanel} 
        el={targetElement} /> }
        </>
     );
}
 
export default Temp;