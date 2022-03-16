import React , {useState} from "react";
import { useDispatch , useSelector} from "react-redux";
import { closeModalhandler , deleteUser , updateUser } from "../../store/slices/userDataSlice";

import classes from './Modal.module.css'
function Modal () {
    const userData = useSelector(user => user.userDataSlice.userModalData);
    const [userName , setUserName ] = useState(userData[0].name);
    const [userEmail , setUserEmail ] = useState(userData[0].email);
    const [userAge , setUserAge ] = useState(userData[0].age);
    const [userMobile , setUserMobile ] = useState(userData[0].mobile);
    const dispatch = useDispatch();

    
    const onUserNameChangeHandler =(e) => {
        setUserName(e.target.value)
    }
    const onUserAgeChangeHandler =(e) => {
        setUserAge(e.target.value)
    }
    const onUserEmailChangeHandler =(e) => {
        setUserEmail(e.target.value)
    }
    const onUserMobileChangeHandler =(e) => {
        setUserMobile(e.target.value)
    }
    
    const onDeleteHandler = () => {
        dispatch(deleteUser(userData[0].name))
        dispatch(closeModalhandler())
    }

    const onUserUpdate = () => {
        dispatch(updateUser({
            name : userName,
            mobile : userMobile,
            age : userAge,
            email : userEmail
        }))
        dispatch(closeModalhandler())
    }
    return (
        <>
            <div className={classes.modalBackdrop} onClick={()=> dispatch(closeModalhandler())}></div>
            <div className={classes.modalDialog}>
                <div className={classes.dialogHeader}>
                    <h2>User Information</h2>
                </div>
                <div className={classes.dialogContent}>
                    <div className={classes.row}>
                        <div className={classes.w_50}>
                            <div className={classes.formGroup}>
                                <label htmlFor="userName">Name:</label>
                                <input type="text" value={userName} onChange={onUserNameChangeHandler} id="userName"/>
                            </div>
                        </div>
                        <div className={classes.w_50}>
                        <div className={classes.formGroup}>
                                <label htmlFor="userAge">Age:</label>
                                <input type="text" value={userAge} onChange={onUserAgeChangeHandler} id="userAge"/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.w_50}>
                            <div className={classes.formGroup}>
                                <label htmlFor="userEmail">E-mail:</label>
                                <input type="text" value={userEmail} onChange={onUserEmailChangeHandler} id="userEmail" />
                                
                            </div>
                        </div>
                        <div className={classes.w_50}>
                        <div className={classes.formGroup}>
                                <label htmlFor="userMobile">Mobile:</label>
                                <input type="text" value={userMobile} onChange={onUserMobileChangeHandler} id="userMobile" />
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.modalActions}>
                    <button className={classes.green} onClick={onUserUpdate}>Update</button>
                    <button className={classes.red} onClick={onDeleteHandler}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default Modal;
