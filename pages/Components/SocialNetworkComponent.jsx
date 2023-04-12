import {AiFillLinkedin, AiOutlineGoogle} from 'react-icons/ai'

import {BsGithub} from 'react-icons/bs'

export default function SidebarSubTittle(props) {
    return (
    <>
            
                <div className="flex flex-row space-x-4  justify-center ">
                    
                    <div className="py-2 flex justify-center bg-gray-900 rounded-lg w-10  hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef]   text-white ">
                        <AiFillLinkedin/>
                    </div>
                    <div className="py-2  flex justify-center bg-gray-900 rounded-lg  w-10 hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef]   text-white">
                    <AiOutlineGoogle/>
                    </div>
                    <div className="py-2 flex justify-center bg-gray-900 rounded-lg w-10  hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef]   text-white">
                    <BsGithub/>
                    </div>

                </div>
                
        </>
    )
  }