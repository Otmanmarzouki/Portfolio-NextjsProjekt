
import Image from "next/image"
export default function ExpertiseTitleComponent(props) {
    return (
    <>
            
                <div className="flex flex-row  justify-center">
                    <div className="px-2">
                       {props.IconExpertise}
                    </div>
                    <div className="py-2 ">
                        <h6 className="font-bold ">{props.ExpertiseTitle}</h6>
                    </div>

                </div>
                
        </>
    )
  }
  