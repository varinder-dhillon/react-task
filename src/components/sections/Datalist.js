import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { openModalHandler } from "../../store/slices/userDataSlice";
import classes from "./Datalist.module.css"


function Datalist () {
    const userData = useSelector(user => user.userDataSlice.userData)
    const dispatch = useDispatch()
    return (
    <ul>
        {userData.map( (user , userIdx) => (
            <li className={classes.userDataRow} key={`user${userIdx}`}>
                    <div className={classes.leftSide}>
                        {user.name}
                    </div>
                    <div className={classes.rightSide}>
                        <button onClick={() => dispatch(openModalHandler(user.name))}>Show User Data</button>
                    </div>
            </li>
        ))}
    </ul>
    )
}

export default Datalist;