import Header from "../components/Header";
import { Outlet } from "react-router"

const HomeLayout=()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default HomeLayout;