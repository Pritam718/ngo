import React from 'react'

const Join = () => {
  return (
    <div className='flex justify-center m-10 py-5 '>
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase  text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border hover:border-yellow-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
                
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 hover:border-yellow-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase  text-gray-700 text-xs font-bold mb-2"
                  for="grid-address"
                >
                  Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border hover:border-yellow-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-address"
                  type="text"
                  placeholder=""
                />
                
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase  text-gray-700 text-xs font-bold mb-2"
                  for="grid-ph"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border hover:border-yellow-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-ph"
                  type="number"
                  placeholder=""
                />
                
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-age"
                >
                  Age
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 hover:border-yellow-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-age"
                  type="number"
                  placeholder=""
                />
              </div>
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase  text-gray-700 text-xs font-bold mb-2"
                  for="grid-email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border hover:border-yellow-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-email"
                  type="email"
                  placeholder=""
                />
                
              </div>
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase  text-gray-700 text-xs font-bold mb-2"
                  for="grid-des"
                >
                  Write About Yourself
                </label>
                <input
                  className="w-full bg-gray-200 text-gray-700 border hover:border-yellow-300 rounded py-3 px-4 mb-3  focus:outline-none focus:bg-white"
                  id="grid-des"
                  type="text"
                  placeholder=""
                />
                
              </div>
              <div className='flex justify-center'>
              <button className='text-2xl text-customColor font-bold border-2 border-customColor rounded-full p-2 hover:bg-customColor hover:text-white ' onClick={()=>{
                alert("Submitted");
            
              }}>Submit</button>

              </div>
          </form>
        </div>
        
  )
}

export default Join