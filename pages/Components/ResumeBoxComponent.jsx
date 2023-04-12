

export default function ResumeBoxComponent(props) {
    return (
    <>
           
             
                <div className="flex flex-col  w-full p-4">
                <div className="py-1  text-gray-400">
                        <p className=" text-sm"> {props.ResumeDate}</p>
                    </div>
                    <div className="py-1  text-gray-200">
                        <p className=" text-lg font-bold"> {props.ResumePoste}</p>
                    </div>
                 
                    <div className="py-1  text-gray-400">
                        <p className=" text-sm">{props.ResumeDescription}</p>
                    </div>



                </div>
            
        </>
    )
  }
  