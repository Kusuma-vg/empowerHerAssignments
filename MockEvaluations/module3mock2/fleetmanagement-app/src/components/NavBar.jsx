import {useNavigate} from "react-router-dom";

const Navbar=({setIsAuth})=>{
    const navigate=useNavigate();

    const handleLogout=()=>{
        setIsAuth(false);
        navigate("/");
    };
    return (
        <nav style={{
            display:"flex",
            justifyContent:"space-between",
            padding:"12px 20px",
            backgroundColor:"#1f2937",
            color:"white"}}> 
            <h3>Fleet Management</h3>
            <button onClick={handleLogout}
            style={{
                backgroundColor:"gray",
                color:"white",
                padding:"6px 12px",
                cursor:"pointer",}}>Logout</button>

            </nav>
    )
}
export default Navbar;