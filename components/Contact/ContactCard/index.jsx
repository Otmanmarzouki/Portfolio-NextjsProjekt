export default function ContactBoxComponent({ ContactTitle, ContactDescription }) {
    return (
      <div className="flex flex-col w-full lg:rounded-xl bg-[#292929] p-4">
        <div className="py-1 text-gray-200">
          <p className="text-xl font-bold">{ContactTitle}</p>
        </div>
        <div className="py-1 text-gray-400">
          <p className="text-sm">{ContactDescription}</p>
        </div>
      </div>
    );
  }
  