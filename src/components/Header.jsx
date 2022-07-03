import React from 'react'
import { AiOutlineSearch,AiOutlineSetting,AiOutlineUnorderedList } from 'react-icons/ai';
import {IoIosRefresh} from 'react-icons/io'

const Header = () => {

    const logo = <img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png' alt='logo'></img>
    const icon = <img src='https://lh3.googleusercontent.com/ogw/ADea4I5T7iCJa9TXQVvUTSgED3EtVklQoKKHsiKM1rFA=s32-c-mo' alt='icon' className='rounded-full'></img>

  return (
    <div className='w-full border-b-0 shadow-lg py-2'>
        <div className='container m-auto flex justify-between items-center space-x-5'>
            {/* logo */}
            <div className='flex items-center'>
                {logo}
                <h3 className='text-2xl font-semibold '>Keep</h3>
            </div>
            {/* search */}
            <div className="max-w-lg w-full lg:max-w-xl">
                <label for="search" className="sr-only">Search </label>
                <form className="relative" onSubmit={(e)=>{e.preventDefault()}}>
                <button type="submit" id="searchsubmit" className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AiOutlineSearch className='text-xl'></AiOutlineSearch>
                </button>
                <input type="text" className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-gray-200 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-gray-100 focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Search"/>
                </form>
            </div>
            <div className='space-x-4'>
                <button className='p-2 hover:bg-gray-100 rounded-full transition duration-200 ease-linear'>
                    <IoIosRefresh className='text-2xl'/>
                </button>
                <button className='p-2 hover:bg-gray-100 rounded-full transition duration-200 ease-linear'>
                    <AiOutlineUnorderedList className='text-2xl'/>
                </button>
                <button className='p-2 hover:bg-gray-100 rounded-full transition duration-200 ease-linear'>
                    <AiOutlineSetting className='text-2xl'/>
                </button>
                <button className='p-2 hover:bg-gray-100 rounded-full transition duration-200 ease-linear'>
                    {icon}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header