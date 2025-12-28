import React, {useState,useCallback} from "react";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App(){
  const [isAuth,setIsAuth]=useState(false);
  const [fleets,setFleets]=useState([]);

  const addFleet=useCallback((fleet)=> {
    setFleets((prev)=>[...prev,fleet]);
  },[]);
  const deleteFleet=useCallback((id)=>{
    if(window.confirm("Are you Sure?")){
      setFleets((prev)=> prev.filter((f)=>f.id!==id));
    }
  },[]);
  const updateDriver=useCallback((id)=>{
    const newName=prompt("Enter new Driver name");
    if(newName===null || !newName.trim()) return;

    setFleets((prev)=> prev.map((f)=>f.id===id ? {...f,driver:newName.trim()} :f))
  },[]);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
      <Route 
         path="/dashboard"
         element={
          <ProtectedRoute isAuth={isAuth}>
            <AdminDashboard 
               fleets={fleets}
               addFleet={addFleet}
               deleteFleet={deleteFleet}
               updateDriver={updateDriver}
               setIsAuth={setIsAuth}
            />
          </ProtectedRoute>
         }
      />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;