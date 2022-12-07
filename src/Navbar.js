import Register from "./Pages/Register"
import List from "./Pages/List"

import Home from "./Pages/Home"
 function Navbar(){
    return <nav className="nav">
        
        <a href="/" onClick={Home} className="site-title">MyApp</a>
        <ul>
            <li className="active">
            <a href="/register" onClick={Register}>Register</a> 
                </li>
                <li className="active">
                <a href="/list" onClick={List}>List</a> 
            </li>
        </ul>
    </nav>
    
}
export default Navbar