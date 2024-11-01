

export default function TitleContent(props) {
  return (
  <>
  <div className="flex flex-row  w-full space-x-6">
    <div className="flex  justify-center items-center ">
    <h1 className=" text-3xl font-bold ">{props.title}</h1>
    </div>
    <div className=" flex w-1/2  items-center">
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/2 h-0.5 "></div>
    </div>

   </div>
  </>
  )
}
