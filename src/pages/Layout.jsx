import React from "react";
import  { Outlet } from "react-router-dom";
import TopMenu from "../components/nav/TopMenu";

const Layout = () => {
    return (
        <>
            <header>
                <TopMenu />
            </header>

            {/* <main className="container"> */}
                <Outlet />
            {/* </main> */}

            <footer>
            </footer>
        </>
    )
}

export { Layout }