// import { setAllJobs } from '@/redux/jobSlice'
// import { JOB_API_END_POINT } from '@/utils/constant'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// const useGetAllJobs = () => {
//     const dispatch = useDispatch();
//     const {searchedQuery} = useSelector(store=>store.job);
//     useEffect(()=>{
//         const fetchAllJobs = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,{withCredentials:true});
//                 if(res.data.success){
//                     dispatch(setAllJobs(res.data.jobs));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchAllJobs();
//     },[])
// }

// export default useGetAllJobs

import { setAllJobs, setTotalPages } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const { searchedQuery, currentPage, filterLocation, filterSalary } = useSelector(store => store.job);

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const queryParams = new URLSearchParams({
                    keyword: searchedQuery || "",
                    location: filterLocation || "",
                    salary: filterSalary || "",
                    page: currentPage || 1,
                    limit: 6
                });

                const res = await axios.get(`${JOB_API_END_POINT}/get?${queryParams.toString()}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                    dispatch(setTotalPages(res.data.totalPages || 1));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllJobs();
    }, [searchedQuery, currentPage, filterLocation, filterSalary, dispatch]);
}

export default useGetAllJobs;