import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { setCurrentPage } from '@/redux/jobSlice';
import { Button } from './ui/button';

const Jobs = () => {
    // Call hook to fetch jobs from backend dynamically based on Redux filter state
    useGetAllJobs();

    const dispatch = useDispatch();
    const { allJobs, currentPage, totalPages } = useSelector(store => store.job);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5 px-4'>
                <div className='flex gap-5'>
                    <div className='w-[20%] shrink-0'>
                        <FilterCard />
                    </div>
                    
                    <div className='flex-1 flex flex-col h-[88vh] pb-5'>
                        {
                            allJobs.length <= 0 ? (
                                <div className='flex items-center justify-center h-64 text-gray-500 font-semibold text-lg'>
                                    No jobs found matching your criteria.
                                </div>
                            ) : (
                                <>
                                    <div className='flex-1 overflow-y-auto pr-2'>
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                            {
                                                allJobs.map((job) => (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -20 }}
                                                        transition={{ duration: 0.3 }}
                                                        key={job?._id}>
                                                        <Job job={job} />
                                                    </motion.div>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    {/* Pagination Controls */}
                                    {totalPages > 1 && (
                                        <div className='flex justify-center items-center gap-4 mt-6 py-4 bg-white border-t border-gray-100 shadow-sm rounded-lg'>
                                            <Button 
                                                onClick={handlePrevPage} 
                                                disabled={currentPage === 1}
                                                variant="outline"
                                                className="border-blue-300 text-blue-600 hover:bg-blue-50 disabled:opacity-50"
                                            >
                                                Previous
                                            </Button>
                                            <span className='font-semibold text-gray-700'>
                                                Page {currentPage} of {totalPages}
                                            </span>
                                            <Button 
                                                onClick={handleNextPage} 
                                                disabled={currentPage === totalPages}
                                                variant="outline"
                                                className="border-blue-300 text-blue-600 hover:bg-blue-50 disabled:opacity-50"
                                            >
                                                Next
                                            </Button>
                                        </div>
                                    )}
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs