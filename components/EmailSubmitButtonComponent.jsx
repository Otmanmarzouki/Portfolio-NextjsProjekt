
export default function EmailSubmitButtonComponent(props) {
  return (
    <>
    <div className="px-3">
      <div className="transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3 ">
        <input type='submit' className=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white dark:text-white " value="Submit" onClick={props.onClick} />

      </div>
      </div>
    </>
  )
}
