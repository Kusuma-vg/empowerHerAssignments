import React, {useState} from "react";

const AddFleetForm=({addFleet})=>{
    const [vehicle,setVehicle]=useState("");
    const [driver,setDriver]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!vehicle.trim() || !driver.trim()){
            alert("All fields reequied")
            return;
        }
        addFleet({
            id:Date.now(),
            vehicle:vehicle.trim(),
            driver:driver.trim(),
        });

        setVehicle("");
        setDriver("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Vehicle Name" value={vehicle} onChange={(e)=> setVehicle(e.target.value)}/>
            <input placeholder="Driver Name" value={driver} onChange={(e)=> setDriver(e.target.value)}/>
            <button type="submit">Add Fleet</button>
        </form>
    );
};

export default AddFleetForm;