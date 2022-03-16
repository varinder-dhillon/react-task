import React from "react";
import Datalist from "../sections/Datalist";
import Classes from "./Main.module.css"
function Main () {
    return (
        <div className="container">
            <div className={Classes.mainHeading}>
                <h1>User data</h1>
            </div>
            <div className={Classes.dataList}>
                <Datalist />
            </div>
        </div>
    )
}

export default Main;