

export default function ContactBoxComponent(props) {
    return (
    <>
           
             
                <div className="flex flex-col w-full p-4  bg-gray-800 rounded-lg ">
                    <div className="py-1  text-gray-200">
                        <p className=" text-xl font-bold"> {props.ContactTitle}</p>
                    </div>
                 
                    <div className="py-1  text-gray-400">
                        <p className=" text-sm">{props.ContactDescription}</p>
                    </div>



                </div>
            
        </>
    )
  }
  