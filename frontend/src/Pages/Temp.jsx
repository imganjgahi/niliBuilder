import React from 'react';
import { useParams } from 'react-router';

const Temp = (props) => {
    let {tempId} = useParams()
    return ( 
        <p>
           Temp: {tempId}
        </p>
     );
}
 
export default Temp;