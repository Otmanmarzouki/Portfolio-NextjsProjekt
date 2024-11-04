

export default function ResumeTitleComponent(props) {
    return (
    <>
            
                <div className="flex flex-row ">
                    <div className="px-2 flex justify-center items-center text-3xl text-orange-600">
                       {props.RsumeIcon}
                    </div>
                    <div className="py-2 ">
                        <h6 className="font-bold text-2xl ">{props.ResumeTitle}</h6>
                    </div>

                </div>
                
        </>
    )
  }
  