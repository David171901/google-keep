import React from 'react'

// IMPORT ICONS
import { AiOutlineSearch,AiOutlineSetting,AiOutlineUnorderedList } from 'react-icons/ai';
import {IoIosRefresh} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {

    const GoogleKeepLogo = <img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png' alt='logo' className='w-10'/>

    return (
        <div className='w-full border-b-0 shadow-lg py-2'>
            <div className='flex justify-between items-center space-x-5'>
                {/* NAVBAR LEFT */}
                <div className='flex items-center justify-center'>
                    <button className='p-3 hover:bg-gray-100 rounded-full transition duration-200 ease-linear mr-2 ml-4'>
                        <GiHamburgerMenu className='text-2xl'/>
                    </button>
                    {GoogleKeepLogo}
                    <h3 className='text-2xl font-semibold ml-2 font-sans'>Keep</h3>
                </div>
                {/* NAVBAR CENTER */}
                <div className="max-w-lg w-full lg:max-w-xl">
                    <label className="sr-only">Search </label>
                    <form className="relative">
                        <button type="submit" className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <AiOutlineSearch className='text-xl'></AiOutlineSearch>
                        </button>
                        <input type="text" className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-gray-200 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-gray-100 focus:text-gray-900 transition duration-150 ease-in-out text-lg" placeholder="Search what you want"/>
                    </form>
                </div>
                {/* NAVBAR RIGHT */}
                <div className='flex justify-center items-center'>
                    <button className='p-3 hover:bg-gray-100 rounded-full transition duration-200 ease-linear mr-2'>
                        <IoIosRefresh className='text-2xl'/>
                    </button>
                    <button className='p-3 hover:bg-gray-100 rounded-full transition duration-200 ease-linear mr-2'>
                        <AiOutlineUnorderedList className='text-2xl'/>
                    </button>
                    <button className='p-3 hover:bg-gray-100 rounded-full transition duration-200 ease-linear mr-8'>
                        <AiOutlineSetting className='text-2xl'/>
                    </button>
                    <button className='p-3 hover:bg-gray-100 rounded-full transition duration-200 ease-linear mr-2'>
                        <TbGridDots className='text-2xl'/>
                    </button>
                    <button className='rounded-full mr-8 bg-green-900 p-2 px-3'>
                        <p className='text-xl text-white font-bold'>D</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header