import React from 'react'

function SearchInput() {
    return (
        <div className='mt-5'>
            <h2 className="capitalize text-center text-[20px] text-gray-400 mb-3">
                search what you need
            </h2>
            <div className="flex justify-center ">
                <div className=" flex bg-gray-100 p-1 px-5 gap-2 divide-x rounded-full">
                <div className="flex items-center ">
                    <input type="text" placeholder='Location' className='p-2 outline-none bg-transparent' />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                </div>
                <div className="p-2 outline-none bg-transparent text-gray-400">
                    <input type="date" name="" id="" className='p-2 outline-none bg-transparent' />
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default SearchInput