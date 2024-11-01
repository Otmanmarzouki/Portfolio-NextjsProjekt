
import Image from "next/image"
export default function SidebarSubTittle(props) {
    return (
    <>
            
                <div className="flex  justify-center bg-gray-900 rounded-lg">
                    
                    <div className="py-2 ">
                        <h6 className="text-gray-300">{props.SidebarSubtitle}</h6>
                    </div>

                </div>
                
        </>
    )
  }