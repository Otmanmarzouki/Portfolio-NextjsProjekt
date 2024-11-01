
export default function EmailTitleComponent(props) {
    return (
    <>
                <div className="flex flex-col p-4">
                    <div className="text-gray-500 text-2xl ">
                       {props.firstText}
                    </div>
                    <div className=" text-white font-semibold text-2xl ">
                        {props.secondText}
                    </div>

                </div>
                
        </>
    )
  }
  