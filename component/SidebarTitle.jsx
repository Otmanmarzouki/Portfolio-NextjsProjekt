
import Image from "next/image"
export default function SidebarTitle(props) {
    return (
    <>
            
                <div className="flex  justify-center">
                    
                    <div className="py-2 ">
                        <h6 className="font-bold text-xl">{props.SideBarTitle}</h6>
                    </div>

                </div>
                
        </>
    )
  }
  