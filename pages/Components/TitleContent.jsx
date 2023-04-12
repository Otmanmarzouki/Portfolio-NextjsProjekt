

export default function TitleContent(props) {
  return (
  <>
  <div className="flex flex-row space-x-4 w-full">
    <div>
    <h1 className="text-3xl font-bold justify-center ">{props.title}</h1>
    </div>
    <div className=" grow p-4">
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/3 h-1 "></div>
    </div>

   </div>
  </>
  )
}
