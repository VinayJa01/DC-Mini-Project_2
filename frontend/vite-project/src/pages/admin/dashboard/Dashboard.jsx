import React, { useContext } from 'react'
import Layout from '../../../components/layout/Layout'
import myContext from '../../../context/data/myContext';
import { Button } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';

// ... (imports)

function Dashboard() {
    // ... (other code)

    return (
        <Layout>
            <div className="py-10">
                {/* ... (other code) */}

                {/* Line */}
                <hr className={`border-2 ${mode === 'dark' ? 'border-gray-300' : 'border-gray-400'}`} />

                {/* Table */}
                <div className="">
                    <div className='container mx-auto px-4 max-w-7xl my-5'>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
                            {/* table */}
                            <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
                                {/* thead */}
                                {/* ... (thead code) */}
                                
                                {/* tbody */}
                                {getAllBlog.length > 0 ? (
                                    <tbody>
                                        {getAllBlog.map((item, index) => {
                                            const { thumbnail, date, id } = item;
                                            console.log(item)
                                            return (
                                                <tr key={id} className="border-b-2" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }}>
                                                    {/* ... (td elements) */}
                                                    <td onClick={() => deleteBlogs(id)} style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                        <button className=' px-4 py-1 rounded-lg text-white font-bold bg-red-500'>
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                ) : (
                                    <tbody>
                                        <tr>
                                            <td colSpan="6">Not Found</td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;
