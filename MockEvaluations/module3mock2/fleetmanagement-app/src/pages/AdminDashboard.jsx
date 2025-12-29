import React from "react";
import Navbar from "../components/NavBar.jsx";
import AddFleetForm from "../components/AddFleetForm";
import FleetCard from "../components/FleetCard";

const AdminDashboard=({fleets,addFleet,deleteFleet,updateDriver,setIsAuth})=>{
    return (
        <>
        <Navbar setIsAuth={setIsAuth} />
        <div style={{padding:"20px"}}>
            <h2>Fleet Mangement Dashboard</h2>

            <AddFleetForm addFleet={addFleet} />

            <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(3,1fr)",
                gap:"20px",
                marginTop:"20px",
            }}
            >
                {fleets.length ===0 && <p> No Fleets avialable</p>}
                {fleets.map((fleet)=> (
                    <FleetCard key={fleet.id}
                    fleet={fleet}
                    onDelete={deleteFleet}
                    onUpdate={updateDriver}
                    />
                ))}
            </div>

        </div>
        </>
    );
};

export default AdminDashboard;