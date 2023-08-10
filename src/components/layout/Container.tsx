import { Outlet } from "react-router-dom";
import Header from "./Header"

const Container = () => {
    return (
        <div className="bg-white">
            <Header />
            <Outlet />
        </div>
    )
}

export default Container