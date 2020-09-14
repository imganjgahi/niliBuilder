import React from 'react';
import { Link } from 'react-router-dom';

const Templates = () => {
    return ( 
        <div className="templatesPage">
            <div className="temp">
                <Link to="/temp/1" >temp 1</Link>
            </div>
            <div className="temp">
                <Link to="/temp/2" >temp 2</Link>
            </div>
            <div className="temp">
                <Link to="/temp/3" >temp 3</Link>
            </div>
            <div className="temp">
                <Link to="/temp/4" >temp 4</Link>
            </div>
        </div>
     );
}
 
export default Templates;