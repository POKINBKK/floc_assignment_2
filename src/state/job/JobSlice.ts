import { createSlice } from "@reduxjs/toolkit"

interface JobState {
    isLogin: boolean;
    isJobSelected: boolean;
    isShowLoginPopup: boolean;
    jobItem: {
        jobName: string;
        jobDetail: string;
        image: string;
    }
}

const initialState: JobState = {
    isLogin: false,
    isJobSelected: false,
    isShowLoginPopup: false,
    jobItem: {
        jobName: "",
        jobDetail: "",
        image: ""
    }
}

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        setIsLogin: (state, action) => {
            state.isLogin = action.payload
        },
        setIsShowLoginPopup: (state, action) => {
            state.isShowLoginPopup = action.payload
        },
        setIsJobSelected: (state, action) => {
            state.isJobSelected = action.payload
        },
        setJobItem: (state, action) => {
            state.jobItem = action.payload
        },
        clearJobItem: (state) => {
            state.jobItem = {
                jobName: "",
                jobDetail: "",
                image: ""
            }
        }
    },
})

export const {setIsLogin, setIsShowLoginPopup, setIsJobSelected, setJobItem, clearJobItem} = jobSlice.actions;

export default jobSlice.reducer;
