import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Router = () => {
    return (
        <>
        <div>
            <ul>
                <li>
                    <li>
                        <Link to="/">Home </Link>
                    </li>
                    <li>
                        <Link to="/buttons">Buttons</Link>
                    </li>
                </li>
            </ul>
        </div>
        
        <Outlet />

        </>
    );
}