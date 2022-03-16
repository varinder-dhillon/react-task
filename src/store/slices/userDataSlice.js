import { createSlice } from "@reduxjs/toolkit";

const UserData = [
    {
        name : "Varinder",
        age : 21,
        email : "varinderdhilloninfo@gmail.com",
        mobile : "9781531918"
    },
    {
        name : "johm",
        age : 25,
        email : "john@gmail.com",
        mobile : "0123456789"
    },{
        name : "Julie",
        age : 23,
        email : "julie@gmail.com",
        mobile : "0987654321"
    },{
        name : "Dwayne",
        age : 30,
        email : "dwayne@gmail.com",
        mobile : "5655464565"
    }
]


const userDataSlice = createSlice({
    name : "userDataSlice",
    initialState : {
        userData : UserData,
        openModal : false,
        userModalData : [],
        currUser : undefined
    },
    reducers : {
        updateUser (state , action) {
            let id = state.userData.findIndex( user =>  user.name === state.currUser)
            state.userData[id] = action.payload;
        },
        deleteUser (state , action){
            console.log(action.payload);
            state.userData = state.userData.filter(user => user.name !== action.payload)
        },
        openModalHandler (state , action){
            state.openModal = true;
            state.currUser = action.payload;
            if(action.payload){
                state.userModalData = state.userData.filter((user) => user.name === action.payload);
            }
        },
        closeModalhandler (state ){
            state.openModal = false;
        }
    }
})
export const {updateUser , deleteUser , openModalHandler , closeModalhandler} = userDataSlice.actions;
export default userDataSlice.reducer;
