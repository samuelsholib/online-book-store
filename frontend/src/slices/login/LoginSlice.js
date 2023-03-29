import { createSlice } from '@reduxjs/toolkit'
import { loadState } from '../../app/localStorage'

const persistedState = loadState();

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        value: persistedState && persistedState.user ? 
        persistedState.user.value
        :{
            userid: -1,
            username: "",
            firstName: "",
            lastName: "",
            roleType: null,
        } 
        

    },
    reducers: {
        signin: (state, action) => {
            //update state with user info
            state.value = {
                userid: action.payload.userid,
                username: action.payload.username,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                roleType: action.payload.roleType,
            }
        },
        editAccount: (state, action) => {
            //update state with user info
            state.value = {
                ...state.value,
                username: action.payload.username,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            }
        },
        signout: (state) => {
            //remove user info
            state.value = {
                userid: -1,
                username: "",
                firstName: "",
                lastName: "",
                roleType: null,

            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { signin, editAccount, signout } = loginSlice.actions

export default loginSlice.reducer