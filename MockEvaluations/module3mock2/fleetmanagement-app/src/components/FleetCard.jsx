import React from "react";
const FleetCard =({fleet,onDelete,onUpdate})=>{
    return(
        <div style={{border:"1px solid gray", padding:"10px"}}>
            <h4>{fleet.vehicle}</h4>
            <p>Driver: {fleet.driver}</p>
        <button onClick={()=>onUpdate(fleet.id)}>UpdateDriver</button>
        <button onClick={()=>onDelete(fleet.id)}>Delete</button>
        </div>
    );
};

export default React.memo(FleetCard);