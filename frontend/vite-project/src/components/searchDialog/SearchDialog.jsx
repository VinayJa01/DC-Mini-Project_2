import React, { useContext, useEffect } from 'react';  // Import useEffect
import Layout from '../../../components/layout/Layout';
import myContext from '../../../context/data/myContext';
import { Button } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import SearchDialog from './SearchDialog';

function Dashboard() {
    const context = useContext(myContext);
    const { mode, getAllBlog, deleteBlogs } = context;

    const navigate = useNavigate();

    // Logout Function
    const logout = () => {
        localStorage.clear();
        navigate('/');
    };

    // useEffect to scroll to the top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <div className="py-10">
                <div className="flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8">
                    <div className="left">
                        {/* ... (existing code) */}
                    </div>
                    <div className="right">
                        {/* ... (existing code) */}
                        <div className=" flex gap-2 mt-2">
                            <Link to={'/createblog'}>
                                <div className=" mb-2">
                                    <Button
                                        style={{
                                            background: mode === 'dark'
                                                ? 'rgb(226, 232, 240)'
                                                : 'rgb(30, 41, 59)',
                                            color: mode === 'dark'
                                                ? 'black'
                                                : 'white'
                                        }}
                                        className='px-8 py-2'
                                    >
                                        Create Blog
                                    </Button>
                                </div>
                            </Link>
                            <div className="mb-2">
                                <Button
                                    onClick={logout}
                                    style={{
                                        background: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : 'rgb(30, 41, 59)',
                                        color: mode === 'dark'
                                            ? 'black'
                                            : 'white'
                                    }}
                                    className='px-8 py-2'
                                >
                                    Logout
                                </Button>
                            </div>
                        </div>
                        <SearchDialog />
                    </div>
                </div>

                {/* Line */}
                <hr className={`border-2 ${mode === 'dark' ? 'border-gray-300' : 'border-gray-400'}`} />

                {/* Table */}
                <div className="">
                    {/* ... (existing code) */}
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;
