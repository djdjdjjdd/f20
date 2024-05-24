import { Navigation } from "../../components/navigation";
import {SideBar} from "../../components/sidebar";
import {Footer} from "../../components/Footer";
import { Outlet } from "react-router-dom";
export function Index(){
    return (
        <>
            {/**navigation */}
            <Navigation></Navigation>
            {/**sidebar */}
            <SideBar></SideBar>
            {/**content */}
            <Outlet></Outlet>
            {/**footer */}
            <Footer></Footer>
        </>
    )
}