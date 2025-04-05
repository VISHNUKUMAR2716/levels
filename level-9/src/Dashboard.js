import { Outlet,Link } from "react-router-dom";
 function Dashboard(){
    return(
        <div>
            <h2>Dashboard Layout</h2>
            <nav>
                <Link to='profile' className="d-flex">Profile </Link>
                <Link to='Settings'>settings</Link>
            </nav>
            <div>
             <Outlet />
            </div>
        </div>
    )
 }
 export default Dashboard;