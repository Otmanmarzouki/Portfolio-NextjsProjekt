
import {MdOutlinePhoneIphone} from 'react-icons/md'
import {ImLocation} from 'react-icons/im'
import {MdAlternateEmail} from 'react-icons/md'
import {BsFillCalendarWeekFill} from 'react-icons/bs'
export default function SidebarSubTittle(props) {
    return (
    <>
            
                <div className="flex flex-col justify-center bg-gray-900 rounded-lg p-4  space-y-4">
                    
                    <div className=" flex flex-row space-x-2 ">
                       <div className='bg-black  flex py-2 w-10  justify-center items-center rounded-lg hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef]   text-white'>
                        <MdOutlinePhoneIphone/>
                        
                       </div>
                       <div className='flex flex-col'>
                        <span className='text-xs font-semibold text-gray-500'>Handy</span>
                        <span className='font-semibold '>+212644469203</span>
                       </div>
                    </div>
                    <div className=" flex flex-row space-x-2">
                    <div className='bg-black flex py-2 w-10 justify-center items-center  rounded-lg hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef]   text-white'>
                        <ImLocation/>
                        
                       </div>
                       <div className='flex flex-col'>
                        <span className='text-xs font-semibold text-gray-500'>Ort</span>
                        <span className='text-sm font-semibold '>Meknes.Marokko</span>
                       </div>
                       
                    </div>
                    <div className=" flex flex-row space-x-2 ">
                    <div className='bg-black flex py-2  w-10 justify-center items-center  rounded-lg hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef]   text-white'>
                        <MdAlternateEmail/>
                        
                       </div>
                       <div className='flex flex-col'>
                        <span className='text-xs font-semibold text-gray-500'>Email</span>
                        <span className=' text-sm font-semibold '>Marzouki53@gmail.com</span>
                       </div>
                       
                    </div >
                    <div className=" flex flex-row  space-x-2">
                    <div className='bg-black flex py-2  justify-center items-center  rounded-lg w-10 hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef]   text-white'>
                        <BsFillCalendarWeekFill/>
                       </div>
                       <div className='flex flex-col'>
                        <span className='text-xs font-semibold text-gray-500'>Geburtstag</span>
                        <span className=' text-sm font-semibold '>07-11-1991</span>
                       </div>
                       
                    </div>

                </div>
                
        </>
    )
  }