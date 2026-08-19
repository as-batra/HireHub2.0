import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        allAdminJobs:[],
        singleJob:null, 
        searchJobByText:"",
        allAppliedJobs:[],
        searchedQuery:"",
        currentPage: 1,
        totalPages: 1,
        filterLocation: "",
        filterSalary: "",
    },
    reducers:{
        // actions
        setAllJobs:(state,action) => {
            state.allJobs = action.payload;
        },
        setSingleJob:(state,action) => {
            state.singleJob = action.payload;
        },
        setAllAdminJobs:(state,action) => {
            state.allAdminJobs = action.payload;
        },
        setSearchJobByText:(state,action) => {
            state.searchJobByText = action.payload;
        },
        setAllAppliedJobs:(state,action) => {
            state.allAppliedJobs = action.payload;
        },
        setSearchedQuery:(state,action) => {
            state.searchedQuery = action.payload;
        },
        setCurrentPage:(state,action) => {
            state.currentPage = action.payload;
        },
        setTotalPages:(state,action) => {
            state.totalPages = action.payload;
        },
        setFilterLocation:(state,action) => {
            state.filterLocation = action.payload;
        },
        setFilterSalary:(state,action) => {
            state.filterSalary = action.payload;
        }
    }
});
export const {
    setAllJobs, 
    setSingleJob, 
    setAllAdminJobs,
    setSearchJobByText, 
    setAllAppliedJobs,
    setSearchedQuery,
    setCurrentPage,
    setTotalPages,
    setFilterLocation,
    setFilterSalary
} = jobSlice.actions;
export default jobSlice.reducer;