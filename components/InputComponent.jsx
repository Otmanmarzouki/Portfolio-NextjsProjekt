export default function InputComponent(props) {
  return (
    <>
        <div className=" w-full relative group">
          <input
            type="text"
            id="username"
            required
            className="block autofill:bg-transparent p-2  w-full text-sm  bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
            value={props.value}
            onChange={props.onChange}
          />
          <label
            htmlFor="username"
            className="transform transition-all absolute top-0 left-0 items-center text-gray-600 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            {props.label}
          </label>
        </div>
      
    </>
  );
}
